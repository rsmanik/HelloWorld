import { FC, forwardRef } from 'react';

interface TextOnlyProps {
    text: string;
}

// Wrap the component with forwardRef
const TextOnly: FC<TextOnlyProps> = forwardRef<HTMLDivElement, TextOnlyProps>(({ text }, ref) => {
    return (
        <div className="normalChat" ref={ref}>  {/* Attach the forwarded ref */}
            <p className="message">
                {text}
            </p>
        </div>
    );
});

export default TextOnly;
