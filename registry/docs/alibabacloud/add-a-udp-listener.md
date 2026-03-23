To forward UDP requests from clients in scenarios that have high requirements for real-time interaction but can tolerate a relatively low reliability, such as video chat and real-time quote services, you can add a UDP listener to your Network Load Balancer (NLB) instance.

## Prerequisites

-   An NLB instance is created. For more information, see [Create and manage an NLB instance](/help/en/slb/network-load-balancer/user-guide/create-and-manage-an-nlb-instance#task-2223922).
    
-   A server group is created. For more information, see [NLB server groups](/help/en/slb/network-load-balancer/user-guide/create-and-manage-a-server-group#task-2223842).
    

## Procedure

You can use one of the following methods to create a UDP listener:

-   [Create a UDP listener](#section-dop-rk3-a2j): the standard configuration method. You can enable the listener to listen by port range and configure advanced settings.
    
-   [Create a UDP listener (quick configuration)](#section-wmn-m6d-xn3): the quick configuration method. You need to only specify a listener protocol, a listener port, and a server group.
    

## Create a UDP listener

1.  Log on to the [NLB console](https://slb.console.alibabacloud.com/nlb).
    
2.  In the top navigation bar, select the region in which the NLB instance is deployed.
    
3.  On the **Instances** page, find the NLB instance that you want to manage and use one of the following methods to open the listener configuration wizard:
    
    -   Click **Create Listener** in the **Actions** column.
        
    -   Click the ID of the NLB instance and click the **Listener** tab. On the **Listener** tab, click **Create Listener** above the listener list.
        
    -   Click the instance ID. On the instance details page, click **Create Listener** in the wizard.
        
    -   Click the instance ID. In the upper-right corner of the instance details page, click **Create Listener**.
        
    
4.  In the **Configure Listener** step, configure the following parameters and click **Next**.
    
    **Parameter**
    
    **Procedure**
    
    **Quick Create Listener**
    
    Select a listener protocol. In this example, **UDP** is selected.
    
    **Listen by Port Range**
    
    Specify whether to enable the listener to listen by port range. If you enable this feature, the NLB instance listens on all ports in the specified listener port range, and redirects requests destined for the ports to the backend servers.
    
    **Note**
    
    You must enable the all-port forwarding feature for server groups that you want to add to listeners that listen by port range.
    
    **Listener Port Range**
    
    If you enable the listener to listen by port range, specify the first port and the last port to define the **listener port range**.
    
    **Important**
    
    The listener port range cannot be modified after the listener is created.
    
    **Listener Port**
    
    Specify a **port** on which the NLB instance listens. The NLB instance uses the port to receive requests and forward the requests to backend servers.
    
    You can select a common port, or enter a port number. Valid values: 1 to 65535.
    
    **Note**
    
    -   If **Listen by Port Range** is enabled, you do not need to specify this parameter.
        
    -   For more information about how to configure listener ports for the same NLB instance, see [Port settings](/help/en/slb/network-load-balancer/user-guide/overview-of-nlb-listeners/#section-0nz-jxl-jnq).
        
    
    **Listener Name**
    
    Enter a name for the listener.
    
    **Tag**
    
    Configure the **Tag Key** and **Tag Value** parameters to add a tag. You can add one or more tags.
    
    After you specify tags, you can filter listeners by tag on the **Listener** tab.
    
    **Advanced Settings**
    
    Click **Modify** to configure the advanced settings.
    
    **Idle Connection Timeout Period**
    
    Specify a timeout period for idle UDP connections. If no request is received within the timeout period, NLB closes the current connection. When a request is received, NLB establishes a new connection.
    
    Valid values: 10 to 90. Default value: 90.
    
    **Limit on New Connections**
    
    Specify whether to limit the number of new connections.
    
    **Maximum New Connections per Second**
    
    If you turn on Limit on New Connections, you must specify the maximum number of new connections per second that the listener can handle in each zone. Each zone provides a virtual IP address (VIP).
    
    **Important**
    
    This value applies only to the current listener. Connections to other listeners are not affected. To view the throttling values of other listeners, check the configurations of the listeners.
    
    **Enable Proxy Protocol**
    
    Specify whether to enable Proxy Protocol. After Proxy Protocol is enabled, client IP addresses are passed to backend servers.
    
    For more information, see [Enable NLB to preserve client IP addresses and pass them to backend servers](/help/en/slb/network-load-balancer/use-cases/obtain-client-ip-addresses).
    
    **Important**
    
    The Proxy protocol takes effect only if it is enabled on both the proxy server and backend server. If the backend server cannot parse Proxy protocol headers but the Proxy protocol is enabled, parsing errors may arise on the backend server and compromise service availability.
    
5.  In the **Select Server Group** step, select **Server Type** or **IP**, select a server group, view the backend servers, and then click **Next**.
    
6.  In the **Configuration Review** step, confirm the configurations and click **Submit**.
    

## Create a UDP listener (quick configuration)

If you select this method, you only need to specify a listener protocol, a listener port, and a server group.

1.  In the left-side navigation pane, choose **NLB** > **Instances**.
    
2.  On the **Instances** page, click the ID of the NLB instance that you want to manage.
    
3.  Click the **Listener** tab. On the **Listener** tab, click **Quick Create Listener**.
    
4.  In the **Quick Create Listener** dialog box, configure the parameters and click **OK**. The following table describes the parameters.
    
    **Parameter**
    
    **Procedure**
    
    **Quick Create Listener**
    
    Select a listener protocol. In this example, **UDP** is selected.
    
    **Listener Port**
    
    Specify the frontend port that is used to receive requests and forward them to backend servers.
    
    You can select a common port, or enter a port number. Valid values: 1 to 65535.
    
    **Server Group**
    
    Set **Server Type** or **IP**, and select a server group based on the specified server type or IP address.
    

## References

-   [CreateListener](/help/en/slb/api-createlistener-nl#doc-api-Nlb-CreateListener): creates a TCP, UDP, or TCP/SSL listener for an NLB instance.
    
-   [DeleteListener](/help/en/slb/api-deletelistener-nlb#doc-api-Nlb-DeleteListener): deletes a listener from an NLB instance.
    
-   [ListListeners](/help/en/slb/api-listlisteners-nlb#doc-api-Nlb-ListListeners): queries the listeners added to an NLB instance.
    
-   [UpdateListenerAttribute](/help/en/slb/api-updatelistenerattribute-nlb#doc-api-Nlb-UpdateListenerAttribute): updates the configuration of an NLB listener.
    
-   [StartListener](/help/en/slb/api-startlistener-nlb#doc-api-Nlb-StartListener): enables an NLB listener.
    
-   [StopListener](/help/en/slb/api-stoplistener-nlb#doc-api-Nlb-StopListener): disables a listener for an NLB instance.
    
-   [GetListenerAttribute](/help/en/slb/api-getlistenerattribute-nlb#doc-api-Nlb-GetListenerAttribute): queries the details about an NLB listener.
    
-   [GetListenerHealthStatus](/help/en/slb/api-getlistenerhealthstatus-nlb#doc-api-Nlb-GetListenerHealthStatus): queries the health status of an NLB listener.
