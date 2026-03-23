This topic describes how to disable password-free access over Virtual Private Cloud (VPC) for an ApsaraDB for MongoDB instance.

## Usage notes

-   The password-free access over VPC feature is phased out. You can no longer enable this feature for ApsaraDB for MongoDB instances but can only disable this feature for ApsaraDB for MongoDB instances with this feature enabled.
    
-   After password-free access over VPC is disabled for an ApsaraDB for MongoDB instance, applications must use a password to access the instance over VPC. Modify the application access method before you disable password-free access.
    

## Procedure

1.  Log on to the [ApsaraDB for MongoDB console](https://mongodb.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, click **Replica Set Instances** or **Sharded Cluster Instances**.
    
3.  In the upper-left corner of the page that appears, select the resource group and region to which the desired instance belongs.
    
4.  Click the ID of the instance that you want to manage or click **Manage** in the **Actions** column.
    
5.  In the left-side navigation pane of the instance details page, click **Database Connections**.
    
6.  In the **Internal Connections** section, click **Disable Password-free Access**.
    
7.  In the **Disable Password-free Access** message, click **OK**.
    

## Related API operations

**Operation**

**Description**

[ModifyInstanceVpcAuthMode](/help/en/mongodb/api-modifyinstancevpcauthmode#doc-api-Dds-ModifyInstanceVpcAuthMode)

Disables password-free access over VPC for an ApsaraDB for MongoDB instance.
