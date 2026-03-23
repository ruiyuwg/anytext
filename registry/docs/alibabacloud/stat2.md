Use `ossutil stat` to retrieve metadata and configuration details for a bucket or object.

## Usage notes

Only the bucket owner and Resource Access Management (RAM) users granted `oss:GetObject`, `oss:GetObjectAcl`, and `oss:GetBucketInfo` permissions can query object metadata with this command.

## Command syntax

```
ossutil stat oss://bucket[/object] [flags]
```

**Flags**

**Flag**

**Type**

**Description**

`--encoding-type`

string

Encoding method for the object name. Valid value: `url`.

`--human-readable`

flag

Display sizes in human-readable units (KB, MB, GB, TB, or PB).

`--request-payer`

string

Payer for the request. Set to `requester` when pay-by-requester is enabled on the bucket. Valid value: `requester`.

`--version-id`

string

Version ID of the object. Use this flag to query a specific version in a versioning-enabled bucket.

## Examples

### Query bucket information

```
ossutil stat oss://examplebucket
```

### Query object information

```
ossutil stat oss://examplebucket/exampleobject.txt
```

### Query a specific version of an object

Use `--version-id` to query metadata for a specific version in a versioning-enabled bucket.

```
ossutil stat oss://examplebucket/exampleobject.txt --version-id CAEQKxiBgMCplua..xgiIGFiZjE0NTZkNTU4NjQ5NDdiMDMyMzc4YzIxNDVm****
```
