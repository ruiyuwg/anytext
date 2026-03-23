A Business Category, Data Domain, and Data Mart form a business-driven management framework. By classifying data ownership (Business Category), defining core business activities (Data Domain), and organizing scenario-based data services (Data Mart), this framework connects data production to consumption. This topic describes the relationships between **Business Category**, **Data Domain**, **Business Process**, **Data Mart**, and **Subject Area**, and explains how to use them.

## **Core concept relationships**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0697872771/CAEQUxiBgIC5xoT_5BkiIGM2NTVjOTNlYmVhOTRiZWU5NWViM2U4MDZkM2I5N2Q15441524_20250708175257.711.svg)

-   **Business Category**: A Business Category is the highest-level division of a business area. For example, a retail business can be divided into brick-and-mortar business and e-commerce business based on sales channels.
    
-   **Data Domain**: A Data Domain is a cross-business aggregation of subjects. It logically groups an enterprise's business data based on dimensions such as business type, data source, and data purpose. A Data Domain can belong to multiple Business Categories. For example, a transaction domain can serve both online and offline transaction scenarios.
    
-   **Business Process**: A Business Process represents a specific business activity within a Data Domain. For example, a transaction domain may include processes such as placing an order and making a payment. A Data Domain can contain multiple Business Processes.
    
-   **Data Mart**: A Data Mart serves as a data endpoint for a specific business scenario, such as an operations platform mart.
    
-   **Subject Area**: A Subject Area divides a Data Mart based on different analytical perspectives, such as product analysis or user behavior. A Data Mart can contain multiple Subject Areas.
    

## **Business Category**

If your organization has complex business operations, create Business Categories to differentiate data by business line. This simplifies data management.

In the retail industry, common dimensions for classification include sales channels, product management lines, and core functions. You can choose one of these dimensions and follow the principles of **data ownership and business independence** to categorize your business operations.

The following table provides examples of business classifications based on these common dimensions:

**Classification dimension**

**Use case**

**Business Category examples**

**Data scope**

**Sales channel**

Omnichannel retailers

1\. Brick-and-mortar Retail

2\. E-commerce

3\. Cross-border Business

POS transactions, app orders, overseas warehouse inventory

**Product management line**

Multi-category conglomerates

1\. Fast-Moving Consumer Goods (FMCG)

2\. Home Appliances

3\. Fresh Produce

SKU basic information, product categories, shelf life monitoring

**Core function**

Single-channel, multi-department collaboration

1\. Procurement and Supply Chain

2\. Marketing

3\. Member Operations

Supplier profiles, promotion tables, member level tables

### **Define a Business Category**

In the left-side navigation pane on the **Data Warehouse Planning** page, click **Business Category**. On the **Business Category** page, define Business Categories as follows.

###### **Create a Business Category**

1.  On the **Business Category** page, hover over the ![新建](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3630615571/p983390.png) icon and click **Create Top-level Category**.
    
2.  In the **Create Top-level Category** dialog box, configure the parameters and click **OK**.
    

###### **Create a sub-category**

You can also create sub-categories under a top-level Business Category. The creation process is the same as creating a top-level Business Category.

###### **Associate Data Domains**

After creating a Business Category, associate it with the required Data Domains to define its data scope. Once associated, these Data Domains become available for data modeling within that category.

For more information about data domains, see [Data Domain](#0325b13dbd1hy).

###### **Data Mart Management**

After creating a Business Category, use the **Data Mart Management** section to view and manage associated Data Marts. You can edit or delete them as needed.

For more information about Data Marts, see [Data Mart](#e6023f7defrj3).

**Important**

Deleting a Data Mart removes its association with the Business Category and permanently deletes the mart. This action cannot be undone.

### **Use a Business Category**

After you create a Business Category, you can associate it with a **Dimension Table**, **Fact Table**, **Aggregate Table**, or **Application Table** when you create them in **Dimensional Modeling**. You can also click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3630615571/p985360.png) icon above the directory tree on the left to go to the model list page and view table classification details from a business data perspective.

You can also go to **Data Metrics** and associate the Business Category when creating an **Atomic Metric**, **Derived Metric**, or **Composite Metric** in the Common Layer.

## **Data Domain**

A data domain is a high-level data classification standard created by abstracting, refining, and combining business processes. It serves as the primary grouping category for business users, helping them quickly locate their business data from a vast amount of information.

The following diagram shows the relationship between a Business Category and a Data Domain in the retail industry:

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0697872771/CAEQUxiBgMDrlYf_5BkiIDY3ZjBiMWZkNGVkNTQ5Mjc4ODAwNDkxOGJhOWMxYWQ35459372_20250715105308.455.svg)

### **Define a Data Domain**

###### **Create a Data Domain**

1.  In the left-side navigation pane on the **Data Warehouse Planning** page, click **Common Layer****\>****Data Domain** to go to the **Data Domain** page.
    
2.  Click **Create**. In the **Create Data Domain** dialog box, configure the parameters and click **Confirm**.
    

**Important**

System-default Data Domains cannot be deleted. Before deleting a Data Domain, you must first delete all of its associated business processes and logical models.

###### **Add a Business Process**

After you create a Data Domain, you can view its details and create Business Processes for the business activities you need to analyze.

1.  On the **Data Domain** page, click a Data Domain to go to its details page.
    
2.  After you create a Data Domain, the system automatically adds a Business Process with the `_default` suffix to it.
    
3.  Click **Create Business Process**. In the **Create Business Process** dialog box, configure the parameters and click **OK**.
    

### **Use a Data Domain**

You can reference a **Data Domain** in the following modules:

-   In **Dimensional Modeling**, create a **ODS Table**, **Dimension Table**, or **Aggregate Table** under a specified Data Domain.
    
-   The English abbreviation of a Data Domain can be used as an optional attribute when you define a new model rule in the inspector of the **Data Layer**.
    

## **Business Process**

A Business Process describes the flow of a business activity. For example, in e-commerce, adding items to a cart, placing an order, and making a payment can each be a Business Process. Business Processes are typically used for performance analysis. For example, in a Funnel Analysis, the activity of purchasing a product can be broken down into a sequence of Business Processes: browsing products, adding to cart, placing an order, making a payment, and confirming receipt. By counting the number of orders at each stage, you can perform a Funnel Analysis on the "number of orders" metric.

The following diagram shows the relationship between a Business Category, Data Domain, and Business Process in the retail industry:

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0697872771/CAEQUxiBgMD6uIr_5BkiIDUzMTE3ODIwNDAzYzQyMTRiYTc5NzMxMTk3MmNjMjA15459372_20250715110334.647.svg)

### **Define a Business Process**

1.  In the left-side navigation pane on the **Data Warehouse Planning** page, click **Common Layer** to go to the **Business Process** page.
    
2.  Click **Create Business Process**. In the **Create Business Process** dialog box, configure the parameters and click OK.
    
3.  You can delete a Business Process from the main process list, or from the **Business Process** list within its parent **Data Domain**.
    
    **Important**
    
    Before you delete a Business Process, you must delete the **Logical Model** and **Metric** associated with it.
    

### **Use a Business Process**

You can reference a Business Process in the following modules:

-   In **Dimensional Modeling**, associate a specific Business Process when you create a **Fact Table**.
    
-   In **Data Metrics**, create an **Atomic Metric**, **Derived Metric**, or **Composite Metric** to measure business attributes for each Business Process.
    

## **Data Mart**

A Data Mart provides personalized data statistics for specific application scenarios or products based on a Business Category. It is typically located in the Application Layer.

For example, in the e-commerce business of the retail industry, you can build Data Marts such as an e-commerce mart and a retail customer profile mart to serve the analytical needs of operations staff.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0697872771/CAEQUxiBgMC29Iz_5BkiIDE3YTE1ZjY4ODA3MzQ1MDJhZTVkMTdhOGUyMjlmMGI55459372_20250715113425.411.svg)

### **Define a Data Mart**

###### **Create a Data Mart**

1.  In the left-side navigation pane of the **Data Warehouse Planning** page, click **Application Layer** > **Data Mart** to go to the **Data Mart** page.
    
2.  On the **Data Mart** page, hover over the ![新建](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3630615571/p983845.png) icon and click **Create First-level Data Mart**. In the **Create First-level Data Mart** dialog box, enter the parameters and click **OK**.
    
    The following table describes the key parameters.
    
    1.  **Mart Type**.
        
        -   **Business Mart**: A mart oriented towards business requirements.
            
        -   **Data Application Mart**: A mart oriented towards data product requirements.
            
        -   **Common Mart**: Select this type if you want to create a common Application Layer model for all Data Marts.
            
    2.  **Business Category**.
        
        1.  The **Business Category** to which the Data Mart belongs. For more information, see [Business Category](#e6a7bf2128tr5).
            
3.  To delete a **Data Mart**, right-click the target mart in the Data Mart directory on the left and click **Delete**.
    

###### **Create a sub-mart**

You can also create sub-marts under a first-level Data Mart. The creation process is the same as for a first-level Data Mart.

###### **Subject Area Management**

After creating a Data Mart, you can go to the **Data Mart Management** section of the mart's details page to manage its associated Subject Areas.

**Important**

Deleting a specified Subject Area removes its association with the Data Mart and also deletes the Subject Area itself. Please perform this operation with caution.

### **Use a Data Mart**

After creating a Data Mart, you can reference it in the following modules:

-   In **Dimensional Modeling**, associate the Data Mart when you create an Application Table for specific business data analysis.
    
-   In **Data Metrics**, create a **Derived Metric** or **Composite Metric** to measure business attributes for each Data Mart.
    

## **Subject Area**

A Subject Area divides a Data Mart by analytical perspective. It is a collection of related data organized for statistical analysis in business applications.

For example, an e-commerce mart is created primarily for the analytical needs of operations staff in the retail industry. Based on different perspectives, the data in the mart is divided into Subject Areas such as "Product", "Category", and "Region". When you create an Application Layer Derived Metric or an Application Layer model, you must associate it with the target mart and Subject Area.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0697872771/CAEQUxiBgIC215D_5BkiIDVmNjYyZjAwNDhlYTQ3NjZhZTY3YjMxMDhmNzYxOWU15459372_20250715113840.119.svg)

### **Define a Subject Area**

###### **Create a Subject Area**

1.  In the left-side navigation pane on the **Data Warehouse Planning** page, click **Application Layer** > **Subject Area** to go to the **Subject Area** page.
    
2.  On the **Subject Area** page, hover over the ![新建](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3630615571/p983958.png) icon and click **Create First-level Subject Area**. In the **Create First-level Subject Area** dialog box, configure the parameters and click **OK**.
    
3.  To delete a Subject Area, right-click the target Subject Area in the directory on the left and click **Delete**.
    

###### **Create a sub-subject area**

You can also create sub-subject areas under a first-level Subject Area. The creation process is the same as creating a first-level Subject Area.

### **Use a Subject Area**

After creating a Subject Area, you can reference it in the following modules:

-   In **Dimensional Modeling**, associate the Subject Area when you create an Application Table.
    
-   In **Data Metrics**, create a **Derived Metric** or **Composite Metric** to measure business attributes for each Subject Area.
    

## Next steps

After you complete these configurations, you must define your data warehouse layering structure. Plan your data warehouse layers and set up inspectors for each layer to establish standards for subsequent **Dimensional Modeling** and **Data Metrics** management.

For more information, see [Data Layer](/help/en/dataworks/user-guide/data-warehouse-layering).
