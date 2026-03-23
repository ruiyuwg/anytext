DATASOURCE::ThreatDetection::AntiBruteForceRules is used to query the basic information about defense rules against brute-force attacks.

## Syntax

```
{
  "Type": "DATASOURCE::ThreatDetection::AntiBruteForceRules",
  "Properties": {
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

RefreshOptions

String

No

Yes

The refresh policy for data source resources when the stack is updated.

Valid values:

-   Never (default): does not refresh data source resources when the stack is updated.
    
-   Always: refreshes data source resources when the stack is updated.
    

## Return values

Fn::GetAtt

-   AntiBruteForceRules: details of the defense rules.
    
-   AntiBruteForceRuleIds: the IDs of the defense rules.
    

**Property**

**Type**

**Description**

**Constraint**

AntiBruteForceRuleIds

List

The IDs of the defense rules.

None.

AntiBruteForceRules

List

Details of the defense rules.

None.

AntiBruteForceRuleId

String

The ID of the defense rule.

None.

UuidList

List

The UUIDs of the servers to which the defense rule is applied.

None.

AntiBruteForceRuleName

String

The name of the defense rule.

None.

FailCount

String

The maximum number of failed logon attempts from an account.

None.

Span

String

The maximum period of time during which failed logon attempts from an account can occur.

Unit: minutes.

DefaultRule

String

Indicates whether the defense rule is set as the default rule.

None.

ForbiddenTime

String

The period of time during which logons from an account are not allowed.

Unit: minutes.

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Resources:
  ExtensionDataSource:
    Properties: {}
    Type: DATASOURCE::ThreatDetection::AntiBruteForceRules
Outputs:
  AntiBruteForceRuleIds:
    Description: The list of anti brute force rule IDs.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - AntiBruteForceRuleIds
  AntiBruteForceRules:
    Description: The list of anti brute force rules.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - AntiBruteForceRules
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Resources": {
    "ExtensionDataSource": {
      "Type": "DATASOURCE::ThreatDetection::AntiBruteForceRules",
      "Properties": {}
    }
  },
  "Outputs": {
    "AntiBruteForceRules": {
      "Description": "The list of anti brute force rules.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "AntiBruteForceRules"
        ]
      }
    },
    "AntiBruteForceRuleIds": {
      "Description": "The list of anti brute force rule IDs.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "AntiBruteForceRuleIds"
        ]
      }
    }
  }
}
```
