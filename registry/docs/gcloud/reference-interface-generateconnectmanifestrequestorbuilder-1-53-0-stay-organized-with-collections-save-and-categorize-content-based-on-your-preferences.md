-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface GenerateConnectManifestRequestOrBuilder (1.53.0) Stay organized with collections Save and categorize content based on your preferences.

1.87.0 (latest) 1.85.0 1.83.0 1.82.0 1.81.0 1.80.0 1.78.0 1.76.0 1.75.0 1.74.0 1.73.0 1.72.0 1.70.0 1.68.0 1.67.0 1.64.0 1.63.0 1.62.0 1.60.0 1.59.0 1.58.0 1.57.0 1.56.0 1.55.0 1.54.0 1.53.0 1.52.0 1.51.0 1.49.0 1.48.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.40.0 1.39.0 1.37.0 1.36.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.28.0 1.27.0 1.24.0 1.23.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.0 1.12.0 1.11.0 1.9.0 1.8.0 1.7.0 1.6.0 1.5.0 1.4.0 1.3.6 1.2.1 1.1.0 1.0.1 0.5.4

```
public interface GenerateConnectManifestRequestOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getConnectAgent()

```
public abstract ConnectAgent getConnectAgent()
```

Optional. The connect agent to generate manifest for.

`.google.cloud.gkehub.v1beta1.ConnectAgent connect_agent = 2 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[ConnectAgent](/java/docs/reference/google-cloud-gkehub/1.53.0/com.google.cloud.gkehub.v1beta1.ConnectAgent)`

The connectAgent.

### getConnectAgentOrBuilder()

```
public abstract ConnectAgentOrBuilder getConnectAgentOrBuilder()
```

Optional. The connect agent to generate manifest for.

`.google.cloud.gkehub.v1beta1.ConnectAgent connect_agent = 2 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[ConnectAgentOrBuilder](/java/docs/reference/google-cloud-gkehub/1.53.0/com.google.cloud.gkehub.v1beta1.ConnectAgentOrBuilder)`

### getImagePullSecretContent()

```
public abstract ByteString getImagePullSecretContent()
```

Optional. The image pull secret content for the registry, if not public.

`bytes image_pull_secret_content = 6 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The imagePullSecretContent.

### getIsUpgrade()

```
public abstract boolean getIsUpgrade()
```

Optional. If true, generate the resources for upgrade only. Some resources generated only for installation (e.g. secrets) will be excluded.

`bool is_upgrade = 4 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The isUpgrade.

### getName()

```
public abstract String getName()
```

Required. The Membership resource name the Agent will associate with, in the format `projects/*/locations/*/memberships/*`.

`string name = 1 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The name.

### getNameBytes()

```
public abstract ByteString getNameBytes()
```

Required. The Membership resource name the Agent will associate with, in the format `projects/*/locations/*/memberships/*`.

`string name = 1 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for name.

### getRegistry()

```
public abstract String getRegistry()
```

Optional. The registry to fetch the connect agent image from. Defaults to gcr.io/gkeconnect.

`string registry = 5 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The registry.

### getRegistryBytes()

```
public abstract ByteString getRegistryBytes()
```

Optional. The registry to fetch the connect agent image from. Defaults to gcr.io/gkeconnect.

`string registry = 5 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for registry.

### getVersion()

```
public abstract String getVersion()
```

Optional. The Connect agent version to use. Defaults to the most current version.

`string version = 3 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The version.

### getVersionBytes()

```
public abstract ByteString getVersionBytes()
```

Optional. The Connect agent version to use. Defaults to the most current version.

`string version = 3 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for version.

### hasConnectAgent()

```
public abstract boolean hasConnectAgent()
```

Optional. The connect agent to generate manifest for.

`.google.cloud.gkehub.v1beta1.ConnectAgent connect_agent = 2 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the connectAgent field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
