The Stream Job Operations Management Platform lets you submit and manage jobs and their required resources. It supports job and resource isolation between different workspaces and provides user permission management. This topic describes the basic features of the platform and demonstrates the basic workflow by providing examples for submitting a DPI engine Jar job, a DPI engine SQL job, and a DPI engine Python job.

## **Prerequisites**

You have [activated the DPI engine](/help/en/lindorm/user-guide/activate-the-lindorm-streaming-engine).

## **Basic features**

## **Job management**

-   Create, modify, and delete jobs.
    
-   Organize and manage jobs in folders.
    
-   Manage multiple versions of a job.
    
-   The supported job types are Stream Engine JAR, Stream Engine SQL, and Stream Engine Python.
    
-   Move and copy jobs within the same workspace or across different workspaces.
    

## **Dependency management**

-   Create, modify, and delete resources.
    
-   Organize and manage resources in folders.
    
-   Manage multiple versions of a resource.
    
-   Supports six resource types: Jar App, Jar Library, Config File, Python App, Python Library, and Data File. Their purposes are as follows:
    
    **Resource type**
    
    **Required file type**
    
    **Purpose**
    
    Jar App
    
    `.jar`
    
    The main program for a DPI engine JAR job.
    
    Jar Library
    
    `.jar`
    
    A Jar dependency. It can be used in any job type.
    
    Config File
    
    Text file types such as `.txt`, `.xml`, and `.properties`.
    
    A configuration file. It is read by the main program code of a DPI engine JAR job to get configuration information.
    
    Python App
    
    `.py`
    
    This is the main program for a stream engine Python job.
    
    Python Library
    
    `.py` or a compressed package that contains Python programs, such as `.tar.gz` or `.zip`.
    
    A Python dependency for a DPI engine Python job.
    
    Data File
    
    A compressed package that contains data files, such as `.zip` or `.tar.gz`. The data files can be in formats such as `.txt`.
    
    Data dependencies for a Stream engine Python job.
    
-   Move and copy resources and resource folders within the same workspace or across different workspaces.
    
-   Download resources and view Config File resources online.
    

## **Cluster management**

Allows you to view the DPI engine clusters that can be used to create jobs in standalone mode.

## **User management**

Allows you to view all users who can log on to the Stream Job Operations Management Platform.

## **Workspace management**

Allows you to view, create, delete, and modify workspaces. Jobs and resources are isolated and independent between different workspaces.

## **Role management**

Allows you to view, create, delete, and modify role information.

Roles are used to define permissions. The root user has the highest administrator permissions. To obtain operation permissions, a non-root user must be assigned a role in a workspace. The role can be assigned by the root user or another authorized user in the [Member Management](#5816c185f8bly) module.

## **Member management**

Allows you to view, create, delete, and modify member information in the current workspace. Member information defines the permissions that users have to perform operations in the workspace.

## **Log on to the Stream Job Operations Management Platform**

### **Get your username and password**

1.  Log on to the [Lindorm console](https://lindorm.console.alibabacloud.com/cn-hangzhou/clusterhou/cluster). In the upper-left corner of the page, select the region of the instance. On the **Instances** page, click the ID of the target instance or click **View Instance Details** in the **Actions** column for the instance.
    
2.  In the navigation pane on the left, click **Database Connections**.
    
3.  Click the DPI engine tab to obtain the default username and password.
    

### **Log on to the platform**

1.  In the navigation pane on the left, click **Stream Engine**.
    
2.  Click **Enter Stream Job Operations Management Platform**.
    
    **Note**
    
    The Stream Job Operations Management Platform is currently in the **invitational preview** stage. If you want to use this feature, contact Lindorm technical support (DingTalk ID: s0s3eg3) to request access.
    
3.  Enter your username and password to log on to the platform.
    

## **Usage examples**

## **Submitting a Stream Engine Jar job**

#### **Prepare resources**

1.  In the navigation pane on the left, click **Dependency Management**.
    
2.  Right-click the target dependency folder, select **Create Resource**, and upload the required resources, such as Jar App, Jar Library, and Config File.
    

#### **Create a job**

1.  In the navigation pane on the left, click **Job Management**.
    
2.  Select **New** > **New Job**.
    
3.  Fill in the required parameters.
    
    **Note**
    
    Job names can contain Chinese characters, uppercase letters, lowercase letters, hyphens (-), and underscores (\_). They cannot contain two consecutive spaces.
    
4.  Click **Submit**.
    

#### **Add a job version**

1.  Click the name of the target job to go to its details page.
    
2.  Click **Add** to configure the job version information. Built-in resources are system-provided dependencies that you can use directly without uploading them.
    
    To use a configuration file in the main program, you can use an absolute path or a relative path:
    
    -   The absolute path is fixed: `/home/hadoop/cluster-data/lstream/user-config/ConfigFileName`.
        
    -   For a relative path, the configuration file is treated as if it is in the `resources` folder of the main program Jar. You can access it using a method such as `getClassLoader().getResourceAsStream(ConfigFileName)`.
        
3.  Click **Create Version**.
    

#### **Publish a job version**

Click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2815661671/p989093.png) in the **Actions** column of the target version to publish the job version.

#### **Start a job**

1.  Click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2815661671/p989101.png) in the **Actions** column of the target version to start the job.
    
2.  In the Start Job dialog box, select whether to start from an existing savepoint or checkpoint path to resume the previous run state.
    
    **Important**
    
    A job can have multiple versions, but only one version can be in the running state.
    

#### **Stop a job**

Click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2815661671/p989109.png) in the **Actions** column of the target version to stop the running job. You can choose to trigger a savepoint to save the current running state for the next time you start the job.

#### **Delete a job version**

In the **Actions** column of the target version, select **![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2815661671/p989161.png)** > **Delete**.

## **Submitting a stream engine SQL job**

#### **Prepare resources**

1.  In the navigation pane on the left, click **Dependency Management**.
    
2.  Right-click the target dependency folder, select **Create Resource**, and upload the required Jar Library resources, such as User-Defined Functions (UDFs).
    

#### **Create a job**

1.  In the navigation pane on the left, click **Job Management**.
    
2.  Select **New** > **New Job**.
    
3.  Fill in the required parameters.
    
    **Note**
    
    Job names can contain Chinese characters, uppercase letters, lowercase letters, hyphens (-), and underscores (\_). They cannot contain two consecutive spaces.
    
4.  Click **Submit**.
    

#### **Add a job version**

1.  Click the name of the target job to go to its details page.
    
2.  Click **Add** to configure the job version information.
    
    The dialog box provides auto-completion and syntax highlighting for SQL statements. It also supports SQL syntax checking.
    
3.  Click **Create Version**.
    

#### **Publish a job version**

Click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2815661671/p989093.png) in the **Actions** column of the target version to publish the job version.

#### **Start a job**

1.  Click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2815661671/p989101.png) in the **Actions** column of the target version to start the job.
    
2.  In the Start Job dialog box, select whether to start from an existing savepoint or checkpoint path to resume the previous run state.
    
    **Important**
    
    A job can have multiple versions, but only one version can be in the running state.
    

#### **Stop a job**

In the Actions column for the target version, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2815661671/p989109.png) icon to stop the running job. When you stop the job, you can choose whether to trigger a savepoint to save the current run state. This lets you resume the job later.

#### **Delete a job version**

In the Actions column for the target version, select **![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2815661671/p989161.png)** > **Delete** to delete the job version.

## **Submit a stream engine Python job**

#### **Prepare resources**

1.  In the navigation pane on the left, click **Dependency Management**.
    
2.  Right-click the target dependency folder, select **Create Resource**, and upload the required resources, such as Python App, Python Library, and Data File.
    

#### **Create a job**

1.  In the navigation pane on the left, click **Job Management**.
    
2.  Select **New** > **New Job**.
    
3.  Fill in the required parameters.
    
    **Note**
    
    Job names can contain Chinese characters, uppercase letters, lowercase letters, hyphens (-), and underscores (\_). They cannot contain two consecutive spaces.
    
4.  Click **Submit**.
    

#### **Add a job version**

1.  Click the name of the target job to go to its details page.
    
2.  Click **Add** to configure the job version information. Built-in resources are system-provided dependencies that you can use directly without uploading them.
    
3.  Click **Create Version**.
    

#### **Publish a job version**

Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2815661671/p989093.png) icon in the **Actions** column of the target version to publish the job version.

#### **Start a job**

1.  Click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2815661671/p989101.png) in the **Actions** column of the target version to start the job.
    
2.  In the Start Job dialog box, select whether to start from an existing savepoint or checkpoint path to resume the previous run state.
    
    **Important**
    
    A job can have multiple versions, but only one version can be in the running state.
    

#### **Stop a job**

Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2815661671/p989109.png) icon in the **Actions** column of the target version to stop the running job. You can choose to trigger a savepoint to save the current running state for the next time you start the job.

#### **Delete a job version**

In the **Actions** column of the target version, select **![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2815661671/p989161.png)** > **Delete** to delete the job version.
