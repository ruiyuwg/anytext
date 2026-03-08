Version: 30.0

On this page

Upgrading Jest from v28 to v29? This guide aims to help refactoring your configuration and tests.

info

See [changelog](https://github.com/jestjs/jest/blob/main/CHANGELOG.md#2900) for the full list of changes.

note

Upgrading from an older version? You can see the upgrade guide from v27 to v28 [here](/docs/28.x/upgrading-to-jest28).

## Compatibility[​](#compatibility "Direct link to Compatibility")

The supported Node versions are 14.15, 16.10, 18.0 and above.

## Snapshot format[​](#snapshot-format "Direct link to Snapshot format")

As announced in the [Jest 28 blog post](/blog/2022/04/25/jest-28#future), Jest 29 has changed the default snapshot formatting to `{escapeString: false, printBasicPrototype: false}`.

If you want to keep the old behavior, you can set the `snapshotFormat` property to:

```
+ snapshotFormat: {+   escapeString: true,+   printBasicPrototype: true+ }
```

## JSDOM upgrade[​](#jsdom-upgrade "Direct link to JSDOM upgrade")

`jest-environment-jsdom` has upgraded `jsdom` from v19 to v20.

info

If you use `jest-environment-jsdom`, the minimum TypeScript version is set to `4.5`.

Notably, `jsdom@20` includes support for `crypto.getRandomValues()`, which means packages like `uuid` and `nanoid`, which doesn't work properly in Jest@28, can work without extra polyfills.

## `pretty-format`[​](#pretty-format "Direct link to pretty-format")

`ConvertAnsi` plugin is removed from `pretty-format` package in favour of [`jest-serializer-ansi-escapes`](https://github.com/mrazauskas/jest-serializer-ansi-escapes).

### `jest-mock`[​](#jest-mock "Direct link to jest-mock")

Exports of `Mocked*` utility types from `jest-mock` package have changed. `MaybeMockedDeep` and `MaybeMocked` now are exported as `Mocked` and `MockedShallow` respectively; only deep mocked variants of `MockedClass`, `MockedFunction` and `MockedObject` are exposed.

## TypeScript[​](#typescript "Direct link to TypeScript")

info

The TypeScript examples from this page will only work as documented if you explicitly import Jest APIs:

```
import {expect, jest, test} from '@jest/globals';
```

Consult the [Getting Started](/docs/getting-started#using-typescript) guide for details on how to setup Jest with TypeScript.

### `jest.mocked()`[​](#jestmocked "Direct link to jestmocked")

The [`jest.mocked()`](/docs/mock-function-api#jestmockedsource-options) helper method now wraps types of deep members of passed object by default. If you have used the method with `true` as the second argument, remove it to avoid type errors:

```
- const mockedObject = jest.mocked(someObject, true);+ const mockedObject = jest.mocked(someObject);
```

To have the old shallow mocked behavior, pass `{shallow: true}` as the second argument:

```
- const mockedObject = jest.mocked(someObject);+ const mockedObject = jest.mocked(someObject, {shallow: true});
```
