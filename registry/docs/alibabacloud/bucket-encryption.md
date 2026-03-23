Use the `bucket-encryption` command to configure, query, or delete server-side encryption settings for a bucket. Once configured, OSS automatically encrypts every uploaded object and permanently stores the encrypted objects. When you download objects, OSS decrypts them and returns the decrypted objects to you.

For background information on server-side encryption, see [Server-side encryption](/help/en/oss/user-guide/server-side-encryption-8#concept-lqm-fkd-5db).

## Usage notes

-   ossutil 1.6.16 and later uses `ossutil` as the binary name across all operating systems. Earlier versions require a platform-specific binary name. For details, see [ossutil command reference](/help/en/oss/developer-reference/ossutil#task-2012304).
    

## Set or update bucket encryption

**Required permission:** `oss:PutBucketEncryption`. For details, see [Attach a custom policy to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip).

**Syntax**

```
ossutil bucket-encryption --method put oss://bucketName  --sse-algorithm algorithmName 
[--kms-masterkey-id  keyid] 
```

**Parameters**

**Parameter**

**Required**

**Description**

`bucketName`

Yes

The name of the bucket.

`--sse-algorithm`

Yes

Encryption method. Valid values: `KMS` (SSE-KMS, keys managed by Key Management Service (KMS)) and `AES256` (SSE-OSS, keys managed by OSS).

`--kms-masterkey-id`

No

ID of the KMS-managed customer master key (CMK) to use for SSE-KMS. If omitted, OSS uses the default CMK. Not supported on CloudBox.

**Examples**

Set SSE-OSS with AES-256 for `examplebucket`:

```
ossutil bucket-encryption --method put oss://examplebucket --sse-algorithm AES256
```

Set SSE-KMS with a specific CMK for `examplebucket`:

```
ossutil bucket-encryption --method put oss://examplebucket --sse-algorithm KMS --kms-masterkey-id 9468da86-3509-4f8d-a61e-6eab1eac****
```

A successful run outputs the elapsed time:

```
0.856895(s) elapsed
```

## Query bucket encryption

**Required permission:** `oss:GetBucketEncryption`

**Syntax**

```
ossutil bucket-encryption --method get oss://<bucketName>
```

**Example**

```
ossutil bucket-encryption --method get oss://examplebucket
```

The output shows the active encryption configuration. For a bucket configured with SSE-KMS without a specific CMK ID and using the AES-256 encryption algorithm, the output is:

```
SSEAlgorithm:KMS
KMSMasterKeyID:
KMSDataEncryption:
```

## Delete bucket encryption

**Required permission:** `oss:DeleteBucketEncryption`

**Syntax**

```
ossutil bucket-encryption --method delete oss://<bucketName>
```

**Example**

```
ossutil bucket-encryption --method delete oss://examplebucket
```

A successful run outputs the elapsed time:

```
0.856686(s) elapsed
```

## Common options

To operate on a bucket in a different region, add `-e` to specify the endpoint. To operate on a bucket under a different Alibaba Cloud account, add `-i` for the AccessKey ID and `-k` for the AccessKey secret.

The following command sets AES-256 encryption on `examplebucket` in China (Hangzhou), which belongs to a different account:

```
ossutil bucket-encryption --method put oss://examplebucket --sse-algorithm AES256 -e oss-cn-hangzhou.aliyuncs.com -i yourAccessKeyID -k yourAccessKeySecret
```

For all available options, see [Common options](/help/en/oss/developer-reference/view-options).
