ALIYUN::HBR::DbPlan is used to create a backup plan.

## Syntax

```
{
  "Type": "ALIYUN::HBR::DbPlan",
  "Properties": {
    "Options": String,
    "InstanceUuid": String,
    "SourceType": String,
    "VaultId": String,
    "Source": Map,
    "ContinuousPlan": String,
    "IncPlan": String,
    "MaxRetrySeconds": Integer,
    "HostUuid": String,
    "CumulativePlan": String,
    "FullPlan": String,
    "LogPlan": String,
    "MaxRateLimit": Integer,
    "DbPlanName": String
  }
}
```

## Properties

     

Property

Type

Required

Editable

Description

Constraint

Options

String

No

No

The backup options.

The value is a JSON string and varies based on the SourceType value. Sample values:

-   Sample value if you set SourceType to ORACLE: `{"channels":4,"compression":"lzop","offline_backup":false,"archivelog_reserve_hours":24,"custom_commands":""}`.
    
    -   channels: the number of concurrent backup operations.
    -   archivelog\_reserve\_hours: the time to delete archived logs after the backup is completed.
    -   Other parameters in the sample value: If you do not specify these parameters, the default values of them are used.
    
    **Note** For more information about how to back up an Oracle database, see [Back up an Oracle database](/help/en/cloud-backup/user-guide/back-up-an-oracle-database#task-2038193 "You can use Hybrid Backup Recovery (HBR) to back up Oracle databases that are deployed on Elastic Compute Service (ECS) instances or on your on-premises servers. You can also restore these databases based on your business requirements. This topic describes how to back up an Oracle database.").
    
-   Sample value if you set SourceType to MYSQL: `{"channels":4,"compression":"lzop","del_binlog":false}`.
    
    `del_binlog`: indicates whether to delete binary logs after the backup is completed. This parameter only takes effect for log backup and real-time backup.
    
    **Note** For more information about how to back up a MySQL database, see [Back up a MySQL database](/help/en/cloud-backup/user-guide/back-up-a-mysql-database#task-2038199 "You can use Hybrid Backup Recovery (HBR) to back up MySQL databases that are deployed on Elastic Compute Service (ECS) instances or on-premises servers. You can also restore the databases based on your business requirements. This topic describes how to back up a MySQL database.").
    
-   Sample value if you set SourceType to MSSQL: `{\"channels\":4,\"verify\":false,\"compression\":\"lzop\",\"backup_new_databases\":false}`.
    
    **Note** For more information about how to back up a SQL Server database, see [Back up an SQL Server database](/help/en/cloud-backup/user-guide/back-up-an-sql-server-database#task-2037309 "You can use Hybrid Backup Recovery (HBR) to back up SQL Server databases that are deployed on Elastic Compute Service (ECS) instances or on-premises servers. You can also restore the databases based on your business requirements. This topic describes how to back up an SQL Server database.").
    

InstanceUuid

String

No

No

The UUID of the database instance.

None.

SourceType

String

Yes

Yes

The type of the source database.

Valid values:

-   MYSQL
-   ORACLE
-   MSSQL

VaultId

String

Yes

No

The ID of the backup vault.

None.

Source

Map

No

No

The database instance that you want to back up.

For more information, see [Source syntax](#section-mnr-d0e-0m6) and [Source properties](#section-h9f-aaz-5i0).

ContinuousPlan

String

No

Yes

The continuous backup plan for logs.

Set the value to `{"type": "continuous"}`.

IncPlan

String

No

Yes

The incremental backup plan.

This parameter is applicable only to source MySQL and Oracle databases.

The value is a JSON string. Sample values:

-   `{"type": "daily", "start": "00:00:00", "interval": 3},`: When you back up the database on a daily basis, the value is used.
-   `{"type":"weekly","start": "03:00:00","days": [1,2,3,4,5],"interval": 1}`: When you back up the database on a weekly basis, the value is used.

**Note**

-   day: a specific day. Valid values of day: 0 to 6. 0 indicates Sunday.
-   interval: the interval between consecutive backup plans. Valid values of interval: 1 to 52.

MaxRetrySeconds

Integer

No

Yes

The time to re-connect to a database after the database is disconnected

during backup. Default value: 600. Unit: seconds.

HostUuid

String

Yes

No

The UUID of the client.

None.

CumulativePlan

String

No

Yes

The cumulative incremental backup plan.

This parameter is applicable only to source SQL Server databases.

The value is a JSON string. Sample values:

-   `{"type": "daily", "start": "00:00:00", "interval": 3},`: When you back up the database on a daily basis, the value is used.
-   `{"type":"weekly","start": "03:00:00","days": [1,2,3,4,5],"interval": 1}`: When you back up the database on a weekly basis, the value is used.

**Note**

-   day: a specific day. Valid values of day: 0 to 6. 0 indicates Sunday.
-   interval: the interval between consecutive backup plans. Valid values of interval: 1 to 52.

FullPlan

String

No

Yes

The full backup plan.

The value is a JSON string. Sample values:

-   `{"type": "daily", "start": "00:00:00", "interval": 3},`: When you back up the database on a daily basis, the value is used.
-   `{"type":"weekly","start": "03:00:00","days": [1,2,3,4,5],"interval": 1}`: When you back up the database on a weekly basis, the value is used.

**Note**

-   day: a specific day. Valid values of day: 0 to 6. 0 indicates Sunday.
-   interval: the interval between consecutive backup plans. Valid values of interval: 1 to 52.

LogPlan

String

No

Yes

The backup plan for logs.

The value is a JSON string. Sample values:

-   `{"type": "daily", "start": "00:00:00", "interval": 3},`: When you back up the database on a daily basis, the value is used.
-   `{"type":"weekly","start": "03:00:00","days": [1,2,3,4,5],"interval": 1}`: When you back up the database on a weekly basis, the value is used.

**Note**

-   day: a specific day. Valid values of day: 0 to 6. 0 indicates Sunday.
-   interval: the interval between consecutive backup plans. Valid values of interval: 1 to 52.

MaxRateLimit

Integer

No

Yes

The maximum value of the backup speed.

Default value: 0. 0 indicates that the backup speed is not limited.

DbPlanName

String

Yes

Yes

The name of the backup plan.

None.

## Source syntax

```
"Source": {
  "Entries": List
}
```

## Source properties

     

Property

Type

Required

Editable

Description

Constraint

Entries

List

No

No

The source database instance.

Valid values:

-   Valid value if you set SourceType to ORACLE: `["oracle://${instanceName}", "oracle://${instanceName}/archivelog"]`.
    
    `${instanceName}`: the name of the Oracle database instance. You can specify the ALIYUN::HBR::DbAgent resource type to obtain the name.
    
-   Valid value if you set SourceType to MYSQL: `["mysql://${instanceName}"]`.
    
    `${instanceName}`: the name of the MySQL database instance. You can specify the ALIYUN::HBR::DbAgent resource type to obtain the name.
    
-   Valid value if you set SourceType to MSSQL: `["mssql://${instanceName}/${databse1}", "mssql://${instanceName}/${databse2}"]`.
    
    `${database}`: the name of the SQL Server database. You can specify the ALIYUN::HBR::DbAgent resource type to obtain the name.
    

## Response parameters

Fn::GetAtt

-   Options: the backup options. The value is in the JSON format.
-   InstanceId: the ID of the database instance.
-   CumulativeUuid: the ID of the incremental backup plan.
-   SourceType: the type of the source database.
-   PlanId: the ID of the backup plan.
-   LogUuid: the ID of the log.
-   VaultId: the ID of the backup vault.
-   IncUuid: the ID of the incremental backup plan.
-   ContinuousPlan: the continuous backup plan for logs.
-   IncPlan: the incremental backup plan.
-   MaxRetrySeconds: the time that is consumed to re-connect to the database after the database is disconnected.
-   Target: the database that is backed up.
-   HostUuid: the UUID of the client.
-   ContinuousUuid: the UUID of the continuous backup plan for logs.
-   CumulativePlan: the cumulative incremental backup plan.
-   FullPlan: the full backup plan.
-   LogPlan: the log backup plan.
-   MaxRateLimit: the maximum value of the backup speed.
-   FullUuid: the UUID of the full backup plan.
-   DbPlanName: the name of the backup plan.

## Examples

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "Options": {
      "Type": "String",
      "Description": "Backup options in json format, different for each type of database. For Oracle, use {\"channels\":4,\"compression\":\"lzop\",\"offline_backup\":false,\"archivelog_reserve_hours\":24,\"custom_commands\":\"\"}, \"channels\" means numbers of concurrent theads, \"archivelog_reserve_hours\" means how long before the archive log will be deleted after backup job completed, other paramters should use the default value. For Mysql, use {\"channels\":4,\"compression\":\"lzop\",\"del_binlog\":false}, \"del_binlog\" means whether the binlog will be deleted after backup completed, only take effect for log or continuous backup. For SQL Server, use {\\\"channels\\\":4,\\\"verify\\\":false,\\\"compression\\\":\\\"lzop\\\",\\\"backup_new_databases\\\":false}.",
      "Default": "{\"channels\":4,\"compression\":\"lzop\",\"del_binlog\":false}"
    },
    "InstanceUuid": {
      "Type": "String",
      "Description": "Uuid of database instance.",
      "Default": "d12729b82116154****"
    },
    "SourceType": {
      "Type": "String",
      "Description": "Database type, allowed value: MySQL, ORACLE, MSSQL",
      "Default": "MySQL"
    },
    "VaultId": {
      "Type": "String",
      "Description": "Vault ID to create backup plan, the backup data will be stored to the vault.",
      "Default": "v-df****"
    },
    "Source": {
      "Type": "Json",
      "Description": "Which database instance or database will be backup.",
      "Default": "{\n  \"Entries\": [\n    \"mysql://MySQL-3306\"\n  ]\n}"
    },
    "ContinuousPlan": {
      "Type": "String",
      "Description": "Continuous backup plan schedule. Use {   \"type\": \"continuous\" }.",
      "Default": "continuous"
    },
    "IncPlan": {
      "Type": "String",
      "Description": "Incremental backup plan schedule. Only for mysql and oracle. More details see FullPlan.",
      "Default": "{\n    \"interval\": 1,\n    \"start\": \"00:00:00\",\n    \"type\": \"daily\"\n  }"
    },
    "MaxRetrySeconds": {
      "Type": "Number",
      "Description": "Max retry seconds on network failure.",
      "Default": "600"
    },
    "HostUuid": {
      "Type": "String",
      "Description": "Uuid of the host of the database instance.",
      "Default": "701781640b3afc****"
    },
    "FullPlan": {
      "Type": "String",
      "Description": "Full backup plan schedule. daily: {\"type\": \"daily\", \"start\": \"00:00:00\", \"interval\": 3}, weekly {\"type\":\"weekly\",\"start\": \"03:00:00\",\"days\": [1,2,3,4,5],\"interval\": 1}, days can be 0 - 6, 0 means Sunday, and interval can be 1 - 52.",
      "Default": "{\n    \"days\": [\n      6\n    ],\n    \"interval\": 1,\n    \"start\": \"18:00:00\",\n    \"type\": \"weekly\"\n  }"
    },
    "DbPlanName": {
      "Type": "String",
      "Description": "Display name of the backup plan.",
      "Default": "test"
    }
  },
  "Resources": {
    "HBRDbPlan": {
      "Type": "ALIYUN::HBR::DbPlan",
      "Properties": {
        "Options": {
          "Ref": "Options"
        },
        "InstanceUuid": {
          "Ref": "InstanceUuid"
        },
        "SourceType": {
          "Ref": "SourceType"
        },
        "VaultId": {
          "Ref": "VaultId"
        },
        "Source": {
          "Ref": "Source"
        },
        "ContinuousPlan": {
          "Ref": "ContinuousPlan"
        },
        "IncPlan": {
          "Ref": "IncPlan"
        },
        "MaxRetrySeconds": {
          "Ref": "MaxRetrySeconds"
        },
        "HostUuid": {
          "Ref": "HostUuid"
        },
        "FullPlan": {
          "Ref": "FullPlan"
        },
        "DbPlanName": {
          "Ref": "DbPlanName"
        }
      }
    }
  },
  "Outputs": {
    "Options": {
      "Description": "Backup options in json format, different for each type of database. For Oracle, use {\"channels\":4,\"compression\":\"lzop\",\"offline_backup\":false,\"archivelog_reserve_hours\":24,\"custom_commands\":\"\"}, \"channels\" means numbers of concurrent theads, \"archivelog_reserve_hours\" means how long before the archive log will be deleted after backup job completed, other paramters should use the default value. For Mysql, use {\"channels\":4,\"compression\":\"lzop\",\"del_binlog\":false}, \"del_binlog\" means whether the binlog will be deleted after backup completed, only take effect for log or continuous backup. For SQL Server, use {\\\"channels\\\":4,\\\"verify\\\":false,\\\"compression\\\":\\\"lzop\\\",\\\"backup_new_databases\\\":false}.",
      "Value": {
        "Fn::GetAtt": [
          "HBRDbPlan",
          "Options"
        ]
      }
    },
    "InstanceUuid": {
      "Description": "Uuid of database instance.",
      "Value": {
        "Fn::GetAtt": [
          "HBRDbPlan",
          "InstanceUuid"
        ]
      }
    },
    "CumulativeUuid": {
      "Description": "Uuid of cumulative plan.",
      "Value": {
        "Fn::GetAtt": [
          "HBRDbPlan",
          "CumulativeUuid"
        ]
      }
    },
    "SourceType": {
      "Description": "Database type, allowed value: MySQL, ORACLE, MSSQL",
      "Value": {
        "Fn::GetAtt": [
          "HBRDbPlan",
          "SourceType"
        ]
      }
    },
    "PlanId": {
      "Description": "Id of the backup plan.",
      "Value": {
        "Fn::GetAtt": [
          "HBRDbPlan",
          "PlanId"
        ]
      }
    },
    "LogUuid": {
      "Description": "Uuid of the log backup plan.",
      "Value": {
        "Fn::GetAtt": [
          "HBRDbPlan",
          "LogUuid"
        ]
      }
    },
    "VaultId": {
      "Description": "Vault ID to create backup plan, the backup data will be stored to the vault.",
      "Value": {
        "Fn::GetAtt": [
          "HBRDbPlan",
          "VaultId"
        ]
      }
    },
    "IncUuid": {
      "Description": "Uuid of the incremental bakcup plan.",
      "Value": {
        "Fn::GetAtt": [
          "HBRDbPlan",
          "IncUuid"
        ]
      }
    },
    "ContinuousPlan": {
      "Description": "Continuous backup plan schedule. Use {   \"type\": \"continuous\" }.",
      "Value": {
        "Fn::GetAtt": [
          "HBRDbPlan",
          "ContinuousPlan"
        ]
      }
    },
    "IncPlan": {
      "Description": "Incremental backup plan schedule. Only for mysql and oracle. More details see FullPlan.",
      "Value": {
        "Fn::GetAtt": [
          "HBRDbPlan",
          "IncPlan"
        ]
      }
    },
    "MaxRetrySeconds": {
      "Description": "Max retry seconds on network failure.",
      "Value": {
        "Fn::GetAtt": [
          "HBRDbPlan",
          "MaxRetrySeconds"
        ]
      }
    },
    "Target": {
      "Description": "Target vault to backup.",
      "Value": {
        "Fn::GetAtt": [
          "HBRDbPlan",
          "Target"
        ]
      }
    },
    "HostUuid": {
      "Description": "Uuid of the host of the database instance.",
      "Value": {
        "Fn::GetAtt": [
          "HBRDbPlan",
          "HostUuid"
        ]
      }
    },
    "ContinuousUuid": {
      "Description": "Uuid of continuous backup plan.",
      "Value": {
        "Fn::GetAtt": [
          "HBRDbPlan",
          "ContinuousUuid"
        ]
      }
    },
    "CumulativePlan": {
      "Description": "Cumulative plan schedule, only for mssql. More details see FullPlan.",
      "Value": {
        "Fn::GetAtt": [
          "HBRDbPlan",
          "CumulativePlan"
        ]
      }
    },
    "FullPlan": {
      "Description": "Full backup plan schedule. daily: {\"type\": \"daily\", \"start\": \"00:00:00\", \"interval\": 3}, weekly {\"type\":\"weekly\",\"start\": \"03:00:00\",\"days\": [1,2,3,4,5],\"interval\": 1}, days can be 0 - 6, 0 means Sunday, and interval can be 1 - 52.",
      "Value": {
        "Fn::GetAtt": [
          "HBRDbPlan",
          "FullPlan"
        ]
      }
    },
    "LogPlan": {
      "Description": "Log backup plan schedule. More details see FullPlan.",
      "Value": {
        "Fn::GetAtt": [
          "HBRDbPlan",
          "LogPlan"
        ]
      }
    },
    "MaxRateLimit": {
      "Description": "Max rate limit for backup job,",
      "Value": {
        "Fn::GetAtt": [
          "HBRDbPlan",
          "MaxRateLimit"
        ]
      }
    },
    "FullUuid": {
      "Description": "Uuid of full backup plan.",
      "Value": {
        "Fn::GetAtt": [
          "HBRDbPlan",
          "FullUuid"
        ]
      }
    },
    "DbPlanName": {
      "Description": "Display name of the backup plan.",
      "Value": {
        "Fn::GetAtt": [
          "HBRDbPlan",
          "DbPlanName"
        ]
      }
    }
  }
}
```
