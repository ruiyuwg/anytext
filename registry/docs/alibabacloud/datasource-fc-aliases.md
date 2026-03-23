DATASOURCE::FC::Aliases is used to query the aliases of a Function Compute service.

## Syntax

```
{
  "Type": "DATASOURCE::FC::Aliases",
  "Properties": {
    "ServiceName": String,
    "Prefix": String,
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

ServiceName

String

Yes

Yes

The service name.

None.

Prefix

String

No

Yes

The prefix of the alias names to be returned.

The names must start with the value of Prefix.

For example, if you set Prefix to a, the alias names that start with a are returned.

RefreshOptions

String

No

Yes

The refresh policy for data source resources when the stack is updated.

Valid values:

-   Never (default): does not refresh data source resources when the stack is updated.
    
-   Always: refreshes data source resources when the stack is updated.
    

## Return values (Fn::GetAtt)

-   AliasNames: the names of the aliases.
    
-   Aliases: details of the aliases.
    

**Property**

**Type**

**Description**

**Constraint**

AliasNames

List

The names of the aliases.

None.

Aliases

List

Details of the aliases.

None.

AliasName

String

The alias name.

None.

Description

String

The description of the alias.

None.

CreatedTime

String

The time when the alias was created.

None.

LastModifiedTime

String

The most recent time when the alias was modified.

None.

AdditionalVersionWeight

Map

The canary release version to which the alias points and the weight of the canary release version.

The value of this property consists of the canary release version and the weight of the canary release version. The canary release version takes effect only when the function is invoked.

For example, a value of `2:0.05` indicates the following information: When a function is invoked, Version 2 is the canary release version, 5% of the traffic is distributed to the canary release version, and 95% of the traffic is distributed to the major version.

Example: `{"Float":1}`.

VersionId

String

The version to which the alias points.

None.

## Examples

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "ServiceName": {
      "Type": "String",
      "Description": "Service name."
    }
  },
  "Resources": {
    "Aliases": {
      "Type": "DATASOURCE::FC::Aliases",
      "Properties": {
        "ServiceName": {
          "Ref": "ServiceName"
        }
      }
    }
  },
  "Outputs": {
    "AliasNames": {
      "Description": "The list of alias names.",
      "Value": {
        "Fn::GetAtt": [
          "Aliases",
          "AliasNames"
        ]
      }
    },
    "Aliases": {
      "Description": "The list of aliases.",
      "Value": {
        "Fn::GetAtt": [
          "Aliases",
          "Aliases"
        ]
      }
    }
  }
}
```

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  ServiceName:
    Type: String
    Description: Service name.
Resources:
  Aliases:
    Type: DATASOURCE::FC::Aliases
    Properties:
      ServiceName:
        Ref: ServiceName
Outputs:
  AliasNames:
    Description: The list of alias names.
    Value:
      Fn::GetAtt:
        - Aliases
        - AliasNames
  Aliases:
    Description: The list of aliases.
    Value:
      Fn::GetAtt:
        - Aliases
        - Aliases
                    
```
