Learn common development workflows for cloud-native AI and AI-integrated big data scenarios using PAI modules.

## Common workflows

Access PAI modules from the workspace details page. The following workflows show how to use these modules for common scenarios.

-   Cloud-native development![云原生开发流程](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5236822961/p342254.png)
    
    **Section**
    
    **Description**
    
    **Reference**
    
    ①
    
    High-quality datasets are essential for accurate models. Use dataset management to register public datasets, upload files from local machines or Alibaba Cloud storage, or create index datasets by scanning OSS folders. Dataset management enables centralized data organization and prepares data for labeling and training.
    
    [Create and manage datasets](/help/en/pai/user-guide/create-and-manage-datasets#task-2109980)
    
    ②
    
    Data Science Workshop (DSW) is an interactive machine learning IDE for cloud-based development. Use Notebooks to access data, develop algorithms, and train and deploy models from anywhere.
    
    [DSW Overview](/help/en/pai/user-guide/dsw-overview#concept-2008400)
    
    ③
    
    Image management provides PAI public images and supports custom images for centralized application image management.
    
    [Custom images](/help/en/pai/user-guide/view-and-add-images#task-2074428)
    
    ④
    
    Deep Learning Containers (DLC) provides a flexible, stable, and high-performance training environment. DLC supports multiple algorithm frameworks, enables large-scale distributed deep learning, and supports custom frameworks.
    
    [DLC Overview](/help/en/pai/user-guide/before-you-begin)
    
    ⑤
    
    PAI supports datasets from NAS, OSS, and Git repositories. Specify datasets and code repositories when submitting training jobs.
    
    [Prerequisites for DLC](/help/en/pai/user-guide/before-you-begin)
    
    ⑥
    
    Model management enables centralized management of trained models and integrates with EAS for model deployment.
    
    [Register and manage models](/help/en/pai/user-guide/register-and-manage-models#task-2238482)
    
    ⑦
    
    EAS deploys models as online services using CPU or GPU resources. It features high throughput, low latency, one-click deployment for complex models, and real-time auto scaling.
    
    **Note**
    
    EAS does not support DSW images or CPFS datasets.
    
    [EAS Overview](/help/en/pai/user-guide/overview-2#concept-1895809)
    
-   AI with big data![AI+大数据最佳实践](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5236822961/p342301.png)
    
    **Section**
    
    **Description**
    
    **Reference**
    
    ①
    
    Store source data in MaxCompute tables, preprocess in DataWorks, and reference in PAI for model training.
    
    -   [Create Table](/help/en/maxcompute/getting-started/create-tables-1#concept-rkk-kcy-5db)
        
    -   [Import data](/help/en/maxcompute/getting-started/import-data-to-tables#concept-amj-mjy-5db)
        
    -   [Data development process](/help/en/dataworks/product-overview/data-development-process#concept-kz4-1jp-r2b)
        
    
    ②
    
    Machine Learning Designer supports large-scale distributed training for traditional machine learning, deep learning, reinforcement learning, and stream/batch processing. It provides hundreds of algorithms, automatic parameter tuning, and drag-and-drop component assembly with minimal code.
    
    [What is Designer?](/help/en/pai/user-guide/machine-learning-designer-overview#concept-2325885)
    
    ③
    
    DataWorks schedules tasks based on time properties and scheduling parameters.
    
    -   [Supported formats for scheduling parameters](/help/en/dataworks/user-guide/supported-formats-of-scheduling-parameters#task-2117642)
        
    -   [Configure the parameters in the Schedule section.](/help/en/dataworks/user-guide/configure-time-properties-1#task-2119752)
        
    
    ④
    
    Task management stores experiment data from Machine Learning Designer and custom task records, enabling experiment comparison across tasks.
    
    [Job Management](/help/en/pai/user-guide/create-and-manage-container-training-jobs)
    
    ⑤
    
    Model management enables centralized management of trained models and integrates with EAS for model deployment.
    
    [Register and manage models](/help/en/pai/user-guide/register-and-manage-models#task-2238482)
    
    ⑥
    
    EAS deploys models as online services using CPU or GPU resources. It features high throughput, low latency, one-click deployment for complex models, and real-time auto scaling.
    
    **Note**
    
    EAS does not support DSW images or CPFS datasets.
    
    [EAS Overview](/help/en/pai/user-guide/overview-2#concept-1895809)
