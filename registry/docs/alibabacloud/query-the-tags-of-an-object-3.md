After you set tags for an object, you can retrieve the object's tag information. If versioning is enabled for the bucket, OSS retrieves the tags of the current version of the object by default. To retrieve the tags of a specific version, specify the object's version ID (versionId).

## Precautions

-   In this topic, the public endpoint of the China (Hangzhou) region is used. To access OSS from other Alibaba Cloud services in the same region, use an internal endpoint. For details about supported regions and endpoints, see [OSS regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints#concept-zt4-cvy-5db).
    
-   In this topic, access credentials are obtained from environment variables. For more information about how to configure access credentials, see [Configure access credentials](/help/en/oss/developer-reference/oss-java-configure-access-credentials#main-2350752).
    
-   In this topic, an OSSClient instance is created by using an OSS endpoint. If you want to create an OSSClient instance by using custom domain names or Security Token Service (STS), see [Configuration examples for common scenarios](/help/en/oss/developer-reference/initialization-3#section-ngr-tjb-kfb).
    
-   To retrieve object tags, you must have the `oss:GetObjectTagging` permission. For more information, see [Grant custom permissions to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip).
    

## Get object tag information

If versioning is disabled for a bucket, you can retrieve the object tag information. If versioning is enabled for the bucket, OSS retrieves the tags of the current version of the object by default.

The following code shows how to retrieve the tags of the exampleobject.txt file in the exampledir folder of the examplebucket bucket.

```
import com.aliyun.oss.ClientException;
import com.aliyun.oss.OSS;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.OSSClientBuilder;
import com.aliyun.oss.OSSException;
import com.aliyun.oss.model.*;
import java.util.*;

public class Demo {
    public static void main(String[] args) throws Throwable {
        // The endpoint of the China (Hangzhou) region is used as an example. Replace it with the actual endpoint.
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Obtain access credentials from environment variables. Before you run this code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        // Specify the bucket name. For example, examplebucket.
        String bucketName = "examplebucket";
        // Specify the full path of the object. For example, exampledir/exampleobject.txt. The full path cannot contain the bucket name.
        String objectName = "exampledir/exampleobject.txt";
        // Specify the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set Region to cn-hangzhou.
        String region = "cn-hangzhou";

        // Create an OSSClient instance.
        // When the OSSClient instance is no longer used, call the shutdown method to release resources.
        ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
        clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);        
        OSS ossClient = OSSClientBuilder.create()
        .endpoint(endpoint)
        .credentialsProvider(credentialsProvider)
        .clientConfiguration(clientBuilderConfiguration)
        .region(region)               
        .build();

        try {
            // Get the tags of the file.
            TagSet tagSet = ossClient.getObjectTagging(bucketName, objectName);
            Map<String, String> tags = tagSet.getAllTags();

            // View the tag information.
            System.out.println("object tagging: "+ tags.toString());
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

## Get tag information for a specific version of an object

If versioning is enabled for the bucket, you can retrieve the tags of a specific version of an object by specifying the object's version ID (versionId).

The following code shows how to retrieve the tags of a specific version of the exampleobject.txt file in the exampledir folder of the examplebucket bucket.

**Note**

For more information about how to obtain a versionId, see [List files (Java SDK V1)](/help/en/oss/developer-reference/list-objects-1#concept-1995004).

```
import com.aliyun.oss.ClientException;
import com.aliyun.oss.OSS;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.OSSClientBuilder;
import com.aliyun.oss.OSSException;
import com.aliyun.oss.model.*;

public class Demo {
    public static void main(String[] args) throws Throwable {
        // The endpoint of the China (Hangzhou) region is used as an example. Replace it with the actual endpoint.
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Obtain access credentials from environment variables. Before you run this code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        // Specify the bucket name. For example, examplebucket.
        String bucketName = "examplebucket";
        // Specify the full path of the object. For example, exampledir/exampleobject.txt. The full path cannot contain the bucket name.
        String objectName = "exampledir/exampleobject.txt";
        // Specify the version ID of the object. For example, CAEQMxiBgICAof2D0BYiIDJhMGE3N2M1YTI1NDQzOGY5NTkyNTI3MGYyMzJm****.
        String versionId = "CAEQMxiBgICAof2D0BYiIDJhMGE3N2M1YTI1NDQzOGY5NTkyNTI3MGYyMzJm****";
        // Specify the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set Region to cn-hangzhou.
        String region = "cn-hangzhou";

        // Create an OSSClient instance.
        // When the OSSClient instance is no longer used, call the shutdown method to release resources.
        ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
        clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);        
        OSS ossClient = OSSClientBuilder.create()
        .endpoint(endpoint)
        .credentialsProvider(credentialsProvider)
        .clientConfiguration(clientBuilderConfiguration)
        .region(region)               
        .build();

        try {
            GenericRequest genericRequest = new GenericRequest(bucketName, objectName, versionId);
            TagSet tagSet = ossClient.getObjectTagging(genericRequest);

            // View the tag information.
            System.out.println("object tagging: "+ tagSet.toString());
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

-   For the complete sample code for retrieving object tags, see the [GitHub example](https://github.com/aliyun/aliyun-oss-java-sdk/blob/master/src/samples/ObjectTaggingSample.java).
    
-   For more information about the API operation for retrieving object tags, see [GetObjectTagging](/help/en/oss/developer-reference/getobjecttagging#concept-185787).
