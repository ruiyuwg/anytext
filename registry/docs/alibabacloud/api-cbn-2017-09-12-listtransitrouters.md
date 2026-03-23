You can call the ListTransitRouters operation to query information about transit routers in a Cloud Enterprise Network (CEN) instance, such as the instance type, status, instance ID, and whether the multicast feature is enabled.

## Operation description

When you call this operation to query transit routers in a CEN instance, you can specify the **RegionId** and **TransitRouterId** parameters. Note the following information about these parameters:

-   If you do not specify **RegionId** or **TransitRouterId**, all transit routers in the CEN instance are queried.
    
-   If you specify only **RegionId**, the transit routers in the specified region are queried.
    
-   If you specify only **TransitRouterId**, the specified transit router is queried.
    

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cbn/2017-09-12/ListTransitRouters)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cbn/2017-09-12/ListTransitRouters)

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

cen:ListTransitRouters

get

CenInstance

`acs:cen:*:{#accountId}:ceninstance/{#ceninstanceId}`

\*TransitRouter

`acs:cen:*:{#accountId}:centransitrouter/*`

TransitRouter

`acs:cen:*:{#accountId}:centransitrouter/{#centransitrouterId}`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

PageNumber

integer

No

The page number. Default value: **1**.

1

PageSize

integer

No

The number of entries per page. Valid values: **1** to **50**. Default value: **10**.

10

CenId

string

No

The ID of the CEN instance.

cen-j3jzhw1zpau2km\*\*\*\*

TransitRouterId

string

No

The ID of the transit router.

tr-uf654ttymmljlvh2x\*\*\*\*

RegionId

string

No

The ID of the region where the transit router is deployed.

You can call the [DescribeRegions](/help/en/vpc/api-describeregions) operation to query the most recent region list.

cn-hangzhou

Tag

array<object>

No

The tags.

You can specify up to 20 tags.

object

No

The tag.

Key

string

No

The tag key.

The tag key cannot be an empty string. The tag key can be up to 64 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.

You can specify up to 20 tag keys.

TagKey

Value

string

No

The tag value.

The tag value can be an empty string or a string of up to 128 characters. It cannot start with `aliyun` or `acs:` and cannot contain `http://` or `https://`.

Each tag key must have a unique tag value. You can specify up to 20 tag values.

TagValue

Status

string

No

The status of the transit router.

-   **Creating**: The transit router is being created.
    
-   **Active**: The transit router is available.
    
-   **Modifying**: The transit router is being modified.
    
-   **Deleting**: The transit router is being deleted.
    
-   **Upgrading**: The transit router is being upgraded.
    

Active

Type

string

No

The type of the transit router.

-   **Enterprise**: Enterprise Edition.
    
-   **Basic**: Basic Edition.
    

Enterprise

TransitRouterName

string

No

The name of the transit router.

The name must be 1 to 128 characters in length and cannot start with `http://` or `https://`.

testname

FeatureFilter

array<object>

No

The feature to be filtered.

object

No

The feature to be filtered.

Key

string

No

The key of the feature to be filtered. The following key is supported:

-   **Multicast**: the multicast feature.
    

Multicast

Value

array

No

A list of values for the feature. If you set the key to **Multicast**, you can specify only one value. Valid values:

-   **Enabled**: Multicast is supported.
    
-   **Disabled**: Multicast is not supported.
    

string

No

The value of the feature. If you set the key to **Multicast**, you can set the value to one of the following options:

-   **Enabled**: Multicast is supported.
    
-   **Disabled**: Multicast is not supported.
    

Enabled

## **Response** parameters

**Parameter**

**Type**

**Description**

**Example**

object

The response.

PageSize

integer

The number of entries per page.

10

RequestId

string

The request ID.

68521297-5FA6-46CB-B4EB-658F1C68C8CC

PageNumber

integer

The page number.

1

TotalCount

integer

The total number of entries returned.

1

TransitRouters

array<object>

A list of transit routers.

object

The information about the transit router.

CreationTime

string

The time when the transit router was created.

The time is displayed in the `YYYY-MM-DDThh:mmZ` format in UTC.

2021-03-15T09:39Z

Type

string

The type of the transit router.

-   **Enterprise**: Enterprise Edition.
    
-   **Basic**: Basic Edition.
    

Enterprise

Status

string

The status of the transit router.

-   **Creating**: The transit router is being created.
    
-   **Active**: The transit router is available.
    
-   **Modifying**: The transit router is being modified.
    
-   **Deleting**: The transit router is being deleted.
    
-   **Upgrading**: The transit router is being upgraded.
    

Active

TransitRouterId

string

The ID of the transit router.

tr-bp1su1ytdxtataupl\*\*\*\*

TransitRouterDescription

string

The description of the transit router.

testdesc

TransitRouterName

string

The name of the transit router.

testname

CenId

string

The ID of the CEN instance.

cen-j3jzhw1zpau2km\*\*\*\*

AliUid

integer

The ID of the Alibaba Cloud account to which the CEN instance belongs.

1210123456123456

RegionId

string

The ID of the region where the transit router is deployed.

cn-hangzhou

SupportMulticast

boolean

Indicates whether the multicast feature is enabled for the transit router.

-   **true**: enabled.
    
-   **false**: disabled.
    

false

TransitRouterCidrList

array<object>

A list of CIDR blocks of the transit router.

object

The CIDR block of the transit router.

Cidr

string

The CIDR block of the transit router.

192.168.1.0/24

Name

string

The name of the CIDR block.

CIDRname

Description

string

The description of the CIDR block.

CIDRdesc

TransitRouterCidrId

string

The ID of the CIDR block.

cidr-46p5ceg21e8152\*\*\*\*

PublishCidrRoute

boolean

Indicates whether the system automatically adds a route for the transit router CIDR block to the route table of the transit router.

-   **true**: Yes.
    
    If this parameter is set to **true**, after you create a VPN connection of the private gateway type and enable route learning for the VPN connection, the system automatically adds a blackhole route to the route table of the transit router that is in a route learning correlation with the VPN connection.
    
    The destination CIDR block of the blackhole route is the CIDR block of the transit router. The CIDR block of the transit router is the CIDR block from which an IP address is allocated to the IPsec-VPN connection.
    
    This blackhole route is advertised only to the route tables of the virtual border routers (VBRs) that are connected to the transit router.
    
-   **false**: No.
    

true

Tags

array<object>

A list of tags.

object

The tag.

Key

string

The tag key.

TagKey

Value

string

The tag value.

TagValue

## Examples

Success response

`JSON` format

```
{
  "PageSize": 10,
  "RequestId": "68521297-5FA6-46CB-B4EB-658F1C68C8CC",
  "PageNumber": 1,
  "TotalCount": 1,
  "TransitRouters": [
    {
      "CreationTime": "2021-03-15T09:39Z",
      "Type": "Enterprise",
      "Status": "Active",
      "TransitRouterId": "tr-bp1su1ytdxtataupl****",
      "TransitRouterDescription": "testdesc",
      "TransitRouterName": "testname",
      "CenId": "cen-j3jzhw1zpau2km****",
      "AliUid": 1210123456123456,
      "RegionId": "cn-hangzhou",
      "SupportMulticast": false,
      "TransitRouterCidrList": [
        {
          "Cidr": "192.168.1.0/24",
          "Name": "CIDRname",
          "Description": "CIDRdesc",
          "TransitRouterCidrId": "cidr-46p5ceg21e8152****",
          "PublishCidrRoute": true
        }
      ],
      "Tags": [
        {
          "Key": "TagKey",
          "Value": "TagValue"
        }
      ]
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

InvalidParameterCombination.TransitRouter

Region ID is required if no TransitRouterId or CenId specified.

The error message returned because you must specify at least a region, a transit router ID, or a CEN instance ID.

400

InvalidOperation.UnsupportFilterValue

The specified FeatureFilter Value is not supported by this operation.

The error message returned because the specified filter value is invalid.

400

InvalidOperation.UnsupportFilter

The specified FeatureFilter is not supported by this operation.

The error message returned because the specified filter is invalid.

400

IllegalParam.TagValue

The tag values are not valid.

The error message returned because the specified tag value is invalid.

400

IllegalParam.TagKey

The tag keys are not valid.

The error message returned because the specified tag key is invalid.

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

See [Release Notes](https://api.alibabacloud.com/document/Cbn/2017-09-12/ListTransitRouters#workbench-doc-change-demo) for a complete list.
