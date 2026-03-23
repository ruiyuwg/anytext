After you store a RAM user's AccessKey in Key Management Service (KMS), you can install the RAM secret plug-in. When you use an Alibaba Cloud SDK, you can reference the RAM secret's name to retrieve the AccessKey for API authentication. This eliminates the need to manage AccessKey details and rotation. This topic describes how the RAM secret plug-in works, and how to install and use it.

## **How it works**

The RAM secret plug-in retrieves the RAM secret value from KMS based on the secret name and caches it in the application's memory. When the application uses an Alibaba Cloud SDK, it sends requests to Alibaba Cloud services using the AccessKey from the plug-in's local cache.

If the locally cached AccessKey becomes invalid because of secret rotation or other reasons, the plug-in immediately retrieves the secret from KMS again and refreshes the local cache. Based on your configured retry behavior, the plug-in then retries the Alibaba Cloud service call with the newly obtained RAM secret. By default, the plug-in determines that an AccessKey is invalid based on the `InvalidAccessKeyId` and `InvalidAccessKeyId.NotFound` error codes in the service response.

## Supported Alibaba Cloud SDKs

KMS provides RAM secret plug-ins for the Alibaba Cloud SDKs listed in the following table.

**Important**

RAM secret plug-ins are developed for each Alibaba Cloud SDK. If the RAM plug-in does not meet your requirements, you can use the secret[s client](/help/en/kms/key-management-service/developer-reference/secrets-manager-client) or the [Alibaba Cloud SDK](/help/en/kms/key-management-service/developer-reference/classic-kms-sdkclassic-kms-sdk/). For more information about each SDK, see [SDK Reference](/help/en/kms/key-management-service/developer-reference/sdk-user-guide/). You can also contact the helpdesk to provide feedback.

**SDK for Java (supports only Java 8 and later)**

**Alibaba Cloud SDK name**

**RAM secret plug-in module name**

[Alibaba Cloud SDK for Java (V2.0)](/help/en/sdk/developer-reference/v2-java-sdk/)

[aliyun-java-tea-openapi-sdk-managed-secrets-provider](https://github.com/aliyun/aliyun-sdk-managed-credentials-providers-java/tree/master/aliyun-sdk-managed-credentials-providers/aliyun-java-tea-openapi-sdk-managed-credentials-provider)

[Alibaba Cloud SDK for Java (V1.0)](/help/en/sdk/developer-reference/get-started-with-alibaba-cloud-classic-sdk-for-java#topic-2089038)

[aliyun-java-sdk-managed-secrets-provider](https://github.com/aliyun/aliyun-sdk-managed-credentials-providers-java/tree/master/aliyun-sdk-managed-credentials-providers/aliyun-java-sdk-managed-credentials-provider)

[OSS SDK for Java V1](/help/en/oss/developer-reference/oss-java-sdk/#concept-32008-zh)

[aliyun-oss-java-sdk-managed-secrets-provider](https://github.com/aliyun/aliyun-sdk-managed-credentials-providers-java/tree/master/aliyun-sdk-managed-credentials-providers/aliyun-oss-java-sdk-managed-credentials-provider)

[Message Queue Commercial Edition TCP Protocol SDK for Java](/help/en/apsaramq-for-rocketmq/cloud-message-queue-rocketmq-4-x-series/developer-reference/release-notes-11#concept-2335081)

[ons-client-managed-secrets-provider](https://github.com/aliyun/aliyun-sdk-managed-credentials-providers-java/tree/master/aliyun-sdk-managed-credentials-providers/ons-client-managed-credentials-provider)

**SDK for Python**

**Alibaba Cloud SDK name**

**RAM secret plug-in module name**

**Notes**

[Alibaba Cloud SDK for Python (V1.0)](/help/en/sdk/developer-reference/install-the-classic-sdk-and-its-core-library#topic-2107205)

[aliyun-openapi-python-sdk-managed-secrets-provider](https://github.com/aliyun/aliyun-sdk-managed-credentials-providers-python/tree/master/aliyun-sdk-managed-credentials-providers/aliyun-openapi-python-sdk-managed-credentials-provider)

Only V1.0 is supported. V2.0 is not supported. For V2.0, use the [secret client](/help/en/kms/key-management-service/developer-reference/secrets-manager-client) or the [Alibaba Cloud SDK](/help/en/kms/key-management-service/developer-reference/classic-kms-sdkclassic-kms-sdk/).

[OSS SDK for Python](/help/en/oss/developer-reference/python-sdk-v1/#concept-32026-zh)

[aliyun-oss-python-sdk-managed-secrets-provider](https://github.com/aliyun/aliyun-sdk-managed-credentials-providers-python/tree/master/aliyun-sdk-managed-credentials-providers/aliyun-oss-python-sdk-managed-credentials-provider)

None.

**SDK for Go**

**Alibaba Cloud SDK name**

**RAM secret plug-in module name**

**Notes**

[Alibaba Cloud SDK for Go (V1.0)](/help/en/sdk/developer-reference/get-started-with-alibaba-cloud-classic-sdk-for-go#topic-2109040)

[alibaba-cloud-sdk-go-managed-credentials-provider](https://github.com/aliyun/aliyun-sdk-managed-credentials-providers-go/tree/master/aliyun-sdk-managed-credentials-providers/alibaba-cloud-sdk-go-managed-credentials-provider)

Only V1.0 is supported. V2.0 is not supported. For V2.0, use the secret[s client](/help/en/kms/key-management-service/developer-reference/secrets-manager-client) or the [Alibaba Cloud SDK](/help/en/kms/key-management-service/developer-reference/classic-kms-sdkclassic-kms-sdk/).

[OSS SDK for Go](/help/en/oss/initialization-9#concept-52931-zh)

[aliyun-oss-go-sdk-managed-credentials-provider](https://github.com/aliyun/aliyun-sdk-managed-credentials-providers-go/tree/master/aliyun-sdk-managed-credentials-providers/aliyun-oss-go-sdk-managed-credentials-provider)

None.

## **Step 1: Create an access credential**

### **Scenario 1: Obtain the secret value through a shared gateway**

This scenario applies to public network and VPC network types. Supported access credentials include ECS instance RAM roles and ClientKeys.

## ECS instance RAM role

An Elastic Compute Service (ECS) instance Resource Access Management (RAM) role is a regular service role that is attached to ECS instances, and the principal is ECS. This allows the ECS instance to obtain STS tokens for temporary access, eliminating the need for AccessKey pairs when calling KMS OpenAPI operations.

1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/), and create an instance RAM role whose Principal Type is an Alibaba Cloud service.
    
    -   Principal Type: Select **Cloud Service**.
        
    -   Principal Name: Select **Elastic Compute Service / ECS**.
        
2.  Grant the RAM role access to retrieve KMS secrets.
    
    -   Method 1: Identity-based policies
        
        KMS provides system-defined permission policies that can be attached to RAM roles. For more information, see [System policies for KMS](/help/en/kms/key-management-service/security-and-compliance/kms-1). You can also create [custom policies](/help/en/kms/key-management-service/security-and-compliance/sample-custom-permission-policies).
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0360567371/p907565.png)
        
    -   Method 2: Resource-based policies
        
        KMS supports resource-based policies, which allow you to set access permissions for keys and secrets. This lets you control which Alibaba Cloud accounts, RAM users, and RAM roles have permission to manage or use KMS keys and secrets. For more information, see [Key policies](/help/en/kms/key-management-service/security-and-compliance/key-policies/) and [Secret policies](/help/en/kms/key-management-service/security-and-compliance/secret-policies/).
        
    
3.  Log on to the [ECS console](https://ecs.console.alibabacloud.com), and attach the instance RAM role to an ECS instance. ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9522981471/p907500.png)
    

## ClientKey

For instructions, see the standard creation method in [Create an application access point](/help/en/kms/key-management-service/user-guide/create-an-aap). When configurating parameters, ensure the following settings are correct:

-   When create network rules, select **Public** or **VPC** for **Network Type**.
    
-   When configure the scope of permission rules, select **Shared KMS Gateway**.
    

### **Scenario 2: Obtain the secret value through a dedicated gateway (not recommended)**

This scenario applies to the KMS private network type. Only ClientKeys are supported as access credentials.

-   **Method 1: Quick creation**
    
    Suitable for quick testing and development scenarios. This method uses a default permission policy that cannot be modified. Your application will have access to all keys and secrets in the specified KMS instance.
    
-   **Method 2: Standard creation**
    
    Use this method to configure fine-grained access permissions for resources.
    

#### **Method 1: Quick creation**

1.  Log on to the [KMS console](https://yundun.console.alibabacloud.com/?p=kms#/keyList/base). In the top navigation bar, select a region. In the left-side navigation pane, click **Application Access**\> **Multi-Cloud Access (formerly AAP)**.
    
2.  On the **Application Access** tab, click **Create AAP**. In the **Create AAP** panel, configure the parameters.
    
    **Parameter**
    
    **Description**
    
    **Mode**
    
    Select **Quick Creation**.
    
    **Scope (KMS Instance)**
    
    Select the KMS instance that you want to access.
    
    **Application Access Point Name**
    
    Enter the name of the AAP.
    
    **Authentication Method**
    
    The default value is ClientKey, which cannot be changed.
    
    **Default Permission Policy**
    
    The default value is `key/*``secret/*`, which cannot be changed. Your application can access all keys and secrets in the specified KMS instance.
    
3.  Click **OK**. The browser automatically downloads the client key that is created.
    
    The client key contains **Application Access Secret (ClientKeyContent)** and **Password**. By default, **Application Access Secret (ClientKeyContent)** is saved in a file whose name is in the `clientKey_****.json` format. By default, **Password** is saved in a file whose name is in the `clientKey_****_Password.txt` format.
    

#### **Method 2: Standard creation**

For detailed instructions, see [Method 2: Standard creation](/help/en/kms/key-management-service/user-guide/create-an-aap#f13b7e1159e6n). When configurating parameters, ensure the following settings are correct:

-   When create a network access rule, select **Private** for **Network Type**.
    
-   When configure the scope of permission policy, select the specified **KMS Instance ID**.
    

## **Step 2: Configure RAM secret plug-in runtime parameters in a configuration file**

The RAM secret plug-in requires a configuration file to set runtime parameters. You can create a configuration file named **managed\_credentials\_providers.properties** in your application's runtime directory and add content to it based on the authentication method.

**Note**

If your application cannot automatically read the managed\_credentials\_providers.properties file, see the code examples to learn how to read the file by setting the file path in your code.

## **ECS instance RAM role**

The following is the content of the configuration file.

```
credentials_type=ecs_ram_role
## The name of the ECS RAM Role
credentials_role_name=#credentials_role_name#
## The region of the associated KMS service
cache_client_region_id=[{"regionId":"#regionId#"}]
```

## ClientKey (shared gateway)

You can obtain the credential value through the KMS shared gateway endpoint. The following is the content of the configuration file.

```
## The type of the access credential.
credentials_type=client_key

## The credential password for the client key. You can read it from an environment variable or a file.
## The credential password (ClientKeyPassword) that you saved when you created the ClientKey in the application access point (AAP).
client_key_password_from_env_variable=#your client key private key password environment variable name#
client_key_password_from_file_path=#your client key private key password file path#

# The path to the ClientKey file.
# The ClientKey file is the application identity credential content (ClientKeyContent) that you downloaded when you created the ClientKey in the AAP.
# The default filename after download is ClientKey_******.json.
client_key_private_key_path=#your client key private key file path#

## The region of the associated KMS service.
cache_client_region_id=[{"regionId":"#regionId#"}]
```

## ClientKey (dedicated gateway)

You can obtain the secret value through the KMS dedicated gateway endpoint. The following is the content of the configuration file.

The configuration item is `cache_client_dkms_config_info`. `cache_client_dkms_config_info` uses a JSON array format. You can configure multiple KMS instances to ensure higher service availability and disaster recovery for your business.

-   **Method 1: Obtain the ClientKey password from an environment variable**
    
    The configuration file content is:
    
    ```
    cache_client_dkms_config_info=[{"regionId":"<your dkms regionId >","endpoint":"<your dkms endpoint>","passwordFromEnvVariable":"<YOUR_PASSWORD_ENV_VARIABLE>","clientKeyFile":"<your ClientKey file path>","ignoreSslCerts":false,"caFilePath":"<your CA certificate file path>"}]
    ```
    
    This method also requires you to set the ClientKey **Password (ClientKeyPassword)** as an environment variable with a custom name. Then, replace `<YOUR_PASSWORD_ENV_VARIABLE>` with the name of that variable. For example:
    
    ```
    cache_client_dkms_config_info=[{"regionId":"cn-hangzhou","endpoint":"kst-hzz634e67d126u9p9****.cryptoservice.kms.aliyuncs.com","passwordFromEnvVariable":"passwordFromEnvVariable","clientKeyFile":"C:\RamSecretPlugin\src\main\resources\clientKey_KAAP.json","ignoreSslCerts":false,"caFilePath":"C:\RamSecretPlugin\src\main\resources\PrivateKmsCA_kst-hzz634e67d126u9p9****.pem"}]
    ```
    
-   **Method 2: Obtain the ClientKey password from a file**
    
    After you download the **Client Key Password (ClientKeyPassword)**, the default filename is `clientKey_****_Password.txt`. If you rename the file, you must replace `<your Client Key file path>` in the cache\_client\_dkms\_config\_info value with the new file path.
    
    The configuration file content is:
    
    ```
    cache_client_dkms_config_info=[{"regionId":"<your dkms regionId >","endpoint":"<your dkms endpoint>","passwordFromFilePath":"< your password file path >","clientKeyFile":"<your Client Key file path>","ignoreSslCerts":false,"caFilePath":"<your CA certificate file path>"}]
    ```
    
    Example:
    
    ```
    cache_client_dkms_config_info=[{"regionId":"cn-hangzhou","endpoint":"kst-hzz634e67d126u9p9****.cryptoservice.kms.aliyuncs.com","passwordFromFilePath":"C:\RamSecretPlugin\src\main\resources\clientKeyPassword.txt","clientKeyFile":"C:\RamSecretPlugin\src\main\resources\clientKey_KAAP.json","ignoreSslCerts":false,"caFilePath":"C:\RamSecretPlugin\src\main\resources\PrivateKmsCA_kst-hzz634e67d126u9p9****.pem"}]
    ```
    

Description of configuration items:

**Configuration item**

**Configuration parameters**

**Description**

**regionId**

The ID of the region where the KMS instance is located.

For specific region IDs, see [Regions and zones](/help/en/kms/key-management-service/product-overview/supported-regions).

**endpoint**

The domain name of the KMS instance. The format is `{Instance ID}.kms.aliyuncs.com`.

Go to the **Instances** page. On the instance details page, the **Instance VPC Endpoint** is the endpoint.

**clientKeyFile**

The absolute or relative path of the ClientKey file (in JSON format).

-   The ClientKey file contains the **Application Access Secret** **(ClientKeyContent)**. This file is downloaded when you create a ClientKey in the application access point (AAP), and its default filename is ClientKey\_\*\*\*\*\*\*.json.
    
-   Password: The **Client Key Password** **(ClientKeyPassword)** is downloaded when you create a ClientKey in the application access point (AAP). The default name of the downloaded file is ClientKey\_\*\*\*\*\*\*\_password.txt.
    

**Important**

The ClientKey file and its password are a one-to-one pair. You can obtain them only when you create the ClientKey. If you did not save them during creation, you must create a new ClientKey in the AAP. For more information, see [Create an application access point](/help/en/kms/key-management-service/user-guide/create-an-aap).

**passwordFromFilePath** or **passwordFromEnvVariable**

-   **passwordFromFilePath**: Obtains the password from a file. The value is the absolute or relative path to the file. You must save the password to a file.
    
-   **passwordFromEnvVariable**: Obtains the password from an environment variable. The value is the name of the environment variable. You must save the password to an environment variable.
    

**ignoreSslCerts**

Specifies whether to ignore the validity check of the SSL certificate for the KMS instance. The KMS instance has a built-in SSL certificate and uses the SSL/TLS protocol for identity authentication and encrypted communication. Valid values:

-   true: Ignores the validity check of the SSL certificate for the KMS instance.
    
    **Note**
    
    If the value is true, the **caFilePath** parameter is not required.
    
-   false: Verifies the validity of the SSL certificate for the KMS instance.
    

In a production environment, set this value to false.

**caFilePath**

The absolute or relative path of the CA certificate file for the KMS instance.

The CA certificate for the KMS instance is used to check the validity of the SSL certificate for the KMS instance. For example, it checks whether the SSL certificate is issued by the corresponding CA, is within the validity period, and whether the corresponding domain name is the domain name of the KMS instance (endpoint).

Go to the **Instances** page. On the instance details page, click **Download** in the **Instance CA Certificate** section.

## **Step 3: Use the RAM secret plug-in in an Alibaba Cloud SDK**

## **Java**

### Alibaba Cloud SDK for Java (V2.0)

#### **Java 9+ compatibility**

This plug-in depends on CGLIB for dynamic class proxying. When you run the program with Java 9 or later, you might encounter a `java.lang.reflect.InaccessibleObjectException` error.

Add the following JVM parameter when you start the application to allow CGLIB to access restricted APIs:

```
--add-opens java.base/java.lang=ALL-UNNAMED
```

For example, when you run the program from the command line:

```
java --add-opens java.base/java.lang=ALL-UNNAMED -jar your-application.jar
```

If you run the program in an IDE such as IntelliJ IDEA or Eclipse, add this parameter to the VM options.

1.  You can import the RAM credential plug-in into your project using Maven.
    
    ```
    <dependency>
        <groupId>com.aliyun</groupId>
        <artifactId>aliyun-java-tea-openapi-sdk-managed-credentials-provider</artifactId>
        <version>[1.3.5,]</version>
    </dependency>
    ```
    
    **Note**
    
    We recommend installing the latest version of the plug-in. For more information, see the [source code](https://github.com/aliyun/aliyun-sdk-managed-credentials-providers-java/blob/master/aliyun-sdk-managed-credentials-providers/aliyun-java-tea-openapi-sdk-managed-credentials-provider/README.zh-cn.md).
    
2.  Retrieve an Alibaba Cloud SDK for Java client and call an Alibaba Cloud service.
    
    The following example shows how to call the ECS DescribeInstances operation.
    
    1.  Add the ecs20140526 dependency for Elastic Compute Service.
        
        ```
        <dependency>
            <groupId>com.aliyun</groupId>
            <artifactId>ecs20140526</artifactId>
            <version>7.1.0</version>
        </dependency>
        ```
        
    2.  Call the DescribeInstances operation.
        
        ```
        import com.aliyun.ecs20140526.Client;
        import com.aliyun.ecs20140526.models.DescribeInstancesResponse;
        import com.aliyun.kms.secretsmanager.plugin.tea.openapi.ProxyClientCreator;
        import com.google.gson.Gson;
        
        public class AliyunTeaOpenApiProviderSample {
        
            public static void main(String[] args) throws Exception {
                // Step 1: Specify the name of the managed secret (the secret name created in KMS).
                String secretName = "your-secret-name";
        
                /*
                  If the application cannot read the default configuration file (managed_credentials_providers.properties) from the classpath and executable JAR package,
                  or to customize the configuration file name, you can call the following code to set a custom configuration file. The file is read in the following order:
                  1. If "your-config-name" is an absolute path with a filename, the file at that absolute path is read.
                  2. If "your-config-name" is only a filename, the file is first read from the classpath, and then from the executable JAR package.
                */
                //ConfigLoader.setConfigName("your-config-name");
        
                // Step 2: Configure the OpenAPI client.
                com.aliyun.teaopenapi.models.Config config = new com.aliyun.teaopenapi.models.Config();
                config.endpoint = "your-product-endpoint"; // Replace with the actual service endpoint.
        
                // Step 3: Create a client instance.
                Client client = ProxyClientCreator.createClient(config, Client.class, secretName);
        
                // Step 4: Call the Alibaba Cloud service API.
                com.aliyun.ecs20140526.models.DescribeInstancesRequest request = new com.aliyun.ecs20140526.models.DescribeInstancesRequest();
                request.setRegionId("cn-hangzhou"); // Set the region ID.
                DescribeInstancesResponse response = client.describeInstances(request);
        
                // Step 5: Print the result.
                System.out.println(new Gson().toJson(response.getBody()));
            }
        }
        ```
        

### Alibaba Cloud SDK for Java (V1.0)

1.  Use Maven to import the RAM credential plug-in into your project.
    
    ```
    <dependency>
       <groupId>com.aliyun</groupId>
       <artifactId>aliyun-java-sdk-core</artifactId>
       <version>[4.3.2,5.0.0]</version>
    </dependency>
    <dependency>
      <groupId>com.aliyun</groupId>
      <artifactId>aliyun-java-sdk-core-managed-credentials-provider</artifactId>
      <version>[1.3.1,]</version>
    </dependency>
    ```
    
    **Note**
    
    We recommend installing the latest version of the plug-in. For more information, see the [source code](https://github.com/aliyun/aliyun-sdk-managed-credentials-providers-java).
    
2.  Retrieve an Alibaba Cloud SDK for Java client and call an Alibaba Cloud service.
    
    The following example shows how to call the ECS DescribeInstanceStatus operation.
    
    1.  Add the aliyun-java-sdk-ecs dependency for Elastic Compute Service.
        
        ```
        <dependency>
          <groupId>com.aliyun</groupId>
          <artifactId>aliyun-java-sdk-ecs</artifactId>
          <version>5.11.20</version>
        </dependency>
        ```
        
    2.  Call the DescribeInstanceStatus operation.
        
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
                  If the application cannot read the default configuration file (managed_credentials_providers.properties) from the classpath and executable JAR package,
                  or to customize the configuration file name, you can call the following code to set a custom configuration file. The file is read in the following order:
                  1. If "your-config-name" is an absolute path with a filename, the file at that absolute path is read.
                  2. If "your-config-name" is only a filename, the file is first read from the classpath, and then from the executable JAR package.
                */
                //ConfigLoader.setConfigName("your-config-name");
                
                // 1. Get the ACSClient using aliyun-java-sdk-managed-credentials-provider.
                IAcsClient client = null;
                try {
                    client = new ProxyAcsClient("<the regionId of ECS>", secretName);
                } catch (ClientException e) {
                     e.printStackTrace();
                 }
                // 2. Call the OpenAPI of ECS to implement business features.
                DescribeInstanceStatusRequest request = new DescribeInstanceStatusRequest();
                DescribeInstanceStatusResponse response;
                try {
                     response = client.getAcsResponse(request);
                } catch (ServerException e) {
                     e.printStackTrace();
                 } catch (ClientException e) {
                     e.printStackTrace();
                 }
                // 3. Call the following method to shut down the client and release the resources associated with the plug-in. 
                client.shutdown();
            }
        }
        ```
        

### Use in the OSS SDK

1.  You can import the RAM credential plug-in into your project using Maven.
    
    ```
    <dependency>
        <groupId>com.aliyun</groupId>
        <artifactId>aliyun-java-sdk-core</artifactId>
        <version>4.5.17</version>
    </dependency>
    <dependency>
    <groupId>com.aliyun.oss</groupId>
    <artifactId>aliyun-sdk-oss</artifactId>
    <version>[2.1.0,3.10.2]</version>
    <exclusions>
        <exclusion>
            <groupId>com.aliyun</groupId>
            <artifactId>aliyun-java-sdk-kms</artifactId>
        </exclusion>
    </exclusions>
    </dependency>
    <dependency>
    <groupId>com.aliyun</groupId>
    <artifactId>aliyun-sdk-oss-managed-credentials-provider</artifactId>
    <version>[1.3.1,]</version>
    </dependency>
    ```
    
    **Note**
    
    We recommend installing the latest version of the plug-in. For more information, see the [source code](https://github.com/aliyun/aliyun-sdk-managed-credentials-providers-java).
    
2.  Retrieve an OSS SDK for Java client and call an Alibaba Cloud service.
    
    The following example shows how to call the OSS listBuckets operation:
    
    ```
    import com.aliyun.kms.secretsmanager.plugin.oss.ProxyOSSClientBuilder;
    import com.aliyun.oss.OSS;
    import com.aliyun.oss.model.Bucket;
    
    import java.util.List;
    
    public class OssProviderSample {
    
        public static void main(String[] args) throws Exception {
            String secretName = "******";
            String endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
    
            /*
              If the application cannot read the default configuration file (managed_credentials_providers.properties) from the classpath and executable JAR package,
              or to customize the configuration file name, you can call the following code to set a custom configuration file. The file is read in the following order:
              1. If "your-config-name" is an absolute path with a filename, the file at that absolute path is read.
              2. If "your-config-name" is only a filename, the file is first read from the classpath, and then from the executable JAR package.
            */
            //ConfigLoader.setConfigName("your-config-name");
    
            // Get the OSS client.
            OSS ossClient = new ProxyOSSClientBuilder().build(endpoint, secretName);
    
    
            // The following is the business code: Call the Alibaba Cloud OSS service to implement business features.
            List<Bucket> buckets = ossClient.listBuckets();
            for (Bucket bucket : buckets) {
                if (bucket != null) {
                    // ...
                }
            }
    
            // Call the following method to shut down the client and release the resources associated with the plug-in. 
            ossClient.shutdown();
        }
    
    }
    ```
    

### Python

### Alibaba Cloud SDK for Python (V1.0)

1.  Run the pip command to use the RAM credential plug-in in your project.
    
    ```
    pip install aliyun-openapi-python-sdk-managed-credentials-provider
    ```
    
    **Note**
    
    Make sure that the plug-in version is 0.1.0 or later. For more information, see the [source code](https://github.com/aliyun/aliyun-sdk-managed-credentials-providers-python).
    
2.  Retrieve an Alibaba Cloud SDK for Python client and call an Alibaba Cloud service.
    
    ```
    from aliyun_sdk_secretsmanager_sdk_core_plugin.proxy_acs_client import ProxyAcsClient
    
       region="cn-hangzhou"
       secretName="******"
    
       # 1. Get the ACSClient.
       client = ProxyAcsClient(region_id=region, secret_name=secretName )
    
       # 2. Business code: Use the client to call Alibaba Cloud services without code changes.
       ...
    
       # 3. Call the following method to shut down the client and release the resources associated with the plug-in.
       client.shutdown()
    ```
    

### OSS SDK for Python

1.  You can run the pip command to use the RAM credential plug-in in your project.
    
    ```
    pip install aliyun-oss-python-sdk-managed-credentials-provider
    ```
    
    **Note**
    
    Make sure that the plug-in version is 0.1.0 or later. For more information, see the [source code](https://github.com/aliyun/aliyun-sdk-managed-credentials-providers-python).
    
2.  Retrieve an Alibaba Cloud OSS SDK for Python client and call an Alibaba Cloud service.
    
    ```
    from aliyun_sdk_secretsmanager_oss_plugin.proxy_bucket import ProxyBucket
    from itertools import islice
    
    endpoint = "******"
    secret_name ="******"
    bucket_name = "******"
    bucket = ProxyBucket(secret_name=secret_name, endpoint=endpoint, bucket_name=bucket_name)
    objects = bucket.list_objects()
    for b in islice(objects.object_list, 10):
        print(b.key)
    bucket.shutdown()
    ```
    

### Go

### Alibaba Cloud SDK for Go (V1.0)

**Warning**

Because of limitations in the RAM plug-in SDK for Go, automatic retries for expired credentials are not supported. To rotate credentials manually, you must ensure that the rotation window is at least 13 hours to prevent task interruptions due to credential expiration.

1.  Install the RAM credential plug-in for the Alibaba Cloud SDK for Go.
    
    **Important**
    
    -   We recommend that you install the latest version of the plug-in. For more information, see the [source code](https://github.com/aliyun/aliyun-sdk-managed-credentials-providers-go/releases).
        
    -   The RAM credential plug-in for Go depends on a version of `alibaba-cloud-sdk-go` that is earlier than **v1.63.0**. You must check and confirm the version in the plug-in's `go.mod` file to avoid potential compatibility issues.
        
    
    -   Method 1: Use `go.mod` to manage your dependencies.
        
        Add the following content to the `go.mod` file to install the dependency package.
        
        ```
        require (
            github.com/aliyun/aliyun-sdk-managed-credentials-providers-go/aliyun-sdk-managed-credentials-providers/alibaba-cloud-sdk-go-managed-credentials-provider vX.X.X
        )
        ```
        
    -   Method 2: Use the `go get` command to retrieve the remote code package.
        
        ```
        go get -u github.com/aliyun/aliyun-sdk-mxanaged-credentials-providers-go/aliyun-sdk-managed-credentials-providers/alibaba-cloud-sdk-go-managed-credentials-provider
        ```
        
2.  Retrieve a client for the Alibaba Cloud SDK for Go and call an Alibaba Cloud service.
    
    The following example shows how to call the ECS DescribeInstances operation:
    
    ```
    package sample
    
    import (
        "fmt"
        "github.com/aliyun/alibaba-cloud-sdk-go/services/ecs"
        sdkcoreprovider "github.com/aliyun/aliyun-sdk-managed-credentials-providers-go/aliyun-sdk-managed-credentials-providers/alibaba-cloud-sdk-go-managed-credentials-provider/sdk"
    )
    
    func main() {
        secretName := "********"
        regionId := "cn-hangzhou"
    
        client, err := sdkcoreprovider.GetClient(&ecs.Client{}, regionId, secretName)
        if err != nil {
            fmt.Println(err)
            return
        }
        ecsClient := client.(*ecs.Client)
    
        request := ecs.CreateDescribeInstancesRequest()
        instancesResponse, err := ecsClient.DescribeInstances(request)
        if err != nil {
            fmt.Println(err)
            return
        }
    
        for _, instance := range instancesResponse.Instances.Instance {
            // do something with instance
        }
    }
    ```
    

### OSS SDK for Go

1.  Install the RAM credential plug-in for the OSS SDK for Go.
    
    **Important**
    
    -   We recommend that you install the latest version of the plug-in. For more information, see the [source code](https://github.com/aliyun/aliyun-sdk-managed-credentials-providers-go/releases).
        
    -   The RAM credential plug-in for Go depends on a version of `alibaba-cloud-sdk-go` that is earlier than **v1.63.0**. You must check and confirm the version in the plug-in's `go.mod` file to avoid potential compatibility issues.
        
    
    -   Method 1: Use `go.mod` to manage your dependencies.
        
        Add the following content to the `go.mod` file to install the dependency package.
        
        ```
        require (
            github.com/aliyun/aliyun-sdk-managed-credentials-providers-go/aliyun-sdk-managed-credentials-providers/aliyun-oss-go-sdk-managed-credentials-provider vX.X.X
        )
        ```
        
    -   Method 2: Use the `go get` command to retrieve the remote code package.
        
        ```
        go get -u github.com/aliyun/aliyun-sdk-managed-credentials-providers-go/aliyun-sdk-managed-credentials-providers/aliyun-oss-go-sdk-managed-credentials-provider
        ```
        
2.  Retrieve a client for the Alibaba Cloud OSS SDK for Go and call an Alibaba Cloud service.
    
    ```
    package sample
    
    import (
        "fmt"
        ossprovider "aliyun-oss-go-sdk-managed-credentials-provider/sdk"
    )
    
    func main() {
        secretName := "********"
        endpoint := "https://oss-cn-hangzhou.aliyuncs.com"
    
        // Get the Proxy OSS Client.
        client, err := ossprovider.New(endpoint, secretName)
        if err != nil {
            fmt.Println(err)
            return
        }
    
        result, err := client.ListBuckets()
        if err != nil {
            fmt.Println(err)
            return
        }
        for _, bucket := range result.Buckets {
            // Business code
        }
    
        // Shut down the client to release the resources associated with the plug-in.
        client.Shutdown()
    }
    ```
