Use the `ossutil cp` command to download objects from OSS to your local machine.

## Prerequisites

Before you begin, ensure that you have:

-   The `oss:GetObject` and `oss:ListObjects` permissions to download files
    

For details on granting these permissions, see [Grant custom permission policies to RAM users](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip).

## Syntax

```
ossutil cp oss://bucket[/prefix] local-path [flags]
```

> This page covers OSS-to-local downloads only. For uploads and server-side copies, see the corresponding `cp` reference pages.

## Parameters

**Parameter**

**Type**

**Description**

`local-path`

string

Destination path on your local machine. Supports relative paths, absolute paths, and `-` (writes to standard output).

`prefix`

string

Object prefix filter. If the prefix ends with `/`, only batch operations are supported.

### Flags

**Flag**

**Type**

**Description**

`--acl`

string

Object access control. Values: `private`, `public-read`, `public-read-write`, `default` (inherits from the bucket).

`--bandwidth-limit`

SizeSuffix

Maximum download bandwidth. Minimum: 1024 B/s. Default unit: B/s. Accepts B, K, M, G suffixes. Example: `20971520` = 20 MB/s, `50 M` = 50 MB/s.

`--bigfile-threshold`

SizeSuffix

File size threshold for enabling multipart download (default: 104857600).

`--cache-control`

string

Specifies web cache behavior for the downloaded object.

`--checkers`

int

Number of concurrent checkers (default: 16).

`--checkpoint-dir`

string

Directory for resumable download checkpoint data (default: `.ossutil_checkpoint/`).

`--content-disposition`

string

Specifies how the object is displayed when downloaded.

`--content-encoding`

string

Declares the object's content encoding method.

`--content-type`

string

Object content type.

`--copy-props`

string

Controls which metadata and tags to copy. Values: `none`, `metadata`, `default` (copies both metadata and tags).

`-d, --dirs`

string

Downloads files and subdirectories in the current directory only, without recursing into subdirectories.

`--encoding-type`

string

Encoding for object or file names. Value: `url`.

`--end-with`

string

Downloads objects alphabetically up to and including the specified value.

`--exclude`

stringArray

Exclusion patterns for paths or file names.

`--exclude-from`

stringArray

Reads exclusion patterns from a file.

`--expires`

string

Specifies the absolute expiration time for cached content.

`--files-from`

stringArray

Reads source file names from a file, skipping empty lines and comment lines.

`--files-from-raw`

stringArray

Reads source file names from a file (includes all lines).

`--filter`

stringArray

Filter patterns for paths or file names.

`--filter-from`

stringArray

Reads filter patterns from a file.

`-f, --force`

/

Skips the confirmation prompt and overwrites existing files.

`--ignore-existing`

/

Skips files that already exist at the destination.

`--include`

stringArray

Inclusion patterns for paths or file names.

`--include-from`

stringArray

Reads inclusion patterns from a file.

`-j, --job`

int

Number of concurrent tasks (default: 3). Takes effect only when used with `-f`, `--update`, `--size-only`, or `--ignore-existing`.

`--list-objects`

/

Lists objects using the ListObjects API.

`--max-age`

Duration

Downloads only objects modified within the specified interval. Default unit: seconds. Example: `--max-age 1h` downloads objects modified within the last hour.

`--max-mtime`

Time

Downloads only objects modified before the specified time (UTC). Format: `2006-01-02T15:04:05`.

`--max-size`

SizeSuffix

Maximum file size to transfer. Default unit: bytes. Accepts B, K, M, G, T, P suffixes (1K = 1024 B).

`--metadata`

strings

Specifies user metadata in `key=value` format.

`--metadata-directive`

string

How to set target object metadata. Values: `COPY`, `REPLACE`.

`--metadata-exclude`

stringArray

Exclusion patterns for object metadata.

`--metadata-filter`

stringArray

Filter patterns for object metadata.

`--metadata-filter-from`

stringArray

Reads object metadata filter patterns from a file.

`--metadata-include`

stringArray

Inclusion patterns for object metadata.

`--min-age`

Duration

Downloads only objects modified before the specified interval. Default unit: seconds. Example: `--min-age 1h` downloads objects modified 1 hour ago or earlier.

`--min-mtime`

Time

Downloads only objects modified after the specified time (UTC). Format: `2006-01-02T15:04:05`.

`--min-size`

SizeSuffix

Minimum file size to transfer. Default unit: bytes. Accepts B, K, M, G, T, P suffixes (1K = 1024 B).

`--no-progress`

/

Suppresses the progress bar.

`--page-size`

int

Maximum number of objects per page during batch downloads (default: 1000, range: 1–1000).

`--parallel`

int

Number of concurrent tasks for single-file internal operations.

`--part-size`

SizeSuffix

Part size for multipart downloads (range: 100 KiB–5 GiB). By default, ossutil calculates an appropriate part size based on the file size.

`-r, --recursive`

/

Downloads all matching objects in the bucket recursively.

`--request-payer`

string

Set to `requester` when the bucket uses pay-by-requester mode.

`--size-only`

/

Downloads only objects whose size differs from the local file.

`--start-after`

string

Downloads objects alphabetically after the specified value (exclusive).

`--storage-class`

string

Object storage class. Values: `Standard`, `IA` (Infrequent Access), `Archive`, `ColdArchive` (Cold Archive), `DeepColdArchive` (Deep Cold Archive).

`--tagging`

strings

Specifies object tags in `key=value` format.

`--tagging-directive`

string

How to set target object tags. Values: `COPY`, `REPLACE`.

`-u, --update`

/

Skips local files that are newer than the source object. If the modification times are equal, the file is updated.

`--version-id`

string

Specifies the object's Version ID.

`--write-buffer-size`

SizeSuffix

Memory buffer size for write operations. Automatically aligns to 4 KB. Default: 128 KiB, range: 0–32 MiB. Accepts B, K, M suffixes.

For global flags that apply to all ossutil commands, see [Global command-line options](/help/en/oss/developer-reference/ossutil-overview/#d7282c6664szl).

## How destination paths work

Understanding how ossutil maps object names to local paths prevents unexpected directory structures.

**Relative path rule**: The local file name is derived by stripping the specified prefix from the object name.

For example, when you run:

```
ossutil cp -r oss://bucket/root/dir/ ./local/
```

The object `root/dir/subdir/test.txt` maps to `./local/subdir/test.txt`, not `./local/root/dir/subdir/test.txt`.

**Single file download:**

**Destination**

**Result**

Existing directory (`D:/localpath/`)

File is created inside the directory using the object's relative path

File path or non-existent path (`D:/localpath/example.txt`)

File is saved with the specified name

**Batch download** (with `-r`):

ossutil recreates the source directory structure under your destination root:

```
OSS bucket:
  destfolder/
    images/
      photo.jpg
    docs/
      readme.txt

After: ossutil cp -r oss://bucket/destfolder/ ./local/
Local result:
  local/
    images/
      photo.jpg
    docs/
      readme.txt
```

## Usage notes

**Before running batch downloads**, use `--list-objects` to preview which objects will be downloaded:

```
ossutil cp -r oss://examplebucket/destfolder/ D:/localpath/ --list-objects
```

**When to use \`-u, --update\`**: This flag sends at least one HEAD request per object to compare modification times, even if the local file does not exist. In scenarios where source objects change infrequently, these HEAD requests add cost and reduce performance. Evaluate whether `--ignore-existing` or `--size-only` better fits your use case:

**Flag**

**Skips when...**

**HEAD request cost**

`--update`

Local file is newer than source

Always (one per object)

`--size-only`

Local file size matches source

Only when sizes differ

`--ignore-existing`

Local file already exists

None

## Examples

### Download a single file

Save an object using its original name:

```
ossutil cp oss://examplebucket/examplefile.txt D:/localpath
```

Save an object with a different local name:

```
ossutil cp oss://examplebucket/examplefile.txt D:/localpath/example.txt
```

### Download a folder

Download a folder and preserve its directory structure:

```
ossutil cp -r oss://examplebucket/destfolder/ D:/localpath/
```

Download all objects in the bucket root:

```
ossutil cp -r oss://examplebucket D:/localpath/
```

### Filter objects by name pattern

Use `--include` and `--exclude` to select objects by name pattern.

Download all objects except JPG files:

```
ossutil cp -r oss://examplebucket/destfolder/ D:/localpath/ --exclude "*.jpg"
```

Download only text files:

```
ossutil cp -r oss://examplebucket/destfolder/ D:/localpath/ --include "*.txt"
```

### Limit download bandwidth

Download a file and cap the bandwidth at 20 MB/s:

```
ossutil cp oss://examplebucket/examplefile.txt . --bandwidth-limit 20971520
```

### Download by modification time

Download objects modified within the last 24 hours:

```
ossutil cp -r oss://examplebucket/destfolder/ D:/localpath/ --max-age 24h
```

Download objects not modified in the last 7 days:

```
ossutil cp -r oss://examplebucket/destfolder/ D:/localpath/ --min-age 168h
```

### Skip files that already exist locally

Skip download if a file with the same size already exists:

```
ossutil cp -r oss://examplebucket/destfolder/ D:/localpath/ --size-only
```

Skip download if any local file already exists:

```
ossutil cp -r oss://examplebucket/destfolder/ D:/localpath/ --ignore-existing
```

### Quick reference: common download scenarios

**Goal**

**Flag**

Limit bandwidth

`--bandwidth-limit`

Skip existing files (by size)

`--size-only`

Skip all existing files

`--ignore-existing`

Update only older local files

`-u, --update`

Filter by file name

`--include` / `--exclude`

Filter by modification time

`--min-age` / `--max-age` / `--min-mtime` / `--max-mtime`

Preview before downloading

`--list-objects`

Download a specific version

`--version-id`

Suppress progress bar

`--no-progress`

Write output to stdout

Set `local-path` to `-`
