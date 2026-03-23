If you cannot connect to a Tair or Redis Open-Source Edition instance after you create the instance or during the use of the instance, you can run the PING command to check the connection between an Elastic Compute Service (ECS) instance and the Tair instance.

## Procedure

1.  Obtain the endpoint used to connect to the Tair instance. For more information, see [View endpoints](/help/en/redis/user-guide/view-endpoints#concept-apt-fkl-5gb).
    
2.  Log on to the ECS instance on which your client is deployed and run the PING command in the CLI of the ECS instance.
    
    If the endpoint used to connect to the Tair instance is `r-bp1zx****.redis.rds.aliyuncs.com`, you can run the following PING command:
    
    ```
    ping r-bp1zx****.redis.rds.aliyuncs.com
    ```
    
    **Note**
    
    You can run this command in both Windows and Linux operating systems.
    
3.  View the test results.
    
    -   In Windows, the system returns the test results after the PING command is run four times.
        
        **Note**
        
        To continuously test connectivity, run the `ping <host> -t` command.
        
    -   The Linux system continuously sends PING messages while running the PING command. You can press Ctrl+C to stop running the command and collect statistics, as shown in the following figure.
        
        Figure 2. Run the PING command on a Linux server ![在Linux系统中ping阿里云Redis](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9417293761/p38973.png)
        

## Result analysis

-   If all responses indicate successful connections, the connection is normal.
    
-   If no successful responses are returned, the connection is abnormal. The following items describe common causes:
    
    -   The domain name fails to be resolved. For more information, see [How do I troubleshoot connection issues caused by failed DNS resolution?](/help/en/redis/support/troubleshoot-connection-issues-caused-by-failed-dns-resolution#concept-bkb-qbn-qgb)
        
    -   Abnormal behavior on the ECS instance triggers a security policy that disables ECS. Check the ECS instance and configure precise outbound rules for a security group. For example, you can define that the ECS instance can only connect to the IP address and port (6379 in this example) of the Tair instance. For more information, see [Add a security group rule](/help/en/ecs/user-guide/add-a-security-group-rule#concept-sm5-2wz-xdb).
        
    -   Your client cannot connect to the Tair instance due to the network firewall settings of the client. Check the settings.
