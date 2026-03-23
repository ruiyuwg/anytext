Model Studio provides a variety of official plug-ins, including Image Generation, Calculator, and Python Code Interpreter, to add new features and expand the use cases of large language models (LLMs).

## **First visit to Plug-ins page**

To visit the Plug-ins page, the Alibaba Cloud account or RAM user must have the AliyunServiceRoleForSFMAccessCloudAPI role permission. You can follow the steps below to authorize.

## Alibaba Cloud account

If you log on to Model Studio with the Alibaba Cloud account, review the agreement on the **[Plug-ins](https://modelstudio.console.alibabacloud.com/?tab=app#/plugin-market)** page and click **Go to Authorize**.

## RAM user

If you log on to Model Studio as a RAM user, review the agreement on the [Plug-ins](https://modelstudio.console.alibabacloud.com/?tab=app#/plugin-market) page and click **Authorize and Enter**. At this time, you may see an error message that says `The user is not granted the permissions to create a service-linked role`.

You must first follow the steps below to grant the RAM user the permission to create a service-linked role. Once authorized, the RAM user will be able to access the **Plug-ins** page.

1.  Grant the permission to create a service-linked role.
    
    1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/) with the Alibaba Cloud account.
        
    2.  In the left-side navigation pane, click **Permissions** > **Policies**.
        
    3.  Click **Create Policy**.
        
    4.  On the **JSON** tab, enter the following content in `Effect`, `Action`, `Resource`, and `Condition` fields.
        
        ```
        {
            "Action": [
                "ram:CreateServiceLinkedRole"
            ],
            "Resource": "*",
            "Effect": "Allow",
            "Condition": {
                "StringEquals": {
                    "ram:ServiceName": "cloundapi-access.sfm.aliyuncs.com"
                }
            }
        }
        ```
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1722067371/p907881.png)
        
    5.  Click **OK**.
        
    6.  Name the policy and click **OK**.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1722067371/p907882.png)
        
    7.  In the left-side navigation pane, click **Identities** > **Users**.
        
    8.  Find the RAM user and click **Add Permissions** in the **Actions** column.
        
    9.  Select the newly created policy from the list and click **Grant permissions**.
        
        The RAM user is now authorized to create a service-linked role.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1722067371/p907880.png)
        
2.  Go back to the **[Plug-ins](https://modelstudio.console.alibabacloud.com/?tab=app#/plugin-market)** page, review the agreement, and click **Authorize and Enter**.
    

## **Official plug-ins**

the **Plug-ins** page offers pre-installed official plug-ins from Model Studio. You can use them directly without configuring input and output parameters.

**Name**

**Tool ID**

**Description**

**Billing**

[Python Code Interpreter](#f8658b5c70a93)

code\_interpreter

Allows the LLM to execute Python code snippets, such as mathematical calculations, data analysis and visualization, and data processing.

Free

[Calculator](#12e61be838qub)

calculator

Allows the LLM to perform complex mathematical calculations, such as “12313×13232”.

Free

[Image Generation](#da38f8a429lso)

text\_to\_image

Allows the LLM to generate images based on text, such as “please draw a smiling puppy”.

Free for a limited period. You must apply for the plug-in first.

### Python Code Interpreter

Sample input:

```
import matplotlib.pyplot as plt
import numpy as np

x = np.linspace(-2, 2, 100)
y1 = np.sqrt(1 + x**2)
y2 = -np.sqrt(1 + x**2)

plt.plot(x, y1, label='y = sqrt(1 + x^2)')
plt.plot(x, y2, label='y = -sqrt(1 + x^2)')
plt.xlabel('x')
plt.ylabel('y')
plt.title('Hyperbola')
plt.legend()
plt.show()
```

**Without plug-in**

**With plug-in**

The LLM application cannot execute Python code and will only provide a language description of the code.

The LLM application can execute Python code and perform visual analytics on data.

![python不插.jpeg](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6861762371/p834102.jpeg)

![python插.jpeg](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2561762371/p834103.jpeg)

The Python Code Interpreter plug-in does not support external network access or uploading local files. Available dependencies include:

-   json5~=0.9.6
    
-   jupyter\_client~=8.1.0
    
-   ipykernel~=6.25.0
    
-   seaborn
    
-   sympy
    
-   pydantic~=1.10.8
    
-   pillow~=9.4.0
    
-   fastapi~=0.101.1
    
-   dynaconf~=3.2.1
    
-   oss2~=2.18.1
    
-   matplotlib
    
-   starlette~=0.27.0
    
-   uvicorn~=0.23.2
    
-   requests~=2.31.0
    
-   scipy
    
-   html2text
    
-   matplotlib
    
-   pandas
    
-   pdf2image
    
-   pdfminer-six
    
-   pillow
    
-   pypdf
    
-   python-pptx
    
-   seaborn
    
-   sympy
    
-   wordcloud
    

### Calculator

Sample input:

`12313×13232`

**Without plug-in**

**With plug-in**

The LLM application cannot accurately solve the problem and may return incorrect answers. In this case, the correct answer is 162,925,616.

The LLM application now has robust calculation capability and delivers the correct answer.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1722067371/p906990.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1722067371/p906988.png)

### Image Generation

Sample input:

`Please draw a smiling puppy.`

**Without plug-in**

**With plug-in**

The LLM application cannot create visual content and can only provide textual descriptions.

The LLM application has the ability to directly render images and can generate a puppy image according to instructions.

![图文.jpeg](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1722067371/p834097.jpeg)

![图文插.jpeg](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6861762371/p834098.jpeg)

### **Combined use of plug-ins**

Model Studio supports the use of multiple tools in a single task. You can select plug-ins based on actual requirements.

## **Use official plug-ins**

**Step 1: To use official plug-ins in a sub-workspace, you must first authorize the sub-workspace. This step is not required if you use the default workspace.**

1.  Go to **[Plug-ins](https://modelstudio.console.alibabacloud.com/?tab=app#/plugin-market)**, find the desired plug-in and click **View Details**.
    
2.  Click **Authorization**, select the sub-workspace to be authorized, and click **OK**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7435814671/p905062.png)
    

**Step 2:** [Call the plug-in](#55bb7f428fczt)**.**

## Call the plug-in

-   **Method 1**: On the **Plug-ins** page, add a tool to your agent application.
    
    > Official plug-ins can only be added to **agent applications in the same workspace**.
    
    1.  Find the desired plug-in and click **Add to Agent**.
        
    2.  Select a tool and click **Next**.
        
    3.  Select the agent application and click **Confirm Add**.
        
    4.  On the application configuration page, you can find the tool added automatically.
        
        > You can click **\+ Plug-in** to add up to 10 tools. The agent application will select and call one or more appropriate tools based on the user input.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9090793671/p944233.png)
        
    5.  Test the plug-in to ensure it meets your requirements.
        
    6.  After testing, publish the application.
        
-   **Method 2**: Go to **[My Applications](https://modelstudio.console.alibabacloud.com/?tab=app#/app-center)**. In the target agent or workflow application, add the specified plug-in, test it, and then **Publish** the application. For more information, see [Plug-in for agent application](/help/en/model-studio/single-agent-application#550c6b3ddevkl) and [Plug-in node for workflow application](/help/en/model-studio/workflow-application/#341c98019dvo8).
    

## Get tool ID

The tool ID uniquely identifies a specific tool. When calling the tool through the API, you must pass the tool ID.

1.  On the **Plug-ins** page, find the desired plug-in and click **View Details**.
    
2.  View the tool ID.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1722067371/p905219.png)
    

## Reference

Apart from official plug-ins, Model Studio also supports custom plug-ins. For more information, see [Custom plugins](/help/en/model-studio/custom-plug-ins).
