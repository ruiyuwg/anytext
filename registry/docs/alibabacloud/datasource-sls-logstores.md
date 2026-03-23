DATASOURCE::SLS::Logstores is used to query Logstores.

## Syntax

```
{
  "Type": "DATASOURCE::SLS::Logstores",
  "Properties": {
    "Project": String,
    "LogstoreName": String,
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

Project

String

Yes

Yes

The project name.

None.

LogstoreName

String

No

Yes

The Logstore name.

Fuzzy match is supported.

For example, if you set the value to test, all Logstores whose name contains test are returned.

RefreshOptions

String

No

Yes

The refresh policy for data source resources when the stack is updated.

Valid values:

-   Never (default): does not refresh data source resources when the stack is updated.
    
-   Always: refreshes data source resources when the stack is updated.
    

## Return values (Fn::GetAtt)

Logstores: details of the Logstores.

**Property**

**Type**

**Description**

**Constraint**

Logstores

List

Details of the Logstores.

Example: `[ "apiserver-cb96ea09fdaa4454399833bc737de****", "audit-cb96ea09fdaa4454399833bc737de****", "ccm-cb96ea09fdaa4454399833bc737de****"]`.

## Examples

`JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "Project": {
      "Type": "String",
      "Description": "Project name."
    }
  },
  "Resources": {
    "Logstores": {
      "Type": "DATASOURCE::SLS::Logstores",
      "Properties": {
        "Project": {
          "Ref": "Project"
        }
      }
    }
  },
  "Outputs": {
    "Logstores": {
      "Description": "The list of logstores.",
      "Value": {
        "Fn::GetAtt": [
          "Logstores",
          "Logstores"
        ]
      }
    }
  }
}
```
