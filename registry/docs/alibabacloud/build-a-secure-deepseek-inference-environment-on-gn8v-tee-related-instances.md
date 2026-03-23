Alibaba Cloud heterogeneous confidential computing instances (gn8v-tee) combine Intel TDX with GPU-based Trusted Execution Environment (TEE) to protect LLM model data and user inputs during inference. This tutorial deploys DeepSeek-R1 with Ollama, Open WebUI, and TDX remote attestation on a gn8v-tee instance so that clients can cryptographically verify the service environment before sending sensitive data.

## Background

### Why confidential computing for LLM inference

As Large Language Models (LLMs) become more widespread, securely managing models and user data has become critically important. Heterogeneous confidential computing instances (gn8v-tee) extend Intel TDX confidential computing by integrating a GPU into the TEE, protecting data in transit between the CPU and GPU and data processed within the GPU.

This solution enforces two core security properties:

-   **Confidentiality** -- Model and user data stay within the instance's confidential security boundary. No plaintext data is exposed externally.
    
-   **Integrity** -- All components in the inference stack (framework, model files, and web interface) are tamper-proof and auditable by third parties.
    

### Measurement and remote attestation

The solution relies on two Intel TDX mechanisms:

**Measurement**

During startup, the TDX module records the state of the Trusted Domain (TD) guest in two register sets:

-   **MRTD (Build Time Measurement Register)** -- Captures the initial configuration and boot image of the guest VM.
    
-   **RTMRs (Runtime Measurement Registers)** -- Record the kernel, kernel command line, and runtime services as they load. In this solution, the Ollama service, DeepSeek model, and Open WebUI framework are reflected in the RTMRs.
    

**Remote attestation**

Remote attestation lets a client obtain cryptographic proof that the inference environment is intact:

1.  The client requests a remote attestation report from Open WebUI.
    
2.  Open WebUI obtains a hardware-signed **TD Quote** from the CPU. The Quote includes the MRTD and RTMRs, reflecting the current integrity state.
    
3.  The client submits the Quote to a trusted attestation service, which validates the digital signature, certificate chain, and security policy.
    

**Note**

For details on the Alibaba Cloud attestation service, see [Remote Attestation Service](/help/en/ecs/user-guide/remote-attestation-service).

## Technical architecture

The following diagram shows the solution architecture.

![Architecture diagram](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5437257671/CAEQQBiBgIDgkeX2uhkiIGRlYTA3YTliYzM4ZDQ2OTZhMDNmNDIwYjMxY2Q1NmVm5065310_20250424092650.678.svg)

**Components:**

**Component**

**Description**

**Client**

User interface through which end-users access the LLM service. Initiates sessions, verifies remote service trustworthiness, and communicates securely with the backend

**Remote attestation service**

Alibaba Cloud service that verifies the platform's Trusted Computing Base (TCB) and inference environment

**Ollama** (v0.5.7)

Model serving framework that handles inference requests

**DeepSeek-R1**

Distilled DeepSeek-R1-70B model (int4 quantized, ~43 GB)

**Open WebUI** (v0.5.20)

Web-based interactive interface running inside the confidential VM, receiving user model service requests through a RESTful API

**CCZoo** (v1.2)

Intel's open-source Confidential Computing Zoo project; provides the TDX measurement plugin for Open WebUI

**Note**

Confidential Computing Zoo (CCZoo) is an open-source collection of security solutions for cloud computing scenarios. Its security technologies include TEEs (Intel SGX and TDX), Homomorphic Encryption (HE) and its hardware acceleration, remote attestation, LibOS, and cryptography with hardware acceleration. Its business scenarios cover cloud-native AI inference, federated learning, big data analytics, key management, and Remote Procedure Calls (RPCs) such as gRPC.

## Workflow

![Workflow diagram](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3843958471/p946342.png)

1.  **Service startup and measurement** -- The platform's TCB module measures the model service runtime environment. The result is stored in the TDX Module within the TCB.
    
2.  **Session initialization** -- The client (browser) initiates a new session to Open WebUI.
    
3.  **Remote attestation**
    
    1.  **Attestation request** -- The client requests a TDX Quote to verify the runtime environment, including Open WebUI and Ollama + DeepSeek.
        
    2.  **Quote generation** -- The Open WebUI backend forwards the request to the TDX-based Confidential VM, where the CPU hardware generates a Quote with a complete certificate chain.
        
    3.  **Quote verification** -- The client submits the Quote to the remote attestation service. The service validates the signature, certificate chain, and security policy, then returns a result confirming the environment's integrity.
        
4.  **Confidential LLM inference**
    
    -   **Attestation success** -- The client can trust that the model service runs in a secure, verified environment. The risk of data leakage is extremely low, although no system is entirely risk-free.
        
    -   **Attestation failure** -- The attestation service returns an error, indicating that the remote attestation failed. The user or system can choose to abort subsequent service requests. Alternatively, the service can continue after a warning is issued about the potential security risks. However, the remote model service may be exposed to data security risks.
        

## Prerequisites

Before you begin, make sure that you have:

-   An Alibaba Cloud account with access to the China (Beijing) region
    
-   Sufficient quota for ecs.gn8v-tee instance types (ecs.gn8v-tee.4xlarge or higher)
    
-   An SSH key pair for instance access
    
-   A security group and VPC/vSwitch in the China (Beijing) Zone L availability zone
    

## Procedure

### Step 1: Create a heterogeneous confidential computing instance

**Important**

Ollama stores model data at `/usr/share/ollama/.ollama/models`. The DeepSeek-R1 70B quantized model is approximately 43 GB. Select a Cloud Disk capacity at least two to three times the model size.

#### Console

Create the instance in the ECS console. The steps are similar to [creating a regular instance](/help/en/ecs/user-guide/create-an-instance-by-using-the-wizard), with the following specific settings:

1.  Go to [ECS console - Instances](https://ecs.console.alibabacloud.com/server/region).
    
2.  In the top navigation bar, select the China (Beijing) region. ![地域](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8343404471/p680076.png)
    
3.  Click **Create Instance** and configure the following settings:
    
    **Setting**
    
    **Value**
    
    Region and zone
    
    China (Beijing) Zone L
    
    Instance type
    
    ecs.gn8v-tee.4xlarge or higher
    
    Image
    
    Alibaba Cloud Linux 3.2104 LTS 64-bit
    
    Public IP address
    
    **Assign Public IPv4 Address** (required for downloading the NVIDIA driver)
    
4.  Complete the remaining configuration and create the instance.
    

**Important**

Do not add extra secondary elastic network interfaces (ENIs) when creating an 8-GPU confidential instance. Multiple ENIs can exhaust the SWIOTLB memory (a non-encrypted memory region used for peripheral communication, limited to 6% of available memory, up to 1 GiB), preventing the instance from starting.

-   **Solution 1:** Stop the instance and [detach](/help/en/ecs/user-guide/manage-eni) the extra secondary ENIs.
    
-   **Solution 2:** Re-create the instance with only one primary network interface. To add multiple ENIs later, first complete [Step 1 of the heterogeneous confidential computing environment guide](/help/en/ecs/user-guide/build-a-heterogeneous-confidential-computing-environment) to adjust the SWIOTLB buffer to 8 GB, then [associate an ENI](/help/en/ecs/user-guide/create-and-use-an-eni).
    

#### API/CLI

Call the [RunInstances](/help/en/ecs/developer-reference/api-ecs-2014-05-26-runinstances) operation or use the Alibaba Cloud CLI:

**Parameter**

**Description**

**Example**

RegionId

China (Beijing)

cn-beijing

ZoneId

Zone L

cn-beijing-l

InstanceType

ecs.gn8v-tee.4xlarge or higher

ecs.gn8v-tee.4xlarge

ImageId

Alibaba Cloud Linux 3.2104 LTS 64-bit (kernel 5.10.134-18.al8.x86\_64 or later)

aliyun\_3\_x64\_20G\_alibase\_20250117.vhd

CLI example:

> Replace `<SECURITY_GROUP_ID>`, `<VSWITCH_ID>`, and `<KEY_PAIR_NAME>` with your actual values.

```
aliyun ecs RunInstances \
  --RegionId cn-beijing \
  --ZoneId cn-beijing-l \
  --SystemDisk.Category cloud_essd \
  --ImageId 'aliyun_3_x64_20G_alibase_20250117.vhd' \
  --InstanceType 'ecs.gn8v-tee.4xlarge' \
  --SecurityGroupId '<SECURITY_GROUP_ID>' \
  --VSwitchId '<VSWITCH_ID>' \
  --KeyPairName <KEY_PAIR_NAME>
```

### Step 2: Build the TDX remote attestation environment

TDX Report is a hardware-generated data structure representing the identity of a TDX-enabled instance. It includes attributes, RTMRs, and TCB security-version number (SVN), protected by cryptographic integrity. For more details, see [Intel TDX Module specification](https://cdrdv2-public.intel.com/733568/tdx-module-1.0-public-spec-344425004.pdf).

1.  **Import the YUM repository for Alibaba Cloud confidential computing.** Repository URL formats: Replace `[Region-ID]` with the actual region ID. Currently, only the China (Beijing) region supports TDX instances. To use the internal URL:
    
    -   Public: `https://enclave-[Region-ID].oss-[Region-ID].aliyuncs.com/repo/alinux/enclave-expr.repo`
        
    -   Internal: `https://enclave-[Region-ID].oss-[Region-ID]-internal.aliyuncs.com/repo/alinux/enclave-expr.repo`
        
    
    ```
       region="cn-beijing"
    
       sudo yum install -y yum-utils
       sudo yum-config-manager --add-repo https://enclave-${region}.oss-${region}-internal.aliyuncs.com/repo/alinux/enclave-expr.repo
    ```
    
2.  **Install build tools and sample code.**
    
    ```
       sudo yum groupinstall -y "Development Tools"
       sudo yum install -y sgxsdk libtdx-attest-devel
    ```
    
3.  **Configure the remote attestation service.** Set the `PCCS_URL` in `/etc/sgx_default_qcnl.conf` to point to the Data Center Attestation Primitives (DCAP) service in the China (Beijing) region:
    
    ```
       sudo sed -i.$(date "+%m%d%y") 's|PCCS_URL=.*|PCCS_URL=https://sgx-dcap-server.cn-beijing.aliyuncs.com/sgx/certification/v4/|' /etc/sgx_default_qcnl.conf
    ```
    

### Step 3: Install Ollama

1.  [Connect to the instance using Workbench](/help/en/ecs/user-guide/connect-to-a-linux-instance-by-using-a-password-or-key).
    
2.  Run the official installation script:
    
    **Note**
    
    If the installation fails due to network issues, see the [Ollama Linux installation guide](https://github.com/ollama/ollama/blob/main/docs/linux.md) for alternative methods.
    
    ```
       curl -fsSL https://ollama.com/install.sh | sh
    ```
    

### Step 4: Download and run DeepSeek-R1

Use `tmux` to maintain the session during the large model download.

1.  **Install tmux.**
    
    ```
       sudo yum install -y tmux
    ```
    
2.  **Download and run DeepSeek-R1.** When the download completes and the model starts, the output looks like: Enter `/bye` to exit the interactive session.
    
    ```
       # Create a tmux session
       tmux new -s "run-deepseek"
       # Download and run the model (~43 GB)
       ollama run deepseek-r1:70b
    ```
    
    ```
       ......
       verifying sha256 digest
       writing manifest
       success
       >>>
       >>> Send a message (/? for help)
    ```
    
3.  **(Optional) Reconnect to the tmux session after a disconnection:**
    
    ```
       tmux attach -t run-deepseek
    ```
    

### Step 5: Compile Open WebUI with TDX measurement support

To enable TDX security measurement, download the TDX plugin from CCZoo and compile Open WebUI from source.

**Important**

The following examples use `/home/ecs-user` as the working directory. Replace with your actual path.

#### Install dependencies

1.  **Install Node.js.** If the package manager installation fails, use nvm:
    
    ```
       sudo yum install -y nodejs
    ```
    
    ```
       # Install nvm
       curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
       source ~/.bashrc
       # Install and use Node.js 20.18.1
       nvm install 20.18.1
       nvm use 20.18.1
       node --version
    ```
    
2.  **Install Miniforge3.**
    
    ```
       # Download the installer
       wget https://github.com/conda-forge/miniforge/releases/download/24.11.3-2/Miniforge3-24.11.3-2-Linux-x86_64.sh
       # Install non-interactively
       bash Miniforge3-24.11.3-2-Linux-x86_64.sh -bu -p /home/ecs-user/miniforge3
       # Add to PATH
       export PATH="/home/ecs-user/miniforge3/bin:$PATH"
    ```
    
3.  **Initialize Conda.**
    
    ```
       conda init
       source ~/.bashrc
       conda --version
    ```
    

#### Compile Open WebUI

1.  **Download the TDX measurement plugin.**
    
    ```
       cd /home/ecs-user
       git clone https://github.com/intel/confidential-computing-zoo.git
       git config --global --add safe.directory /home/ecs-user/confidential-computing-zoo
       cd confidential-computing-zoo
       git checkout v1.2
    ```
    
2.  **Clone Open WebUI and apply the CCZoo patch.**
    
    ```
       cd /home/ecs-user
       git clone https://github.com/open-webui/open-webui.git
    
       git config --global --add safe.directory /home/ecs-user/open-webui
       cd /home/ecs-user/open-webui
       git checkout v0.5.20
    
       # Apply the TDX remote attestation patch
       cd /home/ecs-user
       cp /home/ecs-user/confidential-computing-zoo/cczoo/confidential_ai/open-webui-patch/v0.5.20-feature-cc-tdx-v1.0.patch .
       git apply --ignore-whitespace --directory=open-webui/ v0.5.20-feature-cc-tdx-v1.0.patch
    ```
    
3.  **Create and activate the Conda environment.**
    
    ```
       conda create --name open-webui python=3.11
       conda activate open-webui
    ```
    
4.  **Install the TDX Quote plugin.** Verify the installation (no error output means success):
    
    ```
       cd /home/ecs-user/confidential-computing-zoo/cczoo/confidential_ai/tdx_measurement_plugin/
       pip install Cython
       python setup.py install
    ```
    
    ```
       python3 -c "import quote_generator"
    ```
    
5.  **Build the frontend.** Copy the build output to the backend directory:
    
    **Note**
    
    The Alibaba Cloud remote attestation service configuration is now embedded in the compiled Open WebUI. The configuration is in `/home/ecs-user/open-webui/external/acs-attest-client/index.js`.
    
    ```
       cd /home/ecs-user/open-webui/
       npm config set registry http://registry.npmmirror.com
       sudo npm install
       sudo npm run build
    ```
    
    ```
       rm -rf ./backend/open_webui/frontend
       cp -r build ./backend/open_webui/frontend
    ```
    
6.  **Create the backend startup script.**
    
    ```
       tee /home/ecs-user/open-webui/backend/dev.sh << 'EOF'
       #Set the service address and port. The default port is 8080.
       PORT="${PORT:-8080}"
       uvicorn open_webui.main:app --port $PORT --host 0.0.0.0 --forwarded-allow-ips '*' --reload
       EOF
    
       chmod +x /home/ecs-user/open-webui/backend/dev.sh
    ```
    
7.  **Install backend dependencies.**
    
    ```
       cd /home/ecs-user/open-webui/backend/
       pip install -r requirements.txt -U
       conda deactivate
    ```
    

### Step 6: Run Open WebUI and verify TDX attestation

#### Start the services

1.  **(Optional) Start the Ollama service if it is not running:**
    
    ```
       ollama serve
    ```
    
2.  **Run DeepSeek-R1:**
    
    ```
       ollama run deepseek-r1:70b
    ```
    
3.  **Activate the Conda environment:**
    
    ```
       conda activate open-webui
    ```
    
4.  **Start the Open WebUI backend:** When the service starts successfully, the output includes:
    
    ```
       cd /home/ecs-user/open-webui/backend && ./dev.sh
    ```
    
    ```
       ██████╗ ██████╗ ███████╗███╗   ██╗    ██╗    ██╗███████╗██████╗ ██╗   ██╗██╗
       ...
       v0.5.20 - building the best open-source AI user interface.
    ```
    

#### Access Open WebUI from a browser

1.  **Add a security group rule** to allow inbound traffic on port 8080. See [Manage security group rules](/help/en/ecs/user-guide/manage-security-group-rules).
    
2.  **Open your browser** and go to `http://<instance-public-ip>:8080`. If remote attestation succeeds, a green check mark appears on the first icon in the dialog box:
    
    **Note**
    
    Each time you click **New Chat**, the backend fetches the TDX Quote, sends it for remote attestation, and displays the result. The icon is red by default (attestation not yet completed or failed) and turns green on success.
    
    ![Attestation success](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3843958471/p946364.png)
    

#### Verify TDX attestation details

Hover over the first icon in the dialog box to see the parsed TDX Quote details:

![Attestation details](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3843958471/p946365.png)

The browser developer tools also show detailed attestation information:

![Developer tools output](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3843958471/p946380.png)

## FAQ

### **How do I speed up slow pip downloads?**

The default PyPI repository can be slow from within the instance. Configure the Alibaba Cloud mirror for faster downloads.

**Global configuration** (recommended):

Add the following to `~/.pip/pip.conf`:

```
[global]
index-url = https://mirrors.aliyun.com/pypi/simple/
```

**Single command:**

```
pip install torch -i https://mirrors.aliyun.com/pypi/simple/
```

### **What do I do about a "cannot find package" error during Open WebUI compilation?**

A missing npm package causes this error. Install the package and recompile:

```
npm install pyodide
```

Replace `pyodide` with the actual missing package name from the error message.

## References

-   Open WebUI natively supports only HTTP. To secure data in transit, deploy HTTPS with Alibaba Cloud SLB. See [Configure one-way authentication for HTTPS requests](/help/en/slb/classic-load-balancer/use-cases/configure-one-way-authentication-for-https-requests).
    
-   [Remote Attestation Service](/help/en/ecs/user-guide/remote-attestation-service)
    
-   [CCZoo Confidential AI project](https://github.com/intel/confidential-computing-zoo/tree/main/cczoo/confidential_ai)
    
-   [Intel TDX Module specification](https://cdrdv2-public.intel.com/733568/tdx-module-1.0-public-spec-344425004.pdf)
