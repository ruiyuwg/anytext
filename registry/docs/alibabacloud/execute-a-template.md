After you create a template, you can create an execution based on the template and start the execution. This topic describes how to create an execution based on a template in the CloudOps Orchestration Service (OOS) console.

## Procedure

1.  Log on to the [CloudOps Orchestration Service console](https://oos.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Automated Task** > **Task Execution Management**. On the Task Execution Management page, click **Create**.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1647968171/p767517.png)
    
3.  On the Create Task page, configure the parameters in the Basic Information step and click **Next Step: Parameter Settings**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1647968171/p767518.png)
    
    In this example, the **Execution Mode** parameter is set to **Automatic**. The following table describes the parameters.
    
    **Parameter**
    
    **Description**
    
    Execution Mode
    
    -   Automatic: After the execution is created, the execution is automatically started.
        
    -   Manual: After the execution is created, you must manually start the execution.
        
    
    Suspend upon Failure
    
    If the execution contains a loop task and a subtask fails, the execution is suspended. In this case, you must manually adjust the subtask and decide whether to continue the execution.
    
    Template Category
    
    -   Public Template: the templates that are provided by OOS for common scenarios.
        
    -   Custom Template: the templates that you created based on your business requirements.
        
    
4.  Configure the parameters that are required to execute the template and click **Next Step: OK**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1647968171/p767519.png)
    
5.  Confirm the parameter settings and click **Create**.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1647968171/p767520.png)
