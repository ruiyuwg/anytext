Task Hub provides automated response and orchestration. It organizes the logic of repetitive tasks for security event response into automated handling policies. This helps you efficiently perform security hardening. After you create an automated task, Task Hub runs the task in batches on your selected assets. This topic describes how to use the Task Hub feature.

## Background

You can use Task Hub to quickly create automated tasks based on the policy templates that you add. After you create a task, it automatically runs vulnerability fixes in batches on the selected server assets at the specified start time. This helps you improve the efficiency of security hardening. Currently, the batch vulnerability fixing feature in Task Hub supports fixing Linux software vulnerabilities, Windows system vulnerabilities, and Web-CMS vulnerabilities.

## **Edition requirements**

-   **Subscription service**: **Enterprise** or **Ultimate**. If your current edition is not supported, you must [upgrade](/help/en/security-center/product-overview/upgrade-and-downgrade-security-center).
    
    **Note**
    
    The server's protection edition must be set to **Enterprise** or **Ultimate**. For more information, see [Attach a protection edition to a server](/help/en/security-center/user-guide/authorization-number-management#42fe49affaj3r).
    
-   **Pay-as-you-go service:** Pay-as-you-go billing is enabled for **Vulnerability Fixing**. (If not enabled, go to [Purchase](/help/en/security-center/user-guide/purchase-security-center#5d3a3aef78bqy).)
    

## Create a task

1.  Log on to the [Security Center console](https://yundun.console.alibabacloud.com/?p=sas).
    
2.  In the navigation pane on the left, choose **System Settings** > **Playbook**.
    
3.  Optional: On the **Policy Template** tab, find the policy template that you want to add and click **Clone** in the **Actions** column.
    
4.  On the **My Policies** tab, find the policy that you want to use, and in the **Actions** column, click **Create Task**.
    
5.  On the **Create Task** page, complete the task configuration and click **Create Task**.
    
    **Configuration item**
    
    **Description**
    
    **Task Name**
    
    Enter a name for the task.
    
    **Asset List**
    
    Select the assets on which you want to run the automated task. You can select a single asset, multiple assets across groups, or an asset group. You can select assets in the following ways:
    
    -   Select a group in the **Asset Group** module to automatically select all assets in the group. You can refine your selection in the **Asset** module on the right.
        
    -   In the **Asset** module, enter an asset name, IP address, or tag to search. Fuzzy search is supported.
        
    
    Select vulnerabilities to fix
    
    Click the **Linux Software Vulnerability**, **Windows System Vulnerability**, or **Web-CMS Vulnerability** tab to select the vulnerabilities that you want to fix automatically. You can select up to 200 vulnerabilities.
    
    **Note**
    
    The vulnerability list shows only the vulnerabilities that exist on your selected assets.
    
    **Snapshot storage time**
    
    Before the task starts, Security Center creates snapshots for your assets. By default, the snapshots are stored for one day. You can change the storage duration.
    
    **Notification**
    
    Select a notification method for when the task is complete. You can configure notifications through DingTalk chatbot and email.
    
    **Execution Time**
    
    Choose to run the task immediately or at a custom time.
    
    After the task is created, a success message appears, and you are redirected to the **Task Management** page.
    

## View task details

1.  Log on to the [Security Center console](https://yundun.console.alibabacloud.com/?p=sas).
    
2.  In the navigation pane on the left, choose **System Settings** > **Playbook**.
    
3.  On the **Task Management** tab, find the target task and click **Details** in the **Actions** column to view its details.
