ALIYUN::CloudSiem::ImportLogTasksSubmission is used to import and submit a log collection task.

## Syntax

```
{
  "Type": "ALIYUN::CloudSiem::ImportLogTasksSubmission",
  "Properties": {
    "Accounts": List,
    "CloudCode": String,
    "LogCodes": List,
    "ProdCode": String
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

Accounts

List

Yes

No

The accounts whose logs are to be added.

The value of this property consists of the following fields:

-   AccountId: the ID of the account.
    
-   Imported: specifies whether to add an account. Valid values:
    
    -   0: does not add an account.
        
    -   1: add an account.
        

Example:

```
[{"AccountId":"123123","Imported":1}]
```

CloudCode

String

Yes

No

The code that is used for multi-cloud environments.

Valid values:

-   qcloud
    
-   hcloud
    
-   aliyun
    

LogCodes

List

Yes

No

The codes of the logs to be added.

You can call the [ListImportedLogsByProd](/help/en/security-center/developer-reference/api-cloud-siem-2022-06-16-listimportedlogsbyprod) operation to query the log codes.

ProdCode

String

Yes

No

The code of the cloud service.

You can call the [ListAllProds](/help/en/security-center/developer-reference/api-cloud-siem-2022-06-16-listallprods) operation to query the cloud service code.

## Return values

Fn::GetAtt

None.

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  Accounts:
    AssociationProperty: List[Parameter]
    AssociationPropertyMetadata:
      Parameter:
        Required: true
        Type: String
    Description:
      en: The list of accounts to be submitted.
    Required: true
    Type: Json
  CloudCode:
    AllowedValues:
      - qcloud
      - hcloud
      - aliyun
    Description:
      en: 'The cloud code. The code that is used for multi-cloud environments. Valid
        values: qcloud for Tencent Cloud, aliyun for Alibaba Cloud, hcloud for Huawei
        Cloud'
    Required: true
    Type: String
  LogCodes:
    AssociationProperty: List[Parameter]
    AssociationPropertyMetadata:
      Parameter:
        Required: true
        Type: String
    Description:
      en: The list of log codes to be submitted. For all available log codes of a
        product, query the Cloud Siem ListImportedLogsByProd API with a specific product
        code.
    Required: true
    Type: Json
  ProdCode:
    Description:
      en: The product code. For all available product codes, query the Cloud Siem
        ListAllProds API.
    Required: true
    Type: String
Resources:
  ImportLogTasksSubmission:
    Properties:
      Accounts:
        Ref: Accounts
      CloudCode:
        Ref: CloudCode
      LogCodes:
        Ref: LogCodes
      ProdCode:
        Ref: ProdCode
    Type: ALIYUN::CloudSiem::ImportLogTasksSubmission
                        
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "CloudCode": {
      "Type": "String",
      "Description": {
        "en": "The cloud code. The code that is used for multi-cloud environments. Valid values: qcloud for Tencent Cloud, aliyun for Alibaba Cloud, hcloud for Huawei Cloud"
      },
      "AllowedValues": [
        "qcloud",
        "hcloud",
        "aliyun"
      ],
      "Required": true
    },
    "LogCodes": {
      "AssociationPropertyMetadata": {
        "Parameter": {
          "Type": "String",
          "Required": true
        }
      },
      "AssociationProperty": "List[Parameter]",
      "Type": "Json",
      "Description": {
        "en": "The list of log codes to be submitted. For all available log codes of a product, query the Cloud Siem ListImportedLogsByProd API with a specific product code."
      },
      "Required": true
    },
    "ProdCode": {
      "Type": "String",
      "Description": {
        "en": "The product code. For all available product codes, query the Cloud Siem ListAllProds API."
      },
      "Required": true
    },
    "Accounts": {
      "AssociationPropertyMetadata": {
        "Parameter": {
          "Type": "String",
          "Required": true
        }
      },
      "AssociationProperty": "List[Parameter]",
      "Type": "Json",
      "Description": {
        "en": "The list of accounts to be submitted."
      },
      "Required": true
    }
  },
  "Resources": {
    "ImportLogTasksSubmission": {
      "Type": "ALIYUN::CloudSiem::ImportLogTasksSubmission",
      "Properties": {
        "CloudCode": {
          "Ref": "CloudCode"
        },
        "LogCodes": {
          "Ref": "LogCodes"
        },
        "ProdCode": {
          "Ref": "ProdCode"
        },
        "Accounts": {
          "Ref": "Accounts"
        }
      }
    }
  }
}
                        
```
