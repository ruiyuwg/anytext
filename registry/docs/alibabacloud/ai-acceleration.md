PAI provides AI accelerators for training and inference acceleration using dataset optimization and computing acceleration methods to improve speed and stability.

## Features

AI accelerators support the following technical methods and features:

**Technical method**

**Feature**

EPL (distributed training framework)

-   Supports data parallelism, operator splitting, and pipeline parallelism.
    
-   Supports automatic parallelism for optimal distributed training performance.
    

Rapidformer (Transformer training acceleration)

-   Optimizes PyTorch Transformer model training and incorporates multiple optimization technologies for seamless integration with Transformer model libraries.
    

PAI-Blade (inference optimization)

-   Supports TensorFlow, PyTorch, and mainstream acceleration devices such as GPU, CPU, and end devices.
    
-   Supports graph optimization, vendor-optimized libraries, AI compiler optimization, high-performance operator libraries, mixed precision, and automatic compression.
    
-   Provides standard Python SDK for easy optimization implementation.
    

## **Use AI accelerators**

Refer to the following documents to get started with AI accelerators:

-   EPL (distributed training framework)
    
    EPL is an efficient framework for distributed model training that enables high-performance training at low cost. For more information, see [Use EPL to accelerate AI model training](/help/en/pai/user-guide/use-epl-to-improve-the-efficiency-of-tensorflow-distributed-model-training).
    
-   Rapidformer (Transformer training acceleration)
    
    Rapidformer is a training optimization tool for PyTorch Transformer models that combines optimization technologies to improve training speed and efficiency. For more information, see [Rapidformer overview](/help/en/pai/overview-8).
    
-   PAI-Blade (inference optimization)
    
    PAI-Blade is an inference optimization tool that integrates various optimization technologies to optimize trained model inference performance for optimal results. For more information, see [Blade overview](/help/en/pai/user-guide/overview-16).
