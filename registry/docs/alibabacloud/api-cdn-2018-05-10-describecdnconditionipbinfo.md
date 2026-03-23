Queries the Internet service provider (ISP), region, and country that are required for advanced conditions.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Cdn/2018-05-10/DescribeCdnConditionIPBInfo)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Cdn/2018-05-10/DescribeCdnConditionIPBInfo)

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

cdn:DescribeCdnConditionIPBInfo

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

DataId

string

Yes

The configuration ID. Valid values:

-   condition\_region\_config\_cn
-   condition\_region\_config\_en
-   condition\_isp\_config\_cn
-   condition\_isp\_config\_en
-   condition\_country\_config\_cn
-   condition\_country\_config\_en

condition\_region\_config\_cn

## Response parameters

Parameter

Type

Description

Example

object

The request ID.

RequestId

string

The request ID.

2C4AA72D-8C00-1113-BD68-8BC4E3CF4FF6

Datas

array<object>

The data that is returned.

Data

object

Value

string

The configuration value.

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "2C4AA72D-8C00-1113-BD68-8BC4E3CF4FF6",
  "Datas": [
    {
      "Value": ""
    }
  ]
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Cdn/2018-05-10/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
