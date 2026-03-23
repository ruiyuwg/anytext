Build custom pipelines in Designer to create, train, and deploy machine learning models. This guide walks through a heart disease classification example.

## Prerequisites

-   Activate PAI and create a workspace. See [Activate and Create a Default Workspace](/help/en/pai/user-guide/activate-pai-and-create-the-default-workspace#task-2121596).
    
-   Associate the workspace with MaxCompute resources. See [Quick Start - Preparations](/help/en/pai/user-guide/overview-14/#c085e6eb13nxg).
    

## Step 1: Create a pipeline

Navigate to [Machine Learning Designer](https://pai.console.alibabacloud.com/#/designer), select a workspace, and open Designer. Create and open a new pipeline.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5685283371/p862769.png)

**Parameter**

**Description**

Workflow name

Custom workflow name.

Workflow data storage

OSS Bucket storage path for temporary data and models generated during runtime. If not configured, uses default workspace storage.

For each run, Designer automatically creates a temporary folder at `workflow_storage_path/task_ID/node_ID`, simplifying OSS storage path configuration for each component and enabling easier data management.

Visibility

-   **Visible to Me**: Creates workflow in the **My Pipelines** folder, visible only to you and workspace administrators.
    
-   **Visible to Current Workspace**: Creates workflow in the **Pipelines Visible to Workspaces** folder, visible to everyone in the workspace.
    

## Step 2: Prepare and preprocess data

Prepare a data source and preprocess it to meet model input requirements.

### Prepare data

Add **Source/Target** components to read data from sources such as MaxCompute and OSS. See [Component Reference: Source/Target](/help/en/pai/user-guide/data-source-or-destination/). This example uses the **Read Data Table** component to read public heart disease sample data. For dataset details, see [Heart Disease Data Set](https://archive.ics.uci.edu/ml/datasets/Heart+Disease).

![designer快速入门2](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5685283371/p876474.png)

1.  Select a **Data Source/Target** component to read data.
    
    In the component list, click **Data Source/Target**. Drag **Read Table** onto the canvas to read MaxCompute table data. A pipeline node named **Read Table-1** appears.
    
2.  Configure the source table name.
    
    Select **Read Table-1** on the canvas. In **Table Name** on the right, enter the MaxCompute table name. Enter `pai_online_project.heart_disease_prediction` to read the public heart disease data.
    
3.  Switch to the **Fields Information** tab to view field details.
    

### Preprocess data

Heart disease prediction is a binary classification problem. The logistic regression component requires DOUBLE or BIGINT input. Convert and preprocess the data for model training.

1.  Preprocess data: Convert non-numeric fields to numeric types.
    
    ![designer快速入门1](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5685283371/p876248.png)
    
    1.  Search for **SQL Script** and drag it onto the canvas. A pipeline node named **SQL Script-1** appears.
        
    2.  Connect **Read Table-1** as the **t1** input source for **SQL Script-1**.
        
    3.  Configure the node.
        
        Click **SQL Script-1**. On the right, enter the following code. **Input Source** in **Parameters Setting** is \`t1\`.
        
        ```
        select age,
        (case sex when 'male' then 1 else 0 end) as sex,
        (case cp when 'angina' then 0  when 'notang' then 1 else 2 end) as cp,
        trestbps,
        chol,
        (case fbs when 'true' then 1 else 0 end) as fbs,
        (case restecg when 'norm' then 0  when 'abn' then 1 else 2 end) as restecg,
        thalach,
        (case exang when 'true' then 1 else 0 end) as exang,
        oldpeak,
        (case slop when 'up' then 0  when 'flat' then 1 else 2 end) as slop,
        ca,
        (case thal when 'norm' then 0  when 'fix' then 1 else 2 end) as thal,
        (case status  when 'sick' then 1 else 0 end) as ifHealth
        from  ${t1};
        ```
        
    4.  Click **Save** in the upper-left to save the pipeline configuration.
        
    5.  Right-click **SQL Script-1**. Click **Run from Root Node To Here** to debug and run this pipeline.
        
        The pipeline runs each node in order. When a node succeeds, a checkmark icon (![运行成功](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5685283371/p876351.png)) appears in its upper-right corner.
        
        **Note**
        
        Alternatively, click the ![运行](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5685283371/p876349.png) (Run) icon in the upper-left to run the entire pipeline. For complex pipelines, run specific nodes to simplify debugging. If a run fails, right-click the node and select **View Log** to troubleshoot.
        
    6.  After successful execution, right-click the target node (for example, **SQL Script-1**) and select to verify the output.
        
2.  Convert fields to DOUBLE type to meet input requirements for logistic regression.
    
    ![b4e7bb3e15838f4bfd46dcdec8eb60d6.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8625365961/p713005.png)
    
    Drag **Data Type Conversion** and connect it as a descendant of **SQL Script-1**. Click the node. On **Fields Setting**, click **Select Fields** under **Columns to convert to double type**. Select all fields.
    
3.  Normalize the data to convert each feature to 0–1 range, removing scale impact.
    
    Drag **Normalization** and connect it as a descendant of **Data Type Conversion-1**. Click the node. On **Fields Setting**, select all fields.
    
4.  Split data into training and prediction sets.
    
    Drag **Split** and connect it as a descendant of **Normalization-1**. The split outputs two data tables.
    
    **Split** divides data at a 4:1 ratio by default. Click **Split** and configure **Split Ratio** on **Parameter Settings**. For other parameters, see [Split](/help/en/pai/user-guide/split).
    
5.  Right-click **Data Type Conversion-1**. Click **Run from Here** to run the remaining nodes.
    

## Step 3: Train the model

Each sample is either sick or healthy, making this a binary classification problem. Use logistic regression to build the prediction model.

![designer快速入门3](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5685283371/p876561.png)

1.  Drag **Binary Logistic Regression** and connect it as a descendant of **Output Table 1** from **Split-1**.
    
2.  Configure the node.
    
    Click **Binary Logistic Regression-1**. On **Fields Setting**, set **Target Column** to **ifhealth** and **Training Feature Columns** to all other columns. See [Binary Logistic Regression](/help/en/pai/user-guide/logistic-regression-for-binary-classification).
    
    **Note**
    
    To complete [Step 6: Deploy the model (optional)](#bd80915a3eb2c), select **Logistic Regression Binary Classification** and check **Generate PMML** on the **Fields setting** tab.
    
3.  Run the node.
    

## Step 4: Run model prediction

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5685283371/p876563.png)

1.  Drag **Prediction** and connect it as a descendant of **Output Table 2** from **Split-1** and **Logistic Regression for Binary Classification-1**.
    
2.  Click **Prediction-1**. On **Fields Setting**, set **Reserved Columns** to **ifhealth** and **Feature Columns** to all other fields.
    
3.  Run the prediction node and view results.
    
    After a successful run, right-click the prediction node. Select **View Data** > **Prediction Result Output Port**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5685283371/p876564.png)
    

## Step 5: Evaluate the model

1.  Drag **Binary Classification Evaluation** and connect it as a descendant of **Prediction-1**.
    
2.  Click **Binary Classification Evaluation-1**. On **Fields Setting**, set **Original Label Column** to **ifhealth**.
    
3.  Run the evaluation node and view results.
    
    After the run finishes, right-click **Binary Classification Evaluation**. Select **Visual Analysis** to view evaluation metrics.
    
    ![模型评估](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5582937951/p116497.png)
    

## Step 6: Deploy the model (optional)

Designer and EAS integrate seamlessly. After offline training, prediction, and evaluation, deploy a single model to EAS to create an online service.

1.  After the pipeline runs successfully, click **Model List**. Select the model to deploy and click **Deploy to EAS**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3369455371/p863357.png)
    
2.  Confirm configuration parameters. See [deploy a model as an online service](/help/en/pai/user-guide/deploy-a-model-as-an-online-service).
    
    On the EAS deployment page, **Model File** and **Processor Type** are configured by default. Configure other parameters as needed.
    
3.  Click **Deploy**.
    
    When **Service Status** changes from **Creating** to **Running**, deployment is complete.
    
    **Important**
    
    If no longer using the deployed model, click **Stop** in **Operation** to avoid unnecessary costs.
    

## References

-   Designer provides rich pipeline templates to quickly build models. See [Template Workflows](/help/en/pai/user-guide/creating-a-pipeline-by-using-a-template).
    
-   Use DataWorks to perform offline scheduling for offline pipelines and periodically update models. See [Using DataWorks to perform offline scheduling for Designer workflows](/help/en/pai/user-guide/use-dataworks-tasks-to-schedule-pipelines-in-machine-learning-designer).
    
-   Configure global variables in pipelines for both online pipelines and DataWorks offline scheduling to improve flexibility. See [Global variables](/help/en/pai/user-guide/global-variable).
    
-   [Billing for Machine Learning Designer](/help/en/pai/billing-of-machine-learning-designer-2).
    
-   [Designer Component Overview](/help/en/pai/user-guide/overview-of-all-components).
