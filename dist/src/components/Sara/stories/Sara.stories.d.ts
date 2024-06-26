import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Sara } from '@/index';
declare const meta: Meta<typeof Sara>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Medium: Story;
export declare const Large: Story;
export declare const CustomSize: Story;
export declare const States: () => React.JSX.Element;
