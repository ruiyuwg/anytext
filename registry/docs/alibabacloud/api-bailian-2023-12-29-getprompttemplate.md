Obtains a prompt template based on the template ID.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/bailian/2023-12-29/GetPromptTemplate)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/bailian/2023-12-29/GetPromptTemplate)

## Authorization information

The following table shows the authorization information corresponding to the API. The authorization information can be used in the `Action` policy element to grant a RAM user or RAM role the permissions to call this API operation. Description:

-   Operation: the value that you can use in the Action element to specify the operation on a resource.
-   Access level: the access level of each operation. The levels are read, write, and list.
-   Resource type: the type of the resource on which you can authorize the RAM user or the RAM role to perform the operation. Take note of the following items:
    -   For mandatory resource types, indicate with a prefix of \* .
    -   If the permissions cannot be granted at the resource level, `All Resources` is used in the Resource type column of the operation.
-   Condition Key: the condition key that is defined by the cloud service.
-   Associated operation: other operations that the RAM user or the RAM role must have permissions to perform to complete the operation. To complete the operation, the RAM user or the RAM role must have the permissions to perform the associated operations.

Operation

Access level

Resource type

Condition key

Associated operation

sfm:GetPromptTemplate

get

\*All Resources

`*`

none

none

## Request syntax

```
GET /{workspaceId}/promptTemplates/{promptTemplateId} HTTP/1.1
```

## Request parameters

Parameter

Type

Required

Description

Example

workspaceId

string

Yes

The workspace ID.

llm-us9hjmt32nysdxxx

promptTemplateId

string

Yes

The template ID.

6e49109bfeb94a39bb268f4e483ccxxx

## Response parameters

Parameter

Type

Description

Example

object

Schema of Response

content

string

The template content.

name

string

The template name.

promptTemplateId

string

The template ID.

6e49109bfeb94a39bb268f4e483ccxxx

requestId

string

The request ID.

8C56C7AF-6573-19CE-B018-E05E1EDCF4C5

workspaceId

string

The workspace ID.

llm-us9hjmt32nysdxxx

variables

array

The variables of the template.

Variables

string

The template variable.

theme

## Examples

Sample success responses

`JSON`format

```
{
  "content": "",
  "name": "",
  "promptTemplateId": "6e49109bfeb94a39bb268f4e483ccxxx",
  "requestId": "8C56C7AF-6573-19CE-B018-E05E1EDCF4C5\n",
  "workspaceId": "llm-us9hjmt32nysdxxx\n",
  "variables": [
    "theme"
  ]
}
```

## Error codes

HTTP status code

Error code

Error message

Description

404

PromptTemplate.TemplateNotFound

Prompt template not found.

Prompt template not found

500

PromptTemplate.InternalError

Prompt template service inner exception.

prompt template service internal exception

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/bailian/2023-12-29/errorCode).
