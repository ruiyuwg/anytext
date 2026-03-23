Queries the information about one or more backup clients that meet specified conditions.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/hbr/2017-09-08/DescribeBackupClients)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/hbr/2017-09-08/DescribeBackupClients)

## **RAM authorization**

The table below describes the authorization required to call this API. You can define it in a Resource Access Management (RAM) policy. The table's columns are detailed below:

-   Action: The actions can be used in the `Action` element of RAM permission policy statements to grant permissions to perform the operation.
    
-   API: The API that you can call to perform the action.
    
-   Access level: The predefined level of access granted for each API. Valid values: create, list, get, update, and delete.
    
-   Resource type: The type of the resource that supports authorization to perform the action. It indicates if the action supports resource-level permission. The specified resource must be compatible with the action. Otherwise, the policy will be ineffective.
    
    -   For APIs with resource-level permissions, required resource types are marked with an asterisk (\*). Specify the corresponding Alibaba Cloud Resource Name (ARN) in the `Resource` element of the policy.
        
    -   For APIs without resource-level permissions, it is shown as All Resources. Use an asterisk (**\***) in the `Resource` element of the policy.
        
-   Condition key: The condition keys defined by the service. The key allows for granular control, applying to either actions alone or actions associated with specific resources. In addition to service-specific condition keys, Alibaba Cloud provides a set of [common condition keys](/help/en/ram/policy-elements#section-jix-u0j-2ms) applicable across all RAM-supported services.
    
-   Dependent action: The dependent actions required to run the action. To complete the action, the RAM user or the RAM role must have the permissions to perform all dependent actions.
    

**Action**

**Access level**

**Resource type**

**Condition key**

**Dependent action**

hbr:DescribeBackupClients

get

\*All Resource

`*`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

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

The type of the backup client. Valid values:

-   **ECS\_CLIENT**: an ECS file backup client.
    
-   **CONTAINER\_CLIENT**: a container backup client.
    
-   **LOCAL\_CLIENT**: a client for NAS backup, CPFS backup, data archiving, or data synchronization.
    

**Valid values：**

-   CONTAINER\_CLIENT :
    
    CONTAINER\_CLIENT
    
-   LOCAL\_CLIENT :
    
    LOCAL\_CLIENT
    
-   ECS\_CLIENT :
    
    ECS\_CLIENT
    

ECS\_CLIENT

ClusterId

string

No

The ID of the backup cluster.

cl-000ge4wa61b4d337xblq

ClientIds

array

No

A list of backup client IDs.

\["c-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*"\]

string

No

The backup client ID.

c-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

InstanceIds

array

No

A list of ECS instance IDs.

\["i-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*"\]

string

No

The ECS instance ID.

i-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Tag

array<object>

No

The tags that are added to the resource.

33738719#

object

No

The tag information.

Key

string

No

The tag key of the repository. N can be an integer from 1 to 20.

-   The tag key cannot start with `aliyun` or `acs:`.
    
-   The tag key cannot contain `http://` or `https://`.
    
-   The tag key cannot be an empty string.
    

TestKey

Value

string

No

The tag value of the repository. N can be an integer from 1 to 20.

-   The tag value cannot start with `aliyun` or `acs:`.
    
-   The tag value cannot contain `http://` or `https://`.
    
-   The tag value cannot be an empty string.
    

TestValue

CrossAccountType

string

No

The type of the cross-account backup. Valid values:

-   SELF\_ACCOUNT: backups of the current account
    
-   CROSS\_ACCOUNT: cross-account backups
    

CROSS\_ACCOUNT

CrossAccountUserId

integer

No

The ID of the source account for the cross-account backup.

129374672382xxxx

CrossAccountRoleName

string

No

The name of the RAM role that is created in the source account for the cross-account backup.

hbrcrossrole

Filters

array<object>

No

The filters used to query resources.

object

No

The filter.

Key

string

No

The key of the filter.

InstanceId

Values

array

No

The values of the filter.

string

No

The value of the filter.

i-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The request ID.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E

Success

boolean

Indicates whether the request was successful.

-   true: The request was successful.
    
-   false: The request failed.
    

true

Code

string

The return code. A value of 200 indicates that the request was successful.

200

Message

string

The message that is returned. If the request is successful, \`successful\` is returned. If the request fails, an error message is returned.

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

The total number of backup clients that meet the specified conditions.

8

Clients

array<object>

The list of backup clients.

{'Client': \[\]}

object

Status

string

The status of the backup client. Valid values:

-   **REGISTERED**: The client is registered.
    
-   **ACTIVATED**: The client is activated.
    
-   **DEACTIVATED**: The client is deactivated.
    
-   **INSTALLING**: The client is being installed.
    
-   **INSTALL\_FAILED**: The installation failed.
    
-   **NOT\_INSTALLED**: The client is not installed.
    
-   **UPGRADING**: The client is being upgraded.
    
-   **UPGRADE\_FAILED**: The upgrade failed.
    
-   **UNINSTALLING**: The client is being uninstalled.
    
-   **UNINSTALL\_FAILED**: The uninstallation failed.
    
-   **STOPPED**: The client service is stopped.
    
-   **UNKNOWN**: The client is disconnected.
    

ACTIVATED

BackupStatus

string

The protection status of the backup client. Valid values:

-   **UNPROTECTED**: The server is not protected.
    
-   **PROTECTED**: The server is protected.
    

PROTECTED

ArchType

string

This parameter is returned only if **ClientType** is set to **ECS\_CLIENT**. This parameter indicates the system architecture of the host where the backup client is deployed. Valid values:

-   **amd64**
    
-   **386**
    

amd64

ClientId

string

The backup client ID.

c-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

MaxClientVersion

string

The latest version number of the backup client.

2.4.5

PrivateIpV4

string

This parameter is returned only if **ClientType** is set to **ECS\_CLIENT**. This parameter indicates the private IP address of the ECS instance.

192.168.1.1

InstanceName

string

This parameter is returned only if **ClientType** is set to **ECS\_CLIENT**. This parameter indicates the name of the ECS instance.

instancename

CreatedTime

integer

The time when the backup client was created. This value is a UNIX timestamp. Unit: seconds.

1554347313

LastHeartBeatTime

integer

The last heartbeat time of the backup client. This value is a UNIX timestamp. Unit: seconds.

1554347313

ClientType

string

The type of the backup client. The value **ECS\_CLIENT** indicates an ECS file backup client.

ECS\_CLIENT

Hostname

string

The hostname of the host where the backup client is deployed.

hostname

InstanceId

string

The instance ID.

-   If the client is an ECS file backup client, this parameter indicates the ID of the ECS instance.
    
-   If the client is a local file backup client, this parameter indicates the hardware fingerprint that is generated based on system information.
    

i-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Appliance

boolean

Indicates whether the client is a backup-archive all-in-one machine.

-   true: The client is a backup-archive all-in-one machine.
    
-   false: The client is not a backup-archive all-in-one machine.
    

false

UpdatedTime

integer

The time when the backup client was updated. This value is a UNIX timestamp. Unit: seconds.

1554347313

OsType

string

This parameter is returned only if **ClientType** is set to **ECS\_CLIENT**. This parameter indicates the operating system type of the client. Valid values:

-   **windows**
    
-   **linux**
    

linux

ZoneId

string

This parameter is returned only if **ClientType** is set to **ECS\_CLIENT**. This parameter indicates the zone ID.

cn-hangzhou-f

ClientVersion

string

The version number of the backup client.

2.4.5

Tags

array<object>

The tag information.

object

Key

string

The tag key of the repository. N can be an integer from 1 to 20.

-   The tag key cannot start with `aliyun` or `acs:`.
    
-   The tag key cannot contain `http://` or `https://`.
    
-   The tag key cannot be an empty string.
    

TestKey

Value

string

The tag value of the repository. N can be an integer from 1 to 20.

-   The tag value cannot start with `aliyun` or `acs:`.
    
-   The tag value cannot contain `http://` or `https://`.
    
-   The tag value cannot be an empty string.
    

TestValue

Settings

object

The backup client settings.

ProxyHost

string

The IP address of the custom proxy server for the data plane.

192.168.11.100

MaxCpuCore

string

The number of CPU cores that are used by a single backup job. A value of 0 indicates that the number of CPU cores is not limited.

1

ProxyPort

integer

The port number of the custom proxy server for the data plane.

3128

UseHttps

string

Indicates whether data is transmitted over HTTPS on the data plane.

-   true: Data is transmitted over HTTPS.
    
-   false: Data is transmitted over HTTP.
    

false

ProxyPassword

string

The password for the custom proxy server for the data plane.

\*\*\*\*\*\*

ProxyUser

string

The username for the custom proxy server for the data plane.

user

DataProxySetting

string

The proxy settings for the data plane. Valid values:

-   **DISABLE**: A proxy is not used.
    
-   **USE\_CONTROL\_PROXY** (default): The proxy settings are the same as the control plane.
    
-   **CUSTOM**: Custom settings are used. The HTTP protocol is used.
    

USE\_CONTROL\_PROXY

DataNetworkType

string

The network type of the data plane. Valid values:

-   **PUBLIC**: Internet
    
-   **VPC**: VPC
    
-   **CLASSIC**: classic network
    

VPC

MaxWorker

string

The number of concurrent backup jobs. A value of 0 indicates that the number of concurrent backup jobs is not limited.

1

MaxMemory

integer

The maximum memory that the client can use. Unit: bytes. This parameter is supported only for client versions 2.13.0 and later.

0

AlertOnPartialComplete

boolean

Indicates whether to generate an alert for partially completed jobs. This parameter is valid only for local file backup and ECS file backup.

false

## Examples

Success response

`JSON` format

```
{
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E",
  "Success": true,
  "Code": "200",
  "Message": "successful",
  "PageNumber": 1,
  "PageSize": 10,
  "TotalCount": 8,
  "Clients": [
    {
      "Status": "ACTIVATED",
      "BackupStatus": "PROTECTED",
      "ArchType": "amd64",
      "ClientId": "c-*********************",
      "MaxClientVersion": "2.4.5",
      "PrivateIpV4": "192.168.1.1",
      "InstanceName": "instancename",
      "CreatedTime": 1554347313,
      "LastHeartBeatTime": 1554347313,
      "ClientType": "ECS_CLIENT",
      "Hostname": "hostname",
      "InstanceId": "i-*********************",
      "Appliance": false,
      "UpdatedTime": 1554347313,
      "OsType": "linux",
      "ZoneId": "cn-hangzhou-f",
      "ClientVersion": "2.4.5",
      "Tags": [
        {
          "Key": "TestKey",
          "Value": "TestValue"
        }
      ],
      "Settings": {
        "ProxyHost": "192.168.11.100",
        "MaxCpuCore": "1",
        "ProxyPort": 3128,
        "UseHttps": "false",
        "ProxyPassword": "******",
        "ProxyUser": "user",
        "DataProxySetting": "USE_CONTROL_PROXY",
        "DataNetworkType": "VPC",
        "MaxWorker": "1",
        "MaxMemory": 0,
        "AlertOnPartialComplete": false
      }
    }
  ]
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/hbr/2017-09-08/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/hbr/2017-09-08/DescribeBackupClients#workbench-doc-change-demo) for a complete list.
