The DataWorks Copilot Settings center is the core module for configuring and optimizing the Intelligent Assistant. The center integrates four core features: MCP Servers, Rules, General Settings, and Models. By connecting to external tool services and allowing for flexible AI Rule customization, Copilot improves development efficiency, ensures code quality, and provides a highly customized intelligent development experience.

## **Access**

The Copilot Settings center allows you to configure Rules, MCP Servers, General Settings, and model API keys.

1.  Click the Copilot icon in the upper-right corner of the DataWorks interface to open the DataWorks Copilot panel.
    
2.  In the Copilot panel, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3146464671/p1020500.png) Settings Button to open the Settings center.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3142312771/p1054685.png)

## **Rule configuration**

Rules are the core mechanism for injecting persistent context, standards, and preferences into DataWorks Copilot, ensuring that generated code and responses precisely follow your specific requirements.

### **Rule types and permissions**

DataWorks provides two types of Rules: Enterprise-level and Personal.

**Type**

**Description**

**Permissions**

**Scope**

**Personal Rules**

Created and maintained by individual developers to encapsulate personal coding habits, frequently used code snippets, and project-specific notes.

Only the creator can view and apply the Rule.

Personal scope. Can be invoked in any Workspace the user can access.

**Enterprise-class Rules**

Defined by administrators to establish and enforce common development standards, such as Data Warehouse layer naming conventions, code style guides, or usage instructions for core tables.

Workspace administrators and users with higher-level roles can create, edit, and manage these Rules.

Can be applied globally across the Tenant or to specific Workspaces.

### **Create and manage rules**

In the Copilot Settings center, switch to the **Rules** tab. On the Rules management page, you can:

-   Switch between the **Personal Rules** and **Enterprise-class Rules** tabs to manage them separately.
    
-   View information about existing Rules, such as the name, Activation Mechanism, and Effective Scope.
    
-   View, edit, or delete existing Rules.
    
-   Click **New Rule** to create a new Rule.
    

When you create or edit a Rule, you must configure the following core properties:

**Parameter**

**Description**

**Rule Name**

Set an easily identifiable name and a detailed description for the Rule.

**Rule Content**

Defines the core content of the Rule. This is the specific context or prompt you provide to the AI, including standards and specifications that Copilot must follow when generating code. You can provide the content by entering it manually or by uploading a document.

-   **Manually enter**: Directly enter or paste the Rule content.
    
-   **Document Upload**: Upload a local file. Copilot parses the file's content to use as the Rule content. Supported file formats include `.doc`, `.docx`, `.pdf`, `.txt`, `.md`, `.xls`, `.xlsx`, `.ppt`, `.pptx`, `.rtf`, `.csv`, and `.json`. Each file cannot exceed 50 KB.
    

**Entry into force mechanism**

Defines how the Rule is automatically included in a conversation:

-   **Always applied.**: This Rule is automatically loaded in every conversation.
    
-   **Manual application**: This Rule is not loaded by default. It is only applied when you manually add it to the context of a conversation.
    

**Scope of entry into force**

For an Enterprise-level Rule, you can set an effective scope to control where the Rule is visible and available.

-   **Specify the workspace**: Applies only to members of the specified Workspaces. You can only select from a list of Workspaces for which you have Administrator Permissions.
    
-   **All Work Space**: Applies at the Tenant level.
    

The following text is an example of Rule content:

-   Rule Name: Table and node naming conventions.
    
-   Rule Content:
    
    ```
    # Naming conventions for DataWorks Data Warehouse (ODS/DWD/DWS/ADS) tables and nodes
    As a senior data warehouse architect, you must strictly follow these naming conventions when creating any table or Node in DataWorks. These conventions are essential for ensuring that data assets are clear, maintainable, and consistent.
    
    ### 1. Table Naming Convention
    All table names must follow a unified, structured paradigm.
    
    #### 1.1 Core naming formula
    [layer_prefix]_[custom_description]_[update_strategy_suffix]
    
    #### 1.2 Layer Prefix - [Mandatory]
    -   Dimension Layer (DIM): Must start with dim_.
    -   Data Warehouse Detail (DWD): Must start with dwd_.
    -   Data Warehouse Summary (DWS): Must start with dws_.
    -   Application Data Store (ADS): Must start with ads_.
    
    #### 1.3 Update Strategy Suffix - [Mandatory]
    -   DIM: Use the _df suffix, representing Daily Full Snapshot.
    -   DWD: Use the _di suffix for daily incremental data or the _df suffix for Daily Full Snapshot.
    -   DWS / ADS: Use suffixes like _1d, _7d, or _nd to represent the data aggregation period (for example, last 1 day, last 7 days, last N days).
    
    #### 1.4 Delimiter
    All words in a table name must be in lowercase and separated by a single underscore _.
    
    #### 1.5 Naming examples
    -   DIM example: dim_user_info_df (User information dimension table, daily full snapshot)
    -   DWD example (incremental):  dwd_trade_order_detail_di (Trade order details, daily incremental)
    -   DWD example (full):  dwd_product_base_info_df (Basic product information, daily full snapshot)
    -   DWS example:  dws_user_active_uv_7d (7-day active UV summary for users)
    -   ADS example:  ads_screen_kpi_overview_1d (Dashboard core KPI overview, daily)
    
    ### 2. Node Naming Convention
    
    Node names should clearly reflect the core table they output and their processing logic.
    
    -   Naming principle: The Node name should closely match the name of the main table it produces, following the format [layer]_[business_logic].
    -   Example:
        -   An ODPS SQL Node that produces the dwd_trade_order_detail_di table should be named dwd_trade_order_detail_di.
        -   If a Node handles complex logic, it could be named dws_build_user_active_uv_7d.
    
    ### 3. Self-check Checklist
    
    After naming, use this checklist for verification:
    1.  Does the table name start with the correct layer prefix (dim_, dwd_, dws_, ads_)?
    2.  Does the table name end with the correct update strategy suffix (_df, _di, _1d, etc.)?
    3.  Are all words separated by an underscore _?
    4.  Does the Node name clearly reflect its function and output?
    ```
    

### **Use rules in conversations**

Configured Rules apply to your daily interactions with Copilot.

-   For Rules set to **Always applied.**, no additional action is required. Copilot automatically uses these Rules as background knowledge and constraints when generating code or providing responses.
    
-   For Rules set to **Manual application**, you can activate them during a conversation as follows:
    
    1.  Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3142312771/p1054691.png) button below the input box.
        
    2.  In the context menu that appears, select **Rule**, and then select the specific Rule you want to apply to the current conversation.
        

## MCP server configuration

An MCP (Model Context Protocol) Server is a collection of backend tool services that the Copilot Agent relies on to perform tasks. It provides tools, data sources, and APIs for operations such as querying, analysis, and code generation. In the Settings center, you can view the built-in Alibaba Cloud-DataWorks-MCP-Server and its associated tools.

### **Access the MCP server page**

In the Copilot Settings center, click **MCP Servers** to open the **MCP Servers** tab.

### **Manage MCP servers**

On the MCP Servers page, you can view the built-in DataWorks MCP Server and its list of tools.

### Use MCP servers

You can use the tools associated with an MCP Server in the Copilot Agent. For more information, see [DataWorks Agent](/help/en/dataworks/user-guide/dataworks-copilot-agent).

## **General settings**

In the Copilot Settings center, click **Settings** to open the **Settings** tab. On this page, you can configure the following:

### **Global settings**

**Copilot master switch**: Controls whether Copilot is enabled for the current Tenant. If you turn off this switch, all users in the Tenant lose access to Copilot, Agent, and related features.

**Important**

This setting requires Tenant Administrator Permissions. Changes will affect all users within the Tenant.

### **Personal settings**

**The default storage path for generating code files**: Specifies where Agent saves generated code files. The default option is **Project Directory**. You can change it to **Personal Directory** as needed.

## **Model configuration**

In the Copilot Settings center, click **Model** to open the **Model** tab. On this page, you can configure the API key for the Bailian model. Once configured, Copilot and Agent use the enabled API key by default when calling a Large Language Model (LLM).

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3142312771/p1054610.png)

## Related documentation

-   [DataWorks Copilot code assistant](/help/en/dataworks/user-guide/dataworks-copilot)
    
-   [DataWorks Agent](/help/en/dataworks/user-guide/dataworks-copilot-agent)
