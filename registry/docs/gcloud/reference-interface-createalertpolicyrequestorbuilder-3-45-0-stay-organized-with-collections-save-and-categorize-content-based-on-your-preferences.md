-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface CreateAlertPolicyRequestOrBuilder (3.45.0) Stay organized with collections Save and categorize content based on your preferences.

3.88.0 (latest) 3.86.0 3.84.0 3.83.0 3.81.0 3.79.0 3.77.0 3.76.0 3.75.0 3.74.0 3.73.0 3.71.0 3.69.0 3.68.0 3.65.0 3.64.0 3.63.0 3.61.0 3.60.0 3.59.0 3.58.0 3.57.0 3.56.0 3.55.0 3.54.0 3.53.0 3.52.0 3.50.0 3.49.0 3.48.0 3.47.0 3.46.0 3.45.0 3.44.0 3.43.0 3.42.0 3.41.0 3.40.0 3.38.0 3.37.0 3.36.0 3.35.0 3.34.0 3.33.0 3.32.0 3.31.0 3.30.0 3.29.0 3.28.0 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.6 3.3.6 3.2.10

```
public interface CreateAlertPolicyRequestOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getAlertPolicy()

```
public abstract AlertPolicy getAlertPolicy()
```

Required. The requested alerting policy. You should omit the `name` field in this policy. The name will be returned in the new policy, including a new `[ALERT_POLICY_ID]` value.

`.google.monitoring.v3.AlertPolicy alert_policy = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[AlertPolicy](/java/docs/reference/google-cloud-monitoring/3.45.0/com.google.monitoring.v3.AlertPolicy)`

The alertPolicy.

### getAlertPolicyOrBuilder()

```
public abstract AlertPolicyOrBuilder getAlertPolicyOrBuilder()
```

Required. The requested alerting policy. You should omit the `name` field in this policy. The name will be returned in the new policy, including a new `[ALERT_POLICY_ID]` value.

`.google.monitoring.v3.AlertPolicy alert_policy = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[AlertPolicyOrBuilder](/java/docs/reference/google-cloud-monitoring/3.45.0/com.google.monitoring.v3.AlertPolicyOrBuilder)`

### getName()

```
public abstract String getName()
```

Required. The [project](https://cloud.google.com/monitoring/api/v3#project_name) in which to create the alerting policy. The format is:

 ```
 projects/[PROJECT_ID_OR_NUMBER]
```

Note that this field names the parent container in which the alerting policy will be written, not the name of the created policy. |name| must be a host project of a Metrics Scope, otherwise INVALID\_ARGUMENT error will return. The alerting policy that is returned will have a name that contains a normalized representation of this name as a prefix but adds a suffix of the form `/alertPolicies/[ALERT_POLICY_ID]`, identifying the policy in the container.

`string name = 3 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The name.

### getNameBytes()

```
public abstract ByteString getNameBytes()
```

Required. The [project](https://cloud.google.com/monitoring/api/v3#project_name) in which to create the alerting policy. The format is:

 ```
 projects/[PROJECT_ID_OR_NUMBER]
```

Note that this field names the parent container in which the alerting policy will be written, not the name of the created policy. |name| must be a host project of a Metrics Scope, otherwise INVALID\_ARGUMENT error will return. The alerting policy that is returned will have a name that contains a normalized representation of this name as a prefix but adds a suffix of the form `/alertPolicies/[ALERT_POLICY_ID]`, identifying the policy in the container.

`string name = 3 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for name.

### hasAlertPolicy()

```
public abstract boolean hasAlertPolicy()
```

Required. The requested alerting policy. You should omit the `name` field in this policy. The name will be returned in the new policy, including a new `[ALERT_POLICY_ID]` value.

`.google.monitoring.v3.AlertPolicy alert_policy = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the alertPolicy field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
