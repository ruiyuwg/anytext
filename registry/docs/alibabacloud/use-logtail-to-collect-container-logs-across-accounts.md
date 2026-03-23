This topic describes how to collect container logs from Container Service for Kubernetes (ACK) across Alibaba Cloud accounts.

## Background information

For example, an e-commerce enterprise has two e-commerce applications that are deployed on ACK clusters in the China (Hangzhou) region. The enterprise uses two Simple Log Service projects that reside in the China (Hangzhou) region to manage logs.

-   Application A is deployed on an ACK cluster that belongs to Alibaba Cloud Account A (12\*\*\*\*456) and Simple Log Service is activated for the account to manage logs.
    
-   Application B is deployed on an ACK cluster that belongs to Alibaba Cloud Account B (17\*\*\*\*397) and Simple Log Service is activated for the account to manage logs.
    

The enterprise wants to use Simple Log Service that is activated for Alibaba Cloud Account A (12\*\*\*\*456) to collect the logs of the two applications and store the logs in two logstores of the same project. In this case, you must create a Logtail configuration, a machine group, and a logstore to collect and store the logs of Application B. The Logtail configuration, machine group, and logstore that are configured for Application A remain unchanged. ![Architecture](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6288736461/p399184.png)

## Step 1: Configure the ID of an Alibaba Cloud account as a user identifier

## **LoongCollector**

1.  Set the user identifier to Alibaba Cloud account A.
    
    1.  Log on to the [ACK console](https://cs.console.alibabacloud.com/) with Alibaba Cloud account B.
        
    2.  On the **Clusters** page, click the target cluster.
        
    3.  In the navigation pane on the left, choose **Applications** > **Helm**.
        
    4.  On the **Helm** page, select the **kube-system** namespace, find the loongcollector application, and then click **Update** in the **Actions** column.
        
    5.  In the **Target Helm Chart Values Configuration** section of the **Update Release** dialog box:
        
        -   Set **aliUid** to the ID of Alibaba Cloud account A, as shown by ① in the following figure. Separate multiple account IDs with commas (,). For example, `17****397,12****456`.
            
        -   Record the value of **baseMachineGroupName**. Use this value as the custom identifier when you create a machine group. For example: `k8s-group-cc47****54428`.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4464869671/p1049353.png)
            
    6.  Select the acknowledgement check box, and then click **OK**.
        
2.  In the navigation pane on the left, choose **Workloads** > **DaemonSets**. In the **kube-system** namespace, click **loongcollector-ds** to go to its details page. Confirm that the status of each pod is **Running** and that the creation time is after the configuration update. This confirms that the update has taken effect.
    

## Logtail

1.  Set the user identifier to Alibaba Cloud account A.
    
    1.  Log on to the [ACK console](https://cs.console.alibabacloud.com) with Alibaba Cloud Account B.
        
    
    2.  On the **Clusters** page, click the target cluster.
        
    3.  In the left-side navigation pane, choose **Configurations** > **ConfigMaps**.
        
    4.  Set the **Namespace** parameter to **kube-system**. In the ConfigMap list, find **alibaba-log-configuration** and click **Edit** in the Actions column.
        
    5.  In the **Edit** panel, configure the following configuration and click **OK**.
        
        Add the ID of Alibaba Cloud Account A to the **log-ali-uid** file, and then obtain the value of the **log-machine-group** parameter, for example, k8s-group-cc47\*\*\*\*54428. When you create a machine group, specify the value for the **Custom Identifier** parameter.
        
        Separate multiple account IDs with commas (,). Example: `17****397,12****456`.
        
        ![Parameter](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8802976461/p396322.png)
        
2.  Restart logtail-ds for the settings to take effect.
    
    On the details page of **logtail-ds**, check whether each container pod is in the **Running** state and whether the time when each pod is created is the same as the time when you update the settings.
    
    ![Restart logtail-ds](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9802976461/p396349.png)
    

## Step 2: Create a machine group

1.  Log on to the [Log Service console](https://sls.console.alibabacloud.com) with Alibaba Cloud Account A.
    
2.  In the Projects section, click the project that you want to manage.
    
3.  In the left-side navigation pane, choose **Resources** > **Machine Groups**.
    
4.  On the **Machine Groups** tab, choose **![Machine groups](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2123359951/p52484.png)** > **Create Machine Group**.
    
5.  In the **Create Machine Group** panel, configure the parameters and click **OK**, as shown in the following figure.
    
    In the **Custom Identifier** field, enter the machine group identifier that you obtained in [Step 1: Configure the ID of an Alibaba Cloud account as a user identifier](#section-2f3-idg-ntw), for example, k8s-group-cc47\*\*\*\*54428. For information about other parameters, see [Create a custom identifier-based machine group](/help/en/sls/create-a-user-defined-identity-machine-group#concept-gyy-k3q-zdb). ![Machine groups](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9802976461/p396535.png)
    
6.  Check whether the heartbeat status of each server in the machine group is OK.
    
    1.  In the Machine Groups list, click the machine group that you created.
        
    2.  On the **Machine Group Settings** page, view the status of each Elastic Compute Service (ECS) instance.
        
        If the **Heartbeat** status is **OK**, the ECS instance is connected to Simple Log Service. If the status is **FAIL**, see [What do I do if a Logtail machine group has no heartbeats?](/help/en/sls/troubleshoot-the-errors-related-to-logtail-machine-groups#concept-nfs-hs3-bfb) ![Heartbeat status of a machine group](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9802976461/p396553.png)
        

## Step 3: Create a Logtail configuration

1.  Log on to the [Log Service console](https://sls.console.alibabacloud.com) with Alibaba Cloud Account A.
    
2.  In the **Import Data** section, click **Kubernetes - Object**.
    
3.  Select a project and a logstore. Then, click **Next**.
    
4.  Click **Use Existing Machine Groups**.
    
5.  Select the machine group that you created in [Step 2: Create a machine group](#section-khb-kvt-hqr), move the machine group from the **Source Server Groups** section to the **Applied Server Groups**, and then click **Next**.
    
6.  Configure the parameters for the Logtail configuration and click **Next**.
    
    For information about the parameters, see [Use the Simple Log Service console to collect container text logs in DaemonSet mode](/help/en/sls/use-the-log-service-console-to-collect-container-text-logs-in-daemonset-mode#task-1563382).
    
    **Important**
    
    -   By default, only one Logtail collection configuration can match a file. Because the collection configuration for account B is still active, the new configuration for account A cannot take effect. You can use one of the following methods to activate the configuration for account A:
        
        -   Stop the log collection for account B. To do this, log on to the Simple Log Service console with account B and remove the Logtail collection configuration from the destination machine group. For more information, see [Apply a Logtail configuration to a specified machine group](/help/en/sls/manage-machine-groups#section-gqq-rp1-ry).
            
        -   Add a forced collection configuration for account A. For more information, see [How to collect logs from a file multiple times](/help/en/sls/what-do-i-do-if-i-want-to-use-multiple-logtail-configurations-to-collect-logs-from-a-log-file#concept-2180900).
            
    -   After you create the Logtail collection configuration, delete the original configuration for Alibaba Cloud account B to prevent duplicate log collection. For more information, see [Delete a Logtail configuration](/help/en/sls/manage-logtail-configurations-for-log-collection#section-vgw-rm1-ry).
        
    
7.  Preview data, configure indexes, and then click **Next**.
    
    By default, Simple Log Service enables full-text indexing. Configure field indexes based on the logs that are collected in manual mode or automatic mode. For more information, see [Create an index](/help/en/sls/create-indexes#task-jqz-v55-cfb)
    

## Related operations

If you want to migrate historical data from Alibaba Cloud Account B to the current logstore, create a data transformation job in the original logstore, and then replicate the data to the current logstore. For more information, see [Replicate data from a logstore](/help/en/sls/replicate-data-from-a-logstore#task-2036148).

**Important**

If you create a data transformation job to transform data across Alibaba Cloud accounts, you must use a custom role to grant the required permissions for the job.

-   The first **role ARN** is used to grant the custom role or AccessKey pair the required permissions to read data from a source logstore. For information about how to grant the required permissions to a RAM role, see [Grant a RAM role read-only access to a source logstore](/help/en/sls/access-data-by-using-a-custom-role#section-wms-rsm-fgd).
    
-   The second **role ARN** is used to grant the custom role or AccessKey pair the required permissions to write transformation results to a destination logstore. For information about how to grant the required permissions to a RAM role, see [Grant the RAM role the permissions to write data to destination logstores across Alibaba Cloud accounts](/help/en/sls/access-data-by-using-a-custom-role#section-5y6-5dk-etx).
