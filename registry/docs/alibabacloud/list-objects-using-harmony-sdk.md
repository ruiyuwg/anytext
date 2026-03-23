Use the `listObjectsV2` method to list objects in a bucket and retrieve their metadata. This page covers five scenarios: basic listing, prefix filtering, delimiter-based virtual directory listing, paginated listing, and retrieving owner information.

## Prerequisites

Before you begin, ensure that you have:

-   An OSS bucket
    
-   The `oss:ListObjects` permission. For details, see [Attach a custom policy to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip)
    
-   The region where the bucket is located. For supported regions and endpoints, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints#concept-zt4-cvy-5db)
    

## Basic listing

The following example initializes a client with Security Token Service (STS) temporary credentials and lists all objects in a bucket.

```
import Client, { RequestError } from '@aliyun/oss';

const client = new Client({
  accessKeyId: 'yourAccessKeyId',       // AccessKey ID from STS
  accessKeySecret: 'yourAccessKeySecret', // AccessKey secret from STS
  securityToken: 'yourSecurityToken',   // Security token from STS
  region: 'oss-cn-hangzhou',            // Region where the bucket is located
});

const listObjectsV2 = async () => {
  try {
    const res = await client.listObjectsV2({
      bucket: 'yourBucketName',
    });
    console.log(JSON.stringify(res));
  } catch (err) {
    if (err instanceof RequestError) {
      console.log('code: ', err.code);
      console.log('message: ', err.message);
      console.log('requestId: ', err.requestId);
      console.log('status: ', err.status);
      console.log('ec: ', err.ec);
    } else {
      console.log('unknown error: ', err);
    }
  }
};

listObjectsV2();
```

## Common scenarios

All examples below use the same `listObjectsV2` method with RAM user credentials. Replace the placeholder values with your own credentials and bucket name before running any example.

### **List objects with a specific prefix**

Pass a `prefix` value to return only objects whose names start with that string. This is useful for filtering objects stored under a logical path, such as `logs/2026/`.

```
import Client, { RequestError } from '@aliyun/oss';

const client = new Client({
  accessKeyId: 'yourAccessKeyId',
  accessKeySecret: 'yourAccessKeySecret',
  region: 'oss-cn-hangzhou',
});

const listObjectsV2WithPrefix = async () => {
  try {
    const res = await client.listObjectsV2({
      bucket: 'yourBucketName',
      prefix: 'objectNamePrefix',
    });
    console.log(JSON.stringify(res));
  } catch (err) {
    if (err instanceof RequestError) {
      console.log('code: ', err.code);
      console.log('message: ', err.message);
      console.log('requestId: ', err.requestId);
      console.log('status: ', err.status);
      console.log('ec: ', err.ec);
    } else {
      console.log('unknown error: ', err);
    }
  }
};

listObjectsV2WithPrefix();
```

### **List objects by specifying a delimiter**

OSS stores objects in a flat structure with no real folders. You can simulate a folder hierarchy by naming objects with path-like keys and using a delimiter. When you set `delimiter` to `/`, OSS groups all keys that share a common prefix up to the first `/` into `commonPrefixes` in the response instead of listing them individually. This lets you browse top-level "folders" without retrieving every nested object.

For example, if a bucket contains `images/photo1.jpg`, `images/photo2.jpg`, and `readme.txt`, a request with `delimiter: '/'` returns:

-   `readme.txt` in the object list
    
-   `images/` in `commonPrefixes`
    

```
import Client, { RequestError } from '@aliyun/oss';

const client = new Client({
  accessKeyId: 'yourAccessKeyId',
  accessKeySecret: 'yourAccessKeySecret',
  region: 'oss-cn-hangzhou',
});

const listObjectsV2WithDelimiter = async () => {
  try {
    const res = await client.listObjectsV2({
      bucket: 'yourBucketName',
      delimiter: '/',
    });
    console.log(JSON.stringify(res));
  } catch (err) {
    if (err instanceof RequestError) {
      console.log('code: ', err.code);
      console.log('message: ', err.message);
      console.log('requestId: ', err.requestId);
      console.log('status: ', err.status);
      console.log('ec: ', err.ec);
    } else {
      console.log('unknown error: ', err);
    }
  }
};

listObjectsV2WithDelimiter();
```

### **List all objects by page**

When a bucket contains many objects, `listObjectsV2` returns results in pages. Each response includes `isTruncated` (whether more results exist) and `nextContinuationToken` (the token to pass in the next request). Loop until `isTruncated` is `false` to retrieve all objects.

```
import Client, { RequestError } from '@aliyun/oss';

const client = new Client({
  accessKeyId: 'yourAccessKeyId',
  accessKeySecret: 'yourAccessKeySecret',
  region: 'oss-cn-hangzhou',
});

const listObjectsV2WithContinuationToken = async () => {
  try {
    let continuationToken: string | undefined;
    let isTruncated = true;

    while (isTruncated) {
      const res = await client.listObjectsV2({
        bucket: 'yourBucketName',
        continuationToken,
      });

      console.log(JSON.stringify(res));

      isTruncated = res.data.isTruncated;
      continuationToken = res.data.nextContinuationToken;
    }
  } catch (err) {
    if (err instanceof RequestError) {
      console.log('code: ', err.code);
      console.log('message: ', err.message);
      console.log('requestId: ', err.requestId);
      console.log('status: ', err.status);
      console.log('ec: ', err.ec);
    } else {
      console.log('unknown error: ', err);
    }
  }
};

listObjectsV2WithContinuationToken();
```

### **List objects and get owner information**

By default, `listObjectsV2` does not return owner information. Set `fetchOwner: true` to include it in the response.

```
import Client, { RequestError } from '@aliyun/oss';

const client = new Client({
  accessKeyId: 'yourAccessKeyId',
  accessKeySecret: 'yourAccessKeySecret',
  region: 'oss-cn-hangzhou',
});

const listObjectsV2WithFetchOwner = async () => {
  try {
    const res = await client.listObjectsV2({
      bucket: 'yourBucketName',
      fetchOwner: true,
    });
    console.log(JSON.stringify(res));
  } catch (err) {
    if (err instanceof RequestError) {
      console.log('code: ', err.code);
      console.log('message: ', err.message);
      console.log('requestId: ', err.requestId);
      console.log('status: ', err.status);
      console.log('ec: ', err.ec);
    } else {
      console.log('unknown error: ', err);
    }
  }
};

listObjectsV2WithFetchOwner();
```

## Parameters

The following table lists all parameters supported by `listObjectsV2`.

**Parameter**

**Type**

**Description**

`bucket`

string

Name of the bucket.

`prefix`

string

Filters results to objects whose keys start with this value.

`delimiter`

string

Groups keys that share a common prefix up to the delimiter into `commonPrefixes`. Use `/` to simulate folder navigation.

`continuationToken`

string

Token returned by the previous response to fetch the next page. Initially `undefined`.

`fetchOwner`

boolean

Set to `true` to include owner information in the response. Defaults to `false`.

## Error handling

All examples use the `RequestError` class to distinguish known API errors from unexpected errors. When a `RequestError` is caught, log the following fields to diagnose the issue.

**Field**

**Description**

`err.code`

The error code

`err.message`

The error message

`err.requestId`

The request ID, useful for support tickets

`err.status`

The HTTP status code

`err.ec`

The extended error code
