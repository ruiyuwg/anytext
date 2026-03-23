-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface SimulatorGrpc.AsyncService (0.3.0) Stay organized with collections Save and categorize content based on your preferences.

0.66.0 (latest) 0.64.0 0.62.0 0.61.0 0.59.0 0.57.0 0.55.0 0.54.0 0.53.0 0.52.0 0.51.0 0.49.0 0.47.0 0.46.0 0.43.0 0.42.0 0.41.0 0.39.0 0.38.0 0.37.0 0.36.0 0.35.0 0.34.0 0.33.0 0.32.0 0.31.0 0.30.0 0.28.0 0.27.0 0.26.0 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.16.0 0.15.0 0.14.0 0.13.0 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.7.0 0.6.0 0.3.0 0.2.0 0.1.0

```
public static interface SimulatorGrpc.AsyncService
```

Policy Simulator API service. Policy Simulator is a collection of endpoints for creating, running, and viewing a Replay. A Replay is a type of simulation that lets you see how your principals' access to resources might change if you changed your IAM policy. During a Replay, Policy Simulator re-evaluates, or replays, past access attempts under both the current policy and your proposed policy, and compares those results to determine how your principals' access might change under the proposed policy.

## Methods

### createReplay(CreateReplayRequest request, StreamObserver<Operation> responseObserver)

```
public default void createReplay(CreateReplayRequest request, StreamObserver<Operation> responseObserver)
```

Creates and starts a Replay using the given ReplayConfig.

**Parameters**

**Name**

**Description**

`request`

`[CreateReplayRequest](/java/docs/reference/google-cloud-policysimulator/0.3.0/com.google.cloud.policysimulator.v1.CreateReplayRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

### getReplay(GetReplayRequest request, StreamObserver<Replay> responseObserver)

```
public default void getReplay(GetReplayRequest request, StreamObserver<Replay> responseObserver)
```

Gets the specified Replay. Each `Replay` is available for at least 7 days.

**Parameters**

**Name**

**Description**

`request`

`[GetReplayRequest](/java/docs/reference/google-cloud-policysimulator/0.3.0/com.google.cloud.policysimulator.v1.GetReplayRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Replay](/java/docs/reference/google-cloud-policysimulator/0.3.0/com.google.cloud.policysimulator.v1.Replay)>`  

### listReplayResults(ListReplayResultsRequest request, StreamObserver<ListReplayResultsResponse> responseObserver)

```
public default void listReplayResults(ListReplayResultsRequest request, StreamObserver<ListReplayResultsResponse> responseObserver)
```

Lists the results of running a Replay.

**Parameters**

**Name**

**Description**

`request`

`[ListReplayResultsRequest](/java/docs/reference/google-cloud-policysimulator/0.3.0/com.google.cloud.policysimulator.v1.ListReplayResultsRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ListReplayResultsResponse](/java/docs/reference/google-cloud-policysimulator/0.3.0/com.google.cloud.policysimulator.v1.ListReplayResultsResponse)>`  

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
