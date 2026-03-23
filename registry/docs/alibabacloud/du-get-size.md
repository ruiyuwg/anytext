You can use the du command to query the total size of all objects in a bucket or a directory.

## **Usage notes**

To query the total size of all current versions of objects in a bucket or a directory, you must have the `oss:ListObjects`, `oss:ListParts`, and `oss:ListMultipartUploads` permissions. To query the total size of all versions of objects in a bucket or a directory, you must have the `oss:ListObjectVersions`, `oss:ListParts`, and `oss:ListMultipartUploads` permissions. For more information, see [Attach a custom policy to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip).

## Command syntax

```
ossutil du oss://bucket[/prefix] [flags]
```

**Parameter**

**Type**

**Description**

prefix

string

The directory in which the objects are stored, or the prefix in the names of the objects.

\--all-versions

/

Specifies that the command queries the total size of all versions of the specified objects.

\-d, --dirs

/

Specifies that the objects and subdirectories in the current directory are returned.

\--encoding-type

string

The encoding method used to encode the object names. Valid value: url.

\--end-with

string

Specifies that objects whose names are alphabetically before or the same as the value of the --end-with parameter are returned.

\--exclude

stringArray

The exclusion rule for the path or object name.

\--exclude-from

stringArray

Specifies that the exclusion rule is read from the rules file.

\--files-from

stringArray

Specifies that the object names are read from the rules file, and empty lines or comment lines are ignored.

\--files-from-raw

stringArray

Specifies that the object names are read from the rules file.

\--filter

stringArray

The filter rule for the path or object name.

\--filter-from

stringArray

Specifies that the filter rule for the path or object name is read from the rules file.

\-f, --force

/

Specifies that the command is forcibly run without a prompt for confirmation.

\--human-readable

/

Specifies that information is output in a user-friendly manner to facilitate reading. The unit of object size can be KiB, MiB, GiB, TiB, or PiB.

\--include

stringArray

The inclusion rule for the path or object name.

\--include-from

stringArray

Specifies that the inclusion rule is read from the rules file.

\--list-objects

/

Specifies that the ListObjects operation is called to list objects.

\--max-size

SizeSuffix

Specifies the maximum size of the object that can be transferred. The default unit is bytes. The unit of object size can be bytes, KiB, MiB, GiB, TiB, or PiB. Note: 1 KiB = 1024 bytes.

\--metadata-exclude

stringArray

The exclusion rule for object metadata.

\--metadata-filter

stringArray

The filter rule for object metadata.

\--metadata-filter-from

stringArray

Specifies that the filter rule for object metadata is read from the rules file.

\--metadata-include

stringArray

The inclusion rule for object metadata.

\--min-age

Duration

Specifies that objects last modified after the start of the specified time range are excluded. The default unit is s (seconds). You can suffix the numerical value with a unit of time. For example, 1h indicates one hour.

**Note**

`--min-age 1h` specifies that only objects modified an hour ago or earlier are queried.

\--max-age

Duration

Queries only objects whose last modified time is within the specified time range. The default unit is s (seconds). You can suffix the numerical value with a unit of time. For example, 1h indicates one hour.

**Note**

`--max-age 1h` specifies that only objects modified within the past hour are queried.

\--min-mtime

Time

Queries only objects whose last modified time is later than the value of this option. The time must be in UTC. Example: 2006-01-02T15:04:05.

**Note**

`--min-mtime "2006-01-02T15:04:05"` specifies that only objects modified after 15:04:05 on January 02,2006 are queried.

\--max-mtime

Time

Queries objects whose last modified time is earlier than the value of this option. The time must be in UTC. Example: 2006-01-02T15:04:05.

\--min-size

SizeSuffix

Specifies the minimum size of the object that can be transferred. The default unit is bytes. The unit of object size can be bytes, KiB, MiB, GiB, TiB, or PiB. Note: 1 KiB = 1024 bytes.

\--page-size

int

The maximum number of objects that can be returned per page when paginated listing is performed in batch mode. Valid values: 1 to 1000. Default value: 1000.

\-r, --recursive

/

Specifies that the command is recursively run on objects. If this parameter is specified, the command takes effect on all objects that meet the conditions in the bucket. Otherwise, the command takes effect on only the objects in the specified path.

\--request-payer

string

Specifies the payer of the request. If pay-by-requester is enabled for the bucket, set this parameter to requester.

\--start-after

string

Specifies that objects whose names are alphabetically after the value of the --start-after parameter are returned.

**Note**

For more information, see [Command-line options](/help/en/oss/command-line-options#65785a4884d85).

## **Examples**

-   Query the total size of objects in a bucket named examplebucket
    
    ```
    ossutil du oss://examplebucket
    ```
    
    The following output indicates that 13 objects are stored in the examplebucket bucket, including 12 Standard objects and 1 Archive object. The total size of the objects is 132116024 bytes.
    
    ```
    storage class   object count            sum size
    ----------------------------------------------------------
    Standard        12                       132115210
    Archive         1                        814
    ----------------------------------------------------------
    total object count: 13                          total object sum size: 132116024
    total part count:   0                           total part sum size:   0
    
    total du size:132116024
    
    0.382978(s) elapsed
    ```
    
-   Query the total size of objects in the desfolder directory of a bucket named examplebucket
    
    ```
    ossutil du oss://examplebucket/desfolder
    ```
    
    The following output indicates that 4 Standard objects are stored in the desfolder directory of the examplebucket bucket. The total size of the objects is 92927 bytes.
    
    ```
    storage class   object count            sum size
    ----------------------------------------------------------
    Standard        4                       92927
    ----------------------------------------------------------
    total object count: 4                           total object sum size: 92927
    total part count:   0                           total part sum size:   0
    
    total du size:92927
    
    0.350440(s) elapsed
    ```
    
-   Query the total size of objects whose names contain the .jpg suffix in the desfolder directory of a bucket named examplebucket
    
    ```
    ossutil du oss://examplebucket/desfolder --include *.jpg
    ```
    
    The following output indicates that 1 Standard object whose name contains the .jpg suffix is stored in the desfolder directory of the examplebucket bucket. The total size of the object is 92884 bytes.
    
    ```
    storage class   object count            sum size
    ----------------------------------------------------------
    Standard        1                       92884
    ----------------------------------------------------------
    total object count: 1                           total object sum size: 92884
    total part count:   0                           total part sum size:   0
    
    total du size:92884
    
    0.381506(s) elapsed
    ```
    
-   Query the total size of objects in the desfolder directory in a bucket named examplebucket and display the output in the JSON format
    
    ```
    ossutil du oss://examplebucket/desfolder --output-format json
    ```
    
    The following output indicates that 4 Standard objects are stored in the desfolder directory of the examplebucket bucket. The total size of the objects is 92927 bytes.
    
    ```
    {
      "ObjectCount": 4,
      "ObjectSize": 92927,
      "StandardObjectCount": 4,
      "StandardObjectSize": 92927,
      "Storage": 92927
    }
    0.508607(s) elapsed
    ```
