Modifies the name, description, inter-region bandwidth, and Differentiated Services Code Point (DSCP) value of a quality of service (QoS) queue.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cbn/2017-09-12/UpdateCenInterRegionTrafficQosQueueAttribute)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cbn/2017-09-12/UpdateCenInterRegionTrafficQosQueueAttribute)

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

cen:UpdateCenInterRegionTrafficQosQueueAttribute

update

\*CenInstance

`acs:cen:*:{#accountId}:ceninstance/{#CenId}`

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

You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.

123e4567-e89b-12d3-a456-426655\*\*\*\*

DryRun

boolean

No

Specifies whether to perform a dry run, without performing the actual request. Valid values:

-   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
    
-   **false** (default): performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.
    

false

QosQueueId

string

Yes

The queue ID.

qos-queue-nv2vfzqkewhk4t\*\*\*\*

QosQueueName

string

No

The new name of the queue.

The name must be 1 to 128 characters in length, and cannot start with http:// or https://. You can also leave this parameter empty.

nametest

QosQueueDescription

string

No

The new description of the queue.

The description must be 1 to 256 characters in length, and cannot start with http:// or https://. You can also leave this parameter empty.

desctest

RemainBandwidthPercent

string

No

The percentage of bandwidth that can be allocated to the current queue.

Enter a number. You do not need to enter a percent sign (%).

1

Bandwidth

integer

No

The absolute bandwidth value that can be allocated to the current queue. Unit: Mbit/s.

Enter a number. You do not need to enter a unit.

1

Dscps

array

No

The differentiated services code point (DSCP) value used to match packets in the queue.

integer

No

The DSCP value used to match packets in the queue. Valid values: **0** to **63**.

You can enter up to 20 DSCP values at a time.

5

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

6DF9A765-BCD2-5C7E-8C32-C35C8A361A39

## Examples

Success response

`JSON` format

```
{
  "RequestId": "6DF9A765-BCD2-5C7E-8C32-C35C8A361A39"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

IncorrectStatus.TrafficQosPolicy

The status of TrafficQosPolicy is incorrect.

The error message returned because the status of the specified QoS policy does not support the operation.

400

InvalidTrafficQosQueueId.NotFound

The instance of TrafficQosQueueId is not found.

400

IllegalParam.BandwidthGuaranteeModeMismatch

The BandwidthGuaranteeMode does not match the Bandwidth or RemainBandwidthPercent.

The BandwidthGuaranteeMode does not match the Bandwidth or RemainBandwidthPercent.

400

IllegalParam.AttachmentBandwidthExceed

The entered bandwidth causes the total QoS guaranteed bandwidth to exceed the cross-region bandwidth allocation value.

The entered bandwidth causes the total QoS guaranteed bandwidth to exceed the cross-region bandwidth allocation value.

400

IllegalParam.Bandwidth

Bandwidth is illegal

The error message returned because the specified bandwidth value is invalid.

400

IllegalParam.RemainBandwidthPercent

The specified RemainBandwidthPercent is invalid.

The error message returned because the RemainBandwidthPercent parameter is set to invalid value.

400

InvalidParameter

Invalid parameter.

The error message returned because the parameter is set to an invalid value.

400

Unauthorized

The AccessKeyId is unauthorized.

The error message returned because you do not have the permissions to perform this operation.

400

MissingParam.TrafficQosPolicyQueueId

The parameter TrafficQosPolicyQueueId is mandatory.

See [Error Codes](https://api.alibabacloud.com/document/Cbn/2017-09-12/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Cbn/2017-09-12/UpdateCenInterRegionTrafficQosQueueAttribute#workbench-doc-change-demo) for a complete list.
