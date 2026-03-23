Queries information about security features of Alibaba Cloud CDN.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Cdn/2018-05-10/DescribeCdnSecFuncInfo)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Cdn/2018-05-10/DescribeCdnSecFuncInfo)

## Authorization information

The following table shows the authorization information corresponding to the API. The authorization information can be used in the `Action` policy element to grant a RAM user or RAM role the permissions to call this API operation. Description:

-   Operation: the value that you can use in the Action element to specify the operation on a resource.
-   Access level: the access level of each operation. The levels are read, write, and list.
-   Resource type: the type of the resource on which you can authorize the RAM user or the RAM role to perform the operation. Take note of the following items:
    -   The required resource types are displayed in bold characters.
    -   If the permissions cannot be granted at the resource level, `All Resources` is used in the Resource type column of the operation.
-   Condition Key: the condition key that is defined by the cloud service.
-   Associated operation: other operations that the RAM user or the RAM role must have permissions to perform to complete the operation. To complete the operation, the RAM user or the RAM role must have the permissions to perform the associated operations.

Operation

Access level

Resource type

Condition key

Associated operation

cdn:DescribeCdnSecFuncInfo

get

\*All Resources

`*`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

SecFuncType

string

Yes

The type of the security feature. Valid values:

-   CipherSuiteGroupCustomize: custom cipher suite.
-   CipherSuiteGroupStrict: dustom cipher suite.

CipherSuiteGroupCustomize

Lang

string

Yes

The language.

-   en: English
-   zh: Chinese

zh

## Response parameters

Parameter

Type

Description

Example

object

The returned information about the security feature.

RequestId

string

The request ID.

BCD7D917-76F1-442F-BB75-C810DE34C761

Description

string

The description.

OK

RetCode

string

The HTTP request response code.

-   0: OK.
-   Values other than 0: an error.

0

HttpStatus

string

The HTTP status code returned.

200

Content

array<object>

Queried data.

Content

object

Label

string

The tag.

TLS\_ECDHE\_ECDSA\_WITH\_CHACHA20\_POLY1305\_SHA256

Value

string

The value.

TLS\_ECDHE\_ECDSA\_WITH\_CHACHA20\_POLY1305\_SHA256

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "BCD7D917-76F1-442F-BB75-C810DE34C761",
  "Description": "OK",
  "RetCode": "0",
  "HttpStatus": "200",
  "Content": [
    {
      "Label": "TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256",
      "Value": "TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256"
    }
  ]
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Cdn/2018-05-10/errorCode).
