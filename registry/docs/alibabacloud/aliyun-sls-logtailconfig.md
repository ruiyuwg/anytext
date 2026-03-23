ALIYUN::SLS::LogtailConfig is used to configure Logtail properties for data collection.

## Syntax

```
{
  "Type": "ALIYUN::SLS::LogtailConfig",
  "Properties": {
    "ProjectName": String,
    "LogtailConfigName": String,
    "LogstoreName": String,
    "RawConfigData": Map,
    "CloneFrom": Map
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

The name of the project.

None.

LogtailConfigName

String

Yes

No

The name of the Logtail configuration.

The name must be unique in a project.

The name must be 2 to 128 characters in length, and can contain lowercase letters, digits, hyphens (-), and underscores (\_). The name must start and end with a lowercase letter or digit.

LogstoreName

String

Yes

No

The name of the Logstore.

None.

RawConfigData

Map

No

Yes

The raw configuration data.

The format is the same as the format of the response from the [GetConfig](/help/en/sls/getconfig) operation of Simple Log Service (SLS).

If you specify both CloneFrom and RawConfigData, the values of LogtailConfig and RawConfigData are merged. In this case, the values of configName, outputType, and outputDetail in RawConfigData are ignored.

Example: `{"configName": "test-logtail-config", "createTime": 1574843554, "inputDetail": {"acceptNoEnoughKeys": false, "adjustTimezone": false, "advanced": { "force_multiconfig": false }, "autoExtend": true, "delayAlarmBytes": 0, "delaySkipBytes": 0, "discardNonUtf8": false, "discardUnmatch": false, "dockerExcludeEnv": {}, "dockerExcludeLabel": {}, "dockerFile": false, "dockerIncludeEnv": {}, "dockerIncludeLabel": {}, "enableRawLog": false, "enableTag": false, "fileEncoding": "utf8", "filePattern": "test.log*", "filterKey": [], "filterRegex": [], "key": [ "time", "logger", "level", "request_id", "user_id", "region_id", "content" ], "localStorage": true, "logPath": "/var/log/test", "logTimezone": "", "logType": "delimiter_log", "maxDepth": 100, "maxSendRate": -1, "mergeType": "topic", "preserve": true, "preserveDepth": 1, "priority": 0, "quote": "\u0001", "sendRateExpire": 0, "sensitive_keys": [], "separator": ",,,", "shardHashKey": [], "tailExisted": false, "timeFormat": "", "timeKey": "", "topicFormat": "none" }, "inputType": "file", "lastModifyTime": 1574843554, "logSample": "2019-11-27 10:48:23,160,,,MAIN,,,INFO,,,98DCC51D-BE5D-49C7-B3FD-37B2BAEFB296,,,123456789,,,cn-hangzhou,,,this is a simple test.", "outputDetail": { "endpoint": "cn-hangzhou-intranet.log.aliyuncs.com", "logstoreName": "test-logstore", "region": "cn-hangzhou"}, "outputType": "LogService"}`.

CloneFrom

Map

No

Yes

The configurations of cloning the Logtail configuration of another project.

You must specify CloneFrom or RawConfigData.

For more information, see [CloneFrom properties](#section-g99-de7-6lc).

## CloneFrom syntax

```
"CloneFrom": {
  "ProjectName": String,
  "LogtailConfigName": String
}
```

## CloneFrom properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

ProjectName

String

Yes

Yes

The name of the project.

None.

LogtailConfigName

String

Yes

Yes

The name of the Logtail configuration.

None.

## Return values

Fn::GetAtt

-   Endpoint: the endpoint of SLS.
    
-   AppliedMachineGroups: the machine groups to which the Logtail configuration is applied.
    
-   LogtailConfigName: the name of the Logtail configuration.
    

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters: {}
Resources:
  SlsProject:
    Type: ALIYUN::SLS::Project
    Properties:
      Name:
        Fn::Sub: project-test-${ALIYUN::StackId}
  SlsLogtailConfig:
    Type: ALIYUN::SLS::LogtailConfig
    Properties:
      ProjectName:
        Ref: SlsProject
      LogtailConfigName: app01
      LogstoreName:
        Fn::GetAtt:
          - SlsLogStore
          - LogstoreName
      RawConfigData:
        configName: logtail-test
        outputDetail:
          compressType: ''
          logstoreName:
            Fn::GetAtt:
              - SlsLogStore
              - LogstoreName
        outputType: LogService
        logSample: ''
        inputDetail:
          sensitive_keys: []
          shardHashKey: []
          enableRawLog: false
          logType: common_reg_log
          filterRegex: []
          mergeType: topic
          dockerExcludeEnv: {}
          regex: (.*)
          sendRateExpire: 0
          discardNonUtf8: false
          maxSendRate: -1
          priority: 0
          preserveDepth: 1
          localStorage: true
          logTimezone: ''
          dockerIncludeEnv: {}
          preserve: true
          delayAlarmBytes: 0
          discardUnmatch: false
          logPath: /apsara/nuwa
          dockerExcludeLabel: {}
          topicFormat: none
          maxDepth: 10
          key:
            - content
          filePattern: '*.Log'
          timeFormat: ''
          dockerFile: true
          advanced:
            force_multiconfig: false
            k8s:
              ExternalEnvTag: {}
            collect_containers_flag: false
            tail_size_kb: 1024
          dockerIncludeLabel: {}
          delaySkipBytes: 0
          filterKey: []
          tailExisted: false
          adjustTimezone: false
          logBeginRegex: .*
          fileEncoding: utf8
          enableTag: false
        inputType: file
  SlsLogStore:
    Type: ALIYUN::SLS::Logstore
    Properties:
      ProjectName:
        Ref: SlsProject
      AutoSplit: true
      MaxSplitShard: 64
      LogstoreName: mytest
      AppendMeta: true
      ShardCount: 2
      EnableTracking: false
      PreserveStorage: true
Outputs: {}
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
  },
  "Resources": {
    "SlsProject": {
      "Type": "ALIYUN::SLS::Project",
      "Properties": {
        "Name": {
          "Fn::Sub": "project-test-${ALIYUN::StackId}"
        }
      }
    },
    "SlsLogStore": {
      "Type": "ALIYUN::SLS::Logstore",
      "Properties": {
        "LogstoreName": "mytest",
        "PreserveStorage": true,
        "ProjectName": {
          "Ref": "SlsProject"
        },
        "AppendMeta": true,
        "MaxSplitShard": 64,
        "AutoSplit": true,
        "EnableTracking": false,
        "ShardCount": 2
      }
    },
    "SlsLogtailConfig": {
      "Type": "ALIYUN::SLS::LogtailConfig",
      "Properties": {
        "ProjectName": {
          "Ref": "SlsProject"
        },
        "LogtailConfigName": "app01",
        "LogstoreName": {
          "Fn::GetAtt": [
            "SlsLogStore",
            "LogstoreName"
          ]
        },
        "RawConfigData": {
          "configName": "logtail-test",
          "inputDetail": {
            "adjustTimezone": false,
            "advanced": {
              "collect_containers_flag": false,
              "force_multiconfig": false,
              "k8s": {
                "ExternalEnvTag": {}
              },
              "tail_size_kb": 1024
            },
            "delayAlarmBytes": 0,
            "delaySkipBytes": 0,
            "discardNonUtf8": false,
            "discardUnmatch": false,
            "dockerExcludeEnv": {},
            "dockerExcludeLabel": {},
            "dockerFile": true,
            "dockerIncludeEnv": {},
            "dockerIncludeLabel": {},
            "enableRawLog": false,
            "enableTag": false,
            "fileEncoding": "utf8",
            "filePattern": "*.Log",
            "filterKey": [],
            "filterRegex": [],
            "key": [
              "content"
            ],
            "localStorage": true,
            "logBeginRegex": ".*",
            "logPath": "/apsara/nuwa",
            "logTimezone": "",
            "logType": "common_reg_log",
            "maxDepth": 10,
            "maxSendRate": -1,
            "mergeType": "topic",
            "preserve": true,
            "preserveDepth": 1,
            "priority": 0,
            "regex": "(.*)",
            "sendRateExpire": 0,
            "sensitive_keys": [],
            "shardHashKey": [],
            "tailExisted": false,
            "timeFormat": "",
            "topicFormat": "none"
          },
          "inputType": "file",
          "logSample": "",
          "outputDetail": {
            "compressType": "",
            "logstoreName": {
              "Fn::GetAtt": [
                "SlsLogStore",
                "LogstoreName"
              ]
            }
          },
          "outputType": "LogService"
        }
      }
    }
  },
  "Outputs": {
  }
}
```
