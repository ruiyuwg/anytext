Storage prices vary based on the billing method and storage class. You can select a billing method from the guide on the right to view the relevant billing rules.

## Subscription prices

The following tables list the pricing for different storage classes.

**Note**

-   The available storage classes vary by Edition. For more information about the storage classes available for a specific edition, see the [buy page](https://polardb-buy.alibabacloud.com/cusBuy/Prepaid).
    
-   The performance of an ESSD AutoPL disk is the sum of its baseline performance, provisioned performance, and performance burst. The baseline performance is the same as that of a PL1 ESSD. The provisioned performance and performance burst are the key features of the disk. For more information, see [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks). When you purchase the disk, you can configure its provisioned performance to increase its input/output operations per second (IOPS) performance.
    
-   If your data volume exceeds the purchased storage capacity, the behavior varies by storage class:
    
    -   ESSDs: These disks do not support automatic storage scaling. You must use Database Autonomy Service (DAS) to scale up the storage capacity. To prevent business interruptions due to insufficient storage, you can manually configure automatic storage scaling. For more information, see [Configure automatic storage scaling for ESSD disks](/help/en/polardb/polardb-for-mysql/user-guide/auto-expand-essd-storage). After you enable automatic scaling, the storage capacity is automatically scaled up when the trigger conditions are met. An upfront payment is required for the scaled-up capacity. If your Alibaba Cloud account balance is insufficient, the scaling operation fails.
        
    -   PSL4 and PSL5: The storage space automatically scales up based on your actual usage. No additional operations are required. Data that exceeds the purchased storage capacity is billed on a pay-as-you-go basis.
        

**Storage class**

**Price (USD/GB/month)**

**The Chinese mainland**

**China (Hong Kong)**

**Japan (Tokyo)**

**Singapore**

**Indonesia (Jakarta)**

**Germany (Frankfurt)**

ESSD PL0

Dual-zone deployment (Hot Standby Cluster enabled)

0.12

0.12

0.20

0.23

0.22

0.21

Dual-zone deployment (hot standby storage cluster and hot standby compute cluster enabled)

Three-zone deployment (hot standby storage cluster and logger node enabled)

Single zone (Hot Standby Cluster disabled)

0.08

0.08

0.12

0.15

0.13

0.13

ESSD PL1

Dual-zone deployment (Hot Standby Cluster enabled)

0.25

0.25

0.39

0.47

0.43

0.42

Dual-zone deployment (hot standby storage cluster and hot standby compute cluster enabled)

Three-zone deployment (hot standby storage cluster and logger node enabled)

Single zone (Hot Standby Cluster disabled)

0.15

0.15

0.25

0.29

0.27

0.26

ESSD PL2

Dual-zone deployment (Hot Standby Cluster enabled)

0.49

0.49

0.79

0.94

0.86

0.84

Dual-zone deployment (hot standby storage cluster and hot standby compute cluster enabled)

Three-zone deployment (hot standby storage cluster and logger node enabled)

Single zone (Hot Standby Cluster disabled)

0.31

0.31

0.49

0.58

0.54

0.52

ESSD PL3

Dual-zone deployment (Hot Standby Cluster enabled)

0.98

0.98

1.58

1.87

1.72

1.67

Dual-zone deployment (hot standby storage cluster and hot standby compute cluster enabled)

Three-zone deployment (hot standby storage cluster and logger node enabled)

Single zone (Hot Standby Cluster disabled)

0.62

0.62

0.98

1.17

1.08

1.05

ESSD AutoPL

Dual-zone deployment (Hot Standby Cluster enabled)

Disk storage

0.25

0.25

0.39

0.47

0.43

0.42

Provisioned IOPS

USD 0.011088/IOPS/month

Dual-zone deployment (hot standby storage cluster and hot standby compute cluster enabled)

Disk storage

0.25

0.25

0.39

0.47

0.43

0.42

Provisioned IOPS

USD 0.011088/IOPS/month

Three-zone deployment (hot standby storage cluster and logger node enabled)

Disk storage

0.25

0.25

0.39

0.47

0.43

0.42

Provisioned IOPS

USD 0.011088/IOPS/month

Single zone (Hot Standby Cluster disabled)

Disk storage

0.15

0.15

0.25

0.29

0.27

0.26

Provisioned IOPS

USD 0.006912/IOPS/month

**Storage class**

**Price (****USD/GB/month****)**

**The Chinese mainland**

**Hong Kong (China) and other regions outside the Chinese mainland**

PSL4

Dual-zone deployment (Hot Standby Cluster enabled)

0.2308

0.2569

Dual-zone deployment (hot standby storage cluster and hot standby compute cluster enabled)

Three-zone deployment (hot standby storage cluster and logger node enabled)

Single zone (Hot Standby Cluster disabled)

0.1154

0.1285

PSL5

Dual-zone deployment (Hot Standby Cluster enabled)

0.3492

0.3892

Dual-zone deployment (hot standby storage cluster and hot standby compute cluster enabled)

Three-zone deployment (hot standby storage cluster and logger node enabled)

Single zone (Hot Standby Cluster disabled)

0.1746

0.1946

## Pay-as-you-go prices

The following tables detail the pricing for different storage classes.

**Note**

-   The available storage classes vary by Edition. For more information about the storage classes available for a specific edition, see the [buy page](https://polardb-buy.alibabacloud.com/cusBuy/Prepaid).
    
-   The performance of an ESSD AutoPL disk is the sum of its baseline performance, provisioned performance, and performance burst. The baseline performance is the same as that of a PL1 ESSD. The provisioned performance and performance burst are the key features of the disk. For more information, see [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks). When you purchase the disk, you can configure its provisioned performance to increase its IOPS performance.
    
-   For ESSD disks, you must specify a storage capacity. You are charged per GB-hour based on the specified capacity. These disks do not support automatic storage scaling. You must use DAS to scale up the storage capacity. To prevent business interruptions due to insufficient storage, you can manually configure automatic storage scaling. For more information, see [Configure automatic storage scaling for ESSD disks](/help/en/polardb/polardb-for-mysql/user-guide/auto-expand-essd-storage). After you enable automatic scaling, the storage capacity is automatically scaled up when the trigger conditions are met. An upfront payment is required for the scaled-up capacity. If your Alibaba Cloud account balance is insufficient, the scaling operation fails.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6907741371/p840032.png)
    
-   For PSL4 and PSL5, you do not need to select a storage capacity. The storage space automatically scales up as your data grows. You are billed only for the storage space that your data actually uses.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6907741371/p840034.png)
    

**Storage class**

**Price (USD/GB/hour)**

**The Chinese mainland**

**China (Hong Kong)**

**Japan (Tokyo)**

**Singapore**

**Indonesia (Jakarta)**

**Germany (Frankfurt)**

ESSD PL0

Dual-zone deployment (Hot Standby Cluster enabled)

0.0002565

0.0002565

0.0004104

0.0004872

0.0004488

0.0004360

Dual-zone deployment (hot standby storage cluster and hot standby compute cluster enabled)

Three-zone deployment (hot standby storage cluster and logger node enabled)

Single zone (Hot Standby Cluster disabled)

0.0001603

0.0001603

0.0002565

0.0003045

0.0002805

0.0002725

ESSD PL1

Dual-zone deployment (Hot Standby Cluster enabled)

0.0005128

0.0005128

0.0008205

0.0009744

0.0008974

0.0008718

Dual-zone deployment (hot standby storage cluster and hot standby compute cluster enabled)

Three-zone deployment (hot standby storage cluster and logger node enabled)

Single zone (Hot Standby Cluster disabled)

0.0003205

0.0003205

0.0005128

0.0006090

0.0005609

0.0005449

ESSD PL2

Dual-zone deployment (Hot Standby Cluster enabled)

0.0010256

0.0010256

0.001641

0.0019487

0.0017949

0.0017436

Dual-zone deployment (hot standby storage cluster and hot standby compute cluster enabled)

Three-zone deployment (hot standby storage cluster and logger node enabled)

Single zone (Hot Standby Cluster disabled)

0.0006410

0.0006410

0.0010256

0.0012179

0.0011218

0.0010898

ESSD PL3

Dual-zone deployment (Hot Standby Cluster enabled)

0.0020513

0.0020513

0.0032821

0.0038974

0.0035898

0.0034872

Dual-zone deployment (hot standby storage cluster and hot standby compute cluster enabled)

Three-zone deployment (hot standby storage cluster and logger node enabled)

Single zone (Hot Standby Cluster disabled)

0.0012820

0.0012820

0.0020513

0.0024359

0.0022436

0.0021795

ESSD AutoPL

Dual-zone deployment (Hot Standby Cluster enabled)

Disk storage

0.0005123

0.0005123

0.0008197

0.0009738

0.0008969

0.0008709

Provisioned IOPS

USD 0.0000154/IOPS/hour

Dual-zone deployment (hot standby storage cluster and hot standby compute cluster enabled)

Disk storage

0.0005123

0.0005123

0.0008197

0.0009738

0.0008969

0.0008709

Provisioned IOPS

USD 0.0000154/IOPS/hour

Three-zone deployment (hot standby storage cluster and logger node enabled)

Disk storage

0.0005123

0.0005123

0.0008197

0.0009738

0.0008969

0.0008709

Provisioned IOPS

USD 0.0000154/IOPS/hour

Single zone (Hot Standby Cluster disabled)

Disk storage

0.0003200

0.0003200

0.0005120

0.0006092

0.0005615

0.0005440

Provisioned IOPS

USD 0.0000096/IOPS/hour

**Storage class**

**Price (****USD/GB/hour****)**

**The Chinese mainland**

**Hong Kong (China) and other regions outside the Chinese mainland**

PSL4

Dual-zone deployment (Hot Standby Cluster enabled)

0.000486

0.000542

Dual-zone deployment (hot standby storage cluster and hot standby compute cluster enabled)

Three-zone deployment (hot standby storage cluster and logger node enabled)

Single zone (Hot Standby Cluster disabled)

0.000243

0.000271

PSL5

Dual-zone deployment (Hot Standby Cluster enabled)

0.000748

0.000834

Dual-zone deployment (hot standby storage cluster and hot standby compute cluster enabled)

Three-zone deployment (hot standby storage cluster and logger node enabled)

Single zone (Hot Standby Cluster disabled)

0.000374

0.000417

## Serverless **prices**

The following tables show the pricing for different storage classes.

**Note**

-   The available storage classes vary by Edition. For more information about the specific storage classes available, see the [buy page](https://polardb-buy.alibabacloud.com/cusBuy/Prepaid).
    
-   For PSL4 and PSL5, you do not need to select a storage capacity. The storage space automatically scales up as your data grows. You are billed only for the storage space that your data actually uses.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6907741371/p840034.png)
    

**Storage class**

**Price (****USD/GB/hour****)**

**The Chinese mainland**

**Hong Kong (China) and other regions outside the Chinese mainland**

PSL4

Dual-zone deployment (Hot Standby Cluster enabled)

0.000486

0.000542

Dual-zone deployment (hot standby storage cluster and hot standby compute cluster enabled)

Three-zone deployment (hot standby storage cluster and logger node enabled)

Single zone (Hot Standby Cluster disabled)

0.000243

0.000271

PSL5

Dual-zone deployment (Hot Standby Cluster enabled)

0.000748

0.000834

Dual-zone deployment (hot standby storage cluster and hot standby compute cluster enabled)

Three-zone deployment (hot standby storage cluster and logger node enabled)

Single zone (Hot Standby Cluster disabled)

0.000374

0.000417
