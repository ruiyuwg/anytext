ALIYUN::BastionHost::Host is used to create a host for O&M in a bastion host.

## Syntax

```
{
  "Type": "ALIYUN::BastionHost::Host",
  "Properties": {
    "Comment": String,
    "ActiveAddressType": String,
    "HostPrivateAddress": String,
    "InstanceRegionId": String,
    "HostPublicAddress": String,
    "InstanceId": String,
    "OSType": String,
    "SourceInstanceId": String,
    "HostName": String,
    "Source": String
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

ActiveAddressType

String

Yes

No

The IP address type of the host.

Valid values:

-   Public
    
-   Private
    

HostName

String

Yes

Yes

The host name.

The name can be up to 128 characters in length.

InstanceId

String

Yes

No

The ID of the bastion host in which you want to create the host.

**Note**

You can call the [DescribeInstances](/help/en/bh/api-ko6161#doc-api-Yundun-bastionhost-DescribeInstances) operation to query the bastion host ID.

OSType

String

Yes

Yes

The OS of the host.

Valid values:

-   Linux
    
-   Windows
    

Source

String

Yes

No

The source of the host.

Valid values:

-   Local: a host in a data center
    
-   Ecs: an Elastic Compute Service (ECS) instance
    
-   Rds: a host in an ApsaraDB MyBase dedicated cluster
    

Comment

String

No

Yes

The description of the host.

The description can be up to 500 characters in length.

HostPrivateAddress

String

No

Yes

The private domain name or IP address of the host.

The domain name or IP address format is supported.

**Note**

You must specify this property when ActiveAddressType is set to Private.

HostPublicAddress

String

No

Yes

The public domain name or IP address of the host.

The domain name or IP address format is supported.

**Note**

You must specify this property when ActiveAddressType is set to Public.

InstanceRegionId

String

No

No

The ID of the region to which the ECS instance or the dedicated cluster host that you want to create belongs.

None.

SourceInstanceId

String

No

No

The ID of the ECS instance or the dedicated cluster host that you want to create.

None.

## Return values

Fn::GetAtt

HostId: the host ID.

## Examples

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  ActiveAddressType:
    Type: String
    Description: |-
      The endpoint type of the host that you want to create. Valid values:
      Public: a public endpoint
      Private: an internal endpoint
    AllowedValues:
      - Private
      - Public
  InstanceId:
    Type: String
    Description: |-
      The ID of the Bastionhost instance where you want to create the host.
      Note: You can call the DescribeInstances operation to query the ID of the Bastionhost instance.
  OSType:
    Type: String
    Description: |-
      The operating system of the host that you want to create. Valid values:
      - Linux
      - Windows
    AllowedValues:
      - Linux
      - Windows
  HostName:
    Type: String
    Description: The name of the host that you want to create. The name can be up to 128 characters in length.
    MaxLength: 128
  Source:
    Type: String
    Description: |-
      The source of the host that you want to create. Valid values:
      - Local: an on-premises host
      - Ecs: an Elastic Compute Service (ECS) instance
      - Rds: a host in a dedicated cluster
    AllowedValues:
      - Ecs
      - Local
      - Rds
Resources:
  Host:
    Type: ALIYUN::BastionHost::Host
    Properties:
      ActiveAddressType:
        Ref: ActiveAddressType
      InstanceId:
        Ref: InstanceId
      OSType:
        Ref: OSType
      HostName:
        Ref: HostName
      Source:
        Ref: Source
Outputs:
  HostId:
    Description: The ID of the host that was created.
    Value:
      Fn::GetAtt:
        - Host
        - HostId
```

## `JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "ActiveAddressType": {
      "Type": "String",
      "Description": "The endpoint type of the host that you want to create. Valid values:\nPublic: a public endpoint\nPrivate: an internal endpoint",
      "AllowedValues": [
        "Private",
        "Public"
      ]
    },
    "InstanceId": {
      "Type": "String",
      "Description": "The ID of the Bastionhost instance where you want to create the host.\nNote: You can call the DescribeInstances operation to query the ID of the Bastionhost instance."
    },
    "OSType": {
      "Type": "String",
      "Description": "The operating system of the host that you want to create. Valid values:\n- Linux\n- Windows",
      "AllowedValues": [
        "Linux",
        "Windows"
      ]
    },
    "HostName": {
      "Type": "String",
      "Description": "The name of the host that you want to create. The name can be up to 128 characters in length.",
      "MaxLength": 128
    },
    "Source": {
      "Type": "String",
      "Description": "The source of the host that you want to create. Valid values:\n- Local: an on-premises host\n- Ecs: an Elastic Compute Service (ECS) instance\n- Rds: a host in a dedicated cluster",
      "AllowedValues": [
        "Ecs",
        "Local",
        "Rds"
      ]
    }
  },
  "Resources": {
    "Host": {
      "Type": "ALIYUN::BastionHost::Host",
      "Properties": {
        "ActiveAddressType": {
          "Ref": "ActiveAddressType"
        },
        "InstanceId": {
          "Ref": "InstanceId"
        },
        "OSType": {
          "Ref": "OSType"
        },
        "HostName": {
          "Ref": "HostName"
        },
        "Source": {
          "Ref": "Source"
        }
      }
    }
  },
  "Outputs": {
    "HostId": {
      "Description": "The ID of the host that was created.",
      "Value": {
        "Fn::GetAtt": [
          "Host",
          "HostId"
        ]
      }
    }
  }
}
```
