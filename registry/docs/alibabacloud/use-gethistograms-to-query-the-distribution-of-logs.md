This topic describes how to call the GetHistograms operation of Simple Log Service SDK for Java to query the distribution of logs within a specific time range and provides sample code.

## Prerequisites

-   A Resource Access Management (RAM) user is created, and the required permissions are granted to the RAM user. For more information, see [Create a RAM user and grant permissions to the RAM user](/help/en/sls/using-the-openapi-example#78541bf01a5df).
    
-   The **ALIBABA\_CLOUD\_ACCESS\_KEY\_ID** and **ALIBABA\_CLOUD\_ACCESS\_KEY\_SECRET** environment variables are configured. For more information, see [Configure environment variables in Linux, macOS, and Windows](/help/en/sdk/developer-reference/configure-the-alibaba-cloud-accesskey-environment-variable-on-linux-macos-and-windows-systems).
    
    **Important**
    
    -   The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. We recommend that you use the AccessKey pair of a RAM user to call API operations or perform routine O&M.
        
    -   We recommend that you do not save the AccessKey ID or AccessKey secret in your project code. Otherwise, the AccessKey pair may be leaked, and the security of all resources within your account may be compromised.
        
    
-   Simple Log Service SDK for Java is installed. For more information, see [Install Simple Log Service SDK for Java](/help/en/sls/developer-reference/install-log-service-sdk-for-java#task-2094103).
    
-   Logs are written to a Logstore, and indexing is enabled for the Logstore. For more information, see [Sample code that is used to create a Logstore](/help/en/sls/developer-reference/use-log-service-sdk-for-java-to-manage-a-logstore#section-g08-zi5-l1q) and [Create indexes](/help/en/sls/create-indexes#task-jqz-v55-cfb).
    

## Usage notes

In this example, the public Simple Log Service endpoint for the China (Hangzhou) region is used, which is `https://cn-hangzhou.log.aliyuncs.com`. If you want to access Simple Log Service by using other Alibaba Cloud services that reside in the same region as your project, you can use the internal Simple Log Service endpoint, which is `https://cn-hangzhou-intranet.log.aliyuncs.com`. For more information about the supported regions and endpoints of Simple Log Service, see [Endpoints](/help/en/sls/developer-reference/service-entrance#title-bqu-zsi-7nv).

## Raw log

```
body_bytes_sent:1750
host:www.example.com
http_referer:www.example.com
http_user_agent:Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_6; it-it) AppleWebKit/533.20.25 (KHTML, like Gecko) Version/5.0.4 Safari/533.20.27
http_x_forwarded_for:203.0.XX.XX
remote_addr:203.0.XX.XX
remote_user:p288
request_length:13741
request_method:GET
request_time:71
request_uri:/request/path-1/file-1
http_code:200
time_local:11/Aug/2021:06:52:27
upstream_response_time:0.66
```

## Sample code

The following sample code provides an example on how to query the distribution of access requests from 47.100.XX.XX within an hour:

```
import com.aliyun.openservices.log.Client;
import com.aliyun.openservices.log.common.Histogram;
import com.aliyun.openservices.log.exception.LogException;
import com.aliyun.openservices.log.response.GetHistogramsResponse;

public class GetHistograms {
    public static void main(String[] args) throws LogException {
        // In this example, the AccessKey ID and AccessKey secret are obtained from environment variables. 
        String accessId = System.getenv("ALIBABA_CLOUD_ACCESS_KEY_ID");
        String accessKey = System.getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET");
        // The name of the project. 
        String projectName = "ali-test-project";
        // The Simple Log Service endpoint. In this example, the Simple Log Service endpoint for the China (Hangzhou) region is used. Replace the parameter value with the actual endpoint. 
        String host = "https://cn-hangzhou.log.aliyuncs.com";

        // Create a Simple Log Service client. 
        Client client = new Client(host, accessId, accessKey);

        try {
            // The name of the Logstore. 
            String logstoreName = "ali-test-logstore";

            // Query the distribution of access requests from 47.100.XX.XX within an hour. 
            String query = "remote_addr:47.100.XX.XX";
            System.out.println(String.format("ready to get histograms from %s",logstoreName));

            // The fromTime and toTime parameters specify the start time and end time of the time range within which you want to query logs. The values of the parameters are UNIX timestamps. Set the time range to 1 hour. 
            int fromTime = (int) (System.currentTimeMillis()/1000 - 3600);
            int toTime = fromTime + 3600;

            GetHistogramsResponse response = client.GetHistograms(projectName,logstoreName,fromTime,toTime,"",query);
            for (Histogram histogram : response.GetHistograms()) {
                // Only the subintervals within which logs are distributed are returned. 
                if (0 < histogram.GetCount()){
                    // The number of logs that are returned. 
                    System.out.println("log number is :" + histogram.GetCount());
                    // The start time of the subinterval. 
                    System.out.println("from time is :" + histogram.GetFrom());
                    // The end time of the subinterval. 
                    System.out.println("to time is :" + histogram.GetTo());
                    // Check whether the query result in the subinterval is complete. 
                    System.out.println("is completed :" + histogram.IsCompleted());
                }
            }
            System.out.println(String.format("get histograms from %s success",logstoreName));

        } catch (LogException e) {
            System.out.println("LogException e :" + e.toString());
            System.out.println("error code :" + e.GetErrorCode());
            System.out.println("error message :" + e.GetErrorMessage());
            throw e;
        }
    }
}
```

The following sample code shows the expected results. The number of access requests from 47.100.XX.XX within 1 hour is 10, and the query result is complete.

```
ready to get histograms from nginx-moni
log number is :10
from time is :1667875920
to time is :1667879520
is completed :true
get histograms from nginx-moni success
```

## References

-   If the response that is returned by Log Service contains error information after you call an API operation, the call fails. You can handle errors based on the error codes that are returned when API calls fail. For more information, see [Error codes](/help/en/sls/developer-reference/error-codes#reference-ypb-rtq-12b).
-   Alibaba Cloud OpenAPI Explorer provides debugging capabilities, SDKs, examples, and related documents. You can use OpenAPI Explorer to debug Log Service API operations without the need to manually encapsulate or sign requests. For more information, visit [OpenAPI Portal](https://next.api.alibabacloud.com/api/Sls/2020-12-30/CreateProject?lang=JAVA&sdkStyle=dara&params=%7B%7D).
-   Log Service provides the command-line interface (CLI) to meet the requirements for automated configurations in Log Service. For more information, see [Log Service CLI](/help/en/sls/developer-reference/overview-of-log-service-cli#concept-wzj-vhf-lfb).
-   For more information about the GetHistograms operation, see [GetHistograms](/help/en/sls/api-gethistograms#doc-api-Sls-GetHistograms).
    
-   For more information about sample code, see [Alibaba Cloud Log Service SDK for Java](https://github.com/aliyun/aliyun-log-java-sdk) on GitHub.
