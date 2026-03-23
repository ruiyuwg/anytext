Uninstalls an HBR client.

## Operation description

If you call this operation, the specified HBR client is uninstalled. To reinstall the HBR client, call the CreateClients operation.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/hbr/2017-09-08/UninstallClient)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/hbr/2017-09-08/UninstallClient)

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

hbr:UninstallClient

delete

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

v-0008n2q\*\*\*\*\*\*ax3

ClientId

string

Yes

The ID of the HBR client.

c-000iuqo\*\*\*\*\*\*zi3rn

ResourceGroupId

string

No

The ID of the resource group.

rg-acfm3erpwweavki

## Response parameters

Parameter

Type

Description

Example

object

Code

string

The HTTP status code. The status code 200 indicates that the call is successful.

200

Message

string

The message that is returned. If the call is successful, "successful" is returned. If the call fails, an error message is returned.

successful

RequestId

string

The ID of the request.

048A2164-3732-5DF5-88B5-F97FA56DAEB1

TaskId

string

The ID of the asynchronous job. You can call the DescribeTask operation to query the execution result of an asynchronous job.

t-0009qs5qcnvuvqrl2mxl

Success

boolean

Indicates whether the call is successful. Valid values:

-   true: The call is successful.
-   false: The call fails.

true

## Examples

Sample success responses

`JSON`format

```
{
  "Code": 200,
  "Message": "successful",
  "RequestId": "048A2164-3732-5DF5-88B5-F97FA56DAEB1",
  "TaskId": "t-0009qs5qcnvuvqrl2mxl",
  "Success": true
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/hbr/2017-09-08/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-02-23

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/hbr/2017-09-08/UninstallClient?updateTime=2024-02-23#workbench-doc-change-demo)

2024-02-23

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/hbr/2017-09-08/UninstallClient?updateTime=2024-02-23#workbench-doc-change-demo)

2024-02-23

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/hbr/2017-09-08/UninstallClient?updateTime=2024-02-23#workbench-doc-change-demo)

2024-02-23

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/hbr/2017-09-08/UninstallClient?updateTime=2024-02-23#workbench-doc-change-demo)

2024-02-23

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/hbr/2017-09-08/UninstallClient?updateTime=2024-02-23#workbench-doc-change-demo)

2024-02-23

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/hbr/2017-09-08/UninstallClient?updateTime=2024-02-23#workbench-doc-change-demo)

2024-02-23

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/hbr/2017-09-08/UninstallClient?updateTime=2024-02-23#workbench-doc-change-demo)

2024-02-23

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/hbr/2017-09-08/UninstallClient?updateTime=2024-02-23#workbench-doc-change-demo)

2024-02-23

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/hbr/2017-09-08/UninstallClient?updateTime=2024-02-23#workbench-doc-change-demo)

2024-02-23

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/hbr/2017-09-08/UninstallClient?updateTime=2024-02-23#workbench-doc-change-demo)

2024-02-23

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/hbr/2017-09-08/UninstallClient?updateTime=2024-02-23#workbench-doc-change-demo)

2024-02-23

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/hbr/2017-09-08/UninstallClient?updateTime=2024-02-23#workbench-doc-change-demo)

2024-02-23

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/hbr/2017-09-08/UninstallClient?updateTime=2024-02-23#workbench-doc-change-demo)

2024-02-23

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/hbr/2017-09-08/UninstallClient?updateTime=2024-02-23#workbench-doc-change-demo)

2024-02-23

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/hbr/2017-09-08/UninstallClient?updateTime=2024-02-23#workbench-doc-change-demo)

2024-02-23

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/hbr/2017-09-08/UninstallClient?updateTime=2024-02-23#workbench-doc-change-demo)

2024-02-23

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/hbr/2017-09-08/UninstallClient?updateTime=2024-02-23#workbench-doc-change-demo)

2024-02-23

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/hbr/2017-09-08/UninstallClient?updateTime=2024-02-23#workbench-doc-change-demo)

2024-02-23

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/hbr/2017-09-08/UninstallClient?updateTime=2024-02-23#workbench-doc-change-demo)

2024-02-23

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/hbr/2017-09-08/UninstallClient?updateTime=2024-02-23#workbench-doc-change-demo)
