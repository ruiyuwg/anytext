Queries one or more SAP HANA instances that meet the specified conditions.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/hbr/2017-09-08/DescribeHanaInstances)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/hbr/2017-09-08/DescribeHanaInstances)

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

hbr:DescribeHanaInstances

get

\*All Resources

`*`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

VaultId

string

No

The ID of the backup vault.

v-000b0ov\*\*\*\*\*\*6zs

ClusterId

string

No

The ID of the SAP HANA instance.

cl-0001zfc\*\*\*\*\*\*50pr3

PageNumber

integer

No

The page number. Pages start from page 1. Default value: 1.

1

PageSize

integer

No

The number of entries per page. Valid values: 1 to 99. Default value: 10.

10

Tag

array<object>

No

The tags of the SAP HANA instance.

object

No

The tags of SAP HANA instance.

Key

string

No

The tag key.

ace:rm:rgld

Value

string

No

The tag value.

rg-acfmwutpyat2kwy

ResourceGroupId

string

No

The ID of the resource group.

rg-aekz24ikcjyqjkq

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The request ID.

4003DD68-3C3C-5071-B4FC-631A6C1BAC1C

Success

boolean

Indicates whether the request was successful. Valid values:

-   true
-   false

true

Code

string

The response code. The status code 200 indicates that the request was successful.

200

Message

string

The returned message. If the request was successful, "successful" is returned. If the request failed, an error message is returned.

successful

PageNumber

integer

The page number. Pages start from page 1. Default value: 1.

1

PageSize

integer

The number of entries per page. Valid values: 1 to 99. Default value: 10.

10

TotalCount

integer

The total number of entries returned.

21

Hanas

array<object>

The information about the SAP HANA instances.

Hana

object

The SAP HANA instance.

Status

long

The status of the SAP HANA instance. Valid values:

-   INITIALIZING: The instance is being initialized.
-   INITIALIZED: The instance is registered.
-   INVALID\_HANA\_NODE: The instance is invalid.
-   INITIALIZE\_FAILED: The client fails to be installed on the instance.

INITIALIZED

Host

string

The private or internal IP address of the host where the primary node of the SAP HANA instance resides.

47.100.XX.XX

VaultId

string

The ID of the backup vault.

v-0000s974\*\*\*\*\*\*1hl

UseSsl

boolean

Indicates whether the SAP HANA instance is connected over Secure Sockets Layer (SSL). Valid values:

-   true: The SAP HANA instance is connected over SSL.
-   false: The SAP HANA instance is not connected over SSL.

true

HanaName

string

The name of the SAP HANA instance.

HANA-DEV

InstanceNumber

integer

The instance number of the SAP HANA system.

00

ValidateCertificate

boolean

Indicates whether the SSL certificate of the SAP HANA instance is verified.

false

AlertSetting

string

The alert settings. Valid value: INHERITED, which indicates that the Cloud Backup client sends alert notifications by using the same method configured for the backup vault.

INHERITED

UserName

string

The username of the SYSTEMDB database.

admin

StatusMessage

string

The status information.

INSTALL\_CLIENT\_FAILED

ClusterId

string

The ID of the SAP HANA instance.

cl-0004cf6g6\*\*\*\*\*\*0yd7y

Tags

array<object>

The tags of the SAP HANA instance.

Tag

object

The tags of SAP HANA instance.

Key

string

The tag key.

ace:rm:rgld

Value

string

The tag value.

rg-acfmwutpyat2kwy

ResourceGroupId

string

The resource group ID.

rg-acfmvnf22m7itha

CrossAccountType

string

Specifies whether data is backed up within the same Alibaba Cloud account or across Alibaba Cloud accounts. Valid values:

-   **SELF\_ACCOUNT**: Data is backed up within the same Alibaba Cloud account.
-   **CROSS\_ACCOUNT**: Data is backed up across Alibaba Cloud accounts.

CROSS\_ACCOUNT

CrossAccountUserId

long

The ID of the source Alibaba Cloud account that authorizes the current Alibaba Cloud account to back up data across Alibaba Cloud accounts.

158975xxxxx4625

CrossAccountRoleName

string

The name of the Resource Access Management (RAM) role that is created within the source Alibaba Cloud account and assigned to the current Alibaba Cloud account to authorize the current Alibaba Cloud account to back up data across Alibaba Cloud accounts.

hbrcrossrole

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "4003DD68-3C3C-5071-B4FC-631A6C1BAC1C",
  "Success": true,
  "Code": 200,
  "Message": "successful",
  "PageNumber": 1,
  "PageSize": 10,
  "TotalCount": 21,
  "Hanas": {
    "Hana": [
      {
        "Status": 0,
        "Host": "47.100.XX.XX",
        "VaultId": "v-0000s974******1hl",
        "UseSsl": true,
        "HanaName": "HANA-DEV",
        "InstanceNumber": 0,
        "ValidateCertificate": false,
        "AlertSetting": "INHERITED",
        "UserName": "admin",
        "StatusMessage": "INSTALL_CLIENT_FAILED",
        "ClusterId": "cl-0004cf6g6******0yd7y",
        "Tags": {
          "Tag": [
            {
              "Key": "ace:rm:rgld",
              "Value": "rg-acfmwutpyat2kwy"
            }
          ]
        },
        "ResourceGroupId": "rg-acfmvnf22m7itha",
        "CrossAccountType": "CROSS_ACCOUNT",
        "CrossAccountUserId": 0,
        "CrossAccountRoleName": "hbrcrossrole"
      }
    ]
  }
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/hbr/2017-09-08/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-05-22

The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/hbr/2017-09-08/DescribeHanaInstances?updateTime=2024-05-22#workbench-doc-change-demo)
