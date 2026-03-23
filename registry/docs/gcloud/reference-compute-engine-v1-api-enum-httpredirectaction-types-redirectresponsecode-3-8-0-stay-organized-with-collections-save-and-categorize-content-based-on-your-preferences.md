-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Compute Engine v1 API - Enum HttpRedirectAction.Types.RedirectResponseCode (3.8.0) Stay organized with collections Save and categorize content based on your preferences.

3.26.0 (latest) 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.0 2.0.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0

```
public enum HttpRedirectAction.Types.RedirectResponseCode
```

Reference documentation and code samples for the Compute Engine v1 API enum HttpRedirectAction.Types.RedirectResponseCode.

The HTTP Status code to use for this RedirectAction. Supported values are: - MOVED\_PERMANENTLY\_DEFAULT, which is the default value and corresponds to 301. - FOUND, which corresponds to 302. - SEE\_OTHER which corresponds to 303. - TEMPORARY\_REDIRECT, which corresponds to 307. In this case, the request method is retained. - PERMANENT\_REDIRECT, which corresponds to 308. In this case, the request method is retained.

## Namespace

[Google.Cloud.Compute.V1](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.8.0/Google.Cloud.Compute.V1)

## Assembly

Google.Cloud.Compute.V1.dll

## Fields

**Name**

**Description**

`Found`

Http Status Code 302 - Found.

`MovedPermanentlyDefault`

Http Status Code 301 - Moved Permanently.

`PermanentRedirect`

Http Status Code 308 - Permanent Redirect maintaining HTTP method.

`SeeOther`

Http Status Code 303 - See Other.

`TemporaryRedirect`

Http Status Code 307 - Temporary Redirect maintaining HTTP method.

`UndefinedRedirectResponseCode`

A value indicating that the enum field is not set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-17 UTC.
