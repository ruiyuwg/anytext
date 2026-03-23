The data catalog feature of DataWorks supports data synchronization from a single Hologres table to MaxCompute to help you efficiently store big data. This topic describes how to synchronize data from Hologres to MaxCompute. After data synchronization, you can fully utilize the high-performance processing capabilities of MaxCompute.

## **Prerequisites**

-   A MaxCompute project and a Hologres instance are created. For information about how to create a MaxCompute project and a Hologres instance, see [Create a MaxCompute project](/help/en/maxcompute/getting-started/create-a-maxcompute-project#title-3xf-weo-emn) and [Purchase a Hologres instance](/help/en/hologres/getting-started/purchase-a-hologres-instance#title-v6p-rg3-rfu).
    
-   The MaxCompute project and Hologres instance are associated with the workspace as computing resources, and the computing resources have passed the network connectivity test. For information, see [Associate a computing resource with a workspace (Participate in Public Preview of Data Studio turned on)](/help/en/dataworks/create-and-manage-compute-resources-new-data-development#870f228be4rdk).
    

## **Limits**

-   Only data in internal Hologres databases can be synchronized to MaxCompute.
    
-   For information about the limits on using Hologres external tables in MaxCompute, see [Hologres external tables](/help/en/maxcompute/user-guide/hologres-foreign-tables#title-qfd-lhp-v9u).
    
-   Data types supported by MaxCompute and those supported by Hologres are different. Hologres data of specific types cannot be synchronized to MaxCompute. For information about mappings between MaxCompute data types and Hologres data types, see [Data type mappings between MaxCompute and Hologres](/help/en/hologres/developer-reference/data-types#title-1xq-hnv-edl).
    

## **Entry point for the feature**

Before you configure a data synchronization node, you can perform the following steps to go to the configuration tab on which you can configure data synchronization from Hologres to MaxCompute:

1.  Go to the [Workspaces](https://dataworks.console.aliyun.com/workspace/list) page in the DataWorks console. In the top navigation bar, select a desired region. Find the desired workspace and choose **Shortcuts** > **Data Studio** in the **Actions** column.
    
2.  In the left-side navigation pane of the Data Studio page, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7618107371/p840002.png) icon to go to the **DATA CATALOG** pane.
    
3.  In the Hologres directory, find the internal table from which you want to synchronize data in the **Table** folder, right-click the table name, and then select **Data Synchronization to MaxCompute**.
    
4.  In the popover that appears, select the path in which you want to create the node, and click **OK**.
    
5.  In the popover that appears, enter a name for the node and press Enter to go to the configuration tab of the node.
    

## **Configure the node**

On the configuration tab of the node, configure the parameters. For more information, see [Node for synchronizing data to MaxCompute](/help/en/dataworks/user-guide/data-synchronization-to-maxcompute#21f0cf41facnq).

**Note**

The system automatically configures parameters related to the source Hologres table based on the internal table that you select. You do not need to manually configure parameters in the **Settings for Source Table (Hologres)** section.
