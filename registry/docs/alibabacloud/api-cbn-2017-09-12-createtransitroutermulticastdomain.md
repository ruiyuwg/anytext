A multicast domain defines the scope of a multicast network in a region. Only resources within the multicast domain can send and receive multicast traffic. You can call the CreateTransitRouterMulticastDomain operation to create a multicast domain.

## Operation description

Before you call this operation, note the following:

-   Make sure that you have created an Enterprise Edition transit router in the region where you want to create the multicast network and enabled the multicast feature for the transit router. For more information, see [CreateTransitRouter](/help/en/cen/developer-reference/api-createtransitrouter).
    
    If you created an Enterprise Edition transit router before you requested multicast resources, you cannot enable the multicast feature for the transit router. You must delete the current Enterprise Edition transit router and create a new one. For more information about how to delete an Enterprise Edition transit router, see [DeleteTransitRouter](/help/en/cen/developer-reference/api-deletetransitrouter).
    
-   When you call the **CreateTransitRouterMulticastDomain** operation, if you specify **CenId** and **RegionId**, you do not need to specify **TransitRouterId**. If you specify **TransitRouterId**, you do not need to specify **CenId** or **RegionId**.
    

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cbn/2017-09-12/CreateTransitRouterMulticastDomain)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cbn/2017-09-12/CreateTransitRouterMulticastDomain)

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

cen:CreateTransitRouterMulticastDomain

create

TransitRouter

`acs:cen:*:{#accountId}:centransitrouter/{#centransitrouterId}`

\*TransitRouterMulticastDomain

`acs:cen:*:{#accountId}:centransitroutermulticast/*`

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

The client token that is used to ensure the idempotence of the request.

Generate a token on your client to make sure that the token is unique among different requests. The token can contain only ASCII characters.

123e4567-e89b-12d3-a456-4266\*\*\*\*

CenId

string

No

The ID of the Cloud Enterprise Network (CEN) instance.

cen-a7syd349kne38g\*\*\*\*

TransitRouterId

string

No

The ID of the transit router.

tr-p0wr9p28r92d598y6\*\*\*\*

RegionId

string

No

The ID of the region where the transit router is deployed.

Call the [DescribeChildInstanceRegions](/help/en/cen/developer-reference/api-8a8d23) operation to obtain region IDs.

cn-hangzhou

TransitRouterMulticastDomainName

string

No

The name of the multicast domain.

The name can be empty or 1 to 128 characters in length, and cannot start with \`http://\` or \`https://\`.

nametest

TransitRouterMulticastDomainDescription

string

No

The description of the multicast domain.

The description can be empty or 1 to 256 characters in length, and cannot start with \`http://\` or \`https://\`.

desctest

DryRun

boolean

No

Specifies whether to perform a dry run. Valid values:

-   **true**: performs a dry run. The system checks the required parameters, request format, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
    
-   **false** (default): sends a normal request. After the request passes the check, the multicast domain is created.
    

false

Tag

array<object>

No

The tag.

You can specify up to 20 tags in each call.

object

No

Key

string

No

The tag key.

The tag key cannot be an empty string. The tag key can be up to 64 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://` .

You can specify up to 20 tag keys.

TagKey

Value

string

No

The tag value.

The tag value can be an empty string or a string of up to 128 characters. It cannot start with `aliyun` or `acs:` and cannot contain `http://` or `https://` .

Each tag key must have a unique tag value. You can specify up to 20 tag values.

TagValue

Options

object

No

The multicast domain options.

Igmpv2Support

string

No

Specifies whether to enable the Internet Group Management Protocol (IGMP) feature for the multicast domain. After you enable IGMP, hosts can dynamically join or leave multicast groups using IGMP. Valid values:

-   **enable**: enables the IGMP feature.
    
-   **disable** (default): disables the IGMP feature.
    

**Note**

-   The IGMP feature is in public preview. To use this feature, contact your account manager to request permissions.
    
-   After the IGMP feature is enabled, you cannot disable it.
    

enable

## **Response** parameters

**Parameter**

**Type**

**Description**

**Example**

object

The response parameters.

TransitRouterMulticastDomainId

string

The ID of the multicast domain.

tr-mcast-domain-40cwj0rgzgdtam\*\*\*\*

RequestId

string

The request ID.

94E19C6F-206F-5223-9A63-64B85851BC04

## Examples

Success response

`JSON` format

```
{
  "TransitRouterMulticastDomainId": "tr-mcast-domain-40cwj0rgzgdtam****",
  "RequestId": "94E19C6F-206F-5223-9A63-64B85851BC04"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

InvalidTransitRouterId.NotFound

The specified TransitRouterId is not found.

The error message returned because the specified transit router ID (TransitRouterId) does not exist.

400

IllegalParam.TransitRouterId

The specified TransitRouterId is illegal.

The error message returned because the specified transit router ID is invalid.

400

IllegalParam.CenId

The specified CenId is illegal.

The error message returned because the specified CEN instance ID is invalid.

400

IllegalParam.RegionId

The specified RegionId is illegal.

The error message returned because the specified region is invalid.

400

InvalidCenId.NotFound

The specified CenId is not found.

The error message returned because the specified CEN instance ID does not exist.

400

InvalidOperation.TransitRouterNotExist

Operation is invalid because the transit router not exist.

The error message returned because the specified transit router does not exist.

400

InvalidOperation.CENInstanceStatus

The CEN instance is not in a valid state for the operation.

400

IncorrectStatus.TransitRouterInstance

The status of TransitRouter is incorrect.

The error message returned because the transit router is in an invalid state.

400

OperationUnsupported.TransitRouterType

The specified TransitRouterType does not support the operation.

The error message returned because this operation is not supported by the specified type of transit router.

400

OperationUnsupported.ServiceMode

The specified ServiceMode does not support the operation.

The error message returned because the transit router mode does not support this operation.

400

OperationUnsupported.TransitRouterSupportMulticast

The specified TransitRouterSupportMulticast does not support the operation.

400

OperationUnsupported.RegionId

The specified RegionId does not support the operation.

The error message returned because this operation is not supported in the specified region.

400

IncorrectStatus.Cen

The status of Cen is incorrect.

The error message returned because the status of the specified CEN instance does not support this operation. Try again later.

400

IncorrectStatus.TransitRouter

The status of TransitRouter is incorrect.

The error message returned because the status of the transit router does not support this operation. Try again later.

400

DryRunOperation

Request validation has been passed with DryRun flag set.

The error message returned because the dry run request passed the precheck.

400

QuotaExceeded.MulticastDomain

The MulticastDomain quota is exceeded.

The error message returned because the number of multicast domains has reached the upper limit. You cannot add more multicast domains.

400

IllegalParam.Igmpv2Support

The specified Igmpv2Support is illegal. Valid values are \[enable, disable\].

The parameter Igmpv2Support is invalid. Value range: enable, disable.

400

OperationUnsupported.Igmpv2Support

The current UID does not allow the creation of a igmpv2 multicast domain. Please submit a ticket.

The current UID does not allow the creation of a multicast domain of the igmpv2 type. Please submit a ticket.

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

See [Release Notes](https://api.alibabacloud.com/document/Cbn/2017-09-12/CreateTransitRouterMulticastDomain#workbench-doc-change-demo) for a complete list.
