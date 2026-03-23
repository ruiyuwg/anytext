The ALIYUN::DataLakeFormation::Permissions resource type is used to grant permissions in a batch.

## Syntax

```
{
  "Type": "ALIYUN::DataLakeFormation::Permissions",
  "Properties": {
    "CatalogId": String,
    "RefreshUserSync": Boolean,
    "Permissions": List
  }
}
```

## Properties

**Property name**

**Type**

**Required**

**Update allowed**

**Description**

**Constraints**

CatalogId

String

Yes

No

The ID of the data catalog.

None

Permissions

List

Yes

Yes

The list of permissions.

For more information, see [the Permissions property](#6579c36c28q8k).

RefreshUserSync

Boolean

No

No

Specifies whether to refresh the user synchronization before creating permissions.

A newly created Resource Access Management (RAM) user may not be immediately synchronized. A refresh is required to ensure the user is available. Set this parameter to true to enable user synchronization refresh, which may cause a 30 second wait. Set this parameter to false to skip the refresh and avoid the 30 second wait. Default value: false.

## Permissions syntax

```
"Permissions": [
  {
    "Access": String,
    "ResourceType": String,
    "Principal": String
  }
]
```

## Permissions properties

**Property name**

**Type**

**Required**

**Update allowed**

**Description**

**Constraints**

Access

String

Yes

No

The access type.

Valid values:

-   ALL
    
-   GRANT
    
-   CREATEDATABASE
    
-   ALTER
    
-   DROP
    
-   UPDATE
    
-   SELECT
    
-   DESCRIBE
    
-   LIST
    
-   CREATETABLE
    

Principal

String

Yes

No

The user resource descriptor.

None

ResourceType

String

Yes

No

The resource type of the permission.

Valid values:

-   CATALOG
    
-   CATALOG\_ALL
    

## Return value

Fn::GetAtt

None

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  Permissions:
    AssociationPropertyMetadata:
      Parameters:
        Access:
          Type: String
          Description:
            en: The access action of the granted permission.
          AllowedValues:
            - ALL
            - GRANT
            - CREATEDATABASE
            - ALTER
            - DROP
            - UPDATE
            - SELECT
            - DESCRIBE
            - LIST
            - CREATETABLE
          Required: true
        ResourceType:
          Type: String
          Description:
            en: The resource type of the granted permission.
          AllowedValues:
            - CATALOG
            - CATALOG_ALL
          Required: true
        Principal:
          Type: String
          Description:
            en: The role of the granted permissions.
          Required: true
    AssociationProperty: List[Parameters]
    Type: Json
    Description:
      en: The permissions list.
    Required: true
    MinLength: 1
    MaxLength: 10
  CatalogId:
    Type: String
    Description:
      en: The catalog id.
    Required: true
Resources:
  DataLakeFormationPermissions:
    Type: ALIYUN::DataLakeFormation::Permissions
    Properties:
      Permissions:
        Ref: Permissions
      CatalogId:
        Ref: CatalogId
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "Permissions": {
      "AssociationPropertyMetadata": {
        "Parameters": {
          "Access": {
            "Type": "String",
            "Description": {
              "en": "The access action of the granted permission."
            },
            "AllowedValues": [
              "ALL",
              "GRANT",
              "CREATEDATABASE",
              "ALTER",
              "DROP",
              "UPDATE",
              "SELECT",
              "DESCRIBE",
              "LIST",
              "CREATETABLE"
            ],
            "Required": true
          },
          "ResourceType": {
            "Type": "String",
            "Description": {
              "en": "The resource type of the granted permission."
            },
            "AllowedValues": [
              "CATALOG",
              "CATALOG_ALL"
            ],
            "Required": true
          },
          "Principal": {
            "Type": "String",
            "Description": {
              "en": "The role of the granted permissions."
            },
            "Required": true
          }
        }
      },
      "AssociationProperty": "List[Parameters]",
      "Type": "Json",
      "Description": {
        "en": "The permissions list."
      },
      "Required": true,
      "MinLength": 1,
      "MaxLength": 10
    },
    "CatalogId": {
      "Type": "String",
      "Description": {
        "en": "The catalog id."
      },
      "Required": true
    }
  },
  "Resources": {
    "DataLakeFormationPermissions": {
      "Type": "ALIYUN::DataLakeFormation::Permissions",
      "Properties": {
        "Permissions": {
          "Ref": "Permissions"
        },
        "CatalogId": {
          "Ref": "CatalogId"
        }
      }
    }
  }
}
                        
```
