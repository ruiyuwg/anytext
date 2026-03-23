The master nodes of a Container Service for Kubernetes (ACK) dedicated cluster are created and maintained by users. To facilitate cluster maintenance and management, ACK allows you to connect to the master nodes of an ACK dedicated cluster by using SSH. This topic describes how to enable SSH logon over the Internet for an ACK dedicated cluster and how to connect to the master nodes of an ACK dedicated cluster by using SSH.

## Prerequisites

An ACK dedicated cluster is created and an elastic IP address (EIP) is associated with the API server of the cluster. For more information, see [Expose the API server to the Internet](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/control-public-access-to-the-api-server-of-a-cluster#task-2494620) and [Create an ACK dedicated cluster (discontinued)](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-an-ack-dedicated-cluster/).

If you enable **SSH logon** when you create an ACK dedicated cluster, ACK automatically generates an IP address for you to access the master nodes by using SSH. The IP address is displayed in the **Master Node IP Address for SSH Logon** parameter of the **Basic Information** tab. You can use this IP address to log on to the master nodes of the ACK dedicated cluster.

If you do not enable SSH logon over the Internet when you create a cluster, you must add a listener that listens on SSH port 22 to the Server Load Balancer (SLB) instance of the API server. Then, you can log on to the master nodes of the cluster by using SSH.

## Step 1: Add a listener that listens on SSH port 22 to the SLB instance of the API server

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left-side navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the cluster you want and click its name. In the left-side pane, click **Cluster Information**.
    
3.  Click the **Basic Information** tab, find **API server SLB**, and click the instance ID.
    
4.  Click **Create Listener** in the upper-right corner and then perform the following steps.
    
    The following section describes how to add a listener that listens on SSH port 22 in a few steps. For more information, see [Add a TCP listener](/help/en/slb/classic-load-balancer/user-guide/add-a-tcp-listener#task-1563673).
    
    1.  Select **TCP** as the listener protocol, set **Listener Port** to **22**, and then click **Next**.
        
    2.  Select **Default Server Group**. In the **Selected Servers** section, enter **22** in the Port column for all master nodes, set the weights of the master nodes based on your business requirements, and then click **Next**.
        
    3.  In the **Health Check** step, click **Next**.
        
    4.  In the **Confirm** step, click **Submit**.
        
    
    The newly created listener named **tcp\_22** is displayed on the **Listener** tab.
    
5.  Click the **Instance Details** tab. The **Endpoint** parameter of the **Billing Information** section displays the public IP address of the SLB instance.
    
    You can use this IP address to log on to the master nodes of the ACK dedicated cluster.
    

## **Step 2: Use SSH to log on to the master nodes**

When you create a cluster, you can select key pair logon or password logon. For more information, see [Create an ACK dedicated cluster (discontinued)](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-an-ack-dedicated-cluster/#task-skz-qwk-qfb). Select a logon mode based on your business requirements:

-   Password logon: The default username is root. The password is the same as the password that you specified when you create the cluster.
    
-   Key pair logon: For more information, see [Connect to a Linux instance by using an SSH key pair](/help/en/ecs/user-guide/connect-to-a-linux-instance-by-using-an-ssh-key-pair#concept-ucj-wrx-wdb).
