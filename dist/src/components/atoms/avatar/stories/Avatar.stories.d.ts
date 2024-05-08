/// <reference types="react" />
import type { StoryObj } from "@storybook/react";
declare const meta: {
    title: string;
    component: {
        (props: import("..").AvatarProps): import("react").JSX.Element;
        defaultProps: {
            width: number;
            height: number;
            state: import("../../../../common.type").AvatarStates;
        };
    };
    parameters: {
        layout: string;
    };
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Regular: Story;
export declare const Medium: Story;
export declare const Large: Story;
export declare const CustomSize: Story;
