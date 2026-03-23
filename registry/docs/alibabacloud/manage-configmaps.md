ConfigMaps allow you to store non-sensitive, unencrypted configuration information and configuration files in Container Service for Kubernetes (ACK). This way, you can update configuration information without the trouble of rebuilding container images. This topic describes how to create and manage ConfigMaps.

## Prerequisites

An ACK managed cluster or ACK Serverless cluster is created. For more information, see [Create an ACK managed cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-an-ack-managed-cluster-2/) or [Create an ACK Serverless cluster](/help/en/ack/serverless-kubernetes/user-guide/create-an-ask-cluster-2).

## Create a ConfigMap

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left-side navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, click the name of the cluster that you want to manage and choose **Configurations** > **ConfigMaps** in the left-side navigation pane.
    
3.  On the **ConfigMap** page, select the **namespace** in which you want to create a ConfigMap. Then, use one of the following methods to create a ConfigMap:
    
    -   **Method 1: Click Create**
        
        1.  In the upper-right corner of the ConfigMap page, click **Create**.
            
        2.  In the Create panel, enter a name for the ConfigMap, click **\+ Add**, enter a **key** and a **value**, and then click **OK**.
            
            -   **ConfigMap Name**: the name of the ConfigMap. The name can contain lowercase letters, digits, hyphens (-), and periods (.). This parameter is required. Other resource objects must reference the ConfigMap name to obtain the configuration information.
                
            -   **ConfigMap**: Enter the names and values of the ConfigMap in key-value pairs. You can also click **Import** to import a JSON file to create the ConfigMap.
                
    -   **Method 2: Click Create from YAML**
        
        1.  In the upper-right corner of the ConfigMap page, click **Create from YAML**.
            
        2.  On the page that appears, set the parameters and click **Create**.
            
            **Parameter**
            
            **Description**
            
            Sample Template
            
            You can select Custom from the drop-down list and configure the ConfigMap in YAML syntax. You can also select **Resource - ConfigMap** from the drop-down list. If you select Resource - ConfigMap, the ConfigMap is named aliyun-config and contains the following variable files: `game.properties` and `ui.properties`. You can modify the ConfigMap to meet your requirements.
            
    
    After the ConfigMap named aliyun-config is created, you can find it on the ConfigMap page.
    

## What to do next

After you create the ConfigMap, you can perform the following operations on the **ConfigMap** page:

**Important**

If you update a ConfigMap, the applications that use the ConfigMap are affected.

-   Click the name of the ConfigMap to view the details of the ConfigMap and the configuration information that the ConfigMap contains.
    
-   Click **Edit** in the **Actions** column to update the ConfigMap. You can update the content in the **Name** and **Value** columns.
    
-   Click **Edit YAML** in the **Actions** column to update the ConfigMap. In the **View in YAML** panel, update the ConfigMap and click **OK**.
    
-   Click **Delete** in the **Actions** column to delete the ConfigMap if you no longer need the ConfigMap.
    

## **References**

For more information about how to use ConfigMaps in pods, see [Configure a pod to use a ConfigMap](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-a-pod-to-use-a-configmap).
