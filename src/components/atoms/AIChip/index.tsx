import * as React from 'react';
import styles from './Chip.module.css';
import classNames from 'classnames';

export interface ChipProps {
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
   * Handler to be called when Chip is clicked
   */
  onClick?: (name: string | undefined) => void;
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
  const { label, icon, disabled, name, className, onClick, ...rest } = props;

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

  const onClickHandler = () => {
    if (disabled) {
      return;
    }
    onClick?.(name);
  };

  return (
    // eslint-disable-next-line
    <div data-test="DesignSystem-AI-Chip" className={ChipClassNames} onClick={onClickHandler} {...rest}>
      <i data-test="DesignSystem-AI-Chip-Icon" className={IconClassNames}>
        {icon}
      </i>

      <span data-test="DesignSystem-AI-Chip-Text" className={TextClassNames}>
        {label}
      </span>
    </div>
  );
};

export default AIChip;
