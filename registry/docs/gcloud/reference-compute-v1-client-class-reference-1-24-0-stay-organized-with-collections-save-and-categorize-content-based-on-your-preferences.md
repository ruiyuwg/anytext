-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Compute V1 Client - Class Reference (1.24.0) Stay organized with collections Save and categorize content based on your preferences.

2.8.0 (latest) 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.1 2.0.0 1.36.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.28.0 1.27.0 1.26.0 1.25.0 1.24.0 1.23.0 1.22.1 1.21.0 1.20.0 1.19.0 1.18.1 1.17.0 1.16.2 1.14.0 1.13.0 1.12.1 1.11.1 1.10.1 1.9.1 1.8.3 1.7.1 1.6.1 1.5.0

Reference documentation and code samples for the Compute V1 Client class Reference.

Represents a reference to a resource.

Generated from protobuf message `google.cloud.compute.v1.Reference`

## Namespace

Google \\ Cloud \\ Compute \\ V1

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ kind`

`string`  

\[Output Only\] Type of the resource. Always compute#reference for references.

`↳ reference_type`

`string`  

A description of the reference type with no implied semantics. Possible values include: 1. MEMBER\_OF

`↳ referrer`

`string`  

URL of the resource which refers to the target.

`↳ target`

`string`  

URL of the resource to which this reference points.

### getKind

\[Output Only\] Type of the resource. Always compute#reference for references.

**Returns**

**Type**

**Description**

`string`

### hasKind

### clearKind

### setKind

\[Output Only\] Type of the resource. Always compute#reference for references.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getReferenceType

A description of the reference type with no implied semantics. Possible values include: 1. MEMBER\_OF

**Returns**

**Type**

**Description**

`string`

### hasReferenceType

### clearReferenceType

### setReferenceType

A description of the reference type with no implied semantics. Possible values include: 1. MEMBER\_OF

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getReferrer

URL of the resource which refers to the target.

**Returns**

**Type**

**Description**

`string`

### hasReferrer

### clearReferrer

### setReferrer

URL of the resource which refers to the target.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getTarget

URL of the resource to which this reference points.

**Returns**

**Type**

**Description**

`string`

### hasTarget

### clearTarget

### setTarget

URL of the resource to which this reference points.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-19 UTC.
