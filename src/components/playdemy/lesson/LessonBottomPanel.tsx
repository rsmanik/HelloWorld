import React from 'react';

type LessonBottomPanelProps = {
    currentTemplateType: string; // new prop to get the type of the current template
    onNextClick: () => void;
    onConfirmClick: () => void;
    onRememberClick: () => void;
    onSeeAgainClick: () => void;
};

const LessonBottomPanel: React.FC<LessonBottomPanelProps> = ({
    currentTemplateType,
    onNextClick,
    onConfirmClick,
    onRememberClick,
    onSeeAgainClick,
}) => {
    return (
        <div className="lesson_bottom_panel">
            <div id="common_controls" className="controls slides">
                {currentTemplateType === 'slide' && (
                    <a href="#" onClick={e => { e.preventDefault(); onNextClick(); }} className="btn_hover blue_button_wicon">
                        <div>Next</div>
                    </a>
                )}
                {currentTemplateType === 'question' && (
                    <a href="#" onClick={e => { e.preventDefault(); onConfirmClick(); }} className="btn_hover blue_button_wicon">
                        <div>Confirm</div>
                    </a>
                )}
                {currentTemplateType === 'flashcard' && (
                    <>
                        <a href="#" onClick={e => { e.preventDefault(); onRememberClick(); }} className="btn_hover blue_button_wicon">
                            <div>I Remember</div>
                        </a>
                        <a href="#" onClick={e => { e.preventDefault(); onSeeAgainClick(); }} className="btn_hover blue_button_wicon">
                            <div>I want to see the card again</div>
                        </a>
                    </>
                )}
            </div>
        </div>
    );
};

export default LessonBottomPanel;
