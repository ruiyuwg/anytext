In DataWorks Data Modeling, you can define data standards before you model or derive them from your business data during the modeling process. By enforcing standards for Lookup Tables, Measurement Units, Field Standards, and Naming Dictionaries, you ensure data consistency throughout modeling and application. This approach standardizes data production at the source, reducing costs for downstream data processing and applications.

## Supported data standards

DataWorks supports the following data standards: **Field Standard**, **Lookup Table**, **Measurement Unit**, and **Naming Dictionary**.

#### **Field Standard**

A Field Standard standardizes the definition of a field, including its name, Data Type, and value range. By applying a single standard to fields that share the same meaning, you can prevent confusion caused by inconsistent names or types. For example, you can create a Field Standard named **member\_id** and associate it with the corresponding fields in your tables to ensure all member ID fields are consistent.

**Table name**

**Original field**

**Issue**

**Standardized field**

Registration Table

user\_id

Inconsistent naming

member\_id

Login Table

userid

Lack of an underscore causes ambiguity

#### **Lookup Table**

A Lookup Table defines the range of acceptable values for a field. For example, the **gender** field can be restricted to "**Male**", "**Female**", and "**Unknown**".

#### **Measurement Unit**

A Measurement Unit defines business-specific units, such as currency, quantity, or time. For example, the measurement unit for **item quantity** can be **piece**.

#### **Naming Dictionary**

A Naming Dictionary provides standardized definitions for the roots and morphemes of business terms, Physical Tables, and fields. It serves as an enterprise-level library for naming conventions. For example, the standard term for a company's annual income could be **total annual revenue**.

## **Data standard relationship**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4608872771/CAEQUxiBgMCA34z_5BkiIGE1YzdjNmUzMWFjODRiNWI4N2I4ZGRjMmNkNTg0ZDAw5446279_20250708150713.530.svg)

To **Associate** is to link a Data Standard with a specific field in a Logical Model. The field then adheres to the rules defined in the standard.

## **Access data standards**

1.  Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the top navigation bar, select the desired region. In the left-side navigation pane, choose **Data Development and O&M** > **Data Modeling**. On the page that appears, select the desired workspace from the drop-down list and click **Go to Data Modeling**.
    
2.  On the **Data Modeling** page, click **Data Standard** in the top menu bar to open the Data Standard page.
    

## **Data Standard: Field Standard**

A Field Standard provides a standard definition for a field, including its naming, Data Type, and value range. It allows you to associate fields that have the same meaning but different names across multiple tables. If the Field Standard changes, you can quickly locate and update all associated tables.

### **Hierarchical structure**

-   When creating a Field Standard, you must place it under the root directory, a directory, or a standard set. The hierarchy is as follows:
    
    -   **Root directory**: The top-level directory. All directories, standard sets, and standards must be placed under the root directory.
        
    -   **Directory**: A directory stores standards and standard sets, similar to a folder in an operating system.
        
    -   **Standard Set**: A Standard Set is similar to a directory but can only contain standards.
        
-   Field Standards can have inheritance relationships. For example, a **buyer ID standard** and a **seller ID standard** can both inherit from a member ID standard.
    

### **Define a Field Standard**

**Note**

If you need to enter a large number of **Field Standards**, you can use the [Batch Import](#94c54d09e3hrp) feature for efficiency.

1.  On the **Data Standard** page, click **Field Standard** in the left-side navigation pane to go to the **Field Standard** page.
    
2.  In the directory tree on the left, right-click the target directory or standard set and select Create Standard.
    
    > You can create directories or standard sets as needed to organize your Field Standards.
    
3.  In the **Create Standard** dialog box, configure the following parameters.
    
    **Parameter**
    
    **Description**
    
    **Abbreviation**
    
    When associated with a field in a Logical Model, this value becomes the field's **name**.
    
    **Display Name**
    
    When associated with a field in a Logical Model, this value becomes the field's **display name**.
    
    **Length**
    
    This parameter depends on the selected Data Type.
    
    For example, if you select the **DECIMAL** type, the length corresponds to 20 in DECIMAL(20, 4).
    
    **Precision**
    
    This parameter depends on the selected Data Type.
    
    For example, if you select the **DECIMAL** type, the precision corresponds to 4 in DECIMAL(20, 4).
    
    **Not Null**
    
    Specifies whether the field that references this standard can be null. By default, null values are allowed.
    
    **Default Value**
    
    The default value for a referencing field when no value is provided. The maximum length is 2,048 characters.
    
    **Parent Standard**
    
    You can select an existing standard as the parent standard to create an inheritance relationship, which helps you better identify field associations.
    
    For example, since both a **buyer ID** and a **seller ID** are types of a **member ID**, their respective standards can inherit from the **member ID standard**.
    
    **Referenced Lookup Table**
    
    You can select a predefined [Lookup Table](#08e5cd6418za6) to constrain the value range of the field.
    
    **Important**
    
    Before you can delete a Field Standard, you must remove all references to it.
    

### **Use a Field Standard**

You can use a Field Standard to define specific fields in a Logical Model. This is supported for **Source Tables**, **Dimension Tables**, **Fact Tables**, **Aggregate Tables**, and **Application Tables**. For example, you can associate the member ID field in the member information dimension table **dim\_ec\_con\_member\_df** with the **Field Standard** `member_id`. In this case, the field name is inherited from the **Abbreviation** of the Field Standard, the display name is inherited from its **Display Name**, and the **Type** and **Not Null** properties are also inherited directly. For detailed steps, see [Configure fields for a dimension table](/help/en/dataworks/user-guide/create-a-dimension-table#e2f786702bktd).

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6649888671/p983097.png)

## **Data Standard: Lookup Table**

A Lookup Table defines the range of acceptable values for a field.

### **Define a Lookup Table**

**Note**

If you need to enter a large number of **Lookup Tables**, you can use the [Batch Import](#94c54d09e3hrp) feature for efficiency.

1.  On the **Data Standard** page, click **Lookup Table** in the left-side navigation pane to go to the **Lookup Table** page.
    
2.  Right-click a directory name and click **Create Lookup Table**.
    
    > You can create directories as needed to organize your Lookup Tables.
    
3.  In the **Create Lookup Table** dialog box, configure the parameters and add enumerated values.
    
    For example, set **ID** to **gender**, **Display Name** to **Gender**, and **Name** to **gender**. The enumerated values are as follows.
    
    **Code ID**
    
    **Code name**
    
    **Name**
    
    **Description**
    
    0
    
    Unknown
    
    unknown
    
    Unknown gender
    
    1
    
    Male
    
    male
    
    Male
    
    2
    
    Female
    
    female
    
    Female
    
    **Important**
    
    Before you can delete a Lookup Table, you must remove all references to it.
    

### **Publish a Lookup Table**

Click **Publish** in the upper-right corner of the Lookup Table details page to materialize the lookup table as a Physical Table or Materialized View.

### **Use a Lookup Table**

You can use a Lookup Table to define specific fields in a Logical Model. This is supported for **Source Tables**, **Dimension Tables**, and **Fact Tables**. For example, you can associate the **gender** field in the member information dimension table **dim\_ec\_con\_member\_df** with the **Lookup Table** `gender`. In this case, the field name is inherited from the **ID** of the Lookup Table, and the display name is inherited from its **Display Name**. For detailed steps, see [Configure fields for a dimension table](/help/en/dataworks/user-guide/create-a-dimension-table#e2f786702bktd).

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6649888671/p983012.png)

If a field has different names across multiple tables, you can **associate all instances with a single Lookup Table** to standardize the naming.

**Table name**

**Original field**

**Original enumerated values**

**Standardized field**

**Standardized enumerated values**

Member Information Table

sex

1, 2

gender

0, 1, 2

Member Login Table

gender

0, 1, 2

### **Implement standards with lookup tables**

When a **Fact Table** or **Dimension Table** from a Logical Model is published as a Physical Table, the system generates a **Quality Rule** for any field that is associated with a Lookup Table. You can then create a quality monitoring rule based on this Quality Rule to monitor and enforce the standard for the Physical Table. For more information, see [Implement data standards](/help/en/dataworks/user-guide/monitor-the-compliance-of-data-standards).

## **Data Standard:** Measurement Unit

A Measurement Unit defines business-specific units, such as currency, quantity, and time.

### **Define a Measurement Unit**

**Note**

If you need to enter a large number of **Measurement Units**, you can use the [Batch Import](#94c54d09e3hrp) feature for efficiency.

1.  On the **Data Standard** page, click **Measurement Unit** in the left-side navigation pane to go to the **Measurement Unit** page.
    
2.  On the **Measurement Unit** page, right-click the target measurement category and select **Create Measurement Unit**.
    
3.  In the **Create Measurement Unit** dialog box, configure the parameters and click OK.
    
    For example, set **Abbreviation** to **m**, **Name** to **meter**, and **Display Name** to **Meter**.
    

### **Use a Measurement Unit**

#### **Associate with a Logical Model**

You can use a Measurement Unit to define the unit for a specific field in a Logical Model. This is supported for **Fact Tables**, **Aggregate Tables**, and **Application Tables**. For example, you can associate the **item quantity** field in the order creation fact table `dwd_trade_order` with the Measurement Unit **piece**. For detailed steps, see [Configure fields for a fact table](/help/en/dataworks/user-guide/create-a-fact-table#e80a6f902bkxw).

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6649888671/p982995.png)

#### **Associate with an Atomic Metric**

When you define an Atomic Metric, you can select an appropriate Measurement Unit based on the statistical data type of the [Atomic Metric](/help/en/dataworks/user-guide/atomic-metric#task-2090818).

## **Data Standard: Naming Dictionary**

A Naming Dictionary provides standardized definitions for the **roots** and **morphemes** of business terms, Physical Tables, and fields. It serves as an enterprise-level library for naming conventions.

### **Define a Naming Dictionary**

**Note**

If you need to enter a large number of **Naming Dictionaries**, you can use the [Batch Import](#94c54d09e3hrp) feature for efficiency.

1.  On the **Data Standard** page, click **Naming Dictionary** in the left-side navigation pane to go to the **Naming Dictionary** page.
    
2.  Click **Create**. In the **Create Naming Dictionary** dialog box, configure the parameters and click **OK**.
    
    For example, set **Display Name** to **Engine**, **Name** to **engine**, and **Abbreviation** to **eng**.
    

### **Use a Naming Dictionary**

You can use a Naming Dictionary to check the naming conventions of tables in your data warehouse layers. This is supported for **Source Tables**, **Dimension Tables**, **Fact Tables**, **Aggregate Tables**, and **Application Tables**. For example, if no Naming Dictionary entry with the abbreviation **trade** exists, the table name **dwd\_trade\_order** would violate the naming convention for the DWD layer.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9506425571/p982863.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6649888671/p991167.png)

To use this feature, configure it in the data warehouse layer checker. For more information, see [Configure data warehouse layer checkers](/help/en/dataworks/user-guide/data-warehouse-layering#ac1f1059e2xm8) and [Use checkers](/help/en/dataworks/user-guide/data-warehouse-layering#8a4cee1c78dzu).

## **More operations**

### **Batch import standards**

If you need to create a large number of data standards, you can use the Batch Import feature. DataWorks provides an import template that you can fill out and upload.

1.  On the **Data Standard** page, click **Naming Dictionary** in the left-side navigation pane to go to the **Naming Dictionary** page.
    
    > The Field Standard and Lookup Table details pages also have import and export buttons.
    
2.  Click **Import** to go to the **Import** page and select the **Import Type**.
    
3.  In the **Template Preview** section, click **Download Template** and fill in the required fields.
    
4.  Click **Next Step**. On the **Data Import** tab, upload and preview the data file.
    
    **Note**
    
    -   **Import Mode**: If an object with the same name as one in the import file already exists in DataWorks, you can choose to skip that object or overwrite it with the content from the file.
        
    -   Batch Import supports only files in `.xlsx` format. You can import up to 30,000 records per operation, and the file size cannot exceed `10 MB`.
        
    
5.  On the **OK** tab, you can view the import results. Click **View More Details** next to an entry to go to the edit page for more operations. If the import fails, you must resolve the errors based on the details provided and try importing again.
    

### **Batch export standards**

When you need to reuse data standards across different workspaces, you can use the Batch Export function. You can find the **Export** button on the details pages for **Field Standards**, **Lookup Tables**, or **Naming Dictionaries**.
