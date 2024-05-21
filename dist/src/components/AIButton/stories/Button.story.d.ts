import type { Meta, StoryObj } from '@storybook/react';
import { AIButton } from '@/index';
import React from 'react';
declare const meta: Meta<typeof AIButton>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
export declare const Secondary: () => React.JSX.Element;
export declare const Basic: Story;
export declare const Disabled: Story;
