-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Package com.google.cloud.resourcemanager.v3.stub (1.10.0) Stay organized with collections Save and categorize content based on your preferences.

1.89.0 (latest) 1.87.0 1.85.0 1.84.0 1.82.0 1.80.0 1.78.0 1.77.0 1.76.0 1.75.0 1.74.0 1.72.0 1.70.0 1.69.0 1.66.0 1.65.0 1.64.0 1.62.0 1.61.0 1.60.0 1.59.0 1.58.0 1.57.0 1.56.0 1.55.0 1.54.0 1.53.0 1.51.0 1.50.0 1.49.0 1.48.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.39.0 1.38.0 1.37.0 1.36.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.26.0 1.25.0 1.24.0 1.23.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.0 1.11.0 1.10.0 1.9.0 1.8.0 1.7.0 1.6.0 1.5.6 1.4.0 1.3.2 1.2.12

## Classes

### [FoldersStub](/java/docs/reference/google-cloud-resourcemanager/1.10.0/com.google.cloud.resourcemanager.v3.stub.FoldersStub)

Base stub class for the Folders service API.

This class is for advanced usage and reflects the underlying API directly.

### [FoldersStubSettings](/java/docs/reference/google-cloud-resourcemanager/1.10.0/com.google.cloud.resourcemanager.v3.stub.FoldersStubSettings)

Settings class to configure an instance of [FoldersStub](/java/docs/reference/google-cloud-resourcemanager/1.10.0/com.google.cloud.resourcemanager.v3.stub.FoldersStub).

The default instance has everything set to sensible defaults:

-   The default service address (cloudresourcemanager.googleapis.com) and default port (443) are used.
-   Credentials are acquired automatically through Application Default Credentials.
-   Retries are configured for idempotent methods but not for non-idempotent methods.

The builder of this class is recursive, so contained classes are themselves builders. When build() is called, the tree of builders is called to create the complete settings object.

For example, to set the total timeout of getFolder to 30 seconds:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 FoldersStubSettings.Builder foldersSettingsBuilder = FoldersStubSettings.newBuilder();
 foldersSettingsBuilder
     .getFolderSettings()
     .setRetrySettings(
         foldersSettingsBuilder
             .getFolderSettings()
             .getRetrySettings()
             .toBuilder()
             .setTotalTimeout(Duration.ofSeconds(30))
             .build());
 FoldersStubSettings foldersSettings = foldersSettingsBuilder.build();
 
```
 

### [FoldersStubSettings.Builder](/java/docs/reference/google-cloud-resourcemanager/1.10.0/com.google.cloud.resourcemanager.v3.stub.FoldersStubSettings.Builder)

Builder for FoldersStubSettings.

### [GrpcFoldersCallableFactory](/java/docs/reference/google-cloud-resourcemanager/1.10.0/com.google.cloud.resourcemanager.v3.stub.GrpcFoldersCallableFactory)

gRPC callable factory implementation for the Folders service API.

This class is for advanced usage.

### [GrpcFoldersStub](/java/docs/reference/google-cloud-resourcemanager/1.10.0/com.google.cloud.resourcemanager.v3.stub.GrpcFoldersStub)

gRPC stub implementation for the Folders service API.

This class is for advanced usage and reflects the underlying API directly.

### [GrpcOrganizationsCallableFactory](/java/docs/reference/google-cloud-resourcemanager/1.10.0/com.google.cloud.resourcemanager.v3.stub.GrpcOrganizationsCallableFactory)

gRPC callable factory implementation for the Organizations service API.

This class is for advanced usage.

### [GrpcOrganizationsStub](/java/docs/reference/google-cloud-resourcemanager/1.10.0/com.google.cloud.resourcemanager.v3.stub.GrpcOrganizationsStub)

gRPC stub implementation for the Organizations service API.

This class is for advanced usage and reflects the underlying API directly.

### [GrpcProjectsCallableFactory](/java/docs/reference/google-cloud-resourcemanager/1.10.0/com.google.cloud.resourcemanager.v3.stub.GrpcProjectsCallableFactory)

gRPC callable factory implementation for the Projects service API.

This class is for advanced usage.

### [GrpcProjectsStub](/java/docs/reference/google-cloud-resourcemanager/1.10.0/com.google.cloud.resourcemanager.v3.stub.GrpcProjectsStub)

gRPC stub implementation for the Projects service API.

This class is for advanced usage and reflects the underlying API directly.

### [GrpcTagBindingsCallableFactory](/java/docs/reference/google-cloud-resourcemanager/1.10.0/com.google.cloud.resourcemanager.v3.stub.GrpcTagBindingsCallableFactory)

gRPC callable factory implementation for the TagBindings service API.

This class is for advanced usage.

### [GrpcTagBindingsStub](/java/docs/reference/google-cloud-resourcemanager/1.10.0/com.google.cloud.resourcemanager.v3.stub.GrpcTagBindingsStub)

gRPC stub implementation for the TagBindings service API.

This class is for advanced usage and reflects the underlying API directly.

### [GrpcTagKeysCallableFactory](/java/docs/reference/google-cloud-resourcemanager/1.10.0/com.google.cloud.resourcemanager.v3.stub.GrpcTagKeysCallableFactory)

gRPC callable factory implementation for the TagKeys service API.

This class is for advanced usage.

### [GrpcTagKeysStub](/java/docs/reference/google-cloud-resourcemanager/1.10.0/com.google.cloud.resourcemanager.v3.stub.GrpcTagKeysStub)

gRPC stub implementation for the TagKeys service API.

This class is for advanced usage and reflects the underlying API directly.

### [GrpcTagValuesCallableFactory](/java/docs/reference/google-cloud-resourcemanager/1.10.0/com.google.cloud.resourcemanager.v3.stub.GrpcTagValuesCallableFactory)

gRPC callable factory implementation for the TagValues service API.

This class is for advanced usage.

### [GrpcTagValuesStub](/java/docs/reference/google-cloud-resourcemanager/1.10.0/com.google.cloud.resourcemanager.v3.stub.GrpcTagValuesStub)

gRPC stub implementation for the TagValues service API.

This class is for advanced usage and reflects the underlying API directly.

### [HttpJsonFoldersCallableFactory](/java/docs/reference/google-cloud-resourcemanager/1.10.0/com.google.cloud.resourcemanager.v3.stub.HttpJsonFoldersCallableFactory)

REST callable factory implementation for the Folders service API.

This class is for advanced usage.

### [HttpJsonFoldersStub](/java/docs/reference/google-cloud-resourcemanager/1.10.0/com.google.cloud.resourcemanager.v3.stub.HttpJsonFoldersStub)

REST stub implementation for the Folders service API.

This class is for advanced usage and reflects the underlying API directly.

### [HttpJsonOrganizationsCallableFactory](/java/docs/reference/google-cloud-resourcemanager/1.10.0/com.google.cloud.resourcemanager.v3.stub.HttpJsonOrganizationsCallableFactory)

REST callable factory implementation for the Organizations service API.

This class is for advanced usage.

### [HttpJsonOrganizationsStub](/java/docs/reference/google-cloud-resourcemanager/1.10.0/com.google.cloud.resourcemanager.v3.stub.HttpJsonOrganizationsStub)

REST stub implementation for the Organizations service API.

This class is for advanced usage and reflects the underlying API directly.

### [HttpJsonProjectsCallableFactory](/java/docs/reference/google-cloud-resourcemanager/1.10.0/com.google.cloud.resourcemanager.v3.stub.HttpJsonProjectsCallableFactory)

REST callable factory implementation for the Projects service API.

This class is for advanced usage.

### [HttpJsonProjectsStub](/java/docs/reference/google-cloud-resourcemanager/1.10.0/com.google.cloud.resourcemanager.v3.stub.HttpJsonProjectsStub)

REST stub implementation for the Projects service API.

This class is for advanced usage and reflects the underlying API directly.

### [HttpJsonTagBindingsCallableFactory](/java/docs/reference/google-cloud-resourcemanager/1.10.0/com.google.cloud.resourcemanager.v3.stub.HttpJsonTagBindingsCallableFactory)

REST callable factory implementation for the TagBindings service API.

This class is for advanced usage.

### [HttpJsonTagBindingsStub](/java/docs/reference/google-cloud-resourcemanager/1.10.0/com.google.cloud.resourcemanager.v3.stub.HttpJsonTagBindingsStub)

REST stub implementation for the TagBindings service API.

This class is for advanced usage and reflects the underlying API directly.

### [HttpJsonTagKeysCallableFactory](/java/docs/reference/google-cloud-resourcemanager/1.10.0/com.google.cloud.resourcemanager.v3.stub.HttpJsonTagKeysCallableFactory)

REST callable factory implementation for the TagKeys service API.

This class is for advanced usage.

### [HttpJsonTagKeysStub](/java/docs/reference/google-cloud-resourcemanager/1.10.0/com.google.cloud.resourcemanager.v3.stub.HttpJsonTagKeysStub)

REST stub implementation for the TagKeys service API.

This class is for advanced usage and reflects the underlying API directly.

### [HttpJsonTagValuesCallableFactory](/java/docs/reference/google-cloud-resourcemanager/1.10.0/com.google.cloud.resourcemanager.v3.stub.HttpJsonTagValuesCallableFactory)

REST callable factory implementation for the TagValues service API.

This class is for advanced usage.

### [HttpJsonTagValuesStub](/java/docs/reference/google-cloud-resourcemanager/1.10.0/com.google.cloud.resourcemanager.v3.stub.HttpJsonTagValuesStub)

REST stub implementation for the TagValues service API.

This class is for advanced usage and reflects the underlying API directly.

### [OrganizationsStub](/java/docs/reference/google-cloud-resourcemanager/1.10.0/com.google.cloud.resourcemanager.v3.stub.OrganizationsStub)

Base stub class for the Organizations service API.

This class is for advanced usage and reflects the underlying API directly.

### [OrganizationsStubSettings](/java/docs/reference/google-cloud-resourcemanager/1.10.0/com.google.cloud.resourcemanager.v3.stub.OrganizationsStubSettings)

Settings class to configure an instance of [OrganizationsStub](/java/docs/reference/google-cloud-resourcemanager/1.10.0/com.google.cloud.resourcemanager.v3.stub.OrganizationsStub).

The default instance has everything set to sensible defaults:

-   The default service address (cloudresourcemanager.googleapis.com) and default port (443) are used.
-   Credentials are acquired automatically through Application Default Credentials.
-   Retries are configured for idempotent methods but not for non-idempotent methods.

The builder of this class is recursive, so contained classes are themselves builders. When build() is called, the tree of builders is called to create the complete settings object.

For example, to set the total timeout of getOrganization to 30 seconds:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 OrganizationsStubSettings.Builder organizationsSettingsBuilder =
     OrganizationsStubSettings.newBuilder();
 organizationsSettingsBuilder
     .getOrganizationSettings()
     .setRetrySettings(
         organizationsSettingsBuilder
             .getOrganizationSettings()
             .getRetrySettings()
             .toBuilder()
             .setTotalTimeout(Duration.ofSeconds(30))
             .build());
 OrganizationsStubSettings organizationsSettings = organizationsSettingsBuilder.build();
 
```
 

### [OrganizationsStubSettings.Builder](/java/docs/reference/google-cloud-resourcemanager/1.10.0/com.google.cloud.resourcemanager.v3.stub.OrganizationsStubSettings.Builder)

Builder for OrganizationsStubSettings.

### [ProjectsStub](/java/docs/reference/google-cloud-resourcemanager/1.10.0/com.google.cloud.resourcemanager.v3.stub.ProjectsStub)

Base stub class for the Projects service API.

This class is for advanced usage and reflects the underlying API directly.

### [ProjectsStubSettings](/java/docs/reference/google-cloud-resourcemanager/1.10.0/com.google.cloud.resourcemanager.v3.stub.ProjectsStubSettings)

Settings class to configure an instance of [ProjectsStub](/java/docs/reference/google-cloud-resourcemanager/1.10.0/com.google.cloud.resourcemanager.v3.stub.ProjectsStub).

The default instance has everything set to sensible defaults:

-   The default service address (cloudresourcemanager.googleapis.com) and default port (443) are used.
-   Credentials are acquired automatically through Application Default Credentials.
-   Retries are configured for idempotent methods but not for non-idempotent methods.

The builder of this class is recursive, so contained classes are themselves builders. When build() is called, the tree of builders is called to create the complete settings object.

For example, to set the total timeout of getProject to 30 seconds:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 ProjectsStubSettings.Builder projectsSettingsBuilder = ProjectsStubSettings.newBuilder();
 projectsSettingsBuilder
     .getProjectSettings()
     .setRetrySettings(
         projectsSettingsBuilder
             .getProjectSettings()
             .getRetrySettings()
             .toBuilder()
             .setTotalTimeout(Duration.ofSeconds(30))
             .build());
 ProjectsStubSettings projectsSettings = projectsSettingsBuilder.build();
 
```
 

### [ProjectsStubSettings.Builder](/java/docs/reference/google-cloud-resourcemanager/1.10.0/com.google.cloud.resourcemanager.v3.stub.ProjectsStubSettings.Builder)

Builder for ProjectsStubSettings.

### [TagBindingsStub](/java/docs/reference/google-cloud-resourcemanager/1.10.0/com.google.cloud.resourcemanager.v3.stub.TagBindingsStub)

Base stub class for the TagBindings service API.

This class is for advanced usage and reflects the underlying API directly.

### [TagBindingsStubSettings](/java/docs/reference/google-cloud-resourcemanager/1.10.0/com.google.cloud.resourcemanager.v3.stub.TagBindingsStubSettings)

Settings class to configure an instance of [TagBindingsStub](/java/docs/reference/google-cloud-resourcemanager/1.10.0/com.google.cloud.resourcemanager.v3.stub.TagBindingsStub).

The default instance has everything set to sensible defaults:

-   The default service address (cloudresourcemanager.googleapis.com) and default port (443) are used.
-   Credentials are acquired automatically through Application Default Credentials.
-   Retries are configured for idempotent methods but not for non-idempotent methods.

The builder of this class is recursive, so contained classes are themselves builders. When build() is called, the tree of builders is called to create the complete settings object.

For example, to set the total timeout of listTagBindings to 30 seconds:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 TagBindingsStubSettings.Builder tagBindingsSettingsBuilder =
     TagBindingsStubSettings.newBuilder();
 tagBindingsSettingsBuilder
     .listTagBindingsSettings()
     .setRetrySettings(
         tagBindingsSettingsBuilder
             .listTagBindingsSettings()
             .getRetrySettings()
             .toBuilder()
             .setTotalTimeout(Duration.ofSeconds(30))
             .build());
 TagBindingsStubSettings tagBindingsSettings = tagBindingsSettingsBuilder.build();
 
```
 

### [TagBindingsStubSettings.Builder](/java/docs/reference/google-cloud-resourcemanager/1.10.0/com.google.cloud.resourcemanager.v3.stub.TagBindingsStubSettings.Builder)

Builder for TagBindingsStubSettings.

### [TagKeysStub](/java/docs/reference/google-cloud-resourcemanager/1.10.0/com.google.cloud.resourcemanager.v3.stub.TagKeysStub)

Base stub class for the TagKeys service API.

This class is for advanced usage and reflects the underlying API directly.

### [TagKeysStubSettings](/java/docs/reference/google-cloud-resourcemanager/1.10.0/com.google.cloud.resourcemanager.v3.stub.TagKeysStubSettings)

Settings class to configure an instance of [TagKeysStub](/java/docs/reference/google-cloud-resourcemanager/1.10.0/com.google.cloud.resourcemanager.v3.stub.TagKeysStub).

The default instance has everything set to sensible defaults:

-   The default service address (cloudresourcemanager.googleapis.com) and default port (443) are used.
-   Credentials are acquired automatically through Application Default Credentials.
-   Retries are configured for idempotent methods but not for non-idempotent methods.

The builder of this class is recursive, so contained classes are themselves builders. When build() is called, the tree of builders is called to create the complete settings object.

For example, to set the total timeout of getTagKey to 30 seconds:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 TagKeysStubSettings.Builder tagKeysSettingsBuilder = TagKeysStubSettings.newBuilder();
 tagKeysSettingsBuilder
     .getTagKeySettings()
     .setRetrySettings(
         tagKeysSettingsBuilder
             .getTagKeySettings()
             .getRetrySettings()
             .toBuilder()
             .setTotalTimeout(Duration.ofSeconds(30))
             .build());
 TagKeysStubSettings tagKeysSettings = tagKeysSettingsBuilder.build();
 
```
 

### [TagKeysStubSettings.Builder](/java/docs/reference/google-cloud-resourcemanager/1.10.0/com.google.cloud.resourcemanager.v3.stub.TagKeysStubSettings.Builder)

Builder for TagKeysStubSettings.

### [TagValuesStub](/java/docs/reference/google-cloud-resourcemanager/1.10.0/com.google.cloud.resourcemanager.v3.stub.TagValuesStub)

Base stub class for the TagValues service API.

This class is for advanced usage and reflects the underlying API directly.

### [TagValuesStubSettings](/java/docs/reference/google-cloud-resourcemanager/1.10.0/com.google.cloud.resourcemanager.v3.stub.TagValuesStubSettings)

Settings class to configure an instance of [TagValuesStub](/java/docs/reference/google-cloud-resourcemanager/1.10.0/com.google.cloud.resourcemanager.v3.stub.TagValuesStub).

The default instance has everything set to sensible defaults:

-   The default service address (cloudresourcemanager.googleapis.com) and default port (443) are used.
-   Credentials are acquired automatically through Application Default Credentials.
-   Retries are configured for idempotent methods but not for non-idempotent methods.

The builder of this class is recursive, so contained classes are themselves builders. When build() is called, the tree of builders is called to create the complete settings object.

For example, to set the total timeout of getTagValue to 30 seconds:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 TagValuesStubSettings.Builder tagValuesSettingsBuilder = TagValuesStubSettings.newBuilder();
 tagValuesSettingsBuilder
     .getTagValueSettings()
     .setRetrySettings(
         tagValuesSettingsBuilder
             .getTagValueSettings()
             .getRetrySettings()
             .toBuilder()
             .setTotalTimeout(Duration.ofSeconds(30))
             .build());
 TagValuesStubSettings tagValuesSettings = tagValuesSettingsBuilder.build();
 
```
 

### [TagValuesStubSettings.Builder](/java/docs/reference/google-cloud-resourcemanager/1.10.0/com.google.cloud.resourcemanager.v3.stub.TagValuesStubSettings.Builder)

Builder for TagValuesStubSettings.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
