Container Service for Kubernetes (ACK) clusters use security groups to manage traffic between control plane nodes and worker nodes. You can also use security groups to manage traffic between nodes, resources in virtual private clouds (VPCs), and external IP addresses. When you create a cluster or node pool, the system associates the cluster or node pool with a default security group. You can also associate the cluster or node pool with an existing security group. If you associate a cluster or node pool with an existing security group, the system does not configure additional access rules for the security group by default. You need to manually manage security group rules.

You can add security group rules to allow or deny access to or from the Elastic Compute Service (ECS) instances in the security group over the Internet or the internal network. For more information, see [Security group overview](/help/en/ecs/user-guide/overview-44) and [Add a security group rule](/help/en/ecs/user-guide/add-a-security-group-rule#concept-sm5-2wz-xdb).

## Recommended inbound and outbound rules for the cluster security group

### **Basic security groups**

#### **Inbound**

**Access control scope**

**Protocol**

**Port**

**Authorization object**

Recommended settings

ICMP

\-1/-1 (all ports)

0.0.0.0/0

All protocols

\-1/-1 (all ports)

-   The ID of the default security group of the cluster.
    
-   The pod CIDR block. This rule is required only in Flannel network mode. Do not add this rule if the Terway network mode is used.
    

Least privilege settings

All protocols

53/53 (DNS)

-   The ID of the default security group of the cluster.
    
-   The pod CIDR block. This rule is required only in Flannel network mode. Do not add this rule if the Terway network mode is used.
    

ICMP

\-1/-1 (all ports)

TCP

-   10250 (kubelet)
    
-   10255 (kubelet)
    
-   443 (webhook)
    
-   6443 (API server)
    
-   8082 (heapster)
    
-   The listening ports of applications or components that serve as webhooks in the cluster, such as port 8443 on which gatekeeper listens.
    

TCP

9082

The port used by the [Poseidon](/help/en/ack/serverless-kubernetes/user-guide/using-the-network-policy-networkpolicy) component. If you do not have this component installed, no configuration is required.

All protocols

Ports of applications and components that you want to expose.

The IP addresses or security groups to which you want to expose applications or components.

#### **Outbound**

**Access control scope**

**Protocol**

**Port**

**Authorization object**

Recommended settings

All protocols

\-1/-1 (all ports)

0.0.0.0/0

Least privilege settings

All protocols

\-1/-1 (all ports)

100.64.0.0/10 (the CIDR block of Alibaba Cloud resources)

All protocols

53/53 (DNS)

-   The IP address of the Server Load Balancer (SLB) instance that is used to expose the Kubernetes API server of the cluster.
    
-   The ID of the default security group of the cluster.
    
-   The pod CIDR block. This rule is required only in Flannel network mode. Do not add this rule if the Terway network mode is used.
    

TCP

-   10250 (kubelet)
    
-   10255 (kubelet)
    
-   443 (API server)
    
-   6443 (API server)
    

All protocols

Ports of applications and components that you want to expose.

The IP addresses or security groups to which you want to expose applications or components.

### **Advanced security groups**

#### **Inbound**

**Access control scope**

**Protocol**

**Port**

**Authorization object**

Recommended settings

ICMP

\-1/-1 (all ports)

0.0.0.0/0

All protocols

\-1/-1 (all ports)

-   The CIDR block of the VPC where the cluster resides.
    
-   The secondary CIDR block of the VPC where the cluster resides.
    
-   The pod CIDR block. This rule is required only in Flannel network mode. Do not add this rule if the Terway network mode is used.
    

Least privilege settings

All protocols

53/53 (DNS)

-   The CIDR blocks of all vSwitches that are used by the cluster, including node vSwitches and pod vSwitches.
    
-   The pod CIDR block. This rule is required only in Flannel network mode. Do not add this rule if the Terway network mode is used.
    

ICMP

\-1/-1 (all ports)

TCP

-   10250 (kubelet)
    
-   10255 (kubelet)
    
-   443 (webhook)
    
-   6443 (API server)
    
-   8082 (heapster)
    
-   The listening ports of applications or components that serve as webhooks in the cluster, such as port 8443 on which gatekeeper listens.
    

TCP

9082

The port used by the [Poseidon](/help/en/ack/serverless-kubernetes/user-guide/using-the-network-policy-networkpolicy) component. If you do not have this component installed, no configuration is required.

All protocols

Ports of applications and components that you want to expose.

The IP addresses or security groups to which you want to expose applications or components.

#### **Outbound**

**Access control scope**

**Protocol**

**Port**

**Authorization object**

Recommended settings

All protocols

\-1/-1 (all ports)

0.0.0.0/0

Least privilege settings

All protocols

\-1/-1 (all ports)

100.64.0.0/10 (the CIDR block of Alibaba Cloud resources)

All protocols

53/53 (DNS)

-   The IP address of the SLB instance that is used to expose the Kubernetes API server of the cluster.
    
-   The CIDR blocks of all vSwitches that are used by the cluster, including node vSwitches and pod vSwitches.
    
-   The pod CIDR block. This rule is required only in Flannel network mode. Do not add this rule if the Terway network mode is used.
    

TCP

-   10250 (kubelet)
    
-   10255 (kubelet)
    
-   443 (API server)
    
-   6443 (API server)
    

All protocols

Ports of applications and components that you want to expose.

The IP addresses or security groups to which you want to expose applications or components.

## **Disable deletion protection for a security group**

To avoid accidentally deleting security groups associated with ACK clusters, deletion protection is enabled for the security groups that are associated with ACK clusters by default. If the following error message is displayed when you delete a security group in the ECS console, deletion protection is enabled for the security group.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9256395171/p763741.png)

You cannot manually disable deletion protection for security groups **in the ECS console or by calling an API operation**. After all clusters associated with the security group are deleted, deletion protection is automatically disabled for the security group. To disable deletion protection for a security group, you need to query and delete the clusters associated with the security group in sequence. To query the associated clusters, perform the following steps:

1.  Log on to the [Container Service Management Console](https://cs.console.alibabacloud.com) . In the navigation pane on the left, click **Clusters**.
    
2.  On the **Clusters** page, click the name of the cluster that you created. Click the **Basic Information** tab to view the security group of the cluster.
    
    After all clusters associated with the security group are deleted, you can delete the security group in the ECS console. If you still cannot delete the security group, [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm) to the ACK team.
    

For more information about how to delete a security group, see [Delete a security group](/help/en/ecs/user-guide/delete-a-security-group-1).

## **Related topics**

-   For information about the best practices for network security, such as default allow or deny rules and namespace isolation, see [Network security](/help/en/ack/ack-managed-and-ack-dedicated/security-and-compliance/network-security).
    
-   For information about how to plan the network of a Kubernetes cluster, such as CIDR blocks of ECS instances, Kubernetes pods, and Services, see [Plan CIDR blocks for an ACK cluster](/help/en/ack/plan-cidr-blocks-for-an-ack-cluster-2).
