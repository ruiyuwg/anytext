-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class SecurityCenterGrpc.SecurityCenterImplBase (2.11.1) Stay organized with collections Save and categorize content based on your preferences.

2.95.0 (latest) 2.93.0 2.91.0 2.90.0 2.88.0 2.86.0 2.84.0 2.83.0 2.82.0 2.81.0 2.80.0 2.78.0 2.76.0 2.75.0 2.72.0 2.71.0 2.70.0 2.68.0 2.67.0 2.66.0 2.65.0 2.64.0 2.63.0 2.62.0 2.61.0 2.60.0 2.59.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.51.0 2.50.0 2.49.0 2.48.0 2.47.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.1 2.10.0 2.9.0 2.8.0 2.7.1 2.6.0 2.5.6 2.3.2

```
public abstract static class SecurityCenterGrpc.SecurityCenterImplBase implements BindableService
```

V1p1Beta1 APIs for Security Center service.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> SecurityCenterGrpc.SecurityCenterImplBase

## Implements

io.grpc.BindableService

## Inherited Members

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

## Constructors

### SecurityCenterImplBase()

```
public SecurityCenterImplBase()
```

## Methods

### bindService()

```
public final ServerServiceDefinition bindService()
```

**Returns**

**Type**

**Description**

io.grpc.ServerServiceDefinition

### createFinding(CreateFindingRequest request, StreamObserver<Finding> responseObserver)

```
public void createFinding(CreateFindingRequest request, StreamObserver<Finding> responseObserver)
```

Creates a finding. The corresponding source must exist for finding creation to succeed.

**Parameters**

**Name**

**Description**

request

`[CreateFindingRequest](/java/docs/reference/google-cloud-securitycenter/2.11.1/com.google.cloud.securitycenter.v1p1beta1.CreateFindingRequest)`  

responseObserver

`io.grpc.stub.StreamObserver<[Finding](/java/docs/reference/google-cloud-securitycenter/2.11.1/com.google.cloud.securitycenter.v1p1beta1.Finding)>`  

### createNotificationConfig(CreateNotificationConfigRequest request, StreamObserver<NotificationConfig> responseObserver)

```
public void createNotificationConfig(CreateNotificationConfigRequest request, StreamObserver<NotificationConfig> responseObserver)
```

Creates a notification config.

**Parameters**

**Name**

**Description**

request

`[CreateNotificationConfigRequest](/java/docs/reference/google-cloud-securitycenter/2.11.1/com.google.cloud.securitycenter.v1p1beta1.CreateNotificationConfigRequest)`  

responseObserver

`io.grpc.stub.StreamObserver<[NotificationConfig](/java/docs/reference/google-cloud-securitycenter/2.11.1/com.google.cloud.securitycenter.v1p1beta1.NotificationConfig)>`  

### createSource(CreateSourceRequest request, StreamObserver<Source> responseObserver)

```
public void createSource(CreateSourceRequest request, StreamObserver<Source> responseObserver)
```

Creates a source.

**Parameters**

**Name**

**Description**

request

`[CreateSourceRequest](/java/docs/reference/google-cloud-securitycenter/2.11.1/com.google.cloud.securitycenter.v1p1beta1.CreateSourceRequest)`  

responseObserver

`io.grpc.stub.StreamObserver<[Source](/java/docs/reference/google-cloud-securitycenter/2.11.1/com.google.cloud.securitycenter.v1p1beta1.Source)>`  

### deleteNotificationConfig(DeleteNotificationConfigRequest request, StreamObserver<Empty> responseObserver)

```
public void deleteNotificationConfig(DeleteNotificationConfigRequest request, StreamObserver<Empty> responseObserver)
```

Deletes a notification config.

**Parameters**

**Name**

**Description**

request

`[DeleteNotificationConfigRequest](/java/docs/reference/google-cloud-securitycenter/2.11.1/com.google.cloud.securitycenter.v1p1beta1.DeleteNotificationConfigRequest)`  

responseObserver

`io.grpc.stub.StreamObserver<[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`  

### getIamPolicy(GetIamPolicyRequest request, StreamObserver<Policy> responseObserver)

```
public void getIamPolicy(GetIamPolicyRequest request, StreamObserver<Policy> responseObserver)
```

Gets the access control policy on the specified Source.

**Parameters**

**Name**

**Description**

request

`com.google.iam.v1.GetIamPolicyRequest`  

responseObserver

`io.grpc.stub.StreamObserver<com.google.iam.v1.Policy>`  

### getNotificationConfig(GetNotificationConfigRequest request, StreamObserver<NotificationConfig> responseObserver)

```
public void getNotificationConfig(GetNotificationConfigRequest request, StreamObserver<NotificationConfig> responseObserver)
```

Gets a notification config.

**Parameters**

**Name**

**Description**

request

`[GetNotificationConfigRequest](/java/docs/reference/google-cloud-securitycenter/2.11.1/com.google.cloud.securitycenter.v1p1beta1.GetNotificationConfigRequest)`  

responseObserver

`io.grpc.stub.StreamObserver<[NotificationConfig](/java/docs/reference/google-cloud-securitycenter/2.11.1/com.google.cloud.securitycenter.v1p1beta1.NotificationConfig)>`  

### getOrganizationSettings(GetOrganizationSettingsRequest request, StreamObserver<OrganizationSettings> responseObserver)

```
public void getOrganizationSettings(GetOrganizationSettingsRequest request, StreamObserver<OrganizationSettings> responseObserver)
```

Gets the settings for an organization.

**Parameters**

**Name**

**Description**

request

`[GetOrganizationSettingsRequest](/java/docs/reference/google-cloud-securitycenter/2.11.1/com.google.cloud.securitycenter.v1p1beta1.GetOrganizationSettingsRequest)`  

responseObserver

`io.grpc.stub.StreamObserver<[OrganizationSettings](/java/docs/reference/google-cloud-securitycenter/2.11.1/com.google.cloud.securitycenter.v1p1beta1.OrganizationSettings)>`  

### getSource(GetSourceRequest request, StreamObserver<Source> responseObserver)

```
public void getSource(GetSourceRequest request, StreamObserver<Source> responseObserver)
```

Gets a source.

**Parameters**

**Name**

**Description**

request

`[GetSourceRequest](/java/docs/reference/google-cloud-securitycenter/2.11.1/com.google.cloud.securitycenter.v1p1beta1.GetSourceRequest)`  

responseObserver

`io.grpc.stub.StreamObserver<[Source](/java/docs/reference/google-cloud-securitycenter/2.11.1/com.google.cloud.securitycenter.v1p1beta1.Source)>`  

### groupAssets(GroupAssetsRequest request, StreamObserver<GroupAssetsResponse> responseObserver)

```
public void groupAssets(GroupAssetsRequest request, StreamObserver<GroupAssetsResponse> responseObserver)
```

Filters an organization's assets and groups them by their specified properties.

**Parameters**

**Name**

**Description**

request

`[GroupAssetsRequest](/java/docs/reference/google-cloud-securitycenter/2.11.1/com.google.cloud.securitycenter.v1p1beta1.GroupAssetsRequest)`  

responseObserver

`io.grpc.stub.StreamObserver<[GroupAssetsResponse](/java/docs/reference/google-cloud-securitycenter/2.11.1/com.google.cloud.securitycenter.v1p1beta1.GroupAssetsResponse)>`  

### groupFindings(GroupFindingsRequest request, StreamObserver<GroupFindingsResponse> responseObserver)

```
public void groupFindings(GroupFindingsRequest request, StreamObserver<GroupFindingsResponse> responseObserver)
```

Filters an organization or source's findings and groups them by their specified properties. To group across all sources provide a `-` as the source id. Example: /v1/organizations/{organization\_id}/sources/-/findings, /v1/folders/{folder\_id}/sources/-/findings, /v1/projects/{project\_id}/sources/-/findings

**Parameters**

**Name**

**Description**

request

`[GroupFindingsRequest](/java/docs/reference/google-cloud-securitycenter/2.11.1/com.google.cloud.securitycenter.v1p1beta1.GroupFindingsRequest)`  

responseObserver

`io.grpc.stub.StreamObserver<[GroupFindingsResponse](/java/docs/reference/google-cloud-securitycenter/2.11.1/com.google.cloud.securitycenter.v1p1beta1.GroupFindingsResponse)>`  

### listAssets(ListAssetsRequest request, StreamObserver<ListAssetsResponse> responseObserver)

```
public void listAssets(ListAssetsRequest request, StreamObserver<ListAssetsResponse> responseObserver)
```

Lists an organization's assets.

**Parameters**

**Name**

**Description**

request

`[ListAssetsRequest](/java/docs/reference/google-cloud-securitycenter/2.11.1/com.google.cloud.securitycenter.v1p1beta1.ListAssetsRequest)`  

responseObserver

`io.grpc.stub.StreamObserver<[ListAssetsResponse](/java/docs/reference/google-cloud-securitycenter/2.11.1/com.google.cloud.securitycenter.v1p1beta1.ListAssetsResponse)>`  

### listFindings(ListFindingsRequest request, StreamObserver<ListFindingsResponse> responseObserver)

```
public void listFindings(ListFindingsRequest request, StreamObserver<ListFindingsResponse> responseObserver)
```

Lists an organization or source's findings. To list across all sources provide a `-` as the source id. Example: /v1p1beta1/organizations/{organization\_id}/sources/-/findings

**Parameters**

**Name**

**Description**

request

`[ListFindingsRequest](/java/docs/reference/google-cloud-securitycenter/2.11.1/com.google.cloud.securitycenter.v1p1beta1.ListFindingsRequest)`  

responseObserver

`io.grpc.stub.StreamObserver<[ListFindingsResponse](/java/docs/reference/google-cloud-securitycenter/2.11.1/com.google.cloud.securitycenter.v1p1beta1.ListFindingsResponse)>`  

### listNotificationConfigs(ListNotificationConfigsRequest request, StreamObserver<ListNotificationConfigsResponse> responseObserver)

```
public void listNotificationConfigs(ListNotificationConfigsRequest request, StreamObserver<ListNotificationConfigsResponse> responseObserver)
```

Lists notification configs.

**Parameters**

**Name**

**Description**

request

`[ListNotificationConfigsRequest](/java/docs/reference/google-cloud-securitycenter/2.11.1/com.google.cloud.securitycenter.v1p1beta1.ListNotificationConfigsRequest)`  

responseObserver

`io.grpc.stub.StreamObserver<[ListNotificationConfigsResponse](/java/docs/reference/google-cloud-securitycenter/2.11.1/com.google.cloud.securitycenter.v1p1beta1.ListNotificationConfigsResponse)>`  

### listSources(ListSourcesRequest request, StreamObserver<ListSourcesResponse> responseObserver)

```
public void listSources(ListSourcesRequest request, StreamObserver<ListSourcesResponse> responseObserver)
```

Lists all sources belonging to an organization.

**Parameters**

**Name**

**Description**

request

`[ListSourcesRequest](/java/docs/reference/google-cloud-securitycenter/2.11.1/com.google.cloud.securitycenter.v1p1beta1.ListSourcesRequest)`  

responseObserver

`io.grpc.stub.StreamObserver<[ListSourcesResponse](/java/docs/reference/google-cloud-securitycenter/2.11.1/com.google.cloud.securitycenter.v1p1beta1.ListSourcesResponse)>`  

### runAssetDiscovery(RunAssetDiscoveryRequest request, StreamObserver<Operation> responseObserver)

```
public void runAssetDiscovery(RunAssetDiscoveryRequest request, StreamObserver<Operation> responseObserver)
```

Runs asset discovery. The discovery is tracked with a long-running operation. This API can only be called with limited frequency for an organization. If it is called too frequently the caller will receive a TOO\_MANY\_REQUESTS error.

**Parameters**

**Name**

**Description**

request

`[RunAssetDiscoveryRequest](/java/docs/reference/google-cloud-securitycenter/2.11.1/com.google.cloud.securitycenter.v1p1beta1.RunAssetDiscoveryRequest)`  

responseObserver

`io.grpc.stub.StreamObserver<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

### setFindingState(SetFindingStateRequest request, StreamObserver<Finding> responseObserver)

```
public void setFindingState(SetFindingStateRequest request, StreamObserver<Finding> responseObserver)
```

Updates the state of a finding.

**Parameters**

**Name**

**Description**

request

`[SetFindingStateRequest](/java/docs/reference/google-cloud-securitycenter/2.11.1/com.google.cloud.securitycenter.v1p1beta1.SetFindingStateRequest)`  

responseObserver

`io.grpc.stub.StreamObserver<[Finding](/java/docs/reference/google-cloud-securitycenter/2.11.1/com.google.cloud.securitycenter.v1p1beta1.Finding)>`  

### setIamPolicy(SetIamPolicyRequest request, StreamObserver<Policy> responseObserver)

```
public void setIamPolicy(SetIamPolicyRequest request, StreamObserver<Policy> responseObserver)
```

Sets the access control policy on the specified Source.

**Parameters**

**Name**

**Description**

request

`com.google.iam.v1.SetIamPolicyRequest`  

responseObserver

`io.grpc.stub.StreamObserver<com.google.iam.v1.Policy>`  

### testIamPermissions(TestIamPermissionsRequest request, StreamObserver<TestIamPermissionsResponse> responseObserver)

```
public void testIamPermissions(TestIamPermissionsRequest request, StreamObserver<TestIamPermissionsResponse> responseObserver)
```

Returns the permissions that a caller has on the specified source.

**Parameters**

**Name**

**Description**

request

`com.google.iam.v1.TestIamPermissionsRequest`  

responseObserver

`io.grpc.stub.StreamObserver<com.google.iam.v1.TestIamPermissionsResponse>`  

### updateFinding(UpdateFindingRequest request, StreamObserver<Finding> responseObserver)

```
public void updateFinding(UpdateFindingRequest request, StreamObserver<Finding> responseObserver)
```

Creates or updates a finding. The corresponding source must exist for a finding creation to succeed.

**Parameters**

**Name**

**Description**

request

`[UpdateFindingRequest](/java/docs/reference/google-cloud-securitycenter/2.11.1/com.google.cloud.securitycenter.v1p1beta1.UpdateFindingRequest)`  

responseObserver

`io.grpc.stub.StreamObserver<[Finding](/java/docs/reference/google-cloud-securitycenter/2.11.1/com.google.cloud.securitycenter.v1p1beta1.Finding)>`  

### updateNotificationConfig(UpdateNotificationConfigRequest request, StreamObserver<NotificationConfig> responseObserver)

```
public void updateNotificationConfig(UpdateNotificationConfigRequest request, StreamObserver<NotificationConfig> responseObserver)
```

Updates a notification config. The following update fields are allowed: description, pubsub\_topic, streaming\_config.filter

**Parameters**

**Name**

**Description**

request

`[UpdateNotificationConfigRequest](/java/docs/reference/google-cloud-securitycenter/2.11.1/com.google.cloud.securitycenter.v1p1beta1.UpdateNotificationConfigRequest)`  

responseObserver

`io.grpc.stub.StreamObserver<[NotificationConfig](/java/docs/reference/google-cloud-securitycenter/2.11.1/com.google.cloud.securitycenter.v1p1beta1.NotificationConfig)>`  

### updateOrganizationSettings(UpdateOrganizationSettingsRequest request, StreamObserver<OrganizationSettings> responseObserver)

```
public void updateOrganizationSettings(UpdateOrganizationSettingsRequest request, StreamObserver<OrganizationSettings> responseObserver)
```

Updates an organization's settings.

**Parameters**

**Name**

**Description**

request

`[UpdateOrganizationSettingsRequest](/java/docs/reference/google-cloud-securitycenter/2.11.1/com.google.cloud.securitycenter.v1p1beta1.UpdateOrganizationSettingsRequest)`  

responseObserver

`io.grpc.stub.StreamObserver<[OrganizationSettings](/java/docs/reference/google-cloud-securitycenter/2.11.1/com.google.cloud.securitycenter.v1p1beta1.OrganizationSettings)>`  

### updateSecurityMarks(UpdateSecurityMarksRequest request, StreamObserver<SecurityMarks> responseObserver)

```
public void updateSecurityMarks(UpdateSecurityMarksRequest request, StreamObserver<SecurityMarks> responseObserver)
```

Updates security marks.

**Parameters**

**Name**

**Description**

request

`[UpdateSecurityMarksRequest](/java/docs/reference/google-cloud-securitycenter/2.11.1/com.google.cloud.securitycenter.v1p1beta1.UpdateSecurityMarksRequest)`  

responseObserver

`io.grpc.stub.StreamObserver<[SecurityMarks](/java/docs/reference/google-cloud-securitycenter/2.11.1/com.google.cloud.securitycenter.v1p1beta1.SecurityMarks)>`  

### updateSource(UpdateSourceRequest request, StreamObserver<Source> responseObserver)

```
public void updateSource(UpdateSourceRequest request, StreamObserver<Source> responseObserver)
```

Updates a source.

**Parameters**

**Name**

**Description**

request

`[UpdateSourceRequest](/java/docs/reference/google-cloud-securitycenter/2.11.1/com.google.cloud.securitycenter.v1p1beta1.UpdateSourceRequest)`  

responseObserver

`io.grpc.stub.StreamObserver<[Source](/java/docs/reference/google-cloud-securitycenter/2.11.1/com.google.cloud.securitycenter.v1p1beta1.Source)>`  

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
