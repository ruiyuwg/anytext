After you activate Intelligent Media Management (IMM), you can create a project in the IMM console. This topic describes how to create a project in the IMM console.

## **Procedure**

1.  Log on to the [IMM console](https://imm.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, click **Project List**. In the upper-left corner of the Project List page, select the region where you want to create a project.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0567910371/p620416.png)
    
    **Important**
    
    -   When you create a project, you must select the same region in which your Object Storage Service (OSS) bucket resides.
        
    -   After you create the project, you cannot change the region of the project.
        
    
3.  On the **Project List** page, click **Create Project**. The **Create Project** panel appears.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0567910371/p611359.png)
    
4.  In the **Create Project** panel, configure the parameters described in the following table.
    
    **Parameter**
    
    **Description**
    
    **Project Name**
    
    The name of the project. The name must comply with the following naming rules:
    
    -   The name must be 1 to 128 characters in length.
        
    -   It can contain only letters, digits, hyphens (-), and underscores (\_).
        
    -   It must start with a letter or underscore (\_).
        
    
    **Important**
    
    After a project is created, you cannot change its name.
    
    **Project Description**
    
    The project description.
    
    **Service Role**
    
    The role that grants IMM the permissions to access other cloud services, such as OSS.
    
    When you create a project, you must select a service role. You can create the default role AliyunIMMDefaultRole on the [Cloud Resource Access Authorization](https://ram.console.alibabacloud.com/?spm=5176.10523362.0.0.6e87309dpVZSB6#/role/authorize?request=%7B%22Requests%22%3A%20%7B%22request1%22%3A%20%7B%22RoleName%22%3A%20%22AliyunIMMDefaultRole%22%2C%20%22TemplateId%22%3A%20%22DefaultRole%22%7D%7D%2C%20%22ReturnUrl%22%3A%20%22https%3A//imm.console.alibabacloud.com/%22%2C%20%22Service%22%3A%20%22IMM%22%7D) page.
    
    **Warning**
    
    The **AliyunIMMDefaultRole** service role has high-level permissions on OSS. If a RAM user within your Alibaba Cloud account has the permissions to create or update IMM projects, you can associate the **AliyunIMMDefaultRole** role with the RAM user and use [metadata indexing](/help/en/imm/user-guide/create-a-metadata-index) to list or analyze objects in the OSS bucket as the RAM user. For more fine-grained permission control, see [Create a custom service role](/help/en/imm/user-guide/configure-a-service-role-for-a-project#f676b1c03397m).
    
    **Note**
    
    You can also manually create a service role in the Resource Access Management (RAM) console. For more information, see [Create a service role and complete authorization](/help/en/imm/user-guide/configure-a-service-role-for-a-project#49d3eac033wnv). After the service role is created, click the refresh icon to make the service role appear in the Service Role drop-down list.
    
    **Dataset Template**
    
    When you create a project or dataset in IMM, you can specify a workflow template for the project or dataset. The workflow template specifies a workflow to be executed. For more information, see [Workflow templates](/help/en/imm/user-guide/workflow-templates-and-operators#section-arr-umf-0oi).
    
    **Number of datasets**
    
    The maximum number of datasets that can be created in the project. Valid values: 1 to 1000000000
    
    **Data Sources**
    
    The maximum number of Object Storage Service (OSS) buckets that can be bind to each dataset. Valid values: 1 to 10
    
    **Number of documents**
    
    The maximum number of files in each dataset. Valid values: 1 to 100000000
    
    **Metadata quantity**
    
    The maximum number of metadata entities in each dataset.
    
    **Note**
    
    This parameter is reserved and does not actually impose a limit.
    
    **Number of metadata relations**
    
    The maximum number of metadata relationships in each dataset.
    
    **Note**
    
    This parameter is reserved and does not actually impose a limit.
    
    **Total file size**
    
    The maximum file size in bytes for each dataset. If this limit is exceeded, indexes can no longer be added.
    
5.  Click **OK**.
