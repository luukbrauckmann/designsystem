import "jiti/register";
import ts from "typescript-eslint";
import js from "@eslint/js";
import { fileURLToPath } from "url";
import { dirname } from "path";

export const config = ts.config([
  js.configs.recommended,
  ts.configs.recommendedTypeChecked,
  ts.configs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: dirname(fileURLToPath(import.meta.url))
      },
    },
  }
]);

export default config;
