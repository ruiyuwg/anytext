Creates a project.

## Operation description

-   Project names must be unique within the same region.
    
-   By default, you can create a maximum of 100 projects. To increase this limit, submit a ticket or submit a request in DingTalk group 88490020073.
    
-   After you create a project, you can create other Intelligent Media Management resources:
    
    -   [Create a dataset](/help/en/imm/developer-reference/api-imm-2020-09-30-createdataset)
        
    -   [Create a trigger](/help/en/imm/developer-reference/api-imm-2020-09-30-createtrigger)
        
    -   [Create a batch processing job](/help/en/imm/developer-reference/api-imm-2020-09-30-createbatch)
        
    -   [Create a binding task](/help/en/imm/developer-reference/api-imm-2020-09-30-createbinding)
        

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/imm/2020-09-30/CreateProject)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/imm/2020-09-30/CreateProject)

## **RAM authorization**

The table below describes the authorization required to call this API. You can define it in a Resource Access Management (RAM) policy. The table's columns are detailed below:

-   Action: The actions can be used in the `Action` element of RAM permission policy statements to grant permissions to perform the operation.
    
-   API: The API that you can call to perform the action.
    
-   Access level: The predefined level of access granted for each API. Valid values: create, list, get, update, and delete.
    
-   Resource type: The type of the resource that supports authorization to perform the action. It indicates if the action supports resource-level permission. The specified resource must be compatible with the action. Otherwise, the policy will be ineffective.
    
    -   For APIs with resource-level permissions, required resource types are marked with an asterisk (\*). Specify the corresponding Alibaba Cloud Resource Name (ARN) in the `Resource` element of the policy.
        
    -   For APIs without resource-level permissions, it is shown as All Resources. Use an asterisk (**\***) in the `Resource` element of the policy.
        
-   Condition key: The condition keys defined by the service. The key allows for granular control, applying to either actions alone or actions associated with specific resources. In addition to service-specific condition keys, Alibaba Cloud provides a set of [common condition keys](/help/en/ram/policy-elements#section-jix-u0j-2ms) applicable across all RAM-supported services.
    
-   Dependent action: The dependent actions required to run the action. To complete the action, the RAM user or the RAM role must have the permissions to perform all dependent actions.
    

**Action**

**Access level**

**Resource type**

**Condition key**

**Dependent action**

imm:CreateProject

create

\*Project

`acs:imm:{#regionId}:{#accountId}:project/{#ProjectName}`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

ProjectName

string

Yes

The project name. The naming convention is as follows:

-   The name must be 1 to 128 characters in length.
    
-   It can contain only letters, digits, hyphens (-), and underscores (\_).
    
-   It must start with a letter or an underscore (\_).
    

test-project

Description

string

No

The description of the project. It can be 1 to 256 characters long. The default value is empty.

immtest

ServiceRole

string

No

The service role that grants Intelligent Media Management (IMM) permissions to access other cloud resources, such as Object Storage Service (OSS). The default value is `AliyunIMMDefaultRole`.

To use a custom service role, create a service role in the Resource Access Management (RAM) console and grant it the required permissions. For more information, see [Grant permissions to a role](/help/en/imm/user-guide/grant-permissions-to-a-ram-user).

AliyunIMMDefaultRole

TemplateId

string

No

The workflow template ID. The default value is empty. For more information, see [Workflow templates and operators](/help/en/imm/user-guide/workflow-templates-and-operators).

Official:ImageManagement

ProjectMaxDatasetCount

integer

No

The maximum number of datasets in the project. The value must be between 1 and 1,000,000,000. The default value is 1,000,000,000.

1000000000

DatasetMaxBindCount

integer

No

The maximum number of bindings for each dataset. The value must be between 1 and 10. The default value is 10.

10

DatasetMaxFileCount

integer

No

The maximum number of files in each dataset. The value must be between 1 and 100,000,000. The default value is 10,000,000,000.

100000000

DatasetMaxEntityCount

integer

No

The maximum number of metadata entities in each dataset. The default value is 10,000,000,000.

**Note**

This configuration is reserved and is not currently enforced.

10000000000

DatasetMaxRelationCount

integer

No

The maximum number of metadata relations in each dataset. The default value is 100,000,000,000.

**Note**

This configuration is reserved and is not currently enforced.

100000000000

DatasetMaxTotalFileSize

integer

No

The maximum total size of files in each dataset, in bytes. If this limit is exceeded, you cannot add more indexes. The default value is 90,000,000,000,000,000.

90000000000000000

Tag

array<object>

No

A list of tags.

object

No

Tag information.

Key

string

No

The tag key.

TestKey

Value

string

No

The tag value.

TestValue

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The response struct.

RequestId

string

The request ID.

7F7D235C-76FF-4B65-800C-8238AE3F\*\*\*\*

Project

[Project](/help/en/imm/developer-reference/api-imm-2020-09-30-struct-project)

The project information. For more information, see Project.

## Examples

Success response

`JSON` format

```
{
  "RequestId": "7F7D235C-76FF-4B65-800C-8238AE3F****",
  "Project": {
    "ProjectName": "immtest",
    "ServiceRole": "AliyunIMMDefaultRole",
    "TemplateId": "Official:ImageManagement",
    "CreateTime": "2021-06-29T14:50:13.011643661+08:00",
    "UpdateTime": "2021-06-29T14:50:13.011643661+08:00",
    "Description": "测试项目",
    "ProjectQueriesPerSecond": 100,
    "EngineConcurrency": 100,
    "ProjectMaxDatasetCount": 1000000000,
    "DatasetMaxBindCount": 10,
    "DatasetMaxFileCount": 100000000,
    "DatasetMaxEntityCount": 10000000000,
    "DatasetMaxRelationCount": 100000000000,
    "DatasetMaxTotalFileSize": 90000000000000000,
    "DatasetCount": 5,
    "FileCount": 10,
    "TotalFileSize": 100000,
    "Tags": [
      {
        "TagKey": "TestKey",
        "TagValue": "TestValue"
      }
    ]
  }
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/imm/2020-09-30/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/imm/2020-09-30/CreateProject#workbench-doc-change-demo) for a complete list.
