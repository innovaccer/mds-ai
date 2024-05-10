import type { StorybookConfig } from "@storybook/react-webpack5";
import path from "path";

const config: StorybookConfig = {
  stories: [
    "../src/components/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/components/**/*.mdx",
  ],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: ["./public"],
  webpackFinal: async (config, { configType }) => {
    if (config.resolve?.alias) {
      config.resolve.alias["@"] = path.resolve(__dirname, "../src");
    }
    // Return the altered config
    return config;
  },
};
export default config;
