module.exports = {
    preset: 'jest-expo',
    setupFilesAfterEnv: ['@testing-library/react-native/extend-expect'],
    transform: {
        '^.+\\.(js|ts|tsx)$': 'babel-jest',
    },
    testMatch: ['**/__tests__/**/?(*.)+(spec|test).[jt]s?(x)'],
    moduleNameMapper: {
        '^app/(.*)$': '<rootDir>/src/app/$1',
    },
};
