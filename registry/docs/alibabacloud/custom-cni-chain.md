Container Network Interface (CNI) is a specification for configuring network interfaces in Kubernetes. CNI chain is a mode that lets you use multiple CNI plug-ins to configure networks in a more flexible manner. In a Container Service for Kubernetes (ACK) cluster, a CNI chain can link multiple CNI plug-ins. Each CNI plug-in handles a network task, such as IP address allocation or routing. When ACK creates containers, the CNI chain calls the first plug-in and transmits the output to the next plug-in until all plug-ins in the chain complete their tasks.

**Warning**

ACK does not guarantee that CNI plug-ins can collaborate with each other. Configuring custom CNI chains is a **high-risk operation**. Make sure that you understand how a CNI chain works and exercise caution when you configure a CNI chain. Configuration errors can result in **business interruptions**.

## Prerequisites

An ACK managed cluster is created and the cluster uses Terway. For more information, see [Create an ACK managed cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-an-ack-managed-cluster-2/#task-skz-qwk-qfb).

## **Limits**

The version of the Terway plug-in is 1.5.6 or later. For more information about how to update a component, see [Manage components](/help/en/ack/manage-system-components).

## **Configure** a custom CNI chain

To use a CNI chain, you need to add the CNI plug-ins to be used to the configuration file of Terway.

1.  Run the following command to edit the `eni-config` configuration file.
    
    ```
    kubectl edit cm -nkube-system eni-config
    ```
    
    **Parameter**
    
    **Description**
    
    10-terway.conf
    
    The Terway CNI configuration. Do not modify the configuration.
    
    **Important**
    
    Do not modify the original configuration file.
    
    10-terway.conflist
    
    The custom CNI chain configuration.
    
    The first CNI configuration in `plugins` must be the configuration within `10-terway.conf`.
    
    **Important**
    
    The configuration in this topic is an example. Do not directly use the configuration because this may lead to configuration errors.
    
    Make sure that the content of the configuration block is in the JSON format.
    
    Configuration file
    
    ```
    kind: ConfigMap
    apiVersion: v1
    metadata:
      name: eni-config
      namespace: kube-system
    data:
      10-terway.conflist: |
          {
            "plugins": [
              {
                "cniVersion": "0.4.0",
                "name": "terway",
                "type": "terway",
                "capabilities": {"bandwidth": true}
              },
              {
                "type": "portmap",
                "capabilities": {"portMappings": true},
                "externalSetMarkChain":"KUBE-MARK-MASQ"
              }
            ]
          }
      10-terway.conf: |
        {
          "cniVersion": "0.4.0",
          "name": "terway",
          "type": "terway",
          "capabilities": {"bandwidth": true}
        }
    ```
    
2.  Run `kubectl rollout restart -n kube-system daemonset.apps/terway-eniip` to recreate the Terway pods.
    
    If the configuration is correct, you can find the custom plug-in configuration in the `etc/cni/net.d/10-terway.conflist` file on the node.
    

## Use cases

**Warning**

ACK does not guarantee that CNI plug-ins can collaborate with each other. Configuring custom CNI chains is a **high-risk operation**. Make sure that you understand how a CNI chain works and exercise caution when you configure a CNI chain. Configuration errors can result in **business interruptions**.

The following use cases are for reference only.

### **Configure a portmap**

The portmap plug-in is used to map the internal port of a pod to the port of the host. This enables the pod to expose certain services to external access.

**Note**

If you require Internet access, ensure that the corresponding port is open for inbound traffic in the security group.

#### Configuration example

-   Access using the private IP address and port of a node:
    
    ```
    kind: ConfigMap
    apiVersion: v1
    metadata:
      name: eni-config
      namespace: kube-system
    data:
      10-terway.conflist: |
          {
            "plugins": [
              {
                "cniVersion": "0.4.0",
                "name": "terway",
                "type": "terway",
                "capabilities": {"bandwidth": true} 
              },
              {
                "type": "portmap",
                "capabilities": {"portMappings": true},
                "externalSetMarkChain":"KUBE-MARK-MASQ"
              }
            ]
          }
    
      10-terway.conf: |
        {
          "cniVersion": "0.4.0",
          "name": "terway",
          "type": "terway",
          "capabilities": {"bandwidth": true}
        }
    ```
    
-   Access using a public IP address and port:
    
    For Internet access scenarios, the following configuration is required:
    
    **Configuration item**
    
    **Non-Datapath V2**
    
    **Datapath V2**
    
    masqAll
    
    Not required
    
    Required
    
    symmetric\_routing
    
    Required
    
    Required
    
    -   **masqAll**: A parameter for the portmap plug-in. Requires portmap v1.7.1 or later.
        
    -   **symmetric\_routing**: A parameter for the Terway plug-in. Requires Terway v1.15.0 or later.
        
    
    ```
    kind: ConfigMap
    apiVersion: v1
    metadata:
      name: eni-config
      namespace: kube-system
    data:
      10-terway.conflist: |
          {
            "plugins": [
              {
                "cniVersion": "0.4.0",
                "name": "terway",
                "type": "terway",
                "symmetric_routing": true,
                "capabilities": {"bandwidth": true} 
              },
              {
                "type": "portmap",
                "capabilities": {"portMappings": true},
                "masqAll": false
              }
            ]
          }
    
      10-terway.conf: |
        {
          "cniVersion": "0.4.0",
          "name": "terway",
          "type": "terway",
          "capabilities": {"bandwidth": true}
        }
    ```
    

### **Disable IPv6 link-local addresses for containers**

Even if the IPv6 dual-stack feature is not enabled for your cluster, a container's network interface is automatically assigned an IPv6 link-local address from the `fe80::/64` range upon creation. This is the default behavior of the operating system kernel. This behavior is usually harmless and does not affect normal business operations.

However, if your application encounters errors when handling network addresses, the application may fail to recognize the IPv6 link-local addresses as pod IP addresses. Consequently, the application attempts to use the IPv6 link-local addresses for communication. Link-local addresses are used only for communication between devices on the same link and cannot be used for communication between networks. Otherwise, the application may encounter exceptions. If your application code contains defects in the preceding scenario, report to the application vendor first and seek a solution.

If you still need to disable IPv6 link-local addresses in containers, you can do so by configuring the `tuning` plug-in.

#### **Configuration example**

```
kind: ConfigMap
apiVersion: v1
metadata:
  name: eni-config
  namespace: kube-system
data:
  10-terway.conflist: |
      {
        "plugins": [
          {
            "cniVersion": "0.4.0",
            "name": "terway",
            "type": "terway",
            "capabilities": {"bandwidth": true}
          },
          {
            "type": "tuning",
            "sysctl": {
              "net.ipv6.conf.all.disable_ipv6": "1",
              "net.ipv6.conf.default.disable_ipv6": "1",
              "net.ipv6.conf.lo.disable_ipv6": "1"
            }
          }
        ]
      }
  10-terway.conf: |
    {
      "cniVersion": "0.4.0",
      "name": "terway",
      "type": "terway",
      "capabilities": {"bandwidth": true}
    }
```
