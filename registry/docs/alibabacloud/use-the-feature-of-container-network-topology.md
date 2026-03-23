The container asset overview allows you to manage security operations for clusters, containers, images, and applications visually. It displays the network topology of your containers for more efficient management. Use this feature to access up-to-date security information and network connections for your containers. This topic explains how to view overall container information.

## Scenarios

-   Compliance with classified protection requirements
    
    The network topology of your cloud assets helps you meet the standards of classified protection.
    
-   Visualization
    
    This feature offers visualization of exposed ports on the Internet and enables you to perform security operations on your assets, such as clusters, containers, images, and applications.
    

## Prerequisites

-   The Ultimate edition is bound to the servers where the target clusters are deployed.
    
    -   **Subscription:** When you [purchase a subscription instance](/help/en/security-center/user-guide/purchase-security-center#2c9cad6e39bbz) or [upgrade the edition](/help/en/security-center/product-overview/upgrade-and-downgrade-security-center#section-3s4-ehb-3ij), select **Ultimate** for **Edition**.
        
    -   **Pay-as-you-go:** When [enabling pay-as-you-go](/help/en/security-center/user-guide/purchase-security-center#5d3a3aef78bqy), select **Yes** for **Host and Container Security**, and [bind the Ultimate edition to the servers where the target cluster is located](/help/en/security-center/user-guide/authorization-number-management#53d46981942l6).
        
-   The image vulnerability information in the container asset overview is sourced from the **Container Image Scan** feature. If you want to obtain image risks, you must [enable container image scan](/help/en/security-center/user-guide/enable-container-image-scan#task-2021089) and [scan images](/help/en/security-center/user-guide/scan-images#task-1986095).
    

**Note**

If you do not enable the container image scan while using the container asset overview, you will only see server vulnerabilities and the network topology of the current cluster, and the container vulnerabilities will not be visible. To ensure the security of the container runtime environment, we recommend enabling the container image scan.

## Background

Security Center automatically refreshes the container network topology and security risk information on the **Container Asset Overview** page every minute, ensuring access to the latest updates.

## Procedure

1.  Log on to the [Security Center console](https://yundun.console.alibabacloud.com/?p=sas). In the upper-left corner of the console, select the region where the assets that you want to protect are located: **China** or **Outside China**.
    
2.  In the left-side navigation pane, choose **Assets** > **Overview**.
    
3.  On the **Overview** page, click the **Container Asset Overview** tab.
    
4.  On the **Container Asset Overview** tab, view your container assets.
    
    **No.**
    
    **Description**
    
    ①
    
    View the security score of your asset
    
    The [security score](/help/en/security-center/user-guide/asset-security-overview#section-moa-2is-or3), calculated by Security Center, reflects the overall security of your assets. A higher score indicates fewer risks.
    
    Click **Fix Now** to expand the **Security Risk** panel, where you can handle security risks in your assets.
    
    ②
    
    View the number of clusters and assets with risks
    
    The black number indicates the number of clusters, and the red number indicates the number of assets with risks.
    
    Click the **Cluster** area to go to the **Assets** > **Container** > **Cluster** tab to [view details about the clusters](/help/en/security-center/user-guide/view-security-information-about-containers#18eb5eb009fo9).
    
    ③
    
    Switch the display of the cluster network topology
    
    Click **Internet Perspective** or **Cluster Perspective** above the cluster topology to switch the display perspective.
    
    ④
    
    View the details and security status of a cluster
    
    In the cluster topology, click the required cluster. In the panel that appears, you can view the information about the cluster on the following tabs: **Cluster Information**, **Cluster Risk**, **Image Information**, and **Protection Policy**.
    
    -   **Cluster Information**
        
        View the cluster **Name** and **Cluster Type**. You can also view the numbers of the following items in the cluster: **Namespace**, **Pod**, **Work(s)**, **Application**, and **Image**.
        
    -   **Cluster Risk**
        
        View the security risks of the cluster, such as **Security Alerts**, **Baseline Risks**, and **Application Vul(s)**. Click **Details** to the right of Security Alerts. On the details page of the cluster or the vulnerability list of the image security page, [view and handle alerts](/help/en/security-center/user-guide/view-and-handle-alert-events#concept-rlc-rts-sfb), [fix vulnerabilities](/help/en/security-center/user-guide/overview-4#task-2330063), and [handle detected image risks](/help/en/security-center/user-guide/view-image-scan-results#task-2563767).
        
    -   **Image Information**
        
        View the list of images in the cluster. Click **Add Now** on the right side of an image repository that is not added to Security Center to go to the **Container Image Scan** page. On the Container Image Scan page, you can [add image repositories to Security Center](/help/en/security-center/user-guide/add-image-repositories-to-security-center#task-1986093).
        
    -   **Protection Policy**
        
        View the **Defense Details** of the cluster, including **Alerts in Previous 7 Days**, **Rules**, and **Defense Status**. Click **Create Rule** add protection policies for the cluster.
        
    
    ⑤
    
    Set the time range for displaying the cluster network topology
    
    On the **Container Asset Overview** tab, the data traffic is shown for the past seven days by default. You can customize this range by filtering the data traffic to a specific timeframe within those last seven days based on your needs.
    
    ⑥
    
    Enable or disable the container network topology for a cluster
    
    The **Container Network Topology** feature is disabled for all clusters by default.
    
    **Important**
    
    Enabling this feature uses a small amount of CPU resources and requires the collection of real-time traffic data, which increases log volume. Note that even with the **Global Log Filtering** feature enabled, traffic deduplication filtering for container visualization will not apply. As a result, enabling **Container Network Topology** will require additional log storage space. We recommend enabling this feature only for clusters whose risk status you need to monitor.
    
    To enable or disable the Container Network Topology feature:
    
    -   Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3851466471/p943244.png) or ![开关](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5370065471/p368565.png) icon on the right side of **Cluster Overview** to enable or disable **Container Network Topology** for **All clusters**.
        
    -   In the cluster topology, click the icon of the target cluster. In the **Cluster Information** tab of the panel on the right, click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3851466471/p943244.png) or ![开关](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5370065471/p368565.png) icon on the right side of **Container Network Topology** to enable or disable the **Container network topology** feature for a **Single cluster**.
        
    
    After enabling the Container Network Topology for a cluster, follow Step 5 below to view the container network topology and see the risk status of each node.
    
    ⑦
    
    Export the container asset overview
    
    Click the download ![导出](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1910303461/p368558.png) icon to export the container asset overview in the PNG format.
    
5.  If you have enabled the Container Network Topology feature for a cluster (see step ⑥ for instructions), the topology will display communication links between all containers, with applications represented as nodes. To view the container network topology for a specific cluster, click the ![图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1910303461/p368539.png) icon below the target cluster’s icon. 
    
    You can also click the cluster icon directly and select **View** on the right side of **Container Network Topology** in the **Cluster Information** tab .
    
    **Note**
    
    For very large clusters, the container asset overview is collapsed by default.
    
    -   You can enable or disable **Show only connected applications**, **Display port information**, and **Hide lines** on the left to display the network topology in the container.
        
    -   The left side of the page also displays all namespaces in the cluster. You can click the ![隐藏](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1910303461/p368596.png) or ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3851466471/p943849.png) icon on the right side of a namespace to hide or show the namespace. You can also click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3851466471/p943297.png) or ![收起](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1910303461/p368598.png) icon to expand or collapse the applications.
        
        After you expand the applications in a namespace, click an application icon in the container asset overview to view the **Pod Information**, **Image Information**, and **Network Connection** of the application.
        
        In the **Pod Information** tab, hover over a pod name to display the pod details dialog box. Click **View assets** in the dialog box to go to the **Assets** > **Container** page to view information such as vulnerability risks and alerts of the pod.![查看资产](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3851466471/p368642.png)
