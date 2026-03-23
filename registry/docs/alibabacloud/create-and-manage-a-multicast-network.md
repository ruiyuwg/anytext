This topic describes how to use an Enterprise Edition transit router to create and manage a multicast network.

## Background information

Before you create a multicast network, you must understand the principles, networking modes, billing rules, and limits of the multicast feature for Enterprise Edition transit routers. For more information, see [Multicast management](/help/en/cen/user-guide/multicast-overview/#task-2209043).

## **Procedure**

### **Static mode**

#### **Step 1: Prepare the environment**

1.  Create an Enterprise Edition transit router in the region where you want to create a multicast network and enable the multicast feature for the transit router. For more information, see [Create a transit router instance](/help/en/cen/user-guide/transit-routers#section-qmu-6ox-hcu).
    
    **Important**
    
    -   Multicast is supported only by Enterprise Edition transit routers in the following regions: China (Hangzhou), China (Shanghai), China (Beijing), China (Ulanqab), China (Shenzhen), China (Chengdu), China (Hohhot), China (Hong Kong), Japan (Tokyo), Singapore, Germany (Frankfurt), UK (London), US (Virginia), US (Silicon Valley), and SAU (Riyadh - Partner Region).
        
    -   You can enable the multicast feature only when you create an Enterprise Edition transit router. If you have an Enterprise Edition transit router in a region that supports multicast but you cannot use the multicast feature, you must delete the transit router and create a new one. For more information about how to delete an Enterprise Edition transit router, see [Delete a transit router instance](/help/en/cen/user-guide/transit-routers#section-kw7-52k-xtr).
        
    
2.  Connect the VPCs where you want to create the multicast network using an Enterprise Edition transit router. For more information, see [Connect on-premises data centers to VPCs](/help/en/cen/getting-started/connect-network-instances-in-the-same-region) or [Create a cross-account VPC-to-VPC connection](/help/en/cen/getting-started/use-enterprise-edition-transit-routers-to-connect-vpcs-across-regions-and-accounts).
    

#### **Step 2: Create a multicast domain**

Create a multicast domain and associate it with one or more vSwitches to define the scope of the multicast network. Only resources in the vSwitches associated with the multicast domain can send and receive multicast traffic.

1.  Log on to the [CEN console](https://cen.console.alibabacloud.com/).
    
2.  On the **Instances** page, click the ID of the CEN instance that you want to manage.
    
3.  On the **Basic Information** > **TransitRouter** tab, click the instance ID.
    
4.  On the TransitRouter instance details page, click the **Multicast** tab and then click **Create Multicast Domain**.
    
5.  In the **Create Multicast Domain** dialog box, set the following parameters and click **OK**.
    
    **Configuration item**
    
    **Description**
    
    **Transit Router**
    
    The ID of the transit router in the current region is displayed.
    
    **Multicast Domain Name**
    
    Enter a name for the multicast domain.
    
    **Multicast Domain Feature**
    
    Specifies whether to enable the Internet Group Management Protocol (IGMP) feature for the multicast domain. After you enable this feature, hosts can dynamically join or leave a multicast group using IGMP. This feature is enabled by default.
    
    -   In a scenario where a multicast network is created in static mode, you can disable this feature.
        
    -   In a scenario where a multicast network is created in IGMP mode, you must enable this feature. After the IGMP feature is enabled, it cannot be disabled.
        
    
    **VPC**
    
    Select the VPC to associate with the multicast domain.
    
    **vSwitch**
    
    Select the vSwitch to associate with the multicast domain.
    
    **Description**
    
    Enter a description for the multicast domain.
    
    **Tag**
    
    Configure tags for the multicast domain.
    
    -   **Tag Key**: The tag key can be up to 64 characters in length. It cannot be an empty string or start with `acs:` or `aliyun` or contain `http://` or `https://`.
        
    -   **Tag Value**: The tag value can be an empty string with a maximum length of 128 characters. It cannot start with `acs:` or `aliyun` or contain `http://` or `https://`.
        
    
    You can add multiple tags to a multicast domain. For more information, see [Tags](/help/en/cen/user-guide/manage-tags-2).
    
    To attach vSwitches in multiple VPCs, see the **Attach a vSwitch** operation in [More operations](#section-j6e-4il-a9g).
    

#### **Step 3: Create a multicast source**

After you create a multicast domain, create a multicast source in the multicast domain and specify a multicast group for the multicast source. After the multicast source is created, it sends multicast traffic to the multicast group. The multicast members in the multicast group can then receive the multicast traffic from the multicast source.

1.  Log on to the [CEN console](https://cen.console.alibabacloud.com/).
    
2.  On the **Instances** page, click the ID of the CEN instance that you want to manage.
    
3.  On the **Basic Information** > **TransitRouter** tab, click the instance ID.
    
4.  On the Transit Router instance details page, click the **Multicast** tab, and then click the multicast domain ID in the left-side section of the **Multicast** tab.
    
5.  In the **Multicast Domain Details** section, on the **Multicast Groups** tab, click **Add Multicast Source**.
    
6.  On the **Add Multicast Source** page, set the following parameters and click **OK**.
    
    **Configuration item**
    
    **Description**
    
    **Basic Information**
    
    **Transit Router**
    
    The ID of the transit router in the current region is displayed.
    
    **Multicast Domain**
    
    The ID of the selected multicast domain is displayed.
    
    **Multicast Group Info**
    
    **Multicast Group**
    
    Select the multicast group to which the multicast source belongs. Valid values:
    
    -   Create Multicast Group: If no multicast group is created in the selected multicast domain, you can select this option and enter an IP address. The system automatically creates a multicast group.
        
        **Note**
        
        After a multicast group is created, you cannot change its IP address.
        
    -   **Select Multicast Group**: If a multicast group already exists in the current multicast domain, you can select this option to create a multicast source in the specified multicast group.
        
    
    **New Multicast Group IP**
    
    Enter the IP address of the new multicast group. The value must be in the range of 224.0.0.128 to 239.255.255.254.
    
    **Important**
    
    The IP addresses from 224.0.0.0 to 224.0.0.127 are system reserved IP addresses and cannot be used as multicast group IP addresses.
    
    Each multicast group is identified by a multicast IP address.
    
    You need to configure this parameter only when you select **Create Multicast Group**.
    
    **Multicast Group**
    
    Select a multicast group from the list of created multicast groups.
    
    After you select a group, the new multicast source belongs to this multicast group.
    
    This parameter is required only if you select **Select Multicast Group**.
    
    **Multicast Source Information**
    
    **Resource Type**
    
    Select the type of multicast source. Default value: **ENI**.
    
    Currently, only elastic network interfaces (ENIs) that are attached to ECS instances can be used as multicast sources. The system uses the primary private IP address of the ENI to send multicast traffic to the multicast group.
    
    You can specify up to five ENIs as multicast sources at a time.
    
    **vSwitch**
    
    Select the vSwitch where the multicast source is located.
    
    **ENI**
    
    Select an ENI to use as the multicast source.
    
    If you select **Add as Multicast Member** to the right of the drop-down list, the elastic network interface is also added to the multicast group as a multicast member after the creation is complete.
    

#### **Step 4: Create a multicast member**

If you did not specify a multicast member when you created the multicast source, you can follow these steps to specify one. A resource must be a multicast member to receive multicast traffic. Multicast members receive traffic only from the multicast group to which they belong.

1.  Log on to the [CEN console](https://cen.console.alibabacloud.com/).
    
2.  On the **Instances** page, click the ID of the CEN instance that you want to manage.
    
3.  On the **Basic Information** > **TransitRouter** tab, click the instance ID.
    
4.  On the Transit Router instance details page, click the **Multicast** tab, and then click the multicast domain ID in the left-side section of the **Multicast** tab.
    
5.  In the **Multicast Domain Details** section, on the **Multicast Groups** tab, click **Add Group Member**.
    
6.  On the **Add Multicast Member** page, set the following parameters and click **OK**.
    
    **Configuration item**
    
    **Description**
    
    **Basic Information**
    
    **Transit Router**
    
    The ID of the transit router in the current region is displayed.
    
    **Multicast Domain**
    
    The ID of the selected multicast domain is displayed.
    
    **Multicast Group Info**
    
    **Multicast Group**
    
    Select the multicast group to which the multicast member belongs. Valid values:
    
    -   **Create Multicast Group**: If no multicast group exists in the current multicast domain, select this option and enter the IP address for the new multicast group. The system automatically creates a multicast group.
        
        **Note**
        
        After a multicast group is created, you cannot change its IP address.
        
    -   **Select Multicast Group**: If multicast groups already exist in the current multicast domain, you can select this configuration item to create multicast members for a specified multicast group.
        
    
    **New Multicast Group IP**
    
    Enter the IP address of the new multicast group. The value must be in the range of 224.0.0.128 to 239.255.255.254.
    
    **Important**
    
    The IP addresses from 224.0.0.0 to 224.0.0.127 are system reserved IP addresses and cannot be used as multicast group IP addresses.
    
    Each multicast group is identified by a multicast IP address.
    
    This parameter is required only when you select **Create Multicast Group**.
    
    **Multicast Group**
    
    Select a multicast group from the list of created multicast groups.
    
    This parameter is required only if you select **Select Multicast Group**.
    
    **Group Member Info**
    
    **Resource Type**
    
    Select the resource type of the multicast member. Valid values:
    
    -   **ENI** (default value): Select an ENI in the vSwitch.
        
        Currently, only ENIs that are attached to ECS instances can be used as multicast members. The system uses the primary private IP address of the ENI to receive multicast traffic.
        
        You can click **Add ENI** to add multiple ENIs.
        
    -   **Inter-region Multicast Domain**: Select the multicast domain for the cross-region TransitRouter instance.
        
        If you select a multicast domain that belongs to a transit router in another region, the multicast members of the multicast group that has the same IP address in the inter-region multicast domain are used as the multicast members of the current multicast group.
        
        ExampleFor example, a multicast group A exists in multicast domain 1 in the China (Hangzhou) region. Another multicast group A exists in multicast domain 2 in the China (Shanghai) region. Both groups have the same multicast IP address, and the group in domain 2 already has members. To create a member for group A in domain 1, you can **Select Multicast Domain** as the resource type and select domain 2 in the China (Shanghai) region. After the operation is complete, the members of group A in domain 2 are also considered members of group A in domain 1 by default. This allows them to receive multicast traffic from group A in domain 1.
        
        **Important**
        
        -   Before you select **Inter-region Multicast Domain**, make sure that:
            
            -   An inter-region connection is created between the two regions where you want to transmit multicast traffic, and the networks are connected.
                
            -   The two regions have multicast groups with the same multicast IP address, and the multicast group in the peer region already has multicast members.
                
        -   The system supports adding multicast members across regions, but does not support adding multicast sources across regions.
            
        -   For scenarios where you add inter-region multicast members, if you have already added inter-region multicast members in the local multicast domain, you cannot add local multicast members of the same multicast group in the inter-region multicast domain. This means that for the same multicast group, you can add inter-region multicast members in only one of the multicast domains.
            
        
    
    **vSwitch**
    
    Select the vSwitch where the multicast member is located.
    
    This parameter is required only if you select **ENI**.
    
    **ENI**
    
    Select an ENI to use as the multicast member.
    
    This parameter is required only if you select **ENI**.
    
    -   If you select **Inter-region Multicast Domain** to the right of the dropdown list, the ENI will also be specified as a multicast source for the multicast group after creation is complete.
        
    -   You can specify up to five multicast members at a time. If you select resources from a VPC-connected instance that belongs to another account in an operation, you can specify one or more ENIs from only that VPC-connected instance as multicast members. You cannot specify ENIs from multiple cross-account VPC-connected instances as multicast members in the same operation.
        
    
    **Transit Router**
    
    Select the transit router instance in the peer region.
    
    This parameter is required only when you select **Inter-region Multicast Domain**.
    
    **Peer Multicast Domain**
    
    Select a multicast domain that belongs to the transit router instance in the peer region.
    
    You need to configure this parameter only if you select **Inter-region Multicast Domain**.
    

### **IGMP mode**

#### **Step 1: Prepare the environment**

1.  Create an Enterprise Edition transit router in the region where you want to create a multicast network and enable the multicast feature for the transit router. For more information, see [Create a transit router instance](/help/en/cen/user-guide/transit-routers#section-qmu-6ox-hcu).
    
    **Important**
    
    -   Multicast is supported only by Enterprise Edition transit routers in the following regions: China (Hangzhou), China (Shanghai), China (Beijing), China (Ulanqab), China (Shenzhen), China (Chengdu), China (Hohhot), China (Hong Kong), Japan (Tokyo), Singapore, Germany (Frankfurt), UK (London), US (Virginia), US (Silicon Valley), and SAU (Riyadh - Partner Region).
        
    -   You can enable the multicast feature only when you create an Enterprise Edition transit router. If you have an Enterprise Edition transit router in a region that supports multicast but you cannot use the multicast feature, you must delete the transit router and create a new one. For more information about how to delete an Enterprise Edition transit router, see [Delete a transit router instance](/help/en/cen/user-guide/transit-routers#section-kw7-52k-xtr).
        
    
2.  Connect the VPCs where you want to create the multicast network using an Enterprise Edition transit router. For more information, see [Connect on-premises data centers to VPCs](/help/en/cen/getting-started/connect-network-instances-in-the-same-region) or [Create a cross-account VPC-to-VPC connection](/help/en/cen/getting-started/use-enterprise-edition-transit-routers-to-connect-vpcs-across-regions-and-accounts).
    

#### **Step 2: Create a multicast domain**

Create a multicast domain and associate it with one or more vSwitches to define the scope of the multicast network. Only resources in the vSwitches associated with the multicast domain can send and receive multicast traffic.

1.  Log on to the [CEN console](https://cen.console.alibabacloud.com/).
    
2.  On the **Instances** page, click the ID of the CEN instance that you want to manage.
    
3.  On the **Basic Information** > **TransitRouter** tab, click the instance ID.
    
4.  On the TransitRouter instance details page, click the **Multicast** tab and then click **Create Multicast Domain**.
    
5.  In the **Create Multicast Domain** dialog box, set the following parameters and click **OK**.
    
    **Configuration item**
    
    **Description**
    
    **Transit Router**
    
    The ID of the transit router in the current region is displayed.
    
    **Multicast Domain Name**
    
    Enter a name for the multicast domain.
    
    **Multicast Domain Feature**
    
    Specifies whether to enable the Internet Group Management Protocol (IGMP) feature for the multicast domain. After you enable this feature, hosts can dynamically join or leave a multicast group using IGMP. This feature is enabled by default.
    
    -   In a scenario where a multicast network is created in static mode, you can disable this feature.
        
    -   In a scenario where a multicast network is created in IGMP mode, you must enable this feature. After the IGMP feature is enabled, it cannot be disabled.
        
    
    **VPC**
    
    Select the VPC to associate with the multicast domain.
    
    **vSwitch**
    
    Select the vSwitch to associate with the multicast domain.
    
    **Description**
    
    Enter a description for the multicast domain.
    
    **Tag**
    
    Configure tags for the multicast domain.
    
    -   **Tag Key**: The tag key can be up to 64 characters in length. It cannot be an empty string or start with `acs:` or `aliyun` or contain `http://` or `https://`.
        
    -   **Tag Value**: The tag value can be an empty string with a maximum length of 128 characters. It cannot start with `acs:` or `aliyun` or contain `http://` or `https://`.
        
    
    You can add multiple tags to a multicast domain. For more information, see [Tags](/help/en/cen/user-guide/manage-tags-2).
    
    To attach vSwitches in multiple VPCs, see the **Attach a vSwitch** operation in [More operations](#section-j6e-4il-a9g).
    

#### **Step 3: Specify multicast sources and members**

After you create a multicast domain, you can deploy multicast applications in the VPC and configure the ECS instances that need to join the multicast network. This allows them to join the multicast group. ECS instances that successfully join a multicast group become both multicast sources and multicast members.

**Note**

-   Hosts that want to join the multicast network must support Internet Group Management Protocol v2 (IGMPv2). ECS instances that use the Alibaba Cloud Linux 3.2104 LTS 64-bit image support IGMPv2 by default.
    
-   The IP address of a multicast group must be in the range of 224.0.0.128 to 239.255.255.254. The IP addresses from 224.0.0.0 to 224.0.0.127 are system reserved IP addresses and cannot be used as multicast group IP addresses.
    
-   If an ECS instance has multiple elastic network interfaces (ENIs), the ENIs can join different multicast groups.
    

The following example shows how to add ECS1 and ECS2, which are in the same VPC and use the Alibaba Cloud Linux 3.2104 LTS 64-bit image, to a multicast group, for example, 239.1.1.1.

1.  Configure security group rules for ECS1 and ECS2 to allow IGMP messages. For more information, see [Query security group rules](/help/en/ecs/user-guide/view-security-group-rules#task-1357273) and [Add a security group rule](/help/en/ecs/user-guide/add-a-security-group-rule#concept-sm5-2wz-xdb).
    
2.  Log on to the ECS1 instance. For more information, see [Overview of remote connection methods](/help/en/ecs/user-guide/connect-to-instance#concept-tmr-pgx-wdb).
    
3.  On the ECS1 instance, run the following command to join the specified multicast group (239.1.1.1) and receive traffic from this group.
    
    ```
    socat STDIO udp4-recv:8000,ip-add-membership=239.1.1.1:eth0
    ```
    
    **Note**
    
    During the command execution, do not enter any content. Otherwise, socat reports an "invalid argument" error and exits.
    
    Parameters:
    
    \`8000\` is the port used to receive multicast traffic.
    
    \`239.1.1.1\` is the IP address of the multicast group.
    
    \`eth0\` specifies the interface that joins the multicast group.
    
    If the system indicates that the socat command is not supported, run the `sudo yum install socat` command to install socat.
    
    Log on to the ECS2 instance and run the same command to add ECS2 to the multicast group (239.1.1.1). After the configuration is complete, you can view the automatically created multicast source and member on the multicast domain details page.![IGMP](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7565319271/p855285.png)
    
    After you complete these steps, resources in the same multicast group and multicast domain under the same transit router can communicate with each other. In this example, ECS1 and ECS2 can communicate with each other. However, resources in the same multicast group but under different transit routers cannot communicate. To enable multicast communication between VPCs across regions, you must also perform [Step 4: Statically specify inter-region multicast members](#9c3bea11bbi0v).
    
    **Note**
    
    Multicast communication is not supported between multicast domains under the same transit router. For inter-region transit routers, only resources that belong to the same multicast group can communicate with each other.
    

#### **Step 4: Statically specify inter-region multicast members**

-   To create a multicast network only between VPCs in the same region, you can skip this step.
    
-   To create a multicast network between VPCs across different regions, after you configure the ECS instances in the VPCs, you must also statically specify inter-region multicast members in the multicast domain. This enables multicast communication between the cross-region VPCs. For more information, see [Static mode - Step 4: Create a multicast member](#section-0m5-iwh-v2f).
    
    For example, VPC1 in the Germany (Frankfurt) region needs to communicate with VPC2 in the UK (London) region over a multicast network. After you configure the ECS instances in VPC1 and VPC2, resources within the same multicast group in VPC1 can communicate with each other, and resources within the same multicast group in VPC2 can communicate with each other. However, resources in the same multicast group but in different VPCs (VPC1 and VPC2) cannot communicate. To enable communication, you must specify the inter-region multicast domain, which is the multicast domain of VPC2, in the multicast domain of VPC1, or vice versa. After this is specified, resources in the same multicast group in VPC1 and VPC2 can communicate.
    
    ![跨地域](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7565319271/p855423.png)
    

#### **Step 5: Test multicast network connectivity**

After the multicast source and members are created, you can test the multicast network connectivity. This section uses ECS1 and ECS2 from [Step 3](#efa8275973n5f) as an example.

1.  Make sure that ECS1 and ECS2 have joined the same multicast group as described in [Step 3](#efa8275973n5f). Do not close the logon windows for ECS1 and ECS2.
    
    After you run the `socat STDIO udp4-recv:8000,ip-add-membership=239.1.1.1:eth0` command on an ECS instance to join the multicast group, do not suspend the process, for example, by pressing Ctrl+Z, or kill the process, for example, by pressing Ctrl+C. If the process is suspended, the ECS instance successfully joins the multicast group but cannot display the received multicast traffic. If the process is killed, you must run the command again to join the multicast group.
    
    If the socat process is suspended, run the following commands to bring it to the foreground.
    
    ```
    # Run the following command to view all background tasks
    jobs
    
    # Run the following command to resume a specific task. "1" indicates the task number.
    fg %1    
    ```
    
2.  Open a new window and log on to the ECS1 instance. On the ECS1 instance, run the following command to send traffic to the multicast group.
    
    ```
    while :; do echo "hello multicast from host `hostname` at `date`" | socat STDIO udp4-sendto:239.1.1.1:8000,ip-multicast-if=172.16.10.165,ip-multicast-ttl=32; sleep 1; done
    ```
    
    **Note**
    
    Parameters:
    
    \`239.1.1.1\` is the IP address of the multicast group.
    
    \`8000\` is the destination port for the multicast traffic.
    
    \`172.16.10.165\` is the IP address of the interface on ECS1 that sends multicast traffic. This is the IP address of the multicast source.
    
    After you run the command, you can see that ECS1 and ECS2 have received the multicast traffic. This indicates that the multicast network is connected.
    
    ### **ECS1**
    
    ### ![IGMP-ECS1](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7565319271/p855290.png)
    
    ### ECS2
    
    ![IGMP-ECS2](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7565319271/p855293.png)
    
3.  After the test is complete, press `Ctrl+C` on each ECS instance to stop sending or receiving multicast traffic and end the test.
    

## More operations

**Operation**

**Description and prerequisites**

**Steps**

Attach a vSwitch

After you create a multicast domain, you can attach vSwitches to it to expand the multicast network.

1.  On the TransitRouter instance details page, click the **Multicast** tab, and then click the multicast domain ID in the left pane of the **Multicast** tab.
    
2.  On the **VSwitch** tab in the **Multicast Domain Details** area, click **Associate With vSwitch**.
    
3.  In the **Associate with a vSwitch** dialog box, select a **VPC** and a **vSwitch**, and click **OK**.
    
    You can select multiple vSwitches in a VPC.
    

To attach vSwitches from multiple VPCs, repeat these steps for each VPC.

Detach a vSwitch

If resources in a vSwitch no longer need to be part of the multicast network, you can detach the vSwitch from the multicast domain.

Before you detach a vSwitch, make sure that the following conditions are met:

-   No multicast sources exist in the vSwitch. To delete multicast sources, see **Delete a multicast source**.
    
-   No multicast members exist in the vSwitch. To remove multicast members, see **Delete a multicast member**.
    

1.  On the TransitRouter instance details page, click the **Multicast** tab, and then click the multicast domain ID in the left pane of the **Multicast** tab.
    
2.  In the **Multicast Domain Details** area, on the **vSwitch** tab, click **Disassociate** in the **Actions** column for the target vSwitch.
    
3.  In the dialog box, verify the information and click **OK**.
    

Delete a multicast member

If a multicast member no longer needs to receive multicast traffic, you can delete it from the multicast group.

Multicast members created in IGMP mode cannot be manually deleted. You must configure the multicast member, for example, by killing the process that joined the multicast group, to make it leave the multicast group.

1.  On the TransitRouter instance details page, click the **Multicast** tab, and then click the multicast domain ID in the left pane of the **Multicast** tab.
    
2.  In the **Multicast Domain Details** area, on the **Multicast Groups** tab, find the target multicast member and click **Delete** in the **Actions** column.
    
    Resources with a **Group Member Type** of **Static** are multicast members.
    
3.  In the **Remove Group Member** dialog box, click **OK**.
    

Delete a multicast source

If a multicast source no longer needs to send multicast traffic, you can delete it from the multicast group.

Multicast sources created in IGMP mode cannot be manually deleted. You must configure the multicast source, for example, by killing the process that joined the multicast group, to make it leave the multicast group.

1.  On the TransitRouter instance details page, click the **Multicast** tab, and then click the multicast domain ID in the left pane of the **Multicast** tab.
    
2.  In the **Multicast Domain Details** area, on the **Multicast Groups** tab, find the target multicast source and click **Delete** in the **Actions** column.
    
    Resources marked as **Static** in the **Multicast Source Type** column are multicast sources.
    
3.  In the **Delete Multicast Source** dialog box, click **OK**.
    

Delete a multicast domain

If you no longer need a multicast network, you can delete the corresponding multicast domain.

Before you delete a multicast domain, make sure that the following conditions are met:

-   The multicast domain is detached from all vSwitches. To detach a vSwitch, see **Detach a vSwitch**.
    
-   There are no multicast sources or members in the multicast domain. For more information, see **Delete a multicast source** and **Delete a multicast member**.
    

1.  On the TransitRouter instance details page, click the **Multicast** tab, and then click the multicast domain ID in the left pane of the **Multicast** tab.
    
2.  In the **Multicast Domain Details** area, click **Delete** on the right.
    
3.  In the **Delete Multicast Domain** dialog box, click **OK**.
    

Enable the IGMP feature for a multicast domain

If the IGMP feature was not enabled when the multicast domain was created, you can enable it for the multicast domain separately. After the IGMP feature is enabled, it cannot be disabled.

1.  On the TransitRouter instance details page, click the **Multicast** tab, and then click the multicast domain ID in the left pane of the **Multicast** tab.
    
2.  In the **Multicast Domain Details** area, click **Edit** for **Multicast Domain Features**.
    
3.  In the dialog box, select **Support IGMPv2** and click **OK**.
    

## References

### Multicast domain

-   [CreateTransitRouterMulticastDomain](/help/en/cen/developer-reference/api-cbn-2017-09-12-createtransitroutermulticastdomain): Creates a multicast domain.
    
-   [ModifyTransitRouterMulticastDomain](/help/en/cen/developer-reference/api-cbn-2017-09-12-modifytransitroutermulticastdomain): Modifies the name and description of a multicast domain.
    
-   [DeleteTransitRouterMulticastDomain](/help/en/cen/developer-reference/api-cbn-2017-09-12-deletetransitroutermulticastdomain): Deletes a multicast domain.
    
-   [ListTransitRouterMulticastDomains](/help/en/cen/developer-reference/api-cbn-2017-09-12-listtransitroutermulticastdomains): Queries information about multicast domains.
    
-   [AssociateTransitRouterMulticastDomain](/help/en/cen/developer-reference/api-cbn-2017-09-12-associatetransitroutermulticastdomain): Associates a vSwitch in a VPC with a multicast domain.
    
-   [DisassociateTransitRouterMulticastDomain](/help/en/cen/developer-reference/api-cbn-2017-09-12-disassociatetransitroutermulticastdomain): Disassociates a vSwitch from a multicast domain.
    
-   [ListTransitRouterMulticastDomainAssociations](/help/en/cen/developer-reference/api-cbn-2017-09-12-listtransitroutermulticastdomainassociations): Queries the associations of a multicast domain.
    
-   [ListTransitRouterMulticastDomainVSwitches](/help/en/cen/developer-reference/api-cbn-2017-09-12-listtransitroutermulticastdomainvswitches): Queries information about the vSwitches that are associated with a multicast domain in a VPC.
    

### Multicast sources and multicast members

-   [RegisterTransitRouterMulticastGroupSources](/help/en/cen/developer-reference/api-cbn-2017-09-12-registertransitroutermulticastgroupsources): Creates a multicast source.
    
-   [DeregisterTransitRouterMulticastGroupSources](/help/en/cen/developer-reference/api-cbn-2017-09-12-deregistertransitroutermulticastgroupsources): Deletes a multicast source.
    
-   [RegisterTransitRouterMulticastGroupMembers](/help/en/cen/developer-reference/api-cbn-2017-09-12-registertransitroutermulticastgroupmembers): Creates a multicast member.
    
-   [DeregisterTransitRouterMulticastGroupMembers](/help/en/cen/developer-reference/api-cbn-2017-09-12-deregistertransitroutermulticastgroupmembers): Deletes a multicast member.
    
-   [ListGrantVSwitchEnis](/help/en/cen/developer-reference/api-cbn-2017-09-12-listgrantvswitchenis): Queries information about the ENIs in a VPC that can be used as multicast sources or members.
    
-   [ListTransitRouterMulticastGroups](/help/en/cen/developer-reference/api-cbn-2017-09-12-listtransitroutermulticastgroups): Queries information about the multicast members and sources in a multicast domain.
