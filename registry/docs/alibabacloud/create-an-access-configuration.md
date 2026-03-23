An access configuration is a configuration template that is used by CloudSSO users to access the accounts in a resource directory. The template contains permission configurations. You can use this template to assign access permissions on the accounts in your resource directory to CloudSSO users. This topic describes how to create an access configuration.

## Procedure

1.  Log on to the [CloudSSO console](https://cloudsso.console.alibabacloud.com).
    
2.  In the left-side navigation pane, click **Access Configuration**.
    
3.  On the **Access Configuration** page, click **Create Access Configuration**.
    
4.  In the **Create Access Configuration** panel, configure the parameters and click **OK**.
    
    -   **Access Configuration Name**: required. The name of the access configuration, which must be unique within the directory.
        
    -   **Session Duration**: optional. The duration of a session in which a CloudSSO user accesses an account in your resource directory by using the access configuration. Unit: seconds. Valid values: 900 to 43200 (15 minutes to 12 hours). Default value: 3600 (1 hour).
        
    -   **Relay State**: optional. The initial web page displayed after a CloudSSO user uses the access configuration to access an account in your resource directory. The web page must be a page of the Alibaba Cloud Management Console. By default, this parameter is empty, which indicates that the initial web page is the homepage of the Alibaba Cloud Management Console.
        
    -   **Description**: optional. The description of the access configuration.
        
    
5.  Configure system policies.
    
    -   Use system policies
        
        1.  Select **Use System Policy**.
            
        2.  Select the required system policies.
            
        3.  Click **Bind and Continue**.
            
        4.  Click **Next**.
            
    -   Do not use system policies
        
        1.  Select **Not Use System Policy**.
            
        2.  Click **Continue**.
            
6.  Configure inline policies.
    
    1.  Click **Create Inline Policy**.
        
    2.  Enter a name for the inline policy and click **OK**.
        
    3.  Enter the content of the inline policy and click **Update Inline Policy**.
        
        The Resource Access Management (RAM) policy syntax is reused for inline policies. For more information, see [Policy elements](/help/en/ram/policy-elements).
        
7.  Click **Close**.
    

## **What to do next**

After you create the access configuration, you can use it to assign access permissions on the accounts in your resource directory to CloudSSO users. This way, the ClousSSO users can access the resources within the accounts. For more information, see [Assign access permissions on the accounts in a resource directory](/help/en/cloudsso/user-guide/assign-access-permissions-on-the-accounts-in-a-resource-directory).
