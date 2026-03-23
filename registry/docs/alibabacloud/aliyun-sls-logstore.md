ALIYUN::SLS::Logstore is used to create a Logstore in a Simple Log Service (SLS) project.

## Syntax

```
{
  "Type": "ALIYUN::SLS::Logstore",
  "Properties": {
    "ProjectName": String,
    "ShardCount": Integer,
    "AutoSplit": Boolean,
    "MaxSplitShard": Integer,
    "LogstoreName": String,
    "AppendMeta": Boolean,
    "TTL": Integer,
    "EnableTracking": Boolean,
    "PreserveStorage": Boolean,
    "EncryptConf": Map,
    "Mode": String
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

ProjectName

String

Yes

No

The name of the SLS project in which you want to create the Logstore.

The name must be 3 to 63 characters in length.

It can contain lowercase letters, digits, hyphens (-), and underscores (\_). It must start and end with a lowercase letter or a digit.

ShardCount

Integer

No

Yes

The number of shards.

Valid values: 1 to 100.

Default value: 2.

MaxSplitShard

Integer

No

Yes

The maximum number of shards that can be obtained during automatic splitting.

Valid values: 1 to 64.

You must specify MaxSplitShard when AutoSplit is set to true.

LogstoreName

String

Yes

No

The Logstore name.

The Logstore name must be unique in an SLS project.

-   The name must be 3 to 36 characters in length.
    
-   It can contain lowercase letters, digits, hyphens (-), and underscores (\_).
    
-   It must start and end with a lowercase letter or a digit.
    

AutoSplit

Boolean

No

Yes

Specifies whether to automatically split shards.

Valid values:

-   true
    
-   false (default)
    

TTL

Integer

No

Yes

The data retention period.

Valid values: 1 to 3600.

Default value: 30.

Unit: day.

EnableTracking

Boolean

No

Yes

Specifies whether to enable web tracking.

You can use web tracking to collect information about web browsers, iOS applications, and Android applications.

Valid values:

-   true
    
-   false (default)
    

PreserveStorage

Boolean

No

Yes

Specifies whether to permanently retain logs.

Valid values:

-   true: permanently retains logs. The TTL property does not take effect if PreserveStorage is set to true.
    
-   false (default): does not permanently retain logs.
    

Mode

String

No

Yes

The Logstore type.

Valid values:

-   standard: Standard Logstore. This type of Logstore supports the log analysis feature of SLS and is suitable for scenarios such as real-time monitoring and interactive analysis. You can use this type of Logstore to build a comprehensive observability system.
    
-   query: Query Logstore. This type of Logstore supports high-performance queries. The index traffic fee of a Query Logstore is approximately half the index traffic fee of a Standard Logstore. Query Logstores do not support SQL analysis. Query Logstores are suitable for scenarios in which the amount of data is large, the log retention period is long, or log analysis is not required. If logs are stored for weeks or months, the log retention period is considered long.
    

AppendMeta

Boolean

No

Yes

Specifies whether to automatically add the public IP address of the client and the log arrival time after the log is received.

Valid values:

-   true
    
-   false (default)
    

EncryptConf

Map

No

No

The data encryption configurations.

For more information, see [EncryptConf syntax](#section-hql-24w-waj) and [EncryptConf properties](#section-sao-4g8-748).

## EncryptConf syntax

```
"EncryptConf": {
    "Enable": Boolean,
    "EncryptType": String,
    "UserCmkInfo": Map
}
```

## EncryptConf properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

Enable

Boolean

Yes

No

Specifies whether to enable data encryption.

Valid values:

-   true
    
-   false (default)
    

EncryptType

String

Yes

No

The encryption algorithm.

Valid values:

-   default: Advanced Encryption Standard (AES) algorithm
    
-   m4: Chinese cryptographic algorithm
    

**Note**

For more information, see [Data encryption](/help/en/sls/developer-reference/encrypt-data#concept-1964942).

UserCmkInfo

Map

No

No

The bring-your-own-key (BYOK) method that is used to encrypt or decrypt data. If you leave UserCmkInfo empty, the service key of SLS is used to encrypt or decrypt data.

For more information, see [UserCmkInfo syntax](#section-eu6-kj0-p3c) and [UserCmkInfo properties](#section-cka-mac-ug7).

## UserCmkInfo syntax

```
"UserCmkInfo": {
    "CmkKeyId": String,
    "Arn": String,
    "RegionId": String
  }
```

## UserCmkInfo properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

CmkKeyId

String

Yes

No

The ID of the customer master key (CMK) to which the BYOK key belongs.

None.

RegionId

String

Yes

No

The ID of the region to which the CMK belongs.

None.

Arn

String

Yes

No

The Alibaba Cloud Resource Name (ARN) of the Resource Access Management (RAM) role.

For more information about how to query the ARN of a RAM role, see [Ship log data from Simple Log Service to OSS](/help/en/sls/ship-log-data-from-log-service-to-oss#task-1958310).

## Return values

Fn::GetAtt

-   LogstoreName: the Logstore name.
    
-   ProjectName: the name of the SLS project.
    

## Examples

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Description: Test SLS Logstore
Parameters: {}
Resources:
  SlsLogStore:
    Type: ALIYUN::SLS::Logstore
    Properties:
      LogstoreName: mytest
      PreserveStorage: true
      ProjectName: TestProject
      AppendMeta: true
      MaxSplitShard: 64
      AutoSplit: true
      EnableTracking: false
      ShardCount: 2
Outputs: {}
```

## `JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Description": "Test SLS Logstore",
  "Parameters": {
  },
  "Resources": {
    "SlsLogStore": {
      "Type": "ALIYUN::SLS::Logstore",
      "Properties": {
        "LogstoreName": "mytest",
        "PreserveStorage": true,
        "ProjectName": "TestProject",
        "AppendMeta": true,
        "MaxSplitShard": 64,
        "AutoSplit": true,
        "EnableTracking": false,
        "ShardCount": 2
      }
    }
  },
  "Outputs": {
  }
}
```

For more examples, visit [sls.yml](https://github.com/aliyun/ros-templates/blob/master/resources/sls/sls.yml). In the examples, the following resource types are used: ALIYUN::SLS::Project, ALIYUN::SLS::Logstore, ALIYUN::SLS::Index, ALIYUN::SLS::LogtailConfig, ALIYUN::SLS::MachineGroup, ALIYUN::SLS::ApplyConfigToMachineGroup, ALIYUN::ApiGateway::LogConfig, ALIYUN::SLS::Savedsearch, and ALIYUN::SLS::Alert.
