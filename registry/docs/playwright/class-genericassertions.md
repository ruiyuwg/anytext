On this page

The [GenericAssertions](/docs/api/class-genericassertions "GenericAssertions") class provides assertion methods that can be used to make assertions about any values in the tests. A new instance of [GenericAssertions](/docs/api/class-genericassertions "GenericAssertions") is created by calling [expect()](/docs/api/class-playwrightassertions#playwright-assertions-expect-generic):

```
import { test, expect } from '@playwright/test';test('assert a value', async ({ page }) => {  const value = 1;  expect(value).toBe(2);});
```

* * *

## Methods[​](#methods "Direct link to Methods")

### any[​](#generic-assertions-any "Direct link to any")

Added in: v1.9 genericAssertions.any

`expect.any()` matches any object instance created from the [constructor](/docs/api/class-genericassertions#generic-assertions-any-option-constructor) or a corresponding primitive type. Use it inside [expect(value).toEqual()](/docs/api/class-genericassertions#generic-assertions-to-equal) to perform pattern matching.

**Usage**

```
// Match instance of a class.class Example {}expect(new Example()).toEqual(expect.any(Example));// Match any number.expect({ prop: 1 }).toEqual({ prop: expect.any(Number) });// Match any string.expect('abc').toEqual(expect.any(String));
```

**Arguments**

-   `constructor` [Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function "Function")[#](#generic-assertions-any-option-constructor)
    
    Constructor of the expected object like `ExampleClass`, or a primitive boxed type like `Number`.
    

* * *

### anything[​](#generic-assertions-anything "Direct link to anything")

Added in: v1.9 genericAssertions.anything

`expect.anything()` matches everything except `null` and `undefined`. Use it inside [expect(value).toEqual()](/docs/api/class-genericassertions#generic-assertions-to-equal) to perform pattern matching.

**Usage**

```
const value = { prop: 1 };expect(value).toEqual({ prop: expect.anything() });expect(value).not.toEqual({ otherProp: expect.anything() });
```

* * *

### arrayContaining[​](#generic-assertions-array-containing "Direct link to arrayContaining")

Added in: v1.9 genericAssertions.arrayContaining

`expect.arrayContaining()` matches an array that contains all of the elements in the expected array, in any order. Note that received array may be a superset of the expected array and contain some extra elements.

Use this method inside [expect(value).toEqual()](/docs/api/class-genericassertions#generic-assertions-to-equal) to perform pattern matching.

**Usage**

```
expect([1, 2, 3]).toEqual(expect.arrayContaining([3, 1]));expect([1, 2, 3]).not.toEqual(expect.arrayContaining([1, 4]));
```

**Arguments**

-   `expected` [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")<[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")\>[#](#generic-assertions-array-containing-option-expected)
    
    Expected array that is a subset of the received value.
    

* * *

### arrayOf[​](#generic-assertions-array-of "Direct link to arrayOf")

Added in: v1.57 genericAssertions.arrayOf

`expect.arrayOf()` matches array of objects created from the [constructor](/docs/api/class-genericassertions#generic-assertions-array-of-option-constructor) or a corresponding primitive type. Use it inside [expect(value).toEqual()](/docs/api/class-genericassertions#generic-assertions-to-equal) to perform pattern matching.

**Usage**

```
// Match instance of a class.class Example {}expect([new Example(), new Example()]).toEqual(expect.arrayOf(Example));// Match any string.expect(['a', 'b', 'c']).toEqual(expect.arrayOf(String));
```

**Arguments**

-   `constructor` [Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function "Function")[#](#generic-assertions-array-of-option-constructor)
    
    Constructor of the expected object like `ExampleClass`, or a primitive boxed type like `Number`.
    

* * *

### closeTo[​](#generic-assertions-close-to "Direct link to closeTo")

Added in: v1.9 genericAssertions.closeTo

Compares floating point numbers for approximate equality. Use this method inside [expect(value).toEqual()](/docs/api/class-genericassertions#generic-assertions-to-equal) to perform pattern matching. When just comparing two numbers, prefer [expect(value).toBeCloseTo()](/docs/api/class-genericassertions#generic-assertions-to-be-close-to).

**Usage**

```
expect({ prop: 0.1 + 0.2 }).not.toEqual({ prop: 0.3 });expect({ prop: 0.1 + 0.2 }).toEqual({ prop: expect.closeTo(0.3, 5) });
```

**Arguments**

-   `expected` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")[#](#generic-assertions-close-to-option-expected)
    
    Expected value.
    
-   `numDigits` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#generic-assertions-close-to-option-num-digits)
    
    The number of decimal digits after the decimal point that must be equal.
    

* * *

### objectContaining[​](#generic-assertions-object-containing "Direct link to objectContaining")

Added in: v1.9 genericAssertions.objectContaining

`expect.objectContaining()` matches an object that contains and matches all of the properties in the expected object. Note that received object may be a superset of the expected object and contain some extra properties.

Use this method inside [expect(value).toEqual()](/docs/api/class-genericassertions#generic-assertions-to-equal) to perform pattern matching. Object properties can be matchers to further relax the expectation. See examples.

**Usage**

```
// Assert some of the properties.expect({ foo: 1, bar: 2 }).toEqual(expect.objectContaining({ foo: 1 }));// Matchers can be used on the properties as well.expect({ foo: 1, bar: 2 }).toEqual(expect.objectContaining({ bar: expect.any(Number) }));// Complex matching of sub-properties.expect({  list: [1, 2, 3],  obj: { prop: 'Hello world!', another: 'some other value' },  extra: 'extra',}).toEqual(expect.objectContaining({  list: expect.arrayContaining([2, 3]),  obj: expect.objectContaining({ prop: expect.stringContaining('Hello') }),}));
```

**Arguments**

-   `expected` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")[#](#generic-assertions-object-containing-option-expected)
    
    Expected object pattern that contains a subset of the properties.
    

* * *

### stringContaining[​](#generic-assertions-string-containing "Direct link to stringContaining")

Added in: v1.9 genericAssertions.stringContaining

`expect.stringContaining()` matches a string that contains the expected substring. Use this method inside [expect(value).toEqual()](/docs/api/class-genericassertions#generic-assertions-to-equal) to perform pattern matching.

**Usage**

```
expect('Hello world!').toEqual(expect.stringContaining('Hello'));
```

**Arguments**

-   `expected` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#generic-assertions-string-containing-option-expected)
    
    Expected substring.
    

* * *

### stringMatching[​](#generic-assertions-string-matching "Direct link to stringMatching")

Added in: v1.9 genericAssertions.stringMatching

`expect.stringMatching()` matches a received string that in turn matches the expected pattern. Use this method inside [expect(value).toEqual()](/docs/api/class-genericassertions#generic-assertions-to-equal) to perform pattern matching.

**Usage**

```
expect('123ms').toEqual(expect.stringMatching(/\d+m?s/));// Inside another matcher.expect({  status: 'passed',  time: '123ms',}).toEqual({  status: expect.stringMatching(/passed|failed/),  time: expect.stringMatching(/\d+m?s/),});
```

**Arguments**

-   `expected` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string") | [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp "RegExp")[#](#generic-assertions-string-matching-option-expected)
    
    Pattern that expected string should match.
    

* * *

### toBe[​](#generic-assertions-to-be "Direct link to toBe")

Added in: v1.9 genericAssertions.toBe

Compares value with [expected](/docs/api/class-genericassertions#generic-assertions-to-be-option-expected) by calling `Object.is`. This method compares objects by reference instead of their contents, similarly to the strict equality operator `===`.

**Usage**

```
const value = { prop: 1 };expect(value).toBe(value);expect(value).not.toBe({});expect(value.prop).toBe(1);
```

**Arguments**

-   `expected` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")[#](#generic-assertions-to-be-option-expected)
    
    Expected value.
    

* * *

### toBeCloseTo[​](#generic-assertions-to-be-close-to "Direct link to toBeCloseTo")

Added in: v1.9 genericAssertions.toBeCloseTo

Compares floating point numbers for approximate equality. Use this method instead of [expect(value).toBe()](/docs/api/class-genericassertions#generic-assertions-to-be) when comparing floating point numbers.

**Usage**

```
expect(0.1 + 0.2).not.toBe(0.3);expect(0.1 + 0.2).toBeCloseTo(0.3, 5);
```

**Arguments**

-   `expected` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")[#](#generic-assertions-to-be-close-to-option-expected)
    
    Expected value.
    
-   `numDigits` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") _(optional)_[#](#generic-assertions-to-be-close-to-option-num-digits)
    
    The number of decimal digits after the decimal point that must be equal.
    

* * *

### toBeDefined[​](#generic-assertions-to-be-defined "Direct link to toBeDefined")

Added in: v1.9 genericAssertions.toBeDefined

Ensures that value is not `undefined`.

**Usage**

```
const value = null;expect(value).toBeDefined();
```

* * *

### toBeFalsy[​](#generic-assertions-to-be-falsy "Direct link to toBeFalsy")

Added in: v1.9 genericAssertions.toBeFalsy

Ensures that value is false in a boolean context, one of `false`, `0`, `''`, `null`, `undefined` or `NaN`. Use this method when you don't care about the specific value.

**Usage**

```
const value = null;expect(value).toBeFalsy();
```

* * *

### toBeGreaterThan[​](#generic-assertions-to-be-greater-than "Direct link to toBeGreaterThan")

Added in: v1.9 genericAssertions.toBeGreaterThan

Ensures that `value > expected` for number or big integer values.

**Usage**

```
const value = 42;expect(value).toBeGreaterThan(1);
```

**Arguments**

-   `expected` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") | \[bigint\][#](#generic-assertions-to-be-greater-than-option-expected)
    
    The value to compare to.
    

* * *

### toBeGreaterThanOrEqual[​](#generic-assertions-to-be-greater-than-or-equal "Direct link to toBeGreaterThanOrEqual")

Added in: v1.9 genericAssertions.toBeGreaterThanOrEqual

Ensures that `value >= expected` for number or big integer values.

**Usage**

```
const value = 42;expect(value).toBeGreaterThanOrEqual(42);
```

**Arguments**

-   `expected` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") | \[bigint\][#](#generic-assertions-to-be-greater-than-or-equal-option-expected)
    
    The value to compare to.
    

* * *

### toBeInstanceOf[​](#generic-assertions-to-be-instance-of "Direct link to toBeInstanceOf")

Added in: v1.9 genericAssertions.toBeInstanceOf

Ensures that value is an instance of a class. Uses `instanceof` operator.

**Usage**

```
expect(page).toBeInstanceOf(Page);class Example {}expect(new Example()).toBeInstanceOf(Example);
```

**Arguments**

-   `expected` [Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function "Function")[#](#generic-assertions-to-be-instance-of-option-expected)
    
    The class or constructor function.
    

* * *

### toBeLessThan[​](#generic-assertions-to-be-less-than "Direct link to toBeLessThan")

Added in: v1.9 genericAssertions.toBeLessThan

Ensures that `value < expected` for number or big integer values.

**Usage**

```
const value = 42;expect(value).toBeLessThan(100);
```

**Arguments**

-   `expected` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") | \[bigint\][#](#generic-assertions-to-be-less-than-option-expected)
    
    The value to compare to.
    

* * *

### toBeLessThanOrEqual[​](#generic-assertions-to-be-less-than-or-equal "Direct link to toBeLessThanOrEqual")

Added in: v1.9 genericAssertions.toBeLessThanOrEqual

Ensures that `value <= expected` for number or big integer values.

**Usage**

```
const value = 42;expect(value).toBeLessThanOrEqual(42);
```

**Arguments**

-   `expected` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number") | \[bigint\][#](#generic-assertions-to-be-less-than-or-equal-option-expected)
    
    The value to compare to.
    

* * *

### toBeNaN[​](#generic-assertions-to-be-na-n "Direct link to toBeNaN")

Added in: v1.9 genericAssertions.toBeNaN

Ensures that value is `NaN`.

**Usage**

```
const value = NaN;expect(value).toBeNaN();
```

* * *

### toBeNull[​](#generic-assertions-to-be-null "Direct link to toBeNull")

Added in: v1.9 genericAssertions.toBeNull

Ensures that value is `null`.

**Usage**

```
const value = null;expect(value).toBeNull();
```

* * *

### toBeTruthy[​](#generic-assertions-to-be-truthy "Direct link to toBeTruthy")

Added in: v1.9 genericAssertions.toBeTruthy

Ensures that value is true in a boolean context, **anything but** `false`, `0`, `''`, `null`, `undefined` or `NaN`. Use this method when you don't care about the specific value.

**Usage**

```
const value = { example: 'value' };expect(value).toBeTruthy();
```

* * *

### toBeUndefined[​](#generic-assertions-to-be-undefined "Direct link to toBeUndefined")

Added in: v1.9 genericAssertions.toBeUndefined

Ensures that value is `undefined`.

**Usage**

```
const value = undefined;expect(value).toBeUndefined();
```

* * *

### toContain(expected)[​](#generic-assertions-to-contain-1 "Direct link to toContain(expected)")

Added in: v1.9 genericAssertions.toContain(expected)

Ensures that string value contains an expected substring. Comparison is case-sensitive.

**Usage**

```
const value = 'Hello, World';expect(value).toContain('World');expect(value).toContain(',');
```

**Arguments**

-   `expected` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#generic-assertions-to-contain-1-option-expected)
    
    Expected substring.
    

* * *

### toContain(expected)[​](#generic-assertions-to-contain-2 "Direct link to toContain(expected)")

Added in: v1.9 genericAssertions.toContain(expected)

Ensures that value is an `Array` or `Set` and contains an expected item.

**Usage**

```
const value = [1, 2, 3];expect(value).toContain(2);expect(new Set(value)).toContain(2);
```

**Arguments**

-   `expected` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")[#](#generic-assertions-to-contain-2-option-expected)
    
    Expected value in the collection.
    

* * *

### toContainEqual[​](#generic-assertions-to-contain-equal "Direct link to toContainEqual")

Added in: v1.9 genericAssertions.toContainEqual

Ensures that value is an `Array` or `Set` and contains an item equal to the expected.

For objects, this method recursively checks equality of all fields, rather than comparing objects by reference as performed by [expect(value).toContain()](/docs/api/class-genericassertions#generic-assertions-to-contain-2).

For primitive values, this method is equivalent to [expect(value).toContain()](/docs/api/class-genericassertions#generic-assertions-to-contain-2).

**Usage**

```
const value = [  { example: 1 },  { another: 2 },  { more: 3 },];expect(value).toContainEqual({ another: 2 });expect(new Set(value)).toContainEqual({ another: 2 });
```

**Arguments**

-   `expected` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")[#](#generic-assertions-to-contain-equal-option-expected)
    
    Expected value in the collection.
    

* * *

### toEqual[​](#generic-assertions-to-equal "Direct link to toEqual")

Added in: v1.9 genericAssertions.toEqual

Compares contents of the value with contents of [expected](/docs/api/class-genericassertions#generic-assertions-to-equal-option-expected), performing "deep equality" check.

For objects, this method recursively checks equality of all fields, rather than comparing objects by reference as performed by [expect(value).toBe()](/docs/api/class-genericassertions#generic-assertions-to-be).

For primitive values, this method is equivalent to [expect(value).toBe()](/docs/api/class-genericassertions#generic-assertions-to-be).

**Usage**

```
const value = { prop: 1 };expect(value).toEqual({ prop: 1 });
```

**Non-strict equality**

[expect(value).toEqual()](/docs/api/class-genericassertions#generic-assertions-to-equal) performs deep equality check that compares contents of the received and expected values. To ensure two objects reference the same instance, use [expect(value).toBe()](/docs/api/class-genericassertions#generic-assertions-to-be) instead.

[expect(value).toEqual()](/docs/api/class-genericassertions#generic-assertions-to-equal) ignores `undefined` properties and array items, and does not insist on object types being equal. For stricter matching, use [expect(value).toStrictEqual()](/docs/api/class-genericassertions#generic-assertions-to-strict-equal).

**Pattern matching**

[expect(value).toEqual()](/docs/api/class-genericassertions#generic-assertions-to-equal) can be also used to perform pattern matching on objects, arrays and primitive types, with the help of the following matchers:

-   [expect(value).any()](/docs/api/class-genericassertions#generic-assertions-any)
-   [expect(value).anything()](/docs/api/class-genericassertions#generic-assertions-anything)
-   [expect(value).arrayContaining()](/docs/api/class-genericassertions#generic-assertions-array-containing)
-   [expect(value).arrayOf()](/docs/api/class-genericassertions#generic-assertions-array-of)
-   [expect(value).closeTo()](/docs/api/class-genericassertions#generic-assertions-close-to)
-   [expect(value).objectContaining()](/docs/api/class-genericassertions#generic-assertions-object-containing)
-   [expect(value).stringContaining()](/docs/api/class-genericassertions#generic-assertions-string-containing)
-   [expect(value).stringMatching()](/docs/api/class-genericassertions#generic-assertions-string-matching)

Here is an example that asserts some of the values inside a complex object:

```
expect({  list: [1, 2, 3],  obj: { prop: 'Hello world!', another: 'some other value' },  extra: 'extra',}).toEqual(expect.objectContaining({  list: expect.arrayContaining([2, 3]),  obj: expect.objectContaining({ prop: expect.stringContaining('Hello') }),}));
```

**Arguments**

-   `expected` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")[#](#generic-assertions-to-equal-option-expected)
    
    Expected value.
    

* * *

### toHaveLength[​](#generic-assertions-to-have-length "Direct link to toHaveLength")

Added in: v1.9 genericAssertions.toHaveLength

Ensures that value has a `.length` property equal to [expected](/docs/api/class-genericassertions#generic-assertions-to-have-length-option-expected). Useful for arrays and strings.

**Usage**

```
expect('Hello, World').toHaveLength(12);expect([1, 2, 3]).toHaveLength(3);
```

**Arguments**

-   `expected` [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type "Number")[#](#generic-assertions-to-have-length-option-expected)
    
    Expected length.
    

* * *

### toHaveProperty[​](#generic-assertions-to-have-property "Direct link to toHaveProperty")

Added in: v1.9 genericAssertions.toHaveProperty

Ensures that property at provided `keyPath` exists on the object and optionally checks that property is equal to the [expected](/docs/api/class-genericassertions#generic-assertions-to-have-property-option-expected). Equality is checked recursively, similarly to [expect(value).toEqual()](/docs/api/class-genericassertions#generic-assertions-to-equal).

**Usage**

```
const value = {  a: {    b: [42],  },  c: true,};expect(value).toHaveProperty('a.b');expect(value).toHaveProperty('a.b', [42]);expect(value).toHaveProperty('a.b[0]', 42);expect(value).toHaveProperty('c');expect(value).toHaveProperty('c', true);
```

**Arguments**

-   `keyPath` [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#generic-assertions-to-have-property-option-key-path)
    
    Path to the property. Use dot notation `a.b` to check nested properties and indexed `a[2]` notation to check nested array items.
    
-   `expected` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_[#](#generic-assertions-to-have-property-option-expected)
    
    Optional expected value to compare the property to.
    

* * *

### toMatch[​](#generic-assertions-to-match "Direct link to toMatch")

Added in: v1.9 genericAssertions.toMatch

Ensures that string value matches a regular expression.

**Usage**

```
const value = 'Is 42 enough?';expect(value).toMatch(/Is \d+ enough/);
```

**Arguments**

-   `expected` [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp "RegExp") | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type "string")[#](#generic-assertions-to-match-option-expected)
    
    Regular expression to match against.
    

* * *

### toMatchObject[​](#generic-assertions-to-match-object "Direct link to toMatchObject")

Added in: v1.9 genericAssertions.toMatchObject

Compares contents of the value with contents of [expected](/docs/api/class-genericassertions#generic-assertions-to-match-object-option-expected), performing "deep equality" check. Allows extra properties to be present in the value, unlike [expect(value).toEqual()](/docs/api/class-genericassertions#generic-assertions-to-equal), so you can check just a subset of object properties.

When comparing arrays, the number of items must match, and each item is checked recursively.

**Usage**

```
const value = {  a: 1,  b: 2,  c: true,};expect(value).toMatchObject({ a: 1, c: true });expect(value).toMatchObject({ b: 2, c: true });expect([{ a: 1, b: 2 }]).toMatchObject([{ a: 1 }]);
```

**Arguments**

-   `expected` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")[#](#generic-assertions-to-match-object-option-expected)
    
    The expected object value to match against.
    

* * *

### toStrictEqual[​](#generic-assertions-to-strict-equal "Direct link to toStrictEqual")

Added in: v1.9 genericAssertions.toStrictEqual

Compares contents of the value with contents of [expected](/docs/api/class-genericassertions#generic-assertions-to-strict-equal-option-expected) **and** their types.

Differences from [expect(value).toEqual()](/docs/api/class-genericassertions#generic-assertions-to-equal):

-   Keys with undefined properties are checked. For example, `{ a: undefined, b: 2 }` does not match `{ b: 2 }`.
-   Array sparseness is checked. For example, `[, 1]` does not match `[undefined, 1]`.
-   Object types are checked to be equal. For example, a class instance with fields `a` and `b` will not equal a literal object with fields `a` and `b`.

**Usage**

```
const value = { prop: 1 };expect(value).toStrictEqual({ prop: 1 });
```

**Arguments**

-   `expected` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object")[#](#generic-assertions-to-strict-equal-option-expected)
    
    Expected value.
    

* * *

### toThrow[​](#generic-assertions-to-throw "Direct link to toThrow")

Added in: v1.9 genericAssertions.toThrow

Calls the function and ensures it throws an error.

Optionally compares the error with [expected](/docs/api/class-genericassertions#generic-assertions-to-throw-option-expected). Allowed expected values:

-   Regular expression - error message should **match** the pattern.
-   String - error message should **include** the substring.
-   Error object - error message should be **equal to** the message property of the object.
-   Error class - error object should be an **instance of** the class.

**Usage**

```
expect(() => {  throw new Error('Something bad');}).toThrow();expect(() => {  throw new Error('Something bad');}).toThrow(/something/);expect(() => {  throw new Error('Something bad');}).toThrow(Error);
```

**Arguments**

-   `expected` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_[#](#generic-assertions-to-throw-option-expected)
    
    Expected error message or error object.
    

* * *

### toThrowError[​](#generic-assertions-to-throw-error "Direct link to toThrowError")

Added in: v1.9 genericAssertions.toThrowError

An alias for [expect(value).toThrow()](/docs/api/class-genericassertions#generic-assertions-to-throw).

**Usage**

```
expect(() => {  throw new Error('Something bad');}).toThrowError();
```

**Arguments**

-   `expected` [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object "Object") _(optional)_[#](#generic-assertions-to-throw-error-option-expected)
    
    Expected error message or error object.
    

* * *

## Properties[​](#properties "Direct link to Properties")

### not[​](#generic-assertions-not "Direct link to not")

Added in: v1.9 genericAssertions.not

Makes the assertion check for the opposite condition. For example, the following code passes:

```
const value = 1;expect(value).not.toBe(2);
```

**Usage**

```
expect(value).not
```

**Type**

-   [GenericAssertions](/docs/api/class-genericassertions "GenericAssertions")
