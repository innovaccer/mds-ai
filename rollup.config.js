import typescript from "rollup-plugin-typescript2";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import postcss from "rollup-plugin-postcss";
import image from "@rollup/plugin-image";

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
  ],
  external: ["classnames", "react", "react-dom"],
};

export default config;
