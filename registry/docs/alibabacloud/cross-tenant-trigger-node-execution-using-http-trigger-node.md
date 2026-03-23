DataWorks offers HTTP trigger nodes to help you trigger and execute tasks across different tenants. This topic provides a step-by-step guide on how to use HTTP trigger nodes in DataWorks to implement cross-tenant task triggering.

## Background

In modern enterprises, there is often a need to perform data processing and analytics across multiple tenants or regions within the same tenant. DataWorks provides HTTP trigger nodes for the following scenarios:

-   Scenarios that require task dependencies and collaboration across tenants.
    
-   Scenarios where dependencies exist between different scheduling systems within the same tenant (for example, System B relies on a node in System A to complete processing before it can proceed).
    

**Example diagram for the cross-tenant scenario:**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4366206671/CAEQThiBgIC4qqGXzxkiIDk2ZTg5MzY0NjUxNjQyMjQ4ZDNiOWQ3ZTMxNTM2ZmQ55095607_20250430140355.923.svg)

**Diagram explanation**: A workflow configured with an HTTP trigger node is deployed to the Operation Center in Tenant B. When the workflow reaches its scheduled execution time, the upstream nodes before the HTTP trigger node execute sequentially according to the configured schedule. Once execution reaches the HTTP trigger node, it and all its downstream tasks enter a waiting state. When the HTTP trigger node receives a trigger command from Tenant A, it performs validation. If validation succeeds, the HTTP trigger node and its downstream tasks proceed to execute.

## **Prerequisites**

-   Two tenant accounts (that is, two Alibaba Cloud accounts) are available.
    
-   [Create workspaces in both tenants](/help/en/dataworks/user-guide/create-a-workspace).
    
-   [Serverless resource groups](/help/en/dataworks/user-guide/using-serverless-resource-groups) have been associated with each workspace in the respective tenants.
    
-   [An Internet NAT gateway](/help/en/nat-gateway/getting-started/use-the-snat-feature-of-an-internet-nat-gateway-to-access-the-internet) and EIP have been configured for the VPC of the serverless resource group in the workspace that sends the trigger.
    
    **Important**
    
    When a Shell node triggers an HTTP trigger node, the trigger command must be sent via the public network.
    
-   A MaxCompute computing resource has been associated with the workspace where the Shell node resides. For details, see [Computing resource management](/help/en/dataworks/user-guide/compute-resource-management).
    
    **Note**
    
    The JAR file that will be executed by the trigger Shell node must be uploaded to MaxCompute.
    

## **Notes**

-   HTTP trigger nodes are only used for triggering and do not require any development logic.
    
-   Perform the corresponding operations based on your workspace type:
    
    -   For workspaces participating in the Data Studio public preview**:** see [Data Studio (new version) trigger example](#b9570fca3abc9).
        
    -   For workspaces not participating in the Data Studio public preview**:** see [DataStudio (legacy version) trigger example](#67d0be44c9syp).
        
        **Note**
        
        For workspaces not participating in the Data Studio public preview, the HTTP trigger node feature is supported only in DataWorks Enterprise Edition.
        

## Data Studio (new version) trigger example

If you need to trigger node execution from tenant A to tenant B in a scheduling scenario using the new Data Studio, follow the instructions below.

### Tenant B: Create a workflow with an HTTP trigger node

In the workspace of tenant B, create a workflow to be triggered remotely. This workflow should include an upstream HTTP trigger node that receives the trigger command and a business node (a Shell node in this example) to verify the effect of cross-tenant triggering.

1.  Go to Data Studio.
    
    Go to the [DataWorks workspace list page](https://dataworks.console.aliyun.com/workspace/list), switch to the target region, and find the target workspace. Click **Shortcuts** > **Data Studio** in the **Actions** column.
    
2.  Create a new workflow.
    
    1.  In the left navigation pane, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5969899371/p859647.png) icon.
        
    2.  Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3390150471/p859711.png) icon to **Create Workflow**. In the dialog box, enter a name (for example, `HTTP_Workflow`) and click **OK**.
        
3.  Create new nodes.
    
    1.  In the workflow configuration page, drag **General** > **HTTP Trigger** and **General** > **Shell** into the canvas.
        
    2.  Link the Shell node as the downstream node of the HTTP trigger node.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6034150671/p985340.png)
        
4.  Edit the Shell node.
    
    1.  Hover over the Shell node and click **Open Node**.
        
    2.  In the editor, enter:
        
        ```
        echo "DataWorks";
        ```
        
    3.  Click **Scheduling** on the right side, and set **Resource Group** to the serverless resource group associated with your workspace.
        
    4.  Click **Save** in the toolbar at the top.
        
5.  Deploy the workflow.
    
    1.  Find the workflow `HTTP_Workflow` in the Workspace Directories, and in the **Scheduling** on the right side, set **Instance Generation Mode** to **Immediately After Deployment**.
        
    2.  Click **Save** in the toolbar at the top of the workflow editing page.
        
    3.  In the **Change Review** dialog box, click **Save**.
        
    4.  Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7103642471/p919032.png) icon in the toolbar, and click Start Deployment to Production Environment. For more information, see [Node and workflow deployment](/help/en/dataworks/user-guide/task-release/).
        
6.  Record HTTP instance parameters.
    
    Since an HTTP trigger node immediately generates an auto-triggered instance, you can go to the **Operation Center** to view and record the HTTP instance parameter information.
    
    1.  Go to the Operation Center page.
        
        Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the top navigation bar, select the desired region. In the left-side navigation pane, choose **Data Development and O&M** > **Operation Center**. On the page that appears, select the desired workspace from the drop-down list and click **Go to Operation Center**.
        
    2.  In the left navigation pane, click **Auto Triggered Node O&M** > **Auto Triggered Instances**.
        
    3.  Locate the HTTP trigger node instance and record its **Task ID** and **Scheduling Time**.
        
        **Note**
        
        Hover over the name of the HTTP trigger node instance to view its **Task ID****.**
        

### Local environment: Prepare sample code

1.  Add the pom dependency.
    
    You can go to the [TriggerSchedulerTaskInstance debugging page](https://api.alibabacloud.com/api/dataworks-public/2024-05-18/TriggerSchedulerTaskInstance?spm=a2c4g.11186623.0.0.3ca116c6DgpmQn&RegionId=cn-hangzhou&tab=DEMO&lang=PYTHON&sdkStyle=dara&params={}) and view the complete **SDK installation information** in the **SDK Sample Code** tab.
    
    ```
    <build>
           <plugins>
               <plugin>
                   <groupId>org.apache.maven.plugins</groupId>
                   <artifactId>maven-assembly-plugin</artifactId>
                   <version>3.3.0</version>
                   <configuration>
                       <archive>
                           <manifest>
                               <mainClass>com.example.demo.CrossTenantTriggerSchedulerTaskInstance</mainClass>  <!-- Replace with your main class -->
                           </manifest>
                       </archive>
                       <descriptorRefs>
                           <descriptorRef>jar-with-dependencies</descriptorRef>
                       </descriptorRefs>
                   </configuration>
                   <executions>
                       <execution>
                           <id>make-assembly</id>
                           <phase>package</phase> <!-- Execute during the packaging phase -->
                           <goals>
                               <goal>single</goal>
                           </goals>
                       </execution>
                   </executions>
               </plugin>
           </plugins>
       </build>
       <dependencies>
           <dependency>
               <groupId>com.aliyun</groupId>
               <artifactId>dataworks_public20240518</artifactId>
               <version>6.2.0</version>
           </dependency>
       </dependencies>
    ```
    
    **Important**
    
    After completing the code development, replace the `mainClass` parameter with the name of the Java main class you created. The main class name format is the full package name plus the class name. For example, `**com.example.demo**.CrossTenantTriggerSchedulerTaskInstance`.
    
2.  Code development.
    
    ```
    package com.example.demo;
       import com.aliyun.dataworks_public20240518.Client;
       import com.aliyun.dataworks_public20240518.models.TriggerSchedulerTaskInstanceRequest;
       import com.aliyun.dataworks_public20240518.models.TriggerSchedulerTaskInstanceResponse;
       import com.aliyun.teautil.models.RuntimeOptions;
    
       import java.text.SimpleDateFormat;
       import java.util.Calendar;
    
       public class CrossTenantTriggerSchedulerTaskInstance {
           // Create an Alibaba Cloud DataWorks client
           public static Client createClient20240518(String accessId, String accessKey, String endpoint) throws Exception {
               // Initialize OpenAPI configuration object
               com.aliyun.teaopenapi.models.Config config = new com.aliyun.teaopenapi.models.Config();
               config.setAccessKeyId(accessId); // Set AccessKey ID
               config.setAccessKeySecret(accessKey); // Set AccessKey Secret
               config.setEndpoint(endpoint); // Set endpoint
               return new Client(config); // Return initialized client instance
           }
           
           // Trigger DataWorks node execution
           public static TriggerSchedulerTaskInstanceResponse runTriggerScheduler(Client client, Long nodeId, String EnvType, Long TriggerTime) throws Exception {
               TriggerSchedulerTaskInstanceRequest request = new TriggerSchedulerTaskInstanceRequest(); // Create API request object
               request.setTaskId(nodeId); // Set the node ID
               request.setEnvType(EnvType); // Set the environment
               request.setTriggerTime(TriggerTime); // Set the scheduled trigger time (timestamp in milliseconds)
               RuntimeOptions runtime = new RuntimeOptions(); // Initialize runtime configuration
               return client.triggerSchedulerTaskInstanceWithOptions(request, runtime); // Execute the API operation and return the response
           }
           
           // Main method
           public static void main(String[] args) throws Exception {
               // Initialize the node ID (example value)
               String nodeId1 = "";
               // Initialize the environment (example value)
               String EnvTypeStr = "";
               // Initialize the scheduled time (example value)
               String cycTimeStr = "";
               
               // Parse CLI arguments: nodeId, environment type, and scheduled time
               int i;
               for(i = 0; i < args.length; ++i) {
                   if (i == 0) {
                       nodeId1 = args[i];
                   } else if (i == 1) {
                       EnvTypeStr = args[i];
                   } else if (i == 2) {
                       cycTimeStr = args[i];
                   }
               }
               
               // Convert string to a Long-type node ID
               Long nodeId = Long.parseLong(nodeId1);
               
               // Print usage instructions
               System.out.println("Usage: java -jar test-1.0-SNAPSHOT.jar nodeId EnvTypeStr cycTimeParam");
               
               // Parse the scheduled time and convert it to a timestamp
               SimpleDateFormat sdft = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
               Calendar calendar = Calendar.getInstance();
               calendar.setTime(sdft.parse(cycTimeStr)); // Parse time string
               Long cycTime = calendar.getTimeInMillis(); // Get millisecond timestamp
               
               // Output debug information (timestamp)
               System.out.println("Scheduled timestamp: " + cycTime);
               
               // Configure Alibaba Cloud service parameters
               String endpoint = "dataworks.cn-hangzhou.aliyuncs.com"; // Service endpoint
               String accessId = "xxx"; // Access key ID
               String accessKey = "xxx"; // Access key Secret
               
               // Create Alibaba Cloud client instance
               Client client = createClient20240518(accessId, accessKey, endpoint);
               
               // Execute trigger node operation
               TriggerSchedulerTaskInstanceResponse response = runTriggerScheduler(client, nodeId, EnvTypeStr, cycTime);
               
               // Output API response result (JSON format)
               System.out.println(com.aliyun.teautil.Common.toJSONString(com.aliyun.teautil.Common.toMap(response)));
           }
       }
    ```
    
    Replace the `endpoint`, `accessId`, and `accessKey` parameters in the above code with the actual values required for your business according to the following parameter descriptions.
    
    **Parameter**
    
    **Description**
    
    endpoint
    
    The service address of the workspace where the target HTTP trigger node is located. For more information, see [Alibaba Cloud API endpoints](https://api.aliyun.com/product/dataworks-public).
    
    accessId
    
    The `AccessKey ID` of the Alibaba Cloud account where the target HTTP trigger node is located.
    
    You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console), hover your mouse over the profile picture in the upper-right corner, go to **AccessKey**, and obtain the `AccessKey ID` and `AccessKey Secret` of the RAM user where the target HTTP trigger node is located.
    
    **Warning**
    
    The `AccessKey` of the Alibaba Cloud account has full permissions. If leaked, it poses serious security risks. We recommend that you use the AccessKey of a RAM user that has only the **Workspace Administrator** role for the target workspace.
    
    accessKey
    
    The `AccessKey Secret` of the Alibaba Cloud account where the target HTTP trigger node is located.
    
3.  Package the above code to generate a JAR package with the suffix `jar-with-dependencies.jar`.
    

### Tenant A: Configure the shell node

You can follow these steps to configure a Shell node in tenant A workspace to trigger the HTTP trigger node in tenant B workspace.

1.  Go to Data Studio.
    
    Go to the [DataWorks workspace list page](https://dataworks.console.aliyun.com/workspace/list), switch to the target region, and find the target workspace. Click **Shortcuts** > **Data Studio** in the **Actions** column.
    
2.  Upload the JAR file.
    
    1.  In the left navigation pane, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6034150671/p951744.png) icon.
        
    2.  On the **Resource Management** page, click the **Create** button or the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5222099371/p847879.png) icon, and select **Create Resource** > **MaxCompute Jar**.
        
    3.  In the **Create Resource or Function** dialog box, enter the resource name `http_node_work.jar`, and click OK.
        
    4.  On the upload resource details page, click **Upload** to upload the JAR package you generated in the [Local environment: Prepare sample code](#d1174ed6a7gjy) step, and select the MaxCompute data source you have bound for **Data Source**.
        
3.  Save and publish the resource.
    
    After the JAR resource you prepared is uploaded, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7103642471/p919032.png) button in the toolbar to bring up the deployment panel, click **Start Deployment to Production Environment**, and complete the deployment check process operations in sequence. For more information, see [Node and workflow deployment](/help/en/dataworks/user-guide/task-release/).
    
4.  Create a trigger-side Shell node.
    
    1.  In the left navigation pane, click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5969899371/p859647.png), and click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3390150471/p859711.png) icon next to **Workspace Directories**.
        
    2.  Select **General** > **Shell**, and the **Create Node** dialog box appears.
        
    3.  Customize the node **Name**, and click **OK** to go to the node editing page.
        
5.  Edit the trigger-side Shell node.
    
    1.  Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6034150671/p951744.png) icon in the left navigation pane of the Shell node editing page to find the JAR resource you uploaded (`http_node_work.jar`).
        
    2.  Right-click the JAR resource you uploaded and select **Reference Resources**.
        
    3.  Complete the trigger code execution parameter information in the Shell node.
        
    
    ```
    ##@resource_reference{"http_node_work.jar"}
     java -jar http_node_work.jar nodeId "EnvTypeStr" "cycTimeParam"
    ```
    
    **Parameter**
    
    **Description**
    
    java -jar
    
    JAR execution command.
    
    http\_node\_work.jar
    
    The name of the resource you referenced.
    
    nodeId
    
    The HTTP trigger node **Task ID** recorded in the [Tenant B: Create a workflow with an HTTP trigger node](#96c60d32edp4j) step.
    
    EnvTypeStr
    
    The project environment of the target HTTP trigger node. This topic executes an HTTP trigger node published to the production environment, so set the parameter to `Prod`.
    
    If you need to execute an HTTP trigger node in the development environment, set the parameter to `Dev`.
    
    cycTimeParam
    
    The **Scheduling Time** of the HTTP trigger node task recorded in the [Tenant B: Create a workflow with an HTTP trigger node](#96c60d32edp4j) step. The time format is `yyyy-MM-dd HH:mm:ss`.
    
6.  Configure the trigger-side Shell node.
    
    In the **Scheduling** on the right side of the Shell node editing page, find **Scheduling Policies** > **Resource Group**. Select the serverless resource group bound to the workspace as the **Resource Group**.
    

### **Run and view results**

Run the Shell node under tenant A to trigger the execution of the HTTP trigger node and its subsequent node tasks in tenant B.

1.  Run the trigger-side Shell node.
    
    Click **Running Duration** in the toolbar at the top of the Shell node you configured in tenant A[: Configure Shell node](#3b78638875rwd) step.
    
2.  View the execution results.
    
    You need to go to tenant B and follow these steps to view the running results.
    
    1.  Go to the Operation Center page.
        
        Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the top navigation bar, select the desired region. In the left-side navigation pane, choose **Data Development and O&M** > **Operation Center**. On the page that appears, select the desired workspace from the drop-down list and click **Go to Operation Center**.
        
    2.  In the left navigation pane, click **Auto Triggered Node O&M** > **Auto Triggered Instances**.
        
    3.  Find the HTTP trigger node instance you want to trigger and check the running results.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6034150671/p952427.png)
        

## DataStudio (legacy version) trigger example

If you need to trigger the execution of nodes in the legacy DataStudio from tenant A to tenant B in a scheduling scenario, refer to the following content.

### Tenant B: Create an HTTP trigger node workflow

Create a workflow in the workspace of tenant B that needs to be remotely triggered. This workflow should include business nodes waiting to be triggered (this topic uses a Shell node as an example) and an upstream HTTP trigger node that receives trigger commands, to verify the effect of cross-tenant triggering later.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6034150671/p951822.png)

1.  Create an HTTP trigger node. For more information, see [Create an HTTP Trigger node](/help/en/dataworks/user-guide/create-an-http-trigger-node).
    
2.  Create a Shell node. For more information, see [Create a Shell node](/help/en/dataworks/user-guide/create-a-shell-node).
    
    Enter the following content in the node editing page, and configure **Support for Rerun** and **Resource Group** in **Scheduling** on the right side of the Shell node editing page. **Save** the node configuration information.
    
    ```
    echo "DataWorks";
    ```
    
3.  [Deploy nodes](/help/en/dataworks/user-guide/deploy-nodes#task-2470114) to the Operation Center.
    
4.  Locate the HTTP trigger node instance and record its **Task ID**, **Scheduling Time** and **Data Timestamp**.
    
    Since HTTP trigger nodes generate auto triggered instances one day after deployment, you can click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6034150671/p951826.png) icon in the upper-right corner of the workflow the next day, and view the HTTP instance parameter information in **Auto Triggered Node O&M** > **Auto Triggered Instances** in the **Operation Center**.
    
    **Note**
    
    Hover over the name of the HTTP trigger node instance to view its **Task ID****.**
    

### Local environment: Prepare sample code

1.  Add the pom dependency.
    
    You can go to the [TriggerSchedulerTaskInstance debugging page](https://api.alibabacloud.com/api/dataworks-public/2024-05-18/TriggerSchedulerTaskInstance?spm=a2c4g.11186623.0.0.3ca116c6DgpmQn&RegionId=cn-hangzhou&tab=DEMO&lang=PYTHON&sdkStyle=dara&params={}) and view the complete **SDK installation information** in the **SDK Sample Code** tab.
    
    ```
        <build>
            <plugins>
                <plugin>
                    <groupId>org.apache.maven.plugins</groupId>
                    <artifactId>maven-assembly-plugin</artifactId>
                    <version>3.3.0</version>
                    <configuration>
                        <archive>
                            <manifest>
                                <mainClass>com.example.demo.CrossTenantTriggerNode</mainClass>  <!-- Replace with your main class -->
                            </manifest>
                        </archive>
                        <descriptorRefs>
                            <descriptorRef>jar-with-dependencies</descriptorRef>
                        </descriptorRefs>
                    </configuration>
                    <executions>
                        <execution>
                            <id>make-assembly</id>
                            <phase>package</phase> 
                            <goals>
                                <goal>single</goal>
                            </goals>
                        </execution>
                    </executions>
                </plugin>
            </plugins>
        </build>
    
        <dependencies>
            <dependency>
                <groupId>com.aliyun</groupId>
                <artifactId>dataworks_public20200518</artifactId>
                <version>7.0.1</version>
            </dependency>
            <dependency>
                <groupId>com.aliyun</groupId>
                <artifactId>tea-openapi</artifactId>
                <version>0.3.8</version>
            </dependency>
            <dependency>
                <groupId>com.aliyun</groupId>
                <artifactId>tea-console</artifactId>
                <version>0.0.1</version>
            </dependency>
            <dependency>
                <groupId>com.aliyun</groupId>
                <artifactId>tea-util</artifactId>
                <version>0.2.23</version>
            </dependency>
            <dependency>
                <groupId>com.aliyun</groupId>
                <artifactId>credentials-java</artifactId>
                <version>1.0.1</version>
            </dependency>
        </dependencies>
    ```
    
    **Important**
    
    After completing the code development, replace the `mainClass` parameter with the name of the Java main class you created. The main class name format is the full package name plus the class name. For example, `**com.example.demo**.CrossTenantTriggerSchedulerTaskInstance`.
    
2.  Code development.
    
    ```
    package com.example.demo;
    
    import java.text.SimpleDateFormat;
    import java.util.Calendar;
    import com.aliyun.dataworks_public20200518.Client;
    import com.aliyun.dataworks_public20200518.models.RunTriggerNodeRequest;
    import com.aliyun.dataworks_public20200518.models.RunTriggerNodeResponse;
    import com.aliyun.teautil.models.RuntimeOptions;
    
    public class CrossTenantTriggerNode {
        // Method to create Alibaba Cloud DataWorks client
        public static Client createClient20200518(String accessId, String accessKey, String endpoint) throws Exception {
            // Initialize OpenAPI configuration object
            com.aliyun.teaopenapi.models.Config config = new com.aliyun.teaopenapi.models.Config();
            config.setAccessKeyId(accessId); // Set access key ID
            config.setAccessKeySecret(accessKey); // Set access key secret
            config.setEndpoint(endpoint); // Set service endpoint
            return new Client(config); // Return initialized client instance
        }
        // Method to trigger DataWorks node execution
        public static RunTriggerNodeResponse runTriggerNode(Client client, Long nodeId, Long cycleTime, Long bizDate, Long appId) throws Exception {
            RunTriggerNodeRequest request = new RunTriggerNodeRequest(); // Create API request object
            request.setNodeId(nodeId); // Set the node ID to trigger
            request.setCycleTime(cycleTime); // Set cycle time (millisecond timestamp)
            request.setBizDate(bizDate); // Set business date (millisecond timestamp)
            request.setAppId(appId); // Set application ID
            RuntimeOptions runtime = new RuntimeOptions(); // Initialize runtime configuration
            return client.runTriggerNodeWithOptions(request, runtime); // Execute API call and return response
        }
        // Program entry method
        public static void main(String[] args) throws Exception {
            // Initialize node ID (example value)
            String nodeId1 = "";
            // Initialize scheduled time and business date (example values)
            String cycTimeStr = "";
            String bizTimeParam = "";
            // Process command line parameters in a for loop, assigning values to nodeId1, cycTimeParam, bizTimeParam respectively
            int i;
            for(i = 0; i < args.length; ++i) {
                if (i == 0) {
                    nodeId1 = args[i];
                } else if (i == 1) {
                    cycTimeStr = args[i];
                }else if (i == 2) {
                    bizTimeParam = args[i];
                }
            }
            // Convert string to Long type node ID
            Long nodeId = Long.parseLong(nodeId1);
            // Output program usage instructions
            System.out.println("Usage: java -jar test-1.0-SNAPSHOT.jar nodeId cycTimeParam bizTimeParam");
            // Parse scheduled time and convert to timestamp
            SimpleDateFormat sdft = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            Calendar calendar = Calendar.getInstance();
            calendar.setTime(sdft.parse(cycTimeStr)); // Parse time string
            Long cycTime = calendar.getTimeInMillis(); // Get millisecond timestamp
            // Parse business date and convert to timestamp
            SimpleDateFormat sdfti = new SimpleDateFormat("yyyy-MM-dd");
            Calendar calendari = Calendar.getInstance();
            calendari.setTime(sdfti.parse(bizTimeParam));
            Long bizTime = calendari.getTimeInMillis();
            // Output debug information (timestamps)
            System.out.println("Scheduled timestamp: " + cycTime);
            System.out.println("Business date timestamp: " + bizTime);
            // Configure Alibaba Cloud service parameters
            String endpoint = "dataworks.cn-hangzhou.aliyuncs.com"; // Service endpoint
            String accessId = "xxx"; // Access key ID
            String accessKey = "xxx"; // Access key secret
            Long appId = Long.valueOf(xxx); // Application ID (needs to be replaced with actual value)
            // Create Alibaba Cloud client instance
            Client client = createClient20200518(accessId, accessKey, endpoint);
            // Execute trigger node operation
            RunTriggerNodeResponse response = runTriggerNode(client, nodeId, cycTime, bizTime, appId);
            // Output API response result (JSON format)
            System.out.println(com.aliyun.teautil.Common.toJSONString(com.aliyun.teautil.Common.toMap(response)));
        }
    }
    ```
    
    Replace the `endpoint`, `accessId`, and `accessKey` parameters in the above code with the actual values required for your business according to the following parameter descriptions.
    
    **Parameter**
    
    **Description**
    
    endpoint
    
    The service address of the workspace where the target HTTP trigger node is located. For more information, see [Alibaba Cloud API endpoints](https://api.aliyun.com/product/dataworks-public).
    
    accessId
    
    The `AccessKey ID` of the Alibaba Cloud account where the target HTTP trigger node is located.
    
    You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console), hover your mouse over the profile picture in the upper-right corner, go to **AccessKey**, and obtain the `AccessKey ID` and `AccessKey Secret` of the RAM user where the target HTTP trigger node is located.
    
    **Warning**
    
    The `AccessKey` of the Alibaba Cloud account has full permissions. If leaked, it poses serious security risks. We recommend that you use the AccessKey of a RAM user that has only the **Workspace Administrator** role for the target workspace.
    
    accessKey
    
    The `AccessKey Secret` of the Alibaba Cloud account where the target HTTP trigger node is located.
    
3.  Package the above code to generate a JAR package with the suffix `jar-with-dependencies.jar`.
    

### **Tenant A: Configure the Shell node**

You can follow these steps to configure a Shell node in the workspace of tenant A to trigger the HTTP trigger node in the workspace of tenant B.

1.  Create and upload the Jar resource.
    
    Create the JAR package you packaged in the [Local environment: Prepare sample code](#775e4e8620b2x) step as a MaxCompute resource. For more information, see [Create and use MaxCompute resources](/help/en/dataworks/user-guide/create-and-use-maxcompute-resources).
    
2.  Develop the trigger-side Shell node.
    
    [Create a general Shell node](/help/en/dataworks/user-guide/create-a-shell-node#title-uhm-eie-0q5) and [reference the MaxCompute resource](/help/en/dataworks/user-guide/create-and-use-maxcompute-resources#e9072fc06ewvc) in the Shell node. Complete the trigger code execution parameter information in the Shell node. The sample code is as follows:
    
    ```
    ##@resource_reference{"http_node_work.jar"}
     java -jar http_node_work.jar nodeId "cycleTime" "bizDate"
    ```
    
    **Parameter**
    
    **Description**
    
    http\_node\_work.jar
    
    The name of the resource you referenced.
    
    nodeId
    
    The HTTP trigger node Task ID recorded in tenant B[: Create an HTTP trigger node workflow](#5d2c175b2dwjc) step.
    
    cycleTime
    
    The **Scheduling Time** of the trigger node task recorded in tenant B[: Create an HTTP trigger node workflow](#5d2c175b2dwjc) step. The time format is `yyyy-MM-dd HH:mm:ss`.
    
    bizDate
    
    The **Data Timestamp** of the trigger node task recorded in tenant B[: Create an HTTP trigger node workflow](#5d2c175b2dwjc) step. The time format is `yyyy-MM-dd HH:mm:ss`.
    
3.  Configure the trigger-side Shell node.
    
    In the **Properties** on the right side of the Shell node editing page, find **Resource Group**, and set it to the serverless resource group bound to the workspace.
    

### **Run and view results**

Run the Shell node in tenant A to trigger the HTTP trigger node and its subsequent tasks in tenant B.

1.  Run the trigger-side Shell node.
    
    Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6034150671/p951834.png) icon in the toolbar at the top of the Shell node you configured in step Tenant A[: Configure Shell node](#19c270e87c0c0) to run the task.
    
2.  View the execution results.
    
    You need to go to tenant B and follow these steps to view the running results.
    
    1.  Go to the Operation Center page.
        
        Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the top navigation bar, select the desired region. In the left-side navigation pane, choose **Data Development and O&M** > **Operation Center**. On the page that appears, select the desired workspace from the drop-down list and click **Go to Operation Center**.
        
    2.  In the left navigation pane, click **Auto Triggered Node O&M** > **Auto Triggered Instances**.
        
    3.  Find the HTTP trigger node instance you want to trigger and check the running results.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6034150671/p952434.png)
