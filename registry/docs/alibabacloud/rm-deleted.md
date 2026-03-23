Use the `rm` command to delete objects.

## Command format

```
ossutil rm oss://bucket[/prefix] [flags]
```

**Parameter**

**Type**

**Description**

prefix

string

A folder or a specified prefix in the bucket.

\--all-versions

/

All versions of the specified objects.

\-d, --dirs

/

Lists the files and subdirectories in the current directory instead of recursively listing all files in all subdirectories.

\--encoding-type

string

The codec for object names. Valid value: url.

\--end-with

string

Returns objects with names that are alphabetically at or before the specified value.

\--exclude

stringArray

Specifies patterns to exclude paths or filenames.

\--exclude-from

stringArray

Reads exclusion rules from a specified file.

\--files-from

stringArray

Reads the list of source object names from a file. Blank lines or commented lines are ignored.

\--files-from-raw

stringArray

Reads a raw list of object names from a specified file.

\--filter

stringArray

Specifies filtering rules for paths or filenames.

\--filter-from

stringArray

Reads filtering rules from a specified file.

\-f, --force

/

Forces the operation without a confirmation prompt.

\--include

stringArray

Specifies patterns to include paths or filenames.

\--include-from

stringArray

Reads inclusion rules from a specified file.

\--limited-num

int

Specifies the maximum number of objects to return.

\--list-objects

/

Uses the `ListObjects` API operation to retrieve the list of objects to delete.

\--max-size

SizeSuffix

The maximum size of a file to transfer. The default unit is byte. Valid suffixes are B, K, M, G, T, and P. 1K (KiB) is 1024 bytes.

\--metadata-exclude

stringArray

Specifies patterns to exclude objects based on their object metadata.

\--metadata-filter

stringArray

The filtering rules for object metadata.

\--metadata-filter-from

stringArray

Reads object metadata filtering rules from a rule file.

\--metadata-include

stringArray

The inclusion rules for object metadata.

\--min-age

Duration

Deletes only files modified before the specified time interval. The default unit is second. You can use a suffix to specify the unit. For example, 1h indicates 1 hour.

**Note**

`--min-age 1h` deletes only files modified 1 hour ago or earlier.

\--max-age

Duration

Deletes only files modified within the specified time interval. The default unit is second. You can use a suffix to specify the unit. For example, 1h indicates 1 hour.

**Note**

`--max-age 1h` deletes only files modified within the last hour.

\--min-mtime

Time

Deletes only files modified after the specified time. The time must be in UTC format. For example, 2006-01-02T15:04:05.

**Note**

`--min-mtime "2006-01-02T15:04:05"` deletes only files modified after 15:04:05 on January 2, 2006.

\--max-mtime

Time

Deletes only files modified before the specified time. The time must be in UTC format. For example, 2006-01-02T15:04:05.

\--min-size

SizeSuffix

The minimum size of a file to transfer. The default unit is byte. You can use suffixes such as B, K, M, G, T, or P. 1 K (KiB) = 1024 B.

\-m, --multipart

/

Deletes all fragments from multipart uploads that are not completed or canceled.

\--page-size

int

The maximum number of objects to list per page during batch processing. The value must be between 1 and 1000. The default value is 1000.

\-r, --recursive

/

Performs the operation recursively. If you specify this option, the command is run on all matching objects in the bucket. Otherwise, the command is run only on the object specified by the path.

\--request-payer

string

The payment method for the request. Set this parameter to \`requester\` if you use the pay-by-requester mode.

\--start-after

string

Returns objects that are alphabetically after the specified value.

\--version-id

string

The version ID of the object.

**Note**

For more information, see [Command-line options](/help/en/oss/command-line-options#65785a4884d85).

## **Examples**

-   Deletes `exampleobject.txt` from `examplebucket`.
    
    ```
    ossutil rm oss://examplebucket/exampleobject.txt
    ```
    
-   Recursively deletes all objects with the prefix `test` from `examplebucket`.
    
    ```
    ossutil rm oss://examplebucket/test -r
    ```
    
-   Recursively deletes all objects with the `.png`extension from `examplebucket`.
    
    ```
    ossutil rm oss://examplebucket  --include "*.png" -r
    ```
    
-   Recursively deletes objects from `examplebucket` that meet any of the following conditions:
    
    -   The object name contains the string "abc".
        
    -   The object name does not have a `.jpg`extension.
        
    -   The object name does not have a `.txt`extension.
        
    
    ```
    ossutil rm oss://examplebucket  --include "*abc*" --exclude "*.jpg" --exclude "*.txt" -r
    ```
    
-   Deletes a specific version of `exampleobject.txt` from the versioning-enabled bucket `examplebucket`.
    
    ```
    ossutil rm oss://examplebucket/exampleobject.txt --version-id  CAEQARiBgID8rumR2hYiIGUyOTAyZGY2MzU5MjQ5ZjlhYzQzZjNlYTAyZDE3****
    ```
    
-   Deletes all versions of `exampleobject.txt` from the versioning-enabled bucket `examplebucket`.
    
    ```
    ossutil rm oss://examplebucket/exampleobject.txt --all-versions -r
    ```
    
-   Deletes all versions of all objects in the versioning-enabled bucket `examplebucket`.
    
    ```
    ossutil rm oss://examplebucket --all-versions -r
    ```
    
-   Delete all parts from incomplete multipart uploads in `examplebucket`.
    
    ```
    ossutil rm oss://examplebucket -m -r -f
    ```
