Version: 30.0

On this page

Mock functions are also known as "spies", because they let you spy on the behavior of a function that is called indirectly by some other code, rather than only testing the output. You can create a mock function with `jest.fn()`. If no implementation is given, the mock function will return `undefined` when invoked.

info

The TypeScript examples from this page will only work as documented if you explicitly import Jest APIs:

```
import {expect, jest, test} from '@jest/globals';
```

Consult the [Getting Started](/docs/getting-started#using-typescript) guide for details on how to setup Jest with TypeScript.

## Methods[​](#methods "Direct link to Methods")

-   [Reference](#reference)
    -   [`mockFn.getMockName()`](#mockfngetmockname)
    -   [`mockFn.mock.calls`](#mockfnmockcalls)
    -   [`mockFn.mock.results`](#mockfnmockresults)
    -   [`mockFn.mock.instances`](#mockfnmockinstances)
    -   [`mockFn.mock.contexts`](#mockfnmockcontexts)
    -   [`mockFn.mock.lastCall`](#mockfnmocklastcall)
    -   [`mockFn.mockClear()`](#mockfnmockclear)
    -   [`mockFn.mockReset()`](#mockfnmockreset)
    -   [`mockFn.mockRestore()`](#mockfnmockrestore)
    -   [`mockFn.mockImplementation(fn)`](#mockfnmockimplementationfn)
    -   [`mockFn.mockImplementationOnce(fn)`](#mockfnmockimplementationoncefn)
    -   [`mockFn.mockName(name)`](#mockfnmocknamename)
    -   [`mockFn.mockReturnThis()`](#mockfnmockreturnthis)
    -   [`mockFn.mockReturnValue(value)`](#mockfnmockreturnvaluevalue)
    -   [`mockFn.mockReturnValueOnce(value)`](#mockfnmockreturnvalueoncevalue)
    -   [`mockFn.mockResolvedValue(value)`](#mockfnmockresolvedvaluevalue)
    -   [`mockFn.mockResolvedValueOnce(value)`](#mockfnmockresolvedvalueoncevalue)
    -   [`mockFn.mockRejectedValue(value)`](#mockfnmockrejectedvaluevalue)
    -   [`mockFn.mockRejectedValueOnce(value)`](#mockfnmockrejectedvalueoncevalue)
    -   [`mockFn.withImplementation(fn, callback)`](#mockfnwithimplementationfn-callback)
-   [Replaced Properties](#replaced-properties)
    -   [`replacedProperty.replaceValue(value)`](#replacedpropertyreplacevaluevalue)
    -   [`replacedProperty.restore()`](#replacedpropertyrestore)
-   [TypeScript Usage](#typescript-usage)
    -   [`jest.fn(implementation?)`](#jestfnimplementation)
    -   [`jest.Mock<T>`](#jestmockt)
    -   [`jest.Mocked<Source>`](#jestmockedsource)
    -   [`jest.Replaced<Source>`](#jestreplacedsource)
    -   [`jest.mocked(source, options?)`](#jestmockedsource-options)
    -   [`jest.Spied<Source>`](#jestspiedsource)

* * *

## Reference[​](#reference "Direct link to Reference")

### `mockFn.getMockName()`[​](#mockfngetmockname "Direct link to mockfngetmockname")

Returns the mock name string set by calling [`.mockName()`](#mockfnmocknamename).

### `mockFn.mock.calls`[​](#mockfnmockcalls "Direct link to mockfnmockcalls")

An array containing the call arguments of all calls that have been made to this mock function. Each item in the array is an array of arguments that were passed during the call.

For example: A mock function `f` that has been called twice, with the arguments `f('arg1', 'arg2')`, and then with the arguments `f('arg3', 'arg4')`, would have a `mock.calls` array that looks like this:

```
[  ['arg1', 'arg2'],  ['arg3', 'arg4'],];
```

### `mockFn.mock.results`[​](#mockfnmockresults "Direct link to mockfnmockresults")

An array containing the results of all calls that have been made to this mock function. Each entry in this array is an object containing a `type` property, and a `value` property. `type` will be one of the following:

-   `'return'` - Indicates that the call completed by returning normally.
-   `'throw'` - Indicates that the call completed by throwing a value.
-   `'incomplete'` - Indicates that the call has not yet completed. This occurs if you test the result from within the mock function itself, or from within a function that was called by the mock.

The `value` property contains the value that was thrown or returned. `value` is undefined when `type === 'incomplete'`.

For example: A mock function `f` that has been called three times, returning `'result1'`, throwing an error, and then returning `'result2'`, would have a `mock.results` array that looks like this:

```
[  {    type: 'return',    value: 'result1',  },  {    type: 'throw',    value: {      /* Error instance */    },  },  {    type: 'return',    value: 'result2',  },];
```

### `mockFn.mock.instances`[​](#mockfnmockinstances "Direct link to mockfnmockinstances")

An array that contains all the object instances that have been instantiated from this mock function using `new`.

For example: A mock function that has been instantiated twice would have the following `mock.instances` array:

```
const mockFn = jest.fn();const a = new mockFn();const b = new mockFn();mockFn.mock.instances[0] === a; // truemockFn.mock.instances[1] === b; // true
```

### `mockFn.mock.contexts`[​](#mockfnmockcontexts "Direct link to mockfnmockcontexts")

An array that contains the contexts for all calls of the mock function.

A context is the `this` value that a function receives when called. The context can be set using `Function.prototype.bind`, `Function.prototype.call` or `Function.prototype.apply`.

For example:

```
const mockFn = jest.fn();const boundMockFn = mockFn.bind(thisContext0);boundMockFn('a', 'b');mockFn.call(thisContext1, 'a', 'b');mockFn.apply(thisContext2, ['a', 'b']);mockFn.mock.contexts[0] === thisContext0; // truemockFn.mock.contexts[1] === thisContext1; // truemockFn.mock.contexts[2] === thisContext2; // true
```

### `mockFn.mock.lastCall`[​](#mockfnmocklastcall "Direct link to mockfnmocklastcall")

An array containing the call arguments of the last call that was made to this mock function. If the function was not called, it will return `undefined`.

For example: A mock function `f` that has been called twice, with the arguments `f('arg1', 'arg2')`, and then with the arguments `f('arg3', 'arg4')`, would have a `mock.lastCall` array that looks like this:

```
['arg3', 'arg4'];
```

### `mockFn.mockClear()`[​](#mockfnmockclear "Direct link to mockfnmockclear")

Clears all information stored in the [`mockFn.mock.calls`](#mockfnmockcalls), [`mockFn.mock.instances`](#mockfnmockinstances), [`mockFn.mock.contexts`](#mockfnmockcontexts) and [`mockFn.mock.results`](#mockfnmockresults) arrays. Often this is useful when you want to clean up a mocks usage data between two assertions.

The [`clearMocks`](/docs/configuration#clearmocks-boolean) configuration option is available to clear mocks automatically before each tests.

caution

Beware that `mockFn.mockClear()` will replace `mockFn.mock`, not just reset the values of its properties! You should, therefore, avoid assigning `mockFn.mock` to other variables, temporary or not, to make sure you don't access stale data.

### `mockFn.mockReset()`[​](#mockfnmockreset "Direct link to mockfnmockreset")

Does everything that [`mockFn.mockClear()`](#mockfnmockclear) does, and also replaces the mock implementation with an empty function, returning `undefined`.

The [`resetMocks`](/docs/configuration#resetmocks-boolean) configuration option is available to reset mocks automatically before each test.

### `mockFn.mockRestore()`[​](#mockfnmockrestore "Direct link to mockfnmockrestore")

Does everything that [`mockFn.mockReset()`](#mockfnmockreset) does, and also restores the original (non-mocked) implementation.

This is useful when you want to mock functions in certain test cases and restore the original implementation in others.

The [`restoreMocks`](/docs/configuration#restoremocks-boolean) configuration option is available to restore mocks automatically before each test.

info

`mockFn.mockRestore()` only works when the mock was created with `jest.spyOn()`. Thus you have to take care of restoration yourself when manually assigning `jest.fn()`.

### `mockFn.mockImplementation(fn)`[​](#mockfnmockimplementationfn "Direct link to mockfnmockimplementationfn")

Accepts a function that should be used as the implementation of the mock. The mock itself will still record all calls that go into and instances that come from itself – the only difference is that the implementation will also be executed when the mock is called.

tip

`jest.fn(implementation)` is a shorthand for `jest.fn().mockImplementation(implementation)`.

-   JavaScript
-   TypeScript

```
const mockFn = jest.fn(scalar => 42 + scalar);mockFn(0); // 42mockFn(1); // 43mockFn.mockImplementation(scalar => 36 + scalar);mockFn(2); // 38mockFn(3); // 39
```

```
import {jest} from '@jest/globals';const mockFn = jest.fn((scalar: number) => 42 + scalar);mockFn(0); // 42mockFn(1); // 43mockFn.mockImplementation(scalar => 36 + scalar);mockFn(2); // 38mockFn(3); // 39
```

`.mockImplementation()` can also be used to mock class constructors:

-   JavaScript
-   TypeScript

SomeClass.js

```
module.exports = class SomeClass {  method(a, b) {}};
```

SomeClass.test.js

```
const SomeClass = require('./SomeClass');jest.mock('./SomeClass'); // this happens automatically with automockingconst mockMethod = jest.fn();SomeClass.mockImplementation(() => {  return {    method: mockMethod,  };});const some = new SomeClass();some.method('a', 'b');console.log('Calls to method:', mockMethod.mock.calls);
```

SomeClass.ts

```
export class SomeClass {  method(a: string, b: string): void {}}
```

SomeClass.test.ts

```
import {jest} from '@jest/globals';import {SomeClass} from './SomeClass';jest.mock('./SomeClass'); // this happens automatically with automockingconst mockMethod = jest.fn<(a: string, b: string) => void>();jest.mocked(SomeClass).mockImplementation(() => {  return {    method: mockMethod,  };});const some = new SomeClass();some.method('a', 'b');console.log('Calls to method:', mockMethod.mock.calls);
```

### `mockFn.mockImplementationOnce(fn)`[​](#mockfnmockimplementationoncefn "Direct link to mockfnmockimplementationoncefn")

Accepts a function that will be used as an implementation of the mock for one call to the mocked function. Can be chained so that multiple function calls produce different results.

-   JavaScript
-   TypeScript

```
const mockFn = jest  .fn()  .mockImplementationOnce(cb => cb(null, true))  .mockImplementationOnce(cb => cb(null, false));mockFn((err, val) => console.log(val)); // truemockFn((err, val) => console.log(val)); // false
```

```
import {jest} from '@jest/globals';const mockFn = jest  .fn<(cb: (a: null, b: boolean) => void) => void>()  .mockImplementationOnce(cb => cb(null, true))  .mockImplementationOnce(cb => cb(null, false));mockFn((err, val) => console.log(val)); // truemockFn((err, val) => console.log(val)); // false
```

When the mocked function runs out of implementations defined with `.mockImplementationOnce()`, it will execute the default implementation set with `jest.fn(() => defaultValue)` or `.mockImplementation(() => defaultValue)` if they were called:

```
const mockFn = jest  .fn(() => 'default')  .mockImplementationOnce(() => 'first call')  .mockImplementationOnce(() => 'second call');mockFn(); // 'first call'mockFn(); // 'second call'mockFn(); // 'default'mockFn(); // 'default'
```

### `mockFn.mockName(name)`[​](#mockfnmocknamename "Direct link to mockfnmocknamename")

Accepts a string to use in test result output in place of `'jest.fn()'` to indicate which mock function is being referenced.

For example:

```
const mockFn = jest.fn().mockName('mockedFunction');// mockFn();expect(mockFn).toHaveBeenCalled();
```

Will result in this error:

```
expect(mockedFunction).toHaveBeenCalled()Expected number of calls: >= 1Received number of calls:    0
```

### `mockFn.mockReturnThis()`[​](#mockfnmockreturnthis "Direct link to mockfnmockreturnthis")

Shorthand for:

```
jest.fn(function () {  return this;});
```

### `mockFn.mockReturnValue(value)`[​](#mockfnmockreturnvaluevalue "Direct link to mockfnmockreturnvaluevalue")

Shorthand for:

```
jest.fn().mockImplementation(() => value);
```

Accepts a value that will be returned whenever the mock function is called.

-   JavaScript
-   TypeScript

```
const mock = jest.fn();mock.mockReturnValue(42);mock(); // 42mock.mockReturnValue(43);mock(); // 43
```

```
import {jest} from '@jest/globals';const mock = jest.fn<() => number>();mock.mockReturnValue(42);mock(); // 42mock.mockReturnValue(43);mock(); // 43
```

### `mockFn.mockReturnValueOnce(value)`[​](#mockfnmockreturnvalueoncevalue "Direct link to mockfnmockreturnvalueoncevalue")

Shorthand for:

```
jest.fn().mockImplementationOnce(() => value);
```

Accepts a value that will be returned for one call to the mock function. Can be chained so that successive calls to the mock function return different values. When there are no more `mockReturnValueOnce` values to use, calls will return a value specified by `mockReturnValue`.

-   JavaScript
-   TypeScript

```
const mockFn = jest  .fn()  .mockReturnValue('default')  .mockReturnValueOnce('first call')  .mockReturnValueOnce('second call');mockFn(); // 'first call'mockFn(); // 'second call'mockFn(); // 'default'mockFn(); // 'default'
```

```
import {jest} from '@jest/globals';const mockFn = jest  .fn<() => string>()  .mockReturnValue('default')  .mockReturnValueOnce('first call')  .mockReturnValueOnce('second call');mockFn(); // 'first call'mockFn(); // 'second call'mockFn(); // 'default'mockFn(); // 'default'
```

### `mockFn.mockResolvedValue(value)`[​](#mockfnmockresolvedvaluevalue "Direct link to mockfnmockresolvedvaluevalue")

Shorthand for:

```
jest.fn().mockImplementation(() => Promise.resolve(value));
```

Useful to mock async functions in async tests:

-   JavaScript
-   TypeScript

```
test('async test', async () => {  const asyncMock = jest.fn().mockResolvedValue(43);  await asyncMock(); // 43});
```

```
import {jest, test} from '@jest/globals';test('async test', async () => {  const asyncMock = jest.fn<() => Promise<number>>().mockResolvedValue(43);  await asyncMock(); // 43});
```

### `mockFn.mockResolvedValueOnce(value)`[​](#mockfnmockresolvedvalueoncevalue "Direct link to mockfnmockresolvedvalueoncevalue")

Shorthand for:

```
jest.fn().mockImplementationOnce(() => Promise.resolve(value));
```

Useful to resolve different values over multiple async calls:

-   JavaScript
-   TypeScript

```
test('async test', async () => {  const asyncMock = jest    .fn()    .mockResolvedValue('default')    .mockResolvedValueOnce('first call')    .mockResolvedValueOnce('second call');  await asyncMock(); // 'first call'  await asyncMock(); // 'second call'  await asyncMock(); // 'default'  await asyncMock(); // 'default'});
```

```
import {jest, test} from '@jest/globals';test('async test', async () => {  const asyncMock = jest    .fn<() => Promise<string>>()    .mockResolvedValue('default')    .mockResolvedValueOnce('first call')    .mockResolvedValueOnce('second call');  await asyncMock(); // 'first call'  await asyncMock(); // 'second call'  await asyncMock(); // 'default'  await asyncMock(); // 'default'});
```

### `mockFn.mockRejectedValue(value)`[​](#mockfnmockrejectedvaluevalue "Direct link to mockfnmockrejectedvaluevalue")

Shorthand for:

```
jest.fn().mockImplementation(() => Promise.reject(value));
```

Useful to create async mock functions that will always reject:

-   JavaScript
-   TypeScript

```
test('async test', async () => {  const asyncMock = jest    .fn()    .mockRejectedValue(new Error('Async error message'));  await asyncMock(); // throws 'Async error message'});
```

```
import {jest, test} from '@jest/globals';test('async test', async () => {  const asyncMock = jest    .fn<() => Promise<never>>()    .mockRejectedValue(new Error('Async error message'));  await asyncMock(); // throws 'Async error message'});
```

### `mockFn.mockRejectedValueOnce(value)`[​](#mockfnmockrejectedvalueoncevalue "Direct link to mockfnmockrejectedvalueoncevalue")

Shorthand for:

```
jest.fn().mockImplementationOnce(() => Promise.reject(value));
```

Useful together with `.mockResolvedValueOnce()` or to reject with different exceptions over multiple async calls:

-   JavaScript
-   TypeScript

```
test('async test', async () => {  const asyncMock = jest    .fn()    .mockResolvedValueOnce('first call')    .mockRejectedValueOnce(new Error('Async error message'));  await asyncMock(); // 'first call'  await asyncMock(); // throws 'Async error message'});
```

```
import {jest, test} from '@jest/globals';test('async test', async () => {  const asyncMock = jest    .fn<() => Promise<string>>()    .mockResolvedValueOnce('first call')    .mockRejectedValueOnce(new Error('Async error message'));  await asyncMock(); // 'first call'  await asyncMock(); // throws 'Async error message'});
```

### `mockFn.withImplementation(fn, callback)`[​](#mockfnwithimplementationfn-callback "Direct link to mockfnwithimplementationfn-callback")

Accepts a function which should be temporarily used as the implementation of the mock while the callback is being executed.

```
test('test', () => {  const mock = jest.fn(() => 'outside callback');  mock.withImplementation(    () => 'inside callback',    () => {      mock(); // 'inside callback'    },  );  mock(); // 'outside callback'});
```

`mockFn.withImplementation` can be used regardless of whether or not the callback is asynchronous (returns a `thenable`). If the callback is asynchronous a promise will be returned. Awaiting the promise will await the callback and reset the implementation.

```
test('async test', async () => {  const mock = jest.fn(() => 'outside callback');  // We await this call since the callback is async  await mock.withImplementation(    () => 'inside callback',    async () => {      mock(); // 'inside callback'    },  );  mock(); // 'outside callback'});
```

## Replaced Properties[​](#replaced-properties "Direct link to Replaced Properties")

### `replacedProperty.replaceValue(value)`[​](#replacedpropertyreplacevaluevalue "Direct link to replacedpropertyreplacevaluevalue")

Changes the value of already replaced property. This is useful when you want to replace property and then adjust the value in specific tests. As an alternative, you can call [`jest.replaceProperty()`](/docs/jest-object#jestreplacepropertyobject-propertykey-value) multiple times on same property.

### `replacedProperty.restore()`[​](#replacedpropertyrestore "Direct link to replacedpropertyrestore")

Restores object's property to the original value.

Beware that `replacedProperty.restore()` only works when the property value was replaced with [`jest.replaceProperty()`](/docs/jest-object#jestreplacepropertyobject-propertykey-value).

The [`restoreMocks`](/docs/configuration#restoremocks-boolean) configuration option is available to restore replaced properties automatically before each test.

## TypeScript Usage[​](#typescript-usage "Direct link to TypeScript Usage")

info

The TypeScript examples from this page will only work as documented if you explicitly import Jest APIs:

```
import {expect, jest, test} from '@jest/globals';
```

Consult the [Getting Started](/docs/getting-started#using-typescript) guide for details on how to setup Jest with TypeScript.

### `jest.fn(implementation?)`[​](#jestfnimplementation "Direct link to jestfnimplementation")

Correct mock typings will be inferred if implementation is passed to [`jest.fn()`](/docs/jest-object#jestfnimplementation). There are many use cases where the implementation is omitted. To ensure type safety you may pass a generic type argument (also see the examples above for more reference):

```
import {expect, jest, test} from '@jest/globals';import type add from './add';import calculate from './calc';test('calculate calls add', () => {  // Create a new mock that can be used in place of `add`.  const mockAdd = jest.fn<typeof add>();  // `.mockImplementation()` now can infer that `a` and `b` are `number`  // and that the returned value is a `number`.  mockAdd.mockImplementation((a, b) => {    // Yes, this mock is still adding two numbers but imagine this    // was a complex function we are mocking.    return a + b;  });  // `mockAdd` is properly typed and therefore accepted by anything  // requiring `add`.  calculate(mockAdd, 1, 2);  expect(mockAdd).toHaveBeenCalledTimes(1);  expect(mockAdd).toHaveBeenCalledWith(1, 2);});
```

### `jest.Mock<T>`[​](#jestmockt "Direct link to jestmockt")

Constructs the type of a mock function, e.g. the return type of `jest.fn()`. It can be useful if you have to defined a recursive mock function:

```
import {jest} from '@jest/globals';const sumRecursively: jest.Mock<(value: number) => number> = jest.fn(value => {  if (value === 0) {    return 0;  } else {    return value + fn(value - 1);  }});
```

### `jest.Mocked<Source>`[​](#jestmockedsource "Direct link to jestmockedsource")

The `jest.Mocked<Source>` utility type returns the `Source` type wrapped with type definitions of Jest mock function.

```
import {expect, jest, test} from '@jest/globals';import type {fetch} from 'node-fetch';jest.mock('node-fetch');let mockedFetch: jest.Mocked<typeof fetch>;afterEach(() => {  mockedFetch.mockClear();});test('makes correct call', () => {  mockedFetch = getMockedFetch();  // ...});test('returns correct data', () => {  mockedFetch = getMockedFetch();  // ...});
```

Types of classes, functions or objects can be passed as type argument to `jest.Mocked<Source>`. If you prefer to constrain the input type, use: `jest.MockedClass<Source>`, `jest.MockedFunction<Source>` or `jest.MockedObject<Source>`.

### `jest.Replaced<Source>`[​](#jestreplacedsource "Direct link to jestreplacedsource")

The `jest.Replaced<Source>` utility type returns the `Source` type wrapped with type definitions of Jest [replaced property](#replaced-properties).

src/utils.ts

```
export function isLocalhost(): boolean {  return process.env['HOSTNAME'] === 'localhost';}
```

src/\_\_tests\_\_/utils.test.ts

```
import {afterEach, expect, it, jest} from '@jest/globals';import {isLocalhost} from '../utils';let replacedEnv: jest.Replaced<typeof process.env> | undefined = undefined;afterEach(() => {  replacedEnv?.restore();});it('isLocalhost should detect localhost environment', () => {  replacedEnv = jest.replaceProperty(process, 'env', {HOSTNAME: 'localhost'});  expect(isLocalhost()).toBe(true);});it('isLocalhost should detect non-localhost environment', () => {  replacedEnv = jest.replaceProperty(process, 'env', {HOSTNAME: 'example.com'});  expect(isLocalhost()).toBe(false);});
```

### `jest.mocked(source, options?)`[​](#jestmockedsource-options "Direct link to jestmockedsource-options")

The `mocked()` helper method wraps types of the `source` object and its deep nested members with type definitions of Jest mock function. You can pass `{shallow: true}` as the `options` argument to disable the deeply mocked behavior.

Returns the `source` object.

song.ts

```
export const song = {  one: {    more: {      time: (t: number) => {        return t;      },    },  },};
```

song.test.ts

```
import {expect, jest, test} from '@jest/globals';import {song} from './song';jest.mock('./song');jest.spyOn(console, 'log');const mockedSong = jest.mocked(song);// or through `jest.Mocked<Source>`// const mockedSong = song as jest.Mocked<typeof song>;test('deep method is typed correctly', () => {  mockedSong.one.more.time.mockReturnValue(12);  expect(mockedSong.one.more.time(10)).toBe(12);  expect(mockedSong.one.more.time.mock.calls).toHaveLength(1);});test('direct usage', () => {  jest.mocked(console.log).mockImplementation(() => {    return;  });  console.log('one more time');  expect(jest.mocked(console.log).mock.calls).toHaveLength(1);});
```

### `jest.Spied<Source>`[​](#jestspiedsource "Direct link to jestspiedsource")

Constructs the type of a spied class or function (i.e. the return type of `jest.spyOn()`).

\_\_utils\_\_/setDateNow.ts

```
import {jest} from '@jest/globals';export function setDateNow(now: number): jest.Spied<typeof Date.now> {  return jest.spyOn(Date, 'now').mockReturnValue(now);}
```

```
import {afterEach, expect, type jest, test} from '@jest/globals';import {setDateNow} from './__utils__/setDateNow';let spiedDateNow: jest.Spied<typeof Date.now> | undefined = undefined;afterEach(() => {  spiedDateNow?.mockReset();});test('renders correctly with a given date', () => {  spiedDateNow = setDateNow(1_482_363_367_071);  // ...  expect(spiedDateNow).toHaveBeenCalledTimes(1);});
```

Types of a class or function can be passed as type argument to `jest.Spied<Source>`. If you prefer to constrain the input type, use: `jest.SpiedClass<Source>` or `jest.SpiedFunction<Source>`.

Use `jest.SpiedGetter<Source>` or `jest.SpiedSetter<Source>` to create the type of a spied getter or setter respectively.
