import "jiti/register";
import js from "@eslint/js";
import ts from "typescript-eslint";

export const config = ts.config([
  js.configs.recommended,
  ts.configs.recommended,
  ts.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  }
]);

export default config;
