/// <reference types="react" />
import type { StoryObj } from "@storybook/react";
declare const meta: {
    title: string;
    component: (props: import("..").IconButtonProps) => import("react").JSX.Element;
    parameters: {
        layout: string;
    };
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Disabled: Story;
export declare const Round: Story;
export declare const PositionBottom: Story;
export declare const Large: Story;
