You can apply for a public endpoint to connect to a Tair (or Redis Open-Source Edition) instance over the Internet. This is useful when you want to test or manage an instance from an on-premises device, or when you need to connect a client deployed in a different virtual private cloud (VPC) to the instance.

## Before you begin

Review the following considerations before you use a public endpoint:

-   **No traffic fees** -- You are not charged traffic fees for Internet connections to your instance.
    
-   **Performance and security trade-offs** -- Connecting over the Internet increases network latency, compromises service performance, and introduces security risks. For lower latency and higher security, connect through a [VPC](/help/en/vpc/what-is-vpc#concept-kbk-cpz-ndb) instead.
    
    **Note**
    
    The Service Level Agreement (SLA) does not apply to client exceptions caused by unstable Internet connections.
    
-   **Unsupported configurations** -- Public endpoints are not supported for cloud-native cluster instances in direct connection mode. Connect to these instances over VPCs.
    

## Procedure

1.  Get the public IP address of your client
    
    Use one of the following commands to retrieve the public IP address of the device that will connect to the instance:
    
    -   **Linux**: Open a terminal and run:
        
        ```
        curl ifconfig.me
        ```
        
    -   **Windows**: Open Command Prompt and run:
        
        ```
        curl ip.me
        ```
        
    -   **macOS**: Open Terminal and run:
        
        ```
        curl ifconfig.me
        ```
        
    
2.  Add the IP address to a whitelist
    
    **Note**
    
    If your client uses dynamic IP addresses, you can add a CIDR block to the whitelist to prevent access failures caused by IP address changes. However, this may compromise the security of the instance. Proceed with caution.
    
    1.  Log on to the [Tair console](https://kvstore.console.alibabacloud.com/Redis/instance/cn-hangzhou).
        
    2.  On the **Whitelist Settings** page of the instance, add the public IP address to a whitelist.
        
    
    For detailed instructions, see [Configure whitelists](/help/en/redis/user-guide/configure-whitelists#concept-lmv-qhf-vdb).
    
3.  Apply for a public endpoint
    
    In the **Connection Information** section of the **Instance Information** page, apply for a public endpoint for the instance.
    
    For detailed instructions, see [Apply for a public endpoint for an instance](/help/en/redis/user-guide/apply-for-a-public-endpoint-for-an-apsaradb-for-redis-instance#concept-1096127).
    
4.  Connect to the instance
    
    **Note**
    
    When you connect through a public endpoint, you must specify the database account and the corresponding password. For more information, see [Connect to an instance](/help/en/redis/user-guide/logon-methods#task-2232441).
    
    Use the redis-cli tool or a client program to connect to the instance through the public endpoint:
    
    -   [Use redis-cli to connect to an instance](/help/en/redis/user-guide/use-redis-cli-to-connect-to-an-apsaradb-for-redis-instance#concept-tzm-xdd-5db)
        
    -   [Use a client to connect to an instance](/help/en/redis/user-guide/use-a-client-to-connect-to-an-apsaradb-for-redis-instance#concept-dys-yvb-5db)
        
    

## FAQ

-   **Why am I still unable to connect after applying for a public endpoint?**
    
    It takes some time for the public IP address to take effect. Wait 5 minutes and try again.
    
    If the connection still fails, you can try connecting directly to the public IP address of the instance for troubleshooting purposes. This method is not recommended for regular use in business. Run the following command to obtain the public IP address:
    
    ```
    PING r-bp1cm7j2k6knbr****pd.redis.rds.aliyuncs.com
    ```
    
    If connecting by IP address succeeds, the issue is caused by failed DNS resolution on the client side. For more information, see [How do I troubleshoot connection issues caused by failed DNS resolution?](/help/en/redis/support/troubleshoot-connection-issues-caused-by-failed-dns-resolution)
    

## References

-   [Common errors and troubleshooting](/help/en/redis/support/common-errors-and-troubleshooting#task-2277868)
    
-   [How do I troubleshoot connection issues in Tair?](/help/en/redis/support/how-do-i-troubleshoot-connection-issues-in-apsaradb-for-redis#concept-gm5-rgv-fgb)
