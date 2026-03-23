## How do I select a suitable specification for my routine?

Similar to other Alibaba Cloud services such as Function Compute and Elastic Compute Service (ECS), ER has different specifications (5 ms, 50 ms, and 100 ms). If you are unsure of the runtime of your routine code, you can choose the default specification of 50 ms and test run the routine in the test environment or canary release environment. You can then check the ER logs to view the actual runtime of the routine and choose a specification based on the actual runtime plus an additional 20%. For example, if a routine requires 80 ms to complete, we recommend that you choose a routine specification of 100 ms. You can modify routine specifications based on your business requirements. The new specifications take effect immediately.

## How do I ensure business continuity if exceptions occur in my ER?

If you select **Redirect to Origin if Error Occurs** when you configure domain-related routines as described in [Associate domain names with the routine](/help/en/edge-security-acceleration/dcdn/user-guide/use-edgeroutine-in-the-dcdn-console#section-l52-msb-69o), when an exception occurs in your ER, the edge node forwards the request to your origin server by using the URL requested by the client. When your origin server receives the request, the server determines whether the request is a back-to-origin request upon exception or a regular ER back-to-origin request. For example, you can add a header to a regular ER back-to-origin request to mark that the request is a regular ER back-to-origin request. This header can be used to differentiate regular back-to-origin requests from back-to-origin requests upon exceptions. The origin server takes over the duties of ER for back-to-origin requests upon exceptions. For example, when you use ER to render pages on an edge node, if ER runs normally, all rendering requests are processed on the edge node and results are returned to the client. If an exception occurs in your ER, the requests are forwarded to the origin server, and the origin server completes page rendering.

## How do I cancel a canary release?

1.  For example, you have published the first version of your code to the production environment. Then, you revised the code and published version 2 of the code to the canary release environment of the Beijing region. However, after version 2 is published, an exception occurs and users in Beijing cannot access the node. You want to roll the code in the Beijing region back to the first version. This following figure shows this process. ![Delete the canary release](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5677325761/p298724.png)
    
2.  You must select the first version of the code and publish the code to the canary release environment of the Beijing region to overwrite version 2 of the code. ![Publish](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6677325761/p298725.png)
    
3.  After you publish the first version of the code to the canary release environment of the Beijing region, the code that runs in the canary release environment (Beijing) is the first version of the code. This indicates that the code has rolled back. ![Roll back](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6677325761/p298726.png)
    

## How do I delete a canary release environment?

You can add a canary release environment or delete it on the configuration page. ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3903290171/p781644.png)

**Note**

After you delete a canary release environment, the version of the code that runs on the edge node in the region where the canary release environment is deployed is the same as that in the production environment. For example, you run the first version of the code in the production environment and run version 2 in the canary release environment of the Beijing region. After you delete the canary release environment of the Beijing region, the code that runs on the edge nodes in the Beijing region is the first version of the code.

## How do I select a region for canary release?

ER divides the world into 35 regions. You can select a region as needed. For example, if you want to publish the new code to the Zhejiang region first, you can add Zhejiang as a canary release environment. After the environment is configured, you can go to the versions page, select the code version, and publish the code to the canary release environment of the Zhejiang region.![Zhejiang](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5677325761/p298729.png)
