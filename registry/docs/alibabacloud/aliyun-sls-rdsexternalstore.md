ALIYUN::SLS::RdsExternalStore is used to create an ApsaraDB RDS for MySQL external store.

## Syntax

```
{
  "Type": "ALIYUN::SLS::RdsExternalStore",
  "Properties": {
    "Db": String,
    "ExternalStoreName": String,
    "Host": String,
    "Project": String,
    "Port": Integer,
    "Password": String,
    "Region": String,
    "StoreType": String,
    "Table": String,
    "Username": String,
    "VpcId": String,
    "InstanceId": String
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

Db

String

Yes

Yes

The name of the database on the ApsaraDB RDS for MySQL instance.

None.

ExternalStoreName

String

Yes

No

The name of the external store.

None.

Host

String

Yes

Yes

The private or public endpoint of the ApsaraDB RDS for MySQL instance.

None.

Project

String

Yes

No

The project name.

None.

Port

Integer

Yes

Yes

The private or public port of the ApsaraDB RDS for MySQL instance.

None.

Password

String

Yes

Yes

The password that is used to log on to the ApsaraDB RDS for MySQL instance.

None.

Region

String

Yes

Yes

The region where the ApsaraDB RDS for MySQL instance resides.

Valid values:

-   cn-qingdao
    
-   cn-beijing
    
-   cn-hangzhou
    

StoreType

String

Yes

No

The storage type.

Set the value to rds-vpc, which specifies a database created on an ApsaraDB RDS for MySQL instance in a virtual private cloud (VPC).

Table

String

Yes

Yes

The name of the database table in the ApsaraDB RDS for MySQL instance.

None.

Username

String

Yes

Yes

The username that is used to log on to the ApsaraDB RDS for MySQL instance.

None.

VpcId

String

Yes

Yes

The ID of the VPC to which the ApsaraDB RDS for MySQL instance belongs.

None.

InstanceId

String

No

Yes

The ID of the ApsaraDB RDS for MySQL instance.

None.

## Return values

Fn::GetAtt

-   Project: the project name.
    
-   ExternalStoreName: the name of the external store.
    

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  StoreType:
    Type: String
    Description:
      en: The storage type. Set the value to rds-vpc, which indicates an ApsaraDB RDS for MySQL database in a virtual private cloud (VPC).
    AllowedValues:
      - rds-vpc
    Required: true
  Project:
    Type: String
    Description:
      en: The name of the project.
    Required: true
  Table:
    Type: String
    Description:
      en: The name of the database table in the ApsaraDB RDS for MySQL instance.
    Required: true
  VpcId:
    AssociationProperty: ALIYUN::ECS::VPC::VPCId
    Type: String
    Description:
      en: The ID of the VPC to which the ApsaraDB RDS for MySQL instance belongs.
    Required: true
  Username:
    Type: String
    Description:
      en: The username that is used to log on to the ApsaraDB RDS for MySQL instance.
    Required: true
  Port:
    Type: Number
    Description:
      en: The internal or public port of the ApsaraDB RDS for MySQL instance.
    Required: true
  Region:
    Type: String
    Description:
      en: 'The region where the ApsaraDB RDS for MySQL instance resides. Valid values: cn-qingdao, cn-beijing, and cn-hangzhou.'
    AllowedValues:
      - cn-qingdao
      - cn-beijing
      - cn-hangzhou
    Required: true
  Host:
    Type: String
    Description:
      en: The internal or public endpoint of the ApsaraDB RDS for MySQL instance.
    Required: true
  ExternalStoreName:
    Type: String
    Description:
      en: The name of the external store. The name must be unique in a project and different from Logstore.
    Required: true
  Db:
    Type: String
    Description:
      en: The name of the database in the ApsaraDB RDS for MySQL instance.
    Required: true
  Password:
    Type: String
    Description:
      en: The password that is used to log on to the ApsaraDB RDS for MySQL instance.
    Required: true
Resources:
  RdsExternalStore:
    Type: ALIYUN::SLS::RdsExternalStore
    Properties:
      StoreType:
        Ref: StoreType
      Project:
        Ref: Project
      Table:
        Ref: Table
      VpcId:
        Ref: VpcId
      Username:
        Ref: Username
      Port:
        Ref: Port
      Region:
        Ref: Region
      Host:
        Ref: Host
      ExternalStoreName:
        Ref: ExternalStoreName
      Db:
        Ref: Db
      Password:
        Ref: Password
Outputs:
  Project:
    Description: The name of the project to which the external store belongs.
    Value:
      Fn::GetAtt:
        - RdsExternalStore
        - Project
  ExternalStoreName:
    Description: The name of the external store.
    Value:
      Fn::GetAtt:
        - RdsExternalStore
        - ExternalStoreName
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "StoreType": {
      "Type": "String",
      "Description": {
        "en": "The storage type. Set the value to rds-vpc, which indicates an ApsaraDB RDS for MySQL database in a virtual private cloud (VPC)."
      },
      "AllowedValues": [
        "rds-vpc"
      ],
      "Required": true
    },
    "Project": {
      "Type": "String",
      "Description": {
        "en": "The name of the project."
      },
      "Required": true
    },
    "Table": {
      "Type": "String",
      "Description": {
        "en": "The name of the database table in the ApsaraDB RDS for MySQL instance."
      },
      "Required": true
    },
    "VpcId": {
      "AssociationProperty": "ALIYUN::ECS::VPC::VPCId",
      "Type": "String",
      "Description": {
        "en": "The ID of the VPC to which the ApsaraDB RDS for MySQL instance belongs."
      },
      "Required": true
    },
    "Username": {
      "Type": "String",
      "Description": {
        "en": "The username that is used to log on to the ApsaraDB RDS for MySQL instance."
      },
      "Required": true
    },
    "Port": {
      "Type": "Number",
      "Description": {
        "en": "The internal or public port of the ApsaraDB RDS for MySQL instance."
      },
      "Required": true
    },
    "Region": {
      "Type": "String",
      "Description": {
        "en": "The region where the ApsaraDB RDS for MySQL instance resides. Valid values: cn-qingdao, cn-beijing, and cn-hangzhou."
      },
      "AllowedValues": [
        "cn-qingdao",
        "cn-beijing",
        "cn-hangzhou"
      ],
      "Required": true
    },
    "Host": {
      "Type": "String",
      "Description": {
        "en": "The internal or public endpoint of the ApsaraDB RDS for MySQL instance."
      },
      "Required": true
    },
    "ExternalStoreName": {
      "Type": "String",
      "Description": {
        "en": "The name of the external store. The name must be unique in a project and different from Logstore."
      },
      "Required": true
    },
    "Db": {
      "Type": "String",
      "Description": {
        "en": "The name of the database in the ApsaraDB RDS for MySQL instance."
      },
      "Required": true
    },
    "Password": {
      "Type": "String",
      "Description": {
        "en": "The password that is used to log on to the ApsaraDB RDS for MySQL instance."
      },
      "Required": true
    }
  },
  "Resources": {
    "RdsExternalStore": {
      "Type": "ALIYUN::SLS::RdsExternalStore",
      "Properties": {
        "StoreType": {
          "Ref": "StoreType"
        },
        "Project": {
          "Ref": "Project"
        },
        "Table": {
          "Ref": "Table"
        },
        "VpcId": {
          "Ref": "VpcId"
        },
        "Username": {
          "Ref": "Username"
        },
        "Port": {
          "Ref": "Port"
        },
        "Region": {
          "Ref": "Region"
        },
        "Host": {
          "Ref": "Host"
        },
        "ExternalStoreName": {
          "Ref": "ExternalStoreName"
        },
        "Db": {
          "Ref": "Db"
        },
        "Password": {
          "Ref": "Password"
        }
      }
    }
  },
  "Outputs": {
    "Project": {
      "Description": "The name of the project to which the external store belongs.",
      "Value": {
        "Fn::GetAtt": [
          "RdsExternalStore",
          "Project"
        ]
      }
    },
    "ExternalStoreName": {
      "Description": "The name of the external store.",
      "Value": {
        "Fn::GetAtt": [
          "RdsExternalStore",
          "ExternalStoreName"
        ]
      }
    }
  }
}
                        
```
