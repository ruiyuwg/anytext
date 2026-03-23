Queries the information about a sample query template.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/ResourceCenter/2022-12-01/GetExampleQuery)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/ResourceCenter/2022-12-01/GetExampleQuery)

## **RAM authorization**

No authorization for this operation. If you encounter issues with this operation, contact technical support.

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

QueryId

string

Yes

The ID of the template.

**Note**

You can call the [ListExampleQueries](/help/en/resource-management/resource-center/developer-reference/api-resourcecenter-2022-12-01-listexamplequeries) operation to obtain the template ID.

sq-0PfKy\*\*\*\*

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The returned result.

ExampleQuery

object

The information about the sample query template.

Description

string

The description of the template.

返回所有有权限的资源，并按照资源类型和资源ID排列。

Expression

string

The query statement in the template.

SELECT resource\_id, resource\_name, region\_id, zone\_id, resource\_type, account\_id, create\_time, resource\_group\_id, tags, ip\_addresses, vpc\_id, v\_switch\_id FROM resources ORDER BY resource\_type, resource\_id LIMIT 1000 OFFSET 0;

Name

string

The name of the template.

列出所有阿里云资源

QueryId

string

The ID of the template.

sq-0PfKy\*\*\*\*

RequestId

string

The request ID.

36A3D9BE-B607-5993-B546-7E19EF65DC00

## Examples

Success response

`JSON` format

```
{
  "ExampleQuery": {
    "Description": "返回所有有权限的资源，并按照资源类型和资源ID排列。",
    "Expression": "SELECT\n  resource_id,\n  resource_name,\n  region_id,\n  zone_id,\n  resource_type,\n  account_id,\n  create_time,\n  resource_group_id,\n  tags,\n  ip_addresses,\n  vpc_id,\n  v_switch_id\nFROM\n  resources\nORDER BY\n  resource_type,\n  resource_id\nLIMIT\n  1000 OFFSET 0;",
    "Name": "列出所有阿里云资源",
    "QueryId": "sq-0PfKy****"
  },
  "RequestId": "36A3D9BE-B607-5993-B546-7E19EF65DC00"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

409

NotExists.QueryId

The QueryId does not exist.

See [Error Codes](https://api.alibabacloud.com/document/ResourceCenter/2022-12-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/ResourceCenter/2022-12-01/GetExampleQuery#workbench-doc-change-demo) for a complete list.
