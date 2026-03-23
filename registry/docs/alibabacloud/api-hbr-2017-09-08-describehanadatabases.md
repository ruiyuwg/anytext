Queries the information about SAP HANA databases.

## Operation description

After you register an SAP HANA instance and install a Cloud Backup client on the instance, you can call this operation to query the information about SAP HANA databases. You can call the StartHanaDatabaseAsync operation to start a database and call the StopHanaDatabaseAsync operation to stop a database.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/hbr/2017-09-08/DescribeHanaDatabases)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/hbr/2017-09-08/DescribeHanaDatabases)

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

hbr:DescribeHanaDatabases

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

v-00063fq\*\*\*\*\*\*8xjr

ClusterId

string

Yes

The ID of the SAP HANA instance.

cl-000hpc\*\*\*\*\*\*uv14x

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

ResourceGroupId

string

No

The ID of the resource group.

rg-acfmw2azsegupmi

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The request ID.

DAAB6A29-34EB-5F56-962F-D5BDBFE8A5C2

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

long

The total number of entries returned.

10

HanaDatabases

array<object>

The information about SAP HANA databases.

HanaDatabase

object

The information about SAP HANA databases.

Host

string

The hostname.

izbp1jbf3zy\*\*\*\*\*\*antqmz

SqlPort

integer

The port number.

30013

DatabaseName

string

The database name.

SYSTEMDB

ServiceName

string

The service name.

indexserver

ActiveStatus

string

Indicates whether the database is started. Valid values:

-   **YES**: The database is started.
-   **NO**: The database is not started.

YES

Detail

string

The detailed information.

master

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "DAAB6A29-34EB-5F56-962F-D5BDBFE8A5C2",
  "Success": true,
  "Code": 200,
  "Message": "successful",
  "PageNumber": 1,
  "PageSize": 10,
  "TotalCount": 10,
  "HanaDatabases": {
    "HanaDatabase": [
      {
        "Host": "izbp1jbf3zy******antqmz",
        "SqlPort": 30013,
        "DatabaseName": "SYSTEMDB",
        "ServiceName": "indexserver",
        "ActiveStatus": "YES",
        "Detail": "master"
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

No change history
