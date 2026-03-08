### flavor

Creates a flavor transformation action.

```ts
const Action = v.flavor<TInput, TName>(name);
```

#### Generics

- `TInput`
- `TName`

#### Parameters

- `name`

##### Explanation

`flavor` is a less strict version of `brand` that allows you to flavor the output type of a schema with a `name`. Data is considered valid if it's type is unflavored or has been validated by a schema that has the same flavor.

> `flavor` can also be used as a TypeScript DX hack to improve the editor's autocompletion by displaying only literal types, but still allowing the unflavored root type to be passed.

#### Returns

- `Action`

#### Examples

The following examples show how `flavor` can be used.

##### Flavored ID schemas

Schema to ensure that different types of IDs are not mixed up.

```ts
// Create user ID and order ID schema
const UserIdSchema = v.pipe(v.string(), v.flavor('UserId'));
const OrderIdSchema = v.pipe(v.string(), v.flavor('OrderId'));

// Infer output types of both schemas
type UserId = v.InferOutput<typeof UserIdSchema>;
type OrderId = v.InferOutput<typeof OrderIdSchema>;

// This works because output is flavored
const userId: UserId = v.parse(UserIdSchema, 'c28443ef...');
const orderId: OrderId = v.parse(OrderIdSchema, '4b717520...');

// You can also use unflavored strings
const newUserId1: UserId = '2d80cd94...';

// But this will result in a type error
const newUserId2: UserId = orderId;
```

#### Related

The following APIs can be combined with `flavor`.

##### Schemas

\<ApiList
items={\[
'any',
'array',
'bigint',
'blob',
'boolean',
'custom',
'date',
'enum',
'exactOptional',
'file',
'function',
'instance',
'intersect',
'lazy',
'literal',
'looseObject',
'looseTuple',
'map',
'nan',
'never',
'nonNullable',
'nonNullish',
'nonOptional',
'null',
'nullable',
'nullish',
'number',
'object',
'objectWithRest',
'optional',
'picklist',
'promise',
'record',
'set',
'strictObject',
'strictTuple',
'string',
'symbol',
'tuple',
'tupleWithRest',
'undefined',
'undefinedable',
'union',
'unknown',
'variant',
'void',
]}
/>

##### Methods

##### Utils

### graphemes

Creates a [graphemes](https://en.wikipedia.org/wiki/Grapheme) validation action.

```ts
const Action = v.graphemes<TInput, TRequirement, TMessage>(
  requirement,
  message
);
```

#### Generics

- `TInput`
- `TRequirement`
- `TMessage`

#### Parameters

- `requirement`
- `message`

##### Explanation

With `graphemes` you can validate the graphemes of a string. If the input does not match the `requirement`, you can use `message` to customize the error message.

#### Returns

- `Action`

#### Examples

The following examples show how `graphemes` can be used.

##### Graphemes schema

Schema to validate a string with 8 graphemes.

```ts
const GraphemesSchema = v.pipe(
  v.string(),
  v.graphemes(8, 'Exactly 8 graphemes are required.')
);
```

#### Related

The following APIs can be combined with `graphemes`.

##### Schemas

##### Methods

##### Utils

### gtValue

Creates a greater than value validation action.

```ts
const Action = v.gtValue<TInput, TRequirement, TMessage>(requirement, message);
```

#### Generics

- `TInput`
- `TRequirement`
- `TMessage`

#### Parameters

- `requirement`
- `message`

##### Explanation

With `gtValue` you can validate the value of a string, number, boolean or date. If the input does not match the `requirement`, you can use `message` to customize the error message.

#### Returns

- `Action`

#### Examples

The following examples show how `gtValue` can be used.

##### Number schema

Schema to validate a number with a greater than value.

```ts
const NumberSchema = v.pipe(
  v.number(),
  v.gtValue(100, 'The number must be greater than 100.')
);
```

##### Date schema

Schema to validate a date with a greater than year.

```ts
const DateSchema = v.pipe(
  v.date(),
  v.gtValue(
    new Date('2000-01-01'),
    'The date must be greater than 1st January 2000.'
  )
);
```

#### Related

The following APIs can be combined with `gtValue`.

##### Schemas

\<ApiList
items={\[
'any',
'bigint',
'boolean',
'custom',
'date',
'number',
'string',
'unknown',
]}
/>

##### Methods

##### Utils

### guard

Creates a guard transformation action.

```ts
const Action = v.guard<TInput, TGuard, TMessage>(requirement, message);
```

#### Generics

- `TInput`
- `TGuard`
- `TMessage`

#### Parameters

- `requirement`
- `message`

##### Explanation

With `guard` you can freely validate the input and return `true` if it is valid or `false` otherwise. If the input does not match your `requirement`, you can use `message` to customize the error message.

This is especially useful if you have an existing type predicate (for example, from an external library).

> `guard` is useful for narrowing known types. For validating completely unknown values, consider [`custom`](../custom/) instead.

#### Returns

- `Action`

#### Examples

The following examples show how `guard` can be used.

##### Pixel string schema

Schema to validate a pixel string.

```ts
const PixelStringSchema = v.pipe(
  v.string(),
  v.guard((input): input is `${number}px` => /^\d+px$/.test(input))
);
```

##### Axios Error schema

Schema to validate an object containing an Axios error.

```ts
import { isAxiosError } from 'axios';

const AxiosErrorSchema = v.object({
  error: v.pipe(
    v.instance(Error),
    v.guard(isAxiosError, 'The error is not an Axios error.')
  ),
});
```

#### Related

The following APIs can be combined with `guard`.

##### Schemas

\<ApiList
items={\[
'any',
'array',
'bigint',
'blob',
'boolean',
'custom',
'date',
'enum',
'exactOptional',
'file',
'function',
'instance',
'intersect',
'lazy',
'literal',
'looseObject',
'looseTuple',
'map',
'nan',
'never',
'nonNullable',
'nonNullish',
'nonOptional',
'null',
'nullable',
'nullish',
'number',
'object',
'objectWithRest',
'optional',
'picklist',
'promise',
'record',
'set',
'strictObject',
'strictTuple',
'string',
'symbol',
'tuple',
'tupleWithRest',
'undefined',
'undefinedable',
'union',
'unknown',
'variant',
'void',
]}
/>

##### Methods

##### Utils

### hash

Creates a [hash](https://en.wikipedia.org/wiki/Hash_function) validation action.

```ts
const Action = v.hash<TInput, TMessage>(message);
```

#### Generics

- `TInput`
- `TMessage`

#### Parameters

- `types`
- `message`

##### Explanation

With `hash` you can validate the formatting of a string. If the input is not a hash, you can use `message` to customize the error message.

#### Returns

- `Action`

#### Examples

The following examples show how `hash` can be used.

##### Hash schema

Schema to validate a hash.

```ts
const HashSchema = v.pipe(
  v.string(),
  v.hash(['md5', 'sha1'], 'The specified hash is invalid.')
);
```

#### Related

The following APIs can be combined with `hash`.

##### Schemas

##### Methods

##### Utils

### hexadecimal

Creates a [hexadecimal](https://en.wikipedia.org/wiki/Hexadecimal) validation action.

```ts
const Action = v.hexadecimal<TInput, TMessage>(message);
```

#### Generics

- `TInput`
- `TMessage`

#### Parameters

- `message`

##### Explanation

With `hexadecimal` you can validate the formatting of a string. If the input is not a hexadecimal, you can use `message` to customize the error message.

#### Returns

- `Action`

#### Examples

The following examples show how `hexadecimal` can be used.

##### Hexadecimal schema

Schema to validate a Hexadecimal string.

```ts
const HexadecimalSchema = v.pipe(
  v.string(),
  v.hexadecimal('The hexadecimal is badly formatted.')
);
```

#### Related

The following APIs can be combined with `hexadecimal`.

##### Schemas

##### Methods

##### Utils

### hexColor

Creates a [hex color](https://en.wikipedia.org/wiki/Web_colors#Hex_triplet) validation action.

```ts
const Action = v.hexColor<TInput, TMessage>(message);
```

#### Generics

- `TInput`
- `TMessage`

#### Parameters

- `message`

##### Explanation

With `hexColor` you can validate the formatting of a string. If the input is not a hex color, you can use `message` to customize the error message.

#### Returns

- `Action`

#### Examples

The following examples show how `hexColor` can be used.

##### Hex color schema

Schema to validate a hex color.

```ts
const HexColorSchema = v.pipe(
  v.string(),
  v.hexColor('The hex color is badly formatted.')
);
```

#### Related

The following APIs can be combined with `hexColor`.

##### Schemas

##### Methods

##### Utils

### imei

Creates an [IMEI](https://en.wikipedia.org/wiki/International_Mobile_Equipment_Identity) validation action.

```ts
const Action = v.imei<TInput, TMessage>(message);
```

#### Generics

- `TInput`
- `TMessage`

#### Parameters

- `message`

##### Explanation

With `imei` you can validate the formatting of a string. If the input is not an imei, you can use `message` to customize the error message.

#### Returns

- `Action`

#### Examples

The following examples show how `imei` can be used.

##### IMEI schema

Schema to validate an IMEI.

```ts
const ImeiSchema = v.pipe(v.string(), v.imei('The imei is badly formatted.'));
```

#### Related

The following APIs can be combined with `imei`.

##### Schemas

##### Methods

##### Utils

### includes

Creates an includes validation action.

```ts
const Action = v.includes<TInput, TRequirement, TMessage>(requirement, message);
```

#### Generics

- `TInput`
- `TRequirement`
- `TMessage`

#### Parameters

- `requirement`
- `message`

##### Explanation

With `includes` you can validate the content of a string or array. If the input does not match the `requirement`, you can use `message` to customize the error message.

#### Returns

- `Action`

#### Examples

The following examples show how `includes` can be used.

##### String schema

Schema to validate that a string contains a specific substring.

```ts
const StringSchema = v.pipe(
  v.string(),
  v.includes('foo', 'The string must contain "foo".')
);
```

##### Array schema

Schema to validate that an array contains a specific string.

```ts
const ArraySchema = v.pipe(
  v.array(v.string()),
  v.includes('foo', 'The array must contain "foo".')
);
```

#### Related

The following APIs can be combined with `includes`.

##### Schemas

\<ApiList
items={\['any', 'array', 'custom', 'instance', 'string', 'tuple', 'unknown']}
/>

##### Methods

##### Utils

### integer

Creates an [integer](https://en.wikipedia.org/wiki/Integer) validation action.

```ts
const Action = v.integer<TInput, TMessage>(message);
```

#### Generics

- `TInput`
- `TMessage`

#### Parameters

- `message`

##### Explanation

With `integer` you can validate the value of a number. If the input is not an integer, you can use `message` to customize the error message.

#### Returns

- `Action`

#### Examples

The following examples show how `integer` can be used.

##### Integer schema

Schema to validate an integer.

```ts
const IntegerSchema = v.pipe(
  v.number(),
  v.integer('The number must be an integer.')
);
```

#### Related

The following APIs can be combined with `integer`.

##### Schemas

##### Methods

##### Utils

### ip

Creates an [IP address](https://en.wikipedia.org/wiki/IP_address) validation action.

> This validation action accepts IPv4 and IPv6 addresses. For a more specific validation, you can also use `ipv4` or `ipv6`.

```ts
const Action = v.ip<TInput, TMessage>(message);
```

#### Generics

- `TInput`
- `TMessage`

#### Parameters

- `message`

##### Explanation

With `ip` you can validate the formatting of a string. If the input is not an IP address, you can use `message` to customize the error message.

#### Returns

- `Action`

#### Examples

The following examples show how `ip` can be used.

##### IP address schema

Schema to validate an IP address.

```ts
const IpAddressSchema = v.pipe(
  v.string(),
  v.ip('The IP address is badly formatted.')
);
```

#### Related

The following APIs can be combined with `ip`.

##### Schemas

##### Methods

##### Utils

### ipv4

Creates an [IPv4](https://en.wikipedia.org/wiki/IPv4) address validation action.

```ts
const Action = v.ipv4<TInput, TMessage>(message);
```

#### Generics

- `TInput`
- `TMessage`

#### Parameters

- `message`

##### Explanation

With `ipv4` you can validate the formatting of a string. If the input is not an IPv4 address, you can use `message` to customize the error message.

#### Returns

- `Action`

#### Examples

The following examples show how `ipv4` can be used.

##### IPv4 schema

Schema to validate an IPv4 address.

```ts
const Ipv4Schema = v.pipe(
  v.string(),
  v.ipv4('The IP address is badly formatted.')
);
```

#### Related

The following APIs can be combined with `ipv4`.

##### Schemas

##### Methods

##### Utils

### ipv6

Creates an [IPv6](https://en.wikipedia.org/wiki/IPv6) address validation action.

```ts
const Action = v.ipv6<TInput, TMessage>(message);
```

#### Generics

- `TInput`
- `TMessage`

#### Parameters

- `message`

##### Explanation

With `ipv6` you can validate the formatting of a string. If the input is not an IPv6 address, you can use `message` to customize the error message.

#### Returns

- `Action`

#### Examples

The following examples show how `ipv6` can be used.

##### IPv6 schema

Schema to validate an IPv6 address.

```ts
const Ipv6Schema = v.pipe(
  v.string(),
  v.ipv6('The IP address is badly formatted.')
);
```

#### Related

The following APIs can be combined with `ipv6`.

##### Schemas

##### Methods

##### Utils

### isbn

Creates an [ISBN](https://en.wikipedia.org/wiki/ISBN) validation action.

```ts
const Action = v.isbn<TInput, TMessage>(message);
```

#### Generics

- `TInput`
- `TMessage`

#### Parameters

- `message`

##### Explanation

With `isbn` you can validate the formatting of a string. If the input is not an ISBN, you can use `message` to customize the error message.

This action supports both ISBN-10 and ISBN-13 formats and accepts hyphens and spaces as separators.

#### Returns

- `Action`

#### Examples

The following examples show how `isbn` can be used.

##### ISBN schema

Schema to validate an ISBN.

```ts
const IsbnSchema = v.pipe(v.string(), v.isbn('The ISBN is badly formatted'));

// Valid ISBN-10 formats:
// '0-306-40615-2'
// '0306406152'
// '0 306 40615 2'

// Valid ISBN-13 formats:
// '978-0-306-40615-7'
// '9780306406157'
// '978 0 306 40615 7'
```

#### Related

The following APIs can be combined with `isbn`.

##### Schemas

##### Methods

##### Utils

### isrc

Creates an [ISRC](https://en.wikipedia.org/wiki/International_Standard_Recording_Code) validation action.

```ts
const Action = v.isrc<TInput, TMessage>(message);
```

#### Generics

- `TInput`
- `TMessage`

#### Parameters

- `message`

##### Explanation

With `isrc` you can validate the formatting of a string. If the input is not an ISRC, you can use `message` to customize the error message.

This action supports both compact (`CCXXXYYNNNNN`) and hyphenated (`CC-XXX-YY-NNNNN`) formats.

#### Returns

- `Action`

#### Examples

The following examples show how `isrc` can be used.

##### ISRC schema

Schema to validate an ISRC.

```ts
const IsrcSchema = v.pipe(v.string(), v.isrc('The ISRC is badly formatted.'));

// Valid ISRC formats:
// 'USRC17607839'
// 'US-RC1-76-07839'
```

#### Related

The following APIs can be combined with `isrc`.

##### Schemas

##### Methods

##### Utils

### isoDate

Creates an [ISO date](https://en.wikipedia.org/wiki/ISO_8601) validation action.

Format: `yyyy-mm-dd`

> The regex used cannot validate the maximum number of days based on year and month. For example, "2023-06-31" is valid although June has only 30 days.

```ts
const Action = v.isoDate<TInput, TMessage>(message);
```

#### Generics

- `TInput`
- `TMessage`

#### Parameters

- `message`

##### Explanation

With `isoDate` you can validate the formatting of a string. If the input is not an ISO date, you can use `message` to customize the error message.

#### Returns

- `Action`

#### Examples

The following examples show how `isoDate` can be used.

##### ISO date schema

Schema to validate an ISO date.

```ts
const IsoDateSchema = v.pipe(
  v.string(),
  v.isoDate('The date is badly formatted.')
);
```

##### Minimum value schema

Schema to validate an ISO date is after a certain date.

```ts
const MinValueSchema = v.pipe(
  v.string(),
  v.isoDate(),
  v.minValue('2000-01-01', 'The date must be after the year 1999.')
);
```

#### Related

The following APIs can be combined with `isoDate`.

##### Schemas

##### Methods

##### Utils

### isoDateTime

Creates an [ISO date time](https://en.wikipedia.org/wiki/ISO_8601) validation action.

Format: `yyyy-mm-ddThh:mm`

> The regex used cannot validate the maximum number of days based on year and month. For example, "2023-06-31T00:00" is valid although June has only 30 days.

> The regex also allows a space as a separator between the date and time parts instead of the "T" character.

```ts
const Action = v.isoDateTime<TInput, TMessage>(message);
```

#### Generics

- `TInput`
- `TMessage`

#### Parameters

- `message`

##### Explanation

With `isoDateTime` you can validate the formatting of a string. If the input is not an ISO date time, you can use `message` to customize the error message.

#### Returns

- `Action`

#### Examples

The following examples show how `isoDateTime` can be used.

##### ISO date time schema

Schema to validate an ISO date time.

```ts
const IsoDateTimeSchema = v.pipe(
  v.string(),
  v.isoDateTime('The date is badly formatted.')
);
```

#### Related

The following APIs can be combined with `isoDateTime`.

##### Schemas

##### Methods

##### Utils

### isoTime

Creates an [ISO time](https://en.wikipedia.org/wiki/ISO_8601) validation action.

Format: `hh:mm`

```ts
const Action = v.isoTime<TInput, TMessage>(message);
```

#### Generics

- `TInput`
- `TMessage`

#### Parameters

- `message`

##### Explanation

With `isoTime` you can validate the formatting of a string. If the input is not an ISO time, you can use `message` to customize the error message.

#### Returns

- `Action`

#### Examples

The following examples show how `isoTime` can be used.

##### ISO time schema

Schema to validate an ISO time.

```ts
const IsoTimeSchema = v.pipe(
  v.string(),
  v.isoTime('The time is badly formatted.')
);
```

#### Related

The following APIs can be combined with `isoTime`.

##### Schemas

##### Methods

##### Utils

### isoTimeSecond

Creates an [ISO time second](https://en.wikipedia.org/wiki/ISO_8601) validation action.

Format: `hh:mm:ss`

```ts
const Action = v.isoTimeSecond<TInput, TMessage>(message);
```

#### Generics

- `TInput`
- `TMessage`

#### Parameters

- `message`

##### Explanation

With `isoTimeSecond` you can validate the formatting of a string. If the input is not an ISO time second, you can use `message` to customize the error message.

#### Returns

- `Action`

#### Examples

The following examples show how `isoTimeSecond` can be used.

##### ISO time second schema

Schema to validate an ISO time second.

```ts
const IsoTimeSecondSchema = v.pipe(
  v.string(),
  v.isoTimeSecond('The time is badly formatted.')
);
```

#### Related

The following APIs can be combined with `isoTimeSecond`.

##### Schemas

##### Methods

##### Utils

### isoTimestamp

Creates an [ISO timestamp](https://en.wikipedia.org/wiki/ISO_8601) validation action.

Formats: `yyyy-mm-ddThh:mm:ss.sssZ`, `yyyy-mm-ddThh:mm:ss.sss±hh:mm`, `yyyy-mm-ddThh:mm:ss.sss±hhmm`

> To support timestamps with lower or higher accuracy, the millisecond specification can be removed or contain up to 9 digits.

> The regex used cannot validate the maximum number of days based on year and month. For example, "2023-06-31T00:00:00.000Z" is valid although June has only 30 days.

> The regex also allows a space as a separator between the date and time parts instead of the "T" character.

```ts
const Action = v.isoTimestamp<TInput, TMessage>(message);
```

#### Generics

- `TInput`
- `TMessage`

#### Parameters

- `message`

##### Explanation

With `isoTimestamp` you can validate the formatting of a string. If the input is not an ISO timestamp, you can use `message` to customize the error message.

#### Returns

- `Action`

#### Examples

The following examples show how `isoTimestamp` can be used.

##### ISO timestamp schema

Schema to validate an ISO timestamp.

```ts
const IsoTimestampSchema = v.pipe(
  v.string(),
  v.isoTimestamp('The timestamp is badly formatted.')
);
```

#### Related

The following APIs can be combined with `isoTimestamp`.

##### Schemas

##### Methods

##### Utils

### isoWeek

Creates an [ISO week](https://en.wikipedia.org/wiki/ISO_8601) validation action.

Format: `yyyy-Www`

> The regex used cannot validate the maximum number of weeks based on the year. For example, "2021W53" is valid although 2021 has only 52 weeks.

```ts
const Action = v.isoWeek<TInput, TMessage>(message);
```

#### Generics

- `TInput`
- `TMessage`

#### Parameters

- `message`

##### Explanation

With `isoWeek` you can validate the formatting of a string. If the input is not an ISO week, you can use `message` to customize the error message.

#### Returns

- `Action`

#### Examples

The following examples show how `isoWeek` can be used.

##### ISO week schema

Schema to validate an ISO week.

```ts
const IsoWeekSchema = v.pipe(
  v.string(),
  v.isoWeek('The week is badly formatted.')
);
```

#### Related

The following APIs can be combined with `isoWeek`.

##### Schemas

##### Methods

##### Utils

### length

Creates a length validation action.

```ts
const Action = v.length<TInput, TRequirement, TMessage>(requirement, message);
```

#### Generics

- `TInput`
- `TRequirement`
- `TMessage`

#### Parameters

- `requirement`
- `message`

##### Explanation

With `length` you can validate the length of a string or array. If the input does not match the `requirement`, you can use `message` to customize the error message.

#### Returns

- `Action`

#### Examples

The following examples show how `length` can be used.

##### String schema

Schema to validate the length of a string.

```ts
const StringSchema = v.pipe(
  v.string(),
  v.length(8, 'The string must be 8 characters long.')
);
```

##### Array schema

Schema to validate the length of an array.

```ts
const ArraySchema = v.pipe(
  v.array(v.number()),
  v.length(100, 'The array must contain 100 numbers.')
);
```

#### Related

The following APIs can be combined with `length`.

##### Schemas

\<ApiList
items={\['any', 'array', 'custom', 'instance', 'string', 'tuple', 'unknown']}
/>

##### Methods

##### Utils

### mac

Creates a [MAC address](https://en.wikipedia.org/wiki/MAC_address) validation action.

> This validation action accepts 48-bit and 64-bit MAC addresses. For a more specific validation, you can also use `mac48` or `mac64`.

```ts
const Action = v.mac<TInput, TMessage>(message);
```

#### Generics

- `TInput`
- `TMessage`

#### Parameters

- `message`

##### Explanation

With `mac` you can validate the formatting of a string. If the input is not a MAC address, you can use `message` to customize the error message.

#### Returns

- `Action`

#### Examples

The following examples show how `mac` can be used.

##### MAC schema

Schema to validate a MAC address.

```ts
const MacSchema = v.pipe(
  v.string(),
  v.mac('The MAC address is badly formatted.')
);
```

#### Related

The following APIs can be combined with `mac`.

##### Schemas

##### Methods

##### Utils

### mac48

Creates a 48-bit [MAC address](https://en.wikipedia.org/wiki/MAC_address) validation action.

```ts
const Action = v.mac48<TInput, TMessage>(message);
```

#### Generics

- `TInput`
- `TMessage`

#### Parameters

- `message`

##### Explanation

With `mac48` you can validate the formatting of a string. If the input is not a 48-bit MAC address, you can use `message` to customize the error message.

#### Returns

- `Action`

#### Examples

The following examples show how `mac48` can be used.

##### 48-bit MAC schema

Schema to validate a 48-bit MAC address.

```ts
const Mac48Schema = v.pipe(
  v.string(),
  v.mac48('The MAC address is badly formatted.')
);
```

#### Related

The following APIs can be combined with `mac48`.

##### Schemas

##### Methods

##### Utils

### mac64

Creates a 64-bit [MAC address](https://en.wikipedia.org/wiki/MAC_address) validation action.

```ts
const Action = v.mac64<TInput, TMessage>(message);
```

#### Generics

- `TInput`
- `TMessage`

#### Parameters

- `message`

##### Explanation

With `mac64` you can validate the formatting of a string. If the input is not a 64-bit MAC address, you can use `message` to customize the error message.

#### Returns

- `Action`

#### Examples

The following examples show how `mac64` can be used.

##### 64-bit MAC schema

Schema to validate a 64-bit MAC address.

```ts
const Mac64Schema = v.pipe(
  v.string(),
  v.mac64('The MAC address is badly formatted.')
);
```

#### Related

The following APIs can be combined with `mac64`.

##### Schemas

##### Methods

##### Utils

### mapItems

Creates a map items transformation action.

```ts
const Action = v.mapItems<TInput, TOutput>(operation);
```

#### Generics

- `TInput`
- `TOutput`

#### Parameters

- `operation`

##### Explanation

With `mapItems` you can apply an `operation` to each item in an array to transform it.

#### Returns

- `Action`

#### Examples

The following examples show how `mapItems` can be used.

##### Mark duplicates

```ts
const MarkedArraySchema = v.pipe(
  v.array(v.string()),
  v.mapItems((item, index, array) => {
    const isDuplicate = array.indexOf(item) !== index;
    return { item, isDuplicate };
  })
);
```

#### Related

The following APIs can be combined with `mapItems`.

##### Schemas

##### Methods

##### Utils

### maxBytes

Creates a max [bytes](https://en.wikipedia.org/wiki/Byte) validation action.

```ts
const Action = v.maxBytes<TInput, TRequirement, TMessage>(requirement, message);
```

#### Generics

- `TInput`
- `TRequirement`
- `TMessage`

#### Parameters

- `requirement`
- `message`

##### Explanation

With `maxBytes` you can validate the bytes of a string. If the input does not match the `requirement`, you can use `message` to customize the error message.

#### Returns

- `Action`

#### Examples

The following examples show how `maxBytes` can be used.

##### Max bytes schema

Schema to validate a string with a maximum of 64 bytes.

```ts
const MaxBytesSchema = v.pipe(
  v.string(),
  v.maxBytes(64, 'The string must not exceed 64 bytes.')
);
```

#### Related

The following APIs can be combined with `maxBytes`.

##### Schemas

##### Methods

##### Utils

### maxEntries

Creates a max entries validation action.

```ts
const Action = v.maxEntries<TInput, TRequirement, TMessage>(
  requirement,
  message
);
```

#### Generics

- `TInput`
- `TRequirement`
- `TMessage`

#### Parameters

- `requirement`
- `message`

##### Explanation

With `maxEntries` you can validate the number of entries of an object. If the input does not match the `requirement`, you can use `message` to customize the error message.

#### Returns

- `Action`

#### Examples

The following examples show how `maxEntries` can be used.

##### Maximum object entries

Schema to validate an object with a maximum of 5 entries.

```ts
const MaxEntriesSchema = v.pipe(
  v.record(v.string(), v.number()),
  v.maxEntries(5, 'Object must not exceed 5 entries.')
);
```

#### Related

The following APIs can be combined with `maxEntries`.

##### Schemas

\<ApiList
items={\[
'looseObject',
'object',
'objectWithRest',
'record',
'strictObject',
'variant',
]}
/>

##### Methods

##### Utils

### maxGraphemes

Creates a max [graphemes](https://en.wikipedia.org/wiki/Grapheme) validation action.

```ts
const Action = v.maxGraphemes<TInput, TRequirement, TMessage>(
  requirement,
  message
);
```

#### Generics

- `TInput`
- `TRequirement`
- `TMessage`

#### Parameters

- `requirement`
- `message`

##### Explanation

With `maxGraphemes` you can validate the graphemes of a string. If the input does not match the `requirement`, you can use `message` to customize the error message.

> Hint: The number of characters per grapheme is not limited. You may want to consider combining `maxGraphemes` with `maxLength` or `maxBytes` to set a stricter limit.

#### Returns

- `Action`

#### Examples

The following examples show how `maxGraphemes` can be used.

##### Max graphemes schema

Schema to validate a string with a maximum of 8 graphemes.

```ts
const MaxGraphemesSchema = v.pipe(
  v.string(),
  v.maxGraphemes(8, 'The string must not exceed 8 graphemes.')
);
```

#### Related

The following APIs can be combined with `maxGraphemes`.

##### Schemas

##### Methods

##### Utils

### maxLength

Creates a max length validation action.

```ts
const Action = v.maxLength<TInput, TRequirement, TMessage>(
  requirement,
  message
);
```

#### Generics

- `TInput`
- `TRequirement`
- `TMessage`

#### Parameters

- `requirement`
- `message`

##### Explanation

With `maxLength` you can validate the length of a string or array. If the input does not match the `requirement`, you can use `message` to customize the error message.

#### Returns

- `Action`

#### Examples

The following examples show how `maxLength` can be used.

##### Maximum string length

Schema to validate a string with a maximum length of 32 characters.

```ts
const MaxStringSchema = v.pipe(
  v.string(),
  v.maxLength(32, 'The string must not exceed 32 characters.')
);
```

##### Maximum array length

Schema to validate an array with a maximum length of 5 items.

```ts
const MaxArraySchema = v.pipe(
  v.array(v.number()),
  v.maxLength(5, 'The array must not exceed 5 numbers.')
);
```

#### Related

The following APIs can be combined with `maxLength`.

##### Schemas

\<ApiList
items={\['any', 'array', 'custom', 'instance', 'string', 'tuple', 'unknown']}
/>

##### Methods

##### Utils

### maxSize

Creates a max size validation action.

```ts
const Action = v.maxSize<TInput, TRequirement, TMessage>(requirement, message);
```

#### Generics

- `TInput`
- `TRequirement`
- `TMessage`

#### Parameters

- `requirement`
- `message`

##### Explanation

With `maxSize` you can validate the size of a map, set or blob. If the input does not match the `requirement`, you can use `message` to customize the error message.

#### Returns

- `Action`

#### Examples

The following examples show how `maxSize` can be used.

##### Blob size schema

Schema to validate a blob with a maximum size of 10 MB.

```ts
const BlobSchema = v.pipe(
  v.blob(),
  v.maxSize(10 * 1024 * 1024, 'The blob must not exceed 10 MB.')
);
```

##### Set size schema

Schema to validate a set with a maximum of 8 numbers.

```ts
const SetSchema = v.pipe(
  v.set(number()),
  v.maxSize(8, 'The set must not exceed 8 numbers.')
);
```

#### Related

The following APIs can be combined with `maxSize`.

##### Schemas

\<ApiList
items={\['any', 'blob', 'custom', 'file', 'instance', 'map', 'set', 'unknown']}
/>

##### Methods

##### Utils

### maxValue

Creates a max value validation action.

```ts
const Action = v.maxValue<TInput, TRequirement, TMessage>(requirement, message);
```

#### Generics

- `TInput`
- `TRequirement`
- `TMessage`

#### Parameters

- `requirement`
- `message`

##### Explanation

With `maxValue` you can validate the value of a string, number, boolean or date. If the input does not match the `requirement`, you can use `message` to customize the error message.

#### Returns

- `Action`

#### Examples

The following examples show how `maxValue` can be used.

##### Number schema

Schema to validate a number with a maximum value.

```ts
const NumberSchema = v.pipe(
  v.number(),
  v.maxValue(100, 'The number must not exceed 100.')
);
```

##### Date schema

Schema to validate a date with a maximum year.

```ts
const DateSchema = v.pipe(
  v.date(),
  v.maxValue(new Date('1999-12-31'), 'The date must not exceed the year 1999.')
);
```

#### Related

The following APIs can be combined with `maxValue`.

##### Schemas

\<ApiList
items={\[
'any',
'bigint',
'boolean',
'custom',
'date',
'number',
'string',
'unknown',
]}
/>

##### Methods

##### Utils

### maxWords

Creates a max [words](https://en.wikipedia.org/wiki/Word) validation action.

```ts
const Action = v.maxWords<TInput, TLocales, TRequirement, TMessage>(
  locales,
  requirement,
  message
);
```

#### Generics

- `TInput`
- `TLocales`
- `TRequirement`
- `TMessage`

#### Parameters

- `locales`
- `requirement`
- `message`

##### Explanation

With `maxWords` you can validate the words of a string based on the specified `locales`. If the input does not match the `requirement`, you can use `message` to customize the error message.

#### Returns

- `Action`

#### Examples

The following examples show how `maxWords` can be used.

##### Max words schema

Schema to validate a string with a maximum of 300 words.

```ts
const MaxWordsSchema = v.pipe(
  v.string(),
  v.maxWords('en', 300, 'The string must not exceed 300 words.')
);
```

#### Related

The following APIs can be combined with `maxWords`.

##### Schemas

##### Methods

##### Utils

### metadata

Creates a custom metadata action.

```ts
const Action = v.metadata<TInput, TMetadata>(metadata_);
```

#### Generics

- `TInput`
- `TMetadata`

#### Parameters

- `metadata_`

##### Explanation

With `metadata` you can attach custom metadata to a schema. This can be useful when working with AI tools or for documentation purposes.

#### Returns

- `Action`

#### Examples

The following examples show how `metadata` can be used.

##### Profile table schema

Schema to describe a profile table.

```ts
const ProfileTableSchema = v.pipe(
  v.object({
    username: v.pipe(v.string(), v.nonEmpty()),
    email: v.pipe(v.string(), v.email()),
    avatar: v.pipe(v.string(), v.url()),
    description: v.pipe(v.string(), v.maxLength(500)),
  }),
  v.metadata({
    table: 'profiles',
    primaryKey: 'username',
    indexes: ['email'],
  })
);
```

#### Related

The following APIs can be combined with `metadata`.

##### Schemas

\<ApiList
items={\[
'any',
'array',
'bigint',
'blob',
'boolean',
'custom',
'date',
'enum',
'exactOptional',
'file',
'function',
'instance',
'intersect',
'lazy',
'literal',
'looseObject',
'looseTuple',
'map',
'nan',
'never',
'nonNullable',
'nonNullish',
'nonOptional',
'null',
'nullable',
'nullish',
'number',
'object',
'objectWithRest',
'optional',
'picklist',
'promise',
'record',
'set',
'strictObject',
'strictTuple',
'string',
'symbol',
'tuple',
'tupleWithRest',
'undefined',
'undefinedable',
'union',
'unknown',
'variant',
'void',
]}
/>

##### Methods

##### Utils

### mimeType

Creates a [MIME type](https://developer.mozilla.org/docs/Web/HTTP/Basics_of_HTTP/MIME_types) validation action.

```ts
const Action = v.mimeType<TInput, TRequirement, TMessage>(requirement, message);
```

#### Generics

- `TInput`
- `TRequirement`
- `TMessage`

#### Parameters

- `requirement`
- `message`

##### Explanation

With `mimeType` you can validate the MIME type of a blob. If the input does not match the `requirement`, you can use `message` to customize the error message.

#### Returns

- `Action`

#### Examples

The following examples show how `mimeType` can be used.

##### Image schema

Schema to validate an image file.

```ts
const ImageSchema = v.pipe(
  v.blob(),
  v.mimeType(['image/jpeg', 'image/png'], 'Please select a JPEG or PNG file.')
);
```

#### Related

The following APIs can be combined with `mimeType`.

##### Schemas

##### Methods

##### Utils

### minBytes

Creates a min [bytes](https://en.wikipedia.org/wiki/Byte) validation action.

```ts
const Action = v.minBytes<TInput, TRequirement, TMessage>(requirement, message);
```

#### Generics

- `TInput`
- `TRequirement`
- `TMessage`

#### Parameters

- `requirement`
- `message`

##### Explanation

With `minBytes` you can validate the bytes of a string. If the input does not match the `requirement`, you can use `message` to customize the error message.

#### Returns

- `Action`

#### Examples

The following examples show how `minBytes` can be used.

##### Min bytes schema

Schema to validate a string with a minimum of 64 bytes.

```ts
const MinBytesSchema = v.pipe(
  v.string(),
  v.minBytes(64, 'The string must contain at least 64 bytes.')
);
```

#### Related

The following APIs can be combined with `minBytes`.

##### Schemas

##### Methods

##### Utils

### minEntries

Creates a min entries validation action.

```ts
const Action = v.minEntries<TInput, TRequirement, TMessage>(
  requirement,
  message
);
```

#### Generics

- `TInput`
- `TRequirement`
- `TMessage`

#### Parameters

- `requirement`
- `message`

##### Explanation

With `minEntries` you can validate the number of entries of an object. If the input does not match the `requirement`, you can use `message` to customize the error message.

#### Returns

- `Action`

#### Examples

The following examples show how `minEntries` can be used.

##### Minimum object entries

Schema to validate an object with a minimum of 5 entries.

```ts
const MinEntriesSchema = v.pipe(
  v.record(v.string(), v.number()),
  v.minEntries(5, 'The object should have at least 5 entries.')
);
```

#### Related

The following APIs can be combined with `minEntries`.

##### Schemas

\<ApiList
items={\[
'looseObject',
'object',
'objectWithRest',
'record',
'strictObject',
'variant',
]}
/>

##### Methods

##### Utils

### minGraphemes

Creates a min [graphemes](https://en.wikipedia.org/wiki/Grapheme) validation action.

```ts
const Action = v.minGraphemes<TInput, TRequirement, TMessage>(
  requirement,
  message
);
```

#### Generics

- `TInput`
- `TRequirement`
- `TMessage`

#### Parameters

- `requirement`
- `message`

##### Explanation

With `minGraphemes` you can validate the graphemes of a string. If the input does not match the `requirement`, you can use `message` to customize the error message.

#### Returns

- `Action`

#### Examples

The following examples show how `minGraphemes` can be used.

##### Min graphemes schema

Schema to validate a string with a minimum of 8 graphemes.

```ts
const MinGraphemesSchema = v.pipe(
  v.string(),
  v.minGraphemes(8, 'The string must contain at least 8 graphemes.')
);
```

#### Related

The following APIs can be combined with `minGraphemes`.

##### Schemas

##### Methods

##### Utils

### minLength

Creates a min length validation action.

```ts
const Action = v.minLength<TInput, TRequirement, TMessage>(
  requirement,
  message
);
```

#### Generics

- `TInput`
- `TRequirement`
- `TMessage`

#### Parameters

- `requirement`
- `message`

##### Explanation

With `minLength` you can validate the length of a string or array. If the input does not match the `requirement`, you can use `message` to customize the error message.

#### Returns

- `Action`

#### Examples

The following examples show how `minLength` can be used.

##### Minimum string length

Schema to validate a string with a minimum length of 3 characters.

```ts
const MinStringSchema = v.pipe(
  v.string(),
  v.minLength(3, 'The string must be 3 or more characters long.')
);
```

##### Minimum array length

Schema to validate an array with a minimum length of 5 items.

```ts
const MinArraySchema = v.pipe(
  v.array(v.number()),
  v.minLength(5, 'The array must contain 5 numbers or more.')
);
```

#### Related

The following APIs can be combined with `minLength`.

##### Schemas

\<ApiList
items={\['any', 'array', 'custom', 'instance', 'string', 'tuple', 'unknown']}
/>

##### Methods

##### Utils

### minSize

Creates a min size validation action.

```ts
const Action = v.minSize<TInput, TRequirement, TMessage>(requirement, message);
```

#### Generics

- `TInput`
- `TRequirement`
- `TMessage`

#### Parameters

- `requirement`
- `message`

##### Explanation

With `minSize` you can validate the size of a map, set or blob. If the input does not match the `requirement`, you can use `message` to customize the error message.

#### Returns

- `Action`

#### Examples

The following examples show how `minSize` can be used.

##### Blob size schema

Schema to validate a blob with a minimum size of 10 MB.

```ts
const BlobSchema = v.pipe(
  v.blob(),
  v.minSize(10 * 1024 * 1024, 'The blob must be at least 10 MB.')
);
```

##### Set size schema

Schema to validate a set with a minimum of 8 numbers.

```ts
const SetSchema = v.pipe(
  v.set(number()),
  v.minSize(8, 'The set must contain at least 8 numbers.')
);
```

#### Related

The following APIs can be combined with `minSize`.

##### Schemas

\<ApiList
items={\['any', 'blob', 'custom', 'file', 'instance', 'map', 'set', 'unknown']}
/>

##### Methods

##### Utils

### minValue

Creates a min value validation action.

```ts
const Action = v.minValue<TInput, TRequirement, TMessage>(requirement, message);
```

#### Generics

- `TInput`
- `TRequirement`
- `TMessage`

#### Parameters

- `requirement`
- `message`

##### Explanation

With `minValue` you can validate the value of a string, number, boolean or date. If the input does not match the `requirement`, you can use `message` to customize the error message.

#### Returns

- `Action`

#### Examples

The following examples show how `minValue` can be used.

##### Number schema

Schema to validate a number with a minimum value.

```ts
const NumberSchema = v.pipe(
  v.number(),
  v.minValue(100, 'The number must be at least 100.')
);
```

##### Date schema

Schema to validate a date with a minimum year.

```ts
const DateSchema = v.pipe(
  v.date(),
  v.minValue(new Date('2000-01-01'), 'The date must be after the year 1999.')
);
```

#### Related

The following APIs can be combined with `minValue`.

##### Schemas

\<ApiList
items={\[
'any',
'bigint',
'boolean',
'custom',
'date',
'number',
'string',
'unknown',
]}
/>

##### Methods

##### Utils

### minWords

Creates a min [words](https://en.wikipedia.org/wiki/Word) validation action.

```ts
const Action = v.minWords<TInput, TLocales, TRequirement, TMessage>(
  locales,
  requirement,
  message
);
```

#### Generics

- `TInput`
- `TLocales`
- `TRequirement`
- `TMessage`

#### Parameters

- `locales`
- `requirement`
- `message`

##### Explanation

With `minWords` you can validate the words of a string based on the specified `locales`. If the input does not match the `requirement`, you can use `message` to customize the error message.

#### Returns

- `Action`

#### Examples

The following examples show how `minWords` can be used.

##### Min words schema

Schema to validate a string with a minimum of 50 words.

```ts
const MinWordsSchema = v.pipe(
  v.string(),
  v.minWords('en', 50, 'The string must contain at least 50 words.')
);
```

#### Related

The following APIs can be combined with `minWords`.

##### Schemas

##### Methods

##### Utils

### multipleOf

Creates a [multiple](https://en.wikipedia.org/wiki/Multiple_\(mathematics\)) of validation action.

```ts
const Action = v.multipleOf<TInput, TRequirement, TMessage>(
  requirement,
  message
);
```

#### Generics

- `TInput`
- `TRequirement`
- `TMessage`

#### Parameters

- `requirement`
- `message`

##### Explanation

With `multipleOf` you can validate the value of a number. If the input does not match the `requirement`, you can use `message` to customize the error message.

#### Returns

- `Action`

#### Examples

The following examples show how `multipleOf` can be used.

##### Even number schema

Schema to validate an even number.

```ts
const EvenNumberSchema = v.pipe(
  v.number(),
  v.multipleOf(2, 'The number must be even.')
);
```

#### Related

The following APIs can be combined with `multipleOf`.

##### Schemas

##### Methods

##### Utils

### nanoid

Creates a [Nano ID](https://github.com/ai/nanoid) validation action.

```ts
const Action = v.nanoid<TInput, TMessage>(message);
```

#### Generics

- `TInput`
- `TMessage`

#### Parameters

- `message`

##### Explanation

With `nanoid` you can validate the formatting of a string. If the input is not an Nano ID, you can use `message` to customize the error message.

#### Returns

- `Action`

#### Examples

The following examples show how `nanoid` can be used.

> Since Nano IDs are not limited to a fixed length, it is recommended to combine `nanoid` with `length` to ensure the correct length.

##### Nano ID schema

Schema to validate a Nano ID.

```ts
const NanoIdSchema = v.pipe(
  v.string(),
  v.nanoid('The Nano ID is badly formatted.'),
  v.length(21, 'The Nano ID must be 21 characters long.')
);
```

#### Related

The following APIs can be combined with `nanoid`.

##### Schemas

##### Methods

##### Utils

### nonEmpty

Creates a non-empty validation action.

```ts
const Action = v.nonEmpty<TInput, TMessage>(requirement, message);
```

#### Generics

- `TInput`
- `TMessage`

#### Parameters

- `message`

##### Explanation

With `nonEmpty` you can validate that a string or array is non-empty. If the input is empty, you can use `message` to customize the error message.

#### Returns

- `Action`

#### Examples

The following examples show how `nonEmpty` can be used.

##### String schema

Schema to validate that a string is non-empty.

```ts
const StringSchema = v.pipe(
  v.string(),
  v.nonEmpty('The string should contain at least one character.')
);
```

##### Array schema

Schema to validate that an array is non-empty.

```ts
const ArraySchema = v.pipe(
  v.array(v.number()),
  v.nonEmpty('The array should contain at least one item.')
);
```

#### Related

The following APIs can be combined with `nonEmpty`.

##### Schemas

\<ApiList
items={\['any', 'array', 'custom', 'instance', 'string', 'tuple', 'unknown']}
/>

##### Methods

##### Utils

### normalize

Creates a normalize transformation action.

```ts
const Action = v.normalize<TForm>(form);
```

#### Generics

- `TForm`

#### Parameters

- `form`

#### Returns

- `Action`

#### Examples

The following examples show how `normalize` can be used.

##### Normalized string

Schema to normalize a string.

```ts
const StringSchema = v.pipe(v.string(), v.normalize());
```

#### Related

The following APIs can be combined with `normalize`.

##### Schemas

##### Methods

##### Utils

### notBytes

Creates a not [bytes](https://en.wikipedia.org/wiki/Byte) validation action.

```ts
const Action = v.notBytes<TInput, TRequirement, TMessage>(requirement, message);
```

#### Generics

- `TInput`
- `TRequirement`
- `TMessage`

#### Parameters

- `requirement`
- `message`

##### Explanation

With `notBytes` you can validate the bytes of a string. If the input does not match the `requirement`, you can use `message` to customize the error message.

#### Returns

- `Action`

#### Examples

The following examples show how `notBytes` can be used.

##### Not bytes schema

Schema to validate a string with more or less than 8 bytes.

```ts
const NotBytesSchema = v.pipe(
  v.string(),
  v.notBytes(8, 'The string must not have 8 bytes.')
);
```

#### Related

The following APIs can be combined with `notBytes`.

##### Schemas

##### Methods

##### Utils

### notEntries

Creates a not entries validation action.

```ts
const Action = v.notEntries<TInput, TRequirement, TMessage>(
  requirement,
  message
);
```

#### Generics

- `TInput`
- `TRequirement`
- `TMessage`

#### Parameters

- `requirement`
- `message`

##### Explanation

With `notEntries` you can validate the number of entries of an object. If the input does not match the `requirement`, you can use `message` to customize the error message.

#### Returns

- `Action`

#### Examples

The following examples show how `notEntries` can be used.

##### Not object entries

Schema to validate an object that does not have 5 entries.

```ts
const NotEntriesSchema = v.pipe(
  v.record(v.string(), v.number()),
  v.notEntries(5, 'Object must not have 5 entries')
);
```

#### Related

The following APIs can be combined with `notEntries`.

##### Schemas

\<ApiList
items={\[
'looseObject',
'object',
'objectWithRest',
'record',
'strictObject',
'variant',
]}
/>

##### Methods

##### Utils

### notGraphemes

Creates a not [graphemes](https://en.wikipedia.org/wiki/Grapheme) validation action.

```ts
const Action = v.notGraphemes<TInput, TRequirement, TMessage>(
  requirement,
  message
);
```

#### Generics

- `TInput`
- `TRequirement`
- `TMessage`

#### Parameters

- `requirement`
- `message`

##### Explanation

With `notGraphemes` you can validate the graphemes of a string. If the input does not match the `requirement`, you can use `message` to customize the error message.

#### Returns

- `Action`

#### Examples

The following examples show how `notGraphemes` can be used.

##### Not graphemes schema

Schema to validate a string with more or less than 8 graphemes.

```ts
const NotGraphemesSchema = v.pipe(
  v.string(),
  v.notGraphemes(8, 'The string must not have 8 graphemes.')
);
```

#### Related

The following APIs can be combined with `notGraphemes`.

##### Schemas

##### Methods

##### Utils

### notLength

Creates a not length validation action.

```ts
const Action = v.notLength<TInput, TRequirement, TMessage>(
  requirement,
  message
);
```

#### Generics

- `TInput`
- `TRequirement`
- `TMessage`

#### Parameters

- `requirement`
- `message`

##### Explanation

With `notLength` you can validate the length of a string or array. If the input does not match the `requirement`, you can use `message` to customize the error message.

#### Returns

- `Action`

#### Examples

The following examples show how `notLength` can be used.

##### String schema

Schema to validate the length of a string.

```ts
const StringSchema = v.pipe(
  v.string(),
  v.notLength(8, 'The string must not be 8 characters long.')
);
```

##### Array schema

Schema to validate the length of an array.

```ts
const ArraySchema = v.pipe(
  v.array(number()),
  v.notLength(10, 'The array must not contain 10 numbers.')
);
```

#### Related

The following APIs can be combined with `notLength`.

##### Schemas

\<ApiList
items={\['any', 'array', 'custom', 'instance', 'string', 'tuple', 'unknown']}
/>

##### Methods

##### Utils

### notSize

Creates a not size validation action.

```ts
const Action = v.notSize<TInput, TRequirement, TMessage>(requirement, message);
```

#### Generics

- `TInput`
- `TRequirement`
- `TMessage`

#### Parameters

- `requirement`
- `message`

##### Explanation

With `notSize` you can validate the size of a map, set or blob. If the input does not match the `requirement`, you can use `message` to customize the error message.

#### Returns

- `Action`

#### Examples

The following examples show how `notSize` can be used.

##### Blob size schema

Schema to validate a blob with less ore more then 10 MB.

```ts
const BlobSchema = v.pipe(
  v.blob(),
  v.notSize(10 * 1024 * 1024, 'The blob must not be 10 MB in size.')
);
```

##### Set size schema

Schema to validate a set with less ore more then 8 numbers.

```ts
const SetSchema = v.pipe(
  v.set(number()),
  v.notSize(8, 'The set must not contain 8 numbers.')
);
```

#### Related

The following APIs can be combined with `notSize`.

##### Schemas

\<ApiList
items={\['any', 'blob', 'custom', 'file', 'instance', 'map', 'set', 'unknown']}
/>

##### Methods

##### Utils

### notValue

Creates a not value validation action.

```ts
const Action = v.notValue<TInput, TRequirement, TMessage>(requirement, message);
```

#### Generics

- `TInput`
- `TRequirement`
- `TMessage`

#### Parameters

- `requirement`
- `message`

##### Explanation

With `notValue` you can validate the value of a string, number, boolean or date. If the input does not match the `requirement`, you can use `message` to customize the error message.

#### Returns

- `Action`

#### Examples

The following examples show how `notValue` can be used.

##### Number schema

Schema to validate a number that is more or less than 100.

```ts
const NumberSchema = v.pipe(
  v.number(),
  v.notValue(100, 'The number must not be 100.')
);
```

##### Date schema

Schema to validate a date that is before or after the start of 2000.

```ts
const DateSchema = v.pipe(
  v.date(),
  v.notValue(new Date('2000-01-01'), 'The date must not be the start of 2000.')
);
```

#### Related

The following APIs can be combined with `notValue`.

##### Schemas

\<ApiList
items={\[
'any',
'bigint',
'boolean',
'custom',
'date',
'number',
'string',
'unknown',
]}
/>

##### Methods

##### Utils

### notValues

Creates a not values validation action.

```ts
const Action = v.notValues<TInput, TRequirement, TMessage>(
  requirement,
  message
);
```

#### Generics

- `TInput`
- `TRequirement`
- `TMessage`

#### Parameters

- `requirement`
- `message`

##### Explanation

With `notValues` you can validate the value of a string, number, boolean or date. If the input matches one of the values in the `requirement`, you can use `message` to customize the error message.

#### Returns

- `Action`

#### Examples

The following examples show how `notValues` can be used.

##### Number schema

Schema to validate a number that is not 10, 11 or 12.

```ts
const NumberSchema = v.pipe(
  v.number(),
  v.notValues([10, 11, 12], 'The number must not be 10, 11 or 12.')
);
```

#### Related

The following APIs can be combined with `notValues`.

##### Schemas

\<ApiList
items={\[
'any',
'bigint',
'boolean',
'custom',
'date',
'number',
'string',
'unknown',
]}
/>

##### Methods

##### Utils

### notWords

Creates a not [words](https://en.wikipedia.org/wiki/Word) validation action.

```ts
const Action = v.notWords<TInput, TLocales, TRequirement, TMessage>(
  locales,
  requirement,
  message
);
```

#### Generics

- `TInput`
- `TLocales`
- `TRequirement`
- `TMessage`

#### Parameters

- `locales`
- `requirement`
- `message`

##### Explanation

With `notWords` you can validate the words of a string based on the specified `locales`. If the input does not match the `requirement`, you can use `message` to customize the error message.

#### Returns

- `Action`

#### Examples

The following examples show how `notWords` can be used.

##### Not words schema

Schema to validate a string with more or less than 5 words.

```ts
const NotWordsSchema = v.pipe(
  v.string(),
  v.notWords('en', 5, 'The string must not have 5 words.')
);
```

#### Related

The following APIs can be combined with `notWords`.

##### Schemas

##### Methods

##### Utils

### octal

Creates an [octal](https://en.wikipedia.org/wiki/Octal) validation action.

```ts
const Action = v.octal<TInput, TMessage>(message);
```

#### Generics

- `TInput`
- `TMessage`

#### Parameters

- `message`

##### Explanation

With `octal` you can validate the formatting of a string. If the input is not an octal, you can use `message` to customize the error message.

#### Returns

- `Action`

#### Examples

The following examples show how `octal` can be used.

##### Octal schema

Schema to validate a octal string.

```ts
const OctalSchema = v.pipe(
  v.string(),
  v.octal('The octal is badly formatted.')
);
```

#### Related

The following APIs can be combined with `octal`.

##### Schemas

##### Methods

##### Utils

### parseBoolean

Creates a parse boolean transformation action.

```ts
const Action = v.parseBoolean<TInput, TConfig, TMessage>(config, message);
```

#### Generics

- `TInput`
- `TConfig`
- `TMessage`

#### Parameters

- `config`
- `message`

##### Explanation

With `parseBoolean` you can parse certain "boolish" values into a plain boolean value (e.g. parsing environment variables). It supports both string and non-string values and the comparison is case-insensitive for strings.

By default, the truthy values are `true`, `1`, `"true"`, `"1"`, `"yes"`, `"y"`, `"on"`, and `"enabled"`. The falsy values are `false`, `0`, `"false"`, `"0"`, `"no"`, `"n"`, `"off"`, and `"disabled"`. You can override these defaults via the `config` argument.

#### Returns

- `Action`

#### Examples

The following examples show how `parseBoolean` can be used.

```ts
const EnvSchema = v.object({
  // Default behavior
  PROD_MODE: v.pipe(v.string(), v.parseBoolean()),

  // With custom config
  LOG_MODE: v.pipe(
    v.string(),
    v.parseBoolean({
      truthy: ['verbose', 'chatty', 'record'],
      falsy: ['silent', 'quiet', 'mute'],
    })
  ),
});
```

#### Related

The following APIs can be combined with `parseBoolean`.

##### Schemas

##### Methods

##### Utils

### parseJson

Creates a JSON parse transformation action.

```ts
const Action = v.parseJson<TInput, TConfig, TMessage>(config, message);
```

#### Generics

- `TInput`
- `TConfig`
- `TMessage`

#### Parameters

- `config`
- `message`

##### Explanation

With `parseJson` you can parse a JSON string. If the input is not valid JSON, you can use `message` to customize the error message.

#### Returns

- `Action`

#### Examples

The following examples show how `parseJson` can be used.

##### Parse and validate JSON

Parse a JSON string and validate the result.

```ts
const StringifiedObjectSchema = v.pipe(
  v.string(),
  v.parseJson(),
  v.object({ key: v.string() })
);
```

##### Parse JSON with reviver

Parse a JSON string with a reviver function.

```ts
const StringifiedObjectSchema = v.pipe(
  v.string(),
  v.parseJson({
    reviver: (key, value) =>
      typeof value === 'string' ? value.toUpperCase() : value,
  }),
  v.object({ key: v.string() })
);
```

#### Related

The following APIs can be combined with `parseJson`.

##### Schemas

##### Methods

##### Utils

### partialCheck

Creates a partial check validation action.

```ts
const Action = v.partialCheck<TInput, TPaths, TSelection, TMessage>(
  paths,
  requirement,
  message
);
```

#### Generics

- `TInput`
- `TPaths`
- `TSelection`
- `TMessage`

#### Parameters

- `paths`
- `requirement`
- `message`

##### Explanation

With `partialCheck` you can freely validate the selected input and return `true` if it is valid or `false` otherwise. If the input does not match your `requirement`, you can use `message` to customize the error message.

> The difference to `check` is that `partialCheck` can be executed whenever the selected part of the data is valid, while `check` is executed only when the entire dataset is typed. This can be an important advantage when working with forms.

#### Returns

- `Action`

#### Examples

The following examples show how `partialCheck` can be used.

##### Register schema

Schema that ensures that the two passwords match.

```ts
const RegisterSchema = v.pipe(
  v.object({
    email: v.pipe(
      v.string(),
      v.nonEmpty('Please enter your email.'),
      v.email('The email address is badly formatted.')
    ),
    password1: v.pipe(
      v.string(),
      v.nonEmpty('Please enter your password.'),
      v.minLength(8, 'Your password must have 8 characters or more.')
    ),
    password2: v.string(),
  }),
  v.forward(
    v.partialCheck(
      [['password1'], ['password2']],
      (input) => input.password1 === input.password2,
      'The two passwords do not match.'
    ),
    ['password2']
  )
);
```

#### Related

The following APIs can be combined with `partialCheck`.

##### Schemas

\<ApiList
items={\[
'any',
'array',
'custom',
'instance',
'intersect',
'lazy',
'looseObject',
'looseTuple',
'nonNullable',
'nonNullish',
'nonOptional',
'object',
'objectWithRest',
'record',
'strictObject',
'strictTuple',
'tuple',
'tupleWithRest',
'union',
'variant',
]}
/>

##### Methods

##### Utils
