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

export const Regular: Story = {
  args: {
    size: 'regular',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    onClick: () => console.log('Sara is clicked'),
  },
};

export const CustomSize: Story = {
  args: {
    height: 100,
    width: 100,
  },
};
