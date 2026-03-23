DATASOURCE::SLB::LoadBalancers is used to query created Classic Load Balancer (CLB) instances.

## Syntax

```
{
  "Type": "DATASOURCE::SLB::LoadBalancers",
  "Properties": {
    "Status": String,
    "AddressIpVersion": String,
    "ResourceGroupId": String,
    "Address": String,
    "VSwitchId": String,
    "LoadBalancerId": String,
    "SlaveZoneId": String,
    "InternetChargeType": String,
    "LoadBalancerName": String,
    "VpcId": String,
    "NetworkType": String,
    "PaymentType": String,
    "AddressType": String,
    "MasterZoneId": String,
    "RefreshOptions": String
  }
}
```

## Properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

Status

String

No

Yes

The status of the CLB instance.

Valid values:

-   inactive: The CLB instance is stopped. The listeners of CLB instances in this state do not forward traffic.
    
-   active: The CLB instance is running. By default, new CLB instances are in the active state.
    
-   locked: The CLB instance is locked. After a CLB instance expires, the instance is locked for seven days. You cannot perform operations on a locked CLB instance. The locked CLB instance no longer forwards traffic, but the IP address and other settings are retained.
    

AddressIpVersion

String

No

Yes

The IP version.

Valid values:

-   ipv4
    
-   ipv6
    

ResourceGroupId

String

No

Yes

The ID of the resource group.

None.

Address

String

No

Yes

The IP address that the CLB instance uses to provide services.

None.

VSwitchId

String

No

Yes

The ID of the vSwitch to which the CLB instance belongs.

None.

LoadBalancerId

String

No

Yes

The ID of the CLB instance.

You can specify up to 10 IDs. Separate multiple IDs with commas (,).

SlaveZoneId

String

No

Yes

The ID of the secondary zone to which the CLB instance belongs.

None.

InternetChargeType

String

No

Yes

The metering method of Internet data transfer.

Valid values:

-   paybybandwidth: pay-by-bandwidth
    
-   paybytraffic: pay-by-data-transfer
    

**Note**

-   If the value of PayType is set to PrePay, only the pay-by-bandwidth metering method is supported.
    
-   If the value of InstanceChargeType is set to PayByCLCU, only the pay-by-data-transfer metering method is supported.
    

LoadBalancerName

String

No

Yes

The name of the CLB instance.

The name must be 1 to 80 characters in length, and can contain digits, periods (.), underscores (\_), and hyphens (-). The name must start with a letter. You can specify up to 10 names. Separate multiple names with commas (,).

VpcId

String

No

Yes

The ID of the virtual private cloud (VPC) to which the CLB instance belongs.

None.

NetworkType

String

No

Yes

The network type of the internal-facing CLB instance.

Valid values:

-   Vpc: VPC
    
-   classic: classic network
    

PaymentType

String

No

Yes

The billing method of the CLB instance.

None.

AddressType

String

No

Yes

The network type of the CLB instance.

Valid values:

-   internet: After an Internet-facing CLB instance is created, the system allocates a public IP address to the instance. The CLB instance can forward requests over the Internet.
    
-   intranet: After an internal-facing CLB instance is created, the system allocates a private IP address to the instance. The CLB instance can forward requests over an internal network.
    

MasterZoneId

String

No

Yes

The ID of the primary zone to which the CLB instance belongs.

None.

RefreshOptions

String

No

Yes

The refresh policy for data source resources when the stack is updated.

Valid values:

-   Never (default): does not refresh data source resources when the stack is updated.
    
-   Always: refreshes data source resources when the stack is updated.
    

## Return values

Fn::GetAtt

-   LoadBalancerIds: the IDs of the CLB instances.
    
-   LoadBalancers: details of the CLB instances.
    

**Property**

**Type**

**Description**

**Constraint**

LoadBalancerIds

List

The IDs of the CLB instances.

None.

LoadBalancers

List

Details of the CLB instances.

None.

ModificationProtectionStatus

String

Indicates whether the configuration read-only mode is enabled for the CLB instance.

Valid values:

-   NonProtection: The configuration read-only mode is disabled for the CLB instance. After ModificationProtectionStatus is set to NonProtection, the value of ModificationProtectionReason is cleared.
    
-   ConsoleProtection: The configuration read-only mode is enabled for the CLB instance.
    

AddressIpVersion

String

The IP version.

Valid values:

-   ipv4
    
-   ipv6
    

InternetChargeType

String

The metering method of the Internet-facing CLB instance.

Valid values:

-   3: pay-by-bandwidth
    
-   4: pay-by-data-transfer
    

**Note**

-   If the value of PayType is set to PrePay, only the pay-by-bandwidth metering method is supported.
    
-   If the value of InstanceChargeType is set to PayByCLCU, only the pay-by-data-transfer metering method is supported.
    

Status

String

The status of the CLB instance.

Valid values:

-   inactive: The CLB instance is stopped. The listeners of CLB instances in this state do not forward traffic.
    
-   active: The CLB instance is running. By default, new CLB instances are in the active state.
    
-   locked: The CLB instance is locked. After a CLB instance expires, the instance is locked for seven days. You cannot perform operations on a locked CLB instance. The locked CLB instance no longer forwards traffic, but the IP address and other settings are retained.
    

AddressType

String

The network type of the CLB instance.

Valid values:

-   internet: After an Internet-facing CLB instance is created, the system allocates a public IP address to the instance. The CLB instance can forward requests over the Internet.
    
-   intranet: After an internal-facing CLB instance is created, the system allocates a private IP address to the instance. The CLB instance can forward requests over an internal network.
    

RegionIdAlias

String

The name of the region in which the CLB instance resides.

None.

Tags

List

The tags.

None.

RegionId

String

The ID of the region in which the CLB instance resides.

None.

ResourceGroupId

String

The ID of the resource group.

None.

CreateTimeStamp

String

The timestamp that indicates when the CLB instance was created.

None.

VSwitchId

String

The ID of the vSwitch to which the internal-facing CLB instance belongs.

None.

Address

String

The IP address that the CLB instance uses to provide services.

None.

MasterZoneId

String

The ID of the primary zone to which the CLB instance belongs.

None.

LoadBalancerName

String

The name of the CLB instance.

None.

VpcId

String

The ID of the VPC to which the internal-facing CLB instance belongs.

None.

LoadBalancerSpec

String

The specification of the CLB instance.

None.

DeleteProtection

String

Indicates whether deletion protection is enabled for the CLB instance.

Valid values:

-   on: Deletion protection is enabled for the CLB instance.
    
-   off: Deletion protection is disabled for the CLB instance.
    

ModificationProtectionReason

String

The managed instance.

The reason why the configuration read-only mode is enabled. The value is 1 to 80 characters in length. It starts with a letter and can contain digits, periods (.), underscores (\_), and hyphens (-).

**Note**

This property takes effect only when ModificationProtectionStatus is set to ConsoleProtection.

SlaveZoneId

String

The ID of the secondary zone to which the CLB instance belongs.

None.

PaymentType

String

The billing method of the CLB instance.

None.

Bandwidth

Integer

The maximum bandwidth of the listener.

Unit: Mbit/s.

Valid values:

-   \-1: For a pay-by-data-transfer Internet-facing CLB instance, you can set the maximum bandwidth to -1, which indicates that the bandwidth of the listener is unlimited.
    
-   1 to 5120: For a pay-by-bandwidth Internet-facing CLB instance, you can specify a maximum bandwidth for each listener. The sum of the maximum bandwidth of all listeners cannot exceed the maximum bandwidth of the CLB instance.
    

LoadBalancerId

String

The ID of the CLB instance.

None.

NetworkType

String

The network type of the internal-facing CLB instance.

Valid values:

-   Vpc: VPC
    
-   classic: classic network
    

CreateTime

String

The time when the CLB instance was created.

The time is in the YYYY-MM-DDThh:mm:ssZ format.

## Examples

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "LoadBalancerId": {
      "Type": "String",
      "Description": "ID of the load balancing instance."
    }
  },
  "Resources": {
    "ExtensionDataSource": {
      "Type": "DATASOURCE::SLB::LoadBalancers",
      "Properties": {
        "LoadBalancerId": {
          "Ref": "LoadBalancerId"
        }
      }
    }
  },
  "Outputs": {
    "LoadBalancerIds": {
      "Description": "The list of load balancer IDs.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "LoadBalancerIds"
        ]
      }
    },
    "LoadBalancers": {
      "Description": "The list of load balancers.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "LoadBalancers"
        ]
      }
    }
  }
}
```

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  LoadBalancerId:
    Type: String
    Description: ID of the load balancing instance.
Resources:
  ExtensionDataSource:
    Type: DATASOURCE::SLB::LoadBalancers
    Properties:
      LoadBalancerId:
        Ref: LoadBalancerId
Outputs:
  LoadBalancerIds:
    Description: The list of load balancer IDs.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - LoadBalancerIds
  LoadBalancers:
    Description: The list of load balancers.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - LoadBalancers
```
