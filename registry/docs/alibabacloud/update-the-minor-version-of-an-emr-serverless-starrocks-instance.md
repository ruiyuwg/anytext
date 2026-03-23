In Alibaba Cloud E-MapReduce (EMR) Serverless StarRocks, versions include major and minor versions. A minor version refers to a version update within the 2.X or 3.X series. Minor version updates include performance improvements, new feature releases, and issue fixes. These updates help provide more stable and reliable services. EMR Serverless StarRocks uses the rolling update feature to smoothly update the minor version of an instance.

## **Prerequisites**

A StarRocks instance is created. For more information, see [Create an instance](/help/en/emr/emr-serverless-starrocks/create-an-instance#task-2285387).

## Limitations

The instance status must be **Running**.

## Usage notes

-   In most cases, updating the minor version of a StarRocks instance does not create feature incompatibility issues. However, because of the impact of community version iteration, we recommend that you thoroughly verify the test environment before you update the minor version of a StarRocks instance to prevent any adverse effects on your business operations.
    
-   You cannot downgrade the version of an instance after you update it.
    
-   During a version update on an instance, you cannot upgrade the configurations of the instance, scale the instance, modify configurations of the instance, or apply for a public endpoint for the instance.
    

## Procedure

1.  Go to the Instance Details tab.
    
    1.  Log on to the [E-MapReduce console](https://emr.console.alibabacloud.com/#/region/cn-hangzhou/resource/all/overview).
        
    2.  In the left-side navigation pane, choose **EMR Serverless** > **StarRocks**.
        
    3.  In the top menu bar, select a region based on your actual situation.
        
    4.  On the page that appears, find the desired instance and click the name of the instance.
        
2.  In the **Version Information** section, click **Update** next to **Minor Version**.
    
3.  In the **Confirm Minor Version Update** dialog box, configure the parameters and click **OK**.
    
    **Parameter**
    
    **Description**
    
    **Select Version**
    
    Select the minor version to which you want to update. We recommend that you select the latest version.
    
    **Restart Mode**
    
    > This parameter is available only for StarRocks shared-data instances.
    
    The restart mode. Valid values:
    
    -   **Rolling Restart**: All compute nodes (CNs) in a StarRocks instance are restarted in sequence. This ensures that specific nodes are running to maintain service availability. This is the default value. This mode applies to scenarios in which high service continuity is required. This mode can effectively reduce the impact on your business.
        
    -   **Quick Restart**: All CNs are restarted at a time, and the restart speed is fast. This mode applies to scenarios in which a restart operation needs to be completed as soon as possible. If you select this mode, your service may be interrupted. We recommend that you change the warehouse specifications during off-peak hours.
        
        **Note**
        
        Quick restart is supported only if the minor version of a StarRocks shared-data instance is 1.6.10 or later.
        
    

## **FAQ**

### Can I update the minor version of my StarRocks instance only to the next minor version?

You can update the minor version of your StarRocks instance to any new minor version that is available in the EMR console.

### **Are there any risks during the upgrade process?**

During a version update, query failures may occur. We recommend that you set the maintenance window to off-peak hours.
