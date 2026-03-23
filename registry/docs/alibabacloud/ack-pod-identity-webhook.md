The ack-pod-identity-webhook component automates [RAM Roles for Service Accounts (RRSA)](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-rrsa-to-authorize-pods-to-access-different-cloud-services) configuration in Container Service for Kubernetes (ACK) clusters. It uses the Kubernetes [MutatingAdmissionWebhook](https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/#mutatingadmissionwebhook) to inject OpenID Connect (OIDC) token mounts and environment variables into pods, enabling passwordless access to Alibaba Cloud services with pod-level permission isolation.

## How it works

When a pod is created in the cluster, the webhook intercepts the request and checks configuration at four levels: component, namespace, service account, and pod. If conditions are met, the webhook injects the following into the pod spec:

-   An OIDC token volume mount for authentication
    
-   Environment variables for Security Token Service (STS) access, including `ALIBABA_CLOUD_STS_ENDPOINT`, `ALIBABA_CLOUD_STS_REGION`, and `ALIBABA_CLOUD_VPC_ENDPOINT_ENABLED` (version 0.4.0 and later)
    

This eliminates the need for static AccessKey credentials. Each pod assumes only the RAM role associated with its service account, providing fine-grained permission isolation.

For setup instructions, see [Use RRSA to configure RAM permissions for a ServiceAccount and implement pod permission isolation](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-rrsa-to-authorize-pods-to-access-different-cloud-services).

## Configuration reference

The component supports configuration at four levels. Lower-level configurations take precedence over higher-level ones.

### Component configuration

**Parameter**

**Type**

**Description**

**Default**

**Version**

`AutoInjectSTSEnvVars`

boolean

Inject STS-related environment variables (`ALIBABA_CLOUD_STS_ENDPOINT`, `ALIBABA_CLOUD_STS_REGION`, `ALIBABA_CLOUD_VPC_ENDPOINT_ENABLED`) into all pods by default. Set to `false` to disable.

`true`

0.4.0+

### Namespace configuration

**Parameter**

**Type**

**Description**

`pod-identity.alibabacloud.com/injection`

Label

Set to `on` to enable automatic configuration injection for all pods in the namespace. Other values or absence of the label disables namespace-level injection.

```
apiVersion: v1
kind: Namespace
metadata:
  name: test
  labels:
    pod-identity.alibabacloud.com/injection: 'on'
```

### Service account configuration

**Parameter**

**Type**

**Description**

**Version**

`pod-identity.alibabacloud.com/role-name`

Annotation

The RAM role name to associate with this service account. Required for injection to occur.

\-

`pod-identity.alibabacloud.com/service-account-token-expiration`

Annotation

OIDC token validity period in seconds. Valid range: 600 to 43200. Default: 3600. Invalid values fall back to the default.

\-

`pod-identity.alibabacloud.com/inject-sts-endpoint`

Annotation

Set to `on` to inject the `ALIBABA_CLOUD_STS_ENDPOINT` environment variable into pods.

0.3.0+

```
apiVersion: v1
kind: ServiceAccount
metadata:
  name: test-sa
  namespace: test
  annotations:
    pod-identity.alibabacloud.com/role-name: test-role
    pod-identity.alibabacloud.com/service-account-token-expiration: '3600'
    pod-identity.alibabacloud.com/inject-sts-endpoint: 'on'
```

### Pod configuration

**Parameter**

**Type**

**Description**

**Version**

`pod-identity.alibabacloud.com/injection`

Label

Set to `on` to enable injection for this pod. If unset, the namespace configuration determines injection behavior.

0.2.0+

`pod-identity.alibabacloud.com/service-account-token-expiration`

Annotation

OIDC token validity period for this pod in seconds. Valid range: 600 to 43200. Default: 3600. Takes precedence over the service account annotation.

\-

`pod-identity.alibabacloud.com/only-containers`

Annotation

Restrict injection to specific containers. Separate container names with commas. If unset, all containers receive the injection.

\-

`pod-identity.alibabacloud.com/skip-containers`

Annotation

Exclude specific containers from injection. Separate container names with commas. If a container appears in both `only-containers` and `skip-containers`, the `only-containers` setting for that container is ignored.

\-

```
apiVersion: v1
kind: Pod
metadata:
  name: test-pod
  namespace: test
  labels:
    pod-identity.alibabacloud.com/injection: 'on'
  annotations:
    pod-identity.alibabacloud.com/service-account-token-expiration: '3600'
    pod-identity.alibabacloud.com/only-containers: 'controller,test'
```

### Configuration precedence

When a setting exists at multiple levels, the following precedence applies (highest to lowest):

1.  **Pod** - Pod-level annotations and labels override all other levels.
    
2.  **Service account** - Service account annotations apply to all pods using that service account, unless overridden at the pod level.
    
3.  **Namespace** - Namespace labels enable injection for all pods in the namespace.
    
4.  **Component** - Component-level settings control global webhook behavior.
    

**Note**

The `pod-identity.alibabacloud.com/service-account-token-expiration` annotation on a pod overrides the same annotation on the service account.

## Change log

### November 2025

**Version**

**Image**

**Date**

**Changes**

**Impact**

0.4.0

`registry-cn-hangzhou.ack.aliyuncs.com/acs/ack-pod-identity-webhook:0.4.0`

November 24, 2025

Added default injection of STS environment variables: `ALIBABA_CLOUD_STS_ENDPOINT`, `ALIBABA_CLOUD_STS_REGION`, and `ALIBABA_CLOUD_VPC_ENDPOINT_ENABLED`. Disable with `AutoInjectSTSEnvVars: false`. Upgraded Golang to 1.24.10.

An abnormal component upgrade may cause pod creation to fail. Perform the upgrade during off-peak hours.

### September 2025

**Version**

**Image**

**Date**

**Changes**

**Impact**

0.3.1

`registry-cn-hangzhou.ack.aliyuncs.com/acs/ack-pod-identity-webhook:0.3.1`

September 08, 2025

Upgraded Golang to 1.24.6 for stability improvements.

An abnormal component upgrade may cause pod creation to fail. Perform the upgrade during off-peak hours.

### June 2025

**Version**

**Image**

**Date**

**Changes**

**Impact**

0.3.0

`registry-cn-hangzhou.ack.aliyuncs.com/acs/ack-pod-identity-webhook:v0.3.0.0-g433f84b-aliyun`

June 06, 2025

Added `pod-identity.alibabacloud.com/inject-sts-endpoint` ServiceAccount annotation for injecting `ALIBABA_CLOUD_STS_ENDPOINT`.

An abnormal component upgrade may cause pod creation to fail. Perform the upgrade during off-peak hours.

### March 2025

**Version**

**Image**

**Date**

**Changes**

**Impact**

0.2.1

`registry-cn-hangzhou.ack.aliyuncs.com/acs/ack-pod-identity-webhook:v0.2.1.0-g52e519c-aliyun`

March 18, 2025

Upgraded Golang to 1.23.7 for stability improvements.

An abnormal component upgrade may cause pod creation to fail. Perform the upgrade during off-peak hours.

### December 2024

**Version**

**Image**

**Date**

**Changes**

**Impact**

0.2.0

`registry-cn-hangzhou.ack.aliyuncs.com/acs/ack-pod-identity-webhook:v0.2.0.11-g2f0c2e7-aliyun`

December 19, 2024

Added pod-level injection via `pod-identity.alibabacloud.com/injection: 'on'` label. Optimized Kubernetes 1.32 support.

An abnormal component upgrade may cause pod creation to fail. Perform the upgrade during off-peak hours.

### June 2023

**Version**

**Image**

**Date**

**Changes**

**Impact**

0.1.1

`registry.cn-hangzhou.aliyuncs.com/acs/ack-pod-identity-webhook:v0.1.1.0-gbddcb74-aliyun`

June 07, 2023

Improved compatibility with ACK serverless clusters.

An abnormal component upgrade may cause pod creation to fail. Perform the upgrade during off-peak hours.

### February 2023

**Version**

**Image**

**Date**

**Changes**

**Impact**

0.1.0

`registry.cn-hangzhou.aliyuncs.com/acs/ack-pod-identity-webhook:v0.1.0.9-g26b8fde-aliyun`

February 01, 2023

Initial release. Automatic OIDC token mounting and environment variable configuration for application pods.

Initial release.
