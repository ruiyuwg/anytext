ALIYUN::GPDB::InstancePublicConnection is used to allocate a public connection string to an instance.

## Syntax

```
{
  "Type": "ALIYUN::GPDB::DBInstance",
  "Properties": {
    "DBInstanceId": String,
    "ConnectionStringPrefix": String,
    "Port": integer
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

DBInstanceId

String

Yes

No

The ID of the instance.

You can create an instance and obtain its ID by making an API call to the [ALIYUN::GPDB::DBInstance](/help/en/ros/developer-reference/aliyun-gpdb-dbinstance#concept-2538310 "ALIYUN::GPDB::DBInstance is used to create an AnalyticDB for PostgreSQL instance in reserved storage mode.") or [ALIYUN::GPDB::ElasticDBInstance](/help/en/ros/developer-reference/aliyun-gpdb-elasticdbinstance#concept-2538320 "ALIYUN::GPDB::ElasticDBInstance is used to create an AnalyticDB for PostgreSQL instance in elastic storage mode.") resource type or by using the [AnalyticDB for PostgreSQL console](https://gpdb.console.alibabacloud.com/gpdb/cn-hangzhou/list).

Port

Integer

Yes

No

The port number.

None

ConnectionStringPrefix

String

Yes

No

The prefix of the connection string.

None

## Response parameters

Fn::GetAtt

-   DBInstanceId: the ID of the instance.
-   ConnectionString: the connection string of the instance.

## Examples

`JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Resources": {
    "InstancePublicConnection": {
      "Type": "ALIYUN::GPDB::InstancePublicConnection",
      "Properties": {
        "ConnectionStringPrefix": "gp-2zef492q66we7h***-mytest",
        "DBInstanceId": "gp-2zef492q66we7h***",
        "Port": 5432
      }
    }
  },
  "Outputs": {
    "DBInstanceId": {
      "Value": { "Fn::GetAtt": ["InstancePublicConnection", "DBInstanceId"] }
    },
    "ConnectionString": {
      "Value": { "Ref": "InstancePublicConnection" }
    }
  }
}
```

`YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Resources:
  InstancePublicConnection:
    Type: 'ALIYUN::GPDB::InstancePublicConnection'
    Properties:
      ConnectionStringPrefix: gp-2zef492q66we7h***-mytest
      DBInstanceId: gp-2zef492q66we7h***
      Port: 5432
Outputs:
  DBInstanceId:
    Value:
      'Fn::GetAtt':
        - InstancePublicConnection
        - DBInstanceId
  ConnectionString:
    Value:
      Ref: InstancePublicConnection
```
