import type { Preview } from "@storybook/react";
import '@innovaccer/design-system/css';

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
      canvas: {
        sourceState: 'shown',
      },
    },
  },
};

export default preview;
