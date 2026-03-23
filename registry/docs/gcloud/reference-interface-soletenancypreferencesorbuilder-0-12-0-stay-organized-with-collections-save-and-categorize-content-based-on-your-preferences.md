-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface SoleTenancyPreferencesOrBuilder (0.12.0) Stay organized with collections Save and categorize content based on your preferences.

0.69.0 (latest) 0.67.0 0.65.0 0.64.0 0.62.0 0.60.0 0.58.0 0.57.0 0.56.0 0.55.0 0.54.0 0.52.0 0.50.0 0.49.0 0.46.0 0.45.0 0.44.0 0.42.0 0.41.0 0.40.0 0.39.0 0.38.0 0.37.0 0.36.0 0.35.0 0.34.0 0.33.0 0.31.0 0.30.0 0.29.0 0.28.0 0.27.0 0.26.0 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.14.0 0.13.0 0.12.0 0.11.0 0.10.0 0.9.0 0.6.0 0.5.0 0.4.0 0.3.0 0.2.0 0.1.0

```
public interface SoleTenancyPreferencesOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getCommitmentPlan()

```
public abstract SoleTenancyPreferences.CommitmentPlan getCommitmentPlan()
```

Commitment plan to consider when calculating costs for virtual machine insights and recommendations. If you are unsure which value to set, a 3 year commitment plan is often a good value to start with.

`.google.cloud.migrationcenter.v1.SoleTenancyPreferences.CommitmentPlan commitment_plan = 3;`

**Returns**

**Type**

**Description**

`[SoleTenancyPreferences.CommitmentPlan](/java/docs/reference/google-cloud-migrationcenter/0.12.0/com.google.cloud.migrationcenter.v1.SoleTenancyPreferences.CommitmentPlan)`

The commitmentPlan.

### getCommitmentPlanValue()

```
public abstract int getCommitmentPlanValue()
```

Commitment plan to consider when calculating costs for virtual machine insights and recommendations. If you are unsure which value to set, a 3 year commitment plan is often a good value to start with.

`.google.cloud.migrationcenter.v1.SoleTenancyPreferences.CommitmentPlan commitment_plan = 3;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for commitmentPlan.

### getCpuOvercommitRatio()

```
public abstract double getCpuOvercommitRatio()
```

CPU overcommit ratio. Acceptable values are between 1.0 and 2.0 inclusive.

`double cpu_overcommit_ratio = 1;`

**Returns**

**Type**

**Description**

`[double](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The cpuOvercommitRatio.

### getHostMaintenancePolicy()

```
public abstract SoleTenancyPreferences.HostMaintenancePolicy getHostMaintenancePolicy()
```

Sole Tenancy nodes maintenance policy.

`.google.cloud.migrationcenter.v1.SoleTenancyPreferences.HostMaintenancePolicy host_maintenance_policy = 2;`

**Returns**

**Type**

**Description**

`[SoleTenancyPreferences.HostMaintenancePolicy](/java/docs/reference/google-cloud-migrationcenter/0.12.0/com.google.cloud.migrationcenter.v1.SoleTenancyPreferences.HostMaintenancePolicy)`

The hostMaintenancePolicy.

### getHostMaintenancePolicyValue()

```
public abstract int getHostMaintenancePolicyValue()
```

Sole Tenancy nodes maintenance policy.

`.google.cloud.migrationcenter.v1.SoleTenancyPreferences.HostMaintenancePolicy host_maintenance_policy = 2;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for hostMaintenancePolicy.

### getNodeTypes(int index)

```
public abstract SoleTenantNodeType getNodeTypes(int index)
```

A list of sole tenant node types. An empty list means that all possible node types will be considered.

`repeated .google.cloud.migrationcenter.v1.SoleTenantNodeType node_types = 4;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[SoleTenantNodeType](/java/docs/reference/google-cloud-migrationcenter/0.12.0/com.google.cloud.migrationcenter.v1.SoleTenantNodeType)`

### getNodeTypesCount()

```
public abstract int getNodeTypesCount()
```

A list of sole tenant node types. An empty list means that all possible node types will be considered.

`repeated .google.cloud.migrationcenter.v1.SoleTenantNodeType node_types = 4;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getNodeTypesList()

```
public abstract List<SoleTenantNodeType> getNodeTypesList()
```

A list of sole tenant node types. An empty list means that all possible node types will be considered.

`repeated .google.cloud.migrationcenter.v1.SoleTenantNodeType node_types = 4;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[SoleTenantNodeType](/java/docs/reference/google-cloud-migrationcenter/0.12.0/com.google.cloud.migrationcenter.v1.SoleTenantNodeType)>`

### getNodeTypesOrBuilder(int index)

```
public abstract SoleTenantNodeTypeOrBuilder getNodeTypesOrBuilder(int index)
```

A list of sole tenant node types. An empty list means that all possible node types will be considered.

`repeated .google.cloud.migrationcenter.v1.SoleTenantNodeType node_types = 4;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[SoleTenantNodeTypeOrBuilder](/java/docs/reference/google-cloud-migrationcenter/0.12.0/com.google.cloud.migrationcenter.v1.SoleTenantNodeTypeOrBuilder)`

### getNodeTypesOrBuilderList()

```
public abstract List<? extends SoleTenantNodeTypeOrBuilder> getNodeTypesOrBuilderList()
```

A list of sole tenant node types. An empty list means that all possible node types will be considered.

`repeated .google.cloud.migrationcenter.v1.SoleTenantNodeType node_types = 4;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.migrationcenter.v1.SoleTenantNodeTypeOrBuilder>`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
