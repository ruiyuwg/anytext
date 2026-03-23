To prevent business losses from data breaches caused by employees sending sensitive files, you can use the outbound file detection feature of Secure Access Service Edge (SASE). This feature provides real-time detection and control. You can configure classification and categorization detection rules to identify and manage data breach threats. This document describes how to configure these rules for outbound files.

## **Prerequisites**

-   You have purchased the Office Data Protection Edition of SASE for Internet access security. For more information, see [Billing overview](/help/en/sase/product-overview/billing-overview) and [Get started](/help/en/sase/getting-started/how-to-use-the-office-security-platform).
    
-   The version of the SASE app installed on your corporate endpoints is 4.3.1 or later.
    

## **Configuration methods**

When you configure classification and categorization rules for outbound files, you can choose one of the following three methods based on your requirements. These methods are designed to meet various management requirements, improve the accuracy and efficiency of rule configuration, and ensure the security and compliance of outbound files.

-   **Built-in rules**: SASE provides various built-in classification and categorization detection rules for common file types. You can select the appropriate rules when you create an outbound policy to manage and protect sensitive data more efficiently.
    
-   **Custom rules**: You can create custom detection rules based on multiple dimensions, such as file content, filename, file suffix, and data source.
    
-   **AI Recommendation library**: You can add detection rules from the AI Recommendation library directly to your data classifications. This greatly simplifies the configuration process.
    
    **Warning**
    
    To use detection rules from the AI Recommendation library, you must first complete asset mapping. The large model then learns from your files to intelligently generate the corresponding detection rules. For more information, see [Create an asset map task](/help/en/sase/user-guide/create-asset-mapping-task).
    

## **Configure custom rules**

### **Step 1: Create data elements**

You can configure data elements based on multiple dimensions, such as sensitive word libraries (dictionaries and regular expressions) for file content, file suffixes, and data sources.

1.  Log on to the [Secure Access Service Edge console](https://yundun.console.alibabacloud.com/?p=csas).
    
2.  In the navigation pane on the left, choose **Data Protection** > **Data Classification**.
    
3.  On the **Data Classification** page, click the **Data Elements** tab. Configure data elements as described in the following table.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4659792471/p915501.png)
    
    **Tab**
    
    **Description**
    
    **Operations**
    
    **Dictionaries and Regular Expressions**
    
    Configure a sensitive word library. You can use a dictionary or a regular expression to intelligently detect file content.
    
    **To add a library:**
    
    1.  Click **Create Sensitive Word Library**.
        
    2.  In the **Create Sensitive Word Library** panel, configure the following parameters and click **OK**.
        
        1.  **Name**: Enter a name for the sensitive word library.
            
        2.  **Type**: Configure a dictionary or regular expression to intelligently validate file content.
            
            -   **Dictionary**: Customize the dictionary content. You can add multiple entries at once. Separate them with commas (,) and press Enter.
                
            -   **Regular Expression**: Enter a custom regular expression. For example, the expression \`(\[A-Za-z0-9\]+)\` matches one or more uppercase or lowercase letters or numbers. After you configure the regular expression, you can click **Test Regular Expression** and enter a test field to validate the expression.
                
    
    **Other operations:**
    
    -   Filter data by criteria such as type and data source.
        
    -   In the **Actions** column, click **Delete** to delete a library that is not associated with any rules.
        
        **Important**
        
        If the library is associated with a detection rule, you must first remove the association from the rule before you can delete the library.
        
    
    **Data Types**
    
    SASE provides several built-in intelligent algorithm classifications. When you configure a detection rule, you can select the corresponding algorithm classification. SASE then uses the selected algorithm classification and file type to efficiently and accurately detect file content.
    
    In the **Associated Rules** column, you can view the detection rules that are configured with an algorithm classification.
    
    **Data Levels**
    
    SASE provides several built-in intelligent algorithm categorizations. When you configure a detection rule, you can select the corresponding algorithm categorization. SASE then uses the selected algorithm categorization, general definitions of data sensitivity, and the amount of sensitive data to efficiently and accurately detect file content.
    
    In the **Associated Rules** column, you can view the detection rules that are configured with an algorithm categorization.
    
    **File Name Extensions**
    
    SASE provides several built-in file suffixes. You can also define custom file suffixes to detect files based on their suffix.
    
    **To add a file suffix:**
    
    1.  Click **Add File Extension**.
        
    2.  In the **Add File Extension** panel, enter a file suffix and click **OK**.
        
    
    **Other operations:**
    
    -   Filter data by data source.
        
    -   In the **Actions** column, click **Delete** to delete a custom file suffix.
        
    
    **Data Source**
    
    You can add **Web Applications** and **Code Repository** as data sources. When a file downloaded from these sources is sent outbound, the system automatically triggers detection. This method effectively monitors the flow of sensitive data and ensures that files from specific sources comply with security policies when sent, which enhances data protection and compliance.
    
    **To add an application:**
    
    1.  Click **Create Application**.
        
    2.  In the **Add Data Source** panel, configure the following parameters:
        
        -   **Web Applications**
            
            -   **Application Name**: Enter a name for the application.
                
            -   **Application Address**: Enter the URL and file path. You can click **Add** to enter multiple application addresses. The following are configuration examples.
                
                -   URL: www.aliyun.com/api/file
                    
                -   Path: /api/file
                    
        -   **Code Repository**
            
            -   **Repository Name**: Enter a name for the repository.
                
            -   **Git Repository URL**: Enter the Git repository address.
                
    
4.  After you complete the configuration, click **OK**.
    

### **Step 2: Create a custom detection rule**

SASE provides default classification and categorization detection rules for common file types. You can use these rules directly when you configure outbound file policies. You can also create custom detection rules as required and validate them using files reported by the asset map feature. This process ensures the accuracy and applicability of your rule configurations.

#### **Create a detection rule**

1.  Log on to the [Secure Access Service Edge console](https://yundun.console.alibabacloud.com/?p=csas).
    
2.  In the navigation pane on the left, choose **Data Protection** > **Data Classification**.
    
3.  On the **Data Classification** page, click the **Identification Rules** tab.
    
4.  In the **Data Category** area on the left, click **Create**, and then click **Create Category**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4659792471/p916741.png)
    
5.  In the **Create Category** dialog box, enter a classification name and click **OK**.
    
6.  To the right of the data classification you created, click **Create Rule Group**. This creates a detection rule for the data classification.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3864409571/p917033.png)
    
7.  In the **Create Group** panel, configure the following information. Then, click **OK**.
    
    **Configuration Item**
    
    **Description**
    
    **Rule Name**
    
    The name of the detection rule. The name must be 2 to 32 characters in length and can contain Chinese characters, letters, digits, hyphens (-), and underscores (\_).
    
    **Data Category**
    
    Select the data classification for the group.
    
    **Sensitivity Level**
    
    Configure the sensitivity level of the file. Valid values:
    
    -   **L4: Confidential Data**
        
        This level includes customers' sensitive personal information within business operations. It also includes macro-level feature data, predictive data, and credit data generated from aggregation across one or more departments. Unauthorized disclosure of this information is strictly prohibited within the company and would directly cause severe negative impacts or systemic threats to the business, leading to major legal liabilities. This level also covers communication records of specific personnel involved in major management decisions, investments, and financing.
        
    -   **L3: Secret/Private Data**
        
        This level includes customer information and business data aggregated at the department level during business operations. Unauthorized disclosure could directly or indirectly cause adverse impacts or threats to the company, customers, or employees. It could also lead to financial, commercial, or reputational losses for the customer or the company, and potential legal liabilities.
        
    -   **L2: Internal Data**
        
        This level includes company data and customer information that can only be accessed by employees or third parties who have signed a non-disclosure agreement. It also includes information that the owner has agreed to disclose to a specific group. Unauthorized disclosure might cause minor or insignificant negative impacts on customers, some business operations, or employees.
        
    -   **L1: Public Data**
        
        This level includes data that is publicly accessible or has been set for public release by a customer. Public dissemination of this data does not pose security or legal issues.
        
    
    **Rule Configuration**
    
    Configure the sensitive data detection rule.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3864409571/p916835.png)
    
    For example, if you configure a rule "Filename contains salary", the system detects files whose filenames contain "salary" as sensitive.
    
    We recommend that you configure multiple rules so that the detection policy can accurately and comprehensively match file content based on your business needs. You can set the conditional relationship between multiple rules to AND or OR.
    

#### **Detection rule parameter descriptions**

##### **File Name**

**Option**

**Logical Connection**

**Content**

**Keyword**

Include All, Include Any, Not Include

Enter the text to detect.

**Dictionary**

Include All, Not Include

Select a dictionary from the sensitive word libraries on the **Data Elements** > **Dictionaries and Regular Expressions** tab and set the number of hits.

**Regular Expression**

Include All, Not Include

Select a regular expression from the sensitive word libraries on the **Data Elements** > **Dictionaries and Regular Expressions** tab and set the number of hits.

##### **File Content**

**Option**

**Logical Connection**

**Content**

**Keyword**

Include All, Include Any, Not Include

Enter the text to detect.

**Dictionary**

Include All, Not Include

Select a dictionary from the sensitive word libraries on the **Data Elements** > **Dictionaries and Regular Expressions** tab and set the number of hits.

**Regular Expression**

Include All, Not Include

Select a regular expression from the sensitive word libraries on the **Data Elements** > **Dictionaries and Regular Expressions** tab and set the number of hits.

**Algorithm Recommended Data Type**

Include All, Include Any, Not Include

Select a recommended algorithm classification from the built-in options on the **Data Elements** > **Data Types** tab.

**Algorithm Recommended Data Level**

Include Any, Not Include

Select a recommended algorithm categorization from the built-in options on the **Data Elements** > **Data Levels** tab.

##### **Data Source**

**Logical Connection**

**Content**

Include Any, Not Include

Select data source applications based on the application type. You can select multiple applications.

-   **Instant Messaging Application**: Includes Lark, DingTalk, WeCom, WeChat, QQ, and more.
    
-   **Web Applications**: Select an application configured on the **Data Elements** > **Data Source** tab.
    

##### **File Type**

**Option**

**Logical Connection**

**Content**

**File Format**

Include Any, Not Include

Select common file formats. You can select multiple formats.

**File Name Extensions**

Include Any, Not Include

Select a file suffix configured on the ****Data Elements**** > **File Name Extensions** tab.

##### **File Size**

**Logical Connection**

**Content**

Greater Than or Equal To, Less Than or Equal To, Within \[A,B\]

Enter a file size detection range.

##### **File Encryption**

**Option**

**Content**

Encryption

Select Yes or No.

#### **Other operations**

You can edit, enable, or disable custom detection rules or rules generated by the large model. You can also create sub-rules under existing detection rules for more fine-grained management and flexible configuration.

-   **Edit**: Click **Edit Group Information** to view and modify the configured detection rule.
    
-   **Enable/Disable**: Click the **Rule Status** switch to enable or disable the detection rule.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4659792471/p917054.png)
    

## **References**

-   For more information about intelligent rule generation, see [Intelligent rule generation](/help/en/sase/user-guide/create-asset-mapping-task#dbfd89f04c0cv).
    
-   For more information about how to use classification and categorization detection rules in a configuration file exfiltration detection policy, see [Configuration file exfiltration detection policy](/help/en/sase/user-guide/detect-sensitive-files-to-ensure-data-security#9482f7a0248m6).
    
-   For more information about asset mapping, see [Create an asset mapping task](/help/en/sase/user-guide/create-asset-mapping-task).
