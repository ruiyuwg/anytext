This topic describes how to build a Software Guard Extensions (SGX) confidential computing environment on an Intel® SGX-enabled Elastic Compute Service (ECS) instance, which is known as vSGX instance, and how to verify the SGX feature on the instance.

## Prerequisites

A vSGX instance is created, and you are logged on to the instance.

**Note**

Only the g7t, c7t, and r7t instance families support the SGX feature. For more information, see [Instance family overview](/help/en/ecs/user-guide/overview-of-instance-families).

## Background information

Intel® SGX sets up a confidential computing environment at the physical level to ensure data security by providing hardware-based protections instead of firmware- or software-based protections. Intel® SGX uses instruction set extensions and an access control mechanism to isolate the runtime environment of SGX programs. This protects the confidentiality and integrity of key code and data against malware attacks. Compared with other security technologies, Intel® SGX uses the root of trust that contains only hardware. This prevents defects caused by security vulnerabilities of software on which the root of trust is based, and improves system security.

The g7t, c7t, and r7t security-enhanced instance families provide confidential memory based on Intel® SGX and support the SGX technology for virtual machines. You can develop and run SGX programs on vSGX instances.

**Important**

If you use keys (such as SGX sealing keys) that are bound to hardware to encrypt the data of an instance within an Intel SGX enclave, the encrypted data cannot be decrypted after the host of the instance is changed. We recommend that you perform data redundancy and backup at the application layer to ensure application reliability.

## **Procedure**

### Step 1: Check whether SGX is enabled

Before you build an SGX confidential computing environment, you can use CPUID to check whether SGX is enabled. This section describes how to check whether SGX is enabled. In the following examples, an Alibaba Cloud Linux 2 (UEFI) image or Alibaba Cloud Linux 3 (UEFI) image, and a Ubuntu 22.04 (UEFI) image are used.

## Alibaba Cloud Linux 2/3 (UEFI) image

1.  Install CPUID.
    
    ```
    sudo yum install -y cpuid
    ```
    
2.  Check whether SGX is enabled.
    
    ```
    cpuid -1 -l 0x7 |grep SGX
    ```
    
    A command output similar to the following one indicates that SGX is enabled.![sgx_install](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5226711861/p595794.png)
    
    **Note**
    
    After SGX is enabled, the SGX driver is required to run SGX programs. The dedicated images provided by Alibaba Cloud have a built-in SGX driver. If you do not want to use a dedicated image, install the SGX driver.
    
3.  Check whether the SGX driver is installed.
    
    ```
    ls -l /dev/{sgx_enclave,sgx_provision}
    ```
    
    A command output similar to the following one indicates that the SGX driver is installed.![sgx_driver](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5226711861/p595793.png)
    

## Ubuntu 22.04 (UEFI) image

1.  Install CPUID.
    
    ```
    sudo apt-get update && sudo apt-get install -y --no-install-recommends cpuid
    ```
    
2.  Check whether SGX is enabled.
    
    ```
    cpuid -1 -l 0x7 |grep SGX
    ```
    
    A command output similar to the following one indicates that SGX is enabled.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2346383171/p781471.png)
    
    **Note**
    
    After SGX is enabled, the SGX driver is required to run SGX programs. The dedicated images provided by Alibaba Cloud have a built-in SGX driver. If you do not want to use a dedicated image, install the SGX driver.
    
3.  Install the SGX driver:
    
    1.  Create the `install_sgx_dcap.sh` script:
        
        ```
        cat <<'EOF' > install_sgx_dcap.sh
        #!/bin/bash
        
        version_id=$(cat /etc/os-release|grep "VERSION_ID"|cut -d"=" -f2|tr -d "\"")
        version_codename=$(cat /etc/os-release|grep "VERSION_CODENAME"|cut -d"=" -f2)
        apt-get update && DEBIAN_FRONTEND=noninteractive apt-get install -y build-essential dkms curl wget
        
        if [ ! -e /dev/sgx/enclave -a ! -e /dev/sgx_enclave ]; then
          dcap_version=$(curl -s https://download.01.org/intel-sgx/latest/version.xml |grep dcap| sed -r 's/.*>(.*)<.*/\1/')
          dcap_files=$(curl -s https://download.01.org/intel-sgx/latest/dcap-latest/linux/SHA256SUM_dcap_${dcap_version}.cfg)
          echo "${dcap_files}" | grep "ubuntu${version_id}-server" |grep "sgx_linux_x64_driver" | awk '{print $2}' | xargs -I{} curl -O -J https://download.01.org/intel-sgx/latest/dcap-latest/linux/{}
          
          bash sgx_linux_x64_driver*.bin
        else
          echo "driver already installed"
        fi
        EOF
        ```
        
    2.  Run the script to install the SGX driver:
        
        ```
        sudo bash ./install_sgx_dcap.sh
        ```
        
4.  Check whether the SGX driver is installed.
    
    ```
    ls -l /dev/{sgx_enclave,sgx_provision}
    ```
    
    A command output similar to the following one indicates that the SGX driver is installed.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2346383171/p781474.png)
    

### **Step 2: Build an SGX confidential computing environment**

Before you develop SGX programs, you must install the SGX runtime and SDK on a vSGX instance and configure the remote attestation service. To ensure better user experience, we recommend that you use dedicated images provided by Alibaba Cloud. Dedicated images are equipped with the SGX driver and provide trusted execution environment (TEE) SDK that is fully compatible with Intel® SGX SDK. This section describes how to build an SGX confidential computing environment. In the following examples, an Alibaba Cloud Linux 2 (UEFI) image or Alibaba Cloud Linux 3 (UEFI) image, and a Ubuntu 22.04 (UEFI) image are used. If you use Linux images such as CentOS images, install the SGX driver and Platform SoftWare (PSW). For more information, see [Intel® SGX SW Installation Guide for Linux](https://download.01.org/intel-sgx/latest/linux-latest/docs/Intel_SGX_SW_Installation_Guide_for_Linux.pdf).

1.  Install the modules required to build the SGX confidential computing environment.
    
    ## Alibaba Cloud Linux 2/3 (UEFI) image
    
    1.  (Required) Install the Alibaba Cloud SGX runtime.
        
        **Note**
        
        When you create a vSGX instance in the ECS console, the Alibaba Cloud SGX runtime is automatically installed. You can skip this step and install Alibaba Cloud TEE SDK.
        
        1.  Import the Yellowdog Updater Modified (YUM) software repository for Alibaba Cloud confidential computing.
            
            **Note**
            
            Replace _\[Region-ID\]_ in the following URLs with the region ID of the vSGX instance:
            
            -   The public URL of the repository is in the following format: `https://enclave-[Region-ID].oss-[Region-ID].aliyuncs.com/repo/alinux/enclave-expr.repo`.
                
            -   The internal URL of the repository is in the following format: `https://enclave-[Region-ID].oss-[Region-ID]-internal.aliyuncs.com/repo/alinux/enclave-expr.repo`.
                
            
            You can also create and run a script to import the YUM software repository for Alibaba Cloud confidential computing.
            
            1.  Create the `install_sgx_repo.sh` script:
                
                ```
                cat <<'EOF' > install_sgx_repo.sh
                ID=$(grep -w '^ID' /etc/os-release | awk -F= '{print $2}' | tr -d '"')
                VERSION_ID=$(grep -w '^VERSION_ID' /etc/os-release | awk -F= '{print $2}' | tr -d '"')
                
                # Query the region of the instance.
                token=$(curl -s -X PUT -H "X-aliyun-ecs-metadata-token-ttl-seconds: 5" "http://100.100.100.200/latest/api/token")
                region_id=$(curl -s -H "X-aliyun-ecs-metadata-token: $token" http://100.100.100.200/latest/meta-data/region-id)
                
                # Enable the Alibaba Cloud experimental repository for the instance if an Alibaba Cloud Linux 2 (UEFI) image is used.
                if [ "$ID" = "alinux" -a "$VERSION_ID" = "2.1903" ]; then
                    sudo rpmkeys --import http://mirrors.cloud.aliyuncs.com/epel/RPM-GPG-KEY-EPEL-7
                    sudo yum install -y alinux-release-experimentals
                fi
                
                yum install -y yum-utils && \
                yum-config-manager --add-repo \
                https://enclave-${region_id}.oss-${region_id}-internal.aliyuncs.com/repo/alinux/enclave-expr.repo
                
                EOF
                ```
                
            2.  Import the YUM repository for Alibaba Cloud confidential computing:
                
                ```
                sudo bash ./install_sgx_repo.sh
                ```
                
            
        2.  Install the Alibaba Cloud SGX runtime.
            
            ```
            sudo yum install -y libsgx-ae-le libsgx-ae-pce libsgx-ae-qe3 libsgx-ae-qve \
            libsgx-aesm-ecdsa-plugin libsgx-aesm-launch-plugin libsgx-aesm-pce-plugin \
            libsgx-aesm-quote-ex-plugin libsgx-dcap-default-qpl libsgx-dcap-ql \
            libsgx-dcap-quote-verify libsgx-enclave-common libsgx-launch libsgx-pce-logic \
            libsgx-qe3-logic libsgx-quote-ex libsgx-ra-network libsgx-ra-uefi \
            libsgx-uae-service libsgx-urts sgx-ra-service sgx-aesm-service
            ```
            
            **Note**
            
            SGX Architectural Enclave Service Manager (AESM) is used to manage services such as enclave start, key configuration, and remote attestation. The default installation path of SGX AESM is /opt/intel/sgx-aesm-service.
            
    2.  Install Alibaba Cloud TEE SDK.
        
        ```
        sudo yum install -y sgxsdk
        ```
        
    
    Alibaba Cloud TEE SDK is fully compatible with Intel® SGX SDK. After you install Alibaba Cloud TEE SDK, you can refer to Intel® SGX Developer Reference to develop SGX programs. For more information, see [Intel®SGX Developer Reference](https://download.01.org/intel-sgx/sgx-linux/2.13/docs/Intel_SGX_Developer_Reference_Linux_2.13_Open_Source.pdf).
    
    **Note**
    
    The default installation path of Intel® SGX SDK in Alibaba Cloud TEE SDK is /opt/alibaba/teesdk/intel/sgxsdk/.
    
    ## Ubuntu 22.04 (UEFI) image
    
    1.  Create the `install_sgx_sdk.sh` script:
        
        ```
        cat <<'EOF' > install_sgx_sdk.sh
        #!/bin/bash
        
        version_id=$(cat /etc/os-release|grep "VERSION_ID"|cut -d"=" -f2|tr -d "\"")
        version_codename=$(cat /etc/os-release|grep "VERSION_CODENAME"|cut -d"=" -f2)
        apt-get update && DEBIAN_FRONTEND=noninteractive apt-get install -y build-essential dkms curl wget
        
        dcap_version=$(curl -s https://download.01.org/intel-sgx/latest/version.xml |grep dcap| sed -r 's/.*>(.*)<.*/\1/')
        linux_version=$(curl -s https://download.01.org/intel-sgx/latest/version.xml |grep linux| sed -r 's/.*>(.*)<.*/\1/')
        dcap_files=$(curl -s https://download.01.org/intel-sgx/latest/dcap-latest/linux/SHA256SUM_dcap_${dcap_version}.cfg)
        echo "${dcap_files}" | grep "ubuntu${version_id}-server" | awk '{print $2}' | xargs -I{} curl -O -J https://download.01.org/intel-sgx/latest/dcap-latest/linux/{}
        
        # install sgx_sdk
        bash sgx_linux_x64_sdk*.bin --prefix /opt/intel
        source /opt/intel/sgxsdk/environment
        
        # install psw
        echo "deb [arch=amd64] https://download.01.org/intel-sgx/sgx_repo/ubuntu ${version_codename} main" |  tee /etc/apt/sources.list.d/intelsgx.list
        wget -qO - https://download.01.org/intel-sgx/sgx_repo/ubuntu/intel-sgx-deb.key | apt-key add -
        apt-get update && DEBIAN_FRONTEND=noninteractive apt-get install -y libsgx-launch libsgx-urts libsgx-epid libsgx-quote-ex libsgx-dcap-ql libsgx-dcap-ql-dev
        systemctl enable --now aesmd.service
        EOF
        ```
        
    2.  Run the script to install Intel® SGX SDK and PSW:
        
        ```
        sudo bash ./install_sgx_sdk.sh
        ```
        
    
2.  Configure the Alibaba Cloud SGX remote attestation service.
    
    The Alibaba Cloud SGX remote attestation service is fully compatible with the Intel® SGX Elliptic Curve Digital Signature Algorithm (ECDSA)-based remote attestation service and Intel® SGX SDK. vSGX instances provided by Alibaba Cloud can gain trust from remote providers and producers by using remote attestation. For more information, see [Attestation & Provisioning Services](https://software.intel.com/content/www/us/en/develop/topics/software-guard-extensions/attestation-services.html).
    
    The Alibaba Cloud SGX remote attestation service provides the following information about SGX SDK:
    
    -   SGX certificates: the SGX certificates.
        
    -   Revocation list: a list of revoked SGX certificates.
        
    -   Trusted computing base information: information about the root of trust.
        
    
    **Note**
    
    Intel Ice Lake supports only remote attestation based on Intel Software Guard Extensions Data Center Attestation Primitives (Intel SGX DCAP) and does not support remote attestation based on Intel Enhanced Privacy ID (EPID). You must adapt applications before you can use the remote attestation feature. For more information about remote attestation, see [Strengthen Enclave Trust with Attestation](https://software.intel.com/content/www/us/en/develop/topics/software-guard-extensions/attestation-services.html).
    
    The Alibaba Cloud SGX remote attestation service is deployed per region. To ensure optimal stability, we recommend that you access the service that is deployed in the same region as your vSGX instance. After you install Alibaba Cloud TEE SDK, the default configuration file /etc/sgx\_default\_qcnl.conf is automatically generated for the remote attestation service. You must use one of the following methods to adapt the file to the Alibaba Cloud SGX remote attestation service in the region in which the vSGX instance is deployed.
    
    **Note**
    
    The following table describes the regions where the Alibaba Cloud SGX remote attestation service is supported.
    
    **Supported region**
    
    **Region ID**
    
    China (Qingdao)
    
    cn-qingdao
    
    China (Beijing)
    
    cn-beijing
    
    China (Zhangjiakou)
    
    cn-zhangjiakou
    
    China (Ulanqab)
    
    cn-wulanchabu
    
    China (Hangzhou)
    
    cn-hangzhou
    
    China (Shanghai)
    
    cn-shanghai
    
    China (Shenzhen)
    
    cn-shenzhen
    
    China (Heyuan)
    
    cn-heyuan
    
    China (Guangzhou)
    
    cn-guangzhou
    
    China (Chengdu)
    
    cn-chengdu
    
    China (Hong Kong)
    
    cn-hongkong
    
    Singapore
    
    ap-southeast-1
    
    Indonesia (Jakarta)
    
    ap-southeast-5
    
    -   (Recommended) Method 1: Have the /etc/sgx\_default\_qcnl.conf file configured.
        
        Run the following commands to automatically configure the /etc/sgx\_default\_qcnl.conf file. For more information, see [Access instance metadata](/help/en/ecs/user-guide/view-instance-metadata/#concept-dwj-y1x-wgb).
        
        ```
        # View the region of the instance.
        token=$(curl -s -X PUT -H "X-aliyun-ecs-metadata-token-ttl-seconds: 5" "http://100.100.100.200/latest/api/token")
        region_id=$(curl -s -H "X-aliyun-ecs-metadata-token: $token" http://100.100.100.200/latest/meta-data/region-id)
        
        # Specify the URL of Alibaba Cloud Provisioning Certificate Caching Service (PCCS) for the region in which the instance is deployed.
        PCCS_URL=https://sgx-dcap-server-vpc.${region_id}.aliyuncs.com/sgx/certification/v4/
        sudo bash -c 'cat > /etc/sgx_default_qcnl.conf' << EOF
        # PCCS server address
        PCCS_URL=${PCCS_URL}
        # To accept insecure HTTPS cert, set this option to FALSE
        USE_SECURE_CERT=TRUE
        EOF
        ```
        
    -   Method 2: Manually modify the /etc/sgx\_default\_qcnl.conf file.
        
        -   If the vSGX instance is assigned a public IP address, change the configurations in the /etc/sgx\_default\_qcnl.conf file to the following content. Replace _\[Region-ID\]_ with the region ID of the vSGX instance.
            
            ```
            # PCCS server address
            PCCS_URL=https://sgx-dcap-server.[Region-ID].aliyuncs.com/sgx/certification/v4/
            # To accept insecure HTTPS cert, set this option to FALSE
            USE_SECURE_CERT=TRUE
            ```
            
        -   If the vSGX instance is in a virtual private cloud (VPC) and has only internal IP addresses, change the configurations in the /etc/sgx\_default\_qcnl.conf file to the following content. Replace _\[Region-ID\]_ with the region ID of the vSGX instance.
            
            ```
            # PCCS server address
            PCCS_URL=https://sgx-dcap-server-vpc.[Region-ID].aliyuncs.com/sgx/certification/v4/
            # To accept insecure HTTPS cert, set this option to FALSE
            USE_SECURE_CERT=TRUE
            ```
            
    

## Examples on how to verify the SGX feature

This section describes how to start an enclave to check whether the installed SGX SDK works as expected. If the enclave is started, the SDK works as expected. In the following examples, the sample code file named SampleEnclave is used.

### **Example 1: Start an enclave**

## Alibaba Cloud Linux 2/3 (UEFI) image

Alibaba Cloud TEE SDK provides SGX sample code to verify the SGX feature. By default, the code is stored in the /opt/alibaba/teesdk/intel/sgxsdk/SampleCode directory.

1.  Install a compiler.
    

```
ID=$(grep -w '^ID' /etc/os-release | awk -F= '{print $2}' | tr -d '"')
VERSION_ID=$(grep -w '^VERSION_ID' /etc/os-release | awk -F= '{print $2}' | tr -d '"')

if [ "$ID" = "alinux" ]; then
    case "$VERSION_ID" in
        "2.1903" )
            sudo yum install -y devtoolset-9
            ;;
        "3" )
            sudo yum groupinstall -y "Development Tools"
            ;;
    esac
fi
```

3.  Configure the environment variables related to SGX SDK.
    
    ```
    if [ "$ID" = "alinux" -a "$VERSION_ID" = "2.1903" ]; then
        source /opt/rh/devtoolset-9/enable
    fi
    source /opt/alibaba/teesdk/intel/sgxsdk/environment
    ```
    
4.  Compile the sample code in the SampleEnclave file.
    
    1.  Go to the SampleEnclave directory:
        
        ```
        cd /opt/alibaba/teesdk/intel/sgxsdk/SampleCode/SampleEnclave
        ```
        
    2.  Compile the sample code in SampleEnclave:
        
        ```
        sudo -E make
        ```
        
5.  Run the compiled executable file.
    
    ```
    sudo ./app
    ```
    
    If the following command output is returned, SGX runs as expected.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1527277471/p954021.png)
    

## Ubuntu 22.04 (UEFI) image

1.  Update the package list.
    
    ```
    sudo apt update
    ```
    
2.  Install the `build-essential` compiler.
    
    ```
    sudo apt install -y build-essential
    ```
    
3.  Compile the sample code in the SampleEnclave file.
    
    1.  Go to the SampleEnclave directory:
        
        ```
        cd /opt/intel/sgxsdk/SampleCode/SampleEnclave/
        ```
        
    2.  Compile the sample code in SampleEnclave:
        
        ```
        sudo make SGX_DEBUG=1
        ```
        
4.  Run the compiled executable file.
    
    ```
    sudo ./app
    ```
    
    If the following command output is returned, SGX runs as expected.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1527277471/p954024.png)
    

### **Example 2: Use the SGX remote attestation service**

Alibaba Cloud TEE SDK provides SGX sample code to verify the SGX feature. By default, the code is stored in the /opt/alibaba/teesdk/intel/sgxsdk/SampleCode directory. This section describes how to use the SGX remote attestation service. In this example, an Alibaba Cloud Linux 2 (UEFI) image or Alibaba Cloud Linux 3 (UEFI) image is used.

The expected result is that a quote is generated by using the QuoteGenerationSample file and verified by using the QuoteVerificationSample file. The example involves the challenged party (SGX programs that run in the vSGX instance) and the challenging party (the party that wants to verify whether the SGX programs are trusted). In this example, the sample code file named QuoteGenerationSample is used by the challenged party to generate a quote, and the sample code file named QuoteVerificationSample is used by the challenging party to verify the quote.

1.  Install a compiler.
    
    -   If an Alibaba Cloud Linux 2 (UEFI) image is used, install devtoolset.
        
        1.  Install devtoolset.
            
            ```
            sudo yum install -y devtoolset-9
            ```
            
        2.  Configure the environment variables related to devtoolset.
            
            ```
            source /opt/rh/devtoolset-9/enable
            ```
            
    -   If an Alibaba Cloud Linux 3 (UEFI) image is used, install Development Tools.
        
        ```
        sudo yum groupinstall -y "Development Tools"
        ```
        
2.  Configure the environment variables related to SGX SDK.
    
    ```
    source /opt/alibaba/teesdk/intel/sgxsdk/environment
    ```
    
3.  Install the dependency package of SGX remote attestation.
    
    ```
    sudo yum install -y libsgx-dcap-ql-devel libsgx-dcap-quote-verify-devel libsgx-dcap-default-qpl-devel
    ```
    
4.  Compile the sample code in the QuoteGenerationSample file used by the challenged party.
    
    1.  Go to the QuoteGenerationSample directory.
        
        ```
        cd /opt/alibaba/teesdk/intel/sgxsdk/SampleCode/QuoteGenerationSample
        ```
        
    2.  Compile the sample code in the QuoteGenerationSample file.
        
        ```
        sudo -E make
        ```
        
5.  Run the compiled executable file to generate a quote.
    
    ```
    sudo ./app
    ```
    
    If the following command output is returned, quote verification is successful.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1527277471/p954039.png)
    
6.  Compile the sample code in the QuoteVerificationSample file used by the challenging party.
    
    1.  Go to the QuoteVerificationSample directory.
        
        ```
        cd /opt/alibaba/teesdk/intel/sgxsdk/SampleCode/QuoteVerificationSample
        ```
        
    2.  Compile the sample code in the QuoteVerificationSample file.
        
        ```
        sudo -E make
        ```
        
7.  Sign the QuoteVerificationSample enclave.
    
    To release an official version of an enclave, you must provide the signature key to sign the enclave.
    
    ```
    sudo sgx_sign sign -key Enclave/Enclave_private_sample.pem -enclave enclave.so -out enclave.signed.so -config Enclave/Enclave.config.xml
    ```
    
    **Note**
    
    If the `Failed to open file "Enclave/Enclave_private_sample.pem"` error message appears, run the following command to re-sign the signature:
    
    ```
    sudo sgx_sign sign -key ../QuoteGenerationSample/Enclave/Enclave_private_sample.pem -enclave enclave.so -out enclave.signed.so -config Enclave/Enclave.config.xml
    ```
    
8.  Run the compiled executable file to verify the quote.
    
    ```
    sudo ./app
    ```
    
    If the following command output is returned, quote verification is successful.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1527277471/p954035.png)
    

## Update the SGX SDK, PSW, and DCAP software

The Intel® SGX software stack includes [SGX SDK](https://github.com/intel/linux-sgx#install-the-intelr-sgx-sdk), [SGX PSW](https://github.com/intel/linux-sgx#install-the-intelr-sgx-psw-1), and [SGX Data Center Attestation Primitives (DCAP)](https://github.com/intel/SGXDataCenterAttestationPrimitives#intelr-software-guard-extensions-data-center-attestation-primitives). To ensure optimal security, we recommend that you update software versions on a regular basis. In this example, an Alibaba Cloud Linux 3 UEFI image is used to update the SGX SDK, SGX PSW, and SGX DCAP software packages.

1.  Update the SGX SDK, SGX PSW, and SGX DCAP software.
    
    ```
    sudo rpm -qa --qf "%{NAME}\n"|grep -E "sgxsdk|libsgx-|libtdx-|^sgx-|^tdx-"|sudo xargs bash -c '</dev/tty yum update "$@"' _
    ```
    
2.  View the versions of the SGX SDK, SGX PSW, and SGX DCAP software.
    
    1.  View the versions of the SGX SDK and SGX PSW software.
        
        ```
        sudo rpm -qa|grep -E "sgxsdk|sgx-aesm-service|libsgx-(ae-epid|ae-le|ae-pce|aesm|enclave|epid|headers|launch|quote-ex|uae-service|urts)"
        ```
        
        The following command output is returned.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1527277471/p954045.png)
        
    2.  View the version of the SGX DCAP software.
        
        ```
        sudo rpm -qa|grep -E "sgx-(dcap-pccs|pck|ra-service)|libsgx-(ae-id-enclave|ae-qe3|ae-qve|ae-tdqe|dcap|pce-logic|qe3-logic|ra-|tdx-)|libtdx-|^tdx-"
        ```
        
        The following command output is returned.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1527277471/p954047.png)
        

## Known issues

Memory leaks may occur on the SGX driver that comes with Alibaba Cloud Linux 2 whose kernel version is 4.19.91-23.al7.x86\_64. This issue is fixed in the latest version. We recommend that you update the kernel to the latest version. If you want to continue using this earlier kernel version, we recommend that you run the following commands to install patches to avoid this issue:

```
sudo yum install -y alinux-release-experimentals && \
sudo yum install -y kernel-hotfix-5577959-23.al7.x86_64
```
