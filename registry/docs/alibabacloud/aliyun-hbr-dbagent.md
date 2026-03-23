ALIYUN::HBR::DbAgent is used to install a Data Disaster Recovery client.

## Syntax

```
{
  "Type": "ALIYUN::HBR::DbAgent",
  "Properties": {
    "InstanceInfo": List,
    "CrossAccountType": String,
    "CrossAccountRoleName": String,
    "CrossAccountUserId": Number
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

InstanceInfo

List

Yes

No

The information about the Elastic Compute Service (ECS) instances.

You can specify 1 to 100 ECS instances.

For more information, see [InstanceInfo syntax](#section-zws-sqm-nfd) and [InstanceInfo properties](#section-pxm-t2w-xs4).

CrossAccountType

String

No

No

The backup type.

Valid values:

-   **SELF\_ACCOUNT**: backup within the current Alibaba Cloud account.
    
-   **CROSS\_ACCOUNT**: backup across Alibaba Cloud accounts.
    

CrossAccountRoleName

String

No

No

The name of the Resource Access Management (RAM) role that is created within the source Alibaba Cloud account and assigned to the current Alibaba Cloud account to authorize the current Alibaba Cloud account to back up data across Alibaba Cloud accounts.

None.

CrossAccountUserId

Number

No

No

The ID of the source Alibaba Cloud account that is used to authorize the current Alibaba Cloud account to back up data across Alibaba Cloud accounts.

None.

## InstanceInfo syntax

```
"InstanceInfo": [
  {
    "UserName": String,
    "InstanceId": String,
    "SourceType": String,
    "Password": String,
    "AuthenticationType": String
  }
]
```

## InstanceInfo properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

UserName

String

No

No

The username of the account that is used to connect to the Data Disaster Recovery client.

None.

InstanceId

String

Yes

No

The ID of the ECS instance.

None.

SourceType

String

Yes

No

The type of the data source.

Valid values:

-   `MYSQL`
    
-   `ORACLE`
    
-   `MSSQL`
    

Password

String

No

No

The password of the account that is used to connect to the Data Disaster Recovery client.

None.

AuthenticationType

String

No

No

The authentication method.

Valid values:

-   Valid value when SourceType is set to `MYSQL` or `MSSQL`: INSTANCE.
    
-   Valid value when SourceType is set to `ORACLE`: ACCESS\_KEY.
    

## Return values

Fn::GetAtt

-   UniBackupInstances: the instances on which the Data Disaster Recovery client is installed.
    
-   TaskId: the ID of the task.
    
-   UniBackupInstanceDetails: details of the instances on which the Data Disaster Recovery client is installed.
    
-   InstanceIds: the IDs of the ECS instances.
    

## Examples

`JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "InstanceInfo": {
      "Type": "Json",
      "Description": "Instance infos",
      "Default": "[\n  {\n    \"UserName\": \"test123\",\n    \"InstanceId\": \"i-12e****\",\n    \"SourceType\": \"MSSQL\",\n    \"Password\": \"tes****\",\n    \"AuthenticationType\": \"INSTANCE\"\n  }\n]"
    }
  },
  "Resources": {
    "UniBackupAgent": {
      "Type": "ALIYUN::HBR::DbAgent",
      "Properties": {
        "InstanceInfo": {
          "Ref": "InstanceInfo"
        }
      }
    }
  },
  "Outputs": {
    "UniBackupInstances": {
      "Description": "Uni backup agent instance info",
      "Value": {
        "Fn::GetAtt": [
          "UniBackupAgent",
          "UniBackupInstances"
        ]
      }
    },
    "TaskId": {
      "Description": "Uni backup agent install task id.",
      "Value": {
        "Fn::GetAtt": [
          "UniBackupAgent",
          "TaskId"
        ]
      }
    },
    "UniBackupInstanceDetails": {
      "Description": "Uni backup agent instance info details",
      "Value": {
        "Fn::GetAtt": [
          "UniBackupAgent",
          "UniBackupInstanceDetails"
        ]
      }
    },
    "InstanceIds": {
      "Description": "Uni backup agent instance ids",
      "Value": {
        "Fn::GetAtt": [
          "UniBackupAgent",
          "InstanceIds"
        ]
      }
    }
  }
}
```
