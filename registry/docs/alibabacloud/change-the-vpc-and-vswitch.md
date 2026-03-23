PolarDB for MySQL Enterprise Edition allows you to switch the Virtual Private Cloud (VPC) and vSwitch online in the original zone. The endpoint of the PolarDB for MySQL cluster remains unchanged.

If your ECS instance and the PolarDB cluster are not in the same VPC, they cannot communicate over **private** networks. To ensure optimal performance of the PolarDB cluster, make sure that the PolarDB cluster and the ECS instance are in the same VPC so that they can communicate over **private** networks.

## **Prerequisites**

Your cluster must meet the following requirements:

-   When you create the cluster, Database Edition is set to **Enterprise Edition** and Edition is set to **Cluster Edition**.
    
-   Billing Method is set to **Subscription** or **Pay-as-you-go**.
    

## **Usage notes**

-   Take the following considerations into account when you change the VPC and vSwitch:
    
    -   A transient connection that lasts for approximately 30 seconds occurs. We recommend that you perform the switchover during off-peak hours and make sure that your applications are configured to automatically reconnect to the database service.
        
    -   After the VPC and vSwitch are changed, the old endpoint information may remain in the Domain Name System (DNS) cache before the entries expires. During this time, you may fail to connect to the cluster. Restart the application or refresh the DNS cache of the host where the application resides to resolve this issue.
        
    -   This operation interrupts the connection between your cluster and Data Management (DMS) or the connection between your cluster and Data Transmission Service (DTS) for a short period of time. After your cluster is connected to the new VPC and vSwitch, the connection is automatically resumed.
        
-   When you change the VPC and vSwitch, **you can choose whether to change the VPCs and vSwitches of all endpoints**:
    
    -   If you select **No** for **Existing Endpoint Switching**, only the default VPC and default vSwitch of the cluster are changed. The VPCs and vSwitches of existing endpoints are not changed.
        
    -   If you select **Yes** for **Existing Endpoint Switching**, the default VPC and default vSwitch of the cluster are changed. The VPCs and vSwitches of existing endpoints are also changed.
        
    
    **Note**
    
    The default VPC and default vSwitch are automatically selected when you create a custom endpoint.
    

## **Change the default VPC and default vSwitch**

1.  Log on to the [**PolarDB console**](https://polardb.console.alibabacloud.com/). In the left-side navigation pane, click **Clusters**. In the upper-left corner of the page, select the region in which the cluster resides and click the ID of the cluster to go to the Basic Information page.
    
2.  On the **Basic Information** page, click **Switch** next to **Default VPC**. In the **Switch VPC** dialog box, select the VPC and vSwitch to which you want to change.
    
    **Important**
    
    If you select No for Existing Endpoint Switching, the VPCs and vSwitches of existing endpoints are not changed.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6926852471/p931090.png)
    

## **Change the VPC and vSwitch of a custom endpoint**

**Note**

You cannot switch the VPC and vSwitch of the **primary endpoint** or an **cluster endpoint** individually.

1.  Log on to the [**PolarDB console**](https://polardb.console.alibabacloud.com/). In the left-side navigation pane, click **Clusters**. In the upper-left corner of the page, select the region in which the cluster resides and click the ID of the cluster to go to the Basic Information page.
    
2.  In the **Database Connections** section, select a custom endpoint. In the **Modify Endpoint Settings** dialog box, choose **More > Edit**.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6926852471/p930999.png)![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6926852471/p931001.png)
    
3.  In the **Modify Private Endpoint** dialog box, select the VPC and vSwitch.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6926852471/p931002.png)
    

## **Specify the VPC and vSwitch when you create a custom endpoint**

1.  Log on to the [**PolarDB console**](https://polardb.console.alibabacloud.com/). In the left-side navigation pane, click **Clusters**. In the upper-left corner of the page, select the region in which the cluster resides and click the ID of the cluster to go to the Basic Information page.
    
2.  In the **Database Connections** section, click **Create Custom Cluster Endpoint**. In the **Create Custom Cluster Endpoint** dialog box, select the VPC and vSwitch.
    
    **Important**
    
    When you create a custom endpoint, the default VPC and default vSwitch of the cluster are selected by default. **If the default VPC and default vSwitch are not selected, the default VPC and default vSwitch of the cluster are changed after the custom endpoint is created.**
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6926852471/p930985.png)
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6926852471/p930984.png)
