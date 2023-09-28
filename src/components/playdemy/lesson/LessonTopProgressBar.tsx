// LessonTopProgressBar.tsx
import React from 'react';




type ProgressBarProps = {
    slides: LessonInfoType[];  // Update the prop to receive the slides array directly
    currentSlideIndex: number;
    onUnderstand: () => void;
    onDontUnderstand: () => void;
};

const ProgressBar: React.FC<ProgressBarProps> = ({ slides, currentSlideIndex, onUnderstand, onDontUnderstand }) => {
    return (
        <div>
            {slides.map((slide, idx) => (
                <div 
                    key={slide.slideNumber}  // Use slideNumber as the key
                    style={{
                        width: '20px',
                        height: '20px',
                        backgroundColor: idx === currentSlideIndex ? 'blue' : 'grey',
                        display: 'inline-block',
                        marginRight: '5px',
                        textAlign: 'center',
                        lineHeight: '20px'
                    }}
                >
                    {slide.slideNumber}
                </div>
            ))}
            <button onClick={onUnderstand}>I Understand</button>
            <button onClick={onDontUnderstand}>I Don't Understand</button>
        </div>
    );
}

export default ProgressBar;
