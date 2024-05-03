import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "../Avatar";

const meta = {
  title: "Example/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    alt: 'MDS AI Avatar'
  },
};

export const Regular: Story = {
  args: {
    size: 'regular',
    alt: 'MDS AI Avatar'
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    alt: 'MDS AI Avatar'
  },
};

export const Large: Story = {
  args: {
    size: "large",
    alt: "MDS AI Avatar",
    onClick: () => console.log('Avatar is clicked')
  },
};

export const CustomSize: Story = {
  args: {
    height: 100,
    width: 100,
    alt: 'MDS AI Avatar'
  },
};
