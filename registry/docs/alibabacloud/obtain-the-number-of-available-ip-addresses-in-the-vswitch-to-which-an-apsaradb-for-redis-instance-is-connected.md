When you apply for a private endpoint for a Tair (Redis OSS-compatible) cluster instance, make sure that the vSwitch to which the cluster instance is connected has sufficient IP addresses that can be allocated. This topic describes how to query the number of IP addresses available on the vSwitch.

## Background information

When you apply for a private endpoint for a classic cluster instance, an IP address is allocated to the master node of each shard and another IP address is allocated to the private endpoint. If the vSwitch cannot provide sufficient IP addresses, the private endpoint cannot be enabled. For more information, see [Enable the direct connection mode](/help/en/redis/user-guide/enable-the-direct-connection-mode#task-2362225).

## Procedure

1.  Log on to the console and go to the [Instances](https://kvstore.console.alibabacloud.com/Redis/instance/cn-hangzhou) page. In the top navigation bar, select the region in which the instance is deployed. Then, find the instance and click its ID.
    
2.  In the **Basic Information** section, copy the vSwitch ID and click the virtual private cloud (VPC) ID.
    
    You are directed to the VPC console.
    
3.  On the details page of the VPC, click the **Resource Management** tab and then click the number corresponding to the vSwitch field.
    
4.  In the upper part of the vSwitch page, select **Instance ID** from the drop-down list, paste the copied vSwitch ID into the search box, and then click the search icon.
    
    ![搜索交换机](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8136441061/p162966.png)
    
5.  After you find the vSwitch, you can view the number of available IP addresses that can be allocated by the vSwitch.
    
    ![查看剩余IP地址数](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8136441061/p162967.png)
