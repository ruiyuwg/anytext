This topic describes how to configure a credential provider of Object Storage Service (OSS) or OSS-HDFS by bucket.

## Configure a credential provider by bucket

```
<configuration>
    <property>
        <name>fs.oss.bucket.XXX.credentials.provider</name>
        <value>com.aliyun.jindodata.oss.auth.SimpleAliyunCredentialsProvider,com.aliyun.jindodata.oss.auth.EnvironmentVariableCredentialsProvider,com.aliyun.jindodata.oss.auth.CommonCredentialsProvider</value>
        <description> Specify the implementation classes of com.aliyun.jindodata.oss.auth.AliyunCredentialsProvider. Separate multiple classes with commas (,). The system reads credential values in sequence until a valid credential value is found. For more information about credential providers, see the Credential provider types section in this topic. </description>
    </property>
</configuration>
```

**Note**

In the preceding code, `XXX` indicates the name of an OSS or OSS-HDFS bucket.

## Credential provider types

You can select a credential provider based on your business requirements. The following table describes the credential providers that are supported.

**Credential provider type**

**Description**

TemporaryCredentialsProvider

This credential provider is suitable for scenarios in which an AccessKey pair with a validity period and a security token with a validity period are used to access OSS or OSS-HDFS.

SimpleCredentialsProvider

This credential provider is suitable for scenarios in which a permanently valid AccessKey pair is used to access OSS or OSS-HDFS.

EnvironmentVariableCredentialsProvider

This credential provider is suitable for scenarios in which an AccessKey pair can be obtained from the environment variables.

CommonCredentialsProvider

This credential provider is suitable for common scenarios.

### TemporaryCredentialsProvider

-   Configure the credential provider
    
    ```
    <configuration>
        <property>
            <name>fs.oss.bucket.XXX.credentials.provider</name>
            <value>com.aliyun.jindodata.oss.auth.TemporaryCredentialsProvider</value>
        </property>
    </configuration>
    ```
    
-   Configure the AccessKey pair of OSS or OSS-HDFS
    
    ```
    <configuration>
        <property>
            <name>fs.oss.bucket.XXX.accessKeyId</name>
            <value>The AccessKey ID of the OSS or OSS-HDFS bucket</value>
        </property>
        <property>
            <name>fs.oss.bucket.XXX.accessKeySecret</name>
            <value>The AccessKey secret of the OSS or OSS-HDFS bucket</value>
        </property>
        <property>
            <name>fs.oss.bucket.XXX.securityToken</name>
            <value>The security token of the OSS or OSS-HDFS bucket</value>
        </property>
    </configuration>
    ```
    

### SimpleCredentialsProvider

-   Configure the credential provider
    
    ```
    <configuration>
        <property>
            <name>fs.oss.bucket.XXX.credentials.provider</name>
            <value>com.aliyun.jindodata.oss.auth.SimpleCredentialsProvider</value>
        </property>
    </configuration>
    ```
    
-   Configure the AccessKey pair of OSS or OSS-HDFS
    
    ```
    <configuration>
        <property>
            <name>fs.oss.bucket.XXX.accessKeyId</name>
            <value>The AccessKey ID of the OSS or OSS-HDFS bucket</value>
        </property>
        <property>
            <name>fs.oss.bucket.XXX.accessKeySecret</name>
            <value>The AccessKey secret of the OSS or OSS-HDFS bucket</value>
        </property>
    </configuration>
    ```
    

### EnvironmentVariableCredentialsProvider

-   Configure the credential provider
    
    ```
    <configuration>
        <property>
            <name>fs.oss.bucket.XXX.credentials.provider</name>
            <value>com.aliyun.jindodata.oss.auth.EnvironmentVariableCredentialsProvider</value>
        </property>
    </configuration>
    ```
    
-   Configure the AccessKey pair of OSS or OSS-HDFS
    
    To use this credential provider, you must configure the parameters described in the following table in the environment variable file.
    
    **Parameter**
    
    **Description**
    
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
            <name>fs.oss.bucket.XXX.credentials.provider</name>
            <value>com.aliyun.jindodata.oss.auth.CommonCredentialsProvider</value>
        </property>
    </configuration>
    ```
    
-   Configure the AccessKey pair of OSS or OSS-HDFS
    
    ```
    <configuration>
        <property>
            <name>jindo.common.accessKeyId</name>
            <value>The AccessKey ID of the OSS or OSS-HDFS bucket</value>
        </property>
        <property>
            <name>jindo.common.accessKeySecret</name>
            <value>The AccessKey secret of the OSS or OSS-HDFS bucket</value>
        </property>
        <property>
            <name>jindo.common.securityToken</name>
            <value>The security token of the OSS or OSS-HDFS bucket. This parameter is required only if you configure a token that has a validity period. </value>
        </property>
    </configuration>
    ```
