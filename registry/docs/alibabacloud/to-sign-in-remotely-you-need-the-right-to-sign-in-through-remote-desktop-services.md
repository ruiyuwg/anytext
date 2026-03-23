## Cause

This error is typically caused by misconfigured the User Rights Assignment policy. The main reasons include:

-   **Policy denial**: The **Deny log on through Remote Desktop Services** policy explicitly blocks the target user.
    
-   **Insufficient permissions**: The target user is not in an authorized remote logon group, such as `Remote Desktop Users` or `Administrators`.
    

## Solution

**Important**

Before modifying any permission settings, we recommend [creating a snapshot](/help/en/ecs/user-guide/create-a-snapshot#concept-eps-gbl-xdb) to back up your data. This prevents data loss and system lockout in case of a configuration error. Creating a snapshot incurs charges. For more information, see [Snapshot Billing](/help/en/ecs/snapshots-1).

### Step 1: Check the deny policy

A deny policy takes precedence over an allow policy. First, check if the user is explicitly denied remote logon rights.

1.  Log on to an ECS instance using a VNC connection.
    
    1.  Go to [ECS console - Instance](https://ecs.console.alibabacloud.com/server/region). In the top navigation bar, select the target region and resource group.
        
    2.  Go to the details page of the target instance. Click **Connect** and select **VNC**. Enter the username and password to log on to the ECS instance.
        
2.  Search for and open **Local Security Policy**.
    
3.  In the left navigation pane, expand **Local Policies** > **User Rights Assignment**.
    
4.  In the list on the right, find and double-click **Deny log on through Remote Desktop Services**.
    
5.  Check if the target user is in the list. If so, select the user, click **Remove**, then click **OK**.
    

### Step 2: Check the allow policy

Ensure the specified user groups have the correct remote logon rights.

1.  Search for and open **Local Security Policy**.
    
2.  In the left navigation pane, expand **Local Policies** > **User Rights Assignment**.
    
3.  Double-click the **Allow log on through Remote Desktop Services** policy.
    
4.  Confirm that the list contains the following user groups. If a group is missing, click **Add User or Group**, enter the group name, then click **OK**.
    
    -   `Administrators`
        
    -   `Remote Desktop Users`
        

### Step 3: Check user group membership

Verify that the target user belongs to an authorized group. This allows the user to inherit remote logon permissions.

1.  Search for `lusrmgr.msc` and open **Local Users and Groups (Local)**.
    
2.  In the left navigation pane, click **Users**.
    
3.  In the user list on the right, find and double-click the user who cannot log on.
    
4.  In the user properties dialog box, click the **Member Of** tab.
    
5.  Confirm that the user is a member of the `Remote Desktop Users` or `Administrators` group. If not, click **Add** to add the user to the `Remote Desktop Users` group.
    
    > Users in the `Administrators` group have full control over the system. To enhance security, add non-administrative users to the `Remote Desktop Users` group instead of the `Administrators` group.
    

### Step 4: Verify the configuration

Open a Remote Desktop client and connect to the Windows instance using the target user's credentials. Verify that the issue is resolved.
