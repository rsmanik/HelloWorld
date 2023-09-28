// LessonPage.tsx
import React, { useState } from 'react';

import styles from "./lesson.module.css";

import { Card, CardContent, Typography, Stack, Box, Button, Tabs, Tab, Paper } from '@mui/material';

import LessonContent from '../../playdemy/lesson/LessonContent';
import LessonBottomPanel from '../../playdemy/lesson/LessonBottomPanel';
import ProgressBar from '../../playdemy/lesson/LessonTopProgressBar';
import FinishScreen from '../../playdemy/lesson/LessonFinishScreen';


type LessonInfoType = {
    type: string;
    template_id: string;
    template_info: any;
    slideNumber: number;
};


const LessonPage: React.FC = () => {
    const initialLessons: LessonInfoType[] = [
        {
            "type": "slide",
            "template_id": "bgimg_title_toc",
            "slideNumber": 1,
            "template_info": {
                "bg_img": "https://uploads-ssl.webflow.com/64a5aee90eaa7440ca8f5993/65007674629a8e7b6c2f5f16_slide1_img.jpg",
                "l_title": "SLIDE 1"
            }
        },
        {
            "type": "slide",
            "template_id": "another_slide_id",
            "slideNumber": 2,
            "template_info": {
                "bg_img": "https://path_to_another_image.jpg",
                "l_title": "SLIDE 2"
            }
        },
        {
            "type": "question",
            "template_id": "simple_question",
            "slideNumber": 3,
            "template_info": {
                "question": "What is the capital of France?",
                "options": [
                    "Berlin",
                    "Madrid",
                    "Paris",
                    "Rome"
                ],
                "correct_option": 2  // Indicates that "Paris" is the correct answer (0-indexed)
            }
        },
        {
            "type": "question",
            "template_id": "another_question",
            "slideNumber": 4,
            "template_info": {
                "question": "Which planet is known as the Red Planet?",
                "options": [
                    "Earth",
                    "Mars",
                    "Jupiter",
                    "Venus"
                ],
                "correct_option": 1  // Indicates that "Mars" is the correct answer (0-indexed)
            }
        }
    ];

    const [isLessonComplete, setIsLessonComplete] = useState<boolean>(false);
    const [lessons, setLessons] = useState<LessonInfoType[]>(initialLessons);
    const [currentTemplateIndex, setCurrentTemplateIndex] = useState<number>(0);

    const handleFinishClick = () => {
        if (currentTemplateIndex < lessons.length - 1) {
            setCurrentTemplateIndex(currentTemplateIndex + 1);
        } else {
            setCurrentTemplateIndex(0);
        }
    };

    const handleUnderstand = () => {
        const newLessons = [...lessons];
        newLessons.splice(currentTemplateIndex, 1);

        // Check if this was the last slide
        if (newLessons.length === 0) {
            setIsLessonComplete(true);
            return;
        }

        setLessons(newLessons);
        if (currentTemplateIndex < newLessons.length) {
            setCurrentTemplateIndex(currentTemplateIndex);
        } else {
            setCurrentTemplateIndex(0);
        }
    };


    const handleDontUnderstand = () => {
        const newLessons = [...lessons];
        const misunderstoodSlide = newLessons.splice(currentTemplateIndex, 1)[0];
        newLessons.push(misunderstoodSlide);
        setLessons(newLessons);
        setCurrentTemplateIndex(0);
    };


    const handleNextClick = () => {
        handleUnderstand();
    };

    const handleConfirmClick = () => {
        handleUnderstand();
    };

    const handleRememberClick = () => {
        handleUnderstand();
    };

    const handleSeeAgainClick = () => {
        handleDontUnderstand();
    };


    return (
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100%" gap="20px">
            {isLessonComplete ? (
                <FinishScreen /> 
            ) : (
                <>
                    {/* Top Title */}
                    <Typography variant="h5" style={{ flexGrow: 1 }}>
                        Nuclear Model
                    </Typography>
                    
                    {/* Top Progress Bar */}
                    <ProgressBar
                        slides={lessons}
                        currentSlideIndex={currentTemplateIndex}
                        onUnderstand={handleUnderstand}
                        onDontUnderstand={handleDontUnderstand}
                    />

                    {/* Lesson Content */}
                    <LessonContent lessonInfo={lessons[currentTemplateIndex]} />

                    {/* Bottom Buttons Panel */}
                    <LessonBottomPanel
                        currentTemplateType={lessons[currentTemplateIndex].type}
                        onNextClick={handleNextClick}
                        onConfirmClick={handleConfirmClick}
                        onRememberClick={handleRememberClick}
                        onSeeAgainClick={handleSeeAgainClick}
                    />
                </>
            )}
        </Box>
    );

};

export default LessonPage;
