After you enable the system disk encryption feature for an E-MapReduce (EMR) cluster, the operating system, program files, and other system-related data on the system disk are encrypted. You can use this feature if your business has security compliance requirements. This feature helps you protect the privacy, autonomy, and security of data without the need to build or maintain a key management infrastructure.

## Background information

For more information about system disk encryption, see [Overview](/help/en/ecs/user-guide/encryption-overview#concept-2383230).

## Prerequisites

Key Management Service (KMS) is activated and a customer master key (CMK) is created. For more information, see [Purchase a dedicated KMS instance](/help/en/kms/key-management-service/support/purchase-a-dedicated-kms-instance#task-1962255) and [Create a CMK](/help/en/kms/key-management-service/support/create-a-cmk#task-1939967).

## Limits

-   Only Enterprise SSDs (ESSDs), standard SSDs, and ultra disks can be encrypted. Local disks cannot be encrypted.
    
-   You can enable system disk encryption only when you create a cluster. You cannot enable system disk encryption for an existing cluster.
    

## Precautions

You cannot disable system disk encryption after it is enabled. We recommend that you enable this feature only when it is necessary.

## Procedure

1.  Log on to the [EMR console](https://emr.console.alibabacloud.com/#/region/cn-hangzhou/resource/all/ecs/list). In the left-side navigation pane, click EMR on ECS.
    
2.  On the EMR on ECS page, click **Create Cluster**.
    
3.  In the **Basic Configuration** step, click the ![more](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7547586761/p485278.png) icon in the **Advanced Settings** section.
    
4.  Turn on **System Disk Encryption** and select a CMK from the drop-down list.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5715913371/p871467.png)
    
    When you create the cluster, you need to configure the software and hardware, specify basic information, and confirm the order for the cluster. For more information, see [Create a cluster](/help/en/emr/emr-on-ecs/user-guide/create-a-cluster-on-the-emr-on-ecs-page#task-2136630).
