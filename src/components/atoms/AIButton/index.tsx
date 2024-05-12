import * as React from 'react';
import styles from './Button.module.css';
import classNames from 'classnames';
import { ButtonAppearance, ButtonType, BaseHtmlProps } from '@/common.type';
import BasicIcon from './icons/Basic.svg';
import PrimaryIcon from './icons/Primary.svg';

export interface ButtonProps extends BaseHtmlProps<HTMLButtonElement> {
  /**
   * Pass label to `Button`
   */
  label?: string;
  /**
   * Defines Appearance of the `Button`
   */
  appearance?: ButtonAppearance;
  /**
   * Type of `Button`
   */
  type?: ButtonType;
  /**
   * Disables the `Button`
   */
  disabled?: boolean;
  /**
   * Pass children to `Button`
   */
  children?: React.ReactNode;
  /**
   * Specifies tab index of `Button`
   */
  tabIndex?: number;
  /**
   * Handler to be called when `Button` is clicked
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  /**
   * Handler to be called when mouse pointer enters `Button`.
   */
  onMouseEnter?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  /**
   * Handler to be called when mouse pointer leaves `Button`.
   */
  onMouseLeave?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  /**
   * Stores custom testing data private to the component.
   */
  'data-test'?: string;
  /**
   * Adds className to `Button`
   */
  className?: string;
}

export const AIButton = (props: ButtonProps) => {
  const { appearance, className, label, children, ...rest } = props;

  const buttonClassNames = classNames(
    {
      [styles.Button]: true,
      [styles['Button--primary']]: appearance === 'primary',
      [styles['Button--basic']]: appearance === 'basic',
    },
    className
  );

  const IconClassNames = classNames({
    [styles['Button-Icon']]: true,
  });

  const buttonIcon = appearance === 'primary' ? PrimaryIcon : BasicIcon;

  return (
    <button className={buttonClassNames} data-test="DesignSystem-AI-Button" {...rest}>
      <img
        src={buttonIcon}
        alt="Button Icon"
        width={16}
        height={16}
        className={IconClassNames}
        data-test="DesignSystem-AI-Button-Icon"
      />
      {label || children}
    </button>
  );
};

AIButton.defaultProps = {
  appearance: 'basic' as ButtonAppearance,
};

export default AIButton;
