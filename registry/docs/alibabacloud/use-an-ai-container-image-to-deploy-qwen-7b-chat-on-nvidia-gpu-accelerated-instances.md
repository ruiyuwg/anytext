This topic describes how to use an Artificial Intelligence (AI) container image provided by Alibaba Cloud AI Containers (AC2) to deploy Qwen-7B-Chat on an Elastic Compute Service (ECS) instance that uses NVIDIA GPUs to create a chatbot.

## Step 1: Create an ECS instance

1.  Go to the [instance buy page](https://ecs-buy.alibabacloud.com/wizard/?spm=a2c4g.87190.0.0.7d442c5f1Z8Fw7#/) in the ECS console.
    
2.  Configure parameters as prompted to create an ECS instance.
    
    Take note of the following parameters. For information about how to configure other parameters on the ECS instance buy page, see [Create an instance on the Custom Launch tab](/help/en/ecs/user-guide/create-an-instance-by-using-the-wizard).
    
    -   **Instance**: Qwen-7B-Chat requires more than 16 GiB of GPU memory. To ensure the stability of the model, you must select at least the ecs.gn6i-c4g1.xlarge instance type.
        
    -   **Image**: Select an Alibaba Cloud Linux 3.2104 LTS 64-bit image.
        
    -   **Public IP Address**: To accelerate the model download process, select **Assign Public IPv4 Address**, set Bandwidth Billing Method to **Pay-by-traffic**, and then set Maximum Bandwidth to **100** Mbit/s.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6207180171/p766960.png)
        
    -   **Data Disk**: Multiple model files for Qwen-7B-Chat need to be downloaded, and they occupy a large amount of storage space. To ensure that the model runs as expected, we recommend that you add a data disk of at least 100 GiB.
        

## Step 2: Create a Docker runtime environment

1.  Install Docker.
    
    For information about how to install Docker on an ECS instance that runs Alibaba Cloud Linux 3, see [Install and use Docker on a Linux instance](/help/en/ecs/user-guide/install-and-use-docker).
    
2.  Run the following command to check that the Docker daemon is started:
    
    ```
    sudo systemctl status docker
    ```
    
3.  Run the following command to install the NVIDIA driver and Compute Unified Device Architecture (CUDA) component.
    
    ```
    sudo dnf install -y anolis-epao-release
    sudo dnf install -y kernel-devel-$(uname -r) nvidia-driver{,-cuda}
    ```
    
4.  Run the following command to install the NVIDIA Container Toolkit:
    
    ```
    sudo dnf install -y nvidia-container-toolkit
    ```
    
5.  Run the following command to restart the Docker daemon. When the NVIDIA Container Toolkit is installed, the Oracle Cloud Infrastructure (OCI) prestart hook is added. During the Docker daemon restart, the GPUs become accessible to the container by using the OCI prestart hook.
    
    ```
    sudo systemctl restart docker
    ```
    
    After the Docker daemon is restarted, the GPU pass-through capability is enabled for Docker. When you create a container, configure the `--gpus <gpu-request>` parameter to specify the GPUs to pass through.
    
6.  Run the following commands to create and run a PyTorch AI container.
    
    AC2 provides a variety of AI container images. You can use the images to quickly create a PyTorch runtime environment.
    
    ```
    sudo docker pull ac2-registry.cn-hangzhou.cr.aliyuncs.com/ac2/pytorch:2.2.0.1-3.2304-cu121
    sudo docker run -itd --name pytorch --gpus all --net host -v $HOME/workspace:/workspace \
      ac2-registry.cn-hangzhou.cr.aliyuncs.com/ac2/pytorch:2.2.0.1-3.2304-cu121
    ```
    
    When the preceding commands are run, the system pulls a container image, uses the image to create a container named `pytorch` that runs in detached mode, and maps the home directory to the container to preserve the code.
    

## Step 3: Deploy Qwen-7B-Chat

1.  Run the following command to enter the container environment:
    
    ```
    sudo docker exec -it -w /workspace pytorch /bin/bash
    ```
    
    You must use the container environment to run subsequent commands. If you exit unexpectedly, re-enter the container environment. You can run the `cat /proc/1/cgroup | grep docker` command to check whether the current environment is a container. If a command output is returned, the environment is a container.
    
2.  Run the following command to install and configure the required software:
    
    ```
    yum install -y git git-lfs wget tmux
    ```
    
3.  Run the following command to enable Git Large File Storage (LFS).
    
    Downloading pretrained models requires support for Git LFS.
    
    ```
    git lfs install
    ```
    
4.  Download the source code and models.
    
    1.  Create a tmux session.
        
        ```
        tmux
        ```
        
        Note: It takes a long time to download the pretrained models. We recommend that you download the models in a tmux session. After the instance is disconnected, connect to the instance and run the `tmux attach` command to resume the session.
        
    2.  Run the following commands to download the source code and pretrained models of the Qwen-7B-Chat project:
        
        ```
        git clone https://github.com/QwenLM/Qwen.git
        git clone https://www.modelscope.cn/qwen/Qwen-7B-Chat.git qwen-7b-chat --depth=1
        ```
        
5.  Run the following command to deploy a runtime environment.
    
    A large number of Python AI dependencies are integrated into AC2. You can use `YUM` or `Dandified YUM (DNF)` to install Python runtime dependencies.
    
    ```
    dnf install -y python-einops \
        python3-datasets \
        python3-gradio \
        python3-mdtex2html \
        python3-protobuf \
        python3-psutil \
        python3-pyyaml \
        python3-rich \
        python3-scikit-learn \
        python3-scipy \
        python3-sentencepiece \
        python3-tensorboard \
        python3-tiktoken \
        python3-transformers \
        python3-transformers-stream-generator \
        yum-utils
    ```
    
    You must manually download and install specific dependencies to prevent the components in the AC2 image from being overwritten during installation.
    
    ```
    yumdownloader --destdir ./rpmpkgs python3-timm python3-accelerate
    rpm -ivh --nodeps rpmpkgs/*.rpm && rm -rf rpmpkgs
    ```
    
6.  Chat with the chatbot.
    
    1.  Run the following commands to start the chatbot:
        
        ```
        cd /workspace/Qwen
        python3 cli_demo.py -c ../qwen-7b-chat
        ```
        
        After the deployment is complete, you can enter text at the `User:` prompt to chat with the Qwen-7B-Chat model in real time.
        
        ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6207180171/p766098.png)
        
        **Note**
        
        To exit the chatbot, run the `:exit` command.
