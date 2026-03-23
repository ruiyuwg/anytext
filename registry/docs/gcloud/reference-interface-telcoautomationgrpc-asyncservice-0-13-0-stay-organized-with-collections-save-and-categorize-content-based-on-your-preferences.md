-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface TelcoAutomationGrpc.AsyncService (0.13.0) Stay organized with collections Save and categorize content based on your preferences.

0.57.0 (latest) 0.55.0 0.53.0 0.52.0 0.50.0 0.48.0 0.46.0 0.45.0 0.44.0 0.43.0 0.42.0 0.40.0 0.38.0 0.37.0 0.34.0 0.33.0 0.32.0 0.30.0 0.29.0 0.28.0 0.27.0 0.26.0 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.14.0 0.13.0 0.12.0 0.11.0 0.10.0 0.9.0 0.7.0 0.6.0 0.5.0 0.4.0 0.3.0 0.2.0 0.1.0

```
public static interface TelcoAutomationGrpc.AsyncService
```

TelcoAutomation Service manages the control plane cluster a.k.a. Orchestration Cluster (GKE cluster with config controller) of TNA. It also exposes blueprint APIs which manages the lifecycle of blueprints that control the infrastructure setup (e.g GDCE clusters) and deployment of network functions.

## Methods

### applyDeployment(ApplyDeploymentRequest request, StreamObserver<Deployment> responseObserver)

```
public default void applyDeployment(ApplyDeploymentRequest request, StreamObserver<Deployment> responseObserver)
```

Applies the deployment's YAML files to the parent orchestration cluster.

**Parameters**

**Name**

**Description**

`request`

`[ApplyDeploymentRequest](/java/docs/reference/google-cloud-telcoautomation/0.13.0/com.google.cloud.telcoautomation.v1.ApplyDeploymentRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Deployment](/java/docs/reference/google-cloud-telcoautomation/0.13.0/com.google.cloud.telcoautomation.v1.Deployment)>`  

### applyHydratedDeployment(ApplyHydratedDeploymentRequest request, StreamObserver<HydratedDeployment> responseObserver)

```
public default void applyHydratedDeployment(ApplyHydratedDeploymentRequest request, StreamObserver<HydratedDeployment> responseObserver)
```

Applies a hydrated deployment to a workload cluster.

**Parameters**

**Name**

**Description**

`request`

`[ApplyHydratedDeploymentRequest](/java/docs/reference/google-cloud-telcoautomation/0.13.0/com.google.cloud.telcoautomation.v1.ApplyHydratedDeploymentRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[HydratedDeployment](/java/docs/reference/google-cloud-telcoautomation/0.13.0/com.google.cloud.telcoautomation.v1.HydratedDeployment)>`  

### approveBlueprint(ApproveBlueprintRequest request, StreamObserver<Blueprint> responseObserver)

```
public default void approveBlueprint(ApproveBlueprintRequest request, StreamObserver<Blueprint> responseObserver)
```

Approves a blueprint and commits a new revision.

**Parameters**

**Name**

**Description**

`request`

`[ApproveBlueprintRequest](/java/docs/reference/google-cloud-telcoautomation/0.13.0/com.google.cloud.telcoautomation.v1.ApproveBlueprintRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Blueprint](/java/docs/reference/google-cloud-telcoautomation/0.13.0/com.google.cloud.telcoautomation.v1.Blueprint)>`  

### computeDeploymentStatus(ComputeDeploymentStatusRequest request, StreamObserver<ComputeDeploymentStatusResponse> responseObserver)

```
public default void computeDeploymentStatus(ComputeDeploymentStatusRequest request, StreamObserver<ComputeDeploymentStatusResponse> responseObserver)
```

Returns the requested deployment status.

**Parameters**

**Name**

**Description**

`request`

`[ComputeDeploymentStatusRequest](/java/docs/reference/google-cloud-telcoautomation/0.13.0/com.google.cloud.telcoautomation.v1.ComputeDeploymentStatusRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ComputeDeploymentStatusResponse](/java/docs/reference/google-cloud-telcoautomation/0.13.0/com.google.cloud.telcoautomation.v1.ComputeDeploymentStatusResponse)>`  

### createBlueprint(CreateBlueprintRequest request, StreamObserver<Blueprint> responseObserver)

```
public default void createBlueprint(CreateBlueprintRequest request, StreamObserver<Blueprint> responseObserver)
```

Creates a blueprint.

**Parameters**

**Name**

**Description**

`request`

`[CreateBlueprintRequest](/java/docs/reference/google-cloud-telcoautomation/0.13.0/com.google.cloud.telcoautomation.v1.CreateBlueprintRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Blueprint](/java/docs/reference/google-cloud-telcoautomation/0.13.0/com.google.cloud.telcoautomation.v1.Blueprint)>`  

### createDeployment(CreateDeploymentRequest request, StreamObserver<Deployment> responseObserver)

```
public default void createDeployment(CreateDeploymentRequest request, StreamObserver<Deployment> responseObserver)
```

Creates a deployment.

**Parameters**

**Name**

**Description**

`request`

`[CreateDeploymentRequest](/java/docs/reference/google-cloud-telcoautomation/0.13.0/com.google.cloud.telcoautomation.v1.CreateDeploymentRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Deployment](/java/docs/reference/google-cloud-telcoautomation/0.13.0/com.google.cloud.telcoautomation.v1.Deployment)>`  

### createEdgeSlm(CreateEdgeSlmRequest request, StreamObserver<Operation> responseObserver)

```
public default void createEdgeSlm(CreateEdgeSlmRequest request, StreamObserver<Operation> responseObserver)
```

Creates a new EdgeSlm in a given project and location.

**Parameters**

**Name**

**Description**

`request`

`[CreateEdgeSlmRequest](/java/docs/reference/google-cloud-telcoautomation/0.13.0/com.google.cloud.telcoautomation.v1.CreateEdgeSlmRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

### createOrchestrationCluster(CreateOrchestrationClusterRequest request, StreamObserver<Operation> responseObserver)

```
public default void createOrchestrationCluster(CreateOrchestrationClusterRequest request, StreamObserver<Operation> responseObserver)
```

Creates a new OrchestrationCluster in a given project and location.

**Parameters**

**Name**

**Description**

`request`

`[CreateOrchestrationClusterRequest](/java/docs/reference/google-cloud-telcoautomation/0.13.0/com.google.cloud.telcoautomation.v1.CreateOrchestrationClusterRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

### deleteBlueprint(DeleteBlueprintRequest request, StreamObserver<Empty> responseObserver)

```
public default void deleteBlueprint(DeleteBlueprintRequest request, StreamObserver<Empty> responseObserver)
```

Deletes a blueprint and all its revisions.

**Parameters**

**Name**

**Description**

`request`

`[DeleteBlueprintRequest](/java/docs/reference/google-cloud-telcoautomation/0.13.0/com.google.cloud.telcoautomation.v1.DeleteBlueprintRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`  

### deleteEdgeSlm(DeleteEdgeSlmRequest request, StreamObserver<Operation> responseObserver)

```
public default void deleteEdgeSlm(DeleteEdgeSlmRequest request, StreamObserver<Operation> responseObserver)
```

Deletes a single EdgeSlm.

**Parameters**

**Name**

**Description**

`request`

`[DeleteEdgeSlmRequest](/java/docs/reference/google-cloud-telcoautomation/0.13.0/com.google.cloud.telcoautomation.v1.DeleteEdgeSlmRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

### deleteOrchestrationCluster(DeleteOrchestrationClusterRequest request, StreamObserver<Operation> responseObserver)

```
public default void deleteOrchestrationCluster(DeleteOrchestrationClusterRequest request, StreamObserver<Operation> responseObserver)
```

Deletes a single OrchestrationCluster.

**Parameters**

**Name**

**Description**

`request`

`[DeleteOrchestrationClusterRequest](/java/docs/reference/google-cloud-telcoautomation/0.13.0/com.google.cloud.telcoautomation.v1.DeleteOrchestrationClusterRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

### discardBlueprintChanges(DiscardBlueprintChangesRequest request, StreamObserver<DiscardBlueprintChangesResponse> responseObserver)

```
public default void discardBlueprintChanges(DiscardBlueprintChangesRequest request, StreamObserver<DiscardBlueprintChangesResponse> responseObserver)
```

Discards the changes in a blueprint and reverts the blueprint to the last approved blueprint revision. No changes take place if a blueprint does not have revisions.

**Parameters**

**Name**

**Description**

`request`

`[DiscardBlueprintChangesRequest](/java/docs/reference/google-cloud-telcoautomation/0.13.0/com.google.cloud.telcoautomation.v1.DiscardBlueprintChangesRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[DiscardBlueprintChangesResponse](/java/docs/reference/google-cloud-telcoautomation/0.13.0/com.google.cloud.telcoautomation.v1.DiscardBlueprintChangesResponse)>`  

### discardDeploymentChanges(DiscardDeploymentChangesRequest request, StreamObserver<DiscardDeploymentChangesResponse> responseObserver)

```
public default void discardDeploymentChanges(DiscardDeploymentChangesRequest request, StreamObserver<DiscardDeploymentChangesResponse> responseObserver)
```

Discards the changes in a deployment and reverts the deployment to the last approved deployment revision. No changes take place if a deployment does not have revisions.

**Parameters**

**Name**

**Description**

`request`

`[DiscardDeploymentChangesRequest](/java/docs/reference/google-cloud-telcoautomation/0.13.0/com.google.cloud.telcoautomation.v1.DiscardDeploymentChangesRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[DiscardDeploymentChangesResponse](/java/docs/reference/google-cloud-telcoautomation/0.13.0/com.google.cloud.telcoautomation.v1.DiscardDeploymentChangesResponse)>`  

### getBlueprint(GetBlueprintRequest request, StreamObserver<Blueprint> responseObserver)

```
public default void getBlueprint(GetBlueprintRequest request, StreamObserver<Blueprint> responseObserver)
```

Returns the requested blueprint.

**Parameters**

**Name**

**Description**

`request`

`[GetBlueprintRequest](/java/docs/reference/google-cloud-telcoautomation/0.13.0/com.google.cloud.telcoautomation.v1.GetBlueprintRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Blueprint](/java/docs/reference/google-cloud-telcoautomation/0.13.0/com.google.cloud.telcoautomation.v1.Blueprint)>`  

### getDeployment(GetDeploymentRequest request, StreamObserver<Deployment> responseObserver)

```
public default void getDeployment(GetDeploymentRequest request, StreamObserver<Deployment> responseObserver)
```

Returns the requested deployment.

**Parameters**

**Name**

**Description**

`request`

`[GetDeploymentRequest](/java/docs/reference/google-cloud-telcoautomation/0.13.0/com.google.cloud.telcoautomation.v1.GetDeploymentRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Deployment](/java/docs/reference/google-cloud-telcoautomation/0.13.0/com.google.cloud.telcoautomation.v1.Deployment)>`  

### getEdgeSlm(GetEdgeSlmRequest request, StreamObserver<EdgeSlm> responseObserver)

```
public default void getEdgeSlm(GetEdgeSlmRequest request, StreamObserver<EdgeSlm> responseObserver)
```

Gets details of a single EdgeSlm.

**Parameters**

**Name**

**Description**

`request`

`[GetEdgeSlmRequest](/java/docs/reference/google-cloud-telcoautomation/0.13.0/com.google.cloud.telcoautomation.v1.GetEdgeSlmRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[EdgeSlm](/java/docs/reference/google-cloud-telcoautomation/0.13.0/com.google.cloud.telcoautomation.v1.EdgeSlm)>`  

### getHydratedDeployment(GetHydratedDeploymentRequest request, StreamObserver<HydratedDeployment> responseObserver)

```
public default void getHydratedDeployment(GetHydratedDeploymentRequest request, StreamObserver<HydratedDeployment> responseObserver)
```

Returns the requested hydrated deployment.

**Parameters**

**Name**

**Description**

`request`

`[GetHydratedDeploymentRequest](/java/docs/reference/google-cloud-telcoautomation/0.13.0/com.google.cloud.telcoautomation.v1.GetHydratedDeploymentRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[HydratedDeployment](/java/docs/reference/google-cloud-telcoautomation/0.13.0/com.google.cloud.telcoautomation.v1.HydratedDeployment)>`  

### getOrchestrationCluster(GetOrchestrationClusterRequest request, StreamObserver<OrchestrationCluster> responseObserver)

```
public default void getOrchestrationCluster(GetOrchestrationClusterRequest request, StreamObserver<OrchestrationCluster> responseObserver)
```

Gets details of a single OrchestrationCluster.

**Parameters**

**Name**

**Description**

`request`

`[GetOrchestrationClusterRequest](/java/docs/reference/google-cloud-telcoautomation/0.13.0/com.google.cloud.telcoautomation.v1.GetOrchestrationClusterRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[OrchestrationCluster](/java/docs/reference/google-cloud-telcoautomation/0.13.0/com.google.cloud.telcoautomation.v1.OrchestrationCluster)>`  

### getPublicBlueprint(GetPublicBlueprintRequest request, StreamObserver<PublicBlueprint> responseObserver)

```
public default void getPublicBlueprint(GetPublicBlueprintRequest request, StreamObserver<PublicBlueprint> responseObserver)
```

Returns the requested public blueprint.

**Parameters**

**Name**

**Description**

`request`

`[GetPublicBlueprintRequest](/java/docs/reference/google-cloud-telcoautomation/0.13.0/com.google.cloud.telcoautomation.v1.GetPublicBlueprintRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[PublicBlueprint](/java/docs/reference/google-cloud-telcoautomation/0.13.0/com.google.cloud.telcoautomation.v1.PublicBlueprint)>`  

### listBlueprintRevisions(ListBlueprintRevisionsRequest request, StreamObserver<ListBlueprintRevisionsResponse> responseObserver)

```
public default void listBlueprintRevisions(ListBlueprintRevisionsRequest request, StreamObserver<ListBlueprintRevisionsResponse> responseObserver)
```

List blueprint revisions of a given blueprint.

**Parameters**

**Name**

**Description**

`request`

`[ListBlueprintRevisionsRequest](/java/docs/reference/google-cloud-telcoautomation/0.13.0/com.google.cloud.telcoautomation.v1.ListBlueprintRevisionsRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ListBlueprintRevisionsResponse](/java/docs/reference/google-cloud-telcoautomation/0.13.0/com.google.cloud.telcoautomation.v1.ListBlueprintRevisionsResponse)>`  

### listBlueprints(ListBlueprintsRequest request, StreamObserver<ListBlueprintsResponse> responseObserver)

```
public default void listBlueprints(ListBlueprintsRequest request, StreamObserver<ListBlueprintsResponse> responseObserver)
```

List all blueprints.

**Parameters**

**Name**

**Description**

`request`

`[ListBlueprintsRequest](/java/docs/reference/google-cloud-telcoautomation/0.13.0/com.google.cloud.telcoautomation.v1.ListBlueprintsRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ListBlueprintsResponse](/java/docs/reference/google-cloud-telcoautomation/0.13.0/com.google.cloud.telcoautomation.v1.ListBlueprintsResponse)>`  

### listDeploymentRevisions(ListDeploymentRevisionsRequest request, StreamObserver<ListDeploymentRevisionsResponse> responseObserver)

```
public default void listDeploymentRevisions(ListDeploymentRevisionsRequest request, StreamObserver<ListDeploymentRevisionsResponse> responseObserver)
```

List deployment revisions of a given deployment.

**Parameters**

**Name**

**Description**

`request`

`[ListDeploymentRevisionsRequest](/java/docs/reference/google-cloud-telcoautomation/0.13.0/com.google.cloud.telcoautomation.v1.ListDeploymentRevisionsRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ListDeploymentRevisionsResponse](/java/docs/reference/google-cloud-telcoautomation/0.13.0/com.google.cloud.telcoautomation.v1.ListDeploymentRevisionsResponse)>`  

### listDeployments(ListDeploymentsRequest request, StreamObserver<ListDeploymentsResponse> responseObserver)

```
public default void listDeployments(ListDeploymentsRequest request, StreamObserver<ListDeploymentsResponse> responseObserver)
```

List all deployments.

**Parameters**

**Name**

**Description**

`request`

`[ListDeploymentsRequest](/java/docs/reference/google-cloud-telcoautomation/0.13.0/com.google.cloud.telcoautomation.v1.ListDeploymentsRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ListDeploymentsResponse](/java/docs/reference/google-cloud-telcoautomation/0.13.0/com.google.cloud.telcoautomation.v1.ListDeploymentsResponse)>`  

### listEdgeSlms(ListEdgeSlmsRequest request, StreamObserver<ListEdgeSlmsResponse> responseObserver)

```
public default void listEdgeSlms(ListEdgeSlmsRequest request, StreamObserver<ListEdgeSlmsResponse> responseObserver)
```

Lists EdgeSlms in a given project and location.

**Parameters**

**Name**

**Description**

`request`

`[ListEdgeSlmsRequest](/java/docs/reference/google-cloud-telcoautomation/0.13.0/com.google.cloud.telcoautomation.v1.ListEdgeSlmsRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ListEdgeSlmsResponse](/java/docs/reference/google-cloud-telcoautomation/0.13.0/com.google.cloud.telcoautomation.v1.ListEdgeSlmsResponse)>`  

### listHydratedDeployments(ListHydratedDeploymentsRequest request, StreamObserver<ListHydratedDeploymentsResponse> responseObserver)

```
public default void listHydratedDeployments(ListHydratedDeploymentsRequest request, StreamObserver<ListHydratedDeploymentsResponse> responseObserver)
```

List all hydrated deployments present under a deployment.

**Parameters**

**Name**

**Description**

`request`

`[ListHydratedDeploymentsRequest](/java/docs/reference/google-cloud-telcoautomation/0.13.0/com.google.cloud.telcoautomation.v1.ListHydratedDeploymentsRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ListHydratedDeploymentsResponse](/java/docs/reference/google-cloud-telcoautomation/0.13.0/com.google.cloud.telcoautomation.v1.ListHydratedDeploymentsResponse)>`  

### listOrchestrationClusters(ListOrchestrationClustersRequest request, StreamObserver<ListOrchestrationClustersResponse> responseObserver)

```
public default void listOrchestrationClusters(ListOrchestrationClustersRequest request, StreamObserver<ListOrchestrationClustersResponse> responseObserver)
```

Lists OrchestrationClusters in a given project and location.

**Parameters**

**Name**

**Description**

`request`

`[ListOrchestrationClustersRequest](/java/docs/reference/google-cloud-telcoautomation/0.13.0/com.google.cloud.telcoautomation.v1.ListOrchestrationClustersRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ListOrchestrationClustersResponse](/java/docs/reference/google-cloud-telcoautomation/0.13.0/com.google.cloud.telcoautomation.v1.ListOrchestrationClustersResponse)>`  

### listPublicBlueprints(ListPublicBlueprintsRequest request, StreamObserver<ListPublicBlueprintsResponse> responseObserver)

```
public default void listPublicBlueprints(ListPublicBlueprintsRequest request, StreamObserver<ListPublicBlueprintsResponse> responseObserver)
```

Lists the blueprints in TNA's public catalog. Default page size = 20, Max Page Size = 100.

**Parameters**

**Name**

**Description**

`request`

`[ListPublicBlueprintsRequest](/java/docs/reference/google-cloud-telcoautomation/0.13.0/com.google.cloud.telcoautomation.v1.ListPublicBlueprintsRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ListPublicBlueprintsResponse](/java/docs/reference/google-cloud-telcoautomation/0.13.0/com.google.cloud.telcoautomation.v1.ListPublicBlueprintsResponse)>`  

### proposeBlueprint(ProposeBlueprintRequest request, StreamObserver<Blueprint> responseObserver)

```
public default void proposeBlueprint(ProposeBlueprintRequest request, StreamObserver<Blueprint> responseObserver)
```

Proposes a blueprint for approval of changes.

**Parameters**

**Name**

**Description**

`request`

`[ProposeBlueprintRequest](/java/docs/reference/google-cloud-telcoautomation/0.13.0/com.google.cloud.telcoautomation.v1.ProposeBlueprintRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Blueprint](/java/docs/reference/google-cloud-telcoautomation/0.13.0/com.google.cloud.telcoautomation.v1.Blueprint)>`  

### rejectBlueprint(RejectBlueprintRequest request, StreamObserver<Blueprint> responseObserver)

```
public default void rejectBlueprint(RejectBlueprintRequest request, StreamObserver<Blueprint> responseObserver)
```

Rejects a blueprint revision proposal and flips it back to Draft state.

**Parameters**

**Name**

**Description**

`request`

`[RejectBlueprintRequest](/java/docs/reference/google-cloud-telcoautomation/0.13.0/com.google.cloud.telcoautomation.v1.RejectBlueprintRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Blueprint](/java/docs/reference/google-cloud-telcoautomation/0.13.0/com.google.cloud.telcoautomation.v1.Blueprint)>`  

### removeDeployment(RemoveDeploymentRequest request, StreamObserver<Empty> responseObserver)

```
public default void removeDeployment(RemoveDeploymentRequest request, StreamObserver<Empty> responseObserver)
```

Removes the deployment by marking it as DELETING. Post which deployment and it's revisions gets deleted.

**Parameters**

**Name**

**Description**

`request`

`[RemoveDeploymentRequest](/java/docs/reference/google-cloud-telcoautomation/0.13.0/com.google.cloud.telcoautomation.v1.RemoveDeploymentRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`  

### rollbackDeployment(RollbackDeploymentRequest request, StreamObserver<Deployment> responseObserver)

```
public default void rollbackDeployment(RollbackDeploymentRequest request, StreamObserver<Deployment> responseObserver)
```

Rollback the active deployment to the given past approved deployment revision.

**Parameters**

**Name**

**Description**

`request`

`[RollbackDeploymentRequest](/java/docs/reference/google-cloud-telcoautomation/0.13.0/com.google.cloud.telcoautomation.v1.RollbackDeploymentRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Deployment](/java/docs/reference/google-cloud-telcoautomation/0.13.0/com.google.cloud.telcoautomation.v1.Deployment)>`  

### searchBlueprintRevisions(SearchBlueprintRevisionsRequest request, StreamObserver<SearchBlueprintRevisionsResponse> responseObserver)

```
public default void searchBlueprintRevisions(SearchBlueprintRevisionsRequest request, StreamObserver<SearchBlueprintRevisionsResponse> responseObserver)
```

Searches across blueprint revisions.

**Parameters**

**Name**

**Description**

`request`

`[SearchBlueprintRevisionsRequest](/java/docs/reference/google-cloud-telcoautomation/0.13.0/com.google.cloud.telcoautomation.v1.SearchBlueprintRevisionsRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[SearchBlueprintRevisionsResponse](/java/docs/reference/google-cloud-telcoautomation/0.13.0/com.google.cloud.telcoautomation.v1.SearchBlueprintRevisionsResponse)>`  

### searchDeploymentRevisions(SearchDeploymentRevisionsRequest request, StreamObserver<SearchDeploymentRevisionsResponse> responseObserver)

```
public default void searchDeploymentRevisions(SearchDeploymentRevisionsRequest request, StreamObserver<SearchDeploymentRevisionsResponse> responseObserver)
```

Searches across deployment revisions.

**Parameters**

**Name**

**Description**

`request`

`[SearchDeploymentRevisionsRequest](/java/docs/reference/google-cloud-telcoautomation/0.13.0/com.google.cloud.telcoautomation.v1.SearchDeploymentRevisionsRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[SearchDeploymentRevisionsResponse](/java/docs/reference/google-cloud-telcoautomation/0.13.0/com.google.cloud.telcoautomation.v1.SearchDeploymentRevisionsResponse)>`  

### updateBlueprint(UpdateBlueprintRequest request, StreamObserver<Blueprint> responseObserver)

```
public default void updateBlueprint(UpdateBlueprintRequest request, StreamObserver<Blueprint> responseObserver)
```

Updates a blueprint.

**Parameters**

**Name**

**Description**

`request`

`[UpdateBlueprintRequest](/java/docs/reference/google-cloud-telcoautomation/0.13.0/com.google.cloud.telcoautomation.v1.UpdateBlueprintRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Blueprint](/java/docs/reference/google-cloud-telcoautomation/0.13.0/com.google.cloud.telcoautomation.v1.Blueprint)>`  

### updateDeployment(UpdateDeploymentRequest request, StreamObserver<Deployment> responseObserver)

```
public default void updateDeployment(UpdateDeploymentRequest request, StreamObserver<Deployment> responseObserver)
```

Updates a deployment.

**Parameters**

**Name**

**Description**

`request`

`[UpdateDeploymentRequest](/java/docs/reference/google-cloud-telcoautomation/0.13.0/com.google.cloud.telcoautomation.v1.UpdateDeploymentRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Deployment](/java/docs/reference/google-cloud-telcoautomation/0.13.0/com.google.cloud.telcoautomation.v1.Deployment)>`  

### updateHydratedDeployment(UpdateHydratedDeploymentRequest request, StreamObserver<HydratedDeployment> responseObserver)

```
public default void updateHydratedDeployment(UpdateHydratedDeploymentRequest request, StreamObserver<HydratedDeployment> responseObserver)
```

Updates a hydrated deployment.

**Parameters**

**Name**

**Description**

`request`

`[UpdateHydratedDeploymentRequest](/java/docs/reference/google-cloud-telcoautomation/0.13.0/com.google.cloud.telcoautomation.v1.UpdateHydratedDeploymentRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[HydratedDeployment](/java/docs/reference/google-cloud-telcoautomation/0.13.0/com.google.cloud.telcoautomation.v1.HydratedDeployment)>`  

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
