This topic describes the advanced backoff mechanism based on the throttling policy.

**Note**

The retry mechanism and the throttling policy are added. For more information, see [Retry mechanism](/help/en/sdk/developer-reference/configuration-for-retries-1#topic-2087406).

The core library aliyun-java-sdk-core V4.6.0 or later supports the retry mechanism and provides an advanced backoff mechanism based on the throttling policy. For more information, see [Retry mechanism](/help/en/sdk/developer-reference/configuration-for-retries-1#topic-2087406). You must add the following Maven dependency:

```
<dependency>
    <groupId>com.aliyun</groupId>
    <artifactId>aliyun-java-sdk-core</artifactId>
    <version>4.6.0</version>
</dependency>
```

**Important**

1.  Not all API operations of cloud services support the advanced backoff mechanism based on the throttling policy. For information about API operations that support the advanced backoff mechanism based on the throttling policy, see the **Quotas Info** section in the API documentation of each service. For example, see the [Quotas Info](https://next.api.aliyun.com/document/Ecs/2014-05-26/DescribeHpcClusters) section in the DescribeHpcClusters topic of Elastic Compute Service (ECS).
    
2.  You can enable the backoff mechanism based on the throttling policy in the SDK regardless of whether the API operations of a cloud service support the backoff mechanism based on the throttling policy. If the API operations do not support the backoff mechanism based on the throttling policy, even when you enable this mechanism, the backoff policy and the policy of disabling API requests during throttling specified in the SDK do not take effect. The effect is the same as the effect when you disable the backoff mechanism based on the throttling policy in the SDK. **However, if the API operations suddenly support the backoff mechanism based on the throttling policy, the throttling policy and the policy of disabling API requests may be triggered when you call the API operations. In this case, issue troubleshooting becomes more difficult.**
    
3.  After you enable the backoff mechanism based on the throttling policy, we recommend that you still monitor API operations that failed to be called. If you use only the backoff mechanism based on the throttling policy, issues may fail to be troubleshot.
    
4.  **The prerequisite of the following examples is that the API operations support the backoff mechanism based on the throttling policy**.
    

## Overview

The advanced backoff policies based on the throttling policy are classified into the following two policies:

-   Backoff policy
    
-   Policy of disabling API requests during throttling
    

The interval for each retry is calculated by using the exponential backoff algorithm EqualJitter. The EqualJitter algorithm is used to calculate the wait time for the next retry. For more information, see [Retry mechanism](/help/en/sdk/developer-reference/configuration-for-retries-1#topic-2087406). In addition, a mechanism is provided to calculate time of advanced backoff based on the throttling policy.

### Enable the backoff policy based on the throttling policy

By default, the backoff policy based on the throttling policy is disabled. You can use one of the following methods to enable the backoff policy based on the throttling policy:

1.  Configure a retry policy.
    

```
RetryPolicy retryPolicy = RetryPolicy.builder()
                .maxNumberOfRetries(3) // The maximum number of retries.
                .maxDelayTimeMillis(20 * 1000) // The maximum retry interval. Unit: milliseconds. If the interval is exceeded, no retries are performed.
                //.retryConditions(retryConditions) // The policy that is used to trigger retries.
                .enableAliyunThrottlingControl(true) // Enable the backoff policy based on the throttling policy. 
                //.throttlingConditions(throttlingConditions) // The policy that is used to restrict retries.
                .build();

request.setSysRetryPolicy(retryPolicy);
```

2.  Use the default retry policy.
    

```
// The default policy. The request parameter is enableAliyunThrottlingControl. The value true specifies that the backoff policy based on the throttling policy is enabled. The value false specifies that the backoff policy based on the throttling policy is disabled.
RetryPolicy retryPolicy = RetryPolicy.defaultRetryPolicy( 
true 
);

request.setSysRetryPolicy(retryPolicy);
```

### Benefits of enabling the backoff policy based on the throttling policy

1.  Unnecessary retries are reduced. This reduces system consumption.
    
2.  Backoff algorithms can be used to calculate more accurate backoff time to improve the success rate of retries.
    

## Advanced settings

### Backoff policy: Calculate backoff time based on the throttling policy

After the backoff policy based on the throttling policy is enabled, backoff time is calculated in the following logic:

1.  If no throttling is triggered, EqualJitter is used to calculate a retry interval.
    
2.  If throttling is triggered, the retry interval is a larger value between the remaining time of the current throttling cycle and the calculation result of EqualJitter. If the retry interval is greater than the **maximum retry interval**, an exception is thrown, and the remaining time of the current throttling cycle is stored in the cache pool. This way, the remaining time of the current throttling cycle can be used by the policy to disable API requests during throttling.
    

### Policy of disabling API requests during throttling

After the backoff policy based on the throttling policy is enabled, if throttling is triggered, the server returns the remaining quota information about throttling in the header. The server returns information such as the remaining number of API calls and the remaining time of the current throttling cycle to the client in the "User" and "API + User" dimensions. If API calls are throttled, the remaining number of API calls is 0.

**Note**

Keys that correspond to the two dimensions in the header:

-   "API + User" dimension**:** X-RateLimit-User-API
    
-   "User" dimension: X-RateLimit-User
    

Example of the "API + User" dimension:

`"X-RateLimit-User-API" : "Remain:1,Limit:2,Time:1000,TimeLeft:122,Reset:1637835220000"`

Remain: the remaining number of API calls. The value of the Remain parameter is of the INT type. If the value is -1, the remaining number of API calls is sufficient. If API calls are throttled, the value 0 is returned.

```
Limit: the maximum throttling threshold. The value is of the INT type.
Time: the time span of throttling. The value is of the LONG type. Unit: milliseconds.
TimeLeft: the remaining time of the current throttling cycle. The value is of the LONG type. Unit: milliseconds.
Reset: the start time of the next throttling cycle. The value is of the LONG type and is a timestamp in milliseconds
```

.

The SDK manages the remaining time of the current throttling cycle. During the backoff time that is calculated based on the remaining time of the current throttling cycle, call initiations or retires are limited. If the backoff time is greater than the maximum retry interval, an error is thrown. If the backoff time is not greater than the maximum retry interval, the system waits until the call can be initiated or retried.

### Enable throttling debugging

After the backoff policy based on the throttling policy is enabled, if throttling is triggered, the server returns the remaining quota information about throttling in the header. You can also request to return the quota information in a call by setting `X-RateLimit-Mode` to `debug` in the request header.

```
request.putHeadParameter("X-RateLimit-Mode", "debug");
```

This way, you can obtain the remaining quota information in the response header of each API call.
