module.exports = {
  stories: [
    '../src/**/*.stories.js',  // Javascript
    '../src/**/*.stories.tsx', // TypeScript
    '../src/**/*.stories.jsx'  // React
  ],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
  ],
};
