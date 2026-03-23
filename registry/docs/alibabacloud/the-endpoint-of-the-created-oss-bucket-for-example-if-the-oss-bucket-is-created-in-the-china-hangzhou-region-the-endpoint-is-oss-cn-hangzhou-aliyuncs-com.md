This topic describes how to deploy JindoSDK in an environment other than E-MapReduce (EMR).

## Deploy JindoSDK

You can deploy JindoSDK in an environment other than EMR, such as an Elastic Compute Service (ECS) instance, other cloud services, or a self-managed server. In this topic, an ECS instance is used. For more information about how to connect to an ECS instance, see the "Connect to an instance" section in the [Create and manage an ECS instance in the console (express version)](/help/en/ecs/getting-started/create-and-manage-an-ecs-instance-by-using-the-ecs-console#section-fqu-flq-xvv) topic.

1.  Run the following command to download the TAR package of a specific version.
    
    The package of JindoSDK 6.3.4 in Linux X86 is downloaded in this topic.[](https://aliyun.github.io/alibabacloud-jindodata/jindosdk/jindosdk_deployment_multi_platform/)
    
    ```
    wget https://jindodata-binary.oss-cn-shanghai.aliyuncs.com/release/6.3.4/jindosdk-6.3.4-linux.tar.gz
    ```
    
2.  Run the following command to decompress the JindoSDK JAR package:
    
    ```
    tar zxvf jindosdk-6.3.4-linux.tar.gz
    ```
    
3.  Configure environment variables.
    
    **Important**
    
    You must deploy the installation package and environment variables on all required nodes.
    
    For example, run the following commands to decompress the installation package to the `/usr/lib/jindosdk-6.3.4` directory:
    
    ```
    export JINDOSDK_HOME=/usr/lib/jindosdk-6.3.4-linux
    export JINDOSDK_CONF_DIR=${JINDOSDK_HOME}/conf
    export PATH=${PATH}:${JINDOSDK_HOME}/bin
    export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:${JINDOSDK_HOME}/lib/native
    ```
    

## Modify configurations

### **Deploy JindoSDK by using the configuration file of Hadoop**

Perform the following steps to configure the Object Storage Service (OSS) or OSS-HDFS implementation class and the AccessKey pair.

1.  Run the following command to edit the `core-site.xml` configuration file of Hadoop:
    
    ```
    vim <HADOOP_HOME>/etc/hadoop/core-site.xml
    ```
    
2.  Configure the OSS or OSS-HDFS implementation class in the `core-site.xml` configuration file of Hadoop.
    
    ```
    <configuration>
        <property>
            <name>fs.AbstractFileSystem.oss.impl</name>
            <value>com.aliyun.jindodata.oss.JindoOSS</value>
        </property>
    
        <property>
            <name>fs.oss.impl</name>
            <value>com.aliyun.jindodata.oss.JindoOssFileSystem</value>
        </property>
    </configuration>
    ```
    
3.  In the `core-site.xml` configuration file of Hadoop, specify the AccessKey ID and AccessKey secret that you want to use to access the desired bucket of OSS or OSS-HDFS.
    
    ```
    <configuration>
        <property>
            <name>fs.oss.accessKeyId</name>
            <value>xxx</value>
        </property>
    
        <property>
            <name>fs.oss.accessKeySecret</name>
            <value>xxx</value>
        </property>
    </configuration>
    ```
    
4.  Configure the endpoint of OSS or OSS-HDFS.
    
    To access the desired bucket of OSS or OSS-HDFS, you must configure the endpoint of OSS or OSS-HDFS. We recommend that you specify an access path in the `oss://<Bucket>.<Endpoint>/<Object>` format. Example: `oss://examplebucket.cn-hangzhou.oss-dls.aliyuncs.com/exampleobject.txt`. After you specify the access path, JindoSDK accesses OSS or OSS-HDFS from the endpoint that is specified in the path. You can also specify a default endpoint in the following simplified format: `oss://<Bucket>/<Object>`. Example: `oss://examplebucket/exampleobject.txt`.
    
    ```
    <configuration>
        <property>
            <name>fs.oss.endpoint</name>
            <value>xxx</value>
        </property>
    </configuration>
    ```
    
    For more information, see the following references:
    
    -   [Configure a credential provider for OSS or OSS-HDFS](/help/en/emr/emr-on-ecs/user-guide/configure-a-credential-provider-for-oss-or-oss-hdfs#concept-2279044)
        
    -   [Configure a credential provider of OSS or OSS-HDFS by bucket](/help/en/emr/emr-on-ecs/user-guide/configure-the-oss-oss-hdfs-credential-provider-by-bucket)
        
    -   [FAQ about AccessKey pairs when you access OSS or OSS-HDFS](/help/en/emr/emr-on-ecs/user-guide/faq-about-accesskey-pairs-when-you-access-oss-or-oss-hdfs#task-2276982)
        

### **Deploy JindoSDK by using a configuration file other than the configuration file of Hadoop**

When you use non-Hadoop components, such as JindoFuse or Jindo CLI, JindoSDK accesses the directory in which the environment variable `JINDOSDK_CONF_DIR` is located to read configuration files.

#### **Configuration file**

Use the configuration file in the .ini format. In this example, the name of the configuration file after compilation is `jindosdk.cfg`. The following code shows the configuration items in the configuration file:

```
[common]
logger.dir = /tmp/jindosdk-log

[jindosdk]
# The endpoint of the created OSS bucket. For example, if the OSS bucket is created in the China (Hangzhou) region, the endpoint is oss-cn-hangzhou.aliyuncs.com. 
# The endpoint of the created OSS-HDFS bucket. For example, if the OSS-HDFS bucket is created in the China (Hangzhou) region, the endpoint is cn-hangzhou.oss-dls.aliyuncs.com. 
fs.oss.endpoint = <your_Endpoint>
# The AccessKey ID and AccessKey secret that you want to use to access OSS. An Alibaba Cloud account has the permissions to call all API operations. If the AccessKey pair of your Alibaba Cloud account is leaked, your data may be exposed to high security risks. We recommend that you use a RAM user to call API operations or perform routine O&M. To create a RAM user, log on to the Resource Access Management (RAM) console. 
fs.oss.accessKeyId = <your_AccessKey_id>
fs.oss.accessKeySecret = <your_AccessKey_secret> 
```

#### **Access OSS or OSS-HDFS without a password**

Before you access OSS or OSS-HDFS without a password, make sure that you use an ECS instance to which the required RAM role is assigned. For more information, see [Use instance RAM roles to control access to resources](/help/en/ecs/user-guide/attach-an-instance-ram-role-to-an-ecs-instance#concept-v3v-zct-xdb).

Sample code:

```
[common]
logger.dir = /tmp/jindosdk-log

[jindosdk]
# The endpoint of the created OSS bucket. For example, if the OSS bucket is created in the China (Hangzhou) region, the endpoint is oss-cn-hangzhou.aliyuncs.com. 
# The endpoint of the created OSS-HDFS bucket. For example, if the OSS-HDFS bucket is created in the China (Hangzhou) region, the endpoint is cn-hangzhou.oss-dls.aliyuncs.com. 
fs.oss.endpoint = <your_Endpoint>
fs.oss.provider.endpoint = ECS_ROLE
fs.oss.provider.format = JSON
```
