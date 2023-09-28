import React from 'react';

import '../../playdemy/templates/slide/slideTemplates.module.css';
import '../../playdemy/templates/question/questionTemplates.module.css';

import SlideTemplate1 from '../../playdemy/templates/slide/SlideTemplate1';
import QuestionTemplate3 from '../../playdemy/templates/question/QuestionTemplate3';


type LessonContentProps = {
    lessonInfo: {
        type: string;
        template_id: string;
        template_info: {
            bg_img: string;
            l_title: string;
        };
    };
};


const LessonContent: React.FC<LessonContentProps> = ({ lessonInfo }) => {
    if (lessonInfo.type === 'slide') {
        return <SlideTemplate1 heading={lessonInfo.template_info.l_title} />;
    } 
    else if (lessonInfo.type === 'question') {
        return <QuestionTemplate3 question="Sample Question" />;
    }
    return null;
};


export default LessonContent;
