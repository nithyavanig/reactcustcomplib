import React, { ChangeEvent } from 'react';
interface CustomTextProps {
    style?: React.CSSProperties;
    width?: string;
    height?: string;
    primary?: string;
    secondary?: string;
    placeholder?: string;
    color?: string;
    onChange?: ChangeEvent<HTMLInputElement>;
}
declare const TextInput: (props: CustomTextProps) => JSX.Element;
export default TextInput;
