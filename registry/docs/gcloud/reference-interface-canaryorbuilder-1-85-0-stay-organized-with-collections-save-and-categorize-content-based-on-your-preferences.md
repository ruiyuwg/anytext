-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface CanaryOrBuilder (1.85.0) Stay organized with collections Save and categorize content based on your preferences.

1.85.0 (latest) 1.83.0 1.81.0 1.80.0 1.79.0 1.78.0 1.76.0 1.74.0 1.73.0 1.72.0 1.71.0 1.70.0 1.68.0 1.66.0 1.65.0 1.62.0 1.61.0 1.60.0 1.58.0 1.57.0 1.56.0 1.55.0 1.54.0 1.53.0 1.52.0 1.51.0 1.50.0 1.49.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.40.0 1.39.0 1.38.0 1.37.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.28.0 1.27.0 1.26.0 1.25.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.0 1.12.0 1.11.0 1.10.0 1.9.0 1.7.0 1.6.0 1.5.0 1.4.0 1.3.0 1.2.0 1.1.8 1.0.2

```
public interface CanaryOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getCanaryDeployment()

```
public abstract CanaryDeployment getCanaryDeployment()
```

Optional. Configures the progressive based deployment for a Target.

`.google.cloud.deploy.v1.CanaryDeployment canary_deployment = 2 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[CanaryDeployment](/java/docs/reference/google-cloud-deploy/latest/com.google.cloud.deploy.v1.CanaryDeployment)`

The canaryDeployment.

### getCanaryDeploymentOrBuilder()

```
public abstract CanaryDeploymentOrBuilder getCanaryDeploymentOrBuilder()
```

Optional. Configures the progressive based deployment for a Target.

`.google.cloud.deploy.v1.CanaryDeployment canary_deployment = 2 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[CanaryDeploymentOrBuilder](/java/docs/reference/google-cloud-deploy/latest/com.google.cloud.deploy.v1.CanaryDeploymentOrBuilder)`

### getCustomCanaryDeployment()

```
public abstract CustomCanaryDeployment getCustomCanaryDeployment()
```

Optional. Configures the progressive based deployment for a Target, but allows customizing at the phase level where a phase represents each of the percentage deployments.

`.google.cloud.deploy.v1.CustomCanaryDeployment custom_canary_deployment = 3 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[CustomCanaryDeployment](/java/docs/reference/google-cloud-deploy/latest/com.google.cloud.deploy.v1.CustomCanaryDeployment)`

The customCanaryDeployment.

### getCustomCanaryDeploymentOrBuilder()

```
public abstract CustomCanaryDeploymentOrBuilder getCustomCanaryDeploymentOrBuilder()
```

Optional. Configures the progressive based deployment for a Target, but allows customizing at the phase level where a phase represents each of the percentage deployments.

`.google.cloud.deploy.v1.CustomCanaryDeployment custom_canary_deployment = 3 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[CustomCanaryDeploymentOrBuilder](/java/docs/reference/google-cloud-deploy/latest/com.google.cloud.deploy.v1.CustomCanaryDeploymentOrBuilder)`

### getModeCase()

```
public abstract Canary.ModeCase getModeCase()
```

**Returns**

**Type**

**Description**

`[Canary.ModeCase](/java/docs/reference/google-cloud-deploy/latest/com.google.cloud.deploy.v1.Canary.ModeCase)`

### getRuntimeConfig()

```
public abstract RuntimeConfig getRuntimeConfig()
```

Optional. Runtime specific configurations for the deployment strategy. The runtime configuration is used to determine how Cloud Deploy will split traffic to enable a progressive deployment.

`.google.cloud.deploy.v1.RuntimeConfig runtime_config = 1 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[RuntimeConfig](/java/docs/reference/google-cloud-deploy/latest/com.google.cloud.deploy.v1.RuntimeConfig)`

The runtimeConfig.

### getRuntimeConfigOrBuilder()

```
public abstract RuntimeConfigOrBuilder getRuntimeConfigOrBuilder()
```

Optional. Runtime specific configurations for the deployment strategy. The runtime configuration is used to determine how Cloud Deploy will split traffic to enable a progressive deployment.

`.google.cloud.deploy.v1.RuntimeConfig runtime_config = 1 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[RuntimeConfigOrBuilder](/java/docs/reference/google-cloud-deploy/latest/com.google.cloud.deploy.v1.RuntimeConfigOrBuilder)`

### hasCanaryDeployment()

```
public abstract boolean hasCanaryDeployment()
```

Optional. Configures the progressive based deployment for a Target.

`.google.cloud.deploy.v1.CanaryDeployment canary_deployment = 2 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the canaryDeployment field is set.

### hasCustomCanaryDeployment()

```
public abstract boolean hasCustomCanaryDeployment()
```

Optional. Configures the progressive based deployment for a Target, but allows customizing at the phase level where a phase represents each of the percentage deployments.

`.google.cloud.deploy.v1.CustomCanaryDeployment custom_canary_deployment = 3 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the customCanaryDeployment field is set.

### hasRuntimeConfig()

```
public abstract boolean hasRuntimeConfig()
```

Optional. Runtime specific configurations for the deployment strategy. The runtime configuration is used to determine how Cloud Deploy will split traffic to enable a progressive deployment.

`.google.cloud.deploy.v1.RuntimeConfig runtime_config = 1 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the runtimeConfig field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
