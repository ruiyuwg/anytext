This topic describes how to access Object Storage Service (OSS) from Spark on MaxCompute.

## Configure an OSS endpoint

Use the public endpoint of the region in which OSS resides when you debug features. Use the internal endpoint of the region in which OSS resides when you submit a job in the production environment. For more information, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints#concept-zt4-cvy-5db).

## Configure an OSS access method

-   Access OSS by using the AccessKey ID and AccessKey secret of an account.
    
    ```
    spark.hadoop.fs.oss.accessKeyId = xxxxxx
    spark.hadoop.fs.oss.accessKeySecret = xxxxxx
    spark.hadoop.fs.oss.endpoint = oss-xxxxxx-internal.aliyuncs.com
    ```
    
-   Access OSS by using a Security Token Service (STS) token.
    
    If you access OSS by using the AccessKey ID and AccessKey secret of an account, you must configure the plaintext AccessKey ID and AccessKey secret. This incurs security risks. We recommend that you access OSS by using an STS token.
    
    1.  Go to the [RAM Quick Authorization](https://ram.console.alibabacloud.com/?spm=a2c4g.11186623.2.9.3bf06a064lrBYN#/role/authorize?request=%7B%22Requests%22:%20%7B%22request1%22:%20%7B%22RoleName%22:%20%22AliyunODPSDefaultRole%22,%20%22TemplateId%22:%20%22DefaultRole%22%7D%7D,%20%22ReturnUrl%22:%20%22https:%2F%2Fram.console.alibabacloud.com%2F%22,%20%22Service%22:%20%22ODPS%22%7D) page and click **Authorize**. Then, the MaxCompute project can access OSS resources of the current Alibaba Cloud account by using an STS token.
        
        **Note**
        
        You can authorize a MaxCompute project to access OSS resources by using this method only when the owner of the MaxCompute project is an Alibaba Cloud account that owns the OSS resources to be accessed.
        
    2.  Obtain the Alibaba Cloud Resource Name (ARN) of the role that Spark on MaxCompute assumes.
        
        1.  Log on to the [Resource Access Management (RAM) console](https://ram.console.alibabacloud.com/).
            
        2.  In the left-side navigation pane, choose Identities > **Roles**.
            
        3.  On the **Roles** page, search for AliyunODPSDefaultRole.
            
        4.  In the search result, click **AliyunODPSDefaultRole** in the Role Name column. On the page that appears, obtain the value of **ARN** in the **Basic Information** section. The value is in the `acs:ram::xxxxxxxxxxxxxxx:role/aliyunodpsdefaultrole` format.
            
    3.  Add the following content to the configurations of Spark on MaxCompute:
        
        ```
        # Configure Spark on MaxCompute to access OSS resources by using an STS token. 
        spark.hadoop.fs.oss.credentials.provider=org.apache.hadoop.fs.aliyun.oss.AliyunStsTokenCredentialsProvider
        
        # Configure the ARN of the role that Spark on MaxCompute assumes. 
        spark.hadoop.fs.oss.ststoken.roleArn=acs:ram::xxxxxxxxxxxxxxx:role/aliyunodpsdefaultrole
        
        # Configure the internal endpoint that is used to access OSS resources over a VPC. 
        spark.hadoop.fs.oss.endpoint=oss-cn-hangzhou-internal.aliyuncs.com
        ```
        

## Configure a whitelist

In most cases, Spark on MaxCompute can access OSS resources without the need to configure a whitelist.

In special cases (for example, a large amount of data is read from or written to OSS buckets), Spark on MaxCompute may fail to access OSS resources. In this case, add the following configuration:

```
spark.hadoop.odps.cupid.trusted.services.access.list=[your_bucket_name].oss-xxxxxx-internal.aliyuncs.com
```

**Note**

The configuration can be used only when you submit a job in yarn-cluster mode. You must add the configuration in the configuration file or in a command of the CLI tool.

## Use JindoSDK to access OSS

Add the `spark.hadoop.fs.AbstractFileSystem.oss.impl` and `spark.hadoop.fs.oss.impl` parameters to the SparkConf object. Sample code:

```
val conf = new SparkConf()
  .setAppName("jindo-sdk-demo")
  .set("spark.hadoop.fs.AbstractFileSystem.oss.impl", "com.aliyun.emr.fs.oss.OSS")
  .set("spark.hadoop.fs.oss.impl", "com.aliyun.emr.fs.oss.JindoOssFileSystem")
```

**Note**

You must configure the `spark.hadoop.fs.oss.impl` parameter. Otherwise, the error message "No FileSystem for scheme: oss" is returned.
