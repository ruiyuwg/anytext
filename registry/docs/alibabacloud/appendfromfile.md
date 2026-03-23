Use the `appendfromfile` command to append the contents of a local file to an appendable object in Object Storage Service (OSS).

Append upload suits scenarios where data grows continuously, such as adding new log entries to a log file or adding video segments to a media file as they are generated. Unlike a standard upload, each `appendfromfile` call adds to the existing object rather than replacing it.

## Prerequisites

Before you begin, make sure you have:

-   The `oss:GetObject` and `oss:PutObject` permissions on the target bucket. For details, see [Attach a custom policy to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip).
    
-   ossutil installed. For ossutil 1.6.16 and later, use `ossutil` directly as the binary name. For earlier versions, update the binary name based on your operating system. For details, see [ossutil command reference](/help/en/oss/developer-reference/ossutil#task-2012304).
    

## Command syntax

```
ossutil appendfromfile localfilename oss://bucketname/objectname
[--meta <value>]
```

**Parameter/Option**

**Description**

`localfilename`

Full path of the local file to upload.

`bucketname`

Name of the bucket that contains the target object.

`objectname`

Name of the object to append content to. You can keep the original file name or specify a different one.

`--meta`

Metadata to set on the object. Only takes effect the **first time** you run `appendfromfile` on an object. Subsequent calls ignore this option. Example: `--meta "x-oss-object-acl:private"`. To update metadata after the initial upload, use the [set-meta](/help/en/oss/developer-reference/set-meta#concept-303809) command.

## Examples

The following examples show two stages of an append upload workflow: creating an appendable object with an initial upload, then appending more data to it.

### Upload a file and set the ACL

Run the following command to upload `exampleobject.txt` from your local root directory to `examplebucket` and set the access control list (ACL) to private:

```
ossutil appendfromfile exampleobject.txt oss://examplebucket/exampleobject.txt --meta "x-oss-object-acl:private"
```

Sample output:

```
total append 5(100.00%) byte,speed is 0.00(KB/s)
local file size is 5,the object new size is 5,average speed is 0.04(KB/s)
```

The output confirms the file is uploaded and stored as `exampleobject.txt` with a size of 5 bytes.

### Append content to an existing object

Run the following command to append the contents of `dest.txt` to the existing `exampleobject.txt` object:

```
ossutil appendfromfile dest.txt oss://examplebucket/exampleobject.txt
```

Sample output:

```
total append 150(100.00%) byte,speed is 0.00(KB/s)
local file size is 150,the object new size is 150,average speed is 1.19(KB/s)
```

The output confirms that 150 bytes were appended and the object's new total size is 150 bytes.

To continue appending data, replace `dest.txt` with the path to the next file you want to append.

## Usage notes

-   The `--meta` option only takes effect the first time you run `appendfromfile` on an object. Use the `set-meta` command to update metadata after the initial upload.
    
-   For more information about append upload, see [Append upload](/help/en/oss/user-guide/append-upload-11#concept-ls5-yhb-5db).
    

## Common options

To access a bucket in a different region or owned by a different Alibaba Cloud account, pass the following options:

**Option**

**Description**

`-e`

Endpoint of the region where the bucket is located.

`-i`

AccessKey ID of the Alibaba Cloud account that owns the bucket.

`-k`

AccessKey secret of the Alibaba Cloud account that owns the bucket.

**Example:** Append upload to a bucket in the China (Shanghai) region owned by a different account:

```
ossutil appendfromfile exampleobject.txt oss://examplebucket/exampleobject.txt -e shanghai.aliyuncs.com -i yourAccessKeyID -k yourAccessKeySecret
```

For a full list of common options, see [Common options](/help/en/oss/developer-reference/view-options).
