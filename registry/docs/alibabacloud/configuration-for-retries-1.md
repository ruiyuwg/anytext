This topic describes the retry mechanism of Alibaba Cloud SDK V1.0 for Java.

**Note**

A retry mechanism and a throttling policy are added. For more information, see [Advanced backoff mechanism based on the throttling policy](/help/en/sdk/developer-reference/advanced-backoff-mechanism-based-on-the-throttling-policy#main-2201432).

The core library aliyun-java-sdk-core V4.6.0 or later supports the retry mechanism and provides an advanced backoff scheme based on the throttling policy. For more information, see [Advanced backoff mechanism based on the throttling policy](/help/en/sdk/developer-reference/advanced-backoff-mechanism-based-on-the-throttling-policy#main-2201432). You must add the following Maven dependency:

```
<dependency>
    <groupId>com.aliyun</groupId>
    <artifactId>aliyun-java-sdk-core</artifactId>
    <version>4.6.0</version>
</dependency>
```

## Retry mechanism

### Disable the retry mechanism

The retry mechanism is disabled by default. You can use one of the following methods to specify the retry policy as none to disable the retry mechanism:

```
// Specify a retry policy for the client to disable the retry mechanism.
client.setSysRetryPolicy(RetryPolicy.none());

// Specify a retry policy for the request. The retry policy configuration of the request takes precedence over the retry policy configuration of the client.
request.setSysRetryPolicy(RetryPolicy.none());
```

### Retry policies

The following types of retry policies are supported:

1.  Specify exceptions.
    
2.  Specify HTTP status codes.
    
3.  Specify HTTP response headers.
    

The three types of policies are independent. If one of the conditions that you specify is met, a retry is performed or no retry is performed. The policies can be used to trigger or restrict retries.

The following sample code shows how to configure policies to trigger or restrict retries:

-   Create a collection of conditions to trigger retries:
    

```
Set<RetryCondition> retryConditions = new HashSet<RetryCondition>();

// Example of conditions
// Specify status codes to trigger a retry. In the following example, a retry is performed when the status code 500 or 501 is returned.
Set<Integer> statusCodes = new HashSet<Integer>();
statusCodes.add(500); // http statusCode
statusCodes.add(501); // http statusCode
// Add the status code configuration to the policy that is used to trigger a retry.
retryConditions.add(StatusCodeCondition.create(statusCodes));

// Specify exceptions to trigger a retry. In the following example, a retry is performed when a SocketTimeoutException or IOException is thrown.
Set<Class<?  extends Exception>> exceptions = new HashSet<Class<?  extends Exception>>();
exceptions.add(SocketTimeoutException.class); // exception
exceptions.add(IOException.class); // exception
// Add the exception configuration to the policy that is used to trigger a retry.
retryConditions.add(ExceptionsCondition.create(exceptions));
```

-   Create a collection of conditions to restrict retries:
    

```
Set<RetryCondition> throttlingConditions = new HashSet<RetryCondition>();

// Example of conditions
// Specify status codes to restrict a retry. In the following example, a retry is prohibited when the status code 429 is returned.
Set<Integer> code = new HashSet<Integer>();
code.add(429); // Specify an HTTP status code to restrict a retry. In this example, a retry is prohibited if the status code 429 is returned.
// Add the status code configuration to the policy that is used to restrict retires.
throttlingConditions.add(StatusCodeCondition.create(code));
```

-   Add conditions to RetryPolicy:
    

```
RetryPolicy retryPolicy = RetryPolicy.builder()
                .maxNumberOfRetries(3) // The maximum number of retries.
                .maxDelayTimeMillis(20 * 1000) // The maximum retry interval. Unit: milliseconds. If the specified duration is exceeded, no retries are performed.
                .retryConditions(retryConditions) // The policy that is used to trigger retries.
                . .throttlingConditions(throttlingConditions) // The policy that is used to restrict retries.
                .build();
```

The interval for each retry is calculated by using an exponential backoff algorithm. The EqualJitter algorithm is used to calculate the wait time for the next retry.

### Configure advanced settings of conditions for retries

Three conditions are provided. The following items describe the details of the conditions.

1.  StatusCodeCondition
    
    1.  The condition stores a collection of integers. The SDK compares HTTP status codes in the collection with the returned status code and determines whether to trigger or restrict retries.
        
2.  ExceptionsCondition
    
    1.  The condition stores a collection of exceptions. The SDK compares exceptions in the collection with the exception that is thrown for the call and determines whether to trigger or restrict retries.
        
3.  HeadersCondition
    
    1.  The condition stores a map. The structure of the map is complex. The key of the map matches the key of the response header. The Pattern(com.aliyuncs.policy.retry.pattern.Pattern) interface needs to be called to obtain the value of the map. The value that corresponds to the key of the response header is matched by an expression. For example, whether the value contains a string or is equal to a value is checked.
        
    2.  Two patterns are supported: AliyunThrottlingPattern and SimplePattern. The AliyunThrottlingPattern pattern interface is called based on the throttling policy provided by Alibaba Cloud. For more information, see [Advanced backoff mechanism based on the throttling policy](/help/en/sdk/developer-reference/advanced-backoff-mechanism-based-on-the-throttling-policy#main-2201432). The SimplePattern pattern interface compares whether the values are equal.
        
    3.  You can create a custom pattern interface. In the class that contains the pattern interface, you must implement the following functions:
        
        1.  meetState(): specifies whether the conditions that you specify are met.
            
        2.  escapeTime(): specifies the escape time. This function applies only to policies that are used to restrict retires. If the value is not -1, retries are not performed during the escape time, and retries are not restricted. Instead, retries are performed until retries can be performed. If the value is greater than the maximum retry interval, the system returns an error message and you do not need to wait for a retry.
            
        3.  readFormHeadersContent(String content): assigns a value to a parameter. The implementation of the SimplePattern class can be directly used.
            
4.  Custom conditions
    
    1.  You can create custom conditions by calling only the RetryCondition interface. To call the RetryCondition interface, you must implement the following two interface functions:
        
        1.  meetState(RetryPolicyContext var1): determines whether the matching status is met based on the context.
            
        2.  escapeTime(RetryPolicyContext var1): calculates the escape time. The function applies only to policies that are used to restrict retries. If you want to apply the function to policies that are used to trigger retries, set the value to -1.
            

## Complete sample code

Sample code:

```
package com.aliyun.sample;

import com.aliyuncs.CommonRequest;
import com.aliyuncs.CommonResponse;
import com.aliyuncs.DefaultAcsClient;
import com.aliyuncs.IAcsClient;
import com.aliyuncs.exceptions.ClientException;
import com.aliyuncs.exceptions.ServerException;
import com.aliyuncs.exceptions.ThrottlingException;
import com.aliyuncs.policy.retry.RetryPolicy;
import com.aliyuncs.policy.retry.conditions.ExceptionsCondition;
import com.aliyuncs.policy.retry.conditions.RetryCondition;
import com.aliyuncs.policy.retry.conditions.StatusCodeCondition;
import com.aliyuncs.profile.DefaultProfile;

import java.io.IOException;
import java.net.SocketTimeoutException;
import java.util.HashSet;
import java.util.Set;

public class Sample {
    public static void main(String[] args) {
        // Create a DefaultAcsClient instance and initialize the instance.
        DefaultProfile profile = DefaultProfile.getProfile(
                // The region ID.
                "cn-hangzhou",
                // Obtain the AccessKey ID of the Resource Access Management (RAM) user from environment variables.
                System.getenv("ALIBABA_CLOUD_ACCESS_KEY_ID"),
                // Obtain the AccessKey Secret of the RAM user from environment variables.
                System.getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET"));
        IAcsClient client = new DefaultAcsClient(profile);
        // Specify a retry policy for the client.
        client.setSysRetryPolicy(RetryPolicy.none());
        // Call an operation. In this example, CommonRequest is used. If you want to call an operation encapsulated in the SDK of an Alibaba Cloud service, use <APIName>Request.
        CommonRequest request = new CommonRequest();
        // Specify a retry policy for the request. The retry policy configuration of the request takes precedence over the retry policy configuration of the client.
        // Use the default retry policy and enable the advanced backoff mechanism.
        // request.setSysRetryPolicy(RetryPolicy.defaultRetryPolicy(true));
        
        // Use a custom retry policy.
        // Specify status codes to trigger retries.
        Set<RetryCondition> retryConditions = new HashSet<RetryCondition>();
        Set<Integer> statusCodes = new HashSet<Integer>();
        statusCodes.add(500); // http statusCode
        statusCodes.add(501); // http statusCode
        retryConditions.add(StatusCodeCondition.create(statusCodes));

        // Specify exceptions to trigger retries.
        Set<Class<?  extends Exception>> exceptions = new HashSet<Class<?  extends Exception>>();
        exceptions.add(SocketTimeoutException.class); // exception
        exceptions.add(IOException.class); // exception
        retryConditions.add(ExceptionsCondition.create(exceptions));

        // Specify status codes to restrict retries.
        Set<RetryCondition> throttlingConditions = new HashSet<RetryCondition>();
        Set<Integer> code = new HashSet<Integer>();
        code.add(429); // Specify an HTTP status code to restrict a retry. In this example, a retry is prohibited if the status code 429 is returned.
        throttlingConditions.add(StatusCodeCondition.create(code));

        RetryPolicy retryPolicy = RetryPolicy.builder()
                .maxNumberOfRetries(3) // The maximum number of retries.
                .maxDelayTimeMillis(20 * 1000) // The maximum retry interval. If the interval is exceeded, no retries are performed.
                .retryConditions(retryConditions) // The policy that is used to trigger retries.
                .enableAliyunThrottlingControl(true) // Enable the throttling policy provided by Alibaba Cloud for throttling control.
                .throttlingConditions(throttlingConditions) // You can write your own policy to restrict retries.
                .build();
        request.setSysRetryPolicy(retryPolicy);

        try {
            // Call an operation. In this example, CommonRequest is used. If you want to call an operation encapsulated in the SDK of an Alibaba Cloud service, use <APIName>Request.
            CommonResponse response = client.getCommonResponse(request);
            System.out.println(response.getData());
        } catch (ServerException e) {
            e.printStackTrace();
        } catch (ClientException e) {
            e.printStackTrace();
            if (ThrottlingException.class.isAssignableFrom(e.getCause().getClass())) {
                // The throttling exception is encapsulated in the ClientException.
            }
        }
    }
}
```
