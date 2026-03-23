You can configure a custom routing listener for a standard Global Accelerator (GA) instance. This way, the GA instance can forward traffic to all IP addresses or specific IP addresses and ports in the subnet that you specify based on the mapping between the listener port and the destination endpoint group port.

## Background information

After you configure a custom routing listener for a GA instance, the instance generates a port mapping table based on the listener port range, port ranges of the associated endpoint groups, and IP addresses of endpoints (vSwitches). The custom routing listener forwards client requests to specific IP addresses and ports in the vSwitches based on the port mapping table.

Custom routing listeners are ideal for scenarios in which you want to forward traffic from clients to specified backend servers. Examples: multiplayer online games, video conferencing, and virtual classrooms. For information about how custom routing listeners work and how to use custom routing listeners, see [How custom routing listeners work](/help/en/ga/user-guide/how-custom-routing-listeners-work#concept-2246231).

For more information about the differences between different routing types and limits on port ranges, see [Overview](/help/en/ga/user-guide/overview-2/#concept-2382440).

## Prerequisites

-   You are granted the permissions to use custom routing listeners. Custom routing listeners are in invitational preview. To use custom routing listeners, submit a request to your account manager. After your request is approved, you can use custom routing listeners.
    
-   A standard Global Accelerator instance is created. For more information, see [Create and manage standard GA instances](/help/en/ga/user-guide/create-and-manage-standard-ga-instances#task-2381612).
    
-   A basic bandwidth plan is created and associated with the GA instance if the GA instance uses the **pay-by-bandwidth** bandwidth metering method.
    

## Add a listener

1.  Configure the listener and the protocol.
    
    1.  Log on to the [GA console](https://ga.console.alibabacloud.com/list).
        
    2.  On the **Instances** page, find the GA instance that you want to manage and click **Configure Listeners** in the **Actions** column.
        
    3.  On the **Listeners** tab, click **Add Listener**.
        
        **Note**
        
        If this is the first time that you add a listener or if no listener is created for the specified Global Accelerator instance, skip this step.
        
    4.  On the **Configure Listener & Protocol** wizard page, configure the parameters and click **Next**. The following table describes the parameters.
        
        **Parameter**
        
        **Description**
        
        ****Listener Name****
        
        Enter a name for the listener.
        
        **Routing Type**
        
        Select a routing type. In this example, **Custom Routing** is selected.
        
        -   **Intelligent Routing**: automatically selects a nearby and healthy endpoint group based on network latency and forwards client requests to the optimal endpoint in the endpoint group.
            
        -   **Custom Routing**: generates a port mapping table based on the listener port range, the port ranges of the destination endpoint groups, and the IP addresses of endpoints (vSwitches). This way, traffic is routed to specific IP addresses and ports of specified vSwitches. For more information about how to configure a custom routing listener, see [Add and manage custom routing listeners](/help/en/ga/user-guide/add-and-manage-custom-routing-listeners#task-2241137).
            
            **Note**
            
            Custom routing listeners are in invitational preview. To use custom routing listeners, submit an application to your account manager. After your application is approved, you can use custom routing listeners.
            
        
        **Port Number**
        
        Specify a port for the listener to receive and forward requests to endpoints. Valid values: **1 to 65499**.
        
        Separate multiple listener ports with commas (,). For example, you can enter 80,90,8080.
        
        You can use a hyphen (-) to specify a port range. Example: 80-85.
        
        **Note**
        
        -   The ports of different custom routing listeners on a GA instance must be different.
            
        -   Ports 25, 250, 4789, and 4790 are system-reserved ports. When a port mapping table is generated, the system-reserved ports are ignored.
            
        -   You cannot configure port 6081 for pay-as-you-go Global Accelerator instances.
            
        -   The port range that you specify for the listener determines the sum of the number of ports in the endpoint group that is associated with the listener and the number of IP addresses in the vSwitch. `The number of ports in the endpoint group multiplied by the number of IP addresses of all vSwitches in the endpoints must be less than or equal to the number of listener ports` We recommend that you specify a larger port range for the listener.
            
        
2.  Configure an endpoint group and an endpoint.
    
    Each listener is associated with an endpoint group. You can associate an endpoint group with a listener by specifying the region to which you want to distribute network traffic. Endpoint groups define the mappings between listener port ranges and backend service port ranges and protocols. Endpoints determine the backend destination CIDR blocks and access policies of subnet traffic.
    
    For more information about endpoint groups and endpoints, see [Overview](/help/en/ga/user-guide/overview-4/#concept-2384659).
    
    1.  Configure an endpoint group.
        
        On the **Configure Endpoint Group** wizard page, configure the parameters for the endpoint group. The following table describes the parameters.
        
        **Parameter**
        
        **Description**
        
        **Endpoint Group Name**
        
        Specify a name for the endpoint group.
        
        **Region**
        
        Select the region where you want to deploy the endpoint group.
        
        **Port Mapping Range and Protocol**
        
        Select Batch Mode and enter the port ranges and protocols of backend services in the endpoint group. The port ranges and protocols of backend services are mapped to the port range of the listener that is associated with the endpoint group.
        
        -   **List Mode**: Enter a ****Port Range**** and select a **Protocol**. You can select **Protocol** or **UDP** from the **Protocol** drop-down list. You can select **TCP** and **UDP** at the same time.
            
            You can click **Add** to add additional entries.
            
            In this mode, you can add up to 20 entries at the same time.
            
        -   **Batch Mode:** Enter port ranges and protocols based on the instructions. You can also download a template, enter port ranges and protocols, and then upload the template.
            
            In this mode, you can add up to 100 entries at the same time.
            
        
        **Note**
        
        The sum of all ports in the endpoint groups that are associated with a custom routing listener and the IP addresses of all vSwitches in the endpoints must be less than or equal to the number of listener ports. This means that the number of ports in the endpoint groups times the number of IP addresses of all vSwitches in the endpoints must be less than or equal to the number of listener ports.
        
        ****Backend Service****
        
        By default, backend servers are deployed on **Alibaba Cloud**.
        
    2.  Configure endpoints.
        
        In the **Endpoint** section, click ****Add Endpoint****. In the ****Add Endpoint**** dialog box, configure the parameters and click **OK**. The following table describes the parameters.
        
        **Parameter**
        
        **Description**
        
        **Backend Service Type**
        
        Set the value to **vSwitch**.
        
        **Backend Service**
        
        Select the vSwitch to which you want to forward traffic.
        
        **Subnet Traffic**
        
        Select an access policy for subnet traffic.
        
        -   **Allow All Traffic:** GA forwards all traffic to the specified backend service.
            
        -   **Deny All Traffic:** GA does not forward traffic to the specified backend service. This is the default value.
            
        -   **Allow Traffic from Specific vSwitch IP Address and Port:** specifies the **access policy** that can receive client requests, which is the IP address and port of an Elastic Compute Service (ECS) instance.
            
            You must select a mode for the **access policy**.
            
            -   **List Mode:** enter an **IP address** and **port**. You can select the **All Ports** check box.
                
                You can click **\+ Add** to add IP addresses and ports.
                
                In this mode, you can add up to 20 entries at the same time.
                
            -   **Batch Mode:** Enter IP addresses and port ranges based on the instructions. You can also download a template, enter IP addresses and port ranges, and then upload the template.
                
                In this mode, you can add up to 100 entries at the same time.
                
            
        
    3.  **Optional.** Click **\+ Add Endpoint Group** to add multiple endpoint groups by repeating the operations in the preceding step.
        
        **Note**
        
        By default, you can create two default endpoint groups for a TCP or UDP listener. If you want to create more endpoint groups, go to the Quota Management page and increase the quota of **gaplus\_quota\_epgs\_per\_listener**. For more information, see [Manage GA quotas](/help/en/ga/user-guide/manage-ga-quotas#task-2382446).
        
    4.  Click **Next**.
        
3.  Confirm the configurations.
    
    In the **Confirm** step, confirm the configurations of the listener and endpoints, and then click **Submit**.
    
    -   If you want to modify a specific setting, click **Modify** that corresponds to the setting. Then, you are redirected to the configuration page.
        
    -   If the bandwidth metering method of the Global Accelerator instance is **pay-by-data-transfer** and data is transmitted between the Chinese mainland and regions outside the Chinese mainland, including China (Hong Kong), China (Macao), and China (Taiwan), you must enable cross-border data transmission for your Global Accelerator instance. Otherwise, the configurations of the endpoints do not take effect. You can click **Cross-border product compliance inspection** as prompted. In the **Enable Cross-border Acceleration** dialog box, read the **Compliance Commitments Regarding Cross-border Data Transfers**, select **Agree to the Preceding Compliance Agreement**, and then click **Enable**. Then, the configuration task is performed again.
        
        After you complete the configurations, the **Transmission Network Type** of your Global Accelerator instance is **BGP (Multi-ISP) Pro** by default. For more information, see [Pay-by-data-transfer](/help/en/ga/product-overview/pay-by-data-transfer).
        
    
    **Note**
    
    If this is the first time you add a listener, the listener takes effect after 3 minutes. If you modify the configurations of a listener, the new configurations take effect after 1 minute.
    

## Related operations

**Operation**

**Description**

Modify a listener

You can change the name and port of a listener to meet your business requirements. Take note of the following information when you modify a listener:

-   You cannot change the routing type of a listener.
    
-   You cannot change the port ranges that are recorded in a mapping table. This means that if a port is used by a mapping table, you cannot remove the port. For example, if port 199 in the 100 to 10000 port range of a listener is mapped to port 80 of an endpoint, you cannot reduce the port range to 200 to 10000.
    

1.  On the **Listeners** tab, find the listener that you want to modify and click **Modify** in the **Actions** column.
    
2.  On the **Edit Listener** dialog box, modify **Listener Name** or **Port** and click **OK**.
    

Delete a listener

You can delete a listener. After you delete a listener, the endpoint group that is associated with the listener is also deleted.

1.  On the **Listeners** tab, find the listener that you want to delete and click **Delete** in the **Actions** column.
    
2.  In the **Delete Listener** message, click **OK**.
    

## References

-   [CreateListener](/help/en/ga/api-createlistener#doc-api-Ga-CreateListener): creates a listener for a GA instance.
    
-   [UpdateListener](/help/en/ga/api-updatelistener#doc-api-Ga-UpdateListener): modifies a listener of a GA instance.
    
-   [DeleteListener](/help/en/ga/api-deletelistener#doc-api-Ga-DeleteListener): deletes a listener of a GA instance.
