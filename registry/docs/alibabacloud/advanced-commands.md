This topic describes advanced commands.

## **Command Overview**

**Command scope**

**Supported options**

All advanced commands

-   \--encoding-type string: The encoding method for object names or file names. Valid value: url.
    
-   \--request-payer string: The payment method for the request. Set this option to requester if you use pay-by-requester mode.
    

Commands that support batch operations

-   \--start-after/--end-with (, \]: An open interval on the left and a closed interval on the right. Use these options to set the key range for queries.
    
-   Filter options: You can set filter conditions for objects or files by name, directory, size, modification time, or metadata. For more information about filter rules, see [Filter Options](#331825ba29zi4).
    
-   \--limited-num: Sets the number of items returned by the query API.
    
-   \--recursive/-r: Performs recursive operations. This option lets you access all files or objects under the root directory, including subdirectories.
    
-   \--dirs/-d: Accesses only files or objects in the root directory, excluding subdirectories.
    
    **Note**
    
    For objects, OSS simulates directories using the delimiter parameter. This requires scanning all objects under the specified prefix. More objects mean longer scan times.
    
-   \--force/-f: Forces an operation without prompting for confirmation.
    
-   \--list-objects: Lists objects using the ListObjects API.
    

Commands that support destination filtering rules

-   \--update: Skips destination files that are newer than the source files, but updates those that have the same modification time as the source files.
    
-   \--size-only: Compares only file sizes. Only files with different sizes are synchronized.
    
-   \--checksum: Compares CRC64 checksums. OSS first compares file sizes. If the sizes match, it compares CRC64 values. If CRC64 is missing from either side, OSS treats the files as inconsistent. This option applies only to object-to-object copy operations.
    
-   \--ignore-existing: Skips files that already exist at the destination.
    

Commands that support single-object operations

\--version-id string: The version ID of the object.

Commands that support list mode

\--list-format: The format of the list file. Valid values: plain and inventory.

\--list-manifest-from: Reads the description of the list file format from a file. Set this option when the list file format is inventory.

## **Local Options**

**Local option**

**Type**

**Description**

\--encoding-type

string

The encoding method for object names or file names. Valid value: url.

\--request-payer

string

The payment method for the request. Set this option to requester if you use pay-by-requester mode. Valid value: requester.

\--start-after

string

Returns objects that come after the specified value in alphabetical order. The specified value itself is not included.

\--end-with

string

Returns objects that come before the specified value in alphabetical order. The specified value itself is included.

\--page-size

int

The maximum number of objects listed per page during batch processing. Default value: 1000. Valid values: 1 to 1000.

\--include

stringArray

The inclusion rule for paths or file names.

\--include-from

stringArray

Reads inclusion rules from a rule file.

\--exclude

stringArray

The exclusion rule for paths or file names.

\--exclude-from

stringArray

Reads exclusion rules from a rule file.

\--filter

stringArray

The filtering rule for paths or file names.

\--files-from

stringArray

Reads a list of source file names from a file. Blank lines and comment lines that start with # or ; are ignored. This option applies only to file filtering operations.

\--files-from-raw

stringArray

Reads a list of source file names from a file. This option applies only to file filtering operations.

\--max-age

Duration

Does not transfer any files modified earlier than the specified time. Default unit: seconds. Supported suffixes: ms, s, m, h, d, w, M, y. Default value: off.

\--min-age

Duration

Does not transfer any files modified later than the specified time. Default unit: seconds. Supported suffixes: ms, s, m, h, d, w, M, y. Default value: off.

\--max-mtime

Time

Does not transfer any files modified later than the specified time. Time format: UTC. Default value: off.

\--min-mtime

Time

Does not transfer any files modified earlier than the specified time. Time format: UTC. Default value: off.

\--max-size

SizeSuffix

The maximum file size to transfer. Default unit: bytes (B). Supported suffixes: B, K, M, G, T, P. 1K (KiB) = 1024B.

\--min-size

SizeSuffix

The minimum file size to transfer. Default unit: bytes (B). Supported suffixes: B, K, M, G, T, P. 1K (KiB) = 1024B.

\--metadata-exclude

stringArray

The exclusion rule for object metadata.

\--metadata-include

stringArray

The inclusion rule for object metadata.

\--metadata-filter

stringArray

The filtering rule for object metadata.

\--metadata-filter-from

stringArray

Reads object metadata filtering rules from a rule file.

\--checksum

/

Copies only source files whose sizes or checksums (if available) differ from those of the destination files.

\--size-only

/

Copies only source files whose sizes differ from those of the destination files.

\-u, --update

/

Skips files that already exist at the destination and have a newer modification time than the source file.

**Note**

If a file at the destination has the same modification time as the source file, OSS updates the file.

\-r, --recursive

/

Performs recursive operations. When you specify this option, the command operates on all objects that match the conditions in the bucket. Otherwise, it operates only on objects at the specified path.

\-d, --dirs

/

Returns files and subdirectories in the current directory instead of recursively listing all files in all subdirectories.

\-f, --force

/

Forces an operation without prompting for confirmation.

\--list-objects

/

Lists objects using the ListObjects API.

\--no-progress

/

Hides the progress bar.

\-j, --job

int

The number of concurrent tasks for multi-file operations. Default value: 3.

\--checkers

int

The number of concurrent checkers. Default value: 16.

\--parallel

int

The number of concurrent tasks for internal operations on a single file.

\--part-size

SizeSuffix

The part size for multipart upload. By default, ossutil calculates an appropriate part size based on the file size. Valid values: 100 KiB to 5 GiB.

\--bigfile-threshold

int

The threshold that triggers multipart upload, download, or copy for large files. Default value: 104857600.

\--version-id

string

The version ID of the object.

\--storage-class

string

The storage class of the object. Valid values: Standard, IA, Archive, ColdArchive, DeepColdArchive.

\--acl

string

The access permissions for the object. Valid values: private, public-read, public-read-write, default.

\--cache-control

string

Specifies the caching behavior for the object when it is downloaded.

\--content-disposition

string

Specifies how the object is displayed.

\--content-encoding

string

Declares the encoding method for the object.

\--content-type

string

The content type of the object.

\--expires

string

Specifies the absolute expiration time for cached content.

\--copy-props

string

Specifies which properties to copy from the source object. Valid values: none, metadata, default.

\--tagging

string

Specifies tags for the object in key=value format.

\--tagging-directive

string

Specifies how to set tags for the destination object. Valid values: COPY, REPLACE.

\--metadata

string

Specifies user-defined metadata for the object in key=value format.

\--metadata-directive

string

Specifies how to set metadata for the destination object. Valid values: COPY, REPLACE.

\--list-format

string

The format of the list file. Valid values: plain and inventory.

\--list-manifest-from

string

Reads the description of the list file format from a file. Set this option when the list file format is inventory.

## Filter Options

Filter options apply to commands that support batch operations, such as ls, cp, sync, and rm. You can use them to filter by path or file name, path or file list, file modification time, or file size. For objects, you can also filter by metadata.

You can use filter options only on the command line. You cannot specify them in configuration files.

To test your filter configuration, run the ls command. You can also use the --dry-run or -n option to perform a trial run without making changes.

### **Filter by Path or File Name**

To include or exclude specific files, define filtering rules for file names or paths.

Rules are defined using --include to include files and --exclude to exclude files. For example: --include="\*.txt" and --exclude="\*".

You can specify rules on the command line or in a rule file. You can combine and repeat rules in any order. All rules form a list. OSS applies the following rules to filter results:

-   Rules are applied in order, from left to right on the command line and top to bottom in the rule file.
    
-   OSS checks each file or path against the rules immediately to determine whether to include or exclude it.
    
-   OSS stops checking after the first matching rule, whether it is an include or exclude rule.
    
-   If no rule matches, OSS includes the file or path by default.
    
-   In a local file system, excluding a folder also excludes all its subfolders and files.
    
-   In buckets, directories do not exist. OSS filters each file individually.
    

OSS uses glob pattern matching. Common patterns include the following:

-   If a pattern starts with `/`, it must match the start of the path. Otherwise, it can match any level of the path name.
    
-   If a pattern ends with `/`, it matches only directories. Otherwise, it matches directories or files. For example: dir/.
    
-   A `/` in the middle of a pattern represents a path separator. For example: subdir/test.txt.
    
-   `*` matches any sequence of characters, but does not match `/`. For example, \`\*.text\` is a common pattern.
    
-   `**` at the end matches any number of characters, including `/`. For example: dir/\*\* matches the path "dir/subdir/xx/test.txt".
    
-   `?` matches any single character except /.
    
-   `[]` matches a single character from a specified set. For example: \[a-z\] matches a lowercase letter. \[0-9\] matches a digit.
    
-   By default, a pattern must match the end of the path. For example: foo matches "foo" and "dir/foo", but not "dir/foo1" or "foo/xx".
    
-   The matched part of the path must be a complete directory or file name. It cannot split a name in the middle. For example: foo does not match "xxx/afoo". abc/foo does not match "subdir/aabc/foo".
    

**Note**

On Windows systems, use `/` as the path separator, not `\`.

A path or file name filter is built from one or more filtering rules specified on the command line. The supported syntax and parameters for filtering rules are as follows:

**Item**

**Description**

Filter rule syntax

-   rule pattern: Glob pattern matching.
    
-   rule filename: Path to a rule file that uses glob pattern matching.
    
-   rule modifiers pattern: Instruction for glob pattern matching. `+` means include. Objects that match the rule are included in the result. `-` means exclude. Objects that match the rule are excluded from the result.
    

Filter rule parameters

-   \--include
    
-   \--include-from
    
-   \--exclude
    
-   \--exclude-from
    
-   \--filter
    
-   \--filter-from
    

Common options and descriptions follow:

**Option**

**Description**

\--include

\--exclude

Each option takes a pattern directly as an argument. Each option defines one rule. To use multiple rules, repeat the option.

Example: `--include "*.txt" --include "*.js" --exclude "*.jpg"` includes all `.txt` and `.js` files, but excludes all `.jpg` files.

The following command recursively downloads files that match the filter rules from the oss://examplebucket/exampledir/ directory in Alibaba Cloud OSS to the local localdir/ directory. The rules include all `.txt` and `.js` files, but exclude all `.jpg` files.

```
ossutil cp -r oss://examplebucket/exampledir/ localdir/ --include "*.txt" --include "*.js" --exclude "*.jpg"
```

\--filter

Each option takes an instruction and a pattern as an argument. Each option defines one rule. To use multiple rules, repeat the option.

Example: `--filter "+ *.txt" --filter "+ *.js" --filter "- *.jpg"` includes all `.txt` and `.js` files, but excludes all `.jpg` files.

-   The + symbol means include. Objects that match the rule are included in the result.
    
-   The - symbol means exclude. Objects that match the rule are excluded from the result.
    

The following command recursively downloads files that match the filter rules from the oss://examplebucket/exampledir/ directory in Alibaba Cloud OSS to the local localdir/ directory. The rules exclude `.txt` and `.js` files, but include only `.png` files.

```
ossutil cp -r oss://examplebucket/exampledir/ localdir/ --filter "- *.txt" --filter "- *.js" --filter "+ *.png"
```

\--include-from

\--exclude-from

Each option takes the path to a rule file as an argument. Each line in the rule file is a glob pattern. To use multiple rule files, repeat the option.

Rules read with --include-from are inclusion rules. Rules read with --exclude-from are exclusion rules.

Example: `--include-from include-file.txt --exclude-from exclude-file.txt` includes all `.txt` and `.js` files, but excludes all `.jpg` files.

The include-file.txt rule file contains:

```
 *.txt
 *.js
```

The rule file include-file.txt contains the following content:

```
 *.jpg
```

\--filter-from

Each option takes the path to a rule file as an argument. Each line in the rule file is an instruction and a glob pattern.

To use multiple rule files, repeat the option.

Example: `--filter-from filter-file.txt`. The filter-file.txt rule file contains:

```
 # a filter rule file
 + *.txt
 + *.js
 - **
```

Additional notes:

-   When reading from a rule file, OSS processes rules top to bottom and ignores blank lines and comment lines that start with `#` or `;`.
    
-   If the file path is `-`, OSS reads from standard input (stdin). You can configure only one such rule.
    
-   If you use --include or --include-from rules, OSS adds a `- **` rule to the end of the rule list.
    
-   If you use --filter+ pattern, OSS does not add a `- **` rule to the end of the rule list.
    

Example: To configure a rule that includes only files with the .jpg extension using --filter, use --filter "+ \*.jpg" --filter "- \*\*".

**Note**

You cannot mix --filter or --filter-from with --include or --include-from or --exclude or --exclude-from.

### **Filter by Path or File List**

You can specify a list of paths or file names on the command line and add it to the filter list. Supported options are:

**Option**

**Description**

\--files-from

Reads a list of paths or file names from a file. To use multiple list files, repeat the option.

When processing each line in the list file, OSS trims leading and trailing whitespace and ignores comment lines that start with `#` or `;`.

\--files-from-raw

Reads a list of paths or file names from a file. To use multiple list files, repeat the option.

When processing each line in the list file, OSS does not trim leading or trailing whitespace and does not ignore comment lines that start with `#` or `;`.

**Note**

When you use path or file list matching rules, OSS ignores other matching rules.

### **Filter by File Time**

You can set time-based filter rules to transfer only files or objects modified within a specific time range.

Time-based filter rules support two modes: relative time and absolute time. Supported parameters are:

**Parameter**

**Description**

\--min-age

Duration

Processes only files modified before the specified time interval. Default unit: seconds. Supported suffixes: ms, s, m, h, d, w, M, y. Example: 1h means 1 hour.

**Note**

`--min-age 1h` processes only files modified 1 hour ago or earlier.

\--max-age

Duration

Processes only files modified within the specified time interval. Default unit: seconds. Supported suffixes: ms, s, m, h, d, w, M, y. Example: 1h means 1 hour.

**Note**

`--max-age 1h` processes only files modified within the last hour.

\--min-mtime

Time

Processes only files modified after the specified time. Time format: UTC. Example: 2006-01-02T15:04:05.

**Note**

`--min-mtime "2006-01-02T15:04:05"` processes only files modified after January 2, 2006 at 15:04:05.

\--max-mtime

Time

Processes only files modified before the specified time. Time format: UTC, for example, 2006-01-02T15:04:05.

**Note**

`--max-mtime "2006-01-02T15:04:05"` processes only files modified before January 2, 2006 at 15:04:05.

Additional notes:

-   Supported suffixes for --min-age and --max-age: ms (milliseconds), s (seconds), m (minutes), h (hours), d (days), w (weeks), M (months), y (years).
    
-   You can use decimal numbers with suffixes. For example: 1.5d means one and a half days.
    

Example: List files or objects modified more than three days ago.

```
ossutil ls oss://bucket/ --min-age 3d
```

### **Filter by File Size**

You can set file size filter rules to transfer only files or objects within a specific size range.

File size filter rule parameters are:

**Parameter**

**Description**

\--min-size

Does not transfer any files smaller than the specified size. Default unit: bytes (B). Supported suffixes: K (KiB), M (MiB), G (GiB), T (TiB), P (PiB), E (EiB). Example: 1K means 1024 bytes.

\--max-size

Does not transfer any files larger than the specified size. Default unit: bytes (B). Supported suffixes: K (KiB), M (MiB), G (GiB), T (TiB), P (PiB), E (EiB). Example: 1K means 1024 bytes.

Additional notes:

-   Supported suffixes: K (KiB) = 1024 bytes, M (MiB), G (GiB), T (TiB), P (PiB), E (EiB).
    
-   You can use decimal numbers with suffixes. For example: 0.5K.
    

Example: List files or objects smaller than 1 MiB.

```
ossutil ls oss://bucket/ --max-size 1M
```

### **Object-based metadata matching rules**

Metadata filters work like path or file name filters, but they apply only to objects in buckets.

In metadata filters, object metadata is defined as key=value and supports glob pattern matching.

Supported options are:

-   \--metadata-include
    
-   \--metadata-exclude
    
-   \--metadata-filter
    
-   \--metadata-filter-from
    

Supported object metadata includes:

-   Storage class: Use x-oss-storage-class=value. Valid values: Standard, IA, Archive, ColdArchive, DeepColdArchive.
    
-   Object type: Use x-oss-object-type=value. Valid values: Normal, Multipart, Appendable, Symlink.
    
-   Restore status: Use x-oss-restore=value. Specify the actual value.
    
-   Content-Type: Use content-type=value. Specify the actual value.
    
-   User-defined metadata: Use x-oss-meta-aaa=value, where aaa is lowercase. Specify the actual value.
    

Example: List objects with storage classes Archive, ColdArchive, or DeepColdArchive.

```
ossutil ls oss://bucket/ --metadata-include "x-oss-storage-class=*Archive"
```
