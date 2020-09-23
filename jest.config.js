module.exports = {
    preset:'jest-preset-angular',
    setupFilesAfterEnv:['<rootDir>/src/setup-jest.ts'],
    globals: {
      'ts-jest': {
        tsConfig: '<rootDir>/tsconfig.spec.json',
      },
      __TRANSFORM_HTML__:true,
    },
    moduleNameMapper: {
      '^src/(.*)$': '<rootDir>/src/$1',
      '^app/(.*)$': '<rootDir>/src/app/$1',
      '^assets/(.*)$': '<rootDir>/src/assets/$1',
      '^environments/(.*)$': '<rootDir>/src/environments/$1',
    },
    coveragePathIgnorePatterns: ['jest-global-mocks.ts'],
    transformIgnorePatterns: ['node_modules/(?!@ngrx)'],
    snapshotSerializers: [
        'jest-preset-angular/build/AngularSnapshotSerializer.js',
        'jest-preset-angular/build/HTMLCommentSerializer.js',
      ],

  };
