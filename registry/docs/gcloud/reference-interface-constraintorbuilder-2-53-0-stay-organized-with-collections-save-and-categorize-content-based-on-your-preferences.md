-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface ConstraintOrBuilder (2.53.0) Stay organized with collections Save and categorize content based on your preferences.

2.87.0 (latest) 2.85.0 2.83.0 2.82.0 2.80.0 2.78.0 2.76.0 2.75.0 2.74.0 2.73.0 2.72.0 2.70.0 2.68.0 2.67.0 2.64.0 2.63.0 2.62.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.51.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.7-SNAPSHOT 2.2.1 2.1.2 2.0.10

```
public interface ConstraintOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getBooleanConstraint()

```
public abstract Constraint.BooleanConstraint getBooleanConstraint()
```

Defines this constraint as being a BooleanConstraint.

`.google.cloud.orgpolicy.v2.Constraint.BooleanConstraint boolean_constraint = 6;`

**Returns**

**Type**

**Description**

`[Constraint.BooleanConstraint](/java/docs/reference/google-cloud-orgpolicy/2.53.0/com.google.cloud.orgpolicy.v2.Constraint.BooleanConstraint)`

The booleanConstraint.

### getBooleanConstraintOrBuilder()

```
public abstract Constraint.BooleanConstraintOrBuilder getBooleanConstraintOrBuilder()
```

Defines this constraint as being a BooleanConstraint.

`.google.cloud.orgpolicy.v2.Constraint.BooleanConstraint boolean_constraint = 6;`

**Returns**

**Type**

**Description**

`[Constraint.BooleanConstraintOrBuilder](/java/docs/reference/google-cloud-orgpolicy/2.53.0/com.google.cloud.orgpolicy.v2.Constraint.BooleanConstraintOrBuilder)`

### getConstraintDefault()

```
public abstract Constraint.ConstraintDefault getConstraintDefault()
```

The evaluation behavior of this constraint in the absence of a policy.

`.google.cloud.orgpolicy.v2.Constraint.ConstraintDefault constraint_default = 4;`

**Returns**

**Type**

**Description**

`[Constraint.ConstraintDefault](/java/docs/reference/google-cloud-orgpolicy/2.53.0/com.google.cloud.orgpolicy.v2.Constraint.ConstraintDefault)`

The constraintDefault.

### getConstraintDefaultValue()

```
public abstract int getConstraintDefaultValue()
```

The evaluation behavior of this constraint in the absence of a policy.

`.google.cloud.orgpolicy.v2.Constraint.ConstraintDefault constraint_default = 4;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for constraintDefault.

### getConstraintTypeCase()

```
public abstract Constraint.ConstraintTypeCase getConstraintTypeCase()
```

**Returns**

**Type**

**Description**

`[Constraint.ConstraintTypeCase](/java/docs/reference/google-cloud-orgpolicy/2.53.0/com.google.cloud.orgpolicy.v2.Constraint.ConstraintTypeCase)`

### getDescription()

```
public abstract String getDescription()
```

Detailed description of what this constraint controls as well as how and where it is enforced.

Mutable.

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

Detailed description of what this constraint controls as well as how and where it is enforced.

Mutable.

`string description = 3;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for description.

### getDisplayName()

```
public abstract String getDisplayName()
```

The human readable name.

Mutable.

`string display_name = 2;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The displayName.

### getDisplayNameBytes()

```
public abstract ByteString getDisplayNameBytes()
```

The human readable name.

Mutable.

`string display_name = 2;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for displayName.

### getListConstraint()

```
public abstract Constraint.ListConstraint getListConstraint()
```

Defines this constraint as being a ListConstraint.

`.google.cloud.orgpolicy.v2.Constraint.ListConstraint list_constraint = 5;`

**Returns**

**Type**

**Description**

`[Constraint.ListConstraint](/java/docs/reference/google-cloud-orgpolicy/2.53.0/com.google.cloud.orgpolicy.v2.Constraint.ListConstraint)`

The listConstraint.

### getListConstraintOrBuilder()

```
public abstract Constraint.ListConstraintOrBuilder getListConstraintOrBuilder()
```

Defines this constraint as being a ListConstraint.

`.google.cloud.orgpolicy.v2.Constraint.ListConstraint list_constraint = 5;`

**Returns**

**Type**

**Description**

`[Constraint.ListConstraintOrBuilder](/java/docs/reference/google-cloud-orgpolicy/2.53.0/com.google.cloud.orgpolicy.v2.Constraint.ListConstraintOrBuilder)`

### getName()

```
public abstract String getName()
```

Immutable. The resource name of the constraint. Must be in one of the following forms:

-   `projects/{project_number}/constraints/{constraint_name}`
-   `folders/{folder_id}/constraints/{constraint_name}`
-   `organizations/{organization_id}/constraints/{constraint_name}`
    
    For example, "/projects/123/constraints/compute.disableSerialPortAccess".
    

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

Immutable. The resource name of the constraint. Must be in one of the following forms:

-   `projects/{project_number}/constraints/{constraint_name}`
-   `folders/{folder_id}/constraints/{constraint_name}`
-   `organizations/{organization_id}/constraints/{constraint_name}`
    
    For example, "/projects/123/constraints/compute.disableSerialPortAccess".
    

`string name = 1 [(.google.api.field_behavior) = IMMUTABLE];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for name.

### getSupportsDryRun()

```
public abstract boolean getSupportsDryRun()
```

Shows if dry run is supported for this constraint or not.

`bool supports_dry_run = 7;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The supportsDryRun.

### hasBooleanConstraint()

```
public abstract boolean hasBooleanConstraint()
```

Defines this constraint as being a BooleanConstraint.

`.google.cloud.orgpolicy.v2.Constraint.BooleanConstraint boolean_constraint = 6;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the booleanConstraint field is set.

### hasListConstraint()

```
public abstract boolean hasListConstraint()
```

Defines this constraint as being a ListConstraint.

`.google.cloud.orgpolicy.v2.Constraint.ListConstraint list_constraint = 5;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the listConstraint field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
