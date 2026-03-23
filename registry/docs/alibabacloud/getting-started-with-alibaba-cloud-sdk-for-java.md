This topic describes how to install and use the Java SDK for Realtime Compute for Apache Flink.

## Notes

Alibaba Cloud updated the SDKs for Realtime Compute for Apache Flink on September 19, 2022. The new SDK version is now the default. This update was rolled out across all regions from September 19, 2022, to October 27, 2022.

**Note**

-   For more information about the impact of the SDK upgrade, see [Service notices](/help/en/flink/realtime-flink/product-overview/service-notices/#concept-2569029).
    
-   This topic describes how to use the new version of the SDK. For the documentation for the old version of the SDK, download the [OpenAPI SDK (Discontinued)](https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/zh-CN/20230524/ytsn/OpenAPI SDK.pdf) document.
    

## Prerequisites

-   You have created an AccessKey pair. For more information, see [Create an AccessKey pair](/help/en/cloud-migration-guide-for-beginners/latest/obtain-an-accesskey-pair).
    
    **Note**
    
    To prevent security risks that may arise from a leaked AccessKey pair, we recommend that you create a Resource Access Management (RAM) user. You can then grant the RAM user the required permissions to access Flink and use the AccessKey pair of the RAM user to call the SDK. For more information, see the following topics:
    
    -   To create a RAM user and its AccessKey pair, see [Create a RAM user](/help/en/ram/user-guide/create-a-ram-user#task-187540) or [Create an AccessKey pair](/help/en/cloud-migration-guide-for-beginners/latest/obtain-an-accesskey-pair#task-354412).
        
    -   To grant permissions to a RAM user, see [Authorize in the management console](/help/en/flink/realtime-flink/user-guide/ram-based-authorization).
        
    
-   You have a Java environment. Java 8 or a later version is required.
    
-   Your account has the required access and operation permissions. For more information, see [Permission management](/help/en/flink/realtime-flink/user-guide/permission-management/).
    

## Realtime Compute for Apache Flink Java SDK

## Java SDK for the Realtime Compute for Apache Flink console for purchase

**Installation method**

**Code**

Apache Maven

<dependency>

<groupId>com.aliyun</groupId>

<artifactId>foasconsole20211028</artifactId>

<version>2.1.0</version>

</dependency>

Gradle Groovy DSL

implementation 'com.aliyun:foasconsole20211028:2.1.0'

Gradle Kotlin DSL

implementation("com.aliyun:foasconsole20211028:2.1.0")

Scala SBT

libraryDependencies += "com.aliyun" % "foasconsole20211028" % "2.1.0"

Apache Ivy

<dependency org="com.aliyun" name="foasconsole20211028" rev="2.1.0" />

Groovy Grape

@Grapes(

@Grab(group='com.aliyun', module='foasconsole20211028', version='2.1.0')

)

Leiningen

\[com.aliyun/foasconsole20211028 "2.1.0"\]

Apache Buildr

'com.aliyun:foasconsole20211028:jar:2.1.0'

## Java SDK for the Realtime Compute for Apache Flink development console

**Installation method**

**Code**

Apache Maven

<dependency>

<groupId>com.aliyun</groupId>

<artifactId>ververica20220718</artifactId>

<version>1.7.0</version>

</dependency>

Gradle Groovy DSL

implementation 'com.aliyun:ververica20220718:1.7.0'

Gradle Kotlin DSL

implementation("com.aliyun:ververica20220718:1.7.0")

Scala SBT

libraryDependencies += "com.aliyun" % "ververica20220718" % "1.7.0"

Apache Ivy

<dependency org="com.aliyun" name="ververica20220718" rev="1.7.0" />

Groovy Grape

@Grapes(

@Grab(group='com.aliyun', module='ververica20220718', version='1.7.0')

)

Leiningen

\[com.aliyun/ververica20220718 "1.7.0"\]

Apache Buildr

'com.aliyun:ververica20220718:jar:1.7.0'

## Online debugging and SDK example generation

OpenAPI Explorer lets you call API operations online, dynamically generate SDK example code, and quickly retrieve API operations to simplify their use. You can view and download SDK examples for API operations on the [Realtime Compute for Apache Flink Development Console API](https://api.aliyun.com/api/ververica/2022-07-18/ListVariables?tab=DEMO&lang=PYTHON) and [Realtime Compute for Apache Flink Selling Console API](https://api.aliyun.com/api/foasconsole/2021-10-28/DescribeInstances?tab=DEMO&lang=PYTHON) pages. For more information, see [Quick start](/help/en/sdk/developer-reference/v2-python-quick-start).

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1060176271/p821626.png)

## Examples

**Note**

-   For the endpoints of the Realtime Compute for Apache Flink selling console, see [OpenAPI Explorer](https://api.alibabacloud.com/product/foasconsole).
    
-   For the endpoints of the Realtime Compute for Apache Flink development console, see [OpenAPI Explorer](https://api.alibabacloud.com/product/ververica).
    

### **View purchased workspaces**

You can query the details of purchased Realtime Compute for Apache Flink workspaces in a specified region. The required request parameters are as follows:.

`Region`: The region ID. For more information, see [Endpoints](https://api.alibabacloud.com/product/foasconsole). For example, \`cn-hangzhou\`.

```
package com.aliyun.sample;
import com.aliyun.foasconsole20211028.models.DescribeInstancesResponse;
import com.aliyun.tea.*;
import com.alibaba.fastjson2.JSON;

public class Sample {
    /**
     * description :
     * <p>Use your AccessKey ID and AccessKey secret to initialize the client.</p>
     * @return Client
     *
     * @throws Exception
     */
    public static com.aliyun.foasconsole20211028.Client createClient() throws Exception {
        // Leaking project code can expose your AccessKey pair and compromise the security of all resources in your account. The following code is for reference only.
        com.aliyun.teaopenapi.models.Config config = new com.aliyun.teaopenapi.models.Config()
                // Required. Make sure that the ALIBABA_CLOUD_ACCESS_KEY_ID environment variable is set in your execution environment.
                .setAccessKeyId(System.getenv("ALIBABA_CLOUD_ACCESS_KEY_ID"))
                // Required. Make sure that the ALIBABA_CLOUD_ACCESS_KEY_SECRET environment variable is set in your execution environment.
                .setAccessKeySecret(System.getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET"));
        config.endpoint = "foasconsole.aliyuncs.com";
        return new com.aliyun.foasconsole20211028.Client(config);
    }

    public static void main(String[] args_) throws Exception {
        com.aliyun.foasconsole20211028.Client client = Sample.createClient();
        com.aliyun.foasconsole20211028.models.DescribeInstancesRequest describeInstancesRequest = new com.aliyun.foasconsole20211028.models.DescribeInstancesRequest()
                .setRegion("cn-beijing");
        com.aliyun.teautil.models.RuntimeOptions runtime = new com.aliyun.teautil.models.RuntimeOptions();
        try {
            DescribeInstancesResponse response = client.describeInstancesWithOptions(describeInstancesRequest, runtime);
            System.out.println(response.statusCode);
            // View the region ID of an instance.
            System.out.println(response.getBody().getInstances().get(0).zoneId);
            // View the resource group ID of an instance.
            System.out.println(response.getBody().getInstances().get(0).resourceGroupId);
            System.out.println(JSON.toJSON(response));

        } catch (TeaException error) {
            // This code is for demonstration only. Handle exceptions with care. Do not ignore exceptions in your project.
            // Error message
            System.out.println(error.getMessage());
            // Diagnosis address
            System.out.println(error.getData().get("Recommend"));
            com.aliyun.teautil.Common.assertAsString(error.message);
        } catch (Exception _error) {
            TeaException error = new TeaException(_error.getMessage(), _error);
            // This code is for demonstration only. Handle exceptions with care. Do not ignore exceptions in your project.
            // Error message
            System.out.println(error.getMessage());
            // Diagnosis address
            System.out.println(error.getData().get("Recommend"));
            com.aliyun.teautil.Common.assertAsString(error.message);
        }
    }
}
```

### **Create a deployed job**

## SQL job

You can create an SQL deployment. The required request parameters are as follows.

-   `workspace`: The workspace ID. You can obtain the ID from the ResourceId returned by the [View purchased workspaces](#93807db7eeznn) operation. For example, \`adf9e514\*\*\*\*\`.
    
-   `namespace`: Specifies the name of the project. For example, test-default.
    
-   `body.name`: The job name. For example, \`mysql\_data\_holo\_test\`.
    
-   `body.engineVersion`: The engine version. For example, \`vvr-8.0.7-flink-1.17\`. You can call the [List supported engine versions](https://next.api.aliyun.com/api/ververica/2022-07-18/ListEngineVersionMetadata) operation to retrieve the supported engine versions.
    
-   `body.sqlArtifact.sqlScript`: The SQL script of the job. For example: `CREATE TEMPORARY TABLE datagen_source( name VARCHAR ) WITH ( 'connector' = 'datagen' ); CREATE TEMPORARY TABLE blackhole_sink( name VARCHAR ) with ( 'connector' = 'blackhole' ); INSERT INTO blackhole_sink SELECT name from datagen_source;`.
    
-   `body.sqlArtifact.kind`: The type of the job. For example, \`SQLSCRIPT\`.
    
-   `body.deploymentTarget.mode`: The deployment mode. Only the \`PER\_JOB\` mode is supported.
    
-   `body.deploymentTarget.name`: The name of the deployment queue. For example, \`default-queue\`.
    
-   `body.executionMode`: The execution mode. For example, \`STREAMING\` (stream mode).
    
-   `body.streamingResourceSetting.resourceSettingMode`: The resource allocation mode for the stream mode. For example, \`BASIC\`.
    
-   `body.streamingResourceSetting.basicResourceSetting.jobmanagerResourceSettingSpec.cpu`: The number of JobManager (JM) CPU cores. For example, \`2\`.
    
-   `body.streamingResourceSetting.basicResourceSetting.jobmanagerResourceSettingSpec.memory`: The JM memory. For example, \`4.0 GiB\`.
    
-   `body.streamingResourceSetting.basicResourceSetting.taskmanagerResourceSettingSpec.cpu`: The number of TaskManager (TM) CPU cores. For example, \`2\`.
    
-   `body.streamingResourceSetting.basicResourceSetting.taskmanagerResourceSettingSpec.memory`: The TM memory. For example, \`4.0 GiB\`.
    

```
package com.aliyun.sample;
import com.aliyun.tea.*;

public class Sample {

    /**
     * description :
     * <p>Use your AccessKey ID and AccessKey secret to initialize the client.</p>
     * @return Client
     *
     * @throws Exception
     */
    public static com.aliyun.teaopenapi.Client createClient() throws Exception {
        // Leaking project code can expose your AccessKey pair and compromise the security of all resources in your account. The following code is for reference only.
        com.aliyun.teaopenapi.models.Config config = new com.aliyun.teaopenapi.models.Config()
                // Required. Make sure that the ALIBABA_CLOUD_ACCESS_KEY_ID environment variable is set in your execution environment.
                .setAccessKeyId(System.getenv("ALIBABA_CLOUD_ACCESS_KEY_ID"))
                // Required. Make sure that the ALIBABA_CLOUD_ACCESS_KEY_SECRET environment variable is set in your execution environment.
                .setAccessKeySecret(System.getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET"));
        config.endpoint = "ververica.cn-beijing.aliyuncs.com";
        return new com.aliyun.teaopenapi.Client(config);
    }

    /**
     * description :
     * <p>API-related</p>
     *
     * @param path params
     * @return OpenApi.Params
     */
    public static com.aliyun.teaopenapi.models.Params createApiInfo(String namespace) throws Exception {
        com.aliyun.teaopenapi.models.Params params = new com.aliyun.teaopenapi.models.Params()
                // API operation name
                .setAction("CreateDeployment")
                // API operation version
                .setVersion("2022-07-18")
                // API operation protocol
                .setProtocol("HTTPS")
                // HTTP method
                .setMethod("POST")
                .setAuthType("AK")
                .setStyle("ROA")
                // API path
                .setPathname("/api/v2/namespaces/" + namespace + "/deployments")
                // Request body format
                .setReqBodyType("json")
                // Response body format
                .setBodyType("json");
        return params;
    }

    public static void main(String[] args_) throws Exception {
        java.util.List<String> args = java.util.Arrays.asList(args_);
        com.aliyun.teaopenapi.Client client = Sample.createClient();
        com.aliyun.teaopenapi.models.Params params = Sample.createApiInfo("test-default");
        // body params
        java.util.Map<String, Object> body = TeaConverter.buildMap(
                new TeaPair("name", "mysql_data_holo_test"),
                new TeaPair("engineVersion", "vvr-8.0.7-flink-1.17"),
                new TeaPair("artifact", TeaConverter.buildMap(
                        new TeaPair("sqlArtifact", TeaConverter.buildMap(
                                new TeaPair("sqlScript", "CREATE TEMPORARY TABLE datagen_source(   name VARCHAR ) WITH (   'connector' = 'datagen' ); CREATE TEMPORARY TABLE blackhole_sink(   name  VARCHAR ) with (   'connector' = 'blackhole' ); INSERT INTO blackhole_sink SELECT name from datagen_source;")
                        )),
                        new TeaPair("kind", "SQLSCRIPT")
                )),
                new TeaPair("deploymentTarget", TeaConverter.buildMap(
                        new TeaPair("mode", "PER_JOB"),
                        new TeaPair("name", "default-queue")
                )),
                new TeaPair("executionMode", "STREAMING"),
                new TeaPair("streamingResourceSetting", TeaConverter.buildMap(
                        new TeaPair("resourceSettingMode", "BASIC"),
                        new TeaPair("basicResourceSetting", TeaConverter.buildMap(
                                new TeaPair("jobmanagerResourceSettingSpec", TeaConverter.buildMap(
                                        new TeaPair("cpu", 2),
                                        new TeaPair("memory", "4")
                                )),
                                new TeaPair("taskmanagerResourceSettingSpec", TeaConverter.buildMap(
                                        new TeaPair("cpu", 2),
                                        new TeaPair("memory", "4")
                                ))
                        ))
                ))
        );
        // header params
        java.util.Map<String, String> headers = new java.util.HashMap<>();
        headers.put("workspace", "ab2*******884d");
        // runtime options
        com.aliyun.teautil.models.RuntimeOptions runtime = new com.aliyun.teautil.models.RuntimeOptions();
        com.aliyun.teaopenapi.models.OpenApiRequest request = new com.aliyun.teaopenapi.models.OpenApiRequest()
                .setHeaders(headers)
                .setBody(body);
        // The return value is a Map. You can get three types of data from the map: the response body, response headers, and the HTTP status code.
        client.callApi(params, request, runtime);
        java.util.Map<String, ?> response = client.callApi(params, request, runtime);
        System.out.println(response);
    }
}
```

## JAR job

You can create and deploy a JAR deployment. The required request parameters are as follows.

**Note**

-   Ensure that the JAR package is uploaded to an OSS bucket and the Flink workspace has the required access permissions. For more information, see [Simple upload to OSS](/help/en/oss/user-guide/simple-upload#section-ym8-svm-rmu).
    
-   The download URL after the upload is https://<Bucket>.oss-<Region>.aliyuncs.com/<FileName>.
    

-   `workspace`: The workspace ID. You can obtain the ID from the ResourceId returned by the [View purchased workspaces](#93807db7eeznn) operation. For example, \`adf9e514\*\*\*\*\`.
    
-   `namespace`: The project name. For example, \`test-default\`.
    
-   `body.name`: The job name. For example, \`my-test-jar\`.
    
-   `body.engineVersion`: The engine version. For example, \`vvr-8.0.7-flink-1.17\`. You can call the [List supported engine versions](https://next.api.aliyun.com/api/ververica/2022-07-18/ListEngineVersionMetadata) operation to retrieve the supported engine versions.
    
-   `body.jarArtifact.kind`: The type of the job. For example, \`JAR\`.
    
-   `body.jarArtifact.jarUri`: The full URL of the JAR job. For example, \`https://myBucket/oss-cn-hangzhou/test.jar\`.
    
-   `body.jarArtifact.entryClass`: The entry class. Specify the full name of the class. For example, \`org.apache.flink.test\`.
    
-   `body.deploymentTarget.mode`: The deployment mode. Only the \`PER\_JOB\` mode is supported.
    
-   `body.deploymentTarget.name`: The name of the deployment queue. For example, \`default-queue\`.
    
-   `body.executionMode`: The execution mode. For example, \`STREAMING\` (stream mode).
    
-   `body.streamingResourceSetting.resourceSettingMode`: The resource allocation mode for the stream mode. For example, \`BASIC\`.
    
-   `body.streamingResourceSetting.basicResourceSetting.jobmanagerResourceSettingSpec.cpu`: The number of JM CPU cores. For example, \`2\`.
    
-   `body.streamingResourceSetting.basicResourceSetting.jobmanagerResourceSettingSpec.memory`: The JM memory. For example, \`4.0 GiB\`.
    
-   `body.streamingResourceSetting.basicResourceSetting.taskmanagerResourceSettingSpec.cpu`: The number of TM CPU cores. For example, \`2\`.
    
-   `body.streamingResourceSetting.basicResourceSetting.taskmanagerResourceSettingSpec.memory`: The TM memory. For example, \`4.0 GiB\`.
    

```
package com.aliyun.sample;
import com.aliyun.tea.*;

public class Sample {

    /**
     * description :
     * <p>Use your AccessKey ID and AccessKey secret to initialize the client.</p>
     * @return Client
     *
     * @throws Exception
     */
    public static com.aliyun.teaopenapi.Client createClient() throws Exception {
        // Leaking project code can expose your AccessKey pair and compromise the security of all resources in your account. The following code is for reference only.
        com.aliyun.teaopenapi.models.Config config = new com.aliyun.teaopenapi.models.Config()
                // Required. Make sure that the ALIBABA_CLOUD_ACCESS_KEY_ID environment variable is set in your execution environment.
                .setAccessKeyId(System.getenv("ALIBABA_CLOUD_ACCESS_KEY_ID"))
                // Required. Make sure that the ALIBABA_CLOUD_ACCESS_KEY_SECRET environment variable is set in your execution environment.
                .setAccessKeySecret(System.getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET"));
        config.endpoint = "ververica.cn-hangzhou.aliyuncs.com";
        return new com.aliyun.teaopenapi.Client(config);
    }

    /**
     * description :
     * <p>API-related</p>
     *
     * @param path params
     * @return OpenApi.Params
     */
    public static com.aliyun.teaopenapi.models.Params createApiInfo(String namespace) throws Exception {
        com.aliyun.teaopenapi.models.Params params = new com.aliyun.teaopenapi.models.Params()
                // API operation name
                .setAction("CreateDeployment")
                // API operation version
                .setVersion("2022-07-18")
                // API operation protocol
                .setProtocol("HTTPS")
                // HTTP method
                .setMethod("POST")
                .setAuthType("AK")
                .setStyle("ROA")
                // API path
                .setPathname("/api/v2/namespaces/" + namespace + "/deployments")
                // Request body format
                .setReqBodyType("json")
                // Response body format
                .setBodyType("json");
        return params;
    }

    public static void main(String[] args_) throws Exception {
        java.util.List<String> args = java.util.Arrays.asList(args_);
        com.aliyun.teaopenapi.Client client = Sample.createClient();
        com.aliyun.teaopenapi.models.Params params = Sample.createApiInfo("flink-default");
        // body params
        java.util.Map<String, Object> body = TeaConverter.buildMap(
                new TeaPair("name", "my-test-jar"),
                new TeaPair("engineVersion", "vvr-8.0.7-flink-1.17"),
                new TeaPair("artifact", TeaConverter.buildMap(
                        new TeaPair("kind", "JAR"),
                        new TeaPair("jarArtifact", TeaConverter.buildMap(
                                new TeaPair("jarUri", "https://flink-test.oss-cn-hangzhou.aliyuncs.com/flinkDemo.jar?*****"),
                                new TeaPair("entryClass", "com.aliyun.FlinkDemo")
                        ))
                )),
                new TeaPair("deploymentTarget", TeaConverter.buildMap(
                        new TeaPair("mode", "PER_JOB"),
                        new TeaPair("name", "default-queue")
                )),
                new TeaPair("executionMode", "STREAMING"),
                new TeaPair("streamingResourceSetting", TeaConverter.buildMap(
                        new TeaPair("resourceSettingMode", "BASIC"),
                        new TeaPair("basicResourceSetting", TeaConverter.buildMap(
                                new TeaPair("jobmanagerResourceSettingSpec", TeaConverter.buildMap(
                                        new TeaPair("cpu", 2),
                                        new TeaPair("memory", "4")
                                )),
                                new TeaPair("taskmanagerResourceSettingSpec", TeaConverter.buildMap(
                                        new TeaPair("cpu", 2),
                                        new TeaPair("memory", "4")
                                ))
                        ))
                ))
        );
        // header params
        java.util.Map<String, String> headers = new java.util.HashMap<>();
        headers.put("workspace", "d05a*****e44");
        // runtime options
        com.aliyun.teautil.models.RuntimeOptions runtime = new com.aliyun.teautil.models.RuntimeOptions();
        com.aliyun.teaopenapi.models.OpenApiRequest request = new com.aliyun.teaopenapi.models.OpenApiRequest()
                .setHeaders(headers)
                .setBody(body);
        // The return value is a Map. You can get three types of data from the map: the response body, response headers, and the HTTP status code.
        java.util.Map<String, ?> response = client.callApi(params, request, runtime);
        System.out.println(response);
    }
}
```

### **Get a list of deployments**

You can retrieve information about all deployments in a namespace. The required request parameters are as follows.

-   `workspace`: The workspace ID. You can obtain the ID from the ResourceId returned by the [View purchased workspaces](#93807db7eeznn) operation. For example, \`adf9e514\*\*\*\*\`.
    
-   `namespace`: The project name. For example, \`test-default\`.
    

```
package com.sample;
import com.aliyun.tea.*;
import com.alibaba.fastjson2.JSON;
import com.aliyun.ververica20220718.models.ListDeploymentsResponse;

public class Sample {
    /**
     * description :
     * <p>Use your AccessKey ID and AccessKey secret to initialize the client.</p>
     * @return Client
     *
     * @throws Exception
     */
    public static com.aliyun.ververica20220718.Client createClient() throws Exception {
        // Leaking project code can expose your AccessKey pair and compromise the security of all resources in your account. The following code is for reference only.
        com.aliyun.teaopenapi.models.Config config = new com.aliyun.teaopenapi.models.Config()
                // Required. Make sure that the ALIBABA_CLOUD_ACCESS_KEY_ID environment variable is set in your execution environment.
                .setAccessKeyId(System.getenv("ALIBABA_CLOUD_ACCESS_KEY_ID"))
                // Required. Make sure that the ALIBABA_CLOUD_ACCESS_KEY_SECRET environment variable is set in your execution environment.
                .setAccessKeySecret(System.getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET"));
        config.endpoint = "ververica.cn-hangzhou.aliyuncs.com";
        return new com.aliyun.ververica20220718.Client(config);
    }

    public static void main(String[] args_) throws Exception {
        com.aliyun.ververica20220718.Client client = Sample.createClient();
        com.aliyun.ververica20220718.models.ListDeploymentsHeaders listDeploymentsHeaders = new com.aliyun.ververica20220718.models.ListDeploymentsHeaders()
                .setWorkspace("ab2a******884d");
        com.aliyun.ververica20220718.models.ListDeploymentsRequest listDeploymentsRequest = new com.aliyun.ververica20220718.models.ListDeploymentsRequest();
        com.aliyun.teautil.models.RuntimeOptions runtime = new com.aliyun.teautil.models.RuntimeOptions();
        try {
            ListDeploymentsResponse response=client.listDeploymentsWithOptions("test-default", listDeploymentsRequest, listDeploymentsHeaders, runtime);
            System.out.println(response.body.data.get(0).name);
            System.out.println(response.body.data.get(0).deploymentId);
            System.out.println(JSON.toJSON(response));
        } catch (TeaException error) {
            // This code is for demonstration only. Handle exceptions with care. Do not ignore exceptions in your project.
            // Error message
            System.out.println(error.getMessage());
            // Diagnosis address
            System.out.println(error.getData().get("Recommend"));
            com.aliyun.teautil.Common.assertAsString(error.message);
        } catch (Exception _error) {
            TeaException error = new TeaException(_error.getMessage(), _error);
            // This code is for demonstration only. Handle exceptions with care. Do not ignore exceptions in your project.
            // Error message
            System.out.println(error.getMessage());
            // Diagnosis address
            System.out.println(error.getData().get("Recommend"));
            com.aliyun.teautil.Common.assertAsString(error.message);
        }
    }
}
```

### **Start a job**

You can start a deployed job in a project. The required request parameters are as follows.

-   `workspace`: The workspace ID. For example, \`adf9e5147a\*\*\*\*\`.
    
-   `namespace`: The project name. For example, \`test-default\`.
    
-   `deploymentId`: The deployment ID of the job. You can retrieve the ID by calling the [Retrieve a list of deployments](#d72d978342etq) operation. For example, \`10283a02-c6a6-4f3e-9f93-8dab\*\*\*\*\`.
    
-   `kind`: The type of the start offset. Valid values are \`NONE\` (stateless start), \`LATEST\_SAVEPOINT\` (start from the latest job snapshot), \`FROM\_SAVEPOINT\` (start from a specified snapshot), and \`LATEST\_STATE\` (start from the latest state).
    

```
package com.aliyun.sample;
import com.aliyun.tea.*;
import com.aliyun.ververica20220718.models.StartJobWithParamsResponse;
import com.alibaba.fastjson2.JSON;

public class Sample {

    /**
     * description :
     * <p>Use your AccessKey ID and AccessKey secret to initialize the client.</p>
     * @return Client
     *
     * @throws Exception
     */
    public static com.aliyun.ververica20220718.Client createClient() throws Exception {
        // Leaking project code can expose your AccessKey pair and compromise the security of all resources in your account. The following code is for reference only.
        com.aliyun.teaopenapi.models.Config config = new com.aliyun.teaopenapi.models.Config()
                // Required. Make sure that the ALIBABA_CLOUD_ACCESS_KEY_ID environment variable is set in your execution environment.
                .setAccessKeyId(System.getenv("ALIBABA_CLOUD_ACCESS_KEY_ID"))
                // Required. Make sure that the ALIBABA_CLOUD_ACCESS_KEY_SECRET environment variable is set in your execution environment.
                .setAccessKeySecret(System.getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET"));
        config.endpoint = "ververica.cn-hangzhou.aliyuncs.com";
        return new com.aliyun.ververica20220718.Client(config);
    }

    public static void main(String[] args_) throws Exception {
        com.aliyun.ververica20220718.Client client = Sample.createClient();
        com.aliyun.ververica20220718.models.StartJobWithParamsHeaders startJobWithParamsHeaders = new com.aliyun.ververica20220718.models.StartJobWithParamsHeaders()
                .setWorkspace("ab2a******884d");
        com.aliyun.ververica20220718.models.DeploymentRestoreStrategy jobStartParametersDeploymentRestoreStrategy = new com.aliyun.ververica20220718.models.DeploymentRestoreStrategy()
                .setKind("NONE");
        com.aliyun.ververica20220718.models.JobStartParameters jobStartParameters = new com.aliyun.ververica20220718.models.JobStartParameters()
                .setRestoreStrategy(jobStartParametersDeploymentRestoreStrategy)
                .setDeploymentId("10283a02-****-****-****-8dabf617d52f");
        com.aliyun.ververica20220718.models.StartJobWithParamsRequest startJobWithParamsRequest = new com.aliyun.ververica20220718.models.StartJobWithParamsRequest()
                .setBody(jobStartParameters);
        com.aliyun.teautil.models.RuntimeOptions runtime = new com.aliyun.teautil.models.RuntimeOptions();
        try {
            StartJobWithParamsResponse response = client.startJobWithParamsWithOptions("test-default", startJobWithParamsRequest, startJobWithParamsHeaders, runtime);
            System.out.println(JSON.toJSON(response.body));
        } catch (TeaException error) {
            // This code is for demonstration only. Handle exceptions with care. Do not ignore exceptions in your project.
            // Error message
            System.out.println(error.getMessage());
            // Diagnosis address
            System.out.println(error.getData().get("Recommend"));
            com.aliyun.teautil.Common.assertAsString(error.message);
        } catch (Exception _error) {
            TeaException error = new TeaException(_error.getMessage(), _error);
            // This code is for demonstration only. Handle exceptions with care. Do not ignore exceptions in your project.
            // Error message
            System.out.println(error.getMessage());
            // Diagnosis address
            System.out.println(error.getData().get("Recommend"));
            com.aliyun.teautil.Common.assertAsString(error.message);
        }
    }
}
```

### **Get information about a specific deployed job**

You can retrieve information about all job instances in a deployment. The required request parameters are as follows.

-   `workspace`: The workspace ID. For example, \`adf9e5147\*\*\*\*\`.
    
-   `namespace`: The project name. For example, \`test-default\`.
    
-   `deploymentId`: The deployment ID of the job. You can retrieve the ID by calling the [Retrieve a list of deployments](#d72d978342etq) operation. For example, \`8489b7ec-\*\*\*\*-\*\*\*\*-\*\*\*\*-cc4c17fa12b0\`.
    

```
package com.aliyun.sample;
import com.aliyun.tea.*;
import com.aliyun.ververica20220718.models.ListJobsResponse;
import com.alibaba.fastjson2.JSON;

public class Sample {

    /**
     * description :
     * <p>Use your AccessKey ID and AccessKey secret to initialize the client.</p>
     * @return Client
     *
     * @throws Exception
     */
    public static com.aliyun.ververica20220718.Client createClient() throws Exception {
        // Leaking project code can expose your AccessKey pair and compromise the security of all resources in your account. The following code is for reference only.
        com.aliyun.teaopenapi.models.Config config = new com.aliyun.teaopenapi.models.Config()
                // Required. Make sure that the ALIBABA_CLOUD_ACCESS_KEY_ID environment variable is set in your execution environment.
                .setAccessKeyId(System.getenv("ALIBABA_CLOUD_ACCESS_KEY_ID"))
                // Required. Make sure that the ALIBABA_CLOUD_ACCESS_KEY_SECRET environment variable is set in your execution environment.
                .setAccessKeySecret(System.getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET"));
        config.endpoint = "ververica.cn-beijing.aliyuncs.com";
        return new com.aliyun.ververica20220718.Client(config);
    }

    public static void main(String[] args_) throws Exception {
        com.aliyun.ververica20220718.Client client = Sample.createClient();
        com.aliyun.ververica20220718.models.ListJobsHeaders listJobsHeaders = new com.aliyun.ververica20220718.models.ListJobsHeaders()
                .setWorkspace("ab2a******884d");
        com.aliyun.ververica20220718.models.ListJobsRequest listJobsRequest = new com.aliyun.ververica20220718.models.ListJobsRequest()
                .setDeploymentId("8489b7ec-****-****-****-cc4c17fa12b0");
        com.aliyun.teautil.models.RuntimeOptions runtime = new com.aliyun.teautil.models.RuntimeOptions();
        try {
            ListJobsResponse response =  client.listJobsWithOptions("test-default", listJobsRequest, listJobsHeaders, runtime);
            // View the job execution result.
            System.out.println("Execution result is: "+response.body.success);
            // Get the job ID. This parameter is used to stop the job.
            System.out.println(response.body.getData().get(0).jobId);
            System.out.println(JSON.toJSON(response));
        } catch (TeaException error) {
            // This code is for demonstration only. Handle exceptions with care. Do not ignore exceptions in your project.
            // Error message
            System.out.println(error.getMessage());
            // Diagnosis address
            System.out.println(error.getData().get("Recommend"));
            com.aliyun.teautil.Common.assertAsString(error.message);
        } catch (Exception _error) {
            TeaException error = new TeaException(_error.getMessage(), _error);
            // This code is for demonstration only. Handle exceptions with care. Do not ignore exceptions in your project.
            // Error message
            System.out.println(error.getMessage());
            // Diagnosis address
            System.out.println(error.getData().get("Recommend"));
            com.aliyun.teautil.Common.assertAsString(error.message);
        }
    }
}
```

### **Stop a job instance**

You can stop a job instance. The required request parameters are as follows.

-   `workspace`: The workspace ID. For example, \`adf9e5147\*\*\*\*\`.
    
-   `namespace`: The project name. For example, \`test-default\`.
    
-   `jobId`: The job instance ID. You can retrieve the ID by calling the [Retrieve information about a specific deployed job](#b77a1fc8fca94) operation. For example, \`3171d4d1-\*\*\*\*-\*\*\*\*-\*\*\*\*-e762493b7765\`.
    
-   `stopStrategy`: The policy to stop the job. Valid values are \`NONE\` (stop immediately), \`STOP\_WITH\_SAVEPOINT\` (stop after generating a job snapshot), and \`STOP\_WITH\_DRAIN\` (stop in drain mode).
    

```
package com.aliyun.sample;
import com.alibaba.fastjson2.JSON;
import com.aliyun.tea.*;
import com.aliyun.ververica20220718.models.StopJobResponse;

public class Sample {

    /**
     * description :
     * <p>Use your AccessKey ID and AccessKey secret to initialize the client.</p>
     * @return Client
     *
     * @throws Exception
     */
    public static com.aliyun.ververica20220718.Client createClient() throws Exception {
        // Leaking project code can expose your AccessKey pair and compromise the security of all resources in your account. The following code is for reference only.
        com.aliyun.teaopenapi.models.Config config = new com.aliyun.teaopenapi.models.Config()
                // Required. Make sure that the ALIBABA_CLOUD_ACCESS_KEY_ID environment variable is set in your execution environment.
                .setAccessKeyId(System.getenv("ALIBABA_CLOUD_ACCESS_KEY_ID"))
                // Required. Make sure that the ALIBABA_CLOUD_ACCESS_KEY_SECRET environment variable is set in your execution environment.
                .setAccessKeySecret(System.getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET"));
        config.endpoint = "ververica.cn-hangzhou.aliyuncs.com";
        return new com.aliyun.ververica20220718.Client(config);
    }

    public static void main(String[] args_) throws Exception {
        java.util.List<String> args = java.util.Arrays.asList(args_);
        com.aliyun.ververica20220718.Client client = Sample.createClient();
        com.aliyun.ververica20220718.models.StopJobHeaders stopJobHeaders = new com.aliyun.ververica20220718.models.StopJobHeaders()
                .setWorkspace("ab2a******884d");
        com.aliyun.ververica20220718.models.StopJobRequestBody stopJobRequestBody = new com.aliyun.ververica20220718.models.StopJobRequestBody()
                .setStopStrategy("NONE");
        com.aliyun.ververica20220718.models.StopJobRequest stopJobRequest = new com.aliyun.ververica20220718.models.StopJobRequest()
                .setBody(stopJobRequestBody);
        com.aliyun.teautil.models.RuntimeOptions runtime = new com.aliyun.teautil.models.RuntimeOptions();
        try {
            StopJobResponse response = client.stopJobWithOptions("test-default", "7970e881-****-****-****-1a3746710878", stopJobRequest, stopJobHeaders, runtime);
            System.out.println(JSON.toJSON(response.getBody().getData()));
        } catch (TeaException error) {
            // This code is for demonstration only. Handle exceptions with care. Do not ignore exceptions in your project.
            // Error message
            System.out.println(error.getMessage());
            // Diagnosis address
            System.out.println(error.getData().get("Recommend"));
            com.aliyun.teautil.Common.assertAsString(error.message);
        } catch (Exception _error) {
            TeaException error = new TeaException(_error.getMessage(), _error);
            // This code is for demonstration only. Handle exceptions with care. Do not ignore exceptions in your project.
            // Error message
            System.out.println(error.getMessage());
            // Diagnosis address
            System.out.println(error.getData().get("Recommend"));
            com.aliyun.teautil.Common.assertAsString(error.message);
        }
    }
}
```

## **References**

For more information about the Python SDK, see [Python SDK](/help/en/flink/realtime-flink/developer-reference/python-sdk-reference).
