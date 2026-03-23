ComfyUI is a node-based user interface for Stable Diffusion that lets you build complex AIGC workflows for tasks such as short video content generation and animation production. This topic describes how to deploy and use ComfyUI in Elastic Algorithm Service (EAS).

## Edition **guide**

**Scenarios**

**Call method**

**Standard Edition**

-   Single-user WebUI or API calls, suitable for getting started and for development and testing.
    
-   We recommend that you deploy a single instance because the concurrency capability is limited.
    

-   WebUI
    
-   Online debugging
    
-   API call (sync)
    

**API Edition**

-   High concurrency, suitable for production environments.
    
-   The deployment is relatively complex and requires additional CPU resources to create queue service instances.
    

API call (asynchronous)

**Cluster Edition WebUI**

-   Multiple users use the WebUI at the same time with environment isolation, suitable for team collaboration or teaching.
    
-   High resource consumption. For more information about the working principle, see [Introduction to the working principle of the Cluster Edition service](#874eafd901r07).
    

WebUI

**Serverless Edition**

-   Free deployment and billing based on the duration of image generation. The cost is extremely low, suitable for fluctuating demands.
    
-   **You cannot use custom models or plug-ins**. Deployment is supported only in the China (Shanghai) and China (Hangzhou) regions.
    

WebUI

**Note**

The type of API call, synchronous or asynchronous, depends on whether the EAS queue service is used:

-   **Synchronous call**: Directly requests the inference instance without using the EAS queue service.
    
-   **Asynchronous call**: Uses the EAS queue service to send requests to an input queue and retrieve results through a subscription.
    

Because ComfyUI has its own asynchronous queue system, a synchronous call is still processed asynchronously. After you send a request, the system returns a prompt ID. You must then use this prompt ID to poll for the inference result.

## **Billing**

-   **Serverless Edition**: Deployment is free of charge. You are billed based on the actual inference duration.
    
-   **Other editions**: You are billed for deployed resources and runtime duration. Charges apply after the service is successfully deployed, even if it is not in use.
    

For more information about billing, see [Billing of Elastic Algorithm Service (EAS)](/help/en/pai/billing-of-eas).

## **Deploy a service**

The Serverless Edition can only be deployed using the scenario-based model deployment method. The Standard, Cluster, and **API** editions can be deployed using the simple scenario-based model deployment method or the custom model deployment method, which supports more features.

**Important**

-   **ComfyUI supports only single-card mode** (single-machine single-card or multi-machine single-card) and does not support multi-card concurrent operations. Because an EAS instance has only one ComfyUI process, if you select an instance with multiple GPU specifications, such as 2 × A10, during deployment, only one GPU is used. A single image generation task is not accelerated.
    
-   Load balancing: You must deploy the **API Edition** and implement load balancing using an [asynchronous queue](/help/en/pai/user-guide/queue-service-and-asynchronous-inference).
    

### **Method 1: Scenario-based model deployment (recommended)**

1.  Log on to the [PAI console](https://pai.console.alibabacloud.com/). Select a region on the top of the page. Then, select the desired workspace and click **Elastic Algorithm Service (EAS)**.
    
2.  On the **Elastic Algorithm Service (EAS)** page, click **Deploy Service**. Under **Scenario-based Model Deployment**, click **AI Video Generation: ComfyUI-based Deployment**.
    
3.  On the **AI Video Generation: ComfyUI-based Deployment** page, configure the following parameters.
    
    -   **Edition**: Select a edition based on the [Edition guide](#7c88486379sq8).
        
    -   **Mount storage**: You must configure the model if you want to use your own models, install custom nodes, or make API calls. For example, if you use [Object Storage Service (OSS)](/help/en/oss/user-guide/console-quick-start), select a bucket and a directory. After the deployment is successful, the system automatically creates the required ComfyUI directories in the bucket. Ensure that the bucket is in the same region as the EAS service.
        
    -   **Resource Configuration**: We recommend using GU30, A10, or T4 GPU types. The system defaults to **GPU** > **ml.gu7i.c16m60.1-gu30**, which is a cost-effective option.
        
4.  Click **Deploy**. The deployment takes about 5 minutes. The deployment is successful when the **Service Status** changes to **Running**.
    

### **Method 2: Custom model deployment**

1.  Log on to the [PAI console](https://pai.console.alibabacloud.com/). Select a region on the top of the page. Then, select the desired workspace and click **Elastic Algorithm Service (EAS)**.
    
2.  Click **Deploy Service**. In the **Custom Model Deployment** section, click **Custom Deployment**.
    
3.  On the **Custom Deployment** page, configure the following key parameters. For more information, see [Custom Deployment Parameter Descriptions](/help/en/pai/user-guide/model-service-deployment-by-using-the-pai-console/#70b9cc791f08h).
    
    -   Set the **Deployment Method** to **Image Deployment**, and select the **Enable Web Application** check box.
        
    -   **Image Configuration**: In the **Official Images** list, select **comfyui** > **comfyui:1.9**. In the image tag, x.x indicates the Standard Edition, x.x-api indicates the API Edition, and x.x-cluster indicates the Cluster Edition.
        
        **Note**
        
        -   Because versions are iterated rapidly, you can select the latest image version during deployment.
            
        -   For more information about the scenarios of each version, see [Edition guide](#7c88486379sq8).
            
        
    -   **Storage Mount**: To use your own models, install custom nodes, or make API calls, you must mount storage. For example, when using [Object Storage Service (OSS)](/help/en/oss/user-guide/console-quick-start), select a bucket and a directory. After the deployment is complete, the required ComfyUI directories are automatically created in the selected directory. Ensure that the bucket is in the same region as the EAS service.
        
        -   **Uri**: Click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6975675171/p790424.png) to select an existing OSS storage directory. For example, `oss://bucket-test/data-oss/`.
            
        -   **Mount Path**: Set this to `/code/data-oss`. This mounts the configured OSS file directory to the `/code/data-oss` path in the image.
            
    -   **Run Command**:
        
        -   After you configure the image version, the system automatically sets the run command to `python main.py --listen --port 8000`. The port number is 8000.
            
        -   If you have mounted storage, you must add the `--data-dir` parameter to the **Startup Command** and set its value to the mount directory. This mount directory must be the same as the **Mount Path**. For example, `python main.py --listen --port 8000 --data-dir /code/data-oss`.
            
    -   Set **Resource Type** to **Public Resources**.
        
    -   **Deployment Resources**: The resource specification must be a GPU type. We recommend **ml.gu7i.c16m60.1-gu30**, which is the most cost-effective option. If inventory is insufficient, you can select **ecs.gn6i-c16g1.4xlarge**.
        
4.  Click **Deploy**. The service deployment takes approximately 5 minutes. The service is successfully deployed when the **Service Status** is **Running**.
    

## **Call the service**

### **Use the WebUI**

**Important**

The Standard, Cluster, and Serverless editions support the WebUI.

Click the target service name to go to its overview page, then click **Web applications** in the upper-right corner.

> If a page loads slowly, see [The page freezes or takes a long time to refresh](#68ccb57e1ba4b).

#### **1\. Use a template workflow**

The WebUI supports custom workflow configurations and provides multiple preset templates. You can select a template on the **Workflow** > **Browse Templates** page. This topic uses the **Wan VACE Text to Video** workflow template as an example.

**Note**

For the Serverless Edition, this workflow is not included in the template. You can use a different template or select **Workflow** > **Open** to load a workflow from your local file system.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9938402571/p964725.png)

After the workflow is loaded, you can ignore the error message about the missing model. We recommend that you select the check box to prevent this message from appearing again.

Because of a path change, running the workflow directly may cause the following error.

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6835950671/p992313.png)

First, reselect the `wan2.1_vace_14B_fp16.safetensors` and `Wan21_CausVid_14B_T2V_lora_rank32.safetensors` models in the **Load models here** area.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9938402571/p964729.png)

After the workflow runs successfully, the generated video is displayed in the **Save Video** area.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9938402571/p964914.png)

#### **2\. Use** third-party models and install custom nodes (ComfyUI plug-ins)

1.  Ensure that the deployed ComfyUI version is not the Serverless Edition. The Serverless Edition can only use built-in models and nodes.
    
2.  **A storage mount must be configured for the service.** For a custom deployment, add the `--data-dir` parameter to the **Startup Command** field to mount a directory. For more information, see [Method 2: Custom Model Deployment](#07a2e72874rxn).
    
    After the service is deployed, the system automatically creates the following directory structure in the mounted OSS or NAS storage.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5857621271/p812479.png)
    
    Where:
    
    -   custom\_nodes: This directory is used to store node files.
        
    -   models: This directory is used to store model files.
        
3.  **Upload model or node files**. To use OSS as an example, you can [upload files to OSS in the console](/help/en/oss/user-guide/console-quick-start#b1b7fa6157xo8). For large files, see [How to upload large files to OSS](/help/en/oss/how-to-upload-large-objects-to-oss).
    
    -   **Upload model files**: Upload the model to the corresponding subdirectory of `models` based on the instructions in the source project of the node that uses the model. For example:
        
        -   For the Checkpoint loader, the model should be uploaded to `models/checkpoints`.
            
        -   For the style model loader, the model should be uploaded to `models/styles`.
            
    -   **Upload node files**: We recommend that you upload custom nodes to the `custom_nodes` directory of the mounted storage.
        
4.  **Load a new model or restart the process.**
    
    After you upload a model to the mounted bucket, click **PaiCustom** > **Load New Model**. If you still cannot find the model, click **Restart Process**. After the process restarts, refresh the page.
    
    After you upload the node file, click **Restart Process**. After the process restarts, refresh the browser page.
    

#### **3\. Export a workflow**

After you debug the workflow, click **Workflow** > **Export (API)** to save the workflow as a JSON file. You can then use this file for API calls.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9938402571/p961795.png)

### **API call**

**Important**

The Standard Edition service supports only synchronous calls and provides an online debugging feature.

The API Edition service supports only asynchronous calls and only the api\_prompt path.

The API request body for ComfyUI depends on the workflow configuration. You must first set up and [export the workflow's JSON file](#511af9402coxt) from the WebUI.

-   Synchronous call: The request body must wrap the content of the workflow JSON file with the prompt key.
    
-   Asynchronous call: The request body is the content of the workflow JSON file.
    

Because the **Wan VACE Text to Video** workflow is time-consuming, the following workflow is provided for testing. It takes about 3 minutes to run.

**Click to view a sample request body for the test workflow**

## Synchronous call

```
{
    "prompt": {
        "3": {
            "inputs": {
                "seed": 423988542100860,
                "steps": 40,
                "cfg": 7,
                "sampler_name": "dpmpp_sde_gpu",
                "scheduler": "karras",
                "denoise": 1,
                "model": [
                    "4",
                    0
                ],
                "positive": [
                    "6",
                    0
                ],
                "negative": [
                    "7",
                    0
                ],
                "latent_image": [
                    "5",
                    0
                ]
            },
            "class_type": "KSampler",
            "_meta": {
                "title": "K Sampler"
            }
        },
        "4": {
            "inputs": {
                "ckpt_name": "LandscapeBING_v10.safetensors"
            },
            "class_type": "CheckpointLoaderSimple",
            "_meta": {
                "title": "Checkpoint Loader (Simple)"
            }
        },
        "5": {
            "inputs": {
                "width": 720,
                "height": 1280,
                "batch_size": 1
            },
            "class_type": "EmptyLatentImage",
            "_meta": {
                "title": "Empty Latent"
            }
        },
        "6": {
            "inputs": {
                "text": "Rocket takes off from the ground, fire, sky, airplane",
                "speak_and_recognation": {
                    "__value__": [
                        false,
                        true
                    ]
                },
                "clip": [
                    "4",
                    1
                ]
            },
            "class_type": "CLIPTextEncode",
            "_meta": {
                "title": "CLIP Text Encoder"
            }
        },
        "7": {
            "inputs": {
                "text": "",
                "speak_and_recognation": {
                    "__value__": [
                        false,
                        true
                    ]
                },
                "clip": [
                    "4",
                    1
                ]
            },
            "class_type": "CLIPTextEncode",
            "_meta": {
                "title": "CLIP Text Encoder"
            }
        },
        "8": {
            "inputs": {
                "samples": [
                    "3",
                    0
                ],
                "vae": [
                    "4",
                    2
                ]
            },
            "class_type": "VAEDecode",
            "_meta": {
                "title": "VAE Decode"
            }
        },
        "9": {
            "inputs": {
                "filename_prefix": "ComfyUI",
                "images": [
                    "8",
                    0
                ]
            },
            "class_type": "SaveImage",
            "_meta": {
                "title": "Save Image"
            }
        },
        "13": {
            "inputs": {
                "seed": 788620942678235,
                "steps": 40,
                "cfg": 2.5,
                "sampler_name": "euler_ancestral",
                "scheduler": "karras",
                "denoise": 1,
                "model": [
                    "17",
                    0
                ],
                "positive": [
                    "16",
                    0
                ],
                "negative": [
                    "16",
                    1
                ],
                "latent_image": [
                    "16",
                    2
                ]
            },
            "class_type": "KSampler",
            "_meta": {
                "title": "K Sampler"
            }
        },
        "14": {
            "inputs": {
                "samples": [
                    "13",
                    0
                ],
                "vae": [
                    "18",
                    2
                ]
            },
            "class_type": "VAEDecode",
            "_meta": {
                "title": "VAE Decode"
            }
        },
        "15": {
            "inputs": {
                "filename_prefix": "ComfyUI",
                "fps": 10.000000000000002,
                "lossless": false,
                "quality": 85,
                "method": "default",
                "images": [
                    "14",
                    0
                ]
            },
            "class_type": "SaveAnimatedWEBP",
            "_meta": {
                "title": "Save WEBP"
            }
        },
        "16": {
            "inputs": {
                "width": 512,
                "height": 768,
                "video_frames": 35,
                "motion_bucket_id": 140,
                "fps": 15,
                "augmentation_level": 0.15000000000000002,
                "clip_vision": [
                    "18",
                    1
                ],
                "init_image": [
                    "8",
                    0
                ],
                "vae": [
                    "18",
                    2
                ]
            },
            "class_type": "SVD_img2vid_Conditioning",
            "_meta": {
                "title": "SVD_Image to Video_Conditioning"
            }
        },
        "17": {
            "inputs": {
                "min_cfg": 1,
                "model": [
                    "18",
                    0
                ]
            },
            "class_type": "VideoLinearCFGGuidance",
            "_meta": {
                "title": "Linear CFG Guidance"
            }
        },
        "18": {
            "inputs": {
                "ckpt_name": "svd_xt.safetensors"
            },
            "class_type": "ImageOnlyCheckpointLoader",
            "_meta": {
                "title": "Checkpoint Loader (Image Only)"
            }
        },
        "19": {
            "inputs": {
                "frame_rate": 10,
                "loop_count": 0,
                "filename_prefix": "comfyUI",
                "format": "video/h264-mp4",
                "pix_fmt": "yuv420p",
                "crf": 20,
                "save_metadata": true,
                "trim_to_audio": false,
                "pingpong": false,
                "save_output": true,
                "images": [
                    "14",
                    0
                ]
            },
            "class_type": "VHS_VideoCombine",
            "_meta": {
                "title": "Combine to Video"
            }
        }
    }
}
```

## Asynchronous invocation

```
{
    "3": {
        "inputs": {
            "seed": 423988542100860,
            "steps": 40,
            "cfg": 7,
            "sampler_name": "dpmpp_sde_gpu",
            "scheduler": "karras",
            "denoise": 1,
            "model": [
                "4",
                0
            ],
            "positive": [
                "6",
                0
            ],
            "negative": [
                "7",
                0
            ],
            "latent_image": [
                "5",
                0
            ]
        },
        "class_type": "KSampler",
        "_meta": {
            "title": "K Sampler"
        }
    },
    "4": {
        "inputs": {
            "ckpt_name": "LandscapeBING_v10.safetensors"
        },
        "class_type": "CheckpointLoaderSimple",
        "_meta": {
            "title": "Checkpoint Loader (Simple)"
        }
    },
    "5": {
        "inputs": {
            "width": 720,
            "height": 1280,
            "batch_size": 1
        },
        "class_type": "EmptyLatentImage",
        "_meta": {
            "title": "Empty Latent"
        }
    },
    "6": {
        "inputs": {
            "text": "Rocket takes off from the ground, fire, sky, airplane",
            "speak_and_recognation": {
                "__value__": [
                    false,
                    true
                ]
            },
            "clip": [
                "4",
                1
            ]
        },
        "class_type": "CLIPTextEncode",
        "_meta": {
            "title": "CLIP Text Encoder"
        }
    },
    "7": {
        "inputs": {
            "text": "",
            "speak_and_recognation": {
                "__value__": [
                    false,
                    true
                ]
            },
            "clip": [
                "4",
                1
            ]
        },
        "class_type": "CLIPTextEncode",
        "_meta": {
            "title": "CLIP Text Encoder"
        }
    },
    "8": {
        "inputs": {
            "samples": [
                "3",
                0
            ],
            "vae": [
                "4",
                2
            ]
        },
        "class_type": "VAEDecode",
        "_meta": {
            "title": "VAE Decode"
        }
    },
    "9": {
        "inputs": {
            "filename_prefix": "ComfyUI",
            "images": [
                "8",
                0
            ]
        },
        "class_type": "SaveImage",
        "_meta": {
            "title": "Save Image"
        }
    },
    "13": {
        "inputs": {
            "seed": 788620942678235,
            "steps": 40,
            "cfg": 2.5,
            "sampler_name": "euler_ancestral",
            "scheduler": "karras",
            "denoise": 1,
            "model": [
                "17",
                0
            ],
            "positive": [
                "16",
                0
            ],
            "negative": [
                "16",
                1
            ],
            "latent_image": [
                "16",
                2
            ]
        },
        "class_type": "KSampler",
        "_meta": {
            "title": "K Sampler"
        }
    },
    "14": {
        "inputs": {
            "samples": [
                "13",
                0
            ],
            "vae": [
                "18",
                2
            ]
        },
        "class_type": "VAEDecode",
        "_meta": {
            "title": "VAE Decode"
        }
    },
    "15": {
        "inputs": {
            "filename_prefix": "ComfyUI",
            "fps": 10.000000000000002,
            "lossless": false,
            "quality": 85,
            "method": "default",
            "images": [
                "14",
                0
            ]
        },
        "class_type": "SaveAnimatedWEBP",
        "_meta": {
            "title": "Save WEBP"
        }
    },
    "16": {
        "inputs": {
            "width": 512,
            "height": 768,
            "video_frames": 35,
            "motion_bucket_id": 140,
            "fps": 15,
            "augmentation_level": 0.15000000000000002,
            "clip_vision": [
                "18",
                1
            ],
            "init_image": [
                "8",
                0
            ],
            "vae": [
                "18",
                2
            ]
        },
        "class_type": "SVD_img2vid_Conditioning",
        "_meta": {
            "title": "SVD_Image to Video_Conditioning"
        }
    },
    "17": {
        "inputs": {
            "min_cfg": 1,
            "model": [
                "18",
                0
            ]
        },
        "class_type": "VideoLinearCFGGuidance",
        "_meta": {
            "title": "Linear CFG Guidance"
        }
    },
    "18": {
        "inputs": {
            "ckpt_name": "svd_xt.safetensors"
        },
        "class_type": "ImageOnlyCheckpointLoader",
        "_meta": {
            "title": "Checkpoint Loader (Image Only)"
        }
    },
    "19": {
        "inputs": {
            "frame_rate": 10,
            "loop_count": 0,
            "filename_prefix": "comfyUI",
            "format": "video/h264-mp4",
            "pix_fmt": "yuv420p",
            "crf": 20,
            "save_metadata": true,
            "trim_to_audio": false,
            "pingpong": false,
            "save_output": true,
            "images": [
                "14",
                0
            ]
        },
        "class_type": "VHS_VideoCombine",
        "_meta": {
            "title": "Combine to Video"
        }
    }
}
```

## Online debugging

On the **Elastic Algorithm Service (EAS)** page, find the target service and click **Online Debugging** in the **Actions** column.

1.  Send a POST request to obtain a Prompt ID.
    
    1.  On the debug page, in the **Online Debugging Request Parameters** section, enter the request body in the **Body** field. Then, add `/prompt` to the request URL text box.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6975675171/p790935.png)
        
    2.  Click **Send Request** to view the response in the **Debugging Information** area, as shown in the following figure.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6975675171/p790861.png)
        
    
2.  Send a GET request to retrieve the inference result based on the Prompt ID.
    
    1.  In the **Online API Debugging Request Parameters** area, set the request method to GET and enter `/history/<prompt id>` in the text box, as shown in the following figure.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6975675171/p790657.png)
        
        Replace `<prompt id>` with the Prompt ID that you obtained in the previous step.
        
    2.  Click **Send Request** to obtain the inference result.
        
        You can view the generated inference result in the `output` directory of the mounted storage.
        
    

### **Synchronous call**

1.  View the endpoint information.
    
    1.  On the **Inference Service** tab, click your service name to go to the **Overview** page. In the **Basic Information** section, click **View Endpoint Information**.
        
    2.  In the **Invocation Method** panel, you can obtain the endpoint and token. [Select an Internet or VPC endpoint](/help/en/pai/user-guide/call-a-service-over-a-public-endpoint#2ac6fd9e55jsb) as needed. This topic uses <EAS\_ENDPOINT> and <EAS\_TOKEN> to represent the endpoint and token, respectively.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2278019471/p938947.png)
        
    
2.  Send a POST request to obtain a Prompt ID.
    
    -   **HTTP request method**: POST.
        
    -   **URI of the request (URL)**: `<EAS_ENDPOINT>/prompt`. If `<EAS_ENDPOINT>` ends with a forward slash (`/`), delete it. The final URL should look similar to this example: `http://comfyui****.175805416243****.cn-beijing.pai-eas.aliyuncs.com/prompt`.
        
    -   **Request header (Headers)**:
        
        **Header**
        
        **Value**
        
        **Description**
        
        Authorization
        
        <EAS\_TOKEN>
        
        The licensing key.
        
        Content-Type
        
        application/json
        
        Specifies the format of the request body.
        
    
    Sample code:
    
    #### cURL
    
    ```
    curl --location --request POST '<EAS_ENDPOINT>/prompt' \
    --header 'Authorization: <EAS_TOKEN>' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "prompt":
        ...omitted
    }'
    ```
    
    In this case, `--data-raw` is the request body.
    
    #### Python
    
    Sample code:
    
    ```
    import requests
    import json
    
    # Replace <EAS_ENDPOINT> and <EAS_TOKEN> with the endpoint and token obtained in Step 1.
    service_url = "<EAS_ENDPOINT>"
    token = "<EAS_TOKEN>"
    
    if service_url[-1] == "/":
        service_url = service_url[:-1]
    
    # Request body. Configure the value of prompt in the payload as the content of the JSON file corresponding to the workflow.
    payload = """{
        "prompt":
        ...omitted
    }"""
    payload = json.loads(payload)
    
    session = requests.session()
    session.headers.update({"Authorization": token})
      
    response = session.post(url=f'{service_url}/prompt', json=payload)
    if response.status_code != 200:
        raise Exception(response.content)
    
    data = response.json()
    print(data)
    ```
    
    Sample response:
    
    ```
    {
        "prompt_id": "021ebc5b-e245-4e37-8bd3-00f7b949****",
        "number": 5,
        "node_errors": {}
    }
    ```
    
    You can obtain the Prompt ID from the returned result.
    
3.  Send a request to obtain the inference result.
    
    -   **HTTP request method**: `GET`
        
    -   **Request URL**: `<EAS_ENDPOINT>/history/<prompt_id>`. Replace `<prompt_id>` with the prompt\_id obtained in the previous step.
        
    -   **Request header**:
        
        **Header**
        
        **Value**
        
        **Description**
        
        Authorization
        
        <EAS\_TOKEN>
        
        The licensing key, which is obtained in Step 1.
        
    
    Sample code:
    
    #### cURL
    
    ```
    curl --location --request GET '<EAS_ENDPOINT>/history/<prompt_id>' \
         --header 'Authorization: <EAS_TOKEN>'
    ```
    
    #### Python
    
    ```
    import requests
    
    # Replace <EAS_ENDPOINT> and <EAS_TOKEN> with the endpoint and token obtained in Step 1.
    # Replace <prompt_id> with the prompt_id obtained in Step 2.
    service_url = "<EAS_ENDPOINT>"
    token = "<EAS_TOKEN>"
    prompt_id = "<prompt_id>"
    
    if service_url[-1] == "/":
        service_url = service_url[:-1]
    
    session = requests.session()
    session.headers.update({"Authorization": token})
    
    response = session.get(url=f'{service_url}/history/{prompt_id}')
    
    if response.status_code != 200:
        raise Exception(response.content)
    
    data = response.json()
    print(data)
    ```
    
    Sample response:
    
    **Click to view a sample response**
    
    ```
    {
        "130bcd6b-5bb5-496c-9c8c-3a1359a0****": {
            "prompt": ...omitted,
            "outputs": {
                "9": {
                    "images": [
                        {
                            "filename": "ComfyUI_1712645398_18dba34d-df87-4735-a577-c63d5506a6a1_.png",
                            "subfolder": "",
                            "type": "output"
                        }
                    ]
                },
                "15": {
                    "images": [
                        {
                            "filename": "ComfyUI_1712645867_.webp",
                            "subfolder": "",
                            "type": "output"
                        }
                    ],
                    "animated": [
                        true
                    ]
                },
                "19": {
                    "gifs": [
                        {
                            "filename": "comfyUI_00002.mp4",
                            "subfolder": "",
                            "type": "output",
                            "format": "video/h264-mp4"
                        }
                    ]
                }
            },
            "status": {
                "status_str": "success",
                "completed": true,
                "messages": ...omitted,
            }
        }
    }
    ```
    
    The `outputs` in this sample response provides the image, webp file, and mp4 video generated by the prompt. You can find these files by file name in the `output` directory of the mounted storage.
    

## Asynchronous invocation

**Important**

Asynchronous calls support only the api\_prompt path. The task\_id parameter is a key flag used to identify the request and result. You must assign a unique value to each request to match it with the corresponding result from the queue. The request path is as follows:

`{service_url}/api_prompt?task_id={a unique value must be assigned}`

1.  On the **Inference Service** tab, click the target service name to open the **Overview** page. In the **Basic Information** section, click **View Invocation Information**. In the **Invocation Information** dialog box, on the **Asynchronous Invocation** tab, you can view the service endpoint and token.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4005769471/p961894.png)
    
2.  Push a request.
    
    Sample code:
    
    ```
    import requests,io,base64
    from PIL import Image, PngImagePlugin
    import json
    
    service_url = "<EAS_ENDPOINT>"
    token = "<EAS_TOKEN>"
    
    if service_url[-1] == "/":
        service_url = service_url[:-1]
    
    session = requests.session()
    session.headers.update({"Authorization":token})
    
    # Request body, which is the content of the workflow JSON file. Use """ """ to define it as a multi-line string. Otherwise, you need to capitalize the first letter of the Boolean values (true and false) in the workflow JSON.
    payload = """{
        '3': 
        ...omitted
      }
      """
    payload = json.loads(payload)
    
    for i in range(5):
      # task_id is a key flag to identify the request and result. Assign a unique value to each request to correspond to the subsequent queue result.
      response = session.post(url=f'{service_url}/api_prompt?task_id=txt2img_{i}', json=payload)
      if response.status_code != 200:
        exit(f"send request error:{response.content}")
      else:
        print(f"send {i} success, index is {response.content}")
    ```
    
3.  Subscribe to results.
    
    1.  Run the following command to install the eas\_prediction SDK.
        
        ```
        pip install eas_prediction  --user
        ```
        
    2.  Run the following code to obtain the returned result.
        
        ```
        from eas_prediction import QueueClient
        from urllib.parse import urlparse, urlunparse
        
        service_url     = "<EAS_ENDPOINT>"
        token           = "<EAS_TOKEN>"
        
        def parse_service_url(service_url):
            parsed = urlparse(service_url)
            service_domain = f"{parsed.scheme}://{parsed.netloc}"
            path_parts = [p for p in parsed.path.strip('/').split('/') if p]
            service_name = path_parts[-1]
            return service_domain, service_name
        
        service_domain, service_name = parse_service_url(service_url)
        print(f"service_domain: {service_domain}, service_name: {service_name}.")
            
        sink_queue = QueueClient(service_domain, f'{service_name}/sink')
        sink_queue.set_token(token)
        sink_queue.init()
        
        watcher = sink_queue.watch(0, 5, auto_commit=False)
        for x in watcher.run():
            if 'task_id' in x.tags:
                print('index {} task_id is {}'.format(x.index, x.tags['task_id']))
            print(f'index {x.index} data is {x.data}')
            sink_queue.commit(x.index)
        ```
        
        Sample response:
        
        ```
        index 42 task_id is txt2img_0
        index 42 data is b'[{"type": "executed", "data": {"node": "9", "output": {"images": [{"filename": "ComfyUI_1712647318_8e7f3c93-d2a8-4377-92d5-8eb552adc172_.png", "subfolder": "", "type": "output"}]}, "prompt_id": "c3c983b6-f92b-4dd5-b4dc-442db4d1736f"}}, {"type": "executed", "data": {"node": "15", "output": {"images": [{"filename": "ComfyUI_1712647895_.webp", "subfolder": "", "type": "output"}], "animated": [true]}, "prompt_id": "c3c983b6-f92b-4dd5-b4dc-442db4d1736f"}}, {"type": "executed", "data": {"node": "19", "output": {"gifs": [{"filename": "comfyUI_00001.mp4", "subfolder": "", "type": "output", "format": "video/h264-mp4"}]}, "prompt_id": "c3c983b6-f92b-4dd5-b4dc-442db4d1736f"}}, {"9": {"images": [{"filename": "ComfyUI_1712647318_8e7f3c93-d2a8-4377-92d5-8eb552adc172_.png", "subfolder": "", "type": "output"}]}, "15": {"images": [{"filename": "ComfyUI_1712647895_.webp", "subfolder": "", "type": "output"}], "animated": [true]}, "19": {"gifs": [{"filename": "comfyUI_00001.mp4", "subfolder": "", "type": "output", "format": "video/h264-mp4"}]}}]'
        index 43 task_id is txt2img_1
        index 43 data is b'[{"9": {"images": [{"filename": "ComfyUI_1712647318_8e7f3c93-d2a8-4377-92d5-8eb552adc172_.png", "subfolder": "", "type": "output"}]}, "15": {"images": [{"filename": "ComfyUI_1712647895_.webp", "subfolder": "", "type": "output"}], "animated": [true]}, "19": {"gifs": [{"filename": "comfyUI_00001.mp4", "subfolder": "", "type": "output", "format": "video/h264-mp4"}]}}]'
        index 44 task_id is txt2img_2
        index 44 data is b'[{"9": {"images": [{"filename": "ComfyUI_1712647318_8e7f3c93-d2a8-4377-92d5-8eb552adc172_.png", "subfolder": "", "type": "output"}]}, "15": {"images": [{"filename": "ComfyUI_1712647895_.webp", "subfolder": "", "type": "output"}], "animated": [true]}, "19": {"gifs": [{"filename": "comfyUI_00001.mp4", "subfolder": "", "type": "output", "format": "video/h264-mp4"}]}}]'
        index 45 task_id is txt2img_3
        index 45 data is b'[{"9": {"images": [{"filename": "ComfyUI_1712647318_8e7f3c93-d2a8-4377-92d5-8eb552adc172_.png", "subfolder": "", "type": "output"}]}, "15": {"images": [{"filename": "ComfyUI_1712647895_.webp", "subfolder": "", "type": "output"}], "animated": [true]}, "19": {"gifs": [{"filename": "comfyUI_00001.mp4", "subfolder": "", "type": "output", "format": "video/h264-mp4"}]}}]'
        index 46 task_id is txt2img_4
        index 46 data is b'[{"9": {"images": [{"filename": "ComfyUI_1712647318_8e7f3c93-d2a8-4377-92d5-8eb552adc172_.png", "subfolder": "", "type": "output"}]}, "15": {"images": [{"filename": "ComfyUI_1712647895_.webp", "subfolder": "", "type": "output"}], "animated": [true]}, "19": {"gifs": [{"filename": "comfyUI_00001.mp4", "subfolder": "", "type": "output", "format": "video/h264-mp4"}]}}]'
        ```
        
        You can view the inference result files in the `output` directory of the mounted storage.
        
    

**Note**

The generated images or videos are stored in the mounted `output` directory. The API call result returns the file name and subdirectory name. For OSS, you must construct the full file path to download the file. For more information, see [Use Alibaba Cloud SDKs to download files from OSS](/help/en/oss/user-guide/simple-download-1#f37428702fpx5).

## **FAQ**

### **Models and nodes**

#### **1\. WebUI error: Missing model**

**Problem description**: The following error is reported:

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6835950671/p983796.png)

Solution: This check is not valid for ComfyUI deployed in PAI. The runtime error takes precedence. We recommend that you select the **Do not show this message again** check box or disable model validation in the settings.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6835950671/p992126.png)

#### **2\. I uploaded a new model, but I cannot find it**

First, check whether you are using the Serverless Edition, which does not support uploading your own models. Use the Standard or Cluster Edition instead. If you are using a supported version, perform the following steps:

1.  On the page, click PaiCustom and select Load New Model.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6835950671/p992088.png)
    
2.  If it still does not work, click Restart Process.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6835950671/p992092.png)
    

#### **3\. The model loader displays "undefined"**

First, ensure that the model directory is correct. The required directory depends on the model loader.

If the model file was updated after the service started, restart the service.

#### **4\. Cannot find a node**

-   For a newly installed node, you must restart the service.
    
-   If the node is not installed, see [Use third-party models and install custom nodes (ComfyUI plug-ins)](#63fe46f9d40ju).
    

#### **5\. ComfyUI Manager fails to download a model or install a node**

We recommend that you do not use ComfyUI Manager in an EAS deployment of ComfyUI. This is because network connectivity may fail when you download models directly from the internet or install plug-ins that require pulling code from platforms such as GitHub.

We recommend that you upload the model or node file to the storage mounted on the service. For more information, see [Use third-party models and install custom nodes (ComfyUI plug-ins)](#63fe46f9d40ju).

#### **6\. How do I view the list of available model files and nodes (ComfyUI plug-ins)?**

-   **Model files**: View them on the corresponding model loading node. For example, you can view the available model files in the drop-down list of the Checkpoint loader.
    
-   **Nodes**: To view the nodes from all installed ComfyUI plug-ins, right-click the WebUI page and click **Add Node** from the shortcut menu.
    

### **Images and dependencies**

#### **1\. How do I install a wheel package?**

1.  Ensure that the mount configuration is complete. The following example assumes that the OSS path **Uri** is oss://examplebucket/comfyui.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6835950671/p992249.png)
    
2.  Upload the wheel package to `oss://examplebucket/comfyui/models/whl` in the mounted OSS. If the `whl` folder does not exist, create it.
    
3.  In this example, the **OSS mount path is /mnt/data**. Add the command `**pip install /mnt/data/models/whl/xxx.whl**` before the run command. In this command, **/mnt/data** is your OSS mount path and **xxx.whl** is the name of your wheel package.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6835950671/p992257.png)
    

#### **2\. How do I update the image version and keep installed custom models?**

You cannot update ComfyUI images for the Serverless version. However, for other versions with mounted OSS or NAS storage, your custom models are retained. This lets you update the **Official Image** in the service configuration without affecting your custom models. To do so, perform the following steps:

1.  On the service details page, click Update in the upper-right corner.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6835950671/p992219.png)
    
2.  If the service was deployed using the scenario-based method, switch to custom deployment. On the right, click Service Configuration, edit the JSON file, and update the image field of containers. For example, change 1.9 in pai-eas/comfyui:1.9 to the required version.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6835950671/p992243.png)
    
3.  In the editing window, click **Direct Update**.
    

#### **3\. Missing dependency libraries in the image**

Install the missing dependencies by configuring third-party libraries. The steps are as follows:

1.  On the service details page, click Update in the upper-right corner.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6835950671/p992219.png)
    
2.  If the service was deployed using the scenario-based method, switch to custom deployment. On the right, click Environment Context. In the More Configurations section, find the third-party library configuration and enter the required dependencies in the specified format.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6835950671/p992223.png)
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6835950671/p992227.png)
    
3.  Click the Update button at the bottom of the page to complete the service update.
    

### **Runtime exceptions**

#### **1\. The page freezes or takes too long to refresh**

-   Refresh the page, clear the browser cache, or use your browser's incognito or privacy mode to access the page.
    
-   If storage is mounted, clear the files in the input, output, and temp folders in the mount directory.
    
-   Try to restart the service.
    

#### **2\. The workflow runs halfway and the process restarts**

If the instance log contains `run.sh: line 54: 531285 Killed python -u main_run.py "$@"`, it indicates an out-of-memory (OOM) error. After an OOM error occurs, the process automatically restarts.

#### **3\. RuntimeError: CUDA error: out of memory**

This error indicates that the video memory was exceeded. If you are using an image model, reduce the image resolution or batch size. If you are using a video model, reduce the frame rate or resolution.

#### **4\. API call error: "url not found" or "404 page not found"?**

1.  Check whether the deployed service is the Serverless Edition. The Serverless Edition does not support API calls.
    
2.  If the service version is correct, verify that the API destination URL is complete. For synchronous calls, you must append the `/prompt` path.
    

#### **5\. The service is always in the "Waiting" state or ComfyUI cannot generate images**

This issue is usually caused by insufficient resource specifications. Check whether the service image and resource specifications are configured correctly. We recommend using the GU30, A10, or T4 GPU types. The **ml.gu7i.c16m60.1-gu30** instance type is a cost-effective option.

#### **6\. Why does the service stop automatically after running for a period of time?**

If a model service in the Serverless Edition does not receive requests or computing tasks for an extended period, the system may automatically release its resources to reduce costs.

### **Others**

#### **1\. How do I extend the validity period of a logon-free URL?**

You can use an API to obtain a logon-free web access link with a specified validity period.

1.  Click the [DescribeServiceSignedUrl API](https://api.aliyun.com/api/eas/2021-07-01/DescribeServiceSignedUrl?spm=a2c4g.11186623.0.0.70de48fbHSClXK&sdkStyle=old&RegionId=cn-hangzhou) link to go to the API page.
    
2.  Select the service region.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6835950671/p992178.png)

3.  Enter the region where the service is located and the service name. You can obtain this information from the EAS service overview page.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6835950671/p992198.png)
    
4.  Other parameters are as follows:
    
    -   **Type page type**: Select webview from the drop-down list.
        
    -   **Expire time**: To set a long validity period, enter 9007199254740991. The current maximum validity period is 12 hours.
        
        Otherwise, enter an integer value in seconds.
        
    -   **Internal whether it is a VPC link**: If this is not a VPC call, select false. Otherwise, select true.
        
5.  Click Initiate Call. The SignedUrl in the response is the logon-free web access link for the service.
    

#### **2\. Acceleration effect of xFormers on image generation speed**

xFormers is an open-source acceleration tool based on Transformer that can significantly shorten image and video generation time and reduce video memory usage. By default, xFormers acceleration is enabled for ComfyUI image deployments. The acceleration effect depends on the size of the workflow. The improvement is more significant for GPU-intensive calls, especially those that use NVIDIA graphics cards.

#### **3\. Main differences between EAS and Function Compute in deploying the ComfyUI Serverless Edition**

-   **EAS**: Suitable for stateful and long-running services. It supports one-click deployment of models as online inference services or AI-Web applications and includes features such as elastic scaling and blue-green deployment. For example, you can deploy ComfyUI using scenario-based model deployment or custom model deployment in EAS.
    
-   **Function Compute**: Based on a serverless architecture, it provides advantages such as pay-as-you-go billing and elastic scaling. It is suitable for scenarios that require high-quality image generation. You can customize ComfyUI models and install plug-ins. For example, you can create an application, select a ComfyUI template, and set configuration items in the Function Compute 3.0 console.
    

#### **4\. How do I switch the default language of the WebUI page?**

1.  On the WebUI page, click the settings button ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9938402571/p813890.png) in the lower-left corner.
    
2.  In the **Settings** dialog box, set the language in the following two locations. After you set the parameters, refresh the page.
    
    -   In the navigation pane on the left, select **Comfy**. In the region settings on the right, select the destination language.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9938402571/p966455.png)
        
    -   In the navigation pane on the left, select **Language**. In the **Locale** section on the right, select the destination language.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9938402571/p966456.png)
        

## **Appendix**

### **Introduction to the working principle of the Cluster Edition service**

The following figure shows the implementation principle:

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9084206671/CAEQUBiBgMC_nKyw2BkiIGExNjdkN2Q2ZmYwYjQ5NzVhM2Y3Mzc1ODRlYzNlOTA34371369_20240417162328.856.svg)

-   The Cluster Edition service is designed for multi-user scenarios. It decouples the client from backend inference instances, which allows multiple users to share backend inference instances. This improves instance utilization and reduces inference costs.
    
-   Each user has an independent backend environment and working directory, which enables efficient GPU sharing and file management.
    
-   The proxy manages client processes and inference instances. All user operations are processed in their own processes, and file operations are limited to public and personal directories. This effectively isolates the working directories between users. When a user needs to process a request, the proxy finds an available idle instance from the backend to process the inference request.
