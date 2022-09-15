module.exports = {
  extends: ["plugin:react-hooks/recommended", "plugin:storybook/recommended", "plugin:storybook/recommended"],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"]
  },
  rules: {
    "react/react-in-jsx-scope": "off",
    "jsx-a11y/anchor-is-valid": ["error", {
      components: ["Link"],
      aspects: ["invalidHref", "preferButton"]
    }],
    "no-redeclare": "off",
    "@typescript-eslint/no-redeclare": ["error"],
    "@next/next/no-img-element": "off",
    "@next/next/no-sync-scripts": "off",
    "@typescript-eslint/no-unnecessary-condition": "warn",
    "@typescript-eslint/no-unused-vars": "error"
  },
  settings: {
    "import/resolver": {
      typescript: {
        project: __dirname
      }
    }
  }
};