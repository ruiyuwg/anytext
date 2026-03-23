-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface PermissionOrBuilder (3.28.0) Stay organized with collections Save and categorize content based on your preferences.

3.82.0 (latest) 3.80.0 3.78.0 3.77.0 3.76.0 3.75.0 3.73.0 3.71.0 3.70.0 3.69.0 3.68.0 3.67.0 3.65.0 3.63.0 3.62.0 3.59.0 3.58.0 3.57.0 3.55.0 3.54.0 3.53.0 3.52.0 3.51.0 3.50.0 3.49.0 3.48.0 3.47.0 3.44.0 3.43.0 3.42.0 3.41.0 3.40.0 3.39.0 3.38.0 3.37.0 3.36.0 3.35.0 3.34.0 3.32.0 3.31.0 3.30.0 3.29.0 3.28.0 3.27.0 3.26.0 3.25.0 3.24.0 3.23.0 3.22.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.0.0 1.2.5 1.1.8 0.2.0

```
public interface PermissionOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getApiDisabled()

```
public abstract boolean getApiDisabled()
```

The service API associated with the permission is not enabled.

`bool api_disabled = 7;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The apiDisabled.

### getCustomRolesSupportLevel()

```
public abstract Permission.CustomRolesSupportLevel getCustomRolesSupportLevel()
```

The current custom role support level.

`.google.iam.admin.v1.Permission.CustomRolesSupportLevel custom_roles_support_level = 6;`

**Returns**

**Type**

**Description**

`[Permission.CustomRolesSupportLevel](/java/docs/reference/google-iam-admin/3.28.0/com.google.iam.admin.v1.Permission.CustomRolesSupportLevel)`

The customRolesSupportLevel.

### getCustomRolesSupportLevelValue()

```
public abstract int getCustomRolesSupportLevelValue()
```

The current custom role support level.

`.google.iam.admin.v1.Permission.CustomRolesSupportLevel custom_roles_support_level = 6;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for customRolesSupportLevel.

### getDescription()

```
public abstract String getDescription()
```

A brief description of what this Permission is used for. This permission can ONLY be used in predefined roles.

`string description = 3;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The description.

### getDescriptionBytes()

```
public abstract ByteString getDescriptionBytes()
```

A brief description of what this Permission is used for. This permission can ONLY be used in predefined roles.

`string description = 3;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for description.

### getName()

```
public abstract String getName()
```

The name of this Permission.

`string name = 1;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The name.

### getNameBytes()

```
public abstract ByteString getNameBytes()
```

The name of this Permission.

`string name = 1;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for name.

### getOnlyInPredefinedRoles() (deprecated)

```
public abstract boolean getOnlyInPredefinedRoles()
```

**Deprecated.** _google.iam.admin.v1.Permission.only\_in\_predefined\_roles is deprecated. See google/iam/admin/v1/iam.proto;l=1450_

`bool only_in_predefined_roles = 4 [deprecated = true];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The onlyInPredefinedRoles.

### getPrimaryPermission()

```
public abstract String getPrimaryPermission()
```

The preferred name for this permission. If present, then this permission is an alias of, and equivalent to, the listed primary\_permission.

`string primary_permission = 8;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The primaryPermission.

### getPrimaryPermissionBytes()

```
public abstract ByteString getPrimaryPermissionBytes()
```

The preferred name for this permission. If present, then this permission is an alias of, and equivalent to, the listed primary\_permission.

`string primary_permission = 8;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for primaryPermission.

### getStage()

```
public abstract Permission.PermissionLaunchStage getStage()
```

The current launch stage of the permission.

`.google.iam.admin.v1.Permission.PermissionLaunchStage stage = 5;`

**Returns**

**Type**

**Description**

`[Permission.PermissionLaunchStage](/java/docs/reference/google-iam-admin/3.28.0/com.google.iam.admin.v1.Permission.PermissionLaunchStage)`

The stage.

### getStageValue()

```
public abstract int getStageValue()
```

The current launch stage of the permission.

`.google.iam.admin.v1.Permission.PermissionLaunchStage stage = 5;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for stage.

### getTitle()

```
public abstract String getTitle()
```

The title of this Permission.

`string title = 2;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The title.

### getTitleBytes()

```
public abstract ByteString getTitleBytes()
```

The title of this Permission.

`string title = 2;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for title.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
