Script templates abstract SQL processes to facilitate code reuse. Before you can use a script template, you must first create one that meets your business requirements. This topic describes how to create, share, and upgrade script templates, and how to view reference records in the DataStudio script template management interface.

## **Component Introduction**

In many MaxCompute business scenarios, you may encounter similar SQL processes. These processes use input and output tables that have the same schema or compatible data types but different names. To reuse code, a developer can abstract such an SQL process into an SQL script template. The template uses input parameters to represent variable input tables and output parameters to represent variable output tables.

When you use an SQL script template node, you can select a template that matches your business process from a list. Then, you can configure the specific input and output tables for your business without needing to edit the code. This process generates a new SQL script template node, which significantly improves development efficiency and avoids repetitive work. After an SQL script template node is generated, you can publish and schedule it in the same way as a standard SQL node.

**Note**

Currently, only the MaxCompute compute engine supports SQL script templates.

## Usage notes

-   **Edition requirements:** Supported only in DataWorks Standard Edition and higher.
    
-   **Permission requirements:** You must have the **Development** permission in the DataWorks workspace to create and use script templates. For more information, see [Workspace-level module permission control](/help/en/dataworks/user-guide/manage-permissions-on-workspace-level-services#section-m3s-ots-vl3).
    

## **Component types**

Components are classified as either workspace-specific script templates or public components. The component developer can set this classification when creating the component.

-   **Workspace SQL Script Templates:** After a component is published, it is available by default only to members of that DataWorks workspace. To use the component, you must be a member of that workspace. For more information, see [Workspace-level module permission control](/help/en/dataworks/user-guide/manage-permissions-on-workspace-level-services#section-m3s-ots-vl3).
    
-   **Public SQL Script Templates:** A developer can publish a general-purpose script template to the entire tenant from the **Public SQL Script Templates** area. After the template is published, all users in the tenant can use this public script template.
    

## **Accessing Component Management**

1.  Go to the [Workspaces](https://dataworks.console.aliyun.com/workspace/list) page in the DataWorks console. In the top navigation bar, select a desired region. Find the desired workspace and choose **Shortcuts** > **Data Studio** in the **Actions** column.
    
2.  In the navigation pane on the left, click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5314298371/p840001.png) to go to the script template management page.
    

## **Component Usage Flow**

### **Step 1: Define the component**

A developer can use the **SQL Script Templates** page in Data Studio to define the code for the procedure body and its input and output parameters. By writing an abstract SQL process, you can use input parameters to process a specified input table and generate a valuable output table, which is represented by an output parameter. The format for input and output parameters in the code is `@@{parameter_name}`.

1.  In the workspace-specific script template management area, click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6057070471/p841016.png) and select **Create SQL Script Template**. You can also select **Create Directory** first to plan your script template folders, then right-click a folder and select **Create SQL Script Template**.
    
    **Note**
    
    -   Components created by members of this workspace are managed under **Workspace SQL Script Templates**.
        
    -   You can find published components under **Public SQL Script Templates**.
        
    
2.  You can configure the component information.
    
    1.  Configure the procedure body.
        
        The procedure body is the implementation code of the script template. By writing abstract SQL code and using the `@@{parameter_name}` format, you can include input and output parameters. This lets you process a specified input table using input parameters to generate a valuable output table. Later, when you use the script template, you only need to configure different input and output parameters to generate correct and runnable SQL code.
        
    2.  Configure input parameters.
        
        On the right side of the component editing page, click **Parameter Configuration**. Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7510611471/p847106.png) icon to the right of **Input Parameters** to define input parameters for the procedure body. You can specify the input parameter as a **Table** or a **String**.
        
        **Note**
        
        You can also click Parse I/O Parameters at the top of the script template editor page. This feature automatically detects input and output parameters from the code. You can then configure the parameters as described in the following table.
        
        #### **Table**
        
        #### **Scenarios**
        
        Use this type when the script template processes source table data to produce output results of a single, constant category.
        
        #### **Configuration parameters and description**
        
        -   **Key parameter**: **Parameter Definition**.
            
        -   **Configuration description**: This parameter defines the schema of the input table in a text format, including field names, data types, and descriptions. This definition informs users that when they use the script template, the input table they configure must have the same number of fields and compatible data types as defined here. This helps prevent runtime errors caused by mismatched field counts or incompatible data types between the configured input table and the defined input table.
            
            **Note**
            
            This definition is for reference only. It provides a hint for configuring input parameters and does not trigger an immediate check.
            
        -   **Example**:
            
            We recommend that you define parameters in the following format:
            
            ```
            Field1_Name Field1_Type Field1_Comment 
            Field2_Name Field2_Type Field2_Comment 
            ...
            Fieldn_Name Fieldn_Type Fieldn_Comment
            ```
            
            Sample configuration:
            
            ```
            area_id STRING 'area ID' 
            city_id STRING 'city ID' 
            order_amt DOUBLE 'Order amount' 
            ```
            
        
        #### **String**
        
        #### **Scenarios**
        
        Use this type to control the values of input parameters with variables when you process source table data.
        
        #### **Configuration parameters and description**
        
        -   **Key parameter**: **Default Value**.
            
        -   **Configuration description**: You can set a default value for this parameter type. If a default value is set, it is used when the script template runs.
            
        -   **Example**:
            
            -   Scenario 1: The output table of the script template must show the sales of the top N cities in each region. You can set N as an input parameter for the script template and control the value of N using a string parameter.
                
            -   Scenario 2: The output table of the script template must show the total sales of a province. You can set a province string parameter as an input parameter for the script template. By specifying different provinces, you can retrieve the sales data for the corresponding province.
                
        
    3.  Configure output parameters.
        
        Define the output parameters of the procedure body, which represent the final output table of the script template. To make it easier for others to use the script template, you can specify the schema of the output table in the output parameter settings.
        
        On the right side of the component editing page, click **Parameter Configuration**. Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7510611471/p847106.png) icon to the right of **Output Parameters** to define the output parameters for the procedure body.
        
        **Note**
        
        You can also click Parse I/O Parameters at the top of the script template editor page. This feature automatically detects input and output parameters from the code. You can then configure the parameters as described in the following table.
        
        -   **Key parameter**: Parameter Definition.
            
        -   **Configuration description**: This parameter defines the schema of the output table in a text format, including field names, data types, and descriptions. This definition informs users that when they use the script template, the output table they configure must have the same number of fields and compatible data types as defined here. This helps prevent runtime errors caused by mismatched field counts or incompatible data types between the configured output table and the defined output table.
            
            **Note**
            
            This definition is for reference only. It provides a hint for configuring output parameters and does not trigger an immediate check.
            
        -   **Example**:
            
            We recommend that you define parameters in the following format:
            
            ```
            Field1_Name Field1_Type Field1_Comment 
            Field2_Name Field2_Type Field2_Comment 
            ...
            Fieldn_Name Fieldn_Type Fieldn_Comment
            ```
            
            You can also add fields for aggregated results to the output parameter definition based on your processing needs, such as rank and total revenue. For example:
            
            ```
            area_id STRING 'area ID' 
            city_id STRING 'city ID' 
            order_amt DOUBLE 'Order amount'
            rank BIGINT 'rank'
            ```
            
3.  Click **Save** and **Commit**.
    
    After the script template is created, you can reference it in an SQL script template node to quickly generate the target table for your business. For more information, see [Step 2: Reference a script template](#37efb01615t12).
    
4.  (Optional) Click **Make SQL Script Template Public** to publish a general-purpose script template to the entire tenant. It will be displayed in the **Public SQL Script Templates** area. After the script template is published, all users in the tenant can use it.
    

### **Step 2: Reference a component**

You can reference the component as follows.

## Reference in an SQL script template node in Data Studio

You can go to the **Data Studio** page and create an SQL script template node to reference a script template. You can then replace the input and output parameters in the template to reuse the code.

1.  In the navigation pane on the left of the Data Studio page, click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2208852471/p854101.png) to go to Data Studio.
    
2.  In the **Workspace Directories**, plan where to create the SQL script template node based on your business needs. Right-click the folder or click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6057070471/p841016.png), select **Create Node** > **MaxCompute** > **SQL Script Template Node**, and enter a custom name for the node.
    
3.  On the node editor page, click **Settings for SQL Script Template** on the right, and then click **SQL Script Template**.
    
4.  After you select a script template, the code is automatically populated on the SQL script template editor page, and you can define the value for each parameter in **Settings for SQL Script Template**.
    

## Reference from workspace SQL script templates

You can go to the **SQL Script Templates** page, find the script template to reference, and create an SQL script template node by directly referencing it. You can then replace the input and output parameters in the template to reuse the code.

1.  In the navigation pane on the left of the Data Studio page, click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5314298371/p840001.png) to go to the script template management page.
    
2.  In **Workspace SQL Script Templates**, right-click the target component and select **Reference SQL Script Template**.
    
3.  Follow the on-screen instructions to select a location to create the SQL script template node and specify its name.
    
4.  After the node is created, the script template code automatically populates the SQL component editor page. You can define the values for each parameter in **Settings for SQL Script Template.**.
    

## Reference from public SQL script templates

You can go to the **SQL Script Templates** page, find a script template that is made public by another tenant, and create an SQL script template node by directly referencing it. You can then replace the input and output parameters in the template to reuse the code.

1.  In the navigation pane on the left of the Data Studio page, click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5314298371/p840001.png) to go to the script template management page.
    
2.  In the **Public SQL Script Templates** section, find the target script template and click **Reference**.
    
3.  Follow the on-screen instructions to select a location to create the SQL script template node and specify its name.
    
4.  After the node is created, the script template code automatically populates the SQL component editor page. You can define the values for each parameter in **Settings for SQL Script Template**.
    

## **Upgrade Components**

### **Upgrade operation: Script template developer**

A developer can edit the script template code and its parameter settings as required. After you save and commit the changes, the script template is upgraded to a new version. You can view the details of each version on the **Version** tab.

### **Upgrading the referenced version: Script template user**

After a script template is upgraded, if your SQL script template node references it, you can choose whether to use the latest version.

-   If you do not need to use the new version, you can continue to use the original version.
    
-   If you use the new version, confirm whether the parameter settings of the new version are still valid for your SQL script template node. Make adjustments based on the new version's description, then commit and publish the node. The commit and publish process is the same as that for a standard SQL node.
    

### **Upgrade scenario example**

A developer creates version V1 of an SQL script template, which is then used by another user. Later, the developer upgrades the script template to version V2. The user who uses the template notices that a new version, V2, is available. The user opens the script template, views the details of both versions, and compares them. After determining that the new version provides better business results, the user updates the node to use the latest version.

## **View reference records**

On the right side of the script template editor page, click Reference Records to see which nodes reference the current script template. This helps you estimate the impact of any changes to the template.

## **Other operations**

### **Clone component**

You can use the clone feature to quickly create a new script template from an existing one. The cloned content includes the script template code, parameter configurations, and the script parameters from the **Run Configuration**.

1.  In the **Workspace SQL Script Templates** pane on the left, right-click the name of the component to clone and select **Clone** from the pop-up menu.
    
2.  In the dialog box, modify the **Name** and **Path** of the component (or keep the default values), and click **OK** to start cloning.
    
3.  After the cloning is complete, you can view the newly generated script template in the **Workspace SQL Script Templates** section.
    

### **Version management**

You can use the version management feature to revert a script template to a specific historical version. This feature also lets you view and compare versions to help you analyze differences and make adjustments.

1.  In the **Workspace SQL Script Templates** pane on the left, double-click the name of a component to open its editing page, where you can view and manage its versions.
    
2.  On the right side of the editor page, click **Version**. On the **Version** page, you can view and manage the **Development History** and **Deployment History**.
    
    -   **View a version:**
        
        1.  On the **Development History** or **Deployment History** tab, find the script template version that you want to view.
            
        2.  Click **View** in the **Actions** column to go to the details page and view the script template code and scheduling configuration.
            
    -   **Compare** **versions**:
        
        On the **Development History** or **Deployment History** tab, you can compare different versions of a script template. The following example uses development records to demonstrate the comparison operation.
        
        -   **Compare versions in the development or production environment**: On the **Development History** tab, select two versions and click the **Select Versions to Compare** button at the top. You can then compare the script template code and scheduling configurations of the different versions.
            
        -   **Compare the development and production environments**:
            
            1.  On the **Development History** tab, locate a specific version of the script template.
                
            2.  Click the **Compare** button in the **Actions** column. On the details page, select a version from the **Deployment History** to compare it with.
                
    -   **Restore** a **version**:
        
        You can restore a script template to a specific historical version only from the **Development History**. On the **Development History** tab, find the target version and click the **Restore** button in the **Actions** column. This action reverts the script template to the selected version.
