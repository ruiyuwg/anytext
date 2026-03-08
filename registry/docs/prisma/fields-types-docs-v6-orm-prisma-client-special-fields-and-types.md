# Fields & types (/docs/v6/orm/prisma-client/special-fields-and-types)

This section covers various special fields and types you can use with Prisma Client.

Working with Decimal \[#working-with-decimal]

`Decimal` fields are represented by the [`Decimal.js` library](https://mikemcl.github.io/decimal.js/). The following example demonstrates how to import and use `Prisma.Decimal`:

```ts
import { PrismaClient, Prisma } from "@prisma/client";

const newTypes = await prisma.sample.create({
  data: {
    cost: new Prisma.Decimal(24.454545),
  },
});
```

<br />

You can also perform arithmetic operations:

```ts
import { PrismaClient, Prisma } from "@prisma/client";

const newTypes = await prisma.sample.create({
  data: {
    cost: new Prisma.Decimal(24.454545).plus(1),
  },
});
```

`Prisma.Decimal` uses Decimal.js, see [Decimal.js docs](https://mikemcl.github.io/decimal.js) to learn more.

<CalloutContainer type="warning">
  <CalloutDescription>
    The use of the `Decimal` field [is not currently supported in MongoDB](https://github.com/prisma/prisma/issues/12637).
  </CalloutDescription>
</CalloutContainer>

Working with BigInt \[#working-with-bigint]

Overview \[#overview]

`BigInt` fields are represented by the [`BigInt` type](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt) (Node.js 10.4.0+ required). The following example demonstrates how to use the `BigInt` type:

```ts
import { PrismaClient, Prisma } from "@prisma/client";

const newTypes = await prisma.sample.create({
  data: {
    revenue: BigInt(534543543534),
  },
});
```

Serializing BigInt \[#serializing-bigint]

Prisma Client returns records as plain JavaScript objects. If you attempt to use `JSON.stringify` on an object that includes a `BigInt` field, you will see the following error:

```
Do not know how to serialize a BigInt
```

To work around this issue, use a customized implementation of `JSON.stringify`:

```js
JSON.stringify(
  this,
  (key, value) => (typeof value === "bigint" ? value.toString() : value), // return everything else unchanged
);
```

Working with Bytes \[#working-with-bytes]

`Bytes` fields are represented by the [`Uint8Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) type. The following example demonstrates how to use the `Uint8Array` type:

```ts
import { PrismaClient, Prisma } from "@prisma/client";

const newTypes = await prisma.sample.create({
  data: {
    myField: new Uint8Array([1, 2, 3, 4]),
  },
});
```

Note that **before Prisma v6**, `Bytes` were represented by the [`Buffer`](https://nodejs.org/api/buffer.html) type:

```ts
import { PrismaClient, Prisma } from "@prisma/client";

const newTypes = await prisma.sample.create({
  data: {
    myField: Buffer.from([1, 2, 3, 4]),
  },
});
```

Learn more in the [upgrade guide to v6](/v6/orm/more/upgrades/to-v7).

Working with DateTime \[#working-with-datetime]

<CalloutContainer type="info">
  <CalloutDescription>
    There currently is a [bug](https://github.com/prisma/prisma/issues/9516) that doesn't allow you to pass in `DateTime` values as strings and produces a runtime error when you do. `DateTime` values need to be passed as [`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) objects (i.e. `new Date('2024-12-04')` instead of `'2024-12-04'`).
  </CalloutDescription>
</CalloutContainer>

When creating records that have fields of type [`DateTime`](/v6/orm/reference/prisma-schema-reference#datetime), Prisma Client accepts values as [`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) objects adhering to the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) standard.

Consider the following schema:

```prisma
model User {
  id        Int       @id @default(autoincrement())
  birthDate DateTime?
}
```

Here are some examples for creating new records:

Jan 01, 1998; 00 h 00 min and 000 ms \[#jan-01-1998-00-h-00-min-and-000-ms]

```ts
await prisma.user.create({
  data: {
    birthDate: new Date("1998"),
  },
});
```

Dec 01, 1998; 00 h 00 min and 000 ms \[#dec-01-1998-00-h-00-min-and-000-ms]

```ts
await prisma.user.create({
  data: {
    birthDate: new Date("1998-12"),
  },
});
```

Dec 24, 1998; 00 h 00 min and 000 ms \[#dec-24-1998-00-h-00-min-and-000-ms]

```ts
await prisma.user.create({
  data: {
    birthDate: new Date("1998-12-24"),
  },
});
```

Dec 24, 1998; 06 h 22 min 33s and 444 ms \[#dec-24-1998-06-h-22-min-33s-and-444-ms]

```ts
await prisma.user.create({
  data: {
    birthDate: new Date("1998-12-24T06:22:33.444Z"),
  },
});
```

Working with Json \[#working-with-json]

See: [Working with `Json` fields](/v6/orm/prisma-client/special-fields-and-types/working-with-json-fields)

Working with scalar lists / scalar arrays \[#working-with-scalar-lists--scalar-arrays]

See: [Working with scalar lists / arrays](/v6/orm/prisma-client/special-fields-and-types/working-with-scalar-lists-arrays)

Working with composite IDs and compound unique constraints \[#working-with-composite-ids-and-compound-unique-constraints]

See: [Working with composite IDs and compound unique constraints](/v6/orm/prisma-client/special-fields-and-types/working-with-composite-ids-and-constraints)
