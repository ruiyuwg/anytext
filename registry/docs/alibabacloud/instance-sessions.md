Instance sessions allow you to view the information of sessions between an ApsaraDB for MongoDB instance and a client in real time, such as the client information, commands that are run, and connection duration. You can also terminate abnormal sessions based on your business requirements.

## Prerequisites

The instance is a replica set instance or a sharded cluster instance that uses the MongoDB protocol.

## Procedure

1.  Go to the [Replica Set Instances](https://mongodb.console.alibabacloud.com/replicate/instances) or [Sharded Cluster Instances](https://mongodb.console.alibabacloud.com/sharding/instances) page. In the top navigation bar, select the region in which the instance resides. Then, find the instance and click the ID of the instance.
    
2.  In the left-side navigation pane of the instance details page, choose **CloudDBA** > **Sessions**.
    
3.  On the **Instance Sessions** tab, select the node whose sessions you want to view from the **Current Node** drop-down list above the session list.
    
    ![实例会话](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3645298951/p58965.png)
    
    **Note**
    
    -   If you turn on **Auto Refresh**, the system updates session data every 5 seconds. By default, only active sessions are displayed. You can turn on **Display All** to view active and inactive sessions.
        
    -   In the **Session Statistics** section, you can view the information of sessions in the **Overview**, **Statistics by Client**, and **Statistics by Namespace** tables.
        
    

## Terminate instance sessions

**Warning**

To avoid an instance exception, we recommend that you do not terminate system-level sessions.

1.  In the **Instance Sessions** section, select the sessions that you want to terminate, and click **Kill Selected**.
    
    ![终结会话](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2945098561/p58996.png)
    
2.  In the **Terminate Session** message, click **Kill**.
