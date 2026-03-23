If you want to access data stored in Hologres from MaxCompute, you can use the Hologres metadata mapping feature provided by data catalogs to create external tables in MaxCompute to read the data in Hologres. This frees you from importing data into MaxCompute and helps you save computing and storage resources and perform data processing in a flexible and efficient manner.

## **Background information**

MaxCompute allows you to use the external table feature to query and analyze data stored in external systems such as Hologres. This way, you can directly perform operations on external data by virtue of a PostgreSQL JDBC driver and RAM-role-based authorization without the need to import data into MaxCompute.

In DataWorks, you can quickly perform the preceding operations by using the Hologres metadata mapping feature. This feature relies on the following capabilities of MaxCompute at the underlying layer:

-   [Schema-level metadata mapping](#966d140e71y38): This type of mapping is implemented based on MaxCompute external schemas. For information about MaxCompute external schemas, see [External schema](/help/en/maxcompute/user-guide/lake-warehouse-integrated-2-0-use-guide#707a34ecafevo).
    
-   [Table-level metadata mapping](#b2cdace78biag): This type of mapping is implemented based on the external table feature of MaxCompute. For information about the external table feature, see [Hologres external tables](/help/en/maxcompute/user-guide/hologres-foreign-tables#title-qfd-lhp-v9u).
    

## **Prerequisites**

-   A MaxCompute project and a Hologres instance are created. For more information, see [Create a MaxCompute project](/help/en/maxcompute/getting-started/create-a-maxcompute-project#title-3xf-weo-emn) and [Purchase a Hologres instance](/help/en/hologres/getting-started/purchase-a-hologres-instance#title-v6p-rg3-rfu).
    
-   The Hologres instance is added to the DATA CATALOG pane of the Data Studio page in the DataWorks console as a data catalog. For more information, see [Data Catalog](/help/en/dataworks/user-guide/data-directory/#904011b81aqb1).
    
-   A foreign server of the Hologres type is created. Schema-level metadata mapping requires a foreign server of the Hologres type. For more information, see [Step 1: Create a Hologres foreign server](/help/en/maxcompute/user-guide/lake-warehouse-integrated-2-0-use-guide#c709c605a1jy2).
    
    **Important**
    
    When you create a foreign server of the Hologres type, take note of the following items:
    
    -   You must set the **Host** parameter to a hostname of the classic network type. Hostnames of the Virtual Private Cloud (VPC) type are not supported.
        
    -   You must set the **Authentication Method** parameter to **RAMRole**. ExecuteWithUserAuth is not supported.
        
    

## **Access control**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3947395671/CAEQUBiBgID2oaeo2RkiIDk0NWVhN2FmYTllYjRhNmM5ZTMwZjJlNjkyZmRhYTUx4979699_20250407131123.208.svg)

DataWorks determines the access identity based on the source of the MaxCompute project and verifies permissions based on the access identity.

**Determination of the access identity based on the source of the MaxCompute project**

**Permission verification on the access identity**

**Permission verification at the Hologres side**

-   If the MaxCompute project is added to DataWorks as a data source, the access identity is the one that is specified for the data source. If you want to map Hologres metadata to the MaxCompute project to which the data source in the production environment corresponds, make sure that your account is assigned the **O&M** or **Workspace Administrator** role of DataWorks.
    
-   If the MaxCompute project is a project on which you have permissions, the access identity is the current account that you use.
    

-   When you map Hologres metadata to MaxCompute, make sure that the access identity is added to the MaxCompute project.
    
-   When you use a MaxCompute external table to read Hologres data, make sure that the access identity has the permissions to read data from MaxCompute external tables.
    

-   If you use the dual-signature mode for authentication, make sure that the access identity have read and write permissions on Hologres tables.
    
-   If you use the STS mode for authentication, make sure that the created RAM role have read and write permissions on Hologres tables.
    

## **Limits**

-   Only data in Hologres **internal** databases can be mapped to MaxCompute.
    
-   For information about the limits on using Hologres external tables in MaxCompute, see [Hologres external tables](/help/en/maxcompute/user-guide/hologres-foreign-tables#title-qfd-lhp-v9u).
    
-   Data types supported by MaxCompute and those supported by Hologres are different, and some data types do not support mapping. Mapping is automatically ignored for these data types. Before you map Hologres metadata to MaxCompute, you must carefully read [Data type mappings between MaxCompute and Hologres](/help/en/hologres/developer-reference/data-types#section-w14-cec-th7) and then determine whether your business requirements can be met as expected.
    

## **Entry point for the feature**

1.  Go to the [Workspaces](https://dataworks.console.aliyun.com/workspace/list) page in the DataWorks console. In the top navigation bar, select a desired region. Find the desired workspace and choose **Shortcuts** > **Data Studio** in the **Actions** column.
    
2.  In the left-side navigation pane of the Data Studio page, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7618107371/p840002.png) icon to go to the **DATA CATALOG** pane.
    
3.  In the **Hologres** directory of the DATA CATALOG pane, find the Hologres schema or table whose metadata needs to be mapped to MaxCompute, right-click the schema or table name, and then select **Metadata Mapping to MaxCompute**.
    

## **Schema-level metadata mapping**

The Hologres schema-level metadata mapping feature maps the metadata of a Hologres schema to a MaxCompute external schema. Before you perform the mapping, we recommend that you refer to [User guide for Data Lakehouse Solution 2.0](/help/en/maxcompute/user-guide/lake-warehouse-integrated-2-0-use-guide#7034875b5dqrb) to understand MaxCompute foreign servers and external schemas.

**Important**

Hologres metadata can be mapped only to MaxCompute **internal** projects for which the [schema feature](/help/en/maxcompute/user-guide/schema-related-operations#3ce74ea9f5m32) is enabled.

### **Prepare a foreign server of the Hologres type at the MaxCompute side**

Hologres schema-level metadata mapping is implemented by creating an external schema in the MaxCompute project. The external schema synchronizes Hologres metadata from a foreign server of the Hologres type. Therefore, you need to first add a MaxCompute external data source in DataWorks that points to the desired Hologres database, and mount the MaxCompute external data source to the specified MaxCompute internal project to establish a mapping between the external schema in the MaxCompute internal project and the specified Hologres database.

For information about how to create a foreign server of the Hologres type, see [Create and use a Hologres federation](/help/en/maxcompute/user-guide/lake-warehouse-integrated-2-0-use-guide#335562f76d8sd).

**Note**

When you create a foreign server of the Hologres type, you must set the Host parameter to a hostname of the classic network type. Hostnames of the VPC type are not supported. In addition, you must set the DBNAME parameter to the name of the Hologres database that you want to use for metadata mapping.

### **Configure Hologres schema-level metadata mapping at the DataWorks side**

1.  [Go to the metadata mapping configuration page](#32b0a08e6bdld).
    
2.  In the Hologres directory of the DATA CATALOG pane, find the schema whose metadata needs to be mapped to MaxCompute, right-click the schema name, and then select **Metadata Mapping to MaxCompute**.
    
3.  On the Metadata Mapping to MaxCompute tab, configure the following parameters.
    
    -   Hologres (Source)
        
        **Parameter**
        
        **Description**
        
        **Source Object Type**
        
        The type of the object whose metadata needs to be mapped to MaxCompute. The value of this parameter is fixed as `Hologres Schema`.
        
        **Source Object Name**
        
        The name of the Hologres schema whose metadata needs to be mapped to MaxCompute. The value of this parameter is fixed as the name of the current Hologres schema.
        
        The value of this parameter is in the `<Hologres database>.<Hologres schema>` format.
        
        **Note**
        
        You need to create a foreign server of the Hologres type in MaxCompute in advance. When you create a foreign server, you must set the DBNAME parameter to the name of the Hologres database specified in the value of the Source Object Name parameter. For more information, see [Prepare a foreign server of the Hologres type at the MaxCompute side](#607772dbf2u4n).
        
    -   MaxCompute (Destination)
        
        **Parameter**
        
        **Description**
        
        **Instance Search Method**
        
        The way in which you want to search for the MaxCompute project. Valid values:
        
        -   **From DataWorks Data Sources**: Select the desired MaxCompute project by choosing the MaxCompute data source associated with the current workspace. If you select this value, you also need to configure the **Data Source** and **External** **Schema** parameters to create an external schema in the MaxCompute project.
            
            **Note**
            
            Only users who are assigned the O&M or Workspace Administrator role can select data sources added in the production environment.
            
        -   **I Am Authorized**: Select the desired MaxCompute project on which you have access permissions within the current Alibaba Cloud account. If you select this value, you also need to configure the **External** **Schema** parameter.
            
        
        **Data Source**
        
        If you set the **Instance Search Method** parameter to **From DataWorks Data Sources**, you must manually select the desired MaxCompute data source.
        
        **Project Name**
        
        If you set the **Instance Search Method** parameter to **I Am Authorized**, you need to manually select the desired MaxCompute project.
        
        **External Schema Name**
        
        The name of the MaxCompute external schema to which you want to map the metadata of the Hologres schema.
        
        **External Data Source**
        
        Select the foreign server that has been connected to the Hologres database. For information about how to create a foreign server of the Hologres type, see [Step 1: Create a Hologres foreign server](/help/en/maxcompute/user-guide/lake-warehouse-integrated-2-0-use-guide#c709c605a1jy2).
        
        **Important**
        
        When you create a foreign server of the Hologres type, take note of the following items:
        
        -   You must set the **Host** parameter to a hostname of the classic network type. Hostnames of the Virtual Private Cloud (VPC) type are not supported.
            
        -   You must set the **Authentication Method** parameter to **RAMRole**. ExecuteWithUserAuth is not supported.
            
        
        **Auth**
        
        The values of these parameters are automatically generated by the system based on the foreign server that you select.
        
        **Host:port**
        
        **Database**
        
4.  In the top toolbar of the configuration tab, click **Run** to complete the mapping.
    

## **Table-level metadata mapping**

The Hologres table-level metadata mapping feature maps a specified Hologres table to a specified MaxCompute table by using an external table. You can specify the path and name of the external table based on your business requirements.

1.  [Access the metadata mapping configuration page](#32b0a08e6bdld).
    
2.  In the Hologres directory of the DATA CATALOG pane, find the Hologres table whose metadata needs to be mapped to MaxCompute, right-click the table name, and then select **Metadata Mapping to MaxCompute**.
    
3.  On the Metadata Mapping to MaxCompute tab, configure the following parameters.
    
    -   Hologres (Source)
        
        **Parameter**
        
        **Description**
        
        **Source Object Type**
        
        The type of the object whose metadata needs to be mapped to MaxCompute. The value of this parameter is fixed as `Hologres Table`.
        
        **Source Object Name**
        
        The name of the Hologres table whose metadata needs to be mapped to MaxCompute. The value of this parameter is fixed as the name of the current Hologres table.
        
    -   MaxCompute (Destination)
        
        **Parameter**
        
        **Description**
        
        **Instance** **Search Method**
        
        The way in which you want to search for the MaxCompute project. Valid values:
        
        -   **From DataWorks Data Sources**: Select the desired MaxCompute project by choosing the MaxCompute data source associated with the current workspace. If you select this value, you also need to configure the **Data Source** and **External Table** parameters to specify the MaxCompute project and the MaxCompute external table. In addition, you must make sure that the access identity specified for the data source has read and write permissions on the source Hologres table and the MaxCompute project.
            
            **Note**
            
            Only users who are assigned the O&M or Workspace Administrator role can select data sources added in the production environment.
            
        -   **I Am Authorized**: Select the desired MaxCompute project on which you have access permissions within the current Alibaba Cloud account. If you select this value, you also need to configure the **External Table** parameter to specify the desired MaxCompute external table. In addition, you must make sure that you have read and write permissions on the source Hologres table and the MaxCompute project.
            
        
        **Data Source**
        
        If you set the **Instance Search Method** parameter to **From DataWorks Data Sources**, you must manually select the desired MaxCompute data source.
        
        **Project Name**
        
        If you set the **Instance Search Method** parameter to **I Am Authorized**, you must manually select the desired MaxCompute project.
        
        **Schema**
        
        The name of the MaxCompute external schema to which you want to map the metadata of the Hologres schema.
        
        **External Table**
        
        The name of the external table to be created in the MaxCompute external schema. The metadata of the Hologres table will be mapped to the MaxCompute external table.
        
        **Note**
        
        Creating an external table in the MaxCompute external schema is a one-time action. After the external table is created, the metadata mapped to the external table is not automatically refreshed. To refresh the metadata, you must delete the external table and manually create a table-level metadata mapping.
        
        **Permissions to Access MaxCompute External Table**
        
        The permission authentication method that you want to use for the MaxCompute external table after the metadata of the Hologres table is mapped to the MaxCompute external table. Valid values:
        
        -   **[Dual-signature](/help/en/maxcompute/user-guide/hologres-foreign-tables#section-xgw-lae-av7)**:
            
            Dual-signature is an authentication and authorization protocol that is jointly developed by MaxCompute and Hologres. On the MaxCompute side, the logon information is signed, and the authentication data is passed to the Hologres side. Hologres then performs same-name authentication and authorization based on the protocol established with MaxCompute. Therefore, you only need to use the same account in both MaxCompute and Hologres to directly access external tables without additional authentication configuration.
            
        -   **[RamRole](/help/en/maxcompute/user-guide/hologres-foreign-tables#section-dcq-zfi-6no)**: Authentication is performed in STS mode.
            
        
        **RoleARN**
        
        This parameter is required only when you set the **Permissions to Access MaxCompute External Table** parameter to **RamRole.**
        
        You need to create a RAM role and enter the ARN information of the RAM role in this field. For more information, see [Create a Hologres external table (STS mode)](/help/en/maxcompute/user-guide/hologres-foreign-tables#section-dcq-zfi-6no).
        
        **Location**
        
        The address of the mapping between the Hologres table and the MaxCompute table. The value of this parameter is automatically generated by the system, and you do not need to change the value.
        
        **Lifecycle**
        
        The lifecycle of the MaxCompute external table.
        
        **Field**
        
        The **MaxCompute table fields** that you want to use for mapping and the **data types of the fields**. You can configure the fields and field data types based on your business requirements.
        
        **Note**
        
        Data types supported by MaxCompute and those supported by Hologres are different. Some data types do not support mapping. For more information, see [Data type mappings between MaxCompute and Hologres](/help/en/hologres/developer-reference/data-types#section-w14-cec-th7).
        
4.  In the top toolbar of the configuration tab, click Run to complete the mapping.
    

## **What to do next**

-   In the **MaxCompute** directory displayed in the **DATA CATALOG** pane, view the external schema or external table to which the metadata of the Hologres schema or Hologres table is mapped.
    
-   Create a **MaxCompute SQL** node on the **Data Studio** page and use the MaxCompute SQL node to query the data in the Hologres external table.
