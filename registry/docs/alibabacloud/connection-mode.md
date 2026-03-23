This topic describes how to connect to a cluster to use the PolarDB for AI feature and the requirements for PolarDB for AI SQL statements.

## **Connect to a cluster**

If you want to use the PolarDB for AI feature on a PolarDB cluster, you must connect to the cluster by using the **cluster endpoint** instead of the primary endpoint, regardless of whether you connect to the cluster [over Data Management (DMS)](/help/en/polardb/polardb-for-mysql/user-guide/connect-to-a-cluster#section-wxq-bql-v2b), [from a client](/help/en/polardb/polardb-for-mysql/user-guide/connect-to-a-cluster#section-pfm-qmq-tdb), or [by using the command line](/help/en/polardb/polardb-for-mysql/user-guide/connect-to-a-cluster#section-aps-qgi-pku).

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5978975371/p898003.png)

#### **Connect to a cluster by using** **command line**

If you use the MySQL command line to connect to the cluster endpoint and use a `hint`, add the `-c` option to the command. Sample command:

```
mysql -h localhost -P port -u username -p password -c
```

#### Connect to a cluster by using DMS

By default, DMS connects to a cluster by using the primary endpoint. To [connect to a cluster over DMS](/help/en/polardb/polardb-for-mysql/user-guide/connect-to-a-cluster#section-wxq-bql-v2b) by using the cluster endpoint, perform the following steps:

1.  After you connect to a cluster over DMS, choose **Database Instance** > **Instances Connected** in the left-side navigation pane. Then, right-click the cluster and select **Edit**. ​![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0357200071/p721872.png)
    
2.  Change Entry mode to Connection string address and enter the cluster endpoint of the cluster. ​![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0357200071/p721873.png)
    
3.  Click **Save**.
    

**Note**

After you change the Entry mode to Connection string address, you must open a new SQL console to execute SQL statements.

## **AI SQL statement conventions**

SQL statements that support the features and models of PolarDB for AI are referred to as the extended SQL statements of PolarDB (AI SQL statements).

When you execute an AI SQL statement, you must add `/*polar4ai*/` before the SQL statement. The SQL statements executed by the current Alibaba Cloud account are added to audit logs.

Sample statement:

```
/*polar4ai*/CREATE FEATURE test_graph_1 WITH (feature_class='graph') AS (SELECT ip, user_id FROM small_sample limit 30);
```
