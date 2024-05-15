import type { Meta, StoryObj } from '@storybook/react';
import { AIChip } from '@/index';

const meta = {
  title: 'Components/AIChip',
  component: AIChip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AIChip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: 'edit_note',
    label: 'Action chip',
  },
};

export const Disabled: Story = {
  args: {
    icon: 'edit_note',
    label: 'Action chip',
    disabled: true,
    onClick: (prop) => console.log('Action Chip Called', prop),
  },
};

export const EventHandler: Story = {
  args: {
    icon: 'edit_note',
    label: 'Action chip',
    name: 'Action chip',
    onClick: (prop) => console.log('Action Chip Called', prop),
  },
};
