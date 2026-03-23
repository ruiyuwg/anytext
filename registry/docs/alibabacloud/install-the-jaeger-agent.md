Managed Service for OpenTelemetry allows you to use OpenTelemetry, Jaeger, Zipkin, and SkyWalking clients to report application trace data to the console. This topic describes how to install the Jaeger agent.

## Step 1: Obtain an endpoint

### New console

1.  Log on to the [Managed Service for OpenTelemetry console](https://tracing-sgnew.console.alibabacloud.com/). In the left-side navigation pane, click **Integration Center**.
    
2.  On the **Integration Center** page, click the **Jaeger** card in the **Open Source Frameworks** section.
    
3.  In the **Jaeger** panel, click the **Start Integration** tab, and then select a region in which you want to report data.
    
    **Note**
    
    Resources are automatically initialized in the region that you access for the first time.
    
4.  Configure the **Connection Type** and **Export Protocol** parameters and copy an endpoint.
    
    -   **Connection Type**: If your service is deployed on Alibaba Cloud and resides in the region that you selected, we recommend that you set this parameter to **Alibaba Cloud VPC Network**. Otherwise, set this parameter to **Public Network**.
        
    -   **Export Protocol**: Set this parameter to **gRPC** based on the protocol that is supported by the client.
        
    
    ![68](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4089386371/p902646.jpg)
    

### Old console

1.  Log on to the [Managed Service for OpenTelemetry console](https://tracing-sgnew.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, click **Cluster Configurations**. On the page that appears, click the **Access point information** tab.
    
3.  In the top navigation bar, select a region in which you want to report data. In the **Cluster Information** section, turn on **Show Token**.
    
4.  Set the **Client** parameter to **Jaeger**.
    
    In the **Related Information** column of the table, copy an endpoint.![jager中国.jpg](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9342607271/p831058.jpg)
    
    **Note**
    
    If your application is deployed in an Alibaba Cloud production environment, use a VPC endpoint. Otherwise, use a public endpoint.
    

## Step 2: Download and start the Jaeger agent

### ECS clusters

If your application is deployed in an Elastic Compute Service (ECS) cluster, you can start the Jaeger agent by performing the following operations:

1.  Download and decompress the [installation package of the Jaeger agent](https://github.com/jaegertracing/jaeger/tags).
    
    **Note**
    
    We recommend that you download the latest version of the Jaeger agent.
    
2.  Run the following command to start the Jaeger agent:
    
    ```
    nohup ./jaeger-agent --reporter.grpc.host-port=<endpoint> --agent.tags=<token>
    ```
    
    **Note**
    
    -   If your Jaeger agent is of V1.15.0 or an earlier version, replace `--agent.tags` with `--jaeger.tags`.
        
    -   Replace `<endpoint>` with the endpoint that you obtained in [Step 1](#section-poz-e1n-cmn).
        
    -   Replace `<token>` with the token that you obtained in [Step 1](#section-poz-e1n-cmn).
        
    

### Docker containers

If your application is deployed in a Docker container, we recommend that you start the Jaeger agent by running the docker run command. This reduces your O&M costs. Run the following command to start the Jaeger agent:

```
docker run -d\
  --rm \
  -p5775:5775/udp \
  -p6831:6831/udp \
  -p6832:6832/udp \
  -p5778:5778/tcp \
  jaegertracing/jaeger-agent:<version> \
  --reporter.grpc.host-port=<endpoint> \
  --agent.tags=<token>
```

**Note**

Perform the following operations on the parameters in the docker run command:

-   If your Jaeger agent is of V1.15.0 or an earlier version, replace `--agent.tags` with `--jaeger.tags`.
    
-   Replace `<version>` with the version of the Jaeger agent, such as 1.23. For more information about other available versions, visit [jaegertracing/jaeger-agent](https://hub.docker.com/r/jaegertracing/jaeger-agent/tags?page=1&ordering=last_updated).
    
-   Replace `<endpoint>` with the endpoint that you obtained in [Step 1](#section-poz-e1n-cmn).
    
-   Replace `<token>` with the token that you obtained in [Step 1](#section-poz-e1n-cmn).
    

## Related topics

-   If your application is deployed in a Kubernetes cluster and you need to use Jaeger to report trace data, you must install a Jaeger client in the Kubernetes cluster. For more information, see [Operator for Kubernetes](https://www.jaegertracing.io/docs/1.24/operator/).
    
-   After the Jaeger agent is installed, you can use the Jaeger client to report the trace data of the application to the Managed Service for OpenTelemetry console. For more information, see [Use Jaeger to report Java application data](/help/en/opentelemetry/user-guide/use-jaeger-to-report-java-application-data).
