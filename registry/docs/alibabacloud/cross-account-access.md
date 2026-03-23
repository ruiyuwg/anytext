If you want to monitor applications and implement tracing capabilities across Alibaba Cloud accounts. You can aggregate application data into an Alibaba Cloud account, and use RAM users or RAM roles to authorize other Alibaba Cloud accounts to view or manage the data.

## Limits

If you aggregate application data from multiple Alibaba Cloud accounts into an Alibaba Cloud account, you need to manually separate the data reporting, authorization, bills, and fine-grained permissions of different accounts. This greatly increases the complexity in user experience. Generally, for enterprises that have multiple Alibaba Cloud accounts, we recommend that each account manages applications on its own. Therefore, please comprehensively consider the aggregation.

## Solution

Assume that an enterprise has both Alibaba Cloud accounts A and B. Account A was used to activate Application Real-Time Monitoring Service (ARMS), and Account B was used to activate Container Service for Kubernetes (ACK). If the enterprise wants to integrate the applications of Account B into the ARMS service that belongs to Account A, and use Account A to manage all applications, the enterprise can perform the following operations:

1.  Create a RAM user for Account A, and attach the **AliyunARMSFullAccess** and **AliyunSTSAssumeRoleAccess** policies to the RAM user. For more information, see [Create a RAM user](/help/en/ram/user-guide/create-a-ram-user).
    
2.  Create an AccessKey pair for the RAM user. For more information, see [Create an AccessKey pair](/help/en/ram/user-guide/create-an-accesskey-pair).
    
3.  Install the ack-arms-cmonitor agent for the applications of Account B. For more information, see [Manually connect applications to Application Monitoring eBPF Edition](/help/en/arms/application-monitoring-ebpf/getting-started/access-application-monitoring-ebpf-version).
    
4.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left-side navigation pane of the cluster details page, choose **Applications** > **Helm**. On the Helm page, find **ack-arms-cmonitor** and click **Update** in the Actions column.
    
5.  Replace the `accessKey` and `accessKeySecret` parameters with the AccessKey ID and AccessKey secret obtained in [Step 2](#df8a133d772fb), replace the `uid` parameter with the ID of Account A, and then click **OK**.
    
    Then, the ACK application data of Account B will be reported to the ARMS service of Account A.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2128477171/p788666.png)
    
6.  Use a RAM user of Account A to manage applications.
    
    -   Method 1: Use the RAM user created in [Step 1](#b2db592bcfnw5).
        
    -   Method 2: Create another RAM user for Account A.
        
        Create another RAM user for Account A. Then, you can attach the **AliyunARMSFullAccess** policy to the RAM user so that the RAM user has full permissions on ARMS. You can also attach a custom policy to the RAM user to grant fine-grained permissions on the applications. For more information, see [Application Monitoring: Attach a custom policy to a RAM user](/help/en/arms/application-monitoring/security-and-compliance/application-monitoring-attach-custom-policies-to-ram-users).
        
    
    **Note**
    
    In addition to the preceding methods, you can manage applications by using a RAM user of Account B to assume a RAM role of Account A. For more information, see the [(Optional) Use a RAM role to manage applications](/help/en/arms/application-monitoring/use-cases/integrate-monitoring-data-of-multiple-accounts-into-single-account#section-jpk-7bb-zrw) section.
    

## **(Optional) Use a RAM role to manage applications**

If you do not want the RAM user of Account A to use ARMS, you can authorize the RAM user of Account B to use ARMS.

### **Step 1: Grant permissions to Account B**

1.  Use Account A to create a RAM role whose trusted entity is an Alibaba Cloud account. In this example, the RAM role `arms-admin` is created. Configure Account B as the trusted entity.
    
    For more information, see [Create a RAM role for a trusted Alibaba Cloud account](/help/en/ram/user-guide/create-a-ram-role-for-a-trusted-alibaba-cloud-account#task-xvr-ftf-xdb).![账号A的RAM角色](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7533181861/p580018.png)
    
2.  Attach the **AliyunARMSFullAccess** policy to `arms-admin` so that the RAM user has full permissions on ARMS. You can also attach a custom policy to the RAM role to grant fine-grained permissions on the applications.
    
    -   For information about how to create a custom policy, see [Application Monitoring: Attach a custom policy to a RAM user](/help/en/arms/application-monitoring/security-and-compliance/application-monitoring-attach-custom-policies-to-ram-users).
        
    -   For information about how to attach a policy to a RAM role, see [Grant permissions to a RAM role](/help/en/ram/user-guide/grant-permissions-to-a-ram-role#task-187801).
        
    
3.  Create a RAM user for Account B.
    
    For more information, see [Create a RAM user](/help/en/ram/user-guide/create-a-ram-user#task-187540).
    
    **Important**
    
    Save the username and password of the RAM user.
    
4.  Use Account B to attach the **AliyunSTSAssumeRoleAccess** policy to the RAM user. Then, the RAM user can assume the RAM role.
    
    For more information, see [Grant permissions to a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user#task-187800).
    

### **Step 2: Use the RAM user of Account B to manage applications**

1.  Use the RAM user that belongs to Account B to log on to the [RAM console](https://ram.console.alibabacloud.com/).
    
    For more information, see [Log on to the Alibaba Cloud Management Console as a RAM user](/help/en/ram/user-guide/log-on-to-the-alibaba-cloud-management-console-as-a-ram-user#task-2170094).
    
2.  Move the pointer over the avatar and click **Switch Identity**.
    
3.  Enter the ID of Account A and the name of the RAM role created for Account A in [Step 1](#683101524fagh).
    
    For more information, see [Assume a RAM role](/help/en/ram/user-guide/assume-a-ram-role#task-221553).
    
4.  Log on to the [ARMS console](https://arms-ap-southeast-1.console.aliyun.com/#/home). In the left-side navigation pane, choose **Application Monitoring eBPF** > **Application List**. On the Applications page, view the applications.
