ALIYUN::HBR::BackupClients is used to install backup clients on Elastic Compute Service (ECS) instances.

## Syntax

```
{
  "Type": "ALIYUN::HBR::BackupClients",
  "Properties": {
    "InstanceIds": List,
    "Tags": List
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

InstanceIds

List

Yes

No

The IDs of the ECS instances on which you want to install backup clients.

You can install backup clients on up to 20 ECS instances.

Tags

List

No

Yes

The custom tags.

For more information, see [Tags properties](#section-elc-zh1-b70).

## Tags syntax

```
"Tags": [
  {
    "Value": String,
    "Key": String
  }
]
```

## Tags properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

Key

String

Yes

No

The key of the tag.

The key must be 1 to 128 characters in length, and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.

Value

String

No

No

The value of the tag.

The value can be up to 128 characters in length, and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.

## Return values

Fn::GetAtt

-   InstanceIds: the IDs of the ECS instances.
    
-   ClientIds: the IDs of the backup clients.
    
-   Arn: the Alibaba Cloud Resource Name (ARN).
    

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
 InstanceIds:
  Type: Json
  Description: ID list of instances to install backup client
  MinLength: 1
  MaxLength: 20
Resources:
 BackupClients:
  Type: 'ALIYUN::HBR::BackupClients'
  Properties:
   InstanceIds:
    Ref: InstanceIds
Outputs:
 InstanceIds:
  Description: ID list of instances to install backup client
  Value:
   'Fn::GetAtt':
    - BackupClients
    - InstanceIds
 ClientIds:
  Description: ID list of clients installed in instances
  Value:
   'Fn::GetAtt':
    - BackupClients
    - ClientIds
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "InstanceIds": {
      "Type": "Json",
      "Description": "ID list of instances to install backup client",
      "MinLength": 1,
      "MaxLength": 20
    }
  },
  "Resources": {
    "BackupClients": {
      "Type": "ALIYUN::HBR::BackupClients",
      "Properties": {
        "InstanceIds": {
          "Ref": "InstanceIds"
        }
      }
    }
  },
  "Outputs": {
    "InstanceIds": {
      "Description": "ID list of instances to install backup client",
      "Value": {
        "Fn::GetAtt": [
          "BackupClients",
          "InstanceIds"
        ]
      }
    },
    "ClientIds": {
      "Description": "ID list of clients installed in instances",
      "Value": {
        "Fn::GetAtt": [
          "BackupClients",
          "ClientIds"
        ]
      }
    }
  }
}
```
