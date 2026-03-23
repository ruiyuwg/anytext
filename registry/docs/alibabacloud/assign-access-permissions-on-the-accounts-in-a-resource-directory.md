You can specify the users or groups that are allowed to access the accounts in your resource directory based on the structure of the resource directory. You can also assign access permissions and configurations to users or groups. This topic provides an example on how to assign access permissions on the accounts in your resource directory. In this example, user1 is specified and an access configuration is provisioned for the member Sandbox Account in the resource directory. This access configuration defines the access permissions only on virtual private cloud (VPC) resources. After the provisioning, user1 can access only VPC resources within Sandbox Account.

## Prerequisites

-   An access configuration is created.
    
    In this example, the in-use access configuration includes the AliyunVPCFullAccess system policy and no inline policies. For more information, see [Manage system policies and inline policies](/help/en/cloudsso/user-guide/manage-system-and-inline-policies#task-2090838).
    
-   A user is created or synchronized.
    
    In this example, user1 created in the CloudSSO console is used. For more information, see [Create a user](/help/en/cloudsso/user-guide/perform-basic-operations#section-rj3-44x-9bk).
    

## Procedure

1.  Log on to the [CloudSSO console](https://cloudsso.console.alibabacloud.com).
    
2.  In the left-side navigation pane, click **Multi-account Permission Configuration**.
    
3.  On the **Multi-account Permission Configuration** page, select the required account.
    
    In this example, the member Sandbox Account is selected.
    
4.  Click **Configure Access Assignments**.
    
5.  In the **Configure Access Assignments** panel, select the required user or group and click **Next**.
    
    In this example, the user user1 is selected.
    
6.  Select the required access configuration and click **Next**.
    
7.  Confirm the configuration and click **Start Configuration**.
    
8.  Wait until the assignment is complete and click **Complete**.
    

## Verify the assignment result

1.  Log on to the CloudSSO user portal by using user1.
    
    For more information, see [Log on to the CloudSSO user portal and access Alibaba Cloud resources](/help/en/cloudsso/user-guide/log-on-to-the-cloudsso-user-portal-and-access-alibaba-cloud-resources#task-2090790).
    
2.  On the **Log on as RAM Role** tab, click **Show Details** in the **Permission** column of Sandbox Account.
    
3.  In the panel that appears, find the required access configuration and click **Log On** in the **Actions** column.
    
4.  Access the VPC resources within Sandbox Account as a Resource Access Management (RAM) role.
    
    **Note**
    
    You can access only the VPC resources because only the access permissions on VPC resources are assigned. If you need to access other resources, modify the policy that is created for the access configuration and re-provision the access configuration.
