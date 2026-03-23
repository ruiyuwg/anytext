RDS for MySQL lets you use the `validate_password` plugin to create custom password policies. This feature enhances database access security by allowing you to modify password complexity rules, such as password length and password strength.

## Function introduction

The `validate_password` plugin for RDS for MySQL provides fine-grained control over the complexity requirements for database account passwords:

-   Whether the password can be the same as the database username
    
-   Minimum password length
    
-   Minimum number of uppercase and lowercase letters
    
-   Minimum number of digits
    
-   Minimum number of special characters
    
-   Password strength check policy
    

## Prerequisites

The RDS for MySQL instance runs MySQL 5.7 or 8.0.

## Important

-   **The** `**validate_password**` **plugin installed on the primary node is not automatically synchronized to the secondary node**
    
    For instances with a primary/secondary architecture (High-availability Edition or Cluster Edition), you must install the [validate\_password plugin](#section-lmd-c47-alx) on the primary and secondary nodes **separately**. You can perform a [manual primary/secondary failover](/help/en/rds/apsaradb-rds-for-mysql/switch-workloads-over-between-primary-and-secondary-apsaradb-rds-for-mysql-instances) to log on to the secondary node and install the plugin. If you install the plugin only on the primary node, the plugin will not be available on the new primary node (the original secondary node) after a failover. This invalidates the password policy.
    
    **Note**
    
    After the plugin is installed, [password policy parameters configured in the RDS console](#section-toe-v67-oz9) are automatically synchronized to the secondary node. You do not need to set them again.
    
-   **Core parameter limits and system handling**
    
    The `length` value **must be greater than or equal to** `number_count + (2 × mixed_case_count) + special_char_count`. If a value does not meet this requirement, RDS automatically adjusts the `length` value to be **equal to the result of the formula**.
    
-   **RDS mandatory rules**
    
    Regardless of the custom policy settings, when you create or modify a password in the [RDS console](https://rds.console.alibabacloud.com/) or by calling an API operation ([CreateAccount](/help/en/rds/apsaradb-rds-for-mysql/api-rds-2014-08-15-createaccount-mysql) or [ResetAccountPassword](/help/en/rds/apsaradb-rds-for-mysql/api-rds-2014-08-15-resetaccountpassword-mysql)), the password must always meet the following requirements:
    
    -   Be 8 to 32 characters in length.
        
    -   Contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters (`!@#$%^&*()_+-=`).
        
-   **Bypassing the 8-character minimum length limit (not recommended)**
    
    You cannot bypass the mandatory check in the RDS console by adjusting the parameter value. Even if you set the minimum password length to 5, you must still enter at least 8 characters when you create or modify a password.
    
    To set a password that has fewer than 8 characters, you can use the `SET PASSWORD` command to bypass the mandatory check in the RDS console and directly set a 5-character password. This method is suitable only for test environments or special scenarios. **Do not use it in a production environment.**
    

## **Pricing**

The custom password policy feature is free of charge.

## Step 1: Install the `validate_password` plugin

1.  Use a privileged account to [connect to the MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/use-a-client-or-cli-to-connect-to-an-apsaradb-rds-for-mysql-instance#concept-n1v-qpf-vdb).
    
2.  Run the following SQL command to install the `validate_password` plugin.
    
    ```
    INSTALL PLUGIN validate_password SONAME 'validate_password.so';
    ```
    
3.  Run the following SQL command to verify that the plugin is installed.
    
    ```
    SHOW GLOBAL VARIABLES LIKE 'validate_password%';
    ```
    
    If a result similar to the following is returned, the plugin is installed.![Returned result](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3184188161/p249924.png)
    

## Step 2: Modify password policy parameters

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the navigation pane on the left, click **Parameters**.
    
3.  Follow the instructions in [Set instance parameters](/help/en/rds/apsaradb-rds-for-mysql/modify-the-parameters-of-an-apsaradb-rds-for-mysql-instance#concept-lfl-xmn-wdb) to search for and modify the `loose_validate_password` series of parameters.
    
    **Note**
    
    -   Before you modify the parameters, ensure that you have [installed the validate\_password plugin](#section-lmd-c47-alx). Otherwise, the modified parameters will not take effect.
        
    -   Before you modify the parameters, ensure that you are aware of the core parameter limits described in the [Important](#section-2rr-6cj-xnr) section. For more information about password policies, see the [official MySQL documentation](https://dev.mysql.com/doc/refman/5.7/en/validate-password-options-variables.html).
        
    
    **Parameter**
    
    **Supported database versions**
    
    **Description**
    
    **Configuration example (MySQL 5.7)**
    
    loose\_validate\_password\_check\_user\_name
    
    5.7
    
    Specifies whether the password can be the same as the username. Valid values:
    
    -   **ON (default)**: Allowed.
        
    -   **OFF**: Not allowed.
        
    
    OFF: The password cannot be the same as the username.
    
    loose\_validate\_password\_policy
    
    8.0/5.7
    
    The password strength check level. Valid values:
    
    -   **0**: Checks only the password length.
        
    -   **1 (default)**: Checks the password length, digits, uppercase and lowercase letters, and special characters.
        
    -   **2**: Checks the password length, digits, uppercase and lowercase letters, special characters, and the dictionary file.
        
        **Note**
        
        Because you cannot specify a dictionary file, level 2 is the same as level 1.
        
    
    1: Checks the password length, digits, uppercase and lowercase letters, and special characters.
    
    loose\_validate\_password\_length
    
    8.0/5.7
    
    The minimum password length.
    
    -   MySQL 5.7: The value can be from 0 to **256**. The default value is **8**.
        
    -   MySQL 8.0: The value can be from 1 to **12**. The default value is **8**.
        
    
    10: The minimum password length is 10 characters ([meets the requirement](#section-2rr-6cj-xnr): 10 >= 2 + (2 × 2) + 1 = 7).
    
    loose\_validate\_password\_number\_count
    
    5.7
    
    The required number of digits in the password.
    
    The value can be from 0 to **256**. The default value is **1**.
    
    2: The password must contain at least 2 digits.
    
    loose\_validate\_password\_mixed\_case\_count
    
    5.7
    
    The required number of uppercase and lowercase letters in the password.
    
    The value can be from 0 to **256**. The default value is **1**.
    
    2: The password must contain at least one uppercase letter and one lowercase letter (a total of 2 mixed-case letters).
    
    loose\_validate\_password\_special\_char\_count
    
    5.7
    
    The required number of special characters in the password.
    
    The value can be from 0 to **256**. The default value is **1**.
    
    1: The password must contain at least 1 special character.
    

## **References**

-   You can set the password for a database account in the RDS console ([Create an account](/help/en/rds/apsaradb-rds-for-mysql/create-an-account-on-an-apsaradb-rds-for-mysql-instance) or [Reset the password of an account](/help/en/rds/apsaradb-rds-for-mysql/reset-the-password-of-an-account-on-an-apsaradb-rds-for-mysql-instance)) or by calling an API operation ([CreateAccount](/help/en/rds/apsaradb-rds-for-mysql/api-rds-2014-08-15-createaccount-mysql) or [ResetAccountPassword](/help/en/rds/apsaradb-rds-for-mysql/api-rds-2014-08-15-resetaccountpassword-mysql)).
    
-   For information about how to restrict the permissions of a database account, see [Modify the permissions of an account](/help/en/rds/apsaradb-rds-for-mysql/modify-the-permissions-of-a-standard-account-on-an-apsaradb-rds-for-mysql-instance), [Grant an account the permissions to access a database from a specified IP address](/help/en/rds/apsaradb-rds-for-mysql/authorize-an-account-to-access-its-authorized-databases-from-specified-ip-addresses-in-an-apsaradb-rds-for-mysql-instance), and [Grant an account the permissions to access only specified tables, views, or fields](/help/en/rds/apsaradb-rds-for-mysql/authorize-accounts-to-manage-tables-views-and-fields).
