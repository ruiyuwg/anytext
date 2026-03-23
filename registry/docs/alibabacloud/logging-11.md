Use the `logging` command to enable, query, or disable access logging for an OSS bucket. When logging is enabled, OSS generates log objects every hour based on a predefined naming rule and stores them in a destination bucket you specify.

## Prerequisites

Before you begin, ensure that you have:

-   The required permissions for your intended operation:
    
    **Operation**
    
    **Required permissions**
    
    Enable logging (same bucket)
    
    `oss:PutBucketLogging`
    
    Enable logging (different bucket)
    
    `oss:PutBucketLogging`, `oss:PutObject`
    
    Query logging configurations
    
    `oss:GetBucketLogging`
    
    Disable logging
    
    `oss:DeleteBucketLogging`
    
    For instructions on granting these permissions, see [Attach a custom policy to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip).
    
-   ossutil installed. For ossutil 1.6.16 and later, use `ossutil` directly as the binary name. For earlier versions, update the binary name based on your operating system. See [ossutil command reference](/help/en/oss/developer-reference/ossutil#task-2012304).
    

## Enable logging

If logging is already enabled for the bucket, this command overwrites the existing configuration.

```
ossutil logging --method put oss://<bucketname> oss://<targetbucket>/[prefix]
```

**Parameter**

**Required**

**Description**

`bucketname`

Yes

The source bucket to generate log objects for.

`targetbucket`

Yes

The destination bucket to store log objects in. Can be the same as the source bucket. Must be in the same region and belong to the same Alibaba Cloud account.

`prefix`

No

The directory in the destination bucket where log objects are stored. If omitted, log objects are stored in the root directory.

**Examples**

Store log objects for `srcbucket` in the root directory of `destbucket`:

```
ossutil logging --method put oss://srcbucket oss://destbucket
```

Expected output:

```
0.098601(s) elapsed
```

Store log objects for `srcbucket` in the `destdir` directory of `destbucket`:

```
ossutil logging --method put oss://srcbucket oss://destbucket/destdir
```

## Query logging configurations

```
ossutil logging --method get oss://<bucketname> [local_xml_file]
```

**Parameter**

**Required**

**Description**

`bucketname`

Yes

The bucket whose logging configurations you want to query.

`local_xml_file`

No

A local file to save the configurations to (for example, `localfile.txt`). If omitted, the configurations are printed to stdout.

**Examples**

Query the logging configurations of `examplebucket` and save them to `localfile.txt`:

```
ossutil logging --method get oss://examplebucket localfile.txt
```

Expected output:

```
0.212407(s) elapsed
```

Query the logging configurations of `examplebucket` and print them to stdout:

```
ossutil logging --method get oss://examplebucket
```

Expected output — the configuration below shows that log objects are stored in the root directory of `destbucket`:

```
<?xml version="1.0" encoding="UTF-8"?>
  <BucketLoggingStatus>
      <LoggingEnabled>
          <TargetBucket>destbucket</TargetBucket>
          <TargetPrefix></TargetPrefix>
      </LoggingEnabled>
  </BucketLoggingStatus>

0.109979(s) elapsed
```

## Disable logging

Before you disable logging, delete any log objects you no longer need to avoid unnecessary storage costs. Use lifecycle rules to automate this cleanup. See [Lifecycle rules based on the last modified time](/help/en/oss/user-guide/lifecycle-rules-based-on-the-last-modified-time#concept-y2g-szy-5db).

```
ossutil logging --method delete oss://<bucketname>
```

`bucketname` is the bucket for which you want to disable logging.

**Example**

Disable logging for `examplebucket`:

```
ossutil logging --method delete oss://examplebucket
```

Expected output:

```
0.212409(s) elapsed
```

## Common options

To access a bucket in a different region or owned by a different Alibaba Cloud account, append the following options:

**Option**

**Description**

`-e`

Endpoint of the region where the bucket is located

`-i`

AccessKey ID of the target account

`-k`

AccessKey secret of the target account

**Example**

Store log objects for `testbucket` (in the China (Hangzhou) region, owned by another account) in `destbucket`:

```
ossutil logging --method put oss://testbucket oss://destbucket -e oss-cn-hangzhou.aliyuncs.com -i yourAccessKeyID -k yourAccessKeySecret
```

For a full list of common options, see [Common options](/help/en/oss/developer-reference/view-options).

## What's next

-   [Logging](/help/en/oss/user-guide/logging#concept-t3h-4hd-5db) — Learn how OSS generates and names log objects.
    
-   [Lifecycle rules based on the last modified time](/help/en/oss/user-guide/lifecycle-rules-based-on-the-last-modified-time#concept-y2g-szy-5db) — Automate deletion of log objects to reduce storage costs.
