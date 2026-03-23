Pass custom parameters (primarily **custom plugin parameters** and **custom node parameters**) when calling Model Studio applications.

[Create an API key](/help/en/model-studio/get-api-key) and [export the API key as an environment variable](/help/en/model-studio/configure-api-key-through-environment-variables). If you use an SDK to make calls, [install the DashScope SDK](/help/en/model-studio/install-sdk).

## **Custom plugin parameter**

This section demonstrates passing custom plugin parameters via API using a **dormitory convention query tool** example.

**Note**

Custom plugin parameters pass through **Agent Applications** or **Plugin nodes** in **Workflow Applications**.

Example: passing custom plugin parameters in an **Agent Application**.

### **How to use**

#### **Step 1: Create a custom plugin tool**

> Skip this step if you already have a plugin tool.

1.  Create a custom plugin: Go to [Plugins](https://modelstudio.console.alibabacloud.com/?tab=app#/plugin-market), click **Add Custom Plugin** and configure the plugin information. If authentication is required, enable **Enable Authentication** and configure authentication details.
    
    > Example plugin description: The dormitory convention query tool can query a specific article based on the serial number.
    
    > Example plugin URL: https://domitorgreement-plugin-example-icohrkdjxy.cn-beijing.fcapp.run
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7941045471/p911623.png)
    
    **Note:** **Plugin Description** explains the plugin's purpose to help the model decide if it's needed. Use natural language.
    
2.  Create a tool: Fill in tool information and configure input/output parameters. **Note:**
    
    1.  **Tool Description** explains the tool's functionality and usage scenarios. Use natural language and provide examples.
        
    2.  **Parameter Name** should be meaningful to help the model identify required parameters.
        
    3.  **Parameter Description** explains the parameter's purpose. Be concise to help the model understand what it represents.
        
    4.  For input parameters, set **Passing Method** to **passthrough**.
        
    
    Example: `article_index` is set as a pass-through parameter.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7941045471/p911624.png)
    
3.  Click **Test Tool** and after successful execution, **Publish** the plugin.
    

#### **Step 2: Add plugin to agent application**

> Plugin tools can only be associated with **Agent Applications** in the same workspace.

1.  Click **Add to Agent** on the plugin card and select the target agent application.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7941045471/p946150.png)
    
2.  Or click **\+ Plugin** in the application to add the plugin.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7941045471/p946392.png)
    
3.  **Publish** the application.
    

#### **Step 3: Use API**

-   **Without authentication**: Use `user_defined_params` in `biz_params` to pass custom plugin information. Replace `your_plugin_code` with the plugin ID and pass input parameter key-value pairs.
    
    > The plugin ID is on the plugin card.
    
    Example: Setting `article_index` = 2 queries and returns the second convention article.
    
    ## Python
    
    **Sample request**
    
    ```
    import os
    from http import HTTPStatus
    # Recommended dashscope SDK version >= 1.14.0
    import dashscope
    from dashscope import Application
    
    dashscope.base_http_api_url = 'https://dashscope-intl.aliyuncs.com/api/v1'
    biz_params = {
        # Replace your_plugin_code with your custom plugin ID
        "user_defined_params": {
            "your_plugin_code": {
                "article_index": 2}}}
    response = Application.call(
            # Replace with api_key="sk-xxx" if DASHSCOPE_API_KEY is not set. Avoid hardcoding API Keys in production to prevent leakage.
            api_key=os.getenv("DASHSCOPE_API_KEY"),
            app_id='YOUR_APP_ID',
            prompt='Dormitory convention content',
            biz_params=biz_params)
    
    if response.status_code != HTTPStatus.OK:
        print(f'request_id={response.request_id}')
        print(f'code={response.status_code}')
        print(f'message={response.message}')
        print(f'See error codes: https://www.alibabacloud.com/help/zh/model-studio/developer-reference/error-code')
    else:
        print('%s\n' % (response.output.text))  # Process text output only
        # print('%s\n' % (response.usage))
    ```
    
    **Sample response**
    
    ```
    The second rule of the dormitory convention is as follows:
    
    "Dormitory members should help each other, care for each other, learn from each other, and improve together; be tolerant, respectful, and treat each other with sincerity."
    
    This indicates that in the dormitory, members should cultivate a positive atmosphere for living and learning, helping and supporting each other, while also learning to understand and respect others. If you need to know about other provisions of the convention, please let me know!
    ```
    
    ## Java
    
    **Sample request**
    
    ```
    import com.alibaba.dashscope.app.*;
    import com.alibaba.dashscope.exception.ApiException;
    import com.alibaba.dashscope.exception.InputRequiredException;
    import com.alibaba.dashscope.exception.NoApiKeyException;
    import com.alibaba.dashscope.utils.JsonUtils;
    import com.alibaba.dashscope.utils.Constants;
    
    public class Main {
      static {
            Constants.baseHttpApiUrl="https://dashscope-intl.aliyuncs.com/api/v1";
        }
        public static void appCall() throws NoApiKeyException, InputRequiredException {
            String bizParams =
                    // Replace {your_plugin_code} with your custom plugin ID
                    "{\"user_defined_params\":{\"{your_plugin_code}\":{\"article_index\":2}}}";
            ApplicationParam param = ApplicationParam.builder()
                    // Replace with .apiKey("sk-xxx") if DASHSCOPE_API_KEY is not set. Avoid hardcoding API Keys in production to prevent leakage.
                    .apiKey(System.getenv("DASHSCOPE_API_KEY"))
                    .appId("YOUR_APP_ID")
                    .prompt("Dormitory convention content")
                    .bizParams(JsonUtils.parse(bizParams))
                    .build();
    
            Application application = new Application();
            ApplicationResult result = application.call(param);
            System.out.printf("%s\n",
                    result.getOutput().getText());
        }
    
        public static void main(String[] args) {
            try {
                appCall();
            } catch (ApiException | NoApiKeyException | InputRequiredException e) {
                System.out.printf("Exception: %s", e.getMessage());
                System.out.println("See error codes: https://www.alibabacloud.com/help/zh/model-studio/developer-reference/error-code");
            }
            System.exit(0);
        }
    }      
    ```
    
    **Sample response**
    
    ```
    The second rule of the dormitory convention is as follows:
    
    Article 2: Dormitory members should help each other, care for each other, learn from each other, and improve together; be tolerant, respectful, and treat each other with sincerity.
    
    This emphasizes that in a shared living environment, roommates should maintain positive relationships, creating a harmonious atmosphere for living and learning through mutual help and support. If you need to know more specific provisions, please let me know.
    ```
    
    ## HTTP
    
    ## curl
    
    **Sample request**
    
    ```
    curl -X POST https://dashscope-intl.aliyuncs.com/api/v1/apps/YOUR_APP_ID/completion \
    --header "Authorization: Bearer $DASHSCOPE_API_KEY" \
    --header 'Content-Type: application/json' \
    --data '{
        "input": {
            "prompt": "Dormitory convention content",
            "biz_params": 
            {
                "user_defined_params":
                {
                    "{your_plugin_code}":
                        {
                        "article_index": 2
                        }
                }
            } 
        },
        "parameters":  {},
        "debug":{}
    }'
    ```
    
    > Replace YOUR\_APP\_ID with your app ID.
    
    **Sample response**
    
    ```
    {"output":
    {"finish_reason":"stop",
    "session_id":"e151267ffded4fbdb13d91439011d31e",
    "text":"The second item of the dormitory convention is: \"Dormitory members should help each other, care for each other, learn from each other, and improve together; be tolerant, respectful, and treat each other with sincerity.\" This means that in dormitory life, everyone should support each other and create a harmonious, positive living environment together."},
    "usage":{"models":[{"output_tokens":94,"model_id":"qwen-max","input_tokens":453}]},
    "request_id":"a39fd2b5-7e2c-983e-84a1-1039f726f18a"}%
    ```
    
    ## PHP
    
    **Sample request**
    
    ```
    <?php
    
    # Replace with $api_key="sk-xxx" if DASHSCOPE_API_KEY is not set. Avoid hardcoding API Keys in production to prevent leakage.
    $api_key = getenv("DASHSCOPE_API_KEY");
    $application_id = 'YOUR_APP_ID'; // Replace with your application ID
    $url = "https://dashscope-intl.aliyuncs.com/api/v1/apps/$application_id/completion";
    //{your_plugin_code} is your plugin ID
    // Construct request data
    $data = [
        "input" => [
            'prompt' => 'Dormitory convention content',
            'biz_params' => [
            'user_defined_params' => [
                '{your_plugin_code}' => [
                    'article_index' => 2            
                    ]
                ]
            ]
        ],
    ];
    // Encode data as JSON
    $dataString = json_encode($data);
    
    // Check if json_encode was successful
    if (json_last_error() !== JSON_ERROR_NONE) {
        die("JSON encoding failed with error: " . json_last_error_msg());
    }
    
    // Initialize curl session
    $ch = curl_init($url);
    
    // Set curl options
    curl_setopt($ch, curlOPT_CUSTOMREQUEST, "POST");
    curl_setopt($ch, curlOPT_POSTFIELDS, $dataString);
    curl_setopt($ch, curlOPT_RETURNTRANSFER, true);
    curl_setopt($ch, curlOPT_HTTPHEADER, [
        'Content-Type: application/json',
        'Authorization: Bearer ' . $api_key
    ]);
    
    // Execute request
    $response = curl_exec($ch);
    
    // Check if curl execution was successful
    if ($response === false) {
        die("curl Error: " . curl_error($ch));
    }
    
    // Get HTTP status code
    $status_code = curl_getinfo($ch, curlINFO_HTTP_CODE);
    // Close curl session
    curl_close($ch);
    // Decode response data
    $response_data = json_decode($response, true);
    // Process response
    if ($status_code == 200) {
        if (isset($response_data['output']['text'])) {
            echo "{$response_data['output']['text']}\n";
        } else {
            echo "No text in response.\n";
        }
    }else {
        if (isset($response_data['request_id'])) {
            echo "request_id={$response_data['request_id']}\n";}
        echo "code={$status_code}\n";
        if (isset($response_data['message'])) {
            echo "message={$response_data['message']}\n";} 
        else {
            echo "message=Unknown error\n";}
    }
    ?>
    ```
    
    **Sample response**
    
    ```
    The second rule of the dormitory convention states: Dormitory members should help each other, care for each other, learn from each other, and improve together; be tolerant, respectful, and treat each other with sincerity. This is to ensure that everyone can live and study in a harmonious and friendly environment. If you need to know more specific provisions or have other questions, feel free to ask me!
    ```
    
    ## Node.js
    
    **Dependency:**
    
    ```
    npm install axios
    ```
    
    **Sample request**
    
    ```
    const axios = require('axios');
    
    async function callDashScope() {
        // Replace with apiKey='sk-xxx' if DASHSCOPE_API_KEY is not set. Avoid hardcoding API Keys in production to prevent leakage.
        const apiKey = process.env.DASHSCOPE_API_KEY;
        const appId = 'YOUR_APP_ID';// Replace with your application ID
        const pluginCode = 'YOUR_PLUGIN_CODE';// Replace with your plugin ID
        const url = `https://dashscope-intl.aliyuncs.com/api/v1/apps/${appId}/completion`;
    
        const data = {
            input: {
                prompt: "Dormitory convention content",
                biz_params: {
                    user_defined_params: {
                        [pluginCode]: {
                            // article_index is the variable for the custom tool, replace with your tool variable
                            'article_index': 3
                        }
                    }
                }
            },
            parameters: {},
            debug: {}
        };
    
        try {
            console.log("Sending request to DashScope API...");
    
            const response = await axios.post(url, data, {
                headers: {
                    'Authorization': `Bearer ${apiKey}`,
                    'Content-Type': 'application/json'
                }
            });
    
            if (response.status === 200) {
                if (response.data.output && response.data.output.text) {
                    console.log(`${response.data.output.text}`);
                }
            } else {
                console.log("Request failed:");
                if (response.data.request_id) {
                    console.log(`request_id=${response.data.request_id}`);
                }
                console.log(`code=${response.status}`);
                if (response.data.message) {
                    console.log(`message=${response.data.message}`);
                } else {
                    console.log('message=Unknown error');
                }
            }
        } catch (error) {
            console.error(`Error calling DashScope: ${error.message}`);
            if (error.response) {
                console.error(`Response status: ${error.response.status}`);
                console.error(`Response data: ${JSON.stringify(error.response.data, null, 2)}`);
            }
        }
    }
    callDashScope();
    ```
    
    **Sample response**
    
    ```
    The third rule of the dormitory convention is as follows:
    
    Pay attention to electrical safety and eliminate fire hazards. It is strictly prohibited to use open flames, unauthorized electrical appliances, various stoves and other prohibited items in the dormitory. Do not store explosive or flammable materials or connect power sources without permission.
    
    If you need to know more regulations, please let me know.
    ```
    
    ## C#
    
    **Sample request**
    
    ```
    using System.Text;
    
    class Program
    {
        static async Task Main(string[] args)
        {
            // Replace with apiKey="sk-xxx" if DASHSCOPE_API_KEY is not set. Avoid hardcoding API Keys in production to prevent leakage.
            string apiKey = Environment.GetEnvironmentVariable("DASHSCOPE_API_KEY")?? throw new InvalidOperationException("DASHSCOPE_API_KEY environment variable is not set.");;
            string appId = "YOUR_APP_ID";// Replace with your application ID
    
            if (string.IsNullOrEmpty(apiKey))
            {
                Console.WriteLine("Please ensure that DASHSCOPE_API_KEY is set.");
                return;
            }
    
            string url = $"https://dashscope-intl.aliyuncs.com/api/v1/apps/{appId}/completion";
    
            using (HttpClient client = new HttpClient())
            {
                client.DefaultRequestHeaders.Add("Authorization", $"Bearer {apiKey}");
                string pluginCode = "{your_plugin_code}"; // Replace {your_plugin_code} with your plugin ID
                string jsonContent = $@"{{
                    ""input"": {{
                        ""prompt"": ""Dormitory convention content"",
                        ""biz_params"": {{
                            ""user_defined_params"": {{
                                ""{pluginCode}"": {{
                                    ""article_index"": 2
                                }}
                            }}
                        }}
                    }},
                    ""parameters"": {{}},
                    ""debug"": {{}}
                }}";
    
                HttpContent content = new StringContent(jsonContent, Encoding.UTF8, "application/json");
    
                try
                {
                    HttpResponseMessage response = await client.PostAsync(url, content);
    
                    if (response.IsSuccessStatusCode)
                    {
                        string responseBody = await response.Content.ReadAsStringAsync();
                        Console.WriteLine("Request successful:");
                        Console.WriteLine(responseBody);
                    }
                    else
                    {
                        Console.WriteLine($"Request failed with status code: {response.StatusCode}");
                        string responseBody = await response.Content.ReadAsStringAsync();
                        Console.WriteLine(responseBody);
                    }
                }
                catch (Exception ex)
                {
                    Console.WriteLine($"Error calling DashScope: {ex.Message}");
                }
            }
        }
    }
    ```
    
    **Sample response**
    
    ```
    {
        "output": {
            "finish_reason": "stop",
            "session_id": "237ca6187c814f3b9e7461090a5f8b74",
            "text": "The second rule of the dormitory convention is as follows:
    
    \"Dormitory members should help each other, care for each other, learn from each other, and improve together; be tolerant, respectful, and treat each other with sincerity.\"
    
    This indicates that in the dormitory, members need to establish a positive relationship with each other, creating a harmonious living and learning environment through helping, caring for, and supporting each other. At the same time, they should also learn to understand and accept differences between roommates, and communicate with a sincere attitude. If there are other provisions or specific content you would like to know about, please let me know!"
        },
        "usage": {
            "models": [
                {
                    "output_tokens": 133,
                    "model_id": "qwen-max",
                    "input_tokens": 829
                }
            ]
        },
        "request_id": "64e8c359-d071-9d2e-bb94-187e86cc3a79"
    }
    ```
    
    ## Go
    
    **Sample request**
    
    ```
    package main
    
    import (
    	"bytes"
    	"encoding/json"
    	"fmt"
    	"io"
    	"net/http"
    	"os"
    )
    
    func main() {
    	// Replace with apiKey := "sk-xxx" if DASHSCOPE_API_KEY is not set. Avoid hardcoding API Keys in production to prevent leakage.
    	apiKey := os.Getenv("DASHSCOPE_API_KEY")
    	appId := "YOUR_APP_ID"           // Replace with your application ID
    	pluginCode := "YOUR_PLUGIN_CODE" // Replace with your plugin ID
    
    	if apiKey == "" {
    		fmt.Println("Please ensure that DASHSCOPE_API_KEY is set.")
    		return
    	}
    
    	url := fmt.Sprintf("https://dashscope-intl.aliyuncs.com/api/v1/apps/%s/completion", appId)
    
    	// Create request body
    	requestBody := map[string]interface{}{
    		"input": map[string]interface{}{
    			"prompt": "Dormitory convention content",
    			"biz_params": map[string]interface{}{
    				"user_defined_params": map[string]interface{}{
    					pluginCode: map[string]interface{}{
    						"article_index": 2,
    					},
    				},
    			},
    		},
    		"parameters": map[string]interface{}{},
    		"debug":      map[string]interface{}{},
    	}
    
    	jsonData, err := json.Marshal(requestBody)
    	if err != nil {
    		fmt.Printf("Failed to marshal JSON: %v\n", err)
    		return
    	}
    
    	// Create HTTP POST request
    	req, err := http.NewRequest("POST", url, bytes.NewBuffer(jsonData))
    	if err != nil {
    		fmt.Printf("Failed to create request: %v\n", err)
    		return
    	}
    
    	// Set request headers
    	req.Header.Set("Authorization", "Bearer "+apiKey)
    	req.Header.Set("Content-Type", "application/json")
    
    	// Send request
    	client := &http.Client{}
    	resp, err := client.Do(req)
    	if err != nil {
    		fmt.Printf("Failed to send request: %v\n", err)
    		return
    	}
    	defer resp.Body.Close()
    
    	// Read response
    	body, err := io.ReadAll(resp.Body)
    	if err != nil {
    		fmt.Printf("Failed to read response: %v\n", err)
    		return
    	}
    
    	// Process response
    	if resp.StatusCode == http.StatusOK {
    		fmt.Println("Request successful:")
    		fmt.Println(string(body))
    	} else {
    		fmt.Printf("Request failed with status code: %d\n", resp.StatusCode)
    		fmt.Println(string(body))
    	}
    }
    ```
    
    **Sample response**
    
    ```
    {
        "output": {
            "finish_reason": "stop",
            "session_id": "860d2a4c1f3649ac880298537993cb51",
            "text": "The second rule of the dormitory convention is as follows:
    
    Dormitory members should help each other, care for each other, learn from each other, and improve together; be tolerant, respectful, and treat each other with sincerity.
    
    This emphasizes that in dormitory life, roommates should maintain good mutual support relationships while also respecting each other. Would you like to know about other provisions?"
        },
        "usage": {
            "models": [
                {
                    "output_tokens": 84,
                    "model_id": "qwen-max",
                    "input_tokens": 876
                }
            ]
        },
        "request_id": "0a250055-90a4-992d-9276-e268ad35d1ab"
    }
    ```
    
-   **With authentication**: **User-level Authentication** is enabled for the plugin.
    
    > The plugin ID is on the plugin card.
    
    -   Use `user_defined_params` in `biz_params` to pass custom plugin information. Replace `your_plugin_code` with the plugin ID and pass input parameter key-value pairs.
        
    -   Use `user_defined_tokens` in `biz_params` for authentication. Replace `your_plugin_code` with the plugin ID and set `user_token` to your DASHSCOPE\_API\_KEY.
        
    -   After authentication succeeds, the item is queried and returned by index number.
        
    
    Example: set `article_index` = 2 and `user_token` to your DASHSCOPE\_API\_KEY. After authentication succeeds, the second convention is queried and returned.
    
    ## Python
    
    **Sample request**
    
    ```
    from http import HTTPStatus
    import os
    # Recommended dashscope SDK version >= 1.14.0
    import dashscope
    from dashscope import Application
    
    dashscope.base_http_api_url = 'https://dashscope-intl.aliyuncs.com/api/v1'
    biz_params = {
        # Replace your_plugin_code with your custom plugin ID, replace YOUR_TOKEN with your authentication information like API key
        "user_defined_params": {
            "your_plugin_code": {
                "article_index": 2}},
        "user_defined_tokens": {
            "your_plugin_code": {
                "user_token": "YOUR_TOKEN"}}}
    response = Application.invocation(
                # Replace with api_key="sk-xxx" if DASHSCOPE_API_KEY is not set. Avoid hardcoding API Keys in production to prevent leakage.
                api_key=os.getenv("DASHSCOPE_API_KEY"), 
                app_id='YOUR_APP_ID',
                prompt='Dormitory convention content',
                biz_params=biz_params)
    
    if response.status_code != HTTPStatus.OK:
        print(f'request_id={response.request_id}')
        print(f'code={response.status_code}')
        print(f'message={response.message}')
        print(f'See error codes: https://www.alibabacloud.com/help/zh/model-studio/developer-reference/error-code')
    else:
        print('%s\n' % (response.output.text))  # Process text output only
        # print('%s\n' % (response.usage))
    ```
    
    **Sample response**
    
    ```
    The second rule of the dormitory convention is as follows:
    
    Dormitory members should help each other, care for each other, learn from each other, and improve together; be tolerant, respectful, and treat each other with sincerity.
    
    If you need to know more regulations, please let me know.
    ```
    
    ## Java
    
    **Sample request**
    
    ```
    import com.alibaba.dashscope.app.*;
    import com.alibaba.dashscope.exception.ApiException;
    import com.alibaba.dashscope.exception.InputRequiredException;
    import com.alibaba.dashscope.exception.NoApiKeyException;
    import com.alibaba.dashscope.utils.JsonUtils;
    import com.alibaba.dashscope.utils.Constants;
    
    public class Main {
      static {
            Constants.baseHttpApiUrl="https://dashscope-intl.aliyuncs.com/api/v1";
        }
        public static void appCall() throws NoApiKeyException, InputRequiredException {
            String bizParams =
                    // Replace {your_plugin_code} with your plugin ID, replace YOUR_TOKEN with your actual Token, such as API key
                    "{\"user_defined_params\":{\"{your_plugin_code}\":{\"article_index\":2}}," +
                            "\"user_defined_tokens\":{\"{your_plugin_code}\":{\"user_token\":\"YOUR_TOKEN\"}}}";
            ApplicationParam param = ApplicationParam.builder()
                    // Replace with .apiKey("sk-xxx") if DASHSCOPE_API_KEY is not set. Avoid hardcoding API Keys in production to prevent leakage.
                    .apiKey(System.getenv("DASHSCOPE_API_KEY"))
                    .appId("YOUR_APP_ID")
                    .prompt("Dormitory convention content")
                    .bizParams(JsonUtils.parse(bizParams))
                    .build();
    
            Application application = new Application();
            ApplicationResult result = application.call(param);
            System.out.printf("%s\n",
                    result.getOutput().getText());
        }
        public static void main(String[] args) {
            try {
                appCall();
            } catch (ApiException | NoApiKeyException | InputRequiredException e) {
                System.out.printf("Exception: %s", e.getMessage());
                System.out.println("See error codes: https://www.alibabacloud.com/help/zh/model-studio/developer-reference/error-code");
            }
            System.exit(0);
        }
    }
    ```
    
    **Sample response**
    
    ```
    The second rule of the dormitory convention is as follows:
    
    Dormitory members should help each other, care for each other, learn from each other, and improve together; be tolerant, respectful, and treat each other with sincerity.
    
    If you need to query more regulations, please let me know.
    ```
    
    > Replace YOUR\_APP\_ID with your app ID. Replace your\_plugin\_code with your custom plugin ID. Replace YOUR\_TOKEN with your authentication token.
    
    ## HTTP
    
    ## curl
    
    **Sample request**
    
    ```
    curl -X POST https://dashscope-intl.aliyuncs.com/api/v1/apps/YOUR_APP_ID/completion \
    --header "Authorization: Bearer $DASHSCOPE_API_KEY" \
    --header 'Content-Type: application/json' \
    --data '{
        "input": {
            "prompt": "Dormitory convention content",
            "biz_params": 
            {
                "user_defined_params":
                {
                    "{your_plugin_code}":
                        {
                        "article_index": 2
                        }
                },
                "user_defined_tokens":
                {
                    "{your_plugin_code}":
                        {
                        "user_token": "YOUR_TOKEN"
                        }
                }
            } 
        },
        "parameters":  {},
        "debug":{}
    }'
    
    ```
    
    > Replace YOUR\_APP\_ID with your app ID. Replace your\_plugin\_code with your custom plugin ID. Replace YOUR\_TOKEN with your authentication token.
    
    **Sample response**
    
    ```
    {"output":{"finish_reason":"stop",
    "session_id":"d3b5c3e269dc40479255a7a02df5c630",
    "text":"The second item of the dormitory convention is: \"Dormitory members should help each other, care for each other, learn from each other, and improve together; be tolerant, respectful, and treat each other with sincerity.\" This emphasizes the importance of harmonious coexistence and mutual progress among members in dormitory life."},
    "usage":{"models":[{"output_tokens":80,"model_id":"qwen-max","input_tokens":432}]},
    "request_id":"1f77154c-edc3-9003-b622-816fa2f849cf"}%
    ```
    
    ## PHP
    
    **Sample request**
    
    ```
    <?php
    
    # Replace with $api_key="sk-xxx" if DASHSCOPE_API_KEY is not set. Avoid hardcoding API Keys in production to prevent leakage.
    $api_key = getenv("DASHSCOPE_API_KEY");
    $application_id = 'YOUR_APP_ID'; // Replace with your application ID
    $url = "https://dashscope-intl.aliyuncs.com/api/v1/apps/$application_id/completion";
    
    // Construct request data
    $data = [
        "input" => [
            'prompt' => 'Dormitory convention content',
            'biz_params' => [
            'user_defined_params' => [
                '{your_plugin_code}' => [//{your_plugin_code} is your plugin ID
                    'article_index' => 2            
                    ]
                ],
            'user_defined_tokens' => [
                '{your_plugin_code}' => [//{your_plugin_code} is your plugin ID
                    'user_token' => 'YOUR_TOKEN'//Replace with your Token, such as API key
                ]
            ]
            ]
        ],
    ];
    // Encode data as JSON
    $dataString = json_encode($data);
    
    // Check if json_encode was successful
    if (json_last_error() !== JSON_ERROR_NONE) {
        die("JSON encoding failed with error: " . json_last_error_msg());
    }
    
    // Initialize curl session
    $ch = curl_init($url);
    
    // Set curl options
    curl_setopt($ch, curlOPT_CUSTOMREQUEST, "POST");
    curl_setopt($ch, curlOPT_POSTFIELDS, $dataString);
    curl_setopt($ch, curlOPT_RETURNTRANSFER, true);
    curl_setopt($ch, curlOPT_HTTPHEADER, [
        'Content-Type: application/json',
        'Authorization: Bearer ' . $api_key
    ]);
    
    // Execute request
    $response = curl_exec($ch);
    
    // Check if curl execution was successful
    if ($response === false) {
        die("curl Error: " . curl_error($ch));
    }
    
    // Get HTTP status code
    $status_code = curl_getinfo($ch, curlINFO_HTTP_CODE);
    // Close curl session
    curl_close($ch);
    // Decode response data
    $response_data = json_decode($response, true);
    // Process response
    if ($status_code == 200) {
        if (isset($response_data['output']['text'])) {
            echo "{$response_data['output']['text']}\n";
        } else {
            echo "No text in response.\n";
        }
    }else {
        if (isset($response_data['request_id'])) {
            echo "request_id={$response_data['request_id']}\n";}
        echo "code={$status_code}\n";
        if (isset($response_data['message'])) {
            echo "message={$response_data['message']}\n";} 
        else {
            echo "message=Unknown error\n";}
    }
    ?>
    ```
    
    **Sample response**
    
    ```
    The second rule of the dormitory convention is as follows:
    
    > Dormitory members should help each other, care for each other, learn from each other, and improve together; be tolerant, respectful, and treat each other with sincerity.
    
    If you need to know more about the convention content or other information, please feel free to ask!
    ```
    
    ## Node.js
    
    **Dependency:**
    
    ```
    npm install axios
    ```
    
    **Sample request**
    
    ```
    const axios = require('axios');
    async function callDashScope() {
        // Replace with apiKey='sk-xxx' if DASHSCOPE_API_KEY is not set. Avoid hardcoding API Keys in production to prevent leakage.
        const apiKey = process.env.DASHSCOPE_API_KEY;
        const appId = 'YOUR_APP_ID';// Replace with your application ID
        const pluginCode = 'YOUR_PLUGIN_CODE';// Replace with your plugin ID
        const url = `https://dashscope-intl.aliyuncs.com/api/v1/apps/${appId}/completion`;
    
        const data = {
            input: {
                prompt: "Dormitory convention content",
                biz_params: {
                    user_defined_params: {
                        [pluginCode]: {
                            // article_index is the variable for the custom plugin, replace with your plugin variable
                            'article_index': 6
                        }
                    },
                    user_defined_tokens: {
                        [pluginCode]: {
                            // YOUR_TOKEN should be replaced with your actual authentication information, such as API key
                            user_token: 'YOUR_TOKEN'
                        }
                    }
                }
            },
            parameters: {},
            debug: {}
        };
    
        try {
            console.log("Sending request to DashScope API...");
    
            const response = await axios.post(url, data, {
                headers: {
                    'Authorization': `Bearer ${apiKey}`,
                    'Content-Type': 'application/json'
                }
            });
    
            if (response.status === 200) {
                if (response.data.output && response.data.output.text) {
                    console.log(`${response.data.output.text}`);
                }
            } else {
                console.log("Request failed:");
                if (response.data.request_id) {
                    console.log(`request_id=${response.data.request_id}`);
                }
                console.log(`code=${response.status}`);
                if (response.data.message) {
                    console.log(`message=${response.data.message}`);
                } else {
                    console.log('message=Unknown error');
                }
            }
        } catch (error) {
            console.error(`Error calling DashScope: ${error.message}`);
            if (error.response) {
                console.error(`Response status: ${error.response.status}`);
                console.error(`Response data: ${JSON.stringify(error.response.data, null, 2)}`);
            }
        }
    }
    callDashScope();
    ```
    
    **Sample response**
    
    ```
    The sixth rule of the dormitory convention: Develop good living habits. Each dormitory member has the right to rest and the obligation to ensure others' right to rest. If you need to know more regulations, please specify further.
    ```
    
    ## C#
    
    **Sample request**
    
    ```
    using System.Text;
    
    class Program
    {
        static async Task Main(string[] args)
        {
            // Replace with apiKey="sk-xxx" if DASHSCOPE_API_KEY is not set. Avoid hardcoding API Keys in production to prevent leakage.
            string apiKey = Environment.GetEnvironmentVariable("DASHSCOPE_API_KEY")?? throw new InvalidOperationException("DASHSCOPE_API_KEY environment variable is not set.");;
            string appId = "YOUR_APP_ID";// Replace with your application ID
    
            if (string.IsNullOrEmpty(apiKey))
            {
                Console.WriteLine("Please ensure that DASHSCOPE_API_KEY is set.");
                return;
            }
    
            string url = $"https://dashscope-intl.aliyuncs.com/api/v1/apps/{appId}/completion";
    
            using (HttpClient client = new HttpClient())
            {
                client.DefaultRequestHeaders.Add("Authorization", $"Bearer {apiKey}");
                string pluginCode = "your_plugin_code"; // your_plugin_code should be replaced with your actual plugin ID
                // YOUR_TOKEN should be replaced with your actual Token, such as API key
                string jsonContent = $@"{{
                    ""input"": {{
                        ""prompt"": ""Dormitory convention content"",
                        ""biz_params"": {{
                            ""user_defined_params"": {{
                                ""{pluginCode}"": {{
                                    ""article_index"": 2
                                }}
                            }},
                            ""user_defined_tokens"": {{
                                ""{pluginCode}"": {{
                                    ""user_token"": ""YOUR_TOKEN"" 
                                }}
                            }}
                        }}
                    }},
                    ""parameters"": {{}},
                    ""debug"": {{}}
                }}";
    
                HttpContent content = new StringContent(jsonContent, Encoding.UTF8, "application/json");
    
                try
                {
                    HttpResponseMessage response = await client.PostAsync(url, content);
    
                    if (response.IsSuccessStatusCode)
                    {
                        string responseBody = await response.Content.ReadAsStringAsync();
                        Console.WriteLine("Request successful:");
                        Console.WriteLine(responseBody);
                    }
                    else
                    {
                        Console.WriteLine($"Request failed with status code: {response.StatusCode}");
                        string responseBody = await response.Content.ReadAsStringAsync();
                        Console.WriteLine(responseBody);
                    }
                }
                catch (Exception ex)
                {
                    Console.WriteLine($"Error calling DashScope: {ex.Message}");
                }
            }
        }
    }
    ```
    
    **Sample response**
    
    ```
    {
        "output": {
            "finish_reason": "stop",
            "session_id": "1a1913a9922a401f8eba36df8ea1a062",
            "text": "The second rule of the dormitory convention is as follows:
    
    Dormitory members should help each other, care for each other, learn from each other, and improve together; be tolerant, respectful, and treat each other with sincerity.
    
    For more detailed convention content, please specify further."
        },
        "usage": {
            "models": [
                {
                    "output_tokens": 66,
                    "model_id": "qwen-max",
                    "input_tokens": 802
                }
            ]
        },
        "request_id": "04bac806-c5e6-9fab-a846-a66641862be9"
    }
    ```
    
    ## Go
    
    **Sample request**
    
    ```
    package main
    
    import (
    	"bytes"
    	"encoding/json"
    	"fmt"
    	"io"
    	"net/http"
    	"os"
    )
    
    func main() {
    	// Replace with apiKey := "sk-xxx" if DASHSCOPE_API_KEY is not set. Avoid hardcoding API Keys in production to prevent leakage.
    	apiKey := os.Getenv("DASHSCOPE_API_KEY")
    	appId := "YOUR_APP_ID"           // Replace with your application ID
    	pluginCode := "YOUR_PLUGIN_CODE" // Replace with your plugin ID
    
    	if apiKey == "" {
    		fmt.Println("Please ensure that DASHSCOPE_API_KEY is set.")
    		return
    	}
    
    	url := fmt.Sprintf("https://dashscope-intl.aliyuncs.com/api/v1/apps/%s/completion", appId)
    
    	// Create request body
    	requestBody := map[string]interface{}{
    		"input": map[string]interface{}{
    			"prompt": "Dormitory convention content",
    			"biz_params": map[string]interface{}{
    				"user_defined_params": map[string]interface{}{
    					pluginCode: map[string]interface{}{
    						"article_index": 10,
    					},
    				},
    				"user_defined_tokens": map[string]interface{}{
    					pluginCode: map[string]interface{}{
    						"user_token": "YOUR_USER_TOKEN", // Replace with your authentication token, such as API key
    					},
    				},
    			},
    		},
    		"parameters": map[string]interface{}{},
    		"debug":      map[string]interface{}{},
    	}
    
    	jsonData, err := json.Marshal(requestBody)
    	if err != nil {
    		fmt.Printf("Failed to marshal JSON: %v\n", err)
    		return
    	}
    
    	// Create HTTP POST request
    	req, err := http.NewRequest("POST", url, bytes.NewBuffer(jsonData))
    	if err != nil {
    		fmt.Printf("Failed to create request: %v\n", err)
    		return
    	}
    
    	// Set request headers
    	req.Header.Set("Authorization", "Bearer "+apiKey)
    	req.Header.Set("Content-Type", "application/json")
    
    	// Send request
    	client := &http.Client{}
    	resp, err := client.Do(req)
    	if err != nil {
    		fmt.Printf("Failed to send request: %v\n", err)
    		return
    	}
    	defer resp.Body.Close()
    
    	// Read response
    	body, err := io.ReadAll(resp.Body)
    	if err != nil {
    		fmt.Printf("Failed to read response: %v\n", err)
    		return
    	}
    
    	// Process response
    	if resp.StatusCode == http.StatusOK {
    		fmt.Println("Request successful:")
    		fmt.Println(string(body))
    	} else {
    		fmt.Printf("Request failed with status code: %d\n", resp.StatusCode)
    		fmt.Println(string(body))
    	}
    }
    ```
    
    **Sample response**
    
    ```
    {
        "output": {
            "finish_reason": "stop",
            "session_id": "b8e051ba7e954ff8919208e7b84430fa",
            "text": "The tenth rule of the dormitory convention states that dormitory members should work together to create and maintain a clean, tidy, beautiful, and culturally refined dormitory environment. If you need to understand the complete dormitory convention content, you may need to check other provisions or directly consult the dormitory management department. Is there any specific part you would like to know more about?"
        },
        "usage": {
            "models": [
                {
                    "output_tokens": 70,
                    "model_id": "qwen-max",
                    "input_tokens": 855
                }
            ]
        },
        "request_id": "0921ee34-2754-9616-a826-cea33a0e0a14"
    }
    ```
    

## C**ustom node parameter**

This example shows passing custom node parameters using a **city administrative regions query**.

**Note**

Custom node parameters pass through the Start node in **Workflow Applications** or the Application node in **Agent Orchestration Applications**.

Example: passing custom parameters to the Start node in a **Workflow Application**.

### **How to use**

#### **Step 1: Custom tool parameters**

In or **[My Applications](https://modelstudio.console.alibabacloud.com/?tab=app#/app-center)**, select or create a **Workflow Application** and customize **Start node** parameters.

To pass the city parameter: In the **Start node**, set String variable `city`, insert city and query variables in the **Prompt**, and **Publish** the application.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5470814471/p872584.png)

#### **Step 2: Use API**

Pass `city` via `biz_params` and `query` via `prompt`.

## Python

**Sample request**

```
import os
from http import HTTPStatus
import dashscope
from dashscope import Application
# Custom tool parameter configuration for API requests

dashscope.base_http_api_url = 'https://dashscope-intl.aliyuncs.com/api/v1'
biz_params = {"city": "Hangzhou"}
response = Application.call(
    # Replace with api_key="sk-xxx" if DASHSCOPE_API_KEY is not set. Avoid hardcoding API Keys in production to prevent leakage.
    api_key=os.getenv("DASHSCOPE_API_KEY"),
    app_id='YOUR_APP_ID',  # Replace with your application ID
    prompt='Query the administrative divisions of this city',
    biz_params=biz_params  # Pass business parameters
)

if response.status_code != HTTPStatus.OK:
    print(f'request_id={response.request_id}')
    print(f'code={response.status_code}')
    print(f'message={response.message}')
    print(f'See error codes: https://www.alibabacloud.com/help/zh/model-studio/developer-reference/error-code')
else:
    print(f'{response.output.text}')  # Process text output only
```

**Sample response**

```
Hangzhou, as the capital city of Zhejiang Province, has 10 districts: Shangcheng District, Gongshu District, West Lake District, Binjiang District, Xiaoshan District, Yuhang District, Linping District, Qiantang District, Fuyang District, and Lin'an District. Each district has its unique characteristics and development focus.

- Shangcheng District: Located in the central area of Hangzhou, it is one of the political, economic, and cultural centers of Hangzhou.
- Gongshu District: Characterized by canal culture, it has numerous historical and cultural heritage sites.
- West Lake District: The famous West Lake scenic area is located in this district, making it an important destination for tourism.
- Binjiang District: A high-tech industry cluster, home to companies like Alibaba.
- Xiaoshan District: An administrative district in the southeast, with rapid economic development, especially in manufacturing.
- Yuhang District: Rapidly developing in recent years, particularly in the internet economy sector, with Alibaba's headquarters located here (Note: Alibaba's headquarters is actually in Binjiang District).
- Linping District: A newly established administrative district, aimed at promoting comprehensive economic and social development in the region.
- Qiantang District: Also a result of recent administrative division adjustments, emphasizing a combination of innovative development and ecological protection.
- Fuyang District: Located southwest of Hangzhou, known for its rich natural landscapes and long history and culture.
- Lin'an District: Located in western Hangzhou, known for its beautiful ecology and deep cultural heritage.

Please note that specific city planning may change over time, so refer to the latest official information.
```

## Java

**Sample request**

```
import com.alibaba.dashscope.app.*;
import com.alibaba.dashscope.exception.ApiException;
import com.alibaba.dashscope.exception.InputRequiredException;
import com.alibaba.dashscope.exception.NoApiKeyException;
import com.alibaba.dashscope.utils.JsonUtils;
import io.reactivex.Flowable;
import com.alibaba.dashscope.utils.Constants;

public class Main {
  static {
        Constants.baseHttpApiUrl="https://dashscope-intl.aliyuncs.com/api/v1";
    }
    public static void appCall() throws NoApiKeyException, InputRequiredException {

        String bizParams =
                "{\"city\":\"Hangzhou\"}";
        ApplicationParam param = ApplicationParam.builder()
                // Replace with .apiKey("sk-xxx") if DASHSCOPE_API_KEY is not set. Avoid hardcoding API Keys in production to prevent leakage.
                .apiKey(System.getenv("DASHSCOPE_API_KEY"))
                .appId("YOUR_APP_ID")
                .prompt("Query the administrative divisions of this city")
                .bizParams(JsonUtils.parse(bizParams))
                .build();

        Application application = new Application();
        ApplicationResult result = application.call(param);
        System.out.printf("%s\n",
                result.getOutput().getText());
    }

    public static void main(String[] args) {
        try {
            appCall();
        } catch (ApiException | NoApiKeyException | InputRequiredException e) {
            System.out.printf("Exception: %s", e.getMessage());
            System.out.println("See error codes: https://www.alibabacloud.com/help/zh/model-studio/developer-reference/error-code");
        }
        System.exit(0);
    }
}
```

**Sample response**

```
Hangzhou is the capital city of Zhejiang Province, and its administrative divisions mainly include 10 districts: Shangcheng District, Gongshu District, West Lake District, Binjiang District, Xiaoshan District, Yuhang District, Linping District, Qiantang District, Fuyang District, and Lin'an District. Each district has its own characteristics and development focus.

- Shangcheng District: Located in the center of Hangzhou, with many historical and cultural heritage sites.
- Gongshu District: Famous for its Grand Canal culture, and also an important commercial and residential area.
- West Lake District: Known for its beautiful natural scenery, including the famous West Lake scenic area.
- Binjiang District: A high-tech industry cluster, where the Hangzhou National High-tech Industry Development Zone is located.
- Xiaoshan District: Rapid economic development, particularly outstanding in manufacturing.
- Yuhang District: Rapidly rising in recent years with the development of high-tech companies like Alibaba.
- Linping District: Adjusted from part of the original Yuhang District in 2021, focusing on ecological construction and technological innovation.
- Qiantang District: Also established in 2021, positioned as a new transportation hub and industrial development highland in eastern Hangzhou.
- Fuyang District: A historical and cultural city with a long history, also an important base for the paper industry.
- Lin'an District: Located in western Hangzhou, with high forest coverage and a good ecological environment.

These areas together form Hangzhou's unique geographical pattern and socio-economic structure. If you are interested in a specific area or need more detailed information, please let me know!
```

## HTTP

## curl

**Sample request**

```
curl -X POST https://dashscope-intl.aliyuncs.com/api/v1/apps/YOUR_APP_ID/completion \
--header "Authorization: Bearer $DASHSCOPE_API_KEY" \
--header 'Content-Type: application/json' \
--data '{
    "input": {
        "prompt": "Query the administrative divisions of this city",
        "biz_params": {
        "city": "Hangzhou"}
    },
    "parameters":  {}
}'
```

> Replace YOUR\_APP\_ID with your app ID.

**Sample response**

```
{"output":{"finish_reason":"stop","session_id":"c211219896004b50a1f6f66f2ec5413e",
"text":"Hangzhou has 10 districts, 1 county, and administers 2 county-level cities, namely:
Shangcheng District, Gongshu District, West Lake District, Binjiang District, Xiaoshan District, Yuhang District, Linping District, Qiantang District, Fuyang District, Lin'an District, Tonglu County, Chun'an County, Jiande City, and Zhuji City.
Note that Zhuji City is directly administered by Zhejiang Province and jointly managed by Hangzhou and Shaoxing."},"usage":{},
"request_id":"02c3c9e1-7912-9505-91aa-248d04fb1f5d"}
```

## PHP

**Sample request**

```
<?php

# Replace with $api_key="sk-xxx" if DASHSCOPE_API_KEY is not set. Avoid hardcoding API Keys in production to prevent leakage.
$api_key = getenv("DASHSCOPE_API_KEY");
$application_id = 'YOUR_APP_ID'; // Replace with your application ID
$url = "https://dashscope-intl.aliyuncs.com/api/v1/apps/$application_id/completion";

// Construct request data
$data = [
    "input" => [
        'prompt' => 'Query the administrative divisions of this city',
        'biz_params' => [
            'city' => 'Hangzhou'
        ]
    ],
];
// Encode data as JSON
$dataString = json_encode($data);

// Check if json_encode was successful
if (json_last_error() !== JSON_ERROR_NONE) {
    die("JSON encoding failed with error: " . json_last_error_msg());
}

// Initialize curl session
$ch = curl_init($url);

// Set curl options
curl_setopt($ch, curlOPT_CUSTOMREQUEST, "POST");
curl_setopt($ch, curlOPT_POSTFIELDS, $dataString);
curl_setopt($ch, curlOPT_RETURNTRANSFER, true);
curl_setopt($ch, curlOPT_HTTPHEADER, [
    'Content-Type: application/json',
    'Authorization: Bearer ' . $api_key
]);

// Execute request
$response = curl_exec($ch);

// Check if curl execution was successful
if ($response === false) {
    die("curl Error: " . curl_error($ch));
}

// Get HTTP status code
$status_code = curl_getinfo($ch, curlINFO_HTTP_CODE);
// Close curl session
curl_close($ch);
// Decode response data
$response_data = json_decode($response, true);
// Process response
if ($status_code == 200) {
    if (isset($response_data['output']['text'])) {
        echo "{$response_data['output']['text']}\n";
    } else {
        echo "No text in response.\n";
    }
} else {
    if (isset($response_data['request_id'])) {
        echo "request_id={$response_data['request_id']}\n";
    }
    echo "code={$status_code}\n";
    if (isset($response_data['message'])) {
        echo "message={$response_data['message']}\n";
    } else {
        echo "message=Unknown error\n";
    }
}
```

**Sample response**

```
Hangzhou is the capital city of Zhejiang Province, and its administrative divisions mainly include 10 districts: Shangcheng District, Gongshu District, West Lake District, Binjiang District, Xiaoshan District, Yuhang District, Linping District, Qiantang District, Fuyang District, and Lin'an District.

Each district has its own characteristics and development focus, for example:
- **Shangcheng District** and **Gongshu District** are located in the center of Hangzhou, with bustling commerce and a long history.
- **West Lake District** is famous for the beautiful West Lake, and is also an important scientific, educational, and cultural district.
- **Binjiang District** is known for its high-tech industry development.
- **Xiaoshan District**, **Yuhang District**, and others are new urban areas or economic development zones that have rapidly emerged with urban development in recent years.
- **Lin'an District**, **Fuyang District**, and other areas retain more natural landscapes and rural features.

Please note that China's administrative divisions may change according to national policies, so please obtain the latest information through official channels.
```

## Node.js

**Dependency:**

```
npm install axios
```

**Sample request**

```
const axios = require('axios');

async function callDashScope() {
    // Replace with apiKey='sk-xxx' if DASHSCOPE_API_KEY is not set. Avoid hardcoding API Keys in production to prevent leakage.
    const apiKey = process.env.DASHSCOPE_API_KEY;
    const appId = 'YOUR_APP_ID'; // Replace with your application ID

    const url = `https://dashscope-intl.aliyuncs.com/api/v1/apps/${appId}/completion`;

    const data = {
        input: {
            prompt: "Query the administrative divisions of this city",
            biz_params: {
                'city': 'Hangzhou',
            },
        },
        parameters: {},
        debug: {},
    };

    try {
        console.log("Sending request to DashScope API...");

        const response = await axios.post(url, data, {
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            }
        });

        if (response.status === 200) {
            if (response.data.output && response.data.output.text) {
                console.log(`${response.data.output.text}`);
            }
        } else {
            console.log("Request failed:");
            if (response.data.request_id) {
                console.log(`request_id=${response.data.request_id}`);
            }
            console.log(`code=${response.status}`);
            if (response.data.message) {
                console.log(`message=${response.data.message}`);
            } else {
                console.log('message=Unknown error');
            }
        }
    } catch (error) {
        console.error(`Error calling DashScope: ${error.message}`);
        if (error.response) {
            console.error(`Response status: ${error.response.status}`);
            console.error(`Response data: ${JSON.stringify(error.response.data, null, 2)}`);
        }
    }
}

callDashScope();
```

**Sample response**

```
Hangzhou is the capital of Zhejiang Province, and its administrative divisions include 10 districts. Specifically:

1. Shangcheng District (Shàngchéng Qū): Located in the south-central part of Hangzhou, it is one of the oldest areas with the deepest cultural heritage in Hangzhou.
2. Gongshu District (Gǒngshù Qū): A new district formed by merging the original Xiacheng District and Gongshu District, located in the northern part of Hangzhou.
3. West Lake District (Xīhú Qū): Famous for the World Cultural Heritage site West Lake, with rich natural and cultural landscapes.
4. Binjiang District (Bīnjiāng Qū): Located on the south bank of the Qiantang River, it is a high-tech industry cluster.
5. Xiaoshan District (Xiāoshān Qū): Located in the eastern part of Hangzhou, it is one of China's important manufacturing bases.
6. Yuhang District (Yúháng Qū): Once home to Linping, one of China's four famous towns, it has now become an important economic development zone in Hangzhou.
7. Fuyang District (Fùyáng Qū): Located in the southwestern part of Hangzhou, named after the Fuchun River that flows through it.
8. Lin'an District (Lín'ān Qū): Located in the western mountainous area of Hangzhou, known for its beautiful natural scenery.
9. Qiantang District (Qiántáng Qū): Established in 2021, formed from the original Dajiang East Industrial Cluster and parts of Xiaoshan District, aimed at promoting the development of eastern Hangzhou.
10. Linping District (Lín Píng Qū): A new administrative division separated from Yuhang District, mainly covering areas such as the original Linping Street in Yuhang District.

The information above reflects the situation as of my last update. Please note that administrative divisions may change, so please refer to the latest official announcements.
```

## C#

**Sample request**

```
using System.Text;

class Program
{
    static async Task Main(string[] args)
    {
        //Replace with apiKey="sk-xxx" if DASHSCOPE_API_KEY is not set. Avoid hardcoding API Keys in production to prevent leakage. 
        string apiKey = Environment.GetEnvironmentVariable("DASHSCOPE_API_KEY") ?? throw new InvalidOperationException("DASHSCOPE_API_KEY environment variable is not set.");
        string appId = "YOUR_APP_ID"; // Replace with your application ID
        string url = $"https://dashscope-intl.aliyuncs.com/api/v1/apps/{appId}/completion";

        using (HttpClient client = new HttpClient())
        {
            client.DefaultRequestHeaders.Add("Authorization", $"Bearer {apiKey}");
            string jsonContent = @"{
                ""input"": {
                    ""prompt"": ""Query the administrative divisions of this city"",
                    ""biz_params"":{
                        ""city"":""Hangzhou""
                    }
                },
                ""parameters"": {},
                ""debug"": {}
            }";

            HttpContent content = new StringContent(jsonContent, Encoding.UTF8, "application/json");

            try
            {
                HttpResponseMessage response = await client.PostAsync(url, content);

                if (response.IsSuccessStatusCode)
                {
                    string responseBody = await response.Content.ReadAsStringAsync();
                    Console.WriteLine("Request successful:");
                    Console.WriteLine(responseBody);
                }
                else
                {
                    Console.WriteLine($"Request failed with status code: {response.StatusCode}");
                    string responseBody = await response.Content.ReadAsStringAsync();
                    Console.WriteLine(responseBody);
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error calling DashScope: {ex.Message}");
            }
        }
    }
}
```

**Sample response**

```
{
    "output": {
        "finish_reason": "stop",
        "session_id": "7a9ff57eec7d475fa5d487de5f5178d2",
        "text": "Hangzhou is the capital of Zhejiang Province, and it has 10 districts: Shangcheng District, Gongshu District, West Lake District, Binjiang District, Xiaoshan District, Yuhang District, Linping District, Qiantang District, Fuyang District, and Lin'an District. Each district has its unique geographical location and development characteristics. For example, West Lake District is known for its beautiful natural scenery, especially the famous Hangzhou West Lake; while Binjiang District is more known for its high-tech industry development. In addition, as the city develops, administrative divisions may also be adjusted, so please pay attention to the latest information released by official sources."
    },
    "usage": {

    },
    "request_id": "d2c2fcc9-f821-98c9-9430-8704a2a41225"
}
```

## Go

**Sample request**

```
package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"os"
)

func main() {
	// Replace with apiKey := "sk-xxx" if DASHSCOPE_API_KEY is not set. Avoid hardcoding API Keys in production to prevent leakage.
	apiKey := os.Getenv("DASHSCOPE_API_KEY")
	appId := "YOUR_APP_ID" // Replace with your application ID

	if apiKey == "" {
		fmt.Println("Please ensure that DASHSCOPE_API_KEY is set.")
		return
	}

	url := fmt.Sprintf("https://dashscope-intl.aliyuncs.com/api/v1/apps/%s/completion", appId)

	// Create request body
	requestBody := map[string]interface{}{
		"input": map[string]interface{}{
			"prompt": "Query the administrative divisions of this city",
			"biz_params": map[string]interface{}{
				"city": "Hangzhou",
			},
		},
		"parameters": map[string]interface{}{},
		"debug":      map[string]interface{}{},
	}

	jsonData, err := json.Marshal(requestBody)
	if err != nil {
		fmt.Printf("Failed to marshal JSON: %v\n", err)
		return
	}

	// Create HTTP POST request
	req, err := http.NewRequest("POST", url, bytes.NewBuffer(jsonData))
	if err != nil {
		fmt.Printf("Failed to create request: %v\n", err)
		return
	}

	// Set request headers
	req.Header.Set("Authorization", "Bearer "+apiKey)
	req.Header.Set("Content-Type", "application/json")

	// Send request
	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		fmt.Printf("Failed to send request: %v\n", err)
		return
	}
	defer resp.Body.Close()

	// Read response
	body, err := io.ReadAll(resp.Body)
	if err != nil {
		fmt.Printf("Failed to read response: %v\n", err)
		return
	}

	// Process response
	if resp.StatusCode == http.StatusOK {
		fmt.Println("Request successful:")
		fmt.Println(string(body))
	} else {
		fmt.Printf("Request failed with status code: %d\n", resp.StatusCode)
		fmt.Println(string(body))
	}
}
```

**Sample response**

```
{
    "output": {
        "finish_reason": "stop",
        "session_id": "2dc3e1a9dcd248c6bb9ca92bffc3e745",
        "text": "Hangzhou, abbreviated as \"Hang\", is the capital city of Zhejiang Province. According to the latest administrative division adjustments, Hangzhou now has 10 districts, 2 county-level cities, and 1 county, specifically:

- Districts (10): Shangcheng District, Gongshu District, West Lake District, Binjiang District, Xiaoshan District, Yuhang District, Linping District, Qiantang District, Fuyang District, Lin'an District.
- County-level cities (2): Jiande City, Tonglu County (note that Tonglu is actually treated as a county-level city here, but strictly speaking it is a county).
- County (1): Chun'an County.

Please note that administrative regions may change over time, so please refer to the latest official announcements. The information above is compiled based on relatively recent materials. For the latest changes, it is recommended to visit the government's official website to obtain the most accurate information."
    },
    "usage": {

    },
    "request_id": "d3c8f368-b645-9446-bfe4-20ca51821a02"
}
```

## **Next Steps**

[Create a custom plugin](/help/en/model-studio/custom-plug-ins)

[Application Invocation instructions and examples](/help/en/model-studio/application-calling-guide)

[Parameter list and API reference for Application Invocation API](/help/en/model-studio/dashscope-api-reference/)
