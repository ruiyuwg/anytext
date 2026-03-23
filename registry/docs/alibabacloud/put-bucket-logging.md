Enables access logging for an OSS bucket. Once enabled, OSS generates access log objects every hour using predefined naming rules and writes them to the specified destination bucket.

For details on the logging feature, see [Logging](/help/en/oss/user-guide/logging).

## Permissions

By default, an Alibaba Cloud account has full permissions. RAM users and RAM roles have no permissions by default and must be granted access through [RAM Policy](/help/en/oss/ram-policy-overview/) or [Bucket Policy](/help/en/oss/user-guide/oss-bucket-policy/).

**API**

**Action**

**Description**

PutBucketLogging

`oss:PutBucketLogging`

Enables logging for a bucket.

PutBucketLogging

`oss:PutObject`

Required on the destination bucket when logs are written to a different bucket.

## Command syntax

```
ossutil api put-bucket-logging --bucket <value> --bucket-logging-status <value> [flags]
```

**Parameter**

**Type**

**Description**

`--bucket`

string

The name of the source bucket to enable logging for.

`--bucket-logging-status`

string

The logging configuration in XML or JSON format. Use the `file://` prefix to load the configuration from a file.

> This command maps to the [PutBucketLogging](/help/en/oss/developer-reference/putbucketlogging) API operation. For supported global flags, see [Command-line options](/help/en/oss/command-line-options#65785a4884d85).

## Configuration format

The `--bucket-logging-status` parameter accepts XML or JSON.

**XML:**

```
<BucketLoggingStatus>
  <LoggingEnabled>
    <TargetBucket>string</TargetBucket>
    <TargetPrefix>string</TargetPrefix>
  </LoggingEnabled>
</BucketLoggingStatus>
```

**JSON:**

```
{
  "LoggingEnabled": {
    "TargetBucket": "string",
    "TargetPrefix": "string"
  }
}
```

**Field**

**Description**

`TargetBucket`

The bucket where OSS stores the access log objects.

`TargetPrefix`

The prefix added to each log object name, used to organize logs within the destination bucket.

## Examples

The following examples enable logging for `examplebucket`, storing access logs in `dest-bucket` with the prefix `MyLog-`.

### Enable logging using an XML configuration file

1.  Create a file named `bucket-logging-status.xml`:
    
    ```
       <?xml version="1.0" encoding="UTF-8"?>
       <BucketLoggingStatus>
         <LoggingEnabled>
           <TargetBucket>dest-bucket</TargetBucket>
           <TargetPrefix>MyLog-</TargetPrefix>
         </LoggingEnabled>
       </BucketLoggingStatus>
    ```
    
2.  Run the command:
    
    ```
       ossutil api put-bucket-logging --bucket examplebucket --bucket-logging-status file://bucket-logging-status.xml
    ```
    

### Enable logging using a JSON configuration file

1.  Create a file named `bucket-logging-status.json`:
    
    ```
       {
         "LoggingEnabled": {
           "TargetBucket": "destBucket",
           "TargetPrefix": "MyLog-"
         }
       }
    ```
    
2.  Run the command:
    
    ```
       ossutil api put-bucket-logging --bucket examplebucket --bucket-logging-status file://bucket-logging-status.json
    ```
    

### Enable logging with an inline JSON string

```
ossutil api put-bucket-logging --bucket examplebucket --bucket-logging-status "{\"LoggingEnabled\":{\"TargetBucket\":\"destBucket\",\"TargetPrefix\":\"MyLog-\"}}"
```
