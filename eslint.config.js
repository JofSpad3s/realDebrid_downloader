import tslint from "@typescript-eslint/eslint-plugin";
import typeScriptParser from "@typescript-eslint/parser";
import google from "eslint-config-google";
export default [
    {
        files: ["**/*.ts"],
        plugins: {
            tslint: tslint,
            google: google
        },
        languageOptions: {
            parser: typeScriptParser,
        },
        rules: {
            semi: "error"
        }
    }
]