Queries the metadata of resource types

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/ResourceCenter/2022-12-01/ListResourceTypes)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/ResourceCenter/2022-12-01/ListResourceTypes)

## **RAM authorization**

No authorization for this operation. If you encounter issues with this operation, contact technical support.

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

AcceptLanguage

string

No

The language of the response. Valid values:

-   zh-CN: Chinese
    
-   en-US: English
    

zh-CN

ResourceType

string

No

The resource type.

For more information about the resource types that are supported by Resource Center, see [Services that work with Resource Center](/help/en/resource-management/resource-center/product-overview/services-that-work-with-resource-center).

ACS::ACK::Cluster

Query

array

No

The query conditions.

string

No

The field for the query. Valid values:

-   ResourceType
    
-   ProductName
    
-   ResourceTypeName
    
-   FilterKeys
    
-   CodeMapping
    

ResourceType

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The returned result.

RequestId

string

The ID of the request.

E5556E4C-479A-5BBB-B325-F07563E7E917

ResourceTypes

array<object>

The resource types.

array<object>

The resource types.

CodeMapping

object

The code mapping of the resource type.

ResourceGroup

string

The resource group.

cs.cluster

Tag

string

The tag.

cs.cluster

FilterKeys

array

The supported filter conditions.

string

A supported filter condition.

ResourceName

ProductName

string

The name of the Alibaba Cloud service.

容器服务Kubernetes版

ResourceType

string

The resource type.

ACS::ACK::Cluster

ResourceTypeName

string

The name of the resource type.

集群

RelatedResourceTypes

array

The name of supported related resource types.

string

A supported related resource type.

ACS::ACK::Cluster

## Examples

Success response

`JSON` format

```
{
  "RequestId": "E5556E4C-479A-5BBB-B325-F07563E7E917",
  "ResourceTypes": [
    {
      "CodeMapping": {
        "ResourceGroup": "cs.cluster",
        "Tag": "cs.cluster"
      },
      "FilterKeys": [
        "ResourceName"
      ],
      "ProductName": "容器服务Kubernetes版",
      "ResourceType": "ACS::ACK::Cluster",
      "ResourceTypeName": "集群",
      "RelatedResourceTypes": [
        "ACS::ACK::Cluster"
      ]
    }
  ]
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

409

InvalidParameter.Query

The specified parameter Query is not valid.

409

InvalidParameter.ResourceType

The specified parameter ResourceType is not valid.

See [Error Codes](https://api.alibabacloud.com/document/ResourceCenter/2022-12-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/ResourceCenter/2022-12-01/ListResourceTypes#workbench-doc-change-demo) for a complete list.
