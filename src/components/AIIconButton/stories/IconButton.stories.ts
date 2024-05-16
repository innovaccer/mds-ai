import type { Meta, StoryObj } from '@storybook/react';
import { AIIconButton } from '@/index';

const meta = {
  title: 'Components/AIIconButton',
  component: AIIconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AIIconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: 'import_contacts',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    icon: 'import_contacts',
  },
};

export const PositionBottom: Story = {
  args: {
    icon: 'edit',
    position: 'bottom',
  },
};

export const Large: Story = {
  args: {
    icon: 'import_contacts',
    size: 'large',
  },
};
