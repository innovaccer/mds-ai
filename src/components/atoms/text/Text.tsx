import * as React from 'react';
import classNames from 'classnames';
import styles from './Text.module.css';
import { Size2Hierarchy } from '@/common.type';

export interface TextProps {
  /**
   * Text to be rendered
   */
  children: string;
  /**
   * Defines size of the text
   */
  size?: Size2Hierarchy;
  /**
   * Stores custom testing data private to the component
   */
  'data-test'?: string;
  /**
   * Adds className to `Text`
   */
  className?: string;
}

export const Text = (props: TextProps) => {
  const { children, className, size, ...rest } = props;

  const TextClassNames = classNames(
    {
      [styles.Text]: true,
      [styles['shimmer-text']]: true,
      [styles['Text--regular']]: size === 'regular',
      [styles['Text--large']]: size === 'large',
    },
    className
  );

  return (
    <span data-test="DesignSystem-AI-Text" className={TextClassNames} {...rest}>
      {children}
    </span>
  );
};

export default Text;
