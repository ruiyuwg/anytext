You can associate EMR clusters owned by other Alibaba Cloud accounts. This operation must be performed using a RAM role. This topic describes how to use a RAM role to allow Alibaba Cloud Account A to associate an EMR cluster that belongs to Alibaba Cloud Account B in DataWorks, enabling cross-account access to EMR data.

## **Prerequisites**

-   Alibaba Cloud Account A and Alibaba Cloud Account B are created. For information about how to create an Alibaba Cloud account, see [Create an Alibaba Cloud account](/help/en/account/step-1-register-an-alibaba-cloud-account).
    
    -   Alibaba Cloud Account A: Associates the EMR cluster of account B in DataWorks.
        
    -   Alibaba Cloud Account B: Provides an EMR cluster.
        
-   An EMR cluster is created by using Alibaba Cloud Account B. For information about how to create an EMR cluster, see [Create a cluster](/help/en/emr/emr-on-ecs/user-guide/create-a-cluster-on-the-emr-on-ecs-page).
    

## **Precautions**

-   Only EMR **Hadoop** clusters for which the Metadata parameter is not set to **DLF Unified Metadata** can be used.
    
-   Kerberos authentication is not supported.
    
-   Spark supports table lineages of SQL nodes and does not support field lineages of SQL nodes.
    

## Alibaba Cloud Account B**: Create a RAM role and authorize Alibaba Cloud Account A to assume the RAM role**

Alibaba Cloud Account B is assigned a RAM role that has permissions to access EMR resources. Alibaba Cloud Account B authorizes Alibaba Cloud Account A to assume this role to access the EMR resources.

1.  Create a RAM role.
    
    Log on to the [RAM](https://ram.console.alibabacloud.com/) console by using Alibaba Cloud Account B. Create a RAM role and add Alibaba Cloud Account A as a trusted Alibaba Cloud account for the role. Then, Alibaba Cloud Account A can assume the role to access the authorized resources. For information about how to create a RAM role, see [Create a RAM role for a trusted Alibaba Cloud account](/help/en/ram/user-guide/create-a-ram-role-for-a-trusted-alibaba-cloud-account).
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7887357961/p719666.png)
    
    Sample key configurations of a RAM role:
    
    -   Set the RAM Role Name parameter to **EMRRole**.
        
    -   Set the Select Trusted Alibaba Cloud Account parameter to Other Alibaba Cloud Account, and enter the ID of Alibaba Cloud Account A in the field that appears. You can log on to the RAM console by using Alibaba Cloud Account A, and move the pointer over the profile picture in the top navigation bar to obtain the ID of Alibaba Cloud Account A.
        
    
    After the configuration is complete, Alibaba Cloud Account A can assume the **EMRRole** role and access the authorized resources.
    
2.  Modify the trust policy of the EMRRole role.
    
    You must go to the details page of the **EMRRole** role and modify its trust policy to authorize Alibaba Cloud Account A to access EMR clusters that belong to Alibaba Cloud Account B. For information about how to modify the trust policy of a RAM role, see [Modify the trust policy of a RAM role](/help/en/ram/user-guide/edit-the-trust-policy-of-a-ram-role). The following code shows the document of the trust policy:
    
    ```
    {
      "Statement": [
        {
          "Action": "sts:AssumeRole",
          "Effect": "Allow",
          "Principal": {
            "Service": [
              "san******@emr.dataworks.aliyuncs.com"
            ]
          }
        }
      ],
      "Version": "1"
    }
    ```
    
    **Note**
    
    `san******@emr.dataworks.aliyuncs.com`: indicates the ID of Alibaba Cloud Account A.
    
3.  Attach the AliyunDataWorksAccessingEMRReadOnlyPolicy policy to the **EMRRole** role.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9677156171/p718983.png)
    

## Alibaba Cloud Account A**: Register an EMR cluster that belongs to Alibaba Cloud Account B**

**Note**

In this step, you will associate the EMR cluster of account B with the DataWorks workspace under account A, enabling cross-account cluster association. Therefore, before performing this step, obtain the UID from account B in advance.

1.  Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the top navigation bar, select the desired region. In the left-side navigation pane, choose **More** > **Management Center**. On the page that appears, select the desired workspace from the drop-down list and click **Go to Management Center**.
    
2.  In the left-side navigation pane of the SettingCenter page, click **Computing Resources**.
    
3.  Configure information about an EMR cluster.
    
    1.  Configure basic information about the EMR cluster.
        
        Configure the following information as prompted on the page. For a standard-mode workspace, associate computing resources separately for the development and production environments. For details about workspace modes, see [Basic mode vs. standard mode workspaces](/help/en/dataworks/user-guide/differences-between-workspaces-in-basic-mode-and-workspaces-in-standard-mode).
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1636451671/p990343.png)
        
        Configuration descriptions of key parameters:
        
        -   Set the Alibaba Cloud Primary Account UID parameter to the ID of the Alibaba Cloud account to which the EMR cluster belongs. In this example, set the parameter to the ID of Alibaba Cloud Account B.
            
        -   Set the Opposite RAM Role parameter to the RAM role that can be assumed by Alibaba Cloud Account A to access the EMR resources of Alibaba Cloud Account B. In this example, set the parameter to **EMRRole**.
            
        -   Set the Peer EMR Cluster parameter to the EMR cluster to be associated with DataWorks. In this example, you can select only EMR Hadoop clusters of V3.38.3 or V3.38.2 for which the Metadata parameter is not set to DLF Unified Metadata.
            
        
        For more configuration details about associating clusters, see [Data Studio: Bind EMR computing resources](/help/en/dataworks/user-guide/bind-emr-computing-resources).
        
    2.  Initialize the resource group that you want to use.
        
        If this is the first time you associate EMR computing resources, or if the cluster service configuration has changed, or component versions have been upgraded (for example, modifications to `core-site.xml`), initialize the resource group. This ensures [network connectivity](/help/en/dataworks/user-guide/data-source-test-connectivity#title-a8g-lc3-2ob) is properly configured and that the resource group can access the EMR cluster as expected.
        
        **Note**
        
        -   If the initialization fails, use the connectivity diagnosis tool to help troubleshoot the cause.
            
        -   Initializing a resource group may cause running tasks to fail. Unless it is necessary to reinitialize the resource group immediately (for example, to prevent many tasks from failing after cluster configurations are changed), we recommend that you initialize the resource group during off-peak hours.
            
        

## **What to do next**

After you register the EMR cluster, you can perform the following operations:

-   [Configure mappings between tenant member accounts and EMR cluster accounts.](/help/en/dataworks/user-guide/configure-cluster-identity-mapping) If the default identity used to access the EMR cluster is a non-Hadoop account, you must configure mappings between tenant member accounts and EMR cluster accounts. This way, the RAM user that you use in DataWorks can access only resources on which the RAM user has permissions.
    
-   Configure a data synchronization node in Data Integration to synchronize data based on the EMR cluster. For more information, see [Data Integration overview](/help/en/dataworks/user-guide/overview-of-data-integration/).
    
-   Go to Operation Center and Data Map to view more information about the cluster. For more information, see [Operation Center overview](/help/en/dataworks/user-guide/overview-43) and [Data Map overview](/help/en/dataworks/overview-datamap).
