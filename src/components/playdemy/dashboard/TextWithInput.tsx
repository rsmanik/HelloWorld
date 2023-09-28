import React, { useState, ChangeEvent, KeyboardEvent, forwardRef } from 'react';
import { TextField } from "@mui/material";
import './TextWithInput.css';

interface TextWithInputProps {
    text: string;
    inputPlaceholder: string;
    onInputEnter: (inputValue: string) => void;
}

// Wrap the component with forwardRef
const TextWithInput: React.FC<TextWithInputProps> = forwardRef<HTMLDivElement, TextWithInputProps>(
    ({ text, inputPlaceholder, onInputEnter }, ref) => {

    const [inputValue, setInputValue] = useState<string>("");
    const [inputDisabled, setInputDisabled] = useState<boolean>(false);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    }

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter" && !inputDisabled) {
            onInputEnter(inputValue);
            setInputDisabled(true);
        }
    }

    return (
        <div className="chatWithInput" ref={ref}> {/* Attach the forwarded ref */}
            <p className="greatLetsStart">{text}</p>
            <TextField
                className="textarea"
                color="primary"
                label={inputPlaceholder}
                variant="filled"
                multiline
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                disabled={inputDisabled}
                InputProps={{
                    style: { color: 'white' },
                }}
                autoFocus
            />
        </div>
    );
});

export default TextWithInput;
