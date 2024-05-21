import * as React from 'react';
import { SaraStates, BaseHtmlProps } from '@/common.type';
export interface SaraProps extends BaseHtmlProps<HTMLDivElement> {
    size?: number;
    state?: SaraStates;
    alt?: string;
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    className?: string;
    'data-test'?: string;
}
export declare const Sara: {
    (props: SaraProps): React.JSX.Element;
    defaultProps: {
        size: number;
        state: SaraStates;
    };
};
export default Sara;
