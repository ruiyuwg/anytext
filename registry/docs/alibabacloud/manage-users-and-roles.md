A workspace is the basic unit for collaboration among multiple roles. All development work is performed within a specific workspace. To enable collaborative development, you can add a Resource Access Management (RAM) user or a RAM role to a workspace and assign a workspace role to them based on their function.

## **Background**

The following table describes the roles and permissions that EMR Serverless Spark supports.

**Permission classification**

**Permission\\Role**

**Guest**

**DataScience**

**DataEngineering**

**Owner**

View workflows

View workflow lists, statuses, versions, topologies, details, and configurations.

✓

✓

✓

✓

View logs, outputs, and the SparkUI of workflow instance nodes.

✓

✓

✓

✓

Workflow management

Create workflows, including associating topologies, nodes, and tasks, and publishing workflows.

\-

\-

✓

✓

Delete workflows.

\-

\-

✓

✓

Create workflow nodes.

\-

\-

✓

✓

Edit workflow instance configurations.

\-

\-

✓

✓

Enable workflow scheduling.

\-

\-

✓

✓

Disable workflow scheduling.

\-

\-

✓

✓

Trigger workflows.

\-

\-

✓

✓

Node operations (rerun, set to success, stop).

\-

\-

✓

✓

Queue management

View queues.

✓

✓

✓

✓

Add queues.

\-

\-

\-

✓

Edit queues (adjust resources).

\-

\-

\-

✓

Delete queues.

\-

\-

\-

✓

Submit queues for execution.

\-

✓ (Scope: dev\_queue)

✓ (Scope: \*)

✓ (Scope: \*)

SQL sessions

View SQL sessions.

✓

✓

✓

✓

Create SQL sessions.

\-

\-

✓

✓

Edit SQL sessions.

\-

\-

✓

✓

Delete SQL sessions.

\-

\-

✓

✓

Notebook sessions

View Notebook sessions.

✓

✓

✓

✓

Create Notebook sessions.

\-

\-

✓

✓

Edit Notebook sessions.

\-

\-

✓

✓

Delete Notebook sessions.

\-

\-

✓

✓

Gateway

View gateways.

✓

✓

✓

✓

Create gateways.

\-

\-

✓

✓

Edit gateways.

\-

\-

✓

✓

Delete gateways.

\-

\-

✓

✓

Manage tokens: Create, delete, and update tokens for Livy Gateway.

\-

\-

✓

✓

Ciphertext management

View ciphertexts.

\-

✓

✓

✓

Create ciphertexts.

\-

\-

✓

✓

Delete ciphertexts.

\-

\-

✓

✓

## **Prerequisites**

-   A workspace is created. For more information, see [Manage workspaces](/help/en/emr/emr-serverless-spark/user-guide/manage-workspaces).
    
-   A RAM user is created and granted the AliyunEmrServerlessSparkReadOnlyAccess, AliyunEMRServerlessSparkDeveloperAccess, or AliyunEMRServerlessSparkFullAccess permission. For more information, see [Grant permissions to a RAM user](/help/en/emr/emr-serverless-spark/user-guide/ram-user-authorization).
    

## **Manage users**

### **Add a user**

1.  Go to the Resource Access Management page.
    
    1.  Log on to the [E-MapReduce console](https://emr.console.alibabacloud.com/#/region/cn-hangzhou/resource/all/overview).
        
    2.  In the navigation pane on the left, choose **EMR Serverless** > **Spark**.
        
    3.  On the **Spark** page, click the name of the target workspace.
        
    4.  On the **EMR Serverless Spark** page, in the navigation pane on the left, choose **Security** > **Access Control**.
        
2.  On the **User** tab of the **Access Control** page, click **Add User**.
    
3.  In the **Add User** dialog box, select the RAM users and RAM roles that you want to add, and then click **OK**.
    
    You can select one or more RAM users and RAM roles.
    

### **Remove a user**

1.  On the **User** tab of the **Access Control** page, click **Delete** in the Actions column for the target user.
    
2.  In the **Remove User** dialog box, click **Remove**.
    

## **Manage roles**

If the permissions of existing roles do not meet your business requirements, you can create a new role and grant it the required permissions.

### **Create a role and grant permissions**

1.  On the **Role** tab of the **Access Control** page, click **Create Role**.
    
2.  In the dialog box that appears, enter a **Role Name** and a **Display Name**, and then click **OK**.
    
3.  Click the name of the role that you created.
    
4.  Click **Add Authorization**.
    
5.  Select the required permissions and click **OK**.
    

### **Add users to a role**

1.  On the **Role** tab of the **Access Control** page, click **Add User** in the Actions column of the target role.
    
2.  In the **Add User** dialog box, select the users that you want to add to the role, and then click **OK**.
    

### **Remove users from a role**

1.  On the **Role** tab of the **Access Control** page, click **Remove User** in the Actions column of the target role.
    
2.  In the **Remove User** dialog box, select the users to remove from the role, and then click **OK**.
