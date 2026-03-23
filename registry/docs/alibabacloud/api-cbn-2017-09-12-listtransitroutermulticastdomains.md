Call the ListTransitRouterMulticastDomains operation to query information about multicast domains, such as their statuses, IDs, and descriptions.

## Operation description

-   You must specify both RegionId and CenId. If you specify only RegionId, no information about multicast domains is returned. You can also specify TransitRouterId or TransitRouterMulticastDomainId individually.
    
-   Ensure that you specify valid parameter values. If you specify an invalid parameter, the system returns a **RequestId** but does not return the details of the multicast domain.
    

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cbn/2017-09-12/ListTransitRouterMulticastDomains)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cbn/2017-09-12/ListTransitRouterMulticastDomains)

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

cen:ListTransitRouterMulticastDomains

list

\*TransitRouterMulticastDomain

`acs:cen:*:{#accountId}:centransitroutermulticast/*`

\*TransitRouterMulticastDomain

`acs:cen:*:{#accountId}:centransitroutermulticast/{#centransitroutermulticastId}`

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

Generate a token that is unique among different requests. The token can contain only ASCII characters.

123e4567-e89b-12d3-a456-426655440000

CenId

string

No

The ID of the CEN instance.

cen-a7syd349kne38g\*\*\*\*

TransitRouterId

string

No

The ID of the transit router.

tr-p0wr9p28r92d598y6\*\*\*\*

TransitRouterMulticastDomainId

string

No

The ID of the multicast domain.

tr-mcast-domain-3r3bvbypxqheej\*\*\*\*

RegionId

string

No

The ID of the region where the transit router is deployed.

You can call the [DescribeChildInstanceRegions](/help/en/cen/developer-reference/api-8a8d23) operation to obtain the region ID.

cn-hangzhou

MaxResults

integer

No

The number of entries per page. Default value: **20**.

20

NextToken

string

No

The token that is used for the next query. Valid values:

-   If this is your first query or no next query is to be sent, leave this parameter empty.
    
-   If a next query is to be sent, set the value to the NextToken value returned from the last call.
    

FFmyTO70tTpLG6I3FmYAXGKPd\*\*\*\*

Tag

array<object>

No

The tags.

You can specify up to 20 tags.

object

No

Key

string

No

The tag key.

The tag key cannot be an empty string. The tag key can be up to 64 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.

You can specify up to 20 tag keys.

TagKey

Value

string

No

The tag value.

The tag value can be an empty string or a string of up to 128 characters. It cannot start with `aliyun` or `acs:` and cannot contain `http://` or `https://`.

Each tag key must have a corresponding tag value. You can specify up to 20 tag values.

TagValue

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

8A0F93D1-FD6C-56FC-B6D2-668FC92D12D2

TotalCount

integer

The total number of entries.

1

MaxResults

integer

The number of entries per page.

20

NextToken

string

The token for the next query.

-   If the value of **NextToken** is empty, it indicates that no next query is to be sent.
    
-   If a value is returned for **NextToken**, the value is the token that is used for the next query.
    

FFmyTO70tTpLG6I3FmYAXGKPd\*\*\*\*

TransitRouterMulticastDomains

array<object>

The list of multicast domains.

array<object>

The details of the multicast domain.

TransitRouterMulticastDomainId

string

The ID of the multicast domain.

tr-mcast-domain-3r3bvbypxqheej\*\*\*\*

TransitRouterMulticastDomainName

string

The name of the multicast domain.

nametest

TransitRouterMulticastDomainDescription

string

The description of the multicast domain.

desctest

Status

string

The status of the multicast domain.

The value is **Active**, which indicates that the multicast domain is available.

Active

Tags

array<object>

The list of tags.

object

Key

string

The tag key.

TagKey

Value

string

The tag value.

TagValue

TransitRouterId

string

The ID of the transit router.

tr-bp1c23ijrl6d6c226h\*\*\*

RegionId

string

The ID of the region where the transit router is deployed.

You can call the [DescribeChildInstanceRegions](/help/en/cen/developer-reference/api-8a8d23) operation to obtain the region ID.

cn-hangzhou

CenId

string

The ID of the CEN instance.

cen-h19xdb0qy2b3ir\*\*\*\*

Options

object

The options of the multicast domain.

Igmpv2Support

string

Indicates whether IGMPv2 is enabled for the multicast domain.

enable

## Examples

Success response

`JSON` format

```
{
  "RequestId": "8A0F93D1-FD6C-56FC-B6D2-668FC92D12D2",
  "TotalCount": 1,
  "MaxResults": 20,
  "NextToken": "FFmyTO70tTpLG6I3FmYAXGKPd****",
  "TransitRouterMulticastDomains": [
    {
      "TransitRouterMulticastDomainId": "tr-mcast-domain-3r3bvbypxqheej****",
      "TransitRouterMulticastDomainName": "nametest",
      "TransitRouterMulticastDomainDescription": "desctest",
      "Status": "Active",
      "Tags": [
        {
          "Key": "TagKey",
          "Value": "TagValue"
        }
      ],
      "TransitRouterId": "tr-bp1c23ijrl6d6c226h***",
      "RegionId": "cn-hangzhou",
      "CenId": "cen-h19xdb0qy2b3ir****",
      "Options": {
        "Igmpv2Support": "enable"
      }
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

IllegalParam.NextToken

The specified NextToken is illegal.

The error message returned because the NextToken parameter is set to an invalid value.

400

IllegalParam.TrInstance

The specified TrInstance is illegal.

The error message returned because the specified transit router is invalid.

400

IllegalParam.CenId

The specified CenId is illegal.

The error message returned because the specified CEN instance ID is invalid.

400

IllegalParam.MaxResults

The specified MaxResults is illegal.

MaxResults illegal.

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

See [Release Notes](https://api.alibabacloud.com/document/Cbn/2017-09-12/ListTransitRouterMulticastDomains#workbench-doc-change-demo) for a complete list.
