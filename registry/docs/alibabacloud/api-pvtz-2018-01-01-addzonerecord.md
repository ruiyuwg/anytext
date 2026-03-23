Call the AddZoneRecord operation to add a DNS record to an authoritative zone. Within the effective scope of the zone, the internal DNS record for a domain name overwrites its public DNS record.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/pvtz/2018-01-01/AddZoneRecord)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/pvtz/2018-01-01/AddZoneRecord)

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

pvtz:AddZoneRecord

create

\*Zone

`acs:pvtz::{#accountId}:zone/{#ZoneId}`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

ZoneId

string

Yes

The ID of the zone. This is the unique identifier of the zone.

df2d03865266bd9842306db586d3\*\*\*\*

Lang

string

No

The language of the response. Valid values:

-   zh: Chinese.
    
-   en: English.
    

Default value: en

en

Rr

string

Yes

The host record. A host record is the prefix of a domain name. Common host records include www, @, \* (for wildcard DNS), and mail (for mailboxes).

For example, to resolve @.example.com, set the host record to "@", not an empty string.

www

Type

string

Yes

The type of the DNS record. The following types are supported:

-   **A**: Maps a domain name to an IPv4 address in dotted decimal notation.
    
-   **AAAA**: Maps a domain name to an IPv6 address.
    
-   **CNAME**: Maps a domain name to another domain name.
    
-   **TXT**: A text record. The text can be up to 255 characters in length. TXT records are often used for Sender Policy Framework (SPF) records to prevent spam.
    
-   **MX**: Maps a domain name to the domain name of a mail server.
    
-   **PTR**: Maps an IP address to a domain name.
    
-   **SRV**: Specifies the server for a specific service. The format is: Priority Weight Port Target. Separate each value with a space.
    

**Note**

Before adding a PTR record, configure a reverse lookup zone. For more information, see [Reverse DNS lookups and PTR records](/help/en/dns/reverse-parsing-and-ptr-records).

A

Line

string

No

The source of the DNS resolution request. Valid values:

-   default: The default line. This is equivalent to a global line. Configure a default line to ensure that a DNS record is returned even if no smart line is hit.
    
-   Alibaba Cloud line: The DNS resolution request comes from Alibaba Cloud, including Public Cloud, Alibaba Finance Cloud, and Alibaba Gov Cloud.
    
-   Custom line: Customize internal domain name resolution to return a specific IP address for DNS query requests from a specific IP address segment.
    

**Note**

-   Only zones in built-in authoritative acceleration regions support adding DNS resolution request source lines.
    
-   To use the default line, enter "default". For Alibaba Cloud lines and custom lines, enter the specified line code. Example: aliyun\_r\_cn-beijing-a
    

default

Weight

integer

No

The weight. Valid values are integers from 1 to 100. The default value is 1. Set different weights for each address to return addresses based on the weight ratio for DNS queries.

1

Ttl

integer

No

The time to live (TTL). The unit is seconds (s). Valid values are 5, 30, 60, 3600 (1 hour), 43200 (12 hours), and 86400 (1 day). The default value is 60.

60

Priority

integer

No

The priority of the MX record. A smaller value indicates a higher priority. Valid values: **\[1, 99\]**.

5

Value

string

Yes

The record value. Enter a value based on the DNS record type.

114.55.XX.XX

UserClientIp

string

No

The IP address of the client.

127.0.XX.XX

Remark

string

No

The remarks.

en

ClientToken

string

No

The client token that is used to ensure the idempotence of the request. A client generates this value to ensure that it is unique among different requests. The value can be up to 64 ASCII characters in length.

6447728c8578e66aacf062d2df4446dc

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The unique ID of the request.

0B7AD377-7E86-44A8-B9A8-53E8666E72FE

RecordId

integer

The ID of the DNS record.

429570\*\*\*\*

Success

boolean

Indicates whether the request was successful.

true

## Examples

Success response

`JSON` format

```
{
  "RequestId": "0B7AD377-7E86-44A8-B9A8-53E8666E72FE",
  "RecordId": 0,
  "Success": true
}
```

Error response

`JSON` format

```
{
    "Message": "The request processing has failed due to some unknown error, exception or failure", 
    "RequestId": "E246E023-F2EB-4034-83F7-B13FCF31459C", 
    "Code": "InternalError"
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/pvtz/2018-01-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/pvtz/2018-01-01/AddZoneRecord#workbench-doc-change-demo) for a complete list.
