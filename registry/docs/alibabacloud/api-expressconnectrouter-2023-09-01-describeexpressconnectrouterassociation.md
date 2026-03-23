Queries the virtual private clouds (VPCs) and transit routers that are associated with an Express Connect Router (ECR).

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/ExpressConnectRouter/2023-09-01/DescribeExpressConnectRouterAssociation)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/ExpressConnectRouter/2023-09-01/DescribeExpressConnectRouterAssociation)

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

expressconnectrouter:DescribeExpressConnectRouterAssociation

list

\*ExpressConnectRouter

`acs:expressconnectrouter::{#accountId}:expressconnectrouter/{#EcrId}`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

EcrId

string

Yes

The ECR instance ID.

ecr-mezk2idmsd0vx2\*\*\*\*

AssociationId

string

No

The ID of the association between the ECR and the VPC or transit router.

ecr-assoc-9p2qxx5phpca2m\*\*\*\*

AssociationRegionId

string

No

The ID of the region where the associated VPC or transit router is deployed.

cn-hangzhou

AssociationNodeType

string

No

The type of the associated resource.

-   **VPC**
    
-   **TR**
    

VPC

VpcId

string

No

The ID of the VPC.

vpc-bp1h37fchc6jmfyln\*\*\*\*

TransitRouterId

string

No

The ID of the transit router.

tr-2ze4i71c6be454e2l\*\*\*\*

CenId

string

No

The ID of the Cloud Enterprise Network (CEN) instance.

cen-of3o1the3i4gwb\*\*\*\*

NextToken

string

No

The token that is used for the next query. Valid values:

-   Leave this parameter empty for the first query or if no subsequent queries are required.
    
-   If a subsequent query is required, set the value to the NextToken value returned from the previous API call.
    

AAAAAYws9fJ0Ur4MGm/5OkDoW/Zn0J0/sCjivzwX9oBcwFnWaaas/kSG+J/WzLOxJHS4\*\*\*\*

MaxResults

integer

No

The maximum number of entries to return on each page. Valid values: 1 to 2147483647. Default value: 20.

20

DryRun

boolean

No

Specifies whether to perform a dry run. Valid values:

-   **true**: sends a check request without modifying service resources.
    
-   **false** (default): sends a normal request.
    

false

ClientToken

string

No

The client token that is used to ensure the idempotence of the request.

Generate a token on your client to ensure that the token is unique among different requests. The ClientToken parameter can contain only ASCII characters.

**Note**

If you do not specify this parameter, the system automatically uses the **RequestId** of the request as the **ClientToken**. The **RequestId** may be different for each request.

02fb3da4-130e-11e9-8e44-00\*\*\*\*

## **Response** parameters

**Parameter**

**Type**

**Description**

**Example**

object

RpcResponse

RequestId

string

The request ID.

05130E79-588D-5C40-A718-C4863A59\*\*\*\*

Success

boolean

Indicates whether the call was successful. Valid values:

-   **True**: The call was successful.
    
-   **False**: The call failed.
    

True

Code

string

Indicates whether the call was successful. A value of 200 indicates that the call was successful. Other values indicate that the call failed. For more information, see Error codes.

200

Message

string

The message returned for the operation.

OK

HttpStatusCode

integer

The HTTP status code.

200

DynamicCode

string

The dynamic error code.

IllegalParamFormat.EcrId

DynamicMessage

string

The dynamic error message that is used to replace the `%s` placeholder in the **ErrMessage** parameter.

**Note**

For example, if the ErrMessage parameter returns **The Value of Input Parameter %s is not valid** and the **DynamicMessage** parameter returns **DtsJobId**, the specified **DtsJobId** parameter is invalid.

The param format of EcrId \*\*\*\* is illegal.

AccessDeniedDetail

string

The details about the access denial.

Authentication is failed for \*\*\*\*

TotalCount

integer

The total number of associated resources.

1

MaxResults

integer

The maximum number of entries returned on each page. Valid values: 1 to 2147483647. Default value: 20.

20

NextToken

string

The token that is used for the next query. Valid values:

-   If **NextToken** is empty, no next query is to be sent.
    
-   If a value is returned for **NextToken**, the value is the token that is used for the next query.
    

AAAAAYws9fJ0Ur4MGm/5OkDoW/Zn0J0/sCjivzwX9oBcwFnWaaas/kSG+J/WzLOxJHS4\*\*\*\*

AssociationList

array<object>

The list of associated resources.

object

AssociationId

string

The ID of the association between the ECR and the VPC or TR.

ecr-assoc-9p2qxx5phpca2m\*\*\*\*

RegionId

string

The region where the resource is deployed.

cn-hangzhou

OwnerId

integer

The ID of the Alibaba Cloud account to which the resource belongs.

167509154715\*\*\*\*

GmtCreate

string

The time when the association was created. The time is displayed in the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in UTC.

2024-01-09T12:18:23Z

GmtModified

string

The time when the association was modified. The time is displayed in the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in UTC.

2024-01-09T12:18:23Z

Status

string

The deployment status of the associated resource. Valid values:

-   **CREATING**: The resource is being created.
    
-   **ACTIVE**: The resource is created.
    
-   **INACTIVE**: The ECR is associated with the TR, but the TR is not associated with the ECR.
    
-   **ASSOCIATING**: The resource is being associated.
    
-   **DISSOCIATING**: The resource is being disassociated.
    
-   **UPDATING**: The resource is being modified.
    
-   **DELETING**: The resource is being deleted.
    

ACTIVE

AssociationNodeType

string

The type of the associated resource.

-   **VPC**
    
-   **TR**
    

VPC

TransitRouterOwnerId

integer

The ID of the Alibaba Cloud account to which the TR belongs.

189159362009\*\*\*\*

TransitRouterId

string

The ID of the TR instance.

tr-2ze4i71c6be454e2l\*\*\*\*

CenId

string

The CEN instance ID.

cen-5510frtx8zi54q\*\*\*\*

VpcOwnerId

integer

The ID of the Alibaba Cloud account to which the VPC belongs.

146757288406\*\*\*\*

VpcId

string

The ID of the VPC instance.

vpc-2zeeaxet4i2j1a7n7\*\*\*\*

AllowedPrefixes

array

The list of allowed route prefixes.

string

The allowed route prefix.

192.0.\*\*.\*\*/28

EcrId

string

The ECR instance ID.

ecr-fu8rszhgv7623c\*\*\*\*

AllowedPrefixesMode

string

The prefix routing mode. Valid values:

-   MatchMode
    
-   IncrementalMode
    

MatchMode

Description

string

The description of the associated resource.

test

## Examples

Success response

`JSON` format

```
{
  "RequestId": "05130E79-588D-5C40-A718-C4863A59****",
  "Success": true,
  "Code": "200",
  "Message": "OK",
  "HttpStatusCode": 200,
  "DynamicCode": "IllegalParamFormat.EcrId",
  "DynamicMessage": "The param format of EcrId **** is illegal.",
  "AccessDeniedDetail": "Authentication is failed for ****",
  "TotalCount": 1,
  "MaxResults": 20,
  "NextToken": "AAAAAYws9fJ0Ur4MGm/5OkDoW/Zn0J0/sCjivzwX9oBcwFnWaaas/kSG+J/WzLOxJHS4****\n",
  "AssociationList": [
    {
      "AssociationId": "ecr-assoc-9p2qxx5phpca2m****\n",
      "RegionId": "cn-hangzhou",
      "OwnerId": 0,
      "GmtCreate": "2024-01-09T12:18:23Z",
      "GmtModified": "2024-01-09T12:18:23Z",
      "Status": "ACTIVE",
      "AssociationNodeType": "VPC",
      "TransitRouterOwnerId": 0,
      "TransitRouterId": "tr-2ze4i71c6be454e2l****\n",
      "CenId": "cen-5510frtx8zi54q****",
      "VpcOwnerId": 0,
      "VpcId": "vpc-2zeeaxet4i2j1a7n7****",
      "AllowedPrefixes": [
        "192.0.**.**/28"
      ],
      "EcrId": "ecr-fu8rszhgv7623c****",
      "AllowedPrefixesMode": "MatchMode",
      "Description": "test "
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

MissingParam.%s

The param of %s is missing.

The request parameters are not specified. Please check the corresponding parameters and try again.

400

IllegalParamFormat.%s

The param format of %s is illegal.

Illegal parameter format

400

IllegalParam.%s

The param of %s is illegal.

Illegal parameter

404

ResourceNotFound.EcrId

EcrId not found.

ECR instance does not exist

See [Error Codes](https://api.alibabacloud.com/document/ExpressConnectRouter/2023-09-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/ExpressConnectRouter/2023-09-01/DescribeExpressConnectRouterAssociation#workbench-doc-change-demo) for a complete list.
