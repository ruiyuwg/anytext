# S3 Authentication

Learn about authenticating with Supabase Storage S3.

You have two options to authenticate with Supabase Storage S3:

- Using the generated S3 access keys from your [project settings](/dashboard/project/_/storage/settings) (Intended exclusively for server-side use)
- Using a Session Token, which will allow you to authenticate with a user JWT token and provide limited access via Row Level Security (RLS).

## S3 access keys

S3 access keys provide full access to all S3 operations across all buckets and bypass RLS policies. These are meant to be used only on the server.

To authenticate with S3, generate a pair of credentials (Access Key ID and Secret Access Key), copy the endpoint and region from the [project settings page](/dashboard/project/_/storage/settings).

This is all the information you need to connect to Supabase Storage using any S3-compatible service.

For optimal performance when uploading large files you should always use the direct storage hostname. This provides several performance enhancements that will greatly improve performance when uploading large files.

Instead of `https://project-id.supabase.co` use `https://project-id.storage.supabase.co`

````
```js
import { S3Client } from '@aws-sdk/client-s3';

const client = new S3Client({
  forcePathStyle: true,
  region: 'project_region',
  endpoint: 'https://project_ref.storage.supabase.co/storage/v1/s3',
  credentials: {
    accessKeyId: 'your_access_key_id',
    secretAccessKey: 'your_secret_access_key',
  }
})
```



```bash
# ~/.aws/credentials

[supabase]
aws_access_key_id = your_access_key_id
aws_secret_access_key = your_secret_access_key
endpoint_url = https://project_ref.storage.supabase.co/storage/v1/s3
region = project_region
```
````

## Session token

You can authenticate to Supabase S3 with a user JWT token to provide limited access via RLS to all S3 operations. This is useful when you want initialize the S3 client on the server scoped to a specific user, or use the S3 client directly from the client side.

All S3 operations performed with the Session Token are scoped to the authenticated user. RLS policies on the Storage Schema are respected.

To authenticate with S3 using a Session Token, use the following credentials:

- access\_key\_id: `project_ref`
- secret\_access\_key: `anonKey`
- session\_token: `valid jwt token`

For example, using the `aws-sdk` library:

```javascript
import { S3Client } from '@aws-sdk/client-s3'

const {
  data: { session },
} = await supabase.auth.getSession()

const client = new S3Client({
  forcePathStyle: true,
  region: 'project_region',
  endpoint: 'https://project_ref.storage.supabase.co/storage/v1/s3',
  credentials: {
    accessKeyId: 'project_ref',
    secretAccessKey: 'anonKey',
    sessionToken: session.access_token,
  },
})
```
