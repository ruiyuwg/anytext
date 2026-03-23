Creates a log download task in a specified project.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Sls/2020-12-30/CreateDownloadJob)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Sls/2020-12-30/CreateDownloadJob)

## **RAM authorization**

No authorization for this operation. If you encounter issues with this operation, contact technical support.

## Request syntax

```
POST /downloadjobs HTTP/1.1
```

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

project

string

Yes

The name of the project.

ali-test-project

body

object

Yes

The configuration of the log download task.

name

string

Yes

The name of the job. The name must meet the following requirements:

The job name must be unique within a project.

-   It can contain only lowercase letters, digits, hyphens (-), and underscores (\_).
    
-   It must start and end with a lowercase letter or a digit.
    
-   The name must be 2 to 64 characters in length.
    

download-123

description

string

No

The description of the log download task.

Log download task

configuration

object

Yes

The download configuration.

logstore

string

Yes

The source Logstore.

test-logstore

fromTime

integer

Yes

The start time. This is a UNIX timestamp that is accurate to the second.

1722406260

toTime

integer

Yes

The end time. This is a UNIX timestamp that is accurate to the second.

1722409860

query

string

Yes

The search statement.

\* | select \*

powerSql

boolean

No

Specifies whether to enable PowerSQL. Valid values: \`true\` and \`false\`.

**Valid values:**

-   true :
    
    Yes
    
-   false :
    
    No
    

true

allowInComplete

boolean

Yes

Specifies whether to allow the download of incomplete results. Valid values: \`true\` and \`false\`.

**Valid values:**

-   true :
    
    Yes
    
-   false :
    
    No
    

false

sink

object

Yes

The export configuration.

type

string

Yes

The type of the destination. Set the value to \`AliyunOSS\`.

**Valid values:**

-   AliyunOSS :
    
    AliyunOSS
    

AliyunOSS

contentType

string

Yes

The format of the downloaded file. Valid values: \`csv\` and \`json\`.

**Valid values:**

-   csv :
    
    The file is in CSV format.
    
-   json :
    
    The file is in JSON format.
    

csv

compressionType

string

Yes

The compression format of the file. Valid values: \`zstd\`, \`lz4\`, \`gzip\`, and \`none\`.

**Valid values:**

-   zstd :
    
    The file is compressed using zstd.
    
-   lz4 :
    
    The file is compressed using lz4.
    
-   gzip :
    
    The file is compressed using gzip.
    
-   none :
    
    The file is not compressed.
    

none

roleArn

string

No

The Alibaba Cloud Resource Name (ARN) of the RAM role to use for the download.

acs:ram::0123456789:role/aliyunlogdefaultrole

bucket

string

No

The destination Object Storage Service (OSS) bucket.

oss-test-bucket

prefix

string

No

The prefix of the path in the destination OSS bucket.

download/

displayName

string

Yes

The display name.

download-123456789

## Response elements

**Element**

**Type**

**Description**

**Example**

None defined.

## Examples

Success response

`JSON` format

```
{}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

IdempotentParameterMismatch

The request uses the same client token as a previous, but non-identical request. Do not reuse a client token with different requests, unless the requests are identical.

See [Error Codes](https://api.alibabacloud.com/document/Sls/2020-12-30/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Sls/2020-12-30/CreateDownloadJob#workbench-doc-change-demo) for a complete list.
