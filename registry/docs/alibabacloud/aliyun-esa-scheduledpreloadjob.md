The ALIYUN::ESA::ScheduledPreloadJob type is used to create a scheduled preload job.

## Syntax

```
{
  "Type": "ALIYUN::ESA::ScheduledPreloadJob",
  "Properties": {
    "InsertWay": String,
    "SiteId": Integer,
    "ScheduledPreloadJobName": String,
    "OssUrl": String,
    "UrlList": List
  }
}
```

## Properties

**Property name**

**Type**

**Required**

**Updatable**

**Description**

**Constraints**

InsertWay

String

Yes

No

The method to upload the files to be preloaded.

Valid values:

-   oss: Upload files from Object Storage Service (OSS).
    
-   textBox: Upload files from a text box.
    

SiteId

Integer

Yes

No

The site ID.

None

ScheduledPreloadJobName

String

Yes

No

The name of the scheduled preload job.

None

OssUrl

String

No

No

The OSS file for the scheduled preload job.

Enter the URL of the OSS file. Note: The OSS file must contain the URLs that you want to preload.

UrlList

List

No

No

The list of URLs to be preloaded.

Used when you upload files using the text box method.

## Return values

Fn::GetAtt

-   TaskSubmitted: The number of URLs submitted for preload jobs.
    
-   SiteId: The site ID.
    
-   UrlSubmitted: The number of submitted URLs.
    
-   ErrorInfo: The error message.
    
-   CreateTime: The time when the job was created.
    
-   ScheduledPreloadJobName: The name of the scheduled preload job.
    
-   ScheduledPreloadJobId: The job ID.
    
-   Domains: The list of domain names to be preloaded.
    
-   InsertWay: The method used to upload the files to be preloaded.
    
-   FailedFileOss: The OSS URL of the file that contains the failed URLs.
    
-   TaskType: The job type (refresh/preload).
    
-   UrlCount: The total number of URLs.
    
-   FileId: The ID of the file that contains the URL list. This ID is used to download the file.
    

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  InsertWay:
    Type: String
    Description:
      en: The method to submit the URLs to be preloaded.
    AllowedValues:
      - oss
      - textBox
    Required: true
  SiteId:
    Type: Number
    Description:
      en: The site ID.
    Required: true
  OssUrl:
    Type: String
    Description:
      en: The URL of the OSS file that contains the URLs for the scheduled preload job.
    Required: false
  ScheduledPreloadJobName:
    Type: String
    Description:
      en: The name of the scheduled preload job.
    Required: true
Resources:
  ExtensionResource:
    Type: ALIYUN::ESA::ScheduledPreloadJob
    Properties:
      InsertWay:
        Ref: InsertWay
      SiteId:
        Ref: SiteId
      OssUrl:
        Ref: OssUrl
      ScheduledPreloadJobName:
        Ref: ScheduledPreloadJobName
Outputs:
  TaskSubmitted:
    Description: The number of submitted preload jobs.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - TaskSubmitted
  SiteId:
    Description: The site ID.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - SiteId
  UrlSubmitted:
    Description: The number of submitted URLs.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - UrlSubmitted
  ErrorInfo:
    Description: The error message.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - ErrorInfo
  CreateTime:
    Description: The time when the job was created.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - CreateTime
  ScheduledPreloadJobName:
    Description: The name of the scheduled preload job.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - ScheduledPreloadJobName
  ScheduledPreloadJobId:
    Description: The ID of the preload job.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - ScheduledPreloadJobId
  Domains:
    Description: The domain names to be preloaded.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - Domains
  InsertWay:
    Description: The method to submit the URLs to be preloaded.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - InsertWay
  FailedFileOss:
    Description: The OSS URL of the file that contains the failed URLs.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - FailedFileOss
  TaskType:
    Description: 'The job type. Valid values: refresh and preload.'
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - TaskType
  UrlCount:
    Description: The total number of URLs.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - UrlCount
  FileId:
    Description: The ID of the file that contains the URL list. This ID is used for downloads.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - FileId
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "InsertWay": {
      "Type": "String",
      "Description": {
        "en": "The method to submit the URLs to be preloaded."
      },
      "AllowedValues": [
        "oss",
        "textBox"
      ],
      "Required": true
    },
    "SiteId": {
      "Type": "Number",
      "Description": {
        "en": "The site ID."
      },
      "Required": true
    },
    "OssUrl": {
      "Type": "String",
      "Description": {
        "en": "The URL of the OSS file that contains the URLs for the scheduled preload job."
      },
      "Required": false
    },
    "ScheduledPreloadJobName": {
      "Type": "String",
      "Description": {
        "en": "The name of the scheduled preload job."
      },
      "Required": true
    }
  },
  "Resources": {
    "ExtensionResource": {
      "Type": "ALIYUN::ESA::ScheduledPreloadJob",
      "Properties": {
        "InsertWay": {
          "Ref": "InsertWay"
        },
        "SiteId": {
          "Ref": "SiteId"
        },
        "OssUrl": {
          "Ref": "OssUrl"
        },
        "ScheduledPreloadJobName": {
          "Ref": "ScheduledPreloadJobName"
        }
      }
    }
  },
  "Outputs": {
    "TaskSubmitted": {
      "Description": "The number of submitted preload jobs.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "TaskSubmitted"
        ]
      }
    },
    "SiteId": {
      "Description": "The site ID.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "SiteId"
        ]
      }
    },
    "UrlSubmitted": {
      "Description": "The number of submitted URLs.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "UrlSubmitted"
        ]
      }
    },
    "ErrorInfo": {
      "Description": "The error message.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "ErrorInfo"
        ]
      }
    },
    "CreateTime": {
      "Description": "The time when the job was created.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "CreateTime"
        ]
      }
    },
    "ScheduledPreloadJobName": {
      "Description": "The name of the scheduled preload job.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "ScheduledPreloadJobName"
        ]
      }
    },
    "ScheduledPreloadJobId": {
      "Description": "The ID of the preload job.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "ScheduledPreloadJobId"
        ]
      }
    },
    "Domains": {
      "Description": "The domain names to be preloaded.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "Domains"
        ]
      }
    },
    "InsertWay": {
      "Description": "The method to submit the URLs to be preloaded.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "InsertWay"
        ]
      }
    },
    "FailedFileOss": {
      "Description": "The OSS URL of the file that contains the failed URLs.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "FailedFileOss"
        ]
      }
    },
    "TaskType": {
      "Description": "The job type. Valid values: refresh and preload.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "TaskType"
        ]
      }
    },
    "UrlCount": {
      "Description": "The total number of URLs.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "UrlCount"
        ]
      }
    },
    "FileId": {
      "Description": "The ID of the file that contains the URL list. This ID is used for downloads.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "FileId"
        ]
      }
    }
  }
}
                        
```
