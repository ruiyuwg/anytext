You can create an SSH data source in DataWorks to enable remote host access. SSH nodes use this data source to trigger script execution on the host. For example, you can connect to an Elastic Compute Service (ECS) instance to schedule periodic scripts. This topic describes how to create an SSH data source.

## **Limitations**

-   You can create an SSH data source only in connection string mode.
    
-   SSH scheduling tasks can run only on an `exclusive resource group for scheduling`. You must to upgrade the resource group. Otherwise, the tasks may fail.
    

## **Precautions**

In standard mode workspaces, you must create separate data sources for the development and production environments. The data sources in both environments must use the same authentication mode.

-   For more information about workspace modes, see [Basic mode vs. standard mode workspaces](/help/en/dataworks/user-guide/differences-between-workspaces-in-basic-mode-and-workspaces-in-standard-mode).
    
-   For more information about data source authentication modes, see [Authentication Mode](#fa14256e4fgl7).
    

## **Prerequisites**

-   You have obtained the host address and port of the server.
    
-   You have purchased and configured an `exclusive resource group for scheduling`.
    
    SSH data sources require an `exclusive resource group for scheduling` for task development and scheduling. Prepare the resource group and ensure network connectivity to the data source. For more information, see [Use exclusive resource groups for scheduling](/help/en/dataworks/user-guide/create-and-use-an-exclusive-resource-group-for-scheduling#task-2494507) and [Network connectivity solutions](/help/en/dataworks/user-guide/establish-a-network-connection-between-a-resource-group-and-a-data-source).
    

## **Prerequisites: Permissions and configuration**

To create a data source using a RAM user or [RAM role](/help/en/dataworks/user-guide/use-a-ram-role-to-log-on-to-the-dataworks-console-and-use-dataworks), you must have one of the following permissions:

-   The RAM user or RAM role is assigned the **Project Owner**, **Workspace Administrator**, or **O&M** workspace role. For information about how to grant permissions, see [Add and manage workspace members and their role permissions](/help/en/dataworks/user-guide/manage-permissions-on-workspace-level-services#section-m3s-ots-vl3).
    
-   The RAM user or RAM role has the **AliyunDataWorksFullAccess** or **AdministratorAccess** policy attached. For information about how to grant permissions, see [Grant permissions to a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user) and [Manage permissions for a RAM role](/help/en/ram/user-guide/grant-permissions-to-a-ram-role).
    

## Entry point

1.  Go to the Data Sources page.
    
    1.  Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the top navigation bar, select the desired region. In the left-side navigation pane, choose **More** > **Management Center**. On the page that appears, select the desired workspace from the drop-down list and click **Go to Management Center**.
        
    2.  In the left-side navigation pane of the SettingCenter page, click **Data Sources**.
        
    
2.  Click **Add Data Source**, select **SSH**, and follow the on-screen instructions.
    

## **Create a data source**

On the **Create SSH Data Source** page, configure the basic settings of the data source and test the network connection.

1.  Configure basic information.
    
    Enter the data source name and other details as prompted.
    
    **Note**
    
    In standard mode workspaces, you must create separate data sources for the development and production environments. The data sources in both environments must use the same authentication mode.
    
    -   For more information about workspace modes, see [Basic mode vs. standard mode workspaces](/help/en/dataworks/user-guide/differences-between-workspaces-in-basic-mode-and-workspaces-in-standard-mode).
        
    -   For more information about data source authentication modes, see [Authentication Mode](#fa14256e4fgl7).
        
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2135272371/p798899.png)
    
    Key parameters:
    
    -   **Configuration Mode**: You can create an SSH data source only in **Connection String Mode**.
        
    -   **Authentication Mode**:
        
        #### **Host password authentication**
        
        **Parameter**
        
        **Description**
        
        **Host Address**
        
        The host address of the SSH server.
        
        **Host Port**
        
        The port of the SSH server.
        
        **Username**
        
        The username used to log on to the SSH server.
        
        **Password**
        
        The logon password of the SSH server.
        
        #### **Host SSH key authentication**
        
        **Parameter**
        
        **Description**
        
        **Host Address**
        
        The host address of the SSH server.
        
        **Host Port**
        
        The port of the SSH server.
        
        **Username**
        
        The username used to log on to the SSH server.
        
        **Private Key**
        
        The private key for SSH server logon. Upload the authentication file to authenticate the user. For information about how to manage authentication files, see [Manage third-party authentication files](/help/en/dataworks/user-guide/manage-third-party-authentication-files).
        
        **Passphrase**
        
        If the private key file is encrypted, enter the passphrase for the private key.
        
        #### **(Recommended) DataWorks SSH public key authentication**
        
        DataWorks generates a key pair for the data source. Provide the public key to the server to establish a secure connection between DataWorks and the SSH server.
        
        **Parameter**
        
        **Description**
        
        **Host Address**
        
        The host address of the SSH server.
        
        **Host Port**
        
        The port of the SSH server.
        
        **Username**
        
        The username used to log on to the SSH server.
        
        **Public Key**
        
        Click **Generate Key Pair**. The platform generates a public key for the specified username. Add this key to the host's `.ssh/authorized_keys` file before testing connectivity, or the connection will fail.
        
        **Note**
        
        -   A truststore file stores trusted certificates used to authenticate a server. For example, when you access an SSL server, the server is authenticated to ensure it is trusted.
            
        -   The generated key pair takes effect only after the data source is created. Ensure that you add the public key from the generated key pair to your host in a timely manner.
            
        -   Clicking **Generate Key Pair** while editing creates a new key. Saving invalidates the old key, potentially causing task failures.
            
        
2.  Test resource group connectivity.
    
    In the **Connection Configuration** section, test the connectivity between the data source and the `exclusive resource group for scheduling`. Tasks will fail if the resource group cannot access the data source. Ensure that the exclusive resource group for scheduling has network access to your host. For information about network connectivity solutions, see [Network connectivity solutions](/help/en/dataworks/user-guide/establish-a-network-connection-between-a-resource-group-and-a-data-source).
    
    **Note**
    
    -   SSH scheduling tasks can run only on an `exclusive resource group for scheduling`. You must to upgrade the resource group. Otherwise, the tasks may fail.
        
    -   If the connection fails, add the IP address of the resource group to the inbound rules of the server's security group. You can use the public or internal IP address of the resource group.
        
    

## **What to do next**

After the data source is created, you can perform the following operations:

-   [Data Development and Scheduling](/help/en/dataworks/user-guide/associate-data-sources-in-datastudio):
    
    Use DataStudio and Operation Center to develop and schedule SSH tasks. Select the SSH data source in an SSH node to connect to the host. Deploy the node for periodic scheduling.
    
-   [Manage Data Source](/help/en/dataworks/user-guide/add-and-manage-data-sources/#section-szb-821-wbc): Go to the Data Source page to edit or delete data sources.
    

## Related documents

For more information about how to implement load balancing and high availability (HA) for SSH nodes, see [High availability for SSH nodes with load balancing](/help/en/dataworks/user-guide/ssh-node-implements-load-balancing-and-high-availability).
