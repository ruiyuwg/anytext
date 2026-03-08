# TypeScript performance (/docs/orm/more/troubleshooting/typescript-performance)

When working with large database schemas, a simple change in type definition strategy can deliver massive performance improvements:

| Approach             | Types                     | Instantiations            | Memory                    | Compile Time              |
| -------------------- | ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| **Direct Reference** | 269,597                   | 2,772,929                 | 395MB                     | 1.86s                     |
| **typeof technique** | 222 (**99.9% reduction**) | 152 (**99.9% reduction**) | 147MB (**62% reduction**) | 0.41s (**78% reduction**) |

Problem \[#problem]

In enterprise applications with extensive database schemas, Prisma's generated types can become enormous. A schema with 50+ tables and deep relationships can lead to:

- Compilation times exceeding several minutes
- High memory usage during type checking
- IDE responsiveness degrading significantly
- CI/CD pipelines timing out on type checks

Solution \[#solution]

Use TypeScript's `typeof` operator instead of direct type references when defining function parameters that accept PrismaClient instances.

Problematic approach for large schemas \[#problematic-approach-for-large-schemas]

```typescript
import { PrismaClient } from "../prisma/generated/client";

const saveFn = async (prismaClient: PrismaClient) => {
  // Function implementation
};

const client = new PrismaClient();
await saveFn(client);
```

Optimized approach with typeof \[#optimized-approach-with-typeof]

```typescript
import { PrismaClient } from "../prisma/generated/client";

const saveFn = async (prismaClient: typeof client) => {
  // Function implementation
};

const client = new PrismaClient();
await saveFn(client);
```

Why typeof is more efficient \[#why-typeof-is-more-efficient]

The `typeof` operator creates a more efficient type resolution path:

1. **Type Query Reference**: `typeof client` performs a type query that obtains the widened type of the identifier expression, avoiding the need to re-expand the complex `PrismaClient` type definition
2. **Reduced Type Instantiation**: The compiler avoids expanding the entire Prisma type hierarchy for each type check (resulting in a 99.9% reduction in instantiations)
3. **Memory Efficiency**: Referencing an existing instance's inferred type requires significantly less memory than expanding complex conditional types and generics

Conclusion \[#conclusion]

When working with large Prisma schemas, the choice between direct type references and type queries becomes crucial for maintaining development velocity. The 78% compilation time reduction demonstrated here scales exponentially with schema complexity.

Benchmark \[#benchmark]

The complete benchmark code is available at:
<https://github.com/ToyB0x/ts-bench/pull/211>

# Add methods to Prisma Client (/docs/orm/prisma-client/client-extensions/client)

You can use the `client` [Prisma Client extensions](/orm/prisma-client/client-extensions) component to add top-level methods to Prisma Client.

Extend Prisma Client \[#extend-prisma-client]

Use the `$extends` [client-level method](/orm/reference/prisma-client-reference#client-methods) to create an *extended client*. An extended client is a variant of the standard Prisma Client that is wrapped by one or more extensions. Use the `client` extension component to add top-level methods to Prisma Client.

To add a top-level method to Prisma Client, use the following structure:

```ts
const prisma = new PrismaClient().$extends({
  client?: { ... }
})
```

Example \[#example]

The following example uses the `client` component to add two methods to Prisma Client:

- `$log` outputs a message.
- `$totalQueries` returns the number of queries executed by the current client instance.

```ts
let total = 0;
const prisma = new PrismaClient().$extends({
  client: {
    $log: (s: string) => console.log(s),
    async $totalQueries() {
      return total;
    },
  },
  query: {
    $allModels: {
      async $allOperations({ query, args }) {
        total += 1;
        return query(args);
      },
    },
  },
});

async function main() {
  prisma.$log("Hello world");
  const totalQueries = await prisma.$totalQueries();
  console.log(totalQueries);
}
```
