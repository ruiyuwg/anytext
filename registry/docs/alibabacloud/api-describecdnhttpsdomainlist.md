Queries all certificate information for your account.

## Operation description

**Note**

The call frequency is limited to 100 calls per second for each account.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cdn/2018-05-10/DescribeCdnHttpsDomainList)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cdn/2018-05-10/DescribeCdnHttpsDomainList)

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

cdn:DescribeCdnHttpsDomainList

get

\*All Resource

`*`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

PageNumber

integer

No

The page number to return. Valid values: **1** to **100000**.

5

PageSize

integer

No

The number of entries to return on each page. The default value is **20**.

20

Keyword

string

No

The keyword for the search.

com

## Response elements

**Element**

**Type**

**Description**

**Example**

object

TotalCount

integer

The total number of entries returned.

16

RequestId

string

The ID of the request.

F5E8DF64-7175-4186-9B06-F002C0BBD0C5

CertInfos

object

CertInfo

array<object>

A list of certificate information.

object

CertStartTime

string

The start time of the certificate.

2018-11-26 14:45:09

CertExpireTime

string

The expiration time of the certificate.

2018-12-26 14:45:09

CertUpdateTime

string

The time when the certificate was last updated.

2019-01-08 18:33:16

CertType

string

The type of the certificate.

-   **free**: a free certificate.
    
-   **cas**: an Alibaba Cloud Security certificate.
    
-   **upload**: a custom certificate that you uploaded.
    

free

CertName

string

The name of the certificate.

test

CertStatus

string

The status of the certificate.

-   **ok**: Normal.
    
-   **mismatch**: The domain name does not match the certificate.
    
-   **expired**: The certificate has expired.
    
-   **expire\_soon**: The certificate is about to expire.
    

mismatch

DomainName

string

The accelerated domain name.

example.com

CertCommonName

string

The primary domain name of the certificate.

example.org

## Examples

Success response

`JSON` format

```
{
  "TotalCount": 16,
  "RequestId": "F5E8DF64-7175-4186-9B06-F002C0BBD0C5",
  "CertInfos": {
    "CertInfo": [
      {
        "CertStartTime": "2018-11-26 14:45:09",
        "CertExpireTime": "2018-12-26 14:45:09",
        "CertUpdateTime": "2019-01-08 18:33:16",
        "CertType": "free",
        "CertName": "test",
        "CertStatus": "mismatch",
        "DomainName": "example.com",
        "CertCommonName": "example.org"
      }
    ]
  }
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

NoHttpsDomain

Your account doesn't have https domain.

See [Error Codes](https://api.alibabacloud.com/document/Cdn/2018-05-10/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Cdn/2018-05-10/DescribeCdnHttpsDomainList#workbench-doc-change-demo) for a complete list.
