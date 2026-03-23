If you connect to a database using Java Database Connectivity (JDBC), you can store the database account and password in an RDS secret or a generic secret. You can then integrate the secrets JDBC client into your application to authenticate the database connection using the secret that is managed in Key Management Service (KMS). This topic describes how to install and use the secrets JDBC client.

## SDK overview

The secrets JDBC client is designed for scenarios where you use JDBC to connect to databases. The client automatically retrieves a secret from KMS to authenticate the database connection, which simplifies integration. For other scenarios where you need to retrieve and use secrets, we recommend that you use the secrets client. Alternatively, you can use the KMS instance SDK or Alibaba Cloud SDK. For more information, see [SDK reference](/help/en/kms/key-management-service/developer-reference/sdk-user-guide/).

**Note**

You can perform management operations on secrets only using the Alibaba Cloud SDK.

The secrets JDBC client provides the following features:

-   Supports JDBC, including database connections in connection pools such as c3p0 and DBCP, and data sources.
    
-   Supports four database types: MySQL, SQL Server, PostgreSQL, and MariaDB.
    
-   Supports custom secret refresh rates.
    

## **Usage notes**

-   Supported secret types: generic secrets and RDS secrets.
    
    -   If you use an RDS secret, we recommend that you use a dual-account managed RDS secret.
        
    -   If you use a generic secret, the secret value must be in the following JSON format.
        
        ```
        {
            "AccountName":"<your_database_account_username>",
            "AccountPassword":"<your_database_account_password>"
        }
        ```
        
-   Supported programming language: Java 8 or later.
    
-   Supported database connection pools: c3p0, DBCP, and Druid.
    
    **Important**
    
    The default HikariCP connection pool in Spring Boot does not handle JDBC error codes in a standard way. This may cause the KMS secret refresh to fail.
    

## Step 1: Create an access credential

### **Scenario 1: Retrieve secret values using a shared gateway**

You can use the Internet or a virtual private cloud (VPC). Supported RAM-based authentication methods include instance RAM roles for Elastic Compute Service (ECS) instances, RamRoleArn, Security Token Service (STS) tokens, and AccessKeys. For more information, see [Manage access credentials](/help/en/sdk/developer-reference/v2-manage-access-credentials).

## **ECS instance RAM role**

An Elastic Compute Service (ECS) instance Resource Access Management (RAM) role is a regular service role that is attached to ECS instances, and the principal is ECS. This allows the ECS instance to obtain STS tokens for temporary access, eliminating the need for AccessKey pairs when calling KMS OpenAPI operations. For more information, see [Instance RAM roles](/help/en/ecs/user-guide/attach-an-instance-ram-role-to-an-ecs-instance).

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
    

## **RamRoleArn**

RAM users or cloud services can obtain temporary permissions by assuming roles instead of directly using long-term access keys, thereby reducing the risk of key leakage. For instance, in temporary data processing tasks, RAM users or cloud services can temporarily assume a role with a specific RamRoleArn. RamRoleArn is the ARN information of the RAM role. Once the task is completed, the role's permissions are revoked, further mitigating the risk of exposure.

1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/) by using an Alibaba Cloud account or a RAM user who has administrative rights.
    
2.  [Create a RAM role](/help/en/ram/user-guide/create-a-ram-role/).![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0360567371/p907475.png)
    
3.  Grant the RAM role access to KMS. You have two methods to complete the grant.
    
    -   Method 1: Identity-based policies
        
        KMS provides system-defined permission policies that can be attached to RAM roles. For more information, see [System policies for KMS](/help/en/kms/key-management-service/security-and-compliance/kms-1). You can also create [custom policies](/help/en/kms/key-management-service/security-and-compliance/sample-custom-permission-policies).
        
    -   Method 2: Resource-based policies
        
        KMS supports resource-based policies, which allow you to set access permissions for keys and secrets. This lets you control which Alibaba Cloud accounts, RAM users, and RAM roles have permission to manage or use KMS keys and secrets. For more information, see [Key policies](/help/en/kms/key-management-service/security-and-compliance/key-policies/) and [Secret policies](/help/en/kms/key-management-service/security-and-compliance/secret-policies/).
        
4.  [View the RamRoleArn of a RAM role](/help/en/ram/user-guide/view-the-information-about-a-ram-role).
    
    The RamRoleArn follows the format `acs:ram::$accountID:role/$roleName`, where `$accountID` is the Alibaba Cloud account and `$roleName` is the RAM role name.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8255965471/p907479.png)
    

## STS Token

By using STS services, a temporary access credential can be issued to RAM users or RAM roles, allowing them to access KMS with permissions specified by the policy for a limited validity period. After the expiration period, the credential will automatically become invalid.

1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/) by using an Alibaba Cloud account or a RAM user who has administrative rights.
    
2.  [Create a RAM user](/help/en/ram/user-guide/create-a-ram-user) or [create a RAM role](/help/en/ram/user-guide/create-a-ram-role/).
    
3.  [Grant AliyunSTSAssumeRoleAccess permission to a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user) or [Grant AliyunSTSAssumeRoleAccess permission to a RAM role](/help/en/ram/user-guide/grant-permissions-to-a-ram-role).
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1208467371/p907020.png)
    
4.  Grant the RAM user access to KMS. You have two methods to complete the grant.
    
    -   Method 1: Identity-based policies
        
        KMS provides system-defined permission policies that can be attached to RAM users. For more information, see [System policies for KMS](/help/en/kms/key-management-service/security-and-compliance/kms-1). You can also create [custom policies](/help/en/kms/key-management-service/security-and-compliance/sample-custom-permission-policies).
        
    -   Method 2: Resource-based policies
        
        KMS supports resource-based policies, which allow you to set access permissions for keys and secrets. This lets you control which Alibaba Cloud accounts, RAM users, and RAM roles have permission to manage or use KMS keys and secrets. For more information, see [Key policies](/help/en/kms/key-management-service/security-and-compliance/key-policies/) and [Secret policies](/help/en/kms/key-management-service/security-and-compliance/secret-policies/).
        

5.  Use the RAM user or RAM role to call the [AssumeRole](/help/en/ram/developer-reference/api-sts-2015-04-01-assumerole) interface of the STS service to obtain temporary access credentials.
    

## AccessKey

This section uses a RAM user's AccessKey pair as an example. Alibaba Cloud accounts have default administrator privileges for all resources, which cannot be modified. Because compromised AccessKeys risk significant security vulnerabilities, we strongly recommend against creating them for Alibaba Cloud accounts. Instead, create a RAM user solely for API access, [generate its AccessKey pair](/help/en/ram/user-guide/create-an-accesskey-pair), and implement the principle of least privilege.

1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/). In the left-side navigation pane, choose **Identities** > **Users**, and click on the target RAM user.
    
2.  In the **Authentication** tab, click **Create AccessKey** and follow the instructions.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5237452471/p928074.png)
    
3.  Grant the RAM user access to retrieve KMS secrets.
    
    -   Method 1: Through identity-based policies
        
        KMS provides system-defined permission policies that can be attached to RAM users. For more information, see [System policies for KMS](/help/en/kms/key-management-service/security-and-compliance/kms-1). You can also create [custom policies](/help/en/kms/key-management-service/security-and-compliance/sample-custom-permission-policies).
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0360567371/p907565.png)
        
    -   Method 2: Through resource-based policies
        
        KMS supports resource-based policies, which allow you to set access permissions for keys and secrets. This lets you control which Alibaba Cloud accounts, RAM users, and RAM roles have permission to manage or use KMS keys and secrets. For more information, see [Key policies](/help/en/kms/key-management-service/security-and-compliance/key-policies/) and [Secret policies](/help/en/kms/key-management-service/security-and-compliance/secret-policies/).
        
    

## ClientKey (not recommended)

Follow the standard creation method described in [Create an AAP](/help/en/kms/key-management-service/user-guide/create-an-aap) to create a ClientKey for accessing the shared gateway.

**Important**

-   When you configure network rules, set Network Type to **Public** or **VPC**.
    
-   When you configure the scope of permission rules, select ****Shared KMS Gateway****.
    

### **Scenario 2: Retrieve secret values using a dedicated gateway (not recommended)**

This scenario uses a KMS private network. Only a ClientKey can be used as the access credential.

-   **Method 1: Quick creation**
    
    Suitable for quick testing and development scenarios. This method uses a default permission policy that cannot be modified. Your application will have access to all keys and secrets in the specified KMS instance.
    
-   **Method 2: Standard creation**
    
    Use this method to configure fine-grained access permissions for resources.
    

## **Method 1: Quick creation**

1.  Log on to the [KMS console](https://yundun.console.alibabacloud.com/?p=kms#/keyList/base). In the top navigation bar, select a region. In the left-side navigation pane, click **Application Access** > **Multi-Cloud Access (formerly AAP)**.
    
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
    
    The client key contains Application Access Secret and **Password**. By default, **Application Access Secret** is saved in a file whose name is in the `clientKey_****.json` format. By default, **Password** is saved in a file whose name is in the `clientKey_****_Password.txt` format.
    

## **Method 2: Standard creation**

For detailed instructions, see [Method 2: Standard creation](/help/en/kms/key-management-service/user-guide/create-an-aap#f13b7e1159e6n). When configurating parameters, ensure the following settings are correct:

-   When create a network access rule, select **Private** for **Network Type**.
    
-   When configure the scope of permission policy, select the specified **KMS Instance ID**.
    

## **Step 2: Install the client**

You can install the secrets JDBC client in your project using Maven.

```
<dependency>
    <groupId>com.aliyun</groupId>
    <artifactId>aliyun-secretsmanager-jdbc</artifactId>
    <version>x.x.x</version>
</dependency>
<dependency>
  <groupId>com.aliyun</groupId>
  <artifactId>aliyun-java-sdk-core</artifactId>
  <version>4.x.x</version>
</dependency>
```

**Note**

We recommend that you install the **latest version** of the SDK. For more information about the installation and source code, visit [aliyun-secretsmanager-jdbc](https://github.com/aliyun/aliyun-secretsmanager-jdbc).

## **Step 3: Initialize the client using the** secretsmanager.properties **configuration file**

Add the secretsmanager.properties configuration file to your project. The parameters vary based on the access credential used.

## AccessKey

```
## The type of the access credential.
credentials_type=ak
## The AccessKey ID.
credentials_access_key_id=#credentials_access_key_id#
## The AccessKey secret.
credentials_access_secret=#credentials_access_secret#
## The region of the associated KMS service.
cache_client_region_id=[{"regionId":"#regionId#"}]
## The custom refresh rate. Default value: 6 hours. Minimum value: 5 minutes. Unit: milliseconds.
refresh_secret_ttl=21600000
```

## RAMRoleArn

```
## The type of the access credential.
credentials_type=ram_role
## The AccessKey ID.
credentials_access_key_id=#credentials_access_key_id#
## The AccessKey secret.
credentials_access_secret=#credentials_access_secret#
## The name of the session associated with the access credential.
credentials_role_session_name=#credentials_role_session_name#
## The ARN of the RAM role.
credentials_role_arn=#credentials_role_arn#
## The policy for the access credential.
credentials_policy=#credentials_policy#
## The region of the associated KMS service.
cache_client_region_id=[{"regionId":"#regionId#"}]
## The custom refresh rate. Default value: 6 hours. Minimum value: 5 minutes. Unit: milliseconds.
refresh_secret_ttl=21600000
```

## **ECS instance RAM role**

```
## The type of the access credential.
credentials_type=ecs_ram_role
## The name of the ECS RAM role.
credentials_role_name=#credentials_role_name#
## The region of the associated KMS service.
cache_client_region_id=[{"regionId":"#regionId#"}]
## The custom refresh rate. Default value: 6 hours. Minimum value: 5 minutes. Unit: milliseconds.
refresh_secret_ttl=21600000
```

## **STS Token**

```
## The type of the access credential.
credentials_type=sts
## The AccessKey ID.
credentials_access_key_id=#credentials_access_key_id#
## The AccessKey secret.
credentials_access_secret=#credentials_access_secret#
## The name of the session associated with the access credential.
credentials_role_session_name=#credentials_role_session_name#
## The ARN of the RAM role.
credentials_role_arn=#credentials_role_arn#
## The policy for the access credential.
credentials_policy=#credentials_policy#
## The region of the associated KMS service.
cache_client_region_id=[{"regionId":"#regionId#"}]
## The custom refresh rate. Default value: 6 hours. Minimum value: 5 minutes. Unit: milliseconds.
refresh_secret_ttl=21600000
```

## ClientKey (shared gateway)

```
## The type of the access credential.
credentials_type=client_key
# The path of the ClientKey file.
client_key_private_key_path=#your client key private key file path#
## The decryption password of the ClientKey. You can read the password from an environment variable or a file.
client_key_password_from_env_variable=#your client key private key password environment variable name#
client_key_password_from_file_path=#your client key private key password file path#
## The region of the associated KMS service.
cache_client_region_id=[{"regionId":"#regionId#"}]
## The custom refresh rate. Default value: 6 hours. Minimum value: 5 minutes. Unit: milliseconds.
## The following configuration sets the secret refresh rate to 1 hour.
refresh_secret_ttl=3600000
```

## **ClientKey (dedicated gateway)**

-   **Method 1: Obtain the client key password from an environment variable**
    
    ```
    cache_client_dkms_config_info=[{"regionId":"<DKMS_REGION_ID>","endpoint":"<DKMS_ENDPOINT>","passwordFromEnvVariable":"<PASSWORD_ENV_VARIABLE>","clientKeyFile":"<CLIENT_KEY_FILE_PATH>","ignoreSslCerts":false,"caFilePath":"<CA_CERTIFICATE_FILE_PATH>"}]
    ```
    
    Before configurating the file, define an environment variable with a custom name and set the client key password as its value. Then, replace `<PASSWORD_ENV_VARIABLE>` with your variable name.
    
    Example:
    
    ```
    cache_client_dkms_config_info=[{"regionId":"ap-southeast-1","endpoint":"kst-hzz634e67d126u9p9****.cryptoservice.kms.aliyuncs.com","passwordFromEnvVariable":"passwordFromEnvVariable","clientKeyFile":"C:\RamSecretPlugin\src\main\resources\clientKey_KAAP.json","ignoreSslCerts":false,"caFilePath":"C:\RamSecretPlugin\src\main\resources\PrivateKmsCA_kst-hzz634e67d126u9p9****.pem"}]
    ```
    
-   **Method 2: Obtain the client key password from a file**
    
    The default filename for the **Client Key Password (ClientKeyPassword)** after download is `clientKey_****_Password.txt`. You can rename the file, but you'll need to replace `<your Client Key file path>` in the cache\_client\_dkms\_config\_info value with the new file path.
    
    ```
    cache_client_dkms_config_info=[{"regionId":"<your dkms regionId >","endpoint":"<your dkms endpoint>","passwordFromFilePath":"< your password file path >","clientKeyFile":"<your Client Key file path>","ignoreSslCerts":false,"caFilePath":"<your CA certificate file path>"}]
    ```
    
    Example:
    
    ```
    cache_client_dkms_config_info=[{"regionId":"cn-hangzhou","endpoint":"kst-hzz634e67d126u9p9****.cryptoservice.kms.aliyuncs.com","passwordFromFilePath":"C:\RamSecretPlugin\src\main\resources\clientKeyPassword.txt","clientKeyFile":"C:\RamSecretPlugin\src\main\resources\clientKey_KAAP.json","ignoreSslCerts":false,"caFilePath":"C:\RamSecretPlugin\src\main\resources\PrivateKmsCA_kst-hzz634e67d126u9p9****.pem"}]
    ```
    

**Parameter description**

**Parameter**

**Description**

**Note**

**regionId**

The region ID of the KMS instance.

For specific region IDs, see [Regions and zones](/help/en/kms/key-management-service/product-overview/supported-regions).

**endpoint**

The domain name of the KMS instance, in the format `{instance ID}.kms.aliyuncs.com`.

Visit the **Instances** page and check the **Instance VPC Endpoint** on the instance details page, which is the endpoint.

**clientKeyFile**

The absolute or relative path to the client key file in the JSON format.

-   Client key file: The **Application Access Secret** downloaded when you create a client key in the application access point (AAP). The default filename after download is ClientKey\_\*\*\*\*\*\*.json.
    
-   Password: The client key password downloaded when you create a client key in the AAP. The default filename after download is ClientKey\_\*\*\*\*\*\*\_password.txt.
    

**Important**

Each client key has a unique password, both generated only upon creation. If you lose either, you must create a new client key in the AAP. For instructions, see [Create an application access point](/help/en/kms/key-management-service/user-guide/create-an-aap).

**passwordFromFilePath** or **passwordFromEnvVariable**

-   **passwordFromFilePath**: Obtains the password from a file. The value is the absolute or relative path to the file containing the client key password.
    
-   **passwordFromEnvVariable**: Obtains the password from an environment variable. The value is the name of the environment variable that the value is the client key password.
    

**ignoreSslCerts**

Specifies whether to ignore the validity check on the SSL certificate of the KMS instance. The KMS instance has a built-in SSL certificate that is used for identity verification and SSL- or TLS-encrypted communication. Valid values:

-   true: The validity check is ignored.
    
    If the value is true, the **caFilePath** parameter is not required.
    
-   false: The validity check is performed.
    

In the production environment, set this parameter to false.

**caFilePath**

The absolute or relative path to the certificate authority (CA) certificate file of the KMS instance.

The CA certificate validates the KMS instance's SSL certificate, including checks on the certificate's issuer, its validity period, and whether the domain name matches the KMS endpoint.

Visit the **Instances** page. On the instance details page, click **Download** in the **Instance CA Certificate** section.

## **Step 4:** Use the secrets JDBC client to connect to a database

**Important**

This example provides only the properties that require modification. You can configure other properties as needed.

### **Connect to a database using JDBC**

-   MySQL database
    
    **Note**
    
    Replace `#your-mysql-secret-name#`, `<your-mysql-ip>`, `<your-mysql-port>`, and `<your-database-name>` in the sample code with the actual secret name, server IP address, port, and database name.
    
    ```
    import java.sql.Connection;
    import java.sql.DriverManager;
    import java.sql.SQLException;
    
    public class SecretManagerJDBCSample {
        public static void main(String[] args) throws Exception {
            // Load the Alibaba Cloud secrets JDBC client, com.aliyun.kms.secretsmanager.MysqlSecretsManagerSimpleDriver.
            Class.forName("com.aliyun.kms.secretsmanager.MysqlSecretsManagerSimpleDriver");
            Connection connect = null;
            try {
                connect = DriverManager.getConnection("secrets-manager:mysql://<your-mysql-ip>:<your-mysql-port>/<your-database-name>", "#your-mysql-secret-name#","");
            } catch(SQLException e) {
                e.printStackTrace();
            }
        }
    }
    ```
    
-   SQL Server database
    
    **Note**
    
    Replace `#your-sqlserver-secret-name#`, `<your-sqlserver-ip>`, `<your-sqlserver-port>`, and `<your-database-name>` in the sample code with your secret name, server IP address, port, and database name.
    
    ```
    import java.sql.Connection;
    import java.sql.DriverManager;
    import java.sql.SQLException;
    
    public class SecretManagerJDBCSqlServerSample {
    
        public static void main(String[] args) throws Exception{
            // Load the Alibaba Cloud secrets JDBC client, com.aliyun.kms.secretsmanager.MssqlSecretsManagerSimpleDriver.
            Class.forName("com.aliyun.kms.secretsmanager.MssqlSecretsManagerSimpleDriver");
            Connection connect = null;
            try {
                connect = DriverManager.getConnection("secrets-manager:sqlserver://<your-sqlserver-ip>:<your-sqlserver-port>;databaseName=<your-database-name>", "#your-sqlserver-secret-name#", "");
            }  catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }
    ```
    
-   PostgreSQL database
    
    **Note**
    
    Replace `#your-postgresql-secret-name#`, `<your-postgresql-ip>`, `<your-postgresql-port>`, and `<your-database-name>` in the sample code with the actual secret name, server IP address, port, and database name.
    
    ```
    import java.sql.Connection;
    import java.sql.DriverManager;
    import java.sql.SQLException;
    
    public class SecretManagerJDBCPostgreSQLSample {
        public static void main(String[] args) throws Exception {
            // Load the Alibaba Cloud secrets JDBC client, com.aliyun.kms.secretsmanager.PostgreSQLSecretManagerSimpleDriver.
            Class.forName("com.aliyun.kms.secretsmanager.PostgreSQLSecretManagerSimpleDriver");
            Connection connect = null;
            try {
                connect = DriverManager.getConnection("secrets-manager:postgresql://<your-postgresql-ip>:<your-postgresql-port>/<your-database-name>", "#your-postgresql-secret-name#", "");
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }
    ```
    
-   MariaDB database
    
    **Note**
    
    Replace `#your-mariadb-secret-name#`, `<your-mariadb-ip>`, `<your-mariadb-port>`, and `<your-database-name>` in the sample code with the actual secret name, server IP address, port, and database name.
    
    ```
    import java.sql.Connection;
    import java.sql.DriverManager;
    import java.sql.SQLException;
    
    public class SecretManagerJDBCMarialDBSample {
    
    	public static void main(String[] args) throws Exception{
    		// Load the Alibaba Cloud secrets JDBC client, com.aliyun.kms.secretsmanager.MariaDBSecretManagerSimpleDriver.
    		Class.forName("com.aliyun.kms.secretsmanager.MariaDBSecretManagerSimpleDriver");
    		Connection connect = null;
    		try {
    			connect = DriverManager.getConnection("secrets-manager:mariadb://<your-mariadb-ip>:<your-mariadb-port>/<your-database-name>", "#your-mariadb-secret-name#", "");
    		}  catch (SQLException e) {
    			e.printStackTrace();
    		}
    	}
    }
    ```
    

### **Connect to a database using a connection pool**

Configure `c3p0.user`, `c3p0.driverClass`, and `c3p0.jdbcUrl` in the c3p0.properties configuration file. Set `c3p0.user` to the name of the secret and `c3p0.driverClass` to the name of the Alibaba Cloud secrets JDBC driver class. The value of `c3p0.jdbcUrl` must start with `secrets-manager`.

-   MySQL database
    
    **Note**
    
    Replace `#your-mysql-secret-name#`, `<your-mysql-ip>`, `<your-mysql-port>`, and `<your-database-name>` in the sample code with the actual secret name, server IP address, port, and database name.
    
    ```
    c3p0.user=#your-mysql-secret-name#
    c3p0.driverClass=com.aliyun.kms.secretsmanager.MysqlSecretsManagerSimpleDriver
    c3p0.jdbcUrl=secrets-manager:mysql://<your-mysql-ip>:<your-mysql-port>/<your-database-name>
    ```
    
-   SQL Server database
    
    **Note**
    
    Replace `#your-sqlserver-secret-name#`, `<your-sqlserver-ip>`, `<your-sqlserver-port>`, and `<your-database-name>` in the sample code with the actual secret name, server IP address, port, and database name.
    
    ```
    c3p0.user=#your-sqlserver-secret-name#
    c3p0.driverClass=com.aliyun.kms.secretsmanager.MysqlSecretsManagerSimpleDriver
    c3p0.jdbcUrl=secrets-manager:sqlserver://<your-sqlserver-ip>:<your-sqlserver-port>/<your-database-name>
    ```
    
-   PostgreSQL database
    
    **Note**
    
    Replace `#your-postgresql-secret-name#`, `<your-postgresql-ip>`, `<your-postgresql-port>`, and `<your-database-name>` in the sample code with the actual secret name, server IP address, port, and database name.
    
    ```
    c3p0.user=#your-postgresql-secret-name#
    c3p0.driverClass=com.aliyun.kms.secretsmanager.MysqlSecretsManagerSimpleDriver
    c3p0.jdbcUrl=secrets-manager:postgresql://<your-postgresql-ip>:<your-postgresql-port>/<your-database-name>
    ```
    
-   MariaDB database
    
    **Note**
    
    Replace `#your-mariadb-secret-name#`, `<your-mariadb-ip>`, `<your-mariadb-port>`, and `<your-database-name>` in the sample code with the actual secret name, server IP address, port, and database name.
    
    ```
    c3p0.user=#your-mariadb-secret-name#
    c3p0.driverClass=com.aliyun.kms.secretsmanager.MysqlSecretsManagerSimpleDriver
    c3p0.jdbcUrl=secrets-manager:mariadb://<your-mariadb-ip>:<your-mariadb-port>/<your-database-name>
    ```
    

### **Connect to a database using a data source**

This example uses a c3p0 ComboPooledDataSource and a MySQL database. Add the following configuration to the Spring configuration file.

**Note**

Replace `#your-mysql-secret-name#`, `<your-mysql-ip>`, `<your-mysql-port>`, and `<your-database-name>` in the sample code with the actual secret name, server IP address, port, and database name.

```
<bean id="dataSource" class="com.mchange.v2.c3p0.ComboPooledDataSource" >
      <property name="driverClass" value="com.aliyun.kms.secretsmanager.MysqlSecretsManagerSimpleDriver" />
      <property name="user" value="#your-mysql-secret-name#" />
      <property name="jdbcUrl" value="secrets-manager:mysql://<your-mysql-ip>:<your-mysql-port>/<your-database-name>" />
      <property name="maxPoolSize" value="***" />
      <property name="minPoolSize" value="***" />
      <property name="initialPoolSize" value="***" />
  </bean>
  <bean id="jdbcTemplate" class="org.springframework.jdbc.core.JdbcTemplate" >
      <property name="dataSource" ref="dataSource" />
  </bean>
```

**Note**

Set the values of the maxPoolSize, minPoolSize, and initialPoolSize parameters as needed.

### **Connect to a database using a Druid connection pool**

This example uses a MySQL database. You must modify the following properties in the configuration file.

**Note**

Replace `#your-mysql-secret-name#`, `<your-mysql-ip>`, `<your-mysql-port>`, and `<your-database-name>` in the sample code with the actual secret name, server IP address, port, and database name.

-   Using a properties configuration file
    
    ```
    username=#your-mysql-secret-name#
    driverClassName=com.aliyun.kms.secretsmanager.MysqlSecretsManagerSimpleDriver
    url=secrets-manager:mysql://<your-mysql-ip>:<your-mysql-port>/<your-database-name>
    ```
    
-   Using bean configuration
    
    -   Method 1: XML configuration file
        
        ```
        <bean id="dataSource" class="com.alibaba.druid.pool.DruidDataSource" init-method="init" destroy-method="close"> 
             <property name="username" value="${your-mysql-secret-name}" />
             <property name="driverClassName" value="com.aliyun.kms.secretsmanager.MysqlSecretsManagerSimpleDriver" />
             <property name="url" value="secrets-manager:mysql://<your-mysql-ip>:<your-mysql-port>/<your-database-name>" />
        </bean>
        ```
        
    -   Method 2: Property injection
        
        Create a driver class in the application to load database connection information.
        
        ```
        @Configuration
        public class DataConfig {
        
            @Value("${your-mysql-secret-name}")
            private String username;
        
            @Value("com.aliyun.kms.secretsmanager.MysqlSecretsManagerSimpleDriver")
            private String driverClassName;
        
            @Value("secrets-manager:mysql://<your-mysql-ip>:<your-mysql-port>/<your-database-name>")
            private String url;
        
            @Bean(name = "dataSource",initMethod = "init",destroyMethod = "close")
            public DruidDataSource dataSource(){
                DruidDataSource druidDataSource = new DruidDataSource();
                druidDataSource.setUsername(username);
                druidDataSource.setDriverClassName(driverClassName);
                druidDataSource.setUrl(url);
                return druidDataSource;
            }
        }
        ```
