import React, { MouseEventHandler } from 'react';

export interface CustomButtonProps {
    style?: React.CSSProperties;
    width?: string;
    height?: string;
    primary?: string;
    secondary?: string;
    color?: string;
    onClick?: MouseEventHandler<HTMLInputElement>;
    text: string;
}

const defaultStyle = {
    width: '150px',
    height: '35px',
    primaryColor: 'blue',
    color: 'white'
};

const CustomButton = (props: CustomButtonProps) => {
    const buttonStyle: React.CSSProperties = {
        width: props.width ?? defaultStyle.width,
        height: props.height ?? defaultStyle.height,
        backgroundColor: props.primary ?? props.secondary ?? defaultStyle.primaryColor,
        color: props.color ?? defaultStyle.color
    };

    return (
        <div>
            <input type="button" className="btn-custom" style={buttonStyle} onClick={props.onClick} value={props.text}></input>
        </div>
    );
};

export default CustomButton;
