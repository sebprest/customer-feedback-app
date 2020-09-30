module.exports = {
    preset: 'ts-jest',
    coveragePathIgnorePatterns: ['<rootDir>/src/ts/__tests__/'],
    setupFiles: ['<rootDir>/src/ts/__tests__/__helpers__/setup.ts'],
    testPathIgnorePatterns: ['<rootDir>/src/ts/__tests__/__helpers__/'],
    moduleNameMapper: {
        '\\^(.+)': '<rootDir>/src/ts$1'
    }
}
