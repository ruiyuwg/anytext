Dynamic update of the parameter configuration of a Realtime Compute for Apache Flink deployment can make parameter configurations take effect more quickly. This helps reduce business downtime caused by deployment startup and cancellation and facilitates dynamic scaling of TaskManagers and checkpoint-based troubleshooting.

## **Background information**

If you use the traditional parameter update method for a deployment, you must restart the deployment. Issues, such as service interruption, delay in data backtracking, and resource consumption spikes, may occur. This prolongs the deployment cancellation time, which may affect business continuity.

When you use the dynamic parameter update feature, a REST request is sent to a deployment that is running. This feature allows a deployment to reuse existing JobManager and TaskManagers and enables the system to update parameter configurations of the deployment by performing in-place restarts or even update parameter configurations without restarting the deployment. This reduces the cost caused by deployment restart. The dynamic parameter update feature is used together with the resource pre-application and state lazy loading capabilities to accelerate the startup of the deployment after the parameter configurations of the deployment are updated. This reduces the service interruption time caused by parameter update from minutes to seconds. For example, if you perform dynamic scaling for a deployment that performs data read, map, and write operations, you can use the dynamic parameter update feature to significantly reduce the service interruption time. The following figure shows the comparison of the service interruption time between dynamic parameter update and traditional parameter update.

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9065486071/p753576.png)

**Note**

You can dynamically change the value of the Parallelism parameter to perform dynamic scaling of TaskManagers. For more information about how to calculate the number of TaskManagers, see [Configure job resources](/help/en/flink/realtime-flink/user-guide/configure-deployment-resources).

## **Limits**

-   You can dynamically change the values of the following parameters: **Parallelism**, **Checkpointing Interval**, **Checkpointing Timeout time**, and **Min Interval Between Checkpoints**. If you change the value of a parameter that cannot be dynamically updated when you dynamically update the parameter configuration for a deployment, you must restart the deployment to make the new parameter configuration take effect.
    
-   Only Realtime Compute for Apache Flink that uses Ververica Runtime (VVR) 8.0.1 or later supports the dynamic parameter update feature.
    
-   The Parallelism parameter cannot be dynamically updated in expert mode (fine-grained resource configuration).
    

## **Important notes**

-   Dynamic parameter update is an experimental feature. Services may be interrupted when the parameter configuration is dynamically updated. Compared with the traditional parameter update method, dynamic parameter update can significantly shorten the service interruption time. The service interruption time is affected by factors such as the deployment topology and state size. In most cases, the service interruption time is between 5 seconds and 1 minute.
    
-   You can dynamically change the values of parameters and make the parameter configuration take effect only for a deployment that is running.
    
-   You can only dynamically change the parallelism of a node whose parallelism is not specified. If the parallelism of a node is specified, the manual configuration of the parallelism is skipped in Realtime Compute for Apache Flink. This is because the parallelism of a node has special requirements in specific scenarios. For example, the parallelism of the global operator must be 1 and cannot be changed. You must explicitly specify the parallelism for the Kafka source node to prevent the parallelism from exceeding the number of partitions. If you want the node parallelism to be dynamically updated, we recommend that you do not specify the operator parallelism by using the DataStream#setParallelism method or configuring the parallelism parameter of the source or sink operator.
    
-   You can dynamically change the values of the following parameters: **Parallelism**, **Checkpointing Interval**, **Checkpointing Timeout time**, and **Min Interval Between Checkpoints**. The **Hot-update** button appears only after you modify one of these parameters. The change takes effect after you click the button. If you also modify parameters that do not support dynamic updates, restart the deployment to apply changes.
    

## **Procedure**

1.  Go to the **Deployments** page.
    
    1.  Log on to the [Realtime Compute for Apache Flink console](https://realtime-compute.console.alibabacloud.com/regions/cn-shanghai).
        
    2.  Find the workspace that you want to manage and click **Console** in the **Actions** column.
        
    3.  In the left-side navigation pane, choose **O&M** > **Deployments**. On the Deployments page, click the name of the deployment that you want to manage.
        
2.  On the **Configuration** tab, click **Edit** in the upper-right corner of the **Resources** or **Parameters** section.
    
3.  Change the values of the parameters that can be dynamically updated and click **Save**.
    
4.  In the upper-right corner of the Deployments page, click **Hot-update**.
    
    **Important**
    
    You can dynamically change the values of the following parameters: **Parallelism**, **Checkpointing Interval**, **Checkpointing Timeout time**, and **Min Interval Between Checkpoints**. The **Hot-update** button appears only after you change the value of a parameter that can be dynamically updated. You can click the button to make the new parameter configuration take effect. If you change the value of a parameter that cannot be dynamically updated when you dynamically update the parameter configuration for a deployment, you must restart the deployment to make the new parameter configuration take effect.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4083372171/p778692.png)
    
5.  In the message that appears, view the information and click **OK**.
    
    After you click **OK**, an icon that indicates dynamic parameter update appears.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4915486961/p713007.png)
    

## **References**

-   If you want to make the change to the configuration of a parameter that cannot be dynamically updated take effect for a deployment, you can modify the parameter configuration on the **Configuration** tab of the Deployments page for the deployment and then restart the deployment. For more information, see [Configure job deployments](/help/en/flink/realtime-flink/user-guide/configure-a-deployment#section-o8m-6ee-10k) and [Start a job](/help/en/flink/realtime-flink/user-guide/start-a-deployment).
    
-   The automatic tuning feature helps you adjust the deployment parallelism and resource configurations to resolve performance tuning issues. For more information, see [Automatic performance tuning](/help/en/flink/realtime-flink/user-guide/configure-autopilot-and-scheduled-tuning).
    
-   The intelligent deployment diagnostics feature helps you monitor the health status of your deployments, and analyze and diagnose error logs, abnormal operations, and risks. This feature also provides understandable and applicable diagnostics suggestions. For more information, see [Perform intelligent job diagnostics](/help/en/flink/realtime-flink/user-guide/perform-intelligent-deployment-diagnostics).
