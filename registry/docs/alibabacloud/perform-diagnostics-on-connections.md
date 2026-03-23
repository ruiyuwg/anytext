If your client fails to connect to a Tair (Redis OSS-compatible) instance, you can use the **Connection Diagnostics** feature to check whether the client IP address is added to a whitelist of the instance and handle the results with corresponding solutions.

## Procedure

1.  Log on to the console and go to the [Instances](https://kvstore.console.alibabacloud.com/Redis/instance/cn-hangzhou) page. In the top navigation bar, select the region in which the instance is deployed. Then, find the instance and click its ID.
    
2.  In the **Connection Information** section, click **Connection Diagnostics**.
    
3.  In the **Connection Diagnostics** panel, specify your client IP address. The following table describes the related scenarios and instructions.
    
    **Scenario**
    
    **Instruction**
    
    -   The client is an Elastic Compute Service (ECS) instance that resides within the same region as the Tair instance.
        
    
    The client can connect to the Tair instance over the Internet or the virtual private cloud (VPC) in which the ECS instance is deployed.
    
    1.  Set **Client Type** to **ECS Instance**.
        
    2.  Select the ID of the ECS instance.
        
        -   If the ECS instance ID is displayed in green, the ECS instance is deployed in the same VPC as the Tair instance. In this case, you can connect the ECS instance to the Tair instance over the VPC or the Internet.
            
        -   If the ECS instance ID is displayed in red, the ECS instance is not deployed in the same VPC as the Tair instance. In this case, you can connect the ECS instance to the Tair instance only over the Internet.
            
    3.  Select the endpoint of the ECS instance used to connect to the Tair instance.
        
    
    -   The client is an on-premises device.
        
    -   The client is an ECS instance that resides in a different region from the Tair instance.
        
    
    The client can connect to the Tair instance only over the Internet.
    
    1.  Set **Client Type** to **IP address**.
        
    2.  Specify the client IP address.
        
    
4.  Click **Start Diagnostics**.
    
5.  View diagnostic results
    
    -   **Check failed**: The client IP address has not been added to a whitelist of the Tair instance. You can click **Add** to add the IP address to the **default** whitelist of the Tair instance. Then, start diagnostics again.
        
        **Note**
        
        You can also click **Whitelist Settings** to manually add the IP address to a whitelist of the Tair instance on the **Whitelist Settings** page.
        
    -   **Check passed**: The IP address has been added to a whitelist of the Tair instance.
        
    

## **What to do next**

After diagnostics are complete, use the passed IP address to connect to the Tair instance from the client. For more information, see the following topics:

-   [Use a client to connect to an instance](/help/en/redis/user-guide/use-a-client-to-connect-to-an-apsaradb-for-redis-instance)
    
-   [Use redis-cli to connect to an instance](/help/en/redis/user-guide/use-redis-cli-to-connect-to-an-apsaradb-for-redis-instance)
    

## **References**

The connection diagnostics feature checks only whether the client IP address is added to a whitelist of your instance. If the client still fails to connect to your instance after the IP address passes the check, one of the following issues may occur:

-   Network exception: Run the `PING` command to check the network connection between the client and your instance. If the network connection is abnormal, check the client network environment.
    
-   Dynamic IP address: If your client has a dynamic IP address on the Internet, the connection fails. In this case, you can configure a static IP address for your client or add `0.0.0.0/0` to a whitelist of your instance to allow access from all IP addresses.
    
-   Incorrect password: Check the password of your instance. For more information, see [Connect to an instance](/help/en/redis/user-guide/logon-methods#task-2232441).
