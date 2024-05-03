import type { Meta, StoryObj } from "@storybook/react";
// import { fn } from "@storybook/test";
import { Button } from '../Button';

const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "centered",
    // design: {
    //   type: "figma",
    //   url: "https://...",
    //   examples: [Primary],
    // },
  },
  argTypes: {
    // appearance: {
    //   control: { type: "select", options: ["primary", "secondary"] },
    // },
    // margin: { control: "number", if: { arg: "advanced" } },
  },
  // argTypes: {
  //   label: { control: "text" }, // Always shows the control
  //   advanced: { control: "boolean" },
  //   // Only enabled if advanced is true
  //   margin: { control: "number", if: { arg: "advanced" } },
  //   padding: { control: "number", if: { arg: "advanced" } },
  //   cornerRadius: { control: "number", if: { arg: "advanced" } },
  // },
  tags: ["autodocs"],
  // args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Primary Button",
    appearance: 'primary'
  },
  parameters: {
    layout: "centered",
    design: {
      type: "figma",
      url: "https://www.figma.com/file/opv0P1djjaOu2Iyv2yZ9Wz/MDS---AI-Components?type=design&node-id=2094-4925&mode=dev",
      // examples: [Primary],
    },
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
