Queries the cloud services and resource types that are supported by Cloud Config.

## Operation description

This topic provides an example on how to query the Alibaba Cloud services and resource types supported by a Cloud Config.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Config/2020-09-07/ListSupportedProducts)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Config/2020-09-07/ListSupportedProducts)

## **RAM authorization**

No authorization for this operation. If you encounter issues with this operation, contact technical support.

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

NextToken

string

No

The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken.

D3AjqMNSy0ls7zBNCf3a\*\*\*\*

MaxResults

integer

No

The maximum number of entries to return in a request.

Valid values: 1 to 500. Default value: 200.

200

## Response elements

**Element**

**Type**

**Description**

**Example**

object

Products

array<object>

The cloud services that are supported by Cloud Config.

array<object>

ProductNameEn

string

The English name of the Alibaba Cloud service.

Elastic Compute Service

ResourceTypeList

array<object>

The resource types that are supported by Cloud Config.

object

ResourceType

string

The identifier of the resource type.

ACS::ECS::Instance

TypeNameEn

string

The English name of the resource type.

Ecs Instance

TypeNameZh

string

The Chinese name of the resource type.

ECS实例

TypePageLink

string

The URL of the resource type in the console.

https://ecs.console.alibabacloud.com/#/server/@{ResourceId}/detail?regionId=@{RegionId}

ProductNameZh

string

The Chinese name of the Alibaba Cloud service.

云服务器ECS

RequestId

string

The request ID.

610B0276-ABEE-57DF-9C13-C2415FADA7D6

NextToken

string

A pagination token. It can be used in the next request to retrieve a new page of results.

D99AjqMNSy0ls7zBNCfcs\*\*\*\*

MaxResults

string

The maximum number of entries to return for a single request. Valid values: 1 to 500.

200

## Examples

Success response

`JSON` format

```
{
  "Products": [
    {
      "ProductNameEn": "Elastic Compute Service",
      "ResourceTypeList": [
        {
          "ResourceType": "ACS::ECS::Instance",
          "TypeNameEn": "Ecs Instance",
          "TypeNameZh": "ECS实例",
          "TypePageLink": "https://ecs.console.alibabacloud.com/#/server/@{ResourceId}/detail?regionId=@{RegionId}"
        }
      ],
      "ProductNameZh": "云服务器ECS"
    }
  ],
  "RequestId": "610B0276-ABEE-57DF-9C13-C2415FADA7D6",
  "NextToken": "D99AjqMNSy0ls7zBNCfcs****",
  "MaxResults": "200"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

503

ServiceUnavailable

The request has failed due to a temporary failure of the server.

The request has failed due to a temporary failure of the server.

See [Error Codes](https://api.alibabacloud.com/document/Config/2020-09-07/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Config/2020-09-07/ListSupportedProducts#workbench-doc-change-demo) for a complete list.
