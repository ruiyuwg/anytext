To develop and manage EMR Serverless Spark tasks in DataWorks, you must first associate an EMR Serverless Spark workspace with DataWorks to serve as a Serverless Spark computing resource. After the resource is associated, you can use it for data development in DataWorks.

## **Prerequisites**

-   An EMR Serverless Spark [workspace is created](/help/en/emr/emr-serverless-spark/getting-started/create-a-workspace).
    
-   A DataWorks workspace is [created](/help/en/dataworks/user-guide/create-and-manage-workspaces/#title-5wd-3qp-9sm). The RAM user who performs the operations is added to the workspace and assigned the Workspace Administrator role.
    
    **Important**
    
    Only workspaces set to **Use Data Studio (New Version)** are supported.
    
-   You have [created a Serverless resource group](/help/en/dataworks/user-guide/adding-and-using-serverless-resource-groups) and attached it to the target DataWorks workspace.
    

## **Limits**

-   **Supported regions**: China (Hangzhou), China (Shanghai), China (Beijing), China (Shenzhen), China (Chengdu), China (Hong Kong), Japan (Tokyo), Singapore, Indonesia (Jakarta), Germany (Frankfurt), US (Silicon Valley), and US (Virginia).
    
-   **Permissions**:
    
    **Operator**
    
    **Required permissions**
    
    **Alibaba Cloud account**
    
    No extra permissions are required.
    
    **RAM user/RAM role**
    
    -   **DataWorks management permissions**: Only workspace members with the **O&M** or **Workspace Administrator** role, or members with the `AliyunDataWorksFullAccess` permission can create computing resources. For more information, see [Grant the Workspace Administrator permissions to a user](/help/en/dataworks/user-guide/manage-permissions-on-workspace-level-services#section-m3s-ots-vl3).
        
    -   **EMR Serverless Spark service permissions:**
        
        -   The `AliyunEMRServerlessSparkFullAccess` access policy.
            
        -   EMR Serverless Spark workspace `Owner` permission. For more information, see [Manage users and roles](/help/en/emr/emr-serverless-spark/user-guide/manage-users-and-roles).
            
    

## **Go to the computing resource list page**

1.  Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). Switch to the destination region. In the navigation pane on the left, choose **More** > **Management Center**. From the drop-down list, select your workspace and click **Go To Management Center**.
    
2.  In the navigation pane on the left, click **Computing Resource**.
    

## **Associate a Serverless Spark computing resource**

On the [computing resources page](https://sc.data.aliyun.com/cn-hangzhou/#/computingResource), you can configure and attach a Serverless Spark computing resource.

1.  Select a computing resource type to associate.
    
    1.  Click **Associate Computing Resource** to open the **Associate Computing Resource** page.
        
    2.  On the **Associate Computing Resource** page, set the computing resource type to **Serverless Spark**. The **Associate Serverless Spark Computing Resource** configuration page opens.
        
2.  Configure the Serverless Spark computing resource.
    
    On the **Associate Serverless Spark Computing Resource** page, configure the parameters as described in the following table.
    
    **Parameter**
    
    **Description**
    
    **Spark Workspace**
    
    Select the Spark workspace that you want to attach. You can also click **Create** in the drop-down menu to [create a Spark workspace](/help/en/emr/emr-serverless-spark/getting-started/create-a-workspace).
    
    **Default Engine Version**
    
    Select the database engine version to use.
    
    -   When you create an EMR Spark task in Data Studio, this database engine version is used by default.
        
    -   To set different database engine versions for different tasks, define them in the advanced settings of the Spark task editing window.
        
    
    **Default Message Queue**
    
    Select the resource queue to use. You can also click **Create** in the drop-down list to [add a queue](/help/en/emr/emr-serverless-spark/user-guide/queue-management#9d425b404b18k).
    
    -   When you create an EMR Spark task in Data Studio, this resource queue is used by default.
        
    -   To set different resource queues for different tasks, define them in the advanced settings of the Spark task editing window.
        
    
    **Default Kyuubi Gateway**
    
    Optional. The configuration status of the Kyuubi Gateway affects how the following tasks are run:
    
    -   If a Kyuubi Gateway is configured:
        
        -   All related tasks, such as EMR Spark SQL/Kyuubi and Serverless Spark SQL/Kyuubi, are run through the Kyuubi Gateway.
            
    -   If no Kyuubi Gateway is configured:
        
        -   EMR Spark SQL and Serverless Spark SQL tasks are run using `spark-submit`.
            
        -   EMR Kyuubi and Serverless Kyuubi tasks fail to run.
            
    
    To configure this, go to **EMR Serverless Spark Console** > **Operation Center** > **Gateway** > **Kyuubi Gateway** to [create a Kyuubi Gateway](/help/en/emr/emr-serverless-spark/user-guide/manage-kyuubi-gateways#58655ea80fkit) and a [token](/help/en/emr/emr-serverless-spark/user-guide/manage-kyuubi-gateways#a3b5506ce0dkb).
    
    -   **If Kerberos is not enabled**: Click the name of the Kyuubi Gateway to get the JDBC URL and token. Combine them to form the complete connection string.
        
    -   **Kerberos enabled**: Obtain the Beeline connection string based on your configured Kerberos information. For more information, see [Use Kerberos with Kyuubi Gateway](/help/en/emr/emr-serverless-spark/user-guide/kyuubi-gateway-using-kerberos).
        
        ```
        # Example of a standard connection string
        jdbc:hive2://kyuubi-cn-hangzhou-internal.spark.emr.aliyuncs.com:80/;transportMode=http;httpPath=cliservice/token/<token>
        # Example of a Kerberos connection string (Do not omit the principal of the kyuubi service)
        jdbc:hive2://ep-xxxxxxxxxxx.epsrv-xxxxxxxxxxx.cn-hangzhou.privatelink.aliyuncs.com:10009/;principal=kyuubi/_HOST@EMR.C-DFD43*****7C204.COM
        ```
        
    
    **Default Access Identity**
    
    Define the identity used to access the Spark workspace from the current DataWorks workspace.
    
    -   **Development environment**: Only the **Executor** identity is supported.
        
    -   **Production environment**: The **Alibaba Cloud Account**, **RAM User**, and **Task Owner** identities are supported.
        
    
    **Computing Resource Instance Name**
    
    This name identifies the computing resource. At runtime, the instance name is used to select the computing resource for a task.
    
3.  Click **OK** to complete the configuration.
    

## **Configure global Spark parameters**

In DataWorks, you can specify Spark parameters for each module at the workspace level. You can also set whether global parameters have a higher priority than local parameters within a specific module, such as Data Studio. After you complete the configuration, the specified Spark parameters are used by default to run tasks.

**Parameter Scope**

**Configuration Method**

**Applying global configurations**

You can configure global SPARK parameters for a DataWorks module at the workspace level to run EMR jobs. You can also define whether these global SPARK parameters have a higher priority than the SPARK parameters configured within a specific module. For more information, see [Configure global SPARK parameters](#4c55cfa771irw).

**Effective on a single node**

In the Data Studio module, you can set specific SPARK properties for a single node task on the node editing page. Other product modules do not support setting SPARK properties separately.

### **Access control**

Only the following roles can configure global Spark parameters:

-   An Alibaba Cloud account.
    
-   A RAM user or RAM role with the `AliyunDataWorksFullAccess` permission.
    
-   A RAM user with the workspace administrator role.
    

### **Configure global SPARK parameters**

For more information about how to configure the Spark parameters of a Serverless Spark computing resource, see [Job configuration instructions](/help/en/lindorm/user-guide/parameter-description).

1.  Go to the [computing resources page](https://sc.data.aliyun.com/cn-hangzhou/#/computingResource) and find the Serverless Spark computing resource that you attached.
    
2.  Click **Spark Parameters** to open the Spark parameter configuration pane and view the global Spark parameter settings.
    
3.  Set global Spark parameters.
    
    In the upper-right corner of the **Spark Parameters** page, click **Edit Spark Parameters** to configure the global Spark parameters and their priorities for each module.
    
    **Note**
    
    These settings apply globally to the workspace. Before you configure the parameters, confirm that the correct workspace is selected.
    
    **Parameter**
    
    **Steps**
    
    **Spark Property**
    
    Configure the Spark properties to use when you run Serverless Spark tasks.
    
    -   You can click the **Add** button below, enter the **Spark Property Name** and the corresponding **Spark Property Value** to set the Spark properties.
        
    -   For information about the supported Spark configuration parameters, see [Spark Configuration](https://spark.apache.org/docs/latest/configuration.html) and [List of custom Spark Conf parameters](/help/en/emr/emr-serverless-spark/user-guide/custom-parameters-of-spark-conf).
        
    
    **Global Settings Take Precedence**
    
    If you select this option, the global configuration takes precedence over the configurations within product modules. Tasks are run based on the global SPARK properties.
    
    -   **Global Configuration**: These are the Spark properties configured in **Management Center** > **Computing Resources** for the corresponding Serverless Spark computing resource on the **Spark Parameters** page.
        
        Currently, you can set global SPARK parameters only for the Data Studio, Operation Center, and DataAnalysis modules.
        
    -   **Configuration within a product module**:
        
        -   **Data Studio**: For EMR Spark, EMR Kyuubi, EMR Spark SQL, EMR Spark Streaming nodes, Serverless Spark Batch, Serverless Spark SQL, and Serverless Kyuubi nodes, you can set SPARK properties for a single node task in the **Debugging Configurations** or **Scheduling** tab under **Spark Parameters** on the node editing page.
            
        -   **Other product modules**: Setting SPARK properties within these modules is not supported.
            
    
4.  Click **OK** to save the global Spark parameters.
    

## **Configure cluster account mapping**

You can manually configure the mapping between the Alibaba Cloud accounts of DataWorks tenant members and the identity accounts of the EMR cluster. This allows DataWorks tenant members to run tasks in EMR Serverless Spark using the mapped cluster identities.

**Important**

This feature is available only for **Serverless resource groups**. If you purchased a Serverless resource group before August 15, 2025, and want to use this feature, you must [submit a ticket](https://smartservice.console.alibabacloud.com/) to upgrade the resource group.

1.  Go to the [computing resources page](https://sc.data.aliyun.com/cn-hangzhou/#/computingResource) and find the Serverless Spark computing resource that you attached.
    
2.  Click **Account Mappings** to open the **Account Mappings** configuration pane.
    
3.  Click **Edit Account Mapping** to configure the cluster account mappings. You can configure the parameters based on the selected **Mapping Type**.
    
    **Account Mapping Type**
    
    **Task execution description**
    
    **Configuration description**
    
    **System account mapping**
    
    Uses the cluster account that has the same name as the **Default Access Identity** in the basic information of the computing resource to run [EMR Spark](/help/en/dataworks/user-guide/emr-spark-node-new-data-studio), [EMR Spark SQL](/help/en/dataworks/user-guide/emr-spark-sql-node-new-data-studio), [EMR Kyuubi](/help/en/dataworks/user-guide/emr-kyuubi-node-new-data-studio), and [Develop a Notebook in a personal development environment](/help/en/dataworks/user-guide/notebook-node-develop-based-on-personal-development-environments) node tasks.
    
    By default, same-name mapping is used. To use a different account mapping, you can manually configure a different account.
    
    **OPEN LDAP account mapping**
    
    Uses the **Default Access Identity** in the basic information of the computing resource to run [EMR Spark](/help/en/dataworks/user-guide/emr-spark-node-new-data-studio) and [EMR Spark SQL](/help/en/dataworks/user-guide/emr-spark-sql-node-new-data-studio) tasks.
    
    Uses the OpenLDAP account that is mapped to the default access identity in the basic information of the computing resource to run [EMR Kyuubi](/help/en/dataworks/user-guide/emr-kyuubi-node-new-data-studio) and [Develop a Notebook in a personal development environment](/help/en/dataworks/user-guide/notebook-node-develop-based-on-personal-development-environments) node tasks.
    
    If you have [configured and enabled LDAP authentication for Kyuubi Gateway](/help/en/emr/emr-serverless-spark/user-guide/configure-and-enable-ldap-authentication-for-kyuubi-gateway), you must configure the mapping between the **Alibaba Cloud Account** and the OpenLDAP account (**LDAP Account**, **LDAP Password**) to run the corresponding tasks.
    
    **Important**
    
    If the Alibaba Cloud account required to run DataWorks tasks is not in the account mapping list, the tasks may fail to run.
    
    **Kerberos account mapping**
    
    Use the **Default Access Identity** from the basic information of the computing resource to run [EMR Spark](/help/en/dataworks/user-guide/emr-spark-node-new-data-studio) and [EMR Spark SQL](/help/en/dataworks/user-guide/emr-spark-sql-node-new-data-studio) Jobs.
    
    The Kerberos account that is mapped from the default access identity in the basic information of the computing resource is used to run [EMR Kyuubi](/help/en/dataworks/user-guide/emr-kyuubi-node-new-data-studio) node tasks.
    
    1.  Upload the krb5.conf file for the Kerberos service that is configured on the EMR Serverless Spark cluster.
        
    2.  For the Alibaba Cloud account specified as the default access identity, configure the principal and keytab required for Kerberos authentication.
        
    
4.  Click **Confirm** to complete the cluster account mapping configuration.
    

## **Next steps**

After you configure the Serverless Spark computing resource, you can use it to develop node tasks in Data Development. For more information, see [EMR Spark node](/help/en/dataworks/user-guide/emr-spark-node-new-data-studio), [EMR Spark SQL node](/help/en/dataworks/user-guide/emr-spark-sql-node-new-data-studio), [EMR Spark Streaming node](/help/en/dataworks/user-guide/emr-spark-streaming-node-new-data-studio), [EMR Kyuubi node](/help/en/dataworks/user-guide/emr-kyuubi-node-new-data-studio), [Serverless Spark Batch node](/help/en/dataworks/user-guide/serverless-spark-batch), [Serverless Spark SQL node](/help/en/dataworks/user-guide/serverless-spark-sql-node), and [Serverless Kyuubi node](/help/en/dataworks/user-guide/serverless-kyuubi).
