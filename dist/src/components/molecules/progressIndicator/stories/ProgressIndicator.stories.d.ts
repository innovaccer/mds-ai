/// <reference types="react" />
import type { StoryObj } from "@storybook/react";
declare const meta: {
    title: string;
    component: {
        (props: import("..").ProgressIndicatorProps): import("react").JSX.Element;
        defaultProps: {
            size: import("../../../../common.type").Size2Hierarchy;
            alignment: import("../../../../common.type").Alignment;
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
export declare const Vertical: Story;
