You can run the presign command to generate a signed URL.

## **Command syntax**

```
ossutil presign oss://bucket[/prefix] [flags]
```

**Parameter**

**Type**

**Description**

\-d, --dirs

/

Returns objects and subdirectories in the current directory, instead of recursively displaying all objects in all subdirectories.

\--encoding-type

string

The encoding method used to encode the object name or file name. Valid value: url.

\--end-with

string

Returns objects whose names are alphabetically before or the same as the value of the --end-with parameter.

\--exclude

stringArray

The exclusion rule for paths or object names.

\--exclude-from

stringArray

Reads the exclusion rule from a file.

\--expires-date

Time

The point in time at which the signed URL expires.

\--expires-duration

Duration

The validity period of the signed URL. The validity period ranges from 1 second to 1 week. Default value: 15m0s.

\--files-from

stringArray

Reads a list of source object names from a file, with empty lines or comment lines ignored.

\--files-from-raw

stringArray

Reads a list of source object names from a file.

\--filter

stringArray

The filter rule for paths or object names.

\--filter-from

stringArray

Reads filter rules from a file.

\-f, --force

/

Forces the operation without requiring user confirmation.

\--include

stringArray

The inclusion rule for paths or object names.

\--include-from

stringArray

Reads the inclusion rule from a file.

\--limited-num

int

The maximum number of results to return.

\--list-objects

/

Lists objects by calling the ListObjects operation.

\--min-age

Duration

Processes only files that were modified before the specified time interval. The default unit is seconds. You can use a unit suffix. For example, 1h indicates one hour.

**Note**

`--min-age 1h` indicates that only files that were modified at least 1 hour ago are processed.

\--max-age

Duration

Processes only files that were modified within the specified time interval. The default unit is seconds. You can use a unit suffix. For example, 1h indicates one hour.

**Note**

`--max-age 1h` indicates that only files that were modified within the last hour are processed.

\--min-mtime

Time

Processes only files that were modified after the specified time. Time format: UTC. Example: 2006-01-02T15:04:05.

**Note**

`--min-mtime "2006-01-02T15:04:05"` indicates that only files that were modified after January 2, 2006, 15:04:05 are processed.

\--max-mtime

Time

Processes only files that were modified before the specified time. Time format: UTC. Example: 2006-01-02T15:04:05.

\--max-size

SizeSuffix

The maximum size of a file that can be transferred. By default, the size is in bytes (B). You can suffix the numerical value with a 1024-based unit: B for byte, K for Kibibyte, M for Mebibyte, G for Gibibyte, T for Tebibyte, or P for Pebibyte.

\--metadata-exclude

stringArray

The exclusion rule for object metadata.

\--metadata-filter

stringArray

The filter rule for object metadata.

\--metadata-filter-from

stringArray

Reads metadata filter rules from a file.

\--metadata-include

stringArray

The inclusion rule for object metadata.

\--min-size

SizeSuffix

The minimum size of a file that can be transferred. By default, the size is in bytes (B). You can suffix the numerical value with a 1024-based unit: B for byte, K for Kibibyte, M for Mebibyte, G for Gibibyte, T for Tebibyte, or P for Pebibyte.

\--page-size

int

The maximum number of objects to list per page during batch processing. Default value: 1000. Valid values: 1 to 1000.

\--query-param

stringArray

The query parameters in the request.

\-r, --recursive

/

Specifies that the command performs the operation recursively. If this parameter is specified, the command takes effect on all objects that meet the conditions in the bucket. Otherwise, the command takes effect only on the objects in the specified path.

\--request-payer

string

The payer of the request. If pay-by-requester is enabled for the bucket, set this parameter to requester.

\--start-after

string

Specifies that objects whose names are alphabetically before or the same as the value of the --end-with parameter are returned.

\--traffic-limit

int

The bandwidth limit of a single connection. Valid values: 819200 to 838860800.

\--version-id

string

The version ID of the object.

**Note**

For more information, see [Command-line options](/help/en/oss/command-line-options#65785a4884d85).

## **Examples**

-   For the example.txt object in the examplebucket bucket, generate a signed URL that has the default validity period of 15 minutes.
    
    ```
    ossutil presign oss://examplebucket/example.txt
    ```
    
-   For the example.txt object in the examplebucket bucket, generate a signed URL that has a validity period of 1 hour.
    
    ```
    ossutil presign oss://examplebucket/example.txt --expires-duration 1h
    ```
    
-   For the example.txt object in the examplebucket bucket, generate a signed URL that remains valid until 2024-06-01T12:00:00 (UTC).
    
    ```
    ossutil presign oss://examplebucket/example.txt --expires-date 2024-06-01T12:00:00
    ```
    
-   For the example.txt object in the examplebucket bucket, generate a signed URL that contains image processing parameters.
    
    ```
    ossutil presign oss://examplebucket/example.txt --query-param x-oss-process=image/resize,m_fixed,w_100,h_100/rotate,90
    ```
    
-   Generate a signed URL for the "123" version of the example.txt object in the examplebucket bucket.
    
    ```
    ossutil presign oss://examplebucket/example.txt --version-id 123
    ```
    
-   For objects in the "folder" directory in the examplebucket bucket, generate signed URLs that have a validity period of 15 minutes.
    
    ```
    ossutil presign oss://examplebucket/folder/ -r
    ```
    
-   For TXT objects in the "folder" directory of the examplebucket bucket, generate signed URLs that have the default validity period of 15 minutes.
    
    ```
    ossutil presign oss://examplebucket/folder/ -r --include "*.txt"
    ```
