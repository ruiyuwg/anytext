To shorten the duration for a node to reach the Ready state on the cloud, we recommend that you pre-install the necessary software packages using custom images to significantly reduce the required time and improve system startup efficiency. This topic describes how to build an elastic node pool for a registered cluster with a custom image.

## **Prerequisites**

-   A registered cluster is created and a self-managed Kubernetes cluster is connected to the registered cluster. For more information, see [Create a registered cluster](/help/en/ack/distributed-cloud-container-platform-for-kubernetes/user-guide/create-ack-one-registered-clusters).
    
-   The network of the self-managed Kubernetes cluster is connected to the virtual private cloud (VPC) of the registered cluster. For more information, see [Scenario-based networking for VPC connections](/help/en/cen/getting-started/overview#concept-ppf-c3b-tdb).
    
-   Object Storage Service (OSS) is activated and an OSS bucket is created. For more information, see [Activate OSS](/help/en/oss/getting-started/activate-oss#task-njz-hf4-tdb) and [Create a bucket](/help/en/oss/user-guide/create-a-bucket-4).
    
-   A kubectl client is connected to the registered cluster. For more information, see [Obtain the kubeconfig file of a cluster and use kubectl to connect to the cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/obtain-the-kubeconfig-file-of-a-cluster-and-use-kubectl-to-connect-to-the-cluster#task-2076136).
    

## Steps

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5050771471/CAEQLBiBgID2kLLlihkiIDMyNDc2ZDM3MzEzMjRmYWJhYmM2OTdlNWM3ZDU2ZGM44579677_20240808095115.152.svg)

**Note**

-   This example uses the CentOS 7.9 operating system to build an elastic node pool with a custom image. The Kubernetes cluster version 1.28.3 is connected by using binary files.
    
-   Proceed to [Step 3](#IBHmx) if you have an existing custom image ready to use.
    

### Step 1: Create a cloud node pool and add nodes to it

1.  Select an OSS bucket, create a file named join-ecs-node.sh, copy the following content to the file and upload it.
    
    ```
    echo "The node providerid is $ALIBABA_CLOUD_PROVIDER_ID"
    echo "The node name is $ALIBABA_CLOUD_NODE_NAME"
    echo "The node labels are $ALIBABA_CLOUD_LABELS"
    echo "The node taints are $ALIBABA_CLOUD_TAINTS"
    ```
    
2.  Obtain the URL of the join-ecs-node.sh file (you can use a signed URL) and modify the custom configuration script in the cluster.
    
    1.  Run the following command to edit ack-agent-config:
        
        ```
        kubectl edit cm ack-agent-config -n kube-system
        ```
        
    2.  Modify the addNodeScriptPath field. The updated configuration is as follows:
        
        ```
        apiVersion: v1
        data:
          addNodeScriptPath: https://kubelet-****.oss-cn-hangzhou-internal.aliyuncs.com/join-ecs-nodes.sh
        kind: ConfigMap
        metadata:
          name: ack-agent-config
          namespace: kube-system
        ```
        
3.  Create a cloud node pool named cloud-test and set the **Expected Nodes** parameter to 1. For more information, see [Create and scale out a node pool](/help/en/ack/distributed-cloud-container-platform-for-kubernetes/user-guide/create-and-manage-node-pools).
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4575604271/p832285.png)
    
    **Important**
    
    A new node is in the Failed state, because it was not initialized with setup tasks, such as installing node software packages. Additionally, make sure that you can log on to the node through SSH for initialization in subsequent steps.
    

### Step 2: Configure the node and export a custom image

1.  Log on to the node and run the following command to check the node information:
    
    ```
    cat /var/log/acs/init.log
    ```
    
    Expected output:
    
    ```
    The node providerid is cn-zhangjiakou.i-xxxxx
    The node name is cn-zhangjiakou.192.168.66.xx
    The node labels are alibabacloud.com/nodepool-id=npf9fbxxxxxx,ack.aliyun.com=c22b1a2e122ff4fde85117de4xxxxxx,alibabacloud.com/instance-id=i-8vb7m7nt3dxxxxxxx,alibabacloud.com/external=true
    The node taints are
    ```
    
    The expected output indicates that the custom script can obtain node information. Record this information and add it to the startup parameters of the kubelet in the following steps.
    
2.  Run the following command to configure the base environment:
    
    ```
    # Install tool packages.
    yum update -y && yum -y install  wget psmisc vim net-tools nfs-utils telnet yum-utils device-mapper-persistent-data lvm2 git tar curl
    
    # Disable the firewall.
    systemctl disable --now firewalld
    
    # Disable SELinux.
    setenforce 0
    sed -i 's#SELINUX=enforcing#SELINUX=disabled#g' /etc/selinux/config
    
    # Disable swap partition.
    sed -ri 's/.*swap.*/#&/' /etc/fstab
    swapoff -a && sysctl -w vm.swappiness=0
    
    # Network configuration.
    systemctl disable --now NetworkManager
    systemctl start network && systemctl enable network
    
    # Time synchronization.
    ln -svf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
    yum install ntpdate -y
    ntpdate ntp.aliyun.com
    
    # Configure ulimit.
    ulimit -SHn 65535
    cat >> /etc/security/limits.conf <<EOF
    * soft nofile 655360
    * hard nofile 131072
    * soft nproc 655350
    * hard nproc 655350
    * seft memlock unlimited
    * hard memlock unlimitedd
    EOF
    ```
    
    **Note**
    
    After you complete the preceding environment configuration, upgrade the kernel to version 4.18 or later and install ipvsadm.
    
3.  Install containerd.
    
    1.  Run the following command to download the network plug-in and containerd packages:
        
        ```
        wget https://github.com/containernetworking/plugins/releases/download/v1.3.0/cni-plugins-linux-amd64-v1.3.0.tgz
        mkdir -p /etc/cni/net.d /opt/cni/bin 
        # Extract the cni binary package
        tar xf cni-plugins-linux-amd64-v*.tgz -C /opt/cni/bin/
        wget https://github.com/containerd/containerd/releases/download/v1.7.8/containerd-1.7.8-linux-amd64.tar.gz
        tar -xzf cri-containerd-cni-*-linux-amd64.tar.gz -C /
        ```
        
    2.  Run the following command to create the startup configuration file for the service:
        
        ```
        cat > /etc/systemd/system/containerd.service <<EOF
        [Unit]
        Description=containerd container runtime
        Documentation=https://containerd.io
        After=network.target local-fs.target
        
        [Service]
        ExecStartPre=-/sbin/modprobe overlay
        ExecStart=/usr/local/bin/containerd
        Type=notify
        Delegate=yes
        KillMode=process
        Restart=always
        RestartSec=5
        LimitNPROC=infinity
        LimitCORE=infinity
        LimitNOFILE=infinity
        TasksMax=infinity
        OOMScoreAdjust=-999
        
        [Install]
        WantedBy=multi-user.target
        EOF
        ```
        
    3.  Run the following command to configure the modules required by containerd:
        
        ```
        cat <<EOF | sudo tee /etc/modules-load.d/containerd.conf
        overlay
        br_netfilter
        EOF
        systemctl restart systemd-modules-load.service
        ```
        
    4.  Run the following command to configure the kernel required by containerd:
        
        ```
        cat <<EOF | sudo tee /etc/sysctl.d/99-kubernetes-cri.conf
        net.bridge.bridge-nf-call-iptables  = 1
        net.ipv4.ip_forward                 = 1
        net.bridge.bridge-nf-call-ip6tables = 1
        EOF
        
        # Load the kernel
        sysctl --system
        ```
        
    5.  Run the following command to create the configuration file for the containerd:
        
        ```
        mkdir -p /etc/containerd
        containerd config default | tee /etc/containerd/config.toml
        
        # Modify the containerd configuration file
        sed -i "s#SystemdCgroup\ \=\ false#SystemdCgroup\ \=\ true#g" /etc/containerd/config.toml
        cat /etc/containerd/config.toml | grep SystemdCgroup
        sed -i "s#registry.k8s.io#m.daocloud.io/registry.k8s.io#g" /etc/containerd/config.toml
        cat /etc/containerd/config.toml | grep sandbox_image
        sed -i "s#config_path\ \=\ \"\"#config_path\ \=\ \"/etc/containerd/certs.d\"#g" /etc/containerd/config.toml
        cat /etc/containerd/config.toml | grep certs.d
        
        # Configure the accelerator
        mkdir /etc/containerd/certs.d/docker.io -pv
        cat > /etc/containerd/certs.d/docker.io/hosts.toml << EOF
        server = "https://docker.io"
        [host."https://hub-mirror.c.163.com"]
          capabilities = ["pull", "resolve"]
        EOF
        ```
        
    6.  Run the following command to set containerd to run on system startup:
        
        ```
        systemctl daemon-reload
        # Used to reload systemd-managed unit files. When you add or modify a unit file (such as a .service file, .socket file, etc.), you need to run this command to refresh systemd configuration of the file.
        
        systemctl enable --now containerd.service
        systemctl start containerd.service
        systemctl status containerd.service
        ```
        
    7.  Run the following command to configure the crictl command:
        
        ```
        wget https://mirrors.chenby.cn/https://github.com/kubernetes-sigs/cri-tools/releases/download/v1.28.0/crictl-v1.28.0-linux-amd64.tar.gz
        tar xf crictl-v*-linux-amd64.tar.gz -C /usr/bin/
        # Generate the configuration file
        cat > /etc/crictl.yaml <<EOF
        runtime-endpoint: unix:///run/containerd/containerd.sock
        image-endpoint: unix:///run/containerd/containerd.sock
        timeout: 10
        debug: false
        EOF
        
        # Test
        systemctl restart  containerd
        crictl info
        ```
        
4.  Install kubelet and kube-proxy.
    
    1.  Obtain the binary files, log on to the Master node, and then copy the binary files to the node.
        
        ```
        scp /usr/local/bin/kube{let,-proxy} $NODEIP:/usr/local/bin/
        ```
        
    2.  Obtain the certificates and run the following command to create the certificate storage directory locally:
        
        ```
        mkdir -p /etc/kubernetes/pki
        ```
        
        Log on to the master node and copy the certificates to the node.
        
        ```
        for FILE in pki/ca.pem pki/ca-key.pem pki/front-proxy-ca.pem bootstrap-kubelet.kubeconfig kube-proxy.kubeconfig; 
          do scp /etc/kubernetes/$FILE $NODE:/etc/kubernetes/${FILE}; done
        ```
        
    3.  Run the following command to configure the kubelet Service. Fill in variables related to the node pool obtained in [Step 2](#rCHKP).
        
        ```
        mkdir -p /var/lib/kubelet /var/log/kubernetes /etc/systemd/system/kubelet.service.d /etc/kubernetes/manifests/
        
        # Configure kubelet service on all k8s nodes
        cat > /usr/lib/systemd/system/kubelet.service << EOF
        
        [Unit]
        Description=Kubernetes Kubelet
        Documentation=https://github.com/kubernetes/kubernetes
        After=network-online.target firewalld.service containerd.service
        Wants=network-online.target
        Requires=containerd.service
        
        [Service]
        ExecStart=/usr/local/bin/kubelet \\
            --node-ip=${ALIBABA_CLOUD_NODE_NAME} \\
            --hostname-override=${ALIBABA_CLOUD_NODE_NAME} \\
            --node-labels=${ALIBABA_CLOUD_LABELS} \\
            --provider-id=${ALIBABA_CLOUD_PROVIDER_ID} \\
            --register-with-taints=${ALIBABA_CLOUD_TAINTS} \\
            --bootstrap-kubeconfig=/etc/kubernetes/bootstrap-kubelet.kubeconfig  \\
            --kubeconfig=/etc/kubernetes/kubelet.kubeconfig \\
            --config=/etc/kubernetes/kubelet-conf.yml \\
            --container-runtime-endpoint=unix:///run/containerd/containerd.sock
        
        [Install]
        WantedBy=multi-user.target
        EOF
        ```
        
    4.  Run the following command to create the startup configuration file for the kubelet:
        
        ```
        cat > /etc/kubernetes/kubelet-conf.yml <<EOF
        apiVersion: kubelet.config.k8s.io/v1beta1
        kind: KubeletConfiguration
        address: 0.0.0.0
        port: 10250
        readOnlyPort: 10255
        authentication:
          anonymous:
            enabled: false
          webhook:
            cacheTTL: 2m0s
            enabled: true
          x509:
            clientCAFile: /etc/kubernetes/pki/ca.pem
        authorization:
          mode: Webhook
          webhook:
            cacheAuthorizedTTL: 5m0s
            cacheUnauthorizedTTL: 30s
        cgroupDriver: systemd
        cgroupsPerQOS: true
        clusterDNS:
        - 10.96.0.10
        clusterDomain: cluster.local
        containerLogMaxFiles: 5
        containerLogMaxSize: 10Mi
        contentType: application/vnd.kubernetes.protobuf
        cpuCFSQuota: true
        cpuManagerPolicy: none
        cpuManagerReconcilePeriod: 10s
        enableControllerAttachDetach: true
        enableDebuggingHandlers: true
        enforceNodeAllocatable:
        - pods
        eventBurst: 10
        eventRecordQPS: 5
        evictionHard:
          imagefs.available: 15%
          memory.available: 100Mi
          nodefs.available: 10%
          nodefs.inodesFree: 5%
        evictionPressureTransitionPeriod: 5m0s
        failSwapOn: true
        fileCheckFrequency: 20s
        hairpinMode: promiscuous-bridge
        healthzBindAddress: 127.0.0.1
        healthzPort: 10248
        httpCheckFrequency: 20s
        imageGCHighThresholdPercent: 85
        imageGCLowThresholdPercent: 80
        imageMinimumGCAge: 2m0s
        iptablesDropBit: 15
        iptablesMasqueradeBit: 14
        kubeAPIBurst: 10
        kubeAPIQPS: 5
        makeIPTablesUtilChains: true
        maxOpenFiles: 1000000
        maxPods: 110
        nodeStatusUpdateFrequency: 10s
        oomScoreAdj: -999
        podPidsLimit: -1
        registryBurst: 10
        registryPullQPS: 5
        resolvConf: /etc/resolv.conf
        rotateCertificates: true
        runtimeRequestTimeout: 2m0s
        serializeImagePulls: true
        staticPodPath: /etc/kubernetes/manifests
        streamingConnectionIdleTimeout: 4h0m0s
        syncFrequency: 1m0s
        volumeStatsAggPeriod: 1m0s
        EOF
        ```
        
    5.  Run the following command to start the kubelet:
        
        ```
        systemctl daemon-reload
        # Used to reload systemd-managed unit files. When you add or modify a unit file (such as a .service file, .socket file, etc.), you need to run this command to refresh systemd's configuration of the file.
        
        systemctl enable --now kubelet.service
        systemctl start kubelet.service
        systemctl status kubelet.service
        ```
        
    6.  Run the following command to check the cluster information:
        
        ```
        kubectl  get node
        ```
        
    7.  Log on to the master node and obtain the KubeConfig required by kube-proxy.
        
        ```
        scp /etc/kubernetes/kube-proxy.kubeconfig $NODE:/etc/kubernetes/kube-proxy.kubeconfig
        ```
        
    8.  Run the following command to add the configuration for the kube-proxy Service:
        
        ```
        cat >  /usr/lib/systemd/system/kube-proxy.service << EOF
        [Unit]
        Description=Kubernetes Kube Proxy
        Documentation=https://github.com/kubernetes/kubernetes
        After=network.target
        
        [Service]
        ExecStart=/usr/local/bin/kube-proxy \\
          --config=/etc/kubernetes/kube-proxy.yaml \\
          --v=2
        Restart=always
        RestartSec=10s
        
        [Install]
        WantedBy=multi-user.target
        
        EOF
        ```
        
    9.  Run the following command to add the startup configuration for the kube-proxy:
        
        ```
        cat > /etc/kubernetes/kube-proxy.yaml << EOF
        apiVersion: kubeproxy.config.k8s.io/v1alpha1
        bindAddress: 0.0.0.0
        clientConnection:
          acceptContentTypes: ""
          burst: 10
          contentType: application/vnd.kubernetes.protobuf
          kubeconfig: /etc/kubernetes/kube-proxy.kubeconfig
          qps: 5
        clusterCIDR: 172.16.0.0/12,fc00:2222::/112
        configSyncPeriod: 15m0s
        conntrack:
          max: null
          maxPerCore: 32768
          min: 131072
          tcpCloseWaitTimeout: 1h0m0s
          tcpEstablishedTimeout: 24h0m0s
        enableProfiling: false
        healthzBindAddress: 0.0.0.0:10256
        hostnameOverride: ""
        iptables:
          masqueradeAll: false
          masqueradeBit: 14
          minSyncPeriod: 0s
          syncPeriod: 30s
        ipvs:
          masqueradeAll: true
          minSyncPeriod: 5s
          scheduler: "rr"
          syncPeriod: 30s
        kind: KubeProxyConfiguration
        metricsBindAddress: 127.0.0.1:10249
        mode: "ipvs"
        nodePortAddresses: null
        oomScoreAdj: -999
        portRange: ""
        udpIdleTimeout: 250ms
        EOF
        ```
        
    10.  Run the following command to start kube-proxy:
         
         ```
         systemctl daemon-reload
         # Used to reload systemd-managed unit files. When you add or modify a unit file (such as a .service file, .socket file, etc.), you need to run this command to refresh systemd configuration of the file.
         
         systemctl enable --now kube-proxy.service
         systemctl restart kube-proxy.service
         systemctl status kube-proxy.service
         ```
         
5.  Synchronize the node pool status.
    
    1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left-side navigation pane, click **Clusters**.
        
    2.  On the **Clusters** page, find the cluster that you want to manage and click its name. In the left-side pane, choose **Nodes** > **Node Pools**.
        
    3.  On the right side of the **Node Pools** page, click **Sync Node Pool**. Wait until the synchronization is completed and you should see no nodes are in the Failure state.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4575604271/p832546.png)
        
6.  Export the custom image.
    
    1.  Log on to the [ECS console](https://ecs.console.alibabacloud.com).
        
    2.  In the left-side navigation pane, choose **Instances & Images** > **Instances**.
        
    3.  Click the **Instance ID**, then go to the **Instance Details** tab, and click **Create Custom Image**.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4575604271/p832298.png)
        
    4.  In the left-side navigation pane, choose **Instances & Images** > **Images**.
        
    5.  On the images page, you should see the created **Custom Image** with the **Status** column as **Available**.
        

### Step 3: Use the custom image to modify or create a cloud node pool

**Note**

If you used an existing custom image and skipped Step 1 and Step 2, you must use the custom image to create the node pool first. For more information, see [Create and manage a node pool](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-node-pool#2b67791750wjh)

1.  On the **Clusters** page, find the cluster that you want to manage and click its name. In the left-side pane, choose **Nodes** > **Node Pools**.
    
2.  On the **Node Pools** page, find the **Node Pool**, click **Edit** on the right in the Actions column, expand the **Advanced Options** and change the node pool image by selecting a custom image beside **Custom Image**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1216604271/p836806.png)
    
3.  You can see that the **Operating System** column on the **Node Pools** page is updated to **Custom Image**.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4575604271/p832620.png)
    

### Step 4: Modify the initialization script for the node to receive parameters related to Alibaba Cloud

**Note**

-   You must clean up the residual kubelet certificates in the custom image as shown in the seventh line of the script.
    
-   If you have an existing custom node pool, refer to [Step 1](#BHeY1) to configure the download URL of the custom script.
    

1.  Use the following content to create or update the file join-ecs-node.sh. Since the custom image contains the necessary tool packages and dependencies for the node, the custom script only receives and updates the node pool parameters.
    
    ```
    echo "The node providerid is $ALIBABA_CLOUD_PROVIDER_ID"
    echo "The node name is $ALIBABA_CLOUD_NODE_NAME"
    echo "The node labels are $ALIBABA_CLOUD_LABELS"
    echo "The node taints are $ALIBABA_CLOUD_TAINTS"
    systemctl stop kubelet.service
    echo "Delete old kubelet pki" # Need to delete old node certificates
    rm -rf /var/lib/kubelet/pki/*
    echo "Add kubelet service config"
    # Configure kubelet service
    cat > /usr/lib/systemd/system/kubelet.service << EOF
    
    [Unit]
    Description=Kubernetes Kubelet
    Documentation=https://github.com/kubernetes/kubernetes
    After=network-online.target firewalld.service containerd.service
    Wants=network-online.target
    Requires=containerd.service
    
    [Service]
    ExecStart=/usr/local/bin/kubelet \\
        --node-ip=${ALIBABA_CLOUD_NODE_NAME} \\
        --hostname-override=${ALIBABA_CLOUD_NODE_NAME} \\
        --node-labels=${ALIBABA_CLOUD_LABELS} \\
        --provider-id=${ALIBABA_CLOUD_PROVIDER_ID} \\
        --register-with-taints=${ALIBABA_CLOUD_TAINTS} \\
        --bootstrap-kubeconfig=/etc/kubernetes/bootstrap-kubelet.kubeconfig  \\
        --kubeconfig=/etc/kubernetes/kubelet.kubeconfig \\
        --config=/etc/kubernetes/kubelet-conf.yml \\
        --container-runtime-endpoint=unix:///run/containerd/containerd.sock
    
    [Install]
    WantedBy=multi-user.target
    EOF
    
    systemctl daemon-reload
    # Start Kubelet Service
    systemctl start kubelet.service
    ```
    
2.  Update the script join-ecs-node.sh on OSS.
    

### Step 5: Scale out the node pool

1.  On the **Clusters** page, find the cluster that you want to manage and click its name. In the left-side pane, choose **Nodes** > **Node Pools**.
    
2.  Go to the **Node Pools** page, find the node pool, click **More** > **Scale** on the right in the Actions column, and add a new node.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4575604271/p832311.png)
    
    The status shows that both nodes are normal, which indicates that the elastic node pool is built.
    
3.  You can configure an auto-scaling policy for the node pool. For more information, see [Configure auto scaling](/help/en/ack/distributed-cloud-container-platform-for-kubernetes/user-guide/configure-auto-scaling).
