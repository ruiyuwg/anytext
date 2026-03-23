After a data disk is encrypted, both data in transit and data at rest on the disk are encrypted. You can use this feature if your business has security compliance requirements. You can configure encryption to protect the privacy, autonomy, and security of data without the need to develop or maintain a key management infrastructure.

## Background information

For more information about data disk encryption, see [Encryption overview](/help/en/ecs/user-guide/encryption-overview#concept-2383230).

## Prerequisites

Key Management Service (KMS) is activated and a customer master key (CMK) is created. For more information, see [Purchase a dedicated KMS instance](/help/en/kms/key-management-service/support/purchase-a-dedicated-kms-instance#task-1962255) and [Create a CMK](/help/en/kms/key-management-service/support/create-a-cmk#task-1939967).

## Limits

-   Only enhanced SSDs, standard SSDs, and ultra disks can be encrypted. Local disks cannot be encrypted.
-   You can enable data disk encryption only when you create a cluster. You cannot enable data disk encryption for an existing cluster.

## Precautions

You cannot disable data disk encryption after it is enabled. We recommend that you enable this feature only when it is necessary.

## Procedure

1.  Go to the EMR on ECS page.
    1.  Log on to the [EMR on ECS console](https://emr.console.alibabacloud.com/#/region/cn-hangzhou/resource/all/ecs/list).
    2.  In the top navigation bar, select a region and a resource group based on your business requirements.
        
        -   The region of a cluster cannot be changed after the cluster is created.
        -   All resource groups in your account are displayed by default.
        
2.  On the EMR on ECS page, click Create Cluster.
3.  In the Basic Configuration step, click the ![more](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7547586761/p485278.png) icon in the Advanced Settings section.
4.  Turn on Data Disk Encryption and select a key from the drop-down list.
    
    ![Data Disk Encryption](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8547586761/p485209.png)
    
    When you create the cluster, you need to configure the software and hardware, specify basic information, and confirm the order for the cluster. For more information about the configurations, see [Create a cluster](/help/en/emr/emr-on-ecs/user-guide/create-a-cluster-on-the-emr-on-ecs-page#task-2136630).
