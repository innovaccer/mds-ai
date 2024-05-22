import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Text } from '@innovaccer/design-system';
import { Sara } from '@/index';

const meta: Meta<typeof Sara> = {
  title: 'Components/Sara',
  component: Sara,
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

export const Medium: Story = {
  args: {
    size: 48,
    state: 'resting',
  },
};

export const Large: Story = {
  args: {
    size: 64,
    onClick: () => console.log('Sara is clicked'),
  },
};

export const CustomSize: Story = {
  args: {
    size: 100,
  },
};

export const States = () => {
  return (
    <div className="d-flex vw-75">
      <div className="d-flex flex-column align-items-center w-100">
        <Sara />
        <Text appearance="subtle" className="mt-6">
          Default
        </Text>
      </div>
      <div className="d-flex align-items-center flex-column w-100">
        <Sara state="resting" />
        <Text appearance="subtle" className="mt-6">
          Resting
        </Text>
      </div>
    </div>
  );
};
