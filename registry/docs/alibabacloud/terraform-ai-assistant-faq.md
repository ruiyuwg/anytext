## Terraform AI Assistant FAQ

#### Q: How to access Terraform AI Assistant?

A: Log on to [Terraform Explorer](https://api.aliyun.com/api-tools/terraform). Click the assistant icon in the bottom-right corner to open the Terraform RDS Copilot page. You can also go directly to the Terraform RDS Copilot [window URL](https://api.aliyun.com/chatapi/terraform).

#### **Q: I cannot find the correct resource type, or the resource type returned is not what I want.**

A: We are continuously improving the accuracy of resource lookup. Try adding more details to your question, such as the product code or a feature description. Also, note that the Alibaba Cloud Terraform Provider does not yet support all features for all products. If a feature is not supported by the provider, the AI assistant cannot return it.

#### **Q: Why does the AI assistant keep refusing to answer my questions?**

A: The AI assistant politely declines to answer questions that it determines are unrelated to Terraform.

#### **Q: Does the model support questions outside its domain?**

A: Terraform RDS Copilot currently focuses on resource lookup and Terraform code generation, with intent recognition tuned accordingly. It cannot reliably answer questions outside this scope.

#### **Q: During a streaming response, the AI suddenly says “I cannot answer.” Why?**

A: Large Language Models (LLMs) cannot fully eliminate hallucination. After the model generates a response, we perform a fact check to ensure accuracy. If the response contains a clear fabrication, we block it and return “I cannot answer.”

#### **Q: The context between Q&A pairs has poor relevance.**

A: Start a new session or add more descriptive details to your question to avoid interference from earlier topics. We are working to improve the performance of multi-turn conversations.

#### **Q: What large language model does the Terraform AI Assistant use?**

A: It uses a model that is trained on Qwen for this domain.
