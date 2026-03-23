This topic describes how to configure a credential provider for Object Storage Service (OSS) or OSS-HDFS.

## Configure related parameters in the EMR console

You can add the AccessKey ID, AccessKey secret, and endpoint that you use to access OSS or OSS-HDFS to the core-site.xml file of Hadoop in advance. To configure related parameters for an E-MapReduce (EMR) cluster, perform the following steps:

1.  On the Configure tab of the Hadoop-Common service, click the core-site.xml tab.
2.  Click Add configuration item to add the fs.oss.accessKeyId and fs.oss.accessKeySecret parameters.
3.  Click OK. In the dialog box that appears, enter an execution reason and click Save.
4.  Click Save in the lower part of the page.

## Use a Hadoop credential provider to store the AccessKey pair

The fs.oss.accessKeyId and fs.oss.accessKeySecret parameters that you configured in the preceding steps are displayed in plaintext in the core-site.xml file. You can encrypt and store the values of the parameters in the credential file of a Hadoop credential provider.

To store the AccessKey pair and security token in a credential file, run the following command provided by Hadoop:

```
hadoop credential <subcommand> [options]
```

For example, store the AccessKey pair and security token in a JCEKS file. You can protect the file by using file permissions or specify a password to encrypt the information that you want to store. If you do not specify a password, the default string is used for encryption.

```
hadoop credential create fs.oss.accessKeyId -value AAA -provider jceks://file/root/oss.jceks
hadoop credential create fs.oss.accessKeySecret -value BBB -provider jceks://file/root/oss.jceks
hadoop credential create fs.oss.securityToken -value CCC -provider jceks://file/root/oss.jceks
```

After a credential file is generated, you must configure the following parameter to specify the location of the credential provider:

```
<configuration>
    <property>
        <name>fs.oss.security.credential.provider.path</name>
        <value>jceks://file/root/oss.jceks</value>
        <description>The path used to store the credential file that stores the AccessKey pair. For example, you can set this parameter to jceks://file/${user.home}/oss.jceks, which indicates that the oss.jceks file is stored in the home directory.</description>
    </property>
</configuration>
```

## Use credential providers in JindoSDK to access OSS or OSS-HDFS

By default, three types of credential providers are configured, including SimpleCredentialsProvider, EnvironmentVariableCredentialsProvider, and CommonCredentialsProvider. The system reads credential data from the credential providers in sequence until a valid credential is obtained.

```
<configuration>
    <property>
        <name>fs.oss.credentials.provider</name>
        <value>com.aliyun.jindodata.oss.auth.SimpleCredentialsProvider,com.aliyun.jindodata.oss.auth.EnvironmentVariableCredentialsProvider,com.aliyun.jindodata.oss.auth.CommonCredentialsProvider</value>
        <description>The types of com.aliyun.jindodata.oss.auth.JindoCredentialsProvider. Separate multiple credential providers with commas (,). The system reads credential data from the credential providers in sequence until a valid credential is obtained. For more information about credential providers, see the following table. </description>
    </property>
</configuration>
```

You can select different credential providers based on your business requirements. The following table describes the supported credential providers.

Credential provider

Description

TemporaryCredentialsProvider

This credential provider is suitable for scenarios in which an AccessKey pair with a validity period and a security token with a validity period are used to access OSS or OSS-HDFS.

SimpleCredentialsProvider

This credential provider is suitable for scenarios in which a permanently valid AccessKey pair is used to access OSS or OSS-HDFS.

EnvironmentVariableCredentialsProvider

This credential provider is suitable for obtaining an AccessKey pair from environment variables.

CommonCredentialsProvider

This credential provider is suitable for common scenarios.

CustomCredentialsProvider

This credential provider is suitable for accessing services that are password-free.

### TemporaryCredentialsProvider

-   Configure the credential provider
    
    ```
    <configuration>
        <property>
            <name>fs.oss.credentials.provider</name>
            <value>com.aliyun.jindodata.oss.auth.TemporaryCredentialsProvider</value>
        </property>
    </configuration>
    ```
    
-   Configure the AccessKey pair and security token used to access OSS or OSS-HDFS
    
    ```
    <configuration>
        <property>
            <name>fs.oss.accessKeyId</name>
            <value>The AccessKey ID used to access OSS or OSS-HDFS.</value>
        </property>
        <property>
            <name>fs.oss.accessKeySecret</name>
            <value>The AccessKey secret used to access OSS or OSS-HDFS.</value>
        </property>
        <property>
            <name>fs.oss.securityToken</name>
            <value>The security token used to access OSS or OSS-HDFS.</value>
        </property>
    </configuration>
    ```
    

### SimpleCredentialsProvider

-   Configure the credential provider
    
    ```
    <configuration>
        <property>
            <name>fs.oss.credentials.provider</name>
            <value>com.aliyun.jindodata.oss.auth.SimpleCredentialsProvider</value>
        </property>
    </configuration>
    ```
    
-   Configure the AccessKey pair used to access OSS or OSS-HDFS
    
    ```
    <configuration>
        <property>
            <name>fs.oss.accessKeyId</name>
            <value>The AccessKey ID used to access OSS or OSS-HDFS.</value>
        </property>
        <property>
            <name>fs.oss.accessKeySecret</name>
            <value>The AccessKey secret used to access OSS or OSS-HDFS.</value>
        </property>
    </configuration>
    ```
    

### EnvironmentVariableCredentialsProvider

-   Configure the credential provider
    
    ```
    <configuration>
        <property>
            <name>fs.oss.credentials.provider</name>
            <value>com.aliyun.jindodata.oss.auth.EnvironmentVariableCredentialsProvider</value>
        </property>
    </configuration>
    ```
    
-   Configure the AccessKey pair and security token used to access OSS or OSS-HDFS
    
    To use this credential provider, you must configure the parameters described in the following table in the environment variable file.
    
    Parameter
    
    Description
    
    OSS\_ACCESS\_KEY\_ID
    
    The AccessKey ID used to access OSS or OSS-HDFS.
    
    OSS\_ACCESS\_KEY\_SECRET
    
    The AccessKey secret used to access OSS or OSS-HDFS.
    
    OSS\_SECURITY\_TOKEN
    
    The security token used to access OSS or OSS-HDFS.
    
    **Note** This parameter is required only if you configure a token that has a validity period.
    

### CommonCredentialsProvider

-   Configure the credential provider
    
    ```
    <configuration>
        <property>
            <name>fs.oss.credentials.provider</name>
            <value>com.aliyun.jindodata.oss.auth.CommonCredentialsProvider</value>
        </property>
    </configuration>
    ```
    
-   Configure the AccessKey pair and security token used to access OSS or OSS-HDFS
    
    ```
    <configuration>
        <property>
            <name>jindo.common.accessKeyId</name>
            <value>The AccessKey ID used to access OSS or OSS-HDFS.</value>
        </property>
        <property>
            <name>jindo.common.accessKeySecret</name>
            <value>The AccessKey secret used to access OSS or OSS-HDFS.</value>
        </property>
        <property>
            <name>jindo.common.securityToken</name>
            <value>The security token used to access OSS or OSS-HDFS. This parameter is required only if you configure a token that has a validity period. </value>
        </property>
    </configuration>
    ```
    

### CustomCredentialsProvider

-   Configure the credential provider
    
    ```
    <configuration>
        <property>
            <name>fs.oss.credentials.provider</name>
            <value>com.aliyun.jindodata.oss.auth.CustomCredentialsProvider</value>
        </property>
    </configuration>
    ```
    
-   Configure the URL of a password-free service
    
    ```
    <configuration>
        <property>
            <name>aliyun.oss.provider.url</name>
            <value>The URL of a password-free service.</value>
        </property>
    </configuration>
    ```
    
    You can set the aliyun.oss.provider.url parameter to the URL of a password-free service that can be accessed over the HTTP, HTTPS, or Secrets protocol.
    -   HTTP or HTTPS protocol
        
        The URL of password-free services that can be accessed over the HTTP or HTTPS protocol is in the `http://localhost:1234/sts` format. The return value must be in the JSON format. For more information, see the [Step 5: (Optional) Obtain a temporary authorization token](/help/en/doc-detail/61178.html#Token) section of the "Use an instance RAM role by calling API operations" topic.
        
        ```
        {
        "AccessKeyId" : "XXXXXXXXX",
        "AccessKeySecret" : "XXXXXXXXX",
        "Expiration" : "2020-11-01T05:20:01Z",
        "SecurityToken" : "XXXXXXXXX",
        "LastUpdated" : "2020-10-31T23:20:01Z",
        "Code" : "Success"
        }
        ```
        
    -   Secrets protocol
        
        The URL of password-free services that can be accessed over the Secrets protocol is in the `secrets:///local_path_prefix` format. This URL format is commonly used in [Kubernetes scenarios](https://kubernetes.io/docs/concepts/configuration/secret/#consuming-secret-values-from-volumes). The local\_path\_prefix parameter indicates the prefix of the URL.
        
        -   If the URL is set to secrets:///secret/JindoOss, the system searches for files such as /secret/JindoOssAccessKeyId, /secret/JindoOssAccessKeySecret, and /secret/JindoOssSecurityToken on the nodes of the EMR cluster.
        -   If the URL is set to secrets:///secret/JindoOss/, the system searches for files such as /secret/JindoOss/AccessKeyId, /secret/JindoOss/AccessKeySecret, and /secret/JindoOss/SecurityToken on the nodes of the EMR cluster.
