The Application Load Balancer (ALB) Ingress controller is a fully managed component that directs traffic to Container Service for Kubernetes (ACK) clusters based on Layer 7 forwarding rules provided by ALB. This topic describes how to install, upgrade, and uninstall the ALB Ingress controller in an ACK managed cluster or an ACK dedicated cluster.

## Install the ALB Ingress controller

**Note**

For more information about the regions that support this add-on, see [Regions and zones that support ALB](/help/en/slb/application-load-balancer/product-overview/supported-regions-and-zones).

## Install the controller when you create a cluster

When you create an ACK managed cluster or an ACK dedicated cluster, select **ALB Ingress** in the **Ingress** section.

You can set **ALB Instance** to **New**, **Existing**, or **None**.

**Instance source**

**Description**

**Result**

(Recommended) **New**

-   **Network Type**: Create an **Internet** or **Intranet** ALB instance based on your requirements. For billing details, see [ALB billing rules](/help/en/slb/application-load-balancer/product-overview/alb-billing-rules).
    
-   **VPC**: The default value is the same as the VPC of the cluster.
    
-   **vSwitch**: Displays the vSwitches that correspond to the zones supported by Application Load Balancer (ALB) in this virtual private cloud (VPC). You must specify two vSwitches in different zones. If you specify none, two available vSwitches are automatically selected. Alternatively, click **Create vSwitch** to create new vSwitches.
    

The Controller automatically creates an AlbConfig named `alb` and a corresponding IngressClass resource. By default, the AlbConfig is configured with an HTTP listener on port 80. For more information about listener extensions, see [Create an HTTPS listener](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-albconfigs-to-configure-alb-instances#fcdd47732aaob).

(Recommended) **Existing**

Select an existing ALB instance from the drop-down list. Basic ALB instances are not supported. See [Reuse an existing ALB instance](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-albconfigs-to-configure-alb-instances#section-nhc-5if-ou3).

(Optional) **None**

Installs only the ALB Ingress controller. No ALB instance is created.

**Important**

The controller does not create the related resources. You must manually [create an AlbConfig](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-albconfigs-to-configure-alb-instances#section-6su-pov-aml) and an [IngressClass](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-albconfigs-to-configure-alb-instances#section-ca6-6ol-iqb).

## Install the controller for an existing cluster

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the one you want to manage and click its name. In the left navigation pane, click **Add-ons**.
    
3.  On the **Add-ons** page, click the **Networking** tab. In the **Networking** section, on the **ALB Ingress Controller** card, click **Install** in the lower-right corner.
    
4.  In the **Install ALB Ingress Controller** dialog box, for **ALB Instance**, select **New**, **Existing**, or **None**, configure other parameters, then click **OK**.
    
    **Instance source**
    
    **Description**
    
    **Result**
    
    (Recommended) **New**
    
    -   **Network Type**: Create an **Internet** or **Intranet** ALB instance based on your requirements. For billing details, see [ALB billing rules](/help/en/slb/application-load-balancer/product-overview/alb-billing-rules).
        
    -   **VPC**: The default value is the same as the VPC of the cluster.
        
    -   **vSwitch**: Displays the vSwitches that correspond to the zones supported by Application Load Balancer (ALB) in this virtual private cloud (VPC). You must specify two vSwitches in different zones. If you specify none, two available vSwitches are automatically selected. Alternatively, click **Create vSwitch** to create new vSwitches.
        
    
    The Controller automatically creates an AlbConfig named `alb` and a corresponding IngressClass resource. By default, the AlbConfig is configured with an HTTP listener on port 80. For more information about listener extensions, see [Create an HTTPS listener](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-albconfigs-to-configure-alb-instances#fcdd47732aaob).
    
    (Recommended) **Existing**
    
    Select an existing ALB instance from the drop-down list. Basic ALB instances are not supported. See [Reuse an existing ALB instance](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-albconfigs-to-configure-alb-instances#section-nhc-5if-ou3).
    
    (Optional) **None**
    
    Installs only the ALB Ingress controller. No ALB instance is created.
    
    **Important**
    
    The controller does not create the related resources. You must manually [create an AlbConfig](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-albconfigs-to-configure-alb-instances#section-6su-pov-aml) and an [IngressClass](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-albconfigs-to-configure-alb-instances#section-ca6-6ol-iqb).
    

## Upgrade the ALB Ingress controller

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the one you want to manage and click its name. In the left navigation pane, click **Add-ons**.
    
3.  On the **Add-ons** page, click the **Networking** tab, and in the **ALB Ingress Controller** section, click **Upgrade**.
    
    **Note**
    
    If the **ALB Ingress Controller** section does not display an **Upgrade** button, the component is already updated to the latest version.
    
4.  In the **Update** dialog box, click **OK**.
    

## Uninstall the ALB Ingress controller

**Important**

-   Before you uninstall the add-on, delete the AlbConfig from the cluster. The ALB Ingress controller automatically releases the corresponding ALB instance.
    
-   After you uninstall the ALB Ingress controller:
    
    -   If an AlbConfig is not deleted from the cluster, the corresponding ALB instance is not released and continues to incur fees.
        
    -   If you manually delete the AlbConfig after the controller is uninstalled, the ALB instance cannot be released. This is because the reconciliation operation cannot be completed without the controller. To resolve this issue, you must reinstall the add-on, delete the AlbConfig to release the corresponding ALB instance, and then uninstall the add-on.
        

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the one you want to manage and click its name. In the left navigation pane, click **Add-ons**.
    
3.  On the **Add-ons** page, click the **Networking** tab. In the **ALB Ingress Controller** section, click **Uninstall**.
    
4.  In the **Uninstall** dialog box, click **OK**.
    

## **References**

-   For information about how to use the ALB Ingress controller and its change history, see [Release notes of ALB Ingress Controller](/help/en/ack/product-overview/alb-ingress-controller).
    
-   If you use an ACK dedicated cluster, you must also grant the required access permissions to the ALB Ingress controller. For more information, see [Grant access permissions to the ALB Ingress controller for an ACK dedicated cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/grant-permissions-to-the-alb-ingress-controller).
    
-   To learn how to create and use an ALB Ingress, see [Create an ALB Ingress](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-and-use-alb-ingress-to-expose-services-to-the-public).
