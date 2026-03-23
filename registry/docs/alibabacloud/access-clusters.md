You can connect to the API server of a Container Service for Kubernetes (ACK) cluster over the Internet or an internal network. In addition to the ACK console, you can use command-line tools to interact with the API server of ACK clusters. The command-line tools include the kubectl provided by Kubernetes and the web-based command-line tools Workbench and CloudShell provided by Alibaba Cloud.

## **1.** **Configure the network mode and network ACLs for access to an ACK cluster**

You can connect to the API server of an ACK cluster over the Internet or an internal network and configure network access control lists (ACLs) for the API server.

-   Connection over an internal network: When you create an ACK cluster, ACK creates an internal-facing Classic Load Balancer (SLB) instance that provides an internal endpoint for the API server. Cloud resources deployed in the same virtual private cloud (VPC) can communicate with each other.
    
-   Connection over the Internet: You can associate an elastic IP address (EIP) with the internal-facing CLB instance created for the API server of an ACK cluster to enable access to the cluster over the Internet. For more information, see [Control public access to the API server of a cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/control-public-access-to-the-api-server-of-a-cluster).
    

To prevent unauthorized access to the API server of an ACK cluster, we recommend that you configure network ACLs for the listener port 6443 of the CLB instance created for the API server. You can configure network ACLs as whitelists or blacklists to limit access to the API server. For more information, see [Configure network ACLs for the API server of an ACK cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-network-acls-for-the-api-server-of-an-ack-cluster).

## **2\. Manage kubeconfig files**

Before you connect to a Kubernetes cluster, you must obtain the [kubeconfig](https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/) file of the cluster. The kubeconfig file stores the credentials used to connect to the Kubernetes client and authenticate access to the cluster over the Internet or an internal network. ACK allows you to issue kubeconfig files for different Alibaba Cloud accounts, Resource Access Management (RAM) users, or RAM roles. To reduce security risks, we recommend that you use [temporary kubeconfig files](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/obtain-the-kubeconfig-file-of-a-cluster-and-use-kubectl-to-connect-to-the-cluster#section-4ps-hwr-03y) and exercise caution when you configure the validity periods of temporary kubeconfig files. For more information about how to obtain, revoke, and delete kubeconfig files, see [Kubeconfig file management](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/kubeconfig-operation-guide/).

## **3.** Select cluster connection methods

You can select different cluster connection and management methods based on factors such as whether the cluster supports Internet access.

> Before you use a RAM user to connect to an ACK cluster, you must assign a service-linked role to ACK and authorize the RAM user to access the cluster. For more information, see [Authorization](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/authorization-overview/#concept-268689).

-   Log on to the [Container Service console](https://cs.console.alibabacloud.com).
    
    > When you use a RAM user to access the console, you must configure the corresponding cloud service permissions. For more information, see [Required permissions for the ACK console](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/ack-console-permission-dependencies).
    
-   Use the kubectl provided by Kubernetes and the web-based command-line tools Workbench and CloudShell provided by Alibaba Cloud.
    
    **Tool**
    
    **Description**
    
    **Local installation**①
    
    **Access over an internal network**
    
    **Access over the Internet**
    
    **References**
    
    [kubectl](https://kubernetes.io/docs/tasks/kubectl/install/)
    
    A command-line tool provided by Kubernetes.
    
    Required①
    
    Supported
    
    Supported
    
    [Obtain the kubeconfig file of a cluster and use kubectl to connect to the cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/obtain-the-kubeconfig-file-of-a-cluster-and-use-kubectl-to-connect-to-the-cluster)
    
    [Workbench](/help/en/ecs/user-guide/workbench-overview/)
    
    A web-based tool that allows you to connect to Elastic Compute Service (ECS) instances without the need for additional software.
    
    Not required
    
    Supported
    
    Supported
    
    [Use kubectl on Workbench or Cloud Shell to connect to ACK clusters](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-kubectl-on-cloud-shell-to-manage-ack-clusters-1690962464408)
    
    [CloudShell](/help/en/cloud-shell/what-is-the-cloud-command-line)
    
    A web-based shell that creates a Linux VM pre-installed with various [programming languages and command-line tools](/help/en/cloud-shell/pre-installed-software-list#topic-2390967).
    
    Not required
    
    Not supported
    
    Supported
    
    ①: You can use Workbench and Cloud Shell in a browser. To use kubectl, you must first install a kubectl client on your machine. By default, kubectl clients are pre-installed on worker nodes in ACK clusters.
    

## **References**

If your applications in an ACK cluster need to access external resources over the Internet, such as pulling images or updating dependency libraries over the Internet, refer to [Enable an existing ACK cluster to access the Internet](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/enable-an-existing-ack-cluster-to-access-the-internet).
