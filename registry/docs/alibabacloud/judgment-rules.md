Retrieval-augmented generation (RAG) grounds model answers in your knowledge base. This guide covers techniques to optimize each RAG pipeline stage -- document preparation, chunking, retrieval, and answer generation.

![image.jpeg](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8768450471/p883954.jpeg)

Use the following table to jump directly to the technique that addresses your problem:

**Symptom**

**Likely cause**

**Go to**

Model answers questions incorrectly or incompletely

Source documents lack relevant content or have formatting issues

[Prepare your documents](#f3b082d9e9fse)

Chunks contain mixed topics or truncated sentences

Chunking strategy splits content at wrong boundaries

[Parsing and chunking](#200be7e04eie3)

Retrieval misses relevant chunks in multi-turn conversations

Follow-up prompts lack context from earlier turns

[Multi-round conversation rewriting](#b7031e2ad6cji)

Retrieval returns chunks from wrong document categories

No category-level pre-filtering before vector search

[Tag filtering](#9e5a6ecc71v6x)

Documents with similar structures return wrong-document matches

No structured metadata to disambiguate similar content

[Metadata extraction](/help/en/model-studio/rag-knowledge-base#e7824fce682y7)

Too few relevant chunks returned

Similarity threshold too high or top-K too low

[Similarity threshold](#861895e8993co) and [Number of recalled chunks](#b0d9a48b24t3f)

Too many irrelevant chunks returned

Similarity threshold too low

[Similarity threshold](#861895e8993co)

Answer poorly integrates retrieved knowledge

Model lacks capability for the task

[Select a model](#5c30da7d198ij)

Answer ignores instructions or lacks detail

Prompt template needs refinement

[Optimize the prompt template](#02993c5b9aw1e)

Answer mixes in general knowledge instead of using retrieved content

Answer scope not restricted to knowledge base

[Restrict the answer scope](#50cb73fc12xum)

Answers to similar prompts are too varied or too repetitive

Model parameters need tuning

[Adjust model parameters](#db0d9f0b62ej3)

## Prepare your documents

Poor input quality is the most common cause of poor RAG results -- downstream tuning cannot fix it. Ensure your source documents meet these requirements before tuning pipeline parameters:

-   **Include relevant knowledge.** If the knowledge base lacks information on a topic, the model cannot answer questions about it. [Update the knowledge base](/help/en/model-studio/rag-knowledge-base#278172eb1axef) to add missing content.
    
-   **Use Markdown or similar text formats.** PDF parsing often produces suboptimal results. Convert PDFs to Markdown, DOC, or DOCX first. Use DashScopeParse in Model Studio to convert PDFs, then clean up formatting with a model. > [How should I handle illustrations in documents?](/help/en/model-studio/rag-knowledge-base#225902728eqjb)
    
    > The knowledge base does not support parsing video or audio content.
    
-   **Structure content clearly.** Document layout directly affects RAG accuracy. Use distinct heading levels, avoid watermarks, and minimize complex tables. See [Document formatting best practices](#e02efbbba0xko) for detailed guidance.
    
-   **Match the prompt language.** Write documents in the same language as user prompts. Bilingual terms are acceptable for specialized terminology.
    
-   **Standardize entity names.** Inconsistent naming (for example, "ML", "Machine Learning", "machine learning") confuses retrieval. Pick one canonical form and use it throughout. > **Tip:** Feed the document to a model to help standardize terms. For long documents, split them into parts and process each separately.
    

## Parsing and chunking

> This section covers only the chunking configurations available in Model Studio.

Model Studio parses imported documents into text chunks. The goal: preserve semantic completeness while excluding unrelated information.

Poorly sized chunks degrade retrieval quality:

**Problem**

**Impact**

Chunks too short

Missing semantic context causes retrieval failures.

Chunks too long

Mixed topics cause noisy recall.

Forced semantic truncation

Mid-thought splits cause incomplete recall.

****Text chunks are too short****

****Text chunks are too long****

****Obvious semantic truncation****

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8768450471/p878168.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8768450471/p878169.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8768450471/p878167.png)

Two steps address these issues:

1.  Select **Intelligent Splitting** as the chunking method when creating a knowledge base.
    
2.  After importing documents, manually review and correct chunk content.
    

### Intelligent chunking

Choosing the right chunk size depends on multiple factors:

-   **Document type.** Professional literature benefits from longer chunks that retain context. Short-form content (like social media posts) works better with shorter chunks.
    
-   **Prompt complexity.** Complex, specific prompts typically need longer chunks. Simple queries work better with shorter ones.
    

**Intelligent Splitting** automates this process:

1.  The system divides documents into paragraphs using sentence delimiters.
    
2.  It selects chunk boundaries by semantic relevance, not fixed length.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8768450471/p878170.png)

This preserves semantic integrity and avoids unnecessary splits.

### Correct text chunks

Even with intelligent chunking, parsing artifacts can occur (for example, spaces appearing as `%20`).

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8768450471/p897924.png)

After importing documents, review chunks for completeness and correctness. Edit chunks to fix parsing errors or unexpected splits. Corrections apply to all subsequent retrieval.

> Edits modify only the knowledge base copy, not the original in Data Management. If you re-import the document, review and correct chunks again.

## Retrieval and recall

> This section covers only the retrieval configurations available in Model Studio.

Retrieval must find the most relevant chunks from large candidate pools. The following table maps common problems to their solutions:

**Problem**

**Strategy**

**Availability**

Incomplete or ambiguous prompts in multi-turn conversations

Enable [multi-round conversation rewriting](#b7031e2ad6cji)

All knowledge bases

Cross-category contamination (searching Category A returns results from Category B)

Add [tags](#9e5a6ecc71v6x) to documents for pre-filtering

Document search knowledge bases only

Similar document structures cause wrong-document matches (for example, multiple documents all have a "Function Overview" section)

Extract [metadata](#2f59f3fb0ajj7) for structured pre-filtering

Document search knowledge bases only

Recall results are incomplete

Lower the [similarity threshold](#861895e8993co) and increase the [number of recalled chunks](#b0d9a48b24t3f)

All knowledge bases

Recall results contain too many irrelevant chunks

Raise the [similarity threshold](#861895e8993co)

All knowledge bases

### Multi-round conversation rewriting

In multi-turn conversations, users often send brief follow-ups like "Bailian Phone X1" without restating context. This lacks information for accurate retrieval, even when earlier turns provided key details.

**Multi-round conversation rewriting** expands prompts based on conversation history before retrieval. For example:

**Original prompt**

**Rewritten prompt**

`Bailian Phone X1.`

`Provide all available versions of Bailian Phone X1 in the product library and their specific parameters.`

The rewritten prompt gives RAG the context it needs for accurate retrieval.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8768450471/p876525.png)

**Important**

Configure multi-round conversation rewriting at knowledge base creation -- it cannot be enabled later without recreating the knowledge base. Once enabled, it applies only to the current knowledge base. Selecting **Recommended** also enables it.

### Tag filtering

> Applies to document search knowledge bases only.

Tags add structured metadata to documents. During retrieval, the system filters by tag first, then runs vector search within the filtered set.

**Set tags:**

-   **During upload.** Set tags when importing documents. For steps, see [Import data](/help/en/model-studio/rag-knowledge-base#864c8108c950g).
    
-   **After upload.** On the **Data Management** page, click **Tag** next to a document to edit its tags.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8768450471/p876477.png)

**Use tags:**

-   **Via API.** Specify tags in the `tags` request parameter when [calling an application through an API](/help/en/model-studio/application-calling-guide#4100253b7chc3).
    
-   **In the console.** Set tags when editing an [agent application](/help/en/model-studio/single-agent-application). This applies to all subsequent interactions with that application.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8768450471/p876506.png)

### Metadata extraction

> Applies to document search knowledge bases only.

Metadata embeds structured information into chunks, adding context beyond vector search. This works well when documents share similar structures.

**Example:** A knowledge base contains product descriptions for several phone models (Bailian X1, Bailian Zephyr Z9, others). All include a "Function Overview" section. A user searches for:

```
Function overview of Bailian Phone X1.
```

**Without metadata**, the knowledge base relies on vector similarity alone. Since all documents contain "Function Overview", chunks from unrelated models may rank higher than target chunks:

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8768450471/p881172.png)

> Retrieval test results guarantee ranking order only. Absolute scores are for reference. Treat scores differing by <5% as equivalent.

**With metadata** (phone name as a metadata field), the knowledge base adds a structured search step:

1.  Extract metadata `{"key": "name", "value": "Bailian Phone X1"}` from the prompt
    
2.  Filter to chunks with "Bailian Phone X1" metadata
    
3.  Run vector search within filtered set
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8768450471/p881202.png)

The retrieval test now accurately returns chunks related to "Bailian Phone X1" and its "Function Overview":

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8768450471/p881186.png)

Another common use: embed date metadata to filter recent content. See [metadata extraction](/help/en/model-studio/rag-knowledge-base#e7824fce682y7) for configuration steps.

### Similarity threshold

After retrieval, the Rank model reorders chunks. The similarity threshold filters results -- only chunks above it pass to answer generation.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8768450471/p876541.png)

Configure this in **Custom parameter settings** when creating the knowledge base.

**Adjustment**

**Effect**

**Risk**

Lower threshold

Recalls more chunks

May include less relevant chunks

Raise threshold

Filters out low-relevance chunks

May discard relevant chunks if set too high

If set too high, the system may discard all relevant chunks, leaving insufficient context:

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8768450471/p897345.png)

No universal optimal threshold exists. Find the right value through iterative testing:

1.  Design test cases that cover common user questions.
    
2.  Set an initial similarity threshold based on your use case and document quality.
    
3.  Run a retrieval test and review the recall results.
    
4.  Adjust the threshold and repeat until results meet your requirements.
    

For configuration steps, see [Create and use a knowledge base](/help/en/model-studio/rag-knowledge-base#81f57beb71zs1).

**![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8768450471/p849449.png)**

### Number of recalled chunks

Top-K limits how many chunks reach the model after threshold filtering. If more pass than K allows, the system keeps only the K highest-scoring chunks.

Insufficient K causes RAG to miss relevant information. When relevant chunks exceed K, the system discards excess chunks:

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6878184671/CAEQTxiBgMCdu7K10hkiIDY5YWRkMTI5ZmRiODRkNDA4Y2ViY2QzZWFjMzBjNTYw4762899_20250109142407.621.svg)

RAG cannot determine chunk needs, so it generates responses from received chunks, even if incomplete.

> **Tip:** For lists, summaries, or comparisons, provide more high-quality chunks (for example, K=20) rather than limiting to 5-10. Models can typically handle noise from extra chunks if quality is high.

Adjust **Number Of Recalled Chunks** when editing an application:

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8768450471/p876559.png)

Higher K is not always better. Exceeding the input limit causes truncation and degrades performance. Select **Intelligent Assembly** to automatically recall maximum relevant chunks without exceeding the context window.

## Answer generation

> This section covers only the generation configurations available in Model Studio.

After retrieval, the model generates answers from the prompt and the recalled chunks. If output falls short, use these strategies:

**Problem**

**Strategy**

The answer poorly integrates retrieved knowledge with the prompt

[Select a more capable model](#5c30da7d198ij)

The answer ignores instructions or lacks detail

[Optimize the prompt template](#02993c5b9aw1e)

The answer mixes in general knowledge instead of strictly using retrieved content

[Restrict the answer scope](#50cb73fc12xum)

Answers to similar prompts are too varied or too repetitive

[Adjust model parameters](#db0d9f0b62ej3)

### Select a model

Models differ in instruction following, language support, and comprehension. If one model cannot connect retrieved knowledge to the prompt, switch to a stronger model.

Select a model when editing an application:

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0333235471/p944550.png)

Commercial Qwen-series models provide the latest capabilities. Match the model to your use case:

**Use case**

**Recommended model**

**Why**

Simple information queries and summarization

Qwen-Turbo

Sufficient capability, lower cost

Complex logical reasoning

Qwen-Max

Larger parameter count, stronger reasoning

Consulting many document chunks

Qwen-Plus

Longer context window

Domain-specific applications (for example, legal)

A domain-trained model (for example, Qwen-Legal)

Specialized knowledge

### Optimize the prompt template

Adjust the prompt template to influence how the model uses retrieved knowledge. Three techniques:

**Constrain the output.** Add explicit instructions about how to handle edge cases:

```
If the information provided is not sufficient to answer the question, please state clearly,
"Based on the existing information, I cannot answer this question." Do not invent an answer.
```

This reduces hallucinations when knowledge is insufficient.

**Add few-shot examples.** Include question-answer pairs that demonstrate expected output format. This guides the model to structure its use of retrieved knowledge correctly. Comparison using Qwen-Plus:

**Prompt template**

**Result**

`# Requirement`  
`Please extract the technical specifications from the text below and display them in JSON format.`  
`${documents}`  
  
  
  
  
  
  
  
  
  
  

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8768450471/p896946.png)

`# Requirement`  
`Please extract the technical specifications from the text below and display them in JSON format. Please strictly follow the fields given in the example.`  
`${documents}`  
  
`# Example`  
`## Input: Stardust S9 Pro, a groundbreaking 6.9-inch 1440 x 3088 pixel under-screen camera design, brings a boundless visual experience. The top configuration of 512 GB storage and 16 GB RAM, combined with a 6000 mAh battery and 100 W fast charging technology, allows performance and battery life to go hand in hand, leading the technological trend. Reference price: 5999 - 6499.`  
`## Output: { "product":"Stardust S9 Pro", "screen_size":"6.9inch", "ram_size": "16GB", "battery":"6000mAh" }`  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8768450471/p896970.png)

**Separate prompt sections with clear delimiters.** Separate instructions from the `${documents}` variable so the model can distinguish instructions from retrieved content. The `${documents}` variable should appear **once only**.

**Correct**

**Incorrect**

`# Role`  
`You are a customer service representative, focusing on analyzing and solving user problems, and providing accurate solutions by retrieving the knowledge base.`  
  
`# Requirements`  
`<b data-pending="uicontrol" id="pending_23ef4a11">Return the result directly</b>: ...`  
`<b data-pending="uicontrol" id="pending_852db57a">Do not include specific contact information in the returned result</b>: ...`  
`<b data-pending="uicontrol" id="pending_bcea06fb">Default contact</b>: If no relevant on-duty personnel can be found, please return "On-duty representative today: Model Studio Customer Service 01".`  
  
`# Knowledge Base`  
`Please remember the following materials, they may be helpful in answering the question.`  
`${documents}`  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

`# Role`  
`You are a customer service representative... Please use the information in ${documents} to assist in answering.`  
  
`# Requirements`  
`...`  
  
`# Knowledge Base`  
`...`  
`${documents}`  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

See [Prompt engineering](/help/en/model-studio/use-prompt-engineering-to-communicate-with-large-models) for more techniques.

### Restrict the answer scope

To ensure answers use only retrieved knowledge (excluding general knowledge), set answer scope to **Knowledge base only**.

Set a fixed automatic reply when no relevant knowledge is found.

****Knowledge base + model Knowledge****

****Knowledge base only****

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8768450471/p846101.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8768450471/p846100.png)

Answers combine retrieved knowledge with the model's general knowledge.

Answers are strictly based on retrieved knowledge.

To determine knowledge relevance, select **Search Threshold + LLM Judgment**. This filters chunks by similarity threshold first, then uses a model to evaluate relevance based on your **Judgment Prompt**.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8768450471/p897268.png)

Example judgment prompt (fixed reply when no match: `Sorry, no relevant phone model was found.`):

```
# Judgment rules:
- The premise for a match between the question and the document is that the entity involved
  in the question is exactly the same as the entity described in the document.
- The question is not mentioned at all in the document.
```

**Knowledge hit**

**No knowledge hit**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8768450471/p897311.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8768450471/p897312.png)

### Adjust model parameters

Control output consistency and detail with model parameters. Configure in **Parameters** when editing an application:

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0333235471/p944552.png)

**Parameter**

**Effect**

**When to adjust**

**Temperature**

Controls output randomness. Higher values increase diversity; lower values increase determinism.

Lower for fact-finding, technical documents, and precise wording. Raise for creative writing, brainstorming, and chat.

**Maximum response length**

Controls the maximum number of tokens generated.

Increase for detailed descriptions. Decrease for short answers.

**Number of context turns**

Controls how many conversation turns the model references. Set to 1 to ignore history.

Increase for conversational applications. Decrease for single-query use cases.

## FAQ

### Document formatting best practices

Document layout directly affects parsing and chunking. Follow these guidelines:

-   **Use distinct heading levels.** Clear, hierarchical headings help the parser identify structure. Unclear levels may cause incorrect grouping.
    
-   **Remove watermarks.** Watermarks are recognized as text and can disrupt content order.
    
-   **Avoid mid-list nesting.** Mid-list nesting can cause the parser to treat subsequent items as subheadings. If unavoidable, place nested lists at the end.
    
-   **Minimize complex tables and images.** Complex tables can disrupt parsing.
    

**Example: unclear heading levels**

The first-level heading is "IV. Prize usage rules:", containing "Prize 1:..." and "Prize 2:...".

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7761032671/p739543.png)

After parsing, "Prize 2:..." is incorrectly grouped under "Prize 1:...". Fix: set both as numbered second-level headings.

**Example: watermarks**

A document with a watermark contains three items.

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7761032671/p739540.png)

After parsing, watermark text disrupts item ordering, separating the third item into its own chunk.

**Example: nested lists**

Under "Activity rules", an ordered list contains a third item "Activity introduction" with a nested sub-list (items a and b).

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7761032671/p739541.png)

After parsing, "Activity introduction" is treated as a second-level heading, incorrectly grouping all subsequent content under it.

**Well-formatted document characteristics:**

-   Content under each heading is independent and clear
    
-   No watermarks
    
-   Flat lists (no mid-item nesting)
    
-   No complex tables or images
