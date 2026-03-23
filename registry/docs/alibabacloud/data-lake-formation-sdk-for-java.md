Alibaba Cloud Data Lake Formation (DLF) SDK for Java allows you to access DLF without complex programming. This topic describes how to install and use DLF SDK for Java.

## Prerequisites

-   An [AccessKey pair](/help/en/cloud-migration-guide-for-beginners/latest/obtain-an-accesskey-pair) is created.
    
-   Java is installed.
    
    DLF SDK for Java requires JDK 1.7 or later.
    

## Install Alibaba Cloud SDK for Java

You can obtain the latest DLF SDK package from the [Maven repository](https://oss.sonatype.org/?spm=openapi-amp.sdkpublish.0.0.201eVagXVagXeQ#nexus-search;quick~datalake20200710).

```
<dependency>
  <groupId>com.aliyun</groupId>
  <artifactId>datalake20200710</artifactId>
  <version>2.0.12</version>
</dependency>
```

## Procedure

1.  Initialize the request client. Before you call the operation, you must configure environment variables and obtain access credentials from the environment variables.
    
    ```
            Config authConfig = new Config();
       			// The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. If you use these credentials to perform operations, security risks may arise. We recommend that you use a RAM user to call API operations or perform routine O&M. To create a RAM user, log on to the RAM console. 
            // To prevent key leakage, we recommend that you do not save your AccessKey ID and AccessKey secret in the code file. 
    				// In this example, the AccessKey ID and AccessKey secret are stored in environment variables. Before you run the sample code, configure environment variables. 
            authConfig.accessKeyId= System.getenv("AK_ENV");
            authConfig.accessKeySecret= System.getenv("SK_ENV");
            authConfig.type= "access_key";
            authConfig.endpoint= "dlf.cn-shanghai.aliyuncs.com";
            authConfig.regionId= "cn-shanghai";
            Client authClient = new Client(authConfig);
    ```
    
2.  Create an API request and set parameters.
    
    The following sample code provides an example on how to create a request for the CreateDatabase operation, which can be used to create a metadatabase:
    
    ```
            CreateDatabaseRequest request = new CreateDatabaseRequest();
            request.catalogId = "";
    
            DatabaseInput input = new DatabaseInput();
            input.description = "";
            input.locationUri = "oss://test";
            input.name = "example";
    
            request.databaseInput = input;
    ```
    
3.  Call the operation and obtain the response.
    
    ```
            CreateDatabaseResponseBody response = authClient.createDatabase(request).body;
    ```
    

## Examples

The following sample code provides an example on how to create a metadatabase.

```
package com.aliyun.datalake.examples;

import com.aliyun.datalake20200710.Client;
import com.aliyun.datalake20200710.models.CreateDatabaseRequest;
import com.aliyun.datalake20200710.models.CreateDatabaseResponseBody;
import com.aliyun.datalake20200710.models.DatabaseInput;
import com.aliyun.teaopenapi.models.Config;
import com.google.gson.Gson;

public class SchemaExample {

    public static void main(String[] args) throws Exception {
        // 1 Create and initialize a Config instance.
        Config authConfig = new Config();
   			// The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. If you use these credentials to perform operations, security risks may arise. We recommend that you use a RAM user to call API operations or perform routine O&M. To create a RAM user, log on to the RAM console. 
        // To prevent key leakage, we recommend that you do not save your AccessKey ID and AccessKey secret in the code file. 
      	// In this example, the AccessKey ID and AccessKey secret are stored in environment variables. You can also save the AccessKey pair in the configuration file based on your business requirements. 
        authConfig.accessKeyId= System.getenv("AK_ENV");
        authConfig.accessKeySecret= System.getenv("SK_ENV");
        authConfig.type = "access_key";
        authConfig.endpoint = "dlf.cn-shanghai.aliyuncs.com";
        authConfig.regionId = "cn-shanghai";

        Client authClient = new Client(authConfig);

        // 2 Create an API request and set parameters.
        CreateDatabaseRequest request = new CreateDatabaseRequest();
        request.catalogId = "";

        DatabaseInput input = new DatabaseInput();
        input.description = "";
        input.locationUri = "oss://test";
        input.name = "example";

        request.databaseInput = input;
        // 3 Initiate the request and handle the response or exceptions.
        CreateDatabaseResponseBody response = authClient.createDatabase(request).body;
        System.out.println(new Gson().toJson(response));
    }

}
```

If the call is successful, the following response is returned:

```
{"code":"OK","message":"","requestId":"1739F0B0-A94E-49AC-95FC-C1CE5E4171FA","success":true}
```

If the call fails, the status code and error message are packaged as an exception and returned. Example:

```
Exception in thread "main" com.aliyun.tea.TeaException: code: 409, Database example already exists request id: 598B1E2F-9AEF-4B13-AE4D-EB8733B643EB
 at com.aliyun.teaopenapi.Client.doROARequest(Client.java:303)
 at com.aliyun.datalake20200710.Client.createDatabaseWithOptions(Client.java:790)
 at com.aliyun.datalake20200710.Client.createDatabase(Client.java:772)
 at com.aliyun.datalake.examples.SchemaExample.main(SchemaExample.java:34)
```

If an unknown error, such as a network error, occurs when an operation is called, the error is returned without being processed. Example:

```
Exception in thread "main" com.aliyun.tea.TeaException
 at com.aliyun.tea.Tea.doAction(Tea.java:67)
 at com.aliyun.teaopenapi.Client.doROARequest(Client.java:292)
 at com.aliyun.datalake20200710.Client.createDatabaseWithOptions(Client.java:790)
 at com.aliyun.datalake20200710.Client.createDatabase(Client.java:772)
 at com.aliyun.datalake.examples.SchemaExample.main(SchemaExample.java:34)
Caused by: java.net.UnknownHostException: dlf.cn-shanghai.aliyuncs.com
 at java.net.Inet6AddressImpl.lookupAllHostAddr(Native Method)
 at java.net.InetAddress$2.lookupAllHostAddr(InetAddress.java:928)
 at java.net.InetAddress.getAddressesFromNameService(InetAddress.java:1323)
 at java.net.InetAddress.getAllByName0(InetAddress.java:1276)
 at java.net.InetAddress.getAllByName(InetAddress.java:1192)
 at java.net.InetAddress.getAllByName(InetAddress.java:1126)
 at okhttp3.Dns$1.lookup(Dns.java:39)
 at okhttp3.internal.connection.RouteSelector.resetNextInetSocketAddress(RouteSelector.java:171)
 at okhttp3.internal.connection.RouteSelector.nextProxy(RouteSelector.java:137)
 at okhttp3.internal.connection.RouteSelector.next(RouteSelector.java:82)
 at okhttp3.internal.connection.StreamAllocation.findConnection(StreamAllocation.java:171)
 at okhttp3.internal.connection.StreamAllocation.findHealthyConnection(StreamAllocation.java:121)
 at okhttp3.internal.connection.StreamAllocation.newStream(StreamAllocation.java:100)
 at okhttp3.internal.connection.ConnectInterceptor.intercept(ConnectInterceptor.java:42)
 at okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:92)
 at okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:67)
 at okhttp3.internal.cache.CacheInterceptor.intercept(CacheInterceptor.java:93)
 at okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:92)
 at okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:67)
 at okhttp3.internal.http.BridgeInterceptor.intercept(BridgeInterceptor.java:93)
 at okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:92)
 at okhttp3.internal.http.RetryAndFollowUpInterceptor.intercept(RetryAndFollowUpInterceptor.java:120)
 at okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:92)
 at okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:67)
 at okhttp3.RealCall.getResponseWithInterceptorChain(RealCall.java:185)
 at okhttp3.RealCall.execute(RealCall.java:69)
 at com.aliyun.tea.Tea.doAction(Tea.java:64)
 ... 4 more
```

## Best practices

To ensure that the responses returned by DLF SDK for Java are in the standard format as those described in API documentation, specific methods can be used to process the success or error responses that are returned by DLF SDK for Java.

For example, all operations are packaged by using the same method:

```
public class AbstractAPI {

    protected final Client client;

    public AbstractAPI(Client client) {
        this.client = client;
    }

    public  <M, V extends ResultModel<M>> ResultModel<M> call(Callable<V> c) throws Exception {
        try {
            return c.call();
        } catch (TeaException e) {
            Map<String, Object> data = e.getData();
            if (data!= null && data.get("Code") != null) {
                return TeaModel.toModel(data, new ResultModel<M>());
            } else {
                throw e;
            }
        }
    }
}
```

A specific operation can inherit the preceding class and be constructed by using proper parameters:

```
public class DatabaseAPI extends AbstractAPI {

    public DatabaseAPI(Client client) {
        super(client);
    }

    public ResultModel<Void> createDatabase(String catalogId, String databaseName, String description,
                                            String locationUri, Map<String, String> parameters,
                                            String ownerName, String ownerType, PrincipalPrivilegeSet privileges) throws Exception {
        return call(()-> {
            CreateDatabaseRequest request = new CreateDatabaseRequest();
            request.catalogId = catalogId;

            DatabaseInput input = new DatabaseInput();
            input.description = description;
            input.locationUri = locationUri;
            input.parameters = parameters;
            input.name = databaseName;
            input.ownerName = ownerName;
            input.ownerType = ownerType;
            input.privileges = privileges;

            request.databaseInput = input;

            CreateDatabaseResponseBody response = client.createDatabase(request).body;
            return new ResultModel<>(response.success, response.code, response.message,
                    response.requestId);
        });
    }
}
```

This way, after an operation is called, a response in the standard format can be returned:

```
public class SchemaExample {

    public static void main(String[] args) throws Exception {
        // 1 Create and initialize a Config instance.
        Config authConfig = new Config();
   			// The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. If you use these credentials to perform operations, security risks may arise. We recommend that you use a RAM user to call API operations or perform routine O&M. To create a RAM user, log on to the RAM console. 
        // To prevent key leakage, we recommend that you do not save your AccessKey ID and AccessKey secret in the code file.
      	// In this example, the AccessKey ID and AccessKey secret are stored in environment variables. Before you run the sample code, configure environment variables. 
        authConfig.accessKeyId= System.getenv("AK_ENV");
        authConfig.accessKeySecret= System.getenv("SK_ENV");
        authConfig.type = "access_key";
        authConfig.endpoint = "dlf.cn-shanghai.aliyuncs.com";
        authConfig.regionId = "cn-shanghai";

        Client authClient = new Client(authConfig);

        // 2 Initiate the request and handle the response or exceptions.
        ResultModel<Void> response = new DatabaseAPI(authClient).createDatabase("", "example3", "",
                "oss://test", null,
                null, null, null);
        System.out.println(new Gson().toJson(response));
    }

}
```

Sample success response:

```
{"success":true,"code":"OK","message":"","requestId":"50778D55-696D-45FA-8328-B01983F6CEB1"}
```

Sample error response:

```
{"success":false,"code":"AlreadyExists","message":"Database example3 already exists","requestId":"94617169-DA17-4020-9027-7D8F89160682","httpStatusCode":409}
```

## Additional information

-   For more information about the regions and endpoints supported by DLF, see [Supported regions and endpoints](/help/en/dlf/dlf-1-0/product-overview/regions-and-endpoints#topic-2021566).
    
-   We recommend that you use OpenAPI Explorer to perform online debugging and generate SDK sample code. [OpenAPI Explorer](https://api.alibabacloud.com/home) allows you to call API operations of cloud services online, dynamically generate SDK sample code, and quickly retrieve API operations. This simplifies the use of API operations.
