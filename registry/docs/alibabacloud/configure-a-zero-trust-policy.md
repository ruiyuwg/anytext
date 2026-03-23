The zero trust policy feature allows you to grant access permissions on specific applications and resources to users and enterprise partners. The process of creating a zero trust policy is to distinguish the resource permissions of enterprise user groups from those of office applications. This topic describes how to configure a zero trust policy.

## **Background information**

When you add an office application to Secure Access Service Edge (SASE) office applications, SASE automatically **creates a policy that denies all access to the office application** based on the zero trust principle. In this case, you must configure an allow policy to grant permissions on different resources to different user groups.

## Prerequisites

-   Office applications that you want to manage are added. For more information, see [Add an office application to SASE](/help/en/sase/user-guide/application-management#task-2037066).
    
-   The user group on which the policy takes effect is added. For more information, see [Create a user group](/help/en/sase/user-guide/manage-user-groups#section-l42-a13-48u).
    
-   A security baseline template that meets your business requirements is configured. For more information, see [Create a security baseline](/help/en/sase/user-guide/create-security-baselines#task-2039760).
    

## Configure a zero trust policy

1.  Log on to the [SASE console](https://yundun.console.alibabacloud.com/?p=csas).
    
2.  In the left-side navigation pane, choose **Private Access** > **Zero Trust Policies**.
    
3.  On the **Zero Trust Policies** page, click **Create Policy**.
    
4.  In the **Create Policy** panel, configure the parameters and click **OK**. The following table describes the parameters.
    
    You can create multiple policies based on your business requirements.
    
    The number of policies that can be created varies based on the private access edition of SASE. By default, 200 policies can be created for Private Access VPN, 500 policies can be created for Private Access Basic, and 1,000 policies can be created for Private Access Advanced.
    
    **Parameter**
    
    **Description**
    
    **Policy Name**
    
    The name of the zero trust policy.
    
    The name must be 2 to 100 characters in length, and can contain letters, digits, hyphens (-), and underscores (\_).
    
    **Priority**
    
    The priority of the zero trust policy. The value 1 indicates the highest priority. When you create a policy, the maximum value for the priority of the new policy is determined by the following calculation result: Number of zero trust policies within the account + 1. For example, you have 17 zero trust policies within your account. When you create a policy, the priority of the new policy ranges from 1 to 18. The number 18 is obtained by using the following formula: 17 + 1 = 18.
    
    If a policy conflict exists, the policy with a higher priority takes effect.
    
    **Action**
    
    The access permissions of the policy. Valid values:
    
    -   **Allow Access**: The policy allows access to the specified application from users or terminals.
        
    -   **Access Denied**: The policy denies access to the specified application from users or terminals.
        
    
    **Applicable User**
    
    The user group to which the policy applies. The zero trust policy takes effect for the terminals of the specified user group. If an access request hits the policy, SASE determines whether to allow or deny the request.
    
    To add a user group, click **Add**. On the **User Group** tab, select the user group that you want to add. If the existing user groups cannot meet your requirements, you can create a user group on the **Custom User Group** tab. For more information, see [Configure a user group](/help/en/sase/user-guide/manage-user-groups).
    
    **Selected Applications**
    
    The applications to which the policy applies.
    
    To add applications, click **Add**. On the **Tag** tab, select a tag to add the applications that have the tag. You can also select applications on the **Application** tab.
    
    **Security Baselines**
    
    The security baseline template that meets your security requirements. For more information, see [Create a security baseline](/help/en/sase/user-guide/create-security-baselines).
    
    **Trigger Templates**
    
    The trigger template that you want to apply for dynamic decision-making. You can click **View Trigger Templates** to view details of trigger templates.
    
    **Policy Status**
    
    The status of the policy. You can enable or disable the policy.
    

## Edit and delete policies

You can perform the following operations based on your business requirements:

-   Edit a policy: Find the policy that you want to edit and click **Edit** in the Actions column. In the **Edit** panel, modify the policy settings.
    
-   Change the priority of a policy: Find the policy that you want to manage and click the icon in the **Priority** column. In the **Priority** dialog box, specify a priority value and click **OK**.
    
-   Enable or disable a policy: Find the policy that you want to manage and turn on or off the switch in the Policy Status column to enable or disable the policy.
    
-   Delete a policy: Find the policy that you want to delete and click **Delete** in the Actions column.
    
-   Delete multiple policies: Select the policies that you want to delete and click **Delete** below the policy list.
    
    **Important**
    
    After you delete a policy, users may access some applications that do not meet the security requirements of the enterprise. Proceed with caution.
    

## **References**

-   If users work in an office zone that you can trust and you do not need to analyze and audit the traffic that is generated when users access office applications, you can configure a trusted office zone. For more information, see [Use the office zone identification feature](/help/en/sase/user-guide/configure-a-trusted-office-area).
