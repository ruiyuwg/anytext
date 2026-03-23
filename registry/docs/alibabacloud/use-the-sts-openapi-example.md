This topic describes how to use Security Token Service (STS) SDK for Python to call the AssumeRole operation to assume a Resource Access Management (RAM) role.

## **Step 1: View the API documentation**

To assume a RAM role, call the AssumeRole operation. For more information, see [List of operations by function](/help/en/ram/developer-reference/api-sts-2015-04-01-overview). For more information about the information and permissions that are required to call this operation, see [AssumeRole](/help/en/ram/developer-reference/api-sts-2015-04-01-assumerole). You can obtain information such as request parameters and permissions in the API reference.

## **Step 2: Create a RAM user and grant permissions to the RAM user**

### **Identities**

You can use a RAM user or RAM role to call this operation. You cannot use an Alibaba Cloud account to call this operation. For more information about the differences among the identities, see [Identity](/help/en/openapi/identity).

In this example, a **_RAM user_** is used to call this operation.

Log on to the [RAM console](https://ram.console.alibabacloud.com/) and create a RAM user. For more information about how to create a RAM user, see [Create a RAM user](/help/en/ram/user-guide/create-a-ram-user).

### **Credentials**

Go to the details page of the **_RAM user_**. In the **AccessKey** section of the **Authentication** tab, click **Create AccessKey** to create an AccessKey pair. For more information, see [Create an AccessKey pair](/help/en/ram/user-guide/create-an-accesskey-pair).

**Important**

The AccessKey secret of a RAM user is displayed only when the RAM user is created. You cannot view the AccessKey secret after the RAM user is created. Note down the AccessKey secrete and keep it confidential.

### **Authorization**

1.  Go to the [Users](https://ram.console.alibabacloud.com/users) page in the RAM console, find the RAM user that you want to manage, and click **Add Permissions** in the **Actions** column.
    
2.  Enter the keyword `sts` in the search box and select the **_AliyunSTSAssumeRoleAccess_** system policy.
    
    **_AliyunSTSAssumeRoleAccess_**_: grants the required permissions to call the AssumeRole operation of STS._
    
3.  Click **Grant permissions** to complete the authorization.
    

## **Step 3: Create a RAM role**

Log on to the [RAM console](https://ram.console.alibabacloud.com/) and create a RAM role whose trusted entity is an Alibaba Cloud account. The trusted Alibaba Cloud account can be the current Alibaba Cloud account or another Alibaba Cloud account:

-   **Current Alibaba Cloud Account**: If you want a RAM user that belongs to your Alibaba Cloud account to assume the RAM role, select **Current Alibaba Cloud Account**.
    
-   **Other Alibaba Cloud Account**: If you want a RAM user that belongs to a different Alibaba Cloud account to assume the RAM role, select **Other Alibaba Cloud Account** and enter the ID of the Alibaba Cloud account. This option is provided to authorize different Alibaba Cloud accounts.
    

In this example, you must use the RAM user that is created in [Step 2](#8ca23cc03cs27) to assume the RAM role. Therefore, you must set the trusted Alibaba Cloud account to the ID of the Alibaba Cloud account to which the RAM user created in [Step 2](#8ca23cc03cs27) belongs. For more information, see [Create a RAM role for a trusted Alibaba Cloud account](/help/en/ram/user-guide/create-a-ram-role-for-a-trusted-alibaba-cloud-account).

You can also modify the trust policy that is attached to the RAM role to change the RAM user that can assume the RAM role. For more information, see [Edit the trust policy of a RAM role](/help/en/ram/user-guide/edit-the-trust-policy-of-a-ram-role).

## **Step 4: Call the operation**

In this topic, STS SDK for Python is used to call this operation. You can use SDKs for other programming languages in a similar way. For more information, see [STS SDKs](https://next.api.alibabacloud.com/api-tools/sdk/Sts?version=2015-04-01). You can use other methods to call operations based on your business requirements. For more information, see [Overview](/help/en/openapi/developer-reference/overview-of-calling-methods).

### Prepare a Python environment

Download and install [Python 3](https://www.python.org/downloads/).

After you install Python 3, enter `python --version` in the terminal to check the version of Python 3.

### **Configure environment variables**

In this example, environment variables are configured to manage the AccessKey pair and prevent security risks that are caused by hard-coding the AccessKey pair into your business code. For more information, see [Configure environment variables in Linux, macOS, and Windows](/help/en/sdk/developer-reference/configure-the-alibaba-cloud-accesskey-environment-variable-on-linux-macos-and-windows-systems).

### **Install dependencies**

```
pip install alibabacloud_credentials
pip install alibabacloud_sts20150401==1.1.3
pip install alibabacloud_tea_console
```

### Download the sample code

1.  In OpenAPI Explorer, use the RAM user that is created in [Step 2](#8ca23cc03cs27) to call the [AssumeRole](https://next.api.alibabacloud.com/api/Sts/2015-04-01/AssumeRole) operation.
    
2.  Enter the request parameters and click **Initiate Call** to check whether the debugging is successful.
    
    Set **RoleArn** in the request parameters to the Alibaba Cloud Resource Name (ARN) of the RAM role that is created in [Step 3](#1eda61e04bs04). For more information about how to view the ARN of a RAM role, see [How do I view the ARN of a RAM role?](/help/en/ram/support/faq-about-ram-roles-and-sts-tokens#section-qbw-mhy-173)
    
3.  On the **Python** tab of the **SDK Sample Code** tab, click **Download Project** to download the sample code package of CloudSSO SDK for Python.
    
4.  Decompress the sample code package on your computer and go to the **alibabacloud\_sample** directory.
    

### **Run the sample code**

Run the following command:

```
python sample.py
```

The following command output is displayed:

```
	"headers": {
		"date": "Thu, 17 Aug 2023 10:17:04 GMT",
		"content-type": "application/json;charset=utf-8",
		"content-length": "846",
		"connection": "keep-alive",
		"keep-alive": "timeout=25",
		"access-control-allow-origin": "*",
		"access-control-expose-headers": "*",
		"x-acs-request-id": "79E360B6-FAC5-5B18-8081-BC0F8E90A238",
		"x-acs-trace-id": "b2fb071a47e03e6d6cd507fd05438021",
		"etag": "8bZ4pA7U/ulImlQiwhQnxXw6"
	},
	"statusCode": 200,
	"body": {
		"AssumedRoleUser": {
			"Arn": "acs:ram::151266687691****:role/test-role/test",
			"AssumedRoleId": "30081280744271****:test"
		},
		"Credentials": {
			"AccessKeyId": "STS.NTdbdgE5zgL2qcb5pAify****",
			"AccessKeySecret": "Fyk6ab1xfCFn88hXFxzV44QnF6cDi9T2PiTJgsqU****",
			"Expiration": "2023-08-17T11:17:04Z",
			"SecurityToken": "CAIS7AF1q6Ft5B2yfSjIr5fRKd7TqOpb0ISgUnocHLFUE6eDM****"
		},
		"RequestId": "79E360B6-FAC5-5B18-8081-BC0F8E90A238"
	}
}
```
