import type { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "@/index";

const meta = {
  title: "Components/IconButton",
  component: IconButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: "import_contacts",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    icon: "import_contacts",
  },
};

export const Round: Story = {
  args: {
    shape: "round",
    icon: "import_contacts",
  },
};

export const PositionBottom: Story = {
  args: {
    icon: "edit",
    position: "bottom"
  },
};

export const Large: Story = {
  args: {
    icon: "import_contacts",
    size: "large",
  },
};
