-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [C++](https://docs.cloud.google.com/cpp/docs)
-   [Client libraries](https://docs.cloud.google.com/cpp/docs/reference)

Send feedback

# Class GatewayControlConnection (2.34.0) Stay organized with collections Save and categorize content based on your preferences.

3.4.0-rc 3.3.0 (latest) 3.2.0 2.48.0-rc 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0

The [`GatewayControlConnection`](/cpp/docs/reference/gkeconnect/2.34.0/classgoogle_1_1cloud_1_1gkeconnect__gateway__v1_1_1GatewayControlConnection) object for [`GatewayControlClient`](/cpp/docs/reference/gkeconnect/2.34.0/classgoogle_1_1cloud_1_1gkeconnect__gateway__v1_1_1GatewayControlClient).

This interface defines virtual methods for each of the user-facing overload sets in [`GatewayControlClient`](/cpp/docs/reference/gkeconnect/2.34.0/classgoogle_1_1cloud_1_1gkeconnect__gateway__v1_1_1GatewayControlClient). This allows users to inject custom behavior (e.g., with a Google Mock object) when writing tests that use objects of type [`GatewayControlClient`](/cpp/docs/reference/gkeconnect/2.34.0/classgoogle_1_1cloud_1_1gkeconnect__gateway__v1_1_1GatewayControlClient).

To create a concrete instance, see `MakeGatewayControlConnection()`.

For mocking, see [`gkeconnect_gateway_v1_mocks::MockGatewayControlConnection`](/cpp/docs/reference/gkeconnect/2.34.0/classgoogle_1_1cloud_1_1gkeconnect__gateway__v1__mocks_1_1MockGatewayControlConnection).

## Functions

### virtual options()

**Returns**

**Type**

**Description**

`Options`

### virtual GenerateCredentials(google::cloud::gkeconnect::gateway::v1::GenerateCredentialsRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::gkeconnect::gateway::v1::GenerateCredentialsRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::gkeconnect::gateway::v1::GenerateCredentialsResponse >`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-13 UTC.
