import * as React from "react";
import { Alignment, Size2Hierarchy } from "@/common.type";
import { Text } from "../../atoms/text";
import { Icon } from "@/index";
import classNames from "classnames";
import styles from "./ProgressIndicator.module.css";

export interface ProgressIndicatorProps {
  /**
   * Defines label to be shown with `Progress Indicator`
   */
  label: string;
  /**
   * Specify size of the `Progress Indicator`
   */
  size?: Size2Hierarchy;
  /**
   * Defines alignment of Icon and Text in `Progress Indicator`
   */
  alignment?: Alignment;
  /**
   * Give alt text to icon of `Progress Indicator`
   */
  alt?: string;
  /**
   * Stores custom testing data private to the component
   */
  "data-test"?: string;
  /**
   * Adds className to `Progress Indicator`
   */
  className?: string;
}

export const ProgressIndicator = (props: ProgressIndicatorProps) => {
  const { label, size, alt, className, alignment, ...rest } = props;

  const WrapperClassNames = classNames(
    {
      [styles.ProgressIndicator]: true,
      [styles["ProgressIndicator--horizontal"]]: alignment === "horizontal",
      [styles["ProgressIndicator--vertical"]]: alignment === "vertical",
    },
    className
  );

  const TextClassNames = classNames({
    [styles["ProgressIndicator-Text--horizontal"]]: alignment === "horizontal",
    [styles["ProgressIndicator-Text--vertical"]]: alignment === "vertical",
  });

  return (
    <div className={WrapperClassNames} {...rest}>
      <Icon size={size} alt={alt || "Progress Indicator Icon"} />
      <Text size={size} className={TextClassNames}>
        {label}
      </Text>
    </div>
  );
};

ProgressIndicator.defaultProps = {
  size: "regular" as Size2Hierarchy,
  alignment: "horizontal" as Alignment,
};

export default ProgressIndicator;
