Unlike a [scheduled workflow](/help/en/dataworks/user-guide/workflow), which runs on a predefined schedule (such as at 1:00 AM every day), a **triggered workflow** is an on-demand, event-driven data processing model. Its execution is triggered in real time by an external signal (such as a file upload, message arrival, API call, or manual click), providing high real-time performance and flexibility for data processing.

**Feature**

**Scheduled workflow**

**Triggered workflow**

**Trigger mechanism**

Fixed schedule (cron expression)

**External signal** (event, API, manual)

**Execution model**

Scheduled and predictable

**Reactive and on-demand**

**Use cases**

T+1 batch data warehousing, scheduled reports

Processing files upon arrival, integrating with business systems, manual data repair

**Key advantages**

Stability and periodic guarantee

**Real-time responsiveness and flexibility**

## Supported trigger methods

A triggered workflow supports the following three trigger methods. You can flexibly choose one based on your business scenario.

**Trigger method**

**Initiator**

**Core scenarios**

**Key points**

**Event Trigger**

**External event source** (such as OSS or Kafka)

**Event-driven ETL**: Process files as they arrive or trigger real-time computation based on messages.

You must first [create a trigger](/help/en/dataworks/user-guide/manage-triggers#59b07d4648nat) and associate it with the workflow. **Only takes effect in the production environment**.

**Manual Trigger**

**User** (developer or operator)

**Ad-hoc tasks**: One-time data processing or analysis.

You can run it manually in both the development environment and the production environment. Recommended as a replacement for manually triggered workflows.

**API Trigger**

**External system** (via OpenAPI)

**System integration**: Trigger data processing through a callback from a business system like a CRM or ERP.

Requires calling an OpenAPI with the necessary permissions.

## Quick start: Create a manually triggered workflow

This section guides you through creating and manually running a simple triggered workflow to demonstrate the process.

#### Step 1: Create a triggered workflow

1.  Go to the [Workspaces](https://dataworks.console.aliyun.com/workspace/list) page in the DataWorks console. In the top navigation bar, select a desired region. Find the desired workspace and choose **Shortcuts** > **Data Studio** in the **Actions** column.
    
2.  In the left navigation bar, click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2628787371/p852353.png), and then to the right of **Workspace Directories**, click **![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9003941571/p852270.png)** > **Create Workflow** to go to the **Create Workflow** page.
    
3.  In the dialog box that appears, on the **Create Workflow** page, set **Scheduling Type** to **Trigger-based Scheduling**. Enter the workflow **Name** and click **Confirm**.
    

#### Step 2: Orchestrate and develop nodes

1.  Click **\+ Add Node** in the toolbar to open the node list. Drag a **Shell** node from the node type list to the canvas and enter a name.
    
2.  Double-click the Shell node to open the code editor and enter the following code:
    
    ```
    bizdate=$1
    echo "Hello, Trigger Workflow! Current time is ${bizdate}"
    ```
    
3.  Click **Save** in the toolbar.
    

#### Step 3: Debug and run (development environment)

1.  Return to the workflow canvas and click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4828880771/p1046771.png) icon in the top toolbar.
    
2.  Enter the run value for the workflow (for example, if the current date is 20260310, the value for `bizdate` should be `20260309`).
    
3.  Shortly after, in the runtime log below, you can see the running status of the node and the output of the `echo` command.
    

#### Step 4: Deploy and Run (production environment)

1.  On the workflow canvas, click the **Publish** ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4828880771/p1046772.png) button and follow the prompts to publish it.
    
2.  After the workflow is deployed, go to **Operation Center** > **Manually Triggered Node O&M** > **Manually Triggered Node** > **Triggered Workflow**.
    
3.  Find your deployed workflow and click **Run** in the **Actions** column.
    
4.  In the window that appears, click **Run** again to trigger an instance of the workflow in the production environment. You can view the details of this run on the **manual instance** page.
    

You have now learned the basics of a triggered workflow. Next, this guide explores its more powerful event-triggering capabilities.

## Advanced use case: Event-triggered workflow

### Scenario 1: Process new OSS files

**Objective**: When a new CSV file is uploaded to a specified directory in Object Storage Service (OSS), automatically trigger a workflow that prints the path of that file.

#### Step 1: Create an OSS trigger

1.  Go to **Operation Center** > **Tenant Schedule Setting** > **Trigger Management**.
    
2.  Click **Create Trigger** and configure it as follows:
    
    **Note**
    
    For detailed parameter descriptions, see [OSS trigger](/help/en/dataworks/user-guide/manage-triggers#02c98c333er0w).
    
    -   **Trigger Name**: Enter a custom name, such as `oss_new_file_trigger`.
        
    -   **Workspace**: Select the target workspace where your workflow is located.
        
    -   **Trigger Type**: Select `**OSS**`.
        
    -   **Trigger Event**: Select `oss:ObjectCreated:PutObject` (or other upload events).
        
    -   **Bucket name**: Select your OSS bucket.
        
    -   **File Name**: Specify the file path and format to monitor. Wildcards are supported. For example, to monitor the `input/` directory for all `.csv` files, you can enter `input/*.csv`.
        
    -   **Configure Role**: For first-time use, perform **authorization** and select the generated role named `**DataWorks-EventBridge-OSS-MNS-Role-***************`.
        
        > `*****************` represents a randomly generated 13-digit ID number that is used to ensure uniqueness.
        
3.  Click **OK** to create the trigger.
    

#### Step 2: Create and associate the workflow

1.  Follow the steps in [Quick start: Create a manually triggered workflow](#925c99656dhe6) to create a **triggered workflow** named `process_oss_file_workflow`.
    
2.  In the right-side panel of the workflow canvas, select **Properties** > **Scheduling Policies**.
    
3.  From the **Trigger** dropdown list, select the `oss_new_file_trigger` that you just created.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9069933771/p1057213.png)
    

#### Step 3: Parse event parameters

1.  Click **\+ Add Node** in the toolbar to open the node list. Drag a **Shell** node from the node type list to the canvas and enter a name to create it.
    
2.  Double-click the node and write code to retrieve and print the file path from the trigger event.
    
    ```
    # When a trigger initiates a workflow, event information is passed through the built-in variable workflow.triggerMessage.
    # You can access the full path of the uploaded file using ${workflow.triggerMessage.data.oss.object.key}.
    
    echo "========= Start Processing OSS File ========="
    message="${workflow.triggerMessage}"
    echo "Raw Value: ${message}"
    
    # Extract the file name from the event message
    FILE_PATH="${workflow.triggerMessage.data.oss.object.key}"
    echo "A new file has arrived: ${FILE_PATH}"
    
    # Add your specific processing logic here
    
    echo "========= Finish Processing OSS File ========="
    ```
    
    **Note**
    
    ${workflow.triggerMessage}: Retrieves the complete event message body in JSON format. You can obtain the specific message format for OSS in [EventBridge](https://eventbridge.console.alibabacloud.com/overview) under **Event Buses** > `DATAWORKS_TRIGGER_FOR_BUCKET_<OSS_Bucket_Name>` **\>** **Event Tracking** > **Event Detail**.
    
    **Example OSS message format**
    
    ```
    {
        "datacontenttype": "application/json;charset=utf-8",
        "aliyunaccountid": "1***********9",
        "data": {
            "eventVersion": "1.0",
            "responseElements": {
                "requestId": "69B1***********C0A8"
            },
            "eventSource": "acs:oss",
            "eventTime": "2026-03-11T05:40:45.000Z",
            "requestParameters": {
                "sourceIPAddress": "***********"
            },
            "eventName": "ObjectCreated:PostObject",
            "userIdentity": {
                "principalId": "1***********9"
            },
            "region": "cn-hangzhou",
            "oss": {
                "bucket": {
                    "name": "******",
                    "arn": "acs:oss:cn-hangzhou:1***********9:******",
                    "virtualBucket": "",
                    "ownerIdentity": "1***********9"
                },
                "ossSchemaVersion": "1.0",
                "object": {
                    "size": 59537,
                    "objectMeta": {
                        "mimeType": "text/csv"
                    },
                    "deltaSize": 0,
                    "eTag": "63***********D32",
                    "key": "input/***********.csv"
                }
            }
        },
        "subject": "acs:oss:cn-hangzhou:1***********9:dwoss1024/input/******.csv",
        "aliyunoriginalaccountid": "1***********9",
        "source": "acs.oss",
        "type": "oss:ObjectCreated:PostObject",
        "aliyunpublishtime": "2026-03-11T05:40:45.682Z",
        "specversion": "1.0",
        "aliyuneventbusname": "DATAWORKS_TRIGGER_FOR_BUCKET_******",
        "id": "69B1***********0A8",
        "time": "2026-03-11T05:40:45.000Z",
        "aliyunregionid": "cn-hangzhou"
    }
    ```
    

#### Step 4: Debug and Deploy

1.  **Debug**:
    
    -   Return to the workflow canvas and click the **Run** ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4828880771/p1046771.png) button.
        
    -   In the **Trigger Message Body** input box, paste a sample OSS event in JSON format. You can copy a message format example from the trigger configuration page and modify the value of `key`. The following is a simple example.
        
        ```
        {
          "data": {
            "oss":{
              "object": {
                "key": "input/test_file_20260310.csv" 
              }
            } 
          }
        }
        ```
        
    -   Click **Run**, and check whether `input/test_file_20260310.csv` is successfully printed in the logs.
        
2.  **Deploy**: After successful debugging, click the **Deploy** button to deploy the workflow to the production environment. **Event triggering only takes effect in the production environment.**
    

#### Step 5: Verify in production

1.  By using the OSS console or a client, upload a CSV file to the bucket and path that you configured in the trigger (for example, the `input/` directory).
    
    **How do I ensure that event triggering is successful?**
    
    Go to `https://eventbridge.console.alibabacloud.com/<regionId>/event-bus/DATAWORKS_TRIGGER_FOR_BUCKET_<OssBucketName>/event-tracing` to view the list of recently triggered events. You can also click **Event Detail** to view the specific triggered message (**workflow.triggerMessage**).
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9069933771/p1058652.png)
    
2.  Go to DataWorks **Operation Center** > **Manually Triggered Node O&M** > **Manually Triggered Node** \> **Triggered Workflow**. The successfully deployed `process_oss_file_workflow` is displayed.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9069933771/p1057229.png)
    
3.  After a short wait, go to DataWorks **Operation Center** > **Manually Triggered Node O&M** > **Triggered Workflow Instance**. A new workflow instance is automatically triggered. Click to view its logs and confirm that the file path was processed correctly.
    

**Important**

**Best practice: Idempotency design**

OSS events may be delivered repeatedly due to factors such as network fluctuations. To avoid duplicate data processing, we recommend that you implement idempotency in your business logic. A common solution is to check a record table, such as a MaxCompute table, before you process a file. Use the file's `ETag` or unique path as an identifier. If the file has already been processed, skip it.

### Scenario 2: Process Kafka messages

**Objective**: Monitor a Kafka topic for user behavior logs. When a new message arrives, trigger a workflow to parse it and execute different logic based on its content.

#### Step 1: Create a Kafka trigger

1.  Go to **Operation Center** > **Tenant Schedule Setting** > **Trigger Management** and click **Create Trigger**.
    
2.  Configure the following parameters:
    
    -   **Trigger Name**: `kafka_user_action_trigger`.
        
    -   **Trigger Type**: Select **ApsaraMQ for Kafka**.
        
    -   **Kafka Instance** and **Topic**: Select the instance and topic you want to monitor.
        
    -   **ConsumerGroupId**: We recommend that you select **Quick Create** to have the system automatically generate a consumer group ID and avoid conflicts with other applications.
        
    -   **Key** (Optional): You can specify a message key. Only messages with an exact key match will trigger the workflow.
        
3.  Click **OK**.
    

#### Step 2: Create and associate the workflow

1.  Follow the steps in [Quick start: Create a manually triggered workflow](#925c99656dhe6) to create a new **triggered workflow** named `handle_user_action_workflow`.
    
2.  In the right-side panel of the workflow canvas, select **Properties** > **Scheduling Policies**.
    
3.  In the **Trigger** drop-down list, select the newly created `kafka_user_action_trigger`.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9069933771/p1057588.png)
    
4.  **Important:** Because messages can arrive at a high frequency, we recommend that you set **Maximum Parallel Instances for Internal Tasks** to a value such as `100` to prevent a sudden influx of messages from overwhelming the scheduling resources.
    

#### Step 3: Parse nested JSON

Assume that the `value` field of a Kafka message is a JSON string in the following format: `{"user_id": "1001", "action_type": "login", "timestamp": 1688888888}`.

1.  Click **\+ Add Node** in the toolbar to open the node list. From the left-side node type list, drag a **Python** node to the canvas.
    
2.  Write code to parse the message. Because the `value` itself is a string, you need to perform a second JSON parsing in your code.
    
    ```
    import json
    
    # 1. Use the built-in variable to get the 'value' field from the Kafka message, which is a JSON string.
    message_value_str = '${workflow.triggerMessage.value}'
    
    print(f'Received raw message value string: ${message_value_str}')
    
    try:
        # 2. In the Python code, parse this string into a JSON object (dictionary).
        message_data = json.loads(message_value_str)
        
        user_id = message_data.get("user_id")
        action_type = message_data.get("action_type")
        print(f"Successfully parsed message. User ID: ${user_id}, Action: ${action_type}")
        
        # 3. You can then execute different business logic based on the action_type.
        if action_type == 'login':
            # o.run_sql(f"INSERT OVERWRITE TABLE user_login_record PARTITION(ds='{bizdate}') VALUES ('{user_id}');")
            print("Processing login action...")
        elif action_type == 'purchase':
            print("Processing purchase action...")
        else:
            print("Unknown action type.")
            
    except json.JSONDecodeError as e:
        print(f"Error decoding JSON: {e}")
        # Add exception handling logic, such as writing the error message to a dedicated log table.
        raise e # Re-raise the exception to mark the node as failed for easier troubleshooting.
    ```
    

#### Step 4: Debug and Deploy

1.  **Debug**:
    
    -   Return to the workflow canvas and click the **Run** ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4828880771/p1046771.png) button.
        
    -   In the **Trigger Message Body**, paste the simulated Kafka event. Note that the `value` field is an escaped JSON string.
        
        ```
        {
          "topic": "user-behavior-topic",
          "key": "some-key",
          "value": "{\"user_id\": \"1001\", \"action_type\": \"login\", \"timestamp\": 1688888888}"
        }
        ```
        
    -   Run and check the logs to confirm that the **Python** node correctly parses `user_id` and `action_type`.
        
2.  **Deploy**: After successful debugging, deploy the workflow to the production environment.
    

#### Step 5: Verify in production

1.  Send a message with the correct format to your configured Kafka topic.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9069933771/p1058709.png)
    
2.  Go to **Operation Center** > **Manually Triggered Node O&M** > **Manually Triggered Node** \> **Triggered Workflow** in DataWorks. The successfully deployed `handle_user_action_workflow` is displayed.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9069933771/p1057589.png)
    
3.  In **Operation Center** > **Manually Triggered Node O&M** > **Manually Triggered Node Instance** > **Triggered Workflow Instance**, verify that a new workflow instance was triggered and check its runtime log.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9069933771/p1058713.png)
    

**Important**

**Best practice: Concurrency and ordering**

-   **Concurrency control**: Always set a reasonable maximum number of parallel instances to handle message spikes.
    
-   **Order guarantee**: DataWorks scheduling does not guarantee strict message processing order. If you need to ensure that messages for the same user (or partition) are processed in order, you must implement a distributed lock (for example, using Redis or MaxCompute) in your business code. Alternatively, you can delegate the processing logic to a computing engine that guarantees ordered consumption per partition, such as Flink.
    

## Core design and configuration

### Workflow orchestration

The core process for orchestrating a triggered workflow is similar to that of a periodic workflow. For more information, see [Orchestrate nodes and workflows](/help/en/dataworks/user-guide/workflow#29ddca2ede4hl).

### Scheduling parameters

In the **Properties** panel on the right side of the workflow canvas, you can set global parameters for the **workflow**. All nodes within it can reference these parameters.

-   **Reference syntax**: In the node code, reference a workflow parameter in the `${workflow.parameter_name}` format.
    
-   **Parameter priority**: Parameters in DataWorks have a hierarchical override relationship. The order of precedence is: **Node parameters > Workflow parameters**.
    
    > For more information about parameters, see [Parameter design and flow](/help/en/dataworks/user-guide/workflow#ac5612d83b2kc).
    

### Scheduling policy

When multiple workflows or tasks are triggered simultaneously, causing a system resource bottleneck, you can use priority and a priority weighting policy to implement intelligent resource scheduling. This ensures that the most important tasks are executed first.

-   **Ensure core business continuity**: Set a higher priority for core business workflows so they always run before other non-core workflows.
    
-   **Reduce critical path duration**: Within a single workflow instance, you can use a priority weighting policy to influence the execution order of nodes. For example, using the **downward weighting** policy, nodes on the critical path with more upstream dependencies are assigned a higher dynamic weight. This prioritizes their execution, effectively shortening the overall workflow duration.
    
    **Configuration item**
    
    **Description**
    
    **Priority**
    
    Defines the absolute priority level of a workflow instance in the scheduling queue. Available levels are 1, 3, 5, 7, and 8, where a higher number indicates a higher priority. High-priority tasks or workflows always receive scheduling resources before low-priority ones.
    
    **Priority Weighting Policy**
    
    Defines how the weights of internal nodes (tasks) are dynamically calculated within the same priority level. Nodes with higher weights are prioritized for execution.
    
    -   No weighting: All nodes have a fixed baseline weight.
        
    -   Downward Weighting: The weight of a node is dynamically adjusted. The more upstream dependencies a node has, the higher its weight. This strategy helps prioritize the execution of nodes on the critical path in a DAG (Directed Acyclic Graph). The weight is calculated as follows: `Initial weight + Sum of the priorities of all its upstream nodes`.
        
    
    **Maximum Parallel Instances**
    
    Controls the maximum number of instances of this workflow that can run concurrently. This is used for concurrency control and resource protection. When the number of running instances reaches the limit, new triggered instances will enter a waiting state. You can set this to **Unlimited** or specify a custom maximum value up to 100,000.
    
    **Note**
    
    If the specified limit exceeds the maximum capacity of the resource group, the physical limit of the resource group becomes the actual concurrency bottleneck.
    

The DataWorks priority system follows a hierarchical override rule: **Runtime specification** > **Node-level configuration** > **Workflow-level configuration**.

1.  Workflow-level configuration (baseline): Set in the workflow's **Scheduling Policies**, this serves as the default setting for all nodes.
    
2.  Node-level configuration (local): In the **Properties** > **Scheduling Policies** of an individual node within a workflow, you can set a higher **Priority** for that specific node, which overrides the workflow-level setting.
    
3.  Runtime specification (temporary): When manually triggering a run in the **Operation Center**, you can specify a configuration using the **Runtime Priority Reset** switch. This configuration has the highest precedence, applies only to the current run, and does not modify any permanent settings.
    

## O&M and Management

-   **Instance monitoring**: You can view, rerun, terminate, and view, rerun, terminate, and check logs of all triggered or manually run instances on the **Operation Center** > **Manually Triggered Node O&M** > **Manually Triggered Node Instance** page.
    
-   **Clone a workflow**: In the **Workspace Directories**, right-click a workflow and select **Clone** to quickly copy it into a new workflow, including all its nodes and dependencies. For more information, see [Clone a workflow](/help/en/dataworks/user-guide/workflow#8bd900d5ad043) for recurring workflows.
    
-   **Version management**: In the **version** panel on the right side of the workflow canvas, you can view, compare, and revert to historical versions of the workflow. For more information, see [Version Management](/help/en/dataworks/user-guide/workflow#6073bb595col8) for recurring workflows.
    

## Limitations and notes

-   **Effective environment**: The **event trigger** mechanism takes effect only after the workflow is deployed to the **production environment** (Operation Center).
    
-   **Node count**: A single workflow supports a maximum of 400 nodes. We recommend keeping the number under 100 to simplify maintenance.
    
-   **Concurrency Limit**: The maximum number of parallel instances is 100,000, but the actual concurrent capacity is limited by the specifications of the purchased resource group for scheduling.
    
-   **Node-level scheduling**: When configuring scheduling at the node level, you can only set the **priority**, not the p**riority weighting policy**.
    

## **References**

-   [CreateWorkflowInstances - Create workflow instances](/help/en/dataworks/developer-reference/api-dataworks-public-2024-05-18-createworkflowinstances)
    
-   [StartWorkflowInstances - Start workflow instances](/help/en/dataworks/developer-reference/api-dataworks-public-2024-05-18-startworkflowinstances)
