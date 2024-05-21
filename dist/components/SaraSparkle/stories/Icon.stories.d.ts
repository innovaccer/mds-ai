/// <reference types="react" />
import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: {
        (props: import("..").IconProps): import("react").JSX.Element;
        defaultProps: {
            size: number;
            state: import("../../../common.type").SaraSparkleStates;
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
export declare const Tiny: Story;
export declare const Medium: Story;
export declare const Large: Story;
export declare const CustomSize: Story;
