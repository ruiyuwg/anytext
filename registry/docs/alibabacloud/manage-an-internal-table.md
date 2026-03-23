This topic describes how to create, edit, and delete internal tables in HoloWeb. It also explains how to preview table data and view DDL statements.

## Prerequisites

Before you manage internal tables, make sure the following requirements are met:

-   You have logged on to a Hologres instance. For more information, see [Log on to an instance](/help/en/hologres/user-guide/log-on-to-an-instance#section-ds8-hm8-pa5).
    

## Navigate to HoloWeb

All operations in this topic are performed on the HoloWeb developer page. To open HoloWeb, perform the following steps:

1.  Log on to the [Hologres management console](https://hologram.console.alibabacloud.com/#/instance).
    
2.  In the top navigation bar, select a region.
    
3.  Click **Go to HoloWeb** to open the HoloWeb developer page.
    

## Navigate to an existing table

The edit, delete, preview, and DDL operations in this topic require you to locate an existing internal table. Use the following steps each time you need to navigate to a table:

1.  In the left-side navigation pane, click **Instances Connected** to display all connected instance names.
    
2.  Click a database under the target instance to display all schemas.
    
3.  Click a schema to display all created internal tables.
    

## Create an internal table

1.  On the HoloWeb developer page, in the top menu bar, click **Metadata Management**.
    
2.  Use one of the following methods to create an internal table:
    
    -   **Method 1**: Click **Create Table** to create an internal table directly.
        
    -   **Method 2**: Right-click the target schema or **Table** under the schema, then select **Create Internal Table**.
        
    
    ![Create Internal Table page in HoloWeb showing the schema tree and creation options](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3261274271/p839579.png)
    
3.  On the **Create Internal Table** page, configure the parameters described in the following sections, then click **Submit** in the upper-right corner.
    
4.  After submission, refresh the corresponding schema in the left-side navigation pane to display the new internal table.
    

### Basic properties

**Parameter**

**Description**

Mode

The schema name. Select the default **public** schema or a new schema name.

Table Name

The name of the new Hologres internal table.

Description

The description of the new Hologres internal table.

### Fields

**Parameter**

**Description**

Field Name

The identifier for each column in the table.

Data Type

The data type of the field.

Primary Key

The unique identifier for each data entry in the table.

Nullable

Indicates whether the field can be set to null.

Array

An ordered sequence of elements.

Default Value

The default value for the field.

Description

The description of the field.

Actions

Includes **Delete**.

### Attributes

**Parameter**

**Description**

Storage Mode

The storage layout for the table. Options include **Column-oriented Storage**, **Row-oriented Storage**, and **Row-column Storage**. The default is **Column-oriented Storage**.

Data Lifecycle

The retention period for table data, calculated from the first data write. After the time to live expires, the table data is purged within a certain period (no fixed timeframe). The default value is **Permanent**.

Binlog

Indicates whether binary logging (Binlog) is enabled for the table. For more information, see [Subscribe to Hologres Binlog](/help/en/hologres/user-guide/subscribe-to-hologres-binary-logs#concept-2037122).

Lifecycle of Binary Logs

The time to live for Binlog. The default value is **Permanent**. For more information, see [Subscribe to Hologres Binlog](/help/en/hologres/user-guide/subscribe-to-hologres-binary-logs#concept-2037122).

Distribution Column

The distribution\_key for the table. For more information, see [Distribution Key](/help/en/hologres/user-guide/distribution-key#task-2274830).

Event Time Column

The event\_time\_column for the table. For more information, see [Event Time Column (Segment Key)](/help/en/hologres/user-guide/segment-key#task-2274831).

Clustering Key

The clustering\_key for the table. For more information, see [Clustering key](/help/en/hologres/user-guide/clustering-key#task-2274832).

Dictionary Encoding Columns

The dictionary\_encoding\_columns for the table. For more information, see [Dictionary Encoding](/help/en/hologres/user-guide/dictionary-encoding#task-2274834).

Bitmap Column

The bitmap\_columns for the table. For more information, see [Bitmap Index](/help/en/hologres/user-guide/bitmap-index#task-2274833).

### Partitioning

**Parameter**

**Description**

Partitioned Tables

Select a partition field.

## Edit an internal table

You can add fields to an existing internal table. Deleting existing table fields is not supported in **Edit Table** mode.

1.  [Navigate to an existing table](#section-navigate-existing-table).
    
2.  Right-click the target internal table, then select **Open Table**.
    
3.  In the upper-right corner of the page, click **Edit Table**.
    
4.  At the bottom of the page, click **Add Field** to add table fields visually.
    
    ![Edit Table page showing the Add Field option](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1130493261/p132198.png)
    
    **Note**
    
    Deleting an existing field is not supported.
    
5.  Click **Submit** to complete editing the current internal table.
    

## Delete an internal table

1.  [Navigate to an existing table](#title-navigate-existing-table).
    
2.  Right-click the target internal table, then select **Delete Table**.
    
3.  Click **OK**.
    

## Preview table data

1.  [Navigate to an existing table](#section-navigate-existing-table).
    
2.  Double-click the target internal table. On the table editing page, click **Data Preview**.
    
    The following image shows an example of internal table data preview.
    
    ![Data Preview tab displaying sample rows from an internal table](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2130493261/p273779.png)
    

## View DDL statements

1.  [Navigate to an existing table](#section-navigate-existing-table).
    
2.  Double-click the target internal table. On the table editing page, click **DDL Statements**.
    
    The following image shows an example of a DDL statement preview.
    
    ![DDL Statements tab showing the CREATE TABLE statement for an internal table](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2130493261/p273781.png)
    

## Related topics

You can also create, modify, and delete internal tables using SQL statements. For more information, see the following topics:

-   [CREATE TABLE](/help/en/hologres/developer-reference/create-tables)
    
-   [CREATE TABLE AS](/help/en/hologres/developer-reference/create-table-as#DAS)
    
-   [CREATE TABLE LIKE](/help/en/hologres/developer-reference/create-table-like)
    
-   [ALTER TABLE](/help/en/hologres/developer-reference/alter-table)
    
-   [DROP TABLE](/help/en/hologres/developer-reference/drop-table)
    
-   [Physical Partitioned Table](/help/en/hologres/developer-reference/partition-table/)
