The Gateway API is a collection of resources in Kubernetes for modeling service network traffic. It provides an expressive, extensible, and role-oriented service network model. This topic describes the Gateway API component, how to use it, and its change history.

## Component overview

The Gateway API is a collection of resources in Kubernetes for modeling service network traffic. It is designed to provide an expressive, extensible, and role-oriented service network model. It offers the following advantages:

-   Role-oriented: Resource abstractions align with the organizational structure of teams that use Kubernetes.
    
-   Portable: Similar to Ingress, the Gateway API supports multiple implementations.
    
-   Expressive: Supports structured configurations for advanced traffic management, such as phased and weighted releases. This avoids the need to use annotations for these capabilities, which is common with Ingress.
    
-   Extensible: Supports attaching Custom Resources (CRs) to resources at various layers of the Gateway API. This allows for fine-grained feature configuration.
    

## Usage

You can choose a Gateway API implementation from the open-source community and then use the Gateway API to configure your service network. For more information about supported Gateway API implementations, see [Implementations](https://gateway-api.sigs.k8s.io/implementations/).

## Release notes

### **June 2025**

**Version number**

**Change Time**

**Changes**

**Impact**

v1.3.0

June 5, 2025

-   Supports percentage-based traffic mirroring.
    
-   For more changes, see the [community release notes](https://github.com/kubernetes-sigs/gateway-api/blob/main/CHANGELOG/1.3-CHANGELOG.md).
    

This upgrade does not affect your services.

### **December 2024**

**Version number**

**Modification Time**

**Changes**

**Impact**

v1.2.1

December 26, 2024

-   This component version supports only clusters that run Kubernetes 1.32 or later.
    
-   The `v1alpha2` versions of GRPCRoute and ReferenceGrant are deprecated.
    
-   Supports setting backend timeouts in HTTPRoute.
    
-   Supports setting the backend protocol using BackendProtocol.
    
-   For more changes, see the [community release notes](https://github.com/kubernetes-sigs/gateway-api/blob/main/CHANGELOG/1.2-CHANGELOG.md).
    

The deprecation of the `v1alpha2` API may cause components that depend on it to stop working. Before you upgrade, confirm that all components use the new API version.

### **May 2024**

**Version number**

**Modification Time**

**Changes**

**Impact**

v1.1.0

May 23, 2024

-   This component version supports only clusters that run Kubernetes 1.30 or later.
    
-   The `v1alpha2` API versions of Gateway, GatewayClass, and HTTPRoute are deprecated.
    
-   GRPCRoute and Service Mesh support are now generally available (GA).
    
-   For more changes, see the [community release notes](https://github.com/kubernetes-sigs/gateway-api/releases/tag/v1.1.0).
    

The deprecation of the `v1alpha2` API may cause components that depend on it to stop working. Before you upgrade, confirm that all components use the new API version.

### **February 2024**

**Version number**

**Modification Time**

**Changes**

**Impact**

v1.0.1

February 1, 2024

-   This component version supports only clusters that run Kubernetes 1.28 or later.
    
-   Gateway, GatewayClass, and HTTPRoute are now generally available (GA) and provide a `v1` API.
    
-   Supports configuration validation using Common Expression Language (CEL).
    
-   For more changes, see the [community release notes](https://github.com/kubernetes-sigs/gateway-api/releases/tag/v1.0.0).
    

This upgrade does not affect your services.

### January 2023

**Version number**

**Modification Time**

**Changes**

**Impact**

v0.6.0

January 11, 2023

The component is published.

This upgrade does not affect your services.
