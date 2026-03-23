This topic guides enterprise administrators who are new to Elastic Desktop Service (EDS) through deploying a basic environment for validation. The steps focus on setting up a proof-of-concept environment with standard configurations and are not intended for production deployments.

## Before you begin

-   **Account and permissions**: Have an active account.
    
-   **Costs and billing**: The resources created in this guide use the pay-as-you-go billing method. With this method, you are charged for compute and storage resources when the cloud computer is running, and only for storage resources when it is shut down. Resource usage is metered by the second and billed hourly. For more details, see [Billing overview](/help/en/wuying-workspace/product-overview/billing-overview).
    

## Procedure

### Step 1: Create a cloud computer

1.  Log on to the [Elastic Desktop Service console](https://eds.console.alibabacloud.com/).
    
    > The first time you log on, you are prompted to create a service-linked role (`AliyunServiceRoleForEDS`). This role is required for EDS to access other Alibaba Cloud resources on your behalf. Click **OK** to create it.
    
2.  In the left-side navigation pane, choose **Resources** > **Cloud Computers**.
    
3.  On the **Cloud Computers** page, click **Create Cloud Computer**.
    
4.  On the **Quick Purchase** tab, configure the cloud computer parameters. You can refer to the following recommendations:
    
    **Parameter**
    
    **Recommended Value**
    
    **Description**
    
    **Region**
    
    **Singapore**
    
    **The Region cannot be changed after the cloud computer is created.** Choose the region closest to your end users to minimize network latency.
    
    **Billing Method**
    
    **Pay-as-you-go**
    
    This method charges based on actual usage and is ideal for functional validation and scalability-required use cases.
    
    **OS**
    
    **Windows 11 Pro**
    
    \-
    
    **Type**
    
    **Basic Office** - 4 vCPUs, 8 GiB memory
    
    \-
    
    **System Disk**
    
    **80 GiB**
    
    \-
    
    **Data Disk**
    
    **0 GiB**
    
    Add a data disk later as needed to save on initial costs.
    
5.  Confirm the configuration, click **Buy Now**, and complete the payment.
    

### Step 2: Create a user and assign a cloud computer

1.  In the left-side navigation pane, choose **Users** > **Users & Organizations**.
    
2.  On the **User** tab, click **Create User**.
    
3.  Configure key user parameters.
    
    -   **User Type**: Select **User-activated**.
        
        > If you select **Administrator-activated**, you must preset passwords for users and inform them of the login credentials (the organization ID, username, and password). **Administrator-activated** is suitable for use cases where you need to manage passwords centrally.
        
    -   **Username**: Enter a unique identifier for the user, such as an employee ID or email prefix.
        
    -   **Contact Info (Email Address)**: Enter a valid email address. The system sends an email with the login credentials to this address.
        
4.  Keep the default values for the other parameters and click **Create User**.
    
5.  In the user list, find the newly created user and click **View/Assign Cloud Computer** in the **Actions** column.
    
6.  In the panel that appears, click **Assign Cloud Computer**.
    
7.  Select the cloud computer that you created in Step 1 and click **Confirm**.
    
    > After the assignment is complete, the system sends an email with the logon credentials to the user's email address.
    

### Step 3: Log on and verify the cloud computer functionality

1.  **Get logon credentials** Log on to the email account you specified in Step 2 and check the email for the following information:
    
    -   **Organization ID**: The organization ID for the cloud computer.
        
        > Another way to find the organization ID: Go to the **Users** > **Logon Settings** > **General** page in the console.
        
    -   **Username**: The username for the user you created.
        
    -   **Password**: A temporary password.
        
2.  **Install the client** Go to the [Download Alibaba Cloud Workspace Client page](https://www.alibabacloud.com/zh/product/cloud-desktop/download-client?_p_lc=1). Download and install the client version that matches your local operating system, such as Windows or macOS.
    
3.  **Log on and verify**
    
    1.  Open the Alibaba Cloud Workspace client.
        
    2.  Enter the organization ID you got and click the next icon.
        
    3.  Enter the username and password to log on.
        
    4.  On the first logon, you are required to reset your password. Follow the prompts to set a new password.
        
    5.  After you log on, a card for the cloud computer that is assigned to you appears. Double-click the card to connect. The cloud computer is initialized on the first connection.
        
4.  **Validate the functionality**
    
    After connecting to the cloud computer, verify that the following functions work properly:
    
    -   **Desktop and display**: The cloud computer displays correctly with the resolution adapting to your local screen.
        
    -   **Network connectivity**: Open a browser on the cloud computer and check Internet access.
        
    -   **Basic operations**: Check if the Start menu, taskbar, and File Explorer respond correctly.
        

If everything works well, you have deployed and provisioned a functional cloud computer. Send the [Getting started](/help/en/wtc/getting-started/end-user-quick-start) guide to your end users to help them get started.

### Clean up resources

After functionality validation, promptly release the test resources to avoid incurring unnecessary charges.

**Important**

Releasing a cloud computer permanently deletes the cloud computer and all data on its system disk. This action cannot be undone.

1.  In the left-side navigation pane, choose **Resources** > **Cloud Computers**.
    
2.  Find your test cloud computer. In the **Actions** column, click **Release**.
    
3.  In the dialog box that appears, double-check the information and click **OK**. Upon release, all related billing stops.
    

## Troubleshooting

#### Why can't I see the assigned cloud computer after logging on to the client?

Perform the following checks:

1.  **Check if the cloud computer is correctly assigned**:
    
    1.  In the top navigation bar of the console, ensure you select the correct region.
        
    2.  On the **Resources** > **Cloud Computers** page, select the **Username** filter, enter the target username, and check if a cloud computer is assigned to the user.
        
2.  **Check the organization ID**: Check if the **Organization ID** entered when logging on to the client matches the one displayed on the **Users** > **Logon Settings** > **General** page in the console.
    

#### What do I do if the error message 'Cannot connect to server '127.0.0.1'' appears?

This issue is typically caused by a network proxy or VPN on your local computer.

Solution:

1.  **Disable proxies**: Temporarily disable any network proxy or VPN applications on the local computer.
    
2.  **Reset the network**: If the problem persists, run Command Prompt (CMD) as an administrator, execute the `netsh winsock reset` command, then restart your computer.
    
3.  **Reconnect**: After the restart, try connecting to the cloud computer again.
    

## Next steps

-   Learn how to [create a custom cloud computer](/help/en/wuying-workspace/user-guide/create-a-cloud-computer-3#sc-custom-buy), including customizing network settings, compute types, and other advanced features.
    
-   Learn how to [connect to a Cloud Enterprise Network (CEN)](/help/en/wuying-workspace/user-guide/attach-to-or-detach-from-cen) to access cloud computers across different regions over a private network.
