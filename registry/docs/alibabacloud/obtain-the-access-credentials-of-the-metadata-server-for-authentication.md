Spot Elastic Compute Service (ECS) instances may be forcefully reclaimed due to market price changes or insufficient resources. If your business is sensitive to instance interruptions, you must detect and respond to spot instance interruption events at the earliest opportunity. This topic describes how to detect and respond to spot instance interruption events.

## **Detect spot instance interruption events**

## **Use an ECS SDK**

You can call the [DescribeInstances](/help/en/ecs/api-describeinstances#DescribeInstances) operation to query information of ECS instances and determine whether a spot instance is in the To Be Recycled state based on the OperationLocks array in the response.

-   If the OperationLocks array for a spot instance is empty, the instance is available.
    
-   If the OperationLocks array for a spot instance contains the `**LockReason**` parameter that is set to `**Recycling**`, the spot instance is interrupted and in the To Be Recycled state.
    

### **Example of querying spot instance interruption events by using an ECS SDK**

#### **Preparations**

1.  **Create an AccessKey pair**
    
    Create an AccessKey pair for a Resource Access Management (RAM) user. An Alibaba Cloud account has all permissions on resources. If the AccessKey pair of your Alibaba Cloud account is leaked, your resources are exposed to great risks. We recommend that you use the AccessKey pair of a RAM user. For information about how to create an AccessKey pair, see [Create an AccessKey pair](/help/en/ram/user-guide/create-an-accesskey-pair).
    
2.  **Grant permissions on ECS to the RAM user**
    
    Grant permissions on ECS resources to the RAM user that you want to use. The sample code provided in this topic queries information about ECS instances. To grant the RAM user the permissions to run the sample code, we recommend that you attach the following policy to the RAM user.
    
    **Cloud service**
    
    **Policy**
    
    ECS
    
    AliyunECSFullAccess
    
3.  **Configure access credentials**
    
    Configure the AccessKey pair of the RAM user that you want to use in environment variables. The sample code provided in this topic reads the AccessKey pair from the environment variables and uses the AccessKey pair as credentials to access Alibaba Cloud services. For information about how to configure an AccessKey pair in environment variables, see [Configure environment variables in Linux, macOS, and Windows](/help/en/sdk/developer-reference/configure-the-alibaba-cloud-accesskey-environment-variable-on-linux-macos-and-windows-systems).
    
4.  **Install an ECS SDK**.
    
    Obtain ECS SDK for Java. In this example, ECS SDK for Java is installed by adding Maven dependencies. For information about other installation methods, see [Install ECS SDK for Java](https://next.api.alibabacloud.com/api-tools/sdk/Ecs?version=2014-05-26&language=java-tea&tab=primer-doc).
    
    Sample code used to add Maven dependencies:
    
    ```
    <dependencies>
        <dependency>
            <groupId>com.aliyun</groupId>
            <artifactId>ecs20140526</artifactId>
            <version>5.3.0</version>
        </dependency>
    </dependencies>
    ```
    

#### **Initialize the client**

Alibaba Cloud SDKs support multiple access credentials, such as AccessKey pairs and Security Token Service (STS) tokens, to initialize clients. For more information, see [Manage access credentials](/help/en/sdk/developer-reference/v2-manage-access-credentials). In this example, an AccessKey pair is used to initialize a client.

```
import com.aliyun.ecs20140526.Client;
import com.aliyun.teaopenapi.models.Config;

public class Sample {
    private static Client createClient() throws Exception {
        Config config = new Config()
                // Required. Make sure that the ALIBABA_CLOUD_ACCESS_KEY_ID environment variable is configured. 
                .setAccessKeyId(System.getenv("ALIBABA_CLOUD_ACCESS_KEY_ID"))
                // Required. Make sure that the ALIBABA_CLOUD_ACCESS_KEY_SECRET environment variable is configured. 
                .setAccessKeySecret(System.getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET"))
                // Specify an endpoint. For information about endpoints, visit https://api.aliyun.com/product/Ecs.
                .setEndpoint("ecs.cn-hangzhou.aliyuncs.com");
        return new Client(config);
    }
}
```

#### **Create a request object for the API operation**

Before you create a request object, view the parameters of the [API operation](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describeinstances) that you want to call.

```
// Create a request object.
DescribeInstancesRequest request = new DescribeInstancesRequest().setRegionId("cn-hangzhou");
```

#### **Initiate a call**

When you call an API operation from a client, you can specify runtime parameters, such as timeout parameters and proxy parameters. For more information, see [Advanced settings](/help/en/sdk/developer-reference/advanced-configuration/).

```
// Specify the runtime parameters.
RuntimeOptions runtime = new RuntimeOptions();
// Call the DescribeInstances operation.
DescribeInstancesResponse response = client.describeInstancesWithOptions(request, runtime);
System.out.println(response.body.toMap());
```

#### **Handle exceptions**

ECS SDK for Java classifies exceptions into the following types:

-   TeaUnretryableException: In most cases, exceptions of this type are caused by network errors and are reported when the maximum number of retries is reached.
    
-   TeaException: In most cases, this type of exception is caused by business errors.
    

**We recommend that you properly handle exceptions by performing operations, such as reporting exceptions, logging exceptions, and performing retries, to ensure the robustness and stability of your system.**

#### **Example**

```
import com.aliyun.ecs20140526.Client;
import com.aliyun.ecs20140526.models.DescribeInstancesRequest;
import com.aliyun.ecs20140526.models.DescribeInstancesResponse;
import com.aliyun.ecs20140526.models.DescribeInstancesResponseBody;
import com.aliyun.tea.TeaException;
import com.aliyun.tea.TeaUnretryableException;
import com.aliyun.teaopenapi.models.Config;
import com.aliyun.teautil.models.RuntimeOptions;
import com.alibaba.fastjson.JSONArray;

import java.util.Arrays;

public class Sample {
    private static Client createClient() throws Exception {
        Config config = new Config()
                // Required. Make sure that the ALIBABA_CLOUD_ACCESS_KEY_ID environment variable is configured. 
                .setAccessKeyId(System.getenv("ALIBABA_CLOUD_ACCESS_KEY_ID"))
                // Required. Make sure that the ALIBABA_CLOUD_ACCESS_KEY_SECRET environment variable is configured. 
                .setAccessKeySecret(System.getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET"))
                // Specify an endpoint. For information about endpoints, visit https://api.alibabacloud.com/product/Ecs.
                .setEndpoint("ecs.cn-hangzhou.aliyuncs.com");
        return new Client(config);
    }

    public static void main(String[] args) {
        try {
            Client client = Sample.createClient();
            // Create a request object.
            // Specify the IDs of one or more ECS instances. 
            JSONArray instanceIds = new JSONArray();
            instanceIds.addAll(Arrays.asList("i-bp145cvd0exyqj****","i-bp1gehfgfrrk4lah****"));
            DescribeInstancesRequest request = new DescribeInstancesRequest()
                    .setRegionId("cn-hangzhou")
                    .setInstanceIds(instanceIds.toJSONString());
            // Specify the runtime parameters.
            RuntimeOptions runtime = new RuntimeOptions();
            while (!instanceIds.isEmpty()) {
              // Call the DescribeInstances operation.
              DescribeInstancesResponse response = client.describeInstancesWithOptions(request, runtime);
              // Obtain instance-specific results. 
              DescribeInstancesResponseBody responseBody = response.getBody();
              DescribeInstancesResponseBody.DescribeInstancesResponseBodyInstances instanceList = responseBody.getInstances();
              // Obtain instance information and determine the status of instances based on the value of the lockReason parameter.
              if (instanceList != null && instanceList.getInstance()!= null && !instanceList.getInstance().isEmpty()) {
                  for (DescribeInstancesResponseBody.DescribeInstancesResponseBodyInstancesInstance instance : instanceList.getInstance()) {
                      // View the IDs and zone IDs of the queried instances. 
                      System.out.println("result:instance:" + instance.getInstanceId() + ",az:" + instance.getZoneId());
                      if (instance.getOperationLocks() != null ) {
                          DescribeInstancesResponseBody.DescribeInstancesResponseBodyInstancesInstanceOperationLocks operationLocks  = instance.getOperationLocks();
                          if(operationLocks.getLockReason()!=null && !operationLocks.getLockReason().isEmpty()){
                              for (DescribeInstancesResponseBody.DescribeInstancesResponseBodyInstancesInstanceOperationLocksLockReason lockReason : operationLocks.getLockReason()) {
                                  // If an instance is locked, view the instance ID and the reason why the instance is locked. 
                                  System.out.println("instance:" + instance.getInstanceId() + "-->lockReason:" + lockReason.getLockReason() + ",vmStatus:" + instance.getStatus());
                                  if ("Recycling".equals(lockReason.getLockReason())) {
                                      // View the IDs of the instances to be reclaimed. 
                                      System.out.println("spot instance will be recycled immediately, instance id:" + instance.getInstanceId());
                                      instanceIds.remove(instance.getInstanceId());
                                  }
                              }
                          }

                      }
                  }
                  // If a spot instance is not locked, the instance is queried every 2 minutes. 
                  System.out.print("try describeInstances again later ...");
                  Thread.sleep(2 * 60 * 1000);
              } else {
                  break;
              }
            }
        } catch (TeaUnretryableException ue) {
            // Handle exceptions with caution in actual business scenarios and do not ignore exceptions in your project. In this example, exceptions are provided only for reference. 
            ue.printStackTrace();
            // Display the error message.
            System.out.println(ue.getMessage());
            // Display the request message and query the request information when an error occurs.
            System.out.println(ue.getLastRequest());
        } catch (TeaException e) {
            // Handle exceptions with caution in actual business scenarios and do not ignore exceptions in your project. In this example, exceptions are provided only for reference. 
            e.printStackTrace();
            // Display the error code.
            System.out.println(e.getCode());
            // Display the error message that contains the request ID.
            System.out.println(e.getMessage());
            // Display the detailed error information that is returned by the server.
            System.out.println(e.getData());
        } catch (Exception e) {
            // Handle exceptions with caution in actual business scenarios and do not ignore exceptions in your project. In this example, exceptions are provided only for reference. 
            e.printStackTrace();
        }
    }
}
```

#### **Response**

The following response is returned if the reclamation of a spot instance is triggered:

```
result:instance:i-bp1i9c3qiv1qs6nc****,az:cn-hangzhou-i
instance:i-bp1i9c3qiv1qs6nc****-->lockReason:Recycling,vmStatus:Stopped
spot instance will be recycled immediately, instance id:i-bp1i9c3qiv1qs6nc****
```

## **Use instance metadata**

You can access the Metadata Service inside a spot instance to obtain the time when the instance is terminated (stopped and released). For information about instance metadata, see [Instance metadata](/help/en/ecs/user-guide/view-instance-metadata/).

Metadata item that specifies the termination time of the spot instance: `instance/spot/termination-time`

Values of the preceding metadata item:

-   If 404 is returned, the instance is available.
    
-   If a UTC timestamp such as `2015-01-05T18:02:00Z` is returned, the instance is due to be reclaimed at the specified time point.
    

Sample code:

#### **Linux ECS instance**

```
# Obtain the access credentials of the metadata server for authentication.
TOKEN=`curl -X PUT "http://100.100.100.200/latest/api/token" -H "X-aliyun-ecs-metadata-token-ttl-seconds:<Validity period of the metadata server access credentials>"`
# Query whether the spot instance is interrupted and reclaimed.
curl -H "X-aliyun-ecs-metadata-token: $TOKEN" http://100.100.100.200/latest/meta-data/instance/spot/termination-time
```

#### **Windows ECS instance**

```
# Obtain the access credentials of the metadata server for authentication.
$token = Invoke-RestMethod -Headers @{"X-aliyun-ecs-metadata-token-ttl-seconds" = "<Validity period of the metadata server access credentials>"} -Method PUT -Uri http://100.100.100.200/latest/api/token
# Query whether the spot instance is interrupted and reclaimed.
Invoke-RestMethod -Headers @{"X-aliyun-ecs-metadata-token" = $token} -Method GET -Uri http://100.100.100.200/latest/meta-data/instance/spot/termination-time
```

## **Use a CloudMonitor SDK**

ECS instance-related events are synchronized to CloudMonitor. You can call the [DescribeSystemEventAttribute](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-describesystemeventattribute) operation of CloudMonitor to query spot instance interruption events (`Instance:PreemptibleInstanceInterruption` events) and determine whether the interruption and reclamation of a spot instance is triggered based on the value of the action field in the `content` parameter in the response. If the value of the action field in the content parameter for a spot instance is `delete`, the interruption and reclamation of the instance is triggered.

### **Example of querying spot instance interruption events by using a CloudMonitor SDK**

#### **Preparations**

1.  **Create an AccessKey pair**
    
    Create an AccessKey pair for a RAM user. An Alibaba Cloud account has all permissions on resources. If the AccessKey pair of your Alibaba Cloud account is leaked, your resources are exposed to great risks. We recommend that you use the AccessKey pair of a RAM user. For information about how to create an AccessKey pair, see [Create an AccessKey pair](/help/en/ram/user-guide/create-an-accesskey-pair).
    
2.  **Grant permissions on CloudMonitor to the RAM user**
    
    Grant permissions on CloudMonitor to the RAM user that you want to use. The sample code provided in this topic queries system events. To grant the RAM user the permissions to run the sample code, we recommend that you attach the following policy to the RAM user.
    
    **Cloud service**
    
    **Policy**
    
    CloudMonitor
    
    AliyunCloudMonitorFullAccess
    
3.  **Configure access credentials**
    
    Configure the AccessKey pair of the RAM user that you want to use in environment variables. The sample code provided in this topic reads the AccessKey pair from the environment variables and uses the AccessKey pair as credentials to access Alibaba Cloud services. For information about how to configure an AccessKey pair in environment variables, see [Configure environment variables in Linux, macOS, and Windows](/help/en/sdk/developer-reference/configure-the-alibaba-cloud-accesskey-environment-variable-on-linux-macos-and-windows-systems).
    
4.  **Install a CloudMonitor SDK**
    
    Obtain CloudMonitor SDK for Java. In this example, CloudMonitor SDK for Java is installed by adding Maven dependencies. For information about other installation methods, see [Install CloudMonitor SDK for Java](https://next.api.alibabacloud.com/api-tools/sdk/Cms?spm=a2c4g.11186623.0.0.47a829f5wQEs71&version=2019-01-01&language=java-tea&tab=primer-doc).
    
    Sample code used to add Maven dependencies:
    
    ```
    <dependencies>
        <dependency>
          <groupId>com.aliyun</groupId>
          <artifactId>cms20190101</artifactId>
          <version>8.1.3</version>
        </dependency>
    </dependencies>
    ```
    

#### **Initialize the client**

Alibaba Cloud SDKs support multiple access credentials, such as AccessKey pairs and STS tokens, to initialize clients. For more information, see [Manage access credentials](/help/en/sdk/developer-reference/v2-manage-access-credentials). In this example, an AccessKey pair is used to initialize a client.

```
import com.aliyun.cms20190101.Client;
import com.aliyun.teaopenapi.models.Config;

public class Sample {
    private static Client createClient() throws Exception {
        Config config = new Config()
                // Required. Make sure that the ALIBABA_CLOUD_ACCESS_KEY_ID environment variable is configured. 
                .setAccessKeyId(System.getenv("ALIBABA_CLOUD_ACCESS_KEY_ID"))
                // Required. Make sure that the ALIBABA_CLOUD_ACCESS_KEY_SECRET environment variable is configured. 
                .setAccessKeySecret(System.getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET"))
                // Specify an endpoint. For information about endpoints, visit https://api.alibabacloud.com/product/Cms.
                .setEndpoint("metrics.cn-hangzhou.aliyuncs.com");
        return new Client(config);
    }
}
```

#### **Create a request object for the API operation**

Configure the following parameters of the [DescribeSystemEventAttribute](/help/en/cms/cloudmonitor-1-0/api-describesystemeventattribute#doc-api-Cms-DescribeSystemEventAttribute) operation, which are required to query spot instance interruption events.

**API**

**Parameter**

**Description**

[DescribeSystemEventAttribute](/help/en/cms/cloudmonitor-1-0/api-describesystemeventattribute#doc-api-Cms-DescribeSystemEventAttribute)

Product

The abbreviation of the service name. Set the value to _ECS_.

EventType

The type of the event. Set the value to StatusNotification.

Name

The name of the event. Set the value to Instance:PreemptibleInstanceInterruption.

```
// Create a request object.
DescribeSystemEventAttributeRequest request = new DescribeSystemEventAttributeRequest()
    .setProduct("ECS");
    .setEventType("StatusNotification");
     .setName("Instance:PreemptibleInstanceInterruption");
```

#### **Initiate a call**

When you call an API operation from a client, you can specify runtime parameters, such as timeout parameters and proxy parameters. For more information, see [Advanced settings](/help/en/sdk/developer-reference/advanced-configuration/).

```
// Specify the runtime parameters.
RuntimeOptions runtime = new RuntimeOptions();
// Call the DescribeInstances operation.
DescribeSystemEventAttributeResponse response = client.describeSystemEventAttributeWithOptions(request, runtime);
System.out.println(response.body.toMap());
```

#### **Handle exceptions**

CloudMonitor SDK for Java classifies exceptions into the following types:

-   TeaUnretryableException: In most cases, exceptions of this type are caused by network errors and are reported when the maximum number of retries is reached.
    
-   TeaException: In most cases, this type of exception is caused by business errors.
    

**We recommend that you properly handle exceptions by performing operations, such as reporting exceptions, logging exceptions, and performing retries, to ensure the robustness and stability of your system.**

#### **Example**

```
import com.aliyun.cms20190101.Client;
import com.aliyun.teaopenapi.models.Config;
import com.aliyun.cms20190101.models.DescribeSystemEventAttributeRequest;
import com.aliyun.cms20190101.models.DescribeSystemEventAttributeResponse;
import com.aliyun.tea.TeaException;
import com.aliyun.tea.TeaUnretryableException;
import com.aliyun.teaopenapi.models.Config;
import com.aliyun.teautil.models.RuntimeOptions;

public class Sample {
    private static Client createClient() throws Exception {
        Config config = new Config()
                // Required. Make sure that the ALIBABA_CLOUD_ACCESS_KEY_ID environment variable is configured.
                .setAccessKeyId(System.getenv("ALIBABA_CLOUD_ACCESS_KEY_ID"))
                // Required. Make sure that the ALIBABA_CLOUD_ACCESS_KEY_SECRET environment variable is configured. 
                .setAccessKeySecret(System.getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET"))
                // Specify an endpoint. For information about endpoints, visit https://api.alibabacloud.com/product/Ecs.
                .setEndpoint("metrics.cn-hangzhou.aliyuncs.com");
        return new Client(config);
    }

    public static void main(String[] args) {
        try {
            Client client = Sample.createClient();
            // Create a request object.
            DescribeSystemEventAttributeRequest request = new DescribeSystemEventAttributeRequest()
                .setProduct("ECS");
                .setEventType("StatusNotification");
                .setName("Instance:PreemptibleInstanceInterruption");
            // Specify the runtime parameters.
            RuntimeOptions runtime = new RuntimeOptions();
            // Call the DescribeSystemEventAttribute operation.
            DescribeSystemEventAttributeResponse response = client.describeSystemEventAttributeWithOptions(request, runtime);
            System.out.println(response.body.toMap());
        } catch (TeaUnretryableException ue) {
            // Handle exceptions with caution in actual business scenarios and do not ignore exceptions in your project. In this example, exceptions are provided only for reference.
            ue.printStackTrace();
            // Display the error message.
            System.out.println(ue.getMessage());
            // Display the request message and query the request information when an error occurs.
            System.out.println(ue.getLastRequest());
        } catch (TeaException e) {
            // Handle exceptions with caution in actual business scenarios and do not ignore exceptions in your project. In this example, exceptions are provided only for reference.
            e.printStackTrace();
            // Display the error code.
            System.out.println(e.getCode());
            // Display the error message that contains the request ID.
            System.out.println(e.getMessage());
            // Display the detailed error information that is returned by the server.
            System.out.println(e.getData());
        } catch (Exception e) {
            // Handle exceptions with caution in actual business scenarios and do not ignore exceptions in your project. In this example, exceptions are provided only for reference.
            e.printStackTrace();
        }
    }
}
```

#### **Response**

Identify the interruption events of spot instances based on the response.

The following section shows a sample interruption event notification in the JSON format for a spot instance:

```
{
  "ver": "1.0",
  "id": "2256A988-0B26-4E2B-820A-8A********E5",
  "product": "ECS",
  "resourceId": "acs:ecs:cn-hangzhou:169070********30:instance/i-bp1ecr********5go2go",
  "level": "INFO",
  "name": "Instance:PreemptibleInstanceInterruption",
  "userId": "169070********30",
  "eventTime": "20190409T121826.922+0800",
  "regionId": "cn-hangzhou",
  "content": {
    "instanceId": "i-bp1ecr********5go2go",  
    "action": "delete"                       
  }
}
```

The following table describes the fields that are contained in the `content` parameter. For information about other parameters, see [DescribeSystemEventAttribute](/help/en/cms/cloudmonitor-1-0/api-describesystemeventattribute#doc-api-Cms-DescribeSystemEventAttribute).

**Field**

**Description**

**Example**

instanceId

The ID of the spot instance.

i-bp1ecr\*\*\*\*\*\*\*\*5go2go

action

The action on the spot instance. If the field is set to delete, the spot instance is interrupted and to be forcefully reclaimed.

delete

## Subscribe to system events in CloudMonitor

Subscribe to system events in CloudMonitor to monitor spot instance interruption events in real time, send alert notifications for the events based on the specified notification methods, such as by text message and by email, and push alert notifications to different push channels, such as Simple Message Queue (formerly MNS) (SMQ), Simple Log Service, Function Compute, and webhooks.

### **Workflow**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0854969671/CAEQQBiBgMDfm7__uBkiIDNjNTZiZTY2ZTU4NjRmNGY4ZGEwMDhjM2YwMWRjMjlj4804244_20241203152821.915.svg)

### **Procedure**

1.  **Create a push channel**
    
    ## SMQ
    
    1.  Log on to the [SMQ console](https://mns.console.alibabacloud.com/).
        
    2.  In the left-side navigation pane, choose **Queue Model** > **Queues**.
        
    3.  In the top navigation bar, select a region.
        
    4.  On the **Queues** page, click **Create Queue**.
        
    5.  In the **Create Queue** panel, configure the following parameters and click **OK**:
        
        -   **Name**: the name of the queue.
            
        -   **Maximum Message Length**: the maximum length of the message that is sent to the queue.
            
        -   **Long Polling Period**: the maximum duration for which long polling requests are held after the ReceiveMessage operation is called.
            
        -   **Visibility Timeout Period**: the duration for which a message stays in the Inactive state after the message is received from the queue.
            
        -   **Message Retention Period**: the maximum duration for which a message exists in the queue. After the specified retention period, the message is deleted regardless of whether the message is received.
            
        -   **Message Delay Period**: the period after which all messages sent to the queue are consumed.
            
        -   **Enable Logging Feature**: specifies whether to enable the logging feature.
            
        
        After the queue is created, it is displayed on the **Queues** page.
        
    
    ## Webhook
    
    **Important**
    
    The webhook service must be deployed on a server that has Internet access. Make sure that the webhook port of the server is open in the corresponding security groups and firewall.
    
    Sample code in Java:
    
    ```
    import org.springframework.http.ResponseEntity;
    import org.springframework.web.bind.annotation.PostMapping;
    import org.springframework.web.bind.annotation.RequestBody;
    import org.springframework.web.bind.annotation.RestController;
    
    @RestController
    public class WebhookController {
        @PostMapping("/callback")
        public ResponseEntity<String> receiveWebhook(@RequestBody String payload) {
            // Process the payload, such as logging or performing business logic.
            System.out.println("Received webhook payload: " + payload);
            // Return a success response.
            return ResponseEntity.ok("Webhook received");
        }
    }
    ```
    
2.  **Create a subscription policy**
    
    1.  Log on to the [CloudMonitor console](https://cloudmonitor.console.alibabacloud.com/).
        
    2.  In the left-side navigation pane, choose **Event Center > Event Subscription**.
        
    3.  On the **Subscription Policy** tab, click **Create Subscription Policy**.
        
    4.  On the **Create Subscription Policy** page, configure the parameters.
        
        Take note of the following parameters, which are required to subscribe to spot instance interruption events. For information about other parameters, see [Manage event subscriptions (Recommended)](/help/en/cms/cloudmonitor-1-0/user-guide/manage-notification-policies).
        
        -   **Basic information**: Enter a name and description for the subscription policy.
            
        -   **Alarm subscription**:
            
            -   **Subscription Type**: Select **System Events**.
                
            -   **Subscription Scope**:
                
            -   **Products**: Select **Elastic Compute Service (ECS)**.
                
            -   **Event Type**: Select **Status Notification**.
                
            -   **Event Name**: Select **Instance:PreemptibleInstanceInterruption**.
                
            -   **Event Level**: Select **Warning (Warning)**.
                
            -   **Application group**, **Event Content**, and **Event Resources**: Leave the parameters empty, which indicates that you subscribe to the **Instance:PreemptibleInstanceInterruption** system events of all ECS instances in all application groups that belong to the current account.
                
        -   **Combined Noise Reduction**: Use the default settings.
            
        -   **Notification**: For the **Custom Notification Method** parameter, use the default settings.
            
        -   **Push and Integration**: Click **Add Channel**. In the dialog box that appears, click **Increase Channels**. In the Create Push Channel panel, set the **Target type** parameter to the push channel that you created in Step 1. Then, follow the on-screen instructions to configure the other parameters. For information about push channels, see [Manage push channels](/help/en/cms/cloudmonitor-1-0/user-guide/manage-push-channels).
            
3.  **Simulate a spot instance interruption event**
    
    Spot instance interruption events are triggered events. When you develop an interruption event handler for a spot instance, you cannot debug the code. You can use the **Debug Event Subscription** feature of CloudMonitor to simulate a spot instance interruption event.
    
    1.  On the **Subscription Policy** tab, click **Debug Event Subscription**.
        
    2.  In the **Create Event Debugging** panel, set the **Products** parameter to **Elastic Compute Service (ECS)** and the **Name** parameter to **Instance:PreemptibleInstanceInterruption**.
        
        CloudMonitor automatically generates the debugging content in the JSON format. Replace the resource information in the debugging content with the information of the spot instance for which you want to simulate an interruption event.
        
        -   Replace the `<Alibaba Cloud account ID>` variable with the ID of your Alibaba Cloud account.
            
        -   Replace the `<resource-id>` and `<instanceId>` variables with the ID of the spot instance.
            
        -   Replace the `<Region ID>` variable with the region ID of the spot instance.
            
            ```
            {
                "product": "ECS",
                "resourceId": "acs:ecs:cn-shanghai:<Alibaba Cloud account ID>UID:instance/<resource-id>",
                "level": "WARN",
                "instanceName": "instanceName",
                "regionId": "<Region ID>",
                "groupId": "0",
                "name": "Instance:PreemptibleInstanceInterruption",
                "content": {
                    "instanceId": "i-2zeg014dfo4y892z***",
                    "instanceName": "wor***b73",
                    "action": "delete"
                },
                "status": "Normal"
            }
            ```
            
    3.  Click **OK**.
        
        The **Operation successful** message appears. CloudMonitor automatically sends a test alert notification based on the notification methods specified in the subscription policy.
        
4.  **Receive and view alert notifications for spot instance interruption events**
    
    #### **SMQ**
    
    1.  Log on to the [SMQ console](https://mns.console.alibabacloud.com/). In the left-side navigation pane, choose **Queue Model > Queues**.
        
    2.  In the top navigation bar, select a region. On the **Queues** page, find the queue that you want to manage and click **Send Messages** in the **Actions** column.
        
    3.  **(Optional)** In the **Receive Message** section of the **Quick Experience** page, click **Edit Parameters of Receiving Messages**. In the **Edit Parameters of Receiving Messages** panel, configure the **Receive Times** and **Polling Period** parameters and click **OK**.
        
    4.  On the **Quick Experience** page, click **Receive Message**. A list of messages appears in the **Receive Message** section.
        
    5.  **(Optional)** Find a message in the message list and click **Details** in the **Actions** column. In the **Message Details** dialog box, view the information about the message, such as the message content.
        
    
    #### **Webhook**
    
    View the invocation logs of the webhook service and the alert notifications pushed to the service.
    

## **Respond to spot instance interruption events**

Respond to spot instance interruption events based on your business scenarios and requirements. We recommend that you test applications to ensure that the applications can properly handle the interruption and reclamation of spot instances. Here are some ideas and suggestions for your reference:

-   **Gracefully handle spot instance interruptions**
    
    Respond to interruption event notifications in a timely manner, save task processing progress, clear resources, and terminate tasks.
    
-   **Data persistence and checkpoints**
    
    Periodically save task processing progress and intermediate results to persistent storage, such as on-premises files or databases, to ensure that important business data and configurations are retained. For information about how to retain and restore data for spot instances, see [Retain and restore data](/help/en/ecs/user-guide/preemptible-instance-data-retention-and-data-recovery-after-interrupt-reclamation).
    
-   **Check whether the service integration is successful**
    
    Simulate a spot instance interruption event in CloudMonitor and check whether applications respond as expected. For more information, see [Detect and respond to the interruption events of spot instances by using SMQ](/help/en/ecs/user-guide/receive-and-process-spot-instance-interrupt-notifications).
