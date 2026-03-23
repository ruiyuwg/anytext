Run `ossutil lrb` to list buckets across one or more regions. The output includes each bucket's name, creation time, storage class, and region, plus a total count.

## Prerequisites

Before you begin, make sure you have:

-   The `oss:ListBuckets` permission. For details, see [Attach a custom policy to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip)
    
-   ossutil installed. For ossutil 1.6.16 and later, use `ossutil` directly as the binary name. For earlier versions, update the binary name based on your operating system. For details, see [ossutil command reference](/help/en/oss/developer-reference/ossutil#task-2012304)
    

## Syntax

```
ossutil lrb conf_file [-e <endpoint>]
```

**Parameter/Option**

**Description**

`conf_file`

Path to a local file listing endpoints, one per line. Use this to query multiple regions in a single command.

`-e`

Endpoint of the target region. Use this to query a single region without a configuration file.

## Examples

### List buckets in a single region

To query the China (Hangzhou) region explicitly:

```
ossutil lrb -e oss-cn-hangzhou.aliyuncs.com
```

To query the region configured in your ossutil configuration file:

```
ossutil lrb
```

For details on setting the endpoint in the configuration file, see [config](/help/en/oss/developer-reference/config#concept-303826).

### List buckets across multiple regions

1.  Create a local file that lists one endpoint per line. For example, create `localfile.txt` with the following content:
    
    ```
       oss-cn-hangzhou.aliyuncs.com
       oss-cn-shenzhen.aliyuncs.com
       oss-cn-shanghai.aliyuncs.com
    ```
    
2.  Pass the file to `lrb`:
    
    ```
       ossutil lrb localfile.txt
    ```
    

### Sample output

A successful run prints one row per bucket, followed by the total count and elapsed time:

```
CreationTime                                 Region    StorageClass    BucketName
2021-07-06 14:21:09 +0800 CST       oss-cn-hangzhou        Standard    oss://examplebucket1
2021-07-06 14:21:44 +0800 CST       oss-cn-hangzhou        Standard    oss://examplebucket2
2021-06-16 18:32:32 +0800 CST       oss-cn-shanghai        Standard    oss://examplebucket3
2021-06-30 16:04:41 +0800 CST       oss-cn-shanghai        Standard    oss://examplebucket4
2021-07-07 12:33:35 +0800 CST       oss-cn-shenzhen        Standard    oss://examplebucket5

Bucket Number is: 5
0.124193(s) elapsed
```

The output columns are:

**Column**

**Description**

`CreationTime`

Bucket creation timestamp (UTC+8)

`Region`

Region identifier (endpoint prefix)

`StorageClass`

Storage class of the bucket, such as Standard

`BucketName`

Bucket name in `oss://` format

## Common options

To query buckets in a different region or under a different Alibaba Cloud account, add the relevant options to the command:

**Option**

**Description**

`-e`

Endpoint of the target region

`-i`

AccessKey ID of the target account

`-k`

AccessKey secret of the target account

The following command lists buckets in the China (Shanghai) region under a different account:

```
ossutil lrb -e oss-cn-shanghai.aliyuncs.com -i yourAccessKeyID -k yourAccessKeySecret
```

For a full list of common options, see [Common options](/help/en/oss/developer-reference/view-options).
