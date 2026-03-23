-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface EffectiveEventThreatDetectionCustomModuleOrBuilder (0.2.0) Stay organized with collections Save and categorize content based on your preferences.

0.55.0 (latest) 0.53.0 0.51.0 0.50.0 0.48.0 0.46.0 0.44.0 0.43.0 0.42.0 0.41.0 0.40.0 0.38.0 0.36.0 0.35.0 0.32.0 0.31.0 0.30.0 0.28.0 0.27.0 0.26.0 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.17.0 0.16.0 0.15.0 0.14.0 0.13.0 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.7.0 0.5.0 0.4.0 0.3.0 0.2.0 0.1.0

```
public interface EffectiveEventThreatDetectionCustomModuleOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getConfig()

```
public abstract Struct getConfig()
```

Output only. Config for the effective module.

`.google.protobuf.Struct config = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[Struct](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Struct.html)`

The config.

### getConfigOrBuilder()

```
public abstract StructOrBuilder getConfigOrBuilder()
```

Output only. Config for the effective module.

`.google.protobuf.Struct config = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[StructOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.StructOrBuilder.html)`

### getDescription()

```
public abstract String getDescription()
```

Output only. The description for the module.

`string description = 6 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The description.

### getDescriptionBytes()

```
public abstract ByteString getDescriptionBytes()
```

Output only. The description for the module.

`string description = 6 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for description.

### getDisplayName()

```
public abstract String getDisplayName()
```

Output only. The human readable name to be displayed for the module.

`string display_name = 5 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The displayName.

### getDisplayNameBytes()

```
public abstract ByteString getDisplayNameBytes()
```

Output only. The human readable name to be displayed for the module.

`string display_name = 5 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for displayName.

### getEnablementState()

```
public abstract EffectiveEventThreatDetectionCustomModule.EnablementState getEnablementState()
```

Output only. The effective state of enablement for the module at the given level of the hierarchy.

`.google.cloud.securitycentermanagement.v1.EffectiveEventThreatDetectionCustomModule.EnablementState enablement_state = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[EffectiveEventThreatDetectionCustomModule.EnablementState](/java/docs/reference/google-cloud-securitycentermanagement/0.2.0/com.google.cloud.securitycentermanagement.v1.EffectiveEventThreatDetectionCustomModule.EnablementState)`

The enablementState.

### getEnablementStateValue()

```
public abstract int getEnablementStateValue()
```

Output only. The effective state of enablement for the module at the given level of the hierarchy.

`.google.cloud.securitycentermanagement.v1.EffectiveEventThreatDetectionCustomModule.EnablementState enablement_state = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for enablementState.

### getName()

```
public abstract String getName()
```

Immutable. The resource name of the ETD custom module.

Its format is:

-   "organizations/{organization}/locations/{location}/effectiveEventThreatDetectionCustomModules/{effective\_event\_threat\_detection\_custom\_module}".
-   "folders/{folder}/locations/{location}/effectiveEventThreatDetectionCustomModules/{effective\_event\_threat\_detection\_custom\_module}".
-   "projects/{project}/locations/{location}/effectiveEventThreatDetectionCustomModules/{effective\_event\_threat\_detection\_custom\_module}".

`string name = 1 [(.google.api.field_behavior) = IMMUTABLE];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The name.

### getNameBytes()

```
public abstract ByteString getNameBytes()
```

Immutable. The resource name of the ETD custom module.

Its format is:

-   "organizations/{organization}/locations/{location}/effectiveEventThreatDetectionCustomModules/{effective\_event\_threat\_detection\_custom\_module}".
-   "folders/{folder}/locations/{location}/effectiveEventThreatDetectionCustomModules/{effective\_event\_threat\_detection\_custom\_module}".
-   "projects/{project}/locations/{location}/effectiveEventThreatDetectionCustomModules/{effective\_event\_threat\_detection\_custom\_module}".

`string name = 1 [(.google.api.field_behavior) = IMMUTABLE];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for name.

### getType()

```
public abstract String getType()
```

Output only. Type for the module. e.g. CONFIGURABLE\_BAD\_IP.

`string type = 4 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The type.

### getTypeBytes()

```
public abstract ByteString getTypeBytes()
```

Output only. Type for the module. e.g. CONFIGURABLE\_BAD\_IP.

`string type = 4 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for type.

### hasConfig()

```
public abstract boolean hasConfig()
```

Output only. Config for the effective module.

`.google.protobuf.Struct config = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the config field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
