PAI-TensorFlow is a service-oriented product provided by Platform for AI (PAI) to help you improve the efficiency of deep learning, optimize the kernel of native TensorFlow, and develop common tools. PAI-TensorFlow features distributed scheduling, global computing scheduling, online model predication, and GPU mapping.

**Important**

GPU-accelerated servers will be phased out. You can submit TensorFlow tasks that run on CPU servers. If you want to use GPU-accelerated instances for model training, go to Deep Learning Containers (DLC) to submit jobs. For more information, see [Submit training jobs](/help/en/pai/user-guide/create-a-training-task/).

## Background information

TensorFlow is an open source deep learning computing framework developed by Google. It supports multiple neural network models such as convolutional neural network (CNN), recurrent neural network (RNN), and long short-term memory (LSTM). You can use TensorFlow to train models of various aspects, such as video, image, and text, in an efficient manner. TensorFlow gains wide attention from the industry due to its various features and highly flexible APIs.

PAI-TensorFlow is fully compatible with code of native TensorFlow and achieves high performance in industrial production scenarios. PAI-TensorFlow is available for use and deployed in Alibaba Cloud services, such as PAI and E-MapReduce (EMR).

## Features

PAI-TensorFlow has the following features:

-   Service orientation
    
    Based on the Apsara system, Alibaba Cloud develops MaxCompute, which is a big data computing service used by numerous enterprises and individual developers. PAI-TensorFlow helps you use the computing frameworks of TensorFlow in MaxCompute. The API version of PAI-TensorFlow is the same as the API version of TensorFlow. You can use the TensorFlow Training Script API to submit a task to the MaxCompute computing cluster.
    
-   Distributed scheduling
    
    PAI provides large amounts of computing resources. You can use GPU Quota to manage the resources. Based on the underlying distributed scheduling system, PAI-TensorFlow dynamically schedules tasks to different machines. When you submit a PAI-TensorFlow task, you do not need to request GPU hosts in advance. The required GPU resources are dynamically allocated and released.
    
-   Global computing scheduling
    
    When you use MaxCompute, you can submit SQL tasks and PAI-TensorFlow tasks in a project at the same time. The global computing scheduling service of MaxCompute automatically schedules PAI-TensorFlow tasks to related GPU clusters. It also combines data preprocessing tasks based on CPU clusters with model training tasks based on GPU clusters.
    
-   Mapped GPUs
    
    PAI-TensorFlow assigns different operators to specified CPUs or GPUs. You do not need to understand the GPU structure of the host because the system maps GPUs. PAI-TensorFlow automatically maps GPUs that the task requests to the workspace. In this case, GPUs are displayed in the GPU:number format, such as GPU:0 and GPU:1.
    
-   Online model prediction
    
    PAI provides Elastic Algorithm Service (EAS) for online prediction. You can quickly deploy models generated during PAI-TensorFlow training in EAS. EAS provides a wide range of features, including dynamic scaling of models, rollover, A/B testing, high throughput, and low latency.
    

## Supported Python libraries

PAI-TensorFlow is preinstalled with the common Python libraries, such as NumPy and Six. You can import a library to a TensorFlow task.
