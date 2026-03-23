ALIYUN::CR::Repository is used to create an image repository.

## Syntax

```
{
  "Type": "ALIYUN::CR::Repository",
  "Properties": {
    "RepoNamespace": String,
    "Summary": String,
    "RepoType": String,
    "Detail": String,
    "RepoName": String,
    "RepoSource": Map,
    "InstanceId": String,
    "TagImmutability": Boolean
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

RepoNamespace

String

Yes

No

The name of the namespace to which the image repository belongs.

None.

Summary

String

Yes

Yes

The summary of the image repository.

The summary must be 1 to 100 characters in length.

RepoType

String

Yes

Yes

The type of the image repository.

Valid values:

-   PUBLIC: public image repository. Public image repositories support anonymous downloads.
    
-   PRIVATE: private image repository. You must log on to private image repositories before you download images from the repositories.
    

Detail

String

No

Yes

The description of the image repository.

The Markdown format is supported. The description can be up to 2,000 characters in length.

RepoName

String

Yes

No

The name of the image repository.

The name must be 2 to 64 characters in length, and can contain lowercase letters, digits, periods (.), hyphens (-), and underscores (\_).

RepoSource

Map

No

No

The source code repository and image build settings of the image repository.

For more information, see [RepoSource properties](#section-o7r-vke-vmg).

InstanceId

String

No

No

The ID of the instance.

Example: cri-xkx6vujuhay0\*\*\*\*.

TagImmutability

Boolean

No

Yes

Specifies whether the tag that is added to the image repository is immutable.

Valid values:

-   true
    
-   false
    

## RepoSource syntax

```
"RepoSource": {
  "SourceRepoNamespace": String,
  "SourceRepoName": String,
  "IsOversea": Boolean,
  "IsDisableCache": Boolean,
  "SourceRepoType": String,
  "IsAutoBuild": Boolean
}
```

## RepoSource properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

SourceRepoNamespace

String

Yes

No

The name of the namespace to which the source code repository belongs.

None.

SourceRepoName

String

Yes

No

The name of the source code repository.

None.

IsOversea

Boolean

Yes

No

Specifies whether to enable image build in data centers outside the Chinese mainland.

Valid values:

-   true
    
-   false
    

IsDisableCache

Boolean

Yes

No

Specifies whether to disable cache for image build.

Valid values:

-   true
    
-   false
    

SourceRepoType

String

Yes

No

The type of the source code repository.

Valid values:

-   CODE
    
-   GITHUB
    
-   GITLAB
    
-   BITBUCKET
    
-   CODEUP
    
-   GITEE
    

IsAutoBuild

Boolean

Yes

No

Specifies whether to enable automatic image build when code changes.

Valid values:

-   true
    
-   false
    

## Return values

Fn::GetAtt

-   RepoId: the ID of the image repository.
    
-   RepoName: the name of the image repository.
    
-   InstanceId: the ID of the instance.
    
-   RepoType: the type of the image repository.
    
-   RepoNamespace: the name of the namespace to which the image repository belongs.
    

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters: {}
Resources:
  Repository:
    Type: ALIYUN::CR::Repository
    Properties:
      RepoNamespace: DemoRepoNamespace
      Summary: test cr repository
      RepoType: PRIVATE
      RepoName: test_demo_repo
Outputs:
  RepoId:
    Description: The repo id
    Value:
      Fn::GetAtt:
        - Repository
        - RepoId
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
  },
  "Resources": {
    "Repository": {
      "Type": "ALIYUN::CR::Repository",
      "Properties": {
        "RepoNamespace": "DemoRepoNamespace",
        "Summary": "test cr repository",
        "RepoType": "PRIVATE",
        "RepoName": "test_demo_repo"
      }
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

For more examples, visit [Repository.json](https://github.com/aliyun/ros-templates/tree/master/ResourceTemplates/CR/JSON/Repository.json) and [Repository.yml](https://github.com/aliyun/ros-templates/tree/master/ResourceTemplates/CR/YAML/Repository.yml).
