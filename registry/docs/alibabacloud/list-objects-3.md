Use the OSS Java SDK to list objects in a bucket — all at once, filtered by prefix, or paginated across large datasets.

## Prerequisites

Before you begin, make sure you have:

-   An OSS bucket
    
-   The `oss:ListObjects` permission. For details, see [Grant custom permissions to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip)
    
-   The `OSS_ACCESS_KEY_ID` and `OSS_ACCESS_KEY_SECRET` environment variables configured. For details, see [Configure access credentials](/help/en/oss/developer-reference/oss-java-configure-access-credentials)
    

## Usage notes

-   The examples in this topic use the public endpoint for the China (Hangzhou) region. If your application runs within Alibaba Cloud in the same region as your bucket, use the internal endpoint instead. For supported regions and endpoints, see [OSS regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints).
    
-   The examples create an OSSClient instance using an OSS endpoint. To use a custom domain name or Security Token Service (STS), see [Configuration examples for common scenarios](/help/en/oss/developer-reference/initialization-3).
    

## Background

OSS provides two API operations for listing objects in a bucket:

**GetBucket (ListObjects)** and **GetBucketV2 (ListObjectsV2)** both list up to 1,000 objects per request, support prefix filtering, directory-style traversal, and paginated results. The key difference is owner information: ListObjects always returns it, while ListObjectsV2 omits it by default and returns it only when you set `fetchOwner` to `true`.

> For buckets with versioning enabled, use GetBucketV2 (ListObjectsV2).

**Paging.** A single request returns at most 1,000 objects (default: 100). For larger result sets, use paginated listing. ListObjects uses a `marker`/`nextMarker` pair; ListObjectsV2 uses `continuationToken`/`nextContinuationToken`. Keep requesting until `isTruncated` is `false`.

## Simple listing

Both methods list all objects in a bucket. By default, each request returns up to 100 objects.

### Using GetBucket (ListObjects)

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.model.*;
import java.util.List;

public class Demo {
    public static void main(String[] args) throws Exception {
        // Replace with your actual endpoint.
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Credentials are read from OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET.
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        String bucketName = "examplebucket";
        // Replace with your prefix, e.g., "exampledir/object". Leave blank to list all objects.
        String keyPrefix = "exampledir/object";
        String region = "cn-hangzhou";

        ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
        clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);
        OSS ossClient = OSSClientBuilder.create()
            .endpoint(endpoint)
            .credentialsProvider(credentialsProvider)
            .clientConfiguration(clientBuilderConfiguration)
            .region(region)
            .build();

        try {
            ObjectListing objectListing = ossClient.listObjects(bucketName, keyPrefix);
            for (OSSObjectSummary s : objectListing.getObjectSummaries()) {
                System.out.println("\t" + s.getKey());
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

### Using GetBucketV2 (ListObjectsV2)

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.model.*;
import java.util.List;

public class Demo {
    public static void main(String[] args) throws Exception {
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        String bucketName = "examplebucket";
        String keyPrefix = "exampledir/object";
        String region = "cn-hangzhou";

        ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
        clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);
        OSS ossClient = OSSClientBuilder.create()
            .endpoint(endpoint)
            .credentialsProvider(credentialsProvider)
            .clientConfiguration(clientBuilderConfiguration)
            .region(region)
            .build();

        try {
            ListObjectsV2Result result = ossClient.listObjectsV2(bucketName, keyPrefix);
            for (OSSObjectSummary s : result.getObjectSummaries()) {
                System.out.println("\t" + s.getKey());
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

## Filter and paginate with ListObjectsRequest

Use `ListObjectsRequest` to apply filters and retrieve paginated results from GetBucket (ListObjects).

**Parameter**

**Description**

**Method**

`prefix`

Return only objects whose names start with this prefix

`setPrefix(String prefix)`

`delimiter`

Group object names by this character. All names sharing the same string from the prefix to the first delimiter are collapsed into a single `CommonPrefixes` entry — useful for folder-style traversal

`setDelimiter(String delimiter)`

`marker`

Start listing after this object name (lexicographical order)

`setMarker(String marker)`

`maxKeys`

Maximum objects to return per request. Default: 100. Maximum: 1,000

`setMaxKeys(Integer maxKeys)`

`encodingType`

Encoding type for object names in the response. Only URL encoding is supported

`setEncodingType(String encodingType)`

### List a specific number of objects

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.model.*;
import java.util.List;

public class Demo {
    public static void main(String[] args) throws Exception {
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        String bucketName = "examplebucket";
        String region = "cn-hangzhou";

        ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
        clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);
        OSS ossClient = OSSClientBuilder.create()
            .endpoint(endpoint)
            .credentialsProvider(credentialsProvider)
            .clientConfiguration(clientBuilderConfiguration)
            .region(region)
            .build();

        try {
            final int maxKeys = 200;
            ObjectListing objectListing = ossClient.listObjects(
                new ListObjectsRequest(bucketName).withMaxKeys(maxKeys));
            for (OSSObjectSummary s : objectListing.getObjectSummaries()) {
                System.out.println("\t" + s.getKey());
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

### List objects with a specific prefix

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.model.*;
import java.util.List;

public class Demo {
    public static void main(String[] args) throws Exception {
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        String bucketName = "examplebucket";
        String keyPrefix = "exampledir/object";
        String region = "cn-hangzhou";

        ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
        clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);
        OSS ossClient = OSSClientBuilder.create()
            .endpoint(endpoint)
            .credentialsProvider(credentialsProvider)
            .clientConfiguration(clientBuilderConfiguration)
            .region(region)
            .build();

        try {
            // Returns up to 100 objects (default) whose names start with keyPrefix.
            ObjectListing objectListing = ossClient.listObjects(
                new ListObjectsRequest(bucketName).withPrefix(keyPrefix));
            for (OSSObjectSummary s : objectListing.getObjectSummaries()) {
                System.out.println("\t" + s.getKey());
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

### List objects after a specific marker

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.model.*;
import java.util.List;

public class Demo {
    public static void main(String[] args) throws Exception {
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        String bucketName = "examplebucket";
        // Objects whose names are lexicographically after "ex" are returned.
        String marker = "ex";
        String region = "cn-hangzhou";

        ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
        clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);
        OSS ossClient = OSSClientBuilder.create()
            .endpoint(endpoint)
            .credentialsProvider(credentialsProvider)
            .clientConfiguration(clientBuilderConfiguration)
            .region(region)
            .build();

        try {
            ObjectListing objectListing = ossClient.listObjects(
                new ListObjectsRequest(bucketName).withMarker(marker));
            for (OSSObjectSummary s : objectListing.getObjectSummaries()) {
                System.out.println("\t" + s.getKey());
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

### List all objects by page

Use a `do-while` loop. Pass `nextMarker` from each response as the `marker` for the next request, and stop when `isTruncated` is `false`.

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.model.*;
import java.util.List;

public class Demo {
    public static void main(String[] args) throws Exception {
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        String bucketName = "examplebucket";
        // maxKeys is set to 200 to demonstrate multi-page listing.
        // Each page returns up to 200 objects until isTruncated is false.
        int maxKeys = 200;
        String region = "cn-hangzhou";

        ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
        clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);
        OSS ossClient = OSSClientBuilder.create()
            .endpoint(endpoint)
            .credentialsProvider(credentialsProvider)
            .clientConfiguration(clientBuilderConfiguration)
            .region(region)
            .build();

        try {
            String nextMarker = null;
            ObjectListing objectListing;

            do {
                objectListing = ossClient.listObjects(
                    new ListObjectsRequest(bucketName).withMarker(nextMarker).withMaxKeys(maxKeys));

                for (OSSObjectSummary s : objectListing.getObjectSummaries()) {
                    System.out.println("\t" + s.getKey());
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

### List objects with a specific prefix by page

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.model.*;
import java.util.List;

public class Demo {
    public static void main(String[] args) throws Exception {
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        String bucketName = "examplebucket";
        int maxKeys = 200;
        String keyPrefix = "exampledir/object";
        String nextMarker = "objecttest.txt";
        String region = "cn-hangzhou";

        ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
        clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);
        OSS ossClient = OSSClientBuilder.create()
            .endpoint(endpoint)
            .credentialsProvider(credentialsProvider)
            .clientConfiguration(clientBuilderConfiguration)
            .region(region)
            .build();

        try {
            ObjectListing objectListing;

            do {
                objectListing = ossClient.listObjects(new ListObjectsRequest(bucketName)
                    .withPrefix(keyPrefix).withMarker(nextMarker).withMaxKeys(maxKeys));

                for (OSSObjectSummary s : objectListing.getObjectSummaries()) {
                    System.out.println("\t" + s.getKey());
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

### Encode object names containing special characters

If an object name contains any of the following characters, encode the name before transmission. OSS supports URL encoding only.

-   Single quotation marks (`'`)
    
-   Double quotation marks (`"`)
    
-   Ampersands (`&`)
    
-   Angle brackets (`<` `>`)
    
-   Enumeration commas (`、`)
    
-   Chinese characters
    

Set `encodingType` to `"url"` in the request, then URL-decode the object names, common prefixes, and `nextMarker` in the response.

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.model.*;
import java.net.URLDecoder;

public class Demo {
    public static void main(String[] args) throws Exception {
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        String bucketName = "examplebucket";
        int maxKeys = 200;
        String keyPrefix = "exampledir/object";
        String nextMarker = "objecttest.txt";
        String region = "cn-hangzhou";

        ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
        clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);
        OSS ossClient = OSSClientBuilder.create()
            .endpoint(endpoint)
            .credentialsProvider(credentialsProvider)
            .clientConfiguration(clientBuilderConfiguration)
            .region(region)
            .build();

        try {
            ObjectListing objectListing;

            do {
                ListObjectsRequest listObjectsRequest = new ListObjectsRequest(bucketName);
                listObjectsRequest.setPrefix(keyPrefix);
                listObjectsRequest.setMaxKeys(maxKeys);
                listObjectsRequest.setMarker(nextMarker);
                listObjectsRequest.setEncodingType("url");

                objectListing = ossClient.listObjects(listObjectsRequest);

                // Decode object names.
                for (OSSObjectSummary objectSummary : objectListing.getObjectSummaries()) {
                    System.out.println("Key:" + URLDecoder.decode(objectSummary.getKey(), "UTF-8"));
                }

                // Decode commonPrefixes.
                for (String commonPrefixes : objectListing.getCommonPrefixes()) {
                    System.out.println("CommonPrefixes:" + URLDecoder.decode(commonPrefixes, "UTF-8"));
                }

                // Decode nextMarker before using it in the next request.
                if (objectListing.getNextMarker() != null) {
                    nextMarker = URLDecoder.decode(objectListing.getNextMarker(), "UTF-8");
                }
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

## Filter and paginate with ListObjectsV2Request

Use `ListObjectsV2Request` to apply filters and retrieve paginated results from GetBucketV2 (ListObjectsV2).

**Parameter**

**Description**

**Method**

`prefix`

Return only objects whose names start with this prefix

`setPrefix(String prefix)`

`delimiter`

Group object names by this character. All names sharing the same string from the prefix to the first delimiter are collapsed into a single `CommonPrefixes` entry

`setDelimiter(String delimiter)`

`maxKeys`

Maximum objects to return per request. Default: 100. Maximum: 1,000

`setMaxKeys(Integer maxKeys)`

`startAfter`

Start listing after this object name (lexicographical order)

`setStartAfter(String startAfter)`

`continuationToken`

Pagination token from the previous response

`setContinuationToken(String continuationToken)`

`encodingType`

Encoding type for object names in the response. Only URL encoding is supported

`setEncodingType(String encodingType)`

`fetchOwner`

Set to `true` to include owner information in the response. Omitted by default

`setFetchOwner(boolean fetchOwner)`

### List a specific number of objects

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.model.*;
import java.util.List;

public class Demo {
    public static void main(String[] args) throws Exception {
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        String bucketName = "examplebucket";
        // The default is 100. Set maxKeys to 200 to return up to 200 objects per request.
        int maxKeys = 200;
        String region = "cn-hangzhou";

        ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
        clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);
        OSS ossClient = OSSClientBuilder.create()
            .endpoint(endpoint)
            .credentialsProvider(credentialsProvider)
            .clientConfiguration(clientBuilderConfiguration)
            .region(region)
            .build();

        try {
            ListObjectsV2Request listObjectsV2Request = new ListObjectsV2Request(bucketName);
            listObjectsV2Request.setMaxKeys(maxKeys);
            ListObjectsV2Result result = ossClient.listObjectsV2(listObjectsV2Request);

            for (OSSObjectSummary s : result.getObjectSummaries()) {
                System.out.println("\t" + s.getKey());
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

### List objects with a specific prefix

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.model.*;
import java.util.List;

public class Demo {
    public static void main(String[] args) throws Exception {
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        String bucketName = "examplebucket";
        String prefix = "exampledir/object";
        String region = "cn-hangzhou";

        ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
        clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);
        OSS ossClient = OSSClientBuilder.create()
            .endpoint(endpoint)
            .credentialsProvider(credentialsProvider)
            .clientConfiguration(clientBuilderConfiguration)
            .region(region)
            .build();

        try {
            ListObjectsV2Request listObjectsV2Request = new ListObjectsV2Request(bucketName);
            listObjectsV2Request.setPrefix(prefix);
            ListObjectsV2Result result = ossClient.listObjectsV2(listObjectsV2Request);

            for (OSSObjectSummary s : result.getObjectSummaries()) {
                System.out.println("\t" + s.getKey());
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

### List objects after a specific startAfter value

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.model.*;
import java.util.List;

public class Demo {
    public static void main(String[] args) throws Exception {
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        String bucketName = "examplebucket";
        String region = "cn-hangzhou";

        ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
        clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);
        OSS ossClient = OSSClientBuilder.create()
            .endpoint(endpoint)
            .credentialsProvider(credentialsProvider)
            .clientConfiguration(clientBuilderConfiguration)
            .region(region)
            .build();

        try {
            // Objects whose names are lexicographically after "ex" are returned.
            ListObjectsV2Request listObjectsV2Request = new ListObjectsV2Request(bucketName);
            listObjectsV2Request.setStartAfter("ex");
            ListObjectsV2Result result = ossClient.listObjectsV2(listObjectsV2Request);

            for (OSSObjectSummary s : result.getObjectSummaries()) {
                System.out.println("\t" + s.getKey());
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

### Include owner information in results

By default, ListObjectsV2 omits owner information. Set `fetchOwner` to `true` to include it.

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.model.*;
import java.util.List;

public class Demo {
    public static void main(String[] args) throws Exception {
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        String bucketName = "examplebucket";
        String region = "cn-hangzhou";

        ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
        clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);
        OSS ossClient = OSSClientBuilder.create()
            .endpoint(endpoint)
            .credentialsProvider(credentialsProvider)
            .clientConfiguration(clientBuilderConfiguration)
            .region(region)
            .build();

        try {
            ListObjectsV2Request listObjectsV2Request = new ListObjectsV2Request(bucketName);
            listObjectsV2Request.setFetchOwner(true);
            ListObjectsV2Result result = ossClient.listObjectsV2(listObjectsV2Request);

            for (OSSObjectSummary s : result.getObjectSummaries()) {
                System.out.println("\t" + s.getKey());
                if (s.getOwner() != null) {
                    System.out.println("owner id:" + s.getOwner().getId());
                    System.out.println("name:" + s.getOwner().getDisplayName());
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

### List all objects by page

Use a `do-while` loop. Pass `nextContinuationToken` from each response as the `continuationToken` for the next request, and stop when `isTruncated` is `false`.

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.model.*;
import java.util.List;

public class Demo {
    public static void main(String[] args) throws Exception {
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        String bucketName = "examplebucket";
        // maxKeys is set to 200 to demonstrate multi-page listing.
        int maxKeys = 200;
        String region = "cn-hangzhou";

        ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
        clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);
        OSS ossClient = OSSClientBuilder.create()
            .endpoint(endpoint)
            .credentialsProvider(credentialsProvider)
            .clientConfiguration(clientBuilderConfiguration)
            .region(region)
            .build();

        try {
            String nextContinuationToken = null;
            ListObjectsV2Result result = null;

            do {
                ListObjectsV2Request listObjectsV2Request = new ListObjectsV2Request(bucketName).withMaxKeys(maxKeys);
                listObjectsV2Request.setContinuationToken(nextContinuationToken);
                result = ossClient.listObjectsV2(listObjectsV2Request);

                for (OSSObjectSummary s : result.getObjectSummaries()) {
                    System.out.println("\t" + s.getKey());
                }

                nextContinuationToken = result.getNextContinuationToken();
            } while (result.isTruncated());
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

### List objects with a specific prefix by page

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.model.*;
import java.util.List;

public class Demo {
    public static void main(String[] args) throws Exception {
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        String bucketName = "examplebucket";
        String keyPrefix = "exampledir/object";
        int maxKeys = 200;
        String region = "cn-hangzhou";

        ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
        clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);
        OSS ossClient = OSSClientBuilder.create()
            .endpoint(endpoint)
            .credentialsProvider(credentialsProvider)
            .clientConfiguration(clientBuilderConfiguration)
            .region(region)
            .build();

        try {
            String nextContinuationToken = null;
            ListObjectsV2Result result = null;

            do {
                ListObjectsV2Request listObjectsV2Request = new ListObjectsV2Request(bucketName).withMaxKeys(maxKeys);
                listObjectsV2Request.setPrefix(keyPrefix);
                listObjectsV2Request.setContinuationToken(nextContinuationToken);
                result = ossClient.listObjectsV2(listObjectsV2Request);

                for (OSSObjectSummary s : result.getObjectSummaries()) {
                    System.out.println("\t" + s.getKey());
                }

                nextContinuationToken = result.getNextContinuationToken();
            } while (result.isTruncated());
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

### Encode object names containing special characters

Set `encodingType` to `"url"`, then URL-decode the prefix, delimiter, startAfter, object names, and common prefixes in the response.

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.model.*;
import java.net.URLDecoder;

public class Demo {
    public static void main(String[] args) throws Exception {
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        String bucketName = "examplebucket";
        String keyPrefix = "exampledir/object";
        int maxKeys = 200;
        String region = "cn-hangzhou";

        ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
        clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);
        OSS ossClient = OSSClientBuilder.create()
            .endpoint(endpoint)
            .credentialsProvider(credentialsProvider)
            .clientConfiguration(clientBuilderConfiguration)
            .region(region)
            .build();

        try {
            String nextContinuationToken = null;
            ListObjectsV2Result result = null;

            do {
                ListObjectsV2Request listObjectsV2Request = new ListObjectsV2Request(bucketName).withMaxKeys(maxKeys);
                listObjectsV2Request.setPrefix(keyPrefix);
                listObjectsV2Request.setEncodingType("url");
                listObjectsV2Request.setContinuationToken(nextContinuationToken);
                result = ossClient.listObjectsV2(listObjectsV2Request);

                // Decode the prefix.
                if (result.getPrefix() != null) {
                    String prefix = URLDecoder.decode(result.getPrefix(), "UTF-8");
                    System.out.println("prefix: " + prefix);
                }

                // Decode the delimiter.
                if (result.getDelimiter() != null) {
                    String delimiter = URLDecoder.decode(result.getDelimiter(), "UTF-8");
                    System.out.println("delimiter: " + delimiter);
                }

                // Decode startAfter.
                if (result.getStartAfter() != null) {
                    String startAfter = URLDecoder.decode(result.getStartAfter(), "UTF-8");
                    System.out.println("startAfter: " + startAfter);
                }

                // Decode object names.
                for (OSSObjectSummary s : result.getObjectSummaries()) {
                    String decodedKey = URLDecoder.decode(s.getKey(), "UTF-8");
                    System.out.println("key: " + decodedKey);
                }

                // Decode commonPrefixes.
                for (String commonPrefix : result.getCommonPrefixes()) {
                    String decodedCommonPrefix = URLDecoder.decode(commonPrefix, "UTF-8");
                    System.out.println("CommonPrefix:" + decodedCommonPrefix);
                }

                nextContinuationToken = result.getNextContinuationToken();
            } while (result.isTruncated());
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

## Simulate a folder hierarchy

OSS stores all data in a flat structure — every folder is actually a zero-byte object whose name ends with a forward slash (`/`). The OSS console displays these objects as folders.

To browse objects as if they were in folders, combine `prefix` and `delimiter`:

-   **\`prefix\` only**: lists all objects and subdirectories under the specified path, recursively.
    
-   **\`prefix\` + \`delimiter\` (\`/\`)**: lists only the objects and immediate subdirectories at that path level. Subdirectories appear in `CommonPrefixes`; their contents are not listed.
    

The examples below use a bucket containing `oss.jpg`, `fun/test.jpg`, `fun/movie/001.avi`, and `fun/movie/007.avi`.

### List all objects in a bucket

Both methods return the same result: all four objects, with an empty `CommonPrefixes`.

-   Using GetBucket (ListObjects)
    
    ```
        import com.aliyun.oss.*;
        import com.aliyun.oss.common.auth.*;
        import com.aliyun.oss.common.comm.SignVersion;
        import com.aliyun.oss.model.*;
    
        public class Demo {
            public static void main(String[] args) throws Exception {
                String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
                EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
                String bucketName = "examplebucket";
                String region = "cn-hangzhou";
    
                ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
                clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);
                OSS ossClient = OSSClientBuilder.create()
                    .endpoint(endpoint)
                    .credentialsProvider(credentialsProvider)
                    .clientConfiguration(clientBuilderConfiguration)
                    .region(region)
                    .build();
    
                try {
                    ListObjectsRequest listObjectsRequest = new ListObjectsRequest(bucketName);
                    ObjectListing listing = ossClient.listObjects(listObjectsRequest);
    
                    System.out.println("Objects:");
                    for (OSSObjectSummary objectSummary : listing.getObjectSummaries()) {
                        System.out.println(objectSummary.getKey());
                    }
    
                    System.out.println("CommonPrefixes:");
                    for (String commonPrefix : listing.getCommonPrefixes()) {
                        System.out.println(commonPrefix);
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
    
-   Using GetBucketV2 (ListObjectsV2)
    
    ```
        import com.aliyun.oss.*;
        import com.aliyun.oss.common.auth.*;
        import com.aliyun.oss.common.comm.SignVersion;
        import com.aliyun.oss.model.*;
    
        public class Demo {
            public static void main(String[] args) throws Exception {
                String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
                EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
                String bucketName = "examplebucket";
                String region = "cn-hangzhou";
    
                ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
                clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);
                OSS ossClient = OSSClientBuilder.create()
                    .endpoint(endpoint)
                    .credentialsProvider(credentialsProvider)
                    .clientConfiguration(clientBuilderConfiguration)
                    .region(region)
                    .build();
    
                try {
                    ListObjectsV2Request listObjectsV2Request = new ListObjectsV2Request(bucketName);
                    ListObjectsV2Result result = ossClient.listObjectsV2(listObjectsV2Request);
    
                    System.out.println("Objects:");
                    for (OSSObjectSummary objectSummary : result.getObjectSummaries()) {
                        System.out.println(objectSummary.getKey());
                    }
    
                    System.out.println("CommonPrefixes:");
                    for (String commonPrefix : result.getCommonPrefixes()) {
                        System.out.println(commonPrefix);
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
    
-   Response
    
    ```
        Objects:
        fun/movie/001.avi
        fun/movie/007.avi
        fun/test.jpg
        oss.jpg
        CommonPrefixes:
    ```
    

### List all objects in a specific directory

Setting `prefix` to `"fun/"` lists every object under `fun/`, including those in subdirectories.

-   Using GetBucket (ListObjects)
    
    ```
        import com.aliyun.oss.*;
        import com.aliyun.oss.common.auth.*;
        import com.aliyun.oss.common.comm.SignVersion;
        import com.aliyun.oss.model.*;
    
        public class Demo {
            public static void main(String[] args) throws Exception {
                String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
                EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
                String bucketName = "examplebucket";
                String region = "cn-hangzhou";
    
                ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
                clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);
                OSS ossClient = OSSClientBuilder.create()
                    .endpoint(endpoint)
                    .credentialsProvider(credentialsProvider)
                    .clientConfiguration(clientBuilderConfiguration)
                    .region(region)
                    .build();
    
                try {
                    ListObjectsRequest listObjectsRequest = new ListObjectsRequest(bucketName);
                    // List all objects under fun/, including those in subdirectories.
                    listObjectsRequest.setPrefix("fun/");
    
                    ObjectListing listing = ossClient.listObjects(listObjectsRequest);
    
                    System.out.println("Objects:");
                    for (OSSObjectSummary objectSummary : listing.getObjectSummaries()) {
                        System.out.println(objectSummary.getKey());
                    }
    
                    System.out.println("\nCommonPrefixes:");
                    for (String commonPrefix : listing.getCommonPrefixes()) {
                        System.out.println(commonPrefix);
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
    
-   Using GetBucketV2 (ListObjectsV2)
    
    ```
        import com.aliyun.oss.*;
        import com.aliyun.oss.common.auth.*;
        import com.aliyun.oss.common.comm.SignVersion;
        import com.aliyun.oss.model.*;
    
        public class Demo {
            public static void main(String[] args) throws Exception {
                String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
                EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
                String bucketName = "examplebucket";
                String region = "cn-hangzhou";
    
                ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
                clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);
                OSS ossClient = OSSClientBuilder.create()
                    .endpoint(endpoint)
                    .credentialsProvider(credentialsProvider)
                    .clientConfiguration(clientBuilderConfiguration)
                    .region(region)
                    .build();
    
                try {
                    ListObjectsV2Request listObjectsV2Request = new ListObjectsV2Request(bucketName);
                    // List all objects under fun/, including those in subdirectories.
                    listObjectsV2Request.setPrefix("fun/");
    
                    ListObjectsV2Result result = ossClient.listObjectsV2(listObjectsV2Request);
    
                    System.out.println("Objects:");
                    for (OSSObjectSummary objectSummary : result.getObjectSummaries()) {
                        System.out.println(objectSummary.getKey());
                    }
    
                    System.out.println("\nCommonPrefixes:");
                    for (String commonPrefix : result.getCommonPrefixes()) {
                        System.out.println(commonPrefix);
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
    
-   Response
    
    ```
        Objects:
        fun/movie/001.avi
        fun/movie/007.avi
        fun/test.jpg
        CommonPrefixes:
    ```
    

### List objects and subdirectories in a directory

Setting both `prefix` to `"fun/"` and `delimiter` to `"/"` lists only the direct contents of `fun/`. The `fun/movie/` subdirectory appears in `CommonPrefixes`; `fun/movie/001.avi` and `fun/movie/007.avi` are not listed.

-   Using GetBucket (ListObjects)
    
    ```
        import com.aliyun.oss.*;
        import com.aliyun.oss.common.auth.*;
        import com.aliyun.oss.common.comm.SignVersion;
        import com.aliyun.oss.model.*;
    
        public class Demo {
            public static void main(String[] args) throws Exception {
                String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
                EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
                String bucketName = "examplebucket";
                String region = "cn-hangzhou";
    
                ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
                clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);
                OSS ossClient = OSSClientBuilder.create()
                    .endpoint(endpoint)
                    .credentialsProvider(credentialsProvider)
                    .clientConfiguration(clientBuilderConfiguration)
                    .region(region)
                    .build();
    
                try {
                    ListObjectsRequest listObjectsRequest = new ListObjectsRequest(bucketName);
                    listObjectsRequest.setPrefix("fun/");
                    // delimiter "/" groups subdirectories into CommonPrefixes instead of listing their contents.
                    listObjectsRequest.setDelimiter("/");
    
                    ObjectListing listing = ossClient.listObjects(listObjectsRequest);
    
                    System.out.println("Objects:");
                    for (OSSObjectSummary objectSummary : listing.getObjectSummaries()) {
                        System.out.println(objectSummary.getKey());
                    }
    
                    System.out.println("\nCommonPrefixes:");
                    for (String commonPrefix : listing.getCommonPrefixes()) {
                        System.out.println(commonPrefix);
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
    
-   Using GetBucketV2 (ListObjectsV2)
    
    ```
        import com.aliyun.oss.*;
        import com.aliyun.oss.common.auth.*;
        import com.aliyun.oss.common.comm.SignVersion;
        import com.aliyun.oss.model.*;
    
        public class Demo {
            public static void main(String[] args) throws Exception {
                String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
                EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
                String bucketName = "examplebucket";
                String region = "cn-hangzhou";
    
                ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
                clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);
                OSS ossClient = OSSClientBuilder.create()
                    .endpoint(endpoint)
                    .credentialsProvider(credentialsProvider)
                    .clientConfiguration(clientBuilderConfiguration)
                    .region(region)
                    .build();
    
                try {
                    ListObjectsV2Request listObjectsV2Request = new ListObjectsV2Request(bucketName);
                    listObjectsV2Request.setPrefix("fun/");
                    // delimiter "/" groups subdirectories into CommonPrefixes instead of listing their contents.
                    listObjectsV2Request.setDelimiter("/");
    
                    ListObjectsV2Result result = ossClient.listObjectsV2(listObjectsV2Request);
    
                    System.out.println("Objects:");
                    for (OSSObjectSummary objectSummary : result.getObjectSummaries()) {
                        System.out.println(objectSummary.getKey());
                    }
    
                    System.out.println("\nCommonPrefixes:");
                    for (String commonPrefix : result.getCommonPrefixes()) {
                        System.out.println(commonPrefix);
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
    
-   Response
    
    ```
        Objects:
        fun/test.jpg
    
        CommonPrefixes:
        fun/movie/
    ```
    

### Get the size of objects in a specific directory

-   Using GetBucket (ListObjects)
    
    ```
        import com.aliyun.oss.*;
        import com.aliyun.oss.common.auth.CredentialsProviderFactory;
        import com.aliyun.oss.common.auth.EnvironmentVariableCredentialsProvider;
        import com.aliyun.oss.common.comm.SignVersion;
        import com.aliyun.oss.model.OSSObjectSummary;
        import com.aliyun.oss.model.ObjectListing;
    
        public class Demo {
            public static void main(String[] args) throws Exception {
                String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
                EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
                String bucketName = "examplebucket";
                String region = "cn-hangzhou";
                // Set prefix to the directory path. Leave blank to traverse the root directory.
                String prefix = "exampledir/";
    
                ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
                clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);
                OSS ossClient = OSSClientBuilder.create()
                        .endpoint(endpoint)
                        .credentialsProvider(credentialsProvider)
                        .clientConfiguration(clientBuilderConfiguration)
                        .region(region)
                        .build();
    
                try {
                    long totalSize = 0;
                    int totalCount = 0;
                    String nextMarker = null;
                    final int maxKeys = 1000;
    
                    do {
                        ObjectListing objectListing = ossClient.listObjects(bucketName, prefix);
                        for (OSSObjectSummary objectSummary : objectListing.getObjectSummaries()) {
                            totalSize += objectSummary.getSize();
                            totalCount++;
                            System.out.println("File: " + objectSummary.getKey() + " | Size: " + objectSummary.getSize() + " bytes (" + formatSize(objectSummary.getSize()) + ")");
                        }
                        nextMarker = objectListing.getNextMarker();
                    } while (nextMarker != null && !nextMarker.isEmpty());
    
                    System.out.println("Folder: " + prefix);
                    System.out.println("Total objects: " + totalCount);
                    System.out.println("Total size (bytes): " + totalSize);
                    System.out.println("Total size (human readable): " + formatSize(totalSize));
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
    
            public static String formatSize(long size) {
                String[] units = {"B", "KB", "MB", "GB", "TB", "PB"};
                int unitIndex = 0;
                double sizeD = size;
                while (sizeD >= 1024 && unitIndex < units.length - 1) {
                    sizeD /= 1024;
                    unitIndex++;
                }
                return String.format("%.2f %s", sizeD, units[unitIndex]);
            }
        }
    ```
    
-   Using GetBucketV2 (ListObjectsV2)
    
    ```
        import com.aliyun.oss.*;
        import com.aliyun.oss.common.auth.CredentialsProviderFactory;
        import com.aliyun.oss.common.auth.EnvironmentVariableCredentialsProvider;
        import com.aliyun.oss.common.comm.SignVersion;
        import com.aliyun.oss.model.ListObjectsV2Request;
        import com.aliyun.oss.model.ListObjectsV2Result;
        import com.aliyun.oss.model.OSSObjectSummary;
    
        public class Demo {
            public static void main(String[] args) throws Exception {
                String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
                EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
                String bucketName = "examplebucket";
                String region = "cn-hangzhou";
                // Set prefix to the directory path. Leave blank to traverse the root directory.
                String prefix = "exampledir/";
    
                ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
                clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);
                OSS ossClient = OSSClientBuilder.create()
                        .endpoint(endpoint)
                        .credentialsProvider(credentialsProvider)
                        .clientConfiguration(clientBuilderConfiguration)
                        .region(region)
                        .build();
    
                try {
                    long totalSize = 0;
                    int totalCount = 0;
                    String continuationToken = null;
                    final int maxKeys = 1000;
    
                    do {
                        ListObjectsV2Request request = new ListObjectsV2Request(bucketName)
                                .withPrefix(prefix)
                                .withMaxKeys(maxKeys)
                                .withContinuationToken(continuationToken);
    
                        ListObjectsV2Result result = ossClient.listObjectsV2(request);
    
                        for (OSSObjectSummary objectSummary : result.getObjectSummaries()) {
                            totalSize += objectSummary.getSize();
                            totalCount++;
                            System.out.println("File: " + objectSummary.getKey() + " | Size: " + objectSummary.getSize() + " bytes (" + formatSize(objectSummary.getSize()) + ")");
                        }
    
                        continuationToken = result.getNextContinuationToken();
                    } while (continuationToken != null);
    
                    System.out.println("\nFolder: " + prefix);
                    System.out.println("Total objects: " + totalCount);
                    System.out.println("Total size (bytes): " + totalSize);
                    System.out.println("Total size (human readable): " + formatSize(totalSize));
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
    
            public static String formatSize(long size) {
                String[] units = {"B", "KB", "MB", "GB", "TB", "PB"};
                int unitIndex = 0;
                double sizeD = size;
                while (sizeD >= 1024 && unitIndex < units.length - 1) {
                    sizeD /= 1024;
                    unitIndex++;
                }
                return String.format("%.2f %s", sizeD, units[unitIndex]);
            }
        }
    ```
    

## What's next

-   For the complete sample code, see the [GitHub example](https://github.com/aliyun/aliyun-oss-java-sdk/blob/master/src/samples/ListObjectsSample.java).
    
-   For folder creation sample code, see the [GitHub example](https://github.com/aliyun/aliyun-oss-java-sdk/blob/master/src/samples/CreateFolderSample.java).
    
-   For API details, see [GetBucket (ListObjects)](/help/en/oss/developer-reference/listobjects#reference-iwr-xlv-tdb) and [ListObjectsV2 (GetBucketV2)](/help/en/oss/developer-reference/listobjects-v2#reference-2520881).
    
-   For LiveChannel object management, see [Manage LiveChannels (Java SDK V1)](/help/en/oss/developer-reference/common-operations-of-oss-sdk-for-java-on-livechannels).
