You can call the DescribeAccelerator operation to query information about a specified Global Accelerator instance.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Ga/2019-11-20/DescribeAccelerator)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Ga/2019-11-20/DescribeAccelerator)

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

ga:DescribeAccelerator

get

\*Accelerator

`acs:ga:{#regionId}:{#accountId}:ga/{#acceleratorId}`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

RegionId `deprecated`

string

Yes

The region where the Global Accelerator instance is deployed. Set the value to **cn-hangzhou**.

cn-hangzhou

AcceleratorId

string

Yes

The ID of the Global Accelerator instance that you want to query.

ga-bp1odcab8tmno0hdq\*\*\*\*

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The information returned.

DdosId `deprecated`

string

The ID of the Anti-DDoS instance that is associated with the Global Accelerator instance.

ddoscoo-cn-zz11vq7j\*\*\*\*

DnsName

string

The canonical name (CNAME) that is assigned to the Global Accelerator instance.

ga-bp15u1i2hmtbk8c3i\*\*\*\*.aliyunga0019.com

Description

string

The description of the Global Accelerator instance.

Accelerator

RequestId

string

The request ID.

6FEA0CF3-D3B9-43E5-A304-D217037876A8

InstanceChargeType

string

The billing method of the Global Accelerator instance.

PREPAY

CreateTime

integer

The timestamp that indicates when the Global Accelerator instance was created.

1650643200

CrossDomainBandwidthPackage

object

The details of the cross-region bandwidth plan that is associated with the Global Accelerator instance.

This parameter is returned only by the Alibaba Cloud International Website (www.alibabacloud.com).

Bandwidth

integer

The bandwidth of the cross-region bandwidth plan. Unit: Mbps.

2

InstanceId

string

The ID of the cross-region bandwidth plan.

gbwp-bp1d8xk8bg139j0fw\*\*\*\*

SecondDnsName

string

The CNAME of the Anti-DDoS instance that is associated with the Global Accelerator instance.

ga-bp1f609c76zg6zuna\*\*\*\*-1.aliyunga0047.com

Name

string

The name of the Global Accelerator instance.

Accelerator

BasicBandwidthPackage

object

The details of the basic bandwidth plan that is associated with the Global Accelerator instance.

Bandwidth

integer

The bandwidth of the basic bandwidth plan. Unit: Mbps.

2

BandwidthType

string

The type of the bandwidth of the basic bandwidth plan. Valid values:

-   **Basic**: standard acceleration bandwidth.
    
-   **Enhanced**: enhanced acceleration bandwidth.
    
-   **Advanced**: premium acceleration bandwidth.
    

Basic

InstanceId

string

The ID of the basic bandwidth plan.

gbwp-bp1d8xk8bg139j0fw\*\*\*\*

State

string

The status of the Global Accelerator instance. Valid values:

-   **init**: The instance is being initialized.
    
-   **active**: The instance is available.
    
-   **configuring**: The instance is being configured.
    
-   **binding**: The instance is being associated.
    
-   **unbinding**: The instance is being disassociated.
    
-   **deleting**: The instance is being deleted.
    
-   **finacialLocked**: The instance is financially locked.
    

active

ExpiredTime

integer

The timestamp that indicates when the Global Accelerator instance expires.

1653235200

CenId

string

The ID of the Cloud Enterprise Network (CEN) instance that is associated with the Global Accelerator instance.

cen-hjkduu767hc\*\*\*\*

RegionId `deprecated`

string

The region where the Global Accelerator instance is deployed.

cn-hangzhou

Spec

string

The specification of the Global Accelerator instance. Valid values:

-   **1**: Small I.
    
-   **2**: Small II.
    
-   **3**: Small III.
    
-   **5**: Medium I.
    
-   **8**: Medium II.
    
-   **10**: Medium III.
    
-   **20**: Large I.
    
-   **30**: Large II.
    
-   **40**: Large III.
    
-   **50**: Large IV.
    
-   **60**: Large V.
    
-   **70**: Large VI.
    
-   **80**: Large VII.
    
-   **90**: Large VIII.
    
-   **100**: Super Large I.
    
-   **200**: Super Large II.
    

**Note**

The Large III and higher specifications are available only to users on the whitelist. To use these specifications, contact your account manager.

The definitions of different specifications vary. For more information, see [Instance specifications](/help/en/ga/user-guide/overview-of-standard-ga-instances/).

1

AcceleratorId

string

The ID of the Global Accelerator instance.

ga-bp1odcab8tmno0hdq\*\*\*\*

BandwidthBillingType

string

The billing method of the bandwidth. Valid values:

-   **BandwidthPackage**: pay-by-bandwidth-plan.
    
-   **CDT**: pay-by-data-transfer.
    

CDT

IpSetConfig

object

The configuration of the acceleration area.

AccessMode

string

The access mode of the acceleration area. Valid values:

-   **UserDefine**: custom. You can select acceleration areas and regions based on your business needs. Global Accelerator provides a separate elastic IP address (EIP) for each acceleration region.
    
-   **Anycast**: automatic. You do not need to configure an acceleration area. Global Accelerator provides an Anycast EIP for multiple regions. Users can connect to the nearest access point of the Alibaba Cloud network using the Anycast EIP.
    

UserDefine

CrossPrivateState

string

Indicates whether cross-border bandwidth is enabled.

-   **true**: enabled.
    
-   **false**: disabled.
    

false

ResourceGroupId

string

The ID of the resource group.

rg-acfmw2vwdbujqbq

Tags

array<object>

The tags of the resource.

object

The tag of the resource.

Key

string

The tag key.

tag-key

Value

string

The tag value.

tag-value

CrossBorderMode

string

The type of cross-border acceleration. This parameter is returned for pay-by-data-transfer instances.

**bpgPro**: premium bandwidth for cross-border acceleration.

bpgPro

CrossBorderStatus

boolean

Indicates whether the cross-border line feature is enabled for the Global Accelerator instance. Valid values:

-   **true**: The cross-border line feature is enabled. You can use Global Accelerator to accelerate data transmission across borders.
    
-   **false**: The cross-border line feature is disabled. You cannot use Global Accelerator to accelerate data transmission across borders.
    

false

UpgradableStatus

string

The upgrade status of the Global Accelerator instance. Valid values:

-   **notUpgradable**: The instance does not need to be upgraded.
    
-   **upgradable**: The instance can be upgraded.
    
-   **upgradeFailed**: The instance failed to be upgraded.
    

notUpgradable

ServiceId

string

The ID of the service that manages the instance.

**Note**

This parameter is valid only when **ServiceManaged** is set to **True**.

ALB

ServiceManaged

boolean

Indicates whether the instance is a managed instance. Valid values:

-   **true**: The instance is a managed instance.
    
-   **false**: The instance is not a managed instance.
    

true

ServiceManagedInfos

array<object>

The actions that you can perform on the managed instance.

**Note**

-   This parameter is valid only when **ServiceManaged** is set to **True**.
    
-   When the instance is managed, you cannot perform some operations on the instance.
    

object

The actions that you can perform on the managed instance.

Action

string

The name of the action on the managed instance. Valid values:

-   **Create**: creates an instance.
    
-   **Update**: updates the current instance.
    
-   **Delete**: deletes the current instance.
    
-   **Associate**: associates the instance with other resources.
    
-   **UserUnmanaged**: unmanages the instance.
    
-   **CreateChild**: creates a child resource in the instance.
    

Update

ChildType

string

The type of the child resource. Valid values:

-   **Listener**: listener.
    
-   **IpSet**: acceleration region.
    
-   **EndpointGroup**: endpoint group.
    
-   **ForwardingRule**: forwarding rule.
    
-   **Endpoint**: endpoint.
    
-   **EndpointGroupDestination**: protocol mapping of an endpoint group associated with a custom routing listener.
    
-   **EndpointPolicy**: access policy of an endpoint associated with a custom routing listener.
    

**Note**

This parameter is valid only when **Action** is set to **CreateChild**.

Listener

IsManaged

boolean

Indicates whether the specified action is managed. Valid values:

-   **true**: The action is managed. You cannot perform the specified action on the managed instance.
    
-   **false**: The action is not managed. You can perform the specified action on the managed instance.
    

false

DdosConfigList

array<object>

The list of Anti-DDoS instances that are associated with the Global Accelerator instance.

object

DdosId

string

The ID of the Anti-DDoS instance that is associated with the Global Accelerator instance.

ddoscoo-cn-zz11vq7j\*\*\*\*

DdosRegionId

string

The region where the Anti-DDoS instance is deployed. Valid values:

-   **cn-hangzhou**: the Chinese mainland.
    
-   **ap-southeast-1**: outside the Chinese mainland.
    

ap-southeast-1

Bandwidth

integer

The bandwidth of the standard Global Accelerator instance. Unit: Mbps.

**Note**

This parameter is valid only when the access mode of the acceleration area is Anycast.

200

## Examples

Success response

`JSON` format

```
{
  "DdosId": "ddoscoo-cn-zz11vq7j****",
  "DnsName": "ga-bp15u1i2hmtbk8c3i****.aliyunga0019.com",
  "Description": "Accelerator",
  "RequestId": "6FEA0CF3-D3B9-43E5-A304-D217037876A8\t",
  "InstanceChargeType": "PREPAY",
  "CreateTime": 1650643200,
  "CrossDomainBandwidthPackage": {
    "Bandwidth": 2,
    "InstanceId": "gbwp-bp1d8xk8bg139j0fw****"
  },
  "SecondDnsName": "ga-bp1f609c76zg6zuna****-1.aliyunga0047.com",
  "Name": "Accelerator",
  "BasicBandwidthPackage": {
    "Bandwidth": 2,
    "BandwidthType": "Basic",
    "InstanceId": "gbwp-bp1d8xk8bg139j0fw****"
  },
  "State": "active",
  "ExpiredTime": 1653235200,
  "CenId": "cen-hjkduu767hc****",
  "RegionId": "cn-hangzhou",
  "Spec": "1",
  "AcceleratorId": "ga-bp1odcab8tmno0hdq****",
  "BandwidthBillingType": "CDT",
  "IpSetConfig": {
    "AccessMode": "UserDefine"
  },
  "CrossPrivateState": "false",
  "ResourceGroupId": "rg-acfmw2vwdbujqbq",
  "Tags": [
    {
      "Key": "tag-key",
      "Value": "tag-value"
    }
  ],
  "CrossBorderMode": "bpgPro",
  "CrossBorderStatus": false,
  "UpgradableStatus": "notUpgradable",
  "ServiceId": "ALB",
  "ServiceManaged": true,
  "ServiceManagedInfos": [
    {
      "Action": "Update",
      "ChildType": "Listener",
      "IsManaged": false
    }
  ],
  "DdosConfigList": [
    {
      "DdosId": "ddoscoo-cn-zz11vq7j****",
      "DdosRegionId": "ap-southeast-1"
    }
  ],
  "Bandwidth": 200
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

500

UnknownError

An error occurred while processing your request. Please try again. If the error persists, please submit a ticket.

An error occurred while the request was being processed. Try again later.

See [Error Codes](https://api.alibabacloud.com/document/Ga/2019-11-20/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Ga/2019-11-20/DescribeAccelerator#workbench-doc-change-demo) for a complete list.
