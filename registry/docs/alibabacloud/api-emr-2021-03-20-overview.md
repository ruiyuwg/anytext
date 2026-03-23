## API standard and pre-built SDKs in multi-language

The OpenAPI specification of this product (`Emr/2021-03-20`) follows the [RPC](/help/en/sdk/product-overview/v3-request-structure-and-signature) standard. Alibaba Cloud provides pre-built [SDKs](https://api.alibabacloud.com/api-tools/sdk/OpenAPIExplorer?version=2024-11-30) for popular programming languages to abstract low-level complexities such as request signing. This enables developers to call APIs using language-specific syntax without dealing with HTTP details directly.

## **C**ustom signature

If your specific needs, such as a customized signature, are not supported by the SDK, manually sign requests using the [signature mechanism](/help/en/sdk/product-overview/roa-mechanism). Note that manual signing requires significant effort (usually about 5 business days). For support, join our DingTalk group (ID: 147535001692).

## **Before you begin**

An Alibaba Cloud account has full administrative privileges. A compromised AccessKey pair exposes all associated resources to unauthorized access, posing a significant security risk. [Create a Resource Access Management (RAM) user](/help/en/ram/user-guide/create-a-ram-user) with API-only access and use RAM policies to apply the principle of least privilege (PoLP). Alibaba Cloud accounts are only used when explicitly required.

To call APIs securely, configure the following:

-   A RAM user account
    
-   An [AccessKey pair](/help/en/ram/user-guide/create-an-accesskey-pair) for the account
    

## Foundation

**API**

**Title**

**Description**

[ListReleaseVersions](/help/en/emr/emr-on-ecs/developer-reference/api-emr-2021-03-20-listreleaseversions)

ListReleaseVersions

Queries the major E-MapReduce (EMR) versions.

[ListInstanceTypes](/help/en/emr/emr-on-ecs/developer-reference/api-emr-2021-03-20-listinstancetypes)

ListInstanceTypes

Retrieves a list of EMR instance types.

## Clusters

**API**

**Title**

**Description**

[RunCluster](/help/en/emr/emr-on-ecs/developer-reference/api-emr-2021-03-20-runcluster)

RunCluster

Creates a pay-as-you-go or subscription cluster.

[CreateCluster](/help/en/emr/emr-on-ecs/developer-reference/api-emr-2021-03-20-createcluster)

CreateCluster

Creates a pay-as-you-go or subscription cluster.

[GetCluster](/help/en/emr/emr-on-ecs/developer-reference/api-emr-2021-03-20-getcluster)

GetCluster

Obtains the details of a cluster.

[UpdateClusterAttribute](/help/en/emr/emr-on-ecs/developer-reference/api-emr-2021-03-20-updateclusterattribute)

UpdateClusterAttribute

Updates cluster attributes.

[ListClusters](/help/en/emr/emr-on-ecs/developer-reference/api-emr-2021-03-20-listclusters)

ListClusters

Lists EMR clusters.

[DeleteCluster](/help/en/emr/emr-on-ecs/developer-reference/api-emr-2021-03-20-deletecluster)

DeleteCluster

Deletes a pay-as-you-go cluster.

[GetClusterCloneMeta](/help/en/emr/emr-on-ecs/developer-reference/api-emr-2021-03-20-getclusterclonemeta)

GetClusterCloneMeta

Obtains metadata of the E-MapReduce (EMR) cluster that you want to clone. This helps you call the CreateCluster API operation to quickly create an EMR cluster.

[UpdateClusterAutoRenew](/help/en/emr/emr-on-ecs/developer-reference/api-emr-2021-03-20-updateclusterautorenew)

UpdateClusterAutoRenew

Enables or disables auto-renewal for an EMR cluster and its Elastic Compute Service (ECS) instances.

## Cluster Templates

**API**

**Title**

**Description**

[CreateApiTemplate](/help/en/emr/emr-on-ecs/developer-reference/api-emr-2021-03-20-createapitemplate)

CreateApiTemplate

Creates a predefined API operation template. The template contains information about an API operation, including the basic structure, request method, URL path, request parameters, and response format.

[UpdateApiTemplate](/help/en/emr/emr-on-ecs/developer-reference/api-emr-2021-03-20-updateapitemplate)

UpdateApiTemplate

Updates an API operation template.

[ListApiTemplates](/help/en/emr/emr-on-ecs/developer-reference/api-emr-2021-03-20-listapitemplates)

ListApiTemplates

Lists API templates.

[GetApiTemplate](/help/en/emr/emr-on-ecs/developer-reference/api-emr-2021-03-20-getapitemplate)

GetApiTemplate

Queries the detailed configuration information about an API operation template.

[DeleteApiTemplate](/help/en/emr/emr-on-ecs/developer-reference/api-emr-2021-03-20-deleteapitemplate)

DeleteApiTemplate

Deletes an API operation template.

[RunApiTemplate](/help/en/emr/emr-on-ecs/developer-reference/api-emr-2021-03-20-runapitemplate)

RunApiTemplate

Runs an API template.

## Node groups

**API**

**Title**

**Description**

[CreateNodeGroup](/help/en/emr/emr-on-ecs/developer-reference/api-emr-2021-03-20-createnodegroup)

CreateNodeGroup

Creates a node group.

[ListNodeGroups](/help/en/emr/emr-on-ecs/developer-reference/api-emr-2021-03-20-listnodegroups)

ListNodeGroups

Queries the list of node groups in an EMR cluster.

[GetNodeGroup](/help/en/emr/emr-on-ecs/developer-reference/api-emr-2021-03-20-getnodegroup)

GetNodeGroup

You can call this operation to obtain the details of a node group.

[IncreaseNodes](/help/en/emr/emr-on-ecs/developer-reference/api-emr-2021-03-20-increasenodes)

IncreaseNodes

Scales out the node group.

[DecreaseNodes](/help/en/emr/emr-on-ecs/developer-reference/api-emr-2021-03-20-decreasenodes)

DecreaseNodes

Performs a scale-out operation on the target node group.

[ListNodes](/help/en/emr/emr-on-ecs/developer-reference/api-emr-2021-03-20-listnodes)

ListNodes

Queries the node list of an EMR cluster.

## Auto Scaling

**API**

**Title**

**Description**

[PutAutoScalingPolicy](/help/en/emr/emr-on-ecs/developer-reference/api-emr-2021-03-20-putautoscalingpolicy)

PutAutoScalingPolicy

Adds a custom auto scaling rule.

[GetAutoScalingPolicy](/help/en/emr/emr-on-ecs/developer-reference/api-emr-2021-03-20-getautoscalingpolicy)

GetAutoScalingPolicy

Queries custom auto scaling rules.

[GetManagedScalingPolicy](/help/en/emr/emr-on-ecs/developer-reference/api-emr-2021-03-20-getmanagedscalingpolicy)

GetManagedScalingPolicy

Retrieves the details of a managed scaling policy.

[RemoveAutoScalingPolicy](/help/en/emr/emr-on-ecs/developer-reference/api-emr-2021-03-20-removeautoscalingpolicy)

RemoveAutoScalingPolicy

Removes an auto scaling policy.

[ListAutoScalingActivities](/help/en/emr/emr-on-ecs/developer-reference/api-emr-2021-03-20-listautoscalingactivities)

ListAutoScalingActivities

Lists Auto Scaling activities.

[GetAutoScalingActivity](/help/en/emr/emr-on-ecs/developer-reference/api-emr-2021-03-20-getautoscalingactivity)

GetAutoScalingActivity

Queries the information about an auto scaling activity.

## Applications

**API**

**Title**

**Description**

[ListApplications](/help/en/emr/emr-on-ecs/developer-reference/api-emr-2021-03-20-listapplications)

ListApplications

Queries a list of applications.

[GetApplication](/help/en/emr/emr-on-ecs/developer-reference/api-emr-2021-03-20-getapplication)

GetApplication

Retrieves the details of an application.

[RunApplicationAction](/help/en/emr/emr-on-ecs/developer-reference/api-emr-2021-03-20-runapplicationaction)

RunApplicationAction

Manages a service deployed in a cluster. For example, you can call this operation to start pr stop a service.

[ListApplicationConfigs](/help/en/emr/emr-on-ecs/developer-reference/api-emr-2021-03-20-listapplicationconfigs)

ListApplicationConfigs

Queries the configurations of the application.

[UpdateApplicationConfigs](/help/en/emr/emr-on-ecs/developer-reference/api-emr-2021-03-20-updateapplicationconfigs)

UpdateApplicationConfigs

Updates the application configurations.

[ListComponents](/help/en/emr/emr-on-ecs/developer-reference/api-emr-2021-03-20-listcomponents)

ListComponents

Retrieves a list of components.

[ListComponentInstances](/help/en/emr/emr-on-ecs/developer-reference/api-emr-2021-03-20-listcomponentinstances)

ListComponentInstances

Retrieves the list of component instances.

## Operations

**API**

**Title**

**Description**

[GetOperation](/help/en/emr/emr-on-ecs/developer-reference/api-emr-2021-03-20-getoperation)

GetOperation

Gets the details of an asynchronous operation.

## Resource groups

**API**

**Title**

**Description**

[JoinResourceGroup](/help/en/emr/emr-on-ecs/developer-reference/api-emr-2021-03-20-joinresourcegroup)

JoinResourceGroup

Adds an EMR resource to a resource group. A resource can belong to only one resource group.

## Tags

**API**

**Title**

**Description**

[TagResources](/help/en/emr/emr-on-ecs/developer-reference/api-emr-2021-03-20-tagresources)

TagResources

Binds tags to a specified EMR cluster.

[UntagResources](/help/en/emr/emr-on-ecs/developer-reference/api-emr-2021-03-20-untagresources)

UntagResources

Unbinds tags from a specified column in an EMR cluster. If the tag is not bound to other resources, the tag is automatically deleted.

[ListTagResources](/help/en/emr/emr-on-ecs/developer-reference/api-emr-2021-03-20-listtagresources)

ListTagResources

Queries the tags that are bound to an EMR cluster.

## Scripts

**API**

**Title**

**Description**

[CreateScript](/help/en/emr/emr-on-ecs/developer-reference/api-emr-2021-03-20-createscript)

CreateScript

Adds a bootstrap action or a common script of an E-MapReduce (EMR) cluster.

[ListScripts](/help/en/emr/emr-on-ecs/developer-reference/api-emr-2021-03-20-listscripts)

ListScripts

Query EMR cluster bootstrap scripts or regular scripts.

[UpdateScript](/help/en/emr/emr-on-ecs/developer-reference/api-emr-2021-03-20-updatescript)

UpdateScript

Updates a bootstrap action or a common script of an E-MapReduce (EMR) cluster.

[DeleteScript](/help/en/emr/emr-on-ecs/developer-reference/api-emr-2021-03-20-deletescript)

DeleteScript

Deletes a bootstrap action or a common script of an E-MapReduce (EMR) cluster.

## Monitoring Diagnostics

**API**

**Title**

**Description**

[ListDoctorHiveDatabases](/help/en/emr/emr-on-ecs/developer-reference/api-emr-2021-03-20-listdoctorhivedatabases)

ListDoctorHiveDatabases

Obtains the analysis results of multiple Hive databases at a time.

[GetDoctorHiveDatabase](/help/en/emr/emr-on-ecs/developer-reference/api-emr-2021-03-20-getdoctorhivedatabase)

GetDoctorHiveDatabase

Obtains the analysis results of a Hive database.

[GetDoctorHiveCluster](/help/en/emr/emr-on-ecs/developer-reference/api-emr-2021-03-20-getdoctorhivecluster)

GetDoctorHiveCluster

Obtains the analysis results of a Hive cluster.

[ListDoctorHiveTables](/help/en/emr/emr-on-ecs/developer-reference/api-emr-2021-03-20-listdoctorhivetables)

ListDoctorHiveTables

Obtains the analysis results of multiple Hive tables at a time on E-MapReduce (EMR) Doctor.

[GetDoctorHiveTable](/help/en/emr/emr-on-ecs/developer-reference/api-emr-2021-03-20-getdoctorhivetable)

GetDoctorHiveTable

Obtains the analysis results of a specific Hive table in a cluster on E-MapReduce (EMR) Doctor.

[ListDoctorHDFSUGI](/help/en/emr/emr-on-ecs/developer-reference/api-emr-2021-03-20-listdoctorhdfsugi)

ListDoctorHDFSUGI

Obtains the analysis results of Hadoop Distributed File System (HDFS) storage resources for multiple owners or groups at a time on E-MapReduce (EMR) Doctor.

[ListDoctorHBaseTables](/help/en/emr/emr-on-ecs/developer-reference/api-emr-2021-03-20-listdoctorhbasetables)

ListDoctorHBaseTables

Obtains the information about multiple HBase tables at a time.

[ListDoctorHBaseRegionServers](/help/en/emr/emr-on-ecs/developer-reference/api-emr-2021-03-20-listdoctorhbaseregionservers)

ListDoctorHBaseRegionServers

Obtains the information about multiple HBase RegionServers at a time.

[GetDoctorHBaseTable](/help/en/emr/emr-on-ecs/developer-reference/api-emr-2021-03-20-getdoctorhbasetable)

GetDoctorHBaseTable

Get HBase Table information.

[GetDoctorHBaseRegionServer](/help/en/emr/emr-on-ecs/developer-reference/api-emr-2021-03-20-getdoctorhbaseregionserver)

GetDoctorHBaseRegionServer

Obtains the information about an HBase region server.

[GetDoctorHBaseRegion](/help/en/emr/emr-on-ecs/developer-reference/api-emr-2021-03-20-getdoctorhbaseregion)

GetDoctorHBaseRegion

Get HBase Region information.

[GetDoctorHBaseCluster](/help/en/emr/emr-on-ecs/developer-reference/api-emr-2021-03-20-getdoctorhbasecluster)

GetDoctorHBaseCluster

Obtains the metrics of an HBase cluster.

[GetDoctorHDFSDirectory](/help/en/emr/emr-on-ecs/developer-reference/api-emr-2021-03-20-getdoctorhdfsdirectory)

GetDoctorHDFSDirectory

Obtains the analysis results of a specific Hadoop Distributed File System (HDFS) directory of a cluster. The depth of the directory is not greater than five.

[ListDoctorJobsStats](/help/en/emr/emr-on-ecs/developer-reference/api-emr-2021-03-20-listdoctorjobsstats)

ListDoctorJobsStats

Obtains the summary of basic running information about multiple jobs at a time on E-MapReduce (EMR) Doctor.

[ListDoctorReports](/help/en/emr/emr-on-ecs/developer-reference/api-emr-2021-03-20-listdoctorreports)

ListDoctorReports

Obtains the overall analysis result reports of E-MapReduce (EMR) Doctor at a time.

[GetDoctorReportComponentSummary](/help/en/emr/emr-on-ecs/developer-reference/api-emr-2021-03-20-getdoctorreportcomponentsummary)

GetDoctorReportComponentSummary

Obtain the analysis result report of a specified component from EMR Doctor.

[ListDoctorJobs](/help/en/emr/emr-on-ecs/developer-reference/api-emr-2021-03-20-listdoctorjobs)

ListDoctorJobs

Obtains the basic running information about multiple jobs at a time on E-MapReduce (EMR) Doctor.

[ListDoctorComputeSummary](/help/en/emr/emr-on-ecs/developer-reference/api-emr-2021-03-20-listdoctorcomputesummary)

ListDoctorComputeSummary

Obtains the information about resource usage by resource type in a cluster on E-MapReduce (EMR) Doctor.

[GetDoctorComputeSummary](/help/en/emr/emr-on-ecs/developer-reference/api-emr-2021-03-20-getdoctorcomputesummary)

GetDoctorComputeSummary

Obtains the information about resource usage in a cluster on E-MapReduce (EMR) Doctor.

[GetDoctorJob](/help/en/emr/emr-on-ecs/developer-reference/api-emr-2021-03-20-getdoctorjob)

GetDoctorJob

Obtains the basic running information about a job on E-MapReduce (EMR) Doctor.

[ListDoctorApplications](/help/en/emr/emr-on-ecs/developer-reference/api-emr-2021-03-20-listdoctorapplications)

ListDoctorApplications

Obtains the analysis results of multiple jobs on E-MapReduce (EMR) Doctor.

[ListDoctorHDFSDirectories](/help/en/emr/emr-on-ecs/developer-reference/api-emr-2021-03-20-listdoctorhdfsdirectories)

ListDoctorHDFSDirectories

Retrieves batch analysis results for specific directories using EMR Doctor. The directory depth cannot exceed five levels.

[GetDoctorHDFSCluster](/help/en/emr/emr-on-ecs/developer-reference/api-emr-2021-03-20-getdoctorhdfscluster)

GetDoctorHDFSCluster

Obtains the analysis results of the Hadoop Distributed File System (HDFS) storage resources of a cluster on E-MapReduce (EMR) Doctor.

[GetDoctorApplication](/help/en/emr/emr-on-ecs/developer-reference/api-emr-2021-03-20-getdoctorapplication)

GetDoctorApplication

Obtains job analysis information on E-MapReduce (EMR) Doctor.

## OpenLDAP User Management

**API**

**Title**

**Description**

[CreateUsers](/help/en/emr/emr-on-ecs/developer-reference/api-emr-2021-03-20-createusers)

CreateUsers

Creates users in a batch.

[DeleteUsers](/help/en/emr/emr-on-ecs/developer-reference/api-emr-2021-03-20-deleteusers)

DeleteUsers

Deletes multiple users at a time.

[UpdateUserAttribute](/help/en/emr/emr-on-ecs/developer-reference/api-emr-2021-03-20-updateuserattribute)

UpdateUserAttribute

Updates the information about a user.

[ListUsers](/help/en/emr/emr-on-ecs/developer-reference/api-emr-2021-03-20-listusers)

ListUsers

Queries a user.

## Other

**API**

**Title**

**Description**

[ExportApplicationConfigs](/help/en/emr/emr-on-ecs/developer-reference/api-emr-2021-03-20-exportapplicationconfigs)

ExportApplicationConfigs

Exports the configurations of a specified service in a cluster.
