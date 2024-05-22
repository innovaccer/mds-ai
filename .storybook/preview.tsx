import type { Preview } from '@storybook/react';
import '@innovaccer/design-system/css';
import { DocPage } from './docPage';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      expanded: true,
    },
    docs: {
      toc: true,
      canvas: {
        sourceState: 'shown',
      },
      page: DocPage
    },
  },
};

export default preview;
