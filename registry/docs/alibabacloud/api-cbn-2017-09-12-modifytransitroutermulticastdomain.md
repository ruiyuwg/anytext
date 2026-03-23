Modifies the name, description, and feature options of a multicast domain.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cbn/2017-09-12/ModifyTransitRouterMulticastDomain)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cbn/2017-09-12/ModifyTransitRouterMulticastDomain)

## **RAM authorization**

The table below describes the authorization required to call this API. You can define it in a Resource Access Management (RAM) policy. The table's columns are detailed below:

-   Action: The actions can be used in the `Action` element of RAM permission policy statements to grant permissions to perform the operation.
    
-   API: The API that you can call to perform the action.
    
-   Access level: The predefined level of access granted for each API. Valid values: create, list, get, update, and delete.
    
-   Resource type: The type of the resource that support authorization to perform the action. It indicates if the action supports resource-level permission. The specified resource must be compatible with the action. Otherwise, the policy will be ineffective.
    
    -   For APIs with resource-level permissions, required resource types are marked with an asterisk (\*). Specify the corresponding Alibaba Cloud Resource Name (ARN) in the `Resource` element of the policy.
        
    -   For APIs without resource-level permissions, it is shown as All Resources. Use an asterisk (**\***) in the `Resource` element of the policy.
        
-   Condition key: The condition keys defined by the service. The key allows for granular control, applying to either actions alone or actions associated with specific resources. In addition to service-specific condition keys, Alibaba Cloud provides a set of [common condition keys](/help/en/ram/policy-elements#section-jix-u0j-2ms) applicable across all RAM-supported services.
    
-   Dependent action: The dependent actions required to run the action. To complete the action, the RAM user or the RAM role must have the permissions to perform all dependent actions.
    

**Action**

**Access level**

**Resource type**

**Condition key**

**Dependent action**

cen:ModifyTransitRouterMulticastDomain

update

\*TransitRouterMulticastDomain

`acs:cen:*:{#accountId}:centransitroutermulticast/{#TransitRouterMulticastDomainId}`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

ClientToken

string

No

A client token that ensures the idempotence of the request.

Generate a unique token on your client for each request. The token can contain only ASCII characters.

123e4567-e89b-12d3-a456-4266\*\*\*\*

TransitRouterMulticastDomainId

string

Yes

The ID of the multicast domain.

tr-mcast-domain-40cwj0rgzgdtam\*\*\*\*

TransitRouterMulticastDomainName

string

No

The new name of the multicast domain.

The name can be empty or 1 to 128 characters long. It cannot start with http:// or https://.

nametest

TransitRouterMulticastDomainDescription

string

No

The new description of the multicast domain.

The description can be empty or 1 to 256 characters long. It cannot start with http:// or https://.

desctest

DryRun

boolean

No

Specifies whether to perform a dry run. Valid values:

-   **true**: Performs a dry run. The system checks the required parameters, request format, and service limits. If the check fails, an error message is returned. If the check passes, the `DryRunOperation` error code is returned.
    
-   **false** (default): Sends the request. If the request passes the check, the name and description of the multicast domain are modified.
    

false

Options

object

No

The feature options of the multicast domain.

Igmpv2Support

string

No

Specifies whether to enable the Internet Group Management Protocol (IGMP) feature for the multicast domain. When this feature is enabled, hosts can use IGMP to dynamically join or leave multicast groups. Set the value to **enable**.

**Note**

-   The IGMP feature is in public preview. To use this feature, contact your account manager.
    
-   You cannot disable the IGMP feature after it is enabled.
    

enable

## **Response** parameters

**Parameter**

**Type**

**Description**

**Example**

object

The response.

RequestId

string

The request ID.

26273D23-5CB0-5EFC-AF5F-78A5448084C9

## Examples

Success response

`JSON` format

```
{
  "RequestId": "26273D23-5CB0-5EFC-AF5F-78A5448084C9"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

Illegal.Name

Name is illegal.

The error message returned because the name is invalid.

400

Illegal.Description

Description is illegal.

The error message returned because the description is invalid.

400

InvalidMulticastDomainId.NotFound

The specified MulticastDomainId is not found.

The error message returned because the specified multicast domain does not exist.

400

DryRunOperation

Request validation has been passed with DryRun flag set.

The error message returned because the dry run request passed the precheck.

400

IllegalParam.Igmpv2Support

The specified Igmpv2Support is illegal. Valid values are \[enable, disable\].

The parameter Igmpv2Support is invalid. Value range: enable, disable.

400

OperationUnsupported.Igmpv2Support

The current UID does not allow the creation of a igmpv2 multicast domain. Please submit a ticket.

The current UID does not allow the creation of a multicast domain of the igmpv2 type. Please submit a ticket.

400

OperationUnsupported.NotAllowedDisableIgmpv2Support

The operation is not permitted because Igmpv2Support is not currently available to be disabled.

The operation is not permitted because Igmpv2Support is not currently available to be disabled.

400

InvalidParameter

Invalid parameter.

The error message returned because the parameter is set to an invalid value.

400

Unauthorized

The AccessKeyId is unauthorized.

The error message returned because you do not have the permissions to perform this operation.

See [Error Codes](https://api.alibabacloud.com/document/Cbn/2017-09-12/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Cbn/2017-09-12/ModifyTransitRouterMulticastDomain#workbench-doc-change-demo) for a complete list.
