import type { Meta, StoryObj } from '@storybook/react';
import { SaraSparkle } from '@/index';

const meta: Meta<typeof SaraSparkle> = {
  title: 'Components/SaraSparkle',
  component: SaraSparkle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Tiny: Story = {
  args: {
    size: 16,
    state: 'listening',
  },
};

export const Medium: Story = {
  args: {
    size: 32,
    state: 'long-processing',
  },
};

export const Large: Story = {
  args: {
    size: 48,
    onClick: () => console.log('Large story click'),
    state: 'short-processing',
  },
};

export const CustomSize: Story = {
  args: {
    size: 100,
  },
};
