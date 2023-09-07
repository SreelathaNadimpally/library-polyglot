import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  stories: [
    './src/stories/**/*.mdx',
    './src/stories/**/*.stories.js',
    './src/stories/**/*.stories.jsx',
    './src/stories/**/*.stories.ts',
    './src/stories/**/*.stories.tsx',
    './src/stories/**/*.stories.mjs',
  ],
  
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
};
export default config;
