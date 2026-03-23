In the Security Center console, you can view the information, such as security status and security reports, of your websites in the Assets module. In addition, you can run security checks on your websites. This topic describes how to view the security status of assets that are associated with your websites and security reports of your websites.

## Procedure

1.  [Log on to the Security Center console](https://yundun.console.alibabacloud.com/?p=sas). In the top navigation bar, select **China** as the region of the asset that you want to manage.
    
2.  In the left-side navigation pane, choose **Assets** > **Website**.
    
3.  On the **Website** page, view the information about each website protected by Security Center.
    
    -   **View the security status of associated assets and the number of alerts**
        
        -   View root websites and associated assets
            
            You can click **Root website** to view information about all root websites, including **Website Name** and **Asset IP Address**.
            
        -   View subdomains and associated assets
            
            You can click **Subdomain** to view information about all subdomains, including **Website Name** and **Asset IP Address**.
            
        -   View the security status of associated assets and the number of alerts
            
            On the **Root website** or **Subdomain** tab, click a name in the **Website Name** column or **View** in the Actions column to view the details of a website.
            
            -   You can view **Domain**, **Root domain name**, **Risk Status**, and **Related Assets** of a website. The **Related Assets** section provides **Asset name/IP**, **Type**, **Server Vulnerabilities**, and **Alert**.
                
            -   You can click the name of an asset to go to the details page. On the **Basic Information** tab, you can view **Risk Status** of the asset. For more information, see [Manage servers](/help/en/security-center/user-guide/manage-servers#task-2228799).
                
            -   You can click a number in the **Server Vulnerabilities** or **Alert** column to view the details. For more information about how to fix vulnerabilities, see [Vulnerability fixing overview](/help/en/security-center/user-guide/overview-4#task-2330063). For more information about how to handle alerts, see [View and handle alert events](/help/en/security-center/user-guide/view-and-handle-alert-events#concept-rlc-rts-sfb).
                
    -   **View website security reports**
        
        1.  In the **Security Check** section, click **Security Check**.
            
        2.  On the **Website Security Report** page, view safety recommendations and statistics, which include the numbers of risky websites, alerts, and vulnerabilities.
            
            -   **Overview**
                
                In the **Overview** section, you can view the security score and the numbers of domains, risky websites, alerts, and vulnerabilities. Security Center calculates the security score based on the security status of your websites. The following table describes the penalty points for website security scoring.
                
                **Cause**
                
                **Penalty point**
                
                **Upper limit of penalty points**
                
                Security alerts are generated.
                
                5 points for each security alert
                
                A total of 30 points for all security alerts
                
                Security vulnerabilities exist.
                
                5 points for each security vulnerability
                
                A total of 40 points for all security vulnerabilities
                
                Domains are not configured with SSL certificates.
                
                5 points for each domain
                
                A total of 20 points for all domains
                
                The following list describes the security score to which each color corresponds:
                
                -   Green: 90 to 100 points. If the security score is displayed in green, your websites are in good security condition.
                    
                -   Yellow: 70 to 89 points. If the security score is displayed in yellow, your websites have security risks. We recommend that you handle the risks based on the suggestions displayed on the page.
                    
                -   Red: 10 to 69 points. If the security score is displayed in red, your websites have a large number of security risks and are vulnerable to attacks. We recommend that you reinforce the security of your websites at the earliest opportunity.
                    
                
            -   **Risky Websites (TOP5)**
                
                In the **Risky Websites (TOP5)** section, you can view a list of risky websites. The list provides website details, including Domain, Vulnerability Risk, Top 5 security alerts, and SSL Status.
                
                SSL certificates help encrypt website data by using HTTPS, which prevents data theft. If your website is not configured with SSL certificates, click **configure**.
                
                If you want to handle the risks of a specific domain, click **Process** in the Operation column. On the details page that appears, you can view the basic information about the domain, including the risk status and associated assets. In the **Related Assets** section, click a number in the **Server Vulnerabilities** or **Alert** column. On the **Vulnerabilities** or **Alerts** page of the asset, fix the vulnerabilities or handle the alerts. For more information about how to fix vulnerabilities, see [View and handle vulnerabilities](/help/en/security-center/user-guide/view-and-handle-vulnerabilities#task-2239619). For more information about how to handle alerts, see [View and handle alert events](/help/en/security-center/user-guide/view-and-handle-alert-events#concept-rlc-rts-sfb).
                
            -   **Alerts**
                
                In the **Alerts** section, you can view the alerts generated on your website servers. You can view the alert names, risk levels, affected assets, and the most recent time when alerts were generated. If you want to handle a specific alert, click **Process** in the Operation column. On the **Alerts** page, handle the alert based on your business requirements. For more information, see [View and handle alert events](/help/en/security-center/user-guide/view-and-handle-alert-events#concept-rlc-rts-sfb).
                
            -   **Vulnerability Risk**
                
                In the **Application vulnerability risks (top 5)** and **WebCMS Vul (TOP5)** sections, you can view the lists of vulnerabilities detected on your website servers. The lists provide vulnerability announcements, risk levels, and affected assets. If you want to handle a specific vulnerability, click **Repair** in the Actions column. On the **Vulnerabilities** page, handle the vulnerability based on your business requirements. For more information, see [Vulnerability fixing overview](/help/en/security-center/user-guide/overview-4#task-2330063).
                
            -   **Security recommendations**
                
                In the **Security recommendations** section, you can view the security suggestions provided by Security Center based on the check results. When you receive a suggestion, such as preventing the website from being maliciously injected as external links, and being tampered with as malicious information related to terrorism and politics, click **Processing**. On the **Tamper Protection** page, you can enable web tamper proofing for your servers.
