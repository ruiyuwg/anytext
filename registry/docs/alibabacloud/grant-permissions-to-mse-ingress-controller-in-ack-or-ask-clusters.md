To route traffic through Microservices Engine (MSE) Ingress gateways in your Kubernetes cluster, grant the required Resource Access Management (RAM) permissions to MSE Ingress Controller. The permission method depends on your cluster type.

## Prerequisites

Before you begin, make sure that you have:

-   An Alibaba Cloud account with RAM administrative privileges
    
-   A Container Service for Kubernetes cluster (ACK managed, ACK Serverless, ACK dedicated, or ACS)
    

## Permission methods by cluster type

**Cluster type**

**Scenario**

**Permission method**

ACK managed or ACK Serverless

Existing cluster

[Install from the Add-ons page](#section-f1601ce8)

ACK managed or ACK Serverless

New cluster

[Authorize during cluster creation](#section-e154a2b9)

ACK dedicated

Existing cluster

[Attach the AliyunMSEFullAccess policy to the worker RAM role](#section-0i8-972-j1a)

ACS

New cluster

[Authorize during cluster creation](#bce2329966w7i)

## Install MSE Ingress Controller from the Add-ons page

Use this method for an existing ACK managed or ACK Serverless cluster. When you install MSE Ingress Controller on the **Add-ons** page, permission verification runs automatically. If "**Failed to pass the precheck.**" appears, complete the following steps:

1.  Hover over "**Failed to pass the precheck.**" and click **View Report**.
    
    ![Precheck failure error message with the View Report link](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2625505071/p745126.png)
    
2.  On the **Report** page, click the red box in the **Error** column. In the panel that appears, click the authorization **link**.
    
    ![Report page showing the Error column with the authorization link](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1625505071/p745128.png)
    
3.  On the **RAM Quick Authorization** page, click **Authorize**.
    
4.  Return to the **Add-ons** page and reinstall MSE Ingress Controller.
    

## Authorize during ACK managed or ACK Serverless cluster creation

Use this method when you select MSE Ingress Controller while creating a new ACK managed or ACK Serverless cluster.

1.  In the **Confirm Order** step, check the status of **MSE Ingress Authorization Check** in the **Dependency Check** section. If the status is **Failed**, click **Authorize Now**.
    
    ![Dependency Check section showing MSE Ingress Authorization Check with the Authorize Now link](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2625505071/p745127.png)
    
2.  On the **RAM Quick Authorization** page, click **Authorize**.
    
3.  Return to the **Confirm Order** step and click **Re-check**. After the check passes, click **Create Cluster**.
    

## Attach the AliyunMSEFullAccess policy in an ACK dedicated cluster

ACK dedicated clusters use a worker RAM role for node-level permissions. To grant MSE Ingress Controller access, attach the `AliyunMSEFullAccess` system policy to this role, then redeploy the controller.

### Step 1: Attach the policy

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com).
    
2.  In the left-side navigation pane, click **Clusters**, then click the name of the target cluster.
    
3.  On the **Cluster Information** page, click the **Basic Information** tab. In the **Cluster Resources** section, click the hyperlink next to **Worker RAM Role**.
    
4.  On the **Permissions** tab of the RAM role page, click **Grant Permission**.
    
5.  In the **Policy** section, select **System Policy** from the policy type drop-down list and search for `AliyunMSEFullAccess`.
    
    ![Search for and select the AliyunMSEFullAccess policy](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4303766471/p512946.png)
    
6.  Select **AliyunMSEFullAccess**, add it to the **Selected Policy** list, and click **Grant permissions**.
    

After the policy is attached, verify that **AliyunMSEFullAccess** appears in the policy list.

![Policy list showing the attached AliyunMSEFullAccess policy](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2625505071/p512975.png)

### Step 2: Redeploy MSE Ingress Controller

1.  In the cluster, locate the **ack-mse-ingress-controller** application in the **mse-ingress-controller** namespace.
    
2.  In the **Actions** column, click the menu icon (![menu icon](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1783884471/p944402.png)) and select **Redeploy**. Click **OK** to confirm.
    
    ![Redeploy the ack-mse-ingress-controller application](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4922550661/p465137.png)
    
3.  After the redeployment completes, click **ack-mse-ingress-controller** and confirm that the pod status is **Running**.
    
    ![Pod status showing Running](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2625505071/p465527.png)
    

### (Optional) Grant Simple Log Service permissions

To activate Simple Log Service for the MSE cloud-native gateway through an `MseIngressConfig` resource, grant additional Simple Log Service permissions to the worker RAM role.

#### Create a custom policy for Simple Log Service

1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/) as a RAM user with administrative privileges.
    
2.  In the left-side navigation pane, choose **Permissions** > **Policies**.
    
3.  On the **Policies** page, click **Create Policy**.
    
    ![Create Policy button on the Policies page](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0059564371/p886177.png)
    
4.  Click the **JSON** tab and enter the following policy content:
    
    ```
    {
        "Version": "1",
        "Statement": [
            {
                "Action": [
                    "log:CloseProductDataCollection",
                    "log:OpenProductDataCollection",
                    "log:GetProductDataCollection"
                ],
                "Resource": [
                    "acs:mse:*:*:instance/*",
                    "acs:log:*:*:project/*/logstore/mse_*"
                ],
                "Effect": "Allow"
            },
            {
                "Action": "ram:PassRole",
                "Resource": "acs:ram::*:role/aliyunserviceroleforslsaudit",
                "Effect": "Allow"
            },
            {
                "Action": "ram:CreateServiceLinkedRole",
                "Resource": "*",
                "Effect": "Allow",
                "Condition": {
                    "StringEquals": {
                        "ram:ServiceName": "audit.log.aliyuncs.com"
                    }
                }
            }
        ]
    }
    ```
    
5.  Click **OK**, then specify a **Policy Name** and **Description** in the dialog box. Click **OK** to save the policy.
    

#### Attach the custom policy to the worker RAM role

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com).
    
2.  In the left-side navigation pane, click **Clusters**, then click the name of the target cluster.
    
3.  On the **Cluster Information** page, click the **Basic Information** tab. In the **Cluster Resources** section, click the hyperlink next to **Worker RAM Role**.
    
4.  On the **Permissions** tab, click **Grant Permission**.
    
5.  In the **Policy** section, select **Custom Policy** from the policy type drop-down list and search for the policy name you specified in the previous section.
    
    **Note**
    
    The policy name is the custom name you defined when creating the policy.
    
    ![Search for and select the custom Simple Log Service policy](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4303766471/p532192.png)
    
6.  Select the policy, add it to the **Selected Policy** list, and click **Grant permissions**.
    

## Authorize during ACS cluster creation

Grant permissions to MSE Ingress Controller when you create an ACS cluster.

1.  In the **Confirm Order** step, check the status of **MSE Ingress Authorization Check** in the **Dependency Check** section. If the status is **Failed**, click **Authorize Now**.
    
    ![Dependency Check section showing MSE Ingress Authorization Check in an ACS cluster](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8067044271/p822309.png)
    
2.  On the **RAM Quick Authorization** page, click **Authorize**.
    
    ![RAM Quick Authorization page](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1783884471/p816011.png)
    
3.  Return to the **Confirm Order** step and click **Re-check**. After the check passes, click **Create Cluster**.
    

## What to do next

Set up traffic routing for your cluster. See [Use MSE Ingress gateways to access services in ACK clusters and ACS clusters](/help/en/mse/user-guide/use-mse-ingress-to-access-services-in-ack-clusters).
