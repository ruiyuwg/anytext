ALIYUN::CDN::DomainConfig is used to configure multiple domain names at a time.

## Syntax

```
{
  "Type": "ALIYUN::CDN::DomainConfig",
  "Properties": {
    "FunctionList": List,
    "DomainNames": String
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

DomainNames

String

Yes

No

The accelerated domain names.

Separate multiple accelerated domain names with commas (,).

FunctionList

List

No

No

The features.

For more information, see [FunctionList properties](#section-stb-q7p-pxx).

## FunctionList syntax

```
"FunctionList": [
  "ParentId": String,
  "FunctionArgs": List,
  "FunctionName": String
]  
```

## FunctionList properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

FunctionArgs

List

Yes

No

The configurations of each feature.

For more information, see [FunctionArgs properties](#2f80aae41ey5v).

FunctionName

String

Yes

No

The feature name.

None.

ParentId

String

No

No

The ID of the rule condition.

To create a rule condition, you can configure the **condition** feature that is described in the [Feature settings for domain names](/help/en/cdn/developer-reference/parameters-for-configuring-features-for-domain-names) topic. A rule condition can identify parameters that are included in requests and filter requests based on the identified parameters. Each rule condition has a ConfigId. For more information, see [Usage notes on ConfigId](/help/en/cdn/developer-reference/usage-notes-on-configid). You can reference ConfigId instead of ParentId in other features. This way, you can combine rule conditions and features for flexible configurations.

For more information, see [BatchSetCdnDomainConfig](/help/en/cdn/developer-reference/api-cdn-2018-05-10-batchsetcdndomainconfig).

## FunctionArgs syntax

```
"FunctionList": [
  "ArgValue": String,
  "ArgName": String
]  
```

## FunctionArgs properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

ArgName

String

Yes

No

The parameter value.

None.

ArgValue

String

Yes

No

The parameter name.

None.

## Return values

Fn::GetAtt

None.

## Examples

## YAML format

```
ROSTemplateFormatVersion: '2015-09-01'
Resources:
  DomainConfig:
    Type: ALIYUN::CDN::DomainConfig
    Properties:
      FunctionList:
        Ref: FunctionList
      DomainNames:
        Ref: DomainNames
Parameters:
  FunctionList:
    Type: List
    Description: function list
  DomainNames:
    Type: String
    Description: Your accelerated domain name, separated by commas in English.
Outputs: {}
```

## JSON format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Resources": {
    "DomainConfig": {
      "Type": "ALIYUN::CDN::DomainConfig",
      "Properties": {
        "FunctionList": {
          "Ref": "FunctionList"
        },
        "DomainNames": {
          "Ref": "DomainNames"
        }
      }
    }
  },
  "Parameters": {
    "FunctionList": {
      "Type": "List",
      "Description": "function list"
    },
    "DomainNames": {
      "Type": "String",
      "Description": "Your accelerated domain name, separated by commas in English."
    }
  },
  "Outputs": {}
}
```
