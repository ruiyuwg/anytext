Alibaba Cloud SDK for Java V2.0 supports generic API calls. This topic describes how to make generic calls by using Alibaba Cloud SDK for Java V2.0.

## **Characteristic**

Lightweight: You only need to install the core library of Alibaba Cloud SDK for Java V2.0. You do not need to install SDKs of specific cloud services.

Easy to use: You only need to create common request parameters and use a common client to initiate requests. The responses are returned in common formats.

For more information, see [Generic calls and specialized calls](/help/en/sdk/product-overview/differences-between-generic-and-specific).

## **Usage notes**

Before you make a generic call, we recommend that you view the metadata of the API operation to obtain the API style, request parameters, and URL. For more information, see [API metadata](/help/en/sdk/product-overview/openapi-metadata).

## Install the core library of Alibaba Cloud SDK for Java V2.0

Add the following dependency to the pom.xml file to install the core library of SDK for Java V2.0. For more information about the latest version, see [Maven Repository](https://mvnrepository.com/artifact/com.aliyun/tea-openapi).

```
<dependency>
    <groupId>com.aliyun</groupId>
    <artifactId>tea-openapi</artifactId>
    <version>0.3.10</version>
</dependency>
```

## **Call an API operation**

### **Initialize a request client**

Create the `com.aliyun.teaopenapi.Client` object to initialize a request client, and use the client to call the API operation. When you initialize a client, you can also use the Credentials tool. For more information about the Credentials tool, see [Manage access credentials](/help/en/sdk/developer-reference/v2-manage-access-credentials).

**Note**

You do not need to manually destroy the client object. It is automatically recycled by the garbage collection mechanism.

```
        // 1. Initialize a request client
        com.aliyun.teaopenapi.models.Config config = new com.aliyun.teaopenapi.models.Config();
        config.setAccessKeyId(System.getenv("ALIBABA_CLOUD_ACCESS_KEY_ID"));
        config.setAccessKeySecret(System.getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET"));
        // Specify the endpoint of ASAPI.
        config.setEndpoint("ecs.cn-hangzhou.aliyuncs.com");
        // Optional. Configure a proxy by using the Config object when you initialize the client. 
        // Specify HTTPS as the protocol when you initialize the client.
        // config.setProtocol("HTTPS");
        // Specify the region ID.
        // config.setRegionId("<regionId>");
        // Configure a proxy when you initialize the client.
        // config.setHttpProxy("http://127.0.0.1:9898");
        // config.setHttpsProxy("http://user:password@127.0.0.1:8989");
        // config.setNoProxy("127.0.0.1,localhost");
        // Configure timeout periods when you initialize the SDK client.
        // The default timeout period for connection requests is 5,000 milliseconds. The value is calculated by using the formula: 5 × 1,000 = 5,000.
        // config.setConnectTimeout(5000);
        // The default timeout period for read requests is 10,000 milliseconds.
        // config.setReadTimeout(10000);
        com.aliyun.teaopenapi.Client client = new com.aliyun.teaopenapi.Client(config);

//        //  Use the Credentials tool
//        com.aliyun.credentials.models.Config credentialConfig = new com.aliyun.credentials.models.Config();
//        credentialConfig.setType("access_key");
//        credentialConfig.setAccessKeyId(System.getenv("ALIBABA_CLOUD_ACCESS_KEY_ID"));
//        credentialConfig.setAccessKeySecret(System.getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET"));
//        com.aliyun.credentials.Client credentialClient = new com.aliyun.credentials.Client();
//        com.aliyun.teaopenapi.models.Config config = new com.aliyun.teaopenapi.models.Config()
//                .setCredential(credentialClient)
//                .setEndpoint("ecs.cn-hangzhou.aliyuncs.com");
//        com.aliyun.teaopenapi.Client client = new com.aliyun.teaopenapi.Client(config);
```

### **Configure the information about the API operation**

Use the `com.aliyun.teaopenapi.models.Params` class to configure the basic information about the API operation that you want to call, such as the API style, API version, and request method. In the following example, the DescribeInstanceTypeFamilies operation is called.

```
        com.aliyun.teaopenapi.models.Params params = new com.aliyun.teaopenapi.models.Params()
                .setStyle("RPC")  // The API style, such as remote procedure call (RPC) or resource-oriented architecture (ROA). 
                .setVersion("2014-05-26") // The API version. 
                .setMethod("POST") // The request method. 
                .setAction("DescribeInstanceTypeFamilies")  // The name of the API operation. 
                .setPathname("/") // The URL of the operation. The default path of an RPC-style operation is /. You can obtain the URL of an ROA-style operation from the data.path parameter in the API metadata. 
                .setProtocol("HTTPS") // The request protocol, such as HTTPS or HTTP. We recommend that you use HTTPS. 
                .setAuthType("AK") // The authentication type. Use the default type. If the operation supports anonymous requests, you can specify the Anonymous parameter to initiate an anonymous request. 
                .setReqBodyType("json") // The type of request body. Valid values: byte, json, and formData. 
                .setBodyType("json"); // The response format. JSON is supported.
```

### **Configure request parameters**

Use `com.aliyun.teaopenapi.models.OpenApiRequest` to configure the request parameters. You can pass the request parameters in a query string, a body, or a stream. Select a method to pass request parameters based on the metadata of the API operation. For example, the RegionId request parameter of the `DescribeInstanceTypeFamilies` API operation is defined as `{"name":"RegionId","in":"query",...}}` in the [metadata](https://api.aliyun.com/meta/v1/products/Ecs/versions/2014-05-26/apis/DescribeInstanceTypeFamilies/api.json). `"in":"query"` indicates that the RegionId parameter is passed in a query string.

**How the parameter is passed**

**Scenario**

setQuery

If the metadata defines `"in":"query"`, pass the parameters in setQuery.

setBody

If the metadata defines `"in":"body''` or `"in": "formData"`, pass the parameters in setBody. If you pass request parameters in the request body, specify a value for the `reqBodyType` parameter based on the request body type.

setStream

If you need to upload files, you can pass file streams in setStream.

```
        // Scenario 1: Configure a query string.
        java.util.Map<String, Object> queries = new java.util.HashMap<>();
        queries.put("RegionId", "cn-hangzhou");
        com.aliyun.teaopenapi.models.OpenApiRequest request = new com.aliyun.teaopenapi.models.OpenApiRequest()
                .setQuery(com.aliyun.openapiutil.Client.query(queries));

//        // Method 2: Configure the body and set reqBodyType to json.
//        java.util.Map<String, Object> body = new java.util.HashMap<>();
//        body.put("param1", "value1");
//        body.put("param2", "value2");
//        com.aliyun.teaopenapi.models.OpenApiRequest request = new com.aliyun.teaopenapi.models.OpenApiRequest()
//                .setBody(com.aliyun.openapiutil.Client.query(body));

//        // Method 3: Configure the body and set reqBodyType to formData.
//        java.util.Map<String, Object> formData = new java.util.HashMap<>();
//        formData.put("param1", "value1");
//        formData.put("param2", "value2");
//        com.aliyun.teaopenapi.models.OpenApiRequest request = new com.aliyun.teaopenapi.models.OpenApiRequest()
//                .setBody(formData);

//        // Method 4: Configure the Stream parameter to pass file streams
//        com.aliyun.teaopenapi.models.OpenApiRequest request = new com.aliyun.teaopenapi.models.OpenApiRequest()
//                .setStream("<FILE_STREAM>");  // Replace <FILE_STREAM> with the actual file stream.
```

### **Initiate a request**

Use the `com.aliyun.teaopenapi.Client` object to call the callApi method to initiate a request. When you call an API operation, you can specify runtime parameters, such as timeout parameters and proxy parameters. For more information, see [Advanced settings](/help/en/sdk/developer-reference/java-v1-0-sdk-advanced-configuration/).

```
        // Configure runtime options.
        com.aliyun.teautil.models.RuntimeOptions runtime = new com.aliyun.teautil.models.RuntimeOptions();
// Disable SSL certificate authentication.
//        runtime.ignoreSSL = true;
// Enable the automatic retry mechanism.
//        runtime.autoretry = true;
// Specify the number of automatic retries.
//        runtime.maxAttempts = 3;
// Specify the connection timeout period.
//        runtime.connectTimeout = 5000;
// Specify the timeout period of read requests.
//       runtime.readTimeout = 10000;
        // The response is of the MAP type, which contains the response body, response headers, and HTTP status code. 
        java.util.Map<String, ?> response = client.callApi(params, request, runtime);
        System.out.println(new com.google.gson.Gson().toJson(response));
```

## **Sample code**

### Example: Call an RPC-style API operation

In this example, the DescribeInstanceTypeFamilies operation of Elastic Compute Service (ECS) is called to show how to make a generic call of an operation.

```
import com.aliyun.teaopenapi.Client;
import com.aliyun.teaopenapi.models.Config;
import com.aliyun.teaopenapi.models.OpenApiRequest;
import com.aliyun.teaopenapi.models.Params;
import com.aliyun.teautil.models.RuntimeOptions;
import com.google.gson.Gson;

import java.util.HashMap;
import java.util.Map;

import static com.aliyun.openapiutil.Client.query;

public class Sample {
    public static void main(String[] args) throws Exception {
        Config config = new Config()
                .setAccessKeyId(System.getenv("ALIBABA_CLOUD_ACCESS_KEY_ID"))
                .setAccessKeySecret(System.getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET"))
                .setEndpoint("ecs-cn-hangzhou.aliyuncs.com");
        Client client = new Client(config);
        Params params = new Params()
                .setStyle("RPC")  // The API style.
                .setVersion("2014-05-26") // The version number of the operation.
                .setMethod("POST") // The HTTP method of the operation.
                .setAction("DescribeInstanceTypeFamilies")  // The name of the API operation.
                .setPathname("/") 
                .setProtocol("HTTPS")
                .setAuthType("AK")
                .setReqBodyType("json")
                .setBodyType("json");
        // Specify the query parameters.
        Map<String, Object> queries = new HashMap<>();
        queries.put("RegionId", "cn-hangzhou");
        // Create a runtime configuration object.
        RuntimeOptions runtime = new RuntimeOptions();
        OpenApiRequest request = new OpenApiRequest()
                .setQuery(query(queries));
        // The response is of the MAP type, which contains the response body, response headers, and HTTP status code. 
        Map<String, ?> response = client.callApi(params, request, runtime);
        System.out.println(new Gson().toJson(response));
    }
}
```

### Example: Call a RESTful-style (ROA-style) API operation

In this example, the DescribeClustersV1 operation of Container Service for Kubernetes (ACK) is called to show how to make a generic call of an operation.

```
import com.aliyun.teaopenapi.Client;
import com.aliyun.teaopenapi.models.Config;
import com.aliyun.teaopenapi.models.OpenApiRequest;
import com.aliyun.teaopenapi.models.Params;
import com.aliyun.teautil.models.RuntimeOptions;
import com.google.gson.Gson;

import java.util.HashMap;
import java.util.Map;

import static com.aliyun.openapiutil.Client.query;

public class Test3 {
    public static void main(String[] args_) throws Exception {
        Config config = new Config()
                .setAccessKeyId(System.getenv("ALIBABA_CLOUD_ACCESS_KEY_ID"))
                .setAccessKeySecret(System.getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET"))
                .setEndpoint("cs.cn-hangzhou.aliyuncs.com");
        Client client = new Client(config);
        Params params = new Params()
                .setStyle("ROA") // The API style.
                .setVersion("2015-12-15") // The API version.
                .setAction("DescribeClustersV1") // The operation that you want to call.
                .setPathname("/api/v1/clusters") // The API URI.
                .setMethod("GET") // The request method.
                .setProtocol("HTTPS")
                .setAuthType("AK")
                .setReqBodyType("json")
                .setBodyType("json");
        // Specify the query parameters.
        Map<String, Object> queries = new HashMap<>();
        queries.put("name", "cluster-demo");
        OpenApiRequest request = new OpenApiRequest()
                .setQuery(query(queries));
        RuntimeOptions runtime = new RuntimeOptions();
        // The response is of the MAP type, which contains the response body, response headers, and HTTP status code. 
        Map<String, ?> response = client.callApi(params, request, runtime);
        System.out.println(new Gson().toJson(response));
    }
}
```
