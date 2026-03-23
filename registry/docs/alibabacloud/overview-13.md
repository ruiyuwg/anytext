Data Security Guard is a DataWorks service that provides features such as identifying and masking sensitive data, adding watermarks to data, managing data permissions, identifying data risks, and tracing data leak sources. The features help you manage sensitive data and ensure data security. This topic describes the usage procedure and limits of Data Security Guard.

## **Procedure**

In Data Security Guard, you can configure sensitive data identification rules, identify sensitive data based on rules, view identification results, and process sensitive data. You can identify and manage sensitive data before, during, and after the event that generates sensitive data. The following figure shows the usage procedure and related features of Data Security Guard.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0228201671/CAEQMRiBgIDswNDGnxkiIDc2MWEyYzI4ZmI3YzRlODZiZjMxYWI0NGU0ZWRjYTI04772498_20241120165543.594.svg)

1.  Step 1: Identify sensitive data before the event that generates sensitive data.
    
    Before sensitive data is generated, you can use Data Security Guard to specify the categories and sensitivity levels of asset data and configure multiple sensitive data identification rules to identify sensitive data and related data risks. The following table provides the details.
    
    **Operation**
    
    **Description**
    
    **References**
    
    Specify the category and sensitivity level of data
    
    You can specify a category and a sensitivity level for your data based on the data value, content sensitivity, impacts, and distribution scope. This way, you can manage the data based on the data category and data sensitivity level. The data management principles and data development requirements vary based on the data sensitivity level.
    
    DataWorks provides built-in data category and data sensitivity level templates. You can configure custom data categories and data sensitivity levels based on your business requirements.
    
    [Specify the category and sensitivity level of sensitive data](/help/en/dataworks/user-guide/mange-data-sensitivity-levels)
    
    Configure sensitive data identification rules
    
    You can define a sensitive field type and then configure a sensitive data identification rule for the sensitive field type based on the source and purpose of data. This helps you identify sensitive data in the current workspace. Content that meets the conditions in the sensitive data identification rule is considered sensitive data.
    
    The following identification methods are supported:
    
    -   Identification based on data content: Sensitive data is identified based on built-in rules, custom models, sample libraries, and regular expressions.
        
    -   Identification based on metadata: Sensitive data is identified based on field names and comments. You can use wildcard characters to configure prefixes, suffixes, and inclusion relationships.
        
    -   Identification based on combined conditions: You can use the OR, AND, and other relationships to configure a sensitive data identification rule that contains multiple conditions.
        
    
    -   [Configure a sensitive data identification rule and run a sensitive data identification task](/help/en/dataworks/user-guide/identify-sensitive-data)
        
    -   [Generate a custom data identification model](/help/en/dataworks/user-guide/generate-a-custom-data-identification-model)
        
    -   [Identify sensitive data by using sample libraries](/help/en/dataworks/user-guide/identify-sensitive-data-by-using-sample-libraries)
        
    
    Configure other settings
    
    -   System configurations: You can configure settings such as the access control mode of Data Security Guard, the traceable period for data risks based on data watermarks, the data scope of risk identification management, and the email and webhook URL that are used to receive an alert notification that contains data risk identification results.
        
    -   User group configurations: You can add multiple accounts that have the same data access permissions to a user group at the same time. When you configure a data masking rule, you can add the user group to a whitelist to allow the accounts in the user group to view the original data that is not masked.
        
    
    -   [Configure system settings](/help/en/dataworks/user-guide/configure-system-settings)
        
    -   [Configure a user group](/help/en/dataworks/user-guide/create-and-manage-user-groups)
        
    
2.  Step 2: Manage sensitive data when the event that generates sensitive data is happening.
    
    After you configure and enable a sensitive data identification rule, DataWorks automatically identifies sensitive data that meets the conditions in the rule. You can view the identification results in Data Security Guard.
    
    **Operation**
    
    **Description**
    
    **References**
    
    Configure access control policies
    
    Configure pass-through or blocking policies based on IP addresses or database users.
    
    \-
    
    Create a data masking rule
    
    You can configure data masking rules for identified sensitive data. Sensitive data is displayed based on the configured data masking rules. Data masking rules vary based on the data sensitivity level.
    
    Data masking types:
    
    -   Dynamic data masking: DataWorks masks sensitive data in query results.
        
    -   Static data masking: DataWorks masks sensitive data before sensitive data is stored in a database.
        
    
    Data masking methods include original format-based encryption, masking out, hash-based encryption, character replacement, range change, rounding, and leave empty.
    
    In scenarios in which the original data must be returned, you can configure a whitelist to allow specific accounts to view plaintext information.
    
    You can select a data masking type and a data masking method based on your business requirements.
    
    [Create a data masking rule](/help/en/dataworks/user-guide/create-a-data-masking-rule)
    
    Manage risk identification rules
    
    You can use the built-in risk identification rules in Data Security Guard after you enable the rules. You can also configure a risk identification rule based on your business requirements and compare the number of occurrences of an event in a risk identification rule with the threshold that is specified for event occurrences. For example, if you specify a data amount or frequency comparison in a risk identification rule, the system automatically detects high-risk operations and sends alert notifications when the conditions in the rule are met.
    
    -   [Risk identification rule management (new version)](/help/en/dataworks/user-guide/risk-identification-rule-management)
        
    -   [Risk identification rule management (old version)](/help/en/dataworks/user-guide/risk-identification-rule-management-1)
        
    
    Process risk identification results
    
    You can view the details of identified risky operations, and mark the operations as risky, not risky, or risk handled.
    
    -   [View data risks (new version)](/help/en/dataworks/user-guide/view-data-risks-10)
        
    -   [View data risks (old version)](/help/en/dataworks/user-guide/view-data-risks)
        
    
3.  Step 3: Audit risky operations and trace data leak sources.
    
    You can process and manage sensitive data based on risk identification results to ensure data security.
    
    **Operation**
    
    **Description**
    
    **References**
    
    Audit risky operations
    
    Data Security Guard records all behaviors that involve sensitive data, such as IP addresses, port information, and database users, and provides sensitive data lineages. You can audit risky operations based on the preceding information.
    
    You can manually correct sensitive data identification results that are obtained based on sensitive data identification rules.
    
    -   [Overview of sensitive data](/help/en/dataworks/user-guide/identify-sensitive-data-10)
        
    -   [View information about access and export activities of sensitive data](/help/en/dataworks/user-guide/view-data-activities)
        
    -   [View the lineage of sensitive data (in public preview)](/help/en/dataworks/user-guide/data-lineage)
        
    -   [Manually correct sensitive data identification results](/help/en/dataworks/user-guide/manually-correct-sensitive-data-identification-results)
        
    
    Trace data leak sources based on watermarks
    
    If a data leak occurs, the watermark information of data in the leaked data file can be extracted to trace users who caused the data leak.
    
    [Trace data leak sources](/help/en/dataworks/user-guide/trace-leak-sources)
    

## Limits

### **Edition**

Only DataWorks Standard Edition or a more advanced edition supports Data Security Guard. For information about how to activate DataWorks, see [Activate DataWorks](/help/en/dataworks/activate-dataworks). The Data Security Guard features that you can use vary based on the DataWorks edition. For more information, see [Features of DataWorks editions](/help/en/dataworks/user-guide/differences-among-dataworks-editions).

### **Permissions**

You can use Alibaba Cloud accounts or RAM users that are granted the following permissions to enable Data Security Guard:

-   [Permissions of the tenant administrator](/help/en/dataworks/user-guide/manage-permissions-on-global-level-services).
    
-   [Permissions of the tenant-level security administrator](/help/en/dataworks/user-guide/manage-permissions-on-global-level-services).
    
-   Permissions defined in the **AdministratorAccess and AliyunDataWorksFullAccess** policies. For more information, see [Grant permissions to a RAM role](/help/en/ram/user-guide/grant-permissions-to-a-ram-role).
    

**Note**

-   Users who are assigned the tenant administrator role or the tenant-level security administrator role can use all features of Data Security Guard.
    
-   Users who are assigned the workspace-level security administrator role can use related features in the workspaces on which the users have access permissions. For example, when the users use the data lineage feature to modify a sensitive field type, they can select only the workspaces on which they have access permissions. If the users want to use the Data Security Guard features in a workspace on which they do not have access permissions, they must apply for the required permissions. For more information, see [Manage permissions on workspace-level services](/help/en/dataworks/user-guide/manage-permissions-on-workspace-level-services).
    

### **Features**

In Data Security Guard, you can use the sensitive data identification and dynamic data masking features to identify and dynamically mask sensitive data in only E-MapReduce (EMR), MaxCompute, and Hologres compute engines.

Take note of the following limits on an EMR compute engine:

-   The sensitive data identification and data masking features are supported only for specific types of EMR clusters and EMR tables. The following table describes the details.
    
    **Note**
    
    The ![支持](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1747151761/p526058.png) icon indicates that the data preview feature is supported, and the ![不支持](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1747151761/p526061.png) icon indicates that the data preview feature is not supported.
    
    **EMR cluster type**
    
    **Metadata storage type**
    
    **Data storage type: OSS**
    
    **Data storage type: OSS-HDFS**
    
    **Data storage type: HDFS**
    
    DataLake clusters
    
    Data Lake Formation (DLF)
    
    ![不支持](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1747151761/p526061.png)
    
    ![不支持](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1747151761/p526061.png)
    
    ![不支持](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1747151761/p526061.png)
    
    RDS instance
    
    ![支持](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1747151761/p526058.png)
    
    ![支持](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1747151761/p526058.png)
    
    ![支持](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1747151761/p526058.png)
    
    MySQL
    
    ![支持](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1747151761/p526058.png)
    
    ![支持](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1747151761/p526058.png)
    
    ![支持](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1747151761/p526058.png)
    
    Custom clusters
    
    DLF
    
    ![不支持](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1747151761/p526061.png)
    
    ![不支持](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1747151761/p526061.png)
    
    ![不支持](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1747151761/p526061.png)
    
    RDS instance
    
    ![支持](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1747151761/p526058.png)
    
    ![支持](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1747151761/p526058.png)
    
    ![支持](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1747151761/p526058.png)
    
    MySQL
    
    ![支持](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1747151761/p526058.png)
    
    ![支持](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1747151761/p526058.png)
    
    ![支持](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1747151761/p526058.png)
    
    Other clusters
    
    \--
    
    ![不支持](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1747151761/p526061.png)
    
    **Note**
    
    The features are available only in the following regions: China (Hangzhou), China (Shanghai), China East 2 Finance, China (Beijing), China (Shenzhen), China South 1 Finance, China (Chengdu), China North 2 Ali Gov 1, China (Hong Kong), US (Silicon Valley), Singapore, Malaysia (Kuala Lumpur), and Germany (Frankfurt).
    

-   If you want to use Data Security Guard in an EMR cluster, you must upgrade exclusive resource groups for scheduling. You can join the [DataWorks DingTalk group](https://wx.dingtalk.com/invite-page/weixin.html?spm=a2c4g.11186623.2.13.6fdf2cde85Daz9&bizSource=____source____&corpId=dingd0cf799086f27cb135c2f4657eb6378f&inviterUid=A26F27643C000F2D94460A2FDF52346D&encodeDeptId=6B32040BBEAFAF1DE93FD50C752B256A) to request technical support for the upgrade.
    
-   By default, Data Security Guard uses an Alibaba Cloud account to sample data. If Lightweight Directory Access Protocol (LDAP) authentication is enabled for your EMR cluster and Ranger or DLF-Auth is used to manage table permissions, you must configure mappings between the Alibaba Cloud account and the cluster account. This ensures that the Alibaba Cloud account has the required permissions to access tables in the EMR cluster. For more information, see [Configure mappings between DataWorks member accounts and EMR cluster accounts](/help/en/dataworks/configure-dataworks#step-6e0-pad-me3).
    

## Go to the Data Security Guard page

1.  Go to the DataStudio page.
    
    Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the top navigation bar, select the desired region. In the left-side navigation pane, choose **Data Development and O&M** > **Data Development**. On the page that appears, select the desired workspace from the drop-down list and click **Go to Data Development**.
    
2.  Click the ![图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1556177271/p139128.png) icon in the upper-left corner. Then, choose **All Products** > **Data Governance** > **Data Security Guard**. On the page that appears, click **Try Now** to go to the Data Security Guard page.
    
    **Note**
    
    -   If your Alibaba Cloud account is granted the required permissions, you can directly access the homepage of Data Security Guard.
        
    -   If your Alibaba Cloud account is not granted the required permissions, you are redirected to the authorization page of Data Security Guard. You can use the features of Data Security Guard only after your Alibaba Cloud account is granted the required permissions.
