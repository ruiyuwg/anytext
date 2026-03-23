-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface CreateConnectivityTestRequestOrBuilder (1.6.0) Stay organized with collections Save and categorize content based on your preferences.

1.88.0 (latest) 1.86.0 1.84.0 1.83.0 1.81.0 1.79.0 1.77.0 1.76.0 1.75.0 1.74.0 1.73.0 1.71.0 1.69.0 1.68.0 1.65.0 1.64.0 1.63.0 1.61.0 1.60.0 1.59.0 1.58.0 1.57.0 1.56.0 1.55.0 1.54.0 1.53.0 1.52.0 1.50.0 1.49.0 1.48.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.40.0 1.38.0 1.37.0 1.36.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.28.0 1.25.0 1.24.0 1.23.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.0 1.12.0 1.10.0 1.9.0 1.8.0 1.7.0 1.6.0 1.5.0 1.1.10

```
public interface CreateConnectivityTestRequestOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getParent()

```
public abstract String getParent()
```

Required. The parent resource of the Connectivity Test to create: `projects/{project_id}/locations/global`

`string parent = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

The parent.

### getParentBytes()

```
public abstract ByteString getParentBytes()
```

Required. The parent resource of the Connectivity Test to create: `projects/{project_id}/locations/global`

`string parent = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)

The bytes for parent.

### getResource()

```
public abstract ConnectivityTest getResource()
```

Required. A `ConnectivityTest` resource

`.google.cloud.networkmanagement.v1beta1.ConnectivityTest resource = 3 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

[ConnectivityTest](/java/docs/reference/google-cloud-network-management/1.6.0/com.google.cloud.networkmanagement.v1beta1.ConnectivityTest)

The resource.

### getResourceOrBuilder()

```
public abstract ConnectivityTestOrBuilder getResourceOrBuilder()
```

Required. A `ConnectivityTest` resource

`.google.cloud.networkmanagement.v1beta1.ConnectivityTest resource = 3 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

[ConnectivityTestOrBuilder](/java/docs/reference/google-cloud-network-management/1.6.0/com.google.cloud.networkmanagement.v1beta1.ConnectivityTestOrBuilder)

### getTestId()

```
public abstract String getTestId()
```

Required. The logical name of the Connectivity Test in your project with the following restrictions:

-   Must contain only lowercase letters, numbers, and hyphens.
-   Must start with a letter.
-   Must be between 1-40 characters.
-   Must end with a number or a letter.
-   Must be unique within the customer project

`string test_id = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

The testId.

### getTestIdBytes()

```
public abstract ByteString getTestIdBytes()
```

Required. The logical name of the Connectivity Test in your project with the following restrictions:

-   Must contain only lowercase letters, numbers, and hyphens.
-   Must start with a letter.
-   Must be between 1-40 characters.
-   Must end with a number or a letter.
-   Must be unique within the customer project

`string test_id = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)

The bytes for testId.

### hasResource()

```
public abstract boolean hasResource()
```

Required. A `ConnectivityTest` resource

`.google.cloud.networkmanagement.v1beta1.ConnectivityTest resource = 3 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

Whether the resource field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
