This topic describes how to manage Private Zone.

## Add a Private Zone

You can add Private Zones to regular and acceleration regions. This topic describes how to add these zones.

## Acceleration region

1.  Log on to the [Alibaba Cloud DNS - Private Zone console](https://dnsnext.console.alibabacloud.com/privateDNS).
    
2.  On the **User Defined Zones** tab of **Private Zone**, click **Add Zone**.
    
3.  Enter the **Authoritative Zone** and click **OK**.
    
    **Note**
    
    If the **Zone Type** option is available, set it to **Acceleration**. If the **Zone Type** option is not available, an **Acceleration** zone is created by default.
    
    **Important**
    
    You can change the Effective Scope at any time. Configure the Effective Scope after you add DNS records for the zone. This is because:
    
    If you configure an Effective Scope without adding any DNS records, DNS queries for the domain name within the scope are not recursively forwarded to Public Zone, causing all queries for the domain name to fail.
    
    Conversely, if you do not configure an Effective Scope before you add DNS records, DNS queries for the domain name are recursively forwarded to Public Zone.
    
    **Important**
    
    -   Starting from April 30, 2025 (UTC+8), when new Private Zone users create a zone, it is set to an acceleration region by default.
        
    -   Starting from April 30, 2026 (UTC+8), all Regular Zones will be automatically switched to Acceleration Zones. After the migration, the number of DNS queries may increase, which can lead to higher costs. We recommend that you [Enable NSCD for your ECS instances](/help/en/dns/pvtz-how-can-the-speed-limit-of-ecs-dns-query-requests-be-mitigated) to reduce the increase in DNS queries that results from the absence of a local cache.
        
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3695046571/p1002409.png)
    

## **Regular region**

**Note**

Regular Zones are available only to users who activated **Private Zone** before April 30, 2025 (UTC+8).

Acceleration Zones are created by default for new users.

1.  Log on to the [Alibaba Cloud DNS - Private Zone console](https://dnsnext.console.alibabacloud.com/privateDNS).
    
2.  On the **User Defined Zones** tab of **Private Zone**, click **Add Zone**.
    
3.  Enter the Private Zone. Set **Zone Type** to **Regular**. In the **Effective Scope** section, select the VPCs where you want the zone to take effect, and click **OK**.
    
    **Important**
    
    You can change the Effective Scope at any time. Configure the Effective Scope after you add DNS records for the zone. This is because:
    
    If you configure an Effective Scope without adding any DNS records, DNS queries for the domain name within the scope are not recursively forwarded to Public Zone, causing all queries for the domain name to fail.
    
    Conversely, if you do not configure an Effective Scope before you add DNS records, DNS queries for the domain name are recursively forwarded to Public Zone.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0483329961/p720782.png)
    

## Delete a Private Zone

You can delete an idle Private Zone that is not associated with an effective scope. To delete it, you must first dissociate it from the scope.

1.  Log on to the [Alibaba Cloud DNS - Private Zone console](https://dnsnext.console.alibabacloud.com/privateDNS).
    
2.  On the **User Defined Zones** tab of **Private Zone**, find the zone that you want to delete. In the **Actions** column, click the icon on the far right to view more options. Click **Delete** and then click **OK**.
