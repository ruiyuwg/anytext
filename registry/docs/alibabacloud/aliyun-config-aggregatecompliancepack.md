ALIYUN::Config::AggregateCompliancePack is used to create a compliance package for an account group.

## Syntax

```
{
  "Type": "ALIYUN::Config::AggregateCompliancePack",
  "Properties": {
    "TagKeyScope": String,
    "TagValueScope": String,
    "Description": String,
    "CompliancePackName": String,
    "ExcludeResourceIdsScope": List,
    "RegionIdsScope": List,
    "ResourceGroupIdsScope": List,
    "ConfigRules": List,
    "CompliancePackTemplateId": String,
    "RiskLevel": Integer,
    "DefaultEnable": Boolean,
    "AggregatorId": String,
    "ResourceIdsScope": String,
    "ExcludeRegionIdsScope": String,
    "TemplateContent": String,
    "ExcludeResourceGroupIdsScope": String
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

AggregatorId

String

Yes

Yes

The ID of the account group.

None.

CompliancePackName

String

Yes

Yes

The name of the compliance package.

None.

ConfigRules

List

No

Yes

The rules in the compliance package.

For more information, see [ConfigRules properties](#08f1edc6b43a6).

Description

String

Yes

Yes

The description of the compliance package.

None.

RiskLevel

Integer

Yes

Yes

The risk level of the compliance package.

Valid values:

-   1: high
    
-   2: medium
    
-   3: low
    

CompliancePackTemplateId

String

No

No

The ID of the compliance package template.

None.

DefaultEnable

Boolean

No

Yes

Specifies whether to enable the rules together with the compliance package.

Valid values:

-   true
    
-   false (default)
    

ExcludeResourceIdsScope

List

No

Yes

The IDs of the resources that you do not want to evaluate by using the compliance package.

Separate multiple resource IDs with commas (,).

RegionIdsScope

List

No

Yes

The IDs of the regions where resources you want to evaluate by using the compliance package reside.

Separate multiple region IDs with commas (,).

ResourceGroupIdsScope

List

No

Yes

The IDs of the resource groups whose resources you want to evaluate by using the compliance package.

Separate multiple resource group IDs with commas (,).

TagKeyScope

String

No

Yes

The tag key of the resources that you want to evaluate by using the compliance package.

None.

TagValueScope

String

No

Yes

The tag value of the resources that you want to evaluate by using the compliance package.

You must specify TagValueScope together with TagKeyScope.

ResourceIdsScope

String

No

No

The IDs of the resources to which the rule applies.

Separate multiple resource IDs with commas (,).

ExcludeRegionIdsScope

String

No

No

The IDs of the regions excluded from the compliance evaluations performed by the rule.

Separate multiple region IDs with commas (,).

TemplateContent

String

No

No

The information about the template that is used to create the compliance package.

None.

ExcludeResourceGroupIdsScope

String

No

No

The IDs of the resource groups excluded from the compliance evaluations performed by the rule.

Separate multiple resource group IDs with commas (,).

## ConfigRules syntax

```
"ConfigRules": [
  {
    "ConfigRuleId": String,
    "Description": String,
    "ConfigRuleName": String,
    "ManagedRuleIdentifier": String,
    "RiskLevel": Integer,
    "ConfigRuleParameters": List
  }
]
```

## ConfigRules properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

RiskLevel

Integer

Yes

Yes

The risk level of the resources that do not comply with the rule.

Valid values:

-   1: high
    
-   2: medium
    
-   3: low
    

ConfigRuleId

String

No

Yes

The rule IDs.

If you specify this property, Cloud Config adds the rule of the specified ID to the compliance package.

You need to only specify one of the `ManagedRuleIdentifier` and `ConfigRuleId` properties. If you specify both the properties, the value of the `ConfigRuleId` property takes precedence.

ConfigRuleName

String

No

Yes

The rule name.

None.

ConfigRuleParameters

List

No

Yes

The input parameters of the rule.

For more information, see [ConfigRuleParameters properties](#1f2dd286ddv68).

Description

String

No

Yes

The description of the rule.

None.

ManagedRuleIdentifier

String

No

Yes

The identifier of the managed rule.

Cloud Config automatically creates a managed rule based on the specified identifier and adds the rule to the compliance package.

You need to only specify one of the `ManagedRuleIdentifier` and `ConfigRuleId` properties. If you specify both the properties, the value of the `ConfigRuleId` property takes precedence.

## ConfigRuleParameters syntax

```
"ConfigRuleParameters": [
  {
    "ParameterValue": String,
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

Yes

Yes

The value of the input parameter.

You must specify the `ParameterName` and `ParameterValue` properties or leave both the properties empty. You must specify ParameterValue when the managed rule is configured with an input parameter that does not have a default value.

ParameterName

String

Yes

Yes

The name of the input parameter.

You must specify the `ParameterName` and `ParameterValue` properties or leave both the properties empty. You must specify ParameterName when the managed rule is configured with an input parameter that does not have a default value.

## Return values

Fn::GetAtt

CompliancePackId: the ID of the compliance package.

## Examples

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  AggregatorId:
    Description:
      en: Aggregator id.
    Required: true
    Type: String
  CompliancePackName:
    Description:
      en: Compliance package name.
    Required: true
    Type: String
  CompliancePackTemplateId:
    Description:
      en: Compliance package template ID.
    Required: false
    Type: String
  ConfigRules:
    AssociationProperty: List[Parameter]
    AssociationPropertyMetadata:
      Parameter:
        AssociationPropertyMetadata:
          Parameters:
            ConfigRuleId:
              Description:
                en: Rule ID. Configure auditing to add existing rules to the current
                  compliance package.Choose one of ManagedRuleIdentifier and ConfigRuleId.
                  When both parameters are set, ConfigRuleId is the correct one.
              Required: false
              Type: String
            ConfigRuleName:
              Description:
                en: The name of config rule.
              Required: false
              Type: String
            ConfigRuleParameters:
              AssociationProperty: List[Parameters]
              AssociationPropertyMetadata:
                Parameters:
                  ParameterName:
                    Description:
                      en: The name of parameter.
                    Required: true
                    Type: String
                  ParameterValue:
                    Description:
                      en: The value of parameter.
                    Required: true
                    Type: String
              Required: false
              Type: Json
            Description:
              AssociationProperty: TextArea
              Description:
                en: The description of config rule.
              Required: false
              Type: String
            ManagedRuleIdentifier:
              Description:
                en: Managed rule ID. Configure auditing to automatically create a
                  rule based on the managed rule ID and add the rule to the current
                  compliance package.Choose one of ManagedRuleIdentifier and ConfigRuleId.
                  When both parameters are set, ConfigRuleId is the correct one.
              Required: false
              Type: String
            RiskLevel:
              AllowedValues:
              - 1
              - 2
              - 3
              Description:
                en: 'Rule risk level. Value:

                  1: High risk.

                  2: Medium risk.

                  3: Low risk.'
              Required: true
              Type: Number
        Required: false
        Type: Json
    Description:
      en: List of rules in the compliance package.
    MinLength: 1
    Required: true
    Type: Json
  DefaultEnable:
    Description:
      en: 'Whether the rule supports quick activation. Value:

        true: This rule will be enabled when the compliance package is quickly enabled.

        false (default): disable'
    Required: false
    Type: Boolean
  Description:
    AssociationProperty: TextArea
    Description:
      en: The description of compliance pack.
    Required: true
    Type: String
  ExcludeResourceIdsScope:
    AssociationProperty: List[Parameter]
    AssociationPropertyMetadata:
      Parameter:
        Description:
          en: The resource id.
        Required: false
        Type: String
    Description:
      en: The compliance package is invalid for the specified resource ID, that is,
        no evaluation is performed on the resource.
    Required: false
    Type: Json
  RegionIdsScope:
    AssociationProperty: List[Parameter]
    AssociationPropertyMetadata:
      Parameter:
        Description:
          en: The region id.
        Required: false
        Type: String
    Description:
      en: The compliance package only takes effect for resources in the specified
        region ID.
    Required: false
    Type: Json
  ResourceGroupIdsScope:
    AssociationProperty: List[Parameter]
    AssociationPropertyMetadata:
      Parameter:
        Description:
          en: Resource group id.
        Required: false
        Type: String
    Description:
      en: The compliance package only takes effect on resources in the specified resource
        group ID.
    Required: false
    Type: Json
  RiskLevel:
    AllowedValues:
    - 1
    - 2
    - 3
    Description:
      en: 'Compliance package risk level. Value:

        1: High risk.

        2: Medium risk.

        3: Low risk.'
    Required: true
    Type: Number
  TagKeyScope:
    Description:
      en: Compliance packages only take effect on resources bound to the specified
        tag key.
    Required: false
    Type: String
  TagValueScope:
    Description:
      en: Compliance packages only take effect on resources bound to specified tag
        key-value pairs.TagValueScope needs to be used in conjunction with TagKeyScope.
    Required: false
    Type: String
Resources:
  AggregateCompliancePack:
    Properties:
      AggregatorId:
        Ref: AggregatorId
      CompliancePackName:
        Ref: CompliancePackName
      CompliancePackTemplateId:
        Ref: CompliancePackTemplateId
      ConfigRules:
        Ref: ConfigRules
      DefaultEnable:
        Ref: DefaultEnable
      Description:
        Ref: Description
      ExcludeResourceIdsScope:
        Ref: ExcludeResourceIdsScope
      RegionIdsScope:
        Ref: RegionIdsScope
      ResourceGroupIdsScope:
        Ref: ResourceGroupIdsScope
      RiskLevel:
        Ref: RiskLevel
      TagKeyScope:
        Ref: TagKeyScope
      TagValueScope:
        Ref: TagValueScope
    Type: ALIYUN::Config::AggregateCompliancePack
Outputs:
  CompliancePackId:
    Description: 'The ID of the compliance pack id. '
    Value:
      Fn::GetAtt:
      - AggregateCompliancePack
      - CompliancePackId
                        
```

## `JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "TagKeyScope": {
      "Type": "String",
      "Description": {
        "en": "Compliance packages only take effect on resources bound to the specified tag key."
      },
      "Required": false
    },
    "TagValueScope": {
      "Type": "String",
      "Description": {
        "en": "Compliance packages only take effect on resources bound to specified tag key-value pairs.TagValueScope needs to be used in conjunction with TagKeyScope."
      },
      "Required": false
    },
    "Description": {
      "AssociationProperty": "TextArea",
      "Type": "String",
      "Description": {
        "en": "The description of compliance pack."
      },
      "Required": true
    },
    "CompliancePackName": {
      "Type": "String",
      "Description": {
        "en": "Compliance package name."
      },
      "Required": true
    },
    "ExcludeResourceIdsScope": {
      "AssociationPropertyMetadata": {
        "Parameter": {
          "Type": "String",
          "Description": {
            "en": "The resource id."
          },
          "Required": false
        }
      },
      "AssociationProperty": "List[Parameter]",
      "Type": "Json",
      "Description": {
        "en": "The compliance package is invalid for the specified resource ID, that is, no evaluation is performed on the resource."
      },
      "Required": false
    },
    "RegionIdsScope": {
      "AssociationPropertyMetadata": {
        "Parameter": {
          "Type": "String",
          "Description": {
            "en": "The region id."
          },
          "Required": false
        }
      },
      "AssociationProperty": "List[Parameter]",
      "Type": "Json",
      "Description": {
        "en": "The compliance package only takes effect for resources in the specified region ID."
      },
      "Required": false
    },
    "ResourceGroupIdsScope": {
      "AssociationPropertyMetadata": {
        "Parameter": {
          "Type": "String",
          "Description": {
            "en": "Resource group id."
          },
          "Required": false
        }
      },
      "AssociationProperty": "List[Parameter]",
      "Type": "Json",
      "Description": {
        "en": "The compliance package only takes effect on resources in the specified resource group ID."
      },
      "Required": false
    },
    "ConfigRules": {
      "AssociationPropertyMetadata": {
        "Parameter": {
          "AssociationPropertyMetadata": {
            "Parameters": {
              "ConfigRuleId": {
                "Type": "String",
                "Description": {
                  "en": "Rule ID. Configure auditing to add existing rules to the current compliance package.Choose one of ManagedRuleIdentifier and ConfigRuleId. When both parameters are set, ConfigRuleId is the correct one."
                },
                "Required": false
              },
              "Description": {
                "AssociationProperty": "TextArea",
                "Type": "String",
                "Description": {
                  "en": "The description of config rule."
                },
                "Required": false
              },
              "ConfigRuleName": {
                "Type": "String",
                "Description": {
                  "en": "The name of config rule."
                },
                "Required": false
              },
              "ManagedRuleIdentifier": {
                "Type": "String",
                "Description": {
                  "en": "Managed rule ID. Configure auditing to automatically create a rule based on the managed rule ID and add the rule to the current compliance package.Choose one of ManagedRuleIdentifier and ConfigRuleId. When both parameters are set, ConfigRuleId is the correct one."
                },
                "Required": false
              },
              "RiskLevel": {
                "Type": "Number",
                "Description": {
                  "en": "Rule risk level. Value:\n1: High risk.\n2: Medium risk.\n3: Low risk."
                },
                "AllowedValues": [
                  1,
                  2,
                  3
                ],
                "Required": true
              },
              "ConfigRuleParameters": {
                "AssociationPropertyMetadata": {
                  "Parameters": {
                    "ParameterValue": {
                      "Type": "String",
                      "Description": {
                        "en": "The value of parameter."
                      },
                      "Required": true
                    },
                    "ParameterName": {
                      "Type": "String",
                      "Description": {
                        "en": "The name of parameter."
                      },
                      "Required": true
                    }
                  }
                },
                "AssociationProperty": "List[Parameters]",
                "Type": "Json",
                "Required": false
              }
            }
          },
          "Type": "Json",
          "Required": false
        }
      },
      "AssociationProperty": "List[Parameter]",
      "Type": "Json",
      "Description": {
        "en": "List of rules in the compliance package."
      },
      "Required": true,
      "MinLength": 1
    },
    "CompliancePackTemplateId": {
      "Type": "String",
      "Description": {
        "en": "Compliance package template ID."
      },
      "Required": false
    },
    "RiskLevel": {
      "Type": "Number",
      "Description": {
        "en": "Compliance package risk level. Value:\n1: High risk.\n2: Medium risk.\n3: Low risk."
      },
      "AllowedValues": [
        1,
        2,
        3
      ],
      "Required": true
    },
    "DefaultEnable": {
      "Type": "Boolean",
      "Description": {
        "en": "Whether the rule supports quick activation. Value:\ntrue: This rule will be enabled when the compliance package is quickly enabled.\nfalse (default): disable"
      },
      "Required": false
    },
    "AggregatorId": {
      "Type": "String",
      "Description": {
        "en": "Aggregator id."
      },
      "Required": true
    }
  },
  "Resources": {
    "AggregateCompliancePack": {
      "Type": "ALIYUN::Config::AggregateCompliancePack",
      "Properties": {
        "TagKeyScope": {
          "Ref": "TagKeyScope"
        },
        "TagValueScope": {
          "Ref": "TagValueScope"
        },
        "Description": {
          "Ref": "Description"
        },
        "CompliancePackName": {
          "Ref": "CompliancePackName"
        },
        "ExcludeResourceIdsScope": {
          "Ref": "ExcludeResourceIdsScope"
        },
        "RegionIdsScope": {
          "Ref": "RegionIdsScope"
        },
        "ResourceGroupIdsScope": {
          "Ref": "ResourceGroupIdsScope"
        },
        "ConfigRules": {
          "Ref": "ConfigRules"
        },
        "CompliancePackTemplateId": {
          "Ref": "CompliancePackTemplateId"
        },
        "RiskLevel": {
          "Ref": "RiskLevel"
        },
        "DefaultEnable": {
          "Ref": "DefaultEnable"
        },
        "AggregatorId": {
          "Ref": "AggregatorId"
        }
      }
    }
  },
  "Outputs": {
    "CompliancePackId": {
      "Description": "The ID of the compliance pack id. ",
      "Value": {
        "Fn::GetAtt": [
          "AggregateCompliancePack",
          "CompliancePackId"
        ]
      }
    }
  }
}
                        
```
