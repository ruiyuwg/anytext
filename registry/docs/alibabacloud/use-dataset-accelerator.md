When you create a dataset in Platform for AI (PAI), you can enable dataset acceleration for the dataset. When you create a Data Science Workshop (DSW) instance or submit a Deep Learning Containers (DLC) job, you can directly use an accelerated dataset to improve data reading efficiency. This topic describes how to use Dataset Accelerator in PAI.

## **Prerequisites**

An accelerator is created. For more information, see [Create and manage a dataset accelerator](/help/en/pai/user-guide/create-and-manage-a-dataset-accelerator).

## Enable dataset acceleration when you create a dataset

1.  On the **Datasets** page, create a dataset and configure the parameters. The following table describes the parameters. For more information, see [Create and manage datasets](/help/en/pai/user-guide/create-and-manage-datasets).
    
    **Parameter**
    
    **Description**
    
    **Create Dataset**
    
    Select **From Alibaba Cloud**.
    
    **Enable Dataset Acceleration**
    
    Select **Enable Dataset Acceleration** and configure relevant parameters to enable dataset acceleration. ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4910467171/p795658.png)
    
    Select an **accelerator** based on the selected data storage type, and configure the parameters of the slot, including the name, maximum capacity, and accelerated mount target. For more information, see [Create and manage slots](/help/en/pai/user-guide/create-and-manage-a-slot).
    
2.  Click **Submit**.
    
    The created dataset is displayed in the dataset list. The following figure shows the accelerated dataset. ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4910467171/p795672.png)
    

## Enable dataset acceleration for an existing dataset

1.  On the **Datasets** page, click the name of the dataset to go to the **Dataset Details** page. For more information, see [Create and manage datasets](/help/en/pai/user-guide/create-and-manage-datasets).
    
2.  On the **Dataset Details** page, click **Dataset Acceleration** in the upper-right corner. In the Dataset Acceleration panel, select a **dataset accelerator** and configure the parameters of the slot. For more information, see [Create and manage a slot](/help/en/pai/user-guide/create-and-manage-a-slot).
    
3.  Click **Submit** to enable acceleration for the dataset.
    

## **Use Dataset Accelerator**

You can use Dataset Accelerator when you create DSW instances or submit DLC jobs.

-   When you create a DSW instance, you can select an accelerated dataset in the **Storage** section. For more information, see [Create and manage a DSW instance](/help/en/pai/user-guide/create-and-manage-dsw-instances). ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4910467171/p795670.png)
    
-   When you submit a DLC job, you can select an accelerated dataset in the **Datasets** section. For more information, see [Submit training jobs](/help/en/pai/user-guide/create-a-training-task/). ![9abfc98e31256f978dd71d41eae5902f](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4910467171/p796851.png)
