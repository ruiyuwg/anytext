If you use a pay-as-you-go E-MapReduce (EMR) cluster to deploy critical business or store important data or configurations, we recommend that you enable release protection for the cluster to prevent accidental release of the cluster, which may cause irreparable consequences. After you enable release protection for a cluster, you cannot directly release the cluster. To release the cluster, you must disable release protection.

## Limits

The release protection feature is supported only in pay-as-you-go DataLake, Dataflow, OLAP, DataServing, or custom clusters.

## Enable and disable release protection for a cluster

By default, the release protection feature is disabled. You can enable release protection for a cluster when you create the cluster and enable or disable release protection after you create the cluster.

### Scenario 1: Enable release protection when you create a cluster

When you create a cluster, release protection is disabled for the cluster by default. You can manually enable release protection.

In the **Advanced Settings** section of the **Basic Configuration** step, turn on **Release Protection**.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4236913371/p871397.png)

### **Scenario 2: Enable or disable release protection for an existing cluster**

1.  Log on to the [EMR console](https://emr.console.alibabacloud.com/#/region/cn-hangzhou/resource/all/ecs/list). In the left-side navigation pane, click EMR on ECS.
    
2.  On the **EMR on ECS** page, find the desired cluster and click the name of the cluster.
    
3.  In the **Cluster Information** section of the **Basic Information** tab, turn on **Release Protection**.
    
4.  In the message that appears, click **OK**.
    

## Check whether release protection is enabled for a cluster

On the **EMR on ECS** page, find the desired cluster and click the name of the cluster. The **Basic Information** tab appears. In the **Cluster Information** section, check the value of the **Release Protection** parameter.

-   On: Release protection is enabled.
    
-   Off: Release protection is disabled.
