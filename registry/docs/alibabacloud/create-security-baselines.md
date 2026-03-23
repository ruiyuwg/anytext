Secure Access Service Edge (SASE) allows you to customize security baselines. You can create compliance check standards for terminals to access office applications based on your business requirements.

## Background information

The SASE client collects specific terminal attributes and uses the baseline templates together with access control policies for private access. Only trusted terminals that meet the security baselines can connect to the intranet.

## Procedure

1.  Log on to the [SASE console](https://yundun.console.alibabacloud.com/?p=csas).
    
2.  In the left-side navigation pane, choose **Terminal Management** > **Security Baselines**.
    
3.  On the page that appears, click **Create Policy**. In the **Create Security Baseline Template** panel, configure the parameters.
    
    The SASE client can collect the trusted attributes of terminals in a corporate intranet in real time. The SASE client is supported on terminals that run operating systems such as Windows, macOS, Android, and iOS.
    
    **Parameter**
    
    **Description**
    
    **Basic Configurations**
    
    **Attribute Group Name**
    
    The name of the security baseline.
    
    The name must be 2 to 100 characters in length and can contain letters, digits, hyphens (-), and underscores (\_).
    
    **Baseline Configurations**
    
    **Time Range**
    
    The effective time and the expiration time of the security baseline. You can configure the **Policy Expiration Time** and **Policy Effective Time** parameters.
    
    If the expiration time conflicts with the effective time, the expiration time prevails.
    
    **Terminal Type**
    
    The types of the terminals that can access office applications specified in zero trust policies. Valid values:
    
    -   **Unlimited**
        
    -   **Allow Access from PCs**
        
    -   **Allow Access from Mobile Terminals**
        
    
    **Security Wi-Fi**
    
    The name of the Wi-Fi that terminals must use to access the intranet. If the terminals fail to access the intranet by using the Wi-Fi that you specify, the terminals cannot access the office applications specified in zero trust policies. You can add up to 10 Wi-Fi names. The value takes effect only on Windows and macOS terminals.
    
    Each name must be 2 to 50 characters in length. Separate multiple names with commas (,). You can add up to 10 names.
    
    **Security Process**
    
    The names and file paths of the security processes that are installed on the terminal. If your terminal does not have the security process installed in the path that you specify, the terminal cannot access the office applications specified in zero trust policies. You can add up to five security processes.
    
    Each name must be 2 to 50 characters in length. Separate multiple names with commas (,). You can add up to 10 names.
    
    **Firewall**
    
    Specifies whether to enable firewall detection. If you enable firewall detection, terminals for which the built-in firewall is disabled cannot access the office applications specified in zero trust policies.
    
4.  Click **OK**.
    
    The information about the created security baseline templates is displayed on the Security Baselines page. SASE manages access requests from the terminals that match the settings.
    
    You can perform the following operations based on your business requirements:
    
    -   Edit a template: Click **Details**. In the **Details** panel, view or modify the security baseline template.
        
    -   Delete a template: Click **Delete** to delete the security baseline template.
        
    

## What to do next

When you create a zero trust policy, you must bind an existing security baseline template to the policy. This way, SASE can allow trusted terminals that meet the security baseline to connect to the intranet. For more information, see [Configure a zero trust policy](/help/en/sase/user-guide/configure-a-zero-trust-policy#task-2037063).
