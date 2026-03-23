A bucket is a container used to store objects. All objects must be stored in a bucket. Buckets are listed in alphabetical order. You can list buckets that belong to your Alibaba Cloud account across all regions and filter them based on specific conditions.

## Usage notes

-   In this topic, the public endpoint of the China (Hangzhou) region is used. To access OSS from other Alibaba Cloud services in the same region, use an internal endpoint. For details about supported regions and endpoints, see [OSS regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints#concept-zt4-cvy-5db).
    
-   In this topic, access credentials are obtained from environment variables. For more information about how to configure access credentials, see [Configure access credentials](/help/en/oss/developer-reference/oss-java-configure-access-credentials#main-2350752).
    
-   In this topic, an OSSClient instance is created by using an OSS endpoint. If you want to create an OSSClient instance by using custom domain names or Security Token Service (STS), see [Configuration examples for common scenarios](/help/en/oss/developer-reference/initialization-3#section-ngr-tjb-kfb).
    
-   To list buckets, you must have the `oss:ListBuckets` permission. For more information, see [Attach a custom access policy to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip).
    
-   If you have Infrequent Access (IA) or Archive buckets, use Java SDK 2.6.0 or later.
    
-   The following code lists buckets across all regions under the current Alibaba Cloud account. You cannot use this code to list buckets in a specific region. The region that is associated with the specified endpoint does not affect the results.
    

## List all buckets

The following code provides an example of how to list all buckets across all regions under the current Alibaba Cloud account.

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.model.Bucket;

import java.util.List;

public class Demo {

    public static void main(String[] args) throws Exception {
        // In this example, the endpoint is set to https://oss-cn-hangzhou.aliyuncs.com. This is the endpoint of the China (Hangzhou) region.
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Specify the region where the bucket is located. In this example, the China (Hangzhou) region is used. Set Region to cn-hangzhou.
        String region = "cn-hangzhou";
        
        // Obtain access credentials from environment variables. Before you run this sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are set.
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();

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
            // List all buckets in all regions under the current Alibaba Cloud account.
            List<Bucket> buckets = ossClient.listBuckets();
            for (Bucket bucket : buckets) {
                System.out.println(" - " + bucket.getName());
            }
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

## List buckets in a resource group

The following code provides an example of how to list buckets in a specified resource group under the current Alibaba Cloud account.

**Note**

An Alibaba Cloud account has one default resource group and can have multiple custom resource groups. If you do not specify a resource group ID when you create a bucket, the bucket belongs to the default resource group.

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.model.*;

public class Demo {

    public static void main(String[] args) throws Exception {
        // In this example, the endpoint is set to https://oss-cn-hangzhou.aliyuncs.com. This is the endpoint of the China (Hangzhou) region.
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Obtain access credentials from environment variables. Before you run this sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are set.
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        // Specify the ID of the resource group. If you do not specify a resource group ID, the buckets in the default resource group are listed.
        String rsId = "rg-aek27tc****";
        // Specify the region where the bucket is located. In this example, the China (Hangzhou) region is used. Set Region to cn-hangzhou.
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
            // List buckets.
            ListBucketsRequest listBucketsRequest = new ListBucketsRequest();
            // List the buckets in the specified resource group under the current Alibaba Cloud account.
            listBucketsRequest.setResourceGroupId(rsId);
            BucketList bucketList = ossClient.listBuckets(listBucketsRequest);
            for (Bucket bucket : bucketList.getBucketList()) {
                System.out.println(" - " + bucket.getName());
            }
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

## List buckets with a specified prefix

The following code provides an example of how to list buckets that have the prefix "example" across all regions under the current Alibaba Cloud account.

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.model.Bucket;
import com.aliyun.oss.model.BucketList;
import com.aliyun.oss.model.ListBucketsRequest;

public class Demo {

    public static void main(String[] args) throws Exception {
        // In this example, the endpoint is set to https://oss-cn-hangzhou.aliyuncs.com. This is the endpoint of the China (Hangzhou) region.
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Specify the region where the bucket is located. In this example, the China (Hangzhou) region is used. Set Region to cn-hangzhou.
        String region = "cn-hangzhou";
        
        // Obtain access credentials from environment variables. Before you run this sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are set.
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();

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
            ListBucketsRequest listBucketsRequest = new ListBucketsRequest();
            // List buckets with the specified prefix in all regions under the current Alibaba Cloud account.            
            listBucketsRequest.setPrefix("example");
            BucketList bucketList = ossClient.listBuckets(listBucketsRequest);
            for (Bucket bucket : bucketList.getBucketList()) {
                System.out.println(" - " + bucket.getName());
            }
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

## List buckets after a specified marker

The following code provides an example of how to list buckets whose names are alphabetically after "examplebucket" across all regions under the current Alibaba Cloud account.

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.model.*;
import java.util.List;

public class Demo {
    public static void main(String[] args) throws com.aliyuncs.exceptions.ClientException {
        // In this example, the endpoint is set to https://oss-cn-hangzhou.aliyuncs.com. This is the endpoint of the China (Hangzhou) region.
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Obtain access credentials from environment variables. Before you run this sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are set.
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        // Specify the bucket name. For example, examplebucket.
        String bucketName = "examplebucket";
        // Set the number of buckets to list on each page to 200.
        int maxKeys = 200;
        // Specify the region where the bucket is located. In this example, the China (Hangzhou) region is used. Set Region to cn-hangzhou.
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
            // List buckets whose names are alphabetically after the specified marker in all regions under the current Alibaba Cloud account.
            String nextMarker = bucketName;
            BucketList bucketListing;

            do {
                bucketListing = ossClient.listBuckets(new ListBucketsRequest().withMarker(nextMarker).withMaxKeys(maxKeys));

                List<Bucket> sums = bucketListing.getBucketList();
                for (Bucket s : sums) {
                    System.out.println("\t" + s.getName());
                }

                nextMarker = bucketListing.getNextMarker();

            } while (bucketListing.isTruncated());
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

## List a specified number of buckets

The following code provides an example of how to list buckets across all regions under the current Alibaba Cloud account and limits the number of returned buckets to a maximum of 500.

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.model.Bucket;
import com.aliyun.oss.model.BucketList;
import com.aliyun.oss.model.ListBucketsRequest;

public class Demo {

    public static void main(String[] args) throws Exception {
        // In this example, the endpoint is set to https://oss-cn-hangzhou.aliyuncs.com. This is the endpoint of the China (Hangzhou) region.
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Specify the region where the bucket is located. In this example, the China (Hangzhou) region is used. Set Region to cn-hangzhou.
        String region = "cn-hangzhou";
                
        // Obtain access credentials from environment variables. Before you run this sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are set.
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();

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
            ListBucketsRequest listBucketsRequest = new ListBucketsRequest();           
            // List buckets in all regions under the current Alibaba Cloud account and limit the maximum number of buckets to list to 500. The default value is 100. The maximum value is 1000.
            listBucketsRequest.setMaxKeys(500);
            BucketList bucketList = ossClient.listBuckets(listBucketsRequest);
            for (Bucket bucket : bucketList.getBucketList()) {
                System.out.println(" - " + bucket.getName());
            }
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

-   For the complete sample code for listing buckets, see [GitHub examples](https://github.com/aliyun/aliyun-oss-java-sdk/blob/master/src/samples/BucketOperationsSample.java).
    
-   For more information about the API operation for listing buckets, see [ListBuckets (GetService)](/help/en/oss/developer-reference/listbuckets#reference-ahf-k4t-tdb).
