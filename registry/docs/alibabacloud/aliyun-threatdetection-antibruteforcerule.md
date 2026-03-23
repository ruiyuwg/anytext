ALIYUN::ThreatDetection::AntiBruteForceRule is used to create a defense rule against brute-force attacks.

## Syntax

```
{
  "Type": "ALIYUN::ThreatDetection::AntiBruteForceRule",
  "Properties": {
    "DefaultRule": Boolean,
    "AntiBruteForceRuleName": String,
    "ForbiddenTime": Integer,
    "UuidList": List,
    "FailCount": Integer,
    "Span": Integer
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

DefaultRule

Boolean

No

Yes

Specifies whether to set the defense rule as the default rule.

Valid values:

-   **true**
    
-   **false**
    

**Note**

If no defense rule is associated with an asset, the default rule is applied to the asset.

AntiBruteForceRuleName

String

Yes

Yes

The name of the defense rule.

None.

ForbiddenTime

Integer

Yes

Yes

The period of time during which logons from an account are not allowed.

Valid values:

-   **5**: 5 minutes
    
-   **15**: 15 minutes
    
-   **30**: 30 minutes
    
-   **60**: 1 hour
    
-   **120**: 2 hours
    
-   **360**: 6 hours
    
-   **720**: 12 hours
    
-   **1440**: 24 hours
    
-   **10080**: 7 days
    
-   **52560000**: 100 years
    

UuidList

List

Yes

Yes

The UUIDs of the servers to which you want to apply the defense rule.

None.

FailCount

Integer

Yes

Yes

The maximum number of failed logon attempts from an account.

Valid values: 2, 3, 4, 5, 10, 50, 80, and 100.

Span

Integer

Yes

Yes

The maximum period of time during which failed logon attempts from an account can occur.

Unit: minutes.

Valid values:

-   **1**
    
-   **2**
    
-   **5**
    
-   **10**
    
-   **15**
    

**Note**

To configure a defense rule, you must configure Span, FailCount, and ForbiddenTime. If the number of failed logon attempts from an account within the minutes specified by Span exceeds the value specified by FailCount, the account cannot be used for logons within the minutes specified by ForbiddenTime.

## Return values

Fn::GetAtt

-   DefaultRule: indicates whether the defense rule is set as the default rule.
    
-   AntiBruteForceRuleName: the name of the defense rule.
    
-   ForbiddenTime: the period of time during which logons from an account are not allowed.
    
-   AntiBruteForceRuleId: the ID of the defense rule.
    
-   UuidList: the UUIDs of the servers to which the defense rule is applied.
    
-   FailCount: the maximum number of failed logon attempts from an account.
    
-   Span: the maximum period of time during which failed logon attempts from an account can occur.
    

## Examples

`YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  AntiBruteForceRuleName:
    Description: The name of the defense rule.
    Type: String
  DefaultRule:
    AllowedValues:
    - 'True'
    - 'true'
    - 'False'
    - 'false'
    Description: "Specifies whether to set the defense rule as the default rule. \n\
      Valid values:\n- true: yes\n- false: no"
    Type: Boolean
  FailCount:
    AllowedValues:
    - 2
    - 3
    - 4
    - 5
    - 10
    - 50
    - 80
    - 100
    Description: "The maximum number of failed logon attempts from an account. \n\
      Valid values: 2, 3, 4, 5, 10, 50, 80, and 100."
    Type: Number
  ForbiddenTime:
    AllowedValues:
    - 5
    - 15
    - 30
    - 60
    - 120
    - 360
    - 720
    - 1440
    - 10080
    - 52560000
    Description: 'The period of time during which logons from an account are not allowed.

      Unit: minutes. Valid values:

      - 5: 5 minutes

      - 15: 15 minutes

      - 30: 30 minutes

      - 60: 1 hour

      - 120: 2 hours

      - 360: 6 hours

      - 720: 12 hours

      - 1440: 24 hours

      - 10080: 7 days

      - 52560000: permanent'
    Type: Number
  Span:
    AllowedValues:
    - 1
    - 2
    - 5
    - 10
    - 15
    Description: 'The maximum period of time during which failed logon attempts from
      an account can occur.

      Unit: minutes. Valid values:

      - 1

      - 2

      - 5

      - 10

      - 15'
    Type: Number
  UuidList:
    Description: The UUIDs of the servers to which you want to apply the defense rule.
    Type: Json
Resources:
  ExtensionResource:
    Properties:
      AntiBruteForceRuleName:
        Ref: AntiBruteForceRuleName
      DefaultRule:
        Ref: DefaultRule
      FailCount:
        Ref: FailCount
      ForbiddenTime:
        Ref: ForbiddenTime
      Span:
        Ref: Span
      UuidList:
        Ref: UuidList
    Type: ALIYUN::ThreatDetection::AntiBruteForceRule
Outputs:
  AntiBruteForceRuleId:
    Description: The ID of the defense rule.
    Value:
      Fn::GetAtt:
      - ExtensionResource
      - AntiBruteForceRuleId
  AntiBruteForceRuleName:
    Description: The name of the defense rule.
    Value:
      Fn::GetAtt:
      - ExtensionResource
      - AntiBruteForceRuleName
  DefaultRule:
    Description: "Specifies whether to set the defense rule as the default rule. \n\
      Valid values:\n- true: yes\n- false: no"
    Value:
      Fn::GetAtt:
      - ExtensionResource
      - DefaultRule
  FailCount:
    Description: The threshold for the number of failed user logins when the brute-force
      defense rule takes effect.
    Value:
      Fn::GetAtt:
      - ExtensionResource
      - FailCount
  ForbiddenTime:
    Description: 'The period of time during which logons from an account are not allowed.
      Unit: minutes.'
    Value:
      Fn::GetAtt:
      - ExtensionResource
      - ForbiddenTime
  Span:
    Description: 'The period of time during which logon failures from an account are
      measured. Unit: minutes. If Span is set to 10, the defense rule takes effect
      when the logon failures measured within 10 minutes reaches the specified threshold.
      The IP addresses of attackers cannot be used to log on to the server within
      the specified period of time.'
    Value:
      Fn::GetAtt:
      - ExtensionResource
      - Span
  UuidList:
    Description: The UUIDs of the server to which the defense rule is applied.
    Value:
      Fn::GetAtt:
      - ExtensionResource
      - UuidList
```

`JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "DefaultRule": {
      "Type": "Boolean",
      "Description": "Specifies whether to set the defense rule as the default rule. \nValid values:\n- true: yes\n- false: no",
      "AllowedValues": [
        "True",
        "true",
        "False",
        "false"
      ]
    },
    "AntiBruteForceRuleName": {
      "Type": "String",
      "Description": "The name of the defense rule."
    },
    "ForbiddenTime": {
      "Type": "Number",
      "Description": "The period of time during which logons from an account are not allowed.\nUnit: minutes. Valid values:\n- 5: 5 minutes\n- 15: 15 minutes\n- 30: 30 minutes\n- 60: 1 hour\n- 120: 2 hours\n- 360: 6 hours\n- 720: 12 hours\n- 1440: 24 hours\n- 10080: 7 days\n- 52560000: permanent",
      "AllowedValues": [
        5,
        15,
        30,
        60,
        120,
        360,
        720,
        1440,
        10080,
        52560000
      ]
    },
    "UuidList": {
      "Type": "Json",
      "Description": "The UUIDs of the servers to which you want to apply the defense rule."
    },
    "FailCount": {
      "Type": "Number",
      "Description": "The maximum number of failed logon attempts from an account. \nValid values: 2, 3, 4, 5, 10, 50, 80, and 100.",
      "AllowedValues": [
        2,
        3,
        4,
        5,
        10,
        50,
        80,
        100
      ]
    },
    "Span": {
      "Type": "Number",
      "Description": "The maximum period of time during which failed logon attempts from an account can occur.\nUnit: minutes. Valid values:\n- 1\n- 2\n- 5\n- 10\n- 15",
      "AllowedValues": [
        1,
        2,
        5,
        10,
        15
      ]
    }
  },
  "Resources": {
    "ExtensionResource": {
      "Type": "ALIYUN::ThreatDetection::AntiBruteForceRule",
      "Properties": {
        "DefaultRule": {
          "Ref": "DefaultRule"
        },
        "AntiBruteForceRuleName": {
          "Ref": "AntiBruteForceRuleName"
        },
        "ForbiddenTime": {
          "Ref": "ForbiddenTime"
        },
        "UuidList": {
          "Ref": "UuidList"
        },
        "FailCount": {
          "Ref": "FailCount"
        },
        "Span": {
          "Ref": "Span"
        }
      }
    }
  },
  "Outputs": {
    "DefaultRule": {
      "Description": "Specifies whether to set the defense rule as the default rule. \nValid values:\n- true: yes\n- false: no",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "DefaultRule"
        ]
      }
    },
    "AntiBruteForceRuleName": {
      "Description": "The name of the defense rule.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "AntiBruteForceRuleName"
        ]
      }
    },
    "ForbiddenTime": {
      "Description": "The period of time during which logons from an account are not allowed. Unit: minutes.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "ForbiddenTime"
        ]
      }
    },
    "AntiBruteForceRuleId": {
      "Description": "The ID of the defense rule.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "AntiBruteForceRuleId"
        ]
      }
    },
    "UuidList": {
      "Description": "The UUIDs of the server to which the defense rule is applied.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "UuidList"
        ]
      }
    },
    "FailCount": {
      "Description": "The threshold for the number of failed user logins when the brute-force defense rule takes effect.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "FailCount"
        ]
      }
    },
    "Span": {
      "Description": "The period of time during which logon failures from an account are measured. Unit: minutes. If Span is set to 10, the defense rule takes effect when the logon failures measured within 10 minutes reaches the specified threshold. The IP addresses of attackers cannot be used to log on to the server within the specified period of time.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "Span"
        ]
      }
    }
  }
}
```
