import * as React from 'react';
import { IconPosition, ButtonType, Size2Hierarchy, BaseHtmlProps } from '@/common.type';
export interface IconButtonProps extends Omit<BaseHtmlProps<HTMLButtonElement>, 'size'> {
    icon?: string;
    size?: Size2Hierarchy;
    position?: IconPosition;
    type?: ButtonType;
    disabled?: boolean;
    tabIndex?: number;
    color?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    onMouseEnter?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    onMouseLeave?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    'data-test'?: string;
    className?: string;
}
export declare const AIIconButton: {
    (props: IconButtonProps): React.JSX.Element;
    defaultProps: {
        size: Size2Hierarchy;
        position: IconPosition;
        color: string;
    };
};
export default AIIconButton;
