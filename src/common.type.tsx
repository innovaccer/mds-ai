/* Button Component Types */
export type ButtonAppearance = 'primary' | 'basic';
export type ButtonType = 'button' | 'submit' | 'reset';

/* Icon Button Component Types */
export type IconPosition = 'top' | 'bottom';

/* Sizes Types */
export type Size2Hierarchy = 'regular' | 'large';
export type Size3Hierarchy = 'regular' | 'medium' | 'large';
export type Size4Hierarchy = 'tiny' | 'regular' | 'medium' | 'large';

/* Layout Types */
export type Arrangement = 'horizontal' | 'vertical';

/* Animation States */
export type SaraStates = 'default' | 'resting';
export type SaraSparkleStates = 'default' | 'listening' | 'short-processing' | 'long-processing';
export type ProgressIndicatorStates = 'listening' | 'short-processing' | 'long-processing';

/* Generic Type */
export type BaseHtmlProps<T> = Omit<React.HTMLProps<T>, ''>;
