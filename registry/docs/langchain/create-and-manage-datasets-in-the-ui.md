# Create and manage datasets in the UI

Source: https://docs.langchain.com/langsmith/manage-datasets-in-application

[*Datasets*](/langsmith/evaluation-concepts#datasets) enable you to perform repeatable evaluations over time using consistent data. Datasets are made up of [*examples*](/langsmith/evaluation-concepts#examples), which store inputs, outputs, and optionally, reference outputs.

This page outlines the various methods for [creating](#create-a-dataset-and-add-examples) and [managing](#manage-a-dataset) datasets in the [LangSmith UI](https://smith.langchain.com).

## Create a dataset and add examples

The following sections explain the different ways you can create a dataset in LangSmith and add examples to it. Depending on your workflow, you can manually curate examples, automatically capture them from tracing, import files, or even generate synthetic data:

- [Manually from a tracing project](#manually-from-a-tracing-project)
- [Automatically from a tracing project](#automatically-from-a-tracing-project)
- [From examples in an annotation queue](#from-examples-in-an-annotation-queue)
- [From the Prompt Playground](#from-the-prompt-playground)
- [Import a dataset from a CSV or JSONL file](#import-a-dataset-from-a-csv-or-jsonl-file)
- [Create a new dataset from the dataset page](#create-a-new-dataset-from-the-datasets-&-experiments-page)
- [Add synthetic examples created by an LLM via the Datasets UI](#add-synthetic-examples-created-by-an-llm)

### Manually from a tracing project

A common pattern for constructing datasets is to convert notable traces from your application into dataset examples. This approach requires that you have [configured tracing to LangSmith](/langsmith/observability-concepts#tracing-configuration).

A technique to build datasets is to filter the most interesting traces, such as traces that were tagged with poor user feedback, and add them to a dataset. For tips on how to filter traces, refer to [Filter traces](/langsmith/filter-traces-in-application) guide.

There are two ways to add data manually from a tracing project to datasets. Navigate to **Tracing Projects** and select a project.

1. Multi-select runs from the runs table. On the **Runs** tab, multi-select runs. At the bottom of the page, click  **Add to Dataset**.

2. On the **Runs** tab, select a run from the table. On the individual run details page, select  **Add to** -> **Dataset** in the top right corner.

   When you select a dataset from the run details page, a modal will pop up letting you know if any [transformations](/langsmith/dataset-transformations) were applied or if schema validation failed. For example, the screenshot below shows a dataset that is using transformations to optimize for collecting LLM runs.

   You can then optionally edit the run before adding it to the dataset.

### Automatically from a tracing project

You can use [run rules](/langsmith/rules) to automatically add traces to a dataset based on certain conditions. For example, you could add all traces that are [tagged](/langsmith/observability-concepts#tags) with a specific use case or have a [low feedback score](/langsmith/observability-concepts#feedback).

### From examples in an annotation queue

If you rely on subject matter experts to build meaningful datasets, use [annotation queues](/langsmith/annotation-queues) to provide a streamlined view for reviewers. Human reviewers can optionally modify the inputs/outputs/reference outputs from a trace before it is added to the dataset.

Annotation queues can be optionally configured with a default dataset, though you can add runs to any dataset by using the dataset switcher on the bottom of the screen. Once you select the right dataset, click **Add to Dataset** or hit the hot key `D` to add the run to it.

Any modifications you make to the run in your annotation queue will carry over to the dataset, and all metadata associated with the run will also be copied.

Note you can also set up rules to add runs that meet specific criteria to an annotation queue using [automation rules](/langsmith/rules).

### From the Prompt Playground

On the [**Prompt Playground**](/langsmith/observability-concepts#prompt-playground) page, select **Set up Evaluation**, click **+New** if you're starting a new dataset or select from an existing dataset.

Creating datasets inline in the playground is not supported for datasets that have nested keys. In order to add/edit examples with nested keys, you must edit [from the datasets page](/langsmith/manage-datasets-in-application#from-the-datasets-page).

To edit the examples:

- Use **+Row** to add a new example to the dataset
- Delete an example using the **⋮** dropdown on the right hand side of the table
- If you're creating a reference-free dataset remove the "Reference Output" column using the **x** button in the column. Note: this action is not reversible.

### Import a dataset from a CSV or JSONL file

On the **Datasets & Experiments** page, click **+New Dataset**, then **Import** an existing dataset from CSV or JSONL file.

### Create a new dataset from the datasets & experiments page

1. Navigate to the **Datasets & Experiments** page from the left-hand menu.
2. Click **+ New Dataset**.
3. On the **New Dataset** page, select the **Create from scratch** tab.
4. Add a name and description for the dataset.
5. (Optional) Create a [dataset schema](#create-a-dataset-schema) to validate your dataset.
6. Click **Create**, which will create an empty dataset.
7. To add examples inline, on the dataset's page, go to the **Examples** tab. Click **+ Example**.
8. Define examples in JSON and click **Submit**. For more details on dataset splits, refer to [Create and manage dataset splits](#create-and-manage-dataset-splits).

### Add synthetic examples created by an LLM

If you have existing examples and a [schema](#create-a-dataset-schema) defined on your dataset, when you click **+ Example** there is an option to  **Add AI-Generated Examples**. This will use an LLM to create [synthetic](/langsmith/evaluation-concepts#synthetic-data) examples.

In **Generate examples**, do the following:

1. Click **API Key** in the top right of the pane to set your OpenAI API key as a [workspace secret](/langsmith/administration-overview#workspaces). If your workspace already has an OpenAI API key set, you can skip this step.

2. Select few-shot examples: Toggle **Automatic** or **Manual** reference examples. You can select these examples manually from your dataset or use the automatic selection option.

3. Enter the number of synthetic examples you want to generate.

4. Click **Generate**.

5. The examples will appear on the **Select generated examples** page. Choose which examples to add to your dataset, with the option to edit them before finalizing. Click **Save Examples**.

6. Each example will be validated against your specified dataset schema and tagged as **synthetic** in the source metadata.

## Manage a dataset

### Create a dataset schema

LangSmith datasets store arbitrary JSON objects. We recommend (but do not require) that you define a schema for your dataset to ensure that they conform to a specific JSON schema. Dataset schemas are defined with standard [JSON schema](https://json-schema.org/), with the addition of a few [prebuilt types](/langsmith/dataset-json-types) that make it easier to type common primitives like messages and tools.

Certain fields in your schema have a `+ Transformations` option. Transformations are preprocessing steps that, if enabled, update your examples when you add them to the dataset. For example the `convert to OpenAI messages` transformation will convert message-like objects, like LangChain messages, to OpenAI message format.

For the full list of available transformations, see [our reference](/langsmith/dataset-transformations).

If you plan to collect production traces in your dataset from LangChain [ChatModels](https://python.langchain.com/do/langsmith/observability-concepts/chat_models/) or from OpenAI calls using the [LangSmith OpenAI wrapper](/langsmith/annotate-code#wrap-the-openai-client), we offer a prebuilt Chat Model schema that converts messages and tools into industry standard openai formats that can be used downstream with any model for testing. You can also customize the template settings to match your use case.

Please see the [dataset transformations reference](/langsmith/dataset-transformations) for more information.

### Create and manage dataset splits

Dataset splits are divisions of your dataset that you can use to segment your data. For example, it is common in machine learning workflows to split datasets into training, validation, and test sets. This can be useful to prevent overfitting - where a model performs well on the training data but poorly on unseen data. In evaluation workflows, it can be useful to do this when you have a dataset with multiple categories that you may want to evaluate separately; or if you are testing a new use case that you may want to include in your dataset in the future, but want to keep separate for now. Note that the same effect can be achieved manually via metadata - but we expect splits to be used for higher level organization of your dataset to split it into separate groups for evaluation, whereas metadata would be used more for storing information on your examples like tags and information about its origin.

In machine learning, it is best practice to keep your splits separate (each example belongs to exactly one split). However, we allow you to select multiple splits for the same example in LangSmith because it can make sense for some evaluation workflows - for example, if an example falls into multiple categories on which you may want to evaluate your application.

In order to create and manage splits in the app, you can select some examples in your dataset and click "Add to Split". From the resulting popup menu, you can select and unselect splits for the selected examples, or create a new split.

### Edit example metadata

You can add metadata to your examples by clicking on an example and then clicking "Edit" on the top righthand side of the popover. From this page, you can update/delete existing metadata, or add new metadata. You may use this to store information about your examples, such as tags or version info, which you can then [group by](/langsmith/analyze-an-experiment#group-results-by-metadata) when analyzing experiment results or [filter by](/langsmith/manage-datasets-programmatically#list-examples-by-metadata) when you call `list_examples` in the SDK.

### Filter examples

You can filter examples by split, metadata key/value or perform full-text search over examples. These filtering options are available to the top left of the examples table.

- **Filter by split**: Select split > Select a split to filter by
- **Filter by metadata**: Filters > Select "Metadata" from the dropdown > Select the metadata key and value to filter on
- **Full-text search**: Filters > Select "Full Text" from the dropdown > Enter your search criteria

You may add multiple filters, and only examples that satisfy all of the filters will be displayed in the table.

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/langsmith/manage-datasets-in-application.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```
