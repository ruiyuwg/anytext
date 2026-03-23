Data Management (DMS) allows you to manage security rules for relational and non-relational databases on the SQL Console tab. The definition and classification of security rules on this tab vary for relational and non-relational databases. This topic describes how to configure security rules for Redis databases on the SQL Console tab.

## Checkpoints on the SQL Console tab

Checkpoint

Description

Permission Execution Statement Criteria

Allows you to set constraints on the permissions for command execution. For example, you can configure this checkpoint so that DMS checks whether a user has required permissions on a database, table, or column when the user submits a command to perform operations on the object.

Statement Criteria: Keys

Allows you to set constraints on key-related commands.

Statement Criteria: String

Allows you to set constraints on string-related commands.

Statement Criteria: List

Allows you to set constraints on list-related commands.

Statement Criteria: SET

Allows you to set constraints on set-related commands.

Statement Criteria: SortedSet

Allows you to set constraints on sorted set-related commands.

Statement Criteria: Hash

Allows you to set constraints on hash table-related commands.

Statement Criteria: Cpc

Allows you to set constraints on TairCpc commands.

Statement Criteria: Ts

Allows you to set constraints on TairTS commands.

Statement Criteria: Roaring

Allows you to set constraints on TairRoaring commands.

Statement Criteria: Search

Allows you to set constraints on TairSearch commands.

Statement Criteria: Other

Allows you to set constraints on commands of other types.

**Note** DMS provides a large number of predefined configurations and rules for checkpoints. You can modify the configurations, change the state of rules, and create custom rules based on your business requirements. For more information, see [Configure security rules](/help/en/dms/manage-security-rules#section-x99-12h-yyy).

The following flowchart shows how checkpoints work.

![liu](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3415471661/p482323.png)

## Factors and actions

### Factor

A factor is a system built-in variable that is used to obtain the context to be validated by security rules, such as the command types and the number of rows in which data is affected.

**Note**

-   A factor name consists of the prefix `@fac.` and the display name of the factor.
-   Each tab on the Details page of a security rule set displays different factors for different checkpoints.

Table 1. Factors provided on the SQL Console tab

Factor

Description

@fac.cmd\_type

The type of the command. For more information about the valid values, see [Supported Redis commands](#section-w26-xzf-xgy).

@fac.env\_type

The type of the environment. The value is the display name of the environment type, such as `DEV` or `PRODUCT`. For more information, see [Change the environment type of an instance](/help/en/dms/change-the-environment-type-of-an-instance).

@fac.is\_read

Indicates whether the current command is a read command. Valid values:

-   true
-   false

@fac.is\_write

Indicates whether the current command is a write command. Valid values:

-   true
-   false

@fac.current\_sql

The current command.

@fac.user\_is\_admin

Indicates whether the current user is a DMS administrator. Valid values:

-   true
-   false

@fac.user\_is\_dba

Indices whether the current user is a database administrator (DBA). Valid values:

-   true
-   false

@fac.user\_is\_inst\_dba

Indicates whether the current user is a DBA of the current database instance. Valid values:

-   true
-   false

### Action

An action is an operation that the system performs if the conditions specified in the IF statement are met. The action that you specify for a security rule shows the purpose of the security rule. For example, you can forbid the submission of a ticket, select an approval process, allow the execution of SQL statements, or reject the execution of SQL statements.

**Note**

-   An action name consists of the prefix `@act.` and the display name of the action.
-   Each tab on the Details page of a security rule set displays different actions for different checkpoints.

Table 2. Actions provided on the SQL Console tab

Action

Description

@act.reject\_execute

Rejects the request to run the current command.

@act.allow\_execute

Allows the current command to be run.

@act.check\_redis\_permission

Checks whether the current user has the permission to run the current command and runs the command if the user has the permission.

@act.query\_without\_permission\_check

Runs the current command without checking the permissions of the current user.

## Supported Redis commands

For more information about the Redis commands supported by DMS, see [Syntax support for Redis](/help/en/dms/syntax-support-for-redis#multiTask1143).
