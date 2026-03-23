You can export a list of instances from the Tair (Redis OSS-compatible) console to easily manage your instance resources in the cloud. This feature allows you to view details such as the memory usage of all instances in the current region.

## Procedure

1.  Log on to the console and go to the [Instances](https://kvstore.console.alibabacloud.com/Redis/instance/cn-hangzhou) page. In the top navigation bar, select the region in which the instance that you want to manage resides.
    
2.  Select the instances that you want to export.
    
    ### **Export specific instances**
    
    On the **Instances** page, select the instances that you want to export.
    
    ![导出部分实例](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9918819071/p762432.png)
    
    ### Export instances on the current page
    
    In the upper-left corner of the **Instances** page, select all instances on the current page.
    
    ![导出当前页实例](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9918819071/p762435.png)
    
    ### **Export all instances**
    
    In the lower-left corner of the **Instances** page, select the checkbox next to the ![选择全部实例图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8918819071/p762441.png) icon.
    
    ![导出全部实例](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9918819071/p762438.png)
    
3.  In the upper-right corner of the **Instances** page, click the ![导出](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2669059561/p207222.png) icon.
    
4.  In the dialog box that appears, select required parameters.
    
5.  Click **OK**.
    
    The instance information is exported to a CSV file that is automatically downloaded. You can use a text editor to view this file.
    

## **Related API operations**

**API operation**

**Description**

[DescribeInstances](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-describeinstances-redis)

Queries the information about instances.

[DescribeHistoryMonitorValues](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-describehistorymonitorvalues-redis)

Queries the performance monitoring information of an instance.

[DescribeDBInstanceNetInfo](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-describedbinstancenetinfo-redis)

Queries the network information of an instance.
