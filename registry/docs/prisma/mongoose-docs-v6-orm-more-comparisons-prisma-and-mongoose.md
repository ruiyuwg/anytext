# Mongoose (/docs/v6/orm/more/comparisons/prisma-and-mongoose)

This page compares the Prisma ORM and [Mongoose](https://mongoosejs.com/docs/guide.html) APIs. If you want to learn how to migrate from Mongoose to Prisma, check out this [guide](/v6/guides/migrate-from-mongoose).

Fetching single objects \[#fetching-single-objects]

**Prisma ORM**

```ts
const user = await prisma.user.findUnique({
  where: {
    id: 1,
  },
});
```

**Mongoose**

```ts
const result = await User.findById(1);
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

**Mongoose**

```ts
const user = await User.findById(1).select(["name"]);
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
    const userWithPost = await prisma.user.findUnique({
      where: {
        id: 2,
      },
      include: {
        post: true,
      },
    })
    ```
  </CodeBlockTab>

  <CodeBlockTab value="Fluent API">
    ```ts
    const userWithPost = await prisma.user
      .findUnique({
        where: {
          id: 2,
        },
      })
      .post()
    ```
  </CodeBlockTab>
</CodeBlockTabs>

**Mongoose**

```ts
const userWithPost = await User.findById(2).populate("post");
```

Filtering for concrete values \[#filtering-for-concrete-values]

**Prisma ORM**

```ts
const posts = await prisma.post.findMany({
  where: {
    title: {
      contains: "Hello World",
    },
  },
});
```

**Mongoose**

```ts
const posts = await Post.find({
  title: "Hello World",
});
```

Other filter criteria \[#other-filter-criteria]

**Prisma ORM**

Prisma ORM generates many [additional filters](/v6/orm/prisma-client/queries/filtering-and-sorting) that are commonly used in modern application development.

**Mongoose**

Mongoose exposes the [MongoDB query selectors](https://www.mongodb.com/docs/manual/reference/mql/query-predicates/logical/) as filter criteria.

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

**Mongoose**

Mongoose doesn't offer a dedicated API for relation filters. You can get similar functionality by adding an additional step to filter the results returned by the query.

Pagination \[#pagination]

**Prisma ORM**

Cursor-style pagination:

```ts
const page = prisma.post.findMany({
  before: {
    id: 242,
  },
  last: 20,
});
```

Offset pagination:

```ts
const cc = prisma.post.findMany({
  skip: 200,
  first: 20,
});
```

**Mongoose**

```ts
const posts = await Post.find({
  skip: 200,
  limit: 20,
});
```

Creating objects \[#creating-objects]

**Prisma ORM**

```ts
const user = await prisma.user.create({
  data: {
    name: "Alice",
    email: "alice@prisma.io",
  },
});
```

**Mongoose**

<CodeBlockTabs defaultValue="Using create">
  <CodeBlockTabsList>
    <CodeBlockTabsTrigger value="Using create">
      Using create
    </CodeBlockTabsTrigger>

```
<CodeBlockTabsTrigger value="Using save">
  Using save
</CodeBlockTabsTrigger>
```

  </CodeBlockTabsList>

  <CodeBlockTab value="Using create">
    ```ts
    const user = await User.create({
      name: 'Alice',
      email: 'alice@prisma.io',
    })
    ```
  </CodeBlockTab>

  <CodeBlockTab value="Using save">
    ```ts
    const user = new User({
      name: 'Alice',
      email: 'alice@prisma.io',
    })
    await user.save()
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

**Mongoose**

<CodeBlockTabs defaultValue="Using findOneAndUpdate">
  <CodeBlockTabsList>
    <CodeBlockTabsTrigger value="Using findOneAndUpdate">
      Using findOneAndUpdate
    </CodeBlockTabsTrigger>

```
<CodeBlockTabsTrigger value="Using save">
  Using save
</CodeBlockTabsTrigger>
```

  </CodeBlockTabsList>

  <CodeBlockTab value="Using findOneAndUpdate">
    ```ts
    const updatedUser = await User.findOneAndUpdate(
      { _id: 2 },
      {
        $set: {
          name: 'Alicia',
        },
      }
    )
    ```
  </CodeBlockTab>

  <CodeBlockTab value="Using save">
    ```ts
    user.name = 'Alicia'
    await user.save()
    ```
  </CodeBlockTab>
</CodeBlockTabs>

Deleting objects \[#deleting-objects]

**Prisma ORM**

```ts
const user = prisma.user.delete({
  where: {
    id: 10,
  },
});
```

**Mongoose**

```ts
await User.deleteOne({ _id: 10 });
```

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

**Mongoose**

```ts
await User.deleteMany({ id: { $in: [1, 2, 6, 6, 22, 21, 25] } });
```
