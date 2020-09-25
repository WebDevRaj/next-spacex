module.exports = {
    collectCoverageFrom: [
        '**/*.{js,jsx}',
        '!**/node_modules/**',
        '!**/tests/**',
        '!**/coverage/**',
        '!jest.config.js',
    ],
    coverageThreshold: {
        global: {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 100,
        },
    },
    setupFiles: [
        '<rootDir>/tests/setup.js',
    ],
    setupFilesAfterEnv: [
        '<rootDir>/tests/setupAfterEnv.js',
    ],
    testMatch: [
        '**/?(*.)+(spec|test).[jt]s?(x)',
    ],
    testPathIgnorePatterns: [
        '/.next/',
        '/node_modules/',
        '/tests/',
        '/coverage/'
    ],
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
    },
};