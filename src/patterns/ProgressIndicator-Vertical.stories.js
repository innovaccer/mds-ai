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
      <SaraSparkle size={48} state="listening" className="mb-3" />
      <Text className={styles['shimmer-text1']} size="large">
        Sara is listening
      </Text>
    </div>
  );
};

export const Test2 = () => {
  return (
    <div className="d-flex align-items-center justify-content-center flex-column">
      <SaraSparkle size={48} state="listening" className="mb-3" />
      <Text className={styles['shimmer-text2']} size="large">
        Sara is listening
      </Text>
    </div>
  );
};

export const Test3 = () => {
  return (
    <div className="d-flex align-items-center justify-content-center flex-column">
      <SaraSparkle size={48} state="listening" className="mb-3" />
      <Text className={styles['shimmer-text3']} size="large">
        Sara is listening
      </Text>
    </div>
  );
};

export const Test4 = () => {
  return (
    <div className="d-flex align-items-center justify-content-center flex-column">
      <SaraSparkle size={48} state="listening" className="mb-3" />
      <Text className={styles['shimmer-text4']} size="large">
        Sara is listening
      </Text>
    </div>
  );
};

export const Test5 = () => {
  return (
    <div className="d-flex align-items-center justify-content-center flex-column">
      <SaraSparkle size={48} state="listening" className="mb-3" />
      <Text className={styles['shimmer-text5']} size="large">
        Sara is listening
      </Text>
      <div className={styles['shimmer-child']}></div>
    </div>
  );
};

export const Test6 = () => {
  return (
    <div className="d-flex align-items-center justify-content-center flex-column">
      <SaraSparkle size={48} state="listening" className="mb-3" />
      <Text className={styles['shimmer-text6']} size="large">
        Sara is listening
      </Text>
    </div>
  );
};
