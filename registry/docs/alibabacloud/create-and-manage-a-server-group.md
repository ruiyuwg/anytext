Before you use the Gateway Load Balancer (GWLB) service to distribute client requests, you must create a server group and add one or more backend servers to the server group to receive client requests forwarded by GWLB. You can remove backend servers from a server group or delete backend server groups at any time based on your business needs. This topic describes how to create and manage a server group.

## Prerequisites

-   A server instance is created to provide backend services. An image of your network virtual appliances (NVAs) is deployed on the server instance. The backend server supports the Geneve protocol.
    
-   If you want to route traffic to the backend servers in a server group, specify the server group when creating a listener. For more information, see [Add and manage IP listeners](/help/en/slb/gateway-based-load-balancing-gwlb/user-guide/create-and-manage-a-listener).
    

## Create a server group

1.  Log on to the [GWLB console](https://slb.console.alibabacloud.com/gwlb/).
    
2.  In the top navigation bar, select the region where the GWLB instance is deployed.
    
3.  In the left-side navigation pane, choose **GWLB** > **Server Group**.
    
4.  On the **Server Group** page, click **Create Server Group**.
    
5.  In the **Create Server Group** dialog box, set the following parameters, and click **Create**.
    
    **Parameter**
    
    **Description**
    
    **Server Group Type**
    
    Select a server group type:
    
    -   **Server**: supports adding Elastic Compute Service (ECS) instances, elastics network interfaces (ENIs), and elastic container instances as backend servers.
        
    -   **IP**: supports adding IP addresses as backend servers.
        
    
    **Server Group Name**
    
    Enter a name for the server group.
    
    **VPC**
    
    Select a virtual private cloud (VPC) from the drop-down list.
    
    **Backend Protocol**
    
    Only **GENEVE** is available.
    
    **Scheduling Algorithm**
    
    Select a scheduling algorithm:
    
    -   **5-tuple Hashing**: includes the source IP address, source port, destination IP address, destination port, and transmission protocol.
        
    -   **3-tuple Hashing**: includes the source IP address, destination IP address, and transmission protocol.
        
    -   **2-tuple Hashing**: includes the source IP address and destination IP address.
        
    
    The system defaults to **5-tuple Hashing**.
    
    **Health Check Method**
    
    Select a health check protocol or disable health checks.
    
    -   **TCP** (default): configures TCP health checks, which send SYN handshake messages to check whether a server port is healthy.
        
    -   **HTTP**: configures HTTP health checks, which send GET requests to simulate browser access behavior to check whether an application on a server is healthy.
        
    -   **Disable Health Check**: configures no health checks.
        
    
    **Health Check Port**
    
    Specify the server port that is probed by health checks.
    
    **Advanced Health Check Settings**
    
    With health check enabled, click **Advanced Health Check Settings** to show more configurations.
    
    **Health Check URL**
    
    Enter the URI of the health check page.
    
    **Note**
    
    This parameter is available only when **Health Check Method** is set to **HTTP**.
    
    **Health Check Domain Name**
    
    Enter the domain name used for health checks.
    
    -   **Backend Server Internal IP** (default): uses the private IP address of the backend server as the domain name for health checks.
        
    -   **Custom Domain Name**: Enter a domain name for health checks.
        
    
    **Note**
    
    This parameter is available only when **Health Check Method** is set to **HTTP**.
    
    **Health Check Status Codes**
    
    Select one or more HTTP status codes. The specified HTTP status codes are used to indicate that the backend server passes a health check.
    
    -   **http\_2xx** (default)
        
    -   **http\_3xx**
        
    -   **http\_4xx**
        
    -   **http\_5xx**
        
    
    **Note**
    
    This parameter is available only when **Health Check Method** is set to **HTTP**.
    
    **Health Check Timeout Period**
    
    Specify the timeout period for a health check response. If the backend server does not respond within the specified timeout period, the backend server fails the health check.
    
    **Health Check Interval**
    
    Specify the interval between two consecutive health checks.
    
    **Healthy Threshold (Health Checks)**
    
    Specify the number of times that an unhealthy backend server must consecutively pass health checks before it is declared healthy.
    
    **Unhealthy Threshold (Health Checks)**
    
    Specify the number of times that a healthy backend server must consecutively fail health checks before it is declared unhealthy.
    
    **Connection Draining**
    
    Specify whether to enable connection draining. By default, connection draining is disabled.
    
    After enabling connection draining, you must set **Connection Draining Timeout Period**. The value range is 1 to 3,600 seconds, and 0 indicates immediate disconnection.
    
    **Tags and Resource Group**
    
    Click **Tags and Resource Group** to show more configurations:
    
    -   Set **Tag Key** and **Tag Value**.
        
    -   **Resource Group**: Select the resource group to which the server group belongs.
        
    

## Add backend servers

After creating a backend server group, add backend servers to the server group to route traffic to the backend servers in the server group.

### Add servers

If Server Group Type is Server, ECS instances, ENIs, and elastic container instances can be added as backend servers.

1.  Log on to the [GWLB console](https://slb.console.alibabacloud.com/gwlb/).
    
2.  In the top navigation bar, select the region where the GWLB instance is deployed.
    
3.  In the left-side navigation pane, choose **GWLB** > **Server Group**. Click the ID of the server group that you want to manage.
    
4.  Click the **Backend Servers** tab and click **Add Backend Server**.
    
5.  In the **Add Backend Server** panel, set **Server** according to your needs.
    
    ## Add ECS instances
    
    Set **Server** to **ECS/ENI** and select the servers that you want to add.
    
    If no ECS instances are available, you can click **Purchase ECS Instance** in the upper right corner of the server list.
    
    ## Add ENIs
    
    1.  Set **Server** as **ECS/ENI** and enable **Advanced Mode**.
        
    2.  Click the plus icon to the left of the target ECS instance ID and select ENI.
        
        -   If you want to select an ENI of an ECS instance, make sure that the target ECS instance is bound with an ENI. For information about binding a secondary ENI to an ECS instance, see [Bind a secondary ENI](/help/en/ecs/user-guide/bind-an-eni#concept-twf-4jj-zdb).
            
        -   If no ECS instances are available, you can click **Purchase ECS Instance** in the upper right corner of the server list.
            
    
    ## Add elastic container instances
    
    Set **Server** to **ECI** and select the servers that you want to add.
    
    If no elastic container instances are available, you can click **Purchase Elastic Container Instance** in the upper right corner of the server list.
    

6.  Click **OK**.
    

### Add IP addresses

When the created server group is of the IP type, you need to add IP addresses as backend servers.

1.  Log on to the [GWLB console](https://slb.console.alibabacloud.com/gwlb/).
    
2.  In the top navigation bar, select the region where the GWLB instance is deployed.
    
3.  In the left-side navigation pane, choose **GWLB** > **Server Group**. Click the target server group ID.
    
4.  On the **Backend Servers** tab, click **Add IP**.
    
5.  In the **Add Backend Server** panel, enter the IP address of the backend server according to your needs.
    
    **Note**
    
    -   When you need to add multiple backend servers, you can click **\+ Add IP** to add more backend servers.
        
    -   The following private IP addresses within the specified CIDR blocks are supported:
        
        -   10.0.0.0/8
            
        -   100.64.0.0/10
            
        -   172.16.0.0/12
            
        -   192.168.0.0/16
            
    

6.  Click **OK** to complete the addition of backend servers.
    

## More operations

**Operation**

**Procedure**

Update a server group

1.  On the **Server Group** page, find the server group that you want to manage, and click **Modify Basic Information** in the **Actions** column.
    
2.  In the dialog box that appears, edit the server group name, set the scheduling algorithm, configure connection draining, and click **OK**.
    

Remove a backend server

1.  On the **Server Group** page, find the server group that you want to manage, and click the ID of the server group.
    
2.  Click the **Backend Servers** tab, find the backend server that you want to remove, and click **Remove** in the **Actions** column.
    
3.  In the dialog box that appears, click **Delete**.
    

**Note**

Removing a backend server from a server group does not affect its lifecycle, and you can add it back to the backend server group again.

Delete a server group

1.  On the **Server Group** page, find the server group that you want to delete, and click **![更多](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8846770371/p814737.png)** > **Delete** in the **Actions** column.
    
2.  In the dialog box that appears, click **Delete**.
    

## References

-   [CreateServerGroup](/help/en/slb/gateway-based-load-balancing-gwlb/developer-reference/api-gwlb-2024-04-15-createservergroup)
    
-   [UpdateServerGroupAttribute](/help/en/slb/gateway-based-load-balancing-gwlb/developer-reference/api-gwlb-2024-04-15-updateservergroupattribute)
    
-   [DeleteServerGroup](/help/en/slb/gateway-based-load-balancing-gwlb/developer-reference/api-gwlb-2024-04-15-deleteservergroup)
    
-   [AddServersToServerGroup](/help/en/slb/gateway-based-load-balancing-gwlb/developer-reference/api-gwlb-2024-04-15-addserverstoservergroup)
    
-   [RemoveServersFromServerGroup](/help/en/slb/gateway-based-load-balancing-gwlb/developer-reference/api-gwlb-2024-04-15-removeserversfromservergroup)
    
-   [ListServerGroups](/help/en/slb/gateway-based-load-balancing-gwlb/developer-reference/api-gwlb-2024-04-15-listservergroups)
    
-   [ListServerGroupServers](/help/en/slb/gateway-based-load-balancing-gwlb/developer-reference/api-gwlb-2024-04-15-listservergroupservers)
