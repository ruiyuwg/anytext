ALIYUN::Config::Aggregator is used to create an account group.

## Syntax

```
{
  "Type": "ALIYUN::Config::Aggregator",
  "Properties": {
    "AggregatorName": String,
    "Description": String,
    "AggregatorAccounts": List,
    "AggregatorType": String,
    "FolderId": String
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

AggregatorName

String

Yes

Yes

The name of the account group.

None.

Description

String

Yes

Yes

The description of the account group.

None.

AggregatorAccounts

List

No

Yes

The information about all members in the account group.

For more information, see [AggregatorAccounts properties](#587ff4f9897ls).

Example:

```
[{
	"accountId": 171322098523****,
	"accountType":"ResourceDirectory",
                "accountName":"Alice"
}, {
	"accountId": 100532098349****,
	"accountType":"ResourceDirectory",
                "accountName":"Tom"
}]
```

AggregatorType

String

No

No

The type of the account group.

Valid values:

-   RD: global account group
    
-   CUSTOM (default): custom account group
    

FolderId

String

No

No

The ID of the attached folder of the account group.

None.

## AggregatorAccounts syntax

```
"AggregatorAccounts": [
  {
    "AccountId": Number,
    "AccountType": String,
    "AccountName": String
  }
]
```

## AggregatorAccounts properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

AccountId

Number

Yes

Yes

The account ID of the member.

None.

AccountName

String

Yes

Yes

The account name of the member.

None.

AccountType

String

No

Yes

The account type of the member.

Set the value to ResourceDirectory.

## Return values

Fn::GetAtt

AggregatorId: the ID of the account group.

## Examples

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  AggregatorAccounts:
    AssociationProperty: List[Parameters]
    AssociationPropertyMetadata:
      Parameters:
        AccountId:
          Description:
            en: The account id.
          Required: true
          Type: Number
        AccountName:
          Description:
            en: The account name.
          Required: true
          Type: String
        AccountType:
          AllowedValues:
          - ResourceDirectory
          Default: ResourceDirectory
          Description:
            en: 'The account type. Only support: ResourceDirectory'
          Required: false
          Type: String
    Description:
      en: The member account in aggregator.When the AggregatorType is RD, this parameter
        can be empty, which means that all accounts in the resource directory will
        be added to the global account group.
    Required: false
    Type: Json
  AggregatorName:
    Description:
      en: The name of aggregator.
    Required: true
    Type: String
  AggregatorType:
    AllowedValues:
    - RD
    - CUSTOM
    Description:
      en: 'Account group type. Value:

        RD: Global account group.CUSTOM: Custom account group (default value).'
    Required: false
    Type: String
  Description:
    AssociationProperty: TextArea
    Description:
      en: The description of aggregator.
    Required: true
    Type: String
Resources:
  Aggregator:
    Properties:
      AggregatorAccounts:
        Ref: AggregatorAccounts
      AggregatorName:
        Ref: AggregatorName
      AggregatorType:
        Ref: AggregatorType
      Description:
        Ref: Description
    Type: ALIYUN::Config::Aggregator
Outputs:
  AggregatorId:
    Description: 'The ID of the aggregator. '
    Value:
      Fn::GetAtt:
      - Aggregator
      - AggregatorId
                        
```

## `JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "AggregatorName": {
      "Type": "String",
      "Description": {
        "en": "The name of aggregator."
      },
      "Required": true
    },
    "Description": {
      "AssociationProperty": "TextArea",
      "Type": "String",
      "Description": {
        "en": "The description of aggregator."
      },
      "Required": true
    },
    "AggregatorAccounts": {
      "AssociationPropertyMetadata": {
        "Parameters": {
          "AccountId": {
            "Type": "Number",
            "Description": {
              "en": "The account id."
            },
            "Required": true
          },
          "AccountType": {
            "Type": "String",
            "Description": {
              "en": "The account type. Only support: ResourceDirectory"
            },
            "AllowedValues": [
              "ResourceDirectory"
            ],
            "Required": false,
            "Default": "ResourceDirectory"
          },
          "AccountName": {
            "Type": "String",
            "Description": {
              "en": "The account name."
            },
            "Required": true
          }
        }
      },
      "AssociationProperty": "List[Parameters]",
      "Type": "Json",
      "Description": {
        "en": "The member account in aggregator.When the AggregatorType is RD, this parameter can be empty, which means that all accounts in the resource directory will be added to the global account group."
      },
      "Required": false
    },
    "AggregatorType": {
      "Type": "String",
      "Description": {
        "en": "Account group type. Value:\nRD: Global account group.CUSTOM: Custom account group (default value)."
      },
      "AllowedValues": [
        "RD",
        "CUSTOM"
      ],
      "Required": false
    }
  },
  "Resources": {
    "Aggregator": {
      "Type": "ALIYUN::Config::Aggregator",
      "Properties": {
        "AggregatorName": {
          "Ref": "AggregatorName"
        },
        "Description": {
          "Ref": "Description"
        },
        "AggregatorAccounts": {
          "Ref": "AggregatorAccounts"
        },
        "AggregatorType": {
          "Ref": "AggregatorType"
        }
      }
    }
  },
  "Outputs": {
    "AggregatorId": {
      "Description": "The ID of the aggregator. ",
      "Value": {
        "Fn::GetAtt": [
          "Aggregator",
          "AggregatorId"
        ]
      }
    }
  }
}
                        
```
