Call the **ListProject** API to retrieve a list of all projects in a specified resource group in the current region.

## **Prerequisites**

-   Simple Log Service is activated. For more information, see [Activate Simple Log Service](https://www.alibabacloud.com/product/log-service?spm=a2c5t.10695662.1996646101.searchclickresult.536d31bdPTqffd).
    
-   Simple Log Service SDK for Python is initialized. For more information, see [Initialize Simple Log Service SDK for Python](/help/en/sls/developer-reference/initializing-the-sls-python-sdk).
    

## Parameter description

```
 def list_project(self, offset=0, size=100, project_name_pattern=None, resource_group_id=''):
```

### **Request parameters**

**Parameter**

**Type**

**Required**

**Description**

**offset**

integer

No

The line from which the query starts. Default value: 0.

**size**

integer

No

The number of entries per page. Default value: 100. Maximum value: 500.

**project\_name\_pattern**

string

No

Project name search term. For example, if you enter **aliyun-project**, the search result will include the projects named **aliyun-project-sls** and **hangzhou-aliyun-project**.

-   If this parameter is not specified, a list of all projects in the region will be returned.
    
-   If this parameter is specified, a list of projects matching the fuzzy search term will be returned.
    

**resource\_group\_id**

string

No

Resource group ID. If not specified, the default resource group is used. For more information, see [Create a resource group](/help/en/resource-management/resource-group/user-guide/create-a-resource-group#title-xzn-rkf-j7e).

### **Response parameters**

For more informaton about the response parameters, see [ListProject](/help/en/sls/developer-reference/api-sls-2020-12-30-listproject).

## **Sample code**

```
from aliyun.log import LogClient
import os

# In this example, the AccessKey ID and AccessKey secret are obtained from environment variables.
access_key_id = os.environ.get('ALIBABA_CLOUD_ACCESS_KEY_ID', '')
access_key_secret = os.environ.get('ALIBABA_CLOUD_ACCESS_KEY_SECRET', '')

# The Simple Log Service endpoint.
endpoint = "cn-hangzhou.log.aliyuncs.com"
# Create a Simple Log Service client.
client = LogClient(endpoint, access_key_id, access_key_secret)


# List projects in the default resource group in the current region.
def main():
    try:
        response = client.list_project()
        response.log_print()
    except Exception as error:
        print(error)


if __name__ == '__main__':
    main()

```

## References

-   For more code samples, see [aliyun-log-python-sdk on GitHub](https://github.com/aliyun/aliyun-log-python-sdk).
    
-   For more information about project-related API operations, see the following topics:
    
    -   [CreateProject](/help/en/sls/api-createproject#doc-api-Sls-CreateProject)
        
    -   [DeleteProject](/help/en/sls/api-deleteproject#doc-api-Sls-DeleteProject)
        
    -   [GetProject](/help/en/sls/api-getproject#doc-api-Sls-GetProject)
        
    -   [ListProject](/help/en/sls/api-listproject#doc-api-Sls-ListProject)
        
    -   [UpdateProject](/help/en/sls/api-updateproject#doc-api-Sls-UpdateProject)
        
    -   [GetProjectLogs](/help/en/sls/api-getprojectlogs#doc-api-Sls-GetProjectLogs)
