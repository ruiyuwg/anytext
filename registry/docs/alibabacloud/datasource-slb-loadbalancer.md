DATASOURCE::SLB::LoadBalancer is used to query the information about a Classic Load Balancer (CLB) instance.

## Syntax

```
{
  "Type": "DATASOURCE::SLB::LoadBalancer",
  "Properties": {
    "LoadBalancerId": String,
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

LoadBalancerId

String

Yes

Yes

The ID of the CLB instance.

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

-   RenewalDuration: the auto-renewal period.
    
-   AddressIpVersion: the IP version.
    
-   ListenerPortsAndProtocal: the listener ports and protocol.
    
-   EndTime: the end time of the CLB instance.
    
-   ResourceGroupId: the ID of the resource group.
    
-   Address: the service address of the CLB instance.
    
-   InstanceChargeType: the metering method of the CLB instance.
    
-   ListenerPortsAndProtocol: the frontend ports and protocol used by the CLB instance.
    
-   LoadBalancerId: the ID of the CLB instance.
    
-   BackendServers: the backend servers of the CLB instance.
    
-   ModificationProtectionStatus: the status of the configuration read-only mode of the CLB instance.
    
-   LoadBalancerSpec: the specification of the CLB instance.
    
-   NetworkType: the network type of the CLB instance.
    
-   Bandwidth: the maximum bandwidth of the Internet-facing CLB instance that uses the pay-by-bandwidth metering method.
    
-   ModificationProtectionReason: the reason why the configuration read-only mode is used.
    
-   PaymentType: the billing method.
    
-   Tags: the tags.
    
-   MasterZoneId: the primary zone ID of the CLB instance.
    
-   VSwitchId: the vSwitch ID of the internal-facing CLB instance.
    
-   CreateTime: the creation time of the CLB instance.
    
-   RenewalStatus: the renewal status.
    
-   RenewalCycUnit: the auto-renewal cycle.
    
-   SlaveZoneId: the secondary zone ID of the CLB instance.
    
-   InternetChargeType: the metering method of the Internet-facing CLB instance.
    
-   RegionIdAlias: the region alias of the CLB instance.
    
-   LoadBalancerName: the name of the CLB instance.
    
-   VpcId: the virtual private cloud (VPC) ID of the internal-facing CLB instance.
    
-   DeleteProtection: indicates whether deletion protection is enabled for the CLB instance.
    
-   EndTimeStamp: the timestamp that indicates the end time of the CLB instance.
    
-   AddressType: the address type of the CLB instance.
    
-   CreateTimeStamp: the timestamp that indicates the creation time of the CLB instance.
    
-   AutoReleaseTime: the timestamp that indicates the release time.
    

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  LoadBalancerId:
    Type: String
    Description:
      en: The CLB instance ID.
    Required: true
Resources:
  ExtensionDataSource:
    Type: DATASOURCE::SLB::LoadBalancer
    Properties:
      LoadBalancerId:
        Ref: LoadBalancerId
Outputs:
  RenewalDuration:
    Description: The auto-renewal duration. This parameter is valid only if RenewalStatus is set to AutoRenewal.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - RenewalDuration
  AddressIpVersion:
    Description: 'The version of the IP address. Valid values: ipv4 and ipv6.'
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - AddressIpVersion
  ListenerPortsAndProtocal:
    Description: The ports or protocols of the listeners.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - ListenerPortsAndProtocal
  EndTime:
    Description: The time when the CLB instance expires.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - EndTime
  ResourceGroupId:
    Description: The resource group ID.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - ResourceGroupId
  Address:
    Description: The service IP address of the CLB instance.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - Address
  InstanceChargeType:
    Description: Instance billing method.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - InstanceChargeType
  ListenerPortsAndProtocol:
    Description: The ports or protocols of the listeners.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - ListenerPortsAndProtocol
  LoadBalancerId:
    Description: The CLB instance ID.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - LoadBalancerId
  BackendServers:
    Description: The backend servers of the CLB instance.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - BackendServers
  ModificationProtectionStatus:
    Description: Load balancing modifies the protection state.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - ModificationProtectionStatus
  LoadBalancerSpec:
    Description: The specification of the CLB instance.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - LoadBalancerSpec
  NetworkType:
    Description: The network type of the CLB instance.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - NetworkType
  Bandwidth:
    Description: The maximum bandwidth of the Internet-facing CLB instance that is billed on a pay-by-bandwidth basis.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - Bandwidth
  ModificationProtectionReason:
    Description: 'The reason why the configuration read-only mode is enabled. '
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - ModificationProtectionReason
  PaymentType:
    Description: Load balancing instance payment type.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - PaymentType
  Tags:
    Description: The tags of the CLB instance.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - Tags
  MasterZoneId:
    Description: The ID of the primary zone to which the CLB instance belongs.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - MasterZoneId
  VSwitchId:
    Description: The ID of the vSwitch to which the internal-facing CLB instance belongs.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - VSwitchId
  CreateTime:
    Description: The time when the CLB instance was created.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - CreateTime
  RenewalStatus:
    Description: Indicates whether auto-renewal is enabled.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - RenewalStatus
  RenewalCycUnit:
    Description: 'The auto-renewal cycle. Valid values: Year and Month. Default value: Month.'
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - RenewalCycUnit
  SlaveZoneId:
    Description: The ID of the secondary zone to which the CLB instance belongs.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - SlaveZoneId
  InternetChargeType:
    Description: The metering method of the Internet-facing CLB instance.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - InternetChargeType
  RegionIdAlias:
    Description: The alias of the region to which the CLB instance belongs.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - RegionIdAlias
  LoadBalancerName:
    Description: The name of the CLB instance.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - LoadBalancerName
  VpcId:
    Description: The ID of the virtual private cloud (VPC) where the internal-facing CLB instance is deployed.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - VpcId
  DeleteProtection:
    Description: Indicates whether deletion protection is enabled for the CLB instance.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - DeleteProtection
  EndTimeStamp:
    Description: The timestamp that indicates the expiration time of the CLB instance.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - EndTimeStamp
  AddressType:
    Description: The address type of the CLB instance.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - AddressType
  CreateTimeStamp:
    Description: The timestamp generated when the CA certificate is uploaded.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - CreateTimeStamp
  AutoReleaseTime:
    Description: The timestamp generated when the CLB instance is released.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - AutoReleaseTime
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "LoadBalancerId": {
      "Type": "String",
      "Description": {
        "en": "The CLB instance ID."
      },
      "Required": true
    }
  },
  "Resources": {
    "ExtensionDataSource": {
      "Type": "DATASOURCE::SLB::LoadBalancer",
      "Properties": {
        "LoadBalancerId": {
          "Ref": "LoadBalancerId"
        }
      }
    }
  },
  "Outputs": {
    "RenewalDuration": {
      "Description": "The auto-renewal duration. This parameter is valid only if RenewalStatus is set to AutoRenewal.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "RenewalDuration"
        ]
      }
    },
    "AddressIpVersion": {
      "Description": "The version of the IP address. Valid values: ipv4 and ipv6.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "AddressIpVersion"
        ]
      }
    },
    "ListenerPortsAndProtocal": {
      "Description": "The ports or protocols of the listeners.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "ListenerPortsAndProtocal"
        ]
      }
    },
    "EndTime": {
      "Description": "The time when the CLB instance expires.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "EndTime"
        ]
      }
    },
    "ResourceGroupId": {
      "Description": "The resource group ID.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "ResourceGroupId"
        ]
      }
    },
    "Address": {
      "Description": "The service IP address of the CLB instance.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Address"
        ]
      }
    },
    "InstanceChargeType": {
      "Description": "Instance billing method.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "InstanceChargeType"
        ]
      }
    },
    "ListenerPortsAndProtocol": {
      "Description": "The ports or protocols of the listeners.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "ListenerPortsAndProtocol"
        ]
      }
    },
    "LoadBalancerId": {
      "Description": "The CLB instance ID.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "LoadBalancerId"
        ]
      }
    },
    "BackendServers": {
      "Description": "The backend servers of the CLB instance.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "BackendServers"
        ]
      }
    },
    "ModificationProtectionStatus": {
      "Description": "Load balancing modifies the protection state.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "ModificationProtectionStatus"
        ]
      }
    },
    "LoadBalancerSpec": {
      "Description": "The specification of the CLB instance.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "LoadBalancerSpec"
        ]
      }
    },
    "NetworkType": {
      "Description": "The network type of the CLB instance.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "NetworkType"
        ]
      }
    },
    "Bandwidth": {
      "Description": "The maximum bandwidth of the Internet-facing CLB instance that is billed on a pay-by-bandwidth basis.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Bandwidth"
        ]
      }
    },
    "ModificationProtectionReason": {
      "Description": "The reason why the configuration read-only mode is enabled. ",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "ModificationProtectionReason"
        ]
      }
    },
    "PaymentType": {
      "Description": "Load balancing instance payment type.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "PaymentType"
        ]
      }
    },
    "Tags": {
      "Description": "The tags of the CLB instance.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Tags"
        ]
      }
    },
    "MasterZoneId": {
      "Description": "The ID of the primary zone to which the CLB instance belongs.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "MasterZoneId"
        ]
      }
    },
    "VSwitchId": {
      "Description": "The ID of the vSwitch to which the internal-facing CLB instance belongs.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "VSwitchId"
        ]
      }
    },
    "CreateTime": {
      "Description": "The time when the CLB instance was created.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "CreateTime"
        ]
      }
    },
    "RenewalStatus": {
      "Description": "Indicates whether auto-renewal is enabled.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "RenewalStatus"
        ]
      }
    },
    "RenewalCycUnit": {
      "Description": "The auto-renewal cycle. Valid values: Year and Month. Default value: Month.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "RenewalCycUnit"
        ]
      }
    },
    "SlaveZoneId": {
      "Description": "The ID of the secondary zone to which the CLB instance belongs.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "SlaveZoneId"
        ]
      }
    },
    "InternetChargeType": {
      "Description": "The metering method of the Internet-facing CLB instance.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "InternetChargeType"
        ]
      }
    },
    "RegionIdAlias": {
      "Description": "The alias of the region to which the CLB instance belongs.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "RegionIdAlias"
        ]
      }
    },
    "LoadBalancerName": {
      "Description": "The name of the CLB instance.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "LoadBalancerName"
        ]
      }
    },
    "VpcId": {
      "Description": "The ID of the virtual private cloud (VPC) where the internal-facing CLB instance is deployed.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "VpcId"
        ]
      }
    },
    "DeleteProtection": {
      "Description": "Indicates whether deletion protection is enabled for the CLB instance.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "DeleteProtection"
        ]
      }
    },
    "EndTimeStamp": {
      "Description": "The timestamp that indicates the expiration time of the CLB instance.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "EndTimeStamp"
        ]
      }
    },
    "AddressType": {
      "Description": "The address type of the CLB instance.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "AddressType"
        ]
      }
    },
    "CreateTimeStamp": {
      "Description": "The timestamp generated when the CA certificate is uploaded.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "CreateTimeStamp"
        ]
      }
    },
    "AutoReleaseTime": {
      "Description": "The timestamp generated when the CLB instance is released.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "AutoReleaseTime"
        ]
      }
    }
  }
}
                        
```
