You cannot directly use the cGPU component in an ACK Pro cluster after you migrate from an ACK dedicated cluster to the ACK Pro cluster. You must update the cGPU component before you can use GPU scheduling and isolation. This topic describes how to update the cGPU component in an ACK Pro cluster.

## Prerequisites

Your applications are migrated from an ACK dedicated cluster to an ACK Pro cluster. The cGPU component is installed in the ACK dedicated cluster. For more information, see [Hot migration from ACK dedicated clusters to ACK Pro clusters](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/hot-migration-from-ack-dedicated-clusters-to-ack-pro-clusters#task-2069568).

## Procedure

1.  [Obtain the kubeconfig file of the cluster and connect a kubectl client to the cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/obtain-the-kubeconfig-file-of-a-cluster-and-use-kubectl-to-connect-to-the-cluster#task-2076136).
    
2.  Download the job YAML file that is used to change the node label and uninstall the cGPU component. To download the YAML file, click [gpushare-label-change.yaml](https://aliacs-k8s-cn-beijing.oss-cn-beijing.aliyuncs.com/gpushare/gpushare-label-change.yaml).
    
3.  Run the following command to deploy the job that runs the cGPU component:
    
    ```
    kubectl apply -f gpushare-label-change.yaml
    ```
    
4.  Run the following command to check whether the job is deployed:
    
    ```
    kubectl get po -l app=change-gpushare-labels -n kube-system
    ```
    
    Expected output:
    
    ```
    NAME                             READY   STATUS      RESTARTS   AGE
    gpushare-label-migration-v****   0/1     Completed   0          89s
    ```
    
    The output indicates that the job is in the `Completed` state.
    
5.  Install the cGPU component. For more information, see [Install the cGPU component](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/install-and-use-ack-ai-installer-and-the-gpu-inspection-tool#section-0a9-uvi-015).
    
6.  Install the GPU memory inspection tool in the cluster. For more information, see [Install and use the GPU memory inspection tool](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/install-and-use-ack-ai-installer-and-the-gpu-inspection-tool#section-ibc-wm5-2zx).
    

## What to do next

For more information about how to verify the GPU sharing and memory isolation features, see [Examples of using cGPU to share GPUs](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-cgpu-10#task-1997792).
