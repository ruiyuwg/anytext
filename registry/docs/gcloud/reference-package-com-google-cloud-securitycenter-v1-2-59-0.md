-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback Stay organized with collections Save and categorize content based on your preferences.

2.95.0 (latest) 2.93.0 2.91.0 2.90.0 2.88.0 2.86.0 2.84.0 2.83.0 2.82.0 2.81.0 2.80.0 2.78.0 2.76.0 2.75.0 2.72.0 2.71.0 2.70.0 2.68.0 2.67.0 2.66.0 2.65.0 2.64.0 2.63.0 2.62.0 2.61.0 2.60.0 2.59.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.51.0 2.50.0 2.49.0 2.48.0 2.47.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.1 2.10.0 2.9.0 2.8.0 2.7.1 2.6.0 2.5.6 2.3.2

# Package com.google.cloud.securitycenter.v1 (2.59.0)

[GitHub Repository](https://github.com/googleapis/google-cloud-java/tree/main/java-securitycenter/google-cloud-securitycenter/src/main/java/com/google/cloud/securitycenter/v1)

[REST Documentation](https://cloud.google.com/security-command-center/docs/reference/rest)

## This package is not the recommended entry point to using this client library!

For this library, we recommend using [com.google.cloud.securitycenter.v2](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v2) for new applications.

## Client Classes

Client classes are the main entry point to using a package. They contain several variations of Java methods for each of the API's methods.

Client

Description

[com.google.cloud.securitycenter.v1.SecurityCenterClient](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SecurityCenterClient)

Service Description: V1 APIs for Security Center service.

This class provides the ability to make remote calls to the backing service through method calls that map to API methods. Sample code to get started:

## Settings Classes

Settings classes can be used to configure credentials, endpoints, and retry settings for a Client.

Settings

Description

[com.google.cloud.securitycenter.v1.OrganizationSettings](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.OrganizationSettings)

User specified settings that are attached to the Security Command Center organization.

[com.google.cloud.securitycenter.v1.SecurityCenterSettings](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SecurityCenterSettings)

Settings class to configure an instance of SecurityCenterClient.

The default instance has everything set to sensible defaults:

## Classes

Class

Description

[com.google.cloud.securitycenter.v1.Access](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Access)

Represents an access event.

[com.google.cloud.securitycenter.v1.Access.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Access.Builder)

Represents an access event.

[com.google.cloud.securitycenter.v1.AccessProto](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.AccessProto)

[com.google.cloud.securitycenter.v1.AdaptiveProtection](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.AdaptiveProtection)

Information about [Google Cloud Armor Adaptive Protection](https://cloud.google.com/armor/docs/cloud-armor-overview#google-cloud-armor-adaptive-protection).

[com.google.cloud.securitycenter.v1.AdaptiveProtection.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.AdaptiveProtection.Builder)

Information about [Google Cloud Armor Adaptive Protection](https://cloud.google.com/armor/docs/cloud-armor-overview#google-cloud-armor-adaptive-protection).

[com.google.cloud.securitycenter.v1.Application](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Application)

Represents an application associated with a finding.

[com.google.cloud.securitycenter.v1.Application.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Application.Builder)

Represents an application associated with a finding.

[com.google.cloud.securitycenter.v1.ApplicationProto](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ApplicationProto)

[com.google.cloud.securitycenter.v1.Asset](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Asset)

Security Command Center representation of a Google Cloud resource.

[com.google.cloud.securitycenter.v1.Asset.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Asset.Builder)

Security Command Center representation of a Google Cloud resource.

[com.google.cloud.securitycenter.v1.Asset.IamPolicy](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Asset.IamPolicy)

Cloud IAM Policy information associated with the Google Cloud resource described by the Security Command Center asset. This information is managed and defined by the Google Cloud resource and cannot be modified by the

[com.google.cloud.securitycenter.v1.Asset.IamPolicy.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Asset.IamPolicy.Builder)

Cloud IAM Policy information associated with the Google Cloud resource described by the Security Command Center asset. This information is managed and defined by the Google Cloud resource and cannot be modified by the

[com.google.cloud.securitycenter.v1.Asset.SecurityCenterProperties](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Asset.SecurityCenterProperties)

Security Command Center managed properties. These properties are managed by Security Command Center and cannot be modified by the user.

[com.google.cloud.securitycenter.v1.Asset.SecurityCenterProperties.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Asset.SecurityCenterProperties.Builder)

Security Command Center managed properties. These properties are managed by Security Command Center and cannot be modified by the user.

[com.google.cloud.securitycenter.v1.AssetName](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.AssetName)

[com.google.cloud.securitycenter.v1.AssetName.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.AssetName.Builder)

Builder for organizations/{organization}/assets/{asset}.

[com.google.cloud.securitycenter.v1.AssetName.FolderAssetBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.AssetName.FolderAssetBuilder)

Builder for folders/{folder}/assets/{asset}.

[com.google.cloud.securitycenter.v1.AssetName.ProjectAssetBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.AssetName.ProjectAssetBuilder)

Builder for projects/{project}/assets/{asset}.

[com.google.cloud.securitycenter.v1.AssetOuterClass](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.AssetOuterClass)

[com.google.cloud.securitycenter.v1.Attack](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Attack)

Information about DDoS attack volume and classification.

[com.google.cloud.securitycenter.v1.Attack.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Attack.Builder)

Information about DDoS attack volume and classification.

[com.google.cloud.securitycenter.v1.AttackExposure](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.AttackExposure)

An attack exposure contains the results of an attack path simulation run.

[com.google.cloud.securitycenter.v1.AttackExposure.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.AttackExposure.Builder)

An attack exposure contains the results of an attack path simulation run.

[com.google.cloud.securitycenter.v1.AttackExposureProto](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.AttackExposureProto)

[com.google.cloud.securitycenter.v1.AttackPath](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.AttackPath)

A path that an attacker could take to reach an exposed resource.

[com.google.cloud.securitycenter.v1.AttackPath.AttackPathEdge](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.AttackPath.AttackPathEdge)

Represents a connection between a source node and a destination node in this attack path.

[com.google.cloud.securitycenter.v1.AttackPath.AttackPathEdge.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.AttackPath.AttackPathEdge.Builder)

Represents a connection between a source node and a destination node in this attack path.

[com.google.cloud.securitycenter.v1.AttackPath.AttackPathNode](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.AttackPath.AttackPathNode)

Represents one point that an attacker passes through in this attack path.

[com.google.cloud.securitycenter.v1.AttackPath.AttackPathNode.AttackStepNode](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.AttackPath.AttackPathNode.AttackStepNode)

Detailed steps the attack can take between path nodes.

[com.google.cloud.securitycenter.v1.AttackPath.AttackPathNode.AttackStepNode.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.AttackPath.AttackPathNode.AttackStepNode.Builder)

Detailed steps the attack can take between path nodes.

[com.google.cloud.securitycenter.v1.AttackPath.AttackPathNode.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.AttackPath.AttackPathNode.Builder)

Represents one point that an attacker passes through in this attack path.

[com.google.cloud.securitycenter.v1.AttackPath.AttackPathNode.PathNodeAssociatedFinding](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.AttackPath.AttackPathNode.PathNodeAssociatedFinding)

A finding that is associated with this node in the attack path.

[com.google.cloud.securitycenter.v1.AttackPath.AttackPathNode.PathNodeAssociatedFinding.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.AttackPath.AttackPathNode.PathNodeAssociatedFinding.Builder)

A finding that is associated with this node in the attack path.

[com.google.cloud.securitycenter.v1.AttackPath.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.AttackPath.Builder)

A path that an attacker could take to reach an exposed resource.

[com.google.cloud.securitycenter.v1.AttackPathName](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.AttackPathName)

[com.google.cloud.securitycenter.v1.AttackPathName.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.AttackPathName.Builder)

Builder for organizations/{organization}/simulations/{simulation}/valuedResources/{valued\_resource}/attackPaths/{attack\_path}.

[com.google.cloud.securitycenter.v1.AttackPathProto](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.AttackPathProto)

[com.google.cloud.securitycenter.v1.AwsMetadata](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.AwsMetadata)

AWS metadata associated with the resource, only applicable if the finding's cloud provider is Amazon Web Services.

[com.google.cloud.securitycenter.v1.AwsMetadata.AwsAccount](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.AwsMetadata.AwsAccount)

An AWS account that is a member of an organization.

[com.google.cloud.securitycenter.v1.AwsMetadata.AwsAccount.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.AwsMetadata.AwsAccount.Builder)

An AWS account that is a member of an organization.

[com.google.cloud.securitycenter.v1.AwsMetadata.AwsOrganization](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.AwsMetadata.AwsOrganization)

An organization is a collection of accounts that are centrally managed together using consolidated billing, organized hierarchically with organizational units (OUs), and controlled with policies.

[com.google.cloud.securitycenter.v1.AwsMetadata.AwsOrganization.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.AwsMetadata.AwsOrganization.Builder)

An organization is a collection of accounts that are centrally managed together using consolidated billing, organized hierarchically with organizational units (OUs), and controlled with policies.

[com.google.cloud.securitycenter.v1.AwsMetadata.AwsOrganizationalUnit](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.AwsMetadata.AwsOrganizationalUnit)

An Organizational Unit (OU) is a container of AWS accounts within a root of an organization. Policies that are attached to an OU apply to all accounts contained in that OU and in any child OUs.

[com.google.cloud.securitycenter.v1.AwsMetadata.AwsOrganizationalUnit.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.AwsMetadata.AwsOrganizationalUnit.Builder)

An Organizational Unit (OU) is a container of AWS accounts within a root of an organization. Policies that are attached to an OU apply to all accounts contained in that OU and in any child OUs.

[com.google.cloud.securitycenter.v1.AwsMetadata.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.AwsMetadata.Builder)

AWS metadata associated with the resource, only applicable if the finding's cloud provider is Amazon Web Services.

[com.google.cloud.securitycenter.v1.AzureMetadata](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.AzureMetadata)

Azure metadata associated with the resource, only applicable if the finding's cloud provider is Microsoft Azure.

[com.google.cloud.securitycenter.v1.AzureMetadata.AzureManagementGroup](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.AzureMetadata.AzureManagementGroup)

Represents an Azure management group.

[com.google.cloud.securitycenter.v1.AzureMetadata.AzureManagementGroup.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.AzureMetadata.AzureManagementGroup.Builder)

Represents an Azure management group.

[com.google.cloud.securitycenter.v1.AzureMetadata.AzureResourceGroup](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.AzureMetadata.AzureResourceGroup)

Represents an Azure resource group.

[com.google.cloud.securitycenter.v1.AzureMetadata.AzureResourceGroup.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.AzureMetadata.AzureResourceGroup.Builder)

Represents an Azure resource group.

[com.google.cloud.securitycenter.v1.AzureMetadata.AzureSubscription](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.AzureMetadata.AzureSubscription)

Represents an Azure subscription.

[com.google.cloud.securitycenter.v1.AzureMetadata.AzureSubscription.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.AzureMetadata.AzureSubscription.Builder)

Represents an Azure subscription.

[com.google.cloud.securitycenter.v1.AzureMetadata.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.AzureMetadata.Builder)

Azure metadata associated with the resource, only applicable if the finding's cloud provider is Microsoft Azure.

[com.google.cloud.securitycenter.v1.BackupDisasterRecovery](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.BackupDisasterRecovery)

Information related to Google Cloud Backup and DR Service findings.

[com.google.cloud.securitycenter.v1.BackupDisasterRecovery.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.BackupDisasterRecovery.Builder)

Information related to Google Cloud Backup and DR Service findings.

[com.google.cloud.securitycenter.v1.BackupDisasterRecoveryProto](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.BackupDisasterRecoveryProto)

[com.google.cloud.securitycenter.v1.BatchCreateResourceValueConfigsRequest](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.BatchCreateResourceValueConfigsRequest)

Request message to create multiple resource value configs

[com.google.cloud.securitycenter.v1.BatchCreateResourceValueConfigsRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.BatchCreateResourceValueConfigsRequest.Builder)

Request message to create multiple resource value configs

[com.google.cloud.securitycenter.v1.BatchCreateResourceValueConfigsResponse](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.BatchCreateResourceValueConfigsResponse)

Response message for BatchCreateResourceValueConfigs

[com.google.cloud.securitycenter.v1.BatchCreateResourceValueConfigsResponse.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.BatchCreateResourceValueConfigsResponse.Builder)

Response message for BatchCreateResourceValueConfigs

[com.google.cloud.securitycenter.v1.BigQueryExport](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.BigQueryExport)

Configures how to deliver Findings to BigQuery Instance.

[com.google.cloud.securitycenter.v1.BigQueryExport.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.BigQueryExport.Builder)

Configures how to deliver Findings to BigQuery Instance.

[com.google.cloud.securitycenter.v1.BigQueryExportName](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.BigQueryExportName)

[com.google.cloud.securitycenter.v1.BigQueryExportName.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.BigQueryExportName.Builder)

Builder for organizations/{organization}/bigQueryExports/{export}.

[com.google.cloud.securitycenter.v1.BigQueryExportName.FolderExportBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.BigQueryExportName.FolderExportBuilder)

Builder for folders/{folder}/bigQueryExports/{export}.

[com.google.cloud.securitycenter.v1.BigQueryExportName.ProjectExportBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.BigQueryExportName.ProjectExportBuilder)

Builder for projects/{project}/bigQueryExports/{export}.

[com.google.cloud.securitycenter.v1.BigQueryExportProto](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.BigQueryExportProto)

[com.google.cloud.securitycenter.v1.BulkMuteFindingsRequest](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.BulkMuteFindingsRequest)

Request message for bulk findings update. Note:

[com.google.cloud.securitycenter.v1.BulkMuteFindingsRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.BulkMuteFindingsRequest.Builder)

Request message for bulk findings update. Note:

[com.google.cloud.securitycenter.v1.BulkMuteFindingsResponse](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.BulkMuteFindingsResponse)

The response to a BulkMute request. Contains the LRO information.

[com.google.cloud.securitycenter.v1.BulkMuteFindingsResponse.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.BulkMuteFindingsResponse.Builder)

The response to a BulkMute request. Contains the LRO information.

[com.google.cloud.securitycenter.v1.CloudArmor](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.CloudArmor)

Fields related to Google Cloud Armor findings.

[com.google.cloud.securitycenter.v1.CloudArmor.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.CloudArmor.Builder)

Fields related to Google Cloud Armor findings.

[com.google.cloud.securitycenter.v1.CloudArmorProto](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.CloudArmorProto)

[com.google.cloud.securitycenter.v1.CloudDlpDataProfile](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.CloudDlpDataProfile)

The [data profile](https://cloud.google.com/dlp/docs/data-profiles) associated with the finding.

[com.google.cloud.securitycenter.v1.CloudDlpDataProfile.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.CloudDlpDataProfile.Builder)

The [data profile](https://cloud.google.com/dlp/docs/data-profiles) associated with the finding.

[com.google.cloud.securitycenter.v1.CloudDlpDataProfileProto](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.CloudDlpDataProfileProto)

[com.google.cloud.securitycenter.v1.CloudDlpInspection](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.CloudDlpInspection)

Details about the Cloud Data Loss Prevention (Cloud DLP) [inspection job](https://cloud.google.com/dlp/docs/concepts-job-triggers) that produced the finding.

[com.google.cloud.securitycenter.v1.CloudDlpInspection.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.CloudDlpInspection.Builder)

Details about the Cloud Data Loss Prevention (Cloud DLP) [inspection job](https://cloud.google.com/dlp/docs/concepts-job-triggers) that produced the finding.

[com.google.cloud.securitycenter.v1.CloudDlpInspectionProto](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.CloudDlpInspectionProto)

[com.google.cloud.securitycenter.v1.CloudLoggingEntry](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.CloudLoggingEntry)

Metadata taken from a [Cloud Logging LogEntry](https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry)

[com.google.cloud.securitycenter.v1.CloudLoggingEntry.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.CloudLoggingEntry.Builder)

Metadata taken from a [Cloud Logging LogEntry](https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry)

[com.google.cloud.securitycenter.v1.Compliance](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Compliance)

Contains compliance information about a security standard indicating unmet recommendations.

[com.google.cloud.securitycenter.v1.Compliance.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Compliance.Builder)

Contains compliance information about a security standard indicating unmet recommendations.

[com.google.cloud.securitycenter.v1.ComplianceProto](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ComplianceProto)

[com.google.cloud.securitycenter.v1.Connection](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Connection)

Contains information about the IP connection associated with the finding.

[com.google.cloud.securitycenter.v1.Connection.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Connection.Builder)

Contains information about the IP connection associated with the finding.

[com.google.cloud.securitycenter.v1.ConnectionProto](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ConnectionProto)

[com.google.cloud.securitycenter.v1.Contact](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Contact)

The email address of a contact.

[com.google.cloud.securitycenter.v1.Contact.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Contact.Builder)

The email address of a contact.

[com.google.cloud.securitycenter.v1.ContactDetails](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ContactDetails)

Details about specific contacts

[com.google.cloud.securitycenter.v1.ContactDetails.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ContactDetails.Builder)

Details about specific contacts

[com.google.cloud.securitycenter.v1.ContactDetailsProto](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ContactDetailsProto)

[com.google.cloud.securitycenter.v1.Container](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Container)

Container associated with the finding.

[com.google.cloud.securitycenter.v1.Container.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Container.Builder)

Container associated with the finding.

[com.google.cloud.securitycenter.v1.ContainerProto](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ContainerProto)

[com.google.cloud.securitycenter.v1.CreateBigQueryExportRequest](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.CreateBigQueryExportRequest)

Request message for creating a BigQuery export.

[com.google.cloud.securitycenter.v1.CreateBigQueryExportRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.CreateBigQueryExportRequest.Builder)

Request message for creating a BigQuery export.

[com.google.cloud.securitycenter.v1.CreateEventThreatDetectionCustomModuleRequest](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.CreateEventThreatDetectionCustomModuleRequest)

Request to create an Event Threat Detection custom module.

[com.google.cloud.securitycenter.v1.CreateEventThreatDetectionCustomModuleRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.CreateEventThreatDetectionCustomModuleRequest.Builder)

Request to create an Event Threat Detection custom module.

[com.google.cloud.securitycenter.v1.CreateFindingRequest](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.CreateFindingRequest)

Request message for creating a finding.

[com.google.cloud.securitycenter.v1.CreateFindingRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.CreateFindingRequest.Builder)

Request message for creating a finding.

[com.google.cloud.securitycenter.v1.CreateMuteConfigRequest](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.CreateMuteConfigRequest)

Request message for creating a mute config.

[com.google.cloud.securitycenter.v1.CreateMuteConfigRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.CreateMuteConfigRequest.Builder)

Request message for creating a mute config.

[com.google.cloud.securitycenter.v1.CreateNotificationConfigRequest](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.CreateNotificationConfigRequest)

Request message for creating a notification config.

[com.google.cloud.securitycenter.v1.CreateNotificationConfigRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.CreateNotificationConfigRequest.Builder)

Request message for creating a notification config.

[com.google.cloud.securitycenter.v1.CreateResourceValueConfigRequest](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.CreateResourceValueConfigRequest)

Request message to create single resource value config

[com.google.cloud.securitycenter.v1.CreateResourceValueConfigRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.CreateResourceValueConfigRequest.Builder)

Request message to create single resource value config

[com.google.cloud.securitycenter.v1.CreateSecurityHealthAnalyticsCustomModuleRequest](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.CreateSecurityHealthAnalyticsCustomModuleRequest)

Request message for creating Security Health Analytics custom modules.

[com.google.cloud.securitycenter.v1.CreateSecurityHealthAnalyticsCustomModuleRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.CreateSecurityHealthAnalyticsCustomModuleRequest.Builder)

Request message for creating Security Health Analytics custom modules.

[com.google.cloud.securitycenter.v1.CreateSourceRequest](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.CreateSourceRequest)

Request message for creating a source.

[com.google.cloud.securitycenter.v1.CreateSourceRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.CreateSourceRequest.Builder)

Request message for creating a source.

[com.google.cloud.securitycenter.v1.CustomConfig](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.CustomConfig)

Defines the properties in a custom module configuration for Security Health Analytics. Use the custom module configuration to create custom detectors that generate custom findings for resources that you specify.

[com.google.cloud.securitycenter.v1.CustomConfig.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.CustomConfig.Builder)

Defines the properties in a custom module configuration for Security Health Analytics. Use the custom module configuration to create custom detectors that generate custom findings for resources that you specify.

[com.google.cloud.securitycenter.v1.CustomConfig.CustomOutputSpec](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.CustomConfig.CustomOutputSpec)

A set of optional name-value pairs that define custom source properties to return with each finding that is generated by the custom module. The custom source properties that are defined here are included in the finding JSON

[com.google.cloud.securitycenter.v1.CustomConfig.CustomOutputSpec.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.CustomConfig.CustomOutputSpec.Builder)

A set of optional name-value pairs that define custom source properties to return with each finding that is generated by the custom module. The custom source properties that are defined here are included in the finding JSON

[com.google.cloud.securitycenter.v1.CustomConfig.CustomOutputSpec.Property](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.CustomConfig.CustomOutputSpec.Property)

An individual name-value pair that defines a custom source property.

[com.google.cloud.securitycenter.v1.CustomConfig.CustomOutputSpec.Property.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.CustomConfig.CustomOutputSpec.Property.Builder)

An individual name-value pair that defines a custom source property.

[com.google.cloud.securitycenter.v1.CustomConfig.ResourceSelector](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.CustomConfig.ResourceSelector)

Resource for selecting resource type.

[com.google.cloud.securitycenter.v1.CustomConfig.ResourceSelector.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.CustomConfig.ResourceSelector.Builder)

Resource for selecting resource type.

[com.google.cloud.securitycenter.v1.CustomModuleValidationError](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.CustomModuleValidationError)

An error encountered while validating the uploaded configuration of an Event Threat Detection Custom Module.

[com.google.cloud.securitycenter.v1.CustomModuleValidationError.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.CustomModuleValidationError.Builder)

An error encountered while validating the uploaded configuration of an Event Threat Detection Custom Module.

[com.google.cloud.securitycenter.v1.CustomModuleValidationErrors](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.CustomModuleValidationErrors)

A list of zero or more errors encountered while validating the uploaded configuration of an Event Threat Detection Custom Module.

[com.google.cloud.securitycenter.v1.CustomModuleValidationErrors.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.CustomModuleValidationErrors.Builder)

A list of zero or more errors encountered while validating the uploaded configuration of an Event Threat Detection Custom Module.

[com.google.cloud.securitycenter.v1.Cve](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Cve)

CVE stands for Common Vulnerabilities and Exposures. Information from the [CVE record](https://www.cve.org/ResourcesSupport/Glossary) that describes this

[com.google.cloud.securitycenter.v1.Cve.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Cve.Builder)

CVE stands for Common Vulnerabilities and Exposures. Information from the [CVE record](https://www.cve.org/ResourcesSupport/Glossary) that describes this

[com.google.cloud.securitycenter.v1.Cvssv3](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Cvssv3)

Common Vulnerability Scoring System version 3.

[com.google.cloud.securitycenter.v1.Cvssv3.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Cvssv3.Builder)

Common Vulnerability Scoring System version 3.

[com.google.cloud.securitycenter.v1.Database](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Database)

Represents database access information, such as queries. A database may be a sub-resource of an instance (as in the case of Cloud SQL instances or Cloud Spanner instances), or the database instance itself. Some database resources

[com.google.cloud.securitycenter.v1.Database.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Database.Builder)

Represents database access information, such as queries. A database may be a sub-resource of an instance (as in the case of Cloud SQL instances or Cloud Spanner instances), or the database instance itself. Some database resources

[com.google.cloud.securitycenter.v1.DatabaseProto](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.DatabaseProto)

[com.google.cloud.securitycenter.v1.DeleteBigQueryExportRequest](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.DeleteBigQueryExportRequest)

Request message for deleting a BigQuery export.

[com.google.cloud.securitycenter.v1.DeleteBigQueryExportRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.DeleteBigQueryExportRequest.Builder)

Request message for deleting a BigQuery export.

[com.google.cloud.securitycenter.v1.DeleteEventThreatDetectionCustomModuleRequest](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.DeleteEventThreatDetectionCustomModuleRequest)

Request to delete an Event Threat Detection custom module.

[com.google.cloud.securitycenter.v1.DeleteEventThreatDetectionCustomModuleRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.DeleteEventThreatDetectionCustomModuleRequest.Builder)

Request to delete an Event Threat Detection custom module.

[com.google.cloud.securitycenter.v1.DeleteMuteConfigRequest](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.DeleteMuteConfigRequest)

Request message for deleting a mute config.

[com.google.cloud.securitycenter.v1.DeleteMuteConfigRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.DeleteMuteConfigRequest.Builder)

Request message for deleting a mute config.

[com.google.cloud.securitycenter.v1.DeleteNotificationConfigRequest](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.DeleteNotificationConfigRequest)

Request message for deleting a notification config.

[com.google.cloud.securitycenter.v1.DeleteNotificationConfigRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.DeleteNotificationConfigRequest.Builder)

Request message for deleting a notification config.

[com.google.cloud.securitycenter.v1.DeleteResourceValueConfigRequest](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.DeleteResourceValueConfigRequest)

Request message to delete resource value config

[com.google.cloud.securitycenter.v1.DeleteResourceValueConfigRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.DeleteResourceValueConfigRequest.Builder)

Request message to delete resource value config

[com.google.cloud.securitycenter.v1.DeleteSecurityHealthAnalyticsCustomModuleRequest](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.DeleteSecurityHealthAnalyticsCustomModuleRequest)

Request message for deleting Security Health Analytics custom modules.

[com.google.cloud.securitycenter.v1.DeleteSecurityHealthAnalyticsCustomModuleRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.DeleteSecurityHealthAnalyticsCustomModuleRequest.Builder)

Request message for deleting Security Health Analytics custom modules.

[com.google.cloud.securitycenter.v1.EffectiveEventThreatDetectionCustomModule](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.EffectiveEventThreatDetectionCustomModule)

An EffectiveEventThreatDetectionCustomModule is the representation of an Event Threat Detection custom module at a specified level of the resource hierarchy: organization, folder, or project. If a custom module is

[com.google.cloud.securitycenter.v1.EffectiveEventThreatDetectionCustomModule.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.EffectiveEventThreatDetectionCustomModule.Builder)

An EffectiveEventThreatDetectionCustomModule is the representation of an Event Threat Detection custom module at a specified level of the resource hierarchy: organization, folder, or project. If a custom module is

[com.google.cloud.securitycenter.v1.EffectiveEventThreatDetectionCustomModuleName](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.EffectiveEventThreatDetectionCustomModuleName)

[com.google.cloud.securitycenter.v1.EffectiveEventThreatDetectionCustomModuleName.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.EffectiveEventThreatDetectionCustomModuleName.Builder)

Builder for organizations/{organization}/eventThreatDetectionSettings/effectiveCustomModules/{module}.

[com.google.cloud.securitycenter.v1.EffectiveEventThreatDetectionCustomModuleName.FolderModuleBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.EffectiveEventThreatDetectionCustomModuleName.FolderModuleBuilder)

Builder for folders/{folder}/eventThreatDetectionSettings/effectiveCustomModules/{module}.

[com.google.cloud.securitycenter.v1.EffectiveEventThreatDetectionCustomModuleName.ProjectModuleBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.EffectiveEventThreatDetectionCustomModuleName.ProjectModuleBuilder)

Builder for projects/{project}/eventThreatDetectionSettings/effectiveCustomModules/{module}.

[com.google.cloud.securitycenter.v1.EffectiveEventThreatDetectionCustomModuleProto](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.EffectiveEventThreatDetectionCustomModuleProto)

[com.google.cloud.securitycenter.v1.EffectiveSecurityHealthAnalyticsCustomModule](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.EffectiveSecurityHealthAnalyticsCustomModule)

An EffectiveSecurityHealthAnalyticsCustomModule is the representation of a Security Health Analytics custom module at a specified level of the resource hierarchy: organization, folder, or project. If a custom module is

[com.google.cloud.securitycenter.v1.EffectiveSecurityHealthAnalyticsCustomModule.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.EffectiveSecurityHealthAnalyticsCustomModule.Builder)

An EffectiveSecurityHealthAnalyticsCustomModule is the representation of a Security Health Analytics custom module at a specified level of the resource hierarchy: organization, folder, or project. If a custom module is

[com.google.cloud.securitycenter.v1.EffectiveSecurityHealthAnalyticsCustomModuleName](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.EffectiveSecurityHealthAnalyticsCustomModuleName)

[com.google.cloud.securitycenter.v1.EffectiveSecurityHealthAnalyticsCustomModuleName.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.EffectiveSecurityHealthAnalyticsCustomModuleName.Builder)

Builder for organizations/{organization}/securityHealthAnalyticsSettings/effectiveCustomModules/{effective\_custom\_module}.

[com.google.cloud.securitycenter.v1.EffectiveSecurityHealthAnalyticsCustomModuleName.FolderEffectiveCustomModuleBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.EffectiveSecurityHealthAnalyticsCustomModuleName.FolderEffectiveCustomModuleBuilder)

Builder for folders/{folder}/securityHealthAnalyticsSettings/effectiveCustomModules/{effective\_custom\_module}.

[com.google.cloud.securitycenter.v1.EffectiveSecurityHealthAnalyticsCustomModuleName.ProjectEffectiveCustomModuleBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.EffectiveSecurityHealthAnalyticsCustomModuleName.ProjectEffectiveCustomModuleBuilder)

Builder for projects/{project}/securityHealthAnalyticsSettings/effectiveCustomModules/{effective\_custom\_module}.

[com.google.cloud.securitycenter.v1.EffectiveSecurityHealthAnalyticsCustomModuleProto](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.EffectiveSecurityHealthAnalyticsCustomModuleProto)

[com.google.cloud.securitycenter.v1.EnvironmentVariable](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.EnvironmentVariable)

A name-value pair representing an environment variable used in an operating system process.

[com.google.cloud.securitycenter.v1.EnvironmentVariable.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.EnvironmentVariable.Builder)

A name-value pair representing an environment variable used in an operating system process.

[com.google.cloud.securitycenter.v1.EventThreatDetectionCustomModule](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.EventThreatDetectionCustomModule)

Represents an instance of an Event Threat Detection custom module, including its full module name, display name, enablement state, and last updated time. You can create a custom module at the organization, folder, or

[com.google.cloud.securitycenter.v1.EventThreatDetectionCustomModule.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.EventThreatDetectionCustomModule.Builder)

Represents an instance of an Event Threat Detection custom module, including its full module name, display name, enablement state, and last updated time. You can create a custom module at the organization, folder, or

[com.google.cloud.securitycenter.v1.EventThreatDetectionCustomModuleName](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.EventThreatDetectionCustomModuleName)

[com.google.cloud.securitycenter.v1.EventThreatDetectionCustomModuleName.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.EventThreatDetectionCustomModuleName.Builder)

Builder for organizations/{organization}/eventThreatDetectionSettings/customModules/{module}.

[com.google.cloud.securitycenter.v1.EventThreatDetectionCustomModuleName.FolderModuleBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.EventThreatDetectionCustomModuleName.FolderModuleBuilder)

Builder for folders/{folder}/eventThreatDetectionSettings/customModules/{module}.

[com.google.cloud.securitycenter.v1.EventThreatDetectionCustomModuleName.ProjectModuleBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.EventThreatDetectionCustomModuleName.ProjectModuleBuilder)

Builder for projects/{project}/eventThreatDetectionSettings/customModules/{module}.

[com.google.cloud.securitycenter.v1.EventThreatDetectionCustomModuleProto](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.EventThreatDetectionCustomModuleProto)

[com.google.cloud.securitycenter.v1.EventThreatDetectionCustomModuleValidationErrorsProto](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.EventThreatDetectionCustomModuleValidationErrorsProto)

[com.google.cloud.securitycenter.v1.EventThreatDetectionSettingsName](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.EventThreatDetectionSettingsName)

[com.google.cloud.securitycenter.v1.EventThreatDetectionSettingsName.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.EventThreatDetectionSettingsName.Builder)

Builder for organizations/{organization}/eventThreatDetectionSettings.

[com.google.cloud.securitycenter.v1.EventThreatDetectionSettingsName.FolderBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.EventThreatDetectionSettingsName.FolderBuilder)

Builder for folders/{folder}/eventThreatDetectionSettings.

[com.google.cloud.securitycenter.v1.EventThreatDetectionSettingsName.ProjectBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.EventThreatDetectionSettingsName.ProjectBuilder)

Builder for projects/{project}/eventThreatDetectionSettings.

[com.google.cloud.securitycenter.v1.ExfilResource](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ExfilResource)

Resource where data was exfiltrated from or exfiltrated to.

[com.google.cloud.securitycenter.v1.ExfilResource.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ExfilResource.Builder)

Resource where data was exfiltrated from or exfiltrated to.

[com.google.cloud.securitycenter.v1.Exfiltration](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Exfiltration)

Exfiltration represents a data exfiltration attempt from one or more sources to one or more targets. The `sources` attribute lists the sources of the exfiltrated data. The `targets` attribute lists the destinations the data was

[com.google.cloud.securitycenter.v1.Exfiltration.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Exfiltration.Builder)

Exfiltration represents a data exfiltration attempt from one or more sources to one or more targets. The `sources` attribute lists the sources of the exfiltrated data. The `targets` attribute lists the destinations the data was

[com.google.cloud.securitycenter.v1.ExfiltrationProto](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ExfiltrationProto)

[com.google.cloud.securitycenter.v1.ExternalSystem](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ExternalSystem)

Representation of third party SIEM/SOAR fields within SCC.

[com.google.cloud.securitycenter.v1.ExternalSystem.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ExternalSystem.Builder)

Representation of third party SIEM/SOAR fields within SCC.

[com.google.cloud.securitycenter.v1.ExternalSystem.TicketInfo](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ExternalSystem.TicketInfo)

Information about the ticket, if any, that is being used to track the resolution of the issue that is identified by this finding.

[com.google.cloud.securitycenter.v1.ExternalSystem.TicketInfo.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ExternalSystem.TicketInfo.Builder)

Information about the ticket, if any, that is being used to track the resolution of the issue that is identified by this finding.

[com.google.cloud.securitycenter.v1.ExternalSystemProto](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ExternalSystemProto)

[com.google.cloud.securitycenter.v1.File](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.File)

File information about the related binary/library used by an executable, or the script used by a script interpreter

[com.google.cloud.securitycenter.v1.File.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.File.Builder)

File information about the related binary/library used by an executable, or the script used by a script interpreter

[com.google.cloud.securitycenter.v1.File.DiskPath](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.File.DiskPath)

Path of the file in terms of underlying disk/partition identifiers.

[com.google.cloud.securitycenter.v1.File.DiskPath.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.File.DiskPath.Builder)

Path of the file in terms of underlying disk/partition identifiers.

[com.google.cloud.securitycenter.v1.FileProto](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.FileProto)

[com.google.cloud.securitycenter.v1.Finding](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Finding)

Security Command Center finding. A finding is a record of assessment data like security, risk, health, or

[com.google.cloud.securitycenter.v1.Finding.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Finding.Builder)

Security Command Center finding. A finding is a record of assessment data like security, risk, health, or

[com.google.cloud.securitycenter.v1.Finding.MuteInfo](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Finding.MuteInfo)

Mute information about the finding, including whether the finding has a static mute or any matching dynamic mute rules.

[com.google.cloud.securitycenter.v1.Finding.MuteInfo.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Finding.MuteInfo.Builder)

Mute information about the finding, including whether the finding has a static mute or any matching dynamic mute rules.

[com.google.cloud.securitycenter.v1.Finding.MuteInfo.DynamicMuteRecord](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Finding.MuteInfo.DynamicMuteRecord)

The record of a dynamic mute rule that matches the finding.

[com.google.cloud.securitycenter.v1.Finding.MuteInfo.DynamicMuteRecord.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Finding.MuteInfo.DynamicMuteRecord.Builder)

The record of a dynamic mute rule that matches the finding.

[com.google.cloud.securitycenter.v1.Finding.MuteInfo.StaticMute](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Finding.MuteInfo.StaticMute)

Information about the static mute state. A static mute state overrides any dynamic mute rules that apply to this finding. The static mute state can be set by a static mute rule or by muting the finding directly.

[com.google.cloud.securitycenter.v1.Finding.MuteInfo.StaticMute.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Finding.MuteInfo.StaticMute.Builder)

Information about the static mute state. A static mute state overrides any dynamic mute rules that apply to this finding. The static mute state can be set by a static mute rule or by muting the finding directly.

[com.google.cloud.securitycenter.v1.FindingName](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.FindingName)

[com.google.cloud.securitycenter.v1.FindingName.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.FindingName.Builder)

Builder for organizations/{organization}/sources/{source}/findings/{finding}.

[com.google.cloud.securitycenter.v1.FindingName.FolderSourceFindingBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.FindingName.FolderSourceFindingBuilder)

Builder for folders/{folder}/sources/{source}/findings/{finding}.

[com.google.cloud.securitycenter.v1.FindingName.ProjectSourceFindingBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.FindingName.ProjectSourceFindingBuilder)

Builder for projects/{project}/sources/{source}/findings/{finding}.

[com.google.cloud.securitycenter.v1.FindingOuterClass](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.FindingOuterClass)

[com.google.cloud.securitycenter.v1.Folder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Folder)

Message that contains the resource name and display name of a folder resource.

[com.google.cloud.securitycenter.v1.Folder.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Folder.Builder)

Message that contains the resource name and display name of a folder resource.

[com.google.cloud.securitycenter.v1.FolderLocationName](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.FolderLocationName)

[com.google.cloud.securitycenter.v1.FolderLocationName.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.FolderLocationName.Builder)

Builder for folders/{folder}/locations/{location}.

[com.google.cloud.securitycenter.v1.FolderName](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.FolderName)

[com.google.cloud.securitycenter.v1.FolderName.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.FolderName.Builder)

Builder for folders/{folder}.

[com.google.cloud.securitycenter.v1.FolderProto](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.FolderProto)

[com.google.cloud.securitycenter.v1.Geolocation](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Geolocation)

Represents a geographical location for a given access.

[com.google.cloud.securitycenter.v1.Geolocation.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Geolocation.Builder)

Represents a geographical location for a given access.

[com.google.cloud.securitycenter.v1.GetBigQueryExportRequest](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.GetBigQueryExportRequest)

Request message for retrieving a BigQuery export.

[com.google.cloud.securitycenter.v1.GetBigQueryExportRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.GetBigQueryExportRequest.Builder)

Request message for retrieving a BigQuery export.

[com.google.cloud.securitycenter.v1.GetEffectiveEventThreatDetectionCustomModuleRequest](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.GetEffectiveEventThreatDetectionCustomModuleRequest)

Request to get an EffectiveEventThreatDetectionCustomModule.

[com.google.cloud.securitycenter.v1.GetEffectiveEventThreatDetectionCustomModuleRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.GetEffectiveEventThreatDetectionCustomModuleRequest.Builder)

Request to get an EffectiveEventThreatDetectionCustomModule.

[com.google.cloud.securitycenter.v1.GetEffectiveSecurityHealthAnalyticsCustomModuleRequest](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.GetEffectiveSecurityHealthAnalyticsCustomModuleRequest)

Request message for getting effective Security Health Analytics custom modules.

[com.google.cloud.securitycenter.v1.GetEffectiveSecurityHealthAnalyticsCustomModuleRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.GetEffectiveSecurityHealthAnalyticsCustomModuleRequest.Builder)

Request message for getting effective Security Health Analytics custom modules.

[com.google.cloud.securitycenter.v1.GetEventThreatDetectionCustomModuleRequest](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.GetEventThreatDetectionCustomModuleRequest)

Request to get an Event Threat Detection custom module.

[com.google.cloud.securitycenter.v1.GetEventThreatDetectionCustomModuleRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.GetEventThreatDetectionCustomModuleRequest.Builder)

Request to get an Event Threat Detection custom module.

[com.google.cloud.securitycenter.v1.GetMuteConfigRequest](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.GetMuteConfigRequest)

Request message for retrieving a mute config.

[com.google.cloud.securitycenter.v1.GetMuteConfigRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.GetMuteConfigRequest.Builder)

Request message for retrieving a mute config.

[com.google.cloud.securitycenter.v1.GetNotificationConfigRequest](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.GetNotificationConfigRequest)

Request message for getting a notification config.

[com.google.cloud.securitycenter.v1.GetNotificationConfigRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.GetNotificationConfigRequest.Builder)

Request message for getting a notification config.

[com.google.cloud.securitycenter.v1.GetOrganizationSettingsRequest](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.GetOrganizationSettingsRequest)

Request message for getting organization settings.

[com.google.cloud.securitycenter.v1.GetOrganizationSettingsRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.GetOrganizationSettingsRequest.Builder)

Request message for getting organization settings.

[com.google.cloud.securitycenter.v1.GetResourceValueConfigRequest](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.GetResourceValueConfigRequest)

Request message to get resource value config

[com.google.cloud.securitycenter.v1.GetResourceValueConfigRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.GetResourceValueConfigRequest.Builder)

Request message to get resource value config

[com.google.cloud.securitycenter.v1.GetSecurityHealthAnalyticsCustomModuleRequest](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.GetSecurityHealthAnalyticsCustomModuleRequest)

Request message for getting Security Health Analytics custom modules.

[com.google.cloud.securitycenter.v1.GetSecurityHealthAnalyticsCustomModuleRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.GetSecurityHealthAnalyticsCustomModuleRequest.Builder)

Request message for getting Security Health Analytics custom modules.

[com.google.cloud.securitycenter.v1.GetSimulationRequest](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.GetSimulationRequest)

Request message for getting simulation. Simulation name can include "latest" to retrieve the latest simulation For example, "organizations/123/simulations/latest"

[com.google.cloud.securitycenter.v1.GetSimulationRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.GetSimulationRequest.Builder)

Request message for getting simulation. Simulation name can include "latest" to retrieve the latest simulation For example, "organizations/123/simulations/latest"

[com.google.cloud.securitycenter.v1.GetSourceRequest](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.GetSourceRequest)

Request message for getting a source.

[com.google.cloud.securitycenter.v1.GetSourceRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.GetSourceRequest.Builder)

Request message for getting a source.

[com.google.cloud.securitycenter.v1.GetValuedResourceRequest](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.GetValuedResourceRequest)

Request message for getting a valued resource.

[com.google.cloud.securitycenter.v1.GetValuedResourceRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.GetValuedResourceRequest.Builder)

Request message for getting a valued resource.

[com.google.cloud.securitycenter.v1.GroupAssetsRequest](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.GroupAssetsRequest)

Request message for grouping by assets.

[com.google.cloud.securitycenter.v1.GroupAssetsRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.GroupAssetsRequest.Builder)

Request message for grouping by assets.

[com.google.cloud.securitycenter.v1.GroupAssetsResponse](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.GroupAssetsResponse)

Response message for grouping by assets.

[com.google.cloud.securitycenter.v1.GroupAssetsResponse.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.GroupAssetsResponse.Builder)

Response message for grouping by assets.

[com.google.cloud.securitycenter.v1.GroupFindingsRequest](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.GroupFindingsRequest)

Request message for grouping by findings.

[com.google.cloud.securitycenter.v1.GroupFindingsRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.GroupFindingsRequest.Builder)

Request message for grouping by findings.

[com.google.cloud.securitycenter.v1.GroupFindingsResponse](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.GroupFindingsResponse)

Response message for group by findings.

[com.google.cloud.securitycenter.v1.GroupFindingsResponse.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.GroupFindingsResponse.Builder)

Response message for group by findings.

[com.google.cloud.securitycenter.v1.GroupMembership](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.GroupMembership)

Contains details about groups of which this finding is a member. A group is a collection of findings that are related in some way.

[com.google.cloud.securitycenter.v1.GroupMembership.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.GroupMembership.Builder)

Contains details about groups of which this finding is a member. A group is a collection of findings that are related in some way.

[com.google.cloud.securitycenter.v1.GroupMembershipProto](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.GroupMembershipProto)

[com.google.cloud.securitycenter.v1.GroupResult](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.GroupResult)

Result containing the properties and count of a groupBy request.

[com.google.cloud.securitycenter.v1.GroupResult.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.GroupResult.Builder)

Result containing the properties and count of a groupBy request.

[com.google.cloud.securitycenter.v1.IamBinding](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.IamBinding)

Represents a particular IAM binding, which captures a member's role addition, removal, or state.

[com.google.cloud.securitycenter.v1.IamBinding.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.IamBinding.Builder)

Represents a particular IAM binding, which captures a member's role addition, removal, or state.

[com.google.cloud.securitycenter.v1.IamBindingProto](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.IamBindingProto)

[com.google.cloud.securitycenter.v1.Indicator](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Indicator)

Represents what's commonly known as an _indicator of compromise_ (IoC) in computer forensics. This is an artifact observed on a network or in an operating system that, with high confidence, indicates a computer intrusion.

[com.google.cloud.securitycenter.v1.Indicator.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Indicator.Builder)

Represents what's commonly known as an _indicator of compromise_ (IoC) in computer forensics. This is an artifact observed on a network or in an operating system that, with high confidence, indicates a computer intrusion.

[com.google.cloud.securitycenter.v1.Indicator.ProcessSignature](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Indicator.ProcessSignature)

Indicates what signature matched this process.

[com.google.cloud.securitycenter.v1.Indicator.ProcessSignature.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Indicator.ProcessSignature.Builder)

Indicates what signature matched this process.

[com.google.cloud.securitycenter.v1.Indicator.ProcessSignature.MemoryHashSignature](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Indicator.ProcessSignature.MemoryHashSignature)

A signature corresponding to memory page hashes.

[com.google.cloud.securitycenter.v1.Indicator.ProcessSignature.MemoryHashSignature.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Indicator.ProcessSignature.MemoryHashSignature.Builder)

A signature corresponding to memory page hashes.

[com.google.cloud.securitycenter.v1.Indicator.ProcessSignature.MemoryHashSignature.Detection](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Indicator.ProcessSignature.MemoryHashSignature.Detection)

Memory hash detection contributing to the binary family match.

[com.google.cloud.securitycenter.v1.Indicator.ProcessSignature.MemoryHashSignature.Detection.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Indicator.ProcessSignature.MemoryHashSignature.Detection.Builder)

Memory hash detection contributing to the binary family match.

[com.google.cloud.securitycenter.v1.Indicator.ProcessSignature.YaraRuleSignature](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Indicator.ProcessSignature.YaraRuleSignature)

A signature corresponding to a YARA rule.

[com.google.cloud.securitycenter.v1.Indicator.ProcessSignature.YaraRuleSignature.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Indicator.ProcessSignature.YaraRuleSignature.Builder)

A signature corresponding to a YARA rule.

[com.google.cloud.securitycenter.v1.IndicatorProto](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.IndicatorProto)

[com.google.cloud.securitycenter.v1.KernelRootkit](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.KernelRootkit)

Kernel mode rootkit signatures.

[com.google.cloud.securitycenter.v1.KernelRootkit.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.KernelRootkit.Builder)

Kernel mode rootkit signatures.

[com.google.cloud.securitycenter.v1.KernelRootkitProto](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.KernelRootkitProto)

[com.google.cloud.securitycenter.v1.Kubernetes](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Kubernetes)

Kubernetes-related attributes.

[com.google.cloud.securitycenter.v1.Kubernetes.AccessReview](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Kubernetes.AccessReview)

Conveys information about a Kubernetes access review (such as one returned by a [`kubectl auth can-i`](https://kubernetes.io/docs/reference/access-authn-authz/authorization/#checking-api-access)

[com.google.cloud.securitycenter.v1.Kubernetes.AccessReview.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Kubernetes.AccessReview.Builder)

Conveys information about a Kubernetes access review (such as one returned by a [`kubectl auth can-i`](https://kubernetes.io/docs/reference/access-authn-authz/authorization/#checking-api-access)

[com.google.cloud.securitycenter.v1.Kubernetes.Binding](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Kubernetes.Binding)

Represents a Kubernetes RoleBinding or ClusterRoleBinding.

[com.google.cloud.securitycenter.v1.Kubernetes.Binding.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Kubernetes.Binding.Builder)

Represents a Kubernetes RoleBinding or ClusterRoleBinding.

[com.google.cloud.securitycenter.v1.Kubernetes.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Kubernetes.Builder)

Kubernetes-related attributes.

[com.google.cloud.securitycenter.v1.Kubernetes.Node](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Kubernetes.Node)

Kubernetes nodes associated with the finding.

[com.google.cloud.securitycenter.v1.Kubernetes.Node.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Kubernetes.Node.Builder)

Kubernetes nodes associated with the finding.

[com.google.cloud.securitycenter.v1.Kubernetes.NodePool](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Kubernetes.NodePool)

Provides GKE node pool information.

[com.google.cloud.securitycenter.v1.Kubernetes.NodePool.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Kubernetes.NodePool.Builder)

Provides GKE node pool information.

[com.google.cloud.securitycenter.v1.Kubernetes.Object](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Kubernetes.Object)

Kubernetes object related to the finding, uniquely identified by GKNN. Used if the object Kind is not one of Pod, Node, NodePool, Binding, or AccessReview.

[com.google.cloud.securitycenter.v1.Kubernetes.Object.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Kubernetes.Object.Builder)

Kubernetes object related to the finding, uniquely identified by GKNN. Used if the object Kind is not one of Pod, Node, NodePool, Binding, or AccessReview.

[com.google.cloud.securitycenter.v1.Kubernetes.Pod](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Kubernetes.Pod)

A Kubernetes Pod.

[com.google.cloud.securitycenter.v1.Kubernetes.Pod.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Kubernetes.Pod.Builder)

A Kubernetes Pod.

[com.google.cloud.securitycenter.v1.Kubernetes.Role](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Kubernetes.Role)

Kubernetes Role or ClusterRole.

[com.google.cloud.securitycenter.v1.Kubernetes.Role.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Kubernetes.Role.Builder)

Kubernetes Role or ClusterRole.

[com.google.cloud.securitycenter.v1.Kubernetes.Subject](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Kubernetes.Subject)

Represents a Kubernetes subject.

[com.google.cloud.securitycenter.v1.Kubernetes.Subject.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Kubernetes.Subject.Builder)

Represents a Kubernetes subject.

[com.google.cloud.securitycenter.v1.KubernetesProto](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.KubernetesProto)

[com.google.cloud.securitycenter.v1.Label](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Label)

Represents a generic name-value label. A label has separate name and value fields to support filtering with the `contains()` function. For more information, see [Filtering on array-type](https://cloud.google.com/security-command-center/docs/how-to-api-list-findings#array-contains-filtering)

[com.google.cloud.securitycenter.v1.Label.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Label.Builder)

Represents a generic name-value label. A label has separate name and value fields to support filtering with the `contains()` function. For more information, see [Filtering on array-type](https://cloud.google.com/security-command-center/docs/how-to-api-list-findings#array-contains-filtering)

[com.google.cloud.securitycenter.v1.LabelProto](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.LabelProto)

[com.google.cloud.securitycenter.v1.ListAssetsRequest](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ListAssetsRequest)

Request message for listing assets.

[com.google.cloud.securitycenter.v1.ListAssetsRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ListAssetsRequest.Builder)

Request message for listing assets.

[com.google.cloud.securitycenter.v1.ListAssetsResponse](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ListAssetsResponse)

Response message for listing assets.

[com.google.cloud.securitycenter.v1.ListAssetsResponse.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ListAssetsResponse.Builder)

Response message for listing assets.

[com.google.cloud.securitycenter.v1.ListAssetsResponse.ListAssetsResult](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ListAssetsResponse.ListAssetsResult)

Result containing the Asset and its State.

[com.google.cloud.securitycenter.v1.ListAssetsResponse.ListAssetsResult.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ListAssetsResponse.ListAssetsResult.Builder)

Result containing the Asset and its State.

[com.google.cloud.securitycenter.v1.ListAttackPathsRequest](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ListAttackPathsRequest)

Request message for listing the attack paths for a given simulation or valued resource.

[com.google.cloud.securitycenter.v1.ListAttackPathsRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ListAttackPathsRequest.Builder)

Request message for listing the attack paths for a given simulation or valued resource.

[com.google.cloud.securitycenter.v1.ListAttackPathsResponse](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ListAttackPathsResponse)

Response message for listing the attack paths for a given simulation or valued resource.

[com.google.cloud.securitycenter.v1.ListAttackPathsResponse.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ListAttackPathsResponse.Builder)

Response message for listing the attack paths for a given simulation or valued resource.

[com.google.cloud.securitycenter.v1.ListBigQueryExportsRequest](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ListBigQueryExportsRequest)

Request message for listing BigQuery exports at a given scope e.g. organization, folder or project.

[com.google.cloud.securitycenter.v1.ListBigQueryExportsRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ListBigQueryExportsRequest.Builder)

Request message for listing BigQuery exports at a given scope e.g. organization, folder or project.

[com.google.cloud.securitycenter.v1.ListBigQueryExportsResponse](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ListBigQueryExportsResponse)

Response message for listing BigQuery exports.

[com.google.cloud.securitycenter.v1.ListBigQueryExportsResponse.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ListBigQueryExportsResponse.Builder)

Response message for listing BigQuery exports.

[com.google.cloud.securitycenter.v1.ListDescendantEventThreatDetectionCustomModulesRequest](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ListDescendantEventThreatDetectionCustomModulesRequest)

Request to list current and descendant resident Event Threat Detection custom modules.

[com.google.cloud.securitycenter.v1.ListDescendantEventThreatDetectionCustomModulesRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ListDescendantEventThreatDetectionCustomModulesRequest.Builder)

Request to list current and descendant resident Event Threat Detection custom modules.

[com.google.cloud.securitycenter.v1.ListDescendantEventThreatDetectionCustomModulesResponse](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ListDescendantEventThreatDetectionCustomModulesResponse)

Response for listing current and descendant resident Event Threat Detection custom modules.

[com.google.cloud.securitycenter.v1.ListDescendantEventThreatDetectionCustomModulesResponse.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ListDescendantEventThreatDetectionCustomModulesResponse.Builder)

Response for listing current and descendant resident Event Threat Detection custom modules.

[com.google.cloud.securitycenter.v1.ListDescendantSecurityHealthAnalyticsCustomModulesRequest](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ListDescendantSecurityHealthAnalyticsCustomModulesRequest)

Request message for listing descendant Security Health Analytics custom modules.

[com.google.cloud.securitycenter.v1.ListDescendantSecurityHealthAnalyticsCustomModulesRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ListDescendantSecurityHealthAnalyticsCustomModulesRequest.Builder)

Request message for listing descendant Security Health Analytics custom modules.

[com.google.cloud.securitycenter.v1.ListDescendantSecurityHealthAnalyticsCustomModulesResponse](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ListDescendantSecurityHealthAnalyticsCustomModulesResponse)

Response message for listing descendant Security Health Analytics custom modules.

[com.google.cloud.securitycenter.v1.ListDescendantSecurityHealthAnalyticsCustomModulesResponse.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ListDescendantSecurityHealthAnalyticsCustomModulesResponse.Builder)

Response message for listing descendant Security Health Analytics custom modules.

[com.google.cloud.securitycenter.v1.ListEffectiveEventThreatDetectionCustomModulesRequest](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ListEffectiveEventThreatDetectionCustomModulesRequest)

Request to list effective Event Threat Detection custom modules.

[com.google.cloud.securitycenter.v1.ListEffectiveEventThreatDetectionCustomModulesRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ListEffectiveEventThreatDetectionCustomModulesRequest.Builder)

Request to list effective Event Threat Detection custom modules.

[com.google.cloud.securitycenter.v1.ListEffectiveEventThreatDetectionCustomModulesResponse](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ListEffectiveEventThreatDetectionCustomModulesResponse)

Response for listing EffectiveEventThreatDetectionCustomModules.

[com.google.cloud.securitycenter.v1.ListEffectiveEventThreatDetectionCustomModulesResponse.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ListEffectiveEventThreatDetectionCustomModulesResponse.Builder)

Response for listing EffectiveEventThreatDetectionCustomModules.

[com.google.cloud.securitycenter.v1.ListEffectiveSecurityHealthAnalyticsCustomModulesRequest](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ListEffectiveSecurityHealthAnalyticsCustomModulesRequest)

Request message for listing effective Security Health Analytics custom modules.

[com.google.cloud.securitycenter.v1.ListEffectiveSecurityHealthAnalyticsCustomModulesRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ListEffectiveSecurityHealthAnalyticsCustomModulesRequest.Builder)

Request message for listing effective Security Health Analytics custom modules.

[com.google.cloud.securitycenter.v1.ListEffectiveSecurityHealthAnalyticsCustomModulesResponse](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ListEffectiveSecurityHealthAnalyticsCustomModulesResponse)

Response message for listing effective Security Health Analytics custom modules.

[com.google.cloud.securitycenter.v1.ListEffectiveSecurityHealthAnalyticsCustomModulesResponse.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ListEffectiveSecurityHealthAnalyticsCustomModulesResponse.Builder)

Response message for listing effective Security Health Analytics custom modules.

[com.google.cloud.securitycenter.v1.ListEventThreatDetectionCustomModulesRequest](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ListEventThreatDetectionCustomModulesRequest)

Request to list Event Threat Detection custom modules.

[com.google.cloud.securitycenter.v1.ListEventThreatDetectionCustomModulesRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ListEventThreatDetectionCustomModulesRequest.Builder)

Request to list Event Threat Detection custom modules.

[com.google.cloud.securitycenter.v1.ListEventThreatDetectionCustomModulesResponse](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ListEventThreatDetectionCustomModulesResponse)

Response for listing Event Threat Detection custom modules.

[com.google.cloud.securitycenter.v1.ListEventThreatDetectionCustomModulesResponse.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ListEventThreatDetectionCustomModulesResponse.Builder)

Response for listing Event Threat Detection custom modules.

[com.google.cloud.securitycenter.v1.ListFindingsRequest](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ListFindingsRequest)

Request message for listing findings.

[com.google.cloud.securitycenter.v1.ListFindingsRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ListFindingsRequest.Builder)

Request message for listing findings.

[com.google.cloud.securitycenter.v1.ListFindingsResponse](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ListFindingsResponse)

Response message for listing findings.

[com.google.cloud.securitycenter.v1.ListFindingsResponse.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ListFindingsResponse.Builder)

Response message for listing findings.

[com.google.cloud.securitycenter.v1.ListFindingsResponse.ListFindingsResult](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ListFindingsResponse.ListFindingsResult)

Result containing the Finding and its StateChange.

[com.google.cloud.securitycenter.v1.ListFindingsResponse.ListFindingsResult.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ListFindingsResponse.ListFindingsResult.Builder)

Result containing the Finding and its StateChange.

[com.google.cloud.securitycenter.v1.ListFindingsResponse.ListFindingsResult.Resource](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ListFindingsResponse.ListFindingsResult.Resource)

Information related to the Google Cloud resource that is associated with this finding.

[com.google.cloud.securitycenter.v1.ListFindingsResponse.ListFindingsResult.Resource.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ListFindingsResponse.ListFindingsResult.Resource.Builder)

Information related to the Google Cloud resource that is associated with this finding.

[com.google.cloud.securitycenter.v1.ListMuteConfigsRequest](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ListMuteConfigsRequest)

Request message for listing mute configs at a given scope e.g. organization, folder or project.

[com.google.cloud.securitycenter.v1.ListMuteConfigsRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ListMuteConfigsRequest.Builder)

Request message for listing mute configs at a given scope e.g. organization, folder or project.

[com.google.cloud.securitycenter.v1.ListMuteConfigsResponse](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ListMuteConfigsResponse)

Response message for listing mute configs.

[com.google.cloud.securitycenter.v1.ListMuteConfigsResponse.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ListMuteConfigsResponse.Builder)

Response message for listing mute configs.

[com.google.cloud.securitycenter.v1.ListNotificationConfigsRequest](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ListNotificationConfigsRequest)

Request message for listing notification configs.

[com.google.cloud.securitycenter.v1.ListNotificationConfigsRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ListNotificationConfigsRequest.Builder)

Request message for listing notification configs.

[com.google.cloud.securitycenter.v1.ListNotificationConfigsResponse](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ListNotificationConfigsResponse)

Response message for listing notification configs.

[com.google.cloud.securitycenter.v1.ListNotificationConfigsResponse.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ListNotificationConfigsResponse.Builder)

Response message for listing notification configs.

[com.google.cloud.securitycenter.v1.ListResourceValueConfigsRequest](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ListResourceValueConfigsRequest)

Request message to list resource value configs of a parent

[com.google.cloud.securitycenter.v1.ListResourceValueConfigsRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ListResourceValueConfigsRequest.Builder)

Request message to list resource value configs of a parent

[com.google.cloud.securitycenter.v1.ListResourceValueConfigsResponse](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ListResourceValueConfigsResponse)

Response message to list resource value configs

[com.google.cloud.securitycenter.v1.ListResourceValueConfigsResponse.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ListResourceValueConfigsResponse.Builder)

Response message to list resource value configs

[com.google.cloud.securitycenter.v1.ListSecurityHealthAnalyticsCustomModulesRequest](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ListSecurityHealthAnalyticsCustomModulesRequest)

Request message for listing Security Health Analytics custom modules.

[com.google.cloud.securitycenter.v1.ListSecurityHealthAnalyticsCustomModulesRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ListSecurityHealthAnalyticsCustomModulesRequest.Builder)

Request message for listing Security Health Analytics custom modules.

[com.google.cloud.securitycenter.v1.ListSecurityHealthAnalyticsCustomModulesResponse](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ListSecurityHealthAnalyticsCustomModulesResponse)

Response message for listing Security Health Analytics custom modules.

[com.google.cloud.securitycenter.v1.ListSecurityHealthAnalyticsCustomModulesResponse.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ListSecurityHealthAnalyticsCustomModulesResponse.Builder)

Response message for listing Security Health Analytics custom modules.

[com.google.cloud.securitycenter.v1.ListSourcesRequest](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ListSourcesRequest)

Request message for listing sources.

[com.google.cloud.securitycenter.v1.ListSourcesRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ListSourcesRequest.Builder)

Request message for listing sources.

[com.google.cloud.securitycenter.v1.ListSourcesResponse](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ListSourcesResponse)

Response message for listing sources.

[com.google.cloud.securitycenter.v1.ListSourcesResponse.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ListSourcesResponse.Builder)

Response message for listing sources.

[com.google.cloud.securitycenter.v1.ListValuedResourcesRequest](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ListValuedResourcesRequest)

Request message for listing the valued resources for a given simulation.

[com.google.cloud.securitycenter.v1.ListValuedResourcesRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ListValuedResourcesRequest.Builder)

Request message for listing the valued resources for a given simulation.

[com.google.cloud.securitycenter.v1.ListValuedResourcesResponse](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ListValuedResourcesResponse)

Response message for listing the valued resources for a given simulation.

[com.google.cloud.securitycenter.v1.ListValuedResourcesResponse.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ListValuedResourcesResponse.Builder)

Response message for listing the valued resources for a given simulation.

[com.google.cloud.securitycenter.v1.LoadBalancer](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.LoadBalancer)

Contains information related to the load balancer associated with the finding.

[com.google.cloud.securitycenter.v1.LoadBalancer.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.LoadBalancer.Builder)

Contains information related to the load balancer associated with the finding.

[com.google.cloud.securitycenter.v1.LoadBalancerProto](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.LoadBalancerProto)

[com.google.cloud.securitycenter.v1.LocationName](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.LocationName)

[com.google.cloud.securitycenter.v1.LocationName.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.LocationName.Builder)

Builder for projects/{project}/locations/{location}.

[com.google.cloud.securitycenter.v1.LogEntry](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.LogEntry)

An individual entry in a log.

[com.google.cloud.securitycenter.v1.LogEntry.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.LogEntry.Builder)

An individual entry in a log.

[com.google.cloud.securitycenter.v1.LogEntryProto](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.LogEntryProto)

[com.google.cloud.securitycenter.v1.MitreAttack](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.MitreAttack)

MITRE ATT&CK tactics and techniques related to this finding. See: [https://attack.mitre.org](https://attack.mitre.org)

[com.google.cloud.securitycenter.v1.MitreAttack.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.MitreAttack.Builder)

MITRE ATT&CK tactics and techniques related to this finding. See: [https://attack.mitre.org](https://attack.mitre.org)

[com.google.cloud.securitycenter.v1.MitreAttackProto](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.MitreAttackProto)

[com.google.cloud.securitycenter.v1.MuteConfig](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.MuteConfig)

A mute config is a Cloud SCC resource that contains the configuration to mute create/update events of findings.

[com.google.cloud.securitycenter.v1.MuteConfig.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.MuteConfig.Builder)

A mute config is a Cloud SCC resource that contains the configuration to mute create/update events of findings.

[com.google.cloud.securitycenter.v1.MuteConfigName](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.MuteConfigName)

[com.google.cloud.securitycenter.v1.MuteConfigName.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.MuteConfigName.Builder)

Builder for organizations/{organization}/muteConfigs/{mute\_config}.

[com.google.cloud.securitycenter.v1.MuteConfigName.FolderLocationMuteConfigBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.MuteConfigName.FolderLocationMuteConfigBuilder)

Builder for folders/{folder}/locations/{location}/muteConfigs/{mute\_config}.

[com.google.cloud.securitycenter.v1.MuteConfigName.FolderMuteConfigBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.MuteConfigName.FolderMuteConfigBuilder)

Builder for folders/{folder}/muteConfigs/{mute\_config}.

[com.google.cloud.securitycenter.v1.MuteConfigName.OrganizationLocationMuteConfigBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.MuteConfigName.OrganizationLocationMuteConfigBuilder)

Builder for organizations/{organization}/locations/{location}/muteConfigs/{mute\_config}.

[com.google.cloud.securitycenter.v1.MuteConfigName.ProjectLocationMuteConfigBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.MuteConfigName.ProjectLocationMuteConfigBuilder)

Builder for projects/{project}/locations/{location}/muteConfigs/{mute\_config}.

[com.google.cloud.securitycenter.v1.MuteConfigName.ProjectMuteConfigBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.MuteConfigName.ProjectMuteConfigBuilder)

Builder for projects/{project}/muteConfigs/{mute\_config}.

[com.google.cloud.securitycenter.v1.MuteConfigProto](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.MuteConfigProto)

[com.google.cloud.securitycenter.v1.Notebook](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Notebook)

Represents a Jupyter notebook IPYNB file, such as a [Colab Enterprise notebook](https://cloud.google.com/colab/docs/introduction) file, that is associated with a finding.

[com.google.cloud.securitycenter.v1.Notebook.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Notebook.Builder)

Represents a Jupyter notebook IPYNB file, such as a [Colab Enterprise notebook](https://cloud.google.com/colab/docs/introduction) file, that is associated with a finding.

[com.google.cloud.securitycenter.v1.NotebookProto](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.NotebookProto)

[com.google.cloud.securitycenter.v1.NotificationConfig](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.NotificationConfig)

Cloud Security Command Center (Cloud SCC) notification configs. A notification config is a Cloud SCC resource that contains the configuration

[com.google.cloud.securitycenter.v1.NotificationConfig.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.NotificationConfig.Builder)

Cloud Security Command Center (Cloud SCC) notification configs. A notification config is a Cloud SCC resource that contains the configuration

[com.google.cloud.securitycenter.v1.NotificationConfig.StreamingConfig](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.NotificationConfig.StreamingConfig)

The config for streaming-based notifications, which send each event as soon as it is detected.

[com.google.cloud.securitycenter.v1.NotificationConfig.StreamingConfig.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.NotificationConfig.StreamingConfig.Builder)

The config for streaming-based notifications, which send each event as soon as it is detected.

[com.google.cloud.securitycenter.v1.NotificationConfigName](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.NotificationConfigName)

[com.google.cloud.securitycenter.v1.NotificationConfigName.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.NotificationConfigName.Builder)

Builder for organizations/{organization}/notificationConfigs/{notification\_config}.

[com.google.cloud.securitycenter.v1.NotificationConfigName.FolderNotificationConfigBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.NotificationConfigName.FolderNotificationConfigBuilder)

Builder for folders/{folder}/notificationConfigs/{notification\_config}.

[com.google.cloud.securitycenter.v1.NotificationConfigName.ProjectNotificationConfigBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.NotificationConfigName.ProjectNotificationConfigBuilder)

Builder for projects/{project}/notificationConfigs/{notification\_config}.

[com.google.cloud.securitycenter.v1.NotificationConfigProto](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.NotificationConfigProto)

[com.google.cloud.securitycenter.v1.NotificationMessage](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.NotificationMessage)

Cloud SCC's Notification

[com.google.cloud.securitycenter.v1.NotificationMessage.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.NotificationMessage.Builder)

Cloud SCC's Notification

[com.google.cloud.securitycenter.v1.NotificationMessageProto](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.NotificationMessageProto)

[com.google.cloud.securitycenter.v1.OrgPolicy](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.OrgPolicy)

Contains information about the org policies associated with the finding.

[com.google.cloud.securitycenter.v1.OrgPolicy.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.OrgPolicy.Builder)

Contains information about the org policies associated with the finding.

[com.google.cloud.securitycenter.v1.OrgPolicyProto](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.OrgPolicyProto)

[com.google.cloud.securitycenter.v1.OrganizationLocationName](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.OrganizationLocationName)

[com.google.cloud.securitycenter.v1.OrganizationLocationName.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.OrganizationLocationName.Builder)

Builder for organizations/{organization}/locations/{location}.

[com.google.cloud.securitycenter.v1.OrganizationName](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.OrganizationName)

[com.google.cloud.securitycenter.v1.OrganizationName.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.OrganizationName.Builder)

Builder for organizations/{organization}.

[com.google.cloud.securitycenter.v1.OrganizationSettings.AssetDiscoveryConfig](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.OrganizationSettings.AssetDiscoveryConfig)

The configuration used for Asset Discovery runs.

[com.google.cloud.securitycenter.v1.OrganizationSettings.AssetDiscoveryConfig.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.OrganizationSettings.AssetDiscoveryConfig.Builder)

The configuration used for Asset Discovery runs.

[com.google.cloud.securitycenter.v1.OrganizationSettings.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.OrganizationSettings.Builder)

User specified settings that are attached to the Security Command Center organization.

[com.google.cloud.securitycenter.v1.OrganizationSettingsName](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.OrganizationSettingsName)

[com.google.cloud.securitycenter.v1.OrganizationSettingsName.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.OrganizationSettingsName.Builder)

Builder for organizations/{organization}/organizationSettings.

[com.google.cloud.securitycenter.v1.OrganizationSettingsOuterClass](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.OrganizationSettingsOuterClass)

[com.google.cloud.securitycenter.v1.OrganizationSimulationName](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.OrganizationSimulationName)

[com.google.cloud.securitycenter.v1.OrganizationSimulationName.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.OrganizationSimulationName.Builder)

Builder for organizations/{organization}/simulations/{simulation}.

[com.google.cloud.securitycenter.v1.Package](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Package)

Package is a generic definition of a package.

[com.google.cloud.securitycenter.v1.Package.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Package.Builder)

Package is a generic definition of a package.

[com.google.cloud.securitycenter.v1.Position](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Position)

A position in the uploaded text version of a module.

[com.google.cloud.securitycenter.v1.Position.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Position.Builder)

A position in the uploaded text version of a module.

[com.google.cloud.securitycenter.v1.Process](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Process)

Represents an operating system process.

[com.google.cloud.securitycenter.v1.Process.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Process.Builder)

Represents an operating system process.

[com.google.cloud.securitycenter.v1.ProcessProto](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ProcessProto)

[com.google.cloud.securitycenter.v1.ProjectName](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ProjectName)

[com.google.cloud.securitycenter.v1.ProjectName.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ProjectName.Builder)

Builder for projects/{project}.

[com.google.cloud.securitycenter.v1.Reference](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Reference)

Additional Links

[com.google.cloud.securitycenter.v1.Reference.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Reference.Builder)

Additional Links

[com.google.cloud.securitycenter.v1.Requests](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Requests)

Information about the requests relevant to the finding.

[com.google.cloud.securitycenter.v1.Requests.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Requests.Builder)

Information about the requests relevant to the finding.

[com.google.cloud.securitycenter.v1.Resource](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Resource)

Information related to the Google Cloud resource.

[com.google.cloud.securitycenter.v1.Resource.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Resource.Builder)

Information related to the Google Cloud resource.

[com.google.cloud.securitycenter.v1.ResourcePath](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ResourcePath)

Represents the path of resources leading up to the resource this finding is about.

[com.google.cloud.securitycenter.v1.ResourcePath.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ResourcePath.Builder)

Represents the path of resources leading up to the resource this finding is about.

[com.google.cloud.securitycenter.v1.ResourcePath.ResourcePathNode](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ResourcePath.ResourcePathNode)

A node within the resource path. Each node represents a resource within the resource hierarchy.

[com.google.cloud.securitycenter.v1.ResourcePath.ResourcePathNode.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ResourcePath.ResourcePathNode.Builder)

A node within the resource path. Each node represents a resource within the resource hierarchy.

[com.google.cloud.securitycenter.v1.ResourceProto](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ResourceProto)

[com.google.cloud.securitycenter.v1.ResourceValueConfig](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ResourceValueConfig)

A resource value configuration (RVC) is a mapping configuration of user's resources to resource values. Used in Attack path simulations.

[com.google.cloud.securitycenter.v1.ResourceValueConfig.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ResourceValueConfig.Builder)

A resource value configuration (RVC) is a mapping configuration of user's resources to resource values. Used in Attack path simulations.

[com.google.cloud.securitycenter.v1.ResourceValueConfig.SensitiveDataProtectionMapping](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ResourceValueConfig.SensitiveDataProtectionMapping)

Resource value mapping for Sensitive Data Protection findings. If any of these mappings have a resource value that is not unspecified, the resource\_value field will be ignored when reading this configuration.

[com.google.cloud.securitycenter.v1.ResourceValueConfig.SensitiveDataProtectionMapping.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ResourceValueConfig.SensitiveDataProtectionMapping.Builder)

Resource value mapping for Sensitive Data Protection findings. If any of these mappings have a resource value that is not unspecified, the resource\_value field will be ignored when reading this configuration.

[com.google.cloud.securitycenter.v1.ResourceValueConfigMetadata](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ResourceValueConfigMetadata)

Metadata about a ResourceValueConfig. For example, id and name.

[com.google.cloud.securitycenter.v1.ResourceValueConfigMetadata.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ResourceValueConfigMetadata.Builder)

Metadata about a ResourceValueConfig. For example, id and name.

[com.google.cloud.securitycenter.v1.ResourceValueConfigName](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ResourceValueConfigName)

[com.google.cloud.securitycenter.v1.ResourceValueConfigName.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ResourceValueConfigName.Builder)

Builder for organizations/{organization}/resourceValueConfigs/{resource\_value\_config}.

[com.google.cloud.securitycenter.v1.ResourceValueConfigProto](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ResourceValueConfigProto)

[com.google.cloud.securitycenter.v1.RunAssetDiscoveryRequest](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.RunAssetDiscoveryRequest)

Request message for running asset discovery for an organization.

[com.google.cloud.securitycenter.v1.RunAssetDiscoveryRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.RunAssetDiscoveryRequest.Builder)

Request message for running asset discovery for an organization.

[com.google.cloud.securitycenter.v1.RunAssetDiscoveryResponse](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.RunAssetDiscoveryResponse)

Response of asset discovery run

[com.google.cloud.securitycenter.v1.RunAssetDiscoveryResponse.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.RunAssetDiscoveryResponse.Builder)

Response of asset discovery run

[com.google.cloud.securitycenter.v1.RunAssetDiscoveryResponseOuterClass](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.RunAssetDiscoveryResponseOuterClass)

[com.google.cloud.securitycenter.v1.SecurityBulletin](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SecurityBulletin)

SecurityBulletin are notifications of vulnerabilities of Google products.

[com.google.cloud.securitycenter.v1.SecurityBulletin.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SecurityBulletin.Builder)

SecurityBulletin are notifications of vulnerabilities of Google products.

[com.google.cloud.securitycenter.v1.SecurityCenterClient.GroupAssetsFixedSizeCollection](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SecurityCenterClient.GroupAssetsFixedSizeCollection)

[com.google.cloud.securitycenter.v1.SecurityCenterClient.GroupAssetsPage](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SecurityCenterClient.GroupAssetsPage)

[com.google.cloud.securitycenter.v1.SecurityCenterClient.GroupAssetsPagedResponse](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SecurityCenterClient.GroupAssetsPagedResponse)

[com.google.cloud.securitycenter.v1.SecurityCenterClient.GroupFindingsFixedSizeCollection](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SecurityCenterClient.GroupFindingsFixedSizeCollection)

[com.google.cloud.securitycenter.v1.SecurityCenterClient.GroupFindingsPage](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SecurityCenterClient.GroupFindingsPage)

[com.google.cloud.securitycenter.v1.SecurityCenterClient.GroupFindingsPagedResponse](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SecurityCenterClient.GroupFindingsPagedResponse)

[com.google.cloud.securitycenter.v1.SecurityCenterClient.ListAssetsFixedSizeCollection](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SecurityCenterClient.ListAssetsFixedSizeCollection)

[com.google.cloud.securitycenter.v1.SecurityCenterClient.ListAssetsPage](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SecurityCenterClient.ListAssetsPage)

[com.google.cloud.securitycenter.v1.SecurityCenterClient.ListAssetsPagedResponse](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SecurityCenterClient.ListAssetsPagedResponse)

[com.google.cloud.securitycenter.v1.SecurityCenterClient.ListAttackPathsFixedSizeCollection](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SecurityCenterClient.ListAttackPathsFixedSizeCollection)

[com.google.cloud.securitycenter.v1.SecurityCenterClient.ListAttackPathsPage](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SecurityCenterClient.ListAttackPathsPage)

[com.google.cloud.securitycenter.v1.SecurityCenterClient.ListAttackPathsPagedResponse](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SecurityCenterClient.ListAttackPathsPagedResponse)

[com.google.cloud.securitycenter.v1.SecurityCenterClient.ListBigQueryExportsFixedSizeCollection](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SecurityCenterClient.ListBigQueryExportsFixedSizeCollection)

[com.google.cloud.securitycenter.v1.SecurityCenterClient.ListBigQueryExportsPage](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SecurityCenterClient.ListBigQueryExportsPage)

[com.google.cloud.securitycenter.v1.SecurityCenterClient.ListBigQueryExportsPagedResponse](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SecurityCenterClient.ListBigQueryExportsPagedResponse)

[com.google.cloud.securitycenter.v1.SecurityCenterClient.ListDescendantEventThreatDetectionCustomModulesFixedSizeCollection](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SecurityCenterClient.ListDescendantEventThreatDetectionCustomModulesFixedSizeCollection)

[com.google.cloud.securitycenter.v1.SecurityCenterClient.ListDescendantEventThreatDetectionCustomModulesPage](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SecurityCenterClient.ListDescendantEventThreatDetectionCustomModulesPage)

[com.google.cloud.securitycenter.v1.SecurityCenterClient.ListDescendantEventThreatDetectionCustomModulesPagedResponse](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SecurityCenterClient.ListDescendantEventThreatDetectionCustomModulesPagedResponse)

[com.google.cloud.securitycenter.v1.SecurityCenterClient.ListDescendantSecurityHealthAnalyticsCustomModulesFixedSizeCollection](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SecurityCenterClient.ListDescendantSecurityHealthAnalyticsCustomModulesFixedSizeCollection)

[com.google.cloud.securitycenter.v1.SecurityCenterClient.ListDescendantSecurityHealthAnalyticsCustomModulesPage](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SecurityCenterClient.ListDescendantSecurityHealthAnalyticsCustomModulesPage)

[com.google.cloud.securitycenter.v1.SecurityCenterClient.ListDescendantSecurityHealthAnalyticsCustomModulesPagedResponse](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SecurityCenterClient.ListDescendantSecurityHealthAnalyticsCustomModulesPagedResponse)

[com.google.cloud.securitycenter.v1.SecurityCenterClient.ListEffectiveEventThreatDetectionCustomModulesFixedSizeCollection](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SecurityCenterClient.ListEffectiveEventThreatDetectionCustomModulesFixedSizeCollection)

[com.google.cloud.securitycenter.v1.SecurityCenterClient.ListEffectiveEventThreatDetectionCustomModulesPage](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SecurityCenterClient.ListEffectiveEventThreatDetectionCustomModulesPage)

[com.google.cloud.securitycenter.v1.SecurityCenterClient.ListEffectiveEventThreatDetectionCustomModulesPagedResponse](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SecurityCenterClient.ListEffectiveEventThreatDetectionCustomModulesPagedResponse)

[com.google.cloud.securitycenter.v1.SecurityCenterClient.ListEffectiveSecurityHealthAnalyticsCustomModulesFixedSizeCollection](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SecurityCenterClient.ListEffectiveSecurityHealthAnalyticsCustomModulesFixedSizeCollection)

[com.google.cloud.securitycenter.v1.SecurityCenterClient.ListEffectiveSecurityHealthAnalyticsCustomModulesPage](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SecurityCenterClient.ListEffectiveSecurityHealthAnalyticsCustomModulesPage)

[com.google.cloud.securitycenter.v1.SecurityCenterClient.ListEffectiveSecurityHealthAnalyticsCustomModulesPagedResponse](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SecurityCenterClient.ListEffectiveSecurityHealthAnalyticsCustomModulesPagedResponse)

[com.google.cloud.securitycenter.v1.SecurityCenterClient.ListEventThreatDetectionCustomModulesFixedSizeCollection](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SecurityCenterClient.ListEventThreatDetectionCustomModulesFixedSizeCollection)

[com.google.cloud.securitycenter.v1.SecurityCenterClient.ListEventThreatDetectionCustomModulesPage](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SecurityCenterClient.ListEventThreatDetectionCustomModulesPage)

[com.google.cloud.securitycenter.v1.SecurityCenterClient.ListEventThreatDetectionCustomModulesPagedResponse](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SecurityCenterClient.ListEventThreatDetectionCustomModulesPagedResponse)

[com.google.cloud.securitycenter.v1.SecurityCenterClient.ListFindingsFixedSizeCollection](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SecurityCenterClient.ListFindingsFixedSizeCollection)

[com.google.cloud.securitycenter.v1.SecurityCenterClient.ListFindingsPage](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SecurityCenterClient.ListFindingsPage)

[com.google.cloud.securitycenter.v1.SecurityCenterClient.ListFindingsPagedResponse](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SecurityCenterClient.ListFindingsPagedResponse)

[com.google.cloud.securitycenter.v1.SecurityCenterClient.ListMuteConfigsFixedSizeCollection](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SecurityCenterClient.ListMuteConfigsFixedSizeCollection)

[com.google.cloud.securitycenter.v1.SecurityCenterClient.ListMuteConfigsPage](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SecurityCenterClient.ListMuteConfigsPage)

[com.google.cloud.securitycenter.v1.SecurityCenterClient.ListMuteConfigsPagedResponse](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SecurityCenterClient.ListMuteConfigsPagedResponse)

[com.google.cloud.securitycenter.v1.SecurityCenterClient.ListNotificationConfigsFixedSizeCollection](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SecurityCenterClient.ListNotificationConfigsFixedSizeCollection)

[com.google.cloud.securitycenter.v1.SecurityCenterClient.ListNotificationConfigsPage](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SecurityCenterClient.ListNotificationConfigsPage)

[com.google.cloud.securitycenter.v1.SecurityCenterClient.ListNotificationConfigsPagedResponse](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SecurityCenterClient.ListNotificationConfigsPagedResponse)

[com.google.cloud.securitycenter.v1.SecurityCenterClient.ListResourceValueConfigsFixedSizeCollection](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SecurityCenterClient.ListResourceValueConfigsFixedSizeCollection)

[com.google.cloud.securitycenter.v1.SecurityCenterClient.ListResourceValueConfigsPage](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SecurityCenterClient.ListResourceValueConfigsPage)

[com.google.cloud.securitycenter.v1.SecurityCenterClient.ListResourceValueConfigsPagedResponse](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SecurityCenterClient.ListResourceValueConfigsPagedResponse)

[com.google.cloud.securitycenter.v1.SecurityCenterClient.ListSecurityHealthAnalyticsCustomModulesFixedSizeCollection](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SecurityCenterClient.ListSecurityHealthAnalyticsCustomModulesFixedSizeCollection)

[com.google.cloud.securitycenter.v1.SecurityCenterClient.ListSecurityHealthAnalyticsCustomModulesPage](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SecurityCenterClient.ListSecurityHealthAnalyticsCustomModulesPage)

[com.google.cloud.securitycenter.v1.SecurityCenterClient.ListSecurityHealthAnalyticsCustomModulesPagedResponse](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SecurityCenterClient.ListSecurityHealthAnalyticsCustomModulesPagedResponse)

[com.google.cloud.securitycenter.v1.SecurityCenterClient.ListSourcesFixedSizeCollection](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SecurityCenterClient.ListSourcesFixedSizeCollection)

[com.google.cloud.securitycenter.v1.SecurityCenterClient.ListSourcesPage](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SecurityCenterClient.ListSourcesPage)

[com.google.cloud.securitycenter.v1.SecurityCenterClient.ListSourcesPagedResponse](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SecurityCenterClient.ListSourcesPagedResponse)

[com.google.cloud.securitycenter.v1.SecurityCenterClient.ListValuedResourcesFixedSizeCollection](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SecurityCenterClient.ListValuedResourcesFixedSizeCollection)

[com.google.cloud.securitycenter.v1.SecurityCenterClient.ListValuedResourcesPage](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SecurityCenterClient.ListValuedResourcesPage)

[com.google.cloud.securitycenter.v1.SecurityCenterClient.ListValuedResourcesPagedResponse](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SecurityCenterClient.ListValuedResourcesPagedResponse)

[com.google.cloud.securitycenter.v1.SecurityCenterGrpc](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SecurityCenterGrpc)

V1 APIs for Security Center service.

[com.google.cloud.securitycenter.v1.SecurityCenterGrpc.SecurityCenterImplBase](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SecurityCenterGrpc.SecurityCenterImplBase)

Base class for the server implementation of the service SecurityCenter. V1 APIs for Security Center service.

[com.google.cloud.securitycenter.v1.SecurityCenterSettings.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SecurityCenterSettings.Builder)

Builder for SecurityCenterSettings.

[com.google.cloud.securitycenter.v1.SecurityHealthAnalyticsCustomConfigProto](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SecurityHealthAnalyticsCustomConfigProto)

[com.google.cloud.securitycenter.v1.SecurityHealthAnalyticsCustomModule](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SecurityHealthAnalyticsCustomModule)

Represents an instance of a Security Health Analytics custom module, including its full module name, display name, enablement state, and last updated time. You can create a custom module at the organization, folder, or

[com.google.cloud.securitycenter.v1.SecurityHealthAnalyticsCustomModule.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SecurityHealthAnalyticsCustomModule.Builder)

Represents an instance of a Security Health Analytics custom module, including its full module name, display name, enablement state, and last updated time. You can create a custom module at the organization, folder, or

[com.google.cloud.securitycenter.v1.SecurityHealthAnalyticsCustomModuleName](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SecurityHealthAnalyticsCustomModuleName)

[com.google.cloud.securitycenter.v1.SecurityHealthAnalyticsCustomModuleName.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SecurityHealthAnalyticsCustomModuleName.Builder)

Builder for organizations/{organization}/securityHealthAnalyticsSettings/customModules/{custom\_module}.

[com.google.cloud.securitycenter.v1.SecurityHealthAnalyticsCustomModuleName.FolderCustomModuleBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SecurityHealthAnalyticsCustomModuleName.FolderCustomModuleBuilder)

Builder for folders/{folder}/securityHealthAnalyticsSettings/customModules/{custom\_module}.

[com.google.cloud.securitycenter.v1.SecurityHealthAnalyticsCustomModuleName.ProjectCustomModuleBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SecurityHealthAnalyticsCustomModuleName.ProjectCustomModuleBuilder)

Builder for projects/{project}/securityHealthAnalyticsSettings/customModules/{custom\_module}.

[com.google.cloud.securitycenter.v1.SecurityHealthAnalyticsCustomModuleProto](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SecurityHealthAnalyticsCustomModuleProto)

[com.google.cloud.securitycenter.v1.SecurityHealthAnalyticsSettingsName](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SecurityHealthAnalyticsSettingsName)

[com.google.cloud.securitycenter.v1.SecurityHealthAnalyticsSettingsName.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SecurityHealthAnalyticsSettingsName.Builder)

Builder for organizations/{organization}/securityHealthAnalyticsSettings.

[com.google.cloud.securitycenter.v1.SecurityHealthAnalyticsSettingsName.FolderBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SecurityHealthAnalyticsSettingsName.FolderBuilder)

Builder for folders/{folder}/securityHealthAnalyticsSettings.

[com.google.cloud.securitycenter.v1.SecurityHealthAnalyticsSettingsName.ProjectBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SecurityHealthAnalyticsSettingsName.ProjectBuilder)

Builder for projects/{project}/securityHealthAnalyticsSettings.

[com.google.cloud.securitycenter.v1.SecurityMarks](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SecurityMarks)

User specified security marks that are attached to the parent Security Command Center resource. Security marks are scoped within a Security Command Center organization -- they can be modified and viewed by all users who have

[com.google.cloud.securitycenter.v1.SecurityMarks.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SecurityMarks.Builder)

User specified security marks that are attached to the parent Security Command Center resource. Security marks are scoped within a Security Command Center organization -- they can be modified and viewed by all users who have

[com.google.cloud.securitycenter.v1.SecurityMarksOuterClass](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SecurityMarksOuterClass)

[com.google.cloud.securitycenter.v1.SecurityPolicy](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SecurityPolicy)

Information about the [Google Cloud Armor security policy](https://cloud.google.com/armor/docs/security-policy-overview) relevant to the finding.

[com.google.cloud.securitycenter.v1.SecurityPolicy.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SecurityPolicy.Builder)

Information about the [Google Cloud Armor security policy](https://cloud.google.com/armor/docs/security-policy-overview) relevant to the finding.

[com.google.cloud.securitycenter.v1.SecurityPosture](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SecurityPosture)

Represents a posture that is deployed on Google Cloud by the Security Command Center Posture Management service. A posture contains one or more policy sets. A policy set is a

[com.google.cloud.securitycenter.v1.SecurityPosture.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SecurityPosture.Builder)

Represents a posture that is deployed on Google Cloud by the Security Command Center Posture Management service. A posture contains one or more policy sets. A policy set is a

[com.google.cloud.securitycenter.v1.SecurityPosture.PolicyDriftDetails](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SecurityPosture.PolicyDriftDetails)

The policy field that violates the deployed posture and its expected and detected values.

[com.google.cloud.securitycenter.v1.SecurityPosture.PolicyDriftDetails.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SecurityPosture.PolicyDriftDetails.Builder)

The policy field that violates the deployed posture and its expected and detected values.

[com.google.cloud.securitycenter.v1.SecurityPostureProto](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SecurityPostureProto)

[com.google.cloud.securitycenter.v1.SecuritycenterService](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SecuritycenterService)

[com.google.cloud.securitycenter.v1.ServiceAccountDelegationInfo](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ServiceAccountDelegationInfo)

Identity delegation history of an authenticated service account.

[com.google.cloud.securitycenter.v1.ServiceAccountDelegationInfo.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ServiceAccountDelegationInfo.Builder)

Identity delegation history of an authenticated service account.

[com.google.cloud.securitycenter.v1.SetFindingStateRequest](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SetFindingStateRequest)

Request message for updating a finding's state.

[com.google.cloud.securitycenter.v1.SetFindingStateRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SetFindingStateRequest.Builder)

Request message for updating a finding's state.

[com.google.cloud.securitycenter.v1.SetMuteRequest](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SetMuteRequest)

Request message for updating a finding's mute status.

[com.google.cloud.securitycenter.v1.SetMuteRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SetMuteRequest.Builder)

Request message for updating a finding's mute status.

[com.google.cloud.securitycenter.v1.SimulateSecurityHealthAnalyticsCustomModuleRequest](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SimulateSecurityHealthAnalyticsCustomModuleRequest)

Request message to simulate a CustomConfig against a given test resource. Maximum size of the request is 4 MB by default.

[com.google.cloud.securitycenter.v1.SimulateSecurityHealthAnalyticsCustomModuleRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SimulateSecurityHealthAnalyticsCustomModuleRequest.Builder)

Request message to simulate a CustomConfig against a given test resource. Maximum size of the request is 4 MB by default.

[com.google.cloud.securitycenter.v1.SimulateSecurityHealthAnalyticsCustomModuleRequest.SimulatedResource](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SimulateSecurityHealthAnalyticsCustomModuleRequest.SimulatedResource)

Manually constructed resource name. If the custom module evaluates against only the resource data, you can omit the `iam_policy_data` field. If it evaluates only the `iam_policy_data` field, you can omit the resource data.

[com.google.cloud.securitycenter.v1.SimulateSecurityHealthAnalyticsCustomModuleRequest.SimulatedResource.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SimulateSecurityHealthAnalyticsCustomModuleRequest.SimulatedResource.Builder)

Manually constructed resource name. If the custom module evaluates against only the resource data, you can omit the `iam_policy_data` field. If it evaluates only the `iam_policy_data` field, you can omit the resource data.

[com.google.cloud.securitycenter.v1.SimulateSecurityHealthAnalyticsCustomModuleResponse](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SimulateSecurityHealthAnalyticsCustomModuleResponse)

Response message for simulating a `SecurityHealthAnalyticsCustomModule` against a given resource.

[com.google.cloud.securitycenter.v1.SimulateSecurityHealthAnalyticsCustomModuleResponse.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SimulateSecurityHealthAnalyticsCustomModuleResponse.Builder)

Response message for simulating a `SecurityHealthAnalyticsCustomModule` against a given resource.

[com.google.cloud.securitycenter.v1.SimulateSecurityHealthAnalyticsCustomModuleResponse.SimulatedResult](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SimulateSecurityHealthAnalyticsCustomModuleResponse.SimulatedResult)

Possible test result.

[com.google.cloud.securitycenter.v1.SimulateSecurityHealthAnalyticsCustomModuleResponse.SimulatedResult.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SimulateSecurityHealthAnalyticsCustomModuleResponse.SimulatedResult.Builder)

Possible test result.

[com.google.cloud.securitycenter.v1.Simulation](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Simulation)

Attack path simulation

[com.google.cloud.securitycenter.v1.Simulation.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Simulation.Builder)

Attack path simulation

[com.google.cloud.securitycenter.v1.SimulationName](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SimulationName)

[com.google.cloud.securitycenter.v1.SimulationName.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SimulationName.Builder)

Builder for organizations/{organization}/simulations/{simulation}.

[com.google.cloud.securitycenter.v1.SimulationProto](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SimulationProto)

[com.google.cloud.securitycenter.v1.Source](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Source)

Security Command Center finding source. A finding source is an entity or a mechanism that can produce a finding. A source is like a container of findings that come from the same scanner, logger, monitor, and

[com.google.cloud.securitycenter.v1.Source.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Source.Builder)

Security Command Center finding source. A finding source is an entity or a mechanism that can produce a finding. A source is like a container of findings that come from the same scanner, logger, monitor, and

[com.google.cloud.securitycenter.v1.SourceName](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SourceName)

[com.google.cloud.securitycenter.v1.SourceName.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SourceName.Builder)

Builder for organizations/{organization}/sources/{source}.

[com.google.cloud.securitycenter.v1.SourceName.FolderSourceBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SourceName.FolderSourceBuilder)

Builder for folders/{folder}/sources/{source}.

[com.google.cloud.securitycenter.v1.SourceName.ProjectSourceBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SourceName.ProjectSourceBuilder)

Builder for projects/{project}/sources/{source}.

[com.google.cloud.securitycenter.v1.SourceOuterClass](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SourceOuterClass)

[com.google.cloud.securitycenter.v1.ToxicCombination](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ToxicCombination)

Contains details about a group of security issues that, when the issues occur together, represent a greater risk than when the issues occur independently. A group of such issues is referred to as a toxic combination.

[com.google.cloud.securitycenter.v1.ToxicCombination.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ToxicCombination.Builder)

Contains details about a group of security issues that, when the issues occur together, represent a greater risk than when the issues occur independently. A group of such issues is referred to as a toxic combination.

[com.google.cloud.securitycenter.v1.ToxicCombinationProto](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ToxicCombinationProto)

[com.google.cloud.securitycenter.v1.UpdateBigQueryExportRequest](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.UpdateBigQueryExportRequest)

Request message for updating a BigQuery export.

[com.google.cloud.securitycenter.v1.UpdateBigQueryExportRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.UpdateBigQueryExportRequest.Builder)

Request message for updating a BigQuery export.

[com.google.cloud.securitycenter.v1.UpdateEventThreatDetectionCustomModuleRequest](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.UpdateEventThreatDetectionCustomModuleRequest)

Request to update an Event Threat Detection custom module.

[com.google.cloud.securitycenter.v1.UpdateEventThreatDetectionCustomModuleRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.UpdateEventThreatDetectionCustomModuleRequest.Builder)

Request to update an Event Threat Detection custom module.

[com.google.cloud.securitycenter.v1.UpdateExternalSystemRequest](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.UpdateExternalSystemRequest)

Request message for updating a ExternalSystem resource.

[com.google.cloud.securitycenter.v1.UpdateExternalSystemRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.UpdateExternalSystemRequest.Builder)

Request message for updating a ExternalSystem resource.

[com.google.cloud.securitycenter.v1.UpdateFindingRequest](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.UpdateFindingRequest)

Request message for updating or creating a finding.

[com.google.cloud.securitycenter.v1.UpdateFindingRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.UpdateFindingRequest.Builder)

Request message for updating or creating a finding.

[com.google.cloud.securitycenter.v1.UpdateMuteConfigRequest](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.UpdateMuteConfigRequest)

Request message for updating a mute config.

[com.google.cloud.securitycenter.v1.UpdateMuteConfigRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.UpdateMuteConfigRequest.Builder)

Request message for updating a mute config.

[com.google.cloud.securitycenter.v1.UpdateNotificationConfigRequest](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.UpdateNotificationConfigRequest)

Request message for updating a notification config.

[com.google.cloud.securitycenter.v1.UpdateNotificationConfigRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.UpdateNotificationConfigRequest.Builder)

Request message for updating a notification config.

[com.google.cloud.securitycenter.v1.UpdateOrganizationSettingsRequest](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.UpdateOrganizationSettingsRequest)

Request message for updating an organization's settings.

[com.google.cloud.securitycenter.v1.UpdateOrganizationSettingsRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.UpdateOrganizationSettingsRequest.Builder)

Request message for updating an organization's settings.

[com.google.cloud.securitycenter.v1.UpdateResourceValueConfigRequest](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.UpdateResourceValueConfigRequest)

Request message to update resource value config

[com.google.cloud.securitycenter.v1.UpdateResourceValueConfigRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.UpdateResourceValueConfigRequest.Builder)

Request message to update resource value config

[com.google.cloud.securitycenter.v1.UpdateSecurityHealthAnalyticsCustomModuleRequest](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.UpdateSecurityHealthAnalyticsCustomModuleRequest)

Request message for updating Security Health Analytics custom modules.

[com.google.cloud.securitycenter.v1.UpdateSecurityHealthAnalyticsCustomModuleRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.UpdateSecurityHealthAnalyticsCustomModuleRequest.Builder)

Request message for updating Security Health Analytics custom modules.

[com.google.cloud.securitycenter.v1.UpdateSecurityMarksRequest](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.UpdateSecurityMarksRequest)

Request message for updating a SecurityMarks resource.

[com.google.cloud.securitycenter.v1.UpdateSecurityMarksRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.UpdateSecurityMarksRequest.Builder)

Request message for updating a SecurityMarks resource.

[com.google.cloud.securitycenter.v1.UpdateSourceRequest](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.UpdateSourceRequest)

Request message for updating a source.

[com.google.cloud.securitycenter.v1.UpdateSourceRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.UpdateSourceRequest.Builder)

Request message for updating a source.

[com.google.cloud.securitycenter.v1.ValidateEventThreatDetectionCustomModuleRequest](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ValidateEventThreatDetectionCustomModuleRequest)

Request to validate an Event Threat Detection custom module.

[com.google.cloud.securitycenter.v1.ValidateEventThreatDetectionCustomModuleRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ValidateEventThreatDetectionCustomModuleRequest.Builder)

Request to validate an Event Threat Detection custom module.

[com.google.cloud.securitycenter.v1.ValidateEventThreatDetectionCustomModuleResponse](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ValidateEventThreatDetectionCustomModuleResponse)

Response to validating an Event Threat Detection custom module.

[com.google.cloud.securitycenter.v1.ValidateEventThreatDetectionCustomModuleResponse.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ValidateEventThreatDetectionCustomModuleResponse.Builder)

Response to validating an Event Threat Detection custom module.

[com.google.cloud.securitycenter.v1.ValuedResource](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ValuedResource)

A resource that is determined to have value to a user's system

[com.google.cloud.securitycenter.v1.ValuedResource.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ValuedResource.Builder)

A resource that is determined to have value to a user's system

[com.google.cloud.securitycenter.v1.ValuedResourceName](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ValuedResourceName)

[com.google.cloud.securitycenter.v1.ValuedResourceName.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ValuedResourceName.Builder)

Builder for organizations/{organization}/simulations/{simulation}/valuedResources/{valued\_resource}.

[com.google.cloud.securitycenter.v1.ValuedResourceProto](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ValuedResourceProto)

[com.google.cloud.securitycenter.v1.Vulnerability](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Vulnerability)

Refers to common vulnerability fields e.g. cve, cvss, cwe etc.

[com.google.cloud.securitycenter.v1.Vulnerability.Builder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Vulnerability.Builder)

Refers to common vulnerability fields e.g. cve, cvss, cwe etc.

[com.google.cloud.securitycenter.v1.VulnerabilityProto](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.VulnerabilityProto)

## Interfaces

Interface

Description

[com.google.cloud.securitycenter.v1.AccessOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.AccessOrBuilder)

[com.google.cloud.securitycenter.v1.AdaptiveProtectionOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.AdaptiveProtectionOrBuilder)

[com.google.cloud.securitycenter.v1.ApplicationOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ApplicationOrBuilder)

[com.google.cloud.securitycenter.v1.Asset.IamPolicyOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Asset.IamPolicyOrBuilder)

[com.google.cloud.securitycenter.v1.Asset.SecurityCenterPropertiesOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Asset.SecurityCenterPropertiesOrBuilder)

[com.google.cloud.securitycenter.v1.AssetOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.AssetOrBuilder)

[com.google.cloud.securitycenter.v1.AttackExposureOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.AttackExposureOrBuilder)

[com.google.cloud.securitycenter.v1.AttackOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.AttackOrBuilder)

[com.google.cloud.securitycenter.v1.AttackPath.AttackPathEdgeOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.AttackPath.AttackPathEdgeOrBuilder)

[com.google.cloud.securitycenter.v1.AttackPath.AttackPathNode.AttackStepNodeOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.AttackPath.AttackPathNode.AttackStepNodeOrBuilder)

[com.google.cloud.securitycenter.v1.AttackPath.AttackPathNode.PathNodeAssociatedFindingOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.AttackPath.AttackPathNode.PathNodeAssociatedFindingOrBuilder)

[com.google.cloud.securitycenter.v1.AttackPath.AttackPathNodeOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.AttackPath.AttackPathNodeOrBuilder)

[com.google.cloud.securitycenter.v1.AttackPathOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.AttackPathOrBuilder)

[com.google.cloud.securitycenter.v1.AwsMetadata.AwsAccountOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.AwsMetadata.AwsAccountOrBuilder)

[com.google.cloud.securitycenter.v1.AwsMetadata.AwsOrganizationOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.AwsMetadata.AwsOrganizationOrBuilder)

[com.google.cloud.securitycenter.v1.AwsMetadata.AwsOrganizationalUnitOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.AwsMetadata.AwsOrganizationalUnitOrBuilder)

[com.google.cloud.securitycenter.v1.AwsMetadataOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.AwsMetadataOrBuilder)

[com.google.cloud.securitycenter.v1.AzureMetadata.AzureManagementGroupOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.AzureMetadata.AzureManagementGroupOrBuilder)

[com.google.cloud.securitycenter.v1.AzureMetadata.AzureResourceGroupOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.AzureMetadata.AzureResourceGroupOrBuilder)

[com.google.cloud.securitycenter.v1.AzureMetadata.AzureSubscriptionOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.AzureMetadata.AzureSubscriptionOrBuilder)

[com.google.cloud.securitycenter.v1.AzureMetadataOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.AzureMetadataOrBuilder)

[com.google.cloud.securitycenter.v1.BackupDisasterRecoveryOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.BackupDisasterRecoveryOrBuilder)

[com.google.cloud.securitycenter.v1.BatchCreateResourceValueConfigsRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.BatchCreateResourceValueConfigsRequestOrBuilder)

[com.google.cloud.securitycenter.v1.BatchCreateResourceValueConfigsResponseOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.BatchCreateResourceValueConfigsResponseOrBuilder)

[com.google.cloud.securitycenter.v1.BigQueryExportOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.BigQueryExportOrBuilder)

[com.google.cloud.securitycenter.v1.BulkMuteFindingsRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.BulkMuteFindingsRequestOrBuilder)

[com.google.cloud.securitycenter.v1.BulkMuteFindingsResponseOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.BulkMuteFindingsResponseOrBuilder)

[com.google.cloud.securitycenter.v1.CloudArmorOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.CloudArmorOrBuilder)

[com.google.cloud.securitycenter.v1.CloudDlpDataProfileOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.CloudDlpDataProfileOrBuilder)

[com.google.cloud.securitycenter.v1.CloudDlpInspectionOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.CloudDlpInspectionOrBuilder)

[com.google.cloud.securitycenter.v1.CloudLoggingEntryOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.CloudLoggingEntryOrBuilder)

[com.google.cloud.securitycenter.v1.ComplianceOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ComplianceOrBuilder)

[com.google.cloud.securitycenter.v1.ConnectionOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ConnectionOrBuilder)

[com.google.cloud.securitycenter.v1.ContactDetailsOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ContactDetailsOrBuilder)

[com.google.cloud.securitycenter.v1.ContactOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ContactOrBuilder)

[com.google.cloud.securitycenter.v1.ContainerOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ContainerOrBuilder)

[com.google.cloud.securitycenter.v1.CreateBigQueryExportRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.CreateBigQueryExportRequestOrBuilder)

[com.google.cloud.securitycenter.v1.CreateEventThreatDetectionCustomModuleRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.CreateEventThreatDetectionCustomModuleRequestOrBuilder)

[com.google.cloud.securitycenter.v1.CreateFindingRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.CreateFindingRequestOrBuilder)

[com.google.cloud.securitycenter.v1.CreateMuteConfigRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.CreateMuteConfigRequestOrBuilder)

[com.google.cloud.securitycenter.v1.CreateNotificationConfigRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.CreateNotificationConfigRequestOrBuilder)

[com.google.cloud.securitycenter.v1.CreateResourceValueConfigRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.CreateResourceValueConfigRequestOrBuilder)

[com.google.cloud.securitycenter.v1.CreateSecurityHealthAnalyticsCustomModuleRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.CreateSecurityHealthAnalyticsCustomModuleRequestOrBuilder)

[com.google.cloud.securitycenter.v1.CreateSourceRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.CreateSourceRequestOrBuilder)

[com.google.cloud.securitycenter.v1.CustomConfig.CustomOutputSpec.PropertyOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.CustomConfig.CustomOutputSpec.PropertyOrBuilder)

[com.google.cloud.securitycenter.v1.CustomConfig.CustomOutputSpecOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.CustomConfig.CustomOutputSpecOrBuilder)

[com.google.cloud.securitycenter.v1.CustomConfig.ResourceSelectorOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.CustomConfig.ResourceSelectorOrBuilder)

[com.google.cloud.securitycenter.v1.CustomConfigOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.CustomConfigOrBuilder)

[com.google.cloud.securitycenter.v1.CustomModuleValidationErrorOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.CustomModuleValidationErrorOrBuilder)

[com.google.cloud.securitycenter.v1.CustomModuleValidationErrorsOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.CustomModuleValidationErrorsOrBuilder)

[com.google.cloud.securitycenter.v1.CveOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.CveOrBuilder)

[com.google.cloud.securitycenter.v1.Cvssv3OrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Cvssv3OrBuilder)

[com.google.cloud.securitycenter.v1.DatabaseOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.DatabaseOrBuilder)

[com.google.cloud.securitycenter.v1.DeleteBigQueryExportRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.DeleteBigQueryExportRequestOrBuilder)

[com.google.cloud.securitycenter.v1.DeleteEventThreatDetectionCustomModuleRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.DeleteEventThreatDetectionCustomModuleRequestOrBuilder)

[com.google.cloud.securitycenter.v1.DeleteMuteConfigRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.DeleteMuteConfigRequestOrBuilder)

[com.google.cloud.securitycenter.v1.DeleteNotificationConfigRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.DeleteNotificationConfigRequestOrBuilder)

[com.google.cloud.securitycenter.v1.DeleteResourceValueConfigRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.DeleteResourceValueConfigRequestOrBuilder)

[com.google.cloud.securitycenter.v1.DeleteSecurityHealthAnalyticsCustomModuleRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.DeleteSecurityHealthAnalyticsCustomModuleRequestOrBuilder)

[com.google.cloud.securitycenter.v1.EffectiveEventThreatDetectionCustomModuleOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.EffectiveEventThreatDetectionCustomModuleOrBuilder)

[com.google.cloud.securitycenter.v1.EffectiveSecurityHealthAnalyticsCustomModuleOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.EffectiveSecurityHealthAnalyticsCustomModuleOrBuilder)

[com.google.cloud.securitycenter.v1.EnvironmentVariableOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.EnvironmentVariableOrBuilder)

[com.google.cloud.securitycenter.v1.EventThreatDetectionCustomModuleOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.EventThreatDetectionCustomModuleOrBuilder)

[com.google.cloud.securitycenter.v1.ExfilResourceOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ExfilResourceOrBuilder)

[com.google.cloud.securitycenter.v1.ExfiltrationOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ExfiltrationOrBuilder)

[com.google.cloud.securitycenter.v1.ExternalSystem.TicketInfoOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ExternalSystem.TicketInfoOrBuilder)

[com.google.cloud.securitycenter.v1.ExternalSystemOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ExternalSystemOrBuilder)

[com.google.cloud.securitycenter.v1.File.DiskPathOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.File.DiskPathOrBuilder)

[com.google.cloud.securitycenter.v1.FileOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.FileOrBuilder)

[com.google.cloud.securitycenter.v1.Finding.MuteInfo.DynamicMuteRecordOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Finding.MuteInfo.DynamicMuteRecordOrBuilder)

[com.google.cloud.securitycenter.v1.Finding.MuteInfo.StaticMuteOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Finding.MuteInfo.StaticMuteOrBuilder)

[com.google.cloud.securitycenter.v1.Finding.MuteInfoOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Finding.MuteInfoOrBuilder)

[com.google.cloud.securitycenter.v1.FindingOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.FindingOrBuilder)

[com.google.cloud.securitycenter.v1.FolderOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.FolderOrBuilder)

[com.google.cloud.securitycenter.v1.GeolocationOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.GeolocationOrBuilder)

[com.google.cloud.securitycenter.v1.GetBigQueryExportRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.GetBigQueryExportRequestOrBuilder)

[com.google.cloud.securitycenter.v1.GetEffectiveEventThreatDetectionCustomModuleRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.GetEffectiveEventThreatDetectionCustomModuleRequestOrBuilder)

[com.google.cloud.securitycenter.v1.GetEffectiveSecurityHealthAnalyticsCustomModuleRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.GetEffectiveSecurityHealthAnalyticsCustomModuleRequestOrBuilder)

[com.google.cloud.securitycenter.v1.GetEventThreatDetectionCustomModuleRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.GetEventThreatDetectionCustomModuleRequestOrBuilder)

[com.google.cloud.securitycenter.v1.GetMuteConfigRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.GetMuteConfigRequestOrBuilder)

[com.google.cloud.securitycenter.v1.GetNotificationConfigRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.GetNotificationConfigRequestOrBuilder)

[com.google.cloud.securitycenter.v1.GetOrganizationSettingsRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.GetOrganizationSettingsRequestOrBuilder)

[com.google.cloud.securitycenter.v1.GetResourceValueConfigRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.GetResourceValueConfigRequestOrBuilder)

[com.google.cloud.securitycenter.v1.GetSecurityHealthAnalyticsCustomModuleRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.GetSecurityHealthAnalyticsCustomModuleRequestOrBuilder)

[com.google.cloud.securitycenter.v1.GetSimulationRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.GetSimulationRequestOrBuilder)

[com.google.cloud.securitycenter.v1.GetSourceRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.GetSourceRequestOrBuilder)

[com.google.cloud.securitycenter.v1.GetValuedResourceRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.GetValuedResourceRequestOrBuilder)

[com.google.cloud.securitycenter.v1.GroupAssetsRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.GroupAssetsRequestOrBuilder)

[com.google.cloud.securitycenter.v1.GroupAssetsResponseOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.GroupAssetsResponseOrBuilder)

[com.google.cloud.securitycenter.v1.GroupFindingsRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.GroupFindingsRequestOrBuilder)

[com.google.cloud.securitycenter.v1.GroupFindingsResponseOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.GroupFindingsResponseOrBuilder)

[com.google.cloud.securitycenter.v1.GroupMembershipOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.GroupMembershipOrBuilder)

[com.google.cloud.securitycenter.v1.GroupResultOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.GroupResultOrBuilder)

[com.google.cloud.securitycenter.v1.IamBindingOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.IamBindingOrBuilder)

[com.google.cloud.securitycenter.v1.Indicator.ProcessSignature.MemoryHashSignature.DetectionOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Indicator.ProcessSignature.MemoryHashSignature.DetectionOrBuilder)

[com.google.cloud.securitycenter.v1.Indicator.ProcessSignature.MemoryHashSignatureOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Indicator.ProcessSignature.MemoryHashSignatureOrBuilder)

[com.google.cloud.securitycenter.v1.Indicator.ProcessSignature.YaraRuleSignatureOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Indicator.ProcessSignature.YaraRuleSignatureOrBuilder)

[com.google.cloud.securitycenter.v1.Indicator.ProcessSignatureOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Indicator.ProcessSignatureOrBuilder)

[com.google.cloud.securitycenter.v1.IndicatorOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.IndicatorOrBuilder)

[com.google.cloud.securitycenter.v1.KernelRootkitOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.KernelRootkitOrBuilder)

[com.google.cloud.securitycenter.v1.Kubernetes.AccessReviewOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Kubernetes.AccessReviewOrBuilder)

[com.google.cloud.securitycenter.v1.Kubernetes.BindingOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Kubernetes.BindingOrBuilder)

[com.google.cloud.securitycenter.v1.Kubernetes.NodeOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Kubernetes.NodeOrBuilder)

[com.google.cloud.securitycenter.v1.Kubernetes.NodePoolOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Kubernetes.NodePoolOrBuilder)

[com.google.cloud.securitycenter.v1.Kubernetes.ObjectOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Kubernetes.ObjectOrBuilder)

[com.google.cloud.securitycenter.v1.Kubernetes.PodOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Kubernetes.PodOrBuilder)

[com.google.cloud.securitycenter.v1.Kubernetes.RoleOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Kubernetes.RoleOrBuilder)

[com.google.cloud.securitycenter.v1.Kubernetes.SubjectOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Kubernetes.SubjectOrBuilder)

[com.google.cloud.securitycenter.v1.KubernetesOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.KubernetesOrBuilder)

[com.google.cloud.securitycenter.v1.LabelOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.LabelOrBuilder)

[com.google.cloud.securitycenter.v1.ListAssetsRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ListAssetsRequestOrBuilder)

[com.google.cloud.securitycenter.v1.ListAssetsResponse.ListAssetsResultOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ListAssetsResponse.ListAssetsResultOrBuilder)

[com.google.cloud.securitycenter.v1.ListAssetsResponseOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ListAssetsResponseOrBuilder)

[com.google.cloud.securitycenter.v1.ListAttackPathsRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ListAttackPathsRequestOrBuilder)

[com.google.cloud.securitycenter.v1.ListAttackPathsResponseOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ListAttackPathsResponseOrBuilder)

[com.google.cloud.securitycenter.v1.ListBigQueryExportsRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ListBigQueryExportsRequestOrBuilder)

[com.google.cloud.securitycenter.v1.ListBigQueryExportsResponseOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ListBigQueryExportsResponseOrBuilder)

[com.google.cloud.securitycenter.v1.ListDescendantEventThreatDetectionCustomModulesRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ListDescendantEventThreatDetectionCustomModulesRequestOrBuilder)

[com.google.cloud.securitycenter.v1.ListDescendantEventThreatDetectionCustomModulesResponseOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ListDescendantEventThreatDetectionCustomModulesResponseOrBuilder)

[com.google.cloud.securitycenter.v1.ListDescendantSecurityHealthAnalyticsCustomModulesRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ListDescendantSecurityHealthAnalyticsCustomModulesRequestOrBuilder)

[com.google.cloud.securitycenter.v1.ListDescendantSecurityHealthAnalyticsCustomModulesResponseOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ListDescendantSecurityHealthAnalyticsCustomModulesResponseOrBuilder)

[com.google.cloud.securitycenter.v1.ListEffectiveEventThreatDetectionCustomModulesRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ListEffectiveEventThreatDetectionCustomModulesRequestOrBuilder)

[com.google.cloud.securitycenter.v1.ListEffectiveEventThreatDetectionCustomModulesResponseOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ListEffectiveEventThreatDetectionCustomModulesResponseOrBuilder)

[com.google.cloud.securitycenter.v1.ListEffectiveSecurityHealthAnalyticsCustomModulesRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ListEffectiveSecurityHealthAnalyticsCustomModulesRequestOrBuilder)

[com.google.cloud.securitycenter.v1.ListEffectiveSecurityHealthAnalyticsCustomModulesResponseOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ListEffectiveSecurityHealthAnalyticsCustomModulesResponseOrBuilder)

[com.google.cloud.securitycenter.v1.ListEventThreatDetectionCustomModulesRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ListEventThreatDetectionCustomModulesRequestOrBuilder)

[com.google.cloud.securitycenter.v1.ListEventThreatDetectionCustomModulesResponseOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ListEventThreatDetectionCustomModulesResponseOrBuilder)

[com.google.cloud.securitycenter.v1.ListFindingsRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ListFindingsRequestOrBuilder)

[com.google.cloud.securitycenter.v1.ListFindingsResponse.ListFindingsResult.ResourceOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ListFindingsResponse.ListFindingsResult.ResourceOrBuilder)

[com.google.cloud.securitycenter.v1.ListFindingsResponse.ListFindingsResultOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ListFindingsResponse.ListFindingsResultOrBuilder)

[com.google.cloud.securitycenter.v1.ListFindingsResponseOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ListFindingsResponseOrBuilder)

[com.google.cloud.securitycenter.v1.ListMuteConfigsRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ListMuteConfigsRequestOrBuilder)

[com.google.cloud.securitycenter.v1.ListMuteConfigsResponseOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ListMuteConfigsResponseOrBuilder)

[com.google.cloud.securitycenter.v1.ListNotificationConfigsRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ListNotificationConfigsRequestOrBuilder)

[com.google.cloud.securitycenter.v1.ListNotificationConfigsResponseOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ListNotificationConfigsResponseOrBuilder)

[com.google.cloud.securitycenter.v1.ListResourceValueConfigsRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ListResourceValueConfigsRequestOrBuilder)

[com.google.cloud.securitycenter.v1.ListResourceValueConfigsResponseOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ListResourceValueConfigsResponseOrBuilder)

[com.google.cloud.securitycenter.v1.ListSecurityHealthAnalyticsCustomModulesRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ListSecurityHealthAnalyticsCustomModulesRequestOrBuilder)

[com.google.cloud.securitycenter.v1.ListSecurityHealthAnalyticsCustomModulesResponseOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ListSecurityHealthAnalyticsCustomModulesResponseOrBuilder)

[com.google.cloud.securitycenter.v1.ListSourcesRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ListSourcesRequestOrBuilder)

[com.google.cloud.securitycenter.v1.ListSourcesResponseOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ListSourcesResponseOrBuilder)

[com.google.cloud.securitycenter.v1.ListValuedResourcesRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ListValuedResourcesRequestOrBuilder)

[com.google.cloud.securitycenter.v1.ListValuedResourcesResponseOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ListValuedResourcesResponseOrBuilder)

[com.google.cloud.securitycenter.v1.LoadBalancerOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.LoadBalancerOrBuilder)

[com.google.cloud.securitycenter.v1.LogEntryOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.LogEntryOrBuilder)

[com.google.cloud.securitycenter.v1.MitreAttackOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.MitreAttackOrBuilder)

[com.google.cloud.securitycenter.v1.MuteConfigOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.MuteConfigOrBuilder)

[com.google.cloud.securitycenter.v1.NotebookOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.NotebookOrBuilder)

[com.google.cloud.securitycenter.v1.NotificationConfig.StreamingConfigOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.NotificationConfig.StreamingConfigOrBuilder)

[com.google.cloud.securitycenter.v1.NotificationConfigOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.NotificationConfigOrBuilder)

[com.google.cloud.securitycenter.v1.NotificationMessageOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.NotificationMessageOrBuilder)

[com.google.cloud.securitycenter.v1.OrgPolicyOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.OrgPolicyOrBuilder)

[com.google.cloud.securitycenter.v1.OrganizationSettings.AssetDiscoveryConfigOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.OrganizationSettings.AssetDiscoveryConfigOrBuilder)

[com.google.cloud.securitycenter.v1.OrganizationSettingsOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.OrganizationSettingsOrBuilder)

[com.google.cloud.securitycenter.v1.PackageOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.PackageOrBuilder)

[com.google.cloud.securitycenter.v1.PositionOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.PositionOrBuilder)

[com.google.cloud.securitycenter.v1.ProcessOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ProcessOrBuilder)

[com.google.cloud.securitycenter.v1.ReferenceOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ReferenceOrBuilder)

[com.google.cloud.securitycenter.v1.RequestsOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.RequestsOrBuilder)

[com.google.cloud.securitycenter.v1.ResourceOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ResourceOrBuilder)

[com.google.cloud.securitycenter.v1.ResourcePath.ResourcePathNodeOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ResourcePath.ResourcePathNodeOrBuilder)

[com.google.cloud.securitycenter.v1.ResourcePathOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ResourcePathOrBuilder)

[com.google.cloud.securitycenter.v1.ResourceValueConfig.SensitiveDataProtectionMappingOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ResourceValueConfig.SensitiveDataProtectionMappingOrBuilder)

[com.google.cloud.securitycenter.v1.ResourceValueConfigMetadataOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ResourceValueConfigMetadataOrBuilder)

[com.google.cloud.securitycenter.v1.ResourceValueConfigOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ResourceValueConfigOrBuilder)

[com.google.cloud.securitycenter.v1.RunAssetDiscoveryRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.RunAssetDiscoveryRequestOrBuilder)

[com.google.cloud.securitycenter.v1.RunAssetDiscoveryResponseOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.RunAssetDiscoveryResponseOrBuilder)

[com.google.cloud.securitycenter.v1.SecurityBulletinOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SecurityBulletinOrBuilder)

[com.google.cloud.securitycenter.v1.SecurityCenterGrpc.AsyncService](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SecurityCenterGrpc.AsyncService)

V1 APIs for Security Center service.

[com.google.cloud.securitycenter.v1.SecurityHealthAnalyticsCustomModuleOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SecurityHealthAnalyticsCustomModuleOrBuilder)

[com.google.cloud.securitycenter.v1.SecurityMarksOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SecurityMarksOrBuilder)

[com.google.cloud.securitycenter.v1.SecurityPolicyOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SecurityPolicyOrBuilder)

[com.google.cloud.securitycenter.v1.SecurityPosture.PolicyDriftDetailsOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SecurityPosture.PolicyDriftDetailsOrBuilder)

[com.google.cloud.securitycenter.v1.SecurityPostureOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SecurityPostureOrBuilder)

[com.google.cloud.securitycenter.v1.ServiceAccountDelegationInfoOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ServiceAccountDelegationInfoOrBuilder)

[com.google.cloud.securitycenter.v1.SetFindingStateRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SetFindingStateRequestOrBuilder)

[com.google.cloud.securitycenter.v1.SetMuteRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SetMuteRequestOrBuilder)

[com.google.cloud.securitycenter.v1.SimulateSecurityHealthAnalyticsCustomModuleRequest.SimulatedResourceOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SimulateSecurityHealthAnalyticsCustomModuleRequest.SimulatedResourceOrBuilder)

[com.google.cloud.securitycenter.v1.SimulateSecurityHealthAnalyticsCustomModuleRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SimulateSecurityHealthAnalyticsCustomModuleRequestOrBuilder)

[com.google.cloud.securitycenter.v1.SimulateSecurityHealthAnalyticsCustomModuleResponse.SimulatedResultOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SimulateSecurityHealthAnalyticsCustomModuleResponse.SimulatedResultOrBuilder)

[com.google.cloud.securitycenter.v1.SimulateSecurityHealthAnalyticsCustomModuleResponseOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SimulateSecurityHealthAnalyticsCustomModuleResponseOrBuilder)

[com.google.cloud.securitycenter.v1.SimulationOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SimulationOrBuilder)

[com.google.cloud.securitycenter.v1.SourceOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SourceOrBuilder)

[com.google.cloud.securitycenter.v1.ToxicCombinationOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ToxicCombinationOrBuilder)

[com.google.cloud.securitycenter.v1.UpdateBigQueryExportRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.UpdateBigQueryExportRequestOrBuilder)

[com.google.cloud.securitycenter.v1.UpdateEventThreatDetectionCustomModuleRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.UpdateEventThreatDetectionCustomModuleRequestOrBuilder)

[com.google.cloud.securitycenter.v1.UpdateExternalSystemRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.UpdateExternalSystemRequestOrBuilder)

[com.google.cloud.securitycenter.v1.UpdateFindingRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.UpdateFindingRequestOrBuilder)

[com.google.cloud.securitycenter.v1.UpdateMuteConfigRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.UpdateMuteConfigRequestOrBuilder)

[com.google.cloud.securitycenter.v1.UpdateNotificationConfigRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.UpdateNotificationConfigRequestOrBuilder)

[com.google.cloud.securitycenter.v1.UpdateOrganizationSettingsRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.UpdateOrganizationSettingsRequestOrBuilder)

[com.google.cloud.securitycenter.v1.UpdateResourceValueConfigRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.UpdateResourceValueConfigRequestOrBuilder)

[com.google.cloud.securitycenter.v1.UpdateSecurityHealthAnalyticsCustomModuleRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.UpdateSecurityHealthAnalyticsCustomModuleRequestOrBuilder)

[com.google.cloud.securitycenter.v1.UpdateSecurityMarksRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.UpdateSecurityMarksRequestOrBuilder)

[com.google.cloud.securitycenter.v1.UpdateSourceRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.UpdateSourceRequestOrBuilder)

[com.google.cloud.securitycenter.v1.ValidateEventThreatDetectionCustomModuleRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ValidateEventThreatDetectionCustomModuleRequestOrBuilder)

[com.google.cloud.securitycenter.v1.ValidateEventThreatDetectionCustomModuleResponseOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ValidateEventThreatDetectionCustomModuleResponseOrBuilder)

[com.google.cloud.securitycenter.v1.ValuedResourceOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ValuedResourceOrBuilder)

[com.google.cloud.securitycenter.v1.VulnerabilityOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.VulnerabilityOrBuilder)

## Enums

Enum

Description

[com.google.cloud.securitycenter.v1.AttackExposure.State](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.AttackExposure.State)

This enum defines the various states an AttackExposure can be in.

[com.google.cloud.securitycenter.v1.AttackPath.AttackPathNode.NodeType](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.AttackPath.AttackPathNode.NodeType)

The type of the incoming attack step node.

[com.google.cloud.securitycenter.v1.BulkMuteFindingsRequest.MuteState](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.BulkMuteFindingsRequest.MuteState)

The mute state.

[com.google.cloud.securitycenter.v1.CloudDlpDataProfile.ParentType](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.CloudDlpDataProfile.ParentType)

Parents for configurations that produce data profile findings.

[com.google.cloud.securitycenter.v1.CloudProvider](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.CloudProvider)

Enumeration representing the various cloud providers a finding's resource could reside in.

[com.google.cloud.securitycenter.v1.Connection.Protocol](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Connection.Protocol)

IANA Internet Protocol Number such as TCP(6) and UDP(17).

[com.google.cloud.securitycenter.v1.CustomConfig.Severity](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.CustomConfig.Severity)

Defines the valid value options for the severity of a finding.

[com.google.cloud.securitycenter.v1.Cve.ExploitationActivity](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Cve.ExploitationActivity)

The possible values of exploitation activity of the vulnerability in the wild.

[com.google.cloud.securitycenter.v1.Cve.RiskRating](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Cve.RiskRating)

The possible values of impact of the vulnerability if it was to be exploited.

[com.google.cloud.securitycenter.v1.Cvssv3.AttackComplexity](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Cvssv3.AttackComplexity)

This metric describes the conditions beyond the attacker's control that must exist in order to exploit the vulnerability.

[com.google.cloud.securitycenter.v1.Cvssv3.AttackVector](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Cvssv3.AttackVector)

This metric reflects the context by which vulnerability exploitation is possible.

[com.google.cloud.securitycenter.v1.Cvssv3.Impact](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Cvssv3.Impact)

The Impact metrics capture the effects of a successfully exploited vulnerability on the component that suffers the worst outcome that is most directly and predictably associated with the attack.

[com.google.cloud.securitycenter.v1.Cvssv3.PrivilegesRequired](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Cvssv3.PrivilegesRequired)

This metric describes the level of privileges an attacker must possess before successfully exploiting the vulnerability.

[com.google.cloud.securitycenter.v1.Cvssv3.Scope](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Cvssv3.Scope)

The Scope metric captures whether a vulnerability in one vulnerable component impacts resources in components beyond its security scope.

[com.google.cloud.securitycenter.v1.Cvssv3.UserInteraction](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Cvssv3.UserInteraction)

This metric captures the requirement for a human user, other than the attacker, to participate in the successful compromise of the vulnerable component.

[com.google.cloud.securitycenter.v1.EffectiveEventThreatDetectionCustomModule.EnablementState](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.EffectiveEventThreatDetectionCustomModule.EnablementState)

The enablement state of the module.

[com.google.cloud.securitycenter.v1.EffectiveSecurityHealthAnalyticsCustomModule.EnablementState](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.EffectiveSecurityHealthAnalyticsCustomModule.EnablementState)

The enablement state of the module.

[com.google.cloud.securitycenter.v1.EventThreatDetectionCustomModule.EnablementState](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.EventThreatDetectionCustomModule.EnablementState)

The enablement state of the module.

[com.google.cloud.securitycenter.v1.Finding.FindingClass](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Finding.FindingClass)

Represents what kind of Finding it is.

[com.google.cloud.securitycenter.v1.Finding.Mute](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Finding.Mute)

Mute state a finding can be in.

[com.google.cloud.securitycenter.v1.Finding.Severity](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Finding.Severity)

The severity of the finding.

[com.google.cloud.securitycenter.v1.Finding.State](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Finding.State)

The state of the finding.

[com.google.cloud.securitycenter.v1.GroupMembership.GroupType](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.GroupMembership.GroupType)

Possible types of groups.

[com.google.cloud.securitycenter.v1.IamBinding.Action](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.IamBinding.Action)

The type of action performed on a Binding in a policy.

[com.google.cloud.securitycenter.v1.Indicator.ProcessSignature.SignatureCase](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Indicator.ProcessSignature.SignatureCase)

[com.google.cloud.securitycenter.v1.Indicator.ProcessSignature.SignatureType](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Indicator.ProcessSignature.SignatureType)

Possible resource types to be associated with a signature.

[com.google.cloud.securitycenter.v1.Kubernetes.Role.Kind](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Kubernetes.Role.Kind)

Types of Kubernetes roles.

[com.google.cloud.securitycenter.v1.Kubernetes.Subject.AuthType](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Kubernetes.Subject.AuthType)

Auth types that can be used for the subject's kind field.

[com.google.cloud.securitycenter.v1.ListAssetsResponse.ListAssetsResult.StateChange](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ListAssetsResponse.ListAssetsResult.StateChange)

The change in state of the asset. When querying across two points in time this describes

[com.google.cloud.securitycenter.v1.ListFindingsResponse.ListFindingsResult.Resource.CloudProviderMetadataCase](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ListFindingsResponse.ListFindingsResult.Resource.CloudProviderMetadataCase)

[com.google.cloud.securitycenter.v1.ListFindingsResponse.ListFindingsResult.StateChange](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ListFindingsResponse.ListFindingsResult.StateChange)

The change in state of the finding. When querying across two points in time this describes

[com.google.cloud.securitycenter.v1.LogEntry.LogEntryCase](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.LogEntry.LogEntryCase)

[com.google.cloud.securitycenter.v1.MitreAttack.Tactic](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.MitreAttack.Tactic)

MITRE ATT&CK tactics that can be referenced by SCC findings. See: [https://attack.mitre.org/tactics/enterprise/](https://attack.mitre.org/tactics/enterprise/)

[com.google.cloud.securitycenter.v1.MitreAttack.Technique](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.MitreAttack.Technique)

MITRE ATT&CK techniques that can be referenced by SCC findings. See: [https://attack.mitre.org/techniques/enterprise/](https://attack.mitre.org/techniques/enterprise/) Next ID: 65

[com.google.cloud.securitycenter.v1.MuteConfig.MuteConfigType](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.MuteConfig.MuteConfigType)

The type of MuteConfig.

[com.google.cloud.securitycenter.v1.NotificationConfig.NotifyConfigCase](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.NotificationConfig.NotifyConfigCase)

[com.google.cloud.securitycenter.v1.NotificationMessage.EventCase](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.NotificationMessage.EventCase)

[com.google.cloud.securitycenter.v1.OrganizationSettings.AssetDiscoveryConfig.InclusionMode](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.OrganizationSettings.AssetDiscoveryConfig.InclusionMode)

The mode of inclusion when running Asset Discovery. Asset discovery can be limited by explicitly identifying projects to be included or excluded. If INCLUDE\_ONLY is set, then only those projects

[com.google.cloud.securitycenter.v1.Resource.CloudProviderMetadataCase](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.Resource.CloudProviderMetadataCase)

[com.google.cloud.securitycenter.v1.ResourcePath.ResourcePathNodeType](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ResourcePath.ResourcePathNodeType)

The type of resource the node represents.

[com.google.cloud.securitycenter.v1.ResourceValue](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ResourceValue)

Value enum to map to a resource

[com.google.cloud.securitycenter.v1.RunAssetDiscoveryResponse.State](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.RunAssetDiscoveryResponse.State)

The state of an asset discovery run.

[com.google.cloud.securitycenter.v1.SecurityHealthAnalyticsCustomModule.EnablementState](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SecurityHealthAnalyticsCustomModule.EnablementState)

Possible enablement states of a custom module.

[com.google.cloud.securitycenter.v1.SimulateSecurityHealthAnalyticsCustomModuleResponse.SimulatedResult.ResultCase](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.SimulateSecurityHealthAnalyticsCustomModuleResponse.SimulatedResult.ResultCase)

[com.google.cloud.securitycenter.v1.ValuedResource.ResourceValue](https://cloud.google.com/java/docs/reference/google-cloud-securitycenter/latest/com.google.cloud.securitycenter.v1.ValuedResource.ResourceValue)

How valuable the resource is.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
