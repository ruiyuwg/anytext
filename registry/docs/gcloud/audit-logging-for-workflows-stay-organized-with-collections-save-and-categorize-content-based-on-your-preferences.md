-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Application development](https://docs.cloud.google.com/docs/application-development)
-   [Workflows](https://docs.cloud.google.com/workflows/docs)
-   [Guides](https://docs.cloud.google.com/workflows/docs/create-workflow-console)

Send feedback

# Audit logging for workflows Stay organized with collections Save and categorize content based on your preferences.

This document describes audit logging for Workflows. Google Cloud services generate audit logs that record administrative and access activities within your Google Cloud resources. For more information about Cloud Audit Logs, see the following:

-   [Types of audit logs](/logging/docs/audit#types)
-   [Audit log entry structure](/logging/docs/audit#audit_log_entry_structure)
-   [Storing and routing audit logs](/logging/docs/audit#storing_and_routing_audit_logs)
-   [Cloud Logging pricing summary](/stackdriver/pricing#logs-pricing-summary)
-   [Enable Data Access audit logs](/logging/docs/audit/configure-data-access)

## Service name

Workflows audit logs use the service name `workflows.googleapis.com`. Filter for this service:

    protoPayload.serviceName\="workflows.googleapis.com"
  

## Methods by permission type

Each IAM permission has a `type` property, whose value is an enum that can be one of four values: `ADMIN_READ`, `ADMIN_WRITE`, `DATA_READ`, or `DATA_WRITE`. When you call a method, Workflows generates an audit log whose category is dependent on the `type` property of the permission required to perform the method. Methods that require an IAM permission with the `type` property value of `DATA_READ`, `DATA_WRITE`, or `ADMIN_READ` generate [Data Access](/logging/docs/audit#data-access) audit logs. Methods that require an IAM permission with the `type` property value of `ADMIN_WRITE` generate [Admin Activity](/logging/docs/audit#admin-activity) audit logs.

API methods in the following list that are marked with (LRO) are long-running operations (LROs). These methods usually generate two audit log entries: one when the operation starts and another when it ends. For more information see [Audit logs for long-running operations](/logging/docs/audit/understanding-audit-logs#lro).

Permission type

Methods

`ADMIN_READ`

`google.cloud.workflows.v1.Workflows.GetWorkflow`  
`google.cloud.workflows.v1.Workflows.ListWorkflowRevisions`  
`google.cloud.workflows.v1.Workflows.ListWorkflows`  
`google.cloud.workflows.v1alpha1.Workflows.GetWorkflow`  
`google.cloud.workflows.v1alpha1.Workflows.ListWorkflows`  
`google.cloud.workflows.v1beta.Workflows.GetWorkflow`  
`google.cloud.workflows.v1beta.Workflows.ListWorkflows`  
`google.longrunning.Operations.GetOperation`  
`google.longrunning.Operations.ListOperations`

`ADMIN_WRITE`

`google.cloud.workflows.v1.Workflows.CreateWorkflow` (LRO)  
`google.cloud.workflows.v1.Workflows.DeleteWorkflow` (LRO)  
`google.cloud.workflows.v1.Workflows.UpdateWorkflow` (LRO)  
`google.cloud.workflows.v1alpha1.Workflows.CreateWorkflow` (LRO)  
`google.cloud.workflows.v1alpha1.Workflows.DeleteWorkflow` (LRO)  
`google.cloud.workflows.v1alpha1.Workflows.UpdateWorkflow` (LRO)  
`google.cloud.workflows.v1beta.Workflows.CreateWorkflow` (LRO)  
`google.cloud.workflows.v1beta.Workflows.DeleteWorkflow` (LRO)  
`google.cloud.workflows.v1beta.Workflows.UpdateWorkflow` (LRO)  
`google.longrunning.Operations.CancelOperation`  
`google.longrunning.Operations.DeleteOperation`

## API interface audit logs

For information about how and which permissions are evaluated for each method, see the Identity and Access Management documentation for Workflows.

### `google.cloud.workflows.v1.Workflows`

The following audit logs are associated with methods belonging to `google.cloud.workflows.v1.Workflows`.

#### `CreateWorkflow`

-   **Method**: `google.cloud.workflows.v1.Workflows.CreateWorkflow`  
    
-   **Audit log type**: [Admin activity](/logging/docs/audit#admin-activity)  
    
-   **Permissions**:
    -   `workflows.workflows.create - ADMIN_WRITE`
-   **Method is a long-running or streaming operation**: [**Long-running operation**](/logging/docs/audit/understanding-audit-logs#lro)  
    
-   **Filter for this method**: `protoPayload.methodName="google.cloud.workflows.v1.Workflows.CreateWorkflow"`  
    

#### `DeleteWorkflow`

-   **Method**: `google.cloud.workflows.v1.Workflows.DeleteWorkflow`  
    
-   **Audit log type**: [Admin activity](/logging/docs/audit#admin-activity)  
    
-   **Permissions**:
    -   `workflows.workflows.delete - ADMIN_WRITE`
-   **Method is a long-running or streaming operation**: [**Long-running operation**](/logging/docs/audit/understanding-audit-logs#lro)  
    
-   **Filter for this method**: `protoPayload.methodName="google.cloud.workflows.v1.Workflows.DeleteWorkflow"`  
    

#### `GetWorkflow`

-   **Method**: `google.cloud.workflows.v1.Workflows.GetWorkflow`  
    
-   **Audit log type**: [Data access](/logging/docs/audit#data-access)  
    
-   **Permissions**:
    -   `workflows.workflows.get - ADMIN_READ`
-   **Method is a long-running or streaming operation**: No.  
    
-   **Filter for this method**: `protoPayload.methodName="google.cloud.workflows.v1.Workflows.GetWorkflow"`  
    

#### `ListWorkflowRevisions`

-   **Method**: `google.cloud.workflows.v1.Workflows.ListWorkflowRevisions`  
    
-   **Audit log type**: [Data access](/logging/docs/audit#data-access)  
    
-   **Permissions**:
    -   `workflows.workflows.listRevision - ADMIN_READ`
-   **Method is a long-running or streaming operation**: No.  
    
-   **Filter for this method**: `protoPayload.methodName="google.cloud.workflows.v1.Workflows.ListWorkflowRevisions"`  
    

#### `ListWorkflows`

-   **Method**: `google.cloud.workflows.v1.Workflows.ListWorkflows`  
    
-   **Audit log type**: [Data access](/logging/docs/audit#data-access)  
    
-   **Permissions**:
    -   `workflows.workflows.list - ADMIN_READ`
-   **Method is a long-running or streaming operation**: No.  
    
-   **Filter for this method**: `protoPayload.methodName="google.cloud.workflows.v1.Workflows.ListWorkflows"`  
    

#### `UpdateWorkflow`

-   **Method**: `google.cloud.workflows.v1.Workflows.UpdateWorkflow`  
    
-   **Audit log type**: [Admin activity](/logging/docs/audit#admin-activity)  
    
-   **Permissions**:
    -   `workflows.workflows.update - ADMIN_WRITE`
-   **Method is a long-running or streaming operation**: [**Long-running operation**](/logging/docs/audit/understanding-audit-logs#lro)  
    
-   **Filter for this method**: `protoPayload.methodName="google.cloud.workflows.v1.Workflows.UpdateWorkflow"`  
    

### `google.cloud.workflows.v1alpha1.Workflows`

The following audit logs are associated with methods belonging to `google.cloud.workflows.v1alpha1.Workflows`.

#### `CreateWorkflow`

-   **Method**: `google.cloud.workflows.v1alpha1.Workflows.CreateWorkflow`  
    
-   **Audit log type**: [Admin activity](/logging/docs/audit#admin-activity)  
    
-   **Permissions**:
    -   `workflows.workflows.create - ADMIN_WRITE`
-   **Method is a long-running or streaming operation**: [**Long-running operation**](/logging/docs/audit/understanding-audit-logs#lro)  
    
-   **Filter for this method**: `protoPayload.methodName="google.cloud.workflows.v1alpha1.Workflows.CreateWorkflow"`  
    

#### `DeleteWorkflow`

-   **Method**: `google.cloud.workflows.v1alpha1.Workflows.DeleteWorkflow`  
    
-   **Audit log type**: [Admin activity](/logging/docs/audit#admin-activity)  
    
-   **Permissions**:
    -   `workflows.workflows.delete - ADMIN_WRITE`
-   **Method is a long-running or streaming operation**: [**Long-running operation**](/logging/docs/audit/understanding-audit-logs#lro)  
    
-   **Filter for this method**: `protoPayload.methodName="google.cloud.workflows.v1alpha1.Workflows.DeleteWorkflow"`  
    

#### `GetWorkflow`

-   **Method**: `google.cloud.workflows.v1alpha1.Workflows.GetWorkflow`  
    
-   **Audit log type**: [Data access](/logging/docs/audit#data-access)  
    
-   **Permissions**:
    -   `workflows.workflows.get - ADMIN_READ`
-   **Method is a long-running or streaming operation**: No.  
    
-   **Filter for this method**: `protoPayload.methodName="google.cloud.workflows.v1alpha1.Workflows.GetWorkflow"`  
    

#### `ListWorkflows`

-   **Method**: `google.cloud.workflows.v1alpha1.Workflows.ListWorkflows`  
    
-   **Audit log type**: [Data access](/logging/docs/audit#data-access)  
    
-   **Permissions**:
    -   `workflows.workflows.list - ADMIN_READ`
-   **Method is a long-running or streaming operation**: No.  
    
-   **Filter for this method**: `protoPayload.methodName="google.cloud.workflows.v1alpha1.Workflows.ListWorkflows"`  
    

#### `UpdateWorkflow`

-   **Method**: `google.cloud.workflows.v1alpha1.Workflows.UpdateWorkflow`  
    
-   **Audit log type**: [Admin activity](/logging/docs/audit#admin-activity)  
    
-   **Permissions**:
    -   `workflows.workflows.update - ADMIN_WRITE`
-   **Method is a long-running or streaming operation**: [**Long-running operation**](/logging/docs/audit/understanding-audit-logs#lro)  
    
-   **Filter for this method**: `protoPayload.methodName="google.cloud.workflows.v1alpha1.Workflows.UpdateWorkflow"`  
    

### `google.cloud.workflows.v1beta.Workflows`

The following audit logs are associated with methods belonging to `google.cloud.workflows.v1beta.Workflows`.

#### `CreateWorkflow`

-   **Method**: `google.cloud.workflows.v1beta.Workflows.CreateWorkflow`  
    
-   **Audit log type**: [Admin activity](/logging/docs/audit#admin-activity)  
    
-   **Permissions**:
    -   `workflows.workflows.create - ADMIN_WRITE`
-   **Method is a long-running or streaming operation**: [**Long-running operation**](/logging/docs/audit/understanding-audit-logs#lro)  
    
-   **Filter for this method**: `protoPayload.methodName="google.cloud.workflows.v1beta.Workflows.CreateWorkflow"`  
    

#### `DeleteWorkflow`

-   **Method**: `google.cloud.workflows.v1beta.Workflows.DeleteWorkflow`  
    
-   **Audit log type**: [Admin activity](/logging/docs/audit#admin-activity)  
    
-   **Permissions**:
    -   `workflows.workflows.delete - ADMIN_WRITE`
-   **Method is a long-running or streaming operation**: [**Long-running operation**](/logging/docs/audit/understanding-audit-logs#lro)  
    
-   **Filter for this method**: `protoPayload.methodName="google.cloud.workflows.v1beta.Workflows.DeleteWorkflow"`  
    

#### `GetWorkflow`

-   **Method**: `google.cloud.workflows.v1beta.Workflows.GetWorkflow`  
    
-   **Audit log type**: [Data access](/logging/docs/audit#data-access)  
    
-   **Permissions**:
    -   `workflows.workflows.get - ADMIN_READ`
-   **Method is a long-running or streaming operation**: No.  
    
-   **Filter for this method**: `protoPayload.methodName="google.cloud.workflows.v1beta.Workflows.GetWorkflow"`  
    

#### `ListWorkflows`

-   **Method**: `google.cloud.workflows.v1beta.Workflows.ListWorkflows`  
    
-   **Audit log type**: [Data access](/logging/docs/audit#data-access)  
    
-   **Permissions**:
    -   `workflows.workflows.list - ADMIN_READ`
-   **Method is a long-running or streaming operation**: No.  
    
-   **Filter for this method**: `protoPayload.methodName="google.cloud.workflows.v1beta.Workflows.ListWorkflows"`  
    

#### `UpdateWorkflow`

-   **Method**: `google.cloud.workflows.v1beta.Workflows.UpdateWorkflow`  
    
-   **Audit log type**: [Admin activity](/logging/docs/audit#admin-activity)  
    
-   **Permissions**:
    -   `workflows.workflows.update - ADMIN_WRITE`
-   **Method is a long-running or streaming operation**: [**Long-running operation**](/logging/docs/audit/understanding-audit-logs#lro)  
    
-   **Filter for this method**: `protoPayload.methodName="google.cloud.workflows.v1beta.Workflows.UpdateWorkflow"`  
    

### `google.longrunning.Operations`

The following audit logs are associated with methods belonging to `google.longrunning.Operations`.

#### `CancelOperation`

-   **Method**: `google.longrunning.Operations.CancelOperation`  
    
-   **Audit log type**: [Admin activity](/logging/docs/audit#admin-activity)  
    
-   **Permissions**:
    -   `workflows.operations.cancel - ADMIN_WRITE`
-   **Method is a long-running or streaming operation**: No.  
    
-   **Filter for this method**: `protoPayload.methodName="google.longrunning.Operations.CancelOperation"`  
    

#### `DeleteOperation`

-   **Method**: `google.longrunning.Operations.DeleteOperation`  
    
-   **Audit log type**: [Admin activity](/logging/docs/audit#admin-activity)  
    
-   **Permissions**:
    -   `workflows.operations.cancel - ADMIN_WRITE`
-   **Method is a long-running or streaming operation**: No.  
    
-   **Filter for this method**: `protoPayload.methodName="google.longrunning.Operations.DeleteOperation"`  
    

#### `GetOperation`

-   **Method**: `google.longrunning.Operations.GetOperation`  
    
-   **Audit log type**: [Data access](/logging/docs/audit#data-access)  
    
-   **Permissions**:
    -   `workflows.operations.get - ADMIN_READ`
-   **Method is a long-running or streaming operation**: No.  
    
-   **Filter for this method**: `protoPayload.methodName="google.longrunning.Operations.GetOperation"`  
    

#### `ListOperations`

-   **Method**: `google.longrunning.Operations.ListOperations`  
    
-   **Audit log type**: [Data access](/logging/docs/audit#data-access)  
    
-   **Permissions**:
    -   `workflows.operations.list - ADMIN_READ`
-   **Method is a long-running or streaming operation**: No.  
    
-   **Filter for this method**: `protoPayload.methodName="google.longrunning.Operations.ListOperations"`  
    

## Methods that don't produce audit logs

A method might not produce audit logs for one or more of the following reasons:

-   It is a high volume method involving significant log generation and storage costs.
-   It has low auditing value.
-   Another audit or platform log already provides method coverage.

The following methods don't produce audit logs:

-   `google.cloud.location.Locations.GetLocation`
-   `google.cloud.location.Locations.ListLocations`
-   `google.longrunning.Operations.WaitOperation`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-16 UTC.
