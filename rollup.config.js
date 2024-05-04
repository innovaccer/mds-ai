import typescript from "rollup-plugin-typescript2";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import postcss from "rollup-plugin-postcss";
import image from "@rollup/plugin-image";
import alias from "@rollup/plugin-alias";
import json from "@rollup/plugin-json";
import path from "path";

function globals() {
  return {
    react: "React",
    "react-dom": "ReactDOM",
    classnames: "classNames",
  };
}

const config = {
  input: "./core/index.tsx",
  output: [
    {
      file: "dist/bundle.cjs.js",
      format: "cjs",
      sourcemap: true,
    },
    {
      file: "dist/bundle.umd.js",
      format: "umd",
      name: "InnovaccerAIDesignSystem",
      globals: globals(),
      sourcemap: true,
    },
    {
      file: "dist/bundle.esm.js",
      format: "es",
      name: "InnovaccerAIDesignSystem",
      globals: globals(),
      sourcemap: true,
    },
  ],
  plugins: [
    nodeResolve(), // Resolves node_modules
    typescript(), // Transpile TypeScript
    postcss(), // Process CSS files
    image(), // Handle non-JavaScript files (e.g., images)
    json(),
    alias({
      entries: [
        { find: "@", replacement: path.resolve("./core") }, // Example alias for src directory
        // Add more aliases as needed
      ],
    }),
  ],
  external: ["classnames", "react", "react-dom"],
};

export default config;
