-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Gke Hub V1beta1 Client - Class ConnectAgentResource (0.7.1) Stay organized with collections Save and categorize content based on your preferences.

1.3.1 (latest) 1.3.0 1.2.2 1.1.0 1.0.6 0.10.0 0.9.5 0.8.2 0.7.1 0.6.3 0.5.6

**Beta**

This library is covered by the [Pre-GA Offerings Terms](/terms/service-terms#1) of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the [launch stage descriptions](/products#product-launch-stages).

Reference documentation and code samples for the Google Cloud Gke Hub V1beta1 Client class ConnectAgentResource.

ConnectAgentResource represents a Kubernetes resource manifest for Connect Agent deployment.

Generated from protobuf message `google.cloud.gkehub.v1beta1.ConnectAgentResource`

## Namespace

Google \\ Cloud \\ GkeHub \\ V1beta1

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ type`

`[Google\Cloud\GkeHub\V1beta1\TypeMeta](/php/docs/reference/cloud-gke-hub/0.7.1/V1beta1.TypeMeta)`  

Kubernetes type of the resource.

`↳ manifest`

`string`  

YAML manifest of the resource.

### getType

Kubernetes type of the resource.

**Returns**

**Type**

**Description**

`[Google\Cloud\GkeHub\V1beta1\TypeMeta](/php/docs/reference/cloud-gke-hub/0.7.1/V1beta1.TypeMeta)|null`

### hasType

### clearType

### setType

Kubernetes type of the resource.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\GkeHub\V1beta1\TypeMeta](/php/docs/reference/cloud-gke-hub/0.7.1/V1beta1.TypeMeta)`  

**Returns**

**Type**

**Description**

`$this`

### getManifest

YAML manifest of the resource.

**Returns**

**Type**

**Description**

`string`

### setManifest

YAML manifest of the resource.

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

Last updated 2026-03-18 UTC.
