-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Compute Engine v1 API - Enum GRPCHealthCheck.Types.PortSpecification (3.7.0) Stay organized with collections Save and categorize content based on your preferences.

3.26.0 (latest) 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.0 2.0.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0

```
public enum GRPCHealthCheck.Types.PortSpecification
```

Reference documentation and code samples for the Compute Engine v1 API enum GRPCHealthCheck.Types.PortSpecification.

Specifies how a port is selected for health checking. Can be one of the following values: USE\_FIXED\_PORT: Specifies a port number explicitly using the port field in the health check. Supported by backend services for passthrough load balancers and backend services for proxy load balancers. Not supported by target pools. The health check supports all backends supported by the backend service provided the backend can be health checked. For example, GCE\_VM\_IP network endpoint groups, GCE\_VM\_IP\_PORT network endpoint groups, and instance group backends. USE\_NAMED\_PORT: Not supported. USE\_SERVING\_PORT: Provides an indirect method of specifying the health check port by referring to the backend service. Only supported by backend services for proxy load balancers. Not supported by target pools. Not supported by backend services for passthrough load balancers. Supports all backends that can be health checked; for example, GCE\_VM\_IP\_PORT network endpoint groups and instance group backends. For GCE\_VM\_IP\_PORT network endpoint group backends, the health check uses the port number specified for each endpoint in the network endpoint group. For instance group backends, the health check uses the port number determined by looking up the backend service's named port in the instance group's list of named ports.

## Namespace

[Google.Cloud.Compute.V1](/dotnet/docs/reference/Google.Cloud.Compute.V1/3.7.0/Google.Cloud.Compute.V1)

## Assembly

Google.Cloud.Compute.V1.dll

## Fields

**Name**

**Description**

`UndefinedPortSpecification`

A value indicating that the enum field is not set.

`UseFixedPort`

The port number in the health check's port is used for health checking. Applies to network endpoint group and instance group backends.

`UseNamedPort`

Not supported.

`UseServingPort`

For network endpoint group backends, the health check uses the port number specified on each endpoint in the network endpoint group. For instance group backends, the health check uses the port number specified for the backend service's named port defined in the instance group's named ports.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-17 UTC.
