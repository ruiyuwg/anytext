Platform for AI (PAI) provides the following roles: Workspace Administrator/Owner, Algorithm Developer, Algorithm O&M Engineer, Labeling Administrator, Visitor, and MaxCompute Developer.

You can manage permissions in the RAM console or in a PAI workspace. The following tables show the permissions of each role across all PAI modules.

#### **General permissions**

**Permission**

**Action (can be managed in the RAM console)**

Check whether PAI, [MaxCompute](/help/en/maxcompute/product-overview/what-is-maxcompute), [DataWorks](/help/en/dataworks/user-guide/what-is-dataworks), and [OSS](/help/en/oss/user-guide/what-is-oss) are purchased or activated

Pai:ListProducts (This action is allowed unless you specify Deny)

List quotas (This permission will be discontinued)

Pai:ListQuotas (This action is allowed unless you specify Deny)

Query the pay-as-you-go prices of PAI-DSW, PAI-DLC, and PAI-EAS

Pai:GetPayAsYouGoPrice (This action is allowed unless you specify Deny)

Query information about modules including PAI-DSW, PAI-DLC, and PAI-EAS

Pai:DescribePricingModule (This action is allowed unless you specify Deny)

List RAM users

Pai:ListUsers (This action is allowed unless you specify Deny)

List user configurations of the Alibaba Cloud account

Pai:ListUserConfigs

Update user configurations of the Alibaba Cloud account

Pai:SetUserConfigs

Delete user configurations of the Alibaba Cloud account

Pai:DeleteUserConfig

Create PAI orders

Pai:CreateOrder

#### Workspace management

Table 1. Workspace management: Off-workspace resources

**Permission**

**Action (can be managed in the RAM console)**

**Workspace Administrator/Owner**

**Algorithm Developer**

**Algorithm O&M Engineer**

**Labeling Administrator**

**Visitor**

**Private (created by me)**

**Private (created by others)**

**Public (created by me)**

**Public (created by others)**

**Private (created by me)**

**Private (created by others)**

**Public**

**Private (created by me)**

**Private (created by others)**

**Public**

**Private (created by me)**

**Private (created by others)**

**Public**

Create workspaces

PaiWorkspace:CreateWorkspace

✅

Delete workspaces

PaiWorkspace:DeleteWorkspace

✅

List workspaces

PaiWorkspace:ListWorkspaces

✅

Create the default workspace

PaiWorkspace:CreateDefaultWorkspace

✅

Update resource quotas

PaiWorkspace:UpdateQuota

✅

Update the default workspace

PaiWorkspace:UpdateDefaultWorkspace

✅

Obtain the default workspace

PaiWorkspace:GetDefaultWorkspace

✅

✅ Accessibility does not matter

✅ Accessibility does not matter

✅ Accessibility does not matter

✅ Accessibility does not matter

Table 2. Workspace management: Workspace resources

**Permission**

**Action (can be managed in the PAI workspace)**

**Action (can be managed in the RAM console)**

**Resource**

**Workspace Administrator/Owner**

**Algorithm Developer**

**Algorithm O&M Engineer**

**Labeling Administrator**

**Visitor**

**Private (created by me)**

**Private (created by others)**

**Public (created by me)**

**Public (created by others)**

**Private (created by me)**

**Private (created by others)**

**Public**

**Private (created by me)**

**Private (created by others)**

**Public**

**Private (created by me)**

**Private (created by others)**

**Public**

Obtain custom roles

PaiWorkspace:GetWorkspaceRole

PaiWorkspace:GetWorkspaceRole

✅

✅ Accessibility does not matter

✅ Accessibility does not matter

✅ Accessibility does not matter

✅ Accessibility does not matter

Create custom roles

PaiWorkspace:AddWorkspaceRole

PaiWorkspace:AddWorkspaceRole

✅

Delete custom roles

PaiWorkspace:RemoveWorkspaceRole

PaiWorkspace:RemoveWorkspaceRole

✅

Update custom roles

PaiWorkspace:UpdateWorkspaceRole

PaiWorkspace:UpdateWorkspaceRole

✅

List custom roles

PaiWorkspace:ListWorkspaceRoles

PaiWorkspace:ListWorkspaceRoles

✅

✅ Accessibility does not matter

✅ Accessibility does not matter

✅ Accessibility does not matter

✅ Accessibility does not matter

View workspace basic information

PaiWorkspace:GetWorkspace

PaiWorkspace:GetWorkspace

✅

✅ Accessibility does not matter

✅ Accessibility does not matter

✅ Accessibility does not matter

✅ Accessibility does not matter

Modify workspace basic information

PaiWorkspace:UpdateWorkspace

PaiWorkspace:UpdateWorkspace

✅

Obtain workspace operation logs

PaiWorkspace:ListOperationLogs

PaiWorkspace:ListOperationLogs

✅

✅ Accessibility does not matter

✅ Accessibility does not matter

✅ Accessibility does not matter

✅ Accessibility does not matter

List RAM users that are not in a workspace

PaiWorkspace:ListWorkspaceUsers

PaiWorkspace:ListWorkspaceUsers

✅

✅ Accessibility does not matter

✅ Accessibility does not matter

✅ Accessibility does not matter

✅ Accessibility does not matter

List permissions in workspaces

PaiWorkspace:ListPermissions

PaiWorkspace:ListPermissions

Increase resource quotas for workspaces

PaiWorkspace:AddWorkspaceQuota

PaiWorkspace:AddWorkspaceQuota

✅

Remove resource quotas for workspaces

PaiWorkspace:RemoveWorkspaceQuota

PaiWorkspace:RemoveWorkspaceQuota

✅

Add members

PaiWorkspace:CreateMember

PaiWorkspace:CreateMember

✅

Delete members

PaiWorkspace:DeleteMembers

PaiWorkspace:DeleteMembers

✅

Add member roles

PaiWorkspace:AddMemberRole

PaiWorkspace:AddMemberRole

✅

Delete member roles

PaiWorkspace:RemoveMemberRole

PaiWorkspace:RemoveMemberRole

✅

View workspace members

PaiWorkspace:GetMember

PaiWorkspace:GetMember

✅

✅ Accessibility does not matter

✅ Accessibility does not matter

✅ Accessibility does not matter

✅ Accessibility does not matter

List workspace members

PaiWorkspace:ListMembers

PaiWorkspace:ListMembers

✅

✅ Accessibility does not matter

✅ Accessibility does not matter

✅ Accessibility does not matter

✅ Accessibility does not matter

List resource instances

PaiWorkspace:ListResources

PaiWorkspace:ListResources

✅

✅ Accessibility does not matter

✅ Accessibility does not matter

✅ Accessibility does not matter

✅ Accessibility does not matter

Create resource instances

PaiWorkspace:CreateWorkspaceResource

PaiWorkspace:CreateWorkspaceResource

✅

Delete resource instances

PaiWorkspace:DeleteWorkspaceResource

PaiWorkspace:DeleteWorkspaceResource

✅

Update resource instance (set as default resource group)

PaiWorkspace:UpdateWorkspaceResource

PaiWorkspace:UpdateWorkspaceResource

✅

View resource instances

PaiWorkspace:GetResource

PaiWorkspace:GetResource

✅

✅ Accessibility does not matter

✅ Accessibility does not matter

✅ Accessibility does not matter

✅ Accessibility does not matter

View storage configurations

PaiWorkspace:ListConfigs

PaiWorkspace:ListConfigs

✅

✅ Accessibility does not matter

✅ Accessibility does not matter

✅ Accessibility does not matter

✅ Accessibility does not matter

Create or update workspace storage configurations

PaiWorkspace:UpdateConfigs

PaiWorkspace:UpdateConfigs

✅

Obtain instance jobs

PaiWorkspace:GetInstanceJob

PaiWorkspace:GetInstanceJob

/instancejob/{instanceJobId}

✅

✅ Accessibility does not matter

✅ Accessibility does not matter

Delete workspace storage configurations

PaiWorkspace:DeleteConfig

PaiWorkspace:DeleteConfig

✅

#### **QuickStart**

Table 1. QuickStart: TrainingService

**Permission**

**Action (can be managed in the PAI workspace)**

**Workspace Administrator/Owner**

**Algorithm Developer**

**Algorithm O&M Engineer**

**Private (created by me)**

**Private (created by others)**

**Public (created by me)**

**Public (created by others)**

**Private (created by me)**

**Private (created by others)**

**Public**

Create jobs

PaiTraining:CreateTrainingJob

✅

✅

✅

Modify jobs

PaiTraining:UpdateTrainingJob

✅

✅

✅

✅

View the details of jobs

PaiTraining:GetTrainingJob

✅

✅

✅

✅

View job statistics

✅

✅

✅

✅

✅

View the job list

PaiTraining:ListTrainingJobs

✅

✅

✅

✅

✅

Clone jobs

PaiTraining:CloneTrainingJob

✅

✅

✅

✅

Stop jobs

PaiTraining:StopTrainingJob

✅

✅

✅

✅

Delete jobs

PaiTraining:DeleteTrainingJob

✅

✅

✅

✅

Share jobs

PaiTraining:ShareTrainingJob

✅

✅

✅

✅

View definition of preset algorithms

✅

✅

✅

✅

✅

Table 2. QuickStart: Experiment management

**Permission**

**Action (can be managed in the PAI workspace)**

**Workspace Administrator/Owner**

**Algorithm Developer**

**Algorithm O&M Engineer**

**Visitor**

**Private (created by me)**

**Private (created by others)**

**Public (created by me)**

**Public (created by others)**

**Private (created by me)**

**Private (created by others)**

**Public**

**Private (created by me)**

**Private (created by others)**

**Public**

Create experiments

PaiExperiment:CreateExperiment

✅

✅

✅

✅

✅

✅

Obtain experiments

PaiExperiment:GetExperiment

✅

✅

✅

✅

✅

✅

Update experiments

PaiExperiment:UpdateExperiment

✅

✅

✅

✅

✅

✅

Delete experiments

PaiExperiment:DeleteExperiment

✅

✅

✅

✅

List all experiments in a workspace

PaiExperiment:ListAllExperiments

✅

List public and self-created experiments

PaiExperiment:ListExperiments

✅

✅

✅

✅

✅

✅

✅

Set experiment tags

PaiExperiment:SetExperimentLabel

✅

✅

✅

✅

✅

✅

Delete experiment tags

PaiExperiment:DeleteExperimentLabel

✅

✅

✅

✅

✅

✅

Create Trial

PaiExperiment:CreateTrial

✅

✅

✅

✅

✅

✅

Obtain Trial

PaiExperiment:GetTrial

✅

✅

✅

✅

✅

✅

Set Trial tags

PaiExperiment:SetTrialLabel

✅

✅

✅

✅

✅

✅

#### iTAG

**Permission**

**Workspace Administrator/Owner**

**Labeling Administrator**

**Private (created by me)**

**Private (created by others)**

**Public**

Labeling job management, including job creation, user management, job distribution, and job execution.

✅

✅ Accessibility does not matter

#### Visualized Modeling (Designer)

**Permission**

**Action (can be managed in the PAI workspace)**

**Action (can be managed in the RAM console)**

**Resource**

**Workspace Administrator/Owner**

**Algorithm Developer**

**Algorithm O&M Engineer**

**Visitor**

**MaxCompute Developer (DataWorks development and Designer related permissions)**

**Private (created by me)**

**Private (created by others)**

**Public (created by me)**

**Public (created by others)**

**Private (created by me)**

**Private (created by others)**

**Public**

**Private (created by me)**

**Private (created by others)**

**Public**

**Private (created by me)**

**Private (created by others)**

**Public**

Obtain pipeline drafts

PaiDesigner:GetPipelineDraft

PaiDesigner:GetPipelineDraft

/pipelinedraft/{pipeineDraftId}

✅

✅

✅

✅

✅

✅

✅

✅

✅

✅

Obtain pipeline draft meta

PaiDesigner:GetPipelineDraftMeta

PaiDesigner:GetPipelineDraftMeta

/pipelinedraft/{pipeineDraftId}

✅

✅

✅

✅

✅

✅

✅

✅

✅

✅

List public and self-created pipeline drafts

PaiDesigner:ListPipelineDrafts

PaiDesigner:ListPipelineDrafts

/pipelinedraft/\*

✅

✅

✅

✅

✅

✅

✅

✅

✅

✅

List all pipeline drafts in a workspace

PaiDesigner:ListAllPipelineDrafts

PaiDesigner:ListAllPipelineDrafts

/pipelinedraft/\*

✅

Create pipeline drafts

PaiDesigner:CreatePipelineDraft

PaiDesigner:CreatePipelineDraft

/pipelinedraft/{pipeineDraftId}

✅

✅

✅

✅

✅

✅

✅

✅

Delete pipeline drafts

PaiDesigner:DeletePipelineDraft

PaiDesigner:DeletePipelineDraft

/pipelinedraft/{pipeineDraftId}

✅

✅

✅

✅

✅

✅

✅

✅

Update pipeline draft meta

PaiDesigner:UpdatePipelineDraftMeta

PaiDesigner:UpdatePipelineDraftMeta

/pipelinedraft/{pipeineDraftId}

✅

✅

✅

✅

✅

✅

✅

✅

Update pipeline draft content

PaiDesigner:UpdatePipelineDraftContent

PaiDesigner:UpdatePipelineDraftContent

/pipelinedraft/{pipeineDraftId}

✅

✅

✅

✅

✅

✅

✅

✅

Copy pipeline drafts

PaiDesigner:CopyPipelineDraft

PaiDesigner:CopyPipelineDraft

/pipelinedraft/{pipeineDraftId}

✅

✅

✅

✅

✅

✅

✅

✅

View public and self-created pipeline draft statistics

PaiDesigner:GetPipelineDraftsStatistics

PaiDesigner:GetPipelineDraftsStatistics

/pipelinedraft/\*

✅

✅

✅

✅

✅

✅

✅

✅

✅

✅

View all pipeline draft statistics in the workspace

PaiDesigner:GetAllPipelineDraftsStatistics

PaiDesigner:GetAllPipelineDraftsStatistics

/pipelinedraft/\*

✅

View public and self-created pipeline draft user statistics

PaiDesigner:GetPipelineDraftsUsersStatistics

PaiDesigner:GetPipelineDraftsUsersStatistics

/pipelinedraft/\*

✅

✅

✅

✅

✅

✅

✅

✅

✅

✅

View all pipeline draft user statistics in a workspace

PaiDesigner:GetAllPipelineDraftsUsersStatistics

PaiDesigner:GetAllPipelineDraftsUsersStatistics

/pipelinedraft/\*

✅

Create pipeline drafts based on templates

PaiDesigner:CreateTemplatePipelineDraft

PaiDesigner:CreateTemplatePipelineDraft

/pipelinedraft/\*

✅

✅

✅

✅

✅

✅

✅

✅

Publish pipeline drafts to a workspace

PaiDesigner:PublishPipelineDraft

PaiDesigner:PublishPipelineDraft

/pipelinedraft/{pipeineDraftId}

✅

✅

✅

✅

✅

✅

✅

✅

Obtain the latest pipeline draft from the current user

PaiDesigner:ListRecentPipelineDrafts

PaiDesigner:ListRecentPipelineDrafts

/pipelinedraft/\*

✅

✅

✅

✅

✅

✅

✅

✅

✅

✅

Stop all jobs in a pipeline draft

PaiDesigner:StopPipelineDraft

PaiDesigner:StopPipelineDraft

/pipelinedraft/{pipeineDraftId}

✅

✅

✅

✅

✅

✅

✅

✅

Obtain the status of pipeline drafts and child nodes.

PaiDesigner:GetPipelineDraftStatus

PaiDesigner:GetPipelineDraftStatus

/pipelinedraft/{pipeineDraftId}

✅

✅

✅

✅

✅

✅

✅

✅

✅

✅

Obtain meta of pipeline draft visualization

PaiDesigner:GetPipelineDraftVisualizationMeta

PaiDesigner:GetPipelineDraftVisualizationMeta

/pipelinedraft/{pipeineDraftId}

✅

✅

✅

✅

✅

✅

✅

✅

✅

✅

Obtain data of pipeline draft visualization

PaiDesigner:QueryPipelineDraftVisualizationData

PaiDesigner:QueryPipelineDraftVisualizationData

/pipelinedraft/{pipeineDraftId}

✅

✅

✅

✅

✅

✅

✅

✅

✅

✅

List outputs of pipeline drafts

PaiDesigner:ListPipelineDraftNodeOutputs

PaiDesigner:ListPipelineDraftNodeOutputs

/pipelinedraft/{pipeineDraftId}

✅

✅

✅

✅

✅

✅

✅

✅

✅

✅

Obtain outputs of pipeline drafts

PaiDesigner:GetPipelineDraftNodeOutput

PaiDesigner:GetPipelineDraftNodeOutput

/pipelinedraft/{pipeineDraftId}

✅

✅

✅

✅

✅

✅

✅

✅

✅

✅

Create pipeline draft jobs

PaiDesigner:CreateJob

PaiDesigner:CreateJob

/pipelinedraft/{pipeineDraftId}/job/\*

✅

✅

✅

✅

✅

✅

✅

✅

List pipeline draft jobs

PaiDesigner:ListJobs

PaiDesigner:ListJobs

/pipelinedraft/{pipeineDraftId}/job/\*

✅

✅

✅

✅

✅

✅

✅

✅

✅

✅

Obtain pipeline draft jobs

PaiDesigner:GetJob

PaiDesigner:GetJob

/pipelinedraft/{pipeineDraftId}/job/{jobId}

✅

✅

✅

✅

✅

✅

✅

✅

✅

✅

Stop pipeline draft jobs

PaiDesigner:StopJob

PaiDesigner:StopJob

/pipelinedraft/{pipeineDraftId}/job/{jobId}

✅

✅

✅

✅

✅

✅

✅

✅

Create custom templates

PaiDesigner:CreateTemplate

PaiDesigner:CreateTemplate

/pipelinedrafttemplate/\*

✅

✅

✅

✅

✅

✅

✅

✅

View templates

PaiDesigner:GetTemplate

PaiDesigner:GetTemplate

/pipelinedrafttemplate/{pipelineDraftTemplateId}

✅

✅

✅

✅

✅

✅

✅

✅

✅

✅

List public and self-created templates

PaiDesigner:ListTemplates

PaiDesigner:ListTemplates

/pipelinedrafttemplate/\*

✅

✅

✅

✅

✅

✅

✅

✅

✅

✅

List all templates in a workspace

PaiDesigner:ListAllTemplates

PaiDesigner:ListAllTemplates

/pipelinedrafttemplate/\*

✅

Delete templates

PaiDesigner:DeleteTemplate

PaiDesigner:DeleteTemplate

/pipelinedrafttemplate/{pipelineDraftTemplateId}

✅

✅

✅

✅

✅

✅

✅

✅

Update templates

PaiDesigner:UpdateTemplate

PaiDesigner:UpdateTemplate

/pipelinedrafttemplate/{pipelineDraftTemplateId}

✅

✅

✅

✅

✅

✅

✅

✅

Create template tags

PaiDesigner:CreateTemplateLabels

PaiDesigner:CreateTemplateLabels

/pipelinedrafttemplate/{pipelineDraftTemplateId}/label/\*

✅

✅

✅

✅

✅

✅

✅

✅

Delete template tags

PaiDesigner:DeleteTemplateLabels

PaiDesigner:DeleteTemplateLabels

/pipelinedrafttemplate/{pipelineDraftTemplateId}/label/\*

✅

✅

✅

✅

✅

✅

✅

✅

List template tags

PaiDesigner:ListTemplateLabels

PaiDesigner:ListTemplateLabels

/pipelinedrafttemplate/{pipelineDraftTemplateId}/label/\*

✅

✅

✅

✅

✅

✅

✅

✅

✅

✅

Create pipeline draft folders

PaiDesigner:CreatePipelineDraftFolder

PaiDesigner:CreatePipelineDraftFolder

/pipelinedraftfolder/\*

✅

✅

✅

✅

✅

✅

✅

✅

List public and self-created subfolders or pipeline drafts in a pipeline draft folder

PaiDesigner:GetPipelineDraftFolderChildren

PaiDesigner:GetPipelineDraftFolderChildren

/pipelinedraftfolder/\*

✅

✅

✅

✅

✅

✅

✅

✅

✅

✅

List all subfolders or pipeline drafts in a pipeline draft folder in a workspace

PaiDesigner:GetAllPipelineDraftFolderChildren

PaiDesigner:GetAllPipelineDraftFolderChildren

/pipelinedraftfolder/\*

✅

Update pipeline drafts folders

PaiDesigner:UpdatePipelineDraftFolder

PaiDesigner:UpdatePipelineDraftFolder

/pipelinedraftfolder/{folderId}

✅

✅

✅

✅

✅

✅

✅

✅

Delete pipeline drafts folders

PaiDesigner:DeletePipelineDraftFolder

PaiDesigner:DeletePipelineDraftFolder

/pipelinedraftfolder/{folderId}

✅

✅

✅

✅

✅

✅

✅

✅

Transfer self-created pipelines

PaiDesigner:TransferPipelineDrafts

PaiDesigner:TransferPipelineDrafts

/pipelinedraft/\*

✅

✅

✅

✅

✅

✅

✅

✅

Transfer all pipelines in a workspace

PaiDesigner:TransferAllPipelineDrafts

PaiDesigner:TransferAllPipelineDrafts

/pipelinedraft/\*

✅

Obtain a instance job

PaiDesigner:GetInstanceJob

PaiDesigner:GetInstanceJob

/instancejob/{instanceJobId}

✅

✅

✅

✅

✅

✅

✅

✅

#### **PAIFlow**

**Permission**

**Action (can be managed in the PAI workspace)**

**Action (can be managed in the RAM console)**

**Resource**

**Workspace Administrator/Owner**

**Algorithm Developer**

**Algorithm O&M Engineer**

**Visitor**

**MaxCompute Developer (DataWorks development and Designer related permissions)**

**Private (created by me)**

**Private (created by others)**

**Public (created by me)**

**Public (created by others)**

**Private (created by me)**

**Private (created by others)**

**Public**

**Private (created by me)**

**Private (created by others)**

**Public**

**Private (created by me)**

**Private (created by others)**

**Public**

Create pipelines

Paiflow:CreatePipeline

Paiflow:CreatePipeline

/pipeline/\*

✅

✅

✅

✅

✅

✅

✅

✅

Update pipelines

Paiflow:UpdatePipeline

Paiflow:UpdatePipeline

/pipeline/{pipelineId}

✅

✅

✅

✅

✅

✅

✅

✅

Obtain the description of pipelines input and output

Paiflow:GetPipelineSchema

Paiflow:GetPipelineSchema

/pipeline/{pipelineId}

✅

✅

✅

✅

✅

✅

✅

✅

✅

✅

Obtain full definition of pipelines

Paiflow:GetPipeline

Paiflow:GetPipeline

/pipeline/{pipelineId}

✅

✅

✅

✅

✅

✅

✅

✅

Delete pipelines

Paiflow:DeletePipeline

Paiflow:DeletePipeline

/pipeline/{pipelineId}

✅

✅

✅

✅

✅

✅

✅

✅

List pipelines

Paiflow:ListPipelines

Paiflow:ListPipelines

/pipeline/\*

✅

✅

✅

✅

✅

✅

✅

✅

✅

✅

Create share tokens for pipeline jobs

Paiflow:CreatePipelineRunToken

Paiflow:CreatePipelineRunToken

/pipelinerun/{pipelineRunId}

✅

✅

✅

✅

✅

✅

✅

✅

Obtain pipeline job events

Paiflow:ListPipelineRunNodeEvents

Paiflow:ListPipelineRunNodeEvents

/pipelinerun/{pipelineRunId}

✅

✅

✅

✅

✅

✅

✅

✅

✅

✅

Rerun failed nodes of pipeline jobs

Paiflow:RerunPipelineRun

Paiflow:RerunPipelineRun

/pipelinerun/{pipelineRunId}

✅

✅

✅

✅

✅

✅

✅

✅

Obtain status of pipeline nodes

Paiflow:ListPipelineRunNodeStatus

Paiflow:ListPipelineRunNodeStatus

/pipelinerun/{pipelineRunId}

✅

✅

✅

✅

✅

✅

✅

✅

✅

✅

Create pipeline jobs

Paiflow:CreatePipelineRun

Paiflow:CreatePipelineRun

/pipelinerun/\*

✅

✅

✅

✅

✅

✅

✅

✅

Obtain pipeline jobs

Paiflow:GetPipelineRun

Paiflow:GetPipelineRun

/pipelinerun/{pipelineRunId}

✅

✅

✅

✅

✅

✅

✅

✅

✅

✅

Update pipeline jobs

Paiflow:UpdatePipelineRun

Paiflow:UpdatePipelineRun

/pipelinerun/{pipelineRunId}

✅

✅

✅

✅

✅

✅

✅

✅

Obtain node logs of pipeline jobs

Paiflow:ListPipelineRunNodeLogs

Paiflow:ListPipelineRunNodeLogs

/pipelinerun/{pipelineRunId}

✅

✅

✅

✅

✅

✅

✅

✅

✅

✅

Obtain outputs of pipeline job nodes

Paiflow:ListPipelineRunNodeOutputs

Paiflow:ListPipelineRunNodeOutputs

/pipelinerun/{pipelineRunId}

✅

✅

✅

✅

✅

✅

✅

✅

✅

✅

Start pipeline jobs

Paiflow:StartPipelineRun

Paiflow:StartPipelineRun

/pipelinerun/{pipelineRunId}

✅

✅

✅

✅

✅

✅

✅

✅

Obtain pipeline job node information

Paiflow:GetPipelineRunNode

Paiflow:GetPipelineRunNode

/pipelinerun/{pipelineRunId}

✅

✅

✅

✅

✅

✅

✅

✅

✅

✅

Terminate pipeline job

Paiflow:TerminatePipelineRun

Paiflow:TerminatePipelineRun

/pipelinerun/{pipelineRunId}

✅

✅

✅

✅

✅

✅

✅

✅

Obtain public and self-created pipeline jobs, node information and outputs in batches

Paiflow:ListPipelineRunsStatus

Paiflow:ListPipelineRunsStatus

/pipelinerun/\*

✅

✅

✅

✅

✅

✅

✅

✅

✅

✅

List public and self-created pipeline job sources

Paiflow:ListPipelineRunSources

Paiflow:ListPipelineRunSources

/pipelinerun/\*

✅

✅

✅

✅

✅

✅

✅

✅

✅

✅

Delete pipeline job

Paiflow:DeletePipelineRun

Paiflow:DeletePipelineRun

/pipelinerun/{pipelineRunId}

✅

✅

✅

✅

✅

✅

✅

✅

List public and self-created pipeline job

Paiflow:ListPipelineRuns

Paiflow:ListPipelineRuns

/pipelinerun/\*

✅

✅

✅

✅

✅

✅

✅

✅

✅

✅

Obtain all pipeline jobs, node information and outputs in a workspace in batches

Paiflow:ListAllPipelineRunsStatus

Paiflow:ListAllPipelineRunsStatus

/pipelinerun/\*

✅

List all pipeline job sources in a workspace

Paiflow:ListAllPipelineRunSources

Paiflow:ListAllPipelineRunSources

/pipelinerun/\*

✅

List all pipeline jobs in a workspace

Paiflow:ListAllPipelineRuns

Paiflow:ListAllPipelineRuns

/pipelinerun/\*

✅

#### **Data Science Workshop (DSW)**

**Permission**

**Action (can be managed in the PAI workspace)**

**Action (can be managed in the RAM console)**

**Resource**

**Workspace Administrator/Owner**

**Algorithm Developer**

**Algorithm O&M Engineer**

**Private (created by me)**

**Private (created by others)**

**Public (created by me)**

**Public (created by others)**

**Private (created by me)**

**Private (created by others)**

**Public**

Create instances (pay-as-you-go)

PaiDSW:CreatePostPaidInstance

PaiDSW:CreatePostPaidInstance

dswinstance/\*

✅

✅

✅

Create instances (use existing subscription resource groups)

PaiDSW:CreatePrePaidInstance

PaiDSW:CreatePrePaidInstance

dswinstance/\*

✅

✅

✅

✅

✅

Start instances

PaiDSW:StartInstance

PaiDSW:StartInstance

dswinstance/{instanceId}

✅

✅

✅

✅

✅

Delete instances (pay-as-you-go)

PaiDSW:DeletePostPaidInstance

PaiDSW:DeletePostPaidInstance

dswinstance/{instanceId}

✅

✅

✅

Delete instances (use existing subscription resource groups)

PaiDSW:DeletePrePaidInstance

PaiDSW:DeletePrePaidInstance

dswinstance/{instanceId}

✅

✅

✅

✅

✅

View instances

PaiDSW:GetInstance

PaiDSW:GetInstance

dswinstance/{instanceId}

✅

✅

✅

✅

✅

✅

Update instances (pay-as-you-go)

PaiDSW:UpdatePostPaidInstance

PaiDSW:UpdatePostPaidInstance

dswinstance/{instanceId}

✅

✅

✅

Update instances (use existing subscription resource groups)

PaiDSW:UpdatePrePaidInstance

PaiDSW:UpdatePrePaidInstance

dswinstance/{instanceId}

✅

✅

✅

✅

✅

Stop instances

PaiDSW:StopInstance

PaiDSW:StopInstance

dswinstance/{instanceId}

✅

✅

✅

✅

✅

Access instances

PaiDSW:OpenInstance

PaiDSW:OpenInstance

dswinstance/{instanceId}

✅

✅

✅

✅

✅

✅

List public and self-created instances

PaiDSW:ListInstances

PaiDSW:ListInstances

dswinstance/\*

✅

✅

✅

✅

✅

✅

List all instances in a workspace

PaiDSW:ListAllInstances

PaiDSW:ListAllInstances

dswinstance/\*

✅

Check whether all instances in a workspace exists

PaiDSW:CheckInstanceExistence

PaiDSW:CheckInstanceExistence

dswinstance/\*

✅

✅

✅

✅

✅

✅

✅

✅

Create shutdown policies of idle instances

PaiDSW:CreateIdleInstanceCuller

PaiDSW:CreateIdleInstanceCuller

dswinstance/{instanceId}

✅

✅

✅

✅

✅

Obtain shutdown policies of idle instances

PaiDSW:GetIdleInstanceCuller

PaiDSW:GetIdleInstanceCuller

dswinstance/{instanceId}

✅

✅

✅

✅

✅

✅

Delete shutdown policies of idle instances

PaiDSW:DeleteIdleInstanceCuller

PaiDSW:DeleteIdleInstanceCuller

dswinstance/{instanceId}

✅

✅

✅

✅

✅

Create scheduled stop tasks

PaiDSW:CreateInstanceShutdownTimer

PaiDSW:CreateInstanceShutdownTimer

dswinstance/{instanceId}

✅

✅

✅

✅

✅

Delete scheduled stop tasks

PaiDSW:DeleteInstanceShutdownTimer

PaiDSW:DeleteInstanceShutdownTimer

dswinstance/{instanceId}

✅

✅

✅

✅

✅

Obtain scheduled stop tasks

PaiDSW:GetInstanceShutdownTimer

PaiDSW:GetInstanceShutdownTimer

dswinstance/{instanceId}

✅

✅

✅

✅

✅

✅

Create instance snapshots

PaiDSW:CreateInstanceSnapshot

PaiDSW:CreateInstanceSnapshot

dswinstance/{instanceId}/snapshot/\*

✅

✅

✅

✅

✅

✅

Delete instance snapshots

PaiDSW:DeleteInstanceSnapshot

PaiDSW:DeleteInstanceSnapshot

dswinstance/{instanceId}/snapshot/{snapshotId}

✅

✅

✅

✅

✅

✅

Obtain a specified instance snapshot

PaiDSW:GetInstanceSnapshot

PaiDSW:GetInstanceSnapshot

dswinstance/{instanceId}/snapshot/{snapshotId}

✅

✅

✅

✅

✅

✅

List instance snapshots

PaiDSW:ListInstanceSnapshot

PaiDSW:ListInstanceSnapshot

dswinstance/{instanceId}/snapshot/\*

✅

✅

✅

✅

✅

✅

Create a share for a specified notebook

PaiDSW:CreateShare

PaiDSW:CreateShare

dswinstance/{instanceId}/share/\*

✅

✅

✅

✅

✅

✅

List shared notebook files from a user

PaiDSW:ListShares

PaiDSW:ListShares

dswinstance/{instanceId}/share/\*

✅

✅

✅

✅

✅

✅

List events of a specified instance

PaiDSW:GetInstanceEvents

PaiDSW:GetInstanceEvents

dswinstance/{instanceId}

✅

✅

✅

✅

✅

✅

Obtain monitoring metrics of a specified instance

PaiDSW:GetInstanceMetrics

PaiDSW:GetInstanceMetrics

dswinstance/{instanceId}

✅

✅

✅

✅

✅

✅

Obtain the lifecycle of a specified instance

PaiDSW:GetLifecycle

PaiDSW:GetLifecycle

dswinstance/{instanceId}

✅

✅

✅

✅

✅

✅

Obtain the authentication information of a specified instance (proxy ssh)

PaiDSW:GetToken

PaiDSW:GetToken

dswinstance/{instanceId}

✅

✅

✅

✅

✅

✅

Obtain statistics of public and self-created DSW instances

PaiDSW:ListInstanceStatistics

PaiDSW:ListInstanceStatistics

dswinstance/\*

✅

✅

✅

✅

✅

✅

Obtain statistics of all DSW instances in a workspace

PaiDSW:ListAllInstanceStatistics

PaiDSW:ListAllInstanceStatistics

dswinstance/\*

✅

Create temporary files

PaiDSW:CreateTempFile (This action is allowed unless you specify Deny)

tempfile/\*

Delete temporary files

PaiDSW:DeleteTempFile (This action is allowed unless you specify Deny)

tempfile/{tempfileId}

Obtain temporary files

PaiDSW:GetTempFile (This action is allowed unless you specify Deny)

tempfile/{tempfileId}

Update temporary files

PaiDSW:UpdateTempFile (This action is allowed unless you specify Deny)

tempfile/{tempfileId}

List temporary files

PaiDSW:ListTempFiles (This action is allowed unless you specify Deny)

tempfile/\*

Create temporary file tasks

PaiDSW:CreateTempFileTask (This action is allowed unless you specify Deny)

tempfiletask/\*

Delete temporary file tasks

PaiDSW:DeleteTempFileTask (This action is allowed unless you specify Deny)

tempfiletask/{tempfileTaskId}

Update temporary files task

PaiDSW:UpdateTempFileTask (This action is allowed unless you specify Deny)

tempfiletask/{tempfileTaskId}

Obtain user configurations

PaiDSW:GetUserConfig (This action is allowed unless you specify Deny)

userconfig/\*

List available ECS specifications

PaiDSW:ListEcsSpecs (This action is allowed unless you specify Deny)

ecsspec/\*

List available ECS specifications based on specification types

PaiDSW:ListEcsSpecsByInstanceTypes (This action is allowed unless you specify Deny)

ecsspec/\*

Update instance tags

PaiDSW:UpdateInstanceLabels

PaiDSW:UpdateInstanceLabels

dswinstance/{instanceId}/labels

✅

✅

✅

✅

✅

Delete instance tags

PaiDSW:DeleteInstanceLabels

PaiDSW:DeleteInstanceLabels

dswinstance/{instanceId}/labels

✅

✅

✅

✅

✅

#### **Deep Learning Containers (DLC)**

**Permission**

**Action (can be managed in the PAI workspace)**

**Action (can be managed in the RAM console)**

**Resource**

**Workspace Administrator/Owner**

**Algorithm Developer**

**Algorithm O&M Engineer**

**Private (created by me)**

**Private (created by others)**

**Public (created by me)**

**Public (created by others)**

**Private (created by me)**

**Private (created by others)**

**Public**

Create jobs

PaiDLC:CreateJob

PaiDLC:CreateJob

dlcjob/\*

✅

✅

✅

View job details

PaiDLC:GetJob

PaiDLC:GetJob

dlcjob/jobid

✅

✅

✅

✅

View job statistics in batches

PaiDLC:BatchGetJobsStatistics

PaiDLC:BatchGetJobsStatistics

dlcjob/\*

✅

✅

✅

✅

View job statistics

PaiDLC:GetJobsStatistics

PaiDLC:GetJobsStatistics

dlcjob/\*

✅

✅

✅

✅

List self-created jobs

PaiDLC:ListJobs

PaiDLC:ListJobs

dlcjob/\*

✅

✅

✅

✅

✅

Clone jobs

PaiDLC:CloneJob

PaiDLC:CloneJob

dlcjob/jobid

✅

✅

✅

✅

Stop jobs

PaiDLC:StopJob

PaiDLC:StopJob

dlcjob/jobid

✅

✅

✅

✅

Share jobs

PaiDLC:ShareJob

PaiDLC:ShareJob

dlcjob/jobid

✅

✅

✅

✅

Modify job priority

PaiDLC:UpdateJob

PaiDLC:UpdateJob

dlcjob/jobid

✅

✅

✅

✅

Delete jobs

PaiDLC:DeleteJob

PaiDLC:DeleteJob

dlcjob/jobid

✅

✅

✅

✅

Generate command line script for jobs

PaiDLC:GenerateJobScript

PaiDLC:GenerateJobScript

dlcjob/jobid

✅

✅

✅

✅

Check whether job token is valid

PaiDLC:CheckWebTerminalToken

PaiDLC:CheckWebTerminalToken

dlcjob/jobid

✅

✅

✅

✅

View job retry information

PaiDLC:ListJobRetries

PaiDLC:ListJobRetries

dlcjob/jobid

✅

✅

✅

✅

Obtain specified job sanity check result

PaiDLC:GetJobSanityCheckResult

PaiDLC:GetJobSanityCheckResult

dlcjob/jobid

✅

✅

✅

✅

Obtain multiple job sanity check results

PaiDLC:ListJobSanityCheckResults

PaiDLC:ListJobSanityCheckResults

dlcjob/jobid

✅

✅

✅

✅

Obtain job metrics

PaiDLC:GetMetrics

PaiDLC:GetMetrics

dlcjob/jobid

✅

✅

✅

✅

Download large log file of a job

PaiDLC:DownloadLargeLogs

PaiDLC:DownloadLargeLogs

dlcjob/jobid

✅

✅

✅

✅

Query the latest job-level aggregated logs

PaiDLC:GetLatestJobLogs

PaiDLC:GetLatestJobLogs

dlcjob/jobid

✅

✅

✅

✅

Query job-level aggregated logs

PaiDLC:GetJobPagedLogs

PaiDLC:GetJobPagedLogs

dlcjob/jobid

✅

✅

✅

✅

Query the number of logs of a job

PaiDLC:GetLogsCount

PaiDLC:GetLogsCount

dlcjob/jobid

✅

✅

✅

✅

Query all aggregated events of a job

PaiDLC:GetJobEvents

PaiDLC:GetJobEvents

dlcjob/jobid

✅

✅

✅

✅

Query the latest job-level aggregated event

PaiDLC:GetLatestJobEvents

PaiDLC:GetLatestJobEvents

dlcjob/jobid

✅

✅

✅

✅

Query all aggregated events of a job

PaiDLC:GetJobPagedEvents

PaiDLC:GetJobPagedEvents

dlcjob/jobid

✅

✅

✅

✅

Obtain the token of a job

PaiDLC:GetToken

PaiDLC:GetToken

dlcjob/jobid

✅

✅

✅

✅

Obtain all pods of a job

PaiDLC:ListJobPods

PaiDLC:ListJobPods

dlcjob/jobid/pod/\*

✅

✅

✅

✅

Obtain a temporary token for accessing a job pod

PaiDLC:GetWebTerminal

PaiDLC:GetWebTerminal

dlcjob/jobid/pod/podid

✅

✅

✅

✅

Obtain the logs of a pod of a job

PaiDLC:GetPodLogs

PaiDLC:GetPodLogs

dlcjob/jobid/pod/podid

✅

✅

✅

✅

Obtain the latest pod logs of a job

PaiDLC:GetLatestPodLogs

PaiDLC:GetLatestPodLogs

dlcjob/jobid/pod/podid

✅

✅

✅

✅

Obtain the paged logs of a job pod

PaiDLC:GetPodPagedLogs

PaiDLC:GetPodPagedLogs

dlcjob/jobid/pod/podid

✅

✅

✅

✅

View the context of logs of a job pod

PaiDLC:GetPodContextLogs

PaiDLC:GetPodContextLogs

dlcjob/jobid/pod/podid

✅

✅

✅

✅

Obtain the event information of a job pod

PaiDLC:GetPodEvents

PaiDLC:GetPodEvents

dlcjob/jobid/pod/podid

✅

✅

✅

✅

Query the latest pod-level aggregated logs of a job

PaiDLC:GetLatestPodEvents

PaiDLC:GetLatestPodEvents

dlcjob/jobid/pod/podid

✅

✅

✅

✅

Query the event information of a job pod

PaiDLC:GetPodPagedEvents

PaiDLC:GetPodPagedEvents

dlcjob/jobid/pod/podid

✅

✅

✅

✅

View the context of an event in a job pod

PaiDLC:GetPodContextEvents

PaiDLC:GetPodContextEvents

dlcjob/jobid/pod/podid

✅

✅

✅

✅

Create TensorBoard instances

PaiDLC:CreateTensorboard

PaiDLC:CreateTensorboard

tensorboard/\*

✅

✅

✅

View TensorBoard instances

PaiDLC:GetTensorboard

PaiDLC:GetTensorboard

tensorboard/tbid

✅

✅

✅

✅

List self-created Tensorboard instances

PaiDLC:ListTensorboards

PaiDLC:ListTensorboards

tensorboard/\*

✅

✅

✅

✅

✅

Start TensorBoard instances

PaiDLC:StartTensorboard

PaiDLC:StartTensorboard

tensorboard/tbid

✅

✅

✅

✅

Stop TensorBoard instance

PaiDLC:StopTensorboard

PaiDLC:StopTensorboard

tensorboard/tbid

✅

✅

✅

✅

Update TensorBoard instance

PaiDLC:UpdateTensorboard

PaiDLC:UpdateTensorboard

tensorboard/tbid

✅

✅

✅

✅

Delete TensorBoard instances

PaiDLC:DeleteTensorboard

PaiDLC:DeleteTensorboard

tensorboard/tbid

✅

✅

✅

✅

Obtain TensorBoard share link

PaiDLC:GetTensorboardSharedUrl

PaiDLC:GetTensorboardSharedUrl

tensorboard/tbid

✅

✅

✅

✅

#### **AutoML**

**Permission**

**Action (can be managed in the PAI workspace)**

**Action (can be managed in the RAM console)**

**Workspace Administrator/Owner**

**Algorithm Developer**

**Algorithm O&M Engineer**

**Visitor**

**Private (created by me)**

**Private (created by others)**

**Public (created by me)**

**Public (created by others)**

**Private (created by me)**

**Private (created by others)**

**Public**

**Private (created by me)**

**Private (created by others)**

**Public**

Create hyperparameter optimization (HPO) experiments

PAIAutoML:CreateHpoExperiment

PAIAutoML:CreateHpoExperiment

✅

✅

Restart failed trials in HPO experiments

PAIAutoML:RestartHpoTrials

PAIAutoML:RestartHpoTrials

✅

✅

Stop HPO experiments

PAIAutoML:StopHpoExperiment

PAIAutoML:StopHpoExperiment

✅

✅

✅

✅

✅

Stop trials in HPO experiments

PAIAutoML:StopHpoTrials

PAIAutoML:StopHpoTrials

✅

✅

✅

✅

✅

Update HPO experiments

PAIAutoML:UpdateHpoExperiment

PAIAutoML:UpdateHpoExperiment

✅

✅

Delete HPO experiments

PAIAutoML:DeleteHpoExperiment

PAIAutoML:DeleteHpoExperiment

✅

✅

View HPO experiment information

PAIAutoML:GetHpoExperiment

PAIAutoML:GetHpoExperiment

✅

✅

✅

✅

✅

✅

✅

✅

✅

View information about a single trial

PAIAutoML:GetHpoTrial

PAIAutoML:GetHpoTrial

✅

✅

✅

✅

✅

✅

✅

✅

✅

View the log of a single HPO experiment

PAIAutoML:ListHpoExperimentLogs

PAIAutoML:ListHpoExperimentLogs

✅

✅

✅

✅

✅

✅

✅

✅

✅

Query HPO experiments

PAIAutoML:ListHpoExperiments

PAIAutoML:ListHpoExperiments

✅

✅

✅

✅

✅

✅

✅

✅

✅

View the log of a single trial in an HPO experiment

PAIAutoML:ListHpoTrialLogs

PAIAutoML:ListHpoTrialLogs

✅

✅

✅

✅

✅

✅

✅

✅

✅

View the trial information of HPO experiments

PAIAutoML:ListHpoTrials

PAIAutoML:ListHpoTrials

✅

✅

✅

✅

✅

✅

✅

✅

✅

View the log file name of a single trial

PAIAutoML:ListHpoTrialLogNames

PAIAutoML:ListHpoTrialLogNames

✅

✅

✅

✅

✅

✅

✅

✅

✅

View the command information of a single trial

PAIAutoML:ListHpoTrialCommands

PAIAutoML:ListHpoTrialCommands

✅

✅

✅

✅

✅

✅

✅

✅

✅

#### Application Development (LangStudio)

**Permission description**

**Permission field (managed through PAI Workspace Management)**

**Workspace owner/Workspace administrator**

**Algorithm Development**

**Algorithm O&M engineer**

**Private (created by self)**

**Private (created by others)**

**Public (created by self)**

**Public (created by others)**

**Private (created by self)**

**Private (created by others)**

**Public**

Create application flow template

PaiLangStudio:CreateFlowTemplate

✅

✅

✅

✅

✅

✅

Update application flow template

PaiLangStudio:UpdateFlowTemplate

✅

✅

✅

✅

✅

✅

Delete application flow template

PaiLangStudio:DeleteFlowTemplate

✅

✅

✅

✅

✅

✅

View application flow template

PaiLangStudio:GetFlowTemplate

✅

✅

✅

✅

✅

✅

List application flow templates

PaiLangStudio:ListFlowTemplates

✅

✅

✅

✅

✅

✅

Create application flow

PaiLangStudio:CreateFlow

✅

✅

✅

✅

✅

✅

View application flow

PaiLangStudio:GetFlow

✅

✅

✅

✅

✅

✅

Update application flow

PaiLangStudio:UpdateFlow

✅

✅

✅

✅

✅

✅

Delete application flow

PaiLangStudio:DeleteFlow

✅

✅

✅

✅

✅

✅

List application flows

PaiLangStudio:ListFlows

✅

✅

✅

✅

✅

✅

Deploy application flow

PaiLangStudio:DeployFlow

✅

✅

✅

Create connection

PaiLangStudio:CreateConnection

✅

✅

✅

✅

✅

✅

View connection

PaiLangStudio:GetConnection

✅

✅

✅

✅

✅

✅

Update connection

PaiLangStudio:UpdateConnection

✅

✅

✅

✅

✅

✅

Delete connection

PaiLangStudio:DeleteConnection

✅

✅

✅

✅

✅

✅

List connections

PaiLangStudio:ListConnections

✅

✅

✅

✅

✅

✅

Create runtime environment

PaiLangStudio:CreateRuntime

✅

✅

✅

View runtime environment details

PaiLangStudio:GetRuntime

✅

✅

✅

✅

✅

✅

List runtime environments

PaiLangStudio:ListRuntimes

✅

✅

✅

✅

✅

✅

Reinstall dependencies for runtime environment

PaiLangStudio:ReloadRuntime

✅

✅

✅

✅

✅

✅

Update runtime environment

PaiLangStudio:UpdateRuntime

✅

✅

✅

Delete runtime environment

PaiLangStudio:DeleteRuntime

✅

✅

✅

View tool metadata

PaiLangStudio:GetToolMeta

✅

✅

✅

✅

✅

✅

List tools supported by the runtime container

PaiLangStudio:GetPackageTools

✅

✅

✅

✅

✅

✅

Get default tool metadata

PaiLangStudio:GetBuiltinTools

✅

✅

✅

✅

✅

✅

Create an application flow run

PaiLangStudio:CreateFlowRun

✅

✅

✅

✅

✅

✅

View application flow run details

PaiLangStudio:GetFlowRun

✅

✅

✅

✅

✅

✅

List application flow run records

PaiLangStudio:ListFlowRuns

✅

✅

✅

✅

✅

✅

Cancel application flow run

PaiLangStudio:CancelFlowRun

✅

✅

✅

✅

✅

✅

Delete application flow run

PaiLangStudio:DeleteFlowRun

✅

✅

✅

✅

✅

✅

Check VPC consistency between user and resource

PaiLangStudio:CheckVpcConsistency

✅

✅

✅

✅

✅

✅

Create knowledge base

PaiLangStudio:CreateKnowledgeBase

✅

✅

✅

✅

✅

✅

Update knowledge base

PaiLangStudio:UpdateKnowledgeBase

✅

✅

✅

✅

✅

✅

Get knowledge base details

PaiLangStudio:GetKnowledgeBase

✅

✅

✅

✅

✅

✅

List knowledge bases

PaiLangStudio:ListKnowledgeBases

✅

✅

✅

✅

✅

✅

Delete knowledge base

PaiLangStudio:DeleteKnowledgeBase

✅

✅

✅

✅

✅

✅

Resume application flow run

PaiLangStudio:ResumeFlowRun

✅

✅

✅

✅

✅

✅

Create snapshot

PaiLangStudio:CreateSnapshot

✅

✅

✅

✅

✅

✅

View snapshot details

PaiLangStudio:GetSnapshot

✅

✅

✅

✅

✅

✅

List snapshots

PaiLangStudio:ListSnapshots

✅

✅

✅

✅

✅

✅

Update snapshot

PaiLangStudio:UpdateSnapshot

✅

✅

✅

✅

✅

✅

Delete snapshot

PaiLangStudio:DeleteSnapshot

✅

✅

✅

✅

✅

✅

Create deployment

PaiLangStudio:CreateDeployment

✅

✅

✅

View deployment details

PaiLangStudio:GetDeployment

✅

✅

✅

✅

✅

✅

List deployments

PaiLangStudio:ListDeployments

✅

✅

✅

✅

✅

✅

Update deployment record

PaiLangStudio:UpdateDeployment

✅

✅

✅

Delete deployment record

PaiLangStudio:DeleteDeplpoyment

✅

✅

✅

Create toolset

PaiLangStudio:CreateToolset

✅

✅

✅

✅

✅

✅

Get toolset details

PaiLangStudio:GetToolset

✅

✅

✅

✅

✅

✅

List toolsets

PaiLangStudio:ListToolsets

✅

✅

✅

✅

✅

✅

Update toolset

PaiLangStudio:UpdateToolset

✅

✅

✅

✅

✅

✅

Delete toolset

PaiLangStudio:DeleteToolset

✅

✅

✅

✅

✅

✅

Validate tool

PaiLangStudio:ValidateTool

✅

✅

✅

✅

✅

✅

#### **Elastic Algorithm Service (EAS)**

**Permission**

**Action (can be managed in the PAI workspace)**

**Action (can be managed in the RAM console)**

**Workspace Administrator/Owner**

**Algorithm Developer**

**Algorithm O&M Engineer**

**Private (created by me)**

**Private (created by others)**

**Public (created by me)**

**Public (created by others)**

**Private (created by me)**

**Private (created by others)**

**Public**

Create services

eas:CreateService

eas:CreateService

✅ Accessibility does not matter

✅ Accessibility does not matter

Enable auto scaling for services

eas:CreateServiceAutoScaler

eas:CreateServiceAutoScaler

✅ Accessibility does not matter

✅ Accessibility does not matter

Enables scheduled scaling for services

eas:CreateServiceCronScaler

eas:CreateServiceCronScaler

✅ Accessibility does not matter

✅ Accessibility does not matter

Enable traffic mirroring for services

eas:CreateServiceMirror

eas:CreateServiceMirror

✅ Accessibility does not matter

✅ Accessibility does not matter

Create application services

eas:CreateAppService

eas:CreateAppService

✅ Accessibility does not matter

✅ Accessibility does not matter

Clone services

eas:CloneService

eas:CloneService

✅ Accessibility does not matter

✅ Accessibility does not matter

Delete services

eas:DeleteService

eas:DeleteService

✅ Accessibility does not matter

✅ Accessibility does not matter

Delete service tags

eas:DeleteServiceLabel

eas:DeleteServiceLabel

✅ Accessibility does not matter

✅ Accessibility does not matter

Disable auto scaling for services

eas:DeleteServiceAutoScaler

eas:DeleteServiceAutoScaler

✅ Accessibility does not matter

✅ Accessibility does not matter

Disable scheduled scaling for services

eas:DeleteServiceCronScaler

eas:DeleteServiceCronScaler

✅ Accessibility does not matter

✅ Accessibility does not matter

Restart service instances

eas:DeleteServiceInstances

eas:DeleteServiceInstances

✅ Accessibility does not matter

✅ Accessibility does not matter

Disable traffic mirroring for services

eas:DeleteServiceMirror

eas:DeleteServiceMirror

✅ Accessibility does not matter

✅ Accessibility does not matter

Update services

eas:UpdateService

eas:UpdateService

✅ Accessibility does not matter

✅ Accessibility does not matter

Update service tags

eas:UpdateServiceLabel

eas:UpdateServiceLabel

✅ Accessibility does not matter

✅ Accessibility does not matter

Start services

eas:StartService

eas:StartService

✅ Accessibility does not matter

✅ Accessibility does not matter

Stop services

eas:StopService

eas:StopService

✅ Accessibility does not matter

✅ Accessibility does not matter

Restart services

eas:RestartService

eas:RestartService

✅ Accessibility does not matter

✅ Accessibility does not matter

Update auto scaling configurations for services

eas:UpdateServiceAutoScaler

eas:UpdateServiceAutoScaler

✅ Accessibility does not matter

✅ Accessibility does not matter

Update scheduled scaling configurations for services

eas:UpdateServiceCronScaler

eas:UpdateServiceCronScaler

✅ Accessibility does not matter

✅ Accessibility does not matter

Develop services

eas:DevelopService

eas:DevelopService

✅ Accessibility does not matter

✅ Accessibility does not matter

Check and publish containers

eas:CommitService

eas:CommitService

✅ Accessibility does not matter

✅ Accessibility does not matter

Update traffic mirroring configurations for services

eas:UpdateServiceMirror

eas:UpdateServiceMirror

✅ Accessibility does not matter

✅ Accessibility does not matter

Switch service versions

eas:UpdateServiceVersion

eas:UpdateServiceVersion

✅ Accessibility does not matter

✅ Accessibility does not matter

Update the service security lock

eas:UpdateServiceSafetyLock

eas:UpdateServiceSafetyLock

✅ Accessibility does not matter

✅ Accessibility does not matter

Update the attributes of service instances

eas:UpdateServiceInstance

eas:UpdateServiceInstance

✅ Accessibility does not matter

✅ Accessibility does not matter

Update application services

eas:UpdateAppService

eas:UpdateAppService

✅ Accessibility does not matter

✅ Accessibility does not matter

Adjust the ratio of service blue-green traffic

eas:ReleaseService

eas:ReleaseService

✅ Accessibility does not matter

✅ Accessibility does not matter

Query service details

eas:DescribeService

eas:DescribeService

✅ Accessibility does not matter

✅ Accessibility does not matter

✅ Accessibility does not matter

View auto scaling configurations for services

eas:DescribeServiceAutoScaler

eas:DescribeServiceAutoScaler

✅ Accessibility does not matter

✅ Accessibility does not matter

✅ Accessibility does not matter

View scheduled scaling configurations for services

eas:DescribeServiceCronScaler

eas:DescribeServiceCronScaler

✅ Accessibility does not matter

✅ Accessibility does not matter

✅ Accessibility does not matter

View diagnostic details of services

eas:DescribeServiceDiagnosis

eas:DescribeServiceDiagnosis

✅ Accessibility does not matter

✅ Accessibility does not matter

✅ Accessibility does not matter

View diagnostic details of service instances

eas:DescribeServiceInstanceDiagnosis

eas:DescribeServiceInstanceDiagnosis

✅ Accessibility does not matter

✅ Accessibility does not matter

✅ Accessibility does not matter

View service logs

eas:DescribeServiceLog

eas:DescribeServiceLog

✅ Accessibility does not matter

✅ Accessibility does not matter

✅ Accessibility does not matter

Query service events

eas:DescribeServiceEvent

eas:DescribeServiceEvent

✅ Accessibility does not matter

✅ Accessibility does not matter

✅ Accessibility does not matter

View traffic mirroring configurations for services

eas:DescribeServiceMirror

eas:DescribeServiceMirror

✅ Accessibility does not matter

✅ Accessibility does not matter

✅ Accessibility does not matter

View service group details

eas:DescribeGroup

eas:DescribeGroup

✅ Accessibility does not matter

✅ Accessibility does not matter

✅ Accessibility does not matter

Query historical prices of preemptible instances

eas:DescribeSpotDiscountHistory

eas:DescribeSpotDiscountHistory

✅ Accessibility does not matter

✅ Accessibility does not matter

✅ Accessibility does not matter

List service instances

eas:ListServiceInstances

eas:ListServiceInstances

✅ Accessibility does not matter

✅ Accessibility does not matter

✅ Accessibility does not matter

View the historical versions of services

eas:ListServiceVersions

eas:ListServiceVersions

✅ Accessibility does not matter

✅ Accessibility does not matter

✅ Accessibility does not matter

View the container list of services

eas:ListServiceContainers

eas:ListServiceContainers

✅ Accessibility does not matter

✅ Accessibility does not matter

✅ Accessibility does not matter

List services

eas:ListServices

eas:ListServices

✅ Accessibility does not matter

✅ Accessibility does not matter

✅ Accessibility does not matter

List service groups

eas:ListGroups

eas:ListGroups

✅ Accessibility does not matter

✅ Accessibility does not matter

✅ Accessibility does not matter

Create resource groups

eas:CreateResource

eas:CreateResource

✅ Accessibility does not matter

✅ Accessibility does not matter

Create resource group instances

eas:CreateResourceInstances

eas:CreateResourceInstances

✅ Accessibility does not matter

✅ Accessibility does not matter

Enable log delivery for resource groups

eas:CreateResourceLog

eas:CreateResourceLog

✅ Accessibility does not matter

✅ Accessibility does not matter

Delete resource groups

eas:DeleteResource

eas:DeleteResource

✅ Accessibility does not matter

✅ Accessibility does not matter

Disable VPC direct connection for resource groups

eas:DeleteResourceDLink

eas:DeleteResourceDLink

✅ Accessibility does not matter

✅ Accessibility does not matter

Delete instances from a resource group

eas:DeleteResourceInstances

eas:DeleteResourceInstances

✅ Accessibility does not matter

✅ Accessibility does not matter

Disable log delivery for resource groups

eas:DeleteResourceLog

eas:DeleteResourceLog

✅ Accessibility does not matter

✅ Accessibility does not matter

Update resource group information

eas:UpdateResource

eas:UpdateResource

✅ Accessibility does not matter

✅ Accessibility does not matter

Update the VPC direct connection configuration of a resource group

eas:UpdateResourceDLink

eas:UpdateResourceDLink

✅ Accessibility does not matter

✅ Accessibility does not matter

Update resource group instance

eas:UpdateResourceInstance

eas:UpdateResourceInstance

✅ Accessibility does not matter

✅ Accessibility does not matter

View resource group details

eas:DescribeResource

eas:DescribeResource

✅ Accessibility does not matter

✅ Accessibility does not matter

✅ Accessibility does not matter

View VPC direct connection information of a resource group

eas:DescribeResourceDLink

eas:DescribeResourceDLink

✅ Accessibility does not matter

✅ Accessibility does not matter

✅ Accessibility does not matter

View the log delivery information of a resource group

eas:DescribeResourceLog

eas:DescribeResourceLog

✅ Accessibility does not matter

✅ Accessibility does not matter

✅ Accessibility does not matter

List instances in a resource group

eas:ListResourceInstances

eas:ListResourceInstances

✅ Accessibility does not matter

✅ Accessibility does not matter

✅ Accessibility does not matter

List working instances in a resource group

eas:ListResourceInstanceWorker

eas:ListResourceInstanceWorker

✅ Accessibility does not matter

✅ Accessibility does not matter

✅ Accessibility does not matter

List resource groups

eas:ListResources

eas:ListResources

✅ Accessibility does not matter

✅ Accessibility does not matter

✅ Accessibility does not matter

List services in a resource group

eas:ListResourceServices

eas:ListResourceServices

✅ Accessibility does not matter

✅ Accessibility does not matter

✅ Accessibility does not matter

Create stress testing tasks

eas:CreateBenchmarkTask

eas:CreateBenchmarkTask

✅ Accessibility does not matter

✅ Accessibility does not matter

Delete stress testing tasks

eas:DeleteBenchmarkTask

eas:DeleteBenchmarkTask

✅ Accessibility does not matter

✅ Accessibility does not matter

View the details of a stress testing task

eas:DescribeBenchmarkTask

eas:DescribeBenchmarkTask

✅ Accessibility does not matter

✅ Accessibility does not matter

✅ Accessibility does not matter

View the report of a stress testing task

eas:DescribeBenchmarkTaskReport

eas:DescribeBenchmarkTaskReport

✅ Accessibility does not matter

✅ Accessibility does not matter

✅ Accessibility does not matter

List stress testing tasks

eas:ListBenchmarkTask

eas:ListBenchmarkTask

✅ Accessibility does not matter

✅ Accessibility does not matter

✅ Accessibility does not matter

Start stress testing tasks

eas:StartBenchmarkTask

eas:StartBenchmarkTask

✅ Accessibility does not matter

✅ Accessibility does not matter

Stop stress testing tasks

eas:StopBenchmarkTask

eas:StopBenchmarkTask

✅ Accessibility does not matter

✅ Accessibility does not matter

Update stress testing tasks

eas:UpdateBenchmarkTask

eas:UpdateBenchmarkTask

✅ Accessibility does not matter

✅ Accessibility does not matter

Create private gateways

eas:CreateGateway

eas:CreateGateway

✅ Accessibility does not matter

✅ Accessibility does not matter

✅ Accessibility does not matter

View the details of a private gateway

eas:DescribeGateway

eas:DescribeGateway

✅ Accessibility does not matter

✅ Accessibility does not matter

✅ Accessibility does not matter

Updates private gateways

eas:UpdateGateway

eas:UpdateGateway

✅ Accessibility does not matter

✅ Accessibility does not matter

✅ Accessibility does not matter

Create an internal endpoint of a private gateway

eas:CreateGatewayIntranetLinkedVpc

eas:CreateGatewayIntranetLinkedVpc

✅ Accessibility does not matter

✅ Accessibility does not matter

✅ Accessibility does not matter

View internal endpoints of a private gateway

eas:ListGatewayIntranetLinkedVpc

eas:ListGatewayIntranetLinkedVpc

✅ Accessibility does not matter

✅ Accessibility does not matter

✅ Accessibility does not matter

Delete an internal endpoint of a private gateway

eas:DeleteGatewayIntranetLinkedVpc

eas:DeleteGatewayIntranetLinkedVpc

✅ Accessibility does not matter

✅ Accessibility does not matter

✅ Accessibility does not matter

Delete a private gateway

eas:DeleteGateway

eas:DeleteGateway

✅ Accessibility does not matter

✅ Accessibility does not matter

✅ Accessibility does not matter

Query private gateway intranet supported zones

eas:ListGatewayIntranetSupportedZone

eas:ListGatewayIntranetSupportedZone

✅ Accessibility does not matter

✅ Accessibility does not matter

✅ Accessibility does not matter

Query list of peered VPCs

eas:ListGatewayIntranetLinkedVpcPeer

eas:ListGatewayIntranetLinkedVpcPeer

✅ Accessibility does not matter

✅ Accessibility does not matter

✅ Accessibility does not matter

Add a peered VPC

eas:CreateGatewayIntranetLinkedVpcPeer

eas:CreateGatewayIntranetLinkedVpcPeer

✅ Accessibility does not matter

✅ Accessibility does not matter

✅ Accessibility does not matter

Delete a peered VPC

eas:DeleteGatewayIntranetLinkedVpcPeer

eas:DeleteGatewayIntranetLinkedVpcPeer

✅ Accessibility does not matter

✅ Accessibility does not matter

✅ Accessibility does not matter

Unbind gateway custom domain

eas:DetachGatewayDomain

eas:DetachGatewayDomain

✅ Accessibility does not matter

✅ Accessibility does not matter

✅ Accessibility does not matter

Bind gateway custom domain

eas:AttachGatewayDomain

eas:AttachGatewayDomain

✅ Accessibility does not matter

✅ Accessibility does not matter

✅ Accessibility does not matter

Query list of gateway custom domains

eas:ListGatewayDomains

eas:ListGatewayDomains

✅ Accessibility does not matter

✅ Accessibility does not matter

✅ Accessibility does not matter

Query list of private gateways

eas:ListGateway

eas:ListGateway

✅ Accessibility does not matter

✅ Accessibility does not matter

✅ Accessibility does not matter

Query list of gateway access permissions

eas:ListAclPolicy

eas:ListAclPolicy

✅ Accessibility does not matter

✅ Accessibility does not matter

✅ Accessibility does not matter

Remove gateway access permission

eas:DeleteAclPolicy

eas:DeleteAclPolicy

✅ Accessibility does not matter

✅ Accessibility does not matter

✅ Accessibility does not matter

Create gateway access permission

eas:CreateAclPolicy

eas:CreateAclPolicy

✅ Accessibility does not matter

✅ Accessibility does not matter

✅ Accessibility does not matter

Update tenant plugin information

eas:ReinstallTenantAddon

eas:ReinstallTenantAddon

✅ Accessibility does not matter

✅ Accessibility does not matter

View list of tenant plugins

eas:ListTenantAddons

eas:ListTenantAddons

✅ Accessibility does not matter

✅ Accessibility does not matter

Update virtual resource group information

eas:UpdateVirtualResource

eas:UpdateVirtualResource

✅ Accessibility does not matter

✅ Accessibility does not matter

✅ Accessibility does not matter

Query list of virtual resource groups

eas:ListVirtualResource

eas:ListVirtualResource

✅ Accessibility does not matter

✅ Accessibility does not matter

✅ Accessibility does not matter

View details of a virtual resource group

eas:DescribeVirtualResource

eas:DescribeVirtualResource

✅ Accessibility does not matter

✅ Accessibility does not matter

✅ Accessibility does not matter

Delete virtual resource group

eas:DeleteVirtualResource

eas:DeleteVirtualResource

✅ Accessibility does not matter

✅ Accessibility does not matter

✅ Accessibility does not matter

Create virtual resource group

eas:CreateVirtualResource

eas:CreateVirtualResource

✅ Accessibility does not matter

✅ Accessibility does not matter

✅ Accessibility does not matter

Delete resource group machine instance tags

eas:DeleteResourceInstanceLabel

eas:DeleteResourceInstanceLabel

✅ Accessibility does not matter

✅ Accessibility does not matter

Update resource group machine instance tags

eas:UpdateResourceInstanceLabel

eas:UpdateResourceInstanceLabel

✅ Accessibility does not matter

✅ Accessibility does not matter

Get list of group endpoints

eas:DescribeGroupEndpoints

eas:DescribeGroupEndpoints

✅ Accessibility does not matter

✅ Accessibility does not matter

✅ Accessibility does not matter

Get list of service endpoints

eas:DescribeServiceEndpoints

eas:DescribeServiceEndpoints

✅ Accessibility does not matter

✅ Accessibility does not matter

✅ Accessibility does not matter

Get service no-login web links

eas:DescribeServiceSignedUrl

eas:DescribeServiceSignedUrl

✅ Accessibility does not matter

✅ Accessibility does not matter

✅ Accessibility does not matter

#### **ArtLab**

Table 1. Intelligent Design ArtLab - Services

**Permission**

**Action (can be managed in the PAI workspace)**

**Action (can be managed in the RAM console)**

**Resource**

**Workspace Administrator/Owner**

**Algorithm Developer**

**Algorithm O&M Engineer**

**Visitor**

**Private (Self-created)**

**Private (Other-created)**

**Public (Self-created)**

**Public (Other-created)**

**Private (Self-created)**

**Private (Other-created)**

**Public**

**Private (Self-created)**

**Private (Other-created)**

**Public**

Create AI4D services

PaiArtLab:CreateService

PaiArtLab:CreateAI4DService

ai4dServices/\*

✅

✅

✅

List AI4D services.

PaiArtLab:ListServices

PaiArtLab:ListAI4DServices

ai4dServices/\*

✅

✅

✅

✅

Delete AI4D services

PaiArtLab:DeleteService

PaiArtLab:DeleteService

artlabservice/serivcename

✅

✅

✅

Generate a signed URL for an ArtLab service

PaiArtLab:DescribeServiceSignedUrl

PaiArtLab:DescribeServiceSignedUrl

artlabservice/serivcename

✅

✅

✅

Table 2. Intelligent Design ArtLab - Resources

**Permission Description**

**Permission Field (via PAI Workspace Management)**

**Permission Field (via RAM Management)**

**Resource**

**Workspace Owner / Workspace Admin**

**Algorithm Developer**

**Algorithm Operator**

**Guest**

**Private (Self-created)**

**Private (Other-created)**

**Public (Self-created)**

**Public (Other-created)**

**Private (Self-created)**

**Private (Other-created)**

**Public**

**Private (Self-created)**

**Private (Other-created)**

**Public**

Get ArtLab resource

PaiArtLab:GetResource

PaiArtLab:GetResource

artlabresource/{ResourceId}

✅

✅

✅

Create ArtLab resource

PaiArtLab:CreateResource

PaiArtLab:CreateResource

artlabresource/\*

✅

✅

✅

Update ArtLab resource

PaiArtLab:UpdateResource

PaiArtLab:UpdateResource

artlabresource/{ResourceId}

✅

✅

✅

List ArtLab resource

PaiArtLab:ListResources

PaiArtLab:ListResources

artlabresource/\*

✅

✅

✅

✅

Delete ArtLab resource

PaiArtLab:DeleteResource

PaiArtLab:DeleteResource

artlabresource/{ResourceId}

✅

✅

✅

## AI Asset Management

Table 1. AI Assets Management: Datasets

**Permission**

**Action (can be managed in the PAI workspace)**

**Action (can be managed in the RAM console)**

**Resource**

**Workspace Administrator/Owner**

**Algorithm Developer**

**Algorithm O&M Engineer**

**Labeling Administrator**

**Visitor**

**Private (created by me)**

**Private (created by others)**

**Public (created by me)**

**Public (created by others)**

**Private (created by me)**

**Private (created by others)**

**Public**

**Private (created by me)**

**Private (created by others)**

**Public**

**Private (created by me)**

**Private (created by others)**

**Public**

Create datasets

PaiDataset:CreateDataset

PaiDataset:CreateDataset

dataset/\*

✅

✅

✅

✅

✅

✅

✅

Obtain datasets

PaiDataset:GetDataset

PaiDataset:GetDataset

dataset/{datasetId}

✅

✅

✅

✅

✅

✅

✅

✅

Update datasets

PaiDataset:UpdateDataset

PaiDataset:UpdateDataset

dataset/{datasetId}

✅

✅

✅

✅

Delete datasets

PaiDataset:DeleteDataset

PaiDataset:DeleteDataset

dataset/{datasetId}

✅

✅

✅

✅

List all datasets in a workspace

PaiDataset:ListAllDatasets

PaiDataset:ListAllDatasets

dataset/\*

✅

List public and self-created datasets

PaiDataset:ListDatasets

PaiDataset:ListDatasets

dataset/\*

✅

✅

✅

✅

✅

✅

✅

✅

✅

Publish datasets to all members of a workspace

PaiDataset:PublishDataset

PaiDataset:PublishDataset

dataset/{datasetId}

✅

✅

✅

✅

Change dataset owner

PaiDataset:ChangeDatasetOwner

PaiDataset:ChangeDatasetOwner

dataset/{datasetId}

✅

Create dataset tags

PaiDataset:CreateDatasetLabels

PaiDataset:CreateDatasetLabels

dataset/{datasetId}

✅

✅

✅

✅

Delete dataset tags

PaiDataset:DeleteDatasetLabels

PaiDataset:DeleteDatasetLabels

dataset/{datasetId}

✅

✅

✅

✅

Create dataset version

PaiDataset:CreateDatasetVersion

PaiDataset:CreateDatasetVersion

dataset/{datasetId}/datasetVersion/\*

✅

✅

✅

✅

✅

✅

✅

Get dataset version

PaiDataset:GetDatasetVersion

PaiDataset:GetDatasetVersion

dataset/{datasetId}/datasetVersion/{versionName}

✅

✅

✅

✅

✅

✅

✅

✅

Delete dataset version

PaiDataset:DeleteDatasetVersion

PaiDataset:DeleteDatasetVersion

dataset/{datasetId}/datasetVersion/{versionName}

✅

✅

✅

✅

Update dataset version

PaiDataset:UpdateDatasetVersion

PaiDataset:UpdateDatasetVersion

dataset/{datasetId}/datasetVersion/{versionName}

✅

✅

✅

✅

Create dataset version tag

PaiDataset:CreateDatasetVersionLabels

PaiDataset:CreateDatasetVersionLabels

dataset/{datasetId}/datasetVersion/{versionName}

✅

✅

✅

✅

Delete dataset version tag

PaiDataset:DeleteDatasetVersionLabels

PaiDataset:DeleteDatasetVersionLabels

dataset/{datasetId}/datasetVersion/{versionName}

✅

✅

✅

✅

List dataset versions

PaiDataset:ListDatasetVersions

PaiDataset:ListDatasetVersions

dataset/{datasetId}/datasetVersion/\*

✅

✅

✅

✅

✅

✅

✅

✅

✅

Create dataset file metadata

PaiDataset:CreateDatasetFileMetas

PaiDataset:CreateDatasetFileMetas

dataset/{datasetId}/datasetfilemeta/\*

✅

✅

✅

✅

✅

✅

✅

Get dataset file metadata

PaiDataset:GetDatasetFileMeta

PaiDataset:GetDatasetFileMeta

dataset/{datasetId}/datasetfilemeta/{datasetfilemetaId}

✅

✅

✅

✅

✅

✅

✅

✅

Update dataset file metadata

PaiDataset:UpdateDatasetFileMetas

PaiDataset:UpdateDatasetFileMetas

dataset/{datasetId}/datasetfilemeta/{datasetfilemetaId}

✅

✅

✅

✅

Delete dataset file metadata

PaiDataset:DeleteDatasetFileMetas

PaiDataset:DeleteDatasetFileMetas

dataset/{datasetId}/datasetfilemeta/{datasetfilemetaId}

✅

✅

✅

✅

List dataset file metadata

PaiDataset:ListDatasetFileMetas

PaiDataset:ListDatasetFileMetas

dataset/{datasetId}/datasetfilemeta/\*

✅

✅

✅

✅

✅

✅

✅

✅

✅

Get dataset metadata file statistics

PaiDataset:GetDatasetFileMetasStatistics

PaiDataset:GetDatasetFileMetasStatistics

dataset/{datasetId}/datasetfilemeta/\*

✅

✅

✅

✅

✅

✅

✅

✅

✅

Create dataset task configuration

PaiDataset:CreateDatasetJobConfig

PaiDataset:CreateDatasetJobConfig

dataset/{datasetId}/datasetjobconfig/\*

✅

✅

✅

✅

✅

✅

✅

Update dataset task configuration

PaiDataset:UpdateDatasetJobConfig

PaiDataset:UpdateDatasetJobConfig

dataset/{datasetId}/datasetjobconfig/{datasetJobConfigId}

✅

✅

✅

✅

Get dataset task configuration

PaiDataset:GetDatasetJobConfig

PaiDataset:GetDatasetJobConfig

dataset/{datasetId}/datasetjobconfig/{datasetJobConfigId}

✅

✅

✅

✅

✅

✅

✅

✅

List dataset task configurations

PaiDataset:ListDatasetJobConfigs

PaiDataset:ListDatasetJobConfigs

dataset/{datasetId}/datasetjobconfig/\*

✅

✅

✅

✅

✅

✅

✅

✅

✅

Delete dataset task configuration

PaiDataset:DeleteDatasetJobConfig

PaiDataset:DeleteDatasetJobConfig

dataset/{datasetId}/datasetjobconfig/{datasetJobConfigId}

✅

✅

✅

✅

Create dataset task

PaiDataset:CreateDatasetJob

PaiDataset:CreateDatasetJob

dataset/{datasetId}/datasetjob/\*

✅

✅

✅

✅

✅

✅

✅

Get dataset task

PaiDataset:GetDatasetJob

PaiDataset:GetDatasetJob

dataset/{datasetId}/datasetjob/{datasetjobId}

✅

✅

✅

✅

✅

✅

✅

✅

List dataset tasks

PaiDataset:ListDatasetJobs

PaiDataset:ListDatasetJobs

dataset/{datasetId}/datasetjob/\*

✅

✅

✅

✅

✅

✅

✅

✅

✅

Update dataset task

PaiDataset:UpdateDatasetJob

PaiDataset:UpdateDatasetJob

dataset/{datasetId}/datasetjob/{datasetjobId}

✅

✅

✅

✅

Delete dataset task

PaiDataset:DeleteDatasetJob

PaiDataset:DeleteDatasetJob

dataset/{datasetId}/datasetjob/{datasetjobId}

✅

✅

✅

✅

Dataset task status notification

PaiDataset:NotifyDatasetJobStatus

PaiDataset:NotifyDatasetJobStatus

dataset/{datasetId}/datasetjob/{datasetjobId}

✅

✅

✅

✅

Stop dataset task

PaiDataset:StopDatasetJob

PaiDataset:StopDatasetJob

dataset/{datasetId}/datasetjob/{datasetjobId}

✅

✅

✅

✅

Table 2. AI Asset Management: Source Code Repositories

**Permission**

**Action (can be managed in the PAI workspace)**

**Action (can be managed in the RAM console)**

**Workspace Administrator/Owner**

**Algorithm Developer**

**Algorithm O&M Engineer**

**Visitor**

**Private (created by me)**

**Private (created by others)**

**Public (created by me)**

**Public (created by others)**

**Private (created by me)**

**Private (created by others)**

**Public**

**Private (created by me)**

**Private (created by others)**

**Public**

Create code

PaiCodeSource:CreateCodeSource

PaiCodeSource:CreateCodeSource

✅

✅

✅

✅

✅

✅

View code

PaiCodeSource:GetCodeSource

PaiCodeSource:GetCodeSource

✅

✅

✅

✅

✅

✅

Delete code

PaiCodeSource:DeleteCodeSource

PaiCodeSource:DeleteCodeSource

✅

✅

✅

List public and self-created code

PaiCodeSource:ListCodeSources

PaiCodeSource:ListCodeSources

✅

✅

✅

✅

✅

✅

✅

List all code in a workspace

PaiCodeSource:ListAllCodeSources

PaiCodeSource:ListAllCodeSources

✅

Publish code to all members of a workspace

PaiCodeSource:PublishCodeSource

PaiCodeSource:PublishCodeSource

✅

✅

✅

Table 3. AI Assets Management: Images

**Permission**

**Action (can be managed in the PAI workspace)**

**Action (can be managed in the RAM console)**

**Resource**

**Workspace Administrator/Owner**

**Algorithm Developer**

**Algorithm O&M Engineer**

**Visitor**

**Private (created by me)**

**Private (created by others)**

**Public (created by me)**

**Public (created by others)**

**Private (created by me)**

**Private (created by others)**

**Public**

**Private (created by me)**

**Private (created by others)**

**Public**

Create images

PaiImage:AddImage

PaiImage:AddImage

image/\*

✅

✅

✅

✅

✅

✅

Obtain images

PaiImage:GetImage

PaiImage:GetImage

image/{imageId}

✅

✅

✅

✅

✅

✅

✅

Obtain official image

PaiImage:GetImage (This action is allowed unless you specify Deny)

provider/pai/image/{imageId}

Delete an image

PaiImage:RemoveImage

PaiImage:RemoveImage

image/{imageId}

✅

✅

✅

Obtain public and self-created images

PaiImage:ListImages

PaiImage:ListImages

image/\*

✅

✅

✅

✅

✅

✅

✅

Obtain all images in a workspace

PaiImage:ListAllImages

PaiImage:ListAllImages

image/\*

✅

List official images

PaiImage:Listlmages (This action is allowed unless you specify Deny)

provider/pai/image/{imageId}

List statistics of public and self-created images

PaiImage:GetImagesStatistics

PaiImage:GetImagesStatistics

image/\*

✅

✅

✅

✅

✅

✅

✅

Obtain statistics of all images in the workspace

PaiImage:GetAllImagesStatistics

PaiImage:GetAllImagesStatistics

image/\*

✅

Obtain statistics of official images

PaiImage:GetImagesStatistics (This action is allowed unless you specify Deny)

provider/pai/image/{imageId}

List image tags

PaiImage:ListImageLabels

PaiImage:ListImageLabels

imagelabel/\*

✅

✅

✅

✅

✅

✅

✅

Delete image tags

PaiImage:RemoveImageLabels

PaiImage:RemoveImageLabels

image/{imageId}/imagelabel/{imageLabelKey}

✅

✅

✅

List image tag keys

PaiImage:ListImageLabelKeys (This action is allowed unless you specify Deny)

imagelabel/\*

Update image tags in batches

PaiImage:UpdateImageLabels

PaiImage:UpdateImageLabels

image/{imageId}/imagelabel/\*

✅

✅

✅

Add image tags

PaiImage:AddImageLabels

PaiImage:AddImageLabels

image/{imageId}/imagelabel/\*

✅

✅

✅

Publish images to all members of a workspace

PaiImage:PublishImage

PaiImage:PublishImage

image/{imageId}

✅

✅

✅

Create image build

PaiImage:CreateImageBuild

PaiImage:CreateImageBuild

imagebuild/\*

✅

✅

✅

✅

✅

✅

Get image build

PaiImage:GetImageBuild

PaiImage:GetImageBuild

imagebuild/{imageBuildId}

✅

✅

✅

✅

✅

✅

Update image build

PaiImage:UpdateImageBuild

PaiImage:UpdateImageBuild

imagebuild/{imageBuildId}

✅

✅

✅

✅

✅

List image builds (Public & Self-created)

PaiImage:ListImageBuilds

PaiImage:ListImageBuilds

imagebuild/\*

✅

✅

✅

✅

✅

✅

List image builds (All in Workspace)

PaiImage:ListAllImageBuilds

PaiImage:ListAllImageBuilds

imagebuild/\*

✅

Table 4. AI Assets Management: Models

**Permission**

**Action (can be managed in the PAI workspace)**

**Action (can be managed in the RAM console)**

**Resource**

**Workspace Administrator/Owner**

**Algorithm Developer**

**Algorithm O&M Engineer**

**Visitor**

**Private (created by me)**

**Private (created by others)**

**Public (created by me)**

**Public (created by others)**

**Private (created by me)**

**Private (created by others)**

**Public**

**Private (created by me)**

**Private (created by others)**

**Public**

Create models

PaiModel:CreateModel

PaiModel:CreateModel

model/\*

✅

✅

✅

✅

✅

✅

Obtain models

PaiModel:GetModel

PaiModel:GetModel

model/{modelId}

✅

✅

✅

✅

✅

✅

Update models

PaiModel:UpdateModel

PaiModel:UpdateModel

model/{modelId}

✅

✅

✅

Delete models

PaiModel:DeleteModel

PaiModel:DeleteModel

model/{modelId}

✅

✅

✅

List public and self-created models

PaiModel:ListModels

PaiModel:ListModels

model/\*

✅

✅

✅

✅

✅

✅

✅

List all models in a workspace

PaiModel:ListAllModels

PaiModel:ListAllModels

model/\*

✅

Create model versions

PaiModel:CreateModelVersion

PaiModel:CreateModelVersion

model/{modelId}/modelVersion/\*

✅

✅

✅

✅

✅

✅

Obtain model versions

PaiModel:GetModelVersion

PaiModel:GetModelVersion

model/{modelId}/modelVersion/{versionName}

✅

✅

✅

✅

✅

✅

Update model versions

PaiModel:UpdateModelVersion

PaiModel:UpdateModelVersion

model/{modelId}/modelVersion/{versionName}

✅

✅

✅

Delete model versions

PaiModel:DeleteModelVersion

PaiModel:DeleteModelVersion

model/{modelId}/modelVersion/{versionName}

✅

✅

✅

List model versions

PaiModel:ListModelVersions

PaiModel:ListModelVersions

model/{modelId}/modelVersion/\*

✅

✅

✅

✅

✅

✅

✅

Update model tags

PaiModel:CreateModelLabels

PaiModel:CreateModelLabels

model/{modelId}

✅

✅

✅

Delete model tags

PaiModel:DeleteModelLabels

PaiModel:DeleteModelLabels

model/{modelId}

✅

✅

✅

Update model version tags

PaiModel:CreateModelVersionLabels

PaiModel:CreateModelVersionLabels

model/{modelId}/modelVersion/{versionName}

✅

✅

✅

Delete model version tags

PaiModel:DeleteModelVersionLabels

PaiModel:DeleteModelVersionLabels

model/{modelId}/modelVersion/{versionName}

✅

✅

✅

Publish models to all members in a workspace

PaiModel:PublishModel

PaiModel:PublishModel

model/{modelId}

✅

✅

✅

Table 5. AI Assets Management: Custom Components

**Permission**

**Action (can be managed in the PAI workspace)**

**Workspace Administrator/Owner**

**Algorithm Developer**

**Algorithm O&M Engineer**

**Visitor**

**Private (created by me)**

**Private (created by others)**

**Public (created by me)**

**Public (created by others)**

**Private (created by me)**

**Private (created by others)**

**Public**

**Private (created by me)**

**Private (created by others)**

**Public**

Create components

PAIComponentManagement:CreateComponent

✅

✅ Accessibility does not matter

✅ Accessibility does not matter

Obtain components

PAIComponentManagement:GetComponent

✅

✅ Accessibility does not matter

✅ Accessibility does not matter

Update components

PAIComponentManagement:UpdateComponent

✅

✅ Accessibility does not matter

✅ Accessibility does not matter

Delete components

PAIComponentManagement:DeleteComponent

✅

✅ Accessibility does not matter

✅ Accessibility does not matter

List all components in a workspace

PAIComponentManagement:ListComponents

✅

✅ Accessibility does not matter

✅ Accessibility does not matter

✅ Accessibility does not matter

Create component versions

PAIComponentManagement:CreateComponentVersion

✅

✅ Accessibility does not matter

✅ Accessibility does not matter

Obtain component versions

PAIComponentManagement:GetComponentVersion

✅

✅ Accessibility does not matter

✅ Accessibility does not matter

Update component versions

PAIComponentManagement:UpdateComponentVersion

✅

✅ Accessibility does not matter

✅ Accessibility does not matter

Delete component versions

PAIComponentManagement:DeleteComponentVersion

✅

✅ Accessibility does not matter

✅ Accessibility does not matter

Obtain all component versions in a workspace

PAIComponentManagement:ListComponentVersions

✅

✅ Accessibility does not matter

✅ Accessibility does not matter

✅ Accessibility does not matter

Table 6. AI assets: Connections

**Permission description**

**Action (managed in the PAI workspace)**

**Action (managed in RAM)**

**Workspace administrator/owner**

**Algorithm developer**

**Algorithm O&M engineer**

**Visitor**

**Private (created by me)**

**Private (created by others)**

**Public (created by me)**

**Public (created by others)**

**Private (created by me)**

**Private (created by others)**

**Public**

**Private (created by me)**

**Private (created by others)**

**Public**

Create a connection

PaiWorkspace:CreateConnection

PaiWorkspace:CreateConnection

✅

✅

✅

✅

✅

✅

View a connection

PaiWorkspace:GetConnection

PaiWorkspace:GetConnection

✅

✅

✅

✅

✅

✅

Update a connection

PaiWorkspace:UpdateConnection

PaiWorkspace:UpdateConnection

✅

✅

✅

Delete a connection

PaiWorkspace:DeleteConnection

PaiWorkspace:DeleteConnection

✅

✅

✅

List public and self-created connections

PaiWorkspace:ListConnections

PaiWorkspace:ListConnections

✅

✅

✅

✅

✅

✅

List all connections in the workspace

PaiWorkspace:ListAllConnections

PaiWorkspace:ListAllConnections

✅
