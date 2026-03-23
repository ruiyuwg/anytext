Deploy Stable Diffusion WebUI on EAS for AI-powered image generation with one-click templates and GPU auto-scaling.

## **Features and benefits**

PAI-EAS advantages over self-built services:

-   **One-click deployment**: Pre-configured images include all dependencies.
    
-   **GPU auto-scaling**: Dynamically adjusts GPU resources based on demand.
    
-   **Enterprise-grade features**: Multi-user isolation, GPU sharing, cost allocation.
    
-   **Integrated file management**: Built-in FileBrowser extension simplifies model uploads.
    

## **Select a version**

**Version**

**Scenarios**

**Invocation Method**

**Billing**

**Standard edition**

Personal testing, prototype development

WebUI, API invocation (sync)

Billing based on deployment configuration. For details, see [EAS Billing Overview](/help/en/pai/billing-of-eas).

**API edition**

Production environment API, high concurrency scenarios

API invocation (sync & async)

**Clustered WebUI**

Team collaboration, design teams

WebUI

**Serverless edition**

**Note**

Supported only in China (Shanghai) and China (Hangzhou) regions.

Elastic load, cost optimization

WebUI

Service deployment is free. Billing based on image generation duration only.

## Quick start

1.  Log on to the [PAI console](https://pai.console.alibabacloud.com/). Select a region on the top of the page. Then, select the desired workspace and click **Elastic Algorithm Service (EAS)**.
    
2.  On the **Elastic Algorithm Service (EAS)** page, click **Deploy Service**. In the **Scenario-based Model Deployment** area, click **AI Painting - SD Web UI Deployment**.
    
3.  Configure key parameters:
    
    -   **Version**: Select Standard edition.
        
    -   **Model Settings**: Stores model files and inference-generated images. Select **OSS** and choose a bucket path.
        
    -   **Instance Type**: Select **GPU** type. The recommended instance type is `ml.gu7i.c16m60.1-gu30` (highest cost-performance ratio).
        
4.  Click **Deploy**. Wait 5–10 minutes until service status changes to **Running**.
    

## **Call the service**

### **WebUI**

Access Standard edition, Clustered WebUI, and Serverless edition services through WebUI:

1.  Click the target service name to open the **Overview** page, then click **Web applications** in the upper-right corner.
    
2.  Verify model inference.
    
    On the Stable Diffusion WebUI page, in the **Text-to-Image** tab, enter a positive prompt such as `cute dog`. Click **Generate** to complete AI art generation. Result:
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9414091271/p814657.png)
    

### **Synchronous API**

After deploying Standard edition or API edition services, send synchronous API requests.

#### **Obtain endpoint**

1.  After deploying the service, click the service name to enter **Overview**.
    
2.  In **Basic Information**, click **View Endpoint Information**.
    
3.  On **Invocation Information**, obtain the public service endpoint and Token.
    

#### Examples

## Save images locally

```
import requests
import base64
from PIL import Image
import io

# Important: Remove the trailing / from the service URL.
SERVICE_URL = "<service_url>"
TOKEN = "<Token>"

def generate_image(prompt: str) -> Image.Image:
    """Generate an image from a text prompt."""
    payload = {
        "prompt": prompt,
        "negative_prompt": "blurry, low quality, deformed",
        "steps": 25,
        "width": 512,
        "height": 512,
        "cfg_scale": 7.5,
    }
    
    response = requests.post(
        f"{SERVICE_URL}/sdapi/v1/txt2img",
        json=payload,
        headers={"Authorization": TOKEN}
    )
    response.raise_for_status()
    
    # Decode the first image
    img_data = response.json()["images"][0]
    return Image.open(io.BytesIO(base64.b64decode(img_data)))

# Generate and save
image = generate_image("a serene mountain landscape at sunset")
image.save("output.png")
```

## Save images to OSS

```
import requests

# Important: Remove the trailing / from the service URL.
SERVICE_URL = "<service_url>"
TOKEN = "<Token>"

payload = {
    "prompt": "professional portrait photography",
    "steps": 30,
    "alwayson_scripts": {
        "sd_model_checkpoint": "v1-5-pruned-emaonly.safetensors",
        "save_dir": "/code/stable-diffusion-webui/data/outputs"
    }
}

response = requests.post(
    f"{SERVICE_URL}/sdapi/v1/txt2img",
    json=payload,
    headers={"Authorization": TOKEN}
)

# Get the saved image paths
data = response.json()

# This corresponds to the mount_path of the OSS folder mounted when deploying as an EAS Service.
mount_path = "/code/stable-diffusion-webui/data"

# This corresponds to the OSS bucket URL selected when deploying as an EAS Service.
oss_url = "oss://examplebucket/data-oss"

for idx, img_path in enumerate(data['parameters']['image_url'].split(',')):
    # Get the actual OSS path of the generated image.
    img_oss_path = img_path.replace(mount_path, oss_url)
    print(img_oss_path)
```

For advanced features, use LoRA and ControlNet in API requests.

#### Use LoRA models in requests

Add `<lora:yaeMikoRealistic_Genshin:1000>` to the prompt field in the request body to apply a LoRA model. See [LoRA](https://github.com/mix1009/sdwebuiapi#lora-and-alwayson_scripts-example).

Example request body:

```
{
  "prompt":"girls <lora:yaeMikoRealistic_Genshin:1>",
  "steps":20,
  "save_images":true
}
```

#### Use ControlNet in requests

Use ControlNet in API requests for image transformations, such as maintaining horizontal or vertical orientation. For configuration details, see [txt2img using ControlNet data format](#03bad7558cxe0).

### **Asynchronous API**

After deploying API edition services, send asynchronous API requests. The client submits requests and subscribes to results, which are pushed after processing.

#### **Obtain endpoint**

1.  After deploying the service, click the service name to enter **Overview**.
    
2.  In **Basic Information**, click **View Endpoint Information**.
    
3.  On **Invocation Information**, switch to **Asynchronous Invocation** to obtain the public network input endpoint and Token.
    

#### **Send requests**

The client sends requests to the server through an asynchronous API.

```
import requests


SERVICE_URL = "<Public service URL>"
TOKEN = "<Token>"

response = requests.post(
    f"{SERVICE_URL}/sdapi/v1/txt2img?task_id=job_001",
    json={
        "prompt": "futuristic city skyline",
        "steps": 30,
        "alwayson_scripts": {
            "save_dir": "/code/stable-diffusion-webui/data/outputs"
        }
    },
    headers={"Authorization": TOKEN}
)
print(f"Job enqueued: {response.json()}")
```

**Important**

-   The asynchronous queue has size limits for both input requests and output results (typically 8 KB). When sending requests:
    
    -   If request data includes images, use URLs to pass image information. Stable Diffusion WebUI downloads and parses image data automatically.
        
    -   To exclude original image data from results, use save\_dir to specify the save path. For details, see [Additional parameters supported by API operations](#ecd1ade37f8zb).
        

#### **Subscribe to results**

The client subscribes to a result queue. The server pushes results after processing.

```
from eas_prediction import QueueClient

# Adjust the service URL format to the example: 112231234124214.cn-hangzhou.pai-eas.aliyuncs.com
SERVICE_URL = "<service_url>"
TOKEN = "<Token>"
# Service name configured during service creation.
SERVICE_NAME = "<service_name>"

sink = QueueClient(SERVICE_URL, SERVICE_NAME + '/sink')
sink.set_token(TOKEN)
sink.init()

for result in sink.watch(0, 5, auto_commit=True).run():
    print(f"Task {result.tags.get('task_id')} completed")
    print(f"Image URL: {result.data}")
```

EAS extends the native Stable Diffusion WebUI API with additional parameters. See [Additional parameters supported by API operations](#ecd1ade37f8zb).

## **Advanced deployment options**

### **Custom deployment**

Deploy Standard edition, API edition, and Clustered WebUI services:

1.  Log on to the [PAI console](https://pai.console.alibabacloud.com/). Select a region on the top of the page. Then, select the desired workspace and click **Elastic Algorithm Service (EAS)**.
    
2.  Click **Deploy Service**. In the **Custom Model Deployment** section, click **Custom Deployment**.
    
3.  On **Custom Deployment**, configure key parameters.
    
    **Parameter**
    
    **Description**
    
    **Environment Information**
    
    **Deployment Method**
    
    -   When deploying Standard edition and Clustered WebUI services, select **Image-based Deployment** and enable **Enable Web App**.
        
    -   When deploying API edition services, select **Image-based Deployment** and enable **Asynchronous Services**.
        
    
    **Image Configuration**
    
    In **Alibaba Cloud Image**, select **stable-diffusion-webui** and choose the latest image version. Available versions:
    
    -   x.x-standard: Standard edition.
        
    -   x.x-api: API edition.
        
    -   x.x-cluster-webui: Clustered WebUI.
        
    
    **Note**
    
    -   Image versions iterate frequently. Always select the latest version during deployment.
        
    -   If multiple users need to generate images simultaneously using a single Stable Diffusion WebUI, select x.x-cluster-webui.
        
    -   For usage scenarios for each version, see [Select a version](#fb0162c1599zi).
        
    
    **Storage Mount**
    
    Stores model files and inference-generated images.
    
    **Important**
    
    Storage mounts are required for API edition and Clustered WebUI.
    
    Supported types:
    
    -   **OSS**
        
        -   **Uri**: Configure OSS path to an existing OSS bucket path.
            
        -   **Mount Path**: Configure as `/code/stable-diffusion-webui/data`.
            
    -   **NAS**
        
        -   **File System**: Select an existing NAS file system.
            
        -   **Mount Target**: Select an existing mount target.
            
        -   **File System Path**: Configure as `/`.
            
        -   **Mount Path**: Configure as `/code/stable-diffusion-webui/data`.
            
    -   **PAI Model**
        
        -   **PAI Model**: Select a PAI model and model version.
            
        -   **Mount Path**: Configure as `/code/stable-diffusion-webui/data`.
            
    
    This topic uses OSS mount as an example.
    
    **Command to Run**
    
    After completing configuration, the system generates the run command.
    
    -   After performing a storage mount, add parameter `--data-dir` to the run command to mount data to the specified path of the service instance. The path must match the mount path, such as `--data-dir /code/stable-diffusion-webui/data`.
        
    -   (Optional) Add `--blade` or `--xformers` to enable inference acceleration. For more parameters, see [Parameters supported during service startup](#5f5bbc6f3a8zu).
        
    
    **Resource Information**
    
    **Deployment**
    
    Select **GPU** type. The recommended **Resource Specification** is `ml.gu7i.c16m60.1-gu30` (highest cost-performance ratio).
    
    **Service Access**
    
    **VPC**
    
    When **Storage Mount** is set to NAS, the system matches the VPC connected to NAS automatically.
    
    **vSwitch**
    
    **Security Group Name**
    
4.  Click **Deploy**.
    

### **JSON standalone deployment**

Use JSON standalone deployment for Stable Diffusion WebUI services. These examples use the Standard edition and API edition.

1.  Log on to the [PAI console](https://pai.console.alibabacloud.com/). Select a region on the top of the page. Then, select the desired workspace and click **Elastic Algorithm Service (EAS)**.
    
2.  On the **Elastic Algorithm Service (EAS)** page, click **Deploy Service**. In the **Custom Model Deployment** area, click **JSON Deployment**.
    
3.  In the editor on the **JSON Deployment** page, configure this JSON content.
    
    #### **Deploy a Standard edition service**
    
    ```
    {
        "metadata": {
            "instance": 1,
            "name": "sd_v32",
            "enable_webservice": true
        },
        "containers": [
            {
                "image": "eas-registry-vpc.<region>.cr.aliyuncs.com/pai-eas/stable-diffusion-webui:4.2",
                "script": "./webui.sh --listen --port 8000 --skip-version-check --no-hashing --no-download-sd-model --skip-prepare-environment --api --filebrowser --data-dir=/code/stable-diffusion-webui/data",
                "port": 8000
            }
        ],
        "cloud": {
            "computing": {
                "instance_type": "ml.gu7i.c16m60.1-gu30",
                "instances": null
            },
            "networking": {
                "vpc_id": "vpc-t4nmd6nebhlwwexk2****",
                "vswitch_id": "vsw-t4nfue2s10q2i0ae3****",
                "security_group_id": "sg-t4n85ksesuiq3wez****"
            }
        },
        "storage": [
            {
                "oss": {
                    "path": "oss://examplebucket/data-oss",
                    "readOnly": false
                },
                "properties": {
                    "resource_type": "model"
                },
                "mount_path": "/code/stable-diffusion-webui/data"
            },
            {
                "nfs": {
                    "path": "/",
                    "server": "726434****-aws0.ap-southeast-1.nas.aliyuncs.com"
                },
                "properties": {
                    "resource_type": "model"
                },
                "mount_path": "/code/stable-diffusion-webui/data"
            }
        ]
    } 
    ```
    
    Key parameters:
    
    **Parameter**
    
    Required
    
    **Description**
    
    **metadata.name**
    
    Yes
    
    A custom service name. Must be unique within the region.
    
    **containers.image**
    
    Yes
    
    Replace **<region>** with the current region ID (e.g., cn-shanghai for China (Shanghai)). For region IDs, see [Regions and zones](/help/en/cloud-migration-guide-for-beginners/latest/regions-and-zones).
    
    **storage**
    
    No
    
    Two mount methods are supported. Select one:
    
    -   OSS: Convenient for uploading and downloading data. Supports generating public URLs for generated images, but switching models and saving images is slower than NAS. Set **storage.oss.path** to an existing OSS bucket path.
        
    -   NAS: Faster for switching models and saving images. Set **storage.nfs.server** to an existing NAS file system.
        
    
    This topic uses OSS mount as an example.
    
    **cloud.networking**
    
    No
    
    When \`storage\` uses NAS mount, configure virtual private cloud (VPC), including \`vpc\_id\` (VPC ID), \`vswitch\_id\` (vSwitch ID), and \`security\_group\_id\` (security group ID). The configured VPC must match General-purpose NAS file system.
    
    #### **Deploy an API edition service**
    
    ```
    {
        "metadata": {
            "name": "sd_async",
            "instance": 1,
            "rpc.worker_threads": 1,
            "type": "Async"
        },
        "cloud": {
            "computing": {
                "instance_type": "ml.gu7i.c16m60.1-gu30",
                "instances": null
            },
            "networking": {
                "vpc_id": "vpc-bp1t2wukzskw9139n****",
                "vswitch_id": "vsw-bp12utkudylvp4c70****",
                "security_group_id": "sg-bp11nqxfd0iq6v5g****"
            }
        },
        "queue": {
            "cpu": 1,
            "max_delivery": 1,
            "memory": 4000,
            "resource": ""
        },
        "storage": [
            {
                "oss": {
                    "path": "oss://examplebucket/aohai-singapore/",
                    "readOnly": false
                },
                "properties": {
                    "resource_type": "model"
                },
                "mount_path": "/code/stable-diffusion-webui/data"
            },
            {
                "nfs": {
                    "path": "/",
                    "server": "0c9624****-fgh60.cn-hangzhou.nas.aliyuncs.com"
                },
                "properties": {
                    "resource_type": "model"
                },
                "mount_path": "/code/stable-diffusion-webui/data"
            }
        ],
        "containers": [
            {
                "image": "eas-registry-vpc.<region>.cr.aliyuncs.com/pai-eas/stable-diffusion-webui:4.2",
                "script": "./webui.sh --listen --port 8000 --skip-version-check --no-hashing --no-download-sd-model --skip-prepare-environment --api-log --time-log --nowebui --data-dir=/code/stable-diffusion-webui/data",
                "port": 8000
            }
        ]
    } 
    ```
    
    This table describes the differences from Standard edition configuration. All other parameters are identical.
    
    **Parameter**
    
    **Description**
    
    Delete these parameters:
    
    **metadata.enable\_webservice**
    
    Delete this parameter to disable the web server.
    
    **containers.script**
    
    Delete **\--filebrowser** configured in **containers.script** to speed up service startup.
    
    Add these parameters:
    
    **metadata.type**
    
    Configure as \`Async\` to enable asynchronous service.
    
    **metadata.rpc.worker\_threads**
    
    Configure as \`1\`. A single instance allows concurrent processing of only one request.
    
    **queue.max\_delivery**
    
    Configure as \`1\`. Retries are not allowed after a message processing error.
    
    **containers.script**
    
    Add **\--nowebui** (to speed up startup) and **\--time-log** (to record API response time) to the **containers.script** configuration.
    
    For more parameter configuration instructions, see [Deploy a Standard edition service](#918c9f776biqk).
    
4.  Click **Deploy**.
    

## **Install plugins**

Extend Stable Diffusion WebUI functionality with plugins. PAI pre-installs plugins such as BeautifulPrompt, which expands and beautifies prompts. This section demonstrates BeautifulPrompt usage.

### **Install plugin**

View and install plugins on the Extensions tab of the WebUI page:

1.  Click the target service name to open the **Overview** page, then click **Web applications** in the upper-right corner.
    
2.  On the WebUI page, under the **Extensions** tab, check if **BeautifulPrompt** is selected. If not, select the plugin and click **Apply changes and reload UI** to reload BeautifulPrompt plugin.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9414091271/p817438.png)
    
    WebUI page automatically restarts when installing a plugin. After reloading, verify inference works correctly.
    

### **Verify inference**

1.  Switch to the **BeautifulPrompt** tab. In the text box, enter a simple prompt. Click **Generate** to create a more detailed prompt.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9414091271/p815876.png)
    
    PAI provides multiple prompt generation models. Each model generates slightly different prompts:
    
    -   **pai-bloom-1b1-text2prompt-sd-v2**: Excels at generating prompts for complex scenarios.
        
    -   **pai-bloom-1b1-text2prompt-sd**: Generates prompts describing single objects.
        
    
    Select the appropriate model to generate prompts as needed.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9414091271/p815878.png)
    
2.  Select the prompt to use. Click **to txt2img** to the right of the prompt.
    
    The page automatically redirects to the **Text-to-Image** tab and auto-fills the prompt area.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9414091271/p818280.png)
    
3.  Click **Generate** to generate an image on the right side of the WebUI page.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9414091271/p818282.png)
    
    BeautifulPrompt enhances image aesthetics and adds more details compared to basic prompts. This table compares results with and without the plugin:
    
    **Input Prompt**
    
    **Effect Without BeautifulPrompt**
    
    **Effect With BeautifulPrompt**
    
    a cat
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9414091271/p711429.png)
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9414091271/p711430.png)
    
    a giant tiger
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9414091271/p711433.png)
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9414091271/p711434.png)
    

## **FAQs**

### Q: How do I mount my models and output directories?

After deploying the service, the system automatically creates this directory structure in mounted OSS or NAS storage space: ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9414091271/p815031.png)

This includes:

-   models: This directory stores model files.
    
-   After initiating an inference request, the system automatically outputs result files to this directory according to the pre-configured settings in the API code.
    

Store models downloaded from open-source communities or LoRA and Stable Diffusion models trained by you in specified directories above to load and use new models. Perform these steps:

1.  Upload model files to the corresponding subdirectory under mounted storage's `models` directory. For details, see [Step 2: Upload files](/help/en/oss/user-guide/console-quick-start#b1b7fa6157xo8).
    
2.  On the **Elastic Algorithm Service (EAS)** page, click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9725456171/p791901.png)\>**Restart Service** in the **Actions** column of the target service. Changes take effect after the service successfully restarts.
    
3.  On the Stable Diffusion WebUI page, switch models and verify model inference.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0225456171/p791904.png)
    

### Q: Are downloaded plugins and uploaded files saved in the instance if the configuration remains unchanged?

Without storage mounts, file lifecycle is tied to the service. All files are deleted when the service stops, restarts, or is deleted. Mount external storage such as OSS or NAS to persist files.

### Q: What if the service remains stuck for a long time?

-   First, try reopening the Stable Diffusion WebUI interface or restarting the EAS service to resolve the issue:
    
    -   Click the target service to enter the **Overview** page. In the upper-right corner, click **Web applications** to reopen Stable Diffusion WebUI.
        
    -   Click the **Actions** column of the target service, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9725456171/p791906.png) > **Restart Service**, and restart the EAS service.
        
-   If restarting does not resolve the issue, the service may need to download models or plugins from the public network. EAS does not enable public network access by default. Images can start offline, and mounted models do not require a network. However, some plugins require downloading content from the Internet. Check the logs for the download path, manually download the model, and upload it to OSS for mounting. For details, see [Q: How do I mount my models and output directories?](#db6220f0e1f78). If public network access is required, see [Access public or internal network resources in EAS](/help/en/pai/user-guide/configure-network-connectivity).
    

### Q: How do I switch the default language of the WebUI page to English?

1.  On the Stable Diffusion WebUI page, click **Settings**.
    
2.  In the navigation pane on the left, click **User Interface**. In the **Localization** area on the right, select **None**.
    
3.  In the upper part of the Stable Diffusion WebUI page, click **Save Settings**. After saving, click **Reload UI**.
    
    Refresh the WebUI page to switch to English.
    

### Q: How do I manage my file system?

When deploying Standard edition and Clustered WebUI services, the system automatically adds the `**--filebrowser**` parameter to the run command. Manage your file system directly through WebUI:

1.  Click the target service name to open the **Overview** page, then click **Web applications** in the upper-right corner.
    
2.  On the Stable Diffusion WebUI page, click the **FileBrowser** tab. View file system directly, or perform upload and download operations.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0225456171/p791922.png)
    

### Q: Error: No such file or directory: 'data-oss/data-\*\*\*\*\*\*\*\*.png'

1.  **Check the deployment version**. If it is an API edition (image x.x-api) or Clustered WebUI (image x.x-cluster-webui), model configuration is required.
    
2.  **Check the mount path**. Verify if the `--data-dir` parameter is in the run command and ensure its path is consistent with the OSS mount path.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7633782571/p979541.png)
    

### Q: Cannot access the WebUI page.

Check the service deployment version. The API edition does not support using WebUI. If using custom deployment, the x.x-api image is for the API edition.

## **Appendix**

### **Parameters supported during service startup**

-   Common parameters
    
    **Parameter**
    
    **Description**
    
    **Recommendation**
    
    `--blade`
    
    Enables PAI-Blade acceleration to improve image generation speed.
    
    Recommended.
    
    `--filebrowser`
    
    Enables file upload and download for models and images.
    
    Enabled by default.
    
    `--data-dir /code/stable-diffusion-webui/data-oss`
    
    Path for persistent storage mount.
    
    Use when mounting persistent storage. Default starting path is `/code/stable-diffusion-webui/`. Relative paths are also supported.
    
    `--api`
    
    Enables WebUI API access.
    
    Enabled by default.
    
    `--enable-nsfw-censor`
    
    Disabled by default. Enable for NSFW content filtering if security and compliance requirements exist.
    
    Adjust as needed.
    
    `--always-hide-tabs`
    
    Hides specified tabs from the WebUI.
    
    Adjust as needed.
    
    `--min-ram-reserved 40 --sd-dynamic-cache`
    
    Caches the Stable Diffusion model in memory for faster model switching.
    
    Optional.
    
-   Clustered edition parameters
    
    **Note**
    
    Checkpoint and ControlNet large models automatically load files from the public folder and custom files.
    
    **Parameter**
    
    **Description**
    
    **Recommendation**
    
    `--lora-dir`
    
    Specify the public LoRA model directory, for example: `--lora-dir /code/stable-diffusion-webui/data-oss/models/Lora`.
    
    Not configured by default. All user LoRA directories are isolated, and only LoRA models in user folders are loaded. When a specific directory is specified, all users simultaneously load LoRA models from both the public directory and their user folders.
    
    `--vae-dir`
    
    Specify the public VAE model directory, for example: `--vae-dir /code/stable-diffusion-webui/data-oss/models/VAE`.
    
    Not configured by default. All user VAE directories are isolated, and only VAE models in user folders are loaded. When a specific directory is specified, all users load only VAE models from that public directory.
    
    `--gfpgan-dir`
    
    Specify the public GFPGAN model directory, for example: `--gfpgan-dir /code/stable-diffusion-webui/data-oss/models/GFPGAN`.
    
    Not configured by default. All user GFPGAN directories are isolated, and only GFPGAN models in user folders are loaded. When a specific directory is specified, all users load only GFPGAN models from that public directory.
    
    `--embeddings-dir`
    
    Specify the public embeddings model directory, for example: `--embeddings-dir /code/stable-diffusion-webui/data-oss/embeddings`.
    
    Not configured by default. All user embeddings directories are isolated, and only embeddings models in user folders are loaded. When a specific directory is specified, all users load only embeddings models from that public directory.
    
    `--hypernetwork-dir`
    
    Specify the public hypernetwork model directory, for example: `--hypernetwork-dir /code/stable-diffusion-webui/data-oss/models/hypernetworks`.
    
    Not configured by default. All user hypernetwork directories are isolated, and only hypernetwork models in user folders are loaded. When a specific directory is specified, all users load only hypernetwork models from that public directory.
    
    `--root-extensions`
    
    Plugin directory uses a shared directory. After using this parameter, all users see identical plugins.
    
    Use this parameter when centralizing plugin installation or management.
    

### **Additional parameters for API operations**

EAS extends the native Stable Diffusion WebUI API with additional optional parameters:

-   Specify Stable Diffusion models, VAE models, and output directories.
    
-   Pass input parameters via URL and receive corresponding status codes.
    
-   Access generated images and ControlNet images via URL.
    

Examples:

#### **txt2img request and response examples**

Example request:

```
{
      "alwayson_scripts": {
          "sd_model_checkpoint": "deliberate_v2.safetensors",  
          "save_dir": "/code/stable-diffusion-webui/data-oss/outputs",
          "sd_vae": "Automatic"
      },
      "steps": 20,
      "prompt": "girls",          
      "batch_size": 1,                                            
      "n_iter": 2,                                                 
      "width": 576, 
      "height": 576,
      "negative_prompt": "ugly, out of frame"
  }
```

Key parameters:

-   **sd\_model\_checkpoint**: Specifies the Stable Diffusion model and enables automatic model switching.
    
-   **sd\_vae**: Specifies the VAE model.
    
-   **save\_dir**: Specifies the save path for generated images.
    

The synchronous API request example is as follows:

```
# Invoke the synchronous API to verify model effects.

curl --location --request POST '<service_url>/sdapi/v1/txt2img' \
--header 'Authorization: <token>' \
--header 'Content-Type: application/json' \
--data-raw '{
      "alwayson_scripts": {
          "sd_model_checkpoint": "deliberate_v2.safetensors",
          "save_dir": "/code/stable-diffusion-webui/data-oss/outputs",
          "sd_vae": "Automatic"
      },
      "prompt": "girls",          
      "batch_size": 1,                                            
      "n_iter": 2,                                                 
      "width": 576, 
      "height": 576,
      "negative_prompt": "ugly, out of frame"
  }'
```

The response data format example is as follows:

```
{
  "images": [],
  "parameters": {
    "id_task": "14837",
    "status": 0,
    "image_url": "/code/stable-diffusion-webui/data-oss/outputs/txt2img-grids/2023-07-24/grid-29a67c1c-099a-4d00-8ff3-1ebe6e64931a.png,/code/stable-diffusion-webui/data-oss/outputs/txt2img-images/2023-07-24/74626268-6c81-45ff-90b7-faba579dc309-1146644551.png,/code/stable-diffusion-webui/data-oss/outputs/txt2img-images/2023-07-24/6a233060-e197-4169-86ab-1c18adf04e3f-1146644552.png",
    "seed": "1146644551,1146644552",
    "error_msg": "",
    "total_time": 32.22393465042114
  },
  "info": ""
}
```

The asynchronous API request example is as follows:

```
# Send data directly to the asynchronous queue.
curl --location --request POST '<service_url>/sdapi/v1/txt2img' \
--header 'Authorization: <token>' \
--header 'Content-Type: application/json' \
--data-raw '{
    "alwayson_scripts": {
        "sd_model_checkpoint": "deliberate_v2.safetensors",
        "id_task": "14837",
        "uid": "123",
        "save_dir": "tmp/outputs"
    },
    "prompt": "girls",
    "batch_size": 1,
    "n_iter": 2,
    "width": 576,
    "height": 576,
    "negative_prompt": "ugly, out of frame"
}'
```

#### **img2img Request Data Format Example**

Request data format example:

```
{
    "alwayson_scripts": {
        "image_link":"https://eas-cache-cn-hangzhou.oss-cn-hangzhou-internal.aliyuncs.com/stable-diffusion-cache/tests/boy.png",
        "sd_model_checkpoint": "deliberate_v2.safetensors",
        "sd_vae": "Automatic",
        "save_dir": "/code/stable-diffusion-webui/data-oss/outputs"
    },
    "prompt": "girl",
    "batch_size": 1,                                            
    "n_iter": 2,                                                 
    "width": 576, 
    "height": 576,
    "negative_prompt": "ugly, out of frame",
    "steps": 20, # Sampling steps
    "seed": 111,   
    "subseed": 111, # Variation seed
    "subseed_strength": 0, # Variation strength
    "seed_resize_from_h": 0, # Resize seed from height
    "seed_resize_from_w": 0, # Resize seed from width
    "seed_enable_extras": false, # Extra
    "sampler_name": "DDIM", # Sampling method
    "cfg_scale": 7.5, # CFG Scale
    "restore_faces": true, # Restore faces
    "tiling": false, # Tiling
    "init_images": [], # image base64 str, default None
    "mask_blur": 4, # Mask blur
    "resize_mode": 1, # 0 just resize, 1 crop and resize, 2 resize and fill, 3 just resize
    "denoising_strength": 0.75, # Denoising strength
    "inpainting_mask_invert": 0, #int, index of ['Inpaint masked', 'Inpaint not masked'], Mask mode
    "inpainting_fill": 0, #index of ['fill', 'original', 'latent noise', 'latent nothing'], Masked content
    "inpaint_full_res": 0, # index of ["Whole picture", "Only masked"], Inpaint area
    "inpaint_full_res_padding": 32, #minimum=0, maximum=256, step=4, value=32, Only masked padding, pixels
    #"image_cfg_scale": 1, # resized by scale
    #"script_name": "Outpainting mk2", # The script name to use. Do not add this field if not used.
    #"script_args": ["Outpainting", 128, 8, ["left", "right", "up", "down"], 1, 0.05]  # The parameters corresponding to the script. Here, they correspond to: fixed field, pixels, mask_blur, direction, noise_q, color_variation
}
```

Response data format example:

```
{
    "images":[],
    "parameters":{
        "id_task":"14837",
        "status":0,
        "image_url":"/data/api_test/img2img-grids/2023-06-05/grid-0000.png,/data/api_test/img2img-images/2023-06-05/00000-1003.png,/data/api_test/img2img-images/2023-06-05/00001-1004.png",
        "seed":"1003,1004",
        "error_msg":""
    },
    "info":""
}
```

#### **txt2img Using ControlNet Data Format**

Request data format:

```
{
    "alwayson_scripts": {
        "sd_model_checkpoint": "deliberate_v2.safetensors", # Model name, required
        "save_dir": "/code/stable-diffusion-webui/data-oss/outputs",
        "controlnet":{
            "args":[
                {
                    "image_link": "https://pai-aigc-dataset.oss-cn-hangzhou.aliyuncs.com/pixabay_images/00008b87bf3ff6742b8cf81c358b9dbc.jpg",
                    "enabled": true, 
                    "module": "canny", 
                    "model": "control_v11p_sd15_canny", 
                    "weight": 1, 
                    "resize_mode": "Crop and Resize", 
                    "low_vram": false, 
                    "processor_res": 512, 
                    "threshold_a": 100, 
                    "threshold_b": 200, 
                    "guidance_start": 0, 
                    "guidance_end": 1, 
                    "pixel_perfect": true, 
                    "control_mode": "Balanced", 
                    "input_mode": "simple", 
                    "batch_images": "", 
                    "output_dir": "", 
                    "loopback": false
                }
            ]
        }
    },
    # Main parameters
    "prompt": "girls",          
    "batch_size": 1,                                            
    "n_iter": 2,                                                 
    "width": 576, 
    "height": 576,
    "negative_prompt": "ugly, out of frame"
}
```

Response data format example:

```
{
    "images":[],
    "parameters":{
        "id_task":"14837",
        "status":0,
        "image_url":"/data/api_test/txt2img-grids/2023-06-05/grid-0007.png,/data/api_test/txt2img-images/2023-06-05/00014-1003.png,/data/api_test/txt2img-images/2023-06-05/00015-1004.png",
        "seed":"1003,1004",
        "error_msg":"",
        "image_mask_url":"/data/api_test/controlnet_mask/2023-06-05/00000.png,/data/api_test/controlnet_mask/2023-06-05/00001.png"
    },
    "info":""
}
```

## References

-   For more information about Elastic Algorithm Service billing, see [Elastic Algorithm Service billing](/help/en/pai/billing-of-eas).
