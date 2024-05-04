import React from "react";
// import { AIAvatar } from "./AIAvatar"
import { Button } from "@/index";
import figma from "@figma/code-connect";

/**
 * -- This file was auto-generated by `figma connect create` --
 * `props` includes a mapping from Figma properties and variants to
 * suggested values. You should update this to match the props of your
 * code component, and update the `example` function to return the
 * code example you'd like to see in Figma
 */

figma.connect(
  Button,
  "https://www.figma.com/file/opv0P1djjaOu2Iyv2yZ9Wz/MDS---AI-Components?type=design&node-id=2094-4925&mode=dev",
  {
    props: {
      appearance: figma.enum("Appearance", {
        Default: "default",
        Night: "night",
      }),
      state: figma.enum("State", {
        Default: "default",
        Resting: "resting",
      }),
    },
    // example: (props) => <AIAvatar />,
    example: () => <Button />,
  }
);
