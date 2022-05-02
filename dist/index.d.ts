import React, { MouseEventHandler } from 'react';

interface CustomButtonProps {
    style?: React.CSSProperties;
    width?: string;
    height?: string;
    primary?: string;
    secondary?: string;
    color?: string;
    onClick?: MouseEventHandler<HTMLInputElement>;
    text: string;
}

export { CustomButtonProps };
