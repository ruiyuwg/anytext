Queries the information about a key.

In the following example, a key whose ID is `key-hzz630494463ejqjx****` is queried.The information about the key includes the creator, creation time, key status, and deletion protection status.

## Debugging

[OpenAPI Explorer automatically calculates the signature value. For your convenience, we recommend that you call this operation in OpenAPI Explorer. OpenAPI Explorer dynamically generates the sample code of the operation for different SDKs.](https://api.aliyun.com/#product=Kms&api=DescribeKey&type=RPC&version=2016-01-20)

## Request parameters

**Parameter**

**Type**

**Required**

**Example**

**Description**

Action

String

Yes

DescribeKey

The operation that you want to perform. Set the value to **DescribeKey**.

KeyId

String

Yes

key-hzz630494463ejqjx\*\*\*\*

The ID, alias, or Alibaba Cloud Resource Name (ARN) of the key. For more information, see [Manage a key alias](/help/en/kms/key-management-service/user-guide/manage-a-key-alias).

**Note** When you access a key within another Alibaba Cloud account, you must enter the ARN of the key. The key ARN is in the `acs:kms:${region}:${account}:key/${keyid}` format.

## Response parameters

**Parameter**

**Type**

**Example**

**Description**

RequestId

String

f1fdfa9d-bd49-418b-942f-8f3e3ec00a4f

The ID of the request, which is used to locate and troubleshoot issues.

KeyMetadata

Object

The metadata of the key.

DeletionProtection

String

Enabled

Indicates whether deletion protection is enabled. Valid values:

-   Enabled
-   Disabled

KeyId

String

key-hzz630494463ejqjx\*\*\*\*

The ID of the key. If KeyId is set to the alias or ARN of the key, the ID of the key is returned.

NextRotationDate

String

2021-07-06T18:22:03Z

The time when the next rotation is performed.

**Note** This parameter is returned only when the value of AutomaticRotation is Enabled or Suspended.

KeyState

String

Enabled

The status of the key.

For more information, see [Impacts of key status on API operations](/help/en/kms/key-management-service/developer-reference/impact-of-cmk-status-on-api-operations).

RotationInterval

String

31536000s

The interval for automatic rotation.

Unit: seconds.

For example, if the value is 604800s, automatic key rotation is performed at a 7-day interval.

**Note** This parameter is returned only when the value of AutomaticRotation is Enabled or Suspended.

Arn

String

acs:kms:cn-hangzhou:154035569884\*\*\*\*:key/key-hzz630494463ejqjx\*\*\*\*

The ARN of the key.

Creator

String

154035569884\*\*\*\*

The Alibaba Cloud account that is used to create the key.

LastRotationDate

String

2024-05-20T06:34:21Z

The time when the last rotation is performed. The time is in UTC. For a new key, the value of this parameter is the time when the initial version of the key is generated.

DeleteDate

String

2024-05-26T18:22:03Z

The time at which the key is scheduled for deletion. The time is displayed in UTC.

For more information, see [ScheduleKeyDeletion](/help/en/kms/key-management-service/developer-reference/api-schedulekeydeletion).

**Note** This parameter is returned only when the value of KeyState is PendingDeletion.

PrimaryKeyVersion

String

515e0b0a-624f-45ab-92b5-54f9b551\*\*\*\*

The ID of the current primary key version for the symmetric key.

Description

String

key description example

The description of the key.

KeySpec

String

Aliyun\_AES\_256

The type of the key.

Origin

String

Aliyun\_KMS

The key material origin.

MaterialExpireTime

String

2024-07-06T18:22:03Z

The time when the key material expires. The time is in UTC. If the value is empty, the key material does not expire.

DeletionProtectionDescription

String

The key is being used by XXX. Deletion protection is set.

The description of deletion protection.

AutomaticRotation

String

Disabled

Indicates whether automatic key rotation is enabled. Valid values:

-   Enabled
-   Disabled
-   Suspended

For more information, see [Automatic key rotation](/help/en/kms/key-management-service/support/automatic-key-rotation).

**Note** Only symmetric keys support automatic key rotation.

ProtectionLevel

String

HSM

The protection level of the key.

KeyUsage

String

ENCRYPT/DECRYPT

The usage of the key.

CreationDate

String

2024-05-20T06:34:21Z

The time when the key is created. The time is displayed in UTC.

DKMSInstanceId

String

kst-bjj62d8f5e0sgtx8h\*\*\*\*

The ID of the Key Management Service (KMS) instance.

## Examples

Sample requests

```
http(s)://[Endpoint]/?Action=DescribeKey
&KeyId=key-hzz630494463ejqjx****
&Common request parameters
```

Sample success responses

`XML` format

```
HTTP/1.1 200 OK
Content-Type:application/xml

<DescribeKeyResponse>
    <RequestId>f1fdfa9d-bd49-418b-942f-8f3e3ec00a4f</RequestId>
    <KeyMetadata>
        <DeletionProtection>Enabled</DeletionProtection>
        <KeyId>key-hzz630494463ejqjx****</KeyId>
        <NextRotationDate>2021-07-06T18:22:03Z</NextRotationDate>
        <KeyState>Enabled</KeyState>
        <RotationInterval>31536000s</RotationInterval>
        <Arn>acs:kms:cn-hangzhou:154035569884****:key/key-hzz630494463ejqjx****</Arn>
        <Creator>154035569884****</Creator>
        <LastRotationDate>2024-05-20T06:34:21Z</LastRotationDate>
        <DeleteDate>2024-05-26T18:22:03Z</DeleteDate>
        <PrimaryKeyVersion>515e0b0a-624f-45ab-92b5-54f9b551****</PrimaryKeyVersion>
        <Description>key description example</Description>
        <KeySpec>Aliyun_AES_256</KeySpec>
        <Origin>Aliyun_KMS</Origin>
        <MaterialExpireTime>2024-07-06T18:22:03Z</MaterialExpireTime>
        <DeletionProtectionDescription>The key is being used by XXX. Deletion protection is set. </DeletionProtectionDescription>
        <AutomaticRotation>Disabled</AutomaticRotation>
        <ProtectionLevel>HSM</ProtectionLevel>
        <KeyUsage>ENCRYPT/DECRYPT</KeyUsage>
        <CreationDate>2024-05-20T06:34:21Z</CreationDate>
        <DKMSInstanceId>kst-bjj62d8f5e0sgtx8h****</DKMSInstanceId>
    </KeyMetadata>
</DescribeKeyResponse>
```

`JSON` format

```
HTTP/1.1 200 OK
Content-Type:application/json

{
  "RequestId" : "f1fdfa9d-bd49-418b-942f-8f3e3ec00a4f",
  "KeyMetadata" : {
    "DeletionProtection" : "Enabled",
    "KeyId" : "key-hzz630494463ejqjx****",
    "NextRotationDate" : "2021-07-06T18:22:03Z",
    "KeyState" : "Enabled",
    "RotationInterval" : "31536000s",
    "Arn" : "acs:kms:cn-hangzhou:154035569884****:key/key-hzz630494463ejqjx****",
    "Creator" : "154035569884****",
    "LastRotationDate" : "2024-05-20T06:34:21Z",
    "DeleteDate" : "2024-05-26T18:22:03Z",
    "PrimaryKeyVersion" : "515e0b0a-624f-45ab-92b5-54f9b551****",
    "Description" : "key description example",
    "KeySpec" : "Aliyun_AES_256",
    "Origin" : "Aliyun_KMS",
    "MaterialExpireTime" : "2024-07-06T18:22:03Z",
    "DeletionProtectionDescription" : "The key is being used by XXX. Deletion protection is set.",
    "AutomaticRotation" : "Disabled",
    "ProtectionLevel" : "HSM",
    "KeyUsage" : "ENCRYPT/DECRYPT",
    "CreationDate" : "2024-05-20T06:34:21Z",
    "DKMSInstanceId" : "kst-bjj62d8f5e0sgtx8h****"
  }
}
```

## Error codes

**HTTP status code**

**Error code**

**Error message**

**Description**

400

InvalidParameter

The specified parameter is not valid.

The specified parameter is invalid.

404

Forbidden.KeyNotFound

The specified Key is not found.

The key does not exist.

404

Forbidden.AliasNotFound

The specified Alias is not found.

The specified alias is not found.

For a list of error codes, see [Service error codes](https://error-center.alibabacloud.com/status/product/Kms).
