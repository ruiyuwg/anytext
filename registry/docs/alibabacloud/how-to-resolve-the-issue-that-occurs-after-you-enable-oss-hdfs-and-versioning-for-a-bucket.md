If OSS-HDFS and versioning are enabled for a bucket, OSS-HDFS may be unavailable. To ensure the stability of OSS-HDFS, you need to suspend versioning and create a lifecycle rule to clear delete markers.

## **Suspend versioning**

You can use the OSS console, OSS SDKs, or ossutil to suspend versioning. For more information, see [Suspend versioning](/help/en/oss/user-guide/overview-78/#section-7ge-cll-8zc).

## **Create a lifecycle rule to periodically clear delete markers**

The following figure shows how to create a lifecycle rule to periodically clear delete markers. For more information, see [Configuration examples](/help/en/oss/user-guide/configuration-examples#p-kln-t95-230).

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8118893961/p715927.png)
