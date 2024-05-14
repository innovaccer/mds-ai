import * as React from 'react';
import { Size2Hierarchy } from '@/common.type';
export interface TextProps {
    children: string;
    size?: Size2Hierarchy;
    'data-test'?: string;
    className?: string;
}
export declare const Text: (props: TextProps) => React.JSX.Element;
export default Text;
