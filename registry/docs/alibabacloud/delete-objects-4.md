This topic describes how to delete a single object, multiple specified objects, objects with a specific name prefix, or a directory and all objects in it.

**Warning**

Exercise caution when you perform delete operations. Deleted objects cannot be recovered.

## Usage notes

-   In this topic, the public endpoint of the China (Hangzhou) region is used. To access OSS from other Alibaba Cloud services in the same region, use an internal endpoint. For details about supported regions and endpoints, see [OSS regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints#concept-zt4-cvy-5db).
    
-   In this topic, access credentials are obtained from environment variables. For more information about how to configure access credentials, see [Configure access credentials](/help/en/oss/developer-reference/oss-java-configure-access-credentials#main-2350752).
    
-   In this topic, an OSSClient instance is created by using an OSS endpoint. If you want to create an OSSClient instance by using custom domain names or Security Token Service (STS), see [Configuration examples for common scenarios](/help/en/oss/developer-reference/initialization-3#section-ngr-tjb-kfb).
    
-   To delete an object, you must have the `oss:DeleteObject` permission. For more information, see [Attach a custom policy to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip).
    

## Delete a single object

The following code shows how to delete the exampleobject.txt object from the examplebucket bucket.

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;

public class Demo {
    public static void main(String[] args) throws Exception {
        // The endpoint of the China (Hangzhou) region is used in this example. Specify your actual endpoint.
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Obtain access credentials from environment variables. Before you run this code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are set.
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        // Enter the bucket name, for example, examplebucket.
        String bucketName = "examplebucket";
        // Enter the full path of the object. The full path cannot include the bucket name.
        String objectName = "exampleobject.txt";
        // Enter the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set Region to cn-hangzhou.
        String region = "cn-hangzhou";

        // Create an OSSClient instance.
        // When the OSSClient instance is no longer in use, call the shutdown method to release resources.
        ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
        clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);        
        OSS ossClient = OSSClientBuilder.create()
        .endpoint(endpoint)
        .credentialsProvider(credentialsProvider)
        .clientConfiguration(clientBuilderConfiguration)
        .region(region)               
        .build();

        try {
            // Delete the object or folder. To delete a folder, it must be empty.
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

## Batch delete objects

You can manually delete up to 1,000 objects at a time. You can delete multiple specified objects, objects with a specified prefix, or a directory and all objects in it.

OSS also supports automatic object deletion by configuring lifecycle rules. For more information, see [Lifecycle rules based on last modified time](/help/en/oss/user-guide/lifecycle-rules-based-on-the-last-modified-time#concept-y2g-szy-5db).

### Parameters for batch deletion

-   Request parameters
    
    **Parameter**
    
    **Description**
    
    **Method**
    
    Keys
    
    The objects to delete.
    
    setKeys(List<String>)
    
    quiet
    
    Specifies the response mode. The default is Verbose mode. Select a mode as needed.
    
    -   Verbose mode (verbose): If quiet is not set or is set to false, a list of all deleted objects is returned.
        
    -   Quiet mode (quiet): If quiet is set to true, OSS does not return a message body.
        
    
    setQuiet(boolean)
    
    encodingType
    
    The encoding type for the object names in the response. Only URL encoding is supported.
    
    setEncodingType(String)
    
-   Response parameters
    
    **Parameter**
    
    **Description**
    
    **Method**
    
    deletedObjects
    
    The deletion result.
    
    -   Verbose mode: Returns a list of successfully deleted objects, including objects that did not exist.
        
    -   Quiet mode: The response body is empty.
        
    
    List<String> getDeletedObjects()
    
    encodingType
    
    The encoding type of the object names in deletedObjects. If the returned value is empty, the names are not encoded.
    
    getEncodingType()
    

### Delete multiple objects with specified names

The following code shows how to delete multiple objects with specified names.

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.model.DeleteObjectsRequest;
import com.aliyun.oss.model.DeleteObjectsResult;
import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.util.ArrayList;
import java.util.List;

public class Demo {
    public static void main(String[] args) throws Exception {
        // The endpoint of the China (Hangzhou) region is used in this example. Specify your actual endpoint.
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Obtain access credentials from environment variables. Before you run this code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are set.
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        // Enter the bucket name, for example, examplebucket.
        String bucketName = "examplebucket";
        // Enter the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set Region to cn-hangzhou.
        String region = "cn-hangzhou";

        // Create an OSSClient instance.
        // When the OSSClient instance is no longer in use, call the shutdown method to release resources.
        ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
        clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);        
        OSS ossClient = OSSClientBuilder.create()
        .endpoint(endpoint)
        .credentialsProvider(credentialsProvider)
        .clientConfiguration(clientBuilderConfiguration)
        .region(region)               
        .build();

        try {
            // Delete the objects.
            // Enter the full paths of the multiple objects to delete. The full paths cannot include the bucket name.
            List<String> keys = new ArrayList<String>();
            keys.add("exampleobjecta.txt");
            keys.add("testfolder/sampleobject.txt");
            keys.add("exampleobjectb.txt");

            DeleteObjectsResult deleteObjectsResult = ossClient.deleteObjects(new DeleteObjectsRequest(bucketName).withKeys(keys).withEncodingType("url"));
            List<String> deletedObjects = deleteObjectsResult.getDeletedObjects();
            try {
                for(String obj : deletedObjects) {
                    String deleteObj =  URLDecoder.decode(obj, "UTF-8");
                    System.out.println(deleteObj);
                }
            } catch (UnsupportedEncodingException e) {
                e.printStackTrace();
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

### Delete multiple objects with a specified prefix or in a directory

The following code shows how to delete multiple objects with a specified prefix, or a directory and all objects in it.

**Warning**

If the value of the prefix parameter in the following sample code is an empty string or NULL, all objects in the bucket are deleted. Exercise caution when you use this parameter.

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.model.*;
import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.util.ArrayList;
import java.util.List;

public class Demo {
    public static void main(String[] args) throws Exception {
        // The endpoint of the China (Hangzhou) region is used in this example. Specify your actual endpoint.
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Obtain access credentials from environment variables. Before you run this code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are set.
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        // Enter the bucket name, for example, examplebucket.
        String bucketName = "examplebucket";
        // To delete all objects whose names have the src prefix, set prefix to src. This deletes all non-folder objects with the src prefix, the src folder, and all objects in the src folder.
        String prefix = "src";
        // To delete only the src folder and all objects in it, set prefix to src/.
        // String prefix = "src/";
        // Enter the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set Region to cn-hangzhou.
        String region = "cn-hangzhou";

        // Create an OSSClient instance.
        // When the OSSClient instance is no longer in use, call the shutdown method to release resources.
        ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
        clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);        
        OSS ossClient = OSSClientBuilder.create()
        .endpoint(endpoint)
        .credentialsProvider(credentialsProvider)
        .clientConfiguration(clientBuilderConfiguration)
        .region(region)               
        .build();

        try {
            // List all objects that have the specified prefix and then delete them.
            String nextMarker = null;
            ObjectListing objectListing = null;
            do {
                ListObjectsRequest listObjectsRequest = new ListObjectsRequest(bucketName)
                        .withPrefix(prefix)
                        .withMarker(nextMarker);

                objectListing = ossClient.listObjects(listObjectsRequest);
                if (objectListing.getObjectSummaries().size() > 0) {
                    List<String> keys = new ArrayList<String>();
                    for (OSSObjectSummary s : objectListing.getObjectSummaries()) {
                        System.out.println("key name: " + s.getKey());
                        keys.add(s.getKey());
                    }
                    DeleteObjectsRequest deleteObjectsRequest = new DeleteObjectsRequest(bucketName).withKeys(keys).withEncodingType("url");
                    DeleteObjectsResult deleteObjectsResult = ossClient.deleteObjects(deleteObjectsRequest);
                    List<String> deletedObjects = deleteObjectsResult.getDeletedObjects();
                    try {
                        for(String obj : deletedObjects) {
                            String deleteObj =  URLDecoder.decode(obj, "UTF-8");
                            System.out.println(deleteObj);
                        }
                    } catch (UnsupportedEncodingException e) {
                        e.printStackTrace();
                    }
                }

                nextMarker = objectListing.getNextMarker();
            } while (objectListing.isTruncated());
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

## FAQ

### After I delete a single object using the OSS SDK for Java, how do I confirm that the object is deleted?

When you use the `OSSClient` `deleteObject` method in the OSS SDK for Java to delete an object, the deletion is successful if no exception is thrown. To confirm that the object is deleted, you can call the `OSSClient` `doesObjectExist` method. If the method returns `false`, the object is deleted. For more information, see [Determine whether an object exists (Java SDK V1)](/help/en/oss/developer-reference/determine-whether-an-object-exists-1#concept-84837-zh).

## References

-   Delete a single object
    
    For more information about the API operation to delete a single object, see [DeleteObject](/help/en/oss/developer-reference/deleteobject#reference-iqc-mqv-wdb).
    
-   Delete multiple objects
    
    -   For the complete sample code for deleting multiple objects, see the [GitHub example](https://github.com/aliyun/aliyun-oss-java-sdk/blob/master/src/samples/DeleteObjectsSample.java).
        
    -   For more information about the API operation to delete multiple objects, see [DeleteMultipleObjects](/help/en/oss/developer-reference/deletemultipleobjects#reference-ydg-25v-wdb).
