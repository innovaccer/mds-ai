import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "@/index";

const meta = {
  title: "Components/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    alt: "MDS AI Icon",
  },
};

export const Tiny: Story = {
  args: {
    size: "tiny",
    alt: "MDS AI Icon",
  },
};

export const Regular: Story = {
  args: {
    size: "regular",
    alt: "MDS AI Icon",
  },
};

export const Medium: Story = {
  args: {
    size: "medium",
    alt: "MDS AI Icon",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    alt: "MDS AI Icon",
    onClick: () => console.log("Large story click"),
  },
};

export const CustomSize: Story = {
  args: {
    height: 100,
    width: 100,
    alt: "MDS AI Icon",
  },
};
