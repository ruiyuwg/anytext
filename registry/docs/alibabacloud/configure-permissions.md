This topic describes how to enable or disable overall permissions for the catalog.

## **Procedure**

### **Enable permissions**

1.  Log on to the [Data Lake Formation console](https://dlf.console.alibabacloud.com/cn-hangzhou/home?spm=5176.19711204.J_5253785160.3.66d92bf5mZ6OXc).
    
2.  In the left-side navigation pane, click **Data Permission** > **Permission Settings**.
    
3.  When the permission control of the target **Catalog List** is in a shutdown status, click **Whether to Enable Permission Control** column's![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4425144371/p861774.png), in the pop-up confirmation box, click **OK** to complete permission enabling.
    

**Note**

After enabling permissions, access to metadata and data will perform permission verification. Please conduct a business assessment before enabling permissions. The impact after enabling permissions is as follows:

-   The metadata management and data exploration features of DLF will be subject to access control. If the user is not granted permission, they cannot access the corresponding metadata and data.
    
-   In E-MapReduce, if permission controls for engines, such as Hive, Spark, Presto and Impala, are enabled simultaneously, then when accessing data through these engines, users who have not been granted permissions will not be able to access the corresponding data. For how to enable DLF-AUTH permissions in EMR, see [DLF-Auth](/help/en/emr/emr-on-ecs/user-guide/dlf-auth).
    

### **Disable permissions**

1.  In the left-side navigation pane, click **Data Permission** > **Permission Settings**.
    
2.  When the permission control of the target catalog list is in an enabled status, click **Whether to Enable Permission Control** column's![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4425144371/p861776.png), in the pop-up confirmation box, click **OK** to complete permission disabling.
    

**Note**

After disabling permissions, access to metadata and data will no longer perform permission verification. Please conduct a business assessment before disabling permissions. The impact after disabling permissions is as follows:

-   The metadata management and data exploration features of DLF will no longer be subject to access control. Regardless of whether the user has data permissions, as long as they have menu permissions, they can access any data.
    
-   In E-MapReduce, to disable permissions, related disable operations must be performed on DLF-AUTH. For example, to disable Hive permissions, execute the disableHive operation in the DLF-AUTH component.
