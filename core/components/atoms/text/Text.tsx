import * as React from "react";
import classNames from "classnames";
import styles from "../../../../css/src/components/Text.module.css";

export interface TextProps {
  /**
   * Text to be rendered
   */
  children: string;
  /**
   * Stores custom testing data private to the component.
   */
  "data-test"?: string;
  /**
   * Adds className to `Button`
   */
  className?: string;
}

export const Text = (props: TextProps) => {
  const { children, className, ...rest } = props;

  const TextClassNames = classNames(
    {
      [styles.Text]: true
    },
    className
  )

  return (
    <span data-test="DesignSystem-AI-Text" className={TextClassNames} {...rest}>{children}</span>
  )
}

export default Text;
