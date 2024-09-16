import tsParser from '@typescript-eslint/parser'
import stylistic from '@stylistic/eslint-plugin'

export default [
    {
        files: ['**/*.ts'],
        languageOptions: {
            parser: tsParser,
        },
    },
    { ignores: ['dist/*'] },
    stylistic.configs.customize({
        indent: 4,
        quotes: 'single',
        semi: false,
    }),
]
