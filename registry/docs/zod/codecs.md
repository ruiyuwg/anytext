## Codecs

> **New** — Introduced in Zod 4.1. Refer to the dedicated [Codecs](/codecs) page for more information.

Codecs are a special kind of schema that implement _bidirectional transformations_ between two other schemas.

```ts
const stringToDate = z.codec(
  z.iso.datetime(), // input schema: ISO date string
  z.date(), // output schema: Date object
  {
    decode: (isoString) => new Date(isoString), // ISO string → Date
    encode: (date) => date.toISOString(), // Date → ISO string
  },
);
```

A regular `.parse()` operations performs the _forward transform_. It calls the codec's `decode` function.

```ts
stringToDate.parse("2024-01-15T10:30:00.000Z"); // => Date
```

You can alternatively use the top-level `z.decode()` function. Unlike `.parse()` (which accepts `unknown` input), `z.decode()` expects a strongly-typed input (`string` in this example).

```ts
z.decode(stringToDate, "2024-01-15T10:30:00.000Z"); // => Date
```

To perform the _reverse transform_, use the inverse: `z.encode()`.

```ts
z.encode(stringToDate, new Date("2024-01-15")); // => "2024-01-15T00:00:00.000Z"
```

Refer to the dedicated [Codecs](/codecs) page for more information. That page contains implementations for commonly-needed codecs that you can copy/paste into your project:

- [**`stringToNumber`**](/codecs#stringtonumber)
- [**`stringToInt`**](/codecs#stringtoint)
- [**`stringToBigInt`**](/codecs#stringtobigint)
- [**`numberToBigInt`**](/codecs#numbertobigint)
- [**`isoDatetimeToDate`**](/codecs#isodatetimetodate)
- [**`epochSecondsToDate`**](/codecs#epochsecondstodate)
- [**`epochMillisToDate`**](/codecs#epochmillistodate)
- [**`jsonCodec`**](/codecs#jsoncodec)
- [**`utf8ToBytes`**](/codecs#utf8tobytes)
- [**`bytesToUtf8`**](/codecs#bytestoutf8)
- [**`base64ToBytes`**](/codecs#base64tobytes)
- [**`base64urlToBytes`**](/codecs#base64urltobytes)
- [**`hexToBytes`**](/codecs#hextobytes)
- [**`stringToURL`**](/codecs#stringtourl)
- [**`stringToHttpURL`**](/codecs#stringtohttpurl)
- [**`uriComponent`**](/codecs#uricomponent)
- [**`stringToBoolean`**](/codecs#stringtoboolean)

## Pipes

Schemas can be chained together into "pipes". Pipes are primarily useful when used in conjunction with [Transforms](#transforms).

````
```ts
const stringToLength = z.string().pipe(z.transform(val => val.length));

stringToLength.parse("hello"); // => 5
```



```ts
const stringToLength = z.pipe(z.string(), z.transform(val => val.length));

z.parse(stringToLength, "hello"); // => 5
```
````
