import type { Meta, StoryObj } from '@storybook/react';
import { ProgressIndicator } from '@/index';

const meta = {
  title: 'Components/Progress Indicator',
  component: ProgressIndicator,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ProgressIndicator>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Sara is listening',
  },
};

export const Vertical: Story = {
  args: {
    label: 'Sara is listening',
    alignment: 'vertical',
    size: 'large',
  },
};
