-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Security Command Center V2 Client - Class Object (1.31.0) Stay organized with collections Save and categorize content based on your preferences.

2.5.0 (latest) 2.4.2 2.3.0 2.2.1 2.1.1 2.0.4 1.32.0 1.31.0 1.30.0 1.29.0 1.28.2 1.21.0 1.20.2 1.19.1 1.18.0 1.17.0 1.16.0 1.15.1 1.14.2 1.13.1

Reference documentation and code samples for the Google Cloud Security Command Center V2 Client class Object.

Kubernetes object related to the finding, uniquely identified by GKNN.

Used if the object Kind is not one of Pod, Node, NodePool, Binding, or AccessReview.

Generated from protobuf message `google.cloud.securitycenter.v2.Kubernetes.Object`

## Namespace

Google \\ Cloud \\ SecurityCenter \\ V2 \\ Kubernetes

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ group`

`string`  

Kubernetes object group, such as "policy.k8s.io/v1".

`↳ kind`

`string`  

Kubernetes object kind, such as "Namespace".

`↳ ns`

`string`  

Kubernetes object namespace. Must be a valid DNS label. Named "ns" to avoid collision with C++ namespace keyword. For details see [https://kubernetes.io/docs/tasks/administer-cluster/namespaces/](https://kubernetes.io/docs/tasks/administer-cluster/namespaces/).

`↳ name`

`string`  

Kubernetes object name. For details see [https://kubernetes.io/docs/concepts/overview/working-with-objects/names/](https://kubernetes.io/docs/concepts/overview/working-with-objects/names/).

`↳ containers`

`array<[Google\Cloud\SecurityCenter\V2\Container](/php/docs/reference/cloud-security-center/1.31.0/V2.Container)>`  

Pod containers associated with this finding, if any.

### getGroup

Kubernetes object group, such as "policy.k8s.io/v1".

**Returns**

**Type**

**Description**

`string`

### setGroup

Kubernetes object group, such as "policy.k8s.io/v1".

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getKind

Kubernetes object kind, such as "Namespace".

**Returns**

**Type**

**Description**

`string`

### setKind

Kubernetes object kind, such as "Namespace".

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getNs

Kubernetes object namespace. Must be a valid DNS label. Named "ns" to avoid collision with C++ namespace keyword. For details see [https://kubernetes.io/docs/tasks/administer-cluster/namespaces/](https://kubernetes.io/docs/tasks/administer-cluster/namespaces/).

**Returns**

**Type**

**Description**

`string`

### setNs

Kubernetes object namespace. Must be a valid DNS label. Named "ns" to avoid collision with C++ namespace keyword. For details see [https://kubernetes.io/docs/tasks/administer-cluster/namespaces/](https://kubernetes.io/docs/tasks/administer-cluster/namespaces/).

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getName

Kubernetes object name. For details see [https://kubernetes.io/docs/concepts/overview/working-with-objects/names/](https://kubernetes.io/docs/concepts/overview/working-with-objects/names/).

**Returns**

**Type**

**Description**

`string`

### setName

Kubernetes object name. For details see [https://kubernetes.io/docs/concepts/overview/working-with-objects/names/](https://kubernetes.io/docs/concepts/overview/working-with-objects/names/).

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getContainers

Pod containers associated with this finding, if any.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/RepeatedField)`

### setContainers

Pod containers associated with this finding, if any.

**Parameter**

**Name**

**Description**

`var`

`array<[Google\Cloud\SecurityCenter\V2\Container](/php/docs/reference/cloud-security-center/1.31.0/V2.Container)>`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
