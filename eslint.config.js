import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals';
import stylistic from '@stylistic/eslint-plugin';
import { defineConfig } from 'eslint/config';

// to make this a .ts file you first need to install 'jiti'...

export default defineConfig(
    {
        ignores: ['build/**', 'dist/**'],
    },
    eslint.configs.recommended,
    tseslint.configs.recommended,
    tseslint.configs.stylistic,
    {
        languageOptions: {
            globals: {
                ...globals.commonjs,
                ...globals.node,
                ...globals.es2021,
            },
            'parserOptions': {
                'ecmaVersion': 'latest',
            },
        },
        plugins: {
            '@stylistic': stylistic,
        },
        rules: {
            '@stylistic/no-trailing-spaces': ['warn'],
            '@stylistic/indent': ['error', 4],
            '@stylistic/linebreak-style': 0,
            '@stylistic/quotes': ['error', 'single'],
            '@stylistic/semi': ['error', 'always'],
            '@stylistic/eol-last': ['error', 'always'],
            '@stylistic/comma-dangle': ['error', 'always-multiline'],

            '@typescript-eslint/consistent-type-imports': ['error'],
            '@typescript-eslint/consistent-type-definitions': 'off',
            '@typescript-eslint/no-require-imports': 'off',
            '@typescript-eslint/no-unused-vars': [
                'warn',
                {
                    'argsIgnorePattern': '^_',
                    'varsIgnorePattern': '^_',
                    'caughtErrorsIgnorePattern': '^_',
                },
            ],
        },
    },
);
