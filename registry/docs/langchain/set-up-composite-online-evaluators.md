# Set up composite online evaluators

Source: https://docs.langchain.com/langsmith/online-evaluations-composite

**Recommended Reading**

Before diving into this content, it might be helpful to read the following:

- Running [online evaluations](/langsmith/evaluation-concepts#online-evaluations)
- [Composite evaluators](/langsmith/composite-evaluators-ui)

Online evaluations provide real-time feedback on your production traces. This is useful to continuously monitor the performance of your application—to identify issues, measure improvements, and ensure consistent quality over time.

**Composite evaluators** are a way to combine multiple evaluator scores into a single [score](/langsmith/evaluation-concepts#evaluator-outputs). This is useful when you want to evaluate multiple aspects of your application and combine the results into a single result.

When an online evaluator runs on any run within a trace, the trace will be auto-upgraded to [extended data retention](/langsmith/administration-overview#data-retention-auto-upgrades). This upgrade will impact trace pricing, but ensures that traces meeting your evaluation criteria (typically those most valuable for analysis) are preserved for investigation.

## View online evaluators

Head to the **Tracing Projects** tab and select a tracing project. To view existing online evaluators for that project, click on the **Evaluators** tab.

## Configure composite online evaluators

You can create composite evaluators on a [tracing project](/langsmith/observability-concepts#projects) for [online evaluations](/langsmith/evaluation-concepts#online-evaluations). With composite evaluators in the UI, you can compute a weighted average or weighted sum of multiple evaluator scores, with configurable weights.

### 1. Navigate to the tracing project

To start configuring a composite evaluator, navigate to the **Tracing Projects** tab and select a project.

From within a tracing project: **+ New** > **Evaluator** > **Composite score**

### 2. Configure the composite evaluator

1. Name your evaluator.
2. Select an aggregation method, either **Average** or **Sum**.
   - **Average**: ∑(weight\*score) / ∑(weight).
   - **Sum**: ∑(weight\*score).
3. Add the feedback keys you want to include in the composite score.
4. Add the weights for the feedback keys. By default, the weights are equal for each feedback key. Adjust the weights to increase or decrease the importance of specific feedback keys in the final score.
5. Click **Create** to save the evaluator.

If you need to adjust the weights for the composite scores, they can be updated after the evaluator is created. The resulting scores will be updated for all runs that have the evaluator configured.

### 3. View composite evaluator results

Composite scores are attached to a run as **feedback**, similarly to feedback from a single evaluator.

**On a tracing project**:

- Composite scores appear as feedback on runs.
- [Filter for runs](/langsmith/filter-traces-in-application) with a composite score, or where the composite score meets a certain threshold.
- [Create a chart](/langsmith/dashboards#custom-dashboards) to visualize trends in the composite score over time.

If any of the constituent evaluators are not configured on the run, the composite score will not be calculated for that run.

## Video guide

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/langsmith/online-evaluations-composite.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```
