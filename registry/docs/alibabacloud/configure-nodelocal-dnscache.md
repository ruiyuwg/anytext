Container Service for Kubernetes (ACK) allows you to deploy NodeLocal DNSCache to improve the stability and performance of service discovery. NodeLocal DNSCache is implemented as a DaemonSet and runs a DNS caching agent on cluster nodes to improve the efficiency of DNS resolution for ACK clusters. This topic describes how to deploy and configure NodeLocal DNSCache for an application in an ACK cluster.

## Prerequisites

-   An ACK cluster is created. For more information, see [Create an ACK managed cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-an-ack-managed-cluster-2/#task-skz-qwk-qfb).
    
-   A kubectl client is connected to the cluster. For more information, see [Obtain the kubeconfig file of a cluster and use kubectl to connect to the cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/obtain-the-kubeconfig-file-of-a-cluster-and-use-kubectl-to-connect-to-the-cluster#task-2076136).
    

## Limits

-   NodeLocal DNSCache does not support pods that run in ACK Serverless clusters or on elastic container instances in ACK managed clusters or ACK dedicated clusters.
    
-   If your cluster uses the Terway network plug-in, the Terway version must be 1.0.10.301 or later. If your cluster runs Terway in inclusive ENI mode based on IPvlan, you must modify the configurations of Terway. For more information, see [Modify the configurations of Terway (Clusters created by using an early version of Terway)](#title-fm7-2pz-vzm).
    
-   NodeLocal DNSCache serves as a transparent caching proxy for CoreDNS and does not provide plug-ins such as hosts or rewrite. If you want to enable these plug-ins, modify the CoreDNS configurations.
    
-   If you do not modify the configurations of CoreDNS before you use NodeLocal DNSCache, CoreDNS may fail to resolve external domain names. For more information, see [Configure the default protocol for the Forward plug-in and upstream DNS servers of VPC](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/dns-best-practice#29c283410edkw).
    

## Introduction

ACK NodeLocal DNSCache is a local DNS caching solution developed based on the open source NodeLocal DNSCache project. This solution consists of a DNS caching agent that runs as a DaemonSet and an admission controller that runs as a Deployment to dynamically inject DNSConfig.

-   The admission controller intercepts pod creation requests based on admission webhooks and dynamically injects DNSConfig into pod configurations.
    
    **Note**
    
    If you do not enable the admission controller to automatically inject DNSConfig, you must manually add DNS settings to pod configurations. For more information, see [Method 2: Manually specify DNSConfig](#p-tqe-w70-tdp).
    
-   The DaemonSet that runs a DNS caching agent on each node can create a virtual network interface. By default, the virtual network interface listens for DNS queries that are sent to the IP address 169.254.20.10. To change the IP address, [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm). DNS queries that are generated in pods are proxied by the DaemonSet based on the pod DNSConfig and node network settings.
    
    **Important**
    
    The DaemonSet that runs a DNS caching agent is built based on CoreDNS and provides only proxy and caching services. Do not enable other plug-ins such as hosts or rewrite.
    

For more information about the caching policies supported by NodeLocal DNSCache, see [DNS resolution policies and caching policies](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/dns-resolution-policies-and-caching-policies#task-2193342).

Figure 1. How NodeLocal DNSCache works

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3471119471/CAEQJhiBgMCwnIvp.xgiIDJhNzM1MTNlMjQxNjQzMGNiNTY3ZjA3ZDI1NDkxZDYz4106618_20231206181241.007.svg)

**No.**

**Description**

①

By default, a pod with the local DNSConfig injected uses NodeLocal DNSCache to listen for DNS queries that are sent to the IP address 169.254.20.10 on the node.

②

If NodeLocal DNSCache does not find a cache hit for the DNS query, the kube-dns Service is used to request CoreDNS to handle the query.

③

CoreDNS uses the DNS server deployed in the virtual private cloud (VPC) to resolve domain names that are not cluster-local.

④

If the pod with the local DNSConfig injected fails to connect to NodeLocal DNSCache, the pod uses the kube-dns Service to connect to CoreDNS for DNS resolution.

⑤

A pod without the local DNSConfig injected uses the kube-dns Service to connect to CoreDNS for DNS resolution.

## Install NodeLocal DNSCache

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left-side navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the cluster that you want to manage and choose **More** > **Operations** > **Manage Components** in the **Actions** column.
    
3.  On the **Add-ons** page, click the **Networking** tab and find **ACK NodeLocal DNSCache**.
    
4.  Click **Install**. In the message that appears, click **OK**.
    

## Configure NodeLocal DNSCache

**Note**

By default, NodeLocal DNSCache is not installed on master nodes. If you want to deploy business pods on master nodes and master nodes are added with taints, you must add matching tolerations to the configurations of node-local-dns in the kube-system namespace.

To redirect DNS requests that are destined for CoreDNS to the DaemonSet that runs a DNS caching agent, you must set the nameservers parameter in pod configurations to 169.254.20.10 and the IP address of kube-dns. To do this, use one of the following methods:

-   [Method 1: Automatically inject DNSConfig](#p-6mf-gl9-aed) (Recommended): Use the admission controller to automatically inject DNSConfig when pods are created.
    
-   [Method 2: Manually specify DNSConfig](#p-tqe-w70-tdp): Manually specify DNSConfig when pods are created.
    
-   [Method 3: Configure kubelet startup parameters](#p-pct-sjt-er6) (Not recommended): Modify kubelet parameters and restart kubelet. This method may interrupt your business.
    

### Method 1: Automatically inject DNSConfig

You can use an admission controller to automatically inject DNSConfig to newly created pods. This way, you do not need to manually configure the YAML files of pods. By default, the application listens for pod creation requests from namespaces that have the `node-local-dns-injection=enabled` label. You can use the following command to add this label to a namespace.

```
kubectl label namespace default node-local-dns-injection=enabled
```

**Note**

-   The preceding command enables automatic DNSConfig injection only for the default namespace. To enable automatic DNSConfig injection for other namespaces, replace `default` based on your requirements.
    
-   If automatic DNSConfig injection is enabled for a namespace but you do not want to automatically inject DNSConfig to some pods, you can add the `node-local-dns-injection=disabled` label to the templates of these pods.
    
-   Elastic container instances do not support NodeLocal DNSCache. When a Deployment is dynamically scaled out, new pods may be created on elastic container instances. In this case, the new pods that run on elastic container instances cannot connect to NodeLocal DNSCache, which may lead to DNS resolution failures. To solve this issue, you must disable automatic DNSConfig injection for all the pods that are provisioned for the Deployment by adding `node-local-dns-injection=disabled` to the labels parameter of the pod template.
    

After automatic DNSConfig injection is enabled, the following parameters are added to newly created pods. To ensure the high availability of DNS services, the cluster IP address of kube-dns is added to the nameservers parameter as a backup DNS server.

```
dnsConfig:
  nameservers:
  - 169.254.20.10
  - 172.21.0.10
  options:
  - name: ndots
    value: "3"
  - name: attempts
    value: "2"
  - name: timeout
    value: "1"
  searches:
  - default.svc.cluster.local
  - svc.cluster.local
  - cluster.local
dnsPolicy: None
```

Automatic DNSConfig injection takes effect only when pods meet all of the following requirements. If no DNS server IP address is injected into the containers in a pod, you need to check whether the pod meets these requirements.

-   Newly created pods do not belong to the kube-system or kube-public namespace.
    
-   The namespace to which newly created pods belong has the `node-local-dns-injection=enabled` label.
    
-   The namespace to which newly created pods belong does not have labels related to Elastic Container Instance, such as `virtual-node-affinity-injection`, `eci`, and `alibabacloud.com/eci`.
    
-   Newly created pods do not have labels related to Elastic Container Instance, such as `eci` and `alibabacloud.com/eci`, or the `node-local-dns-injection=disabled label`.
    
-   Newly created pods use the `hostNetwork` network and the `ClusterFirstWithHostNet` DNS policy, or the pods do not use the `hostNetwork` network but use the `ClusterFirst` DNS policy.
    

### Method 2: Manually specify DNSConfig

If you do not want to use admission webhooks to automatically inject DNSConfig, you can modify pod configurations to manually specify DNSConfig.

```
apiVersion: v1
kind: Pod
metadata:
  name: alpine
  namespace: default
spec:
  containers:
  - image: alpine
    command:
      - sleep
      - "10000"
    imagePullPolicy: Always
    name: alpine
  dnsPolicy: None
  dnsConfig:
    nameservers: ["169.254.20.10","172.21.0.10"]
    searches:
    - default.svc.cluster.local
    - svc.cluster.local
    - cluster.local
    options:
    - name: ndots
      value: "3"
    - name: attempts
      value: "2"
    - name: timeout 
      value: "1"
```

-   dnsPolicy: Set the value to `None`.
    
-   nameservers: Set the value to 169.254.20.10 and the cluster IP address of kube-dns.
    
-   searches: Set the DNS search domains. Make sure that internal domain names can be resolved.
    
-   ndots: You can improve resolution efficiency by setting this parameter to a smaller value. Default value: 5. For more information, see [resolv.conf](https://linux.die.net/man/5/resolv.conf).
    

### Method 3: Configure kubelet startup parameters

The kubelet uses the \--cluster-dns and \--cluster-domain parameters to control pod DNSConfig. In the /etc/systemd/system/kubelet.service.d/10-kubeadm.conf file, add the \--cluster-dns parameter and set the value to the local IP address 169.254.20.10. Then, run the `sudo systemctl daemon-reload` and `sudo systemctl restart kubelet` commands for the changes to take effect.

```
--cluster-dns=169.254.20.10 --cluster-dns=<kube-dns ip> --cluster-domain=<search domain>
```

-   cluster-dns: specifies the DNS servers that are used in the pod configurations. By default, only the IP address of `` `kube-dns` `` is specified. You must add the local IP address 169.254.20.10.
    
-   cluster-domain: specifies the DNS search domains that are used in the pod configurations. You can use the existing search domain. In most cases, the existing search domain is `` `cluster.local` ``.
    

### Example on how to configure NodeLocal DNSCache

The following example shows how to configure NodeLocal DNSCache for a Deployment that is created in the default namespace.

1.  Run the following command to add a label to the namespace to which the Deployment belongs. In this example, the Deployment is created in the default namespace.
    
    ```
    kubectl label namespace default node-local-dns-injection=enabled
    ```
    
    **Important**
    
    The admission controller ignores applications in the kube-system and kube-public namespaces. Do not configure to automatically inject dnsConfig to applications in the two namespaces.
    
2.  Deploy a sample application in the default namespace.
    
    1.  Use the following YAML template to create a sample application named ubuntu-deployment:
        
        ```
        apiVersion: apps/v1 # for versions before 1.8.0 use apps/v1beta1
        kind: Deployment
        metadata:
          name: ubuntu
          labels:
            app: ubuntu
        spec:
          replicas: 2
          selector:
            matchLabels:
              app: ubuntu
          template:
            metadata:
              labels:
                app: ubuntu
            spec:
              containers:
              - name: ubuntu
                image: ubuntu
                command: ["sh", "-c"]
                args: ["sleep 100000"]
        ```
        
    2.  Run the following command to deploy the application in the cluster:
        
        ```
        kubectl apply -f ubuntu-deployment.yaml
        ```
        
        Expected output:
        
        ```
        deployment.apps/ubuntu created
        ```
        
    3.  Run the following command to view information about the application:
        
        ```
        kubectl get deployment ubuntu
        ```
        
        Expected output:
        
        ```
        NAME     READY   UP-TO-DATE   AVAILABLE   AGE
        ubuntu   2/2     2            2           7s
        ```
        
3.  Check whether dnsConfig is injected.
    
    1.  Run the following command to query the pods that run the application:
        
        ```
        kubectl get pods
        ```
        
        Expected output:
        
        ```
        NAME                      READY   STATUS    RESTARTS   AGE
        ubuntu-766448f68c-m****   1/1     Running   0          4m39s
        ubuntu-766448f68c-w****   1/1     Running   0          4m39s
        ```
        
    2.  Run the following command to check whether NodeLocal DNSCache is enabled in dnsConfig of a pod:
        
        ```
        kubectl get pod ubuntu-766448f68c-m**** -o=jsonpath='{.spec.dnsConfig}'
        ```
        
        Expected output:
        
        ```
        map[nameservers:[169.254.20.10 172.21.0.10] options:[map[name:ndots value:5]] searches:[default.svc.cluster.local svc.cluster.local cluster.local]]
        ```
        
        The preceding output indicates that NodeLocal DNSCache is enabled for the application.
        
        After NodeLocal DNSCache is enabled for an application, the following parameters are added to the pods that are provisioned for the application. To ensure the high availability of DNS services, the cluster IP address 172.21.0.10 of the kube-dns Service is specified as the IP address of the backup DNS server in the nameservers parameter.
        
        ```
          dnsConfig:
            nameservers:
            - 169.254.20.10
            - 172.21.0.10
            options:
            - name: ndots
              value: "3"
            - name: attempts
              value: "2"
            - name: timeout
              value: "1"
            searches:
            - default.svc.cluster.local
            - svc.cluster.local
            - cluster.local
          dnsPolicy: None
        ```
        

## Update NodeLocal DNSCache

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left-side navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the one you want to manage and click its name. In the left-side navigation pane, choose **Operations** > **Add-ons**.
    
3.  On the **Add-ons** page, find NodeLocal DNSCache and click **Upgrade**. In the message that appears, click **OK**.
    
    **Note**
    
    -   If you modified tolerations for the node-local-dns DaemonSet, the modifications are overwritten during the update process. You must configure the tolerations again after the update is complete.
        
    -   If the system fails to update NodeLocal DNSCache, troubleshoot the failure based on the error code that is returned. For more information, see [Component troubleshooting](/help/en/ack/ack-managed-and-ack-dedicated/support/component-troubleshooting#task-2274027).
        
    

## Uninstall NodeLocal DNSCache

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left-side navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the one you want to manage and click its name. In the left-side navigation pane, choose **Operations** > **Add-ons**.
    
3.  On the **Add-ons** page, find NodeLocal DNSCache and click **Uninstall**. In the message that appears, click **OK**.
    
    **Note**
    
    After NodeLocal DNSCache is uninstalled, all DNS queries are sent to CoreDNS. We recommend that you scale out CoreDNS before you uninstall NodeLocal DNSCache.
    

## Modify the configurations of Terway (Clusters created by using an early version of Terway)

In clusters created with an early version of Terway, the default Terway configuration may not support NodeLocal DNSCache. You can refer to the steps below to check and modify the Terway configuration.

1.  Run the following command to view the ConfigMap of Terway:
    
    ```
    kubectl -n kube-system edit cm eni-config -o yaml
    ```
    
2.  Check the ConfigMap of Terway.
    
    -   Check whether IPvlan is enabled in the `eniip_virtual_type` field. If this field does not exist in the ConfigMap or the value is not set to IPvlan, you do not need to perform the following steps before you install NodeLocal DNSCache. For more information, see [Install NodeLocal DNSCache](#section-rzr-wqx-ss3).
        
    -   Check whether the `host_stack_cidrs` field is specified in the ConfigMap. If the `host_stack_cidrs` field is specified, you do not need to perform the following steps before you install NodeLocal DNSCache. For more information, see [Install NodeLocal DNSCache](#section-rzr-wqx-ss3).
        
    
3.  Add the `host_stack_cidrs` field to the ConfigMap of Terway and set the value to 169.254.20.10/32. Then, save the ConfigMap and exit.
    
    ```
     10-terway.conf: |
      {
        "cniVersion": "0.3.0",
        "name": "terway",
        "eniip_virtual_type": "IPVlan",
        "host_stack_cidrs": ["169.254.20.10/32"], 
        "type": "terway"
      }
    ```
    
4.  Run the following command to query all of the DaemonSet pods provisioned for Terway:
    
    ```
    kubectl -n kube-system get pod | grep terway-eniip
    ```
    
    Expected output:
    
    ```
    terway-eniip-7****         2/2     Running   0          30m
    terway-eniip-s****         2/2     Running   0          30m
    ```
    
5.  Run the following command to recreate the Terway pods:
    
    ```
     kubectl -n kube-system delete pod terway-eniip-7**** terway-eniip-s****
    ```
    
6.  Log on to a node of the cluster and run the following command to query the ConfigMap of Terway.
    
    If the ConfigMap contains the CIDR block that you added, the ConfigMap of Terway is modified.
    
    ```
    cat /etc/cni/net.d/*
    ```
    
    Expected output:
    
    ```
     {
       "cniVersion": "0.3.0",
       "name": "terway-chainer",
       "plugins": [
         {
           "eniip_virtual_type": "IPVlan",
           "host_stack_cidrs": [ 
             "169.254.20.10/32",
           ],
           "type": "terway"
         },
         {
           "type": "cilium-cni"
         }
       ]
     }
    ```
    
    After all the Terway pods are recreated and run as normal, you can install NodeLocal DNSCache.
    

## References

-   [DNS-based service discovery](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/service-discovery-dns-1/#task-2038513)
    
-   [DNS policies and domain name resolution](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-dns-resolution#task-1985778)
    
-   [Best practices for DNS services](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/dns-best-practice#task-2548861)
