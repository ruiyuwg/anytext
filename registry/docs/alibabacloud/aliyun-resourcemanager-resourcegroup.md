The ALIYUN::ResourceManager::ResourceGroup resource type creates a resource group.

## Syntax

```
{
  "Type": "ALIYUN::ResourceManager::ResourceGroup",
  "Properties": {
    "DisplayName": String,
    "Name": String,
    "Tags": List
  }
}
```

## Properties

**Property name**

**Type**

**Required**

**Update allowed**

**Description**

**Constraint**

DisplayName

String

Yes

Yes

The display name of the resource group.

Length: 1 to 30 characters. Can contain Chinese characters, letters, digits, and hyphens (-).

Name

String

Yes

No

The unique identifier of the resource group.

Length: 3 to 12 characters. Must start with a letter. Can contain letters, digits, and hyphens (-).

Tags

List

No

Yes

The tags.

For more information, see [Tags property](#section-ula-xea-u9c).

## Tags syntax

```
"Tags": [
  {
    "Key": String,
    "Value": String
  }
]
```

## Tags property

**Property name**

**Type**

**Required**

**Update allowed**

**Description**

**Constraint**

Key

String

Yes

No

The tag key.

None

Value

String

No

No

The tag value.

None

## Return values

Fn::GetAtt

-   RegionStatuses: The status of the resource group in each region.
    
-   AccountId: The Alibaba Cloud account ID of the resource group.
    
-   DisplayName: The display name of the resource group.
    
-   Id: The ID of the resource group.
    
-   Name: The unique identifier of the resource group.
    
-   ResourceGroupId: The ID of the resource group.
    

## Examples

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "DisplayName": {
      "Type": "String",
      "Description": "The display name of the resource group"
    },
    "Name": {
      "Type": "String",
      "Description": "The unique identifier of the resource group"
    }
  },
  "Resources": {
    "ResourceManagerResourceGroup": {
      "Type": "ALIYUN::ResourceManager::ResourceGroup",
      "Properties": {
        "DisplayName": {
          "Ref": "DisplayName"
        },
        "Name": {
          "Ref": "Name"
        }
      }
    }
  },
  "Outputs": {
    "RegionStatuses": {
      "Description": "The status of the resource group in all regions",
      "Value": {
        "Fn::GetAtt": [
          "ResourceManagerResourceGroup",
          "RegionStatuses"
        ]
      }
    },
    "AccountId": {
      "Description": "The ID of the Alibaba Cloud account to which the resource group belongs",
      "Value": {
        "Fn::GetAtt": [
          "ResourceManagerResourceGroup",
          "AccountId"
        ]
      }
    },
    "DisplayName": {
      "Description": "The display name of the resource group",
      "Value": {
        "Fn::GetAtt": [
          "ResourceManagerResourceGroup",
          "DisplayName"
        ]
      }
    },
    "Id": {
      "Description": "The ID of the resource group",
      "Value": {
        "Fn::GetAtt": [
          "ResourceManagerResourceGroup",
          "Id"
        ]
      }
    },
    "Name": {
      "Description": "The unique identifier of the resource group",
      "Value": {
        "Fn::GetAtt": [
          "ResourceManagerResourceGroup",
          "Name"
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
 DisplayName:
  Type: String
  Description: The display name of the resource group
 Name:
  Type: String
  Description: The unique identifier of the resource group
Resources:
 ResourceManagerResourceGroup:
  Type: 'ALIYUN::ResourceManager::ResourceGroup'
  Properties:
   DisplayName:
    Ref: DisplayName
   Name:
    Ref: Name
Outputs:
 RegionStatuses:
  Description: The status of the resource group in all regions
  Value:
   'Fn::GetAtt':
    - ResourceManagerResourceGroup
    - RegionStatuses
 AccountId:
  Description: The ID of the Alibaba Cloud account to which the resource group belongs
  Value:
   'Fn::GetAtt':
    - ResourceManagerResourceGroup
    - AccountId
 DisplayName:
  Description: The display name of the resource group
  Value:
   'Fn::GetAtt':
    - ResourceManagerResourceGroup
    - DisplayName
 Id:
  Description: The ID of the resource group
  Value:
   'Fn::GetAtt':
    - ResourceManagerResourceGroup
    - Id
 Name:
  Description: The unique identifier of the resource group
  Value:
   'Fn::GetAtt':
    - ResourceManagerResourceGroup
    - Name
```
