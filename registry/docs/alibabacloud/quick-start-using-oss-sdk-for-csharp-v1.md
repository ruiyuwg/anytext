This topic walks you through common storage operations using the OSS SDK for C#. You will learn how to install the SDK, configure access credentials, and perform basic operations such as creating buckets, uploading, downloading, listing, and deleting objects.

## Usage note

For more information about the mappings between OSS regions and endpoints, see [Regions and Endpoints](/help/en/oss/user-guide/regions-and-endpoints#concept-zt4-cvy-5db).

## Configure credentials

Make sure that you have [registered an Alibaba Cloud account](https://account.alibabacloud.com/register/intl_register.htm?spm=a2c45.11132027.495866.3.121a5455M9EN53) and completed identity verification.

1.  [Create an AccessKey pair for a RAM user that has OSS management permissions](/help/en/ram/create-an-accesskey-pair-1#section-rjh-18m-7kp).
    
    Create an AccessKey pair by using Resource Orchestration Service (ROS)
    
    In the Configure Parameters step of the [**Create Stack**](https://ros.console.alibabacloud.com/cn-hangzhou/stacks/create?templateUrl=https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/zh-CN/20241114/itgrlo/createossadmin.yaml&step=1&hideTemplateSelector=false) wizard, select **I confirm that Alibaba Cloud ROS may create RAM resources.** and click **Create** in the Security Confirmation section.
    
    ![1.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1631044371/p873205.png)
    
    After the AccessKey pair is created, copy the AccessKey pair on the **Outputs** tab.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0317645471/p948473.png)
    
2.  Configure environment variables for the AccessKey pair.
    
    ## Linux
    
    1.  In the command-line interface, run the following commands to append the environment variable settings to the `~/.bashrc` file.
        
        ```
        echo "export OSS_ACCESS_KEY_ID='YOUR_ACCESS_KEY_ID'" >> ~/.bashrc
        echo "export OSS_ACCESS_KEY_SECRET='YOUR_ACCESS_KEY_SECRET'" >> ~/.bashrc
        ```
        
        1.  Run the following command to apply the changes.
            
            ```
            source ~/.bashrc
            ```
            
        2.  Run the following commands to verify that the environment variables are configured.
            
            ```
            echo $OSS_ACCESS_KEY_ID
            echo $OSS_ACCESS_KEY_SECRET
            ```
            
    
    ## macOS
    
    1.  In the terminal, run the following command to view the default shell type.
        
        ```
        echo $SHELL
        ```
        
        1.  Perform the following operations based on the default shell type.
            
            #### **Zsh**
            
            1.  Run the following commands to append the environment variable settings to the `~/.zshrc` file.
                
                ```
                echo "export OSS_ACCESS_KEY_ID='YOUR_ACCESS_KEY_ID'" >> ~/.zshrc
                echo "export OSS_ACCESS_KEY_SECRET='YOUR_ACCESS_KEY_SECRET'" >> ~/.zshrc
                ```
                
            2.  Run the following command to apply the changes.
                
                ```
                source ~/.zshrc
                ```
                
            3.  Run the following commands to verify that the environment variables are configured.
                
                ```
                echo $OSS_ACCESS_KEY_ID
                echo $OSS_ACCESS_KEY_SECRET
                ```
                
            
            #### **Bash**
            
            1.  Run the following commands to append the environment variable settings to the `~/.bash_profile` file.
                
                ```
                echo "export OSS_ACCESS_KEY_ID='YOUR_ACCESS_KEY_ID'" >> ~/.bash_profile
                echo "export OSS_ACCESS_KEY_SECRET='YOUR_ACCESS_KEY_SECRET'" >> ~/.bash_profile
                ```
                
            2.  Run the following command to apply the changes.
                
                ```
                source ~/.bash_profile
                ```
                
            3.  Run the following commands to verify that the environment variables are configured.
                
                ```
                echo $OSS_ACCESS_KEY_ID
                echo $OSS_ACCESS_KEY_SECRET
                ```
                
            
    
    ## Windows
    
    ## CMD
    
    1.  Run the following commands in Command Prompt.
        
        ```
        setx OSS_ACCESS_KEY_ID "YOUR_ACCESS_KEY_ID"
        setx OSS_ACCESS_KEY_SECRET "YOUR_ACCESS_KEY_SECRET"
        ```
        
        1.  Run the following commands to verify that the environment variables are configured.
            
            ```
            echo %OSS_ACCESS_KEY_ID%
            echo %OSS_ACCESS_KEY_SECRET%
            ```
            
    
    ## PowerShell
    
    1.  Run the following commands in PowerShell.
        
        ```
        [Environment]::SetEnvironmentVariable("OSS_ACCESS_KEY_ID", "YOUR_ACCESS_KEY_ID", [EnvironmentVariableTarget]::User)
        [Environment]::SetEnvironmentVariable("OSS_ACCESS_KEY_SECRET", "YOUR_ACCESS_KEY_SECRET", [EnvironmentVariableTarget]::User)
        ```
        
        1.  Run the following commands to verify that the environment variables are configured.
            
            ```
            [Environment]::GetEnvironmentVariable("OSS_ACCESS_KEY_ID", [EnvironmentVariableTarget]::User)
            [Environment]::GetEnvironmentVariable("OSS_ACCESS_KEY_SECRET", [EnvironmentVariableTarget]::User)
            ```
            
    
3.  After you modify the system environment variables, restart or refresh your development environment to load the latest variables. This includes IDEs, command-line interfaces, other desktop applications, and background services.
    

## Install the SDK

## Install on Windows

## Install using NuGet

1.  If NuGet is not installed in Visual Studio, install [NuGet](https://docs.nuget.org/docs/start-here/installing-nuget).
    
2.  After you install NuGet, create a project or open an existing project in Visual Studio, then choose **Tools** > **NuGet Package Manager** > **Manage NuGet Packages For Solution**.
    
3.  Enter aliyun.oss.sdk in the search box and click Search. Find Aliyun.OSS.SDK (for .NET Framework) or Aliyun.OSS.SDK.NetCore (for .NET Core) in the search results. Select the latest version, and click **Install**.
    

## Install by referencing a DLL

1.  Download and decompress the .NET SDK package.
    
2.  Compile the aliyun-oss-sdk project in Release mode to generate a dynamic-link library (DLL) file.
    
3.  In Visual Studio, go to **Solution Explorer** and find your project. Right-click the project name and choose **Reference** > **Add Reference**. In the dialog box that appears, select **Browse**.
    
4.  Find the bin directory generated by the DLL file and select the Aliyun.OSS.dll file in the bin directory. Then, click **OK**.
    

## Install by importing a project

If you download the SDK installation package or download the source code from GitHub and use the source code to install the SDK, perform the following steps:

1.  In Visual Studio, right-click and select **Solution** from the menu that appears. Select Add > **Existing Projects**.
    
2.  In the dialog box that appears, select the aliyun-oss-sdk.csproj file and click **Open**.
    
3.  Right-click the project name and choose **References** > **Add Reference**. In the dialog box that appears, click the **Projects** tab, select the aliyun-oss-sdk project, then click **OK**.
    

## Install on Unix/macOS

To install using NuGet, follow these steps:

1.  In Xamarin, create a project or open an existing project. Select **Add NuGet**.
    
2.  Search for Aliyun.OSS.SDK or Aliyun.OSS.SDK.NetCore. Select the latest version and click **Add Package** to add the package to the project application.
    

## Quick start

The following code samples show how to create a bucket, upload, download, list, and delete objects.

Each sample is self-contained and follows the same initialization pattern:

1.  Set the endpoint for your region.
    
2.  Read the AccessKey pair from environment variables (`OSS_ACCESS_KEY_ID` and `OSS_ACCESS_KEY_SECRET`).
    
3.  Create a `ClientConfiguration` instance with `SignatureVersion.V4`.
    
4.  Create an `OssClient` instance and set the region.
    

### **Create a bucket**

```
using Aliyun.OSS;

// Set yourEndpoint to the endpoint of the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the endpoint to https://oss-cn-hangzhou.aliyuncs.com.
var endpoint = "yourEndpoint";
// Obtain access credentials from environment variables. Before you run this sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
var accessKeyId = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_ID");
var accessKeySecret = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_SECRET");
// Set yourBucketName to the name of the bucket.
var bucketName = "yourBucketName";

// Create a ClientConfiguration instance and modify the default parameters as needed.
var conf = new ClientConfiguration();

// Set the signature version to V4.
conf.SignatureVersion = SignatureVersion.V4;

// Create an OssClient instance.
var client = new OssClient(endpoint, accessKeyId, accessKeySecret, conf);
client.SetRegion(region);
try
{
    // Create a bucket.
    var bucket = client.CreateBucket(bucketName);
    Console.WriteLine("Create bucket succeeded, {0} ", bucket.Name);
}
catch (Exception ex)
{
    Console.WriteLine("Create bucket failed, {0}", ex.Message);
}
```

### **Upload an object**

```
using Aliyun.OSS;

// Set yourEndpoint to the endpoint of the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the endpoint to https://oss-cn-hangzhou.aliyuncs.com.
var endpoint = "yourEndpoint";
// Obtain access credentials from environment variables. Before you run this sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
var accessKeyId = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_ID");
var accessKeySecret = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_SECRET");
// Specify the bucket name, for example, examplebucket.
var bucketName = "examplebucket";
// Specify the full path of the object. The full path cannot contain the bucket name, for example, exampledir/exampleobject.txt.
var objectName = "exampledir/exampleobject.txt";
// Specify the full path of the local file, for example, D:\\localpath\\examplefile.txt. If you do not specify a local path, the file is uploaded from the local path that corresponds to the project where the sample code resides.
var localFilename = "D:\\localpath\\examplefile.txt";

// Create a ClientConfiguration instance and modify the default parameters as needed.
var conf = new ClientConfiguration();

// Set the signature version to V4.
conf.SignatureVersion = SignatureVersion.V4;

// Create an OssClient instance.
var client = new OssClient(endpoint, accessKeyId, accessKeySecret, conf);
client.SetRegion(region);

try
{
    // Upload the file.
    var result = client.PutObject(bucketName, objectName, localFilename);
    Console.WriteLine("Put object succeeded, ETag: {0} ", result.ETag);
}
catch (Exception ex)
{
    Console.WriteLine("Put object failed, {0}", ex.Message);
}
```

### **Download an object**

```
using Aliyun.OSS;
using Aliyun.OSS.Common;

// Set yourEndpoint to the endpoint of the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the endpoint to https://oss-cn-hangzhou.aliyuncs.com.
var endpoint = "yourEndpoint";
// Obtain access credentials from environment variables. Before you run this sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
var accessKeyId = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_ID");
var accessKeySecret = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_SECRET");
// Specify the bucket name, for example, examplebucket.
var bucketName = "examplebucket";
// Specify the full path of the object. The full path cannot contain the bucket name, for example, exampledir/exampleobject.txt.
var objectName = "exampledir/exampleobject.txt";
// Download the object to a local file named examplefile.txt and save it to the specified local path (D:\\localpath). If the specified local file exists, it is overwritten. If it does not exist, it is created.
// If you do not specify a local path, the downloaded file is saved to the local path that corresponds to the project where the sample code resides.
var downloadFilename = "D:\\localpath\\examplefile.txt";

// Create a ClientConfiguration instance and modify the default parameters as needed.
var conf = new ClientConfiguration();

// Set the signature version to V4.
conf.SignatureVersion = SignatureVersion.V4;

// Create an OssClient instance.
var client = new OssClient(endpoint, accessKeyId, accessKeySecret, conf);
client.SetRegion(region);

try
{
    // Download the file.
    var result = client.GetObject(bucketName, objectName);
    using (var requestStream = result.Content)
    {
        using (var fs = File.Open(downloadFilename, FileMode.OpenOrCreate))
        {
            int length = 4 * 1024;
            var buf = new byte[length];
            do
            {
                length = requestStream.Read(buf, 0, length);
                fs.Write(buf, 0, length);
            } while (length != 0);
        }
    }
    Console.WriteLine("Get object succeeded");
}
catch (OssException ex)
{
    Console.WriteLine("Failed with error code: {0}; Error info: {1}. \nRequestID:{2}\tHostID:{3}",
        ex.ErrorCode, ex.Message, ex.RequestId, ex.HostId);
}
catch (Exception ex)
{
    Console.WriteLine("Failed with error info: {0}", ex.Message);
}
```

### **List objects**

```
using Aliyun.OSS;
using Aliyun.OSS.Common;

// Set yourEndpoint to the endpoint of the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the endpoint to https://oss-cn-hangzhou.aliyuncs.com.
var endpoint = "yourEndpoint";
// Obtain access credentials from environment variables. Before you run this sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
var accessKeyId = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_ID");
var accessKeySecret = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_SECRET");
// Specify the bucket name, for example, examplebucket.
var bucketName = "examplebucket";

// Create a ClientConfiguration instance and modify the default parameters as needed.
var conf = new ClientConfiguration();

// Set the signature version to V4.
conf.SignatureVersion = SignatureVersion.V4;

// Create an OssClient instance.
var client = new OssClient(endpoint, accessKeyId, accessKeySecret, conf);
client.SetRegion(region);

try
{
    var objects = new List<string>();
    ObjectListing result = null;
    string nextMarker = string.Empty;
    do
    {
        var listObjectsRequest = new ListObjectsRequest(bucketName)
        {
            Marker = nextMarker,
        };
        // List objects.
        result = client.ListObjects(listObjectsRequest);
        foreach (var summary in result.ObjectSummaries)
        {
            Console.WriteLine(summary.Key);
            objects.Add(summary.Key);
        }
        nextMarker = result.NextMarker;
    } while (result.IsTruncated);
    Console.WriteLine("List objects of bucket:{0} succeeded ", bucketName);
}
catch (OssException ex)
{
    Console.WriteLine("Failed with error code: {0}; Error info: {1}. \nRequestID:{2}\tHostID:{3}",
        ex.ErrorCode, ex.Message, ex.RequestId, ex.HostId);
}
catch (Exception ex)
{
    Console.WriteLine("Failed with error info: {0}", ex.Message);
}
```

### **Delete an object**

```
using Aliyun.OSS;

// Set yourEndpoint to the endpoint of the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the endpoint to https://oss-cn-hangzhou.aliyuncs.com.
var endpoint = "yourEndpoint";
// Obtain access credentials from environment variables. Before you run this sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
var accessKeyId = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_ID");
var accessKeySecret = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_SECRET");
// Specify the bucket name, for example, examplebucket.
var bucketName = "examplebucket";
// Specify the full path of the object. The full path cannot contain the bucket name, for example, exampledir/exampleobject.txt.
var objectName = "exampledir/exampleobject.txt";

// Create a ClientConfiguration instance and modify the default parameters as needed.
var conf = new ClientConfiguration();

// Set the signature version to V4.
conf.SignatureVersion = SignatureVersion.V4;

// Create an OssClient instance.
var client = new OssClient(endpoint, accessKeyId, accessKeySecret, conf);
client.SetRegion(region);

try
{
    // Delete the object.
    client.DeleteObject(bucketName, objectName);
    Console.WriteLine("Delete object succeeded");
}
catch (Exception ex)
{
    Console.WriteLine("Delete object failed, {0}", ex.Message);
}
```

### **Run the sample code**

1.  Create a main.cs file in your test project directory. Copy the required sample code to the main.cs file.
    
2.  Replace yourRegion, yourBucketName, and yourObjectName in the following command with your actual values. Set yourRegion to the region where the bucket is located. For example, for China (Hangzhou), set it to cn-hangzhou.
    
    ```
    dotnet script main.cs -- <yourRegion> <yourBucketName> <yourObjectName>
    ```
    

## What do I do if the **AccessDenied** error is reported when using OSS SDKs?

An AccessDenied error typically occurs due to insufficient permissions. Follow these steps to resolve the issue:

1.  Verify your AccessKey pair: Ensure that the AccessKey ID and AccessKey Secret you use are correct. For more information, see [Create an AccessKey pair](/help/en/ram/user-guide/create-an-accesskey-pair#task-188766).
    
2.  Check the permissions granted to RAM users: Please make sure that the RAM user has permissions required to perform operations on the bucket or the object. For more information, see [Grant permissions to a RAM user](/help/en/ram/grant-permissions-to-a-ram-user#task-187800).
    
3.  Check bucket policies: If the error message contains 'Access denied by bucket policy,' it indicates that the error occured due to restrictions specified in the bucket policies. For more information, see [Bucket policies](/help/en/oss/user-guide/oss-bucket-policy/).
    
4.  For information about other types of errors, see [Error codes](/help/en/oss/user-guide/error-codes/). For example, you can refer to the [03-ACCESS\_CONTROL](/help/en/oss/user-guide/03-access-control/) section for common errors related to access control.
    

## References

-   For more information about the OSS C# SDK, see the [official documentation](https://github.com/aliyun/aliyun-oss-csharp-sdk).
    

-   For more code samples, see the [GitHub samples](https://github.com/aliyun/aliyun-oss-csharp-sdk/tree/master/samples/Samples).
