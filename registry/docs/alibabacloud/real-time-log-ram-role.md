When you authorize Edge Security Acceleration (ESA) to deliver real-time logs to Alibaba Cloud Simple Log Service (SLS) or Object Storage Service (OSS), the system automatically creates the corresponding RAM role and grants the required permissions to the role. ESA can assume the role to access resources in the corresponding service.

## **RAM roles provided by Alibaba Cloud**

To meet the requirements of cross-service access, Alibaba Cloud provides the following two types of RAM roles that Alibaba Cloud services can assume:

-   Regular service roles
    
-   Service-linked roles
    

**Note**

For more information, see [Service-linked roles](/help/en/ram/user-guide/service-linked-roles).

## Service-linked role for SLS

## What is AliyunServiceRoleForESARealtimeLogPushSLS?

AliyunServiceRoleForESARealtimeLogPushSLS is a service-linked role that can be assumed by ESA. If you want to use the real-time log delivery feature of ESA to deliver real-time logs to SLS, ESA must assume the service-linked role to access SLS.

## Create AliyunServiceRoleForESARealtimeLogPushSLS

The first time you authorize ESA to deliver real-time logs to SLS, the system creates a service-linked role named AliyunServiceRoleForESARealtimeLogPushSLS and grants the required permissions to the role. After ESA assumes the service-linked role, you can access your SLS resources from ESA and perform the following operations:

-   Create and query projects.
    
-   Create and query Logstores.
    
-   Create log indexes.
    
-   Upload log files to Logstores.
    
    **Note**
    
    If ESA has assumed the AliyunServiceRoleForESARealtimeLogPushSLS service-linked role, the system does not create the role again.
    
    ```
    {
      "Version": "1",
      "Statement": [
        {
          "Effect": "Allow",
          "Action": [
            "log:PostLogStoreLogs",
            "log:GetLogStore",
            "log:CreateProject",
            "log:CreateLogStore",
            "log:CreateIndex",
            "log:UpdateIndex",
            "log:GetIndex",
            "log:CreateDashboard",
            "log:UpdateDashboard",
            "log:CreateSavedSearch",
            "log:UpdateSavedSearch",
            "log:ListProject",
            "log:GetProject",
            "log:ListLogStores"
          ],
          "Resource": "*"
        },
        {
          "Action": "ram:DeleteServiceLinkedRole",
          "Resource": "*",
          "Effect": "Allow",
          "Condition": {
            "StringEquals": {
              "ram:ServiceName": "esarealtimelogpushsls.dcdnservices.aliyuncs.com"
            }
          }
        }
      ]
    }
    ```
    

## Delete AliyunServiceRoleForESARealtimeLogPushSLS

If you no longer need to deliver real-time logs to SLS, you can perform the following steps to delete the AliyunServiceRoleForESARealtimeLogPushSLS service-linked role.

### **Delete delivery tasks**

The portal for deleting Edge Routine log delivery tasks is different from the portal for deleting the delivery tasks of the other three categories of logs. The following section describes the details.

## Delete Edge Routine log delivery tasks

1.  Log on to the [ESA console](https://esa.console.alibabacloud.com/siteManage/list). In the left-side navigation pane, choose **Analytics and Logs** > **Real-time Logs**.
    
2.  In the list of real-time log delivery tasks, find and delete the tasks that deliver real-time logs to SLS.
    

## Delete the delivery tasks of other types of logs

1.  In the ESA console, choose [Websites](https://esa.console.alibabacloud.com/siteManage/list) and click the website name you want to manage.
    
2.  In the left-side navigation pane, choose **Analytics and Logs** > **Real-time Logs**
    
3.  In the list of real-time log delivery tasks, find and delete the tasks that deliver real-time logs to SLS.
    

### **Delete the service-linked role**

1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Identities** **\>** **Roles**.
    
3.  On the **Roles** page, find the `AliyunServiceRoleForESARealtimeLogPushSLS` service-linked role and click **Delete Role**.
    

**Note**

If you fail to delete the service-linked role, check whether you have deleted all tasks that deliver real-time logs to SLS.

## Service-linked role for OSS

## What is AliyunESARealtimeLogPushOSSRole

AliyunESARealtimeLogPushOSSRole is a service-linked role that can be assumed by ESA. If you want to use the real-time log delivery feature of ESA to deliver real-time logs to OSS, ESA must assume the service-linked role to access OSS.

## Create AliyunESARealtimeLogPushOSSRole

The first time you authorize ESA to deliver real-time logs to OSS, the system creates a service-linked role named AliyunESARealtimeLogPushOSSRole and grants the required permissions to the role. After ESA assumes the service-linked role, you can access your OSS resources from ESA and perform the following operations:

-   Query the bucket list and the information about buckets.
    
-   Upload objects to the path of a specific bucket.
    

**Note**

If ESA has assumed the AliyunESARealtimeLogPushOSSRole service-linked role, the system does not create the role again.

```
{
  "Version": "1",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "oss:GetBucketInfo",
        "oss:ListBuckets",
        "oss:PutObject"
      ],
      "Resource": "*"
    }
  ]
}
```

## Delete AliyunESARealtimeLogPushOSSRole

If you no longer need to deliver real-time logs to OSS, you can perform the following steps to delete the AliyunESARealtimeLogPushOSSRole service-linked role.

### **Delete delivery tasks**

The portal for deleting Edge Routine log delivery tasks is different from the portal for deleting the delivery tasks of the other three categories of logs. The following section describes the details.

## Delete Edge Routine log delivery tasks

1.  Log on to the [ESA console](https://esa.console.alibabacloud.com/siteManage/list). In the left-side navigation pane, choose **Analytics and Logs** > **Real-time Logs**.
    
2.  In the list of real-time log delivery tasks, find and delete the tasks that deliver real-time logs to OSS.
    

## Delete the delivery tasks of other categories of logs

1.  In the ESA console, choose [Websites](https://esa.console.alibabacloud.com/siteManage/list) and click the website name you want to manage.
    
2.  In the left-side navigation pane, choose **Analytics and Logs** > **Real-time Logs**.
    
3.  In the list of real-time log delivery tasks, find and delete the tasks that deliver real-time logs to OSS.
    

### **Delete the service-linked role**

1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Identities** **\>** **Roles**.
    
3.  On the **Roles** page, find the AliyunESARealtimeLogPushOSSRole service-linked role and click **Delete Role** in the Actions column.
    

**Note**

If you fail to delete the service-linked role, check whether you have deleted all tasks that deliver real-time logs to OSS.
