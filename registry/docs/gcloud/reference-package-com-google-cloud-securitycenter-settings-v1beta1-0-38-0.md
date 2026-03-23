-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback Stay organized with collections Save and categorize content based on your preferences.

0.90.0 (latest) 0.88.0 0.86.0 0.85.0 0.83.0 0.81.0 0.79.0 0.78.0 0.77.0 0.76.0 0.75.0 0.73.0 0.71.0 0.70.0 0.67.0 0.66.0 0.65.0 0.63.0 0.62.0 0.61.0 0.60.0 0.59.0 0.58.0 0.57.0 0.56.0 0.55.0 0.54.0 0.52.0 0.51.0 0.50.0 0.49.0 0.48.0 0.47.0 0.46.0 0.45.0 0.44.0 0.43.0 0.42.0 0.40.0 0.39.0 0.38.0 0.37.0 0.36.0 0.35.0 0.34.0 0.33.0 0.32.0 0.31.0 0.30.0 0.27.0 0.26.0 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.14.0 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.7.0 0.6.6 0.5.13

# Package com.google.cloud.securitycenter.settings.v1beta1 (0.38.0)

[GitHub Repository](https://github.com/googleapis/google-cloud-java/tree/main/java-securitycenter-settings/google-cloud-securitycenter-settings/src/main/java/com/google/cloud/securitycenter/settings/v1beta1)

[REST Documentation](https://cloud.google.com/security-command-center/docs/reference/rest)

## This package is not the latest GA version!

For this library, we recommend using the [package](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1) associated with API version v1beta1 for new applications.

## Prerelease Implications

This package is a prerelease version! Use with caution. Prerelease versions are considered unstable as they may be shut down. You can read more about [Cloud API versioning strategy here](https://cloud.google.com/apis/design/versioning). Each Cloud Java client library may contain multiple packages. Each package containing a version number in its name corresponds to a published version of the service. We recommend using the latest stable version for new production applications, which can be identified by the largest numeric version that does not contain a suffix. For example, if a client library has two packages: `v1` and `v2alpha`, then the latest stable version is `v1`. If you use an unstable release, breaking changes may be introduced when upgrading.

## Client Classes

Client classes are the main entry point to using a package. They contain several variations of Java methods for each of the API's methods.

Client

Description

[com.google.cloud.securitycenter.settings.v1beta1.SecurityCenterSettingsServiceClient](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.SecurityCenterSettingsServiceClient)

Service Description: ## API Overview

The SecurityCenterSettingsService is a sub-api of `securitycenter.googleapis.com`. The service provides methods to manage Security Center Settings, and Component Settings for GCP

## Settings Classes

Settings classes can be used to configure credentials, endpoints, and retry settings for a Client.

Settings

Description

[com.google.cloud.securitycenter.settings.v1beta1.BillingSettings](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.BillingSettings)

Billing settings

[com.google.cloud.securitycenter.settings.v1beta1.ComponentSettings](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.ComponentSettings)

Component Settings for Security Command Center

[com.google.cloud.securitycenter.settings.v1beta1.ComponentSettings.DetectorSettings](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.ComponentSettings.DetectorSettings)

Settings for each detector.

[com.google.cloud.securitycenter.settings.v1beta1.ContainerThreatDetectionSettings](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.ContainerThreatDetectionSettings)

User specified settings for KTD

[com.google.cloud.securitycenter.settings.v1beta1.EventThreatDetectionSettings](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.EventThreatDetectionSettings)

User specified settings for ETD

[com.google.cloud.securitycenter.settings.v1beta1.SecurityCenterSettingsServiceSettings](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.SecurityCenterSettingsServiceSettings)

Settings class to configure an instance of SecurityCenterSettingsServiceClient.

The default instance has everything set to sensible defaults:

[com.google.cloud.securitycenter.settings.v1beta1.SecurityHealthAnalyticsSettings](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.SecurityHealthAnalyticsSettings)

User specified settings for Security Health Analytics

[com.google.cloud.securitycenter.settings.v1beta1.SecurityHealthAnalyticsSettings.AdminServiceAccountSettings](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.SecurityHealthAnalyticsSettings.AdminServiceAccountSettings)

Settings for "ADMIN\_SERVICE\_ACCOUNT" scanner.

[com.google.cloud.securitycenter.settings.v1beta1.SecurityHealthAnalyticsSettings.NonOrgIamMemberSettings](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.SecurityHealthAnalyticsSettings.NonOrgIamMemberSettings)

Settings for "NON\_ORG\_IAM\_MEMBER" scanner.

[com.google.cloud.securitycenter.settings.v1beta1.Settings](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.Settings)

Common configuration settings for all of Security Center.

[com.google.cloud.securitycenter.settings.v1beta1.Settings.DetectorGroupSettings](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.Settings.DetectorGroupSettings)

The DetectorGroupSettings define the configuration for a detector group.

[com.google.cloud.securitycenter.settings.v1beta1.SinkSettings](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.SinkSettings)

Sink Settings for Security Command Center

## Classes

Class

Description

[com.google.cloud.securitycenter.settings.v1beta1.BatchCalculateEffectiveSettingsRequest](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.BatchCalculateEffectiveSettingsRequest)

Request message for BatchGetEffectiveSettings.

[com.google.cloud.securitycenter.settings.v1beta1.BatchCalculateEffectiveSettingsRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.BatchCalculateEffectiveSettingsRequest.Builder)

Request message for BatchGetEffectiveSettings.

[com.google.cloud.securitycenter.settings.v1beta1.BatchCalculateEffectiveSettingsResponse](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.BatchCalculateEffectiveSettingsResponse)

Response message for BatchGetEffectiveSettings.

[com.google.cloud.securitycenter.settings.v1beta1.BatchCalculateEffectiveSettingsResponse.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.BatchCalculateEffectiveSettingsResponse.Builder)

Response message for BatchGetEffectiveSettings.

[com.google.cloud.securitycenter.settings.v1beta1.BatchGetSettingsRequest](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.BatchGetSettingsRequest)

Request message for BatchGetSettings.

[com.google.cloud.securitycenter.settings.v1beta1.BatchGetSettingsRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.BatchGetSettingsRequest.Builder)

Request message for BatchGetSettings.

[com.google.cloud.securitycenter.settings.v1beta1.BatchGetSettingsResponse](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.BatchGetSettingsResponse)

Response message for BatchGetSettings.

[com.google.cloud.securitycenter.settings.v1beta1.BatchGetSettingsResponse.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.BatchGetSettingsResponse.Builder)

Response message for BatchGetSettings.

[com.google.cloud.securitycenter.settings.v1beta1.BillingSettings.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.BillingSettings.Builder)

Billing settings

[com.google.cloud.securitycenter.settings.v1beta1.BillingSettingsProto](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.BillingSettingsProto)

[com.google.cloud.securitycenter.settings.v1beta1.CalculateEffectiveComponentSettingsRequest](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.CalculateEffectiveComponentSettingsRequest)

Request message for CalculateEffectiveComponentSettings.

[com.google.cloud.securitycenter.settings.v1beta1.CalculateEffectiveComponentSettingsRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.CalculateEffectiveComponentSettingsRequest.Builder)

Request message for CalculateEffectiveComponentSettings.

[com.google.cloud.securitycenter.settings.v1beta1.CalculateEffectiveSettingsRequest](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.CalculateEffectiveSettingsRequest)

Request message for CalculateEffectiveSettings.

[com.google.cloud.securitycenter.settings.v1beta1.CalculateEffectiveSettingsRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.CalculateEffectiveSettingsRequest.Builder)

Request message for CalculateEffectiveSettings.

[com.google.cloud.securitycenter.settings.v1beta1.ComponentSettings.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.ComponentSettings.Builder)

Component Settings for Security Command Center

[com.google.cloud.securitycenter.settings.v1beta1.ComponentSettings.DetectorSettings.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.ComponentSettings.DetectorSettings.Builder)

Settings for each detector.

[com.google.cloud.securitycenter.settings.v1beta1.ComponentSettingsName](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.ComponentSettingsName)

[com.google.cloud.securitycenter.settings.v1beta1.ComponentSettingsName.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.ComponentSettingsName.Builder)

Builder for organizations/{organization}/components/{component}/settings.

[com.google.cloud.securitycenter.settings.v1beta1.ComponentSettingsName.FolderComponentBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.ComponentSettingsName.FolderComponentBuilder)

Builder for folders/{folder}/components/{component}/settings.

[com.google.cloud.securitycenter.settings.v1beta1.ComponentSettingsName.ProjectComponentBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.ComponentSettingsName.ProjectComponentBuilder)

Builder for projects/{project}/components/{component}/settings.

[com.google.cloud.securitycenter.settings.v1beta1.ComponentSettingsName.ProjectLocationClusterComponentBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.ComponentSettingsName.ProjectLocationClusterComponentBuilder)

Builder for projects/{project}/locations/{location}/clusters/{cluster}/components/{component}/settings.

[com.google.cloud.securitycenter.settings.v1beta1.ComponentSettingsName.ProjectRegionClusterComponentBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.ComponentSettingsName.ProjectRegionClusterComponentBuilder)

Builder for projects/{project}/regions/{region}/clusters/{cluster}/components/{component}/settings.

[com.google.cloud.securitycenter.settings.v1beta1.ComponentSettingsName.ProjectZoneClusterComponentBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.ComponentSettingsName.ProjectZoneClusterComponentBuilder)

Builder for projects/{project}/zones/{zone}/clusters/{cluster}/components/{component}/settings.

[com.google.cloud.securitycenter.settings.v1beta1.ComponentSettingsProto](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.ComponentSettingsProto)

[com.google.cloud.securitycenter.settings.v1beta1.ContainerThreatDetectionSettings.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.ContainerThreatDetectionSettings.Builder)

User specified settings for KTD

[com.google.cloud.securitycenter.settings.v1beta1.Detector](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.Detector)

Detector is a set of detectors or scanners act as individual checks done within a component e.g. bad IP, bad domains, IAM anomaly, cryptomining, open firewall, etc. Detector is independent of Organization, meaning each detector

[com.google.cloud.securitycenter.settings.v1beta1.Detector.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.Detector.Builder)

Detector is a set of detectors or scanners act as individual checks done within a component e.g. bad IP, bad domains, IAM anomaly, cryptomining, open firewall, etc. Detector is independent of Organization, meaning each detector

[com.google.cloud.securitycenter.settings.v1beta1.DetectorsProto](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.DetectorsProto)

[com.google.cloud.securitycenter.settings.v1beta1.EventThreatDetectionSettings.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.EventThreatDetectionSettings.Builder)

User specified settings for ETD

[com.google.cloud.securitycenter.settings.v1beta1.GetComponentSettingsRequest](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.GetComponentSettingsRequest)

Request message for GetComponentSettings.

[com.google.cloud.securitycenter.settings.v1beta1.GetComponentSettingsRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.GetComponentSettingsRequest.Builder)

Request message for GetComponentSettings.

[com.google.cloud.securitycenter.settings.v1beta1.GetServiceAccountRequest](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.GetServiceAccountRequest)

Request message for GetServiceAccount.

[com.google.cloud.securitycenter.settings.v1beta1.GetServiceAccountRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.GetServiceAccountRequest.Builder)

Request message for GetServiceAccount.

[com.google.cloud.securitycenter.settings.v1beta1.GetSettingsRequest](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.GetSettingsRequest)

Request message for GetSettings.

[com.google.cloud.securitycenter.settings.v1beta1.GetSettingsRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.GetSettingsRequest.Builder)

Request message for GetSettings.

[com.google.cloud.securitycenter.settings.v1beta1.ListComponentsRequest](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.ListComponentsRequest)

Request message for ListComponents.

[com.google.cloud.securitycenter.settings.v1beta1.ListComponentsRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.ListComponentsRequest.Builder)

Request message for ListComponents.

[com.google.cloud.securitycenter.settings.v1beta1.ListComponentsResponse](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.ListComponentsResponse)

Response message for ListComponents.

[com.google.cloud.securitycenter.settings.v1beta1.ListComponentsResponse.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.ListComponentsResponse.Builder)

Response message for ListComponents.

[com.google.cloud.securitycenter.settings.v1beta1.ListDetectorsRequest](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.ListDetectorsRequest)

Request message for ListDetectors.

[com.google.cloud.securitycenter.settings.v1beta1.ListDetectorsRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.ListDetectorsRequest.Builder)

Request message for ListDetectors.

[com.google.cloud.securitycenter.settings.v1beta1.ListDetectorsResponse](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.ListDetectorsResponse)

Response message for ListDetectors.

[com.google.cloud.securitycenter.settings.v1beta1.ListDetectorsResponse.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.ListDetectorsResponse.Builder)

Response message for ListDetectors.

[com.google.cloud.securitycenter.settings.v1beta1.OrganizationName](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.OrganizationName)

[com.google.cloud.securitycenter.settings.v1beta1.OrganizationName.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.OrganizationName.Builder)

Builder for organizations/{organization}.

[com.google.cloud.securitycenter.settings.v1beta1.ResetComponentSettingsRequest](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.ResetComponentSettingsRequest)

Request message for ResetComponentSettings.

[com.google.cloud.securitycenter.settings.v1beta1.ResetComponentSettingsRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.ResetComponentSettingsRequest.Builder)

Request message for ResetComponentSettings.

[com.google.cloud.securitycenter.settings.v1beta1.ResetSettingsRequest](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.ResetSettingsRequest)

Request message for ResetSettings.

[com.google.cloud.securitycenter.settings.v1beta1.ResetSettingsRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.ResetSettingsRequest.Builder)

Request message for ResetSettings.

[com.google.cloud.securitycenter.settings.v1beta1.SecurityCenterSettingsServiceClient.ListComponentsFixedSizeCollection](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.SecurityCenterSettingsServiceClient.ListComponentsFixedSizeCollection)

[com.google.cloud.securitycenter.settings.v1beta1.SecurityCenterSettingsServiceClient.ListComponentsPage](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.SecurityCenterSettingsServiceClient.ListComponentsPage)

[com.google.cloud.securitycenter.settings.v1beta1.SecurityCenterSettingsServiceClient.ListComponentsPagedResponse](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.SecurityCenterSettingsServiceClient.ListComponentsPagedResponse)

[com.google.cloud.securitycenter.settings.v1beta1.SecurityCenterSettingsServiceClient.ListDetectorsFixedSizeCollection](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.SecurityCenterSettingsServiceClient.ListDetectorsFixedSizeCollection)

[com.google.cloud.securitycenter.settings.v1beta1.SecurityCenterSettingsServiceClient.ListDetectorsPage](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.SecurityCenterSettingsServiceClient.ListDetectorsPage)

[com.google.cloud.securitycenter.settings.v1beta1.SecurityCenterSettingsServiceClient.ListDetectorsPagedResponse](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.SecurityCenterSettingsServiceClient.ListDetectorsPagedResponse)

[com.google.cloud.securitycenter.settings.v1beta1.SecurityCenterSettingsServiceGrpc](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.SecurityCenterSettingsServiceGrpc)

\## API Overview The SecurityCenterSettingsService is a sub-api of `securitycenter.googleapis.com`. The service provides methods to manage

[com.google.cloud.securitycenter.settings.v1beta1.SecurityCenterSettingsServiceGrpc.SecurityCenterSettingsServiceImplBase](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.SecurityCenterSettingsServiceGrpc.SecurityCenterSettingsServiceImplBase)

Base class for the server implementation of the service SecurityCenterSettingsService. ## API Overview

[com.google.cloud.securitycenter.settings.v1beta1.SecurityCenterSettingsServiceSettings.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.SecurityCenterSettingsServiceSettings.Builder)

Builder for SecurityCenterSettingsServiceSettings.

[com.google.cloud.securitycenter.settings.v1beta1.SecurityHealthAnalyticsSettings.AdminServiceAccountSettings.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.SecurityHealthAnalyticsSettings.AdminServiceAccountSettings.Builder)

Settings for "ADMIN\_SERVICE\_ACCOUNT" scanner.

[com.google.cloud.securitycenter.settings.v1beta1.SecurityHealthAnalyticsSettings.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.SecurityHealthAnalyticsSettings.Builder)

User specified settings for Security Health Analytics

[com.google.cloud.securitycenter.settings.v1beta1.SecurityHealthAnalyticsSettings.NonOrgIamMemberSettings.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.SecurityHealthAnalyticsSettings.NonOrgIamMemberSettings.Builder)

Settings for "NON\_ORG\_IAM\_MEMBER" scanner.

[com.google.cloud.securitycenter.settings.v1beta1.ServiceAccount](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.ServiceAccount)

An organization-level service account to be used by threat detection components.

[com.google.cloud.securitycenter.settings.v1beta1.ServiceAccount.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.ServiceAccount.Builder)

An organization-level service account to be used by threat detection components.

[com.google.cloud.securitycenter.settings.v1beta1.ServiceAccountName](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.ServiceAccountName)

[com.google.cloud.securitycenter.settings.v1beta1.ServiceAccountName.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.ServiceAccountName.Builder)

Builder for organizations/{organization}/serviceAccount.

[com.google.cloud.securitycenter.settings.v1beta1.Settings.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.Settings.Builder)

Common configuration settings for all of Security Center.

[com.google.cloud.securitycenter.settings.v1beta1.Settings.DetectorGroupSettings.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.Settings.DetectorGroupSettings.Builder)

The DetectorGroupSettings define the configuration for a detector group.

[com.google.cloud.securitycenter.settings.v1beta1.SettingsName](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.SettingsName)

[com.google.cloud.securitycenter.settings.v1beta1.SettingsName.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.SettingsName.Builder)

Builder for organizations/{organization}/settings.

[com.google.cloud.securitycenter.settings.v1beta1.SettingsName.FolderBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.SettingsName.FolderBuilder)

Builder for folders/{folder}/settings.

[com.google.cloud.securitycenter.settings.v1beta1.SettingsName.ProjectBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.SettingsName.ProjectBuilder)

Builder for projects/{project}/settings.

[com.google.cloud.securitycenter.settings.v1beta1.SettingsName.ProjectLocationClusterBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.SettingsName.ProjectLocationClusterBuilder)

Builder for projects/{project}/locations/{location}/clusters/{cluster}/settings.

[com.google.cloud.securitycenter.settings.v1beta1.SettingsName.ProjectRegionClusterBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.SettingsName.ProjectRegionClusterBuilder)

Builder for projects/{project}/regions/{region}/clusters/{cluster}/settings.

[com.google.cloud.securitycenter.settings.v1beta1.SettingsName.ProjectZoneClusterBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.SettingsName.ProjectZoneClusterBuilder)

Builder for projects/{project}/zones/{zone}/clusters/{cluster}/settings.

[com.google.cloud.securitycenter.settings.v1beta1.SettingsProto](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.SettingsProto)

[com.google.cloud.securitycenter.settings.v1beta1.SettingsServiceProto](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.SettingsServiceProto)

[com.google.cloud.securitycenter.settings.v1beta1.SinkProto](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.SinkProto)

[com.google.cloud.securitycenter.settings.v1beta1.SinkSettings.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.SinkSettings.Builder)

Sink Settings for Security Command Center

[com.google.cloud.securitycenter.settings.v1beta1.UpdateComponentSettingsRequest](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.UpdateComponentSettingsRequest)

Request message for UpdateComponentSettings.

[com.google.cloud.securitycenter.settings.v1beta1.UpdateComponentSettingsRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.UpdateComponentSettingsRequest.Builder)

Request message for UpdateComponentSettings.

[com.google.cloud.securitycenter.settings.v1beta1.UpdateSettingsRequest](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.UpdateSettingsRequest)

Request message for UpdateSettings.

[com.google.cloud.securitycenter.settings.v1beta1.UpdateSettingsRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.UpdateSettingsRequest.Builder)

Request message for UpdateSettings.

[com.google.cloud.securitycenter.settings.v1beta1.WebSecurityScanner](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.WebSecurityScanner)

User specified settings for Web Security Scanner

[com.google.cloud.securitycenter.settings.v1beta1.WebSecurityScanner.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.WebSecurityScanner.Builder)

User specified settings for Web Security Scanner

## Interfaces

Interface

Description

[com.google.cloud.securitycenter.settings.v1beta1.BatchCalculateEffectiveSettingsRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.BatchCalculateEffectiveSettingsRequestOrBuilder)

[com.google.cloud.securitycenter.settings.v1beta1.BatchCalculateEffectiveSettingsResponseOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.BatchCalculateEffectiveSettingsResponseOrBuilder)

[com.google.cloud.securitycenter.settings.v1beta1.BatchGetSettingsRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.BatchGetSettingsRequestOrBuilder)

[com.google.cloud.securitycenter.settings.v1beta1.BatchGetSettingsResponseOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.BatchGetSettingsResponseOrBuilder)

[com.google.cloud.securitycenter.settings.v1beta1.BillingSettingsOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.BillingSettingsOrBuilder)

[com.google.cloud.securitycenter.settings.v1beta1.CalculateEffectiveComponentSettingsRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.CalculateEffectiveComponentSettingsRequestOrBuilder)

[com.google.cloud.securitycenter.settings.v1beta1.CalculateEffectiveSettingsRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.CalculateEffectiveSettingsRequestOrBuilder)

[com.google.cloud.securitycenter.settings.v1beta1.ComponentSettings.DetectorSettingsOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.ComponentSettings.DetectorSettingsOrBuilder)

[com.google.cloud.securitycenter.settings.v1beta1.ComponentSettingsOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.ComponentSettingsOrBuilder)

[com.google.cloud.securitycenter.settings.v1beta1.ContainerThreatDetectionSettingsOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.ContainerThreatDetectionSettingsOrBuilder)

[com.google.cloud.securitycenter.settings.v1beta1.DetectorOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.DetectorOrBuilder)

[com.google.cloud.securitycenter.settings.v1beta1.EventThreatDetectionSettingsOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.EventThreatDetectionSettingsOrBuilder)

[com.google.cloud.securitycenter.settings.v1beta1.GetComponentSettingsRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.GetComponentSettingsRequestOrBuilder)

[com.google.cloud.securitycenter.settings.v1beta1.GetServiceAccountRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.GetServiceAccountRequestOrBuilder)

[com.google.cloud.securitycenter.settings.v1beta1.GetSettingsRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.GetSettingsRequestOrBuilder)

[com.google.cloud.securitycenter.settings.v1beta1.ListComponentsRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.ListComponentsRequestOrBuilder)

[com.google.cloud.securitycenter.settings.v1beta1.ListComponentsResponseOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.ListComponentsResponseOrBuilder)

[com.google.cloud.securitycenter.settings.v1beta1.ListDetectorsRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.ListDetectorsRequestOrBuilder)

[com.google.cloud.securitycenter.settings.v1beta1.ListDetectorsResponseOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.ListDetectorsResponseOrBuilder)

[com.google.cloud.securitycenter.settings.v1beta1.ResetComponentSettingsRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.ResetComponentSettingsRequestOrBuilder)

[com.google.cloud.securitycenter.settings.v1beta1.ResetSettingsRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.ResetSettingsRequestOrBuilder)

[com.google.cloud.securitycenter.settings.v1beta1.SecurityCenterSettingsServiceGrpc.AsyncService](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.SecurityCenterSettingsServiceGrpc.AsyncService)

\## API Overview The SecurityCenterSettingsService is a sub-api of `securitycenter.googleapis.com`. The service provides methods to manage

[com.google.cloud.securitycenter.settings.v1beta1.SecurityHealthAnalyticsSettings.AdminServiceAccountSettingsOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.SecurityHealthAnalyticsSettings.AdminServiceAccountSettingsOrBuilder)

[com.google.cloud.securitycenter.settings.v1beta1.SecurityHealthAnalyticsSettings.NonOrgIamMemberSettingsOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.SecurityHealthAnalyticsSettings.NonOrgIamMemberSettingsOrBuilder)

[com.google.cloud.securitycenter.settings.v1beta1.SecurityHealthAnalyticsSettingsOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.SecurityHealthAnalyticsSettingsOrBuilder)

[com.google.cloud.securitycenter.settings.v1beta1.ServiceAccountOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.ServiceAccountOrBuilder)

[com.google.cloud.securitycenter.settings.v1beta1.Settings.DetectorGroupSettingsOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.Settings.DetectorGroupSettingsOrBuilder)

[com.google.cloud.securitycenter.settings.v1beta1.SettingsOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.SettingsOrBuilder)

[com.google.cloud.securitycenter.settings.v1beta1.SinkSettingsOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.SinkSettingsOrBuilder)

[com.google.cloud.securitycenter.settings.v1beta1.UpdateComponentSettingsRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.UpdateComponentSettingsRequestOrBuilder)

[com.google.cloud.securitycenter.settings.v1beta1.UpdateSettingsRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.UpdateSettingsRequestOrBuilder)

[com.google.cloud.securitycenter.settings.v1beta1.WebSecurityScannerOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.WebSecurityScannerOrBuilder)

## Enums

Enum

Description

[com.google.cloud.securitycenter.settings.v1beta1.BillingTier](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.BillingTier)

Billing tier options

[com.google.cloud.securitycenter.settings.v1beta1.BillingType](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.BillingType)

Billing type

[com.google.cloud.securitycenter.settings.v1beta1.ComponentEnablementState](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.ComponentEnablementState)

Valid states for a component

[com.google.cloud.securitycenter.settings.v1beta1.ComponentSettings.SpecificSettingsCase](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.ComponentSettings.SpecificSettingsCase)

[com.google.cloud.securitycenter.settings.v1beta1.Settings.OnboardingState](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter-settings/latest/com.google.cloud.securitycenter.settings.v1beta1.Settings.OnboardingState)

Defines the onboarding states for SCC Potentially is just an indicator that a user has reviewed some subset of

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
