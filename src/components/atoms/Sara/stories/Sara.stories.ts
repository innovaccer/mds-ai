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
  args: {
    alt: 'MDS AI Sara',
  },
};

export const Regular: Story = {
  args: {
    size: 'regular',
    alt: 'MDS AI Sara',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    alt: 'MDS AI Sara',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    alt: 'MDS AI Sara',
    onClick: () => console.log('Sara is clicked'),
  },
};

export const CustomSize: Story = {
  args: {
    height: 100,
    width: 100,
    alt: 'MDS AI Sara',
  },
};
