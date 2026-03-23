Use the OSS SDK for Java 1.0 to create, query, list, and delete inventory configurations for a bucket.

## Prerequisites

Before you begin, make sure that you have:

-   An OSS bucket (the source bucket) and a destination bucket in the **same region** to store the generated inventory lists
    
-   A RAM role with read access to all objects in the source bucket and write access to the destination bucket — you need the role ARN when creating an inventory
    
-   The account ID of the destination bucket owner
    
-   Permissions to create, query, list, and delete inventories for the bucket. The bucket owner has these permissions by default. If you are not the bucket owner, ask the owner to grant you the required permissions.
    

## Usage notes

-   The examples in this topic use the public endpoint for the China (Hangzhou) region. To access OSS from other Alibaba Cloud services in the same region, use an internal endpoint. For supported regions and endpoints, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints).
    
-   Access credentials are read from environment variables. For configuration details, see [Configure access credentials](/help/en/oss/developer-reference/oss-java-configure-access-credentials).
    
-   The examples create an OSSClient instance using an OSS endpoint. To create an instance using a custom domain name or Security Token Service (STS), see [Configuration examples for common scenarios](/help/en/oss/developer-reference/initialization-3).
    
-   Each bucket supports up to 1,000 inventory configurations.
    

## Create an inventory

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;
import com.aliyun.oss.model.*;
import java.util.ArrayList;
import java.util.List;

public class Demo {

    public static void main(String[] args) throws Exception {
        // Endpoint for the China (Hangzhou) region. Replace with your actual endpoint.
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // Credentials are read from the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables.
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        // Source bucket name.
        String bucketName = "examplebucket";
        // Destination bucket where inventory lists are stored.
        String destBucketName = "yourDestinationBucketName";
        // Account ID of the destination bucket owner.
        String accountId = "yourDestinationBucketAccountId";
        // ARN of the RAM role that has read access to the source bucket and write access to the destination bucket.
        String roleArn = "yourDestinationBucketRoleArn";
        // Region of the source bucket. Example: cn-hangzhou.
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
            InventoryConfiguration inventoryConfiguration = new InventoryConfiguration();

            // Inventory name. Must be unique within the bucket.
            String inventoryId = "testid";
            inventoryConfiguration.setInventoryId(inventoryId);

            // Optional fields included in each inventory list.
            List<String> fields = new ArrayList<String>();
            fields.add(InventoryOptionalFields.Size);
            fields.add(InventoryOptionalFields.LastModifiedDate);
            fields.add(InventoryOptionalFields.IsMultipartUploaded);
            fields.add(InventoryOptionalFields.StorageClass);
            fields.add(InventoryOptionalFields.ETag);
            fields.add(InventoryOptionalFields.EncryptionStatus);
            inventoryConfiguration.setOptionalFields(fields);

            // Generation frequency: Weekly (once per week) or Daily (once per day).
            inventoryConfiguration.setSchedule(new InventorySchedule().withFrequency(InventoryFrequency.Weekly));

            // Object versions to include:
            // Current – Only the current version of objects.
            // All     – All versions of objects. This configuration takes effect only when you enable versioning for the bucket.
            inventoryConfiguration.setIncludedObjectVersions(InventoryIncludedObjectVersions.Current);

            // Set to true to enable the inventory, false to disable it.
            inventoryConfiguration.setEnabled(true);

            // Filter objects by prefix. Only objects whose keys start with this prefix are included.
            InventoryFilter inventoryFilter = new InventoryFilter().withPrefix("obj-prefix");
            inventoryConfiguration.setInventoryFilter(inventoryFilter);

            // Destination bucket configuration.
            InventoryOSSBucketDestination ossInvDest = new InventoryOSSBucketDestination();
            ossInvDest.setPrefix("destination-prefix");   // Path prefix for inventory list files in the destination bucket.
            // Output format of the inventory lists.
            ossInvDest.setFormat(InventoryFormat.CSV);
            ossInvDest.setAccountId(accountId);
            ossInvDest.setRoleArn(roleArn);
            ossInvDest.setBucket(destBucketName);

            // (Optional) Encrypt inventory lists using a KMS customer master key (CMK).
            // InventoryEncryption inventoryEncryption = new InventoryEncryption();
            // InventoryServerSideEncryptionKMS serverSideKmsEncryption = new InventoryServerSideEncryptionKMS().withKeyId("test-kms-id");
            // inventoryEncryption.setServerSideKmsEncryption(serverSideKmsEncryption);
            // ossInvDest.setEncryption(inventoryEncryption);

            // (Optional) Encrypt inventory lists using OSS-managed server-side encryption.
            // InventoryEncryption inventoryEncryption = new InventoryEncryption();
            // inventoryEncryption.setServerSideOssEncryption(new InventoryServerSideEncryptionOSS());
            // ossInvDest.setEncryption(inventoryEncryption);

            InventoryDestination destination = new InventoryDestination();
            destination.setOssBucketDestination(ossInvDest);
            inventoryConfiguration.setDestination(destination);

            ossClient.setBucketInventoryConfiguration(bucketName, inventoryConfiguration);
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

## Query an inventory

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
        // Name of the inventory to query.
        String inventoryId = "yourInventoryConfigurationId";
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
            GetBucketInventoryConfigurationRequest request = new GetBucketInventoryConfigurationRequest(bucketName, inventoryId);
            GetBucketInventoryConfigurationResult getResult = ossClient.getBucketInventoryConfiguration(request);

            InventoryConfiguration config = getResult.getInventoryConfiguration();
            System.out.println("=====Inventory configuration=====");
            System.out.println("inventoryId:" + config.getInventoryId());
            System.out.println("isenabled:" + config.isEnabled());
            System.out.println("includedVersions:" + config.getIncludedObjectVersions());
            System.out.println("schdule:" + config.getSchedule().getFrequency());
            if (config.getInventoryFilter().getPrefix() != null) {
                System.out.println("filter, prefix:" + config.getInventoryFilter().getPrefix());
            }

            List<String> fields = config.getOptionalFields();
            for (String field : fields) {
                System.out.println("field:" + field);
            }

            System.out.println("===bucket destination config===");
            InventoryOSSBucketDestination destin = config.getDestination().getOssBucketDestination();
            System.out.println("format:" + destin.getFormat());
            System.out.println("bucket:" + destin.getBucket());
            System.out.println("prefix:" + destin.getPrefix());
            System.out.println("accountId:" + destin.getAccountId());
            System.out.println("roleArn:" + destin.getRoleArn());
            if (destin.getEncryption() != null) {
                if (destin.getEncryption().getServerSideKmsEncryption() != null) {
                    System.out.println("server-side kms encryption, key id:" + destin.getEncryption().getServerSideKmsEncryption().getKeyId());
                } else if (destin.getEncryption().getServerSideOssEncryption() != null) {
                    System.out.println("server-side oss encryption.");
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

## List inventories

Each request returns up to 100 inventory configurations. To retrieve more than 100, use the continuation token from each response as the starting point for the next request. The following example handles pagination automatically.

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
            // Retrieve all inventories using pagination.
            // Each page contains up to 100 configurations.
            // Pass the nextContinuationToken from the previous response to get the next page.
            String continuationToken = null;
            while (true) {
                ListBucketInventoryConfigurationsRequest listRequest = new ListBucketInventoryConfigurationsRequest(bucketName, continuationToken);
                ListBucketInventoryConfigurationsResult result = ossClient.listBucketInventoryConfigurations(listRequest);
                System.out.println("=======List bucket inventory configuration=======");
                System.out.println("istruncated:" + result.isTruncated());
                System.out.println("continuationToken:" + result.getContinuationToken());
                System.out.println("nextContinuationToken:" + result.getNextContinuationToken());
                System.out.println("list size :" + result.getInventoryConfigurationList());
                if (result.getInventoryConfigurationList() != null && !result.getInventoryConfigurationList().isEmpty()) {
                    for (InventoryConfiguration config : result.getInventoryConfigurationList()) {
                        System.out.println("===Inventory configuration===");
                        System.out.println("inventoryId:" + config.getInventoryId());
                        System.out.println("isenabled:" + config.isEnabled());
                        System.out.println("includedVersions:" + config.getIncludedObjectVersions());
                        System.out.println("schdule:" + config.getSchedule().getFrequency());
                        if (config.getInventoryFilter().getPrefix() != null) {
                            System.out.println("filter, prefix:" + config.getInventoryFilter().getPrefix());
                        }

                        List<String> fields = config.getOptionalFields();
                        for (String field : fields) {
                            System.out.println("field:" + field);
                        }

                        System.out.println("===bucket destination config===");
                        InventoryOSSBucketDestination destin = config.getDestination().getOssBucketDestination();
                        System.out.println("format:" + destin.getFormat());
                        System.out.println("bucket:" + destin.getBucket());
                        System.out.println("prefix:" + destin.getPrefix());
                        System.out.println("accountId:" + destin.getAccountId());
                        System.out.println("roleArn:" + destin.getRoleArn());
                        if (destin.getEncryption() != null) {
                            if (destin.getEncryption().getServerSideKmsEncryption() != null) {
                                System.out.println("server-side kms encryption key id:" + destin.getEncryption().getServerSideKmsEncryption().getKeyId());
                            } else if (destin.getEncryption().getServerSideOssEncryption() != null) {
                                System.out.println("server-side oss encryption.");
                            }
                        }
                    }

                    if (result.isTruncated()) {
                        continuationToken = result.getNextContinuationToken();
                    } else {
                        break;
                    }
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

## Delete an inventory

```
import com.aliyun.oss.*;
import com.aliyun.oss.common.auth.*;
import com.aliyun.oss.common.comm.SignVersion;

public class Demo {

    public static void main(String[] args) throws Exception {
        String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        EnvironmentVariableCredentialsProvider credentialsProvider = CredentialsProviderFactory.newEnvironmentVariableCredentialsProvider();
        String bucketName = "examplebucket";
        // Name of the inventory to delete.
        String inventoryId = "yourInventoryConfigurationId";
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
            ossClient.deleteBucketInventoryConfiguration(bucketName, inventoryId);
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

## What's next

-   Complete sample code: [GitHub — aliyun/aliyun-oss-java-sdk](https://github.com/aliyun/aliyun-oss-java-sdk/blob/master/src/samples/BucketInventorySample.java)
    
-   API reference:
    
    -   [PutBucketInventory](/help/en/oss/developer-reference/putbucketinventory)
        
    -   [GetBucketInventory](/help/en/oss/developer-reference/getbucketinventory)
        
    -   [ListBucketInventory](/help/en/oss/developer-reference/listbucketinventory)
        
    -   [DeleteBucketInventory](/help/en/oss/developer-reference/deletebucketinventory)
