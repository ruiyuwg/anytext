Queries the status of IP addresses of points of presence (POPs). The status of an IP address of a POP indicates whether content delivery acceleration is supported by the POP.

## Operation description

**Note** You can call this operation up to 50 times per second per account.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Cdn/2018-05-10/DescribeIpStatus)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Cdn/2018-05-10/DescribeIpStatus)

## Authorization information

The following table shows the authorization information corresponding to the API. The authorization information can be used in the `Action` policy element to grant a RAM user or RAM role the permissions to call this API operation. Description:

-   Operation: the value that you can use in the Action element to specify the operation on a resource.
-   Access level: the access level of each operation. The levels are read, write, and list.
-   Resource type: the type of the resource on which you can authorize the RAM user or the RAM role to perform the operation. Take note of the following items:
    -   The required resource types are displayed in bold characters.
    -   If the permissions cannot be granted at the resource level, `All Resources` is used in the Resource type column of the operation.
-   Condition Key: the condition key that is defined by the cloud service.
-   Associated operation: other operations that the RAM user or the RAM role must have permissions to perform to complete the operation. To complete the operation, the RAM user or the RAM role must have the permissions to perform the associated operations.

Operation

Access level

Resource type

Condition key

Associated operation

cdn:DescribeIpStatus

none

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

Ips

string

Yes

The IP addresses that you want to query. Separate IP addresses with underscores (\_), such as Ips=ip1\_ip2.

ip1\_ip2

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The ID of the request.

F61CDR30-E83C-4FDA-BF73-9A94CDD44229

IpStatus

array<object>

The status of the IP addresses of the POPs.

UsageData

object

ip

string

The IP address of the POP.

10.10.10.10

status

string

The status.

-   **nonali**: not an Alibaba Cloud CDN POP
-   **normal**: an available Alibaba Cloud CDN POP
-   **abnormal**: an unavailable Alibaba Cloud CDN POP

abnormal

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "F61CDR30-E83C-4FDA-BF73-9A94CDD44229",
  "IpStatus": [
    {
      "ip": "10.10.10.10",
      "status": "abnormal"
    }
  ]
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidArgIps.Malformed

The specified ips is invalid.

\-

400

InvalidArgIps.IpCanNotFound

The ips can not found.

The input parameter is not found in the system and is not the IP address of Alibaba Cloud CDN.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Cdn/2018-05-10/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
