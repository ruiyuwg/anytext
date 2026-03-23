The Raven component in ACK Edge clusters provides cross-domain network communication capabilities for cloud-edge O&M. When you configure the Raven component, you can set the cloud-edge communication mode to proxy mode or tunnel mode. You can also configure the access control whitelist to allow the specified edge gateway nodes to establish tunnels to the cloud.

**Note**

If your cluster uses an Express Connect circuit to establish tunnels for cloud-edge network communication, you can uninstall Raven.

## **Prerequisites**

-   An ACK Edge cluster that runs Kubernetes 1.26.3 or later is created. For more information, see [Create an ACK Edge cluster](/help/en/ack/ack-edge/user-guide/create-an-ack-edge-cluster-1#task-skz-qwk-qfb).
    
-   To enable the proxy mode, make sure that the security policy on the edge node side does not block TCP ports whose port numbers are in a range of \[10280,10285).
    
-   To enable the tunnel mode, make sure that the security policy on the edge node does not block UDP port 4500 and that UDP port 8472 is enabled.
    
-   To establish a reverse tunnel to the cloud, make sure that the security policy on the edge node does not block the elastic IP address (EIP) that is associated with the Raven component.
    
    For more information about how to view the EIP that is associated with Raven, see the [Usage notes](#8b33d2989bxj5) section of this topic.
    

## **Usage notes**

-   The Raven component provides the cross-domain communication capability based on cloud service resources such as EIPs, Classic Load Balancer (CLB) instances, and access control lists (ACLs).
    
-   The managed component Edge-Controller-Manager (ECM) purchases cloud service resources such as CLB instances, EIPs, and ACLs based on whether you enable the cross-domain communication capability of Raven. If you disable or remove the cross-domain communication capability of Raven, ECM releases the related cloud service resources. You can change the specifications of cloud service resources based on your business requirements.
    
    The preceding cloud resources are named in the format of `k8s/raven-agent-ds/kube-system/{CLUSTER_ID}`. You cannot modify the resource names. Otherwise, ECM may fail to identify the resources, which may cause resource leakage.
    
    Do not delete the preceding resources without authorization. Otherwise, the cross-domain communication capability of Raven may become unavailable.
    
-   The cloud resource information is stored in the kube-system/raven-cfg ConfigMap. Do not manually delete the ConfigMap.
    
    View the configuration content of the raven-cfg ConfigMap
    
    ```
    apiVersion: v1
    kind: ConfigMap
    metadata:
      name: raven-cfg
      namespace: kube-system
    data:
      acl-id: acl-xxx
      acl-entry: ""
      eip-id: eip-xxx
      eip-ip: 47.XX.XX.47
      enable-l3-tunnel: "false"
      enable-l7-proxy: "true"
      loadbalancer-id: lb-xxx
      loadbalancer-ip: 192.XX.XX.1
    ```
    

## **Set the communication mode and configure the access control whitelist** for **raven-agent-ds**

By default, the raven-agent-ds component is automatically installed in ACK Edge clusters and the proxy mode is enabled. You can manually set the communication mode to proxy mode or tunnel mode and configure the access control whitelist for edge gateway nodes.

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left-side navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the cluster that you want to manage and click its name. In the left-side navigation pane, choose **Operations** > **Add-ons**.
    
3.  Find raven-agent-ds, click **Configuration**, and then configure the parameters. The following table describes the parameters.
    
    **Parameter**
    
    **Description**
    
    **controller**
    
    -   **Enable Proxy Mode** (recommended): In this mode, reverse tunneling is used for cross-domain host communication.
        
    -   **Enable Tunnel Mode**: Tunnel mode only supports node pools with inter-node connection. In this mode, VPN tunnels are created for cross-domain container communication and metrics of cloud-edge containers are monitored.
        
        **Important**
        
        This feature is in public preview. Data loss may occur during cross-domain communication through the Internet. Do not use this feature to transmit business-critical data. If you encounter issues when you use the tunnel mode or have any suggestions, [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm).
        
    
    For more information about the two communication modes, see the [Communication mode](/help/en/ack/ack-edge/user-guide/cloud-edge-communication-component-raven-overview#3492224073nor) section of the "Overview of the cloud-edge communication component Raven" topic.
    
    **accessControlListEntry**
    
    The entries in the access control whitelist. Edge gateway nodes in the whitelist can establish tunnels to the cloud with enhanced network security.
    
    Specify edge gateway nodes by CIDR blocks or IP addresses. If you specify IP addresses, set the mask length to `/32`. Separate multiple CIDR blocks or IP addresses with commas (,). If you leave this parameter empty, all source IP addresses are allowed by CLB to access the services in the cloud.
    
    If you add an ACL entry, make sure that `100.64.0.0/10` is added, which is used for CLB health checks.
    

## **Customize gateway nodes by using labels**

The Raven component establishes tunnels among gateway nodes for cross-domain communication. By default, the Raven component randomly selects nodes from a node pool as gateway nodes. We recommend that you run the following command to specify specific nodes as the gateway nodes to establish a stable O&M channel:

```
kubectl label node node-xxx raven.openyurt.io/gateway-node=true
```

## **References**

-   For more information about Raven, such as the components of Raven and the supported communication modes, see [Cross-region O&M communication component Raven](/help/en/ack/ack-edge/user-guide/cloud-edge-communication-component-raven-overview).
    
-   ACK will continuously update raven-agent-ds for ACK Edge clusters. For more information about the release notes, see [raven-agent-ds](/help/en/ack/product-overview/raven-agent-ds).
