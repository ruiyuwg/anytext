The anti-ransomware service in Security Center creates encrypted, isolated backups for your servers and databases. This helps you quickly recover data and ensure business continuity after a ransomware attack. This topic describes how to plan capacity, purchase anti-ransomware capacity, and complete the service authorization to enable the anti-ransomware feature.

## **Choose a billing method**

The anti-ransomware service is a value-added service that you purchase separately from the Security Center Basic Edition. You are billed for the anti-ransomware capacity that you purchase, which is dedicated storage for your backups. You are not billed for the number of servers you protect. The service supports two billing methods:

**Billing method**

**Scenarios**

**Benefits**

**Subscription**

Use for production environments with stable workloads that require long-term data backup.

Costs less than pay-as-you-go and is predictable.

**Pay-as-you-go**

Use for workloads that fluctuate, or for temporary testing and short-term backups.

Pay only for what you use. You can start and stop the service at any time with no upfront costs.

## **Estimate required capacity**

Proper capacity planning is key to ensuring continuous data protection while avoiding wasted resources.

-   **Capacity estimation method**: Four main factors affect the required backup capacity: source data size, data compression ratio, backup retention period, and data change rate.
    
    -   **First backup**: The first time a task runs, it performs a full backup. After compression, the backup data typically occupies  60% to 80% of the source file size.
        
    -   **Subsequent backups**: After the first backup, all subsequent backups are incremental. Only changed data is backed up.
        
-   **Recommended capacity formula:** Recommended capacity = (Total source data size × Compression ratio) + (Average daily data increase × Backup retention period in days).
    
    **Important**
    
    Purchase slightly more capacity than the calculated value. This provides a buffer for business growth and data fluctuations.
    
-   **Example estimation:**
    
    Assume you have a web server with 20 GB of website files and database data. The data increases by about 1 GB daily, and you want to keep backups for the last 7 days.
    
    Recommended capacity ≈ (20 GB × 70%) + (1 GB × 7 days) = 14 GB + 7 GB = 21 GB.
    

## **Purchase anti-ransomware capacity**

## Subscription

1.  **Log on and go to the purchase page**
    
    1.  Go to the [Security Center console - Protection Settings - Host Protection - Anti-ransomware](https://yundun.console.alibabacloud.com/?p=sas#/virusRob/ap-southeast-1) page. In the upper-left corner, select the region where your assets are located: **Chinese Mainland** or **Outside Chinese Mainland**.
        
    2.  Click **Buy Now** to go to the upgrade page.
        
    
    **Note**
    
    Alternatively, you can log on to the [Security Center purchase page](https://yundun.console.alibabacloud.com/?p=sas_buy#/buy) with your Alibaba Cloud account and set the billing method to **Subscription**. For more information, see [Purchase Security Center](/help/en/security-center/user-guide/purchase-security-center).
    
2.  **Configure** **Anti-ransomware** **capacity**
    
    In the **Anti-ransomware** section, set **Purchase or Not** to **Yes**, and based on your business usage, select the **Quantity** (data backup capacity).
    
3.  Click **Buy Now** and complete the payment.
    

**Note**

For more information about purchase parameters, see [Purchase Security Center](/help/en/security-center/user-guide/purchase-security-center).

## Pay-as-you-go

1.  **Log on to the console**
    
    Go to the [Security Center console - Protection Settings - Host Protection - Anti-ransomware](https://yundun.console.alibabacloud.com/?p=sas#/virusRob/ap-southeast-1) page. In the upper-left corner, select the region where your assets are located: **Chinese Mainland** or **Outside Chinese Mainland**.
    
2.  **Enable pay-as-you-go**
    
    In the pay-as-you-go activation dialog box, click **Activate Pay-as-you-go**.
    
    **Important**
    
    If you select **Set Recommended Policy**, the system automatically creates a policy to periodically back up important file paths on your existing servers. You can go to the **Anti-ransomware** page to modify the policy. For more information, see [Modify the anti-ransomware policy for a server](/help/en/security-center/user-guide/manage-an-anti-ransomware-policy-1) and [Modify the anti-ransomware policy for a database](/help/en/security-center/user-guide/manage-an-anti-ransomware-policy).
    
3.  Click **Buy Now** and complete the payment.
    

## **Complete service authorization**

For the Security Center anti-ransomware service to run correctly, it requires permission to access your cloud assets, such as ECS servers, and perform automated backup and recovery tasks. Authorization scenarios include first-time activation and granting permissions for new regions.

-   **Authorize the service during first-time activation**
    
    When you purchase or enable the anti-ransomware service for the first time, the system guides you through a one-time authorization process.
    
    -   **Procedure**: On the anti-ransomware service page, follow the prompts and click the **Authorize Now** button.
        
    -   **System behavior**: The system automatically creates all required service-linked roles and grants the basic permissions needed for the service to run.
        
-   **Grant permissions for new regions**
    
    Effective December 20, 2024, the Security Center anti-ransomware service supports ECS servers in the **China (Ulanqab)** and **China (Heyuan)** regions. Protecting data in these regions requires additional permissions.
    
    **Important**
    
    If you do not complete the authorization, you cannot use the anti-ransomware service for servers in these regions.
    
    -   **Procedure**: Follow the instructions in the **Authorize the service during first-time activation** section to complete the authorization process again in the console. The system intelligently identifies and adds any missing permissions.
        
    -   **System behavior**: The system automatically creates the service-linked role `AliyunServiceRoleForHbrMagpieBridge` and grants the least privilege required for the service to run.
        
-   **Role details**
    
    **Service-linked Role**
    
    **Associated service**
    
    **Main function**
    
    `AliyunServiceRoleForSas`
    
    Security Center
    
    Provides basic service permissions that let the anti-ransomware feature work with Security Center.
    
    `AliyunServiceRoleForHbrMagpieBridge`
    
    Cloud Backup
    
    Performs the actual data backup and recovery operations. This role is key to implementing anti-ransomware protection.
    

**Note**

For more information, see [Security Center service-linked roles](/help/en/security-center/security-and-compliance/service-linked-roles-for-security-center).

## Configure a protection policy

After you purchase anti-ransomware capacity, you must create and enable a protection policy. A recoverable backup copy of your data is created only after a backup job runs successfully.

1.  **Create a protection policy**: Define the assets to protect (servers or databases), the specific content to back up (file directories or database instances), and the backup plan (execution frequency and data retention period in days).
    
    -   Anti-ransomware for servers: [Create a protection policy and install the client](/help/en/security-center/user-guide/create-an-anti-ransomware-policy-1)
        
    -   Anti-ransomware for databases: [Create a protection policy](/help/en/security-center/user-guide/create-an-anti-ransomware-policy).
        
2.  **Verify backup status**: After the policy is created and runs, go to the **Anti-ransomware** page and click the **Backup Tasks** tab. Confirm that the backup job was successful.
    

## FAQ

### **Capacity and billing**

-   **Is the purchased capacity shared by all servers?**
    
    Yes, it is. The capacity purchased in a single region is shared by all protected assets (servers and databases) in that region.
    
-   **What happens if I run out of capacity during a backup?**
    
    The backup job fails, and the system automatically disables the related protection policy. Security Center sends you a capacity warning by internal message or notification. Until you increase your capacity or free up enough space, your data is not protected by new backups.
    
-   **How can I delete backup data to free up capacity?**
    
    On the **Anti-ransomware** page, go to the **Capacity Statistics** section and click **Release**. You can free up space in the following ways:
    
    -   Delete recoverable data versions.
        
    -   Remove protected machines from the backup policy. For more information, see [Manage servers in a protection policy](/help/en/security-center/user-guide/manage-an-anti-ransomware-policy-1#title-suj-w4i-6cw).
        
    -   Delete the protection policy. For more information, see [Manage anti-ransomware policies for servers](/help/en/security-center/user-guide/manage-an-anti-ransomware-policy-1) and [Manage anti-ransomware policies for databases](/help/en/security-center/user-guide/manage-an-anti-ransomware-policy).
        
-   **Do the Security Center Premium or Enterprise Editions include free anti-ransomware capacity?**
    
    No, they do not. Anti-ransomware capacity is a value-added service that must be purchased separately. This requirement applies to all Security Center editions, including Basic, Premium, and Enterprise.
    

### **Troubleshooting and recovery**

-   **What should I do if the anti-ransomware client has an "Abnormal" or "Offline" status after a virus infection, and data recovery fails?**
    
    This can happen if ransomware damages the server's operating system or security software. In this case, a direct data recovery might fail because the client is not functioning correctly.
    
    **Recommended recovery process (Best practice):**
    
    1.  **Restore the system using a snapshot**: Immediately use the latest available **ECS snapshot** to roll back the server. This restores the server's operating system and running environment to a healthy state. This operation also restores the anti-ransomware client to a normal working state.
        
    2.  **Recover data using the anti-ransomware service**: After the system is restored, use the anti-ransomware (data backup) feature to recover your core business files to the latest backup version, which is more recent than the snapshot.
        
-   **Why was my server infected with a virus after I enabled the anti-ransomware service?**
    
    -   **Incorrect configuration:** A protection policy was not created correctly or the server was not added to the policy. You should [configure a protection policy](#8c71e6b6a06pb) as soon as possible.
        
    -   **Client offline:** The anti-ransomware client was damaged or offline and could not provide protection. For a solution, see [Troubleshoot abnormal statuses of the anti-ransomware client and backup jobs](/help/en/security-center/user-guide/troubleshoot-the-issues-that-cause-the-abnormal-status-of-the-anti-ransomware-agent).
        
    -   **Host Protection service not purchased:** If you purchase only backup storage, the service does not include proactive defense features. It cannot provide pre-attack or in-attack anti-ransomware protection. For more information, see [Host Protection settings](/help/en/security-center/user-guide/enable-features-on-the-host-protection-settings-tab).
