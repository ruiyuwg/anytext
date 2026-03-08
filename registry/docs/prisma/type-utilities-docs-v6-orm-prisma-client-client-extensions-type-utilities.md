# Type utilities (/docs/v6/orm/prisma-client/client-extensions/type-utilities)

Several type utilities exist within Prisma Client that can assist in the creation of highly type-safe extensions.

Type Utilities \[#type-utilities]

[Prisma Client type utilities](/v6/orm/prisma-client/type-safety) are utilities available within your application and Prisma Client extensions and provide useful ways of constructing safe and extendable types for your extension.

The type utilities available are:

- `Exact<Input, Shape>`: Enforces strict type safety on `Input`. `Exact` makes sure that a generic type `Input` strictly complies with the type that you specify in `Shape`. It [narrows](https://www.typescriptlang.org/docs/handbook/2/narrowing.html) `Input` down to the most precise types.
- `Args<Type, Operation>`: Retrieves the input arguments for any given model and operation. This is particularly useful for extension authors who want to do the following:
  - Re-use existing types to extend or modify them.
  - Benefit from the same auto-completion experience as on existing operations.
- `Result<Type, Arguments, Operation>`: Takes the input arguments and provides the result for a given model and operation. You would usually use this in conjunction with `Args`. As with `Args`, `Result` helps you to re-use existing types to extend or modify them.
- `Payload<Type, Operation>`: Retrieves the entire structure of the result, as scalars and relations objects for a given model and operation. For example, you can use this to determine which keys are scalars or objects at a type level.

The following example creates a new operation, `exists`, based on `findFirst`. It has all of the arguments that `findFirst`.

```ts
const prisma = new PrismaClient().$extends({
  model: {
    $allModels: {
      // Define a new `exists` operation on all models
      // T is a generic type that corresponds to the current model
      async exists(
        // `this` refers to the current type, e.g. `prisma.user` at runtime
        this: T,

        // The `exists` function will use the `where` arguments from the current model, `T`, and the `findFirst` operation
        where: Prisma.Args<T, "findFirst">["where"],
      ): Promise {
        // Retrieve the current model at runtime
        const context = Prisma.getExtensionContext(this);

        // Prisma Client query that retrieves data based
        const result = await (context as any).findFirst({ where });
        return result !== null;
      },
    },
  },
});

async function main() {
  const user = await prisma.user.exists({ name: "Alice" });
  const post = await prisma.post.exists({
    OR: [{ title: { contains: "Prisma" } }, { content: { contains: "Prisma" } }],
  });
}
```

Add a custom property to a method \[#add-a-custom-property-to-a-method]

The following example illustrates how you can add custom arguments, to a method in an extension:

```ts highlight=16
type CacheStrategy = {
  swr: number;
  ttl: number;
};

const prisma = new PrismaClient().$extends({
  model: {
    $allModels: {
      findMany<T, A>(
        this: T,
        args: Prisma.Exact<
          A,
          // For the `findMany` method, use the arguments from model `T` and the `findMany` method
          // and intersect it with `CacheStrategy` as part of `findMany` arguments
          Prisma.Args<T, "findMany"> & CacheStrategy
        >,
      ): Prisma.Result<T, A, "findMany"> {
        // method implementation with the cache strategy
      },
    },
  },
});

async function main() {
  await prisma.post.findMany({
    cacheStrategy: {
      ttl: 360,
      swr: 60,
    },
  });
}
```

The example here is only conceptual. For the actual caching to work, you will have to implement the logic. If you're interested in a caching extension/ service, we recommend taking a look at [Prisma Accelerate](https://www.prisma.io/accelerate).

# Debugging (/docs/v6/orm/prisma-client/debugging-and-troubleshooting/debugging)

You can enable debugging output in Prisma Client and Prisma CLI via the [`DEBUG`](/v6/orm/reference/environment-variables-reference#debug) environment variable. It accepts two namespaces to print debugging output:

- `prisma:engine`: Prints relevant debug messages happening in a Prisma ORM [engine](https://github.com/prisma/prisma-engines/)
- `prisma:client`: Prints relevant debug messages happening in the Prisma Client runtime
- `prisma*`: Prints all debug messages from Prisma Client or CLI
- `*`: Prints all debug messages

<CalloutContainer type="info">
  <CalloutDescription>
    Prisma Client can be configured to log warnings, errors and information related to queries sent to the database. See [Configuring logging](/v6/orm/prisma-client/observability-and-logging/logging) for more information.
  </CalloutDescription>
</CalloutContainer>

Setting the DEBUG environment variable \[#setting-the-debug-environment-variable]

Here are examples for setting these debugging options in bash:

```bash
# enable only `prisma:engine`-level debugging output
export DEBUG="prisma:engine"

# enable only `prisma:client`-level debugging output
export DEBUG="prisma:client"

# enable both `prisma-client`- and `engine`-level debugging output
export DEBUG="prisma:client,prisma:engine"
```

To enable all `prisma` debugging options, set `DEBUG` to `prisma*`:

```bash
export DEBUG="prisma*"
```

On Windows, use `set` instead of `export`:

```bash
set DEBUG="prisma*"
```

To enable *all* debugging options, set `DEBUG` to `*`:

```bash
export DEBUG="*"
```

# Handling exceptions and errors (/docs/v6/orm/prisma-client/debugging-and-troubleshooting/handling-exceptions-and-errors)

In order to handle different types of errors you can use `instanceof` to check what the error is and handle it accordingly.

The following example tries to create a user with an already existing email record. This will throw an error because the `email` field has the `@unique` attribute applied to it.

```prisma title="schema.prisma" showLineNumbers
model User {
  id    Int     @id @default(autoincrement())
  email String  @unique
  name  String?
}
```

Use the `Prisma` namespace to access the error type. The [error code](/v6/orm/reference/error-reference#error-codes) can then be checked and a message can be printed.

```ts
import { PrismaClient, Prisma } from "@prisma/client";

const client = new PrismaClient();

try {
  await client.user.create({ data: { email: "alreadyexisting@mail.com" } });
} catch (e) {
  if (e instanceof Prisma.PrismaClientKnownRequestError) {
    // The .code property can be accessed in a type-safe manner
    if (e.code === "P2002") {
      console.log(
        "There is a unique constraint violation, a new user cannot be created with this email",
      );
    }
  }
  throw e;
}
```

See [Errors reference](/v6/orm/reference/error-reference) for a detailed breakdown of the different error types and their codes.

# Troubleshooting binary size and deployment issues (/docs/v6/orm/prisma-client/debugging-and-troubleshooting/troubleshooting-binary-size-issues)

If you encounter **large bundle sizes**, **slow builds**, or **deployment errors** related to Prisma’s Rust engine binaries, for example, in serverless or edge environments, the issue may be caused by the default native Rust query engine that ships with Prisma Client.

As of [v6.16.0](https://pris.ly/release/6.16.0), you can resolve these issues by removing the Rust-based engine binary from Prisma ORM by configuring your `generator` block as follows:

```prisma
generator client {
  provider   = "prisma-client"
  output     = "./generated"
  engineType = "client"
}
```

<CalloutContainer type="info">
  <CalloutDescription>
    Note that you need to use a [driver adapter](/v6/orm/overview/databases/database-drivers#driver-adapters) in this case.
  </CalloutDescription>
</CalloutContainer>

With this architecture:

- No Rust query engine binary is downloaded or shipped.
- The database connection pool is maintained by the native JS database driver you install (e.g., `@prisma/adapter-pg` for PostgreSQL).

This setup can help if you are:

- Deploying to serverless functions or edge runtimes
- Running in read-only filesystem environments
- Working within CI/CD pipelines with strict size limits

Visit [this page](/v6/orm/prisma-client/setup-and-configuration/no-rust-engine) for complete setup instructions and supported databases.

Curious why we moved away from the Rust engine? Take a look at why we transitioned from Rust binary engines to an all-TypeScript approach for a faster, lighter Prisma ORM in this [blog post](https://www.prisma.io/blog/prisma-orm-without-rust-latest-performance-benchmarks).
