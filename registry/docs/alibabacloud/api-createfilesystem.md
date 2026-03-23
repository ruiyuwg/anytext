Creates a file system.

## Operation description

-   Before you call this operation, you must understand the billing and pricing of File Storage NAS. For more information, see [Billing](/help/en/nas/product-overview/billing-of-general-purpose-nas-file-systems) and [Pricing](https://www.aliyun.com/price/product?#/nas/detail) .
-   Before you create a file system, you must complete real-name verification. For more information, see [Real-name verification](/help/en/account/verify-your-identity-individual-account).
-   When you call this operation, a service-linked role of NAS is automatically created. For more information, see [Manage the service-linked roles of NAS](/help/en/nas/security-and-compliance/service-linked-roles-of-nas).

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/NAS/2017-06-26/CreateFileSystem)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/NAS/2017-06-26/CreateFileSystem)

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

nas:CreateFileSystem

create

\*FileSystem

`acs:nas:{#regionId}:{#accountId}:filesystem/*`

-   nas:EncryptedType
-   nas:FileSystemType

none

## Request parameters

Parameter

Type

Required

Description

Example

FileSystemType

string

No

The type of the file system.

Valid values:

-   standard: General-purpose NAS
-   extreme: Extreme NAS
-   cpfs: CPFS (locally redundant storage)
-   cpfsse: CPFS SE (zone-redundant storage)

standard

ChargeType

string

No

The billing method.

Valid values:

-   PayAsYouGo (default): pay-as-you-go
-   Subscription

PayAsYouGo

Duration

integer

No

The subscription duration.

This parameter is valid and required if ChargeType is set to Subscription. Unit: months.

If you do not renew a subscription file system when the file system expires, the file system is automatically released.

1

Capacity

long

No

Specify the capacity of the file system. Unit: GiB. This parameter is required and valid when FileSystemType is set to extreme, cpfs, or cpfsse.

Specify a value based on the specifications on the following buy page:

-   [Extreme NAS (Pay-as-you-go)](https://common-buy-intl.alibabacloud.com/?commodityCode=nas_extpost_public_intl#/buy)
-   [CPFS (Pay-as-you-go)](https://common-buy-intl.alibabacloud.com/?spm=5176.nas_overview.0.0.7ea01dbft0dTui&commodityCode=nas_cpfspost_public_intl#/buy)

100

Bandwidth

long

No

The maximum throughput of the file system.

Unit: MB/s.

Specify a value based on the specifications on the buy page.

[CPFS (Pay-as-you-go)](https://common-buy-intl.alibabacloud.com/?spm=5176.nas_overview.0.0.7ea01dbft0dTui&commodityCode=nas_cpfspost_public_intl#/buy)

150

StorageType

string

Yes

The storage type.

-   If FileSystemType is set to standard, set this parameter to Performance, Capacity, or Premium.
-   If FileSystemType is set to extreme, set this parameter to standard or advance.
-   If FileSystemType is set to cpfs, set this parameter to advance\_100 (100 MB/s/TiB Baseline), advance\_200 (200 MB/s/TiB Baseline), or economic.
-   If FileSystemType is set to cpfsse, set this parameter to advance\_100 (100 MB/s/TiB Baseline).

Performance

ZoneId

string

No

The ID of the zone.

Each region has multiple isolated locations known as zones. Each zone has its own independent power supply and network.

This parameter is not required if FileSystemType is set to standard. By default, a random zone is selected based on the protocol type and storage type.

This parameter is required if FileSystemType is set to extreme or cpfs.

**Note**

-   An Elastic Compute Service (ECS) instance and a file system that reside in different zones of the same region can access each other.
    
-   We recommend that you select the zone where the ECS instance resides. This prevents cross-zone latency between the file system and the ECS instance.
    

cn-hangzhou-b

ProtocolType

string

Yes

Specify the protocol type.

-   If FileSystemType is set to standard, set this parameter to NFS or SMB.
-   If FileSystemType is set to extreme, set this parameter to NFS.
-   If FileSystemType is set to cpfs, set this parameter to cpfs.
-   If FileSystemType is set to cpfsse, set this parameter to cpfs.

NFS

EncryptType

integer

No

Specifies whether to encrypt data in the file system.

You can use the keys that are managed by Key Management Service (KMS) to encrypt data in a file system. When you read and write the encrypted data, the data is automatically decrypted.

Valid values:

-   0 (default): The data in the file system is not encrypted.
-   1: A NAS-managed key is used to encrypt the data in the file system. This value is valid if FileSystemType is set to standard or extreme.
-   2: A KMS-managed key is used to encrypt the data in the file system. This value is valid if the FileSystemType parameter is set to standard or extreme.

**Note**

-   Extreme NAS: All regions except China East 1 Finance support KMS-managed keys.
    
-   General-purpose NAS: All regions support KMS-managed keys.
    

1

SnapshotId

string

No

The snapshot ID.

This parameter is available only for advanced Extreme NAS file systems.

**Note** You can create a file system from a snapshot. The version of the file system is the same as that of the source file system. For example, the source file system of the snapshot uses version 1. To create a file system of version 2, create File System A from the snapshot and create File System B of version 2. Then copy the data and migrate your business from File System A to File System B.

s-xxx

VpcId

string

No

The VPC ID.

-   This parameter is required if FileSystemType is set to cpfs or cpfsse.
-   This parameter is reserved and not required if FileSystemType is set to standard or extreme.

vpc-bp1cbv1ljve4j5hlw\*\*\*\*

VSwitchId

string

No

The vSwitch ID.

-   This parameter is required if FileSystemType is set to cpfs.
-   If FileSystemType is not set to cpfs, this parameter is reserved and not required.

vsw-2ze37k6jh8ums2fw2\*\*\*\*

Description

string

No

The description of the file system.

Limits:

-   Must be 2 to 128 characters in length.
-   Must start with a letter but cannot start with `http://` or `https://`.
-   Can contain digits, colons (:), underscores (\_), and hyphens (-).

test

ClientToken

string

No

A client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. ClientToken only supports ASCII characters and cannot exceed 64 characters. For more information, see [How to ensure idempotence](/help/en/ecs/developer-reference/how-to-ensure-idempotence).

**Note** If you do not specify this parameter, the system automatically uses the request ID as the client token. The request ID may be different for each request.

123e4567-e89b-12d3-a456-42665544\*\*\*\*

KmsKeyId

string

No

The ID of the KMS key.

This parameter is required if EncryptType is set to 2.

3c0b3885-2adf-483d-8a65-5e280689\*\*\*\*

DryRun

boolean

No

Whether to precheck the creation request.

The precheck operation helps you check the validity of parameters and verify inventory. It does not actually create instances and does not incur fees.

Valid values:

-   true: Checks the request without creating an instance. The system checks the required parameters, request syntax, service limits, and available NAS resources. If the request fails to pass the check, an error message is returned. If the request passes the check, the HTTP status code 200 is returned. No value is returned for the FileSystemId parameter.
-   false (default): Sends the request. If the request passes the check, the instance is created.

true

ResourceGroupId

string

No

The resource group ID.

You can log on to the [Resource Management console](https://resourcemanager.console.alibabacloud.com/resource-groups?) to view resource group IDs.

rg-acfmwavnfdf\*\*\*\*

Tag

array<object>

No

An array of tags.

You can specify up to 20 tags. If you specify multiple tags, each tag key must be unique.

object

No

The tag.

Key

string

No

The tag key.

Limits:

-   Cannot be null or an empty string.
-   Can be up to 128 characters in length.
-   Cannot start with `aliyun` or `acs:`.
-   Cannot contain `http://` or `https://`.

nastest

Value

string

No

The tag value.

Limits:

-   Cannot be null or an empty string.
-   Can be up to 128 characters in length.
-   Cannot contain `http://` or `https://`.

testValue

RedundancyType

string

No

Storage redundancy type. Only available for CPFS SE.

Valid values:

-   ZRS

Enumeration Value:

-   LRS
-   ZRS

ZRS

RedundancyVSwitchIds

array

No

A list of IDs for the zone-redundant vSwitches. This parameter is required if RedundancyType is set to ZRS. You must enter three vSwitch IDs from three different zones.

string

No

A list of IDs for the zone-redundant vSwitches.

vsw-123xxx

**Note the following about API idempotence:**  
The CreateFileSystem operation creates a file system and incurs fees. Therefore, if the request times out or an internal error occurs, the client may attempt to resend the request. You can specify the ClientToken parameter in the request. This ensures that the request is not repeatedly sent by the client.

**Note** This operation supports idempotence if FileSystemType is set to extreme or cpfs. This operation does not support idempotence if FileSystemType is set to standard.

The following list provides more details about the ClientToken parameter.

-   ClientToken is a unique, case-sensitive string that is generated by the client and cannot exceed 64 ASCII characters in length. Example: `ClientToken=123e4567-e89b-12d3-a456-42665544****`.
-   If you specify a used ClientToken and modify other request parameters, NAS returns the IdempotentParameterMismatch error code.

**Note** The SignatureNonce, Timestamp, and Signature parameters must be changed during retries. This is because NAS uses the SignatureNonce parameter to prevent replay attacks and uses the Timestamp parameter to identify the timestamp of each request. Therefore, a retry request requires different values of the SignatureNonce and Timestamp parameters. In this case, the value of the Signature parameter changes.

-   If you specify the ClientToken parameter and the request fails, the request is resent based on the following HTTP status codes and error messages:
    
    -   If the HTTP status code 200 is returned, the client can receive the same result as the last request after the request is resent. However, your server status is not affected.
    -   If a 4xx HTTP status code is returned and the error message does not indicate "try it later", the request parameters are invalid. You must modify the request parameters based on the returned error message and then resend the request.
    -   If a 5xx HTTP status code is returned, a network timeout or an internal error occurred. You can resend the same request and the request must contain the same client token and request parameters.
-   A client token is valid for 30 days.
    

## Response parameters

Parameter

Type

Description

Example

object

The response parameters.

RequestId

string

The request ID.

98696EF0-1607-4E9D-B01D-F20930B6\*\*\*\*

FileSystemId

string

The ID of the created file system.

1ca404\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "98696EF0-1607-4E9D-B01D-F20930B6****",
  "FileSystemId": "1ca404****"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

202

RequestAccepted

The request has been accepted by the server.

The request has been accepted by the server.

400

IdempotentParameterMismatch

The same client token was passed in to different parameters.

The same client token was passed in to different parameters.

400

InvalidParameter.KmsServiceNotEnabled

Key Management Service is not enabled.

Key Management Service is not enabled.

400

DryRunOperation

The request is validated with DryRun flag set.

The request is validated with DryRun flag set.

400

SubAccount.NoExtremeSLRPermission

The RAM user does not have the permission to create service linked role AliyunServiceRoleForNasExtreme. Please authorize the RAM user the permission ram:CreateServiceLinkedRole.

The RAM user does not have the permission to create service linked role AliyunServiceRoleForNasExtreme. Please authorize the RAM user the permission ram:CreateServiceLinkedRole.

400

SubAccount.NoStandardSLRPermission

The RAM user does not have the permission to create service linked role AliyunServiceRoleForNasStandard. Please authorize the RAM user the permission ram:CreateServiceLinkedRole.

The RAM user does not have the permission to create service linked role AliyunServiceRoleForNasStandard. Please authorize the RAM user the permission ram:CreateServiceLinkedRole.

400

SubAccount.NoEncryptionSLRPermission

The RAM user does not have the permission to create service linked role AliyunServiceRoleForNasEncryption. Please authorize the RAM user the permission ram:CreateServiceLinkedRole.

The RAM user does not have the permission to create service linked role AliyunServiceRoleForNasEncryption. Please authorize the RAM user the permission ram:CreateServiceLinkedRole.

400

InvalidParam.NotSupportBYOK

The specified file system type does not support the BYOK encryption function.

The specified file system type does not support the BYOK encryption function.

400

MissingParameter.KmsKeyId

When parameter EncryptType equals 2, the parameter KmsKeyId is mandatory for your request.

When parameter EncryptType equals 2, the parameter KmsKeyId is mandatory for your request.

400

InvalidParameter.InvalidKmsKeyId

The specified KMS key ID is invalid.

The specified KMS key ID is invalid.

400

InvalidParameter.KmsKeyIdNotFound

The specified KMS key ID does not exist.

The specified KMS key ID does not exist.

403

OperationDenied.InvalidState

The operation is not permitted when the status is processing.

The operation is not permitted when the status is processing.

403

InvalidFileSystem.AlreadyExisted

The specified file system already exists.

The specified file system already exists.

403

Resource.OutOfStock

The inventory of the specified zone is insufficient.

The inventory of the specified zone is insufficient.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/NAS/2017-06-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2026-01-21

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/NAS/2017-06-26/CreateFileSystem?updateTime=2026-01-21#workbench-doc-change-demo)

2025-12-22

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/NAS/2017-06-26/CreateFileSystem?updateTime=2025-12-22#workbench-doc-change-demo)

2024-11-12

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/NAS/2017-06-26/CreateFileSystem?updateTime=2024-11-12#workbench-doc-change-demo)

2024-01-25

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/NAS/2017-06-26/CreateFileSystem?updateTime=2024-01-25#workbench-doc-change-demo)

2023-12-26

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/NAS/2017-06-26/CreateFileSystem?updateTime=2023-12-26#workbench-doc-change-demo)
