This topic describes how to use HDFS Filesystem in USErspace (FUSE) to access LindormDFS.

## Prepare the runtime environment

-   Install the JDK and configure the JAVA\_HOME variable. Then, run the `$JAVA_HOME/bin/java -version` command to check the JDK version.
    
    -   CentOS/RedHat
        
        ```
        sudo yum install java-1.8.0-openjdk-devel -y
        ```
        
    -   Ubuntu
        
        ```
        sudo apt-get update
        sudo apt-get install openjdk-8-jdk -y
        ```
        
-   Install the FUSE library.
    
    -   CentOS/RedHat
        
        ```
        sudo yum install fuse fuse-devel fuse-libs -y
        ```
        
    -   Ubuntu
        
        ```
        sudo apt-get update
        sudo apt-get install fuse libfuse-dev -y
        ```
        

## Download the FUSE client

You can download the FUSE client that is developed based on Apache Hadoop V2.7.7 from the [download link](https://ldfs-fuse-deploy.oss-cn-hangzhou.aliyuncs.com/ldfs-fuse-2.7.tar.gz).

## Install the FUSE client

1.  Decompress the downloaded FUSE client package and then go to the path to which the client files are decompressed.
    
    ```
    tar -zxf ldfs-fuse-2.7.tar.gz
    cd ldfs-fuse-2.7
    ```
    
2.  Modify the `etc/hadoop/hdfs-site.xml` configuration file. The following sample file shows how to modify the `hdfs-site.xml` file. You must replace `${Instance ID}` in the file with the ID of your Lindorm instance.
    
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
    
3.  Create a directory to which you want to mount the FUSE disk and grant users permissions to access the directory.
    
    ```
    sudo mkdir /ldfs_fuse
    sudo chown $(whoami):$(whoami) /ldfs_fuse
    ```
    
4.  Mount the FUSE disk to the created directory.
    
    ```
    /bin/bash bin/mount_to.sh /ldfs_fuse
    ```
    
5.  View the mounted FUSE disk.
    
    ```
    df -h
    ```
    
6.  (Optional) Unmount the FUSE disk.
    
    ```
    fusermount -u /ldfs_fuse
    ```
    

## Examples of common operations

-   Run the following command to write data to the test file:`echo 'test' > /ldfs_fuse/test`.
    
-   Run the following command to read data from the test file: `cat /ldfs_fuse/test`
    
-   Run the following command to delete the test file: `rm -f /ldfs_fuse/test`
    

**Important**

The data disk to which the FUSE client is mounted supports only sequential write operations. The data disk does not support random write operations.

## Related operations

By default, three replicas are available for all files on the FUSE disk. You can change the default number of replicas in the `etc/hadoop/hdfs-site.xml` configuration file. For example, in the following code, the number of replicas is set to 2.

```
<property>
   <name>dfs.replication</name>
   <value>2</value>
</property>
```

**Note**

To make the configuration take effect, mount the FUSE disk again.
