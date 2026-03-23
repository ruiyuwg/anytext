Use the OSS SDK for Python V2 to list objects in a bucket by calling the `ListObjectsV2` operation through a built-in paginator that handles pagination automatically.

## Prerequisites

Before you begin, ensure that you have:

-   Granted the `oss:ListObjects` permission to the RAM user or role making the request. For setup instructions, see [Attach a custom policy to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip)
    
-   Set up access credentials from environment variables for authentication
    

## Usage notes

Sample code in this document uses the `cn-hangzhou` region and a public endpoint. To access OSS from other Alibaba Cloud services in the same region, use an internal endpoint instead. For endpoint mappings, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints#concept-zt4-cvy-5db).

## List all objects in a bucket

The following example creates a paginator and iterates through all objects in a bucket, printing each object's key, size, and last modified time.

```
import argparse
import alibabacloud_oss_v2 as oss

parser = argparse.ArgumentParser(description="list objects v2 sample")
parser.add_argument('--region', help='The region in which the bucket is located.', required=True)
parser.add_argument('--bucket', help='The name of the bucket.', required=True)
parser.add_argument('--endpoint', help='The domain names that other services can use to access OSS')

def main():
    args = parser.parse_args()

    # Load credentials from environment variables
    credentials_provider = oss.credentials.EnvironmentVariableCredentialsProvider()

    # Configure the client
    cfg = oss.config.load_default()
    cfg.credentials_provider = credentials_provider
    cfg.region = args.region
    if args.endpoint is not None:
        cfg.endpoint = args.endpoint

    client = oss.Client(cfg)

    # Create a paginator for ListObjectsV2
    paginator = client.list_objects_v2_paginator()

    # Iterate through all pages and print each object
    for page in paginator.iter_page(oss.ListObjectsV2Request(
            bucket=args.bucket
        )
    ):
        for o in page.contents:
            print(f'Object: {o.key}, {o.size}, {o.last_modified}')

if __name__ == "__main__":
    main()
```

Each object in `page.contents` exposes the following fields:

**Field**

**Description**

`key`

Object name (full path within the bucket)

`size`

Object size in bytes

`last_modified`

Timestamp of the last modification

## Parameters

All examples use `oss.ListObjectsV2Request` to submit the list request. The following parameters control filtering and pagination behavior:

**Parameter**

**Type**

**Description**

`bucket`

`str`

Name of the bucket. Required.

`prefix`

`str`

Return only objects whose keys start with this prefix. Set to a directory path (e.g., `"exampledir/"`) to list objects in a folder, or to any string to filter by name.

`delimiter`

`str`

Group keys that contain the delimiter after the prefix into `common_prefixes`. Set to `"/"` to simulate a directory structure.

`max_keys`

`int`

Maximum number of objects returned per page.

`start_after`

`str`

Return only objects whose keys are alphabetically after this value. Use for cursor-based pagination or range queries.

## Common scenarios

The following examples reuse the same client setup as the basic example. Only the `ListObjectsV2Request` parameters differ.

**List all objects in a folder**

Set `prefix` to the folder path to list only objects inside that directory.

```
for page in paginator.iter_page(oss.ListObjectsV2Request(
        bucket=args.bucket,
        prefix="exampledir/",  # List all objects under exampledir/
    )
):
    for o in page.contents:
        print(f'Object: {o.key}, Size: {o.size}, Last_modified: {o.last_modified}')
```

**List objects by name prefix**

Set `prefix` to any string to return only objects whose names start with that value.

```
for page in paginator.iter_page(oss.ListObjectsV2Request(
        bucket=args.bucket,
        prefix="my-object-",  # Return only objects whose names start with my-object-
    )
):
    for o in page.contents:
        print(f'Object: {o.key}, Size: {o.size}, Last_modified: {o.last_modified}')
```

**Limit results per page**

Set `max_keys` to control how many objects are returned per page. The paginator handles the full traversal regardless of this limit.

```
for page in paginator.iter_page(oss.ListObjectsV2Request(
        bucket=args.bucket,
        max_keys=10,  # Return up to 10 objects per page
    )
):
    for o in page.contents:
        print(f'Object: {o.key}, Size: {o.size}, Last_modified: {o.last_modified}')

    print('-' * 30)
```

**List objects starting after a given key**

Set `start_after` to return only objects whose keys are alphabetically after the specified value. This is useful for range-based queries or resuming a previous listing.

```
for page in paginator.iter_page(oss.ListObjectsV2Request(
        bucket=args.bucket,
        start_after="my-object",  # Return objects whose keys come after my-object alphabetically
    )
):
    for o in page.contents:
        print(f'Object: {o.key}, Size: {o.size}, Last_modified: {o.last_modified}')

    print('-' * 30)
```

### List immediate subdirectories

OSS uses a flat key namespace. Setting `delimiter="/"` causes the API to group all keys that share the same path segment into `page.common_prefixes`, which represents the immediate subdirectories at that level. To list subdirectories inside a specific folder, set `prefix` to that folder's path (e.g., `prefix="exampledir/"`).

```
for page in paginator.iter_page(oss.ListObjectsV2Request(
        bucket=args.bucket,
        prefix="",     # Start from the root
        delimiter="/", # Group keys by the first / to simulate subdirectories
    )
):
    for prefix in page.common_prefixes:
        print(f'Subdirectory: {prefix.prefix}')
```

## References

-   Complete sample code: [list\_objects\_v2.py](https://github.com/aliyun/alibabacloud-oss-python-sdk-v2/blob/master/sample/list_objects_v2.py)
