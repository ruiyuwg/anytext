This topic describes how to call APIs by using SDKs to query instances that are created in a specific region.

## View API documentation

You can refer to [List of operations by function](/help/en/mongodb/list-of-operations-by-function) to select APIs that you can call to query instances created in a specific region. For example, you can call the DescribeDBInstances operation to query instances in a specific region. For more information about the DescribeDBInstances operation, see [DescribeDBInstances](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describedbinstances). You can refer to the DescribeDBInstances topic to learn about the request parameters that you must configure and the permissions that you must grant to a Resource Access Management (RAM) user.

## Create a RAM user and grant permissions to the RAM user

### Identities

You can call the operation by using one of the following identities: Alibaba Cloud account, Resource Access Management (RAM) role, and RAM user. For more information about the differences between the identities, see [Identity, credential, and authorization](/help/en/openapi/identity-credential-and-authorization/). In this example, a **_RAM user_** is used to call the DescribeDBInstances operation. Log on to the [RAM](https://ram.console.alibabacloud.com/) console. Then, create a RAM user that you want to use to call the DescribeDBInstances operation and record the AccessKey pair information of the RAM user. For more information, see [Create a RAM user](/help/en/ram/user-guide/create-a-ram-user).

### **Authorization**

1.  Go to the [Users](https://ram.console.alibabacloud.com/users) page of the RAM console. Then, find the RAM user that you want to manage and click **Add Permissions** in the **Actions** column.
    
2.  In the **Policy** section of the Grant Permission panel, enter `MongoDB` in the search field and then select the policy that you want to attach to the RAM user.
    
    **Note**
    
    **_AliyunMongoDBFullAccess_**: provides full access to ApsaraDB for MongoDB.
    
    **_AliyunMongoDBReadOnlyAccess_**: provides read-only access to ApsaraDB for MongoDB.
    
    For information about how to create a custom policy, see [RAM authorization](/help/en/mongodb/developer-reference/api-dds-2015-12-01-ram).
    
3.  Click **Grant permissions**.
    

### Credential

By default, an AccessKey pair is generated when you create a RAM user. You can also go to the **_user details_** page to create an AccessKey pair. On the **Authentication** tab of the page, click **Create AccessKey**. For more information, see [Create an AccessKey pair](/help/en/ram/user-guide/create-an-accesskey-pair).

## Call the DescribeDBInstances operation

In this section, [SDK](https://api.alibabacloud.com/api-tools/sdk/Dds?version=2015-12-01&language=java-tea) for Java is used to call the DescribeDBInstances operation.

### Configure environment variables

You can configure the AccessKey pair in environment variables. This way, the AccessKey pair is not hard-coded in the code, and your service is not exposed to risks.

For more information about how to configure environment variables, see [Configure environment variables in Linux, macOS, and Windows](/help/en/sdk/developer-reference/configure-the-alibaba-cloud-accesskey-environment-variable-on-linux-macos-and-windows-systems).

### **Download the sample code**

1.  Go to the [DescribeDBInstances](https://api.alibabacloud.com/api/Dds/2015-12-01/DescribeDBInstances?tab=DEMO&lang=JAVA) page.
    
2.  On the **Parameters** tab of the page, configure required parameters.
    
    -   **_RegionId_**: the region ID. This parameter specifies the region of the instances that you want to query.
        
3.  On the **SDK Sample Code** tab of the page, select **_V2.0_** for SDK Version and **Java** for Languages. Then, click **Download Project** to download the sample code package.
    
4.  Decompress the sample code package on your computer and access the **_alibabacloud\_sample_** directory.
    

### Open and run the project

Use **_IntelliJ IDEA_** to load the project. After the relevant dependencies are loaded, open the **_src/main/java/com/aliyun/sample/Sample.java_** file. Add the code that is used to print the returned values based on the comments in the code.

In the upper-right corner of the IDE, click **Run** to view the output logs. In this example, the following content is returned:

```
{
  "headers": {
    "access-control-allow-origin": "*",
    "date": "Wed, 26 Jul 2023 05:45:58 GMT",
    "keep-alive": "timeout=25",
    "transfer-encoding": "chunked",
    "vary": "Accept-Encoding",
    "x-acs-request-id": "CF00C412-4BB5-5D02-803C-46D0AF71DC23",
    "connection": "keep-alive",
    "content-type": "application/json;charset=utf-8",
    "access-control-expose-headers": "*",
    "x-acs-trace-id": "48df4a01d258338ee5327a6a48628426"
  },
  "statusCode": 200,
  "body": {
    "DBInstances": {
      "DBInstance": [
        {
          "capacityUnit": "",
          "chargeType": "PostPaid",
          "creationTime": "2023-07-25T06:32:25Z",
          "DBInstanceClass": "mdb.shard.2x.xlarge.d",
          "DBInstanceId": "dds-***",
          "DBInstanceStatus": "Running",
          "DBInstanceStorage": 500,
          "DBInstanceType": "replicate",
          "engine": "MongoDB",
          "engineVersion": "5.0",
          "expireTime": "2999-09-08T16:00Z",
          "kindCode": "18",
          "lockMode": "Unlock",
          "mongosList": { "mongosAttribute": [] },
          "networkType": "VPC",
          "regionId": "cn-shanghai",
          "replicationFactor": "3",
          "resourceGroupId": "rg-***",
          "shardList": { "shardAttribute": [] },
          "storageType": "cloud_essd1",
          "tags": { "tag": [] },
          "zoneId": "cn-shanghai-m"
        }
      ]
    },
    "pageNumber": 1,
    "pageSize": 30,
    "requestId": "CF00C412-4BB5-5D02-803C-***",
    "totalCount": 3
  }
}
```
