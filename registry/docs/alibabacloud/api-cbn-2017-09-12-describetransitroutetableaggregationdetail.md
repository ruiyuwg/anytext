Queries the configuration details of a specified aggregate route.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cbn/2017-09-12/DescribeTransitRouteTableAggregationDetail)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cbn/2017-09-12/DescribeTransitRouteTableAggregationDetail)

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

cen:DescribeTransitRouteTableAggregationDetail

get

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

TransitRouteTableId

string

Yes

The ID of the route table of the Enterprise Edition transit router.

vtb-6ehgc262hr170qgyc\*\*\*\*

TransitRouteTableAggregationCidr

string

Yes

The destination CIDR block of the aggregate route.

192.168.10.0/24

ClientToken

string

No

A client token to ensure the idempotence of the request.

Generate a unique value from your client for each request. The token can contain only ASCII characters.

**Note**

If you do not specify this parameter, the system automatically uses the request ID as the client token. The request ID may be different for each request.

02fb3da4-130e-11e9-8e44-001\*\*\*\*

## **Response** parameters

**Parameter**

**Type**

**Description**

**Example**

object

The response.

Data

array<object>

The configuration details of the aggregate route.

object

The configuration details of the aggregate route.

InstanceId

string

The ID of the VPC instance for which the aggregate route is configured.

vpc-6eh7fp9hdqa2wv85t\*\*\*\*

Description

string

The message returned if the configuration of the aggregate route fails.

desctest

Status

string

The configuration status of the aggregate route.

-   **Configured**: The aggregate route is advertised to the VPC instance.
    
-   **Configuring**: The aggregate route is being advertised.
    
-   **ConfigFailed**: The aggregate route failed to be advertised.
    
-   **PartialConfigured**: The aggregate route was partially advertised.
    
-   **Deleting**: The aggregate route is being deleted.
    

Configured

Count

integer

The number of entries returned on each page.

20

Total

integer

The total number of entries.

1

RequestId

string

The request ID.

0C2EE7A8-74D4-4081-8236-CEBDE3BBCF50

## Examples

Success response

`JSON` format

```
{
  "Data": [
    {
      "InstanceId": "vpc-6eh7fp9hdqa2wv85t****",
      "Description": "desctest",
      "Status": "Configured"
    }
  ],
  "Count": 20,
  "Total": 1,
  "RequestId": "0C2EE7A8-74D4-4081-8236-CEBDE3BBCF50"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

IllegalParam.TransitRouterRouteTableId

The transitRouter route table id is illegal.

The error message returned because the route table ID of the transit router (TransitRouterRouteTableId) is invalid.

400

IllegalParam.AggregationRouteCidr

The aggregation route cidr is illegal.

The error message returned because the specified CIDR block is invalid.

400

InstanceNotExist.TransitRouterRouteTable

The transitRouter route table is not exist.

The error message returned because the specified transit router route table does not exist.

400

InvalidCidrBlock

The transitRouteTableAggregationCidr is invalid.

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

See [Release Notes](https://api.alibabacloud.com/document/Cbn/2017-09-12/DescribeTransitRouteTableAggregationDetail#workbench-doc-change-demo) for a complete list.
