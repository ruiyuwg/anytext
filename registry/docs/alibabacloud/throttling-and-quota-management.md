This topic describes the throttling of API operations.

## **What is throttling**

Throttling is a method used by Alibaba Cloud to control the frequency of API calls. Quota refers to the maximum number of times that an Alibaba Cloud API operation can be called within a period of time.

## **Benefits**

### **Ensure the stability of cloud services**

The maximum concurrency of APIs allowed is different across cloud products. For the cloud products that only support a small number of concurrent requests, if a single user sends a large number of requests at the same time, other users may not be able to access the service or may experience slow responses.

### **Ensure** the **stability** of API services

If a user makes high-frequency calls to a single endpoint, the gateway may be overwhelmed, which causes slow response for users that access other cloud products through the same endpoint. In this case, the whole endpoint may even become inaccessible.

### **Protect user assets**

Improper or malicious API calls may create a large number of cloud resources in a short period, which may not meet user expectations. In this case, throttling can identify and reject such requests and generate alerts to protect user assets.

## **Check throttling information**

The **throttling information** of an API operation is provided in the documentation for that operation. You can also visit [Quota Center > API Rate Limits](https://quotas.console.alibabacloud.com/flow-control-products) in the console to query the quota information of each API operation of cloud products.

**Note**

Examples of throttling information:

Request Rate: 200/60(s). It indicates that up to 200 API operations can be called per minute.

Request Rate: 5/1(s). It indicates that up to 5 API operations can be called per second.

## **New quota**

Alibaba Cloud provides a default quota for APIs of cloud products. Users can upgrade quotas based on actual business requirements. For more information, visit [Quota Center > API Rate Limits](https://quotas.console.alibabacloud.com/flow-control-products) in the console.
