Every API call made through the Tair (Redis OSS-Compatible) console returns a unique request ID in the response. Use this ID when you file a support ticket or troubleshoot an issue with Alibaba Cloud support.

To find the request ID, open your browser's developer tools and inspect the network response.

## Procedure

The following steps use Chrome on Windows as an example. The steps are similar for other browsers such as Edge, Firefox, and Safari.

1.  Log in to the Tair (Redis OSS-Compatible) console.
    
2.  Press **F12** to open the **Developer Tools** panel.
    
3.  Click the **Network** tab.
    
4.  (Optional) Select **Preserve log** on the **Network** tab. This prevents the network log from being cleared if the page reloads during the operation.
    
5.  Perform the operation whose request ID you need, such as creating an instance or changing instance configurations.
    
6.  In the **Name** column, click the entry that starts with `api.json`.
    
7.  Click the **Response** tab in the right pane. The `RequestId` field contains the request ID. ![Sample response showing the RequestId field](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2787375761/p14239.png)
