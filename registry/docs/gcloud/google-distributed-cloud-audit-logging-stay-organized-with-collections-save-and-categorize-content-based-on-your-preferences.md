Select versionkeyboard\_arrow\_down

-   [1.12.0](/distributed-cloud/connected/latest/docs)
-   [1.11.0](/distributed-cloud/connected/1.11.0/docs)
-   [1.10.0](/distributed-cloud/connected/1.10.0/docs)
-   [1.9.0](/distributed-cloud/connected/1.9.0/docs)
-   [1.8.0](/distributed-cloud/connected/1.8.0/docs)
-   [1.7.1](/distributed-cloud/connected/1.7.1/docs)
-   [1.7.0](/distributed-cloud/connected/1.7.0/docs)
-   [1.6.1](/distributed-cloud/connected/1.6.1/docs)
-   [1.6.0](/distributed-cloud/connected/1.6.0/docs)
-   [1.5.1](/distributed-cloud/connected/1.5.1/docs)

     For version information, see the [Distributed Cloud connected release notes](/distributed-cloud/connected/latest/docs/release-notes).

-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Distributed, hybrid, and multicloud](https://docs.cloud.google.com/docs/dhm-cloud)
-   [Google Distributed Cloud](https://docs.cloud.google.com/distributed-cloud/docs)
-   [Connected](https://docs.cloud.google.com/distributed-cloud/connected)
-   [1.10.0](https://docs.cloud.google.com/distributed-cloud/connected/1.10.0/docs)

Send feedback

# Google Distributed Cloud audit logging Stay organized with collections Save and categorize content based on your preferences.

This document describes audit logging for Google Distributed Cloud. Google Cloud services generate audit logs that record administrative and access activities within your Google Cloud resources. For more information about Cloud Audit Logs, see the following:

-   [Types of audit logs](/logging/docs/audit#types)
-   [Audit log entry structure](/logging/docs/audit#audit_log_entry_structure)
-   [Storing and routing audit logs](/logging/docs/audit#storing_and_routing_audit_logs)
-   [Cloud Logging pricing summary](/stackdriver/pricing#logs-pricing-summary)
-   [Enable Data Access audit logs](/logging/docs/audit/configure-data-access)

## Service name

Google Distributed Cloud audit logs use the service name `edgecontainer.googleapis.com`. Filter for this service:

    protoPayload.serviceName\="edgecontainer.googleapis.com"
  

## Methods by permission type

Each IAM permission has a `type` property, whose value is an enum that can be one of four values: `ADMIN_READ`, `ADMIN_WRITE`, `DATA_READ`, or `DATA_WRITE`. When you call a method, Google Distributed Cloud generates an audit log whose category is dependent on the `type` property of the permission required to perform the method. Methods that require an IAM permission with the `type` property value of `DATA_READ`, `DATA_WRITE`, or `ADMIN_READ` generate [Data Access](/logging/docs/audit#data-access) audit logs. Methods that require an IAM permission with the `type` property value of `ADMIN_WRITE` generate [Admin Activity](/logging/docs/audit#admin-activity) audit logs.

Permission type

Methods

`ADMIN_READ`

`google.cloud.edgecontainer.v1.EdgeContainer.GenerateAccessToken`  
`google.cloud.edgecontainer.v1.EdgeContainer.GenerateOfflineCredential`  
`google.cloud.edgecontainer.v1.EdgeContainer.GetCluster`  
`google.cloud.edgecontainer.v1.EdgeContainer.GetMachine`  
`google.cloud.edgecontainer.v1.EdgeContainer.GetNodePool`  
`google.cloud.edgecontainer.v1.EdgeContainer.GetServerConfig`  
`google.cloud.edgecontainer.v1.EdgeContainer.GetVpnConnection`  
`google.cloud.edgecontainer.v1.EdgeContainer.ListClusters`  
`google.cloud.edgecontainer.v1.EdgeContainer.ListMachines`  
`google.cloud.edgecontainer.v1.EdgeContainer.ListNodePools`  
`google.cloud.edgecontainer.v1.EdgeContainer.ListVpnConnections`

`ADMIN_WRITE`

`google.cloud.edgecontainer.v1.EdgeContainer.CreateCluster`  
`google.cloud.edgecontainer.v1.EdgeContainer.CreateNodePool`  
`google.cloud.edgecontainer.v1.EdgeContainer.CreateVpnConnection`  
`google.cloud.edgecontainer.v1.EdgeContainer.DeleteCluster`  
`google.cloud.edgecontainer.v1.EdgeContainer.DeleteNodePool`  
`google.cloud.edgecontainer.v1.EdgeContainer.DeleteVpnConnection`  
`google.cloud.edgecontainer.v1.EdgeContainer.UpdateCluster`  
`google.cloud.edgecontainer.v1.EdgeContainer.UpdateNodePool`  
`google.cloud.edgecontainer.v1.EdgeContainer.UpgradeCluster`

## API interface audit logs

For information about how and which permissions are evaluated for each method, see the Identity and Access Management documentation for Google Distributed Cloud.

### `google.cloud.edgecontainer.v1.EdgeContainer`

The following audit logs are associated with methods belonging to `google.cloud.edgecontainer.v1.EdgeContainer`.

#### `CreateCluster`

-   **Method**: `google.cloud.edgecontainer.v1.EdgeContainer.CreateCluster`  
    
-   **Audit log type**: [Admin activity](/logging/docs/audit#admin-activity)  
    
-   **Permissions**:
    -   `edgecontainer.clusters.create - ADMIN_WRITE`
-   **Method is a long-running or streaming operation**: [**Long-running operation**](/logging/docs/audit/understanding-audit-logs#lro)  
    
-   **Filter for this method**: `protoPayload.methodName="google.cloud.edgecontainer.v1.EdgeContainer.CreateCluster"`  
    

#### `CreateNodePool`

-   **Method**: `google.cloud.edgecontainer.v1.EdgeContainer.CreateNodePool`  
    
-   **Audit log type**: [Admin activity](/logging/docs/audit#admin-activity)  
    
-   **Permissions**:
    -   `edgecontainer.nodePools.create - ADMIN_WRITE`
-   **Method is a long-running or streaming operation**: [**Long-running operation**](/logging/docs/audit/understanding-audit-logs#lro)  
    
-   **Filter for this method**: `protoPayload.methodName="google.cloud.edgecontainer.v1.EdgeContainer.CreateNodePool"`  
    

#### `CreateVpnConnection`

-   **Method**: `google.cloud.edgecontainer.v1.EdgeContainer.CreateVpnConnection`  
    
-   **Audit log type**: [Admin activity](/logging/docs/audit#admin-activity)  
    
-   **Permissions**:
    -   `edgecontainer.vpnConnections.create - ADMIN_WRITE`
-   **Method is a long-running or streaming operation**: [**Long-running operation**](/logging/docs/audit/understanding-audit-logs#lro)  
    
-   **Filter for this method**: `protoPayload.methodName="google.cloud.edgecontainer.v1.EdgeContainer.CreateVpnConnection"`  
    

#### `DeleteCluster`

-   **Method**: `google.cloud.edgecontainer.v1.EdgeContainer.DeleteCluster`  
    
-   **Audit log type**: [Admin activity](/logging/docs/audit#admin-activity)  
    
-   **Permissions**:
    -   `edgecontainer.clusters.delete - ADMIN_WRITE`
-   **Method is a long-running or streaming operation**: [**Long-running operation**](/logging/docs/audit/understanding-audit-logs#lro)  
    
-   **Filter for this method**: `protoPayload.methodName="google.cloud.edgecontainer.v1.EdgeContainer.DeleteCluster"`  
    

#### `DeleteNodePool`

-   **Method**: `google.cloud.edgecontainer.v1.EdgeContainer.DeleteNodePool`  
    
-   **Audit log type**: [Admin activity](/logging/docs/audit#admin-activity)  
    
-   **Permissions**:
    -   `edgecontainer.nodePools.delete - ADMIN_WRITE`
-   **Method is a long-running or streaming operation**: [**Long-running operation**](/logging/docs/audit/understanding-audit-logs#lro)  
    
-   **Filter for this method**: `protoPayload.methodName="google.cloud.edgecontainer.v1.EdgeContainer.DeleteNodePool"`  
    

#### `DeleteVpnConnection`

-   **Method**: `google.cloud.edgecontainer.v1.EdgeContainer.DeleteVpnConnection`  
    
-   **Audit log type**: [Admin activity](/logging/docs/audit#admin-activity)  
    
-   **Permissions**:
    -   `edgecontainer.vpnConnections.delete - ADMIN_WRITE`
-   **Method is a long-running or streaming operation**: [**Long-running operation**](/logging/docs/audit/understanding-audit-logs#lro)  
    
-   **Filter for this method**: `protoPayload.methodName="google.cloud.edgecontainer.v1.EdgeContainer.DeleteVpnConnection"`  
    

#### `GenerateAccessToken`

-   **Method**: `google.cloud.edgecontainer.v1.EdgeContainer.GenerateAccessToken`  
    
-   **Audit log type**: [Data access](/logging/docs/audit#data-access)  
    
-   **Permissions**:
    -   `edgecontainer.clusters.generateAccessToken - ADMIN_READ`
-   **Method is a long-running or streaming operation**: No.  
    
-   **Filter for this method**: `protoPayload.methodName="google.cloud.edgecontainer.v1.EdgeContainer.GenerateAccessToken"`  
    

#### `GenerateOfflineCredential`

-   **Method**: `google.cloud.edgecontainer.v1.EdgeContainer.GenerateOfflineCredential`  
    
-   **Audit log type**: [Data access](/logging/docs/audit#data-access)  
    
-   **Permissions**:
    -   `edgecontainer.clusters.generateOfflineCredential - ADMIN_READ`
-   **Method is a long-running or streaming operation**: No.  
    
-   **Filter for this method**: `protoPayload.methodName="google.cloud.edgecontainer.v1.EdgeContainer.GenerateOfflineCredential"`  
    

#### `GetCluster`

-   **Method**: `google.cloud.edgecontainer.v1.EdgeContainer.GetCluster`  
    
-   **Audit log type**: [Data access](/logging/docs/audit#data-access)  
    
-   **Permissions**:
    -   `edgecontainer.clusters.get - ADMIN_READ`
-   **Method is a long-running or streaming operation**: No.  
    
-   **Filter for this method**: `protoPayload.methodName="google.cloud.edgecontainer.v1.EdgeContainer.GetCluster"`  
    

#### `GetMachine`

-   **Method**: `google.cloud.edgecontainer.v1.EdgeContainer.GetMachine`  
    
-   **Audit log type**: [Data access](/logging/docs/audit#data-access)  
    
-   **Permissions**:
    -   `edgecontainer.machines.get - ADMIN_READ`
-   **Method is a long-running or streaming operation**: No.  
    
-   **Filter for this method**: `protoPayload.methodName="google.cloud.edgecontainer.v1.EdgeContainer.GetMachine"`  
    

#### `GetNodePool`

-   **Method**: `google.cloud.edgecontainer.v1.EdgeContainer.GetNodePool`  
    
-   **Audit log type**: [Data access](/logging/docs/audit#data-access)  
    
-   **Permissions**:
    -   `edgecontainer.nodePools.get - ADMIN_READ`
-   **Method is a long-running or streaming operation**: No.  
    
-   **Filter for this method**: `protoPayload.methodName="google.cloud.edgecontainer.v1.EdgeContainer.GetNodePool"`  
    

#### `GetServerConfig`

-   **Method**: `google.cloud.edgecontainer.v1.EdgeContainer.GetServerConfig`  
    
-   **Audit log type**: [Data access](/logging/docs/audit#data-access)  
    
-   **Permissions**:
    -   `edgecontainer.serverconfig.get - ADMIN_READ`
-   **Method is a long-running or streaming operation**: No.  
    
-   **Filter for this method**: `protoPayload.methodName="google.cloud.edgecontainer.v1.EdgeContainer.GetServerConfig"`  
    

#### `GetVpnConnection`

-   **Method**: `google.cloud.edgecontainer.v1.EdgeContainer.GetVpnConnection`  
    
-   **Audit log type**: [Data access](/logging/docs/audit#data-access)  
    
-   **Permissions**:
    -   `edgecontainer.vpnConnections.get - ADMIN_READ`
-   **Method is a long-running or streaming operation**: No.  
    
-   **Filter for this method**: `protoPayload.methodName="google.cloud.edgecontainer.v1.EdgeContainer.GetVpnConnection"`  
    

#### `ListClusters`

-   **Method**: `google.cloud.edgecontainer.v1.EdgeContainer.ListClusters`  
    
-   **Audit log type**: [Data access](/logging/docs/audit#data-access)  
    
-   **Permissions**:
    -   `edgecontainer.clusters.list - ADMIN_READ`
-   **Method is a long-running or streaming operation**: No.  
    
-   **Filter for this method**: `protoPayload.methodName="google.cloud.edgecontainer.v1.EdgeContainer.ListClusters"`  
    

#### `ListMachines`

-   **Method**: `google.cloud.edgecontainer.v1.EdgeContainer.ListMachines`  
    
-   **Audit log type**: [Data access](/logging/docs/audit#data-access)  
    
-   **Permissions**:
    -   `edgecontainer.machines.list - ADMIN_READ`
-   **Method is a long-running or streaming operation**: No.  
    
-   **Filter for this method**: `protoPayload.methodName="google.cloud.edgecontainer.v1.EdgeContainer.ListMachines"`  
    

#### `ListNodePools`

-   **Method**: `google.cloud.edgecontainer.v1.EdgeContainer.ListNodePools`  
    
-   **Audit log type**: [Data access](/logging/docs/audit#data-access)  
    
-   **Permissions**:
    -   `edgecontainer.nodePools.list - ADMIN_READ`
-   **Method is a long-running or streaming operation**: No.  
    
-   **Filter for this method**: `protoPayload.methodName="google.cloud.edgecontainer.v1.EdgeContainer.ListNodePools"`  
    

#### `ListVpnConnections`

-   **Method**: `google.cloud.edgecontainer.v1.EdgeContainer.ListVpnConnections`  
    
-   **Audit log type**: [Data access](/logging/docs/audit#data-access)  
    
-   **Permissions**:
    -   `edgecontainer.vpnConnections.list - ADMIN_READ`
-   **Method is a long-running or streaming operation**: No.  
    
-   **Filter for this method**: `protoPayload.methodName="google.cloud.edgecontainer.v1.EdgeContainer.ListVpnConnections"`  
    

#### `UpdateCluster`

-   **Method**: `google.cloud.edgecontainer.v1.EdgeContainer.UpdateCluster`  
    
-   **Audit log type**: [Admin activity](/logging/docs/audit#admin-activity)  
    
-   **Permissions**:
    -   `edgecontainer.clusters.update - ADMIN_WRITE`
-   **Method is a long-running or streaming operation**: [**Long-running operation**](/logging/docs/audit/understanding-audit-logs#lro)  
    
-   **Filter for this method**: `protoPayload.methodName="google.cloud.edgecontainer.v1.EdgeContainer.UpdateCluster"`  
    

#### `UpdateNodePool`

-   **Method**: `google.cloud.edgecontainer.v1.EdgeContainer.UpdateNodePool`  
    
-   **Audit log type**: [Admin activity](/logging/docs/audit#admin-activity)  
    
-   **Permissions**:
    -   `edgecontainer.nodePools.update - ADMIN_WRITE`
-   **Method is a long-running or streaming operation**: [**Long-running operation**](/logging/docs/audit/understanding-audit-logs#lro)  
    
-   **Filter for this method**: `protoPayload.methodName="google.cloud.edgecontainer.v1.EdgeContainer.UpdateNodePool"`  
    

#### `UpgradeCluster`

-   **Method**: `google.cloud.edgecontainer.v1.EdgeContainer.UpgradeCluster`  
    
-   **Audit log type**: [Admin activity](/logging/docs/audit#admin-activity)  
    
-   **Permissions**:
    -   `edgecontainer.clusters.upgrade - ADMIN_WRITE`
-   **Method is a long-running or streaming operation**: [**Long-running operation**](/logging/docs/audit/understanding-audit-logs#lro)  
    
-   **Filter for this method**: `protoPayload.methodName="google.cloud.edgecontainer.v1.EdgeContainer.UpgradeCluster"`  
    

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-16 UTC.
