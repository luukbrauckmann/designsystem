import "jiti/register";
import js from "@eslint/js";
import ts from "typescript-eslint";

export default ts.config([
  {
    ignores: ['dist/**', 'eslint.config.ts'],
  },
  js.configs.recommended,
  ts.configs.recommended,
  ts.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  }
]);
