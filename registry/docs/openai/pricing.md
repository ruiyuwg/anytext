# Pricing

import {
GroupedPricingTable,
PricingTable,
pricingHtml,
pricingTooltipHeading,
TextTokenPricingTables,
withDataSharing,
withLegacy,
} from "./pricing.jsx";

<style
  is:global
  set:html={`
    article table th,
    article table td {
      font-size: 14px;
    }

    :root {
      --pricing-section-spacing: 60px;
    }

    @media (min-width: 768px) {
      .pricing-switcher-layout {
        display: grid;
        grid-template-columns: minmax(0, 1fr) auto;
        grid-template-rows: auto auto;
        column-gap: 1.5rem;
        align-items: start;
      }

      .pricing-switcher-layout .content-switcher-root {
        display: contents;
      }

      .pricing-switcher-layout .pricing-switcher-header {
        grid-column: 1;
        grid-row: 1;
        align-self: start;
      }

      .pricing-switcher-layout .content-switcher-selector {
        grid-column: 2;
        grid-row: 1;
        margin-bottom: 0;
        margin-top: 0;
        align-self: start;
      }

      .pricing-switcher-layout .content-switcher-panes {
        grid-column: 1 / -1;
        grid-row: 2;
      }
    }

    .pricing-section-heading .anchor-heading-wrapper {
      margin-top: 0;
      margin-bottom: 0;
    }

    .pricing-section-heading .anchor-heading {
      margin-top: 0;
      margin-bottom: 0;
    }

    .pricing-section-heading .anchor-heading > p {
      margin: 0;
    }

    .pricing-section-heading .anchor-heading {
      display: block;
    }

    .pricing-switcher-header {
      display: flex;
      flex-direction: column;
    }

    .pricing-section-meta,
    .pricing-switcher-meta {
      display: block;
      margin-top: 4px;
      font-size: 14px;
      line-height: 20px;
      color: var(--color-text-secondary);
    }

    .pricing-switcher-subheading {
      display: block;
      margin-top: 4px;
      font-size: 16px;
      line-height: 24px;
      color: var(--color-text-primary);
    }

    .pricing-section-tip {
      margin-top: 16px;
      margin-bottom: 20px;
    }

    .pricing-subsection {
      margin-top: var(--pricing-section-spacing);
    }

    .pricing-switcher-layout + .pricing-switcher-layout {
      margin-top: var(--pricing-section-spacing);
    }

    .pricing-multimodal-subsection {
      margin-top: 28px;
    }

    .pricing-switcher-layout.pricing-multimodal-subsection + .pricing-switcher-layout.pricing-multimodal-subsection {
      margin-top: 28px;
    }
  `}
/>

<div className="pricing-switcher-layout">
  <div className="pricing-switcher-header pricing-section-heading">
    

Flagship models


    <div className="pricing-switcher-subheading">Our latest models</div>
    <small className="pricing-switcher-meta">Prices per 1M tokens.</small>
  </div>

  

<div data-content-switcher-pane data-value="standard">
      <div class="hidden">Standard</div>

      <TextTokenPricingTables
        client:load
        tier="standard"
        latestSectionLabel={null}
        allModelsFootnote={pricingHtml(
          'Regional processing (data residency) endpoints are charged a 10% uplift for <code>gpt-5.4</code>, <code>gpt-5.4-mini</code>, <code>gpt-5.4-nano</code>, and <code>gpt-5.4-pro</code>. See our <a href="/api/docs/guides/your-data">Your data</a> guide for supported regions and processing details.'
        )}
        rows={[
          ["gpt-5.4 (<272K context length)", 2.5, 0.25, 15],
          ["gpt-5.4-mini", 0.75, 0.075, 4.5],
          ["gpt-5.4-nano", 0.2, 0.02, 1.25],
          ["gpt-5.4-pro (<272K context length)", 30, "", 180],
          ["gpt-5.2", 1.75, 0.175, 14],
          ["gpt-5.2-pro", 21, "-", 168],
          ["gpt-5.1", 1.25, 0.125, 10],
          ["gpt-5", 1.25, 0.125, 10],
          ["gpt-5-mini", 0.25, 0.025, 2],
          ["gpt-5-nano", 0.05, 0.005, 0.4],
          ["gpt-5-pro", 15, null, 120],
          ["gpt-4.1", 2, 0.5, 8],
          ["gpt-4.1-mini", 0.4, 0.1, 1.6],
          ["gpt-4.1-nano", 0.1, 0.025, 0.4],
          ["gpt-4o", 2.5, 1.25, 10],
          ["gpt-4o-2024-05-13", 5, null, 15],
          ["gpt-4o-mini", 0.15, 0.075, 0.6],
          ["o1", 15, 7.5, 60],
          ["o1-pro", 150, null, 600],
          ["o3-pro", 20, null, 80],
          ["o3", 2, 0.5, 8],
          ["o4-mini", 1.1, 0.275, 4.4],
          ["o3-mini", 1.1, 0.55, 4.4],
          ["o1-mini", 1.1, 0.55, 4.4],
          ["gpt-4-turbo-2024-04-09", 10, null, 30],
          ["gpt-4-0125-preview", 10, null, 30],
          ["gpt-4-1106-preview", 10, null, 30],
          ["gpt-4-1106-vision-preview", 10, null, 30],
          ["gpt-4-0613", 30, null, 60],
          ["gpt-4-0314", 30, null, 60],
          ["gpt-4-32k", 60, null, 120],
          ["gpt-3.5-turbo", 0.5, null, 1.5],
          ["gpt-3.5-turbo-0125", 0.5, null, 1.5],
          ["gpt-3.5-turbo-1106", 1, null, 2],
          ["gpt-3.5-turbo-0613", 1.5, null, 2],
          ["gpt-3.5-0301", 1.5, null, 2],
          ["gpt-3.5-turbo-instruct", 1.5, null, 2],
          ["gpt-3.5-turbo-16k-0613", 3, null, 4],
          ["davinci-002", 2, null, 2],
          ["babbage-002", 0.4, null, 0.4],
        ]}
      />
    </div>
    <div data-content-switcher-pane data-value="batch" hidden>
      <div class="hidden">Batch</div>

      <TextTokenPricingTables
        client:load
        tier="batch"
        latestSectionLabel={null}
        allModelsFootnote={pricingHtml(
          'Regional processing (data residency) endpoints are charged a 10% uplift for <code>gpt-5.4</code>, <code>gpt-5.4-mini</code>, <code>gpt-5.4-nano</code>, and <code>gpt-5.4-pro</code>. See our <a href="/api/docs/guides/your-data">Your data</a> guide for supported regions and processing details.'
        )}
        rows={[
          ["gpt-5.4 (<272K context length)", 1.25, 0.13, 7.5],
          ["gpt-5.4-mini", 0.375, 0.0375, 2.25],
          ["gpt-5.4-nano", 0.1, 0.01, 0.625],
          ["gpt-5.4-pro (<272K context length)", 15, "", 90],
          ["gpt-5.2", 0.875, 0.0875, 7],
          ["gpt-5.2-pro", 10.5, "-", 84],
          ["gpt-5.1", 0.625, 0.0625, 5],
          ["gpt-5", 0.625, 0.0625, 5],
          ["gpt-5-mini", 0.125, 0.0125, 1],
          ["gpt-5-nano", 0.025, 0.0025, 0.2],
          ["gpt-5-pro", 7.5, "-", 60],
          ["gpt-4.1", 1, "-", 4],
          ["gpt-4.1-mini", 0.2, "-", 0.8],
          ["gpt-4.1-nano", 0.05, "-", 0.2],
          ["gpt-4o", 1.25, "-", 5],
          ["gpt-4o-2024-05-13", 2.5, null, 7.5],
          ["gpt-4o-mini", 0.075, "-", 0.3],
          ["o1", 7.5, "-", 30],
          ["o1-pro", 75, "-", 300],
          ["o3-pro", 10, "-", 40],
          ["o3", 1, "-", 4],
          ["o4-mini", 0.55, "-", 2.2],
          ["o3-mini", 0.55, "-", 2.2],
          ["o1-mini", 0.55, "-", 2.2],
          ["gpt-4-turbo-2024-04-09", 5, null, 15],
          ["gpt-4-0125-preview", 5, null, 15],
          ["gpt-4-1106-preview", 5, null, 15],
          ["gpt-4-1106-vision-preview", 5, null, 15],
          ["gpt-4-0613", 15, null, 30],
          ["gpt-4-0314", 15, null, 30],
          ["gpt-4-32k", 30, null, 60],
          ["gpt-3.5-turbo-0125", 0.25, null, 0.75],
          ["gpt-3.5-turbo-1106", 1, null, 2],
          ["gpt-3.5-turbo-0613", 1.5, null, 2],
          ["gpt-3.5-0301", 1.5, null, 2],
          ["gpt-3.5-turbo-16k-0613", 1.5, null, 2],
          ["davinci-002", 1, null, 1],
          ["babbage-002", 0.2, null, 0.2],
        ]}
      />
    </div>
    <div data-content-switcher-pane data-value="flex" hidden>
      <div class="hidden">Flex</div>

      <TextTokenPricingTables
        client:load
        tier="flex"
        latestSectionLabel={null}
        allModelsFootnote={pricingHtml(
          'Regional processing (data residency) endpoints are charged a 10% uplift for <code>gpt-5.4</code>, <code>gpt-5.4-mini</code>, <code>gpt-5.4-nano</code>, and <code>gpt-5.4-pro</code>. See our <a href="/api/docs/guides/your-data">Your data</a> guide for supported regions and processing details.'
        )}
        rows={[
          ["gpt-5.4 (<272K context length)", 1.25, 0.13, 7.5],
          ["gpt-5.4-mini", 0.375, 0.0375, 2.25],
          ["gpt-5.4-nano", 0.1, 0.01, 0.625],
          ["gpt-5.4-pro (<272K context length)", 15, "", 90],
          ["gpt-5.2", 0.875, 0.0875, 7],
          ["gpt-5.1", 0.625, 0.0625, 5],
          ["gpt-5", 0.625, 0.0625, 5],
          ["gpt-5-mini", 0.125, 0.0125, 1],
          ["gpt-5-nano", 0.025, 0.0025, 0.2],
          ["o3", 1, 0.25, 4],
          ["o4-mini", 0.55, 0.138, 2.2],
        ]}
      />
    </div>
    <div data-content-switcher-pane data-value="priority" hidden>
      <div class="hidden">Priority</div>

      <TextTokenPricingTables
        client:load
        tier="priority"
        latestSectionLabel={null}
        allModelsFootnote={pricingHtml(
          'Regional processing (data residency) endpoints are charged a 10% uplift for <code>gpt-5.4</code>, <code>gpt-5.4-mini</code>, <code>gpt-5.4-nano</code>, and <code>gpt-5.4-pro</code>. See our <a href="/api/docs/guides/your-data">Your data</a> guide for supported regions and processing details.'
        )}
        rows={[
          ["gpt-5.4 (<272K context length)", 5, 0.5, 30],
          ["gpt-5.2", 3.5, 0.35, 28],
          ["gpt-5.1", 2.5, 0.25, 20],
          ["gpt-5", 2.5, 0.25, 20],
          ["gpt-5-mini", 0.45, 0.045, 3.6],
          ["gpt-4.1", 3.5, 0.875, 14],
          ["gpt-4.1-mini", 0.7, 0.175, 2.8],
          ["gpt-4.1-nano", 0.2, 0.05, 0.8],
          ["gpt-4o", 4.25, 2.125, 17],
          ["gpt-4o-2024-05-13", 8.75, null, 26.25],
          ["gpt-4o-mini", 0.25, 0.125, 1],
          ["o3", 3.5, 0.875, 14],
          ["o4-mini", 2, 0.5, 8],
        ]}
      />
    </div>


</div>

<div className="pricing-switcher-layout">
  <div className="pricing-switcher-header pricing-section-heading">
    

Multimodal models


  </div>
</div>

<div className="pricing-subsection pricing-section-heading pricing-multimodal-subsection">
  

Realtime and audio generation models


</div>
<p className="pricing-section-meta">Prices per 1M tokens unless noted.</p>
<div className="pricing-subsection pricing-switcher-layout pricing-multimodal-subsection">
  <div className="pricing-switcher-header pricing-section-heading">
    

Image generation models


    <small className="pricing-switcher-meta">Prices per 1M tokens.</small>
  </div>

  

<div data-content-switcher-pane data-value="standard">
      <div class="hidden">Standard</div>

      <div
        className="pricing-section-meta"
        style={{ marginBottom: "12px" }}
        set:html={`Per-image output pricing for GPT Image and DALL·E models is listed in the <a href="/api/docs/guides/image-generation#calculating-costs">Calculating costs</a> section of the image generation guide.`}
      />
      </div>
    <div data-content-switcher-pane data-value="batch" hidden>
      <div class="hidden">Batch</div>

      <div
        className="pricing-section-meta"
        style={{ marginBottom: "12px" }}
        set:html={`Per-image output pricing for GPT Image and DALL·E models is listed in the <a href="/api/docs/guides/image-generation#calculating-costs">Calculating costs</a> section of the image generation guide.`}
      />
      </div>


</div>

<div className="pricing-subsection pricing-switcher-layout pricing-multimodal-subsection">
  <div className="pricing-switcher-header pricing-section-heading">
    

Video generation models


    <small className="pricing-switcher-meta">Prices per second.</small>
  </div>

  

<div data-content-switcher-pane data-value="standard">
      <div class="hidden">Standard</div>

      </div>
    <div data-content-switcher-pane data-value="batch" hidden>
      <div class="hidden">Batch</div>

      </div>


</div>

<div className="pricing-subsection pricing-section-heading pricing-multimodal-subsection">
  

Transcription models


</div>
<p className="pricing-section-meta">Prices per 1M tokens unless noted.</p>
<div className="pricing-subsection pricing-section-heading">
  

Tools


</div>
<GroupedPricingTable
  client:load
  headings={["Tool", "Details", "Pricing"]}
  groupColumnWidth="22%"
  rowFirstColumnWidth="26%"
  cellVerticalAlign="top"
  groups={[
    {
      model: "Web search",
      rows: [
        [
          pricingHtml("<code>gpt-4o</code> and <code>gpt-4.1</code> models"),
          pricingHtml(
            "$10.00 / 1k calls<br /><small>Search content tokens billed at model rates.</small>"
          ),
        ],
        [
          pricingHtml(
            "Reasoning models, including <code>gpt-5</code> and newer"
          ),
          pricingHtml(
            "$25.00 / 1k calls<br /><small>Search content tokens are free.</small>"
          ),
        ],
      ],
    },
    {
      model: "Containers",
      rows: [
        [
          pricingHtml('<span id="container-usage-pricing"></span>Now'),
          "1 GB $0.03, 4 GB $0.12, 16 GB $0.48, 64 GB $1.92 per container",
        ],
        [
          "Starting March 31, 2026",
          "1 GB $0.03, 4 GB $0.12, 16 GB $0.48, 64 GB $1.92 per 20-minute session per container",
        ],
      ],
    },
    {
      model: "File search",
      rows: [
        ["Storage", "$0.10 / GB per day (1 GB free)"],
        ["Tool call", "$2.50 / 1k calls"],
      ],
    },
    {
      model: "Agent Kit",
      rows: [
        [
          "ChatKit file and image upload storage",
          "$0.10 / GB-day after 1 GB free per account per month",
        ],
      ],
    },
  ]}
/>
<div
  className="pricing-section-meta"
  style={{ marginTop: "16px" }}
  set:html={`Tokens used for built-in tools are billed at the chosen model's per-token rates. GB refers to binary gigabytes (also known as gibibytes), where 1 GB is 2^30 bytes. Web search content tokens are tokens retrieved from the search index and fed to the model alongside your prompt to generate an answer. For <code>gpt-4o-mini</code> and <code>gpt-4.1-mini</code> with the non-preview web search tool, search content tokens are billed as a fixed block of 8,000 input tokens per call. File search tool call pricing applies to the Responses API only. Container pricing includes <a href="/api/docs/guides/tools-shell#hosted-shell-quickstart">Hosted Shell</a> and <a href="/api/docs/guides/tools-code-interpreter">Code Interpreter</a>. Responses API, Chat Completions API, Realtime API, Batch API, and Assistants API are not priced separately. Tokens are billed at the chosen model's input and output rates.`}
/>

<div className="pricing-subsection pricing-switcher-layout">
  <div className="pricing-switcher-header pricing-section-heading">
    

Specialized models


    <small className="pricing-switcher-meta">Prices per 1M tokens.</small>
  </div>

  

<div data-content-switcher-pane data-value="standard">
      <div class="hidden">Standard</div>

      <small>Web search tool call charges also apply.</small>"
                ),
              ],
            ],
          },
          {
            model: "Deep research",
            rows: [
              ["o3-deep-research", 10, 2.5, 40],
              ["o4-mini-deep-research", 2, 0.5, 8],
            ],
          },
          {
            model: "Computer use",
            rows: [["computer-use-preview", 3, "-", 12]],
          },
          {
            model: "Embedding",
            rows: [
              ["text-embedding-3-small", 0.02, "-", "-"],
              ["text-embedding-3-large", 0.13, "-", "-"],
              ["text-embedding-ada-002", 0.1, "-", "-"],
            ],
          },
          {
            model: "Moderation",
            rows: [
              ["omni-moderation-latest", "Free", "-", "-"],
              ["text-moderation-latest", "Free", "-", "-"],
            ],
          },
        ]}
      />
    </div>
    <div data-content-switcher-pane data-value="batch" hidden>
      <div class="hidden">Batch</div>

      </div>
    <div data-content-switcher-pane data-value="priority" hidden>
      <div class="hidden">Priority</div>

      </div>


</div>

<div className="pricing-subsection pricing-switcher-layout">
  <div className="pricing-switcher-header pricing-section-heading">
    

Finetuning


    <small className="pricing-switcher-meta">Prices per 1M tokens.</small>
  </div>

  

<div data-content-switcher-pane data-value="standard">
      <div class="hidden">Standard</div>

      </div>
    <div data-content-switcher-pane data-value="batch" hidden>
      <div class="hidden">Batch</div>

      </div>


</div>
<div
  className="pricing-section-meta"
  set:html={`Tokens used for model grading in reinforcement fine-tuning are billed at that model's per-token rate. Inference discounts are available if you enable data sharing when creating the fine-tune job. <a href="https://help.openai.com/en/articles/10306912-sharing-feedback-evaluation-and-fine-tuning-data-and-api-inputs-and-outputs-with-openai#h_c93188c569">Learn more</a>.`}
/>

---

# Developer quickstart

import {
  Assistant,
  Camera,
  ChatTripleDots,
  Code,
  Bolt,
  Speed,
  SquarePlus,
} from "@components/react/oai/platform/ui/Icon.react";


















The OpenAI API provides a simple interface to state-of-the-art AI [models](https://developers.openai.com/api/docs/models) for text generation, natural language processing, computer vision, and more. Get started by creating an API Key and running your first API call. Discover how to generate text, analyze images, build agents, and more.

## Create and export an API key



StatsigClient.logEvent("quickstart_create_api_key_click", null, null)
  }
>
  Create an API Key


<p></p>
Before you begin, create an API key in the dashboard, which you'll use to
securely [access the API](https://developers.openai.com/api/docs/api-reference/authentication). Store the key
in a safe location, like a [`.zshrc`
file](https://www.freecodecamp.org/news/how-do-zsh-configuration-files-work/) or
another text file on your computer. Once you've generated an API key, export it
as an [environment variable](https://en.wikipedia.org/wiki/Environment_variable)
in your terminal.



<div data-content-switcher-pane data-value="macOS">
    <div class="hidden">macOS / Linux</div>
    Export an environment variable on macOS or Linux systems

```bash
export OPENAI_API_KEY="your_api_key_here"
```

  </div>
  <div data-content-switcher-pane data-value="windows" hidden>
    <div class="hidden">Windows</div>
    Export an environment variable in PowerShell

```bash
setx OPENAI_API_KEY "your_api_key_here"
```

  </div>



OpenAI SDKs are configured to automatically read your API key from the system environment.

## Install the OpenAI SDK and Run an API Call



<div data-content-switcher-pane data-value="javascript">
    <div class="hidden">JavaScript</div>
    </div>
  <div data-content-switcher-pane data-value="python" hidden>
    <div class="hidden">Python</div>
    </div>
  <div data-content-switcher-pane data-value="csharp" hidden>
    <div class="hidden">.NET</div>
    </div>
  <div data-content-switcher-pane data-value="java" hidden>
    <div class="hidden">Java</div>
    </div>
  <div data-content-switcher-pane data-value="golang" hidden>
    <div class="hidden">Go</div>
    </div>


<a
  href="https://github.com/openai/openai-responses-starter-app"
  target="_blank"
  rel="noreferrer"
>
  

<span slot="icon">
      </span>
    Start building with the Responses API.


</a>

[

<span slot="icon">
      </span>
    Learn more about prompting, message roles, and building conversational apps.

](https://developers.openai.com/api/docs/guides/text)

## Add credits to keep building



StatsigClient.logEvent("quickstart_add_credits_billing_click", null, null)
  }
>
  Go to billing


{/* prettier-ignore */}
<div className="mt-2">Congrats on running a free test API request! Start building real applications with higher limits and use <a href="/api/docs/models" target="_blank">our models</a> to generate text, audio, images, videos and more.</div>

<div className="mt-2">
  Access dashboard features designed to help you ship faster:
</div>
<a
  href="https://platform.openai.com/chat"
  target="_blank"
  rel="noreferrer"
  onClick={() =>
    StatsigClient.logEvent(
      "quickstart_add_credits_chat_playground_click",
      null,
      null
    )
  }
>
  

<span slot="icon">
      </span>
    Build & test conversational prompts and embed them in your app.


</a>
<a
  href="https://platform.openai.com/agent-builder"
  target="_blank"
  rel="noreferrer"
  onClick={() =>
    StatsigClient.logEvent(
      "quickstart_add_credits_agent_builder_click",
      null,
      null
    )
  }
>
  

<span slot="icon">
      </span>
    Build, deploy, and optimize agent workflows.


</a>

## Analyze images and files

Send image URLs, uploaded files, or PDF documents directly to the model to extract text, classify content, or detect visual elements.



<div data-content-switcher-pane data-value="image-url">
    <div class="hidden">Image URL</div>
    </div>
  <div data-content-switcher-pane data-value="file-url" hidden>
    <div class="hidden">File URL</div>
    Use a file URL as input

```bash
curl "https://api.openai.com/v1/responses" \\
    -H "Content-Type: application/json" \\
    -H "Authorization: Bearer $OPENAI_API_KEY" \\
    -d '{
        "model": "gpt-5",
        "input": [
            {
                "role": "user",
                "content": [
                    {
                        "type": "input_text",
                        "text": "Analyze the letter and provide a summary of the key points."
                    },
                    {
                        "type": "input_file",
                        "file_url": "https://www.berkshirehathaway.com/letters/2024ltr.pdf"
                    }
                ]
            }
        ]
    }'
```

```javascript
import OpenAI from "openai";
const client = new OpenAI();

const response = await client.responses.create({
    model: "gpt-5",
    input: [
        {
            role: "user",
            content: [
                {
                    type: "input_text",
                    text: "Analyze the letter and provide a summary of the key points.",
                },
                {
                    type: "input_file",
                    file_url: "https://www.berkshirehathaway.com/letters/2024ltr.pdf",
                },
            ],
        },
    ],
});

console.log(response.output_text);
```

```python
from openai import OpenAI
client = OpenAI()

response = client.responses.create(
    model="gpt-5",
    input=[
        {
            "role": "user",
            "content": [
                {
                    "type": "input_text",
                    "text": "Analyze the letter and provide a summary of the key points.",
                },
                {
                    "type": "input_file",
                    "file_url": "https://www.berkshirehathaway.com/letters/2024ltr.pdf",
                },
            ],
        },
    ]
)

print(response.output_text)
```

```csharp
using OpenAI.Files;
using OpenAI.Responses;

string key = Environment.GetEnvironmentVariable("OPENAI_API_KEY")!;
OpenAIResponseClient client = new(model: "gpt-5", apiKey: key);

using HttpClient http = new();
using Stream stream = await http.GetStreamAsync("https://www.berkshirehathaway.com/letters/2024ltr.pdf");
OpenAIFileClient files = new(key);
OpenAIFile file = files.UploadFile(stream, "2024ltr.pdf", FileUploadPurpose.UserData);

OpenAIResponse response = (OpenAIResponse)client.CreateResponse([
    ResponseItem.CreateUserMessageItem([
        ResponseContentPart.CreateInputTextPart("Analyze the letter and provide a summary of the key points."),
        ResponseContentPart.CreateInputFilePart(file.Id),
    ]),
]);

Console.WriteLine(response.GetOutputText());
```

  </div>
  <div data-content-switcher-pane data-value="file-upload" hidden>
    <div class="hidden">Upload file</div>
    Upload a file and use it as input

```bash
curl https://api.openai.com/v1/files \\
    -H "Authorization: Bearer $OPENAI_API_KEY" \\
    -F purpose="user_data" \\
    -F file="@draconomicon.pdf"

curl "https://api.openai.com/v1/responses" \\
    -H "Content-Type: application/json" \\
    -H "Authorization: Bearer $OPENAI_API_KEY" \\
    -d '{
        "model": "gpt-5",
        "input": [
            {
                "role": "user",
                "content": [
                    {
                        "type": "input_file",
                        "file_id": "file-6F2ksmvXxt4VdoqmHRw6kL"
                    },
                    {
                        "type": "input_text",
                        "text": "What is the first dragon in the book?"
                    }
                ]
            }
        ]
    }'
```

```javascript
import fs from "fs";
import OpenAI from "openai";
const client = new OpenAI();

const file = await client.files.create({
    file: fs.createReadStream("draconomicon.pdf"),
    purpose: "user_data",
});

const response = await client.responses.create({
    model: "gpt-5",
    input: [
        {
            role: "user",
            content: [
                {
                    type: "input_file",
                    file_id: file.id,
                },
                {
                    type: "input_text",
                    text: "What is the first dragon in the book?",
                },
            ],
        },
    ],
});

console.log(response.output_text);
```

```python
from openai import OpenAI
client = OpenAI()

file = client.files.create(
    file=open("draconomicon.pdf", "rb"),
    purpose="user_data"
)

response = client.responses.create(
    model="gpt-5",
    input=[
        {
            "role": "user",
            "content": [
                {
                    "type": "input_file",
                    "file_id": file.id,
                },
                {
                    "type": "input_text",
                    "text": "What is the first dragon in the book?",
                },
            ]
        }
    ]
)

print(response.output_text)
```

```csharp
using OpenAI.Files;
using OpenAI.Responses;

string key = Environment.GetEnvironmentVariable("OPENAI_API_KEY")!;
OpenAIResponseClient client = new(model: "gpt-5", apiKey: key);

OpenAIFileClient files = new(key);
OpenAIFile file = files.UploadFile("draconomicon.pdf", FileUploadPurpose.UserData);

OpenAIResponse response = (OpenAIResponse)client.CreateResponse([
    ResponseItem.CreateUserMessageItem([
        ResponseContentPart.CreateInputFilePart(file.Id),
        ResponseContentPart.CreateInputTextPart("What is the first dragon in the book?"),
    ]),
]);

Console.WriteLine(response.GetOutputText());
```

  </div>



[

<span slot="icon">
      </span>
    Learn to use image inputs to the model and extract meaning from images.

](https://developers.openai.com/api/docs/guides/images)

[

<span slot="icon">
      </span>
    Learn to use file inputs to the model and extract meaning from documents.

](https://developers.openai.com/api/docs/guides/file-inputs)

## Extend the model with tools

Give the model access to external data and functions by attaching [tools](https://developers.openai.com/api/docs/guides/tools). Use built-in tools like web search or file search, or define your own for calling APIs, running code, or integrating with third-party systems.



<div data-content-switcher-pane data-value="web-search">
    <div class="hidden">Web search</div>
    </div>
  <div data-content-switcher-pane data-value="file-search" hidden>
    <div class="hidden">File search</div>
    Search your files in a response

```python
from openai import OpenAI
client = OpenAI()

response = client.responses.create(
    model="gpt-4.1",
    input="What is deep research by OpenAI?",
    tools=[{
        "type": "file_search",
        "vector_store_ids": ["<vector_store_id>"]
    }]
)
print(response)
```

```javascript
import OpenAI from "openai";
const openai = new OpenAI();

const response = await openai.responses.create({
    model: "gpt-4.1",
    input: "What is deep research by OpenAI?",
    tools: [
        {
            type: "file_search",
            vector_store_ids: ["<vector_store_id>"],
        },
    ],
});
console.log(response);
```

```csharp
using OpenAI.Responses;

string key = Environment.GetEnvironmentVariable("OPENAI_API_KEY")!;
OpenAIResponseClient client = new(model: "gpt-5", apiKey: key);

ResponseCreationOptions options = new();
options.Tools.Add(ResponseTool.CreateFileSearchTool(["<vector_store_id>"]));

OpenAIResponse response = (OpenAIResponse)client.CreateResponse([
    ResponseItem.CreateUserMessageItem([
        ResponseContentPart.CreateInputTextPart("What is deep research by OpenAI?"),
    ]),
], options);

Console.WriteLine(response.GetOutputText());
```

  </div>
  <div data-content-switcher-pane data-value="function-calling" hidden>
    <div class="hidden">Function calling</div>
    </div>
  <div data-content-switcher-pane data-value="remote-mcp" hidden>
    <div class="hidden">Remote MCP</div>
    Call a remote MCP server

```bash
curl https://api.openai.com/v1/responses \\ 
-H "Content-Type: application/json" \\ 
-H "Authorization: Bearer $OPENAI_API_KEY" \\ 
-d '{
  "model": "gpt-5",
    "tools": [
      {
        "type": "mcp",
        "server_label": "dmcp",
        "server_description": "A Dungeons and Dragons MCP server to assist with dice rolling.",
        "server_url": "https://dmcp-server.deno.dev/sse",
        "require_approval": "never"
      }
    ],
    "input": "Roll 2d4+1"
  }'
```

```javascript
import OpenAI from "openai";
const client = new OpenAI();

const resp = await client.responses.create({
  model: "gpt-5",
  tools: [
    {
      type: "mcp",
      server_label: "dmcp",
      server_description: "A Dungeons and Dragons MCP server to assist with dice rolling.",
      server_url: "https://dmcp-server.deno.dev/sse",
      require_approval: "never",
    },
  ],
  input: "Roll 2d4+1",
});

console.log(resp.output_text);
```

```python
from openai import OpenAI

client = OpenAI()

resp = client.responses.create(
    model="gpt-5",
    tools=[
        {
            "type": "mcp",
            "server_label": "dmcp",
            "server_description": "A Dungeons and Dragons MCP server to assist with dice rolling.",
            "server_url": "https://dmcp-server.deno.dev/sse",
            "require_approval": "never",
        },
    ],
    input="Roll 2d4+1",
)

print(resp.output_text)
```

```csharp
using OpenAI.Responses;

string key = Environment.GetEnvironmentVariable("OPENAI_API_KEY")!;
OpenAIResponseClient client = new(model: "gpt-5", apiKey: key);

ResponseCreationOptions options = new();
options.Tools.Add(ResponseTool.CreateMcpTool(
    serverLabel: "dmcp",
    serverUri: new Uri("https://dmcp-server.deno.dev/sse"),
    toolCallApprovalPolicy: new McpToolCallApprovalPolicy(GlobalMcpToolCallApprovalPolicy.NeverRequireApproval)
));

OpenAIResponse response = (OpenAIResponse)client.CreateResponse([
    ResponseItem.CreateUserMessageItem([
        ResponseContentPart.CreateInputTextPart("Roll 2d4+1")
    ])
], options);

Console.WriteLine(response.GetOutputText());
```

  </div>



[

<span slot="icon">
      </span>
    Learn about powerful built-in tools like web search and file search.

](https://developers.openai.com/api/docs/guides/tools)

[

<span slot="icon">
      </span>
    Learn to enable the model to call your own custom code.

](https://developers.openai.com/api/docs/guides/function-calling)

## Stream responses and build realtime apps

Use server‑sent [streaming events](https://developers.openai.com/api/docs/guides/streaming-responses) to show results as they’re generated, or the [Realtime API](https://developers.openai.com/api/docs/guides/realtime) for interactive voice and multimodal apps.

[

<span slot="icon">
      </span>
    Use server-sent events to stream model responses to users fast.

](https://developers.openai.com/api/docs/guides/streaming-responses)

[

<span slot="icon">
      </span>
    Use WebRTC or WebSockets for super fast speech-to-speech AI apps.

](https://developers.openai.com/api/docs/guides/realtime)

## Build agents

Use the OpenAI platform to build [agents](https://developers.openai.com/api/docs/guides/agents) capable of taking action—like [controlling computers](https://developers.openai.com/api/docs/guides/tools-computer-use)—on behalf of your users. Use the Agents SDK for [Python](https://openai.github.io/openai-agents-python) or [TypeScript](https://openai.github.io/openai-agents-js) to create orchestration logic on the backend.

[

<span slot="icon">
      </span>
    Learn how to use the OpenAI platform to build powerful, capable AI agents.

](https://developers.openai.com/api/docs/guides/agents)

---

# Supported countries and territories

Accessing or offering access to our services outside of the countries and territories listed below may result in your account being blocked or suspended.

- Albania
- Algeria
- Afghanistan
- Andorra
- Angola
- Antigua and Barbuda
- Argentina
- Armenia
- Australia
- Austria
- Azerbaijan
- Bahamas
- Bahrain
- Bangladesh
- Barbados
- Belgium
- Belize
- Benin
- Bhutan
- Bolivia
- Bosnia and Herzegovina
- Botswana
- Brazil
- Brunei
- Bulgaria
- Burkina Faso
- Burundi
- Cabo Verde
- Cambodia
- Cameroon
- Canada
- Central African Republic
- Chad
- Chile
- Colombia
- Comoros
- Congo (Brazzaville)
- Congo (DRC)
- Costa Rica
- Côte d'Ivoire
- Croatia
- Cyprus
- Czechia (Czech Republic)
- Denmark
- Djibouti
- Dominica
- Dominican Republic
- Ecuador
- Egypt
- El Salvador
- Equatorial Guinea
- Eritrea
- Estonia
- Eswatini (Swaziland)
- Ethiopia
- Fiji
- Finland
- France
- Gabon
- Gambia
- Georgia
- Germany
- Ghana
- Greece
- Grenada
- Guatemala
- Guinea
- Guinea-Bissau
- Guyana
- Haiti
- Holy See (Vatican City)
- Honduras
- Hungary
- Iceland
- India
- Indonesia
- Iraq
- Ireland
- Israel
- Italy
- Jamaica
- Japan
- Jordan
- Kazakhstan
- Kenya
- Kiribati
- Kuwait
- Kyrgyzstan
- Laos
- Latvia
- Lebanon
- Lesotho
- Liberia
- Libya
- Liechtenstein
- Lithuania
- Luxembourg
- Madagascar
- Malawi
- Malaysia
- Maldives
- Mali
- Malta
- Marshall Islands
- Mauritania
- Mauritius
- Mexico
- Micronesia
- Moldova
- Monaco
- Mongolia
- Montenegro
- Morocco
- Mozambique
- Myanmar
- Namibia
- Nauru
- Nepal
- Netherlands
- New Zealand
- Nicaragua
- Niger
- Nigeria
- North Macedonia
- Norway
- Oman
- Pakistan
- Palau
- Palestine
- Panama
- Papua New Guinea
- Paraguay
- Peru
- Philippines
- Poland
- Portugal
- Qatar
- Romania
- Rwanda
- Saint Kitts and Nevis
- Saint Lucia
- Saint Vincent and the Grenadines
- Samoa
- San Marino
- Sao Tome and Principe
- Saudi Arabia
- Senegal
- Serbia
- Seychelles
- Sierra Leone
- Singapore
- Slovakia
- Slovenia
- Solomon Islands
- Somalia
- South Africa
- South Korea
- South Sudan
- Spain
- Sri Lanka
- Suriname
- Sweden
- Switzerland
- Sudan
- Taiwan
- Tajikistan
- Tanzania
- Thailand
- Timor-Leste (East Timor)
- Togo
- Tonga
- Trinidad and Tobago
- Tunisia
- Turkey
- Turkmenistan
- Tuvalu
- Uganda
- Ukraine (with certain exceptions)
- United Arab Emirates
- United Kingdom
- United States of America
- Uruguay
- Uzbekistan
- Vanuatu
- Vietnam
- Yemen
- Zambia
- Zimbabwe

---

# Meeting minutes

In this tutorial, we'll harness the power of OpenAI's Whisper and GPT-4 models to develop an automated meeting minutes generator. The application transcribes audio from a meeting, provides a summary of the discussion, extracts key points and action items, and performs a sentiment analysis.

## Getting started

This tutorial assumes a basic understanding of Python and an [OpenAI API key](https://platform.openai.com/settings/organization/api-keys). You can use the audio file provided with this tutorial or your own.

Additionally, you will need to install the [python-docx](https://python-docx.readthedocs.io/en/latest/) and [OpenAI](https://developers.openai.com/api/docs/libraries) libraries. You can create a new Python environment and install the required packages with the following commands:

```bash
python -m venv env

source env/bin/activate

pip install openai
pip install python-docx
```

## Transcribing audio with Whisper

<div className="sandbox-preview">
  <div className="sandbox-screenshot-small">
    </div>
  <div className="preview-info">
    <div className="description">
      The first step in transcribing the audio from a meeting is to pass the
      audio file of the meeting into our{" "}
      <a href="/api/docs/api-reference/audio">/v1/audio API</a>. Whisper, the
      model that powers the audio API, is capable of converting spoken language
      into written text. To start, we will avoid passing a{" "}
      <a href="/api/docs/api-reference/audio/createTranscription#audio/createTranscription-prompt">
        prompt
      </a>{" "}
      or{" "}
      <a href="/api/docs/api-reference/audio/createTranscription#audio/createTranscription-temperature-4">
        temperature
      </a>{" "}
      (optional parameters to control the model's output) and stick with the
      default values.
    </div>
    <div className="actions">
      

Download sample audio


    </div>
  </div>
</div>

<br />

Next, we import the required packages and define a function that uses the Whisper model to take in the audio file and
transcribe it:

```python
from openai import OpenAI

client = OpenAI(
    # defaults to os.environ.get("OPENAI_API_KEY")
    # api_key="My API Key",
)
from docx import Document

def transcribe_audio(audio_file_path):
    with open(audio_file_path, 'rb') as audio_file:
        transcription = client.audio.transcriptions.create("whisper-1", audio_file)
    return transcription['text']
```

In this function, `audio_file_path` is the path to the audio file you want to transcribe. The function opens this file and passes it to the Whisper ASR model (`whisper-1`) for transcription. The result is returned as raw text. It’s important to note that the `openai.Audio.transcribe` function requires the actual audio file to be passed in, not just the path to the file locally or on a remote server. This means that if you are running this code on a server where you might not also be storing your audio files, you will need to have a preprocessing step that first downloads the audio files onto that device.

## Summarizing and analyzing the transcript with GPT-4

Having obtained the transcript, we now pass it to GPT-4 via the [Chat Completions API](https://developers.openai.com/api/docs/api-reference/chat/create). GPT-4 is OpenAI's state-of-the-art large language model which we'll use to generate a summary, extract key points, action items, and perform sentiment analysis.

This tutorial uses distinct functions for each task we want GPT-4 to perform. This is not the most efficient way to do this task - you can put these instructions into one function, however, splitting them up can lead to higher quality summarization.

To split the tasks up, we define the `meeting_minutes` function which will serve as the main function of this application:

```python
def meeting_minutes(transcription):
    abstract_summary = abstract_summary_extraction(transcription)
    key_points = key_points_extraction(transcription)
    action_items = action_item_extraction(transcription)
    sentiment = sentiment_analysis(transcription)
    return {
        'abstract_summary': abstract_summary,
        'key_points': key_points,
        'action_items': action_items,
        'sentiment': sentiment
    }
```

In this function, `transcription` is the text we obtained from Whisper. The transcription can be passed to the four other functions, each designed to perform a specific task: `abstract_summary_extraction` generates a summary of the meeting, `key_points_extraction` extracts the main points, `action_item_extraction` identifies the action items, and `sentiment_analysis performs` a sentiment analysis. If there are other capabilities you want, you can add those in as well using the same framework shown above.

Here is how each of these functions works:

### Summary extraction

The `abstract_summary_extraction` function takes the transcription and summarizes it into a concise abstract paragraph with the aim to retain the most important points while avoiding unnecessary details or tangential points. The main mechanism to enable this process is the system message as shown below. There are many different possible ways of achieving similar results through the process commonly referred to as prompt engineering. You can read our [prompt engineering guide](https://developers.openai.com/api/docs/guides/prompt-engineering) which gives in depth advice on how to do this most effectively.

```python
def abstract_summary_extraction(transcription):
    response = client.chat.completions.create(
        model="gpt-4",
        temperature=0,
        messages=[
            {
                "role": "system",
                "content": "You are a highly skilled AI trained in language comprehension and summarization. I would like you to read the following text and summarize it into a concise abstract paragraph. Aim to retain the most important points, providing a coherent and readable summary that could help a person understand the main points of the discussion without needing to read the entire text. Please avoid unnecessary details or tangential points."
            },
            {
                "role": "user",
                "content": transcription
            }
        ]
    )
    return completion.choices[0].message.content
```

### Key points extraction

The `key_points_extraction` function identifies and lists the main points discussed in the meeting. These points should represent the most important ideas, findings, or topics crucial to the essence of the discussion. Again, the main mechanism for controlling the way these points are identified is the system message. You might want to give some additional context here around the way your project or company runs such as “We are a company that sells race cars to consumers. We do XYZ with the goal of XYZ”. This additional context could dramatically improve the models ability to extract information that is relevant.

```python

def key_points_extraction(transcription):
    response = client.chat.completions.create(
        model="gpt-4",
        temperature=0,
        messages=[
            {
                "role": "system",
                "content": "You are a proficient AI with a specialty in distilling information into key points. Based on the following text, identify and list the main points that were discussed or brought up. These should be the most important ideas, findings, or topics that are crucial to the essence of the discussion. Your goal is to provide a list that someone could read to quickly understand what was talked about."
            },
            {
                "role": "user",
                "content": transcription
            }
        ]
    )
    return completion.choices[0].message.content
```

### Action item extraction

The `action_item_extraction` function identifies tasks, assignments, or actions agreed upon or mentioned during the meeting. These could be tasks assigned to specific individuals or general actions the group decided to take. While not covered in this tutorial, the Chat Completions API provides a [function calling capability](https://developers.openai.com/api/docs/guides/function-calling) which would allow you to build in the ability to automatically create tasks in your task management software and assign it to the relevant person.

```python

def action_item_extraction(transcription):
    response = client.chat.completions.create(
        model="gpt-4",
        temperature=0,
        messages=[
            {
                "role": "system",
                "content": "You are an AI expert in analyzing conversations and extracting action items. Please review the text and identify any tasks, assignments, or actions that were agreed upon or mentioned as needing to be done. These could be tasks assigned to specific individuals, or general actions that the group has decided to take. Please list these action items clearly and concisely."
            },
            {
                "role": "user",
                "content": transcription
            }
        ]
    )
    return completion.choices[0].message.content
```

### Sentiment analysis

The `sentiment_analysis` function analyzes the overall sentiment of the discussion. It considers the tone, the emotions conveyed by the language used, and the context in which words and phrases are used. For tasks which are less complicated, it may also be worthwhile to try out `gpt-3.5-turbo` in addition to `gpt-4` to see if you can get a similar level of performance. It might also be useful to experiment with taking the results of the `sentiment_analysis` function and passing it to the other functions to see how having the sentiment of the conversation impacts the other attributes.

```python
def sentiment_analysis(transcription):
    response = client.chat.completions.create(
        model="gpt-4",
        temperature=0,
        messages=[
            {
                "role": "system",
                "content": "As an AI with expertise in language and emotion analysis, your task is to analyze the sentiment of the following text. Please consider the overall tone of the discussion, the emotion conveyed by the language used, and the context in which words and phrases are used. Indicate whether the sentiment is generally positive, negative, or neutral, and provide brief explanations for your analysis where possible."
            },
            {
                "role": "user",
                "content": transcription
            }
        ]
    )
    return completion.choices[0].message.content
```

## Exporting meeting minutes

<div className="sandbox-preview">
  <div className="sandbox-screenshot-small">
    </div>
  <div className="preview-info">
    <div className="description">
      Once we've generated the meeting minutes, it's beneficial to save them
      into a readable format that can be easily distributed. One common format
      for such reports is Microsoft Word. The Python docx library is a popular
      open source library for creating Word documents. If you wanted to build an
      end-to-end meeting minute application, you might consider removing this
      export step in favor of sending the summary inline as an email followup.
    </div>
  </div>
</div>

<br></br>

To handle the exporting process, define a function `save_as_docx` that converts the raw text to a Word document:

```python
def save_as_docx(minutes, filename):
    doc = Document()
    for key, value in minutes.items():
        # Replace underscores with spaces and capitalize each word for the heading
        heading = ' '.join(word.capitalize() for word in key.split('_'))
        doc.add_heading(heading, level=1)
        doc.add_paragraph(value)
        # Add a line break between sections
        doc.add_paragraph()
    doc.save(filename)
```

In this function, minutes is a dictionary containing the abstract summary, key points, action items, and sentiment analysis from the meeting. Filename is the name of the Word document file to be created. The function creates a new Word document, adds headings and content for each part of the minutes, and then saves the document to the current working directory.

Finally, you can put it all together and generate the meeting minutes from an audio file:

```python
audio_file_path = "Earningscall.wav"
transcription = transcribe_audio(audio_file_path)
minutes = meeting_minutes(transcription)
print(minutes)

save_as_docx(minutes, 'meeting_minutes.docx')
```

This code will transcribe the audio file `Earningscall.wav`, generates the meeting minutes, prints them, and then saves them into a Word document called `meeting_minutes.docx`.

Now that you have the basic meeting minutes processing setup, consider trying to optimize the performance with [prompt engineering](https://developers.openai.com/api/docs/guides/prompt-engineering) or build an end-to-end system with native [function calling](https://developers.openai.com/api/docs/guides/function-calling).

---

# Web QA with embeddings

This tutorial walks through a simple example of crawling a website (in this example, the OpenAI website), turning the crawled pages into embeddings using the [Embeddings API](https://developers.openai.com/api/docs/guides/embeddings), and then creating a basic search functionality that allows a user to ask questions about the embedded information. This is intended to be a starting point for more sophisticated applications that make use of custom knowledge bases.

# Getting started

Some basic knowledge of Python and GitHub is helpful for this tutorial. Before diving in, make sure to [set up an OpenAI API key](https://developers.openai.com/api/docs/api-reference/introduction) and walk through the [quickstart tutorial](https://developers.openai.com/api/docs/quickstart). This will give a good intuition on how to use the API to its full potential.

Python is used as the main programming language along with the OpenAI, Pandas, transformers, NumPy, and other popular packages. If you run into any issues working through this tutorial, please ask a question on the [OpenAI Community Forum](https://community.openai.com).

To start with the code, clone the [full code for this tutorial on GitHub](https://github.com/openai/web-crawl-q-and-a-example). Alternatively, follow along and copy each section into a Jupyter notebook and run the code step by step, or just read along. A good way to avoid any issues is to set up a new virtual environment and install the required packages by running the following commands:

```bash
python -m venv env

source env/bin/activate

pip install -r requirements.txt
```

## Setting up a web crawler

The primary focus of this tutorial is the OpenAI API so if you prefer, you can skip the context on how to create a web crawler and just [download the source code](https://github.com/openai/web-crawl-q-and-a-example). Otherwise, expand the section below to work through the scraping mechanism implementation.

Learn how to build a web crawler

<div className="sandbox-preview">
  <div className="sandbox-screenshot">
    </div>
  <div className="preview-info">
    <div className="description">
      Acquiring data in text form is the first step to use embeddings. This
      tutorial creates a new set of data by crawling the OpenAI website, a
      technique that you can also use for your own company or personal website.
    </div>
    <div className="actions">
      

View source code


    </div>
  </div>
</div>

While this crawler is written from scratch, open source packages like [Scrapy](https://github.com/scrapy/scrapy) can also help with these operations.

This crawler will start from the root URL passed in at the bottom of the code below, visit each page, find additional links, and visit those pages as well (as long as they have the same root domain). To begin, import the required packages, set up the basic URL, and define a HTMLParser class.

```python
import requests
import re
import urllib.request
from bs4 import BeautifulSoup
from collections import deque
from html.parser import HTMLParser
from urllib.parse import urlparse
import os

# Regex pattern to match a URL
HTTP_URL_PATTERN = r'^http[s]*://.+'

domain = "openai.com" # <- put your domain to be crawled
full_url = "https://openai.com/" # <- put your domain to be crawled with https or http

# Create a class to parse the HTML and get the hyperlinks
class HyperlinkParser(HTMLParser):
    def __init__(self):
        super().__init__()
        # Create a list to store the hyperlinks
        self.hyperlinks = []

    # Override the HTMLParser's handle_starttag method to get the hyperlinks
    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)

        # If the tag is an anchor tag and it has an href attribute, add the href attribute to the list of hyperlinks
        if tag == "a" and "href" in attrs:
            self.hyperlinks.append(attrs["href"])
```

The next function takes a URL as an argument, opens the URL, and reads the HTML content. Then, it returns all the hyperlinks found on that page.

```python
# Function to get the hyperlinks from a URL
def get_hyperlinks(url):

    # Try to open the URL and read the HTML
    try:
        # Open the URL and read the HTML
        with urllib.request.urlopen(url) as response:

            # If the response is not HTML, return an empty list
            if not response.info().get('Content-Type').startswith("text/html"):
                return []

            # Decode the HTML
            html = response.read().decode('utf-8')
    except Exception as e:
        print(e)
        return []

    # Create the HTML Parser and then Parse the HTML to get hyperlinks
    parser = HyperlinkParser()
    parser.feed(html)

    return parser.hyperlinks
```

The goal is to crawl through and index only the content that lives under the OpenAI domain. For this purpose, a function that calls the `get_hyperlinks` function but filters out any URLs that are not part of the specified domain is needed.

```python
# Function to get the hyperlinks from a URL that are within the same domain
def get_domain_hyperlinks(local_domain, url):
    clean_links = []
    for link in set(get_hyperlinks(url)):
        clean_link = None

        # If the link is a URL, check if it is within the same domain
        if re.search(HTTP_URL_PATTERN, link):
            # Parse the URL and check if the domain is the same
            url_obj = urlparse(link)
            if url_obj.netloc == local_domain:
                clean_link = link

        # If the link is not a URL, check if it is a relative link
        else:
            if link.startswith("/"):
                link = link[1:]
            elif link.startswith("#") or link.startswith("mailto:"):
                continue
            clean_link = "https://" + local_domain + "/" + link

        if clean_link is not None:
            if clean_link.endswith("/"):
                clean_link = clean_link[:-1]
            clean_links.append(clean_link)

    # Return the list of hyperlinks that are within the same domain
    return list(set(clean_links))
```

The `crawl` function is the final step in the web scraping task setup. It keeps track of the visited URLs to avoid repeating the same page, which might be linked across multiple pages on a site. It also extracts the raw text from a page without the HTML tags, and writes the text content into a local .txt file specific to the page.

```python
def crawl(url):
    # Parse the URL and get the domain
    local_domain = urlparse(url).netloc

    # Create a queue to store the URLs to crawl
    queue = deque([url])

    # Create a set to store the URLs that have already been seen (no duplicates)
    seen = set([url])

    # Create a directory to store the text files
    if not os.path.exists("text/"):
            os.mkdir("text/")

    if not os.path.exists("text/"+local_domain+"/"):
            os.mkdir("text/" + local_domain + "/")

    # Create a directory to store the csv files
    if not os.path.exists("processed"):
            os.mkdir("processed")

    # While the queue is not empty, continue crawling
    while queue:

        # Get the next URL from the queue
        url = queue.pop()
        print(url) # for debugging and to see the progress

        # Save text from the url to a .txt file
        with open('text/'+local_domain+'/'+url[8:].replace("/", "_") + ".txt", "w", encoding="UTF-8") as f:

            # Get the text from the URL using BeautifulSoup
            soup = BeautifulSoup(requests.get(url).text, "html.parser")

            # Get the text but remove the tags
            text = soup.get_text()

            # If the crawler gets to a page that requires JavaScript, it will stop the crawl
            if ("You need to enable JavaScript to run this app." in text):
                print("Unable to parse page " + url + " due to JavaScript being required")

            # Otherwise, write the text to the file in the text directory
            f.write(text)

        # Get the hyperlinks from the URL and add them to the queue
        for link in get_domain_hyperlinks(local_domain, url):
            if link not in seen:
                queue.append(link)
                seen.add(link)

crawl(full_url)
```

The last line of the above example runs the crawler which goes through all the accessible links and turns those pages into text files. This will take a few minutes to run depending on the size and complexity of your site.

## Building an embeddings index

<div className="sandbox-preview">
  <div className="sandbox-screenshot">
    </div>
  <div className="preview-info">
    <div className="description">
      CSV is a common format for storing embeddings. You can use this format
      with Python by converting the raw text files (which are in the text
      directory) into Pandas data frames. Pandas is a popular open source
      library that helps you work with tabular data (data stored in rows and
      columns).
    </div>
    <div className="description">
      Blank empty lines can clutter the text files and make them harder to
      process. A simple function can remove those lines and tidy up the files.
    </div>
  </div>
</div>

```python
def remove_newlines(serie):
    serie = serie.str.replace('\n', ' ')
    serie = serie.str.replace('\\n', ' ')
    serie = serie.str.replace('  ', ' ')
    serie = serie.str.replace('  ', ' ')
    return serie
```

Converting the text to CSV requires looping through the text files in the text directory created earlier. After opening each file, remove the extra spacing and append the modified text to a list. Then, add the text with the new lines removed to an empty Pandas data frame and write the data frame to a CSV file.

Extra spacing and new lines can clutter the text and complicate the embeddings
  process. The code used here helps to remove some of them but you may find 3rd
  party libraries or other methods useful to get rid of more unnecessary
  characters.

```python
import pandas as pd

# Create a list to store the text files
texts=[]

# Get all the text files in the text directory
for file in os.listdir("text/" + domain + "/"):

    # Open the file and read the text
    with open("text/" + domain + "/" + file, "r", encoding="UTF-8") as f:
        text = f.read()

        # Omit the first 11 lines and the last 4 lines, then replace -, _, and #update with spaces.
        texts.append((file[11:-4].replace('-',' ').replace('_', ' ').replace('#update',''), text))

# Create a dataframe from the list of texts
df = pd.DataFrame(texts, columns = ['fname', 'text'])

# Set the text column to be the raw text with the newlines removed
df['text'] = df.fname + ". " + remove_newlines(df.text)
df.to_csv('processed/scraped.csv')
df.head()
```

Tokenization is the next step after saving the raw text into a CSV file. This process splits the input text into tokens by breaking down the sentences and words. A visual demonstration of this can be seen by [checking out our Tokenizer](https://platform.openai.com/tokenizer) in the docs.

> A helpful rule of thumb is that one token generally corresponds to ~4 characters of text for common English text. This translates to roughly ¾ of a word (so 100 tokens ~= 75 words).

The API has a limit on the maximum number of input tokens for embeddings. To stay below the limit, the text in the CSV file needs to be broken down into multiple rows. The existing length of each row will be recorded first to identify which rows need to be split.

```python
import tiktoken

# Load the cl100k_base tokenizer which is designed to work with the ada-002 model
tokenizer = tiktoken.get_encoding("cl100k_base")

df = pd.read_csv('processed/scraped.csv', index_col=0)
df.columns = ['title', 'text']

# Tokenize the text and save the number of tokens to a new column
df['n_tokens'] = df.text.apply(lambda x: len(tokenizer.encode(x)))

# Visualize the distribution of the number of tokens per row using a histogram
df.n_tokens.hist()
```

<div className="sandbox-preview">
  <div className="sandbox-screenshot">
    <img src="https://cdn.openai.com/API/docs/images/tutorials/web-qa/embeddings-initial-histrogram.png"
      alt="Embeddings histogram"
      width="553"
      height="413"
    />
  </div>
</div>

The newest embeddings model can handle inputs with up to 8191 input tokens so most of the rows would not need any chunking, but this may not be the case for every subpage scraped so the next code chunk will split the longer lines into smaller chunks.

```Python
max_tokens = 500

# Function to split the text into chunks of a maximum number of tokens
def split_into_many(text, max_tokens = max_tokens):

    # Split the text into sentences
    sentences = text.split('. ')

    # Get the number of tokens for each sentence
    n_tokens = [len(tokenizer.encode(" " + sentence)) for sentence in sentences]

    chunks = []
    tokens_so_far = 0
    chunk = []

    # Loop through the sentences and tokens joined together in a tuple
    for sentence, token in zip(sentences, n_tokens):

        # If the number of tokens so far plus the number of tokens in the current sentence is greater
        # than the max number of tokens, then add the chunk to the list of chunks and reset
        # the chunk and tokens so far
        if tokens_so_far + token > max_tokens:
            chunks.append(". ".join(chunk) + ".")
            chunk = []
            tokens_so_far = 0

        # If the number of tokens in the current sentence is greater than the max number of
        # tokens, go to the next sentence
        if token > max_tokens:
            continue

        # Otherwise, add the sentence to the chunk and add the number of tokens to the total
        chunk.append(sentence)
        tokens_so_far += token + 1

    return chunks


shortened = []

# Loop through the dataframe
for row in df.iterrows():

    # If the text is None, go to the next row
    if row[1]['text'] is None:
        continue

    # If the number of tokens is greater than the max number of tokens, split the text into chunks
    if row[1]['n_tokens'] > max_tokens:
        shortened += split_into_many(row[1]['text'])

    # Otherwise, add the text to the list of shortened texts
    else:
        shortened.append( row[1]['text'] )
```

Visualizing the updated histogram again can help to confirm if the rows were successfully split into shortened sections.

```python
df = pd.DataFrame(shortened, columns = ['text'])
df['n_tokens'] = df.text.apply(lambda x: len(tokenizer.encode(x)))
df.n_tokens.hist()
```

<div className="sandbox-preview">
  <div className="sandbox-screenshot">
    <img src="https://cdn.openai.com/API/docs/images/tutorials/web-qa/embeddings-tokenized-output.png"
      alt="Embeddings tokenized output"
      width="552"
      height="418"
    />
  </div>
</div>

The content is now broken down into smaller chunks and a simple request can be sent to the OpenAI API specifying the use of the new text-embedding-ada-002 model to create the embeddings:

```python
from openai import OpenAI

client = OpenAI(
    api_key=os.environ.get("OPENAI_API_KEY"),
)

df['embeddings'] = df.text.apply(lambda x: client.embeddings.create(input=x, engine='text-embedding-ada-002')['data'][0]['embedding'])

df.to_csv('processed/embeddings.csv')
df.head()
```

This should take about 3-5 minutes but after you will have your embeddings ready to use!

## Building a question answer system with your embeddings

<div className="sandbox-preview">
  <div className="sandbox-screenshot">
    </div>
  <div className="preview-info">
    <div className="description">
      The embeddings are ready and the final step of this process is to create a
      simple question and answer system. This will take a user's question,
      create an embedding of it, and compare it with the existing embeddings to
      retrieve the most relevant text from the scraped website. The
      gpt-3.5-turbo-instruct model will then generate a natural sounding answer
      based on the retrieved text.
    </div>
  </div>
</div>

---

Turning the embeddings into a NumPy array is the first step, which will provide more flexibility in how to use it given the many functions available that operate on NumPy arrays. It will also flatten the dimension to 1-D, which is the required format for many subsequent operations.

```python
import numpy as np
from openai.embeddings_utils import distances_from_embeddings

df=pd.read_csv('processed/embeddings.csv', index_col=0)
df['embeddings'] = df['embeddings'].apply(eval).apply(np.array)

df.head()
```

The question needs to be converted to an embedding with a simple function, now that the data is ready. This is important because the search with embeddings compares the vector of numbers (which was the conversion of the raw text) using cosine distance. The vectors are likely related and might be the answer to the question if they are close in cosine distance. The OpenAI python package has a built in `distances_from_embeddings` function which is useful here.

```python
def create_context(
    question, df, max_len=1800, size="ada"
):
    """
    Create a context for a question by finding the most similar context from the dataframe
    """

    # Get the embeddings for the question
    q_embeddings = client.embeddings.create(input=question, engine='text-embedding-ada-002')['data'][0]['embedding']

    # Get the distances from the embeddings
    df['distances'] = distances_from_embeddings(q_embeddings, df['embeddings'].values, distance_metric='cosine')


    returns = []
    cur_len = 0

    # Sort by distance and add the text to the context until the context is too long
    for i, row in df.sort_values('distances', ascending=True).iterrows():

        # Add the length of the text to the current length
        cur_len += row['n_tokens'] + 4

        # If the context is too long, break
        if cur_len > max_len:
            break

        # Else add it to the text that is being returned
        returns.append(row["text"])

    # Return the context
    return "\n\n###\n\n".join(returns)
```

The text was broken up into smaller sets of tokens, so looping through in ascending order and continuing to add the text is a critical step to ensure a full answer. The max_len can also be modified to something smaller, if more content than desired is returned.

The previous step only retrieved chunks of texts that are semantically related to the question, so they might contain the answer, but there's no guarantee of it. The chance of finding an answer can be further increased by returning the top 5 most likely results.

The answering prompt will then try to extract the relevant facts from the retrieved contexts, in order to formulate a coherent answer. If there is no relevant answer, the prompt will return “I don’t know”.

A realistic sounding answer to the question can be created with the completion endpoint using `gpt-3.5-turbo-instruct`.

```python
def answer_question(
    df,
    model="gpt-3.5-turbo",
    question="Am I allowed to publish model outputs to Twitter, without a human review?",
    max_len=1800,
    size="ada",
    debug=False,
    max_tokens=150,
    stop_sequence=None
):
    """
    Answer a question based on the most similar context from the dataframe texts
    """
    context = create_context(
        question,
        df,
        max_len=max_len,
        size=size,
    )
    # If debug, print the raw model response
    if debug:
        print("Context:\n" + context)
        print("\n\n")

    try:
        # Create a chat completion using the question and context
        response = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "Answer the question based on the context below, and if the question can't be answered based on the context, say \"I don't know\"\n\n"},
                {"role": "user", f"content": "Context: {context}\n\n---\n\nQuestion: {question}\nAnswer:"}
            ],
            temperature=0,
            max_tokens=max_tokens,
            top_p=1,
            frequency_penalty=0,
            presence_penalty=0,
            stop=stop_sequence,
        )
        return response.choices[0].message.strip()
    except Exception as e:
        print(e)
        return ""
```

It is done! A working Q/A system that has the knowledge embedded from the OpenAI website is now ready. A few quick tests can be done to see the quality of the output:

```python
answer_question(df, question="What day is it?", debug=False)

answer_question(df, question="What is our newest embeddings model?")

answer_question(df, question="What is ChatGPT?")
```

The responses will look something like the following:

```response
"I don't know."

'The newest embeddings model is text-embedding-ada-002.'

'ChatGPT is a model trained to interact in a conversational way. It is able to answer followup questions, admit its mistakes, challenge incorrect premises, and reject inappropriate requests.'
```

If the system is not able to answer a question that is expected, it is worth searching through the raw text files to see if the information that is expected to be known actually ended up being embedded or not. The crawling process that was done initially was setup to skip sites outside the original domain that was provided, so it might not have that knowledge if there was a subdomain setup.

Currently, the dataframe is being passed in each time to answer a question. For more production workflows, a [vector database solution](https://developers.openai.com/api/docs/guides/embeddings#how-can-i-retrieve-k-nearest-embedding-vectors-quickly) should be used instead of storing the embeddings in a CSV file, but the current approach is a great option for prototyping.

---

# UI Kit Demo

import {
  CodeComparisonDemo,
  CodeGalleryDemo,
  CodeSampleDemo,
  ContentModeSwitchDemo,
  ContentSwitcherDemo,
  DeepDiveDemo,
  DocCardDemo,
  DocsMarkdownDemo,
  DocsTipDemo,
  ExpanderDemo,
  GalleryDocsDemo,
  IconDemo,
  IconItemDemo,
  ImageDemo,
  ImageGalleryDemo,
  LatencyExampleDemo,
  VideoGalleryDemo,
  WaveformComponentDemo,
} from "@components/react/demo/ApiDocsComponentDemos.react";

# UI Kit Demo

## hello
