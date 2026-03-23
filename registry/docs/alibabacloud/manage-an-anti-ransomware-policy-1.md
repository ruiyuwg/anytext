After you create an anti-ransomware policy, you can disable or enable it. You can also change the policy name and manage protected directories and servers. If you no longer require an anti-ransomware policy, you can delete it. This topic describes how to disable, enable, edit, and delete an anti-ransomware policy. This topic also describes how to manage the servers that are added to an anti-ransomware policy.

## Prerequisites

An anti-ransomware policy is created. For more information, see [Create an anti-ransomware policy](/help/en/security-center/user-guide/create-an-anti-ransomware-policy-1#task-2488076).

## Background information

An anti-ransomware policy takes effect on a server only when the anti-ransomware policy is enabled and the status of the Security Center agent installed on the server is normal. If the status of the anti-ransomware policy is abnormal, we recommend that you handle the exception at the earliest opportunity. For more information, see [What do I do if the status of an anti-ransomware policy is abnormal?](/help/en/security-center/user-guide/faq-about-host-protection#section-xur-pl5-2mf)

## Disable or enable an anti-ransomware policy

1.  [Log on to the Security Center console.](https://yundun.console.alibabacloud.com/?p=sas) In the top navigation bar, select the region of the asset that you want to manage. You can select **China** or **Outside China**.
    
2.  In the left-side navigation pane, choose **Protection Configuration** > **Host Protection** > **Anti-ransomware**.
    
3.  On the **Anti-ransomware for Servers** tab, find the anti-ransomware policy that you want to disable or enable and turn off or turn on the switch in the Policy Status column.
    
    -   **Disable an anti-ransomware policy**
        
        If you back up the data on your server based on the anti-ransomware policy for the first time, a large number of CPU and memory resources may be consumed. As a result, your services may be affected. To prevent resource waste and service interruption, you can turn off the switch in the **Policy Status** column to disable the anti-ransomware policy. After you disable the anti-ransomware policy, the data backup task that is running based on the policy stops. We recommend that you enable the anti-ransomware policy later during off-peak hours to back up data.
        
    -   **Enable an anti-ransomware policy**
        
        After you disable an anti-ransomware policy, you can turn on the switch in the **Policy Status** column to enable the policy.
        
    

## Edit an anti-ransomware policy

1.  [Log on to the Security Center console.](https://yundun.console.alibabacloud.com/?p=sas) In the top navigation bar, select the region of the asset that you want to manage. You can select **China** or **Outside China**.
    
2.  In the left-side navigation pane, choose **Protection Configuration** > **Host Protection** > **Anti-ransomware**.
    
3.  On the **Anti-ransomware for Servers** tab, find the anti-ransomware policy that you want to edit and click **Edit** in the Actions column.
    
4.  In the **Edit Policies** panel, configure the parameters.
    
    For more information about the parameters, see [Create an anti-ransomware policy](/help/en/security-center/user-guide/create-an-anti-ransomware-policy-1#table-4pw-i89-qb6).
    
5.  Click **OK**.
    
    Security Center runs data backup tasks based on the new anti-ransomware policy after modification.
    

## Manage servers that are added to an anti-ransomware policy

After you create an anti-ransomware policy, you can add servers to or remove servers from the anti-ransomware policy. You can also install the anti-ransomware agent on your servers or uninstall the agent from your servers.

1.  [Log on to the Security Center console.](https://yundun.console.alibabacloud.com/?p=sas) In the top navigation bar, select the region of the asset that you want to manage. You can select **China** or **Outside China**.
    
2.  In the left-side navigation pane, choose **Protection Configuration** > **Host Protection** > **Anti-ransomware**.
    
3.  On the **Anti-ransomware for Servers** tab, find the anti-ransomware policy whose servers you want to manage and click the ![展开](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6911480461/p345649.png) icon. The servers to which the anti-ransomware policy is applied are displayed.
    
4.  Manage the servers that are displayed.
    
    -   Add servers to the anti-ransomware policy
        
        When you edit the anti-ransomware policy, you can add servers to the anti-ransomware policy. For more information, see [Edit an anti-ransomware policy](#section-f2r-a8m-3la).
        
        **Note**
        
        To make sure that the anti-ransomware capacity is effectively utilized, you can add a server to only one policy. You can add a maximum of 100 servers to each anti-ransomware policy.
        
    -   Remove servers from the anti-ransomware policy
        
        **Important**
        
        After a server is removed from the anti-ransomware policy, Security Center no longer protects the server against ransomware and deletes all backup data of the server. Deleted backup data cannot be restored. Proceed with caution.
        
        If you no longer require anti-ransomware for a server, click **Delete** in the Actions column. In the message that appears, click **OK**. If you want to remove multiple servers from an anti-ransomware policy, select the servers and click **Delete** below the server list.
        
    -   Install or uninstall the anti-ransomware agent
        
        If you want to install the anti-ransomware agent on a server or uninstall the anti-ransomware agent from a server, click **Install** or **Uninstall** in the Actions column. If you want to install the anti-ransomware agent on servers or uninstall the anti-ransomware agent from servers that are added to the same anti-ransomware policy, select the servers and click **Install** or **Uninstall** below the server list.
        
        **Note**
        
        If you uninstall the anti-ransomware agent within the specified data retention period, Security Center does not delete the data that the anti-ransomware agent backs up. If you uninstall the anti-ransomware agent at the point in time that is not within the specified data retention period, Security Center deletes the backup data of the server.
        
    

## Delete an anti-ransomware policy

**Important**

After you delete an anti-ransomware policy, the data backup task that is running based on the policy stops. In addition, the backup data of all servers on which the policy takes effect is deleted. Deleted backup data cannot be restored. Proceed with caution.

1.  [Log on to the Security Center console.](https://yundun.console.alibabacloud.com/?p=sas) In the top navigation bar, select the region of the asset that you want to manage. You can select **China** or **Outside China**.
    
2.  In the left-side navigation pane, choose **Protection Configuration** > **Host Protection** > **Anti-ransomware**.
    
3.  On the **Anti-ransomware for Servers** tab, find the anti-ransomware policy that you want to delete and click **Delete** in the Actions column.
    
4.  In the message that appears, click **OK**.
