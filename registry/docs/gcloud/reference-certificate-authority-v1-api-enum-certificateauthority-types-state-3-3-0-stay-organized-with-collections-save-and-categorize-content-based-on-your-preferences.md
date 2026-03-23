-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Certificate Authority v1 API - Enum CertificateAuthority.Types.State (3.3.0) Stay organized with collections Save and categorize content based on your preferences.

Version 3.3.0keyboard\_arrow\_down

-   [3.11.0 (latest)](/dotnet/docs/reference/Google.Cloud.Security.PrivateCA.V1/latest/Google.Cloud.Security.PrivateCA.V1.CertificateAuthority.Types.State)
-   [3.10.0](/dotnet/docs/reference/Google.Cloud.Security.PrivateCA.V1/3.10.0/Google.Cloud.Security.PrivateCA.V1.CertificateAuthority.Types.State)
-   [3.9.0](/dotnet/docs/reference/Google.Cloud.Security.PrivateCA.V1/3.9.0/Google.Cloud.Security.PrivateCA.V1.CertificateAuthority.Types.State)
-   [3.8.0](/dotnet/docs/reference/Google.Cloud.Security.PrivateCA.V1/3.8.0/Google.Cloud.Security.PrivateCA.V1.CertificateAuthority.Types.State)
-   [3.7.0](/dotnet/docs/reference/Google.Cloud.Security.PrivateCA.V1/3.7.0/Google.Cloud.Security.PrivateCA.V1.CertificateAuthority.Types.State)
-   [3.6.0](/dotnet/docs/reference/Google.Cloud.Security.PrivateCA.V1/3.6.0/Google.Cloud.Security.PrivateCA.V1.CertificateAuthority.Types.State)
-   [3.5.0](/dotnet/docs/reference/Google.Cloud.Security.PrivateCA.V1/3.5.0/Google.Cloud.Security.PrivateCA.V1.CertificateAuthority.Types.State)
-   [3.4.0](/dotnet/docs/reference/Google.Cloud.Security.PrivateCA.V1/3.4.0/Google.Cloud.Security.PrivateCA.V1.CertificateAuthority.Types.State)
-   [3.3.0](/dotnet/docs/reference/Google.Cloud.Security.PrivateCA.V1/3.3.0/Google.Cloud.Security.PrivateCA.V1.CertificateAuthority.Types.State)
-   [3.2.0](/dotnet/docs/reference/Google.Cloud.Security.PrivateCA.V1/3.2.0/Google.Cloud.Security.PrivateCA.V1.CertificateAuthority.Types.State)
-   [3.1.0](/dotnet/docs/reference/Google.Cloud.Security.PrivateCA.V1/3.1.0/Google.Cloud.Security.PrivateCA.V1.CertificateAuthority.Types.State)
-   [3.0.0](/dotnet/docs/reference/Google.Cloud.Security.PrivateCA.V1/3.0.0/Google.Cloud.Security.PrivateCA.V1.CertificateAuthority.Types.State)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.Security.PrivateCA.V1/2.3.0/Google.Cloud.Security.PrivateCA.V1.CertificateAuthority.Types.State)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.Security.PrivateCA.V1/2.2.0/Google.Cloud.Security.PrivateCA.V1.CertificateAuthority.Types.State)
-   [2.1.0](/dotnet/docs/reference/Google.Cloud.Security.PrivateCA.V1/2.1.0/Google.Cloud.Security.PrivateCA.V1.CertificateAuthority.Types.State)
-   [2.0.0](/dotnet/docs/reference/Google.Cloud.Security.PrivateCA.V1/2.0.0/Google.Cloud.Security.PrivateCA.V1.CertificateAuthority.Types.State)
-   [1.0.0](/dotnet/docs/reference/Google.Cloud.Security.PrivateCA.V1/1.0.0/Google.Cloud.Security.PrivateCA.V1.CertificateAuthority.Types.State)

```
public enum CertificateAuthority.Types.State
```

Reference documentation and code samples for the Certificate Authority v1 API enum CertificateAuthority.Types.State.

The state of a \[CertificateAuthority\]\[google.cloud.security.privateca.v1.CertificateAuthority\], indicating if it can be used.

## Namespace

[Google](https://cloud.google.com/dotnet/docs/reference/Google.Apis/latest/Google.html)[Cloud](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.Cloud.html)Google.Cloud.SecurityGoogle.Cloud.Security.PrivateCA[V1](/dotnet/docs/reference/Google.Cloud.Security.PrivateCA.V1/3.3.0/Google.Cloud.Security.PrivateCA.V1)

## Assembly

Google.Cloud.Security.PrivateCA.V1.dll

## Fields

**Name**

**Description**

`AwaitingUserActivation`

Certificates cannot be issued from this CA. CRLs will not be generated. The CA will not be part of the \[CaPool\]\[google.cloud.security.privateca.v1.CaPool\]'s trust anchor, and will not be used to issue certificates from the \[CaPool\]\[google.cloud.security.privateca.v1.CaPool\].

`Deleted`

Certificates cannot be issued from this CA. CRLs will not be generated. The CA may still be recovered by calling \[CertificateAuthorityService.UndeleteCertificateAuthority\]\[google.cloud.security.privateca.v1.CertificateAuthorityService.UndeleteCertificateAuthority\] before \[expire\_time\]\[google.cloud.security.privateca.v1.CertificateAuthority.expire\_time\]. The CA will not be part of the \[CaPool\]\[google.cloud.security.privateca.v1.CaPool\]'s trust anchor, and will not be used to issue certificates from the \[CaPool\]\[google.cloud.security.privateca.v1.CaPool\].

`Disabled`

Certificates cannot be issued from this CA. CRLs will still be generated. The CA will be part of the \[CaPool\]\[google.cloud.security.privateca.v1.CaPool\]'s trust anchor, but will not be used to issue certificates from the \[CaPool\]\[google.cloud.security.privateca.v1.CaPool\].

`Enabled`

Certificates can be issued from this CA. CRLs will be generated for this CA. The CA will be part of the \[CaPool\]\[google.cloud.security.privateca.v1.CaPool\]'s trust anchor, and will be used to issue certificates from the \[CaPool\]\[google.cloud.security.privateca.v1.CaPool\].

`Staged`

Certificates can be issued from this CA. CRLs will be generated for this CA. The CA will be part of the \[CaPool\]\[google.cloud.security.privateca.v1.CaPool\]'s trust anchor, but will not be used to issue certificates from the \[CaPool\]\[google.cloud.security.privateca.v1.CaPool\].

`Unspecified`

Not specified.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
