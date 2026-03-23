Each listener is associated with an endpoint group. You can associate a listener with an endpoint group by specifying the region to which you want to distribute network traffic. After you associate a listener with an endpoint group, the system distributes network traffic to the endpoint in the endpoint group based on the routing type of the listener. This topic describes how to create and manage endpoint groups of custom routing listeners.

## Prerequisites

-   A standard Global Accelerator instance is created. For more information, see [Create and manage standard GA instances](/help/en/ga/user-guide/create-and-manage-standard-ga-instances#task-2381612).
    
-   A basic bandwidth plan is purchased and associated with the GA instance whose bandwidth billing method is subscription.
    
-   You have deployed an application that serves as the endpoint of the standard GA instance. The application is used to receive requests that are forwarded from GA. You can specify only vSwitches as endpoints for custom routing listeners. For more information, see the "Endpoints" section of the [Overview](/help/en/ga/user-guide/overview-4/#section-kcj-zv4-t4j) topic.
    
-   You are granted the permissions to use custom routing listeners. Custom routing listeners are in invitational preview. To use custom routing listeners, submit a request to your account manager. After your request is approved, you can use custom routing listeners.
    
-   To ensure that the GA instance can be connected to the endpoint, the access control configurations of the endpoint, such as security group rules or access control rules, must allow the CIDR block of the vSwitch to which the endpoint belongs, and the number of idle private IP addresses in the CIDR block must be greater than or equal to 8.
    

## Background information

After you create a custom routing listener for a GA instance, the GA instance generates a mapping table based on the relationship between the listener port range and the destination endpoint group port that you configured and the subnet information of the endpoint. This way, the GA instance can forward traffic to all IP addresses or specific IP addresses and ports in the vSwitch that you specify.

Custom routing listeners support only TCP and UDP. By default, you can create only two endpoint groups for a custom routing listener. If you want to create additional endpoint groups, go to the Quota Management page and increase the quota named **gaplus\_quota\_epgs\_per\_listener**. For more information, see [Manage GA quotas](/help/en/ga/user-guide/manage-ga-quotas#task-2382446).

## Create an endpoint group

1.  Log on to the [GA console](https://ga.console.alibabacloud.com/list).
    
2.  On the **Instances** page, find the GA instance that you want to manage and click **Configure Listeners** in the **Actions** column.
    
3.  On the **Listeners** tab, click **Add Listener**.
    
    **Note**
    
    If this is the first time that you add a listener or if no listener is created for the specified Global Accelerator instance, skip this step.
    
4.  In the **Configure Listener & Protocol** step, select **Custom Routing** as the routing type, configure the listener port, and then click **Next**.
    
    For more information, see [Add and manage custom routing listeners](/help/en/ga/user-guide/add-and-manage-custom-routing-listeners#task-2241137).
    
5.  In the **Configure Endpoint Group** step, configure the endpoint group and the endpoint.
    
    Endpoint groups define the mappings between listener port ranges, backend service port ranges, and protocols. Endpoints determine the backend destination CIDR blocks and access policies of subnet traffic.
    
    1.  Configure an endpoint group.
        
        In the **Configure Endpoint Group** step, configure the parameters for the endpoint group. The following table describes the parameters.
        
        **Parameter**
        
        **Description**
        
        **Endpoint Group Name**
        
        Enter a name for the endpoint group.
        
        **Region**
        
        Select the region where you want to deploy the endpoint group.
        
        **Port Mapping Range and Protocol**
        
        Select Batch Mode and enter the port ranges and protocols of backend services in the endpoint group. The port ranges and protocols of backend services are mapped to the port range of the listener that is associated with the endpoint group.
        
        -   **List Mode**: Enter a ****Port Range**** and select a **Protocol**. You can select **Protocol** or **UDP** from the **Protocol** drop-down list. You can select **TCP** and **UDP** at the same time.
            
            You can click **Add** to add additional entries.
            
            In this mode, you can add up to 20 entries at the same time.
            
        -   **Batch Mode**: Enter port ranges and protocols based on the instructions. You can also download a template, enter port ranges and protocols, and then upload the template.
            
            In this mode, you can add up to 100 entries at the same time.
            
        
        **Note**
        
        The product of the number of ports of the endpoint group that is associated with a custom routing listener and the number of IP addresses of all vSwitches that serve as endpoints must be less than or equal to the number of listener ports: `Number of ports of the endpoint group × Number of IP addresses of all vSwitches that serve as endpoints ≤ Number of listener ports`.
        
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
        
        -   **Allow All Traffic**: GA forwards all traffic to the specified backend service.
            
        -   **Deny All Traffic**: GA does not forward traffic to the specified backend service. This is the default value.
            
        -   **Allow Traffic from Specific vSwitch IP Address and Port**: Specify the **destination** that can receive client requests, which is the IP address and port of an Elastic Compute Service (ECS) instance.
            
            You must select a mode specifying **traffic destinations**.
            
            -   **List Mode**: Enter an **IP address** and **port**. You can select the **All Ports** check box.
                
                You can click **\+ Add** to add IP addresses and ports.
                
                You can add up to 20 entries at the same time.
                
            -   **Batch Mode**: Enter IP addresses and port ranges based on the instructions. You can also download a template, enter IP addresses and port ranges, and then upload the template.
                
                You can add up to 100 entries at the same time.
                
            
        
    3.  **Optional.** Click **\+ Add Endpoint Group** to add multiple endpoint groups by repeating the operations in the preceding step.
        
        **Note**
        
        By default, you can create two default endpoint groups for a TCP or UDP listener. If you want to create additional endpoint groups, go to the Quota Management page and increase the quota named **gaplus\_quota\_epgs\_per\_listener**. For more information, see [Manage GA quotas](/help/en/ga/user-guide/manage-ga-quotas#task-2382446).
        
    4.  In the **Cross-border Acceleration Settings** section, read **Compliance Commitments Regarding Cross-border Data Transfers** and select **Agree to the Preceding Compliance Agreement**.
        
        This parameter is available only when cross-border acceleration is disabled for your GA instance but your service requires cross-border acceleration between the Chinese mainland and regions outside the Chinese mainland, including China (Hong Kong), China (Macao), and China (Taiwan).
        
        After the configuration is complete, the **Transmission Network Type** parameter of the GA instance is automatically set to **BGP (Multi-ISP) Pro**. For more information, see [Pay-by-data-transfer](/help/en/ga/product-overview/pay-by-data-transfer).
        
    5.  Click **Next**.
        
6.  Confirm the configurations.
    
    In the **Confirm** step, confirm the configurations of the listener and endpoints, and then click **Submit**.
    
    If you want to modify settings, click **Modify** in the corresponding section. Then, you are redirected to the configuration page.
    
    **Note**
    
    If this is the first time you add a listener, the listener takes effect after 3 minutes. If you modify the configurations of a listener, the new configurations take effect after 1 minute.
    

## More operations

**Operation**

**Procedure**

Modify an endpoint group

1.  On the **Listeners** tab, find the listener that you want to manage and click the ID of the listener.
    
2.  On the details page of the listener, click the **Endpoint Group** tab.
    
3.  On the **Endpoint Group** tab, find the endpoint group that you want to manage and modify the endpoint group name or port mapping ranges and protocols based on the following instructions:
    
    -   To modify the endpoint group name, move your pointer to the right side of the endpoint group name in the **Endpoint Group ID/Name** column and click the ![编辑](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6679938661/p476632.png) icon that appears.
        
    -   To modify the port mapping ranges and protocols, click the number that is displayed in the ****Port Mapping Range and Protocol**** column. In the ****Port Mapping Range and Protocol**** panel, perform the following steps:
        
        -   To modify an existing port mapping range and protocol, click **Modify** in the **Actions** column. In the **Modify Port Mapping Range and Protocol** dialog box, modify the existing port mapping range and protocol.
            
        -   To add a port mapping range and protocol, click ****Add****. In the ****Add**** dialog box, add a port mapping range and protocol.
            
        -   To delete a port mapping range and protocol, find the port mapping range and protocol that you want to delete and click **Delete** in the **Actions** column. You can select multiple port mapping ranges and protocols and click **Batch Delete**. In the **Delete** message, click **OK**.
            
        
        For more information about the limits on port mapping ranges, see the "Listener ports" section of the [Overview](/help/en/ga/user-guide/overview-2/#section-kzi-zyz-jbb) topic.
        

Add an endpoint

1.  On the **Listeners** tab, find the listener that you want to manage and click the ID of the listener.
    
2.  On the details page of the listener, click the **Endpoint Group** tab.
    
3.  On the **Endpoint Group** tab, find the endpoint group to which you want to add endpoints and click **Add Endpoint** in the **Actions** column.
    
4.  In the **Add Endpoint** dialog box, select the **Backend Service** that you want to add and the access policy of **subnet traffic** and then click **OK**.
    
    For more information, see [Add an endpoint](#section-gb8-rez-ms0).
    

Modify an endpoint

1.  On the **Listeners** tab, find the listener that you want to manage and click the ID of the listener.
    
2.  On the details page of the listener, click the **Endpoint Group** tab.
    
3.  On the **Endpoint Group** tab, find the endpoint group that you want to manage and click the number of endpoints in the **Endpoints** column.
    
4.  In the **Endpoint** section of the endpoint group details page, find the endpoint that you want to modify and modify the access policy of subnet traffic or add traffic destinations for the endpoint based on the following instructions:**Endpoints**
    
    -   To modify the access policy of subnet traffic for the endpoint, click **Actions** in the ****Modify**** column. In the **Edit Endpoint** dialog box, select an access policy of **Edit Endpoint**.
        
    -   To add a traffic destination, click **Add Access Policy** in the **Actions** column. In the **Add Access Policy** dialog box, select a mode and add a **traffic destination**.
        
    -   To modify a traffic destination, click the number that is displayed in the **Access Policy** column. In the **Access Policy** panel, perform the following steps:
        
        -   To modify an existing traffic destination, click **Modify** in the **Actions** column. In the **Modify Access Policy** dialog box, modify the traffic destination.
            
        -   To add a traffic destination, click **Add**. In the **Add Access Policy** dialog box, add a traffic destination.
            
        -   To delete a traffic destination, click **Delete** in the **Actions** column. You can select multiple traffic destinations and click **Batch Delete**. In the **Delete** message, click **OK**.
            
    
    For more information, see [Configure endpoints](#section-gb8-rez-ms0).
    

Delete an endpoint

1.  On the **Listeners** tab, find the listener that you want to manage and click the ID of the listener.
    
2.  On the details page of the listener, click the **Endpoint Group** tab.
    
3.  On the **Endpoint Group** tab, find the endpoint group that you want to manage and click the number of endpoints in the **Endpoint** column.
    
4.  In the **Endpoint** section of the endpoint group details page, find the endpoint that you want to delete and click **Delete** in the **Actions** column.
    
5.  In the **Delete** message, click **OK**.
    

Delete an endpoint group

1.  On the **Listeners** tab, find the listener that you want to manage and click the ID of the listener.
    
2.  On the details page of the listener, click the **Endpoint Group** tab.
    
3.  On the **Endpoint Group** tab, find the endpoint group that you want to delete and click **Delete** in the **Actions** column.
    
4.  In the **Delete Endpoint Group** message, click **OK**.
    

## References

-   [CreateCustomRoutingEndpointGroups](/help/en/ga/api-createcustomroutingendpointgroups#doc-api-Ga-CreateCustomRoutingEndpointGroups): creates multiple endpoint groups for a custom routing listener at the same time.
    
-   [UpdateCustomRoutingEndpointGroupAttribute](/help/en/ga/api-updatecustomroutingendpointgroupattribute#doc-api-Ga-UpdateCustomRoutingEndpointGroupAttribute): modifies the name and description of an endpoint group that is associated with a custom routing listener.
    
-   [DeleteCustomRoutingEndpointGroups](/help/en/ga/api-deletecustomroutingendpointgroups#doc-api-Ga-DeleteCustomRoutingEndpointGroups): deletes multiple endpoint groups of a custom routing listener at the same time.
    
-   [CreateCustomRoutingEndpointGroupDestinations](/help/en/ga/api-createcustomroutingendpointgroupdestinations#doc-api-Ga-CreateCustomRoutingEndpointGroupDestinations): creates port mappings for an endpoint group that is associated with a custom routing listener.
    
-   [UpdateCustomRoutingEndpointGroupDestinations](/help/en/ga/api-updatecustomroutingendpointgroupdestinations#doc-api-Ga-UpdateCustomRoutingEndpointGroupDestinations): modifies the port mappings of an endpoint group that is associated with a custom routing listener.
    
-   [DeleteCustomRoutingEndpointGroupDestinations](/help/en/ga/api-deletecustomroutingendpointgroupdestinations#doc-api-Ga-DeleteCustomRoutingEndpointGroupDestinations): deletes the port mappings of an endpoint group that is associated with a custom routing listener.
    
-   [CreateCustomRoutingEndpoints](/help/en/ga/api-createcustomroutingendpoints#doc-api-Ga-CreateCustomRoutingEndpoints): creates endpoints for a custom routing listener.
    
-   [UpdateCustomRoutingEndpoints](/help/en/ga/api-updatecustomroutingendpoints#doc-api-Ga-UpdateCustomRoutingEndpoints): modifies the endpoints of a custom routing listener.
    
-   [DeleteCustomRoutingEndpoints](/help/en/ga/api-deletecustomroutingendpoints#doc-api-Ga-DeleteCustomRoutingEndpoints): deletes the endpoints of a custom routing listener.
    
-   [CreateCustomRoutingEndpointTrafficPolicies](/help/en/ga/api-createcustomroutingendpointtrafficpolicies#doc-api-Ga-CreateCustomRoutingEndpointTrafficPolicies): creates traffic destinations for endpoints of a custom routing listener.
    
-   [UpdateCustomRoutingEndpointTrafficPolicies](/help/en/ga/api-updatecustomroutingendpointtrafficpolicies#doc-api-Ga-UpdateCustomRoutingEndpointTrafficPolicies): modifies the traffic policies for endpoints of a custom routing listener.
    
-   [DeleteCustomRoutingEndpointTrafficPolicies](/help/en/ga/api-deletecustomroutingendpointtrafficpolicies#doc-api-Ga-DeleteCustomRoutingEndpointTrafficPolicies): deletes the traffic policies for endpoints of a custom routing listener.
    
-   [ListCustomRoutingPortMappings](/help/en/ga/api-listcustomroutingportmappings#doc-api-Ga-ListCustomRoutingPortMappings): queries the port mappings of a custom routing listener.
    
-   [ListCustomRoutingPortMappingsByDestination](/help/en/ga/api-listcustomroutingportmappingsbydestination#doc-api-Ga-ListCustomRoutingPortMappingsByDestination): queries the port mappings of a specific backend instance that is associated with a custom routing listener.
