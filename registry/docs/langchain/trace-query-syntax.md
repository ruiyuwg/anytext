# Trace query syntax

Source: https://docs.langchain.com/langsmith/trace-query-syntax

Using the method in the SDK or endpoint in the API, you can filter runs to analyze and export.

## Filter arguments

| Keys                          | Description                                                                                                                                                                                                                    |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `project_id` / `project_name` | The project(s) to fetch runs from - can be a single project or a list of projects.                                                                                                                                             |
| `trace_id`                    | Fetch runs that are part of a specific trace.                                                                                                                                                                                  |
| `run_type`                    | The type of run to get, such as `llm`, `chain`, `tool`, `retriever`, etc.                                                                                                                                                      |
| `dataset_name` / `dataset_id` | Fetch runs that are associated with an example row in the specified dataset. This is useful for comparing prompts or models over a given dataset.                                                                              |
| `reference_example_id`        | Fetch runs that are associated with a specific example row. This is useful for comparing prompts or models on a given input.                                                                                                   |
| `parent_run_id`               | Fetch runs that are children of a given run. This is useful for fetching runs grouped together using the context manager or for fetching an agent trajectory.                                                                  |
| `error`                       | Fetch runs that errored or did not error.                                                                                                                                                                                      |
| `run_ids`                     | Fetch runs with a given list of run ids. Note: **This will ignore all other filtering arguments.**                                                                                                                             |
| `filter`                      | Fetch runs that match a given structured filter statement. See the guide below for more information.                                                                                                                           |
| `trace_filter`                | Filter to apply to the ROOT run in the trace tree. This is meant to be used in conjunction with the regular `filter` parameter to let you filter runs by attributes of the root run within a trace.                            |
| `tree_filter`                 | Filter to apply to OTHER runs in the trace tree, including sibling and child runs. This is meant to be used in conjunction with the regular `filter` parameter to let you filter runs by attributes of any run within a trace. |
| `is_root`                     | Only return root runs.                                                                                                                                                                                                         |
| `select`                      | Select the fields to return in the response. By default, all fields are returned. See [run data format](/langsmith/run-data-format) for available fields.                                                                      |
| `query` (*experimental*)      | Natural language query, which translates your query into a filter statement.                                                                                                                                                   |

**Performance tip**: Passing the `select` parameter and excluding `inputs` and `outputs` from the list can significantly improve query performance and reduce response sizes, especially for large runs.

## Filter query language

LangSmith supports powerful filtering capabilities with a filter query language to permit complex filtering operations when fetching runs.

The filtering grammar is based on common comparators on fields in the run object. Supported comparators include:

- `gte` (greater than or equal to)
- `gt` (greater than)
- `lte` (less than or equal to)
- `lt` (less than)
- `eq` (equal to)
- `neq` (not equal to)
- `has` (check if run contains a tag or metadata json blob)
- `search` (search for a substring in a string field)

Additionally, you can combine multiple comparisons through the `and` operator.

These can be applied on fields of the run object, such as its `id`, `name`, `run_type`, `start_time` / `end_time`, `latency`, `total_tokens`, `error`, `execution_order`, `tags`, and any associated feedback through `feedback_key` and `feedback_score`.

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/langsmith/trace-query-syntax.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```
