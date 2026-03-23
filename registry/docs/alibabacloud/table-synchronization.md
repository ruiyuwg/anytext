In the Table Sync module in Data Management (DMS), you can configure security rules to validate operations that are related to Schema Synchronization, Shadow Table Synchronization, Empty Database Initialization, and Table Consistency Repair.

## Basic configuration items

You can configure the following basic configuration items in the security rules of the Table Sync module:

-   Enable execution capability: specifies whether to enable SQL-based synchronization. If this configuration item is set to OFF, you can compare table schemas but cannot execute SQL statements to synchronize tables. In addition, the security rules that you configured for other basic configuration items and checkpoints of the Table Sync module become invalid.
    
-   Database table synchronization default approval Template: the default approval template for table synchronization. You can use the default approval template or click **Switch Approval Template** to switch to another approval template. For more information, see [Change the default approval template](#section-u0l-fh2-dms).
    
-   Analysis phase script Expiration Time: the validity period of the analysis phase script. You can specify an appropriate validity period in which synchronization can be canceled if schemas are changed in the destination database.
    

## Checkpoints

The Table Sync module provides four independent checkpoints. For example, if you submit a **Schema Synchronization** ticket, only the security rules that are configured for **Basic Configuration Item** and **Schema Synchronization Validation** checkpoints are valid.

-   **Schema Synchronization Validation**: Under this checkpoint, you can configure approval processes or constraints for **Schema Synchronization** tickets.
    
-   **Shadow Table Synchronization Validation**: Under this checkpoint, you can configure approval processes or constraints for **Shadow Table Synchronization** tickets.
    
-   **Empty Database Initialization Validation**: Under this checkpoint, you can configure approval processes or constraints for **Empty Database Initialization** tickets.
    
-   **Table Consistency Repair Validation**: Under this checkpoint, you can configure approval processes or constraints for **Table Consistency Repair** tickets.
    

You can use the default rules that are provided by DMS for each checkpoint or customize rules based on your requirements. For more information, see [Create a rule](#section-elu-2an-iqe).

## Factors and actions

### Factors

A factor is a predefined variable in DMS. You can use factors to obtain the context to be validated by security rules. The context includes SQL statement categories and the number of rows to be affected. A factor name consists of the prefix `@fac.` and the display name of the factor. Each module of the Security Rules tab provides different factors for different checkpoints. The following table describes the factors that are provided for the checkpoints in the **Table Sync** module.

**Factor**

**Description**

@fac.env\_type

The type of the environment. The value is the display name of the environment type, such as `DEV` or `PRODUCT`. For more information, see [Change the environment type of an instance](/help/en/dms/change-the-environment-type-of-an-instance).

@fac.schema\_name

The name of the schema.

### Actions

An action in a security rule is an operation that DMS performs when the `IF` condition in the rule is met. For example, DMS can forbid the submission of a ticket, select an approval process, approve a ticket, or reject a ticket. An action in a security rule shows the purpose of the security rule. An action name consists of the prefix `@act.` and the display name of the action. Each module provides different actions for different checkpoints. The following table describes the actions that are provided for the checkpoints in the **Table Sync** module.

**Action**

**Description**

@act.forbid\_submit\_order

Forbids a ticket from being submitted. The statement is in the following format: `@act.forbid_submit_order 'Reasons for forbidding the ticket from being submitted'`.

@act.do\_not\_approve

Specifies the ID of an approval template. For more information, see [Configure approval processes](/help/en/dms/configure-approval-processes).

@act.choose\_approve\_template

@act.choose\_approve\_template\_with\_reason

## Templates of security rules

DMS provides you with a large number of predefined templates of security rules. You can select a template or customize a template based on your business requirements. The following table describes the templates of security rules in the **Table Sync** module.

**Checkpoint**

**Template**

Schema Synchronization Validation

Free of Approval for schema synchronization in a test environment

Disable SQL execution for schema synchronization

Disable SQL execution for schema synchronization in an online environment

Approval process for schema synchronization in an online environment

Shadow Table Synchronization Validation

Free of Approval for shadow table synchronization in a test environment

Disable SQL execution for shadow table synchronization

Disable SQL execution for shadow table synchronization in an online environment

Approval process for shadow table synchronization in an online environment

Empty Database Initialization Validation

Free of Approval for empty database initialization in a test environment

Disable SQL execution for empty database initialization

Disable SQL execution for empty database initialization in an online environment

Approval process for empty database initialization in an online environment

Table Consistency Repair Validation

Free of Approval for table consistency repair in a test environment

Disable SQL execution for table consistency repair

Disable SQL execution for table consistency repair in an online environment

Approval process for table consistency repair in an online environment

## Enable execution capability

To enable SQL-based synchronization, you must set the basic configuration item named **Enable execution capability (if closed, other rules are invalid)** to ON. If this configuration item is set to OFF, you can only compare table schemas but cannot execute SQL statements to synchronize tables.

1.  Log on to the [DMS console V5.0](https://dms.alibabacloud.com/new).
2.  Move the pointer over the ![2023-01-28_15-57-17.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6688322961/p674752.png) icon in the upper-left corner and choose **All functions** > **Security and Specifications** > **Security Rules**.
    
    **Note**
    
    If you use the DMS console in normal mode, choose **Security and Specifications** > **Security Rules** in the top navigation bar.
    
3.  On the **Security Rules** tab, find the security rule set that you want to modify and click **Edit** in the **Actions** column.
    
4.  On the **Details** page, choose **Database Development** > **Table Sync** in the left-side navigation pane.
    
5.  On the **Table Sync** tab, click **Basic Configuration Item**.
    
6.  Find the configuration item named **Enable execution capability (if closed, other rules are invalid)** and click **Edit** in the Actions column.
    
7.  In the **Change Configuration Item** dialog box, turn on **Configuration Value**.
    
8.  Click **Submit**.
    

## Change the default approval template

1.  Log on to the [DMS console V5.0](https://dms.alibabacloud.com/new).
2.  Move the pointer over the ![2023-01-28_15-57-17.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6688322961/p674752.png) icon in the upper-left corner and choose **All functions** > **Security and Specifications** > **Security Rules**.
    
    **Note**
    
    If you use the DMS console in normal mode, choose **Security and Specifications** > **Security Rules** in the top navigation bar.
    
3.  On the **Security Rules** tab, find the security rule set that you want to modify and click **Edit** in the **Actions** column.
    
4.  On the **Details** page, choose **Database Development** > **Table Sync** in the left-side navigation pane.
    
5.  On the **Table Sync** tab, click **Basic Configuration Item**.
    
6.  Find the configuration item named **Database table synchronization default approval Template** and click **Edit** in the Actions column.
    
    ![](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7608956161/p236746.png)
    
7.  In the **Change Configuration Item** dialog box, click **Switch Approval Template**.
    
8.  Find the **template** that you want to apply and click **Select** in the **Actions** column.
    
    **Note**
    
    You can also click **Reset to Free of Approval** to skip approval processes.
    
9.  Click **Submit**.
    

## Create a rule

1.  Log on to the [DMS console V5.0](https://dms.alibabacloud.com/new).
2.  Move the pointer over the ![2023-01-28_15-57-17.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6688322961/p674752.png) icon in the upper-left corner and choose **All functions** > **Security and Specifications** > **Security Rules**.
    
    **Note**
    
    If you use the DMS console in normal mode, choose **Security and Specifications** > **Security Rules** in the top navigation bar.
    
3.  On the **Security Rules** tab, find the security rule set that you want to modify and click **Edit** in the **Actions** column.
    
4.  On the **Details** page, choose **Database Development** > **Table Sync** in the left-side navigation pane.
    
5.  On the **Table Sync** tab, click **Create Rule** next to **Actions**.
    
    ![](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7608956161/p236748.png)
    
6.  In the **Create Rule - Table Sync** dialog box, set the parameters in the following table.
    
    **Parameter**
    
    **Description**
    
    **Checkpoints**
    
    Required. The checkpoint for which you want to create the security rule. On the Table Sync tab, four checkpoints are provided:
    
    -   Schema Synchronization Validation
        
    -   Shadow Table Synchronization Validation
        
    -   Empty Database Initialization Validation
        
    -   Table Consistency Repair Validation
        
    
    **Template Database**
    
    Optional. The template that you want to use to create the security rule. DMS provides a large number of security rule templates. After you select a **checkpoint**, you can click **Load from Template Database** and select a template as required. For more information about the available templates, see [Templates of security rules](#section-hpv-mhx-y5v).
    
    **Rule Name**
    
    Required. The name of the custom security rule. If you load a template from the **template database**, the rule name is automatically entered.
    
    **Rule DSL**
    
    Required. The domain-specific language (DSL) statement that you want to use to configure the security rule. For more information, see [DSL syntax for security rules](/help/en/dms/dsl-syntax-for-security-rules). If you load a template from the **template database**, the DSL statement is automatically entered.
    
7.  Click **Submit**.
    
8.  By default, the security rule that you create is in the **Disabled** state. Click **Enable** in the **Actions** column.
    
9.  In the dialog box that appears, click **OK**.
