## Virtual Field Configuration

While [Join fields](#virtual-fields) are purpose-built virtual field types, **any field type can be made virtual** by adding the `virtual` property to its configuration. This allows you to create computed or relationship-derived fields that appear in API responses without being stored in the database.

Virtual fields are populated during API responses and can be used in the Admin Panel, but their values are not persisted to the database. This makes them ideal for displaying read-only computed data, relationship summaries, or formatted versions of existing field data.

### Configuring Virtual Fields

Any field type can be made virtual by adding the `virtual` property to the field configuration. The `virtual` property can be configured in two ways:

#### Boolean Virtual Fields

When `virtual` is set to `true`, the field becomes virtual but doesn't automatically populate any data. You'll typically use [Field-level Hooks](#field-level-hooks) to compute and populate the field's value:

```ts
{
  name: 'fullName',
  type: 'text',
  virtual: true,
  hooks: {
    afterRead: [
      ({ siblingData }) => {
        return `${siblingData.firstName} ${siblingData.lastName}`
      }
    ]
  }
}
```

#### String Path Virtual Fields

When `virtual` is set to a string path, it creates a "virtual relationship field" that automatically resolves to data from another field in the document. This is particularly useful for displaying relationship data:

```ts
{
  name: 'authorName',
  type: 'text',
  virtual: 'author.name' // Resolves to the 'name' field of the 'author' relationship
}
```

### Virtual Path Syntax

Virtual paths use dot notation to traverse relationships and nested data:

- `author.name` - Gets the `name` field from the `author` relationship
- `author.profile.bio` - Gets the `bio` field from a nested `profile` object within the `author` relationship
- `categories.title` - For hasMany relationships, returns an array of `title` values
- `request.additionalStakeholders.email` - Traverses multiple relationship levels

**Important Requirements for Virtual Path Fields:**

1. **Source Relationship Required**: The document must have a relationship field that corresponds to the first part of the virtual path. For example, if using `virtual: 'author.name'`, there must be an `author` relationship field defined in the same collection.

2. **Path Resolution**: Virtual paths resolve at query time by following the relationships and extracting the specified field values.

3. **Array Handling**: When the virtual path traverses a `hasMany` relationship, the result will be an array of values.

### Common Use Cases

#### Displaying Relationship Names

Instead of just showing relationship IDs, display the actual names or titles:

```ts
// Original relationship field
{
  name: 'author',
  type: 'relationship',
  relationTo: 'users'
},
// Virtual field to display author's name
{
  name: 'authorName',
  type: 'text',
  virtual: 'author.name'
}
```

#### Multiple Relationship Values

For `hasMany` relationships, virtual fields return arrays:

```ts
// Original relationship field
{
  name: 'categories',
  type: 'relationship',
  relationTo: 'categories',
  hasMany: true
},
// Virtual field to display category titles
{
  name: 'categoryTitles',
  type: 'text',
  virtual: 'categories.title' // Returns ['Tech', 'News', 'Updates']
}
```

#### Computed Values

Use hooks to create computed virtual fields:

```ts
{
  name: 'wordCount',
  type: 'number',
  virtual: true,
  hooks: {
    afterRead: [
      ({ siblingData }) => {
        const content = siblingData.content || ''
        return content.split(/\s+/).length
      }
    ]
  }
}
```

### Virtual Fields in API Responses

Virtual fields appear in API responses alongside regular fields:

```json
{
  "id": "123",
  "title": "My Post",
  "author": "64f1234567890abcdef12345",
  "authorName": "John Doe", // Virtual field
  "categories": ["64f9876543210fedcba67890", "64f5432109876543210abcdef"],
  "categoryTitles": ["Tech", "News"], // Virtual field
  "wordCount": 450 // Virtual field
}
```

**Important:** When using virtual path fields, ensure that the referenced
relationship field exists in your schema. Virtual paths like `author.name`
require an `author` relationship field to be defined, otherwise the virtual
field will not resolve properly.
