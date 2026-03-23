Sets or replaces the lifecycle configuration for a bucket. Use lifecycle rules based on last modified time or last access time to automatically transition objects to lower-cost storage classes, delete expired objects, and clean up incomplete multipart uploads.

**Warning**

This command replaces the entire lifecycle configuration. Any existing rules not included in the new configuration are permanently removed. To preserve existing rules, retrieve the current configuration first and include all rules in the new request.

## Prerequisites

Before you begin, ensure that you have:

-   An OSS bucket
    
-   The `oss:PutBucketLifecycle` permission. For details, see [Attach a custom policy to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies)
    

## Command syntax

```
ossutil api put-bucket-lifecycle --bucket value --lifecycle-configuration value [flags]
```

**Parameter**

**Type**

**Description**

`--bucket`

string

The name of the bucket

`--lifecycle-configuration`

string

The lifecycle configuration. Accepts XML or JSON, either inline or via a file path using the `file://` prefix. A configuration can contain up to 1,000 rules.

> This command is the CLI equivalent of the [PutBucketLifecycle](/help/en/oss/developer-reference/putbucketlifecycle) API operation. For the full list of supported flags, see [Command-line options](/help/en/oss/command-line-options).

## Configuration schema

The `--lifecycle-configuration` option accepts XML or JSON format.

### XML format

```
<LifecycleConfiguration>
  <Rule>
    <ID>string</ID>
    <Prefix>string</Prefix>
    <Status>string</Status>
    <Expiration>
      <ExpiredObjectDeleteMarker>boolean</ExpiredObjectDeleteMarker>
      <CreatedBeforeDate>string</CreatedBeforeDate>
      <Days>integer</Days>
    </Expiration>
    <Transition>
      <IsAccessTime>boolean</IsAccessTime>
      <ReturnToStdWhenVisit>boolean</ReturnToStdWhenVisit>
      <AllowSmallFile>boolean</AllowSmallFile>
      <CreatedBeforeDate>string</CreatedBeforeDate>
      <Days>integer</Days>
      <StorageClass>string</StorageClass>
    </Transition>
    ...
    <AbortMultipartUpload>
      <CreatedBeforeDate>string</CreatedBeforeDate>
      <Days>integer</Days>
    </AbortMultipartUpload>
    <Tag>
      <Key>string</Key>
      <Value>string</Value>
    </Tag>
    ...
    <Filter>
      <Not>
        <Prefix>string</Prefix>
        <Tag>
          <Key>string</Key>
          <Value>string</Value>
        </Tag>
      </Not>
    </Filter>
    <NoncurrentVersionExpiration>
      <NoncurrentDays>integer</NoncurrentDays>
    </NoncurrentVersionExpiration>
    <NoncurrentVersionTransition>
      <NoncurrentDays>integer</NoncurrentDays>
      <StorageClass>string</StorageClass>
      <IsAccessTime>boolean</IsAccessTime>
      <ReturnToStdWhenVisit>boolean</ReturnToStdWhenVisit>
      <AllowSmallFile>boolean</AllowSmallFile>
    </NoncurrentVersionTransition>
    ...
  </Rule>
  ...
</LifecycleConfiguration>
```

### JSON format

```
{
  "Rule": [
    {
      "ID": "string",
      "Prefix": "string",
      "Status": "string",
      "Tag": [
        {
          "Key": "string",
          "Value": "string"
        }
      ],
      "Filter": {
        "Not": {
          "Prefix": "string",
          "Tag": {
            "Key": "string",
            "Value": "string"
          }
        }
      },
      "Expiration": {
        "CreatedBeforeDate": "string",
        "Days": integer,
        "ExpiredObjectDeleteMarker": boolean
      },
      "Transition": [
        {
          "CreatedBeforeDate": "string",
          "Days": integer,
          "StorageClass": "string",
          "IsAccessTime": boolean,
          "ReturnToStdWhenVisit": boolean,
          "AllowSmallFile": boolean
        }
      ],
      "AbortMultipartUpload": {
        "CreatedBeforeDate": "string",
        "Days": integer
      },
      "NoncurrentVersionExpiration": {
        "NoncurrentDays": integer
      },
      "NoncurrentVersionTransition": [
        {
          "NoncurrentDays": integer,
          "StorageClass": "string",
          "IsAccessTime": boolean,
          "ReturnToStdWhenVisit": boolean,
          "AllowSmallFile": boolean
        }
      ]
    }
  ]
}
```

## Examples

The following examples apply a single rule to `examplebucket`: objects under the `tmp/` prefix transition to Infrequent Access (IA) after 5 days, expire after 10 days, and incomplete multipart uploads are deleted after 10 days.

### Use an XML configuration file

Create a file named `lifecycle-configuration.xml`:

```
<?xml version="1.0" encoding="UTF-8"?>
<LifecycleConfiguration>
  <Rule>
    <ID>rule1</ID>
    <Prefix>tmp/</Prefix>
    <Status>Enabled</Status>
    <Expiration>
      <Days>10</Days>
    </Expiration>
    <Transition>
      <Days>5</Days>
      <StorageClass>IA</StorageClass>
    </Transition>
    <AbortMultipartUpload>
      <Days>10</Days>
    </AbortMultipartUpload>
  </Rule>
</LifecycleConfiguration>
```

Apply the configuration:

```
ossutil api put-bucket-lifecycle --bucket examplebucket --lifecycle-configuration file://lifecycle-configuration.xml
```

### Use a JSON configuration file

Create a file named `lifecycle-configuration.json`:

```
{
  "Rule": {
    "ID": "rule1",
    "Prefix": "tmp/",
    "Status": "Enabled",
    "Expiration": {
      "Days": "10"
    },
    "Transition": {
      "Days": "5",
      "StorageClass": "IA"
    },
    "AbortMultipartUpload": {
      "Days": "10"
    }
  }
}
```

Apply the configuration:

```
ossutil api put-bucket-lifecycle --bucket examplebucket --lifecycle-configuration file://lifecycle-configuration.json
```

### Pass JSON inline

```
ossutil api put-bucket-lifecycle --bucket examplebucket --lifecycle-configuration "{\"Rule\":{\"ID\":\"rule1\",\"Prefix\":\"tmp/\",\"Status\":\"Enabled\",\"Expiration\":{\"Days\":\"10\"},\"Transition\":{\"Days\":\"5\",\"StorageClass\":\"IA\"},\"AbortMultipartUpload\":{\"Days\":\"10\"}}}"
```

## What's next

-   [GetBucketLifecycle](/help/en/oss/developer-reference/getbucketlifecycle) — retrieve the current lifecycle configuration
    
-   [DeleteBucketLifecycle](/help/en/oss/developer-reference/deletebucketlifecycle) — remove all lifecycle rules from a bucket
    
-   [PutBucketLifecycle](/help/en/oss/developer-reference/putbucketlifecycle) — REST API reference for this operation
