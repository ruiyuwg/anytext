## String formats

To validate against some common string formats:

```ts
z.email();
z.uuid();
z.url();
z.httpUrl();       // http or https URLs only
z.hostname();
z.emoji();         // validates a single emoji character
z.base64();
z.base64url();
z.hex();
z.jwt();
z.nanoid();
z.cuid();
z.cuid2();
z.ulid();
z.ipv4();
z.ipv6();
z.mac();
z.cidrv4();        // ipv4 CIDR block
z.cidrv6();        // ipv6 CIDR block
z.hash("sha256");  // or "sha1", "sha384", "sha512", "md5"
z.iso.date();
z.iso.time();
z.iso.datetime();
z.iso.duration();
```

### Emails

To validate email addresses:

```ts
z.email();
```

By default, Zod uses a comparatively strict email regex designed to validate normal email addresses containing common characters. It's roughly equivalent to the rules enforced by Gmail. To learn more about this regex, refer to [this post](https://colinhacks.com/essays/reasonable-email-regex).

```ts
/^(?!\.)(?!.*\.\.)([a-z0-9_'+\-\.]*)[a-z0-9_+-]@([a-z0-9][a-z0-9\-]*\.)+[a-z]{2,}$/i
```

To customize the email validation behavior, you can pass a custom regular expression to the `pattern` param.

```ts
z.email({ pattern: /your regex here/ });
```

Zod exports several useful regexes you could use.

```ts
// Zod's default email regex
z.email();
z.email({ pattern: z.regexes.email }); // equivalent

// the regex used by browsers to validate input[type=email] fields
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email
z.email({ pattern: z.regexes.html5Email });

// the classic emailregex.com regex (RFC 5322)
z.email({ pattern: z.regexes.rfc5322Email });

// a loose regex that allows Unicode (good for intl emails)
z.email({ pattern: z.regexes.unicodeEmail });
```

### UUIDs

To validate UUIDs:

```ts
z.uuid();
```

To specify a particular UUID version:

```ts
// supports "v1", "v2", "v3", "v4", "v5", "v6", "v7", "v8"
z.uuid({ version: "v4" });

// for convenience
z.uuidv4();
z.uuidv6();
z.uuidv7();
```

The RFC 9562/4122 UUID spec requires the first two bits of byte 8 to be `10`. Other UUID-like identifiers do not enforce this constraint. To validate any UUID-like identifier:

```ts
z.guid();
```

### URLs

To validate any WHATWG-compatible URL:

```ts
const schema = z.url();

schema.parse("https://example.com"); // ✅
schema.parse("http://localhost"); // ✅
schema.parse("mailto:noreply@zod.dev"); // ✅
```

As you can see this is quite permissive. Internally this uses the `new URL()` constructor to validate inputs; this behavior may differ across platforms and runtimes but it's the mostly rigorous way to validate URIs/URLs on any given JS runtime/engine.

To validate the hostname against a specific regex:

```ts
const schema = z.url({ hostname: /^example\.com$/ });

schema.parse("https://example.com"); // ✅
schema.parse("https://zombo.com"); // ❌
```

To validate the protocol against a specific regex, use the `protocol` param.

```ts
const schema = z.url({ protocol: /^https$/ });

schema.parse("https://example.com"); // ✅
schema.parse("http://example.com"); // ❌
```

**Web URLs** — In many cases, you'll want to validate Web URLs specifically. Here's the recommended schema for doing so:

```ts
const httpUrl = z.url({
  protocol: /^https?$/,
  hostname: z.regexes.domain
});
```

This restricts the protocol to `http`/`https` and ensures the hostname is a valid domain name with the `z.regexes.domain` regular expression:

```ts
/^([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/
```

To normalize URLs, use the `normalize` flag. This will overwrite the input value with the [normalized URL](https://chatgpt.com/share/6881547f-bebc-800f-9093-f5981e277c2c) returned by `new URL()`.

```ts
new URL("HTTP://ExAmPle.com:80/./a/../b?X=1#f oo").href
// => "http://example.com/b?X=1#f%20oo"
```

### ISO datetimes

As you may have noticed, Zod string includes a few date/time related validations. These validations are regular expression based, so they are not as strict as a full date/time library. However, they are very convenient for validating user input.

The `z.iso.datetime()` method enforces ISO 8601; by default, no timezone offsets are allowed:

```ts
const datetime = z.iso.datetime();

datetime.parse("2020-01-01T06:15:00Z"); // ✅
datetime.parse("2020-01-01T06:15:00.123Z"); // ✅
datetime.parse("2020-01-01T06:15:00.123456Z"); // ✅ (arbitrary precision)
datetime.parse("2020-01-01T06:15:00+02:00"); // ❌ (offsets not allowed)
datetime.parse("2020-01-01T06:15:00"); // ❌ (local not allowed)
```

To allow timezone offsets:

```ts
const datetime = z.iso.datetime({ offset: true });

// allows timezone offsets
datetime.parse("2020-01-01T06:15:00+02:00"); // ✅

// basic offsets not allowed
datetime.parse("2020-01-01T06:15:00+02");    // ❌
datetime.parse("2020-01-01T06:15:00+0200");  // ❌

// Z is still supported
datetime.parse("2020-01-01T06:15:00Z"); // ✅ 
```

To allow unqualified (timezone-less) datetimes:

```ts
const schema = z.iso.datetime({ local: true });
schema.parse("2020-01-01T06:15:01"); // ✅
schema.parse("2020-01-01T06:15"); // ✅ seconds optional
```

To constrain the allowable time `precision`. By default, seconds are optional and arbitrary sub-second precision is allowed.

```ts
const a = z.iso.datetime();
a.parse("2020-01-01T06:15Z"); // ✅
a.parse("2020-01-01T06:15:00Z"); // ✅
a.parse("2020-01-01T06:15:00.123Z"); // ✅

const b = z.iso.datetime({ precision: -1 }); // minute precision (no seconds)
b.parse("2020-01-01T06:15Z"); // ✅
b.parse("2020-01-01T06:15:00Z"); // ❌
b.parse("2020-01-01T06:15:00.123Z"); // ❌

const c = z.iso.datetime({ precision: 0 }); // second precision only
c.parse("2020-01-01T06:15Z"); // ❌
c.parse("2020-01-01T06:15:00Z"); // ✅
c.parse("2020-01-01T06:15:00.123Z"); // ❌

const d = z.iso.datetime({ precision: 3 }); // millisecond precision only
d.parse("2020-01-01T06:15Z"); // ❌
d.parse("2020-01-01T06:15:00Z"); // ❌
d.parse("2020-01-01T06:15:00.123Z"); // ✅
```

### ISO dates

The `z.iso.date()` method validates strings in the format `YYYY-MM-DD`.

```ts
const date = z.iso.date();

date.parse("2020-01-01"); // ✅
date.parse("2020-1-1"); // ❌
date.parse("2020-01-32"); // ❌
```

### ISO times

The `z.iso.time()` method validates strings in the format `HH:MM[:SS[.s+]]`. By default seconds are optional, as are sub-second decimals.

```ts
const time = z.iso.time();

time.parse("03:15"); // ✅
time.parse("03:15:00"); // ✅
time.parse("03:15:00.9999999"); // ✅ (arbitrary precision)
```

No offsets of any kind are allowed.

```ts
time.parse("03:15:00Z"); // ❌ (no `Z` allowed)
time.parse("03:15:00+02:00"); // ❌ (no offsets allowed)
```

Use the `precision` parameter to constrain the allowable decimal precision.

```ts
z.iso.time({ precision: -1 }); // HH:MM (minute precision)
z.iso.time({ precision: 0 });  // HH:MM:SS (second precision)
z.iso.time({ precision: 1 });  // HH:MM:SS.s (decisecond precision)
z.iso.time({ precision: 2 });  // HH:MM:SS.ss (centisecond precision)
z.iso.time({ precision: 3 });  // HH:MM:SS.sss (millisecond precision)
```

### IP addresses

```ts
const ipv4 = z.ipv4();
ipv4.parse("192.168.0.0"); // ✅

const ipv6 = z.ipv6();
ipv6.parse("2001:db8:85a3::8a2e:370:7334"); // ✅
```

### IP blocks (CIDR)

Validate IP address ranges specified with [CIDR notation](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing).

```ts
const cidrv4 = z.cidrv4();
cidrv4.parse("192.168.0.0/24"); // ✅

const cidrv6 = z.cidrv6();
cidrv6.parse("2001:db8::/32"); // ✅
```

### MAC Addresses

Validate standard 48-bit MAC address [IEEE 802](https://en.wikipedia.org/wiki/MAC_address).

```ts
const mac = z.mac(); 
mac.parse("00:1A:2B:3C:4D:5E");  // ✅
mac.parse("00-1a-2b-3c-4d-5e");  // ❌ colon-delimited by default
mac.parse("001A:2B3C:4D5E");     // ❌ standard formats only
mac.parse("00:1A:2b:3C:4d:5E");  // ❌ no mixed case

// custom delimiter
const dashMac = z.mac({ delimiter: "-" });
dashMac.parse("00-1A-2B-3C-4D-5E"); // ✅
```

### JWTs

Validate [JSON Web Tokens](https://jwt.io/).

```ts
z.jwt();
z.jwt({ alg: "HS256" });
```

### Hashes

To validate cryptographic hash values:

```ts
z.hash("md5");
z.hash("sha1");
z.hash("sha256");
z.hash("sha384");
z.hash("sha512");
```

By default, `z.hash()` expects hexadecimal encoding, as is conventional. You can specify a different encoding with the `enc` parameter:

```ts
z.hash("sha256", { enc: "hex" });       // default
z.hash("sha256", { enc: "base64" });    // base64 encoding
z.hash("sha256", { enc: "base64url" }); // base64url encoding (no padding)
```

```
| Algorithm / Encoding | `"hex"` | `"base64"`      | `"base64url"` |
| -------------------- | ------- | --------------- | ------------- |
| `"md5"`              | 32      | 24 (22 + "==")  | 22            |
| `"sha1"`             | 40      | 28 (27 + "=")   | 27            |
| `"sha256"`           | 64      | 44 (43 + "=")   | 43            |
| `"sha384"`           | 96      | 64 (no padding) | 64            |
| `"sha512"`           | 128     | 88 (86 + "==")  | 86            |
```

### Custom formats

To define your own string formats:

```ts
const coolId = z.stringFormat("cool-id", ()=>{
  // arbitrary validation here
  return val.length === 100 && val.startsWith("cool-");
});

// a regex is also accepted
z.stringFormat("cool-id", /^cool-[a-z0-9]{95}$/);
```

This schema will produce `"invalid_format"` issues, which are more descriptive than the `"custom"` errors produced by refinements or `z.custom()`.

```ts
myFormat.parse("invalid input!");
// ZodError: [
//   {
//     "code": "invalid_format",
//     "format": "cool-id",
//     "path": [],
//     "message": "Invalid cool-id"
//   }
// ]
```

## Template literals

> **New** — Introduced in `zod@4.0`.

To define a template literal schema:

```ts
const schema = z.templateLiteral([ "hello, ", z.string(), "!" ]);
// `hello, ${string}!`
```

The `z.templateLiteral` API can handle any number of string literals (e.g. `"hello"`) and schemas. Any schema with an inferred type that's assignable to `string | number | bigint | boolean | null | undefined` can be passed.

```ts
z.templateLiteral([ "hi there" ]);
// `hi there`

z.templateLiteral([ "email: ", z.string() ]);
// `email: ${string}`

z.templateLiteral([ "high", z.literal(5) ]);
// `high5`

z.templateLiteral([ z.nullable(z.literal("grassy")) ]);
// `grassy` | `null`

z.templateLiteral([ z.number(), z.enum(["px", "em", "rem"]) ]);
// `${number}px` | `${number}em` | `${number}rem`
```

## Numbers

Use `z.number()` to validate numbers. It allows any finite number.

```ts
const schema = z.number();

schema.parse(3.14);      // ✅
schema.parse(NaN);       // ❌
schema.parse(Infinity);  // ❌
```

Zod implements a handful of number-specific validations:

````
```ts
z.number().gt(5);
z.number().gte(5);                     // alias .min(5)
z.number().lt(5);
z.number().lte(5);                     // alias .max(5)
z.number().positive();                 // alias .gt(0)
z.number().nonnegative();    
z.number().negative(); 
z.number().nonpositive(); 
z.number().multipleOf(5);              // alias .step(5)
```



```ts
z.number().check(z.gt(5));
z.number().check(z.gte(5));            // alias .minimum(5)
z.number().check(z.lt(5));
z.number().check(z.lte(5));            // alias .maximum(5)
z.number().check(z.positive());        // alias .gt(0)
z.number().check(z.nonnegative()); 
z.number().check(z.negative()); 
z.number().check(z.nonpositive()); 
z.number().check(z.multipleOf(5));     // alias .step(5)
```
````

If (for some reason) you want to validate `NaN`, use `z.nan()`.

```ts
z.nan().parse(NaN);              // ✅
z.nan().parse("anything else");  // ❌
```

## Integers

To validate integers:

```ts
z.int();     // restricts to safe integer range
z.int32();   // restrict to int32 range
```

## BigInts

To validate BigInts:

```ts
z.bigint();
```

Zod includes a handful of bigint-specific validations.

````
```ts
z.bigint().gt(5n);
z.bigint().gte(5n);                    // alias `.min(5n)`
z.bigint().lt(5n);
z.bigint().lte(5n);                    // alias `.max(5n)`
z.bigint().positive();                 // alias `.gt(0n)`
z.bigint().nonnegative(); 
z.bigint().negative(); 
z.bigint().nonpositive(); 
z.bigint().multipleOf(5n);             // alias `.step(5n)`
```



```ts
z.bigint().check(z.gt(5n));
z.bigint().check(z.gte(5n));           // alias `.minimum(5n)`
z.bigint().check(z.lt(5n));
z.bigint().check(z.lte(5n));           // alias `.maximum(5n)`
z.bigint().check(z.positive());        // alias `.gt(0n)` 
z.bigint().check(z.nonnegative()); 
z.bigint().check(z.negative()); 
z.bigint().check(z.nonpositive()); 
z.bigint().check(z.multipleOf(5n));    // alias `.step(5n)`
```
````

## Booleans

To validate boolean values:

```ts
z.boolean().parse(true); // => true
z.boolean().parse(false); // => false
```

## Dates

Use `z.date()` to validate `Date` instances.

```ts
z.date().safeParse(new Date()); // success: true
z.date().safeParse("2022-01-12T06:15:00.000Z"); // success: false
```

To customize the error message:

```ts
z.date({
  error: issue => issue.input === undefined ? "Required" : "Invalid date"
});
```

Zod provides a handful of date-specific validations.

````
```ts
z.date().min(new Date("1900-01-01"), { error: "Too old!" });
z.date().max(new Date(), { error: "Too young!" });
```



```ts
z.date().check(z.minimum(new Date("1900-01-01"), { error: "Too old!" }));
z.date().check(z.maximum(new Date(), { error: "Too young!" }));
```
````
