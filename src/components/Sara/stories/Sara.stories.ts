import type { Meta, StoryObj } from '@storybook/react';
import { Sara } from '@/index';

const meta = {
  title: 'Components/Sara',
  component: Sara,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Sara>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Medium: Story = {
  args: {
    size: 48,
    state: 'resting',
  },
};

export const Large: Story = {
  args: {
    size: 64,
    onClick: () => console.log('Sara is clicked'),
  },
};

export const CustomSize: Story = {
  args: {
    size: 100,
  },
};
