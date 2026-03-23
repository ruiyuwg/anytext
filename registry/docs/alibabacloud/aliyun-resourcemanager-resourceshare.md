ALIYUN::ResourceManager::ResourceShare is used to create a resource share.

## Syntax

```
{
  "Type": "ALIYUN::ResourceManager::ResourceShare",
  "Properties": {
    "ResourceShareName": String,
    "Targets": List,
    "Resources": List,
    "AllowExternalTargets": Boolean,
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

ResourceShareName

String

Yes

Yes

The name of the resource share.

The name must be 1 to 50 characters in length, and can contain letters, digits, periods (.), underscores (\_), and hyphens (-).

Targets

List

No

Yes

The principals.

A principal shares the resources of resource owners. In most cases, a principal is a member in a resource directory of the resource owner. A principal is indicated by its account ID. For more information about how to obtain the account IDs of members, see [View the detailed information of a member](/help/en/resource-management/resource-directory/user-guide/view-the-detailed-information-of-a-member#task-ig1-5vq-dhb).

Valid values: 1 to 5. That is, you can add up to five principals at a time.

Resources

List

No

Yes

The shared resources.

Valid values: 1 to 5. That is, you can add up to five resources at a time.

For more information, see [Resources properties](#section-uw7-zcp-7jb).

AllowExternalTargets

Boolean

No

No

Specifies whether resources in the resource share can be shared with accounts outside the resource directory.

Valid values:

-   true: Resources in the resource share can be shared with accounts in and outside the resource directory.
    
-   false (default): Resources in the resource share can be shared only with accounts in the resource directory.
    

PermissionNames

List

No

No

The names of the permissions on resource sharing.

If you leave this property empty, the system automatically associates the default permission for the specified resource type with the resource share.  

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

Example: `vsw-bp183p93qs667muql****`.

ResourceType

String

Yes

Yes

The type of the shared resource.

Set the value to vSwitch.

## Return values

Fn::GetAtt

ResourceShareId: the ID of the resource share.

## Examples

`YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  ResourceShareName:
    AllowedPattern: '[-a-zA-Z0-9_\.]{1,50}'
    Description: 'The name of the resource share.

      The name must be 1 to 50 characters in length.

      It can contain letters, digits, periods (.), underscores (_), and hyphens (-).'
    Type: String
  Resources:
    Description: ''
    MaxLength: 5
    Type: Json
  Targets:
    Description: 'The shared target.

      A shared target shares the resources of resource owners. You can share your
      resources

      only with the member accounts in your resource directory. A shared target is
      indicated

      by its account ID. For more information about how to obtain the ID, see View
      the basic information of a member account.'
    MaxLength: 5
    Type: Json
Resources:
  ResourceShare:
    Properties:
      ResourceShareName:
        Ref: ResourceShareName
      Resources:
        Ref: Resources
      Targets:
        Ref: Targets
    Type: ALIYUN::ResourceManager::ResourceShare
Outputs:
  ResourceShareId:
    Description: The ID of the resource share.
    Value:
      Fn::GetAtt:
      - ResourceShare
      - ResourceShareId
```

`JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "ResourceShareName": {
      "Type": "String",
      "Description": "The name of the resource share.\nThe name must be 1 to 50 characters in length.\nIt can contain letters, digits, periods (.), underscores (_), and hyphens (-).",
      "AllowedPattern": "[-a-zA-Z0-9_\\.]{1,50}"
    },
    "Targets": {
      "Type": "Json",
      "Description": "The shared target.\nA shared target shares the resources of resource owners. You can share your resources\nonly with the member accounts in your resource directory. A shared target is indicated\nby its account ID. For more information about how to obtain the ID, see View the basic information of a member account.",
      "MaxLength": 5
    },
    "Resources": {
      "Type": "Json",
      "Description": "",
      "MaxLength": 5
    }
  },
  "Resources": {
    "ResourceShare": {
      "Type": "ALIYUN::ResourceManager::ResourceShare",
      "Properties": {
        "ResourceShareName": {
          "Ref": "ResourceShareName"
        },
        "Targets": {
          "Ref": "Targets"
        },
        "Resources": {
          "Ref": "Resources"
        }
      }
    }
  },
  "Outputs": {
    "ResourceShareId": {
      "Description": "The ID of the resource share.",
      "Value": {
        "Fn::GetAtt": [
          "ResourceShare",
          "ResourceShareId"
        ]
      }
    }
  }
}
```
