AliyunEMRServerlessSparkDeveloperAccess is a service system policy that is managed by Alibaba Cloud. You can attach the AliyunEMRServerlessSparkDeveloperAccess policy to a Resource Access Management (RAM) identity, such as a RAM user, RAM user group, and RAM role. The AliyunEMRServerlessSparkDeveloperAccess policy: **Provides access to EMR Serverless Spark for the developers.**

## **Policy details**

-   Type: service system policy
    
-   Creation time: 15:13:00 on November 19, 2024
    
-   Update time: 08:46:56 on January 13, 2026
    
-   Current version: v9
    

## **Policy content**

```
{
  "Version": "1",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "emr-serverless-spark:AddGitRepo",
        "emr-serverless-spark:AddMembers",
        "emr-serverless-spark:AddVolume",
        "emr-serverless-spark:BatchExecuteProcessInstances",
        "emr-serverless-spark:BindSessionCluster",
        "emr-serverless-spark:CancelJobRun",
        "emr-serverless-spark:CancelRun",
        "emr-serverless-spark:CancelKyuubiSparkApplication",
        "emr-serverless-spark:Check*",
        "emr-serverless-spark:CommitPushGitRepo",
        "emr-serverless-spark:CommitTask",
        "emr-serverless-spark:CopyTask",
        "emr-serverless-spark:CreateArtifact",
        "emr-serverless-spark:CreateCatalog",
        "emr-serverless-spark:CreateCategory",
        "emr-serverless-spark:CreateComputeToken",
        "emr-serverless-spark:CreateConfigFile",
        "emr-serverless-spark:CreateEmrSparkServiceLinkedRole",
        "emr-serverless-spark:CreateEnvironment",
        "emr-serverless-spark:CreateGitRepoFile",
        "emr-serverless-spark:CreateJobRunDeployment",
        "emr-serverless-spark:CreateKerberosConf",
        "emr-serverless-spark:CreateKyuubiService",
        "emr-serverless-spark:CreateKyuubiToken",
        "emr-serverless-spark:CreateLivyCompute",
        "emr-serverless-spark:CreateLivyComputeToken",
        "emr-serverless-spark:CreateNetworkService",
        "emr-serverless-spark:CreateProcessDefinitionWithSchedule",
        "emr-serverless-spark:CreateRole",
        "emr-serverless-spark:CreateSessionCluster",
        "emr-serverless-spark:CreateSessionStatement",
        "emr-serverless-spark:CreateSqlStatement",
        "emr-serverless-spark:CreateTask",
        "emr-serverless-spark:CreateTaskInstance",
        "emr-serverless-spark:CreateTemplate",
        "emr-serverless-spark:CreateWorkspaceQueue",
        "emr-serverless-spark:CreateVolumeFile",
        "emr-serverless-spark:CreateSecretValue",
        "emr-serverless-spark:CreateAIFunction",
        "emr-serverless-spark:CreateModelService",
        "emr-serverless-spark:CreateRayCluster",
        "emr-serverless-spark:CopyRun",
        "emr-serverless-spark:DeleteArtifact",
        "emr-serverless-spark:DeleteCatalog",
        "emr-serverless-spark:DeleteCategory",
        "emr-serverless-spark:DeleteComputeToken",
        "emr-serverless-spark:DeleteConfigFile",
        "emr-serverless-spark:DeleteEnvironment",
        "emr-serverless-spark:DeleteGitRepo",
        "emr-serverless-spark:DeleteGitRepoFile",
        "emr-serverless-spark:DeleteJobRunDeployment",
        "emr-serverless-spark:DeleteKerberosConf",
        "emr-serverless-spark:DeleteKyuubiService",
        "emr-serverless-spark:DeleteKyuubiToken",
        "emr-serverless-spark:DeleteLivyCompute",
        "emr-serverless-spark:DeleteLivyComputeSession",
        "emr-serverless-spark:DeleteLivyComputeToken",
        "emr-serverless-spark:DeleteNetworkService",
        "emr-serverless-spark:DeleteProcessDefinitionByCode",
        "emr-serverless-spark:DeleteProcessDefinitionVersion",
        "emr-serverless-spark:DeleteRole",
        "emr-serverless-spark:DeleteSessionCluster",
        "emr-serverless-spark:DeleteTask",
        "emr-serverless-spark:DeleteTemplate",
        "emr-serverless-spark:DeleteWorkspaceQueue",
        "emr-serverless-spark:DeleteVolume",
        "emr-serverless-spark:DeleteVolumeFile",
        "emr-serverless-spark:DeleteSecretValue",
        "emr-serverless-spark:DeleteAIFunction",
        "emr-serverless-spark:DeleteModelService",
        "emr-serverless-spark:DeleteRayCluster",
        "emr-serverless-spark:DisableKerberosConf",
        "emr-serverless-spark:EditCatalog",
        "emr-serverless-spark:EditEnvironment",
        "emr-serverless-spark:EditSessionCluster",
        "emr-serverless-spark:EditWorkspaceQueue",
        "emr-serverless-spark:EnableKerberosConf",
        "emr-serverless-spark:Execute",
        "emr-serverless-spark:ForceTaskInstanceSuccess",
        "emr-serverless-spark:GenerateComputeToken",
        "emr-serverless-spark:GenerateKyuubiToken",
        "emr-serverless-spark:GenerateLivyComputeToken",
        "emr-serverless-spark:GenerateTaskCodes",
        "emr-serverless-spark:Get*",
        "emr-serverless-spark:GrantActionsToRole",
        "emr-serverless-spark:GrantRoleToUsers",
        "emr-serverless-spark:IsCatalogAliasDuplicate",
        "emr-serverless-spark:List*",
        "emr-serverless-spark:MoveGitRepoFile",
        "emr-serverless-spark:ModifyVolume",
        "emr-serverless-spark:OperateInstance",
        "emr-serverless-spark:PublishWorkflowDefinition",
        "emr-serverless-spark:PullGitRepo",
        "emr-serverless-spark:ParseParamKeys",
        "emr-serverless-spark:PullGitRepo",
        "emr-serverless-spark:Query*",
        "emr-serverless-spark:RefreshLivyComputeToken",
        "emr-serverless-spark:ReleaseWorkflowAndSchedule",
        "emr-serverless-spark:RemoveMember",
        "emr-serverless-spark:RevokeActionsToRole",
        "emr-serverless-spark:RevokeRoleFromUsers",
        "emr-serverless-spark:SetDefaultTemplate",
        "emr-serverless-spark:StartHmsProxyServer",
        "emr-serverless-spark:StartJobRun",
        "emr-serverless-spark:StartJobRunDeployment",
        "emr-serverless-spark:StartKyuubiService",
        "emr-serverless-spark:StartLivyCompute",
        "emr-serverless-spark:StartNotebookKernel",
        "emr-serverless-spark:StartProcessInstance",
        "emr-serverless-spark:StartRun",
        "emr-serverless-spark:StartSessionCluster",
        "emr-serverless-spark:StartRayCluster",
        "emr-serverless-spark:StopJobRunDeployment",
        "emr-serverless-spark:StopKyuubiService",
        "emr-serverless-spark:StopLivyCompute",
        "emr-serverless-spark:StopNotebookKernel",
        "emr-serverless-spark:StopSessionCluster",
        "emr-serverless-spark:StopRayCluster",
        "emr-serverless-spark:SwitchProcessDefinitionVersion",
        "emr-serverless-spark:TearDownHmsProxyServer",
        "emr-serverless-spark:TerminateSessionStatement",
        "emr-serverless-spark:TerminateSqlStatement",
        "emr-serverless-spark:TestHmsConnection",
        "emr-serverless-spark:UnbindSessionCluster",
        "emr-serverless-spark:UpdateCategory",
        "emr-serverless-spark:UpdateComputeToken",
        "emr-serverless-spark:UpdateConfigFile",
        "emr-serverless-spark:UpdateGitRepoFile",
        "emr-serverless-spark:UpdateGitResource",
        "emr-serverless-spark:UpdateJobRunDeployment",
        "emr-serverless-spark:UpdateKerberosConf",
        "emr-serverless-spark:UpdateKyuubiService",
        "emr-serverless-spark:UpdateKyuubiToken",
        "emr-serverless-spark:UpdateLivyCompute",
        "emr-serverless-spark:UpdateProcessDefinitionWithSchedule",
        "emr-serverless-spark:UpdateResourceAcl",
        "emr-serverless-spark:UpdateTask",
        "emr-serverless-spark:UpdateTemplate",
        "emr-serverless-spark:UpdateAIFunction",
        "emr-serverless-spark:UpdateModelService",
        "emr-serverless-spark:UpdateRayCluster",
        "emr-serverless-spark:ValidateCode"
      ],
      "Resource": "*"
    },
    {
      "Effect": "Allow",
      "Action": [
        "dlf:DescribeRegions",
        "dlf:GetRegionStatus",
        "dlf:ListCatalogs",
        "dlf:ListDatabases",
        "dlf:ListTables",
        "emr:GetApmData",
        "emr:QueryApmGrafanaData"
      ],
      "Resource": "*"
    }
  ]
}
```

## **References**

-   [Policy elements](/help/en/ram/policy-elements)
    
-   [Grant permissions to a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user)
    
-   [Grant permissions to a RAM user group](/help/en/ram/user-guide/grant-permissions-to-a-ram-user-group)
    
-   [Grant permissions to a RAM role](/help/en/ram/user-guide/grant-permissions-to-a-ram-role)
