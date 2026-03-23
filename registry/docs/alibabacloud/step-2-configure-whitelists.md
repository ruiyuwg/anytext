By default, Tair (Redis OSS-compatible) blocks access from all IP addresses to ensure the security and stability of instances. Before you use a Tair (Redis OSS-compatible) instance, you must add IP addresses or CIDR blocks that are used to access the instance to the whitelists of the instance.

## Procedure

In this example, the client resides on an Elastic Compute Service (ECS) instance, and the ECS instance is deployed in the same virtual private cloud (VPC) as the Tair (Redis OSS-compatible) instance.

1.  Log on to the console and go to the [Instances](https://kvstore.console.alibabacloud.com/Redis/instance/cn-hangzhou) page. In the top navigation bar, select the region in which the instance that you want to manage resides. Then, find the instance and click the instance ID.
    
2.  In the left-side navigation pane, click **Whitelist Settings**.
    
3.  Find the **default** whitelist and click **Modify** in the Actions column.
    
4.  If you set **Method to Add IP Address** to **Import ECS Internal IP Address**, the panel displays the private IP addresses of ECS instances that are deployed in the same region as the Tair instance.
    
    Move the pointer over an IP address to view the ID and name of the ECS instance to which the IP address is assigned.
    
5.  Select the required IP addresses and move them to the right-side section.
    
6.  Click **OK**.
    
    Next, you can connect to the Tair (Redis OSS-compatible) instance from the client. For more information, see [Step 3: Connect to an instance](/help/en/redis/getting-started/step-3-connect-to-an-apsaradb-for-redis-instance).
    

## References

If you want to access a Tair instance from an on-premises device or if your ECS instance is not in the same VPC as the Tair instance, you can connect to the Tair instance over the Internet. However, this is not recommended. You can copy the IP address of the client to a whitelist of the Tair instance. For more information, see [Configure whitelists](/help/en/redis/user-guide/configure-whitelists#00f0b162e5gt4).
