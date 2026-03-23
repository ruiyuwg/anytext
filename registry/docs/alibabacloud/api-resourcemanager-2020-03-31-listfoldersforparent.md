Queries the information of all subfolders of a folder.

## Operation description

**Note** You can view the information of only the first-level subfolders of a folder.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/ResourceManager/2020-03-31/ListFoldersForParent)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/ResourceManager/2020-03-31/ListFoldersForParent)

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

resourcemanager:ListFoldersForParent

list

\*Folder

`acs:resourcemanager:*:{#accountId}:folder/{#ResourceDirectoryPath}`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

ParentFolderId

string

No

The ID of the parent folder.

If you leave this parameter empty, the information of the first-level subfolders of the Root folder is queried.

r-b1\*\*\*\*

QueryKeyword

string

No

The keyword used for the query, such as a folder name.

Fuzzy match is supported.

rdFolder

PageNumber

integer

No

The number of the page to return.

Pages start from page 1. Default value: 1.

1

PageSize

integer

No

The number of entries to return on each page.

Valid values: 1 to 100. Default value: 10.

10

## Response parameters

Parameter

Type

Description

Example

object

TotalCount

integer

The total number of entries returned.

2

RequestId

string

The ID of the request.

7B8A4E7D-6CFF-471D-84DF-195A7A241ECB

PageSize

integer

The number of entries returned per page.

5

PageNumber

integer

The page number of the returned page.

1

Folders

array<object>

The information of the folders.

Folder

object

FolderId

string

The ID of the folder.

rd-evic31\*\*\*\*

CreateTime

string

The time when the folder was created.

2015-01-23T12:33:18Z

FolderName

string

The name of the folder.

project-1

## Examples

Sample success responses

`JSON`format

```
{
  "TotalCount": 2,
  "RequestId": "7B8A4E7D-6CFF-471D-84DF-195A7A241ECB",
  "PageSize": 5,
  "PageNumber": 1,
  "Folders": {
    "Folder": [
      {
        "FolderId": "rd-evic31****",
        "CreateTime": "2015-01-23T12:33:18Z",
        "FolderName": "project-1"
      }
    ]
  }
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidParameter.ParentFolderId

The ParentFolderId is invalid.

The specified ID of the parent folder is invalid. The ID must either be a 6-character string that starts with r- or a 10-character string that starts with fd-. The ID can contain letters and digits.

404

EntityNotExists.ResourceDirectory

The resource directory for the account is not enabled. We recommend that you first enable the resource directory for the account.

The resource directory for the account is not enabled. We recommend that you first enable the resource directory for the account.

404

EntityNotExists.Folder

The resource directory folder does not exist.

The specified resource directory does not exist. We recommend that you first create a resource directory.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/ResourceManager/2020-03-31/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
