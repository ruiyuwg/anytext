As businesses expand, their data grows exponentially. This leads to vast and complex datasets with inconsistent standards, making data management a significant challenge. The intelligent Data Modeling service in DataWorks provides a structured way to organize messy, complex, and large-scale data, helping you maximize the value of your enterprise data.

## Prerequisites

Intelligent Data Modeling is a Value-added Service in DataWorks. You must activate this service before you can use its features. For more information about different editions and billing standards, see [Intelligent Data Modeling Billing](/help/en/dataworks/billing-standards-of-data-modeling).

**Note**

Data Modeling is only supported in Chrome 69 or later on a PC.

## Limitations

The permissions for using Intelligent Data Modeling vary based on roles within a DataWorks Workspace:

-   View model details: All roles in a DataWorks Workspace, including **Visitor**, **Workspace Administrator**, **Model Designer**, and **Project Owner**, can view data models.
    
-   Edit model information: Only users with the **Workspace Administrator**, **Development Personnel**, **O&M Personnel**, or **Model Designer** role can edit data models.
    
-   Publish data models: Only users with the **Workspace Administrator** or **O&M Personnel** role can publish data models.
    

To perform these actions, grant the required roles to the target users. For more information about how to grant permissions, see [Manage Permissions on Modules in a Workspace](/help/en/dataworks/user-guide/manage-permissions-on-workspace-level-services#task-2059693).

## Overview

DataWorks Data Modeling supports Data Warehouse Planning, establishing Data Standards, Dimensional Modeling, and defining Data Metrics. By using Data Modeling in DataWorks, you can materialize the Dimension Tables, Fact Tables, and Aggregate Tables from your designs into a compute engine for further application.

![架构图](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0773037361/p295134.png)

-   **Data Warehouse Planning**
    
    When you use DataWorks for Data Modeling, you can design Data Layers, Business Categories, Data Domains, Subject Areas, and Business Processes on the Data Warehouse Planning page.
    
    -   **Data Layer**
        
        You can design the Data Layers of your data warehouse based on your business and data scenarios. DataWorks provides a default five-layer architecture that is common in the industry:
        
        -   Operational Data Store (ODS)
            
        -   Data Warehouse Detail (DWD)
            
        -   Data Warehouse Summary (DWS)
            
        -   Application Data Service (ADS)
            
        -   Dimension (DIM)
            
        
        You can also create other Data Layers to meet your business needs. For instructions on how to create a Data Layer, see [Create a Custom Data Layer](/help/en/dataworks/user-guide/data-warehouse-layering#a3b1f7186ddku).
        
    -   **Business Category**
        
        If your business is complex and different business types need a way to quickly locate their own data, you can define different Business Categories. You can then associate these categories with the corresponding Dimension Tables and Fact Tables during modeling. For instructions on how to create a Business Category, see [Business Category](/help/en/dataworks/user-guide/business-planning#e6a7bf2128tr5).
        
    -   **Data Domain**
        
        A Data Domain is a high-level data classification standard. It is a collection of abstracted and refined business processes that helps business users quickly locate relevant data from a massive dataset.
        
        Data Domains are designed for business analysis. Each Data Domain corresponds to a macro-level analytical area, such as procurement, supply chain, HR, or e-commerce. A unified team or individual, like a data architect or modeling team member, should manage and define Data Domains. These designers must have a deep understanding of the business to properly interpret and abstract its processes. For instructions on how to plan and build Data Domains in DataWorks, see [Data Domain](/help/en/dataworks/user-guide/business-planning#0325b13dbd1hy).
        
    -   **Business Process**
        
        A Business Process describes a business activity flow. For example, in e-commerce, adding an item to a cart, placing an order, and making a payment can each be a Business Process. A common use case is funnel analysis, where the purchasing journey is broken down into steps like browsing items, adding to cart, placing an order, payment, and confirming receipt. By tracking the number of orders at each stage, you can analyze the "order count" metric throughout the funnel. For instructions on how to create a Business Process in DataWorks, see [Business Process](/help/en/dataworks/user-guide/business-planning#88bfddccc3ibq).
        
    -   **Data Mart**
        
        A Data Mart defines detailed business themes for a specific Business Category. It uses Subject Areas to partition data from different analytical perspectives, ultimately serving business applications and statistical analysis. An example is a Data Mart for an operations platform. For more information, see [Data Mart](/help/en/dataworks/user-guide/data-mart#task-2170337).
        
    -   **Subject Area**
        
        A Subject Area is used to divide a Data Mart based on different analytical perspectives. It is a collection of closely related data themes. You can group these themes into different Subject Areas based on business focus. For example, common Subject Areas in e-commerce include transactions, members, and products. For more information, see [Subject Area](/help/en/dataworks/user-guide/subject-area#task-2088481).
        
    
-   **Data Standard**
    
    DataWorks Data Modeling allows you to define Data Standards before you start modeling or to develop them from business practices over time. By standardizing Lookup Tables, Measurement Units, Field Standards, and Naming Dictionaries, you ensure consistency in data processing during modeling and application.
    
    For example, consider two tables: a registration table and a Logon table. The registration table contains a member ID stored in a field named **user\_id**, while the Logon table stores the same information in a field named **userid**. To resolve this, you can create a unified Field Standard for the member ID. This standard can specify a Lookup Table for data processing, define field properties (such as data type, length, and default value), and set the Measurement Unit. Once this Field Standard is created, you can associate it with the member ID field in all future models, ensuring consistency across all tables.
    
    For instructions on how to create a Field Standard in DataWorks, see [Field Standard](/help/en/dataworks/user-guide/data-standards#73fca55321rs0).
    
-   **Dimensional Modeling**
    
    The philosophy of Data Modeling in DataWorks follows Dimensional Modeling principles. When you design a data warehouse using the Dimensional Modeling feature:
    
    -   **Dimension Table**
        
        Based on your business's Data Domain plan, you can extract potential dimensions for data analysis and store them and their attributes in Dimension Tables. For example, in e-commerce data analysis, useful dimensions and attributes include: the order dimension (with attributes like order ID, creation time, buyer ID, and seller ID), the user dimension (gender, birth date), and the product dimension (product ID, name, launch time). You can create Dimension Tables for orders, users, and products, where the dimensional attributes are stored as fields in the table. You can then deploy these tables to your data warehouse and use ETL jobs to store actual dimension data according to the table definitions, making it readily available for business analysts.
        
    -   **Fact Table**
        
        Following your Business Process plan, you can identify and organize the factual data generated during each process and store these fields in Fact Tables. For example, for the "place order" Business Process, you can create a corresponding Fact Table to record data generated during this process, such as order ID, creation time, product ID, quantity, and amount. You can then deploy these Fact Tables to your data warehouse and use ETL jobs to consolidate and store real data according to the table definitions, making it accessible for business analysis.
        
    -   **Aggregate Table**
        
        You can pre-aggregate detailed fact and dimension data into an Aggregate Table based on business analysis needs and data warehouse layers. For subsequent data analysis, you can directly query the Aggregate Table instead of the more granular Fact and Dimension Tables.
        
    -   **Application Table**
        
        An Application Table is designed for specific business scenarios to organize multiple Atomic Metrics and Derived Metrics that share the same Period and dimensions. It serves as a foundation for business queries, OLAP analysis, and data distribution. You can design Application Tables based on the needs of your business applications.
        
    -   **Reverse Modeling**
        
        Reverse Modeling is primarily used to import models generated by other tools into the Dimensional Modeling module of DataWorks. For example, if you have existing models and want to switch to DataWorks intelligent modeling, you can use the Reverse Modeling feature. This feature quickly imports your existing models, saving you the significant time and effort of remodeling them.
        
    
    For instructions on how to create Dimension Tables, Fact Tables, and Aggregate Tables, see [Create a logical model: Dimension Table](/help/en/dataworks/user-guide/create-a-dimension-table#task-2090825), [Create a logical model: Fact Table](/help/en/dataworks/user-guide/create-a-fact-table#task-2090826), [Create a logical model: Aggregate Table](/help/en/dataworks/user-guide/create-an-aggregate-table#task-2115818), and [Create a logical model: Application Table](/help/en/dataworks/user-guide/create-an-application-table#task-2115818). For more information about Reverse Modeling, see [Reverse Modeling: Reverse a Physical Table](/help/en/dataworks/user-guide/reverse-modeling#task-2129969).
    
-   **Data Metrics**
    
    Data Modeling in DataWorks provides a Data Metric feature that enables you to build a unified metric system.
    
    The metric system consists of **Atomic Metric**, **Modifier**, **Period**, and **Derived Metric**.
    
    -   **Atomic Metric**: A measure based on a Business Process, such as "payment amount" in the "make payment" process.
        
    -   **Modifier**: A qualifier that limits the scope of a metric, such as limiting the "payment amount" statistic to "maternal and infant products".
        
    -   **Period**: A time range or point for a metric, such as specifying the "payment amount" to be calculated over the "last 7 days".
        
    -   **Derived Metric**: A combination of an Atomic Metric, a Modifier, and a Period. For example, "total payment amount for maternal and infant products over the last 7 days".
        
    
    For instructions on how to create a metric system, see [Data Metric](/help/en/dataworks/user-guide/data-metric/).
    

## Why data modeling matters

-   **Standardized Management of Massive Data Volumes**
    
    The larger the business, the more complex the data structure becomes. As a business grows, its data volume increases rapidly. Managing and storing this data in a structured and orderly way is a challenge for every enterprise.
    
-   **Break Down Data Silos and Enable Connectivity**
    
    When data is managed independently by different business units and departments, Data Silos form. This prevents decision-makers from getting a clear and quick overview of company-wide data. Breaking down these Data Silos is a major challenge in enterprise data management.
    
-   **Unified Data Standards for Flexible Integration**
    
    Different descriptions for the same data lead to management difficulties, content duplication, and inaccurate results. Establishing unified Data Standards without disrupting the existing system architecture is key to enabling flexible integration with upstream and downstream services.
    
-   **Maximize Data Value and Business Profit**
    
    Effective Data Modeling allows you to fully utilize enterprise data, maximizing its value and providing more efficient data services for your business.
