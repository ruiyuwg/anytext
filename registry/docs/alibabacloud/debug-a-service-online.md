After a service is deployed, you can use the online debugging feature in the console to test whether the service runs as expected. This feature provides a graphical interface where you can send test requests and view the results without writing any code.

**Note**

Some services do not support online debugging. For example, for services such as [ComfyUI](/help/en/pai/user-guide/use-comfyui-to-deploy-an-ai-video-generation-model-service/) and [SDWebUI](/help/en/pai/user-guide/ai-painting-sdwebui-deployment), only the Standard Edition supports online debugging.

## How to debug online

1.  **Go to the online debugging page**.
    
    1.  Log on to the [PAI console](https://pai.console.alibabacloud.com/). Select a region on the top of the page. Then, select the desired workspace and click **Elastic Algorithm Service (EAS)**.
        
    2.  On the **Inference Service** tab, find the service that you want to test and click **![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7913912471/p928150.png) > **Online Debugging**** in the **Actions** column.
        
2.  **Construct and send the request (key step).** The definitions for API operations, especially the URI of the request and the request body format, vary significantly depending on the model. Ensure that you enter the request parameters correctly. A standard request includes the following elements:
    
    -   **Method**: Usually `POST` or `GET`.
        
    -   **URI of the request (URL)**: The base address is automatically populated for online debugging. You must determine whether to append a specific API operation path. An incorrect path is the most common cause of a `404 Not Found` error.
        
    -   **Request header (Headers)**: The `Authorization` token is usually automatically populated and does not need to be modified.
        
    -   **Request body (Body)**: The request body must comply with the API operation requirements and be in the correct format. An incorrect format is the primary cause of a `400 Bad Request` or `500 Internal Server Error` error.
        

## **Usage example**

This example shows how to test the chat API operation for the Qwen2.5-7B-Instruct model service deployed using vLLM. The parameters are as follows:

-   Method: POST
    
-   URI of the request (URL): `http://***********/v1/chat/completions` (You need to append `/v1/chat/completions` to the URL that is automatically populated for online debugging.)
    
-   Request body (Body):
    
    ```
    {
        "model": "Qwen2.5-7B-Instruct",
        "messages": [
            {
                "role": "user",
                "content": "What is the captial of Canada?"
            }
        ]
    }
    ```
    

The result is as follows:

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7913912471/p928200.png)

## **FAQ**

**Q: How do I determine the correct URL and request body?**

The correct URL and request body depend on the model that you deployed. For more information, see [Construct requests for typical scenarios](/help/en/pai/user-guide/call-a-service-over-a-public-endpoint#4355ef366a4qz).

## **Next steps**

-   **Performance evaluation**: You can use the [automatic service stress testing](/help/en/pai/user-guide/automatic-service-stress-testing) feature to evaluate the performance of your service.
    
-   **Official invocation**: After the service performance meets your requirements, you can invoke the service. For more information, see [Service invocation methods](/help/en/pai/user-guide/methods-for-calling-services/).
