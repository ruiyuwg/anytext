-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Gke Connect Gateway V1 Client - Class GenerateCredentialsResponse (0.6.1) Stay organized with collections Save and categorize content based on your preferences.

1.1.3 (latest) 1.1.2 1.0.2 0.6.1 0.5.1 0.4.4 0.3.1 0.2.1 0.1.12

Reference documentation and code samples for the Google Cloud Gke Connect Gateway V1 Client class GenerateCredentialsResponse.

Connection information for a particular membership.

Generated from protobuf message `google.cloud.gkeconnect.gateway.v1.GenerateCredentialsResponse`

## Namespace

Google \\ Cloud \\ GkeConnect \\ Gateway \\ V1

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ kubeconfig`

`string`  

A full YAML kubeconfig in serialized format.

`↳ endpoint`

`string`  

The generated URI of the cluster as accessed through the Connect Gateway API.

### getKubeconfig

A full YAML kubeconfig in serialized format.

**Returns**

**Type**

**Description**

`string`

### setKubeconfig

A full YAML kubeconfig in serialized format.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getEndpoint

The generated URI of the cluster as accessed through the Connect Gateway API.

**Returns**

**Type**

**Description**

`string`

### setEndpoint

The generated URI of the cluster as accessed through the Connect Gateway API.

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
