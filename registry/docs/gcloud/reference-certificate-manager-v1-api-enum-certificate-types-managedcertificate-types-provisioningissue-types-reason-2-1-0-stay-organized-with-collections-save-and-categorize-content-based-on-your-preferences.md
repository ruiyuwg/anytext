-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Certificate Manager v1 API - Enum Certificate.Types.ManagedCertificate.Types.ProvisioningIssue.Types.Reason (2.1.0) Stay organized with collections Save and categorize content based on your preferences.

Version 2.1.0keyboard\_arrow\_down

-   [2.9.0 (latest)](/dotnet/docs/reference/Google.Cloud.CertificateManager.V1/latest/Google.Cloud.CertificateManager.V1.Certificate.Types.ManagedCertificate.Types.ProvisioningIssue.Types.Reason)
-   [2.8.0](/dotnet/docs/reference/Google.Cloud.CertificateManager.V1/2.8.0/Google.Cloud.CertificateManager.V1.Certificate.Types.ManagedCertificate.Types.ProvisioningIssue.Types.Reason)
-   [2.7.0](/dotnet/docs/reference/Google.Cloud.CertificateManager.V1/2.7.0/Google.Cloud.CertificateManager.V1.Certificate.Types.ManagedCertificate.Types.ProvisioningIssue.Types.Reason)
-   [2.6.0](/dotnet/docs/reference/Google.Cloud.CertificateManager.V1/2.6.0/Google.Cloud.CertificateManager.V1.Certificate.Types.ManagedCertificate.Types.ProvisioningIssue.Types.Reason)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.CertificateManager.V1/2.5.0/Google.Cloud.CertificateManager.V1.Certificate.Types.ManagedCertificate.Types.ProvisioningIssue.Types.Reason)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.CertificateManager.V1/2.4.0/Google.Cloud.CertificateManager.V1.Certificate.Types.ManagedCertificate.Types.ProvisioningIssue.Types.Reason)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.CertificateManager.V1/2.3.0/Google.Cloud.CertificateManager.V1.Certificate.Types.ManagedCertificate.Types.ProvisioningIssue.Types.Reason)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.CertificateManager.V1/2.2.0/Google.Cloud.CertificateManager.V1.Certificate.Types.ManagedCertificate.Types.ProvisioningIssue.Types.Reason)
-   [2.1.0](/dotnet/docs/reference/Google.Cloud.CertificateManager.V1/2.1.0/Google.Cloud.CertificateManager.V1.Certificate.Types.ManagedCertificate.Types.ProvisioningIssue.Types.Reason)
-   [2.0.0](/dotnet/docs/reference/Google.Cloud.CertificateManager.V1/2.0.0/Google.Cloud.CertificateManager.V1.Certificate.Types.ManagedCertificate.Types.ProvisioningIssue.Types.Reason)
-   [1.0.0-beta02](/dotnet/docs/reference/Google.Cloud.CertificateManager.V1/1.0.0-beta02/Google.Cloud.CertificateManager.V1.Certificate.Types.ManagedCertificate.Types.ProvisioningIssue.Types.Reason)

```
public enum Reason
```

## Namespace

[Google.Cloud.CertificateManager.V1](/dotnet/docs/reference/Google.Cloud.CertificateManager.V1/2.1.0/Google.Cloud.CertificateManager.V1)

## Assembly

Google.Cloud.CertificateManager.V1.dll

## Fields

**Name**

**Description**

`AuthorizationIssue`

Certificate provisioning failed due to an issue with one or more of the domains on the certificate. For details of which domains failed, consult the `authorization_attempt_info` field.

`RateLimited`

Exceeded Certificate Authority quotas or internal rate limits of the system. Provisioning may take longer to complete.

`Unspecified`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
