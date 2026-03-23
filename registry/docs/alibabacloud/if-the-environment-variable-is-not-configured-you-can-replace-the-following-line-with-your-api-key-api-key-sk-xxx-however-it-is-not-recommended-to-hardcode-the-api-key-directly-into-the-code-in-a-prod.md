This topic describes the input and output parameters when calling a Model Studio application.

**Related guide**: [Application calling](/help/en/model-studio/application-calling-guide).

## Invocation methods

You can use DashScope SDK or HTTP interface to call Model Studio applications (agent, workflow, or agent orchestration).

> You must have created a [Model Studio application](/help/en/model-studio/application-introduction), [obtained an API Key](/help/en/model-studio/get-api-key), and [set the API key as an environment variable](/help/en/model-studio/configure-api-key-through-environment-variables). To use SDK, you must also [install the DashScope SDK](/help/en/model-studio/install-sdk).

### **Request body**

### **Sample request**

#### **Single-round conversation**

##### **Python**

**Sample request**

```
import os
from http import HTTPStatus
from dashscope import Application
import dashscope
dashscope.base_http_api_url = 'https://dashscope-intl.aliyuncs.com/api/v1'
response = Application.call(
    # If environment variables are not configured, you can replace the following line with api_key="sk-xxx". However, it is not recommended to hard code the API Key directly into the code in a production environment to reduce the risk of API Key leakage.
    api_key=os.getenv("DASHSCOPE_API_KEY"),
    app_id='YOUR_APP_ID',# Replace with the actual application ID
    prompt='Who are you?')

if response.status_code != HTTPStatus.OK:
    print(f'request_id={response.request_id}')
    print(f'code={response.status_code}')
    print(f'message={response.message}')
    print(f'Refer to: https://www.alibabacloud.com/help/en/model-studio/developer-reference/error-code')
else:
    print(response.output.text)
```

##### **Java**

**Sample request**

```
// Recommended dashscope SDK version >= 2.12.0
import com.alibaba.dashscope.app.*;
import com.alibaba.dashscope.exception.ApiException;
import com.alibaba.dashscope.exception.InputRequiredException;
import com.alibaba.dashscope.exception.NoApiKeyException;
import com.alibaba.dashscope.utils.Constants;
public class Main {
    static {
      Constants.baseHttpApiUrl="https://dashscope-intl.aliyuncs.com/api/v1";
    }
    public static void appCall()
            throws ApiException, NoApiKeyException, InputRequiredException {
        ApplicationParam param = ApplicationParam.builder()
                // If environment variables are not configured, you can replace the following line with .apiKey("sk-xxx"). However, it is not recommended to hard code the API Key directly into the code in a production environment to reduce the risk of API Key leakage.
                .apiKey(System.getenv("DASHSCOPE_API_KEY"))
                .appId("YOUR_APP_ID")
                .prompt("Who are you?")
                .build();

        Application application = new Application();
        ApplicationResult result = application.call(param);

        System.out.printf("text: %s\n",
                result.getOutput().getText());
    }

    public static void main(String[] args) {
        try {
            appCall();
        } catch (ApiException | NoApiKeyException | InputRequiredException e) {
            System.err.println("message: "+e.getMessage());
            System.out.println("Refer to: https://www.alibabacloud.com/help/en/model-studio/developer-reference/error-code");
        }
        System.exit(0);
    }
}
```

##### **HTTP**

###### Curl

**Sample request**

```
curl -X POST https://dashscope-intl.aliyuncs.com/api/v1/apps/YOUR_APP_ID/completion \
--header "Authorization: Bearer $DASHSCOPE_API_KEY" \
--header 'Content-Type: application/json' \
--data '{
    "input": {
        "prompt": "Who are you?"
    },
    "parameters":  {},
    "debug": {}
}' 
```

> Replace YOUR\_APP\_ID with the actual application ID.

###### PHP

**Sample request**

```
<?php

# If the environment variable is not configured, you can replace the following line with your API Key: $api_key="sk-xxx". However, it is not recommended to hardcode the API Key directly into the code in a production environment to reduce the risk of API Key leakage.
$api_key = getenv("DASHSCOPE_API_KEY");
$application_id = 'YOUR_APP_ID'; // Replace with your actual application ID

$url = "https://dashscope-intl.aliyuncs.com/api/v1/apps/$application_id/completion";

// Construct request data
$data = [
    "input" => [
        'prompt' => 'Who are you?'
    ]
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

// Execute the request
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
// Handle response
if ($status_code == 200) {
    if (isset($response_data['output']['text'])) {
        echo "{$response_data['output']['text']}\n";
    } else {
        echo "No text in response.\n";
    }}
else {
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

###### Node.js

**Dependency:**

```
npm install axios
```

**Sample request**

```
const axios = require('axios');

async function callDashScope() {
    // If environment variables are not configured, you can replace the following line with apiKey='sk-xxx'. However, it is not recommended to hard code the API Key directly into the code in a production environment to reduce the risk of API Key leakage.
    const apiKey = process.env.DASHSCOPE_API_KEY;
    const appId = 'YOUR_APP_ID';// Replace with the actual application ID

    const url = `https://dashscope-intl.aliyuncs.com/api/v1/apps/${appId}/completion`;

    const data = {
        input: {
            prompt: "Who are you?"
        },
        parameters: {},
        debug: {}
    };

    try {
        const response = await axios.post(url, data, {
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            }
        });

        if (response.status === 200) {
            console.log(`${response.data.output.text}`);
        } else {
            console.log(`request_id=${response.headers['request_id']}`);
            console.log(`code=${response.status}`);
            console.log(`message=${response.data.message}`);
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

###### C#

**Sample request**

```
using System;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

class Program
{
    static async Task Main(string[] args)
    {
        //If environment variables are not configured, you can replace the following line with apiKey="sk-xxx". However, it is not recommended to hard code the API Key directly into the code in a production environment to reduce the risk of API Key leakage. 
        string apiKey = Environment.GetEnvironmentVariable("DASHSCOPE_API_KEY") ?? throw new InvalidOperationException("DASHSCOPE_API_KEY environment variable is not set.");
        string appId = "YOUR_APP_ID"; // Replace with the actual application ID

        string url = $"https://dashscope-intl.aliyuncs.com/api/v1/apps/{appId}/completion";

        using (HttpClient client = new HttpClient())
        {
            client.DefaultRequestHeaders.Add("Authorization", $"Bearer {apiKey}");

            string jsonContent = @"{
                ""input"": {
                    ""prompt"": ""Who are you?""
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

###### Go

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
	// If environment variables are not configured, you can replace the following line with apiKey := "sk-xxx". However, it is not recommended to hard code the API Key directly into the code in a production environment to reduce the risk of API Key leakage.
	apiKey := os.Getenv("DASHSCOPE_API_KEY")
	appId := "YOUR_APP_ID" // Replace with the actual application ID

	if apiKey == "" {
		fmt.Println("Please ensure DASHSCOPE_API_KEY is set.")
		return
	}

	url := fmt.Sprintf("https://dashscope-intl.aliyuncs.com/api/v1/apps/%s/completion", appId)

	// Create request body
	requestBody := map[string]interface{}{
		"input": map[string]string{
			"prompt": "Who are you?",
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

#### **Multi-round conversation**

Pass `session_id` or `messages` to implement multi-round conversation. For more information, see [Multi-round conversation](/help/en/model-studio/application-calling-guide#ffa72f3150p5y).

> Currently, only **Agent Applications** and **Dialog Workflow Applications** support multi-round conversation.

##### **Python**

**Sample request**

```
import os
from http import HTTPStatus
from dashscope import Application
import dashscope
dashscope.base_http_api_url = 'https://dashscope-intl.aliyuncs.com/api/v1'

def call_with_session():
    response = Application.call(
        # If environment variables are not configured, you can replace the following line with api_key="sk-xxx". However, it is not recommended to hard-code the API Key directly into the code in a production environment to reduce the risk of API Key leakage.
        api_key=os.getenv("DASHSCOPE_API_KEY"),
        app_id='YOUR_APP_ID',  # Replace with the actual application ID
        prompt='Who are you?')

    if response.status_code != HTTPStatus.OK:
        print(f'request_id={response.request_id}')
        print(f'code={response.status_code}')
        print(f'message={response.message}')
        print(f'Refer to: https://www.alibabacloud.com/help/en/model-studio/developer-reference/error-code')
        return response

    responseNext = Application.call(
                # If environment variables are not configured, you can replace the following line with api_key="sk-xxx". However, it is not recommended to hard-code the API Key directly into the code in a production environment to reduce the risk of API Key leakage.
                api_key=os.getenv("DASHSCOPE_API_KEY"),
                app_id='YOUR_APP_ID',  # Replace with the actual application ID
                prompt='What skills do you have?',
                session_id=response.output.session_id)  # session_id from the previous response

    if responseNext.status_code != HTTPStatus.OK:
        print(f'request_id={responseNext.request_id}')
        print(f'code={responseNext.status_code}')
        print(f'message={responseNext.message}')
        print(f'Refer to: https://www.alibabacloud.com/help/en/model-studio/developer-reference/error-code')
    else:
        print('%s\n session_id=%s\n' % (responseNext.output.text, responseNext.output.session_id))
        # print('%s\n' % (response.usage))

if __name__ == '__main__':
    call_with_session()
```

##### **Java**

**Sample request**

```
import com.alibaba.dashscope.app.*;
import com.alibaba.dashscope.exception.ApiException;
import com.alibaba.dashscope.exception.InputRequiredException;
import com.alibaba.dashscope.exception.NoApiKeyException;
import java.util.Arrays;
import java.util.List;
import com.alibaba.dashscope.utils.Constants;
public class Main {
    static {
      Constants.baseHttpApiUrl="https://dashscope-intl.aliyuncs.com/api/v1";
    }
    public static void callWithSession()
            throws ApiException, NoApiKeyException, InputRequiredException {
        ApplicationParam param = ApplicationParam.builder()
                // If environment variables are not configured, you can replace the following line with .apiKey("sk-xxx"). However, it is not recommended to hard-code the API Key directly into the code in a production environment to reduce the risk of API Key leakage.
                .apiKey(System.getenv("DASHSCOPE_API_KEY"))
                // Replace with the actual application ID
                .appId("YOUR_APP_ID")
                .prompt("Who are you?")
                .build();

        Application application = new Application();
        ApplicationResult result = application.call(param);

        param.setSessionId(result.getOutput().getSessionId());
        param.setPrompt("What skills do you have?");
        result = application.call(param);

        System.out.printf("%s\n, session_id: %s\n",
                result.getOutput().getText(), result.getOutput().getSessionId());
    }

    public static void main(String[] args) {
        try {
            callWithSession();
        } catch (ApiException | NoApiKeyException | InputRequiredException e) {
            System.out.printf("Exception: %s", e.getMessage());
            System.out.println("Refer to: https://www.alibabacloud.com/help/en/model-studio/developer-reference/error-code");
        }
        System.exit(0);
    }
}
```

##### **HTTP**

###### Curl

**Sample request (round 1)**

```
curl -X POST https://dashscope-intl.aliyuncs.com/api/v1/apps/YOUR_APP_ID/completion \
--header "Authorization: Bearer $DASHSCOPE_API_KEY" \
--header 'Content-Type: application/json' \
--data '{
    "input": {
        "prompt": "Who are you?"
    },
    "parameters":  {},
    "debug": {}
}' 
```

**Sample request (round 2)**

```
curl -X POST https://dashscope-intl.aliyuncs.com/api/v1/apps/YOUR_APP_ID/completion \
--header "Authorization: Bearer $DASHSCOPE_API_KEY" \
--header 'Content-Type: application/json' \
--data '{
    "input": {
        "prompt": "What skills do you have?",
        "session_id":"4f8ef7233dc641aba496cb201fa59f8c"
    },
    "parameters":  {},
    "debug": {}
}' 
```

###### PHP

**Sample request (round 1)**

```
<?php
# If the environment variable is not configured, you can replace the next line with your API key: $api_key="sk-xxx". However, it is not recommended to hardcode the API key directly into the code in a production environment to reduce the risk of API key leakage.
$api_key = getenv("DASHSCOPE_API_KEY");
$application_id = 'YOUR_APP_ID'; // Replace with the actual application ID

$url = "https://dashscope-intl.aliyuncs.com/api/v1/apps/$application_id/completion";

// Construct request data
$data = [
    "input" => [
        'prompt' => 'Who are you?'
    ]
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

// Execute the request
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
// Handle response
if ($status_code == 200) {
    if (isset($response_data['output']['text'])) {
        echo "{$response_data['output']['text']}\n";
    } else {
        echo "No text in response.\n";
    };
    if (isset($response_data['output']['session_id'])) {
        echo "session_id={$response_data['output']['session_id']}\n";
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
?>
```

**Sample request (round 2)**

```
<?php
# If the environment variable is not configured, you can replace the next line with your API key: $api_key="sk-xxx". However, it is not recommended to hardcode the API key directly into the code in a production environment to reduce the risk of API key leakage.
$api_key = getenv("DASHSCOPE_API_KEY");
$application_id = 'YOUR_APP_ID'; // Replace with the actual application ID

$url = "https://dashscope-intl.aliyuncs.com/api/v1/apps/$application_id/completion";

// Construct request data
$data = [
    "input" => [
        'prompt' => 'What skills do you have?',
        // Replace with the session_id returned from the previous round of conversation
        'session_id' => '2e658bcb514f4d30ab7500b4766a8d43'
    ]
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
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
curl_setopt($ch, CURLOPT_POSTFIELDS, $dataString);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Content-Type: application/json',
    'Authorization: Bearer ' . $api_key
]);

// Execute the request
$response = curl_exec($ch);

// Check if curl execution was successful
if ($response === false) {
    die("curl Error: " . curl_error($ch));
}

// Get HTTP status code
$status_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
// Close curl session
curl_close($ch);
// Decode response data
$response_data = json_decode($response, true);
// Handle response
if ($status_code == 200) {
    if (isset($response_data['output']['text'])) {
        echo "{$response_data['output']['text']}\n";
    } else {
        echo "No text in response.\n";
    }
    if (isset($response_data['output']['session_id'])) {
        echo "session_id={$response_data['output']['session_id']}\n";
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
?>
```

###### Node.js

**Dependency:**

```
npm install axios
```

**Sample request (round 1)**

```
const axios = require('axios');

async function callDashScope() {
    // If environment variables are not configured, you can replace the following line with apiKey='sk-xxx'. However, it is not recommended to hard-code the API Key directly into the code in a production environment to reduce the risk of API Key leakage.
    const apiKey = process.env.DASHSCOPE_API_KEY;
    const appId = 'YOUR_APP_ID';// Replace with the actual application ID

    const url = `https://dashscope-intl.aliyuncs.com/api/v1/apps/${appId}/completion`;

    const data = {
        input: {
            prompt: "Who are you?"
        },
        parameters: {},
        debug: {}
    };

    try {
        const response = await axios.post(url, data, {
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            }
        });

        if (response.status === 200) {
            console.log(`${response.data.output.text}`);
            console.log(`session_id=${response.data.output.session_id}`);
        } else {
            console.log(`request_id=${response.headers['request_id']}`);
            console.log(`code=${response.status}`);
            console.log(`message=${response.data.message}`);
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

**Sample request (round 2)**

```
const axios = require('axios');

async function callDashScope() {
    // If environment variables are not configured, you can replace the following line with apiKey='sk-xxx'. However, it is not recommended to hard-code the API Key directly into the code in a production environment to reduce the risk of API Key leakage.
    const apiKey = process.env.DASHSCOPE_API_KEY;
    const appId = 'YOUR_APP_ID';// Replace with the actual application ID

    const url = `https://dashscope-intl.aliyuncs.com/api/v1/apps/${appId}/completion`;
    // Replace session_id with the actual session_id from the previous conversation
    const data = {
        input: {
            prompt: "What skills do you have?",
            session_id: 'fe4ce8b093bf46159ea9927a7b22f0d3',
        },
        parameters: {},
        debug: {}
    };

    try {
        const response = await axios.post(url, data, {
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            }
        });

        if (response.status === 200) {
            console.log(`${response.data.output.text}`);
            console.log(`session_id=${response.data.output.session_id}`);
        } else {
            console.log(`request_id=${response.headers['request_id']}`);
            console.log(`code=${response.status}`);
            console.log(`message=${response.data.message}`);
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

###### C#

**Sample request (round 1)**

```
using System;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

class Program
{
    static async Task Main(string[] args)
    {
        //If environment variables are not configured, you can replace the following line with apiKey="sk-xxx". However, it is not recommended to hard-code the API Key directly into the code in a production environment to reduce the risk of API Key leakage. 
        string apiKey = Environment.GetEnvironmentVariable("DASHSCOPE_API_KEY") ?? throw new InvalidOperationException("DASHSCOPE_API_KEY environment variable is not set.");
        string appId = "YOUR_APP_ID"; // Replace with the actual application ID

        string url = $"https://dashscope-intl.aliyuncs.com/api/v1/apps/{appId}/completion";

        using (HttpClient client = new HttpClient())
        {
            client.DefaultRequestHeaders.Add("Authorization", $"Bearer {apiKey}");

            string jsonContent = @"{
                ""input"": {
                    ""prompt"": ""Who are you?""
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

**Sample request (round 2)**

```
using System;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

class Program
{
    static async Task Main(string[] args)
    {
        //If environment variables are not configured, you can replace the following line with apiKey="sk-xxx". However, it is not recommended to hard-code the API Key directly into the code in a production environment to reduce the risk of API Key leakage. 
        string apiKey = Environment.GetEnvironmentVariable("DASHSCOPE_API_KEY") ?? throw new InvalidOperationException("DASHSCOPE_API_KEY environment variable is not set.");
        string appId = "YOUR_APP_ID"; // Replace with the actual application ID

        string url = $"https://dashscope-intl.aliyuncs.com/api/v1/apps/{appId}/completion";

        using (HttpClient client = new HttpClient())
        {
            client.DefaultRequestHeaders.Add("Authorization", $"Bearer {apiKey}");

            string jsonContent = @"{
                ""input"": {
                    ""prompt"": ""What skills do you have?"",
                    ""session_id"": ""7b830e4cc8fe44faad0e648f9b71435f""
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

###### Go

**Sample request (round 1)**

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
	// If environment variables are not configured, you can replace the following line with apiKey := "sk-xxx". However, it is not recommended to hard-code the API Key directly into the code in a production environment to reduce the risk of API Key leakage.
	apiKey := os.Getenv("DASHSCOPE_API_KEY")
	appId := "YOUR_APP_ID" // Replace with the actual application ID

	if apiKey == "" {
		fmt.Println("Please make sure DASHSCOPE_API_KEY is set.")
		return
	}

	url := fmt.Sprintf("https://dashscope-intl.aliyuncs.com/api/v1/apps/%s/completion", appId)

	// Create request body
	requestBody := map[string]interface{}{
		"input": map[string]string{
			"prompt": "Who are you?",
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

**Sample request (round 2)**

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
	// If environment variables are not configured, you can replace the following line with apiKey := "sk-xxx". However, it is not recommended to hard-code the API Key directly into the code in a production environment to reduce the risk of API Key leakage.
	apiKey := os.Getenv("DASHSCOPE_API_KEY")
	appId := "YOUR_APP_ID" // Replace with the actual application ID

	if apiKey == "" {
		fmt.Println("Please make sure DASHSCOPE_API_KEY is set.")
		return
	}

	url := fmt.Sprintf("https://dashscope-intl.aliyuncs.com/api/v1/apps/%s/completion", appId)

	// Create request body
	requestBody := map[string]interface{}{
		"input": map[string]string{
			"prompt":     "What skills do you have?",
			"session_id": "f7eea37f0c734c20998a021b688d6de2", // Replace with the actual session_id from the previous conversation
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
	}```
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

> Replace YOUR\_APP\_ID with the actual application ID. For round 2, replace the `session_id` with the actual session\_id returned from round 1.

#### **Parameter** passing

##### Python

**Sample request**

```
import os
from http import HTTPStatus
# Recommended dashscope SDK version >= 1.14.0
from dashscope import Application
import dashscope
dashscope.base_http_api_url = 'https://dashscope-intl.aliyuncs.com/api/v1'
biz_params = {
    # Custom plug-in input parameter passing for agent applications, replace your_plugin_code with your custom plug-in ID
    "user_defined_params": {
        "your_plugin_code": {
            "article_index": 2}}}
response = Application.call(
        # If environment variables are not configured, you can replace the following line with api_key="sk-xxx". However, it is not recommended to hard code the API Key directly into the code in a production environment to reduce the risk of API Key leakage.
        api_key=os.getenv("DASHSCOPE_API_KEY"),
        app_id='YOUR_APP_ID',
        prompt='Dormitory convention content',
        biz_params=biz_params)

if response.status_code != HTTPStatus.OK:
    print(f'request_id={response.request_id}')
    print(f'code={response.status_code}')
    print(f'message={response.message}')
    print(f'Refer to: https://www.alibabacloud.com/help/en/model-studio/developer-reference/error-code')
else:
    print('%s\n' % (response.output.text))  # Process text output only
    # print('%s\n' % (response.usage))
```

##### Java

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
                // Custom plug-in input parameter passing for agent applications, replace {your_plugin_code} with your custom plug-in ID
                "{\"user_defined_params\":{\"{your_plugin_code}\":{\"article_index\":2}}}";
        ApplicationParam param = ApplicationParam.builder()
                // If environment variables are not configured, you can replace the following line with .apiKey("sk-xxx"). However, it is not recommended to hard code the API Key directly into the code in a production environment to reduce the risk of API Key leakage.
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
            System.out.println("Refer to: https://www.alibabacloud.com/help/en/model-studio/developer-reference/error-code");
        }
        System.exit(0);
    }
}      
```

##### HTTP

###### Curl

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

> Replace YOUR\_APP\_ID with the actual application ID.

###### PHP

**Sample request**

```
<?php

# If environment variables are not configured, replace with the Dashscope API Key: $api_key="sk-xxx". However, it is not recommended to hard-code the API Key directly into the code in production environments to reduce the risk of API Key leakage.
$api_key = getenv("DASHSCOPE_API_KEY");
$application_id = 'YOUR_APP_ID'; // Replace with the actual application ID
$url = "https://dashscope-intl.aliyuncs.com/api/v1/apps/$application_id/completion";
// Replace {your_plugin_code} with the actual plugin ID
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
// Encode the data as JSON
$dataString = json_encode($data);

// Check if json_encode succeeded
if (json_last_error() !== JSON_ERROR_NONE) {
    die("JSON encoding failed with error: " . json_last_error_msg());
}

// Initialize curl session
$ch = curl_init($url);

// Set curl options
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
curl_setopt($ch, CURLOPT_POSTFIELDS, $dataString);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Content-Type: application/json',
    'Authorization: Bearer ' . $api_key
]);

// Execute request
$response = curl_exec($ch);

// Check if curl execution succeeded
if ($response === false) {
    die("curl Error: " . curl_error($ch));
}

// Get HTTP status code
$status_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
// Close curl session
curl_close($ch);
// Decode response data
$response_data = json_decode($response, true);
// Handle response
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

###### Node.js

**Dependency:**

```
npm install axios
```

**Sample request**

```
const axios = require('axios');

async function callDashScope() {
    // If environment variables are not configured, you can replace the following line with apiKey='sk-xxx'. However, it is not recommended to hard code the API Key directly into the code in a production environment to reduce the risk of API Key leakage.
    const apiKey = process.env.DASHSCOPE_API_KEY;
    const appId = 'YOUR_APP_ID';// Replace with the actual application ID
    const pluginCode = 'YOUR_PLUGIN_CODE';// Replace with the actual plug-in ID
    const url = `https://dashscope-intl.aliyuncs.com/api/v1/apps/${appId}/completion`;

    const data = {
        input: {
            prompt: "Dormitory convention content",
            biz_params: {
                user_defined_params: {
                    [pluginCode]: {
                        // article_index is a variable for the custom plug-in, replace with the actual plug-in variable
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

###### C#

**Sample request**

```
using System.Text;

class Program
{
    static async Task Main(string[] args)
    {
        // If environment variables are not configured, you can replace the following line with apiKey="sk-xxx". However, it is not recommended to hard code the API Key directly into the code in a production environment to reduce the risk of API Key leakage.
        string apiKey = Environment.GetEnvironmentVariable("DASHSCOPE_API_KEY")?? throw new InvalidOperationException("DASHSCOPE_API_KEY environment variable is not set.");;
        string appId = "YOUR_APP_ID";// Replace with the actual application ID

        if (string.IsNullOrEmpty(apiKey))
        {
            Console.WriteLine("Make sure you have set DASHSCOPE_API_KEY.");
            return;
        }

        string url = $"https://dashscope-intl.aliyuncs.com/api/v1/apps/{appId}/completion";

        using (HttpClient client = new HttpClient())
        {
            client.DefaultRequestHeaders.Add("Authorization", $"Bearer {apiKey}");
            string pluginCode = "{your_plugin_code}"; // Replace {your_plugin_code} with the actual plug-in ID
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

###### Go

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
	// If environment variables are not configured, you can replace the following line with apiKey := "sk-xxx". However, it is not recommended to hard code the API Key directly into the code in a production environment to reduce the risk of API Key leakage.
	apiKey := os.Getenv("DASHSCOPE_API_KEY")
	appId := "YOUR_APP_ID"           // Replace with the actual application ID
	pluginCode := "YOUR_PLUGIN_CODE" // Replace with the actual plug-in ID

	if apiKey == "" {
		fmt.Println("Make sure you have set DASHSCOPE_API_KEY.")
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

#### **Streaming output**

##### Python

**Sample request**

```
import os
from http import HTTPStatus
from dashscope import Application
import dashscope
dashscope.base_http_api_url = 'https://dashscope-intl.aliyuncs.com/api/v1'
responses = Application.call(
            # If environment variables are not configured, replace the following line with: api_key="sk-xxx". However, it is not recommended to hardcode the API Key directly into the code in a production environment to reduce the risk of API Key leakage.
            api_key=os.getenv("DASHSCOPE_API_KEY"), 
            app_id='YOUR_APP_ID',
            prompt='Who are you?',
            stream=True,  # Streaming output
            incremental_output=True)  # Incremental output

for response in responses:
    if response.status_code != HTTPStatus.OK:
        print(f'request_id={response.request_id}')
        print(f'code={response.status_code}')
        print(f'message={response.message}')
        print(f'Please refer to the documentation: https://www.alibabacloud.com/help/en/model-studio/developer-reference/error-code')
    else:
        print(f'{response.output.text}\n')  # Process to output only the text
```

##### Java

**Sample request**

```
// Recommended dashscope SDK version >= 2.15.0
import com.alibaba.dashscope.app.*;
import com.alibaba.dashscope.exception.ApiException;
import com.alibaba.dashscope.exception.InputRequiredException;
import com.alibaba.dashscope.exception.NoApiKeyException;
import io.reactivex.Flowable;// Streaming output
// Agent application implementation for streaming output results

import com.alibaba.dashscope.utils.Constants;

public class Main {
    static {
      Constants.baseHttpApiUrl="https://dashscope-intl.aliyuncs.com/api/v1";
    }
    public static void streamCall() throws NoApiKeyException, InputRequiredException {
        ApplicationParam param = ApplicationParam.builder()
                // If environment variables are not configured, replace the following line with: .apiKey("sk-xxx"). However, it is not recommended to hardcode the API Key directly into the code in a production environment to reduce the risk of API Key leakage.
                .apiKey(System.getenv("DASHSCOPE_API_KEY"))
                // Replace with the actual application ID
                .appId("YOUR_APP_ID")
                .prompt("Who are you?")
                // Incremental output
                .incrementalOutput(true)
                .build();
        Application application = new Application();
        // .streamCall(): Streaming output content
        Flowable<ApplicationResult> result = application.streamCall(param);
        result.blockingForEach(data -> {
            System.out.printf("%s\n",
                    data.getOutput().getText());
        });
    }
    public static void main(String[] args) {
        try {
            streamCall();
        } catch (ApiException | NoApiKeyException | InputRequiredException e) {
            System.out.printf("Exception: %s", e.getMessage());
            System.out.println("Please refer to the documentation: https://www.alibabacloud.com/help/en/model-studio/developer-reference/error-code");
        }
        System.exit(0);
    }
}
```

##### HTTP

###### Curl

**Sample request**

```
curl -X POST https://dashscope-intl.aliyuncs.com/api/v1/apps/YOUR_APP_ID/completion \
--header "Authorization: Bearer $DASHSCOPE_API_KEY" \
--header 'Content-Type: application/json' \
--header 'X-DashScope-SSE: enable' \
--data '{
    "input": {
        "prompt": "Who are you?"

    },
    "parameters":  {
        "incremental_output":true
    },
    "debug": {}
}'
```

> Replace YOUR\_APP\_ID with the actual application ID.

###### PHP

**Sample request**

```
<?php

// If environment variables are not configured, replace the following line with: $api_key="sk-xxx". However, it is not recommended to hardcode the API Key directly into the code in a production environment to reduce the risk of API Key leakage.
$api_key = getenv("DASHSCOPE_API_KEY");
$application_id = 'YOUR_APP_ID'; // Replace with the actual application ID

$url = "https://dashscope-intl.aliyuncs.com/api/v1/apps/$application_id/completion";

// Construct request data
$data = [
    "input" => [
        'prompt' => 'Who are you?'],
    "parameters" => [
        'incremental_output' => true]];// Incremental output
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
curl_setopt($ch, curlOPT_RETURNTRANSFER, false); // Don't return the transferred data
curl_setopt($ch, curlOPT_WRITEFUNCTION, function ($ch, $string) {
    echo $string; // Process streaming data
    return strlen($string);
});
curl_setopt($ch, curlOPT_HTTPHEADER, [
    'Content-Type: application/json',
    'Authorization: Bearer ' . $api_key,
    'X-DashScope-SSE: enable' // Streaming output
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

if ($status_code != 200) {
    echo "HTTP Status Code: $status_code\n";
    echo "Request Failed.\n";
}
?>
```

###### Node.js

**Dependency:**

```
npm install axios
```

**Sample request**

**1\. Output complete response**

```
const axios = require('axios');

async function callDashScope() {
    // If environment variables are not configured, replace the following line with: apiKey='sk-xxx'. However, it is not recommended to hardcode the API Key directly into the code in a production environment to reduce the risk of API Key leakage.
    const apiKey = process.env.DASHSCOPE_API_KEY;
    const appId = 'YOUR_APP_ID';// Replace with the actual application ID

    const url = `https://dashscope-intl.aliyuncs.com/api/v1/apps/${appId}/completion`;

    const data = {
        input: {
            prompt: "Who are you?"
        },
        parameters: {
            'incremental_output' : 'true' // Incremental output
        },
        debug: {}
    };

    try {
        console.log("Sending request to DashScope API...");

        const response = await axios.post(url, data, {
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
                'X-DashScope-SSE': 'enable' // Streaming output
            },
            responseType: 'stream' // For handling streaming responses
        });

        if (response.status === 200) {
            // Process streaming response
            response.data.on('data', (chunk) => {
                console.log(`Received chunk: ${chunk.toString()}`);
            });
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

Expand the panel to view the sample code:

**2\. Output only text field**

```
const axios = require('axios');
const { Transform } = require('stream');

async function callDashScope() {
    // If environment variables are not configured, replace the following line with: apiKey='sk-xxx'. However, it is not recommended to hardcode the API Key directly into the code in a production environment to reduce the risk of API Key leakage.
    const apiKey = process.env.DASHSCOPE_API_KEY;
    const appId = 'YOUR_APP_ID'; // Replace with the actual application ID

    const url = `https://dashscope-intl.aliyuncs.com/api/v1/apps/${appId}/completion`;

    const data = {
        input: { prompt: "Who are you?" },
        parameters: { incremental_output: true }, // Incremental output
        debug: {}
    };

    try {
        console.log("Sending request to DashScope API...");

        const response = await axios.post(url, data, {
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
                'X-DashScope-SSE': 'enable' // Streaming output
            },
            responseType: 'stream' // For handling streaming responses
        });

        if (response.status === 200) {
            // // Process streaming response SSE protocol parsing transformer
            const sseTransformer = new Transform({
                transform(chunk, encoding, callback) {
                    this.buffer += chunk.toString();
                    
                    // Split by SSE events (two line feeds)
                    const events = this.buffer.split(/\n\n/);
                    this.buffer = events.pop() || ''; // Keep incomplete part
                    
                    events.forEach(eventData => {
                        const lines = eventData.split('\n');
                        let textContent = '';
                        
                        // Parse event content
                        lines.forEach(line => {
                            if (line.startsWith('data:')) {
                                try {
                                    const jsonData = JSON.parse(line.slice(5).trim());
                                    if (jsonData.output?.text) {
                                        textContent = jsonData.output.text;
                                    }
                                } catch(e) {
                                    console.error('JSON parsing error:', e.message);
                                }
                            }
                        });

                        if (textContent) {
                            // Add line feed and push
                            this.push(textContent + '\n');
                        }
                    });
                    
                    callback();
                },
                flush(callback) {
                    if (this.buffer) {
                        this.push(this.buffer + '\n');
                    }
                    callback();
                }
            });
            sseTransformer.buffer = '';

            // Pipeline processing
            response.data
                .pipe(sseTransformer)
                .on('data', (textWithNewline) => {
                    process.stdout.write(textWithNewline); // Automatic line feed output
                })
                .on('end', () => console.log(""))
                .on('error', err => console.error("Pipeline error:", err));

        } else {
            console.log("Request failed, status code:", response.status);
            response.data.on('data', chunk => console.log(chunk.toString()));
        }
    } catch (error) {
        console.error(`API call failed: ${error.message}`);
        if (error.response) {
            console.error(`Status code: ${error.response.status}`);
            error.response.data.on('data', chunk => console.log(chunk.toString()));
        }
    }
}

callDashScope();
```

###### C#

**Sample request**

```
using System.Net;
using System.Text;

class Program
{
    static async Task Main(string[] args)
    {
        // If environment variables are not configured, replace the following line with: apiKey="sk-xxx". However, it is not recommended to hardcode the API Key directly into the code in a production environment to reduce the risk of API Key leakage.
        string apiKey = Environment.GetEnvironmentVariable("DASHSCOPE_API_KEY") ?? throw new InvalidOperationException("DASHSCOPE_API_KEY environment variable is not set.");
        string appId = "YOUR_APP_ID"; // Replace with the actual application ID
        string url = $"https://dashscope-intl.aliyuncs.com/api/v1/apps/{appId}/completion";

        using (HttpClient client = new HttpClient())
        {
            client.DefaultRequestHeaders.Add("Authorization", $"Bearer {apiKey}");
            client.DefaultRequestHeaders.Add("X-DashScope-SSE", "enable");

            string jsonContent = @"{
                ""input"": {
                    ""prompt"": ""Who are you""
                },
                ""parameters"": {""incremental_output"": true},
                ""debug"": {}
            }";

            HttpContent content = new StringContent(jsonContent, Encoding.UTF8, "application/json");

            Console.WriteLine(DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss:fff"));
            try
            {
                var request = new HttpRequestMessage(HttpMethod.Post, url);
                request.Content = content;

                HttpResponseMessage response = await client.SendAsync(request, HttpCompletionOption.ResponseHeadersRead);
                

                if (response.IsSuccessStatusCode)
                {
                    Console.WriteLine("Request successful:");
                    Console.WriteLine(DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss:fff"));
                    using (var stream = await response.Content.ReadAsStreamAsync())
                    using (var reader = new StreamReader(stream))
                    {
                        string? line; // Declare as nullable string
                        while ((line = await reader.ReadLineAsync()) != null)
                        {
                            if (line.StartsWith("data:"))
                            {
                                string data = line.Substring(5).Trim();
                                Console.WriteLine(data);
                                Console.WriteLine(DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss:fff"));
                            }
                        }
                    }
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

###### Go

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
	"strings"
	"time"
)

func main() {
	// If environment variables are not configured, replace the following line with: apiKey := "sk-xxx". However, it is not recommended to hardcode the API Key directly into the code in a production environment to reduce the risk of API Key leakage.
	apiKey := os.Getenv("DASHSCOPE_API_KEY")
	appId := "YOUR_APP_ID" // Replace with the actual application ID

	if apiKey == "" {
		fmt.Println("Please ensure DASHSCOPE_API_KEY is set.")
		return
	}

	url := fmt.Sprintf("https://dashscope-intl.aliyuncs.com/api/v1/apps/%s/completion", appId)

	// Create request body, where incremental_output indicates whether to enable streaming response
	requestBody := map[string]interface{}{
		"input": map[string]string{
			"prompt": "Who are you?",
		},
		"parameters": map[string]interface{}{
			"incremental_output": true,
		},
		"debug": map[string]interface{}{},
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

	// Set request headers, where X-DashScope-SSE set to enable indicates enabling streaming response
	req.Header.Set("Authorization", "Bearer "+apiKey)
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("X-DashScope-SSE", "enable")

	// Send request
	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		fmt.Printf("Failed to send request: %v\n", err)
		return
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		fmt.Printf("Request failed with status code: %d\n", resp.StatusCode)
		body, _ := io.ReadAll(resp.Body)
		fmt.Println(string(body))
		return
	}

	// Process streaming response
	reader := io.Reader(resp.Body)
	buf := make([]byte, 1024)
	for {
		n, err := reader.Read(buf)
		if n > 0 {
			data := string(buf[:n])
			lines := strings.Split(data, "\n")
			for _, line := range lines {
				line = strings.TrimSpace(line)
				if len(line) >= 5 && line[:5] == "data:" {
					timestamp := time.Now().Format("2006-01-02 15:04:05.000")
					fmt.Printf("%s: %s\n", timestamp, line[5:])
				} else if len(line) > 0 {
					fmt.Println(line)
				}
			}
		}
		if err != nil {
			if err == io.EOF {
				break
			}
			fmt.Printf("Error reading response: %v\n", err)
			break
		}
	}
}
```

#### **Retrieve knowledge base**

##### Python

**Sample request**

```
import os
from http import HTTPStatus
# Recommended dashscope SDK version >= 1.20.11
from dashscope import Application
import dashscope
dashscope.base_http_api_url = 'https://dashscope-intl.aliyuncs.com/api/v1'

response = Application.call(
    # If environment variables are not configured, you can replace the following line with api_key="sk-xxx". However, it is not recommended to hard-code the API Key directly into the code in a production environment to reduce the risk of API Key leakage.
    api_key=os.getenv("DASHSCOPE_API_KEY"), 
    app_id='YOUR_APP_ID',  # Replace YOUR_APP_ID with the application ID
    prompt='Please recommend a mobile phone under 3000 yuan',
    rag_options={
        "pipeline_ids": ["YOUR_PIPELINE_ID1,YOUR_PIPELINE_ID2"],  # Replace with actual knowledge base IDs, separate multiple IDs with commas
    }
)

if response.status_code != HTTPStatus.OK:
    print(f'request_id={response.request_id}')
    print(f'code={response.status_code}')
    print(f'message={response.message}')
    print(f'Refer to: https://www.alibabacloud.com/help/en/model-studio/developer-reference/error-code')
else:
    print('%s\n' % (response.output.text))  # Process text output only
    # print('%s\n' % (response.usage))
```

##### Java

**Sample request**

```
// Recommended dashscope SDK version >= 2.16.8;
import com.alibaba.dashscope.app.*;
import com.alibaba.dashscope.exception.ApiException;
import com.alibaba.dashscope.exception.InputRequiredException;
import com.alibaba.dashscope.exception.NoApiKeyException;
import java.util.Collections;
import java.util.List;

import com.alibaba.dashscope.utils.Constants;

public class Main {
    static {
        Constants.baseHttpApiUrl="https://dashscope-intl.aliyuncs.com/api/v1";
    }
    public static void streamCall() throws NoApiKeyException, InputRequiredException {
        ApplicationParam param = ApplicationParam.builder()
                // If environment variables are not configured, you can replace the following line with .apiKey("sk-xxx"). However, it is not recommended to hard-code the API Key directly into the code in a production environment to reduce the risk of API Key leakage.
                .apiKey(System.getenv("DASHSCOPE_API_KEY"))
                .appId("YOUR_APP_ID") // Replace with the actual application ID
                .prompt("Please recommend a mobile phone around 3000 yuan")
                .ragOptions(RagOptions.builder()
                        // Replace with the actual specified knowledge base IDs, separate multiple with commas
                        .pipelineIds(List.of("PIPELINES_ID1", "PIPELINES_ID2"))
                        .build())
                .build();

        Application application = new Application();
        ApplicationResult result = application.call(param);
        System.out.printf("%s\n",
                result.getOutput().getText());// Process text output only
    }

    public static void main(String[] args) {
        try {
            streamCall();
        } catch (ApiException | NoApiKeyException | InputRequiredException e) {
            System.out.printf("Exception: %s", e.getMessage());
            System.out.println("Refer to: https://www.alibabacloud.com/help/en/model-studio/developer-reference/error-code");
        }
        System.exit(0);
    }
}
```

##### HTTP

###### Curl

**Sample request**

```
curl -X POST https://dashscope-intl.aliyuncs.com/api/v1/apps/{YOUR_APP_ID}/completion \
--header "Authorization: Bearer $DASHSCOPE_API_KEY" \
--header 'Content-Type: application/json' \
--data '{
    "input": {
        "prompt": "Please recommend a mobile phone under 3000 yuan"
    },
    "parameters":  {
                    "rag_options" : {
                    "pipeline_ids":["YOUR_PIPELINE_ID1"]}
    },
    "debug": {}
}'
```

> Replace YOUR\_APP\_ID with the actual application ID, and YOUR\_PIPELINE\_ID1 with the specified knowledge base ID.

###### PHP

**Sample request**

```
<?php
# If the environment variable is not configured, you can replace the next line with your API key: $api_key="sk-xxx". However, it is not recommended to hardcode the API key directly into the code in a production environment to reduce the risk of API key leakage.
$api_key = getenv("DASHSCOPE_API_KEY");
$application_id = 'YOUR_APP_ID'; // Replace with the actual application ID

$url = "https://dashscope-intl.aliyuncs.com/api/v1/apps/$application_id/completion";

// Construct request data
$data = [
    "input" => [
        'prompt' => 'Please recommend a smartphone under 3000 yuan.'
    ],
    "parameters" => [
        'rag_options' => [
            'pipeline_ids' => ['YOUR_PIPELINE_ID1','YOUR_PIPELINE_ID2'] // Replace with the specified knowledge base IDs; use commas to separate multiple IDs
        ]
    ]
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
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
curl_setopt($ch, CURLOPT_POSTFIELDS, $dataString);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Content-Type: application/json',
    'Authorization: Bearer ' . $api_key
]);

// Execute the request
$response = curl_exec($ch);

// Check if curl execution was successful
if ($response === false) {
    die("curl Error: " . curl_error($ch));
}

// Get HTTP status code
$status_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
// Close curl session
curl_close($ch);

// Decode response data
$response_data = json_decode($response, true);

// Handle response
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
?>
```

###### Node.js

**Dependency:**

```
npm install axios
```

**Sample request**

```
const axios = require('axios');
async function callDashScope() {
    // If environment variables are not configured, you can replace the following line with apiKey='sk-xxx'. However, it is not recommended to hard-code the API Key directly into the code in a production environment to reduce the risk of API Key leakage.
    const apiKey = process.env.DASHSCOPE_API_KEY;
    const appId = 'YOUR_APP_ID';//Replace with the actual application ID

    const url = `https://dashscope-intl.aliyuncs.com/api/v1/apps/${appId}/completion`;

    const data = {
        input: {
            prompt: "Please recommend a mobile phone under 3000 yuan"
        },
        parameters: {
            rag_options:{
                pipeline_ids:['YOUR_PIPELINE_ID1','YOUR_PIPELINE_ID2']  // Replace with specified knowledge base IDs, separate multiple with commas
            }
        },
        debug: {}
    };

    try {
        const response = await axios.post(url, data, {
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            }
        });

        if (response.status === 200) {
            console.log(`${response.data.output.text}`);
        } else {
            console.log(`request_id=${response.headers['request_id']}`);
            console.log(`code=${response.status}`);
            console.log(`message=${response.data.message}`);
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

###### C#

**Sample request**

```
using System.Text;

class Program
{
    static async Task Main(string[] args)
    {
        // If environment variables are not configured, you can replace the following line with apiKey="sk-xxx". However, it is not recommended to hard-code the API Key directly into the code in a production environment to reduce the risk of API Key leakage.
        string apiKey = Environment.GetEnvironmentVariable("DASHSCOPE_API_KEY")?? throw new InvalidOperationException("DASHSCOPE_API_KEY environment variable is not set.");;
        string appId = "YOUR_APP_ID";// Replace with the actual application ID
        // YOUR_PIPELINE_ID1 replace with specified knowledge base ID
        if (string.IsNullOrEmpty(apiKey))
        {
            Console.WriteLine("Please make sure DASHSCOPE_API_KEY is set.");
            return;
        }

        string url = $"https://dashscope-intl.aliyuncs.com/api/v1/apps/{appId}/completion";
        
        using (HttpClient client = new HttpClient())
        {
            client.DefaultRequestHeaders.Add("Authorization", $"Bearer {apiKey}");
            string jsonContent = $@"{{
                ""input"": {{
                    ""prompt"": ""Please recommend a mobile phone under 3000 yuan""
                }},
                ""parameters"": {{
                    ""rag_options"" : {{
                        ""pipeline_ids"":[""YOUR_PIPELINE_ID1""]
                    }}
                }},
                ""debug"": {{}}
            }}";

            HttpContent content = new StringContent(jsonContent, Encoding.UTF8, "application/json");

            try
            {
                HttpResponseMessage response = await client.PostAsync(url, content);

                if (response.IsSuccessStatusCode)
                {
                    string responseBody = await response.Content.ReadAsStringAsync();
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

###### Go

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
	// If environment variables are not configured, you can replace the following line with apiKey := "sk-xxx". However, it is not recommended to hard-code the API Key directly into the code in a production environment to reduce the risk of API Key leakage.
	apiKey := os.Getenv("DASHSCOPE_API_KEY")
	appId := "YOUR_APP_ID" // Replace with the actual application ID

	if apiKey == "" {
		fmt.Println("Please make sure DASHSCOPE_API_KEY is set.")
		return
	}

	url := fmt.Sprintf("https://dashscope-intl.aliyuncs.com/api/v1/apps/%s/completion", appId)

	// Create request body
	requestBody := map[string]interface{}{
		"input": map[string]string{
			"prompt": "Please recommend a mobile phone under 3000 yuan",
		},
		"parameters": map[string]interface{}{
			"rag_options": map[string]interface{}{
				"pipeline_ids": []string{"YOUR_PIPELINE_ID1"}, // Replace with specified knowledge base ID
			},
		},
		"debug": map[string]interface{}{},
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

**View retrieval process:** When making a call, add `has_thoughts` to the code and set it to True. The retrieval process will be returned in the `thoughts` field of `output`.

**app\_id** `_string_` **(Required)**

The application ID.

You can obtain the application ID from the application card on the [My Applications](https://modelstudio.console.alibabacloud.com/?tab=app#/app-center) page.

> In Java SDK, this is **appId**. For HTTP, put the actual application ID in the **URL**, replacing `**YOUR_APP_ID**`.

**prompt** `_string_` **(Required)**

The input `prompt` that specifies the instructions for the application to execute. This guides the application to generate a response.

Currently, file uploads are not supported.

If you manage conversation history by passing `messages`, `prompt` is not required.

> For HTTP, put **prompt** in the **input** object.

**session\_id** `_string_` (Optional)

The ID of conversation history.

When `session_id` is provided, the request will automatically carry the conversation history stored in the cloud. For instructions, see [Multi-round conversation](/help/en/model-studio/application-calling-guide#66ebf32f015qi).

> If `session_id` is provided, `prompt` is required.

> If both `session_id` and `messages` are provided, `messages` take precedence.

> Currently, only agent applications and dialog workflow applications support multi-round conversation.

> In Java SDK, this is **setSessionId**. For HTTP, put **session\_id** in the **input** object.

**messages** `_array_` (Optional)

A list of messages composed of conversation history.

Used to manage context for multi-round conversation on yourself. For instructions, see [Multi-round conversation](/help/en/model-studio/application-calling-guide#66ebf32f015qi).

Key rules:

-   If `messages` is provided, `prompt` is not required.
    
-   If both `messages` and `prompt` are provided:
    
    -   `prompt` will be converted to a message `{"role": "user", "content": "Your prompt"}`, and automatically appended to the end of `messages`.
        
    -   Example:
        
        ```
        // Original input
        {
          "messages": [{"role": "user", "content": "Hello"}], 
          "prompt": "Recommend a movie"
        }
        // Actual effective messages
        [
          {"role": "user", "content": "Hello"}, 
          {"role": "user", "content": "Recommend a movie"}
        ]
        ```
        
-   If both `session_id` and `messages` are provided, `messages` will take precedence, and `session_id` will be ignored.
    

> Currently, only agent applications and dialog workflow applications support multi-round conversation.

> For HTTP, put **messages** in the **input** object.

> To use this parameter, the Python Dashscope SDK must be at least version 1.20.14, and the Java Dashscope SDK must be at least version 2.17.0.

**Message types**

System Message `_object_` (Optional)

The the purpose or role of the model. If you set a system message, place it **at the beginning** of the messages list. Also, the messages list can have only one system message.

**Properties**

**content** `_string_` **(Required)**

The contents of the message.

**role** `_string_` **(Required)**

Fixed as `system`.

User Message `_object_` **(Required)**

Messages sent by the user to the model. The messages list can have multiple user messages, but **the last message** must be a user message.

**Properties**

**content** `_string_` **(Required)**

The contents of the message.

**Properties**

**text** `_string_`

The input text.

**role** `_string_` **(Required)**

The role of the user message, fixed as `user`.

Assistant Message `_object_` (Optional)

The messages sent by the model in response to user messages. If you set an assistant message, put it after a `User Message` to form a question and answer pair.

**Properties**

**content** `_string_` **(Required)**

The contents of the assistant message.

**role** `_string_` **(Required)**

The role of the assistant message, fixed as `assistant`.

**workspace** `_string_` (Optional)

The workspace ID.

When calling applications in a non-default workspace, `workspace` is required. When calling applications in the default workspace, it's not required.

In a sub-workspace, go to [My Applications](https://modelstudio.console.alibabacloud.com/?tab=app#/app-center) and click **Call** on the desired application card. From the displayed API sample, you can obtain the `workspace` ID. For more information, see [Obtain Workspace ID](/help/en/model-studio/obtain-the-app-id-and-workspace-id).

> For HTTP, specify **X-DashScope-WorkSpace** in the Header.

**stream** `_boolean_` (Optional)

Specifies whether to use streaming output.

Valid values:

-   false (default): The model delivers the complete response at a time.
    
-   true: The model returns output in chunks as content is generated.
    

> In Java SDK, this is **streamCall**. For HTTP, set **X-DashScope-SSE** to **enable**

**incremental\_output** `**_boolean_**` (Optional)

Specifies whether to enable incremental output in the stream mode.

Valid values:

-   false (default): Each output includes the entire sequence generated so far. The final output is the complete response.
    
    ```
    I
    I like
    I like apple
    I like apple.
    ```
    
-   true: Each output excludes previous content. You need to obtain each part in real time to get the full response.
    
    ```
    I
    like
    apple
    .
    ```
    
    > In Java SDK, this is **incrementalOutput**_._ For HTTP, put **incremental\_output** in the **parameters** object.
    

**flow\_stream\_mode** `_object_` (Optional)

The streaming output mode for **workflow applications**. For instructions, see [Streaming output](/help/en/model-studio/application-calling-guide#1462e21c4a6xm).

Valid values:

-   `full_thoughts` (default):
    
    -   Description: Streaming results of all nodes will be output in the `thoughts` field.
        
    -   Requirement: You must also set `has_thoughts` to True.
        
-   `agent_format`:
    
    -   Description: The same output mode as agent applications.
        
    -   Effect: In the console, you can turn on the **Response** switch for a specific node, and the streaming results of that node will be included in the `text` field of `output`.
        
    -   Scenario: Suitable for scenarios where you only care about the output of specific intermediate nodes.
        
    
    > The **Response** switch is available only in Text Conversion nodes, LLM nodes, and End nodes (The switch is on for End nodes by default).
    

> This parameter is not available in the Java SDK. For HTTP, put **flow\_stream\_mode** in the **parameters** object.

**biz\_params** `_object_` (Optional)

Used to pass parameters when the application uses custom nodes or custom plug-ins. For instructions, see [Custom parameter passing](/help/en/model-studio/application-calling-guide#3d3707645dcej).

> In Java SDK, this is **bizParams**. For HTTP, put **biz\_params** in the **input** object.

**Properties**

**user\_defined\_params** `_object_` (Optional)

Specifies custom plug-in parameter information.

**Properties**

**plugin\_id** `_string_` (Optional)

The plugin ID, which can be obtained from the plugin card. Replace `your_plugin_code` with the actual plugin ID.

**${plugin\_params}** `_string_` (Optional)

Multiple key-value pairs in the innermost object. Each key-value pair represents a user-defined parameter name and its value. For example:

```
"article_index": 2
```

**user\_defined\_tokens** `_object_` (Optional)

User-level authentication information for custom plug-ins.

**Properties**

**plugin\_id** `_string_` (Optional)

The plugin ID, which can be obtained from the plugin card. Passed through the `your_plugin_code` field.

**user\_token** `_string_` (Optional)

The user authentication information required by the plugin, such as the actual value of DASHSCOPE\_API\_KEY.

**has\_thoughts** `_boolean_` (Optional)

Specifies whether to output the process of plugin calls and knowledge retrieval.

Valid values:

-   True: Output in the `thoughts` field.
    
-   False (default): Do not output.
    

**image\_list** `_Array_` (Optional)

List of image links. Used to pass image links.

In agent applications based on Qwen-VL models, use this parameter to ask questions about the image content.

```
"image_list" : ["https://example.com/images/example.jpg"]
#This is a fictional URL, please replace with an actual existing image URL
```

> It can contain multiple URLs, separated by commas (,).

> In Java SDK, this is **images**. For HTTP, put **image\_list** in the **input** object.

**rag\_options** `_Array_` (Optional)

Parameters related to Retrieval-Augmented Generation (RAG). This includes but is not limited to retrieving specified knowledge bases or documents. For instructions and rules, see [Retrieve knowledge base](/help/en/model-studio/application-calling-guide#6bd8094de7e1e).

> In Java SDK, this is **ragOptions**. For HTTP, put **rag\_options** in the **parameters** object.

> Currently, only **Agent Applications** (including **RAG Applications**) support these retrieval parameters.

Properties

**pipeline\_ids** `_Array_` (**Required**)

The knowledge base ID. When specified, all documents within the specified knowledge base will be retrieved.

You can obtain the knowledge base ID on the [Knowledge Base](https://modelstudio.console.alibabacloud.com/?tab=app#/knowledge-base) page, or use the `Data.Id` returned by [CreateIndex](/help/en/model-studio/api-bailian-2023-12-29-createindex) (only supports unstructured knowledge bases).

To use this feature, perform the following steps:

1.  In the console turn on **Knowledge Base Retrieval Augmentation** for an **Agent Application**, and **Publish** it.
    
    > You can skip this step for **RAG Applications**.
    
2.  Choose one of the following methods to retrieve a specified knowledge base:
    
    1.  In the application, click **Configure Knowledge Base**, associate the specified knowledge base, and **Publish** the application.
        
    2.  Directly **Publish** the application, and pass the specified knowledge base ID through `**pipeline_ids**` when calling.
        
    3.  Associate a specified knowledge base in the console and pass the specified knowledge base ID when calling at the same time.
        
3.  [Make the API call](/help/en/model-studio/application-calling-guide#6bd8094de7e1e).
    

> You can specify up to five knowledge base IDs, separated by commas (,). Example: \["Knowledge Base ID1", "Knowledge Base ID2"\]. If you provide more than five IDs, only the first five will be effective.

> In Java SDK, this is **pipelineIds**.

**file\_ids** `_Array_` (Optional)

The IDs of unstructured documents. When specified, the corresponding unstructured documents will be retrieved.

You can obtain document IDs on the [Application Data](https://modelstudio.console.alibabacloud.com/?tab=app#/data-center) page, or use the ID returned by the [AddFile](/help/en/model-studio/api-bailian-2023-12-29-addfile) when importing documents.

> You must also pass the ID of the knowledge base to which the documents belong.

> You can specify up to 100 document IDs, separated by commas (,). Example: \["Document ID1", "Document ID2"\].

> In Java SDK, this is **fileIds**.

**metadata\_filter** `_Object_` (Optional)

The metadata of unstructured documents. When specified, documents that contain the metadata are retrieved.

On the [Knowledge base](https://modelstudio.console.alibabacloud.com/?tab=app#/knowledge-base) page, view an unstructured knowledge base. Then, you can check the **Meta Information** of documents.

You can define metadata when creating an unstructured knowledge base.

Call [ListChunks](/help/en/model-studio/api-bailian-2023-12-29-listchunks) to obtain information of all chunks in a document.

> You must also pass the ID of the knowledge base to which the documents belong.

> In Java SDK, this is **metadataFilter**.

**tags** `_Array_` (Optional)

The tags associated with unstructured documents. When specified, unstructured documents that contain the tags are retrieved.

You can view the tags on the [Application Data](https://modelstudio.console.alibabacloud.com/?tab=app#/data-center) page. You can also call [DescribeFile](/help/en/model-studio/api-bailian-2023-12-29-describefile).

> Can be multiple tags, separated by commas (,). Example: \["Tag 1","Tag 2"\].

### **Response object**

### **Sample response**

**status\_code** `_integer_`

The returned status code.

The status code 200 indicates that the request is successful. Other status codes indicate that the request failed. `code` shows the error code and `message` shows detailed error information.

> The Java SDK does not return this parameter. Instead, an exception is thrown, containing the error code and message.

**Single-round conversation**

```
{
    "output": {
        "finish_reason": "stop",
        "session_id": "6105c965c31b40958a43dc93c28c7a59",
        "text": "I am Qwen, an AI assistant developed by Alibaba Cloud. I am designed to answer various questions, provide information, and engage in conversations with users. Is there anything I can do for you?"
    },
    "usage": {
        "models": [
            {
                "output_tokens": 36,
                "model_id": "qwen-plus",
                "input_tokens": 74
            }
        ]
    },
    "request_id": "f97ee37d-0f9c-9b93-b6bf-bd263a232bf9"
}
```

**Specified knowledge base**

If you need to display the source document referenced by the model, go to the Model Studio console. Click **Retrieve Configuration** of the application. Turn on **Show Source** and **Publish** the application again.

```
{
    "text": "Based on your budget, I recommend the Bailian Zephyr Z9. This phone is lightweight and portable, with a 6.4-inch 1080 x 2340 pixel screen, 128GB storage and 6GB RAM, perfect for daily use<ref>[1]</ref>. Additionally, it features a 4000mAh battery and a 30x digital zoom lens that can capture distant details, with a price range of 2499-2799 yuan, completely within your budget requirements<ref>[1]</ref>.",
    "finish_reason": "stop",
    "session_id": "6c1d47fa5eca46b2ad0668c04ccfbf13",
    "thoughts": null,
    "doc_references": [
        {
            "index_id": "1",
            "title": "Bailian Phone Product Introduction",
            "doc_id": "file_7c0e9abee4f142f386e488c9baa9cf38_10317360",
            "doc_name": "Bailian Phone Product Introduction",
            "doc_url": null,
            "text": "[Document Name]:Bailian Phone Product Introduction\n[Title]:Bailian Phone Product Introduction\n[Content]:Reference Price: 5999-6499. Bailian Ace Ultra - Gamer's Choice: Equipped with a 6.67-inch 1080 x 2400 pixel screen, built-in 10GB RAM and 256GB storage, ensuring smooth gaming experience. Bailian Ace Ultra - Gamer's Choice: Equipped with a 6.67-inch 1080 x 2400 pixel screen, built-in 10GB RAM and 256GB storage, ensuring smooth gaming experience. 5500mAh battery with liquid cooling system keeps the device cool during extended gaming sessions. High-dynamic dual speakers enhance the gaming experience with immersive audio. Reference Price: 3999-4299. Bailian Zephyr Z9 - The Art of Lightweight Portability: Lightweight 6.4-inch 1080 x 2340 pixel design, paired with 128GB storage and 6GB RAM, perfect for daily use. 4000mAh battery ensures worry-free all-day use, 30x digital zoom lens captures distant details, lightweight yet powerful. Reference Price: 2499-2799. Bailian Flex Fold+ - New Era of Folding Screen: Combining innovation and luxury, main screen 7.6-inch 1800 x 2400 pixels and external screen 4.7-inch 1080 x 2400 pixels, multi-angle free-floating design meets different scenario needs. 512GB storage, 12GB RAM, plus 4700mAh battery and UTG ultra-thin flexible glass, opening a new chapter in the folding screen era. Additionally, this phone supports Dual SIM Dual Standby and satellite calls, helping you stay connected worldwide. Reference retail price: 9999-10999.\n",
            "biz_id": null,
            "images": [

            ],
            "page_number": [
                0]
        }]
}
```

**Error response**

If an error occurs during a request, the error code and error message are returned in the code and message parameters.

Here is an example of an error response when an incorrect `API-KEY` is provided.

```
request_id=1d14958f-0498-91a3-9e15-be477971967b, 
code=401, 
message=Invalid API-key provided.
```

**request\_id** `_string_`

The request ID.

> In Java SDK, this is `requestId`.

**code** `_string_`

The error code. Empty when the call is successful.

For details, see [Error messages](/help/en/model-studio/error-code).

> Only the Python SDK returns this parameter.

**message** `_string_`

The error message returned in case of failure.

> Only the Python SDK returns this parameter.

**output** `_object_`

The call result.

**output properties**

**text** `_string_`

The response generated by the model.

**finish\_reason** `_string_`

The finish reason.

It is `null` during generation, and `stop` when generation ends due to a stop `token`.

**session\_id** `_string_`

The ID of the conversation session.

Pass this in subsequent requests to maintain the conversation history.

**thoughts** `_array_`

When `has_thoughts` is set to True in the request, you can view the process of plug-in calls and knowledge retrieval in `thoughts`.

**thoughts properties**

**thought** `_string_`

The model's thinking process.

**action\_type** `_string_`

The type of the action executed by the model. For example, API indicates executing an API plugin and agentRag indicates executing knowledge retrieval.

**action\_name** `_string_`

The type of the action executed by the model. For example, knowledge retrieval, and API plug-in.

**action** `_string_`

The action executed by the model.

**action\_input\_stream** `_string_`

The streaming result of the request parameters.

**action\_input** `_string_`

The request parameters of the plug-in.

**observation** `_string_`

The process of retrieval or plugin execution.

**doc\_references** `_array_`

The documents that the model referenced during RAG retrieval.

To use this parameter, you must first go to the Model Studio console. Click **Retrieve Configuration** of the application. Turn on **Show Source** and **Publish** the application again.

**doc\_references properties**

**index\_id** `_string_`

The index of the retrieved document referenced by the model, such as \[1\].

**title** `_string_`

The title of the text chunk referenced by the model.

**doc\_id** `_string_`

The ID of the document referenced by the model.

**doc\_name** `_string_`

The name of the document referenced by the model.

**text** `_string_`

The specific text content referenced by the model.

**images** `_array_`

The list of image URLs referenced by the model.

**page\_number** `_array_`

The page numbers of the text chunks referenced by the model.

> This parameter only supports knowledge bases created after October 25, 2024.

> The Python Dashscope SDK version must be at least 1.20.14, and the Java Dashscope SDK version must be at least 2.16.10.

**usage** `_object_`

The token consumption of this request.

**usage properties**

**models** `_array_`

The model used for this request.

**models properties**

**model\_id** `_string_`

The model ID .

**input\_tokens** `_integer_`

The number of tokens in the user input.

**output\_tokens** `_integer_`

The number of tokens in the generated response.

## Error codes

If the application call failed and returned an error message, see [Error messages](/help/en/model-studio/error-code) for troubleshooting.
