A dedicated Express Connect circuit creates an exclusive connection between your data center and Alibaba Cloud with guaranteed performance and security. Deployment typically takes one to three months, so request your circuit early to align the circuit delivery with your timeline.

## Connection workflow

Setting up a dedicated circuit requires coordination among **you (the customer)**, **Alibaba Cloud**, **your circuit provider**, and **the data center operator**. The following diagram shows the workflow:

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4590722771/CAEQUxiBgMDnnoS85BkiIDVhYTI1MDJhOGQ5YTQzNTViMzA0NGU3N2I1MGE2N2Yy4892710_20250126114641.556.svg)

> After you [apply for a physical port](#74d205f7516tq), track each step's status in the **Construction Procedure** column of the target physical port on the [Express Connect console](https://expressconnect.console.alibabacloud.com/physicalconnection).

### Step 1: Choose an access point

An access point is a physical location where Alibaba Cloud provides dedicated connection services. Each access point has redundant access devices that allow you to connect your on-premises data center to the Alibaba Cloud network over a physical connection. Each region has one or more access points. For the full list, see [Access point addresses](/help/en/express-connect/getting-started/locations-of-access-points)。

Factor

Description

**Proximity**

Choose the access point closest to your data center to minimize latency. Each access point supports different providers and bandwidth capacities depending on the region.

Internet Service Provider (ISP)

Select an access point that supports your provider. Supported providers include China Unicom, China Telecom, China Mobile, and select local providers.

> China Unicom, China Telecom, and China Mobile require connections over their own circuits. Cross-provider connections and dark fiber are not supported.

**Port requirements**

Only fiber-optic ports are supported. Available port types: **100 GE Single-Mode Optical Port**, **40GE single-mode optical port**, **10GE single-mode optical port**, **GE single-mode optical port**.

-   Alibaba Cloud side：
    
    -   Provides 1 Gbps, 10 Gbps, 40 Gbps, and 100 Gbps single-mode optical modules with a 10 km transmission range by default.
        
    -   Only **dual-fiber** connections are supported.
        
-   Customer side: You must purchase your own optical module and ensure its specifications match the Alibaba Cloud side module.
    

You can check port availability in the next step when you [Apply for a physical port](#74d205f7516tq). For example, in Classic mode, after you select a **Region**, **ISP** and **Access Point**, the console displays port availability for each port type.

![端口库存截图-cn](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2084109471/p940469.png)

> For connections above 10 Gbps, contact your account manager.

### Step 2: Apply for a physical port

A physical port is a network interface that Alibaba Cloud provisions at the access point facility. After the provider lays the dedicated circuit to the Alibaba Cloud facility, a patch cable connects it to this port, completing the physical link. If this is your first application, you must [activate outbound data transfer billing](/help/en/doc-detail/274385.html#task-2092260) as prompted in the console.

The following application modes are available:

#### High reliability mode

High-reliability mode provides automatic failover through redundant links. Refer to the [Express Connect Service Level Agreement](/help/en/legal/latest/express-connect-service-level-agreement) for SLA details.

> [CloudBox](/help/en/cloud-box/product-overview/what-is-cloudbox) scenarios do not support high-reliability mode.

1.  Go to the [Physical Connection](https://expressconnect.console.alibabacloud.com/physicalconnection) page in the Express Connect console. Click **Create Physical Connection** and set **Select Access Point Mode** to **High Reliability Mode**. Select a **Combination Type**:
    
    **Topology Type**
    
    **Description**
    
    **Diagram**
    
    **Optimal Disaster Recovery**
    
    Four physical connections across two access points, with two connections per access point. Provides the highest level of protection against single-device and single-site failures.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0296825071/p725790.png)
    
    **Powerful Disaster Recovery**
    
    Two physical connections across two access points, one connection per access point. Provides strong protection against single-device and single-site failures.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4807825071/p725408.png)
    
    **Development and Testing**
    
    Two physical connections to a single access point. Provides device-level failover but no site-level redundancy.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5437825071/p725456.png)
    
    **Load Balancing for Large Bandwidth**
    
    Multiple physical connections to a single access point, load-balanced to increase aggregate throughput.
    
    > Contact your account manager to request access for Load Balancing for Large Bandwidth.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8937825071/p725802.png)
    
    **Important**
    
    -   Each access point allows up to 2 physical connections by default (quota: **ec\_quota\_pconn\_count\_per\_ap**). You can [request a quota increase](https://expressconnect.console.alibabacloud.com/quota).
        
    -   If you purchase multiple ports in a single order and any port fails to create, the entire order fails.
        
    
2.  **Configure Connection**：
    
    -   **Port Type**: Select your target type, supporting **100 GE Single-Mode Optical Port**, **40GE single-mode optical port**, **10GE single-mode optical port**, **GE single-mode optical port**.
        
    -   **Advanced Configurations**: Optional capabilities including **VBR Bandwidth Limits**、**IPv6**、**BFD**、**MPBGP**、**MPBGP**、**QOS**、**VBR-HA**、**Failover Group**. Port creation fails if the selected access point does not have ports that support the chosen advanced capabilities.
        
        **Advanced capabilities reference**
        
        -   **VBR Bandwidth Limits****:** Enforces per-VBR bandwidth limits to prevent a single VBR from consuming excessive port capacity.
            
        -   **IPv6****:** Enables IPv6 traffic on the physical port for IPv6 connectivity between your on-premises IDC and cloud VPCs.
            
        -   **BFD****:** Detects link failures (such as fiber breaks or module faults) on the direct link between the physical port and the peer device.
            
        -   **MPBGP****:** A BGP extension that carries multi-protocol routing information within a BGP session.
            
        -   **MPBGP****:** An MPBGP extension that carries IPv6 routing information within a BGP session.
            
        -   **QOS****:** Assigns priority levels to different traffic classes through [QoS policies](/help/en/express-connect/user-guide/qos-policy), ensuring that high-priority workloads get the bandwidth they need.
            
        -   **VBR-HA****:** Pairs two VBRs into a [Configure a failover group](/help/en/express-connect/user-guide/configure-a-failover-group). When BFD detects a link failure, traffic automatically switches to the standby VBR within sub-seconds.
            
        -   **Failover Group****:** In ECR scenarios with multiple VBRs, allows you to configure multiple VBRs into [Create and manage an ECR](/help/en/express-connect/user-guide/create-and-manage-the-leased-line-gateway-ecr#573437764f9lm). When BFD detects a link failure, traffic fails over in seconds.
            
        
    -   **Select Access Point**：Choose your target **Region**, **ISP** and **Access Point**. For the full list, see [Access point addresses](/help/en/express-connect/getting-started/locations-of-access-points).
        
    
3.  **Review Configuration**: Verify the configuration, select **I have read and understand the billing rules**, and click **Submit**.
    

#### Classic mode

Select access point resources for the circuit from a drop-down list. This mode is for users with specific access point requirements.

1.  Log on to the [Express Connect console](https://expressconnect.console.alibabacloud.com). Click **Create Physical Connection** and select **Classic Mode** to apply for a port.
    
    **Configuration**
    
    **Description**
    
    **Region**
    
    The region where your Alibaba Cloud resources are located.
    
    **Express Connect Circuit Provider**
    
    The ISP that provides the Express Connect circuit. The available access points vary based on the ISP.
    
    **Note**
    
    If you select China Unicom, China Telecom, or China Mobile, you can use only circuits from the selected ISP. Circuits from other ISPs are not allowed. Bare optical fibers are not supported.
    
    **Access Point**
    
    Select the access point closest to your on-premises data center. For more information about how to select the nearest access point, see [Alibaba Cloud access points](/help/en/express-connect/getting-started/locations-of-access-points#section-34q-7ht-5fe).
    
    **CloudBox Device Cluster Name**
    
    Select a [CloudBox](/help/en/cloud-box/product-overview/what-is-cloudbox) device cluster. To purchase a dedicated connection port for CloudBox, contact your account manager to request permissions.
    
    **Port Type**
    
    You can select **100GE single-mode optical port**, **40GE single-mode optical port**, **GE single-mode optical port**, or **10GE single-mode optical port**.
    
    -   Alibaba Cloud-side port:
        
        -   By default, Alibaba Cloud provides single-mode optical transceivers for 1 Gbps, 10 Gbps, 40 Gbps, and 100 Gbps ports. These transceivers support a transmission distance of 10 km.
            
        -   Only **dual-fiber** connections are supported.
            
    -   Customer-side port requirements: You must purchase your own optical transceivers. Ensure that their specifications match those of the Alibaba Cloud-side optical transceivers.
        
    
    **Advanced Configuration**
    
    Click **Advanced Configuration**. You can select **VBR Bandwidth Limits**, **IPv6**, **BFD**, **MPBGP**, **MPBGP-v6**, **QOS**, and **VBR-HA**.
    
    If the backend resources do not have ports with the advanced capabilities that you select, the creation fails.
    
    **Advanced capabilities**
    
    -   **VBR Throttling:** This feature supports bandwidth throttling at the VBR level to prevent a single VBR from consuming excessive traffic and causing abnormal port utilization.
        
    -   **IPv6:** Physical ports support IPv6 traffic transmission, which allows IPv6 dedicated connection communication between on-premises data centers and VPCs in the cloud.
        
    -   **BFD:** This feature supports the detection of direct link connectivity between physical ports and peer devices (such as optical fiber breaks and optical module failures).
        
    -   **MPBGP**: This is an extension of the BGP protocol that supports the transmission of multi-protocol routing information in BGP sessions.
        
    -   **MPBGP-v6**: This is an extension of the MPBGP protocol that supports the transmission of IPv6 routing information in BGP sessions.
        
    -   **QoS**: [QoS policies](/help/en/express-connect/user-guide/qos-policy) define different priorities for different services to ensure that high-priority services can obtain the required bandwidth first.
        
    -   **VBR-HA**: This feature allows you to configure two VBRs as a [failover group](/help/en/express-connect/user-guide/configure-a-failover-group). When BFD detects a link failure, traffic is automatically switched to the backup VBR, achieving sub-second switching and smooth service transition.
        
    
    **Resource Group**
    
    Resource group: Select an existing resource group to manage physical ports by group.
    
    **Tag Key**
    
    Tag key and value: Select existing tag keys and tag values, or enter new tag keys and tag values. You can bind specific tags to physical port instances for categorized management.
    
    **Tag Value**
    
2.  Select the billing rule and click **OK**.
    
    **Note**
    
    After the Express Connect circuit is installed and payment is complete, the **Port Status** of the dedicated connection port changes to **Up**. Before payment, the **Port Status** is **Down**.
    

#### Recommend mode

Based on the zone where your cloud resources are located, this mode recommends the access point with the lowest latency to that zone.

> Latency data is for reference only. Always validate with your own benchmarks.

1.  You can log on to the [Express Connect console](https://expressconnect.console.alibabacloud.com), click **Request Physical Port**, and select **Recommended Mode**.
    
    **Note**
    
    The latency data is for reference only. The actual latency may vary. We recommend that you perform your own tests.
    
    **Parameter**
    
    **Description**
    
    **Access point selection method**
    
    Select an access point in one of the following ways.
    
    -   **System Recommended**: The system calculates the latency from each access point to the specified zone in the selected region. By default, the system recommends the access point with the lowest latency.
        
    -   **Manual Selection**: After you select a region for the access point, the system calculates the average latency from each access point to each zone in that region. The results are displayed on a visualization dashboard.
        
    
    **Region of cloud resources**
    
    Select the region where your Alibaba Cloud resources are located.
    
    **Note**
    
    This parameter takes effect only when you set **Access point selection method** to **System Recommended**.
    
    **Zone of cloud resources**
    
    Select the zone where your Alibaba Cloud resources are located.
    
    **Note**
    
    This parameter takes effect only when you set **Access point selection method** to **System Recommended**.
    
    **Select access point**
    
    The system calculates the latency from each access point to the specified zone in the selected region. The access points are sorted by latency in ascending order. By default, the access point with the lowest latency is selected. You can select an access point that meets your latency requirements.
    
    **Note**
    
    -   This parameter takes effect only when you set **Access point selection method** to **System Recommended**.
        
    -   In the **Trend** column of the access point latency list, click the icon to view historical latency data for a specified or custom time range.
        
    
    **Latency dashboard**
    
    After you select a region for the access point, the system calculates the average latency from each access point to each zone in that region.
    
    In the right-side pane, you can turn on **Show Latency**, click to select a suitable access point, and view the **Information about the selected access point**.
    
    **Note**
    
    -   This parameter takes effect only when you set **Access point selection method** to **Manual Selection**.
        
    -   In the **Trend** column of the access point latency list, click the icon to view historical latency data for a specified or custom time range.
        
    
    **Port type**
    
    You can select **100GE single-mode optical port**, **40GE single-mode optical port**, **GE single-mode optical port**, or **10GE single-mode optical port**.
    
    -   **Alibaba Cloud-side port requirements**:
        
        -   By default, Alibaba Cloud provides 1 Gbps, 10 Gbps, 40 Gbps, and 100 Gbps single-mode optical transceiver modules with a transmission distance of 10 kilometers.
            
        -   Only **dual-core** connections are supported.
            
    -   **Customer-side port requirements**: Purchase your own optical transceiver modules. Ensure that the specifications match those of the Alibaba Cloud-side modules.
        
    
    **Advanced Configuration**
    
    Click **Advanced Configuration**. You can select **VBR Bandwidth Limits**, **IPv6**, **BFD**, **MPBGP**, **MPBGP-v6**, **QOS**, and **VBR-HA**.
    
    If the backend resources do not have ports with the advanced capabilities that you select, the creation fails.
    
    **Advanced capabilities**
    
    -   **VBR Throttling:** This feature supports bandwidth throttling at the VBR level to prevent a single VBR from consuming excessive traffic and causing abnormal port utilization.
        
    -   **IPv6:** Physical ports support IPv6 traffic transmission, which allows IPv6 dedicated connection communication between on-premises data centers and VPCs in the cloud.
        
    -   **BFD:** This feature supports the detection of direct link connectivity between physical ports and peer devices (such as optical fiber breaks and optical module failures).
        
    -   **MPBGP**: This is an extension of the BGP protocol that supports the transmission of multi-protocol routing information in BGP sessions.
        
    -   **MPBGP-v6**: This is an extension of the MPBGP protocol that supports the transmission of IPv6 routing information in BGP sessions.
        
    -   **QoS**: [QoS policies](/help/en/express-connect/user-guide/qos-policy) define different priorities for different services to ensure that high-priority services can obtain the required bandwidth first.
        
    -   **VBR-HA**: This feature allows you to configure two VBRs as a [failover group](/help/en/express-connect/user-guide/configure-a-failover-group). When BFD detects a link failure, traffic is automatically switched to the backup VBR, achieving sub-second switching and smooth service transition.
        
    
    **Resource group**
    
    Resource group: Select an existing resource group to manage physical ports by group.
    
    **Tag key**
    
    Tag key and value: Select existing tag keys and tag values, or enter new tag keys and tag values. You can bind specific tags to physical port instances for categorized management.
    
    **Tag value**
    
2.  Select the billing rule and click **OK**.
    

**Note**

After the Express Connect circuit is installed and payment is complete, the **Port Status** of the port changes to **UP**. Before payment, the **Port Status** is **Down**.

### Step 3: Apply for and download the LOA

A Letter of Authorization (LOA) grants construction personnel access to the Alibaba Cloud colocation facility for circuit installation. Workers must present the LOA to enter the facility. After each physical port is created, you must apply for an LOA for that port.

1.  **Apply for the LOA**: After you submit the LOA application, Alibaba Cloud reviews it within 2 business days. Once approved, Alibaba Cloud installs and racks the optical module, preparing for on-site construction.
    
    **Note**
    
    -   If circuit adjustments or other changes require re-entry into the facility, you can submit a second LOA application.
        
    -   LOA processing, facility access, and construction timelines may be affected by holidays and network freeze policies.
        
    
    1.  On the **Physical Connection** page, find the port and click **Apply for LOA**.
        
    2.  In the **Apply For LOA** panel, enter the following information and click **OK**.
        
        **Parameter**
        
        **Description**
        
        **Company Name**
        
        For a corporate account, enter the company name specified when the Alibaba Cloud account was created.
        
        For an individual account, enter the name of the Alibaba Cloud account owner.
        
        **Construction Company That Enters Data Centers of Alibaba Cloud**
        
        The name of the construction company, typically the connectivity provider or IDC operator.
        
        **Leased Line Type**
        
        You can select **MSTP**, **MPLSVPN**, **Fiber Connection**, or **Others**.
        
        **Construction Schedule**
        
        The time when the construction company will enter the data center.
        
        **Customer Data Center Location**
        
        The location of the data center.
        
        **Leased Line Bandwidth**
        
        Enter the bandwidth value specified in your Express Connect circuit contract.
        
        **Note**
        
        The bandwidth value here is only used as a reference for Alibaba Cloud service configuration. Your actual fees and bandwidth limit are based on the contract you signed with the carrier. Please fill in the actual contract bandwidth.
        
        **Add Field Engineer**
        
        Click **Add Field Engineer** to add information about the personnel who need to enter the Alibaba Cloud data center for construction. You can specify one or more field engineers.
        
        **Important**
        
        The field engineer information is required.
        
        After you apply for an LOA, the **LOA Status** of the instance becomes **LOA Being Applied**. After the Alibaba Cloud reviewer approves the application within two business days, the **LOA Status** changes to **LOA Approved**.
        
    3.  Receive a text message notification and perform the following steps:
        
        **Note**
        
        You can skip this step if your access point is a [third-party data center access point](/help/en/express-connect/user-guide/optimal-disaster-recovery#748d51a31avh7), or an access point in China (Hong Kong) or an international data center.
        
        1.  Obtain an entry credential: Click the entry credential link in the text message and log on to the entry application platform. Select the data center information and **Confirm Visit**, then click **Entry Credential** to obtain the entry QR code.
            
        2.  Complete your personal information:
            
            1.  Copy the text message link to a computer browser and access the link. Read and agree to the privacy protection statement and the Alibaba Cloud data center entry agreement.
                
            2.  Fill in your personal information and click **Submit Information**. When the page displays **Submitted Successfully**, you can close the browser window.
                
2.  **Download the LOA**: After approval, download the LOA to get the access point and facility details. Alibaba Cloud determines whether the facility is a third-party site:
    
    **Third-party data center access points**
    
    Xi'an-Xixian-A, Beijing-Fengtai-A, Dalian-Pulandian-A, Changsha-Yuelu-A, Shanghai-Minhang-A, Tianjin-Jinnan-A, Shanghai-Baoshan-E, Hangzhou-Jianggan-B, Shanghai-Pudong-E-Neutral, Shanghai-Baoshan-C, Shenzhen-Nanshan-A, Beijing-Yizhuang-A, Guangzhou-Huangpu District-C, Beijing-Chaoyang-C, Qingdao-Licang-A, Shanghai-Pudong-C, Jinan-Gaoxin-A, Beijing-Haidian-A-Ali, Shenzhen-Bao'an-B, Guangzhou-Huangpu District-B, and Zhengzhou-Gaoxin-A
    
    -   **Third-party facility**: The provider takes the LOA and contacts the on-site engineer to enter the facility for a site survey.
        
    -   **Alibaba Cloud facility**: Alibaba Cloud sends an SMS. The provider obtains an access QR code, then scans it to enter the facility for a site survey or construction.
        

### Step 4: Circuit construction

The construction process varies depending on the network topology. Below are two common scenarios, depending on whether the local data center and Alibaba Cloud access point are in the same facility. For your specific setup, consult your provider.

#### In different facilities

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4590722771/CAEQQRiBgMDD99_6vRkiIDJjMTAzZDhjZTVkNzRkNjE5N2EyMWFlMjA2MTE5Mjg15261039_20250609113033.034.svg)

#### In the same facility

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4590722771/CAEQQRiBgMDBvuH6vRkiIDQzMWNkODAxMjk2MTQzYmFiYmY2YWZmYjc0YWYxZWRj5261039_20250609113033.034.svg)

**Construction steps:**

1.  **Provider site survey**: Alibaba Cloud assists site survey personnel in completing the on-site inspection within 2 business days. Contact your provider to confirm end-to-end costs. For pricing details, see [Billing overview](/help/en/express-connect/product-overview/billing-overview/#concept-ekt-hyq-ydb).
    
    **Note**
    
    -   **Chinese Mainland**: The survey team must apply for access to the Alibaba Cloud private cage within the facility.
        
    -   **Outside** **Chinese Mainland**: The construction team only needs to request access to the provider's Meet-Me Room from the facility operator. Access to the Alibaba Cloud private cage is not required.
        
    
    Key items to verify during the site survey:
    
    -   **Equipment specifications**
        
        -   Confirm optical module specifications, including transmission rate, wavelength, and distance.
            
        -   Determine cable type and connector specifications, including single-mode fiber (SMF), multi-mode fiber (MMF), and connector type (e.g., LC-LC).
            
    -   **Physical cabling plan**
        
        -   Identify the exact rack and position for cable termination.
            
        -   Confirm cable routing paths.
            
        -   Verify actual cable distances and related parameters.
            
    -   **Safety requirements**: Confirm whether the facility requires anti-static measures such as ESD wrist straps.
        
    -   **Operational procedures**: Confirm any facility-specific operational procedures.
        
2.  **On-site installation**: Provider construction personnel install the dedicated circuit to the equipment outside the Alibaba Cloud private cage, following the site survey plan.
    
3.  **In-building patch cable procurement**: The facility operator procures in-building patch cables. You pay the facility operator for in-building cable rental.
    
4.  **In-building construction at the facility**:
    
    1.  In-building construction covers equipment deployment and configuration, fiber laying, cross-connection and optical power testing, network connectivity, bandwidth and SLA testing to ensure reliable operation. This spans the full lifecycle of physical deployment, link validation, compliance management, and operational assurance.
        
    2.  After construction is complete, obtain the circuit test report from the construction team, and get the provider's circuit ID, in-building cable labels, or patch panel port information from the provider.
        
5.  **Report completion**: Click **Confirm Delivery** in the console. An Alibaba Cloud on-site engineer connects the dedicated circuit to the designated physical port in the Alibaba Cloud facility, completing the patch cable installation.
    
    > Patch cable installation takes up to 2 business days for facilities in mainland China and up to 3 business days for facilities outside mainland China.
    
6.  **Pay the port reservation fee**: After patch cable installation, pay the **Port resource usage fee** in the Express Connect console. Once the instance status changes to **Available**, the physical connection is active.
    

### Step 5: Connect to your VPC

After the physical port is activated, create a Virtual Border Router (VBR) based on the physical port, then use Express Connect Router (ECR) and Transit Router (TR) to connect your on-premises IDC to your cloud VPCs. For detailed steps, see [Connect a data center to the cloud over active/standby circuits using ECR](/help/en/express-connect/use-cases/the-local-idc-can-use-ecr-to-access-the-cloud)。

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4590722771/CAEQTxiBgICR.d._1BkiIDVkNWRmNmQzZjk1NjQ0OWJiMzAyOGUxOWZlNjBkZWYx4122902_20231220095134.007.svg)

## Manage physical connections

### **Modify the O&M information**

1.  Log on to the [Express Connect console](https://expressconnect.console.alibabacloud.com) and select the region.
    
2.  In the **Actions** column, click  **![ellipsis-v3.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7750471071/p719280.png)** > **Line O&M**. In the dialog box that appears, modify the following parameters and click **OK**.
    
    **Parameter**
    
    **Description**
    
    **Provider**
    
    The name of the ISP.
    
    **Leased Line ID/Cable ID**
    
    To obtain the ID, contact the ISP or the circuit supplier.
    
    **ODF Port Specifications**
    
    **O&M Contact Information**
    
    The contact information of the O&M personnel of the ISP.
    

### **Upgrade a physical port**

**Warning**

After you upgrade a physical port, the related data is migrated and modified. For example, the VBR that is associated with the original port is deleted. This causes temporary service interruptions. Therefore, we recommend that you back up the data before you upgrade a physical port.

1.  Perform [Step 1: Apply for a physical port](/help/en/express-connect/user-guide/optimal-disaster-recovery#ecfbb8f0cakee) to apply for a physical port that supports larger bandwidth.
    
2.  Migrate the existing configurations and connection to the new port.
    
3.  Create a VBR for the new port, create an ECR, associate the VBR and a VPC with the ECR, and then configure BGP.
    

### **Delete a physical port instance**

-   Before you delete a physical port instance, make sure that its associated [VBRs](/help/en/express-connect/user-guide/manage-connections-for-tenants) and [shared ports](/help/en/express-connect/user-guide/manage-connections-for-tenants) are deleted.
    
-   You can delete a physical port in the following states: **Rejected, Port Allocated, Pending Payment, Canceled, Disabled, or Allocation Failed**. You can check the status in the **Port Status** column.
    
    **Important**
    
    If the port instance remains active, you can find the instance and choose **![2024-06-25_13-43-02.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0605773271/p814160.png)** > **Terminate** in the **Actions** column. After a port instance is terminated, you are still charged. For more information, see [Port resource occupation fees](/help/en/express-connect/product-overview/resource-usage-fee) and [Renewal management](/help/en/express-connect/product-overview/manage-renewal#undefined). If you no longer need a physical port instance, you can [unsubscribe](/help/en/express-connect/product-overview/refund-rules) from it and release the resources.
    
-   Make sure that the [VBRs](/help/en/express-connect/user-guide/manage-connections-for-tenants#section-oii-mlh-hwo) and [shared ports](/help/en/express-connect/user-guide/manage-connections-for-tenants#section-t69-a46-zx7) are deleted on the Express Connect circuit.
    

1.  Log on to the [Express Connect console](https://expressconnect.console.alibabacloud.com) and select the region.
    
2.  Find the physical port instance and click **Delete** in the **Actions** column. In the dialog box that appears, click **OK**.
    

## APIs

-   [CreateHighReliablePhysicalConnection](/help/en/express-connect/api-vpc-2016-04-28-createhighreliablephysicalconnection-efficiency-channels): Creates an Express Connect circuit in high-reliability mode.
    
-   [CreatePhysicalConnection](/help/en/express-connect/api-vpc-2016-04-28-createphysicalconnection-efficiency-channels): Creates a connection over an Express Connect circuit.
    
-   [ApplyPhysicalConnectionLOA](/help/en/express-connect/api-vpc-2016-04-28-applyphysicalconnectionloa-efficiency-channels): Applies for an LOA.
    
-   [CompletePhysicalConnectionLOA](/help/en/express-connect/api-vpc-2016-04-28-completephysicalconnectionloa-efficiency-channels): Reports the completion of the Express Connect circuit installation.
    
-   [CreatePhysicalConnectionOccupancyOrder](/help/en/express-connect/api-vpc-2016-04-28-createphysicalconnectionoccupancyorder-efficiency-channels): Creates an order for a resource usage fee.
    
-   [ConfirmPhysicalConnection](/help/en/express-connect/api-vpc-2016-04-28-confirmphysicalconnection-efficiency-channels): Confirms that the Express Connect circuit is active.
    
-   [EnablePhysicalConnection](/help/en/express-connect/api-vpc-2016-04-28-enablephysicalconnection-efficiency-channels): Enables an Express Connect circuit.
    
-   [ModifyPhysicalConnectionAttribute](/help/en/express-connect/developer-reference/api-modifyphysicalconnectionattribute#doc-api-Vpc-ModifyPhysicalConnectionAttribute): modifies the configurations of a connection over an Express Connect circuit.
    
-   [DescribePhysicalConnections](/help/en/express-connect/developer-reference/api-describephysicalconnections#doc-api-Vpc-DescribePhysicalConnections): queries the connections over Express Connect circuits in a specific region.
    
-   [CancelPhysicalConnection](/help/en/express-connect/developer-reference/api-cancelphysicalconnection#doc-api-Vpc-CancelPhysicalConnection): cancels a connection over an Express Connect circuit before it is enabled.
    
-   [TerminatePhysicalConnection](/help/en/express-connect/developer-reference/api-terminatephysicalconnection#doc-api-Vpc-TerminatePhysicalConnection): disables a connection over an Express Connect circuit.
    
-   [DeletePhysicalConnection](/help/en/express-connect/developer-reference/api-deletephysicalconnection#doc-api-Vpc-DeletePhysicalConnection): deletes a connection over an Express Connect circuit.
    

## **FAQ**

-   Cannot connect on-premises IDC to VPC: See [Troubleshooting](/help/en/express-connect/user-guide/troubleshooting#task-2377534).
    
-   Dedicated circuit construction questions: See [FAQ about installing an Express Connect circuit](/help/en/express-connect/support/faq-about-installing-an-express-connect-circuit#concept-2375061).
    
-   Dedicated connection questions: See [FAQ about Express connection](/help/en/express-connect/support/faq-about-connections-over-express-connect-circuits#concept-gpt-1qb-12b).
    
-   Testing connection performance: See [Test the performance of an Express Connect circuit](/help/en/express-connect/use-cases/test-the-performance-of-an-express-connect-circuit#concept-fnm-bkb-ydb).
