-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class AgentsGrpc.AgentsStub (0.98.0) Stay organized with collections Save and categorize content based on your preferences.

0.98.0 (latest) 0.96.0 0.94.0 0.93.0 0.92.0 0.91.0 0.89.0 0.87.0 0.86.0 0.85.0 0.84.0 0.83.0 0.81.0 0.79.0 0.78.0 0.75.0 0.74.0 0.73.0 0.71.0 0.70.0 0.69.0 0.68.0 0.67.0 0.66.0 0.65.0 0.64.0 0.63.0 0.62.0 0.60.0 0.59.0 0.58.0 0.57.0 0.56.0 0.55.0 0.54.0 0.53.0 0.52.0 0.51.0 0.50.0 0.48.0 0.47.0 0.46.0 0.45.0 0.44.0 0.43.0 0.42.0 0.41.0 0.40.0 0.39.0 0.38.0 0.35.0 0.34.0 0.33.0 0.32.0 0.31.0 0.30.0 0.29.0 0.28.0 0.27.0 0.26.0 0.25.0 0.24.0 0.23.0 0.22.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.14.7 0.13.1 0.12.1 0.11.5

```
public static final class AgentsGrpc.AgentsStub extends AbstractAsyncStub<AgentsGrpc.AgentsStub>
```

A stub to allow clients to do asynchronous rpc calls to service Agents.

Service for managing Agents.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> io.grpc.stub.AbstractStub \> io.grpc.stub.AbstractAsyncStub \> AgentsGrpc.AgentsStub

## Inherited Members

io.grpc.stub.AbstractAsyncStub.<T>newStub(io.grpc.stub.AbstractStub.StubFactory<T>,io.grpc.Channel)

io.grpc.stub.AbstractAsyncStub.<T>newStub(io.grpc.stub.AbstractStub.StubFactory<T>,io.grpc.Channel,io.grpc.CallOptions)

io.grpc.stub.AbstractStub.<T>withOption(io.grpc.CallOptions.Key<T>,T)

io.grpc.stub.AbstractStub.build(io.grpc.Channel,io.grpc.CallOptions)

io.grpc.stub.AbstractStub.getCallOptions()

io.grpc.stub.AbstractStub.getChannel()

io.grpc.stub.AbstractStub.withCallCredentials(io.grpc.CallCredentials)

io.grpc.stub.AbstractStub.withChannel(io.grpc.Channel)

io.grpc.stub.AbstractStub.withCompression(java.lang.String)

io.grpc.stub.AbstractStub.withDeadline(io.grpc.Deadline)

io.grpc.stub.AbstractStub.withDeadlineAfter(java.time.Duration)

io.grpc.stub.AbstractStub.withDeadlineAfter(long,java.util.concurrent.TimeUnit)

io.grpc.stub.AbstractStub.withExecutor(java.util.concurrent.Executor)

io.grpc.stub.AbstractStub.withInterceptors(io.grpc.ClientInterceptor...)

io.grpc.stub.AbstractStub.withMaxInboundMessageSize(int)

io.grpc.stub.AbstractStub.withMaxOutboundMessageSize(int)

io.grpc.stub.AbstractStub.withOnReadyThreshold(int)

io.grpc.stub.AbstractStub.withWaitForReady()

[Object.clone()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#clone--)

[Object.equals(Object)](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#equals-java.lang.Object-)

[Object.finalize()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#finalize--)

[Object.getClass()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#getClass--)

[Object.hashCode()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#hashCode--)

[Object.notify()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#notify--)

[Object.notifyAll()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#notifyAll--)

[Object.toString()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#toString--)

[Object.wait()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait--)

[Object.wait(long)](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait-long-)

[Object.wait(long,int)](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait-long-int-)

## Methods

### build(Channel channel, CallOptions callOptions)

```
protected AgentsGrpc.AgentsStub build(Channel channel, CallOptions callOptions)
```

**Parameters**

**Name**

**Description**

`channel`

`io.grpc.Channel`  

`callOptions`

`io.grpc.CallOptions`  

**Returns**

**Type**

**Description**

`[AgentsGrpc.AgentsStub](/java/docs/reference/google-cloud-dialogflow-cx/latest/com.google.cloud.dialogflow.cx.v3.AgentsGrpc.AgentsStub)`

**Overrides**

io.grpc.stub.AbstractStub.build(io.grpc.Channel,io.grpc.CallOptions)

### createAgent(CreateAgentRequest request, StreamObserver<Agent> responseObserver)

```
public void createAgent(CreateAgentRequest request, StreamObserver<Agent> responseObserver)
```

Creates an agent in the specified location. Note: You should always train flows prior to sending them queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).

**Parameters**

**Name**

**Description**

`request`

`[CreateAgentRequest](/java/docs/reference/google-cloud-dialogflow-cx/latest/com.google.cloud.dialogflow.cx.v3.CreateAgentRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Agent](/java/docs/reference/google-cloud-dialogflow-cx/latest/com.google.cloud.dialogflow.cx.v3.Agent)>`  

### deleteAgent(DeleteAgentRequest request, StreamObserver<Empty> responseObserver)

```
public void deleteAgent(DeleteAgentRequest request, StreamObserver<Empty> responseObserver)
```

Deletes the specified agent.

**Parameters**

**Name**

**Description**

`request`

`[DeleteAgentRequest](/java/docs/reference/google-cloud-dialogflow-cx/latest/com.google.cloud.dialogflow.cx.v3.DeleteAgentRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`  

### exportAgent(ExportAgentRequest request, StreamObserver<Operation> responseObserver)

```
public void exportAgent(ExportAgentRequest request, StreamObserver<Operation> responseObserver)
```

Exports the specified agent to a binary file. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields:

-   `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct)
-   `response`: ExportAgentResponse

**Parameters**

**Name**

**Description**

`request`

`[ExportAgentRequest](/java/docs/reference/google-cloud-dialogflow-cx/latest/com.google.cloud.dialogflow.cx.v3.ExportAgentRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Operation](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

### getAgent(GetAgentRequest request, StreamObserver<Agent> responseObserver)

```
public void getAgent(GetAgentRequest request, StreamObserver<Agent> responseObserver)
```

Retrieves the specified agent.

**Parameters**

**Name**

**Description**

`request`

`[GetAgentRequest](/java/docs/reference/google-cloud-dialogflow-cx/latest/com.google.cloud.dialogflow.cx.v3.GetAgentRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Agent](/java/docs/reference/google-cloud-dialogflow-cx/latest/com.google.cloud.dialogflow.cx.v3.Agent)>`  

### getAgentValidationResult(GetAgentValidationResultRequest request, StreamObserver<AgentValidationResult> responseObserver)

```
public void getAgentValidationResult(GetAgentValidationResultRequest request, StreamObserver<AgentValidationResult> responseObserver)
```

Gets the latest agent validation result. Agent validation is performed when ValidateAgent is called.

**Parameters**

**Name**

**Description**

`request`

`[GetAgentValidationResultRequest](/java/docs/reference/google-cloud-dialogflow-cx/latest/com.google.cloud.dialogflow.cx.v3.GetAgentValidationResultRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[AgentValidationResult](/java/docs/reference/google-cloud-dialogflow-cx/latest/com.google.cloud.dialogflow.cx.v3.AgentValidationResult)>`  

### getGenerativeSettings(GetGenerativeSettingsRequest request, StreamObserver<GenerativeSettings> responseObserver)

```
public void getGenerativeSettings(GetGenerativeSettingsRequest request, StreamObserver<GenerativeSettings> responseObserver)
```

Gets the generative settings for the agent.

**Parameters**

**Name**

**Description**

`request`

`[GetGenerativeSettingsRequest](/java/docs/reference/google-cloud-dialogflow-cx/latest/com.google.cloud.dialogflow.cx.v3.GetGenerativeSettingsRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[GenerativeSettings](/java/docs/reference/google-cloud-dialogflow-cx/latest/com.google.cloud.dialogflow.cx.v3.GenerativeSettings)>`  

### listAgents(ListAgentsRequest request, StreamObserver<ListAgentsResponse> responseObserver)

```
public void listAgents(ListAgentsRequest request, StreamObserver<ListAgentsResponse> responseObserver)
```

Returns the list of all agents in the specified location.

**Parameters**

**Name**

**Description**

`request`

`[ListAgentsRequest](/java/docs/reference/google-cloud-dialogflow-cx/latest/com.google.cloud.dialogflow.cx.v3.ListAgentsRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ListAgentsResponse](/java/docs/reference/google-cloud-dialogflow-cx/latest/com.google.cloud.dialogflow.cx.v3.ListAgentsResponse)>`  

### restoreAgent(RestoreAgentRequest request, StreamObserver<Operation> responseObserver)

```
public void restoreAgent(RestoreAgentRequest request, StreamObserver<Operation> responseObserver)
```

Restores the specified agent from a binary file. Replaces the current agent with a new one. Note that all existing resources in agent (e.g. intents, entity types, flows) will be removed. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields:

-   `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct)
-   `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train flows prior to sending them queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).

**Parameters**

**Name**

**Description**

`request`

`[RestoreAgentRequest](/java/docs/reference/google-cloud-dialogflow-cx/latest/com.google.cloud.dialogflow.cx.v3.RestoreAgentRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Operation](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

### updateAgent(UpdateAgentRequest request, StreamObserver<Agent> responseObserver)

```
public void updateAgent(UpdateAgentRequest request, StreamObserver<Agent> responseObserver)
```

Updates the specified agent. Note: You should always train flows prior to sending them queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).

**Parameters**

**Name**

**Description**

`request`

`[UpdateAgentRequest](/java/docs/reference/google-cloud-dialogflow-cx/latest/com.google.cloud.dialogflow.cx.v3.UpdateAgentRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Agent](/java/docs/reference/google-cloud-dialogflow-cx/latest/com.google.cloud.dialogflow.cx.v3.Agent)>`  

### updateGenerativeSettings(UpdateGenerativeSettingsRequest request, StreamObserver<GenerativeSettings> responseObserver)

```
public void updateGenerativeSettings(UpdateGenerativeSettingsRequest request, StreamObserver<GenerativeSettings> responseObserver)
```

Updates the generative settings for the agent.

**Parameters**

**Name**

**Description**

`request`

`[UpdateGenerativeSettingsRequest](/java/docs/reference/google-cloud-dialogflow-cx/latest/com.google.cloud.dialogflow.cx.v3.UpdateGenerativeSettingsRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[GenerativeSettings](/java/docs/reference/google-cloud-dialogflow-cx/latest/com.google.cloud.dialogflow.cx.v3.GenerativeSettings)>`  

### validateAgent(ValidateAgentRequest request, StreamObserver<AgentValidationResult> responseObserver)

```
public void validateAgent(ValidateAgentRequest request, StreamObserver<AgentValidationResult> responseObserver)
```

Validates the specified agent and creates or updates validation results. The agent in draft version is validated. Please call this API after the training is completed to get the complete validation results.

**Parameters**

**Name**

**Description**

`request`

`[ValidateAgentRequest](/java/docs/reference/google-cloud-dialogflow-cx/latest/com.google.cloud.dialogflow.cx.v3.ValidateAgentRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[AgentValidationResult](/java/docs/reference/google-cloud-dialogflow-cx/latest/com.google.cloud.dialogflow.cx.v3.AgentValidationResult)>`  

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
