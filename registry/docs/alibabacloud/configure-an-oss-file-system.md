Object Storage Service (OSS) is a secure, low-cost, and highly reliable cloud storage service that offers massive storage capacity. You can configure an OSS mount point for your Function Compute service to allow functions in the service to interact with OSS as if it were a local file system. This simplifies resource access and data processing flows.

## Limits

-   Function Compute supports up to 5 NAS mount targets and 5 OSS mount targets per service within the same region.
    
-   The local directories that you set for NAS and OSS mount points in the function runtime environment must not conflict.
    
    For more information about how to configure NAS mount points, see [Configure a NAS File System](/help/en/functioncompute/fc-2-0/user-guide/configure-a-nas-file-system#task-2259934).
    

## Prerequisites

-   Object Storage Service (OSS)
    
    -   [Activate OSS](/help/en/oss/getting-started/activate-oss#task-njz-hf4-tdb)
        
    -   [Create an OSS bucket in the console](/help/en/oss/getting-started/create-buckets-6#task-u3p-3n4-tdb)
        
-   Function Compute
    
    -   Create a service. For more information, see [Create a Service](/help/en/functioncompute/fc-2-0/user-guide/manage-services#section-765-0zj-cc4).
        
        Configure permissions for the service role. When you enable the OSS mounting feature, you must configure a role that allows the Function Compute service to access OSS. For more information, see [Grant Function Compute permissions to access other Alibaba Cloud services](/help/en/functioncompute/fc-2-0/security-and-compliance/grant-function-compute-permissions-to-access-other-alibaba-cloud-services#task-2077619).
        

## **Procedure**

### **Step 1: Configure an OSS Mount Point**

In Function Compute, OSS is configured at the service level. This means that after you configure an OSS mount target for a service, all functions in that service can access files in the specified OSS bucket.

1.  Log on to the [Function Compute console](https://fc.console.alibabacloud.com/). In the left-side navigation pane, click **Services & Functions**.
    
2.  In the top navigation bar, select a region. On the **Services** page, find the desired service and click **Configure** in the **Actions** column.
    
3.  On the Edit Service page, configure the following parameters in the **Storage Configuration** section, and then click **Save**.
    
    **Configuration Item**
    
    **Description**
    
    **Example**
    
    **Mount OSS**
    
    Enable or disable the OSS file system.
    
    -   **Enable**: Enable the OSS file system.
        
    -   **Disable**: Disable the OSS file system.
        
    
    Enable
    
    **OSS Mount Point**: Configure the following settings for the OSS mount point.
    
    **Bucket**
    
    Select an existing OSS bucket. To create a new bucket, click **Create New OSS Bucket** below. This opens the [Object Storage Service console](https://oss.console.alibabacloud.com/), where you can create one manually. For pricing details, see [OSS Billing Overview](/help/en/oss/billing-overview#concept-n4t-mwg-tdb).
    
    example-bucket
    
    **Bucket Subdirectory**
    
    Set a subdirectory in the bucket. Use an absolute path. Leave this blank or set it to / to mount the bucket root directory.
    
    /files
    
    **OSS Endpoint**
    
    After you select a bucket, the default endpoint for that bucket appears. You can choose **Custom Endpoint** to change it. For endpoints by region, see [Regions and Endpoints](/help/en/oss/user-guide/regions-and-endpoints#concept-zt4-cvy-5db).
    
    **Note**
    
    -   If you select a Bucket in the same region as the Function Compute service, we recommend that you use the OSS internal network endpoint.
        
    -   If the bucket is in a different region, use the public network endpoint. This incurs outbound traffic fees over the Internet.
        
    
    Default address
    
    **Local Directory in Function**
    
    Set a local directory in the function runtime environment. The path must be a subdirectory of /home, /mnt, or /data.
    
    **Note**
    
    You do not need to create this directory manually. It is ready to use after you set it.
    
    /mnt/oss
    
    **Local Directory Permissions in Function**
    
    Set read-only or read-write permissions for the mounted directory in the function runtime environment.
    
    Read-write
    
    **Note**
    
    OSS mounting depends on the network configuration of your service. If your service allows access only from a VPC (**Allow Function Invocation Only from Specified VPC** is set to **Yes** and **Allow Function to Access the Internet** is set to **No**) and you use a public network endpoint, you must ensure that your function can access the Internet through the specified VPC. For more information, see [Configure a Static Public IP Address](/help/en/functioncompute/fc-2-0/user-guide/configure-static-public-ip-addresses#task-2174820).
    

### **Step 2: Create a Function and Access Files in the Mounted OSS Directory**

After you configure the OSS mount point, you can access files in the mounted directory as if they were local files.

1.  On the **Create Function** page, configure the following settings. Keep other settings at their default values, and then click **Create**.
    
    -   Creation Method: **Create with Built-in Runtimes**.
        
    -   **Basic Settings**: Enter a **Function Name**. For **Handler Type**, select **Event Handler**.
        
    -   **Function Code**: For **Runtime**, select **Python 3.10**. For **Code Upload Method**, select **Sample Code**.
        
    
2.  On the function details page, click the **Function Code** tab. In the code editor, enter your code and then click **Deploy Code**.
    
    This example uses Python. The following code provides an example.
    
    ```
    import os
    
    
    def handler(event, context):
        # Mounted directory
        mount_path = '/mnt/oss'
        
        # List files in the mounted directory
        files = os.listdir(mount_path)
        print("Files in OSS mount:", files)  
        # Read a file in the mounted directory
        file_path = os.path.join(mount_path, 'example.txt')
        if os.path.exists(file_path):
            with open(file_path, 'r') as file:
                content = file.read()
                print("Content of example.txt:", content)
        else:
            print("example.txt does not exist.")
        # Write a file to the mounted directory
        write_path = os.path.join(mount_path, 'output.txt')
        with open(write_path, 'w') as file:
            file.write("Hello, OSS mount!")
            print("Wrote to output.txt in OSS mount.")
        
        return "Function execution completed."
      
    ```
    
    **Note**
    
    In the code, replace `example.txt` with the actual name of a file in your mounted OSS directory.
    
3.  After the code is deployed, click **Test Function** on the **Function Code** tab.
    
    After the function is executed, you can view the result below the **Function Code** tab. On the **Logs** tab, you can view the content of `example.txt` from the mounted OSS directory. In the OSS console, you can view the content of `output.txt` that is written to the mounted directory.
    

## FAQ

### The OSS mount fails. The error message is `bucket not found`.

Verify that the OSS endpoint and bucket name are correct.

### The OSS mount fails. The error message is `host resolv error` or `deadline exceeded`.

Verify that the endpoint is correct.

-   The `host resolv error` message indicates a domain name resolution failure for the endpoint.
    
-   The `deadline exceeded` error occurs if you use an internal network endpoint from a different region. Internal network endpoints cannot be used across regions.
    

### The OSS mount fails. The error message is `invalid credentials`.

Ensure that the RAM role assigned to your service has permission to access OSS. The required permissions are as follows. For more information, see [Grant Function Compute Permission to Access Other Alibaba Cloud Services](/help/en/functioncompute/fc-2-0/security-and-compliance/grant-function-compute-permissions-to-access-other-alibaba-cloud-services#task-2077619).

-   **Read-only**: includes the `oss:ListObjects` and `oss:GetObject` actions.
    
-   **Read/Write**: includes the `oss:ListObjects`, `oss:GetObject`, `oss:PutObject`, `oss:DeleteObject`, `oss:ListParts`, and `oss:AbortMultipartUpload` actions.
    

**Note**

`oss:ListObjects` is a bucket-level action. Therefore, when you grant access to a specific bucket, your policy must include a bucket-level resource ARN, such as `acs:oss:*:*:bucketName`. For more information, see [OSS Resource Description](/help/en/oss/ram-policy-overview/#section-an0-sb1-5sh).

### When reading a mounted file, the error message is `Input/output error`.

Verify the storage class of your OSS bucket. Files in buckets that use the Archive or Cold Archive storage class are frozen. You must restore these files before you can access them. We recommend that you use the Standard storage class for your OSS bucket.

### How do I view files in my configured local directory?

1.  On the function details page, click the **Instances** tab. Find an instance that is in the **Running** state. Click **Connect** in the **Actions** column for the instance.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6678079071/p762699.png)
    
2.  After you connect to the instance, you can run commands to list the files in your configured local directory. Example:
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7678079071/p762700.png)
    

### A function instance shows `Transport endpoint is not connected` when accessing the mount point.

This error may occur if the function instance has low memory or high memory usage. This can cause the OSS mount feature to fail because of out-of-memory (OOM) errors. To resolve this issue, increase the memory size of the function. We recommend that you set the memory size to at least 512 MB when you use OSS mount points.

### Are files written to the function directory saved permanently?

No, they are not. When a function instance is destroyed, files written to the function directory are deleted. To save data permanently, you must configure a mount point. Both NAS and OSS mount points support persistent storage. For more information, see [Configure a NAS File System](/help/en/functioncompute/fc-2-0/user-guide/configure-a-nas-file-system) and [Configure an OSS File System](#).

### How do I allow read-only access to a specific bucket using a permission policy?

Expand to view a sample permission policy. Replace `bucketName` with your bucket name. For more information, see [RAM Policy Overview](/help/en/oss/ram-policy-overview/#concept-y5r-5rm-2gb).

```
{
  "Version": "1",
  "Statement": [
    {
      "Action": [
        "oss:ListObjects",
        "oss:GetObject"
      ],
      "Resource": [
        "acs:oss:*:*:bucketName",
        "acs:oss:*:*:bucketName/*"
      ],
      "Effect": "Allow"
    }
  ]
}
```

### How do I allow read-write access to a specific bucket using a permission policy?

Expand to view a sample permission policy. Replace `bucketName` with your bucket name. For more information, see [RAM Policy Overview](/help/en/oss/ram-policy-overview/#concept-y5r-5rm-2gb).

```
{
  "Version": "1",
  "Statement": [
    {
      "Action": [
        "oss:ListObjects",
        "oss:GetObject",
        "oss:PutObject",
        "oss:DeleteObject",
        "oss:AbortMultipartUpload",
        "oss:ListParts"
      ],
      "Resource": [
        "acs:oss:*:*:bucketName",
        "acs:oss:*:*:bucketName/*"
      ],
      "Effect": "Allow"
    }
  ]
}
```

### How do I allow read-only access to a specific subdirectory in a bucket using a permission policy?

Expand to view a sample permission policy. Replace `bucketName` with your bucket name and `bucketPath` with your subdirectory path. For more information, see [RAM Policy Overview](/help/en/oss/ram-policy-overview/#concept-y5r-5rm-2gb).

```
{
  "Version": "1",
  "Statement": [
    {
      "Action": "oss:ListObjects",
      "Effect": "Allow",
      "Resource": [
        "acs:oss:*:*:bucketName"
      ],
      "Condition": {
        "StringLike": {
          "oss:Prefix": [
            "bucketPath/*"
          ]
        }
      }
    },
    {
      "Action": [
        "oss:GetObject"
      ],
      "Effect": "Allow",
      "Resource": [
        "acs:oss:*:*:bucketName/bucketPath/*"
      ]
    }
  ]
}
```

### How do I allow read-write access to a specific subdirectory in a bucket using a permission policy?

Expand to view a sample permission policy. Replace `bucketName` with your bucket name and `bucketPath` with your subdirectory path. For more information, see [RAM Policy Overview](/help/en/oss/ram-policy-overview/#concept-y5r-5rm-2gb).

```
{
  "Version": "1",
  "Statement": [
    {
      "Action": "oss:ListObjects",
      "Effect": "Allow",
      "Resource": [
        "acs:oss:*:*:bucketName"
      ],
      "Condition": {
        "StringLike": {
          "oss:Prefix": [
            "bucketPath/*"
          ]
        }
      }
    },
    {
      "Action": [
        "oss:GetObject",
        "oss:PutObject",
        "oss:DeleteObject",
        "oss:AbortMultipartUpload",
        "oss:ListParts"
      ],
      "Effect": "Allow",
      "Resource": [
        "acs:oss:*:*:bucketName/bucketPath/*"
      ]
    }
  ]
}
```

### When writing a file through an OSS mount point, the file appears empty in the OSS console.

By default, the written content is uploaded to OSS only when the file is explicitly flushed or closed.

### Operations such as compression, decompression, or file transfer in an OSS mount point respond slowly.

OSS does not support file system APIs. After you mount an OSS bucket as a directory, Function Compute wraps the OSS API to simulate file system APIs. For example, OSS does not support random write operations. If you use file system APIs to modify an existing file on the OSS mount target, Function Compute downloads the entire source file from OSS, modifies it, and then re-uploads it to OSS.

Operations that map directly to OSS APIs, such as sequential reads and writes, perform well. However, operations that require multiple OSS API calls, such as compression or decompression, often involve random reads and require more round-trip requests to OSS. As a result, these operations are slower than on a local file system.

### Do different function instances coordinate or sync access to the same OSS mount point?

Function instances operate independently. As a result, the content on an OSS mount target may not be consistent across instances. For example, if you use function instance A to create a file F on an OSS mount target, you may not be able to retrieve the file in real time from function instance B.
