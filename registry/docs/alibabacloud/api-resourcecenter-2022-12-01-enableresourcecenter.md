Activates the Resource Center service.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/ResourceCenter/2022-12-01/EnableResourceCenter)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/ResourceCenter/2022-12-01/EnableResourceCenter)

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

resourcecenter:EnableResourceCenter

create

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

No parameters required.

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The response parameters.

RequestId

string

The request ID.

45357BEF-AB50-5E4D-B05D-5A882A4BE924

Status

string

The activation status of the service. Valid values:

-   Pending: The service is being activated.
    
-   Enabled: The service is activated.
    

Pending

## Examples

Success response

`JSON` format

```
{
  "RequestId": "45357BEF-AB50-5E4D-B05D-5A882A4BE924",
  "Status": "Pending"
}
```

## Error codes

**HTTP status code**

**Error code**

**Error message**

**Description**

400

NoPermission.ServiceLinkedRole

The current user does not have permission to create servicelinkedrole. Please contact the Alibaba Cloud account or administrator to authorize custom policy: Service Name: rmc.resourcemanager.aliyuncs.com, Action: ram:CreateServiceLinkedRole.

400

InvalidParameter.AccountId

The specified parameter AccountId is not valid.

The AccountId parameter is invalid.

409

NotSupport.Account.Site

The caller is not a current site account, which is not supported.

You are not allowed to use the account to perform operations at the current site.

409

Conflict.ServiceStatus

The service status conflict occurred due to frequent service enabled and disabled.

The resource center is opened and closed too frequently, and the service status conflicts.

See [Error Codes](https://api.alibabacloud.com/document/ResourceCenter/2022-12-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/ResourceCenter/2022-12-01/EnableResourceCenter#workbench-doc-change-demo) for a complete list.
