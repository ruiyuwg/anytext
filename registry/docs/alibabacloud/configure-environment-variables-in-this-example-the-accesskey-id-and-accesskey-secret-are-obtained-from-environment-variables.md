An index is an inverted storage structure that consists of keywords and logical pointers. The logical pointers can refer to actual data. You can use an index to quickly locate data rows based on keywords. An index is similar to a data catalog. You can query and analyze log data only after you configure indexes. This topic describes how to create, modify, query, and delete indexes by using Simple Log Service SDK for Python and provides sample code.

## Prerequisites

-   A Resource Access Management (RAM) user is created, and the required permissions are granted to the RAM user. For more information, see [Create a RAM user and grant permissions to the RAM user](/help/en/sls/using-the-openapi-example#78541bf01a5df).
    
-   The **ALIBABA\_CLOUD\_ACCESS\_KEY\_ID** and **ALIBABA\_CLOUD\_ACCESS\_KEY\_SECRET** environment variables are configured. For more information, see [Configure environment variables in Linux, macOS, and Windows](/help/en/sdk/developer-reference/configure-the-alibaba-cloud-accesskey-environment-variable-on-linux-macos-and-windows-systems).
    
    **Important**
    
    -   The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. We recommend that you use the AccessKey pair of a RAM user to call API operations or perform routine O&M.
        
    -   We recommend that you do not save the AccessKey ID or AccessKey secret in your project code. Otherwise, the AccessKey pair may be leaked, and the security of all resources within your account may be compromised.
        
    
-   Simple Log Service SDK for Python is installed. For more information, see [Install Simple Log Service SDK for Python](/help/en/sls/developer-reference/install-the-log-service-python-sdk#task-2097719).
    
-   Logs are written to a Logstore. For more information, see [Data collection overview](/help/en/sls/data-collection-overview).
    

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

## Sample code that is used to create indexes

You can manage indexes in the Simple Log Service console with ease. For more information, see [Create indexes](/help/en/sls/create-indexes#task-jqz-v55-cfb).

The following sample code provides an example on how to create indexes. In this example, full-text indexing is enabled, and field indexing is enabled for the request\_method and status fields. This example is based on the raw log.

![索引配置](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7248062961/p539255.png)

```
from aliyun.log import LogClient, IndexConfig
import os

# Configure environment variables. In this example, the AccessKey ID and AccessKey secret are obtained from environment variables. 
accessKeyId = os.environ.get('ALIBABA_CLOUD_ACCESS_KEY_ID', '')
accessKey = os.environ.get('ALIBABA_CLOUD_ACCESS_KEY_SECRET', '')
# The Simple Log Service endpoint. In this example, the Simple Log Service endpoint for the China (Hangzhou) region is used. Replace the parameter value with the actual endpoint. 
endpoint = "cn-hangzhou.log.aliyuncs.com"
# Create a Simple Log Service client. 
client = LogClient(endpoint, accessKeyId, accessKey)

# The name of the project. 
project_name = "ali-test-project"
# The name of the Logstore. 
logstore_name = "ali-test-logstore"


if __name__ == '__main__':
    # Before you create indexes, you must plan the configurations of full-text indexing and field indexing. In this example, full-text indexing is enabled, and field indexing is enabled for the request_method and status fields. 
    logstore_index = {'line': {
        'token': [',', ' ', "'", '"', ';', '=', '(', ')', '[', ']', '{', '}', '?', '@', '&', '<', '>', '/', ':', '\n',
                  '\t',
                  '\r'], 'caseSensitive': False, 'chn': False}, 'keys': {'request_method': {'type': 'text',
                                                                                 'token': [',', ' ', "'", '"', ';', '=',
                                                                                           '(', ')', '[', ']', '{', '}',
                                                                                           '?', '@', '&', '<', '>', '/',
                                                                                           ':', '\n', '\t', '\r'],
                                                                                 'caseSensitive': False, 'alias': '',
                                                                                 'doc_value': True, 'chn': False},
                                                                         'status': {'type': 'long', 'alias': '',
                                                                                'doc_value': True}},
        'log_reduce': False,
        'max_text_len': 2048}

    print("ready to create index")
    index_config = IndexConfig()
    index_config.from_json(logstore_index)
    client.create_index(project_name, logstore_name, index_config)
    print("create index success ")
```

Expected results:

```
ready to create index
create index success
```

## Sample code that is used to modify indexes

You can manage indexes in the Simple Log Service console with ease. For more information, see [Create indexes](/help/en/sls/create-indexes#task-jqz-v55-cfb).

The following sample code provides an example on how to modify indexes. In this example, full-text indexing is enabled, field indexing is enabled for the request\_method and status fields, and caseSensitive is set to True for the request\_method field. This example is based on the raw log.

![更新索引](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7248062961/p539257.png)

```
from aliyun.log import LogClient, IndexConfig
import os

# Configure environment variables. In this example, the AccessKey ID and AccessKey secret are obtained from environment variables. 
accessKeyId = os.environ.get('ALIBABA_CLOUD_ACCESS_KEY_ID', '')
accessKey = os.environ.get('ALIBABA_CLOUD_ACCESS_KEY_SECRET', '')
# The Simple Log Service endpoint. In this example, the Simple Log Service endpoint for the China (Hangzhou) region is used. Replace the parameter value with the actual endpoint. 
endpoint = "cn-hangzhou.log.aliyuncs.com"
# Create a Simple Log Service client. 
client = LogClient(endpoint, accessKeyId, accessKey)

# The name of the project. 
project_name = "ali-test-project"
# The name of the Logstore. 
logstore_name = "ali-test-logstore"


if __name__ == '__main__':
    # Set caseSensitive to True for the request_method field. 
    logstore_index = {'line': {
        'token': [',', ' ', "'", '"', ';', '=', '(', ')', '[', ']', '{', '}', '?', '@', '&', '<', '>', '/', ':', '\n',
                  '\t',
                  '\r'], 'caseSensitive': False, 'chn': False}, 'keys': {'request_method': {'type': 'text',
                                                                                 'token': [',', ' ', "'", '"', ';', '=',
                                                                                           '(', ')', '[', ']', '{', '}',
                                                                                           '?', '@', '&', '<', '>', '/',
                                                                                           ':', '\n', '\t', '\r'],
                                                                                 'caseSensitive': True, 'alias': '',
                                                                                 'doc_value': True, 'chn': False},
                                                                         'status': {'type': 'long', 'alias': '',
                                                                                'doc_value': True}},
        'log_reduce': False,
        'max_text_len': 2048}

    print("ready to update index")
    index_config = IndexConfig()
    index_config.from_json(logstore_index)
    client.update_index(project_name, logstore_name, index_config)
    print("update index success ")
```

Expected results:

```
ready to update index
update index success
```

## Sample code that is used to query indexes

The following sample code provides an example on how to query the indexes of a specified Logstore:

```
from aliyun.log import LogClient, IndexConfig
import os

# Configure environment variables. In this example, the AccessKey ID and AccessKey secret are obtained from environment variables. 
accessKeyId = os.environ.get('ALIBABA_CLOUD_ACCESS_KEY_ID', '')
accessKey = os.environ.get('ALIBABA_CLOUD_ACCESS_KEY_SECRET', '')
# The Simple Log Service endpoint. In this example, the Simple Log Service endpoint for the China (Hangzhou) region is used. Replace the parameter value with the actual endpoint. 
endpoint = "cn-hangzhou.log.aliyuncs.com"
# Create a Simple Log Service client. 
client = LogClient(endpoint, accessKeyId, accessKey)

# The name of the project. 
project_name = "ali-test-project"
# The name of the Logstore. 
logstore_name = "ali-test-logstore"


if __name__ == '__main__':
    # Query indexes. 
    print("ready to list index")
    res = client.get_index_config(project_name, logstore_name)
    print("The index config is :%s" % res.get_index_config().to_json())
    print("list index success ")
```

Expected results:

```
ready to list index
The index config is :{'line': {'token': [',', ' ', "'", '"', ';', '=', '(', ')', '[', ']', '{', '}', '?', '@', '&', '<', '>', '/', ':', '\n', '\t', '\r'], 'caseSensitive': False, 'chn': False}, 'keys': {'request_method': {'type': 'text', 'token': [',', ' ', "'", '"', ';', '=', '(', ')', '[', ']', '{', '}', '?', '@', '&', '<', '>', '/', ':', '\n', '\t', '\r'], 'caseSensitive': True, 'alias': '', 'doc_value': True, 'chn': False}, 'status': {'type': 'long', 'alias': '', 'doc_value': True}}, 'log_reduce': False, 'max_text_len': 2048}
list index success
```

## Sample code that is used to delete indexes

The following sample code provides an example on how to delete the indexes of a specified Logstore:

```
from aliyun.log import LogClient, IndexConfig
import os

# Configure environment variables. In this example, the AccessKey ID and AccessKey secret are obtained from environment variables. 
accessKeyId = os.environ.get('ALIBABA_CLOUD_ACCESS_KEY_ID', '')
accessKey = os.environ.get('ALIBABA_CLOUD_ACCESS_KEY_SECRET', '')
# The Simple Log Service endpoint. In this example, the Simple Log Service endpoint for the China (Hangzhou) region is used. Replace the parameter value with the actual endpoint. 
endpoint = "cn-hangzhou.log.aliyuncs.com"
# Create a Simple Log Service client. 
client = LogClient(endpoint, accessKeyId, accessKey)

# The name of the project. 
project_name = "ali-test-project"
# The name of the Logstore. 
logstore_name = "ali-test-logstore2"


if __name__ == '__main__':
    # Delete indexes. 
    print("ready to delete index")
    client.delete_index(project_name, logstore_name)
    print("delete index success ")
```

Expected results:

```
ready to delete index
delete index success
```

## References

-   Alibaba Cloud OpenAPI Explorer provides debugging capabilities, SDKs, examples, and related documents. You can use OpenAPI Explorer to debug Log Service API operations without the need to manually encapsulate or sign requests. For more information, visit [OpenAPI Portal](https://next.api.alibabacloud.com/api/Sls/2020-12-30/CreateProject?lang=JAVA&sdkStyle=dara&params=%7B%7D).
-   Log Service provides the command-line interface (CLI) to meet the requirements for automated configurations in Log Service. For more information, see [Log Service CLI](/help/en/sls/developer-reference/overview-of-log-service-cli#concept-wzj-vhf-lfb).
-   For more information about index-related API operations, see the following topics:
    
    -   [CreateIndex](/help/en/sls/api-createindex#doc-api-Sls-CreateIndex)
        
    -   [GetIndex](/help/en/sls/api-getindex#doc-api-Sls-GetIndex)
        
    -   [UpdateIndex](/help/en/sls/api-updateindex#doc-api-Sls-UpdateIndex)
        
    -   [DeleteIndex](/help/en/sls/api-deleteindex#doc-api-Sls-DeleteIndex)
        
-   For more information about sample code, see [Alibaba Cloud Simple Log Service SDK for Python](https://github.com/aliyun/aliyun-log-python-sdk/tree/master/tests) on GitHub.
