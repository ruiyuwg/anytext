Managed Service for OpenTelemetry supports Resource Access Management (RAM) so you can control who accesses your resources and what operations they can perform, without sharing your Alibaba Cloud primary account AccessKey. This reduces the information security risks for your enterprise.

With RAM, you can:

-   Create separate RAM users for team members instead of sharing the Alibaba Cloud primary account AccessKey.
    
-   Grant each RAM user only the permissions required for their role.
    
-   Revoke permissions or delete RAM user accounts at any time.
    
-   Keep billing consolidated under your Alibaba Cloud account. RAM user activity is not billed separately.
    

## Use cases

Your team runs a project that uses multiple Alibaba Cloud services: Elastic Compute Service (ECS) instances, ApsaraDB RDS instances, Server Load Balancer (SLB) instances, and Object Storage Service (OSS) buckets. Different team members need different levels of access to these resources. Instead of sharing the Alibaba Cloud primary account AccessKey, create RAM users with scoped permissions so each person can access only the resources their role requires.

## System policies

Managed Service for OpenTelemetry provides two predefined system policies. Attach these policies to RAM users to grant the corresponding permissions.

**Policy**

**Type**

**Description**

`AliyunTracingAnalysisFullAccess`

System policy

Full permissions on Tracing Analysis

`AliyunTracingAnalysisReadOnlyAccess`

System policy

Read-only permissions on Tracing Analysis

## What's next

-   [Use RAM users to manage permissions](/help/en/opentelemetry/use-ram-users-to-manage-permissions#task-1443664)
