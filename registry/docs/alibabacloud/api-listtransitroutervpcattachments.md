Queries the status, billing method, zones, vSwitches, and elastic network interfaces (ENIs) of virtual private cloud (VPC) connections.

## Operation description

You can use the following methods to query VPC connections on an Enterprise Edition transit router:

-   Specify the ID of the Enterprise Edition transit router.
    
-   Specify the ID of the Cloud Enterprise Network (CEN) instance and the region ID of the Enterprise Edition transit router.
    
-   Specify the ID of the region where the Enterprise Edition transit router is deployed.
    

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cbn/2017-09-12/ListTransitRouterVpcAttachments)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cbn/2017-09-12/ListTransitRouterVpcAttachments)

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

cen:ListTransitRouterVpcAttachments

list

\*CenInstance

`acs:cen:*:{#accountId}:ceninstance/{#ceninstanceId}`

TransitRouterVpcAttachment

`acs:cen:*:{#accountId}:centransitrouterattachment/*`

TransitRouterVpcAttachment

`acs:cen:*:{#accountId}:centransitrouterattachment/{#centransitrouterattachmentId}`

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

No

The IDs of the CEN instances.

cen-j3jzhw1zpau2km\*\*\*\*

RegionId

string

No

The region ID of the Enterprise Edition transit router.

You can call the [DescribeRegions](/help/en/vpc/api-describeregions) operation to query the most recent region list.

cn-hangzhou

TransitRouterAttachmentId

string

No

The ID of the VPC connection.

tr-attach-nls9fzkfat8934\*\*\*\*

TransitRouterId

string

No

The ID of the Enterprise Edition transit router.

tr-bp1su1ytdxtataupl\*\*\*\*

MaxResults

integer

No

The number of entries to return on each page. Default value: **20**.

20

NextToken

string

No

The token that determines the start point of the query. Valid values:

-   If this is your first query and no subsequent queries are to be sent, ignore this parameter.
    
-   If a subsequent query is to be sent, set the parameter to the value of NextToken that is returned from the last call.
    

FFmyTO70tTpLG6I3FmYAXGKPd\*\*\*\*

Tag

array<object>

No

The information about the tags.

You can specify at most 20 tags in each call.

object

No

Key

string

No

The tag key.

The tag key cannot be an empty string. The tag key can be up to 64 characters in length and cannot start with `acs:` or `aliyun`. It cannot contain `http://` or `https://`.

You can specify at most 20 tag keys.

tagtest

Value

string

No

The tag value.

The tag value can be 0 to 128 characters in length, and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.

Each tag key must have a unique tag value. You can specify at most 20 tag values in each call.

tagtest

VpcId

string

No

The ID of the VPC.

vpc-bp1kbjcre9vtsebo1\*\*\*\*

OrderType

string

No

The entity that pays the fees of the network instance. Valid values:

-   **PayByCenOwner**: the Alibaba Cloud account that owns the CEN instance.
    
-   **PayByResourceOwner**: the Alibaba Cloud account that owns the network instance.
    

PayByCenOwner

Status

string

No

Specifies whether the network instance is attached to the CEN instance. Valid values:

-   **Attaching**
    
-   **Attached**
    
-   **Detaching**
    

Attached

## **Response** parameters

**Parameter**

**Type**

**Description**

**Example**

object

The response parameters.

NextToken

string

The token that determines the start point of the next query. Valid values:

-   If **NextToken** is returned, it indicates that no additional results exist.
    
-   If **NextToken** was returned in the previous query, specify the value to obtain the next set of results.
    

FFmyTO70tTpLG6I3FmYAXGKPd\*\*\*\*

RequestId

string

The ID of the region.

C97FF53F-3EF8-4883-B459-60E171924B23

TotalCount

integer

The total number of entries returned.

1

MaxResults

integer

The number of entries returned per page.

20

TransitRouterAttachments

array<object>

The information about the VPC connection.

object

The information about the VPC connection.

CreationTime

string

The time when the VPC connection was created.

The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in UTC.

2021-06-15T02:14Z

Status

string

The status of the VPC connection. Valid values:

-   **Attached**
    
-   **Attaching**
    
-   **Detaching**
    

Attached

VpcId

string

The VPC ID.

vpc-bp1h8vbrbcgohcju5\*\*\*\*

TransitRouterAttachmentId

string

The VPC connection ID.

tr-attach-nls9fzkfat8934\*\*\*\*

TransitRouterId

string

The description of the Enterprise Edition transit router.

tr-bp1su1ytdxtataupl\*\*\*\*

ResourceType

string

The type of resource to which the transit router is connected.

Only **VPC** may be returned, which indicates VPCs.

VPC

TransitRouterAttachmentDescription

string

The description of the VPC connection.

testdesc

VpcOwnerId

integer

The ID of the Alibaba Cloud account to which the VPC belongs.

1250123456123456

VpcRegionId

string

The region ID of the VPC.

cn-hangzhou

TransitRouterAttachmentName

string

The name of the VPC connection.

testname

ZoneMappings

array<object>

The primary and secondary zones, vSwitches, and ENIs of the VPC.

object

ZoneId

string

The zone ID.

cn-hangzhou-h

VSwitchId

string

The vSwitch ID.

vsw-bp1a214sbus8z3b54\*\*\*\*

NetworkInterfaceId

string

The ID of the ENI created by the Enterprise Edition transit router in the vSwitch.

eni-bp149hmyaqegerml\*\*\*\*

AutoPublishRouteEnabled

boolean

Indicates whether the Enterprise Edition transit router can automatically advertise routes to the VPC. Valid values:

-   **false**
    
-   **true**
    

true

ChargeType

string

The billing method of the VPC connection.

Only **POSTPAY** may be returned, which indicates the default pay-as-you-go billing method.

POSTPAY

Tags

array<object>

The tags.

object

Key

string

The tag key.

test

Value

string

The tag value.

test

OrderType

string

The entity that pays the fees of the network instance. Valid values:

-   **PayByCenOwner**: the Alibaba Cloud account that owns the CEN instance.
    
-   **PayByResourceOwner**: the Alibaba Cloud account that owns the network instance.
    

PayByCenOwner

ManagedService

string

The cloud service to which the resource belongs.

SAS

TransitRouterVPCAttachmentOptions

object

The features of the VPC connection.

string

The features of the VPC connection.

-   **ipv6Support**: indicates whether IPv6 is enabled. The default value is determined based on whether IPv6 is enabled.
    
    -   **enable**: IPv6 is enabled.
        
    -   **disable**: IPv6 is disabled.
        

{ "ipv6Support": "disable" }

CenId

string

The ID of the CEN instance.

cen-j3jzhw1zpau2km\*\*\*\*

## Examples

Success response

`JSON` format

```
{
  "NextToken": "FFmyTO70tTpLG6I3FmYAXGKPd****",
  "RequestId": "C97FF53F-3EF8-4883-B459-60E171924B23",
  "TotalCount": 1,
  "MaxResults": 20,
  "TransitRouterAttachments": [
    {
      "CreationTime": "2021-06-15T02:14Z",
      "Status": "Attached",
      "VpcId": "vpc-bp1h8vbrbcgohcju5****",
      "TransitRouterAttachmentId": "tr-attach-nls9fzkfat8934****",
      "TransitRouterId": "tr-bp1su1ytdxtataupl****",
      "ResourceType": "VPC",
      "TransitRouterAttachmentDescription": "testdesc",
      "VpcOwnerId": 1250123456123456,
      "VpcRegionId": "cn-hangzhou",
      "TransitRouterAttachmentName": "testname",
      "ZoneMappings": [
        {
          "ZoneId": "cn-hangzhou-h",
          "VSwitchId": "vsw-bp1a214sbus8z3b54****",
          "NetworkInterfaceId": "eni-bp149hmyaqegerml****"
        }
      ],
      "AutoPublishRouteEnabled": true,
      "ChargeType": "POSTPAY",
      "Tags": [
        {
          "Key": "test",
          "Value": "test"
        }
      ],
      "OrderType": "PayByCenOwner",
      "ManagedService": "SAS",
      "TransitRouterVPCAttachmentOptions": {
        "key": "{ \"ipv6Support\": \"disable\" }"
      },
      "CenId": "cen-j3jzhw1zpau2km****\n"
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

IllegalParam.NextToken

The specified NextToken is invalid.

The error message returned because the NextToken parameter is set to an invalid value.

400

IllegalParam.TrInstance

The specified TransitRouter is invalid.

The error message returned because the TransitRouter parameter is set to an invalid value.

400

IllegalParam.Region

The specified Region is invalid.

The error message returned because the specified region is invalid.

400

IllegalParam.CenId

The specified CenId is invalid.

The error message returned because the ID of the CEN instance is invalid.

400

IllegalParam.TransitRouterId

The specified TransitRouterId is invalid.

The error message returned because the specified transit router ID is invalid.

400

IllegalParam.CenIdOrRegionId

The specified CenId or RegionId is invalid.

The error message returned because the specified CEN instance ID or region ID is invalid.

400

IllegalParam.MaxResults

The specified MaxResults is illegal.

MaxResults illegal.

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

See [Release Notes](https://api.alibabacloud.com/document/Cbn/2017-09-12/ListTransitRouterVpcAttachments#workbench-doc-change-demo) for a complete list.
