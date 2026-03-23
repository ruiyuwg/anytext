DATASOURCE::CR::Repositories is used to query the information about image repositories.

## Syntax

```
{
  "Type": "DATASOURCE::CR::Repositories",
  "Properties": {
    "Status": String,
    "RepoNamespace": String,
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

Status

String

No

Yes

The status of the image repository.

None.

RepoNamespace

String

No

Yes

The name of the namespace to which the image repository belongs.

None.

RefreshOptions

String

No

Yes

The refresh policy for data source resources when the stack is updated.

Valid values:

-   Never (default): does not refresh data source resources when the stack is updated.
    
-   Always: refreshes data source resources when the stack is updated.
    

## Return values (Fn::GetAtt)

-   Repos: details of the image repositories.
    
-   RepoNames: the names of the image repositories.
    

**Property**

**Type**

**Description**

**Constraint**

RepoNames

List

The names of the image repositories.

None.

Repos

List

Details of the image repositories.

None.

Summary

String

The summary of the image repository.

None.

RepoId

String

The unique ID of the image repository.

None.

RepoNamespace

String

The name of the namespace to which the image repository belongs.

None.

RepoName

String

The name of the image repository.

None.

RepoOriginType

String

The type of the image repository.

None.

RepoBuildType

String

The build type of the image repository.

Valid values:

-   AUTO: The image repository is automatically built.
    
-   MANUAL: The image repository is manually built.
    

RepoType

String

The type of the image repository.

None.

RepoStatus

String

The status of the image repository.

None.

RepoAuthorizeType

String

The permission type of the image repository.

None.

RegionId

String

The region.

None.

RepoDomainList

List

The domain names of the image repository.

Example: `{ "Internal": "registry-internal.cn-XXXXXXX.aliyuncs.com", "Vpc": "registry-vpc.cn-XXXXXXX.aliyuncs.com", "Public": "registry.cn-XXXXXXX.aliyuncs.com" }`.

Stars

Number

The number of likes.

None.

Downloads

Number

The number of downloads from the image repository.

None.

Logo

String

The icon of the image repository.

None.

GmtCreate

String

The time when the image repository was created.

None.

GmtModified

String

The time when the image repository was modified.

None.

## Examples

## `JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "RepoNamespace": {
      "Type": "String",
      "Description": "The namespace of repository."
    }
  },
  "Resources": {
    "Repositories": {
      "Type": "DATASOURCE::CR::Repositories",
      "Properties": {
        "RepoNamespace": {
          "Ref": "RepoNamespace"
        }
      }
    }
  },
  "Outputs": {
    "Repos": {
      "Description": "The list of repositories.",
      "Value": {
        "Fn::GetAtt": [
          "Repositories",
          "Repos"
        ]
      }
    },
    "RepoNames": {
      "Description": "The list of repository names.",
      "Value": {
        "Fn::GetAtt": [
          "Repositories",
          "RepoNames"
        ]
      }
    }
  }
}
```

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  RepoNamespace:
    Type: String
    Description: The namespace of repository.
Resources:
  Repositories:
    Type: DATASOURCE::CR::Repositories
    Properties:
      RepoNamespace:
        Ref: RepoNamespace
Outputs:
  Repos:
    Description: The list of repositories.
    Value:
      Fn::GetAtt:
        - Repositories
        - Repos
  RepoNames:
    Description: The list of repository names.
    Value:
      Fn::GetAtt:
        - Repositories
        - RepoNames
```
