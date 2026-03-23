Queries the server certificates in a region.

## Operation description

**Note**

For security reasons, only the fingerprints and names of server certificates are returned. The content of server certificates and private keys is not returned.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Slb/2014-05-15/DescribeServerCertificates)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Slb/2014-05-15/DescribeServerCertificates)

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

slb:DescribeServerCertificates

list

\*ServerCertificate

`acs:slb:{#regionId}:{#AccountId}:certificate/*`

-   slb:tag

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

RegionId

string

No

The region where the CLB instance is deployed.

You can call the [DescribeRegions](/help/en/slb/api-server-load-balancer-instances-describeregions) operation to query the most recent region list.

**Note**

If the endpoint of the selected region is slb.aliyuncs.com, you must specify `RegionId`.

cn-hangzhou

ServerCertificateId

string

No

The server certificate ID.

12315790\*\*\*\*\*\*\*\_166f8204689\_1714763408\_709981430

ResourceGroupId

string

No

The resource group ID.

rg-atstuj3rtop\*\*\*\*

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

The tag key of the resource. You can specify up to 20 tag keys.

The tag key cannot be an empty string. The tag key must be 1 to 64 characters in length and cannot start with `aliyun` or `acs`:. The tag key cannot contain `http://` or `https://`.

test

Value

string

No

The tag value of the resource. You can specify up to 20 tag values. The tag value cannot be an empty string.

The tag value can be up to 128 characters in length and cannot start with `acs:` or `aliyun`. The tag value cannot contain `http://` or `https://`.

1

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The request ID.

365F4154-92F6-4AE4-92F8-7FF34B540710

ServerCertificates

object

ServerCertificate

array<object>

The server certificates.

array<object>

CreateTimeStamp

integer

The timestamp when the server certificate was uploaded.

1504147745000

AliCloudCertificateName

string

The name of the server certificate from Alibaba Cloud Certificate Management Service.

testcertkey

ExpireTime

string

The time when the server certificate expires.

2023-01-26T23:59:59Z

CreateTime

string

The time when the server certificate was uploaded.

2021-08-31T02:49:05Z

ServerCertificateId

string

The server certificate ID.

123157\*\*\*\*\*\*\*\*\_166f8204689\_1714763408\_709981430-cn-east-hangzhou-02

ExpireTimeStamp

integer

The timestamp when the server certificate expires.

15041477450

RegionId

string

The region ID of the server certificate.

cn-hangzhou

ServerCertificateName

string

The name of the server certificate.

slb

Fingerprint

string

The fingerprint of the server certificate.

68:08:1a:f8:2c:97:69:a3:a1:e6:16:41:4b:ca:4f:5d:ee:a5:ef:0d

CommonName

string

The domain name of the server certificate. The domain name is specified in the `CommonName` field.

www.example.com

ResourceGroupId

string

The resource group ID.

rg-atstuj3rtop\*\*\*\*

IsAliCloudCertificate

integer

Indicates whether the server certificate is from Alibaba Cloud Certificate Management Service. Valid values:

-   **1**: yes
    
-   **0**: no
    

0

AliCloudCertificateId

string

The ID of the server certificate from Alibaba Cloud Certificate Management Service.

7309\*\*\*\*\*\*\*\*\_15d97e7709a\_71445759hr\_789289731

Tags

object

Tag

array<object>

The tags.

object

The tag value.

TagValue

string

The tag value.

1

TagKey

string

The tag keys of the resource.

test

SubjectAlternativeNames

object

SubjectAlternativeName

array

The alternative domain names of the server certificate. The alternative domain names are specified in the Subject Alternative Name field of the server certificate.

string

The alternative domain names of the server certificate. The alternative domain names are specified in the `Subject Alternative Name` field of the server certificate.

\["demo.aliyundoc.com","example.aliyundoc.com"\]

## Examples

Success response

`JSON` format

```
{
  "RequestId": "365F4154-92F6-4AE4-92F8-7FF34B540710",
  "ServerCertificates": {
    "ServerCertificate": [
      {
        "CreateTimeStamp": 1504147745000,
        "AliCloudCertificateName": "testcertkey",
        "ExpireTime": "2023-01-26T23:59:59Z",
        "CreateTime": "2021-08-31T02:49:05Z",
        "ServerCertificateId": "123157********_166f8204689_1714763408_709981430-cn-east-hangzhou-02",
        "ExpireTimeStamp": 15041477450,
        "RegionId": "cn-hangzhou",
        "ServerCertificateName": "slb",
        "Fingerprint": "68:08:1a:f8:2c:97:69:a3:a1:e6:16:41:4b:ca:4f:5d:ee:a5:ef:0d",
        "CommonName": "www.example.com",
        "ResourceGroupId": "rg-atstuj3rtop****",
        "IsAliCloudCertificate": 0,
        "AliCloudCertificateId": "7309********_15d97e7709a_71445759hr_789289731",
        "Tags": {
          "Tag": [
            {
              "TagValue": "1",
              "TagKey": "test"
            }
          ]
        },
        "SubjectAlternativeNames": {
          "SubjectAlternativeName": [
            "[\"demo.aliyundoc.com\",\"example.aliyundoc.com\"]"
          ]
        }
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

Abs.ServerCertificateIdAndResourceGroupId.MissMatch

ServerCertificateId or ResourceGroupId miss match.

400

LocationServiceTimeout

Location service connection timeout. Please try again later.

See [Error Codes](https://api.alibabacloud.com/document/Slb/2014-05-15/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Slb/2014-05-15/DescribeServerCertificates#workbench-doc-change-demo) for a complete list.
