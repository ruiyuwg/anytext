Calculate the MD5 or CRC-64 hash of a local file or an OSS object.

For OSS objects, ossutil retrieves the hash from the server using a HeadObject request, which returns the stored CRC-64 or Content-MD5 value. If the server-side value is not available, ossutil downloads the object and computes the hash locally. Use `--download` to download the object for hash calculation.

## Prerequisites

Before you begin, ensure that you have:

-   The `oss:GetObject` permission. For details, see [Grant custom permissions to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip)
    

## Syntax

```
ossutil hash md5|crc64 source [flags]
```

**Supported algorithms:**

**Algorithm**

**Description**

`md5`

Computes the MD5 hash of the source

`crc64`

Computes the CRC-64 checksum of the source

## Flags

**Flag**

**Type**

**Description**

`--base64`

/

Encodes the hash output in Base64.

`-d, --dirs`

/

Returns objects and subdirectories in the current directory only, without recursing into subdirectories.

`--download`

/

Downloads the object before computing the hash locally.

`--encoding-type`

string

Encoding for object names or file names. Valid value: `url`.

`--end-with`

string

Matches objects whose names are lexicographically before or equal to the specified value.

`--exclude`

stringArray

Exclusion rule for paths or object names.

`--exclude-from`

stringArray

Reads exclusion rules from a file.

`--files-from`

stringArray

Reads source file names from a file. Ignores empty lines and comment lines.

`--files-from-raw`

stringArray

Reads source file names from a file.

`--filter`

stringArray

Filter rule for paths or object names.

`--filter-from`

stringArray

Reads filter rules from a file.

`-f, --force`

/

Forces the operation without prompting for confirmation.

`--include`

stringArray

Inclusion rule for paths or object names.

`--include-from`

stringArray

Reads inclusion rules from a file.

`--limited-num`

int

Maximum number of results to return.

`--list-objects`

/

Uses the ListObjects operation to list objects.

`--min-age`

Duration

Processes only files modified before the specified interval. The default unit is seconds. Supported suffixes: `h` for hours. For example, `--min-age 1h` processes files modified 1 hour ago or earlier.

`--max-age`

Duration

Processes only files modified within the specified interval. The default unit is seconds. For example, `--max-age 1h` processes files modified within the last hour.

`--min-mtime`

Time

Processes only files modified after the specified time. Format: UTC, for example, `2006-01-02T15:04:05`.

`--max-mtime`

Time

Processes only files modified before the specified time. Format: UTC, for example, `2006-01-02T15:04:05`.

`--max-size`

SizeSuffix

Maximum file size to process. Default unit: bytes (B). Supported suffixes: K (kibibyte), M (mebibyte), G (gibibyte), T (tebibyte), P (pebibyte).

`--metadata-exclude`

stringArray

Exclusion rule for object metadata.

`--metadata-filter`

stringArray

Filter rule for object metadata.

`--metadata-filter-from`

stringArray

Reads metadata filter rules from a file.

`--metadata-include`

stringArray

Inclusion rule for object metadata.

`--min-size`

SizeSuffix

Minimum file size to process. Default unit: bytes (B). Supported suffixes: same as `--max-size`.

`--page-size`

int

Maximum number of objects returned per page. Default: 1000. Valid values: 1–1000.

`-r, --recursive`

/

Applies the operation to all matching objects in the bucket. If this option is not specified, the command performs the operation only on the specified object.

`--request-payer`

string

Specifies the request payer when pay-by-requester is enabled. Valid value: `requester`.

`--start-after`

string

Returns objects whose names are alphabetically after the specified value.

> For a complete list of global options, see [Command-line options](/help/en/oss/command-line-options).

## Examples

**Compute the MD5 hash of a local file:**

```
ossutil hash md5 example.txt
```

**Compute the MD5 hash and encode the output in Base64:**

```
ossutil hash md5 example.txt --base64
```

**Compute the CRC-64 checksum of a local file:**

```
ossutil hash crc64 example.txt
```

**Compute MD5 hashes for all files in a local directory:**

```
ossutil hash md5 folder/ -r
```

**Compute MD5 hashes for all files in a local directory, Base64-encoded:**

```
ossutil hash md5 folder/ -r --base64
```

**Compute CRC-64 checksums for all files in a local directory:**

```
ossutil hash crc64 folder/ -r
```

**Compute the MD5 hash of an OSS object:**

```
ossutil hash md5 oss://examplebucket/example.txt
```
