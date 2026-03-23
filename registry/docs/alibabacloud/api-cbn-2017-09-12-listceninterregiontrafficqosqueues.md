Queries the queues of a Quality of Service (QoS) policy.

## Operation description

When you call this operation, you must specify at least one of the **TransitRouterId**, **TrafficQosPolicyId**, or **TrafficQosQueueId** parameters.

Ensure that you specify valid parameter values. If you specify an invalid parameter, the system returns a **RequestId** but does not return information about the QoS policy.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cbn/2017-09-12/ListCenInterRegionTrafficQosQueues)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cbn/2017-09-12/ListCenInterRegionTrafficQosQueues)

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

cen:ListCenInterRegionTrafficQosQueues

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

TransitRouterId

string

No

The ID of the transit router.

tr-bp1rmwxnk221e3fas\*\*\*\*

TransitRouterAttachmentId

string

No

The ID of the inter-region connection.

tr-attach-a6p8voaodog5c0\*\*\*\*

TrafficQosPolicyId

string

No

The ID of the QoS policy.

qos-rnghap5gc8155x\*\*\*\*

TrafficQosQueueId

string

No

The ID of the queue in the QoS policy.

qos-queue-siakjb2nn9gz5z\*\*\*\*

TrafficQosQueueName

string

No

The name of the queue in the QoS policy.

The name can be empty or 1 to 128 characters in length. It cannot start with \`http://\` or \`https://\`.

qosQueueName

TrafficQosQueueDescription

string

No

The description of the queue in the QoS policy.

The description can be empty or 1 to 256 characters in length. It cannot start with \`http://\` or \`https://\`.

qosQueueDescription

MaxResults

integer

No

The number of entries to return on each page. Valid values: 1 to 100. Default value: 20.

20

NextToken

string

No

A pagination token. It is used in the next request to retrieve a new page of results.

-   If **NextToken** is empty, no more results are returned.
    
-   If NextToken is not empty, the value of **NextToken** is used for the next query.
    

2ca1ed1573cb\*\*\*\*

EffectiveBandwidthFilter

object

No

Filters the results by the actual bandwidth. Only positive integers are supported. Unit: Mbit/s.

Gte

integer

No

The actual bandwidth is greater than or equal to the specified value.

50

Lte

integer

No

The actual bandwidth is less than or equal to the specified value.

20

## **Response** parameters

**Parameter**

**Type**

**Description**

**Example**

object

The response parameters.

NextToken

string

A pagination token. It is used in the next request to retrieve a new page of results. Valid values:

-   If **NextToken** is empty, no more results are returned.
    
-   If NextToken is not empty, the value of **NextToken** is used for the next query.
    

0151fa6aa1ed\*\*\*\*

RequestId

string

The request ID.

1D1E15D2-416D-54F3-BDD9-BC27DE4C6352

TrafficQosQueues

array<object>

The information about the queues of the QoS policy.

object

The information about the queues of the QoS policy.

TransitRouterAttachmentId

string

The ID of the inter-region connection.

tr-attach-nzrcv25d7ezt23\*\*\*\*

TransitRouterId

string

The ID of the transit router.

tr-p0wwagjv6fvxt4b7y\*\*\*\*

TrafficQosQueueName

string

The name of the queue in the QoS policy.

qosQueueName

RemainBandwidthPercent

integer

The percentage of the inter-region connection bandwidth that can be used by the queue. This parameter is returned only if you allocate bandwidth to the queue by percentage.

For example, a value of **1** indicates that traffic that matches the queue can use up to 1% of the inter-region connection bandwidth.

1

Bandwidth

string

The bandwidth allocated to the queue. This parameter is returned only if you allocate bandwidth to the queue by absolute value.

For example, a value of **1** indicates that traffic that matches the queue can use up to 1 Mbit/s of the inter-region connection bandwidth.

1

EffectiveBandwidth

string

The actual bandwidth of the queue.

1.35

TrafficQosPolicyId

string

The ID of the QoS policy.

qos-fv2qq9yqrsjowp\*\*\*\*

TrafficQosQueueId

string

The ID of the queue in the QoS policy.

qos-queue-siakjb2nn9gz5z\*\*\*\*

TrafficQosQueueDescription

string

The description of the queue in the QoS policy.

qosQueueDescription

Dscps

array

The Differentiated Services Code Point (DSCP) values that are matched by the queue.

integer

The DSCP value.

1

Status

string

The status of the queue.

-   **Creating**: The queue is being created.
    
-   **Active**: The queue is running.
    
-   **Deleting**: The queue is being deleted.
    

Active

## Examples

Success response

`JSON` format

```
{
  "NextToken": "0151fa6aa1ed****",
  "RequestId": "1D1E15D2-416D-54F3-BDD9-BC27DE4C6352",
  "TrafficQosQueues": [
    {
      "TransitRouterAttachmentId": "tr-attach-nzrcv25d7ezt23****",
      "TransitRouterId": "tr-p0wwagjv6fvxt4b7y****",
      "TrafficQosQueueName": "qosQueueName",
      "RemainBandwidthPercent": 1,
      "Bandwidth": "1",
      "EffectiveBandwidth": "1.35",
      "TrafficQosPolicyId": "qos-fv2qq9yqrsjowp****",
      "TrafficQosQueueId": "qos-queue-siakjb2nn9gz5z****\n",
      "TrafficQosQueueDescription": "qosQueueDescription\n",
      "Dscps": [
        1
      ],
      "Status": "Active"
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

MissingParam.TransitRouterIdOrTrafficQosPolicyIdOrTrafficQosQueueId

Either TransitRouterId or TrafficQosPolicyId or TrafficQosQueueId must be specified.

400

InvalidParameter.MaxResults

The specified MaxResults is invalid.

400

InvalidName

Name is invalid.

The error message returned because the specified name is invalid.

400

InvalidDescription

Description is invalid.

The error message returned because the description is invalid.

400

IllegalParam.EffectiveBandwidthFilter

The input bandwidth filter value is not valid.

The input bandwidth filter value is not valid.

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

See [Release Notes](https://api.alibabacloud.com/document/Cbn/2017-09-12/ListCenInterRegionTrafficQosQueues#workbench-doc-change-demo) for a complete list.
