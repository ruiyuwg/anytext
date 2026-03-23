Use the `ossutil referer` command to configure, query, and delete hotlink protection (Referer allowlist) settings for an Object Storage Service (OSS) bucket. Hotlink protection blocks unauthorized third-party sites from embedding links to your bucket resources, preventing unexpected traffic and storage costs.

## Prerequisites

Before you begin, ensure that you have:

-   ossutil 1.6.16 or later installed and configured with valid credentials
    
-   The required RAM permissions:
    
    -   Create or modify hotlink protection: `oss:PutBucketReferer`
        
    -   Query hotlink protection: `oss:GetBucketReferer`
        
    -   Delete hotlink protection: `oss:DeleteBucketReferer`
        

For more information about RAM permissions, see [Attach a custom policy to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip).

> For ossutil earlier than 1.6.16, you must update the binary name based on your operating system. For more information, see [ossutil command reference](/help/en/oss/developer-reference/ossutil#task-2012304).

## Configure or modify hotlink protection

If no hotlink protection is configured for a bucket, this command creates a new configuration. If a configuration already exists, this command overwrites it entirely.

**Syntax**

```
ossutil referer --method put oss://<bucketname> <refererconfig> [--disable-empty-referer]
```

**Parameters**

**Parameter**

**Description**

`<bucketname>`

The name of the bucket to configure.

`<refererconfig>`

One or more domain names or IP addresses for the Referer allowlist, separated by spaces. Supports `*` (zero or more characters) and `?` (exactly one character) as wildcards. Port numbers are supported (for example, `https://www.example.com:8080` and `https://10.0.0.0:8080`).

`--disable-empty-referer`

If specified, denies requests with an empty or missing Referer header. If omitted, requests with an empty Referer header are allowed (including direct browser URL-bar access).

### Wildcard matching rules

**Pattern**

**Matches**

**Example**

`http://www.aliyun.com`

Any URL that starts with that string

`http://www.aliyun.com/123`, `http://www.aliyun.com.cn`

`*www.aliyun.com`

Any URL that contains `www.aliyun.com`

`http://www.aliyun.com`, `https://www.aliyun.com`

`*.aliyun.com`

Any URL that matches the wildcard prefix

`https://www.aliyun.com`, `https://www.alibabacloud.com/help`

`?`

Any single character

Use `?` to match exactly one character

### Empty Referer behavior

Requests with an empty or absent Referer header include direct browser URL-bar access and requests from clients that do not send a Referer header. By default (without `--disable-empty-referer`), these requests are allowed even when an allowlist is configured. To block direct URL-bar access and require all requests to come from an allowed domain, add `--disable-empty-referer`.

**`--disable-empty-referer` specified**

**Requests with empty Referer header**

No (default)

Allowed

Yes

Denied

### Examples

**Allow \`www.aliyun.com\` to embed your resources, and block direct browser access:**

```
ossutil referer --method put oss://examplebucket http://www.aliyun.com https://www.aliyun.com --disable-empty-referer
```

**Allow \`www.aliyun.com\` to embed your resources, and also allow direct browser access:**

```
ossutil referer --method put oss://examplebucket http://www.aliyun.com https://www.aliyun.com
```

Expected output:

```
0.134839(s) elapsed
```

## Query hotlink protection configurations

**Syntax**

```
ossutil referer --method get oss://<bucketname> [<local_xml_file>]
```

**Parameters**

**Parameter**

**Description**

`<bucketname>`

The name of the bucket to query.

`<local_xml_file>`

(Optional) A local file path to save the configuration output (for example, `localfile.txt`). If omitted, the configuration is printed to the terminal.

### Examples

**Save the configuration to a file:**

```
ossutil referer --method get oss://examplebucket localfile.txt
```

Expected output:

```
0.212407(s) elapsed
```

**Print the configuration to the terminal:**

```
ossutil referer --method get oss://examplebucket
```

Expected output:

```
<?xml version="1.0" encoding="UTF-8"?>
<RefererConfiguration>
    <AllowEmptyReferer>false</AllowEmptyReferer>
    <RefererList>
        <Referer>*www.aliyun.com</Referer>
    </RefererList>
</RefererConfiguration>

0.080482(s) elapsed
```

In this example, only requests whose Referer header matches `*www.aliyun.com` are allowed, and requests with an empty Referer header are denied (`AllowEmptyReferer: false`).

## Delete hotlink protection configurations

**Syntax**

```
ossutil referer --method delete oss://<bucketname>
```

**Parameters**

**Parameter**

**Description**

`<bucketname>`

The name of the bucket whose hotlink protection configuration you want to delete.

### Example

```
ossutil referer --method delete oss://examplebucket
```

Expected output:

```
0.212409(s) elapsed
```

## Cross-account and cross-region operations

To operate on a bucket in a different region or under a different Alibaba Cloud account, add the following options:

**Option**

**Description**

`-e <endpoint>`

The endpoint of the region where the bucket is located.

`-i <AccessKey ID>`

The AccessKey ID of the target account.

`-k <AccessKey secret>`

The AccessKey secret of the target account.

**Example:** Configure hotlink protection for `testbucket` in the China (Hangzhou) region, owned by a different account:

```
ossutil referer --method put oss://testbucket www.alibabacloud.com -e oss-cn-hangzhou.aliyuncs.com -i yourAccessKeyID -k yourAccessKeySecret
```

For the full list of common options, see [Common options](/help/en/oss/developer-reference/view-options).

## Related topics

-   [Hotlink protection](/help/en/oss/user-guide/hotlink-protection#concept-s5b-gjd-5db)
