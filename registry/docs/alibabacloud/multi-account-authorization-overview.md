CloudSSO allows you to specify the users or groups that are allowed to access the accounts in your resource directory based on the structure of your resource directory. You can assign access permissions or configurations to the users or groups. You can also assign access permissions on the enterprise management account or members in your resource directory.

## Methods

A CloudSSO administrator can use one of the following methods to implement multi-account permission assignment:

-   **Assign access permissions on a single account in your resource directory**
    
    On the **Multi-account Permission Configuration** page of the CloudSSO console, click the name of an account to go to the account details page. On the Access Assignments tab, click **Configure Access Assignments**. In the panel that appears, select the CloudSSO identities and access configurations for the account and complete the assignment. CloudSSO identities include users and groups.
    
    You can view the existing access permissions on the account. You can also modify or remove the existing access permissions of a CloudSSO identity.
    
-   **Assign access permissions on multiple accounts in your resource directory at a time**
    
    If you want to specify multiple CloudSSO identities and access configurations for multiple accounts in your resource directory at a time, go to the **Multi-account Permission Configuration** page and perform the following operations:
    
    1.  In the Resource Directory navigation tree, select one or more accounts in your resource directory.
        
    2.  Select one or more CloudSSO identities.
        
    3.  Select one or more access configurations.
        
    4.  Click **Start Configuration**. CloudSSO automatically completes the assignment.
        
    
    If the access permissions that have been assigned to the selected CloudSSO identities are assigned again, the assignment fails. Only new permissions are assigned to the selected CloudSSO identities.
    

## Description

When you add or remove access permissions, CloudSSO starts an asynchronous task for each triplet and completes the following operations. A triplet consists of a CloudSSO identity, an account in your resource directory, and an access configuration.

-   If the access configuration has not been provisioned for the account when you add access permissions, CloudSSO provisions the access configuration. For more information, see [Assign access permissions on the accounts in a resource directory](/help/en/cloudsso/user-guide/assign-access-permissions-on-the-accounts-in-a-resource-directory#task-2090971).
    
-   If you remove the access permissions from the last CloudSSO identity that uses the access configuration, you can also de-provision the access configuration.
    
-   After the access configuration is provisioned or de-provisioned, CloudSSO specifies access permissions on the account for users or groups.
    

You can view the assignment results in the Configure Access Assignments panel. You can also view the status of each task on the **Historical Tasks** page.

## Usage

After a CloudSSO administrator assigns access permissions and a CloudSSO user logs on to the CloudSSO user portal, the user can view the accounts that the user can access in the resource directory. The user can also view the access configurations for each account. Then, the user can access the resources of each account based on the permissions in the access configurations. For more information, see [Log on to the CloudSSO user portal and access Alibaba Cloud resources](/help/en/cloudsso/user-guide/log-on-to-the-cloudsso-user-portal-and-access-alibaba-cloud-resources#task-2090790).
