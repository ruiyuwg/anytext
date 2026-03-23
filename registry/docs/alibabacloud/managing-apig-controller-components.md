Before you use APIG Ingress, install the component in the console. You can also upgrade or uninstall the component in the console.

## Install the APIG Controller component

**Important**

APIG Ingress is an upgraded version of MSE Ingress. In regions that support both APIG Ingress and MSE Ingress, the console displays only APIG Ingress options. This does not affect existing MSE Ingress users. You can continue to create and manage MSE Ingresses. To use MSE Ingress, or contact the APIG team.

## Install on an existing cluster

1.  Log on to the [Container Service Management Console](https://cs.console.alibabacloud.com) . In the navigation pane on the left, click **Clusters**.
    
2.  On the **Clusters** page, click the name of your cluster. In the navigation pane on the left, click **Add-ons**.
    
3.  On the **Add-ons** page, enter `APIG` in the search box. Then, on the **APIG Controller** component card, click **Install**.
    

## Install during cluster creation

When you create a cluster, in the **Ingress** parameter settings section of the **Component Configurations** step, select **APIG Ingress**. For more information about how to create a cluster, see [Create an ACK managed cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-an-ack-managed-cluster-2/#task-skz-qwk-qfb).

## Upgrade the APIG Controller component

1.  Log on to the [Container Service Management Console](https://cs.console.alibabacloud.com) . In the navigation pane on the left, click **Clusters**.
    
2.  On the **Clusters** page, click the name of your cluster. In the navigation pane on the left, click **Add-ons**.
    
3.  On the **Add-ons** page, click the **Networking** tab. On the **APIG Controller** card, click **Upgrade**.
    
    > If the Upgrade button is not available on the APIG Controller card, the component is already up to date.
    
4.  In the **Update** dialog box, click **OK**.
    

## Uninstall the APIG Controller component

1.  Log on to the [Container Service Management Console](https://cs.console.alibabacloud.com) . In the navigation pane on the left, click **Clusters**.
    
2.  On the **Clusters** page, click the name of your cluster. In the navigation pane on the left, click **Add-ons**.
    
3.  On the **Add-ons** page, click the **Networking** tab. In the lower-right corner of the **APIG Controller** card, click **Uninstall**.
    
4.  In the **Uninstall** dialog box, click **OK**.
