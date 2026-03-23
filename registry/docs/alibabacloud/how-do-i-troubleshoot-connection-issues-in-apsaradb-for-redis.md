This topic describes how to troubleshoot connection issues in Tair (Redis OSS-compatible).

For more information about how to troubleshoot errors returned by clients, see [Common errors and troubleshooting](/help/en/redis/support/common-errors-and-troubleshooting#task-2277868).

## Troubleshoot issues before a connection is established

### Troubleshoot the network environment

Before you connect to a Tair or Redis Open-Source Edition instance, check the network environment of your client. The following figure shows the procedure.

Figure 1. Troubleshoot the network environment ![排查网络环境](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3886950861/p551432.jpg)

Procedure:

1.  Check the network environment of your client.
    
    -   VPC: If the client is hosted on an Elastic Compute Service (ECS) instance that resides in a virtual private cloud (VPC), make sure that the ECS instance and the Tair instance to which you want to connect reside in the same VPC.
        
        -   If the ECS instance and the Tair instance reside in the same VPC, the client can connect to the Tair instance over the VPC.
            
        -   If the ECS instance resides in a different VPC than the Tair instance, the ECS instance and the Tair instance may reside in different regions or belong to different Alibaba Cloud accounts.
            
    -   Internet.
        
2.  Obtain the endpoint that is used to connect to the Tair instance. For more information, see [View endpoints](/help/en/redis/user-guide/view-endpoints#concept-apt-fkl-5gb).
    
    Make sure that you obtain the correct endpoint for your instance. If you plan to connect to the Tair instance over the Internet but you obtain the VPC endpoint, the connection cannot be established.
    
3.  Prepare to establish a connection.
    

### Troubleshoot connection settings

Follow the instructions shown in the following figure to troubleshoot connection settings.

Figure 2. Troubleshoot connection settings ![连接配置项](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3886950861/p551433.jpg)

Procedure:

1.  Check whether the IP address or CIDR block of your client is added to a whitelist of the Tair instance. For more information, see [Configure whitelists](/help/en/redis/user-guide/configure-whitelists#concept-lmv-qhf-vdb).
    
2.  Run the `PING` command to test whether the network connection between the ECS instance and the Tair instance is normal. For more information, see [Run the PING command to check the connection between an ECS instance and a Tair instance](/help/en/redis/support/run-the-ping-command-to-check-the-connection-between-an-ecs-instance-and-an-apsaradb-for-redis-instance).
    
3.  Check whether the credentials that you use to connect to the Tair instance are valid. For more information, see [Connect to an instance](/help/en/redis/user-guide/logon-methods#task-2232441).
    
4.  If you cannot connect to the Tair instance after you troubleshoot the preceding issues, check the logs and error codes of the client. For more information, see [Common errors and troubleshooting](/help/en/redis/support/common-errors-and-troubleshooting#task-2277868).
    

## Troubleshoot connection issues during instance runtime

If connection issues occur during the runtime of the Tair instance, follow the instructions shown in the following figure for troubleshooting.

Figure 3. Troubleshoot connection issues during instance runtime ![运行期间排查流程](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3886950861/p551434.jpg)

Procedure:

1.  Check whether the Tair instance is undergoing a master-replica switchover. For more information, see [Master-replica switchovers](/help/en/redis/user-guide/master-replica-switchovers/#concept-2025502).
    
    During a master-replica switchover, it is normal for the instance to experience transient connections that last for a few seconds. The connection will automatically recover without human intervention.
    
2.  Perform [diagnostics on the instance](/help/en/redis/user-guide/create-a-diagnostic-report/#concept-2045851). For more information about how to interpret diagnostic reports, see [Analyze a diagnostic report](/help/en/redis/user-guide/analyze-a-diagnostic-report#concept-2045852).
    

## Applicable scope

-   [AsparaDB for Redis](https://www.alibabacloud.com/product/apsaradb-for-redis)
