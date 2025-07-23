import "jiti/register";
import { globalIgnores } from "eslint/config";
import js from "@eslint/js";
import ts from "typescript-eslint";

export default ts.config([
  globalIgnores(['dist/**']),
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
