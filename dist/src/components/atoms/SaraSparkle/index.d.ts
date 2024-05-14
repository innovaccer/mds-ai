import * as React from 'react';
import { Size4Hierarchy, IconStates } from '@/common.type';
export interface IconProps {
    width?: number;
    height?: number;
    size?: Size4Hierarchy;
    alt: string;
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    state?: IconStates;
    className?: string;
    'data-test'?: string;
}
export declare const SaraSparkle: {
    (props: IconProps): React.JSX.Element;
    defaultProps: {
        width: number;
        height: number;
        state: IconStates;
    };
};
export default SaraSparkle;
