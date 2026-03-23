The ack-ram-authenticator component enables webhook-based request authentication for your ACK managed cluster using Alibaba Cloud RAM. This topic describes the features, usage, and change history of the ack-ram-authenticator component.

## **Component introduction**

The ack-ram-authenticator component is an authentication plugin for ACK managed clusters. It uses the native Kubernetes [Webhook Token Authentication](https://kubernetes.io/docs/reference/access-authn-authz/authentication/#webhook-token-authentication) method to authenticate requests to the cluster API Server using RAM. The component also provides mappings between RAM identities and RBAC permissions as Custom Resource Definitions (CRDs). This lets you configure RBAC authorization more flexibly.

When an Alibaba Cloud CloudSSO role is used to access an ACK managed cluster, the ack-ram-authenticator component can pass the session name of the requester's identity to the API Server. This enables more secure auditing of access requests to the cluster API Server from different users who assume the same role.

The webhook authentication flow for the cluster is as follows:

![1111..png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9349186861/p674522.png)

1.  When you use a tool such as kubectl to send an authentication request to the API Server, the `exec` command plugin in the KubeConfig file runs the ack-ram-tool client. The client generates a signed Security Token Service (STS) request URL.
    
2.  A webhook authentication request is sent to the API Server of the ACK managed cluster. The request is routed to the ack-ram-authenticator component based on the webhook authentication configuration.
    
3.  The component uses the received token URL to authenticate the request against the Alibaba Cloud RAM GetCallerIdentity API. If authentication is successful, the ack-ram-authenticator component searches for a mapping between the RAM identity returned by the API and the user-configured identity in the specified RAMIdentityMapping custom resource (CR).
    
4.  The API Server performs native RBAC authorization on the mapped user and group identities and returns the authorization result.
    

## **Instructions**

For more information about using ack-ram-authenticator for webhook authentication in an ACK managed cluster, see [Use ack-ram-authenticator for API server webhook authentication in an ACK managed cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-ack-ram-authenticator-to-help-the-api-server-in-ack-managed-clusters-complete-webhook-authentication).

## **Component configuration**

The ack-ram-authenticator component supports the following parameters.

**Parameter**

**Type**

**Description**

EnableNonBootstrapMapping

boolean

> Supported only in v0.4.0.0-g33f30dac-aliyun and later.

Specifies whether to enable the identity mapping relationship configured in [Step 5: Configure mappings between RAM identities and RBAC permissions](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-ack-ram-authenticator-to-help-the-api-server-in-ack-managed-clusters-complete-webhook-authentication#5d10ff40fbmp2).

-   `true`: Enables the identity mapping relationship configured in the cluster.
    
-   `false`: Disables the identity mapping relationship configured in the cluster. Only the identity mapping configuration required for node initialization is enabled.
    

## **Change history**

### **November 2025**

**Version number**

**Change description**

**Change date**

**Impact**

0.5.1

Upgraded the Golang version used by the component to 1.24.10 to improve component stability.

November 26, 2025

Installing or uninstalling this component restarts the cluster's control plane API Server, which affects persistent connections to the API Server. Install or uninstall the component during off-peak hours.

### **September 2025**

**Version number**

**Change description**

**Change date**

**Impact**

0.5.0

-   Changed the naming convention for component versions.
    
-   Upgraded the Golang version used by the component to 1.24.6 to improve component stability.
    

September 09, 2025

Installing or uninstalling this component restarts the cluster's control plane API Server, which affects persistent connections to the API Server. Install or uninstall the component during off-peak hours.

### **April 2025**

**Version number**

**Change description**

**Change date**

**Impact**

v0.4.1.0-g8023a0b5-aliyun

-   Added the `"identitySource": ["ack-ram-authenticator"]` identifier to the `extra` field of the user information returned by the component. This helps you quickly determine if the current user is authenticated by the ack-ram-authenticator component.
    
-   Upgraded the Golang version used by the component to 1.24.2 to improve component stability.
    

April 29, 2025

Installing or uninstalling this component restarts the cluster's control plane API Server, which affects persistent connections to the API Server. Install or uninstall the component during off-peak hours.

### **March 2025**

**Version number**

**Change description**

**Change date**

**Impact**

v0.4.0.0-g33f30dac-aliyun

Added the `EnableNonBootstrapMapping` component parameter. For more information about this parameter, see [Component configuration](#650016ccdbjg3).

March 31, 2025

Installing or uninstalling this component restarts the cluster's control plane API Server, which affects persistent connections to the API Server. Install or uninstall the component during off-peak hours.

### **September 2024**

**Version number**

**Change description**

**Change date**

**Impact**

v0.3.0.0-gea598ff0-aliyun

Upgraded the Golang version used by the component to 1.22.7 to improve component stability.

September 09, 2024

Installing or uninstalling this component restarts the cluster's control plane API Server, which affects persistent connections to the API Server. Install or uninstall the component during off-peak hours.

### **April 2024**

**Version number**

**Change description**

**Change date**

**Impact**

v0.2.1.3-g694325a9-aliyun

Transmits the component version information when calling the GetCallerIdentity API to facilitate troubleshooting.

April 12, 2024

Installing or uninstalling this component restarts the cluster's control plane API Server, which affects persistent connections to the API Server. Install or uninstall the component during off-peak hours.

v0.2.0.3-gcea89d25-aliyun

This version is in phased release.

Added support for the ARM architecture.

April 10, 2024

### **November 2023**

**Version number**

**Change description**

**Change date**

**Impact**

v0.2.0.0-g9cf9d682-aliyun

-   Added support for ACK serverless clusters.
    
-   Added support for the new token format.
    

November 15, 2023

Installing or uninstalling this component restarts the cluster's control plane API Server, which affects persistent connections to the API Server. Install or uninstall the component during off-peak hours.

### **May 2023**

**Version number**

**Change description**

**Change date**

**Impact**

v0.1.0.5-g6e50a122-aliyun

Added the ack-ram-authenticator component. This is the initial release.

May 18, 2023

Installing or uninstalling this component restarts the cluster's control plane API Server, which affects persistent connections to the API Server. Install or uninstall the component during off-peak hours.
