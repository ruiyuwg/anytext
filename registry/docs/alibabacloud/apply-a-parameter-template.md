If you have multiple PolarDB clusters that share the same parameter settings, you can use parameter templates. Parameter templates help you manage parameters from a central location and apply them to clusters quickly. This improves the efficiency of parameter management and cluster configuration.

## Create a parameter template

1.  Log on to the [PolarDB console](https://polardb.console.alibabacloud.com/). Select the region where the cluster is located. In the navigation pane on the left, choose **Parameter Templates**.
    
2.  On the **Custom Parameter Templates** tab, click **Create Parameter Template**. Set the following parameters and click **OK**.
    
    **Parameter**
    
    **Description**
    
    Template Name
    
    The name of the template. The name must meet the following requirements:
    
    -   Consists of letters, digits, and underscores (\_). It must start with a letter and cannot contain Chinese characters.
        
    -   The name must be 8 to 64 characters in length.
        
    
    Database Engine
    
    Select a database engine. Valid values are MySQL, , and .
    
    Database Version
    
    Select a database engine version. The valid values are:
    
    -   8.0
        
    -   5.7
        
    -   5.6
        
    
    Description
    
    Enter information about the template for future management. The description can be in any language and must be 0 to 200 characters in length.
    
    Add Configuration
    
    Click **Add Parameter** to add a parameter row. You can then select a **Parameter Name** and set a **Current Value** based on the **Description** and **Valid Value**. You can also view information such as whether a restart is required and the default parameter value.
    
    **Note**
    
    -   To configure another parameter, click **Add Parameter** again.
        
    -   To delete a parameter, click **Delete** on the right of the parameter.
        
    
    Import
    
    Click **Import Parameter** to enter parameters and their values. The parameters must be in the `key=value` format. Use a line break to separate multiple entries. For example:
    
    ```
    wait_timeout=60
    thread_stack=262144
    ```
    

## Apply a parameter template

After you create a parameter template, you can apply it to clusters in two ways:

-   Apply the template from the cluster details page. On the **Settings and Management** > **Parameters** page of the target PolarDB cluster, click **Apply Template**. For more information, see [Apply a template](/help/en/polardb/polardb-for-mysql/user-guide/specify-cluster-and-node-parameters#section-l41-eyr-fkk).
    
-   Apply the template from the Parameter Templates page. The following steps describe this method.
    

**Note**

If a parameter in the template requires a cluster restart, perform this operation during off-peak hours and ensure that your application has a reconnection mechanism.

1.  Log on to the [PolarDB console](https://polardb.console.alibabacloud.com/). Select the region where the cluster is located. In the navigation pane on the left, choose **Parameter Templates**.
    
2.  On the **Custom Parameter Templates** tab, find the target template and click **Apply to Cluster** in the **Actions** column.
    
3.  On the **Apply to Cluster** page, select the clusters to which you want to apply the template. Click the ![Move](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1407288161/p248475.png) icon to move the clusters to the list on the right. In the **Parameter Comparison** section, you can view the differences between the parameter values in the template and the clusters. After you confirm the settings, click **OK**.
    
    **Note**
    
    When you apply a parameter template to multiple clusters, note the following:
    
    -   Ensure that the parameters are suitable for the selected clusters. Proceed with caution.
        
    -   You can apply a parameter template to a maximum of 10 clusters at a time. To apply the template to more than 10 clusters, you must apply it in batches.
        
    -   The parameter template must be in the same region as the clusters. If they are in different regions, you must create a parameter template in the region of the clusters before you can apply it.
        
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8503954571/p992039.png)
    

## Copy a parameter template

1.  Log on to the [PolarDB console](https://polardb.console.alibabacloud.com/). Select the region where the cluster is located. In the navigation pane on the left, choose **Parameter Templates**.
    
2.  On the **Custom Parameter Templates** tab, find the target template and click **Clone** in the **Actions** column. Set the following parameters and click **OK**.
    
    **Parameter**
    
    **Description**
    
    Template Name
    
    The name of the template. The name must meet the following requirements:
    
    -   Consists of letters, digits, and underscores (\_). It must start with a letter and cannot contain Chinese characters.
        
    -   The name must be 8 to 64 characters in length.
        
    
    Database Engine
    
    Select a database engine. Valid values are MySQL, , and .
    
    Database Version
    
    Select a database engine version. The valid values are:
    
    -   8.0
        
    -   5.7
        
    -   5.6
        
    
    Description
    
    Enter information about the template for future management. The description can be in any language and must be 0 to 200 characters in length.
    
    Add Configuration
    
    Click **Add Parameter** to add a parameter row. You can then select a **Parameter Name** and set a **Current Value** based on the **Description** and **Valid Value**. You can also view information such as whether a restart is required and the default parameter value.
    
    **Note**
    
    -   To configure another parameter, click **Add Parameter** again.
        
    -   To delete a parameter, click **Delete** on the right of the parameter.
        
    
    Import
    
    Click **Import Parameter** to enter parameters and their values. The parameters must be in the `key=value` format. Use a line break to separate multiple entries. For example:
    
    ```
    wait_timeout=60
    thread_stack=262144
    ```
    

## Delete a parameter template

1.  Log on to the [PolarDB console](https://polardb.console.alibabacloud.com/). Select the region where the cluster is located. In the navigation pane on the left, choose **Parameter Templates**.
    
2.  On the **Custom Parameter Templates** tab, find the target template and click **Delete** in the **Actions** column.
    

**Note**

To delete multiple parameter templates at once, select the templates and then click **Batch Delete**.

## View parameter template differences

1.  Log on to the [PolarDB console](https://polardb.console.alibabacloud.com/). Select the region where the cluster is located. In the navigation pane on the left, choose **Parameter Templates**.
    
2.  On the **Custom Parameter Templates** tab, select the parameter templates that you want to compare and then click **Compare** below the list.
    
3.  On the **Compare** page, you can view the parameter differences between the selected templates.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8503954571/p992043.png)
    

## Related API operations

**API**

**Description**

[CreateParameterGroup](/help/en/polardb/polardb-for-mysql/api-createparametergroup#doc-api-polardb-CreateParameterGroup)

Creates a parameter template.

[DescribeParameterGroups](/help/en/polardb/polardb-for-mysql/api-describeparametergroups#doc-api-polardb-DescribeParameterGroups)

Queries a list of parameter templates.

[DescribeParameterGroup](/help/en/polardb/polardb-for-mysql/api-describeparametergroup#doc-api-polardb-DescribeParameterGroup)

Queries the details of a parameter template.

[ModifyDBClusterParameters](/help/en/polardb/polardb-for-mysql/api-modifydbclusterparameters#doc-api-polardb-ModifyDBClusterParameters)

Modifies cluster parameters or applies a parameter template.

[DeleteParameterGroup](/help/en/polardb/polardb-for-mysql/api-deleteparametergroup#doc-api-polardb-DeleteParameterGroup)

Deletes a parameter template.
