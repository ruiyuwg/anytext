Call the PreloadDcdnObjectCaches operation to prefetch content from an origin server to L2 cache nodes. This allows first-time user requests to hit the cache directly, which reduces the load on the origin server.

## Operation description

-   Related operations: The refresh and prefetch operations include [RefreshDcdnObjectCaches](/help/en/doc-detail/130620.html) for refreshing content and [PreloadDcdnObjectCaches](/help/en/doc-detail/130636.html) for prefetching content.
    
-   Request method: POST. Parameters are passed in a form.
    
-   Daily URL prefetch quota: By default, you can submit up to 1,000 URL prefetch tasks per day for each account. If the daily peak bandwidth for your account exceeds 200 Mbps, you can request a quota increase in the console or by [submitting a ticket](https://account.alibabacloud.com/login/login.htm?oauth_callback=https%3A//smartservice.console.alibabacloud.com/%23/ticket/createIndex). Alibaba Cloud evaluates your business needs and adjusts the quota accordingly.
    
-   You can submit up to 100 URL prefetch tasks in each request.
    
-   Prefetch queue rules: The prefetch queue for each account can hold a maximum of 100,000 URLs. DCDN processes prefetch tasks in the order they are submitted. If the number of pending tasks in the queue reaches 100,000, DCDN queues new tasks. A new task can be submitted only after the task at the front of the queue is completed.
    
-   Call frequency for a single user: 15 calls per second.
    

#### Notes

-   After a prefetch task is submitted and executed, DCDN nodes immediately fetch the required resources from the origin server. Submitting many prefetch tasks at once creates many concurrent download tasks. This can cause a surge in back-to-origin bandwidth and requests, increasing the load on your origin server.
    
-   The time required to complete a prefetch task depends on the file size. It usually takes 5 to 30 minutes. The smaller the average file size, the faster the prefetch task is completed.
    
-   If a RAM user is used to perform refresh or prefetch operations, you must first grant permissions to the RAM user. For more information, see [Grant permissions to a RAM user to refresh and prefetch resources](/help/en/edge-security-acceleration/dcdn/user-guide/authorize-a-ram-user-to-prefetch-and-refresh-resources).
    

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/dcdn/2018-01-15/PreloadDcdnObjectCaches)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/dcdn/2018-01-15/PreloadDcdnObjectCaches)

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

dcdn:PreloadDcdnObjectCaches

none

\*domain

`acs:dcdn:*:{#accountId}:domain/{#domainName}`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

ObjectPath

string

Yes

The URL of the object to prefetch. The URL must be in the format of **accelerated domain name/object to prefetch**.

**Note**

Separate multiple URLs with line feeds (\\n) or carriage return line feeds (\\r\\n). The maximum length of a single URL is 1,024 characters.

example.com/examplefile.txt

Area

string

No

The prefetch region. Valid values:

-   **domestic**: the Chinese mainland only.
    
-   **overseas**: global (excluding the Chinese mainland).
    

If you do not set this parameter, the default prefetch region is the acceleration region configured for your domain name. The details are as follows:

-   If the acceleration region is **Chinese mainland only**, the prefetch region is the Chinese mainland only.
    
-   If the acceleration region is **Global**, the prefetch region is global.
    
-   If the acceleration region is **Global (excluding the Chinese mainland)**, the prefetch region is global (excluding the Chinese mainland).
    

domestic

L2Preload

boolean

No

Specifies whether to prefetch content directly to L2 nodes. Valid values:

-   **true**: The prefetch node layer must include L2 nodes.
    
-   **false**: Only origin-pull layer nodes are prefetched. This is the default value. The origin-pull layer can consist of L2 nodes or L3 nodes.
    

true

WithHeader

string

No

Lets you customize prefetch headers. Submit the headers in JSON format.

{ "Accept-Encoding": \[ "gzip" \] }

QueryHashkey

boolean

No

Enable this parameter if you have configured rules such as URL rewrite or parameter filtering. This parameter controls whether to enable the hashkey query mode for prefetch tasks. Valid values:

-   false: The default mode. This mode is used if you do not set this parameter. The submitted URL is directly used as the hashkey of the prefetched file.
    
-   true: The actual hashkey used for the prefetch URL is queried based on the domain name configuration.
    

true

## Response elements

**Element**

**Type**

**Description**

**Example**

object

PreloadTaskId

string

The ID of the prefetch task. Multiple task IDs are separated by commas (,). The returned prefetch task IDs are merged based on the following two rules:

-   Prefetch tasks at the URL granularity that are submitted for the same domain name within the same second are merged into a single RushTaskId.
    
-   If more than 500 prefetch tasks at the URL granularity are submitted for the same domain name within the same second, the tasks are merged into RushTaskIds in batches of 500.
    

95248880

RequestId

string

The request ID.

E5BD4B50-7A02-493A-AE0B-97B9024B4135

## Examples

Success response

`JSON` format

```
{
  "PreloadTaskId": "95248880",
  "RequestId": "E5BD4B50-7A02-493A-AE0B-97B9024B4135"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

SingleRequest.OverLimit

A maximum of 1000 URLs are supported for each request.

400

QuotaExceeded.Preload

Your refresh attempts have exceeded the daily limit.

The maximum number of refresh and prefetch requests on the current day has been reached.

400

InvalidObjectPath.Malformed

The specified ObjectPath is invalid.

The ObjectPath parameter is set to an invalid value. Specify a valid value and try again.

400

InvalidExtensiveDomain.ValueNotSupported

The specified ExtensiveDomain is not supported.

Wildcard domain names are not supported.

400

PreloadQueueFull

The warming queue is full; please try again later.

The maximum number of URLs of the objects that are being prefetched has been reached. Try again later.

400

InvalidObjectPath.ExceedsMaximum

The maximum number of urls is exceeded.

The number of submitted URLs exceeds the maximum limit.

See [Error Codes](https://api.alibabacloud.com/document/dcdn/2018-01-15/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/dcdn/2018-01-15/PreloadDcdnObjectCaches#workbench-doc-change-demo) for a complete list.
