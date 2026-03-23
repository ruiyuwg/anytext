Queries a list of Global Accelerator instances.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Ga/2019-11-20/ListAccelerators)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Ga/2019-11-20/ListAccelerators)

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

ga:ListAccelerators

list

\*Accelerator

`acs:ga:{#regionId}:{#accountId}:ga/*`

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

The region ID of the Global Accelerator instance. Set the value to **cn-hangzhou**.

cn-hangzhou

PageNumber

integer

No

The page number. Default value: **1**.

1

PageSize

integer

No

The number of entries per page. Maximum value: **50**. Default value: **10**.

10

AcceleratorId

string

No

The ID of the Global Accelerator instance.

ga-bp1odcab8tmno0hdq\*\*\*\*

State

string

No

The state of the Global Accelerator instance. Valid values:

-   **init**: The instance is being initialized.
    
-   **active**: The instance is active.
    
-   **configuring**: The instance is being configured.
    
-   **binding**: The instance is being bound.
    
-   **unbinding**: The instance is being unbound.
    
-   **deleting**: The instance is being deleted.
    
-   **finacialLocked**: The instance is locked due to an overdue payment.
    

active

ResourceGroupId

string

No

The ID of the resource group.

rg-aekztkx4zwc\*\*\*\*

Tag

array<object>

No

The tags of the resource.

object

No

The tags of the resource.

Key

string

No

The tag key of the Global Accelerator resource. The tag key cannot be an empty string.

The tag key can be up to 64 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.

You can specify up to 20 tag keys.

tag-key

Value

string

No

The tag value of the Global Accelerator resource. The tag value can be an empty string.

The tag value can be up to 128 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.

You can specify up to 20 tag values.

tag-value

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The response contains a list of items.

TotalCount

integer

The number of entries returned.

10

PageSize

integer

The number of entries per page.

10

RequestId

string

The request ID.

DE77A7F3-3B74-41C0-A5BC-CAFD188C28B6

Accelerators

array<object>

The details of the Global Accelerator instances.

array<object>

The details of the Global Accelerator instances.

DnsName

string

The canonical name (CNAME) assigned to the Global Accelerator instance.

ga-bp15u1i2hmtbk8c3i\*\*\*\*.aliyunga0019.com

Type

string

This parameter is invalid.

None

SecondDnsName

string

The CNAME that is assigned to the Global Accelerator instance after it is associated with an Anti-DDoS Pro/Premium instance.

ga-bp1f609c76zg6zuna\*\*\*\*-1.aliyunga0047.com

Spec

string

The instance type of the Global Accelerator instance. Valid values:

-   **1**: Small I
    
-   **2**: Small II
    
-   **3**: Small III
    
-   **5**: Medium I
    
-   **8**: Medium II
    
-   **10**: Medium III
    
-   **20**: Large I
    
-   **30**: Large II
    
-   **40**: Large III
    
-   **50**: Large IV
    
-   **60**: Large V
    
-   **70**: Large VI
    
-   **80**: Large VII
    
-   **90**: Large VIII
    
-   **100**: Extra Large I
    
-   **200**: Extra Large II
    

**Note**

Currently, the Large III and higher instance types are available only to users on the whitelist. To use these instance types, contact your account manager.

Different instance types have different definitions. For more information, see [Instance types](/help/en/ga/user-guide/overview-of-standard-ga-instances/).

1

State

string

The state of the Global Accelerator instance. Valid values:

-   **init**: The instance is being initialized.
    
-   **active**: The instance is active.
    
-   **configuring**: The instance is being configured.
    
-   **binding**: The instance is being bound.
    
-   **unbinding**: The instance is being unbound.
    
-   **deleting**: The instance is being deleted.
    
-   **finacialLocked**: The instance is locked due to an overdue payment.
    

active

CreateTime

integer

The timestamp that indicates when the Global Accelerator instance was created.

1650643200

CenId

string

The Cloud Enterprise Network (CEN) instance that is bound to the Global Accelerator instance.

cen-hjfufhjfuwff\*\*\*\*

DdosId `deprecated`

string

The ID of the Anti-DDoS Pro/Premium instance that is associated with the Global Accelerator instance.

ddoscoo-cn-zz11vq7j\*\*\*\*

BasicBandwidthPackage

object

The details of the basic bandwidth plan that is associated with the Global Accelerator instance.

Bandwidth

integer

The bandwidth of the basic bandwidth plan. Unit: Mbit/s.

2

BandwidthType

string

The type of the bandwidth. Valid values:

-   **Basic**: standard acceleration bandwidth.
    
-   **Enhanced**: enhanced acceleration bandwidth.
    
-   **Advanced**: premium acceleration bandwidth.
    

Basic

InstanceId

string

The ID of the basic bandwidth plan.

gbwp-bp1d8xk8bg139j0fw\*\*\*\*

RegionId `deprecated`

string

The region ID of the Global Accelerator instance. The value is set to **cn-hangzhou**.

cn-hangzhou

InstanceChargeType

string

The billing method of the Global Accelerator instance.

PREPAY

AcceleratorId

string

The ID of the Global Accelerator instance.

ga-bp1odcab8tmno0hdq\*\*\*\*

Description

string

The description of the Global Accelerator instance.

Accelerator

Bandwidth

integer

The bandwidth of the Global Accelerator instance. Unit: Mbit/s.

5

BandwidthBillingType

string

The billing method for the bandwidth.

-   **BandwidthPackage**: pay-by-bandwidth-plan.
    
-   **CDT**: pay-by-data-transfer.
    

CDT

ExpiredTime

integer

The timestamp that indicates when the Global Accelerator instance expires.

1653235200

Name

string

The name of the Global Accelerator instance.

Accelerator

CrossDomainBandwidthPackage

object

The details of the cross-domain acceleration bandwidth plan that is associated with the Global Accelerator instance.

This array is returned only by the Alibaba Cloud International Website (www.alibabacloud.com).

Bandwidth

integer

The bandwidth of the cross-domain acceleration bandwidth plan. Unit: Mbit/s.

2

InstanceId

string

The ID of the cross-domain acceleration bandwidth plan.

gbwp-bp1d8xk8bg139j0fw\*\*\*\*

IpSetConfig

object

The configuration of the acceleration area.

AccessMode

string

The access mode of the acceleration area. Valid values:

-   **UserDefine**: custom nearby access mode. You can select acceleration areas and regions based on your business needs. Global Accelerator provides a separate elastic IP address (EIP) for each acceleration region.
    
-   **Anycast**: automatic nearby access mode. You do not need to configure an acceleration area. Global Accelerator provides an Anycast EIP for multiple regions across the globe. Users can connect to the nearest access point of the Alibaba Cloud network using the Anycast EIP.
    

UserDefine

ResourceGroupId

string

The ID of the resource group.

rg-aekztkx4zwc\*\*\*\*

Tags

array<object>

The tags of the resource.

object

The tags of the resource.

Key

string

The tag key.

test-key

Value

string

The tag value.

tast-value

CrossBorderMode

string

The type of cross-border acceleration for the instance that uses the pay-by-data-transfer billing method. Valid values:

-   **bpgPro**: premium bandwidth for cross-border acceleration.
    
-   **private**: Leased line for cross-domain acceleration.
    

bpgPro

CrossBorderStatus

boolean

Indicates whether cross-border data transfer is enabled for the Global Accelerator instance. Valid values:

-   **true**: Cross-border data transfer is enabled, which can accelerate data transfer across borders.
    
-   **false**: Cross-border data transfer is disabled, which cannot accelerate data transfer across borders.
    

false

UpgradableStatus

string

The upgrade status of the Global Accelerator instance. Valid values:

-   **notUpgradable**: The instance does not need to be upgraded.
    
-   **upgradable**: The instance can be upgraded to the latest version.
    
-   **upgradeFailed**: The instance failed to be upgraded.
    

notUpgradable

ServiceId

string

The ID of the service that manages the instance.

**Note**

This parameter is returned only when **ServiceManaged** is set to **True**.

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

-   This parameter is returned only when **ServiceManaged** is set to **True**.
    
-   When the instance is in a managed state, you have limited permissions to perform operations on the instance.
    

object

The actions that you can perform on the managed instance.

Action

string

The name of the action on the managed instance. Valid values:

-   **Create**: create an instance.
    
-   **Update**: update the current instance.
    
-   **Delete**: delete the current instance.
    
-   **Associate**: associate the instance with other resources.
    
-   **UserUnmanaged**: disassociate the instance from the service.
    
-   **CreateChild**: create a child resource in the instance.
    

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
    
-   **EndpointPolicy**: traffic policy of an endpoint associated with a custom routing listener.
    

**Note**

This parameter is returned only when **Action** is set to **CreateChild**.

Listener

IsManaged

boolean

Indicates whether the specified action is managed. Valid values:

-   **true**: The specified action is managed, and you cannot perform the specified action on the managed instance.
    
-   **false**: The specified action is not managed, and you can perform the specified action on the managed instance.
    

false

DdosConfigList

array<object>

The list of Anti-DDoS Pro/Premium configurations.

object

DdosId

string

The ID of the Anti-DDoS Pro/Premium instance.

ddoscoo-cn-a8w4ekcb\*\*

DdosRegionId

string

The region ID of the Anti-DDoS Pro/Premium instance.

cn-hangzhou

PageNumber

integer

The page number.

1

## Examples

Success response

`JSON` format

```
{
  "TotalCount": 10,
  "PageSize": 10,
  "RequestId": "DE77A7F3-3B74-41C0-A5BC-CAFD188C28B6",
  "Accelerators": [
    {
      "DnsName": "ga-bp15u1i2hmtbk8c3i****.aliyunga0019.com",
      "Type": "None",
      "SecondDnsName": "ga-bp1f609c76zg6zuna****-1.aliyunga0047.com",
      "Spec": "1",
      "State": "active",
      "CreateTime": 1650643200,
      "CenId": "cen-hjfufhjfuwff****",
      "DdosId": "ddoscoo-cn-zz11vq7j****",
      "BasicBandwidthPackage": {
        "Bandwidth": 2,
        "BandwidthType": "Basic",
        "InstanceId": "gbwp-bp1d8xk8bg139j0fw****"
      },
      "RegionId": "cn-hangzhou",
      "InstanceChargeType": "PREPAY",
      "AcceleratorId": "ga-bp1odcab8tmno0hdq****",
      "Description": "Accelerator",
      "Bandwidth": 5,
      "BandwidthBillingType": "CDT",
      "ExpiredTime": 1653235200,
      "Name": "Accelerator",
      "CrossDomainBandwidthPackage": {
        "Bandwidth": 2,
        "InstanceId": "gbwp-bp1d8xk8bg139j0fw****"
      },
      "IpSetConfig": {
        "AccessMode": "UserDefine"
      },
      "ResourceGroupId": "rg-aekztkx4zwc****",
      "Tags": [
        {
          "Key": "test-key",
          "Value": "tast-value"
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
          "DdosId": "ddoscoo-cn-a8w4ekcb**",
          "DdosRegionId": "cn-hangzhou"
        }
      ]
    }
  ],
  "PageNumber": 1
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

See [Release Notes](https://api.alibabacloud.com/document/Ga/2019-11-20/ListAccelerators#workbench-doc-change-demo) for a complete list.
