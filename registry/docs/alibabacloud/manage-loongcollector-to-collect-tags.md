Tags are fields in Simple Log Service that identify data, such as source IP addresses and file paths. LoongCollector automatically adds tags when it collects data. This topic describes how to add, delete, and rename these tags.

## **Limits**

-   This feature is supported only in LoongCollector 3.0.10 and later. If you use Logtail or an earlier version of LoongCollector, upgrade to the latest version of LoongCollector.
    
-   This feature modifies the names and storage locations of tags. If your log consumption process depends on the modified tag fields, compatibility issues may occur.
    

## **Tag classification**

A tag field is similar to a field index and contains a key and a value. For example, in `__tag__:__inode__:263554`, `__tag__:__inode__` is the tag name (key), and `263554` is the tag value.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3754879471/p964395.png)

Tags are classified into two main types based on their source:

-   Agent-related: These tags are related to the collection agent itself and do not depend on plugins. Examples include IP addresses and hostnames.
    
-   Input plugin-related: These tags depend on input plugins. The plugins provide and enrich the logs with relevant information, such as file inodes, read offsets, pod names, namespaces, and image names.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6150754671/CAEQTBiBgICnwar.yhkiIGMzYWE3ZGY1OTBkMDQyNWZhNTI5YzA0MjZhYWM3N2Y55229502_20250529114634.693.svg)

## **Billing**

Tag fields are not charged. However, fees are incurred if you set them as index fields. For more information about billing standards, see [Billing](/help/en/sls/create-indexes#8c34a34b63r8m). For more information about how to set and delete field indexes, see [Create an index](/help/en/sls/create-indexes#9d1f75fc6b2c4).

## **Create or modify a tag name**

LoongCollector standardizes tags and provides a tag processing feature. You can configure advanced parameters to add, delete, and rename tags.

### **Agent-related tags**

These tags do not depend on any input plugins and are global parameters. You can add configuration parameters when you create or modify a collection configuration. This topic uses modifying a collection configuration as an example. For more information about how to create a collection configuration, see [Create a collection configuration](/help/en/sls/manage-logtail-configurations-for-log-collection#section-gmp-lm1-ry).

1.  Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com). In the **Projects** section, click the one you want.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0052190171/p768895.png)
    
2.  Find your logstore, and select **Data Collection** > **Logtail Configurations** > **Add Logtail Configuration**. Click **Integrate Now**. In this example, **Regular Expression - Text Log** is used, which means text logs will be parsed using regular expression matching.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0476949471/p944600.png)
    
3.  In the **Logtail Configuration** list, click the target Logtail configuration.
    
4.  On the **Logtail Configuration** page, click **Edit**.
    
5.  In the Global Configurations section, click **Other Global Configurations**. Click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3754879471/p963388.png) next to Advanced Parameters to configure agent-related tags.
    
    ```
    {
      "PipelineMetaTagKey": {
        "HOST_NAME": "sourceName",
        "AGENT_TAG": "__default__",
        "HOST_ID": "__default__",
        "CLOUD_PROVIDER": "__default__"
      }
    }
    ```
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3754879471/p963663.png)
    
    **Parameter**
    
    **Type**
    
    **Required**
    
    **Default**
    
    **Example**
    
    **Description**
    
    PipelineMetaTagKey
    
    object
    
    No
    
    empty
    
    {"HOST\_NAME":"\_\_hostname\_\_"}
    
    The key is the tag parameter name, and the value is the tag's field name in the log. If the value is \_\_default\_\_, the default value is used. If the value is an empty string, the tag is deleted. The configurable tags are as follows:
    
    -   HOST\_NAME: The hostname. Added by default. The default value is "\_\_hostname\_\_".
        
    -   AGENT\_TAG: The custom identifier. Added by default. The default value is "\_\_user\_defined\_id\_\_". This parameter applies only to [machine groups with custom identifiers](/help/en/sls/machine-group-overview#1e3db37e72sfw) and not to [machine groups with IP addresses](/help/en/sls/machine-group-overview#9f5d50bd99um0).
        
    -   HOST\_ID: The host ID. Not added by default. The default value is "\_\_host\_id\_\_".
        
    -   CLOUD\_PROVIDER: The cloud provider. Not added by default. The default value is "\_\_cloud\_provider\_\_".
        
    

### **Input plugin-related tags**

These tags are closely related to input plugins and are part of the input plugin configuration. You can set them using the advanced parameters of the input configuration. You can add configuration parameters when you create or modify a collection configuration. This topic uses modifying a collection configuration as an example. For more information about how to create a collection configuration, see [Create a collection configuration](/help/en/sls/manage-logtail-configurations-for-log-collection#section-gmp-lm1-ry).

**Important**

Currently, this feature applies only to the file collection and the new standard output collection plugins.

1.  Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com). In the **Projects** section, click the one you want.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0052190171/p768895.png)
    
2.  Find your logstore, and select **Data Collection** > **Logtail Configurations** > **Add Logtail Configuration**. Click **Integrate Now**. In this example, **Regular Expression - Text Log** is used, which means text logs will be parsed using regular expression matching.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0476949471/p944600.png)
    
3.  In the **Logtail Configuration** list, click the target Logtail configuration.
    
4.  On the **Logtail Configuration** page, click **Edit**.
    
5.  In the Input Configurations section, click **Other Input Configurations**. Click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3754879471/p963388.png) next to Advanced Parameters to configure input plugin-related tags.
    
    **Important**
    
    -   If you set `FileOffsetKey` in the input configuration, the **Auto Generate Index** feature of the collection configuration sets this tag field (`__file_offset__`) as an index field. For more information about billing, see [Billing](/help/en/sls/create-indexes#8c34a34b63r8m). If you do not need to create an index for this field, you can delete the index but keep the tag field. For more information, see [Update an index](/help/en/sls/create-indexes#91cae4f49d883).
        
    -   This tag is not displayed at the top of the query analysis page. It has unique properties and features, and its name is `__file_offset__`. The following figure shows an example:
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3754879471/p964499.png)
        
    
    ```
    {
      "Tags": {
        "FileInodeTagKey": "__default__",
        "FilePathTagKey": "__default__"
      },
      "FileOffsetKey":"__default__"
    }
    ```
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3754879471/p963827.png)
    
    **Parameter**
    
    **Type**
    
    **Required**
    
    **Default**
    
    **Example**
    
    **Description**
    
    Tags
    
    object
    
    No
    
    empty
    
    {"FileInodeTagKey":"\_\_inode\_\_"}
    
    The key is the tag parameter name, and the value is the tag's field name in the log. If the value is \_\_default\_\_, the default value is used. If the value is an empty string, the tag is deleted. The configurable tags are as follows:
    
    -   FileInodeTagKey: The file inode. Not added by default. The default value is "\_\_inode\_\_".
        
    -   FilePathTagKey: The file path. Added by default. The default value is "\_\_path\_\_".
        
    
    The following parameters are valid only when the EnableContainerDiscovery parameter is set to true.
    
    -   K8sNamespaceTagKey: The namespace of the container where the file is located. Added by default. The default value is "\_namespace\_".
        
    -   K8sPodNameTagKey: The name of the pod where the file is located. Added by default. The default value is "\_pod\_name\_".
        
    -   K8sPodUidTagKey: The UID of the pod where the file is located. Added by default. The default value is "\_pod\_uid\_".
        
    -   ContainerNameTagKey: The name of the container where the file is located. Added by default. The default value is "\_container\_name\_".
        
    -   ContainerIpTagKey: The IP address of the container where the file is located. Added by default. The default value is "\_container\_ip\_".
        
    -   ContainerImageNameTagKey: The image of the container where the file is located. Added by default. The default value is "\_image\_name\_".
        
    
    FileOffsetKey
    
    string
    
    No
    
    empty
    
    \_\_file\_offset\_\_
    
    The tag for the log's position in the file. Not added by default. The default value is \_\_file\_offset\_\_. If the value is \_\_default\_\_, the default value is used. If the value is an empty string, the tag is deleted.
    
    **Important**
    
    If the EnableLogPositionMeta parameter exists at the same time as the Tags.FileInodeTagKey or FileOffsetKey parameter, the EnableLogPositionMeta parameter is ignored.
    

## **Delete a tag**

To delete a tag, set its value to an empty string in the advanced parameter configuration.

In the following example, the value of `AGENT_TAG` is set to an empty string, so the tag is not displayed. For more information, see [Create or modify a tag name](#9dd675e2dfb1l).

```
{
  "PipelineMetaTagKey": {
    "HOST_NAME": "sourceName",
    "AGENT_TAG": "",
    "HOST_ID": "__default__",
    "CLOUD_PROVIDER": "__default__"
  }
}
```

## **View tags**

1.  In the Projects section, click the one you want.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0052190171/p768895.png)
    
2.  To the right of the target Logstore, click the ![图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6892268171/p794555.png) icon and select **Search & Analysis** to view the logs of the current Logstore.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6450708171/p794556.png)
    
3.  As shown in the following figure, the tag fields are displayed in the top row of the log page.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3754879471/p963865.png)
    
    -   [Agent-related tags](#b67ad116b43k8)
        
        -   \_\_tag\_\_:sourceName: The tag key is set to `PipelineMetaTagKey.HOST_NAME`. The default value is `__tag__:__hostname__`. In this example, the value is set to `__tag__:sourceName`, which represents the source hostname.
            
        -   `__tag__:__host_id__`: The tag key is set to `PipelineMetaTagKey.HOST_ID`. The default value `__host_id__` is used for this parameter.
            
        -   `__tag__:__cloud_provider__`: The tag key is set to `PipelineMetaTagKey.CLOUD_PROVIDER`. The default value `__cloud_provider__` is used for this parameter.
            
        -   `__tag__:__user_defined_id__`: The tag key is set to `AGENT_TAG`. This parameter applies only to [machine groups with custom identifiers](/help/en/sls/machine-group-overview#1e3db37e72sfw) and not to [machine groups with IP addresses](/help/en/sls/machine-group-overview#9f5d50bd99um0).
            
    -   [Input plugin-related tags](#62a52326a4grj)
        
        -   `__tag__:__inode__`: The tag key is set to `Tags.FileInodeTagKey`. The default value `__inode__` is used for this parameter.
            
        -   `__tag__:__path__`: The tag key is set to `Tags.FilePathTagKey`. The default value `__path__` is used for this parameter.
            
        -   `__file_offset__`: The tag key is set to `FileOffsetKey`. The default value `__file_offset__` is used for this parameter.
            
            **Important**
            
            -   If you set `FileOffsetKey` in the input configuration, the **Auto Generate Index** feature of the collection configuration sets this tag field (`__file_offset__`) as an index field. For more information about billing, see [Billing](/help/en/sls/create-indexes#8c34a34b63r8m). If you do not need to create an index for this field, you can delete the index but keep the tag field. For more information, see [Update an index](/help/en/sls/create-indexes#91cae4f49d883).
                
            -   This tag is not displayed at the top of the query analysis page. It has unique properties and features, and its name is `__file_offset__`. The following figure shows an example:
                
                ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3754879471/p964499.png)
                
            

## **Modify a tag value**

**Important**

Currently, this feature applies only to the file collection and the new standard output collection plugins.

You can use the Structured Process Language (SPL) processing plugin to manage tag fields and modify tag values. When you use SPL to process tag fields, follow these rules:

1.  SPL uses the `__tag__:` prefix to identify tags and automatically adds this prefix to all tag fields during processing. Therefore, when you write an SPL statement, make sure that the field name includes this prefix to correctly reference tag-related data.
    
2.  In the SPL output, all fields with the tag prefix are identified as tags. You can use this method to add tags.
    

This topic describes how to [add an SPL statement when you modify a collection configuration](/help/en/sls/use-logtail-spl-to-parse-logs#f43192fd46cl4), using `__tag__ :sourceName` as an example. To query logs more easily, you can change the value to user\_module in the log collection configuration to distinguish different logs by application name. For more information about how to add an SPL statement when you create a collection configuration, see [Add an SPL statement when you create a collection configuration](/help/en/sls/use-logtail-spl-to-parse-logs#b365031bf8ar7).

1.  In the Projects section, click the one you want.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0052190171/p768895.png)
    
2.  On the **Log Storage** > **Logstores** tab, click the **\>** icon next to the logstore you want, and then choose **Data Collection** > **Logtail Configurations**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1304240271/p786647.png)
    
3.  In the **Logtail Configuration** list, find the required Logtail configuration and click **Manage Logtail Configuration** in the **Actions** column.
    
4.  Click **Edit** at the top of the page. In the **Processing Configurations** section at the bottom of the page, set **Processing Method** in **Processing Configurations** to **SPL**, and then click **Save**.
    
    Set the SPL statement to the following: `* | extend "__tag__:sourceName"='user_module'`
    
5.  To the right of the target Logstore, click the ![图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6892268171/p794555.png) icon and select **Search & Analysis** to view the logs of the current Logstore.
    
    The value of the `__tag__:sourceName` field is `user_module`.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3754879471/p964139.png)
    

## **References**

You can set a normal index field as a tag field. Tag fields can be shown or hidden. For more information, see [Tag fields](/help/en/sls/quick-analysis#f2a5d3c0aekmo).
