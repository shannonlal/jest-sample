# Install JEST
```
npm install -D jest jest-preset-angular @types/jest
```
```
npm install ts-jest --save-dev
```
# Create setup-jest.ts
Note: I chanaged the sample to include zone configration as well
```
import 'jest-preset-angular';
import '../jest-global-mocks';

try {
    // If the user are using zone.js 0.11.1+
    // all jest support logic are implemented inside zone.js
    // we only need to load zone-testing.umd.js module
    require('zone.js/bundles/zone-testing-bundle.umd.js');
  } catch (err) {
    // Fallback logic to load zone and zone-patch
    // when the user still use zone.js 0.10.x
    require('zone.js/dist/zone');
    require('zone.js/dist/proxy');
    require('zone.js/dist/sync-test');
    require('zone.js/dist/async-test');
    require('zone.js/dist/fake-async-test');
    require('./patches/zone-patch');
  }


```

# Add jest-global-mocks.ts

```
Object.defineProperty(window, 'CSS', {value: null});
Object.defineProperty(document, 'doctype', {
  value: '<!DOCTYPE html>'
});
Object.defineProperty(window, 'getComputedStyle', {
  value: () => {
    return {
      display: 'none',
      appearance: ['-webkit-appearance']
    };
  }
});
/**
 * ISSUE: https://github.com/angular/material2/issues/7101
 * Workaround for JSDOM missing transform property
 */
Object.defineProperty(document.body.style, 'transform', {
  value: () => {
    return {
      enumerable: true,
      configurable: true,
    };
  },
});
```

# Update package.json
```
"test:unit": "jest --config=jest.config.js",
```

# Avoid Karma Conflicts
Rename tests.ts --> karmaTest.ts

# Create jest.config.ts
Note: I am following the provided example with a small tweak to setup files 
```
module.exports = {
    setupFilesAfterEnv:['<rootDir>/src/setup-jest.ts'],
    globals: {
      'ts-jest': {
        tsConfig: '<rootDir>/tsconfig.spec.json',
        stringifyContentPathRegex: '\\.html$',
        astTransformers: {
          before: [
            'jest-preset-angular/build/InlineFilesTransformer',
            'jest-preset-angular/build/StripStylesTransformer',
          ],
        },
      },
    },
    transform: {
      '^.+\\.(ts|js|html)$': 'ts-jest',
    },
    moduleFileExtensions: ['ts', 'html', 'js', 'json'],
    moduleNameMapper: {
      '^src/(.*)$': '<rootDir>/src/$1',
      '^app/(.*)$': '<rootDir>/src/app/$1',
      '^assets/(.*)$': '<rootDir>/src/assets/$1',
      '^environments/(.*)$': '<rootDir>/src/environments/$1',
    },
    transformIgnorePatterns: ['node_modules/(?!@ngrx)'],
    snapshotSerializers: [
      'jest-preset-angular/build/AngularSnapshotSerializer.js',
      'jest-preset-angular/build/HTMLCommentSerializer.js',
    ],
  };
```

# I included the zone patch in my project 
I created a folder called 
```
mkdir patches/zone-patch
```
I copied the following file into my directory
https://github.com/thymikee/jest-preset-angular/blob/master/src/zone-patch/index.js

# I commented out the zone.js in the polyfills.ts

```
//import 'zone.js/dist/zone';  // Included with Angular CLI.
```
