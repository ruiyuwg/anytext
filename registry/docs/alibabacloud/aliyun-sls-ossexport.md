ALIYUN::SLS::OssExport is used to create an Object Storage Service (OSS) data shipping job to manage Simple Log Service (SLS) data and ship Logstore data to OSS for storage.

## Syntax

```
{
  "Type": "ALIYUN::SLS::OssExport",
  "Properties": {
    "Configuration": Map,
    "DisplayName": String,
    "ExportName": String,
    "ProjectName": String,
    "Description": String
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

Configuration

Map

Yes

Yes

The configurations of the job.

For more information, see the "Configuration properties" section of this topic.

DisplayName

String

Yes

Yes

The display name of the job.

None.

ExportName

String

Yes

No

The job name.

The name can contain only lowercase letters, digits, en dashes (‒), and underscores (\_). It must be 2 and 64 characters in length, and must start and end with a lowercase letter or digit.

ProjectName

String

Yes

No

The name of the SLS project.

None.

Description

String

No

Yes

The description of the job.

The description can be up to 256 characters in length.

## Configuration syntax

```
"Configuration": {
  "ToTime": Integer,
  "Sink": Map,
  "Logstore": String,
  "FromTime": Integer,
  "RoleArn": String
}
```

## Configuration properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

Logstore

String

Yes

Yes

The name of the Logstore in the project.

None.

RoleArn

String

Yes

Yes

The Alibaba Cloud Resource Name (ARN) of the role. You can use this property to control the write permissions on OSS data and the read permissions on Logstore data.

Example: acs:ram::13234:role/aliyunlogdefaultrole.

Sink

Map

Yes

Yes

The OSS shipping configurations.

None.

FromTime

Integer

No

Yes

The start time of the job.

None.

ToTime

Integer

No

Yes

The end time of the job.

None.

## Sink syntax

```
"Sink": {
  "BufferInterval": Integer,
  "ContentType": String,
  "ContentDetail": Map,
  "PathFormat": String,
  "Prefix": String,
  "PathFormatType": String,
  "RoleArn": String,
  "BufferSize": Integer,
  "TimeZone": String,
  "Suffix": String,
  "Endpoint": String,
  "DelaySeconds": Integer,
  "Bucket": String,
  "CompressionType": String
}
```

## Sink properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

BufferInterval

Integer

Yes

Yes

The maximum shipping interval.

Valid values: 300 to 900. Unit: seconds.

BufferSize

Integer

Yes

Yes

The size of the data that you want to ship.

The value of this property determines the maximum size of raw log data that you can ship to and store in an OSS object. Unit: MB. If the size of the log data that you want to ship reaches the value of this property, a data shipping job is automatically created.

Bucket

String

Yes

Yes

The name of the OSS bucket.

None.

ContentType

String

Yes

Yes

The storage format of data that is shipped to OSS.

Valid values:

-   json
    
-   parquet
    
-   csv
    
-   orc
    

You can store data in the Parquet format for easy analysis. The Parquet storage format provides higher scanning efficiency than the CSV or JSON storage format, but has higher fees. You can select a storage format based on your business requirements.

RoleArn

String

Yes

Yes

The ARN of the role. You can use this property to control the write permissions on OSS data and the read permissions on Logstore data.

Example: acs:ram::13234:role/aliyunlogdefaultrole.

ContentDetail

Map

No

Yes

The content details.

If you set ContentType to json, the default value of ContentDetail is {"EnableTag": false}.

CompressionType

String

No

Yes

The compression method of OSS data.

Valid values:

-   none
    
-   snappy
    
-   gzip
    
-   zstd
    

A value of none specifies that the raw data is not compressed. A value of snappy, gzip, or zstd specifies that a specified algorithm is used to compress data. This reduces the storage usage of the OSS bucket. Compression methods vary based on different storage formats.

DelaySeconds

Integer

No

Yes

The shipping latency.

The period of time after which data is shipped. Valid values: 900 to 63244800. Unit: seconds.

The value of this property cannot exceed the retention period of Logstore data. We recommend that you specify a buffer period of several days for the shipping latency. Otherwise, data may be lost.

Endpoint

String

No

Yes

The endpoint of the OSS bucket.

None.

PathFormat

String

No

Yes

The partition format that is used to generate subdirectories.

The subdirectories are dynamically generated based on the value of BufferInterval. The default partition format is %Y/%m/%d/%H/%M. Example: 2017/01/23/12/00. The partition format cannot start with a forward slash (/). For more information on how to integrate with E-MapReduce (EMR) compute engines such as Hive and Impala to query and analyze data, see "Create an OSS data shipping job (new version)".

Prefix

String

No

Yes

The prefix of the OSS object name.

None.

PathFormatType

String

No

Yes

The type of the partition format.

-   Set the value to time.
    

Suffix

String

No

Yes

The suffix of the OSS object name.

None.

TimeZone

String

No

Yes

The time zone.

The partition path varies based on the time zone. Valid values: -1200 to +1400. Example: +0800.

## Return values

Fn::GetAtt

-   ProjectName: the name of the SLS project.
    
-   ExportName: the job name.
    

## Examples

-   `YAML` format
    
    ```
    ROSTemplateFormatVersion: '2015-09-01'
    Parameters:
      Configuration:
        AssociationPropertyMetadata:
          Parameters:
            ToTime:
              Type: Number
              Description:
                en: The end time of the time range.
              Required: false
              Default: 0
            Sink:
              AssociationPropertyMetadata:
                Parameters:
                  BufferInterval:
                    Type: Number
                    Description:
                      en: 'The shipping time. The maximum interval at which data is shipped. Valid values: 300 to 900. Unit: seconds.'
                    Required: true
                    MinValue: 300
                    MaxValue: 900
                  ContentType:
                    Type: String
                    Description:
                      en: The storage format. You can store data in the Parquet format for data analysis. Compared with data stored in the CSV or JSON format, data stored in the Parquet format can be scanned at a higher efficiency.You are charged more fees when you ship data in the Parquet format than in the CSV or JSON format. Select a storage format for data shipping based on your business requirements.
                    AllowedValues:
                      - json
                      - parquet
                      - csv
                      - orc
                    Required: true
                  ContentDetail:
                    Type: Json
                    Description:
                      en: 'The content detail. If ContentType=json, the default value is {"EnableTag": false}.'
                    Required: false
                  PathFormat:
                    Type: String
                    Description:
                      en: 'The partition format is used to generate subdirectories. A subdirectory is dynamically generated based on the shipping time. The default partition format is %Y/%m/%d/%H/%M. Example: 2017/01/23/12/00. Note that the partition format cannot start with a forward slash (/). For more information about how to integrate with the compute engines of E-MapReduce such as Hive and Impala to query and analyze data'
                    Required: false
                    Default: '%Y/%m/%d/%H/%M'
                  Prefix:
                    Type: String
                    Description:
                      en: The prefix of the OSS object name.
                    Required: false
                  PathFormatType:
                    Type: String
                    Description:
                      en: The partition format type. Only support time.
                    AllowedValues:
                      - time
                    Required: false
                    Default: time
                  RoleArn:
                    Type: String
                    Description:
                      en: 'Used to control permissions of writing data to OSS and reading data in Logstores. Example: acs:ram::13234:role/aliyunlogdefaultrole.'
                    Required: true
                  BufferSize:
                    Type: Number
                    Description:
                      en: 'The shipping size. The value of this parameter determines the maximum size of raw log data that is shipped and stored in an object. Unit: MB. If the size of log data that you want to ship reaches the specified value, a shipping job is automatically created.'
                    Required: true
                    MinValue: 5
                    MaxValue: 256
                  TimeZone:
                    Type: String
                    Description:
                      en: The time zone. Partition paths vary based on time zones. The value should be -1200 to +1400. For example, +0800.
                    Required: false
                  Suffix:
                    Type: String
                    Description:
                      en: The suffix of the OSS object name.
                    Required: false
                  Endpoint:
                    Type: String
                    Description:
                      en: The endpoint of the OSS bucket.
                    Required: false
                  DelaySeconds:
                    Type: Number
                    Description:
                      en: |-
                        The shipping latency. The period of time after which data is shipped. Valid values: 900 to 63244800. Unit: seconds.
                        Note: Do not specify a latency that exceeds the data retention period of the Logstore. We recommend that you reserve a buffer period of a few days for the latency. Otherwise, data loss may occur.
                    Required: false
                    MinValue: 900
                    MaxValue: 63244800
                  Bucket:
                    Type: String
                    Description:
                      en: The name of the OSS bucket.
                    Required: true
                  CompressionType:
                    Type: String
                    Description:
                      en: 'The compression method of OSS data. Valid values: none, snappy, gzip, and zstd. The value none indicates that raw data is not compressed. The value snappy, gzip, or zstd indicates that a specified algorithm is used to compress data, which can reduce the storage space usage of OSS buckets. The compression methods vary based on storage formats.'
                    AllowedValues:
                      - none
                      - snappy
                      - gzip
                      - zstd
                    Required: false
              Type: Json
              Description:
                en: The sink name.
              Required: true
            Logstore:
              Type: String
              Description:
                en: The logstore name of the project.
              Required: true
            FromTime:
              Type: Number
              Description:
                en: The start time of the time range.
              Required: false
              Default: 0
            RoleArn:
              Type: String
              Description:
                en: 'Used to control permissions of writing data to OSS and reading data in Logstores. Example: acs:ram::13234:role/aliyunlogdefaultrole.'
              Required: true
        Type: Json
        Description:
          en: The configuration of the export job.
        Required: true
      ProjectName:
        Type: String
        Description:
          en: The project name of SLS.
        Required: true
        AllowedPattern: ^[a-zA-Z0-9_-]+$
        MinLength: 3
        MaxLength: 63
      DisplayName:
        Type: String
        Description:
          en: The display name of the export job. It must be 4 to 100 characters in length.
        Required: true
        MinLength: 4
        MaxLength: 100
      ExportName:
        Type: String
        Description:
          en: The name of the export job. This value should be unique. It must be 2 to 64 characters in length and can contain lowercase letters, digits, hyphens (-), and underscores (_). It must start and end with a lowercase letter or a digit.
        Required: true
        AllowedPattern: ^[a-zA-Z0-9_-]+$
        MinLength: 2
        MaxLength: 64
    Resources:
      OssExport:
        Type: ALIYUN::SLS::OssExport
        Properties:
          Configuration:
            Ref: Configuration
          ProjectName:
            Ref: ProjectName
          DisplayName:
            Ref: DisplayName
          ExportName:
            Ref: ExportName
    Outputs:
      ProjectName:
        Description: The project name of SLS.
        Value:
          Fn::GetAtt:
            - OssExport
            - ProjectName
      ExportName:
        Description: The name of the export job.
        Value:
          Fn::GetAtt:
            - OssExport
            - ExportName
    ```
    
-   `JSON` format
    
    ```
    {
      "ROSTemplateFormatVersion": "2015-09-01",
      "Parameters": {
        "Configuration": {
          "AssociationPropertyMetadata": {
            "Parameters": {
              "ToTime": {
                "Type": "Number",
                "Description": {
                  "en": "The end time of the time range."
                },
                "Required": false,
                "Default": 0
              },
              "Sink": {
                "AssociationPropertyMetadata": {
                  "Parameters": {
                    "BufferInterval": {
                      "Type": "Number",
                      "Description": {
                        "en": "The shipping time. The maximum interval at which data is shipped. Valid values: 300 to 900. Unit: seconds."
                      },
                      "Required": true,
                      "MinValue": 300,
                      "MaxValue": 900
                    },
                    "ContentType": {
                      "Type": "String",
                      "Description": {
                        "en": "The storage format. You can store data in the Parquet format for data analysis. Compared with data stored in the CSV or JSON format, data stored in the Parquet format can be scanned at a higher efficiency.You are charged more fees when you ship data in the Parquet format than in the CSV or JSON format. Select a storage format for data shipping based on your business requirements."
                      },
                      "AllowedValues": [
                        "json",
                        "parquet",
                        "csv",
                        "orc"
                      ],
                      "Required": true
                    },
                    "ContentDetail": {
                      "Type": "Json",
                      "Description": {
                        "en": "The content detail. If ContentType=json, the default value is {\"EnableTag\": false}."
                      },
                      "Required": false
                    },
                    "PathFormat": {
                      "Type": "String",
                      "Description": {
                        "en": "The partition format is used to generate subdirectories. A subdirectory is dynamically generated based on the shipping time. The default partition format is %Y/%m/%d/%H/%M. Example: 2017/01/23/12/00. Note that the partition format cannot start with a forward slash (/). For more information about how to integrate with the compute engines of E-MapReduce such as Hive and Impala to query and analyze data"
                      },
                      "Required": false,
                      "Default": "%Y/%m/%d/%H/%M"
                    },
                    "Prefix": {
                      "Type": "String",
                      "Description": {
                        "en": "The prefix of the OSS object name."
                      },
                      "Required": false
                    },
                    "PathFormatType": {
                      "Type": "String",
                      "Description": {
                        "en": "The partition format type. Only support time."
                      },
                      "AllowedValues": [
                        "time"
                      ],
                      "Required": false,
                      "Default": "time"
                    },
                    "RoleArn": {
                      "Type": "String",
                      "Description": {
                        "en": "Used to control permissions of writing data to OSS and reading data in Logstores. Example: acs:ram::13234:role/aliyunlogdefaultrole."
                      },
                      "Required": true
                    },
                    "BufferSize": {
                      "Type": "Number",
                      "Description": {
                        "en": "The shipping size. The value of this parameter determines the maximum size of raw log data that is shipped and stored in an object. Unit: MB. If the size of log data that you want to ship reaches the specified value, a shipping job is automatically created."
                      },
                      "Required": true,
                      "MinValue": 5,
                      "MaxValue": 256
                    },
                    "TimeZone": {
                      "Type": "String",
                      "Description": {
                        "en": "The time zone. Partition paths vary based on time zones. The value should be -1200 to +1400. For example, +0800."
                      },
                      "Required": false
                    },
                    "Suffix": {
                      "Type": "String",
                      "Description": {
                        "en": "The suffix of the OSS object name."
                      },
                      "Required": false
                    },
                    "Endpoint": {
                      "Type": "String",
                      "Description": {
                        "en": "The endpoint of the OSS bucket."
                      },
                      "Required": false
                    },
                    "DelaySeconds": {
                      "Type": "Number",
                      "Description": {
                        "en": "The shipping latency. The period of time after which data is shipped. Valid values: 900 to 63244800. Unit: seconds.\nNote: Do not specify a latency that exceeds the data retention period of the Logstore. We recommend that you reserve a buffer period of a few days for the latency. Otherwise, data loss may occur."
                      },
                      "Required": false,
                      "MinValue": 900,
                      "MaxValue": 63244800
                    },
                    "Bucket": {
                      "Type": "String",
                      "Description": {
                        "en": "The name of the OSS bucket."
                      },
                      "Required": true
                    },
                    "CompressionType": {
                      "Type": "String",
                      "Description": {
                        "en": "The compression method of OSS data. Valid values: none, snappy, gzip, and zstd. The value none indicates that raw data is not compressed. The value snappy, gzip, or zstd indicates that a specified algorithm is used to compress data, which can reduce the storage space usage of OSS buckets. The compression methods vary based on storage formats."
                      },
                      "AllowedValues": [
                        "none",
                        "snappy",
                        "gzip",
                        "zstd"
                      ],
                      "Required": false
                    }
                  }
                },
                "Type": "Json",
                "Description": {
                  "en": "The sink name."
                },
                "Required": true
              },
              "Logstore": {
                "Type": "String",
                "Description": {
                  "en": "The logstore name of the project."
                },
                "Required": true
              },
              "FromTime": {
                "Type": "Number",
                "Description": {
                  "en": "The start time of the time range."
                },
                "Required": false,
                "Default": 0
              },
              "RoleArn": {
                "Type": "String",
                "Description": {
                  "en": "Used to control permissions of writing data to OSS and reading data in Logstores. Example: acs:ram::13234:role/aliyunlogdefaultrole."
                },
                "Required": true
              }
            }
          },
          "Type": "Json",
          "Description": {
            "en": "The configuration of the export job."
          },
          "Required": true
        },
        "ProjectName": {
          "Type": "String",
          "Description": {
            "en": "The project name of SLS."
          },
          "Required": true,
          "AllowedPattern": "^[a-zA-Z0-9_-]+$",
          "MinLength": 3,
          "MaxLength": 63
        },
        "DisplayName": {
          "Type": "String",
          "Description": {
            "en": "The display name of the export job. It must be 4 to 100 characters in length."
          },
          "Required": true,
          "MinLength": 4,
          "MaxLength": 100
        },
        "ExportName": {
          "Type": "String",
          "Description": {
            "en": "The name of the export job. This value should be unique. It must be 2 to 64 characters in length and can contain lowercase letters, digits, hyphens (-), and underscores (_). It must start and end with a lowercase letter or a digit."
          },
          "Required": true,
          "AllowedPattern": "^[a-zA-Z0-9_-]+$",
          "MinLength": 2,
          "MaxLength": 64
        }
      },
      "Resources": {
        "OssExport": {
          "Type": "ALIYUN::SLS::OssExport",
          "Properties": {
            "Configuration": {
              "Ref": "Configuration"
            },
            "ProjectName": {
              "Ref": "ProjectName"
            },
            "DisplayName": {
              "Ref": "DisplayName"
            },
            "ExportName": {
              "Ref": "ExportName"
            }
          }
        }
      },
      "Outputs": {
        "ProjectName": {
          "Description": "The project name of SLS.",
          "Value": {
            "Fn::GetAtt": [
              "OssExport",
              "ProjectName"
            ]
          }
        },
        "ExportName": {
          "Description": "The name of the export job.",
          "Value": {
            "Fn::GetAtt": [
              "OssExport",
              "ExportName"
            ]
          }
        }
      }
    }
                            
    ```
