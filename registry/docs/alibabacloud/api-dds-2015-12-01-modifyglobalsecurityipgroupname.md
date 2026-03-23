Modifies the name of a global IP whitelist template associated with an ApsaraDB for MongoDB instance.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Dds/2015-12-01/ModifyGlobalSecurityIPGroupName)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Dds/2015-12-01/ModifyGlobalSecurityIPGroupName)

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

dds:ModifyGlobalSecurityIPGroupName

update

\*All Resource

`*`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

RegionId

string

Yes

The region ID of the instance. You can call the [DescribeRegions](/help/en/mongodb/api-describeregions) operation to query the most recent region list.

cn-hangzhou

GlobalIgName

string

Yes

The name of the IP whitelist template. The name must meet the following requirements:

-   It can contain lowercase letters, digits, and underscores (\_).
    
-   It must start with a letter and end with a letter or digit.
    
-   It must be 2 to 120 characters in length.
    

prod\_baoxian\_k8s

GlobalSecurityGroupId

string

Yes

The ID of the IP whitelist template.

g-xmtncwkrzqqoe59dzljb

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The request ID.

F8CA8312-530A-413A-9129-F2BB32A8D404

GlobalSecurityIPGroup

array<object>

The global IP whitelist templates.

object

The global IP whitelist template.

GlobalSecurityGroupId

string

The ID of the IP whitelist template.

g-qiawi8ec1urcx9swoy37

GlobalIgName

string

The name of the IP whitelist template.

def

GIpList

string

The IP addresses in the whitelist template.

**Note**

Separate multiple IP addresses with commas (,). You can create up to 1,000 IP addresses or CIDR blocks for all IP address whitelists.

222.70.197.187

RegionId

string

The region ID of the instance. You can call the [DescribeRegions](/help/en/mongodb/api-describeregions) operation to query the most recent region list.

cn-shanghai

## Examples

Success response

`JSON` format

```
{
  "RequestId": "F8CA8312-530A-413A-9129-F2BB32A8D404",
  "GlobalSecurityIPGroup": [
    {
      "GlobalSecurityGroupId": "g-qiawi8ec1urcx9swoy37",
      "GlobalIgName": "def",
      "GIpList": "222.70.197.187",
      "RegionId": "cn-shanghai"
    }
  ]
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

RequiredParam.NotFound

Required input param is not found.

See [Error Codes](https://api.alibabacloud.com/document/Dds/2015-12-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Dds/2015-12-01/ModifyGlobalSecurityIPGroupName#workbench-doc-change-demo) for a complete list.
