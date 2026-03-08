Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# Inference engines

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

Docker Model Runner supports three inference engines: **llama.cpp**, **vLLM**, and **Diffusers**. Each engine has different strengths, supported platforms, and model format requirements. This guide helps you choose the right engine and configure it for your use case.

## [Engine comparison](#engine-comparison)

Feature

llama.cpp

vLLM

Diffusers

**Model formats**

GGUF

Safetensors, HuggingFace

DDUF

**Platforms**

All (macOS, Windows, Linux)

Linux x86\_64 only

Linux (x86\_64, ARM64)

**GPU support**

NVIDIA, AMD, Apple Silicon, Vulkan

NVIDIA CUDA only

NVIDIA CUDA only

**CPU inference**

Yes

No

No

**Quantization**

Built-in (Q4, Q5, Q8, etc.)

Limited

Limited

**Memory efficiency**

High (with quantization)

Moderate

Moderate

**Throughput**

Good

High (with batching)

Good

**Best for**

Local development, resource-constrained environments

Production, high throughput

Image generation

**Use case**

Text generation (LLMs)

Text generation (LLMs)

Image generation (Stable Diffusion)

## [llama.cpp](#llamacpp)

[llama.cpp](https://github.com/ggerganov/llama.cpp) is the default inference engine in Docker Model Runner. It's designed for efficient local inference and supports a wide range of hardware configurations.

### [Platform support](#platform-support)

Platform

GPU support

Notes

macOS (Apple Silicon)

Metal

Automatic GPU acceleration

Windows (x64)

NVIDIA CUDA

Requires NVIDIA drivers 576.57+

Windows (ARM64)

Adreno OpenCL

Qualcomm 6xx series and later

Linux (x64)

NVIDIA, AMD, Vulkan

Multiple backend options

Linux

CPU only

Works on any x64/ARM64 system

### [Model format: GGUF](#model-format-gguf)

llama.cpp uses the GGUF format, which supports efficient quantization for reduced memory usage without significant quality loss.

#### [Quantization levels](#quantization-levels)

Quantization

Bits per weight

Memory usage

Quality

Q2\_K

\~2.5

Lowest

Reduced

Q3\_K\_M

\~3.5

Minimal

Acceptable

Q4\_K\_M

\~4.5

Low

Good

Q5\_K\_M

\~5.5

Moderate

Excellent

Q6\_K

\~6.5

Higher

Excellent

Q8\_0

8

High

Near-original

F16

16

Highest

Original

**Recommended**: Q4\_K\_M offers the best balance of quality and memory usage for most use cases.

#### [Pulling quantized models](#pulling-quantized-models)

Models on Docker Hub often include quantization in the tag:

```console
$ docker model pull ai/llama3.2:3B-Q4_K_M
```

### [Using llama.cpp](#using-llamacpp)

llama.cpp is the default engine. No special configuration is required:

```console
$ docker model run ai/smollm2
```

To explicitly specify llama.cpp when running models:

```console
$ docker model run ai/smollm2 --backend llama.cpp
```

### [llama.cpp API endpoints](#llamacpp-api-endpoints)

When using llama.cpp, API calls use the llama.cpp engine path:

```text
POST /engines/llama.cpp/v1/chat/completions
```

Or without the engine prefix:

```text
POST /engines/v1/chat/completions
```

## [vLLM](#vllm)

[vLLM](https://github.com/vllm-project/vllm) is a high-performance inference engine optimized for production workloads with high throughput requirements.

### [Platform support](#platform-support-1)

Platform

GPU

Support status

Linux x86\_64

NVIDIA CUDA

Supported

Windows with WSL2

NVIDIA CUDA

Supported (Docker Desktop 4.54+)

macOS

\-

Not supported

Linux ARM64

\-

Not supported

AMD GPUs

\-

Not supported

> Important
>
> vLLM requires an NVIDIA GPU with CUDA support. It does not support CPU-only inference.

### [Model format: Safetensors](#model-format-safetensors)

vLLM works with models in Safetensors format, which is the standard format for HuggingFace models. These models typically use more memory than quantized GGUF models but may offer better quality and faster inference on powerful hardware.

### [Setting up vLLM](#setting-up-vllm)

#### [Docker Engine (Linux)](#docker-engine-linux)

Install the Model Runner with vLLM backend:

```console
$ docker model install-runner --backend vllm --gpu cuda
```

Verify the installation:

```console
$ docker model status
Docker Model Runner is running

Status:
llama.cpp: running llama.cpp version: c22473b
vllm: running vllm version: 0.11.0
```

#### [Docker Desktop (Windows with WSL2)](#docker-desktop-windows-with-wsl2)

1. Ensure you have:

   - Docker Desktop 4.54 or later
   - NVIDIA GPU with updated drivers
   - WSL2 enabled
2. Install vLLM backend:

   ```console
   $ docker model install-runner --backend vllm --gpu cuda
   ```

### [Running models with vLLM](#running-models-with-vllm)

vLLM models are typically tagged with `-vllm` suffix:

```console
$ docker model run ai/smollm2-vllm
```

To specify the vLLM backend explicitly:

```console
$ docker model run ai/model --backend vllm
```

### [vLLM API endpoints](#vllm-api-endpoints)

When using vLLM, specify the engine in the API path:

```text
POST /engines/vllm/v1/chat/completions
```

### [vLLM configuration](#vllm-configuration)

#### [HuggingFace overrides](#huggingface-overrides)

Use `--hf_overrides` to pass model configuration overrides:

```console
$ docker model configure --hf_overrides '{"max_model_len": 8192}' ai/model-vllm
```

#### [Common vLLM settings](#common-vllm-settings)

Setting

Description

Example

`max_model_len`

Maximum context length

8192

`gpu_memory_utilization`

Fraction of GPU memory to use

0.9

`tensor_parallel_size`

GPUs for tensor parallelism

2

### [vLLM and llama.cpp performance comparison](#vllm-and-llamacpp-performance-comparison)

Scenario

Recommended engine

Single user, local development

llama.cpp

Multiple concurrent requests

vLLM

Limited GPU memory

llama.cpp (with quantization)

Maximum throughput

vLLM

CPU-only system

llama.cpp

Apple Silicon Mac

llama.cpp

Production deployment

vLLM (if hardware supports it)

## [Diffusers](#diffusers)

[Diffusers](https://github.com/huggingface/diffusers) is an inference engine for image generation models, including Stable Diffusion. Unlike llama.cpp and vLLM which focus on text generation with LLMs, Diffusers enables you to generate images from text prompts.

### [Platform support](#platform-support-2)

Platform

GPU

Support status

Linux x86\_64

NVIDIA CUDA

Supported

Linux ARM64

NVIDIA CUDA

Supported

Windows

\-

Not supported

macOS

\-

Not supported

> Important
>
> Diffusers requires an NVIDIA GPU with CUDA support. It does not support CPU-only inference.

### [Setting up Diffusers](#setting-up-diffusers)

Install the Model Runner with Diffusers backend:

```console
$ docker model reinstall-runner --backend diffusers --gpu cuda
```

Verify the installation:

```console
$ docker model status
Docker Model Runner is running

Status:
llama.cpp: running llama.cpp version: 34ce48d
mlx: not installed
sglang: sglang package not installed
vllm: vLLM binary not found
diffusers: running diffusers version: 0.36.0
```

### [Pulling Diffusers models](#pulling-diffusers-models)

Pull a Stable Diffusion model:

```console
$ docker model pull stable-diffusion:Q4
```

### [Generating images with Diffusers](#generating-images-with-diffusers)

Diffusers uses an image generation API endpoint. To generate an image:

```console
$ curl -s -X POST http://localhost:12434/engines/diffusers/v1/images/generations \
  -H "Content-Type: application/json" \
  -d '{
    "model": "stable-diffusion:Q4",
    "prompt": "A picture of a nice cat",
    "size": "512x512"
  }' | jq -r '.data[0].b64_json' | base64 -d > image.png
```

This command:

1. Sends a POST request to the Diffusers image generation endpoint
2. Specifies the model, prompt, and output image size
3. Extracts the base64-encoded image from the response
4. Decodes it and saves it as `image.png`

### [Diffusers API endpoint](#diffusers-api-endpoint)

When using Diffusers, specify the engine in the API path:

```text
POST /engines/diffusers/v1/images/generations
```

### [Supported parameters](#supported-parameters)

Parameter

Type

Description

`model`

string

Required. The model identifier (e.g., `stable-diffusion:Q4`).

`prompt`

string

Required. The text description of the image to generate.

`size`

string

Image dimensions in `WIDTHxHEIGHT` format (e.g., `512x512`).

## [Running multiple engines](#running-multiple-engines)

You can run llama.cpp, vLLM, and Diffusers simultaneously. Docker Model Runner routes requests to the appropriate engine based on the model or explicit engine selection.

Check which engines are running:

```console
$ docker model status
Docker Model Runner is running

Status:
llama.cpp: running llama.cpp version: 34ce48d
mlx: not installed
sglang: sglang package not installed
vllm: running vllm version: 0.11.0
diffusers: running diffusers version: 0.36.0
```

### [Engine-specific API paths](#engine-specific-api-paths)

Engine

API path

Use case

llama.cpp

`/engines/llama.cpp/v1/chat/completions`

Text generation

vLLM

`/engines/vllm/v1/chat/completions`

Text generation

Diffusers

`/engines/diffusers/v1/images/generations`

Image generation

Auto-select

`/engines/v1/chat/completions`

Text generation (auto-selects engine)

## [Managing inference engines](#managing-inference-engines)

### [Install an engine](#install-an-engine)

```console
$ docker model install-runner --backend <engine> [--gpu <type>]
```

Options:

- `--backend`: `llama.cpp`, `vllm`, or `diffusers`
- `--gpu`: `cuda`, `rocm`, `vulkan`, or `metal` (depends on platform)

### [Reinstall an engine](#reinstall-an-engine)

```console
$ docker model reinstall-runner --backend <engine>
```

### [Check engine status](#check-engine-status)

```console
$ docker model status
```

### [View engine logs](#view-engine-logs)

```console
$ docker model logs
```

## [Packaging models for each engine](#packaging-models-for-each-engine)

### [Package a GGUF model (llama.cpp)](#package-a-gguf-model-llamacpp)

```console
$ docker model package --gguf ./model.gguf --push myorg/mymodel:Q4_K_M
```

### [Package a Safetensors model (vLLM)](#package-a-safetensors-model-vllm)

```console
$ docker model package --safetensors ./model/ --push myorg/mymodel-vllm
```

## [Troubleshooting](#troubleshooting)

### [vLLM won't start](#vllm-wont-start)

1. Verify NVIDIA GPU is available:

   ```console
   $ nvidia-smi
   ```

2. Check Docker has GPU access:

   ```console
   $ docker run --rm --gpus all nvidia/cuda:12.0-base nvidia-smi
   ```

3. Verify you're on a supported platform (Linux x86\_64 or Windows WSL2).

### [llama.cpp is slow](#llamacpp-is-slow)

1. Ensure GPU acceleration is working (check logs for Metal/CUDA messages).

2. Try a more aggressive quantization:

   ```console
   $ docker model pull ai/model:Q4_K_M
   ```

3. Reduce context size:

   ```console
   $ docker model configure --context-size 2048 ai/model
   ```

### [Out of memory errors](#out-of-memory-errors)

1. Use a smaller quantization (Q4 instead of Q8).
2. Reduce context size.
3. For vLLM, adjust `gpu_memory_utilization`:

   ```console
   $ docker model configure --hf_overrides '{"gpu_memory_utilization": 0.8}' ai/model
   ```

## [What's next](#whats-next)

- [Configuration options](https://docs.docker.com/ai/model-runner/configuration/) - Detailed parameter reference
- [API reference](https://docs.docker.com/ai/model-runner/api-reference/) - API documentation
- [GPU support](https://docs.docker.com/desktop/features/gpu/) - GPU configuration for Docker Desktop

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/ai/model-runner/inference-engines.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fai%2fmodel-runner%2finference-engines%2f\&labels=status%2Ftriage)

Table of contents
