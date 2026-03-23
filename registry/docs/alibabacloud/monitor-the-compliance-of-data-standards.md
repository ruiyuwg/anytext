After you publish a model to the production environment, Data Modeling in DataWorks automatically generates data quality monitoring rules. You can then use these rules to enforce data quality for the corresponding Table in the production environment. This topic describes how to automatically generate data quality monitoring rules after you publish a Table.

## Prerequisites

You have published the Table to the production environment. For more information, see [Materialize Logical Model](/help/en/dataworks/user-guide/publish-and-materialize-a-table#task-2090839).

## Considerations

After you publish a Table to the production environment, DataWorks can automatically generate data quality monitoring rules for columns in the **Column Management** section that meet the following criteria:

-   A column is a **Primary Key** or is set to **Not Null**.
    
-   A column is configured with an **Associated Standard Code**.
    

## **Procedure**

### **Publish a dimension table**

1.  Go to the Data Modeling page.
    
    Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the top navigation bar, select the desired region. In the left-side navigation pane, choose **Data Development and O&M** > **Data Modeling**. On the page that appears, select the desired workspace from the drop-down list and click **Go to Data Modeling**.
    
2.  In the top navigation bar, click **Dimensional Modeling**. Find the desired Table and double-click its name to open the details page.
    
3.  In the **Field Management** section, configure the **Primary Key**, **Not Null**, and **Field Association** for the required columns.
    
4.  Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5785962371/p840933.png) icon to save the Table, and then click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5785962371/p840959.png) icon to commit the Table as a new model version.
    
5.  Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5785962371/p840935.png) icon to publish the Table. In the **Publish** dialog box, configure the following parameters:
    
    -   **Effective Environment**: Select **Production** and **Development**.
        
    -   **Automatic Rule Generation Based on Field Standard**: Select **Yes**.
        
    
    Leave the remaining parameters at their default settings and click **Publish**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9536954471/p841030.png)
    

### **View quality rules**

#### **Rules generated from data standards**

Click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5785962371/p840972.png) **Quality Rules** in the top navigation bar to go to the **Data Quality Rule** page. You can view the quality rules that are automatically suggested. On the **Data Standards** page, click **Generate Data Quality Rule** to create all the corresponding quality rules in one click.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9536954471/p841046.png)

#### **Manually configure a rule**

Click **Configure Monitoring**. You will be taken to **Rule Management** > **Data Quality** > **Rule Configuration** > **Configure by Table**. Click **Create Rule** to create a rule. For more information, see [Configure rules for a single table](/help/en/dataworks/user-guide/configure-monitoring-rules-by-table).

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5785962371/p841057.png)

#### **Create a quality monitor**

After configuring the quality rules, go to the rule list and click a rule name in the **ID/rule name** column. This action takes you to **Rule Management** > **Rule Configuration** > **Configure by Table**. Click the **Monitor** tab and then click **Create Monitor**. Configure the following parameters:

**Module**

**Parameter**

**Description**

**Illustration**

**Basic Configurations**

**Monitor Name**

Enter a custom name for the quality monitor.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5785962371/p843827.png)

**Data Range**

The data range depends on the type of the monitored table. If the monitored table is partitioned, the **Data Range** defaults to using partitions. You can select a partition range, such as `ds=$[yyyymmdd-1]`.

**Running Settings**

**Trigger Method**

You can select one of the following options:

-   **Triggered by Node Scheduling in Production Environment**
    
-   **Triggered Manually**
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5785962371/p843829.png)

**Associated Scheduling Node** **(Triggered By Production Schedule)**

Click **Add Node** and select the target workspace and Node.

**Note**

The associated periodic scheduling task in the DataWorks Operation Center automatically triggers the quality rules in this monitor upon completion.

**Select Execution Resources**

Specifies the computing resources for running data quality checks. By default, the system selects the data source of the monitored Table in the current workspace. If you select a different data source, ensure that it can access the Table.

**Handling Policies**

**Issue Policy**

You can keep the default setting.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5785962371/p843831.png)

**Select Quality Rules**

Click **Batch Select**. In the panel that opens, select the quality rules to monitor by **ID/rule name**, **Template**, or **Association Range**.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5785962371/p843843.png)

**Note**

On the **Quality O&M** > **Monitor** page, you can view the **Latest Run Record** for the configured monitor and modify the **Alert Subscription** method and recipients.

**Important**

Enabling and running the generated quality rules incurs charges. For more information about billing, see [Billing of data quality instances](/help/en/dataworks/resource-costs#8b1ddd8f69cpt).

#### **Modify or delete rules from data standards**

You can modify or delete the rules generated from Data Standards in Data Modeling.

-   Change Column properties in the model. For example, change a **Column Name**, remove a **Not Null** requirement, or change the associated **Standard Code**.
    
-   Add or delete columns.
    
-   Delete the table model.
    

**Note**

After modifying or deleting columns in the table model, you must click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5785962371/p842378.png) icon to republish the Table and apply your changes.
