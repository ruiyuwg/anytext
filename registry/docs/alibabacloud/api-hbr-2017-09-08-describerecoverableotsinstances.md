Queries the tables of a restorable Tablestore instance.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/hbr/2017-09-08/DescribeRecoverableOtsInstances)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/hbr/2017-09-08/DescribeRecoverableOtsInstances)

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

hbr:DescribeRecoverableOtsInstances

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

CrossAccountType

string

No

Specifies whether data is backed up within the same Alibaba Cloud account or across Alibaba Cloud accounts. Valid values:

-   SELF\_ACCOUNT: Data is backed up within the same Alibaba Cloud account.
-   CROSS\_ACCOUNT: Data is backed up across Alibaba Cloud accounts.

CROSS\_ACCOUNT

CrossAccountUserId

long

No

The ID of the source Alibaba Cloud account that authorizes the current Alibaba Cloud account to back up data across Alibaba Cloud accounts.

1440155109798732

CrossAccountRoleName

string

No

The name of the Resource Access Management (RAM) role that is created within the source Alibaba Cloud account and assigned to the current Alibaba Cloud account to authorize the current Alibaba Cloud account to back up data across Alibaba Cloud accounts.

hbrcrossrole

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The request ID.

14DC089E-5DD3-5028-AEDB-93D78E11DB2A

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

OtsInstances

array<object>

The list of Tablestore instances that can be restored and the tables in the instances.

OtsInstance

object

The list of Tablestore instances that can be restored and the tables in the instances.

InstanceName

string

The name of the Tablestore instance that can be restored.

instancename

TableNames

array

The names of the tables in the Tablestore instance.

TableName

string

The names of the tables in the Tablestore instance.

\["table1", "table2", "table3"\]

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "14DC089E-5DD3-5028-AEDB-93D78E11DB2A",
  "Success": true,
  "Code": 200,
  "Message": "successful",
  "OtsInstances": [
    {
      "InstanceName": "instancename",
      "TableNames": [
        [
          "table1",
          "table2",
          "table3"
        ]
      ]
    }
  ]
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/hbr/2017-09-08/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
