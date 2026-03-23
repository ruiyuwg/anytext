This topic walks you through purchasing a Linux Elastic Compute Service (ECS) instance and deploying Apache web server. For detailed information about specific concepts, see the linked documents.

## Preparations

-   You have [created an Alibaba Cloud account](/help/en/account/step-1-register-an-alibaba-cloud-account) on the Alibaba Cloud international site (alibabacloud.com).
    
-   (Optional) If you want to purchase an ECS instance within the Chinese mainland, you must [complete account verification](/help/en/account/account-verification-overview#h2--3).
    

## **Basic concepts**

ECS instances require the following resources:

-   **Region**: The geographic location where your ECS instance runs. Select a region close to your users to minimize latency. For more information, see [Regions and zones](/help/en/cloud-migration-guide-for-beginners/latest/regions-and-zones).
    
-   **Virtual Private Cloud (VPC)**: An isolated private network for your ECS instances. Instances in the same VPC can communicate over the private network. For more information, see [VPCs and vSwitches](/help/en/vpc/user-guide/overview-of-vpcs-and-vswitches/).
    
-   **vSwitch**: A vSwitch is a basic network device that makes up a VPC. For more information, see [VPCs and vSwitches](/help/en/vpc/user-guide/overview-of-vpcs-and-vswitches/).
    
-   **Instance type**: An instance type specifies the CPU model, number of cores, and memory size, such as 2 vCPUs and 4 GiB of memory. To learn about the instance families available for ECS, see [Instance family classification and naming](/help/en/ecs/user-guide/instance-specification-naming-and-classification) and [Instance families](/help/en/ecs/user-guide/overview-of-instance-families#concept-sx4-lxv-tdb).
    
-   **Image**: An image contains the operating system and version for the instance, such as Alibaba Cloud Linux 3.2104 LTS 64-bit or Windows Server 2022 Datacenter Edition 64-bit (Chinese). For more information, see [Image overview](/help/en/ecs/user-guide/image-overview#concept-qql-3zb-wdb).
    
-   **Storage**: Includes the system disk and data disks, which are used to store the OS image and business data. For more information, see [Block storage overview](/help/en/ecs/user-guide/elastic-block-storage-devices).
    
-   **Public IP address**: Required for accessing the instance from the Internet.
    
-   **Security group**: A virtual firewall that controls inbound and outbound traffic. For more information, see [Security group overview](/help/en/ecs/user-guide/overview-44#concept-o2y-mqw-ydb).
    
-   **Key pair**: A secure authentication method for logging in to instances. For more information, see [SSH key pair overview](/help/en/ecs/user-guide/overview-ssh).
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2671200771/CAEQTxiBgID1oa7D0xkiIDM1MTExM2U2Nzk5MTQ0MDE5MGFiOTU5NGQxN2ZlMTEy4687979_20240927135136.783.svg)

## **Create an ECS instance**

Use the **Custom Launch** method to create a Linux ECS instance. For other methods, see [Create an instance](/help/en/ecs/user-guide/create-instances/#concept-nx2-nzv-wgb).

Go to the [Custom Launch](https://ecs-buy.alibabacloud.com/ecs/#/custom/prepay/) page and configure the following settings. For detailed instructions, see [Customize the purchase of an instance](/help/en/ecs/user-guide/create-an-instance-by-using-the-wizard).

### **1\. Select a region and billing method**

-   Select **Pay-as-you-go** for flexible billing. For more information, see [Billing overview](/help/en/ecs/billing-overview#concept-isb-scd-5db).
    
-   Select **Singapore** (or a region close to your users).
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6951200771/p855183.png)

### **2\. Create a VPC and a vSwitch**

Create a VPC in the **Singapore** region. After creation, return to the ECS purchase page, refresh, and select the VPC and vSwitch.

**Note**

You can create a vSwitch when you create a VPC.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9951200771/p872800.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6951200771/p855184.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6951200771/p855185.png)

### **3\. Select an instance type and image**

Select instance type `ecs.e-c1m1.large` (2 vCPUs, 2 GiB memory) and image `Alibaba Cloud Linux 3.2104 LTS 64-bit`.

**Note**

Use the **Add to Comparison** feature in the **Instance** > **All Instance Types** section to help you select an instance type.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7488820371/p855170.png)

### **4\. Select storage**

Select a system disk. For this tutorial, a system disk is sufficient; no data disk is needed.

**Note**

-   The **System Disk** is the boot disk of an ECS instance. It stores system-related data such as the operating system and program files.
    
-   A **Data Disk** is used to store non-system-related data such as user data, logs, and other applications.
    
-   For more information about storage, see [Block storage overview](/help/en/ecs/user-guide/elastic-block-storage-devices).
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7488820371/p855166.png)

### 5\. Assign a public IP address

Assign a public IP address for Internet access. Alternatively, associate an Elastic IP Address (EIP) after instance creation. For more information, see [Associate an EIP with a cloud resource](/help/en/eip/bind-an-eip-to-a-cloud-resource/).

**Note**

-   Without a public IP address, you cannot access the instance via SSH/RDP from the Internet.
    
-   Select **Pay-by-traffic** to pay only for consumed traffic. For more information, see [Public bandwidth billing](/help/en/ecs/public-bandwidth#publicIP-china).
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7488820371/p855167.png)

### **6\. Create a security group**

Create a security group and allow traffic on the following ports:

**Port Range**: SSH (22), RDP (3389), HTTP (80), and HTTPS (443).

**Note**

-   These ports enable access to applications running on your instance.
    
-   The default source 0.0.0.0/0 allows access from any IP address. Restrict to specific IPs for production use. For more information, see [Modify security group rules](/help/en/ecs/user-guide/modify-a-security-group-rule).
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7488820371/p855095.png)

### **7\. Create a key pair**

-   Create a key pair and download the private key for [connecting to the instance](#7c9bf1401cp4r). Return to the ECS purchase page and select the key pair.
    
-   Select `ecs-user` as the username. Avoid using `root` for security reasons.
    

**Note**

The private key (`.pem` file) is automatically downloaded. Save it securely.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7488820371/p855323.png)

### **8\. Create and view the ECS instance**

Review the **Terms of Service** and click **Create Order**. Click **Console** to view the instance. Note the following:

-   **Instance ID**: For locating the instance.
    
-   **Region**: For filtering instances.
    
-   **Public IP address**: For accessing the web service.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7488820371/p855138.png)![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6951200771/p855329.png)

## **Connect to the ECS instance**

Connect to your instance using a remote connection tool.

1.  Go to [ECS console - Instances](https://ecs.console.alibabacloud.com/server/region).
    
2.  In the top navigation bar, select the region and resource group of the resource that you want to manage. ![地域](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8343404471/p680076.png) 
    
3.  Click the ID of the target instance. On the instance details page, click **Connect**.
    
4.  In the **Remote connection** dialog box, click **Sign in now** in the **Workbench** section.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7488820371/p855265.png)
    
    **Note**
    
    This tutorial uses Workbench. For other methods, see [Choose a connection method](/help/en/ecs/user-guide/connect-to-instance).
    
5.  In the **Instance Login** dialog box, set **Authentication** to **SSH Key Authentication**, enter `ecs-user` for Username, enter or upload the private key file that you downloaded when you created the key pair, and then click **Log In**.
    
    **Note**
    
    The private key file is automatically downloaded to your local computer when you **create the key pair**. Check your browser's download history to find the `.pem` private key file. If you did not associate a key pair with the instance when you created it, you must first [create](/help/en/ecs/user-guide/ssh-key-pairs/#4b95c9f173z7t) and [associate](/help/en/ecs/user-guide/ssh-key-pairs/#d4c0a47c32x1p) a key pair for the instance.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8071045471/p946123.png)
    
6.  When the following page appears, you have successfully logged on to the ECS instance.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6951200771/p855338.png)
    

## **Use the ECS instance**

Deploy Apache web server to verify your instance is working correctly.

1.  **Install the Apache service:**
    
    1.  Run the following command in the instance.
        
        ```
        sudo yum install -y httpd
        ```
        
    2.  `Complete!` indicates successful installation.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7488820371/p855340.png)
        
2.  **Start the Apache service**: Run the following command in the instance. No result is returned.
    
    ```
    sudo systemctl start httpd
    ```
    
3.  **Check the Apache service status**:
    
    1.  Run the following command in the instance.
        
        ```
        systemctl status httpd
        ```
        
    2.  `active (running)` indicates Apache is running.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7488820371/p855342.png)
        
4.  **Verify the result**: Open `http://<Public IP address>` in your browser. The Apache test page confirms successful deployment.
    
    **Note**
    
    Find the public IP address on the [Instances](https://ecs.console.alibabacloud.com/server/region/) page. If you didn't assign one, associate an EIP. For more information, see [Elastic IP Address](/help/en/ecs/user-guide/associate-or-disassociate-an-eip).
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7488820371/p855345.png)
    

**Note**

For building production websites, see [Build a website](/help/en/ecs/user-guide/build-a-website/).

## **Release the ECS instance**

Release the instance when no longer needed. Billing stops and data cannot be recovered.

1.  Go to [ECS console - Instances](https://ecs.console.alibabacloud.com/server/region).
    
2.  In the top navigation bar, select the region and resource group of the resource that you want to manage. ![地域](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8343404471/p680076.png) 
    
3.  Click the ID of the target instance to go to the instance details page. Click **All Actions** to expand the operations panel, and then find and click **Release**.
    
4.  After you confirm the instance details, select **Release Now** and click **Next**.
    
5.  Confirm the associated resources that you want to release and understand the related data risks. Then, click **OK** to release the ECS instance.
    

**Note**

-   The system disk and the assigned public IP address are released with the instance.
    
-   Security groups, vSwitches, and VPCs are not released with the instance. However, they are free resources. You can delete them as needed.
    
-   EIPs are not released with the instance and are not free resources. You can delete them as needed. For more information about EIP billing, see [Billing overview](/help/en/eip/billing-overview).
    

## **View bills**

View your bills to check costs. Bills are updated with a one-day delay.

1.  Go to the [Expenses and Costs console](https://usercenter2-intl.console.alibabacloud.com/billing/#/account/overview) and choose **Billing** > **Bill Details**.
    
2.  **Search** by the ECS instance ID to retrieve the cost details of the instance.
    

## **References**

Learn more:

-   [Common operations](/help/en/ecs/quick-reference#concept-q3w-45w-wdb)
    
-   To learn how to programmatically integrate with ECS, see [Integration overview](/help/en/ecs/developer-reference/integration-overview).
