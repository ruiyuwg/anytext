Queries available endpoint services.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Vpc/2016-04-28/ListVpcEndpointServicesByEndUser)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Vpc/2016-04-28/ListVpcEndpointServicesByEndUser)

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

vpc:ListVpcEndpointServicesByEndUser

list

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

ServiceName

string

No

The name of the endpoint service that you want to query.

com.aliyun.cn-hangzhou.oss

NextToken

string

No

The token that is used for the next query. Valid values:

-   If this is your first query and no next queries are to be sent, ignore this parameter.
-   If a next query is to be performed, set the value to the NextToken value returned in the last call to the ListListenerCertificates operation.

FFmyTO70tTpLG6I3FmYAXGKPd\*\*\*\*

MaxResults

long

No

The number of entries to return per page. Valid values: **1** to **100**. Default value: **20**.

20

RegionId

string

Yes

The region ID of the gateway endpoint.

You can call the [DescribeRegions](/help/en/vpc/api-describeregions) operation to query the most recent region list.

cn-hangzhou

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The ID of the request.

0AB1129F-32C1-5E4D-9E22-E4A859CA46EB

NextToken

string

The token that is used for the next query. Valid values:

-   If no value is returned for **NextToken**, no next queries are sent.
-   If **NextToken** is returned, the value is the token that is used for the next query.

FFmyTO70tTpLG6I3FmYAXGKPd\*\*\*\*

MaxResults

long

The number of entries returned per page.

20

Services

array<object>

The list of entries returned.

Service

object

ServiceId

string

The ID of the endpoint service.

vpces-m5enwdmilo210aibo9\*\*\*\*

ServiceName

string

The name of the endpoint service.

com.aliyun.cn-hangzhou.oss

DefaultPolicyDocument

string

The default access policy.

{ \\"Version\\" : \\"1\\", \\"Statement\\" : \[ { \\"Effect\\" : \\"Allow\\", \\"Action\\" : \\"\*\\", \\"Principal\\" : \\"\*\\", \\"Resource\\" : \\"\*\\" } \] }

SupportPolicy

boolean

Indicate whether the endpoint service supports the access policy. Valid values:

-   **false**
-   **true**

true

ServiceDomain

string

The domain name of the cloud service to which the endpoint service belongs.

oss-admin.aliyuncs.com

TotalCount

string

The total number of entries returned.

2

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "0AB1129F-32C1-5E4D-9E22-E4A859CA46EB",
  "NextToken": "FFmyTO70tTpLG6I3FmYAXGKPd****",
  "MaxResults": 20,
  "Services": [
    {
      "ServiceId": "vpces-m5enwdmilo210aibo9****",
      "ServiceName": "com.aliyun.cn-hangzhou.oss",
      "DefaultPolicyDocument": "{   \\\"Version\\\" : \\\"1\\\",   \\\"Statement\\\" : [ {     \\\"Effect\\\" : \\\"Allow\\\",     \\\"Action\\\" : \\\"*\\\",     \\\"Principal\\\" : \\\"*\\\",     \\\"Resource\\\" : \\\"*\\\"   } ] }",
      "SupportPolicy": true,
      "ServiceDomain": "oss-admin.aliyuncs.com"
    }
  ],
  "TotalCount": 2
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

ResourceNotFound.EndpointServiceId

The specified resource gateway endpoint service is not found.

\-

400

IllegalParam.NextToken

The specified NextToken is invalid.

The specified NextToken is invalid.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Vpc/2016-04-28/errorCode).

## Change history

Change time

Summary of changes

Operation

2023-08-25

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/ListVpcEndpointServicesByEndUser?updateTime=2023-08-25#workbench-doc-change-demo)
