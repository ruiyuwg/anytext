-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface InstanceAdminClient (6.50.1) Stay organized with collections Save and categorize content based on your preferences.

6.111.1 (latest) 6.111.0 6.108.0 6.107.0 6.103.0 6.102.1 6.101.1 6.100.0 6.99.0 6.98.1 6.97.1 6.96.1 6.95.1 6.94.0 6.93.0 6.89.0 6.88.0 6.87.0 6.86.0 6.85.0 6.83.0 6.82.0 6.80.1 6.79.0 6.77.0 6.74.1 6.72.0 6.71.0 6.69.0 6.68.0 6.66.0 6.65.1 6.62.0 6.60.0 6.58.0 6.57.0 6.56.0 6.55.0 6.54.0 6.53.0 6.52.1 6.51.0 6.50.1 6.49.0 6.25.1 6.24.0 6.23.4 6.22.0 6.21.2 6.20.0 6.19.1 6.18.0 6.17.4 6.14.1

```
public interface InstanceAdminClient
```

Client to do admin operations on Cloud Spanner Instance and Instance Configs.

## Methods

### cancelOperation(String name)

```
public abstract void cancelOperation(String name)
```

Cancels the specified long-running operation.

**Parameter**

**Name**

**Description**

`name`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

### createInstance(InstanceInfo instance)

```
public abstract OperationFuture<Instance,CreateInstanceMetadata> createInstance(InstanceInfo instance)
```

Creates an instance and begins preparing it to begin serving. The returned `Operation` can be used to track the progress of preparing the new instance. The instance name is assigned by the caller. If the named instance already exists, a SpannerException is thrown. Immediately upon completion of this request:

-   The instance is readable via the API, with all requested attributes but no allocated resources.
-   Its state is `CREATING`.

Until completion of the returned operation:

-   Cancelling the operation renders the instance immediately unreadable via the API.
-   The instance can be deleted.
-   All other attempts to modify the instance are rejected.

Upon completion of the returned operation:

-   Billing for all successfully-allocated resources begins (some types may have lower than the requested levels).
-   Databases can be created in the instance.
-   The instance's allocated resource levels are readable via the

 ```

 final String instanceId = my_instance_id;
 final String configId = my_config_id;
 final String clientProject = my_client_project;

 Operation<Instance, CreateInstanceMetadata> op =
     instanceAdminClient.createInstance(InstanceInfo
         .newBuilder(InstanceId.of(clientProject, instanceId))
         .setInstanceConfigId(InstanceConfigId.of(clientProject, configId))
         .setDisplayName(instanceId)
         .setNodeCount(1)
         .build());
 op.waitFor();
 
```
 

**Parameter**

**Name**

**Description**

`instance`

`[InstanceInfo](/java/docs/reference/google-cloud-spanner/6.50.1/com.google.cloud.spanner.InstanceInfo)`  

**Returns**

**Type**

**Description**

`[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[Instance](/java/docs/reference/google-cloud-spanner/6.50.1/com.google.cloud.spanner.Instance),[CreateInstanceMetadata](/java/docs/reference/google-cloud-spanner/6.50.1/com.google.spanner.admin.instance.v1.CreateInstanceMetadata)>`

**Exceptions**

**Type**

**Description**

`[SpannerException](/java/docs/reference/google-cloud-spanner/6.50.1/com.google.cloud.spanner.SpannerException)`

### createInstanceConfig(InstanceConfigInfo instanceConfig, Options.CreateAdminApiOption\[\] options)

```
public default OperationFuture<InstanceConfig,CreateInstanceConfigMetadata> createInstanceConfig(InstanceConfigInfo instanceConfig, Options.CreateAdminApiOption[] options)
```

Creates an instance config and begins preparing it to be used. The returned `Operation` can be used to track the progress of preparing the new instance config. The instance config name is assigned by the caller and must start with the string 'custom'. If the named instance config already exists, a SpannerException is thrown.

Immediately after the request returns:

-   The instance config is readable via the API, with all requested attributes.
-   The instance config's `reconciling` field is set to true. Its state is `CREATING`.

While the operation is pending:

-   Cancelling the operation renders the instance config immediately unreadable via the API.
-   Except for deleting the creating resource, all other attempts to modify the instance config are rejected.

Upon completion of the returned operation:

-   Instances can be created using the instance configuration.
-   The instance config's `reconciling` field becomes false.
-   Its state becomes `READY`.

 ```

 String projectId = "my-project";
 String baseInstanceConfig = "my-base-config";
 String instanceConfigId = "custom-user-config";

 final InstanceConfig baseConfig = instanceAdminClient.getInstanceConfig(baseInstanceConfig);

 List<ReplicaInfo> readOnlyReplicas = ImmutableList.of(baseConfig.getOptionalReplicas().get(0));

 InstanceConfigInfo instanceConfigInfo =
     InstanceConfigInfo.newBuilder(InstanceConfigId.of(projectId, instanceConfigId), baseConfig)
         .setDisplayName(instanceConfigId)
         .addReadOnlyReplicas(readOnlyReplicas)
         .build();

 final OperationFuture<InstanceConfig, CreateInstanceConfigMetadata> operation =
     instanceAdminClient.createInstanceConfig(instanceConfigInfo);

 InstanceConfig instanceConfig = op.get(5, TimeUnit.MINUTES)
 
```
 

**Parameters**

**Name**

**Description**

`instanceConfig`

`[InstanceConfigInfo](/java/docs/reference/google-cloud-spanner/6.50.1/com.google.cloud.spanner.InstanceConfigInfo)`  

`options`

`[CreateAdminApiOption](/java/docs/reference/google-cloud-spanner/6.50.1/com.google.cloud.spanner.Options.CreateAdminApiOption)[]`  

**Returns**

**Type**

**Description**

`[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[InstanceConfig](/java/docs/reference/google-cloud-spanner/6.50.1/com.google.cloud.spanner.InstanceConfig),[CreateInstanceConfigMetadata](/java/docs/reference/google-cloud-spanner/6.50.1/com.google.spanner.admin.instance.v1.CreateInstanceConfigMetadata)>`

**Exceptions**

**Type**

**Description**

`[SpannerException](/java/docs/reference/google-cloud-spanner/6.50.1/com.google.cloud.spanner.SpannerException)`

### deleteInstance(String instanceId)

```
public abstract void deleteInstance(String instanceId)
```

Deletes an instance.

**Parameter**

**Name**

**Description**

`instanceId`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Exceptions**

**Type**

**Description**

`[SpannerException](/java/docs/reference/google-cloud-spanner/6.50.1/com.google.cloud.spanner.SpannerException)`

### deleteInstanceConfig(String instanceConfigId, Options.DeleteAdminApiOption\[\] options)

```
public default void deleteInstanceConfig(String instanceConfigId, Options.DeleteAdminApiOption[] options)
```

Deletes a custom instance config. Deletion is only allowed for custom instance configs and when no instances are using the configuration. If any instances are using the config, a SpannerException is thrown.

Only user managed configurations can be deleted.

 ```

 String projectId = "my-project";
 String instanceConfigId = "custom-user-config";

 instanceAdminClient.deleteInstanceConfig(instanceConfigId);
 
```
 

**Parameters**

**Name**

**Description**

`instanceConfigId`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`options`

`[DeleteAdminApiOption](/java/docs/reference/google-cloud-spanner/6.50.1/com.google.cloud.spanner.Options.DeleteAdminApiOption)[]`  

**Exceptions**

**Type**

**Description**

`[SpannerException](/java/docs/reference/google-cloud-spanner/6.50.1/com.google.cloud.spanner.SpannerException)`

### getInstance(String instanceId)

```
public abstract Instance getInstance(String instanceId)
```

Gets an instance.

**Parameter**

**Name**

**Description**

`instanceId`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[Instance](/java/docs/reference/google-cloud-spanner/6.50.1/com.google.cloud.spanner.Instance)`

**Exceptions**

**Type**

**Description**

`[SpannerException](/java/docs/reference/google-cloud-spanner/6.50.1/com.google.cloud.spanner.SpannerException)`

### getInstanceConfig(String configId)

```
public abstract InstanceConfig getInstanceConfig(String configId)
```

Gets an instance config.

**Parameter**

**Name**

**Description**

`configId`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[InstanceConfig](/java/docs/reference/google-cloud-spanner/6.50.1/com.google.cloud.spanner.InstanceConfig)`

**Exceptions**

**Type**

**Description**

`[SpannerException](/java/docs/reference/google-cloud-spanner/6.50.1/com.google.cloud.spanner.SpannerException)`

### getInstanceIAMPolicy(String instanceId)

```
public abstract Policy getInstanceIAMPolicy(String instanceId)
```

Returns the IAM policy for the given instance.

**Parameter**

**Name**

**Description**

`instanceId`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`com.google.cloud.Policy`

### getOperation(String name)

```
public abstract Operation getOperation(String name)
```

Gets the specified long-running operation.

**Parameter**

**Name**

**Description**

`name`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)`

### listInstanceConfigOperations(Options.ListOption\[\] options)

```
public default Page<Operation> listInstanceConfigOperations(Options.ListOption[] options)
```

Lists long-running instance config operations.

**Parameter**

**Name**

**Description**

`options`

`[ListOption](/java/docs/reference/google-cloud-spanner/6.50.1/com.google.cloud.spanner.Options.ListOption)[]`  

**Returns**

**Type**

**Description**

`[Page](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.paging.Page.html)<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### listInstanceConfigs(Options.ListOption\[\] options)

```
public abstract Page<InstanceConfig> listInstanceConfigs(Options.ListOption[] options)
```

Lists the supported instance configs for current project.

**Parameter**

**Name**

**Description**

`options`

`[ListOption](/java/docs/reference/google-cloud-spanner/6.50.1/com.google.cloud.spanner.Options.ListOption)[]`  

**Returns**

**Type**

**Description**

`[Page](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.paging.Page.html)<[InstanceConfig](/java/docs/reference/google-cloud-spanner/6.50.1/com.google.cloud.spanner.InstanceConfig)>`

**Exceptions**

**Type**

**Description**

`[SpannerException](/java/docs/reference/google-cloud-spanner/6.50.1/com.google.cloud.spanner.SpannerException)`

### listInstances(Options.ListOption\[\] options)

```
public abstract Page<Instance> listInstances(Options.ListOption[] options)
```

Lists the instances.

**Parameter**

**Name**

**Description**

`options`

`[ListOption](/java/docs/reference/google-cloud-spanner/6.50.1/com.google.cloud.spanner.Options.ListOption)[]`  

Options to control the instances returned. It also supports [Options#filter(String)](/java/docs/reference/google-cloud-spanner/6.50.1/com.google.cloud.spanner.Options#com_google_cloud_spanner_Options_filter_java_lang_String_) option. The fields eligible for filtering are:

-   name
-   display\_name
-   labels.key where key is the name of a label

 ```

 List<Instance> instances =
     Lists.newArrayList(
         instanceAdminClient.listInstances(Options.pageSize(1)).iterateAll());
 
```
 

 ```
 <!--SNIPPET instance_admin_client_list_instances-->
```

**Returns**

**Type**

**Description**

`[Page](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.paging.Page.html)<[Instance](/java/docs/reference/google-cloud-spanner/6.50.1/com.google.cloud.spanner.Instance)>`

**Exceptions**

**Type**

**Description**

`[SpannerException](/java/docs/reference/google-cloud-spanner/6.50.1/com.google.cloud.spanner.SpannerException)`

### newInstanceBuilder(InstanceId id)

```
public abstract Instance.Builder newInstanceBuilder(InstanceId id)
```

Returns a builder for `Instance` object with the given id.

**Parameter**

**Name**

**Description**

`id`

`[InstanceId](/java/docs/reference/google-cloud-spanner/6.50.1/com.google.cloud.spanner.InstanceId)`  

**Returns**

**Type**

**Description**

`[Instance.Builder](/java/docs/reference/google-cloud-spanner/6.50.1/com.google.cloud.spanner.Instance.Builder)`

### setInstanceIAMPolicy(String instanceId, Policy policy)

```
public abstract Policy setInstanceIAMPolicy(String instanceId, Policy policy)
```

Updates the IAM policy for the given instance and returns the resulting policy. It is highly recommended to first get the current policy and base the updated policy on the returned policy. See Policy.Builder#setEtag(String) for information on the recommended read-modify-write cycle.

**Parameters**

**Name**

**Description**

`instanceId`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`policy`

`com.google.cloud.Policy`  

**Returns**

**Type**

**Description**

`com.google.cloud.Policy`

### testInstanceIAMPermissions(String instanceId, Iterable<String> permissions)

```
public abstract Iterable<String> testInstanceIAMPermissions(String instanceId, Iterable<String> permissions)
```

Tests for the given permissions on the specified instance for the caller.

**Parameters**

**Name**

**Description**

`instanceId`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

the id of the instance to test.

`permissions`

`[Iterable](https://docs.oracle.com/javase/8/docs/api/java/lang/Iterable.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`  

the permissions to test for. Permissions with wildcards (such as '_', 'spanner._', 'spanner.instances.\*') are not allowed.

**Returns**

**Type**

**Description**

`[Iterable](https://docs.oracle.com/javase/8/docs/api/java/lang/Iterable.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

the subset of the tested permissions that the caller is allowed.

### updateInstance(InstanceInfo instance, InstanceInfo.InstanceField\[\] fieldsToUpdate)

```
public abstract OperationFuture<Instance,UpdateInstanceMetadata> updateInstance(InstanceInfo instance, InstanceInfo.InstanceField[] fieldsToUpdate)
```

Updates an instance, and begins allocating or releasing resources as requested. The returned `Operation` can be used to track the progress of updating the instance. If the named instance does not exist, throws SpannerException.

Immediately upon completion of this request:

-   For resource types for which a decrease in the instance's allocation has been requested, billing is based on the newly-requested level.

Until completion of the returned operation:

-   Cancelling the operation sets its metadata's cancel\_time, and begins restoring resources to their pre-request values. The operation is guaranteed to succeed at undoing all resource changes, after which point it terminates with a `CANCELLED` status.
-   All other attempts to modify the instance are rejected.
-   Reading the instance via the API continues to give the pre-request resource levels.

Upon completion of the returned operation:

-   Billing begins for all successfully-allocated resources (some types may have lower than the requested levels).
-   All newly-reserved resources are available for serving the instance's tables.
-   The instance's new resource levels are readable via the API.

 ```

 Instance instance = my_instance;
 final String clientProject = my_client_project;
 final String instanceId = my_instance_id;

 final String newDisplayName = my_display_name;

 InstanceInfo toUpdate =
     InstanceInfo.newBuilder(InstanceId.of(clientProject, instanceId))
         .setDisplayName(newDisplayName)
         .setNodeCount(instance.getNodeCount() + 1)
         .build();
 // Only update display name
 Operation<Instance, UpdateInstanceMetadata> op =
     instanceAdminClient.updateInstance(toUpdate, InstanceInfo.InstanceField.DISPLAY_NAME);
 op.waitFor().getResult();
 
```
 

**Parameters**

**Name**

**Description**

`instance`

`[InstanceInfo](/java/docs/reference/google-cloud-spanner/6.50.1/com.google.cloud.spanner.InstanceInfo)`  

`fieldsToUpdate`

`[InstanceField](/java/docs/reference/google-cloud-spanner/6.50.1/com.google.cloud.spanner.InstanceInfo.InstanceField)[]`  

**Returns**

**Type**

**Description**

`[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[Instance](/java/docs/reference/google-cloud-spanner/6.50.1/com.google.cloud.spanner.Instance),[UpdateInstanceMetadata](/java/docs/reference/google-cloud-spanner/6.50.1/com.google.spanner.admin.instance.v1.UpdateInstanceMetadata)>`

### updateInstanceConfig(InstanceConfigInfo instanceConfig, Iterable<InstanceConfigInfo.InstanceConfigField> fieldsToUpdate, Options.UpdateAdminApiOption\[\] options)

```
public default OperationFuture<InstanceConfig,UpdateInstanceConfigMetadata> updateInstanceConfig(InstanceConfigInfo instanceConfig, Iterable<InstanceConfigInfo.InstanceConfigField> fieldsToUpdate, Options.UpdateAdminApiOption[] options)
```

Updates a custom instance config. This can not be used to update a Google managed instance config. The returned `Operation` can be used to track the progress of updating the instance. If the named instance config does not exist, a SpannerException is thrown. The request must include at least one field to update.

Only user managed configurations can be updated.

Immediately after the request returns:

-   The instance config's `reconciling` field is set to true.

While the operation is pending:

-   Cancelling the operation sets its metadata's cancel\_time.
-   The operation is guaranteed to succeed at undoing all changes, after which point it terminates with a `CANCELLED` status.
-   All other attempts to modify the instance config are rejected.
-   Reading the instance config via the API continues to give the pre-request values.

Upon completion of the returned operation:

-   Creating instances using the instance configuration uses the new values.
-   The instance config's new values are readable via the API.
-   The instance config's `reconciling` field becomes false.

 ```

 String projectId = "my-project";
 String instanceConfigId = "custom-user-config";
 String displayName = "my-display-name";

 InstanceConfigInfo instanceConfigInfo =
     InstanceConfigInfo.newBuilder(InstanceConfigId.of(projectId, instanceConfigId))
         .setDisplayName(displayName)
         .build();

 // Only update display name.
 final OperationFuture<InstanceConfig, UpdateInstanceConfigMetadata> operation =
     instanceAdminClient.updateInstanceConfig(
         instanceConfigInfo, ImmutableList.of(InstanceConfigField.DISPLAY_NAME));

 InstanceConfig instanceConfig = operation.get(5, TimeUnit.MINUTES);
 
```
 

**Parameters**

**Name**

**Description**

`instanceConfig`

`[InstanceConfigInfo](/java/docs/reference/google-cloud-spanner/6.50.1/com.google.cloud.spanner.InstanceConfigInfo)`  

`fieldsToUpdate`

`[Iterable](https://docs.oracle.com/javase/8/docs/api/java/lang/Iterable.html)<[InstanceConfigField](/java/docs/reference/google-cloud-spanner/6.50.1/com.google.cloud.spanner.InstanceConfigInfo.InstanceConfigField)>`  

`options`

`[UpdateAdminApiOption](/java/docs/reference/google-cloud-spanner/6.50.1/com.google.cloud.spanner.Options.UpdateAdminApiOption)[]`  

**Returns**

**Type**

**Description**

`[OperationFuture](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.longrunning.OperationFuture.html)<[InstanceConfig](/java/docs/reference/google-cloud-spanner/6.50.1/com.google.cloud.spanner.InstanceConfig),[UpdateInstanceConfigMetadata](/java/docs/reference/google-cloud-spanner/6.50.1/com.google.spanner.admin.instance.v1.UpdateInstanceConfigMetadata)>`

**Exceptions**

**Type**

**Description**

`[SpannerException](/java/docs/reference/google-cloud-spanner/6.50.1/com.google.cloud.spanner.SpannerException)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
