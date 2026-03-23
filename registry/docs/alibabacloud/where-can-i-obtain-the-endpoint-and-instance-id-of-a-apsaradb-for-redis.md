When you use a client to connect to a Tair (Redis OSS-compatible) instance, you must enter the endpoint (`Hostname`), port number (`Port`), and ID of the instance. You can obtain the preceding information on the Instance Information page of the Tair console.

## Procedure

Before you view the connection information, you must add the IP address of the client to a whitelist of the Tair instance. For more information, see [Configure whitelists](/help/en/redis/getting-started/step-2-configure-whitelists).

1.  Log on to the console and go to the [Instances](https://kvstore.console.alibabacloud.com/Redis/instance/cn-hangzhou) page. In the top navigation bar, select the region in which the instance that you want to manage resides. Then, find the instance and click the instance ID.
    
2.  On the **Instance Information** page, view the **instance ID** in the **Basic Information** section.
    
3.  In the **Connection Information** section, view different types of endpoints and port numbers.
    
    **Note**
    
    -   If you want to connect to the instance over the Internet, apply for a public endpoint for the instance. For more information, see [Apply for a public endpoint for an instance](/help/en/redis/user-guide/apply-for-a-public-endpoint-for-an-apsaradb-for-redis-instance#concept-1096127).
        
    -   You cannot apply for a public endpoint for a cloud-native cluster instance that runs in direct connection mode. For more information, see [View endpoints](/help/en/redis/user-guide/view-endpoints#section-zzx-nxu-swn).
        
    
    Then, you can connect to the instance. For more information, see [Use redis-cli to connect to an instance](/help/en/redis/user-guide/use-redis-cli-to-connect-to-an-apsaradb-for-redis-instance#concept-tzm-xdd-5db).
    

## Applicable scope

-   Tair (Redis OSS-compatible)
