Create a cross-account management relationship.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/hbr/2017-09-08/AddCrossAccount)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/hbr/2017-09-08/AddCrossAccount)

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

No

The UID of the account to back up.

1589753xxxxxx625

CrossAccountRoleName

string

No

The name of the RAM role for the account to back up. This parameter is used when you configure a cross-account backup by assuming a RAM role.

hbrcrossrole

CrossAccountType

string

No

The type of cross-account backup. Valid values:

-   **CROSS\_ACCOUNT**: Configures a cross-account backup by assuming a RAM role.
    
-   **CROSS\_ACCOUNT\_BY\_RD**: Configures a cross-account backup based on a resource directory.
    

CROSS\_ACCOUNT

Alias

string

No

The alias. The maximum length is 32 characters. This parameter is not required for cross-account backups that are configured based on a resource directory.

原账号1

## Response elements

**Element**

**Type**

**Description**

**Example**

object

Code

string

The return code. A value of 200 indicates success.

200

Message

string

The message returned. If the call is successful, \`successful\` is returned. If the call fails, an error message is returned.

successful

RequestId

string

The request ID.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E

Success

boolean

Indicates whether the request was successful.

-   true: The request was successful.
    
-   false: The request failed.
    

true

## Examples

Success response

`JSON` format

```
{
  "Code": "200",
  "Message": "successful",
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E",
  "Success": true
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/hbr/2017-09-08/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/hbr/2017-09-08/AddCrossAccount#workbench-doc-change-demo) for a complete list.
