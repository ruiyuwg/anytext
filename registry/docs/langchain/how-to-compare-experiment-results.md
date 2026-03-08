# How to compare experiment results

Source: https://docs.langchain.com/langsmith/compare-experiment-results

When you are iterating on your LLM application (such as changing the model or the prompt), you may want to compare the results of different [*experiments*](/langsmith/evaluation-concepts#experiment).

LangSmith supports a comparison view that lets you identify key differences, regressions, and improvements between different experiments.

## Open the comparison view

1. To access the experiment comparison view, navigate to the **Datasets & Experiments** page.
2. Select a dataset, which will open the **Experiments** tab.
3. Select two or more experiments and then click **Compare**.

## Adjust the table display

You can toggle between different display options on the right-hand-side bar of the **Comparing Experiments** page.

### Filters

You can apply filters to the experiment comparison view to narrow down specific examples. Common examples for filters include:

- Examples that contain specific `input` / `output`.
- Runs with status `success` or `error`.
- Runs that take more than x seconds in `latency`.
- Specific `metadata`, `tag`, or `feedback`.

In addition to applying filters on the overall experiment view, you can apply filters on individual columns as well. Select the  icon at the top of any column to view the available filters for that column's data.

### Columns

You can select and hide individual feedback keys or individual metrics in the **Columns** settings to isolate the information you need in the comparison view.

### **Full** vs. **Compact** view

- **Full**: Toggling **Full** will show the full text of the input, output, and reference output for each run. If the output is too long to display in the table, you can click on **Expand** to view the full content.
- **Compact**: **Compact** view displays a preview of the experiment results for each example.

### Display types

There are three built-in experiment views that cover several display types: **Default**, **YAML**, **JSON**.

## View regressions and improvements

In the comparison view, red highlights runs that *regressed* on any feedback key against your source experiment, while green highlights runs that *improved*. At the top of each feedback column, you can see how many runs did better or worse than your source experiment.

Click the regression or improvement buttons at the top of each column to show only runs that regressed or improved in that experiment.

## View side-by-side diffs

When comparing two experiments, for JSON and YAML display styles, you can toggle on the experiment diff mode to compare experiment outputs. The diff mode highlights modifications between outputs, and can be particularly useful for structured output comparisons.

## Update source experiment and metric

To track regressions across experiments, you can:

1. At the top of the **Comparison** view, hover over an experiment icon and select **Set as source experiment** from the dropdown. You can also add or remove experiments from this dropdown. By default, the first selected experiment is set as the source.

2. Within the **Feedback** columns, you can configure whether a higher score is better for each feedback key. This preference will be stored. By default, a higher score is assumed to be better.

## Open a trace

If the example you're evaluating is from an ingested [run](/langsmith/observability-concepts#runs), you can hover over the output cell and click on the trace icon to open the trace view for that run. This will open up a trace in the side panel.

## Expand detailed view

You can click on any cell to open up a detailed view of the experiment result on that particular example input, along with feedback keys and scores.

## Use experiment metadata as chart labels

You can configure the x-axis labels for the charts based on [experiment metadata](/langsmith/filter-experiments-ui#background-add-metadata-to-your-experiments).

Select a metadata key from the **Charts** dropdown at the top-right of the **Comparison** view to change the x-axis labels.

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/langsmith/compare-experiment-results.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```

# Compare traces

Source: https://docs.langchain.com/langsmith/compare-traces

To compare traces, click on the **Compare** button in the upper right hand side of any trace view.

This will show the trace run table. Select the trace you want to compare against the original trace.

The pane will open with both traces selected in a side by side comparison view.

To stop comparing, close the pane or click on **Stop comparing** in the upper right hand side of the pane.

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/langsmith/compare-traces.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```
