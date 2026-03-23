Creates an SSH key pair. The system stores the public key and returns the unencrypted private key. The private key is encoded with PEM in the PKCS#8 format. You must properly store the private key and ensure its confidentiality.

## Operation description

In addition to calling the CreateKeyPair operation to create a key pair, you can use a third-party tool to create a key pair and then call the [ImportKeyPair](/help/en/ecs/api-importkeypair) operation to upload the key pair to an Alibaba Cloud region.

Up to 500 key pairs can be created in each region. For more information, see the "SSH key pair limits" section in [Limits](/help/en/ecs/user-guide/limitations) .

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/CreateKeyPair)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/CreateKeyPair)

## Authorization information

The following table shows the authorization information corresponding to the API. The authorization information can be used in the `Action` policy element to grant a RAM user or RAM role the permissions to call this API operation. Description:

-   Operation: the value that you can use in the Action element to specify the operation on a resource.
-   Access level: the access level of each operation. The levels are read, write, and list.
-   Resource type: the type of the resource on which you can authorize the RAM user or the RAM role to perform the operation. Take note of the following items:
    -   For mandatory resource types, indicate with a prefix of \* .
    -   If the permissions cannot be granted at the resource level, `All Resources` is used in the Resource type column of the operation.
-   Condition Key: the condition key that is defined by the cloud service.
-   Associated operation: other operations that the RAM user or the RAM role must have permissions to perform to complete the operation. To complete the operation, the RAM user or the RAM role must have the permissions to perform the associated operations.

Operation

Access level

Resource type

Condition key

Associated operation

ecs:CreateKeyPair

create

\*KeyPair

`acs:ecs:{#regionId}:{#accountId}:keypair/*`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

RegionId

string

Yes

The ID of the region in which to create the key pair. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

KeyPairName

string

Yes

The name of the key pair. The name must be 2 to 128 characters in length. The name must start with a letter and cannot start with `http://` or `https://`. The name can contain letters, digits, colons (:), underscores (\_), and hyphens (-).

testKeyPairName

ResourceGroupId

string

No

The ID of the resource group to which to add the key pair.

rg-bp67acfmxazb4p\*\*\*\*

Tag

array<object>

No

The tags of the key pair.

object

No

Key

string

No

The key of tag N to add to the key pair. Valid values of N: 1 to 20. The tag key cannot be an empty string. The tag key can be up to 128 characters in length and cannot contain `http://` or `https://`. The tag key cannot start with `acs:` or `aliyun`.

TestKey

Value

string

No

The value of tag N to add to the key pair. Valid values of N: 1 to 20. The tag value can be an empty string. The tag value can be up to 128 characters in length and cannot contain http:// or https://. The tag value cannot start with acs:.

TestValue

## Response parameters

Parameter

Type

Description

Example

object

PrivateKeyBody

string

The private key of the key pair. The private key is encoded with PEM in the PKCS#8 format.

MIIEpAIBAAKCAQEAtReyMzLIcBH78EV2zj\*\*\*\*

KeyPairName

string

The name of the key pair.

testKeyPairName

KeyPairId

string

The ID of the key pair.

ssh-bp67acfmxazb4p\*\*\*\*

RequestId

string

The request ID.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E

KeyPairFingerPrint

string

The fingerprint of the key pair. The message-digest algorithm 5 (MD5) is used based on the public key fingerprint format defined in RFC 4716. For more information, see [RFC 4716](https://tools.ietf.org/html/rfc4716).

89:f0:ba:62:ac:b8:aa:e1:61:5e:fd:81:69:86:6d:6b:f0:c0:5a:\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "PrivateKeyBody": "MIIEpAIBAAKCAQEAtReyMzLIcBH78EV2zj****",
  "KeyPairName": "testKeyPairName",
  "KeyPairId": "ssh-bp67acfmxazb4p****",
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E",
  "KeyPairFingerPrint": "89:f0:ba:62:ac:b8:aa:e1:61:5e:fd:81:69:86:6d:6b:f0:c0:5a:**"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidKeyPairName.Malformed

Specified Key Pair name is not valid.

\-

400

KeyPair.AlreadyExist

The key pair already exist.

A key pair with the same name already exists. Key pair names must be unique.

400

Duplicate.TagKey

The Tag.N.Key contain duplicate key.

The specified tag key already exists. Tag keys must be unique.

400

InvalidTagKey.Malformed

The specified Tag.n.Key is not valid.

The specified Tag.N.Key parameter is invalid.

400

InvalidTagValue.Malformed

The specified Tag.n.Value is not valid.

The specified tag value is invalid.

403

QuotaExceed.KeyPair

The key pair quota exceeds.

The maximum number of key pairs has been reached.

403

QuotaExceed.Tags

%s

The number of specified tags exceeds the upper limit. %s is a variable. An error message is dynamically returned based on call conditions.

404

InvalidRegionId.NotFound

The RegionId provided does not exist in our records.

The RegionId provided does not exist

404

InvalidResourceGroup.NotFound

The ResourceGroup provided does not exist in our records.

The specified resource group does not exist.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-01-13

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateKeyPair?updateTime=2025-01-13#workbench-doc-change-demo)

2024-12-17

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateKeyPair?updateTime=2024-12-17#workbench-doc-change-demo)
