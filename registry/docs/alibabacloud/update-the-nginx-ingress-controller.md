After you upgrade a cluster, you may also need to update the NGINX Ingress controller because some APIs in the new Kubernetes version are deprecated. This update is also recommended to ensure stability and security, and access to the latest features.

## Procedure

You must ensure the stability of the NGINX Ingress controller because it is a key component of the data plane.

Incompatibility issues may occur if you update the NGINX Ingress controller to the latest version. This is because the latest version is a major update that includes significant changes, including substantial custom ones. In addition, an in-place update imposes higher potential risks because the incompatibility issues may not immediately occur after the update.

Unlike other components, NGINX Ingress controller is updated in a progressive way. This allows you to check the status of your workloads and roll back the update if exceptions occur.

#### **Phase 1: Precheck**

The system automatically prechecks NGINX Ingress controller before updates to verify compliance with requirements. If it does not meet the prerequisites or its status is unhealthy, you must manually fix the issues before you can update the component.

#### **Phase 2: Verification**

A pod is created for the new version of the NGINX Ingress controller. The pod is used to verify the status and the Ingress rules of the new version. After the pod is created, a proportion of user traffic is distributed to the pod. Analyze the container logs or use Simple Log Service or Managed Service for Prometheus to check whether the user traffic is processed as expected.

After a pod is created for the new version, the update process is paused. After confirming that no exceptions occur to the component and workloads, manually resume the update process. If you identify an exception, roll back the update and delete the pod for the new version.

To roll back an update, modify the `spec.minReadySeconds` and `spec.strategy` parameters in the Deployment.

#### **Phase 3: Release**

A rolling update is performed during the release phase to replace the old version of the NGINX Ingress controller with the new version. After all pods are updated, the update process is paused to allow you to check the status of the component and workloads. After you confirm that no exceptions occur, complete the update. If you identify an exception, roll back the NGINX Ingress controller in all pods to the old version and then end the update.

#### **Phase 4: Rollback (optional)**

The update process is automatically paused during the verification and release phases to allow you to identify exceptions that occur during the update. If you identify an exception, roll back the NGINX Ingress controller to the old version.

## Prerequisites

-   Before you update the NGINX Ingress controller, make sure that you have approaches to monitor the business traffic and identify exceptions. Use Simple Log Service or Managed Service for Prometheus to monitor the business traffic. For more information, see [Analyze and monitor the access log of nginx-ingress-controller](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/analyze-and-monitor-the-access-log-of-nginx-ingress#task-1796525) and [Connect to and configure Managed Service for Prometheus](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-managed-service-for-prometheus-to-monitor-an-ack-cluster#task-2461398).
    
-   Make sure that the status of the NGINX Ingress controller is healthy, all pods of the NGINX Ingress controller are in the Ready state, and no error logs are generated.
    
-   Make sure that no auto scaling rules, such as HorizontalPodAutoscaler (HPA), are used. If auto scaling rules exist, delete them, complete the update, and then recreate the rules.
    
-   Make sure that the LoadBalancer Service runs as expected.
    
-   Do not modify the NGINX Ingress controller or Ingress rules during the update.
    
-   If the version of your NGINX Ingress is earlier than 0.44, take note of the differences in prefix matching when you update it.
    
-   Ensure that the cluster has sufficient nodes to allow the NGINX Ingress pod to be properly created and scheduled. The component is updated using the canary release strategy. First, a pod running the target version of NGINX Ingress is created. After traffic is verified, click **Continue** to trigger the rolling update.
    

## Procedure

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the one you want to manage and click its name. In the left navigation pane, click **Add-ons**.
    
3.  On the **Add-ons** page, find the NGINX Ingress controller and click **Upgrade** in the lower-right part.
    
4.  On the page that appears, confirm the information and click **Start** to initiate an update.
    
    **Note**
    
    You can return to the update page anytime during the update process, or click **Progress** on the **Add-ons** page to view the update progress.
    
5.  A precheck is performed in Phase 1. After the precheck is complete, the update automatically proceeds to Phase 2.
    
    If the NGINX Ingress controller fails to pass the precheck, click **View Details** below **Precheck** to go to the **View Report** page. Then, troubleshoot the issues displayed on this page. After you fix the issues, click **Retry** to reinitiate an update.
    
6.  After the verification phase ends, the update process is paused. Check the status of the NGINX Ingress controller and workloads.
    
    -   Analyze the pod error log to identify the cause of failure to start the pod. After you fix the issue, click **Retry** to perform a verification again.
        
    -   If exceptions occur to your workloads, click **Roll Back** to roll back the update. After the rollback is complete, the update process ends. Click **Upgrade** on the **Add-ons** page to reinitiate an update.
        
    
7.  After the verification is passed, click **Continue** to proceed to the release phase. After the rolling update during the release phase is complete, the update process is paused. Check the status of the NGINX Ingress controller and workloads. If exceptions occur to your workloads, click **Roll Back** to roll back the update. After the rollback is complete, the update process ends. Click **Upgrade** on the **Add-ons** page to reinitiate an update.
    
8.  If no exceptions occur, click **Continue** to complete the update.
    
    **Note**
    
    Make sure that the update process is complete within one week.
