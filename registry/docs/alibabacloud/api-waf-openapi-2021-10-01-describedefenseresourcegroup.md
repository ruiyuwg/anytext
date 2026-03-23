Retrieves the details of a protected object group.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/waf-openapi/2021-10-01/DescribeDefenseResourceGroup)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/waf-openapi/2021-10-01/DescribeDefenseResourceGroup)

## **RAM authorization**

The table below describes the authorization required to call this API. You can define it in a Resource Access Management (RAM) policy. The table's columns are detailed below:

-   Action: The actions can be used in the `Action` element of RAM permission policy statements to grant permissions to perform the operation.
    
-   API: The API that you can call to perform the action.
    
-   Access level: The predefined level of access granted for each API. Valid values: create, list, get, update, and delete.
    
-   Resource type: The type of the resource that supports authorization to perform the action. It indicates if the action supports resource-level permission. The specified resource must be compatible with the action. Otherwise, the policy will be ineffective.
    
    -   For APIs with resource-level permissions, required resource types are marked with an asterisk (\*). Specify the corresponding Alibaba Cloud Resource Name (ARN) in the `Resource` element of the policy.
        
    -   For APIs without resource-level permissions, it is shown as All Resources. Use an asterisk (**\***) in the `Resource` element of the policy.
        
-   Condition key: The condition keys defined by the service. The key allows for granular control, applying to either actions alone or actions associated with specific resources. In addition to service-specific condition keys, Alibaba Cloud provides a set of [common condition keys](/help/en/ram/policy-elements#section-jix-u0j-2ms) applicable across all RAM-supported services.
    
-   Dependent action: The dependent actions required to run the action. To complete the action, the RAM user or the RAM role must have the permissions to perform all dependent actions.
    

**Action**

**Access level**

**Resource type**

**Condition key**

**Dependent action**

yundun-waf:DescribeDefenseResourceGroup

get

\*All Resource

`*`

-   acs:ResourceGroupId

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

InstanceId

string

Yes

The ID of the Web Application Firewall (WAF) instance.

**Note**

Call [DescribeInstance](/help/en/waf/web-application-firewall-3-0/developer-reference/api-waf-openapi-2021-10-01-describeinstance) to query the ID of the current WAF instance.

waf\_cdnsdf3\*\*\*\*

GroupName

string

Yes

The name of the protected object group that you want to query.

group221

RegionId

string

No

The region of the WAF instance. The following fields are configured:

-   **cn-hangzhou**: The Chinese mainland.
    
-   **ap-southeast-1**: Outside the Chinese mainland.
    

cn-hangzhou

ResourceManagerResourceGroupId

string

No

The ID of the Alibaba Cloud resource group.

rg-acfm\*\*\*q

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The result of the request.

Group

object

The information about the protected object group.

GroupName

string

The name of the protected object group that you want to query.

group1

GmtCreate

integer

The timestamp when the protected object group was created.

23242312312

ResourceList

string

All the protected objects that are added to the protected object group. Separate the protected objects with commas (,).

test1.aliyundoc.com,test2.aliyundoc.com

Description

string

The description of the protected object group.

test

GmtModified

integer

The timestamp when the protected object group was modified.

23242312312

RequestId

string

The request ID.

E67D21C6-5376-5F94-B745-70E08D03E3CB

## Examples

Success response

`JSON` format

```
{
  "Group": {
    "GroupName": "group1",
    "GmtCreate": 23242312312,
    "ResourceList": "test1.aliyundoc.com,test2.aliyundoc.com",
    "Description": "test",
    "GmtModified": 23242312312
  },
  "RequestId": "E67D21C6-5376-5F94-B745-70E08D03E3CB"
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/waf-openapi/2021-10-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/waf-openapi/2021-10-01/DescribeDefenseResourceGroup#workbench-doc-change-demo) for a complete list.
