ALIYUN::SLS::MetricStore is used to create a Logstore.

## Syntax

```
{
  "Type": "ALIYUN::SLS::MetricStore",
  "Properties": {
    "LogstoreName": String,
    "PreserveStorage": Boolean,
    "ProjectName": String,
    "TTL": Integer,
    "ShardCount": Integer
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

LogstoreName

String

Yes

No

The name of the Logstore.

None

PreserveStorage

Boolean

No

Yes

Specifies whether to permanently retain logs.

Valid values:

-   true: permanently retains logs.
    
    **Note** The TTL property does not take effect if the PreserveStorage property is set to true.
    
-   false: does not permanently retain logs. This is the default value.

ProjectName

String

Yes

No

The name of the Log Service project.

None

TTL

Integer

No

Yes

The retention period of logs.

Valid values: 1 to 3600.

Default value: 30.

Unit: days.

ShardCount

Integer

No

No

The number of shards.

Valid values: 1 to 100.

Default value: 2.

Unit: shard.

## Response parameters

Fn::GetAtt

LogstoreName: the name of the Logstore.

## Examples

`JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "LogstoreName": {
      "Type": "String",
      "Description": "Metric store name:\n1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).\n2. Must start and end with lowercase letters and numbers.\n3. The name length is 3-63 characters.",
      "MinLength": 3,
      "MaxLength": 63
    },
    "ProjectName": {
      "Type": "String",
      "Description": "Project name:\n1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).\n2. Must start and end with lowercase letters and numbers.\n3. The name length is 3-63 characters.",
      "AllowedPattern": "^[a-zA-Z0-9_-]+$",
      "MinLength": 3,
      "MaxLength": 63
    }
  },
  "Resources": {
    "MetricStore": {
      "Type": "ALIYUN::SLS::MetricStore",
      "Properties": {
        "LogstoreName": {
          "Ref": "LogstoreName"
        },
        "ProjectName": {
          "Ref": "ProjectName"
        }
      }
    }
  },
  "Outputs": {
    "LogstoreName": {
      "Description": "Metric store name.",
      "Value": {
        "Fn::GetAtt": [
          "MetricStore",
          "LogstoreName"
        ]
      }
    }
  }
}
```
