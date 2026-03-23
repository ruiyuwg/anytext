This topic describes how to use an open-source Hadoop Distributed File System (HDFS) client to access LindormDFS.

## Prerequisites

-   A Java environment is installed. The JDK version must be 1.7 or later.
    
-   The IP address of the client is added to the Lindorm whitelist. For more information, see [Set whitelists](/help/en/lindorm/getting-started/configure-a-whitelist#concept-2562951).
    

## **Precautions**

If your application is deployed on an ECS instance, the Lindorm instance and the ECS instance must meet the following conditions to ensure network connectivity.

-   They are in the same region. Use the same availability zone to reduce network latency.
    
-   They use the same virtual private cloud (VPC).
    

## Download the client

Download the Hadoop 2.7.3 software development kit (SDK), `hadoop-2.7.3.tar.gz`, from the [Apache official website](https://hadoop.apache.org/release/2.7.3.html).

## Configure Hadoop

1.  Run the following command to decompress the SDK package.
    
    ```
    tar -zxvf hadoop-2.7.3.tar.gz
    ```
    
2.  Add the Hadoop environment variable.
    
    ```
    export HADOOP_HOME=/${Hadoop_installation_folder}/hadoop-2.7.3
    ```
    
3.  Run the following command to change to the `hadoop` directory.
    
    ```
    cd $HADOOP_HOME
    ```
    
4.  Add the `JAVA_HOME` environment variable to the `hadoop-env.sh` file in the `etc/hadoop/` directory. This example assumes Java is installed in `/opt/install/java`.
    
    ```
    # set to the root of your Java installation
    export JAVA_HOME=/opt/install/java
    ```
    
5.  Modify the `etc/hadoop/hdfs-site.xml` file. The content to modify in the `hdfs-site.xml` file is as follows, where you must replace **Instance ID** with your actual instance ID.
    
    ```
    <configuration>
      <property>
            <name>dfs.nameservices</name>
            <value>${Instance ID}</value>
        </property>
        <property>
           <name>dfs.client.failover.proxy.provider.${Instance ID}</name>
           <value>org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider</value>
        </property>
        <property>
           <name>dfs.ha.automatic-failover.enabled</name>
           <value>true</value>
        </property>
        <property>
           <name>dfs.ha.namenodes.${Instance ID}</name>
           <value>nn1,nn2</value>
        </property>
         <property>
           <name>dfs.namenode.rpc-address.${Instance ID}.nn1</name>
           <value>${Instance ID}-master1-001.lindorm.rds.aliyuncs.com:8020</value>
        </property>
        <property>
           <name>dfs.namenode.rpc-address.${Instance ID}.nn2</name>
           <value>${Instance ID}-master2-001.lindorm.rds.aliyuncs.com:8020</value>
        </property>
    </configuration>
    ```
    

**Note**

-   You can automatically generate the configuration file in the console. For more information, see [Automatically generate a configuration file](#f0729834ccs7h).
    
-   The preceding example shows the configuration for a single instance. To configure multiple instances, copy the entire <property> block for each additional instance. In each block, replace `${Instance ID}` with the ID of the corresponding instance. Then, paste all `<property>` blocks within the `<configuration>` element.
    

## Examples of common operations

-   Upload a local file.
    
    -   Create a folder.
        
    
    ```
    $HADOOP_HOME/bin/hadoop fs -mkdir hdfs://${instanceID}/test
    ```
    
    -   Create a file and upload it to LindormDFS.
        
    
    ```
    echo "test" > test.log
    $HADOOP_HOME/bin/hadoop fs -put test.log hdfs://${Instance ID}/test
    ```
    
-   View the uploaded file.
    
    ```
     $HADOOP_HOME/bin/hadoop fs -ls hdfs://${instance_id}/test
    ```
    
-   Download the file to your local machine.
    
    ```
    $HADOOP_HOME/bin/hadoop fs -get hdfs://${Instance ID}/test/test.log
    ```
    
    **Note**
    
    Replace \`${Instance ID}\` with your instance ID.
    

## **Automatically generate a configuration file**

1.  Log on to the [Lindorm console](https://lindorm.console.alibabacloud.com/cn-hangzhou/clusterhou/cluster).
    
2.  In the upper-left corner of the page, select the region where the instance is deployed.
    
3.  On the **Instances** page, click the ID of the target instance or click **View Instance Details** in the **Actions** column for the instance.
    
4.  In the left navigation pane, click **Database Connections**.
    
5.  On the **Database Connections** page, click the **LindormDFS** tab.
    
6.  Click **Activate Now**.
    
7.  After activating Underlying File Access, click **Generate Configuration Items** to generate the hdfs-site and core-site configurations.
