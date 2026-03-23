ALIYUN::Config::CompliancePack is used to create a compliance package.

## Syntax

```
{
  "Type": "ALIYUN::Config::CompliancePack",
  "Properties": {
    "CompliancePackName": String,
    "Description": String,
    "ConfigRules": String,
    "CompliancePackTemplateId": String,
    "RiskLevel": Integer,
    "ConfigRuleIds": List
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

CompliancePackName

String

Yes

No

The name of the compliance package.

None.

Description

String

No

Yes

The description of the compliance package.

None.

ConfigRules

String

Yes

No

The rules in the compliance package.

None.

CompliancePackTemplateId

String

No

No

The ID of the compliance package template.

None.

RiskLevel

Integer

Yes

Yes

The risk level.

Valid values:

-   1: high
    
-   2: medium
    
-   3: low
    

ConfigRuleIds

List

No

Yes

The IDs of the rules.

For more information, see [ConfigRuleIds property](#ab3d180324gx4).

## ConfigRuleParameters syntax

```
"ConfigRuleParameters": [
  {
    "ParameterValue": String,
    "Required": Boolean,
    "ParameterName": String
  }
]
```

## ConfigRuleParameters properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

ParameterValue

String

No

No

The value of the parameter.

None.

Required

Boolean

No

No

Specifies whether the parameter is required.

Valid values:

-   true
    
-   false
    

ParameterName

String

No

No

The name of the parameter.

None.

## ConfigRuleIds syntax

```
"ConfigRuleIds": [
    "ConfigRuleId": String
]
```

## ConfigRuleIds property

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

ConfigRuleId

String

No

No

The ID of the rule.

None.

## Return values

Fn::GetAtt

-   CompliancePackId: the ID of the compliance package to which the rule belongs.
    
-   Description: the description of the compliance package.
    
-   CompliancePackName: the name of the compliance package.
    
-   AccountId: the ID of the Alibaba Cloud account.
    
-   CompliancePackTemplateId: the ID of the compliance package template.
    
-   RiskLevel: the risk level.
    

## Examples

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  CompliancePackName:
    Description: Compliance Package Name
    Type: String
  CompliancePackTemplateId:
    Description: Compliance Package Template Id
    Type: String
  ConfigRules:
    Description: Config Rule List
    Type: String
  Description:
    Description: Description
    Type: String
  RiskLevel:
    Description: Ris Level
    Type: Number
Resources:
  ConfigCompliancePack:
    Properties:
      CompliancePackName:
        Ref: CompliancePackName
      CompliancePackTemplateId:
        Ref: CompliancePackTemplateId
      ConfigRules:
        Ref: ConfigRules
      Description:
        Ref: Description
      RiskLevel:
        Ref: RiskLevel
    Type: ALIYUN::Config::CompliancePack
Outputs:
  AccountId:
    Description: Aliyun User Id
    Value:
      Fn::GetAtt:
      - ConfigCompliancePack
      - AccountId
  CompliancePackId:
    Description: Compliance Package ID
    Value:
      Fn::GetAtt:
      - ConfigCompliancePack
      - CompliancePackId
  CompliancePackName:
    Description: Compliance Package Name
    Value:
      Fn::GetAtt:
      - ConfigCompliancePack
      - CompliancePackName
  CompliancePackTemplateId:
    Description: Compliance Package Template Id
    Value:
      Fn::GetAtt:
      - ConfigCompliancePack
      - CompliancePackTemplateId
  Description:
    Description: Description
    Value:
      Fn::GetAtt:
      - ConfigCompliancePack
      - Description
  RiskLevel:
    Description: Ris Level
    Value:
      Fn::GetAtt:
      - ConfigCompliancePack
      - RiskLevel
```

## `JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "Description": {
      "Type": "String",
      "Description": "Description"
    },
    "CompliancePackName": {
      "Type": "String",
      "Description": "Compliance Package Name"
    },
    "ConfigRules": {
      "Type": "String",
      "Description": "Config Rule List"
    },
    "CompliancePackTemplateId": {
      "Type": "String",
      "Description": "Compliance Package Template Id"
    },
    "RiskLevel": {
      "Type": "Number",
      "Description": "Ris Level"
    }
  },
  "Resources": {
    "ConfigCompliancePack": {
      "Type": "ALIYUN::Config::CompliancePack",
      "Properties": {
        "Description": {
          "Ref": "Description"
        },
        "CompliancePackName": {
          "Ref": "CompliancePackName"
        },
        "ConfigRules": {
          "Ref": "ConfigRules"
        },
        "CompliancePackTemplateId": {
          "Ref": "CompliancePackTemplateId"
        },
        "RiskLevel": {
          "Ref": "RiskLevel"
        }
      }
    }
  },
  "Outputs": {
    "CompliancePackId": {
      "Description": "Compliance Package ID",
      "Value": {
        "Fn::GetAtt": [
          "ConfigCompliancePack",
          "CompliancePackId"
        ]
      }
    },
    "Description": {
      "Description": "Description",
      "Value": {
        "Fn::GetAtt": [
          "ConfigCompliancePack",
          "Description"
        ]
      }
    },
    "CompliancePackName": {
      "Description": "Compliance Package Name",
      "Value": {
        "Fn::GetAtt": [
          "ConfigCompliancePack",
          "CompliancePackName"
        ]
      }
    },
    "AccountId": {
      "Description": "Aliyun User Id",
      "Value": {
        "Fn::GetAtt": [
          "ConfigCompliancePack",
          "AccountId"
        ]
      }
    },
    "CompliancePackTemplateId": {
      "Description": "Compliance Package Template Id",
      "Value": {
        "Fn::GetAtt": [
          "ConfigCompliancePack",
          "CompliancePackTemplateId"
        ]
      }
    },
    "RiskLevel": {
      "Description": "Ris Level",
      "Value": {
        "Fn::GetAtt": [
          "ConfigCompliancePack",
          "RiskLevel"
        ]
      }
    }
  }
}
```
