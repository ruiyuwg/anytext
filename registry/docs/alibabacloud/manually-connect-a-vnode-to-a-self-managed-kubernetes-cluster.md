If you created self-managed Kubernetes clusters in a data center or on an Elastic Compute Service (ECS) instance, you must deploy VNodes in the clusters to use Elastic Container Instance. This topic describes how to configure a kubeconfig certificate and manually deploy a VNode in a Kubernetes cluster. After you deploy a VNode, you can use Elastic Container Instance in the Kubernetes cluster.

## Prerequisites

-   A Kubernetes cluster of version 1.16 to 1.30 is deployed.
    
-   If your Kubernetes cluster is deployed in a data center, make sure that the data center and the virtual private cloud (VPC) to which the Elastic Container Instance-based pods belong are connected with each other by using Express Connect, Smart Access Gateway, or VPN Gateway. For more information, see the following topics:
    
    -   [What is Express Connect?](/help/en/express-connect/product-overview/what-is-express-connect/#concept-ipg-pry-xdb)
        
    -   [What is SAG?](/help/en/sag/product-overview/what-is-sag#concept-2403019)
        
    -   [What is VPN Gateway?](/help/en/vpn/product-overview/what-is-vpn-gateway#concept-r5s-gzv-wdb)
        

## Preparations

Before you deploy a VNode in a self-managed Kubernetes cluster, prepare the parameter information that is required for creating a VNode and understand the permissions that are required to deploy the VNode in the cluster. The following table describes the parameters that are required to create a VNode.

Parameter

Description

Operation

Region

A region is a geographic location where Alibaba Cloud data centers are deployed. Select a region based on the geographical location of your end users and resource prices. For more information, see [Regions and Zones](/help/en/eci/product-overview/regions-and-zones#topic-1860084).

The elastic container instance and relevant resources are created in the region that you selected.

You can query the regions where Elastic Container Instance is available by using the [Elastic Container Instance console](https://eci.console.alibabacloud.com/?#/eci/cn-hangzhou/welcome) or by calling the [DescribeRegions](/help/en/eci/developer-reference/api-eci-2018-08-08-describeregions) API operation.

VPC

A VPC is a private network established on Alibaba Cloud. VPCs are logically isolated from each other. For more information, see [What is a VPC?](/help/en/vpc/what-is-vpc#concept-kbk-cpz-ndb)

The elastic container instance and relevant resources are created in the VPC that you configured.

**Note**

If your Kubernetes cluster is deployed in a data center, make sure that the network of the data center and the VPC is established.

You can create and view VPCs on the **VPCs** page in the [VPC console](https://vpc.console.alibabacloud.com/vpc/cn-hangzhou/vpcs).

vSwitch

A vSwitch is a basic network device that connects different cloud resources. If you want to create an elastic container instance and relevant resources in a VPC, you must specify a vSwitch. You can also specify multiple vSwitches. In this case, the system automatically selects a vSwitch from the pool of vSwitches.

You can create and view vSwitches on the **vSwitch** page in the [VPC console](https://vpc.console.alibabacloud.com/vpc/cn-hangzhou/switches) and select a vSwitch in the VPC that you selected.

Security Group

Security groups are virtual firewalls that control the inbound and outbound traffic of resources in the group to improve network security. For more information about security groups, see [Overview](/help/en/ecs/user-guide/overview-44#concept-o2y-mqw-ydb).

The elastic container instance and relevant resources are added to the security group that you selected.

**Note**

We recommend that you select an advanced security group and add the following inbound security group rules:

-   One rule allows access to all ports from 1 to 65535 over the CIDR blocks of the VPC.
    
-   The other rule allows access to the service ports 10250 and 10255 of the VNode over the endpoint of the Kubernetes API server.
    

You can create and view security groups on the **Security Groups** page in the [ECS console](https://ecs.console.alibabacloud.com/?#/securityGroup/region/cn-hangzhou) and select a security group in the VPC that you selected.

To create a VNode, you must configure standard permissions for native Kubernetes nodes and additional permissions for the VNode, as shown in the following table.

**Type**

**Permission**

**Description**

Standard permissions

system:node

Standard permissions for nodes.

system:node-proxier

Standard permissions for kube-proxy.

system:certificates.k8s.io:certificatesigningrequests:nodeclient

The permission for nodes to initiate the request to create a certificate.

system:certificates.k8s.io:certificatesigningrequests:selfnodeclient

The permission for nodes to initiate a request to create a certificate based on existing certificates. The permission is to request for certificate rotation.

Additional permissions

pods update and pods patch

The permissions for updating annotations of pods. For example, you can add computed annotations such as `k8s.aliyun.com/eci-instance-id` to pods.

pvc update and pvc patch

The permissions for updating annotations of PersistentVolumeClaims (PVCs).

## Configure the cluster to generate a kubeconfig certificate

To deploy a VNode in a self-managed Kubernetes cluster, you must use a kubeconfig certificate. Before you create a VNode, you must generate a kubeconfig certificate for the VNode.

**Note**

If you use an admin certificate, skip this section.

1.  Connect to your Kubernetes cluster.
    
2.  Download and execute a configuration script. In TLS bootstrapping or ServiceAccount mode, generate a kubeconfig certificate. TLS is the acronym of Transport Layer Security.
    
    ## TLS bootstrapping
    
    If you have security requirements, we recommend that you use the TLS bootstrapping mode. In this mode, the vnode-approver component is automatically deployed. The vnode-approver component is used to approve certificate signing requests (CSRs) that are sent by VNodes. vnode-approver has open source code on GitHub. For more information, see [vnode-approver](https://github.com/aliyuneci/vnode-approver).
    
    ```
    curl -fsSL https://eci-docs.oss-cn-beijing.aliyuncs.com/vnode/vnode-deploy.sh | bash -s -- bootstrap
    ```
    
    ## ServiceAccount
    
    This mode does not support certificate rotation. When you generate a kubeconfig certificate, make sure that the token has a long enough or permanent validity period to prevent VNode failure due to expiration of the kubeconfig.
    
    ```
    curl -fsSL https://eci-docs.oss-cn-beijing.aliyuncs.com/vnode/vnode-deploy.sh | bash -s -- common
    ```
    
3.  View the content of the kubeconfig.
    
    The generated kubeconfig is named vnode-config. Run the following command to view the content of the kubeconfig:
    
    ```
    cat vnode-config
    ```
    
    When you view the content of the kubeconfig, take note of the following items:
    
    -   Make sure that the VPC to which the VNode belongs can be connected to the server. To ensure the VPC can be connected to the server, the VNode and the server must reside in the same VPC, or the connection between the VPC and the server is established.
        
        -   If the server address is an IP address, make sure that you can access the IP address from the VPC in which the VNode resides.
            
        -   If the server address is a domain name, make sure that the domain name can be resolved in an Alibaba Cloud VPC. In addition, from the VPC in which the VNode resides, you must be able to access the IP address to which the domain name points.
            
    -   If the content of `certificate-authority-data` is empty, check whether the PATH field is used in `~/.kube/config`.
        
    
    The following code provides a sample content of the kubeconfig.
    
    ## TLS bootstrapping
    
    ```
    apiVersion: v1
    kind: Config
    current-context: kubernetes-admin@kubernetes
    contexts:
    - name: kubernetes-admin@kubernetes
      context:
        cluster: kubernetes-admin@kubernetes
        user: vnode
        namespace: kube-system
    clusters:
    - name: kubernetes-admin@kubernetes
      cluster:
        certificate-authority-data: "*****************************************=="
        server: https://10.16.XX.XX:6443
    users:
    - name: vnode
      user:
        token: ******.****************
    ```
    
    ## ServiceAccount
    
    ```
    apiVersion: v1
    kind: Config
    current-context: kubernetes-admin@kubernetes
    contexts:
    - name: kubernetes-admin@kubernetes
      context:
        cluster: kubernetes-admin@kubernetes
        user: vnode
        namespace: kube-system
    clusters:
    - name: kubernetes-admin@kubernetes
      cluster:
        certificate-authority-data: "*****************************************=="
        server: https://10.16.XX.XX:6443
    users:
    - name: vnode
      user:
        token: ***********************************************
    ```
    

## Create a VNode

### **Procedure**

You can use the Elastic Container Instance console or call an API operation to create a VNode.

## Use the Elastic Container Instance console

1.  Log on to the [Elastic Container Instance console](https://eci.console.alibabacloud.com/?#/eci/cn-hangzhou/welcome).
    
2.  In the top navigation bar, select the region.
    
3.  In the left-side navigation pane, click **Virtual Node**.
    
4.  Click **Create Virtual Node**.
    
5.  Configure parameters and click **OK**.
    
    The following table describes the parameters.
    
    **Parameter**
    
    **Description**
    
    VPC, vSwitch, and Security Group
    
    The VPC and security group to which the VNode belongs. The vSwitch with which the VNode is associated. For information about how to create a VPC, vSwitch, and security group, see the "Preparations" section in this topic.
    
    KubeConfig
    
    The kubeconfig certificate of the Kubernetes cluster in which the VNode is deployed. For information about how to generate a kubeconfig certificate, see the "Configure the cluster to generate a kubeconfig certificate" section in this topic.
    
    TlsBootstrapEnabled
    
    Specifies whether to enable TLS bootstrapping.
    
    If a kubeconfig certificate has been generated by using the TLS bootstrapping mode, enable TLS strapping when you create a VNode. After you enable TLS strapping, certificate rotation is also enabled. The system automatically applies for a new kubeconfig certificate for the VNode when the current kubeconfig certificate is about to expire.
    
    Tags
    
    The tags that are bound to the VNode.
    
    Tags can be used to manage split bills. After you bind a custom tag to the VNode, you can use the tag to filter the charged fees of instances in the VNode when you view the fee analysis. For more information, see [View split bills based on tags](/help/en/eci/product-overview/query-split-bills-of-elastic-container-instances-based-on-tags).
    
    Taints
    
    The taints that are bound to the VNode.
    
    Resource Group
    
    A resource group is a mechanism in which resources are managed by groups in an Alibaba Cloud account. Each Alibaba Cloud account is assigned a default resource group. For more information, see [What is Resource Management?](/help/en/resource-management/product-overview/what-is-resource-management#concept-zyn-3p1-dhb)
    
    If you do not specify a resource group, the VNode is added to the default resource group.
    

## Call an API operation

You can call the CreateVirtualNode API operation to create a VNode. The following table lists the major parameters. For more information, see [CreateVirtualNode](/help/en/eci/developer-reference/api-eci-2018-08-08-createvirtualnode).

Parameter

Type

Example

Description

RegionId

String

cn-shanghai

The region ID of the VNode.

VSwitchId

String

vsw-2ze23nqzig8inprou\*\*\*\*

The vSwitch ID. The vSwitch is associated with the VNode and the elastic container instances in the VNode.

You can specify 1 to 10 vSwitches for a VPC.

SecurityGroupId

String

sg-2ze81zoc3yl7a3we\*\*\*\*

The ID of the security group. Specify a security group. The VNode and the elastic container instances in the VNode are added to the security group.

KubeConfig

String

JTVDbmFwaVZlcnNpb24lM0ElMjB2MSU1Q25jbHVzdGVycyUzQSU1Q24tJTIwY2x1c3RlciUzQSU1Q24uLi\*\*\*\*\*\*

The kubeconfig certificate of the Kubernetes cluster in which the VNode is deployed. The value must be Base64-encoded.

TlsBootstrapEnabled

Boolean

true

Specifies whether to enable TLS bootstrapping. If a kubeconfig certificate has been generated by using the TLS bootstrapping mode, enable TLS strapping when you create a VNode. After you enable TLS strapping, certificate rotation is also enabled. The system automatically applies for a new kubeconfig certificate for the VNode when the current kubeconfig certificate is about to expire.

### Check the result

Wait for a few minutes after you create the VNode. Then, log on to the Kubernetes cluster and run the `kubectl get nodes` command to view the information of nodes.

-   If the information of the VNode is displayed, the VNode is created. The following command output is returned:
    
    ![vnode1](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6051723461/p364411.png)
    
-   If no information of the VNode is displayed, the VNode fails to be created. We recommend that you troubleshoot issues based on VNode-related events.
    
    On the **Virtual Node** page of the [Elastic Container Instance console](https://eci.console.alibabacloud.com/?#/eci/cn-hangzhou/welcome), click the ID of the VNode that fails to be created. On the **Events** tab, you can view the events about the VNode.
    
    Common event errors:
    
    -   `failed to get kubernetes server version, Get \"https://10.50.XX.XX:6443/version?timeout=32s\": net/http: request canceled (Client.Timeout exceeded while awaiting headers`
        
        This error message indicates that the VPC to which the VNode belongs cannot be connected to the Kubernetes API server. To solve this issue, check whether the VNode and the API server reside in the same VPC. If they are not in the same VPC, make sure that the connection between the VPC to which the VNode belongs and the API server is established.
        
    -   `failed to get kubernetes server version, Get \"https://lb.kubesphere.local:6443/version?timeout=32s\": dial tcp: lookup lb.kubesphere.local on 100.100.X.:53: no such host`
        
        This error message indicates that the domain name of the Kubernetes API server cannot be resolved in an Alibaba Cloud VPC. You can use Alibaba Cloud DNS PrivateZone to resolve the domain name.
        

**Note**

If you have any requirements or if you encounter problems when you deploy a VNode in a self-managed Kubernetes cluster, you can join the DingTalk group with the ID of 44666389 to obtain assistance.

## **Prevent DaemonSets from being scheduled to the VNode**

DaemonSets cannot run on VNodes because VNodes are not real nodes. After you create a VNode, you need to modify the DaemonSet in kube-proxy and configure nodeAffinity to prevent DaemonSets from being scheduled to the VNode.

1.  Modify the configurations of the DaemonSet.
    
    ```
    kubectl -n kube-system edit ds kube-proxy
    ```
    
2.  Configure nodeAffinity.
    
    Add the following YAML content to `spec.template.spec`.
    
    ```
    affinity:
      nodeAffinity:
        requiredDuringSchedulingIgnoredDuringExecution:
          nodeSelectorTerms:
          - matchExpressions:
            - key: type
              operator: NotIn
              values:
              - virtual-kubelet
    ```
    

## Schedule pods to the VNode

After you create a VNode, you can use one of the following methods to schedule pods to the VNode. Then, you can run the pods as elastic container instances in the VNode.

-   Manual scheduling
    
    You can configure the nodeSelector and tolerations parameters or specify the nodeName parameter to schedule pods to the VNode. For more information, see [Schedule pods to a VNode](/help/en/eci/user-guide/schedule-pods-to-a-vnode#topic-2145262).
    
-   Automatic Scheduling
    
    After you deploy the eci-profile component, you can specify the Selector parameter. This way, the system automatically schedules pods that meet the conditions specified by Selector to the VNode. For more information, see [Use eci-profile to schedule pods to a VNode](/help/en/eci/user-guide/use-eci-profile-to-schedule-pods-to-a-vnode).
