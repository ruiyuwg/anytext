# Build AI Applications

[Skip to content](#%5Ftop)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/use-cases/ai.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# Build AI Applications

Build and deploy ambitious AI applications to Cloudflare's global network.

## Reference architectures

Diagrams, design patterns, and detailed best practices to help you generate solutions with Cloudflare products.

[Ingesting BigQuery Data into Workers AIYou can connect a Cloudflare Worker to get data from Google BigQuery and pass it to Workers AI, to run AI Models, powered by serverless GPUs.](https://developers.cloudflare.com/reference-architecture/diagrams/ai/bigquery-workers-ai/)[Multi-vendor AI observability and controlBy shifting features such as rate limiting, caching, and error handling to the proxy layer, organizations can apply unified configurations across services and inference service providers.](https://developers.cloudflare.com/reference-architecture/diagrams/ai/ai-multivendor-observability-control/)[Composable AI architectureThe architecture diagram illustrates how AI applications can be built end-to-end on Cloudflare, or single services can be integrated with external infrastructure and services.](https://developers.cloudflare.com/reference-architecture/diagrams/ai/ai-composable/)[Content-based asset creationAI systems combine text-generation and text-to-image models to create visual content from text. They generate prompts, moderate content, and produce images for various applications.](https://developers.cloudflare.com/reference-architecture/diagrams/ai/ai-asset-creation/)[Retrieval Augmented Generation (RAG)RAG combines retrieval with generative models for better text. It uses external knowledge to create factual, relevant responses, improving coherence and accuracy in NLP tasks like chatbots.](https://developers.cloudflare.com/reference-architecture/diagrams/ai/ai-rag/)[Automatic captioning for video uploadsBy integrating automatic speech recognition technology into video platforms, content creators, publishers, and distributors can reach a broader audience, including individuals with hearing impairments or those who prefer to consume content in different languages.](https://developers.cloudflare.com/reference-architecture/diagrams/ai/ai-video-caption/)

## Demo apps

## Tutorials

Step-by-step guides to help you build and learn.

[Create and secure an AI agent wrapper using AI Gateway and Zero TrustThis tutorial explains how to use Cloudflare AI Gateway and Zero Trust to create a functional and secure website wrapper for an AI agent.](https://developers.cloudflare.com/cloudflare-one/tutorials/ai-wrapper-tenant-control/)[Whisper-large-v3-turbo with Cloudflare Workers AILearn how to transcribe large audio files using Workers AI.](https://developers.cloudflare.com/workers-ai/guides/tutorials/build-a-workers-ai-whisper-with-chunking/)[Llama 3.2 11B Vision Instruct model on Cloudflare Workers AILearn how to use the Llama 3.2 11B Vision Instruct model on Cloudflare Workers AI.](https://developers.cloudflare.com/workers-ai/guides/tutorials/llama-vision-tutorial/)[Store and Catalog AI Generated Images with R2 (Part 3)In the final part of the AI Image Playground series, Kristian teaches how to utilize Cloudflare's R2 object storage.](https://developers.cloudflare.com/workers-ai/guides/tutorials/image-generation-playground/image-generator-store-and-catalog/)[Build a Retrieval Augmented Generation (RAG) AIBuild your first AI app with Cloudflare AI. This guide uses Workers AI, Vectorize, D1, and Cloudflare Workers.](https://developers.cloudflare.com/workers-ai/guides/tutorials/build-a-retrieval-augmented-generation-ai/)[Using BigQuery with Workers AILearn how to ingest data stored outside of Cloudflare as an input to Workers AI models.](https://developers.cloudflare.com/workers-ai/guides/tutorials/using-bigquery-with-workers-ai/)[How to Build an Image Generator using Workers AILearn how to build an image generator using Workers AI.](https://developers.cloudflare.com/workers-ai/guides/tutorials/image-generation-playground/)[Build an AI Image Generator Playground (Part 1)The new flux models on Workers AI are our most powerful text-to-image AI models yet. Using Workers AI, you can get access to the best models in the industry without having to worry about inference, ops, or deployment.](https://developers.cloudflare.com/workers-ai/guides/tutorials/image-generation-playground/image-generator-flux/)[Add New AI Models to your Playground (Part 2)In part 2, Kristian expands upon the existing environment built in part 1, by showing you how to integrate new AI models and introduce new parameters that allow you to customize how images are generated.](https://developers.cloudflare.com/workers-ai/guides/tutorials/image-generation-playground/image-generator-flux-newmodels/)[Explore Workers AI Models Using a Jupyter NotebookThis Jupyter notebook explores various models (including Whisper, Distilled BERT, LLaVA, and Meta Llama 3) using Python and the requests library.](https://developers.cloudflare.com/workers-ai/guides/tutorials/explore-workers-ai-models-using-a-jupyter-notebook/)[Create a fine-tuned OpenAI model with R2In this tutorial, you will use the OpenAI API and Cloudflare R2 to create a fine-tuned model.](https://developers.cloudflare.com/workers/tutorials/create-finetuned-chatgpt-ai-models-with-r2/)[Fine Tune Models With AutoTrain from HuggingFaceFine-tuning AI models with LoRA adapters on Workers AI allows adding custom training data, like for LLM finetuning.](https://developers.cloudflare.com/workers-ai/guides/tutorials/fine-tune-models-with-autotrain/)[Explore Code Generation Using DeepSeek Coder ModelsExplore how you can use AI models to generate code and work more efficiently.](https://developers.cloudflare.com/workers-ai/guides/tutorials/explore-code-generation-using-deepseek-coder-models/)[Choose the Right Text Generation ModelThere's a wide range of text generation models available through Workers AI. In an effort to aid you in your journey of finding the right model, this notebook will help you get to know your options in a speed dating type of scenario.](https://developers.cloudflare.com/workers-ai/guides/tutorials/how-to-choose-the-right-text-generation-model/)[Deploy a Worker that connects to OpenAI via AI GatewayLearn how to deploy a Worker that makes calls to OpenAI through AI Gateway](https://developers.cloudflare.com/ai-gateway/tutorials/deploy-aig-worker/)[OpenAI GPT function calling with JavaScript and Cloudflare WorkersBuild a project that leverages OpenAI's function calling feature, available in OpenAI's latest Chat Completions API models.](https://developers.cloudflare.com/workers/tutorials/openai-function-calls-workers/)[Use Pruna P-video through AI GatewayLearn how to call prunaai/p-video on Replicate through AI Gateway](https://developers.cloudflare.com/ai-gateway/tutorials/pruna-p-video/)

## Customer spotlights

Explore case studies on [AI companies building on Cloudflare ↗](https://workers.cloudflare.com/built-with/collections/ai-workers/).

## Code examples

Examples ready to copy and paste.

[Use fetch() handlerLearn how to use the fetch() handler in Cloudflare Workers AI to enable LLMs to perform API calls, like retrieving a 5-day weather forecast using function calling.](https://developers.cloudflare.com/workers-ai/features/function-calling/embedded/examples/fetch/)[Stream OpenAI API ResponsesUse the OpenAI v4 SDK to stream responses from OpenAI.](https://developers.cloudflare.com/workers/examples/openai-sdk-streaming/)

Note

Cloudflare also offers detailed code examples for various [AI models](https://developers.cloudflare.com/workers-ai/models/) and [Model providers](https://developers.cloudflare.com/ai-gateway/usage/providers/).

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/use-cases/","name":"Use cases"}},{"@type":"ListItem","position":3,"item":{"@id":"/use-cases/ai/","name":"Build AI Applications"}}]}
```
