// import type { Meta, StoryObj } from "@storybook/react";
// import { fn } from "@storybook/test";
import { Button } from '@/index';
import figma from '@figma/code-connect';

const meta = {
  title: 'Test/Button',
  component: Button,
  // args: { onClick: fn() },
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/opv0P1djjaOu2Iyv2yZ9Wz/MDS---AI-Components?type=design&node-id=2094-4925&mode=dev',
      examples: [Primary],
      props: {
        children: figma.children('figma button example'),
        // disabled: figma.boolean('Disabled'),
        // type: figma.enum('Type', {
        //   Primary: ButtonType.Primary,
        //   Secondary: ButtonType.Secondary
        // }),
      },
    },
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
  tags: ['autodocs'],
};

export default meta;

// type Story = StoryObj<typeof meta>;

export const Primary = {
  args: {
    children: 'hello world primary',
  },
  // parameters: {
  //   layout: "centered",
  //   design: {
  //     type: "figma",
  //     url: "https://www.figma.com/file/opv0P1djjaOu2Iyv2yZ9Wz/MDS---AI-Components?type=design&node-id=2094-4925&mode=dev",
  //     // examples: [Primary],
  //   },
  // },
};

export const Large = {
  args: {
    children: 'Large',
  },
};

export const Small = {
  args: {
    children: 'Small',
  },
};
