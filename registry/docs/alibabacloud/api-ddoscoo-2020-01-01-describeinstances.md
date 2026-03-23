Queries the details of Anti-DDoS Proxy instances.

## Operation description

This operation lets you query the details of Anti-DDoS instances that belong to your Alibaba Cloud account in a paginated manner. The details include the instance ID, version, expiration time, and service traffic forwarding status.

### QPS limits

The QPS limit for this operation is 10 per second for each user. If the number of calls exceeds the limit, throttling is triggered. This may affect your business. Therefore, ensure that you call this operation at an appropriate rate.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/ddoscoo/2020-01-01/DescribeInstances)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/ddoscoo/2020-01-01/DescribeInstances)

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

yundun-ddoscoo:DescribeInstances

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

ResourceGroupId

string

No

The ID of the resource group to which the Anti-DDoS Proxy instance belongs in Resource Management.

If you do not specify this parameter, the default resource group is used.

rg-acfm2pz25js\*\*\*\*

PageNumber

string

Yes

The page number. Pages start from page 1.

1

PageSize

string

Yes

The number of entries per page. Valid values: 1 to 50.

10

Ip

string

No

The IP address of the Anti-DDoS instance that you want to query.

203.107.XX.XX

Remark

string

No

The remarks on the Anti-DDoS Proxy instance that you want to query. Fuzzy match is supported.

doc-test

Edition

integer

No

The edition of the Anti-DDoS Proxy instance that you want to query. Valid values:

-   **0**: Anti-DDoS Proxy (Outside Chinese Mainland) Insurance.
    
-   **1**: Anti-DDoS Proxy (Outside Chinese Mainland) Unlimited.
    
-   **2**: Anti-DDoS Proxy (Outside Chinese Mainland) CMA.
    
-   **9**: Anti-DDoS Proxy (Chinese Mainland) Professional Edition.
    

9

Enabled

integer

No

The service traffic forwarding status of the Anti-DDoS instance that you want to query. Valid values:

-   **0**: Service traffic forwarding is stopped.
    
-   **1**: Service traffic is being forwarded normally.
    

1

ExpireStartTime

integer

No

The earliest expiration time of the Anti-DDoS instance that you want to query. This parameter is used to query Anti-DDoS Proxy instances that expire after the time specified by **ExpireStartTime**. The value is a timestamp in milliseconds.

1640361500000

ExpireEndTime

integer

No

The latest expiration time of the Anti-DDoS Proxy instance that you want to query. This parameter is used to query Anti-DDoS Proxy instances that expire before the time specified by **ExpireEndTime**. The value is a timestamp in milliseconds.

1640361700000

InstanceIds

array

No

The list of IDs of Anti-DDoS Proxy instances that you want to query. You can specify up to 200 Anti-DDoS Proxy instances.

string

No

The ID of the Anti-DDoS Proxy instance that you want to query.

ddoscoo-cn-7pp2g9ed\*\*\*\*

Status

array

No

The list of statuses of Anti-DDoS Proxy instances that you want to query. You can specify up to two statuses.

integer

No

The status of the Anti-DDoS Proxy instance that you want to query. Valid values:

-   **1**: Normal.
    
-   **2**: Expired.
    

1

Tag

array<object>

No

The list of tags attached to the Anti-DDoS Proxy instance that you want to query.

object

No

Key

string

No

The tag key attached to the Anti-DDoS Proxy instance that you want to query. The maximum value of N is 200. This indicates that you can specify up to 200 tag keys. The configuration rules are as follows:

-   Each tag consists of a tag key (**Key**) and a tag value (**Value**), separated by a comma (,).
    
-   Tags are separated by commas (,).
    

**Note**

Tag keys (**Key**) and tag values (**Value**) must appear in pairs.

test-key

Value

string

No

The tag value attached to the Anti-DDoS Proxy instance that you want to query. The maximum value of N is 200. This indicates that you can specify up to 200 tag values. The configuration rules are as follows:

-   Each tag consists of a tag key (**Key**) and a tag value (**Value**), separated by a comma (,).
    
-   Tags are separated by commas (,).
    

**Note**

Tag keys (**Key**) and tag values (**Value**) must appear in pairs.

test-value

When you call this operation, in addition to the parameters specific to this operation, you must also specify common request parameters. For more information, see [Common parameters](/help/en/anti-ddos/common-parameters).

For the request syntax, see the **Examples** section of this topic.

## Response elements

**Parameter**

**Type**

**Description**

**Example**

object

TotalCount

integer

The total number of Anti-DDoS Proxy instances that are queried.

1

RequestId

string

The ID of the request, which is used to locate and troubleshoot issues.

A0AF40CC-814A-5A86-AEAA-6F19E88B8A39

Instances

array<object>

The details of the Anti-DDoS Proxy instances.

object

Status

integer

The status of the instance. Valid values:

-   **1**: Normal.
    
-   **2**: Expired.
    

1

IpMode

string

The IP forwarding mode of the instance. Valid values:

-   **fnat**: The IP version of the origin server is the same as that of the client. This indicates that requests from IPv4 clients are forwarded to IPv4 origin servers, and requests from IPv6 clients are forwarded to IPv6 origin servers.
    
-   **v6tov4**: Requests from IPv6 clients are forwarded to IPv4 origin servers.
    

fnat

DebtStatus

integer

The overdue payment status of the instance. The value is fixed at **0**, which indicates that no overdue payment exists. This is because Anti-DDoS Proxy services support only the subscription billing method.

0

Edition

integer

The edition of the instance. Valid values:

-   **0**: Anti-DDoS Proxy (Outside Chinese Mainland) Insurance.
    
-   **1**: Anti-DDoS Proxy (Outside Chinese Mainland) Unlimited.
    
-   **2**: Anti-DDoS Proxy (Outside Chinese Mainland) CMA.
    
-   **9**: Anti-DDoS Pro (Chinese Mainland) Professional Edition.
    

9

IpVersion

string

The IP protocol version of the instance. Valid values:

-   **Ipv4**: IPv4 protocol.
    
-   **Ipv6**: IPv6 protocol.
    

Ipv4

ExpireTime

integer

The expiration time of the instance. The value is a timestamp in milliseconds.

1640361600000

Remark

string

The remarks on the instance.

doc-test

CreateTime

integer

The time when the instance was created. The value is a timestamp in milliseconds.

1637751953000

Enabled

integer

The service traffic forwarding status of the instance. Valid values:

-   **0**: Service traffic forwarding is stopped.
    
-   **1**: Service traffic is being forwarded normally.
    

1

InstanceId

string

The ID of the instance.

ddoscoo-cn-7pp2g9ed\*\*\*\*

IsFirstOpenBw

integer

Indicates whether the 95th percentile burstable clean bandwidth billing method has been enabled for the instance. Valid values:

-   0: The billing method has not been enabled.
    
-   1: The billing method has been enabled.
    

0

IsFirstOpenQps

integer

Indicates whether the 95th percentile burstable QPS billing method has been enabled for the instance. Valid values:

-   0: The billing method has not been enabled.
    
-   1: The billing method has been enabled.
    

0

Ip

string

The IP address of the Anti-DDoS Proxy instance.

203.199.XX.XX

## Examples

Success response

`JSON` format

```
{
  "TotalCount": 1,
  "RequestId": "A0AF40CC-814A-5A86-AEAA-6F19E88B8A39",
  "Instances": [
    {
      "Status": 1,
      "IpMode": "fnat",
      "DebtStatus": 0,
      "Edition": 9,
      "IpVersion": "Ipv4",
      "ExpireTime": 1640361600000,
      "Remark": "doc-test",
      "CreateTime": 1637751953000,
      "Enabled": 1,
      "InstanceId": "ddoscoo-cn-7pp2g9ed****",
      "IsFirstOpenBw": 0,
      "IsFirstOpenQps": 0,
      "Ip": "203.199.XX.XX"
    }
  ]
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/ddoscoo/2020-01-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/ddoscoo/2020-01-01/DescribeInstances#workbench-doc-change-demo) for a complete list.
