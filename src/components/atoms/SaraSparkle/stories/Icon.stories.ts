import type { Meta, StoryObj } from '@storybook/react';
import { SaraSparkle } from '@/index';

const meta = {
  title: 'Components/SaraSparkle',
  component: SaraSparkle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SaraSparkle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Tiny: Story = {
  args: {
    size: 'tiny',
  },
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
    onClick: () => console.log('Large story click'),
  },
};

export const CustomSize: Story = {
  args: {
    height: 100,
    width: 100,
  },
};
