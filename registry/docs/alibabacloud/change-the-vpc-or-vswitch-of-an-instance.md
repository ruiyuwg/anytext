Tair (Redis OSS-compatible) allows you to change the virtual private cloud (VPC) or vSwitch of an instance. For example, you can change the VPC of a Tair (Redis OSS-compatible) instance to the VPC in which an Elastic Compute Service (ECS) instance is deployed. This way, the Tair (Redis OSS-compatible) instance can communicate with the ECS instance over the internal network.

## Prerequisites

-   If the instance is a classic cluster instance that has a private endpoint allocated, release the private endpoint, change the VPC of the instance, and then re-enable the private endpoint. For more information, see [Enable the direct connection mode](/help/en/redis/user-guide/enable-the-direct-connection-mode#task-2362225).
    
    However, you cannot change the VPC of a cloud-native cluster instance in direct connection mode.
    
-   The password-free access feature is disabled for the instance. If the password-free access feature is enabled for the instance, disable the feature. For more information, see [Enable password-free access](/help/en/redis/user-guide/enable-password-free-access#concept-ttq-dst-j2b).
    
-   No Data Transmission Service (DTS) data migration tasks or synchronization tasks that involve the instance are running. If such tasks are running, an error is returned. For more information about DTS, see [What is DTS?](/help/en/dts/product-overview/what-is-dts#concept-26592-zh)
    

## Scenarios

**Operation**

**Scenario**

Change the VPC of an instance

A client is unable to communicate with an instance because the client and the instance belong to different VPCs.

For example, the ECS instance on which your workloads are running is deployed in VPC A and the Tair (Redis OSS-compatible) instance is deployed in VPC B. To connect the Tair (Redis OSS-compatible) instance to the ECS instance, you can change the VPC of the instance to VPC A.

Change the vSwitch of an instance

To manage cloud resources and IP address whitelists in a centralized manner, you can group the cloud resources based on workloads and then allocate IP addresses.

For example, you can connect cloud resources that are related to database services, such as ECS instances and Tair (Redis OSS-compatible) instances, to the same vSwitch. Then, these cloud resources are assigned IP addresses that belong to the same CIDR block.

## Impacts

-   If you change the VPC or vSwitch of an instance, a transient connection that lasts approximately 30 seconds occurs. Make sure that you perform the operation during off-peak hours and your applications can automatically reconnect to the instance.
    
-   If you change the VPC or vSwitch of an instance, the virtual IP address (VIP) of the instance is changed. If your applications are connected to the VIP of the instance, the connections are closed after the VIP is changed.
    
    **Note**
    
    After you change the VPC or vSwitch of an instance, the endpoint of the instance, such as `r-hp3bpn39cs1vu****.redis.hangzhou.rds.aliyuncs.com`, remains unchanged. We recommend that you connect your applications to instances by using endpoints.
    
-   A VIP change interrupts [Data Management (DMS)](/help/en/dms/product-overview/what-is-dms#task-1919582) for a short period of time. After the VIP is changed, the connections are resumed.
    
-   After you change the VPC or vSwitch of an instance, clear the cache on clients. Otherwise, clients may be unable to write data to the instance and can only read data from the instance.
    

## Procedure

1.  Log on to the console and go to the [Instances](https://kvstore.console.alibabacloud.com/Redis/instance/cn-hangzhou) page. In the top navigation bar, select the region in which the instance that you want to manage resides. Then, find the instance and click the instance ID.
    
2.  In the **Basic Information** section, click **Modify** next to the VPC ID.
    
    **Note**
    
    If you want to change only the vSwitch, you can click **Modify** next to the vSwitch ID.
    
3.  In the panel that appears, select the VPC and vSwitch that you want to use.
    
    **Note**
    
    If no VPC or vSwitch is available in the drop-down list, create a VPC and a vSwitch. For more information, see [Create and manage a VPC](/help/en/vpc/user-guide/create-and-manage-a-vpc#task-1012575) and [Create and manage a vSwitch](/help/en/vpc/user-guide/create-and-manage-vswitch#task-1012575).
    
4.  Click **OK**.
    
    **Warning**
    
    If you change the VPC or vSwitch of an instance, a transient connection that lasts approximately 30 seconds occurs. Make sure that you perform the operation during off-peak hours and your application can automatically reconnect to the instance.
    
5.  In the message that appears, read the content and click **OK**.
    

## Related API operations

**API operation**

**Description**

[SwitchNetwork](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-switchnetwork-redis#main-107864)

Changes the VPC or vSwitch of an instance.
