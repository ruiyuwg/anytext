This topic describes how to list objects in a versioned bucket. You can list all objects, a specific number of objects, or objects whose names contain a specific prefix.

## Usage notes

-   In this topic, the public endpoint of the China (Hangzhou) region is used. To access OSS from other Alibaba Cloud services in the same region, use an internal endpoint. For details about supported regions and endpoints, see [OSS regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints#concept-zt4-cvy-5db).
    
-   In this topic, access credentials are obtained from environment variables. For more information about how to configure access credentials, see [Configure access credentials](/help/en/oss/developer-reference/oss-java-configure-access-credentials#main-2350752).
    
-   In this topic, an OSSClient instance is created by using an OSS endpoint. If you want to create an OSSClient instance by using custom domain names or Security Token Service (STS), see [Configuration examples for common scenarios](/help/en/oss/developer-reference/initialization-3#section-ngr-tjb-kfb).
    
-   To list objects, you must have the `oss:ListObjectVersions` permission. For more information, see [Attach a custom policy to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip).
    

## List all object versions in a bucket

The following code provides an example of how to list all object versions, including delete markers, in a bucket.

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.model.*;

public class Demo {
    public static void main(String[] args) throws Exception {
        // Set the endpoint. This example uses the public endpoint of the China (Hangzhou) region. Specify the actual endpoint.
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        // Specify the bucket name. Example: examplebucket.
        String bucketName = "examplebucket";
        // Specify the region in which the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the region to cn-hangzhou.
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
            // List the versions of all objects, including delete markers.
            String nextKeyMarker = null;
            String nextVersionMarker = null;
            VersionListing versionListing = null;
            do {
                ListVersionsRequest listVersionsRequest = new ListVersionsRequest()
                        .withBucketName(bucketName)
                        .withKeyMarker(nextKeyMarker)
                        .withVersionIdMarker(nextVersionMarker);

                versionListing = ossClient.listVersions(listVersionsRequest);
                for (OSSVersionSummary ossVersion : versionListing.getVersionSummaries()) {
                    System.out.println("key name: " + ossVersion.getKey());
                    System.out.println("versionid: " + ossVersion.getVersionId());
                    System.out.println("Is latest: " + ossVersion.isLatest());
                    System.out.println("Is delete marker: " + ossVersion.isDeleteMarker());
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

## List object versions that have a specific prefix

The following code provides an example of how to list object versions that have a specific prefix.

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.internal.OSSConstants;
import com.aliyun.oss.model.*;

public class Demo {
    public static void main(String[] args) throws Exception {
        // Set the endpoint. This example uses the public endpoint of the China (Hangzhou) region. Specify the actual endpoint.
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        // Specify the bucket name. Example: examplebucket.
        String bucketName = "examplebucket";
        // Specify the region in which the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the region to cn-hangzhou.
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
            // List the versions of objects whose names have the "test-" prefix.
            String prefix = "test-";
            String nextKeyMarker = null;
            String nextVersionMarker = null;
            VersionListing versionListing = null;
            do {
                ListVersionsRequest listVersionsRequest = new ListVersionsRequest()
                        .withBucketName(bucketName)
                        .withKeyMarker(nextKeyMarker)
                        .withVersionIdMarker(nextVersionMarker)
                        .withEncodingType(OSSConstants.URL_ENCODING)
                        .withPrefix(prefix);

                versionListing = ossClient.listVersions(listVersionsRequest);
                // View the object version information.
                for (OSSVersionSummary ossVersion : versionListing.getVersionSummaries()) {
                    System.out.println("key name: " + ossVersion.getKey());
                    System.out.println("versionid: " + ossVersion.getVersionId());
                    System.out.println("Is latest: " + ossVersion.isLatest());
                    System.out.println("Is delete marker: " + ossVersion.isDeleteMarker());
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

## List a specific number of object versions

The following code provides an example of how to list a specific number of object versions.

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.model.*;

public class Demo {
    public static void main(String[] args) throws Exception {
        // Set the endpoint. This example uses the public endpoint of the China (Hangzhou) region. Specify the actual endpoint.
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        // Specify the bucket name. Example: examplebucket.
        String bucketName = "examplebucket";
        // Specify the region in which the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the region to cn-hangzhou.
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
            // Specify that a maximum of 200 results are returned.
            ListVersionsRequest listVersionsRequest = new ListVersionsRequest()
                    .withBucketName(bucketName)
                    .withMaxResults(200);

            VersionListing versionListing = ossClient.listVersions(listVersionsRequest);
            for (OSSVersionSummary ossVersion : versionListing.getVersionSummaries()) {
                System.out.println("key name: " + ossVersion.getKey());
                // If versioning is not enabled, the VersionId is none.
                System.out.println("versionid: " + ossVersion.getVersionId());
                System.out.println("Is latest: " + ossVersion.isLatest());
                System.out.println("Is delete marker: " + ossVersion.isDeleteMarker());
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

## List all object versions by page

The following code provides an example of how to list all object versions by page.

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.model.*;

public class Demo {
    public static void main(String[] args) throws Exception {
        // Set the endpoint. This example uses the public endpoint of the China (Hangzhou) region. Specify the actual endpoint.
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        // Specify the bucket name. Example: examplebucket.
        String bucketName = "examplebucket";
        // Set the number of files to list on each page to 200.
        int maxKeys = 200;

        // Specify the region in which the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the region to cn-hangzhou.
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
            // List all object versions by page.
            String nextKeyMarker = null;
            String nextVersionMarker = null;
            VersionListing versionListing = null;
            do {
                ListVersionsRequest listVersionsRequest = new ListVersionsRequest()
                        .withBucketName(bucketName)
                        .withKeyMarker(nextKeyMarker)
                        .withMaxResults(maxKeys)
                        .withVersionIdMarker(nextVersionMarker);

                versionListing = ossClient.listVersions(listVersionsRequest);
                for (OSSVersionSummary ossVersion : versionListing.getVersionSummaries()) {
                    System.out.println("key name: " + ossVersion.getKey());
                    System.out.println("versionid: " + ossVersion.getVersionId());
                    System.out.println("Is latest: " + ossVersion.isLatest());
                    System.out.println("Is delete marker: " + ossVersion.isDeleteMarker());
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

## List objects that have special characters in their names

If an object name contains special characters, you must URL-encode the object name for transmission. OSS supports only URL encoding.

-   Single quotation marks (' ')
    
-   Double quotation marks (" ")
    
-   Ampersands (&)
    
-   Angle brackets (< >)
    
-   Enumeration comma (、)
    
-   Chinese characters
    

The following code provides an example of how to list objects that have special characters in their names.

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.internal.OSSConstants;
import com.aliyun.oss.model.*;

public class Demo {
    public static void main(String[] args) throws Exception {
        // Set the endpoint. This example uses the public endpoint of the China (Hangzhou) region. Specify the actual endpoint.
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        // Specify the bucket name. Example: examplebucket.
        String bucketName = "examplebucket";

        // Specify the region in which the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the region to cn-hangzhou.
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
            // Specify that the results are URL-encoded for transmission.
            String nextKeyMarker = null;
            String nextVersionMarker = null;
            VersionListing versionListing = null;
            do {
                ListVersionsRequest listVersionsRequest = new ListVersionsRequest()
                        .withBucketName(bucketName)
                        .withKeyMarker(nextKeyMarker)
                        .withVersionIdMarker(nextVersionMarker)
                        .withEncodingType(OSSConstants.URL_ENCODING);

                versionListing = ossClient.listVersions(listVersionsRequest);
                // View the object version information.
                for (OSSVersionSummary ossVersion : versionListing.getVersionSummaries()) {
                    System.out.println("key name: " + ossVersion.getKey());
                    System.out.println("versionid: " + ossVersion.getVersionId());
                    System.out.println("Is latest: " + ossVersion.isLatest());
                    System.out.println("Is delete marker: " + ossVersion.isDeleteMarker());
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

## Folder feature

OSS does not have the concept of folders. Instead, all elements are stored as objects. Creating a folder is equivalent to creating a zero-byte object that ends with a forward slash (/). You can upload and download this object. The OSS console displays objects that end with a forward slash (/) as folders.

You can use the delimiter and prefix parameters to simulate folders.

-   If you set the prefix parameter to a folder name, objects whose names have this prefix are listed. This means all objects and subdirectories in the folder are returned.
    
-   If you set the prefix parameter and set the delimiter parameter to a forward slash (/), only the objects and subdirectories in the folder are listed. The subdirectories in the folder are returned as CommonPrefixes. The objects and folders in the subdirectories are not listed.
    

Assume that a bucket contains the oss.jpg, fun/test.jpg, fun/movie/001.avi, and fun/movie/007.avi objects, and the folder separator is a forward slash (/). The following examples show how to list objects by simulating folders.

-   List object versions in the root directory
    
    The following code provides an example of how to list the object versions in the root directory.
    
    ```
    import com.aliyun.oss.*;
    import com.aliyun.oss.common.auth.*;
    import com.aliyun.oss.common.comm.SignVersion;
    import com.aliyun.oss.internal.OSSConstants;
    import com.aliyun.oss.model.*;
    
    public class Demo {
        public static void main(String[] args) throws Exception {
            // Set the endpoint. This example uses the public endpoint of the China (Hangzhou) region. Specify the actual endpoint.
            String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
            // Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
            EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
            // Specify the bucket name. Example: examplebucket.
            String bucketName = "examplebucket";
    
            // Specify the region in which the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the region to cn-hangzhou.
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
                // Set the delimiter parameter to a forward slash (/) to list the object versions and folder names in the root directory.
                String delimiter = "/";
                String nextKeyMarker = null;
                String nextVersionMarker = null;
                VersionListing versionListing = null;
                do {
                    ListVersionsRequest listVersionsRequest = new ListVersionsRequest()
                            .withBucketName(bucketName)
                            .withKeyMarker(nextKeyMarker)
                            .withVersionIdMarker(nextVersionMarker)
                            .withEncodingType(OSSConstants.URL_ENCODING)
                            .withDelimiter(delimiter);
    
                    versionListing = ossClient.listVersions(listVersionsRequest);
                    // View the object version information.
                    for (OSSVersionSummary ossVersion : versionListing.getVersionSummaries()) {
                        System.out.println("key name: " + ossVersion.getKey());
                        System.out.println("versionid: " + ossVersion.getVersionId());
                        System.out.println("Is latest: " + ossVersion.isLatest());
                        System.out.println("Is delete marker: " + ossVersion.isDeleteMarker());
                    }
                    // View the names of folders that end with a forward slash (/) in the root directory.
                    for (String commonPrefix : versionListing.getCommonPrefixes()) {
                        System.out.println("commonPrefix: " + commonPrefix);
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
    
    Response:
    
    ```
    key name: oss.jpg
    versionid: CAEQEhiBgMCw8Y7FqBciIGIzMDE3MTEzOWRiMDRmZmFhMmRlMjljZWI0MWU4****
    Is latest: true
    Is delete marker: false
    
    commonPrefix: fun/
    ```
    
-   List objects and subdirectories in a specific directory
    
    The following code provides an example of how to list the objects and subdirectories in a specific directory.
    
    ```
    import com.aliyun.oss.*;
    import com.aliyun.oss.common.auth.*;
    import com.aliyun.oss.common.comm.SignVersion;
    import com.aliyun.oss.internal.OSSConstants;
    import com.aliyun.oss.model.*;
    
    public class Demo {
        public static void main(String[] args) throws Exception {
            // Set the endpoint. This example uses the public endpoint of the China (Hangzhou) region. Specify the actual endpoint.
            String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
            // Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured.
            EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
            // Specify the bucket name. Example: examplebucket.
            String bucketName = "examplebucket";
    
            // Specify the region in which the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the region to cn-hangzhou.
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
                // Set the prefix parameter to obtain all objects and folders in the fun directory. Set the delimiter parameter to a forward slash (/) as the folder separator.
                String prefix = "fun/";  
                String delimiter = "/";
                String nextKeyMarker = null;
                String nextVersionMarker = null;
                VersionListing versionListing = null;
                do {
                    ListVersionsRequest listVersionsRequest = new ListVersionsRequest()
                            .withBucketName(bucketName)
                            .withKeyMarker(nextKeyMarker)
                            .withVersionIdMarker(nextVersionMarker)
                            .withEncodingType(OSSConstants.URL_ENCODING)
                            .withDelimiter(delimiter)
                            .withPrefix(prefix);
    
                    versionListing = ossClient.listVersions(listVersionsRequest);
                    // View the object version information.
                    for (OSSVersionSummary ossVersion : versionListing.getVersionSummaries()) {
                        System.out.println("key name: " + ossVersion.getKey());
                        System.out.println("versionid: " + ossVersion.getVersionId());
                        System.out.println("Is latest: " + ossVersion.isLatest());
                        System.out.println("Is delete marker: " + ossVersion.isDeleteMarker());
                    }
                    // View the names of subdirectories in the fun directory.
                    for (String commonPrefix : versionListing.getCommonPrefixes()) {
                        System.out.println("commonPrefix: " + commonPrefix);
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
    
    Response:
    
    ```
    key name: fun/test.jpg
    versionid: CAEQEhiBgIC48Y7FqBciIDU4NjAzMjczMTY5NDRjYmVhNGY4NTM2YTdjY2Ji****
    Is latest: true
    Is delete marker: false
    
    commonPrefix: fun/movie/
    ```
