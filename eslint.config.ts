import "jiti/register";
import ts from "typescript-eslint";
import js from "@eslint/js";

export const config = ts.config([
  js.configs.recommended,
  ts.configs.recommendedTypeChecked,
  ts.configs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname
      },
    },
  },
  {
    ignores: ["dist"]
  }
]);

export default config;
