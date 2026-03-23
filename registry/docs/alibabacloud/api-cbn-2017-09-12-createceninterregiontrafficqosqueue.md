Creates queues in a quality of service (QoS) policy to manage network traffic based on finer granularities, improve service performance, and meet service-level agreements (SLAs).

## Operation description

The **CreateCenInterRegionTrafficQosQueue** operation is an asynchronous operation. After you send a request, the system returns a request ID and runs the task in the background. You can call the **ListCenInterRegionTrafficQosPolicies** operation to query the status of the QoS policy to determine the status of the queue. When you call this operation, you must set the **TrafficQosPolicyId** parameter.

-   If a QoS policy is in the **Modifying** state, the queue is being created. In this case, you can query the QoS policy and queue but cannot perform other operations.
    
-   If a QoS policy is in the **Active** state, the queue is created.
    

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cbn/2017-09-12/CreateCenInterRegionTrafficQosQueue)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cbn/2017-09-12/CreateCenInterRegionTrafficQosQueue)

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

cen:CreateCenInterRegionTrafficQosQueue

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

You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.

**Note**

If you do not specify this parameter, the system automatically uses the request ID as the client token. The request ID may be different for each request.

123e4567-e89b-12d3-a456-426\*\*\*\*

DryRun

boolean

No

Specifies whether to perform a dry run. Valid values:

-   **true**: performs a dry run. The system checks the required parameters, the request format, and the service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
    
-   **false** (default): performs a dry run and sends the request.
    

false

QosQueueName

string

No

The name of the queue.

The name can be empty or 1 to 128 characters in length, and cannot start with http:// or https://.

nametest

QosQueueDescription

string

No

The description of the queue.

This parameter is optional. If you enter a description, it must be 1 to 256 characters in length and cannot start with http:// or https://.

desctest

RemainBandwidthPercent

string

No

The maximum percentage of inter-region bandwidth that can be allocated to the queue.

-   Unit: percentage. For example, a value of 20 specifies that the queue can consume at most 20% of inter-region bandwidth.
    
-   The sum of the percentage values specified for all queues that belong to the same inter-region connection cannot exceed 100%.
    

20

Bandwidth

integer

No

The maximum absolute bandwidth value that can be allocated to the queue. Unit: Mbit/s.

-   The value specifies an absolute bandwidth. For example, a value of 20 specifies that the queue can consume at most 20 Mbit/s of bandwidth.
    
-   The sum of the bandwidth values specified for all queues that belong to the same inter-region connection cannot exceed the maximum bandwidth of the inter-region connection.
    

20

TrafficQosPolicyId

string

Yes

The ID of the QoS policy.

qos-qdvybn468kaoxx\*\*\*\*

Dscps

array

Yes

The differentiated services code point (DSCP) value that matches the current queue.

You can specify at most 20 DSCP values for a queue in each call. Separate DSCP values with commas (,).

integer

No

The DSCP value that matches the current queue.

You can specify at most 20 DSCP values for a queue in each call. Separate DSCP values with commas (,).

5

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The response.

QosQueueId

string

The ID of the queue.

qos-queue-irqhi8k5fdyuu5\*\*\*\*

RequestId

string

The ID of the request.

845F66F6-5C27-53A1-9428-B859086237B2

## Examples

Success response

`JSON` format

```
{
  "QosQueueId": "qos-queue-irqhi8k5fdyuu5****",
  "RequestId": "845F66F6-5C27-53A1-9428-B859086237B2"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

IllegalParam.RemainBandwidthPercent

The specified RemainBandwidthPercent is invalid.

The error message returned because the RemainBandwidthPercent parameter is set to invalid value.

400

IncorrectStatus.TrafficQosPolicy

The status of TrafficQosPolicy is incorrect.

The error message returned because the status of the specified QoS policy does not support the operation.

400

Duplicated.Dscps

The parameter Dscps are duplicated.

The error message returned because the descriptions are duplicate.

400

InvalidDescription

Description is invalid.

The error message returned because the description is invalid.

400

InvalidName

Name is invalid.

The error message returned because the specified name is invalid.

400

MissingParam.Bandwidth

The parameter Bandwidth is mandatory.

The error message returned because no bandwidth value is specified. You must specify a bandwidth value.

400

IllegalParam.BandwidthGuaranteeModeMismatch

The BandwidthGuaranteeMode does not match the Bandwidth or RemainBandwidthPercent.

The BandwidthGuaranteeMode does not match the Bandwidth or RemainBandwidthPercent.

400

IllegalParam.AttachmentBandwidthExceed

The entered bandwidth causes the total QoS guaranteed bandwidth to exceed the cross-region bandwidth allocation value.

The entered bandwidth causes the total QoS guaranteed bandwidth to exceed the cross-region bandwidth allocation value.

400

MissingParam.RemainBandwidthPercent

RemainBandwidthPercent is missing.

RemainBandwidthPercent is missing.

400

IllegalParam.Bandwidth

Bandwidth is illegal

The error message returned because the specified bandwidth value is invalid.

400

InvalidParameter

Invalid parameter.

The error message returned because the parameter is set to an invalid value.

400

Unauthorized

The AccessKeyId is unauthorized.

The error message returned because you do not have the permissions to perform this operation.

400

MissingParam.TrafficQosPolicyId

The parameter TrafficQosPolicyId is mandatory.

400

Forbidden.CDTServiceExpired

The CDT service is out of service.

The cloud data transfer service has been suspended due for payment. Please renew the service and try again.

404

InvalidTrafficQosPolicyId.NotFound

The specified TrafficQosPolicyId is not found.

The error message returned because the specified QoS policy ID (TrafficQosPolicyId) does not exist.

See [Error Codes](https://api.alibabacloud.com/document/Cbn/2017-09-12/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Cbn/2017-09-12/CreateCenInterRegionTrafficQosQueue#workbench-doc-change-demo) for a complete list.
