The Client is the main entry point for the OSS SDK for Node.js, used to manage OSS resources such as buckets and objects. To make requests to OSS, you must first initialize a Client instance and optionally customize its default configuration.

## Usage notes

-   You must configure access credentials before you initialize an OSSClient instance. This topic provides an example of using environment variables. For more information, see [Configure access credentials (Node.js SDK)](/help/en/oss/node-js-configure-access-credentials).
    
-   For information about OSS regions and their corresponding endpoints, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints#concept-zt4-cvy-5db).
    
-   For information about how to create an AccessKey pair for a Resource Access Management (RAM) user, see [Create an AccessKey pair](/help/en/ram/create-an-accesskey-pair-1#section-rjh-18m-7kp).
    

## **Prerequisites**

**Important**

Before you configure the client, you must set the environment variables using the AccessKey of a RAM user.

1.  [Create an AccessKey pair for a Resource Access Management (RAM) user that has full OSS access permissions.](/help/en/ram/create-an-accesskey-pair-1#section-rjh-18m-7kp)
    
    Create an AccessKey pair by using ROS
    
    You can quickly create an AccessKey pair for a RAM user that has full OSS access permissions by using a Resource Orchestration Service (ROS) script. To do so, go to the [**wizard for template-based stack creation**](https://ros.console.alibabacloud.com/cn-hangzhou/stacks/create?templateUrl=https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/zh-CN/20241114/itgrlo/createossadmin.yaml&step=1&hideTemplateSelector=false), select **I confirm that Alibaba Cloud ROS may create RAM resources** in the **Security Confirmation** section, and click **Create**.
    
    ![1.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1631044371/p873205.png)
    
    After the AccessKey pair is created, copy the AccessKey pair on the **Outputs** tab.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4848845471/p948616.png)
    
2.  Configure environment variables for the AccessKey pair.
    
    ## Linux
    
    1.  Run the following commands on the CLI to add the configurations of the environment variables to the `~/.bashrc` file:
        
        ```
        echo "export OSS_ACCESS_KEY_ID='YOUR_ACCESS_KEY_ID'" >> ~/.bashrc
        echo "export OSS_ACCESS_KEY_SECRET='YOUR_ACCESS_KEY_SECRET'" >> ~/.bashrc
        ```
        
        1.  Apply the changes.
            
            ```
            source ~/.bashrc
            ```
            
        2.  Check whether the environment variables have taken effect:
            
            ```
            echo $OSS_ACCESS_KEY_ID
            echo $OSS_ACCESS_KEY_SECRET
            ```
            
    
    ## macOS
    
    1.  Run the following command in the terminal to view the default shell type:
        
        ```
        echo $SHELL
        ```
        
        1.  Configure environment variables based on the default shell type.
            
            ### **Zsh**
            
            1.  Run the following commands to add the configurations of the environment variables to the `~/.zshrc` file:
                
                ```
                echo "export OSS_ACCESS_KEY_ID='YOUR_ACCESS_KEY_ID'" >> ~/.zshrc
                echo "export OSS_ACCESS_KEY_SECRET='YOUR_ACCESS_KEY_SECRET'" >> ~/.zshrc
                ```
                
            2.  Apply the changes.
                
                ```
                source ~/.zshrc
                ```
                
            3.  Check whether the environment variables have taken effect:
                
                ```
                echo $OSS_ACCESS_KEY_ID
                echo $OSS_ACCESS_KEY_SECRET
                ```
                
            
            ### **Bash**
            
            1.  Run the following commands to add the configurations of the environment variables to the `~/.bash_profile` file:
                
                ```
                echo "export OSS_ACCESS_KEY_ID='YOUR_ACCESS_KEY_ID'" >> ~/.bash_profile
                echo "export OSS_ACCESS_KEY_SECRET='YOUR_ACCESS_KEY_SECRET'" >> ~/.bash_profile
                ```
                
            2.  Apply the changes.
                
                ```
                source ~/.bash_profile
                ```
                
            3.  Check whether the environment variables have taken effect:
                
                ```
                echo $OSS_ACCESS_KEY_ID
                echo $OSS_ACCESS_KEY_SECRET
                ```
                
            
    
    ## Windows
    
    ### CMD
    
    1.  Run the following commands in CMD:
        
        ```
        setx OSS_ACCESS_KEY_ID "YOUR_ACCESS_KEY_ID"
        setx OSS_ACCESS_KEY_SECRET "YOUR_ACCESS_KEY_SECRET"
        ```
        
        1.  Check whether the environment variables take effect:
            
            ```
            echo %OSS_ACCESS_KEY_ID%
            echo %OSS_ACCESS_KEY_SECRET%
            ```
            
    
    ### PowerShell
    
    1.  Run the following commands in PowerShell:
        
        ```
        [Environment]::SetEnvironmentVariable("OSS_ACCESS_KEY_ID", "YOUR_ACCESS_KEY_ID", [EnvironmentVariableTarget]::User)
        [Environment]::SetEnvironmentVariable("OSS_ACCESS_KEY_SECRET", "YOUR_ACCESS_KEY_SECRET", [EnvironmentVariableTarget]::User)
        ```
        
        1.  Check whether the environment variable takes effect:
            
            ```
            [Environment]::GetEnvironmentVariable("OSS_ACCESS_KEY_ID", [EnvironmentVariableTarget]::User)
            [Environment]::GetEnvironmentVariable("OSS_ACCESS_KEY_SECRET", [EnvironmentVariableTarget]::User)
            ```
            
    
3.  After you set the environment variables, you must restart any open terminal sessions or IDEs for the changes to take effect.
    

## **Default configuration examples**

The following code examples show how to configure an OSSClient instance using Signature V4 and Signature V1.

### **Signature V4 (recommended)**

**Important**

-   When you initialize an OSSClient instance with the Signature V4 algorithm, specify the OSS-specific region ID. This ID identifies the region to which the request is sent. For example, for the China (Hangzhou) region, set the Region to oss-cn-hangzhou. For other region IDs, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints#concept-zt4-cvy-5db).
    
-   In your code, you must explicitly declare the use of the Signature V4 algorithm. For example: authorizationV4: true.
    

The following code provides an example of how to configure an OSSClient instance using an OSS domain name and Signature V4.

The following example demonstrates initializing the client using environment variables for credentials and a public endpoint.

```
const OSS = require('ali-oss');

const client = new OSS({
  // Obtain access credentials from environment variables. Before you run this code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are set.
  accessKeyId: process.env.OSS_ACCESS_KEY_ID,
  accessKeySecret: process.env.OSS_ACCESS_KEY_SECRET,
  // Set region to the region where the bucket is located. For example, for China (Hangzhou), set region to oss-cn-hangzhou.
  region: 'oss-cn-hangzhou',
  // Use the Signature V4 algorithm.
  authorizationV4: true,
  // Set bucket to the name of your bucket.
  bucket: 'yourBucketName',
  // Set endpoint to the public endpoint of the region where the bucket is located. For example, for China (Hangzhou), set endpoint to https://oss-cn-hangzhou.aliyuncs.com.
  endpoint: 'https://oss-cn-hangzhou.aliyuncs.com',
});
```

### **Signature V1 (not recommended)**

**Important**

From March 1, 2025, the V1 signature algorithm of OSS is no longer available to new customers with new UIDs. From September 1, 2025, OSS no longer updates and maintains the V1 signature algorithm, and the V1 signature algorithm is no longer available for new buckets. Upgrade V1 signatures to V4 signatures at the earliest opportunity to prevent impact on your business.

The following code configures an OSSClient instance using an OSS domain name. For information about OSS domain names for different regions, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints#concept-zt4-cvy-5db).

#### **Create a Client instance using an OSS domain name**

The following code shows how to initialize an instance using an OSS domain name.

```
const OSS = require('ali-oss');

const client = new OSS({
  // Set region to the region where the bucket is located. For example, for China (Hangzhou), set region to oss-cn-hangzhou.
  region: 'yourRegion',
  // Obtain access credentials from environment variables. Before you run this code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are set.
  accessKeyId: process.env.OSS_ACCESS_KEY_ID,
  accessKeySecret: process.env.OSS_ACCESS_KEY_SECRET,
  // Set bucket to the name of your bucket.
  bucket: 'yourBucketName',
});
```

#### Create a Client instance using a custom domain name

The following code shows how to create a Client instance using a custom domain name. For more information about accessing OSS using a custom domain name, see [Access OSS using a custom domain name](/help/en/oss/user-guide/access-buckets-via-custom-domain-names#concept-rz2-xg5-tdb).

**Important**

You cannot use the client.listBuckets() method if you use a custom domain name.

```
const OSS = require('ali-oss')

const client = new OSS({  
 // Use a custom domain name as the endpoint.
 endpoint: 'http://img.example.com', 
 // Obtain access credentials from environment variables. Before you run this code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are set.
 accessKeyId: process.env.OSS_ACCESS_KEY_ID,
 accessKeySecret: process.env.OSS_ACCESS_KEY_SECRET,
 cname: true,
 // Set bucket to the name of your bucket.
 bucket: 'yourBucketName',
});
```

## Configuration examples for common use cases

The following code examples show how to configure other domain names. By default, these examples use Signature V4 and the AccessKey information of a RAM user.

### **Internal domain name configuration example**

If your application is deployed on an Alibaba Cloud ECS instance and needs to frequently access OSS resources in the same region, use an internal domain name to reduce traffic costs and improve access speed.

The following code shows an example of how to configure an OSSClient instance using an OSS internal domain name.

```
const OSS = require('ali-oss');

const client = new OSS({
  // Obtain access credentials from environment variables. Before you run this code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are set.
  accessKeyId: process.env.OSS_ACCESS_KEY_ID,
  accessKeySecret: process.env.OSS_ACCESS_KEY_SECRET,
  // Set region to the region where the bucket is located. For example, for China (Hangzhou), set region to oss-cn-hangzhou.
  region: 'oss-cn-hangzhou',
  //Use Signature V4.
  authorizationV4: true,
  // Set bucket to the name of your bucket.
  bucket: 'yourBucketName',
  // Set endpoint to the internal endpoint of the region where the bucket is located. For example, for China (Hangzhou), set endpoint to https://oss-cn-hangzhou-internal.aliyuncs.com.
  endpoint: 'yourEndpoint',
});
```

### **Custom domain name configuration example**

The following code shows an example of how to configure an OSSClient instance using a custom domain name.

**Warning**

You must first attach the custom domain name to the default domain name of the bucket. Otherwise, an error occurs. For more information about how to attach a custom domain name, see [Access OSS using a custom domain name](/help/en/oss/user-guide/access-buckets-via-custom-domain-names#concept-zt4-cvy-5db).

```
const OSS = require('ali-oss');

const client = new OSS({
  // Obtain access credentials from environment variables. Before you run this code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are set.
  accessKeyId: process.env.OSS_ACCESS_KEY_ID,
  accessKeySecret: process.env.OSS_ACCESS_KEY_SECRET,
  // Set region to the region where the bucket is located. For example, for China (Hangzhou), set region to oss-cn-hangzhou.
  region: 'oss-cn-hangzhou',
  // Use the Signature V4 algorithm.
  authorizationV4: true,
  // Set bucket to the name of your bucket.
  bucket: 'yourBucketName',
  // Set endpoint to your custom domain name. For example, https://static.example.com.
  endpoint: 'yourEndpoint',
  // Set cname to true to enable the CNAME option.
  cname: true,
});
```

### **Acceleration endpoint configuration example**

The following code shows an example of how to configure an OSSClient instance using an acceleration endpoint.

```
const OSS = require('ali-oss');

const client = new OSS({
  // Obtain access credentials from environment variables. Before you run this code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are set.
  accessKeyId: process.env.OSS_ACCESS_KEY_ID,
  accessKeySecret: process.env.OSS_ACCESS_KEY_SECRET,
  // Set region to the region where the bucket is located. For example, for China (Hangzhou), set region to oss-cn-hangzhou.
  region: 'oss-cn-hangzhou',
  //Use Signature V4.
  authorizationV4: true,
  // Set bucket to the name of your bucket.
  bucket: 'yourBucketName',
  // Set endpoint to an acceleration endpoint. For example, oss-accelerate.aliyuncs.com.
  endpoint: 'oss-accelerate.aliyuncs.com',
});
```

## **References**

For more information about OSSClient configuration options, see [Examples on GitHub](https://github.com/ali-sdk/ali-oss?tab=readme-ov-file#create-a-bucket-instance).
