import React, { ChangeEvent } from 'react';
import './textInput.css';

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

const defaultStyle = {
    width: '150px',
    height: '35px',
    primaryColor: 'blue',
    color: 'black'
};

const TextInput = (props: CustomTextProps) => {
    const textStyle = {
        width: props.width ?? defaultStyle.width,
        height: props.height ?? defaultStyle.height,
        border: props.primary ?? defaultStyle.primaryColor,
        color: props.color ?? defaultStyle.color
    };

    return (
        <div>
            <input type="text" className="txt-input" style={textStyle}></input>
        </div>
    );
};

export default TextInput;
