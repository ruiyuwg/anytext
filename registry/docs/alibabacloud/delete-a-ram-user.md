When a Resource Access Management (RAM) user is no longer needed—for example, when an employee leaves or an application is decommissioned—deactivate or delete the user to prevent unauthorized access and reduce security risks.

## **Key concepts**

-   **Deactivate:** Temporarily prevent access without removing the user.
    
-   **Delete**: Move the user to the recycle bin (not permanently removed).
    
-   **Recycle bin mechanism**: A 30-day retention period where deleted users can be restored.
    
-   **Permanently purge**: Irreversibly remove a user from the recycle bin.
    

## **Prerequisites**

Before you begin, ensure that you have:

-   Access to the RAM console as an Alibaba Cloud account owner or RAM administrator (a RAM user with the `AliyunRAMFullAccess` policy attached).
    
-   Understanding of the RAM user's current usage and dependencies.
    

## **Pre-deletion security checks**

Before deleting a RAM user, review the user's recent activities and confirm that its credentials are not in use by any systems or applications to avoid service interruptions. As a best practice, deactivate the RAM user for a monitoring period before deleting it.

### **Pre-deletion checklist**

Perform the following checks before deleting a RAM user:

#### 1\. Check AccessKey pair activities

**Why this matters:** AccessKey pairs that are actively used indicate the user may still be needed by applications or systems.

**How to check:**

-   **In the** [RAM console](https://ram.console.alibabacloud.com/): On the user details page, click the **Authentication** tab to view the **Last Used Service / Time** information for the user's AccessKey pairs.
    
-   **In the** [ActionTrail console](https://actiontrail.console.alibabacloud.com/): Search for the user's AccessKey ID on the **AccessKey Pair Audit** page to view detailed API call history.
    

#### 2\. Check console logon activities

**Why this matters:** Recent console logons indicate the user may still be actively accessing the console.

**How to check:**

-   **In the** [RAM console](https://ram.console.alibabacloud.com/): On the user details page, click the **Authentication** tab to view the **Last Console Logon** timestamp or click the **Events** tab to view detailed console activities.
    
-   **In the** [ActionTrail console](https://actiontrail.console.alibabacloud.com/): Search for the RAM user's name on the **Event Query** page to view detailed console activities.
    

#### 3\. Check service dependencies

**Why this matters:** The RAM user's credentials may be used to obtain other credentials or run tasks in other cloud services.

**How to check:**

-   **In the** [RAM console](https://ram.console.alibabacloud.com/): On the user details page, click the **Permission Audit (Beta)** tab to review the services the RAM user has accessed and when they were last accessed. For more information, see [Permission audit overview](/help/en/ram/overview-of-permissions-audit).
    

#### 4\. Back up user information (optional)

When you restore a RAM user, their permissions and group memberships are not restored. Before deleting a user, consider using the API or a script to export their policies and group memberships for backup purposes.

## **Best practice: Deactivate before deleting**

For RAM users who may no longer be active, we recommend first disabling their credentials and monitoring for **7 to 15 days**. This helps avoid unplanned outages. If no issues occur during the monitoring period, you can then proceed with deletion. This is the safest procedure for handling scenarios such as employee off-boarding or application decommissioning.

### Procedure

1.  **Deactivate the RAM user**:
    
    -   **Disable console logon**: On the ****Authentication**** tab of the RAM user details page, click **Modify Logon Settings** in the **Login Profile** section, then set **Console Access** to **Disabled**.
        
    -   **Disable AccessKey pairs**: On the **AccessKey** tab of the RAM user details page, set the status of all AccessKey pairs to **Disabled**.
        
2.  **Monitor for activity**: Monitor your applications and services for **7 to 15 days** to confirm that disabling the RAM user has not caused any service interruptions.
    
    > **What to watch for:**
    
    -   > Failed API calls or authentication errors in your applications.
        
    -   > Service interruptions or unexpected behavior.
        
    -   > Error logs mentioning the deactivated user's AccessKey ID.
        
3.  **Delete the RAM user**: If no issues are detected during the monitoring period, you can safely delete the RAM user.
    

## **Recycle bin mechanism for RAM users**

When you delete a RAM user, their status changes as follows:

**Normal user** → **Deleted** → **Recycle bin** → **Permanently purged**

To prevent accidental deletions from causing service interruptions, RAM provides a **recycle bin**. When a RAM user is deleted, they are moved to the recycle bin instead of being permanently removed.

### **Recycle bin characteristics**

**Characteristic**

**Description**

**Deletion behavior**

Deletion moves users to the recycle bin instead of permanent removal.

**Disabled state**

All access is disabled. Permissions, group memberships, and MFA device bindings are removed.

**Retention period**

RAM users are retained for **30 days** before automatic permanent purging.

**Restoration window**

You can restore or permanently purge users at any time during the 30-day period.

**Restoration limitations**

Only basic identity information is recovered. Permissions and MFA devices must be manually reconfigured.

**Quota limit**

Maximum of **1,000 RAM users**. Oldest users are automatically purged when limit is reached.

### **What happens when a RAM user is deleted**

-   **Immediate effects**:
    
    -   Console logon is disabled
        
    -   All AccessKey pairs are disabled
        
    -   All permissions are removed
        
    -   Group memberships are removed
        
    -   MFA device bindings are removed
        
-   **What is retained**:
    
    -   Basic identity information (logon name, display name, UID, creation time, and password)
        
-   **What must be reconfigured after restoration**:
    
    -   Permissions
        
    -   Group memberships
        
    -   MFA device bindings
        
    -   Remarks, mobile phone number, email address, and tags
        

## **Procedure**

### **1\. Move a RAM user to the recycle bin**

This action moves the RAM user to the recycle bin, where they will be automatically purged after 30 days. Ensure you have completed all pre-deletion security checks before proceeding.

## Console

1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Identities** > **Users**.
    
3.  On the ******Users****** page, click **Delete** in the **Actions** column for the target RAM user.
    
    Alternatively, you can select multiple RAM users and click **Delete Users** below the user list to move them to the recycle bin in a batch. This action is not recommended because it increases the risk of accidental deletion.
    
4.  In the **Delete Users** dialog box, carefully review the consequences of the deletion. Then, enter the name of the target RAM user and click **Move to Recycle Bin**.
    

## API

Call the [DeleteUser](/help/en/ram/developer-reference/api-ims-2019-08-15-deleteuser) operation to move a RAM user to the recycle bin.

**Example request:**

```
aliyun ram DeleteUser \
  --UserName "test-user"
```

**Example response:**

```
{
  "RequestId": "12345678-1234-1234-1234-123456789012"
}
```

### **2\. Manage RAM users in the recycle bin**

You can view, restore, or permanently purge RAM users in the recycle bin.

#### **View RAM users and AccessKey pairs in the recycle bin**

1.  On the ****Users**** page, click **Recycle Bin** in the upper-right corner.
    
2.  On the **Recycle Bin** page, you can perform the following actions:
    
    -   On the **Users** tab, you can view the list of RAM users in the recycle bin.
        
    -   On the **AccessKey** tab, you can view the list of AccessKey pairs in the recycle bin.
        

#### **Restore a RAM user from the recycle bin**

Use this action to restore an accidentally deleted RAM user.

**Steps:**

1.  On the ****Users**** page, click **Recycle Bin** in the upper-right corner.
    
2.  On the ****Users**** tab, find the target RAM user and click **Restore** in the **Actions** column.
    
    You can also select multiple RAM users and click **Restore Users from Recycle Bin** to restore them in a batch.
    
3.  In the **Restore Users** dialog box, click **Restore Users**.
    
4.  **Post-restoration tasks**:
    
    -   Re-grant the required permissions to the RAM user.
        
    -   Add the RAM user back to the required user groups.
        
    -   If API access is needed, recover their old AccessKey pairs from the **AccessKey** tab of the recycle bin or create new ones.
        
    -   Instruct the RAM user to re-register their MFA device.
        
    -   If necessary, re-add the RAM user's remarks, mobile phone number, email address, and tags.
        

#### **Permanently purge a RAM user from the recycle bin**

RAM users in the recycle bin are automatically purged after **30 days**. You can also manually delete a user to permanently purge them before the retention period ends.

**Steps:**

1.  On the ****Users**** page, click **Recycle Bin** in the upper-right corner.
    
2.  On the ****Users**** tab, click **Delete** in the **Actions** column for the target RAM user.
    
3.  In the **Delete User** dialog box, enter the RAM user name and click **Delete User**.
