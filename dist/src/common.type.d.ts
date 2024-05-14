/// <reference types="react" />
export type ButtonAppearance = 'primary' | 'basic';
export type ButtonType = 'button' | 'submit' | 'reset';
export type IconPosition = 'top' | 'bottom';
export type Size2Hierarchy = 'regular' | 'large';
export type Size3Hierarchy = 'regular' | 'medium' | 'large';
export type Size4Hierarchy = 'tiny' | 'regular' | 'medium' | 'large';
export type Arrangement = 'horizontal' | 'vertical';
export type SaraStates = 'default' | 'resting';
export type IconStates = 'default' | 'listening' | 'short-processing' | 'long-processing';
export type ProgressIndicatorStates = 'listening' | 'short-processing' | 'long-processing';
export type BaseHtmlProps<T> = Omit<React.HTMLProps<T>, ''>;
