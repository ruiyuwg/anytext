This topic describes the symptoms, root causes, and solutions for Container Service for Kubernetes (ACK) console access failures to clusters, including scenarios such as API server request exceptions, errors occurred during pod log access due to API server failures, and the lack of required cluster role-based access control (RBAC) permissions for the current account.

## An API server request exception occurs when you access a cluster resource, and the `ErrorQueryClusterNamespace` or `APIServer.500` error code is returned

#### **Issue**

When you use the ACK console to access a cluster resource, the system returns the following error message: "An error occurred while processing your request to the API server of the current cluster." The error code is `ErrorQueryClusterNamespace` or `APIServer.500`.

![88](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5104833371/p450403.jpg)

#### **Cause**

The load balancing configuration of the API server is invalid or the status of the API server is abnormal. As a result, the ACK management services fail to connect to the API server.

#### **Solution**

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the navigation pane on the left, click **Clusters**.
    
2.  On the **Clusters** page, find the target cluster and click its name. In the navigation pane on the left, click **Cluster Information**.
    
3.  On the cluster details page, click the **Basic Information** tab, and click the hyperlink to the right of **API server SLB** to log on to the [Server Load Balancer (SLB) console](https://slb.console.alibabacloud.com).
    
    -   If the system displays the **The specified SLB ID does not exist.** message, the SLB instance for the API server is deleted or released, and the cluster cannot be restored. To recreate the cluster, see [Create an ACK managed cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-an-ack-managed-cluster-2/#task-skz-qwk-qfb).
        
    -   Otherwise, proceed to the next step.
        
    
4.  Check whether the **Status** of the SLB instance is **Running**.
    
    -   If not, check if the instance has overdue payment or has expired. If this is the case, you must settle the overdue payment or renew the subscription, then restart the SLB instance. For more information about overdue payments related to SLB instances, see [CLB billing](/help/en/slb/classic-load-balancer/product-overview/billing-overview/#ed26cf4045vxz).
        
    -   If yes, proceed to the next step.
        
    
5.  Click the **Listener** tab to check whether the SLB instance has a listener whose **Frontend Protocol/Port** and **Backend Protocol/Port** settings are set to **TCP:6443**, and whether the **Status** column of the listener displays **Running**.
    
    -   If not, the configuration of the listener for the API server has been modified.
        
        -   If the preceding listener exists but the listener is in the **Stopped** status, select the listener and click **Enable**.
            
        -   If the preceding listener does not exist, perform the following operation:
            
            -   For ACK managed clusters, [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm).
                
            -   For ACK dedicated clusters, make sure that all master nodes are added to the default server group. Then, create a listener whose **Frontend Protocol/Port** and **Backend Protocol/Port** settings are set to **TCP:6443**, associate the listener with the **default server group**, and start the listener. For more information about how to add a listener, see [Add a TCP listener](/help/en/slb/classic-load-balancer/user-guide/add-a-tcp-listener#task-1563673).
                
    -   If yes, proceed to the next step.
        
    
6.  Check whether the **Health Check Status** column of the listener displays **Normal**.
    
    -   If not, the backend servers of the SLB instance for the API server are abnormal.
        
        -   For ACK managed clusters, [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm).
            
        -   For ACK dedicated clusters, perform the following operations for troubleshooting. If the issue persists, [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm).
            
            -   On the **Nodes** > **Nodes** page of the [ACK console](https://cs.console.alibabacloud.com), check the status of each master instance: Click the Elastic Compute Service (ECS) instance ID corresponding to the master node to redirect to the [Elastic Compute Service console](https://ecs.console.alibabacloud.com), then verify whether the instance is in the **Running** state.
                
            -   Use the [ECS console](https://ecs.console.alibabacloud.com) to log on to each master node and check whether the API server's container runs as normal.
                
                1.  For more information about how to log on to a master node, see [Connection method overview](/help/en/ecs/user-guide/connect-to-instance#concept-tmr-pgx-wdb).
                    
                2.  Use one of the following methods to check whether the API server's container runs as normal:
                    
                    -   For clusters using the Docker runtime: Run the `docker ps | grep kube-apiserver` command. Then, based on the output returned, run the `docker inspect` command to check the container status.
                        
                    -   For clusters using the containerd runtime: Run the `crictl ps | grep kube-apiserver` command. Then, based on the output returned, run the `crictl inspect` command to check the container status.
                        
    -   If yes, proceed to the next step.
        
    
7.  Check whether access control is enabled for the preceding listener.
    
    -   If yes, it indicates that the whitelist of the listener for [access control](/help/en/slb/classic-load-balancer/user-guide/overview-3#concept-2167216) is not correctly configured. To resolve this issue, add the CIDR block `100.104.0.0/16` to the whitelist. The CIDR block specifies the source IP addresses of the internal requests that are sent by the ACK management services to the API server.
        
    -   If not, proceed to the next step.
        
    
8.  If the exception is not caused due to the preceding reasons, [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm).
    

## An API server request exception occurs when you access pod logs

If this exception occurs when you access the log of a pod but you can access other cluster resources as normal, perform the following operations to troubleshoot the issue:

1.  Check whether the pod's status is **Running**. If not, see [Pod troubleshooting](/help/en/ack/ack-managed-and-ack-dedicated/support/pod-troubleshooting#task-2187029).
    
2.  Go to the **Nodes** > **Nodes** page, find the node where the pod is deployed in the node list, and click the corresponding ECS instance ID to redirect to the [ECS console](https://ecs.console.alibabacloud.com). In the navigation pane on the left, click **Network & Security** > **Security Groups**.
    
3.  Check all security group rules to verify whether inbound access from VPCs to TCP port 10250 is open. If not, see [Add a security group rule](/help/en/ecs/user-guide/add-a-security-group-rule#concept-sm5-2wz-xdb) to add the corresponding rules.
    
4.  If none of the above applies, [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm) for assistance.
    

## The current account does not have the required RBAC permissions to perform the operation, and the `ForbiddenQueryClusterNamespace` or `APISERVER.403` error code is returned

#### **Issue**

When you access the ACK console, the system returns the following error message: "The current account does not have the required RBAC permissions to perform the operation". The error code is `ForbiddenQueryClusterNamespace` or `APISERVER.403`.

#### **Cause**

The account that you use does not have the required RBAC permissions to perform the operation.

#### **Solution**

1.  Use an Alibaba Cloud account or an account that has administrator permissions to log on to the [ACK console](https://cs.console.alibabacloud.com). In the left-side navigation pane, click **Authorizations**.
    
2.  On the **RAM Users** tab, find the Resource Access Management (RAM) user that causes the error and click **Modify Permissions** for the RAM user.
    
3.  In the **Permission Management** panel, click **Add Permissions**, select a cluster, a namespace, and a predefined RBAC role, then click **Submit**.
    

## The current account does not have the required RAM permissions to perform the operation, and the `StatusForbidden` error code is returned

#### **Issue**

When you access the ACK console, the system returns the following error message: "The current account does not have the required RAM permissions to perform the operation". The error code is `StatusForbidden`.

#### **Cause**

The account that you use does not have the required RAM permissions to perform the operation.

#### **Solution**

1.  Use an Alibaba Cloud account or an account that has RAM permissions to log on to the [RAM console](https://ram.console.alibabacloud.com/).
    
2.  Grant your account the required permissions based on the CS information that is returned by the system, such as **cs:DescribeKubernetesVersionMetadata**. For more information, see [Create a custom RAM policy](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-custom-ram-policy#task-1664328).
