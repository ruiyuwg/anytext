Queries the supported resource relations for a specified resource type.

## Operation description

This topic provides an example of how to query the resource relations supported by the ACS::ECS::Instance resource type.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Config/2020-09-07/GetSupportedResourceRelationConfig)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Config/2020-09-07/GetSupportedResourceRelationConfig)

## **RAM authorization**

No authorization for this operation. If you encounter issues with this operation, contact technical support.

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

ResourceType

string

Yes

The resource type.

ACS::ECS::Instance

## Response elements

**Element**

**Type**

**Description**

**Example**

object

ResourceRelationConfigList

array<object>

The list of resource relations.

object

The list of resource relations.

TargetResourceType

string

The resource type of the relation target.

ACS::ECS::Disk

RelationType

string

The type of the resource relation. Valid values:

-   IsContained: Is contained in.
    
-   IsAttachedTo: Is attached to.
    
-   IsAssociatedIn: Is associated with.
    
-   Contains: Contains.
    

IsAttachedTo

RequestId

string

The request ID.

409D022F-394C-5AAB-A74A-2F1DC9F6375E

## Examples

Success response

`JSON` format

```
{
  "ResourceRelationConfigList": [
    {
      "TargetResourceType": "ACS::ECS::Disk",
      "RelationType": "IsAttachedTo"
    }
  ],
  "RequestId": "409D022F-394C-5AAB-A74A-2F1DC9F6375E"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

NoPermission

You are not authorized to perform this operation.

You are not authorized to perform this operation.

404

AccountNotExisted

Your account does not exist.

503

ServiceUnavailable

The request has failed due to a temporary failure of the server.

The request has failed due to a temporary failure of the server.

See [Error Codes](https://api.alibabacloud.com/document/Config/2020-09-07/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Config/2020-09-07/GetSupportedResourceRelationConfig#workbench-doc-change-demo) for a complete list.
