After Secure Access Service Edge (SASE) is integrated with Resource Directory, you can use the management account of your resource directory or a delegated administrator account to add other Alibaba Cloud accounts of your enterprise as members for centralized management. This allows you to manage access permissions by using zero trust policies. This topic describes how to use the multi-account management feature.

## Prerequisites

SASE is activated.

## Procedure

Before you can use the multi-account management feature of SASE to add multiple members for centralized management, you must enable a resource directory, specify a delegated administrator account, and invite members to join the resource directory.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7284633371/CAEQMRiBgICI36zSnBkiIDk4YmQyOWYyZGJlNjQ2NTM4ZTljNDllMWNlMmU4MDY04672362_20240911170612.668.svg)

## Step 1: Enable a resource directory

The Resource Management service allows you to consolidate all your Alibaba Cloud accounts into a resource directory and move the accounts to specific folders to form a hierarchy. This way, you can manage the accounts and the resources within the accounts in a centralized manner. You must enable a resource directory before you can use the resource directory. After you enable a resource directory, the current account is specified as the management account of the resource directory and has full permissions on the resource directory. For more information, see [Enable a resource directory](/help/en/resource-management/resource-directory/user-guide/enable-a-resource-directory#task-hyc-zp1-dhb).

## Step 2: Invite members

You can invite Alibaba Cloud accounts to join your resource directory to manage them in a centralized manner. After you invite an Alibaba Cloud account to join a resource directory, the account becomes a member of the resource directory. For more information, see [Invite an Alibaba Cloud account to join a resource directory](/help/en/resource-management/resource-directory/user-guide/invite-an-alibaba-cloud-account-to-join-a-resource-directory#task-2039327).

## Step 3: Add a delegated administrator account

The management account of a resource directory can be used to specify a member in the resource directory as a delegated administrator account of a trusted service. After a member is specified as a delegated administrator account of a trusted service, the member can be used to access information about the resource directory in the trusted service. The information includes the structure and members of the resource directory. The member can also be used to manage business within the resource directory. Delegated administrator accounts allow you to separate organization management tasks from business management tasks. The enterprise management account of a resource directory is used to perform the organization management tasks of the resource directory. Delegated administrator accounts are used to perform the business management tasks of the related trusted services. For more information, see [Manage a delegated administrator account](/help/en/resource-management/resource-directory/user-guide/manage-a-delegated-administrator-account#task-2059109).

## Step 4: Manage multiple members

You can use the multi-account management feature of SASE to add members to your resource directory and manage the access permissions of the members in a centralized manner.

1.  Log on to the [SASE console](https://yundun.console.alibabacloud.com/?p=csas).
    
2.  In the left-side navigation pane, click **Settings**.
    
3.  On the **Multi-account Management** tab, click **Added Member**.
    
4.  In the **Added Member** dialog box, select the members that can be imported and add the members to the **The member is selected** list.
    
5.  Click **OK**.
    
    After you add the members, you can view the information about the members in the member list, such as **Account UID**, **Account Name**, and **Add Time**. You can also perform the following operations based on your business requirements:
    
    -   Add remarks.
        
        Find the member that you want to manage and click **Remarks** in the Actions column. In the dialog box that appears, enter remarks to distinguish multiple members.
        
    -   Delete a member.
        
        Find the member that you want to manage and click **Delete** in the Actions column. After you delete a member, the current account no longer manages the deleted member.
