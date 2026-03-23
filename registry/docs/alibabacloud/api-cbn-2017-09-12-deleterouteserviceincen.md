Call the DeleteRouteServiceInCen operation to delete the configuration of an Alibaba Cloud service from a Basic Edition transit router.

## Operation description

**DeleteRouteServiceInCen** is an asynchronous operation. After you send a request, the system returns a **RequestId**, but the operation continues in the background. The system returns a request ID even if you specify an invalid parameter. In this case, the Alibaba Cloud service configuration is not deleted. You can call the **DescribeRouteServicesInCen** operation to query the status of the Alibaba Cloud service.

-   If the Alibaba Cloud service is in the **Deleting** state, you can only query its configuration. You cannot perform other operations.
    
-   If the specified Alibaba Cloud service configuration is not found, the configuration has been deleted.
    

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cbn/2017-09-12/DeleteRouteServiceInCen)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cbn/2017-09-12/DeleteRouteServiceInCen)

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

cen:DeleteRouteServiceInCen

delete

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

The ID of the Cloud Enterprise Network (CEN) instance.

cen-7qthudw0ll6jmc\*\*\*\*

Host

string

Yes

The IP address or CIDR block of the Alibaba Cloud service.

100.118.28.0/24

HostRegionId

string

Yes

The region ID of the Alibaba Cloud service.

You can call the [DescribeRegions](/help/en/vpc/api-describeregions) operation to query region IDs.

cn-hangzhou

AccessRegionId

string

Yes

The region ID from which the Alibaba Cloud service is accessed.

cn-hangzhou

HostVpcId

string

No

The ID of the VPC that is associated with the Alibaba Cloud service.

vpc-bp1t36rn9l53iwbsf\*\*\*\*

## **Response** parameters

**Parameter**

**Type**

**Description**

**Example**

object

RequestId

string

The request ID.

2315DEB7-5E92-423A-91F7-4C1EC9AD97C3

## Examples

Success response

`JSON` format

```
{
  "RequestId": "2315DEB7-5E92-423A-91F7-4C1EC9AD97C3"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

InvalidOperation.CloudRouteNumberInvalid

Cloud route number is invalid

The error message returned because the number of cloud service routes is invalid.

400

InvalidParameter

Invalid parameter.

The error message returned because the parameter is set to an invalid value.

400

Unauthorized

The AccessKeyId is unauthorized.

The error message returned because you do not have the permissions to perform this operation.

403

InvalidOperation.CloudRouteStatusNotAllow

Operation is prohibited because status of cloud route is invalid.

The error message returned because the status of the specified cloud service does not support this operation. Try again later.

See [Error Codes](https://api.alibabacloud.com/document/Cbn/2017-09-12/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Cbn/2017-09-12/DeleteRouteServiceInCen#workbench-doc-change-demo) for a complete list.
