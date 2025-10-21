// eslint.config.js
import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import prettier from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] }, // Aplica a todos os arquivos JS/TS
  { languageOptions: { globals: globals.node } }, // Define ambiente Node.js
  pluginJs.configs.recommended, // Regras JS recomendadas
  ...tseslint.configs.recommended, // Regras TS recomendadas
  eslintConfigPrettier, // Desativa regras que conflitam com Prettier
  {
    plugins: {
      prettier: prettier,
    },
    rules: {
      "prettier/prettier": "error", // Reporta erros de formatação do Prettier como erros do ESLint
      // Adicione outras regras ESLint específicas do seu projeto aqui, se quiser
      // Ex: '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    },
  },
  // Configuração para ignorar arquivos/pastas
  {
    ignores: ["dist/", "node_modules/"],
  },
];