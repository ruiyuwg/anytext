In addition to bucket-level access control lists (ACLs), Object Storage Service (OSS) provides object-level ACLs. You can configure the ACL for an object when you upload it, or you can change the ACL of an existing object at any time.

## Usage notes

-   In this topic, the public endpoint of the China (Hangzhou) region is used. To access OSS from other Alibaba Cloud services in the same region, use an internal endpoint. For details about supported regions and endpoints, see [OSS regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints#concept-zt4-cvy-5db).
    
-   In this topic, access credentials are obtained from environment variables. For more information about how to configure access credentials, see [Configure access credentials](/help/en/oss/developer-reference/oss-java-configure-access-credentials#main-2350752).
    
-   In this topic, an OSSClient instance is created by using an OSS endpoint. If you want to create an OSSClient instance by using custom domain names or Security Token Service (STS), see [Configuration examples for common scenarios](/help/en/oss/developer-reference/initialization-3#section-ngr-tjb-kfb).
    
-   To configure the ACL for an object, you must have the `oss:PutObjectAcl` permission. To query the ACL of an object, you must have the `oss:GetObjectAcl` permission. For more information, see [Attach a custom policy to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip).
    

## ACL types

An Object supports the following four access control lists (ACLs):

**Note**

The ACL of an object takes precedence over the ACL of the bucket in which the object is stored. For example, if the ACL of an object in a private bucket is set to public-read, all users, including anonymous users, can read the object.

**ACL type**

**Description**

**Value**

Inherited from bucket (default)

The object inherits the ACL of the bucket in which it is stored. This is the default ACL for an object.

CannedAccessControlList.Default

Private

Only the object owner can read and write the object. Other users cannot access the object.

CannedAccessControlList.Private

Public-read

Only the object owner can write the object. All users, including anonymous users, can read the object.

**Warning**

This may result in unauthorized access to data in your bucket and high costs. Exercise caution when you set the object ACL to public-read.

CannedAccessControlList.PublicRead

Public-read-write

All users, including anonymous users, can read and write the object.

**Warning**

If you set the object ACL to this value, all users can access the object and write data to the object over the Internet. This may result in unauthorized access to data in your bucket and high costs. If a user uploads prohibited data or information to the bucket, your legitimate interests and rights may be infringed. Therefore, we recommend that you do not set the ACL of a bucket to public-read-write unless necessary.

CannedAccessControlList.PublicReadWrite

## Configure the ACL of an object

The following code provides an example of how to set the ACL of an object:

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.model.CannedAccessControlList;

public class Demo {
    public static void main(String[] args) throws Exception {
        // In this example, the endpoint of the China (Hangzhou) region is used. Specify your actual endpoint.
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        // Specify the name of the bucket. Example: examplebucket.
        String bucketName = "examplebucket";
        // Specify the full path of the object. Do not include the bucket name in the full path. Example: testfolder/exampleobject.txt.
        String objectName = "testfolder/exampleobject.txt";
        // Specify the region in which the bucket is located. For example, if the bucket is located in the China (Hangzhou) region, set the region to cn-hangzhou.
        String region = "cn-hangzhou";

        // Create an OSSClient instance.
        // When the OSSClient instance is no longer in use, call the shutdown method to release the resources.
        ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
        clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);        
        OSS ossClient = OSSClientBuilder.create()
        .endpoint(endpoint)
        .credentialsProvider(credentialsProvider)
        .clientConfiguration(clientBuilderConfiguration)
        .region(region)               
        .build();

        try {
            // Set the ACL of the object to public-read.
            ossClient.setObjectAcl(bucketName, objectName, CannedAccessControlList.PublicRead);
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

## Query the ACL of an object

The following code provides an example of how to query the ACL of an object:

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.model.ObjectAcl;

public class Demo {
    public static void main(String[] args) throws Exception {
        // In this example, the endpoint of the China (Hangzhou) region is used. Specify your actual endpoint.
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        // Specify the name of the bucket. Example: examplebucket.
        String bucketName = "examplebucket";
        // Specify the full path of the object. Do not include the bucket name in the full path. Example: testfolder/exampleobject.txt.
        String objectName = "testfolder/exampleobject.txt";
        // Specify the region in which the bucket is located. For example, if the bucket is located in the China (Hangzhou) region, set the region to cn-hangzhou.
        String region = "cn-hangzhou";

        // Create an OSSClient instance.
        // When the OSSClient instance is no longer in use, call the shutdown method to release the resources.
        ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
        clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);        
        OSS ossClient = OSSClientBuilder.create()
        .endpoint(endpoint)
        .credentialsProvider(credentialsProvider)
        .clientConfiguration(clientBuilderConfiguration)
        .region(region)               
        .build();

        try {
            // Query the ACL of the object.
            ObjectAcl objectAcl = ossClient.getObjectAcl(bucketName, objectName);
            System.out.println(objectAcl.getPermission().toString());
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

-   For the complete sample code for object ACLs, see the [GitHub example](https://github.com/aliyun/aliyun-oss-java-sdk/blob/master/src/samples/GetStartedSample.java).
    
-   For more information about the API operation to configure the ACL of an object, see [PutObjectACL](/help/en/oss/developer-reference/putobjectacl#reference-fs3-gfw-wdb).
    
-   For more information about the API operation to query the ACL of an object, see [GetObjectACL](/help/en/oss/developer-reference/getobjectacl#reference-lzc-24w-wdb).
