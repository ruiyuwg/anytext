-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Grafeas V1 Client - Class PackageIssue (0.5.0) Stay organized with collections Save and categorize content based on your preferences.

1.7.0 (latest) 1.6.0 1.5.0 1.4.0 1.3.2 1.2.2 1.1.3 1.0.0 0.10.3 0.9.0 0.8.3 0.7.1 0.6.0 0.5.0 0.4.4

Reference documentation and code samples for the Grafeas V1 Client class PackageIssue.

A detail for a distro and package this vulnerability occurrence was found in and its associated fix (if one is available).

Generated from protobuf message `grafeas.v1.VulnerabilityOccurrence.PackageIssue`

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ affected_cpe_uri`

`string`  

Required. The [CPE URI](https://cpe.mitre.org/specification/) this vulnerability was found in.

`↳ affected_package`

`string`  

Required. The package this vulnerability was found in.

`↳ affected_version`

`[Grafeas\V1\Version](/php/docs/reference/grafeas/0.5.0/V1.Version)`  

Required. The version of the package that is installed on the resource affected by this vulnerability.

`↳ fixed_cpe_uri`

`string`  

The [CPE URI](https://cpe.mitre.org/specification/) this vulnerability was fixed in. It is possible for this to be different from the affected\_cpe\_uri.

`↳ fixed_package`

`string`  

The package this vulnerability was fixed in. It is possible for this to be different from the affected\_package.

`↳ fixed_version`

`[Grafeas\V1\Version](/php/docs/reference/grafeas/0.5.0/V1.Version)`  

Required. The version of the package this vulnerability was fixed in. Setting this to VersionKind.MAXIMUM means no fix is yet available.

`↳ fix_available`

`bool`  

Output only. Whether a fix is available for this package.

`↳ package_type`

`string`  

The type of package (e.g. OS, MAVEN, GO).

`↳ effective_severity`

`int`  

The distro or language system assigned severity for this vulnerability when that is available and note provider assigned severity when it is not available.

`↳ file_location`

`array<[Grafeas\V1\FileLocation](/php/docs/reference/grafeas/0.5.0/V1.FileLocation)>`  

The location at which this package was found.

### getAffectedCpeUri

Required. The [CPE URI](https://cpe.mitre.org/specification/) this vulnerability was found in.

**Returns**

**Type**

**Description**

`string`

### setAffectedCpeUri

Required. The [CPE URI](https://cpe.mitre.org/specification/) this vulnerability was found in.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getAffectedPackage

Required. The package this vulnerability was found in.

**Returns**

**Type**

**Description**

`string`

### setAffectedPackage

Required. The package this vulnerability was found in.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getAffectedVersion

Required. The version of the package that is installed on the resource affected by this vulnerability.

**Returns**

**Type**

**Description**

`[Grafeas\V1\Version](/php/docs/reference/grafeas/0.5.0/V1.Version)|null`

### hasAffectedVersion

### clearAffectedVersion

### setAffectedVersion

Required. The version of the package that is installed on the resource affected by this vulnerability.

**Parameter**

**Name**

**Description**

`var`

`[Grafeas\V1\Version](/php/docs/reference/grafeas/0.5.0/V1.Version)`  

**Returns**

**Type**

**Description**

`$this`

### getFixedCpeUri

The [CPE URI](https://cpe.mitre.org/specification/) this vulnerability was fixed in. It is possible for this to be different from the affected\_cpe\_uri.

**Returns**

**Type**

**Description**

`string`

### setFixedCpeUri

The [CPE URI](https://cpe.mitre.org/specification/) this vulnerability was fixed in. It is possible for this to be different from the affected\_cpe\_uri.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getFixedPackage

The package this vulnerability was fixed in. It is possible for this to be different from the affected\_package.

**Returns**

**Type**

**Description**

`string`

### setFixedPackage

The package this vulnerability was fixed in. It is possible for this to be different from the affected\_package.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getFixedVersion

Required. The version of the package this vulnerability was fixed in.

Setting this to VersionKind.MAXIMUM means no fix is yet available.

**Returns**

**Type**

**Description**

`[Grafeas\V1\Version](/php/docs/reference/grafeas/0.5.0/V1.Version)|null`

### hasFixedVersion

### clearFixedVersion

### setFixedVersion

Required. The version of the package this vulnerability was fixed in.

Setting this to VersionKind.MAXIMUM means no fix is yet available.

**Parameter**

**Name**

**Description**

`var`

`[Grafeas\V1\Version](/php/docs/reference/grafeas/0.5.0/V1.Version)`  

**Returns**

**Type**

**Description**

`$this`

### getFixAvailable

Output only. Whether a fix is available for this package.

**Returns**

**Type**

**Description**

`bool`

### setFixAvailable

Output only. Whether a fix is available for this package.

**Parameter**

**Name**

**Description**

`var`

`bool`  

**Returns**

**Type**

**Description**

`$this`

### getPackageType

The type of package (e.g. OS, MAVEN, GO).

**Returns**

**Type**

**Description**

`string`

### setPackageType

The type of package (e.g. OS, MAVEN, GO).

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getEffectiveSeverity

The distro or language system assigned severity for this vulnerability when that is available and note provider assigned severity when it is not available.

**Returns**

**Type**

**Description**

`int`

### setEffectiveSeverity

The distro or language system assigned severity for this vulnerability when that is available and note provider assigned severity when it is not available.

**Parameter**

**Name**

**Description**

`var`

`int`  

**Returns**

**Type**

**Description**

`$this`

### getFileLocation

The location at which this package was found.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/RepeatedField)`

### setFileLocation

The location at which this package was found.

**Parameter**

**Name**

**Description**

`var`

`array<[Grafeas\V1\FileLocation](/php/docs/reference/grafeas/0.5.0/V1.FileLocation)>`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
