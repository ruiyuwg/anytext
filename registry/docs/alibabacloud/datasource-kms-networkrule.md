DATASOURCE::KMS::NetworkRule is used to query the information about a network access rule.

## Syntax

```
{
  "Type": "DATASOURCE::KMS::NetworkRule",
  "Properties": {
    "NetworkRuleName": String,
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

NetworkRuleName

String

Yes

Yes

The name of the network access rule.

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

-   Description: the description.
    
-   SourcePrivateIp: the private IP address or private CIDR block.
    

## Examples

-   `YAML` format
    
    ```
    ROSTemplateFormatVersion: '2015-09-01'
    Parameters:
      NetworkRuleName:
        Type: String
        Description:
          en: The name of the access control rule.
        Required: true
    Resources:
      ExtensionDataSource:
        Type: DATASOURCE::KMS::NetworkRule
        Properties:
          NetworkRuleName:
            Ref: NetworkRuleName
    Outputs:
      Description:
        Description: The access control rule description.
        Value:
          Fn::GetAtt:
            - ExtensionDataSource
            - Description
      SourcePrivateIp:
        Description: The private IP address or private CIDR block.
        Value:
          Fn::GetAtt:
            - ExtensionDataSource
            - SourcePrivateIp
    ```
    
-   `JSON` format
    
    ```
    {
      "ROSTemplateFormatVersion": "2015-09-01",
      "Parameters": {
        "NetworkRuleName": {
          "Type": "String",
          "Description": {
            "en": "The name of the access control rule."
          },
          "Required": true
        }
      },
      "Resources": {
        "ExtensionDataSource": {
          "Type": "DATASOURCE::KMS::NetworkRule",
          "Properties": {
            "NetworkRuleName": {
              "Ref": "NetworkRuleName"
            }
          }
        }
      },
      "Outputs": {
        "Description": {
          "Description": "The access control rule description.",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionDataSource",
              "Description"
            ]
          }
        },
        "SourcePrivateIp": {
          "Description": "The private IP address or private CIDR block.",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionDataSource",
              "SourcePrivateIp"
            ]
          }
        }
      }
    }
                            
    ```
