This topic describes how to install Elastic Compute Service (ECS) SDK V2.0 for Java and provides an example on how to use the SDK to call ECS API operations. In the example, ECS SDK V2.0 for Java is used to call the DescribeInstances operation to query information about ECS instances.

## Prerequisites

1.  A Resource Access Management (RAM) user with the minimum required permissions is logged on using its AccessKey pair. We do not recommend that you use Alibaba Cloud account because it has full permissions and its AccessKey pair is a significant security risk if compromised. For more information about creating an AccessKey pair, see [Create an AccessKey pair](/help/en/ram/user-guide/create-an-accesskey-pair).
    
2.  The RAM user is authorized to manage ECS resources. This example requires read-only access, and the AliyunECSReadonlyAccess system policy is used. Authorize permissions according to your business requirements.
    
    1.  Create a custom policy.
        
        For guidance on creating a custom policy, see [Create custom policies](/help/en/ram/create-a-custom-policy#task-glf-vwf-xdb) and [RAM authorization](/help/en/ecs/developer-reference/api-ecs-2014-05-26-ram).
        
        ECS offers custom policy templates based on best practices. Refer to those policy templates to quickly establish policies based on your needs. For more information, see [Custom policies](/help/en/ecs/user-guide/custom-policies-for-ecs).
        
    2.  Use system policies.
        
        For more information about ECS-supported system policies and their permissions, see [System policies for ECS](/help/en/ecs/user-guide/ecs).
        
3.  An AccessKey pair is configured in environment variables. For more information, see [Configure environment variables in Linux, macOS, and Windows](/help/en/sdk/developer-reference/configure-the-alibaba-cloud-accesskey-environment-variable-on-linux-macos-and-windows-systems).
    

## Install SDK

The SDK for Java can be installed in various ways and this example uses Apache Maven. For alternative methods, visit the [SDK Center](https://api.alibabacloud.com/api-tools/sdk/Ecs?version=2014-05-26&language=java-tea&tab=primer-doc).

In the `pom.xml` file of your Maven project, insert the dependency configuration within the `<dependencies>` section and update the Maven project.

```
<dependency>
  <groupId>com.aliyun</groupId>
  <artifactId>ecs20140526</artifactId>
  <version>5.3.0</version>
</dependency>
```

## Use SDK

### 1\. Initialize the client

Alibaba Cloud SDKs support various access credentials, such as AccessKey pairs and Security Token Service (STS) tokens, to initialize clients. For more information, see [Manage access credentials](/help/en/sdk/developer-reference/v2-manage-access-credentials). This example initializes the client using an AccessKey pair.

```
import com.aliyun.ecs20140526.Client;
import com.aliyun.teaopenapi.models.Config;

public class Sample {
    private static Client createClient() throws Exception {
        Config config = new Config()
                // Required. Ensure the environment variable ALIBABA_CLOUD_ACCESS_KEY_ID is set in the runtime environment.
                .setAccessKeyId(System.getenv("ALIBABA_CLOUD_ACCESS_KEY_ID"))
                // Required. Ensure the environment variable ALIBABA_CLOUD_ACCESS_KEY_SECRET is set in the runtime environment.
                .setAccessKeySecret(System.getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET"))
                // For the endpoint, refer to https://api.aliyun.com/product/Ecs
                .setEndpoint("ecs.cn-hangzhou.aliyuncs.com");
        return new Client(config);
    }
}
```

### 2\. Construct a request object

Before you construct a request object, see [DescribeInstances](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describeinstances) for parameter details.

**Note**

The name of a request object must be in the `{API name}Request` format. For example, the request object for `DescribeInstances` is `DescribeInstancesRequest`.

```
// Construct the request object.
DescribeInstancesRequest request = new DescribeInstancesRequest().setRegionId("cn-hangzhou");
```

### 3\. Initiate a call

When you call API operations through the client, you can configure runtime parameters such as timeout and proxy settings. For more information, see [Advanced settings](/help/en/sdk/developer-reference/advanced-configuration/).

**Note**

The name of a response object must be in the `{API name}Response` format. For example, the response object for `DescribeInstances` is `DescribeInstancesResponse`.

```
// Set runtime parameters.
RuntimeOptions runtime = new RuntimeOptions();
// Call the DescribeInstances API operation.
DescribeInstancesResponse response = client.describeInstancesWithOptions(request, runtime);
System.out.println(response.body.toMap());
```

### 4\. Handle exceptions

Exceptions that may occur when you use the SDK for Java are classified into two types: TeaUnretryableException and TeaException.

-   TeaUnretryableException: This type of exception is caused by network issues. When the maximum number of retry attempts is reached, TeaUnretryableException is thrown.
    
-   TeaException: This type of exception is caused by business errors.
    

**We recommend that you properly handle exceptions by performing operations such as reporting exceptions, recording logs, and performing retries. This helps ensure the robustness and stability of your system.**

### 5\. Sample code

```
import com.aliyun.ecs20140526.Client;
import com.aliyun.ecs20140526.models.DescribeInstancesRequest;
import com.aliyun.ecs20140526.models.DescribeInstancesResponse;
import com.aliyun.tea.TeaException;
import com.aliyun.tea.TeaUnretryableException;
import com.aliyun.teaopenapi.models.Config;
import com.aliyun.teautil.models.RuntimeOptions;

public class Sample {
    private static Client createClient() throws Exception {
        Config config = new Config()
                // Required. Ensure the environment variable ALIBABA_CLOUD_ACCESS_KEY_ID is set in the runtime environment.
                .setAccessKeyId(System.getenv("ALIBABA_CLOUD_ACCESS_KEY_ID"))
                // Required. Ensure the environment variable ALIBABA_CLOUD_ACCESS_KEY_SECRET is set in the runtime environment.
                .setAccessKeySecret(System.getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET"))
                // For the endpoint, refer to https://api.aliyun.com/product/Ecs.
                .setEndpoint("ecs.cn-hangzhou.aliyuncs.com");
        return new Client(config);
    }

    public static void main(String[] args) {
        try {
            Client client = Sample.createClient();
            // Construct the request object.
            DescribeInstancesRequest request = new DescribeInstancesRequest()
                    .setRegionId("cn-hangzhou");
            // Set runtime parameters.
            RuntimeOptions runtime = new RuntimeOptions();
            // Call the DescribeInstances API operation.
            DescribeInstancesResponse response = client.describeInstancesWithOptions(request, runtime);
            System.out.println(response.body.toMap());
        } catch (TeaUnretryableException ue) {
            // This is for demonstration only. Handle exceptions carefully and do not overlook them in production.
            ue.printStackTrace();
            // Print the error message.
            System.out.println(ue.getMessage());
            // Print the last request to check the request details when the error occurred.
            System.out.println(ue.getLastRequest());
        } catch (TeaException e) {
            // This is for demonstration only. Handle exceptions carefully and do not overlook them in production.
            e.printStackTrace();
            // Print the error code.
            System.out.println(e.getCode());
            // Print the error message, which includes the RequestId.
            System.out.println(e.getMessage());
            // Print the specific error content returned by the server.
            System.out.println(e.getData());
        } catch (Exception e) {
            // This is for demonstration only. Handle exceptions carefully and do not overlook them in production.
            e.printStackTrace();
        }
    }
}
```

## References

Besides the above method, you can also make generic calls to the ECS OpenAPI. For more information, see [Generic calls](/help/en/sdk/developer-reference/generalized-call-java).

For information about the SDK V1.0, see [V1.0 Java SDK](/help/en/sdk/developer-reference/v1-0-java-sdk/).
