A Resource Access Management (RAM) user requires permissions to use the Secure Access Service Edge (SASE) service. This topic describes how to grant permissions to a RAM user.

## Procedure

1.  In the left-side navigation pane, choose **Permissions** > **Policies**.
    
2.  On the **Policies** page, click **Create Policy**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0059564371/p886177.png)
    
3.  On the **Create Policy** page, click the **JSON** tab.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8669475471/p886214.png)
    
4.  Enter the following policy document and click **OK**.
    
    ```
    {
      "Statement": [{
        "Effect": "Allow",
        "Action": "csas:*",
        "Resource": "*"
      }],
      "Version": "1"
    }
    ```
    
5.  In the **Create Policy** dialog box, configure the **Policy Name** and **Description** parameters and click **OK**.
    
6.  Click **OK**.
    
7.  On the **Identities** > **Users** page, find the target RAM user and click **Add Permissions** in the Actions column.
    
8.  In the Add Permissions panel, select the custom authorization policy that you created and click **OK**.
    
    After the permissions are configured, O&M engineers can log on to the [SASE console](https://yundun.console.alibabacloud.com/?p=csas) as the RAM user to perform O&M tasks.
