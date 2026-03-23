Custom policies in Resource Access Management (RAM) allow you to define granular permissions that are tailored to your specific security requirements. You can create custom policies using several methods depending on your needs and familiarity with policy syntax.

## Policy creation methods

You can create a custom policy in the RAM console using one of the following methods:

-   [Visual editor](#section-v5a-gji-s5k)
    
    The visual editor provides a guided, form-based interface for building a policy. You select elements such as the effect, service, actions, and resources from dropdown lists. This is the easiest method and is recommended for most users as it helps prevent syntax errors.
    
-   [JSON editor](#section-kwn-gu8-48m)
    
    The JSON editor allows you to write the policy document directly in JSON format. This method offers the most flexibility and is suitable for users who are familiar with RAM policy syntax or need to copy and paste an existing policy.
    
-   [Import a template](#section-l3j-qij-gtf)
    
    You can create a policy by importing and customizing a predefined template, system policy, or your custom policy. RAM provides scenario-specific policy templates for different groups of users (such as administrator, financial, or network roles). This method provides a solid starting point for creating complex policies.
    

## Use the visual editor

1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/) as a RAM administrator.
    
2.  In the left-side navigation pane, choose **Permissions** > **Policies**.
    
3.  On the **Policies** page, click **Create Policy**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0059564371/p886177.png)
    
4.  On the **Create Policy** page, select the **Visual Editor** tab.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4239883771/p886182.png)
    
5.  Build the policy by configuring each statement. A statement defines a single permission.
    
    For more information about the policy components, see [Policy elements](/help/en/ram/policy-elements).
    
    1.  For **Effect**, select **Allow** or **Deny**.
        
    2.  For **Service**, select the target Alibaba Cloud service.
        
    3.  For **Action**, select the specific actions you want to allow or deny. You can select **All Actions** or choose individual actions.
        
    4.  For **Resource**, define the resources that the action applies to. You can select **All Resources** or specify individual resources by their Alibaba Cloud Resource Name (ARN).
        
        **Note**
        
        If a resource is marked as **Required** for a selected action, we strongly recommend specifying it to ensure the policy functions as expected.
        
    5.  (Optional) For **Condition**, click **Add Condition** to specify when the policy is in effect. You can add conditions based on the request time, IP address, and other factors.
        
    6.  (Optional) Click **Add Statement** to add and configure more permission statements within the same policy.
        
6.  (Optional) Click **Optimize** at the top of the editor. In the confirmation dialog box, click **Perform**. This feature cleans up your policy by merging statements, removing redundant elements, and narrowing resource scopes.
    
7.  Click **OK**.
    
8.  Enter a **Policy Name** and an optional **Description**, and click **OK**.
    

## Use the JSON editor

1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/) as a RAM administrator.
    
2.  In the left-side navigation pane, choose **Permissions** > **Policies**.
    
3.  On the **Policies** page, click **Create Policy**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0059564371/p886177.png)
    
4.  On the **Create Policy** page, select the **JSON Editor** tab.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4239883771/p886214.png)
    
5.  Enter your policy document in the editor.
    
    For more information about the required syntax and structure, see [Policy structure and syntax](/help/en/ram/policy-structure-and-syntax#concept-srq-fbk-xdb).
    
6.  (Optional) Click **Optimize** at the top of the editor. In the confirmation dialog box, click **Perform**. This feature cleans up your policy by merging statements, removing redundant elements, and narrowing resource scopes.
    
7.  Click **OK**.
    
8.  Enter a **Policy Name** and an optional **Description**, and click **OK**.
    

## Create a policy from a template

1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/) as a RAM administrator.
    
2.  In the left-side navigation pane, choose **Permissions** > **Policies**.
    
3.  On the **Policies** page, click **Create Policy**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0059564371/p886177.png)
    
4.  On the **Create Policy** page, click **Import Policy**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4239883771/p886245.png)
    
5.  In the **Import Policy** dialog box, select either **Policy Template**, **System Policy**, or **Custom Policy** from the dropdown list.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1910983771/p886247.png)
    
    1.  Select a template, system policy, or custom policy from the list.
        
    2.  If the template requires parameters, configure them as needed.
        
    3.  Choose whether to overwrite the current content in the policy editor or append the template's content.
        
    4.  Click **Import**.
        
6.  The imported policy content appears in the editor. You can now modify it as needed.
    
7.  (Optional) Click **Optimize** at the top of the editor. In the confirmation dialog box, click **Perform**. This feature cleans up your policy by merging statements, removing redundant elements, and narrowing resource scopes.
    
8.  Click **OK**.
    
9.  Enter a **Policy Name** and an optional **Description**, and click **OK**.
