Storeviews support join queries and analysis across multiple LogStores. This topic describes how to create a Storeview for Logstore and how to use its query and analysis features.

## Create a Log-Based Data View

### **Prerequisites**

A project and a Standard logstore are created, and logs are collected. For more information, see [Manage projects](/help/en/sls/manage-a-project/#section-ahq-ggx-ndb), [Create a Logstore](/help/en/sls/manage-a-logstore#section-v52-2jx-ndb), and [Data collection overview](/help/en/sls/data-collection-overview#concept-ikm-ql5-vdb).

### **Procedure**

1.  Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com/). In the **Projects** section, click the target project.
    
2.  In the navigation pane on the left, choose **Storeview** > **Storeview for Logstore**. Then, click **Create Now** or the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1553093371/p822929.png) icon to create a **Storeview for Logstore**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8145893371/p871730.png)
    
3.  In the **Create Storeview** dialog box, enter a **Storeview Name**, add the LogStores to associate, and then click **OK**. The Storeview takes about one minute to create.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8145893371/p873580.png)
    
    **Note**
    
    -   You can create a maximum of 10 ****Storeviews for Logstore**** for each Simple Log Service **project**.
        
    -   You can associate a maximum of 50 **LogStores** with each ****Storeview for Logstore****.
        
    -   All **LogStores** in a ****Storeview for Logstore**** must belong to the same Alibaba Cloud account.
        
    

## Query feature

A **Storeview for Logstore** supports cross-Logstore query capabilities. For example, if a **Storeview for Logstore** is associated with two Logstores (Logstore-1 and Logstore-2), and both Logstore-1 and Logstore-2 contain field \`a\`, the query statement: `* | select a from log where a > 1` returns log results from both Logstore-1 and Logstore-2 where field \`a\` meets the condition `a > 1`.

If a **Storeview for Logstore** contains two LogStores with identical log content, a keyword query returns all results from both LogStores. You can use the tag field to identify the source LogStore for each log.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8145893371/p873616.png)

## **Analysis feature**

A **Storeview** supports aggregation and statistical analysis across LogStores. For example, a Storeview is associated with LogStore-1 and LogStore-2. Both LogStores contain field `a`. If you run the analytic statement `* | select a, count(1) group by a` , the statement returns the total count of field \`a\` from both LogStore-1 and LogStore-2.

Aggregation analysis requires consistent field keys. If the log content is the same but the key names are different, use the predefinition feature to filter data and rename fields. For example, to aggregate field `a` from LogStore-1 and field `b` from LogStore-2, first rename field `b` to `a`.

**Note**

When you create a **Storeview for Logstore**, you can predefine the associated LogStores using Structured Process Language (SPL). The predefinition feature supports only the `extend` and `where` keywords. Use predefinition to filter data or resolve inconsistent field names for aggregation analysis. Aggregation requires consistent field keys. For example, to aggregate field `a` from LogStore-1 and field `b` from LogStore-2, use the statement `extend a = b` to make the column names consistent.

The following sections describe two scenarios.

-   Scenario 1
    
    A **Storeview for Logstore** is associated with different LogStores from the same service, and the LogStores have the same content. In this scenario, first verify that the index configurations of the LogStores are identical. For example, ensure they all use a full-text index or have consistent index configurations for the required fields. Then, add the LogStores to the **Storeview for Logstore**.
    
    After you create the **Storeview for Logstore**, you can use SQL statements for analysis. The following figure shows the aggregated results for the `status` field from all logs in both LogStores over the last 15 minutes.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8145893371/p873637.png)
    
-   Scenario 2
    
    A **Storeview for Logstore** is associated with different LogStores from the same service, but some log field names are different. In this case, use a predefined SPL statement to align the key names. As shown in the following figure, the SPL statement `*|extend request_method = method` renames the `method` field to `request_method`. Click Preview Data to see the results of the predefinition.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8145893371/p873552.png)Then, use the `request_method` field for queries and analysis.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8145893371/p873554.png)
    

## **Examples of common query and analysis results**

**Scenario description**

**Predefined query**

**Query on analysis page**

**Output**

LogStore-1 and LogStore-2 both contain the key column.

None

`key:123`

Rows that contain `key:123`.

LogStore-1 and LogStore-2 both contain columns a and b.

None

`*| select a where b=1`

All values from the `a` column that meet the condition `b =1`.

LogStore-1 and LogStore-2 both contain columns key and a.

`key:123`

`*| select a`

All values from the `a` column that meet the condition `key:123`.

LogStore-1 and LogStore-2 both contain columns key and a.

`key:123|where a>1`

`*| select a`

Values from the `a` column that meet both `key:123` and `a > 1`.

LogStore-1 and LogStore-2 both contain columns key and a.

`key:123|where a>1 ｜extend y=upper(a)`

`*| select *`

All columns that meet the condition, including column y.

LogStore-1 contains columns a, b, and c. LogStore-2 contains columns b, c, and d.

None

`select a,b,c,d`

Columns a, b, c, and d are returned. Empty values are filled with null.

LogStore-1 has indexed fields a and b. LogStore-2 has indexed fields b and c.

None

`a:*** and b:*** | select a, count(1) group by a`

Because LogStore-2 does not contain field a, only data from LogStore-1 is aggregated.

### **Handling inconsistencies**

-   If the same field has different data types configured in two LogStores, a query can still return results.
    
-   If an analytic statement includes a field that exists only in some LogStores, the statement returns data only from the LogStores that contain that field.
    
-   If the index configurations for a key field are inconsistent across multiple LogStores, an analytic statement returns an error instead of results.
    

## **What to do next**

### **Query log data views**

You can select **Data Views** > **Log Data Views** in the navigation pane on the left to view the log data views you have created.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2548737371/p891968.png)

### **Update Log Data View**

1.  In the Data views list, hover your mouse over the target data view, click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4699125371/p891816.png), and then select **Modify**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2548737371/p891978.png)
    
2.  In the **Modify Storeview** panel, modify the associated LogStores and click **OK**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2548737371/p892010.png)
    

### **Delete a log-type data view**

In the Storeview list, hover the mouse pointer over the target Storeview, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4699125371/p891816.png) icon, and then click **Delete**.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2548737371/p891985.png)

## **References**

[Storeview overview](/help/en/sls/dataset-storeview-overview)

For information about the API operations that manage data views, see:

-   [Create a data view](/help/en/sls/developer-reference/api-sls-2020-12-30-createstoreview)
    
-   [Delete a Data View](/help/en/sls/developer-reference/api-sls-2020-12-30-deletestoreview)
    
-   [Update Data View Configuration](/help/en/sls/developer-reference/api-sls-2020-12-30-updatestoreview)
    
-   [Query a specific data view](/help/en/sls/developer-reference/api-sls-2020-12-30-getstoreview)
    
-   [Query index configuration for a specified data view](/help/en/sls/developer-reference/api-sls-2020-12-30-getstoreviewindex)
    
-   [Query Data View List](/help/en/sls/developer-reference/api-sls-2020-12-30-liststoreviews)
