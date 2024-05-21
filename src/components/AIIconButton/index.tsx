import * as React from 'react';
import styles from './IconButton.module.css';
import classNames from 'classnames';
import { IconPosition, ButtonType, Size2Hierarchy, BaseHtmlProps } from '@/common.type';
import SaraIconTop from './SaraIconTop';
import SaraIconBottom from './SaraIconBottom';

export interface IconButtonProps extends Omit<BaseHtmlProps<HTMLButtonElement>, 'size'> {
  /**
   * Name of the Icon
   */
  icon?: string;
  /**
   * Defines size of Icon
   */
  size?: Size2Hierarchy;
  /**
   * Defines position of AI Icon
   */
  position?: IconPosition;
  /**
   * Type of `IconButton`
   */
  type?: ButtonType;
  /**
   * Disables the `IconButton`
   */
  disabled?: boolean;
  /**
   * Specifies tab index of `IconButton`
   */
  tabIndex?: number;
  /**
   * Defines color of the `IconButton`
   */
  color?: string;
  /**
   * Handler to be called when `IconButton` is clicked
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  /**
   * Handler to be called when mouse pointer enters `IconButton`.
   */
  onMouseEnter?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  /**
   * Handler to be called when mouse pointer leaves `IconButton`.
   */
  onMouseLeave?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  /**
   * Stores custom testing data private to the component.
   */
  'data-test'?: string;
  /**
   * Adds className to `IconButton`
   */
  className?: string;
}

export const AIIconButton = (props: IconButtonProps) => {
  const { icon, position, className, size, color, ...rest } = props;

  const buttonClassNames = classNames(
    {
      [styles.IconButton]: true,
    },
    className
  );

  const IconClassNames = classNames({
    [styles['IconButton-Icon']]: true,
    ['material-symbols']: true,
    ['material-symbols-rounded']: true,
  });

  const AIIconClassNames = classNames({
    [styles['IconButton-AI-Icon']]: true,
    [styles['IconButton-AI-Icon--top']]: position === 'top',
    [styles['IconButton-AI-Icon--bottom']]: position === 'bottom',
  });

  const sizeMapping = {
    regular: 16,
    large: 20,
  };

  const iconStyles = {
    fontSize: `${sizeMapping[size!]}px`,
    width: `${sizeMapping[size!]}px`,
    height: `${sizeMapping[size!]}px`,
    color: 'rgb(0, 0, 0)',
  };

  return (
    <button className={buttonClassNames} data-test="DesignSystem-AI-IconButton" {...rest} style={{ color }}>
      <i data-test="DesignSystem-Icon" className={IconClassNames} style={iconStyles}>
        {icon}
      </i>
      {position === 'top' ? (
        <SaraIconTop className={AIIconClassNames} />
      ) : (
        <SaraIconBottom className={AIIconClassNames} />
      )}
    </button>
  );
};

AIIconButton.defaultProps = {
  size: 'regular' as Size2Hierarchy,
  position: 'top' as IconPosition,
  color: '#fff',
};

export default AIIconButton;
