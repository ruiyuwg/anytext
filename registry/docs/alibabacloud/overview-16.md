PAI-Blade combines multiple optimization technologies to optimize trained models for optimal inference performance and provides a C++ SDK to deploy optimized models. This topic describes how Blade works and its workflow.

## Background information

PAI-Blade is a universal inference optimization tool that uses joint model system optimization to help models achieve optimal inference performance. Blade combines various optimization technologies, such as computational graph optimization, vendor optimization libraries (TensorRT and oneDNN), AI compilation optimization, Blade's manually optimized operator library, Blade mixed precision, and Blade Auto-Compression. Blade first analyzes a model and then applies some or all of these optimization technologies.

All optimization technologies in Blade are designed for general use and can be applied to different business scenarios. Blade also verifies the numerical accuracy of each optimization step. This ensures that the optimization does not unexpectedly affect the model's accuracy or metrics.

PAI introduced Blade as a new product to lower the entry barrier for model optimization, improve user experience, and increase production efficiency.

## How it works

Install Blade as a wheel package in your environment to avoid complex steps such as requesting resources or uploading models and data. Call Blade's Python APIs in your code to integrate model optimization into your workflow and verify the performance of the optimized model locally. This lets you easily try different optimization policies and explore more parameter combinations.

Blade also provides a C++ SDK for service deployment. The optimized model depends on the SDK at runtime, but you do not need to modify the model code. Simply link the Blade library files.

## Usage flow

Follow these steps to use Blade:

1.  [Install Blade](/help/en/pai/user-guide/install-blade#task-2043950).
    
2.  Optimize a model. For more information, see [Optimize a TensorFlow model](/help/en/pai/user-guide/optimize-a-tensorflow-model#task-2044087) and [Optimize a PyTorch model](/help/en/pai/user-guide/optimize-a-pytorch-model#task-2044236).
    
    To perform quantization optimization on the model, see [Quantization optimization](/help/en/pai/user-guide/quantization#task-2044577). To specify a mode for compilation optimization, see [AI compiler optimization](/help/en/pai/user-guide/use-aicompiler-to-optimize-models#concept-2044851).
    
3.  Interpret the optimization report. For more information, see [Optimization report](/help/en/pai/user-guide/optimization-report#concept-2044728).
    
4.  Deploy the model for inference. For more information, see [Use an SDK to deploy a TensorFlow model for inference](/help/en/pai/user-guide/use-an-sdk-to-deploy-a-tensorflow-model-for-inference#task-2044349), [Use an SDK to deploy a PyTorch model for inference](/help/en/pai/user-guide/ue-an-sdk-to-deploy-a-pytorch-model-for-inference#task-2044847), and [Use the Blade EAS Plugin to optimize and deploy models](/help/en/pai/user-guide/use-blade-plugin-to-optimize-and-deploy-models).
