/// <reference types="react" />
import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: {
        (props: import("..").ButtonProps): import("react").JSX.Element;
        defaultProps: {
            appearance: import("../../../common.type").ButtonAppearance;
        };
    };
    parameters: {
        layout: string;
    };
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
export declare const Basic: Story;
export declare const Disabled: Story;
