import * as React from 'react';
import { Size3Hierarchy, SaraStates } from '@/common.type';
export interface SaraProps {
    width?: number;
    height?: number;
    alt: string;
    size?: Size3Hierarchy;
    state?: SaraStates;
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    className?: string;
    'data-test'?: string;
}
export declare const Sara: {
    (props: SaraProps): React.JSX.Element;
    defaultProps: {
        width: number;
        height: number;
        state: SaraStates;
    };
};
export default Sara;
