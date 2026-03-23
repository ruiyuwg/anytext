Pai-Megatron-Patch combines various optimization techniques to accelerate the training of PyTorch-based Transformer models, enabling optimal training performance. This topic explains how Pai-Megatron-Patch works and how to use it.

## Background information

Pai-Megatron-Patch is a toolkit developed by the algorithm team of Alibaba Cloud's Platform for AI (PAI). It is a companion tool to the best-practice solutions for Large Language Models (LLMs) on the PAI-Lingjun AI Computing Service. This toolkit helps developers get started with PAI-Lingjun and complete the end-to-end workflow for LLMs, including efficient distributed training, Supervised Instruction Fine-tuning, and offline inference and validation. The project provides Megatron-LM-based workflows for training and offline validation of mainstream open-source LLMs, enabling you to quickly start training LLMs.

## **How it works**

Pai-Megatron-Patch extends Megatron-LM by applying a patch instead of directly modifying its source code. This non-invasive approach lets you build an independent training workflow for LLMs and provides additional functionality without altering the core Megatron-LM library. It ensures compatibility with future upstream updates, ensuring your established best practices remain unaffected.

Pai-Megatron-Patch includes a model library, tokenizers, model conversion tools, reinforcement learning features, and offline text generation capabilities. It also provides various examples and tools to help you quickly deploy LLM training and inference.

The model library includes popular LLMs, such as Baichuan, Bloom, ChatGLM, Falcon, Galactica, GLM, Llama, Qwen, and StarCoder. The patch also supports bidirectional conversion between Hugging Face model weights and Megatron-LM model weights, letting you load Hugging Face weights in the Megatron-LM environment for pre-training or fine-tuning. Conversely, you can convert Megatron-LM model weights to the Hugging Face format for evaluation and inference within its ecosystem.

For reinforcement learning, Pai-Megatron-Patch provides workflows such as PPO training. You can use SFT and RM models for training. The included tools and examples provide a comprehensive toolkit for LLM training and evaluation.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4350613771/CAEQTxiBgMDzpP6U2BkiIDJlMWI0MzMyOTYxMTRlN2E4YjYzYTAxN2M1YWM4OWJk4134083_20231222141610.851.svg)

## Procedure

Follow this workflow to get started with Pai-Megatron-Patch:

1.  [Install a Pai-Megatron-Patch image](/help/en/pai/user-guide/install-a-pai-rapidformer-image#task-2182583)
    
2.  [Parameter configuration guide](/help/en/pai/user-guide/parameter-settings#task-2182653)
    
3.  [Tutorial: Accelerate Transformer model training](/help/en/pai/use-cases/accelerate-the-training-of-transformers#task-2182691)
    
4.  [Reference: Performance benchmarks](/help/en/pai/user-guide/benchmarks-of-training-performance#task-2182743)
