Lists all objects in a bucket.

## Usage notes

-   By default, an Alibaba Cloud account has permission to list all objects in a bucket. To list objects as a RAM user or Security Token Service (STS) user, the caller must have the `oss:ListObjects` permission. For more information, see [Attach a custom policy to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip).
    
-   User metadata is not returned in the response to a GetBucketV2 (ListObjectsV2) request.
    

## Syntax

```
ossutil api list-objects-v2 --bucket <value>
[--continuation-token <value>]
[--delimiter <value>]
[--encoding-type <value>]
[--fetch-owner]
[--max-keys <value>]
[--prefix <value>]
[--start-after <value>]
[flags]
```

> This command maps to the ListObjectsV2 (GetBucketV2) API operation. For the full list of API-level parameters, see [ListObjectsV2 (GetBucketV2)](/help/en/oss/developer-reference/listobjects-v2). For supported global flags, see [Global command-line options](/help/en/oss/command-line-options#65785a4884d85).

## Parameters

**Parameter**

**Type**

**Required**

**Description**

`--bucket`

string

Yes

The name of the bucket.

`--continuation-token`

string

No

The token used to resume a previous listing. Set this to the `NextContinuationToken` value from a prior response to retrieve the next page of results. Use with `--max-keys` to paginate through large result sets.

`--delimiter`

string

No

The character used to group object names. Objects whose names share the same string between the specified prefix and the first occurrence of the delimiter are grouped under a common prefix.

`--encoding-type`

string

No

The encoding applied to object names in the response. Valid value: `url`.

`--fetch-owner`

—

No

Includes object owner information in the response. Owner information is omitted by default.

`--max-keys`

int

No

The maximum number of objects to return per request. Use with `--continuation-token` to paginate through large result sets.

`--prefix`

string

No

Filters results to objects whose names begin with this prefix.

`--start-after`

string

No

Returns only objects whose names are alphabetically after this value.

## Examples

List all objects in `examplebucket`:

```
ossutil api list-objects-v2 --bucket examplebucket
```

List all objects and return the results as JSON:

```
ossutil api list-objects-v2 --bucket examplebucket --output-format json
```

List all objects and return the results as YAML:

```
ossutil api list-objects-v2 --bucket examplebucket --output-format yaml
```

List objects with the `dir` prefix:

```
ossutil api list-objects-v2 --bucket examplebucket --prefix dir
```

List the first 100 objects with the `dir` prefix:

```
ossutil api list-objects-v2 --bucket examplebucket --prefix dir --max-keys 100
```

List objects in the top-level directory (non-recursive):

```
ossutil api list-objects-v2 --bucket examplebucket --delimiter /
```

List objects whose names come after `test.txt` alphabetically:

```
ossutil api list-objects-v2 --bucket examplebucket --start-after test.txt
```

List all objects and URL-encode their names in the response:

```
ossutil api list-objects-v2 --bucket examplebucket --encoding-type url
```

List all objects and include owner information in the response:

```
ossutil api list-objects-v2 --bucket examplebucket --fetch-owner
```

Resume a listing from a continuation token:

```
ossutil api list-objects-v2 --bucket examplebucket --continuation-token CgJiYw123
```
