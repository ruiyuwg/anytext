After you create a Hologres instance, you can view its information in the instance list. This topic describes the parameters, features, and related operations available on the instance list page.

## Before you begin

To perform the operations described in this topic, you must be the Alibaba Cloud account owner or a RAM user with the AliyunHologresFullAccess policy or equivalent custom permissions. For more information, see [Grant access to Hologres for RAM users](/help/en/hologres/security-and-compliance/grant-permissions-on-hologres-to-ram-users#task-1995156).

## Create an instance

To create a Hologres instance, click **Create Instance** in the upper-right corner of the **Instances** page. You are redirected to the purchase page. For more information, see [Purchase a Hologres instance](/help/en/hologres/getting-started/purchase-a-hologres-instance#task-1918224).

## Instance status reference

The **Status** column shows the current state of each instance. The following table describes each status, its cost impact, and the actions available.

Status

Description

Cost impact

Available actions

**Running**

The instance is operating normally.

Billed normally (compute + storage).

**Manage**, **Modify Instance Name**, **Upgrade**, **Downgrade**, **Restart**, **Stop** (**Pay-as-you-go** only), **Renew** (subscription only)

**Creating**

The instance is being provisioned. This typically takes 3–5 minutes.

—

None. Wait for provisioning to complete.

**Handling**

A configuration change is in progress (upgrade, downgrade, restart, or restore). This typically lasts 2–5 minutes.

Billed normally during this period.

None. Wait for the operation to complete.

**Stopped**

The instance is paused and cannot be accessed. Applies to **Pay-as-you-go** instances only.

Compute billing is suspended; storage billing continues.

**Restore**, **Delete**

## Billing method

The **Billing Method** column shows the billing method for each instance.

-   **Pay-as-you-go**: You are billed for the resources you consume. You can stop and restore the instance at any time.
    
-   subscription: You pay in advance for a fixed term. You can renew a subscription instance before the term ends.
    

In the **Billing Method** column, you can click Switch to Subscription to change an instance from **Pay-as-you-go** to subscription.

**Note**

Hologres does not currently support switching the billing method from subscription to **Pay-as-you-go**. For more information, see [Switch between billing methods](/help/en/hologres/product-overview/change-the-billing-method#concept-2043790).

## Manage an instance

Click **Manage** in the **Actions** column to open the instance management page, where you can view instance configurations and alert information, and manage users and databases. For more information, see [Instance details](/help/en/hologres/user-guide/instance-configurations#concept-2448847).

## Access development tools

You can open a development environment directly from the **Instances** page.

-   **Go to HoloWeb**
    
    Click **Go to HoloWeb** to open the HoloWeb development interface. HoloWeb is a one-stop big data development platform built on the Hologres engine that supports both visual tools and SQL. For more information, see [Log on to an instance](/help/en/hologres/user-guide/log-on-to-an-instance#task-2523198).
    
-   **Go to DataStudio**
    
    Click **Go to DataStudio** to open the DataStudio development interface. DataStudio is a one-stop development platform built on the Hologres engine and deeply integrated with DataWorks. Before you can use DataStudio, you must attach the instance to a DataWorks workspace. For more information, see [Attach a Hologres instance](/help/en/hologres/user-guide/associate-a-hologres-instance-with-a-workspace#task-2373651).
    
    **Note**
    
    HoloStudio is being integrated into DataStudio to provide a consistent development experience. For more information, see [DataWorks HoloStudio offline announcement](/help/en/dataworks/dataworks-holostudio-offline-announcement).
    

## Operations reference

The following sections describe the operations available in the **Actions** column of the **Instances** page.

### Modify an instance name

1.  In the **Actions** column, click **Modify Instance Name**.
    
2.  In the **Modify Instance Name** dialog box, enter a new name and click **OK**.
    

### Upgrade an instance

**Warning**

The service is unavailable for several minutes during an instance upgrade. We recommend that you perform the upgrade during off-peak hours to minimize the impact on your business.

If your current instance type does not meet your business requirements, you can scale out the instance.

1.  In the **Actions** column, click **Upgrade**.
    
2.  Follow the prompts to select the target instance type and confirm the upgrade.
    

For information about common issues encountered before upgrading, see [Common errors that occur when you prepare for an upgrade](/help/en/hologres/user-guide/instance-upgrades#section-32k-sdy-wpv).

### Downgrade an instance

**Warning**

The service is unavailable for several minutes during an instance downgrade. We recommend that you perform the downgrade during off-peak hours to minimize the impact on your business.

If your instance has a high number of idle resources, you can scale in the instance.

1.  In the **Actions** column, click **Downgrade**.
    
2.  Follow the prompts to select the target instance type and confirm the downgrade.
    

### Renew an instance

If your instance uses the subscription billing method, click **Renew** in the **Actions** column to extend the subscription term.

### Restart an instance

Click **Restart** in the **Actions** column to restart a **Running** instance. The instance enters **Handling** status during the restart and returns to **Running** when the operation completes.

### Stop an instance

**Note**

Only **Pay-as-you-go** instances can be stopped. Compute billing is suspended while the instance is stopped; storage billing continues.

Click **Stop** in the **Actions** column. The instance transitions to **Stopped** status.

### Restore an instance

Click **Restore** in the **Actions** column to resume a **Stopped** instance. The instance returns to **Running** status when the restore completes.

### Delete an instance

**Warning**

Deletion is irreversible. Ensure that you have backed up any data you need before proceeding.

You can only delete an instance that is in **Stopped** status.

Click **Delete** in the **Actions** column and confirm the deletion in the dialog box.

## Attach and detach read-only instances

Hologres V1.1 and later supports a multi-instance deployment solution that uses shared storage. In this solution, the primary instance has full read and write capabilities, while read-only instances are in a read-only state with all configuration changes made through the primary instance. For more information, see [Deploy primary and read-only instances for read/write splitting (shared storage)](/help/en/hologres/user-guide/configure-multi-instance-high-availability-deployment#task-2149412).

-   Limits
    
    -   Only Hologres V1.1 or later can be used as a primary instance. If your instance is earlier than V1.1, see [Common errors that occur when you prepare for an upgrade](/help/en/hologres/user-guide/instance-upgrades#section-32k-sdy-wpv) or join the Hologres DingTalk group for feedback. For more information, see [How do I get more online support?](/help/en/hologres/support/obtain-online-support-for-hologres).
        
    -   A read-only instance cannot be accessed until it is attached to a primary instance.
        
    -   The primary instance and read-only instance must be the same version.
        
    -   The primary instance and read-only instance must be in the same region.
        
-   Permissions for attaching and detaching instances
    
    You must grant the AliyunHologresFullAccess access policy to a RAM user before the user can attach or detach read-only instances. For more information about RAM permissions, see [Grant access to Hologres for RAM users](/help/en/hologres/security-and-compliance/grant-permissions-on-hologres-to-ram-users#task-1995156).
    
-   Attach a read-only instance
    
    1.  On the **Instances** page, find the target read-only instance and click **Associate** in the **Instance Type** column.
        
    2.  In the **Associate with Primary Instance** dialog box, select the primary instance and click **Associate**.
        
-   Detach a read-only instance
    
    **Note**
    
    After detaching, you cannot access the read-only instance until it is attached to a primary instance again.
    
    1.  On the **Instances** page, find the read-only instance to detach and click **Disassociate** in the **Instance Type** column.
        
    2.  In the **Note** dialog box, click **Disassociate** to confirm.
        
        After the read-only secondary instance is disassociated, you cannot access it.
        

## Next steps

-   [Instance details](/help/en/hologres/user-guide/instance-configurations#concept-2448847): View and manage instance configurations, databases, and users.
    
-   [Billing overview](/help/en/hologres/product-overview/billing-overview#concept-113666-zh): Understand how Hologres charges for compute and storage resources.
    
-   [Switch between billing methods](/help/en/hologres/product-overview/change-the-billing-method#concept-2043790): Change the billing method for your instance.
    
-   [Deploy primary and read-only instances for read/write splitting (shared storage)](/help/en/hologres/user-guide/configure-multi-instance-high-availability-deployment#task-2149412): Set up a multi-instance deployment for read/write splitting.
