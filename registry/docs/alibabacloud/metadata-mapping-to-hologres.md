When you need to accelerate queries on MaxCompute data in Hologres, you can use the metadata mapping to Hologres node to map MaxCompute table metadata to Hologres. This allows you to accelerate queries on MaxCompute data through Hologres external tables.

## **Prerequisites**

-   You have created the [MaxCompute project](/help/en/maxcompute/getting-started/create-a-maxcompute-project) for which you want to map metadata.
    
-   You have [created a Hologres instance](/help/en/hologres/getting-started/purchase-a-hologres-instance) and [attached it as a Hologres computing resource](/help/en/dataworks/user-guide/create-a-hologres-data-source).
    
    **Note**
    
    When you attach a Hologres computing resource, a data source with the same name is automatically generated.
    

## **Limits**

-   Only mapping MaxCompute table metadata to Hologres external tables is supported.
    
-   This node task can only be manually executed in Data Studio.
    

## **Create a node**

You have [created a metadata mapping to Hologres node](/help/en/dataworks/user-guide/node-development-of-data-studio/#13d1ad442e1tc).

## **Configure the node**

You can complete the node configuration by setting the destination information, source information, and advanced options.

### **Configure destination information**

Complete the configuration of the destination database table according to the following parameter descriptions.

**Parameter**

**Description**

**Destination Connection**

Select the target Hologres data source for mapping.

You can manage or authorize Hologres data sources through the **Destination Management** feature on the left.

**Destination Database**

Select the target Hologres database.

**Schema**

Select the target schema. The default schema is `public`.

### **Configure source information**

Complete the configuration of the metadata source information according to the following parameter descriptions.

**Parameter**

**Description**

**Type**

The default type is MaxCompute.

**Server List**

After the Hologres instance is created successfully, a server named `odps_server` is automatically created, which you can use directly.

**Source Project**

Enter the name of the MaxCompute project for which you want to map metadata.

**Select Tables For Direct Acceleration**

**Accelerate Entire Database**

Select this option to map all table metadata from the MaxCompute database to the target Hologres database.

**Partial Acceleration**

If you need to accelerate queries for only some tables, select **Partial Acceleration**. You can enter the target table name prefix in the search box on the right and select the tables you want to accelerate from the table list below.

**Note**

The list can display a maximum of 200 tables. Tables exceeding this limit will not be displayed.

### **Configure advanced options**

According to the following parameter descriptions and your business requirements, configure how to handle table name conflicts and unsupported data types.

**Parameter**

**Description**

**Table Name Conflict**

The following three options are supported:

-   Ignore, continue to create the rest tables.
    
-   Update, modify the same name tables.
    
-   Alert, do not duplicately create.
    

**Unsupported Data Type**

The following two policies are supported:

-   Alert, import failure.
    
-   Ignore, skip unsupported columns.
    

## **Run the node**

To execute the node task, configure the appropriate debugging information according to your business requirements.

1.  Configure node properties.
    
    You can configure **Computing Resource** and **Resource Group** information in the **Run Configuration** on the right side of the sync node editing page. The specific parameter information is as follows.
    
    **Parameter Name**
    
    **Description**
    
    **Resource Group**
    
    Select the resource group that has passed the connectivity test when you attached the Hologres computing resource.
    
    **Computing CU**
    
    Set the computing CU required for your task execution. The default value is `0.25`.
    
    **Parameters**
    
    When you define variables in the filter condition configuration using the `${parameter_name}` format, you need to configure **Parameter Name** and **Parameter Value** information in the **Script Parameters** section. The task will dynamically replace them with actual values during runtime. For more information, see [Node scheduling](/help/en/dataworks/user-guide/node-scheduling/).
    
2.  To run the node task, you can click **Save** and **Run** the sync task.
