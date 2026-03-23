When you create a Container Service for Kubernetes (ACK) cluster, a private Classic Load Balancer (CLB) instance is automatically created for the API server as an internal connection endpoint. By associating an elastic IP address (EIP) to this private CLB instance, you can create a public endpoint to enable public access to the API server. To prevent unauthorized access to the API server, you can configure access control policies for the listener on port 6443 of this private CLB instance by setting whitelists or blacklists.

**Important**

Since the public endpoint and internal endpoint share the same private CLB instance, the access control policies configured for this CLB instance apply to both endpoints.

You can configure access control for each listener of a CLB instance. You can configure access control when you create a listener or modify access control settings for an existing listener. For more information, see [Access control](/help/en/slb/classic-load-balancer/user-guide/overview-3).

## Procedure

You can configure whitelists or blacklists for different listeners to accept or block access from specific IP addresses.

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left-side navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the cluster that you want to manage and click its name. In the left-side pane, click **Cluster Information**.
    
3.  On the **Cluster Information** page, click the **Basic Information** tab. In the **Network** section, click **Set access control** on the right side of **API server Internal Endpoint**. Read the notes, and then click **Confirm**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0970914471/p929365.png)
    
4.  In the Configure Access Control panel of the Server Load Balancer (SLB) console, turn on the **Access Control** switch, configure the ACL Type and ACL parameters, and then click **OK**.
    
    Before you enable access control, you must [create an ACL](/help/en/slb/classic-load-balancer/user-guide/overview-3#102c11b047jhp) and [add IP entries](/help/en/slb/classic-load-balancer/user-guide/overview-3#eab9036047790). For more information about CLB access control, see [Enable access control](/help/en/slb/classic-load-balancer/user-guide/overview-3#0bdfc5304703y).![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0970914471/p937587.png)
    
    **Important**
    
    When you configure access control policies, in addition to ensuring that the specified IP addresses on the user side can access the API server normally, the IP address ranges of the cluster control plane components and console-related services must also be able to access the API server. You must add the following CIDR blocks to the **whitelist** in the access control policy. Do not add them to the **blacklist** to avoid affecting the normal operation of cluster functions and management operations.
    
    -   The CIDR block managed by Container Service for Kubernetes, which is 100.104.0.0/16.
        
    -   The primary CIDR block and additional CIDR block (if any) of the cluster virtual private cloud (VPC), or the vSwitch CIDR block where the cluster nodes are located.
        
    -   The egress CIDR block of the client that needs to access the API server connection endpoint on the user side.
        
    -   In addition to the above CIDR blocks, ACK Edge clusters must allow the egress CIDR blocks of edge nodes.
        
    -   In addition to the above CIDR blocks, ACK Lingjun clusters must allow the CIDR block of the Lingjun Virtual Private Datacenter (VPD).
