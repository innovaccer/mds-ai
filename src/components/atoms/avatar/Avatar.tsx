import * as React from "react";
import { Size3Hierarchy, AvatarStates } from "@/common.type";
import { Player } from "@lottiefiles/react-lottie-player";
import AIResting from "./assets/AI-Resting.json";
import AILogo from "./assets/AI-Avatar.svg";

export interface AvatarProps {
  /**
   * Provide width to the `Avatar`
   */
  width?: number;
  /**
   * Provide height to the `Avatar`
   */
  height?: number;
  /**
   * Specify alt text to the `Avatar`
   */
  alt: string;
  /**
   * Defines size of `Avatar`
   */
  size?: Size3Hierarchy;
  /**
   * Defines state of `Avatar`
   */
  state?: AvatarStates;
  /**
   * Handler to be called when `Avatar` is clicked
   */
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  /**
   * Adds custom class
   */
  className?: string;
  /**
   * Stores custom testing data private to the component
   */
  "data-test"?: string;
}

export const Avatar = (props: AvatarProps) => {
  const { width, height, alt, size, state, ...rest } = props;

  const sizeMapping = {
    regular: 32,
    medium: 48,
    large: 64,
  };

  const avatarWidth = (size && sizeMapping[size]) || width;
  const avatarHeight = (size && sizeMapping[size]) || height;

  if (state === "default") {
    return (
      <img
        src={AILogo}
        alt={alt}
        width={avatarWidth}
        height={avatarHeight}
        data-test="DesignSystem-AI-Avatar"
        {...rest}
      />
    );
  }

  return (
    <div {...rest}>
      <Player
        autoplay
        loop
        src={AIResting}
        style={{ height: avatarHeight, width: avatarWidth }}
      />
    </div>
  );
};

Avatar.defaultProps = {
  width: 32,
  height: 32,
  state: "default" as AvatarStates,
};

export default Avatar;
