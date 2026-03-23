-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class ProjectsGrpc.ProjectsStub (1.14.0) Stay organized with collections Save and categorize content based on your preferences.

1.89.0 (latest) 1.87.0 1.85.0 1.84.0 1.82.0 1.80.0 1.78.0 1.77.0 1.76.0 1.75.0 1.74.0 1.72.0 1.70.0 1.69.0 1.66.0 1.65.0 1.64.0 1.62.0 1.61.0 1.60.0 1.59.0 1.58.0 1.57.0 1.56.0 1.55.0 1.54.0 1.53.0 1.51.0 1.50.0 1.49.0 1.48.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.39.0 1.38.0 1.37.0 1.36.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.26.0 1.25.0 1.24.0 1.23.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.0 1.11.0 1.10.0 1.9.0 1.8.0 1.7.0 1.6.0 1.5.6 1.4.0 1.3.2 1.2.12

```
public static final class ProjectsGrpc.ProjectsStub extends AbstractAsyncStub<ProjectsGrpc.ProjectsStub>
```

Manages Google Cloud Projects.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> io.grpc.stub.AbstractStub \> io.grpc.stub.AbstractAsyncStub \> ProjectsGrpc.ProjectsStub

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

io.grpc.stub.AbstractStub.withDeadlineAfter(long,java.util.concurrent.TimeUnit)

io.grpc.stub.AbstractStub.withExecutor(java.util.concurrent.Executor)

io.grpc.stub.AbstractStub.withInterceptors(io.grpc.ClientInterceptor...)

io.grpc.stub.AbstractStub.withMaxInboundMessageSize(int)

io.grpc.stub.AbstractStub.withMaxOutboundMessageSize(int)

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
protected ProjectsGrpc.ProjectsStub build(Channel channel, CallOptions callOptions)
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

`[ProjectsGrpc.ProjectsStub](/java/docs/reference/google-cloud-resourcemanager/1.14.0/com.google.cloud.resourcemanager.v3.ProjectsGrpc.ProjectsStub)`

**Overrides**

io.grpc.stub.AbstractStub.build(io.grpc.Channel,io.grpc.CallOptions)

### createProject(CreateProjectRequest request, StreamObserver<Operation> responseObserver)

```
public void createProject(CreateProjectRequest request, StreamObserver<Operation> responseObserver)
```

Request that a new project be created. The result is an `Operation` which can be used to track the creation process. This process usually takes a few seconds, but can sometimes take much longer. The tracking `Operation` is automatically deleted after a few hours, so there is no need to call `DeleteOperation`.

**Parameters**

**Name**

**Description**

`request`

`[CreateProjectRequest](/java/docs/reference/google-cloud-resourcemanager/1.14.0/com.google.cloud.resourcemanager.v3.CreateProjectRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

### deleteProject(DeleteProjectRequest request, StreamObserver<Operation> responseObserver)

```
public void deleteProject(DeleteProjectRequest request, StreamObserver<Operation> responseObserver)
```

Marks the project identified by the specified `name` (for example, `projects/415104041262`) for deletion. This method will only affect the project if it has a lifecycle state of ACTIVE. This method changes the Project's lifecycle state from ACTIVE to DELETE\_REQUESTED. The deletion starts at an unspecified time, at which point the Project is no longer accessible. Until the deletion completes, you can check the lifecycle state checked by retrieving the project with \[GetProject\] \[google.cloud.resourcemanager.v3.Projects.GetProject\], and the project remains visible to \[ListProjects\] \[google.cloud.resourcemanager.v3.Projects.ListProjects\]. However, you cannot update the project. After the deletion completes, the project is not retrievable by the \[GetProject\] \[google.cloud.resourcemanager.v3.Projects.GetProject\], \[ListProjects\] \[google.cloud.resourcemanager.v3.Projects.ListProjects\], and SearchProjects methods. This method behaves idempotently, such that deleting a `DELETE_REQUESTED` project will not cause an error, but also won't do anything. The caller must have `resourcemanager.projects.delete` permissions for this project.

**Parameters**

**Name**

**Description**

`request`

`[DeleteProjectRequest](/java/docs/reference/google-cloud-resourcemanager/1.14.0/com.google.cloud.resourcemanager.v3.DeleteProjectRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

### getIamPolicy(GetIamPolicyRequest request, StreamObserver<Policy> responseObserver)

```
public void getIamPolicy(GetIamPolicyRequest request, StreamObserver<Policy> responseObserver)
```

Returns the IAM access control policy for the specified project. Permission is denied if the policy or the resource do not exist.

**Parameters**

**Name**

**Description**

`request`

`com.google.iam.v1.GetIamPolicyRequest`  

`responseObserver`

`io.grpc.stub.StreamObserver<com.google.iam.v1.Policy>`  

### getProject(GetProjectRequest request, StreamObserver<Project> responseObserver)

```
public void getProject(GetProjectRequest request, StreamObserver<Project> responseObserver)
```

Retrieves the project identified by the specified `name` (for example, `projects/415104041262`). The caller must have `resourcemanager.projects.get` permission for this project.

**Parameters**

**Name**

**Description**

`request`

`[GetProjectRequest](/java/docs/reference/google-cloud-resourcemanager/1.14.0/com.google.cloud.resourcemanager.v3.GetProjectRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Project](/java/docs/reference/google-cloud-resourcemanager/1.14.0/com.google.cloud.resourcemanager.v3.Project)>`  

### listProjects(ListProjectsRequest request, StreamObserver<ListProjectsResponse> responseObserver)

```
public void listProjects(ListProjectsRequest request, StreamObserver<ListProjectsResponse> responseObserver)
```

Lists projects that are direct children of the specified folder or organization resource. `list()` provides a strongly consistent view of the projects underneath the specified parent resource. `list()` returns projects sorted based upon the (ascending) lexical ordering of their `display_name`. The caller must have `resourcemanager.projects.list` permission on the identified parent.

**Parameters**

**Name**

**Description**

`request`

`[ListProjectsRequest](/java/docs/reference/google-cloud-resourcemanager/1.14.0/com.google.cloud.resourcemanager.v3.ListProjectsRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ListProjectsResponse](/java/docs/reference/google-cloud-resourcemanager/1.14.0/com.google.cloud.resourcemanager.v3.ListProjectsResponse)>`  

### moveProject(MoveProjectRequest request, StreamObserver<Operation> responseObserver)

```
public void moveProject(MoveProjectRequest request, StreamObserver<Operation> responseObserver)
```

Move a project to another place in your resource hierarchy, under a new resource parent. Returns an operation which can be used to track the process of the project move workflow. Upon success, the `Operation.response` field will be populated with the moved project. The caller must have `resourcemanager.projects.update` permission on the project and have `resourcemanager.projects.move` permission on the project's current and proposed new parent.

**Parameters**

**Name**

**Description**

`request`

`[MoveProjectRequest](/java/docs/reference/google-cloud-resourcemanager/1.14.0/com.google.cloud.resourcemanager.v3.MoveProjectRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

### searchProjects(SearchProjectsRequest request, StreamObserver<SearchProjectsResponse> responseObserver)

```
public void searchProjects(SearchProjectsRequest request, StreamObserver<SearchProjectsResponse> responseObserver)
```

Search for projects that the caller has both `resourcemanager.projects.get` permission on, and also satisfy the specified query. This method returns projects in an unspecified order. This method is eventually consistent with project mutations; this means that a newly created project may not appear in the results or recent updates to an existing project may not be reflected in the results. To retrieve the latest state of a project, use the GetProject method.

**Parameters**

**Name**

**Description**

`request`

`[SearchProjectsRequest](/java/docs/reference/google-cloud-resourcemanager/1.14.0/com.google.cloud.resourcemanager.v3.SearchProjectsRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[SearchProjectsResponse](/java/docs/reference/google-cloud-resourcemanager/1.14.0/com.google.cloud.resourcemanager.v3.SearchProjectsResponse)>`  

### setIamPolicy(SetIamPolicyRequest request, StreamObserver<Policy> responseObserver)

```
public void setIamPolicy(SetIamPolicyRequest request, StreamObserver<Policy> responseObserver)
```

Sets the IAM access control policy for the specified project. CAUTION: This method will replace the existing policy, and cannot be used to append additional IAM settings. Note: Removing service accounts from policies or changing their roles can render services completely inoperable. It is important to understand how the service account is being used before removing or updating its roles. The following constraints apply when using `setIamPolicy()`:

-   Project does not support `allUsers` and `allAuthenticatedUsers` as `members` in a `Binding` of a `Policy`.
-   The owner role can be granted to a `user`, `serviceAccount`, or a group that is part of an organization. For example, group@myownpersonaldomain.com could be added as an owner to a project in the myownpersonaldomain.com organization, but not the examplepetstore.com organization.
-   Service accounts can be made owners of a project directly without any restrictions. However, to be added as an owner, a user must be invited using the Cloud Platform console and must accept the invitation.
-   A user cannot be granted the owner role using `setIamPolicy()`. The user must be granted the owner role using the Cloud Platform Console and must explicitly accept the invitation.
-   Invitations to grant the owner role cannot be sent using `setIamPolicy()`; they must be sent only using the Cloud Platform Console.
-   Membership changes that leave the project without any owners that have accepted the Terms of Service (ToS) will be rejected.
-   If the project is not part of an organization, there must be at least one owner who has accepted the Terms of Service (ToS) agreement in the policy. Calling `setIamPolicy()` to remove the last ToS-accepted owner from the policy will fail. This restriction also applies to legacy projects that no longer have owners who have accepted the ToS. Edits to IAM policies will be rejected until the lack of a ToS-accepting owner is rectified.
-   Calling this method requires enabling the App Engine Admin API.

**Parameters**

**Name**

**Description**

`request`

`com.google.iam.v1.SetIamPolicyRequest`  

`responseObserver`

`io.grpc.stub.StreamObserver<com.google.iam.v1.Policy>`  

### testIamPermissions(TestIamPermissionsRequest request, StreamObserver<TestIamPermissionsResponse> responseObserver)

```
public void testIamPermissions(TestIamPermissionsRequest request, StreamObserver<TestIamPermissionsResponse> responseObserver)
```

Returns permissions that a caller has on the specified project.

**Parameters**

**Name**

**Description**

`request`

`com.google.iam.v1.TestIamPermissionsRequest`  

`responseObserver`

`io.grpc.stub.StreamObserver<com.google.iam.v1.TestIamPermissionsResponse>`  

### undeleteProject(UndeleteProjectRequest request, StreamObserver<Operation> responseObserver)

```
public void undeleteProject(UndeleteProjectRequest request, StreamObserver<Operation> responseObserver)
```

Restores the project identified by the specified `name` (for example, `projects/415104041262`). You can only use this method for a project that has a lifecycle state of \[DELETE\_REQUESTED\] \[Projects.State.DELETE\_REQUESTED\]. After deletion starts, the project cannot be restored. The caller must have `resourcemanager.projects.undelete` permission for this project.

**Parameters**

**Name**

**Description**

`request`

`[UndeleteProjectRequest](/java/docs/reference/google-cloud-resourcemanager/1.14.0/com.google.cloud.resourcemanager.v3.UndeleteProjectRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

### updateProject(UpdateProjectRequest request, StreamObserver<Operation> responseObserver)

```
public void updateProject(UpdateProjectRequest request, StreamObserver<Operation> responseObserver)
```

Updates the `display_name` and labels of the project identified by the specified `name` (for example, `projects/415104041262`). Deleting all labels requires an update mask for labels field. The caller must have `resourcemanager.projects.update` permission for this project.

**Parameters**

**Name**

**Description**

`request`

`[UpdateProjectRequest](/java/docs/reference/google-cloud-resourcemanager/1.14.0/com.google.cloud.resourcemanager.v3.UpdateProjectRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
