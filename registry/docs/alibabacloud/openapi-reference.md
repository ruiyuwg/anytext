Realtime Compute for Apache Flink is a one-stop platform for development and operations management. You can call APIs using methods such as online debugging in OpenAPI, the Alibaba Cloud software development kit (SDK), and . To improve your Flink development efficiency, choose a method based on your requirements. This topic describes the basic information about the OpenAPI for Realtime Compute for Apache Flink and the relationships between Flink entities.

## **Basic information**

Alibaba Cloud provides the OpenAPI website to help developers learn and use cloud product OpenAPI quickly and efficiently. The website integrates features such as intelligent OpenAPI search, documentation, online debugging, SDKs, code samples, error diagnosis, and call statistics. In the OpenAPI Portal, you can call the OpenAPI of various Alibaba Cloud products and view the requests and responses. The OpenAPI Portal also automatically generates SDK call examples to help you quickly use Alibaba Cloud products. For more information, see [What is OpenAPI?](/help/en/openapi/what-is-openapi).

### **Version guide**

Alibaba Cloud OpenAPI uses version numbers to manage the APIs for major versions of cloud products. For example, the development console of Realtime Compute for Apache Flink supports the `2022-07-18` API version. The string `2022-07-18` represents the API version number, not a date. The APIs in this version are always the latest and are continuously updated.

**Type**

**Version number**

**Description**

Development console

[2022-07-18](https://next.api.alibabacloud.com/document/ververica/2022-07-18/overview)

Recommended version.

2020-05-01

Not recommended.

Sales console

[2021-10-28](https://next.api.alibabacloud.com/document/foasconsole/2021-10-28/overview)

Recommended version.

2019-06-01

Not recommended.

### Endpoint description

To achieve the lowest latency, select the service endpoint for the region where your workspace is located.

-   [Development console endpoints](https://api.alibabacloud.com/product/ververica)
    
-   [Sales console endpoints](https://api.alibabacloud.com/product/foasconsole)
    

For example, the VPC endpoint for the development console in Singapore is `ververica-vpc.ap-southeast-1.aliyuncs.com`.

### **Online debugging**

The OpenAPI Portal provides features such as online API calls, dynamic SDK code sample generation, and quick API retrieval. These features make it much easier to use APIs. Before you make a call, you must be familiar with the Flink versions and endpoints. Each API version has a different debugging entry. Select the entry that corresponds to your version.

**Type**

**Entry**

Development console

[Debugging entry](https://next.api.alibabacloud.com/api/ververica/2022-07-18/CreateFolder)

Sales console

[Debugging entry](https://next.api.alibabacloud.com/api/foasconsole/2021-10-28/QueryConvertInstancePrice?RegionId=cn-beijing)

## **Integration methods**

**Method**

**Support status**

[SDK](https://www.alibabacloud.com/help/en/flink/developer-reference/sdk-reference/)

Support

[Terraform](/help/en/flink/realtime-flink/developer-reference/terraform/)

Supported

Custom encapsulation

Support

## **Entity relationships**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0386403771/CAEQVBiBgID8n_OG5hkiIGNlODY4NjcxMzQ0YTRiYWVhMmYyYzAwM2FkNmNkMGRk4246580_20241018113119.926.svg)

## **References**

-   [Monitoring and alerts API reference](/help/en/flink/realtime-flink/developer-reference/alarm-monitoring-api-reference)
    
-   [SDK](https://www.alibabacloud.com/help/en/flink/developer-reference/sdk-reference/)
