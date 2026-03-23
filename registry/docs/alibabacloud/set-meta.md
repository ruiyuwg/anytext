Use the `ossutil set-meta` command to configure, update, or delete the metadata of objects in OSS. Object metadata includes standard HTTP headers and user metadata (headers with the `X-Oss-Meta-` prefix).

**Important**

For Cold Archive or Deep Cold Archive objects larger than 100 MB, `set-meta` may fail due to a server timeout. Use the [cp command](/help/en/oss/developer-reference/copy-objects-4#concept-1937460) instead.

## Prerequisites

Before you begin, ensure that you have:

-   The required RAM permissions for your operation: For more information, see [Attach a custom policy to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip).
    
    **Operation**
    
    **Required permissions**
    
    Single object
    
    `oss:GetObject`, `oss:PutObject`, `oss:GetObjectVersion`, `oss:GetObjectAcl`
    
    Multiple objects
    
    `oss:GetObject`, `oss:PutObject`, `oss:GetObjectVersion`, `oss:ListObjects`
    
-   ossutil 1.6.16 or later. Earlier versions require you to rename the binary based on your operating system. For more information, see [ossutil command reference](/help/en/oss/developer-reference/ossutil#task-2012304).
    

## Command syntax

```
ossutil set-meta oss://bucketname[/prefix]
[header:value#header:value...]
[--update]
[--delete]
[-r, --recursive]
[-f, --force]
[--object-file <value>]
[--snapshot-path <value>]
[--disable-ignore-error]
[--version-id <value>]
[--include <value>]
[--exclude <value>]
```

### Parameters and options

**Parameter/Option**

**Description**

`bucketname`

The name of the bucket.

`prefix`

A prefix that matches resource names in the bucket, such as directories and objects.

`header:value#header:value...`

Metadata headers as key-value pairs. Header keys are case-insensitive; values are case-sensitive. Separate multiple headers with `#`. Example: `Cache-Control:no-cache#Expires:2022-10-12T00:00:00.000Z`. For supported headers, see the list below.

`--update` (`-u`)

Updates only the specified headers. Cannot be used with `--delete`.

`--delete`

Deletes only user metadata headers (headers with the `X-Oss-Meta-` prefix). Cannot be used with `--update`.

`-r`, `--recursive`

Applies the operation to all objects whose names match the specified prefix.

`-f`, `--force`

Runs the operation without prompting for confirmation.

`--object-file`

Path to a local TXT or XML file that lists the names of objects to process, one name per line.

`--snapshot-path`

Path for storing operation snapshots. Objects that already have snapshots from a previous run are skipped. Must be used with `-r`/`--recursive` or `--object-file`.

`--disable-ignore-error`

Specifies that errors during batch operations are not ignored.

`--version-id`

The version ID of the object to process. Applies only when bucket versioning is enabled or suspended.

`--include`

Includes only objects that match the specified pattern. For more information, see [Options --include and --exclude](/help/en/oss/developer-reference/view-options#d6b2c8e04afii).

`--exclude`

Excludes objects that match the specified pattern. For more information, see [Options --include and --exclude](/help/en/oss/developer-reference/view-options#d6b2c8e04afii).

### Supported headers

```
Expires (time.RFC3339: 2006-01-02T15:04:05Z07:00)
X-Oss-Object-Acl
Origin
X-Oss-Storage-Class
Content-Encoding
Cache-Control
Content-Disposition
Accept-Encoding
X-Oss-Server-Side-Encryption
Content-Type
Headers with the X-Oss-Meta- prefix
```

For details on how to use these headers, see [Manage object metadata](/help/en/oss/user-guide/manage-object-metadata-10/#concept-lkf-swy-5db).

## Operation modes

`set-meta` supports three distinct modes. Choose the one that matches your intent:

**Mode**

**Flag**

**Effect**

**Overwrite**

\_(no flag)\_

Sets the specified metadata. If you omit `header:value`, ossutil retains existing `X-Oss-Meta-*` headers unchanged, and prompts whether to retain HTTP headers.

**Update**

`--update`

Updates only the specified headers. All other metadata remains unchanged. If you leave a header value blank, the original value is kept.

**Delete**

`--delete`

Removes only the specified `X-Oss-Meta-*` headers. Standard HTTP headers cannot be deleted with this flag.

## Configure or update object metadata

### Single object

Set the access control list (ACL) of an object to `private`:

```
ossutil set-meta oss://examplebucket/exampleobject.txt X-Oss-Object-Acl:private
```

Update the ACL of an object to `public-read` without changing other metadata (use `--update`):

```
ossutil set-meta oss://examplebucket/exampleobject.txt X-Oss-Object-Acl:public-read --update
```

Set the storage class of a specific object version to Standard:

```
ossutil set-meta oss://examplebucket/exampleobject.txt X-Oss-Storage-Class:Standard \
  --version-id CAEQARiBgID8rumR2hYiIGUyOTAyZGY2MzU5MjQ5ZjlhYzQzZjNlYTAyZDE3MDRk
```

Set the storage class of a specific object version to Cold Archive:

```
ossutil set-meta oss://examplebucket/exampleobject.txt X-Oss-Storage-Class:ColdArchive \
  --version-id CAEQARiBgID8rumR2hYiIGUyOTAyZGY2MzU5MjQ5ZjlhYzQzZjNlYTAyZDE3MDRk
```

> The storage class change takes effect only after the command completes. To find a version ID, see [ls](/help/en/oss/developer-reference/ls#concept-303804).

### Multiple objects with a common prefix

Set `Cache-Control` to `no-cache` and ACL to `private` for all objects with the `src` prefix:

```
ossutil set-meta oss://examplebucket/src Cache-Control:no-cache#X-Oss-Object-Acl:private -r
```

Update the storage class to Infrequent Access (IA) for all `.jpg` objects in a directory:

```
ossutil set-meta oss://examplebucket/desfolder/ X-Oss-Storage-Class:IA \
  --include "*.jpg" -u -r
```

Update the storage class to Archive for objects whose names contain `abc`, excluding `.jpg` and `.txt` files:

```
ossutil set-meta oss://examplebucket/desfolder/ X-Oss-Storage-Class:Archive \
  --include "*abc*" --exclude "*.jpg" --exclude "*.txt" -u -r
```

> If an error occurs on one object during a batch operation, ossutil logs it in the `ossutil_output` directory and continues processing the remaining objects.

### Multiple objects from a file list

To update metadata for objects in different directories, list their names in a local file and pass it with `--object-file`.

1.  Create a file (for example, `localfile.txt`) listing one object name per line:
    
    ```
       exampleobject1.jpg
       dir1/exampleobject2.png
       dir2/exampleobject3.txt
    ```
    
2.  Run the command:
    
    ```
       ossutil set-meta oss://examplebucket \
         Cache-Control:no-cache#X-Oss-Object-Acl:private \
         --update --object-file localfile.txt --snapshot-path dir/
    ```
    

### Expected output

A successful run prints the elapsed time:

```
0.106852(s) elapsed
```

## Delete user metadata

**Important**

The `--delete` flag removes only user metadata headers (headers with the `X-Oss-Meta-` prefix). Standard HTTP headers cannot be deleted this way.

### Single object

Delete a specific user metadata header from an object. Leave the value blank:

```
ossutil set-meta oss://examplebucket/exampleobject.txt X-Oss-Meta-Createdby --delete
```

### Multiple objects from a file list

1.  Create a file listing the object names:
    
    ```
       exampleobject1.jpg
       dir1/exampleobject2.png
       dir2/exampleobject3.txt
    ```
    
2.  Run the command:
    
    ```
       ossutil set-meta oss://examplebucket X-Oss-Meta-Location \
         --delete --object-file localfile.txt --snapshot-path dir/
    ```
    

### Expected output

```
0.106846(s) elapsed
```

## Common options

To operate on a bucket in a different region or owned by a different Alibaba Cloud account, add the relevant options:

**Option**

**Description**

`-e`

The endpoint of the region where the bucket is located.

`-i`

The AccessKey ID of the Alibaba Cloud account that owns the bucket.

`-k`

The AccessKey secret of the Alibaba Cloud account that owns the bucket.

Example: set metadata on an object in a bucket located in the China (Shanghai) region, owned by a different account:

```
ossutil set-meta oss://testbucket/testobject.jpg X-Oss-Object-Acl:private \
  -e oss-cn-shanghai.aliyuncs.com \
  -i yourAccessKeyID \
  -k yourAccessKeySecret
```

For the full list of common options, see [Common options](/help/en/oss/developer-reference/view-options).

## Verify the result

After running `set-meta`, use the `stat` command to confirm that the metadata was applied:

```
ossutil stat oss://examplebucket/exampleobject.txt
```

For more information, see [stat](/help/en/oss/developer-reference/stat#concept-303806).

## What's next

-   [Manage object metadata](/help/en/oss/user-guide/manage-object-metadata-10/#concept-lkf-swy-5db) — understand each metadata header and its effect
    
-   [ls](/help/en/oss/developer-reference/ls#concept-303804) — list objects and retrieve version IDs
    
-   [cp](/help/en/oss/developer-reference/copy-objects-4#concept-1937460) — use the `cp` command for storage class changes on large Cold Archive or Deep Cold Archive objects
    
-   [Common options](/help/en/oss/developer-reference/view-options) — full reference for `-e`, `-i`, `-k`, and other shared options
