-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface TestIamPermissionsDiskRequestOrBuilder (1.93.0) Stay organized with collections Save and categorize content based on your preferences.

1.97.0 (latest) 1.95.0 1.93.0 1.92.0 1.91.0 1.90.0 1.88.0 1.86.0 1.85.0 1.84.0 1.83.0 1.82.0 1.80.0 1.78.0 1.77.0 1.74.0 1.73.0 1.72.0 1.70.0 1.69.0 1.68.0 1.67.0 1.66.0 1.65.0 1.64.0 1.63.0 1.62.0 1.61.0 1.59.0 1.58.0 1.57.0 1.56.0 1.55.0 1.54.0 1.53.0 1.52.0 1.51.0 1.50.0 1.49.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.40.0 1.39.0 1.38.0 1.37.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.28.0 1.27.0 1.26.0 1.25.0 1.24.0 1.23.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.0 1.12.1 1.11.0 1.9.1 1.8.1 1.7.2 1.6.0-beta

```
public interface TestIamPermissionsDiskRequestOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getProject()

```
public abstract String getProject()
```

Project ID for this request.

`string project = 227560217 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The project.

### getProjectBytes()

```
public abstract ByteString getProjectBytes()
```

Project ID for this request.

`string project = 227560217 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for project.

### getResource()

```
public abstract String getResource()
```

Name or id of the resource for this request.

`string resource = 195806222 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The resource.

### getResourceBytes()

```
public abstract ByteString getResourceBytes()
```

Name or id of the resource for this request.

`string resource = 195806222 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for resource.

### getTestPermissionsRequestResource()

```
public abstract TestPermissionsRequest getTestPermissionsRequestResource()
```

The body resource for this request

`.google.cloud.compute.v1.TestPermissionsRequest test_permissions_request_resource = 439214758 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[TestPermissionsRequest](/java/docs/reference/google-cloud-compute/latest/com.google.cloud.compute.v1.TestPermissionsRequest)`

The testPermissionsRequestResource.

### getTestPermissionsRequestResourceOrBuilder()

```
public abstract TestPermissionsRequestOrBuilder getTestPermissionsRequestResourceOrBuilder()
```

The body resource for this request

`.google.cloud.compute.v1.TestPermissionsRequest test_permissions_request_resource = 439214758 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[TestPermissionsRequestOrBuilder](/java/docs/reference/google-cloud-compute/latest/com.google.cloud.compute.v1.TestPermissionsRequestOrBuilder)`

### getZone()

```
public abstract String getZone()
```

The name of the zone for this request.

`string zone = 3744684 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The zone.

### getZoneBytes()

```
public abstract ByteString getZoneBytes()
```

The name of the zone for this request.

`string zone = 3744684 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for zone.

### hasTestPermissionsRequestResource()

```
public abstract boolean hasTestPermissionsRequestResource()
```

The body resource for this request

`.google.cloud.compute.v1.TestPermissionsRequest test_permissions_request_resource = 439214758 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the testPermissionsRequestResource field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
