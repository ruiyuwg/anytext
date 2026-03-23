Queries certificate authority (CA) certificates.

## Operation description

**Note**

To ensure data confidentiality, only the certificate fingerprint and name are returned. The certificate content is not returned.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Slb/2014-05-15/DescribeCACertificates)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Slb/2014-05-15/DescribeCACertificates)

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

slb:DescribeCACertificates

list

\*CaCertificate

`acs:slb:{#regionId}:{#accountId}:certificate/*`

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

Yes

The region of the CA certificates.

You can call the [DescribeRegions](/help/en/slb/api-server-load-balancer-instances-describeregions) operation to query the most recent region list.

cn-hangzhou

CACertificateId

string

No

The CA certificate ID.

139a00604bd-cn-east-hangzho\*\*\*\*

ResourceGroupId

string

No

The resource group ID.

rg-atstuj3rtop\*\*\*\*

Tag

array<object>

No

The tags of the CA certificates.

object

No

Key

string

No

The key of tag N. Valid values of N: **1 to 20**. The tag key cannot be an empty string.

The tag key can be up to 64 characters in length, and cannot contain `http://` or `https://`. It must not start with `aliyun` or `acs:`.

test

Value

string

No

The value of tag N. Valid values of N: **1 to 20**. The tag value can be an empty string. The tag value can be up to 128 characters in length, and cannot contain `http://` or `https://`. It must not start with `aliyun` or `acs:`.

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

365F4154-92F6-4AE4-92F8-7FF\*\*\*\*\*\*

CACertificates

object

CACertificate

array<object>

The information about the CA certificate.

array<object>

CreateTimeStamp

integer

The timestamp when the CA certificate was created. Unit: milliseconds.

This value is a UNIX timestamp representing the number of milliseconds that have elapsed since the epoch time January 1, 1970, 00:00:00 UTC.

1504147745000

ExpireTime

string

The time when the CA certificate expires. The time is in the `YYYY-MM-DDThh:mm:ssZ` format.

2024-11-21T06:04:25Z

CreateTime

string

The time when the CA certificate was created. The time is in the `YYYY-MM-DDThh:mm:ssZ` format.

2021-08-31T02:49:05Z

ExpireTimeStamp

integer

The timestamp that indicates when the CA certificate expires. Unit: milliseconds.

This value is a UNIX timestamp representing the number of milliseconds that have elapsed since the epoch time January 1, 1970, 00:00:00 UTC.

1732169065000

CACertificateId

string

The CA certificate ID.

139a00604bd-cn-east-hangzho\*\*\*\*

RegionId

string

The region of the CA certificate.

cn-hangzhou

Fingerprint

string

The fingerprint of the CA certificate.

79:43:fb:7d:a4:7f:44:32:61:16:57:17:e3:e8:b7:36:03:57:f6:89

ResourceGroupId

string

The resource group ID.

rg-atstuj3rtop\*\*\*\*

CommonName

string

The domain name of the CA certificate.

www.example.com

CACertificateName

string

The CA certificate name.

test

Tags

object

Tag

array<object>

The tag.

object

TagValue

string

The tag value.

1

TagKey

string

The tag key.

test

## Examples

Success response

`JSON` format

```
{
  "RequestId": "365F4154-92F6-4AE4-92F8-7FF******",
  "CACertificates": {
    "CACertificate": [
      {
        "CreateTimeStamp": 1504147745000,
        "ExpireTime": "2024-11-21T06:04:25Z",
        "CreateTime": "2021-08-31T02:49:05Z",
        "ExpireTimeStamp": 1732169065000,
        "CACertificateId": "139a00604bd-cn-east-hangzho****",
        "RegionId": "cn-hangzhou",
        "Fingerprint": "79:43:fb:7d:a4:7f:44:32:61:16:57:17:e3:e8:b7:36:03:57:f6:89",
        "ResourceGroupId": "rg-atstuj3rtop****",
        "CommonName": "www.example.com",
        "CACertificateName": "test",
        "Tags": {
          "Tag": [
            {
              "TagValue": "1",
              "TagKey": "test"
            }
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

Abs.CACertificateIdAndResourceGroupId.MissMatch

CACertificateId or ResourceGroupId miss match.

400

LocationServiceTimeout

Location service connection timeout. Please try again later.

See [Error Codes](https://api.alibabacloud.com/document/Slb/2014-05-15/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Slb/2014-05-15/DescribeCACertificates#workbench-doc-change-demo) for a complete list.
