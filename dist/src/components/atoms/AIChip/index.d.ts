import * as React from 'react';
export interface ChipProps {
    label: string;
    icon: string;
    disabled?: boolean;
    name?: string;
    onClick?: (name: string | undefined) => void;
    'data-test'?: string;
    className?: string;
}
export declare const AIChip: (props: ChipProps) => React.JSX.Element;
export default AIChip;
