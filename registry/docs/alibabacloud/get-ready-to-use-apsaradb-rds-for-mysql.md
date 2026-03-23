This topic describes how to get ready before you use ApsaraDB RDS for MySQL. An RDS instance is a virtual database server. Application servers can communicate with RDS instances, and the data of application servers can be stored in RDS instances. Before you create an RDS instance or connect an application server to an RDS instance, you must obtain the information about the application server.

## Procedure

1.  Check whether your application has been deployed or will be deployed on an Alibaba Cloud service such as an Elastic Compute Service (ECS) instance.
    
    -   If your application has been deployed or will be deployed on an ECS instance, go to Step 2.
        
    -   If your application has not been deployed or will not be deployed on an ECS instance and you do not want to migrate data to an RDS instance, skip the following operations. In this case, create an RDS instance and connect to the RDS instance over the Internet.
        
        **Note**
        
        Communication over an internal network provides higher security, performance, and stability than communication over the Internet.
        
2.  **Confirm the ECS instance**.
    
    1.  Log on to the ECS console. In the left-side navigation pane, click [Instances](https://ecs.console.alibabacloud.com/server/region#/server/region/cn-hangzhou). In the top navigation bar, select the region where the ECS instance resides. The number in a blue circle indicates the number of ECS instances that reside in the region.
        
        Figure 1. Select a region![select](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2939631861/p631096.png)
        
        **Note**
        
        If no ECS instance is created, you must create an ECS instance. For more information, see [Create and manage an ECS instance by using the ECS console](/help/en/ecs/getting-started/create-and-manage-an-ecs-instance-by-using-the-ecs-console#task-2480939).
        
    2.  Find the ECS instance on which your application has been deployed or will be deployed. This instance is **the ECS instance that you want to connect to the RDS instance**. The following figure shows a sample ECS instance.
        
        Figure 2. Confirm the ECS instance![instance](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2939631861/p631094.png)
        
3.  **View the region and network type of the ECS instance**.
    
    **Note**
    
    If the ECS instance resides in the classic network, we recommend that you migrate the ECS instance to a VPC. For more information, see [Migrate ECS instances from the classic network to a VPC](/help/en/ecs/user-guide/migrate-ecs-instances-from-the-classic-network-to-a-vpc#task-2009036).
    
    Figure 3. View the region and network type of the ECS instance![region](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3939631861/p631092.png)
    
4.  **View the VPC information of the ECS instance.**
    
    If the ECS instance resides in a VPC, click the Instance ID and go to the Instance Details tab. You can view the ID and name of the VPC in the **Network Information** section of the tab.
    
    Figure 4. Click the Instance ID![ID](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2939631861/p631088.png)
    
    Figure 5. View the ID and name of the VPC![View the ID and name of the VPC](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8342266361/p320328.png)
    

## What to do next

[Create an ApsaraDB RDS for MySQL instance](/help/en/rds/create-an-apsaradb-rds-for-mysql-instance#concept-wzp-ncf-vdb)
