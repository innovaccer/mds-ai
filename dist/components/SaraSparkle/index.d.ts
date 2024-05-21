import * as React from 'react';
import { SaraSparkleStates, BaseHtmlProps } from '@/common.type';
export interface IconProps extends BaseHtmlProps<HTMLDivElement> {
    size?: number;
    state?: SaraSparkleStates;
    alt?: string;
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    className?: string;
    'data-test'?: string;
}
export declare const SaraSparkle: {
    (props: IconProps): React.JSX.Element;
    defaultProps: {
        size: number;
        state: SaraSparkleStates;
    };
};
export default SaraSparkle;
