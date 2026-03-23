An endpoint is a domain name of an Alibaba Cloud service API. For example, an endpoint of Elastic Compute Service (ECS) can be ecs.cn-hangzhou.aliyuncs.com. Each Alibaba Cloud service has its unique endpoints. Each endpoint of a service may vary based on the region. This topic describes how to configure an endpoint in Alibaba Cloud SDK V2.0 for Go.

## Configure an endpoint to which API requests are sent

Alibaba Cloud SDK V2.0 provides two methods for configuring an endpoint. The following section describes the methods based on their priority in descending order.

1.  Specify a custom endpoint. You can specify an endpoint when you initialize a client. You can query an endpoint in [OpenAPI Explorer](https://next.api.alibabacloud.com/api/Ecs/2014-05-26/RunInstances?lang=SWIFT). For more information, see the "Appendix: Query an endpoint" section of this topic.
    
    ```
    func main() {
        config := &openapi.Config{
            // Omit the credential configuration.
            // The endpoint that you want to access.
            Endpoint: tea.String("<endpoint>"),
        }
        client, _err = ecs20140526.NewClient(config)
    }
    ```
    
2.  Specify a custom region ID.
    
    -   If the SDK for an Alibaba Cloud service contains the relationship object of region IDs and endpoints and the specified region ID is included in the relationship object, you can obtain an endpoint from the relationship object.
        
    -   If the SDK for an Alibaba Cloud service does not contain the relationship object of region IDs and endpoints or the specified region ID is not included in the relationship object, an endpoint is automatically concatenated based on concatenation rules.
        
    
    ```
    func main() {
        config := &openapi.Config{
            // Omit the credential configuration.
            // The region that you want to access.
            RegionId: tea.String("<RegionId>"),
        }
        client, _err := ecs20140526.NewClient(config)
    }
    ```
    

### Scenarios in which VPC endpoints are used

We recommend that you configure VPC endpoints if you use Alibaba Cloud SDKs to call API operations and your business has the following requirements:

-   Business systems are deployed both in an on-premises data center and a cloud data center. Different business modules are built based on VPC networks to build an isolated cloud environment. The data centers communicate with each other over the Internet.
    
-   A cloud data center is deployed based on VPC networks. It communicates with the on-premises data center over an Express Connect circuit to implement hybrid cloud connections. This ensures the security of core user data and helps respond to workload fluctuations and fast data synchronization.
    
-   Multiple applications deployed based on VPC networks need to provide external services, and the workload of the applications fluctuates at different points in time. In this case, multiple IP addresses need to share bandwidth and traffic fluctuations need to be reduced, thus reducing costs.
    
-   Cloud services are constructed based on VPC networks. To reduce network latency for users in different regions, business systems are deployed on different nodes. High bandwidth connections between these nodes are required to optimize user experience.
    

## Configure an endpoint to request authentication information

Some API operations can be called to configure an endpoint of an open platform. If you do not configure an endpoint, the default public endpoint is used. You can use the endpoint to call the file upload authentication service and then obtain authentication information and the information about the default Object Storage Service (OSS) bucket.

-   The endpoint that is used for authentication. You can configure a virtual private cloud (VPC) endpoint to request authentication information over a VPC. The authentication information is used for file uploads.
    
    ```
    // Omit the credential configuration package main.
    
    import (
        "encoding/json"
        "fmt"
        "os"
    
        openapi "github.com/alibabacloud-go/darabonba-openapi/v2/client"
        facebody20191230 "github.com/alibabacloud-go/facebody-20191230/v4/client"
        util "github.com/alibabacloud-go/tea-utils/v2/service"
        "github.com/alibabacloud-go/tea/tea"
    )
    
    func main() {
        config := &openapi.Config{
            // Omit the credential configuration.
            // The region that you want to access.
            RegionId: tea.String("<RegionId>"),
            // Configure the VPC endpoint based on the region ID.
            OpenPlatformEndpoint: tea.String("openplatform-vpc.cn-shanghai.aliyuncs.com"),
        }
        client, err := facebody20191230.NewClient(config)
        if err != nil {
            panic(err)
        }
        f, err := os.Open("The directory of the file that you want to upload in your computer")
        if err != nil {
            panic(err)
        }
        request := &facebody20191230.DetectBodyCountAdvanceRequest{}
        request.SetImageURLObject(f)
        // Create a RuntimeOptions instance and specify runtime parameters. 
        runtime := &util.RuntimeOptions{}
        runtime.ReadTimeout = tea.Int(10000)
        resp, err := client.DetectBodyCountAdvance(request, runtime)
        if err != nil {
            panic(err)
        }
        // The response, which contains the body and headers that are returned by the server side.
        body, err := json.Marshal(resp.Body)
        if err != nil {
            panic(err)
        }
        headers, err := json.Marshal(resp.Headers)
        if err != nil {
            panic(err)
        }
        fmt.Printf("body: %s\n", string(body))
        fmt.Printf("header: %s\n", string(headers))
    }
    ```
    
-   The endpoint that is used for authentication. You can configure a VPC endpoint to request authentication information over an internal network or a VPC. The authentication information is used for file uploads.
    
    ```
    package main
    
    import (
        "encoding/json"
        "fmt"
        "os"
    
        openapi "github.com/alibabacloud-go/darabonba-openapi/v2/client"
        facebody20191230 "github.com/alibabacloud-go/facebody-20191230/v4/client"
        util "github.com/alibabacloud-go/tea-utils/v2/service"
        "github.com/alibabacloud-go/tea/tea"
    )
    
    func main() {
        config := &openapi.Config{
            // Omit the credential configuration.
            // The region that you want to access.
            RegionId: tea.String("<RegionId>"),
            // Configure the VPC endpoint based on the region ID.
            OpenPlatformEndpoint: tea.String("openplatform-vpc.cn-shanghai.aliyuncs.com"),
            // Configure the OSS endpoint that you want to use to upload the file. If you set the endpoint type to internal, you can use an internal endpoint to upload the file to OSS over a VPC or the classic network. If you set the endpoint type to accelerate, you can use an accelerated endpoint outside the Chinese mainland to upload the file to OSS.
            EndpointType: tea.String("internal"),
        }
        client, err := facebody20191230.NewClient(config)
        if err != nil {
            panic(err)
        }
        f, err := os.Open("The directory of the file that you want to upload in your computer")
        if err != nil {
            panic(err)
        }
        request := &facebody20191230.DetectBodyCountAdvanceRequest{}
        request.SetImageURLObject(f)
        // Create a RuntimeOptions instance and specify runtime parameters. 
        runtime := &util.RuntimeOptions{}
        runtime.ReadTimeout = tea.Int(10000)
        resp, err := client.DetectBodyCountAdvance(request, runtime)
        if err != nil {
            panic(err)
        }
        // The response, which contains the body and headers that are returned by the server side.
        body, err := json.Marshal(resp.Body)
        if err != nil {
            panic(err)
        }
        headers, err := json.Marshal(resp.Headers)
        if err != nil {
            panic(err)
        }
        fmt.Printf("body: %s\n", string(body))
        fmt.Printf("header: %s\n", string(headers))
    }
    ```
    

### Appendix: Query an endpoint

You can query an endpoint in [OpenAPI Explorer](https://api.alibabacloud.com/).

1.  Select an Alibaba Cloud service on the homepage of OpenAPI Explorer. In this example, ECS is selected.
    

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8175185961/p716497.png)

2\. On the homepage of ECS, click the **Regions** tab.

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9175185961/p716500.png)

3\. Find the region that you want to specify and copy the endpoint of ECS in the region.

You can also query the endpoints of ECS on the Debugging page. On this page, move the pointer over Regions in the left-side navigation pane to view the endpoints of ECS.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9374807271/p813355.png)
