import * as React from 'react';
import { Arrangement, Size2Hierarchy, ProgressIndicatorStates } from '@/common.type';
import { Text } from '../../atoms/text';
import { SaraSparkle } from '@/index';
import classNames from 'classnames';
import styles from './ProgressIndicator.module.css';

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
   * Defines arrangement of Icon and Text in `Progress Indicator`
   */
  arrangement?: Arrangement;
  /**
   * Give alt text to icon of `Progress Indicator`
   */
  alt?: string;
  /**
   * Defines states for `Progress Indicator`
   */
  state?: ProgressIndicatorStates;
  /**
   * Stores custom testing data private to the component
   */
  'data-test'?: string;
  /**
   * Adds className to `Progress Indicator`
   */
  className?: string;
}

export const ProgressIndicator = (props: ProgressIndicatorProps) => {
  const { label, size, alt, className, arrangement, state, ...rest } = props;

  const WrapperClassNames = classNames(
    {
      [styles.ProgressIndicator]: true,
      [styles['ProgressIndicator--horizontal']]: arrangement === 'horizontal',
      [styles['ProgressIndicator--vertical']]: arrangement === 'vertical',
    },
    className
  );

  const TextClassNames = classNames({
    [styles['ProgressIndicator-Text--horizontal']]: arrangement === 'horizontal',
    [styles['ProgressIndicator-Text--vertical']]: arrangement === 'vertical',
  });

  return (
    <div className={WrapperClassNames} {...rest}>
      <SaraSparkle size={size} alt={alt || 'Progress Indicator Icon'} state={state} />
      <Text size={size} className={TextClassNames}>
        {label}
      </Text>
    </div>
  );
};

ProgressIndicator.defaultProps = {
  size: 'regular' as Size2Hierarchy,
  arrangement: 'horizontal' as Arrangement,
};

export default ProgressIndicator;
