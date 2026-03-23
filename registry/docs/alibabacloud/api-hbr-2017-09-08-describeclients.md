Queries one or more Cloud Backup clients that meet the specified conditions.

## Operation description

This operation is applicable only to SAP HANA backup. For Cloud Backup clients of other data sources, call the DescribeBackupClients operation.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/hbr/2017-09-08/DescribeClients)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/hbr/2017-09-08/DescribeClients)

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

hbr:DescribeClients

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

Yes

The ID of the backup vault.

v-0001vk0z\*\*\*\*\*\*xdyr

ClientId

string

No

The ID of the Cloud Backup client.

c-000ed600\*\*\*\*\*\*6b0

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

ClientType

string

Yes

The type of the Cloud Backup client. Valid value: **ECS\_AGENT**, which indicates an SAP HANA backup client.

ECS\_AGENT

SourceType

string

No

The type of the data source. Valid value:**HANA**, which indicates SAP HANA backup.

HANA

ClusterId

string

No

The ID of the SAP HANA instance.

cl-0005ni1\*\*\*\*\*\*2l87

ResourceGroupId

string

No

The ID of the resource group.

rg-acfmw6bxl7o5qyq

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The request ID.

17189276-465D-5EF3-8FFD-0FF51B5A41A0

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

12

Clients

array<object>

The Cloud Backup clients.

Client

object

The client information.

Status

string

The status of the Cloud Backup client. Valid values:

-   **REGISTERED**: The backup client is registered.
-   **ACTIVATED**: The backup client is activated.
-   **DEACTIVATED**: The backup client fails to be activated.
-   **INSTALLING**: The backup client is being installed.
-   **INSTALL\_FAILED**: The backup client fails to be installed.
-   **NOT\_INSTALLED**: The backup client is not installed.
-   **UPGRADING**: The backup client is being upgraded.
-   **UPGRADE\_FAILED**: The backup client fails to be upgraded.
-   **UNINSTALLING**: The backup client is being uninstalled.
-   **UNINSTALL\_FAILED**: The backup client fails to be uninstalled.
-   **STOPPED**: The backup client is out of service.
-   **UNKNOWN**: The backup client is disconnected.

ACTIVATED

VaultId

string

The ID of the backup vault.

v-00029mx6o\*\*\*\*\*\*n85lg

UseHttps

boolean

Indicates whether data is transmitted over HTTPS. Valid values:

-   true: Data is transmitted over HTTPS.
-   false: Data is transmitted over HTTP.

false

NetworkType

string

The network type. Valid values:

-   **CLASSIC**: the classic network
-   **VPC**: the virtual private cloud (VPC)

VPC

ClientName

string

The client name.

client-20211224-101226

ClientId

string

The ID of the Cloud Backup client.

c-00062uu\*\*\*\*\*\*2fgj

AlertSetting

string

The alert settings. Valid value: INHERITED, which indicates that the Cloud Backup client sends alert notifications by using the same method configured for the backup vault.

INHERITED

InstanceName

string

The name of the ECS instance.

swh-hbr

MaxVersion

string

The maximum version number of the Cloud Backup client.

1.11.23

CreatedTime

long

The time when the Cloud Backup client was created.

1554347313

StatusMessage

string

The status information.

HANA\_NOT\_SUPPORT

ClientType

string

The type of the Cloud Backup client. Valid value: **ECS\_AGENT**, which indicates an SAP HANA backup client.

ECS\_AGENT

InstanceId

string

The instance ID.

i-wz9b6wya\*\*\*\*\*\*n8yo

UpdatedTime

long

The time when the Cloud Backup client was updated. This value is a UNIX timestamp. Unit: seconds.

1554347313

ClientVersion

string

The version number of the Cloud Backup client.

1.11.16

ClusterId

string

The ID of the SAP HANA instance.

cl-0008c48frr\*\*\*\*\*\*ncpk

HeartBeatTime

long

The latest heartbeat time of the Cloud Backup client. This value is a UNIX timestamp. Unit: seconds.

1554347313

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "17189276-465D-5EF3-8FFD-0FF51B5A41A0",
  "Success": true,
  "Code": 200,
  "Message": "successful",
  "PageNumber": 1,
  "PageSize": 10,
  "TotalCount": 12,
  "Clients": {
    "Client": [
      {
        "Status": "ACTIVATED",
        "VaultId": "v-00029mx6o******n85lg",
        "UseHttps": false,
        "NetworkType": "VPC",
        "ClientName": "client-20211224-101226",
        "ClientId": "c-00062uu******2fgj",
        "AlertSetting": "INHERITED",
        "InstanceName": "swh-hbr",
        "MaxVersion": "1.11.23",
        "CreatedTime": 1554347313,
        "StatusMessage": "HANA_NOT_SUPPORT",
        "ClientType": "ECS_AGENT",
        "InstanceId": "i-wz9b6wya******n8yo",
        "UpdatedTime": 1554347313,
        "ClientVersion": "1.11.16",
        "ClusterId": "cl-0008c48frr******ncpk",
        "HeartBeatTime": 1554347313
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

2025-03-06

The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/hbr/2017-09-08/DescribeClients?updateTime=2025-03-06#workbench-doc-change-demo)
