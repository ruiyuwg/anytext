AnalyticDB for PostgreSQL provides the cross-zone disaster recovery feature. The feature allows you to deploy primary and secondary nodes across different zones in the same region. If the nodes in the primary zone cannot provide read and write capabilities as expected because a natural disaster or an instance failure occurs in the primary zone, the nodes in the secondary zone automatically take over as the primary nodes to ensure business continuity. The primary and secondary nodes have the same storage capacity. This topic describes how to enable the cross-zone disaster recovery feature for AnalyticDB for PostgreSQL.

## Architecture

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1625875671/CAEQUBiBgMDZ7bCs2BkiIDllNTkzNzRhZTJiYjQ5MzRiNjNmM2U1NDc3ZmFjNTEx4793193_20241127110608.637.svg)

## Supported versions

-   AnalyticDB for PostgreSQL High-availability Edition instances of V6.6.2.10 or later.
    
-   AnalyticDB for PostgreSQL High-availability Edition instances of V7.1.1.0 or later.
    

**Note**

For information about how to view the minor version of an AnalyticDB for PostgreSQL instance, see [View the minor version of an instance](/help/en/analyticdb/analyticdb-for-postgresql/user-guide/view-the-minor-engine-version#concept-2096703). If your instance does not meet the required versions, [update the minor version of the instance](/help/en/analyticdb/analyticdb-for-postgresql/developer-reference/api-gpdb-2016-05-03-upgradedbversion).

## **Usage notes**

-   An AnalyticDB for PostgreSQL instance provides only one endpoint that you can use to connect to the nodes in the primary zone. The nodes in the secondary zone are used as backups and do not provide external services.
    
-   After you enable the cross-zone disaster recovery feature, your AnalyticDB for PostgreSQL instance is deployed across two zones to implement cross-zone disaster recovery. During the enabling process, your instance may be temporarily unavailable for approximately 20 minutes. To prevent impacts on your business, enable the cross-zone disaster recovery feature during off-peak hours.
    

## **Supported primary zones**

You can enable the cross-zone disaster recovery feature only for AnalyticDB for PostgreSQL instances that reside in the zones described in the following table.

**Note**

-   When you create an AnalyticDB for PostgreSQL instance, the selected zone is the primary zone.
    
-   When you enable the cross-zone disaster recovery feature, you can select only the secondary zone.
    

**Region**

**Zone**

**Cross-zone disaster recovery supported**

China (Hangzhou)

Zone H

Yes

Zone I

Yes

Zone J

Yes

China (Shanghai)

Zone F

Yes

Zone G

Yes

Zone L

No

Zone M

Yes

Zone N

Yes

China (Beijing)

Zone G

Yes

Zone H

Yes

Zone I

Yes

China (Zhangjiakou)

Zone B

Yes

Zone C

Yes

China (Hohhot)

Zone A

Yes

Zone B

Yes

China (Ulanqab)

Zone B

Yes

Zone C

Yes

China (Shenzhen)

Zone A

Yes

Zone E

Yes

Zone F

Yes

China (Chengdu)

Zone A

No

China (Hong Kong)

Zone C

No

Japan (Tokyo)

Zone B

No

Singapore

Zone A

Yes

Zone B

Yes

Zone C

No

Malaysia (Kuala Lumpur)

Zone A

Yes

Zone B

Yes

Indonesia (Jakarta)

Zone A

No

Germany (Frankfurt)

Zone A

No

UK (London)

Zone A

No

US (Virginia)

Zone A

Yes

Zone B

Yes

US (Silicon Valley)

Zone A

Yes

Zone B

Yes

South Korea (Seoul)

Zone A

No

Thailand (Bangkok)

Zone A

No

SAU (Riyadh - Partner Region)

Zone A

Yes

Zone B

Yes

## **Billing rules**

After you enable the cross-zone disaster recovery feature, you are charged for twice the amount of computing resources. The storage resource fees remain unchanged. For more information, see the configuration change page of the instance.

## Enable the cross-zone disaster recovery feature

**Important**

After you enable the cross-zone disaster recovery feature, your AnalyticDB for PostgreSQL instance is deployed across two zones to implement cross-zone disaster recovery. During the enabling process, your instance may be temporarily unavailable for approximately 20 minutes. To prevent impacts on your business, enable the cross-zone disaster recovery feature during off-peak hours.

1.  Log on to the [AnalyticDB for PostgreSQL console](https://gpdb.console.alibabacloud.com/gpdb/cn-hangzhou/list). In the upper-left corner of the console, select a region. Find the instance that you want to manage and click the instance ID.
    
2.  In the upper-right corner of the ****Basic Information**** page, choose ****Manage Instance**** > **Enable Multi-zone Deployment**.
    
3.  In the **Enable Multi-zone Deployment** message, click **OK**.
    
4.  On the Upgrade/Downgrade page, click **Enable** next to the **Multi-zone Deployment** parameter and select the required secondary zone and secondary zone vSwitch.
    
5.  Read and select the Terms of Service, and then click **Buy Now**.
    

## View the primary and secondary zones

1.  Log on to the [AnalyticDB for PostgreSQL console](https://gpdb.console.alibabacloud.com/gpdb/cn-hangzhou/list). In the upper-left corner of the console, select a region. Find the instance that you want to manage and click the instance ID.
    
2.  On the **Basic Information** page, view the **Instance Region and Zone** parameter.
    

## **FAQ**

### **What do I do if the** `**Current primaryZoneId and standbyZoneId do not support multi az, please reselect**` error message is returned?

If the `Current primaryZoneId and standbyZoneId do not support multi az, please reselect` error message is returned when you attempt to enable the cross-zone disaster recovery feature for an instance, the zone in which the instance resides **does not support** this feature with the selected secondary zone. In this case, select another secondary zone and try again. For information about the zones that support the cross-zone disaster recovery feature, see the "[Supported primary zones](#62c261538eq9t)" section of this topic.
