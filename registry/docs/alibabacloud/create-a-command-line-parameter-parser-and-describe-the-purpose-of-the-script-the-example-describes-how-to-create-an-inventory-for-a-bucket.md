When a bucket contains millions or even billions of objects, listing them individually using the `ListObjects` API operation is slow and expensive. Bucket inventory is purpose-built for large-scale scenarios involving massive numbers of objects. It asynchronously and periodically scans a bucket to generate an inventory file. This file contains specified object metadata, such as object size, storage class, and encryption status. You can use this file for various purposes, including asset management, cost analysis, compliance audits, and preparing input for batch processing tasks.

## How it works

After you create an inventory rule, OSS automatically runs an inventory generation task daily or weekly. This task runs asynchronously in the background and does not affect normal access to the bucket. The workflow is as follows:

1.  **Obtain permissions**: OSS assumes a pre-authorized RAM role to obtain permissions to scan the source bucket and write to the destination bucket.
    
2.  **Scan objects**: OSS scans all matching objects in the source bucket based on the filter criteria defined in the rule, such as object prefix, version status, creation time, or size.
    
3.  **Generate inventory report**: OSS aggregates the scan results to generate an inventory report. It then writes the report as a Gzip-compressed CSV file to the specified bucket.
    

Note the following when you use this feature:

-   Report snapshot: An inventory report is a snapshot of the bucket's state when the task starts. Changes to objects, such as additions, overwrites, or deletions, that occur during the scan are not guaranteed to be reflected in that report.
    
-   The first inventory report is typically generated soon after you configure the rule. Subsequent reports are generated in batches during the early morning hours (UTC+8) on a daily or weekly basis based on your configuration. The export latency is affected by the number of objects and the task queue.
    

## **Step 1: Configure permissions**

The authorization steps vary based on your identity:

-   **Alibaba Cloud account**: You only need to **create a RAM role and grant it permissions** so that OSS can assume the role.
    
-   **RAM user**: An administrator or the Alibaba Cloud account must first **grant your account permissions** to create inventories and manage RAM roles. Then, **create a RAM role and grant it permissions**.
    

#### **A. Grant permissions to a RAM user (if applicable)**

This step grants a RAM user the permissions to configure inventory rules and create the required RAM roles.

> If you are using an Alibaba Cloud account, skip this step and proceed to the "Create and configure a RAM role" section.

**Security recommendation**: Granting permissions such as `ram:CreateRole` to a RAM user poses a security risk. We recommend that you **use an Alibaba Cloud account to create the required RAM role in advance**. After authorization, the RAM user can directly select this role when creating an inventory rule without having to create one. This is a more secure practice. If you still need to grant a RAM user the permission to create roles, perform the following steps:

1.  **Create a custom policy** Create the following custom policy in edit mode.
    
    > The `oss:ListBuckets` permission in the following policy is required only for operations via the console. This permission is not required if you use tools such as OSS SDKs or ossutil.
    
    ```
    {
        "Statement": [
            {
                "Effect": "Allow",
                "Action": [
                    "oss:PutBucketInventory",
                    "oss:GetBucketInventory",
                    "oss:DeleteBucketInventory",
                    "oss:ListBuckets",
                    "ram:CreateRole",
                    "ram:AttachPolicyToRole",
                    "ram:GetRole",
                    "ram:ListPoliciesForRole"
                ],
                "Resource": "*"
            }
        ],
        "Version": "1"
    }
    ```
    
    **Tip:** If the current RAM user already has the `AliyunOSSFullAccess` system policy, you only need to grant the user the relevant permissions for role management:
    
    ```
    {
        "Statement": [
            {
                "Effect": "Allow",
                "Action": [
                    "ram:CreateRole",
                    "ram:AttachPolicyToRole",
                    "ram:GetRole",
                    "ram:ListPoliciesForRole"
                ],
                "Resource": "*"
            }
        ],
        "Version": "1"
    }
    ```
    
2.  **Grant permissions to the RAM user**
    
    [Grant the permissions that you created to the target RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user).
    

#### **B. Create and configure a RAM role**

Allow OSS to write the generated inventory report to the destination bucket.

1.  Go to the RAM console to create a role. Select **Cloud Service** for **Principal Type**, and **Object Storage Service** for **Principal Name**.
    
2.  Create and attach a custom policy to the role. The content of this policy is as follows. Replace `your-destination-bucket` with the name of the bucket that is used to store inventory reports.
    
    ```
    {
      "Version": "1",
      "Statement": [
        {
          "Effect": "Allow",
          "Action": "oss:PutObject",
          "Resource": [
            "acs:oss:*:*:your-destination-bucket/*" 
          ]
        }
      ]
    }
    ```
    
    > **KMS encryption**: If you plan to use a KMS key to encrypt inventory files, you must grant the RAM role the `AliyunKMSFullAccess` permission or more fine-grained KMS-related permissions.
    
3.  Record the ARN of the role, for example, `acs:ram::1234567890:role/oss-inventory-role`, for later use.
    

**Security recommendation**: When you configure an inventory rule for the first time in the console, the system guides you to automatically create a service-linked role named `AliyunOSSRole`. We do not recommend using the `AliyunOSSRole` that is automatically created in the console for production environments. This role has full management permissions on all buckets, which poses a significant security risk. We recommend that you use it only in testing environments.

## **Step 2: Configure an inventory rule**

You can configure an inventory rule using the OSS console, OSS SDKs, or ossutil. In the rule, you can set parameters such as the scan scope, frequency, and report content.

### **Console**

1.  Log in to the [OSS console](https://oss.console.alibabacloud.com/).
    
2.  Go to the source bucket for which you want to generate an inventory. In the navigation pane on the left, choose **Data Management** > **Bucket Inventory**.
    
3.  On the **Bucket Inventory** page, click **Create Inventory**.
    
4.  In the ****Create Inventory**** panel, configure the following parameters.
    
    **Parameter**
    
    **Description**
    
    **Status**
    
    Set the status of the inventory task. Select **Enable**.
    
    **Rule Name**
    
    Set the name of the inventory task. The name can contain only lowercase letters, digits, and hyphens (-). It cannot start or end with a hyphen (-).
    
    **Inventory Storage Bucket**
    
    Select the bucket to store the inventory files.
    
    The bucket for which the inventory is configured and the bucket where the inventory is stored must be in the same region and belong to the same Alibaba Cloud account.
    
    **Inventory Path**
    
    Set the storage path for the inventory report.
    
    1.  To save the report to the \`exampledir1/\` path in the \`examplebucket\` bucket, enter `exampledir1/`. If the specified path does not exist in the bucket, OSS automatically creates it.
        
    2.  If you leave this parameter empty, the report is saved in the root directory.
        
    
    **Important**
    
    To avoid affecting the normal use of the OSS-HDFS service or causing data contamination, do not set the inventory report directory to `.dlsdata/` when you configure an inventory report rule for a bucket with OSS-HDFS enabled.
    
    **Frequency**
    
    Set the generation frequency for the inventory report. You can select **Weekly** or **Daily**. If the number of files exceeds ten billion, we recommend selecting **Weekly** to reduce costs and scan pressure.
    
    **Encryption Method**
    
    Select whether to encrypt the inventory file.
    
    1.  **None**: Do not encrypt.
        
    2.  **AES256**: Use the AES256 encryption algorithm to encrypt the inventory file.
        
    3.  **KMS**: Use a KMS key to encrypt the inventory file. You can use an OSS-managed KMS key or [create a KMS key in the same region as the destination bucket](/help/en/kms/key-management-service/support/create-a-cmk-1#task-1939967) in the KMS platform.
        
    
    **Note**
    
    **Inventory Content**
    
    Select the file information you want to export, including **Object Size**, **Storage Class**, **Last Modified Date**, **ETag**, **Multipart Upload Status**, **Encryption Status**, **Object ACL**, **Tag Count**, **File Type**, and **Crc64**.
    
    **Match By Prefix**
    
    Optional. Scan only files under a specified prefix, such as exampledir1/. Leave this parameter empty to scan the entire bucket. If the set prefix does not match any object in the bucket, no inventory file is generated.
    
    **Configure Advanced Filtering**
    
    **Important**
    
    The following filter options are supported only in the China (Qingdao), China (Hohhot), and Germany (Frankfurt) regions.
    
    To filter exported files based on conditions such as file size or storage class, turn on the **Configure Advanced Filtering** switch.
    
    The supported filter options are described as follows:
    
    1.  **Time Range**: Set the start and end dates for the last modification of the files to be exported. The time is accurate to the second.
        
    2.  **File Size Range**: Set the minimum and maximum file sizes for the files to be exported.
        
        **Note**
        
        When setting the file size range, make sure that both the minimum and maximum file sizes are greater than 0 B, and the maximum value does not exceed 48.8 TB.
        
    3.  **Storage Class**: Set the storage classes of the files to be exported. You can choose to export files of the Standard, Infrequent Access, Archive Storage, Cold Archive, and Deep Cold Archive storage classes.
        
    
    **Object Version**
    
    If [versioning](/help/en/oss/user-guide/overview-78/#concept-jdg-4rx-bgb) is enabled for the bucket, you can choose to export the **Current Version** or **All Versions**.
    
5.  Select **I Understand And Agree To Grant Alibaba Cloud OSS Access To Bucket Resources**, then click **OK**.
    
    If a massive number of objects are involved, it takes some time to generate the inventory file. You can determine whether an inventory file has been generated in two ways. For more information, see [How do I determine whether an inventory file has been generated?](/help/en/oss/how-to-determine-whether-inventory-lists-are-generated#concept-2229272).
    

### **SDKs**

The following code samples show how to configure a bucket inventory using common SDKs. For code samples for other SDKs, see [SDKs](/help/en/oss/developer-reference/overview-21#concept-dcn-tp1-kfb).

Java

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
        // Specify the name of the bucket in which you want to store the generated inventory lists. 
        String destBucketName ="yourDestinationBucketName";
        // Specify the account ID granted by the bucket owner. 
        String accountId ="yourDestinationBucketAccountId";
        // Specify the name of the RAM role that is granted the permissions to read all objects in the bucket for which you want to configure the inventory and the permissions to write data to the bucket in which you want to store the generated inventory lists. 
        String roleArn ="yourDestinationBucketRoleArn";
        // Specify the region in which the bucket is located. For example, if the bucket is located in the China (Hangzhou) region, set the region to cn-hangzhou.
        String region = "cn-hangzhou";

        // Create an OSS Client instance. 
        // Call the shutdown method to release associated resources when the OSS Client is no longer in use.
        ClientBuilderConfiguration clientBuilderConfiguration = new ClientBuilderConfiguration();
        clientBuilderConfiguration.setSignatureVersion(SignVersion.V4);        
        OSS ossClient = OSSClientBuilder.create()
        .endpoint(endpoint)
        .credentialsProvider(credentialsProvider)
        .clientConfiguration(clientBuilderConfiguration)
        .region(region)               
        .build();

        try {
            // Create an inventory. 
            InventoryConfiguration inventoryConfiguration = new InventoryConfiguration();

            // Specify the inventory name. 
            String inventoryId = "testid";
            inventoryConfiguration.setInventoryId(inventoryId);

            // Specify the object attributes that are included in inventory lists. 
            List<String> fields = new ArrayList<String>();
            fields.add(InventoryOptionalFields.Size);
            fields.add(InventoryOptionalFields.LastModifiedDate);
            fields.add(InventoryOptionalFields.IsMultipartUploaded);
            fields.add(InventoryOptionalFields.StorageClass);
            fields.add(InventoryOptionalFields.ETag);
            fields.add(InventoryOptionalFields.EncryptionStatus);
            inventoryConfiguration.setOptionalFields(fields);

            // Specify whether to generate inventory lists on a daily or weekly basis. The following code provides an example on how to generate the inventory lists on a weekly basis. Weekly indicates that the inventory lists are generated once a week and Daily indicates that the inventory lists are generated once a day. 
            inventoryConfiguration.setSchedule(new InventorySchedule().withFrequency(InventoryFrequency.Weekly));

            // Specify that the inventory lists include only the current version of objects. If you set the InventoryIncludedObjectVersions parameter to All, all versions of objects are included in the inventory lists. This configuration takes effect only when you enable versioning for the bucket. 
            inventoryConfiguration.setIncludedObjectVersions(InventoryIncludedObjectVersions.Current);

            // Specify whether the inventory is enabled. Valid values: true and false. Set the value to true to enable the inventory. Set the value to false to disable the inventory. 
            inventoryConfiguration.setEnabled(true);

            // Specify the rule used to filter the objects to include in the inventory lists. The following code provides an example on how to filter the objects by prefix. 
            InventoryFilter inventoryFilter = new InventoryFilter().withPrefix("obj-prefix");
            inventoryConfiguration.setInventoryFilter(inventoryFilter);

            // Specify the destination bucket in which you want to store the generated inventory lists. 
            InventoryOSSBucketDestination ossInvDest = new InventoryOSSBucketDestination();
            // Specify the prefix of the path in which you want to store the generated inventory lists. 
            ossInvDest.setPrefix("destination-prefix");
            // Specify the format of the inventory lists. 
            ossInvDest.setFormat(InventoryFormat.CSV);
            // Specify the ID of the account to which the destination bucket belongs. 
            ossInvDest.setAccountId(accountId);
            // Specify the role ARN of the destination bucket. 
            ossInvDest.setRoleArn(roleArn);
            // Specify the name of the destination bucket. 
            ossInvDest.setBucket(destBucketName);

            // The following code provides an example on how to encrypt the inventory lists by using customer master keys (CMKs) hosted in Key Management System (KMS). 
            // InventoryEncryption inventoryEncryption = new InventoryEncryption();
            // InventoryServerSideEncryptionKMS serverSideKmsEncryption = new InventoryServerSideEncryptionKMS().withKeyId("test-kms-id");
            // inventoryEncryption.setServerSideKmsEncryption(serverSideKmsEncryption);
            // ossInvDest.setEncryption(inventoryEncryption);

            // The following code provides an example on how to encrypt the inventory lists on the OSS server. 
            // InventoryEncryption inventoryEncryption = new InventoryEncryption();
            // inventoryEncryption.setServerSideOssEncryption(new InventoryServerSideEncryptionOSS());
            // ossInvDest.setEncryption(inventoryEncryption);

            // Specify the destination for the generated inventory lists. 
            InventoryDestination destination = new InventoryDestination();
            destination.setOssBucketDestination(ossInvDest);
            inventoryConfiguration.setDestination(destination);

            // Configure the inventory for the bucket. 
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

Node.js

```
const OSS = require('ali-oss');

const client = new OSS({
  // Set region to the region where the bucket is located. For example, for China (Hangzhou), set the region to oss-cn-hangzhou.
  region: 'yourregion',
  // Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are set.
  accessKeyId: process.env.OSS_ACCESS_KEY_ID,
  accessKeySecret: process.env.OSS_ACCESS_KEY_SECRET,
  // Specify the bucket name.
  bucket: 'yourbucketname'
});

const inventory = {
  // Set the inventory configuration ID.
  id: 'default', 
  // Specifies whether to enable the inventory configuration. Valid values: true and false.
  isEnabled: false, 
  // (Optional) Set the inventory filter rule to specify the object prefix for filtering.
  prefix: 'ttt',
  OSSBucketDestination: {
     // Set the inventory format.
    format: 'CSV',
   // The account ID of the destination bucket owner.
    accountId: '<Your AccountId>', 
   // The role name for the destination bucket.
    rolename: 'AliyunOSSRole',
    // The name of the destination bucket.
    bucket: '<Your BucketName>',
    // (Optional) The storage path prefix for the inventory report.
    prefix: '<Your Prefix>',
    // To encrypt the inventory using SSE-OSS, refer to the following code.
    //encryption: {'SSE-OSS': ''},
    // To encrypt the inventory using SSE-KMS, refer to the following code.
           /*
            encryption: {
      'SSE-KMS': {
        keyId: 'test-kms-id',
      };, 
    */
  },
  // Set the schedule for generating the inventory. WEEKLY corresponds to once a week, and DAILY corresponds to once a day.
  frequency: 'Daily', 
  // Set the inventory to include all object versions. If set to Current, only the current object versions are included.
  includedObjectVersions: 'All', 
  optionalFields: {
    // (Optional) Set the object properties to include in the inventory.
    field: ["Size", "LastModifiedDate", "ETag", "StorageClass", "IsMultipartUploaded", "EncryptionStatus"]
  },
}

async function putInventory(){
  // The name of the bucket for which to add the inventory configuration.
  const bucket = '<Your BucketName>'; 
        try {
    await client.putBucketInventory(bucket, inventory);
    console.log('Inventory configuration added successfully.')
  } catch(err) {
    console.log('Failed to add inventory configuration: ', err);
  }
}

putInventory()
```

Python

```
import argparse
import alibabacloud_oss_v2 as oss

# Create a command line parameter parser and describe the purpose of the script. The example describes how to create an inventory for a bucket.
parser = argparse.ArgumentParser(description="put bucket inventory sample")

# Specify the command line parameters, including the required region, bucket name, endpoint, user ID, Alibaba Cloud Resource Name (ARN) of the RAM role, and inventory name.
parser.add_argument('--region', help='The region in which the bucket is located.', required=True)
parser.add_argument('--bucket', help='The name of the bucket.', required=True)
parser.add_argument('--endpoint', help='The domain names that other services can use to access OSS')
parser.add_argument('--user_id', help='User account ID.', required=True)
parser.add_argument('--arn', help='The Alibaba Cloud Resource Name (ARN) of the role that has the permissions to read all objects from the source bucket and write objects to the destination bucket. Format: `acs:ram::uid:role/rolename`.', required=True)
parser.add_argument('--inventory_id', help='The name of the inventory.', required=True)

def main():
    # Parse the command line parameters to obtain the values specified by the user.
    args = parser.parse_args()

    # Obtain access credentials from environment variables for authentication.
    credentials_provider = oss.credentials.EnvironmentVariableCredentialsProvider()

    # Use the default configurations of the SDK to create a configuration object and specify the credential provider.
    cfg = oss.config.load_default()
    cfg.credentials_provider = credentials_provider

    # Specify the region attribute of the configuration object based on the command line parameters specified by the user.
    cfg.region = args.region

    # If a custom endpoint is provided, modify the endpoint parameter in the configuration object.
    if args.endpoint is not None:
        cfg.endpoint = args.endpoint

    # Use the preceding configurations to initialize the OSSClient instance and allow the instance to interact with OSS.
    client = oss.Client(cfg)

    # Send a request to create an inventory for a bucket.
    result = client.put_bucket_inventory(oss.PutBucketInventoryRequest(
            bucket=args.bucket, # The name of the bucket.
            inventory_id=args.inventory_id, # The ID of the inventory.
            inventory_configuration=oss.InventoryConfiguration(
                included_object_versions='All', # Specify that inventory lists include all versions of objects.
                optional_fields=oss.OptionalFields(
                    fields=[ # The optional fields, such as the size and last modified time of objects.
                        oss.InventoryOptionalFieldType.SIZE,
                        oss.InventoryOptionalFieldType.LAST_MODIFIED_DATE,
                    ],
                ),
                id=args.inventory_id, # The ID of the inventory.
                is_enabled=True, # Specify whether to enable the inventory feature for the bucket. In this example, the inventory feature is enabled.
                destination=oss.InventoryDestination(
                    oss_bucket_destination=oss.InventoryOSSBucketDestination(
                        format=oss. InventoryFormatType.CSV, # Specify that the output format of the inventory lists is CSV.
                        account_id=args.user_id, # The account ID of the user.
                        role_arn=args.arn, # The ARN of the RAM role, which has the permissions to read the objects in the source bucket and write objects to the destination bucket.
                        bucket=f'acs:oss:::{args.bucket}', # The name of the destination bucket.
                        prefix='aaa', # Specify the prefix contained in the names of the objects that you want to include in inventory lists.
                    ),
                ),
                schedule=oss.InventorySchedule(
                    frequency=oss. InventoryFrequencyType.DAILY, # Specify whether to generate inventory lists on a daily or weekly basis. In this example, inventory lists are generated on a daily basis.
                ),
                filter=oss.InventoryFilter(
                    lower_size_bound=1024, # Specify the minimum size of the object that you want to include in inventory lists. Unit: bytes.
                    upper_size_bound=1048576, # Specify the maximum size of the object that you want to include in inventory lists. Unit: bytes.
                    storage_class='ColdArchive', # # Specify the storage classes of objects that you want to include in inventory lists.
                    prefix='aaa', # Specify the prefix that is used to filter inventories.
                    last_modify_begin_time_stamp=1637883649, # Specify the beginning of the time range during which the object was last modified.
                    last_modify_end_time_stamp=1638347592, # Specify the end of the time range during which the object was last modified.
                ),
            ),
    ))

    # Display the HTTP status code of the operation and request ID to check the request status.
    print(f'status code: {result.status_code},'
          f' request id: {result.request_id},'
    )

# Call the main function to start the processing logic when the script is directly run.
if __name__ == "__main__":
    main() # Specify the entry points in the functions of the script. The control program flow starts here.
```

C#

```
using Aliyun.OSS;
using Aliyun.OSS.Common;

// Specify the endpoint of the region in which the bucket is located. For example, if the bucket is located in the China (Hangzhou) region, set the endpoint to https://oss-cn-hangzhou.aliyuncs.com. 
var endpoint = "yourEndpoint";
// Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured. 
var accessKeyId = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_ID");
var accessKeySecret = Environment.GetEnvironmentVariable("OSS_ACCESS_KEY_SECRET");
// Specify the name of the bucket. 
var bucketName = "examplebucket";
// Specify the account ID granted by the bucket owner. 
var accountId ="yourDestinationBucketAccountId";
// Specify the name of the RAM role that is granted the permissions to read all objects in the bucket for which you want to configure the inventory and the permissions to write data to the bucket in which you want to store the generated inventory lists. 
var roleArn ="yourDestinationBucketRoleArn";
// Specify the name of the bucket in which you want to store the generated inventory lists. 
var destBucketName ="yourDestinationBucketName";
// Specify the region in which the bucket is located. For example, if the bucket is located in the China (Hangzhou) region, set the region to cn-hangzhou.
const string region = "cn-hangzhou";

// Create a ClientConfiguration instance and modify the default parameters based on your requirements.
var conf = new ClientConfiguration();

// Use the signature algorithm V4.
conf.SignatureVersion = SignatureVersion.V4;

// Create an OSSClient instance.
var client = new OssClient(endpoint, accessKeyId, accessKeySecret, conf);
client.SetRegion(region);
try
{
    // Create an inventory for the bucket. 
    var config = new InventoryConfiguration();
    // Specify the name of the inventory. 
    config.Id = "report1";
    // Specify whether to enable the inventory for the bucket. Valid values: true and false. If this parameter is set to true, the inventory is enabled. 
    config.IsEnabled = true;
    // Specify the rule that is used to filter the objects included in inventory lists. The following code provides an example on how to filter the objects by prefix. 
    config.Filter = new InventoryFilter("filterPrefix");
    // Configure the bucket in which you want to store the generated inventory lists. 
    config.Destination = new InventoryDestination();
    config.Destination.OSSBucketDestination = new InventoryOSSBucketDestination();
    // Specify the format of the inventory lists. 
    config.Destination.OSSBucketDestination.Format = InventoryFormat.CSV;
    // Specify the ID of the account to which the destination bucket belongs. 
    config.Destination.OSSBucketDestination.AccountId = accountId;
    // Specify the Alibaba Cloud Resource Name (ARN) of the RAM role that is used to access the destination bucket. 
    config.Destination.OSSBucketDestination.RoleArn = roleArn;
    // Specify the name of the bucket in which you want to store the generated inventory lists. 
    config.Destination.OSSBucketDestination.Bucket = destBucketName;
    // Specify the prefix of the path in which you want to store the generated inventory lists. 
    config.Destination.OSSBucketDestination.Prefix = "prefix1";
    
    // Specify whether to generate the inventory lists on a daily or weekly basis. The following code provides an example on how to generate the inventory lists on a weekly basis. A value of Weekly indicates that the inventory lists are generated on a weekly basis. A value of Daily indicates that the inventory lists are generated on a daily basis. 
    config.Schedule = new InventorySchedule(InventoryFrequency.Daily);
    // Specify that the inventory lists include only the current versions of objects. If you set the InventoryIncludedObjectVersions parameter to All, all versions of objects are included in the inventory lists. This configuration takes effect only when versioning is enabled for the bucket. 
    config.IncludedObjectVersions = InventoryIncludedObjectVersions.All;
    
    // Specify the object attributes that are included in the inventory lists. 
    config.OptionalFields.Add(InventoryOptionalField.Size);
    config.OptionalFields.Add(InventoryOptionalField.LastModifiedDate);
    config.OptionalFields.Add(InventoryOptionalField.StorageClass);
    config.OptionalFields.Add(InventoryOptionalField.IsMultipartUploaded);
    config.OptionalFields.Add(InventoryOptionalField.EncryptionStatus);
    config.OptionalFields.Add(InventoryOptionalField.ETag);
    var req = new SetBucketInventoryConfigurationRequest(bucketName, config);
    client.SetBucketInventoryConfiguration(req);
    Console.WriteLine("Set bucket:{0} InventoryConfiguration succeeded", bucketName);
}
catch (OssException ex)
{
    Console.WriteLine("Failed with error code: {0}; Error info: {1}. \nRequestID:{2}\tHostID:{3}",
        ex.ErrorCode, ex.Message, ex.RequestId, ex.HostId);
}
```

C++

```
#include <alibabacloud/oss/OssClient.h>
using namespace AlibabaCloud::OSS;

int main(void)
{
    /* Initialize information about the account that is used to access OSS. */
            
    /* Specify the endpoint of the region in which the bucket is located. For example, if the bucket is located in the China (Hangzhou) region, set the endpoint to https://oss-cn-hangzhou.aliyuncs.com. */
    std::string Endpoint = "yourEndpoint";
    /* Specify the region in which the bucket is located. For example, if the bucket is located in the China (Hangzhou) region, set the region to cn-hangzhou. */
    std::string Region = "yourRegion";
    /* Specify the name of the bucket. Example: examplebucket. */
    std::string BucketName = "examplebucket";

    /* Initialize resources, such as network resources. */
    InitializeSdk();

    ClientConfiguration conf;
    conf.signatureVersion = SignatureVersionType::V4;
    /* Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured. */
    auto credentialsProvider = std::make_shared<EnvironmentVariableCredentialsProvider>();
    OssClient client(Endpoint, credentialsProvider, conf);
    client.SetRegion(Region);

    InventoryConfiguration inventoryConf;
    /* Specify the name of the inventory. The name must be globally unique in the current bucket. */
    inventoryConf.setId("inventoryId");

    /* Specify whether to enable inventory for the bucket. Valid values: true and false. */
    inventoryConf.setIsEnabled(true);

    /* (Optional) Specify the prefix in the names of the objects. After you specify the prefix, information about the objects whose names contain the prefix is included in the inventory lists. */
    inventoryConf.setFilter(InventoryFilter("objectPrefix"));

    InventoryOSSBucketDestination dest;
    /* Specify the format of the exported inventory lists. */
    dest.setFormat(InventoryFormat::CSV);
    /* Specify the ID of the Alibaba Cloud account to which the bucket owner grants the permissions to perform the operation. */
    dest.setAccountId("10988548********");
    /* Specify the name of the RAM role to which the bucket owner grants permissions to perform the operation. */
    dest.setRoleArn("acs:ram::10988548********:role/inventory-test");
    /* Specify the bucket in which you want to store the generated inventory lists. */
    dest.setBucket("yourDstBucketName");
    /* Specify the prefix of the path in which you want to store the generated inventory lists. */
    dest.setPrefix("yourPrefix");
    /* (Optional) Specify the method that is used to encrypt inventory lists. Valid values: SSEOSS and SSEKMS. */
    //dest.setEncryption(InventoryEncryption(InventorySSEOSS()));
    //dest.setEncryption(InventoryEncryption(InventorySSEKMS("yourKmskeyId")));
    inventoryConf.setDestination(dest);

    /* Specify the time interval at which inventory lists are exported. Valid values: Daily and Weekly. */
    inventoryConf.setSchedule(InventoryFrequency::Daily);

    /* Specify whether to include all versions of objects or only the current versions of objects in the inventory lists. Valid values: All and Current. */
    inventoryConf.setIncludedObjectVersions(InventoryIncludedObjectVersions::All);

    /* (Optional) Specify the fields that are included in inventory lists based on your requirements. */
    InventoryOptionalFields field { 
        InventoryOptionalField::Size, InventoryOptionalField::LastModifiedDate, 
        InventoryOptionalField::ETag, InventoryOptionalField::StorageClass, 
        InventoryOptionalField::IsMultipartUploaded, InventoryOptionalField::EncryptionStatus
    };
    inventoryConf.setOptionalFields(field);

    /* Configure the inventory. */
    auto outcome = client.SetBucketInventoryConfiguration(
        SetBucketInventoryConfigurationRequest(BucketName, inventoryConf));

    if (!outcome.isSuccess()) {
        /* Handle exceptions. */
        std::cout << "Set Bucket Inventory fail" <<
        ",code:" << outcome.error().Code() <<
        ",message:" << outcome.error().Message() <<
        ",requestId:" << outcome.error().RequestId() << std::endl;
        return -1;
    }

    /* Release resources, such as network resources. */
    ShutdownSdk();
    return 0;
}
```

```
package main

import (
	"context"
	"flag"
	"log"

	"github.com/aliyun/alibabacloud-oss-go-sdk-v2/oss"
	"github.com/aliyun/alibabacloud-oss-go-sdk-v2/oss/credentials"
)

// Define global variables.
var (
	region     string // The region in which the bucket is located.
	bucketName string // The name of the bucket.
)

// Specify the init function used to initialize command line parameters.
func init() {
	flag.StringVar(&region, "region", "", "The region in which the bucket is located.")
	flag.StringVar(&bucketName, "bucket", "", "The name of the bucket.")
}

func main() {
	// Parse command line parameters.
	flag.Parse()

	var (
		accountId   = "account id of the bucket" // Specify the ID of the Alibaba Cloud account to which the bucket owner grants permissions to perform the operation. Example: 109885487000****.
		inventoryId = "inventory id"             // The name of the inventory. The name must be globally unique in the bucket.
	)

	// Check whether the name of the bucket is specified.
	if len(bucketName) == 0 {
		flag.PrintDefaults()
		log.Fatalf("invalid parameters, bucket name required")
	}

	// Check whether the region is specified.
	if len(region) == 0 {
		flag.PrintDefaults()
		log.Fatalf("invalid parameters, region required")
	}

	// Load the default configurations and specify the credential provider and region.
	cfg := oss.LoadDefaultConfig().
		WithCredentialsProvider(credentials.NewEnvironmentVariableCredentialsProvider()).
		WithRegion(region)

	// Create an OSS client.
	client := oss.NewClient(cfg)

	// Create a request to configure an inventory for the bucket.
	putRequest := &oss.PutBucketInventoryRequest{
		Bucket:      oss.Ptr(bucketName),  // The name of the bucket.
		InventoryId: oss.Ptr(inventoryId), // The name of the inventory specified by the user.
		InventoryConfiguration: &oss.InventoryConfiguration{
			Id:        oss.Ptr(inventoryId), // The name of the inventory specified by the user.
			IsEnabled: oss.Ptr(true),        // Enable the inventory.
			Filter: &oss.InventoryFilter{
				Prefix:                   oss.Ptr("filterPrefix"),    // Specify the rule that is used to filter the objects included in inventories.
				LastModifyBeginTimeStamp: oss.Ptr(int64(1637883649)), // The timestamp that specifies the start time of the last modification.
				LastModifyEndTimeStamp:   oss.Ptr(int64(1638347592)), // The timestamp that specifies the end time of the last modification.
				LowerSizeBound:           oss.Ptr(int64(1024)),       // The lower size limit of files (unit: bytes).
				UpperSizeBound:           oss.Ptr(int64(1048576)),    // The upper size limit of files (unit: bytes).
				StorageClass:             oss.Ptr("Standard,IA"),     // The storage class.
			},
			Destination: &oss.InventoryDestination{
				OSSBucketDestination: &oss.InventoryOSSBucketDestination{
					Format:    oss.InventoryFormatCSV,                                   // The format of the exported inventory lists.
					AccountId: oss.Ptr(accountId),                                       // Specify the ID of the account that is granted permissions by the bucket owner to perform the operation. Example: 109885487000****.
					RoleArn:   oss.Ptr("acs:ram::" + accountId + ":role/AliyunOSSRole"), // Specify the name of the RAM role that is granted permissions by the bucket owner to perform the operation. Example: acs:ram::109885487000****:role/ram-test.
					Bucket:    oss.Ptr("acs:oss:::" + bucketName),                       // Specify the name of the bucket in which you want to store the generated inventory lists.
					Prefix:    oss.Ptr("export/"),                                       // Specify the prefix of the path in which you want to store the generated inventory lists.
				},
			},
			Schedule: &oss.InventorySchedule{
				Frequency: oss.InventoryFrequencyDaily, // The frequency at which the inventory list is exported (daily).
			},
			IncludedObjectVersions: oss.Ptr("All"), // Specify whether to include all versions of objects or only the current versions of objects in the inventory list.
		},
	}

	// Execute the request.
	putResult, err := client.PutBucketInventory(context.TODO(), putRequest)
	if err != nil {
		log.Fatalf("failed to put bucket inventory %v", err)
	}

	// Display the result.
	log.Printf("put bucket inventory result:%#v\n", putResult)
}
```

## **ossutil**

Configure the inventory rule using ossutil for scripted and batch O&M operations. Before you start, [install and configure ossutil2.0](/help/en/oss/install-ossutil2).

**Command format**

```
ossutil api put-bucket-inventory --bucket <bucket_name> --inventory-id <inventory_id> --inventory-configuration <json_config>
```

**Example**

```
# This command creates an inventory rule named daily-report for a bucket named examplebucket.
# The report is generated daily and stored in the reports/ path of the destbucket.
# You must configure authentication information for ossutil in advance.
ossutil api put-bucket-inventory --bucket examplebucket --inventory-id daily-report --inventory-configuration '{
    "Id": "daily-report",
    "IsEnabled": "true",
    "Destination": {
        "OSSBucketDestination": {
            "Format": "CSV",
            "AccountId": "100000000000000",

            "RoleArn": "acs:ram::100000000000000:role/oss-inventory-role",
            "Bucket": "acs:oss:::destbucket",
            "Prefix": "reports/"
        }
    },
    "Schedule": {
        "Frequency": "Daily"
    },
    "IncludedObjectVersions": "Current",
    "OptionalFields": {
        "Field": ["Size", "LastModifiedDate", "StorageClass"]
    }
}'
```

> **Note**: For more information about the `put-bucket-inventory` command, see [put-bucket-inventory](/help/en/oss/developer-reference/put-bucket-inventory).

## API

The methods described above are fundamentally implemented based on the RESTful API, which you can directly call if your business requires a high level of customization. To directly call an API, you must include the signature calculation in your code.

-   [PutBucketInventory](/help/en/oss/developer-reference/putbucketinventory): Creates inventories.
    
-   [GetBucketInventory](/help/en/oss/developer-reference/getbucketinventory): Queries the inventories.
    
-   [DeleteBucketInventory](/help/en/oss/developer-reference/deletebucketinventory): Deletes inventories.
    
-   [ListBucketInventory](/help/en/oss/developer-reference/listbucketinventory): Lists inventories.
    

## **Step 3: Parse the inventory**

The inventory task runs asynchronously. The core files include `manifest.json` and the `.csv.gz` data files in the `data/` directory. You can confirm that the report is complete by checking for the `manifest.json` file in the destination path.

**Step 1: Read the** `**manifest.json**` **file**

The column order in the inventory report is dynamic. This order depends on the fields you select when you configure the inventory rule. You must **first parse the** `**manifest.json**` **file to determine the correct column order** before you process the data files. This file contains the core metadata for the inventory task. Pay close attention to the following two fields:

1.  `fileSchema`: A string that specifies the names and exact order of columns in the CSV file.
    
2.  `files`: An array that lists the details of all `.csv.gz` data files generated for this report, including the path (`key`), size (`size`), and MD5 checksum (`MD5checksum`).
    

Sample file `**manifest.json**`**:**

```
{
  "sourceBucket": "your-source-bucket",
  "destinationBucket": "your-destination-bucket",
  "version": "2019-09-01",
  "creationTimestamp": "1642994594",
  "fileFormat": "CSV",
  "fileSchema": "Bucket, Key, Size, LastModifiedDate, ETag, StorageClass, EncryptionStatus",
  "files": [
    {
      "key": "inventory-reports/your-source-bucket/daily-report/data/a1b2c3d4-....csv.gz",
      "size": 20480,
      "MD5checksum": "F77449179760C3B13F1E76110F07****"
    }
  ]
}
```

**Step 2: Parse the CSV data files according to** `**fileSchema**`

1.  **Obtain and decompress the file**:
    
    From the `files` array in the `manifest.json` file, retrieve the `key` (file path) for each data file. Use this path to download the corresponding `.csv.gz` compressed package. Decompress the package to obtain the raw data in CSV format.
    
    > **Important**: The `Key` in the CSV file is URL-encoded. URL-decode it before use.
    
2.  **Parse the data in order**:
    
    Use the order of fields defined in the `fileSchema` as the column headings for the CSV file. Read the decompressed CSV file line by line. Each line represents a complete record of an object (file), and each column corresponds to a field specified in the `fileSchema`.
    
    **CSV content example:**
    
    If the `fileSchema` is `Bucket,Key,Size,StorageClass,LastModifiedDate`, the corresponding CSV content is formatted as follows:
    
    ```
    "my-source-bucket","images/photo.jpg",102400,"Standard","2023-10-26T08:00:00.000Z"
    "my-source-bucket","docs/report.pdf",2048000,"IA","2023-10-25T10:30:00.000Z"
    ```
    

## Inventory files

After the inventory task is configured, OSS generates inventory files according to the export frequency that is specified in the inventory rule. The directory structure of the inventory files is as follows:

```
<dest-bucket-name>/
└── <dest-prefix>/
    └── <source-bucket-name>/
        └── <inventory-id>/
            ├── YYYY-MM-DDTHH-MMZ/  (Scan start time in UTC)
            │   ├── manifest.json   (Metadata file for the inventory task)
            │   └── manifest.checksum (MD5 checksum of the manifest.json file)
            └── data/
                └── <uuid>.csv.gz   (GZIP-compressed inventory data file)
```

**Directory Structure**

**Description**

dest-prefix

This directory corresponds to the destination prefix you configured. If the prefix is not set, this part of the path is omitted.

source-bucket-name/

This directory corresponds to the source bucket name for which the inventory report is configured.

inventory\_id/

This directory corresponds to the rule name of the inventory task.

YYYY-MM-DDTHH-MMZ/

This directory is a standard UTC timestamp, indicating the time when the bucket scan started, for example, 2020-05-17T16-00Z. This directory contains the manifest.json and manifest.checksum files.

data/

This directory stores the inventory file, which contains a list of objects in the source bucket and the metadata for each object. The inventory file is a GZIP-compressed CSV file.

**Important**

-   When the number of objects in the source bucket to be exported is large, the program automatically chunks the inventory file into multiple compressed CSV files to facilitate user download and data processing. The compressed CSV files are named in increasing order, such as uuid.csv.gz, uuid-1.csv.gz, and uuid-2.csv.gz. You can get the list of CSV files from the manifest.json file, then decompress the CSV files and read the inventory data in order.
    
-   The record information for a single object appears in only one inventory file and is not distributed across different inventory files.
    

Descriptions of the files generated via bucket inventory are as follows:

### **manifest files**

Manifest files include manifest.json and manifest.checksum. The details are as follows:

-   manifest.json: provides metadata and other basic information about the inventory.
    
    ```
    {
        "creationTimestamp": "1642994594",
        "destinationBucket": "destbucket",
        "fileFormat": "CSV",
        "fileSchema": "Bucket, Key, VersionId, IsLatest, IsDeleteMarker, Size, StorageClass, LastModifiedDate, ETag, IsMultipartUploaded, EncryptionStatus, ObjectAcl, TaggingCount, ObjectType, Crc64",
        "files": [{
                "MD5checksum": "F77449179760C3B13F1E76110F07****",
                "key": "destprefix/srcbucket/configid/data/a1574226-b5e5-40ee-91df-356845777c04.csv.gz",
                "size": 2046}],
        "sourceBucket": "srcbucket",
        "version": "2019-09-01"
    }
    ```
    
    The fields and descriptions are listed below:
    
    **Field**
    
    **Description**
    
    creationTimestamp
    
    The timestamp in epoch format that indicates when the scan of the source bucket started.
    
    destinationBucket
    
    The destination bucket where the inventory file is stored.
    
    fileFormat
    
    The format of the inventory file.
    
    fileSchema
    
    The fields included in the inventory file, divided into fixed fields and optional fields. The order of the fixed fields is fixed. The order of optional fields is determined by how you configure them in the inventory rule. To avoid data mismatches, always parse the CSV data columns based on the field order specified in fileSchema.
    
    -   If you select the current version for the object version when configuring the inventory rule, the fileSchema first lists the fixed fields `Bucket, Key`, followed by the optional fields.
        
    -   If you select all versions for the object version when configuring the inventory rule, the fileSchema first lists the fixed fields `Bucket, Key, VersionId, IsLatest, IsDeleteMarker`, followed by the optional fields.
        
    
    files
    
    Contains the MD5 hash, full path, and size of the inventory file.
    
    sourceBucket
    
    The source bucket for which the inventory rule is configured.
    
    version
    
    The version number of the inventory.
    
-   manifest.checksum: contains the MD5 hash of the manifest.json file, for example, `8420A430CBD6B659A1C0DFC1C11A****`.
    

### **Inventory report**

The inventory report is stored in the data/ directory and contains the file information that is exported by the inventory feature. An example of an inventory report is as follows:

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9179474671/p1031726.png)

The order of the fields in the inventory report depends on the arrangement of the inventory content fields that you specified when you configured the inventory rule. In the inventory report example above, the fields are described from left to right as follows.

**Field Name**

**Description**

Bucket

The name of the source bucket for which the inventory task is executed.

Key

The name of the object in the bucket.

The object name is URL-encoded. Decode it if required.

VersionId

The version ID of the object. This field appears only if the configured inventory rule is set to export all versions.

-   If versioning is not enabled for the bucket where the inventory rule is configured, this field is empty.
    
-   If versioning is enabled for the bucket where the inventory rule is configured, this field shows the object's versionId.
    

IsLatest

Specifies whether the object version is the latest version. This field appears only if the configured inventory rule is set to export all versions.

-   If versioning is not enabled for the bucket where the inventory rule is configured, this field is true.
    
-   If versioning is enabled for the bucket where the inventory rule is configured, and the object is the latest version, this field is true. If the object is a previous version, this field is false.
    

IsDeleteMarker

Specifies whether the object version is a delete marker. This field appears only if the configured inventory rule is set to export all versions.

-   If versioning is not enabled for the bucket where the inventory rule is configured, this field is false by default.
    
-   If versioning is enabled for the bucket where the inventory rule is configured, and the object is a delete marker, this field is true. If the object is not a delete marker, this field is false.
    

Size

The size of the object.

StorageClass

The storage class of the object.

LastModifiedDate

The last modified time of the object, in UTC format.

ETag

The ETag of the object.

An ETag is created when an object is generated to identify its content.

-   For objects created using the [PutObject](/help/en/oss/developer-reference/putobject#reference-l5p-ftw-tdb) API operation, the ETag value is the MD5 hash of its content.
    
-   For objects created by other means, the ETag value is a unique value generated based on a certain calculation rule, but it is not the MD5 hash of its content.
    

IsMultipartUploaded

Specifies whether the object was generated through a multipart upload. If so, this field is true; otherwise, it is false.

EncryptionStatus

Specifies whether the object is encrypted. If the object is encrypted, this field is true; otherwise, it is false.

ObjectAcl

The [Object ACL](/help/en/oss/user-guide/object-acl).

TaggingCount

The number of object tags.

ObjectType

The [object type](/help/en/oss/user-guide/object-overview#section-14u-oyu-6e1).

Crc64

The CRC-64 of the object.

## Limitations

-   **Number of rules**: A single bucket supports up to 1,000 inventory rules configured via an API or SDK, or 10 inventory rules configured via the console.
    
-   **Region restrictions**: The source bucket and destination bucket must be in the same region and belong to the same Alibaba Cloud account. This feature is not supported for buckets that do not have a region attribute.
    

## Billing

Bucket inventory is free of charge, but you are charged for the following items:

-   **API request fees**: You are charged for `PUT` and `GET` requests when you configure or retrieve inventory rules. PUT request fees are incurred when OSS writes the inventory report to the destination bucket. GET request fees are incurred when you download and read the inventory report.
    
-   **Storage fees**: The generated inventory reports, including `manifest` files and `csv.gz` files, consume storage space in the destination bucket and are billed at standard storage rates.
    
-   **Outbound traffic fees**: Outbound traffic fees are incurred when you download and read the inventory report using a public endpoint.
    

To avoid unnecessary costs, you can delete inventory rules that are no longer needed. You can also use lifecycle rules to automatically clean up expired inventory report files.

## Apply in production

### **Best practices**

-   **Least privilege**: Always use a dedicated RAM role with the least privilege. Do not use `AliyunOSSRole` in a production environment.
    
-   **Performance recommendations**: For source buckets with high traffic, store the inventory report in a separate, dedicated bucket. This avoids bandwidth contention from writing the report, which could affect online services.
    
-   **Cost optimization**: Bucket inventory supports exporting inventory files daily or weekly. For buckets with over ten billion files, prioritize a **weekly** inventory. Also, configure a lifecycle rule on the destination bucket to automatically delete inventory reports older than N days, for example, 30 days, to save on storage costs.
    
    Number of objects in the bucket
    
    Export recommendation
    
    <10 billion
    
    Configure daily or weekly exports as needed
    
    10 billion to 50 billion
    
    Export weekly
    
    Greater than or equal to 50 billion
    
    -   Export in batches by matching prefixes
        
    -   to increase the limit on the number of files that can be exported from a bucket
        
    
-   **Prefix partitioning**: For very large buckets, for example, with hundreds of billions of files, you can create multiple inventory rules based on business prefixes. This lets you generate reports in a divide-and-conquer manner, which makes them easier to manage and process.
    

### **Risk prevention**

-   **Data audit**: The inventory report reflects the state of the bucket when the scan begins. Objects modified after the scan's start time (`createTimeStamp` in `manifest.json`) may not be included in the report. Before performing critical operations based on an inventory report, such as deletions, we recommend you first verify the object's current state by calling the [HeadObject](/help/en/oss/developer-reference/headobject#reference-bgh-cbw-wdb) API operation.
    
-   **Monitoring and alerts**: Monitor the storage usage of the destination bucket to prevent the unlimited growth of inventory files, which can lead to uncontrolled costs. You can also monitor calls to APIs such as `PutBucketInventory` to track configuration changes.
    
-   **Change management**: Changes to inventory rules, such as modifications to prefixes or frequencies, affect downstream data analytics workflows. All changes must be included in version control and review processes.
    

## FAQ

-   [Why did the inventory rule creation fail?](/help/en/oss/the-reason-why-you-fail-to-create-inventories#concept-2243083)
    
-   [Why have no inventory results been generated for a long time?](/help/en/oss/inventory-lists-are-not-generated-for-an-extended-period-of-time#concept-2233493)
    
-   [How do I determine whether an inventory file has been generated?](/help/en/oss/how-to-determine-whether-inventory-lists-are-generated#concept-2229272)
    
-   [What factors affect the inventory export speed?](/help/en/oss/factors-affect-the-export-speed-of-inventory#concept-2229273)
    
-   [Why can't I find the inventory export result file for a specific date?](/help/en/oss/the-reason-why-you-unable-to-find-the-exported-inventory-list-of-the-specified-date#concept-2247433)
    
-   [When does the configured inventory rule take effect?](/help/en/oss/when-inventories-take-effect#concept-2307696)
    
-   [Why are there two daily exported inventory result files for the same date?](/help/en/oss/why-do-daily-exported-inventory-results-files-of-the-same-date-exist)
