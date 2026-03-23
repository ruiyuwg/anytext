# Workload isolation

Source: https://docs.langchain.com/langsmith/workload-isolation

LangSmith uses a hierarchical structure to organize your work: [*organizations*](/langsmith/administration-overview#organizations), [*workspaces*](/langsmith/administration-overview#workspaces), [*applications*](/langsmith/administration-overview#applications), and [*resources*](/langsmith/administration-overview#resources). This structure lets you balance collaboration with access control, allowing you to choose the right level of isolation for your team's needs.

The LangSmith permission system builds on this hierarchy. With [role-based access control (RBAC)](/langsmith/rbac), user [permissions](/langsmith/organization-workspace-operations) are scoped to one or more workspaces, enforcing isolation between workspaces. With more fine-grained [attribute-based access control](/langsmith/organization-workspace-operations#access-policies) (ABAC in private beta), access can be further restricted or granted based on attributes such as tags or applications within a workspace (for example, allowing users to access only development resources or only resources associated with a specific application).

This page explains three common approaches to organizing workspaces based on your team's isolation requirements:

- [Team-centric workspaces](#team-centric-workspaces): Single workspace per team (recommended for most customers)
- [Collaborative workspaces](#collaborative-workspaces): Multiple teams per workspace
- [Project-isolated workspaces](#project-isolated-workspaces): Multiple workspaces per team (for strict isolation requirements)

  For details on setting up organizations and workspaces, refer to [Set up hierarchy](/langsmith/set-up-hierarchy).

## Team-centric workspaces

This is the default model and recommended choice for most customers.

This model (single workspace per team) uses a single organization as the top-level boundary. Within the organization, multiple workspaces are used to isolate different teams or business units. Each workspace represents a logical boundary for a specific team and governs which data and resources that team can access. Within a workspace, teams use multiple applications to group together resources that support the same agent. An application may also contain distinct resources, such as separate tracing projects, for development and production environments.

```mermaid theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
graph LR
    Org[Organization]

    WS1[Workspace: Team A]
    WS2[Workspace: Team B]

    App1A[Application]
    App1B[Application]

    DevA[Dev Tracing Project]
    ProdA[Prod Tracing Project]
    DatasetA[Dataset]

    DevB[Dev Tracing Project]
    ProdB[Prod Tracing Project]
    DatasetB[Dataset]

    Org --> WS1
    Org --> WS2

    WS1 --> App1A
    WS2 --> App1B

    App1A --> DevA
    App1A --> ProdA
    App1A --> DatasetA

    App1B --> DevB
    App1B --> ProdB
    App1B --> DatasetB

    classDef orgStyle fill:#E0E7FF,stroke:#4F46E5,stroke-width:2px,color:#1E1B4B
    classDef wsStyle fill:#DBEAFE,stroke:#2563EB,stroke-width:2px,color:#1E3A8A
    classDef appStyle fill:#DCFCE7,stroke:#16A34A,stroke-width:2px,color:#14532D
    classDef resourceStyle fill:#F3F4F6,stroke:#9CA3AF,stroke-width:1px,color:#374151

    class Org orgStyle
    class WS1,WS2 wsStyle
    class App1A,App1B appStyle
    class DevA,ProdA,DatasetA,DevB,ProdB,DatasetB resourceStyle
```

- **Pros:** A single workspace allows all team resources to be shared, making collaboration and iteration within a team straightforward. It also simplifies promotion from development to production. For example, the same [prompt](/langsmith/prompt-engineering) can be versioned and promoted to production using tags, without copying or duplication.
- **Cons:** The primary trade-off is limited isolation between environments of the same team. Development, test, and production resources coexist within the same application, so teams must rely on tagging and conventions to avoid accidental impact on production. [RBAC](/langsmith/rbac) is scoped at the workspace level. [ABAC](/langsmith/organization-workspace-operations#access-policies) (private beta) provides more granular permissions within a workspace by restricting access based on resource attributes, such as allowing a user to access only development resources.

## Collaborative workspaces

In this model (multiple teams per workspace), multiple teams share a single workspace within an organization and use applications and [ABAC](/langsmith/organization-workspace-operations#access-policies) (private beta) to separate resources and govern access. As a result, shared resources such as [prompts](/langsmith/prompt-engineering) and [deployments](/langsmith/deployment) can be reused across teams, while access to sensitive resources like [traces](/langsmith/observability-concepts#traces) and [datasets](/langsmith/evaluation-concepts#datasets) is limited to the owning team.

```mermaid theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
graph LR
    Org[Organization]

    WS[Shared Workspace]

    AppA[Application: Team A]
    AppB[Application: Team B]

    TracesA[Traces: Team A]
    DatasetA[Dataset: Team A]
    PromptA[Prompt: Shared]

    TracesB[Traces: Team B]
    DatasetB[Dataset: Team B]
    PromptB[Prompt: Shared]

    Org --> WS

    WS --> AppA
    WS --> AppB

    AppA --> TracesA
    AppA --> DatasetA
    AppA --> PromptA

    AppB --> TracesB
    AppB --> DatasetB
    AppB --> PromptB

    classDef orgStyle fill:#E0E7FF,stroke:#4F46E5,stroke-width:2px,color:#1E1B4B
    classDef wsStyle fill:#DBEAFE,stroke:#2563EB,stroke-width:2px,color:#1E3A8A
    classDef appStyle fill:#DCFCE7,stroke:#16A34A,stroke-width:2px,color:#14532D
    classDef restrictedStyle fill:#FEE2E2,stroke:#DC2626,stroke-width:1px,color:#7F1D1D
    classDef sharedStyle fill:#FEF3C7,stroke:#F59E0B,stroke-width:1px,color:#78350F

    class Org orgStyle
    class WS wsStyle
    class AppA,AppB appStyle
    class TracesA,DatasetA,TracesB,DatasetB restrictedStyle
    class PromptA,PromptB sharedStyle
```

- **Pros:** Common resources such as prompts and deployments can be shared and reused across teams, increasing collaboration and reducing duplicated work. Unlike the team-centric workspace model, collaboration is not limited to a single team and can span all teams within the workspace.
- **Cons:** Isolation between teams and environments is weaker than in multi-workspace models and depends on correct use of ABAC. Misconfigured tags or policies can expose sensitive [traces](/langsmith/observability-concepts#traces) or [datasets](/langsmith/evaluation-concepts#datasets) across teams, and managing permissions across multiple teams adds operational complexity.

## Project-isolated workspaces

This approach should be used only when strict isolation is required.

In this model (multiple workspaces per team), isolation is increased by creating multiple workspaces for a single team. Workspaces may be organized by project or by environment, such as separate development and production workspaces. Each workspace is fully isolated, with its own users, data, and resources, and access is strictly scoped to that workspace.

```mermaid theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
graph LR
    Org[Organization]

    WSDev[Workspace: Dev]
    WSProd[Workspace: Prod]

    AppDev[Application]
    AppProd[Application]

    TracesDev[Traces]
    DatasetDev[Dataset]
    DeploymentDev[Deployment]

    TracesProd[Traces]
    DatasetProd[Dataset]
    DeploymentProd[Deployment]

    Org --> WSDev
    Org --> WSProd

    WSDev --> AppDev
    WSProd --> AppProd

    AppDev --> TracesDev
    AppDev --> DatasetDev
    AppDev --> DeploymentDev

    AppProd --> TracesProd
    AppProd --> DatasetProd
    AppProd --> DeploymentProd

    classDef orgStyle fill:#E0E7FF,stroke:#4F46E5,stroke-width:2px,color:#1E1B4B
    classDef wsStyle fill:#DBEAFE,stroke:#2563EB,stroke-width:2px,color:#1E3A8A
    classDef appStyle fill:#DCFCE7,stroke:#16A34A,stroke-width:2px,color:#14532D
    classDef resourceStyle fill:#F3F4F6,stroke:#9CA3AF,stroke-width:1px,color:#374151

    class Org orgStyle
    class WSDev,WSProd wsStyle
    class AppDev,AppProd appStyle
    class TracesDev,DatasetDev,DeploymentDev,TracesProd,DatasetProd,DeploymentProd resourceStyle
```

- **Pros:** Strong isolation between teams, projects, and environments. Users with only access to the development workspace cannot view or access production data or any production resources, reducing the risk of accidental changes or cross-environment misuse.
- **Cons:** Resources cannot be shared across workspaces. Reusing [prompts](/langsmith/prompt-engineering), [datasets](/langsmith/evaluation-concepts#datasets), or [experiments](/langsmith/evaluation-concepts#experiment), even when promoting an agent from development to production, requires manual copying between workspaces, which introduces friction and duplication.

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/langsmith/workload-isolation.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```

# Write your prompt with AI

Source: https://docs.langchain.com/langsmith/write-prompt-with-ai

The prompt canvas makes it easy to edit a prompt with the help of an LLM. This allows you to iterate faster on long prompts and also makes it easier to make overarching stylisting or tonal changes to your prompt. You can enter the promp canvas by clicking the glowing wand over any message in your prompt:

## Chat sidebar

You can use the chat sidebar to ask questions about your prompt, or to give instructions in natural language to the LLM for how to rewrite your prompt.

You can also edit the prompt directly - you don't **need** to use the LLM. This is useful if you know what edits you want to make and just want to make them directly

## Quick actions

There are quick actions to change the reading level or length of the prompt with a single mouse click:

## Custom quick actions

You can also save your own custom quick actions, for ease of use across all the prompts you are working on in LangSmith:

## Diffing

You can also see the specific differences between each version of your prompt by selecting the diff slider in the top right of the canvas:

## Saving and using prompts

Lastly, you can save the prompt you have created in the canvas by clicking the "Use this Version" button in the bottom right:

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/langsmith/write-prompt-with-ai.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```
