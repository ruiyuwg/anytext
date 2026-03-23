-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface ConfigSyncDeploymentStateOrBuilder (1.55.0) Stay organized with collections Save and categorize content based on your preferences.

1.87.0 (latest) 1.85.0 1.83.0 1.82.0 1.81.0 1.80.0 1.78.0 1.76.0 1.75.0 1.74.0 1.73.0 1.72.0 1.70.0 1.68.0 1.67.0 1.64.0 1.63.0 1.62.0 1.60.0 1.59.0 1.58.0 1.57.0 1.56.0 1.55.0 1.54.0 1.53.0 1.52.0 1.51.0 1.49.0 1.48.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.40.0 1.39.0 1.37.0 1.36.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.28.0 1.27.0 1.24.0 1.23.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.0 1.12.0 1.11.0 1.9.0 1.8.0 1.7.0 1.6.0 1.5.0 1.4.0 1.3.6 1.2.1 1.1.0 1.0.1 0.5.4

```
public interface ConfigSyncDeploymentStateOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getAdmissionWebhook()

```
public abstract DeploymentState getAdmissionWebhook()
```

Deployment state of admission-webhook

`.google.cloud.gkehub.configmanagement.v1.DeploymentState admission_webhook = 7;`

**Returns**

**Type**

**Description**

`[DeploymentState](/java/docs/reference/google-cloud-gkehub/1.55.0/com.google.cloud.gkehub.configmanagement.v1.DeploymentState)`

The admissionWebhook.

### getAdmissionWebhookValue()

```
public abstract int getAdmissionWebhookValue()
```

Deployment state of admission-webhook

`.google.cloud.gkehub.configmanagement.v1.DeploymentState admission_webhook = 7;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for admissionWebhook.

### getGitSync()

```
public abstract DeploymentState getGitSync()
```

Deployment state of the git-sync pod

`.google.cloud.gkehub.configmanagement.v1.DeploymentState git_sync = 3;`

**Returns**

**Type**

**Description**

`[DeploymentState](/java/docs/reference/google-cloud-gkehub/1.55.0/com.google.cloud.gkehub.configmanagement.v1.DeploymentState)`

The gitSync.

### getGitSyncValue()

```
public abstract int getGitSyncValue()
```

Deployment state of the git-sync pod

`.google.cloud.gkehub.configmanagement.v1.DeploymentState git_sync = 3;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for gitSync.

### getImporter()

```
public abstract DeploymentState getImporter()
```

Deployment state of the importer pod

`.google.cloud.gkehub.configmanagement.v1.DeploymentState importer = 1;`

**Returns**

**Type**

**Description**

`[DeploymentState](/java/docs/reference/google-cloud-gkehub/1.55.0/com.google.cloud.gkehub.configmanagement.v1.DeploymentState)`

The importer.

### getImporterValue()

```
public abstract int getImporterValue()
```

Deployment state of the importer pod

`.google.cloud.gkehub.configmanagement.v1.DeploymentState importer = 1;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for importer.

### getMonitor()

```
public abstract DeploymentState getMonitor()
```

Deployment state of the monitor pod

`.google.cloud.gkehub.configmanagement.v1.DeploymentState monitor = 4;`

**Returns**

**Type**

**Description**

`[DeploymentState](/java/docs/reference/google-cloud-gkehub/1.55.0/com.google.cloud.gkehub.configmanagement.v1.DeploymentState)`

The monitor.

### getMonitorValue()

```
public abstract int getMonitorValue()
```

Deployment state of the monitor pod

`.google.cloud.gkehub.configmanagement.v1.DeploymentState monitor = 4;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for monitor.

### getReconcilerManager()

```
public abstract DeploymentState getReconcilerManager()
```

Deployment state of reconciler-manager pod

`.google.cloud.gkehub.configmanagement.v1.DeploymentState reconciler_manager = 5;`

**Returns**

**Type**

**Description**

`[DeploymentState](/java/docs/reference/google-cloud-gkehub/1.55.0/com.google.cloud.gkehub.configmanagement.v1.DeploymentState)`

The reconcilerManager.

### getReconcilerManagerValue()

```
public abstract int getReconcilerManagerValue()
```

Deployment state of reconciler-manager pod

`.google.cloud.gkehub.configmanagement.v1.DeploymentState reconciler_manager = 5;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for reconcilerManager.

### getRootReconciler()

```
public abstract DeploymentState getRootReconciler()
```

Deployment state of root-reconciler

`.google.cloud.gkehub.configmanagement.v1.DeploymentState root_reconciler = 6;`

**Returns**

**Type**

**Description**

`[DeploymentState](/java/docs/reference/google-cloud-gkehub/1.55.0/com.google.cloud.gkehub.configmanagement.v1.DeploymentState)`

The rootReconciler.

### getRootReconcilerValue()

```
public abstract int getRootReconcilerValue()
```

Deployment state of root-reconciler

`.google.cloud.gkehub.configmanagement.v1.DeploymentState root_reconciler = 6;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for rootReconciler.

### getSyncer()

```
public abstract DeploymentState getSyncer()
```

Deployment state of the syncer pod

`.google.cloud.gkehub.configmanagement.v1.DeploymentState syncer = 2;`

**Returns**

**Type**

**Description**

`[DeploymentState](/java/docs/reference/google-cloud-gkehub/1.55.0/com.google.cloud.gkehub.configmanagement.v1.DeploymentState)`

The syncer.

### getSyncerValue()

```
public abstract int getSyncerValue()
```

Deployment state of the syncer pod

`.google.cloud.gkehub.configmanagement.v1.DeploymentState syncer = 2;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for syncer.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
