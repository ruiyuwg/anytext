Queries permissions.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/DataLake/2020-07-10/ListPermissions)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/DataLake/2020-07-10/ListPermissions)

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

dlf:ListPermissions

get

\*All Resources

`*`

none

none

## Request syntax

```
POST /api/metastore/auth/permissions/list HTTP/1.1
```

## Request parameters

Parameter

Type

Required

Description

Example

Body

object

No

The HTTP request body, in the JSON format.

Principal

[Principal](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-struct-principal)

No

The principle based on which permission information is filtered.

NextPageToken

string

No

A pagination token, which is used to obtain data on the next page. If no pagination token is returned in the response, set this parameter to an empty string ("") or an empty character ('').

token!

PageSize

integer

No

The number of entries to return on each page. Maximum value: 1000.

100

Type

string

Yes

The type of permission information to be obtained. Only Hive is supported.

Hive

MetaResource

[MetaResource](/help/en/doc-detail/429187.html)

No

The resource based on which permission information is filtered.

IsListUserRolePermissions

boolean

No

Specifies whether to obtain the permissions of the role to which the user belongs. This parameter takes effect only when you specify a specific resource object.

false

MetaResourceType

string

No

The type of the resource based on which permission information is filtered, such as database or table. If you do not specify this parameter, permission information is filtered based on both databases and tables.

DATABASE

CatalogId

string

No

The catalog ID.

1344371

## Response parameters

Parameter

Type

Description

Example

object

The returned message body.

Code

string

The returned message.

OK

Message

string

The response message.

.

RequestId

string

The request ID.

745EAAE2-5010-5C9F-A95C-B8FC5C1B03BF

Success

boolean

Indicates whether the request was successful. Valid values: Valid values:

-   true: The request was successful.
-   false

true

NextPageToken

string

The page turning token, which is used to obtain the next page of data.

token!

TotalCount

long

The total number of entries returned.

PrincipalResourcePermissionsList

PrincipalResourcePermissionsList

The permissions.

\[\]

## Examples

Sample success responses

`JSON`format

```
{
  "Code": "OK",
  "Message": ".",
  "RequestId": "745EAAE2-5010-5C9F-A95C-B8FC5C1B03BF",
  "Success": true,
  "NextPageToken": "token!",
  "TotalCount": 0,
  "PrincipalResourcePermissionsList": [
    {
      "Principal": {
        "PrincipalArn": "acs:ram::[AliyunAccountId]:user/username_abc"
      },
      "MetaResource": {
        "ResourceType": "TABLE",
        "CatalogResource": {
          "CatalogId": 1344371
        },
        "DatabaseResource": {
          "DatabaseName": "default",
          "DatabaseWildcard": "*"
        },
        "TableResource": {
          "DatabaseName": "database_test",
          "TableName": "test_parquet"
        },
        "FunctionResource": {
          "DatabaseName": "default",
          "FunctionName": "default"
        },
        "ColumnResource": {
          "DatabaseName": "default",
          "TableName": "test",
          "ColumnNames": [
            "name"
          ]
        }
      },
      "Accesses": [
        "ALTER/SELECT/CREATE, etc."
      ],
      "DelegateAccesses": [
        "ALTER/SELECT/CREATE, etc."
      ]
    }
  ]
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/DataLake/2020-07-10/errorCode).
