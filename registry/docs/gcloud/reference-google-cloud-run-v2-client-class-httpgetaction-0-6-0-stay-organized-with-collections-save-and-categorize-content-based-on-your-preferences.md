-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Cloud Run V2 Client - Class HTTPGetAction (0.6.0) Stay organized with collections Save and categorize content based on your preferences.

1.12.1 (latest) 1.12.0 1.11.0 1.10.1 1.9.0 1.8.0 1.7.0 1.6.0 1.5.2 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0 0.9.3 0.8.0 0.7.2 0.6.0 0.5.2 0.4.0 0.3.4

Reference documentation and code samples for the Google Cloud Run V2 Client class HTTPGetAction.

HTTPGetAction describes an action based on HTTP Get requests.

Generated from protobuf message `google.cloud.run.v2.HTTPGetAction`

## Namespace

Google \\ Cloud \\ Run \\ V2

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ path`

`string`  

Path to access on the HTTP server. Defaults to '/'.

`↳ http_headers`

`array<[Google\Cloud\Run\V2\HTTPHeader](/php/docs/reference/cloud-run/0.6.0/V2.HTTPHeader)>`  

Custom headers to set in the request. HTTP allows repeated headers.

`↳ port`

`int`  

Port number to access on the container. Must be in the range 1 to 65535. If not specified, defaults to the exposed port of the container, which is the value of container.ports\[0\].containerPort.

### getPath

Path to access on the HTTP server. Defaults to '/'.

**Returns**

**Type**

**Description**

`string`

### setPath

Path to access on the HTTP server. Defaults to '/'.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getHttpHeaders

Custom headers to set in the request. HTTP allows repeated headers.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/RepeatedField)`

### setHttpHeaders

Custom headers to set in the request. HTTP allows repeated headers.

**Parameter**

**Name**

**Description**

`var`

`array<[Google\Cloud\Run\V2\HTTPHeader](/php/docs/reference/cloud-run/0.6.0/V2.HTTPHeader)>`  

**Returns**

**Type**

**Description**

`$this`

### getPort

Port number to access on the container. Must be in the range 1 to 65535.

If not specified, defaults to the exposed port of the container, which is the value of container.ports\[0\].containerPort.

**Returns**

**Type**

**Description**

`int`

### setPort

Port number to access on the container. Must be in the range 1 to 65535.

If not specified, defaults to the exposed port of the container, which is the value of container.ports\[0\].containerPort.

**Parameter**

**Name**

**Description**

`var`

`int`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
