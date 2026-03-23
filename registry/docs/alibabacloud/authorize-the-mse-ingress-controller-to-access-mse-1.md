If you want to use Microservices Engine (MSE) Ingresses to expose Services in your Container Service for Kubernetes (ACK) cluster, you must first authorize the MSE Ingress controller to access MSE. This topic describes how to authorize the MSE Ingress controller to access MSE.

## Step 1: Install the MSE Ingress controller

### Method 1: Install the MSE Ingress controller when you create a cluster

On the Component Configurations wizard page, select MSE Ingress in the Ingress section. For more information about cluster parameters, see [Create an ACK managed cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-an-ack-managed-cluster-2/#task-skz-qwk-qfb). ![MSE Ingress](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5539227761/p556530.png)

### Method 2: Install the MSE Ingress controller for an existing cluster on the Add-ons page

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com) and click Clusters in the left-side navigation pane.
2.  On the Clusters page, click the name of a cluster and choose Operations > Add-ons in the left-side navigation pane.
3.  On the Add-ons page, click the Networking tab. Find MSE Ingress Controller and click Install.
4.  In the Install MSE Ingress Controller dialog box, select or clear Cascade Delete SLB Instance and click OK.

## Step 2: Authorize the MSE Ingress controller to access MSE

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com) and click Clusters in the left-side navigation pane.
2.  On the Clusters page, click the name of a cluster and click Cluster Information in the left-side navigation pane.
3.  On the Cluster Information page, click the Cluster Resources tab, and then click the hyperlink next to Worker RAM Role.
4.  On the Permissions tab of the role details page, click Grant Permission.
5.  In the Select Policy section of the Grant Permission panel, click the System Policy tab. Enter AliyunMSEFullAccess in the search box below. Click AliyunMSEFullAccess after it appears. Then, click OK.
    
    ![Grant permissions](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4741765761/p548793.png)
    

## Step 3 (optional): Authorize your cluster to access Log Service

If you want to enable Log Service for the MSE cloud-native gateway by using MseIngressConfig, you must grant the worker RAM role of your cluster the permissions to access Log Service.

1.  Create a RAM policy.
    1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/) with your Alibaba Cloud account.
    2.  In the left-side navigation pane, choose Permissions > Policies. On the page that appears, click Create Policy.
    3.  On the Create Policy page, click the JSON tab, enter the following policy content in the code editor, and then click Next to edit policy information.
        
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
        
    4.  Specify the Name and Note parameters, and then click OK.
2.  Authorize your cluster to access Log Service
    1.  Log on to the [ACK console](https://cs.console.alibabacloud.com) and click Clusters in the left-side navigation pane.
    2.  On the Clusters page, click the name of a cluster and click Cluster Information in the left-side navigation pane.
    3.  On the Cluster Information page, click the Cluster Resources tab, and then click the hyperlink next to Worker RAM Role.
    4.  On the Permissions tab of the role details page, click Grant Permission.
    5.  In the Select Policy section of the Grant Permission panel, click the Custom Policy tab. Enter the name of the custom policy that you created in [Step](#step-i73-dt4-pc9) [1](#step-i73-dt4-pc9). Click the policy after it appears. Then, click OK.
