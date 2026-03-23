Designer is a visual modeling tool in PAI. Build workflows by dragging and dropping algorithm components for low-code model development, with support for online deployment and offline scheduling.

## Service architecture

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0760123771/CAEQTxiBgIDZ7p2P2BkiIDYxNzRjMTI3YWMyMDRhZmNiMDI1ZWZhYWJiOTYyYmJk3963382_20230830144006.372.svg)

## Features

-   **Create and manage workflows**: Create workflows from templates or build from scratch. After running, deploy the model. For more information, see [Create a workflow](/help/en/pai/user-guide/create-and-manage-pipelines).
    
-   **Rich library of components and data sources**: Designer provides hundreds of [AI development components](/help/en/pai/user-guide/overview-of-all-components) and supports data sources, such as [MaxCompute](/help/en/maxcompute/product-overview/what-is-maxcompute) and [Object Storage Service (OSS)](/help/en/oss/user-guide/what-is-oss), letting you build models with algorithms that incorporate Alibaba's best practices.
    
-   **Visualize and analyze the training process**: During training, use the [visualization dashboard](/help/en/pai/user-guide/aggregate-function-tab) to analyze data, models, and evaluation metrics to find the optimal model.
    
-   **Deploy and manage models**: Register models from Designer workflows to model management, then deploy as online services or package as composite models. For more information, see [Online prediction](/help/en/pai/user-guide/model-prediction-1/).
    
-   **Collaborate and share**: Designer supports workflow collaboration and sharing within a workspace. [Deploy successful workflows to DataWorks for periodic scheduling](/help/en/pai/user-guide/use-dataworks-tasks-to-schedule-pipelines-in-machine-learning-designer) or publish as [custom templates](/help/en/pai/user-guide/create-a-pipeline-from-a-custom-template).
    
-   **Accounts and permissions**: Log in to Designer with an Alibaba Cloud account or RAM user. RAM users require necessary permissions from their parent Alibaba Cloud account. For more information, see [Cloud product dependencies and permissions: Designer](/help/en/pai/user-guide/grant-the-permissions-that-are-required-to-use-machine-learning-designer#task799).
    

## Workflow components

Designer provides hundreds of components for various use cases. For more information about the components, see [Designer component reference](/help/en/pai/user-guide/overview-of-all-components).

Components are categorized into three types by use case:

-   **Traditional machine learning components**: Algorithm Components for [data pre-processing](/help/en/pai/user-guide/data-preprocessing/), [feature engineering](/help/en/pai/user-guide/feature-engineering-1/), [statistical analysis](/help/en/pai/user-guide/statistical-analysis/), [anomaly detection](/help/en/pai/user-guide/anomaly-detection-1/), [recommendation algorithms](/help/en/pai/user-guide/recommendation/), [time series](/help/en/pai/user-guide/time-series/), and [network analysis](/help/en/pai/user-guide/network-analysis/).
    
-   **Deep learning framework components**: [Vision algorithms](/help/en/pai/user-guide/video-algorithms/) and [Natural Language Processing algorithms](/help/en/pai/user-guide/natural-language-process/) based on the PAI-Easy series, as well as [Deep Learning](/help/en/pai/user-guide/deep-learning-frameworks/) frameworks like TensorFlow and PyTorch.
    
-   **Custom algorithm components**: Custom Algorithm Components such as [SQL script](/help/en/pai/user-guide/sql-script), [Python script](/help/en/pai/user-guide/python-script-v2), [Notebook Script](/help/en/pai/user-guide/notebook), and [PyAlink script](/help/en/pai/user-guide/pyalink-script) for your custom requirements.
    

## Usage flow

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0760123771/CAEQTxiBgIDc_6GP2BkiIDRhZmViNGQxMGZhMzRmNmU5YjRkNzQ5ZjI3MzBlODUw3963382_20230830144006.372.svg)

1.  [Create a workflow](/help/en/pai/user-guide/create-and-manage-pipelines)
    
    A workflow is a visual canvas containing all component nodes and data flows. It is the starting point for model development.
    
2.  [Build and debug a model](/help/en/pai/user-guide/build-and-debug-models)
    
    Use pre-built algorithm components to build a model in a drag-and-drop interface. Select computing resources, such as [MaxCompute](/help/en/maxcompute/product-overview/what-is-maxcompute), [PAI-DLC](/help/en/pai/user-guide/what-is-dlc), or [Flink](/help/en/flink/realtime-flink/product-overview/what-is-alibaba-cloud-realtime-compute-for-apache-flink), to run the Workflow and complete model debugging and training.
    
3.  [Visualize and analyze](/help/en/pai/user-guide/aggregate-function-tab)
    
    After training, use the visualization dashboard to view analysis reports and evaluate if the model meets expectations.
    
4.  Deploy and predict models
    
    -   [Online prediction](/help/en/pai/user-guide/model-prediction-1/): After training, deploy models as online services with [PAI-EAS](/help/en/pai/user-guide/overview-2) to make predictions on new data.
        
    -   [Offline batch prediction](/help/en/pai/user-guide/implement-batch-prediction): For scheduled, offline batch predictions, submit Designer workflows to [DataWorks](/help/en/dataworks/user-guide/what-is-dataworks) for periodic scheduling.
        

## Billing

Designer billing is based on resources components consume at runtime. Details are as follows:

Billable item

Billing entity

Billing method

Stop billing

Billing rules

Compute Unit-hour (CU-hour) usage

Component runtime

Pay-as-you-go

Stop the component

Resources consumed by a component are converted into Compute Unit (CU) hours.

Billing formula: `Billable amount = Number of CU-hours × Unit price`

Where, `Number of CU-hours = max(Number of CPU cores × Duration (h), Memory (GB) × Duration (h) / 4)`

For unit prices of different components and more billing details, see [Billing for Designer](/help/en/pai/billing-of-machine-learning-designer-2).

## Quick start

To get started, see the [Quick start for Designer](/help/en/pai/user-guide/overview-14/).

## Scenarios

-   **Artificial Intelligence Recommendation**: [Implement recommendation recall with FM-Embedding](/help/en/pai/use-cases/use-fm-embedding-for-matching-recall) | [FM recommendation based on the Alink framework](/help/en/pai/use-cases/create-an-fm-recommendation-model-based-on-the-alink-framework).
    
-   **Intelligent risk control**: [Financial risk control using graph algorithms](/help/en/pai/use-cases/use-graph-algorithms-to-manage-financial-risks) | [User churn risk warning](/help/en/pai/use-cases/monitor-user-churn).
    
-   **General use cases**: [News Classification with Text Analysis](/help/en/pai/use-cases/classify-news-based-on-text-analysis) | [Smog Prediction](/help/en/pai/use-cases/build-models-to-predict-the-hazy-weather) | [Power Plant Output Prediction](/help/en/pai/use-cases/build-a-model-to-predict-the-output-power-of-a-power-plant).
    

## Get help

If you encounter issues, such as workflow errors, problems with algorithm components, or data read failures, see the [Designer FAQ](/help/en/pai/faq-about-algorithm-components).

## Appendix: PAIFlow

-   PAIFlow is the workflow scheduling engine for Designer. Submit workflow tasks from Designer to PAIFlow for execution.
    
-   The PAIFlow task management page contains all Pipeline tasks submitted through manual execution via Designer and periodic scheduling of Designer workflows in DataWorks. For more information, see [Manage workflow tasks](/help/en/pai/user-guide/manage-pipeline-tasks).
