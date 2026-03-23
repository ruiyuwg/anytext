Distributed Cloud Container Platform for Kubernetes (ACK One) allows you to use registered clusters to connect external Kubernetes clusters deployed in on-premises data centers or other cloud providers into Container Service for Kubernetes (ACK). This enables centralized management of clusters and resources, allowing rapid deployment of hybrid cloud environments. When computing resources in local data centers become constrained, you can create a node pool to scale out computing resources in the cloud, meeting dynamic business growth demands. This topic describes how to create custom scripts required to provision cloud node pools.

## Prerequisites

-   [An ACK One registered cluster is created](/help/en/ack/distributed-cloud-container-platform-for-kubernetes/user-guide/create-ack-one-registered-clusters) and an external Kubernetes cluster deployed in an on-premises data center is connected to the ACK One registered cluster.
    
-   The network of the external Kubernetes cluster is connected to the virtual private cloud (VPC) of the ACK One registered cluster. For more information, see [Scenario-based networking for VPC connections](/help/en/cen/getting-started/overview#concept-ppf-c3b-tdb).
    
-   You must import the proxy configuration of the external Kubernetes cluster to the ACK One registered cluster in private network mode. For more information, see [Associate an external Kubernetes cluster with an ACK One registered cluster](/help/en/ack/distributed-cloud-container-platform-for-kubernetes/user-guide/create-ack-one-registered-clusters#step-dl9-6s6-2vx).
    

## Procedure

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5142694471/CAEQLBiBgIC2vLuiixkiIDQ5OTAyZGI2ZGM3MzRkN2U4NTQzMjA0ZjFiZTBmYmFk4536399_20240718143455.658.svg)

**Note**

-   You can use a sample node script or create a custom script based on the actual environment and the conditions in the preceding figure.
    
-   The sample script supports only operating systems that use Yellowdog Updater, Modified (YUM) as the package manager.
    

### **Step 1 (A):** Add Alibaba Cloud environment variables to a custom script

1.  Check whether a node is a GPU-accelerated node. This step is optional.
    
    You can use the following script to check whether an Elastic Compute Service (ECS) node is a GPU-accelerated node.
    
    ```
    #!/bin/bash
    # Check whether Ispci is installed.
    if ! which lspci &>/dev/null; then
    	yum -y install pciutils
    fi
    
    # Check whether the node is equipped with a GPU.
    if lspci | grep -i nvidia &>/dev/null; then
    	echo "Install the relevant drivers because the node is a GPU-accelerated node." 
    fi
    ```
    
    Unlike regular ECS nodes, you must install drivers and device plug-ins for GPU-accelerate nodes. For more information, see [Manually update the NVIDIA driver of a node](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/manually-upgrade-the-nvidia-driver-of-a-node#df910d7024dyd).
    
2.  You must prepare a custom script to ensure that the node pool of the registered cluster can synchronize node status as normal for resource scheduling. The custom script needs to obtain environment variables issued by the registered cluster. The method used to obtain the environment variables depends on the way in which the external Kubernetes cluster is created. You can use the kubeadm or binary method to create a Kubernetes cluster.
    
    #### **The Kubernetes cluster is created by using the kubeadm method**
    
    The kubeadm method is recommended by Kubernetes, where Kubernetes clusters are set up using the official tool kubeadm. You must add the following content to the custom node script:
    
    ```
    ....
    
    ####### <Add the following content. 
    
    # Configure the node labels, taints, node name, and node provider ID. 
    KUBELET_CONFIG_FILE="/etc/sysconfig/kubelet"
    if [[ $ALIBABA_CLOUD_LABELS != "" ]];then
      option="--node-labels"
      if grep -- "${option}=" $KUBELET_CONFIG_FILE &> /dev/null;then
        sed -i "s@${option}=@${option}=${ALIBABA_CLOUD_LABELS},@g" $KUBELET_CONFIG_FILE
      elif grep "KUBELET_EXTRA_ARGS=" $KUBELET_CONFIG_FILE &> /dev/null;then
        sed -i "s@KUBELET_EXTRA_ARGS=@KUBELET_EXTRA_ARGS=${option}=${ALIBABA_CLOUD_LABELS} @g" $KUBELET_CONFIG_FILE
      else
        sed -i "/^\[Service\]/a\Environment=\"KUBELET_EXTRA_ARGS=${option}=${ALIBABA_CLOUD_LABELS}\"" $KUBELET_CONFIG_FILE
      fi
    fi
    
    if [[ $ALIBABA_CLOUD_TAINTS != "" ]];then
      option="--register-with-taints"
      if grep -- "${option}=" $KUBELET_CONFIG_FILE &> /dev/null;then
        sed -i "s@${option}=@${option}=${ALIBABA_CLOUD_TAINTS},@g" $KUBELET_CONFIG_FILE
      elif grep "KUBELET_EXTRA_ARGS=" $KUBELET_CONFIG_FILE &> /dev/null;then
        sed -i "s@KUBELET_EXTRA_ARGS=@KUBELET_EXTRA_ARGS=${option}=${ALIBABA_CLOUD_TAINTS} @g" $KUBELET_CONFIG_FILE
      else
        sed -i "/^\[Service\]/a\Environment=\"KUBELET_EXTRA_ARGS=${option}=${ALIBABA_CLOUD_TAINTS}\"" $KUBELET_CONFIG_FILE
      fi
    fi
    
    if [[ $ALIBABA_CLOUD_NODE_NAME != "" ]];then
      option="--hostname-override"
      if grep -- "${option}=" $KUBELET_CONFIG_FILE &> /dev/null;then
        sed -i "s@${option}=@${option}=${ALIBABA_CLOUD_NODE_NAME},@g" $KUBELET_CONFIG_FILE
      elif grep "KUBELET_EXTRA_ARGS=" $KUBELET_CONFIG_FILE &> /dev/null;then
        sed -i "s@KUBELET_EXTRA_ARGS=@KUBELET_EXTRA_ARGS=${option}=${ALIBABA_CLOUD_NODE_NAME} @g" $KUBELET_CONFIG_FILE
      else
        sed -i "/^\[Service\]/a\Environment=\"KUBELET_EXTRA_ARGS=${option}=${ALIBABA_CLOUD_NODE_NAME}\"" $KUBELET_CONFIG_FILE
      fi
    fi
    
    if [[ $ALIBABA_CLOUD_PROVIDER_ID != "" ]];then
      option="--provider-id"
      if grep -- "${option}=" $KUBELET_CONFIG_FILE &> /dev/null;then
        sed -i "s@${option}=@${option}=${ALIBABA_CLOUD_PROVIDER_ID},@g" $KUBELET_CONFIG_FILE
      elif grep "KUBELET_EXTRA_ARGS=" $KUBELET_CONFIG_FILE &> /dev/null;then
        sed -i "s@KUBELET_EXTRA_ARGS=@KUBELET_EXTRA_ARGS=${option}=${ALIBABA_CLOUD_PROVIDER_ID} @g" $KUBELET_CONFIG_FILE
      else
        sed -i "/^\[Service\]/a\Environment=\"KUBELET_EXTRA_ARGS=${option}=${ALIBABA_CLOUD_PROVIDER_ID}\"" $KUBELET_CONFIG_FILE
      fi
    fi
    
    ####### Add the preceding content. 
    
    # Restart the runtime and kubelet. 
    ....
    ```
    
    #### **The Kubernetes cluster is created by using the binary method**
    
    If your cluster is created by using a Kubernetes binary file, you must modify the boot configuration of the kubelet in the custom node script to obtain the environment variables. Typically, the `kubelet.service` file is stored in the `/usr/lib/systemd/system/` directory.
    
    ```
    cat >/usr/lib/systemd/system/kubelet.service <<EOF
    # Custom configurations are not shown. 
    ...
    [Service]
    ExecStart=/data0/kubernetes/bin/kubelet \\
      # Modify the following configuration. 
      --node-ip=${ALIBABA_CLOUD_NODE_NAME} \\
      --hostname-override=${ALIBABA_CLOUD_NODE_NAME} \\
      --node-labels=${ALIBABA_CLOUD_LABELS} \\
      --provider-id=${ALIBABA_CLOUD_PROVIDER_ID} \\
      --register-with-taints=${ALIBABA_CLOUD_TAINTS} \\
    
      ....
      --v=4
    Restart=on-failure
    RestartSec=5
    [Install]
    WantedBy=multi-user.target
    EOF
    ```
    

The following table describes the environment variables issued by the registered cluster.

**Environment variable**

**Description**

**Example**

**ALIBABA\_CLOUD\_PROVIDER\_ID**

The custom node script must obtain this environment variable. Otherwise, the registered cluster cannot run as normal.

ALIBABA\_CLOUD\_PROVIDER\_ID=cn-shenzhen.i-wz92ewt14n9wx9mo\*\*\*

**ALIBABA\_CLOUD\_NODE\_NAME**

The custom node script must obtain this environment variable. Otherwise, nodes in the node pool may run in an abnormal state.

ALIBABA\_CLOUD\_NODE\_NAME=cn-shenzhen.192.168.1.\*\*\*

**ALIBABA\_CLOUD\_LABELS**

The custom node script must obtain this environment variable. Otherwise, errors may occur during node pool management and workload scheduling between cloud and on-premises nodes.

ALIBABA\_CLOUD\_LABELS=alibabacloud.com/nodepool-id=np0e2031e952c4492bab32f512ce142\*\*\*,ack.aliyun.com=cc3df6d939b0d4463b493b82d0d670\*\*\*,alibabacloud.com/instance-id=i-wz960ockeekr3dok0\*\*\*,alibabacloud.com/external=true,workload=cpu

The workload=cpu label is a custom label defined in the node pool configuration. Other labels are system labels.

**ALIBABA\_CLOUD\_TAINTS**

The custom node script must obtain this environment variable. Otherwise, the taints added to the node pool do not take effect.

ALIBABA\_CLOUD\_TAINTS=workload=ack:NoSchedule

After you perform the preceding steps, proceed to [Step 2: Save and upload the script to the file server](#RLEu1).

### Step 1 (B): Add a node script

1.  Obtain the relevant system information.
    
    #### **The Kubernetes version of the cluster is 1.18 or later**
    
    -   Run the following command to query the Kubernetes version of the external cluster. The Kubernetes version will be specified in the environment variable `KUBE_VERSION` of the sample script in subsequent steps.
        
        ```
        kubectl get no $(kubectl get nodes -l node-role.kubernetes.io/control-plane -o json | jq -r '.items[0].metadata.name') -o json | jq -r '.status.nodeInfo.kubeletVersion'
        ```
        
        Expected output:
        
        ```
        v1.14.10
        ```
        
    -   Run the following command to query the runtime and runtime version of the external cluster. The runtime and runtime version will be specified in the environment variable `RUNTIME_VERSION` of the sample script in subsequent steps.
        
        ```
        kubectl get no $(kubectl get nodes -l node-role.kubernetes.io/control-plane -o json | jq -r '.items[0].metadata.name') -o json | jq -r '.status.nodeInfo.containerRuntimeVersion'
        ```
        
        Expected output:
        
        ```
        docker://18.6.3                     # Docker is used. 
        containerd://1.4.3                  # containerd is used.
        ```
        
    -   Run the following command to query the kubeadm command used to add nodes. The command will be specified in the environment variable `KUBEADM_JOIN_CMD` of the sample script in subsequent steps.
        
        ```
        # --ttl 0 is very important. Set the TTL to 0 (no expiration time) so that node pool auto scaling does not become invalid. 
        kubeadm token create --ttl 0 --print-join-command
        ```
        
        Expected output:
        
        ```
        kubeadm join 192.168.8.XXX:6443 --token k8xsq8.4oo8va9wcqpb***     --discovery-token-ca-cert-hash sha256:cb5fc894ab965dfbc4c194e1065869268f8845c3ec40f78f9021dde24610d*** 
        ```
        
    
    #### **The Kubernetes version of the cluster is earlier than 1.18**
    
    -   Run the following command to query the Kubernetes version of the external cluster. The Kubernetes version will be specified in the environment variable `KUBE_VERSION` of the sample script in subsequent steps.
        
        ```
        kubectl get no $(kubectl get nodes -l node-role.kubernetes.io/master -o json | jq -r '.items[0].metadata.name') -o json | jq -r '.status.nodeInfo.kubeletVersion'
        ```
        
        Expected output:
        
        ```
        v1.14.10
        ```
        
    -   Run the following command to query the runtime and runtime version of the external cluster. The runtime and runtime version will be specified in the environment variable `RUNTIME_VERSION` of the sample script in subsequent steps.
        
        ```
        kubectl get no $(kubectl get nodes -l node-role.kubernetes.io/master -o json | jq -r '.items[0].metadata.name') -o json | jq -r '.status.nodeInfo.containerRuntimeVersion'
        ```
        
        Expected output:
        
        ```
        docker://18.6.3                     # Docker is used. 
        containerd://1.4.3                  # containerd is used.
        ```
        
    -   Run the following command to query the kubeadm command used to add nodes. The command will be specified in the environment variable `KUBEADM_JOIN_CMD` of the sample script in subsequent steps.
        
        ```
        # --ttl 0 is very important. Set the TTL to 0 (no expiration time) so that node pool auto scaling does not become invalid. 
        kubeadm token create --ttl 0 --print-join-command
        ```
        
        Expected output:
        
        ```
        kubeadm join 192.168.8.XXX:6443 --token k8xsq8.4oo8va9wcqpb***     --discovery-token-ca-cert-hash sha256:cb5fc894ab965dfbc4c194e1065869268f8845c3ec40f78f9021dde24610d*** 
        ```
        
    
2.  Obtain the sample script.
    
    **Note**
    
    -   The sample script applies only to regular ECS nodes. For GPU-accelerated ECS nodes, [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm) to the R&D team.
        
    -   Specify the Kubernetes version, runtime, runtime version, and kubeadm command of the external cluster that you obtained in the environment variables of the sample script.
        
    
    #### Docker
    
    View code
    
    ```
    #!/bin/bash
    
    # The Kubernetes version of the external cluster. 
    export KUBE_VERSION=<KUBE_VERSION>     
    
    # The Docker version of the external cluster. 
    export RUNTIME_VERSION=<RUNTIME_VERSION>    
    
    # The kubeadm join command. 
    export KUBEADM_JOIN_CMD=<KUBEADM_JOIN_CMD>   
    
    # Disable the firewall. 
    systemctl stop firewalld
    systemctl disable firewalld
    systemctl is-enabled firewalld
    
    # Disable selinux. 
    sed -i "s/SELINUX=enforcing/SELINUX=disabled/g" /etc/selinux/config
    setenforce 0
    
    # Disable swap partitions. 
    sed -i '/swap/s/^/#/g' /etc/fstab
    swapoff -a
    
    
    # Configure kernel parameters. 
    cat > /etc/sysctl.d/Kubernetes.conf <<EOF
    net.bridge.bridge-nf-call-ip6tables = 1
    net.bridge.bridge-nf-call-iptables = 1
    net.ipv4.ip_forward = 1
    vm.swappiness = 0
    EOF
    
    sysctl --system
    
    
    # Install ipadmin. 
    yum -y install conntrack ipvsadm ipset jq iptables curl sysstat libseccomp wget vim net-tools git
    cat > /etc/modules-load.d/ipvs.conf <<EOF
    ip_vs
    ip_vs_rr
    ip_vs_wrr
    ip_vs_sh
    nf_conntrack
    EOF
    
    systemctl enable --now systemd-modules-load
    
    # Configure the Docker YUM source. 
    yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
    
    # Install dependent components and import the YUM source provided by Docker. 
    yum install -y yum-utils device-mapper-persistent-data lvm2
    
    # View the version that you can install. 
    yum list docker-ce --showduplicates | sort -r
    
    # Install the latest DFocker version. 
    yum install -y docker-ce-$RUNTIME_VERSION docker-ce-cli-$RUNTIME_VERSION containerd.io
    
    ## Create /etc/docker directory.
    mkdir /etc/docker
    
    # Setup daemon.
    cat > /etc/docker/daemon.json <<EOF
    {
      "exec-opts": ["native.cgroupdriver=systemd"],
      "log-driver": "json-file",
      "log-opts": {
        "max-size": "100m"
      },
      "storage-driver": "overlay2",
      "storage-opts": [
        "overlay2.override_kernel_check=true"
      ],
      "registry-mirrors": ["https://docker.mirrors.ustc.edu.cn"]
    }
    EOF
    
    mkdir -p /etc/systemd/system/docker.service.d
    
    # Restart Docker.
    systemctl daemon-reload
    systemctl restart docker
    systemctl enable docker
    
    
    # Install Kubernetes. 
    cat >/etc/yum.repos.d/kubernetes.repo <<EOF
    [kubernetes]
    name=Kubernetes
    baseurl=https://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64/
    enabled=1
    gpgcheck=0
    repo_gpgcheck=0
    gpgkey=https://mirrors.aliyun.com/kubernetes/yum/doc/yum-key.gpg https://mirrors.aliyun.com/kubernetes/yum/doc/rpm-package-key.gpg
    EOF
    
    yum install -y kubelet-$KUBE_VERSION kubeadm-$KUBE_VERSION kubectl-$KUBE_VERSION --disableexcludes=kubernetes
    
    
    # Configure kubelet.service. 
    cat >/etc/systemd/system/kubelet.service <<EOF
    # ! IMPORTANT !
    # This configuration is managed and generated by ACK
    # please do not edit it to avoid unexpected failures
    
    [Unit]
    Description=kubelet: The Kubernetes Node Agent
    Documentation=http://kubernetes.io/docs/
    
    [Service]
    ExecStart=/usr/bin/kubelet
    Restart=always
    StartLimitInterval=0
    RestartSec=10
    
    [Install]
    WantedBy=multi-user.target
    EOF
    
    # <<< The environment variables of the registered cluster. Do not delete the settings. 
    # Configure the node labels, taints, node name, and node provider ID. 
    KUBELET_CONFIG_FILE="/etc/sysconfig/kubelet"
    if [[ $ALIBABA_CLOUD_LABELS != "" ]];then
      option="--node-labels"
      if grep -- "${option}=" $KUBELET_CONFIG_FILE &> /dev/null;then
        sed -i "s@${option}=@${option}=${ALIBABA_CLOUD_LABELS},@g" $KUBELET_CONFIG_FILE
      elif grep "KUBELET_EXTRA_ARGS=" $KUBELET_CONFIG_FILE &> /dev/null;then
        sed -i "s@KUBELET_EXTRA_ARGS=@KUBELET_EXTRA_ARGS=${option}=${ALIBABA_CLOUD_LABELS} @g" $KUBELET_CONFIG_FILE
      else
        sed -i "/^\[Service\]/a\Environment=\"KUBELET_EXTRA_ARGS=${option}=${ALIBABA_CLOUD_LABELS}\"" $KUBELET_CONFIG_FILE
      fi
    fi
    
    if [[ $ALIBABA_CLOUD_TAINTS != "" ]];then
      option="--register-with-taints"
      if grep -- "${option}=" $KUBELET_CONFIG_FILE &> /dev/null;then
        sed -i "s@${option}=@${option}=${ALIBABA_CLOUD_TAINTS},@g" $KUBELET_CONFIG_FILE
      elif grep "KUBELET_EXTRA_ARGS=" $KUBELET_CONFIG_FILE &> /dev/null;then
        sed -i "s@KUBELET_EXTRA_ARGS=@KUBELET_EXTRA_ARGS=${option}=${ALIBABA_CLOUD_TAINTS} @g" $KUBELET_CONFIG_FILE
      else
        sed -i "/^\[Service\]/a\Environment=\"KUBELET_EXTRA_ARGS=${option}=${ALIBABA_CLOUD_TAINTS}\"" $KUBELET_CONFIG_FILE
      fi
    fi
    
    if [[ $ALIBABA_CLOUD_NODE_NAME != "" ]];then
      option="--hostname-override"
      if grep -- "${option}=" $KUBELET_CONFIG_FILE &> /dev/null;then
        sed -i "s@${option}=@${option}=${ALIBABA_CLOUD_NODE_NAME},@g" $KUBELET_CONFIG_FILE
      elif grep "KUBELET_EXTRA_ARGS=" $KUBELET_CONFIG_FILE &> /dev/null;then
        sed -i "s@KUBELET_EXTRA_ARGS=@KUBELET_EXTRA_ARGS=${option}=${ALIBABA_CLOUD_NODE_NAME} @g" $KUBELET_CONFIG_FILE
      else
        sed -i "/^\[Service\]/a\Environment=\"KUBELET_EXTRA_ARGS=${option}=${ALIBABA_CLOUD_NODE_NAME}\"" $KUBELET_CONFIG_FILE
      fi
    fi
    
    if [[ $ALIBABA_CLOUD_PROVIDER_ID != "" ]];then
      option="--provider-id"
      if grep -- "${option}=" $KUBELET_CONFIG_FILE &> /dev/null;then
        sed -i "s@${option}=@${option}=${ALIBABA_CLOUD_PROVIDER_ID},@g" $KUBELET_CONFIG_FILE
      elif grep "KUBELET_EXTRA_ARGS=" $KUBELET_CONFIG_FILE &> /dev/null;then
        sed -i "s@KUBELET_EXTRA_ARGS=@KUBELET_EXTRA_ARGS=${option}=${ALIBABA_CLOUD_PROVIDER_ID} @g" $KUBELET_CONFIG_FILE
      else
        sed -i "/^\[Service\]/a\Environment=\"KUBELET_EXTRA_ARGS=${option}=${ALIBABA_CLOUD_PROVIDER_ID}\"" $KUBELET_CONFIG_FILE
      fi
    fi
    #  The environment variables of the registered cluster. Do not delete the settings.>>> 
    
    
    systemctl enable kubelet
    systemctl start kubelet
    
    # Run the kubeadm join command. 
    $KUBEADM_JOIN_CMD
    ```
    
    #### containerd
    
    View code
    
    ```
    #!/bin/bash
    
    # The Kubernetes version of the external cluster. 
    export KUBE_VERSION=<KUBE_VERSION>        
    
    # The containerd version of the external cluster. 
    export RUNTIME_VERSION=<RUNTIME_VERSION>  
    
    # The kubeadm join command. 
    export KUBEADM_JOIN_CMD=<KUBEADM_JOIN_CMD>   
    
    
    # Disable the firewall. 
    systemctl stop firewalld
    systemctl disable firewalld
    systemctl is-enabled firewalld
    
    # Disable selinux. 
    sed -i "s/SELINUX=enforcing/SELINUX=disabled/g" /etc/selinux/config
    setenforce 0
    
    # Disable swap partitions. 
    sed -i '/swap/s/^/#/g' /etc/fstab
    swapoff -a
    
    # Configure kernel parameters. 
    cat > /etc/sysctl.d/Kubernetes.conf <<EOF
    net.bridge.bridge-nf-call-ip6tables = 1
    net.bridge.bridge-nf-call-iptables = 1
    net.ipv4.ip_forward = 1
    vm.swappiness = 0
    EOF
    
    sysctl --system
    
    
    # Install ipadmin. 
    yum -y install conntrack ipvsadm ipset jq iptables curl sysstat libseccomp wget vim net-tools git
    cat > /etc/modules-load.d/ipvs.conf <<EOF
    ip_vs
    ip_vs_rr
    ip_vs_wrr
    ip_vs_sh
    nf_conntrack
    EOF
    
    systemctl enable --now systemd-modules-load
    
    # Install and configure containerd. 
    yum -y install yum-utils device-mapper-persistent-data lvm2
    
    yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
    # Configure containerd. 
    cat >>/etc/modules-load.d/containerd.conf <<EOF
    overlay
    br_netfilter
    EOF
    # Immediately load the overlay module. 
    modprobe overlay
    # Immediately load the br_netfilter module. 
    modprobe br_netfilter
    # Install containerd. 
    yum install containerd.io-$RUNTIME_VERSION -y
    
    cat >>/etc/crictl.yaml <<EOF
    runtime-endpoint: unix:///run/containerd/containerd.sock
    image-endpoint: unix:///run/containerd/containerd.sock
    timeout: 10
    debug: false
    pull-image-on-create: false
    disable-pull-on-run: false
    EOF
    
    
    mkdir -p /etc/containerd
    containerd config default > /etc/containerd/config.toml
    # Use systemd to manage cgroups. 
    sed -i '/SystemdCgroup/s/false/true/g' /etc/containerd/config.toml
    # Pull a sandbox image from Alibaba Cloud. 
    sed -i '/sandbox_image/s/registry.k8s.io/registry.aliyuncs.com\/google_containers/g' /etc/containerd/config.toml
    sed -i 's#sandbox_image = "registry.k8s.io/pause:3.6"#sandbox_image = "registry.aliyuncs.com/google_containers/pause:3.9"#' /etc/containerd/config.toml
    # Start containerd. 
    systemctl enable containerd
    systemctl start containerd
    
    
    # Install Kubernetes. 
    cat >/etc/yum.repos.d/kubernetes.repo <<EOF
    [kubernetes]
    name=Kubernetes
    baseurl=https://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64/
    enabled=1
    gpgcheck=0
    repo_gpgcheck=0
    gpgkey=https://mirrors.aliyun.com/kubernetes/yum/doc/yum-key.gpg https://mirrors.aliyun.com/kubernetes/yum/doc/rpm-package-key.gpg
    EOF
    
    yum -y install kubeadm-$KUBE_VERSION kubectl-$KUBE_VERSION kubelet-$KUBE_VERSION
    
    
    # Configure kubelet.service. 
    cat >/etc/systemd/system/kubelet.service <<EOF
    # ! IMPORTANT !
    # This configuration is managed and generated by ACK
    # please do not edit it to avoid unexpected failures
    
    [Unit]
    Description=kubelet: The Kubernetes Node Agent
    Documentation=http://kubernetes.io/docs/
    
    [Service]
    ExecStart=/usr/bin/kubelet
    Restart=always
    StartLimitInterval=0
    RestartSec=10
    
    [Install]
    WantedBy=multi-user.target
    EOF
    
    # Create kubelet.service.d. 
    #mkdir -p /etc/systemd/system/kubelet.service.d
    
    
    # <<< The environment variables of the registered cluster. Do not delete the settings. 
    # Configure the node labels, taints, node name, and node provider ID. 
    KUBELET_CONFIG_FILE="/etc/sysconfig/kubelet"
    if [[ $ALIBABA_CLOUD_LABELS != "" ]];then
      option="--node-labels"
      if grep -- "${option}=" $KUBELET_CONFIG_FILE &> /dev/null;then
        sed -i "s@${option}=@${option}=${ALIBABA_CLOUD_LABELS},@g" $KUBELET_CONFIG_FILE
      elif grep "KUBELET_EXTRA_ARGS=" $KUBELET_CONFIG_FILE &> /dev/null;then
        sed -i "s@KUBELET_EXTRA_ARGS=@KUBELET_EXTRA_ARGS=${option}=${ALIBABA_CLOUD_LABELS} @g" $KUBELET_CONFIG_FILE
      else
        sed -i "/^\[Service\]/a\Environment=\"KUBELET_EXTRA_ARGS=${option}=${ALIBABA_CLOUD_LABELS}\"" $KUBELET_CONFIG_FILE
      fi
    fi
    
    if [[ $ALIBABA_CLOUD_TAINTS != "" ]];then
      option="--register-with-taints"
      if grep -- "${option}=" $KUBELET_CONFIG_FILE &> /dev/null;then
        sed -i "s@${option}=@${option}=${ALIBABA_CLOUD_TAINTS},@g" $KUBELET_CONFIG_FILE
      elif grep "KUBELET_EXTRA_ARGS=" $KUBELET_CONFIG_FILE &> /dev/null;then
        sed -i "s@KUBELET_EXTRA_ARGS=@KUBELET_EXTRA_ARGS=${option}=${ALIBABA_CLOUD_TAINTS} @g" $KUBELET_CONFIG_FILE
      else
        sed -i "/^\[Service\]/a\Environment=\"KUBELET_EXTRA_ARGS=${option}=${ALIBABA_CLOUD_TAINTS}\"" $KUBELET_CONFIG_FILE
      fi
    fi
    
    if [[ $ALIBABA_CLOUD_NODE_NAME != "" ]];then
      option="--hostname-override"
      if grep -- "${option}=" $KUBELET_CONFIG_FILE &> /dev/null;then
        sed -i "s@${option}=@${option}=${ALIBABA_CLOUD_NODE_NAME},@g" $KUBELET_CONFIG_FILE
      elif grep "KUBELET_EXTRA_ARGS=" $KUBELET_CONFIG_FILE &> /dev/null;then
        sed -i "s@KUBELET_EXTRA_ARGS=@KUBELET_EXTRA_ARGS=${option}=${ALIBABA_CLOUD_NODE_NAME} @g" $KUBELET_CONFIG_FILE
      else
        sed -i "/^\[Service\]/a\Environment=\"KUBELET_EXTRA_ARGS=${option}=${ALIBABA_CLOUD_NODE_NAME}\"" $KUBELET_CONFIG_FILE
      fi
    fi
    
    if [[ $ALIBABA_CLOUD_PROVIDER_ID != "" ]];then
      option="--provider-id"
      if grep -- "${option}=" $KUBELET_CONFIG_FILE &> /dev/null;then
        sed -i "s@${option}=@${option}=${ALIBABA_CLOUD_PROVIDER_ID},@g" $KUBELET_CONFIG_FILE
      elif grep "KUBELET_EXTRA_ARGS=" $KUBELET_CONFIG_FILE &> /dev/null;then
        sed -i "s@KUBELET_EXTRA_ARGS=@KUBELET_EXTRA_ARGS=${option}=${ALIBABA_CLOUD_PROVIDER_ID} @g" $KUBELET_CONFIG_FILE
      else
        sed -i "/^\[Service\]/a\Environment=\"KUBELET_EXTRA_ARGS=${option}=${ALIBABA_CLOUD_PROVIDER_ID}\"" $KUBELET_CONFIG_FILE
      fi
    fi
    # The environment variables of the registered cluster. Do not delete the settings.>>> 
    
    
    systemctl enable kubelet
    systemctl start kubelet
    
    
    # Run the kubeadm join command. 
    $KUBEADM_JOIN_CMD
    ```
    

### **Step 2: Save and upload the script to the file server**

You must upload the custom node script or the sample node script that you modified to the file server, such as an Object Storage Service (OSS) bucket. Example: `https://kubelet-****.oss-cn-hangzhou-internal.aliyuncs.com/join-ecs-nodes.sh`.

### **Step 3:** Modify the ack-cluster-agent configuration

**Important**

You must complete this step before you can create a node pool. Otherwise, the custom script cannot be obtained when you scale out the node pool. Consequently, the scale-out operation fails.

After the script is uploaded and the path of the script is recorded, specify the path in the `addNodeScriptPath` field of the `ack-agent-config` configuration in the `kube-system` namespace.

```
# Use kubectl to modify the ack-agent-config configuration. 
kubectl edit cm ack-agent-config -n kube-system

# Modify the addNodeScriptPath field as follows: 
apiVersion: v1
data:
  addNodeScriptPath: https://kubelet-****.oss-cn-hangzhou-internal.aliyuncs.com/join-ecs-nodes.sh
kind: ConfigMap
metadata:
  name: ack-agent-config
  namespace: kube-system
```
