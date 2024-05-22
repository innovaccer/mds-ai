import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { AIButton } from '@/index';

const meta: Meta<typeof AIButton> = {
  title: 'Components/AIButton',
  component: AIButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    appearance: 'primary',
  },
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

export const Appearance = () => {
  return (
    <div className="d-flex">
      <AIButton appearance="primary" className="mr-10">
        Primary Button
      </AIButton>
      <AIButton>Basic Button</AIButton>
    </div>
  );
};
