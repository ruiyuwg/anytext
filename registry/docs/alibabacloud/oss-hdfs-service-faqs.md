## What do I do if I accidentally delete a lifecycle rule configured for OSS-HDFS data after the automatic storage tiering feature is enabled?

When automatic storage tiering is enabled, OSS automatically creates a lifecycle rule to transition data to Infrequent Access (IA), Archive, or Cold Archive storage. Deleting this rule prevents automatic tiering from working correctly.

To restore the rule, disable and re-enable automatic storage tiering so OSS regenerates it:

1.  Disable automatic storage tiering:
    
    1.  Click **Configure**. ![lifecycle](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2246998661/p490807.jpg)
        
    2.  In the **Basic Settings** section of the **Automatic Storage Tiering** panel, turn off **Status** and click **OK**. ![setting](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2246998661/p490808.jpg)
        
    3.  In the message that appears, click **OK**.
        
2.  Re-enable automatic storage tiering:
    
    1.  On the **OSS-HDFS** tab, click **Configure**.
        
    2.  In the **Basic Settings** section of the **Automatic Storage Tiering** panel, turn on **Status**.
        
    3.  Click **OK**.
        

OSS regenerates the lifecycle rule to transition data to IA, Archive, or Cold Archive.

## Can I convert the storage class of Archive or Cold Archive objects to Standard or IA?

Yes. For details, see [How to use automatic storage tiering of OSS-HDFS](/help/en/oss/user-guide/enable-the-automatic-storage-tiering-feature-for-the-oss-hdfs-service).

## `JindoOssFileSystem not found` error when running an hdfs command

**Cause:** The JindoSDK path is not configured correctly.

**Fix:**

1.  Locate the JindoSDK JAR file.
    
2.  Set `JINDOSDK_HOME` and `HADOOP_CLASSPATH` to point to the JAR location. For details, see [Connect non-EMR clusters to OSS-HDFS](/help/en/oss/user-guide/connect-non-emr-clusters-to-oss-hdfs).
    

## Why does the storage capacity shown by hdfs du differ from what is displayed in the console?

**Cause:** The `hdfs du` command only calculates data written in HDFS-compatible mode. It does not count:

-   Data written in OSS mode (objects without the `.dlsdata` prefix in the bucket)
    
-   Parts from incomplete multipart uploads
    

**Resolution:**

-   If the gap is caused by data written in OSS mode, check whether this accounts for the difference.
    
-   If the gap is caused by parts from incomplete multipart uploads, delete them to avoid additional storage fees. For details, see [Delete parts](/help/en/oss/user-guide/delete-parts).
