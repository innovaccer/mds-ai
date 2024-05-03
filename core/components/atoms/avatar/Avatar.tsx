import * as React from "react";
import AILogo from "./AIAvatar.svg";
import { Size3Hierarchy } from "@/common.type";

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
  const { width, height, alt, size, ...rest } = props;

  const sizeMapping = {
    regular: 32,
    medium: 48,
    large: 64,
  };

  const avatarWidth = (size && sizeMapping[size]) || width;
  const avatarHeight = (size && sizeMapping[size]) || height;

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
};

Avatar.defaultProps = {
  width: 32,
  height: 32,
};

export default Avatar;
