When you create a Container Service for Kubernetes (ACK) cluster, an internal-facing Classic Load Balancer (CLB) instance is automatically created for the Kubernetes API server. To access the API server over the Internet, associate an elastic IP address (EIP) with this CLB instance.

## Usage notes

-   The associated EIP incurs charges based on the [pay-as-you-go](/help/en/eip/pay-as-you-go/#task-rcd-sgl-vdb) billing model. For more information, see [What is EIP?](/help/en/eip/product-overview/what-is-eip)
    
-   After an EIP is associated with the CLB instance, do not disassociate or release the EIP directly. Otherwise, the API server becomes inaccessible over the Internet.
    
-   When you associate, disassociate, or change the EIP, the system performs rolling updates on the API server. Do not perform operations on the cluster during rolling updates.
    

## Associate an EIP during cluster creation

When you create a cluster, select **Expose API server with EIP**.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9634757171/p783202.png)

For more information, see [Create an ACK managed cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-an-ack-managed-cluster-2/#task-skz-qwk-qfb), [Create an ACK Serverless cluster](/help/en/ack/serverless-kubernetes/user-guide/create-an-ask-cluster-2#task-e3c-311-ydb), and [Create an ACK Edge cluster](/help/en/ack/ack-edge/user-guide/create-an-ack-edge-cluster-1).

## Associate an EIP with an existing cluster

EIP association for existing clusters is supported in ACK managed clusters, ACK Serverless clusters, and ACK Edge clusters.

**Note**

To associate an EIP with the API server of an ACK dedicated cluster, first [perform a hot migration from the ACK dedicated cluster to an ACK managed Pro cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/hot-migration-from-ack-dedicated-clusters-to-ack-pro-clusters).

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left-side navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the cluster and click its name. In the left-side pane, click **Cluster Information**.
    
3.  On the **Cluster Information** page, click the **Basic Information** tab. In the **Network** section, click **Associate EIP** next to **API server Public Endpoint**.
    
4.  Select an existing EIP or [create an EIP](/help/en/eip/apply-for-new-eips) in the same region as the cluster, and then click **OK**.
    

After the EIP is associated, it appears in the **API server Public Endpoint** field.

## Disassociate or change the EIP

Disassociating or changing EIPs is supported only in ACK managed clusters and ACK Serverless clusters.

-   **Disassociate the EIP**: After the EIP is disassociated, the API server is accessible only over the internal network. Applications in the cluster can still access the API server.
    
-   **Change the EIP**: After the EIP is changed, the public endpoint of the API server changes accordingly.
    

To disassociate or change the EIP:

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left-side navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the cluster and click its name. In the left-side pane, click **Cluster Information**.
    
3.  On the **Cluster Information** page, click the **Basic Information** tab. In the **Network** section, click **Associate EIP** or **Unbind** next to **API server Public Endpoint**.
    

## Configure a network ACL for the API server

After exposing the API server to the Internet, [configure a network access control list (ACL) for the API server](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-network-acls-for-the-api-server-of-an-ack-cluster) to restrict access. Use a blacklist to block specific IP addresses, or a whitelist to allow only specific IP addresses.

## References

-   To enable cluster applications to access external Internet resources, such as pulling images or updating dependency libraries, [configure SNAT rules on a NAT gateway](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/enable-an-existing-ack-cluster-to-access-the-internet) in the VPC where the cluster resides.
    
-   If the cluster security group includes deny rules, make sure that the protocols and ports used by the cluster are not specified in the deny rules. For more information, see [Configure security groups for clusters](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-security-group-rules-to-enforce-access-control-on-ack-clusters).
