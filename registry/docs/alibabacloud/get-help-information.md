ossutil's built-in help system lets you look up command syntax, flags, and examples directly in your terminal.

## Built-in help commands

Append `-h` or `--help` to any command to see its help text. Use `ossutil [topic]` to read help for a specific topic.

**Description**

**Command**

List all available commands

`ossutil -h`

Show help for the `cp` command

`ossutil cp -h`

List all subcommands in the `api` command set

`ossutil api -h`

Show help for the `api put-bucket-cors` subcommand

`ossutil api put-bucket-cors -h`

Show help for the `filter` topic

`ossutil filter`

## Command help reference

ossutil commands fall into two categories:

-   **Parent commands** — top-level commands that group related subcommands (for example, `api`, `cp`, `ls`)
    
-   **Subcommands** — commands that perform a specific action and contain no further subcommands (for example, `api put-bucket-cors`, `cat`)
    

### Parent commands

Help for a parent command includes five sections:

**Section**

**What it tells you**

Description

What the parent command does

Usage

The syntax pattern for the command

Available commands

All subcommands grouped under this parent

Additional help topics

Extra topics you can explore with `ossutil [topic]`

Other help information

Additional reference lines, such as how to get help for a specific command or topic

**Example: `ossutil -h`**

```
ossutil is a tool for managing OSS (Object Storage Service) data.

Usage: ossutil [command]

Available Commands:
  api         The API-level commands
  append      Append content to a appendable object
  cat         Concatenate an object to standard output
  config      Creates a config file and stores configuration settings and credentials
  cp          Upload, Download or Copy Objects
  du          Get the bucket or the specified prefix(directory) storage size
  hash        Get the hash value of file
  help        Help about any command
  ls          List buckets or objects
  mb          Creates a bucket
  mkdir       Create an object with name suffix '/'
  presign     Generate a pre-signed URL for object
  probe       Detection command
  rb          Delete bucket
  restore     Restore frozen state object to read ready status
  revert      Revert the deleted object to the latest versioning state
  rm          Deletes objects
  set-props   Set the property of objects
  stat        Display meta information of bucket or objects
  sync        Sync the local file directory or objects from the source to the destination
  update      Update ossutil
  version     Show version

Additional help topics:
  filter      more information about filter flags, and how to use it in commands

Use "ossutil [command] --help" for more information about a command.
Use "ossutil [topic]" for more information about a topic.
```

### Subcommands

Help for a subcommand includes six sections:

**Section**

**What it tells you**

Description

What the subcommand does and any required permissions

Usage

The full syntax, including required arguments and `[flags]` for optional flags

Alias

An alternative name for the command, if one exists

Examples

Ready-to-run commands you can adapt for your use case

Flags

Flags specific to this subcommand

Global flags

Flags shared across all commands

In the Usage line, arguments in square brackets (`[flags]`) are optional. Boolean flags like `--dry-run` take no value — include the flag to enable the behavior, omit it to disable.

**Example 1: `ossutil cat -h --language en`**

```
Concatenate an object to standard output.
To run this command, you must have the oss:GetObject permissions.

Usage: ossutil cat oss://bucket/object [flags]

Examples:

1) View the content of the example.txt object in the examplebucket bucket.
  ossutil cat oss://examplebucket/example.txt

2) View the content of the example.txt object with version id CAEQARiBgID8rumR2h*** in the examplebucket.
  ossutil cat oss://examplebucket/example.txt --version-id CAEQARiBgID8rumR2h***

3) Specify a range and view the content of the example.txt object in the examplebucket bucket.
  Only print the first 10 characters
  ossutil cat oss://examplebucket/example.txt --head 10

  Only print the last 10 characters
  ossutil cat oss://examplebucket/example.txt --tail 10

  Only print all characters from offset 10
  ossutil cat oss://examplebucket/example.txt --offset 10

  Only print 20 characters from offset 10
  ossutil cat oss://examplebucket/example.txt --offset 10 --count 20

Flags:
      --count int              Only print N characters (default -1)
      --encoding-type string   The encoding type of object name or file name that user inputs, valid value(s): "url"
      --head int               Only print the first N characters
      --offset int             Start printing at offset N
      --request-payer string   The payer of the request. set this value if you want pay for requester, valid value(s): "requester"
      --tail int               Only print the last N characters
      --version-id string      Specifies the object's version id

Global Flags:
  -i, --access-key-id string        AccessKeyID while access oss
  -k, --access-key-secret string    AccessKeySecret while access oss
      --addressing-style string     The style in which to address endpoints (default "virtual"), valid value(s): "virtual","path","cname"
  -c, --config-file string          path of the configuration file (default "~\\.ossutilconfig")
      --connect-timeout int         the client connection timed out, the unit is: s. (default 10)
  -n, --dry-run                     do a trial run with no permanent changes
  -e, --endpoint string             the domain names that other services can use to access OSS.
  -h, --help                        help for the command
      --language string             The display text language
      --loglevel string             the debug message level (default "off"), valid value(s): "off","info","debug"
      --mode string                 Specifies the authentication mode, valid value(s): "AK","StsToken","EcsRamRole","Anonymous"
      --output-format string        the formatting style for command output (default "raw")
      --output-properties strings   the properties of output format
      --output-query string         a JMESPath query to use in filtering the response data
      --profile string              Specific profile from your config file.
      --read-timeout int            the client read timed out, the unit is: s. (default 20)
      --region string               the region in which the bucket is located.
      --retry-times int             retry times when fail (default 10)
      --sign-version string         The version of the signature algorithm (default "v4"), valid value(s): "v1","v4"
      --skip-verify-cert            specifies that the oss server's digital certificate file will not be verified
  -t, --sts-token string            STSToken while access oss
```

**Example 2: `ossutil api put-bucket-cors -h --language en`**

```
Configures cross-origin resource sharing (CORS) rules for a bucket.
*   To call this operation, you must have the oss:PutBucketCors permission.
*   Disabled-by-default design
    By default, CORS is disabled for a bucket. All cross-origin requests are not allowed.

*   Overwriting semantics
    If you call the PutBucketCors operation to configure a new CORS rule for a bucket for which a CORS rule is already configured, the existing rule is overwritten.

*   Use of CORS in applications
    Before you can use CORS in applications, you must call the PutBucketCors operation to configure a CORS rule to enable CORS.
    For example, you must call the PutBucketCors operation to configure a CORS rule to access Object Storage Service (OSS) applications from example.com by using the XMLHttpRequest feature of the browser. You must configure the CORS rule in the XML format.

*   CORS rule matching
    When OSS receives a cross-region request or an OPTIONS request, OSS reads the CORS rules configured for the corresponding bucket and performs permission checks. OSS checks the rules in turn. If OSS finds the first match, the corresponding header fields are returned in the response. If the request fails to match the CORS rules, the CORS-related header fields are not returned in the response.
    OSS considers that a cross-origin request or an OPTIONS request matches a CORS rule only when the request meets the following conditions:

    *   The origin from which the cross-origin request is sent matches one of the values of AllowedOrigin in the CORS rule.
    *   The method of the cross-origin request such as GET or PUT or the method that corresponds to Access-Control-Request-Method in the OPTIONS request matches one of the values of AllowedMethod in the CORS rule.
    *   Each header that is included in Access-Control-Request-Headers in the OPTIONS request matches one of the values of AllowedHeader in the CORS rule.

More description of this api, see also: https://www.alibabacloud.com/help/en/oss/developer-reference/putbucketcors

Usage: ossutil api put-bucket-cors --bucket value --cors-configuration value [flags]

Examples:

--cors-configuration supports both XML and JSON syntax,
and when the option value contains a file:// prefix, it means that the configuration is read from the file.

XML Syntax:
<CORSConfiguration>
  <CORSRule>
    <AllowedOrigin>string</AllowedOrigin>
    ...
    <AllowedMethod>string</AllowedMethod>
    ...
    <AllowedHeader>string</AllowedHeader>
    <ExposeHeader>string</ExposeHeader>
    ...
    <MaxAgeSeconds>integer</MaxAgeSeconds>
  </CORSRule>
  ...
  <ResponseVary>boolean</ResponseVary>
</CORSConfiguration>

JSON Syntax:
{
  "CORSRule": [
    {
      "AllowedOrigin": ["string", ...],
      "AllowedMethod": ["string", ...],
      "AllowedHeader": "string",
      "ExposeHeader": ["string", ...],
      "MaxAgeSeconds": integer
    },
    ...
  ],
  "ResponseVary": boolean
}

1) Allows cross-origin PUT and GET requests from www.aliyun.com, and specifies that the browser caches the response to request for 10,000 seconds.

Uses xml config file, cors-configuration.xml as follows:
<CORSConfiguration>
  <CORSRule>
    <AllowedOrigin>www.aliyun.com</AllowedOrigin>
    <AllowedMethod>PUT</AllowedMethod>
    <AllowedMethod>GET</AllowedMethod>
    <MaxAgeSeconds>10000</MaxAgeSeconds>
  </CORSRule>
</CORSConfiguration>

ossutil api put-bucket-cors --bucket examplebucket --cors-configuration file://cors-configuration.xml

Uses json config file, cors-configuration.json as follows:
{
  "CORSRule": {
    "AllowedOrigin": ["www.aliyun.com"],
    "AllowedMethod": ["PUT","GET"],
    "MaxAgeSeconds": 10000
  }
}
ossutil api put-bucket-cors --bucket examplebucket --cors-configuration file://cors-configuration.json

Uses json string in command line:
ossutil api put-bucket-cors --bucket examplebucket --cors-configuration  "{\"CORSRule\":{\"AllowedOrigin\":[\"www.aliyun.com\"],\"AllowedMethod\":[\"PUT\",\"GET\"],\"MaxAgeSeconds\":10000}}"


Flags:
      --bucket string               The name of the bucket
      --cors-configuration string   The container that stores the information about CORS rules of the bucket

Global Flags:
  -i, --access-key-id string        AccessKeyID while access oss
  -k, --access-key-secret string    AccessKeySecret while access oss
      --addressing-style string     The style in which to address endpoints (default "virtual"), valid value(s): "virtual","path","cname"
  -c, --config-file string          path of the configuration file (default "~\\.ossutilconfig")
      --connect-timeout int         the client connection timed out, the unit is: s. (default 10)
  -n, --dry-run                     do a trial run with no permanent changes
  -e, --endpoint string             the domain names that other services can use to access OSS.
  -h, --help                        help for the command
      --language string             The display text language
      --loglevel string             the debug message level (default "off"), valid value(s): "off","info","debug"
      --mode string                 Specifies the authentication mode, valid value(s): "AK","StsToken","EcsRamRole","Anonymous"
      --output-format string        the formatting style for command output (default "raw")
      --output-properties strings   the properties of output format
      --output-query string         a JMESPath query to use in filtering the response data
      --profile string              Specific profile from your config file.
      --read-timeout int            the client read timed out, the unit is: s. (default 20)
      --region string               the region in which the bucket is located.
      --retry-times int             retry times when fail (default 10)
      --sign-version string         The version of the signature algorithm (default "v4"), valid value(s): "v1","v4"
      --skip-verify-cert            specifies that the oss server's digital certificate file will not be verified
  -t, --sts-token string            STSToken while access oss
```

## Flag data types

Each flag entry in the help output includes a data type after the flag name. Use the table below to interpret the type and format your input correctly.

**Data type**

**Format**

**Example**

`string`

Letters, digits, symbols, and spaces (ASCII). Enclose values that contain spaces in double quotation marks.

`--acl private`

Boolean

No value — include the flag to enable, omit to disable.

`--dry-run`

`int`

Unsigned integer.

`--read-timeout 10`

`Time`

ISO 8601 timestamp (DateTime or Date format).

`--max-mtime 2006-01-02T15:04:05`

`SizeSuffix`

A number followed by an optional unit. Default unit: B. Supported units: K (KiB), M (MiB), G (GiB), T (TiB), P (PiB), E (EiB).

`--min-size 1024` or `--min-size 1K`

`Duration`

A number followed by a time unit. Default unit: s (seconds). Supported units: ms, s, m, h, d, w, M, y. Decimal values are accepted.

`--min-age 1.5d`

`strings`

Specify the flag once or multiple times. Each occurrence accepts a single value or comma-separated values.

`--metadata user=jack --metadata address=china`

`stringArray`

Specify the flag once or multiple times. Each occurrence accepts exactly one value.

`--include *.jpg --include *.txt`
