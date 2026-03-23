Updates the configurations of an HBR client.

## Operation description

You can call this operation to update the configurations of both the old and new HBR clients.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/hbr/2017-09-08/UpdateClientSettings)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/hbr/2017-09-08/UpdateClientSettings)

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

hbr:UpdateClientSettings

update

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

UseHttps

boolean

Yes

Specifies whether to transmit the data on the data plane over HTTPS. Valid values:

-   true: Data is transmitted over HTTPS.
-   false: Data is transmitted over HTTP.

false

VaultId

string

Yes

The ID of the backup vault. This parameter is required for the old HBR client.

v-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

ClientId

string

Yes

The ID of the HBR client.

c-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

DataNetworkType

string

No

The type of the endpoint on the data plane. Valid values:

-   **PUBLIC**: Internet
-   **VPC**: virtual private cloud (VPC)
-   **CLASSIC**: classic network

VPC

MaxCpuCore

integer

No

The number of CPU cores used by a single backup job. The value 0 indicates that the number is unlimited.

1

MaxWorker

integer

No

The number of concurrent backup jobs. The value 0 indicates that the number is unlimited.

1

DataProxySetting

string

No

The proxy configuration on the data plane. Valid values:

-   **DISABLE**: The proxy is not used.
-   **USE\_CONTROL\_PROXY** (default): The configuration is the same as that on the control plane.
-   **CUSTOM**: The configuration is customized (HTTP).

USE\_CONTROL\_PROXY

ProxyHost

string

No

The custom host IP address of the proxy server on the data plane.

192.168.11.100

ProxyPort

integer

No

The custom host port of the proxy server on the data plane.

3128

ProxyUser

string

No

The custom username of the proxy server on the data plane.

user

ProxyPassword

string

No

The custom password of the proxy server on the data plane.

\*\*\*\*\*\*

ResourceGroupId

string

No

The ID of the resource group.

rg-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

MaxMemory

long

No

The maximum memory that can be used by the client. Unit: bytes. Only V2.13.0 and later are supported.

4096

AlertOnPartialComplete

boolean

No

Specifies whether to generate alert for partially completed jobs. This parameter is valid only for on-premises file backup and ECS file backup.

false

## Response parameters

Parameter

Type

Description

Example

object

Code

string

The HTTP status code. The status code 200 indicates that the request was successful.

200

Message

string

The returned message. If the request was successful, "successful" is returned. If the request failed, an error message is returned.

successful

RequestId

string

The request ID.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E

Success

boolean

Indicates whether the request was successful. Valid values:

-   true
-   false

true

## Examples

Sample success responses

`JSON`format

```
{
  "Code": 200,
  "Message": "successful",
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E",
  "Success": true
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/hbr/2017-09-08/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
