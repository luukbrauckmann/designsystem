import "jiti/register";
import ts from "typescript-eslint";
import { config as rootConfig } from "../../eslint.config";

export const config = ts.config([
  rootConfig
]);

export default config;
