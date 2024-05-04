import * as React from "react";
import { Size4Hierarchy } from "@/common.type";
import AIIcon from './AIIcon.svg';
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import LottieFile from "./assets/AIProcessing.json";

export interface IconProps {
  /**
   * Provide width to the `Icon`
   */
  width?: number;
  /**
   * Provide height to the `Icon`
   */
  height?: number;
  /**
   * Defines size of `Icon`
   */
  size?: Size4Hierarchy;
  /**
   * Specify alt text to the `Icon`
   */
  alt: string;
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

export const Icon = (props: IconProps) => {
  const {width, height, size, alt, ...rest} = props;

  const sizeMapping = {
    'tiny': 16,
    'regular': 24,
    'medium': 32,
    'large': 48,
  }

  const iconWidth = (size && sizeMapping[size]) || width;
  const iconHeight = (size && sizeMapping[size]) || height;

  return (
    // <img src={AIIcon} alt={alt} width={iconWidth} height={iconHeight} data-test="DesignSystem-AI-Icon" {...rest} />
    <div {...rest}>
      <Player
        autoplay
        loop
        src={LottieFile}
        // src="https://lottie.host/d09be553-4246-442d-9961-9bd3257fe1ac/Djt2Pam0Tw.json"
        style={{ height: iconHeight, width: iconWidth }}
        {...rest}
      >
        {/* <Controls visible={true} buttons={["play", "repeat", "frame", "debug"]} /> */}
      </Player>
    </div>
  );
}

Icon.defaultProps = {
  width: 32,
  height: 32,
}

export default Icon;
