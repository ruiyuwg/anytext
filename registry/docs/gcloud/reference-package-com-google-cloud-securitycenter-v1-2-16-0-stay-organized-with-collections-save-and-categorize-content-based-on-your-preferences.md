-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Package com.google.cloud.securitycenter.v1 (2.16.0) Stay organized with collections Save and categorize content based on your preferences.

2.95.0 (latest) 2.93.0 2.91.0 2.90.0 2.88.0 2.86.0 2.84.0 2.83.0 2.82.0 2.81.0 2.80.0 2.78.0 2.76.0 2.75.0 2.72.0 2.71.0 2.70.0 2.68.0 2.67.0 2.66.0 2.65.0 2.64.0 2.63.0 2.62.0 2.61.0 2.60.0 2.59.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.51.0 2.50.0 2.49.0 2.48.0 2.47.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.1 2.10.0 2.9.0 2.8.0 2.7.1 2.6.0 2.5.6 2.3.2

A client to Security Command Center API

The interfaces provided are listed below, along with usage samples.

## SecurityCenterClient

Service Description: V1 APIs for Security Center service.

Sample for SecurityCenterClient:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 try (SecurityCenterClient securityCenterClient = SecurityCenterClient.create()) {
   OrganizationName parent = OrganizationName.of("[ORGANIZATION]");
   Source source = Source.newBuilder().build();
   Source response = securityCenterClient.createSource(parent, source);
 }
 
```
 

## Classes

### [Access](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.Access)

Represents an access event.

Protobuf type `google.cloud.securitycenter.v1.Access`

### [Access.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.Access.Builder)

Represents an access event.

Protobuf type `google.cloud.securitycenter.v1.Access`

### [AccessProto](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.AccessProto)

### [Asset](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.Asset)

Security Command Center representation of a Google Cloud resource. The Asset is a Security Command Center resource that captures information about a single Google Cloud resource. All modifications to an Asset are only within the context of Security Command Center and don't affect the referenced Google Cloud resource.

Protobuf type `google.cloud.securitycenter.v1.Asset`

### [Asset.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.Asset.Builder)

Security Command Center representation of a Google Cloud resource. The Asset is a Security Command Center resource that captures information about a single Google Cloud resource. All modifications to an Asset are only within the context of Security Command Center and don't affect the referenced Google Cloud resource.

Protobuf type `google.cloud.securitycenter.v1.Asset`

### [Asset.IamPolicy](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.Asset.IamPolicy)

Cloud IAM Policy information associated with the Google Cloud resource described by the Security Command Center asset. This information is managed and defined by the Google Cloud resource and cannot be modified by the user.

Protobuf type `google.cloud.securitycenter.v1.Asset.IamPolicy`

### [Asset.IamPolicy.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.Asset.IamPolicy.Builder)

Cloud IAM Policy information associated with the Google Cloud resource described by the Security Command Center asset. This information is managed and defined by the Google Cloud resource and cannot be modified by the user.

Protobuf type `google.cloud.securitycenter.v1.Asset.IamPolicy`

### [Asset.SecurityCenterProperties](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.Asset.SecurityCenterProperties)

Security Command Center managed properties. These properties are managed by Security Command Center and cannot be modified by the user.

Protobuf type `google.cloud.securitycenter.v1.Asset.SecurityCenterProperties`

### [Asset.SecurityCenterProperties.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.Asset.SecurityCenterProperties.Builder)

Security Command Center managed properties. These properties are managed by Security Command Center and cannot be modified by the user.

Protobuf type `google.cloud.securitycenter.v1.Asset.SecurityCenterProperties`

### [AssetName](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.AssetName)

### [AssetName.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.AssetName.Builder)

Builder for organizations/{organization}/assets/{asset}.

### [AssetName.FolderAssetBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.AssetName.FolderAssetBuilder)

Builder for folders/{folder}/assets/{asset}.

### [AssetName.ProjectAssetBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.AssetName.ProjectAssetBuilder)

Builder for projects/{project}/assets/{asset}.

### [AssetOuterClass](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.AssetOuterClass)

### [BigQueryExport](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.BigQueryExport)

Configures how to deliver Findings to BigQuery Instance.

Protobuf type `google.cloud.securitycenter.v1.BigQueryExport`

### [BigQueryExport.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.BigQueryExport.Builder)

Configures how to deliver Findings to BigQuery Instance.

Protobuf type `google.cloud.securitycenter.v1.BigQueryExport`

### [BigQueryExportName](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.BigQueryExportName)

### [BigQueryExportName.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.BigQueryExportName.Builder)

Builder for organizations/{organization}/bigQueryExports/{export}.

### [BigQueryExportName.FolderExportBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.BigQueryExportName.FolderExportBuilder)

Builder for folders/{folder}/bigQueryExports/{export}.

### [BigQueryExportName.ProjectExportBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.BigQueryExportName.ProjectExportBuilder)

Builder for projects/{project}/bigQueryExports/{export}.

### [BigQueryExportProto](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.BigQueryExportProto)

### [BulkMuteFindingsRequest](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.BulkMuteFindingsRequest)

Request message for bulk findings update. Note:

1.  If multiple bulk update requests match the same resource, the order in which they get executed is not defined.
2.  Once a bulk operation is started, there is no way to stop it.

Protobuf type `google.cloud.securitycenter.v1.BulkMuteFindingsRequest`

### [BulkMuteFindingsRequest.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.BulkMuteFindingsRequest.Builder)

Request message for bulk findings update. Note:

1.  If multiple bulk update requests match the same resource, the order in which they get executed is not defined.
2.  Once a bulk operation is started, there is no way to stop it.

Protobuf type `google.cloud.securitycenter.v1.BulkMuteFindingsRequest`

### [BulkMuteFindingsResponse](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.BulkMuteFindingsResponse)

The response to a BulkMute request. Contains the LRO information.

Protobuf type `google.cloud.securitycenter.v1.BulkMuteFindingsResponse`

### [BulkMuteFindingsResponse.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.BulkMuteFindingsResponse.Builder)

The response to a BulkMute request. Contains the LRO information.

Protobuf type `google.cloud.securitycenter.v1.BulkMuteFindingsResponse`

### [Compliance](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.Compliance)

Contains compliance information about a security standard indicating unmet recommendations.

Protobuf type `google.cloud.securitycenter.v1.Compliance`

### [Compliance.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.Compliance.Builder)

Contains compliance information about a security standard indicating unmet recommendations.

Protobuf type `google.cloud.securitycenter.v1.Compliance`

### [ComplianceProto](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.ComplianceProto)

### [Connection](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.Connection)

Contains information about the IP connection associated with the finding.

Protobuf type `google.cloud.securitycenter.v1.Connection`

### [Connection.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.Connection.Builder)

Contains information about the IP connection associated with the finding.

Protobuf type `google.cloud.securitycenter.v1.Connection`

### [ConnectionProto](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.ConnectionProto)

### [Contact](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.Contact)

Representa a single contact's email address

Protobuf type `google.cloud.securitycenter.v1.Contact`

### [Contact.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.Contact.Builder)

Representa a single contact's email address

Protobuf type `google.cloud.securitycenter.v1.Contact`

### [ContactDetails](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.ContactDetails)

The details pertaining to specific contacts

Protobuf type `google.cloud.securitycenter.v1.ContactDetails`

### [ContactDetails.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.ContactDetails.Builder)

The details pertaining to specific contacts

Protobuf type `google.cloud.securitycenter.v1.ContactDetails`

### [ContactDetailsProto](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.ContactDetailsProto)

### [Container](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.Container)

Container associated with the finding.

Protobuf type `google.cloud.securitycenter.v1.Container`

### [Container.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.Container.Builder)

Container associated with the finding.

Protobuf type `google.cloud.securitycenter.v1.Container`

### [ContainerProto](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.ContainerProto)

### [CreateBigQueryExportRequest](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.CreateBigQueryExportRequest)

Request message for creating a BigQuery export.

Protobuf type `google.cloud.securitycenter.v1.CreateBigQueryExportRequest`

### [CreateBigQueryExportRequest.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.CreateBigQueryExportRequest.Builder)

Request message for creating a BigQuery export.

Protobuf type `google.cloud.securitycenter.v1.CreateBigQueryExportRequest`

### [CreateFindingRequest](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.CreateFindingRequest)

Request message for creating a finding.

Protobuf type `google.cloud.securitycenter.v1.CreateFindingRequest`

### [CreateFindingRequest.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.CreateFindingRequest.Builder)

Request message for creating a finding.

Protobuf type `google.cloud.securitycenter.v1.CreateFindingRequest`

### [CreateMuteConfigRequest](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.CreateMuteConfigRequest)

Request message for creating a mute config.

Protobuf type `google.cloud.securitycenter.v1.CreateMuteConfigRequest`

### [CreateMuteConfigRequest.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.CreateMuteConfigRequest.Builder)

Request message for creating a mute config.

Protobuf type `google.cloud.securitycenter.v1.CreateMuteConfigRequest`

### [CreateNotificationConfigRequest](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.CreateNotificationConfigRequest)

Request message for creating a notification config.

Protobuf type `google.cloud.securitycenter.v1.CreateNotificationConfigRequest`

### [CreateNotificationConfigRequest.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.CreateNotificationConfigRequest.Builder)

Request message for creating a notification config.

Protobuf type `google.cloud.securitycenter.v1.CreateNotificationConfigRequest`

### [CreateSourceRequest](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.CreateSourceRequest)

Request message for creating a source.

Protobuf type `google.cloud.securitycenter.v1.CreateSourceRequest`

### [CreateSourceRequest.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.CreateSourceRequest.Builder)

Request message for creating a source.

Protobuf type `google.cloud.securitycenter.v1.CreateSourceRequest`

### [Cve](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.Cve)

CVE stands for Common Vulnerabilities and Exposures. More information: [https://cve.mitre.org](https://cve.mitre.org)

Protobuf type `google.cloud.securitycenter.v1.Cve`

### [Cve.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.Cve.Builder)

CVE stands for Common Vulnerabilities and Exposures. More information: [https://cve.mitre.org](https://cve.mitre.org)

Protobuf type `google.cloud.securitycenter.v1.Cve`

### [Cvssv3](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.Cvssv3)

Common Vulnerability Scoring System version 3.

Protobuf type `google.cloud.securitycenter.v1.Cvssv3`

### [Cvssv3.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.Cvssv3.Builder)

Common Vulnerability Scoring System version 3.

Protobuf type `google.cloud.securitycenter.v1.Cvssv3`

### [Database](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.Database)

Represents database access information, such as queries. A database may be a sub-resource of an instance (as in the case of CloudSQL instances or Cloud Spanner instances), or the database instance itself. Some database resources may not have the full resource name populated because these resource types are not yet supported by Cloud Asset Inventory (e.g. CloudSQL databases). In these cases only the display name will be provided.

Protobuf type `google.cloud.securitycenter.v1.Database`

### [Database.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.Database.Builder)

Represents database access information, such as queries. A database may be a sub-resource of an instance (as in the case of CloudSQL instances or Cloud Spanner instances), or the database instance itself. Some database resources may not have the full resource name populated because these resource types are not yet supported by Cloud Asset Inventory (e.g. CloudSQL databases). In these cases only the display name will be provided.

Protobuf type `google.cloud.securitycenter.v1.Database`

### [DatabaseProto](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.DatabaseProto)

### [DeleteBigQueryExportRequest](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.DeleteBigQueryExportRequest)

Request message for deleting a BigQuery export.

Protobuf type `google.cloud.securitycenter.v1.DeleteBigQueryExportRequest`

### [DeleteBigQueryExportRequest.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.DeleteBigQueryExportRequest.Builder)

Request message for deleting a BigQuery export.

Protobuf type `google.cloud.securitycenter.v1.DeleteBigQueryExportRequest`

### [DeleteMuteConfigRequest](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.DeleteMuteConfigRequest)

Request message for deleting a mute config.

Protobuf type `google.cloud.securitycenter.v1.DeleteMuteConfigRequest`

### [DeleteMuteConfigRequest.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.DeleteMuteConfigRequest.Builder)

Request message for deleting a mute config.

Protobuf type `google.cloud.securitycenter.v1.DeleteMuteConfigRequest`

### [DeleteNotificationConfigRequest](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.DeleteNotificationConfigRequest)

Request message for deleting a notification config.

Protobuf type `google.cloud.securitycenter.v1.DeleteNotificationConfigRequest`

### [DeleteNotificationConfigRequest.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.DeleteNotificationConfigRequest.Builder)

Request message for deleting a notification config.

Protobuf type `google.cloud.securitycenter.v1.DeleteNotificationConfigRequest`

### [EnvironmentVariable](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.EnvironmentVariable)

EnvironmentVariable is a name-value pair to store environment variables for Process.

Protobuf type `google.cloud.securitycenter.v1.EnvironmentVariable`

### [EnvironmentVariable.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.EnvironmentVariable.Builder)

EnvironmentVariable is a name-value pair to store environment variables for Process.

Protobuf type `google.cloud.securitycenter.v1.EnvironmentVariable`

### [ExfilResource](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.ExfilResource)

Resource that has been exfiltrated or exfiltrated\_to.

Protobuf type `google.cloud.securitycenter.v1.ExfilResource`

### [ExfilResource.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.ExfilResource.Builder)

Resource that has been exfiltrated or exfiltrated\_to.

Protobuf type `google.cloud.securitycenter.v1.ExfilResource`

### [Exfiltration](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.Exfiltration)

Exfiltration represents a data exfiltration attempt of one or more sources to one or more targets. Sources represent the source of data that is exfiltrated, and Targets represents the destination the data was copied to.

Protobuf type `google.cloud.securitycenter.v1.Exfiltration`

### [Exfiltration.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.Exfiltration.Builder)

Exfiltration represents a data exfiltration attempt of one or more sources to one or more targets. Sources represent the source of data that is exfiltrated, and Targets represents the destination the data was copied to.

Protobuf type `google.cloud.securitycenter.v1.Exfiltration`

### [ExfiltrationProto](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.ExfiltrationProto)

### [ExternalSystem](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.ExternalSystem)

Representation of third party SIEM/SOAR fields within SCC.

Protobuf type `google.cloud.securitycenter.v1.ExternalSystem`

### [ExternalSystem.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.ExternalSystem.Builder)

Representation of third party SIEM/SOAR fields within SCC.

Protobuf type `google.cloud.securitycenter.v1.ExternalSystem`

### [ExternalSystemProto](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.ExternalSystemProto)

### [File](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.File)

File information about the related binary/library used by an executable, or the script used by a script interpreter

Protobuf type `google.cloud.securitycenter.v1.File`

### [File.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.File.Builder)

File information about the related binary/library used by an executable, or the script used by a script interpreter

Protobuf type `google.cloud.securitycenter.v1.File`

### [FileProto](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.FileProto)

### [Finding](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.Finding)

Security Command Center finding. A finding is a record of assessment data like security, risk, health, or privacy, that is ingested into Security Command Center for presentation, notification, analysis, policy testing, and enforcement. For example, a cross-site scripting (XSS) vulnerability in an App Engine application is a finding.

Protobuf type `google.cloud.securitycenter.v1.Finding`

### [Finding.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.Finding.Builder)

Security Command Center finding. A finding is a record of assessment data like security, risk, health, or privacy, that is ingested into Security Command Center for presentation, notification, analysis, policy testing, and enforcement. For example, a cross-site scripting (XSS) vulnerability in an App Engine application is a finding.

Protobuf type `google.cloud.securitycenter.v1.Finding`

### [FindingName](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.FindingName)

### [FindingName.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.FindingName.Builder)

Builder for organizations/{organization}/sources/{source}/findings/{finding}.

### [FindingName.FolderSourceFindingBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.FindingName.FolderSourceFindingBuilder)

Builder for folders/{folder}/sources/{source}/findings/{finding}.

### [FindingName.ProjectSourceFindingBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.FindingName.ProjectSourceFindingBuilder)

Builder for projects/{project}/sources/{source}/findings/{finding}.

### [FindingOuterClass](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.FindingOuterClass)

### [Folder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.Folder)

Message that contains the resource name and display name of a folder resource.

Protobuf type `google.cloud.securitycenter.v1.Folder`

### [Folder.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.Folder.Builder)

Message that contains the resource name and display name of a folder resource.

Protobuf type `google.cloud.securitycenter.v1.Folder`

### [FolderName](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.FolderName)

### [FolderName.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.FolderName.Builder)

Builder for folders/{folder}.

### [FolderProto](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.FolderProto)

### [Geolocation](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.Geolocation)

Represents a geographical location for a given access.

Protobuf type `google.cloud.securitycenter.v1.Geolocation`

### [Geolocation.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.Geolocation.Builder)

Represents a geographical location for a given access.

Protobuf type `google.cloud.securitycenter.v1.Geolocation`

### [GetBigQueryExportRequest](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.GetBigQueryExportRequest)

Request message for retrieving a BigQuery export.

Protobuf type `google.cloud.securitycenter.v1.GetBigQueryExportRequest`

### [GetBigQueryExportRequest.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.GetBigQueryExportRequest.Builder)

Request message for retrieving a BigQuery export.

Protobuf type `google.cloud.securitycenter.v1.GetBigQueryExportRequest`

### [GetMuteConfigRequest](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.GetMuteConfigRequest)

Request message for retrieving a mute config.

Protobuf type `google.cloud.securitycenter.v1.GetMuteConfigRequest`

### [GetMuteConfigRequest.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.GetMuteConfigRequest.Builder)

Request message for retrieving a mute config.

Protobuf type `google.cloud.securitycenter.v1.GetMuteConfigRequest`

### [GetNotificationConfigRequest](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.GetNotificationConfigRequest)

Request message for getting a notification config.

Protobuf type `google.cloud.securitycenter.v1.GetNotificationConfigRequest`

### [GetNotificationConfigRequest.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.GetNotificationConfigRequest.Builder)

Request message for getting a notification config.

Protobuf type `google.cloud.securitycenter.v1.GetNotificationConfigRequest`

### [GetOrganizationSettingsRequest](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.GetOrganizationSettingsRequest)

Request message for getting organization settings.

Protobuf type `google.cloud.securitycenter.v1.GetOrganizationSettingsRequest`

### [GetOrganizationSettingsRequest.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.GetOrganizationSettingsRequest.Builder)

Request message for getting organization settings.

Protobuf type `google.cloud.securitycenter.v1.GetOrganizationSettingsRequest`

### [GetSourceRequest](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.GetSourceRequest)

Request message for getting a source.

Protobuf type `google.cloud.securitycenter.v1.GetSourceRequest`

### [GetSourceRequest.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.GetSourceRequest.Builder)

Request message for getting a source.

Protobuf type `google.cloud.securitycenter.v1.GetSourceRequest`

### [GroupAssetsRequest](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.GroupAssetsRequest)

Request message for grouping by assets.

Protobuf type `google.cloud.securitycenter.v1.GroupAssetsRequest`

### [GroupAssetsRequest.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.GroupAssetsRequest.Builder)

Request message for grouping by assets.

Protobuf type `google.cloud.securitycenter.v1.GroupAssetsRequest`

### [GroupAssetsResponse](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.GroupAssetsResponse)

Response message for grouping by assets.

Protobuf type `google.cloud.securitycenter.v1.GroupAssetsResponse`

### [GroupAssetsResponse.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.GroupAssetsResponse.Builder)

Response message for grouping by assets.

Protobuf type `google.cloud.securitycenter.v1.GroupAssetsResponse`

### [GroupFindingsRequest](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.GroupFindingsRequest)

Request message for grouping by findings.

Protobuf type `google.cloud.securitycenter.v1.GroupFindingsRequest`

### [GroupFindingsRequest.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.GroupFindingsRequest.Builder)

Request message for grouping by findings.

Protobuf type `google.cloud.securitycenter.v1.GroupFindingsRequest`

### [GroupFindingsResponse](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.GroupFindingsResponse)

Response message for group by findings.

Protobuf type `google.cloud.securitycenter.v1.GroupFindingsResponse`

### [GroupFindingsResponse.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.GroupFindingsResponse.Builder)

Response message for group by findings.

Protobuf type `google.cloud.securitycenter.v1.GroupFindingsResponse`

### [GroupResult](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.GroupResult)

Result containing the properties and count of a groupBy request.

Protobuf type `google.cloud.securitycenter.v1.GroupResult`

### [GroupResult.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.GroupResult.Builder)

Result containing the properties and count of a groupBy request.

Protobuf type `google.cloud.securitycenter.v1.GroupResult`

### [IamBinding](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.IamBinding)

Represents a particular IAM binding, which captures a member's role addition, removal, or state.

Protobuf type `google.cloud.securitycenter.v1.IamBinding`

### [IamBinding.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.IamBinding.Builder)

Represents a particular IAM binding, which captures a member's role addition, removal, or state.

Protobuf type `google.cloud.securitycenter.v1.IamBinding`

### [IamBindingProto](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.IamBindingProto)

### [Indicator](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.Indicator)

Represents what's commonly known as an Indicator of compromise (IoC) in computer forensics. This is an artifact observed on a network or in an operating system that, with high confidence, indicates a computer intrusion. Reference: [https://en.wikipedia.org/wiki/Indicator\_of\_compromise](https://en.wikipedia.org/wiki/Indicator_of_compromise)

Protobuf type `google.cloud.securitycenter.v1.Indicator`

### [Indicator.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.Indicator.Builder)

Represents what's commonly known as an Indicator of compromise (IoC) in computer forensics. This is an artifact observed on a network or in an operating system that, with high confidence, indicates a computer intrusion. Reference: [https://en.wikipedia.org/wiki/Indicator\_of\_compromise](https://en.wikipedia.org/wiki/Indicator_of_compromise)

Protobuf type `google.cloud.securitycenter.v1.Indicator`

### [Indicator.ProcessSignature](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.Indicator.ProcessSignature)

Indicates what signature matched this process.

Protobuf type `google.cloud.securitycenter.v1.Indicator.ProcessSignature`

### [Indicator.ProcessSignature.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.Indicator.ProcessSignature.Builder)

Indicates what signature matched this process.

Protobuf type `google.cloud.securitycenter.v1.Indicator.ProcessSignature`

### [Indicator.ProcessSignature.MemoryHashSignature](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.Indicator.ProcessSignature.MemoryHashSignature)

A signature corresponding to memory page hashes.

Protobuf type `google.cloud.securitycenter.v1.Indicator.ProcessSignature.MemoryHashSignature`

### [Indicator.ProcessSignature.MemoryHashSignature.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.Indicator.ProcessSignature.MemoryHashSignature.Builder)

A signature corresponding to memory page hashes.

Protobuf type `google.cloud.securitycenter.v1.Indicator.ProcessSignature.MemoryHashSignature`

### [Indicator.ProcessSignature.MemoryHashSignature.Detection](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.Indicator.ProcessSignature.MemoryHashSignature.Detection)

Memory hash detection contributing to the binary family match.

Protobuf type `google.cloud.securitycenter.v1.Indicator.ProcessSignature.MemoryHashSignature.Detection`

### [Indicator.ProcessSignature.MemoryHashSignature.Detection.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.Indicator.ProcessSignature.MemoryHashSignature.Detection.Builder)

Memory hash detection contributing to the binary family match.

Protobuf type `google.cloud.securitycenter.v1.Indicator.ProcessSignature.MemoryHashSignature.Detection`

### [Indicator.ProcessSignature.YaraRuleSignature](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.Indicator.ProcessSignature.YaraRuleSignature)

A signature corresponding to a YARA rule.

Protobuf type `google.cloud.securitycenter.v1.Indicator.ProcessSignature.YaraRuleSignature`

### [Indicator.ProcessSignature.YaraRuleSignature.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.Indicator.ProcessSignature.YaraRuleSignature.Builder)

A signature corresponding to a YARA rule.

Protobuf type `google.cloud.securitycenter.v1.Indicator.ProcessSignature.YaraRuleSignature`

### [IndicatorProto](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.IndicatorProto)

### [KernelRootkit](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.KernelRootkit)

Kernel mode rootkit signatures.

Protobuf type `google.cloud.securitycenter.v1.KernelRootkit`

### [KernelRootkit.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.KernelRootkit.Builder)

Kernel mode rootkit signatures.

Protobuf type `google.cloud.securitycenter.v1.KernelRootkit`

### [KernelRootkitProto](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.KernelRootkitProto)

### [Kubernetes](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.Kubernetes)

Kubernetes related attributes.

Protobuf type `google.cloud.securitycenter.v1.Kubernetes`

### [Kubernetes.AccessReview](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.Kubernetes.AccessReview)

Conveys information about a Kubernetes access review (e.g. kubectl auth can-i ...) that was involved in a finding.

Protobuf type `google.cloud.securitycenter.v1.Kubernetes.AccessReview`

### [Kubernetes.AccessReview.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.Kubernetes.AccessReview.Builder)

Conveys information about a Kubernetes access review (e.g. kubectl auth can-i ...) that was involved in a finding.

Protobuf type `google.cloud.securitycenter.v1.Kubernetes.AccessReview`

### [Kubernetes.Binding](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.Kubernetes.Binding)

Represents a Kubernetes RoleBinding or ClusterRoleBinding.

Protobuf type `google.cloud.securitycenter.v1.Kubernetes.Binding`

### [Kubernetes.Binding.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.Kubernetes.Binding.Builder)

Represents a Kubernetes RoleBinding or ClusterRoleBinding.

Protobuf type `google.cloud.securitycenter.v1.Kubernetes.Binding`

### [Kubernetes.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.Kubernetes.Builder)

Kubernetes related attributes.

Protobuf type `google.cloud.securitycenter.v1.Kubernetes`

### [Kubernetes.Node](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.Kubernetes.Node)

Kubernetes Nodes associated with the finding.

Protobuf type `google.cloud.securitycenter.v1.Kubernetes.Node`

### [Kubernetes.Node.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.Kubernetes.Node.Builder)

Kubernetes Nodes associated with the finding.

Protobuf type `google.cloud.securitycenter.v1.Kubernetes.Node`

### [Kubernetes.NodePool](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.Kubernetes.NodePool)

Provides GKE Node Pool information.

Protobuf type `google.cloud.securitycenter.v1.Kubernetes.NodePool`

### [Kubernetes.NodePool.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.Kubernetes.NodePool.Builder)

Provides GKE Node Pool information.

Protobuf type `google.cloud.securitycenter.v1.Kubernetes.NodePool`

### [Kubernetes.Pod](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.Kubernetes.Pod)

Kubernetes Pod.

Protobuf type `google.cloud.securitycenter.v1.Kubernetes.Pod`

### [Kubernetes.Pod.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.Kubernetes.Pod.Builder)

Kubernetes Pod.

Protobuf type `google.cloud.securitycenter.v1.Kubernetes.Pod`

### [Kubernetes.Role](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.Kubernetes.Role)

Kubernetes Role or ClusterRole.

Protobuf type `google.cloud.securitycenter.v1.Kubernetes.Role`

### [Kubernetes.Role.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.Kubernetes.Role.Builder)

Kubernetes Role or ClusterRole.

Protobuf type `google.cloud.securitycenter.v1.Kubernetes.Role`

### [Kubernetes.Subject](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.Kubernetes.Subject)

Represents a Kubernetes Subject.

Protobuf type `google.cloud.securitycenter.v1.Kubernetes.Subject`

### [Kubernetes.Subject.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.Kubernetes.Subject.Builder)

Represents a Kubernetes Subject.

Protobuf type `google.cloud.securitycenter.v1.Kubernetes.Subject`

### [KubernetesProto](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.KubernetesProto)

### [Label](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.Label)

Label represents a generic name=value label. Label has separate name and value fields to support filtering with contains().

Protobuf type `google.cloud.securitycenter.v1.Label`

### [Label.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.Label.Builder)

Label represents a generic name=value label. Label has separate name and value fields to support filtering with contains().

Protobuf type `google.cloud.securitycenter.v1.Label`

### [LabelProto](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.LabelProto)

### [ListAssetsRequest](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.ListAssetsRequest)

Request message for listing assets.

Protobuf type `google.cloud.securitycenter.v1.ListAssetsRequest`

### [ListAssetsRequest.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.ListAssetsRequest.Builder)

Request message for listing assets.

Protobuf type `google.cloud.securitycenter.v1.ListAssetsRequest`

### [ListAssetsResponse](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.ListAssetsResponse)

Response message for listing assets.

Protobuf type `google.cloud.securitycenter.v1.ListAssetsResponse`

### [ListAssetsResponse.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.ListAssetsResponse.Builder)

Response message for listing assets.

Protobuf type `google.cloud.securitycenter.v1.ListAssetsResponse`

### [ListAssetsResponse.ListAssetsResult](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.ListAssetsResponse.ListAssetsResult)

Result containing the Asset and its State.

Protobuf type `google.cloud.securitycenter.v1.ListAssetsResponse.ListAssetsResult`

### [ListAssetsResponse.ListAssetsResult.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.ListAssetsResponse.ListAssetsResult.Builder)

Result containing the Asset and its State.

Protobuf type `google.cloud.securitycenter.v1.ListAssetsResponse.ListAssetsResult`

### [ListBigQueryExportsRequest](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.ListBigQueryExportsRequest)

Request message for listing BigQuery exports at a given scope e.g. organization, folder or project.

Protobuf type `google.cloud.securitycenter.v1.ListBigQueryExportsRequest`

### [ListBigQueryExportsRequest.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.ListBigQueryExportsRequest.Builder)

Request message for listing BigQuery exports at a given scope e.g. organization, folder or project.

Protobuf type `google.cloud.securitycenter.v1.ListBigQueryExportsRequest`

### [ListBigQueryExportsResponse](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.ListBigQueryExportsResponse)

Response message for listing BigQuery exports.

Protobuf type `google.cloud.securitycenter.v1.ListBigQueryExportsResponse`

### [ListBigQueryExportsResponse.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.ListBigQueryExportsResponse.Builder)

Response message for listing BigQuery exports.

Protobuf type `google.cloud.securitycenter.v1.ListBigQueryExportsResponse`

### [ListFindingsRequest](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.ListFindingsRequest)

Request message for listing findings.

Protobuf type `google.cloud.securitycenter.v1.ListFindingsRequest`

### [ListFindingsRequest.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.ListFindingsRequest.Builder)

Request message for listing findings.

Protobuf type `google.cloud.securitycenter.v1.ListFindingsRequest`

### [ListFindingsResponse](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.ListFindingsResponse)

Response message for listing findings.

Protobuf type `google.cloud.securitycenter.v1.ListFindingsResponse`

### [ListFindingsResponse.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.ListFindingsResponse.Builder)

Response message for listing findings.

Protobuf type `google.cloud.securitycenter.v1.ListFindingsResponse`

### [ListFindingsResponse.ListFindingsResult](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.ListFindingsResponse.ListFindingsResult)

Result containing the Finding and its StateChange.

Protobuf type `google.cloud.securitycenter.v1.ListFindingsResponse.ListFindingsResult`

### [ListFindingsResponse.ListFindingsResult.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.ListFindingsResponse.ListFindingsResult.Builder)

Result containing the Finding and its StateChange.

Protobuf type `google.cloud.securitycenter.v1.ListFindingsResponse.ListFindingsResult`

### [ListFindingsResponse.ListFindingsResult.Resource](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.ListFindingsResponse.ListFindingsResult.Resource)

Information related to the Google Cloud resource that is associated with this finding.

Protobuf type `google.cloud.securitycenter.v1.ListFindingsResponse.ListFindingsResult.Resource`

### [ListFindingsResponse.ListFindingsResult.Resource.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.ListFindingsResponse.ListFindingsResult.Resource.Builder)

Information related to the Google Cloud resource that is associated with this finding.

Protobuf type `google.cloud.securitycenter.v1.ListFindingsResponse.ListFindingsResult.Resource`

### [ListMuteConfigsRequest](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.ListMuteConfigsRequest)

Request message for listing mute configs at a given scope e.g. organization, folder or project.

Protobuf type `google.cloud.securitycenter.v1.ListMuteConfigsRequest`

### [ListMuteConfigsRequest.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.ListMuteConfigsRequest.Builder)

Request message for listing mute configs at a given scope e.g. organization, folder or project.

Protobuf type `google.cloud.securitycenter.v1.ListMuteConfigsRequest`

### [ListMuteConfigsResponse](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.ListMuteConfigsResponse)

Response message for listing mute configs.

Protobuf type `google.cloud.securitycenter.v1.ListMuteConfigsResponse`

### [ListMuteConfigsResponse.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.ListMuteConfigsResponse.Builder)

Response message for listing mute configs.

Protobuf type `google.cloud.securitycenter.v1.ListMuteConfigsResponse`

### [ListNotificationConfigsRequest](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.ListNotificationConfigsRequest)

Request message for listing notification configs.

Protobuf type `google.cloud.securitycenter.v1.ListNotificationConfigsRequest`

### [ListNotificationConfigsRequest.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.ListNotificationConfigsRequest.Builder)

Request message for listing notification configs.

Protobuf type `google.cloud.securitycenter.v1.ListNotificationConfigsRequest`

### [ListNotificationConfigsResponse](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.ListNotificationConfigsResponse)

Response message for listing notification configs.

Protobuf type `google.cloud.securitycenter.v1.ListNotificationConfigsResponse`

### [ListNotificationConfigsResponse.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.ListNotificationConfigsResponse.Builder)

Response message for listing notification configs.

Protobuf type `google.cloud.securitycenter.v1.ListNotificationConfigsResponse`

### [ListSourcesRequest](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.ListSourcesRequest)

Request message for listing sources.

Protobuf type `google.cloud.securitycenter.v1.ListSourcesRequest`

### [ListSourcesRequest.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.ListSourcesRequest.Builder)

Request message for listing sources.

Protobuf type `google.cloud.securitycenter.v1.ListSourcesRequest`

### [ListSourcesResponse](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.ListSourcesResponse)

Response message for listing sources.

Protobuf type `google.cloud.securitycenter.v1.ListSourcesResponse`

### [ListSourcesResponse.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.ListSourcesResponse.Builder)

Response message for listing sources.

Protobuf type `google.cloud.securitycenter.v1.ListSourcesResponse`

### [MitreAttack](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.MitreAttack)

MITRE ATT&CK tactics and techniques related to this finding. See: [https://attack.mitre.org](https://attack.mitre.org)

Protobuf type `google.cloud.securitycenter.v1.MitreAttack`

### [MitreAttack.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.MitreAttack.Builder)

MITRE ATT&CK tactics and techniques related to this finding. See: [https://attack.mitre.org](https://attack.mitre.org)

Protobuf type `google.cloud.securitycenter.v1.MitreAttack`

### [MitreAttackProto](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.MitreAttackProto)

### [MuteConfig](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.MuteConfig)

A mute config is a Cloud SCC resource that contains the configuration to mute create/update events of findings.

Protobuf type `google.cloud.securitycenter.v1.MuteConfig`

### [MuteConfig.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.MuteConfig.Builder)

A mute config is a Cloud SCC resource that contains the configuration to mute create/update events of findings.

Protobuf type `google.cloud.securitycenter.v1.MuteConfig`

### [MuteConfigName](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.MuteConfigName)

### [MuteConfigName.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.MuteConfigName.Builder)

Builder for organizations/{organization}/muteConfigs/{mute\_config}.

### [MuteConfigName.FolderMuteConfigBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.MuteConfigName.FolderMuteConfigBuilder)

Builder for folders/{folder}/muteConfigs/{mute\_config}.

### [MuteConfigName.ProjectMuteConfigBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.MuteConfigName.ProjectMuteConfigBuilder)

Builder for projects/{project}/muteConfigs/{mute\_config}.

### [MuteConfigProto](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.MuteConfigProto)

### [NotificationConfig](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.NotificationConfig)

Cloud Security Command Center (Cloud SCC) notification configs. A notification config is a Cloud SCC resource that contains the configuration to send notifications for create/update events of findings, assets and etc.

Protobuf type `google.cloud.securitycenter.v1.NotificationConfig`

### [NotificationConfig.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.NotificationConfig.Builder)

Cloud Security Command Center (Cloud SCC) notification configs. A notification config is a Cloud SCC resource that contains the configuration to send notifications for create/update events of findings, assets and etc.

Protobuf type `google.cloud.securitycenter.v1.NotificationConfig`

### [NotificationConfig.StreamingConfig](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.NotificationConfig.StreamingConfig)

The config for streaming-based notifications, which send each event as soon as it is detected.

Protobuf type `google.cloud.securitycenter.v1.NotificationConfig.StreamingConfig`

### [NotificationConfig.StreamingConfig.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.NotificationConfig.StreamingConfig.Builder)

The config for streaming-based notifications, which send each event as soon as it is detected.

Protobuf type `google.cloud.securitycenter.v1.NotificationConfig.StreamingConfig`

### [NotificationConfigName](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.NotificationConfigName)

### [NotificationConfigName.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.NotificationConfigName.Builder)

Builder for organizations/{organization}/notificationConfigs/{notification\_config}.

### [NotificationConfigName.FolderNotificationConfigBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.NotificationConfigName.FolderNotificationConfigBuilder)

Builder for folders/{folder}/notificationConfigs/{notification\_config}.

### [NotificationConfigName.ProjectNotificationConfigBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.NotificationConfigName.ProjectNotificationConfigBuilder)

Builder for projects/{project}/notificationConfigs/{notification\_config}.

### [NotificationConfigProto](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.NotificationConfigProto)

### [NotificationMessage](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.NotificationMessage)

Cloud SCC's Notification

Protobuf type `google.cloud.securitycenter.v1.NotificationMessage`

### [NotificationMessage.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.NotificationMessage.Builder)

Cloud SCC's Notification

Protobuf type `google.cloud.securitycenter.v1.NotificationMessage`

### [NotificationMessageProto](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.NotificationMessageProto)

### [OrganizationName](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.OrganizationName)

### [OrganizationName.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.OrganizationName.Builder)

Builder for organizations/{organization}.

### [OrganizationSettings](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.OrganizationSettings)

User specified settings that are attached to the Security Command Center organization.

Protobuf type `google.cloud.securitycenter.v1.OrganizationSettings`

### [OrganizationSettings.AssetDiscoveryConfig](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.OrganizationSettings.AssetDiscoveryConfig)

The configuration used for Asset Discovery runs.

Protobuf type `google.cloud.securitycenter.v1.OrganizationSettings.AssetDiscoveryConfig`

### [OrganizationSettings.AssetDiscoveryConfig.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.OrganizationSettings.AssetDiscoveryConfig.Builder)

The configuration used for Asset Discovery runs.

Protobuf type `google.cloud.securitycenter.v1.OrganizationSettings.AssetDiscoveryConfig`

### [OrganizationSettings.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.OrganizationSettings.Builder)

User specified settings that are attached to the Security Command Center organization.

Protobuf type `google.cloud.securitycenter.v1.OrganizationSettings`

### [OrganizationSettingsName](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.OrganizationSettingsName)

### [OrganizationSettingsName.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.OrganizationSettingsName.Builder)

Builder for organizations/{organization}/organizationSettings.

### [OrganizationSettingsOuterClass](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.OrganizationSettingsOuterClass)

### [Process](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.Process)

Represents an operating system process.

Protobuf type `google.cloud.securitycenter.v1.Process`

### [Process.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.Process.Builder)

Represents an operating system process.

Protobuf type `google.cloud.securitycenter.v1.Process`

### [ProcessProto](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.ProcessProto)

### [ProjectName](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.ProjectName)

### [ProjectName.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.ProjectName.Builder)

Builder for projects/{project}.

### [Reference](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.Reference)

Additional Links

Protobuf type `google.cloud.securitycenter.v1.Reference`

### [Reference.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.Reference.Builder)

Additional Links

Protobuf type `google.cloud.securitycenter.v1.Reference`

### [Resource](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.Resource)

Information related to the Google Cloud resource.

Protobuf type `google.cloud.securitycenter.v1.Resource`

### [Resource.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.Resource.Builder)

Information related to the Google Cloud resource.

Protobuf type `google.cloud.securitycenter.v1.Resource`

### [ResourceProto](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.ResourceProto)

### [RunAssetDiscoveryRequest](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.RunAssetDiscoveryRequest)

Request message for running asset discovery for an organization.

Protobuf type `google.cloud.securitycenter.v1.RunAssetDiscoveryRequest`

### [RunAssetDiscoveryRequest.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.RunAssetDiscoveryRequest.Builder)

Request message for running asset discovery for an organization.

Protobuf type `google.cloud.securitycenter.v1.RunAssetDiscoveryRequest`

### [RunAssetDiscoveryResponse](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.RunAssetDiscoveryResponse)

Response of asset discovery run

Protobuf type `google.cloud.securitycenter.v1.RunAssetDiscoveryResponse`

### [RunAssetDiscoveryResponse.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.RunAssetDiscoveryResponse.Builder)

Response of asset discovery run

Protobuf type `google.cloud.securitycenter.v1.RunAssetDiscoveryResponse`

### [RunAssetDiscoveryResponseOuterClass](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.RunAssetDiscoveryResponseOuterClass)

### [SecurityCenterClient](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.SecurityCenterClient)

Service Description: V1 APIs for Security Center service.

This class provides the ability to make remote calls to the backing service through method calls that map to API methods. Sample code to get started:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
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

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 SecurityCenterSettings securityCenterSettings =
     SecurityCenterSettings.newBuilder()
         .setCredentialsProvider(FixedCredentialsProvider.create(myCredentials))
         .build();
 SecurityCenterClient securityCenterClient = SecurityCenterClient.create(securityCenterSettings);
 
```
 

To customize the endpoint:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 SecurityCenterSettings securityCenterSettings =
     SecurityCenterSettings.newBuilder().setEndpoint(myEndpoint).build();
 SecurityCenterClient securityCenterClient = SecurityCenterClient.create(securityCenterSettings);
 
```
 

To use REST (HTTP1.1/JSON) transport (instead of gRPC) for sending and receiving requests over the wire:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 SecurityCenterSettings securityCenterSettings =
     SecurityCenterSettings.newHttpJsonBuilder().build();
 SecurityCenterClient securityCenterClient = SecurityCenterClient.create(securityCenterSettings);
 
```
 

Please refer to the GitHub repository's samples for more quickstart code snippets.

### [SecurityCenterClient.GroupAssetsFixedSizeCollection](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.SecurityCenterClient.GroupAssetsFixedSizeCollection)

### [SecurityCenterClient.GroupAssetsPage](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.SecurityCenterClient.GroupAssetsPage)

### [SecurityCenterClient.GroupAssetsPagedResponse](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.SecurityCenterClient.GroupAssetsPagedResponse)

### [SecurityCenterClient.GroupFindingsFixedSizeCollection](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.SecurityCenterClient.GroupFindingsFixedSizeCollection)

### [SecurityCenterClient.GroupFindingsPage](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.SecurityCenterClient.GroupFindingsPage)

### [SecurityCenterClient.GroupFindingsPagedResponse](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.SecurityCenterClient.GroupFindingsPagedResponse)

### [SecurityCenterClient.ListAssetsFixedSizeCollection](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.SecurityCenterClient.ListAssetsFixedSizeCollection)

### [SecurityCenterClient.ListAssetsPage](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.SecurityCenterClient.ListAssetsPage)

### [SecurityCenterClient.ListAssetsPagedResponse](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.SecurityCenterClient.ListAssetsPagedResponse)

### [SecurityCenterClient.ListBigQueryExportsFixedSizeCollection](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.SecurityCenterClient.ListBigQueryExportsFixedSizeCollection)

### [SecurityCenterClient.ListBigQueryExportsPage](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.SecurityCenterClient.ListBigQueryExportsPage)

### [SecurityCenterClient.ListBigQueryExportsPagedResponse](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.SecurityCenterClient.ListBigQueryExportsPagedResponse)

### [SecurityCenterClient.ListFindingsFixedSizeCollection](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.SecurityCenterClient.ListFindingsFixedSizeCollection)

### [SecurityCenterClient.ListFindingsPage](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.SecurityCenterClient.ListFindingsPage)

### [SecurityCenterClient.ListFindingsPagedResponse](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.SecurityCenterClient.ListFindingsPagedResponse)

### [SecurityCenterClient.ListMuteConfigsFixedSizeCollection](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.SecurityCenterClient.ListMuteConfigsFixedSizeCollection)

### [SecurityCenterClient.ListMuteConfigsPage](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.SecurityCenterClient.ListMuteConfigsPage)

### [SecurityCenterClient.ListMuteConfigsPagedResponse](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.SecurityCenterClient.ListMuteConfigsPagedResponse)

### [SecurityCenterClient.ListNotificationConfigsFixedSizeCollection](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.SecurityCenterClient.ListNotificationConfigsFixedSizeCollection)

### [SecurityCenterClient.ListNotificationConfigsPage](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.SecurityCenterClient.ListNotificationConfigsPage)

### [SecurityCenterClient.ListNotificationConfigsPagedResponse](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.SecurityCenterClient.ListNotificationConfigsPagedResponse)

### [SecurityCenterClient.ListSourcesFixedSizeCollection](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.SecurityCenterClient.ListSourcesFixedSizeCollection)

### [SecurityCenterClient.ListSourcesPage](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.SecurityCenterClient.ListSourcesPage)

### [SecurityCenterClient.ListSourcesPagedResponse](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.SecurityCenterClient.ListSourcesPagedResponse)

### [SecurityCenterGrpc](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.SecurityCenterGrpc)

V1 APIs for Security Center service.

### [SecurityCenterGrpc.SecurityCenterBlockingStub](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.SecurityCenterGrpc.SecurityCenterBlockingStub)

V1 APIs for Security Center service.

### [SecurityCenterGrpc.SecurityCenterFutureStub](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.SecurityCenterGrpc.SecurityCenterFutureStub)

V1 APIs for Security Center service.

### [SecurityCenterGrpc.SecurityCenterImplBase](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.SecurityCenterGrpc.SecurityCenterImplBase)

V1 APIs for Security Center service.

### [SecurityCenterGrpc.SecurityCenterStub](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.SecurityCenterGrpc.SecurityCenterStub)

V1 APIs for Security Center service.

### [SecurityCenterSettings](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.SecurityCenterSettings)

Settings class to configure an instance of [SecurityCenterClient](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1p1beta1.SecurityCenterClient).

The default instance has everything set to sensible defaults:

-   The default service address (securitycenter.googleapis.com) and default port (443) are used.
-   Credentials are acquired automatically through Application Default Credentials.
-   Retries are configured for idempotent methods but not for non-idempotent methods.

The builder of this class is recursive, so contained classes are themselves builders. When build() is called, the tree of builders is called to create the complete settings object.

For example, to set the total timeout of createSource to 30 seconds:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
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
 

### [SecurityCenterSettings.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.SecurityCenterSettings.Builder)

Builder for SecurityCenterSettings.

### [SecurityMarks](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.SecurityMarks)

User specified security marks that are attached to the parent Security Command Center resource. Security marks are scoped within a Security Command Center organization -- they can be modified and viewed by all users who have proper permissions on the organization.

Protobuf type `google.cloud.securitycenter.v1.SecurityMarks`

### [SecurityMarks.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.SecurityMarks.Builder)

User specified security marks that are attached to the parent Security Command Center resource. Security marks are scoped within a Security Command Center organization -- they can be modified and viewed by all users who have proper permissions on the organization.

Protobuf type `google.cloud.securitycenter.v1.SecurityMarks`

### [SecurityMarksOuterClass](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.SecurityMarksOuterClass)

### [SecuritycenterService](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.SecuritycenterService)

### [ServiceAccountDelegationInfo](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.ServiceAccountDelegationInfo)

Identity delegation history of an authenticated service account.

Protobuf type `google.cloud.securitycenter.v1.ServiceAccountDelegationInfo`

### [ServiceAccountDelegationInfo.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.ServiceAccountDelegationInfo.Builder)

Identity delegation history of an authenticated service account.

Protobuf type `google.cloud.securitycenter.v1.ServiceAccountDelegationInfo`

### [SetFindingStateRequest](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.SetFindingStateRequest)

Request message for updating a finding's state.

Protobuf type `google.cloud.securitycenter.v1.SetFindingStateRequest`

### [SetFindingStateRequest.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.SetFindingStateRequest.Builder)

Request message for updating a finding's state.

Protobuf type `google.cloud.securitycenter.v1.SetFindingStateRequest`

### [SetMuteRequest](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.SetMuteRequest)

Request message for updating a finding's mute status.

Protobuf type `google.cloud.securitycenter.v1.SetMuteRequest`

### [SetMuteRequest.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.SetMuteRequest.Builder)

Request message for updating a finding's mute status.

Protobuf type `google.cloud.securitycenter.v1.SetMuteRequest`

### [Source](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.Source)

Security Command Center finding source. A finding source is an entity or a mechanism that can produce a finding. A source is like a container of findings that come from the same scanner, logger, monitor, and other tools.

Protobuf type `google.cloud.securitycenter.v1.Source`

### [Source.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.Source.Builder)

Security Command Center finding source. A finding source is an entity or a mechanism that can produce a finding. A source is like a container of findings that come from the same scanner, logger, monitor, and other tools.

Protobuf type `google.cloud.securitycenter.v1.Source`

### [SourceName](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.SourceName)

### [SourceName.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.SourceName.Builder)

Builder for organizations/{organization}/sources/{source}.

### [SourceName.FolderSourceBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.SourceName.FolderSourceBuilder)

Builder for folders/{folder}/sources/{source}.

### [SourceName.ProjectSourceBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.SourceName.ProjectSourceBuilder)

Builder for projects/{project}/sources/{source}.

### [SourceOuterClass](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.SourceOuterClass)

### [UpdateBigQueryExportRequest](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.UpdateBigQueryExportRequest)

Request message for updating a BigQuery export.

Protobuf type `google.cloud.securitycenter.v1.UpdateBigQueryExportRequest`

### [UpdateBigQueryExportRequest.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.UpdateBigQueryExportRequest.Builder)

Request message for updating a BigQuery export.

Protobuf type `google.cloud.securitycenter.v1.UpdateBigQueryExportRequest`

### [UpdateExternalSystemRequest](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.UpdateExternalSystemRequest)

Request message for updating a ExternalSystem resource.

Protobuf type `google.cloud.securitycenter.v1.UpdateExternalSystemRequest`

### [UpdateExternalSystemRequest.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.UpdateExternalSystemRequest.Builder)

Request message for updating a ExternalSystem resource.

Protobuf type `google.cloud.securitycenter.v1.UpdateExternalSystemRequest`

### [UpdateFindingRequest](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.UpdateFindingRequest)

Request message for updating or creating a finding.

Protobuf type `google.cloud.securitycenter.v1.UpdateFindingRequest`

### [UpdateFindingRequest.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.UpdateFindingRequest.Builder)

Request message for updating or creating a finding.

Protobuf type `google.cloud.securitycenter.v1.UpdateFindingRequest`

### [UpdateMuteConfigRequest](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.UpdateMuteConfigRequest)

Request message for updating a mute config.

Protobuf type `google.cloud.securitycenter.v1.UpdateMuteConfigRequest`

### [UpdateMuteConfigRequest.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.UpdateMuteConfigRequest.Builder)

Request message for updating a mute config.

Protobuf type `google.cloud.securitycenter.v1.UpdateMuteConfigRequest`

### [UpdateNotificationConfigRequest](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.UpdateNotificationConfigRequest)

Request message for updating a notification config.

Protobuf type `google.cloud.securitycenter.v1.UpdateNotificationConfigRequest`

### [UpdateNotificationConfigRequest.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.UpdateNotificationConfigRequest.Builder)

Request message for updating a notification config.

Protobuf type `google.cloud.securitycenter.v1.UpdateNotificationConfigRequest`

### [UpdateOrganizationSettingsRequest](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.UpdateOrganizationSettingsRequest)

Request message for updating an organization's settings.

Protobuf type `google.cloud.securitycenter.v1.UpdateOrganizationSettingsRequest`

### [UpdateOrganizationSettingsRequest.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.UpdateOrganizationSettingsRequest.Builder)

Request message for updating an organization's settings.

Protobuf type `google.cloud.securitycenter.v1.UpdateOrganizationSettingsRequest`

### [UpdateSecurityMarksRequest](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.UpdateSecurityMarksRequest)

Request message for updating a SecurityMarks resource.

Protobuf type `google.cloud.securitycenter.v1.UpdateSecurityMarksRequest`

### [UpdateSecurityMarksRequest.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.UpdateSecurityMarksRequest.Builder)

Request message for updating a SecurityMarks resource.

Protobuf type `google.cloud.securitycenter.v1.UpdateSecurityMarksRequest`

### [UpdateSourceRequest](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.UpdateSourceRequest)

Request message for updating a source.

Protobuf type `google.cloud.securitycenter.v1.UpdateSourceRequest`

### [UpdateSourceRequest.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.UpdateSourceRequest.Builder)

Request message for updating a source.

Protobuf type `google.cloud.securitycenter.v1.UpdateSourceRequest`

### [Vulnerability](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.Vulnerability)

Refers to common vulnerability fields e.g. cve, cvss, cwe etc.

Protobuf type `google.cloud.securitycenter.v1.Vulnerability`

### [Vulnerability.Builder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.Vulnerability.Builder)

Refers to common vulnerability fields e.g. cve, cvss, cwe etc.

Protobuf type `google.cloud.securitycenter.v1.Vulnerability`

### [VulnerabilityProto](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.VulnerabilityProto)

## Interfaces

### [AccessOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.AccessOrBuilder)

### [Asset.IamPolicyOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.Asset.IamPolicyOrBuilder)

### [Asset.SecurityCenterPropertiesOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.Asset.SecurityCenterPropertiesOrBuilder)

### [AssetOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.AssetOrBuilder)

### [BigQueryExportOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.BigQueryExportOrBuilder)

### [BulkMuteFindingsRequestOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.BulkMuteFindingsRequestOrBuilder)

### [BulkMuteFindingsResponseOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.BulkMuteFindingsResponseOrBuilder)

### [ComplianceOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.ComplianceOrBuilder)

### [ConnectionOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.ConnectionOrBuilder)

### [ContactDetailsOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.ContactDetailsOrBuilder)

### [ContactOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.ContactOrBuilder)

### [ContainerOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.ContainerOrBuilder)

### [CreateBigQueryExportRequestOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.CreateBigQueryExportRequestOrBuilder)

### [CreateFindingRequestOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.CreateFindingRequestOrBuilder)

### [CreateMuteConfigRequestOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.CreateMuteConfigRequestOrBuilder)

### [CreateNotificationConfigRequestOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.CreateNotificationConfigRequestOrBuilder)

### [CreateSourceRequestOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.CreateSourceRequestOrBuilder)

### [CveOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.CveOrBuilder)

### [Cvssv3OrBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.Cvssv3OrBuilder)

### [DatabaseOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.DatabaseOrBuilder)

### [DeleteBigQueryExportRequestOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.DeleteBigQueryExportRequestOrBuilder)

### [DeleteMuteConfigRequestOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.DeleteMuteConfigRequestOrBuilder)

### [DeleteNotificationConfigRequestOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.DeleteNotificationConfigRequestOrBuilder)

### [EnvironmentVariableOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.EnvironmentVariableOrBuilder)

### [ExfilResourceOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.ExfilResourceOrBuilder)

### [ExfiltrationOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.ExfiltrationOrBuilder)

### [ExternalSystemOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.ExternalSystemOrBuilder)

### [FileOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.FileOrBuilder)

### [FindingOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.FindingOrBuilder)

### [FolderOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.FolderOrBuilder)

### [GeolocationOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.GeolocationOrBuilder)

### [GetBigQueryExportRequestOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.GetBigQueryExportRequestOrBuilder)

### [GetMuteConfigRequestOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.GetMuteConfigRequestOrBuilder)

### [GetNotificationConfigRequestOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.GetNotificationConfigRequestOrBuilder)

### [GetOrganizationSettingsRequestOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.GetOrganizationSettingsRequestOrBuilder)

### [GetSourceRequestOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.GetSourceRequestOrBuilder)

### [GroupAssetsRequestOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.GroupAssetsRequestOrBuilder)

### [GroupAssetsResponseOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.GroupAssetsResponseOrBuilder)

### [GroupFindingsRequestOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.GroupFindingsRequestOrBuilder)

### [GroupFindingsResponseOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.GroupFindingsResponseOrBuilder)

### [GroupResultOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.GroupResultOrBuilder)

### [IamBindingOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.IamBindingOrBuilder)

### [Indicator.ProcessSignature.MemoryHashSignature.DetectionOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.Indicator.ProcessSignature.MemoryHashSignature.DetectionOrBuilder)

### [Indicator.ProcessSignature.MemoryHashSignatureOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.Indicator.ProcessSignature.MemoryHashSignatureOrBuilder)

### [Indicator.ProcessSignature.YaraRuleSignatureOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.Indicator.ProcessSignature.YaraRuleSignatureOrBuilder)

### [Indicator.ProcessSignatureOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.Indicator.ProcessSignatureOrBuilder)

### [IndicatorOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.IndicatorOrBuilder)

### [KernelRootkitOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.KernelRootkitOrBuilder)

### [Kubernetes.AccessReviewOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.Kubernetes.AccessReviewOrBuilder)

### [Kubernetes.BindingOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.Kubernetes.BindingOrBuilder)

### [Kubernetes.NodeOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.Kubernetes.NodeOrBuilder)

### [Kubernetes.NodePoolOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.Kubernetes.NodePoolOrBuilder)

### [Kubernetes.PodOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.Kubernetes.PodOrBuilder)

### [Kubernetes.RoleOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.Kubernetes.RoleOrBuilder)

### [Kubernetes.SubjectOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.Kubernetes.SubjectOrBuilder)

### [KubernetesOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.KubernetesOrBuilder)

### [LabelOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.LabelOrBuilder)

### [ListAssetsRequestOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.ListAssetsRequestOrBuilder)

### [ListAssetsResponse.ListAssetsResultOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.ListAssetsResponse.ListAssetsResultOrBuilder)

### [ListAssetsResponseOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.ListAssetsResponseOrBuilder)

### [ListBigQueryExportsRequestOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.ListBigQueryExportsRequestOrBuilder)

### [ListBigQueryExportsResponseOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.ListBigQueryExportsResponseOrBuilder)

### [ListFindingsRequestOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.ListFindingsRequestOrBuilder)

### [ListFindingsResponse.ListFindingsResult.ResourceOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.ListFindingsResponse.ListFindingsResult.ResourceOrBuilder)

### [ListFindingsResponse.ListFindingsResultOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.ListFindingsResponse.ListFindingsResultOrBuilder)

### [ListFindingsResponseOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.ListFindingsResponseOrBuilder)

### [ListMuteConfigsRequestOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.ListMuteConfigsRequestOrBuilder)

### [ListMuteConfigsResponseOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.ListMuteConfigsResponseOrBuilder)

### [ListNotificationConfigsRequestOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.ListNotificationConfigsRequestOrBuilder)

### [ListNotificationConfigsResponseOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.ListNotificationConfigsResponseOrBuilder)

### [ListSourcesRequestOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.ListSourcesRequestOrBuilder)

### [ListSourcesResponseOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.ListSourcesResponseOrBuilder)

### [MitreAttackOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.MitreAttackOrBuilder)

### [MuteConfigOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.MuteConfigOrBuilder)

### [NotificationConfig.StreamingConfigOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.NotificationConfig.StreamingConfigOrBuilder)

### [NotificationConfigOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.NotificationConfigOrBuilder)

### [NotificationMessageOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.NotificationMessageOrBuilder)

### [OrganizationSettings.AssetDiscoveryConfigOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.OrganizationSettings.AssetDiscoveryConfigOrBuilder)

### [OrganizationSettingsOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.OrganizationSettingsOrBuilder)

### [ProcessOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.ProcessOrBuilder)

### [ReferenceOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.ReferenceOrBuilder)

### [ResourceOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.ResourceOrBuilder)

### [RunAssetDiscoveryRequestOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.RunAssetDiscoveryRequestOrBuilder)

### [RunAssetDiscoveryResponseOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.RunAssetDiscoveryResponseOrBuilder)

### [SecurityMarksOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.SecurityMarksOrBuilder)

### [ServiceAccountDelegationInfoOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.ServiceAccountDelegationInfoOrBuilder)

### [SetFindingStateRequestOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.SetFindingStateRequestOrBuilder)

### [SetMuteRequestOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.SetMuteRequestOrBuilder)

### [SourceOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.SourceOrBuilder)

### [UpdateBigQueryExportRequestOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.UpdateBigQueryExportRequestOrBuilder)

### [UpdateExternalSystemRequestOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.UpdateExternalSystemRequestOrBuilder)

### [UpdateFindingRequestOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.UpdateFindingRequestOrBuilder)

### [UpdateMuteConfigRequestOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.UpdateMuteConfigRequestOrBuilder)

### [UpdateNotificationConfigRequestOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.UpdateNotificationConfigRequestOrBuilder)

### [UpdateOrganizationSettingsRequestOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.UpdateOrganizationSettingsRequestOrBuilder)

### [UpdateSecurityMarksRequestOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.UpdateSecurityMarksRequestOrBuilder)

### [UpdateSourceRequestOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.UpdateSourceRequestOrBuilder)

### [VulnerabilityOrBuilder](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.VulnerabilityOrBuilder)

## Enums

### [Connection.Protocol](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.Connection.Protocol)

IANA Internet Protocol Number such as TCP(6) and UDP(17).

Protobuf enum `google.cloud.securitycenter.v1.Connection.Protocol`

### [Cvssv3.AttackComplexity](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.Cvssv3.AttackComplexity)

This metric describes the conditions beyond the attacker's control that must exist in order to exploit the vulnerability.

Protobuf enum `google.cloud.securitycenter.v1.Cvssv3.AttackComplexity`

### [Cvssv3.AttackVector](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.Cvssv3.AttackVector)

This metric reflects the context by which vulnerability exploitation is possible.

Protobuf enum `google.cloud.securitycenter.v1.Cvssv3.AttackVector`

### [Cvssv3.Impact](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.Cvssv3.Impact)

The Impact metrics capture the effects of a successfully exploited vulnerability on the component that suffers the worst outcome that is most directly and predictably associated with the attack.

Protobuf enum `google.cloud.securitycenter.v1.Cvssv3.Impact`

### [Cvssv3.PrivilegesRequired](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.Cvssv3.PrivilegesRequired)

This metric describes the level of privileges an attacker must possess before successfully exploiting the vulnerability.

Protobuf enum `google.cloud.securitycenter.v1.Cvssv3.PrivilegesRequired`

### [Cvssv3.Scope](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.Cvssv3.Scope)

The Scope metric captures whether a vulnerability in one vulnerable component impacts resources in components beyond its security scope.

Protobuf enum `google.cloud.securitycenter.v1.Cvssv3.Scope`

### [Cvssv3.UserInteraction](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.Cvssv3.UserInteraction)

This metric captures the requirement for a human user, other than the attacker, to participate in the successful compromise of the vulnerable component.

Protobuf enum `google.cloud.securitycenter.v1.Cvssv3.UserInteraction`

### [Finding.FindingClass](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.Finding.FindingClass)

Represents what kind of Finding it is.

Protobuf enum `google.cloud.securitycenter.v1.Finding.FindingClass`

### [Finding.Mute](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.Finding.Mute)

Mute state a finding can be in.

Protobuf enum `google.cloud.securitycenter.v1.Finding.Mute`

### [Finding.Severity](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.Finding.Severity)

The severity of the finding.

Protobuf enum `google.cloud.securitycenter.v1.Finding.Severity`

### [Finding.State](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.Finding.State)

The state of the finding.

Protobuf enum `google.cloud.securitycenter.v1.Finding.State`

### [IamBinding.Action](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.IamBinding.Action)

The type of action performed on a Binding in a policy.

Protobuf enum `google.cloud.securitycenter.v1.IamBinding.Action`

### [Indicator.ProcessSignature.SignatureCase](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.Indicator.ProcessSignature.SignatureCase)

### [Kubernetes.Role.Kind](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.Kubernetes.Role.Kind)

Types of Kubernetes roles.

Protobuf enum `google.cloud.securitycenter.v1.Kubernetes.Role.Kind`

### [Kubernetes.Subject.AuthType](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.Kubernetes.Subject.AuthType)

Auth types that can be used for Subject's kind field.

Protobuf enum `google.cloud.securitycenter.v1.Kubernetes.Subject.AuthType`

### [ListAssetsResponse.ListAssetsResult.StateChange](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.ListAssetsResponse.ListAssetsResult.StateChange)

The change in state of the asset. When querying across two points in time this describes the change between the two points: ADDED, REMOVED, or ACTIVE. If there was no compare\_duration supplied in the request the state change will be: UNUSED

Protobuf enum `google.cloud.securitycenter.v1.ListAssetsResponse.ListAssetsResult.StateChange`

### [ListFindingsResponse.ListFindingsResult.StateChange](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.ListFindingsResponse.ListFindingsResult.StateChange)

The change in state of the finding. When querying across two points in time this describes the change in the finding between the two points: CHANGED, UNCHANGED, ADDED, or REMOVED. Findings can not be deleted, so REMOVED implies that the finding at timestamp does not match the filter specified, but it did at timestamp - compare\_duration. If there was no compare\_duration supplied in the request the state change will be: UNUSED

Protobuf enum `google.cloud.securitycenter.v1.ListFindingsResponse.ListFindingsResult.StateChange`

### [MitreAttack.Tactic](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.MitreAttack.Tactic)

MITRE ATT&CK tactics that can be referenced by SCC findings. See: [https://attack.mitre.org/tactics/enterprise/](https://attack.mitre.org/tactics/enterprise/)

Protobuf enum `google.cloud.securitycenter.v1.MitreAttack.Tactic`

### [MitreAttack.Technique](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.MitreAttack.Technique)

MITRE ATT&CK techniques that can be referenced by SCC findings. See: [https://attack.mitre.org/techniques/enterprise/](https://attack.mitre.org/techniques/enterprise/)

Protobuf enum `google.cloud.securitycenter.v1.MitreAttack.Technique`

### [NotificationConfig.NotifyConfigCase](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.NotificationConfig.NotifyConfigCase)

### [NotificationMessage.EventCase](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.NotificationMessage.EventCase)

### [OrganizationSettings.AssetDiscoveryConfig.InclusionMode](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.OrganizationSettings.AssetDiscoveryConfig.InclusionMode)

The mode of inclusion when running Asset Discovery. Asset discovery can be limited by explicitly identifying projects to be included or excluded. If INCLUDE\_ONLY is set, then only those projects within the organization and their children are discovered during asset discovery. If EXCLUDE is set, then projects that don't match those projects are discovered during asset discovery. If neither are set, then all projects within the organization are discovered during asset discovery.

Protobuf enum `google.cloud.securitycenter.v1.OrganizationSettings.AssetDiscoveryConfig.InclusionMode`

### [RunAssetDiscoveryResponse.State](/java/docs/reference/google-cloud-securitycenter/2.16.0/com.google.cloud.securitycenter.v1.RunAssetDiscoveryResponse.State)

The state of an asset discovery run.

Protobuf enum `google.cloud.securitycenter.v1.RunAssetDiscoveryResponse.State`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
