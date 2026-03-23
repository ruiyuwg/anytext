If your simple application server cannot meet your business requirements, you can smoothly migrate data from the simple application server to an Elastic Compute Service (ECS) instance to implement more flexible resource configuration. The source simple application server and the destination ECS instance must belong to the same Alibaba Cloud account but can reside in the same region or different regions. This topic describes how to migrate data from a simple application server to an ECS instance.

## Migration impacts

**Item**

**Description**

Authorized applications on the ECS instance and the simple application server

The virtual private cloud (VPC) of the simple application server and the VPC of the ECS instance cannot communicate with each other. As a result, the VPC in which the migrated data resides changes after you migrate data from the simple application server to the ECS instance. The underlying hardware of the ECS instance is different from that of the simple application server. After you migrate data from the simple application server to the ECS instance, the application licenses that are bound to the underlying hardware become invalid. You must make sure that the application licenses remain valid.

Public IP address

After you migrate data from the simple application server to the ECS instance, the IP address that points to the migrated data changes because the simple application server and the ECS instance use different public IP addresses. If the simple application server has a domain name, you must resolve the domain name to the public IP address of the ECS instance after the migration.

## **Procedure**

**Note**

If you have purchased an ECS instance and attached a data disk to the simple application server, we recommend that you use Server Migration Center (SMC) to migrate data from the simple application server to the ECS instance. For more information, see [Migrate a Simple Application Server instance to an ECS instance](/help/en/smc/user-guide/migrate-simple-application-server-to-ecs-instances).

In the following examples, a shared image based on the simple application server is used to create an ECS instance or replace the system disk of an existing ECS instance.

1.  Log on to the [Simple Application Server console](https://swas.console.alibabacloud.com/).
    
2.  Create a custom image for the simple application server.
    
    1.  In the card of the simple application server from which you want to create a custom image, choose **More** > **Create Custom Image**.
        
        Alternatively, click the server ID in the server card. Below the **Image Information** field of the **Basic Information** section on the Server Overview tab, click **Create Custom Image**.
        
    2.  In the **Create Custom Image** dialog box, configure parameters based on your business requirements. The following table describes the parameters.
        
        **Parameter**
        
        **Description**
        
        **Name**
        
        Enter a name for the custom image. The name must be unique. The name must be 2 to 128 characters in length and can contain periods (.), underscores (\_), hyphens (-), and colons (:). The name cannot start with a special character or a digit.
        
        **Description**
        
        Enter a description for the custom image. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.
        
    3.  Click **Confirm**.
        
3.  (Conditionally required) To migrate data from the simple application server to an ECS instance across regions, you must copy the custom image to the destination region. To migrate data from the simple application server to an ECS instance within the same region, skip this step.
    
    In the Actions column of the custom image, choose **![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3723956071/p725444.png)** > **Copy Image** to copy the custom image as prompted.
    
4.  Share the image and complete the migration.
    
    -   #### **Purchase an ECS instance to migrate data**
        
        1.  In the left-side navigation pane, click **Image**. On the Image page, find the custom image that you created.
            
        2.  Click **Create ECS Instance** in the **Actions** column.
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8562770371/p859456.png)
            
        3.  In the **Create ECS Instance** dialog box, click **Confirm the sharing and go to the next step**.
            
        4.  Click **Confirm**.
            
            You are redirected to the ECS instance buy page. Follow the on-screen instructions to create the ECS instance.
            
            When you create an ECS instance on the ECS buy page, take note of the following items:
            
            -   **Region**, **Image**, **System Disk**, and **Data Disk**: Retain the default configurations.
                
            -   **Public IP Address**: Select **Assign Public IPv4 Address**.
                
            -   **Security Group**: Select a security group whose inbound rules allow traffic over the required ports. We recommend that you use the same firewall configuration for the ECS instance and the simple application server.
                
            
            Configure other parameters based on your business requirements. For more information, see [Custom launch](/help/en/ecs/user-guide/create-an-instance-by-using-the-wizard#task-vwq-5g4-r2b).
            
            After you create an ECS instance, log on to the [ECS console](https://ecs.console.alibabacloud.com). Choose **Instances & Images** > **Instances**. Then, view the ECS instance that is created on the Instance page. If the ECS instance is created, the migration is complete.
            
        
        #### **Use an existing ECS instance to migrate data**
        
        If you want to migrate data from the simple application server to an existing ECS instance, you can replace the OS of the existing ECS instance. You can migrate only data in the system disk of the simple application server to an existing ECS instance. Data in the data disk attached to the simple application server is not migrated.
        
        1.  Share the image to the ECS instance.
            
            In the left-side navigation pane, click **Image**, find the custom image, and click **Share to ECS** in the **Actions** column. Follow the on-screen instructions to share the image.
            
        2.  Replace the system disk of the existing ECS instance.
            
            1.  Log on to the [ECS console](https://ecs.console.alibabacloud.com) and choose **Instances & Images** > **Instances**.
                
            2.  Find the ECS instance and click **Stop** in the **Actions** column. In the Stop Instance dialog box, select **Stop** in the Stopped By field and click **OK**.
                
            3.  After the status of the ECS instance changes to **Stopped**, click **Replace Operating System** in the **Actions** column. In the Replace Operating System dialog box, select **Replace System Disk** in the Replacement Method field, read the precautions, and select I understand the risks. Then, click **Continue to Replace Operating System**.
                
            4.  On the Change Operating System page, configure the following parameters. For more information about the parameters, see [Replace the operating system (system disk)](/help/en/ecs/user-guide/replace-the-operating-system-of-an-instance).
                
                -   **Image**: Click **Shared Image** and select the desired custom image.
                    
                -   **System Disk**: Specify a disk size that is greater than the current disk size. You cannot change the system disk category.
                    
                
                If a message indicating that **the OS is changed** appears, the migration is complete.
                
        
5.  Verify the migration result.
    
    In the examples, a web page file named `test.html` exists in the simple application server. Test whether the `test.html` file in the ECS instance can be accessed as expected.
    
    **Note**
    
    In actual scenarios, you can log on to the ECS instance after data is migrated and check whether the data on the ECS instance is consistent with the data on the source simple application server.
    
    1.  Obtain the public IP address of the ECS instance.
        
        ![公网IP地址](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6897440071/p302661.png)
        
    2.  Enter `http://<Public IP address of the ECS instance>/test.html` in the address bar of a browser on your on-premises host.
        
        As shown in the following figure, you can find that the test website deployed on the ECS instance can be accessed, and the content is the same as the content of the test website deployed on the simple application server.
        
        ![ECS实例测试网站](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5805032361/p302666.png)This indicates that the data on the simple application server is migrated to the ECS instance.
        

## What to do next

-   After data is migrated, the public IP address that you can use to access the data changes. If you configured a domain name for the source simple application server, you must resolve the domain name to the public IP address of the destination ECS instance. For more information, see [Add DNS records](/help/en/dns/add-a-dns-record).
    
-   After data is migrated, you can check the ECS instance to which the data is migrated. For more information, see [How do I check my system after I migrate a Linux server](/help/en/smc/support/faq#section-gv6-9p9-ufk) or [How do I check the system after migrating a Windows server?](/help/en/smc/support/faq#section-thf-9yp-xf8).
