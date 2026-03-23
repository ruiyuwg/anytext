After a VPC instance is connected to an Enterprise Edition transit router, you can call the ListTransitRouterMulticastDomainVSwitches operation to query information about vSwitches that are attached to multicast domains in the virtual private cloud (VPC) instance.

## Operation description

When you call the ListTransitRouterMulticastDomainVSwitches operation, ensure that the parameter values are correct. If you enter incorrect parameter values, the operation returns a RequestId but does not display information about vSwitches that are attached to multicast domains in the VPC instance.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cbn/2017-09-12/ListTransitRouterMulticastDomainVSwitches)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cbn/2017-09-12/ListTransitRouterMulticastDomainVSwitches)

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

cen:ListTransitRouterMulticastDomainVSwitches

get

\*CenInstance

`acs:cen:*:{#accountId}:ceninstance/{#ceninstanceId}`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

CenId

string

Yes

The ID of the Cloud Enterprise Network instance.

cen-44m0p68spvlrqq\*\*\*\*

VpcId

string

Yes

The ID of the VPC instance.

vpc-p0wr1cd4fcuxy3ui0\*\*\*\*

VSwitchIds

array

No

The list of vSwitch IDs.

string

No

The ID of the vSwitch.

You can specify up to 50 vSwitch IDs at a time.

vsw-p0w5ejr9bzfsttiza\*\*\*\*

MaxResults

integer

No

The number of entries to return on each page. Minimum value: **0**. Default value: **20**.

20

NextToken

string

No

The token for the next query. Valid values:

-   You do not need to specify this parameter for the first query or if there is no next query.
    
-   If there is a next query, set the value to the **NextToken** value that is returned from the previous API call.
    

FFmyTO70tTpLG6I3FmYAXGKPd\*\*\*\*

## **Response** parameters

**Parameter**

**Type**

**Description**

**Example**

object

The returned result.

NextToken

string

The token for the next query. Valid values:

-   If **NextToken** is empty, there is no next query.
    
-   If **NextToken** has a return value, the value is the token for the next query.
    

FFmyTO70tTpLG6I3FmYAXGKPd\*\*\*\*

RequestId

string

The request ID.

B0E7E43C-979A-5130-AA0D-B3ADA69E0827

TotalCount

integer

The number of entries in the list.

2

MaxResults

integer

The number of entries returned per page.

20

VSwitchIds

array

The list of vSwitch IDs.

string

The ID of the vSwitch.

vsw-p0w5ejr9bzfsttiza\*\*\*\*

## Examples

Success response

`JSON` format

```
{
  "NextToken": "FFmyTO70tTpLG6I3FmYAXGKPd****",
  "RequestId": "B0E7E43C-979A-5130-AA0D-B3ADA69E0827",
  "TotalCount": 2,
  "MaxResults": 20,
  "VSwitchIds": [
    "vsw-p0w5ejr9bzfsttiza****"
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

The specified NextToken is invalid.

The error message returned because the NextToken parameter is set to an invalid value.

400

IllegalParam.TrInstance

The specified TransitRouter is invalid.

The error message returned because the TransitRouter parameter is set to an invalid value.

400

IllegalParam.Region

The specified Region is invalid.

The error message returned because the specified region is invalid.

400

InvalidCenId.NotFound

CenId is not found.

The error message returned because the specified CEN instance does not exist.

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

See [Release Notes](https://api.alibabacloud.com/document/Cbn/2017-09-12/ListTransitRouterMulticastDomainVSwitches#workbench-doc-change-demo) for a complete list.
