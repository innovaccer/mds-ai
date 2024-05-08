import * as React from "react";
import { Alignment, Size2Hierarchy } from "@/common.type";
export interface ProgressIndicatorProps {
    label: string;
    size?: Size2Hierarchy;
    alignment?: Alignment;
    alt?: string;
    "data-test"?: string;
    className?: string;
}
export declare const ProgressIndicator: {
    (props: ProgressIndicatorProps): React.JSX.Element;
    defaultProps: {
        size: Size2Hierarchy;
        alignment: Alignment;
    };
};
export default ProgressIndicator;
