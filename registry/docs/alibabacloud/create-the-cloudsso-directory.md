A CloudSSO directory is a CloudSSO instance. Before you can use CloudSSO, you must create a CloudSSO directory. The directory is used to manage all CloudSSO resources.

## Region for the CloudSSO directory

To create a CloudSSO directory, you must select a region for the CloudSSO directory. Alibaba Cloud stores CloudSSO-related data in the directory in the region that you select. The data includes identities, permissions, and authorization data that you manage by using CloudSSO. You can deploy Alibaba Cloud resources including Elastic Compute Service (ECS) instances and ApsaraDB RDS instances in other regions. You can also use your cloud account for logons and access the Alibaba Cloud resources in other regions.

You can select a region to create the CloudSSO directory based on your business requirements and the geographic location of intended users. If you do not have specific requirements, we recommend that you select a region that is geographically closest to your intended users. This way, access to cloud resources is accelerated.

You can create the CloudSSO directory in the China (Shanghai), China (Hong Kong), South Korea (Seoul), Singapore, US (Silicon Valley), or Germany (Frankfurt) region.

## Limits

-   A management account can be used to create only one directory.
    
-   If you want to change the region of a directory, you must delete the directory and then create a directory in a different region.
    
-   The directory name must be globally unique.
    

## Procedure

1.  Log on to the [CloudSSO console](https://cloudsso.console.alibabacloud.com).
    
2.  In the top navigation bar, select the desired region.
    
3.  Click **Create Directory**.
    
4.  In the **Create Directory** panel, enter the directory name and click **OK**.
    
    When you create the directory, the service-linked role `AliyunServiceRoleForCloudSSO` is created. CloudSSO assumes this role to access some of your cloud resources.
