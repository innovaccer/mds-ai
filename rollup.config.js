import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import image from '@rollup/plugin-image';
import alias from '@rollup/plugin-alias';
import json from '@rollup/plugin-json';
import path from 'path';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';

function globals() {
  return {
    react: 'React',
    'react-dom': 'ReactDOM',
    classnames: 'classNames',
  };
}

const config = {
  input: './src/index.tsx',
  output: [
    {
      file: 'dist/bundle.cjs.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/bundle.umd.js',
      format: 'umd',
      name: 'InnovaccerAIDesignSystem',
      globals: globals(),
      sourcemap: true,
    },
    {
      file: 'dist/bundle.esm.js',
      format: 'es',
      name: 'InnovaccerAIDesignSystem',
      globals: globals(),
      sourcemap: true,
    },
  ],
  plugins: [
    nodeResolve(), // Resolves node_modules
    commonjs(),
    typescript({
      tsconfig: 'tsconfig.json',
    }), // Transpile TypeScript
    babel({ babelHelpers: 'bundled', exclude: 'node_modules/**' }), // Babel plugin configuration
    postcss(), // Process CSS files
    image(), // Handle non-JavaScript files (e.g., images)
    json(),
    alias({
      entries: [{ find: '@', replacement: path.resolve('./src') }],
    }),
  ],
  external: ['classnames', 'react', 'react-dom'],
};

export default config;
