This topic describes how to get started with Simple Log Service SDK for C++ and perform common operations.

## Prerequisites

-   A Resource Access Management (RAM) user is created, and the required permissions are granted to the RAM user. For more information, see [Create a RAM user and grant permissions to the RAM user](/help/en/sls/using-the-openapi-example#78541bf01a5df).
    
-   The **ALIBABA\_CLOUD\_ACCESS\_KEY\_ID** and **ALIBABA\_CLOUD\_ACCESS\_KEY\_SECRET** environment variables are configured. For more information, see [Configure environment variables in Linux, macOS, and Windows](/help/en/sdk/developer-reference/configure-the-alibaba-cloud-accesskey-environment-variable-on-linux-macos-and-windows-systems).
    
    **Important**
    
    -   The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. We recommend that you use the AccessKey pair of a RAM user to call API operations or perform routine O&M.
        
    -   We recommend that you do not save the AccessKey ID or AccessKey secret in your project code. Otherwise, the AccessKey pair may be leaked, and the security of all resources within your account may be compromised.
        
    
-   Simple Log Service SDK for C++ is installed. For more information, see [Install Simple Log Service SDK for C++](/help/en/sls/developer-reference/install-log-service-sdk-for-cpp#task-2148661).
    

## Sample code

LogClient is a C++ client that you can use to manage Simple Log Service resources, such as projects and Logstores. Before you can use Simple Log Service SDK for C++ to initiate a request, you must initialize a client instance. Example:

```
#include "client.h"
#include "common.h"
#include <string>
#include <cstdlib>
#include <iostream>
#include <unistd.h>
using namespace aliyun_log_sdk_v6;
using namespace std;
int main(int argc,char ** argv)
{
    // The Simple Log Service endpoint. In this example, the Simple Log Service endpoint for the China (Hangzhou) region is used. Replace the parameter value with the actual endpoint. 
    string endpoint = "cn-hangzhou.log.aliyuncs.com";
    // Configure environment variables. In this example, the AccessKey ID and AccessKey secret are obtained from environment variables.  
    string accessKeyId = (string)getenv("ALIBABA_CLOUD_ACCESS_KEY_ID");
    string accessKey = (string)getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET");
    // The name of the project. 
    string project = "";
    // The name of the Logstore. 
    string logstore = "";
    // The log topic. 
    string topic = "";
    // Create a Simple Log Service client. 
    LOGClient * ptr = new LOGClient(endpoint,accessKeyId,accessKey,LOG_REQUEST_TIMEOUT,"127.0.0.1",false);
    // Construct log data. 
    vector<LogItem> logGroup;
    for (int i = 0;i < 1;++i)
    {
        logGroup.push_back(LogItem());
        LogItem & item =  logGroup.back();
        item.timestamp = time(NULL) ;
        item.source="127.0.0.1";
        item.topic=topic;
        item.data.push_back(make_pair<string,string>("status","200"));
        item.data.push_back(make_pair<string,string>("latency","126"));
    }
    try{
        // Write logs. 
        ptr -> DeleteConsumerGroup(project,logstore,"test-consumer-group");
        uint32_t shardId = 2;
        int32_t beginTime =  time(NULL);
        ptr -> PostLogStoreLogs(project,logstore,topic,logGroup);
        sleep(1);
        ptr -> PostLogStoreLogs(project,logstore,topic,logGroup);
        sleep(1);
        int32_t endTime = time(NULL);
        ptr -> PostLogStoreLogs(project,logstore,topic,logGroup);
        sleep(1);
        ptr -> PostLogStoreLogs(project,logstore,topic,logGroup);
        sleep(1);
        // Query logs. 
        GetCursorResponse beginCursorResp = ptr->GetCursor(project, logstore, shardId, beginTime);
        GetCursorResponse endCursorResp = ptr->GetCursor(project, logstore, shardId, endTime);
        GetBatchLogResponse getLogResp = ptr->GetBatchLog(project, logstore, shardId, 1000, beginCursorResp.result);
        cout << getLogResp.result.logGroups.size() << "\t" << getLogResp.result.logGroupCount << endl;
        getLogResp = ptr->GetBatchLog(project, logstore, 2, 1000, beginCursorResp.result, endCursorResp.result);
        cout << getLogResp.result.logGroups.size() << "\t" << getLogResp.result.logGroupCount << endl;

        ListConsumerGroupResponse lrs = ptr -> ListConsumerGroup(project, logstore);
        for(int i = 0; i < lrs.consumerGroups.size(); ++i)
            cout<<lrs.consumerGroups[i].GetConsumerGroupName()<<", " <<lrs.consumerGroups[i].GetTimeoutInSec()<<", " <<lrs.consumerGroups[i].GetInOrder()<<endl;
        ptr->UpdateCheckpoint(project, logstore, "hahhah", 0, "V0hBVFRIRlVDSw==");
        ListCheckpointResponse lcps = ptr -> ListCheckpoint(project, logstore, "hahhah");
        for(int i =0; i < lcps.consumerGroupCheckpoints.size(); ++i)
        {
            cout<<lcps.consumerGroupCheckpoints[i].GetShard() <<", " << lcps.consumerGroupCheckpoints[i].GetCheckpoint()<<", "<<lcps.consumerGroupCheckpoints[i].GetUpdateTime()<<endl;
        }
        while(true){
            HeartbeatResponse resp = ptr->ConsumerGroupHeartbeat(project, logstore, "hahhah", "cc1", std::vector<uint32_t>());
            cout<<"cc1, heartbeat: ";
            for(std::vector<uint32_t>::const_iterator it = resp.shards.begin(); it != resp.shards.end(); ++it)
                cout<<*it<<", ";
            cout<<endl;
            resp = ptr->ConsumerGroupHeartbeat(project, logstore, "hahhah", "cc2", std::vector<uint32_t>());
            cout<<"cc2, heartbeat: ";
            for(std::vector<uint32_t>::const_iterator it = resp.shards.begin(); it != resp.shards.end(); ++it)
                cout<<*it<<", ";
            cout<<endl;
            usleep(2 * 1000 * 1000);
        }
    }
    catch(LOGException & e)
    {
        cout<<e.GetErrorCode()<<":"<<e.GetMessage()<<endl;
    }
    delete ptr;
}
```

For more information about sample code, see [Alibaba Cloud Simple Log Service SDK for C++](https://github.com/aliyun/aliyun-log-cpp-sdk).
