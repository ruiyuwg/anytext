Lists all versions of objects in a bucket, including delete markers.

## Prerequisites

Before you begin, ensure that you have:

-   The `oss:ListObjectVersions` permission. For setup instructions, see [Attach a custom policy to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip)
    

## Syntax

```
ossutil api list-object-versions --bucket <value> [flags]
```

## Parameters

**Parameter**

**Type**

**Description**

`--bucket`

string

The name of the bucket.

`--prefix`

string

Filters results to objects whose names begin with the specified prefix.

`--delimiter`

string

Groups objects by name. All keys that contain the same string between the prefix and the first occurrence of the delimiter are grouped under a single `CommonPrefixes` entry. Each `CommonPrefixes` entry counts as one result against the `--max-keys` limit. These keys are not returned elsewhere in the response.

`--max-keys`

int

The maximum number of objects to return per request. When results are truncated, the response includes `IsTruncated: true` and the `NextKeyMarker` and `NextVersionIdMarker` fields. Pass these values as `--key-marker` and `--version-id-marker` in a follow-up request to retrieve the next page.

`--key-marker`

string

Returns only objects whose names are alphabetically after the specified value. Use together with `--version-id-marker` to resume a truncated listing from a specific version.

`--version-id-marker`

string

Returns versions of the object specified by `--key-marker` that come after the specified version ID. Versions are returned from newest to oldest. Can be specified together with `--key-marker`.

`--encoding-type`

string

The encoding type for object names in the response. Set to `url` to URL-encode object names that contain characters not valid in XML 1.0 (such as control characters).

> For additional flags, see [Command-line options](/help/en/oss/command-line-options).

## Output

The response contains the following top-level fields:

**Field**

**Type**

**Description**

`IsTruncated`

boolean

Indicates whether the result is truncated. When `true`, the listing is incomplete and a follow-up request is required.

`NextKeyMarker`

string

Present when `IsTruncated` is `true`. Pass this value as `--key-marker` in the next request to continue listing.

`NextVersionIdMarker`

string

Present when `IsTruncated` is `true`. Pass this value as `--version-id-marker` in the next request to continue listing.

`Versions`

array

A list of object versions. Each entry includes `Key`, `VersionId`, `IsLatest`, `LastModified`, `ETag`, and `Size`.

`DeleteMarkers`

array

A list of delete markers. Each entry includes `Key`, `VersionId`, `IsLatest`, and `LastModified`.

## Examples

All examples use `examplebucket` as the bucket name.

### List all object versions

```
ossutil api list-object-versions --bucket examplebucket
```

The response includes a `Versions` array and a `DeleteMarkers` array. For example:

```
{
  "IsTruncated": false,
  "Versions": [
    {
      "Key": "test.txt",
      "VersionId": "CAEQARiBgIDXiaaB0BYiIDJhMTVlYjE4YTM5NTQyM2FiNDgzZTI1YzQxMzE1",
      "IsLatest": true,
      "LastModified": "2024-06-01T08:00:00.000Z",
      "ETag": "\"D41D8CD98F00B204E9800998ECF8427E\"",
      "Size": 1024
    }
  ],
  "DeleteMarkers": []
}
```

When `IsTruncated` is `true`, the response also includes `NextKeyMarker` and `NextVersionIdMarker`. Pass these values as `--key-marker` and `--version-id-marker` in the next request to get the next page.

### Format output

Return results as JSON:

```
ossutil api list-object-versions --bucket examplebucket --output-format json
```

Return results as YAML:

```
ossutil api list-object-versions --bucket examplebucket --output-format yaml
```

### Filter by prefix

List versions of all objects with the `dir` prefix:

```
ossutil api list-object-versions --bucket examplebucket --prefix dir
```

Limit to the first 100 versions among objects with the `dir` prefix:

```
ossutil api list-object-versions --bucket examplebucket --prefix dir --max-keys 100
```

### Group by directory

Use `--delimiter /` to list objects in the top-level directory only. Objects in subdirectories are grouped under `CommonPrefixes` entries:

```
ossutil api list-object-versions --bucket examplebucket --delimiter /
```

### Resume a listing

List versions of objects whose names come alphabetically after `test.txt`:

```
ossutil api list-object-versions --bucket examplebucket --key-marker test.txt
```

Resume from a specific version of `test.txt` (for example, after a truncated response):

```
ossutil api list-object-versions --bucket examplebucket --key-marker test.txt --version-id-marker 123
```

### URL-encode object names

Use `--encoding-type url` when object names may contain characters that are not valid in XML 1.0:

```
ossutil api list-object-versions --bucket examplebucket --encoding-type url
```
