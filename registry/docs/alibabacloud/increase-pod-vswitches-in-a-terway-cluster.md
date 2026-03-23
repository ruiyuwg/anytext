In Terway network mode, you must scale out vSwitches when IP resources of an existing vSwitch are insufficient or when you need to add a new vSwitch for a Pod CIDR block. This topic describes how to add a vSwitch to provide more IP addresses for your ACK cluster.

## Limits

-   Ensure the vSwitch you add is in the same zone as your nodes. If no vSwitch in your list covers the node's zone, Terway uses the vSwitch associated with the primary ENI.
    
-   You cannot change the vSwitch configuration for an existing Elastic Network Interface (ENI). After you update the vSwitch for Pods, add new nodes to utilize the updated configuration.
    

## When changes to the vSwitch for Pods take effect

### Existing nodes

Terway applies new vSwitch settings only when it creates a new ENI. Therefore, new settings do not take effect immediately on existing nodes in these cases:

1.  An ENI is in use. Terway does not delete or replace an ENI if Pods are still running on it or if it is a trunk ENI.
    
2.  The ENI limit is reached. The instance type of the node supports a maximum number of ENIs, and no more ENIs can be created.
    

### New nodes

For nodes added to the cluster after the update, Terway selects a vSwitch based on the current configuration (cluster, node, or pod level) and creates ENIs accordingly. New settings take effect immediately.

## vSwitch selection strategy and IP resource balancing

When multiple vSwitches are configured for a single zone, Terway uses different vSwitch selection strategies to control how vSwitches are assigned when ENIs are created. For more information about configuration options, see [Customize Terway configuration parameters](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/terway-configuration-parameters).

### Default strategy: `ordered`

-   Terway sorts vSwitches by remaining IP count in descending order and selects the vSwitch with the most available IP addresses first. This strategy works well for most scenarios.
    
-   Edge case: During bursts of Pod creation, which trigger batch ENI creation, all new ENIs may be assigned to the same vSwitch with the most IP addresses. This leads to uneven IP distribution and may exhaust the IP pool of that vSwitch.
    

### Solutions

To balance IP consumption across multiple vSwitches, use one of the following methods:

#### Solution 1: Switch to the `random` strategy

-   Change the vSwitch selection strategy to `random`.
    
-   Terway randomly selects a vSwitch from the available list to create each ENI. This helps distribute IP address usage evenly.
    

#### Solution 2: Assign vSwitches by node pool

-   You can use [node-level network configuration](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-network-settings-for-individual-nodes-in-a-terway-cluster) to group nodes into separate node pools.
    
-   For each zone, bind a unique Pod vSwitch to each node pool.
    

## Signs of insufficient vSwitch IP resources

In Terway network mode, insufficient vSwitch IP resources show the following signs:

-   If Pods fail to start and remain in the `ContainerCreating` state, you can run the following command to check the Terway logs on the node where the Pod is scheduled:
    
    ```
    kubectl logs --tail=100 -f terway-eniip-***** -n kube-system -c terway
    ```
    
    If the output includes an error such as the one below, the vSwitch used by Terway on that node has no available IP addresses. As a result, the Pod stays in `ContainerCreating` because of a lack of IP resources.
    
    ```
    time="20**-03-17T07:03:40Z" level=warning msg="Assign private ip address failed: Aliyun API Error: RequestId: 2095E971-E473-4BA0-853F-0C41CF52651D Status Code: 403 Code: InvalidVSwitchId.IpNotEnough Message: The specified VSwitch \"vsw-***\" has not enough IpAddress., retrying"
    ```
    
-   Log on to the [Virtual Private Cloud (VPC) console](https://vpc.console.alibabacloud.com/). In the navigation pane on the left, click **vSwitch** and check the **Available IP Addresses** for the vSwitch. If the count is 0, no IP addresses are available.
    

## Modify the vSwitch for Pods

Adding a vSwitch through the console is simpler than using kubectl. We recommend that you upgrade the Terway add-on to the latest version and then configure the vSwitch for Pods in the console.

-   Terway v1.4.4 and later support both console and kubectl methods to configure the vSwitch for Pods.
    
-   Terway versions earlier than v1.4.4 support only the kubectl method.
    

### Console method

1.  You can create a new vSwitch in the [Virtual Private Cloud (VPC) console](https://vpc.console.alibabacloud.com/) . The new vSwitch must be in the same region as the vSwitch that has insufficient IP addresses. For instructions, see [Create and manage vSwitches](/help/en/vpc/user-guide/create-and-manage-vswitch#task-1012575).
    
    **Note**
    
    Pod density continues to increase. To meet growing IP address demand, create vSwitches for Pods with a subnet mask of /19 or smaller. This ensures at least 8,192 IP addresses per CIDR block.
    
2.  Log on to the [Container Service Management Console](https://cs.console.alibabacloud.com) . In the navigation pane on the left, click **Clusters**.
    
3.  On the **Clusters** page, click the name of your cluster. In the navigation pane on the left, click **Add-ons**.
    
4.  On the **Add-ons** page, click the **Network** tab. Select the Terway add-on you want to upgrade and click **Upgrade**. After the upgrade completes, click **Configuration**.
    
    If the **Upgrade** button is missing, the Terway add-on is already at the latest version.
    
    **Note**
    
    Changes made to deployed add-ons through other methods will be overwritten when the add-on is redeployed.
    
    ![配置](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8191644861/p636130.png)
    
5.  On the **Parameters** page for terway-eniip, select your desired vSwitch in the **PodVswitchId** section. Leave all other parameters at their default values.
    
6.  After you finish configuring the parameters, click **OK**.
    

### kubectl method

1.  You can create a new vSwitch in the [Virtual Private Cloud (VPC) console](https://vpc.console.alibabacloud.com/) . The new vSwitch must be in the same region as the vSwitch that has insufficient IP resources. For instructions, see [Create and manage vSwitches](/help/en/vpc/user-guide/create-and-manage-vswitch#task-1012575).
    
    **Note**
    
    Pod density continues to increase. To meet growing IP address demand, create vSwitches for Pods with a subnet mask of /19 or smaller. This ensures at least 8,192 IP addresses per CIDR block.
    
2.  Run the following command to add a vSwitch to the Terway ConfigMap configuration.
    
    ```
    kubectl edit cm eni-config -n kube-system
    ```
    
    Add the new vSwitch as shown in the following example:
    
    ```
    eni_conf: |
      {
        "version": "1",
        "max_pool_size": 25,
        "min_pool_size": 10,
        "vswitches": {"cn-shanghai-f":["vsw-AAA", "vsw-BBB"]},
        "service_cidr": "172.21.0.0/20",
        "security_group": "sg-CCC"
      }
    ```
    
    In this example, `vsw-BBB` is added to the `vswitches` section. `vsw-AAA` is the existing vSwitch with insufficient IP resources.
    
3.  You can run the following command to delete all Terway pods. The system automatically recreates them.
    
    -   For the ENI multi-IP scenario, you can execute the following command to delete all Terway pods:
        
        ```
        kubectl delete -n kube-system pod -l app=terway-eniip
        ```
        
    -   For the ENI single-IP scenario, you can execute the following command to delete all Terway pods:
        
        ```
        kubectl delete -n kube-system pod -l app=terway-eni
        ```
        
4.  You can run the following command to verify that all Terway pods are running:
    
    ```
    kubectl get pod -n kube-system  | grep terway
    ```
    
5.  You can create a Pod and verify that it receives an IP address from the newly added vSwitch.
    
    **Note**
    
    After you modify the vSwitch configuration, the new settings apply only to newly created ENIs. Existing ENIs continue to use the original configuration. To apply the new settings to all nodes, perform a rolling restart of your nodes.
    

## FAQ

### **After adding a vSwitch in Terway mode, why can’t Pods access the Internet?**

**Issue**: You manually added a vSwitch because Pods lacked IP resources. After adding the vSwitch, the cluster cannot access the Internet.

**Cause**: The vSwitch assigned to the Pod IP address does not support public network access.

**Solution**: You can use the SNAT feature of NAT Gateway to configure a public SNAT rule for the vSwitch. For more information, see [Enable Internet access for your cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/enable-an-existing-ack-cluster-to-access-the-internet#task-1936294).

### **The IP address assigned to a Pod is outside the configured vSwitch CIDR block. What should I do?**

**Issue**: In Terway mode, the IP address assigned to a Pod falls outside the CIDR block of the configured vSwitch.

**Cause**: Pod IP addresses come from the VPC address space and are assigned via ENIs. You can specify a vSwitch only when creating a new ENI. Once an ENI exists, all subsequent Pods on it receive IP addresses from its associated vSwitch. This issue commonly occurs in two scenarios:

-   You added a node to the cluster, but the node was previously used in another cluster. When you removed the node from the previous cluster, you did not drain the Pods. As a result, leftover ENIs from the previous cluster remain on the node.
    
-   You manually added or modified the vSwitch configuration for Terway. Because existing ENIs still use the old configuration, new Pods may continue to receive IP addresses from those ENIs.
    

**Solution**: You can add new nodes or perform a rolling restart of existing nodes to ensure the new configuration takes effect on fresh nodes.

### **After configuring multiple vSwitches, IP consumption is unbalanced across vSwitches. Why?**

**Issue**: In Terway mode, when multiple Pod vSwitches are configured for the same zone, IP address consumption becomes highly unbalanced—some vSwitches run out of IP addresses while others have many unused IP addresses.

**Cause**: Terway selects a vSwitch only when creating an ENI. Once created, the ENI remains bound to that vSwitch. All future Pod IP addresses on that ENI come from the same vSwitch.

By default, Terway uses the `ordered` strategy, which picks the vSwitch with the most remaining IP addresses. However, during rapid scaling, such as when deploying many nodes or replicas concurrently, multiple ENI creation requests may execute the selection logic at nearly the same time. Because the remaining IP counts have not changed significantly yet, all requests may pick the same vSwitch, causing imbalance.

**Solution**: You can choose a strategy based on your scenario:

1.  For existing node pools with unbalanced IP address usage and near-exhausted vSwitches:
    
    -   Manually roll (perform a rolling restart of) some existing nodes to release their ENIs.
        
    -   Releasing ENIs returns their IP addresses to the vSwitch, helping balance usage.
        
2.  For new nodes or new deployments:
    
    Change the Terway vSwitch selection policy `vswitch_selection_policy` from `ordered` to `random`. This causes Terway to randomly select a vSwitch when creating each ENI, which helps prevent hotspots. For more information, see [Customize Terway configuration parameters](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/terway-configuration-parameters).
    
3.  Achieving determinism and isolation  
    If you require strict control over network resource allocation, you can configure [node-level network configuration](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-network-settings-for-individual-nodes-in-a-terway-cluster) for each node pool individually to ensure that only one Pod vSwitch is associated within each zone. This creates a one-to-one mapping between vSwitches and node pools and completely avoids IP address allocation contention.  
      
    

## References

-   [Use the Terway network plug-in](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/work-with-terway#task-1797447)
    
-   [Use Network Policy](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-network-policies#task-1797447)
