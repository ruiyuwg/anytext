# TypeORM (/docs/v6/orm/more/comparisons/prisma-and-typeorm)

This page compares Prisma ORM and [TypeORM](https://typeorm.io/). If you want to learn how to migrate from TypeORM to Prisma ORM, check out this [guide](/v6/guides/migrate-from-typeorm).

TypeORM vs Prisma ORM \[#typeorm-vs-prisma-orm]

While Prisma ORM and TypeORM solve similar problems, they work in very different ways.

**TypeORM** is a traditional ORM which maps *tables* to *model classes*. These model classes can be used to generate SQL migrations. Instances of the model classes then provide an interface for CRUD queries to an application at runtime.

**Prisma ORM** is a new kind of ORM that mitigates many problems of traditional ORMs, such as bloated model instances, mixing business with storage logic, lack of type-safety or unpredictable queries caused e.g. by lazy loading.

It uses the [Prisma schema](/v6/orm/prisma-schema/overview) to define application models in a declarative way. Prisma Migrate then allows to generate SQL migrations from the Prisma schema and executes them against the database. CRUD queries are provided by Prisma Client, a lightweight and entirely type-safe database client for Node.js and TypeScript.

API design & Level of abstraction \[#api-design--level-of-abstraction]

TypeORM and Prisma ORM operate on different levels of abstraction. TypeORM is closer to mirroring SQL in its API while Prisma Client provides a higher-level abstraction that was carefully designed with the common tasks of application developers in mind. Prisma ORM's API design heavily leans on the idea of [making the right thing easy](https://jason.energy/right-thing-easy-thing/).

While Prisma Client operates at a higher level of abstraction, it strives to expose the full power of the underlying database, allowing you to drop down to [raw SQL](/v6/orm/prisma-client/using-raw-sql/raw-queries) at any time if your use case requires it.

The following sections examine a few examples for how Prisma ORM's and TypeORM's APIs differ in certain scenarios and what the rationale of Prisma ORM's API design is in these cases.

Filtering \[#filtering]

TypeORM primarily leans on SQL operators for filtering lists or records, e.g. with the `find` method. Prisma ORM on the other hand, provides a more [generic set of operators](/v6/orm/prisma-client/queries/filtering-and-sorting#filter-conditions-and-operators) that are intuitive to use. It should also be noted that, as explained in the type-safety section [below](#filtering-1), TypeORM loses type-safety in filter queries in many scenarios.

A good example of how the filtering APIs of both TypeORM and Prisma ORM differ is by looking at `string` filters. While TypeORM primarily provides the filter based on the `ILike` operator which comes directly from SQL, Prisma ORM provides more specific operators that developers can use, e.g.: `contains`, `startsWith` and `endsWith`.

```ts
const posts = await prisma.post.findMany({
  where: {
    title: "Hello World",
  },
});
```

```ts
const posts = await postRepository.find({
  where: {
    title: ILike("Hello World"),
  },
});
```

```ts
const posts = await prisma.post.findMany({
  where: {
    title: { contains: "Hello World" },
  },
});
```

```ts
const posts = await postRepository.find({
  where: {
    title: ILike("%Hello World%"),
  },
});
```

```ts
const posts = await prisma.post.findMany({
  where: {
    title: { startsWith: "Hello World" },
  },
});
```

```ts
const posts = await postRepository.find({
  where: {
    title: ILike("Hello World%"),
  },
});
```

```ts
const posts = await prisma.post.findMany({
  where: {
    title: { endsWith: "Hello World" },
  },
});
```

```ts
const posts = await postRepository.find({
  where: {
    title: ILike("%Hello World"),
  },
});
```

Pagination \[#pagination]

TypeORM only offers limit-offset pagination while Prisma ORM conveniently provides dedicated APIs for both limit-offset but also cursor-based. You can learn more about both approaches in the [Pagination](/v6/orm/prisma-client/queries/pagination) section of the docs or in the API comparison [below](#pagination-1).

Relations \[#relations]

Working with records that are connected via foreign keys can become very complex in SQL. Prisma ORM's concept of [virtual relation field](/v6/orm/prisma-schema/data-model/relations#relation-fields) enables an intuitive and convenient way for application developers to work with related data. Some benefits of Prisma ORM's approach are:

- traversing relationships via the fluent API ([docs](/v6/orm/prisma-client/queries/relation-queries#fluent-api))
- nested writes that enable updating/creating connected records ([docs](/v6/orm/prisma-client/queries/relation-queries#nested-writes))
- applying filters on related records ([docs](/v6/orm/prisma-client/queries/relation-queries#relation-filters))
- easy and type-safe querying of nested data without worrying about JOINs ([docs](/v6/orm/prisma-client/queries/relation-queries#nested-reads))
- creating nested TypeScript typings based on models and their relations ([docs](/v6/orm/prisma-client/type-safety))
- intuitive modeling of relations in the data model via relation fields ([docs](/v6/orm/prisma-schema/data-model/relations))
- implicit handling of relation tables (also sometimes called JOIN, link, pivot or junction tables) ([docs](/v6/orm/prisma-schema/data-model/relations/many-to-many-relations#implicit-many-to-many-relations))

Data modeling and migrations \[#data-modeling-and-migrations]

Prisma models are defined in the [Prisma schema](/v6/orm/prisma-schema/overview) while TypeORM uses classes and experimental TypeScript decorators for model definitions. With the Active Record ORM pattern, TypeORM's approach often leads to complex model instances that are becoming hard to maintain as an application grows.

Prisma ORM on the other hand generates a lightweight database client that exposes a tailored and fully type-safe API to read and write data for the models that are defined in the Prisma schema, following the DataMapper ORM pattern rather than Active Record.

Prisma ORM's DSL for data modeling is lean, simple and intuitive to use. When modeling data in VS Code, you can further take advantage of Prisma ORM's powerful VS Code extension with features like autocompletion, quick fixes, jump to definition and other benefits that increase developer productivity.

```prisma
model User {
  id    Int     @id @default(autoincrement())
  name  String?
  email String  @unique
  posts Post[]
}

model Post {
  id        Int     @id @default(autoincrement())
  title     String
  content   String?
  published Boolean @default(false)
  authorId  Int?
  author    User?   @relation(fields: [authorId], references: [id])
}
```

```ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  name: string;

  @Column({ unique: true })
  email: string;

  @OneToMany((type) => Post, (post) => post.author)
  posts: Post[];
}

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ nullable: true })
  content: string;

  @Column({ default: false })
  published: boolean;

  @ManyToOne((type) => User, (user) => user.posts)
  author: User;
}
```

Migrations work in similar fashions in TypeORM and Prisma ORM. Both tools follow the approach of generating SQL files based on the provided model definitions and provide a CLI to execute them against the database. The SQL files can be modified before the migrations are executed so that any custom database operation can be performed with either migration system.

Type safety \[#type-safety]

TypeORM has been one of the first ORMs in the Node.js ecosystem to fully embrace TypeScript and has done a great job in enabling developers to get a certain level of type safety for their database queries.

However, there are numerous situations where the type safety guarantees of TypeORM fall short. The following sections describe the scenarios where Prisma ORM can provide stronger guarantees for the types of query results.

Selecting fields \[#selecting-fields]

This section explains the differences in type safety when selecting a subset of a model's fields in a query.

TypeORM \[#typeorm]

TypeORM provides a `select` option for its [`find`](https://typeorm.io/find-options) methods (e.g. `find`, `findByIds`, `findOne`, ...), for example:

<CodeBlockTabs defaultValue="find with select">
  <CodeBlockTabsList>
    <CodeBlockTabsTrigger value="find with select">
      find with select
    </CodeBlockTabsTrigger>

```
<CodeBlockTabsTrigger value="Model">
  Model
</CodeBlockTabsTrigger>
```

  </CodeBlockTabsList>

  <CodeBlockTab value="find with select">
    ```ts
    const postRepository = getManager().getRepository(Post);
    const publishedPosts: Post[] = await postRepository.find({
      where: { published: true },
      select: ["id", "title"],
    });
    ```
  </CodeBlockTab>

  <CodeBlockTab value="Model">
    ```ts
    @Entity()
    export class Post {
      @PrimaryGeneratedColumn()
      id: number;

````
  @Column()
  title: string;

  @Column({ nullable: true })
  content: string;

  @Column({ default: false })
  published: boolean;

  @ManyToOne((type) => User, (user) => user.posts)
  author: User;
}
```
````

  </CodeBlockTab>
</CodeBlockTabs>

While each object in the returned `publishedPosts` array only carries the selected `id` and `title` properties at runtime, the TypeScript compiler doesn't have any knowledge of this. It will allow you to access any other properties defined on the `Post` entity after the query, for example:

```ts
const post = publishedPosts[0];

// The TypeScript compiler has no issue with this
if (post.content.length > 0) {
  console.log(`This post has some content.`);
}
```

This code will result in an error at runtime:

```
TypeError: Cannot read property 'length' of undefined
```

The TypeScript compiler only sees the `Post` type of the returned objects, but it doesn't know about the fields that these objects *actually* carry at runtime. It therefore can't protect you from accessing fields that have not been retrieved in the database query, resulting in a runtime error.

Prisma ORM \[#prisma-orm]

Prisma Client can guarantee full type safety in the same situation and protects you from accessing fields that were not retrieved from the database.

Consider the same example with a Prisma Client query:

<CodeBlockTabs defaultValue="findMany with select">
  <CodeBlockTabsList>
    <CodeBlockTabsTrigger value="findMany with select">
      findMany with select
    </CodeBlockTabsTrigger>

```
<CodeBlockTabsTrigger value="Model">
  Model
</CodeBlockTabsTrigger>
```

  </CodeBlockTabsList>

  <CodeBlockTab value="findMany with select">
    ```ts
    const publishedPosts = await prisma.post.findMany({
      where: { published: true },
      select: {
        id: true,
        title: true,
      },
    });
    const post = publishedPosts[0];

````
// The TypeScript compiler will not allow this
if (post.content.length > 0) {
  console.log(`This post has some content.`);
}
```
````

  </CodeBlockTab>

  <CodeBlockTab value="Model">
    ```prisma
    model Post {
      id        Int     @id @default(autoincrement())
      title     String
      content   String?
      published Boolean @default(false)
      authorId  Int?
      author    User?   @relation(fields: [authorId], references: [id])
    }
    ```
  </CodeBlockTab>
</CodeBlockTabs>

In this case, the TypeScript compiler will throw the following error already at compile-time:

```
[ERROR] 14:03:39 ⨯ Unable to compile TypeScript:
src/index.ts:36:12 - error TS2339: Property 'content' does not exist on type '{ id: number; title: string; }'.

42   if (post.content.length > 0) {
```

This is because Prisma Client generates the return type for its queries *on the fly*. In this case, `publishedPosts` is typed as follows:

```ts
const publishedPosts: {
  id: number;
  title: string;
}[];
```

It therefore is impossible for you to accidentally access a property on a model that has not been retrieved in a query.

Loading relations \[#loading-relations]

This section explains the differences in type safety when loading relations of a model in a query. In traditional ORMs, this is sometimes called *eager loading*.

TypeORM \[#typeorm-1]

TypeORM allows to eagerly load relations from the database via the `relations` option that can be passed to its [`find`](https://typeorm.io/find-options) methods.

Consider this example:

<CodeBlockTabs defaultValue="find with relations">
  <CodeBlockTabsList>
    <CodeBlockTabsTrigger value="find with relations">
      find with relations
    </CodeBlockTabsTrigger>

```
<CodeBlockTabsTrigger value="Models">
  Models
</CodeBlockTabsTrigger>
```

  </CodeBlockTabsList>

  <CodeBlockTab value="find with relations">
    ```ts
    const postRepository = getManager().getRepository(Post);
    const publishedPosts: Post[] = await postRepository.find({
      where: { published: true },
      relations: ["author"],
    });
    ```
  </CodeBlockTab>

  <CodeBlockTab value="Models">
    ```ts
    @Entity()
    export class Post {
      @PrimaryGeneratedColumn()
      id: number;

````
  @Column()
  title: string;

  @Column({ nullable: true })
  content: string;

  @Column({ default: false })
  published: boolean;

  @ManyToOne((type) => User, (user) => user.posts)
  author: User;
}
```
````

  </CodeBlockTab>
</CodeBlockTabs>

```ts
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  name: string;

  @Column({ unique: true })
  email: string;

  @OneToMany((type) => Post, (post) => post.author)
  posts: Post[];
}
```

Unlike with `select`, TypeORM does *not* provide autocompletion, nor any type-safety for the strings that are passed to the `relations` option. This means, the TypeScript compiler is not able to catch any typos that are made when querying these relations. For example, it would allow for the following query:

```ts
const publishedPosts: Post[] = await postRepository.find({
  where: { published: true },
  // this query would lead to a runtime error because of a typo
  relations: ["authors"],
});
```

This subtle typo would now lead to the following runtime error:

```
UnhandledPromiseRejectionWarning: Error: Relation "authors" was not found; please check if it is correct and really exists in your entity.
```

Prisma ORM \[#prisma-orm-1]

Prisma ORM protects you from mistakes like this and thus eliminates a whole class of errors that can occur in your application at runtime. When using `include` to load a relation in a Prisma Client query, you can not only take advantage of autocompletion to specify the query, but the result of the query will also be properly typed:

<CodeBlockTabs defaultValue="find with relations">
  <CodeBlockTabsList>
    <CodeBlockTabsTrigger value="find with relations">
      find with relations
    </CodeBlockTabsTrigger>

```
<CodeBlockTabsTrigger value="Models">
  Models
</CodeBlockTabsTrigger>
```

  </CodeBlockTabsList>

  <CodeBlockTab value="find with relations">
    ```ts
    const publishedPosts = await prisma.post.findMany({
      where: { published: true },
      include: { author: true },
    });
    ```
  </CodeBlockTab>

  <CodeBlockTab value="Models">
    ```ts
    model User {
      id      Int      @id @default(autoincrement())
      name    String?
      email   String   @unique
      posts   Post[]
    }

````
model Post {
  id                Int                @id @default(autoincrement())
  title             String
  content           String?
  published         Boolean            @default(false)
  authorId          Int?
  author            User?              @relation(fields: [authorId], references: [id])
}
```
````

  </CodeBlockTab>
</CodeBlockTabs>

Again, the type of `publishedPosts` is generated on the fly and looks as follows:

```ts
const publishedPosts: (Post & {
  author: User;
})[];
```

For reference, this is what the `User` and `Post` types look like that Prisma Client generates for your Prisma models:

<CodeBlockTabs defaultValue="User">
  <CodeBlockTabsList>
    <CodeBlockTabsTrigger value="User">
      User
    </CodeBlockTabsTrigger>

```
<CodeBlockTabsTrigger value="Post">
  Post
</CodeBlockTabsTrigger>
```

  </CodeBlockTabsList>

  <CodeBlockTab value="User">
    ```ts
    // Generated by Prisma ORM
    export type User = {
      id: number;
      name: string | null;
      email: string;
    };
    ```
  </CodeBlockTab>

  <CodeBlockTab value="Post">
    ```ts
    // Generated by Prisma ORM
    export type Post = {
      id: number;
      title: string;
      content: string | null;
      published: boolean;
      authorId: number | null;
    };
    ```
  </CodeBlockTab>
</CodeBlockTabs>

Filtering \[#filtering-1]

This section explains the differences in type safety when filtering a list of records using `where`.

TypeORM \[#typeorm-2]

TypeORM allows to pass a `where` option to its [`find`](https://typeorm.io/find-options) methods to filter the list of returned records according to specific criteria. These criteria can be defined with respect to a model's properties.

Loosing type-safety using operators \[#loosing-type-safety-using-operators]

Consider this example:

<CodeBlockTabs defaultValue="find with select">
  <CodeBlockTabsList>
    <CodeBlockTabsTrigger value="find with select">
      find with select
    </CodeBlockTabsTrigger>

```
<CodeBlockTabsTrigger value="Model">
  Model
</CodeBlockTabsTrigger>
```

  </CodeBlockTabsList>

  <CodeBlockTab value="find with select">
    ```ts
    const postRepository = getManager().getRepository(Post);
    const publishedPosts: Post[] = await postRepository.find({
      where: {
        published: true,
        title: ILike("Hello World"),
        views: MoreThan(0),
      },
    });
    ```
  </CodeBlockTab>

  <CodeBlockTab value="Model">
    ```ts
    @Entity()
    export class Post {
      @PrimaryGeneratedColumn()
      id: number;

````
  @Column()
  title: string;

  @Column({ nullable: true })
  content: string;

  @Column({ nullable: true })
  views: number;

  @Column({ default: false })
  published: boolean;

  @ManyToOne((type) => User, (user) => user.posts)
  author: User;
}
```
````

  </CodeBlockTab>
</CodeBlockTabs>

This code runs properly and produces a valid query at runtime. However, the `where` option is not really type-safe in various different scenarios. When using a `FindOperator` like `ILike` or `MoreThan` that only work for specific types (`ILike` works for strings, `MoreThan` for numbers), you're losing the guarantee of providing the correct type for the model's field.

For example, you can provide a string to the `MoreThan` operator. The TypeScript compiler will not complain and your application will only fail at runtime:

```ts
const postRepository = getManager().getRepository(Post);
const publishedPosts: Post[] = await postRepository.find({
  where: {
    published: true,
    title: ILike("Hello World"),
    views: MoreThan("test"),
  },
});
```

The code above results in a runtime error that the TypeScript compiler doesn't catch for you:

```
error: error: invalid input syntax for type integer: "test"
```

Specifying non-existing properties \[#specifying-non-existing-properties]

Also note that the TypeScript compiler allows you to specify properties on the `where` option that don't exist on your models – again resulting in runtime errors:

```ts
const publishedPosts: Post[] = await postRepository.find({
  where: {
    published: true,
    title: ILike("Hello World"),
    viewCount: 1,
  },
});
```

In this case, your application again fails at runtime with the following error:

```
EntityColumnNotFound: No entity column "viewCount" was found.
```

Prisma ORM \[#prisma-orm-2]

Both filtering scenarios that are problematic with TypeORM in terms of type-safety are covered by Prisma ORM in a fully type-safe way.

Type-safe usage of operators \[#type-safe-usage-of-operators]

With Prisma ORM, the TypeScript compiler enforces the correct usage of an operator per field:

```ts
const publishedPosts = await prisma.post.findMany({
  where: {
    published: true,
    title: { contains: "Hello World" },
    views: { gt: 0 },
  },
});
```

It would not be allowed to specify the same problematic query shown above with Prisma Client:

```ts
const publishedPosts = await prisma.post.findMany({
  where: {
    published: true,
    title: { contains: "Hello World" },
    views: { gt: "test" }, // Caught by the TypeScript compiler
  },
});
```

The TypeScript compiler would catch this and throw the following error to protect you from a runtime failure of the app:

```
[ERROR] 16:13:50 ⨯ Unable to compile TypeScript:
src/index.ts:39:5 - error TS2322: Type '{ gt: string; }' is not assignable to type 'number | IntNullableFilter'.
  Type '{ gt: string; }' is not assignable to type 'IntNullableFilter'.
    Types of property 'gt' are incompatible.
      Type 'string' is not assignable to type 'number'.

42     views: { gt: "test" }
```

Type-safe definition of filters as model properties \[#type-safe-definition-of-filters-as-model-properties]

With TypeORM, you are able to specify a property on the `where` option that doesn't map to a model's field. In the above example, filtering for `viewCount` therefore led to a runtime error because the field actually is called `views`.

With Prisma ORM, the TypeScript compiler will not allow to reference any properties inside of `where` that don't exist on the model:

```ts
const publishedPosts = await prisma.post.findMany({
  where: {
    published: true,
    title: { contains: "Hello World" },
    viewCount: { gt: 0 }, // Caught by the TypeScript compiler
  },
});
```

Again, the TypeScript compiler complains with the following message to protect you from your own mistakes:

```ts
[ERROR] 16:16:16 ⨯ Unable to compile TypeScript:
src/index.ts:39:5 - error TS2322: Type '{ published: boolean; title: { contains: string; }; viewCount: { gt: number; }; }' is not assignable to type 'PostWhereInput'.
  Object literal may only specify known properties, and 'viewCount' does not exist in type 'PostWhereInput'.

42     viewCount: { gt: 0 }
```

Creating new records \[#creating-new-records]

This section explains the differences in type safety when creating new records.

TypeORM \[#typeorm-3]

With TypeORM, there are two main ways to create new records in the database: `insert` and `save`. Both methods allow developers to submit data that can lead to runtime errors when *required* fields are not provided.

Consider this example:

<CodeBlockTabs defaultValue="Create with save">
  <CodeBlockTabsList>
    <CodeBlockTabsTrigger value="Create with save">
      Create with save
    </CodeBlockTabsTrigger>

```
<CodeBlockTabsTrigger value="Create with insert">
  Create with insert
</CodeBlockTabsTrigger>

<CodeBlockTabsTrigger value="Model">
  Model
</CodeBlockTabsTrigger>
```

  </CodeBlockTabsList>

  <CodeBlockTab value="Create with save">
    ```ts
    const userRepository = getManager().getRepository(User);
    const newUser = new User();
    newUser.name = "Alice";
    userRepository.save(newUser);
    ```
  </CodeBlockTab>

  <CodeBlockTab value="Create with insert">
    ```ts
    const userRepository = getManager().getRepository(User);
    userRepository.insert({
      name: "Alice",
    });
    ```
  </CodeBlockTab>

  <CodeBlockTab value="Model">
    ```ts
    @Entity()
    export class User {
      @PrimaryGeneratedColumn()
      id: number;

````
  @Column({ nullable: true })
  name: string;

  @Column({ unique: true })
  email: string;

  @OneToMany((type) => Post, (post) => post.author)
  posts: Post[];
}
```
````

  </CodeBlockTab>
</CodeBlockTabs>

No matter if you're using `save` or `insert` for record creation with TypeORM, you will get the following runtime error if you forget to provide the value for a required field:

```
QueryFailedError: null value in column "email" of relation "user" violates not-null constraint
```

The `email` field is defined as required on the `User` entity (which is enforced by a `NOT NULL` constraint in the database).

Prisma ORM \[#prisma-orm-3]

Prisma ORM protects you from these kind of mistakes by enforcing that you submit values for *all* required fields of a model.

For example, the following attempt to create a new `User` where the required `email` field is missing would be caught by the TypeScript compiler:

<CodeBlockTabs defaultValue="Create with create">
  <CodeBlockTabsList>
    <CodeBlockTabsTrigger value="Create with create">
      Create with create
    </CodeBlockTabsTrigger>

```
<CodeBlockTabsTrigger value="Model">
  Model
</CodeBlockTabsTrigger>
```

  </CodeBlockTabsList>

  <CodeBlockTab value="Create with create">
    ```ts
    const newUser = await prisma.user.create({
      data: {
        name: "Alice",
      },
    });
    ```
  </CodeBlockTab>

  <CodeBlockTab value="Model">
    ```prisma
    model User {
      id    Int     @id @default(autoincrement())
      name  String?
      email String  @unique
    }
    ```
  </CodeBlockTab>
</CodeBlockTabs>

It would lead to the following compile-time error:

```
[ERROR] 10:39:07 ⨯ Unable to compile TypeScript:
src/index.ts:39:5 - error TS2741: Property 'email' is missing in type '{ name: string; }' but required in type 'UserCreateInput'.
```

API comparison \[#api-comparison]

Fetching single objects \[#fetching-single-objects]

**Prisma ORM**

```ts
const user = await prisma.user.findUnique({
  where: {
    id: 1,
  },
});
```

**TypeORM**

```ts
const userRepository = getRepository(User);
const user = await userRepository.findOne(id);
```

Fetching selected scalars of single objects \[#fetching-selected-scalars-of-single-objects]

**Prisma ORM**

```ts
const user = await prisma.user.findUnique({
  where: {
    id: 1,
  },
  select: {
    name: true,
  },
});
```

**TypeORM**

```ts
const userRepository = getRepository(User);
const user = await userRepository.findOne(id, {
  select: ["id", "email"],
});
```

Fetching relations \[#fetching-relations]

**Prisma ORM**

<CodeBlockTabs defaultValue="Using include">
  <CodeBlockTabsList>
    <CodeBlockTabsTrigger value="Using include">
      Using include
    </CodeBlockTabsTrigger>

```
<CodeBlockTabsTrigger value="Fluent API">
  Fluent API
</CodeBlockTabsTrigger>
```

  </CodeBlockTabsList>

  <CodeBlockTab value="Using include">
    ```ts
    const posts = await prisma.user.findUnique({
      where: {
        id: 2,
      },
      include: {
        post: true,
      },
    });
    ```
  </CodeBlockTab>

  <CodeBlockTab value="Fluent API">
    ```ts
    const posts = await prisma.user
      .findUnique({
        where: {
          id: 2,
        },
      })
      .post();
    ```
  </CodeBlockTab>
</CodeBlockTabs>

> **Note**: `select` return a `user` object that includes a `post` array, whereas the fluent API only returns a `post` array.

**TypeORM**

<CodeBlockTabs defaultValue="Using relations">
  <CodeBlockTabsList>
    <CodeBlockTabsTrigger value="Using relations">
      Using relations
    </CodeBlockTabsTrigger>

```
<CodeBlockTabsTrigger value="Using JOIN">
  Using JOIN
</CodeBlockTabsTrigger>

<CodeBlockTabsTrigger value="Using eager relations">
  Using eager relations
</CodeBlockTabsTrigger>
```

  </CodeBlockTabsList>

  <CodeBlockTab value="Using relations">
    ```ts
    const userRepository = getRepository(User);
    const user = await userRepository.findOne(id, {
      relations: ["posts"],
    });
    ```
  </CodeBlockTab>

  <CodeBlockTab value="Using JOIN">
    ```ts
    const userRepository = getRepository(User);
    const user = await userRepository.findOne(id, {
      join: {
        alias: "user",
        leftJoinAndSelect: {
          posts: "user.posts",
        },
      },
    });
    ```
  </CodeBlockTab>

  <CodeBlockTab value="Using eager relations">
    ```ts
    const userRepository = getRepository(User);
    const user = await userRepository.findOne(id);
    ```
  </CodeBlockTab>
</CodeBlockTabs>

Filtering for concrete values \[#filtering-for-concrete-values]

**Prisma ORM**

```ts
const posts = await prisma.post.findMany({
  where: {
    title: {
      contains: "Hello",
    },
  },
});
```

**TypeORM**

```ts
const userRepository = getRepository(User);
const users = await userRepository.find({
  where: {
    name: "Alice",
  },
});
```

Other filter criteria \[#other-filter-criteria]

**Prisma ORM**

Prisma ORM generates many [additional filters](/v6/orm/prisma-client/queries/filtering-and-sorting) that are commonly used in modern application development.

**TypeORM**

TypeORM provides [built-in operators](https://typeorm.io/find-options#advanced-options) that can be used to create more complex comparisons

Relation filters \[#relation-filters]

**Prisma ORM**

Prisma ORM lets you filter a list based on a criteria that applies not only to the models of the list being retrieved, but to a *relation* of that model.

For example, the following query returns users with one or more posts with "Hello" in the title:

```ts
const posts = await prisma.user.findMany({
  where: {
    Post: {
      some: {
        title: {
          contains: "Hello",
        },
      },
    },
  },
});
```

**TypeORM**

TypeORM doesn't offer a dedicated API for relation filters. You can get similar functionality by using the `QueryBuilder` or writing the queries by hand.

Pagination \[#pagination-1]

**Prisma ORM**

Cursor-style pagination:

```ts
const page = await prisma.post.findMany({
  before: {
    id: 242,
  },
  last: 20,
});
```

Offset pagination:

```ts
const cc = await prisma.post.findMany({
  skip: 200,
  first: 20,
});
```

**TypeORM**

```ts
const postRepository = getRepository(Post);
const posts = await postRepository.find({
  skip: 5,
  take: 10,
});
```

Creating objects \[#creating-objects]

**Prisma ORM**

```ts
const user = await prisma.user.create({
  data: {
    email: "alice@prisma.io",
  },
});
```

**TypeORM**

<CodeBlockTabs defaultValue="Using save">
  <CodeBlockTabsList>
    <CodeBlockTabsTrigger value="Using save">
      Using save
    </CodeBlockTabsTrigger>

```
<CodeBlockTabsTrigger value="Using create">
  Using create
</CodeBlockTabsTrigger>

<CodeBlockTabsTrigger value="Using insert">
  Using insert
</CodeBlockTabsTrigger>
```

  </CodeBlockTabsList>

  <CodeBlockTab value="Using save">
    ```ts
    const user = new User();
    user.name = "Alice";
    user.email = "alice@prisma.io";
    await user.save();
    ```
  </CodeBlockTab>

  <CodeBlockTab value="Using create">
    ```ts
    const userRepository = getRepository(User);
    const user = await userRepository.create({
      name: "Alice",
      email: "alice@prisma.io",
    });
    await user.save();
    ```
  </CodeBlockTab>

  <CodeBlockTab value="Using insert">
    ```ts
    const userRepository = getRepository(User);
    await userRepository.insert({
      name: "Alice",
      email: "alice@prisma.io",
    });
    ```
  </CodeBlockTab>
</CodeBlockTabs>

Updating objects \[#updating-objects]

**Prisma ORM**

```ts
const user = await prisma.user.update({
  data: {
    name: "Alicia",
  },
  where: {
    id: 2,
  },
});
```

**TypeORM**

```ts
const userRepository = getRepository(User);
const updatedUser = await userRepository.update(id, {
  name: "James",
  email: "james@prisma.io",
});
```

Deleting objects \[#deleting-objects]

**Prisma ORM**

```ts
const deletedUser = await prisma.user.delete({
  where: {
    id: 10,
  },
});
```

**TypeORM**

<CodeBlockTabs defaultValue="Using delete">
  <CodeBlockTabsList>
    <CodeBlockTabsTrigger value="Using delete">
      Using delete
    </CodeBlockTabsTrigger>

```
<CodeBlockTabsTrigger value="Using remove">
  Using remove
</CodeBlockTabsTrigger>
```

  </CodeBlockTabsList>

  <CodeBlockTab value="Using delete">
    ```ts
    const userRepository = getRepository(User);
    await userRepository.delete(id);
    ```
  </CodeBlockTab>

  <CodeBlockTab value="Using remove">
    ```ts
    const userRepository = getRepository(User);
    const deletedUser = await userRepository.remove(user);
    ```
  </CodeBlockTab>
</CodeBlockTabs>

Batch updates \[#batch-updates]

**Prisma ORM**

```ts
const user = await prisma.user.updateMany({
  data: {
    name: "Published author!",
  },
  where: {
    Post: {
      some: {
        published: true,
      },
    },
  },
});
```

**TypeORM**

You can use the [query builder to update entities in your database](https://typeorm.io/update-query-builder).

Batch deletes \[#batch-deletes]

**Prisma ORM**

```ts
const users = await prisma.user.deleteMany({
  where: {
    id: {
      in: [1, 2, 6, 6, 22, 21, 25],
    },
  },
});
```

**TypeORM**

<CodeBlockTabs defaultValue="Using delete">
  <CodeBlockTabsList>
    <CodeBlockTabsTrigger value="Using delete">
      Using delete
    </CodeBlockTabsTrigger>

```
<CodeBlockTabsTrigger value="Using remove">
  Using remove
</CodeBlockTabsTrigger>
```

  </CodeBlockTabsList>

  <CodeBlockTab value="Using delete">
    ```ts
    const userRepository = getRepository(User);
    await userRepository.delete([id1, id2, id3]);
    ```
  </CodeBlockTab>

  <CodeBlockTab value="Using remove">
    ```ts
    const userRepository = getRepository(User);
    const deleteUsers = await userRepository.remove([user1, user2, user3]);
    ```
  </CodeBlockTab>
</CodeBlockTabs>

Transactions \[#transactions]

**Prisma ORM**

```ts
const user = await prisma.user.create({
  data: {
    email: "bob.rufus@prisma.io",
    name: "Bob Rufus",
    Post: {
      create: [{ title: "Working at Prisma" }, { title: "All about databases" }],
    },
  },
});
```

**TypeORM**

```ts
await getConnection().$transaction(async (transactionalEntityManager) => {
  const user = getRepository(User).create({
    name: "Bob",
    email: "bob@prisma.io",
  });
  const post1 = getRepository(Post).create({
    title: "Join us for GraphQL Conf in 2019",
  });
  const post2 = getRepository(Post).create({
    title: "Subscribe to GraphQL Weekly for GraphQL news",
  });
  user.posts = [post1, post2];
  await transactionalEntityManager.save(post1);
  await transactionalEntityManager.save(post2);
  await transactionalEntityManager.save(user);
});
```
