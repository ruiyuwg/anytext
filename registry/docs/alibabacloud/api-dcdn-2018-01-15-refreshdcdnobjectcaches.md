You can call the \`RefreshDcdnObjectCaches\` operation to refresh file content on DCDN nodes. You can refresh content for specified URLs in batches.

## Operation description

-   Request method: POST. Parameters are passed in a form.
    
-   Related operations: The refresh and prefetch feature includes the [RefreshDcdnObjectCaches](/help/en/doc-detail/130620.html) operation to refresh content and the [PreloadDcdnObjectCaches](/help/en/doc-detail/130636.html) operation to prefetch content.
    
-   Daily refresh quota: By default, each Alibaba Cloud account can submit up to 10,000 URL refreshes and 100 directory refreshes per day. A directory refresh includes all its subdirectories. If the daily peak bandwidth for your Alibaba Cloud account exceeds 200 Mbps, you can request a quota increase through or by [submitting a ticket](https://account.alibabacloud.com/login/login.htm?oauth_callback=https%3A//smartservice.console.alibabacloud.com/%23/ticket/createIndex). Alibaba Cloud reviews your request and adjusts the quota based on your business needs.
    
-   Each request can contain up to 1,000 URLs or 100 directories to refresh.
    
-   For a single domain name, you can submit refresh requests for up to 10,000 URLs per minute.
    
-   The call frequency for a single user is limited to 30 calls per second.
    

#### Notes

-   When you submit a refresh task, the corresponding cached resources on DCDN nodes are marked as invalid. When a user requests the content again, the DCDN node retrieves the latest version from your origin server and caches it. Submitting many refresh tasks at once clears a large amount of cached content. This can cause a surge in back-to-origin bandwidth usage and requests, which increases the load on your origin server.
    
-   A refresh task takes about 5 to 6 minutes to take effect. If the configured time-to-live (TTL) for a file or directory is less than 5 minutes, you do not need to refresh it. Instead, wait for the cache to expire.
    
-   If you use a RAM user to perform refresh or prefetch operations, you must first grant the required permissions to the RAM user. For more information, see [Grant permissions to a RAM user for refresh and prefetch operations](/help/en/edge-security-acceleration/dcdn/user-guide/authorize-a-ram-user-to-prefetch-and-refresh-resources).
    

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/dcdn/2018-01-15/RefreshDcdnObjectCaches)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/dcdn/2018-01-15/RefreshDcdnObjectCaches)

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

dcdn:RefreshDcdnObjectCaches

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

-   To submit multiple URLs or directories in a single request, separate them with a line feed (\\n) or a carriage return and line feed (\\r\\n).
    
-   The total number of unique domain names in a single request cannot exceed 10.
    

example.com/example.txt

ObjectType

string

No

The type of refresh. Valid values:

-   **File** (default): Refreshes content by URL.
    
-   **Directory**: Refreshes content in a directory.
    
-   **Regex**: Refreshes content that matches a regular expression.
    
-   **IgnoreParams**: Refreshes content by ignoring URL parameters. This refresh type removes the question mark (?) and any parameters that follow it from a URL. The URL that you submit for refresh (without parameters) is matched against the URLs of cached resources (also without parameters). If a match is found, the DCDN node refreshes the cached resource.
    

**Note**

-   For more information about URL and directory refreshes, see [Refresh and prefetch resources](/help/en/edge-security-acceleration/dcdn/user-guide/refresh-and-prefetch-resources).
    
-   A file refresh directly deletes the resource from the node. When a new request arrives, the node fetches the new resource from the origin server. Other refresh types refresh only changed resources by default. To force a refresh for these types, set the \`Force\` parameter to true. For more information, see the description of the \`Force\` parameter.
    

File

Force

boolean

No

Specifies whether to refresh resources within the specified scope even if the content at the origin server is the same as the cached content. The default value is false.

-   **true**: Refreshes all resources within the specified scope. If a user request matches a resource in the scope, the DCDN node directly fetches the new resource from the origin server, returns it to the user, and caches the new resource.
    
-   **false**: Refreshes only changed resources within the specified scope. If a user request matches a resource in the scope, the DCDN node retrieves the \`Last-Modified\` information from the origin server. If the \`Last-Modified\` value is the same as that of the cached resource, the node returns the cached resource. If the value is different, the node fetches the new resource from the origin server, returns it to the user, and caches the new resource.
    

**Note**

This parameter is valid for all refresh types except file refresh.

false

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RefreshTaskId

string

The ID of the refresh task. Multiple IDs are separated by commas (,).

95248880

RequestId

string

The ID of the request.

E5BD4B50-7A02-493A-AE0B-97B9024B4135

## Examples

Success response

`JSON` format

```
{
  "RefreshTaskId": "95248880",
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

InvalidObjectType.Malformed

The specified ObjectType is invalid.

The ObjectType parameter is set to an invalid value. Specify a valid value and try again.

400

InvalidObjectPath.Malformed

The specified ObjectPath is invalid.

The ObjectPath parameter is set to an invalid value. Specify a valid value and try again.

400

QuotaExceeded.Refresh

Your refresh attempts have exceeded the daily limit.

The number of refresh tasks on the current day has reached the upper limit. You can call the refresh API operation to query the remaining number of refresh tasks that you want to run on the current day.

400

InvalidExtensiveDomain.ValueNotSupported

The specified ExtensiveDomain is not supported.

Wildcard domain names are not supported.

400

QuotaPerMinuteExceeded.Refresh

You tried to refresh too frequently; please try again later.

Refresh requests are submitted too frequently. Try again later.

400

TooMany.Refresh

The refresh queue is full; please try again later.

The maximum number of refresh requests for a domain name has been reached. Try again later.

429

TooManyRequests

Too many requests, please try again later

See [Error Codes](https://api.alibabacloud.com/document/dcdn/2018-01-15/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/dcdn/2018-01-15/RefreshDcdnObjectCaches#workbench-doc-change-demo) for a complete list.
