Alibaba Cloud CLI integrates `ossutil`, the command-line interface (CLI) for Object Storage Service (OSS). This integration lets you manage OSS resources in a unified CLI environment. This topic describes how to use ossutil with Alibaba Cloud CLI.

## **Background**

-   `ossutil` lets you manage OSS data from Windows, Linux, or macOS systems. It is integrated as a plugin into Alibaba Cloud CLI. You can call `ossutil` directly from Alibaba Cloud CLI to manage core OSS resources, such as buckets and objects.
    
-   Starting from `version 3.0.304`, Alibaba Cloud CLI integrates `[ossutil 2.0](/help/en/oss/developer-reference/ossutil-overview/)` to provide a more stable and efficient user experience. It is compatible with both `ossutil 1.0` and `ossutil 2.0`, and the [commands of ossutil 1.0](#8770f3b81e5xp) can still be used. We recommend that you upgrade Alibaba Cloud CLI to the latest version to take advantage of all the new features and performance improvements of `ossutil 2.0`.
    
-   The main differences between `ossutil 1.0` and `ossutil 2.0` in Alibaba Cloud CLI are as follows:
    
    **Command call differences**
    
    The command has been upgraded from `oss` to `ossutil` in the new version, which better differentiates feature modules and supports more advanced features.
    
    **Version**
    
    **Command format**
    
    ossutil 1.0
    
    `aliyun oss`
    
    ossutil 2.0
    
    `aliyun ossutil`
    
    **Note**
    
    The command changes from `oss` to `ossutil` in the new version. If you want to use `ossutil 2.0`, you must update the command in your scripts or automated tasks.
    
    **Command differences**
    
    Item
    
    ossutil 1.0
    
    ossutil 2.0
    
    Bucket configurations
    
    Categorized by feature under the root command, such as logging and lifecycle.
    
    -   Each command corresponds to one API operation and is placed under the ossutil api subcommand.
        
    -   Configuration parameters support both XML and JSON formats.
        
    -   Supports format conversion for output content, such as converting the output to JSON.
        
    
    rm command
    
    -   Supports deleting buckets.
        
    -   Supports deleting multiple data types in a single operation, such as deleting objects and parts at the same time.
        
    
    Example: `rm oss://bucket/prefix -r -f -m`
    
    -   Does not support deleting buckets. To delete a bucket, you can use the new rb command.
        
    -   Supports deleting only one data type in a single operation. For example, to delete objects and parts, you must call the command separately.
        
    
    Examples: `rm oss://bucket/prefix -r -f` and
    
    `rm oss://bucket/prefix -m -r -f`.
    
    Append command
    
    -   The command is appendfromfile.
        
    -   The data source supports only local paths.
        
    
    -   The command is append.
        
    -   Data sources support local paths, OSS paths, and standard input.
        
    
    cat command
    
    Supports outputting only the entire object content.
    
    Supports outputting parts of an object, such as the first 10 bytes or the last 10 bytes.
    
    cp command
    
    Copying between objects copies only data, not metadata or tags.
    
    When you copy between objects, you can use --copy-props to control the replication rules for metadata and tags: do not copy, copy metadata, or copy metadata and tags.
    
    By default, metadata and tags are copied.
    
    Modify object attributes (ACLs, storage class, metadata, and tags)
    
    -   Use the set-acl command to modify an object's ACL.
        
    -   Use the set-meta command to modify an object's metadata.
        
    -   Use the cp command to modify an object's storage class and tags.
        
    -   Use the object-tagging command to modify an object's tags.
        
    
    -   Object attribute modification commands are merged into a single command: set-props. You can select the appropriate API operation based on the attribute parameter that you need to modify to make attribute changes more efficient.
        
    -   Supports set-acl and set-meta through aliases, but the command-line parameters are different from the original commands.
        
    -   Supports rich metadata and tag modification directives, such as replace, update, purge, and delete.
        
    
    Presigning
    
    -   The command to generate a presigned URL is sign.
        
    -   The signature expiration time supports only time intervals, such as 120 seconds.
        
    
    -   The command to generate a presigned URL is presign.
        
    -   Supports the sign alias, but the command-line parameters are different from the original command.
        
    -   The signature expiration time supports both time intervals, such as 120 seconds, and absolute time settings.
        
    -   For V4 signatures, the maximum validity period for a presigned URL is 7 days.
        
    
    Version restoration
    
    Supports restoring only the latest object version by deleting the delete marker.
    
    -   Supports restoring the latest object version by deleting the delete marker.
        
    -   Supports restoring to a specified object version based on the version ID by copying the object version.
        
    -   Supports restoring to a specified object version based on time by copying the object version.
        
    
    Hash
    
    Supports calculating the hash of only local files.
    
    -   Supports calculating the hash of local files, object paths, and batch operations.
        
    
    sync
    
    -   Without the --delete parameter, the effect is the same as the cp command. It scans the source and copies data simultaneously, with no maximum quantity limit.
        
    -   With the --delete parameter, the data replication phase also uses the scan-and-copy mode.
        
    
    -   Regardless of whether the --delete parameter is set, a maximum quantity limit is imposed. The default is 1 million, and the maximum can be configured to 5 million.
        
    -   It first scans the source and destination lists, synchronizes the data, and then deletes destination files based on the --delete option. This provides better synchronization performance when combined with the --update or --size-only option.
        
    
    **Option differences**
    
    Item
    
    ossutil 1.0
    
    ossutil 2.0
    
    \--include
    
    \--exclude
    
    -   Supports only object or file name matching.
        
    -   If multiple "include" and "exclude" rules are specified, each rule is applied sequentially from left to right until a final match is determined.
        
    
    -   Supports object or file name matching.
        
    -   Supports object or file path matching.
        
    -   If multiple "include" and "exclude" rules are specified, rules are applied in order from left to right. If a rule (include or exclude) is matched, subsequent checks stop immediately.
        
    
    \--snapshot-path
    
    Supported
    
    Not supported
    
    \--encoding-type
    
    Applies to both input and output parameters.
    
    -   In high-level commands, this parameter applies only to input parameters, not the output result.
        
    -   In API-level commands, the meaning of this parameter is consistent with the corresponding parameter of the API operation.
        
    
    Exclusion options for the destination
    
    Supports only --update.
    
    Supports --update, --size-only, --checksum, and --ignore-existing.
    
    Speed limit
    
    Supports only upload speed limits using the --max-speed option.
    
    Supports upload and download speed limits using the --bandwidth-limit option.
    
    Default configurations
    
    Signature algorithm
    
    Uses signature V1 algorithm.
    
    Uses signature V4 algorithm. When you use the signature V4 algorithm, the maximum validity period is one week.
    
    HTTPS protocol
    
    If not specified, the HTTP protocol is used by default.
    
    If not specified, the HTTPS protocol is used by default.
    
    Object listing API
    
    Uses the ListObjects API operation.
    
    Uses the ListObjectsV2 API operation by default. You can switch to the ListObjects API operation using the --list-objects option.
    
    Client read/write timeout
    
    The default value is 1200 seconds.
    
    The default timeout is 20 seconds.
    
    Client connection timeout
    
    The default client connection timeout is 120 seconds.
    
    The default client connection timeout is 10 seconds.
    
    Resumable upload
    
    Resumable upload is enabled by default.
    
    Resumable upload is disabled by default.
    

## **ossutil 2.0**

**Note**

-   In the latest version of Alibaba Cloud CLI, ossutil 2.0 supports automatic checks and upgrades to the latest version. You do not need to run the `update` command.
    
-   The ossutil 2.0 version is independent of the Alibaba Cloud CLI version. Updates are not dependent on the CLI version.
    

### **Syntax**

The command syntax for ossutil 2.0 in Alibaba Cloud CLI is as follows:

```
aliyun ossutil command [argument] [flags]

aliyun ossutil command subcommond [argument] [flags]  

aliyun ossutil topic
```

-   `argument`: the parameter, which is a string.
    
-   `flags`: the option. Supports the short name style `-o[=value]/ -o [value]` and the long name style `--options[=value]/--options[value]`. If you specify an exclusive option multiple times, only the last value takes effect.
    

The following are command examples:

-   Command: `aliyun ossutil cat oss://bucket/object`
    
-   Multi-level command: `aliyun ossutil api get-bucket-cors --bucket bucketexample`
    
-   Helper command: `aliyun ossutil filter`
    

### **Commands**

ossutil 2.0 provides three types of commands: high-level commands, API-level commands, and auxiliary commands.

-   High-level commands: Used for common operations on objects or buckets, such as creating and deleting buckets, copying data, and modifying object attributes.
    
    **Command**
    
    **Description**
    
    [mb](/help/en/oss/developer-reference/mb-create-storage-space)
    
    Creates a bucket.
    
    [rb](/help/en/oss/developer-reference/rb-delete-bucket)
    
    Deletes a bucket.
    
    [du](/help/en/oss/developer-reference/du-get-size)
    
    Queries the size of a bucket or directory (prefix).
    
    [stat](/help/en/oss/developer-reference/stat2)
    
    Displays the description of a bucket or an object.
    
    [mkdir](/help/en/oss/developer-reference/mkdir-create-directory)
    
    Creates an object whose name ends with the `/` character.
    
    [append](/help/en/oss/developer-reference/append-append-upload)
    
    Appends content to the end of an appendable object.
    
    [cat](/help/en/oss/developer-reference/cat-output-file-contents)
    
    Sends object content to the standard output.
    
    [ls](/help/en/oss/developer-reference/ls-list-resources-under-the-account-level)
    
    Lists buckets or objects.
    
    [cp](/help/en/oss/developer-reference/cp-upload-download-and-copy-files/)
    
    Uploads, downloads, or copies an object.
    
    [rm](/help/en/oss/developer-reference/rm-deleted)
    
    Deletes an object.
    
    [set-props](/help/en/oss/developer-reference/set-props-set-object-properties)
    
    Sets object attributes.
    
    [presign](/help/en/oss/developer-reference/presign-generate-presigned-url)
    
    Generates a signed URL for an object.
    
    [restore](/help/en/oss/developer-reference/restore-unfrozen-file)
    
    Restores a frozen object.
    
    [revert](/help/en/oss/developer-reference/revert-recovery-version)
    
    Reverts an object to the specified version.
    
    [sync](/help/en/oss/developer-reference/sync-synchronizing-files/)
    
    Synchronizes directories or objects from the source to the destination.
    
    [hash](/help/en/oss/developer-reference/hash-calculate-crc64-or-md5)
    
    Calculates the hashof a file or an object.
    
-   API-level commands: Provide direct access to API operations and support the configuration parameters of the corresponding API operations.
    
    Command
    
    Description
    
    [put-bucket-acl](/help/en/oss/developer-reference/manage-bucket-access-permissions)
    
    Sets or modifies the ACL of a bucket.
    
    [get-bucket-acl](/help/en/oss/developer-reference/get-bucket-acl)
    
    Queries the ACL of a bucket.
    
    ....
    
    [put-bucket-cors](/help/en/oss/developer-reference/put-bucket-cors)
    
    Creates cross-origin resource sharing (CORS) rules.
    
    [get-bucket-cors](/help/en/oss/developer-reference/get-bucket-cors)
    
    Queries CORS rules.
    
    [delete-bucket-cors](/help/en/oss/developer-reference/delete-a-cross-domain-resource-sharing-rule)
    
    Deletes CORS rules.
    
    ...
    
-   Auxiliary commands: Used for tasks such as configuring files and accessing additional help information.
    
    Command
    
    Description
    
    [help](/help/en/oss/developer-reference/get-help-information)
    
    Gets help information.
    
    [config](/help/en/oss/developer-reference/config-create-configuration-file)
    
    Creates a configuration file to store configuration items and access credentials.
    
    [version](/help/en/oss/developer-reference/version-displays-version-information)
    
    Shows the version of ossutil.
    
    [probe](/help/en/oss/developer-reference/probe-probe-state)
    
    Performs a probe task.
    

### **Command-line options**

Command-line options in ossutil 2.0 are divided into global and local options. Global options apply to all commands. Local options apply only to specific commands. Command-line options have the highest priority and can override parameters set in configuration files or environment variables.

#### **Query command-line options**

Run the following command to query command-line options:

```
ossutil cp -h
```

Command output:

```
Flags:
      --acl string                         The access control list (ACL) of the object, valid value(s): "private","public-read","public-read-write","default"
      --bandwidth-limit SizeSuffix         Bandwidth limit in B/s, or use suffix B|K|M|G|T|P
      --bigfile-threshold SizeSuffix       The threshold of file size, the file size larger than the threshold will use multipart upload, download or copy, or use suffix B|K|M|G|T|P (default 100Mi)
      --cache-control string               The caching behavior of the web page when the object is downloaded
      --checkers int                       Number of checkers to run in parallel (default 16)
      --checkpoint-dir string              The specified directory for breakpoint continuation information
      --checksum                           Only copy the source file with different size and checksum(if available)
      --content-disposition string         The method that is used to access the object
      --content-encoding string            The method that is used to encode the object
      --content-type string                The mime type of object
      --copy-props string                  Determines which properties are copied from the source object, valid value(s): "none","metadata","default"
  -d, --dirs                               Return matching subdirectory names instead of contents of the subdirectory
      --encoding-type string               The encoding type of object name or file name that user inputs, valid value(s): "url"
      --end-with string                    The name of the object from which the list operation ends, include
      --exclude stringArray                Exclude files matching pattern
      --exclude-from stringArray           Read exclude patterns from file
      --expires string                     The expiration time of the cache in UTC
      --files-from stringArray             Read list of source-file names from file, ignores blank and comment line
      --files-from-raw stringArray         Read list of source-file names from file without any processing of lines
      --filter stringArray                 A file-filtering rule
      --filter-from stringArray            Read file filtering rules from a file
  -f, --force                              Operate silently without asking user to confirm the operation
      --ignore-existing                    Skip all files that already exist on destination
      --include stringArray                Don't exclude files matching pattern
      --include-from stringArray           Read include patterns from file
  -j, --job int                            Amount of concurrency tasks between multi-files (default 3)
      --list-objects                       Use ListObjects instead of ListObjectsV2 to list objects
      --max-age Duration                   Don't transfer any file older than this, in s or suffix ms|s|m|h|d|w|M|y (default off)
      --max-mtime Time                     Don't transfer any file younger than this, UTC time format (default off)
      --max-size SizeSuffix                Don't transfer any file larger than size, in B or suffix B|K|M|G|T|P, 1K(KiB)=1024B
      --metadata strings                   Specifies the object's user metadata, in key=value foramt
      --metadata-directive string          The method that is used to configure the metadata of the destination object, valid value(s): "COPY","REPLACE"
      --metadata-exclude stringArray       Exclude metadata matching pattern
      --metadata-filter stringArray        A metadata-filtering rule
      --metadata-filter-from stringArray   Read metadata filtering rules from a file
      --metadata-include stringArray       Don't exclude metadata matching pattern
      --min-age Duration                   Don't transfer any file younger than this, in s or suffix ms|s|m|h|d|w|M|y (default off)
      --min-mtime Time                     Don't transfer any file older than this, UTC time format (default off)
      --min-size SizeSuffix                Don't transfer any file smaller than size, in B or suffix B|K|M|G|T|P, 1K(KiB)=1024B
      --no-error-report                    Don't generate error report file during batch operation
      --no-progress                        The progress is not displayed
      --output-dir string                  Specifies the directory to place output file in, output file contains: error report file generated during batch operation (default "ossutil_output")
      --page-size int                      The number of results to return in each response to a list operation (default 1000), in the range 1 - 1000
      --parallel int                       Amount of concurrency tasks when work with a file
      --part-size SizeSuffix               The part size, calculated the suitable size according to file size by default, or use suffix B|K|M|G|T|P, in the range 100Ki - 5Gi
  -r, --recursive                          Operate recursively, if the option is specified, the command will operate on all match objects under the bucket, else operate on the single object.
      --request-payer string               The payer of the request. set this value if you want pay for requester, valid value(s): "requester"
      --size-only                          Only copy the source file with different size
      --start-after string                 The name of the object from which the list operation starts, not include
      --storage-class string               The storage class of the object, valid value(s): "Standard","IA","Archive","ColdArchive","DeepColdArchive"
      --tagging strings                    Specifies the tag of the destination object, in key=value foramt
      --tagging-directive string           The method that is used to configure tags for the destination object, valid value(s): "COPY","REPLACE"
  -u, --update                             Only copy when the source file is newer than the destination file

Global Flags:
  -i, --access-key-id string        AccessKeyID while access oss
  -k, --access-key-secret string    AccessKeySecret while access oss
      --addressing-style string     The style in which to address endpoints (default "virtual"), valid value(s): "virtual","path","cname"
      --cloudbox-id string          The Id of the cloud box. It is applicable to cloud box scenarios
  -c, --config-file string          The path of the configuration file (default "~/.ossutilconfig")
      --connect-timeout int         The client connection timed out, the unit is: s (default 10)
  -n, --dry-run                     Do a trial run with no permanent changes
  -e, --endpoint string             The domain names that other services can use to access OSS.
  -h, --help                        help for the command
      --language string             The display text language
      --log-file string             Specifies the log output file. When -, outputs to Stdout
      --loglevel string             The debug message level (default "off"), valid value(s): "off","info","debug"
      --mode string                 Specifies the authentication mode, valid value(s): "AK","StsToken","EcsRamRole","Anonymous"
      --output-format string        The formatting style for command output (default "raw")
      --output-properties strings   The properties of output format
      --output-query string         A JMESPath query to use in filtering the response data
      --profile string              Specific profile from your config file.
      --proxy string                Specifies the proxy server. When 'env', use HTTP_PROXY and HTTPS_PROXY environment variables
  -q, --quiet                       Quiet mode, print as little stuff as possible
      --read-timeout int            The client read timed out, the unit is: s (default 20)
      --region string               The region in which the bucket is located.
      --retry-times int             Retry times when fail (default 10)
      --role-arn string             Specifies the ARN of role
      --role-session-name string    Specifies the session name
      --sign-version string         The version of the signature algorithm (default "v4"), valid value(s): "v1","v4"
      --skip-verify-cert            Specifies that the oss server's digital certificate file will not be verified
  -t, --sts-token string            STSToken while access oss
```

#### **Use command-line options**

In command-line operations, some commands require additional parameters to specify the operation object or set options. For commands that require parameters, you must provide appropriate parameter values to achieve the intended function. For example:

```
ossutil ls --profile dev
```

The `ossutil ls --profile dev` command allows users to specify a specific configuration file using the parameter value `dev`. Options with parameters usually require a space or an equal sign (=) to separate the option name from the parameter value, such as `--profile dev` or `--profile=dev`. If a parameter value contains spaces, you must enclose the entire value in double quotes to ensure that the command is parsed correctly, such as `--description "OSS bucket list"`.

#### **Global command-line options**

Option

Type

Description

\-i, --access-key-id

string

The AccessKey ID used to access OSS.

\-k, --access-key-secret

string

The AccessKey secret used to access OSS.

\--addressing-style

string

The addressing style. Valid values:

-   virtual (default): the virtual hosting mode.
    
-   path: the path mode.
    
-   cname: the custom domain name mode.
    

\-c, --config-file

string

The path of the configuration file. Default value: `~\\.ossutilconfig`.

\--connect-timeout

int

The client connection timeout in seconds. Default value: 10. Unit: seconds.

\-n, --dry-run

/

Performs a trial run without making changes.

\-e, --endpoint

string

The endpoint of the region.

\-h, --help

/

Displays the help information of a specific command.

\--language

string

The display language.

\--loglevel

string

The log level. Valid values:

-   off (default)
    
-   info
    
-   debug
    

\--mode

string

The authentication mode. Valid values:

-   AK: the AccessKey pair.
    
-   StsToken: the temporary access credentials.
    
-   EcsRamRole: the RAM role attached to the Elastic Compute Service (ECS) instance.
    
-   Anonymous: anonymous access.
    

\--output-format

string

The output format. Default value: raw.

\--output-query

string

The JMESPath query condition.

\--profile

string

Specifies the profile in the configuration file.

\-q, --quiet

/

Enables the quiet mode to print the least information.

\--read-timeout

int

The client read/write request timeout. Unit: seconds. Default value: 20.

\--region

string

The region in which the data center is located. Example: cn-hangzhou.

\--retry-times

int

The number of retries when an error occurs. Default value: 10.

\--sign-version

string

The version of the signature algorithm. Valid values:

-   v1
    
-   v4 (default)
    

\--skip-verify-cert

/

Specifies that the digital certificate provided by the server is not verified.

\-t, --sts-token

string

The Security Token Service (STS) token used to access OSS.

\--proxy

string

The proxy server.

Configuration methods:

-   Direct configuration: You can directly specify the proxy server. Examples:
    
    -   `http://proxy.example.com:8080`
        
    -   `https://proxy.example.com:8443`
        
-   `env`: use the `HTTP_PROXY` and `HTTPS_PROXY` environment variables to obtain the proxy server information. You need to configure these environment variables in the operating system. Examples:
    
    -   `HTTP_PROXY=http://proxy.example.com:8080`
        
    -   `HTTPS_PROXY=https://proxy.example.com:8443`
        
    
    After you configure these environment variables, you can set the value of the proxy server option to `env`. Then, the system automatically uses the proxy settings specified by these environment variables.
    

\--log-file

string

The log output file. Valid values:

-   `-`: Logs are exported to stdout.
    
-   `File path`: After you specify a specific file path, logs are exported to the file.
    

If you do not specify a specific file path, logs are exported to the default configuration file.

\--cloudbox-id 

string

The ID of the CloudBox. This is applicable to CloudBox scenarios.

### **Option types**

Type

Option

Description

String

\--option string

-   A string argument can contain letters, digits, symbols, and spaces in the ASCII character set.
    
-   If a string contains spaces, enclose it in quotation marks.
    

Example: --acl private

Boolean

\--option

Turn on or off an option.

Example: --dry-run

Integer

\--option Int

The option takes an unsigned integer as its value.

Example: --read-timeout 10

The timestamp.

\--option Time

A timestamp (DateTime or Date) in the ISO 8601 format.

Example: --max-mtime 2006-01-02T15:04:05

Size suffix

\--option SizeSuffix

The size unit. The default unit is B. Other units include K (KiB), M (MiB), G (GiB), T (TiB), P (PiB), and E (EiB).

For example, a minimum size of 1024 bytes can be specified as:

\--min-size 1024

\--min-size 1K

Time unit

\--option Duration

The time unit. The default unit is seconds (s). Supported time units are milliseconds (ms), seconds (s), minutes (m), hours (h), days (d), weeks (w), months (M), and years (y).

The numerical value can be a decimal.

For example, a minimum time unit of 1.5 days can be specified as:

\--min-age 1.5d

String list

\--option strings

You can specify an option once or multiple times in a command. You can specify a single value or multiple comma-separated values for each occurrence of the option.

Example: --metadata user=jack,email=ja\*\*@test.com --metadata address=china

String array

\--option stringArray

You can specify an option once or multiple times in a command. You can specify only one value for each occurrence of the option.

Example: --include \*.jpg --include \*.txt

### **Load data from files**

In most cases, you specify parameter values directly in command lines. When you need to process complex values, loading values from a file provides more efficiency. When you chain commands, you must specify parameter values by using the standard input. When a parameter can take values by using different methods:

-   If the value starts with `file://`, data is loaded from the specified file.
    
-   If the value is `-`, data is loaded from the standard input.
    

For example, you want to create a CORS rule, which is configured in the JSON format. The following sample command creates the CORS rule by loading the CORS configuration from the cors-configuration.json file:

```
{
  "CORSRule": {
    "AllowedOrigin": ["www.aliyun.com"],
    "AllowedMethod": ["PUT","GET"],
    "MaxAgeSeconds": 10000
  }
}
```

```
aliyun ossutil api put-bucket-cors --bucket examplebucket --cors-configuration file://cors-configuration.json
```

The following sample command creates a CORS rule by taking JSON configuration data in the command line:

```
{"CORSRule":{"AllowedOrigin":["www.aliyun.com"],"AllowedMethod":["PUT","GET"],"MaxAgeSeconds":10000}}
```

```
aliyun ossutil api put-bucket-cors --bucket examplebucket --cors-configuration  "{\"CORSRule\":{\"AllowedOrigin\":[\"www.aliyun.com\"],\"AllowedMethod\":[\"PUT\",\"GET\"],\"MaxAgeSeconds\":10000}}"
```

The following sample command creates a CORS rule by taking the configuration from the standard input:

```
cat cors-configuration.json | aliyun ossutil api put-bucket-cors --bucket examplebucket --cors-configuration -
```

### **Control command output**

#### **Output format**

You can use the `--output-format` parameter in the du, stat, and ls commands and the subcommands of the api command to format the output. The following table describes the valid values of the --output-format option.

**Format**

**Description**

raw

Returns output in the raw format, that is, the format in which the server returns the content.

json

Returns the output in the JSON format.

yaml

Returns the output in the YAML format.

In the following example, the output of the `get-bucket-cors` command is in the raw format:

```
aliyun ossutil api get-bucket-cors --bucket bucketexample
<?xml version="1.0" encoding="UTF-8"?>
<CORSConfiguration>
  <CORSRule>
    <AllowedOrigin>www.aliyun.com</AllowedOrigin>
    <AllowedMethod>PUT</AllowedMethod>
    <AllowedMethod>GET</AllowedMethod>
    <MaxAgeSeconds>10000</MaxAgeSeconds>
  </CORSRule>
  <ResponseVary>false</ResponseVary>
</CORSConfiguration>
```

In the following example, the output is formatted in JSON:

```
aliyun ossutil api get-bucket-cors --bucket bucketexample --output-format json
{
  "CORSRule": {
    "AllowedMethod": [
      "PUT",
      "GET"
    ],
    "AllowedOrigin": "www.aliyun.com",
    "MaxAgeSeconds": "10000"
  },
  "ResponseVary": "false"
}
```

#### **Filter output**

ossutil provides a built-in JSON-based output query mechanism. You can use the `--output-query value` option to query output.

**Note**

The option applies only to subcommands in the API command set.

The output query feature is based on JMESPath. When you use the output query feature, the output is formatted in JSON, filtered based on JMESPath query expressions, and returned in the specified format. For more information about JMEPath, see [JMESPath Specification](https://jmespath.org/specification.html#).

In the following example, the get-bucket-cors command returns only the value of the AllowedMethod parameter:

```
aliyun ossutil api get-bucket-cors --bucket bucketexample --output-query CORSRule.AllowedMethod --output-format json
[
  "PUT",
  "GET"
]
```

#### **Human-readable display**

ossutil provides the `--human-readable` option that allows the data sizes and quantities in the output of the du and stat commands to be displayed in a more human-readable way. Specifically, data sizes are displayed in 1024-based KiB, MiB, GiB, TiB, and PiB, and quantities are displayed by using the 1000-based unit abbreviations k, m, g, t, and p.

Raw mode example

```
aliyun ossutil stat oss://bucketexample
ACL                         : private
AccessMonitor               : Disabled
ArchiveObjectCount          : 2
ArchiveRealStorage          : 10
ArchiveStorage              : 131072
...
StandardObjectCount         : 119212
StandardStorage             : 66756852803
Storage                     : 66756852813
StorageClass                : Standard
TransferAcceleration        : Disabled
```

Human-readable mode example

```
aliyun ossutil stat oss://bucketexample --human-readable
ACL                         : private
AccessMonitor               : Disabled
ArchiveObjectCount          : 2
ArchiveRealStorage          : 10
ArchiveStorage              : 131.072k
...
StandardObjectCount         : 119.212k
StandardStorage             : 66.757G
Storage                     : 66.757G
StorageClass                : Standard
TransferAcceleration        : Disabled
```

### **Command return codes**

When a call to ossutil is made by using a process, the echo information cannot be displayed in real time. When a process run finishes, a return code is displayed based on the result. You can run the following commands to display the return code for the previously executed command and use the return code for troubleshooting.

## Linux

Run the `echo $?` command to display the return code of the previously executed command.

## Windows

Run the `echo %errorlevel%` command to display the return code of the previously executed command.

## macOS

Run the `echo $?` command to display the return code of the previously executed command.

**Return code**

**Description**

0

Indicates success. The request sent to the server was handled successfully and the server returned status code 200.

1

Indicates a parameter error. For example, the required subcommand or parameter is missing, or the command or parameter is unknown.

2

Indicates a server error. The command successfully sent the request to the server, but the server returned an error (a status code other than 2xx).

3

Indicates a non-server-side error during calls to OSS SDK for Go.

4

Indicates a partial failure in batch processing, for example, by using the cp or rm command.

5

Indicates an interruption. The command was canceled by using `Ctrl`+`C`.

### **Examples**

-   Example 1: Upload the local file upload.rar to a bucket named bucket at a speed of 20 MB/s. The default unit is bytes per second (B/s).
    
    ```
    aliyun ossutil cp D:\\upload.rar oss://bucket/ --bandwidth-limit 20971520
    ```
    
-   Example 2: Upload the local file file.rar to a bucket named bucket at a speed of 50 MB/s. The specified unit is megabytes per second (MB/s).
    
    ```
    aliyun ossutil cp D:\\file.rar oss://bucket/dir -r --bandwidth-limit 50M
    ```
    
-   Example 3: Download the object download.rar from a bucket named bucket to the current directory and limit the download speed to 20 MB/s.
    
    ```
    aliyun ossutil cp oss://bucket/download.rar . --bandwidth-limit 20971520
    ```
    

## **ossutil 1.0**

### **Syntax**

```
aliyun oss [command] [args...] [options...]
```

### **Commands**

Command

Description

[access-monitor](/help/en/oss/developer-reference/access-monitor#concept-2295157)

Specifies the access tracking state of a bucket.

[appendfromfile](/help/en/oss/developer-reference/appendfromfile#concept-303823)

Appends content to an uploaded appendable object.

[bucket-cname](/help/en/oss/developer-reference/bucket-cname#concept-2107853)

Views the CNAME configuration of a bucket.

[bucket-encryption](/help/en/oss/developer-reference/bucket-encryption#concept-354612)

Adds, modifies, queries, or deletes the encryption configuration of a bucket.

[bucket-policy](/help/en/oss/developer-reference/bucket-policy-3#concept-1614438)

Adds, modifies, queries, or deletes the bucket policy configuration of a bucket.

[bucket-tagging](/help/en/oss/developer-reference/bucket-tagging#concept-354610)

Adds, modifies, queries, or deletes the tag configuration of a bucket.

[bucket-versioning](/help/en/oss/developer-reference/bucket-versioning#concept-610185)

Adds or queries the versioning configuration of a bucket.

[cat](/help/en/oss/developer-reference/cat#concept-303824)

Outputs object content to ossutil.

[config](/help/en/oss/developer-reference/config#concept-303826)

Creates a configuration file to store OSS access information.

[cors](/help/en/oss/developer-reference/cors-11#concept-303816)

Adds, modifies, queries, or deletes the CORS configuration of a bucket.

[cors-options](/help/en/oss/developer-reference/cors-options#concept-744986)

Tests whether a bucket allows a specified cross-domain access request.

[cp](/help/en/oss/developer-reference/cp/#concept-303810)

Uploads, downloads, or copies files.

[create-symlink](/help/en/oss/developer-reference/create-symlink#concept-303812)

Creates a symbolic link.

[du](/help/en/oss/developer-reference/du#concept-1614437)

Queries the storage usage of a specified bucket, object, or directory.

[getallpartsize](/help/en/oss/developer-reference/getallpartsize#concept-303821)

Queries the size of each part of incomplete multipart upload tasks in a bucket and the total size of these parts.

[hash](/help/en/oss/developer-reference/hash#concept-303827)

Calculates the CRC-64 or MD5 hash of a local file.

[help](/help/en/oss/developer-reference/help#concept-303825)

Queries the help information about a command. If you are unsure how to use a command, use the **help** command to get help information for that command.

[inventory](/help/en/oss/developer-reference/inventory#concept-2483196)

Adds inventory configurations to a bucket, or queries, lists, deletes the inventory configurations of a bucket.

[lifecycle](/help/en/oss/developer-reference/lifecycle#concept-744987)

Adds lifecycle configurations to a bucket, or modifies, queries, deletes the lifecycle configurations of a bucket.

[listpart](/help/en/oss/developer-reference/listpart#concept-303820)

Lists the parts generated in an incomplete multipart upload task initiated for an object.

[logging](/help/en/oss/developer-reference/logging-11#concept-303818)

Adds logging configurations to a bucket, or modifies, queries, deletes the logging configurations of a bucket.

[lrb](/help/en/oss/developer-reference/lrb#concept-2094023)

Lists the buckets that are located in a region or multiple regions.

[ls](/help/en/oss/developer-reference/ls#concept-303804)

Lists buckets, objects, or parts.

[mb](/help/en/oss/developer-reference/mb#concept-303803)

Create a bucket.

[mkdir](/help/en/oss/developer-reference/mkdir#concept-303815)

Creates a directory in a bucket.

[object-tagging](/help/en/oss/developer-reference/object-tagging-10#concept-1614441)

Adds tagging configurations to a bucket, or modifies, queries, deletes the tagging configurations of an object.

[probe](/help/en/oss/developer-reference/probe#concept-303814)

Monitors access to OSS. You can also run this command to troubleshoot issues that are caused by network faults or incorrect parameter settings during the upload and download process.

[read-symlink](/help/en/oss/developer-reference/read-symlink#concept-303813)

Reads the description of a symbolic link.

[referer](/help/en/oss/developer-reference/referer#concept-303819)

Adds hotlink protection configurations to a bucket, or modifies, queries, deletes the hotlink protection configurations of a bucket.

[replication](/help/en/oss/developer-reference/replication-1#concept-2102726)

Manages the Cross-Region Replication (CRR) configurations of a bucket.

[request-payment](/help/en/oss/developer-reference/request-payment#concept-1614439)

Configures the pay-by-requester mode for or queries the pay-by-requester configurations of a bucket.

[resource-group](/help/en/oss/developer-reference/resource-group#concept-2348486)

Configures a resource group for a bucket and queries information about the resource group.

[restore](/help/en/oss/developer-reference/restore#concept-303811)

Restores an object from the frozen state to the readable state.

[revert-versioning](/help/en/oss/developer-reference/revert-versioning#concept-2541372)

Recovers a deleted object to the most recent version of the object.

[rm](/help/en/oss/developer-reference/rm#concept-303805)

Deletes buckets, objects, or parts.

[set-acl](/help/en/oss/developer-reference/set-acl#concept-303807)

Configures the ACL for a bucket or an object.

[set-meta](/help/en/oss/developer-reference/set-meta#concept-303809)

Sets the metadata of an uploaded object.

[sign](/help/en/oss/developer-reference/sign#concept-303817)

Generates a signed URL for an object and shares the signed URL with third parties for downloads or previews.

[stat](/help/en/oss/developer-reference/stat#concept-303806)

Obtains the description of a specified bucket or object.

[style](/help/en/oss/developer-reference/style-set-picture-style#concept-2348661)

Configures image styles for a bucket.

[sync](/help/en/oss/developer-reference/sync/#concept-2105804)

Synchronizes local files to OSS, OSS objects to local disks, or objects between OSS paths.

[update](/help/en/oss/developer-reference/update#concept-303828)

Updates the ossutil version.

[website](/help/en/oss/developer-reference/website#concept-744988)

Adds static website hosting, redirection, or back-to-origin configurations to a bucket, or modifies, queries, deletes the static website hosting, redirection, or back-to-origin configurations of a bucket.

[worm](/help/en/oss/developer-reference/worm#concept-2036215)

Queries the retention policies configured for a bucket.

### **Examples**

-   Example 1: Create a bucket named `vmeixme` and set the storage class of the bucket to `Standard`.
    
    ```
    aliyun oss mb oss://vmeixme --storage-class Standard
    ```
    
-   Example 2: You can create a folder named `horse` in a bucket.
    
    ```
    aliyun oss mkdir oss://vmeixme/horse/
    ```
    
-   Example 3: List the OSS resources under your account, including buckets, objects, and parts, and set the maximum number of returned results to 20.
    
    ```
    aliyun oss ls --limited-num 20
    ```
    

## **FAQ**

If you encounter an error when you use `ossutil`, see the following topics to troubleshoot the error.

-   [FAQ about ossutil 1.0](/help/en/oss/developer-reference/faq-9)
    
-   [FAQ about ossutil 2.0](/help/en/oss/developer-reference/faq-related-to-ossutil2-0)
