This topic describes how to use Simple Log Service SDK for Python to call the ListProject operation of Simple Log Service to query a project.

## View the API documentation

Before you call an API operation, we recommend that you read the API documentation to learn about the parameters and permissions that are required to call the API operation. For more information, see [List of operations by function](/help/en/sls/api-reference-overview).

## Create a RAM user and grant permissions to the RAM user

**Important**

The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. We recommend that you create and use a Resource Access Management (RAM) user to call API operations or perform routine O&M.

If you have already created a RAM user and granted permissions to the RAM user, skip this step.

1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/).
    
2.  Create a RAM user.
    
    1.  In the left-side navigation pane, choose **Identities** > **Users**.
        
    2.  On the **Users** page, click **Create User**.
        
    3.  On the **Create User** page, set **Logon Name** and **Display Name** to **config-openapi-operator**, and select **OpenAPI Access** for **Access Mode**.
        
    4.  Click **OK**.
        
        After you create a RAM user, the system automatically generates an AccessKey ID and an AccessKey secret for the RAM user. For more information, see [Create an AccessKey pair](/help/en/ram/user-guide/create-an-accesskey-pair#task-2245479). We recommend that you record the AccessKey pair. When you use the RAM user to call an API operation, you must enter the AccessKey pair.
        
3.  Grant permissions to the RAM user.
    
    **Note**
    
    By default, a RAM user has no permissions. After you create a RAM user, you must attach system policies, such as AliyunLogFullAccess and AliyunLogReadOnlyAccess, or custom policies to the RAM user. For more information, see [Overview](/help/en/sls/developer-reference/overview-5). In this example, the AliyunLogReadOnlyAccess policy is attached to the RAM user. The AliyunLogReadOnlyAccess policy grants the read-only permissions on Simple Log Service resources.
    
    1.  On the **Users** page, find the **config-openapi-operator** RAM user and click **Add Permissions** in the Actions column.
        
    2.  In the **Add Permissions** panel, select **AliyunLogReadOnlyAccess** and click **OK**.
        
    3.  Confirm the authorization result. Then, click **Complete**.
        

## Call an API operation

In this example, Simple Log Service SDK for Python is used to call an API operation. If you use a Simple Log Service SDK in a different programming language, the following procedure also applies. For more information, see [Simple Log Service SDKs](https://next.api.alibabacloud.com/api-tools/sdk/Sls?version=2020-12-30&language=java-async-tea&tab=primer-doc).

### Prepare a Python environment

Install Python. For more information, visit [the official website of Python](https://www.python.org/downloads/).

**Note**

Simple Log Service SDK for Python supports _Python 3_ and later.

You can run the `python -V` command to view the version of Python that is installed.

### Configure environment variables

To prevent security risks that are caused by hard coding the AccessKey pair into your business code, we recommend that you configure environment variables to manage the AccessKey pair.

-   Linux or macOS operating system
    
    Replace `<access_key_id>` and `<access_key_secret>` in the following commands with the AccessKey ID and AccessKey secret of the RAM user. Then, run the following commands on your device:
    
    ```
    export ALIBABA_CLOUD_ACCESS_KEY_ID=<access_key_id>
    export ALIBABA_CLOUD_ACCESS_KEY_SECRET=<access_key_secret>
    ```
    
-   Windows operating system
    
    Create an environment variable file, add the `ALIBABA_CLOUD_ACCESS_KEY_ID` and `ALIBABA_CLOUD_ACCESS_KEY_SECRET` environment variables, and write the AccessKey ID and AccessKey secret of the RAM user. Then, restart the Windows operating system.
    

### **Download the sample code**

1.  Visit [ListProject](https://next.api.alibabacloud.com/api/Sls/2020-12-30/ListProject?sdkStyle=dara).
    
2.  On the **Parameters** tab, configure the parameters. For example, enter the name of the project whose information you want to query in the projectName field.
    
3.  On the **SDK Sample Code** tab, select **Python** and click **Download Project** to download the sample code package.
    
4.  Decompress the sample code package on your computer and go to the alibabacloud\_sample directory.
    

### Install dependencies

**Note**

After you download the sample code, you can open the README.md file to view information such as the SDK version and dependencies.

```
pip install alibabacloud-sls20201230
```

## **Run code**

Run the sample.py file. The following sample response is returned:

```
[LOG]
{
  "headers": {
    "server": "AliyunSLS",
    "content-type": "application/json",
    "content-length": "230",
    "connection": "keep-alive",
    "access-control-allow-origin": "*",
    "date": "Tue, 25 Jul 2023 10:08:25 GMT",
    "x-log-time": "1690279705",
    "x-log-requestid": "64BF9F199ED2B749708E5445"
  },
  "statusCode": 200,
  "body": {
    "count": 1,
    "projects": [
      {
        "createTime": "1656666120",
        "description": "",
        "lastModifyTime": "1665978308",
        "owner": "",
        "projectName": "re****-nginx",
        "region": "cn-hangzhou",
        "resourceGroupId": "rg-a****a",
        "status": "Normal"
      }
    ],
    "total": 1
  }
}
```
