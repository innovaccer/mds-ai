import type { Meta, StoryObj } from '@storybook/react';
import { AIButton } from '@/index';
import React from 'react';

const meta: Meta<typeof AIButton> = {
  title: 'Components/AIButton',
  component: AIButton,
  parameters: {
    layout: 'centered',
  },
  // argTypes: {
  //   appearance: {
  //     control: { type: 'select', options: ['primary', 'secondary'] },
  //   },
  //   // margin: { control: "number", if: { arg: "advanced" } },
  // },
  // argTypes: {
  //   appearance: {
  //     options: ['primary', 'basic'],
  //     control: { type: 'radio' },
  //   },
  // },
  render: ({ ...args }) => <AIButton {...args} />,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    appearance: 'primary',
    children: 'Primary child',
  },
  // parameters: {
  //   storySource: {
  //     source: '<AIButton appearance="primary">Primary Button</AIButton>',
  //   },
  // },
  // render: () => <AIButton appearance="primary">Primary Button</AIButton>,
};

export const Secondary = () => {
  return <AIButton appearance="primary">Secondary Button</AIButton>;
};

export const Basic: Story = {
  render: () => <AIButton appearance="basic">Basic Button</AIButton>,
};

export const Disabled: Story = {
  render: () => (
    <AIButton appearance="primary" disabled={true}>
      Disabled Button
    </AIButton>
  ),
};
