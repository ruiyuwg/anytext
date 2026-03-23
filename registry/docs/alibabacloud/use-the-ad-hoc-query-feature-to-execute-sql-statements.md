You can use the ad hoc query feature provided by DataWorks DataStudio to execute SQL statements in a MaxCompute project associated with your DataWorks workspace.

## **Prerequisites**

**A MaxCompute data source is added to DataWorks** and **is associated with DataStudio.**

Before you create an ODPS node to develop a MaxCompute task, you must add a MaxCompute project to your **DataWorks workspace** as a **MaxCompute data source** and **associate the MaxCompute data source with DataStudio** as **an underlying engine for MaxCompute task development**. For more information, see [Add a MaxCompute data source](/help/en/dataworks/user-guide/create-a-maxcompute-data-source) and [Environment preparation](/help/en/dataworks/user-guide/overview-26/#121136193b0l2).

## Create an ad hoc query node

1.  Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the top navigation bar, select the desired region. In the left-side navigation pane, choose **Data Development and O&M** > **Data Development**. On the page that appears, select the desired workspace from the drop-down list and click **Go to Data Development**.
    
2.  In the left-side navigation pane of the DataStudio page, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0737981371/p873370.png) icon.
    
3.  In the **Ad Hoc Query** pane, right-click **Ad Hoc Query** and choose **Create Node** > **ODPS SQL**.
    
4.  In the **Create Node** dialog box, configure the **Name** parameter.
    
    **Note**
    
    The node name cannot exceed 128 characters in length.
    
5.  Click **Confirm**.
    

## Execute SQL statements

After the ad hoc query node is created, you can execute SQL statements supported by MaxCompute in the node. For more information, see [Overview of MaxCompute SQL](/help/en/maxcompute/user-guide/overview-of-maxcompute-sql#concept-awk-jmb-5db).

**Note**

-   When you run a MaxCompute task, the estimated fees are displayed on the page. The fees are included in the bills of MaxCompute. The estimation result is for reference only. You can view your bill for the actual costs. For more information, see [Billable items and billing methods](/help/en/maxcompute/product-overview/overview-1/).
    
-   If an error is reported during fee estimation, a potential cause is that a desired table does not exist or you do not have the required permissions. You can ignore this error and run the node. Then, you can handle the error based on a reported error message.
    

For example, to [Table operations](/help/en/maxcompute/table-operations-1#concept-l3j-w31-wdb), enter the following statement and click the ![运行](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7493846851/p72640.png) icon in the top toolbar of the configuration tab of the node.

```
create table if not exists sale_detail
(
shop_name     string,
customer_id   string,
total_price   double
)
partitioned by (sale_date string,region string);
-- Create a partitioned table named sale_detail.
```

You can view the estimated cost for the statement execution. In detail, you can click the **Run** icon in the top toolbar, select a **resource group** that you want to use in the **Parameters** dialog box, and then click **Run**. In the Estimate MaxCompute Computing Cost dialog box, you can view the estimated cost.![估价](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8049925161/p41139.png)![估价](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0395414861/p646650.png)

View the execution details and result in the result tab of the lower part of the configuration tab. If the SQL statement is successfully executed, the result is shown as OK. If the SQL statement is successfully executed, the result is shown as **OK**.

You can execute SQL statements that follow the [SELECT syntax](/help/en/maxcompute/user-guide/select-syntax#concept-i1q-lkb-wdb) in the same way.
