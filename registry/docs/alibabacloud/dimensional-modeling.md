The data modeling feature in DataWorks follows the Kimball Dimensional Modeling methodology. This feature lets you design and create Dimension Tables, Fact Tables, Aggregate Tables, and Application Tables based on your business requirements. You can then publish these models to the corresponding R&D Engine. Additionally, you can use Reverse Modeling to generate models from existing Physical Tables.

**Note**

Data modeling is for planning and designing a data warehouse. You can use models to quickly create Physical Tables in the corresponding computing resources. Deleting a model does not affect the underlying Physical Table.

## Modeling perspectives

Dimensional modeling allows you to classify the model tables that you create into the **Data Import Layer**, **Common Layer**, and **Application Layer**. You can select the appropriate layer for modeling based on your actual needs. Different layers provide different management perspectives.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9981472671/p1024700.png)

-   **Common Layer**: Processes and integrates common data from the Data Import Layer, establishes unified metrics and dimensions, and builds reusable detailed fact data and summary data for analysis and statistics. This layer supports managing model tables from the perspective of **Data Domain** or **Business Category**.
    
-   **Application Layer**: Consumes processed data from the Common Layer to produce custom statistics for specific application scenarios or products. This layer only supports managing model tables from a **Business Category** perspective.
    
-   **Unlayered**: If a model table is not assigned to the **Common Layer** or the **Application Layer**, DataWorks places it in the **Unlayered**.
    

After you select a layer, you can create target tables only within that layer. You can also switch between the management perspectives supported by that layer in the directory tree to view and manage the model tables.

## **Dimensions**

A Dimension is a perspective for measuring and observing business activities. In Dimensional Modeling, a Dimension defines the context in which a business process occurs, helping you understand data from different angles. For example, in an e-commerce scenario, dimensions can include products, regions, and time.

For more information about how to design and create a Dimension, see [Create a conceptual model: Dimension](/help/en/dataworks/user-guide/create-a-dimension).

## Dimension tables

Extract all the dimensions that possibly exist in each data domain, and store the dimensions and attributes of the dimensions in dimension tables. For example, when you analyze e-commerce business data, possible dimensions (attributes of each dimension) include order (order ID, order creation time, buyer ID, and seller ID), user (gender and birthdate), and commodity (commodity ID, commodity name, and commodity put-on-shelf time). You can create the following dimension tables: order dimension table, user dimension table, and commodity dimension table. The attributes of each dimension are used as the fields in the dimension table. You can deploy the dimension tables in a data warehouse and perform extract, transform, and load (ETL) operations to store dimension data in the format defined in the dimension table. This allows business personnel to access the data for subsequent data analysis.

For more information about how to design and create a Dimension Table, see [Create a logical model: Dimension table](/help/en/dataworks/user-guide/create-a-dimension-table#task-2090825).

## Fact tables

Sort and analyze data that is generated in each business process, and store the data in fact tables as fields. For example, you can create a fact table for the business process of placing an order, and record the following information as fields in the fact table: order ID, order creation time, commodity ID, number of commodities, and sales amount. You can deploy the fact tables in a data warehouse and perform ETL operations to summarize and store data in the format defined in the fact table. This allows business personnel to access the data for subsequent data analysis.

For more information about how to design and create a Fact Table, see [Create a logical model: Fact table](/help/en/dataworks/user-guide/create-a-fact-table#task-2090826).

## Aggregate tables

An aggregate table organizes statistical data for multiple derived metrics within a data domain that share the same time period and dimensions. It is the result of a high-level business abstraction and provides a foundation for subsequent business queries, OLAP analysis, and data distribution. For more information about how to design and create aggregate tables, see [Create a logical model: aggregate table](/help/en/dataworks/user-guide/create-an-aggregate-table#task-2115818).

## Application tables

An Application Table is designed for a specific business scenario. It is used to organize statistical data from multiple atomic metrics, derived metrics, or statistical granularities that share the same time period and dimension. This table provides the foundation for subsequent activities such as business queries, OLAP analysis, and data distribution. You can design application tables based on your business needs. For more information about how to design and create application tables, see [Create a logical model: Application table](/help/en/dataworks/user-guide/create-an-application-table#task-2115818).

## Reverse modeling

Reverse Modeling is the process of generating a logical model from a Physical Table. This feature saves you a significant amount of time because you can quickly create models without having to repeat the modeling process. For more information, see [Reverse Modeling: Reverse-Modeling a Physical Table](/help/en/dataworks/user-guide/reverse-modeling#task-2129969).
