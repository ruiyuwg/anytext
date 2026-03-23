By default, Tair (Enterprise Edition) instances use the asynchronous mode. In scenarios where data durability is critical, you can change the synchronization mode to semi-synchronous in the console to improve data security. This mode increases write latency, which can approximately range from hundreds of microseconds (μs) to several milliseconds (ms). This mode is suitable for scenarios where strong consistency is required and a slight increase in write latency is acceptable.

## Prerequisites

The instance meets the following requirements:

-   The instance is a DRAM-based instance that is compatible with Redis 6.0 and later and runs minor version 24.8.0.0 or later.
    
-   The instance is an ESSD/SSD-based instance whose minor version is 2.5.2 or later.
    

**Note**

The synchronization mode cannot be changed for instances of earlier versions. For information about how to update the minor version of an instance, see [Upgrade minor and proxy versions](/help/en/redis/user-guide/update-the-minor-version#concept-itn-f44-tdb).

## Synchronization mode overview

Open source Redis uses the asynchronous replication mechanism for data synchronization between the master and replica nodes. In this mode, after the master node processes a request and returns the response to the client, the system synchronizes data from the master node to the replica node. In this case, if a master-replica switchover is triggered by an instance failure, data inconsistency may occur between the master and replica nodes.

In semi-synchronous mode, after the master node processes a request, the system synchronizes logs from the master node to the replica node. The master node does not respond to the client until the master node receives a success response from the replica node. This way, the Recovery Point Objective (RPO) of the switchover can be 0, which indicates that no data is lost in the switchover.

The following figure shows how these two modes work.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0389445671/CAEQUBiBgICi8YS02BkiIGYzNzE4OWU5NmEwYTRiZmU5NTdlZTgxMjJkNjk4Mjlj4753550_20241111151254.794.svg)

## Procedure

1.  Log on to the console and go to the [Instances](https://kvstore.console.alibabacloud.com/Redis/instance/cn-hangzhou) page. In the top navigation bar, select the region in which the instance that you want to manage resides. Then, find the instance and click the instance ID.
    
2.  In the upper-right corner of the **Basic Information** section, click **Change Synchronization Mode**.
    
3.  In the panel that appears, configure the parameters that are described in the following table.
    
    **Parameter**
    
    **Description**
    
    **Synchronization Mode**
    
    Default value: Asynchronous. Valid values:
    
    -   **Semi-Synchronous**: The master node responds to the client only after logs are received by the replica node.
        
        **Important**
        
        If the replica node is unavailable or the communication between the master and replica nodes is abnormal, semi-synchronous replication degrades to asynchronous replication.
        
    -   **Asynchronous**: The asynchronous replication mechanism is used.
        
    
    **Degradation Threshold**
    
    This parameter is available only if you set Synchronization Mode to **Semi-Synchronous**. Unit: ms. Valid values: 10 to 60000. Default value: 500.
    
    If the latency of data synchronization between the master and replica nodes exceeds the threshold, the **synchronization mode** is automatically changed to **Asynchronous**. After the latency decreases to a value lower than the threshold, the **synchronization mode** is automatically changed back to **Semi-Synchronous**.
    
4.  Click **OK**.
