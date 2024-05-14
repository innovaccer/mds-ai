import * as React from 'react';
import { ButtonAppearance, ButtonType, BaseHtmlProps } from '@/common.type';
export interface ButtonProps extends BaseHtmlProps<HTMLButtonElement> {
    label?: string;
    appearance?: ButtonAppearance;
    type?: ButtonType;
    disabled?: boolean;
    children?: React.ReactNode;
    tabIndex?: number;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    onMouseEnter?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    onMouseLeave?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    'data-test'?: string;
    className?: string;
}
export declare const AIButton: {
    (props: ButtonProps): React.JSX.Element;
    defaultProps: {
        appearance: ButtonAppearance;
    };
};
export default AIButton;
