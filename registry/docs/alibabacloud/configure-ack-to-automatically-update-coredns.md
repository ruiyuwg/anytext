This topic describes the pre-upgrade checks and optimizations for CoreDNS, and the steps to perform an automatic upgrade.

## Prerequisites

Connect to your cluster using the kubectl tool. For more information, see [Connect to a cluster using kubectl](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/obtain-the-kubeconfig-file-of-a-cluster-and-use-kubectl-to-connect-to-the-cluster#task-2076136).

## CoreDNS upgrade process

-   During a CoreDNS upgrade, ACK updates the CoreDNS deployment using the RollingUpgrade mode. In this mode, legacy pods are deleted only after the new CoreDNS pods are running. The number of CoreDNS pods remains unchanged after the upgrade. However, if legacy pods are still processing DNS resolution requests during the upgrade, the requests may fail. To ensure the availability of the DNS service in your cluster, you can use the NodeLocal DNSCache component. For more information, see [Use the NodeLocal DNSCache component](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-nodelocal-dnscache).
    
-   If you previously customized the YAML template by modifying fields such as tolerations, memory and CPU resource requests, and limits, these customizations will be overwritten. In this case, you must manually upgrade CoreDNS or re-apply your customizations to the YAML template after the automatic upgrade is complete. For more information about how to perform a manual upgrade, see [Manually update unmanaged CoreDNS](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/manually-update-coredns#task-2166246).
    
-   If you use IPVS as the kube-proxy load balancing mode, cluster-wide DNS resolution timeouts or failures might occur within five minutes after the CoreDNS upgrade is complete. To mitigate the impact of this IPVS bug, you can use one of the following methods:
    
    -   Modify the IPVS UDP session persistence timeout in kube-proxy. For more information, see [How do I modify the IPVS UDP session persistence timeout in kube-proxy?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-container-networks#section-vkv-808-6wc).
        
    -   Use NodeLocal DNSCache. For more information, see [Improve stability with NodeLocal DNSCache](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/dns-best-practice#section-emg-1v6-a91).
        
    -   If the cluster nodes use Alibaba Cloud Linux 2, upgrade the node kernel to 4.19.91-25.1.al7.x86\_64 or a later version. For more information about the release notes of Alibaba Cloud Linux 2, see [Alibaba Cloud Linux 2 image release notes](/help/en/alinux/product-overview/release-notes-for-alibaba-cloud-linux2#concept-2416516).
        
    -   If the cluster nodes use other operating systems, configure the UDP timeout for the IPVS cluster to avoid this issue. For more information, see [Configure the UDP timeout for an IPVS cluster](#section-m9z-3lo-iv4).
        
    -   If you do not want to perform the preceding operations, you can connect all application containers to NodeLocal DNSCache before you upgrade CoreDNS. For more information, see [Use the NodeLocal DNSCache component](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-nodelocal-dnscache#task-2008363).
        
    
-   The upgrade process takes about 2 minutes. The actual time required may vary based on the number of CoreDNS replicas in the cluster. The upgrade uses a graceful termination policy where legacy replicas are not immediately stopped. This ensures that DNS resolution for applications is not affected. If the upgrade fails, the system automatically performs a rollback within 10 minutes.
    

## Enable the `ready` plugin

If you have manually upgraded CoreDNS to a version later than 1.5.0, check whether the `ready` plugin is enabled in the CoreDNS configuration file. If the `ready` plugin is not enabled, you must enable the `ready` plugin before you perform an automatic upgrade. Otherwise, CoreDNS will fail to start.

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, click the name of the one you want to change. In the left-side navigation pane, choose **Configurations** > **ConfigMaps**.
    
3.  On the **ConfigMaps** page, set **Namespace** to kube-system at the top of the page. Then, find coredns and click **Edit YAML** in the **Actions** column.
    
4.  In the **Edit YAML** panel, check for the `ready` field. If the field does not exist, add the `ready` field and click **OK**.
    
    ```
    apiVersion: v1
    data:
     Corefile: |
      .:53 {
        errors
        health {
          lameduck 15s
        }
        ready # If this line does not exist, add it. Make sure the indent is consistent with kubernetes.
        kubernetes cluster.local in-addr.arpa ip6.arpa {
          pods verified
          fallthrough in-addr.arpa ip6.arpa
        }
        prometheus :9153
        forward . /etc/resolv.conf {
          max_concurrent 1000
        }
        cache 30
        loop
        log
        reload
        loadbalance
      }
    ```
    
5.  Run the following command to check whether the CoreDNS configuration is loaded to the standard output of the CoreDNS pod. The new configuration is hot-reloaded in about 30 s.
    
    ```
    kubectl logs coredns-78d4b8bd88-n6wjm -n kube-system
    ```
    
    The expected output contains `plugin/reload` information, which indicates that the CoreDNS configuration is loaded.
    

## Start the upgrade

You can upgrade the CoreDNS version from the Component Management page in the ACK console.

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the one you want to manage and click its name. In the left navigation pane, click **Add-ons**.
    
3.  On the **Add-ons** page, search for CoreDNS and click **Upgrade**.
    

## Configure the UDP timeout for an IPVS cluster

If your cluster uses the kube-proxy IPVS mode, the IPVS session persistence policy might cause intermittent DNS resolution failures across the cluster for five minutes after the upgrade. To reduce the number of resolution failures, you can reduce the IPVS UDP session persistence timeout to 10 seconds. If your cluster has UDP-based services, evaluate the potential impact of this operation before you proceed.

> If your cluster is not an IPVS cluster, you can ignore this section. For more information about how to check the kube-proxy proxy mode, see [View cluster information](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/view-cluster-information#section-n58-560-ejb).

For Kubernetes 1.18 or later clusters

Using the console

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, click the name of the one you want to change. In the left-side navigation pane, choose **Configurations** > **ConfigMaps**.
    
3.  On the **ConfigMaps** page, select the **kube-system** namespace. Find the kube-proxy-worker ConfigMap and click **Edit YAML** in the **Actions** column.
    
4.  In the **Edit YAML** panel, add `udpTimeout: 10s` under the ipvs field and click **OK**.
    
    ```
    apiVersion: v1
    data:
      config.conf: |
        apiVersion: kubeproxy.config.k8s.io/v1alpha1
        kind: KubeProxyConfiguration
        # Other irrelevant fields are omitted.
        mode: ipvs
        # If the ipvs key does not exist, add it.
        ipvs:
          udpTimeout: 10s
    ```
    
5.  Recreate all pods named kube-proxy-worker.
    
    1.  On the cluster details page, in the navigation pane on the left, select **Workloads** > **DaemonSets**.
        
    2.  In the DaemonSet list, find and click **kube-proxy-worker**.
        
    3.  On the **kube-proxy-worker** page, click the **Pods** tab. In the row of a pod, choose **More** > **Delete**, and then click **OK**.
        
        Repeat this step to delete all pods. After the pods are deleted, the system automatically recreates them.
        
6.  Verify that the UDP timeout is configured.
    
    1.  Run the following command to install **ipvsadm**.
        
        **ipvsadm** is a management tool for the IPVS module. For more information, see [ipvsadm](https://software.opensuse.org/package/ipvsadm).
        
        ```
        sudo yum install -y ipvsadm
        ```
        
    2.  Run the following command on any ECS node in the cluster and check the third number in the output.
        
        ```
        sudo ipvsadm -L --timeout
        ```
        
        If the third number in the output is 10, the UDP timeout for the IPVS cluster is successfully changed.
        
        > After the change is successful, wait at least five minutes before you proceed with the next step.
        

Using the command line

1.  Run the following command to edit the kube-proxy-worker configuration file.
    
    ```
    kubectl -n kube-system edit configmap kube-proxy-worker
    ```
    
2.  In the kube-proxy configuration file, add `udpTimeout: 10s` under the ipvs field. Then, save the file and exit.
    
    ```
    apiVersion: v1
    data:
      config.conf: |
        apiVersion: kubeproxy.config.k8s.io/v1alpha1
        kind: KubeProxyConfiguration
        # Other irrelevant fields are omitted.
        mode: ipvs
        # If the ipvs key does not exist, add it.
        ipvs:
          udpTimeout: 10s
    ```
    
3.  Run the following commands to recreate all pods named kube-proxy-worker.
    
    1.  Run the following command to view information about the existing pods.
        
        ```
        kubectl -n kube-system get pod -o wide | grep kube-proxy-worker
        ```
        
    2.  Run the following command to delete the pods that you found in the previous step. The system automatically recreates the pods named kube-proxy-worker.
        
        ```
        kubectl -n kube-system delete pod <kube-proxy-worker-****>
        ```
        
        > Replace <kube-proxy-worker-\*\*\*\*> with the names of the pods that you found in the previous step.
        
4.  Verify that the UDP timeout is configured.
    
    1.  Run the following command to install **ipvsadm**.
        
        **ipvsadm** is a management tool for the IPVS module. For more information, see [ipvsadm](https://software.opensuse.org/package/ipvsadm).
        
        ```
        sudo yum install -y ipvsadm
        ```
        
    2.  Run the following command on any ECS node in the cluster and check the third number in the output.
        
        ```
        sudo ipvsadm -L --timeout
        ```
        
        If the third number in the output is 10, the UDP timeout for the IPVS cluster is successfully changed.
        
        > After the change is successful, wait at least five minutes before you proceed with the next step.
        

For Kubernetes 1.16 or earlier clusters

The kube-proxy component in clusters that run these versions does not support the udpTimeout parameter. You can use Operation Orchestration Service (OOS) to run the `ipvsadm` command in batches on all cluster nodes to adjust the UDP timeout configuration. The command is as follows:

```
sudo yum install -y ipvsadm
sudo ipvsadm -L --timeout > /tmp/ipvsadm_timeout_old
sudo ipvsadm --set 900 120 10
sudo ipvsadm -L --timeout > /tmp/ipvsadm_timeout_new
diff /tmp/ipvsadm_timeout_old /tmp/ipvsadm_timeout_new
```

For more information about batch operations in OOS, see [Batch operation instances](/help/en/oos/getting-started/manage-multiple-instances#topic542).

## What to do next

After the upgrade is complete, you can optimize and configure CoreDNS. For more information, see [Optimize CoreDNS configurations](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/dns-best-practice#section-7at-thy-66d).

## References

-   [In IPVS mode, kube-proxy doesn't handle graceful termination of UDP flows](https://github.com/kubernetes/kubernetes/issues/71514)
    
-   [CoreDNS](/help/en/ack/product-overview/coredns#concept-2071838)
    
-   [Container network FAQ](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-container-networks#task-2011665)
