# Creating Buckets

You can create a bucket using the Supabase Dashboard. Since storage is interoperable with your Postgres database, you can also use SQL or our client libraries.
Here we create a bucket called "avatars":

````
```js
import { createClient } from '@supabase/supabase-js'
const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_KEY!)

// ---cut---
// Use the JS library to create a bucket.

const { data, error } = await supabase.storage.createBucket('avatars', {
  public: true, // default: false
})
```

[Reference.](/docs/reference/javascript/storage-createbucket)



1.  Go to the [Storage](/dashboard/project/_/storage/buckets) page in the Dashboard.
2.  Click **New Bucket** and enter a name for the bucket.
3.  Click **Create Bucket**.



```sql
-- Use Postgres to create a bucket.

insert into storage.buckets
  (id, name, public)
values
  ('avatars', 'avatars', true);
```



```dart
void main() async {
  final supabase = SupabaseClient('supabaseUrl', 'supabaseKey');

  final storageResponse = await supabase
      .storage
      .createBucket('avatars');
}
```

[Reference.](https://pub.dev/documentation/storage_client/latest/storage_client/SupabaseStorageClient/createBucket.html)



```swift
try await supabase.storage.createBucket(
  "avatars",
  options: BucketOptions(public: true)
)
```

[Reference.](/docs/reference/swift/storage-createbucket)



```python
supabase.storage.create_bucket(
  'avatars',
  options={"public": True}
)
```

[Reference.](/docs/reference/python/storage-createbucket)
````

## Restricting uploads

When creating a bucket you can add additional configurations to restrict the type or size of files you want this bucket to contain.

For example, imagine you want to allow your users to upload only images to the `avatars` bucket and the size must not be greater than 1MB. You can achieve the following by providing `allowedMimeTypes` and `maxFileSize`:

```js
import { createClient } from '@supabase/supabase-js'
const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_KEY!)

// ---cut---
// Use the JS library to create a bucket.

const { data, error } = await supabase.storage.createBucket('avatars', {
  public: true,
  allowedMimeTypes: ['image/*'],
  fileSizeLimit: '1MB',
})
```

If an upload request doesn't meet the above restrictions it will be rejected. See [File Limits](/docs/guides/storage/uploads/file-limits) for more information.

# Storage Buckets

Buckets allow you to keep your files organized and determines the [Access Model](#access-model) for your assets. [Upload restrictions](/docs/guides/storage/buckets/creating-buckets#restricting-uploads) like max file size and allowed content types are also defined at the bucket level.

## Access model

There are 2 access models for buckets, **public** and **private** buckets.

### Private buckets

When a bucket is set to **Private** all operations are subject to access control via [RLS policies](/docs/guides/storage/security/access-control). This also applies when downloading assets. Buckets are private by default.

The only ways to download assets within a private bucket is to:

- Use the [download method](/docs/reference/javascript/storage-from-download) by providing an authorization header containing your user's JWT. The RLS policy you create on the `storage.objects` table will use this user to determine if they have access.
- Create a signed URL with the [`createSignedUrl` method](/docs/reference/javascript/storage-from-createsignedurl) that can be accessed for a limited time.

#### Example use cases:

- Uploading users' sensitive documents
- Securing private assets by using RLS to set up fine-grain access controls

### Public buckets

When a bucket is designated as 'Public,' it effectively bypasses access controls for both retrieving and serving files within the bucket. This means that anyone who possesses the asset URL can readily access the file.

Access control is still enforced for other types of operations including uploading, deleting, moving, and copying.

#### Example use cases:

- User profile pictures
- User public media
- Blog post content

Public buckets are more performant than private buckets since they are [cached differently](/docs/guides/storage/cdn/fundamentals#public-vs-private-buckets).
