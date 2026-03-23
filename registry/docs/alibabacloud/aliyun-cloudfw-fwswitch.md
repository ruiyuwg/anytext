ALIYUN::CLOUDFW::FwSwitch is used to enable a firewall.

## Syntax

```
{
  "Type": "ALIYUN::CLOUDFW::FwSwitch",
  "Properties": {
    "IpaddrList": List,
    "ResourceTypeList": List,
    "RegionList": List
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

IpaddrList

List

No

No

The IP addresses.

**Note**

You must specify at least one of the following properties: IpaddrList, RegionList, and ResourceTypeList.

Example: \["192.0.X.X","192.0.X.X"\].

RegionList

List

No

No

The regions.

**Note**

You must specify at least one of the following properties: IpaddrList, RegionList, and ResourceTypeList.

Example: \["cn-hangzhou","cn-shanghai"\].

ResourceTypeList

List

No

No

The asset types.

Valid values:

-   BastionHostIP: the egress IP address of a bastion host
    
-   BastionHostIngressIP: the ingress IP address of a bastion host
    
-   EcsEIP: the elastic IP address (EIP) of an Elastic Compute Service (ECS) instance
    
-   EcsPublicIP: the public IP address of an ECS instance
    
-   EIP: the EIP
    
-   EniEIP: the EIP of an elastic network interface (ENI)
    
-   NatEIP: the EIP of a NAT gateway
    
-   SlbEIP: the EIP of a Server Load Balancer (SLB) instance
    
-   SlbPublicIP: the public IP address of an SLB instance
    
-   NatPublicIP: the public IP address of a NAT gateway
    
-   HAVIP: the high-availability virtual IP address (HAVIP)
    

**Note**

You must specify at least one of the following properties: IpaddrList, RegionList, and ResourceTypeList.

Example: \["EcsPublicIp","NatEip"\].

## Return values

Fn::GetAtt

None.

## Examples

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  IpaddrList:
    Description:
      en: 'The IP address list.

        **Note**: The IpaddrList, RegionList, and ResourceTypeList arguments are not
        allowed to be empty at the same time. A value must be set for one of the three
        arguments.'
    MaxLength: 200
    Required: false
    Type: Json
  RegionList:
    Description:
      en: 'The region list.

        **Note**: The IpaddrList, RegionList, and ResourceTypeList arguments are not
        allowed to be empty at the same time. A value must be set for one of the three
        arguments.'
    MaxLength: 200
    Required: false
    Type: Json
  ResourceTypeList:
    Description:
      en: 'The asset type list. Valid values:

        - BastionHostIP: Bastion machine exit IP.

        - BastionHostIngressIP: The entrance IP of the fortress machine.

        - EcsEIP: ECS EIP.

        - EcsPublicIP: ECS public network IP.

        - EIP: Elastic Public IP.

        - EniEIP: Elastic Network card EIP.

        - NatEIP: NAT EIP.

        - SlbEIP: SLB EIP.

        - SlbPublicIP: SLB public network IP.

        - NatPublicIP: NAT public IP

        - HAVIP: High Availability Virtual IP.

        **Note**: The IpaddrList, RegionList, and ResourceTypeList arguments are not
        allowed to be empty at the same time. A value must be set for one of the three
        arguments.'
    MaxLength: 200
    Required: false
    Type: Json
Resources:
  FwSwitch:
    Properties:
      IpaddrList:
        Ref: IpaddrList
      RegionList:
        Ref: RegionList
      ResourceTypeList:
        Ref: ResourceTypeList
    Type: ALIYUN::CLOUDFW::FwSwitch
                        
```

## `JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "IpaddrList": {
      "Type": "Json",
      "Description": {
        "en": "The IP address list.\n**Note**: The IpaddrList, RegionList, and ResourceTypeList arguments are not allowed to be empty at the same time. A value must be set for one of the three arguments."
      },
      "Required": false,
      "MaxLength": 200
    },
    "ResourceTypeList": {
      "Type": "Json",
      "Description": {
        "en": "The asset type list. Valid values:\n- BastionHostIP: Bastion machine exit IP.\n- BastionHostIngressIP: The entrance IP of the fortress machine.\n- EcsEIP: ECS EIP.\n- EcsPublicIP: ECS public network IP.\n- EIP: Elastic Public IP.\n- EniEIP: Elastic Network card EIP.\n- NatEIP: NAT EIP.\n- SlbEIP: SLB EIP.\n- SlbPublicIP: SLB public network IP.\n- NatPublicIP: NAT public IP\n- HAVIP: High Availability Virtual IP.\n**Note**: The IpaddrList, RegionList, and ResourceTypeList arguments are not allowed to be empty at the same time. A value must be set for one of the three arguments."
      },
      "Required": false,
      "MaxLength": 200
    },
    "RegionList": {
      "Type": "Json",
      "Description": {
        "en": "The region list.\n**Note**: The IpaddrList, RegionList, and ResourceTypeList arguments are not allowed to be empty at the same time. A value must be set for one of the three arguments."
      },
      "Required": false,
      "MaxLength": 200
    }
  },
  "Resources": {
    "FwSwitch": {
      "Type": "ALIYUN::CLOUDFW::FwSwitch",
      "Properties": {
        "IpaddrList": {
          "Ref": "IpaddrList"
        },
        "ResourceTypeList": {
          "Ref": "ResourceTypeList"
        },
        "RegionList": {
          "Ref": "RegionList"
        }
      }
    }
  }
}
                        
```
