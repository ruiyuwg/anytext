For unstructured knowledge base, obtains the details of all chunks of a specified document; for structured knowledge base, obtains the details of all chunks.

## Operation description

-   Before you call this operation, make sure that your knowledge base is created and is not deleted. That is, the primary key ID of the knowledge base `IndexId` is valid.
-   This interface is idempotent.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/bailian/2023-12-29/ListChunks)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/bailian/2023-12-29/ListChunks)

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

sfm:ChunkList

list

\*All Resources

`*`

none

none

## Request syntax

```
POST /{WorkspaceId}/index/list_chunks HTTP/1.1
```

## Request parameters

Parameter

Type

Required

Description

Example

WorkspaceId

string

Yes

The ID of the workspace to which the knowledge base belongs. To view the workspace ID, you can click the Workspace Details icon in the upper-left corner on the [homepage](https://modelstudio.console.alibabacloud.com/#/home) of the console.

ws\_3AXoiweeTyTd03IN

body

object

No

The body of the request parameters.

Fields

array

No

An array of field names. This parameter is used to filter non-private fields (prefixed with\_underscores) in the Metadata parameter returned by this operation. By default, this parameter is left empty, which means all non-private fields in the Metadata parameter are returned. If you only want specified non-private fields, such as title, set this parameter to title.

string

No

The name of the field.

name

Filed

string

No

The primary key ID of the document. This parameter is not required for structured knowledge base, but is required for unstructured knowledge base. To view the ID, you can click the ID icon next to the file name on the [Data Management](https://modelstudio.console.alibabacloud.com/#/data-center) page. You can filter returned chunks by the document ID. This parameter is left empty by default.

file\_5f03dfea56da4050ab68d61871fc4cb3\_10151493

IndexId

string

Yes

The primary key ID of the knowledge base, which is the `Data.Id` parameter returned by the [CreateIndex](https://www.alibabacloud.com/help/en/model-studio/developer-reference/api-bailian-2023-12-29-createindex) operation.

otoru9en4v

PageNum

integer

No

The number of the pages to return. Pages start from page 1. Default value: 1.

1

PageSize

integer

No

The number of chunks to display on each page. Maximum value: 100. Default value: 10.

10

## Response parameters

Parameter

Type

Description

Example

object

Code

string

The error code.

Index.InvalidParameter

Data

object

The data returned.

Nodes

array<object>

The list of chunks.

nodes

object

The chunk object.

Metadata

any

The metadata map of the chunk.

Score

double

The similarity score of the chunk.

0.3

Text

string

The text of the chunk.

Total

long

The total number of chunks returned.

16

Message

string

The error message.

Required parameter(%s) missing or invalid, please check the request parameters.

RequestId

string

The request ID.

8F97A63B-55F1-527F-9D6E-467B6A7E8CF1

Status

string

The HTTP status code returned.

200

Success

boolean

Indications whether the API call is successful. Valid values:

-   true
-   false

true

## Examples

Sample success responses

`JSON`format

```
{
  "Code": "Index.InvalidParameter",
  "Data": {
    "Nodes": [
      {
        "Metadata": "",
        "Score": 0.3,
        "Text": ""
      }
    ],
    "Total": 16
  },
  "Message": "Required parameter(%s) missing or invalid, please check the request parameters.",
  "RequestId": "8F97A63B-55F1-527F-9D6E-467B6A7E8CF1",
  "Status": 200,
  "Success": true
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/bailian/2023-12-29/errorCode).
