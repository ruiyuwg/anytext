# Custom Roles

Learn about using custom roles with storage schema

In this guide, you will learn how to create and use custom roles with Storage to manage role-based access to objects and buckets. The same approach can be used to use custom roles with any other Supabase service.

Supabase Storage uses the same role-based access control system as any other Supabase service using RLS (Row Level Security).

## Create a custom role

Let's create a custom role `manager` to provide full read access to a specific bucket. For a more advanced setup, see the [RBAC Guide](/docs/guides/api/custom-claims-and-role-based-access-control-rbac#create-auth-hook-to-apply-user-role).

```sql
create role 'manager';

-- Important to grant the role to the authenticator and anon role
grant manager to authenticator;
grant anon to manager;
```

## Create a policy

Let's create a policy that gives full read permissions to all objects in the bucket `teams` for the `manager` role.

```sql
create policy "Manager can view all files in the bucket 'teams'"
on storage.objects
for select
to manager
using (
 bucket_id = 'teams'
);
```

## Test the policy

To impersonate the `manager` role, you will need a valid JWT token with the `manager` role.
You can quickly create one using the `jsonwebtoken` library in Node.js.

Signing a new JWT requires your `JWT_SECRET`. You must store this secret securely. Never expose it in frontend code, and do not check it into version control.

```js
const jwt = require('jsonwebtoken')

const JWT_SECRET = 'your-jwt-secret' // You can find this in your Supabase project settings under API. Store this securely.
const USER_ID = '' // the user id that we want to give the manager role

const token = jwt.sign({ role: 'manager', sub: USER_ID }, JWT_SECRET, {
  expiresIn: '1h',
})
```

Now you can use this token to access the Storage API.

```js
const { StorageClient } = require('@supabase/storage-js')

const PROJECT_URL = 'https://your-project-id.supabase.co/storage/v1'

const storage = new StorageClient(PROJECT_URL, {
  authorization: `Bearer ${token}`,
})

await storage.from('teams').list()
```

# The Storage Schema

Learn about the storage schema

Storage uses Postgres to store metadata regarding your buckets and objects. Users can use RLS (Row-Level Security) policies for access control. This data is stored in a dedicated schema within your project called `storage`.

When working with SQL, it's crucial to consider all records in Storage tables as read-only. All operations, including uploading, copying, moving, and deleting, should **exclusively go through the API**.

This is important because the storage schema only stores the metadata and the actual objects are stored in a provider like S3. Deleting the metadata doesn't remove the object in the underlying storage provider. This results in your object being inaccessible, but you'll still be billed for it.

Here is the schema that represents the Storage service:

You have the option to query this table directly to retrieve information about your files in Storage without the need to go through our API.

## Modifying the schema

We strongly recommend refraining from making any alterations to the `storage` schema and treating it as read-only. This approach is important because any modifications to the schema on your end could potentially clash with our future updates, leading to downtime.

However, we encourage you to add custom indexes as they can significantly improve the performance of the RLS policies you create for enforcing access control.

# Storage Helper Functions

Learn the storage schema

Supabase Storage provides SQL helper functions which you can use to write RLS policies.

### `storage.filename()`

Returns the name of a file. For example, if your file is stored in `public/subfolder/avatar.png` it would return: `'avatar.png'`

**Usage**

This example demonstrates how you would allow any user to download a file called `favicon.ico`:

```sql
create policy "Allow public downloads"
on storage.objects
for select
to public
using (
  storage.filename(name) = 'favicon.ico'
);
```

### `storage.foldername()`

Returns an array path, with all of the subfolders that a file belongs to. For example, if your file is stored in `public/subfolder/avatar.png` it would return: `[ 'public', 'subfolder' ]`

**Usage**

This example demonstrates how you would allow authenticated users to upload files to a folder called `private`:

```sql
create policy "Allow authenticated uploads"
on storage.objects
for insert
to authenticated
with check (
  (storage.foldername(name))[1] = 'private'
);
```

### `storage.extension()`

Returns the extension of a file. For example, if your file is stored in `public/subfolder/avatar.png` it would return: `'png'`

**Usage**

This example demonstrates how you would allow restrict uploads to only PNG files inside a bucket called `cats`:

```sql
create policy "Only allow PNG uploads"
on storage.objects
for insert
to authenticated
with check (
  bucket_id = 'cats' and storage.extension(name) = 'png'
);
```
