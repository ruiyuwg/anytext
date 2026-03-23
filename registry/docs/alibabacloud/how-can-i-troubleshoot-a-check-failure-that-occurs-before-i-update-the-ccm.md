## Problem description

A check failure may occur before you update the cloud controller manager (CCM) of a Container Service for Kubernetes (ACK) cluster.

## Solutions

> Take note of the following items:
> 
> -   Before you perform operations that may cause risks, such as modifying instance configurations or data, check the disaster recovery and fault tolerance capabilities of the instances to ensure data security.
> -   Before you modify the configurations and data of instances that include, but are not limited to, Elastic Compute Service (ECS) and ApsaraDB RDS instances, create snapshots or enable RDS log backup.
> -   If you have authorized or submitted sensitive information, such as the logon account and password, in the Alibaba Cloud Management Console, modify the information at the earliest opportunity.

### Usage notes

-   Before you update the CCM, we recommend that you know more about the new features of the CCM. For more information, see [Cloud Controller Manager](/help/en/ack/product-overview/cloud-controller-manager).
-   If you modify the Service object of the CCM during the update check, the check results may be invalid. In this case, perform the check again after the modification. If the check fails multiple times, [submit a ticket](https://workorder-intl.console.aliyun.com/#/ticket/createIndex).
-   Assume that the CCM version v1.9.3.164-g2105d2e-aliyun or later is used and the externalTrafficPolicy parameter is set to Local. In this case, the Service object automatically specifies a weight for a node based on the number of pods that are assigned to the node. For more information about the weight calculation rules, see [How does CCM calculate node weights in Local mode?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-network-management) Assume that your CCM version is earlier than v1.9.3.164-g2105d2e-aliyun. After you update the CCM, the weights of the nodes that serve as the backend services of the Server Load Balancer (SLB) instance are automatically changed. This ensures a more balanced traffic load among the pods. You can check the load distribution among the pods based on the traffic changes.
-   If you want to find the instance that fails a check, you can click the Instance Information tab on the right of the Check Result tab. On the Instance Information tab, the instance ID is the ID of the SLB instance, and the instance name consists of the namespace and service.

### Error messages and solutions for the CCM update check

Error message

Cause

Solution

create a new load balancer

An SLB instance is created when a Service object is created or synchronized from an existing Service object during the update.

Use the console or run the following command to check whether the Service object is in the Pending state. If the Service object is in the Running state and a public IP address is used, perform the check again. If the Service object is in the Pending state, submit a ticket.

kubectl get svc \[$Svc\_Name\] -n \[$Namespace\]

> **Note**:
> 
> -   \[$Svc\_Name\] specifies the name of the Service object.
> -   \[$Namespace\] specifies the namespace of the Service object.

modify the slb instance spec

The specifications of the SLB instance are different from those specified for the Service object.

In the annotations of the Service object, set the `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-spec` parameter to the specifications of the SLB instance. For more information, see [Use annotations to configure load balancing](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/add-annotations-to-the-yaml-file-of-a-service-to-configure-clb-instances).

delete the load balancer

The Service object does not exist, but the SLB instance with which the Service object is associated still exists.

If you no longer need the SLB instance, delete the SLB instance in the SLB console. If you need the SLB instance, submit a ticket.

modify the slb internet spec

The bandwidth or billing method of the SLB instance is different from that specified for the Service object.

-   If the specified bandwidth is invalid, set the service.beta.kubernetes.io/alibaba-cloud-loadbalancer-bandwidth parameter in the annotations of the Service object to the bandwidth of the SLB instance. For more information, see [Use annotations to configure load balancing](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/add-annotations-to-the-yaml-file-of-a-service-to-configure-clb-instances).
-   If the specified billing method is invalid, set the service.beta.kubernetes.io/alibaba-cloud-loadbalancer-charge-type parameter in the annotations of the Service object to the billing method of the SLB instance. For more information, see [Use annotations to configure load balancing](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/add-annotations-to-the-yaml-file-of-a-service-to-configure-clb-instances).

remove backend servers

The endpoint of the Service object is different from that specified for the backend server of the SLB instance.

-   If you have not modified the configuration of the backend server in the SLB console, do not change the endpoint of the Service object during the update check. Perform the check again.
-   If you have modified the configuration of the backend server in the SLB console, restore the previous configuration of the backend server of the SLB instance. Then, perform the check again.

add backend servers

stop listener

The port of the Service object is different from that specified for the SLB listener.

-   If you have not modified the configuration of the SLB listener in the SLB console, do not modify the Service object during the update check. Then, perform the check again.
-   If you have manually modified the monitoring configuration in the SLB console:  
    Please execute the following command to view the specific inconsistent configuration, and then restore the SLB monitoring configuration in the SLB console, and then re-initiate the detection.  
    `kubectl -n [$Namespace] describe svc [$Svc_Name]`

start listener

delete listener

The port of the Service object is different from that specified for the SLB listener.

-   If you have not modified the configuration of the SLB listener in the SLB console, do not modify the Service object during the update check. Then, perform the check again.
-   If you have modified the configuration of the SLB listener in the SLB console, delete the SLB listener. Then, perform the check again.

create listener

The port of the Service object is different from that specified for the SLB listener.

-   If you have not modified the configuration of the SLB listener in the SLB console, do not modify the Service object during the update check. Then, perform the check again.
-   If you have modified the configuration of the SLB listener in the SLB console, delete and then create the SLB listener. Then, perform the check again.

update listener

The port of the Service object is different from that specified for the SLB listener.

-   If you have not modified the configuration of the SLB listener in the SLB console, do not modify the Service object during the update check. Then, perform the check again.
-   Please execute the following command to view the specific inconsistent configuration, and then restore the SLB monitoring configuration in the SLB console, such as certificate, access control, health check, cookie settings, etc., and then re-initiate the detection, see [Use annotations to configure load balancing](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/add-annotations-to-the-yaml-file-of-a-service-to-configure-clb-instances).  
    `kubectl -n [$Namespace] describe svc [$Svc_Name]`  
    

create VServerGroup

The endpoint of the Service object is different from that specified for the vServer group of the SLB instance.

-   If you have not modified the configuration of the vServer group in the SLB console, do not change the endpoint of the Service object during the update check. Perform the check again. If you are repeatedly prompted the "create vServerGroup" message after multiple checks, [submit a ticket](https://workorder-intl.console.aliyun.com/#/ticket/createIndex).
-   If you have modified the configuration of the vServer group in the SLB console, restore the previous configuration of the vServer group of the SLB instance. Then, perform the check again.

delete VServerGroup

The endpoint of the Service object is different from that specified for the vServer group of the SLB instance.

-   If you have not modified the configuration of the vServer group in the SLB console, do not change the endpoint of the Service object during the update check. Perform the check again.
-   If you have modified the configuration of the vServer group in the SLB console, restore the previous configuration of the vServer group of the SLB instance. Then, perform the check again.

add VServerGroup backends

remove VServerGroup backends

## Applicable scope

-   ACK
