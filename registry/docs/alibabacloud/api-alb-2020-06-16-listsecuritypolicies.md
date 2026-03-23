Queries custom security policies in a region.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Alb/2020-06-16/ListSecurityPolicies)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Alb/2020-06-16/ListSecurityPolicies)

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

alb:ListSecurityPolicies

list

\*SecurityPolicy

`acs:alb:{#regionId}:{#accountId}:securitypolicy/*`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

ResourceGroupId

string

No

The resource group ID.

rg-atstuj3rtop\*\*\*\*

NextToken

string

No

The pagination token that is used in the next request to retrieve a new page of results. Valid values:

-   You do not need to specify this parameter for the first request.
-   You must specify the token that is obtained from the previous query as the value of **NextToken**.

FFmyTO70tTpLG6I3FmYAXGKPd\*\*\*\*

MaxResults

integer

No

The number of entries per page. Valid values: **1** to **100**. Default value: **20**.

50

SecurityPolicyNames

array

No

The names of the security policies. You can specify up to 10 names.

string

No

The name of the security policy. You can specify up to 10 names.

test-secrity

SecurityPolicyIds

array

No

The security policy IDs. You can specify at most 20 security policies.

string

No

The ID of the security policy that you want to query. You can specify at most 20 security policy IDs.

scp-bp1bpn0kn9\*\*\*\*

Tag

array<object>

No

The tags.

object

No

The tags.

Key

string

No

The tag key. The tag key can be up to 128 characters in length and cannot start with `acs:` or `aliyun`. It cannot contain `http://` or `https://`.

env

Value

string

No

The tag value. The tag value can be up to 128 characters in length and cannot start with `acs:` or `aliyun`. It cannot contain `http://` or `https://`.

product

## Response parameters

Parameter

Type

Description

Example

object

The response parameters.

MaxResults

integer

The number of entries per page.

50

NextToken

string

A pagination token. It can be used in the next request to retrieve a new page of results. Valid values:

-   If **NextToken** is empty, no next page exists.
-   If a value is returned for **NextToken**, the value is the token that determines the start point of the next query.

FFmyTO70tTpLG6I3FmYAXGKPd\*\*\*\*

RequestId

string

The request ID.

593B0448-D13E-4C56-AC0D-FDF0FDE0E9A3

SecurityPolicies

array<object>

The supported security policies.

SecurityPolicy

object

The supported security policy.

Ciphers

array

The supported cipher suites.

Cipher

string

The supported cipher suites are determined by the value of **TLSVersions**.

-   TLSv1.0 and TLSv1.1 support the following cipher suites:
    
    -   ECDHE-ECDSA-AES128-SHA
    -   ECDHE-ECDSA-AES256-SHA
    -   ECDHE-RSA-AES128-SHA
    -   ECDHE-RSA-AES256-SHA
    -   AES128-SHA
    -   AES256-SHA
    -   DES-CBC3-SHA
-   TLSv1.2 supports the following cipher suites:
    
    -   ECDHE-ECDSA-AES128-SHA
    -   ECDHE-ECDSA-AES256-SHA
    -   ECDHE-RSA-AES128-SHA
    -   ECDHE-RSA-AES256-SHA
    -   AES128-SHA
    -   AES256-SHA
    -   DES-CBC3-SHA
    -   ECDHE-ECDSA-AES128-GCM-SHA256
    -   ECDHE-ECDSA-AES256-GCM-SHA384
    -   ECDHE-ECDSA-AES128-SHA256
    -   ECDHE-ECDSA-AES256-SHA384
    -   ECDHE-RSA-AES128-GCM-SHA256
    -   ECDHE-RSA-AES256-GCM-SHA384
    -   ECDHE-RSA-AES128-SHA256
    -   ECDHE-RSA-AES256-SHA384
    -   AES128-GCM-SHA256
    -   AES256-GCM-SHA384
    -   AES128-SHA256
    -   AES256-SHA256
-   TLSv1.3 supports the following cipher suites:
    
    -   TLS\_AES\_128\_GCM\_SHA256
    -   TLS\_AES\_256\_GCM\_SHA384
    -   TLS\_CHACHA20\_POLY1305\_SHA256
    -   TLS\_AES\_128\_CCM\_SHA256
    -   TLS\_AES\_128\_CCM\_8\_SHA256

ECDHE-ECDSA-AES128-SHA

ResourceGroupId

string

The ID of the resource group.

rg-atstuj3rtop\*\*\*\*

SecurityPolicyId

string

The ID of the security policy.

rg-atstuj3rtop\*\*\*\*

SecurityPolicyName

string

The name of the security policy.

test-secrity

SecurityPolicyStatus

string

The status of the security policy. Valid values:

-   **Configuring**
-   **Available**

Available

TLSVersions

array

The supported TLS protocol versions.

TLSVersion

string

The supported TLS versions. Valid values: **TLSv1.0**, **TLSv1.1**, **TLSv1.2**, and **TLSv1.3**.

TLSv1.1

CreateTime

string

The time when the ACL was created. The time follows the `YYYY-MM-DDThh:mm:ssZ` format.

2023-02-15T07:37:33Z

Tags

array<object>

The tags.

Tag

object

The tags.

Key

string

The tag key. The tag key can be up to 128 characters in length. It cannot start with aliyun or acs: and cannot contain http:// or https://.

env

Value

string

The tag value. The tag value can be up to 128 characters in length. It cannot start with aliyun or acs: and cannot contain http:// or https://.

product

TotalCount

integer

The total number of entries returned.

1000

## Examples

Sample success responses

`JSON`format

```
{
  "MaxResults": 50,
  "NextToken": "FFmyTO70tTpLG6I3FmYAXGKPd****",
  "RequestId": "593B0448-D13E-4C56-AC0D-FDF0FDE0E9A3",
  "SecurityPolicies": [
    {
      "Ciphers": [
        "ECDHE-ECDSA-AES128-SHA"
      ],
      "ResourceGroupId": "rg-atstuj3rtop****",
      "SecurityPolicyId": "rg-atstuj3rtop****",
      "SecurityPolicyName": "test-secrity",
      "SecurityPolicyStatus": "Available",
      "TLSVersions": [
        "TLSv1.1"
      ],
      "CreateTime": "2023-02-15T07:37:33Z",
      "Tags": [
        {
          "Key": "env",
          "Value": "product"
        }
      ]
    }
  ],
  "TotalCount": 1000
}
```

## Error codes

HTTP status code

Error code

Error message

403

Forbidden.SecurityPolicy

Authentication has failed for SecurityPolicy.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Alb/2020-06-16/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-01-17

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Alb/2020-06-16/ListSecurityPolicies?updateTime=2024-01-17#workbench-doc-change-demo)
