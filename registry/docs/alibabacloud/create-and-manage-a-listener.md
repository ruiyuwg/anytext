Listeners are responsible for receiving and distributing client requests. Gateway Load Balancer (GWLB) supports IP listeners, allowing you to add IP listeners for GWLB instances and modify or delete listeners as needed.

## Prerequisites

-   You have [created a GWLB instance](/help/en/slb/gateway-based-load-balancing-gwlb/user-guide/create-and-manage-gwlb-instances).
    
-   You have [created an available server group](/help/en/slb/gateway-based-load-balancing-gwlb/user-guide/create-and-manage-a-server-group).
    

## Add an IP listener

1.  Log on to the [GWLB console](https://slb.console.alibabacloud.com/gwlb/).
    
2.  In the top navigation bar, select the region where the GWLB instance is deployed.
    
3.  Use one of the following methods to open the listener configuration wizard.
    
    -   On the **Instances** page, click **Create Listener** in the **Actions** column of the target instance.
        
    -   On the **Instances** page, click the ID of the target instance. On the **Listeners** tab, click **Create IP Listener**.
        
    
4.  On the **Create IP Listener** page, configure the parameters, and then click **OK**.
    
    **Parameter**
    
    **Description**
    
    **Listener Name**
    
    Enter a name for the listener.
    
    **Server Group Resource Group**
    
    Select a [resource group](/help/en/resource-management/resource-group/product-overview/resource-group-overview) for the server group.
    
    This configuration is only applicable to Resource Access Management (RAM) users. Alibaba Cloud accounts do not need to configure this parameter.
    
    **Server Group**
    
    -   **Server:** supports adding ECS instances, Elastic Network Interfaces (ENIs), and Elastic Container Instances (ECIs) as backend servers.
        
    -   **IP:** supports adding IP addresses as backend servers.
        
    
    **Advanced Configuration**
    
    Click to expand **Advanced Configuration**.
    
    **TCP Connection Idle Timeout**
    
    Configure the TCP connection idle timeout period. If no data is transmitted during the idle timeout period, the current connection will be closed, and the GWLB instance will route new traffic to a new backend server. Existing traffic will be discarded until a new connection is established when the next request arrives.
    
    The default value is 350 seconds. You can customize the TCP connection idle timeout only when the traffic scheduling algorithm of the selected server group is 5-tuple hashing. Valid values: 60 to 6000 seconds.
    
    **Note**
    
    The connection idle timeout value for non-TCP traffic is 120 seconds and cannot be modified.
    
    **Tag**
    
    Set **Tag Key** and **Tag Value** for the listener.
    
    You can add multiple [tags](/help/en/resource-management/tag/product-overview/tag-overview) to a listener.
    

## More operations

**Operation**

**Procedure**

Modify a listener

1.  Click the **Listeners** tab. In the **Basic Information** area, click **Edit** next to the listener name.
    
2.  In the dialog box that appears, modify the listener name, and then click **OK**.
    

Modify the TCP connection idle timeout

You can modify the TCP connection idle timeout only when the traffic scheduling algorithm of the server group associated with the listener is 5-tuple hashing. Valid values: 60 to 6000 seconds.

1.  Click the **Listeners** tab. In the **Basic Information** area, click **Edit** to the right of **TCP Connection Idle Timeout**.
    
2.  In the dialog box that appears, modify the timeout period, and then click **OK**.
    

Delete a listener

1.  Click the **Listeners** tab. In the **Basic Information** area, click **Delete Listener**.
    
2.  In the dialog box that appears, click **OK**.
    

Change the server group

1.  Click the **Listeners** tab. In the **Server Group (Default Forwarding Rule)** area, click **Change Server Group**.
    
2.  In the dialog box that appears, select the server group you want to use or click **Create Server Group** in the drop-down list to create a new server group, and then click **OK**.
    

## References

-   [CreateListener - Create a listener](/help/en/slb/gateway-based-load-balancing-gwlb/developer-reference/api-gwlb-2024-04-15-createlistener)
    
-   [UpdateListenerAttribute - Update listener attributes](/help/en/slb/gateway-based-load-balancing-gwlb/developer-reference/api-gwlb-2024-04-15-updatelistenerattribute)
    
-   [DeleteListener - Delete a listener](/help/en/slb/gateway-based-load-balancing-gwlb/developer-reference/api-gwlb-2024-04-15-deletelistener)
    
-   [ListListeners - Query listener list](/help/en/slb/gateway-based-load-balancing-gwlb/developer-reference/api-gwlb-2024-04-15-listlisteners)
    
-   [GetListenerAttribute - Query listener details](/help/en/slb/gateway-based-load-balancing-gwlb/developer-reference/api-gwlb-2024-04-15-getlistenerattribute)
    
-   [GetListenerHealthStatus - Query listener health check status](/help/en/slb/gateway-based-load-balancing-gwlb/developer-reference/api-gwlb-2024-04-15-getlistenerhealthstatus)
