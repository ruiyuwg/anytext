PolarDB for MySQL, , and support global IP address whitelist management. You can create custom IP address whitelist templates and associate them with your clusters. You only need to maintain one set of templates, and any changes are dynamically applied to all associated clusters. This simplifies whitelist configuration. This topic describes how to set up a global IP address whitelist template.

## Usage notes

-   A cluster can be associated only with IP address whitelist templates from the same region.
    
-   When you delete an IP address whitelist template, the whitelist configurations of its associated clusters are also deleted. To prevent database connection issues, make sure all clusters are disassociated from the template before you delete it.
    
-   A single IP address whitelist template can contain up to 1000 IP addresses.
    
-   A single cluster can be associated with multiple IP address whitelist templates.
    
-   A single IP address whitelist template can be associated with multiple clusters.
    

## Create an IP address whitelist template

1.  Log on to the [PolarDB console](https://polardb.console.alibabacloud.com/).
    
2.  In the upper-left corner, select the region where the cluster is deployed.
    
3.  In the navigation pane on the left, click **Template Management** > **IP Whitelist Template**.
    
4.  In the upper-left corner of the page, click **Create IP Whitelist Template**.
    
5.  On the **Create IP Whitelist Template** page, enter an **IP Whitelist Template Name** and the **IP Addresses** for the whitelist.
    
    **Note**
    
    The **IP Whitelist Template Name** must meet the following requirements:
    
    -   It must consist of lowercase letters, digits, and underscores (\_).
        
    -   It must start with a letter and end with a letter or a digit.
        
    -   It must be 2 to 120 characters in length.
        
    
6.  Click **OK**.
    

## Modify an IP address whitelist template

1.  Log on to the [PolarDB console](https://polardb.console.alibabacloud.com/).
    
2.  In the upper-left corner, select the region where the cluster is deployed.
    
3.  In the navigation pane on the left, click **Template Management** > **IP Whitelist Template**.
    
4.  On the **IP Whitelist Template** page, find the target template and click **Modify** in the **Actions** column.
    
5.  On the **Modify IP Whitelist Template** page, add or remove IP addresses from the whitelist, and then click **OK**.
    
6.  In the dialog box that appears, click **OK**.
    
    **Note**
    
    The modified IP address whitelist is applied to all associated clusters. Proceed with caution.
    

## Delete an IP address whitelist template

1.  Log on to the [PolarDB console](https://polardb.console.alibabacloud.com/).
    
2.  In the upper-left corner, select the region where the cluster is deployed.
    
3.  In the navigation pane on the left, click **Template Management** > **IP Whitelist Template**.
    
4.  On the **IP Whitelist Template** page, find the target template and click **Delete** in the **Actions** column.
    
5.  In the dialog box that appears, click **Delete**.
    
    **Note**
    
    When you delete an IP address whitelist template, the whitelist configurations of the associated clusters are also deleted. To prevent cluster connection issues, proceed with caution.
    

## Associate an IP address whitelist template

1.  Log on to the [PolarDB console](https://polardb.console.alibabacloud.com/).
    
2.  In the upper-left corner, select the region where the cluster is deployed.
    
3.  Find the target cluster and click its ID.
    
4.  In the navigation pane on the left, click **Configuration and Management** > **Cluster Whitelist**.
    
5.  On the **Cluster Whitelist** page, click **Associate IP Whitelist Template**.
    
6.  In the **Associate IP Whitelist Template** dialog box, select the template to associate and click **OK**.
    

## Disassociate an IP address whitelist template

1.  Log on to the [PolarDB console](https://polardb.console.alibabacloud.com/).
    
2.  In the upper-left corner, select the region where the cluster is deployed.
    
3.  Find the target cluster and click its ID.
    
4.  In the navigation pane on the left, click **Configuration and Management** > **Cluster Whitelist**.
    
5.  On the **Cluster Whitelist** page, find the target IP address whitelist template and click **Disassociate** in the Actions column.
    
6.  In the dialog box that appears, click **OK**.
    

## **FAQ**

Q: How do I block an IP address from accessing a database in PolarDB for MySQL?

A: PolarDB for MySQL does not have an IP blacklist feature. However, you can block IP addresses in one of two ways:

Use a whitelist to indirectly restrict access: When you configure the IP address whitelist for a cluster endpoint, add only trusted IP addresses. An IP address that is not in any whitelist cannot establish a connection. This is the recommended method for comprehensive protection.

Lock a user account to block access from a specific IP address: To prevent a specific user, such as `test@'192.168.0.1'`, from logging on from a specific IP address, you can lock the user account.

```
-- 1. Create the user. You can explicitly create the user to lock it, even if it is not otherwise used.
CREATE USER 'test'@'192.168.0.1' IDENTIFIED BY 'xxxxx';

-- 2. Lock the account.
ALTER USER 'test'@'192.168.0.1' ACCOUNT LOCK;
```

After you lock the account, any attempt to connect as the `test` user from that IP address returns the following error:

```
ERROR 3118 (HY000): Access denied for user 'test'@'192.168.0.1'. Account is locked.
```
