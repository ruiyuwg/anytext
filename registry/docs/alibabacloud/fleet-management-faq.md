This topic provides answers to some frequently asked questions about Fleet management.

-   [Does Fleet management support multiple Fleet instances?](#section-1oe-lzn-ubq)
    
-   [What are the connectivity requirements on clusters that are associated with a Fleet instance?](#section-2qn-jhf-ydo)
    
-   [Can I use kubectl to manage Fleet instances?](#section-rlf-ipe-uxj)
    
-   [What do I do if I failed to associate a cluster with a Fleet instance and the following error message is displayed: secrets"sec-c58faedb8a7864d3\*\*\*\*-public"not find?](#section-da0-92s-axy)
    
-   [What do I do if an associated cluster fails to be deleted and the status of the namespace is Terminating?](#34d75da0d56lj)
    
-   [How to reassociate a sub-cluster that was not properly deleted to the Fleet?](#7bb99f142demh)
    

## Does Fleet management support multiple Fleet instances?

Yes, Fleet management supports multiple Fleet instances. The default Fleet instance quota provided by Distributed Cloud Container Platform for Kubernetes (ACK One) is 1. If you want to create more Fleet instances, log on to the [Quota Center console](https://quotas.console.alibabacloud.com/products) and request a quota increase.

## What are the connectivity requirements on clusters that are associated with a Fleet instance?

1.  Make sure that the virtual private cloud (VPC) of the Fleet instance can access the API server of the associated cluster.
    
2.  Make sure that the VPC of the associated cluster can access the API server of the Fleet instance.
    
3.  If the Fleet instance and associated cluster belong to different VPCs, you need to use Cloud Enterprise Network (CEN) to connect the VPCs to ensure that the API server of the Fleet instance can communicate with the API server of the associated cluster. You can also enable the public endpoints of the Fleet instance and associated cluster to allow them to communicate over the Internet.
    

## Can I use kubectl to manage Fleet instances?

Yes, you can use kubectl to distribute resources from a Fleet instance. Fleet instances are completely compatible with the Kubernetes API server. You can distribute Kubernetes-native resources from a Fleet instance. You can also use Helm to package an application and then use the Helm CLI to deploy the application to the Fleet instance. ACK One provides the AMC command-line tool, which runs as a kubectl plug-in. You can use AMC to manage applications and jobs in multi-cluster management scenarios. For more information, see [Use AMC](/help/en/ack/distributed-cloud-container-platform-for-kubernetes/user-guide/use-amc#task-2172705).

## What do I do if I failed to associate a cluster with a Fleet instance and the following error message is displayed: secrets"sec-c58faedb8a7864d3\*\*\*\*-public"not find?

### **Issue**

When you associate a cluster with a Fleet instance, the console displays the following error message: **secrets"sec-c58faedb8a7864d3\*\*\*\*-public"not find**.

### **Cause**

The Fleet instance and the cluster to be associated are disconnected. You need to check the connectivity between the Fleet instance and cluster.

### **Solution**

If the Fleet instance and associated cluster belong to different VPCs, you need to use CEN to connect the VPCs to ensure that the API server of the Fleet instance can communicate with the API server of the associated cluster. You can also enable the public endpoints of the Fleet instance and associated cluster to allow them to communicate over the Internet. For more information about CEN, see [Cloud Enterprise Network](https://www.alibabacloud.com/help/cen/).

## **What do I do if an associated cluster fails to be deleted and the status of the namespace is Terminating?**

When you remove an associated cluster, some API Services in the associated cluster may be unavailable. As a result, the Fleet namespaces ack-multiple-clusters and ack-cluster-gateway in the associated cluster remain in the Terminating state and cannot be completely deleted. This prevents the cluster from being associated again. You can use one of the following methods to address this issue:

1.  Run the following command to obtain the JSON file of the namespace:
    
    Replace `<YOUR_NAMESPACE>` in the command with the actual namespace name.
    
    ```
    kubectl get namespace <YOUR_NAMESPACE> -o json > <YOUR_NAMESPACE>.json
    ```
    
2.  Delete the array in the `finalizers` field below `spec` in the JSON file.
    
3.  Run the following command to delete the namespace in the Terminating state:
    
    Replace `<YOUR_NAMESPACE>` in the command with the actual namespace name.
    
    ```
    kubectl replace --raw "/api/v1/namespaces/<YOUR_NAMESPACE>/finalize" -f ./<YOUR_NAMESPACE>.json
    ```
    
4.  Run the `kubectl get ns` command to check whether the namespace in the Terminating state is deleted.
    

## **How to reassociate a sub-cluster that was not properly deleted to the Fleet?**

If you accidentally detele the fleet or clean up the API Server of the Fleet SLB, causing the Fleet to become unusable, you may need to associate sub-clusters that were not properly deleted to the newly created Fleet. Follow the following steps to ensure successful association.

1.  Log on to the [ACK One console](https://cs.console.alibabacloud.com/one). In the left-side navigation pane, choose **Fleet** > **Associated Clusters**.
    
2.  On the **Associate Cluster** page, click the expand button next to the Fleet name, select the new Fleet that you want to switch to, and click **Add Associated Cluster**.
    
3.  In the **Add Associated Cluster** panel, select the cluster to be associated and click **OK**.
    
4.  On the **Associate Cluster** page, find the cluster that you want to disassociate from the Fleet instance and click **Disassociate**.
    
5.  Click **Add Associated Cluster** again, select the cluster to be associated and click **OK**.
