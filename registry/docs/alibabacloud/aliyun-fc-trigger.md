ALIYUN::FC::Trigger is used to trigger the invocation of a function.

In an event-driven computing model, event sources produce events, functions process the events, and triggers are used to manage different event sources in a centralized manner. On the event source side, when an event that matches the rules defined by a trigger occurs, the event source invokes the relevant function.

## Syntax

```
{
  "Type": "ALIYUN::FC::Trigger",
  "Properties": {
    "TriggerConfig": Map,
    "InvocationRole": String,
    "FunctionName": String,
    "ServiceName": String,
    "TriggerName": String,
    "TriggerType": String,
    "Qualifier": String,
    "SourceArn": String
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

ServiceName

String

Yes

No

The name of the service to which the function belongs.

The name must be 1 to 128 characters in length.

FunctionName

String

Yes

No

The name of the function for which you want to create a trigger.

None.

TriggerName

String

Yes

No

The name of the trigger.

The name must be 1 to 128 characters in length, and can contain digits, letters, hyphens (-), and underscores (\_). The name must start with a letter or an underscore (\_).

TriggerType

String

Yes

No

The type of trigger.

Valid values:

-   oss: Object Storage Service (OSS) trigger
    
-   log: Log Service trigger
    
-   tablestore: Tablestore trigger
    
-   timer: time trigger
    
-   mns\_topic: Message Service (MNS) topic trigger
    
-   cdn\_events: Alibaba Cloud CDN (CDN) event trigger
    
-   http: HTTP trigger
    
    **Note**
    
    You can create an HTTP trigger only when you create a function. When an HTTP trigger is configured for a function, you cannot create other types of triggers for the function.
    

TriggerConfig

Map

Yes

Yes

The configurations of the trigger.

The configurations vary based on the trigger type.

InvocationRole

String

No

Yes

The trigger role that is used to grant an event source the permissions to invoke the function on behalf of yourself. Example: `acs:ram::164696547407****:role/fc-test`.

This property is optional when TriggerType is set to timer or http. This property is required when TriggerType is set to a value other than timer and http.

The following section lists the trusted entities and policies for role authorization for different types of triggers:

-   oss
    
    -   Trusted entity: oss.aliyuncs.com
        
    -   Action in the policy: fc:InvokeFunction
        
-   log
    
    -   Trusted entity: log.aliyuncs.com
        
    -   Action in the policy: log:PostLogStoreLogs
        
-   tablestore
    
    -   Trusted entity: 1604337383174\*\*\*\*
        
    -   Action in the policy: fc:InvokeFunction, ots:BatchGet\*, ots:Describe\*, ots:Get\*, and ots:List\*
        
-   mns\_topic
    
    -   Trusted entity: mns.aliyuncs.com
        
    -   Action in the policy: dm:BatchSendMail, dm:SingleSendMail, and dm:Query
        
-   cdn\_events
    
    -   Trusted entity: cdn.aliyuncs.com
        
    -   Action in the policy: fc:InvokeFunction
        

SourceArn

String

No

No

The Alibaba Cloud Resource Name (ARN) of the event source.

This property is optional when TriggerType is set to timer or http. This property is required when TriggerType is set to a value other than timer and http.

The following section lists the formats and examples of event source ARNs for different types of triggers:

-   oss
    
    -   Format: `acs:oss:<RegionId>:<TenantId>:<OssBucketName>`
        
    -   Example: `acs:oss:cn-hangzhou:164696547407****:test-trigger-bucket`
        
-   log
    
    -   Format: `acs:log:<RegionId>:<TenantId>:project/<Value of Project in LogConfig>`
        
    -   Example: `acs:log:cn-hangzhou:164696547407****:project/logtrigger`
        
-   tablestore
    
    -   Format: `acs:ots:<RegionId>:<TenantId>:instance/<OtsInstance>/table/<OtsTable>`
        
    -   Example: `acs:ots:cn-hangzhou:164696547407****:instance/otstrigger/table/tb`
        
-   mns\_topic
    
    -   Format: `acs:mns:<RegionId>:<TenantId>:/topics/<MnsTopic>`
        
    -   Example: `acs:mns:cn-hangzhou:164696547407****:/topics/triggertopic`
        
-   cdn\_events
    
    -   Format: `acs:cdn:*:<TenantId>`
        
    -   Example: `acs:cdn:*:164696547407****`
        

**Note**

Replace `TenantId` with the ID of your Alibaba Cloud account.

Qualifier

String

No

Yes

The version of the trigger.

Default value: LATEST.

## oss-TriggerConfig syntax

```
"TriggerConfig": {
  "BucketName": String,
  "Events": List,
  "Filter": Map
}      
```

## oss-TriggerConfig properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

BucketName

String

Yes

No

The name of the bucket.

You must select an OSS bucket as the event source. Buckets within the same region are displayed in the Bucket drop-down list.

Events

String

Yes

Yes

The trigger events, which represent the operations performed on Alibaba Cloud resources.

Example: `oss:ObjectCreated:*`.

Filter

Map

No

Yes

The trigger rule, which is used to avoid cyclic triggering.

The values of Prefix and Suffix must be custom strings.

Example:

```
"Filter": {
  "Key": {
    "Prefix": "prefix",
    "Suffix": "suffix"
  }
}
```

## log-TriggerConfig syntax

```
"TriggerConfig": {
  "SourceConfig": Map,
  "LogConfig": Map,
  "JobConfig": Map,
  "FunctionParameter": Map,
  "Enable": Boolean
}
```

## log-TriggerConfig properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

SourceConfig

Map

Yes

No

The configurations of the Logstore.

Example: `{"LogStore": "<SLS_LogStore>"}`.

LogConfig

Map

Yes

Yes

The configurations of the Log Service project and the Logstore for the trigger.

Project: the Log Service project. This property is required but not editable. LogStore: the Logstore for the trigger. This property is optional and editable. The Logstore cannot be the same as the value of LogStore in the SourceConfig property.

Example: `{"Project": "<SLS_Project>", "LogStore": "SLS_LogStore"}`.

JobConfig

Map

Yes

Yes

The triggering configurations, which specify the maximum number of retries and the trigger interval.

MaxRetryTime: the trigger interval. Unit: seconds.

TriggerInterval: the maximum number of retries. Valid values: 0 to 100.

Example: `{"MaxRetryTime": 3, "TriggerInterval": 60}`.

FunctionParameter

Map

Yes

Yes

The function configurations that are used to pass parameters to the function.

If you do not want to pass parameters, set the value to braces ({ }).

Enable

Boolean

Yes

Yes

Specifies whether to enable the trigger.

Valid values:

-   true
    
-   false
    

## timer-TriggerConfig syntax

```
"TriggerConfig": {
  "Payload": String,
  "CronExpression": String,
  "Enabled": Boolean
}
```

## timer-TriggerConfig properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

Payload

String

No

Yes

The trigger message.

None.

CronExpression

String

Yes

Yes

The CRON expression that is used to specify the trigger time.

The CRON expression uses Coordinated Universal Time (UTC).

Enabled

Boolean

Yes

Yes

Specifies whether to enable the trigger.

Valid values:

-   true
    
-   false
    

## tablestore-TriggerConfig syntax

```
"TriggerConfig",: {
  "InstanceName": String,
  "TableName": String
}
```

## tablestore-TriggerConfig properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

InstanceName

String

Yes

No

The name of the Tablestore instance.

None.

TableName

String

Yes

No

The name of the data table.

None.

## mns\_topic-TriggerConfig syntax

```
"TriggerConfig": {
  "NotifyStrategy": String,
  "NotifyContentFormat": String,
  "FilterTag": String
}
```

## mns\_topic-TriggerConfig properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

NotifyStrategy

String

Yes

No

The retry policy.

Valid values:

-   BACKOFF\_RETRY
    
-   EXPONENTIAL\_DECAY\_RETRY
    

For more information, see [NotifyStrategy](/help/en/mns/notifystrategy#concept-2028914).

NotifyContentFormat

String

Yes

No

The format of the event.

Valid values:

-   STREAM
    
-   JSON
    

FilterTag

String

No

No

The filter tag.

None.

## cdn-TriggerConfig syntax

```
"TriggerConfig": {
  "EventName": String,
  "EventVersion": String,
  "Notes": String,
  "Filter": List
}
```

## cdn-TriggerConfig properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

EventName

String

Yes

No

The trigger event.

Valid values:

-   CachedObjectsBlocked
    
-   CachedObjectsPushed
    
-   CachedObjectsRefreshed
    
-   LogFileCreated
    
-   CdnDomainStarted
    
-   CdnDomainStopped
    
-   CdnDomainAdded
    
-   CdnDomainDeleted
    

EventVersion

String

Yes

No

The version of the trigger event.

None.

Notes

String

Yes

Yes

The remarks.

None.

Filter

List

Yes

Yes

The filters.

The key of each filter is `Domain`. You must specify at least one filter. Example: `[{"Domain": "example.com"}, {"Domain": "example.org"}, ...]`.

## http-TriggerConfig syntax

**Note**

You can create an HTTP trigger only when you create a function. When an HTTP trigger is configured for a function, you cannot create other types of triggers for the function.

```
"TriggerConfig": {
  "AuthType": String,
  "Methods": List
}
```

## http-TriggerConfig properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

AuthType

String

Yes

No

The authentication method.

Valid values:

-   anonymous
    
-   function
    

Methods

List

Yes

No

The request methods.

Valid values:

-   GET
    
-   POST
    
-   PUT
    
-   DELETE
    
-   HEAD
    
-   PATCH
    

Examples: `["GET"]` and `["POST", "PUT"]`.

## Return values

Fn::GetAtt

-   TriggerId: the unique ID generated by the system for each trigger.
    
-   ServiceName: the name of the service to which the function belongs.
    
-   FunctionName: the name of the function.
    
-   TriggerName: the name of the trigger.
    
-   UrlInternet: the public domain address.
    
-   UrlIntranet: the private domain address.
    

## Examples

-   `YAML` format
    
    ```
    ROSTemplateFormatVersion: '2015-09-01'
    Parameters:
      ServiceName:
        Type: String
      FunctionName:
        Type: String
      CdnDomain:
        Type: Json
      SourceConfigLogStore:
        Type: String
      LogConfig:
        Type: Json
        Description: 'for example: {"Project": "testviper", "LogStore": "vipertest"}'
      MnsTopic:
        Type: String
      OssBucketName:
        Type: String
      OtsInstance:
        Type: String
      OtsTable:
        Type: String
      OtsInvocationRoleArn:
        Type: String
    Resources:
      Service:
        Type: 'ALIYUN::FC::Service'
        Properties:
          ServiceName:
            Ref: ServiceName
      Function:
        DependsOn: Service
        Type: 'ALIYUN::FC::Function'
        Properties:
          ServiceName:
            Ref: ServiceName
          Code:
            SourceCode: "def handler(event, context):\n\treturn 'Hello World!'"
          Handler: index.handler
          Runtime: python3
          FunctionName:
            Ref: FunctionName
      Role:
        Type: 'ALIYUN::RAM::Role'
        Properties:
          AssumeRolePolicyDocument:
            Version: 1
            Statement:
              - Action: 'sts:AssumeRole'
                Effect: Allow
                Principal:
                  Service:
                    - cdn.aliyuncs.com
                    - fc.aliyuncs.com
                    - mns.aliyuncs.com
                    - log.aliyuncs.com
                    - oss.aliyuncs.com
          Policies:
            - PolicyName: FcTrigger
              PolicyDocument:
                Version: '1'
                Statement:
                  - Effect: Allow
                    Action:
                      - 'fc:InvokeFunction'
                      - 'log:PostLogStoreLogs'
                      - 'dm:*'
                      - 'dm:BatchSendMail'
                      - 'dm:SingleSendMail'
                      - 'dm:Query*'
                    Resource:
                      - '*'
          RoleName: Trigger
      CdnTrigger:
        DependsOn: Function
        Type: 'ALIYUN::FC::Trigger'
        Properties:
          ServiceName:
            Ref: ServiceName
          FunctionName:
            Ref: FunctionName
          TriggerName: cdn
          TriggerType: cdn_events
          SourceArn:
            'Fn::Sub': 'acs:cdn:*:${ALIYUN::TenantId}'
          InvocationRole:
            'Fn::GetAtt':
              - Role
              - Arn
          TriggerConfig:
            EventName: CachedObjectsBlocked
            EventVersion: 1.0.0
            Notes: test
            Filter:
              Domain:
                Ref: CdnDomain
      LogTrigger:
        DependsOn: Function
        Type: 'ALIYUN::FC::Trigger'
        Properties:
          ServiceName:
            Ref: ServiceName
          FunctionName:
            Ref: FunctionName
          TriggerName: log
          TriggerType: log
          SourceArn:
            'Fn::Join':
              - ''
              - - 'Fn::Sub': 'acs:log:${ALIYUN::Region}:${ALIYUN::TenantId}:project/'
                - 'Fn::Select':
                    - Project
                    - Ref: LogConfig
          InvocationRole:
            'Fn::GetAtt':
              - Role
              - Arn
          TriggerConfig:
            SourceConfig:
              LogStore:
                Ref: SourceConfigLogStore
            LogConfig:
              Ref: LogConfig
            JobConfig:
              MaxRetryTime: 3
              TriggerInterval: 60
            FunctionParameter: {}
            Enable: false
      MnsTrigger:
        DependsOn: Function
        Type: 'ALIYUN::FC::Trigger'
        Properties:
          ServiceName:
            Ref: ServiceName
          FunctionName:
            Ref: FunctionName
          TriggerName: mns
          TriggerType: mns_topic
          SourceArn:
            'Fn::Sub': 'acs:mns:${ALIYUN::Region}:${ALIYUN::TenantId}:/topics/${MnsTopic}'
          InvocationRole:
            'Fn::GetAtt':
              - Role
              - Arn
          TriggerConfig:
            NotifyStrategy: BACKOFF_RETRY
            NotifyContentFormat: STREAM
            FilterTag: test
      OssTrigger:
        DependsOn: Function
        Type: 'ALIYUN::FC::Trigger'
        Properties:
          ServiceName:
            Ref: ServiceName
          FunctionName:
            Ref: FunctionName
          TriggerName: oss
          TriggerType: oss
          SourceArn:
            'Fn::Sub': 'acs:oss:${ALIYUN::Region}:${ALIYUN::TenantId}:${OssBucketName}'
          InvocationRole:
            'Fn::GetAtt':
              - Role
              - Arn
          TriggerConfig:
            BucketName:
              Ref: OssBucketName
            Events:
              - 'oss:ObjectCreated:*'
            Filter:
              Key:
                Prefix: b
                Suffix: a
      OtsTrigger:
        DependsOn: Function
        Type: 'ALIYUN::FC::Trigger'
        Properties:
          ServiceName:
            Ref: ServiceName
          FunctionName:
            Ref: FunctionName
          TriggerName: ots
          TriggerType: tablestore
          SourceArn:
            'Fn::Sub': >-
              acs:ots:${ALIYUN::Region}:${ALIYUN::TenantId}:instance/${OtsInstance}/table/${OtsTable}
          InvocationRole:
            Ref: OtsInvocationRoleArn
          TriggerConfig:
            InstanceName:
              Ref: OtsInstance
            TableName:
              Ref: OtsTable
      TimerTrigger:
        DependsOn: Function
        Type: 'ALIYUN::FC::Trigger'
        Properties:
          ServiceName:
            Ref: ServiceName
          FunctionName:
            Ref: FunctionName
          TriggerName: timer
          TriggerType: timer
          TriggerConfig:
            CronExpression: 0 0/5 * * * *
            Enabled: true
    ```
    
-   `JSON` format
    
    ```
    {
      "ROSTemplateFormatVersion": "2015-09-01",
      "Parameters": {
        "ServiceName": {
          "Type": "String"
        },
        "FunctionName": {
          "Type": "String"
        },
        "CdnDomain": {
          "Type": "Json"
        },
        "SourceConfigLogStore": {
          "Type": "String"
        },
        "LogConfig": {
          "Type": "Json",
          "Description": "for example: {\"Project\": \"testviper\", \"LogStore\": \"vipertest\"}"
        },
        "MnsTopic": {
          "Type": "String"
        },
        "OssBucketName": {
          "Type": "String"
        },
        "OtsInstance": {
          "Type": "String"
        },
        "OtsTable": {
          "Type": "String"
        },
        "OtsInvocationRoleArn": {
          "Type": "String"
        }
      },
      "Resources": {
        "Service": {
          "Type": "ALIYUN::FC::Service",
          "Properties": {
            "ServiceName": {
              "Ref": "ServiceName"
            }
          }
        },
        "Function": {
          "DependsOn": "Service",
          "Type": "ALIYUN::FC::Function",
          "Properties": {
            "ServiceName": {
              "Ref": "ServiceName"
            },
            "Code": {
              "SourceCode": "def handler(event, context):\n\treturn 'Hello World!'"
            },
            "Handler": "index.handler",
            "Runtime": "python3",
            "FunctionName": {
              "Ref": "FunctionName"
            }
          }
        },
        "Role": {
          "Type": "ALIYUN::RAM::Role",
          "Properties": {
            "AssumeRolePolicyDocument": {
              "Version": 1,
              "Statement": [
                {
                  "Action": "sts:AssumeRole",
                  "Effect": "Allow",
                  "Principal": {
                    "Service": [
                      "cdn.aliyuncs.com",
                      "fc.aliyuncs.com",
                      "mns.aliyuncs.com",
                      "log.aliyuncs.com",
                      "oss.aliyuncs.com"
                    ]
                  }
                }
              ]
            },
            "Policies": [
              {
                "PolicyName": "FcTrigger",
                "PolicyDocument": {
                  "Version": "1",
                  "Statement": [
                    {
                      "Effect": "Allow",
                      "Action": [
                        "fc:InvokeFunction",
                        "log:PostLogStoreLogs",
                        "dm:*",
                        "dm:BatchSendMail",
                        "dm:SingleSendMail",
                        "dm:Query*"
                      ],
                      "Resource": [
                        "*"
                      ]
                    }
                  ]
                }
              }
            ],
            "RoleName": "Trigger"
          }
        },
        "CdnTrigger": {
          "DependsOn": "Function",
          "Type": "ALIYUN::FC::Trigger",
          "Properties": {
            "ServiceName": {
              "Ref": "ServiceName"
            },
            "FunctionName": {
              "Ref": "FunctionName"
            },
            "TriggerName": "cdn",
            "TriggerType": "cdn_events",
            "SourceArn": {
              "Fn::Sub": "acs:cdn:*:${ALIYUN::TenantId}"
            },
            "InvocationRole": {
              "Fn::GetAtt": [
                "Role",
                "Arn"
              ]
            },
            "TriggerConfig": {
              "EventName": "CachedObjectsBlocked",
              "EventVersion": "1.0.0",
              "Notes": "test",
              "Filter": {
                "Domain": {
                  "Ref": "CdnDomain"
                }
              }
            }
          }
        },
        "LogTrigger": {
          "DependsOn": "Function",
          "Type": "ALIYUN::FC::Trigger",
          "Properties": {
            "ServiceName": {
              "Ref": "ServiceName"
            },
            "FunctionName": {
              "Ref": "FunctionName"
            },
            "TriggerName": "log",
            "TriggerType": "log",
            "SourceArn": {
              "Fn::Join": [
                "",
                [
                  {
                    "Fn::Sub": "acs:log:${ALIYUN::Region}:${ALIYUN::TenantId}:project/"
                  },
                  {
                    "Fn::Select": [
                      "Project",
                      {
                        "Ref": "LogConfig"
                      }
                    ]
                  }
                ]
              ]
            },
            "InvocationRole": {
              "Fn::GetAtt": [
                "Role",
                "Arn"
              ]
            },
            "TriggerConfig": {
              "SourceConfig": {
                "LogStore": {
                  "Ref": "SourceConfigLogStore"
                }
              },
              "LogConfig": {
                "Ref": "LogConfig"
              },
              "JobConfig": {
                "MaxRetryTime": 3,
                "TriggerInterval": 60
              },
              "FunctionParameter": {},
              "Enable": false
            }
          }
        },
        "MnsTrigger": {
          "DependsOn": "Function",
          "Type": "ALIYUN::FC::Trigger",
          "Properties": {
            "ServiceName": {
              "Ref": "ServiceName"
            },
            "FunctionName": {
              "Ref": "FunctionName"
            },
            "TriggerName": "mns",
            "TriggerType": "mns_topic",
            "SourceArn": {
              "Fn::Sub": "acs:mns:${ALIYUN::Region}:${ALIYUN::TenantId}:/topics/${MnsTopic}"
            },
            "InvocationRole": {
              "Fn::GetAtt": [
                "Role",
                "Arn"
              ]
            },
            "TriggerConfig": {
              "NotifyStrategy": "BACKOFF_RETRY",
              "NotifyContentFormat": "STREAM",
              "FilterTag": "test"
            }
          }
        },
        "OssTrigger": {
          "DependsOn": "Function",
          "Type": "ALIYUN::FC::Trigger",
          "Properties": {
            "ServiceName": {
              "Ref": "ServiceName"
            },
            "FunctionName": {
              "Ref": "FunctionName"
            },
            "TriggerName": "oss",
            "TriggerType": "oss",
            "SourceArn": {
              "Fn::Sub": "acs:oss:${ALIYUN::Region}:${ALIYUN::TenantId}:${OssBucketName}"
            },
            "InvocationRole": {
              "Fn::GetAtt": [
                "Role",
                "Arn"
              ]
            },
            "TriggerConfig": {
              "BucketName": {
                "Ref": "OssBucketName"
              },
              "Events": [
                "oss:ObjectCreated:*"
              ],
              "Filter": {
                "Key": {
                  "Prefix": "b",
                  "Suffix": "a"
                }
              }
            }
          }
        },
        "OtsTrigger": {
          "DependsOn": "Function",
          "Type": "ALIYUN::FC::Trigger",
          "Properties": {
            "ServiceName": {
              "Ref": "ServiceName"
            },
            "FunctionName": {
              "Ref": "FunctionName"
            },
            "TriggerName": "ots",
            "TriggerType": "tablestore",
            "SourceArn": {
              "Fn::Sub": "acs:ots:${ALIYUN::Region}:${ALIYUN::TenantId}:instance/${OtsInstance}/table/${OtsTable}"
            },
            "InvocationRole": {
              "Ref": "OtsInvocationRoleArn"
            },
            "TriggerConfig": {
              "InstanceName": {
                "Ref": "OtsInstance"
              },
              "TableName": {
                "Ref": "OtsTable"
              }
            }
          }
        },
        "TimerTrigger": {
          "DependsOn": "Function",
          "Type": "ALIYUN::FC::Trigger",
          "Properties": {
            "ServiceName": {
              "Ref": "ServiceName"
            },
            "FunctionName": {
              "Ref": "FunctionName"
            },
            "TriggerName": "timer",
            "TriggerType": "timer",
            "TriggerConfig": {
              "CronExpression": "0 0/5 * * * *",
              "Enabled": true
            }
          }
        }
      }
    }
    ```
