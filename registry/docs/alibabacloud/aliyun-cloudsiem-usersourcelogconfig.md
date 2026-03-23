ALIYUN::CloudSiem::UserSourceLogConfig is used to add logs of a cloud service within an account.

## Syntax

```
{
  "Type": "ALIYUN::CloudSiem::UserSourceLogConfig",
  "Properties": {
    "SourceProdCode": String,
    "SubUserId": String,
    "SourceLogInfo": Map,
    "SourceLogCode": String
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

SourceProdCode

String

Yes

No

The code of the cloud service.

You can call the [ListAllProds](/help/en/security-center/developer-reference/api-cloud-siem-2022-06-16-listallprods) operation to query the cloud service code.

SubUserId

String

Yes

No

The ID of the Alibaba Cloud account of the cloud service whose logs are to be added.

None.

SourceLogInfo

Map

Yes

No

The Simple Log Service (SLS) information about the logs.

For more information, see [SourceLogInfo properties](#fac90d1273qer).

SourceLogCode

String

Yes

No

The code of the log.

You can call the [ListImportedLogsByProd](/help/en/security-center/developer-reference/api-cloud-siem-2022-06-16-listimportedlogsbyprod) operation to query the log code.

## SourceLogInfo syntax

```
"SourceLogInfo": {
  "Project": String,
  "RegionCode": String,
  "LogStore": String
}
```

## SourceLogInfo properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

LogStore

String

Yes

No

The name of the Logstore.

None.

Project

String

Yes

No

The name of the log project.

None.

RegionCode

String

Yes

No

The region of the logs.

None.

## Return values

Fn::GetAtt

None.

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  SourceLogCode:
    Description:
      en: The source log code. For all available log codes of a product, query the
        Cloud Siem ListImportedLogsByProd API with a specific product code.
    Required: true
    Type: String
  SourceLogInfo:
    AssociationPropertyMetadata:
      Parameters:
        LogStore:
          Description:
            en: The logstore name.
          Required: true
          Type: String
        Project:
          Description:
            en: The log project name
          Required: true
          Type: String
        RegionCode:
          Description:
            en: The region of the log
          Required: true
          Type: String
    Description:
      en: The info of log to be added.
    Required: true
    Type: Json
  SourceProdCode:
    Description:
      en: The product code. For all available product codes, query the Cloud Siem
        ListAllProds API.
    Required: true
    Type: String
  SubUserId:
    Description:
      en: The Id of the account to be submitted.
    Required: true
    Type: String
Resources:
  UserSourceLogConfig:
    Properties:
      SourceLogCode:
        Ref: SourceLogCode
      SourceLogInfo:
        Ref: SourceLogInfo
      SourceProdCode:
        Ref: SourceProdCode
      SubUserId:
        Ref: SubUserId
    Type: ALIYUN::CloudSiem::UserSourceLogConfig
                        
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "SourceProdCode": {
      "Type": "String",
      "Description": {
        "en": "The product code. For all available product codes, query the Cloud Siem ListAllProds API."
      },
      "Required": true
    },
    "SubUserId": {
      "Type": "String",
      "Description": {
        "en": "The Id of the account to be submitted."
      },
      "Required": true
    },
    "SourceLogInfo": {
      "AssociationPropertyMetadata": {
        "Parameters": {
          "Project": {
            "Type": "String",
            "Description": {
              "en": "The log project name"
            },
            "Required": true
          },
          "RegionCode": {
            "Type": "String",
            "Description": {
              "en": "The region of the log"
            },
            "Required": true
          },
          "LogStore": {
            "Type": "String",
            "Description": {
              "en": "The logstore name."
            },
            "Required": true
          }
        }
      },
      "Type": "Json",
      "Description": {
        "en": "The info of log to be added."
      },
      "Required": true
    },
    "SourceLogCode": {
      "Type": "String",
      "Description": {
        "en": "The source log code. For all available log codes of a product, query the Cloud Siem ListImportedLogsByProd API with a specific product code."
      },
      "Required": true
    }
  },
  "Resources": {
    "UserSourceLogConfig": {
      "Type": "ALIYUN::CloudSiem::UserSourceLogConfig",
      "Properties": {
        "SourceProdCode": {
          "Ref": "SourceProdCode"
        },
        "SubUserId": {
          "Ref": "SubUserId"
        },
        "SourceLogInfo": {
          "Ref": "SourceLogInfo"
        },
        "SourceLogCode": {
          "Ref": "SourceLogCode"
        }
      }
    }
  }
}
                        
```
