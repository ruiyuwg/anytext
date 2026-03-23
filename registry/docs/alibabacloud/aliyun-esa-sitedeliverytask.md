The ALIYUN::ESA::SiteDeliveryTask type is used to create a real-time log delivery task.

## Syntax

```
{
  "Type": "ALIYUN::ESA::SiteDeliveryTask",
  "Properties": {
    "BusinessType": String,
    "DataCenter": String,
    "DeliveryType": String,
    "FieldName": String,
    "SiteId": Integer,
    "TaskName": String,
    "DiscardRate": Integer,
    "HttpDelivery": Map,
    "KafkaDelivery": Map,
    "OssDelivery": Map,
    "SlsDelivery": Map,
    "S3Delivery": Map
  }
}
```

## Properties

**Property**

**Type**

**Required**

**Update allowed**

**Description**

**Constraints**

BusinessType

String

Yes

Yes

The business type.

Valid values:

-   **dcdn\_log\_access\_l1** (default): access log.
    
-   **dcdn\_log\_er**: Edge Routine log.
    
-   **dcdn\_log\_waf**: Mitigation Logs.
    
-   **dcdn\_log\_ipa**: Layer 4 acceleration log.
    

DataCenter

String

Yes

No

The data center.

Valid values:

-   **cn**: the Chinese mainland.
    
-   **oversea**: outside the Chinese mainland.
    

DeliveryType

String

Yes

No

The delivery type.

Valid values:

-   **sls**: Simple Log Service.
    
-   **http**: HTTP service.
    
-   **aws3**: Amazon S3 service.
    
-   **oss**: Object Storage Service.
    
-   **kafka**: Kafka service.
    
-   **aws3cmpt**: Amazon S3-compatible service.
    

FieldName

String

Yes

Yes

The selected log fields.

Separate multiple fields with commas (,).

SiteId

Integer

Yes

No

The site ID.

None

TaskName

String

Yes

No

The task name.

None

DiscardRate

Integer

No

Yes

The discard rate. If you do not specify this parameter, the default value 0 is used.

None

HttpDelivery

Map

No

No

The configuration parameters for HTTP delivery.

For more information, see [HttpDelivery properties](#536216b1e1flr).

KafkaDelivery

Map

No

No

The configuration parameters for Kafka delivery.

For more information, see [KafkaDelivery properties](#540d4b55c19we).

OssDelivery

Map

No

No

The configuration for OSS delivery.

For more information, see [OssDelivery properties](#3b5fa98ae980s).

SlsDelivery

Map

No

No

The configuration for SLS delivery.

For more information, see [SlsDelivery properties](#9dff7f2bdakx0).

S3Delivery

Map

No

No

The configuration parameters for S3 or S3-compatible delivery.

For more information, see [S3Delivery properties](#de92dcfb0fxot).

## SlsDelivery syntax

```
"SlsDelivery": {
  "SLSProject": String,
  "SLSRegion": String,
  "SLSLogStore": String
}
```

## SlsDelivery properties

**Property**

**Type**

**Required**

**Update allowed**

**Description**

**Constraints**

SLSProject

String

No

No

The name of the SLS real-time log.

None

SLSRegion

String

No

No

The region of the Simple Log Service project.

None

SLSLogStore

String

No

No

The name of the Logstore.

None

## HttpDelivery syntax

```
"HttpDelivery": {
  "Compress": String,
  "LogBodySuffix": String,
  "HeaderParam": Map,
  "StandardAuthParam": Map,
  "StandardAuthOn": Boolean,
  "LogBodyPrefix": String,
  "QueryParam": Map,
  "DestUrl": String,
  "MaxBatchSize": Integer,
  "TransformTimeout": Integer,
  "MaxRetry": Integer,
  "MaxBatchMB": Integer
}
```

## HttpDelivery properties

**Property**

**Type**

**Required**

**Update allowed**

**Description**

**Constraints**

DestUrl

String

Yes

No

The delivery address of the HTTP server.

None

Compress

String

No

No

The compression method.

Valid values:

-   gzip
    
-   zlib
    
-   no
    
-   snappy
    

HeaderParam

Map

No

No

The custom header.

For more information, see [HeaderParam properties](#fc8ee9f6869qr).

LogBodySuffix

String

No

No

The suffix of the log delivery package.

None

LogBodyPrefix

String

No

No

The prefix of the log delivery package.

None

MaxBatchSize

Integer

No

No

The maximum number of entries per delivery.

None

MaxRetry

Integer

No

No

The maximum number of retries.

None

MaxBatchMB

Integer

No

No

The maximum size of a single delivery.

Unit: MB.

QueryParam

Map

No

No

The custom request parameters.

For more information, see [QueryParam properties](#4b061cb24duft).

StandardAuthParam

Map

No

No

The standard authentication parameters.

For more information, see [StandardAuthParam properties](#c49b9339c79ol).

StandardAuthOn

Boolean

No

No

Specifies whether to use standard authentication.

None

TransformTimeout

Integer

No

No

The timeout period.

Unit: seconds.

## HeaderParam syntax

```
"HeaderParam": {
  "StaticValue": String
}
```

## HeaderParam properties

**Property**

**Type**

**Required**

**Update allowed**

**Description**

**Constraints**

StaticValue

String

No

No

The value of the custom request parameter.

None

## StandardAuthParam syntax

```
"StandardAuthParam": {
  "PrivateKey": String,
  "UrlPath": String,
  "ExpiredTime": Integer
}
```

## StandardAuthParam properties

**Property**

**Type**

**Required**

**Update allowed**

**Description**

**Constraints**

ExpiredTime

Integer

No

No

The encryption timeout period.

**Note**

The value must be greater than 0. A value of 300 or greater is recommended.

PrivateKey

String

No

No

The private key.

None

UrlPath

String

No

No

The URI path for standard authentication.

None

## QueryParam syntax

```
"QueryParam": {
  "StaticValue": String
}
```

## QueryParam properties

**Property**

**Type**

**Required**

**Update allowed**

**Description**

**Constraints**

StaticValue

String

No

No

The value of the custom request parameter.

None

## S3Delivery syntax

```
"S3Delivery": {
  "SecretKey": String,
  "Endpoint": String,
  "VertifyType": String,
  "Region": String,
  "ServerSideEncryption": Boolean,
  "BucketPath": String,
  "PrefixPath": String,
  "AccessKey": String,
  "S3Cmpt": Boolean
}
```

## S3Delivery properties

**Property**

**Type**

**Required**

**Update allowed**

**Description**

**Constraints**

AccessKey

String

No

No

The AccessKey ID of the Alibaba Cloud account or RAM user.

None

BucketPath

String

No

No

The bucket path.

None

Endpoint

String

No

No

The server endpoint.

None

PrefixPath

String

No

No

The prefix of the storage path.

None

Region

String

No

No

The region where the service is located.

None

SecretKey

String

No

No

The secret AccessKey used by the S3 account.

None

ServerSideEncryption

Boolean

No

No

Server-side encryption.

None

S3Cmpt

Boolean

No

No

Specifies whether the service is S3-compatible.

None

VertifyType

String

No

No

The authentication type.

None

## KafkaDelivery syntax

```
"KafkaDelivery": {
  "Compress": String,
  "UserName": String,
  "MachanismType": String,
  "Brokers": List,
  "Balancer": String,
  "Topic": String,
  "UserAuth": Boolean,
  "Password": String
}
```

## KafkaDelivery properties

**Property**

**Type**

**Required**

**Update allowed**

**Description**

**Constraints**

Brokers

List

No

No

An array of servers.

None

Balancer

String

No

No

The load balancing method.

None

Compress

String

No

No

The compression method.

None

MachanismType

String

No

No

The encryption method.

None

Password

String

No

No

The encryption password.

None

Topic

String

No

No

The Kafka message topic.

None

UserName

String

No

No

The username.

None

UserAuth

Boolean

No

No

Specifies whether to enable user authentication.

None

## OssDelivery syntax

```
"OssDelivery": {
  "BucketName": String,
  "Region": String,
  "PrefixPath": String,
  "Aliuid": String
}
```

## OssDelivery properties

**Property**

**Type**

**Required**

**Update allowed**

**Description**

**Constraints**

Aliuid

String

No

No

The ID of the Alibaba Cloud account.

None

BucketName

String

No

No

The bucket name.

None

PrefixPath

String

No

No

The prefix of the storage path.

None

Region

String

No

No

The region where the service is located.

None

## Return values

Fn::GetAtt

-   SiteId: The site ID.
    
-   DataCenter: The data center.
    
-   DiscardRate: The discard rate. The default value is 0.
    
-   SiteName: The site name.
    
-   SinkConfig: The delivery configuration.
    
-   TaskName: The task name.
    
-   BusinessType: The real-time log type.
    
-   FilterRules: The filter rules.
    
-   FieldName: The selected log fields.
    
-   DeliveryType: The delivery type.
    

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  SiteId:
    Type: Number
    Description: The site ID.
    Required: true
  DataCenter:
    Type: String
    Description: |-
      The data center. Valid values:
      - `cn`: the Chinese mainland.
      - `oversea`: outside the Chinese mainland.
    AllowedValues:
      - cn
      - oversea
    Required: true
  TaskName:
    Type: String
    Description: The name of the delivery task.
    Required: true
  BusinessType:
    Type: String
    Description: |-
      The real-time log type. Valid values:
      - `dcdn_log_access_l1` (default): access log.
      - `dcdn_log_er`: Edge Routine log.
      - `dcdn_log_waf`: Mitigation Logs.
      - `dcdn_log_ipa`: Layer 4 acceleration log.
    AllowedValues:
      - dcdn_log_access_l1
      - dcdn_log_er
      - dcdn_log_waf
      - dcdn_log_ipa
    Required: true
  FieldName:
    Type: String
    Description: The selected log fields, separated by commas.
    Required: true
  OssDelivery:
    AssociationPropertyMetadata:
      Parameters:
        BucketName:
          Type: String
          Description: The name of the OSS bucket.
          Required: false
        Region:
          Type: String
          Description: The region in which the bucket is located.
          Required: false
        PrefixPath:
          Type: String
          Description: The prefix of the path in which you want to store logs.
          Required: false
        Aliuid:
          Type: String
          Description: The account ID.
          Required: false
    Type: Json
    Description: The configuration for OSS delivery.
    Required: false
  DeliveryType:
    Type: String
    Description: |-
      The delivery type. Valid values:
      - `sls`: Simple Log Service.
      - `http`: HTTP service.
      - `aws3`: Amazon S3 service.
      - `oss`: Object Storage Service.
      - `kafka`: Kafka service.
      - `aws3cmpt`: Amazon S3-compatible service.
    AllowedValues:
      - sls
      - http
      - aws3
      - oss
      - kafka
      - aws3cmpt
    Required: true
Resources:
  ExtensionResource:
    Type: ALIYUN::ESA::SiteDeliveryTask
    Properties:
      SiteId:
        Ref: SiteId
      DataCenter:
        Ref: DataCenter
      TaskName:
        Ref: TaskName
      BusinessType:
        Ref: BusinessType
      FieldName:
        Ref: FieldName
      OssDelivery:
        Ref: OssDelivery
      DeliveryType:
        Ref: DeliveryType
Outputs:
  SiteId:
    Description: The site ID.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - SiteId
  DataCenter:
    Description: The data center.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - DataCenter
  DiscardRate:
    Description: The discard rate. If you do not specify this parameter, the default value is 0.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - DiscardRate
  SiteName:
    Description: The site name.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - SiteName
  SinkConfig:
    Description: The delivery configuration.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - SinkConfig
  TaskName:
    Description: The task name.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - TaskName
  BusinessType:
    Description: The real-time log type.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - BusinessType
  FilterRules:
    Description: The filter rules.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - FilterRules
  FieldName:
    Description: The selected log fields, separated by commas.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - FieldName
  DeliveryType:
    Description: The delivery type.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - DeliveryType
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "SiteId": {
      "Type": "Number",
      "Description": "The site ID.",
      "Required": true
    },
    "DataCenter": {
      "Type": "String",
      "Description": "The data center. Valid values:\n- `cn`: the Chinese mainland.\n- `oversea`: outside the Chinese mainland.",
      "AllowedValues": [
        "cn",
        "oversea"
      ],
      "Required": true
    },
    "TaskName": {
      "Type": "String",
      "Description": "The name of the delivery task.",
      "Required": true
    },
    "BusinessType": {
      "Type": "String",
      "Description": "The real-time log type. Valid values:\n- `dcdn_log_access_l1` (default): access log.\n- `dcdn_log_er`: Edge Routine log.\n- `dcdn_log_waf`: Mitigation Logs.\n- `dcdn_log_ipa`: Layer 4 acceleration log.",
      "AllowedValues": [
        "dcdn_log_access_l1",
        "dcdn_log_er",
        "dcdn_log_waf",
        "dcdn_log_ipa"
      ],
      "Required": true
    },
    "FieldName": {
      "Type": "String",
      "Description": "The selected log fields, separated by commas.",
      "Required": true
    },
    "OssDelivery": {
      "AssociationPropertyMetadata": {
        "Parameters": {
          "BucketName": {
            "Type": "String",
            "Description": "The name of the OSS bucket.",
            "Required": false
          },
          "Region": {
            "Type": "String",
            "Description": "The region in which the bucket is located.",
            "Required": false
          },
          "PrefixPath": {
            "Type": "String",
            "Description": "The prefix of the path in which you want to store logs.",
            "Required": false
          },
          "Aliuid": {
            "Type": "String",
            "Description": "The account ID.",
            "Required": false
          }
        }
      },
      "Type": "Json",
      "Description": "The configuration for OSS delivery.",
      "Required": false
    },
    "DeliveryType": {
      "Type": "String",
      "Description": "The delivery type. Valid values:\n- `sls`: Simple Log Service.\n- `http`: HTTP service.\n- `aws3`: Amazon S3 service.\n- `oss`: Object Storage Service.\n- `kafka`: Kafka service.\n- `aws3cmpt`: Amazon S3-compatible service.",
      "AllowedValues": [
        "sls",
        "http",
        "aws3",
        "oss",
        "kafka",
        "aws3cmpt"
      ],
      "Required": true
    }
  },
  "Resources": {
    "ExtensionResource": {
      "Type": "ALIYUN::ESA::SiteDeliveryTask",
      "Properties": {
        "SiteId": {
          "Ref": "SiteId"
        },
        "DataCenter": {
          "Ref": "DataCenter"
        },
        "TaskName": {
          "Ref": "TaskName"
        },
        "BusinessType": {
          "Ref": "BusinessType"
        },
        "FieldName": {
          "Ref": "FieldName"
        },
        "OssDelivery": {
          "Ref": "OssDelivery"
        },
        "DeliveryType": {
          "Ref": "DeliveryType"
        }
      }
    }
  },
  "Outputs": {
    "SiteId": {
      "Description": "The site ID.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "SiteId"
        ]
      }
    },
    "DataCenter": {
      "Description": "The data center.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "DataCenter"
        ]
      }
    },
    "DiscardRate": {
      "Description": "The discard rate. If you do not specify this parameter, the default value is 0.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "DiscardRate"
        ]
      }
    },
    "SiteName": {
      "Description": "The site name.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "SiteName"
        ]
      }
    },
    "SinkConfig": {
      "Description": "The delivery configuration.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "SinkConfig"
        ]
      }
    },
    "TaskName": {
      "Description": "The task name.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "TaskName"
        ]
      }
    },
    "BusinessType": {
      "Description": "The real-time log type.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "BusinessType"
        ]
      }
    },
    "FilterRules": {
      "Description": "The filter rules.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "FilterRules"
        ]
      }
    },
    "FieldName": {
      "Description": "The selected log fields, separated by commas.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "FieldName"
        ]
      }
    },
    "DeliveryType": {
      "Description": "The delivery type.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "DeliveryType"
        ]
      }
    }
  }
}
                        
```
