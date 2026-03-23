Appends content to the end of an appendable object. Use this command to stream logs, pipe data from another command, or copy content from one OSS object into another.

## Prerequisites

Before you begin, ensure that you have:

-   The `oss:GetObject` and `oss:PutObject` permissions. For details, see [Attach a custom policy to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip)
    

## Object behavior

The `append` command behaves differently depending on whether the destination object already exists:

-   **Object does not exist**: OSS creates a new appendable object.
    
-   **Object exists and is appendable**: OSS appends the content to the end of the object.
    
-   **Object exists but is not appendable**: OSS returns an error.
    

For background on append upload, see [Append upload](/help/en/oss/user-guide/append-upload-11#concept-ls5-yhb-5db).

## Syntax

```
ossutil append source oss://bucket/object [flags]
```

**Positional parameters**

**Parameter**

**Type**

**Description**

`source`

string

The data source. Accepts a local path, an OSS path (`oss://bucket/object`), or `-` to read from standard input.

**Access control flags**

**Flag**

**Type**

**Description**

`--acl`

string

The access control list (ACL) of the object. Valid values: `default` (inherited from the bucket), `private`, `public-read`, `public-read-write`.

`--request-payer`

string

The payer of the request. Set to `requester` when pay-by-requester is enabled on the bucket.

**Storage flags**

**Flag**

**Type**

**Description**

`--storage-class`

string

The storage class of the object. Valid values: `Standard`, `IA` (Infrequent Access), `Archive`.

**Content flags**

**Flag**

**Type**

**Description**

`--metadata`

strings

User metadata in `key=value` format.

`--tagging`

strings

Object tags in `key=value` format.

`--cache-control`

string

The Cache-Control header, which controls caching behavior in web browsers when the object is downloaded.

`--content-disposition`

string

The Content-Disposition header, which specifies the display mode for the object.

`--content-encoding`

string

The Content-Encoding header, which specifies the encoding of the object.

`--content-type`

string

The Content-Type header, which specifies the media type of the object.

`--expires`

string

The absolute expiration time of the cached content in GMT (Greenwich Mean Time) format. Example: `2022-10-12T00:00:00.000Z`.

`--encoding-type`

string

The encoding method for the object name or file name. Valid value: `url`.

**Note**

For all available flags and global options, see [Command-line options](/help/en/oss/command-line-options).

## Examples

**Upload a local file with a private ACL and object tag**

```
ossutil append 1.txt oss://dst-bucket/append.txt --acl private --tagging tag=value
```

**Append via standard input (pipe)**

```
cat 2.txt | ossutil append - oss://dst-bucket/append.txt
```

**Copy content from another OSS object**

```
ossutil append oss://src-bucket/3.txt oss://dst-bucket/append.txt
```
