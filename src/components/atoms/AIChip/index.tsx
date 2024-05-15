import * as React from 'react';
import styles from './Chip.module.css';
import classNames from 'classnames';
import { BaseHtmlProps, ButtonType } from '@/common.type';

export interface ChipProps extends BaseHtmlProps<HTMLButtonElement> {
  /**
   * Label of `Chip`
   */
  label: string;
  /**
   * Defines name of Icon to be displayed inside `Chip`
   */
  icon: string;
  /**
   * Disables the `Chip`
   */
  disabled?: boolean;
  /**
   * Name of chip
   */
  name?: string;
  /**
   * Type of `Chip`
   */
  type?: ButtonType;
  /**
   * Stores custom testing data private to the component.
   */
  'data-test'?: string;
  /**
   * Adds className to `Button`
   */
  className?: string;
}

export const AIChip = (props: ChipProps) => {
  const { label, icon, disabled, name, className, ...rest } = props;

  const ChipClassNames = classNames(
    {
      [styles.Chip]: true,
      [styles['Chip--disabled']]: disabled,
    },
    className
  );

  const IconClassNames = classNames({
    [styles['Chip-Icon']]: true,
    [styles['Chip-Icon--disabled']]: disabled,
    ['material-symbols']: true,
    ['material-symbols-rounded']: true,
  });

  const TextClassNames = classNames({
    [styles['Chip-Text']]: true,
    [styles['Chip-Text--disabled']]: disabled,
  });

  return (
    <button data-test="DesignSystem-AI-Chip" className={ChipClassNames} disabled={disabled} {...rest}>
      <i data-test="DesignSystem-AI-Chip-Icon" className={IconClassNames}>
        {icon}
      </i>

      <span data-test="DesignSystem-AI-Chip-Text" className={TextClassNames}>
        {label}
      </span>
    </button>
  );
};

export default AIChip;
