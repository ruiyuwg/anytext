This topic describes how to set approval processes for data tracking tickets in the Data Management (DMS) console.

## Terms

### Checkpoint

When you submit a data tracking ticket, DMS checks whether the ticket conforms to rules that are specified under checkpoints.

-   **Basic Configuration Item**: Configure the **default approval template for data tracking tickets**. If no approval process is configured in **Approval Rule Validation**, DMS uses the default approval template. You can change the approval process in the default approval template. For more information, see [Modify the default approval template](#section-u96-186-rk8).
    
-   **Approval Rule Validation**: When you submit a data tracking ticket, DMS checks whether the ticket conforms to the rules that are specified under the **Approval Rule Validation** checkpoint. You can use the default rules provided in security rule templates or customize rules based on your business requirements. For more information, see [Create a security rule](#section-n6c-0az-8jr).
    

### Factors and actions

-   **Factor**: A factor is a predefined variable provided by DMS. You can use factors to obtain the context to be validated by security rules, such as the categories of SQL statements and the number of data rows to be affected. A factor name consists of the prefix `@fac.` and the display name of the factor. Each module provides different factors for different checkpoints. The following table describes the factors supported in **Data Tracking**.
    
    **Factor**
    
    **Description**
    
    @fac.log\_size
    
    The size of the logs to be queried in the data tracking task. Unit: MB.
    
    **Warning**
    
    If the size of the logs to be queried is too large, the tracking process consumes a large number of bandwidth resources of database servers. This affects online business.
    
-   **Action**: An action is the operation that DMS performs after the conditions specified in the `if` statement are met. For example, DMS forbids the submission of a ticket, selects an approval process, approves a ticket, or rejects a ticket. Actions demonstrate the purposes of security rules. An action name consists of the prefix `@act.` and the display name of the action. Each module provides different actions for different checkpoints. The following table describes the actions supported in **Data Tracking**.
    
    **Action**
    
    **Description**
    
    @act.forbid\_submit\_order
    
    Forbids a ticket submission.
    
    The statement is in the following format: `@act.forbid_submit_order 'Reasons for forbidding the ticket submission'`.
    
    @act.do\_not\_approve
    
    Specifies the ID of the approval template. For more information, see [Configure approval processes](/help/en/dms/configure-approval-processes#multiTask1524).
    
    @act.choose\_approve\_template
    
    @act.choose\_approve\_template\_with\_reason
    

### Templates of security rules

DMS provides a large number of predefined security rule templates. You can use the templates or modify them based on your business requirements. The following table describes the rule templates supported in **Data Tracking**.

**Checkpoint**

**Template**

Approval Rule Validation

Data tracking approval process

## Modify the default approval template

1.  Log on to the [DMS console V5.0](https://dms.alibabacloud.com/new).
2.  Move the pointer over the ![2023-01-28_15-57-17.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6688322961/p674752.png) icon in the upper-left corner and choose **All functions** > **Security and Specifications** > **Security Rules**.
    
    **Note**
    
    If you use the DMS console in normal mode, choose **Security and Specifications** > **Security Rules** in the top navigation bar.
    
3.  On the **Security Rules** tab, find the target rule set and click **Edit** in the **Actions** column.
    
4.  In the left-side navigation pane of the **Details** page, choose **Database Development** > **Data Tracking**.
    
5.  On the **Data Tracking** tab, click **Basic Configuration Item**.
    
6.  Find **Data Tracking Default Approval Template** and click **Edit** in the **Actions** column. ![](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6168030761/p382850.png) 
    
7.  In the **Change Configuration Item** dialog box that appears, click **Switch Approval Template**.
    
8.  Find the **target template** and click **Select** in the **Actions** column.
    
    **Note**
    
    You can also click **Reset to Free of Approval** to skip the approval for tickets.
    
9.  Click **Submit**.
    

## Create a security rule

1.  Log on to the [DMS console V5.0](https://dms.alibabacloud.com/new).
2.  Move the pointer over the ![2023-01-28_15-57-17.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6688322961/p674752.png) icon in the upper-left corner and choose **All functions** > **Security and Specifications** > **Security Rules**.
    
    **Note**
    
    If you use the DMS console in normal mode, choose **Security and Specifications** > **Security Rules** in the top navigation bar.
    
3.  On the **Security Rules** tab, find the target rule set and click **Edit** in the **Actions** column.
    
4.  In the left-side navigation pane of the **Details** page, choose **Database Development** > **Data Tracking**.
    
5.  On the **Data Tracking** tab, click **Create Rule**. ![](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6168030761/p382852.png) 
    
6.  In the **Create Rule - Data Tracking** dialog box that appears, set the following parameters:
    
    **Parameter**
    
    **Description**
    
    **Checkpoints**
    
    Required. The checkpoint under which you want to create the security rule. The **Approval Rule Validation** checkpoint is provided in Data Tracking.
    
    **Template Database**
    
    Optional. The template based on which you want to create the security rule. DMS provides various predefined templates of security rules. After you select a checkpoint from the **Checkpoints** drop-down list, you can click **Load from Template Database** to select a template. For more information about available templates, see [Templates of security rules](#table-y07-1w8-k9v).
    
    **Rule Name**
    
    Required. The name of the custom security rule.
    
    **Note**
    
    If you load a security rule from a **template**, the rule name is automatically entered.
    
    **Rule DSL**
    
    Required. The DSL statement that you want to use to configure the security rule. For more information, see [DSL syntax for security rules](/help/en/dms/dsl-syntax-for-security-rules#multiTask6033).
    
    **Note**
    
    If you load a security rule from a **template**, the DSL statement is automatically entered.
    
7.  Click **Submit**.
    
8.  By default, the security rule that you create is in the **Disabled** state. Click **Enable** in the **Actions** column.
    
9.  In the dialog box that appears, click **OK**.
