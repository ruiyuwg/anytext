Connect clients directly to service instances within a VPC, bypassing gateway forwarding to reduce latency.

## How it works

EAS creates a free Elastic Network Interface (ENI) for each service instance and attaches it to the VPC and vSwitch that you specify, establishing a direct network path without gateway forwarding.

EAS provides a service discovery API that returns real-time `IP:PORT` pairs for all service instances. Clients query this API to implement load balancing and failover.

![VPC direct connection architecture](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7950472671/CAEQTxiBgMCtzKny0hkiIGM1Njc5ZWRlZGVhNTQwM2Y5MzZhOTEyYzkxZGY4Mjcy4606285_20240826114540.372.svg)

## Prerequisites

Complete these tasks before calling a service over VPC direct connection:

-   Deploy an EAS service with VPC direct connection enabled. For details, see [Network configuration](/help/en/pai/user-guide/configure-network-connectivity).
    
-   Ensure the vSwitch has sufficient available IP addresses. Each ENI requires one IP address. Available IPs must equal or exceed instance count.
    
-   Configure security group rules to allow traffic between clients and service instances.
    

**Important**

Security group rules control network access between clients (such as ECS instances) and service instances:

-   By default, instances in a basic security group can communicate over the internal network. When configuring VPC direct connection, select the security group that contains the ECS instances requiring access.
    
-   To use different security groups, configure security group rules to allow communication between instances. See [Allow access between instances in different security groups in a classic network](/help/en/ecs/user-guide/configure-interconnection-of-instances-in-the-classic-network).
    

## Endpoint format

VPC direct connection endpoints follow this format:

```
{Uid}.vpc.{RegionId}.pai-eas.aliyuncs.com
```

**Parameter**

**Description**

**Example**

`{Uid}`

Alibaba Cloud account ID

`123**********`

`{RegionId}`

Region where the service is deployed

`cn-shanghai`

**Example:** `123**********.vpc.cn-shanghai.pai-eas.aliyuncs.com`

## Call service using SDKs (recommended)

EAS SDKs handle service discovery, load balancing, and failover retries automatically. Use an SDK for reliable VPC direct connection calls.

#### **Python SDK**

1.  Install or upgrade the SDK:
    
    ```
       pip install -U eas-prediction --user
    ```
    
2.  Call the service using TensorFlow request format. For other formats, see [Python SDK guide](/help/en/pai/user-guide/sdk-for-python#concept-2081254).
    
    > `PredictClient` constructor requires the VPC direct connection endpoint and service name. Call `set_endpoint_type(ENDPOINT_TYPE_DIRECT)` to enable VPC direct connection, then call `init()` to initialize.
    
    ```
       #!/usr/bin/env python
       from eas_prediction import PredictClient
       from eas_prediction import StringRequest
       from eas_prediction import TFRequest
       from eas_prediction import ENDPOINT_TYPE_DIRECT
    
       # VPC direct connection endpoint: {Uid}.vpc.{RegionId}.pai-eas.aliyuncs.com
       # Replace with your account ID and region
       ENDPOINT = "123**********.vpc.cn-shanghai.pai-eas.aliyuncs.com"
    
       # Replace with your EAS service name
       SERVICE_NAME = "mnist_saved_model_example"
    
       # Replace with your service token from the service details page
       # Store tokens in environment variables or KMS, not in code
       TOKEN = "M2FhNjJlZDBmMzBmMzE4NjFiNzZhMmUxY2IxZjkyMDczNzAzYjFi****"
    
       if __name__ == '__main__':
           client = PredictClient(ENDPOINT, SERVICE_NAME)
           client.set_token(TOKEN)
           client.set_endpoint_type(ENDPOINT_TYPE_DIRECT)  # Enable VPC direct connection
           client.init()
    
           req = TFRequest('predict_images')
           req.add_feed('images', [1, 784], TFRequest.DT_FLOAT, [1] * 784)
           resp = client.predict(req)
           print(resp)
    ```
    

#### **Java SDK**

1.  Add Maven dependency to the `pom.xml` file. For the latest version, see [Maven repository](https://mvnrepository.com/artifact/com.aliyun.openservices.eas/eas-sdk). For details, see [Java SDK guide](/help/en/pai/user-guide/sdk-for-java).
    
    ```
       <dependency>
         <groupId>com.aliyun.openservices.eas</groupId>
         <artifactId>eas-sdk</artifactId>
         <version>2.0.20</version>
       </dependency>
    ```
    
2.  Call the service.
    
    ```
       import com.aliyun.openservices.eas.predict.http.PredictClient;
       import com.aliyun.openservices.eas.predict.http.HttpConfig;
    
       public class TestString {
           public static void main(String[] args) throws Exception {
               // Create and initialize the client once at startup
               // Do not create a new client for each request
               PredictClient client = new PredictClient(new HttpConfig());
    
               // Replace with your service token from the service details page
               client.setToken("YWFlMDYyZDNmNTc3M2I3MzMwYmY0MmYwM2Y2MTYxMTY4NzBkNzdj****");
    
               // Set VPC direct connection endpoint: {Uid}.vpc.{RegionId}.pai-eas.aliyuncs.com
               // Replace with your account ID and region
               client.setDirectEndpoint("123**********.vpc.cn-shanghai.pai-eas.aliyuncs.com");
    
               // Replace with your EAS service name
               client.setModelName("scorecard_pmml_example");
    
               // Define input string
               String request = "[{\"money_credit\": 3000000}, {\"money_credit\": 10000}]";
               System.out.println(request);
    
               // Send prediction request
               try {
                   String response = client.predict(request);
                   System.out.println(response);
               } catch (Exception e) {
                   e.printStackTrace();
               }
    
               // Shut down client when finished
               client.shutdown();
           }
       }
    ```
    

#### **Go SDK**

Go package manager downloads the SDK automatically during compilation. For details, see [Go SDK guide](/help/en/pai/user-guide/sdk-for-go).

```
package main

import (
    "fmt"
    "github.com/pai-eas/eas-golang-sdk/eas"
)

func main() {
    // VPC direct connection endpoint: {Uid}.vpc.{RegionId}.pai-eas.aliyuncs.com
    // Replace with your account ID, region, and service name
    client := eas.NewPredictClient("123**********.vpc.cn-shanghai.pai-eas.aliyuncs.com", "scorecard_pmml_example")

    // Replace with your service token from the service details page
    client.SetToken("YWFlMDYyZDNmNTc3M2I3MzMwYmY0MmYwM2Y2MTYxMTY4NzBkNzdj****")
    client.SetEndpointType(eas.EndpointTypeDirect)
    client.Init()

    req := "[{\"fea1\": 1, \"fea2\": 2}]"
    for i := 0; i < 100; i++ {
        resp, err := client.StringPredict(req)
        if err != nil {
            fmt.Printf("failed to predict: %v\n", err.Error())
        } else {
            fmt.Printf("%v\n", resp)
        }
    }
}
```

## Build a custom client

If SDKs do not meet requirements, implement HTTP invocation logic yourself.

**Warning**

Custom clients must handle service discovery, load balancing, and failover retries. Improper implementation directly affects service availability. Platform SLA does not cover service interruptions caused by custom client implementations. Use an SDK whenever possible.

### Service discovery API

EAS provides an HTTP API for service discovery within the configured VPC. The API returns IP addresses, ports, and weights of all backend instances for a service.

**Property**

**Details**

**URL**

`http://{Uid}.vpc.{RegionId}.pai-eas.aliyuncs.com/exported/apis/eas.alibaba-inc.k8s.io/v1/upstreams/{ServiceName}`

**Authentication**

None required. Accessible only from within the configured VPC.

**Polling interval**

Call every 5--10 seconds from a background thread.

**Important**

Service discovery API is a background service. Do not call it for every inference request, as frequent calls severely degrade performance.

**Example request:**

This example queries a service named `mnist_saved_model_example` deployed in China (Hangzhou). Replace `123**********` with your account ID.

```
curl http://123**********.vpc.cn-hangzhou.pai-eas.aliyuncs.com/exported/apis/eas.alibaba-inc.k8s.io/v1/upstreams/mnist_saved_model_example
```

**Example response:**

```
{
  "correlative": [
    "mnist_saved_model_example"
  ],
  "endpoints": {
    "items": [
      {
        "app": "mnist-saved-model-example",
        "ip": "172.16.XX.XX",
        "port": 50000,
        "weight": 100
      },
      {
        "app": "mnist-saved-model-example",
        "ip": "172.16.XX.XX",
        "port": 50000,
        "weight": 100
      }
    ]
  }
}
```

### Implementation requirements

Reliable custom clients must include three core components:

#### Cache instance list and refresh periodically

Start a background thread that polls the service discovery API every 5-10 seconds.

-   **On success** (HTTP 200 with non-empty instance list): Overwrite the local cache with the new list.
    
-   **On failure** (timeout, non-200 status, or empty list): Continue using the local cache. **Do not clear the cache.** This preserves service availability during transient failures.
    

#### Load balance requests across instances

When sending a request, select a target instance from the local cache. Use an algorithm such as weighted round-robin, or select instances based on business logic.

#### Retry failed requests on different instances

If connection to an instance fails (for example, due to instance crash), retry the request. If the local cache contains multiple instances, select a **different** instance for retry.

For a complete reference implementation, see [Python SDK source code](https://github.com/pai-eas/eas-python-sdk).

## Reference

-   [Invocation methods overview](/help/en/doc-detail/601706.html)
    
-   [Network configuration](/help/en/pai/user-guide/configure-network-connectivity)
    
-   [Python SDK guide](/help/en/pai/user-guide/sdk-for-python#concept-2081254)
    
-   [Java SDK guide](/help/en/pai/user-guide/sdk-for-java)
    
-   [Go SDK guide](/help/en/pai/user-guide/sdk-for-go)
