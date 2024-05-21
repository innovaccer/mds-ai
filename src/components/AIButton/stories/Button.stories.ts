import type { Meta, StoryObj } from '@storybook/react';
import { AIButton } from '@/index';

const meta = {
  title: 'Components/AIButton',
  component: AIButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AIButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    appearance: 'primary',
  },
  // parameters: {
  //   storySource: {
  //     source: '<AIButton appearance="primary">Primary Button</AIButton>',
  //   },
  // },
};

export const Basic: Story = {
  args: {
    children: 'Basic Button',
    appearance: 'basic',
    onClick: () => console.log('onclick function called'),
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    appearance: 'primary',
    disabled: true,
  },
};
