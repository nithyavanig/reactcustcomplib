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
declare const CustomButton: (props: CustomButtonProps) => JSX.Element;
export default CustomButton;
