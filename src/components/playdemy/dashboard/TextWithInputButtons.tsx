import React, { useState, ChangeEvent, KeyboardEvent, forwardRef } from 'react';
import { useNavigate } from 'react-router-dom';

import './TextWithInput.css';

import { TextField } from "@mui/material";
import { Button, Stack } from '@mui/material';


interface TextWithInputButtonProps {
    text: string;
    inputPlaceholder: string;
    onInputEnter: (inputValue: string) => void;
    onOptionClick: (inputValue: string) => void;
}


// Wrap the component with forwardRef
const TextWithInputButton: React.FC<TextWithInputButtonProps> = forwardRef<HTMLDivElement, TextWithInputButtonProps>(
    ({ text, inputPlaceholder, onInputEnter, onOptionClick }, ref) => {

        const navigate = useNavigate();

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

        const handleButtonClick1 = () => {
            console.log('Option 1 was clicked!');
            onOptionClick("option1");
        };

        const handleButtonClick2 = () => {
            console.log('Option 2 was clicked!');
            navigate('/lesson');
        };


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

                <Stack direction="row" spacing={2}>
                    <Button variant="contained" onClick={handleButtonClick1}>Options</Button>
                    <Button variant="contained" onClick={handleButtonClick2}>Lesson</Button>
                </Stack>
            </div>
        );
    });


export default TextWithInputButton;
