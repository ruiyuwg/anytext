ALIYUN::TSDB::InfluxDBDatabase is used to create a Time Series Database (TSDB) database.

## Syntax

```
{
  "Type": "ALIYUN::TSDB::InfluxDBDatabase",
  "Properties": {
    "InstanceId": String,
    "DBName": String
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

InstanceId

String

Yes

No

The ID of the TSDB instance.

N/A

DBName

String

Yes

No

The name of the TSDB database.

The name can be up to 64 characters in length, and can contain lowercase letters, digits, and underscores (\_). It must start with a lowercase letter and end with a lowercase letter or digit.

## Response parameters

Fn::GetAtt

-   InstanceId: the ID of the TSDB instance.
-   DBName: the name of the TSDB database.

## Examples

`JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "InstanceId": {
      "Type": "String",
      "Description": "The ID of TSDB for InfluxDB.",
      "Default": "ts-wz99vz6u8jg39****"
    },
    "DBName": {
      "Type": "String",
      "Description": "The name of database. The name can at most be 64 characters in length and can contain lowercase letters, digits, and underscores (_). It must start with a letter and end with a letter or digit.",
      "MinLength": 1,
      "MaxLength": 64,
      "Default": "test"
    }
  },
  "Resources": {
    "InfluxDBDatabase": {
      "Type": "ALIYUN::TSDB::InfluxDBDatabase",
      "Properties": {
        "InstanceId": {
          "Ref": "InstanceId"
        },
        "DBName": {
          "Ref": "DBName"
        }
      }
    }
  },
  "Outputs": {
    "InstanceId": {
      "Description": "The ID of TSDB for InfluxDB.",
      "Value": {
        "Fn::GetAtt": [
          "InfluxDBDatabase",
          "InstanceId"
        ]
      }
    },
    "DBName": {
      "Description": "The name of database.",
      "Value": {
        "Fn::GetAtt": [
          "InfluxDBDatabase",
          "DBName"
        ]
      }
    }
  }
}
```
