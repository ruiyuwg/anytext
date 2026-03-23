-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface OSPolicy.Resource.PackageResourceOrBuilder (2.22.0) Stay organized with collections Save and categorize content based on your preferences.

2.89.0 (latest) 2.87.0 2.85.0 2.84.0 2.82.0 2.80.0 2.78.0 2.77.0 2.76.0 2.75.0 2.74.0 2.72.0 2.70.0 2.69.0 2.66.0 2.65.0 2.64.0 2.62.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.51.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.6 2.4.3 2.3.2

```
public static interface OSPolicy.Resource.PackageResourceOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getApt()

```
public abstract OSPolicy.Resource.PackageResource.APT getApt()
```

A package managed by Apt.

`.google.cloud.osconfig.v1.OSPolicy.Resource.PackageResource.APT apt = 2;`

**Returns**

**Type**

**Description**

`[OSPolicy.Resource.PackageResource.APT](/java/docs/reference/google-cloud-os-config/2.22.0/com.google.cloud.osconfig.v1.OSPolicy.Resource.PackageResource.APT)`

The apt.

### getAptOrBuilder()

```
public abstract OSPolicy.Resource.PackageResource.APTOrBuilder getAptOrBuilder()
```

A package managed by Apt.

`.google.cloud.osconfig.v1.OSPolicy.Resource.PackageResource.APT apt = 2;`

**Returns**

**Type**

**Description**

`[OSPolicy.Resource.PackageResource.APTOrBuilder](/java/docs/reference/google-cloud-os-config/2.22.0/com.google.cloud.osconfig.v1.OSPolicy.Resource.PackageResource.APTOrBuilder)`

### getDeb()

```
public abstract OSPolicy.Resource.PackageResource.Deb getDeb()
```

A deb package file.

`.google.cloud.osconfig.v1.OSPolicy.Resource.PackageResource.Deb deb = 3;`

**Returns**

**Type**

**Description**

`[OSPolicy.Resource.PackageResource.Deb](/java/docs/reference/google-cloud-os-config/2.22.0/com.google.cloud.osconfig.v1.OSPolicy.Resource.PackageResource.Deb)`

The deb.

### getDebOrBuilder()

```
public abstract OSPolicy.Resource.PackageResource.DebOrBuilder getDebOrBuilder()
```

A deb package file.

`.google.cloud.osconfig.v1.OSPolicy.Resource.PackageResource.Deb deb = 3;`

**Returns**

**Type**

**Description**

`[OSPolicy.Resource.PackageResource.DebOrBuilder](/java/docs/reference/google-cloud-os-config/2.22.0/com.google.cloud.osconfig.v1.OSPolicy.Resource.PackageResource.DebOrBuilder)`

### getDesiredState()

```
public abstract OSPolicy.Resource.PackageResource.DesiredState getDesiredState()
```

Required. The desired state the agent should maintain for this package.

`.google.cloud.osconfig.v1.OSPolicy.Resource.PackageResource.DesiredState desired_state = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[OSPolicy.Resource.PackageResource.DesiredState](/java/docs/reference/google-cloud-os-config/2.22.0/com.google.cloud.osconfig.v1.OSPolicy.Resource.PackageResource.DesiredState)`

The desiredState.

### getDesiredStateValue()

```
public abstract int getDesiredStateValue()
```

Required. The desired state the agent should maintain for this package.

`.google.cloud.osconfig.v1.OSPolicy.Resource.PackageResource.DesiredState desired_state = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for desiredState.

### getGooget()

```
public abstract OSPolicy.Resource.PackageResource.GooGet getGooget()
```

A package managed by GooGet.

`.google.cloud.osconfig.v1.OSPolicy.Resource.PackageResource.GooGet googet = 7;`

**Returns**

**Type**

**Description**

`[OSPolicy.Resource.PackageResource.GooGet](/java/docs/reference/google-cloud-os-config/2.22.0/com.google.cloud.osconfig.v1.OSPolicy.Resource.PackageResource.GooGet)`

The googet.

### getGoogetOrBuilder()

```
public abstract OSPolicy.Resource.PackageResource.GooGetOrBuilder getGoogetOrBuilder()
```

A package managed by GooGet.

`.google.cloud.osconfig.v1.OSPolicy.Resource.PackageResource.GooGet googet = 7;`

**Returns**

**Type**

**Description**

`[OSPolicy.Resource.PackageResource.GooGetOrBuilder](/java/docs/reference/google-cloud-os-config/2.22.0/com.google.cloud.osconfig.v1.OSPolicy.Resource.PackageResource.GooGetOrBuilder)`

### getMsi()

```
public abstract OSPolicy.Resource.PackageResource.MSI getMsi()
```

An MSI package.

`.google.cloud.osconfig.v1.OSPolicy.Resource.PackageResource.MSI msi = 8;`

**Returns**

**Type**

**Description**

`[OSPolicy.Resource.PackageResource.MSI](/java/docs/reference/google-cloud-os-config/2.22.0/com.google.cloud.osconfig.v1.OSPolicy.Resource.PackageResource.MSI)`

The msi.

### getMsiOrBuilder()

```
public abstract OSPolicy.Resource.PackageResource.MSIOrBuilder getMsiOrBuilder()
```

An MSI package.

`.google.cloud.osconfig.v1.OSPolicy.Resource.PackageResource.MSI msi = 8;`

**Returns**

**Type**

**Description**

`[OSPolicy.Resource.PackageResource.MSIOrBuilder](/java/docs/reference/google-cloud-os-config/2.22.0/com.google.cloud.osconfig.v1.OSPolicy.Resource.PackageResource.MSIOrBuilder)`

### getRpm()

```
public abstract OSPolicy.Resource.PackageResource.RPM getRpm()
```

An rpm package file.

`.google.cloud.osconfig.v1.OSPolicy.Resource.PackageResource.RPM rpm = 6;`

**Returns**

**Type**

**Description**

`[OSPolicy.Resource.PackageResource.RPM](/java/docs/reference/google-cloud-os-config/2.22.0/com.google.cloud.osconfig.v1.OSPolicy.Resource.PackageResource.RPM)`

The rpm.

### getRpmOrBuilder()

```
public abstract OSPolicy.Resource.PackageResource.RPMOrBuilder getRpmOrBuilder()
```

An rpm package file.

`.google.cloud.osconfig.v1.OSPolicy.Resource.PackageResource.RPM rpm = 6;`

**Returns**

**Type**

**Description**

`[OSPolicy.Resource.PackageResource.RPMOrBuilder](/java/docs/reference/google-cloud-os-config/2.22.0/com.google.cloud.osconfig.v1.OSPolicy.Resource.PackageResource.RPMOrBuilder)`

### getSystemPackageCase()

```
public abstract OSPolicy.Resource.PackageResource.SystemPackageCase getSystemPackageCase()
```

**Returns**

**Type**

**Description**

`[OSPolicy.Resource.PackageResource.SystemPackageCase](/java/docs/reference/google-cloud-os-config/2.22.0/com.google.cloud.osconfig.v1.OSPolicy.Resource.PackageResource.SystemPackageCase)`

### getYum()

```
public abstract OSPolicy.Resource.PackageResource.YUM getYum()
```

A package managed by YUM.

`.google.cloud.osconfig.v1.OSPolicy.Resource.PackageResource.YUM yum = 4;`

**Returns**

**Type**

**Description**

`[OSPolicy.Resource.PackageResource.YUM](/java/docs/reference/google-cloud-os-config/2.22.0/com.google.cloud.osconfig.v1.OSPolicy.Resource.PackageResource.YUM)`

The yum.

### getYumOrBuilder()

```
public abstract OSPolicy.Resource.PackageResource.YUMOrBuilder getYumOrBuilder()
```

A package managed by YUM.

`.google.cloud.osconfig.v1.OSPolicy.Resource.PackageResource.YUM yum = 4;`

**Returns**

**Type**

**Description**

`[OSPolicy.Resource.PackageResource.YUMOrBuilder](/java/docs/reference/google-cloud-os-config/2.22.0/com.google.cloud.osconfig.v1.OSPolicy.Resource.PackageResource.YUMOrBuilder)`

### getZypper()

```
public abstract OSPolicy.Resource.PackageResource.Zypper getZypper()
```

A package managed by Zypper.

`.google.cloud.osconfig.v1.OSPolicy.Resource.PackageResource.Zypper zypper = 5;`

**Returns**

**Type**

**Description**

`[OSPolicy.Resource.PackageResource.Zypper](/java/docs/reference/google-cloud-os-config/2.22.0/com.google.cloud.osconfig.v1.OSPolicy.Resource.PackageResource.Zypper)`

The zypper.

### getZypperOrBuilder()

```
public abstract OSPolicy.Resource.PackageResource.ZypperOrBuilder getZypperOrBuilder()
```

A package managed by Zypper.

`.google.cloud.osconfig.v1.OSPolicy.Resource.PackageResource.Zypper zypper = 5;`

**Returns**

**Type**

**Description**

`[OSPolicy.Resource.PackageResource.ZypperOrBuilder](/java/docs/reference/google-cloud-os-config/2.22.0/com.google.cloud.osconfig.v1.OSPolicy.Resource.PackageResource.ZypperOrBuilder)`

### hasApt()

```
public abstract boolean hasApt()
```

A package managed by Apt.

`.google.cloud.osconfig.v1.OSPolicy.Resource.PackageResource.APT apt = 2;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the apt field is set.

### hasDeb()

```
public abstract boolean hasDeb()
```

A deb package file.

`.google.cloud.osconfig.v1.OSPolicy.Resource.PackageResource.Deb deb = 3;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the deb field is set.

### hasGooget()

```
public abstract boolean hasGooget()
```

A package managed by GooGet.

`.google.cloud.osconfig.v1.OSPolicy.Resource.PackageResource.GooGet googet = 7;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the googet field is set.

### hasMsi()

```
public abstract boolean hasMsi()
```

An MSI package.

`.google.cloud.osconfig.v1.OSPolicy.Resource.PackageResource.MSI msi = 8;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the msi field is set.

### hasRpm()

```
public abstract boolean hasRpm()
```

An rpm package file.

`.google.cloud.osconfig.v1.OSPolicy.Resource.PackageResource.RPM rpm = 6;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the rpm field is set.

### hasYum()

```
public abstract boolean hasYum()
```

A package managed by YUM.

`.google.cloud.osconfig.v1.OSPolicy.Resource.PackageResource.YUM yum = 4;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the yum field is set.

### hasZypper()

```
public abstract boolean hasZypper()
```

A package managed by Zypper.

`.google.cloud.osconfig.v1.OSPolicy.Resource.PackageResource.Zypper zypper = 5;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the zypper field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
