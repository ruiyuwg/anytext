You can enable the following features on the Other Settings tab: global log filtering and access control. This topic describes the features and how to enable the features.

## Global Log Filter

Security Center provides the global log filtering feature to ensure security. The feature helps you effectively use your log storage and improves operational efficiency.

### How global log filtering works

The global log filtering feature filters logs of the Security Center agent by using the following methods:

-   Filter logs within a specified period of time by using specified fields
    
    The specified fields that are used to collect data are combined into keys in a specific order. The fields include command lines, usernames, and the command lines of parent processes. Then, events that have the same key are aggregated and filtered in a specific period of time. The occurrence of events that have the same characteristics is counted. If the number of occurrences does not exceed the specified threshold, the events are reported. Otherwise, the events are filtered out.
    
-   Filter logs by using process chains
    
    The process chains of collected events are normalized, and the characteristics of the events are extracted as keys to filter logs. During a specified period of time within which logs are filtered, the occurrence of events that have the same characteristics is counted. If the number of occurrences does not exceed the specified threshold, the events are reported. Otherwise, the events are filtered out.
    

### Prerequisites

The log analysis feature is enabled. For more information, see [Enable log analysis](/help/en/security-center/user-guide/enable-log-analysis#concept-z5c-2z3-kfb).

**Note**

If you have not enabled the log analysis feature, the **Global Log Filter** section is not displayed in the console.

### Enable global log filtering

1.  [Log on to the Security Center console](https://yundun.console.alibabacloud.com/?p=sas). In the top navigation bar, select the region of the asset that you want to manage. You can select **China** or **Outside China**.In the left-side navigation pane, choose **System Configuration** > **Feature Settings**.
    
2.  On the **Other Settings** tab of the **Settings** tab, turn on **Log Filter** in the **Global Log Filter** section.
    

## Access control

You can use Resource Access Management (RAM) to create and manage RAM users, such as employees, systems, and applications. You can also use RAM to control the access from RAM users to resources. RAM is suitable for scenarios in which multiple users in an enterprise must collaboratively manage cloud resources. RAM allows you to grant permissions to RAM users based on the principle of least privilege. This way, you do not need to share the AccessKey pair of your Alibaba Cloud account, which minimizes security risks.

**Note**

If multiple users in your enterprise collaboratively use cloud resources, grant the users only the required permissions. This avoids threats that may be posed to your assets. We recommend that you check the permissions at regular intervals in the [RAM console](https://ram.console.alibabacloud.com/). We recommend that you follow the principle of least privilege when you grant permissions to the users.

1.  [Log on to the Security Center console](https://yundun.console.alibabacloud.com/?p=sas). In the top navigation bar, select the region of the asset that you want to manage. You can select **China** or **Outside China**.In the left-side navigation pane, choose **System Configuration** > **Feature Settings**.
    
2.  On the **Other Settings** tab of the **Settings** tab, view the service-linked role description and perform operations supported for Data Delivery of ActionTrail, Permission policy management, User Management, and Role Management in the **RAM** section.
    
    -   Before you can use the check items of the Cloud Infrastructure Entitlement Management (CIEM) type provided by the Cloud Security Posture Management (CSPM) feature, you must turn on **Data Delivery of ActionTrail**. After you turn on Data Delivery of ActionTrail, Security Center can access the log data of ActionTrail to check whether risks exist in the CIEM-related configurations.
        
    -   View the description of the service-linked role AliyunServiceRoleForSas that is created for Security Center. For more information, see [Service-linked roles for Security Center](/help/en/security-center/security-and-compliance/service-linked-roles-for-security-center#task-2259909).
        
    -   Click **Manage** for **Permission policy management** to go to the [RAM console](https://ram.console.alibabacloud.com/). In the RAM console, manage all policies within the current Alibaba Cloud account. For more information, see [Policy management](/help/en/ram/policy-overview#concept-tfz-4wf-xdb).
        
    -   Click **Manage** for **User Management** to go to the [RAM console](https://ram.console.alibabacloud.com/). In the RAM console, manage all RAM users within the current Alibaba Cloud account. For more information, see [RAM user management](/help/en/ram/user-guide/overview-of-ram-users#concept-662669).
        
    -   Click **Manage** for **Role Management** to go to the [RAM console](https://ram.console.alibabacloud.com/). In the RAM console, manage all RAM roles within the current Alibaba Cloud account. For more information, see [RAM role management](/help/en/ram/user-guide/ram-role-overview#concept-fgc-wjc-mfb).
