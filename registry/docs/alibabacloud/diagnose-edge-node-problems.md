When managing edge nodes, you may encounter issues such as connection and upgrade failures. This topic provides answers to some frequently asked questions about edge nodes.

## How do I handle edge node connection failures?

The following table describes how to handle a script execution failure. If your issue is not described in the following table, collect the node diagnostic information and [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm). For more information about how to collect edge node diagnostic information, see the [How do I collect the diagnostic information about nodes in an ACK Edge cluster?](#c5db371f42f3l) section of this topic.

**Error message**

**Cause of failure**

**Suggested solution**

The os XXX unsupport

The operating system version of the edge node is not supported.

For more information about the supported operating system versions, see [Add an edge node](/help/en/ack/ack-edge/user-guide/add-an-edge-node).

Invalid nodeName

The node name is invalid.

-   The node name can contain lowercase letters, hyphens (-), and periods (.).
    
-   The node name must be 1 to 253 characters in length.
    
-   The node name cannot start with localhost.
    

Node route overlaps with service cidr

The route of the node conflicts with the pod CIDR block or Service CIDR block of the cluster.

Recreate the cluster and reconfigure the pod CIDR block or Service CIDR block. Make sure that these CIDR blocks do not conflict with the NameServer address and route of the node.

response error msg: TOKEN\_EXPIRED

The token for connecting the node to the cloud expired.

-   Generate another script to connect the node to the cloud.
    
-   Check whether the system clock of the node is normal.
    

A node named XXX is already exist in the cluster

A node with this name already exists in the cluster.

Remove the existing node with the same name from the cluster.

error run phase join-node: failed to get cluster info: failed to get cluster-info configmap, Get "https://xx.xxx.xx.xx:6443/api/v1/namespaces/kube-public/configmaps/cluster-info": dial tcp xx.xxx.xx.xx:6443: i/o timeout

Cluster information failed to be retrieved.

When edgeadm connects to an edge node, edgeadm must access an API server by using the IP address. Check whether the access control list (ACL) rules configured for the SLB instance of the API server blocks the IP address.

error run phase join-node: Install edge-hub failed: Copy file /tmp/edge-hub to /usr/bin/edge-hub fail: open /usr/bin/edge-hub: text file busy | 40009 | 40009

The installation of edge-hub failed because the binary file for edge-hub already exists on the node.

Run the `edgeadm reset` command to clear the data on the node, and then execute the node connection script again.

error run phase post-check: timed out waiting for the condition

The system components failed to start up.

1.  Download the edgeadm tool again and run the `edgeadm reset` command to re-install the tool. Make sure that the latest version of edgeadm is used.
    
2.  Check whether the edge node can access the relevant public addresses as expected. For more information about the public addresses, see [Configure endpoints and IP routing for edge nodes](/help/en/ack/ack-edge/user-guide/network-configuration-for-public-network-access).
    
3.  Collect the diagnostic information about the node and [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm) for further assistance. For more information about how to collect diagnostic information, see the [How do I collect the diagnostic information about nodes in an ACK Edge cluster?](#c5db371f42f3l) section of this topic.
    

## What do I do if an edge node fails to be upgraded when I upgrade an ACK Edge cluster?

When you [update an edge node pool](/help/en/ack/ack-edge/user-guide/upgrade-ack-edge-cluster#ac1e6a1b58aza), if the `This node has been upgraded successfully` message is not returned, troubleshoot the issue by referring to the solutions that are described in the following table.

**Error message**

**Cause of failure**

**Suggested solution**

edgeadm version xxxx does not match cluster version

The version of the upgrade tool is inconsistent with that of the cluster.

1.  Check whether the control plane of the cluster has been upgraded.
    
2.  Check whether the `TARGET_CLUSTER_VERSION` parameter is correctly specified.
    

node has already been upgraded to xxx

The version of the node is already updated to the desired version.

If specific components on the node have not been upgraded, retain the logs and [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm) for assistance.

kubelet target version xxxx does not match cluster version xxxx

The version of kubelet is inconsistent with the version of the control plane of the cluster.

1.  If the `kubelet-version` parameter is specified, check whether the value of the parameter is consistent with the version of the control plane of the cluster.
    
2.  If this parameter is left empty, [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm) for support.
    

Parameter currentVersion cann't null

An earlier version of edgeadm is used.

1.  Check whether edgeadm of the latest version is used.
    
2.  You can update a cluster from Kubernetes 1.18 to 1.20, or from Kubernetes 1.20 to 1.22.
    

upgrade kubelet failed at phase install, recover to previous state.

error run phase upgrade: xxxx

The cluster fails to be upgraded and has been automatically rolled back to the previous state. The node status is not affected.

Retain the logs and [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm) for support.

upgrade kubelet failed at phase install, recover to previous state

recover kubelet failed, err: xxx

error run phase upgrade: xxxx

The cluster fails to be upgraded and has been automatically rolled back to the previous state. The node status is affected.

Retain the logs and [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm) for support.

## How do I collect the diagnostic information about nodes in an ACK Edge cluster?

If an exception occurs on a node in an ACK Edge cluster, perform the following steps to collect the diagnostic information about the node for data analysis:

1.  Log on to the abnormal node in the ACK Edge cluster.
    
2.  Run the following command to download the diagnostic script.
    
    ```
    curl -o /usr/local/bin/diagnose_edge_node.sh https://aliacs-k8s-cn-hangzhou.oss-cn-hangzhou.aliyuncs.com/public/diagnose/diagnose_k8s.sh
    ```
    
3.  Run the following command to make the diagnostic script executable:
    
    ```
    chmod u+x /usr/local/bin/diagnose_edge_node.sh
    ```
    
4.  Run the following command to switch to the specified directory:
    
    ```
    cd /usr/local/bin/
    ```
    
5.  Run the following command to run the diagnostic script:
    
    ```
    ./diagnose_edge_node.sh
    ```
    
    Expected output: Each time you run the diagnostic script, a file with a different name is generated. In this example, the log file is named `diagnose_1578310147.tar.gz`.
    
    ```
    ......
    + echo 'please get diagnose_1578310147.tar.gz for diagnostics'
    please get diagnose_1578310147.tar.gz for diagnostics
    + echo 'Submit the file named diagnose_1578310147.tar.gz to request technical support.'
    Submit the file named diagnose_1578310147.tar.gz to request technical support.
    ```
    
6.  Run the `ll` command to verify that the diagnostic report named `diagnose_1578310147.tar.gz` exists.
