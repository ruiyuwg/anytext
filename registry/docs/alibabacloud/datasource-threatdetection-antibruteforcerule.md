DATASOURCE::ThreatDetection::AntiBruteForceRule is used to query the information about a created defense rule against brute-force attacks.

## Syntax

```
{
  "Type": "DATASOURCE::ThreatDetection::AntiBruteForceRule",
  "Properties": {
    "AntiBruteForceRuleId": Integer,
    "RefreshOptions": String
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

AntiBruteForceRuleId

Integer

Yes

Yes

The ID of the defense rule.

None.

RefreshOptions

String

No

Yes

The refresh policy for data source resources when the stack is updated.

Valid values:

-   Never (default): does not refresh data source resources when the stack is updated.
    
-   Always: refreshes data source resources when the stack is updated.
    

## Returned values

Fn::GetAtt

-   DefaultRule: indicates whether the defense rule is the default one.
    
-   AntiBruteForceRuleName: the name of the defense rule.
    
-   ForbiddenTime: the period of time during which logons from attacker IP addresses are not allowed by the defense rule.
    
-   AntiBruteForceRuleId: the ID of the defense rule.
    
-   UuidList: the UUIDs of servers to which the defense rule is applied.
    
-   FailCount: the threshold of logon failures that is specified in the defense rule.
    
-   Span: the time threshold that is used to determine whether the defense rule takes effect.
    

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  AntiBruteForceRuleId:
    Type: Number
    Description:
      en: The ID of the defense rule.
    Required: true
Resources:
  ExtensionDataSource:
    Type: DATASOURCE::ThreatDetection::AntiBruteForceRule
    Properties:
      AntiBruteForceRuleId:
        Ref: AntiBruteForceRuleId
Outputs:
  DefaultRule:
    Description: 'Indicates whether the defense rule is the default rule. '
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - DefaultRule
  AntiBruteForceRuleName:
    Description: The name of the defense rule.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - AntiBruteForceRuleName
  ForbiddenTime:
    Description: 'The period of time during which logons from an account are not allowed. Unit: minutes.'
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - ForbiddenTime
  AntiBruteForceRuleId:
    Description: The ID of the defense rule.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - AntiBruteForceRuleId
  UuidList:
    Description: An array consisting of the UUIDs of servers to which the defense rule is applied.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - UuidList
  FailCount:
    Description: The threshold of logon failures that is specified in the defense rule.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - FailCount
  Span:
    Description: 'The period of time during which logon failures from an account are measured. Unit: minutes. If Span is set to 10, the defense rule takes effect when the logon failures measured within 10 minutes reaches the specified threshold. The IP address of attackers cannot be used to log on to the server in the specified period of time.'
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - Span
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "AntiBruteForceRuleId": {
      "Type": "Number",
      "Description": {
        "en": "The ID of the defense rule."
      },
      "Required": true
    }
  },
  "Resources": {
    "ExtensionDataSource": {
      "Type": "DATASOURCE::ThreatDetection::AntiBruteForceRule",
      "Properties": {
        "AntiBruteForceRuleId": {
          "Ref": "AntiBruteForceRuleId"
        }
      }
    }
  },
  "Outputs": {
    "DefaultRule": {
      "Description": "Indicates whether the defense rule is the default rule. ",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "DefaultRule"
        ]
      }
    },
    "AntiBruteForceRuleName": {
      "Description": "The name of the defense rule.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "AntiBruteForceRuleName"
        ]
      }
    },
    "ForbiddenTime": {
      "Description": "The period of time during which logons from an account are not allowed. Unit: minutes.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "ForbiddenTime"
        ]
      }
    },
    "AntiBruteForceRuleId": {
      "Description": "The ID of the defense rule.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "AntiBruteForceRuleId"
        ]
      }
    },
    "UuidList": {
      "Description": "An array consisting of the UUIDs of servers to which the defense rule is applied.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "UuidList"
        ]
      }
    },
    "FailCount": {
      "Description": "The threshold of logon failures that is specified in the defense rule.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "FailCount"
        ]
      }
    },
    "Span": {
      "Description": "The period of time during which logon failures from an account are measured. Unit: minutes. If Span is set to 10, the defense rule takes effect when the logon failures measured within 10 minutes reaches the specified threshold. The IP address of attackers cannot be used to log on to the server in the specified period of time.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Span"
        ]
      }
    }
  }
}
                        
```
