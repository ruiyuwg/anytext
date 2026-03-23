-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface PolicyOrBuilder (2.18.0) Stay organized with collections Save and categorize content based on your preferences.

2.87.0 (latest) 2.85.0 2.83.0 2.82.0 2.80.0 2.78.0 2.76.0 2.75.0 2.74.0 2.73.0 2.72.0 2.70.0 2.68.0 2.67.0 2.64.0 2.63.0 2.62.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.51.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.7-SNAPSHOT 2.2.1 2.1.2 2.0.10

```
public interface PolicyOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getBooleanPolicy()

```
public abstract Policy.BooleanPolicy getBooleanPolicy()
```

For boolean `Constraints`, whether to enforce the `Constraint` or not.

`.google.cloud.orgpolicy.v1.Policy.BooleanPolicy boolean_policy = 6;`

**Returns**

**Type**

**Description**

`[Policy.BooleanPolicy](/java/docs/reference/google-cloud-orgpolicy/2.18.0/com.google.cloud.orgpolicy.v1.Policy.BooleanPolicy)`

The booleanPolicy.

### getBooleanPolicyOrBuilder()

```
public abstract Policy.BooleanPolicyOrBuilder getBooleanPolicyOrBuilder()
```

For boolean `Constraints`, whether to enforce the `Constraint` or not.

`.google.cloud.orgpolicy.v1.Policy.BooleanPolicy boolean_policy = 6;`

**Returns**

**Type**

**Description**

`[Policy.BooleanPolicyOrBuilder](/java/docs/reference/google-cloud-orgpolicy/2.18.0/com.google.cloud.orgpolicy.v1.Policy.BooleanPolicyOrBuilder)`

### getConstraint()

```
public abstract String getConstraint()
```

The name of the `Constraint` the `Policy` is configuring, for example, `constraints/serviceuser.services`. Immutable after creation.

`string constraint = 2;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The constraint.

### getConstraintBytes()

```
public abstract ByteString getConstraintBytes()
```

The name of the `Constraint` the `Policy` is configuring, for example, `constraints/serviceuser.services`. Immutable after creation.

`string constraint = 2;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for constraint.

### getEtag()

```
public abstract ByteString getEtag()
```

An opaque tag indicating the current version of the `Policy`, used for concurrency control. When the `Policy` is returned from either a `GetPolicy` or a `ListOrgPolicy` request, this `etag` indicates the version of the current `Policy` to use when executing a read-modify-write loop. When the `Policy` is returned from a `GetEffectivePolicy` request, the `etag` will be unset. When the `Policy` is used in a `SetOrgPolicy` method, use the `etag` value that was returned from a `GetOrgPolicy` request as part of a read-modify-write loop for concurrency control. Not setting the `etag`in a `SetOrgPolicy` request will result in an unconditional write of the `Policy`.

`bytes etag = 3;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The etag.

### getListPolicy()

```
public abstract Policy.ListPolicy getListPolicy()
```

List of values either allowed or disallowed.

`.google.cloud.orgpolicy.v1.Policy.ListPolicy list_policy = 5;`

**Returns**

**Type**

**Description**

`[Policy.ListPolicy](/java/docs/reference/google-cloud-orgpolicy/2.18.0/com.google.cloud.orgpolicy.v1.Policy.ListPolicy)`

The listPolicy.

### getListPolicyOrBuilder()

```
public abstract Policy.ListPolicyOrBuilder getListPolicyOrBuilder()
```

List of values either allowed or disallowed.

`.google.cloud.orgpolicy.v1.Policy.ListPolicy list_policy = 5;`

**Returns**

**Type**

**Description**

`[Policy.ListPolicyOrBuilder](/java/docs/reference/google-cloud-orgpolicy/2.18.0/com.google.cloud.orgpolicy.v1.Policy.ListPolicyOrBuilder)`

### getPolicyTypeCase()

```
public abstract Policy.PolicyTypeCase getPolicyTypeCase()
```

**Returns**

**Type**

**Description**

`[Policy.PolicyTypeCase](/java/docs/reference/google-cloud-orgpolicy/2.18.0/com.google.cloud.orgpolicy.v1.Policy.PolicyTypeCase)`

### getRestoreDefault()

```
public abstract Policy.RestoreDefault getRestoreDefault()
```

Restores the default behavior of the constraint; independent of `Constraint` type.

`.google.cloud.orgpolicy.v1.Policy.RestoreDefault restore_default = 7;`

**Returns**

**Type**

**Description**

`[Policy.RestoreDefault](/java/docs/reference/google-cloud-orgpolicy/2.18.0/com.google.cloud.orgpolicy.v1.Policy.RestoreDefault)`

The restoreDefault.

### getRestoreDefaultOrBuilder()

```
public abstract Policy.RestoreDefaultOrBuilder getRestoreDefaultOrBuilder()
```

Restores the default behavior of the constraint; independent of `Constraint` type.

`.google.cloud.orgpolicy.v1.Policy.RestoreDefault restore_default = 7;`

**Returns**

**Type**

**Description**

`[Policy.RestoreDefaultOrBuilder](/java/docs/reference/google-cloud-orgpolicy/2.18.0/com.google.cloud.orgpolicy.v1.Policy.RestoreDefaultOrBuilder)`

### getUpdateTime()

```
public abstract Timestamp getUpdateTime()
```

The time stamp the `Policy` was previously updated. This is set by the server, not specified by the caller, and represents the last time a call to `SetOrgPolicy` was made for that `Policy`. Any value set by the client will be ignored.

`.google.protobuf.Timestamp update_time = 4;`

**Returns**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`

The updateTime.

### getUpdateTimeOrBuilder()

```
public abstract TimestampOrBuilder getUpdateTimeOrBuilder()
```

The time stamp the `Policy` was previously updated. This is set by the server, not specified by the caller, and represents the last time a call to `SetOrgPolicy` was made for that `Policy`. Any value set by the client will be ignored.

`.google.protobuf.Timestamp update_time = 4;`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### getVersion()

```
public abstract int getVersion()
```

Version of the `Policy`. Default version is 0;

`int32 version = 1;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The version.

### hasBooleanPolicy()

```
public abstract boolean hasBooleanPolicy()
```

For boolean `Constraints`, whether to enforce the `Constraint` or not.

`.google.cloud.orgpolicy.v1.Policy.BooleanPolicy boolean_policy = 6;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the booleanPolicy field is set.

### hasListPolicy()

```
public abstract boolean hasListPolicy()
```

List of values either allowed or disallowed.

`.google.cloud.orgpolicy.v1.Policy.ListPolicy list_policy = 5;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the listPolicy field is set.

### hasRestoreDefault()

```
public abstract boolean hasRestoreDefault()
```

Restores the default behavior of the constraint; independent of `Constraint` type.

`.google.cloud.orgpolicy.v1.Policy.RestoreDefault restore_default = 7;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the restoreDefault field is set.

### hasUpdateTime()

```
public abstract boolean hasUpdateTime()
```

The time stamp the `Policy` was previously updated. This is set by the server, not specified by the caller, and represents the last time a call to `SetOrgPolicy` was made for that `Policy`. Any value set by the client will be ignored.

`.google.protobuf.Timestamp update_time = 4;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the updateTime field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
