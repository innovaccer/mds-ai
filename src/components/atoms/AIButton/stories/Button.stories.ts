import type { Meta, StoryObj } from '@storybook/react';
import { AIButton } from '@/index';

const meta = {
  title: 'Components/AIButton',
  component: AIButton,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof AIButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Primary Button',
    appearance: 'primary',
  },
};

export const Basic: Story = {
  args: {
    label: 'Basic Button',
    appearance: 'basic',
    onClick: () => console.log('onclick function called'),
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Button',
    appearance: 'primary',
    disabled: true,
  },
};
