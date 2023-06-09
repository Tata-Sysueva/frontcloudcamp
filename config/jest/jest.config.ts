export default {
    clearMocks: true,
    testEnvironment: 'jsdom',
    coveragePathIgnorePatterns: [
        '\\\\node_modules\\\\',
    ],
    moduleFileExtensions: [
        'js',
        'jsx',
        'ts',
        'tsx',
        'json',
        'node',
    ],
    modulePaths: [
        '<rootDir>src',
    ],
    moduleDirectories: [
        'node_modules', 'src'
    ],
    testMatch: [
        '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)',
    ],
    rootDir: '../../',
    setupFilesAfterEnv: ['<rootDir>config/jest/setupTests.ts'],
    moduleNameMapper: {
        '\\.(scss|less|css)$': 'identity-obj-proxy',
        '\\.svg': '<rootDir>/config/jest/jestEmptyComponent.tsx',
        '@app/(.*)': '<rootDir>/src/app/$1',
        '@shared/(.*)': '<rootDir>/src/shared/$1',
        '@pages/(.*)': '<rootDir>/src/pages/$1',
        '@widgets/(.*)': '<rootDir>/src/widgets/$1',
        '@/(.*)': '<rootDir>/src/$1',
    },
};