Resource Access Management (RAM) is a service provided by Alibaba Cloud to manage user identities and resource access permissions. Using RAM helps you avoid sharing your Alibaba Cloud account keys with other users and allows you to grant users the least privilege access. RAM uses permission policies to define authorizations. This topic describes the general structure of a RAM policy, and the policy statement elements (Action, Resource, and Condition) defined by _Cloud Monitor_ for RAM permission policies. The RAM code (RamCode) for _Cloud Monitor_ is _cms,log,arms_ , and the supported authorization granularity is _SERVICE_ .

## General structure of a policy

Permission policies support JSON format with the following general structure:

```
{
  "Version": "1",
  "Statement": [
    {
      "Effect": "<Effect>",
      "Action": "<Action>",
      "Resource": "<Resource>",
      "Condition": {
        "<Condition_operator>": {
          "<Condition_key>": [
            "<Condition_value>"
          ]
        }
      }
    }
  ]
}        
```

The following list describes the fields in the policy:

-   Version: Specifies the policy version number. It is fixed at 1.
    
-   Statement:
    
    -   Effect: Specifies the authorization result. Valid values: Allow and Deny.
        
    -   [Action](#title-auth-detail-2): Specifies one or more operations that are allowed or denied.
        
    -   [Resource](#title-auth-detail-3): Specifies the specific objects affected by the operations. You can use Alibaba Cloud Resource Names (ARNs) to describe specific resources.
        
    -   [Condition](#title-auth-detail-4): Specifies the conditions for the authorization to take effect. This field is optional.
        
        -   [Condition operator](/help/en/ram/policy-elements#section-jix-u0j-2ms): Specifies the conditional operators. Different types of conditions support different conditional operators.
            
        -   Condition\_key: Specifies the condition keys.
            
        -   Condition\_value: Specifies the condition values.
            

## Action

The following table lists the actions defined by _Cloud Monitor_. The table's columns are detailed below:

-   Action: The actions can be used in the `Action` element of RAM permission policy statements to grant permissions to perform the operation.
    
-   API: The API that you can call to perform the action.
    
-   Access level: The predefined level of access granted for each API. Valid values: create, list, get, update, and delete.
    
-   Resource type: The type of the resource that support authorization to perform the action. It indicates if the action supports resource-level permission. The specified resource must be compatible with the action. Otherwise, the policy will be ineffective.
    
    -   For APIs with resource-level permissions, required resource types are marked with an asterisk (\*). Specify the corresponding ARN in the `Resource` element of the policy.
        
    -   For APIs without resource-level permissions, it is shown as All Resources. Use an asterisk (**\***) in the `Resource` element of the policy.
        
-   Condition key: The condition keys defined by the service. The key allows for granular control, applying to either actions alone or actions associated with specific resources. In addition to service-specific condition keys, Alibaba Cloud provides a set of common condition keys that are applicable across all RAM-integrated services. For more information, see [Common condition keys](/help/en/ram/policy-elements#section-jix-u0j-2ms).
    
-   Dependent action: The dependent actions required to run the action. To complete the action, the RAM user or the RAM role must have the permissions to perform all dependent actions.
    

**Action**

**API**

**Access level**

**Resource type**

**Condition key**

**Dependent action**

## Resource

The following table lists the resources defined by _Cloud Monitor_. Specify them in the `Resource` element of RAM policy statements to grant permissions for specific operations. They are uniquely identified by ARNs. Format: `acs:{#ramcode}:{#regionId}:{#accountId}:{#resourceType}`:

-   `acs`: The initialism of Alibaba Cloud service, which indicates the public cloud of Alibaba Cloud.
    
-   `{#ramcode}`: The code used in RAM to indicate an Alibaba Cloud service.
    
-   `{#regionId}`: The [region ID](/help/en/cloud-migration-guide-for-beginners/latest/regions-and-zones#concept-2459516). If the resource covers all regions, set it to an asterisk (\*).
    
-   `{#accountId}`: The ID of the Alibaba Cloud account. If the resource covers all Alibaba Cloud accounts, set it to an asterisk (\*).
    
-   `{#resourceType}`: The service-defined resource identifier. It supports a hierarchical structure, which is similar to a file path. If the statement covers global resources, set it to an asterisk (\*).
    

**Resource type**

**ARN**

## Condition

_Cloud Monitor_ does not define product-level condition keys. However, you can use Alibaba Cloud common condition keys for access control. For more information, see [Common condition keys](/help/en/ram/policy-elements#section-jix-u0j-2ms).

## How to create custom RAM policies?

You can create custom policies and grant them to RAM users, RAM user groups, or RAM roles. For instructions, see:

-   [Create custom policies](/help/en/ram/create-a-custom-policy)
    
-   [Grant permissions to a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user)
    
-   [Grant permissions to a RAM user group](/help/en/ram/user-guide/grant-permissions-to-a-ram-user-group)
    
-   [Grant permissions to a RAM role](/help/en/ram/user-guide/grant-permissions-to-a-ram-role)
