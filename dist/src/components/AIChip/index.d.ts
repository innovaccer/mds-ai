import * as React from 'react';
import { BaseHtmlProps, ButtonType } from '@/common.type';
export interface ChipProps extends BaseHtmlProps<HTMLButtonElement> {
    label: string;
    icon: string;
    disabled?: boolean;
    name?: string;
    type?: ButtonType;
    'data-test'?: string;
    className?: string;
}
export declare const AIChip: (props: ChipProps) => React.JSX.Element;
export default AIChip;
