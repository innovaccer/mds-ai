import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Text } from '@innovaccer/design-system';
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

export const States = () => {
  return (
    <div className="d-flex vw-50">
      <div className="d-flex flex-column align-items-center text-align-center w-100">
        <SaraSparkle />
        <Text appearance="subtle" className="mt-6">
          Default
        </Text>
      </div>
      <div className="d-flex align-items-center flex-column text-align-center w-100">
        <SaraSparkle state="listening" />
        <Text appearance="subtle" className="mt-6">
          Listening
        </Text>
      </div>
      <div className="d-flex align-items-center flex-column text-align-center w-100">
        <SaraSparkle state="short-processing" />
        <Text appearance="subtle" className="mt-6">
          Short Processing
        </Text>
      </div>
      <div className="d-flex align-items-center flex-column text-align-center w-100">
        <SaraSparkle state="long-processing" />
        <Text appearance="subtle" className="mt-6">
          Long Processing
        </Text>
      </div>
    </div>
  );
};
