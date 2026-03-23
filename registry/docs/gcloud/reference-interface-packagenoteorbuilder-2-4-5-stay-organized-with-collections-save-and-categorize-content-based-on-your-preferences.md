-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface PackageNoteOrBuilder (2.4.5) Stay organized with collections Save and categorize content based on your preferences.

2.88.0 (latest) 2.86.0 2.84.0 2.83.0 2.82.0 2.81.0 2.79.0 2.77.0 2.76.0 2.75.0 2.74.0 2.73.0 2.71.0 2.69.0 2.68.0 2.65.0 2.64.0 2.63.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.5 2.3.1 2.2.3 2.1.3

```
public interface PackageNoteOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getArchitecture()

```
public abstract Architecture getArchitecture()
```

The CPU architecture for which packages in this distribution channel were built. Architecture will be blank for language packages.

`.grafeas.v1.Architecture architecture = 13;`

**Returns**

**Type**

**Description**

[Architecture](/java/docs/reference/grafeas/2.4.5/io.grafeas.v1.Architecture)

The architecture.

### getArchitectureValue()

```
public abstract int getArchitectureValue()
```

The CPU architecture for which packages in this distribution channel were built. Architecture will be blank for language packages.

`.grafeas.v1.Architecture architecture = 13;`

**Returns**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

The enum numeric value on the wire for architecture.

### getCpeUri()

```
public abstract String getCpeUri()
```

The cpe\_uri in [CPE format](https://cpe.mitre.org/specification/) denoting the package manager version distributing a package. The cpe\_uri will be blank for language packages.

`string cpe_uri = 12;`

**Returns**

**Type**

**Description**

[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

The cpeUri.

### getCpeUriBytes()

```
public abstract ByteString getCpeUriBytes()
```

The cpe\_uri in [CPE format](https://cpe.mitre.org/specification/) denoting the package manager version distributing a package. The cpe\_uri will be blank for language packages.

`string cpe_uri = 12;`

**Returns**

**Type**

**Description**

[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)

The bytes for cpeUri.

### getDescription()

```
public abstract String getDescription()
```

The description of this package.

`string description = 17;`

**Returns**

**Type**

**Description**

[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

The description.

### getDescriptionBytes()

```
public abstract ByteString getDescriptionBytes()
```

The description of this package.

`string description = 17;`

**Returns**

**Type**

**Description**

[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)

The bytes for description.

### getDigest(int index)

```
public abstract Digest getDigest(int index)
```

Hash value, typically a file digest, that allows unique identification a specific package.

`repeated .grafeas.v1.Digest digest = 19;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

[Digest](/java/docs/reference/grafeas/2.4.5/io.grafeas.v1.Digest)

### getDigestCount()

```
public abstract int getDigestCount()
```

Hash value, typically a file digest, that allows unique identification a specific package.

`repeated .grafeas.v1.Digest digest = 19;`

**Returns**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

### getDigestList()

```
public abstract List<Digest> getDigestList()
```

Hash value, typically a file digest, that allows unique identification a specific package.

`repeated .grafeas.v1.Digest digest = 19;`

**Returns**

**Type**

**Description**

[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Digest](/java/docs/reference/grafeas/2.4.5/io.grafeas.v1.Digest)\>

### getDigestOrBuilder(int index)

```
public abstract DigestOrBuilder getDigestOrBuilder(int index)
```

Hash value, typically a file digest, that allows unique identification a specific package.

`repeated .grafeas.v1.Digest digest = 19;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

[DigestOrBuilder](/java/docs/reference/grafeas/2.4.5/io.grafeas.v1.DigestOrBuilder)

### getDigestOrBuilderList()

```
public abstract List<? extends DigestOrBuilder> getDigestOrBuilderList()
```

Hash value, typically a file digest, that allows unique identification a specific package.

`repeated .grafeas.v1.Digest digest = 19;`

**Returns**

**Type**

**Description**

[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends io.grafeas.v1.DigestOrBuilder\>

### getDistribution(int index)

```
public abstract Distribution getDistribution(int index)
```

Deprecated. The various channels by which a package is distributed.

`repeated .grafeas.v1.Distribution distribution = 10;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

[Distribution](/java/docs/reference/grafeas/2.4.5/io.grafeas.v1.Distribution)

### getDistributionCount()

```
public abstract int getDistributionCount()
```

Deprecated. The various channels by which a package is distributed.

`repeated .grafeas.v1.Distribution distribution = 10;`

**Returns**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

### getDistributionList()

```
public abstract List<Distribution> getDistributionList()
```

Deprecated. The various channels by which a package is distributed.

`repeated .grafeas.v1.Distribution distribution = 10;`

**Returns**

**Type**

**Description**

[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Distribution](/java/docs/reference/grafeas/2.4.5/io.grafeas.v1.Distribution)\>

### getDistributionOrBuilder(int index)

```
public abstract DistributionOrBuilder getDistributionOrBuilder(int index)
```

Deprecated. The various channels by which a package is distributed.

`repeated .grafeas.v1.Distribution distribution = 10;`

**Parameter**

**Name**

**Description**

index

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

[DistributionOrBuilder](/java/docs/reference/grafeas/2.4.5/io.grafeas.v1.DistributionOrBuilder)

### getDistributionOrBuilderList()

```
public abstract List<? extends DistributionOrBuilder> getDistributionOrBuilderList()
```

Deprecated. The various channels by which a package is distributed.

`repeated .grafeas.v1.Distribution distribution = 10;`

**Returns**

**Type**

**Description**

[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends io.grafeas.v1.DistributionOrBuilder\>

### getLicense()

```
public abstract License getLicense()
```

Licenses that have been declared by the authors of the package.

`.grafeas.v1.License license = 18;`

**Returns**

**Type**

**Description**

[License](/java/docs/reference/grafeas/2.4.5/io.grafeas.v1.License)

The license.

### getLicenseOrBuilder()

```
public abstract LicenseOrBuilder getLicenseOrBuilder()
```

Licenses that have been declared by the authors of the package.

`.grafeas.v1.License license = 18;`

**Returns**

**Type**

**Description**

[LicenseOrBuilder](/java/docs/reference/grafeas/2.4.5/io.grafeas.v1.LicenseOrBuilder)

### getMaintainer()

```
public abstract String getMaintainer()
```

A freeform text denoting the maintainer of this package.

`string maintainer = 15;`

**Returns**

**Type**

**Description**

[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

The maintainer.

### getMaintainerBytes()

```
public abstract ByteString getMaintainerBytes()
```

A freeform text denoting the maintainer of this package.

`string maintainer = 15;`

**Returns**

**Type**

**Description**

[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)

The bytes for maintainer.

### getName()

```
public abstract String getName()
```

The name of the package.

`string name = 1 [(.google.api.field_behavior) = REQUIRED, (.google.api.field_behavior) = IMMUTABLE];`

**Returns**

**Type**

**Description**

[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

The name.

### getNameBytes()

```
public abstract ByteString getNameBytes()
```

The name of the package.

`string name = 1 [(.google.api.field_behavior) = REQUIRED, (.google.api.field_behavior) = IMMUTABLE];`

**Returns**

**Type**

**Description**

[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)

The bytes for name.

### getPackageType()

```
public abstract String getPackageType()
```

The type of package; whether native or non native (e.g., ruby gems, node.js packages, etc.).

`string package_type = 11;`

**Returns**

**Type**

**Description**

[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

The packageType.

### getPackageTypeBytes()

```
public abstract ByteString getPackageTypeBytes()
```

The type of package; whether native or non native (e.g., ruby gems, node.js packages, etc.).

`string package_type = 11;`

**Returns**

**Type**

**Description**

[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)

The bytes for packageType.

### getUrl()

```
public abstract String getUrl()
```

The homepage for this package.

`string url = 16;`

**Returns**

**Type**

**Description**

[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

The url.

### getUrlBytes()

```
public abstract ByteString getUrlBytes()
```

The homepage for this package.

`string url = 16;`

**Returns**

**Type**

**Description**

[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)

The bytes for url.

### getVersion()

```
public abstract Version getVersion()
```

The version of the package.

`.grafeas.v1.Version version = 14;`

**Returns**

**Type**

**Description**

[Version](/java/docs/reference/grafeas/2.4.5/io.grafeas.v1.Version)

The version.

### getVersionOrBuilder()

```
public abstract VersionOrBuilder getVersionOrBuilder()
```

The version of the package.

`.grafeas.v1.Version version = 14;`

**Returns**

**Type**

**Description**

[VersionOrBuilder](/java/docs/reference/grafeas/2.4.5/io.grafeas.v1.VersionOrBuilder)

### hasLicense()

```
public abstract boolean hasLicense()
```

Licenses that have been declared by the authors of the package.

`.grafeas.v1.License license = 18;`

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

Whether the license field is set.

### hasVersion()

```
public abstract boolean hasVersion()
```

The version of the package.

`.grafeas.v1.Version version = 14;`

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

Whether the version field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
