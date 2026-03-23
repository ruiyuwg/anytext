Object Storage Service (OSS) can encrypt uploaded data on the server. This is called server-side encryption. When you upload data to OSS, OSS encrypts the uploaded data and then persistently stores the encrypted data. When you download data from OSS, OSS decrypts the data and returns the decrypted data. In addition, a header is added to the response to declare that the data is encrypted on the server.

## Usage notes

-   Before you configure server-side encryption, make sure that you are familiar with this feature. For more information, see [Server-side encryption](/help/en/oss/user-guide/server-side-encryption-8).
    

-   In this topic, the public endpoint of the China (Hangzhou) region is used. To access OSS from other Alibaba Cloud services in the same region, use an internal endpoint. For details about supported regions and endpoints, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints#concept-zt4-cvy-5db).
    
-   In this topic, access credentials are obtained from environment variables. For more information, see [Configure access credentials](/help/en/oss/developer-reference/oss-java-configure-access-credentials#main-2350752).
    
-   This topic demonstrates creating an OSSClient instance with an OSS endpoint. For alternative configurations, such as using a custom domain or authenticating with credentials from Security Token Service (STS), see [Client configuration](/help/en/oss/developer-reference/oss-java-sdk/#fdfc11b71667l).
    
-   To configure server-side encryption for a bucket, you must have the `oss:PutBucketEncryption` permission. To query the server-side encryption configurations of a bucket, you must have the `oss:GetBucketEncryption` permission. To delete the server-side encryption configurations of a bucket, you must have the `oss:DeleteBucketEncryption` permission. For more information, see [Attach a custom policy to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip).
    

## Configure server-side encryption for a bucket

The following sample code provides examples on how to configure a default encryption method for a bucket. After you configure the default encryption method, all objects that are uploaded to the bucket without specifying an encryption method are encrypted by using the default encryption method.

-   Server-side encryption that uses KMS-managed CMKs (SSE-KMS)
    
    ```
    import com.aliyun.oss.*;
    import com.aliyun.oss.common.auth.*;
    import com.aliyun.oss.common.comm.SignVersion;
    import com.aliyun.oss.model.*;
    
    public class Demo {
        public static void main(String[] args) throws Throwable {
            // Specify the endpoint of the region. In this example, the endpoint of the China (Hangzhou) region is used. Specify your actual endpoint. 
            String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
            // Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured. 
            EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
            // Specify the name of the bucket. Example: examplebucket. 
            String bucketName = "examplebucket";
            // Enter the ID of the CMK managed by KMS. You can create a CMK in the KMS console and obtain the CMK ID. 
            String kmsId = "e1935511-cf88-1123-a0f8-1be8d2511***";
            // Specify the region in which the bucket is located. For example, if the bucket is located in the China (Hangzhou) region, set the region to cn-hangzhou. 
            String region = "cn-hangzhou";
    
            // Create an OSSClient instance.
            // Call the shutdown method to release resources when the OSSClient is no longer in use. 
            ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
            clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);        
            OSS ossClient = OSSClientBuilder.create()
            .endpoint(endpoint)
            .credentialsProvider(credentialsProvider)
            .clientConfiguration(clientBuilderConfiguration)
            .region(region)               
            .build();
    
            try {
                // Configure server-side encryption for the bucket. 
                ServerSideEncryptionByDefault applyServerSideEncryptionByDefault = new ServerSideEncryptionByDefault(SSEAlgorithm.KMS);
                applyServerSideEncryptionByDefault.setKMSMasterKeyID(kmsId);
                ServerSideEncryptionConfiguration sseConfig = new ServerSideEncryptionConfiguration();
                sseConfig.setApplyServerSideEncryptionByDefault(applyServerSideEncryptionByDefault);
                SetBucketEncryptionRequest request = new SetBucketEncryptionRequest(bucketName, sseConfig);
                ossClient.setBucketEncryption(request);
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
    
-   Server-side encryption that uses OSS-managed keys (SSE-OSS)
    
    ```
    import com.aliyun.oss.*;
    import com.aliyun.oss.common.auth.*;
    import com.aliyun.oss.common.comm.SignVersion;
    import com.aliyun.oss.model.*;
    
    public class Demo {
        public static void main(String[] args) throws Throwable {
            // Specify the endpoint of the region. In this example, the endpoint of the China (Hangzhou) region is used. Specify your actual endpoint. 
            String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
            // Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured. 
            EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
            // Specify the name of the bucket. Example: examplebucket. 
            String bucketName = "examplebucket";
            // Specify the region in which the bucket is located. For example, if the bucket is located in the China (Hangzhou) region, set the region to cn-hangzhou. 
            String region = "cn-hangzhou";
    
            // Create an OSSClient instance.
            // Call the shutdown method to release resources when the OSSClient is no longer in use. 
            ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
            clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);        
            OSS ossClient = OSSClientBuilder.create()
            .endpoint(endpoint)
            .credentialsProvider(credentialsProvider)
            .clientConfiguration(clientBuilderConfiguration)
            .region(region)               
            .build();
    
            try {
                // Set the encryption algorithm to SM4 for the bucket. If AES-256 is used, replace SSEAlgorithm.SM4 with SSEAlgorithm.AES256. 
                ServerSideEncryptionByDefault applyServerSideEncryptionByDefault = new ServerSideEncryptionByDefault(SSEAlgorithm.SM4);
                ServerSideEncryptionConfiguration sseConfig = new ServerSideEncryptionConfiguration();
                sseConfig.setApplyServerSideEncryptionByDefault(applyServerSideEncryptionByDefault);
                SetBucketEncryptionRequest request = new SetBucketEncryptionRequest(bucketName, sseConfig);
                ossClient.setBucketEncryption(request);
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
    

## Query the server-side encryption configurations of a bucket

The following sample code provides an example on how to query the server-side encryption configurations of a bucket:

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.model.*;

public class Demo {
    public static void main(String[] args) throws Throwable {
        // Specify the endpoint of the region. In this example, the endpoint of the China (Hangzhou) region is used. Specify your actual endpoint. 
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured. 
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        // Specify the name of the bucket. Example: examplebucket. 
        String bucketName = "examplebucket";
        // Specify the region in which the bucket is located. For example, if the bucket is located in the China (Hangzhou) region, set the region to cn-hangzhou. 
        String region = "cn-hangzhou";

        // Create an OSSClient instance.
        // Call the shutdown method to release resources when the OSSClient is no longer in use. 
        ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
        clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);        
        OSS ossClient = OSSClientBuilder.create()
        .endpoint(endpoint)
        .credentialsProvider(credentialsProvider)
        .clientConfiguration(clientBuilderConfiguration)
        .region(region)               
        .build();

        try {
            // Query the server-side encryption configurations of the bucket. 
            ServerSideEncryptionConfiguration sseConfig = ossClient.getBucketEncryption(bucketName);
            System.out.println("get Algorithm: " + sseConfig.getApplyServerSideEncryptionByDefault().getSSEAlgorithm());
            System.out.println("get kmsid: " + sseConfig.getApplyServerSideEncryptionByDefault().getKMSMasterKeyID());
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

## Delete the server-side encryption configurations of a bucket

The following sample code provides an example on how to delete the server-side encryption configurations of a bucket:

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;

public class Demo {
    public static void main(String[] args) throws Throwable {
        // Specify the endpoint of the region. In this example, the endpoint of the China (Hangzhou) region is used. Specify your actual endpoint. 
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured. 
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        // Specify the name of the bucket. Example: examplebucket. 
        String bucketName = "examplebucket";
        // Specify the region in which the bucket is located. For example, if the bucket is located in the China (Hangzhou) region, set the region to cn-hangzhou. 
        String region = "cn-hangzhou";

        // Create an OSSClient instance.
        // Call the shutdown method to release resources when the OSSClient is no longer in use. 
        ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
        clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);        
        OSS ossClient = OSSClientBuilder.create()
        .endpoint(endpoint)
        .credentialsProvider(credentialsProvider)
        .clientConfiguration(clientBuilderConfiguration)
        .region(region)               
        .build();

        try {
            // Delete the server-side encryption configurations of the bucket. 
            ossClient.deleteBucketEncryption(bucketName);
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

-   For the complete sample code for server-side encryption, visit [GitHub](https://github.com/aliyun/aliyun-oss-java-sdk/blob/master/src/samples/EncryptionServiceSample.java).
    
-   For more information about the API operation that you can call to configure server-side encryption, see [PutBucketEncryption](/help/en/oss/developer-reference/putbucketencryption#concept-262214).
    
-   For more information about the API operation that you can call to query server-side encryption configurations, see [GetBucketEncryption](/help/en/oss/developer-reference/getbucketencryption#concept-262215).
    
-   For more information about the API operation that you can call to delete server-side encryption configurations, see [DeleteBucketEncryption](/help/en/oss/developer-reference/deletebucketencryption#concept-262216).
