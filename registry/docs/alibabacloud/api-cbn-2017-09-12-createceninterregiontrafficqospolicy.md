Creates a quality of service (QoS) policy for an inter-region connection on an Enterprise Edition transit router.

## Operation description

-   Only inter-region connections created on Enterprise Edition transit routers support QoS policies.
    
-   Traffic scheduling applies only to outbound traffic on Enterprise Edition transit routers.
    
    For example, you create an inter-region connection between the China (Hangzhou) and China (Qingdao) regions, and create a QoS policy for the transit router in the China (Hangzhou) region. In this case, the QoS policy can ensure bandwidth for network traffic from the China (Hangzhou) region to the China (Qingdao) region. However, the QoS policy does not apply to network traffic from the China (Qingdao) region to the China (Hangzhou) region.
    
-   **CreateCenInterRegionTrafficQosPolicy** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the **ListCenInterRegionTrafficQosPolicies** operation to query the status of the task.
    
    -   If the QoS policy is in the **Creating** state, the QoS policy is being created. You can query the QoS policy but cannot perform other operations on the QoS policy.
        
    -   If the QoS policy is in the **Active** state, the QoS policy is created.
        

### [](#)Prerequisites

Before you call the **CreateCenInterRegionTrafficQosPolicy** operation, make sure that the following requirements are met:

-   An inter-region connection is created. For more information, see [CreateTransitRouterPeerAttachment](/help/en/cen/developer-reference/api-createtransitrouterpeerattachment).
    
-   A traffic marking policy is created. For more information, see [CreateTrafficMarkingPolicy](/help/en/cen/developer-reference/api-createtrafficmarkingpolicy).
    

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cbn/2017-09-12/CreateCenInterRegionTrafficQosPolicy)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cbn/2017-09-12/CreateCenInterRegionTrafficQosPolicy)

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

cen:CreateCenInterRegionTrafficQosPolicy

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

ClientToken

string

No

The client token that is used to ensure the idempotence of the request.

You can use the client to generate the value, but you must make sure that it is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.

123e4567-e89b-12d3-a456-426655\*\*\*\*

DryRun

boolean

No

Specifies whether only to precheck the API request. Valid values:

-   **true**: prechecks the request but does not create the QoS policy. The system checks the required parameters, the request format, and the service limits. If the request fails the check, an error message is returned. If the request passes the check, the `DryRunOperation` error code is returned.
    
-   **false**: sends the API request. If the request passes the precheck, the QoS policy is created. This is the default value.
    

false

TransitRouterId

string

Yes

The ID of the transit router.

tr-8vbuqeo5h5pu3m01d\*\*\*\*

TransitRouterAttachmentId

string

Yes

The ID of the inter-region connection.

tr-attach-r6g0m3epjehw57\*\*\*\*

TrafficQosPolicyName

string

No

The name of the QoS policy.

The name can be empty or 1 to 128 characters in length, and cannot start with http:// or https://.

nametest

TrafficQosPolicyDescription

string

No

The description of the QoS policy.

This parameter is optional. If you enter a description, it must be 1 to 256 characters in length, and cannot start with http:// or https://.

desctest

BandwidthGuaranteeMode

string

No

The allocation mode of the guaranteed bandwidth. You can specify an absolute bandwidth value or a bandwidth percentage. Valid values:

-   **byBandwidth**: allocates an absolute bandwidth value for the QoS queue.
    
-   **byBandwidthPercent** (default): allocates a bandwidth percentage for the OoS queue.
    

byBandwidthPercent

TrafficQosQueues

array<object>

No

The information about the QoS queue.

You can add at most three QoS queues in a QoS policy by calling this operation. To add more QoS queues, call the CreateCenInterRegionTrafficQosQueue operation.

object

No

The information about the QoS queue.

QosQueueName

string

No

The name of the current queue.

Each QoS policy supports at most three queues. You can specify a name for each queue.

The name can be empty or 1 to 128 characters in length, and cannot start with http:// or https://.

nametest

RemainBandwidthPercent

string

No

The percentage of the inter-region bandwidth that can be used by the queue.

Each QoS policy supports at most 10 queues. You can specify a valid percentage for each queue.

For example, a value of **1** specifies that the queue can consume 1% of the inter-region bandwidth.

**Note**

The sum of the percentage values of all the queues in a QoS policy cannot exceed 100%.

1

Bandwidth

string

No

The absolute bandwidth that can be consumed by the QoS queue. Unit: Mbit/s.

Each QoS policy supports at most 10 queues. You can specify a valid bandwidth value for each queue.

For example, a value of 1 specifies that the queue can consume 1 Mbit/s of the inter-region bandwidth.

**Note**

The sum of the absolute bandwidth values of all the queues in a QoS policy cannot exceed the total bandwidth of the inter-region connection.

1

Dscps

array

No

The Differentiated Services Code Point (DSCP) value that matches the current queue.

Each QoS policy supports at most three queues. You can specify at most 60 DSCP values for each queue. Separate multiple DCSP values with commas (,).

integer

No

The Differentiated Services Code Point (DSCP) value that matches the current queue.

Each QoS policy supports at most three queues. You can specify at most 60 DSCP values for each queue. Separate multiple DCSP values with commas (,).

5

QosQueueDescription

string

No

The description of the current queue.

Each QoS policy supports at most 10 queues. You can specify a description for each queue.

This parameter is optional. If you enter a description, it must be 1 to 256 characters in length and cannot start with http:// or https://.

desctest

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The response.

TrafficQosPolicyId

string

The ID of the QoS policy.

qos-eczzew0v1kzrb5\*\*\*\*

RequestId

string

The ID of the request.

6DF9A765-BCD2-5C7E-8C32-C35C8A361A39

## Examples

Success response

`JSON` format

```
{
  "TrafficQosPolicyId": "qos-eczzew0v1kzrb5****",
  "RequestId": "6DF9A765-BCD2-5C7E-8C32-C35C8A361A39"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

AssociationExist.TrafficQos

The traffic qos with the specified attachment already exists.

The error message returned because the specified attachment is already associated with a QoS policy.

400

InvalidTransitRouterId.NotFound

The specified TransitRouterId is not found.

The error message returned because the specified transit router does not exist.

400

IllegalParam.TransitRouterAttachmentId

TransitRouterAttachmentId is illegal.

The error message returned because the specified transit router is invalid.

400

InvalidParamSize.TrafficQosQueues

The queue size included in the traffic QoS policy exceeds the limit.

The queue size included in the traffic scheduling policy exceeds the limit.

400

IllegalParam.BandwidthGuaranteeModeMismatch

The BandwidthGuaranteeMode does not match the Bandwidth or RemainBandwidthPercent.

The BandwidthGuaranteeMode does not match the Bandwidth or RemainBandwidthPercent.

400

IllegalParam.AttachmentBandwidthExceed

The entered bandwidth causes the total QoS guaranteed bandwidth to exceed the cross-region bandwidth allocation value.

The entered bandwidth causes the total QoS guaranteed bandwidth to exceed the cross-region bandwidth allocation value.

400

IllegalParam.BandwidthGuaranteeMode

The input bandwidth guarantee type is not valid.

The input bandwidth guarantee type is not valid.

400

MissingParam.RemainBandwidthPercent

RemainBandwidthPercent is missing.

RemainBandwidthPercent is missing.

400

MissingParam.Bandwidth

The parameter Bandwidth is mandatory.

The error message returned because no bandwidth value is specified. You must specify a bandwidth value.

400

IllegalParam.RemainBandwidthPercent

The specified RemainBandwidthPercent is invalid.

The error message returned because the RemainBandwidthPercent parameter is set to invalid value.

400

IllegalParam.Bandwidth

Bandwidth is illegal

The error message returned because the specified bandwidth value is invalid.

400

IllegalParam.BandwidthPackageStatus

The status of the bandwidth package is incorrect.

The status of the bandwidth package is incorrect.

400

IncorrectStatus.TransitRouterInstance

The status of TransitRouter is incorrect.

The error message returned because the transit router is in an invalid state.

400

IncorrectStatus.TransitRouterAttachment

TransitRouterAttachmentId status is invalid.

The error message returned because the status of the transit router attachment does not support this operation. Try again later.

400

InvalidParameter

Invalid parameter.

The error message returned because the parameter is set to an invalid value.

400

Unauthorized

The AccessKeyId is unauthorized.

The error message returned because you do not have the permissions to perform this operation.

400

MissingParam.TransitRouterId

The parameter TransitrouterId is mandatory.

The error message returned because the TransitRouterId parameter is not set.

400

MissingParam.TransitRouterAttachmentId

The parameter TransitRouterAttachmentId is Missing.

The error message returned because the TransitRouterAttachmentId parameter is not set.

400

Forbidden.CDTServiceExpired

The CDT service is out of service.

The cloud data transfer service has been suspended due for payment. Please renew the service and try again.

400

OperationUnsupported.TransitRouterType

The specified TransitRouterType does not support the operation.

The error message returned because this operation is not supported by the specified type of transit router.

400

OperationUnsupported.QosPolicyForLowLatencyLinkType

QoS Policy is not supported for Low Latency LinkType.

QoS Policy is not supported for Low Latency LinkType.

See [Error Codes](https://api.alibabacloud.com/document/Cbn/2017-09-12/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Cbn/2017-09-12/CreateCenInterRegionTrafficQosPolicy#workbench-doc-change-demo) for a complete list.
