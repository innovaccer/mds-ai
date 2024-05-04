import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/index";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Primary Button",
    appearance: 'primary'
  },
};

export const Basic: Story = {
  args: {
    label: "Basic Button",
    appearance: "basic",
    onClick: () => console.log('onclick function called')
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Button",
    appearance: "primary",
    disabled: true,
  },
};
