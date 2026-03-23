Use the `ls` command to list your OSS buckets, objects, and incomplete multipart upload parts. Common use cases include auditing storage usage, locating large files for cleanup, and scripting object inventory workflows.

## Prerequisites

Before you begin, ensure that you have the following Resource Access Management (RAM) permissions:

**Operation**

**Required permission**

List buckets

`oss:ListBuckets`

List objects

`oss:ListObjects`

List object versions

`oss:ListObjectVersions`

List parts

`oss:ListParts` and `oss:ListMultipartUploads`

For instructions on granting these permissions, see [Attach a custom policy to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip).

## Syntax

```
ossutil ls [oss://bucket[/prefix]] [options]
```

## Options

**Option**

**Type**

**Description**

`--all-versions`

/

Lists all versions of objects.

`-d, --dirs`

/

Lists only the top-level files and subdirectories in the specified directory, not recursively.

`--encoding-type`

string

Specifies the encoding type for object names or filenames. Valid value: `url`.

`--end-with`

string

Lists only objects whose names are lexicographically less than or equal to the specified value.

`--exclude`

stringArray

Excludes files and paths that match the specified rules.

`--exclude-from`

stringArray

Reads exclude rules from the specified rule file.

`--files-from`

stringArray

Reads the list of source filenames from a file. Empty lines and lines starting with a hash (`#`) are ignored.

`--files-from-raw`

stringArray

Reads the list of source filenames from a file.

`--filter`

stringArray

Specifies one or more filter rules for file paths or names.

`--filter-from`

stringArray

Reads filter rules from the specified rule file.

`-f, --force`

/

Forces the operation and suppresses confirmation prompts.

`--include`

stringArray

Includes only files and paths that match the specified rules.

`--include-from`

stringArray

Reads include rules from the specified rule file.

`--limited-num`

int

Specifies the maximum number of results to return.

`--list-objects`

/

Lists objects by using the `ListObjects` (GetBucket) API operation.

`--max-age`

Duration

Lists only files last modified within the specified duration. The default unit is seconds; use the `h` suffix for hours. For example, `--max-age 1h` lists files modified within the last hour.

`--max-mtime`

Time

Lists only files modified before the specified time. Use UTC format: `2006-01-02T15:04:05Z`.

`--max-size`

SizeSuffix

Lists only objects no larger than the specified size. The default unit is bytes. Valid suffixes: B, K, M, G, T, P. Note: 1 K = 1 kibibyte (1,024 bytes).

`--metadata-exclude`

stringArray

Specifies exclude rules for object metadata.

`--metadata-filter`

stringArray

Specifies filter rules for object metadata.

`--metadata-filter-from`

stringArray

Reads object metadata filter rules from the specified rule file.

`--metadata-include`

stringArray

Specifies include rules for object metadata.

`--min-age`

Duration

Lists only files last modified more than the specified duration ago. The default unit is seconds; use the `h` suffix for hours. For example, `--min-age 1h` lists files not modified in the last hour.

`--min-mtime`

Time

Lists only files modified after the specified time. Use UTC format: `2006-01-02T15:04:05Z`. For example, `--min-mtime "2006-01-02T15:04:05Z"` lists files modified after 15:04:05 on January 2, 2006.

`--min-size`

SizeSuffix

Lists only objects no smaller than the specified size. The default unit is bytes. Valid suffixes: B, K, M, G, T, P. Note: 1 K (KiB) = 1,024 bytes.

`--multipart`

/

Lists incomplete multipart upload tasks.

`--page-size`

int

Specifies the maximum number of objects to return per page in a batch operation. Default: 1,000. Valid range: 1–1,000.

`-r, --recursive`

/

Recursively lists all matching objects. Without this option, the command lists only top-level items in the specified path.

`--request-payer`

string

Specifies the payer for the request. If the bucket uses Requester Pays mode, set this to `requester`.

`--resource-group-id`

string

Specifies the ID of the resource group.

`--short-format`

/

Displays output in short format. Long format is used by default.

`--start-after`

string

Lists only objects whose names are lexicographically greater than the specified value.

For a full list of global options, see [Command-line options](/help/en/oss/command-line-options).

## Examples

### List all buckets

```
ossutil ls
```

### List all objects in a bucket

```
ossutil ls oss://examplebucket
```

### List objects with a specific prefix

```
ossutil ls oss://examplebucket/dir
```

### List only top-level items in a directory

To see just the immediate files and subdirectories under `dir/` without recursing into subdirectories:

```
ossutil ls oss://examplebucket/dir -d
```

### Limit the number of results

Return the first 100 objects under the `dir/` prefix:

```
ossutil ls oss://examplebucket/dir --limited-num 100
```

### Filter objects by name pattern

List all `.txt` files under `dir1/` and `dir2/` (including their subdirectories):

```
ossutil ls oss://examplebucket/ --include "/dir1/**.txt" --include "/dir2/**.txt"
```

### Filter objects by modification time

List all files in `dir1/` and `dir2/` modified within the last three days:

```
ossutil ls oss://examplebucket --include "/dir1/**" --include "/dir2/**" --max-age 3d
```

### Output results in JSON format

List all buckets and format the output as JSON for programmatic processing:

```
ossutil ls --output-format json
```
