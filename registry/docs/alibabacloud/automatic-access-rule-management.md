The access rule feature defines the scope of server processes that are connected to Application Protection in automatic access mode. It supports three policy configurations: blacklist, whitelist, and automatic full access. This topic describes the configuration logic, priority, and operational instructions for each rule. This feature is suitable for security O&M scenarios that require fine-grained control over the protection scope and a reduced impact from false positives.

## **Blacklist and whitelist rule details**

### **How rules take effect**

-   Blacklists and whitelists apply only to the automatic access mode and do not affect the manual access mode.
    
-   Blacklists have a higher priority than whitelists. If a process matches both a blacklist rule and a whitelist rule, the process is not connected.
    
-   Blacklists and whitelists take effect immediately if they are configured before a process is connected. If they are configured after a process is connected, the rules take effect after the process restarts or during the next automatic access. Deleting a blacklist rule takes effect immediately.
    

### **Scenarios**

**List type**

**Description**

**Scenario features**

**Applicable process types**

Blacklist

-   Blacklist rules exclude specific processes from protection. This prevents interference with processes that are known to be secure or do not require protection, such as performance overhead or false positive blocks. Processes that hit a blacklist rule are not connected.
    
-   For a blacklist to take effect, upgrade the Runtime Application Self-Protection (RASP) agent to version **1.0.5** or later.
    

-   Most processes need protection, with only a few exceptions.
    
-   Business performance has a higher priority than comprehensive protection.
    

-   Resource-intensive processes, such as databases
    
-   Trusted system processes
    
-   Processes with compatibility issues
    
-   Test environment processes
    

Whitelist

-   Whitelist rules protect only processes within a specified scope. This is useful for the precise protection of critical business processes.
    
    Only processes that hit a whitelist rule are connected to Application Protection. If no whitelist or blacklist rules are configured, all processes on the asset are automatically connected.
    
-   For a whitelist to take effect, upgrade the RASP agent to version **0.9.4** or later.
    

Protect only critical processes to follow the principle of least privilege.

-   Highly sensitive business processes
    
    Strengthen security for core business processes, such as payment and user data services, to avoid missing threats. For example, connect only finance-related processes such as `payment_gateway` and `user_auth_service`.
    
-   Isolation requirements in hybrid environments
    
    In multitenancy or hybrid deployment environments, limit the protection scope to define responsibility borders. For example, protect only container processes belonging to a specific customer, such as `docker-app-xxx`, and do not connect processes from other tenants.
    

## **Add a whitelist or blacklist**

The following steps describe how to add a blacklist. The procedure for adding a whitelist is similar.

1.  Log on to the [Security Center console](https://yundun.console.alibabacloud.com/?p=sas).
    
2.  In the navigation pane on the left, choose **Protection Configuration** > **Application Protection**. In the upper-left corner of the console, select the region where your asset is located: **Chinese Mainland** or **Outside Chinese Mainland**.
    
3.  On the **Application Configurations** tab, click **Management Settings** in the upper-right corner.
    
4.  On the **Manage Access Rule** tab of the **Management Settings** panel, click the **Blacklist** tab, and then click Add Blacklist.
    
5.  In the **Add Blacklist** dialog box, configure the following parameters and click **OK**.
    
    **Parameter**
    
    **Description**
    
    **Rule Name**
    
    Enter a name for the access blacklist rule.
    
    **Rule Switch**
    
    Enabled by default. This means the blacklist rule is active.
    
    **Effective Application Type**
    
    Select the application language for which the blacklist is effective: **Java** or **PHP**.
    
    **Match Condition**
    
    Select the matching conditions for the blacklist rule. Options:
    
    -   **cmdline**: Match processes to exclude based on command-line parameters. Supported matching methods include the following: contains, does not contain, contains one of multiple values, and does not contain any of the values.
        
    -   **Environment Variables** : Match processes to exclude based on the environment variables they access. The supported matching method is equals.
        
    -   **\-D parameter** : Match processes to exclude based on system properties set at Java program startup. The supported matching method is equals.
        
        **Note**
        
        This is configurable only when **Effective Application Type** is set to **Java**.
        
    -   **Container Name**: Match processes to exclude based on the name of the container they belong to. Supported matching methods include the following: contains, does not contain, contains one of multiple values, and does not contain any of the values.
        
        **Note**
        
        This is configurable only when **Effective Application Type** is set to **PHP**.
        
    
    Click **Add Condition** to add multiple matching conditions. The logical relationship between multiple conditions is AND, which means all conditions must be met.
    
    The following are configuration examples:
    
    -   Exclude processes whose startup parameters contain the `tomcat` character
        
        -   Set **Whitelist Mode** to **cmdline**.
            
        -   Set **Match Mode** to **Include**.
            
        -   For **Content to Match**, enter **tomcat**.
            
    -   Exclude processes whose startup parameters do not contain the `apache` and `test` characters
        
        -   Set **Whitelist Mode** to **cmdline**.
            
        -   Set **Match Mode** to **Does Not Contain Any Value**.
            
        -   For **Content to Match**, enter **apache,test**.
            
    
    **Match Mode**
    
    Select the matching method for the rule.
    
    **Match Field**
    
    Enter the matching field for the rule.
    
    **Note**
    
    This parameter is required only when **Match Condition** is set to **Environment Variables** or **\-D parameter** .
    
    **Content to Match**
    
    Enter the matching content for the rule.
    
    **Destination Application Groups**
    
    Select the application groups for which the access blacklist rule is effective. The application type of the application groups must be the same as the one specified for **Effective Application Type**.
    

## **Edit or delete a whitelist or blacklist**

1.  Log on to the [Security Center console](https://yundun.console.alibabacloud.com/?p=sas).
    
2.  In the navigation pane on the left, choose **Protection Configuration** > **Application Protection**. In the upper-left corner of the console, select the region where your asset is located: **Chinese Mainland** or **Outside Chinese Mainland**.**Outside China**
    
3.  On the **Application Configurations** tab, click **Management Settings** in the upper-right corner.
    
4.  In the **Management Settings** panel, on the **Manage Access Rule** tab, on the **Blacklist** or **Application Access Whitelist** sub-tab, click **Edit** or **Delete** in the Actions column for the desired rule.
    
    You can delete only rules that are not applied to an application group. Before you delete a rule, you must detach the associated application groups.
    

## **Automatic full access (Java processes only)**

### **Supported scenarios**

If you enable Application Protection on a pay-as-you-go basis and do not configure custom binding, the system connects all Java processes on your assets to Application Protection by default. The slow access method is used.

If you have enabled Application Protection but have not connected any processes, a dialog box appears that informs you Application Protection is not connected and provides the **Automatic Full Access** and **Custom Access** options. If you select **Automatic Full Access**, the slow access method is used by default. You can click Configure Now to adjust the access method and select **Fast Access**, **Regular Access**, or **Slow Access**.

### **Access method details**

**Access method**

**Description**

**Fast Access**

Suitable for scenarios with a small number of processes and low requirements for business stability. The installation time is short.

**Regular Access**

Suitable for scenarios with a moderate number of processes and low requirements for business stability. The installation time is medium.

**Slow Access**

Suitable for scenarios with many processes and high requirements for business stability. The installation time is long.

### **How to stop full access**

After you enable the **Automatic Full Access** mode, you can stop the accessing process by clicking **Stop Accessing** in the prompt on the **Protection Configuration** > ****Application Protection**** > **Application Analysis** tab.

**Important**

After you stop the access, you cannot perform a full access again. Servers with a access status of **Queuing** will no longer be connected to Application Protection. Servers with a access status of **In Progress** will continue the installation.

After you stop the access, you can click **View Details** in the prompt message to view the access status of Java processes on your assets.
