You are viewing archived v1.22 Service Mesh documentation.

Available versions

[Cloud Service Mesh latest](/service-mesh/docs)  
[Cloud Service Mesh 1.26 archive](/service-mesh/v1.26/docs)  
[Cloud Service Mesh 1.24 archive](/service-mesh/v1.25/docs)  
[Cloud Service Mesh 1.24 archive](/service-mesh/v1.24/docs)  
[Cloud Service Mesh 1.23 archive](/service-mesh/v1.23/docs)  
[Cloud Service Mesh 1.22 archive](/service-mesh/v1.22/docs)  
[Cloud Service Mesh 1.21 archive](/service-mesh/v1.21/docs)  
[Cloud Service Mesh 1.20 archive](/service-mesh/v1.20/docs)  
[Anthos Service Mesh 1.19 archive](/service-mesh/v1.19/docs)  

-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Networking](https://docs.cloud.google.com/docs/networking)
-   [Cloud Service Mesh](https://docs.cloud.google.com/service-mesh/docs)
-   [v1.22](https://docs.cloud.google.com/service-mesh/v1.22/docs)

Send feedback Stay organized with collections Save and categorize content based on your preferences.

# Cloud Service Mesh security best practices

This document describes best practices to establish and govern a secure [Cloud Service Mesh](/service-mesh/v1.22/docs/overview) configuration running on Google Kubernetes Engine (GKE). The guidance in the document goes beyond the settings used to configure and install Cloud Service Mesh and describes how you can use Cloud Service Mesh with other Google Cloud products and features to protect against the security threats that applications in a mesh may face.

The intended audience for this document includes administrators who manage policies in a Cloud Service Mesh and users who run services in a Cloud Service Mesh. The security measures described here are also useful for organizations that need to enhance the security of their service meshes to meet compliance requirements.

The document is organized as follows:

-   [Introduction](#introduction)
-   [Attack vectors and security risks](#attack-vectors-and-security-risks)
    -   [Attack vectors](#attack-vectors)
    -   [Security risks](#security-risks)
-   [Measures to protect a service mesh](#measures-to-protect-a-service-mesh)
    -   [Security architecture](#security-architecture)
    -   [Cluster security](#cluster-security)
        -   [Enable strict mutual TLS](#enable-strict-mutual-tls)
        -   [Enable access controls](#enable-access-controls)
            -   [Enforce Cloud Service Mesh authentication policies](#enforce-anthos-service-mesh-authentication-policies)
            -   [JSON Web Token (JWT)](#jwt)
            -   [Cloud Service Mesh user authentication](#anthos-service-mesh-user-authentication)
            -   [Enforce authorization policies](#enforce-anthos-service-mesh-authorization-policies)
            -   [Enforce token exchange for accessing mesh services](#enforce-token-exchange-for-accessing-mesh-services)
        -   [Securely handle Cloud Service Mesh policy exceptions](#securely-handle-anthos-service-mesh-policy-exceptions)
            -   [Enforce Kubernetes Network Policies](#enforce-kubernetes-network-policies)
        -   [Secure control plane access](#secure-control-plane-access)
        -   [Enforce namespace boundaries](#enforce-namespace-boundaries)
            -   [Enforce Kubernetes RBAC policies](#enforce-kubernetes-rbac-policies)
    -   [Mesh edge security](#mesh-edge-security)
        -   [Cluster ingress access control](#cluster-ingress-access-control)
        -   [Regulate cluster egress traffic](#regulate-cluster-egress-traffic)
        -   [Use private cluster or VPC Service Control to lock down external accesses](#use-private-cluster-or-VPC-service-control)
        -   [Defend against external DDoS attacks](#defend-against-external-ddos-attacks)
    -   [Security for mesh administration and automation](#security-for-mesh-administration-and-automation)
        -   [Segment the roles used for mesh operations](#segment-the-roles-used-for-mesh-operations)
        -   [Automatically validate policy configurations](#automatically-validate-policy-configurations)
            -   [Use a GitOps approach with Config Sync to prevent configuration drift](#use-a-gitops-approach-with-config-sync-to-prevent-configuration-drift)
        -   [Enforce Audit Logging and monitoring](#enforce-audit-logging-and-monitoring)
        -   [Protect the certificate authority for in-cluster certificates](#protect-the-certificate-authority-for-in-cluster-certificates)
    -   [Workload security](#workload-security)
        -   [Restrict Pod privileges](#restrict-pod-privileges)
        -   [Secure container images](#secure-container-images)
        -   [Mitigate against mesh vulnerabilities](#mitigate-against-mesh-vulnerabilities)
        -   [Use Workload Identity Federation for GKE to securely access Google services](#use-workload-identity-to-securely-access-google-services)
        -   [Monitor security status through security dashboard and telemetry](#monitor-security-status-through-security-dashboard-and-telemetry)
    -   [Security for sensitive user data and credentials](#security-for-sensitive-user-data-and-credentials)

## Introduction

Cloud Service Mesh provides features and tools that help you observe, manage, and secure services in a unified way. It takes an application-centric approach and uses trusted application identities rather than a network IP-focused approach. You can deploy a service mesh transparently without the need to modify existing application code. Cloud Service Mesh provides declarative control over network behavior, which helps to decouple the work of teams that are responsible for delivering and releasing application features from the responsibilities of administrators responsible for security and networking.

Cloud Service Mesh is based on the open source [Istio service mesh](https://istio.io/latest/), which enables sophisticated configurations and topologies. Depending on the structure of your organization, one or more teams or roles may be responsible for installing and configuring a mesh. The default Cloud Service Mesh settings are chosen to protect applications, but in some cases, you may need custom configurations or to grant exceptions by excluding certain apps, ports, or IP addresses from participating in a mesh. Having controls in place to govern mesh configurations and security exceptions is important.

**Note:** This guide complements [Istio's security best practices documentation](https://istio.io/latest/docs/ops/best-practices/security/), which includes detailed configuration recommendations for mutual TLS (mTLS), authorization policies, gateways, and other security configurations. You should treat these recommendations as a foundation to be used together with the best practices discussed in this guide. This guide describes additional best practices for Cloud Service Mesh and how technologies in Google Cloud can secure all layers, components, and information flows in a mesh.

## Attack vectors and security risks

### Attack vectors

Cloud Service Mesh security follows the zero trust security model which assumes security threats originate from both inside and outside of an organization's security perimeter. Examples of security attack types that may threaten applications in a service mesh include:

-   Data exfiltration attacks. For example, attacks that eavesdrop on sensitive data or credentials from service-to-service traffic.
-   Man-in-the-middle attacks. For example, a malicious service that masquerades as a legitimate service to obtain or modify the communication between services.
-   Privilege escalation attacks. For example, attacks that use illicit access to elevated privileges to conduct operations in a network.
-   Denial of service (DoS) attacks.
-   Botnet attacks that try to compromise and manipulate services to launch attacks on other services.

The attacks can also be categorized based on the attack targets:

-   Mesh internal network attacks. Attacks aimed at tampering, eavesdropping, or spoofing the mesh internal service-to-service or service-to-control-plane communication.
-   Control plane attacks. Attacks aimed at causing the control plane to malfunction (such as a DoS attack), or exfiltrating sensitive data from the control plane.
-   Mesh edge attacks. Attacks aimed at tampering, eavesdropping, or spoofing the communication at the mesh ingress or egress.
-   Mesh operation attacks. Attacks aimed at the mesh operations. Attackers may try to obtain elevated privileges to conduct malicious operations in a mesh, such as modifying its security policies and workload images.

### Security risks

Besides security attacks, a mesh also faces other security risks. The following list describes a few possible security risks:

-   Incomplete security protection. A service mesh has not been configured with authentication and authorization policies to protect its security. For example, no authentication or authorization policies are defined for services in a mesh.
-   Security policy exceptions. To accommodate their specific use cases, users may create security policy exceptions for certain traffic (internal or external) to be excluded from Cloud Service Mesh security policies. To securely handle such cases, please refer to the section [Securely handle exceptions to policies](#securely-handle-anthos-service-mesh-policy-exceptions).
-   Neglect of image upgrades. Vulnerabilities may be discovered for the images used in a mesh. You need to keep the mesh component and workload images up-to-date with the latest vulnerability fixes.
-   Lack of maintenance (no expertise or resources). The mesh software and policy configurations need regular maintenance to take advantage of the latest security protection mechanisms.
-   Lack of visibility. Misconfiguration or insecure configurations of mesh policies and abnormal mesh traffic/operations are not brought to the attention of mesh administrators.
-   [Configuration drift](https://cloud.google.com/anthos-config-management/docs/how-to/prevent-config-drift). The configuration of policies in a mesh deviates from the source of truth.

## Measures to protect a service mesh

This section presents an operating manual to secure service meshes.

### Security architecture

The security of a service mesh depends on the security of the components at different layers of the mesh system and its applications. The high-level intention of the proposed Cloud Service Mesh security posture is to secure a service mesh through integrating multiple security mechanisms at different layers, which jointly achieve the overall system security under the zero-trust security model. The following diagram shows the proposed Cloud Service Mesh security posture.

![security posture of Cloud Service Mesh](/static/service-mesh/v1.22/docs/images/security-posture-of-anthos-service-mesh.svg)

Cloud Service Mesh provides security at multiple layers, including:

-   Mesh edge security
    -   Cloud Service Mesh ingress security provides access control for external traffic and secures external access to the APIs exposed by the services in the mesh.
    -   Cloud Service Mesh egress security regulates the outbound traffic from internal workloads.
    -   [Cloud Service Mesh User Auth](/service-mesh/v1.22/docs/unified-install/options/end-user-auth) integrates with Google infrastructure to authenticate external calls from web browsers to the services that run web applications.
    -   Cloud Service Mesh [gateway certificate management](/service-mesh/v1.22/docs/automate-tls) protects and rotates the private keys and X.509 certificates used by Cloud Service Mesh ingress and egress gateways using Certificate Authority Service.
    -   [Cloud Armor](https://cloud.google.com/armor) can defend against external distributed denial-of-service (DDoS) and Layer 7 attacks. It serves as a Web Application Firewall (WAF) to protect the mesh from network attacks. For example, injection and remote code execution attacks.
    -   [VPC and VPC Service Controls](https://cloud.google.com/vpc-service-controls) protect the mesh edge through the private network access controls.
-   Cluster security
    -   Cloud Service Mesh mutual TLS (mTLS) enforces workload-to-workload traffic encryption and authentication.
    -   Managed CA, such as Cloud Service Mesh certificate authority and Certificate Authority Service, securely provisions and manages certificates used by the workloads.
    -   Cloud Service Mesh authorization enforces access control for mesh services based on their identities and other attributes.
    -   [GKE Enterprise security dashboard](https://cloud.google.com/anthos/docs/concepts/security-monitoring) provides monitoring of the configurations of security policies and Kubernetes Network Policies for the workloads.
    -   Kubernetes Network Policy enforces Pod access control based on IP addresses, Pod labels, namespaces, and more.
    -   Control plane security defends against attacks on the control plane. This protection prevents attackers from modifying, exploiting, or leaking service and mesh configuration data.
-   Workload security
    -   Stay up-to-date with Cloud Service Mesh security releases to ensure the Cloud Service Mesh binaries running in your mesh are free of publicly known vulnerabilities.
    -   [Workload Identity Federation for GKE](https://cloud.google.com/kubernetes-engine/docs/concepts/workload-identity) enables workloads to obtain credentials to securely call Google services.
    -   [Cloud Key Management Service (Cloud KMS)](https://cloud.google.com/security-key-management) secures sensitive data or credentials through Hardware Security Modules (HSM). For example, workloads can use Cloud KMS to store credentials or other sensitive data. CA Service—used to issue certificates to mesh workloads—supports per-customer and HSM-backed signing keys managed by [Cloud KMS](https://cloud.google.com/kms/docs/hsm).
    -   Kubernetes CNI (Container Network Interface) prevents privilege escalation attacks by eliminating the need for a privileged Cloud Service Mesh init container.
-   Operator security
    -   Kubernetes role-based access control (RBAC) restricts access to Kubernetes resources and confines operator permissions to mitigate attacks originating from malicious operators or operator impersonation.
    -   [GKE Enterprise Policy Controller](https://cloud.google.com/anthos-config-management/docs/concepts/policy-controller) validates and audits policy configurations in the mesh to prevent misconfigurations.
    -   [Google Cloud Binary Authorization](https://cloud.google.com/binary-authorization) ensures that the workload images in the mesh are the ones authorized by the administrators.
    -   Google Cloud Audit Logging audits mesh operations.

The diagram below shows the communication and configuration flows with the integrated security solutions in Cloud Service Mesh.

![security diagram traffic flow](/static/service-mesh/v1.22/docs/images/security-diagram-traffic-flow.svg)

### Cluster security

#### Enable strict mutual TLS

A man-in-the-middle (MitM) attack tries to insert a malicious entity between two communicating parties in order to eavesdrop on or manipulate the communication. Cloud Service Mesh defends against MitM and data exfiltration attacks by enforcing [mTLS authentication and encryption](/service-mesh/v1.22/docs/security/security-overview#mutual_tls) for all communicating parties. Permissive mode uses mTLS when both sides support it, but allows connections without mTLS. By contrast, strict mTLS requires that traffic be encrypted and authenticated with mTLS and does not allow plain text traffic.

Cloud Service Mesh allows you to [configure the minimum TLS version](/service-mesh/v1.22/docs/security/configuring-mtls#configure_the_minimum_tls_version_for_your_workloads) for the TLS connections among your workloads to meet your security and compliance requirements.

For more information, see [Cloud Service Mesh by example: mTLS | Enforcing mesh-wide mTLS](/service-mesh/v1.22/docs/by-example/mtls#enforcing_mesh-wide_mtls).

#### Enable access controls

Cloud Service Mesh security policies (such as authentication and authorization policies) should be enforced on all traffic in and out of the mesh unless there are strong justifications to exclude a service or Pod from Cloud Service Mesh security policies. In some cases, users may have legitimate reasons to bypass Cloud Service Mesh security policies for some ports and IP ranges. For example, to establish native connections with services not managed by Cloud Service Mesh. To secure Cloud Service Mesh under such use cases, please refer to [Securely handle Cloud Service Mesh policy exceptions](#securely-handle-anthos-service-mesh-policy-exceptions).

Service access control is critical in preventing unauthorized access to services. mTLS enforcement encrypts and authenticates a request but a mesh still needs [Cloud Service Mesh authorization policies](/service-mesh/v1.22/docs/security/authorization-policy-overview) to enforce access control on services. For example, rejecting an unauthorized request coming from an authenticated client.

Cloud Service Mesh authorization policies provide a flexible way to configure access controls to defend your services against unauthorized access. Cloud Service Mesh authorization policies should be enforced based on the authenticated identities derived from the authentication results - mTLS or JSON Web Token (JWT) based authentications should be used together as part of Cloud Service Mesh authorization policies.

#### Enforce Cloud Service Mesh authentication policies

**JSON Web Token (JWT)**

In addition to mTLS authentication, mesh administrators can require a service to [authenticate and authorize requests based on JWT](https://istio.io/latest/docs/tasks/security/authentication/authn-policy/#end-user-authentication). Cloud Service Mesh does not act as a JWT provider but authenticates JWTs based on the configured JSON web key set (JWKS) endpoints. JWT authentication can be applied to ingress gateways for external traffic or to internal services for in-mesh traffic. JWT authentication can be combined with mTLS authentication when a JWT is used as a credential to represent the end caller and the requested service requires proof that it is being called on behalf of the end caller. Enforcing JWT authentication defends against attacks that access a service without valid credentials and on behalf of a real end user.

**Cloud Service Mesh user authentication**

[Cloud Service Mesh user authentication](/service-mesh/v1.22/docs/unified-install/options/end-user-auth) is an integrated solution for browser-based end-user authentication and access control to your workloads. It integrates a service mesh with existing Identity Providers (IdP) to implement a standard web-based OpenID Connect (OIDC) login and consent flow and uses Cloud Service Mesh authorization policies for access control.

**Enforce authorization policies**

Cloud Service Mesh authorization policies control:

-   Who or what is allowed to access a service.
-   Which resources can be accessed.
-   Which operations can be conducted on the allowed resources.

Authorization policies are a versatile way to configure access control based on the actual identities that services run as, application layer (Layer 7) properties of traffic (for example request headers), and network layer (Layer 3 and Layer 4) properties like IP ranges and ports.

Cloud Service Mesh authorization policies should be enforced based on authenticated identities derived from the authentication results to defend against unauthorized access to services or data.

By default, access to a service should be denied unless an authorization policy is explicitly defined to allow access to the service. See [Authorization Policy Best Practices](/service-mesh/v1.22/docs/security/authorization-policy-overview#best_practices) for examples of authorization policies that deny access requests.

Authorization policies should restrict trust as much as possible. For example, the access to a service can be defined based on individual URL paths exposed by a service such that only a service A can access the path `/admin` of a service B.

Authorization policies can be used together with [Kubernetes Network Policies](https://kubernetes.io/docs/concepts/services-networking/network-policies/), which only operate at the network layer (Layer 3 and Layer 4) and control the network access for IP addresses and ports on Kubernetes Pods and Kubernetes namespaces.

**Note:** Cloud Service Mesh does not handle non-TCP traffic (for example UDP), so it cannot be controlled by authorization policies. Mesh administrators can use Kubernetes Network Policies to define policies for UDP traffic. For example, if mesh services do not use UDP then mesh administrators can define a Kubernetes network policy to block UDP traffic.

**Enforce token exchange for accessing mesh services**

To defend against token replay attacks which steal tokens and re-use the stolen tokens to access mesh services, a token in a request from outside the mesh should be exchanged for a short-lived mesh-internal token at the mesh edge.

A request from outside the mesh to access a mesh service needs to include a token, such as JWT or cookie, in order to be authenticated and authorized by the mesh service. A token from outside the mesh may be long-lived. To defend against token replay attacks, a token from outside the mesh should be exchanged for a short-lived mesh-internal token with a limited scope at the ingress of the mesh. The mesh service authenticates a mesh-internal token and authorizes the access request based on the mesh-internal token.

Cloud Service Mesh supports [integration with Identity-Aware Proxy (IAP)](/service-mesh/v1.22/docs/unified-install/options/iap-integration), which generates a `RequestContextToken` (a short-lived mesh-internal token exchanged from an external token) used in Cloud Service Mesh for authorization. With token exchange, attackers can not use a token stolen in the mesh to access services. The limited scope and lifetime of the exchanged token greatly reduces the chance of a token replay attack.

**Note:** IAP token exchange is different from Cloud Service Mesh user authentication in that IAP exchanges external tokens for short-lived internal tokens to defend against token replay attacks, whereas Cloud Service Mesh user authentication web browser based external calls to web application services.

#### Securely handle Cloud Service Mesh policy exceptions

You may have special use cases for your service mesh. For example, you may need to expose a certain network port to plain text traffic. To accommodate specific usage scenarios, you may sometimes need to create exceptions to allow certain internal or external traffic to be excluded from Cloud Service Mesh security policies, which creates security concerns.

You may have legitimate reasons to bypass Cloud Service Mesh security policies for some ports and IP ranges. You can add [annotations](https://istio.io/latest/docs/reference/config/annotations/) (such as, `excludeInboundPorts`, `excludeOutboundPorts`, `excludeOutboundIPRanges`) to Pods to exclude traffic from being handled by the Envoy sidecar. Besides annotations to exclude traffic, you may bypass the mesh altogether by deploying an application with [sidecar injection disabled](https://istio.io/latest/docs/setup/additional-setup/sidecar-injection/#controlling-the-injection-policy). For example, by adding a label `sidecar.istio.io/inject="false"` to the application Pod.

Bypassing Cloud Service Mesh security policies has a negative impact on overall system security. For example, if Cloud Service Mesh mTLS and authorization policies are bypassed for a network port by means of annotations, there will be no access control for the traffic on the port and eavesdropping or traffic modification may be possible. Furthermore, bypassing Cloud Service Mesh policies also affects non-security policies, such as network policies.

When Cloud Service Mesh security policy is bypassed for a port or IP (either intentionally or unintentionally), there should be other security measures in place to secure the mesh and monitor security exceptions, potential security loopholes, and overall security enforcement status. To secure your mesh in such scenarios you can:

-   Make sure traffic bypassing the sidecars is natively encrypted and authenticated to prevent MitM attacks.
-   [Enforce Kubernetes Network Policies](#enforce-kubernetes-network-policies) to limit the connectivity of ports with policy exceptions (for example, limit a port with policy exceptions to only allow traffic from another service in the same namespace) or to only allow traffic to go through the ports with Cloud Service Mesh security policy enforced.
-   Enforce GKE Enterprise Policy Controller to [automatically validate Cloud Service Mesh policies](#automatically-validate-policy-configurations). For example, enforce that the Cloud Service Mesh sidecars are always injected to workloads.

**Enforce Kubernetes Network Policies**

Cloud Service Mesh builds upon the underlying platform (for example, Kubernetes). Thus, Cloud Service Mesh security is dependent upon the security of the underlying platform. For example, without control over who can update Kubernetes resources, a user may change the Kubernetes deployment of a service to bypass the sidecar of the service.

To form a strong security posture for a service mesh, the security mechanisms of the underlying platform should be enforced to work jointly with the Cloud Service Mesh security policies.

[Kubernetes Network Policies](https://kubernetes.io/docs/concepts/services-networking/network-policies/) operate at the network Layer (L3 and L4) for IP addresses and ports on Kubernetes Pods and namespaces. Kubernetes network Policies can be enforced in conjunction with Cloud Service Mesh policies to enhance the security of the mesh.

For example, the mesh administrator can configure Kubernetes Network Policies to only allow traffic to use ports with Cloud Service Mesh security policy enforced. If all traffic must be enforced with Cloud Service Mesh mTLS, the administrator may configure a Kubernetes network policy to only allow traffic on ports that are configured with Cloud Service Mesh mTLS policy. The mesh administrator may also configure Kubernetes Network Policies to limit connectivity of ports with policy exceptions. For example, limit the connectivity of such ports to be within a namespace.

**Note:** **Kubernetes network policy limitations.** While you can use a Kubernetes network policy to prevent unwanted connectivity and limit security loopholes from ports with security policies bypassed, it is not a replacement for Cloud Service Mesh security policies because it does not offer access controls based on application identity or other Layer 7 properties. Furthermore, it is only possible to use Pod and namespace selectors for Kubernetes network policy in a single cluster. Pod IP ranges can be used with multi-cluster mesh but the policies will be coarse-grained and maintaining them is error prone.

#### Secure control plane access

The Cloud Service Mesh control plane authenticates any clients that connect. Thus, only callers with valid credentials (Kubernetes JWT or X.509 certificates issued by allowed CAs) can access the Cloud Service Mesh control plane. TLS encrypts the connections between workloads and the Cloud Service Mesh control plane.

Besides the authentication mechanism, for in-cluster Cloud Service Mesh, Kubernetes network policies can be deployed to isolate the Cloud Service Mesh system namespace (by default istio-system) from unmanaged namespaces and clients outside of the mesh while allowing data planes to access the control plane. VPC firewall rules can prevent traffic outside of a cluster from reaching Istiod. With such network isolation measures, an attacker from outside of the mesh will be unable to access the control plane, even if the attacker has a valid credential. For [managed control planes](/service-mesh/v1.22/docs/overview#managed_anthos_service_mesh), Google handles the security for the control planes and such network isolation policies for control planes are not needed.

#### Enforce namespace boundaries

To prevent a user of one namespace from accessing/updating resources in an unauthorized namespace:

-   [Enforce access controls](#enable-access-controls).
-   [Enforce Kubernetes Network Policies](#enforce-kubernetes-network-policies). If services in a namespace do not have traffic outside of the namespace, the mesh administrator should deploy a Kubernetes network policy that only allows traffic inside the namespace: no ingress or egress from the namespace.
-   [Enforce Kubernetes RBAC policies](#enforce-kubernetes-rbac-policies).
    -   The roles of application administrators should be bound to a namespace.
    -   Only allow mesh administrators to have ClusterRole.

**Enforce Kubernetes RBAC policies**

The mesh administrators should enforce [Kubernetes RBAC policies](https://kubernetes.io/docs/reference/access-authn-authz/rbac/) to control who is allowed to access and update Kubernetes resources. Kubernetes access control can mitigate security risks in the mesh. For example, unauthorized users should not be allowed to change Kubernetes deployments and bypass the Cloud Service Mesh policy enforcements. The roles of a user should be bound to a namespace so the user is not allowed to access any more namespaces than they need access to. For detailed guides and examples of configuring RBAC, refer to [Configure role-based access control](https://cloud.google.com/kubernetes-engine/docs/how-to/role-based-access-control). After enabling Workload Identity Federation for GKE, you can also [allow a Kubernetes service account to act as an IAM service account](https://cloud.google.com/kubernetes-engine/docs/how-to/workload-identity#authenticating_to).

### Mesh edge security

Since most attacks may also originate from outside of a cluster, ensuring security at the edge of the mesh is critical.

#### Cluster ingress access control

Cloud Service Mesh receives incoming external traffic through the ingress gateway. Services exposed by the ingress gateway potentially face attacks from external sources. Security administrators should always ensure that the services exposed to external traffic via ingress gateways are sufficiently secure to defend against attacks.

Ingress should enforce authentication and authorization for services exposed to external callers.

-   Enforce cluster ingress security policies. When the cluster needs to receive external traffic, the mesh administrator should enforce ingress security policies, including Cloud Service Mesh [gateway TLS](https://istio.io/latest/docs/reference/config/networking/gateway/#ServerTLSSettings), authentication, and authorization policies, to authenticate external requests and verify that external requests are authorized to access services exposed by the ingress gateway. Enforcing ingress security policies defends against attacks from outside of the mesh that try to access a service without valid credentials or permissions.
-   Use [Cloud Armor](https://cloud.google.com/armor) to serve as a Web Application Firewall (WAF) to defend against web-based attacks (for example, injection attacks and remote execution attacks). For more information, see [From edge to mesh: Exposing service mesh applications through GKE Ingress](https://cloud.google.com/architecture/exposing-service-mesh-apps-through-gke-ingress).

#### Regulate cluster egress traffic

Cluster egress security is critical for mesh security because egress security policies can defend against data exfiltration attacks, enforce filtering of egress traffic, and enforce TLS origination for egress traffic. Security administrators should regulate and audit cluster egress traffic.

Besides using VPC firewall walls to restrict egress traffic, the mesh administrators should also enforce egress security policies for the cluster and configure its outbound traffic to go through egress gateways.

[Egress policies](https://www.google.com/url?q=/service-mesh/v1.22/docs/security/egress-gateway-gke-tutorial&sa=D&source=docs&ust=1646175949683457&usg=AOvVaw0MQXPc06wDnOLMXdN-mHxJ) can mitigate the following attacks:

-   Data exfiltration attacks.
-   Service Pods can be exploited by attackers if their CVEs are not patched. Compromised Pods can become a botnet controlled by attackers to send spam or launch DoS attacks.

Authorization policies applied to egress gateways can ensure that only authorized services are allowed to send traffic to particular hosts outside of the mesh. Meanwhile, for traffic leaving the mesh, instead of handling TLS origination at individual sidecars, TLS can be originated at egress gateways. This provides a uniform and more secure way to originate TLS traffic because the client certificates for mTLS can be isolated from the namespaces where applications run.

#### Use private cluster or VPC Service Control to lock down external accesses

As well as enforcing ingress and egress security policies, lock down external access using private cluster or [VPC Service Controls](https://cloud.google.com/vpc-service-controls) wherever possible. While security policies are controlled by the mesh security administrators, the private cluster configuration or VPC Service Controls can be enforced by organization security administrators.

[VPC Service Controls](https://cloud.google.com/vpc-service-controls) can be enforced to define a security perimeter for the services in order to:

-   Restrict services from accessing outside resources.
-   Restrict outsiders from accessing the services in a security perimeter.

VPC Service Controls help defend against data exfiltration attacks and prevent external attackers from accessing services inside a mesh.

#### Defend against external DDoS attacks

External DDoS attacks may overload ingress gateways and backend services, preventing legitimate requests from being handled. [Cloud Armor](https://cloud.google.com/armor) can be used to defend against DDoS attacks. Cloud Armor defends against not only network layer (L3 and L4) DDoS attacks but also application layer (L7) DDoS attacks.

### Security for mesh administration and automation

It is important to consider security for administrative operations and any automation that you build around your mesh, for example CI/CD. The following practices aim to ensure that the mesh can be safely operated without the risk of exposing services to additional attacks.

#### Segment the roles used for mesh operations

Following the same principle as role-based access control, users of a mesh should be classified according to their roles. Each role should only be granted the minimum set of privileges needed by the role.

For example, the set of users that make service deployments should not have privileges for updating authentication and authorization policies.

There are different categories of operators. For example, cluster operators and namespace operators. It is important to prevent privilege escalation from an operator, which may result in illicit access to unauthorized resources.

[Kubernetes RBAC policies](#enforce-kubernetes-rbac-policies) allow mesh administrators to limit resource access to authorized users only.

#### Automatically validate policy configurations

Operators may accidentally misconfigure Cloud Service Mesh policies, which can result in serious security incidents. To prevent misconfiguration and automatically validate Cloud Service Mesh policies, mesh administrators can use [Policy Controller](https://cloud.google.com/anthos-config-management/docs/concepts/policy-controller) to [enforce constraints](https://cloud.google.com/anthos-config-management/docs/how-to/using-asm-security-policy) on policy configurations.

To avoid placing too much trust in individuals with permissions to update Cloud Service Mesh security policies and to automate the validation of Cloud Service Mesh policies, the mesh administrators should implement constraints on Cloud Service Mesh policies using [Policy Controller](https://cloud.google.com/anthos-config-management/docs/concepts/policy-controller).

Policy Controller is based on the open source [Gatekeeper](https://github.com/open-policy-agent/gatekeeper) project and can either be run as a Kubernetes admission controller to deny invalid resources from being applied or in audit mode so that administrators can be alerted to violations. Policy Controller can automatically validate the deployment of resources in the mesh, such as validating that the annotations on a deployment do not bypass Cloud Service Mesh policies, validating that Cloud Service Mesh policies are as expected, and validating that a deployment does not include root capabilities (such as, `NET_ADMIN` and `NET_RAW`).

[Policy Controller can also audit](https://open-policy-agent.github.io/gatekeeper/website/docs/audit/) existing Cloud Service Mesh resources against constraints to detect policy misconfigurations.

The following are a few examples of GKE Enterprise Policy Controller enforcing security policies:

-   [Prevent Pods from running privileged containers](https://cloud.google.com/anthos-config-management/docs/how-to/using-constraints-to-enforce-pod-security).
-   [Only allow using images from specific repositories](https://cloud.google.com/anthos-config-management/docs/latest/reference/constraint-template-library#k8sallowedrepos) to prevent running unauthorized container images.
-   [Prohibit disabling TLS for all hosts and host subsets in Istio DestinationRules](https://cloud.google.com/anthos-config-management/docs/latest/reference/constraint-template-library#destinationruletlsenabled).
-   [Prohibit principals and namespaces in Istio AuthorizationPolicy rules from having a prefix from a specified list](https://cloud.google.com/anthos-config-management/docs/latest/reference/constraint-template-library#disallowedauthzprefix).
-   [Prohibit the creation of known resources that expose workloads to external IPs](https://cloud.google.com/anthos-config-management/docs/latest/reference/constraint-template-library#k8snoexternalservices).
-   [Require Ingress resources to be HTTPS only](https://cloud.google.com/anthos-config-management/docs/latest/reference/constraint-template-library#k8shttpsonly).
-   [Require a read-only root file system on the container](https://cloud.google.com/anthos-config-management/docs/how-to/using-constraints-to-enforce-pod-security).

The [constraint template library](https://cloud.google.com/anthos-config-management/docs/latest/reference/constraint-template-library) provided with Policy Controller contains a set of constraint templates that can be used with the out-of-the-box [Cloud Service Mesh security constraints bundle](https://cloud.google.com/anthos-config-management/docs/how-to/using-asm-security-policy) to enforce specific Cloud Service Mesh security best practices, for example, authentication, authorization, and traffic policies. The following are a few example constraints included in the bundle:

-   Enforce the mesh level [strict mTLS](https://istio.io/latest/docs/ops/best-practices/security/#mutual-tls) PeerAuthentication.
-   Enforce all PeerAuthentications cannot overwrite strict mTLS.
-   Enforce the mesh level [default deny](https://istio.io/latest/docs/ops/best-practices/security/#use-default-deny-patterns) AuthorizationPolicy.
-   Enforce the AuthorizationPolicy [safe patterns](https://istio.io/latest/docs/ops/best-practices/security/#safer-authorization-policy-patterns).
-   Enforce the Cloud Service Mesh sidecars are always injected to workloads.

To handle exceptions and break-glass situations, the mesh administrator may:

-   [Exclude a namespace](https://cloud.google.com/anthos-config-management/docs/how-to/policy-controller-exclude-namespaces) from Policy Controller's admission webhook enforcement, but any violations are still reported in [audit](https://cloud.google.com/anthos-config-management/docs/how-to/auditing-constraints).
-   [Set the Constraint spec.enforcementAction to dryrun](https://cloud.google.com/anthos-config-management/docs/how-to/creating-policy-controller-constraints#auditing). The admission webhook will not prevent changes, but any violations are still reported in [audit](https://cloud.google.com/anthos-config-management/docs/how-to/auditing-constraints).
-   Add exemption logic into the Constraint Template ([example](/anthos-config-management/docs/tutorials/policy-compliant-resources)).

#### Use a GitOps approach with Config Sync to prevent configuration drift

Configuration drift occurs when the configuration of policies in a mesh deviates from their source of truth. Config Sync can be used to [prevent configuration drift](https://cloud.google.com/anthos-config-management/docs/how-to/prevent-config-drift#enable).

#### Enforce Audit Logging and monitoring

The mesh administrators should monitor the following:

-   [Cloud Audit Logging](https://cloud.google.com/logging/docs/audit)
-   [Cloud Service Mesh Audit Logging](/service-mesh/v1.22/docs/audit-logging)
-   [Policy constraint Audit Logging](https://cloud.google.com/anthos-config-management/docs/how-to/auditing-constraints)
-   [Anthos Config Sync](https://cloud.google.com/anthos-config-management/docs/how-to/monitoring-config-sync)
-   [Access logs](https://istio.io/latest/docs/tasks/observability/logs/access-log/)
-   [Service-level metrics](/service-mesh/v1.22/docs/observability-overview)
-   [Accessing traces](/service-mesh/v1.22/docs/observability/accessing-traces)

These observability resources can be used to verify that the security configuration is working as expected and monitor for any exceptions to security policy enforcement. For example, access that did not go through sidecars, access that did not have valid credentials but reached a service.

While open source observability software (for example, [Prometheus](https://cloud.google.com/stackdriver/docs/managed-prometheus)) can be used with Cloud Service Mesh, we highly recommend using [Google Cloud Observability (formerly Stackdriver)](/anthos/clusters/docs/on-prem/1.10/concepts/logging-and-monitoring#logging_and_monitoring). The built-in observability solution for Google Cloud provides logging, metric collection, monitoring, and alerting, which is fully managed and easy to use.

#### Protect the certificate authority for in-cluster certificates

By default Cloud Service Mesh uses a Google managed certificate authority (CA) called Cloud Service Mesh certificate authority.

If you are using the unmanaged Istio certificate authority (CA), which is hosted as part of Istiod, the CA signing key is stored in a Kubernetes secret and is accessible to operators who have access to the secret resource in the `istio-system` namespace. This is a risk, since an operator may be able to use the CA key independently of Istiod's CA and potentially sign workload certificates independently. There is also a risk that a self-managed CA signing key may be accidentally leaked due to an operational error.

To protect the CA signing key, the mesh administrator can upgrade the mesh to use Cloud Service Mesh certificate authority or [Certificate Authority Service](/certificate-authority-service) (CA Service), which are secured and managed by Google. Compared with Cloud Service Mesh certificate authority, CA Service supports per-customer, signing keys through [Cloud KMS](https://cloud.google.com/security/products/security-key-management) backed by [Cloud HSM](/kms/docs/hsm). CA Service also supports regulated workloads, while Cloud Service Mesh certificate authority does not.

### Workload security

Workload security protects against attacks that compromise workload Pods and then use the compromised Pods to launch attacks against the cluster (for example, botnet attacks).

#### Restrict Pod privileges

A Kubernetes Pod may have privileges that impact other Pods on the node or the cluster. It is important to enforce security restrictions on workload Pods to prevent a compromised Pod from launching attacks against the cluster.

To enforce the least privilege principle for the workloads on a Pod:

-   The services deployed in a mesh should run with as few privileges as possible.
-   Kubernetes Pods running in privileged mode can manipulate network stacks and other kernel capabilities on the host. GKE Enterprise Policy Controller can be used to [prevent Pods from running privileged containers](https://cloud.google.com/anthos-config-management/docs/how-to/using-constraints-to-enforce-pod-security).
-   Cloud Service Mesh can be configured to use an init container to configure iptables traffic redirection to the sidecar. This requires the user making workload deployments to have privileges for deploying containers with NET\_ADMIN and NET\_RAW capabilities. To avoid the risk of running containers with elevated privileges, mesh administrators can instead [enable](/service-mesh/v1.22/docs/unified-install/options/enable-optional-features#istio_container_network_interface) the [Istio CNI plugin](https://istio.io/latest/docs/setup/additional-setup/cni) for configuring traffic redirection to sidecars.

#### Secure container images

Attackers may launch attacks by exploiting vulnerable container images. Administrators should enforce [Binary Authorization](https://cloud.google.com/binary-authorization) to verify the integrity of container images and ensure only trusted container images are deployed in the mesh.

#### Mitigate against mesh vulnerabilities

-   Container Analysis. [Container Analysis](https://cloud.google.com/container-analysis/docs/container-scanning-overview) can scan and surface vulnerabilities on GKE workloads.
-   CVE (Common Vulnerabilities and Exposures) handling. After a vulnerability is discovered in a container image, the mesh administrators should fix the vulnerability as soon as possible. For [managed Cloud Service Mesh](/service-mesh/v1.22/docs/overview#managed_anthos_service_mesh) with [managed data plane](/service-mesh/docs/managed/provision-managed-anthos-service-mesh#managed-data-plane), Google automatically handles patching CVEs that impact the mesh images.

### Use Workload Identity Federation for GKE to securely access Google services

[Workload Identity Federation for GKE](https://cloud.google.com/kubernetes-engine/docs/concepts/workload-identity) is the recommended way for mesh workloads to securely access Google services. The alternative of storing a [service account key](https://cloud.google.com/iam/docs/creating-managing-service-account-keys) in a Kubernetes secret and using the service account key to access Google services is not as secure due to the risks of [credential leakage, privilege escalation, information disclosure, and non-repudiation](https://cloud.google.com/iam/docs/best-practices-for-managing-service-account-keys).

#### Monitor security status through security dashboard and telemetry

A service mesh may have security exceptions and potential loopholes. It is critical to surface and monitor the security status of a mesh, which includes the security policies enforced, security exceptions, and potential security loopholes in the mesh. [GKE Enterprise security dashboard](https://cloud.google.com/anthos/docs/concepts/security-monitoring) and telemetry can be used to surface and monitor the mesh security status.

[Telemetry](https://cloud.google.com/anthos/docs/concepts/overview#service_mesh_dashboard) monitors the health and performance of services in a mesh, which enables mesh administrators to observe the behaviors of services (such as SLOs, abnormal traffic, service outage, topology).

GKE Enterprise security dashboard analyzes and visualizes the security policies applied to a workload in a service mesh, including access control policies (Kubernetes Network Policies, Binary Authorization policies, and service access control policies), and authentication policies (mTLS).

### Security for sensitive user data and credentials

Sensitive user data or credentials can be vulnerable to attacks originating from Pods or malicious operations if they are stored in the cluster persistent storage, such using Kubernetes secrets or directly in Pods. They are also vulnerable to network attacks if they are transferred over the network for authentication to services.

-   If possible, store sensitive user data and credentials in protected storage, such as [Secret Manager](https://cloud.google.com/secret-manager) and [Cloud KMS](https://cloud.google.com/security-key-management).
-   Designate separate namespaces for Kubernetes Pods that access sensitive data and define Kubernetes policies to make them inaccessible from other namespaces. [Segment the roles](#segment-the-roles-used-for-mesh-operations) used for operations and [enforce namespace boundaries](#enforce-namespace-boundaries).
-   Enforce [token exchange](#enforce-token-exchange-for-accessing-mesh-services) to prevent the exfiltration of long-lived, highly-privileged tokens.

## What's next

-   [Review best practices for using Cloud Service Mesh egress gateways on GKE clusters](/service-mesh/v1.22/docs/security/egress-gateways-best-practices)
-   [Configure transport security](/service-mesh/v1.22/docs/security/configuring-mtls)
-   [Update your authorization policies](/service-mesh/v1.22/docs/security/authorization-policy-overview)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-16 UTC.
