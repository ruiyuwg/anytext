After you deploy a model, you can use it in any DataWorks workspace in the same region if network connectivity is available. This topic describes how to call and use a deployed large language model in DataWorks.

## **Prerequisites**

-   A [Serverless resource group](/help/en/dataworks/user-guide/adding-and-using-serverless-resource-groups) is attached to the DataWorks workspace.
    
-   A large language model service is deployed in the Serverless resource group. For more information, see [Deploy a large language model](/help/en/dataworks/user-guide/deploy-model).
    

## **Preparations**

Before you call a model, ensure that the application can access your large language model service. To call the model, you must first obtain the service invocation address and an API key for identity authentication.

### **1\. Configure network connectivity**

Ensure that the virtual private cloud (VPC) attached to the DataWorks resource group used for model invocation is in the list of VPCs that can connect to the model service.

1.  View the **first VPC** attached to the resource group.
    
    1.  Go to the [DataWorks resource group list page](https://dataworks.console.aliyun.com/resource/list). In the top navigation bar, switch to the region where the target resource group is located. Then, find the target resource group in the list.
        
    2.  In the **Actions** column for the target resource group, click **Network Settings** to open the **VPC Binding** page.
        
    3.  Under **Data Scheduling & Data Integration**, you can view the **vSwitch CIDR Block**.
        
        **Important**
        
        When you call a large language model, you must use the first VPC listed in the network configuration of the resource group for communication.
        
2.  To view the list of connectable VPCs or add a network binding for the model service, see [Manage model networks](/help/en/dataworks/user-guide/deploy-model#9c632fb90ctx3).
    

### **2\. Get invocation information**

After the model is deployed, an internal same-region endpoint is automatically generated. You can go to the details page of the model service to obtain this endpoint. The domain name format is `http://<model-service-id>.<region>.dataworks-model.aliyuncs.com`. For more information about how to obtain the endpoint, see [View a model service](/help/en/dataworks/user-guide/deploy-model#eb84047c537ti).

### **3\. Get the API key**

To obtain the API key for permission authentication, see [Manage API keys](/help/en/dataworks/user-guide/deploy-model#bff57370d7t12).

## **Call a large language model service**

You can call large language models in Data Integration and Data Studio to perform intelligent data processing.

### **Call in Data Integration**

In a single-table offline sync task, you can use a large language model service to perform [AI-assisted processing](/help/en/dataworks/user-guide/offline-synchronization-task-ai-auxiliary-processing) on data during synchronization.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9067950671/p965496.png)

### **Call in** Data Studio

#### **1\. Call a large language model in a large language model node**

Data Studio (new version) in DataWorks lets you use a [large language model node](/help/en/dataworks/user-guide/large-model-node) to process data. In the large language model node, you can configure a large language model service and call the model.

#### **2\. Call a large language model in a Shell node**

This example shows how to call a large language model in a Shell node to answer a specific question.

1.  [Create a Shell node](/help/en/dataworks/user-guide/node-development-of-data-studio/#13d1ad442e1tc) and add the following sample command to the node:
    
    **Note**
    
    Replace the large language model service invocation address that starts with `http` and the token that starts with `DW` with the actual values that you obtained in the [Preparations](#9b23acabb3puk) section.
    
    ```
    curl -X POST http://ms-xxx.cn-beijing.dataworks-model.aliyuncs.com/v1/completions -H "Authorization: DW-ms-xxx" -H "Content-Type: application/json" -d '{"prompt":"What are the differences and connections between AI, machine learning, and deep learning?", "stream":"false", "max_tokens": 1024}' -v    
    ```
    
2.  After you edit the node content, in the **Run Configuration** section on the right side of the node editor, select the resource group whose [network connectivity configuration](#19ad1ca061sgr) to the model service is complete.
    
3.  Click **Run** to call the deployed model service and execute the command.
    
    **Note**
    
    -   [Node scheduling configuration](/help/en/dataworks/user-guide/node-scheduling/): If you want to run the node that calls the model service periodically, go to the **Scheduling** section on the right. Select the resource group where you have completed the [network connectivity configuration](#19ad1ca061sgr) with the model service. Then, configure the scheduling properties in the **Scheduling Policies** section.
        
    -   [Node publishing](/help/en/dataworks/user-guide/task-release/): If the task must run in the production environment, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2728034471/p932965.png) icon to publish the task. A node runs periodically only after it is published to the production environment.
        
    

#### **3\. Call a large language model in a Python node**

This example shows how to call a large language model in a Python node to follow an instruction to write a poem.

1.  This example depends on the Python `requests` library. Use the following parameters to create a [custom image](/help/en/dataworks/user-guide/custom-image) based on an official DataWorks image and install the dependency.
    
    **Custom image parameter**
    
    **Configuration description**
    
    Image Name/ID
    
    You can select an image suitable for Python nodes from the [DataWorks image list](/help/en/dataworks/user-guide/official-mirror#7cefc10d06ghh).
    
    Supported Task Type
    
    Select Python.
    
    Package
    
    -   Python 3: `requests`.
        
    -   Script: `/home/tops/bin/pip3 install 'urllib3<2.0'`.
        
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6707658571/p1003126.png)
    
2.  [Create a Python node](/help/en/dataworks/user-guide/node-development-of-data-studio/#13d1ad442e1tc) and add the following sample code to the node:
    
    **Note**
    
    Replace the large language model service invocation address that starts with `http` and the token that starts with `DW` with the actual values that you obtained in the [Preparations](#9b23acabb3puk) section.
    
    ```
    import requests
    import json
    import time
    import sys
    
    def stream_print_response():
        httpUrl = "http://ms-xxxx.cn-beijing.dataworks-model.aliyuncs.com"
        apikey = "DW-ms-xxxx"
        url = httpUrl + "/v1/completions"
        headers = {
            "Authorization": apikey,
            "Content-Type": "application/json"
        }
        data = {
            "prompt": "Please write a poem about spring",
            "stream": True,
            "max_tokens": 512
        }
    
        try:
            response = requests.post(url, headers=headers, json=data, stream=True)
            response.raise_for_status()
    
            full_text = ""  # Accumulate the full response to prevent loss.
            buffer = ""     # Used to handle incomplete JSON lines (optional).
    
            for line in response.iter_lines():
                if not line:
                    continue  # Skip empty lines.
    
                line_str = line.decode('utf-8').strip()
                # print(f"[DEBUG] Received line: {line_str}")  # For debugging.
    
                if line_str.startswith("data:"):
                    data_str = line_str[5:].strip()  # Remove "data: ".
    
                    if data_str == "[DONE]":
                        print("\n[Stream response ended]")
                        break
    
                    # Try to parse JSON.
                    try:
                        parsed = json.loads(data_str)
                        choices = parsed.get("choices", [])
                        if choices:
                            delta_text = choices[0].get("text", "")
                            if delta_text:
                                # Accumulate to the full text.
                                full_text += delta_text
    
                                # Print the new characters one by one.
                                for char in delta_text:
                                    print(char, end='', flush=True)
                                    sys.stdout.flush()
                                    time.sleep(0.03)  # Typewriter effect.
    
                    except json.JSONDecodeError as e:
                        # print(f"[WARNING] JSON parsing failed: {e}, original text: {data_str}")
                        continue
    
            print(f"\n\n[Full response length: {len(full_text)} characters]")
            print(f"[ Full content]:\n{full_text}")
    
        except requests.exceptions.RequestException as e:
            print(f" Request failed: {e}")
        except Exception as e:
            print(f" Other error: {e}")
    
    if __name__ == "__main__":
        stream_print_response()
    ```
    
3.  After you edit the node content, in the ****Run Configuration**** section on the right side of the node editor, select the resource group for which you have completed the [network connectivity configuration](#19ad1ca061sgr) and the custom **Image** from `Step 1` that has the `requests` library installed.
    
4.  Click **Run** to call the deployed model service to execute the command.
    
    **Note**
    
    -   [Node scheduling configuration](/help/en/dataworks/user-guide/node-scheduling/): To run the node that calls the model service periodically, go to the **Scheduling Configuration** section on the right. Select the resource group for which you have completed the [network connectivity configuration](#19ad1ca061sgr) and the custom **Image** from `Step 1` with the `requests` library installed. Then, configure the scheduling properties in the **Scheduling Policy** section.
        
    -   [Node publishing](/help/en/dataworks/user-guide/task-release/): If the task must run in the production environment, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2728034471/p932965.png) icon to publish the task. A node runs periodically only after it is published to the production environment.
        
    

## **Call a vector model service**

You can call large language models in Data Integration and Data Studio to vectorize data. The following examples show how to call a vector model service (BGE-M3) deployed in a DataWorks resource group.

### **Call in Data Integration**

In a single-table offline sync task, you can use a large language model service to perform [vectorization](/help/en/dataworks/user-guide/data-integration-supports-embedded-vectorization#01c72130e2079) on data during synchronization.

### **Call in** Data Studio

#### **1\. Call a vector model service in a large language model node**

Data Studio (new version) lets you use a [large language model node](/help/en/dataworks/user-guide/large-model-node) to process data. In the large language model node, you can configure a large language model service and call a vector model.

#### **2\. Call a vector model in a Shell node**

This example shows how to call a vector model in a Shell node to convert text into a vector.

1.  [Create a Shell node](/help/en/dataworks/user-guide/node-development-of-data-studio/#13d1ad442e1tc) and add the following sample command to the node:
    
    **Note**
    
    Replace the large language model service invocation address that starts with `http` and the token that starts with `DW` with the actual values that you obtained in the [Preparations](#9b23acabb3puk) section.
    
    ```
    curl -X POST "http://ms-xxx.cn-beijing.dataworks-model.aliyuncs.com/v1/embeddings" \
      -H "Authorization: DW-ms-xxx" \
      -H "Content-Type: application/json" \
      -d '{
        "input": "This is a piece of text that needs to be converted into a vector",
        "model": "bge-m3"
          }'
    ```
    
2.  After you edit the node content, in the ****Run Configuration**** section on the right side of the node editor, select the resource group where you have completed the [network connectivity configuration](#19ad1ca061sgr) for the model service.
    
3.  Click **Run** to execute the command and call the deployed model service.
    
    **Note**
    
    -   [Node scheduling configuration](/help/en/dataworks/user-guide/node-scheduling/): To run the node that calls the model service periodically, go to the **Scheduling** section on the right. Select the resource group where you have completed the [network connectivity configuration](#19ad1ca061sgr) for the model service. Then, configure the scheduling properties in the **Scheduling Policies** section.
        
    -   [Node publishing](/help/en/dataworks/user-guide/task-release/): If the task must run in the production environment, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2728034471/p932965.png) icon to publish the task. A node runs periodically only after it is published to the production environment.
        
    

#### **3\. Call a vector model in a Python node**

This example shows how to call a vector model in a Python node to convert text into a vector.

1.  This example depends on the Python `requests` library. Use the following parameters to create a [custom image](/help/en/dataworks/user-guide/custom-image) based on an official DataWorks image and install the dependency.
    
    **Custom image parameter**
    
    **Configuration description**
    
    Image Name/ID
    
    You can select an image suitable for Python nodes from the [DataWorks image list](/help/en/dataworks/user-guide/official-mirror#7cefc10d06ghh).
    
    Supported Task Type
    
    Select Python.
    
    Package
    
    -   Python 3: `requests`.
        
    -   Script: `/home/tops/bin/pip3 install 'urllib3<2.0'`.
        
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6707658571/p1003126.png)
    
2.  [Create a Python node](/help/en/dataworks/user-guide/node-development-of-data-studio/#13d1ad442e1tc) and add the following sample code to the node:
    
    **Note**
    
    Replace the large language model service invocation address that starts with `http` and the token that starts with `DW` with the actual values that you obtained in the [Preparations](#9b23acabb3puk) section.
    
    ```
    import requests
    import json
    import sys
    
    # Replace with your API address and token.
    api_url = "http://ms-xxx.cn-beijing.dataworks-model.aliyuncs.com" + "/v1/embeddings"
    token = "DW-ms-xxx"
    
    print("api_url:"+api_url)
    print("token:"+token)
    
    headers = {
        "Authorization": f"{token}",
        "Content-Type": "application/json"
    }
    
    payload = {
        "input": "Test text",
        "model": "bge-m3"
    }
    
    try:
        response = requests.post(api_url, headers=headers, data=json.dumps(payload))
        print("Response status code:", response.status_code)
        print("Response content:", response.text)  # View detailed error messages.
    except Exception as e:
        print("Request exception:", e)
    ```
    
3.  After you edit the node content, in the **Run Configuration** section on the right side of the node editor, select the resource group where you have completed the [network connectivity configuration](#19ad1ca061sgr) and the custom **Image** from `Step 1` that has the `requests` library installed.
    
4.  Click **Run** to execute the command to call the deployed model service.
    
    **Note**
    
    -   [Node scheduling configuration](/help/en/dataworks/user-guide/node-scheduling/): To run a node that calls a model service periodically, go to the **Scheduling Configurations** section on the right. Select the resource group for which you have completed the [network connectivity configuration](#19ad1ca061sgr) to the model service. Then, configure the scheduling properties in the **Scheduling Policies** section.
        
    -   [Node publishing](/help/en/dataworks/user-guide/task-release/): If the task must run in the production environment, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2728034471/p932965.png) icon to publish the task. A node runs periodically only after it is published to the production environment.
        
    

## **Related reading**

For more information about the commands for calling large language models, see [OpenAI-Compatible Server](https://docs.vllm.ai/en/latest/serving/openai_compatible_server.html#example-requests).
