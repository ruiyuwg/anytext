-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Security](https://docs.cloud.google.com/docs/security)
-   [Certificate Manager](https://docs.cloud.google.com/certificate-manager/docs)
-   [Guides](https://docs.cloud.google.com/certificate-manager/docs/overview)

Send feedback

# How Certificate Manager works Stay organized with collections Save and categorize content based on your preferences.

Certificate Manager uses a flexible mapping mechanism that provides you with granular control over which certificates you can assign and how to serve them for each domain name in your environment.

The following diagram shows the relationships between Certificate Manager components for a typical target proxy specified in a load balancer forwarding rule:

[![Relationship between Certificate Manager components and the target proxy of a load balancer.](/static/certificate-manager/images/cm-entities.svg)](/static/certificate-manager/images/cm-entities.svg)

Certificate Manager entities (click to enlarge).

To learn more about the components of Certificate Manager, see [Core components](/certificate-manager/docs/how-it-works).

## Certificate selection logic

At a high level, the load balancer selects a certificate as follows:

1.  A client initiates a handshake, which is a connection request to the service behind the load balancer.
    
    During the handshake, the client provides the load balancer a list of cryptographic algorithms that the client uses to complete the handshake, and, optionally, the hostname it is trying to reach. This hostname is also called Server Name Indication (SNI).
    
2.  On receiving the request, the load balancer selects a certificate to complete the secure handshake.
    
    -   **Exact hostname match**: if the client's provided hostname exactly matches a hostname entry in the provisioned certificate map, the load balancer selects the corresponding certificate.
        
    -   **Wildcard hostname match**: if the client's hostname doesn't match any one of the hostname entries in the provisioned certificate map, but does match a wildcard hostname in a certificate map entry, the load balancer selects the corresponding certificate.
        
        For example, a wildcard entry configured as `*.myorg.example.com` covers first-level subdomains in the `myorg.example.com` domain. The wildcard entry doesn't cover deeper level subdomains, such as `sub.subdomain.myorg.example.com`.
        
    -   **No exact or wildcard hostname match**: if the client's hostname doesn't match any one of the hostname entries in the provisioned certificate map, the load balancer selects the primary certificate map entry.
        
    -   **Handshake failure**: if the client didn't provide a hostname and the primary certificate map entry isn't configured, the handshake fails.
        

**Note:** A Google-managed certificate must complete provisioning before the load balancer can serve the certificate.

### Certificate priority

When selecting a certificate, the load balancer prioritizes them based on the following factors:

-   **Certificate type**. If the client supports the ECDSA certificates, the load balancer prioritizes them over RSA certificates. If the client doesn't support ECDSA certificates, the load balancer serves an RSA certificate instead.
-   **Certificate size**. Because smaller certificates take less bandwidth, the load balancer prioritizes smaller certificates over larger ones.

### Wildcard domain names

The following rules apply to wildcard domain names:

-   Only Google-managed certificates with DNS authorization and Google-managed certificates with CA Service support wildcard domain names. Google-managed certificates with load balancer authorization don't support wildcard domain names.
-   An exact match takes precedence over a wildcard when both are defined in the entry. For example, if you configured certificate map entries for `www.myorg.example.com` and `*.myorg.example.com`, a connection request against `www.myorg.example.com` always selects the entry for `www.myorg.example.com` even if an entry for `*.myorg.example.com`also exists.
-   Wildcard domain names only match the first level of subdomains. For example, a connection request for `host1.myorg.example.com` selects a certificate map entry for `*.myorg.example.com` but not one for `host1.hosts.myorg.example.com`.

## Certificate renewal

Google-managed certificates are renewed automatically. You must renew self-managed certificates manually. If necessary, you can configure Cloud Logging alerts for certificates before they expire. For more information, see [Configure log alerts](/certificate-manager/docs/logs-metrics#configure_log_alerts).

## What's next

-   [Domain authorization types for Google-managed certificates](/certificate-manager/docs/domain-authorization)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-16 UTC.
