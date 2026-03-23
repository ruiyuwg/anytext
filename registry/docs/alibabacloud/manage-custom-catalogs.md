If built-in catalog types cannot meet your business requirements, you can use custom catalog types. This topic describes how to configure a custom catalog.

## **Precautions**

-   The name of a custom catalog type must be different from the names of other custom catalog types.
    
    If the name of a custom catalog type is the same as the name of a built-in catalog, the custom catalog type is used.
    
-   After you delete a custom catalog type, the catalogs of the custom catalog type are also deleted.
    

## **Create and use a custom catalog**

1.  Go to the Catalog List page.
    
    1.  Log on to the [Realtime Compute for Apache Flink console](https://realtime-compute.console.alibabacloud.com/regions/cn-shanghai).
        
    2.  Find the workspace that you want to manage and click **Console** in the **Actions** column.
        
    3.  In the left-side navigation pane, click **Catalogs**.
        
2.  On the Catalog List page, click **Create Catalog**. In the Create Catalog dialog box, click the Custom Catalog tab. On the **Custom Catalog** tab, click **Add Catalog Type**.
    
3.  In the **Create catalog type** dialog box, configure the parameters. The following table describes the parameters.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4802073861/p634509.png)
    
    **Method**
    
    **Description**
    
    **Upload File**
    
    Click **Click to Select** and select the file of the desired custom catalog type. For more information about how to develop a custom catalog type, see [Catalogs](https://nightlies.apache.org/flink/flink-docs-release-1.17/docs/dev/table/catalogs/).
    
    **Use External URL**
    
    Enter information in the **Use External URL** field. If you want to use a JAR file of another service, you can use this method to obtain the JAR file.
    
    **Note**
    
    Only the following two types of external URLs are supported:
    
    -   The endpoint of an Object Storage Service (OSS) bucket that you specify when you purchase a Realtime Compute for Apache Flink workspace. You can view the endpoint of the OSS bucket that you specify in the **Workspace Details** message in the management console of Realtime Compute for Apache Flink .
        
    -   The endpoint of another external storage system that can be accessed by Realtime Compute for Apache Flink. The access control list (ACL) of the external storage system is public-read or Realtime Compute for Apache Flink is granted the permissions to access the external storage system.
        
    
4.  Click **Next**.
    
5.  Confirm the properties and click **OK**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2718167371/p910336.png)
    
6.  On the **Custom Catalog** tab, click the name of the custom catalog type that you created and click **Next**.
    
7.  Enter the catalog code and parameter values and click **OK** to create a catalog.
    
    The following sample code shows an example. You can modify the code based on your business requirements.
    
    ```
    CREATE CATALOG `catalogname` --catalogname indicates the name of the catalog that you create. 
    WITH (
    'type'='hologres-custom',  --The catalog type name that you specify in Step 5. 
    'endpoint' = 'yourEndpoint',  --The parameters that are selected in the Required column in Step 5 must be configured in the WITH clause. 
    'username' = 'yourUsername',
    'password' = 'yourPassword',
    'dbname' = 'yourDbname'
    );
    ```
    
    **Note**
    
    We recommend that you enclose the value of the catalogname parameter in a pair of grave accents (\`\`). Otherwise, an error may be reported when you run a catalog whose name contains periods (`.`).
    

## View or delete a custom catalog type

1.  On the **Catalog List** page, click **Create Catalog**.
    
2.  In the Create Catalog dialog box, click the **Custom Catalog** tab. On the Custom Catalog tab, view or delete a custom catalog type.
    
    -   To view information about a custom catalog type, move the pointer over the name of the desired custom catalog type. The information such as the JAR package path, catalog type, creation time, and creator is displayed.
        
    -   To delete a custom catalog type, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5802073861/p632954.png) icon next to the name of the custom catalog type. In the message that appears, click **Confirm**.
        

## **References**

-   For more information about the built-in catalog types that are supported by Realtime Compute for Apache Flink, see [Manage catalogs](/help/en/flink/realtime-flink/user-guide/manage-catalogs/).
    
-   For more information about the connectors that are supported by Realtime Compute for Apache Flink, see [Supported connectors](/help/en/flink/realtime-flink/developer-reference/supported-connectors).
