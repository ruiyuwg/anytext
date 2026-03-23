`set-props` sets one or more properties on OSS objects: access control list (ACL), storage class, metadata, and tags.

## Usage notes

The underlying API operations vary depending on which properties you modify. Make sure you have the required permissions before running the command.

**Properties modified**

**API operations called**

ACL only

`PutObjectAcl` (requires `oss:PutObjectAcl`)

Tags only

`PutObjectTagging`; also calls `GetObjectTagging` first for incremental updates

Storage class or metadata

`CopyObject`, or multipart copy (`InitiateMultipartUpload` -> `UploadPartCopy` -> `CompleteMultipartUpload`) — the object is **rewritten**

ACL + tags

`PutObjectAcl` + `PutObjectTagging`

ACL + storage class

`CopyObject` or multipart copy (handles both in one operation)

## Command syntax

```
ossutil set-props oss://bucket[/prefix] [flags]
```

## Parameters

### Property flags

**Parameter**

**Type**

**Description**

`--acl`

string

The ACL of the object. Valid values: `private`, `public-read`, `public-read-write`, `default` (inherits from the bucket).

`--storage-class`

string

The storage class. Valid values: `Standard`, `IA` (Infrequent Access), `Archive`, `ColdArchive`, `DeepColdArchive`.

`--metadata`

strings

User metadata in `key=value` format. Example: `--metadata key1=value1,key2=value2`.

`--metadata-directive`

string

How to apply metadata changes. Valid values: `replace` (keep only the specified metadata), `update` (merge with existing), `purge` (clear all metadata), `delete` (remove specified keys, keep the rest).

`--tagging`

strings

Object tags in `key=value` format. Example: `--tagging tag1=value1,tag2=value2`.

`--tagging-directive`

string

How to apply tag changes. Valid values: `replace`, `update`, `purge`, `delete` (same semantics as `--metadata-directive`).

`--cache-control`

string

The `cache-control` HTTP header — controls web page caching behavior when the object is downloaded.

`--content-disposition`

string

The `content-disposition` HTTP header — specifies how the object is displayed or downloaded.

`--content-encoding`

string

The `content-encoding` HTTP header — specifies the encoding format of the object.

`--content-type`

string

The `content-type` of the object.

`--expires`

string

The absolute expiration time for cached content.

### Scope and filtering flags

**Parameter**

**Type**

**Description**

`-r, --recursive`

/

Apply the operation to all matching objects under the specified path. Without this flag, the command applies only to the exact object specified.

`-d, --dirs`

/

List files and immediate subdirectories in the current directory — does not recurse into subdirectories.

`--include`

stringArray

Rules to include matching paths or file names.

`--include-from`

stringArray

Read inclusion rules from a file.

`--exclude`

stringArray

Rules to exclude matching paths or file names.

`--exclude-from`

stringArray

Read exclusion rules from a file.

`--filter`

stringArray

Rules to filter paths or file names.

`--filter-from`

stringArray

Read filtering rules from a file.

`--start-after`

string

Return objects alphabetically after the specified value.

`--end-with`

string

Return objects alphabetically up to and including the specified value.

`--encoding-type`

string

The encoding type for object or file names. Valid value: `url`.

`--version-id`

string

The version ID of a specific object version.

### Time and size filters

**Parameter**

**Type**

**Description**

`--min-age`

Duration

Apply only to objects last modified before the specified interval. Default unit: seconds. Example: `--min-age 1h` targets objects modified 1 hour ago or earlier.

`--max-age`

Duration

Apply only to objects last modified within the specified interval. Example: `--max-age 1h` targets objects modified within the last hour.

`--min-mtime`

Time

Apply only to objects modified after the specified UTC time. Format: `2006-01-02T15:04:05`.

`--max-mtime`

Time

Apply only to objects modified before the specified UTC time. Format: `2006-01-02T15:04:05`.

`--min-size`

SizeSuffix

Minimum file size to include. Default unit: bytes. Supported suffixes: `B`, `K`, `M`, `G`, `T`, `P`. (1 K = 1024 B)

`--max-size`

SizeSuffix

Maximum file size to include. Same units as `--min-size`.

### Metadata filtering flags

**Parameter**

**Type**

**Description**

`--metadata-include`

stringArray

Rules to include object metadata.

`--metadata-exclude`

stringArray

Rules to exclude object metadata.

`--metadata-filter`

stringArray

Rules to filter object metadata.

`--metadata-filter-from`

stringArray

Read object metadata filtering rules from a file.

### List file flags

**Parameter**

**Type**

**Description**

`--files-from`

stringArray

Read source object paths from a file. Empty lines and commented lines are ignored.

`--files-from-raw`

stringArray

Read source object paths from a file (no line filtering).

`--list-objects`

/

Use the `ListObjects` API operation to list objects.

`--list-format`

string

The format of the list file. Valid values: `plain`, `inventory`.

`--list-manifest-from`

string

Path to the manifest file describing the list file format. Required when `--list-format` is `inventory`.

### Performance flags

**Parameter**

**Type**

**Description**

`-j, --job`

int

Number of concurrent tasks. Default: `3`. Takes effect only when combined with `-f`, `--update`, `--size-only`, or `--ignore-existing`.

`--parallel`

int

Number of concurrent tasks for a single file.

`--bigfile-threshold`

int

File size threshold for switching to multipart upload, download, or copy. Default: `104857600` bytes (100 MiB).

`--part-size`

SizeSuffix

Part size for multipart operations. ossutil auto-calculates a value based on file size. Valid range: 100 KiB–5 GiB.

`--page-size`

int

Maximum number of objects per page during batch processing. Default: `1000`. Valid range: 1–1000.

### Other flags

**Parameter**

**Type**

**Description**

`-f, --force`

/

Run without a confirmation prompt.

`--no-progress`

/

Suppress the progress bar.

`--request-payer`

string

Set to `requester` to enable pay-by-requester mode.

For all available global options, see [Command-line options](/help/en/oss/command-line-options).

## Examples

### Single object

Set the ACL of a single object to private:

```
ossutil set-props oss://examplebucket/exampleobject.txt --acl private
```

Set the storage class of a single object to Archive Storage:

```
ossutil set-props oss://examplebucket/exampleobject.txt --storage-class Archive
```

### Tags

Merge new tags with existing tags:

```
ossutil set-props oss://examplebucket/exampleobject.txt --tagging tag1=value1 --tagging-directive update
```

Replace all tags (removes any existing tags):

```
ossutil set-props oss://examplebucket/exampleobject.txt --tagging tag1=value1 --tagging-directive replace
```

Remove specific tags and keep the rest:

```
ossutil set-props oss://examplebucket/exampleobject.txt --tagging obsolete-tag=anyvalue --tagging-directive delete
```

Clear all tags:

```
ossutil set-props oss://examplebucket/exampleobject.txt --tagging-directive purge
```

### Metadata

Merge new metadata with existing metadata:

```
ossutil set-props oss://examplebucket/exampleobject.txt --metadata x-oss-meta-env=prod --metadata-directive update
```

Replace all metadata (keeps only the specified metadata):

```
ossutil set-props oss://examplebucket/exampleobject.txt --metadata x-oss-meta-env=prod --metadata-directive replace
```

Remove a specific metadata key and keep the rest:

```
ossutil set-props oss://examplebucket/exampleobject.txt --metadata x-oss-meta-obsolete=anyvalue --metadata-directive delete
```

Clear all metadata:

```
ossutil set-props oss://examplebucket/exampleobject.txt --metadata-directive purge
```

### Filtered batch operations

Update `content-type` for all `.txt` files under a prefix:

```
ossutil set-props oss://examplebucket/logs/ --content-type text/plain --include "*.txt" --metadata-directive update -r
```

Clear all metadata from objects that match a pattern:

```
ossutil set-props oss://examplebucket/archive/ --metadata-directive purge --include "*.log" -r
```

Delete a specific metadata key and keep the rest:

```
ossutil set-props oss://examplebucket/docs/ --metadata obsolete-key=anyvalue --metadata-directive delete -r
```

### From a list file

Set properties on a specific list of objects. Each line in the list file uses the format `oss://{bucket}/{key}`:

```
oss://examplebucket/key1
oss://examplebucket/key2
```

```
ossutil set-props list://list.txt
```

### From an inventory manifest

After running an inventory task, use the generated `csv.gz` and `manifest.json` files to set properties at scale:

```
ossutil set-props list://ca8007fc-4123-493e-9a01-dd1511fbac54.csv.gz --list-format inventory --list-manifest-from manifest.json
```
