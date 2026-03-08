# Older versions (/docs/v6/orm/more/upgrades/older-versions)

This page provides upgrade guidance for older Prisma ORM versions. For upgrading to the current version, see [Upgrade to v7](/v6/orm/more/upgrades/to-v7).

Upgrading to v6 \[#upgrading-to-v6]

Prisma ORM v6 introduced breaking changes related to Node.js versions, TypeScript versions, and schema changes for PostgreSQL.

Key breaking changes \[#key-breaking-changes]

- **Minimum Node.js**: 18.18.0, 20.9.0, or 22.11.0
- **Minimum TypeScript**: 5.1.0
- **PostgreSQL implicit m-n relations**: Changed from unique index to primary key
- **Full-text search on PostgreSQL**: Now requires `fullTextSearchPostgres` preview feature
- **`Buffer` replaced with `Uint8Array`**: For `Bytes` fields
- **`NotFoundError` removed**: Use `PrismaClientKnownRequestError` with code `P2025` instead

Upgrade command \[#upgrade-command]

<CodeBlockTabs defaultValue="npm" groupId="package-manager" persist>
  <CodeBlockTabsList>
    <CodeBlockTabsTrigger value="npm">
      npm
    </CodeBlockTabsTrigger>

```
<CodeBlockTabsTrigger value="pnpm">
  pnpm
</CodeBlockTabsTrigger>

<CodeBlockTabsTrigger value="yarn">
  yarn
</CodeBlockTabsTrigger>

<CodeBlockTabsTrigger value="bun">
  bun
</CodeBlockTabsTrigger>
```

  </CodeBlockTabsList>

  <CodeBlockTab value="npm">
    ```bash
    npm install prisma@6 @prisma/client@6
    ```
  </CodeBlockTab>

  <CodeBlockTab value="pnpm">
    ```bash
    pnpm add prisma@6 @prisma/client@6
    ```
  </CodeBlockTab>

  <CodeBlockTab value="yarn">
    ```bash
    yarn add prisma@6 @prisma/client@6
    ```
  </CodeBlockTab>

  <CodeBlockTab value="bun">
    ```bash
    bun add prisma@6 @prisma/client@6
    ```
  </CodeBlockTab>
</CodeBlockTabs>

After upgrading, run `prisma migrate dev --name upgrade-to-v6` to apply schema changes for implicit m-n relations.

***

Upgrading to v5 \[#upgrading-to-v5]

Prisma ORM v5 introduced the JSON Protocol for improved performance and removed deprecated APIs.

Key breaking changes \[#key-breaking-changes-1]

- **Minimum Node.js**: 16.13.0
- **Minimum TypeScript**: 4.7
- **Minimum PostgreSQL**: 9.6
- **`rejectOnNotFound` removed**: Use `findFirstOrThrow()` or `findUniqueOrThrow()` instead
- **Array shortcuts removed**: `OR`, `in`, `notIn`, and `path` now require array values
- **CockroachDB**: Requires `cockroachdb` provider (not `postgresql`)

Example: Replacing rejectOnNotFound \[#example-replacing-rejectonnotfound]

```js
// Before (v4 and earlier)
prisma.user.findFirst({
  where: { name: "Alice" },
  rejectOnNotFound: true,
});

// After (v5+)
prisma.user.findFirstOrThrow({
  where: { name: "Alice" },
});
```

Example: Array values required \[#example-array-values-required]

```js
// Before (v4 and earlier)
prisma.user.findMany({
  where: { OR: { email: "foo@example.com" } },
});

// After (v5+)
prisma.user.findMany({
  where: { OR: [{ email: "foo@example.com" }] },
});
```

Upgrade command \[#upgrade-command-1]

<CodeBlockTabs defaultValue="npm" groupId="package-manager" persist>
  <CodeBlockTabsList>
    <CodeBlockTabsTrigger value="npm">
      npm
    </CodeBlockTabsTrigger>

```
<CodeBlockTabsTrigger value="pnpm">
  pnpm
</CodeBlockTabsTrigger>

<CodeBlockTabsTrigger value="yarn">
  yarn
</CodeBlockTabsTrigger>

<CodeBlockTabsTrigger value="bun">
  bun
</CodeBlockTabsTrigger>
```

  </CodeBlockTabsList>

  <CodeBlockTab value="npm">
    ```bash
    npm install prisma@5 @prisma/client@5
    ```
  </CodeBlockTab>

  <CodeBlockTab value="pnpm">
    ```bash
    pnpm add prisma@5 @prisma/client@5
    ```
  </CodeBlockTab>

  <CodeBlockTab value="yarn">
    ```bash
    yarn add prisma@5 @prisma/client@5
    ```
  </CodeBlockTab>

  <CodeBlockTab value="bun">
    ```bash
    bun add prisma@5 @prisma/client@5
    ```
  </CodeBlockTab>
</CodeBlockTabs>

***

Upgrading to v4 \[#upgrading-to-v4]

Prisma ORM v4 made extended indexes generally available and introduced changes to raw queries and JSON null handling.

Key breaking changes \[#key-breaking-changes-2]

- **Minimum Node.js**: 14.17.x
- **Extended indexes GA**: `extendedIndexes` preview feature removed
- **Explicit `@unique` required**: For 1:1 relations
- **Raw query type mapping**: `DateTime` returns `Date`, `Numeric` returns `Decimal`
- **`DbNull`, `JsonNull`, `AnyNull`**: Now objects instead of strings

Example: JSON null values \[#example-json-null-values]

```js
// Before (v3 and earlier)
prisma.log.findMany({
  where: { data: { meta: { equals: null } } },
});

// After (v4+)
import { Prisma } from "@prisma/client";
prisma.log.findMany({
  where: { data: { meta: { equals: Prisma.AnyNull } } },
});
```

Upgrade command \[#upgrade-command-2]

<CodeBlockTabs defaultValue="npm" groupId="package-manager" persist>
  <CodeBlockTabsList>
    <CodeBlockTabsTrigger value="npm">
      npm
    </CodeBlockTabsTrigger>

```
<CodeBlockTabsTrigger value="pnpm">
  pnpm
</CodeBlockTabsTrigger>

<CodeBlockTabsTrigger value="yarn">
  yarn
</CodeBlockTabsTrigger>

<CodeBlockTabsTrigger value="bun">
  bun
</CodeBlockTabsTrigger>
```

  </CodeBlockTabsList>

  <CodeBlockTab value="npm">
    ```bash
    npm install prisma@4 @prisma/client@4
    ```
  </CodeBlockTab>

  <CodeBlockTab value="pnpm">
    ```bash
    pnpm add prisma@4 @prisma/client@4
    ```
  </CodeBlockTab>

  <CodeBlockTab value="yarn">
    ```bash
    yarn add prisma@4 @prisma/client@4
    ```
  </CodeBlockTab>

  <CodeBlockTab value="bun">
    ```bash
    bun add prisma@4 @prisma/client@4
    ```
  </CodeBlockTab>
</CodeBlockTabs>

After upgrading, run `npx prisma db pull` to retrieve existing index configurations before creating new migrations.

***

Upgrading to v3 \[#upgrading-to-v3]

Prisma ORM v3 introduced referential actions and named constraints, with significant changes to cascade delete behavior.

Key breaking changes \[#key-breaking-changes-3]

- **Referential actions**: Runtime cascade prevention removed; now handled at database level
- **Named constraints**: New naming convention for constraints and indexes
- **`$queryRaw` changes**: Only supports template literals (use `$queryRawUnsafe` for strings)
- **JSON null types**: Introduced `Prisma.DbNull`, `Prisma.JsonNull`, `Prisma.AnyNull`

Referential actions \[#referential-actions]

In v2.x, Prisma Client prevented cascading deletes at runtime. In v3+, this is handled by the database. Review your schema's `onDelete` settings:

```prisma
model Post {
  id       Int  @id
  author   User @relation(fields: [authorId], references: [id], onDelete: Cascade)
  authorId Int
}
```

Named constraints \[#named-constraints]

After upgrading, run `npx prisma db pull` to sync constraint names, or run `npx prisma migrate dev` to update to Prisma's default naming convention.

Upgrade command \[#upgrade-command-3]

<CodeBlockTabs defaultValue="npm" groupId="package-manager" persist>
  <CodeBlockTabsList>
    <CodeBlockTabsTrigger value="npm">
      npm
    </CodeBlockTabsTrigger>

```
<CodeBlockTabsTrigger value="pnpm">
  pnpm
</CodeBlockTabsTrigger>

<CodeBlockTabsTrigger value="yarn">
  yarn
</CodeBlockTabsTrigger>

<CodeBlockTabsTrigger value="bun">
  bun
</CodeBlockTabsTrigger>
```

  </CodeBlockTabsList>

  <CodeBlockTab value="npm">
    ```bash
    npm install prisma@3 @prisma/client@3
    ```
  </CodeBlockTab>

  <CodeBlockTab value="pnpm">
    ```bash
    pnpm add prisma@3 @prisma/client@3
    ```
  </CodeBlockTab>

  <CodeBlockTab value="yarn">
    ```bash
    yarn add prisma@3 @prisma/client@3
    ```
  </CodeBlockTab>

  <CodeBlockTab value="bun">
    ```bash
    bun add prisma@3 @prisma/client@3
    ```
  </CodeBlockTab>
</CodeBlockTabs>

***

Codemods \[#codemods]

The `@prisma/codemods` package helps automate code changes when upgrading:

<CodeBlockTabs defaultValue="npm" groupId="package-manager" persist>
  <CodeBlockTabsList>
    <CodeBlockTabsTrigger value="npm">
      npm
    </CodeBlockTabsTrigger>

```
<CodeBlockTabsTrigger value="pnpm">
  pnpm
</CodeBlockTabsTrigger>

<CodeBlockTabsTrigger value="yarn">
  yarn
</CodeBlockTabsTrigger>

<CodeBlockTabsTrigger value="bun">
  bun
</CodeBlockTabsTrigger>
```

  </CodeBlockTabsList>

  <CodeBlockTab value="npm">
    ```bash
    npx @prisma/codemods <transform> <path>
    ```
  </CodeBlockTab>

  <CodeBlockTab value="pnpm">
    ```bash
    pnpm dlx @prisma/codemods <transform> <path>
    ```
  </CodeBlockTab>

  <CodeBlockTab value="yarn">
    ```bash
    yarn dlx @prisma/codemods <transform> <path>
    ```
  </CodeBlockTab>

  <CodeBlockTab value="bun">
    ```bash
    bunx --bun @prisma/codemods <transform> <path>
    ```
  </CodeBlockTab>
</CodeBlockTabs>

Available transforms:

- `namespace` - Update `@prisma/client` namespace changes
- `findUnique` - Convert `findOne` to `findUnique`
- `to$` - Convert deprecated methods to `$` prefixed versions
- `update-2.12` - Apply all transforms for 2.12 upgrade

See the [codemods repository](https://github.com/prisma/codemods) for more details.

# Preview features (/docs/v6/orm/more/upgrades/preview-features)

Preview features are new features that can only be used by opting in using a corresponding feature flag.

Enabling preview features \[#enabling-preview-features]

Some releases include Preview features that are not considered production-ready, and must be enabled before you can use them. For more information about enabling Preview features, refer to the following documentation:

- [Enable Prisma Client and schema preview features](/orm/reference/preview-features/client-preview-features)
- [Enable Prisma CLI preview features](/orm/reference/preview-features/cli-preview-features)

<CalloutContainer type="warning">
  <CalloutDescription>
    We do not recommend using Preview features in production.
  </CalloutDescription>
</CalloutContainer>
