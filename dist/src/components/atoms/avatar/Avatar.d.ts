import * as React from "react";
import { Size3Hierarchy, AvatarStates } from "@/common.type";
export interface AvatarProps {
    width?: number;
    height?: number;
    alt: string;
    size?: Size3Hierarchy;
    state?: AvatarStates;
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    className?: string;
    "data-test"?: string;
}
export declare const Avatar: {
    (props: AvatarProps): React.JSX.Element;
    defaultProps: {
        width: number;
        height: number;
        state: AvatarStates;
    };
};
export default Avatar;
