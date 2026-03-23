DataWorks allows you to create a node to synchronize data from a single Hologres table to MaxCompute. This can help you efficiently store big data. This topic describes how to configure a node to easily synchronize data from Hologres to MaxCompute and fully utilize the high-performance processing capabilities of MaxCompute.

## **Prerequisites**

-   Create a MaxCompute project and purchase a Hologres instance. For more information, see [Create a MaxCompute Project](/help/en/maxcompute/getting-started/create-a-maxcompute-project#title-3xf-weo-emn) and [Purchase a Hologres instance](/help/en/hologres/getting-started/purchase-a-hologres-instance#title-v6p-rg3-rfu).
    
-   The MaxCompute project and Hologres instance are associated with the workspace as computing resources, and the computing resources have passed the network connectivity test. For more information, see [Associate a computing resource](/help/en/dataworks/create-and-manage-compute-resources-new-data-development#870f228be4rdk).
    
-   A node used to synchronize data to MaxCompute is created. For more information, see [Create a node for a scheduled workflow](/help/en/dataworks/user-guide/node-development-of-data-studio/#13d1ad442e1tc).
    

## **Limits**

-   Only data in internal databases in Hologres can be synchronized to MaxCompute.
    
-   For information about the limits on using Hologres external tables in MaxCompute, see [Hologres external tables](/help/en/maxcompute/user-guide/hologres-foreign-tables#title-qfd-lhp-v9u).
    
-   Data types supported by MaxCompute and those supported by Hologres are different. For information about the mappings between MaxCompute data types and Hologres data types, see [Data type mapping between MaxCompute and Hologres](/help/en/hologres/developer-reference/data-types#title-1xq-hnv-edl).
    

## **Configure the synchronization node**

Go to the configuration tab of the synchronization node and configure the synchronization node based on the following instructions:

### **Configure settings related to the source**

You can configure the source based on the following parameter descriptions.

**Parameter**

**Description**

**Source Object Type**

The type of object from which you want to synchronize data. The value of this parameter is fixed as `Hologres Table`.

**Data Source**

The Hologres computing resource from which you want to synchronize data.

**Instance**

The ID of the Hologres instance. The system automatically obtains the value of this parameter, and the value cannot be changed.

**Database**

The Hologres database from which you want to synchronize data.

**Schema**

The Hologres schema from which you want to synchronize data.

**Table**

The name of the table from which you want to synchronize data.

**Filter Conditions**

The condition that you want to use to filter data. The system automatically generates a filter condition based on the partitioned table that you use. You can also modify the filter condition based on your business requirements. Data that meets the filter condition will be retained.

**Note**

A filter condition is the content of the clause after `WHERE` in an SQL statement.

### **Configure settings related to the destination**

You can configure the destination based on the following parameter descriptions.

**Parameter**

**Description**

**Data Source**

The MaxCompute computing resource to which you want to write data.

**Project**

The MaxCompute project that corresponds to the MaxCompute computing resource. The system automatically obtains the value of this parameter.

**Schema**

The MaxCompute schema in which you want to store data. This parameter is required only if the schema feature is enabled for the MaxCompute project that you want to use. If the schema feature is not enabled for the MaxCompute project, this parameter is not displayed. For information about how to enable the schema feature, see [Enable the feature](/help/en/maxcompute/user-guide/schema-related-operations#66333e0bffs7m).

**Table**

The name of a MaxCompute internal table. You can configure this parameter based on your business requirements.

**Lifecycle**

The lifecycle of the MaxCompute internal table. From the last update time, if data in the MaxCompute internal table does not change within a specified period, MaxCompute automatically reclaims the table.

**Fields**

**Synchronization Fields**

You can select the fields that you want to synchronize and configure the data types of the fields in the MaxCompute internal table.

**Partition Configurations**

You can configure the partition key column of the MaxCompute internal table based on your business requirements. You can select one of the following options to specify the source of data in the partition key column:

-   **Field in Hologres:** Select specific fields from the Hologres table as the source of data in the partition key column.
    
-   **Scheduling Variable**: Use a variable configured for the synchronization node to define the partition key column.
    

### Configure data synchronization settings

You can configure the following parameters on the **Data Synchronization Settings** section.

**Parameter**

**Description**

**Import Method**

The method that you want to use to import data. Valid values:

-   **Overwrite**: If you want to delete existing data from and write new data to the destination table, you can select this method.
    
-   **Append**: If you want to retain existing data in and append new data to the destination table, you can select this method.
    

**Permissions to Access Hologres**

The method that you want to use to access the Hologres instance. Valid values:

-   [Dual-signature](/help/en/maxcompute/user-guide/hologres-foreign-tables#title-6wh-r97-4yf): Use the current identity to perform verification on permissions on Hologres.
    
    You must make sure that the current identity has the read permissions on the MaxCompute table and the permissions on the Hologres table mapped to the MaxCompute table. For information about access control on MaxCompute, see [User guide for Data Lakehouse Solution 2.0](/help/en/maxcompute/user-guide/lake-warehouse-integrated-2-0-use-guide#7034875b5dqrb). For information about access control on Hologres, see [Permission management overview](/help/en/hologres/security-and-compliance/permission-management-overview#title-s9z-kvw-9if).
    
-   [RamRole](/help/en/maxcompute/user-guide/hologres-foreign-tables#title-84a-ncr-9sj): Use a specified RAM role to perform access identity verification.
    
    To use this method, you must attach the **AliyunSTSAssumeRoleAccess** policy to the RAM role. For more information, see [RAM role authorization mode](/help/en/hologres/security-and-compliance/ram-authorization-mode#title-0y0-824-vfw). After authorization is complete, configure the **RoleARN** parameter to specify the RAM role.
    

**Location**

During synchronization, the system automatically generates a MaxCompute table based on the Hologres external storage path. You can use the automatically generated storage path or configure the Hologres external storage path based on your business requirements.

## **Debug the synchronization node**

To debug and run the synchronization node, configure debugging information based on your business requirements.

1.  Configure properties for debugging the synchronization node.
    
    You can click **Run Configuration** in the right-side navigation pane of the configuration tab of the synchronization node, and configure the following parameters.
    
    **Parameter**
    
    **Description**
    
    **Computing Resource**
    
    Select the MaxCompute computing resource that is associated with the workspace.
    
    **Computing Quota**
    
    Select the computing quota generated when you created the MaxCompute project, or click **Create Computing Quota** displayed after you click the drop-down list to create a computing quota. For more information, see [Manage compute quotas](/help/en/maxcompute/user-guide/manage-quotas-in-the-maxcompute-console#title-f77-0j1-4l0).
    
    **Resource Group**
    
    Select the resource group that has passed the connectivity test when you associate the MaxCompute computing resource with the workspace.
    
    **CUs for Computing**
    
    Retain the default value of this parameter.
    
    **Script Parameters**
    
    If you define variables in the ${Parameter name} format in the filter condition, you must configure the **Parameter Name** and **Parameter Value** parameters in the **Script Parameters** section. When the synchronization node is run, the variables are replaced with actual values. For more information, see [Configure node scheduling](/help/en/dataworks/user-guide/node-scheduling/).
    
2.  To debug and run the synchronization node, click **Save** and **Run**.
    

## Next steps

-   [Configure node scheduling](/help/en/dataworks/user-guide/node-scheduling/): If you want the system to periodically schedule a node in a workspace directory, you need to click **Scheduling** in the right-side navigation pane of the configuration tab of the node and configure the parameters in the **Scheduling Policies** section.
    
-   [Node deployment](/help/en/dataworks/user-guide/task-release/#9f4ca8cafdrem): If you want to deploy a node to the production environment for running, you can click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2728034471/p932965.png) icon in the top toolbar of the configuration tab of the node to initiate a deployment process. Nodes in a workspace directory can be periodically scheduled only after they are deployed to the production environment.
    

## **FAQ**

-   **Field type mismatch**: If you encounter field type mismatch issues when you configure the synchronization node, the node fails. You must check whether the data types of fields in the MaxCompute table are correctly configured. For information about mappings between MaxCompute data types and Hologres data types, see [Data type mapping between MaxCompute and Hologres](/help/en/hologres/developer-reference/data-types#title-1xq-hnv-edl).
    
-   **Synchronized data does not match partition filter**: You must check whether the filter condition is correctly configured in the source.
