To securely access and manage your container images in Alibaba Cloud Container Registry (ACR), ACR provides identity authentication for clients such as Docker and containerd. After successful authentication and authorization, you can securely push and pull container images and Helm charts.

## Background information

Access credentials authenticate clients such as Docker and containerd. Authorization after successful authentication is based on your configured Resource Access Management (RAM) access control policies. For more information, see [RAM access control policies](/help/en/acr/user-guide/ram-authorization-information#task-2092160). After successful authentication and authorization, you can push and pull container images and Helm charts. Use a password different from your console login password to reduce risk if client-side credentials are exposed.

Access credentials are independent of your Alibaba Cloud account and password. They come in two types:

-   Permanent password: Does not expire. Store it securely. If lost, reset it by setting a new one.
    
-   Temporary password: Valid for one hour. If requested through Security Token Service (STS), its validity matches that of the STS token.
    

**Note**

Alibaba Cloud accounts and RAM users have independent access credentials. A RAM user cannot use the access credentials of the Alibaba Cloud account. Each RAM user must configure its own access credentials.

## Use a permanent password

**Note**

Container Registry does not support role-based logon. Use a temporary password instead.

### **Procedure**

1.  Log on to the [Container Registry console](https://cr.console.alibabacloud.com).
    
2.  In the top navigation bar, select a region.
    
3.  In the navigation pane on the left, click **Instances**.
    
4.  On the **Instances** page, click the Enterprise Edition instance that you want to manage.
    
5.  In the navigation pane on the left of the Enterprise Edition instance management page, choose **Instances** > **Access Credential**.
    
6.  On the **Access Credential** page, click **Set Password**.
    
7.  In the **Set Password** dialog box, enter a password in the **Password** field and confirm it in the **Confirm Password** field. Then click **Confirm**.
    

### **What to do next**

Log on to the Enterprise Edition instance.

1.  Configure access control for the Internet or virtual private clouds (VPCs). For more information, see [Configure access over the Internet](/help/en/acr/user-guide/configure-access-over-the-internet#task484) or [Configure a VPC ACL](/help/en/acr/user-guide/configure-access-over-vpcs#task1305).
    
2.  Use the access credential to log on to the Enterprise Edition instance. Example:
    
    ```
    docker login <Name of the Container Registry Enterprise Edition instance>-registry.<Region ID of the instance>.cr.aliyuncs.com
    ```
    

## **Use a temporary password**

### **Prerequisites**

-   Install the and [Alibaba Cloud CLI](/help/en/cli/installation-guide/), then configure credentials. For more information, see [Configure credentials](/help/en/cli/configure-credentials).
    
-   You have installed the [jq command](https://jqlang.github.io/jq/).
    
-   You have [created a RAM user](/help/en/ram/user-guide/create-a-ram-user).
    

**Note**

You can also run the [GetAuthorizationToken](/help/en/acr/developer-reference/api-cr-2018-12-01-getauthorizationtoken) API directly in OpenAPI Explorer to obtain temporary credentials for the target instance.

### **Procedure**

1.  Create an AccessKey pair or use an existing one. Record the **AccessKey ID** and **AccessKey secret**. For more information, see [Create an AccessKey](/help/en/ram/user-guide/create-an-accesskey-pair).
    
2.  You can use the following content to [create a custom policy in script edit mode](/help/en/ram/create-a-custom-policy#title-7x0-6hc-6p2) and [manage the permissions of a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user).
    
    ```
    {
        "Version": "1",
        "Statement": [
            {
                "Effect": "Allow",
                "Action": [
                    "cr:GetAuthorizationToken",
                    "cr:PullRepository",
                    "cr:PushRepository"
                ],
                "Resource": "*"
            }
        ]
    }
    ```
    
3.  Run the following command to retrieve the temporary token.
    
    **Note**
    
    In `ACR_ENDPOINT="<acr service endpoint>"`, `<acr service endpoint>` is the [endpoint](/help/en/acr/developer-reference/api-cr-2018-12-01-endpoint) for the region where your ACR instance resides.
    
    ```
    export ALIYUN_AK="<aliyun access key>"               # The AccessKey ID from step 1.
    export ALIYUN_SK="<aliyun access key secret >"       # The AccessKey secret from step 1.
    export ACR_INSTANCE_ID="<id of acr instance >"       # The ID of the Container Registry Enterprise Edition instance.
    export ACR_ENDPOINT="<acr service endpoint>"  
    ```
    
    ```
    aliyun cr GetAuthorizationToken --endpoint $ACR_ENDPOINT --InstanceId $ACR_INSTANCE_ID --access-key-id $ALIYUN_AK --access-key-secret $ALIYUN_SK | jq -r '.AuthorizationToken'
    ```
    

### **What to do next**

Log on to the Enterprise Edition instance.

1.  Configure access control for the Internet or VPCs. For more information, see [Configure access over the Internet](/help/en/acr/user-guide/configure-access-over-the-internet#task484) or [Configure a VPC ACL](/help/en/acr/user-guide/configure-access-over-vpcs#task1305).
    
2.  Use the access credential to log on to the Enterprise Edition instance. Example:
    
    ```
    docker login --username=cr_temp_user <Name of the Container Registry Enterprise Edition instance>-registry.<Region ID of the instance>.cr.aliyuncs.com
    ```
    

## **References**

-   [Use a Container Registry Enterprise Edition instance to push and pull images](/help/en/acr/getting-started/use-a-container-registry-enterprise-edition-instance-to-push-and-pull-images)
    
-   [Pull an image from the same account](/help/en/acr/user-guide/non-secret-pulling-container-image)
