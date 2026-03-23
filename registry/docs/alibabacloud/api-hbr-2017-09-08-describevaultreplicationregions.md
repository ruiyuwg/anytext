Queries the regions that support cross-region replication.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/hbr/2017-09-08/DescribeVaultReplicationRegions)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/hbr/2017-09-08/DescribeVaultReplicationRegions)

## Authorization information

There is currently no authorization information disclosed in the API.

## Request parameters

Parameter

Type

Required

Description

Example

Token

string

No

This parameter is deprecated.

01W3ZZOQ

VaultId`deprecated`

string

No

This parameter is deprecated.

v-00030j3c\*\*\*\*\*\*sn

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

F4EEB401-DD21-588D-AE3B-1E835C7655E1

Success

boolean

Indicates whether the call is successful.

-   true: The call is successful.
-   false: The call fails.

true

Regions

array

The regions that support cross-region replication.

RegionId

string

The regions that support cross-region replication.

cn-hangzhou

## Examples

Sample success responses

`JSON`format

```
{
  "Code": 200,
  "Message": "successful",
  "RequestId": "F4EEB401-DD21-588D-AE3B-1E835C7655E1",
  "Success": true,
  "Regions": {
    "RegionId": [
      "cn-hangzhou"
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
