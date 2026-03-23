-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface OrganizationsGrpc.AsyncService (1.60.0) Stay organized with collections Save and categorize content based on your preferences.

1.89.0 (latest) 1.87.0 1.85.0 1.84.0 1.82.0 1.80.0 1.78.0 1.77.0 1.76.0 1.75.0 1.74.0 1.72.0 1.70.0 1.69.0 1.66.0 1.65.0 1.64.0 1.62.0 1.61.0 1.60.0 1.59.0 1.58.0 1.57.0 1.56.0 1.55.0 1.54.0 1.53.0 1.51.0 1.50.0 1.49.0 1.48.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.39.0 1.38.0 1.37.0 1.36.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.26.0 1.25.0 1.24.0 1.23.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.0 1.11.0 1.10.0 1.9.0 1.8.0 1.7.0 1.6.0 1.5.6 1.4.0 1.3.2 1.2.12

```
public static interface OrganizationsGrpc.AsyncService
```

Allows users to manage their organization resources.

## Methods

### getIamPolicy(GetIamPolicyRequest request, StreamObserver<Policy> responseObserver)

```
public default void getIamPolicy(GetIamPolicyRequest request, StreamObserver<Policy> responseObserver)
```

Gets the access control policy for an organization resource. The policy may be empty if no such policy or resource exists. The `resource` field should be the organization's resource name, for example: "organizations/123". Authorization requires the IAM permission `resourcemanager.organizations.getIamPolicy` on the specified organization.

**Parameters**

**Name**

**Description**

`request`

`com.google.iam.v1.GetIamPolicyRequest`  

`responseObserver`

`io.grpc.stub.StreamObserver<com.google.iam.v1.Policy>`  

### getOrganization(GetOrganizationRequest request, StreamObserver<Organization> responseObserver)

```
public default void getOrganization(GetOrganizationRequest request, StreamObserver<Organization> responseObserver)
```

Fetches an organization resource identified by the specified resource name.

**Parameters**

**Name**

**Description**

`request`

`[GetOrganizationRequest](/java/docs/reference/google-cloud-resourcemanager/1.60.0/com.google.cloud.resourcemanager.v3.GetOrganizationRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Organization](/java/docs/reference/google-cloud-resourcemanager/1.60.0/com.google.cloud.resourcemanager.v3.Organization)>`  

### searchOrganizations(SearchOrganizationsRequest request, StreamObserver<SearchOrganizationsResponse> responseObserver)

```
public default void searchOrganizations(SearchOrganizationsRequest request, StreamObserver<SearchOrganizationsResponse> responseObserver)
```

Searches organization resources that are visible to the user and satisfy the specified filter. This method returns organizations in an unspecified order. New organizations do not necessarily appear at the end of the results, and may take a small amount of time to appear. Search will only return organizations on which the user has the permission `resourcemanager.organizations.get`

**Parameters**

**Name**

**Description**

`request`

`[SearchOrganizationsRequest](/java/docs/reference/google-cloud-resourcemanager/1.60.0/com.google.cloud.resourcemanager.v3.SearchOrganizationsRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[SearchOrganizationsResponse](/java/docs/reference/google-cloud-resourcemanager/1.60.0/com.google.cloud.resourcemanager.v3.SearchOrganizationsResponse)>`  

### setIamPolicy(SetIamPolicyRequest request, StreamObserver<Policy> responseObserver)

```
public default void setIamPolicy(SetIamPolicyRequest request, StreamObserver<Policy> responseObserver)
```

Sets the access control policy on an organization resource. Replaces any existing policy. The `resource` field should be the organization's resource name, for example: "organizations/123". Authorization requires the IAM permission `resourcemanager.organizations.setIamPolicy` on the specified organization.

**Parameters**

**Name**

**Description**

`request`

`com.google.iam.v1.SetIamPolicyRequest`  

`responseObserver`

`io.grpc.stub.StreamObserver<com.google.iam.v1.Policy>`  

### testIamPermissions(TestIamPermissionsRequest request, StreamObserver<TestIamPermissionsResponse> responseObserver)

```
public default void testIamPermissions(TestIamPermissionsRequest request, StreamObserver<TestIamPermissionsResponse> responseObserver)
```

Returns the permissions that a caller has on the specified organization. The `resource` field should be the organization's resource name, for example: "organizations/123". There are no permissions required for making this API call.

**Parameters**

**Name**

**Description**

`request`

`com.google.iam.v1.TestIamPermissionsRequest`  

`responseObserver`

`io.grpc.stub.StreamObserver<com.google.iam.v1.TestIamPermissionsResponse>`  

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
