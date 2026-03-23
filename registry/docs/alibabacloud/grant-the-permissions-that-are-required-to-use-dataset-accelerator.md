The first time you use Dataset Accelerator, you must assign a service-linked role to Dataset Accelerator so that Dataset Accelerator can access the required resources. This topic describes how to grant permissions to a service-linked role of Dataset Accelerator.

## **Authorize Dataset Accelerator to access Alibaba Cloud resources**

When you use Dataset Accelerator for the first time, you must use your Alibaba Cloud account to create the service-linked role AliyunPAIDatasetAccDefaultRole. In this way, Dataset Accelerator can use this role to access resources, such as Object Storage Service (OSS) and Apsara File Storage NAS.

### **Use the console**

1.  Go to the **Dataset Accelerator** page.
    
    1.  Log on to the [Machine Learning Platform for AI (PAI)](https://pai.data.aliyun.com/console) console.
        
    2.  In the left-side navigation pane, choose **Resources & Acceleration** **\>** **Dataset Accelerator**.
        
2.  Click **Go to the RAM console**.
    
3.  Click **Agree to Authorization**.
    
    After the role is created, you can go to the Dataset Accelerator page.
    

### **Use API operations**

If you access Dataset Accelerator by calling API operations, the following message is returned. You can click the [Cloud Resource Access Authorization link](https://ram.console.alibabacloud.com/role/authorize?request=%7B%22ReturnUrl%22%3A%22https%3A%2F%2Fpai.console.alibabacloud.com%2F%3FregionId%3Dcn-hangzhou%23%2Fdataset-acc%2Finstances%22%2C%22Services%22%3A%5B%7B%22Roles%22%3A%5B%7B%22RoleName%22%3A%22AliyunPAIDatasetAccDefaultRole%22%2C%22TemplateId%22%3A%22AliyunPAIDatasetAccDefaultRole%22%7D%5D%2C%22Service%22%3A%22PAI%22%7D%5D%7D) provided in the response to go to the authorization page.

```
{
	"code":"ServiceRoleNotExistsError",
	"data":{
		"RequestId":"0526FD22-D8AA-5E24-B778-C67C768D****",
		"Message":"The following RAM role does not exist: AliyunPAIDatasetAccDefaultRole. Click the following link to create a service-linked role: https://ram.console.alibabacloud.com/role/authorize?request=%7B%22ReturnUrl%22%3A%22https%3A%2F%2Fpai.console.alibabacloud.com%2F%3FregionId%3Dcn-hangzhou%23%2Fdataset-acc%2Finstances%22%2C%22Services%22%3A%5B%7B%22Roles%22%3A%5B%7B%22RoleName%22%3A%22AliyunPAIDatasetAccDefaultRole%22%2C%22TemplateId%22%3A%22AliyunPAIDatasetAccDefaultRole%22%7D%5D%2C%22Service%22%3A%22PAI%22%7D%5D%7D",
		"Code":"ServiceRoleNotExistsError",
		"Detail":{
			"ErrorCode":521884733440157****
		}
	},
	"httpStatusCode":"400",
	"message":"The following RAM role does not exist: AliyunPAIDatasetAccDefaultRole. Click the following link to create a service-linked role: https://ram.console.alibabacloud.com/role/authorize?request=%7B%22ReturnUrl%22%3A%22https%3A%2F%2Fpai.console.alibabacloud.com%2F%3FregionId%3Dcn-hangzhou%23%2Fdataset-acc%2Finstances%22%2C%22Services%22%3A%5B%7B%22Roles%22%3A%5B%7B%22RoleName%22%3A%22AliyunPAIDatasetAccDefaultRole%22%2C%22TemplateId%22%3A%22AliyunPAIDatasetAccDefaultRole%22%7D%5D%2C%22Service%22%3A%22PAI%22%7D%5D%7D",
	"requestId":"0526FD22-D8AA-5E24-B778-C67C768D****",
	"successResponse":false
}
```

## **Grant a RAM user permissions to manage Dataset Accelerator**

If you want to use Dataset Accelerator as a Resource Access Management (RAM) user, you must grant the required permissions to the RAM user. Dataset Accelerator uses Alibaba Cloud RAM to control permissions. You can configure permission policies to manage the permissions of RAM users to access Dataset Accelerator. Perform the following steps.

### **Grant the management permissions on Dataset Accelerator to a RAM user**

After you grant a RAM user the permissions to manage Dataset Accelerator, the RAM user can use all features of Dataset Accelerator.

1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/).
    
2.  Grant the permissions to manage Dataset Accelerator to a RAM user. For more information, see [Grant permissions to the RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user).
    
    The following information is used:
    
    -   In the Add Permissions panel, set the **Authorized Scope** parameter to **Alibaba Cloud Account**.
        
    -   In the Add Permissions panel, set the **Select Policy** parameter to **System Policy** and then select the **AliyunDatasetAccFullAccess** policy.
        

### **Grant the read-only permissions on Dataset Accelerator to a RAM user**

After you grant a RAM user the read-only permissions on Dataset Accelerator, the RAM user can query and view the list of Dataset Accelerator instances and acceleration slots.

1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/).
    
2.  Grant the read-only permissions on Dataset Accelerator to a RAM user. For more information, see [Grant permissions to the RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user).
    
    The following information is used:
    
    -   In the Add Permissions panel, set the **Resource Scope** parameter to **Alibaba Cloud Account**.
        
    -   In the Add Permissions panel, set the **Policy** parameter to **System Policy** and then select the **AliyunDatasetAccReadOnlyAccess** policy.
        

## **Reference: Permission-related FAQ**

### **Why do I need to authorize a RAM role?**

Dataset Accelerator uses the RAM role AliyunPAIDatasetAccDefaultRole to access your resources on Alibaba Cloud to provide dataset acceleration services.

### **How do I manage authorized RAM roles?**

You can manage RAM roles and view the permissions of the roles in the RAM console. For more information, see [View the information about a RAM role](/help/en/ram/user-guide/view-the-information-about-a-ram-role).

**Note**

We recommend that you do not delete the role. Otherwise, you need to authorize the role by using your Alibaba Cloud account again.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5124725671/p574758.png)
