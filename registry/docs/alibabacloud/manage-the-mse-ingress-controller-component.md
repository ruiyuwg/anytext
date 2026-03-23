Container Service for Kubernetes (ACK) managed clusters, ACK Serverless clusters, and Container Compute Service (ACS) clusters provide a managed MSE Ingress Controller that is based on the MSE cloud-native gateway. This topic describes how to install, upgrade, and uninstall the MSE Ingress Controller component in these clusters.

## Install the MSE Ingress Controller

**Note**

You can install the MSE Ingress Controller in ACK managed clusters, ACK Serverless clusters, and ACS products.

### Method 1: Install the MSE Ingress Controller during cluster creation

-   When you create an ACK managed cluster or an ACK Serverless cluster, in the **Ingress** section of the **Component Configurations** step, select to install MSE Ingress. For more information, see [Create an ACK managed cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-an-ack-managed-cluster-2/#task-skz-qwk-qfb) and [Create an ACK Serverless cluster](/help/en/ack/serverless-kubernetes/user-guide/create-an-ask-cluster-2).
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3521248071/p767992.png)
    
-   When you create an ACS cluster, in the **Component Configurations** area, select MSE Ingress for the **Ingress** parameter. For more information, see [Create an ACS cluster](/help/en/cs/user-guide/create-an-acs-cluster).
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1976509471/p872016.png)
    

### Method 2: Install the MSE Ingress Controller from the component management page

1.  #### ACK managed clusters/ACK Serverless clusters
    
    1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
        
    2.  On the **Clusters** page, find the one you want to manage and click its name. In the left navigation pane, click **Add-ons**.
        
    
    #### ACS
    
    1.  Log on to the [ACS console](https://acs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
        
    2.  On the **Clusters** page, click the name of the target cluster. In the left navigation pane, click **Add-ons**.
        
    
2.  On the **Add-ons** page, enter `mse` in the search box and then click **Install** on the **MSE Ingress Controller** component card.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9017931571/p963659.png)
    

## Upgrade the MSE Ingress Controller component

1.  #### ACK managed clusters/ACK Serverless clusters
    
    1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
        
    2.  On the **Clusters** page, find the one you want to manage and click its name. In the left navigation pane, click **Add-ons**.
        
    
    #### ACS
    
    1.  Log on to the [ACS console](https://acs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
        
    2.  On the **Clusters** page, click the name of the target cluster. In the left navigation pane, click **Add-ons**.
        
    
2.  On the Add-ons page, click the **Networking** tab. In the **MSE Ingress Controller** card area, click **Upgrade**.
    
    **Note**
    
    If the Upgrade button is not available on the MSE Ingress Controller card, the component is up to date.
    
3.  In the dialog box, click **OK**.
    

## Uninstall the MSE Ingress Controller component

1.  #### ACK managed clusters/ACK Serverless clusters
    
    1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
        
    2.  On the **Clusters** page, find the one you want to manage and click its name. In the left navigation pane, click **Add-ons**.
        
    
    #### ACS
    
    1.  Log on to the [ACS console](https://acs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
        
    2.  On the **Clusters** page, click the name of the target cluster. In the left navigation pane, click **Add-ons**.
        
    
2.  On the **Add-ons** page, click the ****Networking**** tab. On the **MSE Ingress Controller** card, click **Uninstall** in the lower-right corner.
    
3.  In the **Uninstall** dialog box, click **OK**.
