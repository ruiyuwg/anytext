This topic describes the context in a Java runtime in Function Compute and provides sample code.

## What is a context?

When Function Compute runs a function, the system passes a context to the method that you use to execute the function. The context contains information about invocations, services, functions, tracing analysis, and runtime environments. Both [Event handlers](/help/en/functioncompute/fc-2-0/user-guide/event-handlers-2#multiTask5769) and [Java HTTP functions](/help/en/functioncompute/fc-2-0/user-guide/http-handlers-5#multiTask4451) support contexts as the input parameters. The formats and content are the same. The following table describes the parameters that are contained in a context.

**Parameter**

**Description**

RequestId

The ID of the request. You can record the ID for troubleshooting if an error occurs.

Function

The basic information about the invoked function, such as the name, handler, memory, and timeout period of the function.

Credentials

The temporary AccessKey pair that Function Compute obtains by assuming your service-linked role. The temporary AccessKey pair is valid for 36 hours. You can use `credentials` in your code to access related services such as Object Storage Service (OSS). This way, you can access the services without the need to write your AccessKey pair in the function code. For more information, see [Grant permissions across Alibaba Cloud accounts by using a RAM role](/help/en/functioncompute/fc-2-0/security-and-compliance/grant-permissions-by-using-a-ram-role#task-2078146).

Logger

The logger encapsulated by Function Compute.

Service

The basic information about the called service.

OpenTracing

The information about Managed Service for OpenTelemetry. For more information, see [Overview](/help/en/functioncompute/fc-2-0/user-guide/overview-32#concept-1996280).

The following code shows the operation definition:

```
package com.aliyun.fc.runtime;

public interface Context {

    public String getRequestId();

    public Credentials getExecutionCredentials();

    public FunctionParam getFunctionParam();

    public FunctionComputeLogger getLogger();

    public Service getService();

    public OpenTracing getTracing();

    public int getRetryCount();
}
```

## Sample program: Use a temporary key to access OSS

The following sample code provides an example on how to use a temporary key in a context to upload files to OSS. For detailed code, see [java11-oss](https://github.com/awesome-fc/code-example/tree/master/java/java11-oss).

```
package example;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;

import com.aliyun.fc.runtime.Context;
import com.aliyun.fc.runtime.Credentials;
import com.aliyun.fc.runtime.StreamRequestHandler;
import com.aliyun.oss.OSS;
import com.aliyun.oss.OSSClientBuilder;

public class App implements StreamRequestHandler {

    @Override
    public void handleRequest(
            InputStream inputStream, OutputStream outputStream, Context context) throws IOException {

        // The name of the bucket, which must be created in advance. 
        String bucketName = "my-bucket";
        // Specify the endpoint of the region in which the bucket is located. We recommend that you use an internal endpoint. In this example, the internal endpoint https://oss-cn-hangzhou-internal.aliyuncs.com of the China (Hangzhou) region is used. 
        String endpoint = "https://oss-cn-hangzhou-internal.aliyuncs.com";

        // Obtain the key information. Before the execution, make sure that the service to which the function belongs is configured with a role that is attached with the AliyunOSSFullAccess policy. 
        // We recommend that you use the AliyunFCDefaultRole role. 
        Credentials creds = context.getExecutionCredentials();

        // Create an OSSClient instance. 
        /*
        The AccessKey pair of an Alibaba Cloud account can be used to access all API operations. Using these credentials to perform operations in Function Compute is a high-risk operation. We recommend that you use a RAM user to call API operations or perform routine O&M. 
        We recommend that you do not save the AccessKey ID and AccessKey secret in your project code. Otherwise, the AccessKey pair may be leaked and the security of all resources under your account may be compromised. 
        In this example, the AccessKey ID and AccessKey secret are obtained from the context. 
        */
        OSS ossClient = new OSSClientBuilder().build(endpoint, creds.getAccessKeyId(), creds.getAccessKeySecret(), creds.getSecurityToken());

        // Specify a byte array. 
        byte[] content = "Hello FC".getBytes();
        // Specify the bucket name such as examplebucket and the full path of the object such as exampledir/exampleobject.txt. Do not include the bucket name in the full path. 
        ossClient.putObject(bucketName, "exampledir/exampleobject.txt", new ByteArrayInputStream(content));

        // Close your OSSClient. 
        ossClient.shutdown();

        outputStream.write(new String("done").getBytes());
    }
}
```
