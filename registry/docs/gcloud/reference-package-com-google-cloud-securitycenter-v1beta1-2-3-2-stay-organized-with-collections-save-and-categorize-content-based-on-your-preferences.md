-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Package com.google.cloud.securitycenter.v1beta1 (2.3.2) Stay organized with collections Save and categorize content based on your preferences.

2.95.0 (latest) 2.93.0 2.91.0 2.90.0 2.88.0 2.86.0 2.84.0 2.83.0 2.82.0 2.81.0 2.80.0 2.78.0 2.76.0 2.75.0 2.72.0 2.71.0 2.70.0 2.68.0 2.67.0 2.66.0 2.65.0 2.64.0 2.63.0 2.62.0 2.61.0 2.60.0 2.59.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.51.0 2.50.0 2.49.0 2.48.0 2.47.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.1 2.10.0 2.9.0 2.8.0 2.7.1 2.6.0 2.5.6 2.3.2

The interfaces provided are listed below, along with usage samples.

## SecurityCenterClient

Service Description: V1 Beta APIs for Security Center service.

Sample for SecurityCenterClient:

 ```

 try (SecurityCenterClient securityCenterClient = SecurityCenterClient.create()) {
   OrganizationName parent = OrganizationName.of("[ORGANIZATION]");
   Source source = Source.newBuilder().build();
   Source response = securityCenterClient.createSource(parent, source);
 }
 
```
 

## Classes

### [Asset](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.Asset)

Security Command Center representation of a Google Cloud resource. The Asset is a Security Command Center resource that captures information about a single Google Cloud resource. All modifications to an Asset are only within the context of Security Command Center and don't affect the referenced Google Cloud resource.

Protobuf type `google.cloud.securitycenter.v1beta1.Asset`

### [Asset.Builder](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.Asset.Builder)

Security Command Center representation of a Google Cloud resource. The Asset is a Security Command Center resource that captures information about a single Google Cloud resource. All modifications to an Asset are only within the context of Security Command Center and don't affect the referenced Google Cloud resource.

Protobuf type `google.cloud.securitycenter.v1beta1.Asset`

### [Asset.SecurityCenterProperties](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.Asset.SecurityCenterProperties)

Security Command Center managed properties. These properties are managed by Security Command Center and cannot be modified by the user.

Protobuf type `google.cloud.securitycenter.v1beta1.Asset.SecurityCenterProperties`

### [Asset.SecurityCenterProperties.Builder](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.Asset.SecurityCenterProperties.Builder)

Security Command Center managed properties. These properties are managed by Security Command Center and cannot be modified by the user.

Protobuf type `google.cloud.securitycenter.v1beta1.Asset.SecurityCenterProperties`

### [AssetOuterClass](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.AssetOuterClass)

### [AssetSecurityMarksName](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.AssetSecurityMarksName) (deprecated)

(deprecated) This resource name class will be removed in the next major version.

AUTO-GENERATED DOCUMENTATION AND CLASS

### [AssetSecurityMarksName.Builder](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.AssetSecurityMarksName.Builder)

Builder for AssetSecurityMarksName.

### [CreateFindingRequest](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.CreateFindingRequest)

Request message for creating a finding.

Protobuf type `google.cloud.securitycenter.v1beta1.CreateFindingRequest`

### [CreateFindingRequest.Builder](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.CreateFindingRequest.Builder)

Request message for creating a finding.

Protobuf type `google.cloud.securitycenter.v1beta1.CreateFindingRequest`

### [CreateSourceRequest](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.CreateSourceRequest)

Request message for creating a source.

Protobuf type `google.cloud.securitycenter.v1beta1.CreateSourceRequest`

### [CreateSourceRequest.Builder](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.CreateSourceRequest.Builder)

Request message for creating a source.

Protobuf type `google.cloud.securitycenter.v1beta1.CreateSourceRequest`

### [Finding](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.Finding)

Security Command Center finding. A finding is a record of assessment data (security, risk, health or privacy) ingested into Security Command Center for presentation, notification, analysis, policy testing, and enforcement. For example, an XSS vulnerability in an App Engine application is a finding.

Protobuf type `google.cloud.securitycenter.v1beta1.Finding`

### [Finding.Builder](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.Finding.Builder)

Security Command Center finding. A finding is a record of assessment data (security, risk, health or privacy) ingested into Security Command Center for presentation, notification, analysis, policy testing, and enforcement. For example, an XSS vulnerability in an App Engine application is a finding.

Protobuf type `google.cloud.securitycenter.v1beta1.Finding`

### [FindingName](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.FindingName)

### [FindingName.Builder](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.FindingName.Builder)

Builder for organizations/{organization}/sources/{source}/findings/{finding}.

### [FindingOuterClass](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.FindingOuterClass)

### [FindingSecurityMarksName](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.FindingSecurityMarksName) (deprecated)

(deprecated) This resource name class will be removed in the next major version.

AUTO-GENERATED DOCUMENTATION AND CLASS

### [FindingSecurityMarksName.Builder](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.FindingSecurityMarksName.Builder)

Builder for FindingSecurityMarksName.

### [GetOrganizationSettingsRequest](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.GetOrganizationSettingsRequest)

Request message for getting organization settings.

Protobuf type `google.cloud.securitycenter.v1beta1.GetOrganizationSettingsRequest`

### [GetOrganizationSettingsRequest.Builder](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.GetOrganizationSettingsRequest.Builder)

Request message for getting organization settings.

Protobuf type `google.cloud.securitycenter.v1beta1.GetOrganizationSettingsRequest`

### [GetSourceRequest](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.GetSourceRequest)

Request message for getting a source.

Protobuf type `google.cloud.securitycenter.v1beta1.GetSourceRequest`

### [GetSourceRequest.Builder](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.GetSourceRequest.Builder)

Request message for getting a source.

Protobuf type `google.cloud.securitycenter.v1beta1.GetSourceRequest`

### [GroupAssetsRequest](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.GroupAssetsRequest)

Request message for grouping by assets.

Protobuf type `google.cloud.securitycenter.v1beta1.GroupAssetsRequest`

### [GroupAssetsRequest.Builder](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.GroupAssetsRequest.Builder)

Request message for grouping by assets.

Protobuf type `google.cloud.securitycenter.v1beta1.GroupAssetsRequest`

### [GroupAssetsResponse](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.GroupAssetsResponse)

Response message for grouping by assets.

Protobuf type `google.cloud.securitycenter.v1beta1.GroupAssetsResponse`

### [GroupAssetsResponse.Builder](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.GroupAssetsResponse.Builder)

Response message for grouping by assets.

Protobuf type `google.cloud.securitycenter.v1beta1.GroupAssetsResponse`

### [GroupFindingsRequest](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.GroupFindingsRequest)

Request message for grouping by findings.

Protobuf type `google.cloud.securitycenter.v1beta1.GroupFindingsRequest`

### [GroupFindingsRequest.Builder](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.GroupFindingsRequest.Builder)

Request message for grouping by findings.

Protobuf type `google.cloud.securitycenter.v1beta1.GroupFindingsRequest`

### [GroupFindingsResponse](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.GroupFindingsResponse)

Response message for group by findings.

Protobuf type `google.cloud.securitycenter.v1beta1.GroupFindingsResponse`

### [GroupFindingsResponse.Builder](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.GroupFindingsResponse.Builder)

Response message for group by findings.

Protobuf type `google.cloud.securitycenter.v1beta1.GroupFindingsResponse`

### [GroupResult](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.GroupResult)

Result containing the properties and count of a groupBy request.

Protobuf type `google.cloud.securitycenter.v1beta1.GroupResult`

### [GroupResult.Builder](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.GroupResult.Builder)

Result containing the properties and count of a groupBy request.

Protobuf type `google.cloud.securitycenter.v1beta1.GroupResult`

### [ListAssetsRequest](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.ListAssetsRequest)

Request message for listing assets.

Protobuf type `google.cloud.securitycenter.v1beta1.ListAssetsRequest`

### [ListAssetsRequest.Builder](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.ListAssetsRequest.Builder)

Request message for listing assets.

Protobuf type `google.cloud.securitycenter.v1beta1.ListAssetsRequest`

### [ListAssetsResponse](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.ListAssetsResponse)

Response message for listing assets.

Protobuf type `google.cloud.securitycenter.v1beta1.ListAssetsResponse`

### [ListAssetsResponse.Builder](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.ListAssetsResponse.Builder)

Response message for listing assets.

Protobuf type `google.cloud.securitycenter.v1beta1.ListAssetsResponse`

### [ListAssetsResponse.ListAssetsResult](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.ListAssetsResponse.ListAssetsResult)

Result containing the Asset and its State.

Protobuf type `google.cloud.securitycenter.v1beta1.ListAssetsResponse.ListAssetsResult`

### [ListAssetsResponse.ListAssetsResult.Builder](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.ListAssetsResponse.ListAssetsResult.Builder)

Result containing the Asset and its State.

Protobuf type `google.cloud.securitycenter.v1beta1.ListAssetsResponse.ListAssetsResult`

### [ListFindingsRequest](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.ListFindingsRequest)

Request message for listing findings.

Protobuf type `google.cloud.securitycenter.v1beta1.ListFindingsRequest`

### [ListFindingsRequest.Builder](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.ListFindingsRequest.Builder)

Request message for listing findings.

Protobuf type `google.cloud.securitycenter.v1beta1.ListFindingsRequest`

### [ListFindingsResponse](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.ListFindingsResponse)

Response message for listing findings.

Protobuf type `google.cloud.securitycenter.v1beta1.ListFindingsResponse`

### [ListFindingsResponse.Builder](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.ListFindingsResponse.Builder)

Response message for listing findings.

Protobuf type `google.cloud.securitycenter.v1beta1.ListFindingsResponse`

### [ListSourcesRequest](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.ListSourcesRequest)

Request message for listing sources.

Protobuf type `google.cloud.securitycenter.v1beta1.ListSourcesRequest`

### [ListSourcesRequest.Builder](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.ListSourcesRequest.Builder)

Request message for listing sources.

Protobuf type `google.cloud.securitycenter.v1beta1.ListSourcesRequest`

### [ListSourcesResponse](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.ListSourcesResponse)

Response message for listing sources.

Protobuf type `google.cloud.securitycenter.v1beta1.ListSourcesResponse`

### [ListSourcesResponse.Builder](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.ListSourcesResponse.Builder)

Response message for listing sources.

Protobuf type `google.cloud.securitycenter.v1beta1.ListSourcesResponse`

### [OrganizationName](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.OrganizationName)

### [OrganizationName.Builder](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.OrganizationName.Builder)

Builder for organizations/{organization}.

### [OrganizationSettings](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.OrganizationSettings)

User specified settings that are attached to the Security Command Center organization.

Protobuf type `google.cloud.securitycenter.v1beta1.OrganizationSettings`

### [OrganizationSettings.AssetDiscoveryConfig](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.OrganizationSettings.AssetDiscoveryConfig)

The configuration used for Asset Discovery runs.

Protobuf type `google.cloud.securitycenter.v1beta1.OrganizationSettings.AssetDiscoveryConfig`

### [OrganizationSettings.AssetDiscoveryConfig.Builder](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.OrganizationSettings.AssetDiscoveryConfig.Builder)

The configuration used for Asset Discovery runs.

Protobuf type `google.cloud.securitycenter.v1beta1.OrganizationSettings.AssetDiscoveryConfig`

### [OrganizationSettings.Builder](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.OrganizationSettings.Builder)

User specified settings that are attached to the Security Command Center organization.

Protobuf type `google.cloud.securitycenter.v1beta1.OrganizationSettings`

### [OrganizationSettingsName](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.OrganizationSettingsName)

### [OrganizationSettingsName.Builder](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.OrganizationSettingsName.Builder)

Builder for organizations/{organization}/organizationSettings.

### [OrganizationSettingsOuterClass](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.OrganizationSettingsOuterClass)

### [RunAssetDiscoveryRequest](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.RunAssetDiscoveryRequest)

Request message for running asset discovery for an organization.

Protobuf type `google.cloud.securitycenter.v1beta1.RunAssetDiscoveryRequest`

### [RunAssetDiscoveryRequest.Builder](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.RunAssetDiscoveryRequest.Builder)

Request message for running asset discovery for an organization.

Protobuf type `google.cloud.securitycenter.v1beta1.RunAssetDiscoveryRequest`

### [RunAssetDiscoveryResponse](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.RunAssetDiscoveryResponse)

Response of asset discovery run

Protobuf type `google.cloud.securitycenter.v1beta1.RunAssetDiscoveryResponse`

### [RunAssetDiscoveryResponse.Builder](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.RunAssetDiscoveryResponse.Builder)

Response of asset discovery run

Protobuf type `google.cloud.securitycenter.v1beta1.RunAssetDiscoveryResponse`

### [RunAssetDiscoveryResponseOuterClass](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.RunAssetDiscoveryResponseOuterClass)

### [SecurityCenterClient](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.SecurityCenterClient)

Service Description: V1 Beta APIs for Security Center service.

This class provides the ability to make remote calls to the backing service through method calls that map to API methods. Sample code to get started:

 ```

 try (SecurityCenterClient securityCenterClient = SecurityCenterClient.create()) {
   OrganizationName parent = OrganizationName.of("[ORGANIZATION]");
   Source source = Source.newBuilder().build();
   Source response = securityCenterClient.createSource(parent, source);
 }
 
```
 

Note: close() needs to be called on the SecurityCenterClient object to clean up resources such as threads. In the example above, try-with-resources is used, which automatically calls close().

The surface of this class includes several types of Java methods for each of the API's methods:

1.  A "flattened" method. With this type of method, the fields of the request type have been converted into function parameters. It may be the case that not all fields are available as parameters, and not every API method will have a flattened method entry point.
2.  A "request object" method. This type of method only takes one parameter, a request object, which must be constructed before the call. Not every API method will have a request object method.
3.  A "callable" method. This type of method takes no parameters and returns an immutable API callable object, which can be used to initiate calls to the service.

See the individual methods for example code.

Many parameters require resource names to be formatted in a particular way. To assist with these names, this class includes a format method for each type of name, and additionally a parse method to extract the individual identifiers contained within names that are returned.

This class can be customized by passing in a custom instance of SecurityCenterSettings to create(). For example:

To customize credentials:

 ```

 SecurityCenterSettings securityCenterSettings =
     SecurityCenterSettings.newBuilder()
         .setCredentialsProvider(FixedCredentialsProvider.create(myCredentials))
         .build();
 SecurityCenterClient securityCenterClient = SecurityCenterClient.create(securityCenterSettings);
 
```
 

To customize the endpoint:

 ```

 SecurityCenterSettings securityCenterSettings =
     SecurityCenterSettings.newBuilder().setEndpoint(myEndpoint).build();
 SecurityCenterClient securityCenterClient = SecurityCenterClient.create(securityCenterSettings);
 
```
 

Please refer to the GitHub repository's samples for more quickstart code snippets.

### [SecurityCenterClient.GroupAssetsFixedSizeCollection](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.SecurityCenterClient.GroupAssetsFixedSizeCollection)

### [SecurityCenterClient.GroupAssetsPage](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.SecurityCenterClient.GroupAssetsPage)

### [SecurityCenterClient.GroupAssetsPagedResponse](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.SecurityCenterClient.GroupAssetsPagedResponse)

### [SecurityCenterClient.GroupFindingsFixedSizeCollection](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.SecurityCenterClient.GroupFindingsFixedSizeCollection)

### [SecurityCenterClient.GroupFindingsPage](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.SecurityCenterClient.GroupFindingsPage)

### [SecurityCenterClient.GroupFindingsPagedResponse](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.SecurityCenterClient.GroupFindingsPagedResponse)

### [SecurityCenterClient.ListAssetsFixedSizeCollection](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.SecurityCenterClient.ListAssetsFixedSizeCollection)

### [SecurityCenterClient.ListAssetsPage](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.SecurityCenterClient.ListAssetsPage)

### [SecurityCenterClient.ListAssetsPagedResponse](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.SecurityCenterClient.ListAssetsPagedResponse)

### [SecurityCenterClient.ListFindingsFixedSizeCollection](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.SecurityCenterClient.ListFindingsFixedSizeCollection)

### [SecurityCenterClient.ListFindingsPage](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.SecurityCenterClient.ListFindingsPage)

### [SecurityCenterClient.ListFindingsPagedResponse](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.SecurityCenterClient.ListFindingsPagedResponse)

### [SecurityCenterClient.ListSourcesFixedSizeCollection](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.SecurityCenterClient.ListSourcesFixedSizeCollection)

### [SecurityCenterClient.ListSourcesPage](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.SecurityCenterClient.ListSourcesPage)

### [SecurityCenterClient.ListSourcesPagedResponse](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.SecurityCenterClient.ListSourcesPagedResponse)

### [SecurityCenterGrpc](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.SecurityCenterGrpc)

V1 Beta APIs for Security Center service.

### [SecurityCenterGrpc.SecurityCenterBlockingStub](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.SecurityCenterGrpc.SecurityCenterBlockingStub)

V1 Beta APIs for Security Center service.

### [SecurityCenterGrpc.SecurityCenterFutureStub](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.SecurityCenterGrpc.SecurityCenterFutureStub)

V1 Beta APIs for Security Center service.

### [SecurityCenterGrpc.SecurityCenterImplBase](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.SecurityCenterGrpc.SecurityCenterImplBase)

V1 Beta APIs for Security Center service.

### [SecurityCenterGrpc.SecurityCenterStub](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.SecurityCenterGrpc.SecurityCenterStub)

V1 Beta APIs for Security Center service.

### [SecurityCenterSettings](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.SecurityCenterSettings)

Settings class to configure an instance of [SecurityCenterClient](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1p1beta1.SecurityCenterClient).

The default instance has everything set to sensible defaults:

-   The default service address (securitycenter.googleapis.com) and default port (443) are used.
-   Credentials are acquired automatically through Application Default Credentials.
-   Retries are configured for idempotent methods but not for non-idempotent methods.

The builder of this class is recursive, so contained classes are themselves builders. When build() is called, the tree of builders is called to create the complete settings object.

For example, to set the total timeout of createSource to 30 seconds:

 ```

 SecurityCenterSettings.Builder securityCenterSettingsBuilder =
     SecurityCenterSettings.newBuilder();
 securityCenterSettingsBuilder
     .createSourceSettings()
     .setRetrySettings(
         securityCenterSettingsBuilder
             .createSourceSettings()
             .getRetrySettings()
             .toBuilder()
             .setTotalTimeout(Duration.ofSeconds(30))
             .build());
 SecurityCenterSettings securityCenterSettings = securityCenterSettingsBuilder.build();
 
```
 

### [SecurityCenterSettings.Builder](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.SecurityCenterSettings.Builder)

Builder for SecurityCenterSettings.

### [SecurityMarks](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.SecurityMarks)

User specified security marks that are attached to the parent Security Command Center resource. Security marks are scoped within a Security Command Center organization -- they can be modified and viewed by all users who have proper permissions on the organization.

Protobuf type `google.cloud.securitycenter.v1beta1.SecurityMarks`

### [SecurityMarks.Builder](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.SecurityMarks.Builder)

User specified security marks that are attached to the parent Security Command Center resource. Security marks are scoped within a Security Command Center organization -- they can be modified and viewed by all users who have proper permissions on the organization.

Protobuf type `google.cloud.securitycenter.v1beta1.SecurityMarks`

### [SecurityMarksOuterClass](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.SecurityMarksOuterClass)

### [SecuritycenterService](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.SecuritycenterService)

### [SecuritymarksName](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.SecuritymarksName) (deprecated)

(deprecated) This resource name class will be removed in the next major version.

AUTO-GENERATED DOCUMENTATION AND CLASS

### [SecuritymarksNames](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.SecuritymarksNames) (deprecated)

(deprecated) This resource name class will be removed in the next major version.

AUTO-GENERATED DOCUMENTATION AND CLASS

### [SetFindingStateRequest](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.SetFindingStateRequest)

Request message for updating a finding's state.

Protobuf type `google.cloud.securitycenter.v1beta1.SetFindingStateRequest`

### [SetFindingStateRequest.Builder](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.SetFindingStateRequest.Builder)

Request message for updating a finding's state.

Protobuf type `google.cloud.securitycenter.v1beta1.SetFindingStateRequest`

### [Source](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.Source)

Security Command Center finding source. A finding source is an entity or a mechanism that can produce a finding. A source is like a container of findings that come from the same scanner, logger, monitor, etc.

Protobuf type `google.cloud.securitycenter.v1beta1.Source`

### [Source.Builder](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.Source.Builder)

Security Command Center finding source. A finding source is an entity or a mechanism that can produce a finding. A source is like a container of findings that come from the same scanner, logger, monitor, etc.

Protobuf type `google.cloud.securitycenter.v1beta1.Source`

### [SourceName](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.SourceName)

### [SourceName.Builder](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.SourceName.Builder)

Builder for organizations/{organization}/sources/{source}.

### [SourceOuterClass](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.SourceOuterClass)

### [UntypedSecuritymarksName](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.UntypedSecuritymarksName) (deprecated)

(deprecated) This resource name class will be removed in the next major version.

AUTO-GENERATED DOCUMENTATION AND CLASS

### [UpdateFindingRequest](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.UpdateFindingRequest)

Request message for updating or creating a finding.

Protobuf type `google.cloud.securitycenter.v1beta1.UpdateFindingRequest`

### [UpdateFindingRequest.Builder](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.UpdateFindingRequest.Builder)

Request message for updating or creating a finding.

Protobuf type `google.cloud.securitycenter.v1beta1.UpdateFindingRequest`

### [UpdateOrganizationSettingsRequest](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.UpdateOrganizationSettingsRequest)

Request message for updating an organization's settings.

Protobuf type `google.cloud.securitycenter.v1beta1.UpdateOrganizationSettingsRequest`

### [UpdateOrganizationSettingsRequest.Builder](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.UpdateOrganizationSettingsRequest.Builder)

Request message for updating an organization's settings.

Protobuf type `google.cloud.securitycenter.v1beta1.UpdateOrganizationSettingsRequest`

### [UpdateSecurityMarksRequest](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.UpdateSecurityMarksRequest)

Request message for updating a SecurityMarks resource.

Protobuf type `google.cloud.securitycenter.v1beta1.UpdateSecurityMarksRequest`

### [UpdateSecurityMarksRequest.Builder](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.UpdateSecurityMarksRequest.Builder)

Request message for updating a SecurityMarks resource.

Protobuf type `google.cloud.securitycenter.v1beta1.UpdateSecurityMarksRequest`

### [UpdateSourceRequest](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.UpdateSourceRequest)

Request message for updating a source.

Protobuf type `google.cloud.securitycenter.v1beta1.UpdateSourceRequest`

### [UpdateSourceRequest.Builder](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.UpdateSourceRequest.Builder)

Request message for updating a source.

Protobuf type `google.cloud.securitycenter.v1beta1.UpdateSourceRequest`

## Interfaces

### [Asset.SecurityCenterPropertiesOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.Asset.SecurityCenterPropertiesOrBuilder)

### [AssetOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.AssetOrBuilder)

### [CreateFindingRequestOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.CreateFindingRequestOrBuilder)

### [CreateSourceRequestOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.CreateSourceRequestOrBuilder)

### [FindingOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.FindingOrBuilder)

### [GetOrganizationSettingsRequestOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.GetOrganizationSettingsRequestOrBuilder)

### [GetSourceRequestOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.GetSourceRequestOrBuilder)

### [GroupAssetsRequestOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.GroupAssetsRequestOrBuilder)

### [GroupAssetsResponseOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.GroupAssetsResponseOrBuilder)

### [GroupFindingsRequestOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.GroupFindingsRequestOrBuilder)

### [GroupFindingsResponseOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.GroupFindingsResponseOrBuilder)

### [GroupResultOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.GroupResultOrBuilder)

### [ListAssetsRequestOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.ListAssetsRequestOrBuilder)

### [ListAssetsResponse.ListAssetsResultOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.ListAssetsResponse.ListAssetsResultOrBuilder)

### [ListAssetsResponseOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.ListAssetsResponseOrBuilder)

### [ListFindingsRequestOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.ListFindingsRequestOrBuilder)

### [ListFindingsResponseOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.ListFindingsResponseOrBuilder)

### [ListSourcesRequestOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.ListSourcesRequestOrBuilder)

### [ListSourcesResponseOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.ListSourcesResponseOrBuilder)

### [OrganizationSettings.AssetDiscoveryConfigOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.OrganizationSettings.AssetDiscoveryConfigOrBuilder)

### [OrganizationSettingsOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.OrganizationSettingsOrBuilder)

### [RunAssetDiscoveryRequestOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.RunAssetDiscoveryRequestOrBuilder)

### [RunAssetDiscoveryResponseOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.RunAssetDiscoveryResponseOrBuilder)

### [SecurityMarksOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.SecurityMarksOrBuilder)

### [SetFindingStateRequestOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.SetFindingStateRequestOrBuilder)

### [SourceOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.SourceOrBuilder)

### [UpdateFindingRequestOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.UpdateFindingRequestOrBuilder)

### [UpdateOrganizationSettingsRequestOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.UpdateOrganizationSettingsRequestOrBuilder)

### [UpdateSecurityMarksRequestOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.UpdateSecurityMarksRequestOrBuilder)

### [UpdateSourceRequestOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.UpdateSourceRequestOrBuilder)

## Enums

### [Finding.State](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.Finding.State)

The state of the finding.

Protobuf enum `google.cloud.securitycenter.v1beta1.Finding.State`

### [ListAssetsResponse.ListAssetsResult.State](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.ListAssetsResponse.ListAssetsResult.State)

State of the asset. When querying across two points in time this describes the change between the two points: ADDED, REMOVED, or ACTIVE. If there was no compare\_duration supplied in the request the state should be: UNUSED

Protobuf enum `google.cloud.securitycenter.v1beta1.ListAssetsResponse.ListAssetsResult.State`

### [OrganizationSettings.AssetDiscoveryConfig.InclusionMode](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.OrganizationSettings.AssetDiscoveryConfig.InclusionMode)

The mode of inclusion when running Asset Discovery. Asset discovery can be limited by explicitly identifying projects to be included or excluded. If INCLUDE\_ONLY is set, then only those projects within the organization and their children are discovered during asset discovery. If EXCLUDE is set, then projects that don't match those projects are discovered during asset discovery. If neither are set, then all projects within the organization are discovered during asset discovery.

Protobuf enum `google.cloud.securitycenter.v1beta1.OrganizationSettings.AssetDiscoveryConfig.InclusionMode`

### [RunAssetDiscoveryResponse.State](/java/docs/reference/google-cloud-securitycenter/2.3.2/com.google.cloud.securitycenter.v1beta1.RunAssetDiscoveryResponse.State)

The state of an asset discovery run.

Protobuf enum `google.cloud.securitycenter.v1beta1.RunAssetDiscoveryResponse.State`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
