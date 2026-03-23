An instance RAM role is a type of RAM role that Elastic Compute Service (ECS) instances can assume to take on specific permissions. If your self-managed application is deployed on an ECS server, you can assign an instance RAM role to the ECS instance to access Key Management Service (KMS). This topic describes how to assign an instance RAM role to an ECS instance to access KMS.

## **SDKs that support instance RAM roles of ECS instances**

-   [Alibaba Cloud SDK](/help/en/kms/key-management-service/developer-reference/classic-kms-sdkclassic-kms-sdk/): used to perform management operations.
    
-   [Secret SDKs](/help/en/kms/key-management-service/developer-reference/secrets-manager-sdk/): The following types of secret SDKs are available: Secrets Manager Client, Secret JDBC client, and RAM secret plug-in. They are used to obtain secret values. JDBC is short for Java Database Connectivity.
    

## **Usage notes**

-   The ECS instance is deployed in a virtual private cloud (VPC).
    
-   Only one instance RAM role can be assigned to an ECS instance.
    
-   If your account is a RAM user, contact the owner of the corresponding Alibaba Cloud account to obtain the permissions to configure RAM roles. For more information, see [Instance RAM roles](/help/en/ecs/user-guide/attach-an-instance-ram-role-to-an-ecs-instance).
    

## Step 1: Create an instance RAM role and grant the required permissions to the role

### **Use the RAM console**

1.  Create an instance RAM role whose trusted entity is an Alibaba Cloud service.
    
    1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/).
        
    2.  In the left-side navigation pane, choose **Identities** > **Roles**.
        
    3.  On the **Roles** page, click **Create Role**.
        
    4.  On the **Create Role** page, set **Principal Type** to **Cloud Service**, select **Elastic Compute Service / ECS** for the **Principal Name**, and then click **OK**.
        
    5.  Set a role name. EcsRamRoleTest is used in this example.
        
2.  Grant the instance RAM role the permissions to access KMS.
    
    After an instance RAM role is created, the role has no permissions. You need to grant permissions to the role.
    
    1.  On the **Roles** page, find the desired instance RAM role and click **Grant Permission** in the **Actions** column.
        
    2.  In the **Grant Permission** panel, find and select the system policy AliyunKMSFullAccess of KMS on the **System Policy** tab and click **OK**.
        

### **Call RAM API operations**

1.  Create an instance RAM role whose trusted entity is an Alibaba Cloud service.
    
    Call the [CreateRole](/help/en/ram/developer-reference/api-ram-2015-05-01-createrole) operation of RAM. Set the following request parameters:
    
    -   `RoleName`: the name of the instance RAM role. For this example, enter EcsRamRoleTest.
        
    -   `AssumeRolePolicyDocument`: the content of the policy that allows your ECS instance to assume the instance RAM role. For this example, enter the following content:
        
        ```
        {
            "Statement": [
                {
                    "Action": "sts:AssumeRole", 
                    "Effect": "Allow", 
                    "Principal": {
                        "Service": [
                            "ecs.aliyuncs.com"
                        ]
                    }
                }
            ], 
            "Version": "1"
        }
        ```
        
    
2.  Grant the instance RAM role the permissions to access KMS.
    
    Call the [AttachPolicyToRole](/help/en/ram/developer-reference/api-ram-2015-05-01-attachpolicytorole) operation to attach the system policy AliyunKMSFullAccess to the instance RAM role EcsRamRoleTest. Specify the following request parameters for the operation:
    
    -   `PolicyType`: the type of the policy. Set this parameter to System, which indicates a system policy.
        
    -   `PolicyName`: the name of the system policy. For this example, enter AliyunKMSFullAccess, which indicates a system policy for KMS.
        
    -   `RoleName`: the name of the instance RAM role. For this example, enter EcsRamRoleTest.
        
    

## Step 2: Attach the instance RAM role to your ECS instance

### **Use the ECS console**

**Note**

If you do not have an ECS instance, purchase an ECS instance first. For information about how to create an instance, see [Create an instance on the Custom Launch tab](/help/en/ecs/user-guide/create-an-instance-by-using-the-wizard).

1.  Log on to the [ECS console](https://ecs.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Instances & Images** > **Instances**.
    
3.  In the top navigation bar, select the region and resource group to which the resource belongs.
    
4.  Find the desired ECS instance and choose **![图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2136304171/p762320.png)** > **Instance Settings** > **Attach/Detach RAM Role** in the Actions column.
    
5.  In the dialog box that appears, select the instance RAM role that you created from the RAM Role drop-down list and click **Confirm**.
    

### **Call ECS API operations**

-   Attach the instance RAM role to an existing ECS instance.
    
    Call the [AttachInstanceRamRole](/help/en/ecs/developer-reference/api-ecs-2014-05-26-attachinstanceramrole) operation of ECS to attach the instance RAM role to an existing ECS instance that resides in a VPC. Specify the following request parameters for the operation:
    
    -   `RegionId`: the ID of the region where the ECS instance resides.
        
    -   `RamRoleName`: the name of the instance RAM role. For this example, enter EcsRamRoleTest.
        
    -   `InstanceIds`: the ID of the ECS instance that resides in a VPC. Set this parameter to a value in the \["i-bXXXXXXXX"\] format.
        
-   Specify the instance RAM role when you create an ECS instance.
    
    1.  Create an ECS instance.
        
        Call the [CreateInstance](/help/en/ecs/developer-reference/api-ecs-2014-05-26-createinstance) operation of ECS to create an ECS instance. Specify the following request parameters for the operation:
        
        -   `RegionId`: the ID of the region where you want to create the ECS instance.
            
        -   `ImageId`: the ID of the image used to create the ECS instance. For this example, enter centos\_7\_03\_64\_40G\_alibase\_\*\*\*\*.vhd.
            
        -   `InstanceType`: the type of the ECS instance. For this example, enter ecs.g6.large.
            
        -   `VSwitchId`: the ID of the vSwitch in the VPC where you want to create the ECS instance.
            
            **Note**
            
            You can attach instance RAM roles only to ECS instances that reside in VPCs. Therefore, this parameter is required.
            
        -   `RamRoleName`: the name of the instance RAM role. For this example, enter EcsRamRoleTest.
            
        
        You can also authorize a RAM user to assume the instance RAM role. For more information, see [Instance RAM roles](/help/en/ecs/user-guide/attach-an-instance-ram-role-to-an-ecs-instance).
        
    2.  Call the [ModifyInstanceVncPasswd](/help/en/ecs/developer-reference/api-ecs-2014-05-26-modifyinstancevncpasswd) and [StartInstance](/help/en/ecs/developer-reference/api-ecs-2014-05-26-startinstance) operations of ECS to set a password and start the instance.
        

## Step 3: Use the instance RAM role of the ECS instance to access KMS

The following example shows how to call the [ListKeys](/help/en/kms/key-management-service/developer-reference/api-listkeys) operation of KMS in Java to query all keys in the current region. For more information about how to use the SDK, see [SDK references](/help/en/kms/key-management-service/developer-reference/sdk-user-guide/).

## Alibaba Cloud SDK V1.0

```
package com.aliyuncs.kms.examples;

import com.aliyuncs.DefaultAcsClient;
import com.aliyuncs.IAcsClient;
import com.aliyuncs.auth.AlibabaCloudCredentialsProvider;
import com.aliyuncs.auth.InstanceProfileCredentialsProvider;
import com.aliyuncs.exceptions.ClientException;
import com.aliyuncs.exceptions.ServerException;
import com.aliyuncs.kms.model.v20160120.*;
import com.aliyuncs.profile.DefaultProfile;

public class RamRoleTest {
    public static void main(final String[] args) throws Exception {
        String regionId = "<region-id>";
        DefaultProfile profile = DefaultProfile.getProfile(regionId);

        // Specify the instance RAM role. In this example, EcsRamRoleTest is used. 
        String roleName = "EcsRamRoleTest"; 

        // Configure the credential provider of the instance RAM role. 
        AlibabaCloudCredentialsProvider provider = new InstanceProfileCredentialsProvider(roleName);

        IAcsClient client = new DefaultAcsClient(profile, provider);

        ListKeysRequest request = new ListKeysRequest();
      
        try {
            ListKeysResponse response = client.getAcsResponse(request);
            System.out.println(new Gson().toJson(response));
        } catch (ServerException e) {
            e.printStackTrace();
        } catch (ClientException e) {
            System.out.println("ErrCode:" + e.getErrCode());
            System.out.println("ErrMsg:" + e.getErrMsg());
            System.out.println("RequestId:" + e.getRequestId());
        }

    }
}
```

## Alibaba Cloud SDK V2.0

```
package com.aliyun.sample;

import com.aliyun.tea.*;

public class Sample {

    public static com.aliyun.kms20160120.Client createClient() throws Exception {
        com.aliyun.credentials.models.Config credentialConfig = new com.aliyun.credentials.models.Config();
        // The type of the credential.
        credentialConfig.type = "ecs_ram_role";
        // Optional. The name of the instance RAM role of the ECS instance. If you do not set this parameter, the role name is automatically obtained. However, we recommend that you enter the role name to reduce the number of requests.
        credentialConfig.roleName = "<your-ecsRamRoleName>";
        com.aliyun.credentials.Client credentialClient = new com.aliyun.credentials.Client(credentialConfig);

        com.aliyun.teaopenapi.models.Config kmsClientConfig = new com.aliyun.teaopenapi.models.Config()
        // Set the endpoint of KMS, for example, kms.cn-hangzhou.aliyuncs.com.
        .setEndpoint( "kms.cn-hangzhou.aliyuncs.com").
                setCredential(credentialClient);
        return new com.aliyun.kms20160120.Client(kmsClientConfig);

    }

    public static void main(String[] args_) throws Exception {
        java.util.List<String> args = java.util.Arrays.asList(args_);
        com.aliyun.kms20160120.Client client = Sample.createClient();
        com.aliyun.kms20160120.models.ListKeysRequest listKeysRequest = new com.aliyun.kms20160120.models.ListKeysRequest();
        com.aliyun.teautil.models.RuntimeOptions runtime = new com.aliyun.teautil.models.RuntimeOptions();
        try {
            client.listKeysWithOptions(listKeysRequest, runtime);
        } catch (TeaException error) {
            System.out.println(error.getMessage());
            com.aliyun.teautil.Common.assertAsString(error.message);
        } catch (Exception _error) {
            _error.printStackTrace();
        }        
    }
}
```

## **Secrets Manager Client**

For more information, see [Secret client](/help/en/kms/key-management-service/developer-reference/secrets-manager-client).

1.  Configure the following parameters in system environment variables or the configuration file secretsmanager.properties.
    
    **Parameter**
    
    **Value**
    
    credentials\_type
    
    Set the value to ecs\_ram\_role.
    
    credentials\_role\_session\_name
    
    The name of the RAM role.
    
    cache\_client\_region\_id
    
    The region ID in the \[{"regionId":"<your region id>"}\].format. Replace `<your region id>` with your actual region ID.
    
2.  Construct Secrets Manager Client to obtain secret values.
    
    ```
    import com.aliyuncs.kms.secretsmanager.client.SecretCacheClient;
    import com.aliyuncs.kms.secretsmanager.client.SecretCacheClientBuilder;
    import com.aliyuncs.kms.secretsmanager.client.exception.CacheSecretException;
    import com.aliyuncs.kms.secretsmanager.client.model.SecretInfo;
    
    public class CacheClientEnvironmentSample {
    
        public static void main(String[] args) {
            try {
                // Construct Secrets Manager Client.
                SecretCacheClient client = SecretCacheClientBuilder.newClient();
                // Use Secrets Manager Client to obtain the secret information.
                SecretInfo secretInfo = client.getSecretInfo("#secretName#");
                System.out.println(secretInfo);
            } catch (CacheSecretException e) {
                e.printStackTrace();
            }
        }
    }
    ```
    

## **Secret JDBC client**

The following example describes how to connect to a MySQL database by using JDBC. For more information, see [Secret JDBC client](/help/en/kms/key-management-service/developer-reference/secrets-manager-jdbc).

1.  Add the configuration file **secretsmanager.properties** to the code of your project.
    
    ```
    ## The type of the access credential.
    credentials_type=ecs_ram_role
    ## The name of the instance RAM role that is attached to your ECS instance.
    credentials_role_name=#credentials_role_name#
    ## The region of the KMS instance.
    cache_client_region_id=[{"regionId":"#regionId#"}]
    ## The custom rotation interval. Default value: 21600000. Minimum value: 300000. Unit: milliseconds. The default value is equivalent to 6 hours, and the minimum value is equivalent to 5 minutes.
    refresh_secret_ttl=21600000
    ```
    
2.  Use JDBC to connect to a MySQL database.
    
    ```
    import java.sql.Connection;
    import java.sql.DriverManager;
    import java.sql.SQLException;
    
    public class SecretManagerJDBCSample {
        public static void main(String[] args) throws Exception {
            // Load the secret JDBC client (SDK name: com.aliyun.kms.secretsmanager.MysqlSecretsManagerSimpleDriver).
            Class.forName("com.aliyun.kms.secretsmanager.MysqlSecretsManagerSimpleDriver");
            Connection connect = null;
            try {
                connect = DriverManager.getConnection("secrets-manager:mysql://<YOUR-MYSQL-IP>:<YOUR-MYSQL-PORT>/<YOUR-DATABASE-NAME>", "#your-mysql-secret-name#","");
            } catch(SQLException e) {
                e.printStackTrace();
            }
        }
    }
    ```
    

## **RAM secret plug-in**

For more information, see [RAM secret plug-in](/help/en/kms/key-management-service/developer-reference/ram-secret-plug-in).

1.  Add the configuration file **managed\_credentials\_providers.properties** to the working directory of your application.
    
    ```
    credentials_type=ecs_ram_role
    ## The name of the instance RAM role that is attached to your ECS instance.
    credentials_role_name=#credentials_role_name#
    ## The region of the KMS instance.
    cache_client_region_id=[{"regionId":"#regionId#"}]
    ```
    
2.  Create a client of Alibaba Cloud SDK for Java and call a cloud service.
    
    The following sample code provides an example on how to call the DescribeInstanceStatus operation of ECS.
    
    When you run the following sample code, add the aliyun-java-sdk-ecs dependency of ECS to the pom.xml file.
    
    ```
    import com.aliyuncs.IAcsClient;
    import com.aliyuncs.ecs.model.v20140526.DescribeInstanceStatusRequest;
    import com.aliyuncs.ecs.model.v20140526.DescribeInstanceStatusResponse;
    import com.aliyun.kms.secretsmanager.plugin.sdkcore.ProxyAcsClient;
    import com.aliyuncs.exceptions.ClientException;
    import com.aliyuncs.exceptions.ServerException;
    
    public class AliyunSdkProviderSample {
        public static void main(String[]args) {
            String secretName="******";
            /*
              If the application cannot be set to read the default configuration file (managed_credentials_providers.properties) from the classpath and executable jar package, 
              or if you want to specify a custom file name, you can use the following code to configure a custom file:
              1. If your-config-name is set to a value in the Absolute path + File name format, the system reads the configuration file in the absolute path.
              2. If your-config-name is set to a file name, the system first accesses classpath to read the configuration file and then accesses the executable JAR package to read the configuration file.
            */
            //ConfigLoader.setConfigName("your-config-name");
            
            // 1. Create a client (SDK name: aliyun-java-sdk-managed-credentials-provider).
            IAcsClient client = null;
            try {
                client = new ProxyAcsClient("<the regionId of ECS>", secretName);
            } catch (ClientException e) {
                 e.printStackTrace();
             }
            // 2. Call an API operation of ECS to implement business functionality.
            DescribeInstanceStatusRequest request = new DescribeInstanceStatusRequest();
            DescribeInstanceStatusResponse response;
            try {
                 response = client.getAcsResponse(request);
            } catch (ServerException e) {
                 e.printStackTrace();
             } catch (ClientException e) {
                 e.printStackTrace();
             }
            // 3. Shut down the client to release plug-in-related resources. 
            client.shutdown();
        }
    }
    ```
    

## **References**

-   [Manage access credentials](/help/en/sdk/developer-reference/credentials#section-vxp-jvb-r9q) (Alibaba Cloud SDK V1.0)
    
-   [Manage access credentials](/help/en/sdk/developer-reference/v2-manage-access-credentials#1002ea404bkxm) (Alibaba Cloud SDK V2.0)
    
-   For more information about RAM roles, see the following sections:
    
    -   [RAM role overview](/help/en/ram/user-guide/ram-role-overview)
        
    -   [Create a RAM role for a trusted Alibaba Cloud service](/help/en/ram/user-guide/create-a-ram-role-for-a-trusted-alibaba-cloud-service)
        
    -   [Grant permissions to a RAM role](/help/en/ram/user-guide/grant-permissions-to-a-ram-role#task-187801)
