This topic describes how to use an Artificial Intelligence (AI) container image provided by Alibaba Cloud AI Containers (AC2) to deploy the Qwen-7B-Chat model on an Elastic Compute Service (ECS) instance that uses Intel processors to create a chatbot.

## Step 1: Create an ECS instance

1.  Go to the [instance buy page](https://ecs-buy.alibabacloud.com/wizard/?spm=a2c4g.87190.0.0.7d442c5f1Z8Fw7#/) in the ECS console.
    
2.  Configure parameters as prompted to create an ECS instance.
    
    Take note of the following parameters. For information about how to configure other parameters on the ECS instance buy page, see [Create an instance on the Custom Launch tab](/help/en/ecs/user-guide/create-an-instance-by-using-the-wizard).
    
    -   **Instance**: The Qwen-7B-Chat model requires approximately 30 GiB of memory. To ensure that the model stably runs, select ecs.g8i.4xlarge or another instance type that has 64 GiB of memory or more.
        
    -   **Image**: Select an Alibaba Cloud Linux 3.2104 LTS 64-bit image.
        
    -   **Public IP Address**: To accelerate the model download process, select **Assign Public IPv4 Address**, set Bandwidth Billing Method to **Pay-by-traffic**, and then set Maximum Bandwidth to **100** Mbit/s.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6207180171/p766960.png)
        
    -   **Data Disk**: Multiple model files for Qwen-7B-Chat need to be downloaded and occupy a large volume of storage space. To ensure that the model runs as expected, we recommend that you add a 100-GiB data disk.
        

## Step 2: Create a Docker runtime environment

1.  Install Docker.
    
    For information about how to install Docker on an ECS instance that runs Alibaba Cloud Linux 3, see [Install and use Docker on a Linux instance](/help/en/ecs/user-guide/install-and-use-docker).
    
2.  Run the following command to verify that the Docker daemon is started:
    
    ```
    sudo systemctl status docker
    ```
    
3.  Run the following commands to create and run a PyTorch AI container.
    
    AC2 provides a wide array of container images for AI scenarios, including the PyTorch images that are optimized for Intel hardware and software and can be used to quickly create a PyTorch runtime environment.
    
    ```
    sudo docker pull ac2-registry.cn-hangzhou.cr.aliyuncs.com/ac2/pytorch:2.0.1-3.2304
    sudo docker run -itd --name pytorch --net host -v $HOME/workspace:/workspace \
      ac2-registry.cn-hangzhou.cr.aliyuncs.com/ac2/pytorch:2.0.1-3.2304
    ```
    

## Step 3: Deploy Qwen-7B-Chat

1.  Run the following command to enter the container environment:
    
    ```
    sudo docker exec -it -w /workspace pytorch /bin/bash
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
        
    2.  Run the following commands to download the source code and pretrained models of the Qwen-7B project:
        
        ```
        git clone https://github.com/QwenLM/Qwen.git
        git clone https://www.modelscope.cn/qwen/Qwen-7B-Chat.git qwen-7b-chat --depth=1
        ```
        
    3.  Run the following command to view the current working directory:
        
        ```
        ls -l
        ```
        
5.  Run the following command to deploy a runtime environment.
    
    A large number of Python AI dependencies are integrated into AC2. You can use `Yellowdog Updater Modified (YUM)` or `Dandified YUM (DNF)` to install Python runtime dependencies.
    
    ```
    yum install -y python3-{transformers{,-stream-generator},tiktoken,accelerate} python-einops
    ```
    
6.  Chat with the chatbot.
    
    1.  Run the following commands to modify the model load parameters.
        
        A sample terminal script is provided in the project source code, which allows you to run the Qwen-7B-Chat model to chat with the chatbot on premises. Before you run the script, modify the model load parameters to load the models with BFloat16 precision and accelerate the loading process by using the AVX-512 instruction set for CPUs.
        
        ```
        cd /workspace/Qwen
        grep "torch.bfloat16" cli_demo.py 2>&1 >/dev/null || sed -i "57i\torch_dtype=torch.bfloat16," cli_demo.py
        ```
        
    2.  Run the following commands to start the chatbot:
        
        ```
        cd /workspace/Qwen
        python3 cli_demo.py -c ../qwen-7b-chat --cpu-only
        ```
        
        After the deployment process is complete, you can enter text in the `User>` prompt to chat with the Qwen-7B-Chat model in real time.
        
        ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6207180171/p766098.png)
        
        **Note**
        
        You can run the `:exit` command to exit the chatbot.
