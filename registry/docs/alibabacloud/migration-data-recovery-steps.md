This topic describes how to roll back the data migration from an ApsaraDB RDS for MySQL instance to a PolarDB cluster.

## (Optional) Roll back migration

If you find data exceptions before the data migration from an ApsaraDB RDS for MySQL instance to a PolarDB cluster is complete, you can roll back the migration and restore the source instance and destination cluster to the status before the migration. Before the migration, the ApsaraDB RDS for MySQL instance is in read-write mode and the PolarDB cluster is in read-only mode.

1.  Log on to the [PolarDB console](https://polardb.console.alibabacloud.com/).
    
2.  Find the destination cluster and click the cluster ID.
    
3.  In the **RDS Migration** section of the **Basic Information** page, click **Roll Back Migration**.
    
4.  In the **Switches the business back to the original database** dialog box, select the **Switch Back with Endpoints (Connection Changes Not Required)** or **Switch Back without Endpoints (Connection Changes Required)** option based on your business requirements, and then click **OK**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4341666271/p843320.png)
    
    -   If you select the **Switch Back with Endpoints (Connection Changes Not Required)** option, the system exchanges the endpoints between the source ApsaraDB RDS for PostgreSQL instance and the destination PolarDB cluster during the switchback process. After the switchback, you do not need to modify the configurations of your application to connect to the source ApsaraDB RDS for MySQL instance. The ApsaraDB RDS for MySQL instance switches to read-write mode and the PolarDB cluster switches to read-only mode. Data is synchronized from the PolarDB cluster to the ApsaraDB RDS for MySQL instance.
        
    -   If you select **Switch Back without Endpoints (Connection Changes Required)**, the system does not exchange the endpoints between the source ApsaraDB RDS for PostgreSQL instance and the destination PolarDB cluster during the switchback process. After the switchback, the ApsaraDB RDS for MySQL instance is in read-write mode and the PolarDB cluster is in read-only mode. Data is synchronized from the PolarDB cluster to the ApsaraDB RDS for MySQL instance. Change the database endpoint in your application at the earliest opportunity after the **Source RDS Read/Write Status** is displayed as **Read/Write**.
        
    

## (Optional) Cancel migration

1.  Log on to the [PolarDB console](https://polardb.console.alibabacloud.com).
    
2.  Find the destination cluster and click the cluster ID.
    
3.  In the **RDS Migration** section of the **Basic Information** page, click **Cancel Migration**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4341666271/p843416.png)
    
4.  In the **Cancel Migration** message, click **OK**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4341666271/p843424.png)
