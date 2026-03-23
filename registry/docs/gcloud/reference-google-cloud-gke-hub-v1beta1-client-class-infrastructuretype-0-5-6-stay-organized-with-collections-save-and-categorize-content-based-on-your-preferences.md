-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Gke Hub V1beta1 Client - Class InfrastructureType (0.5.6) Stay organized with collections Save and categorize content based on your preferences.

1.3.1 (latest) 1.3.0 1.2.2 1.1.0 1.0.6 0.10.0 0.9.5 0.8.2 0.7.1 0.6.3 0.5.6

**Beta**

This library is covered by the [Pre-GA Offerings Terms](/terms/service-terms#1) of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the [launch stage descriptions](/products#product-launch-stages).

Reference documentation and code samples for the Google Cloud Gke Hub V1beta1 Client class InfrastructureType.

Specifies the infrastructure type of a Membership. Infrastructure type is used by Hub to control infrastructure-specific behavior, including pricing.

Each GKE distribution (on-GCP, on-Prem, on-X,...) will set this field automatically, but Attached Clusters customers should specify a type during registration.

Protobuf type `google.cloud.gkehub.v1beta1.Membership.InfrastructureType`

## Methods

### name

**Parameter**

**Name**

**Description**

`value`

`mixed`  

### value

**Parameter**

**Name**

**Description**

`name`

`mixed`  

## Constants

### INFRASTRUCTURE\_TYPE\_UNSPECIFIED

```
Value: 0
```

No type was specified. Some Hub functionality may require a type be specified, and will not support Memberships with this value.

Generated from protobuf enum `INFRASTRUCTURE_TYPE_UNSPECIFIED = 0;`

### ON\_PREM

```
Value: 1
```

Private infrastructure that is owned or operated by customer. This includes GKE distributions such as GKE-OnPrem and GKE-OnBareMetal.

Generated from protobuf enum `ON_PREM = 1;`

### MULTI\_CLOUD

```
Value: 2
```

Public cloud infrastructure.

Generated from protobuf enum `MULTI_CLOUD = 2;`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
