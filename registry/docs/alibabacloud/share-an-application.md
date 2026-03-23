LLMs excel at text understanding and generation but lack access to private data, real-time information, and multi-step planning. Model Studio fills these gaps with agent applications (flexible, conversational) and workflow applications (structured, deterministic), adding capabilities like knowledge retrieval, and workflow orchestration. (Agent orchestration has been replaced by workflow applications.)

New to AI? Start with agent applications. Switch to workflows when you need deterministic control over each step.

**Important**

-   **Console restrictions:** Only **International Edition users** who created applications before **April 21, 2025** can access the **Application Development** tab, as shown in the following figure.
    
    > This tab contains the following features: Applications ([agent application](/help/en/model-studio/single-agent-application) and [workflow application](/help/en/model-studio/workflow-application/)), Components ([prompt engineering](/help/en/model-studio/prompt-template) and [plug-in](/help/en/model-studio/plug-in-overview#undefined)), and Data ([knowledge base](/help/en/model-studio/rag-knowledge-base) and [application data](/help/en/model-studio/data-import-instructions)). **These are all preview features. Use them with caution in production environments.**
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0799390671/p1017153.png)
    
-   **API call limits:** Only **International Edition users** who created applications before **April 21, 2025**, can call the [application data, knowledge base, and prompt engineering APIs](/help/en/model-studio/api-bailian-2023-12-29-dir/).
    

## Agent application

An agent application (labeled **Assistant** in console) is a conversational AI that completes tasks through dialogue, autonomous decision-making, and tool use.

**Use agent applications in the following scenarios:**

-   You need chat-based, natural-language interactions.
    
-   Behavior is shaped primarily through prompts.
    
-   You want to connect knowledge bases or call external tools (official or custom plug-ins) without designing a pipeline.
    

Agent applications require no code: define prompts, attach a knowledge base, enable plug-ins -- the model handles the rest. The simple setup and conversational interface make them ideal for beginners building single-function apps.

For setup instructions, see [Agent application](/help/en/model-studio/single-agent-application).

## Workflow application

A workflow application (labeled **Workflow** in console) is a procedural AI that breaks tasks into subtasks represented as nodes, giving you explicit control over each step.

**Use workflow applications in the following scenarios:**

-   The process must be fixed and repeatable, with defined inputs and outputs for each step.
    
-   The task involves branching logic, text conversion, or integration with external services like [Function Compute](https://www.alibabacloud.com/help/functioncompute/fc-3-0/).
    
-   Deterministic control matters more than prompt flexibility.
    

Workflow applications require no code: drag nodes onto a canvas, configure them, and connect them to build flows.

For setup instructions, see [Workflow application](/help/en/model-studio/workflow-application/).

## Feature comparison

**Feature**

**Agent application**

**Workflow application**

**Creation method**

No-code

No-code

**Interaction model**

Conversational

Procedural

**Prompt dependency**

High -- prompts define behavior, branching, and planning

Low -- node configuration defines behavior

[Knowledge base](/help/en/model-studio/rag-knowledge-base)

Supported

Supported

[Tools](/help/en/model-studio/user-guide/plug-ins/)

Supported (official and custom plug-ins)

Supported (plug-in node, API node)

**Text conversion**

Limited -- via prompt instructions only

Supported (text conversion node, script conversion node)

**External service integration**

Supported (custom plug-ins)

Supported ([Function Compute](https://www.alibabacloud.com/help/functioncompute/fc-3-0/) node)

**Branching**

Limited -- depends on prompt instructions

Supported (logical branching, intent recognition)

**Automatic planning**

Limited -- depends on prompt instructions

Supported (agent group node)

Agent applications offer faster prototyping through conversation and prompt tuning. Workflows provide deterministic control for production pipelines requiring repeatable, auditable steps.

## Access restrictions for International Edition

The following restrictions apply to International Edition users:

-   **Console access**: Only users who created applications before **April 21, 2025** can access the **Application Development** tab. It includes:
    
    -   **Applications**: [Agent application](/help/en/model-studio/single-agent-application) and [workflow application](/help/en/model-studio/workflow-application/)
        
    -   **Components**: [Prompt engineering](/help/en/model-studio/prompt-template) and [plug-in](/help/en/model-studio/plug-in-overview)
        
    -   **Data**: [Knowledge base](/help/en/model-studio/rag-knowledge-base) and [application data](/help/en/model-studio/data-import-instructions)
        
-   **API access**: Only users who created applications before **April 21, 2025** can call the [application data, knowledge base, and prompt engineering APIs](/help/en/model-studio/api-bailian-2023-12-29-dir/).
    

All features listed above are in preview. Use them with caution in production environments.

![Application Development tab in the Model Studio console](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0799390671/p1017153.png)
