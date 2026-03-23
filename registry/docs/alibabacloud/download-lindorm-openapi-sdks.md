This topic describes the basic information and precautions for calling Lindorm API operations.

For more information about Alibaba Cloud APIs, see [Use OpenAPI Explorer](/help/en/doc-detail/2391383.html).

## Basic Information

### **Versions**

**Version**

**Description**

2020-06-15

We recommend that you use this API version.

### Endpoints

Select an endpoint based on the region where your instance is deployed to reduce latency.

For example, the Lindorm endpoint for the China (Qingdao) region is `hitsdb-vpc.cn-qingdao.aliyuncs.com`. For more information about endpoints, see [Endpoints](/help/en/lindorm/developer-reference/api-hitsdb-2020-06-15-endpoint).

### User identities

**User identity**

**Supported**

[Alibaba Cloud account](/help/en/doc-detail/2391618.html)

Yes

[RAM user](/help/en/doc-detail/2391619.html) (recommended)

Yes

[RAM role](/help/en/doc-detail/2391620.html) (recommended)

Yes

### API styles

Lindorm API operations are called in the remote procedure call (RPC) style. For more information about the API styles, see [API styles](/help/en/doc-detail/2392109.html).

### Calling methods

**Calling method**

**Supported**

**Description**

[Alibaba Cloud SDKs](/help/en/openapi/alibaba-cloud-sdks) (recommended)

Yes

For more information about the programming languages that are supported by Lindorm SDKs and the methods to install dependencies, see [Lindorm SDKs](https://next.api.alibabacloud.com/api-tools/sdk/hitsdb?version=2020-06-15&language=java-tea&tab=primer-doc).

[Alibaba Cloud CLI](/help/en/openapi/alibaba-cloud-cli)

Yes

N/A

[ROS](/help/en/openapi/ros)

Yes

N/A

[Terraform](/help/en/openapi/terraform)

Yes

N/A

If none of the preceding methods meet your business requirements, you can encapsulate API requests to call API operations. This method is not recommended. For more information, see [Custom encapsulation](/help/en/doc-detail/2392103.html).

## Usage notes

If an error is returned after you call an API operation, you must check whether the request parameters and their values are valid based on the returned error code. For more information, see [Error codes](https://api.alibabacloud.com/document/hitsdb/2020-06-15/errorCode).

You can also use the [Alibaba Cloud OpenAPI Diagnostics platform](https://next.api.alibabacloud.com/troubleshoot) to perform self-service diagnostics based on the returned request ID or SDK error information.
