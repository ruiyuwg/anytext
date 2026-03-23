Alibaba Cloud Elastic Compute Service (ECS) protects your workloads with multiple levels of security protection, from hardware root of trust to confidential computing. While encryption at rest and in transit are well-established, protecting data during active processing -- data in use -- remains a critical challenge. ECS addresses this with hardware-level memory encryption, trusted computing, and confidential computing capabilities. Default features require no extra configuration. Confidential VMs based on Intel TDX require no code changes, while SGX enclaves require integration with the SGX SDK.

## Security capabilities at a glance

**Security capability**

**Description**

**What it protects**

**Enabled by default**

**User action**

**Hardware Root of Trust**

Ali-PRoT (Platform Root-of-Trust) chip

Hardware and firmware integrity

Yes

None

**Memory Encryption**

Default memory encryption

Data in memory against physical attacks

Yes

None

**Trusted Computing**

vTPM-based trusted boot

Boot integrity during instance startup

No

Select a [supported instance family](/help/en/ecs/user-guide/trusted-feature-for-security-enhanced-instances/)

**Confidential Computing**

Confidential VMs (Intel TDX)

Runtime data including CPU registers and memory

No

Select a supported instance family and enable TDX

**Confidential Computing**

Enclaves (Intel SGX, virtualization enclaves)

Trusted isolation for sensitive operations

No

Select a supported instance family

## Security architecture overview

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5552198671/CAEQUxiBgMCZsfHV3hkiIDljODNmY2U0NGU3YTQyZTY5ZmIzYzIyOTk1MmEyYjc43977639_20230906103619.674.svg)

## Hardware Root of Trust -- Ali-PRoT

Alibaba Cloud deploys the self-developed **Ali-PRoT (Platform Root-of-Trust) hardware security chip** on ECS hosts. This chip provides out-of-the-box hardware and firmware security without extra configuration. Its core capabilities include the following:

-   **Proactive firmware measurement**: Before the host starts, Ali-PRoT verifies the integrity of firmware such as BIOS (Basic Input/Output System) and BMC (Baseboard Management Controller). **Unlike traditional passive recording methods, Ali-PRoT proactively detects and blocks potential threats before the firmware executes.** Only verified servers are allowed to start, which ensures host security at the source.
    
-   **Runtime tamper-proofing**: While the host is running, Ali-PRoT continuously monitors firmware reads and writes. It blocks unauthorized access and modifications in real time to keep the business environment trusted.
    
-   **Hardware identity authentication**: Ali-PRoT uses the unique hardware identity provided by the chip, together with the cloud platform's security control system, to authenticate physical servers. This prevents unauthorized devices from accessing the cloud platform and enhances overall platform security.
    

## Default memory encryption

Memory encryption protects memory data against physical attacks and improves data security in the cloud. You can benefit from this protection without modifying your operating system or applications. The [g8i, general-purpose instance family](/help/en/ecs/user-guide/general-purpose-instance-families#title-g31-45k-si7), [c8i, compute-optimized instance family](/help/en/ecs/user-guide/overview-of-instance-families#c8i), and other [instance families](/help/en/ecs/user-guide/overview-of-instance-families#df2cd7816brdf) support memory encryption by default.

## Trusted computing

[Trusted instances](/help/en/ecs/user-guide/trusted-feature-for-security-enhanced-instances/) use the virtual Trusted Platform Module (vTPM) at the hypervisor layer as a Root of Trust. This enables trusted boot for ECS servers and verifies core components during instance startup to ensure that they have not been tampered with.

## Confidential computing

[Confidential computing](/help/en/ecs/user-guide/confidential-computing-capabilities/) uses CPU hardware encryption and isolation to provide a trusted execution environment (TEE). TEE protects data from unauthorized modification. You can also use remote attestation to verify that the cloud platform and instances are in the expected secure state.

ECS offers two approaches to confidential computing:

### Enclave-based security

Alibaba Cloud provides confidential computing capabilities based on Intel Software Guard Extensions (Intel SGX) 2.0 and Alibaba Cloud virtualization enclaves. This significantly reduces the Trusted Computing Base (TCB), which minimizes the potential attack surface and lets you build a more secure and trusted confidential environment. For more information, see [Build an SGX confidential computing environment](/help/en/ecs/user-guide/build-an-sgx-encrypted-computing-environment) and [Build an enclave confidential computing environment](/help/en/ecs/user-guide/build-a-confidential-computing-environment-by-using-enclave).

### Confidential VM security

Confidential VMs let you run sensitive workloads in the cloud with encrypted computing. This requires no code changes to your applications and helps protect your sensitive data. Alibaba Cloud provides Confidential VM capabilities based on Intel Trust Domain Extensions (Intel TDX). For more information, see [Build a TDX confidential computing environment](/help/en/ecs/user-guide/build-a-tdx-confidential-computing-environment).

## Best practices

-   [Build an end-to-end secure and distributed Spark data analytics application with BigDL PPML in a TDX instance](/help/en/ecs/user-guide/build-a-distributed-end-to-end-secure-apache-spark-big-data-analytics-application-based-on-bigdl-ppml-on-tdx-instances)
    
-   [Deploy TensorFlow Serving for online inference in a 7th-generation security-enhanced instance](/help/en/ecs/user-guide/deploy-the-tensorflow-serving-online-inference-service-on-a-security-enhanced-instance/)
    
-   [Deploy a PyTorch deep learning model in a 7th-generation security-enhanced instance](/help/en/ecs/user-guide/deploy-a-pytorch-deep-learning-model-on-a-security-enhanced-instance)
    
-   [Use the Enclave CLI to manage Alibaba Cloud virtualization enclave applications](/help/en/ecs/user-guide/use-the-enclave-cli-to-manage-ecs-instances/)
