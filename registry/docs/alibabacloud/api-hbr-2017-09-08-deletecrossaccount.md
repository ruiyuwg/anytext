Deletes a cross-account management relationship.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/hbr/2017-09-08/DeleteCrossAccount)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/hbr/2017-09-08/DeleteCrossAccount)

## **RAM authorization**

No authorization for this operation. If you encounter issues with this operation, contact technical support.

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

CrossAccountUserId

integer

Yes

The UID of the account to back up.

1841xxxxx3649795

CrossAccountRoleName

string

Yes

The name of the RAM role of the account to back up. This parameter is required when you configure cross-account backup by assuming a RAM role.

hbrcrossrole

CrossAccountType

string

No

The type of cross-account backup. Valid values:

-   **CROSS\_ACCOUNT**: Cross-account backup is configured by assuming a RAM role.
    
-   **CROSS\_ACCOUNT\_BY\_RD**: Cross-account backup is configured based on a resource directory.
    

CROSS\_ACCOUNT

## Response elements

**Element**

**Type**

**Description**

**Example**

object

Code

string

The return code. A value of 200 indicates that the request is successful.

200

Message

string

The message returned. If the request is successful, \`successful\` is returned. If the request fails, an error message is returned.

successful

RequestId

string

The request ID.

921E9989-735C-5254-A29F-6B8A5DDC1ED1

Success

boolean

Indicates whether the request was successful.

-   true: The request is successful.
    
-   false: The request fails.
    

True

## Examples

Success response

`JSON` format

```
{
  "Code": "200",
  "Message": "successful",
  "RequestId": "921E9989-735C-5254-A29F-6B8A5DDC1ED1",
  "Success": true
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/hbr/2017-09-08/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/hbr/2017-09-08/DeleteCrossAccount#workbench-doc-change-demo) for a complete list.
