-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Ai Platform V1 Client - Class IndexPrivateEndpoints (1.13.1) Stay organized with collections Save and categorize content based on your preferences.

1.54.0 (latest) 1.53.0 1.52.0 1.51.0 1.50.0 1.49.0 1.48.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.40.0 1.39.0 1.38.0 1.37.0 1.36.0 1.35.0 1.34.0 1.33.0 1.32.1 1.31.0 1.30.0 1.26.0 1.23.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.1 1.12.0 1.11.0 1.10.0 1.9.0 1.8.0 1.7.0 1.6.0 1.5.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0 0.39.0 0.38.0 0.37.1 0.32.0 0.31.0 0.30.0 0.29.0 0.28.0 0.27.0 0.26.2 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.13.0 0.12.0 0.11.1 0.10.0

Reference documentation and code samples for the Google Cloud Ai Platform V1 Client class IndexPrivateEndpoints.

IndexPrivateEndpoints proto is used to provide paths for users to send requests via private endpoints (e.g. private service access, private service connect).

To send request via private service access, use match\_grpc\_address. To send request via private service connect, use service\_attachment.

Generated from protobuf message `google.cloud.aiplatform.v1.IndexPrivateEndpoints`

## Namespace

Google \\ Cloud \\ AIPlatform \\ V1

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ match_grpc_address`

`string`  

Output only. The ip address used to send match gRPC requests.

`↳ service_attachment`

`string`  

Output only. The name of the service attachment resource. Populated if private service connect is enabled.

`↳ psc_automated_endpoints`

`array<[PscAutomatedEndpoints](/php/docs/reference/cloud-ai-platform/1.13.1/V1.PscAutomatedEndpoints)>`  

Output only. PscAutomatedEndpoints is populated if private service connect is enabled if PscAutomatedConfig is set.

### getMatchGrpcAddress

Output only. The ip address used to send match gRPC requests.

**Returns**

**Type**

**Description**

`string`

### setMatchGrpcAddress

Output only. The ip address used to send match gRPC requests.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getServiceAttachment

Output only. The name of the service attachment resource. Populated if private service connect is enabled.

**Returns**

**Type**

**Description**

`string`

### setServiceAttachment

Output only. The name of the service attachment resource. Populated if private service connect is enabled.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getPscAutomatedEndpoints

Output only. PscAutomatedEndpoints is populated if private service connect is enabled if PscAutomatedConfig is set.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/RepeatedField)`

### setPscAutomatedEndpoints

Output only. PscAutomatedEndpoints is populated if private service connect is enabled if PscAutomatedConfig is set.

**Parameter**

**Name**

**Description**

`var`

`array<[PscAutomatedEndpoints](/php/docs/reference/cloud-ai-platform/1.13.1/V1.PscAutomatedEndpoints)>`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-19 UTC.
