Data Management (DMS) provides a centralized **Configuration Management** page where DMS administrators can view and modify system-wide settings. These settings control security policies, instance management behavior, SQL execution limits, change management workflows, audit and compliance features, and display preferences across the entire tenant.

## Prerequisites

You are a DMS administrator. For more information about how to view the role of a user, see [View system roles](/help/en/dms/product-overview/view-system-roles#task-2121689).

## Prerequisites

You must have the **DMS administrator** role. For information about how to check your role, see [View system roles](/help/en/dms/product-overview/view-system-roles).

## Access Configuration Management

1.  Log on to the [DMS console V5.0](https://dms.alibabacloud.com/new).
    
2.  In the top navigation bar, choose **O&M**. In the left-side navigation pane, click **Configuration Management**.
    
    **Note**
    
    If you use the DMS console in simple mode, move the pointer over the ![2022-10-21_15-25-22.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6797900961/p696237.png) icon in the upper-left corner of the DMS console and choose **All functions** > **O&M** > **Configuration Management**.
    

## Modify a configuration item

1.  On the **Configuration Management** page, find the configuration item that you want to modify and click **Change** in the **Actions** column.
    
    **Note**
    
    For more information about configuration items, see the [Configuration item reference](#section-jam-zdf-d9j) section of this topic.
    
2.  In the **Change Parameter Configuration** dialog box, change the value based on your business requirements.
    
3.  Click **Confirm Change**.
    

## Configuration item reference

The following sections list all configuration items grouped by functional domain.

### Security and access control

**Configuration item**

**Valid values**

**Description**

**Whether to enable access source IP control**

**Y** / **N**

Controls whether the IP address whitelist feature is enforced. When set to **Y**, a DMS administrator can configure the whitelist by choosing **Security and Specifications** in the top navigation bar, then clicking **Access IP Whitelists** in the left-side navigation pane. Only access from whitelisted IP addresses or CIDR blocks is allowed. When set to **N**, all users within the current tenant account can access DMS from any IP address.

**Whether to enable RAM permission verification**

**Y** / **N**

Controls whether DMS verifies Resource Access Management (RAM) permissions for user operations. When set to **Y**, RAM permissions are verified. When set to **N**, RAM permission checks are skipped.

**Allow sub-accounts to automatically join the tenant**

**Y** / **N**

Controls whether RAM users (sub-accounts) are automatically added to the current tenant account. When set to **Y**, RAM users are automatically added. When set to **N**, RAM users are not automatically added to the current tenant account.

**Access control is enabled for new users by default**

**Y** / **N**

Controls whether access control is automatically enforced for newly added users. When set to **Y**, access control is enforced by default. When set to **N**, new users are not subject to access control.

**Allow OWNER to authorize users**

**Y** / **N**

Controls whether a data owner can grant permissions on data resources such as instances, databases, and tables to other users. When set to **Y**, data owners can grant permissions. When set to **N**, a data owner cannot grant permissions on data resources such as instances, databases, and tables to other users.

### Instance management

**Configuration item**

**Valid values**

**Description**

**Whether to enable automatic synchronization of instance resources on the cloud**

**Y** / **N**

Controls whether DMS automatically registers all ApsaraDB RDS instances under the current Alibaba Cloud account. When set to **Y**, instances are registered automatically. When set to **N**, instances must be registered manually.

### SQL execution

**Configuration item**

**Valid values**

**Description**

**Whether to enable the super SQL mode.**

**Y** / **N**

Controls whether users can execute SQL statements in super SQL mode. When set to **Y**, super SQL mode is available. When set to **N**, super SQL mode is not available.

**Whether large table archive notification is enabled in SQLConsole**

**Y** / **N**

Controls whether DMS notifies users when large tables are archived in SQLConsole. When set to **Y**, archive notifications are sent. When set to **N**, no archive notifications are sent.

**Enable SQL statement field sensitive level propagation (prerequisite: Sensitive Data protection is enabled for the instance)**

**Y** / **N**

Controls whether sensitivity levels propagate from source fields to SQL statement output fields. Requires that Sensitive Data protection is already enabled for the instance. When set to **Y**, sensitivity levels are propagated. When set to **N**, sensitivity levels are not propagated.

**Maximum number of queries for the day**

Integer

The maximum number of queries each user can execute per day. Once a user reaches this limit, they cannot run additional queries until the next day. This setting applies to all users within the current tenant account.

**Day query rows upper limit**

Integer

The maximum number of data rows that can be returned to each user per day. Once a user reaches this limit, they cannot run additional queries until the next day. This setting applies to all users within the current tenant account.

**Redis gets the maximum number of polls for the key list.**

Integer

The maximum number of polling iterations when Redis retrieves the key list. If the value is less than or equal to 0, no limit is imposed.

**Maximum number of returned rows for cross-database queries**

Integer (default: 100, maximum: 3000)

The maximum number of rows returned for cross-database queries.

### Change management

**Configuration item**

**Valid values**

**Description**

**How data changes are performed**

**COMMITOR** / **AUTO** / **LAST\_AUDITOR**

Determines who executes a data change after the associated ticket is approved. **COMMITOR**: The data change is performed by the user who submits the ticket. **AUTO**: The data change is automatically performed after the ticket is approved. **LAST\_AUDITOR**: The data change is performed by the last user who approves the ticket.

**Whether to force rollback SQL to be entered when submitting a data change work order, Y indicates that rollback SQL must be entered, and N indicates that rollback SQL is not to be force entered**

**Y** / **N**

Controls whether users must provide executable rollback SQL statements when submitting a data change ticket. When set to **Y**, rollback SQL is required. When set to **N**, rollback SQL is optional.

**Note**

"Work order" in this setting's name refers to a ticket in DMS.

**The timeout period for the number of rows affected by data change verification.**

Integer (seconds)

Before performing a data change, DMS calculates the number of rows that may be affected. If the data volume is large, this calculation can take a long time. This setting specifies a timeout in seconds. DMS terminates the calculation after the timeout expires so that the data change can proceed.

**Data Change reason classification**

JSON string

The predefined reasons users can select when submitting a data change ticket. The value must be a valid JSON string. For the default values and format, see [Appendix: Reasons for data changes](#section-g9y-9lm-a49).

**Whether the approval node of the approval flow automatically eliminates the submitter (valid when there are multiple approvers)**

**Y** / **N**

Controls whether the user who submits a ticket is automatically excluded from the list of approvers on an approval node. When set to **Y**, the submitter is excluded. When set to **N**, the submitter can also serve as an approver. This setting only applies when there are multiple approvers on an approval node.

**Unauthorized Approval Configurations for Workflow**

Enable / Disable

Controls whether specific roles or users can participate in ticket approval processes even if they are not designated approvers. When enabled, you can specify the applicable roles or users, ticket types, and approval templates. For example, if you assign the database administrator (DBA) role and configure a data export ticket with an approval template named `Owner-->DBA`, users with the DBA role can approve data export tickets that use that template. By default, when no ticket type or approval template is specified, the configured roles and users can approve all types of tickets across all approval templates. When disabled, only the approvers specified in the approval process can approve tickets. For more information, see [Configure approval processes](/help/en/dms/configure-approval-processes).

**Minimum Word Limit for Work Order Business Background**

Integer

The minimum number of characters required in the business background description of a ticket. If the value is 0 or less, no minimum is enforced.

**Note**

"Work Order" in this setting's name refers to a ticket in DMS.

### Data export

**Configuration item**

**Valid values**

**Description**

**Data export reason classification**

Predefined categories

The categories that users can select as the reason for a data export. Default categories: **Data analysis** (export data for analysis), **Troubleshooting** (export data for troubleshooting), **Data synchronization** (export data for synchronization), **Data test** (export data for testing), **Business operations** (export data to verify business requirements).

### Feature and access management

**Configuration item**

**Valid values**

**Description**

**The whitelist of users who are allowed to create a task flow.**

User list

Specifies one or more users who are allowed to create task flows.

**List of disabled functional modules**

Feature list

Specifies one or more features to disable. After a feature is disabled, its entry point in the DMS console is hidden.

### Audit and compliance

**Configuration item**

**Valid values**

**Description**

**\[Data Security\] Anti-leakage Digital Watermarking Function**

**Y** / **N**

Controls whether digital watermarks are displayed on DMS pages to improve data security. When set to **Y**, digital watermarks are applied. When set to **N**, no digital watermarks are applied.

**Watermark for Exported SQL Result Sets**

**Y** / **N**

Controls whether DMS applies watermarks to exported SQL result sets. When set to **Y**, watermarks are applied. When set to **N**, exported SQL result sets do not contain watermarks.

### Display preferences

**Configuration item**

**Valid values**

**Description**

**DMS locale: ZH/EN/JA/ZT**

**ZH** (Simplified Chinese) / **EN** (English) / **JA** (Japanese) / **ZT** (Traditional Chinese)

Sets the language used for operation logs returned by DMS.

## Appendix: Reasons for data changes

DMS provides the following default reasons for data changes. The value of the **Data Change reason classification** configuration item must be a JSON string in the following format:

```
[{"key":"config_correct","value":"Modify Config"},
{"key":"project_init_data","value":"Init Project Data"},
{"key":"program_bug","value":"Program Bug"},
{"key":"require_deal_without_backend_function","value":"Requirements Without Backend Function"},
{"key":"history_data_clear","value":"History Data Clean"},
{"key":"test","value":"Test"},
{"key":"mis_operation","value":"Mis Operation"},
{"key":"others","value":"Others"}]
```

The following table describes the default reason codes.

**Key**

**Display value**

**Description**

config\_correct

Modify Config

Modify configuration items.

project\_init\_data

Init Project Data

Initialize data for a project.

program\_bug

Program Bug

Fix a bug.

require\_deal\_without\_backend\_function

Requirements Without Backend Function

Manage data for an application that does not support backend management.

history\_data\_clear

History Data Clean

Clear historical data.

test

Test

Perform a test.

mis\_operation

Mis Operation

Restore data after an accidental operation.

others

Others

Change data for other reasons.
