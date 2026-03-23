This topic describes the context that is involved when you write code in the C# runtime environment of Function Compute.

## What is a context?

When Function Compute runs your function, the system passes a context object to the method that is used to execute the function. The context object contains the information about invocations, services, functions, tracing analysis, and runtime environments. Both [Event handlers](/help/en/functioncompute/fc-2-0/user-guide/event-handlers-5#multiTask6991) and [HTTP handlers](/help/en/functioncompute/fc-2-0/user-guide/http-handlers-4#multiTask5492) support the context object as an input parameter. The context object uses the same format and content in both handler types. The following table describes the fields that are supported by the context object.

**Parameter**

**Description**

RequestId

The ID of the request. You can record the ID for troubleshooting if an error occurs.

Function

The basic information about the invoked function, such as the name, handler, memory, and timeout period of the function.

Credentials

The temporary AccessKey pair that Function Compute obtains by assuming your service-linked role. The temporary AccessKey pair is valid for 36 hours. You can use `credentials` in your code to access related services such as Object Storage Service (OSS). This way, you can access the services without the need to write your AccessKey pair in the function code. For more information, see [Grant Function Compute permissions to access other Alibaba Cloud services](/help/en/functioncompute/fc-2-0/security-and-compliance/grant-function-compute-permissions-to-access-other-alibaba-cloud-services).

Logger

The logger that is encapsulated by Function Compute.

Service

The basic information of the called service.

OpenTracing

The information about Managed Service for OpenTelemetry. For more information, see [Overview](/help/en/functioncompute/fc-2-0/user-guide/overview-32#concept-1996280).

You can use the interface to obtain context information. The following sample code defines an interface. For more information, see [IFcContext](https://github.com/aliyun/fc-dotnet-libs/blob/master/Aliyun.Serverless.Core/IFcContext.cs).

```
public interface IFcContext
{
    /// <summary>
    /// The AliFc request ID associated with the request.
    /// This is the same ID returned to the client that called invoke().
    /// This ID is reused for retries on the same request.
    /// </summary>
    string RequestId { get; }

    /// <summary>
    /// Gets the function parameter interface.
    /// </summary>
    /// <value>The function parameter interface.</value>
    IFunctionParameter FunctionParam {get;}

    /// <summary>
    /// AliFc logger associated with the Context object.
    /// </summary>
    IFcLogger Logger { get; }

    /// <summary>
    /// Gets the credentials interface.
    /// </summary>
    /// <value>The credentials interface.</value>
    ICredentials Credentials {get;}

    /// <summary>
    /// Gets the account identifier.
    /// </summary>
    /// <value>The account identifier.</value>
    string AccountId { get; }

    /// <summary>
    /// Gets the region.
    /// </summary>
    /// <value>The region.</value>
    string Region { get; }

    /// <summary>
    /// Gets the service meta.
    /// </summary>
    /// <value>The service meta.</value>
    IServiceMeta ServiceMeta { get; }
}
```

## Sample program: Use a temporary key to access OSS

The following sample program provides an example on how to use a temporary key in the context to upload a file to OSS.

```
using System;
using System.IO;
using Aliyun.OSS;
using Aliyun.Serverless.Core;
using Microsoft.Extensions.Logging;

namespace Example
{
    public class OssExample
    {
        public Stream HandleRequest(Stream stream, IFcContext context)
        {
            context.Logger.LogInformation("Handle request: {0}", context.RequestId);

            // The bucket name. You must create the bucket in advance. 
            string bucketName = "my-****";

            // The path of the object. 
            string objectName = "exampledir/exampleobject.txt";

            // Specify the endpoint of the region in which the bucket resides. We recommend that you use an internal endpoint. In this example, the internal endpoint https://oss-cn-hangzhou-internal.aliyuncs.com of the China (Hangzhou) region is used. 
            string endpoint = "https://oss-cn-hangzhou-internal.aliyuncs.com";

            // Obtain the key information. Before execution, make sure that the service to which the function belongs is configured with a role that is attached with the AliyunOSSFullAccess policy. 
            // We recommend that you use the AliyunFCDefaultRole role. 
            ICredentials creds = context.Credentials;

            // Create an OSSClient instance. 
            /*
            The AccessKey pair of an Alibaba Cloud account can be used to access all API operations. Using these credentials to perform operations in Function Compute is a high-risk operation. We recommend that you use a RAM user to call API operations or perform routine O&M. 
            We recommend that you do not save the AccessKey ID and AccessKey secret to your project code. Otherwise, the AccessKey pair may be leaked and the security of all resources in your account may be compromised. 
            In this example, the AccessKey pair is obtained from the context. 
            */
            OssClient ossClient =
                new OssClient(endpoint,
                    creds.AccessKeyId,
                    creds.AccessKeySecret,
                    creds.SecurityToken);

            // Specify the bucket name such as examplebucket and the full path of the object such as exampledir/exampleobject.txt. 
            ossClient
                .PutObject(bucketName,
                objectName,
                stream);

            OssObject obj = ossClient.GetObject(bucketName,objectName);
            context.Logger.LogInformation("Put object to oss success: {0}", obj.ToString());
            return obj.Content;
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
        }
    }
}
            
```
