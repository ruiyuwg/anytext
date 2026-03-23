-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Package com.google.iam.v2.stub (1.9.0) Stay organized with collections Save and categorize content based on your preferences.

1.85.0 (latest) 1.83.0 1.81.0 1.80.0 1.79.0 1.78.0 1.76.0 1.74.0 1.73.0 1.72.0 1.71.0 1.70.0 1.68.0 1.66.0 1.65.0 1.62.0 1.61.0 1.60.0 1.58.0 1.57.0 1.56.0 1.55.0 1.54.0 1.53.0 1.52.0 1.51.0 1.50.0 1.49.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.40.0 1.39.0 1.38.0 1.37.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.28.0 1.27.0 1.26.0 1.25.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.0 1.12.0 1.11.0 1.10.0 1.9.0 1.7.0

## Classes

### [GrpcPoliciesCallableFactory](/java/docs/reference/google-iam-policy/1.9.0/com.google.iam.v2.stub.GrpcPoliciesCallableFactory)

gRPC callable factory implementation for the Policies service API.

This class is for advanced usage.

### [GrpcPoliciesStub](/java/docs/reference/google-iam-policy/1.9.0/com.google.iam.v2.stub.GrpcPoliciesStub)

gRPC stub implementation for the Policies service API.

This class is for advanced usage and reflects the underlying API directly.

### [HttpJsonPoliciesCallableFactory](/java/docs/reference/google-iam-policy/1.9.0/com.google.iam.v2.stub.HttpJsonPoliciesCallableFactory)

REST callable factory implementation for the Policies service API.

This class is for advanced usage.

### [HttpJsonPoliciesStub](/java/docs/reference/google-iam-policy/1.9.0/com.google.iam.v2.stub.HttpJsonPoliciesStub)

REST stub implementation for the Policies service API.

This class is for advanced usage and reflects the underlying API directly.

### [PoliciesStub](/java/docs/reference/google-iam-policy/1.9.0/com.google.iam.v2.stub.PoliciesStub)

Base stub class for the Policies service API.

This class is for advanced usage and reflects the underlying API directly.

### [PoliciesStubSettings](/java/docs/reference/google-iam-policy/1.9.0/com.google.iam.v2.stub.PoliciesStubSettings)

Settings class to configure an instance of [PoliciesStub](/java/docs/reference/google-iam-policy/1.9.0/com.google.iam.v2.stub.PoliciesStub).

The default instance has everything set to sensible defaults:

-   The default service address (iam.googleapis.com) and default port (443) are used.
-   Credentials are acquired automatically through Application Default Credentials.
-   Retries are configured for idempotent methods but not for non-idempotent methods.

The builder of this class is recursive, so contained classes are themselves builders. When build() is called, the tree of builders is called to create the complete settings object.

For example, to set the total timeout of getPolicy to 30 seconds:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 PoliciesStubSettings.Builder policiesSettingsBuilder = PoliciesStubSettings.newBuilder();
 policiesSettingsBuilder
     .getPolicySettings()
     .setRetrySettings(
         policiesSettingsBuilder.getPolicySettings().getRetrySettings().toBuilder()
             .setTotalTimeout(Duration.ofSeconds(30))
             .build());
 PoliciesStubSettings policiesSettings = policiesSettingsBuilder.build();
 
```
 

### [PoliciesStubSettings.Builder](/java/docs/reference/google-iam-policy/1.9.0/com.google.iam.v2.stub.PoliciesStubSettings.Builder)

Builder for PoliciesStubSettings.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
