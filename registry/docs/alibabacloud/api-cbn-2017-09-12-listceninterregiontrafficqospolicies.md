You can call the ListCenInterRegionTrafficQosPolicies operation to query Quality of Service (QoS) policies.

## Operation description

Take note of the following items when you call the **ListCenInterRegionTrafficQosPolicies** operation:

-   You must specify at least one of the **TransitRouterId** and **TrafficQosPolicyId** parameters.
    
-   If you do not specify the **TrafficQosPolicyId** parameter, the operation returns information about the QoS policy based on the values of the **TransitRouterId**, **TransitRouterAttachmentId**, **TrafficQosPolicyName**, and **TrafficQosPolicyDescription** parameters. In this case, information about the queues in the policy is not returned, and the **TrafficQosQueues** field is not included in the response.
    
-   If you specify the **TrafficQosPolicyId** parameter, the operation returns information about the QoS policy and its queues. The **TrafficQosQueues** field is included in the response. If the **TrafficQosQueues** field is an empty array, only the default queue exists in the QoS policy.
    
-   Make sure that you enter valid parameter values. If you enter an invalid parameter, the system returns a RequestId but does not return information about the QoS policy.
    

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cbn/2017-09-12/ListCenInterRegionTrafficQosPolicies)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cbn/2017-09-12/ListCenInterRegionTrafficQosPolicies)

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

cen:ListCenInterRegionTrafficQosPolicies

list

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

The ID of the TransitRouter instance.

tr-bp1rmwxnk221e3fas\*\*\*\*

TransitRouterAttachmentId

string

No

The ID of the inter-region connection.

tr-attach-r6g0m3epjehw57\*\*\*\*

TrafficQosPolicyId

string

No

The ID of the QoS policy.

qos-rnghap5gc8155x\*\*\*\*

TrafficQosPolicyName

string

No

The name of the QoS policy.

The name can be empty or 1 to 128 characters in length. It cannot start with http:// or https://.

nametest

TrafficQosPolicyDescription

string

No

The description of the QoS policy.

The description can be empty or 1 to 256 characters in length. It cannot start with http:// or https://.

desctest

MaxResults

integer

No

The number of entries to return on each page. Valid values: **1** to **100**. Default value: **20**.

20

NextToken

string

No

The token for the next page of results. Valid values:

-   If this is your first query or no next page exists, do not specify this parameter.
    
-   If a next page exists, set the value to the **NextToken** value returned from the previous call.
    

FFmyTO70tTpLG6I3FmYAXGKPd\*\*\*\*

## **Response** parameters

**Parameter**

**Type**

**Description**

**Example**

object

The response that is returned.

NextToken

string

A pagination token. It can be used in the next request to retrieve a new page of results.

-   If **NextToken** is empty, no next page exists.
    
-   If a value is returned for **NextToken**, the value is the token that determines the start point of the next query.
    

FFmyTO70tTpLG6I3FmYAXGKPd\*\*\*\*

RequestId

string

The request ID.

113BFD47-63DF-5D9D-972C-033FB9C360CD

TotalCount

integer

The number of entries returned.

1

MaxResults

integer

The number of entries returned per page.

20

TrafficQosPolicies

array<object>

The list of QoS policies.

object

The information about the QoS policy.

TrafficQosPolicyName

string

The name of the QoS policy.

nametest

TrafficQosPolicyStatus

string

The status of the QoS policy.

-   **Creating**: The policy is being created.
    
-   **Active**: The policy is active.
    
-   **Modifying**: The policy is being modified.
    
-   **Deleting**: The policy is being deleted.
    

Creating

TrafficQosPolicyId

string

The ID of the QoS policy.

qos-rnghap5gc8155x\*\*\*\*

TrafficQosPolicyDescription

string

The description of the QoS policy.

desctest

BandwidthGuaranteeMode

string

The bandwidth guarantee type.

-   **byBandwidth**: The QoS queues are configured based on an absolute bandwidth value.
    
-   **byBandwidthPercent**: The QoS queues are configured based on a bandwidth percentage.
    

byBandwidthPercent

TrafficQosQueues

array<object>

The list of queues.

object

The information about the queue.

QosQueueName

string

The name of the queue.

namtest

RemainBandwidthPercent

integer

The percentage of the inter-region connection bandwidth that is used by the queue. This parameter is returned when the bandwidth guarantee type is byBandwidthPercent.

1

Bandwidth

string

The bandwidth value allocated to the queue of the inter-region connection. This parameter is returned when the bandwidth guarantee type is byBandwidth.

1

QosQueueId

string

The ID of the queue.

qos-queue-njcrmr9fiu1jii\*\*\*\*

QosQueueDescription

string

The description of the queue.

desctest

Dscps

array

The Differentiated Services Code Point (DSCP) values of the traffic messages that are matched by the queue.

integer

The DSCP value of a traffic message that is matched by the queue.

5

EffectiveBandwidth

string

The actual bandwidth of the queue.

1.35

TransitRouterId

string

The ID of the TransitRouter instance.

tr-2ze4ta4v32umj0rb\*\*\*

TransitRouterAttachmentId

string

The ID of the network instance connection.

tr-attach-q7ct7c06jpw\*\*\*

## Examples

Success response

`JSON` format

```
{
  "NextToken": "FFmyTO70tTpLG6I3FmYAXGKPd****",
  "RequestId": "113BFD47-63DF-5D9D-972C-033FB9C360CD",
  "TotalCount": 1,
  "MaxResults": 20,
  "TrafficQosPolicies": [
    {
      "TrafficQosPolicyName": "nametest",
      "TrafficQosPolicyStatus": "Creating",
      "TrafficQosPolicyId": "qos-rnghap5gc8155x****",
      "TrafficQosPolicyDescription": "desctest",
      "BandwidthGuaranteeMode": "byBandwidthPercent",
      "TrafficQosQueues": [
        {
          "QosQueueName": "namtest",
          "RemainBandwidthPercent": 1,
          "Bandwidth": "1",
          "QosQueueId": "qos-queue-njcrmr9fiu1jii****",
          "QosQueueDescription": "desctest",
          "Dscps": [
            5
          ],
          "EffectiveBandwidth": "1.35"
        }
      ],
      "TransitRouterId": "tr-2ze4ta4v32umj0rb***",
      "TransitRouterAttachmentId": "tr-attach-q7ct7c06jpw***"
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

MissingParam.TransitRouterIdOrTrafficQosPolicyId

Either TransitRouterId or TrafficQosPolicyId must be specified.

400

InvalidDescription

Description is invalid.

The error message returned because the description is invalid.

400

InvalidName

Name is invalid.

The error message returned because the specified name is invalid.

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

See [Release Notes](https://api.alibabacloud.com/document/Cbn/2017-09-12/ListCenInterRegionTrafficQosPolicies#workbench-doc-change-demo) for a complete list.
