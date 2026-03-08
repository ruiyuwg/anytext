Version: 30.0

On this page

caution

Jest ships with **experimental** support for ECMAScript Modules (ESM).

The implementation may have bugs and lack features. For the latest status check out the [issue](https://github.com/jestjs/jest/issues/9430) and the [label](https://github.com/jestjs/jest/labels/ES%20Modules) on the issue tracker.

Also note that the APIs Jest uses to implement ESM support are still [considered experimental by Node](https://nodejs.org/api/vm.html#vm_class_vm_module) (as of version `18.8.0`).

With the warnings out of the way, this is how you activate ESM support in your tests.

1.  Ensure you either disable [code transforms](/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object) by passing `transform: {}` or otherwise configure your transformer to emit ESM rather than the default CommonJS (CJS).
    
2.  Execute `node` with `--experimental-vm-modules`, e.g. `node --experimental-vm-modules node_modules/jest/bin/jest.js` or `NODE_OPTIONS="$NODE_OPTIONS --experimental-vm-modules" npx jest` etc.
    
    On Windows, you can use [`cross-env`](https://github.com/kentcdodds/cross-env) to be able to set environment variables.
    
    If you use Yarn, you can use `yarn node --experimental-vm-modules $(yarn bin jest)`. This command will also work if you use [Yarn Plug'n'Play](https://yarnpkg.com/features/pnp).
    
    If your codebase includes ESM imports from `*.wasm` files, you do _not_ need to pass `--experimental-wasm-modules` to `node`. Current implementation of WebAssembly imports in Jest relies on experimental VM modules, however, this may change in the future.
    
3.  Beyond that, we attempt to follow `node`'s logic for activating "ESM mode" (such as looking at `type` in `package.json` or `.mjs` files), see [their docs](https://nodejs.org/api/esm.html#esm_enabling) for details.
    
4.  If you want to treat other file extensions (such as `.jsx` or `.ts`) as ESM, please use the [`extensionsToTreatAsEsm` option](/docs/configuration#extensionstotreatasesm-arraystring).
    

## Differences between ESM and CommonJS[​](#differences-between-esm-and-commonjs "Direct link to Differences between ESM and CommonJS")

Most of the differences are explained in [Node's documentation](https://nodejs.org/api/esm.html#esm_differences_between_es_modules_and_commonjs), but in addition to the things mentioned there, Jest injects a special variable into all executed files - the [`jest` object](/docs/jest-object). To access this object in ESM, you need to import it from the `@jest/globals` module or use `import.meta`.

```
import {jest} from '@jest/globals';jest.useFakeTimers();// etc.// alternativelyimport.meta.jest.useFakeTimers();// jest === import.meta.jest => true
```

## Module mocking in ESM[​](#module-mocking-in-esm "Direct link to Module mocking in ESM")

Since ESM evaluates static `import` statements before looking at the code, the hoisting of `jest.mock` calls that happens in CJS won't work for ESM. To mock modules in ESM, you need to use `require` or dynamic `import()` after `jest.mock` calls to load the mocked modules - the same applies to modules which load the mocked modules.

ESM mocking is supported through `jest.unstable_mockModule`. As the name suggests, this API is still work in progress, please follow [this issue](https://github.com/jestjs/jest/issues/10025) for updates.

The usage of `jest.unstable_mockModule` is essentially the same as `jest.mock` with two differences: the factory function is required and it can be sync or async:

```
import {jest} from '@jest/globals';jest.unstable_mockModule('node:child_process', () => ({  execSync: jest.fn(),  // etc.}));const {execSync} = await import('node:child_process');// etc.
```

## Module unmocking in ESM[​](#module-unmocking-in-esm "Direct link to Module unmocking in ESM")

esm-module.mjs

```
export default () => {  return 'default';};export const namedFn = () => {  return 'namedFn';};
```

esm-module.test.mjs

```
import {jest, test} from '@jest/globals';test('test esm-module', async () => {  jest.unstable_mockModule('./esm-module.js', () => ({    default: () => 'default implementation',    namedFn: () => 'namedFn implementation',  }));  const mockModule = await import('./esm-module.js');  console.log(mockModule.default()); // 'default implementation'  console.log(mockModule.namedFn()); // 'namedFn implementation'  jest.unstable_unmockModule('./esm-module.js');  const originalModule = await import('./esm-module.js');  console.log(originalModule.default()); // 'default'  console.log(originalModule.namedFn()); // 'namedFn'  /* !!! WARNING !!! Don`t override */  jest.unstable_mockModule('./esm-module.js', () => ({    default: () => 'default override implementation',    namedFn: () => 'namedFn override implementation',  }));  const mockModuleOverride = await import('./esm-module.js');  console.log(mockModuleOverride.default()); // 'default implementation'  console.log(mockModuleOverride.namedFn()); // 'namedFn implementation'});
```

## Mocking CJS modules[​](#mocking-cjs-modules "Direct link to Mocking CJS modules")

For mocking CJS modules, you should continue to use `jest.mock`. See the example below:

main.cjs

```
const {BrowserWindow, app} = require('electron');// etc.module.exports = {example};
```

main.test.cjs

```
import {createRequire} from 'node:module';import {jest} from '@jest/globals';const require = createRequire(import.meta.url);jest.mock('electron', () => ({  app: {    on: jest.fn(),    whenReady: jest.fn(() => Promise.resolve()),  },  BrowserWindow: jest.fn().mockImplementation(() => ({    // partial mocks.  })),}));const {BrowserWindow} = require('electron');const exported = require('./main.cjs');// alternativelyconst {BrowserWindow} = (await import('electron')).default;const exported = await import('./main.cjs');// etc.
```
