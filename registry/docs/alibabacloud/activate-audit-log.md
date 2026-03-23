Lindorm provides an audit log feature based on Alibaba Cloud Simple Log Service (SLS). This feature records user operations on Lindorm, which lets you track and analyze access and improve the security of your data assets. This topic describes how to enable the audit log feature.

## Prerequisites

The database engine version of LindormTSDB must be 3.4.25 or later. For more information about how to view or upgrade the version, see [Version Guide](/help/en/lindorm/product-overview/release-notes-of-lindormtsdb#concept-2119016) and [Minor version update](/help/en/lindorm/user-guide/upgrade-the-minor-engine-version-of-an-apsaradb-for-lindorm-instance#concept-2557610).

## Notes

-   The audit log feature is available only for Lindorm instances and is not supported for the new version of Lindorm.
    
-   To use a Resource Access Management (RAM) user to enable the audit log feature, you must grant the **AliyunLogFullAccess** permission to the RAM user. For more information, see [Grant permissions to a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user).
    
-   After you enable the audit log, a project and a dedicated Logstore are created by default in the same region as the Lindorm instance.
    
    -   The project is named in the format: aliyun-product-Alibaba Cloud account ID-Region ID.
        
    -   The dedicated Logstore is named lindorm-tsdb-audit-log.
        
-   You cannot write other data to the dedicated Logstore or modify its indexes. However, features such as queries, statistics, and alerting are not limited.
    

## Billing

SLS charges for the audit log feature on a pay-as-you-go basis. Fees are calculated based on the storage space and retention period of the audit logs. For more information, see [Simple Log Service Pricing](https://www.alibabacloud.com/zh/pricing-calculator?_p_lc=1&spm=a2796.7960336.3034855210.1.7396b91aC5VjZ7#/commodity/vm_intl).

## Procedure

1.  Log on to the [Lindorm console](https://lindorm.console.alibabacloud.com/cn-hangzhou/clusterhou/cluster). In the upper-left corner of the page, select the region of the instance. On the **Instances** page, click the ID of the target instance or click **View Instance Details** in the **Actions** column for the instance.
    
2.  In the navigation pane on the left, click **Time Series Engine**. Then, click the **Audit Logs** tab.
    
3.  Turn on the **Current Status:** switch. In the **Audit Logs** dialog box, click **OK**.
