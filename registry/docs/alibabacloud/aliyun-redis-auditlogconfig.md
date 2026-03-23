ALIYUN::REDIS::AuditLogConfig is used to modify the audit log settings of a Tair (Redis OSS-compatible) instance.

## Syntax

```
{
  "Type": "ALIYUN::REDIS::AuditLogConfig",
  "Properties": {
    "InstanceId": String,
    "Retention": Integer
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

InstanceId

String

Yes

No

The ID of the instance.

You can call the [DescribeInstances](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-describeinstances-redis) operation to query the instance ID.

Retention

Integer

Yes

Yes

The retention period of audit logs.

Valid values: **1** to **365**. Unit: day.

The value of this property takes effect for all Tair (Redis OSS-compatible) instances in the current region.

## Return values

Fn::GetAtt

InstanceId: the ID of the instance.

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  InstanceId:
    Description:
      en: The ID of the instance. You can call the DescribeInstances operation to
        query the ID of the instance.
    Required: true
    Type: String
  Retention:
    Description:
      en: 'The retention period of audit logs. Valid values: 1 to 365. Unit: days.

        Note: The value of this parameter takes effect for all ApsaraDB for Redis
        instances in the current region.'
    MaxValue: 365
    MinValue: 1
    Required: true
    Type: Number
Resources:
  AuditLogConfig:
    Properties:
      InstanceId:
        Ref: InstanceId
      Retention:
        Ref: Retention
    Type: ALIYUN::REDIS::AuditLogConfig
Outputs:
  InstanceId:
    Description: IP address whitelist to be modified
    Value:
      Fn::GetAtt:
      - AuditLogConfig
      - InstanceId
                        
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "InstanceId": {
      "Type": "String",
      "Description": {
        "en": "The ID of the instance. You can call the DescribeInstances operation to query the ID of the instance."
      },
      "Required": true
    },
    "Retention": {
      "Type": "Number",
      "Description": {
        "en": "The retention period of audit logs. Valid values: 1 to 365. Unit: days.\nNote: The value of this parameter takes effect for all ApsaraDB for Redis instances in the current region."
      },
      "Required": true,
      "MinValue": 1,
      "MaxValue": 365
    }
  },
  "Resources": {
    "AuditLogConfig": {
      "Type": "ALIYUN::REDIS::AuditLogConfig",
      "Properties": {
        "InstanceId": {
          "Ref": "InstanceId"
        },
        "Retention": {
          "Ref": "Retention"
        }
      }
    }
  },
  "Outputs": {
    "InstanceId": {
      "Description": "IP address whitelist to be modified",
      "Value": {
        "Fn::GetAtt": [
          "AuditLogConfig",
          "InstanceId"
        ]
      }
    }
  }
}
                        
```
