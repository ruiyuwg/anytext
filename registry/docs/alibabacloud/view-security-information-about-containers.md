Security Center provides integrated security for your containers. It detects and defends against vulnerabilities, configuration risks, attacks, and intrusions in real time. After you connect your container assets to Security Center, you can manage them from a centralized location. This topic describes how to view the security risks of your container assets.

## Edition requirements

-   **Subscription service**: **Ultimate** (If your current version is unsupported, you must [upgrade](/help/en/security-center/product-overview/upgrade-and-downgrade-security-center)).
    
    **Note**
    
    The server's protection edition must be set to **Ultimate**. For more information, see [Attach a protection edition to a server](/help/en/security-center/user-guide/authorization-number-management#42fe49affaj3r).
    
-   **Pay-as-you-go service:** The pay-as-you-go service is enabled for **Host and Container Security**. If not, see [Purchase](/help/en/security-center/user-guide/purchase-security-center#5d3a3aef78bqy).
    
    **Note**
    
    You must set the server protection level to **Host and Container Protection**. For more information, see [Attach a server protection level](/help/en/security-center/user-guide/authorization-number-management#53d46981942l6).
    

## Prerequisites

-   Connect your container assets to Security Center. For more information, see [Add image repositories](/help/en/security-center/user-guide/add-image-repositories-to-security-center) and [Connect a self-managed K8s cluster](/help/en/security-center/user-guide/connect-a-self-managed-kubernetes-cluster-to-security-center).
    
-   To view alerts for container cluster anomalies, you must enable K8s threat detection. For more information, see [K8s threat detection for containers](/help/en/security-center/user-guide/enable-features-on-the-container-protection-settings-tab#section-tob-6lg-8hn).
    

## Synchronize latest assets

Before you view container asset information, you must synchronize the latest asset data. This ensures that newly added container assets are displayed in the asset list.

1.  Log on to the [Security Center console](https://yundun.console.alibabacloud.com/?p=sas).
    
2.  In the navigation pane on the left, choose **Assets** > **Container**. In the upper-left corner of the console, select the region where your assets are located: **Chinese Mainland** or **Outside Chinese Mainland**.
    
3.  On the **Container** page, on the **Cluster** or **Image** tab, click ****Synchronize Assets****.
    
4.  (Optional) In the upper-right corner of the **Container** page, click **Task Management**. In the **Task Management** panel, on the **Container Asset Synchronization** and **Synchronize Image Asset** tabs, you can view the progress, status, and details of the asset synchronization.
    

## Cluster management

### **Supported cluster types**

-   Managed and dedicated clusters that are created in Alibaba Cloud Container Service for Kubernetes (ACK).
    
    Every morning, Security Center automatically performs a full synchronization of assets of this type in your Alibaba Cloud account. This eliminates the need to add assets manually. If you create new clusters, you can manually sync the latest asset information on the **Cluster** tab.
    
-   [Self-managed K8s clusters](/help/en/security-center/user-guide/connect-a-self-managed-kubernetes-cluster-to-security-center#section-azm-sk1-ztr).
    

### **View cluster information**

1.  Log on to the [Security Center console](https://yundun.console.alibabacloud.com/?p=sas).
    
2.  In the navigation pane on the left, choose **Assets** > **Container**. In the upper-left corner of the console, select the region where your assets are located: **Chinese Mainland** or **Outside Chinese Mainland**.
    
3.  On the **Container** page, on the **Cluster** tab, you can view the number of connected clusters, the number of at-risk clusters, and a list of connected clusters.
    
    ![image..png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8357120671/p682246.png)
    
    -   Search for a target cluster
        
        You can use the search component above the cluster list to search for a cluster by its ID, type, or other information.
        
    -   View risk details of a target cluster
        
        Click the name of the target cluster or **View** in the **Actions** column to open its risk details page. On this page, you can view statistics and lists of security alerts, vulnerabilities, configuration risks (K8s configuration risks and baseline risks), and container firewall alerts.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5619640671/p1014853.png)
        

### **Enable K8s log threat detection**

After you enable K8s log threat detection for a cluster, Security Center can retrieve the cluster's log data to provide more comprehensive security risk detection, such as identifying high-risk operations and attack behaviors.

-   ACK managed and dedicated clusters
    
    1.  In the Container Service console, enable the log audit feature. For more information, see [Use the cluster API server audit feature](/help/en/ack/ack-managed-and-ack-dedicated/security-and-compliance/work-with-cluster-auditing#section-olz-426-8mm).
        
        1.  Log on to the [Container Service Management console](https://cs.console.alibabacloud.com/). In the navigation pane on the left, choose **Clusters**.
            
        2.  On the **Clusters** page, click the name of the target cluster. In the navigation pane on the left, choose **Security Management** > **Audit**.
            
        3.  Follow the on-screen instructions to select an SLS project and enable the feature.
            
    2.  In the Security Center console, enable [K8s threat detection for containers](/help/en/security-center/user-guide/enable-features-on-the-container-protection-settings-tab#section-tob-6lg-8hn).
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5619640671/p1014322.png)
        
-   Self-managed K8s clusters
    
    For more information, see [Enable log threat detection](/help/en/security-center/user-guide/connect-a-self-managed-kubernetes-cluster-to-security-center#section-2gz-ibq-nb0).
    

After this feature is enabled, go to the **Container** page in the Security Center console. On the **Clusters** tab, you can check the **K8s Log Status** column for the target cluster to verify that K8s log threat detection is enabled.

### **Cluster exposure analysis**

Exposing a container port to the internet can expose your business to security risks, such as network attacks and data breaches. To prevent these risks, Security Center provides a port exposure analysis feature for container clusters that detects public port information.

**Note**

Currently, the exposure analysis feature supports only ACK managed and dedicated clusters.

1.  Perform an exposure analysis.
    
    You can perform an exposure analysis on a cluster automatically or manually:
    
    -   **Automatic exposure analysis**: After you connect a K8s cluster, Security Center automatically performs a full synchronization of cluster information and runs an exposure analysis on all connected clusters early every morning.
        
    -   **Manual exposure analysis**: On the **Cluster** tab of the **Container** page, click **Exposure Analysis** in the **Actions** column for the target cluster.
        
        ![image..png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2705258861/p682720.png)
        
2.  (Optional) In the upper-right corner of the **Container** page, click **Task Management**. On the **Container Exposure** tab of the **Task Management** panel, you can view the progress and details of the cluster exposure analysis task.
    
3.  View the results of the cluster exposure analysis.
    
    1.  On the **Container** page, click the name of the target cluster.
        
    2.  On the cluster details page, click the **Container** tab and set the **Exposed** filter to **Yes**.
        
        ![image..png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2705258861/p683438.png)
        
    3.  Move the pointer over the ![image..png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2705258861/p682729.png) icon in the **Exposed** column to view the exposed port information of the container.
        
        If a port is exposed to the internet but is not in use, close it promptly to reduce security risks.
        

## Image management

### **View image information**

1.  Log on to the [Security Center console](https://yundun.console.alibabacloud.com/?p=sas).
    
2.  In the navigation pane on the left, choose **Assets** > **Container**. In the upper-left corner of the console, select the region where your assets are located: **Chinese Mainland** or **Outside Chinese Mainland**.
    
3.  On the **Image** tab of the **Container** page, you can view the image information.
    
    ![image..png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8618824571/p682252.png)
    
    -   View overview information
        
        The Overview section displays information such as the number of at-risk images and the **Remaining Quota** for image security scans.
        
        -   In the **Remaining Quota** section, click **Increase Quota** to increase your container image security scan quota. For more information, see [Upgrade and downgrade](/help/en/security-center/product-overview/upgrade-and-downgrade-security-center).
            
        -   You can click **Add** in the **Add Third-party Image Repository** section to register private image repositories. For more information, see [Add an image repository](/help/en/security-center/user-guide/add-image-repositories-to-security-center).
            
    -   View the list of image repositories
        
        The image repository list displays all repositories that are connected to Asset Center. You can view the repository name, region, type, and risk status.
        
        -   Search for a target image repository
            
            You can use the search component above the list to search for an image repository by its instance ID, namespace, or other information.
            
        -   View a target image repository
            
            Click the name of the target image repository or click **View** in the **Actions** column. On the repository's details page, you can view information for each image, including its name, version, size, and risk status. The **Created At/Updated At** column shows the time of the first and most recent syncs by Security Center, not the local creation and update times of the image repository.
            
            On the image repository details page, find the target image repository version and click **Handle** in the **Actions** column to view or export its threat and vulnerability information.
            
        -   View image repositories of Platform for AI (PAI)
            
            You can view a list of image repositories for PAI by selecting **Tag** > **PAI** from the search filter.
            
        -   Synchronize ACR assets
            
            Click **Synchronize** in the **Actions** column of an image repository to enable automatic synchronization of assets from a Container Registry Enterprise Edition instance. Once enabled, assets added to the instance are automatically synchronized to the image list in Security Center.
            
    

### Scan container images

The image scan feature in Security Center detects image vulnerabilities, baseline risks, malicious samples, and sensitive files to help you ensure a secure image runtime environment.

1.  Log on to the [Security Center console](https://yundun.console.alibabacloud.com/?p=sas).
    
2.  In the navigation pane on the left, choose **Assets** > **Container**. In the upper-left corner of the console, select the region where your assets are located: **Chinese Mainland** or **Outside Chinese Mainland**.
    
3.  On the **Image** tab of the **Container** page, click **Scan Now** in the **Container Image Scan** section.
    
    ![image..png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8618824571/p682527.png)
    
4.  In the **Quick Scan** dialog box, select an image type, configure the scan scope as required, and then click **OK**.
    
    For more information about how to configure the scan scope, see [Perform image security scans](/help/en/security-center/user-guide/scan-images).
    
5.  (Optional) In the upper-right corner of the **Container** page, click **Task Management**. In the **Task Management** panel, on the **Image Scan**, **Image Risk Fixing**, and **Container Runtime Image Scan** tabs, you can view information about image scans and repairs.
    

## References

-   The Container Asset Overview feature provides security visualization and management capabilities for your assets, such as clusters, containers, images, and applications. It also displays the network topology of your container assets in the cloud. This feature helps you efficiently manage the security of your container assets. For more information, see [Container Asset Overview](/help/en/security-center/user-guide/use-the-feature-of-container-network-topology#task-1963548).
    
-   Security Center provides container security capabilities, such as K8s threat detection for containers and container escape prevention. You can enable these features to protect your container runtime environment. For more information, see [Container protection settings](/help/en/security-center/user-guide/enable-features-on-the-container-protection-settings-tab#task-2019696).
    
-   Container signing lets you sign container images to ensure that only trusted images are deployed. This feature prevents unauthorized images from being launched and improves your asset security. For more information, see [Container signing](/help/en/security-center/user-guide/use-the-container-signature-feature#task-2448505).
    
-   Security Center detects system vulnerabilities, application vulnerabilities, baseline risks, and malicious samples in your image assets, and then categorizes and displays the results. You can view the details of the security risks and fix them. For more information, see [View and fix detected image risks](/help/en/security-center/user-guide/view-image-scan-results#task-2563767).
    
-   The security monitoring feature of Security Center provides monitoring and alerting capabilities. It detects major attack behaviors on containers, such as malicious image startups, viruses and malware, intrusions into containers, container escapes, and high-risk operations. For more information, see [Use security monitoring](/help/en/ack/ack-managed-and-ack-dedicated/security-and-compliance/use-security-monitoring-capabilities#task-1930740).
