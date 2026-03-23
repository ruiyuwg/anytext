## **Overview**

Before you configure an effective scope for a built-in authoritative zone, make sure that intranet Domain Name System (DNS) records are added for the built-in authoritative zone. For more information, see [Add DNS records](/help/en/dns/form-filling-mode).

After you configure an effective scope for a built-in authoritative zone, the DNS requests that are initiated by the Elastic Compute Service (ECS) instances in the specified virtual private clouds (VPCs) are resolved based on the intranet DNS records rather than the Internet DNS records of the built-in authoritative zone.

**Important**

The DNS requests that are initiated by clients out of the effective scope are resolved based on the Internet DNS records of the built-in authoritative zone.

For example, you have added a built-in authoritative zone `aliyun.com` and added intranet DNS records for the zone. After you configure an effective scope for the zone `aliyun.com`, the intranet DNS records that you added for the zone are used to respond to the DNS requests that are initiated by the ECS instances in the specified VPCs to access the domain names within the zone `aliyun.com`. The Internet DNS records of the zone `aliyun.com` do not take effect in this case.

## **Procedure**

You can perform the following steps to configure an effective scope for a built-in authoritative zone:

1.  Log on to the [Alibaba Cloud DNS console](https://dc.console.alibabacloud.com/dns/).
    
2.  In the left-side navigation pane, click **Private DNS (PrivateZone)**. On the page that appears, click **Configuration Mode** in the upper-right corner, click the **Built-in Authoritative Module** tab, and then click the **User Defined Zones** tab.
    
3.  Find the required zone and click **Effective Scope Settings** in the **Actions** column.
    
    **Note**
    
    If a built-in authoritative zone does not have DNS records, you must add DNS records before you can set an effective scope for the built-in authoritative zone.
    
4.  On the **Zone Settings** tab, click the drop-down arrow next to **Effective Scope of Zone** and select one or more VPCs where the built-in authoritative zone takes effect in the **Alibaba Cloud VPC** section. ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3473329961/p720784.png)
    
5.  Click **OK** to complete the setting.
    
    **Note**
    
    If you have configured an effective scope for a built-in authoritative zone, you can follow steps 2 to 4 to adjust the settings of the effective scope as needed.
