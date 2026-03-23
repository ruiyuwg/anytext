High-reliability mode supports the following combination types: optimal disaster recovery (apply for two access points and establish four independent dedicated connections), powerful disaster recovery (apply for two access points and establish two independent dedicated connections), development and testing (apply for one access point and establish two independent dedicated connections), and load balancing for large bandwidth (apply for multiple physical ports on the same access device). This topic describes how to apply for physical ports using different combination types of high-reliability mode.

## Prerequisites

You have [enabled outbound traffic billing](/help/en/doc-detail/274385.html#task-2092260).

## **Notes**

-   Your port configuration must support the creation of multiple ports. If the port quota is exceeded, log on to the Quota Center to [increase the quota](/help/en/express-connect/user-guide/manage-express-connect-quotas).
    
-   To apply for the Load Balancing for Large Bandwidth mode, contact your account manager.
    
-   When you purchase multiple ports, if the creation of any port fails, the entire purchase process fails. In this case, delete all the physical connection ports created in this purchase and reapply for physical ports in the corresponding mode.
    

## **Procedure**

### **Step 1: Apply for physical ports in high-reliability mode**

High-reliability mode allows you to apply for physical ports by selecting the following combination types:

## Optimal disaster recovery

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0296825071/p725790.png)

1.  Log on to the [Express Connect console](https://expressconnect.console.alibabacloud.com/), click Create Physical Connection Port, and select High Reliability Mode to apply for ports.
    
2.  Select **Optimal Disaster Recovery**, click **Next**, configure the following parameters, and then click **Next**.
    
    **Parameter**
    
    **Description**
    
    **Port Type**
    
    You can select **GE Single-Mode Optical Port** or **10 GE Single-Mode Optical Port**.
    
    **Port connection requirements**
    
    -   **Requirements for ports on the Alibaba Cloud side:**
        
        -   By default, Alibaba Cloud provides single-mode optical transceivers of the following specifications: 1 Gbit/s, 10 Gbit/s, 40 Gbit/s, and 100 Gbit/s. The data transmission distance of the transceivers is 10 kilometers.
            
        -   Only **dual-fiber** Express Connect circuits are supported.
            
    -   **Requirements for ports on the client side:** You must purchase optical transceivers for the client side. Make sure that the specifications of the optical transceivers on the client side are the same as those on the Alibaba Cloud side.
        
    
    **Advanced Configurations**
    
    Click **Advanced Configuration**. You can select **VBR Bandwidth Limits**, **IPv6**, **BFD**, **MPBGP**, **MPBGP-v6**, **QOS**, and **VBR-HA**.
    
    If the backend resources do not have ports with the advanced capabilities that you select, the creation fails.
    
    **Advanced capabilities**
    
    -   **VBR Throttling:** This feature supports bandwidth throttling at the VBR level to prevent a single VBR from consuming excessive traffic and causing abnormal port utilization.
        
    -   **IPv6:** Physical ports support IPv6 traffic transmission, which allows IPv6 dedicated connection communication between on-premises data centers and VPCs in the cloud.
        
    -   **BFD:** This feature supports the detection of direct link connectivity between physical ports and peer devices (such as optical fiber breaks and optical module failures).
        
    -   **MPBGP**: This is an extension of the BGP protocol that supports the transmission of multi-protocol routing information in BGP sessions.
        
    -   **MPBGP-v6**: This is an extension of the MPBGP protocol that supports the transmission of IPv6 routing information in BGP sessions.
        
    -   **QoS**: [QoS policies for Express Connect](/help/en/express-connect/user-guide/qos-policy) define different priorities for different services to ensure that high-priority services can obtain the required bandwidth first.
        
    -   **VBR-HA**: This feature allows you to configure two VBRs as a [failover group](/help/en/express-connect/user-guide/configure-a-failover-group). When BFD detects a link failure, traffic is automatically switched to the backup VBR, achieving sub-second switching and smooth service transition.
        
    
    **Resource Group and Tag**
    
    Resource group: Select an existing resource group to manage physical ports by group.
    
    Tag key and value: Select existing tag keys and tag values, or enter new tag keys and tag values. You can bind specific tags to physical port instances for categorized management.
    
    **Region**
    
    Select Express Connect circuit regions for access points 1 and 2. You can select two different regions.
    
    **ISP**
    
    Select connectivity providers for access points 1 and 2. Different connectivity providers support different access points.
    
    **Note**
    
    China Unicom, China Telecom, and China Mobile can use only their own dedicated connections and do not allow the use of dedicated connections provided by other carriers. Bare optical fiber access is not supported.
    
    **Access Point**
    
    Select appropriate access points for access points 1 and 2.
    
3.  Confirm the connection information, select the billing rules, and click **Submit**.
    
4.  After you select optimal disaster recovery to apply for ports, the system creates four physical port instances. Configure these four physical port instances according to [Step 2](#section-lzc-lxr-wqi) and [Step 3](#section-28l-1zc-s6y).
    
    **Note**
    
    -   After the purchase is successful, each line has no direct resource association and is identified only by the numbering in the name. For example, if you purchase two ports in Hangzhou-Xiaoshan-A and two ports in Shanghai-Baoshan-C, the four ports created are named: Hangzhou-Xiaoshan-A-PConn1, Hangzhou-Xiaoshan-A-PConn2, Shanghai-Baoshan-C-PConn1, and Shanghai-Baoshan-C-PConn2.
        
    -   If you receive an error message indicating that resources are insufficient at an access point, the port configuration exceeds the limit, or the resource port cannot meet your requirements, follow the instructions to resolve the issue.
        
    

## Powerful disaster recovery

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4807825071/p725408.png)

1.  Log on to the [Express Connect console](https://expressconnect.console.alibabacloud.com/), click **Create Physical Connection**, and select **High Reliability Mode** to apply for ports.
    
2.  Select **Powerful Disaster Recovery**, click **Next**, configure the following parameters, and then click **Next**.
    
    **Parameter**
    
    **Description**
    
    **Port Type**
    
    You can select **GE single-mode optical port** or **10 GE single-mode optical port**.
    
    **Port connection requirements**
    
    -   **Requirements for ports on the Alibaba Cloud side:**
        
        -   By default, Alibaba Cloud provides single-mode optical transceivers of the following specifications: 1 Gbit/s, 10 Gbit/s, 40 Gbit/s, and 100 Gbit/s. The data transmission distance of the transceivers is 10 kilometers.
            
        -   Only **dual-fiber** Express Connect circuits are supported.
            
    -   **Requirements for ports on the client side:** You must purchase optical transceivers for the client side. Make sure that the specifications of the optical transceivers on the client side are the same as those on the Alibaba Cloud side.
        
    
    **Advanced Configuration**
    
    Click **Advanced Configuration**. You can select **VBR Bandwidth Limits**, **IPv6**, **BFD**, **MPBGP**, **MPBGP-v6**, **QOS**, and **VBR-HA**.
    
    If the backend resources do not have ports with the advanced capabilities that you select, the creation fails.
    
    **Advanced capabilities**
    
    -   **VBR Throttling:** This feature supports bandwidth throttling at the VBR level to prevent a single VBR from consuming excessive traffic and causing abnormal port utilization.
        
    -   **IPv6:** Physical ports support IPv6 traffic transmission, which allows IPv6 dedicated connection communication between on-premises data centers and VPCs in the cloud.
        
    -   **BFD:** This feature supports the detection of direct link connectivity between physical ports and peer devices (such as optical fiber breaks and optical module failures).
        
    -   **MPBGP**: This is an extension of the BGP protocol that supports the transmission of multi-protocol routing information in BGP sessions.
        
    -   **MPBGP-v6**: This is an extension of the MPBGP protocol that supports the transmission of IPv6 routing information in BGP sessions.
        
    -   **QoS**: [QoS policies for Express Connect](/help/en/express-connect/user-guide/qos-policy) define different priorities for different services to ensure that high-priority services can obtain the required bandwidth first.
        
    -   **VBR-HA**: This feature allows you to configure two VBRs as a [failover group](/help/en/express-connect/user-guide/configure-a-failover-group). When BFD detects a link failure, traffic is automatically switched to the backup VBR, achieving sub-second switching and smooth service transition.
        
    
    **Resource Group**
    
    Select an existing resource group to manage physical ports by group.
    
    **Tag Key**
    
    Select existing tag keys and tag values, or enter new tag keys and tag values. You can bind specific tags to physical port instances for categorized management.
    
    **Tag Value**
    
    **Region**
    
    Select Express Connect circuit regions for access points 1 and 2. You can select two different regions.
    
    **Connectivity Provider**
    
    Select connectivity providers for access points 1 and 2. Different connectivity providers support different access points.
    
    **Note**
    
    China Unicom, China Telecom, and China Mobile can use only their own dedicated connections and do not allow the use of dedicated connections provided by other carriers. Bare optical fiber access is not supported.
    
    **Access Point**
    
    Select appropriate access points for access points 1 and 2.
    
3.  Confirm the connection information, select the billing rules, and click **Submit**.
    
4.  After you select powerful disaster recovery to apply for ports, the system creates two physical port instances. Configure these two physical port instances according to [Step 2](#section-lzc-lxr-wqi) and [Step 3](#section-28l-1zc-s6y).
    
    **Note**
    
    -   After the purchase is successful, each line has no direct resource association and is identified only by the numbering in the name. For example, if you purchase one port in Hangzhou-Xiaoshan-A and one port in Shanghai-Baoshan-C, the two ports created are named: Hangzhou-Xiaoshan-A-PConn1 and Shanghai-Baoshan-C-PConn1.
        
    -   If you receive an error message indicating that resources are insufficient at an access point, the port configuration exceeds the limit, or the resource port cannot meet your requirements, follow the instructions to resolve the issue.
        
    

## Development and testing

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5437825071/p725456.png)

1.  Log on to the [Express Connect console](https://expressconnect.console.alibabacloud.com/), click **Apply For Physical** Port, and select **High-reliability Mode** to apply for ports.
    
2.  Select **Development And Testing**, click **Next**, configure the following parameters, and then click **Next**.
    
    **Configuration**
    
    **Description**
    
    **Port Type**
    
    You can select **GE Single-Mode Optical Port** or **10 GE Single-Mode Optical Port**.
    
    **Port connection requirements**
    
    -   **Requirements for ports on the Alibaba Cloud side:**
        
        -   By default, Alibaba Cloud provides single-mode optical transceivers of the following specifications: 1 Gbit/s, 10 Gbit/s, 40 Gbit/s, and 100 Gbit/s. The data transmission distance of the transceivers is 10 kilometers.
            
        -   Only **dual-fiber** Express Connect circuits are supported.
            
    -   **Requirements for ports on the client side:** You must purchase optical transceivers for the client side. Make sure that the specifications of the optical transceivers on the client side are the same as those on the Alibaba Cloud side.
        
    
    **Advanced Configuration**
    
    Click **Advanced Configuration**. You can select **VBR Bandwidth Limits**, **IPv6**, **BFD**, **MPBGP**, **MPBGP-v6**, **QOS**, and **VBR-HA**.
    
    If the backend resources do not have ports with the advanced capabilities that you select, the creation fails.
    
    **Advanced capabilities**
    
    -   **VBR Throttling:** This feature supports bandwidth throttling at the VBR level to prevent a single VBR from consuming excessive traffic and causing abnormal port utilization.
        
    -   **IPv6:** Physical ports support IPv6 traffic transmission, which allows IPv6 dedicated connection communication between on-premises data centers and VPCs in the cloud.
        
    -   **BFD:** This feature supports the detection of direct link connectivity between physical ports and peer devices (such as optical fiber breaks and optical module failures).
        
    -   **MPBGP**: This is an extension of the BGP protocol that supports the transmission of multi-protocol routing information in BGP sessions.
        
    -   **MPBGP-v6**: This is an extension of the MPBGP protocol that supports the transmission of IPv6 routing information in BGP sessions.
        
    -   **QoS**: [QoS policies for Express Connect](/help/en/express-connect/user-guide/qos-policy) define different priorities for different services to ensure that high-priority services can obtain the required bandwidth first.
        
    -   **VBR-HA**: This feature allows you to configure two VBRs as a [failover group](/help/en/express-connect/user-guide/configure-a-failover-group). When BFD detects a link failure, traffic is automatically switched to the backup VBR, achieving sub-second switching and smooth service transition.
        
    
    **Resource Group**
    
    Resource group: Select an existing resource group to manage physical ports by group.
    
    **Tag Key**
    
    Tag key and value: Select existing tag keys and tag values, or enter new tag keys and tag values. You can bind specific tags to physical port instances for categorized management.
    
    **Tag Value**
    
    **Region**
    
    Select an Express Connect circuit region for access point 1.
    
    **Connectivity Provider**
    
    Select a connectivity provider for access point 1. Different connectivity providers support different access points.
    
    **Note**
    
    China Unicom, China Telecom, and China Mobile can use only their own dedicated connections and do not allow the use of dedicated connections provided by other carriers. Bare optical fiber access is not supported.
    
    **Access Point**
    
    Select an appropriate access point for access point 1.
    
3.  Confirm the connection information, select the billing rules, and click **Submit**.
    
4.  After you select development and testing to apply for ports, the system creates two physical port instances. Configure these two physical port instances according to [Step 2](#section-lzc-lxr-wqi) and [Step 3](#section-28l-1zc-s6y).
    
    **Note**
    
    -   After the purchase is successful, each line has no direct resource association and is identified only by the numbering in the name. For example, if you purchase two ports in Hangzhou-Xiaoshan-A, the two ports created are named: Hangzhou-Xiaoshan-A-PConn1 and Hangzhou-Xiaoshan-A-PConn2.
        
    -   If you receive an error message indicating that resources are insufficient at an access point, the port configuration exceeds the limit, or the resource port cannot meet your requirements, follow the instructions to resolve the issue.
        
    

## Load balancing for large bandwidth

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8937825071/p725802.png)

1.  Log on to the [Express Connect console](https://expressconnect.console.alibabacloud.com/), click **Apply For Physical** Port, and select **High-reliability Mode** to apply for ports.
    
2.  Select **Load Balancing For Large Bandwidth**, click **Next**, configure the following parameters, and then click **Next**.
    
    **Configuration**
    
    **Description**
    
    **Port Type**
    
    You can select **GE Single-Mode Optical Port** or **10 GE Single-Mode Optical Port**.
    
    **Port connection requirements**
    
    -   **Requirements for ports on the Alibaba Cloud side:**
        
        -   By default, Alibaba Cloud provides single-mode optical transceivers of the following specifications: 1 Gbit/s, 10 Gbit/s, 40 Gbit/s, and 100 Gbit/s. The data transmission distance of the transceivers is 10 kilometers.
            
        -   Only **dual-fiber** Express Connect circuits are supported.
            
    -   **Requirements for ports on the client side:** You must purchase optical transceivers for the client side. Make sure that the specifications of the optical transceivers on the client side are the same as those on the Alibaba Cloud side.
        
    
    **Number Of Ports**
    
    The number of physical ports to purchase. Valid values: 2 to 16.
    
    **Advanced Configuration**
    
    Click **Advanced Configuration**. You can select **VBR Bandwidth Limits**, **IPv6**, **BFD**, **MPBGP**, **MPBGP-v6**, **QOS**, and **VBR-HA**.
    
    If the backend resources do not have ports with the advanced capabilities that you select, the creation fails.
    
    **Advanced capabilities**
    
    -   **VBR Throttling:** This feature supports bandwidth throttling at the VBR level to prevent a single VBR from consuming excessive traffic and causing abnormal port utilization.
        
    -   **IPv6:** Physical ports support IPv6 traffic transmission, which allows IPv6 dedicated connection communication between on-premises data centers and VPCs in the cloud.
        
    -   **BFD:** This feature supports the detection of direct link connectivity between physical ports and peer devices (such as optical fiber breaks and optical module failures).
        
    -   **MPBGP**: This is an extension of the BGP protocol that supports the transmission of multi-protocol routing information in BGP sessions.
        
    -   **MPBGP-v6**: This is an extension of the MPBGP protocol that supports the transmission of IPv6 routing information in BGP sessions.
        
    -   **QoS**: [QoS policies for Express Connect](/help/en/express-connect/user-guide/qos-policy) define different priorities for different services to ensure that high-priority services can obtain the required bandwidth first.
        
    -   **VBR-HA**: This feature allows you to configure two VBRs as a [failover group](/help/en/express-connect/user-guide/configure-a-failover-group). When BFD detects a link failure, traffic is automatically switched to the backup VBR, achieving sub-second switching and smooth service transition.
        
    
    **Resource Group**
    
    Resource group: Select an existing resource group to manage physical ports by group.
    
    **Tag Key**
    
    Tag key and value: Select existing tag keys and tag values, or enter new tag keys and tag values. You can bind specific tags to physical port instances for categorized management.
    
    **Tag Value**
    
    **Region**
    
    Select an Express Connect circuit region for access point 1.
    
    **Connectivity Provider**
    
    Select a connectivity provider for access point 1. Different connectivity providers support different access points.
    
    **Note**
    
    China Unicom, China Telecom, and China Mobile can use only their own dedicated connections and do not allow the use of dedicated connections provided by other carriers. Bare optical fiber access is not supported.
    
    **Access Point**
    
    Select an appropriate access point for access point 1.
    
3.  Confirm the connection information, select the billing rules, and click **Submit**.
    
4.  After you select load balancing for large bandwidth to apply for ports, the system creates multiple physical port instances. Configure these physical port instances according to [Step 2](#section-lzc-lxr-wqi) and [Step 3](#section-28l-1zc-s6y).
    
    **Note**
    
    -   After the purchase is successful, each line has no direct resource association and is identified only by the numbering in the name. For example, if you purchase two ports in Hangzhou-Xiaoshan-A, the two ports created are named: Hangzhou-Xiaoshan-A-PConn1 and Hangzhou-Xiaoshan-A-PConn2.
        
    -   If you receive an error message indicating that resources are insufficient at an access point, the port configuration exceeds the limit, or the resource port cannot meet your requirements, follow the instructions to resolve the issue.
        
    

### **Step 2: Apply for Express Connect circuit construction**

**Note**

Alibaba Cloud supports secondary LOA applications. To apply, repeat the operations in [Step 2: Apply for Express Connect circuit construction](#section-lzc-lxr-wqi).

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
    
    You can skip this step if your access point is a [third-party data center access point](#748d51a31avh7), or an access point in China (Hong Kong) or an international data center.
    
    1.  Obtain an entry credential: Click the entry credential link in the text message and log on to the entry application platform. Select the data center information and **Confirm Visit**, then click **Entry Credential** to obtain the entry QR code.
        
    2.  Complete your personal information:
        
        1.  Copy the text message link to a computer browser and access the link. Read and agree to the privacy protection statement and the Alibaba Cloud data center entry agreement.
            
        2.  Fill in your personal information and click **Submit Information**. When the page displays **Submitted Successfully**, you can close the browser window.
            

### **Step 3: Implement Express Connect circuit construction and pay the resource occupation fee**

1.  **Implement Express Connect circuit construction**
    
    1.  On the **Physical Port** page, find the instance, view, and download the LOA file.![查看LOA](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8417491471/p921478.png)
        
    2.  Based on the LOA information, contact the Express Connect circuit construction company to connect the Express Connect circuit to the equipment outside the Alibaba Cloud data center room according to the survey plan.
        
        **Note**
        
        -   Data centers in the Chinese mainland: Alibaba Cloud engineers assist the Express Connect circuit construction company in connecting the Express Connect circuit to the Alibaba Cloud data center room.
            
        -   Data centers outside the Chinese mainland: The Express Connect circuit construction company connects the Express Connect circuit to the access equipment (ODF or Patch Panel, etc.) outside the Alibaba Cloud data center room.
            
        
        The process for entering the data center room is as follows:
        
        -   **Third-party data center access points:** Submit the LOA file to the on-site engineer at least one day in advance.
            
            **Third-party data center access points**
            
            Xi'an-Xixian-A, Beijing-Fengtai-A, Dalian-Pulandian-A, Changsha-Yuelu-A, Shanghai-Minhang-A, Tianjin-Jinnan-A, Shanghai-Baoshan-E, Hangzhou-Jianggan-B, Shanghai-Pudong-E-Neutral, Shanghai-Baoshan-C, Shenzhen-Nanshan-A, Beijing-Yizhuang-A, Guangzhou-Huangpu District-C, Beijing-Chaoyang-C, Qingdao-Licang-A, Shanghai-Pudong-C, Jinan-Gaoxin-A, Beijing-Haidian-A-Ali, Shenzhen-Bao'an-B, Guangzhou-Huangpu District-B, and Zhengzhou-Gaoxin-A
            
        -   **China (Hong Kong) and international region data center access points:** Contact the on-site engineer.
            
        -   **Other data center access points:** Show the entry QR code obtained in [Step 2](/help/en/express-connect/user-guide/classic-mode#section-lzc-lxr-wqi) and enter the data center by scanning the QR code.
            
    3.  After construction is completed, obtain the Express Connect circuit test report from the construction company and contact the carrier personnel to obtain the carrier's Express Connect circuit ID, in-building cable label, or patch panel port information.
        
2.  **Alibaba Cloud fiber pigtail construction**
    
    1.  On the **Physical Connection** page, find the target instance, click **Confirm Dlivery**, enter the line information you obtained, and click **OK**. The instance status changes to **Alibaba Cloud Pigtails Connection**.
        
    2.  The Alibaba Cloud on-site engineer inserts the Express Connect circuit into the specified Express Connect circuit port in the Alibaba Cloud data center. After the connection is successful, the instance status changes to **Pay Resource Occupation Fees**.
        
        **Note**
        
        Fiber pigtail laying and Express Connect circuit port connection are completed within two business days for data centers in the Chinese mainland and within three business days for access points outside the Chinese mainland.
        
3.  **Pay the resource occupation fee**
    
    1.  On the **Physical Connection** page, find the instance and click **Pay Resource Occupation Fees**.
        
    2.  Select the subscription duration and renewal method, and click **Buy Now** to complete the payment. When the instance status becomes **Active**, the Express Connect circuit is successfully activated.
        

### **What to do next**

After the Express Connect circuit port is activated, follow the steps in [Connect an on-premises data center to a VPC through an Express Connect circuit](/help/en/express-connect/getting-started/connect-a-data-center-to-a-vpc-by-using-an-express-connect-circuit) for subsequent operations.

## **References**

For information about applying for physical ports in other modes, see:

-   [Apply for classic mode](/help/en/express-connect/user-guide/classic-mode)
    
-   [Apply for recommended mode](/help/en/express-connect/user-guide/recommend-mode)
    

For related API operations, see:

-   [CreateHighReliablePhysicalConnection](/help/en/express-connect/api-vpc-2016-04-28-createhighreliablephysicalconnection-efficiency-channels): Creates an Express Connect circuit in high-reliability mode.
    
-   [ApplyPhysicalConnectionLOA](/help/en/express-connect/developer-reference/api-applyphysicalconnectionloa#doc-api-Vpc-ApplyPhysicalConnectionLOA): Applies for an LOA.
    
-   [CompletePhysicalConnectionLOA](/help/en/express-connect/developer-reference/api-completephysicalconnectionloa#doc-api-Vpc-CompletePhysicalConnectionLOA): Completes construction.
    
-   [CreatePhysicalConnectionOccupancyOrder](/help/en/express-connect/developer-reference/api-createphysicalconnectionoccupancyorder-2#doc-api-Vpc-CreatePhysicalConnectionOccupancyOrder): Creates a resource occupation fee order.
    
-   [ConfirmPhysicalConnection](/help/en/express-connect/developer-reference/api-confirmphysicalconnection#doc-api-Vpc-ConfirmPhysicalConnection): Confirms receipt of an Express Connect circuit.
    
-   [EnablePhysicalConnection](/help/en/express-connect/developer-reference/api-enablephysicalconnection#doc-api-Vpc-EnablePhysicalConnection): Activates an Express Connect circuit.
