Call DescribeDcdnDomainDetail to get the basic configuration of a specified accelerated domain name.

## Operation description

**Note**

Call frequency for a single user: 30 calls per second.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/dcdn/2018-01-15/DescribeDcdnDomainDetail)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/dcdn/2018-01-15/DescribeDcdnDomainDetail)

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

dcdn:DescribeDcdnDomainDetail

get

\*Domain

`acs:dcdn:*:{#accountId}:domain/{#DomainName}`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

DomainName

string

Yes

The accelerated domain name. You can query only one domain name at a time.

example.com

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The request ID.

09ABE829-6CD3-4FE0-AFEE-556113E29727

DomainDetail

object

The details of the domain name.

GmtCreated

string

The time when the domain name was created.

2017-11-27T06:51:26Z

SSLPub

string

If HTTPS is enabled, this is the public key of the certificate.

xxx

Description

string

The ICP filing information of the domain name.

京ICP备1703xxxx号

SSLProtocol

string

Indicates whether the SSL certificate is enabled. Valid values:

-   **on**: **Enabled**.
    
-   **off**: **Disabled**.
    

on

ResourceGroupId

string

The ID of the resource group.

rg-acfmyuji4b6r4\*\*

Scope

string

The acceleration region.

-   **domestic** (default): the Chinese mainland only.
    
-   **overseas**: global (excluding the Chinese mainland).
    
-   **global**: global.
    

overseas

Cname

string

The CNAME that is assigned to the accelerated domain name. You need to add a CNAME record for the accelerated domain name at your DNS service provider.

example.aliyundoc.com

DomainStatus

string

The status of the accelerated domain name. Valid values:

-   **online**: Enabled.
    
-   **offline**: Disabled.
    
-   **configuring**: Configuring.
    
-   **configure\_failed**: Configuration failed.
    
-   **checking**: Under review.
    
-   **check\_failed**: Review failed.
    

online

GmtModified

string

The time when the domain name was last modified.

2017-11-27T06:51:25Z

DomainName

string

The accelerated domain name.

example.com

Sources

object

Source

array<object>

The information about the origin servers.

object

Type

string

The type of the origin server. Valid values:

-   **ipaddr**: IP address.
    
-   **domain**: domain name.
    
-   **oss**: OSS bucket.
    

oss

Weight

string

The origin fetch weight.

20

Enabled

string

The status.

online

Priority

string

The priority.

50

Port

integer

The port. Valid values: 443 and 80.

80

Content

string

The origin URL.

example.org

Scene

string

The acceleration scenario. Valid values:

-   **apiscene**: API acceleration.
    
-   **webservicescene**: website acceleration.
    
-   **staticscene**: acceleration for videos, images, and text.
    
-   **(empty)**: no scenario.
    

apiscene

FunctionType

string

The type of the computing service. Valid values:

-   **routine**: program.
    
-   **image**: image.
    
-   **cloudFunction**: function.
    

routine

## Examples

Success response

`JSON` format

```
{
  "RequestId": "09ABE829-6CD3-4FE0-AFEE-556113E29727",
  "DomainDetail": {
    "GmtCreated": "2017-11-27T06:51:26Z",
    "SSLPub": "xxx",
    "Description": "京ICP备1703xxxx号",
    "SSLProtocol": "on",
    "ResourceGroupId": "rg-acfmyuji4b6r4**",
    "Scope": "overseas",
    "Cname": "example.aliyundoc.com",
    "DomainStatus": "online",
    "GmtModified": "2017-11-27T06:51:25Z",
    "DomainName": "example.com",
    "Sources": {
      "Source": [
        {
          "Type": "oss",
          "Weight": "20",
          "Enabled": "online",
          "Priority": "50",
          "Port": 80,
          "Content": "example.org"
        }
      ]
    },
    "Scene": "apiscene",
    "FunctionType": "routine"
  }
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/dcdn/2018-01-15/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/dcdn/2018-01-15/DescribeDcdnDomainDetail#workbench-doc-change-demo) for a complete list.
