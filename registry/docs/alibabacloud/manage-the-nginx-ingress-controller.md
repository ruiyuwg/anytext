The NGINX Ingress controller routes external traffic to services in your Container Service for Kubernetes (ACK) cluster. ACK provides the NGINX Ingress controller as an add-on that you can install, upgrade, configure, and uninstall from the ACK console.

> You must have permissions to manage cluster add-ons before you perform any of the operations described in this topic.

## Install the NGINX Ingress controller

Choose one of the following methods based on whether you are creating a new cluster or adding the controller to an existing cluster.

### Install during cluster creation

When you create an ACK cluster, select **Nginx Ingress** in the **Ingress** section of the **Component Configurations** step. Optionally, specify the source, type, and specification of the Server Load Balancer (SLB) instance for the NGINX Ingress controller.

### Install on an existing cluster

If your cluster does not have the NGINX Ingress controller installed, add it from the **Add-ons** page:

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left-side navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the cluster that you want to manage and click its name. In the left-side pane, click **Add-ons**.
    
3.  On the **Add-ons** page, click the **Networking** tab. Find the **Nginx Ingress Controller** card and click **Install**.
    
4.  In the **Install Nginx Ingress Controller** dialog box, configure the parameters and click **OK**.
    

## Upgrade and configure the NGINX Ingress controller

After installation, manage upgrades and configuration from the **Nginx Ingress Controller** card on the **Networking** tab of the **Add-ons** page.

### Precheck

Before an upgrade or configuration change, the system automatically runs a precheck to verify that the NGINX Ingress controller is healthy and meets requirements. If the precheck fails, fix the reported issues before you proceed.

### Upgrade

If the **Upgrade** button is not displayed on the **Nginx Ingress Controller** card, the installed version is already the latest. For upgrade notes and usage notes, see [Update the NGINX Ingress controller](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/update-the-nginx-ingress-controller).

## Uninstall the NGINX Ingress controller

To remove the NGINX Ingress controller from your cluster:

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left-side navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the cluster that you want to manage and click its name. In the left-side pane, click **Add-ons**.
    
3.  On the **Add-ons** page, click the **Networking** tab. Find the **Nginx Ingress Controller** card and click **Uninstall**.
    
4.  In the **Uninstall** dialog box, click **OK**.
    

## See also

-   [Update the NGINX Ingress controller](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/update-the-nginx-ingress-controller)
