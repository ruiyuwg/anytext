DATASOURCE::ComputeNest::ServiceInstances is used to query the information about service instances.

## Syntax

```
{
  "Type": "DATASOURCE::ComputeNest::ServiceInstances",
  "Properties": {
    "ResourceGroupId": String,
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

ResourceGroupId

String

No

Yes

The ID of the resource group.

None.

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

-   ServiceInstances: details of the service instances.
    
-   ServiceInstanceIds: the IDs of the service instances.
    

**Property**

**Type**

**Description**

**Constraint**

ServiceInstanceIds

List

The IDs of the service instances.

None.

ServiceInstances

List

Details of the service instances.

None.

Status

String

The status of the service instance.

None.

TemplateName

String

The template name.

None.

Tags

List

The custom tags.

None.

ServiceInstanceName

String

The name of the service instance.

None.

ResourceGroupId

String

The ID of the resource group.

None.

Service

Map

The service.

None.

Source

String

The source from which the service instance is created.

None.

ServiceInstanceId

String

The ID of the service instance.

None.

## Examples

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Resources:
  ExtensionDataSource:
    Type: DATASOURCE::ComputeNest::ServiceInstances
Outputs:
  ServiceInstanceIds:
    Description: The list of service instance IDs.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - ServiceInstanceIds
  ServiceInstances:
    Description: The list of service instances.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - ServiceInstances
                        
```

## `JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Resources": {
    "ExtensionDataSource": {
      "Type": "DATASOURCE::ComputeNest::ServiceInstances"
    }
  },
  "Outputs": {
    "ServiceInstances": {
      "Description": "The list of service instances.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "ServiceInstances"
        ]
      }
    },
    "ServiceInstanceIds": {
      "Description": "The list of service instance IDs.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "ServiceInstanceIds"
        ]
      }
    }
  }
}
                        
```
