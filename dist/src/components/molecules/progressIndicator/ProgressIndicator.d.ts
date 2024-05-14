import * as React from 'react';
import { Arrangement, Size2Hierarchy, ProgressIndicatorStates } from '@/common.type';
export interface ProgressIndicatorProps {
    label: string;
    size?: Size2Hierarchy;
    arrangement?: Arrangement;
    alt?: string;
    state?: ProgressIndicatorStates;
    'data-test'?: string;
    className?: string;
}
export declare const ProgressIndicator: {
    (props: ProgressIndicatorProps): React.JSX.Element;
    defaultProps: {
        size: Size2Hierarchy;
        arrangement: Arrangement;
    };
};
export default ProgressIndicator;
