In Data Management (DMS), you can execute SQL statements for data changes. However, the execution of such SQL statements requires a high level of security. DMS allows you to configure security rules on the SQL Correct tab to validate the submission and approval of tickets for data changes. Only the SQL statements that are validated by the security rules can be executed.

## Prerequisites

You are a **DMS administrator**, a **database administrator (DBA)**, or a **security administrator**.

## Background information

DMS allows you to write domain-specific language (DSL) statements to define security rules. You can specify risk levels for data changes based on your business requirements. Then, you can specify different approval processes for data change tickets at different risk levels. For example, you can specify a strict approval process to control the execution of SQL statements or a loose approval process to allow the execution of all SQL statements.

## Checkpoints provided on the SQL Correct tab

**Checkpoint**

**Description**

**Example**

**Basic Configuration Item**

By default, the following five rules are provided:

-   **Data change default approval Template**: By default, the ID of the approval template used for data change tickets is 853, and the approver is the DBA of the database involved.
    
    **Note**
    
    For more information about how to change the default approval template, see the [Change the default approval template](#section-3u3-xfn-ke8) section of this topic.
    
-   **Data Change risk level list**: Data changes in tickets can be marked with different risk levels. You can specify different risk levels and approval processes for different scenarios. This risk level list is primarily used to create rules for the **Risk Identification Rules** and **Risk Approval Rules** checkpoints.
    
    By default, the following four risk levels are supported:
    
    -   LOW: low risk
        
    -   MIDDLE: medium risk
        
    -   HIGH: high risk
        
    -   HIGHEST: major risk
        
-   **Whether data import supports selecting speed mode**: specifies whether data can be imported in speed mode into a database. For more information, see [Import data](/help/en/dms/import-data#multiTask1611).
    
-   **Skip Validation on Affected Rows for Regular Data Change**: specifies whether to skip the verification on the number of affected rows in the precheck for a data change ticket. If you enable the rule, the verification on affected rows can be skipped. If you disable the rule, the verification on affected rows cannot be skipped.
    
-   **The Normal Data Modify ticket cannot be submitted if the specified number of affected rows is inconsistent with the result of the row count verification.**: specifies whether to submit a data change ticket if the specified number of affected rows is inconsistent with the result of the row count verification. If you enable the rule, the ticket cannot be submitted if the specified number of affected rows is inconsistent with the result of the row count verification. If you disable the rule, the ticket can be submitted if the specified number of affected rows is inconsistent with the result of the row count verification.
    

\-

**SQL execution rules**

SQL execution rules can be used to specify the SQL statements that are allowed to be executed in the SQL Console module.

**Note**

If two conflicting rules are enabled, the rule that is more strict prevails.

For example, if the following two rules are both enabled, the second rule prevails.

-   All DML can execute directly in SQLConsole
    
-   All DML must execute by ticket
    

If you want to allow the execution of specific DML statements to change the data of a database in an online environment, you can create the following SQL execution rule:

```
if
  @fac.env_type not in ['product']
  and
  @fac.sql_type in [ 'UPDATE','DELETE','INSERT']
then
  @act.allow_submit
end
```

The preceding code indicates that `UPDATE`, `DELETE`, and `INSERT` statements are allowed to be executed on a database if the database is in an offline environment.

**Risk Identification Rules**

Risk identification rules are used to identify and classify risks in data changes. You can create risk identification rules based on your database environment, the number of rows in which data is affected, and the categories and subcategories of SQL statements.

**Note**

A data change can be marked with multiple risk levels by multiple security rules. The highest risk level prevails.

For example, a data change is marked with low risk by five rules, medium risk by three rules, and high risk by one rule. In this case, the data change is identified as a high-risk operation.

If you want to mark data changes on a database that is in an offline environment with low risk, you can create the following risk identification rule:

```
if
  @fac.env_type not in ['product','pre']
then
  @act.mark_risk 'low 'Low risk level: offline environment'
end
```

The preceding code indicates that a data change is marked with low risk if the database involved is in an offline environment.

**Risk Approval Rules**

Risk approval rules are used to specify built-in or custom approval rules for tickets that involve data changes marked with different risk levels.

If a data change is checked by all rules configured for the **Risk Identification Rules** checkpoint but fails to be marked with a risk level, the approval process specified for the **Data change default approval Template** rule of the **Basic Configuration Item** checkpoint is used.

By default, an offline environment is identified as a factor at low risk and requires no approval.

**Batch Data import rules**

These rules apply to only the validation of data import tickets.

Allow bulk import of INSERT statements

## Change the default approval template

1.  Log on to the [DMS console V5.0](https://dms.alibabacloud.com/new).
2.  Move the pointer over the ![2023-01-28_15-57-17.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6688322961/p674752.png) icon in the upper-left corner and choose **All functions** > **Security and Specifications** > **Security Rules**.
    
    **Note**
    
    If you use the DMS console in normal mode, choose **Security and Specifications** > **Security Rules** in the top navigation bar.
    
3.  On the **Security Rules** tab, find the security rule set that you want to manage and click **Edit** in the **Actions** column.
    
4.  On the **Details** page, click the **SQL Correct** tab on the left.
    
5.  On the **SQL Correct** tab, select **Basic Configuration Item** for the Checkpoints parameter.
    
6.  Find the **Data change default approval Template** rule and click **Edit** in the **Actions** column.
    
7.  In the **Change Configuration Item** dialog box, click **Switch Approval Template**.
    
8.  In the **Switch Approval Template** dialog box, find the template that you want to use and click **Select** in the **Actions** column.
    
    **Note**
    
    If you do not require approval for tickets by default, you can click **Reset to Free of Approval** to skip approval processes.
    
9.  Click **Submit**.
    

## Factors and actions provided on the SQL Correct tab

### Factor

A factor is a predefined variable in DMS. You can use factors to obtain the context to be validated by security rules. The context includes SQL statement categories and the number of rows to be affected.

-   A factor name consists of the prefix `@fac.` and the display name of the factor.
    
-   Each tab on the Details page of a security rule set provides different factors for different checkpoints.
    

Table 1. Factors provided on the SQL Correct tab

**Factor**

**Description**

@fac.env\_type

The type of the environment. The value is the display name of the environment type, such as `DEV` or `PRODUCT`. For more information, see [Change the environment type of an instance](/help/en/dms/change-the-environment-type-of-an-instance).

@fac.sql\_type

The type of the SQL statement. The value is the subcategory of the SQL statement, such as `UPDATE` or `INSERT`. For more information, see the SQL subcategories that are described in the [SQLConsole for relational databases](/help/en/dms/sql-console-for-relational-databases) topic.

@fac.detail\_type

The type of the data change ticket. Valid values:

-   COMMON: a Normal Data Modify ticket
    
-   CHUNK\_DML: a Lockless change ticket
    
-   PROCEDURE: a Programmable Object ticket
    
-   CRON\_CLEAR\_DATA: a History Data Clean ticket
    
-   BIG\_FILE: a Large Data Import ticket
    

@fac.is\_logic

A Boolean value that indicates whether the database to be affected is a logical database.

@fac.extra\_info

Other information about the ticket. This factor is not in use.

@fac.is\_ignore\_affect\_rows

A Boolean value that indicates whether to skip the verification.

@fac.insert\_rows

The number of data rows to be inserted.

@fac.update\_delete\_rows

The number of rows of data to be updated.

@fac.max\_alter\_table\_size

The size of the largest tablespace in which the table to be modified is stored.

@fac.is\_has\_security\_column

A Boolean value that indicates whether the SQL statement to be executed involves sensitive fields.

@fac.security\_column\_list

The sensitive fields that the SQL statement to be executed involves.

@fac.risk\_level

The risk level of the data change to be performed by the SQL statement.

@fac.risk\_reason

The reason based on which the data change is marked with this risk level.

@fac.table\_name\_list

The name of tables involved in the data change. Sample code:

```
if    
   'tb_order' in @fac.table_name_list or 'tb1_order' in @fac.table_name_list
then    
    @ act.mark_risk 'high''High-level risk: involving order table'
end
```

The proceeding code indicates that if the name of the table involved in the data change is tb\_order or tb1\_order, the data change is marked with high risk.

### Action

An action is an operation that the system performs if the conditions specified in the `if` statement are met. The action that you specify for a security rule shows the purpose of the security rule. For example, you can forbid the submission of a ticket, select an approval process, approve a ticket, or reject a ticket.

-   An action name consists of the prefix `@act.` and the display name of the action.
    
-   Each tab on the Details page of a security rule set provides different actions for different checkpoints.
    

Table 2. Actions provided on the SQL Correct tab

**Action**

**Description**

@act.allow\_submit

Allows the submission of SQL statements to be executed in a ticket.

@act.allow\_execute\_direct

Allows the execution of SQL statements in the SQL Console.

@act.forbid\_execute

Forbids the execution of SQL statements.

@act.mark\_risk

Marks a data change with a risk level. Example: `@act.mark_risk 'middle' 'Medium-level risk: online environment'`.

@act.do\_not\_approve

Specifies the ID of an approval template. For more information, see [Configure approval processes](/help/en/dms/configure-approval-processes).

@act.choose\_approve\_template

@act.choose\_approve\_template\_with\_reason
