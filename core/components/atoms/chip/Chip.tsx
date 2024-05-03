import * as React from "react";
import styles from "../../../../css/src/components/Chip.module.css";
import classNames from "classnames";

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
}

export const Chip = (props: ChipProps) => {
  const { label, icon, disabled, name, onClick, ...rest } = props;

  const ChipClassNames = classNames({
    [styles.Chip]: true,
    [styles["Chip--disabled"]]: disabled,
  });

  const IconClassNames = classNames({
    [styles["Chip-Icon"]]: true,
    [styles["Chip-Icon--disabled"]]: disabled,
    ["ai-material-symbols"]: true,
    ["ai-material-symbols-rounded"]: true,
  });

  const TextClassNames = classNames({
    [styles["Chip-Text"]]: true,
    [styles["Chip-Text--disabled"]]: disabled,
  });

  const onClickHandler = () => {
    onClick?.(name);
  }

  return (
    <div data-test="DesignSystem-AI-Chip" className={ChipClassNames} onClick={onClickHandler} {...rest}>
      <i
        data-test="DesignSystem-AI-Chip-Icon"
        className={IconClassNames}
      >
        {icon}
      </i>

      <span data-test="DesignSystem-AI-Chip-Text" className={TextClassNames}>
        {label}
      </span>
    </div>
  );
};

export default Chip;
