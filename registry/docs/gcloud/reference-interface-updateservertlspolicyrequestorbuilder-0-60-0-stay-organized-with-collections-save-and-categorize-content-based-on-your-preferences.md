-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface UpdateServerTlsPolicyRequestOrBuilder (0.60.0) Stay organized with collections Save and categorize content based on your preferences.

0.90.0 (latest) 0.88.0 0.86.0 0.85.0 0.83.0 0.81.0 0.79.0 0.78.0 0.77.0 0.76.0 0.75.0 0.73.0 0.71.0 0.70.0 0.67.0 0.66.0 0.65.0 0.63.0 0.62.0 0.61.0 0.60.0 0.59.0 0.58.0 0.57.0 0.56.0 0.55.0 0.54.0 0.52.0 0.51.0 0.50.0 0.49.0 0.48.0 0.47.0 0.46.0 0.45.0 0.44.0 0.43.0 0.42.0 0.40.0 0.39.0 0.38.0 0.37.0 0.36.0 0.35.0 0.34.0 0.33.0 0.32.0 0.31.0 0.30.0 0.27.0 0.26.0 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.14.0 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.7.0 0.6.4 0.5.1 0.4.4

```
public interface UpdateServerTlsPolicyRequestOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getServerTlsPolicy()

```
public abstract ServerTlsPolicy getServerTlsPolicy()
```

Required. Updated ServerTlsPolicy resource.

`.google.cloud.networksecurity.v1.ServerTlsPolicy server_tls_policy = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[ServerTlsPolicy](/java/docs/reference/google-cloud-network-security/0.60.0/com.google.cloud.networksecurity.v1.ServerTlsPolicy)`

The serverTlsPolicy.

### getServerTlsPolicyOrBuilder()

```
public abstract ServerTlsPolicyOrBuilder getServerTlsPolicyOrBuilder()
```

Required. Updated ServerTlsPolicy resource.

`.google.cloud.networksecurity.v1.ServerTlsPolicy server_tls_policy = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[ServerTlsPolicyOrBuilder](/java/docs/reference/google-cloud-network-security/0.60.0/com.google.cloud.networksecurity.v1.ServerTlsPolicyOrBuilder)`

### getUpdateMask()

```
public abstract FieldMask getUpdateMask()
```

Optional. Field mask is used to specify the fields to be overwritten in the ServerTlsPolicy resource by the update. The fields specified in the update\_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.

`.google.protobuf.FieldMask update_mask = 1 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[FieldMask](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.FieldMask.html)`

The updateMask.

### getUpdateMaskOrBuilder()

```
public abstract FieldMaskOrBuilder getUpdateMaskOrBuilder()
```

Optional. Field mask is used to specify the fields to be overwritten in the ServerTlsPolicy resource by the update. The fields specified in the update\_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.

`.google.protobuf.FieldMask update_mask = 1 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[FieldMaskOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.FieldMaskOrBuilder.html)`

### hasServerTlsPolicy()

```
public abstract boolean hasServerTlsPolicy()
```

Required. Updated ServerTlsPolicy resource.

`.google.cloud.networksecurity.v1.ServerTlsPolicy server_tls_policy = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the serverTlsPolicy field is set.

### hasUpdateMask()

```
public abstract boolean hasUpdateMask()
```

Optional. Field mask is used to specify the fields to be overwritten in the ServerTlsPolicy resource by the update. The fields specified in the update\_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.

`.google.protobuf.FieldMask update_mask = 1 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the updateMask field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
