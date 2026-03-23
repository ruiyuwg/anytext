Checks whether a domain name exists.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Cdn/2018-05-10/CheckCdnDomainExist)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Cdn/2018-05-10/CheckCdnDomainExist)

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

cdn:CheckCdnDomainExist

none

\*Domain

`acs:cdn:*:{#AccountId}:domain/{#DomainName}`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

DomainName

string

Yes

The accelerated domain name.

example.com

## Response parameters

Parameter

Type

Description

Example

object

Schema of Response

RequestId

string

The request ID.

64D28B53-5902-409B-94F6-FD46680144FE

Status

string

The status of the domain name. Valid values:

-   **DomainNotExist**: The domain name is not added.
-   **DomainExistOtherUser**: The domain name has been added by another account.
-   **DomainExistCdnProduct**: The domain name has been added to Alibaba Cloud CDN.
-   **DomainExistDcdnProduct**: The domain name has been added to Dynamic Content Delivery Network (DCDN).
-   **DomainExistScdnProduct**: The domain name has been added to Secure CDN (SCDN).
-   **DomainExistVodProduct**: The domain name has been added to ApsaraVideo VOD.
-   **DomainExistLiveProduct**: The domain name has been added to ApsaraVideo Live.
-   **DomainExistDcdnipaProduct**: The domain name has been added to DCDN IP Application Accelerator (IPA).

DomainNotExist

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "64D28B53-5902-409B-94F6-FD46680144FE",
  "Status": "DomainNotExist"
}
```

## Error codes

HTTP status code

Error code

Error message

400

DomainExist.OtherUser

This domain is already added by another user.

400

DomainExist.OtherProduct

This domain is already existed in %s.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Cdn/2018-05-10/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
