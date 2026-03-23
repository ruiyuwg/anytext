To ensure transaction consistency and isolation, you can configure a distributed transaction whitelist for your ApsaraDB RDS for SQL Server instance. You can configure a distributed transaction whitelist for your RDS instance to allow for distributed transactions between specific Elastic Compute Service (ECS) instances and the RDS instance. Then, you can adjust the security group rules of the ECS instances to ensure that the network configurations for the ECS instances match the whitelist settings of the RDS instance. This helps build a secure and stable distributed transaction environment to facilitate troubleshooting of transaction consistency issues.

## Prerequisites

The RDS instance meets the following requirements:

-   The RDS instance runs SQL Server 2022 EE (Always On), SQL Server 2019 EE (Always On), SQL Server 2017 EE (Always On), SQL Server 2016 EE, SQL Server 2012 EE, SQL Server 2022 SE, SQL Server 2019 SE, SQL Server 2017 SE, SQL Server 2016 SE, SQL Server 2012 SE, or SQL Server 2008 R2 with cloud disks.
    
-   The RDS instance belongs to the general-purpose or dedicated instance family. The shared instance family is not supported.
    
-   The RDS instance uses the subscription or pay-as-you-go billing method. Serverless instances are not supported.
    

**Note**

You can go to the **Basic Information** page of your RDS instance to obtain the preceding information.

## **Usage notes**

After you perform a [major engine version upgrade](/help/en/rds/apsaradb-rds-for-sql-server/upgrade-the-major-engine-version-and-rds-edition-of-an-apsaradb-rds-for-sql-server-instance), [minor engine version update](/help/en/rds/apsaradb-rds-for-sql-server/update-the-minor-engine-version-of-an-apsaradb-rds-for-sql-server-instance), or [instance migration across zones](/help/en/rds/apsaradb-rds-for-sql-server/migrate-an-apsaradb-rds-for-sql-server-instance-across-zones) for an RDS for SQL Server instance, **the host name and IP address of the underlying ECS instance on which the RDS instance is deployed may change**. **Therefore, you must** [adjust the security group rules of the specified ECS instance](#section-kl3-q6g-saj) **after the preceding operations** to make sure that the rules match the whitelist settings of the RDS instance.

To view the host name and IP address of the underlying ECS instance on which the RDS instance is deployed, click **Data Security** in the left-side navigation pane of the instance details page and then click the **Distributed Transaction Whitelist** tab.

## Configure the RDS instance

### **Step 1: Configure a whitelist**

Configure a whitelist for your RDS instance to allow access from the IP address of a specific ECS instance to the RDS instance.

1.  Log on to the ApsaraDB RDS console and go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the instance ID.
    
2.  In the left-side navigation pane, click **Whitelist and SecGroup**. On the Whitelist Settings tab of the page that appears, click **Modify** to the right of the IP address whitelist that is labeled `default` and add the IP address of the ECS instance to the whitelist.
    
    **Note**
    
    -   If the ECS instance and RDS instance reside in the same virtual private cloud (VPC), you must enter the private IP address of the ECS instance.
        
    -   If the ECS instance and RDS instance reside in different VPCs, you must enter the public IP address of the ECS instance. In addition, you must apply for a public endpoint for the RDS instance. For more information, see [Apply for or release a public endpoint](/help/en/rds/apsaradb-rds-for-sql-server/apply-for-or-release-a-public-endpoint-for-an-apsaradb-rds-for-sql-server-instance#concept-nsl-hff-vdb).
        
    -   You can [view the private or public IP address](/help/en/ecs/user-guide/view-ip-addresses) of the ECS instance on the **Instance Details** page of the ECS instance in the ECS console.
        
    
    The following figure shows the page that displays the IP addresses of an ECS instance.
    
    ![Ip地址](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3130054561/p324391.png)
    
3.  Click **OK**.
    

### **Step 2: Configure a distributed transaction whitelist**

Configure a distributed transaction whitelist to specify which ECS instances are allowed to participate in handling distributed transactions of the RDS instance by computer name.

1.  In the left-side navigation pane, click **Data Security**. On the page that appears, click the **Distributed Transaction Whitelist** tab.
    
2.  Click **Create Whitelist**. In the dialog box that appears, configure the following parameters and click **OK**.
    
    **Parameter**
    
    **Description**
    
    **Whitelist Name:**
    
    Enter a name for the whitelist. The name must be 2 to 32 characters in length. The name can contain digits, lowercase letters, and underscores (\_). The name must start with a lowercase letter and end with a lowercase letter or digit.
    
    **IP Addresses**
    
    Enter a value in the format of `IP address of the ECS instance,Hostname`. The IP address and the hostname are separated with a comma (,). The hostname refers to the name of the Windows computer on which the ECS instance resides. Example: `192.168.1.100,k3ecstest`. If you want to enter more than one entry, make sure that each entry is in a different line.
    
    To view the computer name that is specified by the Hostname parameter, open **Control Panel** of your computer and choose **System and Security** > **System**.
    

## Configure the ECS instance

Adjust the security group rules of the specified ECS instance and enable the required port to ensure that the network configurations for the ECS instance match the whitelist settings of the RDS instance. This helps build a secure distributed transaction environment.

1.  Log on to the [ECS console](https://ecs.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Instances & Images** > **Instances**.
    
3.  In the top navigation bar, select the region in which the ECS instance resides.
    
4.  Find the ECS instance and click the instance ID.
    
5.  In the top navigation bar, click **Security Groups**.
    
6.  Find the security group that you want to manage and click **Manage Rules** in the **Actions** column.
    
7.  On the **Inbound** tab, click **Add Rule**.
    
8.  Configure the required parameters and then click **Save**. The following table describes the parameters.
    
    **Parameter**
    
    **Description**
    
    **Action**
    
    Select **Allow**.
    
    **Priority**
    
    Retain the default value 1.
    
    **Protocol Type**
    
    Select **Custom TCP**.
    
    **Port Range**
    
    Enter **135**.
    
    **Note**
    
    Port 135 is the fixed port for the Remote Procedure Call (RPC) service.
    
    **Source**
    
    Navigate to **Data Security** > **Distributed Transaction Whitelist** in the RDS console. Copy the two IP addresses displayed there and enter them into the **Source** field.![分布式事务白名单](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8253778761/p324398.png)
    
    **Note**
    
    You can also call the [DescribeDBInstanceIpHostname](/help/en/rds/apsaradb-rds-for-sql-server/api-rds-2014-08-15-describedbinstanceiphostname-sqlserver) operation to query the IP addresses.
    
    **Description**
    
    Enter a description. The description must be 2 to 256 characters in length, and cannot start with `http://` or `https://`.
    
9.  Create another security group rule. This rule has the same parameter settings as the previous rule except for the **Port Range** parameter. Set the Port Range parameter to **1024/65535**.
    

## **References**

-   For related best practices, see [Connect Kingdee K/3 WISE to an ApsaraDB RDS for SQL Server instance](/help/en/rds/apsaradb-rds-for-sql-server/connect-kingdee-k-or-3-wise-to-an-apsaradb-rds-for-sql-server-instance#concept-995029).
    
-   For how to configure a whitelist, see [Configure an IP address whitelist](/help/en/rds/configure-an-ip-address-whitelist-for-an-apsaradb-rds-for-sql-server-instance-1).
    
-   For more information about the concept, limits, and best practices of security groups, see [Security group overview](/help/en/ecs/user-guide/overview-44).
    

## **FAQ**

### Resolve the 'Communication with the underlying transaction manager has failed' error

**Possible cause**

**Solution**

The host name and IP address of the underlying ECS instance on which the RDS instance is deployed are changed.

After you perform a [major engine version upgrade](/help/en/rds/apsaradb-rds-for-sql-server/upgrade-the-major-engine-version-and-rds-edition-of-an-apsaradb-rds-for-sql-server-instance), [minor engine version update](/help/en/rds/apsaradb-rds-for-sql-server/update-the-minor-engine-version-of-an-apsaradb-rds-for-sql-server-instance), or [instance migration across zones](/help/en/rds/apsaradb-rds-for-sql-server/migrate-an-apsaradb-rds-for-sql-server-instance-across-zones) for an RDS for SQL Server instance, **the host name and IP address of the underlying ECS instance on which the RDS instance is deployed may change**. **Therefore, you must** [adjust the security group rules of the specified ECS instance](#section-kl3-q6g-saj) **after the preceding operations** to make sure that the rules match the whitelist settings of the RDS instance.

To view the host name and IP address of the underlying ECS instance on which the RDS instance is deployed, click **Data Security** in the left-side navigation pane of the instance details page and then click the **Distributed Transaction Whitelist** tab.

The distribution transaction manager is not running properly.

Check whether the transaction manager is not running properly because of incorrect settings, permission issues, or insufficient server resources and whether your connection to the transaction manager is unstable or interrupted.
