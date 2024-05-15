import React from 'react';
import { SaraSparkle } from '@/index';
import { Text } from '@innovaccer/design-system';
import styles from './Patterns.module.css';

export default {
  title: 'Patterns/Progress Indicator/Vertical',
  tags: ['autodocs'],
};

export const Vertical = () => {
  /**
   *
   * import { Text } from '@innovaccer/design-system';
   *
   * // Patterns.module.css
   * @keyframes shimmer {
   *  0% {
   *    background-position: 100% 0;
   *  }
   *  100% {
   *    background-position: 200% 0;
   *  }
   *
   * .shimmer-text {
   *   background: linear-gradient(to right, #595959, #c5c5c5, #c5c5c5, #595959);
   *   background-size: 200% 100%;
   *   animation: shimmer 720ms infinite cubic-bezier(0.4, 0.14, 0.3, 1);
   *   color: transparent;
   *   background-clip: text;
   * }
   *
   */

  return (
    <div className="d-flex align-items-center justify-content-center flex-column">
      <SaraSparkle size="large" state="listening" className="mb-3" />
      <Text className={styles['shimmer-text']} size="large">
        Sara is listening
      </Text>
    </div>
  );
};
