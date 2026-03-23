The first time you use iTAG of Machine Learning Platform for AI (PAI), you must grant the Object Storage Service (OSS) access permissions to the service-linked role of iTAG. iTAG provides personnel roles for labeling operations, such as administrator, labeling team leader, or labeling worker. You can assign relevant roles to the RAM users you use to manage operation permissions. This topic describes how to grant permissions to an operation account, the permissions of the three labeling roles, and how to assign these roles to a RAM user.

## **iTAG personnel**

### **Permissions**

The following table describes the permissions of each role type.

**Role**

**Description**

**Permission**

Administrator

The person who requires labeling results and manages labeling jobs. An administrator creates datasets and labeling jobs, and distributes job packages to labeling team leaders or labeling workers. After the data in the job packages is labeled, the administrator reviews the labeling results and decides whether to accept or reject the job packages.

-   Access to the iTAG console as an administrator.
    
-   Access to the iTAG console as a labeling worker.
    
-   Management of labeling workforce.
    
-   Participation in all phases of labeling jobs.
    

Labeling team leader

The owner of labeling jobs and manager of labeling workers. A labeling team leader can manage the labeling workforce, and can also claim and review job packages.

-   Access to the iTAG console as a labeling worker.
    
-   Management of labeling workforce.
    
-   Participation in all phases of labeling jobs.
    

Labeling worker

The person who labels data in job packages. A labeling worker can claim and review job packages.

-   Access to the iTAG console as a labeling worker.
    
-   Participation in all phases of labeling jobs.
    

### **Assign a role**

#### **Assign a role to a RAM user**

1.  Log on to the [PAI console](https://pai.console.alibabacloud.com/).
    
2.  On the Workspace Details page of the workspace, add a RAM user as a member of the workspace. For more information, see [Manage members of a workspace](/help/en/pai/manage-the-members-of-a-workspace#task-2121366).
    
    When you add a RAM user as a workspace member, select a workspace role for the RAM user based on the iTAG role that you want to assign to the RAM user. The following table describes the mappings between the two types of roles.
    
    **iTAG role**
    
    **Workspace role**
    
    Administrator, labeling team leader, or labeling worker
    
    Administrator or labeling administrator
    
    Labeling team leader or labeling worker
    
    Any role
    
3.  In the left-side navigation pane, choose **Data Preparation****\>****iTAG**. Click **Users** to go to the **Personnel Management** tab of the **Tenant Configuration** page.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9592168271/p855318.png)
    
4.  Choose **Add Account** > **Add Account**.
    
5.  In the **Add Account** dialog box, select the RAM user, set **Role** for the user, and then click **OK**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9592168271/p845810.png)
    

#### **Assign a role to another Alibaba cloud account**

**Note**

You can assign only the labeling team leader or labeling worker role to another Alibaba Cloud account.

1.  In the left-side navigation pane, choose **Data Preparation****\>****iTAG**. Click **Users** to go to the **Personnel Management** tab of the **Tenant Configuration** page.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9592168271/p855318.png)
    
2.  Choose **Add Account** > **Add Contractor Account**.
    
3.  In the **Add Contractor Account** dialog box, specify **Alias**, **UID**, and **Role** and click **OK**.
    
    For more information about how to obtain the **UID** of an Alibaba Cloud account, see [Service endpoints](/help/en/functioncompute/fc-2-0/developer-reference/endpoints#section-g8t-lpd-nw1).
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9592168271/p845819.png)
    

## **FAQ**

### **Q: Why can't I find my RAM user when adding an internal account to a workspace?**

Add the RAM user as a member of the current PAI workspace. The user will then appear in the list. For more information, see [Manage a workspace](/help/en/pai/user-guide/create-and-manage-workspaces#abbacbe7a0rvl) > Configure member roles

### **Q: How do I add users from other companies or individuals as annotators?**

To assign the annotator role to users from other companies or individuals, follow the steps in [Assign a role](#title-048-2yd-suc) > **Add roles for other Alibaba Cloud accounts**.

### **Q: Can annotators download raw data?**

To ensure data security, the iTAG platform does not provide a direct download feature for annotators. Data access permissions are determined by the access control policy of the storage location, such as OSS. Configure the OSS access policy to manage data access.
