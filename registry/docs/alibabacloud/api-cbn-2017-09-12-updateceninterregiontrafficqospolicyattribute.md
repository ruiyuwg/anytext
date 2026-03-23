Modifies the name and description of a quality of service (QoS) policy.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cbn/2017-09-12/UpdateCenInterRegionTrafficQosPolicyAttribute)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cbn/2017-09-12/UpdateCenInterRegionTrafficQosPolicyAttribute)

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

cen:UpdateCenInterRegionTrafficQosPolicyAttribute

update

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

You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.

123e4567-e89b-12d3-a456-426655\*\*\*\*

DryRun

boolean

No

Specifies whether to perform a dry run. Valid values:

-   **true**: performs a dry run. The system checks the required parameters, request syntax, and limits. If the request fails the dry run, an error code is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
    
-   **false** (default): performs a dry run and performs the actual request. If the request passes the dry run, the operation is performed.
    

false

TrafficQosPolicyId

string

Yes

The ID of the QoS policy.

qos-eczzew0v1kzrb5\*\*\*\*

TrafficQosPolicyName

string

No

The new name of the QoS policy.

The name must be 1 to 128 characters in length, and cannot start with http:// or https://. You can also leave this parameter empty.

nametest

TrafficQosPolicyDescription

string

No

The new description of the QoS policy.

The description must be 1 to 256 characters in length, and cannot start with http:// or https://. You can also leave this parameter empty.

desctest

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The returned results.

RequestId

string

The request ID.

5B8465FF-E697-5D3D-AAD5-0B4EEADFDB27

## Examples

Success response

`JSON` format

```
{
  "RequestId": "5B8465FF-E697-5D3D-AAD5-0B4EEADFDB27"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

InvalidTrafficQosPolicyId.NotFound

The specified TrafficQosPolicyId is not found.

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

See [Error Codes](https://api.alibabacloud.com/document/Cbn/2017-09-12/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Cbn/2017-09-12/UpdateCenInterRegionTrafficQosPolicyAttribute#workbench-doc-change-demo) for a complete list.
