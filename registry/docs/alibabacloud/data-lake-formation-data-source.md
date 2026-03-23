Alibaba Cloud Data Lake Formation (DLF) is a fully managed platform that offers unified metadata, data storage, and data management. DLF provides features such as Metadata Management, Storage Management, Permission Management, Storage Analysis, and Storage Optimization. DataWorks Data Integration supports writing data to a DLF data source. This topic describes how to use a DLF data source.

## Limitations

A Data Lake Formation data source can only be used in Data Integration and requires a Serverless resource group.

## **Create a data source**

1.  Go to the Data Sources page.
    
    1.  Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the top navigation bar, select the desired region. In the left-side navigation pane, choose **More** > **Management Center**. On the page that appears, select the desired workspace from the drop-down list and click **Go to Management Center**.
        
    2.  In the left-side navigation pane of the SettingCenter page, click **Data Sources**.
        
    

2.  Click **Add Data Source**, search for and select DLF, and then configure the parameters as follows:
    
    **Parameter**
    
    **Description**
    
    **Data Source Name**
    
    Enter a custom name for the data source. The name must be unique within the workspace and can contain only **letters**, **digits**, and **underscores (\_)**. It cannot start with a digit or an underscore.
    
    **Configuration Mode**
    
    Only **Alibaba Cloud Instance Mode** is supported.
    
    **Endpoint**
    
    Select the endpoint of the DLF engine instance from the drop-down list.
    
    **Access Identity**
    
    You can select one of the following options:
    
    -   **Alibaba Cloud Account**
        
    -   **Alibaba Cloud RAM User**
        
    -   **Alibaba Cloud RAM Role**
        
    
    **Note**
    
    If you select **RAM User** or **RAM Role**, you must grant the following permissions to the RAM user or RAM role:
    
    -   In the [RAM console](https://ram.console.alibabacloud.com/), attach the **AliyunDataWorksDIAccessDLF** system policy to the **RAM User** or **RAM Role** to allow access to DLF metadata. For more information, see [Grant permissions to a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user).
        
    -   In the [Data Lake Formation console](https://dlf-next.console.alibabacloud.com/), grant the **Data Editor** permission on the target tables to the RAM role or RAM user.
        
    
    **DLF Data Catalog**
    
    Select a DLF Data Catalog in the same region as your DataWorks workspace.
    
    **Database Name**
    
    Select a database in the Data Catalog.
    
    After you configure the parameters, test the connectivity between the data source and the Serverless resource group. If the test passes, click **Complete Modification**. If the test fails, refer to [Network connectivity configuration](/help/en/dataworks/user-guide/network-connectivity-1/) for troubleshooting.
    

## **Create a data integration task**

You can use a Data Lake Formation data source in a DataWorks Data Integration task. For more information, see [Data synchronization to Data Lake Formation](/help/en/dataworks/user-guide/synchronize-data-to-data-lake-formation/).

## **Appendix: Script examples and parameters**

### **Offline task script configuration**

When configuring an Offline Task in Script Mode, you must format the script parameters correctly. For more information, see [Use the code editor](/help/en/dataworks/user-guide/configure-a-batch-synchronization-node-by-using-the-code-editor). The following sections describe the required parameters.

### **Reader script example**

```
{
   "type": "job",
   "version": "2.0",
   "steps": [
      {
         "stepType": "dlf",
         "parameter": {
            "datasource": "guxuan_dlf",
            "table": "auto_ob_3088545_0523",
            "column": [
               "id",
               "col1",
               "col2",
               "col3"
            ],
            "tableType": "table",
            "where": "id > 1"
         },
         "name": "Reader",
         "category": "reader"
      },
      {
         "stepType": "stream",
         "parameter": {
            "print": false
         },
         "name": "Writer",
         "category": "writer"
      }
   ],
   "setting": {
      "errorLimit": {
         "record": "" // The number of error records allowed.
      },
      "speed": {
         "throttle": true, // Enables (true) or disables (false) throttling. If false, the mbps parameter is ignored.
         "concurrent": 20, // Job Concurrency.
         "mbps": "12" // The maximum transfer rate in megabytes per second (MB/s).
      }
   },
   "order": {
      "hops": [
         {
            "from": "Reader",
            "to": "Writer"
         }
      ]
   }
}
```

### **Reader script parameters**

**Parameter**

**Description**

**Required**

**Default**

datasource

The name of the DLF data source.

Yes

None

table

The name of the source table.

Yes

None

tableType

The table type. Valid values: `table` (Paimon table), `format-table` (Format table), and `iceberg-table` (Iceberg table).

No

table

column

The columns to read from the source table.

Yes

None

where

The filter condition.

No

None

### **Writer script example**

```
{
   "type": "job",
   "version": "2.0",
   "steps": [
      {
         "stepType": "stream",
         "parameter": {
         },
         "name": "Reader",
         "category": "reader"
      },
      {
         "stepType": "dlf",
         "parameter": {
            "datasource": "guxuan_dlf",
            "column": [
               "id",
               "col1",
               "col2",
               "col3"
            ],
            "tableType": "table",
            "table": "auto_ob_3088545_0523"
         },
         "name": "Writer",
         "category": "writer"
      }
   ],
   "setting": {
      "errorLimit": {
         "record": "" // The number of error records allowed.
      },
      "speed": {
         "throttle": true, // Enables (true) or disables (false) throttling. If false, the mbps parameter is ignored.
         "concurrent": 20, // Job Concurrency.
         "mbps": "12" // The maximum transfer rate in megabytes per second (MB/s).
      }
   },
   "order": {
      "hops": [
         {
            "from": "Reader",
            "to": "Writer"
         }
      ]
   }
}
```

### **Writer script parameters**

**Parameter**

**Description**

**Required**

**Default**

datasource

The name of the DLF data source.

Yes

None

table

The name of the destination table.

Yes

None

tableType

The table type. Valid values: `table` (Paimon table), `format-table` (Format table), and `iceberg-table` (Iceberg table).

No

table

column

The columns to write to the destination table.

Yes

None
