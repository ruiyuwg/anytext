The API server certificate of a Container Service for Kubernetes (ACK) cluster contains the Subject Alternative Name (SAN) field. By default, this field contains the domain name and IP address of the cluster. This field also contains the elastic IP address (EIP) and private IP address of the Server Load Balancer (SLB) instance that is associated with the API server of the cluster. If you require proxy-based access or cross-domain access, you can customize the SANs for a new or existing cluster in the ACK console.

## Prerequisites

An ACK managed cluster, ACK dedicated cluster, or ACK Serverless cluster is created. For more information, see [Create an ACK dedicated cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-an-ack-managed-cluster-2/#task-skz-qwk-qfb), [Create an ACK managed cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-an-ack-dedicated-cluster/), or [Create an ACK Serverless cluster](/help/en/ack/serverless-kubernetes/user-guide/create-an-ask-cluster-2).

**Important**

-   You cannot customize the SANs for an ACK Serverless cluster when you create the cluster. You can only update the SANs for an existing ACK Serverless cluster.
    
-   You can customize the SANs for an ACK dedicated cluster only when you create the cluster. You cannot update the SANs for an existing ACK dedicated cluster.
    

## SAN overview

SAN is an extension to X.509. SAN allows you to associate various values with an SSL certificate by adding the values to the `subjectAltName` field. The values can be IP addresses, domain names, URIs, or email addresses.

## Customize the SANs of the API server certificate of a cluster

## Customize the SANs of the API server certificate when you create the cluster

This section describes how to customize the SANs of the API server certificate when you create an ACK managed cluster. You can customize the SANs of the API server certificate of a cluster of another type by referring to the procedure.

On the **Create Cluster** page, click **Show Advanced Options**. In the **Custom Certificate SANs** field, enter the SANs that you want to add to the API server certificate. For more information, see [Create an ACK managed cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-an-ack-managed-cluster-2/#task-skz-qwk-qfb).

**Note**

You can enter multiple values in the **Custom Certificate SANs** field. The values can be IP addresses, domain names, or URIs that comply with the conventions. Separate multiple values with commas (,).

![an2](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3639417171/p256859.png)

In the preceding figure, two domain names and an IP address are entered in the **Custom Certificate SANs** field.

## Customize the SANs of the API server certificate for an existing cluster

**Important**

If you update or modify the custom SANs of the API server certificate for an existing cluster, the API server may restart during this process. We recommend that you perform this operation during off-peak hours.

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left-side navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the cluster that you want to manage and click its name. In the left-side pane, click **Cluster Information**.
    
3.  On the details page of the cluster, click the **Basic Information** tab. In the **Network** section, click **Edit** on the right side of **Custom Certificate SANs**.
    
4.  In the **Update Custom SAN** dialog box, configure the **Custom Certificate SANs** parameter and click **OK**.
    

## **References**

The audit logs of API server can help you record or trace the daily operations of different users. For more information, see [Work with cluster auditing](/help/en/ack/ack-managed-and-ack-dedicated/security-and-compliance/work-with-cluster-auditing).
