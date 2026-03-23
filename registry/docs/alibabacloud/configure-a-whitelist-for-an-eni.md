In Terway network mode, the Terway Container Network Interface (CNI) plug-in automatically manages all elastic network interfaces (ENIs) on each node. If you need to manage certain ENIs independently -- for example, ENIs used by non-Kubernetes workloads or ENIs attached by third-party tools -- you can configure a tag filter so that Terway and your self-managed ENIs do not conflict.

After you configure a filter, Terway manages only the ENIs whose tags match the filter conditions. ENIs without matching tags are left untouched.

**Warning**

This operation is high-risk. If existing ENIs do not carry the tags specified in the filter, Terway will stop managing them. This can cause pods on affected nodes to lose network connectivity and prevent new pods from being scheduled due to insufficient IP addresses. Make sure you fully understand the impact and test the configuration in a non-production environment before applying it to production clusters.

## Prerequisites

-   An ACK managed cluster that uses the Terway network plug-in is available. For more information, see [Create an ACK managed cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-an-ack-managed-cluster-2/#task-skz-qwk-qfb).
    
-   Terway is V1.5.5 or later. For more information about how to upgrade a component, see [Manage components](/help/en/ack/manage-system-components).
    
-   The ENIs that you want Terway to manage must already have the required tags. Any ENI without a matching tag is excluded from Terway management after the filter takes effect.
    

## Procedure

### Step 1: Add the tag filter to the Terway ConfigMap

1.  Run the following command to open the Terway configuration for editing:
    
    ```
       kubectl edit cm -n kube-system eni-config
    ```
    
2.  In the `eni_conf` section, add the `"eni_tag_filter"` field. This field specifies the tags that an ENI must have for Terway to manage it. In this example, only ENIs tagged with the key `creator` and value `terway` are managed by Terway. The following example shows the complete `eni_conf` configuration with the tag filter applied:
    
    ```
       "eni_tag_filter":  { "creator": "terway" }
    ```
    
    ```
       eni_conf: |
           {
             "eni_tag_filter":  { "creator": "terway" },
             "ip_stack": "ipv4",
             "vswitch_selection_policy": "ordered"
           }
    ```
    

**Important**

Make sure that every ENI you want Terway to manage carries the tags specified in the filter. ENIs without matching tags will not be managed by Terway.

-   To modify tags on existing ENIs, see [Categorize and manage ENIs](/help/en/ecs/user-guide/modify-the-tags-of-an-eni).
    
-   To configure tags that Terway applies automatically when it creates new ENIs, see [Customize Terway configuration parameters](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/terway-configuration-parameters).
    

### Step 2: Restart Terway

Delete the existing Terway pods to restart them with the updated configuration:

```
kubectl delete pod -nkube-system -l app=terway-eniip
```

Expected output:

```
pod "terway-eniip-XXX" deleted
```

### Step 3: Verify the configuration

1.  Check that the terway-eniip pods are running.
    
    ```
       kubectl get pods -n kube-system -l app=terway-eniip
    ```
    
    Expected output:
    
    ```
       NAME                 READY   STATUS    RESTARTS   AGE
       terway-eniip-XXX   2/2     Running   0          19h
    ```
    
2.  Confirm that the tag filter is active by checking the Terway initialization logs.
    
    ```
       kubectl logs -nkube-system terway-eniip-XXX -c terway-init
    ```
    
    If the output contains the following content, the filter is in effect:
    
    ```
       ENITagFilter:map[creator:terway]
    ```
    

### Step 4: Add or re-add nodes

Add a new node or re-add an existing node to the cluster so that the filter applies to ENIs on that node.
