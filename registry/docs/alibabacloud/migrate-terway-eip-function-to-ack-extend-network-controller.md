The elastic IP address (EIP) feature of the Terway network plug-in is discontinued. To use EIPs, use the ack-extend-network-controller component. This topic describes how to migrate EIPs from Terway to ack-extend-network-controller.

## **Prerequisites**

-   An ACK managed cluster or ACK dedicated cluster is created and the cluster uses Terway as the network plug-in. For more information, see [Create an ACK managed cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-an-ack-managed-cluster-2/#task-skz-qwk-qfb) or [Create an ACK dedicated cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-an-ack-dedicated-cluster/#task-skz-qwk-qfb).
    
-   [Resource Access Management (RAM) permissions are granted to use EIPs](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/associate-an-eip-with-a-pod-1#p-8td-5hb-3wi).
    

## **Impact**

**Important**

The migration does not modify the EIP information or affect your business.

-   If your cluster is using the EIP feature of Terway, you can migrate the allocated resources to the EIP controller of ack-extend-network-controller and then migrate the EIPs.
    
-   If your cluster does not use the EIP feature of Terway, you do not need to perform this operation.
    

## **Usage notes**

After you enable the EIP migration feature for Terway, Terway creates a PodEIP CustomResource (CR) for the EIP of each pod in the cluster. PodEIP is a CustomResourceDefinition (CRD) used to manage EIP information related to pods. After EIP migration is enabled, Terway no longer manages EIPs. EIPs are managed by ack-extend-network-controller.

For more information about how to enable the EIP feature for Terway, see the [Automatically create and associate an EIP with a pod](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/associate-an-eip-with-a-pod-1#section-jp3-5or-n4s) section of the "Associate an exclusive EIP with a pod" topic.

## Procedure

1.  Make sure that the ack-extend-network-controller component is not installed in the cluster. If ack-extend-network-controller is installed, uninstall it first.
    
    1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left-side navigation pane, click **Clusters**.
        
    2.  On the **Clusters** page, find the cluster that you want to manage and click its name. In the left-side navigation pane, choose **Applications** > **Helm**.
        
    3.  On the **Helm** page, check whether a component whose **Release Name** is ack-extend-network-controller exists. If ack-extend-network-controller exists, click **Delete** in the **Actions** column of ack-extend-network-controller to uninstall the component.
        
2.  Update Terway to v1.6.0 or later.
    
    For more information about how to update Terway, see [Manage components](/help/en/ack/manage-system-components).
    
3.  Modify the ConfigMap of Terway to enable the EIP migration feature.
    
    **Important**
    
    After you enable the EIP migration feature for Terway, Terway creates a PodEIP CR for the EIP of each pod in the cluster. After EIP migration is enabled, Terway no longer manages EIPs.
    
    1.  Run the following command to modify the ConfigMap of Terway:
        
        ```
        kubectl edit cm eni-config -n kube-system
        ```
        
    2.  Modify the following parameters in the **eni\_conf** ConfigMap:
        
        Parameter
        
        Value
        
        Description
        
        `enable_eip_pool`
        
        "true"
        
        If this parameter is not specified or it is set to `false`, the `EIP` feature is disabled and you do not need to migrate EIPs.
        
        `enable_eip_migrate`
        
        true
        
        If this parameter is set to `true`, the migration feature is enabled.
        
        The following sample code shows an example of the configuration file. Do not modify other parameters.
        
        ```
        # The preceding content is omitted. 
          eni_conf: |
            {
              "version": "1",
        
              "enable_eip_pool": "true",
              "enable_eip_migrate": true,
              "vswitch_selection_policy": "ordered"
            }
        # The following content is omitted.
        ```
        
    
    1.  After you configure the ConfigMap, run the following command to recreate Terway pods:
        
        ```
        kubectl delete pod -n kube-system -l app=terway-eniip
        ```
        
        After the recreated Terway pods are started, Terway automatically migrates the EIPs in the cluster to ack-extend-network-controller.
        
4.  You can check the migration progress in the Terway log. If the EIPs are migrated, `eip migrate finished` is returned.
    
    1.  Run the following command to query the names of the Terway pods:
        
        ```
        kubectl get pods -n kube-system | grep terway
        ```
        
        One or more Terway pod names are returned.
        
    2.  Run the following command to display the log of a Terway pod:
        
        ```
        kubectl logs -n kube-system <pod_name> # Replace <pod_name> with the name of the Terway pod.
        ```
        
        If `eip migrate finished` is returned, all EIPs are migrated.
        
        ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6030010071/p726838.png)
        
5.  Check whether PodEIP CRs are created in the cluster.
    
    Run the following command to query a PodEIP CR. The PodEIP CR uses the same name and namespace as the pod.
    
    ```
    kubectl get podeip -n {namespace} {name} # Replace {namespace} and {name} with the namespace and name of the pod associated with the EIP.
    ```
    
6.  On the **Marketplace** page, install ack-extend-network-controller and enable the **EIP feature**. For more information, see [Install ack-extend-network-controller from the marketplace](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/associate-an-eip-with-a-pod-1#p-vtf-22s-hdk).
    
7.  Run the following command to check whether the status of the PodEIP CR is updated:
    
    ```
    kubectl get podeip -n {namespace} {name} -o yaml # Replace {namespace} and {name} with the namespace and name of the pod associated with the EIP.
    ```
    
    -   If the `status` field is not empty, the EIP feature functions as expected.
        
    -   If the `status` field is empty, check the configurations and logs of ack-extend-network-controller.
        
    
    Expected output:
    
    **Status of the PodEIP CR**
    
    ```
    apiVersion: alibabacloud.com/v1beta1
    kind: PodEIP
    metadata:
      creationTimestamp: "2023-10-24T08:24:37Z"
      finalizers:
      - podeip-controller.alibabacloud.com/finalizer
      generation: 1
      name: example-xxx-xx
      namespace: default
      resourceVersion: "44013"
      uid: 4744a7af-***-***-ad06-***17aecce
    spec:
      allocationID: eip-xxxxxx
      allocationType:
        releaseStrategy: Follow
        type: Auto
    status:
      eipAddress: 47.XX.XX.XX
      internetChargeType: PayByTraffic
      isp: BGP
      networkInterfaceID: eni-xxxxxxx
      podLastSeen: "2023-10-24T08:31:22Z"
      privateIPAddress: 192.XX.XX.XX
      resourceGroupID: rg-xxxxxx
      status: InUse
    ```
    
    The following table describes the parameters.
    
    **Parameter**
    
    **Description**
    
    spec.allocationType.type
    
    -   `Static`: Allocates the EIP with the specified ID to the pod.
        
    -   `Auto`: Automatically allocates an EIP to the pod. The EIP is created by Terway.
        
    
    spec.allocationType.releaseStrategy
    
    -   `Follow`: Releases the EIP when the pod is deleted. If the pod is created by a Deployment, you do not need to retain the EIP for the pod.
        
    -   `TTL`: Releases EIP with a delay after the pod is deleted. If the pod is created by a StatefulSet, you need to retain the EIP for the pod for a period of time.
        
    
8.  Perform the following operations to disable the EIP feature for Terway:
    
    1.  Set the `enable_eip_migrate` parameter to `false` or delete the parameter.
        
    2.  Set the `enable_eip_pool` parameter to `false` or delete the parameter.
        
    3.  Restart the Terway pods.
