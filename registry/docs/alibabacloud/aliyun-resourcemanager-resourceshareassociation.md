ALIYUN::ResourceManager::ResourceShareAssociation is used to associate a shared resource or a resource user.

## Syntax

```
{
  "Type": "ALIYUN::ResourceManager::ResourceShareAssociation",
  "Properties": {
    "ResourceShareId": String,
    "Targets": List,
    "Resources": List,
    "PermissionNames": List
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

ResourceShareId

String

Yes

No

The ID of the resource share.

None.

Targets

List

No

Yes

The ID of the principal.

Valid values:

-   If the value of `AllowExternalTargets` for the resource share is `false`, the resource share supports only resource sharing within a resource directory. In this case, you can set this property to the ID of the resource directory, ID of a folder in the resource directory, or ID of a member in the resource directory.
    
-   If the value of `AllowExternalTargets` for the resource share is `true`, the resource share supports both resource sharing within a resource directory and resource sharing outside a resource directory. In this case, you can set this property to the ID of an independent Alibaba Cloud account, ID of the resource directory, ID of a folder in the resource directory, or ID of a member in the resource directory.
    

**Note**

You can specify up to five IDs of principals.

Resources

List

No

Yes

The resources.

You can specify up to five resources For more information, see [Resources properties](#db47ce3068wmc).

PermissionNames

List

No

No

The name of a permission.

If you do not enter a name, the system automatically fills the name of the default permission that is associated with the resource type. For more information, see [Permissions for resource sharing](/help/en/resource-management/resource-sharing/user-guide/permissions-for-resource-sharing). You can specify up to five names.

## Resources syntax

```
"Resources": [
  {
    "ResourceId": String,
    "ResourceType": String
  }
]
```

## Resources properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

ResourceId

String

Yes

Yes

The ID of the shared resource.

You can specify up to five IDs at a time.

ResourceType

String

Yes

Yes

The type of the shared resource.

You can specify up to five shared resources at a time. For more information about the types of resources that can be shared, see [Services that work with Resource Sharing](/help/en/resource-management/resource-sharing/product-overview/services-that-work-with-resource-sharing).

**Note**

If you specify ResourceType, you must also specify ResourceId.

## Return values

Fn::GetAtt

ResourceShareId: the ID of the resource share.

## Examples

-   `YAML` format
    
    ```
    ROSTemplateFormatVersion: '2015-09-01'
    Parameters:
      PermissionNames:
        AssociationProperty: List[Parameter]
        AssociationPropertyMetadata:
          Parameter:
            Type: String
        Description:
          en: Sharing permission name. When empty, the system automatically binds the
            default permissions associated with the resource type.
        MaxLength: 6
        Type: Json
      ResourceShareId:
        Description:
          en: The ID of the resource share.
        Type: String
      Resources:
        AssociationProperty: List[Parameter]
        AssociationPropertyMetadata:
          Parameter:
            AssociationPropertyMetadata:
              Parameters:
                ResourceId:
                  Description:
                    en: The ID of the shared resource.
                  Type: String
                ResourceType:
                  Description:
                    en: 'The type of the shared resource.
    
                      Support resource type include:
    
                      VPC: VSwitch, PrefixList, PublicIpAddressPool
    
                      ROS: ROSTemplate
    
                      ServiceCatalog: ServiceCatalogPortfolio
    
                      ECS: Image, Snapshot
    
                      KMS: KMSInstance'
                  Type: String
            Type: Json
        MaxLength: 5
        Type: Json
      Targets:
        AssociationProperty: List[Parameter]
        AssociationPropertyMetadata:
          Parameter:
            Type: String
        Description:
          en: 'The shared target.
    
            A shared target shares the resources of resource owners. You can share your
            resources
    
            only with the member accounts in your resource directory. A shared target
            is indicated
    
            by its account ID. For more information about how to obtain the ID, see View
            the basic information of a member account.'
        MaxLength: 5
        Type: Json
    Resources:
      ResourceShareAssociation:
        Properties:
          PermissionNames:
            Ref: PermissionNames
          ResourceShareId:
            Ref: ResourceShareId
          Resources:
            Ref: Resources
          Targets:
            Ref: Targets
        Type: ALIYUN::ResourceManager::ResourceShareAssociation
    Outputs:
      ResourceShareId:
        Description: The ID of the resource share.
        Value:
          Fn::GetAtt:
          - ResourceShareAssociation
          - ResourceShareId
                            
    ```
    
-   `JSON` format
    
    ```
    {
      "ROSTemplateFormatVersion": "2015-09-01",
      "Parameters": {
        "ResourceShareId": {
          "Type": "String",
          "Description": {
            "en": "The ID of the resource share."
          }
        },
        "Targets": {
          "AssociationPropertyMetadata": {
            "Parameter": {
              "Type": "String"
            }
          },
          "AssociationProperty": "List[Parameter]",
          "Type": "Json",
          "Description": {
            "en": "The shared target.\nA shared target shares the resources of resource owners. You can share your resources\nonly with the member accounts in your resource directory. A shared target is indicated\nby its account ID. For more information about how to obtain the ID, see View the basic information of a member account."
          },
          "MaxLength": 5
        },
        "Resources": {
          "AssociationPropertyMetadata": {
            "Parameter": {
              "AssociationPropertyMetadata": {
                "Parameters": {
                  "ResourceId": {
                    "Type": "String",
                    "Description": {
                      "en": "The ID of the shared resource."
                    }
                  },
                  "ResourceType": {
                    "Type": "String",
                    "Description": {
                      "en": "The type of the shared resource.\nSupport resource type include:\nVPC: VSwitch, PrefixList, PublicIpAddressPool\nROS: ROSTemplate\nServiceCatalog: ServiceCatalogPortfolio\nECS: Image, Snapshot\nKMS: KMSInstance"
                    }
                  }
                }
              },
              "Type": "Json"
            }
          },
          "AssociationProperty": "List[Parameter]",
          "Type": "Json",
          "MaxLength": 5
        },
        "PermissionNames": {
          "AssociationPropertyMetadata": {
            "Parameter": {
              "Type": "String"
            }
          },
          "AssociationProperty": "List[Parameter]",
          "Type": "Json",
          "Description": {
            "en": "Sharing permission name. When empty, the system automatically binds the default permissions associated with the resource type."
          },
          "MaxLength": 6
        }
      },
      "Resources": {
        "ResourceShareAssociation": {
          "Type": "ALIYUN::ResourceManager::ResourceShareAssociation",
          "Properties": {
            "ResourceShareId": {
              "Ref": "ResourceShareId"
            },
            "Targets": {
              "Ref": "Targets"
            },
            "Resources": {
              "Ref": "Resources"
            },
            "PermissionNames": {
              "Ref": "PermissionNames"
            }
          }
        }
      },
      "Outputs": {
        "ResourceShareId": {
          "Description": "The ID of the resource share.",
          "Value": {
            "Fn::GetAtt": [
              "ResourceShareAssociation",
              "ResourceShareId"
            ]
          }
        }
      }
    }
                            
    ```
