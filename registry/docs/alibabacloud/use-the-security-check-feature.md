You can use the security check feature to detect vulnerabilities, baseline risks, and web shells on a target server, and to collect its asset fingerprint data. This topic describes how to run a security check on a server.

## Background information

After you run a one-click security check, Security Center concurrently runs vulnerability detection, baseline detection, web shell detection, and asset fingerprint collection. This operation increases the server's CPU and memory usage, which may affect the services deployed on it. A one-click check typically takes 1 to 5 minutes. We recommend that you perform this operation during off-peak hours to avoid affecting your business.

## Limits

### Limits on editions

-   [Purchase a subscription instance](/help/en/security-center/user-guide/purchase-security-center#2c9cad6e39bbz): This feature is available only for Alibaba Cloud accounts that have purchased the Pro, Enterprise, or Ultimate edition and have [attached the Pro, Enterprise, or Ultimate edition authorization](/help/en/security-center/user-guide/authorization-number-management#bb93a69f55hiw) to servers.
    
-   [Enable the pay-as-you-go feature](/help/en/security-center/user-guide/purchase-security-center#5d3a3aef78bqy): This feature is available only for servers that have [attached the Pro, Enterprise, or Ultimate edition authorization](/help/en/security-center/user-guide/authorization-number-management#53d46981942l6).
    

## Procedure

1.  Log on to [the Security Center console](https://yundun.console.alibabacloud.com/?p=sas). In the upper-left corner of the console, select the region where the asset that you want to protect is located: **China** or **Outside China**.
    
2.  In the navigation pane on the left, choose **Assets** > **Host**.
    
3.  On the **Host** page, click the **Server** tab. In the server list, select one or more servers on which you want to run a security check, and click **Security Check** below the list.
    
4.  In the **Security Check** dialog box, select the checks that you want to run, and click **OK**. Then, in the **Note** dialog box, click **OK**.
    
    **Note**
    
    A security check takes 1 to 5 minutes to complete. Wait until the check is complete. Do not run the check repeatedly.
    
    After the one-click security check is complete, the results are automatically updated on the asset's details page in the Security Center console.
