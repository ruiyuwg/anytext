-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface ResourceManager (1.24.0) Stay organized with collections Save and categorize content based on your preferences.

1.89.0 (latest) 1.87.0 1.85.0 1.84.0 1.82.0 1.80.0 1.78.0 1.77.0 1.76.0 1.75.0 1.74.0 1.72.0 1.70.0 1.69.0 1.66.0 1.65.0 1.64.0 1.62.0 1.61.0 1.60.0 1.59.0 1.58.0 1.57.0 1.56.0 1.55.0 1.54.0 1.53.0 1.51.0 1.50.0 1.49.0 1.48.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.39.0 1.38.0 1.37.0 1.36.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.26.0 1.25.0 1.24.0 1.23.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.0 1.11.0 1.10.0 1.9.0 1.8.0 1.7.0 1.6.0 1.5.6 1.4.0 1.3.2 1.2.12

```
public interface ResourceManager extends Service<ResourceManagerOptions>
```

**Deprecated.** _v3 GAPIC client of ResourceManager is now available_

An interface for Google Cloud Resource Manager. See Also: [Google Cloud Resource Manager](https://cloud.google.com/resource-manager/)

## Implements

com.google.cloud.Service<com.google.cloud.resourcemanager.ResourceManagerOptions>

## Static Fields

### DEFAULT\_CONTENT\_TYPE (deprecated)

```
public static final String DEFAULT_CONTENT_TYPE
```

**Field Value**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

## Methods

### clearOrgPolicy(String resource, OrgPolicyInfo orgPolicy) (deprecated)

```
public abstract void clearOrgPolicy(String resource, OrgPolicyInfo orgPolicy)
```

Clears a Policy from a resource. See Also: [Resource Manager clearOrgPolicy](https://cloud.google.com/resource-manager/reference/rest/v1/folders/clearOrgPolicy)

**Parameters**

**Name**

**Description**

`resource`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`orgPolicy`

`[OrgPolicyInfo](/java/docs/reference/google-cloud-resourcemanager/1.24.0/com.google.cloud.resourcemanager.OrgPolicyInfo)`  

### create(ProjectInfo project) (deprecated)

```
public abstract Project create(ProjectInfo project)
```

**Deprecated.** _Please use [com.google.cloud.resourcemanager.v3.ProjectsClient#create(ProjectsSettings)](/java/docs/reference/google-cloud-resourcemanager/1.24.0/com.google.cloud.resourcemanager.v3.ProjectsClient#com_google_cloud_resourcemanager_v3_ProjectsClient_create_com_google_cloud_resourcemanager_v3_ProjectsSettings_) instead_

Creates a new project.

Initially, the project resource is owned by its creator exclusively. The creator can later grant permission to others to read or update the project. Several APIs are activated automatically for the project, including Google Cloud Storage. See Also: [Cloud Resource Manager create](https://cloud.google.com/resource-manager/reference/rest/v1beta1/projects/create)

**Parameter**

**Name**

**Description**

`project`

`[ProjectInfo](/java/docs/reference/google-cloud-resourcemanager/1.24.0/com.google.cloud.resourcemanager.ProjectInfo)`  

**Returns**

**Type**

**Description**

`[Project](/java/docs/reference/google-cloud-resourcemanager/1.24.0/com.google.cloud.resourcemanager.Project)`

Project object representing the new project's metadata. The returned object will include the following read-only fields supplied by the server: project number, lifecycle state, and creation time.

### delete(String projectId) (deprecated)

```
public abstract void delete(String projectId)
```

**Deprecated.** _Please use [com.google.cloud.resourcemanager.v3.ProjectsClient#deleteProjectAsync(ProjectName)](/java/docs/reference/google-cloud-resourcemanager/1.24.0/com.google.cloud.resourcemanager.v3.ProjectsClient#com_google_cloud_resourcemanager_v3_ProjectsClient_deleteProjectAsync_com_google_cloud_resourcemanager_v3_ProjectName_) instead_

Marks the project identified by the specified project ID for deletion.

This method will only affect the project if the following criteria are met:

-   The project does not have a billing account associated with it.
-   The project has a lifecycle state of [ProjectInfo.State#ACTIVE](/java/docs/reference/google-cloud-resourcemanager/1.24.0/com.google.cloud.resourcemanager.ProjectInfo.State#com_google_cloud_resourcemanager_ProjectInfo_State_ACTIVE).

This method changes the project's lifecycle state from [ProjectInfo.State#ACTIVE](/java/docs/reference/google-cloud-resourcemanager/1.24.0/com.google.cloud.resourcemanager.ProjectInfo.State#com_google_cloud_resourcemanager_ProjectInfo_State_ACTIVE) to [ProjectInfo.State#DELETE\_REQUESTED](/java/docs/reference/google-cloud-resourcemanager/1.24.0/com.google.cloud.resourcemanager.ProjectInfo.State#com_google_cloud_resourcemanager_ProjectInfo_State_DELETE_REQUESTED). The deletion starts at an unspecified time, at which point the lifecycle state changes to [ProjectInfo.State#DELETE\_IN\_PROGRESS](/java/docs/reference/google-cloud-resourcemanager/1.24.0/com.google.cloud.resourcemanager.ProjectInfo.State#com_google_cloud_resourcemanager_ProjectInfo_State_DELETE_IN_PROGRESS). Until the deletion completes, you can check the lifecycle state checked by retrieving the project with [ResourceManager#get](/java/docs/reference/google-cloud-resourcemanager/1.24.0/com.google.cloud.resourcemanager.ResourceManager#com_google_cloud_resourcemanager_ResourceManager_get_), and the project remains visible to [ResourceManager#list](/java/docs/reference/google-cloud-resourcemanager/1.24.0/com.google.cloud.resourcemanager.ResourceManager#com_google_cloud_resourcemanager_ResourceManager_list_). However, you cannot update the project. After the deletion completes, the project is not retrievable by the [ResourceManager#get](/java/docs/reference/google-cloud-resourcemanager/1.24.0/com.google.cloud.resourcemanager.ResourceManager#com_google_cloud_resourcemanager_ResourceManager_get_) and [ResourceManager#list](/java/docs/reference/google-cloud-resourcemanager/1.24.0/com.google.cloud.resourcemanager.ResourceManager#com_google_cloud_resourcemanager_ResourceManager_list_) methods. The caller must have modify permissions for this project. See Also: [Cloud Resource Manager delete](https://cloud.google.com/resource-manager/reference/rest/v1beta1/projects/delete)

**Parameter**

**Name**

**Description**

`projectId`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

### get(String projectId, ResourceManager.ProjectGetOption\[\] options) (deprecated)

```
public abstract Project get(String projectId, ResourceManager.ProjectGetOption[] options)
```

**Deprecated.** _Please use [com.google.cloud.resourcemanager.v3.ProjectsClient#getProject(GetProjectRequest)](/java/docs/reference/google-cloud-resourcemanager/1.24.0/com.google.cloud.resourcemanager.v3.ProjectsClient#com_google_cloud_resourcemanager_v3_ProjectsClient_getProject_com_google_cloud_resourcemanager_v3_GetProjectRequest_) instead_

Retrieves the project identified by the specified project ID.

Returns `null` if the project is not found or if the user doesn't have read permissions for the project. See Also: [Cloud Resource Manager get](https://cloud.google.com/resource-manager/reference/rest/v1beta1/projects/get)

**Parameters**

**Name**

**Description**

`projectId`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`options`

`[ProjectGetOption](/java/docs/reference/google-cloud-resourcemanager/1.24.0/com.google.cloud.resourcemanager.ResourceManager.ProjectGetOption)[]`  

**Returns**

**Type**

**Description**

`[Project](/java/docs/reference/google-cloud-resourcemanager/1.24.0/com.google.cloud.resourcemanager.Project)`

### getEffectiveOrgPolicy(String resource, String constraint) (deprecated)

```
public abstract OrgPolicyInfo getEffectiveOrgPolicy(String resource, String constraint)
```

**Deprecated.**

Gets the effective Policy on a resource.

This is the result of merging Policies in the resource hierarchy. The returned Policy will not have an etag set because it is a computed Policy across multiple resources. Subtrees of Resource Manager resource hierarchy with 'under:' prefix are not expanded. See Also: [Resource Manager getEffectiveOrgPolicy](https://cloud.google.com/resource-manager/reference/rest/v1/folders/getEffectiveOrgPolicy)

**Parameters**

**Name**

**Description**

`resource`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`constraint`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[OrgPolicyInfo](/java/docs/reference/google-cloud-resourcemanager/1.24.0/com.google.cloud.resourcemanager.OrgPolicyInfo)`

### getOrgPolicy(String resource, String constraint) (deprecated)

```
public abstract OrgPolicyInfo getOrgPolicy(String resource, String constraint)
```

Gets the Policy on a resource.

If no Policy is set on the resource, a Policy is returned with default values including POLICY\_TYPE\_NOT\_SET for the policy\_type one of. The etag value can be used with projects.setOrgPolicy() to create or update a Policy during read-modify-write. See Also: [Resource Manager getOrgPolicy](https://cloud.google.com/resource-manager/reference/rest/v1/folders/getOrgPolicy)

**Parameters**

**Name**

**Description**

`resource`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`constraint`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[OrgPolicyInfo](/java/docs/reference/google-cloud-resourcemanager/1.24.0/com.google.cloud.resourcemanager.OrgPolicyInfo)`

### getPolicy(String projectId) (deprecated)

```
public abstract Policy getPolicy(String projectId)
```

**Deprecated.** _Please use [com.google.cloud.resourcemanager.v3.ProjectsClient#getIamPolicy(GetIamPolicyRequest)](/java/docs/reference/google-cloud-resourcemanager/1.24.0/com.google.cloud.resourcemanager.v3.ProjectsClient#com_google_cloud_resourcemanager_v3_ProjectsClient_getIamPolicy_com_google_iam_v1_GetIamPolicyRequest_) instead_

Returns the IAM access control policy for the specified project. Returns `null` if the resource does not exist or if you do not have adequate permission to view the project or get the policy. See Also: [Resource Manager getIamPolicy](https://cloud.google.com/resource-manager/reference/rest/v1beta1/projects/getIamPolicy)

**Parameter**

**Name**

**Description**

`projectId`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`com.google.cloud.Policy`

### list(ResourceManager.ProjectListOption\[\] options) (deprecated)

```
public abstract Page<Project> list(ResourceManager.ProjectListOption[] options)
```

**Deprecated.** _Please use [com.google.cloud.resourcemanager.v3.ProjectsClient#listProjects(ListProjectsRequest)](/java/docs/reference/google-cloud-resourcemanager/1.24.0/com.google.cloud.resourcemanager.v3.ProjectsClient#com_google_cloud_resourcemanager_v3_ProjectsClient_listProjects_com_google_cloud_resourcemanager_v3_ListProjectsRequest_) instead_

Lists the projects visible to the current user.

This method returns projects in an unspecified order. New projects do not necessarily appear at the end of the list. Use [ProjectListOption](/java/docs/reference/google-cloud-resourcemanager/1.24.0/com.google.cloud.resourcemanager.ResourceManager.ProjectListOption) to filter this list, set page size, and set page tokens. See Also: [Cloud Resource Manager list](https://cloud.google.com/resource-manager/reference/rest/v1beta1/projects/list)

**Parameter**

**Name**

**Description**

`options`

`[ProjectListOption](/java/docs/reference/google-cloud-resourcemanager/1.24.0/com.google.cloud.resourcemanager.ResourceManager.ProjectListOption)[]`  

**Returns**

**Type**

**Description**

`[Page](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.paging.Page.html)<[Project](/java/docs/reference/google-cloud-resourcemanager/1.24.0/com.google.cloud.resourcemanager.Project)>`

`Page<Project>`, a page of projects

### listAvailableOrgPolicyConstraints(String resource, ResourceManager.ListOption\[\] options) (deprecated)

```
public abstract Page<ConstraintInfo> listAvailableOrgPolicyConstraints(String resource, ResourceManager.ListOption[] options)
```

**Deprecated.**

Lists the Constraints that could be applied on the specified resource. See Also: [Resource Manager listAvailableOrgPolicyConstraints](https://cloud.google.com/resource-manager/reference/rest/v1/folders/listAvailableOrgPolicyConstraints)

**Parameters**

**Name**

**Description**

`resource`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`options`

`[ListOption](/java/docs/reference/google-cloud-resourcemanager/1.24.0/com.google.cloud.resourcemanager.ResourceManager.ListOption)[]`  

**Returns**

**Type**

**Description**

`[Page](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.paging.Page.html)<[ConstraintInfo](/java/docs/reference/google-cloud-resourcemanager/1.24.0/com.google.cloud.resourcemanager.ConstraintInfo)>`

### listOrgPolicies(String resource, ResourceManager.ListOption\[\] options) (deprecated)

```
public abstract Page<OrgPolicyInfo> listOrgPolicies(String resource, ResourceManager.ListOption[] options)
```

**Deprecated.**

Lists the Policies set for a particular resource. See Also: [Resource Manager listOrgPolicies](https://cloud.google.com/resource-manager/reference/rest/v1/folders/listOrgPolicies)

**Parameters**

**Name**

**Description**

`resource`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`options`

`[ListOption](/java/docs/reference/google-cloud-resourcemanager/1.24.0/com.google.cloud.resourcemanager.ResourceManager.ListOption)[]`  

**Returns**

**Type**

**Description**

`[Page](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.paging.Page.html)<[OrgPolicyInfo](/java/docs/reference/google-cloud-resourcemanager/1.24.0/com.google.cloud.resourcemanager.OrgPolicyInfo)>`

### replace(ProjectInfo newProject) (deprecated)

```
public abstract Project replace(ProjectInfo newProject)
```

**Deprecated.** _Please use [com.google.cloud.resourcemanager.v3.ProjectsClient#updateProjectAsync(UpdateProjectRequest)](/java/docs/reference/google-cloud-resourcemanager/1.24.0/com.google.cloud.resourcemanager.v3.ProjectsClient#com_google_cloud_resourcemanager_v3_ProjectsClient_updateProjectAsync_com_google_cloud_resourcemanager_v3_UpdateProjectRequest_) instead_

Replaces the attributes of the project.

The caller must have modify permissions for this project. See Also: [Cloud Resource Manager update](https://cloud.google.com/resource-manager/reference/rest/v1beta1/projects/update)

**Parameter**

**Name**

**Description**

`newProject`

`[ProjectInfo](/java/docs/reference/google-cloud-resourcemanager/1.24.0/com.google.cloud.resourcemanager.ProjectInfo)`  

**Returns**

**Type**

**Description**

`[Project](/java/docs/reference/google-cloud-resourcemanager/1.24.0/com.google.cloud.resourcemanager.Project)`

the Project representing the new project metadata

### replaceOrgPolicy(String resource, OrgPolicyInfo orgPolicy) (deprecated)

```
public abstract OrgPolicyInfo replaceOrgPolicy(String resource, OrgPolicyInfo orgPolicy)
```

**Deprecated.**

Updates the specified Policy on the resource. Creates a new Policy for that Constraint on the resource if one does not exist.

Not supplying an etag on the request Policy results in an unconditional write of the Policy. See Also: [Resource Manager setOrgPolicy](https://cloud.google.com/resource-manager/reference/rest/v1/folders/setOrgPolicy)

**Parameters**

**Name**

**Description**

`resource`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`orgPolicy`

`[OrgPolicyInfo](/java/docs/reference/google-cloud-resourcemanager/1.24.0/com.google.cloud.resourcemanager.OrgPolicyInfo)`  

**Returns**

**Type**

**Description**

`[OrgPolicyInfo](/java/docs/reference/google-cloud-resourcemanager/1.24.0/com.google.cloud.resourcemanager.OrgPolicyInfo)`

### replacePolicy(String projectId, Policy newPolicy) (deprecated)

```
public abstract Policy replacePolicy(String projectId, Policy newPolicy)
```

**Deprecated.**

Sets the IAM access control policy for the specified project. Replaces any existing policy. The following constraints apply:

-   Projects currently support only _user:{emailid}_ and _serviceAccount:{emailid}_ members in a binding of a policy.
-   To be added as an owner, a user must be invited via Cloud Platform console and must accept the invitation.
-   Members cannot be added to more than one role in the same policy.
-   There must be at least one owner who has accepted the Terms of Service (ToS) agreement in the policy. An attempt to set a policy that removes the last ToS-accepted owner from the policy will fail.
-   Calling this method requires enabling the App Engine Admin API.

Note: Removing service accounts from policies or changing their roles can render services completely inoperable. It is important to understand how the service account is being used before removing or updating its roles.

It is recommended that you use the read-modify-write pattern. This pattern entails reading the project's current policy, updating it locally, and then sending the modified policy for writing. Cloud IAM solves the problem of conflicting processes simultaneously attempting to modify a policy by using the etag property. This property is used to verify whether the policy has changed since the last request. When you make a request to Cloud IAM with an etag value, Cloud IAM compares the etag value in the request with the existing etag value associated with the policy. It writes the policy only if the etag values match. If the etags don't match, a `ResourceManagerException` is thrown, denoting that the server aborted update. If an etag is not provided, the policy is overwritten blindly.

An example of using the read-write-modify pattern is as follows:

 ```

 Policy currentPolicy = resourceManager.getPolicy("my-project-id");
 Policy modifiedPolicy = current.toBuilder()
     .removeIdentity(Role.viewer(), Identity.user("user@gmail.com"))
     .build();
 Policy newPolicy = resourceManager.replacePolicy("my-project-id", modified);
 
```
 

See Also: [Resource Manager setIamPolicy](https://cloud.google.com/resource-manager/reference/rest/v1beta1/projects/setIamPolicy)

**Parameters**

**Name**

**Description**

`projectId`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`newPolicy`

`com.google.cloud.Policy`  

**Returns**

**Type**

**Description**

`com.google.cloud.Policy`

### testOrgPermissions(String resource, List<String> permissions) (deprecated)

```
public abstract Map<String,Boolean> testOrgPermissions(String resource, List<String> permissions)
```

**Deprecated.**

Returns the permissions and their results representing whether the caller has the permissions on the specified Organization. See Also: [Resource Manager testIamPermissions](https://cloud.google.com/resource-manager/reference/rest/v1/organizations/testIamPermissions)

**Parameters**

**Name**

**Description**

`resource`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

the organization's resource name, e.g. "organizations/123"

`permissions`

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`  

the set of permissions to check for the resource. Permissions with wildcards (such as '_' or 'storage._') are not allowed.

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[Boolean](https://docs.oracle.com/javase/8/docs/api/java/lang/Boolean.html)>`

the permissions and their results representing whether the caller has the permissions on the specified Organization.

### testPermissions(String projectId, List<String> permissions) (deprecated)

```
public abstract List<Boolean> testPermissions(String projectId, List<String> permissions)
```

**Deprecated.** _[com.google.cloud.resourcemanager.v3.ProjectsClient#testIamPermissions(TestIamPermissionsRequest)](/java/docs/reference/google-cloud-resourcemanager/1.24.0/com.google.cloud.resourcemanager.v3.ProjectsClient#com_google_cloud_resourcemanager_v3_ProjectsClient_testIamPermissions_com_google_iam_v1_TestIamPermissionsRequest_)_

Returns the permissions that a caller has on the specified project. You typically don't call this method if you're using Google Cloud Platform directly to manage permissions. This method is intended for integration with your proprietary software, such as a customized graphical user interface. For example, the Cloud Platform Console tests IAM permissions internally to determine which UI should be available to the logged-in user. Each service that supports IAM lists the possible permissions; see the _Supported Cloud Platform services_ page below for links to these lists. See Also: [Supported Cloud Platform Services](https://cloud.google.com/iam/#supported_cloud_platform_services), [Resource Manager testIamPermissions](https://cloud.google.com/resource-manager/reference/rest/v1beta1/projects/testIamPermissions)

**Parameters**

**Name**

**Description**

`projectId`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`permissions`

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`  

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Boolean](https://docs.oracle.com/javase/8/docs/api/java/lang/Boolean.html)>`

A list of booleans representing whether the caller has the permissions specified (in the order of the given permissions)

### undelete(String projectId) (deprecated)

```
public abstract void undelete(String projectId)
```

**Deprecated.** _Please use [com.google.cloud.resourcemanager.v3.ProjectsClient#undeleteProjectAsync(UndeleteProjectRequest)](/java/docs/reference/google-cloud-resourcemanager/1.24.0/com.google.cloud.resourcemanager.v3.ProjectsClient#com_google_cloud_resourcemanager_v3_ProjectsClient_undeleteProjectAsync_com_google_cloud_resourcemanager_v3_UndeleteProjectRequest_) instead_

Restores the project identified by the specified project ID.

You can only use this method for a project that has a lifecycle state of [ProjectInfo.State#DELETE\_REQUESTED](/java/docs/reference/google-cloud-resourcemanager/1.24.0/com.google.cloud.resourcemanager.ProjectInfo.State#com_google_cloud_resourcemanager_ProjectInfo_State_DELETE_REQUESTED). After deletion starts, as indicated by a lifecycle state of [ProjectInfo.State#DELETE\_IN\_PROGRESS](/java/docs/reference/google-cloud-resourcemanager/1.24.0/com.google.cloud.resourcemanager.ProjectInfo.State#com_google_cloud_resourcemanager_ProjectInfo_State_DELETE_IN_PROGRESS), the project cannot be restored. The caller must have modify permissions for this project. See Also: [Cloud Resource Manager undelete](https://cloud.google.com/resource-manager/reference/rest/v1beta1/projects/undelete)

**Parameter**

**Name**

**Description**

`projectId`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
