A symbolic link is a pointer to a target object in OSS (Object Storage Service). You can use a symbolic link to access the target object through the symlink name, without knowing its actual path.

## Prerequisites

Before you begin, ensure that you have:

-   `oss:PutObject` permission to create a symbolic link
    
-   `oss:GetObject` permission to query a symbolic link
    

For details on granting permissions, see [Attach a custom policy to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip).

## Usage notes

-   The examples use the public endpoint for the China (Hangzhou) region. To access OSS from other Alibaba Cloud services in the same region, use an internal endpoint. For supported regions and endpoints, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints).
    
-   Access credentials are read from environment variables. For setup instructions, see [Configure access credentials](/help/en/oss/developer-reference/oss-java-configure-access-credentials).
    
-   The examples create an OSSClient instance using an OSS endpoint. To create an instance using a custom domain name or Security Token Service (STS), see [Configuration examples for common scenarios](/help/en/oss/developer-reference/initialization-3).
    

## Create a symbolic link

The following example creates a symbolic link that points to a target object. It sets content type and user metadata on the symlink, and includes commented-out optional headers for ACL, storage class, and overwrite prevention.

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.model.*;

public class Demo {
    public static void main(String[] args) throws Exception {
        // In this example, the endpoint of the China (Hangzhou) region is used. Specify your actual endpoint.
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        // Specify the name of the bucket. Example: examplebucket.
        String bucketName = "examplebucket";
        // Specify the name of the symbolic link that you want to create.
        String symLink = "yourSymLink";
        // Specify the name of the object to which you want the symbolic link to point.
        String destinationObjectName = "yourDestinationObjectName";
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
            // Create metadata for the object that you want to upload.
            ObjectMetadata metadata = new ObjectMetadata();
            metadata.setContentType("text/plain");
            // Set the property parameter for the user metadata to property-value.
            metadata.addUserMetadata("property", "property-value");

            // Specify whether to overwrite the object that has the same name as the symbolic link.
            // metadata.setHeader("x-oss-forbid-overwrite", "true");
            // Specify the access control list (ACL) of the object.
            // metadata.setHeader(OSSHeaders.OSS_OBJECT_ACL, CannedAccessControlList.Default);
            // Specify the storage class of the object.
            // metadata.setHeader(OSSHeaders.OSS_STORAGE_CLASS, StorageClass.Standard);

            // Create a CreateSymlinkRequest to create the symbolic link.
            CreateSymlinkRequest createSymlinkRequest = new CreateSymlinkRequest(bucketName, symLink, destinationObjectName);

            // Configure the metadata.
            createSymlinkRequest.setMetadata(metadata);

            // Create the symbolic link.
            ossClient.createSymlink(createSymlinkRequest);

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

## Query a symbolic link

To query a symbolic link, you must have read permissions on the symbolic link. The following example retrieves a symbolic link and the name of the target object it points to.

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.model.*;

public class Demo {
    public static void main(String[] args) throws Exception {
        // In this example, the endpoint of the China (Hangzhou) region is used. Specify your actual endpoint.
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        // Specify the name of the bucket. Example: examplebucket.
        String bucketName = "examplebucket";
        // Specify the name of the symbolic link that you want to query.
        String symLink = "yourSymLink";
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
            // Query the symbolic link and the name of the object to which the symbolic link points.
            OSSSymlink symbolicLink = ossClient.getSymlink(bucketName, symLink);
            System.out.println(symbolicLink.getSymlink());
            System.out.println(symbolicLink.getTarget());
            System.out.println(symbolicLink.getRequestId());
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

-   [PutSymlink](/help/en/oss/developer-reference/putsymlink#reference-qzz-qzw-wdb) — API operation for creating a symbolic link
    
-   [GetSymlink](/help/en/oss/developer-reference/getsymlink#reference-s3d-s1x-wdb) — API operation for querying a symbolic link
