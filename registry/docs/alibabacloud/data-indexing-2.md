Scalar retrieval is an Object Storage Service (OSS) feature that indexes object metadata. It lets you define custom conditions to quickly find objects in a bucket that match specified criteria, such as object name, ETag, storage class, size, and last modified time.

## Notes

-   Only Java SDK 3.16.0 and later supports the scalar retrieval feature.
    
-   Buckets in the China (Hangzhou), China (Shanghai), China (Qingdao), China (Beijing), China (Zhangjiakou), China (Shenzhen), China (Guangzhou), China (Chengdu), China (Hong Kong), Singapore, Indonesia (Jakarta), Germany (Frankfurt), US (Virginia), US (Silicon Valley), and UK (London) regions support the scalar retrieval feature. For more information, see [Data indexing](/help/en/oss/user-guide/scalar-retrieval/).
    
-   In this topic, the public endpoint of the China (Hangzhou) region is used. To access OSS from other Alibaba Cloud services in the same region, use an internal endpoint. For details about supported regions and endpoints, see [OSS regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints#concept-zt4-cvy-5db).
    
-   In this topic, access credentials are obtained from environment variables. For more information about how to configure access credentials, see [Configure access credentials](/help/en/oss/developer-reference/oss-java-configure-access-credentials#main-2350752).
    
-   In this topic, an OSSClient instance is created by using an OSS endpoint. If you want to create an OSSClient instance by using custom domain names or Security Token Service (STS), see [Configuration examples for common scenarios](/help/en/oss/developer-reference/initialization-3#section-ngr-tjb-kfb).
    
-   By default, an Alibaba Cloud account has the permissions to perform data indexing operations. If you want to use a Resource Access Management (RAM) user or STS to perform data indexing operations, you must have the required permissions. For example:
    
    -   To enable the metadata management feature, you must have the `oss:OpenMetaQuery` permission.
        
    -   To retrieve information about a metadata index library, you must have the `oss:GetMetaQueryStatus` permission.
        
    -   To query objects that meet specified conditions, you must have the `oss:DoMetaQuery` permission.
        
    -   To disable the metadata management feature, you must have the `oss:CloseMetaQuery` permission.
        

## Enable the scalar retrieval feature

The following code enables the scalar retrieval feature for a bucket. After you enable this feature, OSS creates a metadata index library for the bucket and builds metadata indexes for all objects in the bucket. After the metadata index library is created, OSS continues to perform near real-time incremental scans for new files in the bucket and builds metadata indexes for them.

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.model.MetaQueryMode;

public class OpenMetaQuery {
    public static void main(String[] args) throws com.aliyuncs.exceptions.ClientException {
        // The China (Hangzhou) endpoint is used as an example. Specify the actual endpoint for your region.
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Specify the bucket name. Example: examplebucket.
        String bucketName = "examplebucket";
        // Obtain access credentials from environment variables. Before you run this code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are set.
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        // Specify the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set Region to cn-hangzhou.
        String region = "cn-hangzhou";

        // Create an OSSClient instance.
        // When the OSSClient instance is no longer needed, call the shutdown method to release resources.
        ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
        clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);
        OSS ossClient = OSSClientBuilder.create()
                .endpoint(endpoint)
                .credentialsProvider(credentialsProvider)
                .clientConfiguration(clientBuilderConfiguration)
                .region(region)
                .build();

        try {
            // Enable the scalar retrieval feature.
            ossClient.openMetaQuery(bucketName);
        } catch (OSSException oe) {
            System.out.println("Error Message:" + oe.getErrorMessage());
            System.out.println("Error Code:" + oe.getErrorCode());
            System.out.println("Request ID:" + oe.getRequestId());
            System.out.println("Host ID:" + oe.getHostId());
        } catch (ClientException ce) {
            System.out.println("Error Message: " + ce.getMessage());
        } finally {
            // Shut down the OSSClient instance.
            if(ossClient != null){
                ossClient.shutdown();
            }
        }
    }
}
```

## Get information about the metadata index library

The following code retrieves information about the metadata index library of a specified bucket.

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.model.GetMetaQueryStatusResult;

public class GetMetaQueryStatus {
    public static void main(String[] args) throws com.aliyuncs.exceptions.ClientException {
        // The China (Hangzhou) endpoint is used as an example. Specify the actual endpoint for your region.
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Specify the bucket name. Example: examplebucket.
        String bucketName = "examplebucket";
        // Obtain access credentials from environment variables. Before you run this code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are set.
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        // Specify the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set Region to cn-hangzhou.
        String region = "cn-hangzhou";

        // Create an OSSClient instance.
        // When the OSSClient instance is no longer needed, call the shutdown method to release resources.
        ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
        clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);
        OSS ossClient = OSSClientBuilder.create()
                .endpoint(endpoint)
                .credentialsProvider(credentialsProvider)
                .clientConfiguration(clientBuilderConfiguration)
                .region(region)
                .build();

        try {
            // Get information about the metadata index library of the specified bucket.
            GetMetaQueryStatusResult getResult = ossClient.getMetaQueryStatus(bucketName);
            // Get the current scan type.
            System.out.println(getResult.getPhase());
            // Get the status of the metadata index library.
            System.out.println(getResult.getState());
            // Get the time when the metadata index library was created.
            System.out.println(getResult.getCreateTime());
            // Get the time when the metadata index library was updated.
            System.out.println(getResult.getUpdateTime());
        } catch (OSSException oe) {
            System.out.println("Error Message:" + oe.getErrorMessage());
            System.out.println("Error Code:" + oe.getErrorCode());
            System.out.println("Request ID:" + oe.getRequestId());
            System.out.println("Host ID:" + oe.getHostId());
        } catch (ClientException ce) {
            System.out.println("Error Message: " + ce.getMessage());
        } finally {
            // Shut down the OSSClient instance.
            if(ossClient != null){
                ossClient.shutdown();
            }
        }
    }
}
```

## Query objects that meet specified conditions

The following code queries for objects that meet specified conditions and lists the object information based on a specified field and sort order.

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.model.*;
import java.util.ArrayList;
import java.util.List;

public class DoMetaQuery {
    public static void main(String[] args) throws Exception {
        // The China (Hangzhou) endpoint is used as an example. Specify the actual endpoint for your region.
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Specify the bucket name. Example: examplebucket.
        String bucketName = "examplebucket";
        // Obtain access credentials from environment variables. Before you run this code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are set.
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        // Specify the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set Region to cn-hangzhou.
        String region = "cn-hangzhou";

        // Create an OSSClient instance.
        // When the OSSClient instance is no longer needed, call the shutdown method to release resources.
        ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
        clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);
        OSS ossClient = OSSClientBuilder.create()
                .endpoint(endpoint)
                .credentialsProvider(credentialsProvider)
                .clientConfiguration(clientBuilderConfiguration)
                .region(region)
                .build();

        try {
            // Query for files (objects) that meet specified conditions, and list the file information based on a specified field and sort order.
            int maxResults = 20;
            // Query for files smaller than 1,048,576 bytes, return a maximum of 20 results, and sort the results in ascending order.
            String query = "{\"Field\": \"Size\",\"Value\": \"1048576\",\"Operation\": \"lt\"}";
            String sort = "Size";
            DoMetaQueryRequest doMetaQueryRequest = new DoMetaQueryRequest(bucketName, maxResults, query, sort);
            Aggregation aggregationRequest = new Aggregation();
            Aggregations aggregations = new Aggregations();
            List<Aggregation> aggregationList = new ArrayList<Aggregation>();
            // Specify the field name for the aggregate operation.
            aggregationRequest.setField("Size");
            // Specify the operator for the aggregate operation. For example, max indicates the maximum value.
            aggregationRequest.setOperation("max");
            aggregationList.add(aggregationRequest);
            aggregations.setAggregation(aggregationList);

            // Set the aggregate operation.
            doMetaQueryRequest.setAggregations(aggregations);
            doMetaQueryRequest.setOrder(SortOrder.ASC);
            DoMetaQueryResult doMetaQueryResult = ossClient.doMetaQuery(doMetaQueryRequest);
            if(doMetaQueryResult.getFiles() != null){
                for(ObjectFile file : doMetaQueryResult.getFiles().getFile()){
                    System.out.println("Filename: " + file.getFilename());
                    // Get the ETag that identifies the object content.
                    System.out.println("ETag: " + file.getETag());
                    // Get the access permissions of the object.
                    System.out.println("ObjectACL: " + file.getObjectACL());
                    // Get the type of the object.
                    System.out.println("OssObjectType: " + file.getOssObjectType());
                    // Get the storage class of the object.
                    System.out.println("OssStorageClass: " + file.getOssStorageClass());
                    // Get the number of tags for the object.
                    System.out.println("TaggingCount: " + file.getOssTaggingCount());
                    if(file.getOssTagging() != null){
                        for(Tagging tag : file.getOssTagging().getTagging()){
                            System.out.println("Key: " + tag.getKey());
                            System.out.println("Value: " + tag.getValue());
                        }
                    }
                    if(file.getOssUserMeta() != null){
                        for(UserMeta meta : file.getOssUserMeta().getUserMeta()){
                            System.out.println("Key: " + meta.getKey());
                            System.out.println("Value: " + meta.getValue());
                        }
                    }
                }
            } else if(doMetaQueryResult.getAggregations() != null){
                for(Aggregation aggre : doMetaQueryResult.getAggregations().getAggregation()){
                    // Get the name of the aggregation field.
                    System.out.println("Field: " + aggre.getField());
                    // Get the operator of the aggregation field.
                    System.out.println("Operation: " + aggre.getOperation());
                    // Get the result value of the aggregate operation.
                    System.out.println("Value: " + aggre.getValue());
                    if(aggre.getGroups() != null && aggre.getGroups().getGroup().size() > 0){
                        // Get the value of the grouping and aggregation.
                        System.out.println("Groups value: " + aggre.getGroups().getGroup().get(0).getValue());
                        // Get the total count of the grouping and aggregation.
                        System.out.println("Groups count: " + aggre.getGroups().getGroup().get(0).getCount());
                    }
                }
            } else {
                System.out.println("NextToken: " + doMetaQueryResult.getNextToken());
            }
        } catch (OSSException oe) {
            System.out.println("Error Message:" + oe.getErrorMessage());
            System.out.println("Error Code:" + oe.getErrorCode());
            System.out.println("Request ID:" + oe.getRequestId());
            System.out.println("Host ID:" + oe.getHostId());
        } catch (ClientException ce) {
            System.out.println("Error Message: " + ce.getMessage());
        } finally {
            // Shut down the OSSClient instance.
            ossClient.shutdown();
        }
    }
}
```

## Disable the scalar retrieval feature

The following code disables the scalar retrieval feature.

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;

public class CloseMetaQuery {
    public static void main(String[] args) throws Exception {
        // The China (Hangzhou) endpoint is used as an example. Specify the actual endpoint for your region.
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Specify the bucket name. Example: examplebucket.
        String bucketName = "examplebucket";
        // Obtain access credentials from environment variables. Before you run this code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are set.
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        // Specify the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set Region to cn-hangzhou.
        String region = "cn-hangzhou";

        // Create an OSSClient instance.
        // When the OSSClient instance is no longer needed, call the shutdown method to release resources.
        ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
        clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);
        OSS ossClient = OSSClientBuilder.create()
                .endpoint(endpoint)
                .credentialsProvider(credentialsProvider)
                .clientConfiguration(clientBuilderConfiguration)
                .region(region)
                .build();

        try {
            // Disable the scalar retrieval feature for the bucket.
            ossClient.closeMetaQuery(bucketName);
        } catch (OSSException oe) {
            System.out.println("Error Message:" + oe.getErrorMessage());
            System.out.println("Error Code:" + oe.getErrorCode());
            System.out.println("Request ID:" + oe.getRequestId());
            System.out.println("Host ID:" + oe.getHostId());
        } catch (ClientException ce) {
            System.out.println("Error Message: " + ce.getMessage());
        } finally {
            // Shut down the OSSClient instance.
            if(ossClient != null){
                ossClient.shutdown();
            }
        }
    }
}
```

## References

-   For more information about the API operation to enable the metadata management feature, see [OpenMetaQuery](/help/en/oss/developer-reference/openmetaquery#concept-2127469).
    
-   For more information about the API operation to retrieve information about a metadata index library, see [GetMetaQueryStatus](/help/en/oss/developer-reference/getmetaquerystatus#concept-2127483).
    
-   For more information about the API operation to query for objects that meet specified conditions and list the object information based on a specified field and sort order, see [DoMetaQuery](/help/en/oss/developer-reference/dometaquery#concept-2127484).
    
-   For more information about the API operation to disable the metadata management feature, see [CloseMetaQuery](/help/en/oss/developer-reference/closemetaquery#concept-2127481).
