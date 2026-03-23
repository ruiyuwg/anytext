The ALIYUN::GPDB::SupabaseProject resource creates a Supabase project.

## Syntax

```
{
  "Type": "ALIYUN::GPDB::SupabaseProject",
  "Properties": {
    "AccountPassword": String,
    "ProjectSpec": String,
    "ProjectName": String,
    "SecurityIPList": String,
    "VpcId": String,
    "VSwitchId": String,
    "ZoneId": String,
    "DiskPerformanceLevel": String,
    "StorageSize": Integer
  }
}
```

## Properties

**Property name**

**Type**

**Required**

**Updatable**

**Description**

**Constraints**

AccountPassword

String

Yes

No

The password of the initial account.

Constraints:

-   Must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
    
-   The supported special characters are: `!@#$%^&*()_+-=`
    
-   The length must be 8 to 32 characters.
    

ProjectSpec

String

Yes

No

The instance type of the Supabase project.

The default value is 1C1G.

ProjectName

String

Yes

No

The name of the project.

The naming convention is as follows:

-   The name must be 1 to 128 characters in length.
    
-   It can contain only letters, digits, hyphens (-), and underscores (\_).
    
-   It must start with a letter or an underscore (\_).
    

SecurityIPList

String

Yes

No

The IP address whitelist.

The value 127.0.0.1 indicates that no external IP addresses are allowed to access the instance.

VpcId

String

Yes

No

The ID of the VPC.

None

VSwitchId

String

Yes

No

The ID of the vSwitch.

None

ZoneId

String

Yes

No

The ID of the zone.

None

DiskPerformanceLevel

String

No

No

The performance level (PL) of the disk.

The default value is PL0. Valid values:

-   PL0
    
-   PL1
    

StorageSize

Integer

No

No

The storage space.

Unit: GB. The default value is 1 GB.

## Return values

Fn::GetAtt

ProjectId: The ID of the Supabase project.

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  ProjectSpec:
    Type: String
    Description:
      en: The instance type of the Supabase project. The default value is 1C1G.
    Required: true
  VpcId:
    AssociationProperty: ALIYUN::ECS::VPC::VPCId
    Type: String
    Description:
      en: |-
        The ID of the VPC.
        Note: You can call the DescribeRdsVpcs operation to query the available VPC IDs.
        This parameter is required.
    Required: true
  ZoneId:
    AssociationProperty: ZoneId
    Type: String
    Description:
      en: |-
        The ID of the zone.
        Note: You can call the DescribeRegions operation to query the available zone IDs.
    Required: true
  ProjectName:
    Type: String
    Description:
      en: |-
        The name of the project. The naming convention is as follows:
        The name must be 1 to 128 characters in length.
        It can contain only letters, digits, hyphens (-), and underscores (_).
        It must start with a letter or an underscore (_).
    AllowedPattern: ^[a-zA-Z_][a-zA-Z0-9_-]{0,127}$
    Required: true
  SecurityIPList:
    Type: String
    Description:
      en: |-
        The IP address whitelist.
        The value 127.0.0.1 indicates that no external IP addresses are allowed to access the instance. After the instance is created, you can call the ModifySecurityIps operation to modify the IP address whitelist.
    Required: true
  VSwitchId:
    AssociationPropertyMetadata:
      VpcId: ${VpcId}
      ZoneId: ${ZoneId}
    AssociationProperty: ALIYUN::VPC::VSwitch::VSwitchId
    Type: String
    Description:
      en: |-
        The ID of the vSwitch.
        Note: The vSwitchId parameter is required.
        The zone where the vSwitch is located must be the same as the value of ZoneId.
    Required: true
  AccountPassword:
    Type: String
    Description:
      en: |-
        The password of the initial account.
        The password must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
        The supported special characters are: !@#$%^&*()_+-=
        The length must be 8 to 32 characters.
    AllowedPattern: ^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+=-]).{8,32}$
    Required: true
Resources:
  SupabaseProject:
    Type: ALIYUN::GPDB::SupabaseProject
    Properties:
      ProjectSpec:
        Ref: ProjectSpec
      VpcId:
        Ref: VpcId
      ZoneId:
        Ref: ZoneId
      ProjectName:
        Ref: ProjectName
      SecurityIPList:
        Ref: SecurityIPList
      VSwitchId:
        Ref: VSwitchId
      AccountPassword:
        Ref: AccountPassword
Outputs:
  ProjectId:
    Description: The ID of the Supabase instance
    Value:
      Fn::GetAtt:
        - SupabaseProject
        - ProjectId
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "ProjectSpec": {
      "Type": "String",
      "Description": {
        "en": "The instance type of the Supabase project. The default value is 1C1G."
      },
      "Required": true
    },
    "VpcId": {
      "AssociationProperty": "ALIYUN::ECS::VPC::VPCId",
      "Type": "String",
      "Description": {
        "en": "The ID of the VPC.\nNote: You can call the DescribeRdsVpcs operation to query the available VPC IDs.\nThis parameter is required."
      },
      "Required": true
    },
    "ZoneId": {
      "AssociationProperty": "ZoneId",
      "Type": "String",
      "Description": {
        "en": "The ID of the zone.\nNote: You can call the DescribeRegions operation to query the available zone IDs."
      },
      "Required": true
    },
    "ProjectName": {
      "Type": "String",
      "Description": {
        "en": "The name of the project. The naming convention is as follows:\nThe name must be 1 to 128 characters in length.\nIt can contain only letters, digits, hyphens (-), and underscores (_).\nIt must start with a letter or an underscore (_)."
      },
      "AllowedPattern": "^[a-zA-Z_][a-zA-Z0-9_-]{0,127}$",
      "Required": true
    },
    "SecurityIPList": {
      "Type": "String",
      "Description": {
        "en": "The IP address whitelist.\nThe value 127.0.0.1 indicates that no external IP addresses are allowed to access the instance. After the instance is created, you can call the ModifySecurityIps operation to modify the IP address whitelist."
      },
      "Required": true
    },
    "VSwitchId": {
      "AssociationPropertyMetadata": {
        "VpcId": "${VpcId}",
        "ZoneId": "${ZoneId}"
      },
      "AssociationProperty": "ALIYUN::VPC::VSwitch::VSwitchId",
      "Type": "String",
      "Description": {
        "en": "The ID of the vSwitch.\nNote: The vSwitchId parameter is required.\nThe zone where the vSwitch is located must be the same as the value of ZoneId."
      },
      "Required": true
    },
    "AccountPassword": {
      "Type": "String",
      "Description": {
        "en": "The password of the initial account.\nThe password must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.\nThe supported special characters are: !@#$%^&*()_+-=.\nThe length must be 8 to 32 characters."
      },
      "AllowedPattern": "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*()_+=-]).{8,32}$",
      "Required": true
    }
  },
  "Resources": {
    "SupabaseProject": {
      "Type": "ALIYUN::GPDB::SupabaseProject",
      "Properties": {
        "ProjectSpec": {
          "Ref": "ProjectSpec"
        },
        "VpcId": {
          "Ref": "VpcId"
        },
        "ZoneId": {
          "Ref": "ZoneId"
        },
        "ProjectName": {
          "Ref": "ProjectName"
        },
        "SecurityIPList": {
          "Ref": "SecurityIPList"
        },
        "VSwitchId": {
          "Ref": "VSwitchId"
        },
        "AccountPassword": {
          "Ref": "AccountPassword"
        }
      }
    }
  },
  "Outputs": {
    "ProjectId": {
      "Description": "The ID of the Supabase instance",
      "Value": {
        "Fn::GetAtt": [
          "SupabaseProject",
          "ProjectId"
        ]
      }
    }
  }
}
                        
```
