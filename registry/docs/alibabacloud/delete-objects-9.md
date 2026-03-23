This topic describes how to delete a single object, multiple objects, or objects whose names contain a specified prefix from a versioning-enabled Object Storage Service (OSS) bucket.

## Usage notes

-   In this topic, the public endpoint of the China (Hangzhou) region is used. To access OSS from other Alibaba Cloud services in the same region, use an internal endpoint. For details about supported regions and endpoints, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints#concept-zt4-cvy-5db).
    
-   In this topic, access credentials are obtained from environment variables. For more information, see [Configure access credentials](/help/en/oss/developer-reference/oss-java-configure-access-credentials#main-2350752).
    
-   This topic demonstrates creating an OSSClient instance with an OSS endpoint. For alternative configurations, such as using a custom domain or authenticating with credentials from Security Token Service (STS), see [Client configuration](/help/en/oss/developer-reference/oss-java-sdk/#fdfc11b71667l).
    
-   After versioning is enabled, you must have the `oss:DeleteObjectVersion` permission to delete objects. For more information, see [Attach a custom policy to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip).
    

## Delete operations on a versioning-enabled bucket

Delete behavior in a versioning-enabled bucket is as follows:

-   Delete without specifying a version ID (temporary deletion):
    
    If you delete an object without specifying its version ID, OSS does not delete the current version of the object. Instead, it adds a delete marker as the latest version. When you call GetObject, OSS detects that the current version is a delete marker and returns `404 Not Found`. The response also includes `header: x-oss-delete-marker = true` and the version ID of the new delete marker in `x-oss-version-id`.
    
    If `x-oss-delete-marker` is true, the version ID returned in `x-oss-version-id` corresponds to a delete marker.
    
-   Delete by specifying a version ID (permanent deletion):
    
    If you specify a version ID when deleting an object, OSS permanently deletes that version based on the `params` parameter `versionId`. To delete the version with ID "null", add `params['versionId'] = "null"` to `params`. OSS treats the string "null" as the version ID and deletes the object version with ID "null".
    

## Delete a single file

The following examples show how to permanently or temporarily delete a single object.

-   Permanent deletion
    
    The following code permanently deletes an object by specifying its version ID:
    
    ```
    import com.aliyun.oss.*;
    import com.aliyun.oss.common.auth.*;
    import com.aliyun.oss.common.comm.SignVersion;
    
    public class Demo {
        public static void main(String[] args) throws Exception {
            // In this example, the endpoint of the China (Hangzhou) region is used. Specify your actual endpoint. 
            String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
            // Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured. 
            EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
            // Specify the name of the bucket. Example: examplebucket. 
            String bucketName = "examplebucket";
            // Specify the full path of the object. Do not include the bucket name in the full path. 
            String objectName = "exampledir/object";
            String versionId  = "CAEQMxiBgICAof2D0BYiIDJhMGE3N2M1YTI1NDQzOGY5NTkyNTI3MGYyMzJm****";
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
                // Delete the specified version of the object. 
                ossClient.deleteVersion(bucketName, objectName , versionId);
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
    
-   Temporary deletion
    
    The following code temporarily deletes an object without specifying a version ID:
    
    ```
    import com.aliyun.oss.*;
    import com.aliyun.oss.common.auth.*;
    import com.aliyun.oss.common.comm.SignVersion;
    
    public class Demo {
        public static void main(String[] args) throws Exception {
            // In this example, the endpoint of the China (Hangzhou) region is used. Specify your actual endpoint. 
            String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
            // Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured. 
            EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
            // Specify the name of the bucket. Example: examplebucket. 
            String bucketName = "examplebucket";
            // Specify the full path of the object. Do not include the bucket name in the full path. 
            String objectName = "exampledir/object";
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
                // Temporarily delete the object. A delete marker is added to the object. 
                ossClient.deleteObject(bucketName, objectName);
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
    

## Delete multiple objects

The following examples show how to permanently or temporarily delete multiple objects.

-   Permanent deletion
    
    The following code permanently deletes multiple objects or delete markers by specifying their version IDs:
    
    ```
    import com.aliyun.oss.*;
    import com.aliyun.oss.common.auth.*;
    import com.aliyun.oss.common.comm.SignVersion;
    import com.aliyun.oss.model.DeleteVersionsRequest;
    import com.aliyun.oss.model.DeleteVersionsResult;
    import java.net.URLDecoder;
    import java.util.ArrayList;
    import java.util.List;
    
    public class Demo {
        public static void main(String[] args) throws Exception {
            // In this example, the endpoint of the China (Hangzhou) region is used. Specify your actual endpoint. 
            String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
            // Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured. 
            EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
            // Specify the name of the bucket. Example: examplebucket. 
            String bucketName = "examplebucket";
            // Specify the full paths of the objects. Do not include the bucket name in the full paths. 
            String objectName = "exampledir/object";
            String object2Name = "exampledir/object2";
            String yourObjectNameVersionId  = "CAEQMxiBgICAof2D0BYiIDJhMGE3N2M1YTI1NDQzOGY5NTkyNTI3MGYyMzJm****";
            String yourObject2DelMarkerNameVersionId  = "MGE3N2M1YgICAof2D0BYiID3N2M1YTITI1NDQzOGY5NTN2M1YTI1NDQz****";
    
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
                // Delete the objects or delete markers that have specified version IDs. 
                List<DeleteVersionsRequest.KeyVersion> keyVersionsList = new ArrayList<DeleteVersionsRequest.KeyVersion>();
                keyVersionsList.add(new DeleteVersionsRequest.KeyVersion(objectName,yourObjectNameVersionId));
                keyVersionsList.add(new DeleteVersionsRequest.KeyVersion(object2Name,yourObject2DelMarkerNameVersionId));
                DeleteVersionsRequest delVersionsRequest = new DeleteVersionsRequest(bucketName);
                delVersionsRequest.setKeys(keyVersionsList);
                // Initiate a deleteVersions request. 
                DeleteVersionsResult delVersionsResult = ossClient.deleteVersions(delVersionsRequest);
    
                // View the deletion result. 
                for (DeleteVersionsResult.DeletedVersion delVer : delVersionsResult.getDeletedVersions()) {
                    String keyName = URLDecoder.decode(delVer.getKey(), "UTF-8");
                    String keyVersionId = delVer.getVersionId();
                    String keyDelMarkerId = delVer.getDeleteMarkerVersionId();
                    System.out.println("delete key: " + keyName);
                    System.out.println("delete key versionId: " + keyVersionId);
                    if(keyDelMarkerId != null && keyDelMarkerId.length() != 0){
                        System.out.println("delete key del_marker versionId: " + keyDelMarkerId);
                    }
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
    
-   Temporary deletion
    
    The following code temporarily deletes multiple objects without specifying version IDs:
    
    ```
    import com.aliyun.oss.*;
    import com.aliyun.oss.common.auth.*;
    import com.aliyun.oss.common.comm.SignVersion;
    import com.aliyun.oss.model.DeleteObjectsRequest;
    import com.aliyun.oss.model.DeleteObjectsResult;
    import java.net.URLDecoder;
    import java.util.ArrayList;
    import java.util.List;
    
    public class Demo {
        public static void main(String[] args) throws Exception {
            // In this example, the endpoint of the China (Hangzhou) region is used. Specify your actual endpoint. 
            String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
            // Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured. 
            EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
            // Specify the name of the bucket. Example: examplebucket. 
            String bucketName = "examplebucket";
            // Specify the full paths of the objects. Do not include the bucket name in the full paths. 
            String objectName = "exampledir/object";
            String object2Name = "exampledir/object2";
    
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
                // Delete multiple objects at a time. 
                List<String> KeysList = new ArrayList<String>();
                KeysList.add(objectName);
                KeysList.add(object2Name);
                DeleteObjectsRequest request = new DeleteObjectsRequest(bucketName);
                request.setKeys(KeysList);
                // Initiate a deleteObjects request. 
                DeleteObjectsResult delObjResult = ossClient.deleteObjects(request);
    
                // View the deletion result. 
                for (String o : delObjResult.getDeletedObjects()) {
                    String keyName = URLDecoder.decode(o, "UTF-8");
                    System.out.println("delete key name: " + keyName);
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
    

## Delete objects whose names contain a specific prefix

The following code deletes all objects whose names contain a specified prefix:

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.model.*;
import java.util.ArrayList;
import java.util.List;

public class Demo {
    public static void main(String[] args) throws Exception {
        // In this example, the endpoint of the China (Hangzhou) region is used. Specify your actual endpoint. 
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured. 
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        // Specify the name of the bucket. Example: examplebucket. 
        String bucketName = "examplebucket";
        // Specify the prefix. 
        String prefix = "yourkeyPrefix";

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
            // List all versions of objects whose names contain the specified prefix and delete them. 
            String nextKeyMarker = null;
            String nextVersionMarker = null;
            VersionListing versionListing = null;
            do {
                ListVersionsRequest listVersionsRequest = new ListVersionsRequest()
                        .withBucketName(bucketName)
                        .withKeyMarker(nextKeyMarker)
                        .withVersionIdMarker(nextVersionMarker)
                        .withPrefix(prefix);

                versionListing = ossClient.listVersions(listVersionsRequest);
                if (versionListing.getVersionSummaries().size() > 0) {
                    List<DeleteVersionsRequest.KeyVersion> keyVersionsList = new ArrayList<DeleteVersionsRequest.KeyVersion>();
                    for (OSSVersionSummary ossVersion : versionListing.getVersionSummaries()) {
                        System.out.println("key name: " + ossVersion.getKey());
                        System.out.println("versionid: " + ossVersion.getVersionId());
                        System.out.println("Is delete marker: " + ossVersion.isDeleteMarker());
                        keyVersionsList.add(new DeleteVersionsRequest.KeyVersion(ossVersion.getKey(), ossVersion.getVersionId()));
                    }
                    DeleteVersionsRequest delVersionsRequest = new DeleteVersionsRequest(bucketName).withKeys(keyVersionsList);
                    ossClient.deleteVersions(delVersionsRequest);
                }

                nextKeyMarker = versionListing.getNextKeyMarker();
                nextVersionMarker = versionListing.getNextVersionIdMarker();
            } while (versionListing.isTruncated());
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

-   For more information about the API operation that you can call to delete an object, see [DeleteObject](/help/en/oss/developer-reference/deleteobject#reference-iqc-mqv-wdb).
    
-   For more information about the API operation that you can call to delete multiple objects, see [DeleteMultipleObjects](/help/en/oss/developer-reference/deletemultipleobjects#reference-ydg-25v-wdb).
