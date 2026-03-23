This topic describes how to use an Artificial Intelligence (AI) container image provided by Alibaba Cloud AI Containers (AC2) to deploy the ChatGLM3-6B model on an Elastic Compute Service (ECS) instance that uses AMD processors to create a chatbot.

## **Background information**

ChatGLM3 is the latest generation of open source models in the ChatGLM series. ChatGLM3-6B inherits features such as smooth dialog capabilities and easy deployment from its predecessors and introduces a stronger base model, a more extensive functionality, and a broader open source series. For more information, see [ChatGLM3-6B](https://www.modelscope.cn/models/ZhipuAI/chatglm3-6b/summary).

## Step 1: Create an ECS instance

1.  Go to the [instance buy page](https://ecs-buy.alibabacloud.com/wizard/?spm=a2c4g.87190.0.0.7d442c5f1Z8Fw7#/) in the Elastic Compute Service (ECS) console.
    
2.  Configure parameters as prompted to create an ECS instance.
    
    Take note of the following parameters. For information about how to configure other parameters on the ECS instance buy page, see [Create an instance on the Custom Launch tab](/help/en/ecs/user-guide/create-an-instance-by-using-the-wizard).
    
    -   **Instance**: The ChatGLM3-6B model requires approximately 30 GiB of memory. To ensure that the model stably runs, select ecs.g8a.4xlarge or another instance type that has 64 GiB of memory or more.
        
    -   **Image**: Select an Alibaba Cloud Linux 3.2104 LTS 64-bit image.
        
    -   **Public IP Address**: To accelerate the model download process, select **Assign Public IPv4 Address**, set Bandwidth Billing Method to **Pay-by-traffic**, and then set Maximum Bandwidth to **100** Mbit/s.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5096180171/p766984.png)
        
    -   **Data Disk**: Multiple model files for ChatGLM3-6B need to be downloaded and occupy a large volume of storage space. To ensure that the model runs as expected, we recommend that you add a 100-GiB data disk.
        

## Step 2: Create a Docker runtime environment

1.  Install Docker.
    
    For information about how to install Docker on an ECS instance that runs Alibaba Cloud Linux 3, see [Install and use Docker on a Linux instance](/help/en/ecs/user-guide/install-and-use-docker).
    
2.  Run the following command to verify that the Docker daemon is started:
    
    ```
    sudo systemctl status docker
    ```
    
3.  Run the following commands to create and run a PyTorch AI container.
    
    AC2 provides a wide array of container images for AI scenarios, including the PyTorch images that are optimized for AMD hardware and software and can be used to quickly create a PyTorch runtime environment.
    
    ```
    sudo docker pull ac2-registry.cn-hangzhou.cr.aliyuncs.com/ac2/pytorch-amd:1.13.1-3.2304-zendnn4.1
    sudo docker run -itd --name pytorch-amd --net host -v $HOME/workspace:/workspace \
      ac2-registry.cn-hangzhou.cr.aliyuncs.com/ac2/pytorch-amd:1.13.1-3.2304-zendnn4.1
    ```
    

## Step 3: Deploy ChatGLM3-6B

1.  Run the following command to enter the container environment:
    
    ```
    sudo docker exec -it -w /workspace pytorch-amd /bin/bash
    ```
    
    You must use the container environment to run subsequent commands. If you unexpectedly exit, re-enter the container environment by using the preceding command. You can run the `cat /proc/1/cgroup | grep docker` command to check whether the current environment is a container. If a command output is returned, the environment is a container.
    
2.  Run the following command to install and configure required software:
    
    ```
    yum install -y tmux git git-lfs wget
    ```
    
3.  Run the following command to enable Git Large File Storage (LFS).
    
    To download pretrained models, you must enable Git LFS.
    
    ```
    git lfs install
    ```
    
4.  Download the source code and models.
    
    1.  Run the following command to create a tmux session:
        
        ```
        tmux
        ```
        
        **Note**
        
        An extended period of time is required to download the pretrained models, and the download success rate varies based on network conditions. To maintain the connection to the ECS instance and the continuity of the model download process, we recommend that you download the models in a tmux session.
        
    2.  Run the following commands to download the source code and pretrained models of the ChatGLM3-6B project:
        
        ```
        git clone https://github.com/THUDM/ChatGLM3.git
        git clone https://www.modelscope.cn/ZhipuAI/chatglm3-6b.git --depth=1
        ```
        
    3.  Run the following command to view the current working directory:
        
        ```
        ls -l
        ```
        
        After the download process is complete, the current directory is displayed as shown in the following figure.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5096180171/p767212.png)
        
5.  Run the following command to deploy a runtime environment.
    
    A large number of Python AI dependencies are integrated into AC2. You can use `Yellowdog Updater Modified (YUM)` or `Dandified YUM (DNF)` to install Python runtime dependencies.
    
    ```
    yum install -y python3-{transformers,sentencepiece,protobuf,accelerate}
    ```
    
6.  Chat with the chatbot.
    
    1.  Run the following commands to modify the model load parameters.
        
        A sample terminal script is provided in the project source code, which allows you to run the ChatGLM3-6B model to chat with the chatbot on premises. Before you run the script, modify the model load parameters to load the models with BFloat16 precision and accelerate the loading process by using the AVX-512 instruction set for CPUs.
        
        ```
        cd /workspace/ChatGLM3/basic_demo
        grep "import torch" cli_demo.py 2>&1 >/dev/null || sed -i "3i\import torch" cli_demo.py
        sed -i 's/"auto")/"auto", torch_dtype=torch.bfloat16)/g' cli_demo.py
        ```
        
    2.  Run the following commands to start the chatbot:
        
        ```
        export MODEL_PATH="/workspace/chatglm3-6b"
        python3 cli_demo.py
        ```
        
        After the deployment process is complete, you can enter text in the `User:` prompt to chat with the ChatGLM3-6B model in real time.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7192535271/p844159.png)
        
        **Note**
        
        You can run the `stop` command to exit the chatbot.
