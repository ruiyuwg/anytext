LangStudio's code mode lets you build Agent applications using Python code. It supports the end-to-end process of creating, debugging, and deploying applications in the cloud. This topic describes how to create and deploy an Agent application that supports tool calling, skills, and streaming output in less than **5 minutes**.

## Step 1: Create an application and attach a runtime

First, you need to create an application and prepare a **runtime** environment for development and debugging.

1.  Log on to the [PAI console](https://pai.console.alibabacloud.com). In the top navigation bar, select a destination region, such as **China (Hangzhou)**.
    
2.  In the navigation pane on the left, choose **Model Application** > **Application Development (LangStudio)** to navigate to the target workspace.
    
3.  On the **Applications** tab, click **Create Application** and select **Code Mode** from the drop-down list.
    
4.  On the **Create Application** page, you can configure the following parameters:
    
    -   **Creation Method**: Select **Create from Template** and then select the **LLM Basic** template.
        
    -   **Name**: Enter a name for the application, such as **AI Chat Agent**.
        
    -   **Select Runtime**: A runtime is the computing environment required to execute and debug workflows, and selecting one is a **necessary step** for debugging.
        
        -   **Existing runtime:** Select a runtime from the drop-down list.
            
        -   **No active runtime**: Click **New Runtime** to create a runtime with the default configurations. This runtime is exclusively for the development and debugging phases and is independent of the final deployed service.
            
        
        > Multiple applications can share a single runtime.
        
    -   **Working Path****:** This is the OSS bucket path used to store workflow configurations, logs, and temporary files that are generated during debugging. After you select a runtime, the corresponding working path is automatically loaded.
        
    -   **Description** (Optional): Enter a description of the application.
        
5.  Click **Confirm**. The system automatically takes you to the developer page.
    

## **Step 2: Understand the project template and configure environment variables**

### **Project template description**

The `LLM Basic` template provides a basic Agent project structure to help you get started quickly.

```
project/
├── agent.py          # Entry file: Defines the FastAPI app and API endpoints
├── agent_loop.py     # Core logic: Handles the LLM call and tool execution loop
├── agui.py           # AG-UI Protocol event stream transformation
├── skills.py         # Skill system: Discovers, loads, and executes skills
├── skills/           # Skills directory
│   ├── get-current-time/
│   └── create-plan/
├── requirements.txt  # Python dependencies
├── .env              # Environment variable file (must be created manually)
└── README.md         # Detailed documentation
```

-   `agent.py` is the default entry file. It **must** provide a global `FastAPI` object named `app`. The LangStudio service automatically detects and loads the `app` object to start the service.
    
-   Read the `README.md` file to learn how to modify and extend the sample template.
    

### **Configure environment variables**

The project uses the model service provided by Alibaba Cloud Model Studio. You must provide an [API key](https://modelstudio.console.alibabacloud.com/?spm=5176.pai-console-inland.0.0.82fb4a9bkUwG6K&apiKey=1#/api-key) through an environment variable.

Create a `.env` file in the project's root directory:

```
DASHSCOPE_API_KEY=your-api-key-here
```

When the runtime starts, it automatically loads the environment variables from the `.env` file.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3716269671/p1049875.png)

**Important**

**For Aliyun International Users:** Modify the base\_url in `agent_loop.py` at line 118.

Change from:

```
base_url="https://dashscope.aliyuncs.com/compatible-mode/v1"
```

to:

```
base_url="https://dashscope-intl.aliyuncs.com/compatible-mode/v1"
```

**Reason:** Using the international API key with the China `base_url` will result in connection failures. This modification ensures your requests are routed to the correct international endpoint.

## **Step 3: Debug the Agent**

**Start the debugging environment:** In the upper-right corner of the developer page, click **Run**. The system starts the **runtime** environment and loads your code. After the runtime starts successfully, the debugging panel appears on the right side of the page.

### **API debugging**

On the **API Debugging** tab, you can test the application's APIs.

1.  Select the API to test, such as `POST /`.
    
2.  Enter the request parameters and send the request.
    

**Sample request:**

```
{
  "question": "What is the weather like in Beijing today?"
}
```

**Expected response:**

```
{
  "answer": "The weather in Beijing today is sunny, with temperatures between 10°C and 20°C."
}
```

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3716269671/p1049882.png)

### **Debug with the chat panel**

The platform provides a visual chat panel that supports multi-turn sessions:

1.  Go to the **Chat** page.
    
2.  Enter a question directly to start a conversation.
    
3.  View the Agent's response in real-time.
    

> The chat panel uses the AG-UI Protocol, which requires the service to support the `/ag-ui` endpoint.

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3716269671/p1049770.png)

### **View tracing analysis**

Regardless of the debugging method used, the platform automatically records tracing information:

-   **Request duration**: The time taken for each stage.
    
-   **LLM call details**: Model parameters and token usage.
    
-   **Tool call records**: The tools called and their returned results.
    
-   **Error messages**: Detailed stack traces when errors occur.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3716269671/p1049988.png)

### **View logs**

If your code encounters an exception, you can view the worker log on the Run page to troubleshoot the issue.

## **Step 4: Deploy the service**

After development and debugging, you can **deploy** the application as a stable and scalable online service.

1.  In the upper-right corner of the developer page, click **Confirm**.
    
2.  In the configuration dialog box that appears, configure the deployment resources, service name, VPC, and other information. This process packages your FastAPI application into a PAI-EAS online service.
    
    **Important**
    
    The Alibaba Cloud Model Studio LLM service used in the application requires public network access. By default, EAS services do not have public network access. Therefore, when you deploy the service, you **must** configure a VPC and a vSwitch that can access the public network. This typically requires you to associate a NAT Gateway. Otherwise, the service call fails. For more information, see [Access public or private network resources from EAS](/help/en/pai/user-guide/configure-network-connectivity).
    
3.  On the Deployment Flow page, verify that the deployment content is as expected, and then click **Submit deployment**.
    
4.  The deployment may take 5 to 10 minutes to complete. After the deployment is complete, click **Go to EAS** in the upper-right corner to go to the EAS service product page.
    
5.  On the **Overview** tab, in the **Basic Information** section, click **View Endpoint Information** to retrieve the endpoint and authentication token.
    

**Sample request:**

```
# Replace <EAS_ENDPOINT> and <EAS_TOKEN> with your service endpoint and authentication token.
curl -X POST '<EAS_ENDPOINT>' \
  -H 'Authorization: Bearer <EAS_TOKEN>' \
  -H "Content-Type: application/json" \
  -d '{"question": "What is the weather like in Beijing today?"}'
```

You can use the monitoring and tracing analysis features on the service product page to view the service's performance metrics and the detailed traces of all requests in real-time.

## **Step 5: Customize your Agent**

You can customize your Agent's logic based on the LLM-Basic template. The following sections describe the most common customization methods.

#### 1\. Modify the Agent persona or system prompt

**Purpose**: Define the Agent's role, behavior, and response style.

Edit the `to_messages()` method in `agent.py`:

```
def to_messages(self) -> list:
    return [
        {"role": "system", "content": "You are a professional travel planning assistant. Your answers should be concise, actionable, and presented as a checklist."},
        {"role": "user", "content": self.question},
    ]
```

#### 2\. Add a custom tool (Function Calling)

**Purpose**: Enable the Agent to call external APIs or execute specific code logic, such as querying the weather or retrieving from a database.

1.  **Define the tool function:** In the `agent.py` file, define a standard Python function.
    
    -   The function name is exposed to the model as the tool name.
        
    -   Parameter type annotations automatically generate the tool schema.
        
    -   Supports `async def` asynchronous functions.
        
    
    ```
    # Add the tool function in agent.py
    def geocode(city: str) -> str:
        """Get the geographical coordinates of a city."""
        # Replace this with an actual API call
        return '{"lat": 39.9042, "lng": 116.4074}'
    
    # Pass the list of tools when calling agent_loop
    async for chunk in agent_loop(req.to_messages(), [get_weather, geocode]):
        ...
    ```
    
2.  **Register the tool**: In the API endpoint in `agent.py`, pass the list of tool functions you defined to `agent_loop`.
    
    ```
    # In the FastAPI route in agent.py
    
    @app.post("/")
    async def query(req: QueryRequest) -> QueryResponse:
        # Pass the list of tool functions to agent_loop
        tools = [get_weather, geocode]
        async for chunk in agent_loop(req.to_messages(), tools=tools):
            # ...
    ```
    

#### 3\. Add skills

Skills are used to organize complex operation instructions and scripts.

1.  **Create the skill directory and file**: In the `skills/` directory, create a subdirectory for your new skill, for example, `my-skill`. This directory must contain a `SKILL.md` file, which describes the skill's purpose and usage to the model.
    
    ```
    skills/
      └── my-skill/
          ├── SKILL.md      # Required: Skill definition file
          └── scripts/      # Optional: Stores scripts to be executed by this skill
              └── run.py
    ```
    
2.  **Write the skill definition file**: The `SKILL.md` file contains metadata and detailed instructions. The following is an example:
    
    ```
    ---
    name: my-skill
    description: Use this skill when the user needs to perform a specific task.
    ---
    
    # My Skill
    
    ## Goal
    Describe what the skill does in one sentence.
    
    ## Instructions
    Detailed operation instructions...
    ```
    

The Agent sees the list of available skills in the system prompt and uses the built-in `load_skill_file` and `execute_script` tools to use the skills.
