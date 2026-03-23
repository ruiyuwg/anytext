Creates a prompt template.

## Operation description

This API operation does not support creating text-to-image prompt templates.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/bailian/2023-12-29/CreatePromptTemplate)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/bailian/2023-12-29/CreatePromptTemplate)

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

sfm:CreatePromptTemplate

create

\*All Resource

`*`

None

None

## Request syntax

```
POST /{workspaceId}/promptTemplates HTTP/1.1
```

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

workspaceId

string

Yes

The ID of the workspace.

llm-czal8nvvwb8d4xxx

name

string

Yes

The name of the template.

小红书文案助手

content

string

Yes

The content of the prompt template.

请写一篇小红书种草笔记，增加丰富的emoji元素，结尾作总结，并加上相关标签。主题为：${theme}

## Response elements

**Parameter**

**Type**

**Description**

**Example**

object

Schema of Response

promptTemplateId

string

The ID of the prompt template.

6e49109bfeb94a39bb268f4e483ccxxx

requestId

string

The ID of the request.

FE9B6CBF-47E6-5D76-9C5D-B814DD5ABxxx

## Examples

Success response

`JSON` format

```
{
  "promptTemplateId": "6e49109bfeb94a39bb268f4e483ccxxx",
  "requestId": "FE9B6CBF-47E6-5D76-9C5D-B814DD5ABxxx\n"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

PromptTemplate.ContentInvalid

Input parameter Content is invalid.

400

PromptTemplate.NameInvalid

Input parameter Name is invalid.

500

PromptTemplate.InternalError

Prompt template service inner exception.

See [Error Codes](https://api.alibabacloud.com/document/bailian/2023-12-29/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/bailian/2023-12-29/CreatePromptTemplate#workbench-doc-change-demo) for a complete list.
