## Access

The plugin requires access control functions in order to restrict permissions to certain collections or fields. You must provide these functions in the `access` option.

| Option                    | Type          | Description                                                                                           |
| ------------------------- | ------------- | ----------------------------------------------------------------------------------------------------- |
| `adminOnlyFieldAccess`    | `FieldAccess` | Limited to only admin users, specifically for Field level access control.                             |
| `adminOrPublishedStatus`  | `Access`      | The document is published or user is admin.                                                           |
| `isAdmin`                 | `Access`      | Checks if the user is an admin.                                                                       |
| `isAuthenticated`         | `Access`      | Checks if the user is authenticated (any role).                                                       |
| `isCustomer`              | `FieldAccess` | (Optional) Checks if the user is a customer (authenticated but not admin). Used for address creation. |
| `isDocumentOwner`         | `Access`      | Checks if the user owns the document being accessed.                                                  |
| `publicAccess`            | `Access`      | (Optional) Entirely public access. Defaults to returning true.                                        |
| `customerOnlyFieldAccess` | `FieldAccess` | **Deprecated** - Use `isCustomer` instead. Will be removed in v4.                                     |

The plugin provides default implementations for `publicAccess` only:

```ts
access: {
  publicAccess: () => true,
}
```

### adminOnlyFieldAccess

Field level access control to check if the user has `admin` permissions.

Example:

```ts
adminOnlyFieldAccess: ({ req: { user } }) =>
  Boolean(user?.roles?.includes('admin'))
```

### adminOrPublishedStatus

Access control to check if the user has `admin` permissions or if the document is published.

Example:

```ts
adminOrPublishedStatus: ({ req: { user } }) => {
  if (user && Boolean(user?.roles?.includes('admin'))) {
    return true
  }
  return {
    _status: {
      equals: 'published',
    },
  }
}
```

### isCustomer

Checks if the user is a customer (authenticated but not an admin). This is used internally to auto-assign the customer ID when creating addresses - customers can only create addresses for themselves, while admins can create addresses for any customer.

Example:

```ts
isCustomer: ({ req: { user } }) =>
  Boolean(user && !user?.roles?.includes('admin'))
```

### isAdmin

Access control to check if the user has `admin` permissions.

Example:

```ts
isAdmin: ({ req: { user } }) => Boolean(user?.roles?.includes('admin'))
```

### isAuthenticated

Access control to check if the user is authenticated (any role).

Example:

```ts
isAuthenticated: ({ req: { user } }) => Boolean(user)
```

### isDocumentOwner

Access control to check if the user owns the document being accessed via the `customer` field. Returns a Where query to filter documents by the customer field.

Example:

```ts
isDocumentOwner: ({ req: { user } }) => {
  if (user && Boolean(user?.roles?.includes('admin'))) {
    return true
  }

  if (user?.id) {
    return {
      customer: {
        equals: user.id,
      },
    }
  }

  return false
}
```

### publicAccess

Access control to allow public access. By default the following is provided:

```ts
publicAccess: () => true
```
