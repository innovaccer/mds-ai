import * as React from "react";
import { ButtonAppearance, ButtonType } from "@/common.type";
export interface ButtonProps {
    label?: string;
    appearance?: ButtonAppearance;
    type?: ButtonType;
    disabled?: boolean;
    children?: React.ReactNode;
    tabIndex?: number;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    onMouseEnter?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    onMouseLeave?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    "data-test"?: string;
    className?: string;
}
export declare const Button: {
    (props: ButtonProps): React.JSX.Element;
    defaultProps: {
        appearance: ButtonAppearance;
    };
};
export default Button;
