module.exports = {
  extends: [
    "next/core-web-vitals",
    "plugin:@next/next/recommended",
    "turbo",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "prettier/prettier": "error",
  },
};
