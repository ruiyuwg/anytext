To protect AI model assets and sensitive data, such as financial or medical records, you can use Alibaba Cloud TDX confidential computing instances. These instances use remote attestation to obtain a decryption key. You can then deploy the Qwen model securely. This process provides hardware-level data protection during AI inference to secure your core assets.

## **Use cases**

-   **Compliant AI for finance and healthcare**: When you process text that contains personally identifiable information or protected health information, you can use confidential computing to ensure that data is not exposed during inference. This helps you meet compliance requirements.
    
-   **Private enterprise knowledge bases**: An enterprise wants to enhance a large language model with internal, sensitive documents, such as financial reports or R&D materials. However, it does not want this core data exposed as plaintext in the cloud. This solution ensures that both the knowledge base data and the fine-tuned model are protected by hardware.
    
-   **Protecting commercial model assets**: For an AI service provider (SP), its carefully trained proprietary models are core commercial assets. This solution can prevent models from being illegally copied or stolen in the cloud.
    

## **Solution overview**

### **Introduction to the Confidential AI solution**

Confidential AI is an Alibaba Cloud solution that lets you securely run AI tasks in an untrusted cloud environment. It uses confidential computing hardware, such as Intel TDX, to create a "hardware safe box" (a confidential environment) for your AI models and sensitive data. This provides end-to-end security and privacy protection.

### **Core components explained**

-   **Trustee**: Think of this as a **"key safe box"**. Its main job is to securely store and manage the keys used to decrypt AI models. Only trusted requests that pass a strict remote attestation can obtain a key from Trustee.
    
-   **Trustiflux**: Think of this as a **"trusted gatekeeper in the cloud"**. It is deployed inside the TDX instance. Its core task is to use the **remote attestation** process to prove to **Trustee** that the current runtime is a genuine, untampered TDX confidential environment. Only after proving its integrity can **Trustiflux** obtain the key from **Trustee**.
    

### **Overall flow**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9220926571/p1001451.png)

1.  **In your trusted environment**: Download the original AI model, encrypt the model, and then store the key in **Trustee**.
    
2.  **In the confidential computing environment (TDX instance)**:
    
    1.  **Trustiflux** in the TDX instance initiates remote attestation. **Trustee** verifies the attestation. After successful verification, **Trustee** sends the key to **Trustiflux**.
        
    2.  **Trustiflux** retrieves the encrypted model and uses the received key to decrypt it.
        
    3.  Load the decrypted model and start the AI inference service in the confidential environment.
        

## **Preparations**

-   **Prepare ECS resources**: [Create a TDX confidential computing instance](/help/en/ecs/user-guide/build-a-tdx-confidential-computing-environment#d41e20) with the following key configurations:
    
    -   **Region and Zone: China (Beijing) Zone I**.
        
    -   **Instance Type**: The Qwen-7B-Chat model requires about 30 GiB of memory to run. For stability, select `ecs.g8i.4xlarge` (16 vCPU, 64 GiB memory) or a higher instance type.
        
    -   **Image**: Select `Alibaba Cloud Linux 3.2104 LTS 64-bit` and select the **Confidential VM** option.
        
    -   **Public IP address**: Select **Assign Public IPv4 Address**. For bandwidth, select **Pay-By-Traffic** and set the peak bandwidth to 100 Mbps to speed up model downloads.
        
    -   **Data Disk**: The model and related files require a large amount of space. The system disk must be at least `100 GiB`.
        

-   **Configure the security group:** Configure the security group to allow inbound traffic on the following ports. For more information, see [Manage security group rules](/help/en/ecs/user-guide/manage-security-group-rules).
    
    -   `22`: For Secure Shell (SSH) remote logon.
        
    -   `9090`: For the temporary HTTP service to retrieve the encrypted model from the cloud in a later step.
        
    -   `7860`: To access the final deployed Qwen Web UI or API service.
        
    -   `50005`: (Optional) For Trusted Network Gateway (TNG) to ensure the channel security of inference prompts and responses.
        

## **Step 1: Prepare the encrypted model and key in a trusted environment**

First, download and encrypt the model, and then configure Trustee to store the key. For this demo, the following steps are performed on the same TDX instance. In a real deployment, you must run these steps in your local environment or another trusted environment.

1.  **Install basic tools**
    
    [Log on to the instance as the root user](/help/en/ecs/user-guide/connect-to-a-linux-instance-by-using-a-password-or-key#caa6e215a8ad7) and install Trustee, gocryptfs, and other dependencies.
    
    ```
    yum install -y trustee gocryptfs tmux git git-lfs wget && git lfs install
    
    # Start the trustee service
    systemctl start trustee
    ```
    

2.  **Download the** `**Qwen-7B-Chat**` **model**
    
    The model files are large, and the download takes a long time (about 15 to 20 minutes). Run the download in a `tmux` session to prevent the SSH connection from disconnecting and interrupting the download.
    
    ```
    # Create a working directory
    mkdir -p /cai/trustee && cd /cai/trustee
    
    # Create and enter a tmux session named qwen_clone
    # Note: Using tmux prevents the download from being interrupted by network issues or a closed SSH client.
    tmux new-session -d -s qwen_clone "git clone https://www.modelscope.cn/qwen/Qwen-7B-Chat.git qwen-7b-chat --depth=1"
    
    # Monitor the download progress
    # Note: After the download is complete, the process will exit and show [exited].
    tmux attach -t qwen_clone
    ```
    

3.  **Model file encryption**
    
    Use the `gocryptfs` tool to create an encrypted directory. Then, move the model files into the directory to automatically encrypt them.
    
    ```
    # Prepare directories for the encrypted data (cipher) and the plaintext mount target (plain)
    mkdir -p /cai/trustee/mount/{cipher,plain}
    
    # Create a password file for encryption. In a production environment, use a more secure, random password.
    printf '123456' > /cai/trustee/sample_password
    
    # Use the password file to initialize the gocryptfs encrypted directory
    cat /cai/trustee/sample_password | gocryptfs -init /cai/trustee/mount/cipher
    
    # Mount the encrypted directory to the plaintext mount target as a background process
    (cat /cai/trustee/sample_password | gocryptfs /cai/trustee/mount/cipher /cai/trustee/mount/plain &) && sleep 2
    
    # Move the model files to the plaintext mount target. gocryptfs automatically handles encryption and writes the encrypted data to the cipher directory. This process takes about 5 minutes because the files are large.
    mv /cai/trustee/qwen-7b-chat/ /cai/trustee/mount/plain
    
    # After the operation is complete, unmount the plaintext mount target
    fusermount -u /cai/trustee/mount/plain
    ```
    
    **Expected result**
    
    After you run the commands, run `ls /cai/trustee/mount/cipher`. You should see several encrypted file names instead of `qwen-7b-chat`. Then, run `ls /cai/trustee` to confirm that the `qwen-7b-chat` directory no longer exists.
    

4.  **Save the key to Trustee**
    
    Securely store the password file from the previous step in the `Trustee` key repository.
    
    ```
    mkdir -p /opt/trustee/kbs/repository/cai/sample/
    mv /cai/trustee/sample_password /opt/trustee/kbs/repository/cai/sample/password
    ```
    

5.  **Start the local HTTP service**
    
    Start a temporary web server to provide the encrypted model files to the cloud environment.
    
    ```
    # This command starts a service listening on 127.0.0.1:9090. Keep this terminal window running.
    cd /cai/trustee/mount/cipher && python3 -m http.server 9090 --bind 127.0.0.1
    ```
    

## **Step 2: Decrypt and mount the model in the confidential cloud environment**

**Important**

-   Perform the operations in this section in a **second SSH terminal window**.
    
-   Before you begin, ensure the service started with the `python3 -m http.server` command in [Step 1](#09be43af9dxkx) is still running in the first terminal window. Otherwise, the `wget` command in this section will fail because it cannot find the download source.
    

1.  **Install Trustiflux**
    
    In the second terminal window, install the attestation agent (**attestation-agent**), the confidential data hub (**confidential-data-hub**), and related environment dependencies.
    
    ```
    yum install -y attestation-agent confidential-data-hub gocryptfs wget
    ```
    

2.  **Perform remote attestation and obtain the key**
    
    The following commands configure and start the attestation service. The service communicates with the local Trustee (at 127.0.0.1 on the same machine in this example). After successful verification, the service retrieves and saves the model key.
    
    > The security of the key transfer is guaranteed by the [KBS Attestation Protocol](https://github.com/openanolis/trustee/blob/main/kbs/docs/kbs_attestation_protocol.md), a Trusted Execution Environment (TEE)-based application layer encryption protocol between Trustiflux and Trustee.
    
    ```
    # Configure attestation-agent and confidential-data-hub to communicate with the local Trustee
    sed -i "/^\[token_configs\.kbs\]$/,/^$/ s|^url = .*|url = \"http://127.0.0.1:8080\"|" \
      /etc/trustiflux/attestation-agent.toml
    sed -i "/^\[token_configs\.coco_as\]$/,/^$/ s|^url = .*|url = \"http://127.0.0.1:50004\"|" \
      /etc/trustiflux/attestation-agent.toml
    sed -i 's|\(url\s*=\s*"\)[^"]*|\1http://127.0.0.1:8080|' \
      /etc/trustiflux/confidential-data-hub.toml
    
    # Start the attestation agent, then request the key resource
    attestation-agent -c /etc/trustiflux/attestation-agent.toml > /dev/null 2>&1 & PID=$! && sleep 1
    password=$(confidential-data-hub \
      -c /etc/trustiflux/confidential-data-hub.toml \
      get-resource \
      --resource-uri kbs:///cai/sample/password)
    mkdir -p /cai/trustiflux && echo "$password" | base64 -d > "/cai/trustiflux/sample_password"
    ```
    
    **Expected result**
    
    After the commands run successfully, you can find the password file with the content `123456` at the `/cai/trustiflux/sample_password` path.
    
    > If the file is not found, verify that the **local HTTP service** from [Step 1](#09be43af9dxkx)
    

3.  **Retrieve and decrypt the model**
    
    ```
    # Use wget to recursively download the encrypted model files exposed in Step 1.5
    wget -c --tries=30 --timeout=30 --waitretry=15 \
      -r -np -nH --cut-dirs=0 -R "index.html*" \
      --progress=dot:giga --show-progress \
      -P /cai/trustiflux/mount/cipher \
      http://127.0.0.1:9090
    
    
    # Create a plaintext mount target
    mkdir -p /cai/trustiflux/mount/plain
    
    # Use the key obtained through remote attestation to mount the downloaded encrypted model directory to the plaintext mount target
    gocryptfs -debug -passfile /cai/trustiflux/sample_password /cai/trustiflux/mount/cipher /cai/trustiflux/mount/plain
    ```
    
    **Expected result**
    
    After the command runs, the terminal outputs `Filesystem mounted and ready`. Run `ls /cai/trustiflux/mount/plain`. You can see the decrypted `qwen-7b-chat` directory.
    
    > If `wget` returns a "Connection refused" error when downloading the encrypted model, verify that the **local HTTP service** from [Step 1](#09be43af9dxkx)
    

## **Step 3: Start and access the Qwen inference service**

**Note**

Perform the operations in this section in a **third SSH terminal window**.

1.  **Prepare the Python environment and dependencies**
    
    In the third terminal window, use Conda to create and activate a new Python environment.
    
    ```
    # Download and install Miniconda
    wget https://repo.anaconda.com/miniconda/Miniconda3-py39_23.11.0-2-Linux-x86_64.sh
    bash Miniconda3-py39_23.11.0-2-Linux-x86_64.sh -b -p $HOME/miniconda
    
    # Activate the Conda environment
    source $HOME/miniconda/bin/activate
    
    # Create and activate a dedicated Python 3.10 environment
    conda create -n pytorch_env python=3.10 -y
    conda activate pytorch_env
    ```
    
    **Expected result**
    
    The text `(pytorch_env)` appears before the terminal prompt.
    

2.  **Start the service using one of the following methods**
    
    -   To call the model programmatically through an API, choose **Start the OpenAI-compatible API service**.
        
    -   To interact with the model through a graphical interface, choose **Start the Web UI service**.
        
    -   To chat with the model directly in the server terminal, choose **Start the command-line interactive chat**.
        
    
    ## Start the OpenAI-compatible API service
    
    ```
    # Activate the dedicated Python 3.10 environment
    source $HOME/miniconda/bin/activate
    conda activate pytorch_env
    
    cd /cai/trustiflux
    git clone https://github.com/QwenLM/Qwen.git
    cd Qwen
    pip3 install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cpu
    pip3 install -r requirements.txt && pip3 install fastapi uvicorn "openai<1.0" pydantic sse_starlette
    python openai_api.py -c ../mount/plain/qwen-7b-chat --cpu-only --server-name 0.0.0.0 --server-port 7860
    ```
    
    **How to access**: On any terminal that can access the public IP address of the ECS instance, use the `curl` command to make a call.
    
    > This topic uses a local terminal as an example.
    
    ```
    curl -X POST http://<Public IP address of the TDX instance>:7860/v1/chat/completions \
    -H "Content-Type: application/json" \
    -d '{
        "model": "Qwen",
        "messages": [
            {
                "role": "system",
                "content": "You are a helpful assistant."
            },
            {
                "role": "user", 
                "content": "Who are you?"
            }
        ]
    }'
    ```
    
    The output is shown in the following figure.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9220926571/p1001188.png)
    
    ## Start the Web UI service
    
    ```
    # Activate the dedicated Python 3.10 environment
    source $HOME/miniconda/bin/activate
    conda activate pytorch_env
    
    cd /cai/trustiflux
    git clone https://github.com/QwenLM/Qwen.git
    cd Qwen
    pip3 install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cpu
    pip3 install -r requirements.txt && pip3 install -r requirements_web_demo.txt
    python3 web_demo.py -c ../mount/plain/qwen-7b-chat --cpu-only --server-name 0.0.0.0 --server-port 7860
    ```
    
    **How to access**: In your local browser's address bar, enter `http://<Public IP address of the ECS instance>:7860`.
    
    ## Start the command-line interactive chat
    
    ```
    # Activate the dedicated Python 3.10 environment
    source $HOME/miniconda/bin/activate
    conda activate pytorch_env
    
    cd /cai/trustiflux
    git clone https://github.com/QwenLM/Qwen.git
    cd Qwen
    pip3 install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cpu
    pip3 install -r requirements.txt
    python3 cli_demo.py -c ../mount/plain/qwen-7b-chat --cpu-only
    ```
    
    **How to access**: After startup, enter your question directly at the `User>` prompt in the terminal. The following figure shows an example.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9220926571/p1001193.png)
    

## **Step 4: (Optional) Enhance channel security with TNG**

To achieve end-to-end encryption from the client to the confidential cloud environment, you can use Trusted Network Gateway (TNG) to protect the communication channel. This prevents inference prompts and responses from being intercepted during transmission.

**Note**

This example shows how to interact with the model through an API. Before you begin, make sure the **OpenAI-compatible API service** from [Step 3](#e6b4f9d10chl3) is running.

1.  **Deploy TNG on the server (TDX instance)**
    
    Open a fourth terminal window on the TDX instance and run the following command:
    
    ```
    yum install -y trusted-network-gateway
    tng launch --config-content '{
      "add_egress": [{
        "netfilter": { "capture_dst": { "port": 7860 }, "capture_local_traffic": true, "listen_port": 40001 },
        "attest": { "aa_addr": "unix:///run/confidential-containers/attestation-agent/attestation-agent.sock" }
      }]
    }'
    ```
    

2.  **Deploy TNG on the client (local machine)**
    
    Download and run TNG on your local machine.
    
    > [More TNG versions](https://github.com/inclavare-containers/TNG/releases)
    
    ## Local machine is x86\_64
    
    ```
    # x86_64
    wget https://github.com/inclavare-containers/TNG/releases/download/v2.2.4/tng-v2.2.4.x86_64-unknown-linux-gnu.tar.gz
    tar -zxvf tng-v2.2.4.x86_64-unknown-linux-gnu.tar.gz && chmod +x tng
    
    ./tng launch --config-content '{
      "add_ingress": [{
        "http_proxy": { "proxy_listen": { "host": "127.0.0.1", "port": 41000 } },
        "verify": { "as_addr": "http://<Public IP address of the TDX instance>:50005", "policy_ids": [ "default" ] }
      }]
    }'
    ```
    
    ## Local machine is aarch64
    
    ```
    # aarch64
    wget https://github.com/inclavare-containers/TNG/releases/download/v2.2.4/tng-v2.2.4.aarch64-unknown-linux-gnu.tar.gz
    tar -zxvf tng-v2.2.4.aarch64-unknown-linux-gnu.tar.gz && chmod +x tng
    
    ./tng launch --config-content '{
      "add_ingress": [{
        "http_proxy": { "proxy_listen": { "host": "127.0.0.1", "port": 41000 } },
        "verify": { "as_addr": "http://<Public IP address of the TDX instance>:50005", "policy_ids": [ "default" ] }
      }]
    }'
    ```
    

3.  **Access the service through the TNG proxy**
    
    Open a new local command-line window, run the following command to configure the HTTP proxy, and then interact with the model through the encrypted channel:
    
    ```
    # Temporarily set an environment variable to configure the HTTP proxy
    export http_proxy=http://127.0.0.1:41000
    
    # Interact with the model through the API
    curl -X POST http://<Public IP address of the TDX instance>:7860/v1/chat/completions \
    -H "Content-Type: application/json" \
    -d '{
        "model": "Qwen",
        "messages": [
            {
                "role": "system",
                "content": "You are a helpful assistant."
            },
            {
                "role": "user", 
                "content": "Who are you?"
            }
        ]
    }'
    ```
    

## **FAQ**

#### **Error during trustee installation: "Error: Transaction test error"**

**Cause**: An existing Intel Software Guard Extensions (SGX) or TDX dependency on the system conflicts with Trustee.

**Solution**: Run `yum remove libsgx-dcap-default-qpl libsgx-dcap-quote-verify` and then retry the installation.

#### `**wget**` **fails to download the encrypted model with a "Connection refused" error**

**Cause**: The `python3 -m http.server` service that was started in Step 1 has stopped.

**Solution**: Return to the terminal window where you ran the command (the first terminal window) and make sure the service is still running. If it has stopped, go back to the `/cai/trustee/mount/cipher` directory and start it again.

#### **Cannot access the Web UI in a browser (**`**http://<Public IP address of the ECS instance>:7860**`**)**

**Causes and troubleshooting**:

1.  **Security group rule**: Verify that the security group allows inbound traffic on TCP port 7860 from the internet.
    
2.  **Service listening address**: Make sure the startup command includes `--server-name 0.0.0.0`.
    
3.  **Service status**: In the third terminal window, verify that the `web_demo.py` process is still running correctly.
    

#### **Error when getting the key file:** `**{code: 111, kind: ConnectionRefused, message: "Connection refused"}**`

**Cause 1**: Use the `systemctl status trustee` command to check the status of the Trustee service on the instance. If the status is `inactive`, the service is not running.

**Solution**: Run the `systemctl start trustee` command to start the Trustee service.

**Cause 2:** The default remote attestation policy is too strict, which causes the TDX environment verification to fail.

**Solution:** (For development and staging environments only) Run the `sed -i 's/^default allow = false$/default allow = true/' /opt/trustee/kbs/policy.rego` command to temporarily allow the verification to succeed.

## **References**

-   [Build a TDX confidential computing environment](/help/en/ecs/user-guide/build-a-tdx-confidential-computing-environment)
    
-   [Build a large language model inference environment that supports security measurement based on heterogeneous confidential computing instances](/help/en/ecs/user-guide/build-a-secure-deepseek-inference-environment-on-gn8v-tee-related-instances)
