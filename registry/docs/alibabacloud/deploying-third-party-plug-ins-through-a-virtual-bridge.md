The Alibaba Cloud Workspace security extension plugin is an all-in-one cloud security solution for Elastic Desktop Service (EDS) Enterprise Edition. It helps you meet the diverse security needs of your cloud computers by integrating carefully selected third-party security services, such as cloud firewall, user behavior management, data protection, and antivirus. The solution uses the virtual network bridge service for unified management, which allows for out-of-the-box, one-click deployment and full lifecycle management of security plugins. This topic describes how to deploy plugins in Alibaba Cloud Workspace using a virtual network bridge.

## Prerequisites

-   You have [created an advanced office network](/help/en/wuying-workspace/user-guide/create-or-delete-a-convenience-office-network#sc-create-advanced-network). Basic office networks do not support virtual network bridge deployment.
    
-   You have [created cloud computers](/help/en/wuying-workspace/user-guide/create-a-cloud-computer-3) and other resources in the office network, and have [assigned the resources to users](/help/en/wuying-workspace/user-guide/assign-cloud-computers-to-end-users). You must access the plugin using a cloud resource in this office network.
    

## Procedure

### **Enable the virtual network bridge service**

1.  Log on to the [EDS Enterprise console](https://eds.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Security & Audits** **>** **Security Extension Plugin**.
    
3.  In the top navigation bar, select a region.
    
4.  On the **Security Extension Plugin** page, click **Activate Virtual Network Bridge Service**. Configure the parameters as required, then click **Pay**.
    
    **Parameter**
    
    **Description**
    
    Select Office Network
    
    Select the advanced office network for which you want to enable the virtual network bridge service.
    
    **Note**
    
    Virtual network bridges are not supported for basic office networks.
    
    Tier
    
    Select a virtual network bridge service tier:
    
    -   Pro: Supports plugins such as Panabit and ABT Networks.
        
    -   Ultra: Provides higher performance and supports all plugins.
        
    
    **Note**
    
    After you activate the service, you can upgrade from Pro to Ultra. Downgrades are not supported.
    
    Subscription Duration
    
    Select a subscription duration as needed.
    
    Auto-renewal
    
    Select whether to **Enable Auto-renewal**.
    
    **Note**
    
    -   The auto-renewal period is the same as the subscription duration you select. For example, if you select a subscription duration of 6 months and enable auto-renewal, the service is automatically renewed for 6 months upon expiration.
        
    -   After you enable auto-renewal, you can go to the top navigation bar and choose **Expenses** **>** **Renewal Management**. On the **Resource Renewal** page, you can change the renewal period.
        
    
    Coupon
    
    You can use a coupon. For more information, see [Use and manage coupons](/help/en/user-center/how-to-use-coupons).
    

### **Deploy a plugin**

Before you deploy a plugin, contact the third-party service provider for technical support and to get a trial or official license. This helps ensure a better user experience.

1.  In the plugin list, find the plugin that you want to deploy and click **View Details** on its card. You are redirected to Alibaba Cloud Marketplace.
    
2.  In the upper-right corner of the page, find the contact information for the third-party service provider.
    
3.  In the plugin list, find the plugin that you want to deploy, click **Deploy Service** on its card, then click **Deploy**. The plugin is then deployed automatically. Some plugins require an authorization code during deployment, which you can get from the third-party service provider.
    
    **Note**
    
    -   Network fluctuations may occur for resources in the office network during deployment. Perform this operation during off-peak hours.
        
    -   Some plugins offer a free trial. Before deployment, contact the vendor to get a temporary or official license file.
        
    -   An office network supports only one plugin. To replace a plugin, you must first uninstall the current one before deploying the new one.
        
    

## Use the plugin

After deployment, the plugin card appears in the **Deployed Plugins** section with a status of **Deployed**. You can then access the plugin console from a cloud resource within the office network.

1.  On the plugin card, click **View Default Password** to view and copy the initial username and password. The default credentials are displayed for only 24 hours before they expire and are hidden. Change the default password immediately after you log on to the console for the first time.
    
2.  Log on to any cloud resource in the office network where the virtual network bridge is located. Use the **Console IP** displayed on the plugin card to access the plugin console.
    

## Manage the plugin

After the plugin is deployed, you can click the corresponding buttons on the plugin card to perform the following management operations:

**Important**

These operations may cause network fluctuations. Perform them during off-peak hours.

-   **Pause**: If you do not need to use the plugin temporarily, you can pause it. When a plugin is paused, traffic no longer passes through it.
    
-   **Resume**: Resumes a paused plugin.
    
-   **Restart**: If the system slows down, the service becomes unresponsive, or a temporary fault occurs, you can restart the plugin to restore normal operation.
    
-   **Stop and Uninstall**: If you no longer need the plugin or want to use a different one, click **Stop and Uninstall** to stop and uninstall it.
    

## Manage the virtual network bridge

After the virtual network bridge is deployed, you can click the corresponding buttons in the upper-right corner to perform the following management operations:

-   **Renew**: Before the virtual network bridge service expires, you can renew it to extend the service period. You can renew for 1 month, 6 months, 1 year, or 2 years.
    
-   **Upgrade Tier**: If your current virtual network bridge is the Pro tier, you can upgrade it to the Ultra tier to support more plugins. The upgrade does not affect the service expiration date.
    
-   **Stop Service**: You cannot stop the virtual network bridge service before it expires. After it expires, you can stop the service if you do not renew it.
    
-   **Reactivate**: Within 15 days after the service expires, the service and plugin data are retained. You can renew the service to resume it. The configuration remains the same as before expiration. If the service has expired for more than 15 days, it is automatically released and cannot be recovered.
    
    **Note**
    
    A renewal reminder is sent 15 days before the virtual network bridge service expires. The expiration date is displayed in red.
    

## Usage notes

-   Plugins cannot be managed across office networks or tenants.
    
-   After a plugin is deployed, it controls the traffic of all cloud resources in the advanced office network. Operations that change the plugin's status, such as deploying, pausing, restarting, stopping, or uninstalling, may cause network fluctuations. Perform these operations during off-peak hours.
    
-   An office network supports only one virtual network bridge, and a virtual network bridge supports only one plugin.
    
-   You cannot delete an advanced office network for which the virtual network bridge service is enabled.
