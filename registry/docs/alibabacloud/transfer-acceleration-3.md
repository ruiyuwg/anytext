Transfer acceleration improves OSS access speed for users worldwide. It is suitable for transferring data over long distances and for uploading or downloading large files in the GB or TB range.

## Precautions

-   Only Java SDK 3.13.0 and later versions support transfer acceleration.
    
-   In this topic, the public endpoint of the China (Hangzhou) region is used. To access OSS from other Alibaba Cloud services in the same region, use an internal endpoint. For details about supported regions and endpoints, see [OSS regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints#concept-zt4-cvy-5db).
    
-   In this topic, access credentials are obtained from environment variables. For more information about how to configure access credentials, see [Configure access credentials](/help/en/oss/developer-reference/oss-java-configure-access-credentials#main-2350752).
    
-   In this topic, an OSSClient instance is created by using an OSS endpoint. If you want to create an OSSClient instance by using custom domain names or Security Token Service (STS), see [Configuration examples for common scenarios](/help/en/oss/developer-reference/initialization-3#section-ngr-tjb-kfb).
    

## Enable transfer acceleration

The following code shows how to enable transfer acceleration for a bucket named examplebucket.

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;

public class Demo {

    public static void main(String[] args) throws Exception {
        // The China (Hangzhou) region is used as an example. Specify the actual endpoint.
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Get access credentials from environment variables. Before you run this code, make sure the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are set.
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        // Specify the bucket name, such as examplebucket.
        String bucketName = "examplebucket";
        // Specify the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the region to cn-hangzhou.
        String region = "cn-hangzhou";

        // Create an OSSClient instance.
        // When the OSSClient instance is no longer needed, call the shutdown method to release its resources.
        ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
        clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);        
        OSS ossClient = OSSClientBuilder.create()
        .endpoint(endpoint)
        .credentialsProvider(credentialsProvider)
        .clientConfiguration(clientBuilderConfiguration)
        .region(region)               
        .build();

        try {
            // Set the transfer acceleration status for the bucket.
            // If enabled is set to true, transfer acceleration is enabled. If enabled is set to false, transfer acceleration is disabled.
            boolean enabled = true;
            ossClient.setBucketTransferAcceleration(bucketName, enabled);

        } catch (OSSException oe) {
            System.out.println("Caught an OSSException, which means your request made it to OSS, "
                    + "but was rejected with an error response for some reason.");
            System.out.println("Error Message:" + oe.getErrorMessage());
            System.out.println("Error Code:" + oe.getErrorCode());
            System.out.println("Request ID:" + oe.getRequestId());
            System.out.println("Host ID:" + oe.getHostId());
        } catch (ClientException ce) {
            System.out.println("Caught an ClientException, which means the client encountered "
                    + "a serious internal problem while trying to communicate with OSS, "
                    + "such as not being able to access the network.");
            System.out.println("Error Message:" + ce.getMessage());
        } finally {
            if (ossClient != null) {
                ossClient.shutdown();
            }
        }
    }
}
```

## Query the transfer acceleration status

The following code shows how to query the transfer acceleration status of a bucket named examplebucket.

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.model.TransferAcceleration;

public class Demo {

    public static void main(String[] args) throws Exception {
        // The China (Hangzhou) region is used as an example. Specify the actual endpoint.
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Get access credentials from environment variables. Before you run this code, make sure the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are set.
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        // Specify the bucket name, such as examplebucket.
        String bucketName = "examplebucket";
        // Specify the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the region to cn-hangzhou.
        String region = "cn-hangzhou";

        // Create an OSSClient instance.
        // When the OSSClient instance is no longer needed, call the shutdown method to release its resources.
        ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
        clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);        
        OSS ossClient = OSSClientBuilder.create()
        .endpoint(endpoint)
        .credentialsProvider(credentialsProvider)
        .clientConfiguration(clientBuilderConfiguration)
        .region(region)               
        .build();

        try {
            // Query the transfer acceleration status of the bucket.
            // If the return value is true, transfer acceleration is enabled for the bucket. If the return value is false, transfer acceleration is disabled for the bucket.
            TransferAcceleration result = ossClient.getBucketTransferAcceleration(bucketName);
            System.out.println("Is transfer acceleration enabled:"+ result.isEnabled());
        } catch (OSSException oe) {
            System.out.println("Caught an OSSException, which means your request made it to OSS, "
                    + "but was rejected with an error response for some reason.");
            System.out.println("Error Message:" + oe.getErrorMessage());
            System.out.println("Error Code:" + oe.getErrorCode());
            System.out.println("Request ID:" + oe.getRequestId());
            System.out.println("Host ID:" + oe.getHostId());
        } catch (ClientException ce) {
            System.out.println("Caught an ClientException, which means the client encountered "
                    + "a serious internal problem while trying to communicate with OSS, "
                    + "such as not being able to access the network.");
            System.out.println("Error Message:" + ce.getMessage());
        } finally {
            if (ossClient != null) {
                ossClient.shutdown();
            }
        }
    }
}
```

## References

-   For the complete sample code for transfer acceleration, see [GitHub sample](https://github.com/aliyun/aliyun-oss-java-sdk/blob/master/src/samples/BucketTransferAccelerationSample.java).
    
-   For more information about the API operation that you can call to enable transfer acceleration, see [PutBucketTransferAcceleration](/help/en/oss/developer-reference/putbuckettransferacceleration#reference-2076914).
    
-   For more information about the API operation that you can call to query the transfer acceleration status of a bucket, see [GetBucketTransferAcceleration](/help/en/oss/developer-reference/getbuckettransferacceleration#reference-2076915).
