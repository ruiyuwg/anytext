ALIYUN::ClickHouse::SynDb is used to create a synchronization task for an ApsaraDB for ClickHouse Community-compatible Edition cluster.

## Syntax

```
{
  "Type": "ALIYUN::ClickHouse::SynDb",
  "Properties": {
    "RdsVpcUrl": String,
    "LimitUpper": Integer,
    "SkipUnsupported": Boolean,
    "RdsId": String,
    "RdsPassword": String,
    "RdsUserName": String,
    "CkPassword": String,
    "CkUserName": String,
    "ClickhousePort": Integer,
    "SynDbTables": List,
    "DbClusterId": String,
    "RdsPort": Integer,
    "RdsVpcId": String
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

CkPassword

String

Yes

No

The password that is used to log on to the database account of the ApsaraDB for ClickHouse cluster.

None.

CkUserName

String

Yes

No

The database account of the ApsaraDB for ClickHouse cluster.

None.

DbClusterId

String

Yes

No

The ID of the ApsaraDB for ClickHouse cluster.

None.

RdsId

String

Yes

No

The ID of the ApsaraDB RDS for MySQL instance.

None.

RdsPassword

String

Yes

No

The password that is used to log on to the database account of the ApsaraDB RDS for MySQL instance.

None.

RdsUserName

String

Yes

No

The database account of the ApsaraDB RDS for MySQL instance.

None.

SkipUnsupported

Boolean

Yes

No

Specifies whether to ignore the table schemas that do not support synchronization.

Valid values:

-   true
    
-   false
    

SynDbTables

List

Yes

No

The tables that you want to synchronize.

For more information, see [SynDbTables properties](#026dc9e330to4).

ClickhousePort

Integer

No

No

The port number of the ApsaraDB for ClickHouse cluster.

None.

LimitUpper

Integer

No

No

The maximum number of rows that can be synchronized per second.

None.

RdsPort

Integer

No

No

The port number of the ApsaraDB RDS for MySQL instance.

None.

RdsVpcId

String

No

No

The ID of the virtual private cloud (VPC) to which the ApsaraDB RDS for MySQL instance belongs.

None.

RdsVpcUrl

String

No

No

The private endpoint of the ApsaraDB RDS for MySQL instance.

None.

## SynDbTables syntax

```
"SynDbTables": [
  {
    "Schema": String,
    "Tables": List
  }
]
```

## SynDbTables properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

Schema

String

Yes

No

The database name.

None.

Tables

List

Yes

No

The information about the tables.

None.

## Return values

Fn::GetAtt

-   SynDbs: the synchronized data.
    
-   DbClusterId: the ID of the ApsaraDB for ClickHouse cluster.
    
-   RdsId: the ID of the ApsaraDB RDS for MySQL instance.
    

## Examples

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  CkPassword:
    Description: The password of the database account
    Type: String
  CkUserName:
    Description: The account of the clickhouse database.
    Type: String
  ClickhousePort:
    Description: The port of clickhouse id.
    Type: Number
  DbClusterId:
    Description: Clickhouse cluster id.
    Type: String
  LimitUpper:
    Description: The maximum number of rows to sync per second.
    Type: Number
  RdsId:
    Description: The instance id of RDS.
    Type: String
  RdsPassword:
    Description: The password of the RDS database account.
    Type: String
  RdsPort:
    Description: The port of rds.
    Type: Number
  RdsUserName:
    Description: The account of the RDS database.
    Type: String
  RdsVpcId:
    Description: The vpc of rds.
    Type: String
  RdsVpcUrl:
    Description: Intranet address of ApsaraDB for RDS.
    Type: String
  SkipUnsupported:
    Description: Skip unsupported table or not.
    Type: Boolean
  SynDbTables:
    Description: The tables to syn.
    MaxLength: 10
    Type: Json
Resources:
  SynDb:
    Properties:
      CkPassword:
        Ref: CkPassword
      CkUserName:
        Ref: CkUserName
      ClickhousePort:
        Ref: ClickhousePort
      DbClusterId:
        Ref: DbClusterId
      LimitUpper:
        Ref: LimitUpper
      RdsId:
        Ref: RdsId
      RdsPassword:
        Ref: RdsPassword
      RdsPort:
        Ref: RdsPort
      RdsUserName:
        Ref: RdsUserName
      RdsVpcId:
        Ref: RdsVpcId
      RdsVpcUrl:
        Ref: RdsVpcUrl
      SkipUnsupported:
        Ref: SkipUnsupported
      SynDbTables:
        Ref: SynDbTables
    Type: ALIYUN::ClickHouse::SynDb
Outputs:
  DbClusterId:
    Description: The id of clickhouse.
    Value:
      Fn::GetAtt:
      - SynDb
      - DbClusterId
  RdsId:
    Description: The id of RDS
    Value:
      Fn::GetAtt:
      - SynDb
      - RdsId
  SynDbs:
    Description: Sync Dbs
    Value:
      Fn::GetAtt:
      - SynDb
      - SynDbs
```

## `JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "RdsVpcUrl": {
      "Type": "String",
      "Description": "Intranet address of ApsaraDB for RDS."
    },
    "LimitUpper": {
      "Type": "Number",
      "Description": "The maximum number of rows to sync per second."
    },
    "SkipUnsupported": {
      "Type": "Boolean",
      "Description": "Skip unsupported table or not."
    },
    "RdsId": {
      "Type": "String",
      "Description": "The instance id of RDS."
    },
    "RdsPassword": {
      "Type": "String",
      "Description": "The password of the RDS database account."
    },
    "RdsUserName": {
      "Type": "String",
      "Description": "The account of the RDS database."
    },
    "CkPassword": {
      "Type": "String",
      "Description": "The password of the database account"
    },
    "CkUserName": {
      "Type": "String",
      "Description": "The account of the clickhouse database."
    },
    "ClickhousePort": {
      "Type": "Number",
      "Description": "The port of clickhouse id."
    },
    "SynDbTables": {
      "Type": "Json",
      "Description": "The tables to syn.",
      "MaxLength": 10
    },
    "DbClusterId": {
      "Type": "String",
      "Description": "Clickhouse cluster id."
    },
    "RdsPort": {
      "Type": "Number",
      "Description": "The port of rds."
    },
    "RdsVpcId": {
      "Type": "String",
      "Description": "The vpc of rds."
    }
  },
  "Resources": {
    "SynDb": {
      "Type": "ALIYUN::ClickHouse::SynDb",
      "Properties": {
        "RdsVpcUrl": {
          "Ref": "RdsVpcUrl"
        },
        "LimitUpper": {
          "Ref": "LimitUpper"
        },
        "SkipUnsupported": {
          "Ref": "SkipUnsupported"
        },
        "RdsId": {
          "Ref": "RdsId"
        },
        "RdsPassword": {
          "Ref": "RdsPassword"
        },
        "RdsUserName": {
          "Ref": "RdsUserName"
        },
        "CkPassword": {
          "Ref": "CkPassword"
        },
        "CkUserName": {
          "Ref": "CkUserName"
        },
        "ClickhousePort": {
          "Ref": "ClickhousePort"
        },
        "SynDbTables": {
          "Ref": "SynDbTables"
        },
        "DbClusterId": {
          "Ref": "DbClusterId"
        },
        "RdsPort": {
          "Ref": "RdsPort"
        },
        "RdsVpcId": {
          "Ref": "RdsVpcId"
        }
      }
    }
  },
  "Outputs": {
    "SynDbs": {
      "Description": "Sync Dbs",
      "Value": {
        "Fn::GetAtt": [
          "SynDb",
          "SynDbs"
        ]
      }
    },
    "DbClusterId": {
      "Description": "The id of clickhouse.",
      "Value": {
        "Fn::GetAtt": [
          "SynDb",
          "DbClusterId"
        ]
      }
    },
    "RdsId": {
      "Description": "The id of RDS",
      "Value": {
        "Fn::GetAtt": [
          "SynDb",
          "RdsId"
        ]
      }
    }
  }
}
```
