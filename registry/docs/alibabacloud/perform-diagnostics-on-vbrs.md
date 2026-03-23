After a virtual border router (VBR) is connected to Network Intelligence Service (NIS), you can use the diagnostics feature to check the configuration and status of the VBR and obtain suggestions on how to resolve the identified anomalies. The diagnostic items include the health status, configurations, quota limit, and costs. You can also view the details of historical diagnostics.

## Prerequisites

-   NIS is activated. To activate the service, go to the [service activation page](https://common-buy-intl.alibabacloud.com/?commodityCode=netana_free_public_intl) of NIS.
    
-   The AliyunServiceRoleForNis service-linked role is created. The system automatically creates the AliyunServiceRoleForNis service-linked role the first time you perform this operation. For more information, see [Service-linked roles](/help/en/nis/security-and-compliance/service-linked-roles#concept-2136433).
    
-   A VBR is created. For more information, see [Create and manage a VBR](/help/en/express-connect/user-guide/create-and-manage-a-vbr#task-2037143).
    

## VBR diagnostics

1.  Log on to the [Express Connect console](https://expressconnect.console.alibabacloud.com).
    
2.  In the top navigation bar, select a region. In the left-side navigation pane, click **Virtual Border Routers (VBRs)**.
    
3.  On the **Virtual Border Routers (VBRs)** page, find the VBR that you want to diagnose and click **Diagnose** in the **Instance Diagnostics** column.
    
4.  In the **Instance Diagnostics** panel, view the progress, summary, and details of the diagnostic task.
    
    -   The anomalies are displayed in this panel.
        
    -   In the **Diagnostic Items** section, select **Show All Diagnostic Items**. All diagnostic items related to the VBR are displayed.
        
    
    You can also click **Go to the NIS console to view diagnostic records** in the **Instance Diagnostics** panel to go to the NIS console and view more diagnostic information.
    
    For more information about how to use the VBR diagnostics feature, see [Work with instance diagnostics](/help/en/nis/user-guide/work-with-instance-diagnostics#task-2133527).
    
5.  After you view the diagnostics information, you can click **Close**.
    

## Diagnostic items and details

**Note**

The severity levels of the issues are indicated by the following colors:

-   Blue: Critical
    
-   Red: Major
    
-   Orange: Minor
    
-   Yellow: Info
    
-   Green: Passed
    

The following table describes the diagnostic items of VBRs.

**Category**

**Diagnostic item and description**

**Health Check Diagnostics**

-   **Health Check Configuration**: checks whether health checks have been configured for the Cloud Enterprise Network (CEN) or VBR-to-VPC connection.
    
-   **Loss of Health Check Probes**: checks packet loss that occurs during health checks for the CEN or VBR-to-VPC connection.
    

**Configuration Diagnostics**

-   **Physical Port Status**: checks the status of the physical port connected to the Express Connect circuit.
    
-   **Reachability between Client IP and VBR**: checks whether the customer data center-side IP address is able to ping the Alibaba Cloud-side IP address of the VBR.
    
-   **BGP Connection Status**: checks whether the BGP neighbor status on the VBR is **Established**.
    
-   **VBR Connection Redundancy**: checks whether redundant connections are configured for the connections from the transit router and the VBR, and from the virtual private cloud (VPC) to the VBR.
    
-   **Optical Transceiver of Physical Port**: checks whether the optical transceiver of the physical port works as expected.
    

**Quota Limit Diagnostics**

-   **BGP Route Entries**: checks whether the number of BGP route entries has exceeded the upper limit on the VBR.
    
-   **VBR Packet Loss**: checks whether packet loss occurred because the VBR is overwhelmed by traffic.
    

**Cost Diagnostics**

-   **VBR Overdue Check**: checks whether the VBR has overdue payments.
    
-   **VBR-to-VPC Connection Overdue Check**: checks whether the VBR-to-VPC connection has overdue payments.
    
-   **Check for Overdue Payment of Physical Port**: checks whether the physical port associated with the VBR has overdue payments.
