This topic describes how to use the Container Service for Kubernetes (ACK) SDK to call the ACK API to create an ACK managed cluster.

## Step 1: Read the API reference

Before you call the API, we recommend that you read [Create an ACK managed cluster](/help/en/ack/create-an-ack-managed-cluster) to learn about the API parameters and required parameters. For more information about the API parameters, see [List of operations by function](/help/en/ack/ack-managed-and-ack-dedicated/developer-reference/api-cs-2015-12-15-overview).

## Step 2: Create a RAM user and grant permissions to the RAM user

You can call the API by using an Alibaba Cloud account, a RAM user, or a RAM role. For more information about the differences among these identities, see [Identity](/help/en/openapi/identity).

**Important**

An Alibaba Cloud account has access permissions on all API operations. We recommend that you use a RAM user to call API operations or perform routine O&M.

1.  [Create a RAM user](/help/en/ram/user-guide/create-a-ram-user).
    
    1.  Use your Alibaba Cloud account to log on to the [RAM console](https://ram.console.alibabacloud.com/).
        
    2.  In the left-side navigation pane, choose **Identities** > **Users**.
        
    3.  On the **Users** page, click **Create User**.
        
    4.  On the **Create User** page, configure the **Logon Name** and **Display Name** parameters, and set the **Access Mode** parameter to **Console Access**.
        
    5.  Click **OK**.
        
        After the RAM user is created, record the username and password of the RAM user. When you call the API, you need to use the RAM user to log on to the OpenAPI Explorer console.
        
2.  Grant the **AliyunCSFullAccess** permission to the RAM user. For more information, see [Grant permissions to a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user).
    
    **Note**
    
    **AliyunCSFullAccess****_: provides full permissions on_** Container Service for Kubernetes.
    
    **AliyunCSReadOnlyAccess**: provide read permissions on Container Service for Kubernetes.
    
    For more information about how to create a custom policy, see [RAM authorization](/help/en/ack/ack-managed-and-ack-dedicated/developer-reference/api-cs-2015-12-15-ram).
    
3.  You can also go to the **user details** page, click the **Authentication** tab, and then click **Create AccessKey** to create an AccessKey pair. For more information, see [Create an AccessKey pair](/help/en/ram/user-guide/create-an-accesskey-pair).
    

## **Step 3: Call the API**

This example shows how to use the RAM user to call the CreateCluster API operation to create an ACK Pro cluster. ACK SDK for Java is used in this example. You can use SDKs for other programming languages in a similar way. For more information, see [Container Service for Kubernetes](https://api.alibabacloud.com/api-tools/sdk/CS?version=2015-12-15&language=java-async-tea). In addition to the ACK SDK, you can use other methods to call the API operation. For more information, see [Call methods](/help/en/openapi/developer-reference/overview-of-calling-methods).

### **Configure environment variables**

Before you call the API operation, you need to configure environment variables to obtain the credentials. For more information, see [Configure environment variables in Linux, macOS, and Windows](/help/en/sdk/developer-reference/configure-the-alibaba-cloud-accesskey-environment-variable-on-linux-macos-and-windows-systems).

### Download the SDK demo

1.  Access [CreateCluster](https://api.alibabacloud.com/api/CS/2015-12-15/CreateCluster).
    
2.  On the **Parameters** tab, configure the parameters and click **Initiate Call**.
    
    -   Sample value of **name**: test
        
    -   Sample value of **region\_id**: cn-beijing
        
    -   Sample value of **cluster\_type**: ManagedKubernetes
        
    -   Sample value of **cluster\_spec**: ack.pro.small
        
    -   Sample value of **cluster\_version**: 1.30.1-aliyun.1
        
    -   Sample value of **vpcid**: vpc-2zedl8cyb7tnkaux1\*\*\*\*
        
    -   Sample value of **container\_cidr**: 10.0.0.0/8
        
    -   Sample value of **service\_cidr**: 172.21.0.0/20
        
    -   Sample value of **vswitch\_ids**: vsw-2ze7hfp0ah8rk1nz9\*\*\*\*
        
3.  On the right-side **SDK Sample Code** tab, select version 2.0 and specify the language, and click **Download Project** to your on-premises machine and decompress the package.
    
    **Note**
    
    We recommend that you use the 2.0 version. For more information about the differences between version 1.0 and 2.0, see [Alibaba Cloud SDK V1.0 and V2.0](/help/en/sdk/product-overview/differences-between-v1-and-v2-sdks).
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7187942271/p814047.png)
    

### Run the SDK demo

1.  Open IntelliJ IDEA, choose File->Open, select the folder of the project that you decompressed, and wait for Maven to install dependencies.
    
2.  Run the sample code.
    
    Double-click Sample. Confirm that no error is thrown and run the sample code.
    
3.  View the result.
    
    Search for `statusCode` in the lower part of the console. If `"statusCode":202` is displayed, the API operation is called and ACK is creating the cluster. You can also log on to the [ACK console](https://cs.console.alibabacloud.com) and go to the **Clusters** page to view the newly created cluster. ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7187942271/p825753.png)
