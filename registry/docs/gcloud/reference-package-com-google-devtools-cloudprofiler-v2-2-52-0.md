-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback Stay organized with collections Save and categorize content based on your preferences.

2.87.0 (latest) 2.85.0 2.83.0 2.82.0 2.80.0 2.78.0 2.76.0 2.75.0 2.74.0 2.73.0 2.72.0 2.70.0 2.68.0 2.67.0 2.64.0 2.63.0 2.62.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.51.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.5 2.2.0 2.1.10

# Package com.google.devtools.cloudprofiler.v2 (2.52.0)

[GitHub Repository](https://github.com/googleapis/google-cloud-java/tree/main/java-profiler/google-cloud-profiler/src/main/java/com/google/devtools/cloudprofiler/v2)

## Client Classes

Client classes are the main entry point to using a package. They contain several variations of Java methods for each of the API's methods.

Client

Description

[com.google.devtools.cloudprofiler.v2.ExportServiceClient](https://cloud.google.com/java/docs/reference/google-cloud-profiler/latest/com.google.devtools.cloudprofiler.v2.ExportServiceClient)

Service Description: Service allows existing Cloud Profiler customers to export their profile data out of Google Cloud.

This class provides the ability to make remote calls to the backing service through method

[com.google.devtools.cloudprofiler.v2.ProfilerServiceClient](https://cloud.google.com/java/docs/reference/google-cloud-profiler/latest/com.google.devtools.cloudprofiler.v2.ProfilerServiceClient)

Service Description: Manage the collection of continuous profiling data provided by profiling agents running in the cloud or by an offline provider of profiling data.

**The APIs listed in this service are intended for use within our profiler agents only.**

## Settings Classes

Settings classes can be used to configure credentials, endpoints, and retry settings for a Client.

Settings

Description

[com.google.devtools.cloudprofiler.v2.ExportServiceSettings](https://cloud.google.com/java/docs/reference/google-cloud-profiler/latest/com.google.devtools.cloudprofiler.v2.ExportServiceSettings)

Settings class to configure an instance of ExportServiceClient.

The default instance has everything set to sensible defaults:

[com.google.devtools.cloudprofiler.v2.ProfilerServiceSettings](https://cloud.google.com/java/docs/reference/google-cloud-profiler/latest/com.google.devtools.cloudprofiler.v2.ProfilerServiceSettings)

Settings class to configure an instance of ProfilerServiceClient.

The default instance has everything set to sensible defaults:

## Classes

Class

Description

[com.google.devtools.cloudprofiler.v2.CreateOfflineProfileRequest](https://cloud.google.com/java/docs/reference/google-cloud-profiler/latest/com.google.devtools.cloudprofiler.v2.CreateOfflineProfileRequest)

CreateOfflineProfileRequest describes a profile resource offline creation request.

[com.google.devtools.cloudprofiler.v2.CreateOfflineProfileRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-profiler/latest/com.google.devtools.cloudprofiler.v2.CreateOfflineProfileRequest.Builder)

CreateOfflineProfileRequest describes a profile resource offline creation request.

[com.google.devtools.cloudprofiler.v2.CreateProfileRequest](https://cloud.google.com/java/docs/reference/google-cloud-profiler/latest/com.google.devtools.cloudprofiler.v2.CreateProfileRequest)

CreateProfileRequest describes a profile resource online creation request. The deployment field must be populated. The profile\_type specifies the list of profile types supported by the agent. The creation call will hang until a

[com.google.devtools.cloudprofiler.v2.CreateProfileRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-profiler/latest/com.google.devtools.cloudprofiler.v2.CreateProfileRequest.Builder)

CreateProfileRequest describes a profile resource online creation request. The deployment field must be populated. The profile\_type specifies the list of profile types supported by the agent. The creation call will hang until a

[com.google.devtools.cloudprofiler.v2.Deployment](https://cloud.google.com/java/docs/reference/google-cloud-profiler/latest/com.google.devtools.cloudprofiler.v2.Deployment)

Deployment contains the deployment identification information.

[com.google.devtools.cloudprofiler.v2.Deployment.Builder](https://cloud.google.com/java/docs/reference/google-cloud-profiler/latest/com.google.devtools.cloudprofiler.v2.Deployment.Builder)

Deployment contains the deployment identification information.

[com.google.devtools.cloudprofiler.v2.ExportServiceClient.ListProfilesFixedSizeCollection](https://cloud.google.com/java/docs/reference/google-cloud-profiler/latest/com.google.devtools.cloudprofiler.v2.ExportServiceClient.ListProfilesFixedSizeCollection)

[com.google.devtools.cloudprofiler.v2.ExportServiceClient.ListProfilesPage](https://cloud.google.com/java/docs/reference/google-cloud-profiler/latest/com.google.devtools.cloudprofiler.v2.ExportServiceClient.ListProfilesPage)

[com.google.devtools.cloudprofiler.v2.ExportServiceClient.ListProfilesPagedResponse](https://cloud.google.com/java/docs/reference/google-cloud-profiler/latest/com.google.devtools.cloudprofiler.v2.ExportServiceClient.ListProfilesPagedResponse)

[com.google.devtools.cloudprofiler.v2.ExportServiceGrpc](https://cloud.google.com/java/docs/reference/google-cloud-profiler/latest/com.google.devtools.cloudprofiler.v2.ExportServiceGrpc)

Service allows existing Cloud Profiler customers to export their profile data out of Google Cloud.

[com.google.devtools.cloudprofiler.v2.ExportServiceGrpc.ExportServiceImplBase](https://cloud.google.com/java/docs/reference/google-cloud-profiler/latest/com.google.devtools.cloudprofiler.v2.ExportServiceGrpc.ExportServiceImplBase)

Base class for the server implementation of the service ExportService. Service allows existing Cloud Profiler customers to export their profile data

[com.google.devtools.cloudprofiler.v2.ExportServiceSettings.Builder](https://cloud.google.com/java/docs/reference/google-cloud-profiler/latest/com.google.devtools.cloudprofiler.v2.ExportServiceSettings.Builder)

Builder for ExportServiceSettings.

[com.google.devtools.cloudprofiler.v2.ListProfilesRequest](https://cloud.google.com/java/docs/reference/google-cloud-profiler/latest/com.google.devtools.cloudprofiler.v2.ListProfilesRequest)

ListProfilesRequest contains request parameters for listing profiles for deployments in projects which the user has permissions to view.

[com.google.devtools.cloudprofiler.v2.ListProfilesRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-profiler/latest/com.google.devtools.cloudprofiler.v2.ListProfilesRequest.Builder)

ListProfilesRequest contains request parameters for listing profiles for deployments in projects which the user has permissions to view.

[com.google.devtools.cloudprofiler.v2.ListProfilesResponse](https://cloud.google.com/java/docs/reference/google-cloud-profiler/latest/com.google.devtools.cloudprofiler.v2.ListProfilesResponse)

ListProfileResponse contains the list of collected profiles for deployments in projects which the user has permissions to view.

[com.google.devtools.cloudprofiler.v2.ListProfilesResponse.Builder](https://cloud.google.com/java/docs/reference/google-cloud-profiler/latest/com.google.devtools.cloudprofiler.v2.ListProfilesResponse.Builder)

ListProfileResponse contains the list of collected profiles for deployments in projects which the user has permissions to view.

[com.google.devtools.cloudprofiler.v2.Profile](https://cloud.google.com/java/docs/reference/google-cloud-profiler/latest/com.google.devtools.cloudprofiler.v2.Profile)

Profile resource.

[com.google.devtools.cloudprofiler.v2.Profile.Builder](https://cloud.google.com/java/docs/reference/google-cloud-profiler/latest/com.google.devtools.cloudprofiler.v2.Profile.Builder)

Profile resource.

[com.google.devtools.cloudprofiler.v2.ProfilerProto](https://cloud.google.com/java/docs/reference/google-cloud-profiler/latest/com.google.devtools.cloudprofiler.v2.ProfilerProto)

[com.google.devtools.cloudprofiler.v2.ProfilerServiceGrpc](https://cloud.google.com/java/docs/reference/google-cloud-profiler/latest/com.google.devtools.cloudprofiler.v2.ProfilerServiceGrpc)

Manage the collection of continuous profiling data provided by profiling agents running in the cloud or by an offline provider of profiling data. \_\_The APIs listed in this service are intended for use within our profiler

[com.google.devtools.cloudprofiler.v2.ProfilerServiceGrpc.ProfilerServiceImplBase](https://cloud.google.com/java/docs/reference/google-cloud-profiler/latest/com.google.devtools.cloudprofiler.v2.ProfilerServiceGrpc.ProfilerServiceImplBase)

Base class for the server implementation of the service ProfilerService. Manage the collection of continuous profiling data provided by profiling

[com.google.devtools.cloudprofiler.v2.ProfilerServiceSettings.Builder](https://cloud.google.com/java/docs/reference/google-cloud-profiler/latest/com.google.devtools.cloudprofiler.v2.ProfilerServiceSettings.Builder)

Builder for ProfilerServiceSettings.

[com.google.devtools.cloudprofiler.v2.ProjectName](https://cloud.google.com/java/docs/reference/google-cloud-profiler/latest/com.google.devtools.cloudprofiler.v2.ProjectName)

[com.google.devtools.cloudprofiler.v2.ProjectName.Builder](https://cloud.google.com/java/docs/reference/google-cloud-profiler/latest/com.google.devtools.cloudprofiler.v2.ProjectName.Builder)

Builder for projects/{project}.

[com.google.devtools.cloudprofiler.v2.UpdateProfileRequest](https://cloud.google.com/java/docs/reference/google-cloud-profiler/latest/com.google.devtools.cloudprofiler.v2.UpdateProfileRequest)

UpdateProfileRequest contains the profile to update.

[com.google.devtools.cloudprofiler.v2.UpdateProfileRequest.Builder](https://cloud.google.com/java/docs/reference/google-cloud-profiler/latest/com.google.devtools.cloudprofiler.v2.UpdateProfileRequest.Builder)

UpdateProfileRequest contains the profile to update.

## Interfaces

Interface

Description

[com.google.devtools.cloudprofiler.v2.CreateOfflineProfileRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-profiler/latest/com.google.devtools.cloudprofiler.v2.CreateOfflineProfileRequestOrBuilder)

[com.google.devtools.cloudprofiler.v2.CreateProfileRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-profiler/latest/com.google.devtools.cloudprofiler.v2.CreateProfileRequestOrBuilder)

[com.google.devtools.cloudprofiler.v2.DeploymentOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-profiler/latest/com.google.devtools.cloudprofiler.v2.DeploymentOrBuilder)

[com.google.devtools.cloudprofiler.v2.ExportServiceGrpc.AsyncService](https://cloud.google.com/java/docs/reference/google-cloud-profiler/latest/com.google.devtools.cloudprofiler.v2.ExportServiceGrpc.AsyncService)

Service allows existing Cloud Profiler customers to export their profile data out of Google Cloud.

[com.google.devtools.cloudprofiler.v2.ListProfilesRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-profiler/latest/com.google.devtools.cloudprofiler.v2.ListProfilesRequestOrBuilder)

[com.google.devtools.cloudprofiler.v2.ListProfilesResponseOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-profiler/latest/com.google.devtools.cloudprofiler.v2.ListProfilesResponseOrBuilder)

[com.google.devtools.cloudprofiler.v2.ProfileOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-profiler/latest/com.google.devtools.cloudprofiler.v2.ProfileOrBuilder)

[com.google.devtools.cloudprofiler.v2.ProfilerServiceGrpc.AsyncService](https://cloud.google.com/java/docs/reference/google-cloud-profiler/latest/com.google.devtools.cloudprofiler.v2.ProfilerServiceGrpc.AsyncService)

Manage the collection of continuous profiling data provided by profiling agents running in the cloud or by an offline provider of profiling data. \_\_The APIs listed in this service are intended for use within our profiler

[com.google.devtools.cloudprofiler.v2.UpdateProfileRequestOrBuilder](https://cloud.google.com/java/docs/reference/google-cloud-profiler/latest/com.google.devtools.cloudprofiler.v2.UpdateProfileRequestOrBuilder)

## Enums

Enum

Description

[com.google.devtools.cloudprofiler.v2.ProfileType](https://cloud.google.com/java/docs/reference/google-cloud-profiler/latest/com.google.devtools.cloudprofiler.v2.ProfileType)

ProfileType is type of profiling data. NOTE: the enumeration member names are used (in lowercase) as unique string identifiers of profile types, so they must not be renamed.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
