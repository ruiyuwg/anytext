ALIYUN::CR::Namespace is used to create a namespace.

## Syntax

```
{
  "Type": "ALIYUN::CR::Namespace",
  "Properties": {
    "Namespace": String,
    "DefaultVisibility": String,
    "AutoCreate": Boolean,
    "InstanceId": String    
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

Namespace

String

Yes

No

The name of the namespace.

The name must be 2 to 30 characters in length. It cannot start with a hyphen (-) or an underscore (\_). It can contain lowercase letters, digits, hyphens (-), and underscores (\_).

DefaultVisibility

String

No

Yes

The default repository type.

Valid values:

-   PUBLIC
    
-   PRIVATE
    

AutoCreate

Boolean

No

Yes

Specifies whether the system automatically creates a repository.

Valid values:

-   true: The system automatically creates a repository.
    
-   false: You manually create a repository.
    

InstanceId

String

No

No

The instance ID.

Example: cri-xkx6vujuhay0\*\*\*\*.

## Return values

Fn::GetAtt

-   NamespaceId: the namespace ID.
    
-   InstanceId: the instance ID.
    
-   Namespace: the name of the namespace.
    

## Examples

-   `YAML` format
    
    ```
    ROSTemplateFormatVersion: '2015-09-01'
    Parameters: {}
    Resources:
      NameSpace:
        Type: ALIYUN::CR::Namespace
        Properties:
          AutoCreate: false
          DefaultVisibility: PRIVATE
          Namespace: test_demo_namespace
      Repository:
        Type: ALIYUN::CR::Repository
        Properties:
          RepoNamespace:
            Fn::GetAtt:
              - NameSpace
              - Namespace
          Summary: test cr repository
          RepoType: PRIVATE
          RepoName: test_demo_repo
        DependsOn: NameSpace
    Outputs:
      RepoId:
        Description: The repo id
        Value:
          Fn::GetAtt:
            - Repository
            - RepoId
    ```
    
-   `JSON` format
    
    ```
    {
      "ROSTemplateFormatVersion": "2015-09-01",
      "Parameters": {},
      "Resources": {
        "NameSpace": {
          "Type": "ALIYUN::CR::Namespace",
          "Properties": {
            "AutoCreate": false,
            "DefaultVisibility": "PRIVATE",
            "Namespace": "test_demo_namespace"
          }
        },
        "Repository": {
          "Type": "ALIYUN::CR::Repository",
          "Properties": {
            "RepoNamespace": {
              "Fn::GetAtt": [
                "NameSpace",
                "Namespace"
              ]
            },
            "Summary": "test cr repository",
            "RepoType": "PRIVATE",
            "RepoName": "test_demo_repo"
          },
          "DependsOn": "NameSpace"
        }
      },
      "Outputs": {
        "RepoId": {
          "Description": "The repo id",
          "Value": {
            "Fn::GetAtt": [
              "Repository",
              "RepoId"
            ]
          }
        }
      }
    }
    ```
