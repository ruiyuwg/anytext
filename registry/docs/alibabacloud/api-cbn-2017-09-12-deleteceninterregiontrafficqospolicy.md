Deletes a quality of service (QoS) policy.

## Operation description

-   Before you delete a QoS policy, you must delete all queues in the QoS policy except the default queue. For more information, see [DeleteCenInterRegionTrafficQosQueue](/help/en/cen/developer-reference/api-deleteceninterregiontrafficqosqueue).
    
-   **DeleteCenInterRegionTrafficQosPolicy** is an asynchronous operation. After you send a request, the system returns a **request ID** and runs the task in the background. You can call the **ListCenInterRegionTrafficQosPolicies** operation to query the status of a QoS policy.
    
    -   If a QoS policy is in the **Deleting** state, the QoS policy is being deleted. You can query the QoS policy but cannot perform other operations.
        
    -   If a QoS policy cannot be found, the QoS policy is deleted.
        

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cbn/2017-09-12/DeleteCenInterRegionTrafficQosPolicy)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cbn/2017-09-12/DeleteCenInterRegionTrafficQosPolicy)

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

cen:DeleteCenInterRegionTrafficQosPolicy

delete

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

You can use the client to generate the value, but you must make sure that it is unique among all requests. The client token can contain only ASCII characters.

**Note**

If you do not set this parameter, **ClientToken** is set to the value of **RequestId**. The value of **RequestId** for each API request may be different.

123e4567-e89b-12d3-a456-426655\*\*\*\*

DryRun

boolean

No

Specifies whether to perform a dry run. Default value: false. Valid values:

-   **true**: performs a dry run. The system checks the required parameters, request syntax, and limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the DryRunOperation error code is returned.
    
-   **false** (default): performs a dry run and sends the request.
    

false

TrafficQosPolicyId

string

Yes

The ID of the QoS policy.

qos-eczzew0v1kzrb5\*\*\*\*

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The response.

RequestId

string

The ID of the request.

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

AssociationExist.TransitQosQueueExist

The qos queue with the specified TrafficQosPolicyId exists.

The error message returned because the QoS policy contains queues. You must delete the queues before you delete the QoS policy.

400

InvalidParameter

Invalid parameter.

The error message returned because the parameter is set to an invalid value.

400

Unauthorized

The AccessKeyId is unauthorized.

The error message returned because you do not have the permissions to perform this operation.

400

Forbidden.CDTServiceExpired

The CDT service is out of service.

The cloud data transfer service has been suspended due for payment. Please renew the service and try again.

404

InvalidTransitQosId.NotFound

The specified TrafficQosPolicyId is not found.

The error message returned because the TrafficQosPolicyId parameter is set to an invalid value.

See [Error Codes](https://api.alibabacloud.com/document/Cbn/2017-09-12/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Cbn/2017-09-12/DeleteCenInterRegionTrafficQosPolicy#workbench-doc-change-demo) for a complete list.
