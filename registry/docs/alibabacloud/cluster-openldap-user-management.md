This topic describes how to manage E-MapReduce (EMR) user accounts on the Users page of the EMR console.

## Background information

Information about EMR user accounts is stored in the built-in OpenLDAP service of an EMR cluster. You can use the information to authenticate EMR users in the EMR cluster.

If you click the link of an open source component on the Connect Strings page to access the web UI of the component, you must use an EMR user account for identity authentication. If you enable LDAP authentication, you must also use an EMR user account for identity authentication. If you configure LDAP as the user source for Ranger, you can manage the permissions of user accounts that are listed on the Users page. You can use EMR user accounts to run kinit commands on a high-security cluster.

The Users tab lists all EMR user accounts. RAM users that correspond to the EMR user accounts are classified into the following types based on the permissions that are granted to the RAM users in the EMR console:

-   Administrator: an Alibaba Cloud account, or a RAM user that is granted the emr:ManageUserPlatform and emr:CreateLdapUser permissions, such as a RAM user to which the AliyunEMRFullAccess policy is attached. An administrator can view the information about all user accounts that are configured in a cluster. The administrator can also add or remove a user account, reset the password of a user account, and modify the remarks of a user account.
    
-   Common user: RAM users to which other policies, such as AliyunEMRDevelopAccess, are attached. A common user can only view the information about the EMR user account whose username is the same as the username of the common user, reset the password, and modify the remarks. A common user cannot add or remove a user account.
    

## Prerequisites

-   An EMR cluster is created, and the OpenLDAP service is selected when you create the cluster. For more information, see [Create a cluster](/help/en/emr/emr-on-ecs/user-guide/create-a-cluster-on-the-emr-on-ecs-page#task-2136630).
    
-   A RAM user is created. For more information, see [Create a RAM user](/help/en/ram/create-a-ram-user-1#task-187540).
    
    **Note**
    
    You must create a RAM user first. Only an EMR user account whose username is the same as the username of a RAM user can be added to the Users page of the EMR console.
    

## Add a user

**Important**

If you use a RAM user to log on to the EMR console, you must grant the ram:ListUsers permission to the RAM user before you add a user account. You can attach the AliyunRAMReadOnlyAccess policy to the RAM user in the RAM console by using your Alibaba Cloud account. You can also configure a custom policy to grant the ram:ListUsers permission to the RAM user.

1.  Go to the Users tab.
    
    1.  Log on to the [EMR console](https://emr.console.alibabacloud.com/#/region/cn-hangzhou/resource/all/ecs/list). In the left-side navigation pane, click EMR on ECS.
        
    2.  In the top navigation bar, select the region in which your cluster resides and select a resource group based on your business requirements.
        
    3.  On the **EMR on ECS** page, find the desired cluster and click the name of the cluster in the Cluster ID/Name column.
        
    4.  On the page that appears, click the **Users** tab.
        
2.  On the **Users** tab, click **Add User**.
    
3.  In the **Add User** dialog box, select an existing RAM user as an EMR user from the **Username** drop-down list and configure the **Password** and **Confirm Password** parameters.
    
4.  Click **OK**.
    

## Remove a user

1.  On the **Users** tab, find the user that you want to remove and click **Delete** in the Actions column.
    
2.  In the **Delete User** message, click **OK**.
    

## Reset the password of a user

You can reset the password of a user account.

**Important**

This operation may cause tasks that are running to fail.

1.  On the **Users** tab, find the user whose password you want to reset and click **Reset Password** in the Actions column.
    
2.  In the **Reset User Password** dialog box, configure the **Password** and **Confirm Password** parameters.
    
3.  Click **OK**.
    

## **References**

If you use a high-security cluster, you can configure Kerberos and perform other basic operations such as exporting keytab files. For more information, see [Basic Kerberos usage](/help/en/emr/emr-on-ecs/user-guide/basic-usage-of-kerberos).
