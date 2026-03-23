-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface GeneratorSuggestionOrBuilder (4.93.0) Stay organized with collections Save and categorize content based on your preferences.

4.93.0 (latest) 4.91.0 4.89.0 4.88.0 4.87.0 4.86.0 4.84.0 4.82.0 4.81.0 4.80.0 4.79.0 4.78.0 4.76.0 4.74.0 4.73.0 4.70.0 4.69.0 4.68.0 4.66.0 4.65.0 4.64.0 4.63.0 4.62.0 4.61.0 4.60.0 4.59.0 4.58.0 4.57.0 4.55.0 4.54.0 4.53.0 4.52.0 4.51.0 4.50.0 4.49.0 4.48.0 4.47.0 4.46.0 4.45.0 4.43.0 4.42.0 4.41.0 4.40.0 4.39.0 4.38.0 4.37.0 4.36.0 4.35.0 4.34.0 4.33.0 4.30.0 4.29.0 4.28.0 4.27.0 4.26.0 4.25.0 4.24.0 4.23.0 4.22.0 4.21.0 4.20.0 4.19.0 4.18.0 4.17.0 4.15.0 4.14.0 4.13.0 4.12.0 4.11.0 4.10.0 4.9.1 4.8.6 4.7.5 4.6.0 4.5.11 4.4.0 4.3.1

```
public interface GeneratorSuggestionOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getAgentCoachingSuggestion()

```
public abstract AgentCoachingSuggestion getAgentCoachingSuggestion()
```

Optional. Suggestion to coach the agent.

`.google.cloud.dialogflow.v2beta1.AgentCoachingSuggestion agent_coaching_suggestion = 3 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[AgentCoachingSuggestion](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2beta1.AgentCoachingSuggestion)`

The agentCoachingSuggestion.

### getAgentCoachingSuggestionOrBuilder()

```
public abstract AgentCoachingSuggestionOrBuilder getAgentCoachingSuggestionOrBuilder()
```

Optional. Suggestion to coach the agent.

`.google.cloud.dialogflow.v2beta1.AgentCoachingSuggestion agent_coaching_suggestion = 3 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[AgentCoachingSuggestionOrBuilder](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2beta1.AgentCoachingSuggestionOrBuilder)`

### getFreeFormSuggestion()

```
public abstract FreeFormSuggestion getFreeFormSuggestion()
```

Optional. Free form suggestion.

`.google.cloud.dialogflow.v2beta1.FreeFormSuggestion free_form_suggestion = 1 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[FreeFormSuggestion](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2beta1.FreeFormSuggestion)`

The freeFormSuggestion.

### getFreeFormSuggestionOrBuilder()

```
public abstract FreeFormSuggestionOrBuilder getFreeFormSuggestionOrBuilder()
```

Optional. Free form suggestion.

`.google.cloud.dialogflow.v2beta1.FreeFormSuggestion free_form_suggestion = 1 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[FreeFormSuggestionOrBuilder](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2beta1.FreeFormSuggestionOrBuilder)`

### getSuggestionCase()

```
public abstract GeneratorSuggestion.SuggestionCase getSuggestionCase()
```

**Returns**

**Type**

**Description**

`[GeneratorSuggestion.SuggestionCase](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2beta1.GeneratorSuggestion.SuggestionCase)`

### getSummarySuggestion()

```
public abstract SummarySuggestion getSummarySuggestion()
```

Optional. Suggested summary.

`.google.cloud.dialogflow.v2beta1.SummarySuggestion summary_suggestion = 2 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[SummarySuggestion](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2beta1.SummarySuggestion)`

The summarySuggestion.

### getSummarySuggestionOrBuilder()

```
public abstract SummarySuggestionOrBuilder getSummarySuggestionOrBuilder()
```

Optional. Suggested summary.

`.google.cloud.dialogflow.v2beta1.SummarySuggestion summary_suggestion = 2 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[SummarySuggestionOrBuilder](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2beta1.SummarySuggestionOrBuilder)`

### getToolCallInfo(int index)

```
public abstract GeneratorSuggestion.ToolCallInfo getToolCallInfo(int index)
```

Optional. List of request and response for tool calls executed.

`repeated .google.cloud.dialogflow.v2beta1.GeneratorSuggestion.ToolCallInfo tool_call_info = 9 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[GeneratorSuggestion.ToolCallInfo](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2beta1.GeneratorSuggestion.ToolCallInfo)`

### getToolCallInfoCount()

```
public abstract int getToolCallInfoCount()
```

Optional. List of request and response for tool calls executed.

`repeated .google.cloud.dialogflow.v2beta1.GeneratorSuggestion.ToolCallInfo tool_call_info = 9 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getToolCallInfoList()

```
public abstract List<GeneratorSuggestion.ToolCallInfo> getToolCallInfoList()
```

Optional. List of request and response for tool calls executed.

`repeated .google.cloud.dialogflow.v2beta1.GeneratorSuggestion.ToolCallInfo tool_call_info = 9 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[ToolCallInfo](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2beta1.GeneratorSuggestion.ToolCallInfo)>`

### getToolCallInfoOrBuilder(int index)

```
public abstract GeneratorSuggestion.ToolCallInfoOrBuilder getToolCallInfoOrBuilder(int index)
```

Optional. List of request and response for tool calls executed.

`repeated .google.cloud.dialogflow.v2beta1.GeneratorSuggestion.ToolCallInfo tool_call_info = 9 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[GeneratorSuggestion.ToolCallInfoOrBuilder](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2beta1.GeneratorSuggestion.ToolCallInfoOrBuilder)`

### getToolCallInfoOrBuilderList()

```
public abstract List<? extends GeneratorSuggestion.ToolCallInfoOrBuilder> getToolCallInfoOrBuilderList()
```

Optional. List of request and response for tool calls executed.

`repeated .google.cloud.dialogflow.v2beta1.GeneratorSuggestion.ToolCallInfo tool_call_info = 9 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.dialogflow.v2beta1.GeneratorSuggestion.ToolCallInfoOrBuilder>`

### hasAgentCoachingSuggestion()

```
public abstract boolean hasAgentCoachingSuggestion()
```

Optional. Suggestion to coach the agent.

`.google.cloud.dialogflow.v2beta1.AgentCoachingSuggestion agent_coaching_suggestion = 3 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the agentCoachingSuggestion field is set.

### hasFreeFormSuggestion()

```
public abstract boolean hasFreeFormSuggestion()
```

Optional. Free form suggestion.

`.google.cloud.dialogflow.v2beta1.FreeFormSuggestion free_form_suggestion = 1 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the freeFormSuggestion field is set.

### hasSummarySuggestion()

```
public abstract boolean hasSummarySuggestion()
```

Optional. Suggested summary.

`.google.cloud.dialogflow.v2beta1.SummarySuggestion summary_suggestion = 2 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the summarySuggestion field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
