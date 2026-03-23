DataWorks Data Modeling provides **Metrics** to help you build a unified metric system.

## Metric system

A **metric** is a statistical value that measures business characteristics and reflects the status of specific business activities. Metrics are generally categorized as follows:

-   **Atomic Metric**: Defines the business statistical scope and calculation rules. Examples include payment amount and number of paying users.
    
-   **Derived Metric**: Consists of an **Atomic Metric**, a **Modifier**, and a **Time Period**. It reflects the status of a business by measuring a target metric across a specific **Time Period**, **Dimension**, and business scope. Examples include `payment amount on PC in the last 30 days` and `number of paying users on PC in the last 30 days`.
    
-   **Composite Metric**: Created by performing mathematical operations on **Derived Metrics** or other **Composite Metrics**. These metrics are used to build complex analytical indicators.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4279002771/CAEQUxiBgMCwhqyP4BkiIDNmMjk4MThlZDgxMTRhZjVhMjgwNzczOGI2MzVjMjA05858463_20251107095111.155.svg)

-   Create an atomic metric. For more information, see [Atomic metrics](/help/en/dataworks/user-guide/atomic-metric#task-2090818).
    
-   Create a modifier. For more information, see [Modifier](/help/en/dataworks/user-guide/modifier#task-2090830).
    
-   Create a time period. For more information, see [Period](/help/en/dataworks/user-guide/period#task-2090831).
    
-   Create a derived metric. For more information, see [Derived metric](/help/en/dataworks/user-guide/derived-metric#task-2090832).
    
-   Create a composite metric. For more information, see [Composite metric](/help/en/dataworks/user-guide/composite-indicators).
    

## **FAQ**

### **Why can't I select a custom Common Layer when creating a metric?**

Metrics reside in the **Data Warehouse Summary (DWS)** layer within the **Common Layer** or the **Application Data Service (ADS)** layer within the **Application Layer**. Consequently, you cannot select other layers.

### When can I associate metrics with tables?

When creating a **Summary Table** or **Application Table**, you can use **Import Metrics** to generate metric fields.

### **Why can atomic metrics only be created in the Common Layer?**

**Atomic metrics** represent abstract concepts derived from **Business Processes**. For example, the order amount in a payment transaction is an **atomic metric**.

### **Why can I select atomic metrics when I create a derived metric in the Application Layer?**

A **derived metric** consists of an **atomic metric** with added **modifiers**. Therefore, metrics in the **Application Layer** are derived from **atomic metrics** in the **Common Layer**.
